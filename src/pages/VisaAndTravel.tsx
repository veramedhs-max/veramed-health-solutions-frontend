import React, { useState } from "react";
import { 
  CheckCircle, 
  Loader2, 
  Plane, 
  FileCheck, 
  MapPin, 
  UploadCloud, 
  FileText, 
  X,
  ShieldCheck 
} from "lucide-react";
import img from "../assets/visa1.jpeg";
import img2 from "../assets/Tourist-Visa.jpg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import toast, { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import { apiClient } from "@/lib/apiClient";

const VisaAndTravel: React.FC = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    phoneNumber: "",
    attendantName: "",
    attendantPassport: null as File | null,
    patientPassport: null as File | null,
    additionalMessage: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // ✅ Validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.patientName.trim()) newErrors.patientName = "Patient name is required.";
    else if (formData.patientName.trim().length < 2) newErrors.patientName = "Min 2 characters required.";

    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required.";

    if (!formData.attendantName.trim()) newErrors.attendantName = "Attendant name is required.";
    else if (formData.attendantName.trim().length < 2) newErrors.attendantName = "Min 2 characters required.";

    if (!formData.attendantPassport) newErrors.attendantPassport = "Attendant passport is required.";
    if (!formData.patientPassport) newErrors.patientPassport = "Patient passport is required.";

    return newErrors;
  };

  // ✅ Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the errors in the form.");
      return;
    }

    setErrors({});
    setLoading(true);
    const toastId = toast.loading("Submitting documents...");

    try {
      const data = new FormData();
      data.append("patientName", formData.patientName);
      const formattedPhone = formData.phoneNumber.startsWith("+") ? formData.phoneNumber : `+${formData.phoneNumber}`;
      data.append("phoneNumber", formattedPhone);
      data.append("attendantName", formData.attendantName);
      data.append("additionalMessage", formData.additionalMessage);

      if (formData.attendantPassport) data.append("attendantPassport", formData.attendantPassport);
      if (formData.patientPassport) data.append("patientPassport", formData.patientPassport);

      await apiClient.post("/api/v1/veramed/visa-and-travel", data);

      toast.success("Request submitted successfully!", { id: toastId });
      setSubmitted(true);

      setFormData({
        patientName: "",
        phoneNumber: "",
        attendantName: "",
        attendantPassport: null,
        patientPassport: null,
        additionalMessage: "",
      });

    } catch (error: any) {
      console.error("Error submitting form:", error);
      const backendErrors = error?.response?.data?.errors;
      if (Array.isArray(backendErrors)) {
         toast.error(backendErrors[0].msg, { id: toastId });
      } else {
         toast.error(error?.response?.data?.message || "Submission failed.", { id: toastId });
      }
    } finally {
      setLoading(false);
    }
  };

  // ✅ File Upload Handler
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: "attendantPassport" | "patientPassport") => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 10 * 1024 * 1024) {
        toast.error("File size must be less than 10MB");
        return;
      }
      setFormData({ ...formData, [field]: file });
      if (errors[field]) {
        const newErr = { ...errors };
        delete newErr[field];
        setErrors(newErr);
      }
    }
  };

  const removeFile = (field: "attendantPassport" | "patientPassport") => {
    setFormData({ ...formData, [field]: null });
  };

  // Shared Input Styles
  const inputClass = "w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 block p-3.5 transition-all duration-200 outline-none";
  const labelClass = "block mb-2 text-sm font-semibold text-gray-700";

  return (
    <>
      {/* Custom Styles for Phone Input to match Tailwind */}
      <style>{`
        .react-tel-input .form-control { width: 100% !important; height: 50px !important; border-radius: 0.75rem !important; background-color: #F9FAFB !important; border-color: #E5E7EB !important; }
        .react-tel-input .form-control:focus { background-color: #fff !important; border-color: #3b82f6 !important; box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1) !important; }
      `}</style>

      <div className="bg-gradient-to-b from-blue-50/50 to-white min-h-screen py-16 px-4 md:px-8">
        <Toaster position="top-center" reverseOrder={false} />

        {/* Hero Section */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
            <Plane className="w-4 h-4 mr-2" />
            Hassle-free Travel
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Visa Assistance <br />
            <span className="text-blue-600">& Travel Logistics</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From medical visas to airport pickup and comfortable stays, we manage all your travel arrangements so you can focus entirely on your recovery.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Visa Assistance</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We provide invitation letters and guide you through the medical visa application process.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 text-purple-600">
              <Plane className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Flight & Stay</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Assistance with flight bookings and finding hotels near the hospital that fit your budget.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 text-green-600">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Airport Logistics</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Complimentary airport pick-up and drop-off services for patients and attendants.
            </p>
          </div>
        </div>

        {/* Main Grid: Form & Visuals */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Section (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Start Your Journey</h2>
              <p className="text-gray-500 mt-2">Submit your details below to initiate the visa invitation letter and travel coordination process.</p>
            </div>

            {submitted ? (
               <div className="flex flex-col items-center justify-center p-10 bg-green-50 rounded-2xl border border-green-200 text-center animate-fade-in">
                 <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                   <CheckCircle className="w-8 h-8 text-green-600" />
                 </div>
                 <h3 className="text-2xl font-bold text-green-800 mb-2">Documents Submitted!</h3>
                 <p className="text-green-700">Our travel desk is reviewing your documents. We will contact you shortly.</p>
                 <button 
                   onClick={() => setSubmitted(false)}
                   className="mt-6 text-sm font-semibold text-green-700 underline hover:text-green-800"
                 >
                   Submit another request
                 </button>
               </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Patient & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass}>Patient Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      value={formData.patientName}
                      onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                      className={`${inputClass} ${errors.patientName ? "border-red-500 ring-red-100" : ""}`}
                      placeholder="As on passport"
                      disabled={loading}
                    />
                    {errors.patientName && <p className="text-red-500 text-xs mt-1 font-medium">{errors.patientName}</p>}
                  </div>

                  <div>
                    <label className={labelClass}>Mobile Number <span className="text-red-500">*</span></label>
                    <div className={errors.phoneNumber ? "border rounded-xl border-red-500" : ""}>
                      <PhoneInput
                        country={"in"}
                        value={formData.phoneNumber}
                        onChange={(value) => setFormData({ ...formData, phoneNumber: value })}
                        disabled={loading}
                        buttonClass="!bg-transparent !border-0 !rounded-l-xl"
                        dropdownClass="!shadow-lg !rounded-xl"
                      />
                    </div>
                    {errors.phoneNumber && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phoneNumber}</p>}
                  </div>
                </div>

                {/* Attendant Name */}
                <div>
                  <label className={labelClass}>Attendant Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    value={formData.attendantName}
                    onChange={(e) => setFormData({ ...formData, attendantName: e.target.value })}
                    className={`${inputClass} ${errors.attendantName ? "border-red-500 ring-red-100" : ""}`}
                    placeholder="Full name of accompanying person"
                    disabled={loading}
                  />
                  {errors.attendantName && <p className="text-red-500 text-xs mt-1 font-medium">{errors.attendantName}</p>}
                </div>

                {/* Upload Section - Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Patient Passport */}
                  <div>
                    <label className={labelClass}>Patient Passport <span className="text-red-500">*</span></label>
                    <div 
                      className={`relative flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-xl bg-gray-50 transition-colors cursor-pointer
                      ${errors.patientPassport ? "border-red-400 bg-red-50" : "border-gray-300 hover:border-blue-400 hover:bg-blue-50"}`}
                      onClick={() => !loading && document.getElementById("patientPassportInput")?.click()}
                    >
                      {formData.patientPassport ? (
                        <div className="text-center w-full">
                           <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 text-green-600">
                             <FileText className="w-5 h-5" />
                           </div>
                           <p className="text-xs text-gray-700 truncate max-w-full px-2">{formData.patientPassport.name}</p>
                           <button 
                            type="button"
                            onClick={(e) => { e.stopPropagation(); removeFile("patientPassport"); }}
                            className="mt-2 text-xs text-red-500 hover:underline"
                           >
                             Remove
                           </button>
                        </div>
                      ) : (
                        <>
                          <UploadCloud className={`w-8 h-8 mb-2 ${errors.patientPassport ? "text-red-400" : "text-gray-400"}`} />
                          <p className="text-xs text-center text-gray-500">Upload Patient Passport <br/> (Max 10MB)</p>
                        </>
                      )}
                      <input id="patientPassportInput" type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" onChange={(e) => handleFileChange(e, "patientPassport")} disabled={loading} />
                    </div>
                    {errors.patientPassport && <p className="text-red-500 text-xs mt-1 font-medium text-center">{errors.patientPassport}</p>}
                  </div>

                  {/* Attendant Passport */}
                  <div>
                    <label className={labelClass}>Attendant Passport <span className="text-red-500">*</span></label>
                    <div 
                      className={`relative flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-xl bg-gray-50 transition-colors cursor-pointer
                      ${errors.attendantPassport ? "border-red-400 bg-red-50" : "border-gray-300 hover:border-blue-400 hover:bg-blue-50"}`}
                      onClick={() => !loading && document.getElementById("attendantPassportInput")?.click()}
                    >
                      {formData.attendantPassport ? (
                        <div className="text-center w-full">
                           <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 text-green-600">
                             <FileText className="w-5 h-5" />
                           </div>
                           <p className="text-xs text-gray-700 truncate max-w-full px-2">{formData.attendantPassport.name}</p>
                           <button 
                            type="button"
                            onClick={(e) => { e.stopPropagation(); removeFile("attendantPassport"); }}
                            className="mt-2 text-xs text-red-500 hover:underline"
                           >
                             Remove
                           </button>
                        </div>
                      ) : (
                        <>
                          <UploadCloud className={`w-8 h-8 mb-2 ${errors.attendantPassport ? "text-red-400" : "text-gray-400"}`} />
                          <p className="text-xs text-center text-gray-500">Upload Attendant Passport <br/> (Max 10MB)</p>
                        </>
                      )}
                      <input id="attendantPassportInput" type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" onChange={(e) => handleFileChange(e, "attendantPassport")} disabled={loading} />
                    </div>
                    {errors.attendantPassport && <p className="text-red-500 text-xs mt-1 font-medium text-center">{errors.attendantPassport}</p>}
                  </div>
                </div>

                {/* Additional Message */}
                <div>
                  <label className={labelClass}>Additional Message <span className="text-gray-400 font-normal">(Optional)</span></label>
                  <textarea
                    rows={4}
                    value={formData.additionalMessage}
                    onChange={(e) => setFormData({ ...formData, additionalMessage: e.target.value })}
                    className={`${inputClass} resize-none`}
                    placeholder="Specific dietary requirements, wheelchair assistance, etc."
                    disabled={loading}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.01] transition-all duration-200 flex items-center justify-center"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin mr-2" />
                      Submitting Documents...
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Sticky Visual Sidebar (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            
            {/* Value Card */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
               {/* Decorative Bubble */}
              <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              
              <div className="flex items-center space-x-3 mb-4 relative z-10">
                <ShieldCheck className="w-6 h-6 text-blue-200" />
                <h3 className="text-xl font-bold">24/7 Travel Desk</h3>
              </div>
              <p className="text-blue-50 text-sm leading-relaxed mb-6 relative z-10">
                We handle the complexities of international medical travel. Our team coordinates with embassies and airlines to prioritize your journey.
              </p>
              
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10 relative z-10">
                <p className="text-xs text-blue-100 uppercase font-semibold mb-1">Emergency Visa Support</p>
                <a href="tel:+919953306560" className="text-lg font-bold hover:text-white transition-colors">
                   +91-9953306560
                </a>
              </div>
            </div>

            {/* Images */}
            <div className="grid gap-6">
              <img
                src={img}
                alt="Travel"
                className="w-full h-52 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
              />
              <img
                src={img2}
                alt="Visa"
                className="w-full h-52 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
              />
            </div>
          </div>

        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default VisaAndTravel;