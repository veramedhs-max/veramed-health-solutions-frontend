import React, { useEffect, useState, useRef } from "react";
import { CheckCircle, Loader2, UploadCloud, Globe, Phone, FileText, X } from "lucide-react";
import languageImg from "@/assets/c&l.jpeg";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import "country-select-js/build/css/countrySelect.css";
import $ from "jquery";
import "country-select-js";
import img1 from "../assets/c1.jpg";
import img2 from "../assets/c2.jpeg";
import { apiClient } from "@/lib/apiClient";
import toast from "react-hot-toast";

// ⭐ FOOTER IMPORT
import Footer from "@/components/Footer";

const CultureAndLanguage: React.FC = () => {
  const [formData, setFormData] = useState<{
    fullName: string;
    phone: string;
    country: string;
    message: string;
    files: File[];
  }>({
    fullName: "",
    phone: "",
    country: "",
    message: "",
    files: [],
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const countryInputRef = useRef<HTMLInputElement | null>(null);

  // jQuery Country Select Logic
  useEffect(() => {
    if (countryInputRef.current) {
      const $input = $(countryInputRef.current);
      
      $input.countrySelect({
        preferredCountries: ["in", "us", "gb", "ae"],
        responsiveDropdown: true,
      });

      if (!formData.country) {
        const countryData = $input.countrySelect("getSelectedCountryData");
        setFormData((prev) => ({ ...prev, country: countryData.name || "" }));
      }

      $input.on("countrychange", function (_e: any) {
        const countryData = $input.countrySelect("getSelectedCountryData");
        setFormData((prev) => ({
          ...prev,
          country: countryData?.name || "",
        }));
      });

      $(".country-select").css({ width: "100%" });
    }

    return () => {
      if (countryInputRef.current) {
        $(countryInputRef.current).off("countrychange");
      }
    };
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    else if (formData.fullName.length < 2) newErrors.fullName = "Name must be at least 2 characters.";

    if (!formData.phone || formData.phone.length < 5) newErrors.phone = "Phone number is required.";
    if (!formData.country.trim()) newErrors.country = "Country is required.";
    if (!formData.message.trim()) newErrors.message = "Please describe your language or cultural needs.";
    if (formData.files.length > 10) newErrors.files = "You can upload up to 10 files only.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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

      formData.files.forEach((file) => {
        dataToSend.append("files", file);
      });

      await apiClient.post("/api/v1/veramed/create-culture-and-language", dataToSend);

      toast.success("Request submitted successfully!", { id: toastId });
      
      setFormData({ fullName: "", phone: "", country: "", message: "", files: [] });
      setErrors({});

      if (countryInputRef.current) {
        $(countryInputRef.current).countrySelect("selectCountry", "in");
      }

    } catch (err: any) {
      console.error("API call failed:", err);
      const serverMsg = err?.response?.data?.message || "Failed to submit request.";
      toast.error(serverMsg, { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) processFiles(Array.from(e.target.files));
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    processFiles(Array.from(e.dataTransfer.files));
  };

  const processFiles = (newFiles: File[]) => {
    const validFiles = newFiles.filter((file) => file.size <= 10 * 1024 * 1024);
    const oversized = newFiles.filter((file) => file.size > 10 * 1024 * 1024);

    if (oversized.length > 0) toast.error("Some files were too large (max 10MB) and skipped.");

    setFormData((prev) => ({
      ...prev,
      files: [...prev.files, ...validFiles].slice(0, 10),
    }));
  };

  const removeFile = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index),
    }));
  };

  // Custom styles for jQuery inputs to match Tailwind
  const inputBaseClass = "w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 block p-3.5 transition-all duration-200 outline-none";
  const labelClass = "block mb-2 text-sm font-semibold text-gray-700";

  return (
    <>
      <style>{`
        .country-select .country-list { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); border-radius: 0.75rem; border: none; }
        .country-select input { width: 100% !important; background-color: #F9FAFB; border: 1px solid #E5E7EB; border-radius: 0.75rem; padding: 14px 14px 14px 45px; height: auto; }
        .country-select input:focus { border-color: #3B82F6; box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1); outline: none; background-color: #FFFFFF; }
        .react-tel-input .form-control { width: 100% !important; height: 50px !important; border-radius: 0.75rem !important; background-color: #F9FAFB !important; border-color: #E5E7EB !important; }
        .react-tel-input .form-control:focus { background-color: #fff !important; border-color: #3b82f6 !important; box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1) !important; }
      `}</style>

      <div className="bg-gradient-to-b from-blue-50/50 to-white min-h-screen pt-20 pb-20 px-4 md:px-8">
        
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
            <Globe className="w-4 h-4 mr-2" />
            Global Patient Support
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Bridging Cultures, <br />
            <span className="text-blue-600">Connecting Care</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Language shouldn't be a barrier to world-class healthcare. Our interpreters and cultural liaisons ensure you feel understood, respected, and comfortable every step of the way.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
              <Phone className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Interpreter Services</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Access real-time interpretation in over 50 languages for medical consultations and procedures.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> 24/7 Availability
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Medical Certified
              </li>
            </ul>
          </div>

          {/* Middle Image Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-full min-h-[300px]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
            <img 
              src={languageImg} 
              alt="Cultural Support" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute bottom-6 left-6 z-20 text-white">
              <h3 className="text-xl font-bold mb-1">Cultural Liaison</h3>
              <p className="text-sm text-gray-200">Personalized orientation & support.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 text-purple-600">
              <FileText className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Document Translation</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              We translate your medical history and reports to ensure doctors have precise information.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Accurate Terminology
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Fast Turnaround
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content: Form & Visuals */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Section */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Request Assistance</h2>
              <p className="text-gray-500 mt-2">Fill out the form below and our team will coordinate your linguistic and cultural needs.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="col-span-1 md:col-span-2">
                  <label className={labelClass}>Full Name</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value.replace(/[0-9]/g, "") })}
                    className={`${inputBaseClass} ${errors.fullName ? "border-red-500 ring-red-100" : ""}`}
                    placeholder="e.g. John Doe"
                    disabled={loading}
                  />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1 font-medium">{errors.fullName}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className={labelClass}>Phone Number</label>
                  <div className={errors.phone ? "border rounded-xl border-red-500" : ""}>
                    <PhoneInput
                      country={"in"}
                      value={formData.phone}
                      onChange={(value) => setFormData({ ...formData, phone: value })}
                      disabled={loading}
                      buttonClass="!bg-transparent !border-0 !rounded-l-xl"
                      dropdownClass="!shadow-lg !rounded-xl"
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone}</p>}
                </div>

                {/* Country */}
                <div>
                  <label className={labelClass}>Country</label>
                  <div className={errors.country ? "border rounded-xl border-red-500" : ""}>
                    <input
                      ref={countryInputRef}
                      type="text"
                      readOnly
                      className="w-full"
                      disabled={loading}
                    />
                  </div>
                  {errors.country && <p className="text-red-500 text-xs mt-1 font-medium">{errors.country}</p>}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className={labelClass}>Describe Your Needs</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${inputBaseClass} h-32 resize-none ${errors.message ? "border-red-500" : ""}`}
                  placeholder="Tell us about the language support or cultural preferences you require..."
                  disabled={loading}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1 font-medium">{errors.message}</p>}
              </div>

              {/* Enhanced File Upload */}
              <div>
                <label className={labelClass}>
                  Upload Documents <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                
                <div
                  className={`relative group border-2 border-dashed rounded-2xl p-8 text-center transition-all cursor-pointer 
                    ${errors.files ? "border-red-300 bg-red-50" : "border-gray-300 bg-gray-50 hover:bg-blue-50 hover:border-blue-400"}`}
                  onClick={() => !loading && document.getElementById("fileInput")?.click()}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleDrop}
                >
                  <div className="flex flex-col items-center justify-center space-y-3">
                    <div className="p-3 bg-white rounded-full shadow-sm">
                      <UploadCloud className={`w-8 h-8 ${errors.files ? "text-red-400" : "text-blue-500"}`} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        <span className="text-blue-600 hover:underline">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG or DOCX (Max 10MB)</p>
                    </div>
                  </div>

                  <input
                    id="fileInput"
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                    disabled={loading}
                  />
                </div>

                {/* File List */}
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
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.01] transition-all duration-200 flex items-center justify-center"
                disabled={loading}
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
          </div>

          {/* Visuals Sidebar (Sticky) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <div className="bg-blue-600 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-500 rounded-full blur-2xl opacity-50"></div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">Why Choose Us?</h3>
              <ul className="space-y-4 relative z-10">
                {[
                  "Native speakers for accurate medical translation.",
                  "Cultural sensitivity training for all staff.",
                  "Assistance with insurance & legal paperwork.",
                  "Support available before arrival & post-treatment."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-200 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-blue-50 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-6">
              <img
                src={img1}
                alt="Patient Care"
                className="w-full h-56 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
              />
              <img
                src={img2}
                alt="Medical Support"
                className="w-full h-56 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
              />
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default CultureAndLanguage;