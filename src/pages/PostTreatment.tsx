import React, { useEffect, useState } from "react";
import { 
  CheckCircle, 
  Loader2, 
  Activity, 
  Video, 
  FileText, 
  UploadCloud, 
  X,
  Stethoscope
} from "lucide-react"; 
import postTreatmentImg from "@/assets/serviceSection.jpeg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import img1 from "../assets/1.jpeg";
import img2 from "../assets/3.jpeg";
import img3 from "../assets/c2.jpeg";
import "country-select-js";
import "country-select-js/build/css/countrySelect.min.css";
import $ from "jquery";
import toast from "react-hot-toast";
import { apiClient } from "@/lib/apiClient";
import Footer from "@/components/Footer";

const PostTreatment: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    country: "",
    message: "",
    files: [] as File[],
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const $countryInput = $("#countryInput") as any;

    $countryInput.countrySelect({
      preferredCountries: ["in", "us", "gb"],
      responsiveDropdown: true,
    });

    // Fix width via JS for the plugin
    $(".country-select").css("width", "100%");

    const onCountryChange = () => {
      const countryData = $countryInput.countrySelect("getSelectedCountryData");
      setFormData((prev) => ({
        ...prev,
        country: countryData.name || "",
        phone: countryData.iso2 ? `+${countryData.dialCode}` : prev.phone,
      }));
    };

    // Set initial value
    const initialCountryData = $countryInput.countrySelect("getSelectedCountryData");
    if (initialCountryData && initialCountryData.name) {
      setFormData((prev) => ({
        ...prev,
        country: initialCountryData.name,
        phone: initialCountryData.iso2 ? `+${initialCountryData.dialCode}` : prev.phone,
      }));
    }

    $countryInput.on("countrychange", onCountryChange);

    return () => {
      $countryInput.off("countrychange", onCountryChange);
    };
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    else if (formData.fullName.length < 2) newErrors.fullName = "Full name must be at least 2 characters.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.country.trim()) newErrors.country = "Country is required.";
    if (!formData.message.trim()) newErrors.message = "Please describe your follow-up needs.";
    if (formData.files.length > 10) newErrors.files = "You can upload up to 10 files only.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      const validFiles = newFiles.filter(f => f.size <= 10 * 1024 * 1024);

      if (validFiles.length !== newFiles.length) {
        toast.error("Some files were too large (>10MB) and were skipped.");
      }
      setFormData((prev) => ({ ...prev, files: [...prev.files, ...validFiles].slice(0, 10) }));
      if (errors.files) {
        const updated = { ...errors };
        delete updated.files;
        setErrors(updated);
      }
    }
  };

  const removeFile = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please correct the errors in the form.");
      return;
    }

    setLoading(true);
    const toastId = toast.loading("Submitting request...");

    try {
      const dataToSend = new FormData();
      dataToSend.append("fullName", formData.fullName);
      const formattedPhone = formData.phone.startsWith("+") ? formData.phone : `+${formData.phone}`;
      dataToSend.append("phone", formattedPhone);
      dataToSend.append("country", formData.country);
      dataToSend.append("message", formData.message);
      formData.files.forEach((file) => dataToSend.append("files", file));

      await apiClient.post("/api/v1/veramed/create-culture-and-language", dataToSend);

      setSubmitted(true);
      toast.success("Request submitted successfully!", { id: toastId });
      
      setFormData({ fullName: "", phone: "", country: "", message: "", files: [] });
      setErrors({});

      const $countryInput = $("#countryInput") as any;
      if ($countryInput && $countryInput.length) {
        $countryInput.countrySelect("selectCountry", "in");
      }

    } catch (err: any) {
      console.error("Submission Error:", err);
      const serverMsg = err?.response?.data?.message || "Failed to submit request.";
      toast.error(serverMsg, { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  // Input styling classes
  const inputClass = "w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 block p-3.5 transition-all duration-200 outline-none";
  const labelClass = "block mb-2 text-sm font-semibold text-gray-700";

  return (
    <>
      <style>{`
        .country-select .country-list { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); border-radius: 0.75rem; border: none; width: 300px; }
        .country-select input { width: 100% !important; background-color: #F9FAFB; border: 1px solid #E5E7EB; border-radius: 0.75rem; padding: 14px 14px 14px 45px; height: auto; font-size: 0.875rem; color: #1f2937; }
        .country-select input:focus { border-color: #3B82F6; box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1); outline: none; background-color: #FFFFFF; }
        .react-tel-input .form-control { width: 100% !important; height: 50px !important; border-radius: 0.75rem !important; background-color: #F9FAFB !important; border-color: #E5E7EB !important; }
        .react-tel-input .form-control:focus { background-color: #fff !important; border-color: #3b82f6 !important; box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1) !important; }
        .country-select .flag-dropdown { border: none; background: transparent; }
        .country-select .flag-dropdown:hover { background: transparent; }
      `}</style>

      <div className="bg-gradient-to-b from-blue-50/50 to-white min-h-screen pt-20 pb-20 px-4 md:px-8">
        
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-6">
            <Activity className="w-4 h-4 mr-2" />
            Continuity of Care
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Post-Treatment <span className="text-blue-600">Follow-Up</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Recovery doesn't end when you leave the hospital. We provide continuous support, virtual consultations, and coordination with your local doctors to ensure long-term health.
          </p>
        </div>

        {/* Info Grid - Replaced List with Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
              <Video className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Virtual Consultations</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Regular online check-ins with your specialist to monitor recovery progress from the comfort of your home.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl min-h-[300px] group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
            <img src={postTreatmentImg} alt="Follow up care" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute bottom-6 left-6 z-20 text-white">
              <h3 className="text-lg font-bold">Seamless Recovery</h3>
              <p className="text-sm text-gray-200">We stay by your side.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 text-green-600">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Home Doctor Coord.</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We share medical reports and recovery guidelines with your local physician for unified care.
            </p>
          </div>
        </div>

        {/* Main Content: Form & Visuals */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Section */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Request Follow-Up</h2>
              <p className="text-gray-500 mt-2">Submit your details below to schedule a consultation or request medical reports.</p>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center p-10 bg-green-50 rounded-2xl border border-green-200 text-center animate-fade-in">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">Request Received!</h3>
                <p className="text-green-700">Our care team has received your request and will contact you shortly to coordinate next steps.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-green-700 underline hover:text-green-800"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="col-span-1 md:col-span-2">
                    <label className={labelClass}>Full Name</label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`${inputClass} ${errors.fullName ? "border-red-500 ring-red-100" : ""}`}
                      placeholder="Enter your full name"
                      disabled={loading}
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1 font-medium">{errors.fullName}</p>}
                  </div>

                  {/* Country (jQuery plugin wrapper) */}
                  <div>
                    <label className={labelClass}>Country</label>
                    <div className={errors.country ? "border rounded-xl border-red-500" : ""}>
                      <input
                        id="countryInput"
                        type="text"
                        placeholder="Select your country"
                        className="w-full"
                        disabled={loading}
                      />
                    </div>
                    {errors.country && <p className="text-red-500 text-xs mt-1 font-medium">{errors.country}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className={labelClass}>Phone Number</label>
                    <div className={errors.phone ? "border rounded-xl border-red-500" : ""}>
                      <PhoneInput
                        country={formData.country ? ($("#countryInput") as any).countrySelect("getSelectedCountryData")?.iso2 || "us" : "us"}
                        value={formData.phone}
                        onChange={(phone, countryData) => {
                          setFormData({
                            ...formData,
                            phone: phone,
                            country: (countryData as any)?.name || formData.country,
                          });
                          // Sync country select if phone changes country
                          const $countryInput = ($("#countryInput") as any);
                          if ((countryData as any)?.iso2) {
                            $countryInput.countrySelect("selectCountry", (countryData as any).iso2);
                          }
                        }}
                        disabled={loading}
                        buttonClass="!bg-transparent !border-0 !rounded-l-xl"
                        dropdownClass="!shadow-lg !rounded-xl"
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone}</p>}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className={labelClass}>Describe Your Needs</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${inputClass} h-32 resize-none ${errors.message ? "border-red-500" : ""}`}
                    placeholder="Tell us about your recovery status, questions for the doctor, or document needs..."
                    disabled={loading}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1 font-medium">{errors.message}</p>}
                </div>

                {/* File Upload */}
                <div>
                  <label className={labelClass}>
                    Upload Medical Documents <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  
                  <div className="relative group border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center bg-gray-50 hover:bg-blue-50 hover:border-blue-400 transition-all cursor-pointer">
                    <input
                      type="file"
                      multiple
                      onChange={handleFileChange}
                      className="hidden"
                      id="fileUpload"
                      disabled={loading}
                    />
                    <label htmlFor="fileUpload" className="cursor-pointer w-full h-full block">
                      <div className="flex flex-col items-center justify-center space-y-3">
                        <div className="p-3 bg-white rounded-full shadow-sm">
                          <UploadCloud className="w-8 h-8 text-blue-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700">
                            <span className="text-blue-600 hover:underline">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 mt-1">Image, PDF, DOCX (max. 10MB)</p>
                        </div>
                      </div>
                    </label>
                  </div>

                  {formData.files.length > 0 && (
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {formData.files.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
                          <div className="flex items-center overflow-hidden">
                            <span className="p-1.5 bg-gray-100 rounded mr-3">📎</span>
                            <span className="text-sm text-gray-700 truncate">{file.name}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                            disabled={loading}
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {errors.files && <p className="text-red-500 text-xs mt-1 font-medium">{errors.files}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.01] transition-all duration-200 flex items-center justify-center"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin mr-2" />
                      Processing Request...
                    </>
                  ) : (
                    "Submit Support Request"
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Sticky Visuals Sidebar */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
             {/* Info Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
               {/* Decorative Circle */}
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              
              <div className="flex items-center space-x-3 mb-4">
                <Stethoscope className="w-6 h-6 text-blue-200" />
                <h3 className="text-xl font-bold">Why Follow-Up Matters</h3>
              </div>
              
              <p className="text-blue-50 leading-relaxed text-sm mb-6">
                Post-treatment care reduces the risk of complications and ensures your recovery is on track. We bridge the gap between your treatment abroad and your life back home.
              </p>

              <div className="space-y-3">
                 <div className="flex items-center text-sm">
                    <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
                    <span>Monitor healing progress</span>
                 </div>
                 <div className="flex items-center text-sm">
                    <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
                    <span>Adjust medications if needed</span>
                 </div>
                 <div className="flex items-center text-sm">
                    <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
                    <span>Peace of mind for your family</span>
                 </div>
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid gap-6">
              <img src={img1} className="w-full h-56 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500" alt="Consultation" />
              <div className="grid grid-cols-2 gap-4">
                <img src={img2} className="w-full h-40 object-cover rounded-2xl shadow-md hover:shadow-lg transition-all duration-500" alt="Recovery" />
                <img src={img3} className="w-full h-40 object-cover rounded-2xl shadow-md hover:shadow-lg transition-all duration-500" alt="Care" />
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default PostTreatment;