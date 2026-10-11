








// import React from 'react'
// import HeroSection from '../components/HeroSection'




// import AboutIntroSection from '../components/AboutIntro'
// import MissionBannerSection from '../components/MissionBannerSection'

// import PrimeShieldTestimonials from '../components/PrimeShieldTestimonials'
// import SuperGuardServicesSection from '../components/IronServices'


// const Home = () => {
//   return (
//     <div>
//       <HeroSection/>
//       <AboutIntroSection/>
   
//         <SuperGuardServicesSection/>
//       <MissionBannerSection/>
    
   
   
     
//     </div>
//   )
// }

// export default Home






















// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Check,
//   Home,
//   MapPin,
//   Phone,
//   Rat,
//   Search,
//   ShieldCheck,
//   Sparkles,
//   Target,
//   Bug,
//   Building2,
//   Wrench,
//   Mail,
//   ChevronDown,
// } from "lucide-react";

// export default function HomePage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const LOCAL = {
//     company: "SuperGuard Services Isleworth",
//     shortName: "SuperGuard Isleworth",
//     area: "Isleworth",
//     city: "London",
//     postcode: "TW7 7HG",
//     streetAddress: "71 Talbot Rd",
//     fullAddress:
//       "71 Talbot Rd, Isleworth TW7 7HG, United Kingdom",
//     phoneDisplay: "7405 940152",
//     phoneTel: "+447405940152",
//   };

//   /* =========================================================
//      SAME API ENDPOINT
//   ========================================================= */

//   const API_URL =
//     "https://superguard-wickham-backend.vercel.app/api/callback";

//   /* =========================================================
//      SERVICES
//   ========================================================= */

//   const services = [
//     {
//       number: "01",
//       title: "Rats & Mice",
//       label: "RODENT CONTROL",
//       image: "/images/rodents.webp",
//       icon: Rat,
//       description:
//         "Professional rodent control for houses, flats, lofts, gardens and commercial properties.",
//     },
//     {
//       number: "02",
//       title: "Bed Bugs",
//       label: "BED BUG TREATMENT",
//       image: "/images/bedbugs.webp",
//       icon: Bug,
//       description:
//         "Focused treatment for active bed bug infestations with attention to harbourage and affected areas.",
//     },
//     {
//       number: "03",
//       title: "Wasp Nests",
//       label: "WASP CONTROL",
//       image: "/images/wasps.webp",
//       icon: ShieldCheck,
//       description:
//         "Professional treatment for wasp nests around roofs, walls, gardens and surrounding areas.",
//     },
//   ];

//   /* =========================================================
//      WHY US
//   ========================================================= */

//   const reasons = [
//     {
//       no: "01",
//       title: "Local knowledge",
//       text:
//         "A focused service for properties throughout Isleworth and nearby areas.",
//       icon: MapPin,
//     },
//     {
//       no: "02",
//       title: "Inspection first",
//       text:
//         "We consider signs of activity, location and possible access points before deciding on a response.",
//       icon: Search,
//     },
//     {
//       no: "03",
//       title: "Clear treatment",
//       text:
//         "The approach is kept straightforward so you understand the problem and the next steps.",
//       icon: Target,
//     },
//     {
//       no: "04",
//       title: "Practical prevention",
//       text:
//         "Where appropriate, useful guidance can help reduce the chance of repeat pest activity.",
//       icon: ShieldCheck,
//     },
//   ];

//   /* =========================================================
//      PROCESS
//   ========================================================= */

//   const process = [
//     {
//       no: "01",
//       title: "Contact",
//       text:
//         "Tell us what you have noticed and where the pest activity is occurring.",
//     },
//     {
//       no: "02",
//       title: "Assess",
//       text:
//         "The property and signs of activity are considered to understand the situation.",
//     },
//     {
//       no: "03",
//       title: "Treat",
//       text:
//         "A suitable treatment approach is selected according to the pest and property.",
//     },
//     {
//       no: "04",
//       title: "Protect",
//       text:
//         "Practical prevention advice can be provided where relevant.",
//     },
//   ];

//   /* =========================================================
//      PROPERTY TYPES
//   ========================================================= */

//   const propertyTypes = [
//     {
//       title: "Residential",
//       text: "Houses, flats and other residential properties.",
//       icon: Home,
//     },
//     {
//       title: "Landlords",
//       text: "Support for rental and managed properties.",
//       icon: Building2,
//     },
//     {
//       title: "Commercial",
//       text: "Pest control support for business premises.",
//       icon: Wrench,
//     },
//   ];

//   /* =========================================================
//      FORM
//   ========================================================= */

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.phone.trim()) {
//       toast.error("Please enter your phone number.");
//       return;
//     }

//     setLoading(true);

//     try {
//       await toast.promise(
//         axios.post(API_URL, {
//           ...formData,
//           area: LOCAL.area,
//           business: LOCAL.company,
//           address: LOCAL.fullAddress,
//         }),
//         {
//           loading: "Sending your callback request...",
//           success: "Your callback request has been sent.",
//           error: (error) =>
//             error.response?.data?.message ||
//             "Something went wrong. Please try again.",
//         }
//       );

//       setFormData({
//         name: "",
//         postcode: "",
//         phone: "",
//       });
//     } catch (error) {
//       // toast.promise handles the visible error
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* =========================================================
//      REVEAL
//   ========================================================= */

//   useEffect(() => {
//     const elements = document.querySelectorAll(".sg-new-reveal");

//     if (!("IntersectionObserver" in window)) {
//       elements.forEach((el) => el.classList.add("sg-new-visible"));
//       return;
//     }

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (!entry.isIntersecting) return;

//           entry.target.classList.add("sg-new-visible");
//           observer.unobserve(entry.target);
//         });
//       },
//       {
//         threshold: 0.08,
//         rootMargin: "0px 0px -40px 0px",
//       }
//     );

//     elements.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <main
//       className="overflow-hidden bg-white text-[#15131A]"
//       itemScope
//       itemType="https://schema.org/PestControl"
//     >
//       <Toaster position="top-right" />

//       <meta itemProp="name" content={LOCAL.company} />
//       <meta itemProp="telephone" content={LOCAL.phoneDisplay} />
//       <meta
//         itemProp="areaServed"
//         content={`${LOCAL.area}, ${LOCAL.city}`}
//       />
//       <meta itemProp="address" content={LOCAL.fullAddress} />

//       <style>{`
//         html {
//           scroll-behavior: smooth;
//         }

//         .sg-new-reveal {
//           opacity: 0;
//           transform: translateY(35px);
//           transition:
//             opacity 850ms cubic-bezier(0.16, 1, 0.3, 1),
//             transform 850ms cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .sg-new-visible {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .sg-delay-1 {
//           transition-delay: 100ms;
//         }

//         .sg-delay-2 {
//           transition-delay: 180ms;
//         }

//         .sg-delay-3 {
//           transition-delay: 260ms;
//         }

//         .sg-img {
//           transition:
//             transform 900ms cubic-bezier(0.16, 1, 0.3, 1),
//             filter 500ms ease;
//         }

//         .sg-img-wrap:hover .sg-img {
//           transform: scale(1.045);
//         }

//         .sg-line {
//           position: relative;
//         }

//         .sg-line::after {
//           content: "";
//           position: absolute;
//           left: 0;
//           bottom: -1px;
//           width: 0;
//           height: 1px;
//           background: #6055A6;
//           transition: width 400ms ease;
//         }

//         .sg-line:hover::after {
//           width: 100%;
//         }

//         .sg-service-row {
//           transition:
//             background-color 300ms ease,
//             padding 400ms cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .sg-service-row:hover {
//           background: #F7F6FA;
//         }

//         .sg-service-row:hover .sg-service-image {
//           transform: scale(1.035);
//         }

//         .sg-service-image {
//           transition: transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .sg-arrow {
//           transition:
//             transform 300ms ease,
//             background-color 300ms ease,
//             color 300ms ease;
//         }

//         .sg-service-row:hover .sg-arrow {
//           transform: translateX(5px);
//           background: #6055A6;
//           color: white;
//         }

//         .sg-reason {
//           transition:
//             transform 350ms ease,
//             border-color 350ms ease;
//         }

//         .sg-reason:hover {
//           transform: translateX(7px);
//           border-color: rgba(96,85,166,0.35);
//         }

//         .sg-reason:hover .sg-reason-no {
//           background: #6055A6;
//           color: white;
//         }

//         .sg-reason-no {
//           transition:
//             background-color 300ms ease,
//             color 300ms ease;
//         }

//         .sg-input {
//           transition:
//             border-color 250ms ease,
//             background-color 250ms ease;
//         }

//         .sg-input:focus {
//           border-color: #6055A6;
//           background: white;
//         }

//         .sg-cta {
//           transition:
//             transform 250ms ease,
//             background-color 250ms ease;
//         }

//         .sg-cta:hover {
//           transform: translateY(-2px);
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .sg-new-reveal,
//           .sg-img,
//           .sg-service-image,
//           .sg-arrow,
//           .sg-reason,
//           .sg-cta {
//             transition: none;
//           }

//           .sg-new-reveal {
//             opacity: 1;
//             transform: none;
//           }
//         }
//       `}</style>

//       {/* =====================================================
//           HERO — COMPLETELY NEW EDITORIAL LAYOUT
//       ====================================================== */}

//       <section className="relative bg-[#6055A6] text-white">
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full border border-white/[0.06]" />
//           <div className="absolute -right-20 -top-20 h-[360px] w-[360px] rounded-full border-[70px] border-[#6055A6]/10" />
//           <div className="absolute bottom-[-250px] left-[-150px] h-[500px] w-[500px] rounded-full bg-[#6055A6]/10 blur-[100px]" />
//         </div>

//         <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

         

//           {/* HERO */}

//           <div className="grid min-h-[730px] items-center gap-16 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24 lg:py-20">

//             <div className="sg-new-reveal">

//               <div className="flex items-center gap-4">
//                 <span className="h-px w-14 bg-[#A59ED8]" />

//                 <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#A59ED8]">
//                   Isleworth & Nearby Areas
//                 </span>
//               </div>

//               <h1 className="mt-8 max-w-[900px] text-[57px] font-black leading-[0.88] tracking-[-0.075em] sm:text-[76px] md:text-[92px] lg:text-[108px]">
//                 Pest control
//                 <span className="block text-white/25">
//                   with a
//                 </span>
//                 clear plan.
//               </h1>

//               <p className="mt-9 max-w-[620px] text-[15px] leading-7 text-white/55 sm:text-[16px]">
//                 Professional pest control for homes, landlords and
//                 businesses across Isleworth and nearby areas.
//               </p>

//               <div className="mt-9 flex flex-wrap items-center gap-5">
//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="sg-cta inline-flex items-center gap-3 bg-[#6055A6] px-7 py-4 text-[9px] font-black uppercase tracking-[0.17em] text-white hover:bg-[#51478F]"
//                 >
//                   <Phone size={14} />
//                   Call {LOCAL.phoneDisplay}
//                   <ArrowUpRight size={15} />
//                 </a>

//                 <Link
//                   to="/services"
//                   className="sg-line inline-flex items-center gap-2 pb-1 text-[9px] font-black uppercase tracking-[0.17em] text-white/65 hover:text-white"
//                 >
//                   Explore Services
//                   <ArrowRight size={14} />
//                 </Link>
//               </div>

//               <div className="mt-12 grid max-w-[600px] grid-cols-3 border-t border-white/10 pt-6">
//                 <div>
//                   <p className="text-lg font-black text-white">
//                     Isleworth
//                   </p>
//                   <p className="mt-1 text-[8px] uppercase tracking-[0.17em] text-white/30">
//                     Local coverage
//                   </p>
//                 </div>

//                 <div className="border-l border-white/10 pl-5">
//                   <p className="text-lg font-black text-white">
//                     Local
//                   </p>
//                   <p className="mt-1 text-[8px] uppercase tracking-[0.17em] text-white/30">
//                     Service focus
//                   </p>
//                 </div>

//                 <div className="border-l border-white/10 pl-5">
//                   <p className="text-lg font-black text-white">
//                     Clear
//                   </p>
//                   <p className="mt-1 text-[8px] uppercase tracking-[0.17em] text-white/30">
//                     Process
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* FORM — NEW FLAT EDITORIAL STYLE */}

//             <div className="sg-new-reveal sg-delay-2 relative">

//               <div className="mb-5 flex items-center justify-between">
//                 <span className="text-[8px] font-black uppercase tracking-[0.25em] text-white/30">
//                   Request A Callback
//                 </span>

//                 <span className="h-px w-16 bg-white/15" />
//               </div>

//               <div className="border border-white/10 bg-white/[0.035] p-6 sm:p-8">

//                 <div className="border-b border-white/10 pb-7">
//                   <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#A59ED8]">
//                     Tell us what is happening
//                   </p>

//                   <h2 className="mt-4 text-[34px] font-black leading-[0.95] tracking-[-0.055em] sm:text-[42px]">
//                     We’ll help you
//                     <span className="block text-white/25">
//                       understand the problem.
//                     </span>
//                   </h2>
//                 </div>

//                 <form
//                   onSubmit={handleSubmit}
//                   className="mt-7"
//                 >
//                   <div className="border-b border-white/10 py-1">
//                     <label className="block text-[8px] font-black uppercase tracking-[0.2em] text-white/30">
//                       Name
//                     </label>

//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       placeholder="Your name"
//                       className="h-11 w-full bg-transparent text-sm text-white outline-none placeholder:text-white/20"
//                     />
//                   </div>

//                   <div className="border-b border-white/10 py-1">
//                     <label className="block text-[8px] font-black uppercase tracking-[0.2em] text-white/30">
//                       Postcode
//                     </label>

//                     <input
//                       type="text"
//                       name="postcode"
//                       value={formData.postcode}
//                       onChange={handleChange}
//                       placeholder="Your postcode"
//                       className="h-11 w-full bg-transparent text-sm text-white outline-none placeholder:text-white/20"
//                     />
//                   </div>

//                   <div className="border-b border-white/10 py-1">
//                     <label className="block text-[8px] font-black uppercase tracking-[0.2em] text-white/30">
//                       Phone
//                     </label>

//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       placeholder="Your phone number"
//                       required
//                       className="h-11 w-full bg-transparent text-sm text-white outline-none placeholder:text-white/20"
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="sg-cta mt-7 flex min-h-[54px] w-full items-center justify-between bg-[#6055A6] px-5 text-[9px] font-black uppercase tracking-[0.17em] hover:bg-[#51478F] disabled:cursor-not-allowed disabled:opacity-60"
//                   >
//                     <span>
//                       {loading
//                         ? "Sending..."
//                         : "Request A Callback"}
//                     </span>

//                     <ArrowUpRight size={16} />
//                   </button>
//                 </form>

//                 <div className="mt-5 flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.14em] text-white/25">
//                   <ShieldCheck
//                     size={13}
//                     className="text-[#A59ED8]"
//                   />
//                   Local Isleworth service
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* HERO BOTTOM MARKER */}

//         <div className="relative border-t border-white/10">
//           <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
//             <span className="text-[8px] font-black uppercase tracking-[0.25em] text-white/25">
//               Residential / Commercial
//             </span>

//             <ChevronDown
//               size={15}
//               className="text-white/25"
//             />

//             <span className="text-[8px] font-black uppercase tracking-[0.25em] text-white/25">
//               Isleworth / London
//             </span>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           INTRODUCTION — BIG TYPOGRAPHY
//       ====================================================== */}

//       <section className="bg-white py-24 sm:py-32 lg:py-40">
//         <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

//           <div className="grid gap-12 lg:grid-cols-[0.35fr_1.65fr] lg:gap-16">

//             <div className="sg-new-reveal">
//               <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
//                 01 / The SuperGuard Approach
//               </p>

//               <div className="mt-7 h-px w-16 bg-[#6055A6]" />
//             </div>

//             <div className="sg-new-reveal sg-delay-1">
//               <h2 className="max-w-[1100px] text-[44px] font-black leading-[0.94] tracking-[-0.065em] sm:text-[62px] lg:text-[76px]">
//                 A pest problem is easier to deal with when you know
//                 <span className="text-[#6055A6]">
//                   {" "}what you’re dealing with.
//                 </span>
//               </h2>

//               <div className="mt-10 grid gap-10 border-t border-black/10 pt-8 md:grid-cols-2">

//                 <p className="text-[15px] leading-7 text-black/50">
//                   SuperGuard Services Isleworth provides professional pest
//                   control for residential and commercial properties. We
//                   focus on understanding the pest activity and the property
//                   before deciding on an appropriate response.
//                 </p>

//                 <p className="text-[15px] leading-7 text-black/50">
//                   From rodents and bed bugs to wasp nests, our aim is to
//                   keep the process practical and straightforward — identify
//                   the issue, treat it appropriately and explain the next
//                   steps.
//                 </p>

//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           ABOUT — ASYMMETRIC IMAGE + TEXT
//       ====================================================== */}

//       <section className="bg-[#F7F6FA]">
//         <div className="grid lg:grid-cols-2">

//           <div className="sg-new-reveal sg-img-wrap min-h-[560px] lg:min-h-[720px]">
//             <img
//               src="/images/about-superguard.webp"
//               alt="SuperGuard Services Isleworth pest control"
//               className="sg-img h-full min-h-[560px] w-full object-cover lg:min-h-[720px]"
//               loading="lazy"
//             />

//             <div className="absolute bottom-0 left-0 bg-[#6055A6] px-7 py-6 text-white sm:px-10">
//               <p className="text-[8px] font-black uppercase tracking-[0.25em] text-white/50">
//                 Local Focus
//               </p>

//               <p className="mt-2 text-lg font-black tracking-[-0.03em]">
//                 Isleworth & nearby areas
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center px-6 py-20 sm:px-10 sm:py-28 lg:px-16 xl:px-24">

//             <div className="sg-new-reveal max-w-[620px]">

//               <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
//                 About Us
//               </p>

//               <h2 className="mt-6 text-[45px] font-black leading-[0.94] tracking-[-0.06em] sm:text-[60px]">
//                 Local service.
//                 <span className="block text-black/25">
//                   Practical thinking.
//                 </span>
//               </h2>

//               <p className="mt-8 text-[15px] leading-7 text-black/50">
//                 SuperGuard Services Isleworth is focused on helping
//                 property owners and occupiers deal with common pest
//                 problems through a clear and considered approach.
//               </p>

//               <div className="mt-10 space-y-0 border-t border-black/10">

//                 {[
//                   "Residential properties",
//                   "Landlords & rental properties",
//                   "Commercial premises",
//                   "Isleworth & nearby areas",
//                 ].map((item, index) => (
//                   <div
//                     key={item}
//                     className="flex items-center gap-5 border-b border-black/10 py-5"
//                   >
//                     <span className="text-[9px] font-black text-[#6055A6]">
//                       0{index + 1}
//                     </span>

//                     <span className="text-sm font-bold text-black/65">
//                       {item}
//                     </span>

//                     <Check
//                       size={15}
//                       className="ml-auto text-[#6055A6]"
//                     />
//                   </div>
//                 ))}
//               </div>

//               <Link
//                 to="/about-us"
//                 className="sg-line mt-9 inline-flex items-center gap-3 pb-2 text-[9px] font-black uppercase tracking-[0.17em] text-[#6055A6]"
//               >
//                 More About SuperGuard
//                 <ArrowUpRight size={15} />
//               </Link>

//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           SERVICES — EDITORIAL LIST, NOT CARDS
//       ====================================================== */}

//       <section className="bg-white py-24 sm:py-32 lg:py-40">
//         <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

//           <div className="sg-new-reveal grid gap-8 border-b border-black/10 pb-10 lg:grid-cols-[1fr_auto] lg:items-end">

//             <div>
//               <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
//                 02 / Services
//               </p>

//               <h2 className="mt-5 max-w-[850px] text-[50px] font-black leading-[0.9] tracking-[-0.07em] sm:text-[72px]">
//                 What can we
//                 <span className="text-black/20">
//                   {" "}help with?
//                 </span>
//               </h2>
//             </div>

//             <Link
//               to="/services"
//               className="sg-line inline-flex items-center gap-2 pb-2 text-[9px] font-black uppercase tracking-[0.17em] text-[#6055A6]"
//             >
//               All Services
//               <ArrowRight size={14} />
//             </Link>
//           </div>

//           <div className="mt-3">

//             {services.map((service, index) => {
//               const Icon = service.icon;

//               return (
//                 <Link
//                   key={service.number}
//                   to="/services"
//                   className={`sg-new-reveal sg-service-row group grid items-center gap-8 border-b border-black/10 py-8 sm:py-10 lg:grid-cols-[90px_280px_1fr_auto] lg:gap-10 lg:py-12 ${
//                     index === 0 ? "lg:pt-10" : ""
//                   }`}
//                 >
//                   <div className="flex items-center justify-between lg:block">
//                     <span className="text-[11px] font-black tracking-[0.12em] text-[#6055A6]">
//                       {service.number}
//                     </span>

//                     <Icon
//                       size={19}
//                       className="text-black/20 lg:mt-8"
//                     />
//                   </div>

//                   <div className="sg-img-wrap relative h-[210px] overflow-hidden sm:h-[270px] lg:h-[185px]">
//                     <img
//                       src={service.image}
//                       alt={`${service.title} pest control in Isleworth`}
//                       className="sg-service-image h-full w-full object-cover"
//                       loading="lazy"
//                     />

//                     <div className="absolute inset-0 bg-black/10" />
//                   </div>

//                   <div>
//                     <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#6055A6]">
//                       {service.label}
//                     </p>

//                     <h3 className="mt-3 text-[35px] font-black leading-none tracking-[-0.055em] sm:text-[45px]">
//                       {service.title}
//                     </h3>

//                     <p className="mt-5 max-w-[520px] text-sm leading-6 text-black/45">
//                       {service.description}
//                     </p>
//                   </div>

//                   <span className="sg-arrow flex h-12 w-12 items-center justify-center border border-black/10 bg-white text-[#6055A6]">
//                     <ArrowUpRight size={17} />
//                   </span>
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           DARK STATEMENT SECTION
//       ====================================================== */}

//       <section className="bg-[#24212D] py-24 text-white sm:py-32 lg:py-40">
//         <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

//           <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-28">

//             <div className="sg-new-reveal">

//               <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#A59ED8]">
//                 03 / Why SuperGuard
//               </p>

//               <div className="mt-8 h-px w-16 bg-[#6055A6]" />

//               <h2 className="mt-8 max-w-[480px] text-[50px] font-black leading-[0.9] tracking-[-0.065em] sm:text-[67px]">
//                 Simple
//                 <span className="block text-white/20">
//                   decisions.
//                 </span>
//                 Clear
//                 <span className="block text-[#A59ED8]">
//                   direction.
//                 </span>
//               </h2>

//               <p className="mt-8 max-w-[450px] text-[15px] leading-7 text-white/45">
//                 Good pest control starts with understanding the situation,
//                 rather than simply treating what is immediately visible.
//               </p>

//             </div>

//             <div className="sg-new-reveal sg-delay-1">

//               <div className="border-t border-white/10">

//                 {reasons.map((reason) => {
//                   const Icon = reason.icon;

//                   return (
//                     <div
//                       key={reason.no}
//                       className="sg-reason grid gap-5 border-b border-white/10 py-7 sm:grid-cols-[70px_1fr_auto] sm:items-center sm:py-9"
//                     >

//                       <span className="sg-reason-no flex h-11 w-11 items-center justify-center border border-white/10 text-[9px] font-black text-white/35">
//                         {reason.no}
//                       </span>

//                       <div>
//                         <h3 className="text-xl font-black tracking-[-0.025em]">
//                           {reason.title}
//                         </h3>

//                         <p className="mt-2 max-w-[520px] text-sm leading-6 text-white/35">
//                           {reason.text}
//                         </p>
//                       </div>

//                       <Icon
//                         size={20}
//                         className="hidden text-[#A59ED8] sm:block"
//                       />

//                     </div>
//                   );
//                 })}

//               </div>

//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           MISSION — IMAGE OVERLAP
//       ====================================================== */}

//       <section className="bg-white py-24 sm:py-32 lg:py-40">
//         <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

//           <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-24">

//             <div className="sg-new-reveal">

//               <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
//                 04 / Our Mission
//               </p>

//               <h2 className="mt-6 max-w-[750px] text-[50px] font-black leading-[0.9] tracking-[-0.07em] sm:text-[72px]">
//                 Solve the
//                 <span className="block text-[#6055A6]">
//                   problem.
//                 </span>
//                 Protect the
//                 <span className="block text-black/20">
//                   property.
//                 </span>
//               </h2>

//               <p className="mt-9 max-w-[600px] text-[15px] leading-7 text-black/50">
//                 Pest activity can involve hidden harbourage, access points
//                 and conditions around a property. Our approach is therefore
//                 focused on understanding the wider situation and taking
//                 practical steps.
//               </p>

//               <div className="mt-9 grid max-w-[620px] gap-3 sm:grid-cols-2">
//                 {[
//                   "Understand the activity",
//                   "Consider the property",
//                   "Choose a suitable response",
//                   "Reduce repeat activity",
//                 ].map((item) => (
//                   <div
//                     key={item}
//                     className="flex items-center gap-3 border-l-2 border-[#6055A6] bg-[#F7F6FA] px-4 py-4"
//                   >
//                     <Check
//                       size={14}
//                       className="text-[#6055A6]"
//                     />

//                     <span className="text-xs font-bold text-black/60">
//                       {item}
//                     </span>
//                   </div>
//                 ))}
//               </div>

//             </div>

//             <div className="sg-new-reveal sg-delay-2 relative">

//               <div className="absolute -left-5 -top-5 hidden h-40 w-40 bg-[#6055A6]/10 sm:block" />

//               <div className="relative overflow-hidden">
//                 <img
//                   src="/images/mission-superguard.webp"
//                   alt="SuperGuard Services mission"
//                   className="sg-img h-[520px] w-full object-cover sm:h-[650px]"
//                   loading="lazy"
//                 />
//               </div>

//               <div className="absolute bottom-0 right-0 bg-[#6055A6] px-6 py-5 text-white sm:px-8 sm:py-6">
//                 <Sparkles size={18} />

//                 <p className="mt-3 text-[8px] font-black uppercase tracking-[0.2em] text-white/50">
//                   SuperGuard
//                 </p>

//                 <p className="mt-1 text-sm font-black">
//                   Protecting local properties
//                 </p>
//               </div>

//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           PROCESS — HORIZONTAL EDITORIAL
//       ====================================================== */}

//       <section className="bg-[#F7F6FA] py-24 sm:py-32 lg:py-40">
//         <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

//           <div className="sg-new-reveal">

//             <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
//               05 / How It Works
//             </p>

//             <h2 className="mt-5 max-w-[900px] text-[50px] font-black leading-[0.9] tracking-[-0.07em] sm:text-[70px]">
//               From first contact
//               <span className="text-black/20">
//                 {" "}to next steps.
//               </span>
//             </h2>

//           </div>

//           <div className="mt-16 grid border-t border-black/10 lg:grid-cols-4">

//             {process.map((step, index) => (
//               <div
//                 key={step.no}
//                 className={`sg-new-reveal ${
//                   index > 0
//                     ? "border-t border-black/10 lg:border-l lg:border-t-0"
//                     : ""
//                 } p-7 sm:p-9 lg:min-h-[330px] lg:p-8 xl:p-10`}
//               >

//                 <div className="flex items-center justify-between">
//                   <span className="text-[10px] font-black text-[#6055A6]">
//                     {step.no}
//                   </span>

//                   <ArrowUpRight
//                     size={16}
//                     className="text-black/20"
//                   />
//                 </div>

//                 <h3 className="mt-20 text-2xl font-black tracking-[-0.04em]">
//                   {step.title}
//                 </h3>

//                 <p className="mt-4 text-sm leading-6 text-black/45">
//                   {step.text}
//                 </p>

//               </div>
//             ))}

//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           PROPERTY TYPES
//       ====================================================== */}

//       <section className="bg-white py-24 sm:py-32">
//         <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

//           <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

//             <div className="sg-new-reveal">

//               <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
//                 06 / Who We Help
//               </p>

//               <h2 className="mt-6 text-[48px] font-black leading-[0.9] tracking-[-0.065em] sm:text-[62px]">
//                 Different
//                 <span className="block text-black/20">
//                   properties.
//                 </span>
//                 Same clear
//                 <span className="block text-[#6055A6]">
//                   approach.
//                 </span>
//               </h2>

//             </div>

//             <div className="sg-new-reveal sg-delay-1">

//               {propertyTypes.map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={item.title}
//                     className="group flex items-center gap-6 border-b border-black/10 py-7 sm:py-9"
//                   >

//                     <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#F7F6FA] text-[#6055A6] transition group-hover:bg-[#6055A6] group-hover:text-white">
//                       <Icon size={19} />
//                     </span>

//                     <div>
//                       <div className="flex items-center gap-3">
//                         <span className="text-[8px] font-black text-[#6055A6]">
//                           0{index + 1}
//                         </span>

//                         <h3 className="text-xl font-black tracking-[-0.025em]">
//                           {item.title}
//                         </h3>
//                       </div>

//                       <p className="mt-2 text-sm leading-6 text-black/40">
//                         {item.text}
//                       </p>
//                     </div>

//                     <ArrowRight
//                       size={16}
//                       className="ml-auto text-black/20 transition group-hover:translate-x-1 group-hover:text-[#6055A6]"
//                     />

//                   </div>
//                 );
//               })}

//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           LOCAL COVERAGE — NEW MAP-STYLE PANEL
//       ====================================================== */}

//       <section className="bg-[#F7F6FA] py-24 sm:py-32">
//         <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

//           <div className="grid overflow-hidden bg-[#24212D] lg:grid-cols-[1.2fr_0.8fr]">

//             <div className="relative min-h-[500px] overflow-hidden p-8 text-white sm:p-12 lg:min-h-[600px] lg:p-16">

//               <div className="absolute inset-0 opacity-60">
//                 <div className="absolute left-[15%] top-[20%] h-[1px] w-[70%] rotate-[12deg] bg-white/10" />
//                 <div className="absolute left-[5%] top-[45%] h-[1px] w-[80%] rotate-[-17deg] bg-white/10" />
//                 <div className="absolute left-[25%] top-[70%] h-[1px] w-[60%] rotate-[8deg] bg-white/10" />
//                 <div className="absolute left-[50%] top-[5%] h-[90%] w-[1px] rotate-[20deg] bg-white/10" />
//                 <div className="absolute left-[30%] top-[10%] h-[80%] w-[1px] rotate-[-28deg] bg-white/10" />
//               </div>

//               <div className="absolute left-[42%] top-[38%] flex h-24 w-24 items-center justify-center rounded-full border border-[#6055A6]/50">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6055A6] shadow-[0_0_0_15px_rgba(96,85,166,0.12)]">
//                   <MapPin size={20} />
//                 </div>
//               </div>

//               <div className="relative z-10">

//                 <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#A59ED8]">
//                   07 / Local Coverage
//                 </p>

//                 <h2 className="mt-6 max-w-[650px] text-[48px] font-black leading-[0.9] tracking-[-0.065em] sm:text-[68px]">
//                   Based in
//                   <span className="block text-white/20">
//                     Isleworth.
//                   </span>
//                   Serving
//                   <span className="block text-[#A59ED8]">
//                     nearby areas.
//                   </span>
//                 </h2>

//               </div>

//               <div className="absolute bottom-8 left-8 right-8 z-10 flex items-end justify-between border-t border-white/10 pt-5 sm:bottom-12 sm:left-12 sm:right-12 lg:bottom-16 lg:left-16 lg:right-16">

//                 <div>
//                   <p className="text-[8px] font-black uppercase tracking-[0.2em] text-white/30">
//                     Base
//                   </p>

//                   <p className="mt-2 text-sm font-bold text-white/70">
//                     {LOCAL.area}, London
//                   </p>
//                 </div>

//                 <MapPin
//                   size={17}
//                   className="text-[#A59ED8]"
//                 />

//               </div>
//             </div>

//             <div className="flex flex-col justify-between bg-[#6055A6] p-8 text-white sm:p-12 lg:p-14">

//               <div>
//                 <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/45">
//                   Local Address
//                 </p>

//                 <p className="mt-5 max-w-[360px] text-[24px] font-black leading-[1.05] tracking-[-0.04em] sm:text-[31px]">
//                   {LOCAL.streetAddress}
//                   <span className="block text-white/45">
//                     {LOCAL.area} {LOCAL.postcode}
//                   </span>
//                 </p>
//               </div>

//               <div className="mt-16">

//                 <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/45">
//                   Call SuperGuard
//                 </p>

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="mt-4 block text-[27px] font-black tracking-[-0.04em] sm:text-[35px]"
//                 >
//                   {LOCAL.phoneDisplay}
//                 </a>

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="sg-cta mt-7 inline-flex items-center gap-3 bg-[#24212D] px-6 py-4 text-[9px] font-black uppercase tracking-[0.17em] hover:bg-[#15131A]"
//                 >
//                   <Phone size={14} />
//                   Call Local Team
//                   <ArrowUpRight size={14} />
//                 </a>

//               </div>

//             </div>

//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           FINAL CTA — COMPLETELY DIFFERENT
//       ====================================================== */}

//       <section className="bg-white py-24 sm:py-32 lg:py-40">
//         <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

//           <div className="sg-new-reveal border-y border-black/10 py-14 sm:py-20 lg:py-24">

//             <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

//               <div>

//                 <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
//                   SuperGuard Services Isleworth
//                 </p>

//                 <h2 className="mt-6 max-w-[1000px] text-[52px] font-black leading-[0.86] tracking-[-0.075em] sm:text-[75px] lg:text-[94px]">
//                   Got a pest
//                   <span className="text-black/20">
//                     {" "}problem?
//                   </span>
//                   <span className="block text-[#6055A6]">
//                     Let’s deal with it.
//                   </span>
//                 </h2>

//                 <p className="mt-8 max-w-[580px] text-[15px] leading-7 text-black/45">
//                   Contact SuperGuard Services Isleworth to discuss the
//                   pest activity affecting your property.
//                 </p>

//               </div>

//               <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="sg-cta inline-flex min-h-[58px] items-center justify-center gap-3 bg-[#6055A6] px-7 text-[9px] font-black uppercase tracking-[0.17em] text-white hover:bg-[#51478F]"
//                 >
//                   <Phone size={15} />
//                   {LOCAL.phoneDisplay}
//                   <ArrowUpRight size={15} />
//                 </a>

//                 <Link
//                   to="/contact-us"
//                   className="sg-cta inline-flex min-h-[58px] items-center justify-center gap-3 border border-black/10 px-7 text-[9px] font-black uppercase tracking-[0.17em] text-black/60 hover:border-[#6055A6] hover:text-[#6055A6]"
//                 >
//                   Send An Enquiry
//                   <ArrowRight size={15} />
//                 </Link>

//               </div>

//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           END CONTACT BAR — NOT FOOTER
//       ====================================================== */}

//       {/* <section className="border-t border-black/10 bg-[#F7F6FA]">
//         <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 py-7 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">

//           <div>
//             <p className="text-[8px] font-black uppercase tracking-[0.22em] text-black/30">
//               SuperGuard Services Isleworth
//             </p>

//             <p className="mt-2 text-sm font-bold">
//               {LOCAL.fullAddress}
//             </p>
//           </div>

//           <div className="flex flex-wrap items-center gap-5">

//             <a
//               href={`tel:${LOCAL.phoneTel}`}
//               className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.15em] text-[#6055A6]"
//             >
//               <Phone size={14} />
//               {LOCAL.phoneDisplay}
//             </a>

//             <Link
//               to="/services"
//               className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.15em] text-black/50 hover:text-[#6055A6]"
//             >
//               Services
//               <ArrowRight size={14} />
//             </Link>

//             <Link
//               to="/contact-us"
//               className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.15em] text-black/50 hover:text-[#6055A6]"
//             >
//               Contact
//               <ArrowRight size={14} />
//             </Link>

//           </div>

//         </div>
//       </section> */}
//     </main>
//   );
// }










// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

// import {
//   ArrowRight,
//   ArrowUpRight,
//   Bug,
//   Check,
//   ChevronDown,
//   Clock3,
//   Home,
//   Lock,
//   MapPin,
//   Navigation,
//   Phone,
//   PhoneCall,
//   Rat,
//   Search,
//   ShieldCheck,
//   Sparkles,
//   Target,
//   User,
// } from "lucide-react";

// export default function HomePage() {
//   /* =========================================================
//      LOCAL BUSINESS DETAILS
//   ========================================================= */

//   const LOCAL = {
//     company: "SuperGuard Services Chelsea",
//     shortName: "SuperGuard Chelsea",
//     area: "Chelsea",
//     city: "London",
//     postcode: "SW3 6NU",
//     streetAddress: "13 Guthrie St",
//     fullAddress: "13 Guthrie St, London SW3 6NU",
//     phoneDisplay: "07405 745692",
//     phoneTel: "+447405745692",
//   };

//   /* =========================================================
//      API
//   ========================================================= */

//   const API_URL =
//     "https://superguard-wickham-backend.vercel.app/api/callback";

//   /* =========================================================
//      FORM STATE
//   ========================================================= */

//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [phoneError, setPhoneError] = useState("");
//   const [openFaq, setOpenFaq] = useState(0);

//   /* =========================================================
//      FORM HANDLERS
//   ========================================================= */

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormData((previous) => ({
//       ...previous,
//       [name]: value,
//     }));

//     if (name === "phone") {
//       setPhoneError("");
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!formData.phone.trim()) {
//       setPhoneError("Please enter your phone number.");
//       return;
//     }

//     setLoading(true);

//     toast.promise(
//       axios.post(API_URL, {
//         ...formData,
//         area: LOCAL.area,
//         business: LOCAL.company,
//         address: LOCAL.fullAddress,
//       }),
//       {
//         loading: "Sending request...",

//         success: () => {
//           setLoading(false);

//           setFormData({
//             name: "",
//             postcode: "",
//             phone: "",
//           });

//           return "Your callback request has been sent.";
//         },

//         error: (error) => {
//           setLoading(false);

//           return (
//             error.response?.data?.message ||
//             "Something went wrong. Please try again."
//           );
//         },
//       }
//     );
//   };

//   /* =========================================================
//      REVEAL ANIMATION
//   ========================================================= */

//   useEffect(() => {
//     const elements = document.querySelectorAll(".sgc-reveal");

//     if (!("IntersectionObserver" in window)) {
//       elements.forEach((el) => el.classList.add("sgc-visible"));
//       return;
//     }

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (!entry.isIntersecting) return;

//           entry.target.classList.add("sgc-visible");
//           observer.unobserve(entry.target);
//         });
//       },
//       {
//         threshold: 0.08,
//         rootMargin: "0px 0px -40px 0px",
//       }
//     );

//     elements.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   /* =========================================================
//      TRUST ITEMS
//   ========================================================= */

//   const trustItems = [
//     "Local Chelsea specialists",
//     "Domestic & commercial",
//     "Discreet service",
//     "Professional treatment",
//   ];

//   /* =========================================================
//      SERVICES
//   ========================================================= */

//   const services = [
//     {
//       number: "01",
//       title: "Rats & Mice",
//       category: "RODENT CONTROL",
//       image: "/images/rodents.webp",
//       icon: Rat,
//       description:
//         "Professional rodent control for homes, flats, gardens, lofts and commercial properties across Chelsea and nearby areas.",
//       points: [
//         "Rodent inspection",
//         "Activity assessment",
//         "Targeted treatment",
//       ],
//     },

//     {
//       number: "02",
//       title: "Bed Bugs",
//       category: "BED BUG CONTROL",
//       image: "/images/bedbugs.webp",
//       icon: Bug,
//       description:
//         "Focused bed bug treatment designed to identify signs of activity, assess harbourage and tackle infestations professionally.",
//       points: [
//         "Harbourage inspection",
//         "Infestation assessment",
//         "Professional treatment",
//       ],
//     },

//     {
//       number: "03",
//       title: "Wasp Nests",
//       category: "WASP CONTROL",
//       image: "/images/wasps.webp",
//       icon: ShieldCheck,
//       description:
//         "Professional wasp nest control for nests around roofs, walls, gardens and other areas around your property.",
//       points: [
//         "Nest identification",
//         "Targeted treatment",
//         "Safety advice",
//       ],
//     },
//   ];

//   /* =========================================================
//      WHY CHOOSE US
//   ========================================================= */

//   const reasons = [
//     {
//       number: "01",
//       title: "Local Knowledge",
//       text: "A Chelsea-focused service means practical knowledge of local residential and commercial properties.",
//       icon: MapPin,
//     },

//     {
//       number: "02",
//       title: "Professional Approach",
//       text: "We focus on identifying the pest problem before choosing a suitable treatment approach.",
//       icon: ShieldCheck,
//     },

//     {
//       number: "03",
//       title: "Discreet Service",
//       text: "Our approach is designed to minimise disruption to your home, tenants, customers or staff.",
//       icon: Lock,
//     },

//     {
//       number: "04",
//       title: "Practical Solutions",
//       text: "We look beyond the immediate signs and consider how pest activity can be reduced going forward.",
//       icon: Target,
//     },
//   ];

//   /* =========================================================
//      PROCESS
//   ========================================================= */

//   const process = [
//     {
//       number: "01",
//       title: "Inspect",
//       text: "We assess visible signs, activity and potential harbourage around the property.",
//       icon: Search,
//     },

//     {
//       number: "02",
//       title: "Identify",
//       text: "We establish what pest issue you are dealing with and where activity is occurring.",
//       icon: Bug,
//     },

//     {
//       number: "03",
//       title: "Treat",
//       text: "We select a targeted treatment approach appropriate to the situation.",
//       icon: Target,
//     },

//     {
//       number: "04",
//       title: "Protect",
//       text: "We provide practical advice to help reduce the chance of recurring pest activity.",
//       icon: ShieldCheck,
//     },
//   ];

//   /* =========================================================
//      STATS
//   ========================================================= */

//   const stats = [
//     {
//       value: "01",
//       label: "Chelsea",
//       text: "Dedicated local service area",
//     },

//     {
//       value: "02",
//       label: "Property Types",
//       text: "Homes, flats & businesses",
//     },

//     {
//       value: "03",
//       label: "Approach",
//       text: "Inspect, treat & protect",
//     },

//     {
//       value: "04",
//       label: "Support",
//       text: "Direct local contact",
//     },
//   ];

//   /* =========================================================
//      FAQ
//   ========================================================= */

//   const faqs = [
//     {
//       question: "What areas do you cover?",
//       answer:
//         "SuperGuard Services Chelsea focuses on Chelsea and nearby areas across London. Contact us with your postcode and property details and we can discuss your requirements.",
//     },

//     {
//       question: "Do you provide domestic and commercial pest control?",
//       answer:
//         "Yes. Our service is designed for residential properties as well as landlords, businesses and other commercial premises.",
//     },

//     {
//       question: "What pests can you help with?",
//       answer:
//         "Our services include common pest problems such as rats and mice, bed bugs and wasp nests. If you are dealing with another pest issue, contact us to discuss it.",
//     },

//     {
//       question: "Can I request a callback?",
//       answer:
//         "Yes. Use the callback form on this page with your name, postcode and phone number. Your request will be sent directly to our callback system.",
//     },

//     {
//       question: "Do you cover nearby areas outside Chelsea?",
//       answer:
//         "We focus on Chelsea and surrounding areas. Give us your postcode and we can confirm whether your property is within our service area.",
//     },
//   ];

//   return (
//     <main
//       id="top"
//       className="relative overflow-hidden bg-white text-[#15131A]"
//     >
//       <Toaster position="top-center" />

//       {/* =====================================================
//           CUSTOM CSS
//       ===================================================== */}

//       <style>{`
//         .sgc-reveal {
//           opacity: 0;
//           transform: translateY(28px);
//           transition:
//             opacity 700ms cubic-bezier(0.16, 1, 0.3, 1),
//             transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .sgc-visible {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .sgc-card {
//           transition:
//             transform 350ms cubic-bezier(0.16, 1, 0.3, 1),
//             box-shadow 350ms ease,
//             border-color 350ms ease;
//         }

//         .sgc-card:hover {
//           transform: translateY(-6px);
//           box-shadow: 0 25px 60px rgba(20, 15, 30, 0.10);
//           border-color: rgba(96, 85, 166, 0.30);
//         }

//         .sgc-image {
//           transition: transform 750ms cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .sgc-card:hover .sgc-image {
//           transform: scale(1.045);
//         }

//         .sgc-button {
//           transition:
//             transform 300ms ease,
//             background-color 300ms ease,
//             border-color 300ms ease,
//             color 300ms ease,
//             box-shadow 300ms ease;
//         }

//         .sgc-button:hover {
//           transform: translateY(-2px);
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .sgc-reveal,
//           .sgc-card,
//           .sgc-image,
//           .sgc-button {
//             transition: none;
//           }

//           .sgc-reveal {
//             opacity: 1;
//             transform: none;
//           }
//         }
//       `}</style>

//       {/* =====================================================
//           HERO
//       ===================================================== */}

//       <section
//         itemScope
//         itemType="https://schema.org/PestControl"
//         className="relative min-h-screen overflow-hidden bg-[#6055A6] text-white"
//       >
//         <meta itemProp="name" content={LOCAL.company} />

//         <meta itemProp="telephone" content={LOCAL.phoneDisplay} />

//         <meta
//           itemProp="areaServed"
//           content={`${LOCAL.area}, ${LOCAL.city}`}
//         />

//         <div
//           itemProp="address"
//           itemScope
//           itemType="https://schema.org/PostalAddress"
//           className="hidden"
//         >
//           <meta
//             itemProp="streetAddress"
//             content={LOCAL.streetAddress}
//           />

//           <meta
//             itemProp="addressLocality"
//             content={LOCAL.city}
//           />

//           <meta
//             itemProp="postalCode"
//             content={LOCAL.postcode}
//           />

//           <meta itemProp="addressCountry" content="GB" />
//         </div>

//         {/* HERO BACKGROUND */}

//         <div className="pointer-events-none absolute inset-0">
//           <div className="absolute left-[-180px] top-[-180px] h-[520px] w-[520px] rounded-full border border-white/[0.08]" />

//           <div className="absolute left-[-100px] top-[-100px] h-[360px] w-[360px] rounded-full border border-white/[0.07]" />

//           <div className="absolute right-[-160px] bottom-[-180px] h-[550px] w-[550px] rounded-full border border-white/[0.08]" />

//           <div className="absolute right-[7%] top-0 hidden h-full w-px bg-white/[0.08] lg:block" />

//           <div className="absolute left-[7%] top-0 hidden h-full w-px bg-white/[0.08] lg:block" />
//         </div>

//         <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">

//           {/* TOP BAR */}


//           {/* HERO CONTENT */}

//           <div className="grid lg:min-h-[760px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

//             {/* LEFT */}

//             <div className="flex flex-col justify-center py-16 sm:py-20 lg:py-24">

//               <div className="flex items-center gap-3">
//                 <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/25">
//                   <Sparkles size={12} />
//                 </span>

//                 <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/65">
//                   Chelsea pest specialists
//                 </span>
//               </div>

//               <h1 className="mt-8 max-w-[850px] text-[58px] font-black uppercase leading-[0.83] tracking-[-0.07em] sm:text-[76px] md:text-[90px] lg:text-[88px] xl:text-[110px]">
//                 Pest

//                 <span className="block">
//                   problems
//                 </span>

//                 <span className="block text-white/35">
//                   end here.
//                 </span>
//               </h1>

//               <div className="mt-9 flex items-center gap-2">
//                 <div className="h-[4px] w-16 bg-white" />
//                 <div className="h-[4px] w-7 bg-white/45" />
//                 <div className="h-[4px] w-2 bg-white/25" />
//               </div>

//               <p className="mt-7 max-w-[590px] text-sm leading-7 text-white/65 sm:text-base">
//                 Professional pest control for homes, landlords and
//                 businesses across{" "}
//                 <strong className="font-black text-white">
//                   Chelsea and nearby areas
//                 </strong>
//                 . A local, discreet and practical approach to common
//                 pest problems.
//               </p>

//               <div className="mt-9 flex flex-wrap gap-3">

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="sgc-button group flex items-center gap-3 bg-white px-5 py-4 text-[#6055A6] shadow-[0_20px_50px_rgba(40,30,80,0.22)]"
//                 >
//                   <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#6055A6] text-white">
//                     <PhoneCall size={14} />
//                   </span>

//                   <span>
//                     <span className="block text-[7px] font-bold uppercase tracking-[0.2em] opacity-50">
//                       Call today
//                     </span>

//                     <span className="block text-xs font-black">
//                       {LOCAL.phoneDisplay}
//                     </span>
//                   </span>

//                   <ArrowUpRight
//                     size={15}
//                     className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
//                   />
//                 </a>

//                 <Link
//                   to="/services"
//                   className="sgc-button group flex items-center gap-3 border border-white/25 px-5 py-4 hover:bg-white/[0.08]"
//                 >
//                   <span className="text-[9px] font-black uppercase tracking-[0.18em]">
//                     Explore services
//                   </span>

//                   <ArrowRight
//                     size={15}
//                     className="transition-transform group-hover:translate-x-1"
//                   />
//                 </Link>

//               </div>

//               <div className="mt-12 grid max-w-[760px] grid-cols-2 border-t border-white/[0.14] sm:grid-cols-4">
//                 {trustItems.map((item) => (
//                   <div
//                     key={item}
//                     className="flex items-center gap-2 border-b border-white/[0.10] py-4 sm:border-b-0 sm:border-r sm:px-4 sm:first:pl-0 sm:last:border-r-0"
//                   >
//                     <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/[0.10]">
//                       <Check size={12} />
//                     </div>

//                     <span className="text-[8px] font-bold uppercase leading-3 tracking-[0.08em] text-white/55">
//                       {item}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* RIGHT */}

//             <div className="relative flex items-center justify-center py-10 lg:py-20">

//               <div className="relative w-full max-w-[490px] overflow-hidden bg-white p-1 text-[#15131A] shadow-[0_35px_100px_rgba(40,30,80,0.30)]">

//                 <div className="relative h-[230px] overflow-hidden sm:h-[280px]">

//                   <img
//                     src="/images/superguard-hero.webp"
//                     alt="SuperGuard Services Chelsea pest control"
//                     className="h-full w-full object-cover"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

//                   <div className="absolute bottom-5 left-5">
//                     <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-white/60">
//                       Local service
//                     </p>

//                     <p className="mt-1 text-xl font-black uppercase tracking-[-0.04em] text-white">
//                       Chelsea & nearby
//                     </p>
//                   </div>
//                 </div>

//                 <div className="border border-[#6055A6]/15 p-6 sm:p-8">

//                   <div className="flex items-start justify-between border-b border-[#E7E4ED] pb-6">

//                     <div>
//                       <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
//                         Request a callback
//                       </p>

//                       <h2 className="mt-2 text-[34px] font-black uppercase leading-[0.9] tracking-[-0.055em] sm:text-[40px]">
//                         Let's talk

//                         <span className="block text-[#6055A6]">
//                           pests.
//                         </span>
//                       </h2>
//                     </div>

//                     <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#6055A6] text-white">
//                       <PhoneCall size={19} />
//                     </div>

//                   </div>

//                   <p className="mt-5 max-w-[360px] text-xs leading-5 text-[#777481]">
//                     Tell us where you need help and a local Chelsea
//                     specialist can get back to you.
//                   </p>

//                   <form
//                     onSubmit={handleSubmit}
//                     className="mt-6 space-y-3"
//                   >

//                     {/* NAME */}

//                     <div className="flex h-[56px] border border-[#DDD9E5] bg-[#FAF9FC] transition-all focus-within:border-[#6055A6] focus-within:bg-white">

//                       <div className="flex w-14 shrink-0 items-center justify-center border-r border-[#E7E4EC]">
//                         <User
//                           size={17}
//                           className="text-[#6055A6]"
//                         />
//                       </div>

//                       <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Full Name"
//                         required
//                         className="min-w-0 flex-1 bg-transparent px-4 text-xs font-semibold text-[#292631] outline-none placeholder:text-[#A09CA9]"
//                       />

//                     </div>

//                     {/* POSTCODE */}

//                     <div className="flex h-[56px] border border-[#DDD9E5] bg-[#FAF9FC] transition-all focus-within:border-[#6055A6] focus-within:bg-white">

//                       <div className="flex w-14 shrink-0 items-center justify-center border-r border-[#E7E4EC]">
//                         <Navigation
//                           size={17}
//                           className="text-[#6055A6]"
//                         />
//                       </div>

//                       <input
//                         type="text"
//                         name="postcode"
//                         value={formData.postcode}
//                         onChange={handleChange}
//                         placeholder="Your Postcode"
//                         required
//                         className="min-w-0 flex-1 bg-transparent px-4 text-xs font-semibold uppercase text-[#292631] outline-none placeholder:normal-case placeholder:text-[#A09CA9]"
//                       />

//                     </div>

//                     {/* PHONE */}

//                     <div
//                       className={`flex min-h-[56px] border bg-[#FAF9FC] transition-all focus-within:bg-white ${
//                         phoneError
//                           ? "border-red-400"
//                           : "border-[#DDD9E5] focus-within:border-[#6055A6]"
//                       }`}
//                     >

//                       <div className="flex w-14 shrink-0 items-center justify-center border-r border-[#E7E4EC]">
//                         <PhoneCall
//                           size={17}
//                           className={
//                             phoneError
//                               ? "text-red-500"
//                               : "text-[#6055A6]"
//                           }
//                         />
//                       </div>

//                       <div className="min-w-0 flex-1">

//                         <input
//                           type="tel"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleChange}
//                           placeholder="Phone Number"
//                           required
//                           aria-invalid={Boolean(phoneError)}
//                           className="h-[56px] w-full bg-transparent px-4 text-xs font-semibold text-[#292631] outline-none placeholder:text-[#A09CA9]"
//                         />

//                         {phoneError && (
//                           <p className="px-4 pb-2 text-[8px] font-bold text-red-500">
//                             {phoneError}
//                           </p>
//                         )}

//                       </div>
//                     </div>

//                     {/* SUBMIT */}

//                     <button
//                       type="submit"
//                       disabled={loading}
//                       className="group flex h-[58px] w-full items-center justify-between bg-[#6055A6] text-white transition-all duration-300 hover:bg-[#514791] disabled:cursor-not-allowed disabled:opacity-60"
//                     >

//                       <span className="pl-5 text-[10px] font-black uppercase tracking-[0.17em]">
//                         {loading
//                           ? "Sending Request..."
//                           : "Request A Callback"}
//                       </span>

//                       <span className="flex h-full w-16 items-center justify-center bg-black/15">

//                         {loading ? (
//                           <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
//                         ) : (
//                           <ArrowRight
//                             size={19}
//                             className="transition-transform group-hover:translate-x-1"
//                           />
//                         )}

//                       </span>
//                     </button>

//                   </form>

//                   <div className="mt-5 flex items-center justify-between">

//                     <div className="flex items-center gap-2">
//                       <ShieldCheck
//                         size={18}
//                         className="text-[#6055A6]"
//                       />

//                       <p className="text-[8px] font-semibold leading-3.5 text-[#777481]">
//                         Your details are secure
//                         <br />
//                         and never shared.
//                       </p>
//                     </div>

//                     <Lock
//                       size={15}
//                       className="text-[#A5A1AE]"
//                     />

//                   </div>

//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* HERO BOTTOM STRIP */}

//           <div className="border-t border-white/[0.14]">

//             <div className="grid sm:grid-cols-2 lg:grid-cols-4">

//               {[
//                 {
//                   icon: ShieldCheck,
//                   title: "Professional",
//                   text: "Practical pest control",
//                 },
//                 {
//                   icon: MapPin,
//                   title: "Local",
//                   text: "Chelsea & nearby areas",
//                 },
//                 {
//                   icon: Clock3,
//                   title: "Available",
//                   text: "Direct local contact",
//                 },
//                 {
//                   icon: PhoneCall,
//                   title: "Call Today",
//                   text: LOCAL.phoneDisplay,
//                 },
//               ].map((item) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={item.title}
//                     className="flex items-center gap-3 border-b border-white/[0.10] py-5 lg:border-b-0 lg:border-r lg:px-6 lg:last:border-r-0"
//                   >

//                     <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.08]">
//                       <Icon size={16} />
//                     </div>

//                     <div>
//                       <p className="text-[8px] font-black uppercase tracking-[0.18em]">
//                         {item.title}
//                       </p>

//                       <p className="mt-1 text-[8px] text-white/40">
//                         {item.text}
//                       </p>
//                     </div>

//                   </div>
//                 );
//               })}

//             </div>
//           </div>

//         </div>
//       </section>

//       {/* =====================================================
//           ABOUT
//       ===================================================== */}

//       <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">

//         <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full border border-[#6055A6]/[0.06]" />

//         <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10 xl:px-12">

//           <div className="sgc-reveal grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">

//             {/* IMAGES */}

//             <div className="relative min-h-[560px]">

//               <div className="absolute left-0 top-0 h-[410px] w-[78%] overflow-hidden rounded-[2px] sm:h-[470px]">

//                 <img
//                   src="/images/about-superguard.webp"
//                   alt="About SuperGuard Services Chelsea"
//                   className="sgc-image h-full w-full object-cover"
//                   loading="lazy"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
//               </div>

//               <div className="absolute bottom-0 right-0 w-[54%] overflow-hidden border-[10px] border-white bg-white shadow-[0_25px_60px_rgba(20,15,30,0.13)]">

//                 <img
//                   src="/images/mission-superguard.webp"
//                   alt="SuperGuard Services Chelsea mission"
//                   className="sgc-image aspect-[4/3] w-full object-cover"
//                   loading="lazy"
//                 />

//               </div>

//               <div className="absolute bottom-[90px] left-[-8px] hidden items-center gap-2 bg-[#6055A6] px-4 py-3 text-white shadow-xl sm:flex">

//                 <ShieldCheck size={16} />

//                 <span className="text-[8px] font-black uppercase tracking-[0.18em]">
//                   Local pest specialists
//                 </span>

//               </div>

//               <div className="absolute right-[5%] top-[30px] hidden h-20 w-20 rounded-full border border-white/70 bg-[#6055A6] p-2 sm:flex">

//                 <div className="flex h-full w-full items-center justify-center rounded-full border border-white/20 text-center text-[7px] font-black uppercase tracking-[0.1em] text-white">
//                   Chelsea
//                   <br />
//                   London
//                 </div>

//               </div>

//             </div>

//             {/* CONTENT */}

//             <div>

//               <div className="flex items-center gap-3">

//                 <span className="h-[2px] w-10 bg-[#6055A6]" />

//                 <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
//                   About SuperGuard
//                 </span>

//               </div>

//               <h2 className="mt-5 max-w-[720px] text-[43px] font-black leading-[0.94] tracking-[-0.055em] sm:text-[54px] lg:text-[68px]">

//                 A local approach to

//                 <span className="block text-[#6055A6]">
//                   pest control.
//                 </span>

//               </h2>

//               <p className="mt-7 max-w-[620px] text-[15px] leading-7 text-black/55">
//                 SuperGuard Services Chelsea provides professional pest
//                 control for residential and commercial properties in
//                 Chelsea and nearby areas.
//               </p>

//               <p className="mt-5 max-w-[620px] text-[15px] leading-7 text-black/45">
//                 From rodents and bed bugs to wasp nests, our approach
//                 starts with understanding the problem, identifying where
//                 activity is occurring and choosing a practical response
//                 for the property.
//               </p>

//               <div className="mt-9 grid gap-3 sm:grid-cols-2">

//                 {[
//                   "Chelsea focused",
//                   "Residential properties",
//                   "Commercial properties",
//                   "Discreet service",
//                 ].map((item) => (

//                   <div
//                     key={item}
//                     className="flex items-center gap-3 border-b border-black/10 pb-4"
//                   >

//                     <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#6055A6]/10 text-[#6055A6]">
//                       <Check size={13} />
//                     </span>

//                     <span className="text-[9px] font-black uppercase tracking-[0.12em]">
//                       {item}
//                     </span>

//                   </div>

//                 ))}

//               </div>

//               <div className="mt-9 flex flex-wrap gap-3">

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="sgc-button inline-flex items-center gap-3 rounded-full bg-[#6055A6] px-6 py-4 text-[9px] font-black uppercase tracking-[0.15em] text-white shadow-lg shadow-[#6055A6]/15 hover:bg-[#514791]"
//                 >
//                   <Phone size={14} />

//                   Call {LOCAL.phoneDisplay}

//                   <ArrowUpRight size={14} />
//                 </a>

//                 <Link
//                   to="/about-us"
//                   className="sgc-button inline-flex items-center gap-3 rounded-full border border-black/15 px-6 py-4 text-[9px] font-black uppercase tracking-[0.15em] text-black/70 hover:border-[#6055A6] hover:text-[#6055A6]"
//                 >
//                   More about us

//                   <ArrowRight size={14} />
//                 </Link>

//               </div>

//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           STATS
//       ===================================================== */}

//       <section className="bg-[#F7F6FA] py-16 sm:py-20">

//         <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10 xl:px-12">

//           <div className="sgc-reveal grid border border-black/10 sm:grid-cols-2 lg:grid-cols-4">

//             {stats.map((stat, index) => (

//               <div
//                 key={stat.value}
//                 className={`relative p-7 sm:p-9 ${
//                   index < 3
//                     ? "border-b lg:border-b-0 lg:border-r"
//                     : ""
//                 } ${
//                   index === 0
//                     ? "sm:border-r"
//                     : ""
//                 }`}
//               >

//                 <p className="text-[54px] font-black leading-none tracking-[-0.08em] text-[#6055A6]/20">
//                   {stat.value}
//                 </p>

//                 <p className="mt-5 text-[10px] font-black uppercase tracking-[0.2em] text-[#6055A6]">
//                   {stat.label}
//                 </p>

//                 <p className="mt-2 max-w-[180px] text-xs leading-5 text-black/45">
//                   {stat.text}
//                 </p>

//               </div>

//             ))}

//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           WHY CHOOSE US
//       ===================================================== */}

//       <section className="relative overflow-hidden bg-[#15131A] py-20 text-white sm:py-24 lg:py-32">

//         <div className="pointer-events-none absolute right-[-150px] top-[-150px] h-[500px] w-[500px] rounded-full border border-white/[0.06]" />

//         <div className="pointer-events-none absolute bottom-[-250px] left-[-120px] h-[500px] w-[500px] rounded-full bg-[#6055A6]/10 blur-[100px]" />

//         <div className="relative z-10 mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10 xl:px-12">

//           <div className="sgc-reveal grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

//             <div>

//               <div className="flex items-center gap-3">

//                 <span className="h-[2px] w-10 bg-[#6055A6]" />

//                 <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#A9A3D5]">
//                   Why choose us
//                 </span>

//               </div>

//               <h2 className="mt-6 max-w-[650px] text-[44px] font-black leading-[0.93] tracking-[-0.055em] sm:text-[56px] lg:text-[68px]">

//                 Why choose

//                 <span className="block text-[#8F87C7]">
//                   SuperGuard Chelsea?
//                 </span>

//               </h2>

//               <p className="mt-7 max-w-[480px] text-sm leading-7 text-white/45">
//                 When pests become a problem, you need a service that
//                 understands the situation and keeps the process
//                 straightforward.
//               </p>

//               <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-6">

//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6055A6]">
//                   <MapPin size={19} />
//                 </div>

//                 <div>

//                   <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/35">
//                     Local focus
//                   </p>

//                   <p className="mt-1 text-sm font-black">
//                     Chelsea & nearby areas
//                   </p>

//                 </div>

//               </div>
//             </div>

//             <div className="grid gap-3 sm:grid-cols-2">

//               {reasons.map((reason) => {

//                 const Icon = reason.icon;

//                 return (

//                   <div
//                     key={reason.number}
//                     className="group border border-white/10 bg-white/[0.035] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#6055A6]/50 hover:bg-white/[0.055]"
//                   >

//                     <div className="flex items-start justify-between">

//                       <span className="text-[44px] font-black leading-none tracking-[-0.07em] text-white/[0.08]">
//                         {reason.number}
//                       </span>

//                       <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#6055A6]/15 text-[#9B93D2] transition-all duration-300 group-hover:bg-[#6055A6] group-hover:text-white">
//                         <Icon size={18} />
//                       </div>

//                     </div>

//                     <h3 className="mt-10 text-xl font-black tracking-[-0.03em]">
//                       {reason.title}
//                     </h3>

//                     <p className="mt-3 text-xs leading-6 text-white/40">
//                       {reason.text}
//                     </p>

//                   </div>

//                 );

//               })}

//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           SERVICES
//       ===================================================== */}

//       <section
//         id="services"
//         className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
//       >

//         <div className="pointer-events-none absolute left-[-180px] top-[20%] h-[450px] w-[450px] rounded-full bg-[#6055A6]/[0.025] blur-[90px]" />

//         <div className="relative z-10 mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10 xl:px-12">

//           {/* SERVICE HEADER */}

//           <div className="sgc-reveal grid gap-8 border-b border-black/10 pb-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">

//             <div>

//               <div className="flex items-center gap-3">

//                 <span className="h-[2px] w-10 bg-[#6055A6]" />

//                 <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
//                   Our services
//                 </span>

//               </div>

//               <h2 className="mt-5 max-w-[800px] text-[44px] font-black leading-[0.94] tracking-[-0.055em] sm:text-[56px] lg:text-[68px]">

//                 Targeted solutions for

//                 <span className="block text-black/25">
//                   common pest problems.
//                 </span>

//               </h2>

//             </div>

//             <p className="max-w-[480px] text-sm leading-7 text-black/45 lg:ml-auto">
//               From initial inspection through treatment and practical
//               advice, we keep our approach focused on the actual pest
//               problem affecting your property.
//             </p>

//           </div>

//           {/* SERVICES */}

//           <div className="mt-12 grid gap-6 lg:grid-cols-3">

//             {services.map((service) => {

//               const Icon = service.icon;

//               return (

//                 <Link
//                   to="/services"
//                   key={service.number}
//                   className="sgc-card group block overflow-hidden rounded-[22px] border border-black/10 bg-white shadow-[0_8px_30px_rgba(20,15,30,0.04)]"
//                 >

//                   {/* CIRCULAR IMAGE */}

//                   <div className="flex justify-center px-6 pt-8 sm:px-7 sm:pt-9">

//                     <div className="relative h-[280px] w-[280px] overflow-hidden rounded-full border-[8px] border-[#F7F6FA] bg-[#F7F6FA] shadow-[0_20px_50px_rgba(20,15,30,0.12)] sm:h-[310px] sm:w-[310px]">

//                       <img
//                         src={service.image}
//                         alt={`${service.title} pest control Chelsea`}
//                         className="sgc-image h-full w-full object-cover"
//                         loading="lazy"
//                       />

//                       <div className="absolute inset-0 bg-black/10" />

//                       <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#6055A6] text-[8px] font-black text-white shadow-lg">
//                         {service.number}
//                       </div>

//                     </div>

//                   </div>

//                   {/* CONTENT UNDER IMAGE */}

//                   <div className="px-6 pb-7 pt-2 sm:px-7 sm:pb-8">

//                     {/* CIRCLE ICON */}

//                     <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-[5px] border-white bg-[#6055A6] text-white shadow-[0_12px_30px_rgba(96,85,166,0.25)] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#514791]">

//                       <Icon size={23} />

//                     </div>

//                     {/* CATEGORY */}

//                     <p className="mt-5 text-[8px] font-black uppercase tracking-[0.25em] text-[#6055A6]">
//                       {service.category}
//                     </p>

//                     {/* TITLE */}

//                     <div className="mt-2 flex items-start justify-between gap-4">

//                       <h3 className="text-[30px] font-black leading-[0.95] tracking-[-0.05em] text-[#24212D] sm:text-[34px]">
//                         {service.title}
//                       </h3>

//                       <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#6055A6]/15 text-[#6055A6] transition-all duration-300 group-hover:border-[#6055A6] group-hover:bg-[#6055A6] group-hover:text-white">

//                         <ArrowUpRight size={15} />

//                       </span>

//                     </div>

//                     {/* DESCRIPTION */}

//                     <p className="mt-4 text-[13px] leading-6 text-black/45">
//                       {service.description}
//                     </p>

//                     {/* POINTS */}

//                     <div className="mt-6 flex flex-wrap gap-2">

//                       {service.points.map((point) => (

//                         <span
//                           key={point}
//                           className="rounded-full border border-[#E7E4ED] bg-[#FAF9FC] px-3 py-2 text-[7px] font-bold uppercase tracking-[0.08em] text-[#6D6975]"
//                         >
//                           {point}
//                         </span>

//                       ))}

//                     </div>

//                     {/* BOTTOM LINK INDICATOR */}

//                     <div className="mt-7 flex items-center justify-between border-t border-black/10 pt-5">

//                       <span className="text-[8px] font-black uppercase tracking-[0.18em] text-[#6055A6]">
//                         Explore service
//                       </span>

//                       <span className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.12em] text-black/30 transition-colors group-hover:text-[#6055A6]">
//                         View details
//                         <ArrowRight size={13} />
//                       </span>

//                     </div>

//                   </div>

//                 </Link>

//               );

//             })}

//           </div>

//           <div className="mt-9 flex justify-center">

//             <Link
//               to="/services"
//               className="sgc-button inline-flex items-center gap-3 rounded-full bg-[#6055A6] px-7 py-4 text-[9px] font-black uppercase tracking-[0.16em] text-white hover:bg-[#514791]"
//             >
//               View all services
//               <ArrowRight size={14} />
//             </Link>

//           </div>

//         </div>
//       </section>

//       {/* =====================================================
//           PROCESS
//       ===================================================== */}

//       <section className="bg-[#F7F6FA] py-20 sm:py-24 lg:py-32">

//         <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10 xl:px-12">

//           <div className="sgc-reveal text-center">

//             <div className="flex items-center justify-center gap-3">

//               <span className="h-[2px] w-8 bg-[#6055A6]" />

//               <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
//                 How it works
//               </span>

//               <span className="h-[2px] w-8 bg-[#6055A6]" />

//             </div>

//             <h2 className="mx-auto mt-5 max-w-[850px] text-[44px] font-black leading-[0.94] tracking-[-0.055em] sm:text-[56px] lg:text-[68px]">

//               Inspect.

//               <span className="text-[#6055A6]">
//                 {" "}Identify.
//               </span>

//               <br />

//               Treat. Protect.

//             </h2>

//             <p className="mx-auto mt-6 max-w-[610px] text-sm leading-7 text-black/45">
//               A straightforward process helps us understand the issue
//               and choose an appropriate response for your property.
//             </p>

//           </div>

//           <div className="sgc-reveal relative mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

//             <div className="absolute left-[12%] right-[12%] top-[46px] hidden h-px bg-[#6055A6]/15 lg:block" />

//             {process.map((step) => {

//               const Icon = step.icon;

//               return (

//                 <div
//                   key={step.number}
//                   className="relative border border-black/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#6055A6]/30 hover:shadow-xl"
//                 >

//                   <div className="relative z-10 flex items-center justify-between">

//                     <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6055A6] text-white shadow-lg shadow-[#6055A6]/15">
//                       <Icon size={18} />
//                     </div>

//                     <span className="text-[35px] font-black leading-none tracking-[-0.08em] text-black/[0.07]">
//                       {step.number}
//                     </span>

//                   </div>

//                   <h3 className="mt-12 text-xl font-black tracking-[-0.03em]">
//                     {step.title}
//                   </h3>

//                   <p className="mt-3 text-xs leading-6 text-black/45">
//                     {step.text}
//                   </p>

//                 </div>

//               );

//             })}

//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           MISSION
//       ===================================================== */}

//       <section className="bg-white py-20 sm:py-24 lg:py-32">

//         <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10 xl:px-12">

//           <div className="sgc-reveal grid overflow-hidden bg-[#6055A6] lg:grid-cols-[0.95fr_1.05fr]">

//             <div className="relative min-h-[450px] lg:min-h-[620px]">

//               <img
//                 src="/images/mission-superguard.webp"
//                 alt="SuperGuard Chelsea pest control mission"
//                 className="sgc-image absolute inset-0 h-full w-full object-cover"
//                 loading="lazy"
//               />

//               <div className="absolute inset-0 bg-gradient-to-r from-black/35 to-transparent" />

//               <div className="absolute bottom-7 left-7 flex items-center gap-3 border border-white/20 bg-black/20 px-4 py-3 backdrop-blur-sm">

//                 <Home size={16} className="text-white" />

//                 <span className="text-[8px] font-black uppercase tracking-[0.16em] text-white">
//                   Homes & businesses
//                 </span>

//               </div>

//             </div>

//             <div className="flex flex-col justify-center px-7 py-12 text-white sm:px-10 sm:py-16 lg:px-16">

//               <p className="text-[8px] font-black uppercase tracking-[0.3em] text-white/50">
//                 Our mission
//               </p>

//               <h2 className="mt-5 max-w-[650px] text-[40px] font-black leading-[0.94] tracking-[-0.055em] sm:text-[52px] lg:text-[62px]">

//                 Keep pest control

//                 <span className="block text-white/40">
//                   simple and practical.
//                 </span>

//               </h2>

//               <p className="mt-7 max-w-[570px] text-sm leading-7 text-white/60">
//                 Our aim is to provide a straightforward service for
//                 people dealing with unwanted pest activity. We focus
//                 on understanding the issue, responding professionally
//                 and helping property owners reduce future problems.
//               </p>

//               <div className="mt-9 grid gap-3 sm:grid-cols-2">

//                 {[
//                   "Understand the problem",
//                   "Choose a suitable approach",
//                   "Minimise disruption",
//                   "Provide practical advice",
//                 ].map((item) => (

//                   <div
//                     key={item}
//                     className="flex items-center gap-3 border-b border-white/10 pb-4"
//                   >

//                     <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
//                       <Check size={13} />
//                     </span>

//                     <span className="text-[9px] font-bold uppercase tracking-[0.08em] text-white/70">
//                       {item}
//                     </span>

//                   </div>

//                 ))}

//               </div>

//               <div className="mt-10">

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="sgc-button inline-flex items-center gap-3 bg-white px-6 py-4 text-[9px] font-black uppercase tracking-[0.15em] text-[#6055A6] hover:bg-[#F7F6FA]"
//                 >
//                   Speak to SuperGuard
//                   <Phone size={14} />
//                   <ArrowUpRight size={14} />
//                 </a>

//               </div>

//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           LOCAL COVERAGE
//       ===================================================== */}

//       <section className="border-y border-black/10 bg-white py-20 sm:py-24 lg:py-28">

//         <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10 xl:px-12">

//           <div className="sgc-reveal grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">

//             <div>

//               <div className="flex items-center gap-3">

//                 <span className="h-[2px] w-10 bg-[#6055A6]" />

//                 <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
//                   Local coverage
//                 </span>

//               </div>

//               <h2 className="mt-5 text-[44px] font-black leading-[0.94] tracking-[-0.055em] sm:text-[54px] lg:text-[64px]">

//                 Serving

//                 <span className="block text-[#6055A6]">
//                   Chelsea.
//                 </span>

//               </h2>

//               <p className="mt-6 max-w-[460px] text-sm leading-7 text-black/45">
//                 SuperGuard Services Chelsea provides pest control for
//                 homes, flats, landlords and businesses in Chelsea and
//                 nearby London areas.
//               </p>

//             </div>

//             <div className="grid gap-3 sm:grid-cols-2">

//               {/* AREA */}

//               <div className="border border-black/10 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#6055A6]/30 hover:shadow-lg">

//                 <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#6055A6]/10 text-[#6055A6]">
//                   <MapPin size={18} />
//                 </div>

//                 <p className="mt-7 text-[8px] font-black uppercase tracking-[0.22em] text-black/35">
//                   Main service area
//                 </p>

//                 <h3 className="mt-2 text-2xl font-black">
//                   Chelsea
//                 </h3>

//                 <p className="mt-2 text-xs leading-5 text-black/45">
//                   London, {LOCAL.postcode}
//                 </p>

//               </div>

//               {/* NEARBY */}

//               <div className="border border-black/10 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#6055A6]/30 hover:shadow-lg">

//                 <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#6055A6]/10 text-[#6055A6]">
//                   <Navigation size={18} />
//                 </div>

//                 <p className="mt-7 text-[8px] font-black uppercase tracking-[0.22em] text-black/35">
//                   Coverage
//                 </p>

//                 <h3 className="mt-2 text-2xl font-black">
//                   Nearby areas
//                 </h3>

//                 <p className="mt-2 text-xs leading-5 text-black/45">
//                   Contact us with your postcode to discuss your
//                   location.
//                 </p>

//               </div>

//               {/* PHONE */}

//               <div className="border border-black/10 p-7 sm:col-span-2">

//                 <div className="flex items-start gap-5">

//                   <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#6055A6]/10 text-[#6055A6]">
//                     <Phone size={18} />
//                   </div>

//                   <div>

//                     <p className="text-[8px] font-black uppercase tracking-[0.22em] text-black/35">
//                       Direct contact
//                     </p>

//                     <a
//                       href={`tel:${LOCAL.phoneTel}`}
//                       className="mt-2 block text-2xl font-black tracking-[-0.03em] hover:text-[#6055A6]"
//                     >
//                       {LOCAL.phoneDisplay}
//                     </a>

//                     <p className="mt-2 text-xs leading-5 text-black/45">
//                       Call to discuss your pest control requirements.
//                     </p>

//                   </div>

//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           CUSTOMER EXPERIENCE
//       ===================================================== */}

//       <section className="bg-[#F7F6FA] py-20 sm:py-24 lg:py-32">

//         <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10 xl:px-12">

//           <div className="sgc-reveal grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-20">

//             <div>

//               <div className="flex items-center gap-3">

//                 <span className="h-[2px] w-10 bg-[#6055A6]" />

//                 <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
//                   Customer experience
//                 </span>

//               </div>

//               <h2 className="mt-5 text-[44px] font-black leading-[0.94] tracking-[-0.055em] sm:text-[54px] lg:text-[62px]">

//                 Professional

//                 <span className="block text-[#6055A6]">
//                   from start to finish.
//                 </span>

//               </h2>

//               <p className="mt-6 max-w-[430px] text-sm leading-7 text-black/45">
//                 We aim to make the process clear, professional and as
//                 straightforward as possible for every property.
//               </p>

//               <div className="mt-8 flex items-center gap-3">

//                 <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#6055A6] text-white">
//                   <ShieldCheck size={18} />
//                 </div>

//                 <div>

//                   <p className="text-[8px] font-black uppercase tracking-[0.18em]">
//                     SuperGuard Services Chelsea
//                   </p>

//                   <p className="mt-1 text-[10px] text-black/40">
//                     Chelsea & nearby areas
//                   </p>

//                 </div>

//               </div>
//             </div>

//             {/* EXPERIENCE CARDS */}

//             <div className="grid gap-4 md:grid-cols-2">

//               {[
//                 {
//                   title: "Clear communication",
//                   text:
//                     "We keep the conversation straightforward so you understand the pest issue and the next step.",
//                   icon: PhoneCall,
//                 },

//                 {
//                   title: "Discreet approach",
//                   text:
//                     "We aim to minimise unnecessary disruption to your home, tenants, customers or staff.",
//                   icon: Lock,
//                 },

//                 {
//                   title: "Practical assessment",
//                   text:
//                     "Understanding where pest activity is occurring helps shape the treatment approach.",
//                   icon: Search,
//                 },

//                 {
//                   title: "Local support",
//                   text:
//                     "Chelsea and nearby areas remain the focus of our local pest control service.",
//                   icon: MapPin,
//                 },
//               ].map((item) => {

//                 const Icon = item.icon;

//                 return (

//                   <div
//                     key={item.title}
//                     className="border border-black/10 bg-white p-7 shadow-[0_8px_25px_rgba(20,15,30,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#6055A6]/30"
//                   >

//                     <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#6055A6]/10 text-[#6055A6]">
//                       <Icon size={18} />
//                     </div>

//                     <h3 className="mt-6 text-lg font-black tracking-[-0.03em]">
//                       {item.title}
//                     </h3>

//                     <p className="mt-3 text-xs leading-6 text-black/45">
//                       {item.text}
//                     </p>

//                   </div>

//                 );

//               })}

//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           FAQ
//       ===================================================== */}

//       <section className="bg-white py-20 sm:py-24 lg:py-32">

//         <div className="mx-auto max-w-[1050px] px-5 sm:px-8">

//           <div className="sgc-reveal text-center">

//             <div className="flex items-center justify-center gap-3">

//               <span className="h-[2px] w-8 bg-[#6055A6]" />

//               <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
//                 Frequently asked
//               </span>

//               <span className="h-[2px] w-8 bg-[#6055A6]" />

//             </div>

//             <h2 className="mt-5 text-[44px] font-black leading-[0.94] tracking-[-0.055em] sm:text-[56px]">

//               Questions about

//               <span className="block text-[#6055A6]">
//                 pest control?
//               </span>

//             </h2>

//           </div>

//           <div className="sgc-reveal mt-12 border-t border-black/10">

//             {faqs.map((faq, index) => {

//               const isOpen = openFaq === index;

//               return (

//                 <div
//                   key={faq.question}
//                   className="border-b border-black/10"
//                 >

//                   <button
//                     type="button"
//                     onClick={() =>
//                       setOpenFaq(isOpen ? -1 : index)
//                     }
//                     className="flex w-full items-center justify-between gap-6 py-6 text-left"
//                   >

//                     <span className="text-sm font-black tracking-[-0.02em] sm:text-base">
//                       {faq.question}
//                     </span>

//                     <span
//                       className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
//                         isOpen
//                           ? "bg-[#6055A6] text-white"
//                           : "bg-[#6055A6]/10 text-[#6055A6]"
//                       }`}
//                     >

//                       <ChevronDown
//                         size={16}
//                         className={`transition-transform duration-300 ${
//                           isOpen ? "rotate-180" : ""
//                         }`}
//                       />

//                     </span>

//                   </button>

//                   <div
//                     className={`grid transition-all duration-300 ${
//                       isOpen
//                         ? "grid-rows-[1fr] pb-6 opacity-100"
//                         : "grid-rows-[0fr] opacity-0"
//                     }`}
//                   >

//                     <div className="overflow-hidden">

//                       <p className="max-w-[800px] pr-12 text-sm leading-7 text-black/45">
//                         {faq.answer}
//                       </p>

//                     </div>

//                   </div>

//                 </div>

//               );

//             })}

//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           FINAL CTA
//       ===================================================== */}

//       <section className="px-5 pb-8 sm:px-8 lg:px-10">

//         <div className="relative mx-auto max-w-[1380px] overflow-hidden bg-[#6055A6] px-6 py-14 text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20">

//           <div className="pointer-events-none absolute right-[-100px] top-[-130px] h-[380px] w-[380px] rounded-full border-[55px] border-white/[0.07]" />

//           <div className="pointer-events-none absolute bottom-[-170px] left-[30%] h-[350px] w-[350px] rounded-full border border-white/[0.08]" />

//           <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

//             <div className="sgc-reveal">

//               <p className="text-[8px] font-black uppercase tracking-[0.3em] text-white/55">
//                 SuperGuard Services Chelsea
//               </p>

//               <h2 className="mt-4 max-w-[800px] text-[40px] font-black leading-[0.93] tracking-[-0.055em] sm:text-[52px] lg:text-[64px]">

//                 Dealing with a pest

//                 <span className="block text-white/40">
//                   problem?
//                 </span>

//               </h2>

//               <p className="mt-6 max-w-[600px] text-sm leading-7 text-white/60">
//                 Tell us what is happening at your property and speak
//                 directly with SuperGuard Services Chelsea.
//               </p>

//             </div>

//             <div className="sgc-reveal flex flex-col gap-3 sm:flex-row lg:flex-col">

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="sgc-button inline-flex min-h-[54px] items-center justify-center gap-3 bg-white px-7 text-[9px] font-black uppercase tracking-[0.15em] text-[#6055A6] hover:bg-[#F7F6FA]"
//               >

//                 <PhoneCall size={15} />

//                 {LOCAL.phoneDisplay}

//                 <ArrowUpRight size={15} />

//               </a>

//               <Link
//                 to="/contact-us"
//                 className="sgc-button inline-flex min-h-[54px] items-center justify-center gap-3 border border-white/30 px-7 text-[9px] font-black uppercase tracking-[0.15em] text-white hover:border-white hover:bg-white/10"
//               >

//                 Request a callback

//                 <ArrowRight size={15} />

//               </Link>

//             </div>

//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           CONTACT STRIP
//       ===================================================== */}

//       <section className="bg-white py-10">

//         <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10 xl:px-12">

//           <div className="flex flex-col gap-5 border-t border-black/10 pt-7 text-[8px] font-bold uppercase tracking-[0.15em] text-black/35 sm:flex-row sm:items-center sm:justify-between">

//             <div className="flex items-center gap-2">

//               <MapPin
//                 size={12}
//                 className="text-[#6055A6]"
//               />

//               {LOCAL.fullAddress}

//             </div>

//             <a
//               href={`tel:${LOCAL.phoneTel}`}
//               className="flex items-center gap-2 text-black/50 hover:text-[#6055A6]"
//             >

//               <Phone size={12} />

//               {LOCAL.phoneDisplay}

//             </a>

//             <div className="flex items-center gap-2">

//               <Check
//                 size={12}
//                 className="text-[#6055A6]"
//               />

//               Chelsea & nearby areas

//             </div>

//           </div>
//         </div>
//       </section>

//     </main>
//   );
// }


















// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

// import {
//   ArrowDownRight,
//   ArrowRight,
//   ArrowUpRight,
//   Bug,
//   Check,
//   ChevronDown,
//   Clock3,
//   Home,
//   MapPin,
//   Phone,
//   ShieldCheck,
//   Sparkles,
//   Target,
//   UserCheck,
// } from "lucide-react";

// const LOCAL = {
//   company: "SuperGuard Services Woolwich",
//   shortName: "SuperGuard Woolwich",
//   area: "Woolwich",
//   city: "London",
//   postcode: "SE18 3QJ",
//   streetAddress: "41 Ripon Rd",
//   fullAddress: "41 Ripon Rd, London SE18 3QJ, United Kingdom",
//   phoneDisplay: "07356 230776",
//   phoneTel: "+447356230776",
// };

// const API_URL =
//   "https://superguard-wickham-backend.vercel.app/api/callback";

// const services = [
//   {
//     number: "01",
//     title: "Rats & Mice",
//     eyebrow: "Rodent Control",
//     image: "/images/rodents.webp",
//     icon: Bug,
//     description:
//       "Professional rodent control for homes and properties dealing with rats, mice, droppings, scratching noises or signs of activity.",
//     points: [
//       "Detailed inspection",
//       "Targeted treatment",
//       "Entry-point identification",
//     ],
//   },
//   {
//     number: "02",
//     title: "Bed Bugs",
//     eyebrow: "Bed Bug Treatment",
//     image: "/images/bedbugs.webp",
//     icon: Home,
//     description:
//       "A careful approach to bed bug problems, focusing on locating activity, treating affected areas and reducing the chance of the problem returning.",
//     points: [
//       "Room-by-room inspection",
//       "Targeted treatment",
//       "Practical prevention advice",
//     ],
//   },
//   {
//     number: "03",
//     title: "Wasp Nests",
//     eyebrow: "Wasp Control",
//     image: "/images/wasps.webp",
//     icon: ShieldCheck,
//     description:
//       "Professional wasp nest treatment designed to deal with active nests around homes, gardens, roof spaces and other property areas.",
//     points: [
//       "Nest location assessment",
//       "Professional treatment",
//       "Safety-focused approach",
//     ],
//   },
// ];

// const faqs = [
//   {
//     question: "Do you cover Woolwich and nearby areas?",
//     answer:
//       "Yes. SuperGuard Services Woolwich provides pest-control services across Woolwich and surrounding areas of London. If you are unsure whether your location is covered, call us and we can confirm.",
//   },
//   {
//     question: "What happens when I contact SuperGuard?",
//     answer:
//       "We first take some basic information about the pest problem and your property. From there, we can advise you on the next practical step and arrange the appropriate service.",
//   },
//   {
//     question: "Do I need to know exactly what pest I have?",
//     answer:
//       "No. You do not need to identify the pest yourself. Tell us what you have noticed — such as noises, droppings, bites, insects or a nest — and we can help determine the appropriate treatment.",
//   },
//   {
//     question: "Can pest problems come back after treatment?",
//     answer:
//       "Some pest problems can return if the conditions allowing them to enter or remain on a property are not addressed. That is why inspection and practical prevention advice are important parts of the process.",
//   },
// ];

// export default function HomePage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [openFaq, setOpenFaq] = useState(0);

//   useEffect(() => {
//     const elements = document.querySelectorAll(".sgw-reveal");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("sgw-visible");
//           }
//         });
//       },
//       {
//         threshold: 0.08,
//       }
//     );

//     elements.forEach((element) => observer.observe(element));

//     return () => observer.disconnect();
//   }, []);

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.phone.trim()) {
//       toast.error("Please enter your phone number.");
//       return;
//     }

//     setLoading(true);

//     toast.promise(
//       axios.post(API_URL, {
//         ...formData,
//         area: LOCAL.area,
//         business: LOCAL.company,
//         address: LOCAL.fullAddress,
//       }),
//       {
//         loading: "Sending your callback request...",
//         success: "Thanks — we'll be in touch shortly.",
//         error: (error) =>
//           error?.response?.data?.message ||
//           "Something went wrong. Please try again.",
//       }
//     )
//       .then(() => {
//         setFormData({
//           name: "",
//           postcode: "",
//           phone: "",
//         });
//       })
//       .catch(() => {})
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   return (
//     <main className="min-h-screen overflow-hidden bg-[#FAF9FC] text-[#15131A]">
//       <Toaster position="top-center" />

//       <style>{`
//         .sgw-reveal {
//           opacity: 0;
//           transform: translateY(34px);
//           transition:
//             opacity 0.8s ease,
//             transform 0.8s ease;
//         }

//         .sgw-visible {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .sgw-delay-1 {
//           transition-delay: 0.08s;
//         }

//         .sgw-delay-2 {
//           transition-delay: 0.16s;
//         }

//         .sgw-delay-3 {
//           transition-delay: 0.24s;
//         }

//         .sgw-grid {
//           background-image:
//             linear-gradient(
//               rgba(255,255,255,0.075) 1px,
//               transparent 1px
//             ),
//             linear-gradient(
//               90deg,
//               rgba(255,255,255,0.075) 1px,
//               transparent 1px
//             );
//           background-size: 52px 52px;
//         }

//         .sgw-outline-text {
//           -webkit-text-stroke: 1px rgba(255,255,255,0.23);
//           color: transparent;
//         }

//         .sgw-card-shadow {
//           box-shadow:
//             0 25px 70px rgba(38, 32, 58, 0.09);
//         }

//         .sgw-image {
//           transition: transform 0.8s cubic-bezier(.2,.7,.2,1);
//         }

//         .sgw-image-wrap:hover .sgw-image {
//           transform: scale(1.045);
//         }

//         .sgw-service-card {
//           transition:
//             transform 0.35s ease,
//             box-shadow 0.35s ease;
//         }

//         .sgw-service-card:hover {
//           transform: translateY(-8px);
//           box-shadow:
//             0 25px 65px rgba(38, 32, 58, 0.12);
//         }

//         .sgw-no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }

//         .sgw-no-scrollbar {
//           scrollbar-width: none;
//         }
//       `}</style>

//       {/* =========================================================
//           HERO — COMPLETELY NEW COMPOSITION
//       ========================================================= */}
//       <section className="relative min-h-[760px] overflow-hidden bg-[#6055A6] lg:min-h-[820px]">
//         <div className="sgw-grid absolute inset-0 opacity-70" />

//         <div className="absolute -right-48 -top-48 h-[620px] w-[620px] rounded-full border border-white/10" />
//         <div className="absolute -right-28 -top-28 h-[420px] w-[420px] rounded-full border border-white/10" />

//         <div className="relative mx-auto max-w-[1450px] px-5 py-7 sm:px-8 lg:px-12">
//           {/* small top information row */}
//           <div className="flex items-center justify-between border-b border-white/15 pb-5">
//             <div className="flex items-center gap-3 text-sm font-medium text-white/80">
//               <span className="h-2 w-2 rounded-full bg-white" />
//               Pest Control • Woolwich • London
//             </div>

//             <a
//               href={`tel:${LOCAL.phoneTel}`}
//               className="hidden items-center gap-2 text-sm font-semibold text-white transition hover:text-white/70 sm:flex"
//             >
//               <Phone size={15} />
//               {LOCAL.phoneDisplay}
//             </a>
//           </div>

//           <div className="grid items-end gap-12 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:pt-20">
//             {/* Hero copy */}
//             <div className="relative z-10">
//               <p className="sgw-reveal mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-white/65">
//                 <span className="h-px w-10 bg-white/50" />
//                 SuperGuard Services Woolwich
//               </p>

//               <h1 className="sgw-reveal sgw-delay-1 max-w-5xl text-[clamp(4rem,9vw,8.8rem)] font-black uppercase leading-[0.78] tracking-[-0.07em] text-white">
//                 Pest
//                 <br />
//                 problems
//                 <br />
//                 <span className="sgw-outline-text">stop here.</span>
//               </h1>

//               <div className="mt-10 grid max-w-2xl gap-7 sm:grid-cols-[1fr_auto] sm:items-end">
//                 <p className="sgw-reveal sgw-delay-2 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
//                   Professional pest control for homes and properties across
//                   Woolwich and nearby London areas. Clear advice, careful
//                   inspection and targeted treatment.
//                 </p>

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="sgw-reveal sgw-delay-3 group flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-[#6055A6] transition hover:scale-105 sm:h-20 sm:w-20"
//                   aria-label="Call SuperGuard Woolwich"
//                 >
//                   <ArrowUpRight
//                     size={28}
//                     className="transition-transform duration-300 group-hover:rotate-12"
//                   />
//                 </a>
//               </div>
//             </div>

//             {/* Hero form + image */}
//             <div className="relative z-20">
//               <div className="absolute -left-7 -top-7 hidden h-28 w-28 rounded-full border border-white/20 lg:block" />

//               <div className="sgw-card-shadow overflow-hidden rounded-[28px] bg-white">
//                 <div className="sgw-image-wrap relative h-[245px] overflow-hidden sm:h-[290px]">
//                   <img
//                     src="/images/superguard-hero.webp"
//                     alt="Professional pest control service in Woolwich"
//                     className="sgw-image h-full w-full object-cover"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

//                   <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
//                     <div>
//                       <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/65">
//                         Local service
//                       </p>
//                       <p className="mt-1 text-xl font-bold text-white">
//                         Woolwich, London
//                       </p>
//                     </div>

//                     <div className="rounded-full bg-white/15 p-3 text-white backdrop-blur-md">
//                       <MapPin size={18} />
//                     </div>
//                   </div>
//                 </div>

//                 <form onSubmit={handleSubmit} className="p-6 sm:p-8">
//                   <div className="mb-6">
//                     <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6055A6]">
//                       Request a callback
//                     </p>

//                     <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#15131A]">
//                       Tell us what’s happening.
//                     </h2>

//                     <p className="mt-2 text-sm leading-6 text-[#777481]">
//                       Leave your details and we’ll contact you about your pest
//                       problem.
//                     </p>
//                   </div>

//                   <div className="grid gap-3 sm:grid-cols-2">
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       placeholder="Your name"
//                       className="h-12 rounded-xl border border-[#E7E4ED] bg-[#FAF9FC] px-4 text-sm outline-none transition placeholder:text-[#A09CA9] focus:border-[#6055A6]"
//                     />

//                     <input
//                       type="text"
//                       name="postcode"
//                       value={formData.postcode}
//                       onChange={handleChange}
//                       placeholder="Postcode"
//                       className="h-12 rounded-xl border border-[#E7E4ED] bg-[#FAF9FC] px-4 text-sm uppercase outline-none transition placeholder:text-[#A09CA9] focus:border-[#6055A6]"
//                     />
//                   </div>

//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="Phone number *"
//                     required
//                     className="mt-3 h-12 w-full rounded-xl border border-[#E7E4ED] bg-[#FAF9FC] px-4 text-sm outline-none transition placeholder:text-[#A09CA9] focus:border-[#6055A6]"
//                   />

//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="mt-4 flex h-13 w-full items-center justify-between rounded-xl bg-[#6055A6] px-5 text-sm font-bold text-white transition hover:bg-[#514791] disabled:cursor-not-allowed disabled:opacity-60"
//                   >
//                     <span>
//                       {loading ? "Sending..." : "Request a callback"}
//                     </span>
//                     <ArrowRight size={18} />
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           INTRO / TRUST BAND
//       ========================================================= */}
//       <section className="border-b border-[#E7E4ED] bg-white">
//         <div className="mx-auto grid max-w-[1450px] md:grid-cols-4">
//           {[
//             ["01", "Local knowledge", "Woolwich & surrounding London areas"],
//             ["02", "Clear process", "Inspection before treatment"],
//             ["03", "Targeted work", "Treatment based on the problem"],
//             ["04", "Direct contact", "Speak directly with our team"],
//           ].map(([number, title, text], index) => (
//             <div
//               key={number}
//               className={`sgw-reveal border-[#E7E4ED] px-6 py-8 sm:px-8 lg:px-10 ${
//                 index !== 3 ? "border-b md:border-r md:border-b-0" : ""
//               }`}
//             >
//               <span className="text-[10px] font-bold tracking-[0.2em] text-[#A09CA9]">
//                 {number}
//               </span>

//               <h3 className="mt-4 text-base font-bold text-[#24212D]">
//                 {title}
//               </h3>

//               <p className="mt-2 text-sm leading-6 text-[#777481]">
//                 {text}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* =========================================================
//           ABOUT — EDITORIAL SPLIT
//       ========================================================= */}
//       <section className="bg-[#FAF9FC] py-24 sm:py-32">
//         <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
//           <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
//             <div className="sgw-reveal">
//               <div className="sgw-image-wrap relative overflow-hidden rounded-[30px]">
//                 <img
//                   src="/images/about-superguard.webp"
//                   alt="SuperGuard pest control service"
//                   className="sgw-image h-[520px] w-full object-cover sm:h-[620px]"
//                 />

//                 <div className="absolute left-5 top-5 rounded-2xl bg-white p-5 shadow-xl sm:left-7 sm:top-7">
//                   <ShieldCheck
//                     size={25}
//                     className="text-[#6055A6]"
//                   />

//                   <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-[#777481]">
//                     SuperGuard
//                   </p>

//                   <p className="mt-1 text-sm font-bold text-[#15131A]">
//                     Woolwich
//                   </p>
//                 </div>

//                 <div className="absolute bottom-5 right-5 rounded-2xl bg-[#6055A6] px-5 py-4 text-white shadow-xl sm:bottom-7 sm:right-7">
//                   <p className="text-2xl font-black">01</p>
//                   <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">
//                     Local focus
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <p className="sgw-reveal flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#6055A6]">
//                 <span className="h-px w-9 bg-[#6055A6]" />
//                 About SuperGuard
//               </p>

//               <h2 className="sgw-reveal sgw-delay-1 mt-6 max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.045em] text-[#15131A] sm:text-6xl lg:text-[72px]">
//                 A pest problem is small
//                 <span className="text-[#6055A6]"> until it isn't.</span>
//               </h2>

//               <p className="sgw-reveal sgw-delay-2 mt-8 max-w-2xl text-base leading-8 text-[#777481] sm:text-lg">
//                 The signs can start quietly — scratching behind a wall,
//                 droppings in a cupboard, bites appearing overnight or a wasp
//                 nest developing somewhere you rarely look.
//               </p>

//               <p className="sgw-reveal sgw-delay-2 mt-5 max-w-2xl text-base leading-8 text-[#777481] sm:text-lg">
//                 SuperGuard Services Woolwich provides a practical,
//                 professional approach to pest control. We focus on identifying
//                 the problem, understanding where activity is coming from and
//                 applying the appropriate treatment.
//               </p>

//               <div className="mt-10 grid gap-4 sm:grid-cols-2">
//                 {[
//                   "Professional inspection",
//                   "Targeted treatment",
//                   "Property-conscious service",
//                   "Prevention-focused advice",
//                 ].map((item) => (
//                   <div
//                     key={item}
//                     className="flex items-center gap-3 border-t border-[#DDD9E5] pt-4"
//                   >
//                     <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#6055A6]/10 text-[#6055A6]">
//                       <Check size={15} />
//                     </span>

//                     <span className="text-sm font-semibold text-[#292631]">
//                       {item}
//                     </span>
//                   </div>
//                 ))}
//               </div>

//               <Link
//                 to="/contact-us"
//                 className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#15131A] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#6055A6]"
//               >
//                 Discuss your pest problem
//                 <ArrowUpRight size={17} />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           BIG STATEMENT SECTION
//       ========================================================= */}
//       <section className="relative overflow-hidden bg-[#15131A] py-24 sm:py-32">
//         <div className="absolute right-[-150px] top-[-200px] h-[500px] w-[500px] rounded-full border border-white/5" />
//         <div className="absolute bottom-[-220px] left-[-180px] h-[500px] w-[500px] rounded-full border border-white/5" />

//         <div className="relative mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
//           <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
//             <div>
//               <p className="sgw-reveal text-xs font-bold uppercase tracking-[0.28em] text-white/40">
//                 Why people call
//               </p>

//               <h2 className="sgw-reveal sgw-delay-1 mt-7 max-w-5xl text-4xl font-black leading-[0.94] tracking-[-0.05em] text-white sm:text-6xl lg:text-[82px]">
//                 Because guessing where pests are hiding
//                 <span className="text-[#8C83C3]"> isn't a strategy.</span>
//               </h2>
//             </div>

//             <div className="sgw-reveal sgw-delay-2 flex items-end">
//               <p className="max-w-md text-base leading-8 text-white/55">
//                 Good pest control starts with understanding the problem. That
//                 means looking for signs of activity, identifying likely access
//                 points and choosing a treatment approach suited to the
//                 situation.
//               </p>
//             </div>
//           </div>

//           <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-3">
//             {[
//               {
//                 icon: Target,
//                 number: "01",
//                 title: "Find the source",
//                 text: "Look beyond the obvious sign and understand where activity may be coming from.",
//               },
//               {
//                 icon: UserCheck,
//                 number: "02",
//                 title: "Treat the problem",
//                 text: "Use a focused treatment approach appropriate to the pest and property.",
//               },
//               {
//                 icon: ShieldCheck,
//                 number: "03",
//                 title: "Reduce the risk",
//                 text: "Provide practical guidance to help make the property less attractive to pests.",
//               },
//             ].map((item) => {
//               const Icon = item.icon;

//               return (
//                 <div
//                   key={item.number}
//                   className="sgw-reveal bg-[#15131A] p-7 sm:p-9 lg:p-11"
//                 >
//                   <div className="flex items-center justify-between">
//                     <Icon size={25} className="text-[#8C83C3]" />
//                     <span className="text-xs font-bold text-white/25">
//                       {item.number}
//                     </span>
//                   </div>

//                   <h3 className="mt-12 text-xl font-bold text-white">
//                     {item.title}
//                   </h3>

//                   <p className="mt-3 text-sm leading-7 text-white/45">
//                     {item.text}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           SERVICES — LARGE NUMBERED CARDS
//       ========================================================= */}
//       <section className="bg-white py-24 sm:py-32">
//         <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
//           <div className="flex flex-col justify-between gap-8 border-b border-[#E7E4ED] pb-10 lg:flex-row lg:items-end">
//             <div>
//               <p className="sgw-reveal text-xs font-bold uppercase tracking-[0.25em] text-[#6055A6]">
//                 What we deal with
//               </p>

//               <h2 className="sgw-reveal sgw-delay-1 mt-5 text-4xl font-black tracking-[-0.045em] sm:text-6xl lg:text-[76px]">
//                 The problem
//                 <br />
//                 <span className="text-[#6055A6]">ends here.</span>
//               </h2>
//             </div>

//             <p className="sgw-reveal sgw-delay-2 max-w-md text-base leading-7 text-[#777481] lg:pb-2">
//               From rodents inside your home to insects around the property,
//               our core services are built around inspection, treatment and
//               prevention.
//             </p>
//           </div>

//           <div className="mt-12 grid gap-7 lg:grid-cols-3">
//             {services.map((service) => {
//               const Icon = service.icon;

//               return (
//                 <article
//                   key={service.number}
//                   className="sgw-service-card group overflow-hidden rounded-[28px] border border-[#E7E4ED] bg-[#FAF9FC]"
//                 >
//                   <div className="sgw-image-wrap relative h-[300px] overflow-hidden">
//                     <img
//                       src={service.image}
//                       alt={service.title}
//                       className="sgw-image h-full w-full object-cover"
//                     />

//                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

//                     <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-[10px] font-black uppercase tracking-[0.17em] text-[#6055A6]">
//                       {service.eyebrow}
//                     </span>

//                     <span className="absolute bottom-5 right-5 text-5xl font-black tracking-[-0.06em] text-white/25">
//                       {service.number}
//                     </span>
//                   </div>

//                   <div className="p-7 sm:p-8">
//                     <div className="flex items-start justify-between gap-5">
//                       <div>
//                         <h3 className="text-2xl font-black tracking-tight text-[#15131A]">
//                           {service.title}
//                         </h3>

//                         <p className="mt-4 text-sm leading-7 text-[#777481]">
//                           {service.description}
//                         </p>
//                       </div>

//                       <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#6055A6]/10 text-[#6055A6]">
//                         <Icon size={20} />
//                       </div>
//                     </div>

//                     <div className="mt-7 space-y-3 border-t border-[#E7E4ED] pt-6">
//                       {service.points.map((point) => (
//                         <div
//                           key={point}
//                           className="flex items-center gap-3 text-sm font-medium text-[#292631]"
//                         >
//                           <Check size={15} className="text-[#6055A6]" />
//                           {point}
//                         </div>
//                       ))}
//                     </div>

//                     <Link
//                       to="/contact-us"
//                       className="mt-8 flex items-center justify-between border-t border-[#E7E4ED] pt-5 text-sm font-bold text-[#15131A]"
//                     >
//                       <span>Get help with {service.title}</span>

//                       <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#15131A] text-white transition group-hover:bg-[#6055A6]">
//                         <ArrowUpRight size={16} />
//                       </span>
//                     </Link>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           PROCESS — HORIZONTAL JOURNEY
//       ========================================================= */}
//       <section className="overflow-hidden bg-[#F1EFF6] py-24 sm:py-32">
//         <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
//           <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
//             <div>
//               <p className="sgw-reveal text-xs font-bold uppercase tracking-[0.25em] text-[#6055A6]">
//                 How it works
//               </p>

//               <h2 className="sgw-reveal sgw-delay-1 mt-5 text-4xl font-black leading-[0.95] tracking-[-0.045em] sm:text-6xl">
//                 Simple steps.
//                 <br />
//                 <span className="text-[#6055A6]">No guesswork.</span>
//               </h2>

//               <p className="sgw-reveal sgw-delay-2 mt-7 max-w-sm text-base leading-7 text-[#777481]">
//                 Getting pest control shouldn't feel complicated. We keep the
//                 process straightforward from the first conversation.
//               </p>

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#6055A6] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#514791]"
//               >
//                 <Phone size={16} />
//                 {LOCAL.phoneDisplay}
//               </a>
//             </div>

//             <div className="relative">
//               <div className="absolute left-5 top-8 hidden h-[calc(100%-64px)] w-px bg-[#D8D4E1] sm:block" />

//               <div className="space-y-5">
//                 {[
//                   {
//                     n: "01",
//                     title: "Tell us what you've noticed",
//                     text: "Give us the basic details — what you've seen, where you've seen it and how long the issue has been happening.",
//                   },
//                   {
//                     n: "02",
//                     title: "We assess the situation",
//                     text: "The property and signs of activity are considered so the appropriate pest-control approach can be selected.",
//                   },
//                   {
//                     n: "03",
//                     title: "Treatment is carried out",
//                     text: "We focus the treatment on the identified pest problem and affected areas.",
//                   },
//                   {
//                     n: "04",
//                     title: "Protect the property",
//                     text: "You'll receive practical guidance on reducing the conditions that can encourage future pest activity.",
//                   },
//                 ].map((step) => (
//                   <div
//                     key={step.n}
//                     className="sgw-reveal group relative grid gap-5 rounded-3xl border border-[#DDD9E5] bg-white p-6 sm:grid-cols-[60px_1fr] sm:gap-7 sm:p-8"
//                   >
//                     <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#6055A6] text-xs font-black text-white">
//                       {step.n}
//                     </div>

//                     <div>
//                       <h3 className="text-xl font-black text-[#15131A]">
//                         {step.title}
//                       </h3>

//                       <p className="mt-3 max-w-2xl text-sm leading-7 text-[#777481]">
//                         {step.text}
//                       </p>
//                     </div>

//                     <ArrowRight
//                       size={18}
//                       className="absolute right-7 top-1/2 hidden -translate-y-1/2 text-[#B4B0BC] transition group-hover:translate-x-1 group-hover:text-[#6055A6] sm:block"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           MISSION / IMAGE BREAK
//       ========================================================= */}
//       <section className="bg-white py-24 sm:py-32">
//         <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
//           <div className="relative overflow-hidden rounded-[35px] bg-[#6055A6]">
//             <div className="absolute inset-0 opacity-20">
//               <div className="h-full w-full bg-[radial-gradient(circle_at_80%_20%,white_0,transparent_32%)]" />
//             </div>

//             <div className="relative grid lg:grid-cols-[0.85fr_1.15fr]">
//               <div className="p-8 sm:p-12 lg:p-16 xl:p-20">
//                 <p className="sgw-reveal text-xs font-bold uppercase tracking-[0.25em] text-white/55">
//                   Our approach
//                 </p>

//                 <h2 className="sgw-reveal sgw-delay-1 mt-6 text-4xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl">
//                   Protecting the place
//                   <br />
//                   you call home.
//                 </h2>

//                 <p className="sgw-reveal sgw-delay-2 mt-7 max-w-xl text-base leading-8 text-white/65">
//                   Pest control isn't simply about removing what you can see.
//                   It's about understanding the environment around the problem
//                   and taking sensible steps to deal with it properly.
//                 </p>

//                 <div className="mt-10 space-y-5">
//                   {[
//                     "Respect for your property",
//                     "Clear communication",
//                     "Focused treatment",
//                   ].map((item) => (
//                     <div
//                       key={item}
//                       className="flex items-center gap-3 text-sm font-semibold text-white"
//                     >
//                       <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
//                         <Check size={14} />
//                       </span>
//                       {item}
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="sgw-image-wrap relative min-h-[430px] overflow-hidden lg:min-h-[600px]">
//                 <img
//                   src="/images/mission-superguard.webp"
//                   alt="SuperGuard professional pest control"
//                   className="sgw-image absolute inset-0 h-full w-full object-cover"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-r from-[#6055A6]/50 via-transparent to-transparent lg:from-[#6055A6]/20" />

//                 <div className="absolute bottom-7 left-7 rounded-2xl bg-white/95 p-5 backdrop-blur-md sm:bottom-10 sm:left-10">
//                   <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#777481]">
//                     Serving
//                   </p>

//                   <p className="mt-1 text-lg font-black text-[#15131A]">
//                     Woolwich & nearby areas
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           LOCAL AREA / MAP-STYLE SECTION
//       ========================================================= */}
//       <section className="bg-[#FAF9FC] py-24 sm:py-32">
//         <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
//           <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
//             <div className="relative min-h-[520px] overflow-hidden rounded-[32px] bg-[#15131A] p-7 sm:p-10">
//               <div
//                 className="absolute inset-0 opacity-[0.12]"
//                 style={{
//                   backgroundImage:
//                     "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
//                   backgroundSize: "60px 60px",
//                 }}
//               />

//               <div className="absolute left-[15%] top-[22%] h-40 w-40 rounded-full border border-white/10" />
//               <div className="absolute right-[8%] top-[40%] h-72 w-72 rounded-full border border-white/10" />
//               <div className="absolute bottom-[5%] left-[30%] h-52 w-52 rounded-full border border-white/10" />

//               <div className="relative flex h-full min-h-[460px] flex-col justify-between">
//                 <div>
//                   <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white/75">
//                     <MapPin size={14} />
//                     Local service area
//                   </div>

//                   <h3 className="mt-8 max-w-md text-5xl font-black tracking-[-0.05em] text-white sm:text-7xl">
//                     Woolwich
//                   </h3>

//                   <p className="mt-3 text-lg text-white/45">
//                     London, SE18
//                   </p>
//                 </div>

//                 <div className="grid gap-3 sm:grid-cols-2">
//                   {[
//                     "Woolwich",
//                     "SE18",
//                     "Nearby London areas",
//                     "Residential properties",
//                   ].map((area) => (
//                     <div
//                       key={area}
//                       className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/70"
//                     >
//                       {area}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div>
//               <p className="sgw-reveal text-xs font-bold uppercase tracking-[0.25em] text-[#6055A6]">
//                 Local & nearby
//               </p>

//               <h2 className="sgw-reveal sgw-delay-1 mt-5 text-4xl font-black leading-[0.96] tracking-[-0.045em] sm:text-6xl">
//                 Pest control with a
//                 <span className="text-[#6055A6]"> local focus.</span>
//               </h2>

//               <p className="sgw-reveal sgw-delay-2 mt-7 max-w-xl text-base leading-8 text-[#777481]">
//                 Based in Woolwich, SuperGuard Services is positioned to help
//                 residential customers dealing with pest problems in the local
//                 area and surrounding parts of London.
//               </p>

//               <div className="mt-9 border-y border-[#DDD9E5]">
//                 <div className="flex items-start gap-4 border-b border-[#DDD9E5] py-5">
//                   <MapPin className="mt-1 shrink-0 text-[#6055A6]" size={20} />

//                   <div>
//                     <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#A09CA9]">
//                       Address
//                     </p>
//                     <p className="mt-1 text-sm font-semibold text-[#292631]">
//                       {LOCAL.fullAddress}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4 py-5">
//                   <Phone className="mt-1 shrink-0 text-[#6055A6]" size={20} />

//                   <div>
//                     <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#A09CA9]">
//                       Phone
//                     </p>

//                     <a
//                       href={`tel:${LOCAL.phoneTel}`}
//                       className="mt-1 block text-sm font-semibold text-[#292631] hover:text-[#6055A6]"
//                     >
//                       {LOCAL.phoneDisplay}
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               <Link
//                 to="/contact-us"
//                 className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#6055A6] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#514791]"
//               >
//                 Contact SuperGuard
//                 <ArrowUpRight size={17} />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           CUSTOMER EXPERIENCE / MINI TESTIMONIAL STYLE
//       ========================================================= */}
//       <section className="bg-white py-24 sm:py-32">
//         <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
//           <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">
//             <div>
//               <p className="sgw-reveal text-xs font-bold uppercase tracking-[0.25em] text-[#6055A6]">
//                 The experience
//               </p>

//               <h2 className="sgw-reveal sgw-delay-1 mt-5 text-4xl font-black tracking-[-0.045em] sm:text-6xl">
//                 No drama.
//                 <br />
//                 <span className="text-[#6055A6]">Just a clear process.</span>
//               </h2>
//             </div>

//             <p className="sgw-reveal sgw-delay-2 max-w-md text-base leading-7 text-[#777481]">
//               A pest problem is stressful enough. Our aim is to make the
//               service itself straightforward, professional and easy to
//               understand.
//             </p>
//           </div>

//           <div className="grid gap-5 md:grid-cols-3">
//             {[
//               {
//                 icon: Clock3,
//                 title: "Prompt communication",
//                 text: "Tell us what's happening and get clear information about the next step.",
//               },
//               {
//                 icon: ShieldCheck,
//                 title: "Professional approach",
//                 text: "We focus on the actual pest problem rather than unnecessary complexity.",
//               },
//               {
//                 icon: Sparkles,
//                 title: "Clean experience",
//                 text: "Respectful service for your home, your time and the property itself.",
//               },
//             ].map((item) => {
//               const Icon = item.icon;

//               return (
//                 <div
//                   key={item.title}
//                   className="sgw-reveal rounded-[26px] bg-[#F5F3F8] p-7 sm:p-9"
//                 >
//                   <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#6055A6] shadow-sm">
//                     <Icon size={21} />
//                   </div>

//                   <h3 className="mt-8 text-xl font-black text-[#15131A]">
//                     {item.title}
//                   </h3>

//                   <p className="mt-3 text-sm leading-7 text-[#777481]">
//                     {item.text}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           FAQ — CLEAN ACCORDION
//       ========================================================= */}
//       <section className="bg-[#F1EFF6] py-24 sm:py-32">
//         <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
//           <div className="text-center">
//             <p className="sgw-reveal text-xs font-bold uppercase tracking-[0.25em] text-[#6055A6]">
//               Common questions
//             </p>

//             <h2 className="sgw-reveal sgw-delay-1 mt-5 text-4xl font-black tracking-[-0.045em] sm:text-6xl">
//               Before you call.
//             </h2>

//             <p className="sgw-reveal sgw-delay-2 mx-auto mt-5 max-w-xl text-base leading-7 text-[#777481]">
//               A few straightforward answers to common questions about pest
//               control and our service.
//             </p>
//           </div>

//           <div className="mt-14 overflow-hidden rounded-[28px] border border-[#DDD9E5] bg-white">
//             {faqs.map((faq, index) => {
//               const isOpen = openFaq === index;

//               return (
//                 <div
//                   key={faq.question}
//                   className="border-b border-[#E7E4ED] last:border-b-0"
//                 >
//                   <button
//                     type="button"
//                     onClick={() =>
//                       setOpenFaq(isOpen ? -1 : index)
//                     }
//                     className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:px-8"
//                   >
//                     <span className="text-base font-bold text-[#15131A] sm:text-lg">
//                       {faq.question}
//                     </span>

//                     <span
//                       className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
//                         isOpen
//                           ? "bg-[#6055A6] text-white"
//                           : "bg-[#F1EFF6] text-[#6055A6]"
//                       }`}
//                     >
//                       <ChevronDown
//                         size={18}
//                         className={`transition-transform ${
//                           isOpen ? "rotate-180" : ""
//                         }`}
//                       />
//                     </span>
//                   </button>

//                   <div
//                     className={`grid transition-all duration-300 ${
//                       isOpen
//                         ? "grid-rows-[1fr] opacity-100"
//                         : "grid-rows-[0fr] opacity-0"
//                     }`}
//                   >
//                     <div className="overflow-hidden">
//                       <p className="max-w-3xl px-6 pb-7 text-sm leading-7 text-[#777481] sm:px-8">
//                         {faq.answer}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           FINAL CTA — LARGE TYPOGRAPHY
//       ========================================================= */}
//       <section className="relative overflow-hidden bg-[#6055A6] py-24 sm:py-32 lg:py-40">
//         <div className="absolute -left-32 -top-32 h-[480px] w-[480px] rounded-full border border-white/10" />
//         <div className="absolute -bottom-56 -right-32 h-[650px] w-[650px] rounded-full border border-white/10" />

//         <div className="relative mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
//           <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto]">
//             <div>
//               <p className="sgw-reveal text-xs font-bold uppercase tracking-[0.28em] text-white/55">
//                 Ready to deal with it?
//               </p>

//               <h2 className="sgw-reveal sgw-delay-1 mt-6 max-w-5xl text-5xl font-black leading-[0.88] tracking-[-0.06em] text-white sm:text-7xl lg:text-[100px]">
//                 Don't let a small pest problem become a big one.
//               </h2>

//               <p className="sgw-reveal sgw-delay-2 mt-8 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
//                 Speak to SuperGuard Services Woolwich about your pest problem
//                 and find out what the next step should be.
//               </p>
//             </div>

//             <div className="sgw-reveal sgw-delay-2">
//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="group flex h-28 w-28 items-center justify-center rounded-full bg-white text-[#6055A6] transition hover:scale-105 sm:h-36 sm:w-36"
//                 aria-label="Call SuperGuard Woolwich"
//               >
//                 <div className="text-center">
//                   <Phone size={23} className="mx-auto" />
//                   <span className="mt-2 block text-[10px] font-black uppercase tracking-[0.14em]">
//                     Call us
//                   </span>
//                 </div>
//               </a>
//             </div>
//           </div>

//           <div className="mt-16 flex flex-col gap-5 border-t border-white/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
//             <div className="flex items-center gap-3 text-sm text-white/60">
//               <MapPin size={16} />
//               {LOCAL.fullAddress}
//             </div>

//             <a
//               href={`tel:${LOCAL.phoneTel}`}
//               className="text-lg font-black text-white"
//             >
//               {LOCAL.phoneDisplay}
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           SMALL CONTACT STRIP — NOT FOOTER
//       ========================================================= */}
//       <section className="bg-[#15131A]">
//         <div className="mx-auto flex max-w-[1450px] flex-col gap-5 px-5 py-7 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
//           <div>
//             <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/35">
//               SuperGuard Services Woolwich
//             </p>

//             <p className="mt-1 text-sm text-white/55">
//               Professional pest control across Woolwich and nearby areas.
//             </p>
//           </div>

//           <div className="flex flex-wrap gap-3">
//             <a
//               href={`tel:${LOCAL.phoneTel}`}
//               className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#15131A]"
//             >
//               <Phone size={15} />
//               {LOCAL.phoneDisplay}
//             </a>

//             <Link
//               to="/contact-us"
//               className="inline-flex items-center gap-2 rounded-full bg-[#6055A6] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#514791]"
//             >
//               Contact us
//               <ArrowRight size={15} />
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }































// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

// import {
//   ArrowDownRight,
//   ArrowRight,
//   ArrowUpRight,
//   Bug,
//   Check,
//   ChevronDown,
//   Clock3,
//   Home,
//   MapPin,
//   Phone,
//   ShieldCheck,
//   Sparkles,
//   Target,
//   UserCheck,
// } from "lucide-react";

// const LOCAL = {
//   company: "SuperGuard Services Woolwich",
//   shortName: "SuperGuard Woolwich",
//   area: "Woolwich",
//   city: "London",
//   postcode: "SE18 3QJ",
//   streetAddress: "41 Ripon Rd",
//   fullAddress: "41 Ripon Rd, London SE18 3QJ, United Kingdom",
//   phoneDisplay: "07356 230776",
//   phoneTel: "+447356230776",
// };

// const API_URL =
//   "https://superguard-woolwich-backend.vercel.app/api/callback";

// const services = [
//   {
//     number: "01",
//     title: "Rats & Mice",
//     eyebrow: "Rodent Control",
//     image: "/images/rodents.webp",
//     icon: Bug,
//     description:
//       "Professional rodent control for homes and properties dealing with rats, mice, droppings, scratching noises or signs of activity.",
//     points: [
//       "Detailed inspection",
//       "Targeted treatment",
//       "Entry-point identification",
//     ],
//   },
//   {
//     number: "02",
//     title: "Bed Bugs",
//     eyebrow: "Bed Bug Treatment",
//     image: "/images/bedbugs.webp",
//     icon: Home,
//     description:
//       "A careful approach to bed bug problems, focusing on locating activity, treating affected areas and reducing the chance of the problem returning.",
//     points: [
//       "Room-by-room inspection",
//       "Targeted treatment",
//       "Practical prevention advice",
//     ],
//   },
//   {
//     number: "03",
//     title: "Wasp Nests",
//     eyebrow: "Wasp Control",
//     image: "/images/wasps.webp",
//     icon: ShieldCheck,
//     description:
//       "Professional wasp nest treatment designed to deal with active nests around homes, gardens, roof spaces and other property areas.",
//     points: [
//       "Nest location assessment",
//       "Professional treatment",
//       "Safety-focused approach",
//     ],
//   },
// ];

// const faqs = [
//   {
//     question: "Do you cover Woolwich and nearby areas?",
//     answer:
//       "Yes. SuperGuard Services Woolwich provides pest-control services across Woolwich and surrounding areas of London. If you are unsure whether your location is covered, call us and we can confirm.",
//   },
//   {
//     question: "What happens when I contact SuperGuard?",
//     answer:
//       "We first take some basic information about the pest problem and your property. From there, we can advise you on the next practical step and arrange the appropriate service.",
//   },
//   {
//     question: "Do I need to know exactly what pest I have?",
//     answer:
//       "No. You do not need to identify the pest yourself. Tell us what you have noticed — such as noises, droppings, bites, insects or a nest — and we can help determine the appropriate treatment.",
//   },
//   {
//     question: "Can pest problems come back after treatment?",
//     answer:
//       "Some pest problems can return if the conditions allowing them to enter or remain on a property are not addressed. That is why inspection and practical prevention advice are important parts of the process.",
//   },
// ];

// export default function HomePage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [openFaq, setOpenFaq] = useState(0);

//   useEffect(() => {
//     const elements = document.querySelectorAll(".sg-fresh-reveal");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("sg-fresh-visible");
//           }
//         });
//       },
//       { threshold: 0.08 }
//     );

//     elements.forEach((element) => observer.observe(element));

//     return () => observer.disconnect();
//   }, []);

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.phone.trim()) {
//       toast.error("Please enter your phone number.");
//       return;
//     }

//     setLoading(true);

//     toast
//       .promise(
//         axios.post(API_URL, {
//           ...formData,
//           area: LOCAL.area,
//           business: LOCAL.company,
//           address: LOCAL.fullAddress,
//         }),
//         {
//           loading: "Sending your callback request...",
//           success: "Thanks — we'll be in touch shortly.",
//           error: (error) =>
//             error?.response?.data?.message ||
//             "Something went wrong. Please try again.",
//         }
//       )
//       .then(() => {
//         setFormData({
//           name: "",
//           postcode: "",
//           phone: "",
//         });
//       })
//       .catch(() => {})
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   return (
//     <main className="min-h-screen overflow-hidden bg-[#F4F2F7] text-[#19171D]">
//       <Toaster position="top-center" />

//       <style>{`
//         .sg-fresh-reveal {
//           opacity: 0;
//           transform: translateY(22px);
//           transition:
//             opacity .7s ease,
//             transform .7s cubic-bezier(.2,.7,.2,1);
//         }

//         .sg-fresh-visible {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .sg-fresh-delay-1 {
//           transition-delay: .1s;
//         }

//         .sg-fresh-delay-2 {
//           transition-delay: .2s;
//         }

//         .sg-fresh-delay-3 {
//           transition-delay: .3s;
//         }

//         .sg-photo {
//           transition: transform .9s cubic-bezier(.2,.7,.2,1);
//         }

//         .sg-photo-wrap:hover .sg-photo {
//           transform: scale(1.045);
//         }

//         .sg-service-photo {
//           transition:
//             transform .8s cubic-bezier(.2,.7,.2,1),
//             filter .5s ease;
//         }

//         .sg-service-zone:hover .sg-service-photo {
//           transform: scale(1.045);
//           filter: saturate(1.08);
//         }

//         .sg-service-zone {
//           transition:
//             background-color .35s ease,
//             border-color .35s ease;
//         }

//         .sg-faq-content {
//           transition:
//             grid-template-rows .35s ease,
//             opacity .3s ease;
//         }

//         .sg-thin-scroll::-webkit-scrollbar {
//           display: none;
//         }

//         .sg-thin-scroll {
//           scrollbar-width: none;
//         }
//       `}</style>

//       {/* =========================================================
//           HERO
//       ========================================================= */}

//       <section className="relative bg-[#6055A6] text-white">
//         <div className="mx-auto max-w-[1540px] px-4 sm:px-7 lg:px-10">
//           <div className="grid min-h-[720px] border-x border-white/[.12] lg:grid-cols-[1.18fr_.82fr]">

//             {/* LEFT SIDE */}

//             <div className="relative flex flex-col justify-between px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16 xl:px-20">

//               <div className="flex items-center justify-between border-b border-white/[.15] pb-5">
//                 <div className="flex items-center gap-3">
//                   <span className="h-2 w-2 bg-white" />

//                   <span className="text-[9px] font-black uppercase tracking-[.25em] text-white/75">
//                     {LOCAL.company}
//                   </span>
//                 </div>

//                 <span className="text-[9px] font-bold uppercase tracking-[.2em] text-white/40">
//                   {LOCAL.postcode}
//                 </span>
//               </div>

//               <div className="py-16 lg:py-20">

//                 <p className="sg-fresh-reveal text-[10px] font-black uppercase tracking-[.28em] text-white/60">
//                   Pest Control • Woolwich • London
//                 </p>

//                 <h1 className="sg-fresh-reveal sg-fresh-delay-1 mt-7 max-w-[720px] text-[clamp(3.2rem,6vw,6.4rem)] font-black leading-[.88] tracking-[-.06em]">
//                   Pest problems
//                   <br />
//                   <span className="text-white/65">stop here.</span>
//                 </h1>

//                 <p className="sg-fresh-reveal sg-fresh-delay-2 mt-8 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
//                   Professional pest control for homes and properties across
//                   Woolwich and nearby London areas. Clear advice, careful
//                   inspection and targeted treatment.
//                 </p>

//                 <div className="sg-fresh-reveal sg-fresh-delay-3 mt-9 flex flex-wrap items-center gap-3">

//                   <a
//                     href={`tel:${LOCAL.phoneTel}`}
//                     className="inline-flex items-center gap-3 bg-white px-5 py-3.5 text-[10px] font-black uppercase tracking-[.15em] text-[#6055A6] transition hover:bg-[#19171D] hover:text-white"
//                   >
//                     <Phone size={14} />
//                     {LOCAL.phoneDisplay}
//                   </a>

//                   <Link
//                     to="/contact-us"
//                     className="inline-flex items-center gap-3 border border-white/30 px-5 py-3.5 text-[10px] font-black uppercase tracking-[.15em] text-white/85 transition hover:border-white hover:bg-white hover:text-[#6055A6]"
//                   >
//                     Contact us
//                     <ArrowUpRight size={15} />
//                   </Link>

//                 </div>
//               </div>

//               <div className="grid grid-cols-2 border-t border-white/[.15] sm:grid-cols-4">

//                 {[
//                   "Residential",
//                   "Commercial",
//                   "Local service",
//                   "London",
//                 ].map((item) => (
//                   <div
//                     key={item}
//                     className="border-b border-white/[.12] px-0 py-4 text-[9px] font-bold uppercase tracking-[.16em] text-white/50 sm:border-b-0 sm:border-r sm:px-4 first:sm:pl-0 last:sm:border-r-0"
//                   >
//                     {item}
//                   </div>
//                 ))}

//               </div>
//             </div>

//             {/* RIGHT IMAGE + FORM */}

//             <div className="relative min-h-[620px] border-t border-white/[.15] lg:border-l lg:border-t-0">

//               <div className="absolute inset-0 overflow-hidden">
//                 <img
//                   src="/images/superguard-hero.webp"
//                   alt="Professional pest control service in Woolwich"
//                   className="sg-photo h-full w-full object-cover"
//                 />

//                 <div className="absolute inset-0 bg-[#6055A6]/25" />

//                 <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#19171D]/90 to-transparent" />
//               </div>

//               <div className="absolute right-5 top-5 z-10 sm:right-8 sm:top-8">

//                 <div className="border border-white/25 bg-[#6055A6]/80 px-4 py-3 backdrop-blur-sm">

//                   <p className="text-[8px] font-black uppercase tracking-[.2em] text-white/60">
//                     Local service
//                   </p>

//                   <p className="mt-1 text-xs font-bold text-white">
//                     Woolwich, London
//                   </p>

//                 </div>

//               </div>

//               {/* CALLBACK FORM */}

//               <div className="absolute inset-x-0 bottom-0 z-20">

//                 <form
//                   onSubmit={handleSubmit}
//                   className="border-t border-white/20 bg-[#19171D]/95 p-6 backdrop-blur-md sm:p-8"
//                 >

//                   <div className="flex items-end justify-between gap-5">

//                     <div>

//                       <p className="text-[9px] font-black uppercase tracking-[.22em] text-[#A8A1D5]">
//                         Callback request
//                       </p>

//                       <h2 className="mt-2 text-2xl font-black tracking-[-.03em]">
//                         Tell us what's happening.
//                       </h2>

//                     </div>

//                     <span className="hidden h-9 w-9 items-center justify-center border border-white/15 sm:flex">
//                       <ArrowDownRight size={16} />
//                     </span>

//                   </div>

//                   <div className="mt-7 grid gap-5 sm:grid-cols-3">

//                     <div className="border-b border-white/20">

//                       <label
//                         htmlFor="sg-name"
//                         className="block text-[8px] font-black uppercase tracking-[.18em] text-white/35"
//                       >
//                         Your name
//                       </label>

//                       <input
//                         id="sg-name"
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Enter your name"
//                         className="h-10 w-full bg-transparent text-sm text-white outline-none placeholder:text-white/25"
//                       />

//                     </div>

//                     <div className="border-b border-white/20">

//                       <label
//                         htmlFor="sg-postcode"
//                         className="block text-[8px] font-black uppercase tracking-[.18em] text-white/35"
//                       >
//                         Postcode
//                       </label>

//                       <input
//                         id="sg-postcode"
//                         type="text"
//                         name="postcode"
//                         value={formData.postcode}
//                         onChange={handleChange}
//                         placeholder="SE18"
//                         className="h-10 w-full bg-transparent text-sm uppercase text-white outline-none placeholder:text-white/25"
//                       />

//                     </div>

//                     <div className="border-b border-white/20">

//                       <label
//                         htmlFor="sg-phone"
//                         className="block text-[8px] font-black uppercase tracking-[.18em] text-white/35"
//                       >
//                         Phone *
//                       </label>

//                       <input
//                         id="sg-phone"
//                         type="tel"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         required
//                         placeholder="Your number"
//                         className="h-10 w-full bg-transparent text-sm text-white outline-none placeholder:text-white/25"
//                       />

//                     </div>

//                   </div>

//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="mt-6 flex w-full items-center justify-between bg-[#6055A6] px-5 py-4 text-[10px] font-black uppercase tracking-[.16em] transition hover:bg-white hover:text-[#19171D] disabled:cursor-not-allowed disabled:opacity-60"
//                   >
//                     <span>
//                       {loading ? "Sending..." : "Request a callback"}
//                     </span>

//                     <ArrowRight size={16} />
//                   </button>

//                 </form>

//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           INTRO
//       ========================================================= */}

//       <section className="bg-white py-20 sm:py-24 lg:py-28">
//         <div className="mx-auto max-w-[1320px] px-5 sm:px-8">

//           <div className="grid gap-12 lg:grid-cols-[180px_1fr]">

//             <div className="sg-fresh-reveal">

//               <p className="text-[10px] font-black uppercase tracking-[.25em] text-[#6055A6]">
//                 01 / About
//               </p>

//               <div className="mt-6 h-px w-12 bg-[#6055A6]" />

//               <p className="mt-5 max-w-[150px] text-xs leading-6 text-[#85808D]">
//                 Professional pest control for homes and properties.
//               </p>

//             </div>

//             <div>

//               <h2 className="sg-fresh-reveal sg-fresh-delay-1 max-w-[930px] text-[clamp(2.5rem,4.8vw,5.2rem)] font-black leading-[.94] tracking-[-.055em]">
//                 When something is wrong with your space, you want someone who
//                 knows what to look for.
//               </h2>

//               <div className="mt-8 grid gap-8 border-t border-[#DDD9E4] pt-7 sm:grid-cols-2">

//                 <p className="sg-fresh-reveal sg-fresh-delay-2 max-w-lg text-sm leading-7 text-[#77727F] sm:text-base">
//                   The signs can start quietly — scratching behind a wall,
//                   droppings in a cupboard, bites appearing overnight or a wasp
//                   nest developing somewhere you rarely look.
//                 </p>

//                 <p className="sg-fresh-reveal sg-fresh-delay-3 max-w-lg text-sm leading-7 text-[#77727F] sm:border-l sm:border-[#DDD9E4] sm:pl-8">
//                   Pest control should be straightforward: understand the
//                   problem, deal with it properly and help reduce the chance of
//                   it becoming a bigger issue.
//                 </p>

//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           ABOUT IMAGE SECTION
//       ========================================================= */}

//       <section className="bg-[#EAE7F0] py-20 sm:py-24 lg:py-28">
//         <div className="mx-auto max-w-[1320px] px-5 sm:px-8">

//           <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-20">

//             <div className="sg-photo-wrap relative">

//               <div className="absolute -left-4 -top-4 h-20 w-20 border-l border-t border-[#6055A6]" />

//               <div className="relative h-[430px] overflow-hidden sm:h-[520px]">

//                 <img
//                   src="/images/about-superguard.webp"
//                   alt="SuperGuard pest control service"
//                   className="sg-photo h-full w-full object-cover"
//                 />

//               </div>

//               <div className="absolute bottom-0 left-0 bg-[#6055A6] px-5 py-4 text-white">

//                 <p className="text-[8px] font-black uppercase tracking-[.2em] text-white/55">
//                   Local focus
//                 </p>

//                 <p className="mt-1 text-base font-black">
//                   Woolwich
//                 </p>

//               </div>
//             </div>

//             <div>

//               <p className="sg-fresh-reveal text-[10px] font-black uppercase tracking-[.25em] text-[#6055A6]">
//                 02 / SuperGuard
//               </p>

//               <h2 className="sg-fresh-reveal sg-fresh-delay-1 mt-5 max-w-2xl text-[clamp(2.5rem,4.5vw,4.8rem)] font-black leading-[.9] tracking-[-.055em]">
//                 A pest problem is{" "}
//                 <span className="text-[#6055A6]">small</span> until it isn't.
//               </h2>

//               <p className="sg-fresh-reveal sg-fresh-delay-2 mt-7 max-w-xl text-sm leading-7 text-[#77727F] sm:text-base">
//                 SuperGuard Services Woolwich provides a practical,
//                 professional approach to pest control. We focus on identifying
//                 the problem, understanding where activity is coming from and
//                 applying the appropriate treatment.
//               </p>

//               <div className="mt-9 grid border-t border-[#D5D1DC] sm:grid-cols-2">

//                 {[
//                   "Professional inspection",
//                   "Targeted treatment",
//                   "Property-conscious service",
//                   "Prevention-focused advice",
//                 ].map((item, index) => (
//                   <div
//                     key={item}
//                     className={`sg-fresh-reveal flex items-center gap-3 border-b border-[#D5D1DC] py-4 ${
//                       index % 2 === 0
//                         ? "sm:border-r sm:pr-5"
//                         : "sm:pl-5"
//                     }`}
//                   >

//                     <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-[#6055A6] text-white">
//                       <Check size={12} />
//                     </span>

//                     <span className="text-xs font-bold text-[#403B47]">
//                       {item}
//                     </span>

//                   </div>
//                 ))}

//               </div>

//               <Link
//                 to="/contact-us"
//                 className="mt-8 inline-flex items-center gap-3 bg-[#19171D] px-5 py-3.5 text-[10px] font-black uppercase tracking-[.15em] text-white transition hover:bg-[#6055A6]"
//               >
//                 Discuss your pest problem
//                 <ArrowUpRight size={15} />
//               </Link>

//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           APPROACH
//       ========================================================= */}

//       <section className="bg-white py-20 sm:py-24 lg:py-28">
//         <div className="mx-auto max-w-[1320px] px-5 sm:px-8">

//           <div className="flex flex-col justify-between gap-8 border-b border-[#DDD9E4] pb-8 lg:flex-row lg:items-end">

//             <div>

//               <p className="sg-fresh-reveal text-[10px] font-black uppercase tracking-[.25em] text-[#6055A6]">
//                 03 / Our approach
//               </p>

//               <h2 className="sg-fresh-reveal sg-fresh-delay-1 mt-5 max-w-xl text-[clamp(2.5rem,4.5vw,4.8rem)] font-black leading-[.9] tracking-[-.055em]">
//                 Understanding
//                 <br />
//                 the problem first.
//               </h2>

//             </div>

//             <p className="sg-fresh-reveal sg-fresh-delay-2 max-w-md text-sm leading-7 text-[#77727F]">
//               Good pest control starts with understanding the problem. That
//               means looking for signs of activity, identifying likely access
//               points and choosing a treatment approach suited to the situation.
//             </p>

//           </div>

//           <div className="mt-10 grid border-b border-[#DDD9E4] md:grid-cols-3">

//             {[
//               {
//                 icon: Target,
//                 number: "01",
//                 title: "Find the source",
//                 text: "Look beyond the obvious sign and understand where activity may be coming from.",
//               },
//               {
//                 icon: UserCheck,
//                 number: "02",
//                 title: "Treat the problem",
//                 text: "Use a focused treatment approach appropriate to the pest and property.",
//               },
//               {
//                 icon: ShieldCheck,
//                 number: "03",
//                 title: "Reduce the risk",
//                 text: "Provide practical guidance to help make the property less attractive to pests.",
//               },
//             ].map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <div
//                   key={item.number}
//                   className={`sg-fresh-reveal group min-h-[260px] border-t border-[#DDD9E4] py-7 ${
//                     index > 0 ? "md:border-l md:pl-7" : "md:pr-7"
//                   }`}
//                 >

//                   <div className="flex items-center justify-between">

//                     <span className="text-4xl font-black tracking-[-.06em] text-[#6055A6]/25">
//                       {item.number}
//                     </span>

//                     <Icon
//                       size={20}
//                       className="text-[#6055A6] transition group-hover:rotate-6"
//                     />

//                   </div>

//                   <h3 className="mt-14 text-xl font-black tracking-[-.025em]">
//                     {item.title}
//                   </h3>

//                   <p className="mt-3 max-w-sm text-sm leading-6 text-[#77727F]">
//                     {item.text}
//                   </p>

//                 </div>
//               );
//             })}

//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           SERVICES
//           FULL SECTION BACKGROUND = #6055A6
//           EVERY SERVICE IS FULLY CLICKABLE
//       ========================================================= */}

//       <section className="bg-[#6055A6] py-20 text-white sm:py-24 lg:py-28">
//         <div className="mx-auto max-w-[1320px] px-5 sm:px-8">

//           <div className="grid gap-8 lg:grid-cols-[.55fr_1.45fr]">

//             <div>

//               <p className="sg-fresh-reveal text-[10px] font-black uppercase tracking-[.25em] text-white/55">
//                 04 / Services
//               </p>

//               <h2 className="sg-fresh-reveal sg-fresh-delay-1 mt-5 max-w-sm text-[clamp(2.6rem,4.5vw,4.7rem)] font-black leading-[.88] tracking-[-.06em]">
//                 What needs
//                 <br />
//                 dealing with?
//               </h2>

//               <p className="sg-fresh-reveal sg-fresh-delay-2 mt-6 max-w-xs text-sm leading-7 text-white/65">
//                 Our core services cover common pest problems affecting homes
//                 and properties around Woolwich and nearby London areas.
//               </p>

//             </div>

//             <div className="flex items-end justify-end">

//               <span className="text-[9px] font-black uppercase tracking-[.2em] text-white/35">
//                 Service index / 03
//               </span>

//             </div>
//           </div>

//           <div className="relative mt-12 border-t border-white/[.2] pt-10">

//             {/* =====================================================
//                 SERVICE 01
//             ===================================================== */}

//             <Link
//               to="/contact-us"
//               aria-label={`Book service for ${services[0].title}`}
//               className="sg-service-zone group relative block border-b border-white/[.2] pb-12 outline-none transition hover:bg-white/[.06] focus-visible:ring-2 focus-visible:ring-white"
//             >

//               <div className="absolute left-0 top-0 hidden text-[7rem] font-black leading-none tracking-[-.08em] text-white/[.08] lg:block">
//                 01
//               </div>

//               <div className="grid gap-8 lg:grid-cols-[.42fr_.58fr] lg:items-end">

//                 <div className="relative z-10 lg:pl-24">

//                   <div className="mb-5 flex items-center gap-3">

//                     <Bug size={17} className="text-white" />

//                     <span className="text-[9px] font-black uppercase tracking-[.2em] text-white/70">
//                       {services[0].eyebrow}
//                     </span>

//                   </div>

//                   <h3 className="text-[clamp(2.2rem,4vw,4.2rem)] font-black leading-[.9] tracking-[-.055em]">
//                     {services[0].title}
//                   </h3>

//                   <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
//                     {services[0].description}
//                   </p>

//                   <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">

//                     {services[0].points.map((point) => (
//                       <span
//                         key={point}
//                         className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.08em] text-white/75"
//                       >
//                         <Check size={12} className="text-white" />
//                         {point}
//                       </span>
//                     ))}

//                   </div>

//                   {/* BOOK SERVICE BUTTON */}

//                   <div className="mt-8 inline-flex items-center gap-3 bg-white px-5 py-3.5 text-[9px] font-black uppercase tracking-[.15em] text-[#6055A6] transition group-hover:bg-[#19171D] group-hover:text-white">
//                     Book Service
//                     <ArrowUpRight size={15} />
//                   </div>

//                 </div>

//                 <div className="relative h-[280px] overflow-hidden sm:h-[340px]">

//                   <img
//                     src={services[0].image}
//                     alt={services[0].title}
//                     className="sg-service-photo h-full w-full object-cover"
//                   />

//                   <div className="absolute inset-0 bg-[#6055A6]/10 transition group-hover:bg-transparent" />

//                   <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between bg-gradient-to-t from-[#19171D]/80 to-transparent p-6">

//                     <span className="text-[9px] font-black uppercase tracking-[.18em] text-white/60">
//                       01
//                     </span>

//                     <span className="flex h-11 w-11 items-center justify-center bg-white text-[#6055A6] transition group-hover:bg-[#19171D] group-hover:text-white">
//                       <ArrowUpRight size={17} />
//                     </span>

//                   </div>

//                 </div>

//               </div>
//             </Link>

//             {/* =====================================================
//                 SERVICE 02
//             ===================================================== */}

//             <Link
//               to="/contact-us"
//               aria-label={`Book service for ${services[1].title}`}
//               className="sg-service-zone group relative block border-b border-white/[.2] py-12 outline-none transition hover:bg-white/[.06] focus-visible:ring-2 focus-visible:ring-white"
//             >

//               <div className="grid gap-8 lg:grid-cols-[.56fr_.44fr] lg:items-center">

//                 <div className="relative order-2 h-[270px] overflow-hidden sm:h-[340px] lg:order-1">

//                   <img
//                     src={services[1].image}
//                     alt={services[1].title}
//                     className="sg-service-photo h-full w-full object-cover"
//                   />

//                   <div className="absolute inset-0 bg-[#6055A6]/10 transition group-hover:bg-transparent" />

//                   <div className="absolute left-5 top-5 border border-white/25 bg-[#19171D]/75 px-3 py-2 backdrop-blur-sm">

//                     <span className="text-[8px] font-black uppercase tracking-[.18em] text-white/75">
//                       02 / {services[1].eyebrow}
//                     </span>

//                   </div>

//                 </div>

//                 <div className="relative order-1 lg:order-2 lg:pl-12">

//                   <div className="mb-5 flex items-center gap-3">

//                     <Home size={17} className="text-white" />

//                     <span className="text-[9px] font-black uppercase tracking-[.2em] text-white/70">
//                       {services[1].eyebrow}
//                     </span>

//                   </div>

//                   <h3 className="text-[clamp(2.2rem,4vw,4.2rem)] font-black leading-[.9] tracking-[-.055em]">
//                     {services[1].title}
//                   </h3>

//                   <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
//                     {services[1].description}
//                   </p>

//                   <div className="mt-6 space-y-2">

//                     {services[1].points.map((point) => (
//                       <div
//                         key={point}
//                         className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[.08em] text-white/75"
//                       >
//                         <span className="h-px w-5 bg-white" />
//                         {point}
//                       </div>
//                     ))}

//                   </div>

//                   {/* BOOK SERVICE BUTTON */}

//                   <div className="mt-8 inline-flex items-center gap-3 bg-white px-5 py-3.5 text-[9px] font-black uppercase tracking-[.15em] text-[#6055A6] transition group-hover:bg-[#19171D] group-hover:text-white">
//                     Book Service
//                     <ArrowUpRight size={15} />
//                   </div>

//                 </div>
//               </div>
//             </Link>

//             {/* =====================================================
//                 SERVICE 03
//             ===================================================== */}

//             <Link
//               to="/contact-us"
//               aria-label={`Book service for ${services[2].title}`}
//               className="sg-service-zone group relative block pt-12 outline-none transition hover:bg-white/[.06] focus-visible:ring-2 focus-visible:ring-white"
//             >

//               <div className="grid gap-8 lg:grid-cols-[.42fr_.58fr] lg:items-end">

//                 <div className="relative z-10">

//                   <div className="mb-5 flex items-center gap-3">

//                     <ShieldCheck size={17} className="text-white" />

//                     <span className="text-[9px] font-black uppercase tracking-[.2em] text-white/70">
//                       {services[2].eyebrow}
//                     </span>

//                   </div>

//                   <h3 className="text-[clamp(2.2rem,4vw,4.2rem)] font-black leading-[.9] tracking-[-.055em]">
//                     {services[2].title}
//                   </h3>

//                   <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
//                     {services[2].description}
//                   </p>

//                   <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">

//                     {services[2].points.map((point) => (
//                       <span
//                         key={point}
//                         className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.08em] text-white/75"
//                       >
//                         <Check size={12} className="text-white" />
//                         {point}
//                       </span>
//                     ))}

//                   </div>

//                   {/* BOOK SERVICE BUTTON */}

//                   <div className="mt-8 inline-flex items-center gap-3 bg-white px-5 py-3.5 text-[9px] font-black uppercase tracking-[.15em] text-[#6055A6] transition group-hover:bg-[#19171D] group-hover:text-white">
//                     Book Service
//                     <ArrowUpRight size={15} />
//                   </div>

//                 </div>

//                 <div className="relative h-[280px] overflow-hidden sm:h-[340px] lg:translate-y-8">

//                   <img
//                     src={services[2].image}
//                     alt={services[2].title}
//                     className="sg-service-photo h-full w-full object-cover"
//                   />

//                   <div className="absolute inset-0 bg-[#6055A6]/10 transition group-hover:bg-transparent" />

//                   <div className="absolute right-5 top-5 border border-white/25 bg-[#19171D]/75 px-3 py-2 backdrop-blur-sm">

//                     <span className="text-[8px] font-black uppercase tracking-[.18em] text-white/75">
//                       03 / {services[2].eyebrow}
//                     </span>

//                   </div>

//                 </div>

//               </div>
//             </Link>

//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           PROCESS
//       ========================================================= */}

//       <section className="bg-[#6055A6] py-20 text-white sm:py-24 lg:py-28">
//         <div className="mx-auto max-w-[1320px] px-5 sm:px-8">

//           <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr]">

//             <div>

//               <p className="sg-fresh-reveal text-[10px] font-black uppercase tracking-[.25em] text-white/50">
//                 05 / How it works
//               </p>

//               <h2 className="sg-fresh-reveal sg-fresh-delay-1 mt-5 max-w-md text-[clamp(2.6rem,4.5vw,4.8rem)] font-black leading-[.88] tracking-[-.06em]">
//                 Simple steps.
//                 <br />
//                 No guesswork.
//               </h2>

//               <p className="sg-fresh-reveal sg-fresh-delay-2 mt-6 max-w-sm text-sm leading-7 text-white/55">
//                 Getting pest control shouldn't feel complicated. We keep the
//                 process straightforward from the first conversation.
//               </p>

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="mt-7 inline-flex items-center gap-3 border border-white/25 px-5 py-3.5 text-[10px] font-black uppercase tracking-[.15em] transition hover:bg-white hover:text-[#6055A6]"
//               >
//                 <Phone size={14} />
//                 {LOCAL.phoneDisplay}
//               </a>

//             </div>

//             <div className="border-t border-white/15">

//               {[
//                 {
//                   n: "01",
//                   title: "Tell us what you've noticed",
//                   text: "Give us the basic details — what you've seen, where you've seen it and how long the issue has been happening.",
//                 },
//                 {
//                   n: "02",
//                   title: "We assess the situation",
//                   text: "The property and signs of activity are considered so the appropriate pest-control approach can be selected.",
//                 },
//                 {
//                   n: "03",
//                   title: "Treatment is carried out",
//                   text: "We focus the treatment on the identified pest problem and affected areas.",
//                 },
//                 {
//                   n: "04",
//                   title: "Protect the property",
//                   text: "You'll receive practical guidance on reducing the conditions that can encourage future pest activity.",
//                 },
//               ].map((step) => (
//                 <div
//                   key={step.n}
//                   className="sg-fresh-reveal group grid gap-5 border-b border-white/15 py-7 sm:grid-cols-[65px_1fr_auto] sm:items-center"
//                 >

//                   <span className="text-2xl font-black text-white/30">
//                     {step.n}
//                   </span>

//                   <div>

//                     <h3 className="text-xl font-black tracking-[-.025em]">
//                       {step.title}
//                     </h3>

//                     <p className="mt-2 max-w-2xl text-sm leading-6 text-white/50">
//                       {step.text}
//                     </p>

//                   </div>

//                   <ArrowRight
//                     size={17}
//                     className="hidden text-white/25 transition group-hover:translate-x-1 group-hover:text-white sm:block"
//                   />

//                 </div>
//               ))}

//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           MISSION IMAGE
//       ========================================================= */}

//       <section className="bg-white py-20 sm:py-24 lg:py-28">
//         <div className="mx-auto max-w-[1320px] px-5 sm:px-8">

//           <div className="relative grid min-h-[560px] overflow-hidden bg-[#19171D] lg:grid-cols-[.72fr_1.28fr]">

//             <div className="relative z-10 flex flex-col justify-between p-7 sm:p-10 lg:p-12">

//               <div>

//                 <p className="sg-fresh-reveal text-[10px] font-black uppercase tracking-[.25em] text-[#A8A1D5]">
//                   06 / Our approach
//                 </p>

//                 <h2 className="sg-fresh-reveal sg-fresh-delay-1 mt-6 max-w-md text-[clamp(2.5rem,4.3vw,4.6rem)] font-black leading-[.9] tracking-[-.06em] text-white">
//                   Protecting the place you{" "}
//                   <span className="text-[#A8A1D5]">call home.</span>
//                 </h2>

//                 <p className="sg-fresh-reveal sg-fresh-delay-2 mt-6 max-w-md text-sm leading-7 text-white/45">
//                   Pest control isn't simply about removing what you can see.
//                   It's about understanding the environment around the problem
//                   and taking sensible steps to deal with it properly.
//                 </p>

//               </div>

//               <div className="mt-10 grid border-t border-white/10 sm:grid-cols-3">

//                 {[
//                   "Respect for your property",
//                   "Clear communication",
//                   "Focused treatment",
//                 ].map((item) => (
//                   <div
//                     key={item}
//                     className="flex items-center gap-2 border-b border-white/10 py-4 text-[10px] font-semibold text-white/60 sm:border-b-0 sm:border-r sm:px-4 first:sm:pl-0 last:sm:border-r-0"
//                   >
//                     <Check size={13} className="shrink-0 text-[#A8A1D5]" />
//                     {item}
//                   </div>
//                 ))}

//               </div>
//             </div>

//             <div className="relative min-h-[430px] lg:min-h-0">

//               <img
//                 src="/images/mission-superguard.webp"
//                 alt="SuperGuard professional pest control"
//                 className="sg-photo absolute inset-0 h-full w-full object-cover"
//               />

//               <div className="absolute inset-0 bg-gradient-to-r from-[#19171D] via-[#19171D]/20 to-transparent" />

//               <div className="absolute bottom-6 right-6 border border-white/20 bg-[#19171D]/65 px-4 py-3 backdrop-blur-sm">

//                 <p className="text-[8px] font-black uppercase tracking-[.2em] text-white/35">
//                   Serving
//                 </p>

//                 <p className="mt-1 text-xs font-bold text-white">
//                   Woolwich & nearby areas
//                 </p>

//               </div>

//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           LOCAL AREA
//       ========================================================= */}

//       <section className="bg-[#EAE7F0] py-20 sm:py-24 lg:py-28">
//         <div className="mx-auto max-w-[1320px] px-5 sm:px-8">

//           <div className="grid gap-12 lg:grid-cols-[1fr_.8fr] lg:items-center">

//             <div className="relative min-h-[420px] bg-[#19171D] p-7 text-white sm:p-10 lg:p-12">

//               <div className="absolute right-0 top-0 h-full w-[30%] border-l border-white/[.06]" />

//               <div className="absolute right-[15%] top-0 h-full w-px bg-white/[.04]" />

//               <div className="relative flex min-h-[350px] flex-col justify-between">

//                 <div>

//                   <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[.22em] text-white/40">
//                     <MapPin size={14} className="text-[#A8A1D5]" />
//                     Local service area
//                   </div>

//                   <h3 className="mt-8 text-[clamp(3.2rem,6vw,5.8rem)] font-black leading-[.82] tracking-[-.07em]">
//                     Woolwich
//                   </h3>

//                   <p className="mt-4 text-sm font-bold uppercase tracking-[.12em] text-white/25">
//                     London / SE18
//                   </p>

//                 </div>

//                 <div className="grid border-t border-white/10 sm:grid-cols-2">

//                   {[
//                     "Woolwich",
//                     "SE18",
//                     "Nearby London areas",
//                     "Residential properties",
//                   ].map((item) => (
//                     <div
//                       key={item}
//                       className="border-b border-white/10 py-4 text-xs font-semibold text-white/45 sm:border-r sm:px-4 first:sm:pl-0"
//                     >
//                       {item}
//                     </div>
//                   ))}

//                 </div>

//               </div>
//             </div>

//             <div>

//               <p className="sg-fresh-reveal text-[10px] font-black uppercase tracking-[.25em] text-[#6055A6]">
//                 07 / Local & nearby
//               </p>

//               <h2 className="sg-fresh-reveal sg-fresh-delay-1 mt-5 max-w-md text-[clamp(2.5rem,4.3vw,4.6rem)] font-black leading-[.9] tracking-[-.055em]">
//                 A local point of contact.
//               </h2>

//               <p className="sg-fresh-reveal sg-fresh-delay-2 mt-6 max-w-lg text-sm leading-7 text-[#77727F] sm:text-base">
//                 Based in Woolwich, SuperGuard Services is positioned to help
//                 residential customers dealing with pest problems in the local
//                 area and surrounding parts of London.
//               </p>

//               <div className="mt-8 border-y border-[#D5D1DC]">

//                 <div className="flex gap-4 border-b border-[#D5D1DC] py-5">

//                   <MapPin
//                     size={18}
//                     className="mt-1 shrink-0 text-[#6055A6]"
//                   />

//                   <div>

//                     <p className="text-[8px] font-black uppercase tracking-[.18em] text-[#AAA6B2]">
//                       Address
//                     </p>

//                     <p className="mt-1.5 text-sm font-bold leading-6 text-[#302C36]">
//                       {LOCAL.fullAddress}
//                     </p>

//                   </div>
//                 </div>

//                 <div className="flex gap-4 py-5">

//                   <Phone
//                     size={18}
//                     className="mt-1 shrink-0 text-[#6055A6]"
//                   />

//                   <div>

//                     <p className="text-[8px] font-black uppercase tracking-[.18em] text-[#AAA6B2]">
//                       Phone
//                     </p>

//                     <a
//                       href={`tel:${LOCAL.phoneTel}`}
//                       className="mt-1.5 block text-sm font-bold text-[#302C36] transition hover:text-[#6055A6]"
//                     >
//                       {LOCAL.phoneDisplay}
//                     </a>

//                   </div>
//                 </div>

//               </div>

//               <Link
//                 to="/contact-us"
//                 className="mt-7 inline-flex items-center gap-3 bg-[#19171D] px-5 py-3.5 text-[10px] font-black uppercase tracking-[.15em] text-white transition hover:bg-[#6055A6]"
//               >
//                 Contact SuperGuard
//                 <ArrowUpRight size={15} />
//               </Link>

//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           EXPERIENCE
//       ========================================================= */}

//       <section className="bg-white py-20 sm:py-24 lg:py-28">
//         <div className="mx-auto max-w-[1320px] px-5 sm:px-8">

//           <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr]">

//             <div>

//               <p className="sg-fresh-reveal text-[10px] font-black uppercase tracking-[.25em] text-[#6055A6]">
//                 08 / The experience
//               </p>

//               <h2 className="sg-fresh-reveal sg-fresh-delay-1 mt-5 max-w-md text-[clamp(2.6rem,4.5vw,4.8rem)] font-black leading-[.88] tracking-[-.06em]">
//                 No drama.
//                 <br />
//                 Clear service.
//               </h2>

//             </div>

//             <div className="grid border-t border-[#DDD9E4] md:grid-cols-3 md:border-t-0">

//               {[
//                 {
//                   icon: Clock3,
//                   title: "Prompt communication",
//                   text: "Tell us what's happening and get clear information about the next step.",
//                 },
//                 {
//                   icon: ShieldCheck,
//                   title: "Professional approach",
//                   text: "We focus on the actual pest problem rather than unnecessary complexity.",
//                 },
//                 {
//                   icon: Sparkles,
//                   title: "Clean experience",
//                   text: "Respectful service for your home, your time and the property itself.",
//                 },
//               ].map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={item.title}
//                     className={`sg-fresh-reveal border-b border-[#DDD9E4] py-7 md:border-b-0 md:border-l md:px-7 ${
//                       index === 0 ? "md:pl-7" : ""
//                     }`}
//                   >

//                     <Icon size={20} className="text-[#6055A6]" />

//                     <h3 className="mt-10 text-lg font-black tracking-[-.02em]">
//                       {item.title}
//                     </h3>

//                     <p className="mt-3 text-sm leading-6 text-[#77727F]">
//                       {item.text}
//                     </p>

//                   </div>
//                 );
//               })}

//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           FAQ
//       ========================================================= */}

//       <section className="bg-[#EAE7F0] py-20 sm:py-24 lg:py-28">
//         <div className="mx-auto max-w-[1200px] px-5 sm:px-8">

//           <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr]">

//             <div>

//               <p className="sg-fresh-reveal text-[10px] font-black uppercase tracking-[.25em] text-[#6055A6]">
//                 09 / Common questions
//               </p>

//               <h2 className="sg-fresh-reveal sg-fresh-delay-1 mt-5 max-w-sm text-[clamp(2.7rem,4.5vw,4.7rem)] font-black leading-[.88] tracking-[-.06em]">
//                 Before
//                 <br />
//                 you call.
//               </h2>

//               <p className="sg-fresh-reveal sg-fresh-delay-2 mt-6 max-w-xs text-sm leading-7 text-[#77727F]">
//                 A few straightforward answers to common questions about pest
//                 control and our service.
//               </p>

//             </div>

//             <div className="border-t border-[#D5D1DC]">

//               {faqs.map((faq, index) => {

//                 const isOpen = openFaq === index;

//                 return (
//                   <div
//                     key={faq.question}
//                     className="border-b border-[#D5D1DC]"
//                   >

//                     <button
//                       type="button"
//                       onClick={() =>
//                         setOpenFaq(isOpen ? -1 : index)
//                       }
//                       className="flex w-full items-center justify-between gap-6 py-6 text-left"
//                     >

//                       <span className="flex gap-4 text-sm font-black text-[#19171D] sm:text-base">

//                         <span className="mt-0.5 text-[9px] font-black text-[#6055A6]">
//                           0{index + 1}
//                         </span>

//                         {faq.question}

//                       </span>

//                       <span
//                         className={`flex h-8 w-8 shrink-0 items-center justify-center border transition ${
//                           isOpen
//                             ? "border-[#6055A6] bg-[#6055A6] text-white"
//                             : "border-[#D5D1DC] text-[#6055A6]"
//                         }`}
//                       >

//                         <ChevronDown
//                           size={15}
//                           className={`transition-transform duration-300 ${
//                             isOpen ? "rotate-180" : ""
//                           }`}
//                         />

//                       </span>

//                     </button>

//                     <div
//                       className={`sg-faq-content grid ${
//                         isOpen
//                           ? "grid-rows-[1fr] opacity-100"
//                           : "grid-rows-[0fr] opacity-0"
//                       }`}
//                     >

//                       <div className="overflow-hidden">

//                         <p className="max-w-2xl pb-6 pl-8 text-sm leading-7 text-[#77727F]">
//                           {faq.answer}
//                         </p>

//                       </div>

//                     </div>

//                   </div>
//                 );
//               })}

//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           FINAL CTA
//       ========================================================= */}

//       <section className="bg-[#19171D] py-20 text-white sm:py-24 lg:py-28">
//         <div className="mx-auto max-w-[1320px] px-5 sm:px-8">

//           <div className="border-y border-white/[.1] py-8">

//             <div className="grid gap-10 lg:grid-cols-[1fr_280px] lg:items-end">

//               <div>

//                 <p className="sg-fresh-reveal text-[10px] font-black uppercase tracking-[.27em] text-[#A8A1D5]">
//                   10 / Ready to deal with it?
//                 </p>

//                 <h2 className="sg-fresh-reveal sg-fresh-delay-1 mt-5 max-w-3xl text-[clamp(2.8rem,5vw,5.5rem)] font-black leading-[.88] tracking-[-.065em]">
//                   Don't let a small pest problem become a{" "}
//                   <span className="text-[#A8A1D5]">big one.</span>
//                 </h2>

//                 <p className="sg-fresh-reveal sg-fresh-delay-2 mt-6 max-w-xl text-sm leading-7 text-white/40 sm:text-base">
//                   Speak to SuperGuard Services Woolwich about your pest
//                   problem and find out what the next step should be.
//                 </p>

//               </div>

//               <div className="sg-fresh-reveal sg-fresh-delay-2">

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="flex w-full items-center justify-between border border-white/15 bg-[#6055A6] px-5 py-5 transition hover:bg-white hover:text-[#19171D]"
//                 >

//                   <span>

//                     <span className="block text-[8px] font-black uppercase tracking-[.18em] opacity-50">
//                       Call us
//                     </span>

//                     <span className="mt-1 block text-base font-black">
//                       {LOCAL.phoneDisplay}
//                     </span>

//                   </span>

//                   <ArrowUpRight size={19} />

//                 </a>

//               </div>

//             </div>

//             <div className="mt-10 grid gap-5 border-t border-white/[.1] pt-6 sm:grid-cols-[1fr_auto] sm:items-end">

//               <div>

//                 <p className="text-[8px] font-black uppercase tracking-[.2em] text-white/25">
//                   {LOCAL.company}
//                 </p>

//                 <div className="mt-2 flex items-start gap-2 text-xs leading-5 text-white/40">

//                   <MapPin size={14} className="mt-0.5 shrink-0" />

//                   {LOCAL.fullAddress}

//                 </div>

//               </div>

//               <Link
//                 to="/contact-us"
//                 className="inline-flex items-center gap-3 text-[9px] font-black uppercase tracking-[.16em] text-white/65 transition hover:text-[#A8A1D5]"
//               >
//                 Contact SuperGuard
//                 <ArrowRight size={14} />
//               </Link>

//             </div>

//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           BOTTOM BAR
//       ========================================================= */}

//       <section className="bg-[#6055A6] text-white">
//         <div className="mx-auto flex max-w-[1320px] flex-col gap-5 px-5 py-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between">

//           <div>

//             <p className="text-[8px] font-black uppercase tracking-[.2em] text-white/45">
//               {LOCAL.company}
//             </p>

//             <p className="mt-1.5 text-xs text-white/60">
//               Professional pest control across Woolwich and nearby areas.
//             </p>

//           </div>

//           <div className="flex flex-wrap gap-2">

//             <a
//               href={`tel:${LOCAL.phoneTel}`}
//               className="inline-flex items-center gap-2 border border-white/20 px-4 py-3 text-[9px] font-black uppercase tracking-[.13em] transition hover:bg-white hover:text-[#6055A6]"
//             >
//               <Phone size={13} />
//               {LOCAL.phoneDisplay}
//             </a>

//             <Link
//               to="/contact-us"
//               className="inline-flex items-center gap-2 bg-white px-4 py-3 text-[9px] font-black uppercase tracking-[.13em] text-[#6055A6] transition hover:bg-[#19171D] hover:text-white"
//             >
//               Contact us
//               <ArrowRight size={14} />
//             </Link>

//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }















// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import {
//   ArrowDownRight,
//   ArrowRight,
//   ArrowUpRight,
//   Bug,
//   Check,
//   ChevronDown,
//   Clock3,
//   Home,
//   MapPin,
//   Phone,
//   ShieldCheck,
//   Sparkles,
//   Target,
//   UserCheck,
// } from "lucide-react";

// const LOCAL = {
//   company: "SuperGuard Pest Control Services Chessington",
//   shortName: "SuperGuard Chessington",
//   area: "Chessington",
//   city: "Chessington",
//   postcode: "KT9 1AY",
//   streetAddress: "95 Rhodrons Ave",
//   fullAddress: "95 Rhodrons Ave, Chessington KT9 1AY, United Kingdom",
//   phoneDisplay: "+44 7356 234726",
//   phoneTel: "+447356234726",
// };

// // Keep the original callback API endpoint and request payload structure unchanged.
// const API_URL = "https://superguard-woolwich-backend.vercel.app/api/callback";

// const services = [
//   {
//     number: "01",
//     title: "Rats & Mice",
//     eyebrow: "Rodent Control",
//     image: "/images/rodents.webp",
//     icon: Bug,
//     description:
//       "Professional rodent control for homes and properties dealing with rats, mice, droppings, scratching noises or signs of activity.",
//     points: ["Detailed inspection", "Targeted treatment", "Entry-point identification"],
//   },
//   {
//     number: "02",
//     title: "Bed Bugs",
//     eyebrow: "Bed Bug Treatment",
//     image: "/images/bedbugs.webp",
//     icon: Home,
//     description:
//       "A careful approach to bed bug problems, focusing on locating activity, treating affected areas and reducing the chance of the problem returning.",
//     points: ["Room-by-room inspection", "Targeted treatment", "Practical prevention advice"],
//   },
//   {
//     number: "03",
//     title: "Wasp Nests",
//     eyebrow: "Wasp Control",
//     image: "/images/wasps.webp",
//     icon: ShieldCheck,
//     description:
//       "Professional wasp nest treatment designed to deal with active nests around homes, gardens, roof spaces and other property areas.",
//     points: ["Nest location assessment", "Professional treatment", "Safety-focused approach"],
//   },
// ];

// const faqs = [
//   {
//     question: "Do you cover Chessington and nearby areas?",
//     answer:
//       "Yes. SuperGuard Pest Control Services Chessington provides pest-control services in Chessington and nearby areas. If you are unsure whether your location is covered, call us and we can confirm.",
//   },
//   {
//     question: "What happens when I contact SuperGuard?",
//     answer:
//       "We first take some basic information about the pest problem and your property. From there, we can advise you on the next practical step and arrange the appropriate service.",
//   },
//   {
//     question: "Do I need to know exactly what pest I have?",
//     answer:
//       "No. You do not need to identify the pest yourself. Tell us what you have noticed — such as noises, droppings, bites, insects or a nest — and we can help determine the appropriate treatment.",
//   },
//   {
//     question: "Can pest problems come back after treatment?",
//     answer:
//       "Some pest problems can return if the conditions allowing them to enter or remain on a property are not addressed. That is why inspection and practical prevention advice are important parts of the process.",
//   },
// ];

// export default function HomePage() {
//   const [formData, setFormData] = useState({ name: "", postcode: "", phone: "" });
//   const [loading, setLoading] = useState(false);
//   const [openFaq, setOpenFaq] = useState(0);

//   useEffect(() => {
//     const elements = document.querySelectorAll(".sg-chess-reveal");
//     if (!("IntersectionObserver" in window)) {
//       elements.forEach((element) => element.classList.add("sg-chess-visible"));
//       return;
//     }
//     const observer = new IntersectionObserver(
//       (entries) => entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("sg-chess-visible");
//           observer.unobserve(entry.target);
//         }
//       }),
//       { threshold: 0.08 }
//     );
//     elements.forEach((element) => observer.observe(element));
//     return () => observer.disconnect();
//   }, []);

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.phone.trim()) {
//       toast.error("Please enter your phone number.");
//       return;
//     }
//     setLoading(true);
//     toast
//       .promise(
//         axios.post(API_URL, {
//           ...formData,
//           area: LOCAL.area,
//           business: LOCAL.company,
//           address: LOCAL.fullAddress,
//         }),
//         {
//           loading: "Sending your callback request...",
//           success: "Thanks — we'll be in touch shortly.",
//           error: (error) => error?.response?.data?.message || "Something went wrong. Please try again.",
//         }
//       )
//       .then(() => setFormData({ name: "", postcode: "", phone: "" }))
//       .catch(() => {})
//       .finally(() => setLoading(false));
//   };

//   return (
//     <main className="sg-chess-page min-h-screen overflow-hidden bg-[#F4F2F7] text-[#19171D]">
//       <Toaster position="top-center" />
//       <style>{`
//         .sg-chess-page { --sg-purple:#6055A6; --sg-ink:#19171D; --sg-paper:#F4F2F7; --sg-lilac:#EAE7F0; }
//         .sg-chess-reveal { opacity:0; transform:translateY(24px); transition:opacity .7s ease,transform .7s cubic-bezier(.2,.7,.2,1); }
//         .sg-chess-visible { opacity:1; transform:translateY(0); }
//         .sg-chess-delay-1 { transition-delay:.1s; } .sg-chess-delay-2 { transition-delay:.2s; } .sg-chess-delay-3 { transition-delay:.3s; }
//         .sg-chess-image { transition:transform .85s cubic-bezier(.2,.7,.2,1),filter .5s ease; }
//         .sg-chess-image-frame:hover .sg-chess-image { transform:scale(1.055); filter:saturate(1.08); }
//         .sg-chess-cut { clip-path:polygon(0 0,88% 0,100% 12%,100% 100%,12% 100%,0 88%); }
//         .sg-chess-arch { border-radius:48% 48% 12px 12px; }
//         .sg-chess-pill { border-radius:999px 999px 18px 18px; }
//         .sg-chess-faq { transition:grid-template-rows .3s ease,opacity .3s ease; }
//         @media (prefers-reduced-motion: reduce) { .sg-chess-reveal,.sg-chess-image { transition:none; } }
//       `}</style>

//       {/* No navbar or site footer here: this component is the homepage content only. */}
//       <section className="relative overflow-hidden bg-[#6055A6] text-white">
//         <div className="pointer-events-none absolute -right-28 -top-28 h-[440px] w-[440px] rounded-full border border-white/10 sm:h-[600px] sm:w-[600px]" />
//         <div className="pointer-events-none absolute right-8 top-20 h-40 w-40 rounded-full border border-white/10" />
//         <div className="mx-auto grid max-w-[1500px] gap-10 px-5 pb-14 pt-7 sm:px-8 sm:pb-20 lg:grid-cols-[.94fr_1.06fr] lg:items-center lg:gap-4 lg:px-12 lg:py-12">
//           <div className="relative z-10 flex flex-col items-start">
//             <div className="flex w-full items-center justify-between border-b border-white/20 pb-5">
//               <div className="flex items-center gap-3">
//                 <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#6055A6]"><ShieldCheck size={19} /></span>
//                 <span className="max-w-[230px] text-[9px] font-black uppercase leading-4 tracking-[.19em] text-white/85 sm:max-w-none">{LOCAL.company}</span>
//               </div>
//               <span className="hidden text-[10px] font-bold tracking-[.18em] text-white/50 sm:block">{LOCAL.postcode}</span>
//             </div>
//             <p className="sg-chess-reveal mt-12 flex items-center gap-3 text-[10px] font-black uppercase tracking-[.25em] text-white/65"><span className="h-px w-8 bg-white/60" /> Local pest control / Chessington</p>
//             <h1 className="sg-chess-reveal sg-chess-delay-1 mt-6 max-w-[700px] text-[clamp(3.25rem,7.2vw,7.2rem)] font-black leading-[.86] tracking-[-.075em]">A pest-free<br /><span className="text-white/55">home starts</span><br />with a plan.</h1>
//             <p className="sg-chess-reveal sg-chess-delay-2 mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">Professional pest control for homes and properties across Chessington and nearby areas. Clear advice, careful inspection and a treatment approach built around the problem.</p>
//             <div className="sg-chess-reveal sg-chess-delay-3 mt-8 flex flex-wrap gap-3">
//               <a href={`tel:${LOCAL.phoneTel}`} className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-[10px] font-black uppercase tracking-[.13em] text-[#6055A6] transition hover:bg-[#19171D] hover:text-white"><Phone size={15} />{LOCAL.phoneDisplay}</a>
//               <Link to="/contact-us" className="inline-flex items-center gap-3 rounded-full border border-white/35 px-6 py-4 text-[10px] font-black uppercase tracking-[.13em] text-white transition hover:bg-white hover:text-[#6055A6]">Talk to our team <ArrowUpRight size={15} /></Link>
//             </div>
//             <div className="mt-11 grid w-full max-w-xl grid-cols-3 border-t border-white/20 pt-5">
//               {["Residential", "Commercial", "Chessington & nearby"].map((item) => <div key={item} className="pr-3 text-[9px] font-bold uppercase leading-4 tracking-[.12em] text-white/55">{item}</div>)}
//             </div>
//           </div>

//           <div className="relative mx-auto w-full max-w-[690px] pb-10 lg:pl-8 lg:pb-12">
//             <div className="sg-chess-image-frame relative ml-auto h-[390px] w-[88%] overflow-hidden rounded-[46%_46%_14px_14px] border-[8px] border-white/10 sm:h-[520px] lg:h-[650px]">
//               <img src="/images/superguard-hero.webp" alt="Professional pest control in Chessington" className="sg-chess-image h-full w-full object-cover" />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#19171D]/70 via-transparent to-[#6055A6]/10" />
//             </div>
//             <div className="absolute left-0 top-[18%] flex h-28 w-28 flex-col items-center justify-center rounded-full border border-white/30 bg-[#19171D]/85 text-center backdrop-blur-md sm:h-36 sm:w-36">
//               <ShieldCheck size={24} className="mb-2 text-[#A8A1D5]" />
//               <span className="text-[8px] font-black uppercase tracking-[.16em] text-white/60">Local support</span>
//               <span className="mt-1 text-sm font-black sm:text-base">KT9 area</span>
//             </div>
//             <div className="absolute -bottom-1 left-5 right-0 rounded-2xl border border-white/15 bg-[#19171D]/95 p-5 shadow-2xl sm:left-14 sm:p-7">
//               <div className="mb-5 flex items-end justify-between gap-4">
//                 <div><p className="text-[9px] font-black uppercase tracking-[.2em] text-[#A8A1D5]">Request a callback</p><h2 className="mt-2 text-2xl font-black tracking-[-.04em] sm:text-3xl">Tell us what’s happening.</h2></div>
//                 <ArrowDownRight size={22} className="mb-1 shrink-0 text-white/50" />
//               </div>
//               <form onSubmit={handleSubmit}>
//                 <div className="grid gap-4 sm:grid-cols-3">
//                   <label className="block"><span className="text-[8px] font-black uppercase tracking-[.15em] text-white/45">Your name</span><input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className="mt-2 h-10 w-full border-b border-white/25 bg-transparent text-sm text-white outline-none placeholder:text-white/25 focus:border-[#A8A1D5]" /></label>
//                   <label className="block"><span className="text-[8px] font-black uppercase tracking-[.15em] text-white/45">Postcode</span><input type="text" name="postcode" value={formData.postcode} onChange={handleChange} placeholder="e.g. KT9" className="mt-2 h-10 w-full border-b border-white/25 bg-transparent text-sm uppercase text-white outline-none placeholder:text-white/25 focus:border-[#A8A1D5]" /></label>
//                   <label className="block"><span className="text-[8px] font-black uppercase tracking-[.15em] text-white/45">Phone number *</span><input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Your number" className="mt-2 h-10 w-full border-b border-white/25 bg-transparent text-sm text-white outline-none placeholder:text-white/25 focus:border-[#A8A1D5]" /></label>
//                 </div>
//                 <button type="submit" disabled={loading} className="mt-6 flex w-full items-center justify-between rounded-xl bg-[#6055A6] px-5 py-4 text-[10px] font-black uppercase tracking-[.15em] transition hover:bg-white hover:text-[#19171D] disabled:cursor-not-allowed disabled:opacity-60"><span>{loading ? "Sending..." : "Request a callback"}</span><ArrowRight size={17} /></button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="bg-white px-5 py-20 sm:px-8 sm:py-28">
//         <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
//           <div className="sg-chess-reveal"><p className="text-[10px] font-black uppercase tracking-[.23em] text-[#6055A6]">01 / A considered approach</p><div className="mt-5 h-px w-14 bg-[#6055A6]" /><p className="mt-5 max-w-[210px] text-sm leading-6 text-[#85808D]">Understand the signs. Find the source. Choose the right next step.</p></div>
//           <div><h2 className="sg-chess-reveal sg-chess-delay-1 max-w-4xl text-[clamp(2.5rem,5.4vw,5.7rem)] font-black leading-[.92] tracking-[-.065em]">When your property feels different, <span className="text-[#6055A6]">look closer.</span></h2><div className="mt-9 grid gap-7 border-t border-[#DDD9E4] pt-7 sm:grid-cols-2"><p className="sg-chess-reveal sg-chess-delay-2 text-sm leading-7 text-[#77727F] sm:text-base">A problem can start quietly — scratching behind a wall, droppings in a cupboard, bites appearing overnight or wasps moving around a roof space.</p><p className="sg-chess-reveal sg-chess-delay-3 border-[#DDD9E4] text-sm leading-7 text-[#77727F] sm:border-l sm:pl-7 sm:text-base">Our approach is straightforward: understand what is happening, identify the likely source and focus on a suitable treatment with practical prevention advice.</p></div></div>
//         </div>
//       </section>

//       <section className="overflow-hidden bg-[#EAE7F0] px-5 py-20 sm:px-8 sm:py-28">
//         <div className="mx-auto grid max-w-[1320px] items-center gap-14 lg:grid-cols-[.92fr_1.08fr] lg:gap-20">
//           <div className="relative mx-auto w-full max-w-[520px]">
//             <div className="sg-chess-image-frame relative h-[420px] overflow-hidden rounded-[48%_48%_8px_8px] sm:h-[560px]"><img src="/images/about-superguard.webp" alt="SuperGuard pest control service" className="sg-chess-image h-full w-full object-cover" /></div>
//             <div className="absolute -bottom-5 -right-2 max-w-[240px] rounded-2xl bg-[#6055A6] p-5 text-white shadow-xl sm:-right-7 sm:p-7"><p className="text-[8px] font-black uppercase tracking-[.2em] text-white/60">Local service</p><p className="mt-2 text-2xl font-black tracking-[-.04em]">Chessington</p><p className="mt-1 text-xs text-white/60">KT9 1AY and nearby areas</p></div>
//             <span className="absolute -left-4 top-10 -z-0 h-28 w-28 rounded-full border border-[#6055A6]/30" />
//           </div>
//           <div><p className="sg-chess-reveal text-[10px] font-black uppercase tracking-[.23em] text-[#6055A6]">02 / SuperGuard</p><h2 className="sg-chess-reveal sg-chess-delay-1 mt-5 text-[clamp(2.7rem,5vw,5.2rem)] font-black leading-[.9] tracking-[-.065em]">Small signs can point to a <span className="text-[#6055A6]">bigger issue.</span></h2><p className="sg-chess-reveal sg-chess-delay-2 mt-7 max-w-xl text-sm leading-7 text-[#77727F] sm:text-base">SuperGuard Pest Control Services Chessington takes a practical, property-conscious approach. We focus on identifying pest activity, understanding where it may be coming from and selecting a suitable response.</p>
//             <div className="mt-8 grid gap-x-6 border-t border-[#D5D1DC] sm:grid-cols-2">{["Professional inspection", "Targeted treatment", "Care for your property", "Prevention-focused advice"].map((item) => <div key={item} className="flex items-center gap-3 border-b border-[#D5D1DC] py-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#6055A6] text-white"><Check size={13} /></span><span className="text-xs font-bold text-[#403B47]">{item}</span></div>)}</div>
//             <Link to="/contact-us" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#19171D] px-6 py-4 text-[10px] font-black uppercase tracking-[.13em] text-white transition hover:bg-[#6055A6]">Discuss your pest problem <ArrowUpRight size={15} /></Link>
//           </div>
//         </div>
//       </section>

//       <section className="bg-white px-5 py-20 sm:px-8 sm:py-28">
//         <div className="mx-auto max-w-[1320px]"><div className="grid gap-8 border-b border-[#DDD9E4] pb-9 lg:grid-cols-[1fr_.7fr] lg:items-end"><div><p className="sg-chess-reveal text-[10px] font-black uppercase tracking-[.23em] text-[#6055A6]">03 / Our process</p><h2 className="sg-chess-reveal sg-chess-delay-1 mt-5 max-w-2xl text-[clamp(2.8rem,5.5vw,5.5rem)] font-black leading-[.88] tracking-[-.065em]">Less guesswork.<br /><span className="text-[#6055A6]">More clarity.</span></h2></div><p className="sg-chess-reveal sg-chess-delay-2 max-w-lg text-sm leading-7 text-[#77727F]">A good treatment starts with a good understanding of the problem. We consider the signs, likely access points and the conditions around the affected area.</p></div>
//           <div className="mt-10 grid gap-4 md:grid-cols-3">{[{icon:Target,n:"01",title:"Find the source",text:"Look beyond the obvious sign and assess where pest activity may be coming from."},{icon:UserCheck,n:"02",title:"Treat the problem",text:"Choose a focused treatment approach suited to the pest and property."},{icon:ShieldCheck,n:"03",title:"Reduce the risk",text:"Share practical steps that can help make the property less attractive to pests."}].map((item,i)=>{const Icon=item.icon;return <article key={item.n} className={`sg-chess-reveal group min-h-[270px] rounded-[28px] p-7 sm:p-9 ${i===1?"bg-[#6055A6] text-white":"bg-[#F4F2F7] text-[#19171D]"}`}><div className="flex items-center justify-between"><span className={`text-5xl font-black tracking-[-.07em] ${i===1?"text-white/30":"text-[#6055A6]/25"}`}>{item.n}</span><span className={`flex h-12 w-12 items-center justify-center rounded-full ${i===1?"bg-white/15":"bg-white"}`}><Icon size={21} className={i===1?"text-white":"text-[#6055A6]"}/></span></div><h3 className="mt-12 text-2xl font-black tracking-[-.04em]">{item.title}</h3><p className={`mt-3 max-w-sm text-sm leading-6 ${i===1?"text-white/70":"text-[#77727F]"}`}>{item.text}</p></article>})}</div>
//         </div>
//       </section>

//       <section className="relative overflow-hidden bg-[#6055A6] px-5 py-20 text-white sm:px-8 sm:py-28">
//         <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full border border-white/10" />
//         <div className="relative mx-auto max-w-[1320px]"><div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end"><div><p className="sg-chess-reveal text-[10px] font-black uppercase tracking-[.23em] text-white/55">04 / Services</p><h2 className="sg-chess-reveal sg-chess-delay-1 mt-5 max-w-md text-[clamp(2.8rem,5vw,5.2rem)] font-black leading-[.88] tracking-[-.065em]">What needs<br /><span className="text-white/55">dealing with?</span></h2></div><p className="sg-chess-reveal sg-chess-delay-2 max-w-lg pb-2 text-sm leading-7 text-white/65">Our core services cover common pest problems affecting homes and properties across Chessington and nearby areas.</p></div>
//           <div className="mt-12 grid gap-5 lg:grid-cols-3">{services.map((service,index)=>{const Icon=service.icon;return <Link key={service.number} to="/contact-us" aria-label={`Book service for ${service.title}`} className={`sg-chess-reveal group relative flex min-w-0 flex-col overflow-hidden bg-[#19171D] ${index===1?"rounded-[46%_46%_22px_22px] pt-5":"rounded-[26px]"}`}><div className={`sg-chess-image-frame relative mx-3 mt-3 h-[250px] overflow-hidden ${index===1?"rounded-[45%_45%_12px_12px]":"sg-chess-cut rounded-[18px]"}`}><img src={service.image} alt={service.title} className="sg-chess-image h-full w-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-[#19171D]/60 via-transparent to-transparent"/><span className="absolute left-4 top-4 rounded-full border border-white/30 bg-[#19171D]/60 px-3 py-2 text-[8px] font-black uppercase tracking-[.16em] text-white backdrop-blur-sm">{service.eyebrow}</span><span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#6055A6] transition group-hover:bg-[#6055A6] group-hover:text-white"><ArrowUpRight size={17}/></span></div><div className="flex flex-1 flex-col p-6 sm:p-7"><div className="flex items-center gap-3 text-white/60"><Icon size={16}/><span className="text-[9px] font-black uppercase tracking-[.18em]">Service {service.number}</span></div><h3 className="mt-4 text-3xl font-black tracking-[-.05em]">{service.title}</h3><p className="mt-4 flex-1 text-sm leading-6 text-white/60">{service.description}</p><div className="mt-5 space-y-2 border-t border-white/10 pt-4">{service.points.map(point=><div key={point} className="flex items-center gap-2 text-[10px] font-semibold text-white/75"><Check size={12} className="shrink-0 text-[#A8A1D5]"/>{point}</div>)}</div><div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5 text-[9px] font-black uppercase tracking-[.15em] text-white/85"><span>Discuss this service</span><ArrowRight size={15}/></div></div></Link>})}</div>
//         </div>
//       </section>

//       <section className="bg-[#19171D] px-5 py-20 text-white sm:px-8 sm:py-28">
//         <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="sg-chess-reveal text-[10px] font-black uppercase tracking-[.23em] text-[#A8A1D5]">05 / How it works</p><h2 className="sg-chess-reveal sg-chess-delay-1 mt-5 text-[clamp(2.8rem,5vw,5.1rem)] font-black leading-[.88] tracking-[-.065em]">Simple steps.<br /><span className="text-white/45">Clear answers.</span></h2><p className="sg-chess-reveal sg-chess-delay-2 mt-6 max-w-sm text-sm leading-7 text-white/50">From the first conversation, we keep the process focused on the details that matter.</p><a href={`tel:${LOCAL.phoneTel}`} className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-4 text-[10px] font-black uppercase tracking-[.13em] transition hover:bg-[#6055A6]"><Phone size={14}/>{LOCAL.phoneDisplay}</a></div>
//           <div className="border-t border-white/15">{[{n:"01",title:"Tell us what you have noticed",text:"Share what you have seen, where it is happening and how long the issue has been present."},{n:"02",title:"Assess the situation",text:"The signs of activity and the property are considered to help select the appropriate approach."},{n:"03",title:"Carry out targeted treatment",text:"Treatment focuses on the identified pest problem and the affected areas."},{n:"04",title:"Help protect the property",text:"Receive practical guidance on reducing conditions that may encourage future pest activity."}].map(step=><div key={step.n} className="sg-chess-reveal grid gap-4 border-b border-white/15 py-6 sm:grid-cols-[58px_1fr_auto] sm:items-center"><span className="text-2xl font-black text-[#A8A1D5]/55">{step.n}</span><div><h3 className="text-lg font-black tracking-[-.025em] sm:text-xl">{step.title}</h3><p className="mt-2 max-w-2xl text-sm leading-6 text-white/45">{step.text}</p></div><ArrowRight size={17} className="hidden text-white/35 sm:block"/></div>)}</div>
//         </div>
//       </section>

//       <section className="bg-white px-5 py-20 sm:px-8 sm:py-28">
//         <div className="mx-auto grid max-w-[1320px] overflow-hidden rounded-[30px] bg-[#19171D] lg:grid-cols-[.82fr_1.18fr]"><div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12"><div><p className="sg-chess-reveal text-[10px] font-black uppercase tracking-[.23em] text-[#A8A1D5]">06 / Property-first service</p><h2 className="sg-chess-reveal sg-chess-delay-1 mt-6 text-[clamp(2.6rem,4.6vw,4.8rem)] font-black leading-[.9] tracking-[-.065em] text-white">Protect the place you <span className="text-[#A8A1D5]">call home.</span></h2><p className="sg-chess-reveal sg-chess-delay-2 mt-6 max-w-md text-sm leading-7 text-white/50">Pest control is about more than dealing with what you can see. It is about understanding the setting and taking sensible steps to address the problem.</p></div><div className="mt-10 grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-3">{["Respect for your property","Clear communication","Focused treatment"].map(item=><div key={item} className="flex items-start gap-2 text-xs leading-5 text-white/60"><Check size={14} className="mt-0.5 shrink-0 text-[#A8A1D5]"/>{item}</div>)}</div></div><div className="sg-chess-image-frame relative min-h-[350px] overflow-hidden sm:min-h-[480px]"><img src="/images/mission-superguard.webp" alt="Professional pest control service" className="sg-chess-image absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-0 bg-gradient-to-r from-[#19171D]/65 via-transparent to-[#19171D]/10"/><div className="absolute bottom-6 right-6 rounded-2xl border border-white/20 bg-[#19171D]/75 px-5 py-4 backdrop-blur-md"><p className="text-[8px] font-black uppercase tracking-[.2em] text-white/45">Serving</p><p className="mt-1 text-sm font-bold text-white">Chessington & nearby areas</p></div></div></div>
//       </section>

//       <section className="bg-[#EAE7F0] px-5 py-20 sm:px-8 sm:py-28">
//         <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center"><div className="relative overflow-hidden rounded-[30px] bg-[#19171D] p-7 text-white sm:p-10 lg:p-12"><div className="absolute -right-14 -top-16 h-64 w-64 rounded-full border border-white/10"/><div className="relative flex min-h-[360px] flex-col justify-between"><div><div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[.2em] text-white/45"><MapPin size={15} className="text-[#A8A1D5]"/>Local service area</div><h2 className="mt-8 text-[clamp(3.2rem,7vw,6rem)] font-black leading-[.82] tracking-[-.075em]">Chessington<span className="text-[#A8A1D5]">.</span></h2><p className="mt-4 text-sm font-bold uppercase tracking-[.12em] text-white/30">Surrey / KT9</p></div><div className="mt-12 grid grid-cols-2 border-t border-white/10">{["Chessington","KT9 1AY","Nearby areas","Homes & businesses"].map(item=><div key={item} className="border-b border-white/10 py-4 text-xs font-semibold text-white/55">{item}</div>)}</div></div></div>
//           <div><p className="sg-chess-reveal text-[10px] font-black uppercase tracking-[.23em] text-[#6055A6]">07 / Local & nearby</p><h2 className="sg-chess-reveal sg-chess-delay-1 mt-5 max-w-lg text-[clamp(2.7rem,4.8vw,4.9rem)] font-black leading-[.9] tracking-[-.06em]">A local point of contact.</h2><p className="sg-chess-reveal sg-chess-delay-2 mt-6 max-w-xl text-sm leading-7 text-[#77727F] sm:text-base">SuperGuard Pest Control Services Chessington supports customers dealing with pest problems in Chessington and nearby areas.</p><div className="mt-8 border-y border-[#D5D1DC]"><div className="flex gap-4 border-b border-[#D5D1DC] py-5"><MapPin size={19} className="mt-1 shrink-0 text-[#6055A6]"/><div><p className="text-[8px] font-black uppercase tracking-[.18em] text-[#AAA6B2]">Address</p><p className="mt-1.5 text-sm font-bold leading-6 text-[#302C36]">{LOCAL.fullAddress}</p><a href="https://www.google.com/maps/search/?api=1&query=95+Rhodrons+Ave%2C+Chessington+KT9+1AY" target="_blank" rel="noreferrer" className="mt-2 inline-block text-[10px] font-black uppercase tracking-[.12em] text-[#6055A6] hover:underline">View directions <ArrowUpRight size={12} className="inline"/></a></div></div><div className="flex gap-4 py-5"><Phone size={19} className="mt-1 shrink-0 text-[#6055A6]"/><div><p className="text-[8px] font-black uppercase tracking-[.18em] text-[#AAA6B2]">Phone</p><a href={`tel:${LOCAL.phoneTel}`} className="mt-1.5 block text-sm font-bold text-[#302C36] transition hover:text-[#6055A6]">{LOCAL.phoneDisplay}</a></div></div></div><Link to="/contact-us" className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#19171D] px-6 py-4 text-[10px] font-black uppercase tracking-[.13em] text-white transition hover:bg-[#6055A6]">Contact SuperGuard <ArrowUpRight size={15}/></Link></div>
//         </div>
//       </section>

//       <section className="bg-white px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[.7fr_1.3fr]"><div><p className="sg-chess-reveal text-[10px] font-black uppercase tracking-[.23em] text-[#6055A6]">08 / The experience</p><h2 className="sg-chess-reveal sg-chess-delay-1 mt-5 text-[clamp(2.8rem,5vw,5rem)] font-black leading-[.88] tracking-[-.065em]">No drama.<br/><span className="text-[#6055A6]">Clear service.</span></h2></div><div className="grid gap-5 border-t border-[#DDD9E4] sm:grid-cols-3 sm:border-t-0">{[{icon:Clock3,title:"Prompt communication",text:"Tell us what is happening and get clear information about the next step."},{icon:ShieldCheck,title:"Professional approach",text:"Focus on the actual pest problem rather than unnecessary complexity."},{icon:Sparkles,title:"A considered service",text:"Respectful support for your home, your time and your property."}].map((item,index)=>{const Icon=item.icon;return <div key={item.title} className={`sg-chess-reveal border-b border-[#DDD9E4] py-6 sm:border-l sm:border-b-0 sm:px-6 ${index===0?"sm:pl-0":""}`}><span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAE7F0]"><Icon size={20} className="text-[#6055A6]"/></span><h3 className="mt-8 text-lg font-black tracking-[-.025em]">{item.title}</h3><p className="mt-3 text-sm leading-6 text-[#77727F]">{item.text}</p></div>})}</div></div></section>

//       <section className="bg-[#EAE7F0] px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[.65fr_1.35fr]"><div><p className="sg-chess-reveal text-[10px] font-black uppercase tracking-[.23em] text-[#6055A6]">09 / Common questions</p><h2 className="sg-chess-reveal sg-chess-delay-1 mt-5 text-[clamp(2.8rem,5vw,4.8rem)] font-black leading-[.88] tracking-[-.065em]">Before<br/><span className="text-[#6055A6]">you call.</span></h2><p className="sg-chess-reveal sg-chess-delay-2 mt-6 max-w-xs text-sm leading-7 text-[#77727F]">A few straightforward answers about pest control and our local service.</p></div><div className="border-t border-[#D5D1DC]">{faqs.map((faq,index)=>{const isOpen=openFaq===index;return <div key={faq.question} className="border-b border-[#D5D1DC]"><button type="button" onClick={()=>setOpenFaq(isOpen?-1:index)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-6 py-6 text-left"><span className="flex gap-4 text-sm font-black text-[#19171D] sm:text-base"><span className="mt-0.5 text-[9px] font-black text-[#6055A6]">0{index+1}</span>{faq.question}</span><span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${isOpen?"bg-[#6055A6] text-white":"border border-[#D5D1DC] text-[#6055A6]"}`}><ChevronDown size={15} className={`transition-transform duration-300 ${isOpen?"rotate-180":""}`}/></span></button><div className={`sg-chess-faq grid ${isOpen?"grid-rows-[1fr] opacity-100":"grid-rows-[0fr] opacity-0"}`}><div className="overflow-hidden"><p className="max-w-2xl pb-6 pl-8 text-sm leading-7 text-[#77727F]">{faq.answer}</p></div></div></div>})}</div></div></section>

//       <section className="bg-[#19171D] px-5 py-20 text-white sm:px-8 sm:py-28"><div className="mx-auto max-w-[1320px]"><div className="rounded-[30px] border border-white/10 bg-[#6055A6] p-7 sm:p-10 lg:p-14"><div className="grid gap-10 lg:grid-cols-[1fr_290px] lg:items-end"><div><p className="sg-chess-reveal text-[10px] font-black uppercase tracking-[.23em] text-white/55">10 / Ready for the next step?</p><h2 className="sg-chess-reveal sg-chess-delay-1 mt-5 max-w-4xl text-[clamp(2.8rem,5.5vw,5.7rem)] font-black leading-[.88] tracking-[-.07em]">Don’t let a small pest problem become a <span className="text-white/55">bigger one.</span></h2><p className="sg-chess-reveal sg-chess-delay-2 mt-6 max-w-xl text-sm leading-7 text-white/65 sm:text-base">Speak to SuperGuard Pest Control Services Chessington and find out what the next step should be.</p></div><a href={`tel:${LOCAL.phoneTel}`} className="flex items-center justify-between gap-5 rounded-2xl bg-[#19171D] px-5 py-5 transition hover:bg-white hover:text-[#19171D]"><span><span className="block text-[8px] font-black uppercase tracking-[.18em] opacity-50">Call SuperGuard</span><span className="mt-1 block text-lg font-black">{LOCAL.phoneDisplay}</span></span><ArrowUpRight size={20}/></a></div><div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-[9px] font-black uppercase tracking-[.18em] text-white/45">{LOCAL.company}</p><p className="mt-2 flex items-start gap-2 leading-5"><MapPin size={14} className="mt-0.5 shrink-0"/>{LOCAL.fullAddress}</p></div><Link to="/contact-us" className="inline-flex items-center gap-2 self-start text-[9px] font-black uppercase tracking-[.15em] transition hover:text-white sm:self-center">Contact us <ArrowRight size={14}/></Link></div></div></div></section>

//       <section className="bg-[#6055A6] px-5 py-6 text-white sm:px-8"><div className="mx-auto flex max-w-[1320px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-[9px] font-black uppercase tracking-[.18em] text-white/55">{LOCAL.company}</p><p className="mt-1.5 text-xs leading-5 text-white/65">Professional pest control in Chessington and nearby areas.</p></div><div className="flex flex-wrap gap-2"><a href={`tel:${LOCAL.phoneTel}`} className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-3 text-[9px] font-black uppercase tracking-[.12em] transition hover:bg-white hover:text-[#6055A6]"><Phone size={13}/>{LOCAL.phoneDisplay}</a><Link to="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-[9px] font-black uppercase tracking-[.12em] text-[#6055A6] transition hover:bg-[#19171D] hover:text-white">Contact us <ArrowRight size={14}/></Link></div></div></section>
//     </main>
//   );
// }


























// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import {
//   ArrowDownRight,
//   ArrowRight,
//   ArrowUpRight,
//   Bug,
//   Check,
//   ChevronDown,
//   Clock3,
//   Home,
//   MapPin,
//   Phone,
//   ShieldCheck,
//   Sparkles,
//   Target,
//   UserCheck,
// } from "lucide-react";

// const LOCAL = {
//   company: "SuperGuard Hampstead Pest Control Services",
//   shortName: "SuperGuard Hampstead",
//   area: "Hampstead",
//   city: "London",
//   postcode: "NW3 5UN",
//   streetAddress: "12 Vane Cl",
//   fullAddress: "12 Vane Cl, London NW3 5UN, United Kingdom",
//   phoneDisplay: "+44 7466 966471",
//   phoneTel: "+447466966471",
// };

// // ORIGINAL API ENDPOINT — unchanged
// const API_URL =
//   "https://superguard-woolwich-backend.vercel.app/api/callback";

// const services = [
//   {
//     number: "01",
//     title: "Rats & Mice",
//     eyebrow: "Rodent management",
//     image: "/images/rodents.webp",
//     icon: Bug,
//     description:
//       "Identify signs of rodent activity, investigate potential entry points and find a suitable approach for your home or business.",
//     points: [
//       "Inspection of activity",
//       "Targeted control measures",
//       "Entry-point advice",
//     ],
//   },
//   {
//     number: "02",
//     title: "Bed Bugs",
//     eyebrow: "Careful inspection",
//     image: "/images/bedbugs.webp",
//     icon: Home,
//     description:
//       "A considered response to suspected bed bug activity, with attention to affected rooms, potential hiding places and appropriate treatment.",
//     points: [
//       "Inspection of affected areas",
//       "Appropriate treatment planning",
//       "Practical preparation advice",
//     ],
//   },
//   {
//     number: "03",
//     title: "Wasps",
//     eyebrow: "Nest assessment",
//     image: "/images/wasps.webp",
//     icon: ShieldCheck,
//     description:
//       "Professional assistance with wasp activity around roof spaces, gardens, property boundaries and other potentially affected areas.",
//     points: [
//       "Nest location assessment",
//       "Professional treatment options",
//       "Safety-conscious approach",
//     ],
//   },
// ];

// const faqs = [
//   {
//     question: "Do you cover Hampstead and nearby areas?",
//     answer:
//       "SuperGuard Hampstead provides pest-control services in Hampstead and nearby areas. Contact us with your postcode to check whether your property is within our service area.",
//   },
//   {
//     question: "What information should I provide when calling?",
//     answer:
//       "Tell us what you have noticed, where the activity is occurring and how long you have been experiencing the problem. Your postcode and contact number will also help us understand your enquiry.",
//   },
//   {
//     question: "What if I cannot identify the pest?",
//     answer:
//       "You do not need to identify it yourself. Describe the signs you have seen, such as droppings, scratching sounds, insect activity or a nest, and we can discuss the appropriate next step.",
//   },
//   {
//     question: "How does professional pest control work?",
//     answer:
//       "The approach depends on the pest and the property. It may involve inspecting signs of activity, identifying potential access points, choosing appropriate control measures and providing practical prevention advice.",
//   },
// ];

// const processSteps = [
//   {
//     number: "01",
//     title: "Tell us what you've noticed",
//     text: "Describe the signs, the affected area and any concerns about your property.",
//   },
//   {
//     number: "02",
//     title: "Understand the problem",
//     text: "Assess the available information and identify the appropriate next steps.",
//   },
//   {
//     number: "03",
//     title: "Choose a suitable response",
//     text: "Focus on targeted control measures suited to the pest and circumstances.",
//   },
//   {
//     number: "04",
//     title: "Consider prevention",
//     text: "Review practical steps that may help reduce the likelihood of recurring activity.",
//   },
// ];

// export default function HomePage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [openFaq, setOpenFaq] = useState(0);

//   useEffect(() => {
//     const elements = document.querySelectorAll(".sg-hamp-reveal");

//     if (!("IntersectionObserver" in window)) {
//       elements.forEach((element) =>
//         element.classList.add("sg-hamp-visible")
//       );
//       return;
//     }

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("sg-hamp-visible");
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.08 }
//     );

//     elements.forEach((element) => observer.observe(element));

//     return () => observer.disconnect();
//   }, []);

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormData((previous) => ({
//       ...previous,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!formData.phone.trim()) {
//       toast.error("Please enter your phone number.");
//       return;
//     }

//     setLoading(true);

//     try {
//       await toast.promise(
//         axios.post(API_URL, {
//           ...formData,
//           area: LOCAL.area,
//           business: LOCAL.company,
//           address: LOCAL.fullAddress,
//         }),
//         {
//           loading: "Sending your callback request...",
//           success: "Thanks — we'll be in touch shortly.",
//           error: (error) =>
//             error?.response?.data?.message ||
//             "Something went wrong. Please try again.",
//         }
//       );

//       setFormData({
//         name: "",
//         postcode: "",
//         phone: "",
//       });
//     } catch {
//       // The toast displays the API error.
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="sg-hamp-page min-h-screen overflow-hidden bg-[#F4F2F7] text-[#19171D]">
//       <Toaster position="top-center" />

//       <style>{`
//         .sg-hamp-page {
//           --h-purple: #6055A6;
//           --h-ink: #19171D;
//           --h-paper: #F4F2F7;
//           --h-lilac: #EAE7F0;
//           --h-muted: #85808D;
//         }

//         .sg-hamp-reveal {
//           opacity: 0;
//           transform: translateY(22px);
//           transition:
//             opacity .7s ease,
//             transform .7s cubic-bezier(.2,.7,.2,1);
//         }

//         .sg-hamp-visible {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .sg-hamp-d1 { transition-delay: .1s; }
//         .sg-hamp-d2 { transition-delay: .2s; }
//         .sg-hamp-d3 { transition-delay: .3s; }

//         .sg-hamp-image {
//           transition:
//             transform .9s cubic-bezier(.2,.7,.2,1),
//             filter .5s ease;
//         }

//         .sg-hamp-image-frame:hover .sg-hamp-image {
//           transform: scale(1.045);
//           filter: saturate(1.08);
//         }

//         .sg-hamp-frame-one {
//           clip-path: polygon(0 0, 88% 0, 100% 13%, 100% 100%, 12% 100%, 0 86%);
//         }

//         .sg-hamp-frame-two {
//           clip-path: polygon(0 8%, 82% 0, 100% 18%, 92% 100%, 8% 94%);
//         }

//         .sg-hamp-frame-three {
//           clip-path: polygon(10% 0, 100% 0, 100% 88%, 86% 100%, 0 100%, 0 14%);
//         }

//         .sg-hamp-oval {
//           border-radius: 48% 48% 9px 9px;
//         }

//         .sg-hamp-faq-panel {
//           display: grid;
//           grid-template-rows: 0fr;
//           opacity: 0;
//           transition:
//             grid-template-rows .3s ease,
//             opacity .3s ease;
//         }

//         .sg-hamp-faq-panel.is-open {
//           grid-template-rows: 1fr;
//           opacity: 1;
//         }

//         .sg-hamp-faq-inner {
//           overflow: hidden;
//         }

//         .sg-hamp-grid-lines {
//           background-image:
//             linear-gradient(to right, rgba(96,85,166,.055) 1px, transparent 1px),
//             linear-gradient(to bottom, rgba(96,85,166,.055) 1px, transparent 1px);
//           background-size: 36px 36px;
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .sg-hamp-reveal,
//           .sg-hamp-image,
//           .sg-hamp-faq-panel {
//             transition: none;
//           }

//           .sg-hamp-reveal {
//             opacity: 1;
//             transform: none;
//           }
//         }
//       `}</style>

//       {/* HERO: asymmetric editorial composition */}
//       <section className="relative overflow-hidden bg-[#6055A6] text-white">
//         <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full border border-white/10 sm:h-[700px] sm:w-[700px]" />

//         <div className="pointer-events-none absolute bottom-0 left-[43%] top-0 hidden w-px bg-white/10 lg:block" />

//         <div className="relative mx-auto grid max-w-[1500px] gap-10 px-5 pb-16 pt-7 sm:px-8 sm:pb-24 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-5 lg:px-12 lg:py-12">
//           <div className="relative z-10">
//             <div className="flex items-center justify-between gap-4 border-b border-white/20 pb-5">
//               <div className="flex items-center gap-3">
//                 <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#6055A6]">
//                   <ShieldCheck size={20} />
//                 </span>

//                 <div>
//                   <p className="text-[10px] font-black uppercase tracking-[.15em] sm:text-xs">
//                     SuperGuard
//                   </p>
//                   <p className="mt-1 text-[8px] font-bold uppercase tracking-[.16em] text-white/55 sm:text-[9px]">
//                     Hampstead Pest Control
//                   </p>
//                 </div>
//               </div>

//               <span className="hidden text-[9px] font-bold uppercase tracking-[.15em] text-white/55 sm:block">
//                 London / NW3
//               </span>
//             </div>

//             <p className="sg-hamp-reveal mt-12 flex items-center gap-3 text-[9px] font-black uppercase tracking-[.24em] text-white/65 sm:mt-16">
//               <span className="h-px w-8 bg-white/60" />
//               A considered approach to pest control
//             </p>

//             <h1 className="sg-hamp-reveal sg-hamp-d1 mt-6 max-w-[720px] text-[clamp(3.3rem,7.7vw,7.6rem)] font-black leading-[.84] tracking-[-.075em]">
//               Your space.
//               <br />
//               <span className="text-white/45">Without</span>
//               <br />
//               unwanted
//               <br />
//               visitors.
//             </h1>

//             <p className="sg-hamp-reveal sg-hamp-d2 mt-7 max-w-lg text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
//               Professional pest control for homes and properties in
//               Hampstead and nearby areas. Understand the problem,
//               explore the right response and take a considered next step.
//             </p>

//             <div className="sg-hamp-reveal sg-hamp-d3 mt-8 flex flex-wrap gap-3">
//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-4 text-[10px] font-black uppercase tracking-[.12em] text-[#6055A6] transition hover:bg-[#19171D] hover:text-white sm:px-6"
//               >
//                 <Phone size={15} />
//                 Call {LOCAL.phoneDisplay}
//               </a>

//               <Link
//                 to="/contact-us"
//                 className="inline-flex items-center gap-3 rounded-full border border-white/40 px-5 py-4 text-[10px] font-black uppercase tracking-[.12em] text-white transition hover:bg-white hover:text-[#6055A6] sm:px-6"
//               >
//                 Discuss your problem
//                 <ArrowUpRight size={15} />
//               </Link>
//             </div>

//             <div className="mt-12 grid max-w-lg grid-cols-3 border-t border-white/20 pt-5">
//               {[
//                 "Residential properties",
//                 "Commercial premises",
//                 "Hampstead & nearby",
//               ].map((item) => (
//                 <div
//                   key={item}
//                   className="pr-3 text-[8px] font-bold uppercase leading-4 tracking-[.09em] text-white/55 sm:text-[9px]"
//                 >
//                   {item}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="relative mx-auto w-full max-w-[700px] pb-12 pt-3 lg:pl-8 lg:pb-16">
//             <div className="absolute right-0 top-0 h-24 w-24 rounded-full border border-white/20 sm:h-32 sm:w-32" />

//             <div className="sg-hamp-image-frame sg-hamp-oval relative ml-auto h-[390px] w-[88%] overflow-hidden border-[7px] border-white/10 sm:h-[530px] lg:h-[650px]">
//               <img
//                 src="/images/superguard-hero.webp"
//                 alt="Pest control for homes in Hampstead"
//                 className="sg-hamp-image h-full w-full object-cover"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-[#19171D]/70 via-transparent to-[#6055A6]/10" />

//               <div className="absolute bottom-8 left-7 max-w-[230px] sm:bottom-12 sm:left-10">
//                 <p className="text-[9px] font-black uppercase tracking-[.2em] text-white/60">
//                   Local service
//                 </p>
//                 <p className="mt-2 text-2xl font-black tracking-[-.04em] sm:text-3xl">
//                   Hampstead.
//                 </p>
//                 <p className="mt-2 text-xs text-white/70">
//                   NW3 and nearby areas
//                 </p>
//               </div>
//             </div>

//             <div className="absolute left-0 top-[16%] flex h-24 w-24 flex-col items-center justify-center rounded-full border border-white/30 bg-[#19171D]/90 text-center backdrop-blur-md sm:h-32 sm:w-32">
//               <ShieldCheck size={23} className="mb-2 text-[#A8A1D5]" />
//               <span className="text-[8px] font-black uppercase tracking-[.13em] text-white/55">
//                 SuperGuard
//               </span>
//               <span className="mt-1 text-sm font-black sm:text-base">
//                 NW3
//               </span>
//             </div>

//             <div className="absolute -bottom-1 left-2 right-0 rounded-[24px] border border-white/10 bg-[#19171D] p-5 shadow-2xl sm:left-10 sm:p-7">
//               <div className="mb-5 flex items-start justify-between gap-4">
//                 <div>
//                   <p className="text-[9px] font-black uppercase tracking-[.2em] text-[#A8A1D5]">
//                     Request a callback
//                   </p>
//                   <h2 className="mt-2 text-2xl font-black tracking-[-.045em] sm:text-3xl">
//                     Tell us what's happening.
//                   </h2>
//                 </div>
//                 <ArrowDownRight
//                   size={23}
//                   className="mt-1 shrink-0 text-white/45"
//                 />
//               </div>

//               <form onSubmit={handleSubmit}>
//                 <div className="grid gap-4 sm:grid-cols-3">
//                   <label className="block min-w-0">
//                     <span className="text-[8px] font-black uppercase tracking-[.13em] text-white/50">
//                       Your name
//                     </span>
//                     <input
//                       type="text"
//                       name="name"
//                       autoComplete="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       placeholder="Your name"
//                       className="mt-2 h-11 w-full min-w-0 border-b border-white/25 bg-transparent text-sm text-white outline-none placeholder:text-white/30 focus:border-[#A8A1D5]"
//                     />
//                   </label>

//                   <label className="block min-w-0">
//                     <span className="text-[8px] font-black uppercase tracking-[.13em] text-white/50">
//                       Postcode
//                     </span>
//                     <input
//                       type="text"
//                       name="postcode"
//                       autoComplete="postal-code"
//                       value={formData.postcode}
//                       onChange={handleChange}
//                       placeholder="e.g. NW3"
//                       className="mt-2 h-11 w-full min-w-0 border-b border-white/25 bg-transparent text-sm uppercase text-white outline-none placeholder:text-white/30 focus:border-[#A8A1D5]"
//                     />
//                   </label>

//                   <label className="block min-w-0">
//                     <span className="text-[8px] font-black uppercase tracking-[.13em] text-white/50">
//                       Phone number *
//                     </span>
//                     <input
//                       type="tel"
//                       name="phone"
//                       autoComplete="tel"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       required
//                       placeholder="Your number"
//                       className="mt-2 h-11 w-full min-w-0 border-b border-white/25 bg-transparent text-sm text-white outline-none placeholder:text-white/30 focus:border-[#A8A1D5]"
//                     />
//                   </label>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="mt-6 flex w-full items-center justify-between gap-4 rounded-xl bg-[#6055A6] px-5 py-4 text-[10px] font-black uppercase tracking-[.14em] transition hover:bg-white hover:text-[#19171D] disabled:cursor-not-allowed disabled:opacity-60"
//                 >
//                   <span>
//                     {loading ? "Sending..." : "Request a callback"}
//                   </span>
//                   <ArrowRight size={17} />
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* INTRO: oversized editorial typography */}
//       <section className="bg-white px-5 py-20 sm:px-8 sm:py-28">
//         <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[.55fr_1.45fr] lg:gap-16">
//           <div className="sg-hamp-reveal">
//             <p className="text-[10px] font-black uppercase tracking-[.22em] text-[#6055A6]">
//               01 / The bigger picture
//             </p>
//             <div className="mt-5 h-px w-14 bg-[#6055A6]" />
//             <p className="mt-5 max-w-[230px] text-sm leading-7 text-[#85808D]">
//               Recognise the signs. Understand the source. Decide what comes
//               next.
//             </p>
//           </div>

//           <div>
//             <h2 className="sg-hamp-reveal sg-hamp-d1 max-w-5xl text-[clamp(2.7rem,6.4vw,6.4rem)] font-black leading-[.91] tracking-[-.07em]">
//               The smallest signs can point to a{" "}
//               <span className="text-[#6055A6]">bigger problem.</span>
//             </h2>

//             <div className="mt-9 grid gap-7 border-t border-[#DDD9E4] pt-7 sm:grid-cols-2">
//               <p className="sg-hamp-reveal sg-hamp-d2 text-sm leading-7 text-[#77727F] sm:text-base">
//                 Scratching sounds, droppings, damaged materials, insect
//                 activity or an unexpected nest can all be reasons to
//                 investigate what is happening around your property.
//               </p>

//               <p className="sg-hamp-reveal sg-hamp-d3 border-[#DDD9E4] text-sm leading-7 text-[#77727F] sm:border-l sm:pl-7 sm:text-base">
//                 A suitable response begins with understanding the signs,
//                 considering the affected area and choosing control measures
//                 that match the circumstances.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ABOUT: offset image and overlapping editorial caption */}
//       <section className="overflow-hidden bg-[#EAE7F0] px-5 py-20 sm:px-8 sm:py-28">
//         <div className="mx-auto grid max-w-[1320px] items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
//           <div className="relative mx-auto w-full max-w-[540px] pb-9 pr-5">
//             <div className="sg-hamp-image-frame sg-hamp-frame-two relative h-[390px] overflow-hidden sm:h-[560px]">
//               <img
//                 src="/images/about-superguard.webp"
//                 alt="SuperGuard pest control service"
//                 className="sg-hamp-image h-full w-full object-cover"
//               />
//             </div>

//             <div className="absolute bottom-0 right-0 max-w-[245px] bg-[#6055A6] p-5 text-white shadow-xl sm:max-w-[280px] sm:p-7">
//               <p className="text-[8px] font-black uppercase tracking-[.2em] text-white/60">
//                 Local knowledge
//               </p>
//               <p className="mt-2 text-2xl font-black tracking-[-.04em] sm:text-3xl">
//                 Hampstead
//               </p>
//               <p className="mt-2 text-xs leading-5 text-white/65">
//                 NW3 5UN and nearby areas
//               </p>
//             </div>

//             <span className="pointer-events-none absolute -left-4 top-10 -z-0 h-24 w-24 rounded-full border border-[#6055A6]/30" />
//           </div>

//           <div>
//             <p className="sg-hamp-reveal text-[10px] font-black uppercase tracking-[.22em] text-[#6055A6]">
//               02 / SuperGuard Hampstead
//             </p>

//             <h2 className="sg-hamp-reveal sg-hamp-d1 mt-5 text-[clamp(2.8rem,5.5vw,5.5rem)] font-black leading-[.9] tracking-[-.065em]">
//               Look beyond what's{" "}
//               <span className="text-[#6055A6]">visible.</span>
//             </h2>

//             <p className="sg-hamp-reveal sg-hamp-d2 mt-7 max-w-xl text-sm leading-7 text-[#77727F] sm:text-base">
//               SuperGuard Hampstead Pest Control Services takes a practical
//               approach to pest problems affecting local homes and
//               businesses. The focus is on understanding the situation,
//               considering the property and discussing appropriate next steps.
//             </p>

//             <div className="mt-8 grid gap-x-6 border-t border-[#D5D1DC] sm:grid-cols-2">
//               {[
//                 "Inspection-led approach",
//                 "Targeted control measures",
//                 "Consideration for your property",
//                 "Practical prevention guidance",
//               ].map((item) => (
//                 <div
//                   key={item}
//                   className="flex items-center gap-3 border-b border-[#D5D1DC] py-4"
//                 >
//                   <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#6055A6] text-white">
//                     <Check size={13} />
//                   </span>
//                   <span className="text-xs font-bold text-[#403B47]">
//                     {item}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             <Link
//               to="/contact-us"
//               className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#19171D] px-6 py-4 text-[10px] font-black uppercase tracking-[.12em] text-white transition hover:bg-[#6055A6]"
//             >
//               Discuss your pest problem
//               <ArrowUpRight size={15} />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* METHOD: sculptural numbered panels */}
//       <section className="bg-white px-5 py-20 sm:px-8 sm:py-28">
//         <div className="mx-auto max-w-[1320px]">
//           <div className="grid gap-8 border-b border-[#DDD9E4] pb-9 lg:grid-cols-[1fr_.75fr] lg:items-end">
//             <div>
//               <p className="sg-hamp-reveal text-[10px] font-black uppercase tracking-[.22em] text-[#6055A6]">
//                 03 / The approach
//               </p>
//               <h2 className="sg-hamp-reveal sg-hamp-d1 mt-5 max-w-3xl text-[clamp(2.8rem,6vw,5.8rem)] font-black leading-[.88] tracking-[-.07em]">
//                 Less guesswork.
//                 <br />
//                 <span className="text-[#6055A6]">More clarity.</span>
//               </h2>
//             </div>

//             <p className="sg-hamp-reveal sg-hamp-d2 max-w-lg text-sm leading-7 text-[#77727F]">
//               Every pest problem is different. The right next step depends
//               on the evidence, the affected area and the conditions around
//               the property.
//             </p>
//           </div>

//           <div className="mt-10 grid gap-4 md:grid-cols-3">
//             {[
//               {
//                 icon: Target,
//                 number: "01",
//                 title: "Understand",
//                 text: "Look at the signs, affected areas and potential sources of activity.",
//               },
//               {
//                 icon: UserCheck,
//                 number: "02",
//                 title: "Address",
//                 text: "Consider appropriate control measures based on the pest and property.",
//               },
//               {
//                 icon: ShieldCheck,
//                 number: "03",
//                 title: "Prevent",
//                 text: "Identify practical changes that may help reduce future pest activity.",
//               },
//             ].map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <article
//                   key={item.number}
//                   className={`sg-hamp-reveal group min-h-[285px] p-7 sm:p-9 ${
//                     index === 1
//                       ? "bg-[#6055A6] text-white"
//                       : "bg-[#F4F2F7] text-[#19171D]"
//                   }`}
//                   style={{
//                     borderRadius:
//                       index === 0
//                         ? "48px 8px 48px 8px"
//                         : index === 1
//                         ? "8px 48px 8px 48px"
//                         : "8px 8px 48px 8px",
//                   }}
//                 >
//                   <div className="flex items-center justify-between">
//                     <span
//                       className={`text-5xl font-black tracking-[-.08em] ${
//                         index === 1
//                           ? "text-white/30"
//                           : "text-[#6055A6]/25"
//                       }`}
//                     >
//                       {item.number}
//                     </span>

//                     <span
//                       className={`flex h-12 w-12 items-center justify-center rounded-full ${
//                         index === 1 ? "bg-white/15" : "bg-white"
//                       }`}
//                     >
//                       <Icon
//                         size={21}
//                         className={
//                           index === 1 ? "text-white" : "text-[#6055A6]"
//                         }
//                       />
//                     </span>
//                   </div>

//                   <h3 className="mt-12 text-2xl font-black tracking-[-.04em]">
//                     {item.title}
//                   </h3>

//                   <p
//                     className={`mt-3 max-w-sm text-sm leading-6 ${
//                       index === 1 ? "text-white/70" : "text-[#77727F]"
//                     }`}
//                   >
//                     {item.text}
//                   </p>
//                 </article>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* SERVICES: irregular image shapes, no conventional square cards */}
//       <section className="relative overflow-hidden bg-[#6055A6] px-5 py-20 text-white sm:px-8 sm:py-28">
//         <div className="pointer-events-none absolute -right-28 top-20 h-80 w-80 rounded-full border border-white/10" />

//         <div className="relative mx-auto max-w-[1320px]">
//           <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
//             <div>
//               <p className="sg-hamp-reveal text-[10px] font-black uppercase tracking-[.22em] text-white/60">
//                 04 / Pest control services
//               </p>

//               <h2 className="sg-hamp-reveal sg-hamp-d1 mt-5 max-w-xl text-[clamp(2.9rem,5.5vw,5.5rem)] font-black leading-[.88] tracking-[-.07em]">
//                 Different pests.
//                 <br />
//                 <span className="text-white/50">Considered solutions.</span>
//               </h2>
//             </div>

//             <p className="sg-hamp-reveal sg-hamp-d2 max-w-lg pb-2 text-sm leading-7 text-white/70">
//               Explore some of the pest problems we can help you discuss.
//               The appropriate service will depend on the pest, the property
//               and the circumstances.
//             </p>
//           </div>

//           <div className="mt-12 grid gap-x-6 gap-y-12 lg:grid-cols-3">
//             {services.map((service, index) => {
//               const Icon = service.icon;

//               return (
//                 <Link
//                   key={service.number}
//                   to="/contact-us"
//                   aria-label={`Enquire about ${service.title}`}
//                   className="sg-hamp-reveal group flex min-w-0 flex-col"
//                 >
//                   <div
//                     className={`sg-hamp-image-frame relative h-[290px] overflow-hidden sm:h-[360px] ${
//                       index === 0
//                         ? "sg-hamp-frame-one"
//                         : index === 1
//                         ? "sg-hamp-oval"
//                         : "sg-hamp-frame-three"
//                     }`}
//                   >
//                     <img
//                       src={service.image}
//                       alt={service.title}
//                       className="sg-hamp-image h-full w-full object-cover"
//                     />

//                     <div className="absolute inset-0 bg-gradient-to-t from-[#19171D]/65 via-transparent to-[#19171D]/10" />

//                     <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-[#19171D]/65 px-3 py-2 text-[8px] font-black uppercase tracking-[.15em] text-white backdrop-blur-sm">
//                       {service.eyebrow}
//                     </span>

//                     <span className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#6055A6] transition group-hover:bg-[#19171D] group-hover:text-white">
//                       <ArrowUpRight size={18} />
//                     </span>
//                   </div>

//                   <div className="mt-6 flex items-center gap-3 text-white/60">
//                     <Icon size={17} />
//                     <span className="text-[9px] font-black uppercase tracking-[.18em]">
//                       Service {service.number}
//                     </span>
//                   </div>

//                   <h3 className="mt-3 text-3xl font-black tracking-[-.055em] sm:text-4xl">
//                     {service.title}
//                   </h3>

//                   <p className="mt-4 text-sm leading-7 text-white/70">
//                     {service.description}
//                   </p>

//                   <div className="mt-5 space-y-3 border-t border-white/20 pt-5">
//                     {service.points.map((point) => (
//                       <div
//                         key={point}
//                         className="flex items-start gap-3 text-xs leading-5 text-white/80"
//                       >
//                         <Check
//                           size={14}
//                           className="mt-0.5 shrink-0 text-[#D0C9F2]"
//                         />
//                         {point}
//                       </div>
//                     ))}
//                   </div>

//                   <div className="mt-6 flex items-center justify-between border-t border-white/20 pt-5 text-[9px] font-black uppercase tracking-[.15em]">
//                     <span>Enquire about this service</span>
//                     <ArrowRight
//                       size={16}
//                       className="transition-transform group-hover:translate-x-1"
//                     />
//                   </div>
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* PROCESS: dark editorial timeline */}
//       <section className="bg-[#19171D] px-5 py-20 text-white sm:px-8 sm:py-28">
//         <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[.72fr_1.28fr]">
//           <div>
//             <p className="sg-hamp-reveal text-[10px] font-black uppercase tracking-[.22em] text-[#A8A1D5]">
//               05 / How it works
//             </p>

//             <h2 className="sg-hamp-reveal sg-hamp-d1 mt-5 text-[clamp(2.8rem,5.4vw,5.3rem)] font-black leading-[.88] tracking-[-.07em]">
//               Straightforward
//               <br />
//               <span className="text-white/40">from the start.</span>
//             </h2>

//             <p className="sg-hamp-reveal sg-hamp-d2 mt-6 max-w-sm text-sm leading-7 text-white/55">
//               Start with a conversation about what you have noticed and
//               explore a suitable next step for your property.
//             </p>

//             <a
//               href={`tel:${LOCAL.phoneTel}`}
//               className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/25 px-5 py-4 text-[10px] font-black uppercase tracking-[.13em] transition hover:bg-[#6055A6]"
//             >
//               <Phone size={14} />
//               {LOCAL.phoneDisplay}
//             </a>
//           </div>

//           <div className="border-t border-white/15">
//             {processSteps.map((step) => (
//               <div
//                 key={step.number}
//                 className="sg-hamp-reveal grid gap-4 border-b border-white/15 py-7 sm:grid-cols-[64px_1fr_auto] sm:items-center"
//               >
//                 <span className="text-2xl font-black text-[#A8A1D5]/60">
//                   {step.number}
//                 </span>

//                 <div>
//                   <h3 className="text-lg font-black tracking-[-.025em] sm:text-xl">
//                     {step.title}
//                   </h3>
//                   <p className="mt-2 max-w-2xl text-sm leading-6 text-white/50">
//                     {step.text}
//                   </p>
//                 </div>

//                 <ArrowRight
//                   size={17}
//                   className="hidden text-white/40 sm:block"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* PROPERTY CARE: broad image panel with contrasting text */}
//       <section className="bg-white px-5 py-20 sm:px-8 sm:py-28">
//         <div className="mx-auto grid max-w-[1320px] overflow-hidden rounded-[32px] bg-[#19171D] lg:grid-cols-[.9fr_1.1fr]">
//           <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
//             <div>
//               <p className="sg-hamp-reveal text-[10px] font-black uppercase tracking-[.22em] text-[#A8A1D5]">
//                 06 / A property-conscious approach
//               </p>

//               <h2 className="sg-hamp-reveal sg-hamp-d1 mt-6 text-[clamp(2.7rem,4.9vw,5rem)] font-black leading-[.9] tracking-[-.065em] text-white">
//                 Protect the place you{" "}
//                 <span className="text-[#A8A1D5]">call home.</span>
//               </h2>

//               <p className="sg-hamp-reveal sg-hamp-d2 mt-6 max-w-md text-sm leading-7 text-white/55">
//                 Effective pest management starts with understanding the
//                 setting. Consider the affected areas, possible access
//                 points and practical ways to address the issue.
//               </p>
//             </div>

//             <div className="mt-10 grid gap-4 border-t border-white/15 pt-6 sm:grid-cols-3">
//               {[
//                 "Respect for your property",
//                 "Clear communication",
//                 "Focused control",
//               ].map((item) => (
//                 <div
//                   key={item}
//                   className="flex items-start gap-2 text-xs leading-5 text-white/65"
//                 >
//                   <Check
//                     size={14}
//                     className="mt-0.5 shrink-0 text-[#A8A1D5]"
//                   />
//                   {item}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="sg-hamp-image-frame relative min-h-[360px] overflow-hidden sm:min-h-[520px]">
//             <img
//               src="/images/mission-superguard.webp"
//               alt="SuperGuard pest control service"
//               className="sg-hamp-image absolute inset-0 h-full w-full object-cover"
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-[#19171D]/65 via-transparent to-[#19171D]/10" />

//             <div className="absolute bottom-6 left-6 max-w-[280px] border-l-2 border-[#A8A1D5] bg-[#19171D]/80 px-5 py-4 backdrop-blur-md sm:bottom-9 sm:left-9">
//               <p className="text-[8px] font-black uppercase tracking-[.2em] text-white/50">
//                 Local service
//               </p>
//               <p className="mt-2 text-lg font-black text-white">
//                 Hampstead & nearby
//               </p>
//               <p className="mt-1 text-xs text-white/60">
//                 Professional pest control
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* LOCAL AREA: asymmetrical information layout */}
//       <section className="bg-[#EAE7F0] px-5 py-20 sm:px-8 sm:py-28">
//         <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
//           <div className="sg-hamp-grid-lines relative overflow-hidden bg-[#19171D] p-7 text-white sm:p-10 lg:p-12">
//             <div className="relative flex min-h-[380px] flex-col justify-between sm:min-h-[430px]">
//               <div>
//                 <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[.2em] text-white/55">
//                   <MapPin size={16} className="text-[#A8A1D5]" />
//                   Local service area
//                 </div>

//                 <h2 className="mt-9 text-[clamp(3.5rem,8vw,7rem)] font-black leading-[.8] tracking-[-.08em]">
//                   Hampstead
//                   <span className="text-[#A8A1D5]">.</span>
//                 </h2>

//                 <p className="mt-5 text-sm font-bold uppercase tracking-[.18em] text-white/40">
//                   London / NW3
//                 </p>
//               </div>

//               <div className="mt-12 grid grid-cols-2 border-t border-white/15">
//                 {[
//                   "Hampstead",
//                   "NW3 5UN",
//                   "Nearby areas",
//                   "Homes & businesses",
//                 ].map((item) => (
//                   <div
//                     key={item}
//                     className="border-b border-white/10 py-4 text-xs font-semibold text-white/60"
//                   >
//                     {item}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div>
//             <p className="sg-hamp-reveal text-[10px] font-black uppercase tracking-[.22em] text-[#6055A6]">
//               07 / Find your local team
//             </p>

//             <h2 className="sg-hamp-reveal sg-hamp-d1 mt-5 max-w-xl text-[clamp(2.8rem,5.3vw,5.2rem)] font-black leading-[.9] tracking-[-.065em]">
//               A local point of{" "}
//               <span className="text-[#6055A6]">contact.</span>
//             </h2>

//             <p className="sg-hamp-reveal sg-hamp-d2 mt-6 max-w-xl text-sm leading-7 text-[#77727F] sm:text-base">
//               Contact SuperGuard Hampstead to discuss pest problems
//               affecting your home or business in Hampstead and nearby areas.
//             </p>

//             <div className="mt-8 border-y border-[#D5D1DC]">
//               <div className="flex gap-4 border-b border-[#D5D1DC] py-6">
//                 <MapPin
//                   size={19}
//                   className="mt-1 shrink-0 text-[#6055A6]"
//                 />

//                 <div className="min-w-0">
//                   <p className="text-[8px] font-black uppercase tracking-[.18em] text-[#AAA6B2]">
//                     Address
//                   </p>

//                   <p className="mt-2 text-sm font-bold leading-6 text-[#302C36]">
//                     {LOCAL.fullAddress}
//                   </p>

//                   <a
//                     href="https://www.google.com/maps/search/?api=1&query=12+Vane+Cl%2C+London+NW3+5UN"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="mt-3 inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-[.12em] text-[#6055A6] hover:underline"
//                   >
//                     View directions
//                     <ArrowUpRight size={13} />
//                   </a>
//                 </div>
//               </div>

//               <div className="flex gap-4 py-6">
//                 <Phone
//                   size={19}
//                   className="mt-1 shrink-0 text-[#6055A6]"
//                 />

//                 <div>
//                   <p className="text-[8px] font-black uppercase tracking-[.18em] text-[#AAA6B2]">
//                     Phone
//                   </p>

//                   <a
//                     href={`tel:${LOCAL.phoneTel}`}
//                     className="mt-2 block text-sm font-bold text-[#302C36] transition hover:text-[#6055A6]"
//                   >
//                     {LOCAL.phoneDisplay}
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <Link
//               to="/contact-us"
//               className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#19171D] px-6 py-4 text-[10px] font-black uppercase tracking-[.12em] text-white transition hover:bg-[#6055A6]"
//             >
//               Contact SuperGuard
//               <ArrowUpRight size={15} />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* SERVICE PRINCIPLES */}
//       <section className="bg-white px-5 py-20 sm:px-8 sm:py-28">
//         <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[.7fr_1.3fr]">
//           <div>
//             <p className="sg-hamp-reveal text-[10px] font-black uppercase tracking-[.22em] text-[#6055A6]">
//               08 / What matters
//             </p>

//             <h2 className="sg-hamp-reveal sg-hamp-d1 mt-5 text-[clamp(2.8rem,5.3vw,5.1rem)] font-black leading-[.88] tracking-[-.07em]">
//               Thoughtful
//               <br />
//               <span className="text-[#6055A6]">service.</span>
//             </h2>
//           </div>

//           <div className="grid gap-5 border-t border-[#DDD9E4] sm:grid-cols-3 sm:border-t-0">
//             {[
//               {
//                 icon: Clock3,
//                 title: "Clear communication",
//                 text: "Explain what you have noticed and discuss the next practical step.",
//               },
//               {
//                 icon: ShieldCheck,
//                 title: "Professional approach",
//                 text: "Consider the actual pest problem and the circumstances of the property.",
//               },
//               {
//                 icon: Sparkles,
//                 title: "Practical guidance",
//                 text: "Understand the options and prevention measures relevant to your situation.",
//               },
//             ].map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <div
//                   key={item.title}
//                   className={`sg-hamp-reveal border-b border-[#DDD9E4] py-6 sm:border-b-0 sm:border-l sm:px-6 ${
//                     index === 0 ? "sm:pl-0" : ""
//                   }`}
//                 >
//                   <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EAE7F0]">
//                     <Icon size={21} className="text-[#6055A6]" />
//                   </span>

//                   <h3 className="mt-7 text-lg font-black tracking-[-.03em]">
//                     {item.title}
//                   </h3>

//                   <p className="mt-3 text-sm leading-6 text-[#77727F]">
//                     {item.text}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* FAQ: interactive accordion */}
//       <section className="bg-[#EAE7F0] px-5 py-20 sm:px-8 sm:py-28">
//         <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[.7fr_1.3fr]">
//           <div>
//             <p className="sg-hamp-reveal text-[10px] font-black uppercase tracking-[.22em] text-[#6055A6]">
//               09 / Common questions
//             </p>

//             <h2 className="sg-hamp-reveal sg-hamp-d1 mt-5 text-[clamp(2.8rem,5.3vw,5rem)] font-black leading-[.88] tracking-[-.07em]">
//               Before
//               <br />
//               <span className="text-[#6055A6]">you call.</span>
//             </h2>

//             <p className="sg-hamp-reveal sg-hamp-d2 mt-6 max-w-xs text-sm leading-7 text-[#77727F]">
//               Straightforward answers to common questions about our local
//               pest-control service.
//             </p>
//           </div>

//           <div className="border-t border-[#D5D1DC]">
//             {faqs.map((faq, index) => {
//               const isOpen = openFaq === index;

//               return (
//                 <div key={faq.question} className="border-b border-[#D5D1DC]">
//                   <button
//                     type="button"
//                     onClick={() => setOpenFaq(isOpen ? -1 : index)}
//                     aria-expanded={isOpen}
//                     className="flex w-full items-center justify-between gap-5 py-6 text-left"
//                   >
//                     <span className="flex gap-4 text-sm font-black text-[#19171D] sm:text-base">
//                       <span className="mt-0.5 text-[9px] font-black text-[#6055A6]">
//                         0{index + 1}
//                       </span>
//                       {faq.question}
//                     </span>

//                     <span
//                       className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
//                         isOpen
//                           ? "bg-[#6055A6] text-white"
//                           : "border border-[#D5D1DC] text-[#6055A6]"
//                       }`}
//                     >
//                       <ChevronDown
//                         size={15}
//                         className={`transition-transform duration-300 ${
//                           isOpen ? "rotate-180" : ""
//                         }`}
//                       />
//                     </span>
//                   </button>

//                   <div
//                     className={`sg-hamp-faq-panel ${
//                       isOpen ? "is-open" : ""
//                     }`}
//                   >
//                     <div className="sg-hamp-faq-inner">
//                       <p className="max-w-2xl pb-6 pl-8 text-sm leading-7 text-[#77727F]">
//                         {faq.answer}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* FINAL CTA — no separate site footer */}
//       <section className="bg-[#19171D] px-5 py-16 text-white sm:px-8 sm:py-24">
//         <div className="mx-auto max-w-[1320px]">
//           <div className="relative overflow-hidden rounded-[30px] bg-[#6055A6] p-7 sm:p-10 lg:p-14">
//             <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border border-white/15" />

//             <div className="pointer-events-none absolute -right-8 -top-16 h-56 w-56 rounded-full border border-white/10" />

//             <div className="relative grid gap-10 lg:grid-cols-[1fr_300px] lg:items-end">
//               <div>
//                 <p className="sg-hamp-reveal text-[10px] font-black uppercase tracking-[.22em] text-white/60">
//                   10 / Take the next step
//                 </p>

//                 <h2 className="sg-hamp-reveal sg-hamp-d1 mt-5 max-w-4xl text-[clamp(2.8rem,6vw,6rem)] font-black leading-[.87] tracking-[-.075em]">
//                   Don't leave a pest problem{" "}
//                   <span className="text-white/50">unaddressed.</span>
//                 </h2>

//                 <p className="sg-hamp-reveal sg-hamp-d2 mt-6 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
//                   Speak to SuperGuard Hampstead about your pest-control
//                   concerns and find out what to do next.
//                 </p>
//               </div>

//               <div className="flex flex-col gap-3">
//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="flex items-center justify-between gap-4 rounded-2xl bg-[#19171D] px-5 py-5 transition hover:bg-white hover:text-[#19171D]"
//                 >
//                   <span>
//                     <span className="block text-[8px] font-black uppercase tracking-[.18em] opacity-55">
//                       Call SuperGuard
//                     </span>
//                     <span className="mt-2 block text-lg font-black">
//                       {LOCAL.phoneDisplay}
//                     </span>
//                   </span>

//                   <ArrowUpRight size={21} />
//                 </a>

//                 <Link
//                   to="/contact-us"
//                   className="flex items-center justify-between gap-4 rounded-2xl border border-white/35 px-5 py-5 text-xs font-black uppercase tracking-[.12em] transition hover:bg-white hover:text-[#6055A6]"
//                 >
//                   Contact our team
//                   <ArrowRight size={17} />
//                 </Link>
//               </div>
//             </div>

//             <div className="relative mt-10 flex flex-col gap-4 border-t border-white/20 pt-6 sm:flex-row sm:items-end sm:justify-between">
//               <div>
//                 <p className="text-[9px] font-black uppercase tracking-[.18em] text-white/55">
//                   {LOCAL.company}
//                 </p>

//                 <p className="mt-2 flex items-start gap-2 text-xs leading-5 text-white/70">
//                   <MapPin size={14} className="mt-0.5 shrink-0" />
//                   {LOCAL.fullAddress}
//                 </p>
//               </div>

//               <span className="text-[9px] font-bold uppercase tracking-[.14em] text-white/50">
//                 Hampstead & nearby areas
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
























// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import {
//   ArrowDownRight,
//   ArrowRight,
//   ArrowUpRight,
//   Bug,
//   Check,
//   ChevronDown,
//   Clock3,
//   Home,
//   MapPin,
//   Phone,
//   ShieldCheck,
//   Sparkles,
//   Target,
//   UserCheck,
// } from "lucide-react";

// const LOCAL = {
//   company: "SuperGuard Hampstead Pest Control Services",
//   shortName: "SuperGuard Hampstead",
//   area: "Hampstead",
//   city: "London",
//   postcode: "NW3 5UN",
//   streetAddress: "12 Vane Cl",
//   fullAddress: "12 Vane Cl, London NW3 5UN, United Kingdom",
//   phoneDisplay: "+44 7466 966471",
//   phoneTel: "+447466966471",
// };

// // ORIGINAL API ENDPOINT — unchanged
// const API_URL =
//   "https://superguard-woolwich-backend.vercel.app/api/callback";

// const services = [
//   {
//     number: "01",
//     title: "Rats & Mice",
//     eyebrow: "Rodent management",
//     image: "/images/rodents.webp",
//     icon: Bug,
//     description:
//       "Identify signs of rodent activity, investigate potential entry points and find a suitable approach for your home or business.",
//     points: [
//       "Inspection of activity",
//       "Targeted control measures",
//       "Entry-point advice",
//     ],
//   },
//   {
//     number: "02",
//     title: "Bed Bugs",
//     eyebrow: "Careful inspection",
//     image: "/images/bedbugs.webp",
//     icon: Home,
//     description:
//       "A considered response to suspected bed bug activity, with attention to affected rooms, potential hiding places and appropriate treatment.",
//     points: [
//       "Inspection of affected areas",
//       "Appropriate treatment planning",
//       "Practical preparation advice",
//     ],
//   },
//   {
//     number: "03",
//     title: "Wasps",
//     eyebrow: "Nest assessment",
//     image: "/images/wasps.webp",
//     icon: ShieldCheck,
//     description:
//       "Professional assistance with wasp activity around roof spaces, gardens, property boundaries and other potentially affected areas.",
//     points: [
//       "Nest location assessment",
//       "Professional treatment options",
//       "Safety-conscious approach",
//     ],
//   },
// ];

// const faqs = [
//   {
//     question: "Do you cover Hampstead and nearby areas?",
//     answer:
//       "SuperGuard Hampstead provides pest-control services in Hampstead and nearby areas. Contact us with your postcode to check whether your property is within our service area.",
//   },
//   {
//     question: "What information should I provide when calling?",
//     answer:
//       "Tell us what you have noticed, where the activity is occurring and how long you have been experiencing the problem. Your postcode and contact number will also help us understand your enquiry.",
//   },
//   {
//     question: "What if I cannot identify the pest?",
//     answer:
//       "You do not need to identify it yourself. Describe the signs you have seen, such as droppings, scratching sounds, insect activity or a nest, and we can discuss the appropriate next step.",
//   },
//   {
//     question: "How does professional pest control work?",
//     answer:
//       "The approach depends on the pest and the property. It may involve inspecting signs of activity, identifying potential access points, choosing appropriate control measures and providing practical prevention advice.",
//   },
// ];

// const processSteps = [
//   {
//     number: "01",
//     title: "Tell us what you've noticed",
//     text: "Describe the signs, the affected area and any concerns about your property.",
//   },
//   {
//     number: "02",
//     title: "Understand the problem",
//     text: "Assess the available information and identify the appropriate next steps.",
//   },
//   {
//     number: "03",
//     title: "Choose a suitable response",
//     text: "Focus on targeted control measures suited to the pest and circumstances.",
//   },
//   {
//     number: "04",
//     title: "Consider prevention",
//     text: "Review practical steps that may help reduce the likelihood of recurring activity.",
//   },
// ];

// export default function HomePage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [openFaq, setOpenFaq] = useState(0);

//   useEffect(() => {
//     const elements = document.querySelectorAll(".sg-hamp-reveal");

//     if (!("IntersectionObserver" in window)) {
//       elements.forEach((element) =>
//         element.classList.add("sg-hamp-visible")
//       );
//       return;
//     }

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("sg-hamp-visible");
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.08 }
//     );

//     elements.forEach((element) => observer.observe(element));

//     return () => observer.disconnect();
//   }, []);

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormData((previous) => ({
//       ...previous,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!formData.phone.trim()) {
//       toast.error("Please enter your phone number.");
//       return;
//     }

//     setLoading(true);

//     try {
//       await toast.promise(
//         axios.post(API_URL, {
//           ...formData,
//           area: LOCAL.area,
//           business: LOCAL.company,
//           address: LOCAL.fullAddress,
//         }),
//         {
//           loading: "Sending your callback request...",
//           success: "Thanks — we'll be in touch shortly.",
//           error: (error) =>
//             error?.response?.data?.message ||
//             "Something went wrong. Please try again.",
//         }
//       );

//       setFormData({
//         name: "",
//         postcode: "",
//         phone: "",
//       });
//     } catch {
//       // The toast displays the API error.
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="sg-hamp-page min-h-screen overflow-hidden bg-[#F4F2F7] text-[#19171D]">
//       <Toaster position="top-center" />

//       <style>{`
//         .sg-hamp-page {
//           --h-purple: #6055A6;
//           --h-ink: #19171D;
//           --h-paper: #F4F2F7;
//           --h-lilac: #EAE7F0;
//           --h-muted: #85808D;
//         }

//         .sg-hamp-reveal {
//           opacity: 0;
//           transform: translateY(22px);
//           transition:
//             opacity .7s ease,
//             transform .7s cubic-bezier(.2,.7,.2,1);
//         }

//         .sg-hamp-visible {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .sg-hamp-d1 { transition-delay: .1s; }
//         .sg-hamp-d2 { transition-delay: .2s; }
//         .sg-hamp-d3 { transition-delay: .3s; }

//         .sg-hamp-image {
//           transition:
//             transform .9s cubic-bezier(.2,.7,.2,1),
//             filter .5s ease;
//         }

//         .sg-hamp-image-frame:hover .sg-hamp-image {
//           transform: scale(1.045);
//           filter: saturate(1.08);
//         }

//         .sg-hamp-frame-one {
//           clip-path: polygon(0 0, 88% 0, 100% 13%, 100% 100%, 12% 100%, 0 86%);
//         }

//         .sg-hamp-frame-two {
//           clip-path: polygon(0 8%, 82% 0, 100% 18%, 92% 100%, 8% 94%);
//         }

//         .sg-hamp-frame-three {
//           clip-path: polygon(10% 0, 100% 0, 100% 88%, 86% 100%, 0 100%, 0 14%);
//         }

//         .sg-hamp-oval {
//           border-radius: 48% 48% 9px 9px;
//         }

//         .sg-hamp-faq-panel {
//           display: grid;
//           grid-template-rows: 0fr;
//           opacity: 0;
//           transition:
//             grid-template-rows .3s ease,
//             opacity .3s ease;
//         }

//         .sg-hamp-faq-panel.is-open {
//           grid-template-rows: 1fr;
//           opacity: 1;
//         }

//         .sg-hamp-faq-inner {
//           overflow: hidden;
//         }

//         .sg-hamp-grid-lines {
//           background-image:
//             linear-gradient(to right, rgba(96,85,166,.055) 1px, transparent 1px),
//             linear-gradient(to bottom, rgba(96,85,166,.055) 1px, transparent 1px);
//           background-size: 36px 36px;
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .sg-hamp-reveal,
//           .sg-hamp-image,
//           .sg-hamp-faq-panel {
//             transition: none;
//           }

//           .sg-hamp-reveal {
//             opacity: 1;
//             transform: none;
//           }
//         }
//       `}</style>

//       {/* HERO: asymmetric editorial composition */}
//       <section className="relative overflow-hidden bg-[#6055A6] text-white">
//         <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full border border-white/10 sm:h-[700px] sm:w-[700px]" />

//         <div className="pointer-events-none absolute bottom-0 left-[43%] top-0 hidden w-px bg-white/10 lg:block" />

//         <div className="relative mx-auto grid max-w-[1500px] gap-10 px-5 pb-16 pt-7 sm:px-8 sm:pb-24 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-5 lg:px-12 lg:py-12">
//           <div className="relative z-10">
//             <div className="flex items-center justify-between gap-4 border-b border-white/20 pb-5">
//               <div className="flex items-center gap-3">
//                 <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#6055A6]">
//                   <ShieldCheck size={20} />
//                 </span>

//                 <div>
//                   <p className="text-[10px] font-black uppercase tracking-[.15em] sm:text-xs">
//                     SuperGuard
//                   </p>
//                   <p className="mt-1 text-[8px] font-bold uppercase tracking-[.16em] text-white/55 sm:text-[9px]">
//                     Hampstead Pest Control
//                   </p>
//                 </div>
//               </div>

//               <span className="hidden text-[9px] font-bold uppercase tracking-[.15em] text-white/55 sm:block">
//                 London / NW3
//               </span>
//             </div>

//             <p className="sg-hamp-reveal mt-12 flex items-center gap-3 text-[9px] font-black uppercase tracking-[.24em] text-white/65 sm:mt-16">
//               <span className="h-px w-8 bg-white/60" />
//               A considered approach to pest control
//             </p>

//             <h1 className="sg-hamp-reveal sg-hamp-d1 mt-6 max-w-[720px] text-[clamp(3.3rem,7.7vw,7.6rem)] font-black leading-[.84] tracking-[-.075em]">
//               Your space.
//               <br />
//               <span className="text-white/45">Without</span>
//               <br />
//               unwanted
//               <br />
//               visitors.
//             </h1>

//             <p className="sg-hamp-reveal sg-hamp-d2 mt-7 max-w-lg text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
//               Professional pest control for homes and properties in
//               Hampstead and nearby areas. Understand the problem,
//               explore the right response and take a considered next step.
//             </p>

//             <div className="sg-hamp-reveal sg-hamp-d3 mt-8 flex flex-wrap gap-3">
//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-4 text-[10px] font-black uppercase tracking-[.12em] text-[#6055A6] transition hover:bg-[#19171D] hover:text-white sm:px-6"
//               >
//                 <Phone size={15} />
//                 Call {LOCAL.phoneDisplay}
//               </a>

//               <Link
//                 to="/contact-us"
//                 className="inline-flex items-center gap-3 rounded-full border border-white/40 px-5 py-4 text-[10px] font-black uppercase tracking-[.12em] text-white transition hover:bg-white hover:text-[#6055A6] sm:px-6"
//               >
//                 Discuss your problem
//                 <ArrowUpRight size={15} />
//               </Link>
//             </div>

//             <div className="mt-12 grid max-w-lg grid-cols-3 border-t border-white/20 pt-5">
//               {[
//                 "Residential properties",
//                 "Commercial premises",
//                 "Hampstead & nearby",
//               ].map((item) => (
//                 <div
//                   key={item}
//                   className="pr-3 text-[8px] font-bold uppercase leading-4 tracking-[.09em] text-white/55 sm:text-[9px]"
//                 >
//                   {item}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="relative mx-auto w-full max-w-[700px] pb-12 pt-3 lg:pl-8 lg:pb-16">
//             <div className="absolute right-0 top-0 h-24 w-24 rounded-full border border-white/20 sm:h-32 sm:w-32" />

//             <div className="sg-hamp-image-frame sg-hamp-oval relative ml-auto h-[390px] w-[88%] overflow-hidden border-[7px] border-white/10 sm:h-[530px] lg:h-[650px]">
//               <img
//                 src="/images/superguard-hero.webp"
//                 alt="Pest control for homes in Hampstead"
//                 className="sg-hamp-image h-full w-full object-cover"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-[#19171D]/70 via-transparent to-[#6055A6]/10" />

//               <div className="absolute bottom-8 left-7 max-w-[230px] sm:bottom-12 sm:left-10">
//                 <p className="text-[9px] font-black uppercase tracking-[.2em] text-white/60">
//                   Local service
//                 </p>
//                 <p className="mt-2 text-2xl font-black tracking-[-.04em] sm:text-3xl">
//                   Hampstead.
//                 </p>
//                 <p className="mt-2 text-xs text-white/70">
//                   NW3 and nearby areas
//                 </p>
//               </div>
//             </div>

//             <div className="absolute left-0 top-[16%] flex h-24 w-24 flex-col items-center justify-center rounded-full border border-white/30 bg-[#19171D]/90 text-center backdrop-blur-md sm:h-32 sm:w-32">
//               <ShieldCheck size={23} className="mb-2 text-[#A8A1D5]" />
//               <span className="text-[8px] font-black uppercase tracking-[.13em] text-white/55">
//                 SuperGuard
//               </span>
//               <span className="mt-1 text-sm font-black sm:text-base">
//                 NW3
//               </span>
//             </div>

//             <div className="absolute -bottom-1 left-2 right-0 rounded-[24px] border border-white/10 bg-[#19171D] p-5 shadow-2xl sm:left-10 sm:p-7">
//               <div className="mb-5 flex items-start justify-between gap-4">
//                 <div>
//                   <p className="text-[9px] font-black uppercase tracking-[.2em] text-[#A8A1D5]">
//                     Request a callback
//                   </p>
//                   <h2 className="mt-2 text-2xl font-black tracking-[-.045em] sm:text-3xl">
//                     Tell us what's happening.
//                   </h2>
//                 </div>
//                 <ArrowDownRight
//                   size={23}
//                   className="mt-1 shrink-0 text-white/45"
//                 />
//               </div>

//               <form onSubmit={handleSubmit}>
//                 <div className="grid gap-4 sm:grid-cols-3">
//                   <label className="block min-w-0">
//                     <span className="text-[8px] font-black uppercase tracking-[.13em] text-white/50">
//                       Your name
//                     </span>
//                     <input
//                       type="text"
//                       name="name"
//                       autoComplete="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       placeholder="Your name"
//                       className="mt-2 h-11 w-full min-w-0 border-b border-white/25 bg-transparent text-sm text-white outline-none placeholder:text-white/30 focus:border-[#A8A1D5]"
//                     />
//                   </label>

//                   <label className="block min-w-0">
//                     <span className="text-[8px] font-black uppercase tracking-[.13em] text-white/50">
//                       Postcode
//                     </span>
//                     <input
//                       type="text"
//                       name="postcode"
//                       autoComplete="postal-code"
//                       value={formData.postcode}
//                       onChange={handleChange}
//                       placeholder="e.g. NW3"
//                       className="mt-2 h-11 w-full min-w-0 border-b border-white/25 bg-transparent text-sm uppercase text-white outline-none placeholder:text-white/30 focus:border-[#A8A1D5]"
//                     />
//                   </label>

//                   <label className="block min-w-0">
//                     <span className="text-[8px] font-black uppercase tracking-[.13em] text-white/50">
//                       Phone number *
//                     </span>
//                     <input
//                       type="tel"
//                       name="phone"
//                       autoComplete="tel"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       required
//                       placeholder="Your number"
//                       className="mt-2 h-11 w-full min-w-0 border-b border-white/25 bg-transparent text-sm text-white outline-none placeholder:text-white/30 focus:border-[#A8A1D5]"
//                     />
//                   </label>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="mt-6 flex w-full items-center justify-between gap-4 rounded-xl bg-[#6055A6] px-5 py-4 text-[10px] font-black uppercase tracking-[.14em] transition hover:bg-white hover:text-[#19171D] disabled:cursor-not-allowed disabled:opacity-60"
//                 >
//                   <span>
//                     {loading ? "Sending..." : "Request a callback"}
//                   </span>
//                   <ArrowRight size={17} />
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* INTRO: oversized editorial typography */}
//       <section className="bg-white px-5 py-20 sm:px-8 sm:py-28">
//         <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[.55fr_1.45fr] lg:gap-16">
//           <div className="sg-hamp-reveal">
//             <p className="text-[10px] font-black uppercase tracking-[.22em] text-[#6055A6]">
//               01 / The bigger picture
//             </p>
//             <div className="mt-5 h-px w-14 bg-[#6055A6]" />
//             <p className="mt-5 max-w-[230px] text-sm leading-7 text-[#85808D]">
//               Recognise the signs. Understand the source. Decide what comes
//               next.
//             </p>
//           </div>

//           <div>
//             <h2 className="sg-hamp-reveal sg-hamp-d1 max-w-5xl text-[clamp(2.7rem,6.4vw,6.4rem)] font-black leading-[.91] tracking-[-.07em]">
//               The smallest signs can point to a{" "}
//               <span className="text-[#6055A6]">bigger problem.</span>
//             </h2>

//             <div className="mt-9 grid gap-7 border-t border-[#DDD9E4] pt-7 sm:grid-cols-2">
//               <p className="sg-hamp-reveal sg-hamp-d2 text-sm leading-7 text-[#77727F] sm:text-base">
//                 Scratching sounds, droppings, damaged materials, insect
//                 activity or an unexpected nest can all be reasons to
//                 investigate what is happening around your property.
//               </p>

//               <p className="sg-hamp-reveal sg-hamp-d3 border-[#DDD9E4] text-sm leading-7 text-[#77727F] sm:border-l sm:pl-7 sm:text-base">
//                 A suitable response begins with understanding the signs,
//                 considering the affected area and choosing control measures
//                 that match the circumstances.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ABOUT: offset image and overlapping editorial caption */}
//       <section className="overflow-hidden bg-[#EAE7F0] px-5 py-20 sm:px-8 sm:py-28">
//         <div className="mx-auto grid max-w-[1320px] items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
//           <div className="relative mx-auto w-full max-w-[540px] pb-9 pr-5">
//             <div className="sg-hamp-image-frame sg-hamp-frame-two relative h-[390px] overflow-hidden sm:h-[560px]">
//               <img
//                 src="/images/about-superguard.webp"
//                 alt="SuperGuard pest control service"
//                 className="sg-hamp-image h-full w-full object-cover"
//               />
//             </div>

//             <div className="absolute bottom-0 right-0 max-w-[245px] bg-[#6055A6] p-5 text-white shadow-xl sm:max-w-[280px] sm:p-7">
//               <p className="text-[8px] font-black uppercase tracking-[.2em] text-white/60">
//                 Local knowledge
//               </p>
//               <p className="mt-2 text-2xl font-black tracking-[-.04em] sm:text-3xl">
//                 Hampstead
//               </p>
//               <p className="mt-2 text-xs leading-5 text-white/65">
//                 NW3 5UN and nearby areas
//               </p>
//             </div>

//             <span className="pointer-events-none absolute -left-4 top-10 -z-0 h-24 w-24 rounded-full border border-[#6055A6]/30" />
//           </div>

//           <div>
//             <p className="sg-hamp-reveal text-[10px] font-black uppercase tracking-[.22em] text-[#6055A6]">
//               02 / SuperGuard Hampstead
//             </p>

//             <h2 className="sg-hamp-reveal sg-hamp-d1 mt-5 text-[clamp(2.8rem,5.5vw,5.5rem)] font-black leading-[.9] tracking-[-.065em]">
//               Look beyond what's{" "}
//               <span className="text-[#6055A6]">visible.</span>
//             </h2>

//             <p className="sg-hamp-reveal sg-hamp-d2 mt-7 max-w-xl text-sm leading-7 text-[#77727F] sm:text-base">
//               SuperGuard Hampstead Pest Control Services takes a practical
//               approach to pest problems affecting local homes and
//               businesses. The focus is on understanding the situation,
//               considering the property and discussing appropriate next steps.
//             </p>

//             <div className="mt-8 grid gap-x-6 border-t border-[#D5D1DC] sm:grid-cols-2">
//               {[
//                 "Inspection-led approach",
//                 "Targeted control measures",
//                 "Consideration for your property",
//                 "Practical prevention guidance",
//               ].map((item) => (
//                 <div
//                   key={item}
//                   className="flex items-center gap-3 border-b border-[#D5D1DC] py-4"
//                 >
//                   <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#6055A6] text-white">
//                     <Check size={13} />
//                   </span>
//                   <span className="text-xs font-bold text-[#403B47]">
//                     {item}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             <Link
//               to="/contact-us"
//               className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#19171D] px-6 py-4 text-[10px] font-black uppercase tracking-[.12em] text-white transition hover:bg-[#6055A6]"
//             >
//               Discuss your pest problem
//               <ArrowUpRight size={15} />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* METHOD: sculptural numbered panels */}
//       <section className="bg-white px-5 py-20 sm:px-8 sm:py-28">
//         <div className="mx-auto max-w-[1320px]">
//           <div className="grid gap-8 border-b border-[#DDD9E4] pb-9 lg:grid-cols-[1fr_.75fr] lg:items-end">
//             <div>
//               <p className="sg-hamp-reveal text-[10px] font-black uppercase tracking-[.22em] text-[#6055A6]">
//                 03 / The approach
//               </p>
//               <h2 className="sg-hamp-reveal sg-hamp-d1 mt-5 max-w-3xl text-[clamp(2.8rem,6vw,5.8rem)] font-black leading-[.88] tracking-[-.07em]">
//                 Less guesswork.
//                 <br />
//                 <span className="text-[#6055A6]">More clarity.</span>
//               </h2>
//             </div>

//             <p className="sg-hamp-reveal sg-hamp-d2 max-w-lg text-sm leading-7 text-[#77727F]">
//               Every pest problem is different. The right next step depends
//               on the evidence, the affected area and the conditions around
//               the property.
//             </p>
//           </div>

//           <div className="mt-10 grid gap-4 md:grid-cols-3">
//             {[
//               {
//                 icon: Target,
//                 number: "01",
//                 title: "Understand",
//                 text: "Look at the signs, affected areas and potential sources of activity.",
//               },
//               {
//                 icon: UserCheck,
//                 number: "02",
//                 title: "Address",
//                 text: "Consider appropriate control measures based on the pest and property.",
//               },
//               {
//                 icon: ShieldCheck,
//                 number: "03",
//                 title: "Prevent",
//                 text: "Identify practical changes that may help reduce future pest activity.",
//               },
//             ].map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <article
//                   key={item.number}
//                   className={`sg-hamp-reveal group min-h-[285px] p-7 sm:p-9 ${
//                     index === 1
//                       ? "bg-[#6055A6] text-white"
//                       : "bg-[#F4F2F7] text-[#19171D]"
//                   }`}
//                   style={{
//                     borderRadius:
//                       index === 0
//                         ? "48px 8px 48px 8px"
//                         : index === 1
//                         ? "8px 48px 8px 48px"
//                         : "8px 8px 48px 8px",
//                   }}
//                 >
//                   <div className="flex items-center justify-between">
//                     <span
//                       className={`text-5xl font-black tracking-[-.08em] ${
//                         index === 1
//                           ? "text-white/30"
//                           : "text-[#6055A6]/25"
//                       }`}
//                     >
//                       {item.number}
//                     </span>

//                     <span
//                       className={`flex h-12 w-12 items-center justify-center rounded-full ${
//                         index === 1 ? "bg-white/15" : "bg-white"
//                       }`}
//                     >
//                       <Icon
//                         size={21}
//                         className={
//                           index === 1 ? "text-white" : "text-[#6055A6]"
//                         }
//                       />
//                     </span>
//                   </div>

//                   <h3 className="mt-12 text-2xl font-black tracking-[-.04em]">
//                     {item.title}
//                   </h3>

//                   <p
//                     className={`mt-3 max-w-sm text-sm leading-6 ${
//                       index === 1 ? "text-white/70" : "text-[#77727F]"
//                     }`}
//                   >
//                     {item.text}
//                   </p>
//                 </article>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* SERVICES: irregular image shapes, no conventional square cards */}
//       <section className="relative overflow-hidden bg-[#6055A6] px-5 py-20 text-white sm:px-8 sm:py-28">
//         <div className="pointer-events-none absolute -right-28 top-20 h-80 w-80 rounded-full border border-white/10" />

//         <div className="relative mx-auto max-w-[1320px]">
//           <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
//             <div>
//               <p className="sg-hamp-reveal text-[10px] font-black uppercase tracking-[.22em] text-white/60">
//                 04 / Pest control services
//               </p>

//               <h2 className="sg-hamp-reveal sg-hamp-d1 mt-5 max-w-xl text-[clamp(2.9rem,5.5vw,5.5rem)] font-black leading-[.88] tracking-[-.07em]">
//                 Different pests.
//                 <br />
//                 <span className="text-white/50">Considered solutions.</span>
//               </h2>
//             </div>

//             <p className="sg-hamp-reveal sg-hamp-d2 max-w-lg pb-2 text-sm leading-7 text-white/70">
//               Explore some of the pest problems we can help you discuss.
//               The appropriate service will depend on the pest, the property
//               and the circumstances.
//             </p>
//           </div>

//           <div className="mt-12 grid gap-x-6 gap-y-12 lg:grid-cols-3">
//             {services.map((service, index) => {
//               const Icon = service.icon;

//               return (
//                 <Link
//                   key={service.number}
//                   to="/contact-us"
//                   aria-label={`Enquire about ${service.title}`}
//                   className="sg-hamp-reveal group flex min-w-0 flex-col"
//                 >
//                   <div
//                     className={`sg-hamp-image-frame relative h-[290px] overflow-hidden sm:h-[360px] ${
//                       index === 0
//                         ? "sg-hamp-frame-one"
//                         : index === 1
//                         ? "sg-hamp-oval"
//                         : "sg-hamp-frame-three"
//                     }`}
//                   >
//                     <img
//                       src={service.image}
//                       alt={service.title}
//                       className="sg-hamp-image h-full w-full object-cover"
//                     />

//                     <div className="absolute inset-0 bg-gradient-to-t from-[#19171D]/65 via-transparent to-[#19171D]/10" />

//                     <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-[#19171D]/65 px-3 py-2 text-[8px] font-black uppercase tracking-[.15em] text-white backdrop-blur-sm">
//                       {service.eyebrow}
//                     </span>

//                     <span className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#6055A6] transition group-hover:bg-[#19171D] group-hover:text-white">
//                       <ArrowUpRight size={18} />
//                     </span>
//                   </div>

//                   <div className="mt-6 flex items-center gap-3 text-white/60">
//                     <Icon size={17} />
//                     <span className="text-[9px] font-black uppercase tracking-[.18em]">
//                       Service {service.number}
//                     </span>
//                   </div>

//                   <h3 className="mt-3 text-3xl font-black tracking-[-.055em] sm:text-4xl">
//                     {service.title}
//                   </h3>

//                   <p className="mt-4 text-sm leading-7 text-white/70">
//                     {service.description}
//                   </p>

//                   <div className="mt-5 space-y-3 border-t border-white/20 pt-5">
//                     {service.points.map((point) => (
//                       <div
//                         key={point}
//                         className="flex items-start gap-3 text-xs leading-5 text-white/80"
//                       >
//                         <Check
//                           size={14}
//                           className="mt-0.5 shrink-0 text-[#D0C9F2]"
//                         />
//                         {point}
//                       </div>
//                     ))}
//                   </div>

//                   <div className="mt-6 flex items-center justify-between border-t border-white/20 pt-5 text-[9px] font-black uppercase tracking-[.15em]">
//                     <span>Enquire about this service</span>
//                     <ArrowRight
//                       size={16}
//                       className="transition-transform group-hover:translate-x-1"
//                     />
//                   </div>
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* PROCESS: dark editorial timeline */}
//       <section className="bg-[#19171D] px-5 py-20 text-white sm:px-8 sm:py-28">
//         <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[.72fr_1.28fr]">
//           <div>
//             <p className="sg-hamp-reveal text-[10px] font-black uppercase tracking-[.22em] text-[#A8A1D5]">
//               05 / How it works
//             </p>

//             <h2 className="sg-hamp-reveal sg-hamp-d1 mt-5 text-[clamp(2.8rem,5.4vw,5.3rem)] font-black leading-[.88] tracking-[-.07em]">
//               Straightforward
//               <br />
//               <span className="text-white/40">from the start.</span>
//             </h2>

//             <p className="sg-hamp-reveal sg-hamp-d2 mt-6 max-w-sm text-sm leading-7 text-white/55">
//               Start with a conversation about what you have noticed and
//               explore a suitable next step for your property.
//             </p>

//             <a
//               href={`tel:${LOCAL.phoneTel}`}
//               className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/25 px-5 py-4 text-[10px] font-black uppercase tracking-[.13em] transition hover:bg-[#6055A6]"
//             >
//               <Phone size={14} />
//               {LOCAL.phoneDisplay}
//             </a>
//           </div>

//           <div className="border-t border-white/15">
//             {processSteps.map((step) => (
//               <div
//                 key={step.number}
//                 className="sg-hamp-reveal grid gap-4 border-b border-white/15 py-7 sm:grid-cols-[64px_1fr_auto] sm:items-center"
//               >
//                 <span className="text-2xl font-black text-[#A8A1D5]/60">
//                   {step.number}
//                 </span>

//                 <div>
//                   <h3 className="text-lg font-black tracking-[-.025em] sm:text-xl">
//                     {step.title}
//                   </h3>
//                   <p className="mt-2 max-w-2xl text-sm leading-6 text-white/50">
//                     {step.text}
//                   </p>
//                 </div>

//                 <ArrowRight
//                   size={17}
//                   className="hidden text-white/40 sm:block"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* PROPERTY CARE: broad image panel with contrasting text */}
//       <section className="bg-white px-5 py-20 sm:px-8 sm:py-28">
//         <div className="mx-auto grid max-w-[1320px] overflow-hidden rounded-[32px] bg-[#19171D] lg:grid-cols-[.9fr_1.1fr]">
//           <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
//             <div>
//               <p className="sg-hamp-reveal text-[10px] font-black uppercase tracking-[.22em] text-[#A8A1D5]">
//                 06 / A property-conscious approach
//               </p>

//               <h2 className="sg-hamp-reveal sg-hamp-d1 mt-6 text-[clamp(2.7rem,4.9vw,5rem)] font-black leading-[.9] tracking-[-.065em] text-white">
//                 Protect the place you{" "}
//                 <span className="text-[#A8A1D5]">call home.</span>
//               </h2>

//               <p className="sg-hamp-reveal sg-hamp-d2 mt-6 max-w-md text-sm leading-7 text-white/55">
//                 Effective pest management starts with understanding the
//                 setting. Consider the affected areas, possible access
//                 points and practical ways to address the issue.
//               </p>
//             </div>

//             <div className="mt-10 grid gap-4 border-t border-white/15 pt-6 sm:grid-cols-3">
//               {[
//                 "Respect for your property",
//                 "Clear communication",
//                 "Focused control",
//               ].map((item) => (
//                 <div
//                   key={item}
//                   className="flex items-start gap-2 text-xs leading-5 text-white/65"
//                 >
//                   <Check
//                     size={14}
//                     className="mt-0.5 shrink-0 text-[#A8A1D5]"
//                   />
//                   {item}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="sg-hamp-image-frame relative min-h-[360px] overflow-hidden sm:min-h-[520px]">
//             <img
//               src="/images/mission-superguard.webp"
//               alt="SuperGuard pest control service"
//               className="sg-hamp-image absolute inset-0 h-full w-full object-cover"
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-[#19171D]/65 via-transparent to-[#19171D]/10" />

//             <div className="absolute bottom-6 left-6 max-w-[280px] border-l-2 border-[#A8A1D5] bg-[#19171D]/80 px-5 py-4 backdrop-blur-md sm:bottom-9 sm:left-9">
//               <p className="text-[8px] font-black uppercase tracking-[.2em] text-white/50">
//                 Local service
//               </p>
//               <p className="mt-2 text-lg font-black text-white">
//                 Hampstead & nearby
//               </p>
//               <p className="mt-1 text-xs text-white/60">
//                 Professional pest control
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* LOCAL AREA: asymmetrical information layout */}
//       <section className="bg-[#EAE7F0] px-5 py-20 sm:px-8 sm:py-28">
//         <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
//           <div className="sg-hamp-grid-lines relative overflow-hidden bg-[#19171D] p-7 text-white sm:p-10 lg:p-12">
//             <div className="relative flex min-h-[380px] flex-col justify-between sm:min-h-[430px]">
//               <div>
//                 <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[.2em] text-white/55">
//                   <MapPin size={16} className="text-[#A8A1D5]" />
//                   Local service area
//                 </div>

//                 <h2 className="mt-9 text-[clamp(3.5rem,8vw,7rem)] font-black leading-[.8] tracking-[-.08em]">
//                   Hampstead
//                   <span className="text-[#A8A1D5]">.</span>
//                 </h2>

//                 <p className="mt-5 text-sm font-bold uppercase tracking-[.18em] text-white/40">
//                   London / NW3
//                 </p>
//               </div>

//               <div className="mt-12 grid grid-cols-2 border-t border-white/15">
//                 {[
//                   "Hampstead",
//                   "NW3 5UN",
//                   "Nearby areas",
//                   "Homes & businesses",
//                 ].map((item) => (
//                   <div
//                     key={item}
//                     className="border-b border-white/10 py-4 text-xs font-semibold text-white/60"
//                   >
//                     {item}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div>
//             <p className="sg-hamp-reveal text-[10px] font-black uppercase tracking-[.22em] text-[#6055A6]">
//               07 / Find your local team
//             </p>

//             <h2 className="sg-hamp-reveal sg-hamp-d1 mt-5 max-w-xl text-[clamp(2.8rem,5.3vw,5.2rem)] font-black leading-[.9] tracking-[-.065em]">
//               A local point of{" "}
//               <span className="text-[#6055A6]">contact.</span>
//             </h2>

//             <p className="sg-hamp-reveal sg-hamp-d2 mt-6 max-w-xl text-sm leading-7 text-[#77727F] sm:text-base">
//               Contact SuperGuard Hampstead to discuss pest problems
//               affecting your home or business in Hampstead and nearby areas.
//             </p>

//             <div className="mt-8 border-y border-[#D5D1DC]">
//               <div className="flex gap-4 border-b border-[#D5D1DC] py-6">
//                 <MapPin
//                   size={19}
//                   className="mt-1 shrink-0 text-[#6055A6]"
//                 />

//                 <div className="min-w-0">
//                   <p className="text-[8px] font-black uppercase tracking-[.18em] text-[#AAA6B2]">
//                     Address
//                   </p>

//                   <p className="mt-2 text-sm font-bold leading-6 text-[#302C36]">
//                     {LOCAL.fullAddress}
//                   </p>

//                   <a
//                     href="https://www.google.com/maps/search/?api=1&query=12+Vane+Cl%2C+London+NW3+5UN"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="mt-3 inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-[.12em] text-[#6055A6] hover:underline"
//                   >
//                     View directions
//                     <ArrowUpRight size={13} />
//                   </a>
//                 </div>
//               </div>

//               <div className="flex gap-4 py-6">
//                 <Phone
//                   size={19}
//                   className="mt-1 shrink-0 text-[#6055A6]"
//                 />

//                 <div>
//                   <p className="text-[8px] font-black uppercase tracking-[.18em] text-[#AAA6B2]">
//                     Phone
//                   </p>

//                   <a
//                     href={`tel:${LOCAL.phoneTel}`}
//                     className="mt-2 block text-sm font-bold text-[#302C36] transition hover:text-[#6055A6]"
//                   >
//                     {LOCAL.phoneDisplay}
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <Link
//               to="/contact-us"
//               className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#19171D] px-6 py-4 text-[10px] font-black uppercase tracking-[.12em] text-white transition hover:bg-[#6055A6]"
//             >
//               Contact SuperGuard
//               <ArrowUpRight size={15} />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* SERVICE PRINCIPLES */}
//       <section className="bg-white px-5 py-20 sm:px-8 sm:py-28">
//         <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[.7fr_1.3fr]">
//           <div>
//             <p className="sg-hamp-reveal text-[10px] font-black uppercase tracking-[.22em] text-[#6055A6]">
//               08 / What matters
//             </p>

//             <h2 className="sg-hamp-reveal sg-hamp-d1 mt-5 text-[clamp(2.8rem,5.3vw,5.1rem)] font-black leading-[.88] tracking-[-.07em]">
//               Thoughtful
//               <br />
//               <span className="text-[#6055A6]">service.</span>
//             </h2>
//           </div>

//           <div className="grid gap-5 border-t border-[#DDD9E4] sm:grid-cols-3 sm:border-t-0">
//             {[
//               {
//                 icon: Clock3,
//                 title: "Clear communication",
//                 text: "Explain what you have noticed and discuss the next practical step.",
//               },
//               {
//                 icon: ShieldCheck,
//                 title: "Professional approach",
//                 text: "Consider the actual pest problem and the circumstances of the property.",
//               },
//               {
//                 icon: Sparkles,
//                 title: "Practical guidance",
//                 text: "Understand the options and prevention measures relevant to your situation.",
//               },
//             ].map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <div
//                   key={item.title}
//                   className={`sg-hamp-reveal border-b border-[#DDD9E4] py-6 sm:border-b-0 sm:border-l sm:px-6 ${
//                     index === 0 ? "sm:pl-0" : ""
//                   }`}
//                 >
//                   <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EAE7F0]">
//                     <Icon size={21} className="text-[#6055A6]" />
//                   </span>

//                   <h3 className="mt-7 text-lg font-black tracking-[-.03em]">
//                     {item.title}
//                   </h3>

//                   <p className="mt-3 text-sm leading-6 text-[#77727F]">
//                     {item.text}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* FAQ: interactive accordion */}
//       <section className="bg-[#EAE7F0] px-5 py-20 sm:px-8 sm:py-28">
//         <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[.7fr_1.3fr]">
//           <div>
//             <p className="sg-hamp-reveal text-[10px] font-black uppercase tracking-[.22em] text-[#6055A6]">
//               09 / Common questions
//             </p>

//             <h2 className="sg-hamp-reveal sg-hamp-d1 mt-5 text-[clamp(2.8rem,5.3vw,5rem)] font-black leading-[.88] tracking-[-.07em]">
//               Before
//               <br />
//               <span className="text-[#6055A6]">you call.</span>
//             </h2>

//             <p className="sg-hamp-reveal sg-hamp-d2 mt-6 max-w-xs text-sm leading-7 text-[#77727F]">
//               Straightforward answers to common questions about our local
//               pest-control service.
//             </p>
//           </div>

//           <div className="border-t border-[#D5D1DC]">
//             {faqs.map((faq, index) => {
//               const isOpen = openFaq === index;

//               return (
//                 <div key={faq.question} className="border-b border-[#D5D1DC]">
//                   <button
//                     type="button"
//                     onClick={() => setOpenFaq(isOpen ? -1 : index)}
//                     aria-expanded={isOpen}
//                     className="flex w-full items-center justify-between gap-5 py-6 text-left"
//                   >
//                     <span className="flex gap-4 text-sm font-black text-[#19171D] sm:text-base">
//                       <span className="mt-0.5 text-[9px] font-black text-[#6055A6]">
//                         0{index + 1}
//                       </span>
//                       {faq.question}
//                     </span>

//                     <span
//                       className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
//                         isOpen
//                           ? "bg-[#6055A6] text-white"
//                           : "border border-[#D5D1DC] text-[#6055A6]"
//                       }`}
//                     >
//                       <ChevronDown
//                         size={15}
//                         className={`transition-transform duration-300 ${
//                           isOpen ? "rotate-180" : ""
//                         }`}
//                       />
//                     </span>
//                   </button>

//                   <div
//                     className={`sg-hamp-faq-panel ${
//                       isOpen ? "is-open" : ""
//                     }`}
//                   >
//                     <div className="sg-hamp-faq-inner">
//                       <p className="max-w-2xl pb-6 pl-8 text-sm leading-7 text-[#77727F]">
//                         {faq.answer}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* FINAL CTA — no separate site footer */}
//       <section className="bg-[#19171D] px-5 py-16 text-white sm:px-8 sm:py-24">
//         <div className="mx-auto max-w-[1320px]">
//           <div className="relative overflow-hidden rounded-[30px] bg-[#6055A6] p-7 sm:p-10 lg:p-14">
//             <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border border-white/15" />

//             <div className="pointer-events-none absolute -right-8 -top-16 h-56 w-56 rounded-full border border-white/10" />

//             <div className="relative grid gap-10 lg:grid-cols-[1fr_300px] lg:items-end">
//               <div>
//                 <p className="sg-hamp-reveal text-[10px] font-black uppercase tracking-[.22em] text-white/60">
//                   10 / Take the next step
//                 </p>

//                 <h2 className="sg-hamp-reveal sg-hamp-d1 mt-5 max-w-4xl text-[clamp(2.8rem,6vw,6rem)] font-black leading-[.87] tracking-[-.075em]">
//                   Don't leave a pest problem{" "}
//                   <span className="text-white/50">unaddressed.</span>
//                 </h2>

//                 <p className="sg-hamp-reveal sg-hamp-d2 mt-6 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
//                   Speak to SuperGuard Hampstead about your pest-control
//                   concerns and find out what to do next.
//                 </p>
//               </div>

//               <div className="flex flex-col gap-3">
//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="flex items-center justify-between gap-4 rounded-2xl bg-[#19171D] px-5 py-5 transition hover:bg-white hover:text-[#19171D]"
//                 >
//                   <span>
//                     <span className="block text-[8px] font-black uppercase tracking-[.18em] opacity-55">
//                       Call SuperGuard
//                     </span>
//                     <span className="mt-2 block text-lg font-black">
//                       {LOCAL.phoneDisplay}
//                     </span>
//                   </span>

//                   <ArrowUpRight size={21} />
//                 </a>

//                 <Link
//                   to="/contact-us"
//                   className="flex items-center justify-between gap-4 rounded-2xl border border-white/35 px-5 py-5 text-xs font-black uppercase tracking-[.12em] transition hover:bg-white hover:text-[#6055A6]"
//                 >
//                   Contact our team
//                   <ArrowRight size={17} />
//                 </Link>
//               </div>
//             </div>

//             <div className="relative mt-10 flex flex-col gap-4 border-t border-white/20 pt-6 sm:flex-row sm:items-end sm:justify-between">
//               <div>
//                 <p className="text-[9px] font-black uppercase tracking-[.18em] text-white/55">
//                   {LOCAL.company}
//                 </p>

//                 <p className="mt-2 flex items-start gap-2 text-xs leading-5 text-white/70">
//                   <MapPin size={14} className="mt-0.5 shrink-0" />
//                   {LOCAL.fullAddress}
//                 </p>
//               </div>

//               <span className="text-[9px] font-bold uppercase tracking-[.14em] text-white/50">
//                 Hampstead & nearby areas
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }





// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import {
//   ArrowDownRight,
//   ArrowRight,
//   ArrowUpRight,
//   Bug,
//   Check,
//   ChevronDown,
//   Clock3,
//   Home,
//   MapPin,
//   Phone,
//   ShieldCheck,
//   Sparkles,
//   Target,
//   UserCheck,
// } from "lucide-react";

// const LOCAL = {
//   company: "SuperGuard Hampstead Pest Control Services",
//   shortName: "SuperGuard Hampstead",
//   area: "Hampstead",
//   city: "London",
//   postcode: "NW3 5UN",
//   streetAddress: "12 Vane Cl",
//   fullAddress: "12 Vane Cl, London NW3 5UN, United Kingdom",
//   phoneDisplay: "+44 7466 966471",
//   phoneTel: "+447466966471",
// };

// const API_URL =
//   "https://superguard-woolwich-backend.vercel.app/api/callback";

// const services = [
//   {
//     number: "01",
//     title: "Rats & Mice",
//     eyebrow: "Rodent management",
//     image: "/images/rodents.webp",
//     icon: Bug,
//     description:
//       "Identify signs of rodent activity, investigate potential entry points and find a suitable approach for your home or business.",
//     points: ["Inspection of activity", "Targeted control measures", "Entry-point advice"],
//   },
//   {
//     number: "02",
//     title: "Bed Bugs",
//     eyebrow: "Careful inspection",
//     image: "/images/bedbugs.webp",
//     icon: Home,
//     description:
//       "A considered response to suspected bed bug activity, with attention to affected rooms, potential hiding places and appropriate treatment.",
//     points: ["Inspection of affected areas", "Appropriate treatment planning", "Practical preparation advice"],
//   },
//   {
//     number: "03",
//     title: "Wasps",
//     eyebrow: "Nest assessment",
//     image: "/images/wasps.webp",
//     icon: ShieldCheck,
//     description:
//       "Professional assistance with wasp activity around roof spaces, gardens, property boundaries and other potentially affected areas.",
//     points: ["Nest location assessment", "Professional treatment options", "Safety-conscious approach"],
//   },
// ];

// const faqs = [
//   {
//     question: "Do you cover Hampstead and nearby areas?",
//     answer: "SuperGuard Hampstead provides pest-control services in Hampstead and nearby areas. Contact us with your postcode to check whether your property is within our service area.",
//   },
//   {
//     question: "What information should I provide when calling?",
//     answer: "Tell us what you have noticed, where the activity is occurring and how long you have been experiencing the problem. Your postcode and contact number will also help us understand your enquiry.",
//   },
//   {
//     question: "What if I cannot identify the pest?",
//     answer: "You do not need to identify it yourself. Describe the signs you have seen, such as droppings, scratching sounds, insect activity or a nest, and we can discuss the appropriate next step.",
//   },
//   {
//     question: "How does professional pest control work?",
//     answer: "The approach depends on the pest and the property. It may involve inspecting signs of activity, identifying potential access points, choosing appropriate control measures and providing practical prevention advice.",
//   },
// ];

// const processSteps = [
//   { number: "01", title: "Tell us what you've noticed", text: "Describe the signs, the affected area and any concerns about your property." },
//   { number: "02", title: "Understand the problem", text: "Assess the available information and identify the appropriate next steps." },
//   { number: "03", title: "Choose a suitable response", text: "Focus on targeted control measures suited to the pest and circumstances." },
//   { number: "04", title: "Consider prevention", text: "Review practical steps that may help reduce the likelihood of recurring activity." },
// ];

// export default function HomePage() {
//   const [formData, setFormData] = useState({ name: "", postcode: "", phone: "" });
//   const [loading, setLoading] = useState(false);
//   const [openFaq, setOpenFaq] = useState(0);
//   const [activeService, setActiveService] = useState(0);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((p) => ({...p, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.phone.trim()) {
//       toast.error("Please enter your phone number.");
//       return;
//     }
//     setLoading(true);
//     try {
//       await toast.promise(
//         axios.post(API_URL, {...formData, area: LOCAL.area, business: LOCAL.company, address: LOCAL.fullAddress }),
//         {
//           loading: "Sending your callback request...",
//           success: "Thanks — we'll be in touch shortly.",
//           error: (error) => error?.response?.data?.message || "Something went wrong. Please try again.",
//         }
//       );
//       setFormData({ name: "", postcode: "", phone: "" });
//     } catch {} finally { setLoading(false); }
//   };

//   return (
//     <main className="min-h-screen bg-[#F4F2F7] text-[#19171D] selection:bg-[#6055A6] selection:text-white">
//       <Toaster position="top-center" />
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');
//        .font-display { font-family: 'Syne', sans-serif; }
//        .marquee-track { animation: marquee 28s linear infinite; }
//         @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
//        .thick-border { border: 2.5px solid #19171D; }
//        .hover-shift:hover { transform: translate(-4px, -4px); box-shadow: 8px 8px 0px #19171D; }
//        .hover-shift { transition: all.25s cubic-bezier(.2,.7,.2,1); }
//       `}</style>

//       {/* TOP BAR */}
//       <div className="sticky top-0 z-50 flex h- items-center justify-between border-b-[2.5px] border-[#19171D] bg-[#F4F2F7] px-5 sm:px-8">
//         <div className="flex items-center gap-4">
//           <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#19171D] text-white"><ShieldCheck size={18} /></div>
//           <p className="font-display text- font-extrabold uppercase tracking-tight leading-none">SUPERGUARD<br/><span className="text- tracking-[0.2em] text-[#6055A6]">HAMPSTEAD / NW3 5UN</span></p>
//         </div>
//         <div className="hidden items-center gap-3 sm:flex">
//           <span className="text- font-bold uppercase tracking-widest opacity-50">{LOCAL.fullAddress}</span>
//           <a href={`tel:${LOCAL.phoneTel}`} className="thick-border rounded-full bg-[#6055A6] px-5 py-2.5 text- font-black uppercase tracking-widest text-white hover:bg-[#19171D]">Call {LOCAL.phoneDisplay}</a>
//         </div>
//         <a href={`tel:${LOCAL.phoneTel}`} className="sm:hidden thick-border rounded-full bg-[#19171D] p-2.5 text-white"><Phone size={14} /></a>
//       </div>

//       {/* HERO - MASSIVE TYPO + SPLIT */}
//       <section className="relative grid grid-cols-12 border-b-[2.5px] border-[#19171D]">
//         <div className="col-span-12 lg:col-span-7 border-b-[2.5px] lg:border-b-0 lg:border-r-[2.5px] border-[#19171D] p-6 sm:p-10 lg:p-12">
//           <div className="flex items-center gap-2">
//             <span className="h-2 w-2 animate-pulse rounded-full bg-[#6055A6]" />
//             <p className="text- font-black uppercase tracking-[0.25em]">Available today in Hampstead</p>
//           </div>
//           <h1 className="font-display mt-8 text- lg:text-[9.5vw] font-[800] leading-[0.8] tracking-[-0.07em]">
//             NO<br/>PESTS<br/><span className="text-[#6055A6]">JUST</span><br/>PEACE.
//           </h1>
//           <div className="mt-10 grid grid-cols-[auto_1fr] gap-6">
//             <div className="thick-border flex h-fit items-center gap-2 rounded-full bg-white px-4 py-2 text- font-black uppercase"><MapPin size={12}/> {LOCAL.area}</div>
//             <p className="max-w- text- leading-6 text-[#555]">Professional pest control for homes and businesses. We inspect, identify, and act — no guesswork, no chemicals talk, just a clear plan for your property.</p>
//           </div>
//         </div>

//         <div className="col-span-12 lg:col-span-5 relative flex flex-col">
//           <div className="relative h- lg:h-full min-h- overflow-hidden bg-[#6055A6]">
//             <img src="/images/superguard-hero.webp" className="h-full w-full object-cover grayscale mix-blend-luminosity opacity-80" alt="hero" />
//             <div className="absolute inset-0 bg-[#6055A6]/60 mix-blend-multiply" />
//             <div className="absolute bottom-0 left-0 right-0 p-6">
//               <div className="thick-border bg-[#19171D] p-6 text-white">
//                 <p className="text- font-black uppercase tracking-[0.2em] text-[#A8A1D5]">Request a callback — 30 sec</p>
//                 <form onSubmit={handleSubmit} className="mt-5 space-y-4">
//                   <div className="grid grid-cols-2 gap-3">
//                     <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="thick-border h-12 bg-white px-4 text-sm font-bold text-[#19171D] outline-none placeholder:text-[#999]" />
//                     <input name="postcode" value={formData.postcode} onChange={handleChange} placeholder="NW3" className="thick-border h-12 bg-white px-4 text-sm font-bold uppercase outline-none" />
//                   </div>
//                   <input name="phone" value={formData.phone} onChange={handleChange} required placeholder="Phone number *" className="thick-border h-12 w-full bg-white px-4 text-sm font-bold outline-none" />
//                   <button disabled={loading} className="thick-border flex w-full items-center justify-between bg-[#6055A6] px-5 py-4 text- font-black uppercase tracking-widest text-white hover:bg-white hover:text-[#19171D]">
//                     {loading? "Sending..." : "Get callback now"} <ArrowRight size={16}/>
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* MARQUEE */}
//       <div className="flex h- items-center overflow-hidden border-b-[2.5px] border-[#19171D] bg-[#19171D] text-white">
//         <div className="marquee-track flex w-max shrink-0 items-center gap-8 whitespace-nowrap font-display text- font-bold uppercase tracking-widest">
//           {Array.from({length: 10}).map((_,i)=>(
//             <span key={i} className="flex items-center gap-8">RATS & MICE • BED BUGS • WASPS • INSPECTION-LED • NO GUESSWORK • HAMPSTEAD NW3 • <span className="text-[#A8A1D5]">SUPERGUARD</span> •</span>
//           ))}
//         </div>
//       </div>

//       {/* SERVICES - NEW INTERACTION */}
//       <section className="grid grid-cols-12 border-b-[2.5px] border-[#19171D]">
//         <div className="col-span-12 lg:col-span-4 border-b-[2.5px] lg:border-b-0 lg:border-r-[2.5px] border-[#19171D] p-6 sm:p-10">
//           <p className="text- font-black uppercase tracking-[0.25em] text-[#6055A6]">(04) Services</p>
//           <h2 className="font-display mt-6 text- leading-[0.9] tracking-[-0.05em]">One pest.<br/>One proper<br/>plan.</h2>
//           <div className="mt-8 space-y-2">
//             {services.map((s,i)=>(
//               <button key={s.number} onClick={()=>setActiveService(i)} className={`thick-border flex w-full items-center justify-between p-5 text-left transition ${activeService===i? 'bg-[#19171D] text-white' : 'bg-white hover:bg-[#EAE7F0]'}`}>
//                 <div><p className="text- font-black opacity-60">{s.number} / {s.eyebrow}</p><p className="font-display mt-1 text- font-bold tracking-tight">{s.title}</p></div>
//                 <ArrowUpRight className={activeService===i? 'text-white' : 'text-[#6055A6]'} />
//               </button>
//             ))}
//           </div>
//         </div>
//         <div className="col-span-12 lg:col-span-8 relative bg-white p-6 sm:p-10 lg:p-12">
//           <div className="thick-border relative grid h-full grid-cols-1 overflow-hidden bg-[#F4F2F7] lg:grid-cols-[1.2fr_0.8fr]">
//             <div className="relative h- lg:h-auto">
//               <img src={services[activeService].image} className="absolute inset-0 h-full w-full object-cover" alt={services[activeService].title} />
//               <div className="absolute left-4 top-4 thick-border bg-white px-3 py-2 text- font-black uppercase">{services[activeService].eyebrow}</div>
//             </div>
//             <div className="flex flex-col justify-between p-8">
//               <div>
//                 <p className="font-display text- leading-none tracking-[-0.06em] text-[#6055A6]/20">{services[activeService].number}</p>
//                 <h3 className="font-display mt-2 text- leading-[0.9] tracking-tight">{services[activeService].title}</h3>
//                 <p className="mt-4 text- leading-6 text-[#666]">{services[activeService].description}</p>
//                 <ul className="mt-6 space-y-3">
//                   {services[activeService].points.map(p=>(
//                     <li key={p} className="flex gap-2 text- font-bold uppercase tracking-wide"><Check size={14} className="mt-0.5 text-[#6055A6]"/> {p}</li>
//                   ))}
//                 </ul>
//               </div>
//               <Link to="/contact-us" className="thick-border hover-shift mt-8 flex items-center justify-between bg-[#19171D] px-5 py-4 text- font-black uppercase tracking-widest text-white">
//                 Enquire about this <ArrowRight size={16}/>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* PROCESS */}
//       <section className="bg-[#EAE7F0] p-6 sm:p-10 lg:p-12 border-b-[2.5px] border-[#19171D]">
//         <div className="thick-border bg-white grid lg:grid-cols-4">
//           <div className="p-8 lg:border-r-[2.5px] border-[#19171D] lg:col-span-1">
//             <p className="text- font-black uppercase tracking-[0.25em]">How it works</p>
//             <h2 className="font-display mt-4 text- leading-[0.9]">Straight.<br/>Simple.<br/><span className="text-[#6055A6]">Sorted.</span></h2>
//           </div>
//           {processSteps.map(s=>(
//             <div key={s.number} className="border-t-[2.5px] lg:border-t-0 lg:border-r-[2.5px] last:border-r-0 border-[#19171D] p-8">
//               <p className="font-display text- leading-none text-[#6055A6]/15">{s.number}</p>
//               <h3 className="mt-4 font-display text- font-bold leading-tight">{s.title}</h3>
//               <p className="mt-2 text- leading-5 text-[#777]">{s.text}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ABOUT - BENTO */}
//       <section className="grid grid-cols-12 border-b-[2.5px] border-[#19171D]">
//         <div className="col-span-12 lg:col-span-7 p-6 sm:p-10 lg:p-12">
//           <div className="thick-border overflow-hidden">
//             <img src="/images/about-superguard.webp" className="h- w-full object-cover" alt="about" />
//             <div className="grid grid-cols-3 divide-x-[2.5px] divide-[#19171D] border-t-[2.5px] border-[#19171D]">
//               <div className="bg-[#6055A6] p-5 text-white"><p className="text- uppercase font-black tracking-widest">Location</p><p className="mt-2 font-display text-">Hampstead NW3</p></div>
//               <div className="bg-white p-5"><p className="text- uppercase font-black tracking-widest">Focus</p><p className="mt-2 font-display text-">Homes & Business</p></div>
//               <div className="bg-[#19171D] p-5 text-white"><p className="text- uppercase font-black tracking-widest text-[#A8A1D5]">Approach</p><p className="mt-2 font-display text-">Inspection-led</p></div>
//             </div>
//           </div>
//         </div>
//         <div className="col-span-12 lg:col-span-5 border-t-[2.5px] lg:border-t-0 lg:border-l-[2.5px] border-[#19171D] p-6 sm:p-10 lg:p-12 bg-white">
//           <h2 className="font-display text- leading-[0.9] tracking-[-0.04em]">Look beyond<br/>what's <span className="bg-[#6055A6] px-2 text-white">visible.</span></h2>
//           <p className="mt-6 text- leading-7 text-[#555]">SuperGuard Hampstead takes a practical approach. We don't spray and pray — we understand the situation, check the property, and discuss appropriate next steps.</p>
//           <div className="mt-8 grid grid-cols-2 gap-3">
//             {["Inspection-led", "Targeted measures", "Property-conscious", "Prevention advice"].map(t=>(
//               <div key={t} className="thick-border flex items-center gap-2 bg-[#F4F2F7] px-4 py-3 text- font-black uppercase"><div className="h-2 w-2 bg-[#6055A6] rounded-full"/>{t}</div>
//             ))}
//           </div>
//           <div className="mt-8 thick-border bg-[#19171D] p-1">
//             <img src="/images/mission-superguard.webp" className="h- w-full object-cover" alt="mission" />
//           </div>
//         </div>
//       </section>

//       {/* FAQ + CONTACT */}
//       <section className="grid grid-cols-12">
//         <div className="col-span-12 lg:col-span-7 border-b-[2.5px] lg:border-b-0 lg:border-r-[2.5px] border-[#19171D] p-6 sm:p-10">
//           <p className="text- font-black uppercase tracking-[0.25em]">FAQ</p>
//           <h2 className="font-display mt-4 text- leading-[0.9]">Before<br/>you call.</h2>
//           <div className="mt-8 border-t-[2.5px] border-[#19171D]">
//             {faqs.map((faq,i)=>{
//               const open = openFaq===i;
//               return (
//                 <div key={i} className="border-b-[2.5px] border-[#19171D]">
//                   <button onClick={()=>setOpenFaq(open? -1 : i)} className="flex w-full items-center justify-between gap-4 py-6 text-left">
//                     <span className="font-bold text-"><span className="mr-3 text-[#6055A6]">0{i+1}</span>{faq.question}</span>
//                     <span className={`thick-border flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${open? 'bg-[#19171D] text-white' : 'bg-white'}`}><ChevronDown size={14} className={open? 'rotate-180' : ''} /></span>
//                   </button>
//                   {open && <p className="pb-6 pr-12 text- leading-6 text-[#666]">{faq.answer}</p>}
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//         <div className="col-span-12 lg:col-span-5 bg-[#6055A6] p-6 sm:p-10 text-white flex flex-col justify-between">
//           <div>
//             <div className="thick-border inline-flex items-center gap-2 rounded-full border-white bg-[#19171D] px-4 py-2 text- font-black uppercase tracking-widest"><Sparkles size={12}/> Final step</div>
//             <h2 className="font-display mt-8 text- leading-[0.85] tracking-[-0.05em]">Don't leave it<br/>to chance.</h2>
//           </div>
//           <div className="mt-10 space-y-3">
//             <a href={`tel:${LOCAL.phoneTel}`} className="thick-border hover-shift flex items-center justify-between bg-white p-5 text-[#19171D]">
//               <span><span className="block text- font-black uppercase opacity-60">Call now</span><span className="font-display text- font-bold">{LOCAL.phoneDisplay}</span></span><Phone/>
//             </a>
//             <div className="thick-border bg-[#19171D] p-5">
//               <p className="text- uppercase font-black tracking-widest text-white/50">{LOCAL.company}</p>
//               <p className="mt-2 flex gap-2 text- leading-5"><MapPin size={14} className="mt-0.5 shrink-0 text-[#A8A1D5]"/>{LOCAL.fullAddress}</p>
//               <Link to="/contact-us" className="mt-4 flex items-center gap-2 text- font-black uppercase tracking-widest text-[#A8A1D5] hover:text-white">Get directions <ArrowUpRight size={14}/></Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }





















import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bug,
  Check,
  ChevronDown,
  Clock3,
  Home,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  UserCheck,
} from "lucide-react";

const LOCAL = {
  company: "SuperGuard Hampstead Pest Control Services",
  shortName: "SuperGuard Hampstead",
  area: "Hampstead",
  city: "London",
  postcode: "NW3 5UN",
  streetAddress: "12 Vane Cl",
  fullAddress: "12 Vane Cl, London NW3 5UN, United Kingdom",
  phoneDisplay: "+44 7466 966471",
  phoneTel: "+447466966471",
};

// ORIGINAL API ENDPOINT — unchanged
const API_URL =
  "https://superguard-hampstead-backend.vercel.app/api/callback";

const services = [
  {
    number: "01",
    title: "Rats & Mice",
    eyebrow: "Rodent management",
    image: "/images/rodents.webp",
    icon: Bug,
    description:
      "Identify signs of rodent activity, investigate potential entry points and find a suitable approach for your home or business.",
    points: [
      "Inspection of activity",
      "Targeted control measures",
      "Entry-point advice",
    ],
  },
  {
    number: "02",
    title: "Bed Bugs",
    eyebrow: "Careful inspection",
    image: "/images/bedbugs.webp",
    icon: Home,
    description:
      "A considered response to suspected bed bug activity, with attention to affected rooms, potential hiding places and appropriate treatment.",
    points: [
      "Inspection of affected areas",
      "Appropriate treatment planning",
      "Practical preparation advice",
    ],
  },
  {
    number: "03",
    title: "Wasps",
    eyebrow: "Nest assessment",
    image: "/images/wasps.webp",
    icon: ShieldCheck,
    description:
      "Professional assistance with wasp activity around roof spaces, gardens, property boundaries and other potentially affected areas.",
    points: [
      "Nest location assessment",
      "Professional treatment options",
      "Safety-conscious approach",
    ],
  },
];

const faqs = [
  {
    question: "Do you cover Hampstead and nearby areas?",
    answer:
      "SuperGuard Hampstead provides pest-control services in Hampstead and nearby areas. Contact us with your postcode to check whether your property is within our service area.",
  },
  {
    question: "What information should I provide when calling?",
    answer:
      "Tell us what you have noticed, where the activity is occurring and how long you have been experiencing the problem. Your postcode and contact number will also help us understand your enquiry.",
  },
  {
    question: "What if I cannot identify the pest?",
    answer:
      "You do not need to identify it yourself. Describe the signs you have seen, such as droppings, scratching sounds, insect activity or a nest, and we can discuss the appropriate next step.",
  },
  {
    question: "How does professional pest control work?",
    answer:
      "The approach depends on the pest and the property. It may involve inspecting signs of activity, identifying potential access points, choosing appropriate control measures and providing practical prevention advice.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Tell us what you've noticed",
    text: "Describe the signs, the affected area and any concerns about your property.",
  },
  {
    number: "02",
    title: "Understand the problem",
    text: "Assess the available information and identify the appropriate next steps.",
  },
  {
    number: "03",
    title: "Choose a suitable response",
    text: "Focus on targeted control measures suited to the pest and circumstances.",
  },
  {
    number: "04",
    title: "Consider prevention",
    text: "Review practical steps that may help reduce the likelihood of recurring activity.",
  },
];

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    postcode: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const elements = document.querySelectorAll(".sg-hamp-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) =>
        element.classList.add("sg-hamp-visible")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sg-hamp-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.phone.trim()) {
      toast.error("Please enter your phone number.");
      return;
    }

    setLoading(true);

    try {
      await toast.promise(
        axios.post(API_URL, {
          ...formData,
          area: LOCAL.area,
          business: LOCAL.company,
          address: LOCAL.fullAddress,
        }),
        {
          loading: "Sending your callback request...",
          success: "Thanks — we'll be in touch shortly.",
          error: (error) =>
            error?.response?.data?.message ||
            "Something went wrong. Please try again.",
        }
      );

      setFormData({
        name: "",
        postcode: "",
        phone: "",
      });
    } catch {
      // The toast displays the API error.
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="sg-hamp-page min-h-screen overflow-hidden bg-[#F4F2F7] text-[#19171D]">
      <Toaster position="top-center" />

      <style>{`
        .sg-hamp-page {
          --h-purple: #6055A6;
          --h-ink: #19171D;
          --h-paper: #F4F2F7;
          --h-lilac: #EAE7F0;
          --h-muted: #85808D;
        }

        .sg-hamp-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity .75s ease,
            transform .75s cubic-bezier(.22,.8,.25,1);
        }

        .sg-hamp-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .sg-hamp-d1 { transition-delay: .12s; }
        .sg-hamp-d2 { transition-delay: .22s; }
        .sg-hamp-d3 { transition-delay: .32s; }

        .sg-hamp-image {
          transition:
            transform 1s cubic-bezier(.22,.8,.25,1),
            filter .5s ease;
        }

        .sg-hamp-image-frame:hover .sg-hamp-image {
          transform: scale(1.06);
          filter: saturate(1.1);
        }

        /* New soft geometric shapes */
        .sg-hamp-soft-tl {
          border-radius: 64px 12px 12px 12px;
        }
        .sg-hamp-soft-tr {
          border-radius: 12px 64px 12px 12px;
        }
        .sg-hamp-soft-bl {
          border-radius: 12px 12px 12px 64px;
        }
        .sg-hamp-soft-br {
          border-radius: 12px 12px 64px 12px;
        }
        .sg-hamp-soft-all {
          border-radius: 28px;
        }
        .sg-hamp-soft-pill {
          border-radius: 999px;
        }

        .sg-hamp-faq-panel {
          display: grid;
          grid-template-rows: 0fr;
          opacity: 0;
          transition:
            grid-template-rows .35s ease,
            opacity .35s ease;
        }

        .sg-hamp-faq-panel.is-open {
          grid-template-rows: 1fr;
          opacity: 1;
        }

        .sg-hamp-faq-inner {
          overflow: hidden;
        }

        .sg-hamp-grid-lines {
          background-image:
            linear-gradient(to right, rgba(96,85,166,.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(96,85,166,.06) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .sg-hamp-diagonal {
          background: linear-gradient(
            135deg,
            #6055A6 0%,
            #6055A6 48%,
            #19171D 48%,
            #19171D 100%
          );
        }

        @media (prefers-reduced-motion: reduce) {
          .sg-hamp-reveal,
          .sg-hamp-image,
          .sg-hamp-faq-panel {
            transition: none;
          }

          .sg-hamp-reveal {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      {/* ========== HERO — full-width split with soft geometric image ========== */}
      <section className="relative overflow-hidden bg-[#6055A6] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(96,85,166,0.35),transparent_55%)]" />

        <div className="relative mx-auto max-w-7xl px-5 pt-8 pb-20 sm:px-8 lg:px-12 lg:pt-10 lg:pb-28">
          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-white/15 pb-6">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#6055A6]">
                <ShieldCheck size={22} />
              </span>
              <div>
                <p className="text-xs font-black uppercase tracking-[.18em]">
                  SuperGuard
                </p>
                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[.16em] text-white/50">
                  Hampstead Pest Control
                </p>
              </div>
            </div>
            <span className="hidden text-xs font-bold uppercase tracking-[.15em] text-white/50 sm:block">
              London · NW3
            </span>
          </div>

          <div className="mt-12 grid items-center gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-8">
            {/* Left content */}
            <div className="lg:col-span-5">
              <p className="sg-hamp-reveal flex items-center gap-3 text-[11px] font-black uppercase tracking-[.22em] text-[#A8A1D5]">
                <span className="h-px w-10 bg-[#A8A1D5]/60" />
                A considered approach to pest control
              </p>

              <h1 className="sg-hamp-reveal sg-hamp-d1 mt-6 text-[clamp(2.8rem,5.5vw,4.8rem)] font-black leading-[0.92] tracking-[-.06em]">
                Your space.
                <br />
                <span className="text-white/40">Without</span>
                <br />
                unwanted
                <br />
                visitors.
              </h1>

              <p className="sg-hamp-reveal sg-hamp-d2 mt-6 max-w-md text-sm leading-7 text-white/65 sm:text-[15px] sm:leading-8">
                Professional pest control for homes and properties in
                Hampstead and nearby areas. Understand the problem,
                explore the right response and take a considered next step.
              </p>

              <div className="sg-hamp-reveal sg-hamp-d3 mt-8 flex flex-wrap gap-3">
                <a
                  href={`tel:${LOCAL.phoneTel}`}
                  className="inline-flex items-center gap-3 rounded-2xl bg-[#6055A6] px-6 py-4 text-xs font-black uppercase tracking-[.12em] text-white transition hover:bg-white hover:text-[#19171D]"
                >
                  <Phone size={15} />
                  Call {LOCAL.phoneDisplay}
                </a>

                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-3 rounded-2xl border border-white/25 px-6 py-4 text-xs font-black uppercase tracking-[.12em] text-white transition hover:bg-white hover:text-[#6055A6]"
                >
                  Discuss your problem
                  <ArrowUpRight size={15} />
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-[11px] font-bold uppercase tracking-[.1em] text-white/45">
                <span>Residential properties</span>
                <span>Commercial premises</span>
                <span>Hampstead & nearby</span>
              </div>
            </div>

            {/* Right — large soft image + floating form card */}
            <div className="relative lg:col-span-7">
              <div className="sg-hamp-image-frame sg-hamp-soft-tr relative aspect-[4/3] overflow-hidden sm:aspect-[5/3.6]">
                <img
                  src="/images/superguard-hero.webp"
                  alt="Pest control for homes in Hampstead"
                  className="sg-hamp-image h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#19171D]/75 via-[#19171D]/15 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8">
                  <p className="text-[10px] font-black uppercase tracking-[.2em] text-white/55">
                    Local service
                  </p>
                  <p className="mt-1 text-2xl font-black tracking-[-.03em] sm:text-3xl">
                    Hampstead.
                  </p>
                  <p className="mt-1 text-xs text-white/60">
                    NW3 and nearby areas
                  </p>
                </div>
              </div>

              {/* Floating callback form */}
              <div className="relative z-10 mx-auto -mt-16 max-w-lg rounded-3xl border border-white/10 bg-[#19171D]/95 p-6 shadow-2xl backdrop-blur-md sm:-mt-20 sm:p-8 lg:absolute lg:bottom-8 lg:right-0 lg:mx-0 lg:w-[340px] lg:max-w-none">
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[.2em] text-[#A8A1D5]">
                      Request a callback
                    </p>
                    <h2 className="mt-1.5 text-xl font-black tracking-[-.03em] sm:text-2xl">
                      Tell us what's happening.
                    </h2>
                  </div>
                  <ArrowDownRight
                    size={20}
                    className="mt-1 shrink-0 text-white/40"
                  />
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <label className="block">
                    <span className="text-[10px] font-black uppercase tracking-[.14em] text-white/45">
                      Your name
                    </span>
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="mt-1.5 h-11 w-full border-b border-white/20 bg-transparent text-sm text-white outline-none placeholder:text-white/30 focus:border-[#A8A1D5]"
                    />
                  </label>

                  <label className="block">
                    <span className="text-[10px] font-black uppercase tracking-[.14em] text-white/45">
                      Postcode
                    </span>
                    <input
                      type="text"
                      name="postcode"
                      autoComplete="postal-code"
                      value={formData.postcode}
                      onChange={handleChange}
                      placeholder="e.g. NW3"
                      className="mt-1.5 h-11 w-full border-b border-white/20 bg-transparent text-sm uppercase text-white outline-none placeholder:text-white/30 focus:border-[#A8A1D5]"
                    />
                  </label>

                  <label className="block">
                    <span className="text-[10px] font-black uppercase tracking-[.14em] text-white/45">
                      Phone number *
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Your number"
                      className="mt-1.5 h-11 w-full border-b border-white/20 bg-transparent text-sm text-white outline-none placeholder:text-white/30 focus:border-[#A8A1D5]"
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-2 flex w-full items-center justify-between gap-3 rounded-2xl bg-[#6055A6] px-5 py-4 text-xs font-black uppercase tracking-[.14em] transition hover:bg-white hover:text-[#19171D] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <span>
                      {loading ? "Sending..." : "Request a callback"}
                    </span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== INTRO ========== */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="sg-hamp-reveal lg:col-span-4">
              <p className="text-[11px] font-black uppercase tracking-[.22em] text-[#6055A6]">
                01 / The bigger picture
              </p>
              <div className="mt-4 h-1 w-12 rounded-full bg-[#6055A6]" />
              <p className="mt-5 max-w-xs text-sm leading-7 text-[#85808D]">
                Recognise the signs. Understand the source. Decide what comes
                next.
              </p>
            </div>

            <div className="lg:col-span-8">
              <h2 className="sg-hamp-reveal sg-hamp-d1 max-w-4xl text-[clamp(2.4rem,5vw,4.6rem)] font-black leading-[0.95] tracking-[-.055em]">
                The smallest signs can point to a{" "}
                <span className="text-[#6055A6]">bigger problem.</span>
              </h2>

              <div className="mt-10 grid gap-8 border-t border-[#E8E4EF] pt-8 sm:grid-cols-2">
                <p className="sg-hamp-reveal sg-hamp-d2 text-sm leading-7 text-[#77727F] sm:text-[15px]">
                  Scratching sounds, droppings, damaged materials, insect
                  activity or an unexpected nest can all be reasons to
                  investigate what is happening around your property.
                </p>
                <p className="sg-hamp-reveal sg-hamp-d3 text-sm leading-7 text-[#77727F] sm:text-[15px]">
                  A suitable response begins with understanding the signs,
                  considering the affected area and choosing control measures
                  that match the circumstances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== ABOUT — image left, soft geometric + overlapping card ========== */}
      <section className="overflow-hidden bg-[#EAE7F0] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="sg-hamp-image-frame sg-hamp-soft-tl relative aspect-[4/5] overflow-hidden sm:aspect-[5/6]">
              <img
                src="/images/about-superguard.webp"
                alt="SuperGuard pest control service"
                className="sg-hamp-image h-full w-full object-cover"
              />
            </div>

            {/* Overlapping info card */}
            <div className="absolute -bottom-6 -right-2 max-w-[240px] rounded-3xl bg-[#6055A6] p-6 text-white shadow-xl sm:-bottom-8 sm:right-6 sm:max-w-[260px] sm:p-7">
              <p className="text-[10px] font-black uppercase tracking-[.2em] text-white/55">
                Local knowledge
              </p>
              <p className="mt-2 text-2xl font-black tracking-[-.03em]">
                Hampstead
              </p>
              <p className="mt-1.5 text-xs leading-5 text-white/65">
                NW3 5UN and nearby areas
              </p>
            </div>
          </div>

          <div>
            <p className="sg-hamp-reveal text-[11px] font-black uppercase tracking-[.22em] text-[#6055A6]">
              02 / SuperGuard Hampstead
            </p>

            <h2 className="sg-hamp-reveal sg-hamp-d1 mt-5 text-[clamp(2.5rem,4.8vw,4.4rem)] font-black leading-[0.92] tracking-[-.055em]">
              Look beyond what's{" "}
              <span className="text-[#6055A6]">visible.</span>
            </h2>

            <p className="sg-hamp-reveal sg-hamp-d2 mt-6 max-w-lg text-sm leading-7 text-[#77727F] sm:text-[15px]">
              SuperGuard Hampstead Pest Control Services takes a practical
              approach to pest problems affecting local homes and
              businesses. The focus is on understanding the situation,
              considering the property and discussing appropriate next steps.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Inspection-led approach",
                "Targeted control measures",
                "Consideration for your property",
                "Practical prevention guidance",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3.5"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#6055A6] text-white">
                    <Check size={13} />
                  </span>
                  <span className="text-xs font-bold text-[#403B47]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/contact-us"
              className="mt-9 inline-flex items-center gap-3 rounded-2xl bg-[#19171D] px-6 py-4 text-xs font-black uppercase tracking-[.12em] text-white transition hover:bg-[#6055A6]"
            >
              Discuss your pest problem
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== METHOD — three equal soft cards ========== */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 border-b border-[#E8E4EF] pb-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="sg-hamp-reveal text-[11px] font-black uppercase tracking-[.22em] text-[#6055A6]">
                03 / The approach
              </p>
              <h2 className="sg-hamp-reveal sg-hamp-d1 mt-5 max-w-2xl text-[clamp(2.5rem,5vw,4.6rem)] font-black leading-[0.9] tracking-[-.055em]">
                Less guesswork.
                <br />
                <span className="text-[#6055A6]">More clarity.</span>
              </h2>
            </div>
            <p className="sg-hamp-reveal sg-hamp-d2 max-w-md text-sm leading-7 text-[#77727F] lg:col-span-5">
              Every pest problem is different. The right next step depends
              on the evidence, the affected area and the conditions around
              the property.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Target,
                number: "01",
                title: "Understand",
                text: "Look at the signs, affected areas and potential sources of activity.",
              },
              {
                icon: UserCheck,
                number: "02",
                title: "Address",
                text: "Consider appropriate control measures based on the pest and property.",
              },
              {
                icon: ShieldCheck,
                number: "03",
                title: "Prevent",
                text: "Identify practical changes that may help reduce future pest activity.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              const isAccent = index === 1;

              return (
                <article
                  key={item.number}
                  className={`sg-hamp-reveal group rounded-3xl p-8 transition ${
                    isAccent
                      ? "bg-[#6055A6] text-white"
                      : "bg-[#F4F2F7] text-[#19171D]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-4xl font-black tracking-[-.06em] ${
                        isAccent ? "text-white/25" : "text-[#6055A6]/20"
                      }`}
                    >
                      {item.number}
                    </span>
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                        isAccent ? "bg-white/15" : "bg-white"
                      }`}
                    >
                      <Icon
                        size={20}
                        className={isAccent ? "text-white" : "text-[#6055A6]"}
                      />
                    </span>
                  </div>

                  <h3 className="mt-10 text-xl font-black tracking-[-.03em]">
                    {item.title}
                  </h3>
                  <p
                    className={`mt-3 text-sm leading-6 ${
                      isAccent ? "text-white/70" : "text-[#77727F]"
                    }`}
                  >
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== SERVICES — stacked soft cards with large images ========== */}
      <section className="relative overflow-hidden bg-[#6055A6] px-5 py-20 text-white sm:px-8 sm:py-28">
        <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full border border-white/10" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <p className="sg-hamp-reveal text-[11px] font-black uppercase tracking-[.22em] text-white/55">
                04 / Pest control services
              </p>
              <h2 className="sg-hamp-reveal sg-hamp-d1 mt-5 max-w-xl text-[clamp(2.5rem,4.8vw,4.4rem)] font-black leading-[0.9] tracking-[-.055em]">
                Different pests.
                <br />
                <span className="text-white/45">Considered solutions.</span>
              </h2>
            </div>
            <p className="sg-hamp-reveal sg-hamp-d2 max-w-md text-sm leading-7 text-white/65 lg:col-span-6">
              Explore some of the pest problems we can help you discuss.
              The appropriate service will depend on the pest, the property
              and the circumstances.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              const shapeClass =
                index === 0
                  ? "sg-hamp-soft-tl"
                  : index === 1
                  ? "sg-hamp-soft-all"
                  : "sg-hamp-soft-br";

              return (
                <Link
                  key={service.number}
                  to="/contact-us"
                  aria-label={`Enquire about ${service.title}`}
                  className="sg-hamp-reveal group flex flex-col"
                >
                  <div
                    className={`sg-hamp-image-frame relative aspect-[4/3.2] overflow-hidden ${shapeClass}`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="sg-hamp-image h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#19171D]/70 via-transparent to-[#19171D]/10" />

                    <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-[#19171D]/55 px-3 py-1.5 text-[10px] font-black uppercase tracking-[.14em] backdrop-blur-sm">
                      {service.eyebrow}
                    </span>

                    <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#6055A6] transition group-hover:bg-[#19171D] group-hover:text-white">
                      <ArrowUpRight size={17} />
                    </span>
                  </div>

                  <div className="mt-5 flex items-center gap-2.5 text-white/55">
                    <Icon size={16} />
                    <span className="text-[10px] font-black uppercase tracking-[.16em]">
                      Service {service.number}
                    </span>
                  </div>

                  <h3 className="mt-2 text-2xl font-black tracking-[-.04em] sm:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/65">
                    {service.description}
                  </p>

                  <div className="mt-5 space-y-2.5 border-t border-white/15 pt-4">
                    {service.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-2.5 text-xs leading-5 text-white/75"
                      >
                        <Check
                          size={13}
                          className="mt-0.5 shrink-0 text-[#D0C9F2]"
                        />
                        {point}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-white/15 pt-4 text-[11px] font-black uppercase tracking-[.14em]">
                    <span>Enquire about this service</span>
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== PROCESS ========== */}
      <section className="bg-[#19171D] px-5 py-20 text-white sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="sg-hamp-reveal text-[11px] font-black uppercase tracking-[.22em] text-[#A8A1D5]">
              05 / How it works
            </p>
            <h2 className="sg-hamp-reveal sg-hamp-d1 mt-5 text-[clamp(2.4rem,4.6vw,4rem)] font-black leading-[0.9] tracking-[-.055em]">
              Straightforward
              <br />
              <span className="text-white/35">from the start.</span>
            </h2>
            <p className="sg-hamp-reveal sg-hamp-d2 mt-5 max-w-xs text-sm leading-7 text-white/50">
              Start with a conversation about what you have noticed and
              explore a suitable next step for your property.
            </p>
            <a
              href={`tel:${LOCAL.phoneTel}`}
              className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/20 px-5 py-3.5 text-xs font-black uppercase tracking-[.12em] transition hover:bg-[#6055A6]"
            >
              <Phone size={14} />
              {LOCAL.phoneDisplay}
            </a>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-0">
              {processSteps.map((step, index) => (
                <div
                  key={step.number}
                  className={`sg-hamp-reveal flex gap-6 border-b border-white/10 py-7 ${
                    index === 0 ? "border-t" : ""
                  }`}
                >
                  <span className="w-12 shrink-0 text-xl font-black text-[#A8A1D5]/55">
                    {step.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-black tracking-[-.02em] sm:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 max-w-xl text-sm leading-6 text-white/45">
                      {step.text}
                    </p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="mt-1 hidden shrink-0 text-white/30 sm:block"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== PROPERTY CARE ========== */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#19171D] lg:grid lg:grid-cols-2">
          <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-14">
            <div>
              <p className="sg-hamp-reveal text-[11px] font-black uppercase tracking-[.22em] text-[#A8A1D5]">
                06 / A property-conscious approach
              </p>
              <h2 className="sg-hamp-reveal sg-hamp-d1 mt-6 text-[clamp(2.3rem,4.2vw,3.8rem)] font-black leading-[0.92] tracking-[-.05em] text-white">
                Protect the place you{" "}
                <span className="text-[#A8A1D5]">call home.</span>
              </h2>
              <p className="sg-hamp-reveal sg-hamp-d2 mt-5 max-w-md text-sm leading-7 text-white/50">
                Effective pest management starts with understanding the
                setting. Consider the affected areas, possible access
                points and practical ways to address the issue.
              </p>
            </div>

            <div className="mt-10 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
              {[
                "Respect for your property",
                "Clear communication",
                "Focused control",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 text-xs leading-5 text-white/55"
                >
                  <Check
                    size={13}
                    className="mt-0.5 shrink-0 text-[#A8A1D5]"
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="sg-hamp-image-frame relative min-h-[320px] overflow-hidden sm:min-h-[400px]">
            <img
              src="/images/mission-superguard.webp"
              alt="SuperGuard pest control service"
              className="sg-hamp-image absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#19171D]/70 via-transparent to-[#19171D]/15" />

            <div className="absolute bottom-6 left-6 max-w-[220px] rounded-2xl border-l-4 border-[#A8A1D5] bg-[#19171D]/80 px-5 py-4 backdrop-blur-md">
              <p className="text-[10px] font-black uppercase tracking-[.18em] text-white/45">
                Local service
              </p>
              <p className="mt-1.5 text-base font-black text-white">
                Hampstead & nearby
              </p>
              <p className="mt-0.5 text-xs text-white/55">
                Professional pest control
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== LOCAL AREA ========== */}
      <section className="bg-[#EAE7F0] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="sg-hamp-grid-lines relative overflow-hidden rounded-[32px] bg-[#19171D] p-8 text-white sm:p-12">
            <div className="relative flex min-h-[340px] flex-col justify-between sm:min-h-[380px]">
              <div>
                <div className="flex items-center gap-2.5 text-[11px] font-black uppercase tracking-[.18em] text-white/50">
                  <MapPin size={15} className="text-[#A8A1D5]" />
                  Local service area
                </div>
                <h2 className="mt-8 text-[clamp(3rem,7vw,5.5rem)] font-black leading-[0.82] tracking-[-.07em]">
                  Hampstead
                  <span className="text-[#A8A1D5]">.</span>
                </h2>
                <p className="mt-4 text-xs font-bold uppercase tracking-[.16em] text-white/35">
                  London / NW3
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10">
                {[
                  "Hampstead",
                  "NW3 5UN",
                  "Nearby areas",
                  "Homes & businesses",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-[#19171D] px-4 py-4 text-xs font-semibold text-white/55"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="sg-hamp-reveal text-[11px] font-black uppercase tracking-[.22em] text-[#6055A6]">
              07 / Find your local team
            </p>
            <h2 className="sg-hamp-reveal sg-hamp-d1 mt-5 max-w-md text-[clamp(2.4rem,4.6vw,4rem)] font-black leading-[0.92] tracking-[-.05em]">
              A local point of{" "}
              <span className="text-[#6055A6]">contact.</span>
            </h2>
            <p className="sg-hamp-reveal sg-hamp-d2 mt-5 max-w-md text-sm leading-7 text-[#77727F] sm:text-[15px]">
              Contact SuperGuard Hampstead to discuss pest problems
              affecting your home or business in Hampstead and nearby areas.
            </p>

            <div className="mt-8 space-y-0 rounded-3xl bg-white p-1">
              <div className="flex gap-4 rounded-2xl px-5 py-5">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[#6055A6]"
                />
                <div className="min-w-0">
                  <p className="text-[10px] font-black uppercase tracking-[.16em] text-[#AAA6B2]">
                    Address
                  </p>
                  <p className="mt-1.5 text-sm font-bold leading-6 text-[#302C36]">
                    {LOCAL.fullAddress}
                  </p>
           
                </div>
              </div>

              <div className="mx-5 border-t border-[#E8E4EF]" />

              <div className="flex gap-4 rounded-2xl px-5 py-5">
                <Phone
                  size={18}
                  className="mt-0.5 shrink-0 text-[#6055A6]"
                />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[.16em] text-[#AAA6B2]">
                    Phone
                  </p>
                  <a
                    href={`tel:${LOCAL.phoneTel}`}
                    className="mt-1.5 block text-sm font-bold text-[#302C36] transition hover:text-[#6055A6]"
                  >
                    {LOCAL.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            <Link
              to="/contact-us"
              className="mt-7 inline-flex items-center gap-3 rounded-2xl bg-[#19171D] px-6 py-4 text-xs font-black uppercase tracking-[.12em] text-white transition hover:bg-[#6055A6]"
            >
              Contact SuperGuard
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== SERVICE PRINCIPLES ========== */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="sg-hamp-reveal text-[11px] font-black uppercase tracking-[.22em] text-[#6055A6]">
              08 / What matters
            </p>
            <h2 className="sg-hamp-reveal sg-hamp-d1 mt-5 text-[clamp(2.4rem,4.6vw,4rem)] font-black leading-[0.9] tracking-[-.055em]">
              Thoughtful
              <br />
              <span className="text-[#6055A6]">service.</span>
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 lg:col-span-8">
            {[
              {
                icon: Clock3,
                title: "Clear communication",
                text: "Explain what you have noticed and discuss the next practical step.",
              },
              {
                icon: ShieldCheck,
                title: "Professional approach",
                text: "Consider the actual pest problem and the circumstances of the property.",
              },
              {
                icon: Sparkles,
                title: "Practical guidance",
                text: "Understand the options and prevention measures relevant to your situation.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="sg-hamp-reveal rounded-3xl border border-[#E8E4EF] bg-[#F4F2F7]/60 p-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white">
                    <Icon size={20} className="text-[#6055A6]" />
                  </span>
                  <h3 className="mt-6 text-base font-black tracking-[-.02em]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-[#77727F]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="bg-[#EAE7F0] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="sg-hamp-reveal text-[11px] font-black uppercase tracking-[.22em] text-[#6055A6]">
              09 / Common questions
            </p>
            <h2 className="sg-hamp-reveal sg-hamp-d1 mt-5 text-[clamp(2.4rem,4.6vw,4rem)] font-black leading-[0.9] tracking-[-.055em]">
              Before
              <br />
              <span className="text-[#6055A6]">you call.</span>
            </h2>
            <p className="sg-hamp-reveal sg-hamp-d2 mt-5 max-w-xs text-sm leading-7 text-[#77727F]">
              Straightforward answers to common questions about our local
              pest-control service.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-3xl bg-white">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={faq.question}
                    className={
                      index !== faqs.length - 1
                        ? "border-b border-[#E8E4EF]"
                        : ""
                    }
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left sm:px-8 sm:py-6"
                    >
                      <span className="flex gap-4 text-sm font-black text-[#19171D] sm:text-[15px]">
                        <span className="mt-0.5 text-[11px] font-black text-[#6055A6]">
                          0{index + 1}
                        </span>
                        {faq.question}
                      </span>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
                          isOpen
                            ? "bg-[#6055A6] text-white"
                            : "border border-[#E0DCE8] text-[#6055A6]"
                        }`}
                      >
                        <ChevronDown
                          size={15}
                          className={`transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>

                    <div
                      className={`sg-hamp-faq-panel ${
                        isOpen ? "is-open" : ""
                      }`}
                    >
                      <div className="sg-hamp-faq-inner">
                        <p className="max-w-2xl px-6 pb-6 pl-[3.25rem] text-sm leading-7 text-[#77727F] sm:px-8 sm:pl-[3.5rem]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="bg-[#19171D] px-5 py-16 text-white sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[32px] bg-[#6055A6] p-8 sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/15" />
            <div className="pointer-events-none absolute -right-8 top-16 h-40 w-40 rounded-full border border-white/10" />

            <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="sg-hamp-reveal text-[11px] font-black uppercase tracking-[.22em] text-white/55">
                  10 / Take the next step
                </p>
                <h2 className="sg-hamp-reveal sg-hamp-d1 mt-5 max-w-3xl text-[clamp(2.4rem,5vw,4.6rem)] font-black leading-[0.9] tracking-[-.055em]">
                  Don't leave a pest problem{" "}
                  <span className="text-white/45">unaddressed.</span>
                </h2>
                <p className="sg-hamp-reveal sg-hamp-d2 mt-5 max-w-lg text-sm leading-7 text-white/70 sm:text-[15px]">
                  Speak to SuperGuard Hampstead about your pest-control
                  concerns and find out what to do next.
                </p>
              </div>

              <div className="flex flex-col gap-3 lg:col-span-4">
                <a
                  href={`tel:${LOCAL.phoneTel}`}
                  className="flex items-center justify-between gap-4 rounded-2xl bg-[#19171D] px-5 py-5 transition hover:bg-white hover:text-[#19171D]"
                >
                  <span>
                    <span className="block text-[10px] font-black uppercase tracking-[.16em] opacity-50">
                      Call SuperGuard
                    </span>
                    <span className="mt-1.5 block text-lg font-black">
                      {LOCAL.phoneDisplay}
                    </span>
                  </span>
                  <ArrowUpRight size={20} />
                </a>

                <Link
                  to="/contact-us"
                  className="flex items-center justify-between gap-4 rounded-2xl border border-white/30 px-5 py-4 text-xs font-black uppercase tracking-[.12em] transition hover:bg-white hover:text-[#6055A6]"
                >
                  Contact our team
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="relative mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[.16em] text-white/50">
                  {LOCAL.company}
                </p>
                <p className="mt-2 flex items-start gap-2 text-xs leading-5 text-white/60">
                  <MapPin size={13} className="mt-0.5 shrink-0" />
                  {LOCAL.fullAddress}
                </p>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[.14em] text-white/45">
                Hampstead & nearby areas
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}