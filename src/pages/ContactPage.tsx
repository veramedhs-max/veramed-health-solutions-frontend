import { useState, useRef, useEffect } from "react";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Upload, 
  X, 
  File as FileIcon, 
  Loader2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock 
} from "lucide-react";
import { useConsultationStore } from "@/store/consultationStore";
import SEO from "@/components/SEO"; // ✅ SEO Component Imported

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// --- Constants ---
const ALLOWED_FILE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const ACCEPTED_FILES_STRING = ".png, .jpg, .jpeg, .pdf, .doc, .docx";

const ContactPage = () => {
  // --- Store & State ---
  const { isLoading, isSuccess, error, submitConsultation, reset } =
    useConsultationStore();

  const [fullName, setFullName] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [attachments, setAttachments] = useState<File[]>([]);
  const [filePreviews, setFilePreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fullNameRegex = /^[A-Za-z\s.'-]{2,50}$/;

  // --- Effects ---
  useEffect(() => {
    if (isSuccess) {
      toast.success("Request sent successfully!");
      setFullName("");
      setPhone("");
      setCountryCode("+91");
      setMessage("");
      handleRemoveAllFiles();
      reset();
    }
    if (error) {
      toast.error(error);
      reset();
    }
  }, [isSuccess, error, reset]);

  // --- Handlers ---
  const handlePhoneChange = (value: string, data: any) => {
    const dial = `+${data.dialCode}`;
    setCountryCode(dial);
    const pureNumber = value.replace(data.dialCode, "");
    setPhone(pureNumber);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (!selectedFiles) return;

    const newFiles = Array.from(selectedFiles);
    const maxSizeInBytes = 10 * 1024 * 1024;

    for (const file of newFiles) {
      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        toast.error(`Invalid file type: ${file.name}`);
        continue;
      }

      if (file.size > maxSizeInBytes) {
        toast.error(`File size exceeds 10MB: ${file.name}`);
        continue;
      }

      setAttachments((prev) => [...prev, file]);

      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () =>
          setFilePreviews((prev) => [...prev, reader.result as string]);
        reader.readAsDataURL(file);
      } else {
        setFilePreviews((prev) => [...prev, ""]);
      }
    }
  };

  const handleRemoveFile = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
    setFilePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleRemoveAllFiles = () => {
    setAttachments([]);
    setFilePreviews([]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!fullName.trim()) return toast.error("Please enter your full name.");
    if (!fullNameRegex.test(fullName)) return toast.error("Enter a valid full name.");

    if (!phone.trim()) return toast.error("Enter your phone number.");
    if (phone.length < 5 || phone.length > 15)
      return toast.error("Please enter a valid phone number.");

    const formData = new FormData();
    formData.append("fullName", fullName.trim());
    formData.append("phone", `${countryCode}${phone.trim()}`);
    formData.append("message", message.trim());
    formData.append("email", "veramedhs@gmail.com");

    attachments.forEach((file) => formData.append("attachments[]", file));

    await submitConsultation(formData);
  };

  return (
    <>
      {/* --- SEO INTEGRATION --- */}
      <SEO
        title="Contact Us | Veramed Health Solutions"
        description="Get in touch with Veramed Health Solutions for free medical consultation, visa assistance, and treatment planning in India. Visit our Gurugram office or call us 24/7."
        keywords="contact veramed, medical tourism india contact, free medical consultation, health solutions gurgaon, medical visa assistance"
        canonical="https://veramedhealthsolutions.com/contact"
      />

      <section className="py-8 sm:py-20 bg-background min-h-screen">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* --- Page Header --- */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in
              <span className="text-primary"> Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about our services? Our team is ready to provide you with expert guidance and support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* --- Left Column: Contact Information --- */}
            <div className="flex flex-col space-y-8">
              <div className="bg-muted/30 p-8 rounded-2xl border border-border/50">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                      {/* Location */}
                      <div className="flex items-start space-x-4">
                          <div className="p-3 bg-primary/10 rounded-lg text-primary">
                              <MapPin className="w-6 h-6" />
                          </div>
                          <div>
                              <h4 className="font-semibold text-foreground">Our Location</h4>
                              <p className="text-muted-foreground">
                                  Sector 46, Gurugram<br />
                                  Haryana, India
                              </p>
                          </div>
                      </div>

                      {/* Email */}
                      <div className="flex items-start space-x-4">
                          <div className="p-3 bg-primary/10 rounded-lg text-primary">
                              <Mail className="w-6 h-6" />
                          </div>
                          <div>
                              <h4 className="font-semibold text-foreground">Email Us</h4>
                              <p className="text-muted-foreground">
                                  <a href="mailto:veramedhs@gmail.com" className="hover:text-primary transition">veramedhs@gmail.com</a>
                              </p>
                          </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-start space-x-4">
                          <div className="p-3 bg-primary/10 rounded-lg text-primary">
                              <Phone className="w-6 h-6" />
                          </div>
                          <div>
                              <h4 className="font-semibold text-foreground">Call Us</h4>
                              <p className="text-muted-foreground">
                                  <a href="tel:+919953306560" className="hover:text-primary transition">+91 995 330 6560</a>
                              </p>
                          </div>
                      </div>

                      {/* Working Hours */}
                      <div className="flex items-start space-x-4">
                          <div className="p-3 bg-primary/10 rounded-lg text-primary">
                              <Clock className="w-6 h-6" />
                          </div>
                          <div>
                              <h4 className="font-semibold text-foreground">Working Hours</h4>
                              <p className="text-muted-foreground">Mon - Fri: 10:00 AM - 6:30 PM<br/>Sat: 10:00 AM - 6:30 PM</p>
                          </div>
                      </div>
                  </div>
              </div>

              {/* --- Integrated Free Google Map --- */}
              <div className="w-full h-72 rounded-2xl overflow-hidden border border-border/50 shadow-sm relative">
                  <iframe 
                      width="100%" 
                      height="100%" 
                      id="gmap_canvas" 
                      src="https://maps.google.com/maps?q=28.43767067041565,77.0663185&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                      frameBorder="0" 
                      scrolling="no" 
                      marginHeight={0} 
                      marginWidth={0}
                      className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                      title="Veramed Location"
                  ></iframe>
              </div>
            </div>

            {/* --- Right Column: The Form --- */}
            <Card className="shadow-lg border-border/60">
              <CardHeader className="p-8 pb-4">
                  <CardTitle className="text-2xl font-bold">Send us a Message</CardTitle>
                  <CardDescription>
                      Fill out the form below for a free consultation.
                  </CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-4">
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      value={fullName}
                      onChange={(e) =>
                        setFullName(e.target.value.replace(/[^A-Za-z\s.'-]/g, ""))
                      }
                      placeholder="John Doe"
                      required
                      disabled={isLoading}
                      className="h-11"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-2">
                    <Label>Phone Number</Label>
                    <PhoneInput
                      country={"in"}
                      value={countryCode + phone}
                      onChange={handlePhoneChange}
                      inputProps={{
                        name: "phone",
                        required: true,
                      }}
                      containerClass="w-full"
                      inputClass="!w-full !h-11 !text-base !py-2 !pl-[48px] !border !border-input !bg-background !rounded-md focus:!ring-2 focus:!ring-ring focus:!border-primary"
                      buttonClass="!bg-background !border-input !rounded-l-md hover:!bg-muted"
                      dropdownClass="!bg-background !text-foreground"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please describe your medical needs..."
                      className="min-h-[120px] resize-none"
                      disabled={isLoading}
                    />
                  </div>

                  {/* File Upload */}
                  <div className="space-y-2">
                    <Label>Upload Medical Documents (Optional)</Label>

                    {attachments.length > 0 ? (
                      <div className="w-full p-4 border rounded-lg space-y-3 bg-muted/20">
                        {attachments.map((attachment, index) => (
                          <div key={index} className="flex items-center justify-between bg-background p-2 rounded border shadow-sm">
                            <div className="flex items-center gap-3 overflow-hidden">
                              {filePreviews[index] ? (
                                <img
                                  src={filePreviews[index]}
                                  className="w-10 h-10 object-cover rounded-md border"
                                  alt="preview"
                                />
                              ) : (
                                <div className="w-10 h-10 bg-muted flex items-center justify-center rounded-md">
                                  <FileIcon className="w-5 h-5 text-muted-foreground" />
                                </div>
                              )}
                              <div className="flex flex-col min-w-0">
                                  <p className="text-sm font-medium truncate max-w-[150px]">{attachment.name}</p>
                                  <p className="text-xs text-muted-foreground">{(attachment.size / 1024 / 1024).toFixed(2)} MB</p>
                              </div>
                            </div>

                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="text-muted-foreground hover:text-destructive"
                              onClick={() => handleRemoveFile(index)}
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                        <Button 
                          type="button" 
                          variant="outline" 
                          size="sm" 
                          className="w-full mt-2"
                          onClick={() => !isLoading && fileInputRef.current?.click()}
                        >
                          <Upload className="w-4 h-4 mr-2" /> Add More Files
                        </Button>
                      </div>
                    ) : (
                      <div
                        className="
                          relative border-2 border-dashed border-input hover:border-primary/50 rounded-xl
                          h-32 flex flex-col items-center justify-center
                          cursor-pointer hover:bg-muted/50 transition-colors duration-200 group
                        "
                        onClick={() => !isLoading && fileInputRef.current?.click()}
                      >
                        <Input
                          ref={fileInputRef}
                          type="file"
                          accept={ACCEPTED_FILES_STRING}
                          multiple
                          className="absolute inset-0 opacity-0 cursor-pointer"
                          onChange={handleFileChange}
                        />

                        <div className="p-3 bg-primary/10 rounded-full mb-2 group-hover:scale-110 transition-transform">
                          <Upload className="w-6 h-6 text-primary" />
                        </div>
                        <p className="text-sm font-semibold text-foreground">Click to upload documents</p>
                        <p className="text-xs text-muted-foreground mt-1">JPG, PNG, PDF, DOC (Max 10MB)</p>
                      </div>
                    )}
                  </div>

                  {/* Submit */}
                  <Button className="w-full h-11 text-base" type="submit" variant="medical" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin mr-2" /> Submitting...
                      </>
                    ) : (
                      "Submit Request"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;