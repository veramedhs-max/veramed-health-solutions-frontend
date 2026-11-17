import { useState, useRef } from "react";
import {
  HeartPulse,
  Brain,
  Ribbon,
  Stethoscope,
  Award,
  Building2,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  CalendarCheck,
  MessageCircle,
  CheckCircle2,
  LayoutGrid,
  GalleryHorizontalEnd,
  type LucideIcon,
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ConsultationForm from "@/components/ConsultationModal";
import doctorFallbackImg from "@/assets/html study/doctor.jpg";

type SpecialtyId = "cardiology" | "neurology" | "oncology" | "urology";

interface Doctor {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  hospital: string;
  city: string;
  experience: string;
  procedures: string;
  expertise: string[];
  image: string;
}

interface SpecialtyCategory {
  id: SpecialtyId;
  label: string;
  shortLabel: string;
  tagline: string;
  icon: LucideIcon;
  accentText: string;
  accentBg: string;
  doctors: Doctor[];
}

const PORTRAITS = [
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80",
];

const SPECIALTIES: SpecialtyCategory[] = [
  {
    id: "cardiology",
    label: "Cardiologist",
    shortLabel: "Cardiologist",
    tagline: "Minimally invasive heart surgery, TAVR, bypass & pediatric cardiac care.",
    icon: HeartPulse,
    accentText: "text-rose-700",
    accentBg: "bg-rose-50 border-rose-200/80",
    doctors: [
      {
        id: "card-1",
        name: "Dr.Vikramaditya",
        designation: "Chairman & Chief Cardiac Surgeon",
        qualification: "MBBS, MS, MCh (CTVS), Fellowship (USA)",
        hospital: "Medanta – The Medicity",
        city: "Gurugram",
        experience: "34+ Yrs",
        procedures: "25,000+ Surgeries",
        expertise: ["Robotic Bypass (CABG)", "Heart Valve Repair"],
        image: PORTRAITS[0],
      },
      {
        id: "card-2",
        name: "Dr. Ananya Deshmukh",
        designation: "Principal Director – Interventional Cardiology",
        qualification: "MBBS, MD, DM (Cardiology), FACC",
        hospital: "Fortis Escorts Heart Institute",
        city: "New Delhi",
        experience: "26+ Yrs",
        procedures: "18,500+ Procedures",
        expertise: ["Complex Angioplasty", "TAVR / TAVI"],
        image: PORTRAITS[1],
      },
      {
        id: "card-3",
        name: "Dr. Rajeshwar Singhania",
        designation: "Senior Director – Cardiothoracic Surgery",
        qualification: "MBBS, MS, MCh, FRCS (Glasgow)",
        hospital: "Indraprastha Apollo Hospital",
        city: "New Delhi",
        experience: "29+ Yrs",
        procedures: "20,000+ Surgeries",
        expertise: ["Heart Transplant", "LVAD Implantation"],
        image: PORTRAITS[2],
      },
      {
        id: "card-4",
        name: "Dr. Meenakshi Iyer",
        designation: "Director – Pediatric Cardiology",
        qualification: "MBBS, MD (Pediatrics), FNB (Pediatric Cardiology)",
        hospital: "Max Super Speciality Hospital",
        city: "Saket, Delhi",
        experience: "21+ Yrs",
        procedures: "11,000+ Cases",
        expertise: ["Congenital Heart Defects", "ASD / VSD Closure"],
        image: PORTRAITS[3],
      },
      {
        id: "card-5",
        name: "Dr. Siddharth Malhotra",
        designation: "Head of Electrophysiology & Pacing",
        qualification: "MBBS, MD, DM (AIIMS), FHRS",
        hospital: "Artemis Hospital",
        city: "Gurugram",
        experience: "19+ Yrs",
        procedures: "9,500+ Implants",
        expertise: ["Leadless Pacemaker", "3D RF Ablation"],
        image: PORTRAITS[4],
      },
      {
        id: "card-6",
        name: "Dr. Harshvardhan Mehta",
        designation: "Senior Consultant – Structural Heart",
        qualification: "MBBS, MD, DM, FSCAI (USA)",
        hospital: "Manipal Hospital",
        city: "Dwarka, Delhi",
        experience: "22+ Yrs",
        procedures: "14,000+ Procedures",
        expertise: ["MitraClip Repair", "Coronary Stenting"],
        image: PORTRAITS[0],
      },
      {
        id: "card-7",
        name: "Dr. Kavita Nambiar",
        designation: "Associate Director – Non-Invasive Cardiology",
        qualification: "MBBS, MD, DNB (Cardiology)",
        hospital: "BLK-Max Super Speciality",
        city: "New Delhi",
        experience: "18+ Yrs",
        procedures: "15,000+ Diagnostics",
        expertise: ["3D Echocardiography", "Heart Failure Clinic"],
        image: PORTRAITS[1],
      },
      {
        id: "card-8",
        name: "Dr. Arvind Kulkarni",
        designation: "Chief – Minimally Invasive Cardiac Surgery",
        qualification: "MBBS, MS, MCh (CTVS)",
        hospital: "Kokilaben Dhirubhai Ambani",
        city: "Mumbai",
        experience: "24+ Yrs",
        procedures: "13,200+ Surgeries",
        expertise: ["Keyhole Heart Surgery", "Aortic Aneurysm"],
        image: PORTRAITS[2],
      },
      {
        id: "card-9",
        name: "Dr. Priya Ranjan",
        designation: "Senior Consultant – Interventional Cardiology",
        qualification: "MBBS, MD, DM, FESC",
        hospital: "Amrita Hospital",
        city: "Faridabad",
        experience: "17+ Yrs",
        procedures: "8,800+ Procedures",
        expertise: ["Rotablation", "Intravascular Lithotripsy"],
        image: PORTRAITS[3],
      },
      {
        id: "card-10",
        name: "Dr. Devendra Rathore",
        designation: "Director – Vascular & Endovascular Surgery",
        qualification: "MBBS, MS, DNB (Peripheral Vascular)",
        hospital: "Medanta – The Medicity",
        city: "Gurugram",
        experience: "23+ Yrs",
        procedures: "12,000+ Surgeries",
        expertise: ["Carotid Endarterectomy", "EVAR Stenting"],
        image: PORTRAITS[4],
      },
    ],
  },
  {
    id: "neurology",
    label: "Neurologists",
    shortLabel: "Neurologist",
    tagline: "Brain tumor microsurgery, deep brain stimulation, stroke & spine care.",
    icon: Brain,
    accentText: "text-indigo-700",
    accentBg: "bg-indigo-50 border-indigo-200/80",
    doctors: [
      {
        id: "neuro-1",
        name: "Dr. Raghuram Krishnan",
        designation: "Chairman – Institute of Neurosciences",
        qualification: "MBBS, MS, MCh (Neurosurgery, AIIMS)",
        hospital: "Medanta – The Medicity",
        city: "Gurugram",
        experience: "32+ Yrs",
        procedures: "19,000+ Surgeries",
        expertise: ["Brain Tumor Navigation", "CyberKnife Radiosurgery"],
        image: PORTRAITS[2],
      },
      {
        id: "neuro-2",
        name: "Dr. Nandini Chatterjee",
        designation: "Principal Director – Neurology & Stroke",
        qualification: "MBBS, MD, DM (Neurology), FRCP (London)",
        hospital: "Fortis Memorial Research Institute",
        city: "Gurugram",
        experience: "25+ Yrs",
        procedures: "22,000+ Consultations",
        expertise: ["Acute Stroke Thrombolysis", "Refractory Epilepsy"],
        image: PORTRAITS[1],
      },
      {
        id: "neuro-3",
        name: "Dr. Abhinav Sengupta",
        designation: "Director – Endoscopic Spine & Skull Base",
        qualification: "MBBS, MCh (Neurosurgery), Fellowship (Germany)",
        hospital: "Indraprastha Apollo Hospital",
        city: "New Delhi",
        experience: "23+ Yrs",
        procedures: "14,500+ Surgeries",
        expertise: ["Pituitary Adenoma", "Keyhole Spine Surgery"],
        image: PORTRAITS[0],
      },
      {
        id: "neuro-4",
        name: "Dr. Shashi Bala Verma",
        designation: "Senior Director – Movement Disorders",
        qualification: "MBBS, MD, DM (NIMHANS)",
        hospital: "Max Super Speciality Hospital",
        city: "Saket, Delhi",
        experience: "20+ Yrs",
        procedures: "6,200+ DBS Cases",
        expertise: ["Parkinson's & DBS", "Dystonia Management"],
        image: PORTRAITS[3],
      },
      {
        id: "neuro-5",
        name: "Dr. Taruneshwar Joshi",
        designation: "Chief – Neurointerventional Surgery",
        qualification: "MBBS, MD, DM (Neuroimaging & Intervention)",
        hospital: "Artemis Hospital",
        city: "Gurugram",
        experience: "18+ Yrs",
        procedures: "7,400+ Coiling Cases",
        expertise: ["Brain Aneurysm Coiling", "Mechanical Thrombectomy"],
        image: PORTRAITS[4],
      },
      {
        id: "neuro-6",
        name: "Dr. Vivek Agnihotri",
        designation: "Director – Pediatric Neurology",
        qualification: "MBBS, MD, Fellowship (Toronto)",
        hospital: "BLK-Max Super Speciality",
        city: "New Delhi",
        experience: "19+ Yrs",
        procedures: "10,000+ Patients",
        expertise: ["Pediatric Epilepsy", "Neuromuscular Disorders"],
        image: PORTRAITS[0],
      },
      {
        id: "neuro-7",
        name: "Dr.Roshni Menon",
        designation: "Senior Consultant – Multiple Sclerosis & Neuro-Immunology",
        qualification: "MBBS, MD, DM (Neurology)",
        hospital: "Manipal Hospital",
        city: "Dwarka, Delhi",
        experience: "16+ Yrs",
        procedures: "8,500+ Patients",
        expertise: ["Multiple Sclerosis", "Autoimmune Encephalitis"],
        image: PORTRAITS[1],
      },
      {
        id: "neuro-8",
        name: "Dr.Sureshwarappa",
        designation: "Head – Minimally Invasive Spine Surgery",
        qualification: "MBBS, MS, MCh (Neurosurgery)",
        hospital: "Amrita Hospital",
        city: "Faridabad",
        experience: "27+ Yrs",
        procedures: "16,000+ Spine Cases",
        expertise: ["Robotic Spine Fusion", "Disc Replacement"],
        image: PORTRAITS[2],
      },
      {
        id: "neuro-9",
        name: "Dr. Farah Qureshi",
        designation: "Associate Director – Epilepsy & Sleep Medicine",
        qualification: "MBBS, MD, DNB (Neurology)",
        hospital: "Fortis Escorts",
        city: "New Delhi",
        experience: "15+ Yrs",
        procedures: "9,200+ Evaluations",
        expertise: ["Video EEG Monitoring", "Vagus Nerve Stimulation"],
        image: PORTRAITS[3],
      },
      {
        id: "neuro-10",
        name: "Dr. Pradeep Narayanan",
        designation: "Senior Director – Cerebrovascular Surgery",
        qualification: "MBBS, MCh, Fellowship (Japan)",
        hospital: "Medanta – The Medicity",
        city: "Gurugram",
        experience: "24+ Yrs",
        procedures: "11,800+ Surgeries",
        expertise: ["AVM Microsurgery", "Cavernoma Resection"],
        image: PORTRAITS[4],
      },
    ],
  },
  {
    id: "oncology",
    label: "Oncologists",
    shortLabel: "Oncologist",
    tagline: "Robotic cancer surgery, CAR-T therapy, bone marrow transplant & proton therapy.",
    icon: Ribbon,
    accentText: "text-teal-700",
    accentBg: "bg-teal-50 border-teal-200/80",
    doctors: [
      {
        id: "onco-1",
        name: "Dr. Harit Chaturvedi",
        designation: "Chairman – Cancer Care & Surgical Oncology",
        qualification: "MBBS, MS, MCh (Surgical Oncology)",
        hospital: "Max Institute of Cancer Care",
        city: "Saket, Delhi",
        experience: "31+ Yrs",
        procedures: "22,000+ Onco Surgeries",
        expertise: ["Breast & Thoracic Cancer", "HIPEC Surgery"],
        image: PORTRAITS[4],
      },
      {
        id: "onco-2",
        name: "Dr. Niharika Bhasin",
        designation: "Principal Director – Medical & Hemato-Oncology",
        qualification: "MBBS, MD, DM (Medical Oncology, AIIMS)",
        hospital: "Medanta – The Medicity",
        city: "Gurugram",
        experience: "24+ Yrs",
        procedures: "15,000+ Chemo/Immuno",
        expertise: ["Immunotherapy", "Targeted Precision Therapy"],
        image: PORTRAITS[3],
      },
      {
        id: "onco-3",
        name: "Dr. Subhashish Banerjee",
        designation: "Director – Bone Marrow Transplant & CAR-T",
        qualification: "MBBS, MD, DM (Clinical Hematology)",
        hospital: "Fortis Memorial Research Institute",
        city: "Gurugram",
        experience: "22+ Yrs",
        procedures: "2,400+ BMT Transplants",
        expertise: ["Haploidentical BMT", "Leukemia & Lymphoma"],
        image: PORTRAITS[0],
      },
      {
        id: "onco-4",
        name: "Dr.Deepa Viswanathan",
        designation: "Senior Director – Gynecologic Oncology",
        qualification: "MBBS, MD, Fellowship (UK)",
        hospital: "Indraprastha Apollo Hospital",
        city: "New Delhi",
        experience: "25+ Yrs",
        procedures: "13,000+ Surgeries",
        expertise: ["Robotic Hysterectomy", "Ovarian Cytoreduction"],
        image: PORTRAITS[1],
      },
      {
        id: "onco-5",
        name: "Dr. Rajeev Khandelwal",
        designation: "Chief – Radiation Oncology & CyberKnife",
        qualification: "MBBS, MD (Radiation Oncology), DNB",
        hospital: "Artemis Hospital",
        city: "Gurugram",
        experience: "20+ Yrs",
        procedures: "14,000+ Radiation Plans",
        expertise: ["SBRT & CyberKnife", "IGRT / VMAT Therapy"],
        image: PORTRAITS[2],
      },
      {
        id: "onco-6",
        name: "Dr. Sameer Kaul",
        designation: "Senior Director – Head, Neck & GI Oncology",
        qualification: "MBBS, MS (Surgical Oncology), Fellowship (London)",
        hospital: "Apollo Cancer Centre",
        city: "New Delhi",
        experience: "28+ Yrs",
        procedures: "18,000+ Surgeries",
        expertise: ["Robotic GI Cancer", "Head & Neck Reconstruction"],
        image: PORTRAITS[0],
      },
      {
        id: "onco-7",
        name: "Dr. Pallavi Deshpande",
        designation: "Director – Pediatric Hematology & Oncology",
        qualification: "MBBS, MD, FNB (Pediatric Hemato-Oncology)",
        hospital: "BLK-Max Super Speciality",
        city: "New Delhi",
        experience: "17+ Yrs",
        procedures: "5,500+ Pediatric Cases",
        expertise: ["Childhood Leukemia", "Thalassemia BMT"],
        image: PORTRAITS[1],
      },
      {
        id: "onco-8",
        name: "Dr. Alokeshwar Sen",
        designation: "Senior Consultant – Musculoskeletal & Sarcoma Oncology",
        qualification: "MBBS, MS (Ortho), Fellowship (Tata Memorial)",
        hospital: "Manipal Hospital",
        city: "Dwarka, Delhi",
        experience: "19+ Yrs",
        procedures: "6,800+ Limb Salvages",
        expertise: ["Bone Sarcoma", "3D Printed Prosthesis"],
        image: PORTRAITS[2],
      },
      {
        id: "onco-9",
        name: "Dr.Zarina Merchant",
        designation: "Associate Director – Breast Oncoplasty",
        qualification: "MBBS, MS, MCh (Oncoplastic Surgery)",
        hospital: "Medanta – The Medicity",
        city: "Gurugram",
        experience: "16+ Yrs",
        procedures: "7,900+ Surgeries",
        expertise: ["Breast Conservation", "Sentinel Node Biopsy"],
        image: PORTRAITS[3],
      },
      {
        id: "onco-10",
        name: "Dr. Kunal Chatterjee",
        designation: "Director – Hepato-Pancreato-Biliary Oncology",
        qualification: "MBBS, MS, MCh (GI & HPB Oncology)",
        hospital: "Amrita Hospital",
        city: "Faridabad",
        experience: "21+ Yrs",
        procedures: "9,400+ Surgeries",
        expertise: ["Whipple Procedure", "Liver Cancer Resection"],
        image: PORTRAITS[4],
      },
    ],
  },
  {
    id: "urology",
    label: "Urologists",
    shortLabel: "Urologist",
    tagline: "Da Vinci robotic prostatectomy, kidney transplant, laser stone & reconstructive urology.",
    icon: Stethoscope,
    accentText: "text-blue-700",
    accentBg: "bg-blue-50 border-blue-200/80",
    doctors: [
      {
        id: "uro-1",
        name: "Dr. Narmada Prasad Gupta",
        designation: "Chairman – Academics & Robotic Urology",
        qualification: "MBBS, MS, MCh (Urology, AIIMS), DSc",
        hospital: "Medanta – The Medicity",
        city: "Gurugram",
        experience: "36+ Yrs",
        procedures: "30,000+ Surgeries",
        expertise: ["Da Vinci Prostatectomy", "Robotic Partial Nephrectomy"],
        image: PORTRAITS[2],
      },
      {
        id: "uro-2",
        name: "Dr. Anant Kumar",
        designation: "Chairman – Urology, Renal Transplant & Robotics",
        qualification: "MBBS, MS, MCh (Urology), DNB",
        hospital: "Max Super Speciality Hospital",
        city: "Saket, Delhi",
        experience: "33+ Yrs",
        procedures: "3,500+ Kidney Transplants",
        expertise: ["Robotic Kidney Transplant", "ABO Incompatible Transplant"],
        image: PORTRAITS[0],
      },
      {
        id: "uro-3",
        name: "Dr. Ruchika Sharma",
        designation: "Director – Female & Reconstructive Urology",
        qualification: "MBBS, MS, MCh (Urology), Fellowship (USA)",
        hospital: "Fortis Memorial Research Institute",
        city: "Gurugram",
        experience: "19+ Yrs",
        procedures: "9,800+ Procedures",
        expertise: ["Urethral Reconstruction", "Pelvic Floor Repair"],
        image: PORTRAITS[1],
      },
      {
        id: "uro-4",
        name: "Dr. Manish Singla",
        designation: "Principal Director – Uro-Oncology & Robotics",
        qualification: "MBBS, MS, MCh (Urology), Fellowship (Robotic Surgery)",
        hospital: "Indraprastha Apollo Hospital",
        city: "New Delhi",
        experience: "24+ Yrs",
        procedures: "14,200+ Surgeries",
        expertise: ["Bladder Neobladder", "Prostate Cancer"],
        image: PORTRAITS[4],
      },
      {
        id: "uro-5",
        name: "Dr. Aditya Pradhan",
        designation: "Senior Director – Endourology & Laser Stone Center",
        qualification: "MBBS, MS, DNB (Urology)",
        hospital: "BLK-Max Super Speciality",
        city: "New Delhi",
        experience: "25+ Yrs",
        procedures: "17,500+ Laser Cases",
        expertise: ["RIRS & HoLEP Prostate", "Complex Staghorn Calculi"],
        image: PORTRAITS[0],
      },
      {
        id: "uro-6",
        name: "Dr.Saurabh Bhargava",
        designation: "Chief – Andrology & Microsurgical Urology",
        qualification: "MBBS, MS, MCh (Urology)",
        hospital: "Artemis Hospital",
        city: "Gurugram",
        experience: "18+ Yrs",
        procedures: "8,400+ Procedures",
        expertise: ["Penile Implant Surgery", "Micro-TESE Fertility"],
        image: PORTRAITS[2],
      },
      {
        id: "uro-7",
        name: "Dr. Vandana Luthra",
        designation: "Senior Consultant – Pediatric Urology",
        qualification: "MBBS, MS, MCh (Pediatric Surgery & Urology)",
        hospital: "Manipal Hospital",
        city: "Dwarka, Delhi",
        experience: "17+ Yrs",
        procedures: "6,900+ Surgeries",
        expertise: ["Hypospadias Repair", "Laparoscopic Pyeloplasty"],
        image: PORTRAITS[3],
      },
      {
        id: "uro-8",
        name: "Dr. Gagan Prakash",
        designation: "Director – Renal Sciences & Kidney Transplant",
        qualification: "MBBS, MS, MCh (Urology, PGIMER)",
        hospital: "Amrita Hospital",
        city: "Faridabad",
        experience: "22+ Yrs",
        procedures: "2,100+ Transplants",
        expertise: ["Laparoscopic Donor Nephrectomy", "Renal Cell Carcinoma"],
        image: PORTRAITS[4],
      },
      {
        id: "uro-9",
        name: "Dr.Hiteshwar Gill",
        designation: "Associate Director – Laser Prostate & Endourology",
        qualification: "MBBS, MS, MCh (Urology)",
        hospital: "Fortis Escorts",
        city: "New Delhi",
        experience: "16+ Yrs",
        procedures: "10,500+ Procedures",
        expertise: ["Thulium Laser Enucleation", "Rezum Water Vapor Therapy"],
        image: PORTRAITS[0],
      },
      {
        id: "uro-10",
        name: "Dr. Rajendra Bansal",
        designation: "Senior Director – Neuro-Urology & Urodynamics",
        qualification: "MBBS, MS, MCh (Urology)",
        hospital: "Medanta – The Medicity",
        city: "Gurugram",
        experience: "26+ Yrs",
        procedures: "13,400+ Procedures",
        expertise: ["Sacral Neuromodulation", "Artificial Urinary Sphincter"],
        image: PORTRAITS[2],
      },
    ],
  },
];

const MobileSpecialists = () => {
  const [activeTab, setActiveTab] = useState("g")
  const [viewMode, setViewMode] = useState<"carousel" | "grid">("carousel");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const currentCategory =
    SPECIALTIES.find((item) => item.id === activeTab) || SPECIALTIES[0];

  const handleSpecialtyChange = (id: SpecialtyId) => {
    setActiveTab(id);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const cardWidth = 300;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  const handleWhatsAppDoctor = (doc: Doctor) => {
    const text = encodeURIComponent(
      `Hello Veramed Health Solutions, I would like to request a medical opinion / appointment with ${doc.name} (${doc.designation}, ${doc.hospital}).`
    );
    window.open(`https://wa.me/919953306560?text=${text}`, "_blank");
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <section
        id="specialists"
        aria-label="Top Medical Specialists"
        className="w-full bg-white py-8 px-3.5 border-t border-slate-200/80 text-slate-900 font-sans"
      >
        <div className="mb-5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 mb-2">
            <Award className="w-3.5 h-3.5 text-[#16324F]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#16324F]">
              Top Doctor's in India
            </span>
          </div>

          <h2 className="text-[22px] leading-[1.22] font-bold tracking-tight text-[#0F2942]">
            Find the best Specialist &{" "}
            <span className="text-blue-600">Doctors in India</span>
          </h2>

          <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
            Direct priority appointments and second opinions with 40+ internationally acclaimed doctors across India’s top JCI-accredited hospitals.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Medical Specialties"
          className="grid grid-cols-2 gap-2 mb-3.5"
        >
          {SPECIALTIES.map((spec) => {
            const IconComponent = spec.icon;
            const isActive = spec.id === activeTab;
            return (
              <button
                key={spec.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleSpecialtyChange(spec.id)}
                className={`flex items-center justify-between px-4 py-4 rounded-xl border-[2px] border-gray-400 shadow-[0_6px_20px_rgba(255,0,0,0.25)] text-left transition-all duration-200 active:scale-[0.98] ${isActive
                  ? "bg-[#128C7E] border-[#16324F] text-white shadow-sm"
                  : "bg-[#F8FAFC] border-slate-200/90 text-slate-700 hover:bg-slate-100/70"
                  }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${isActive ? "bg-white/15 text-white" : "bg-white border border-slate-200 text-[#16324F]"
                      }`}
                  >
                    <IconComponent className="w-4 h-4" strokeWidth={2} />
                  </div>
                  <div className="truncate">
                    <div className="text-md font-bold leading-tight truncate">
                      {spec.shortLabel}
                    </div>
                    <div
                      className={`text-[12px] font-medium leading-tight ${isActive ? "text-slate-300" : "text-slate-500"
                        }`}
                    >
                      {spec.doctors.length} Specialists
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-between gap-2 px-3 py-2 mb-4 rounded-xl bg-[#F8FAFC] border border-slate-200/80">
          <p className="text-[11px] text-slate-600 leading-snug flex-1">
            {currentCategory.tagline}
          </p>

          <div className="flex items-center gap-1 shrink-0">
            <button
              type="button"
              onClick={() =>
                setViewMode((prev) => (prev === "carousel" ? "grid" : "carousel"))
              }
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-[10px] font-semibold text-[#16324F] shadow-2xs active:scale-95"
            >
              {viewMode === "carousel" ? (
                <>
                  <LayoutGrid className="w-3 h-3 text-blue-600" />
                  <span>View All 10</span>
                </>
              ) : (
                <>
                  <GalleryHorizontalEnd className="w-3 h-3 text-blue-600" />
                  <span>Swipe View</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className={
            viewMode === "carousel"
              ? "flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory no-scrollbar scroll-smooth"
              : "grid grid-cols-1 gap-3.5"
          }
        >
          {currentCategory.doctors.map((doc, index) => (
            <article
              key={doc.id}
              className={`flex flex-col justify-between rounded-2xl border-[2px] border-gray-300 shadow-[0_20px_50px_rgba(0,0,0,0.25)] bg-white overflow-hidden transition-all ${viewMode === "carousel" ? "min-w-[84vw] max-w-[84vw] snap-center shrink-0" : "w-full"
                }`}
            >
              <div className="p-3.5">
                <div className="flex gap-3 items-start">
                  <div className="relative w-20 h-24 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shrink-0">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = doctorFallbackImg;
                      }}
                      className="w-full h-full object-cover object-top"
                    />
                    <span className="absolute bottom-1 left-1 right-1 text-center py-0.5 rounded bg-[#16324F]/90 backdrop-blur-xs text-[9px] font-bold text-white">
                      {doc.experience}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md border text-[9.5px] font-bold ${currentCategory.accentBg} ${currentCategory.accentText}`}
                      >
                        <CheckCircle2 className="w-2.5 h-2.5" />
                        #{index + 1} {currentCategory.shortLabel}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-400">
                        {doc.city}
                      </span>
                    </div>

                    <h3 className="text-[15px] font-bold text-[#0F2942] leading-snug truncate">
                      {doc.name}
                    </h3>

                    <p className="text-[11px] font-semibold text-blue-700 leading-snug line-clamp-1 mt-0.5">
                      {doc.designation}
                    </p>

                    <div className="mt-1.5 space-y-1">
                      <div className="flex items-center gap-1.5 text-[10.5px] text-slate-600">
                        <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate">{doc.qualification}</span>
                      </div>

                      <div className="flex items-center gap-1.5 text-[10.5px] font-medium text-slate-700">
                        <Building2 className="w-3.5 h-3.5 text-[#16324F] shrink-0" />
                        <span className="truncate">{doc.hospital}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-1.5">
                  <div className="flex flex-wrap gap-1.5">
                    {doc.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-md bg-slate-100 text-[10px] font-medium text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <span className="text-[10px] font-bold text-[#16324F] bg-blue-50/80 border border-blue-200/60 px-2 py-0.5 rounded-md">
                    {doc.procedures}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 px-3.5 py-2.5 bg-[#F8FAFC] border-t border-slate-200/80">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-[#16324F] hover:bg-[#1E4369] text-white text-[11px] font-semibold shadow-2xs active:scale-95 transition-all"
                >
                  <CalendarCheck className="w-3.5 h-3.5 text-cyan-300" />
                  <span>Book Consult</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleWhatsAppDoctor(doc)}
                  className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-white border border-slate-300 text-[#16324F] hover:bg-slate-50 text-[11px] font-semibold active:scale-95 transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#128C7E]" />
                  <span>Free Opinion</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {viewMode === "carousel" && (
          <div className="mt-3 flex items-center justify-between px-1">
            <span className="text-[11px] font-medium text-slate-500">
              Showing <strong className="text-[#16324F]">10</strong> Senior{" "}
              {currentCategory.label}
            </span>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                aria-label="Previous doctor"
                onClick={() => handleScroll("left")}
                className="w-8 h-8 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-[#16324F] hover:bg-slate-50 active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                aria-label="Next doctor"
                onClick={() => handleScroll("right")}
                className="w-8 h-8 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-[#16324F] hover:bg-slate-50 active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </section>

      <DialogContent className="sm:max-w-[480px] max-w-[94vw] rounded-2xl p-0 border-none overflow-hidden">
        <ConsultationForm onSuccess={() => setIsModalOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default MobileSpecialists;