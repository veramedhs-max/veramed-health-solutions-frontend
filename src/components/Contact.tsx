import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast, Toaster } from 'react-hot-toast';
import { apiClient } from '@/lib/apiClient'; // Ensure this path is correct

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Calendar,
  Globe,
  Loader2 // Imported Loader icon
} from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    preferredCountry: "",
    medicalCondition: "",
    additionalInfo: "",
  });

  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Handle text field changes
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle phone input changes
  const handlePhoneChange = (value: string, data: any) => {
    const dial = `+${data.dialCode}`;
    // react-phone-input-2 value usually includes the dialcode, so we strip it to get the raw number
    // Caution: slice is safer than replace for dial codes to avoid replacing numbers in the body
    const numberOnly = value.slice(data.dialCode.length); 

    setCountryCode(dial);
    setPhoneNumber(numberOnly);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Basic validation
    if (!phoneNumber) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    setIsSubmitting(true);
    toast.loading("Sending consultation request...");

    // Construct the payload exactly as required by the backend
    const payload = {
      fullName: formData.fullName,
      email: formData.email,
      phone: `${countryCode}${phoneNumber}`, // Combine code and number
      preferredCountry: formData.preferredCountry,
      medicalCondition: formData.medicalCondition,
      additionalInfo: formData.additionalInfo,
    };

    try {
      // 👇 REPLACE WITH YOUR ACTUAL ENDPOINT URL
      await apiClient.post('/api/v1/veramed/consultation', payload); 

      toast.dismiss(); // Remove loading toast
      toast.success("Request sent! We will contact you soon.");

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        preferredCountry: "",
        medicalCondition: "",
        additionalInfo: "",
      });
      setPhoneNumber("");
      setCountryCode("+91");

    } catch (error: any) {
      console.error("Submission Error:", error);
      toast.dismiss();
      toast.error(error?.response?.data?.message || "Failed to submit request.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      {/* Toast Notification Container */}
      <Toaster position="top-center" />

      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Begin Your <span className="text-primary">Healthcare Journey?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our expert team for a personalized consultation.
            We're here to guide you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">

          {/* LEFT INFO CARDS */}
          <div className="space-y-6">
            <Card className="p-6 hover:shadow-card-medical">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a href="tel:+919953306560" className="text-muted-foreground">+91-9953306560</a>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Speak directly with our medical tourism experts</p>
            </Card>

            <Card className="p-6 hover:shadow-card-medical">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-medical-teal rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href="mailto:veramedhs@gmail.com" className="text-muted-foreground">veramedhs@gmail.com</a>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Send us your medical requirements</p>
            </Card>

            <Card className="p-6 hover:shadow-card-medical">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-trust-blue rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Office</h4>
                  <p className="text-muted-foreground">Gurgaon, India</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Visit our headquarters</p>
            </Card>

            <Card className="p-6 hover:shadow-card-medical">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent rounded-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Hours</h4>
                  <p className="text-muted-foreground">24/7 Support</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Round-the-clock assistance</p>
            </Card>
          </div>

          {/* CONTACT FORM */}
          <div className="lg:col-span-2">
            <Card className="p-8 shadow-card-medical">
              <h3 className="text-2xl font-bold mb-6">Get Your Free Consultation</h3>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input
                      name="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* ⭐ Phone Input Library ⭐ */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <PhoneInput
                      country="in"
                      value={countryCode + phoneNumber}
                      onChange={handlePhoneChange}
                      inputProps={{ required: true, disabled: isSubmitting }}
                      containerClass="w-full"
                      inputClass="!w-full !py-3 !text-sm !border !border-gray-300 !rounded-lg"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Country</label>
                    <Input
                      name="preferredCountry"
                      placeholder="India, Singapore, Thailand..."
                      value={formData.preferredCountry}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {/* Medical Condition */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Medical Condition / Treatment Required *
                  </label>
                  <Input
                    name="medicalCondition"
                    placeholder="Describe your condition..."
                    value={formData.medicalCondition}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Additional Info */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Additional Information
                  </label>
                  <Textarea
                    name="additionalInfo"
                    placeholder="Any extra details..."
                    rows={4}
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  />
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    type="submit" 
                    variant="medical" 
                    className="flex-1 group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2 group-hover:translate-x-1" />
                        Send Consultation Request
                      </>
                    )}
                  </Button>

                  <Button 
                    type="button" 
                    variant="outline" 
                    className="flex-1"
                    disabled={isSubmitting}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Call Back
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>

        {/* BOTTOM CARD ACTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 text-center hover:shadow-card-medical">
            <div className="p-4 bg-gradient-primary rounded-full w-16 h-16 mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-white mx-auto" />
            </div>
            <h4 className="font-semibold mb-2">Live Chat</h4>
            <p className="text-sm text-muted-foreground mb-4">Instant support</p>
            <a href="https://wa.me/9953306560">
              <Button variant="outline" size="sm">Start Chat</Button>
            </a>
          </Card>

          <Card className="p-6 text-center hover:shadow-card-medical">
            <div className="p-4 bg-medical-teal rounded-full w-16 h-16 mx-auto mb-4">
              <Phone className="w-8 h-8 text-white mx-auto" />
            </div>
            <h4 className="font-semibold mb-2">Emergency Support</h4>
            <p className="text-sm text-muted-foreground mb-4">24/7 medical assistance</p>
            <a href="tel:+919953306560">
              <Button variant="medical" size="sm">Call Now</Button>
            </a>
          </Card>

          <Card className="p-6 text-center hover:shadow-card-medical">
            <div className="p-4 bg-trust-blue rounded-full w-16 h-16 mx-auto mb-4">
              <Globe className="w-8 h-8 text-white mx-auto" />
            </div>
            <h4 className="font-semibold mb-2">Find Doctors</h4>
            <p className="text-sm text-muted-foreground mb-4">Browse specialists</p>
            <a href="https://mymedicalassistant.africa/find-doctor" target="_blank" className="w-full border border-primary rounded-md px-4 py-2 text-primary hover:bg-primary hover:text-white" >Browse</a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;