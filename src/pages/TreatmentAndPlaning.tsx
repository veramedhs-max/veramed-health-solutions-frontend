import React, { useEffect, useState } from "react";
import { 
  CheckCircle, 
  Loader2, 
  ClipboardList, 
  Building2, 
  Stethoscope, 
  UploadCloud, 
  X,
  ArrowRight
} from "lucide-react"; 
import treatmentImg from "@/assets/p&t1.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import $ from "jquery";
import "country-select-js";
import "country-select-js/build/css/countrySelect.min.css";
import toast from "react-hot-toast";
import { apiClient } from "@/lib/apiClient";
import Footer from "@/components/Footer";

const TreatmentAndPlanning: React.FC = () => {
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

    if ($countryInput.length) {
      $countryInput.countrySelect({
        preferredCountries: ["in", "us", "gb"],
        responsiveDropdown: true,
      });

      // Force width for the jQuery plugin container
      $(".country-select").css("width", "100%");

      const handleCountryChange = () => {
        const countryData = $countryInput.countrySelect("getSelectedCountryData");
        if (countryData && countryData.name) {
          setFormData((prev) => ({
            ...prev,
            country: countryData.name,
          }));
        }
      };

      // Set initial value
      const initialData = $countryInput.countrySelect("getSelectedCountryData");
      if (initialData && initialData.name) {
        setFormData((prev) => ({ ...prev, country: initialData.name }));
      }

      $countryInput.on("change blur", handleCountryChange);
      return () => $countryInput.off("change blur", handleCountryChange);
    }
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    else if (formData.fullName.length < 2) newErrors.fullName = "Full name must be at least 2 characters.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.country.trim()) newErrors.country = "Country is required.";
    if (!formData.message.trim()) newErrors.message = "Please describe your treatment needs.";
    if (formData.files.length > 10) newErrors.files = "You can upload up to 10 files only.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      const validFiles = newFiles.filter((file) => file.size <= 10 * 1024 * 1024);
      const oversized = newFiles.filter((file) => file.size > 10 * 1024 * 1024);

      if (oversized.length > 0) toast.error("Some files were too large (max 10MB each) and were skipped.");

      setFormData((prev) => ({
        ...prev,
        files: [...prev.files, ...validFiles].slice(0, 10),
      }));
      
      if (errors.files) {
        const newErr = { ...errors };
        delete newErr.files;
        setErrors(newErr);
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
      toast.error("Please fill all required fields correctly.");
      return;
    }

    setLoading(true);
    const toastId = toast.loading("Submitting treatment plan request...");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("fullName", formData.fullName);
      const formattedPhone = formData.phone.startsWith("+") ? formData.phone : `+${formData.phone}`;
      formDataToSend.append("phone", formattedPhone);
      formDataToSend.append("country", formData.country);
      formDataToSend.append("message", formData.message);
      formData.files.forEach((file) => formDataToSend.append("files", file));

      await apiClient.post("/api/v1/veramed/create-culture-and-language", formDataToSend);

      toast.success("Request submitted successfully!", { id: toastId });
      setSubmitted(true);
      
      setFormData({ fullName: "", phone: "", country: "", message: "", files: [] });
      setErrors({});

      const $countryInput = $("#countryInput") as any;
      if ($countryInput.length) {
        $countryInput.countrySelect("selectCountry", "in");
      }

    } catch (error: any) {
      console.error("❌ Error submitting form:", error);
      const serverMsg = error?.response?.data?.message || "Something went wrong. Please try again later.";
      toast.error(serverMsg, { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  // Shared Input Styles
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
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-6">
            <ClipboardList className="w-4 h-4 mr-2" />
            Treatment Planning
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Personalized Care <br />
            <span className="text-blue-600">& Hospital Selection</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We analyze your medical reports to connect you with world-class experts and accredited hospitals tailored to your specific needs.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
              <ClipboardList className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Plans</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Tailored treatment pathways designed by medical experts after reviewing your history.
            </p>
          </div>

          {/* Card 2 (Image) */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl min-h-[300px] group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
            <img src={treatmentImg} alt="Treatment" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute bottom-6 left-6 z-20 text-white">
              <h3 className="text-lg font-bold">World Class Care</h3>
              <p className="text-sm text-gray-200">Access to JCI accredited hospitals.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6 text-indigo-600">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Cost Comparison</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Transparent cost estimates from multiple hospitals to help you make an informed decision.
            </p>
          </div>
        </div>

        {/* Main Content: Form & Visuals */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Section (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Get Your Treatment Plan</h2>
              <p className="text-gray-500 mt-2">Fill in your details below. Our medical team will review your case and suggest the best options.</p>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center p-10 bg-green-50 rounded-2xl border border-green-200 text-center animate-fade-in">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">Request Submitted!</h3>
                <p className="text-green-700">We have received your details. A medical coordinator will contact you shortly with your personalized plan.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 flex items-center text-sm font-semibold text-green-700 hover:text-green-800 transition-colors"
                >
                  Submit another request <ArrowRight className="w-4 h-4 ml-1" />
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
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value.replace(/[0-9]/g, "") })}
                      className={`${inputClass} ${errors.fullName ? "border-red-500 ring-red-100" : ""}`}
                      placeholder="e.g. Jane Doe"
                      disabled={loading}
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1 font-medium">{errors.fullName}</p>}
                  </div>

                  {/* Country (jQuery Wrapper) */}
                  <div>
                    <label className={labelClass}>Country</label>
                    <div className={errors.country ? "border rounded-xl border-red-500" : ""}>
                      <input
                        id="countryInput"
                        type="text"
                        placeholder="Select Country"
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
                        country={"in"}
                        value={formData.phone}
                        onChange={(phone) => setFormData({ ...formData, phone })}
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
                  <label className={labelClass}>Describe Your Medical Condition</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${inputClass} h-32 resize-none ${errors.message ? "border-red-500" : ""}`}
                    placeholder="Please provide details about your diagnosis, current symptoms, and what treatment you are looking for..."
                    disabled={loading}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1 font-medium">{errors.message}</p>}
                </div>

                {/* File Upload */}
                <div>
                  <label className={labelClass}>
                    Upload Medical Reports <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  
                  <div
                    className="relative group border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center bg-gray-50 hover:bg-blue-50 hover:border-blue-400 transition-all cursor-pointer"
                    onClick={() => !loading && document.getElementById("fileInput")?.click()}
                  >
                    <div className="flex flex-col items-center justify-center space-y-3">
                      <div className="p-3 bg-white rounded-full shadow-sm">
                        <UploadCloud className="w-8 h-8 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">
                          <span className="text-blue-600 hover:underline">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 mt-1">Images, PDF, DOCX (Max 10MB)</p>
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
                      Analyzing...
                    </>
                  ) : (
                    "Request Treatment Plan"
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Sticky Sidebar (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            
            {/* Value Prop Card */}
            <div className="bg-gradient-to-br from-indigo-600 to-blue-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
               {/* Decorative elements */}
              <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl"></div>

              <div className="flex items-center space-x-3 mb-5 relative z-10">
                <Stethoscope className="w-6 h-6 text-blue-200" />
                <h3 className="text-xl font-bold">Why Plan With Us?</h3>
              </div>
              
              <ul className="space-y-4 relative z-10">
                {[
                  "Unbiased hospital recommendations.",
                  "Fast-track appointment scheduling.",
                  "Second opinions from top specialists.",
                  "Assistance with medical visa letters."
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-indigo-50 text-sm leading-relaxed">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Masonry Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <img src={img1} alt="Hospital" className="w-full h-48 object-cover rounded-2xl shadow-lg" />
              </div>
              <img src={img2} alt="Doctor" className="w-full h-40 object-cover rounded-2xl shadow-md" />
              <img src={img3} alt="Consultation" className="w-full h-40 object-cover rounded-2xl shadow-md" />
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default TreatmentAndPlanning;