



// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Phone,
//   MapPin,
//   CheckCircle2,
//   Bug,
//   ShieldCheck,
//   SearchCheck,
//   Home,
//   Mouse,
//   Bird,
//   ClipboardCheck,
// } from "lucide-react";

// export default function ServicesHeroSection() {
//   const LOCAL = {
//     area: "Walworth",
//     postcode: "SE17",
//     address: "36 Sutherland Square, London SE17 3EE",
//     phoneNo: "07466 565503",
//     phoneTel: "+447466565503",
//     companyName: "SuperGuard Walworth",
//   };

//   const serviceTypes = [
//     { title: "Rodents", text: "Rats, mice & squirrels", icon: Mouse },
//     { title: "Insects", text: "Bed bugs, ants & fleas", icon: Bug },
//     { title: "Birds", text: "Proofing & deterrents", icon: Bird },
//     { title: "Inspection", text: "Find the root cause", icon: ClipboardCheck },
//   ];

//   return (
//     <section className="relative mt-10 overflow-hidden bg-[#F8F6FF] pt-32 pb-20 lg:pt-40 lg:pb-28">
//       <style>{`
//         @keyframes sgHeroFadeUp {
//           from { opacity: 0; transform: translateY(24px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         .sg-hero-up {
//           animation: sgHeroFadeUp .75s cubic-bezier(0.16, 1, 0.3, 1) both;
//         }

//         .sg-delay-1 { animation-delay: 120ms; }
//         .sg-delay-2 { animation-delay: 220ms; }

//         @media (prefers-reduced-motion: reduce) {
//           .sg-hero-up { animation: none; }
//         }
//       `}</style>

//       <div className="absolute inset-0 pointer-events-none">
//         <div
//           className="absolute right-0 top-0 h-full w-full bg-[#5F52B5]"
//           style={{
//             clipPath: "polygon(55% 0, 100% 0, 100% 100%, 70% 100%)",
//           }}
//         />
//         <div className="absolute -left-32 top-24 h-[460px] w-[460px] rounded-full bg-[#5F52B5]/12 blur-3xl" />
//         <div className="absolute -right-32 bottom-[-120px] h-[520px] w-[520px] rounded-full bg-[#17122F]/22 blur-3xl" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
//         <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
//           {/* LEFT CONTENT */}
//           <div className="sg-hero-up lg:col-span-5">
//             <span className="inline-flex bg-[#5F52B5] px-5 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-white shadow-xl">
//               <ShieldCheck className="mr-2 h-4 w-4" />
//               Services Directory • {LOCAL.area} {LOCAL.postcode}
//             </span>

//             <h1 className="mt-7 text-4xl font-black leading-[0.92] tracking-tight text-[#17122F] sm:text-5xl lg:text-7xl">
//               Pest Control Services For SE17 Properties.
//             </h1>

//             <p className="mt-6 max-w-2xl text-base font-semibold leading-relaxed text-slate-700 sm:text-lg">
//               Browse {LOCAL.companyName} services for rodents, bed bugs, ants,
//               cockroaches, fleas, wasps, birds and property proofing across{" "}
//               {LOCAL.postcode}. Choose the issue and request local support.
//             </p>

//             <div className="mt-8 flex flex-col gap-4 sm:flex-row">
//               <Link
//                 to="/contact-us"
//                 className="inline-flex items-center justify-center gap-2 bg-[#5F52B5] px-8 py-4 text-sm font-black uppercase tracking-wider text-white shadow-xl transition-all hover:bg-[#17122F]"
//               >
//                 Book Inspection
//                 <ArrowRight className="h-4 w-4" />
//               </Link>

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="inline-flex items-center justify-center gap-2 bg-[#17122F] px-8 py-4 text-sm font-black uppercase tracking-wider text-white shadow-xl transition-all hover:bg-[#5F52B5]"
//               >
//                 <Phone className="h-4 w-4" />
//                 {LOCAL.phoneNo}
//               </a>
//             </div>

//             <div className="sg-hero-up sg-delay-2 mt-9 grid gap-3 sm:grid-cols-3">
//               {[
//                 { icon: SearchCheck, title: "Inspection First" },
//                 { icon: ShieldCheck, title: "Targeted Plan" },
//                 { icon: Home, title: "SE17 Support" },
//               ].map((item) => {
//                 const Icon = item.icon;

//                 return (
//                   <div key={item.title} className="bg-white p-4 shadow-xl shadow-[#17122F]/6">
//                     <Icon className="mb-3 h-5 w-5 text-[#5F52B5]" />
//                     <span className="text-sm font-black text-[#17122F]">
//                       {item.title}
//                     </span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* CENTER IMAGE */}
//           <div className="sg-hero-up sg-delay-1 lg:col-span-4">
//             <div className="relative min-h-[560px] overflow-hidden bg-[#17122F] shadow-2xl shadow-[#17122F]/25">
//               <img
//                 src="/images/servicehero.webp"
//                 alt={`${LOCAL.companyName} pest control services in ${LOCAL.area}`}
//                 className="absolute inset-0 h-full w-full object-cover opacity-85"
//                 loading="eager"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#17122F] via-[#17122F]/25 to-transparent" />

//               <div className="absolute left-5 top-5 bg-white px-5 py-4 shadow-xl">
//                 <span className="block text-[10px] font-black uppercase tracking-widest text-[#5F52B5]">
//                   Local Base
//                 </span>
//                 <span className="block text-xl font-black text-[#17122F]">
//                   {LOCAL.area}
//                 </span>
//               </div>

//               <div className="absolute bottom-5 left-5 right-5 bg-white p-6 shadow-2xl">
//                 <MapPin className="mb-4 h-6 w-6 text-[#5F52B5]" />
//                 <span className="block text-[10px] font-black uppercase tracking-widest text-[#5F52B5]">
//                   Address
//                 </span>
//                 <address className="mt-2 not-italic text-sm font-black leading-relaxed text-[#17122F]">
//                   {LOCAL.address}
//                 </address>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT SERVICE COMMAND */}
//           <div className="sg-hero-up sg-delay-2 lg:col-span-3">
//             <div className="grid gap-4">
//               {serviceTypes.map((item) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={item.title}
//                     className="group bg-white p-5 shadow-2xl shadow-[#17122F]/10 transition-all hover:-translate-y-1 hover:bg-[#17122F]"
//                   >
//                     <div className="flex items-start justify-between gap-4">
//                       <div className="flex h-13 w-13 items-center justify-center bg-[#5F52B5] text-white group-hover:bg-white group-hover:text-[#5F52B5]">
//                         <Icon className="h-6 w-6" />
//                       </div>

//                       <CheckCircle2 className="h-5 w-5 text-[#5F52B5] group-hover:text-white" />
//                     </div>

//                     <h3 className="mt-5 text-2xl font-black text-[#17122F] group-hover:text-white">
//                       {item.title}
//                     </h3>

//                     <p className="mt-2 text-sm font-semibold text-slate-600 group-hover:text-white/70">
//                       {item.text}
//                     </p>
//                   </div>
//                 );
//               })}

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="bg-[#17122F] p-6 text-white shadow-2xl shadow-[#17122F]/20 transition-all hover:bg-white hover:text-[#5F52B5]"
//               >
//                 <Phone className="mb-4 h-6 w-6" />
//                 <span className="block text-[10px] font-black uppercase tracking-widest opacity-60">
//                   Call Direct
//                 </span>
//                 <span className="mt-2 block text-2xl font-black">
//                   {LOCAL.phoneNo}
//                 </span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }















// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowDown,
//   ArrowRight,
//   CheckCircle2,
//   MapPin,
//   SearchCheck,
//   ShieldCheck,
//   Sparkles,
// } from "lucide-react";

// export default function ServicesHeroSection() {
//   const LOCAL = {
//     company: "SuperGuard Services Limited Holborn",
//     area: "Holborn",
//     postcode: "WC2R 3JF",
//     address: "50 Essex Street, London, WC2R 3JF",
//   };

//   const scrollToServices = () => {
//     const section =
//       document.getElementById("services-list") ||
//       document.getElementById("all-services") ||
//       document.getElementById("service-directory");

//     if (section) {
//       section.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   const trustPoints = [
//     "Inspection Before Treatment",
//     "Residential & Commercial Support",
//     "Clear Practical Advice",
//   ];

//   return (
//     <section
//       aria-labelledby="services-hero-heading"
//       className="relative mt-10 overflow-hidden bg-[#6055A6] pb-16 pt-28 text-white sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-40"
//     >
//       <style>{`
//         @keyframes serviceHeroReveal {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }

//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes serviceHeroImageReveal {
//           from {
//             opacity: 0;
//             transform: scale(0.96) translateY(30px);
//           }

//           to {
//             opacity: 1;
//             transform: scale(1) translateY(0);
//           }
//         }

//         @keyframes serviceHeroFloat {
//           0%,
//           100% {
//             transform: translateY(0);
//           }

//           50% {
//             transform: translateY(-10px);
//           }
//         }

//         .service-hero-reveal {
//           animation: serviceHeroReveal 850ms
//             cubic-bezier(0.16, 1, 0.3, 1) both;
//         }

//         .service-hero-image-reveal {
//           animation: serviceHeroImageReveal 1000ms
//             cubic-bezier(0.16, 1, 0.3, 1) both;
//         }

//         .service-hero-delay-1 {
//           animation-delay: 120ms;
//         }

//         .service-hero-delay-2 {
//           animation-delay: 220ms;
//         }

//         .service-hero-delay-3 {
//           animation-delay: 320ms;
//         }

//         .service-hero-float {
//           animation: serviceHeroFloat 5s ease-in-out infinite;
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .service-hero-reveal,
//           .service-hero-image-reveal,
//           .service-hero-float {
//             animation: none;
//           }
//         }
//       `}</style>

//       {/* BACKGROUND DECORATION */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute -left-52 -top-52 h-[620px] w-[620px] rounded-full bg-white/10 blur-[150px]" />

//         <div className="absolute -bottom-72 right-[-180px] h-[720px] w-[720px] rounded-full bg-[#171327]/35 blur-[170px]" />

//         <div className="absolute left-[42%] top-[20%] h-[420px] w-[420px] rounded-full bg-[#867BC8]/30 blur-[130px]" />

//         <div
//           className="absolute inset-0 opacity-[0.05]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)",
//             backgroundSize: "88px 88px",
//           }}
//         />

//         <div
//           aria-hidden="true"
//           className="absolute left-[-40px] top-[120px] hidden rotate-[-90deg] text-[10px] font-black uppercase tracking-[0.5em] text-white/20 lg:block"
//         >
//           SuperGuard Holborn
//         </div>

//         <div
//           aria-hidden="true"
//           className="absolute right-[-70px] top-[120px] hidden select-none text-[220px] font-black leading-none tracking-[-0.08em] text-white/[0.035] lg:block"
//         >
//           01
//         </div>
//       </div>

//       <div className="relative z-10 mx-auto max-w-[1450px] px-5 sm:px-8 md:px-10 lg:px-14">
//         {/* TOP LINE */}
//         <div className="service-hero-reveal flex flex-col gap-4 border-b border-white/15 pb-6 sm:flex-row sm:items-center sm:justify-between">
//           <div className="flex items-center gap-3">
//             <span className="relative flex h-2.5 w-2.5">
//               <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-40" />
//               <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
//             </span>

//             <span className="text-[9px] font-black uppercase tracking-[0.26em] text-white/75 sm:text-[10px]">
//               Residential & Commercial Pest Control
//             </span>
//           </div>

//           <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.16em] text-white/55 sm:text-[10px]">
//             <MapPin
//               size={15}
//               strokeWidth={2.4}
//               className="shrink-0 text-white"
//             />

//             {LOCAL.address}
//           </div>
//         </div>

//         {/* MAIN HEADING */}
//         <div className="service-hero-reveal service-hero-delay-1 mt-12 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
//           <div>
//             <div className="flex items-center gap-4">
//               <span className="h-px w-14 bg-white/45 sm:w-20" />

//               <span className="text-[9px] font-black uppercase tracking-[0.28em] text-white/65 sm:text-[10px]">
//                 Pest Control Services
//               </span>
//             </div>

//             <h1
//               id="services-hero-heading"
//               className="mt-6 max-w-[1050px] text-[48px] font-black leading-[0.88] tracking-[-0.06em] text-white sm:text-[66px] md:text-[82px] lg:text-[98px] xl:text-[112px]"
//             >
//               Pest Control
//               <span className="block text-[#D9D4FF]">
//                 For Holborn Properties.
//               </span>
//             </h1>
//           </div>

//           <div className="lg:pb-2">
//             <p className="max-w-xl text-sm font-medium leading-7 text-white/70 sm:text-base sm:leading-8">
//               Explore professional pest control support for rodents, insects,
//               birds and property-related pest concerns across Holborn and
//               Central London.
//             </p>

//             <p className="mt-4 max-w-xl text-sm font-medium leading-7 text-white/50">
//               We focus on inspection, treatment planning and clear practical
//               guidance for homes, landlords and businesses.
//             </p>
//           </div>
//         </div>

//         {/* CTA ROW */}
//         <div className="service-hero-reveal service-hero-delay-2 mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
//           <Link
//             to="/contact-us"
//             className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.17em] text-[#6055A6] shadow-[0_18px_45px_rgba(23,19,39,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#171327] hover:text-white"
//           >
//             Request An Inspection

//             <ArrowRight
//               size={17}
//               strokeWidth={2.6}
//               className="transition-transform duration-300 group-hover:translate-x-1"
//             />
//           </Link>

//           {/* <button
//             type="button"
//             onClick={scrollToServices}
//             className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/25 bg-white/[0.08] px-8 py-4 text-[10px] font-black uppercase tracking-[0.17em] text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#6055A6]"
//           >
//             Browse Services

//             <ArrowDown
//               size={17}
//               strokeWidth={2.6}
//               className="transition-transform duration-300 group-hover:translate-y-1"
//             />
//           </button> */}
//         </div>

//         {/* IMAGE STAGE */}
//         <div className="service-hero-image-reveal service-hero-delay-2 relative mt-14 lg:mt-16">
//           <div className="relative min-h-[520px] overflow-hidden rounded-[36px] border border-white/15 bg-[#171327] shadow-[0_40px_110px_rgba(23,19,39,0.28)] sm:min-h-[650px] lg:min-h-[760px]">
//             <img
//               src="/images/servicehero.webp"
//               alt={`${LOCAL.company} pest control services in ${LOCAL.area}`}
//               className="absolute inset-0 h-full w-full object-cover object-center"
//               loading="eager"
//               fetchPriority="high"
//             />

//             <div className="absolute inset-0 bg-[#171327]/18" />

//             <div className="absolute inset-0 bg-gradient-to-t from-[#171327]/90 via-[#171327]/15 to-transparent" />

//             <div className="absolute inset-0 bg-gradient-to-r from-[#171327]/25 via-transparent to-[#6055A6]/25" />

//             <div className="absolute inset-0 bg-[#6055A6]/10 mix-blend-multiply" />

//             {/* TOP GLASS BADGE */}
//             <div className="absolute left-5 top-5 sm:left-8 sm:top-8">
//               <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white shadow-2xl backdrop-blur-xl">
//                 <ShieldCheck
//                   size={17}
//                   strokeWidth={2.5}
//                 />

//                 <span className="text-[9px] font-black uppercase tracking-[0.19em]">
//                   SuperGuard Holborn
//                 </span>
//               </div>
//             </div>

//             {/* FLOATING PROCESS PANEL */}
//             <div className="service-hero-float absolute right-5 top-5 hidden w-[270px] rounded-[26px] border border-white/15 bg-[#171327]/35 p-6 text-white shadow-2xl backdrop-blur-xl sm:right-8 sm:top-8 lg:block">
//               <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#6055A6]">
//                 <SearchCheck
//                   size={21}
//                   strokeWidth={2.5}
//                 />
//               </div>

//               <span className="mt-5 block text-[9px] font-black uppercase tracking-[0.2em] text-white/45">
//                 Our Approach
//               </span>

//               <h2 className="mt-2 text-xl font-black leading-tight text-white">
//                 Inspect first. Understand the issue. Plan the next step.
//               </h2>
//             </div>

//             {/* IMAGE BOTTOM COPY */}
//             <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:p-11">
//               <div className="max-w-[850px]">
//                 <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#D9D4FF]">
//                   Professional Property Support
//                 </span>

//                 <h2 className="mt-4 text-3xl font-black leading-[0.96] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl lg:text-6xl">
//                   The Right Service Starts With Understanding The Property.
//                 </h2>

//                 <p className="mt-5 max-w-2xl text-sm font-medium leading-7 text-white/65 sm:text-base sm:leading-8">
//                   Tell us what signs you have noticed, where activity is
//                   appearing and the type of property requiring attention.
//                 </p>
//               </div>
//             </div>

//             {/* SIDE NUMBER */}
//             <div className="absolute bottom-8 right-8 hidden lg:block">
//               <span className="text-[110px] font-black leading-none tracking-[-0.08em] text-white/[0.08]">
//                 SG
//               </span>
//             </div>
//           </div>

//           {/* ADDRESS OVERLAP */}
//           <div className="relative z-20 mx-4 -mt-8 rounded-[28px] bg-[#171327] px-6 py-6 text-white shadow-[0_25px_70px_rgba(23,19,39,0.28)] sm:mx-8 sm:px-8 lg:mx-12 lg:-mt-10 lg:px-10">
//             <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
//               <div className="flex items-start gap-4">
//                 <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#6055A6] text-white">
//                   <MapPin
//                     size={21}
//                     strokeWidth={2.5}
//                   />
//                 </span>

//                 <div>
//                   <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-[#BDB6FF]">
//                     Holborn Base
//                   </span>

//                   <address className="mt-2 not-italic text-base font-black leading-relaxed text-white sm:text-lg">
//                     {LOCAL.address}
//                   </address>
//                 </div>
//               </div>

//               <div className="flex flex-wrap gap-x-6 gap-y-3">
//                 {trustPoints.map((item) => (
//                   <div
//                     key={item}
//                     className="flex items-center gap-2"
//                   >
//                     <CheckCircle2
//                       size={17}
//                       strokeWidth={2.7}
//                       className="shrink-0 text-[#BDB6FF]"
//                     />

//                     <span className="text-xs font-black text-white/70">
//                       {item}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM CONTINUATION */}
//         <div className="service-hero-reveal service-hero-delay-3 mt-12 flex flex-col gap-6 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
//           <div className="flex items-center gap-4">
//             <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/[0.08] text-white">
//               <Sparkles
//                 size={18}
//                 strokeWidth={2.4}
//               />
//             </span>

//             <div>
//               <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-white/45">
//                 Next Section
//               </span>

//               <span className="mt-1 block text-sm font-black text-white">
//                 Explore the complete pest control service directory
//               </span>
//             </div>
//           </div>

//           <button
//             type="button"
//             onClick={scrollToServices}
//             aria-label="Scroll to pest control services"
//             className="group flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#6055A6] transition-all duration-300 hover:-translate-y-1 hover:bg-[#171327] hover:text-white"
//           >
//             <ArrowDown
//               size={20}
//               strokeWidth={2.7}
//               className="transition-transform duration-300 group-hover:translate-y-1"
//             />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }














// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowDown,
//   ArrowRight,
//   Building2,
//   Check,
//   MapPin,
//   SearchCheck,
//   ShieldCheck,
//   Sparkles,
// } from "lucide-react";

// export default function ServicesHeroSection() {
//   const LOCAL = {
//     company: "SuperGuard Services Westminster",
//     area: "Westminster",
//     postcode: "SW1P 4BD",
//     address: "14 Regency St, London SW1P 4BD",
//   };

//   /*
//    * Scroll behaviour intentionally preserved
//    * from the original ServicesHeroSection.
//    */
//   const scrollToServices = () => {
//     const section =
//       document.getElementById("services-list") ||
//       document.getElementById("all-services") ||
//       document.getElementById("service-directory");

//     if (section) {
//       section.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   const trustPoints = [
//     "Inspection Before Treatment",
//     "Residential & Commercial Support",
//     "Clear Practical Advice",
//   ];

//   const serviceIndex = [
//     {
//       number: "01",
//       title: "Rodents",
//       text: "Rats, mice and wildlife-related activity.",
//     },
//     {
//       number: "02",
//       title: "Insects",
//       text: "Bed bugs, cockroaches, ants, fleas and moths.",
//     },
//     {
//       number: "03",
//       title: "Nests",
//       text: "Wasps, bees and nesting pest concerns.",
//     },
//     {
//       number: "04",
//       title: "Proofing",
//       text: "Entry-point and property protection support.",
//     },
//   ];

//   return (
//     <section
//       aria-labelledby="services-hero-heading"
//       className="relative mt-10 overflow-hidden bg-[#F4F1F8] pb-16 pt-28 text-[#18141F] sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-40"
//     >
//       <style>{`
//         @keyframes sgwServicesHeroReveal {
//           from {
//             opacity: 0;
//             transform: translateY(28px);
//           }

//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes sgwServicesHeroImageReveal {
//           from {
//             opacity: 0;
//             transform: scale(0.97);
//           }

//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         @keyframes sgwServicesHeroLine {
//           from {
//             transform: scaleX(0);
//           }

//           to {
//             transform: scaleX(1);
//           }
//         }

//         .sgw-services-hero-reveal {
//           animation: sgwServicesHeroReveal 850ms
//             cubic-bezier(0.16, 1, 0.3, 1) both;
//         }

//         .sgw-services-hero-image {
//           animation: sgwServicesHeroImageReveal 1000ms
//             cubic-bezier(0.16, 1, 0.3, 1) both;
//         }

//         .sgw-services-hero-line {
//           transform-origin: left;
//           animation: sgwServicesHeroLine 900ms
//             cubic-bezier(0.16, 1, 0.3, 1) both;
//         }

//         .sgw-services-delay-1 {
//           animation-delay: 100ms;
//         }

//         .sgw-services-delay-2 {
//           animation-delay: 200ms;
//         }

//         .sgw-services-delay-3 {
//           animation-delay: 300ms;
//         }

//         .sgw-services-delay-4 {
//           animation-delay: 400ms;
//         }

//         .sgw-services-dot-pattern {
//           background-image: radial-gradient(
//             circle,
//             rgba(98, 84, 180, 0.34) 1.2px,
//             transparent 1.2px
//           );
//           background-size: 11px 11px;
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .sgw-services-hero-reveal,
//           .sgw-services-hero-image,
//           .sgw-services-hero-line {
//             animation: none;
//           }
//         }
//       `}</style>

//       {/* BACKGROUND */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 overflow-hidden"
//       >
//         <div
//           className="absolute inset-0 opacity-[0.045]"
//           style={{
//             backgroundImage:
//               "linear-gradient(#6254B4 1px, transparent 1px), linear-gradient(90deg, #6254B4 1px, transparent 1px)",
//             backgroundSize: "72px 72px",
//           }}
//         />

//         <div className="absolute -left-64 top-[-120px] h-[620px] w-[620px] rounded-full bg-[#6254B4]/13 blur-[165px]" />

//         <div className="absolute -right-72 bottom-[-270px] h-[680px] w-[680px] rounded-full border-[120px] border-[#6254B4]/[0.04]" />

//         <div className="sgw-services-dot-pattern absolute right-6 top-24 h-48 w-48 opacity-40" />

//         <div className="absolute right-0 top-0 h-full w-[31%] border-l border-[#6254B4]/[0.055] bg-white/25" />
//       </div>

//       {/* BACKGROUND WORD */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute left-1/2 top-24 hidden -translate-x-1/2 select-none whitespace-nowrap text-[190px] font-black uppercase leading-none tracking-[-0.09em] text-[#6254B4]/[0.03] xl:block"
//       >
//         Services
//       </div>

//       <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-7 lg:px-10">
//         {/* TOP DATA BAR */}
//         <div className="sgw-services-hero-reveal grid border-y border-[#CEC7D8] lg:grid-cols-[1fr_auto_auto]">
//           <div className="flex items-center gap-4 py-5 lg:pr-8">
//             <span className="relative flex h-3 w-3 shrink-0">
//               <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6254B4] opacity-30" />

//               <span className="relative inline-flex h-3 w-3 rounded-full bg-[#6254B4]" />
//             </span>

//             <div>
//               <span className="block text-[8px] font-black uppercase tracking-[0.25em] text-[#6254B4]">
//                 Westminster Service Atlas
//               </span>

//               <span className="mt-1 block text-xs font-black text-[#18141F]">
//                 Residential & Commercial Pest Control
//               </span>
//             </div>
//           </div>

//           <div className="flex items-center gap-3 border-t border-[#CEC7D8] py-5 lg:border-l lg:border-t-0 lg:px-8">
//             <MapPin
//               size={16}
//               strokeWidth={2.5}
//               className="shrink-0 text-[#6254B4]"
//             />

//             <span className="text-[9px] font-black uppercase tracking-[0.15em] text-[#625D69]">
//               {LOCAL.address}
//             </span>
//           </div>

//           <div className="flex items-center gap-3 border-t border-[#CEC7D8] py-5 lg:border-l lg:border-t-0 lg:pl-8">
//             <ShieldCheck
//               size={16}
//               strokeWidth={2.5}
//               className="shrink-0 text-[#6254B4]"
//             />

//             <span className="text-[9px] font-black uppercase tracking-[0.15em] text-[#625D69]">
//               Westminster · SW1P
//             </span>
//           </div>
//         </div>

//         {/* MAIN HERO */}
//         <div className="mt-14 grid gap-12 xl:grid-cols-[0.78fr_1.22fr] xl:gap-14">
//           {/* LEFT EDITORIAL COLUMN */}
//           <div className="sgw-services-hero-reveal sgw-services-delay-1 flex flex-col">
//             <div>
//               <div className="flex items-center gap-4">
//                 <span className="h-px w-14 bg-[#6254B4]/55 sm:w-20" />

//                 <span className="text-[9px] font-black uppercase tracking-[0.28em] text-[#6254B4]">
//                   Pest Control Services
//                 </span>
//               </div>

//               <h1
//                 id="services-hero-heading"
//                 className="mt-7 max-w-[690px] text-[54px] font-black leading-[0.88] tracking-[-0.065em] text-[#18141F] sm:text-[72px] lg:text-[86px] xl:text-[91px]"
//               >
//                 Professional pest control
//                 <span className="block text-[#6254B4]">
//                   for Westminster properties.
//                 </span>
//               </h1>

//               <p className="mb-0 mt-8 max-w-[590px] text-[15px] font-medium leading-7 text-[#625D69] sm:text-base sm:leading-8">
//                 Explore pest control support for rodents, insects,
//                 wildlife, nests, birds and property proofing across
//                 Westminster and Central London.
//               </p>

//               <p className="mb-0 mt-4 max-w-[570px] text-sm font-medium leading-7 text-[#827C88]">
//                 Our service focuses on understanding the property,
//                 identifying the activity and planning a suitable next
//                 step.
//               </p>
//             </div>

//             {/* ACTIONS */}
//             <div className="mt-9 flex flex-col gap-3 sm:flex-row">
//               <Link
//                 to="/contact-us"
//                 className="group inline-flex min-h-[56px] items-center justify-center gap-4 bg-[#6254B4] px-7 text-[10px] font-black uppercase tracking-[0.17em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#18141F]"
//               >
//                 Request Pest Support

//                 <ArrowRight
//                   size={18}
//                   strokeWidth={2.5}
//                   className="transition-transform duration-300 group-hover:translate-x-1"
//                 />
//               </Link>

//               <button
//                 type="button"
//                 onClick={scrollToServices}
//                 className="group inline-flex min-h-[56px] items-center justify-center gap-4 border border-[#CFC8D9] bg-white/40 px-7 text-[10px] font-black uppercase tracking-[0.17em] text-[#18141F] transition-all duration-300 hover:-translate-y-1 hover:border-[#6254B4] hover:text-[#6254B4]"
//               >
//                 Browse Services

//                 <ArrowDown
//                   size={18}
//                   strokeWidth={2.5}
//                   className="transition-transform duration-300 group-hover:translate-y-1"
//                 />
//               </button>
//             </div>

//             {/* TRUST LEDGER */}
//             <div className="mt-11 border-y border-[#CFC8D9]">
//               {trustPoints.map((item, index) => (
//                 <div
//                   key={item}
//                   className="grid grid-cols-[52px_1fr] border-b border-[#CFC8D9] last:border-b-0"
//                 >
//                   <span className="flex min-h-[58px] items-center justify-center border-r border-[#CFC8D9] text-[9px] font-black tracking-[0.17em] text-[#6254B4]">
//                     {String(index + 1).padStart(2, "0")}
//                   </span>

//                   <span className="flex min-h-[58px] items-center gap-3 px-4 text-[10px] font-black uppercase tracking-[0.13em] text-[#3B3541]">
//                     <Check
//                       size={15}
//                       strokeWidth={3}
//                       className="shrink-0 text-[#6254B4]"
//                     />

//                     {item}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT VISUAL ATLAS */}
//           <div className="sgw-services-hero-image sgw-services-delay-2">
//             <div className="grid border border-[#CFC8D9] bg-white shadow-[0_35px_100px_rgba(38,28,63,0.12)] lg:grid-cols-[88px_minmax(0,1fr)]">
//               {/* VERTICAL INDEX */}
//               <div className="hidden border-r border-[#D8D2DF] bg-[#18141F] text-white lg:flex lg:flex-col">
//                 <div className="flex min-h-[96px] items-center justify-center border-b border-white/10">
//                   <span className="-rotate-90 whitespace-nowrap text-[8px] font-black uppercase tracking-[0.28em] text-[#BDB6FF]">
//                     Service Directory
//                   </span>
//                 </div>

//                 <div className="flex flex-1 flex-col">
//                   {serviceIndex.map((service) => (
//                     <div
//                       key={service.number}
//                       className="group flex flex-1 items-center justify-center border-b border-white/10 last:border-b-0"
//                     >
//                       <span className="text-[17px] font-black tracking-[-0.03em] text-white/25 transition-colors duration-300 group-hover:text-[#BDB6FF]">
//                         {service.number}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* IMAGE AND CONTENT */}
//               <div className="relative min-h-[650px] overflow-hidden bg-[#18141F] sm:min-h-[760px]">
//                 <img
//                   src="/images/servicehero.webp"
//                   alt={`${LOCAL.company} pest control services in ${LOCAL.area}`}
//                   className="absolute inset-0 h-full w-full object-cover object-center"
//                   loading="eager"
//                   fetchPriority="high"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-[#18141F]/95 via-[#18141F]/25 to-[#18141F]/10" />

//                 <div className="absolute inset-0 bg-gradient-to-r from-[#18141F]/30 via-transparent to-[#6254B4]/20" />

//                 {/* TOP REFERENCE */}
//                 <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-4 border border-white/15 bg-[#18141F]/45 px-5 py-4 text-white backdrop-blur-lg sm:left-7 sm:right-7 sm:top-7">
//                   <div className="flex items-center gap-3">
//                     <ShieldCheck
//                       size={18}
//                       strokeWidth={2.5}
//                       className="text-[#D3CDFF]"
//                     />

//                     <span className="text-[8px] font-black uppercase tracking-[0.21em]">
//                       SuperGuard Westminster
//                     </span>
//                   </div>

//                   {/* <span className="text-[8px] font-black uppercase tracking-[0.18em] text-white/45">
//                     Service Ref · SGW-01
//                   </span> */}
//                 </div>

//                 {/* SERVICE INDEX PANEL */}
//                 {/* <div className="absolute right-5 top-24 hidden w-[280px] border border-white/15 bg-[#18141F]/55 text-white backdrop-blur-xl sm:right-7 sm:top-28 lg:block">
//                   <div className="flex items-center gap-3 border-b border-white/10 p-5">
//                     <SearchCheck
//                       size={20}
//                       strokeWidth={2.4}
//                       className="text-[#BDB6FF]"
//                     />

//                     <span className="text-[8px] font-black uppercase tracking-[0.21em] text-[#BDB6FF]">
//                       Service Categories
//                     </span>
//                   </div>

//                   {serviceIndex.map((service) => (
//                     <div
//                       key={service.number}
//                       className="grid grid-cols-[45px_1fr] border-b border-white/10 p-4 last:border-b-0"
//                     >
//                       <span className="text-[9px] font-black tracking-[0.16em] text-[#BDB6FF]">
//                         {service.number}
//                       </span>

//                       <div>
//                         <span className="block text-sm font-black text-white">
//                           {service.title}
//                         </span>

//                         <span className="mt-1 block text-[10px] font-medium leading-5 text-white/45">
//                           {service.text}
//                         </span>
//                       </div>
//                     </div>
//                   ))}
//                 </div> */}

//                 {/* BOTTOM IMAGE COPY */}
//                 <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:p-10">
//                   <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#D3CDFF]">
//                     Property-Based Pest Support
//                   </span>

//                   <h2 className="mt-4 max-w-[760px] text-[34px] font-black leading-[0.95] tracking-[-0.045em] text-white sm:text-[46px] lg:text-[58px]">
//                     The right service begins with understanding the
//                     property.
//                   </h2>

//                   <p className="mb-0 mt-5 max-w-[650px] text-sm font-medium leading-7 text-white/65 sm:text-base">
//                     Tell us where the activity is appearing, what signs
//                     you have noticed and the type of property requiring
//                     support.
//                   </p>
//                 </div>

//                 {/* LARGE MARK */}
//                 <span
//                   aria-hidden="true"
//                   className="pointer-events-none absolute bottom-5 right-7 hidden text-[95px] font-black leading-none tracking-[-0.08em] text-white/[0.055] xl:block"
//                 >
//                   SG
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* SERVICE NAVIGATION RAIL */}
//         <div className="sgw-services-hero-reveal sgw-services-delay-3 mt-12 border-y border-[#CFC8D9]">
//           <div className="grid lg:grid-cols-[250px_minmax(0,1fr)_90px]">
//             <div className="flex items-center gap-4 border-b border-[#CFC8D9] py-6 lg:border-b-0 lg:border-r lg:pr-7">
//               <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#6254B4] text-white">
//                 <Sparkles size={19} strokeWidth={2.5} />
//               </span>

//               <div>
//                 <span className="block text-[8px] font-black uppercase tracking-[0.22em] text-[#8B8491]">
//                   Continue below
//                 </span>

//                 <span className="mt-1 block text-sm font-black text-[#18141F]">
//                   Full service directory
//                 </span>
//               </div>
//             </div>

//             <div className="grid sm:grid-cols-2 xl:grid-cols-4">
//               {serviceIndex.map((service, index) => (
//                 <div
//                   key={service.number}
//                   className={`flex items-center gap-4 py-5 lg:px-6 ${
//                     index !== serviceIndex.length - 1
//                       ? "xl:border-r xl:border-[#CFC8D9]"
//                       : ""
//                   }`}
//                 >
//                   <span className="text-[9px] font-black tracking-[0.17em] text-[#6254B4]">
//                     {service.number}
//                   </span>

//                   <span className="text-[11px] font-black uppercase tracking-[0.11em] text-[#3A3440]">
//                     {service.title}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             <button
//               type="button"
//               onClick={scrollToServices}
//               aria-label="Scroll to pest control services"
//               className="group flex min-h-[74px] items-center justify-center border-t border-[#CFC8D9] bg-[#18141F] text-white transition-colors duration-300 hover:bg-[#6254B4] lg:border-l lg:border-t-0"
//             >
//               <ArrowDown
//                 size={21}
//                 strokeWidth={2.6}
//                 className="transition-transform duration-300 group-hover:translate-y-1"
//               />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }














// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   ArrowDown,
//   Phone,
//   MapPin,
//   ShieldCheck,
//   Check,
//   Sparkles,
// } from "lucide-react";

// export default function ServicesHeroSection() {
//   const LOCAL = {
//     company: "Superguard Services West Wickham",
//     area: "West Wickham",
//     city: "London",
//     postcode: "BR4 0QL",
//     address: "16 Ash Grove, West Wickham BR4 0QL",
//     phoneDisplay: "07356 270867",
//     phoneTel: "+447356270867",
//     email: "info@superguardwestwickham.uk",
//   };

//   const services = [
//     "Ant Control",
//     "Bed Bug Treatment",
//     "Carpet Moth Treatment",
//     "Carpet Beetle Control",
//     "Cockroach Control",
//     "Rats & Mice Control",
//   ];

//   const scrollToServices = () => {
//     const section =
//       document.getElementById("services-list") ||
//       document.getElementById("all-services") ||
//       document.getElementById("service-directory");

//     if (section) {
//       section.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   return (
//     <>
//       <style>{`
//         @keyframes sgFadeUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes sgImageReveal {
//           from {
//             opacity: 0;
//             transform: scale(1.08);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         @keyframes sgFloat {
//           0%,
//           100% {
//             transform: translateY(0);
//           }

//           50% {
//             transform: translateY(-8px);
//           }
//         }

//         @keyframes sgArrow {
//           0%,
//           100% {
//             transform: translateY(0);
//           }

//           50% {
//             transform: translateY(5px);
//           }
//         }

//         @keyframes sgPulse {
//           0%,
//           100% {
//             transform: scale(1);
//           }

//           50% {
//             transform: scale(1.06);
//           }
//         }

//         .sg-fade-up {
//           animation: sgFadeUp 850ms cubic-bezier(.16,1,.3,1) both;
//         }

//         .sg-fade-up-2 {
//           animation: sgFadeUp 850ms 120ms cubic-bezier(.16,1,.3,1) both;
//         }

//         .sg-fade-up-3 {
//           animation: sgFadeUp 850ms 240ms cubic-bezier(.16,1,.3,1) both;
//         }

//         .sg-fade-up-4 {
//           animation: sgFadeUp 850ms 360ms cubic-bezier(.16,1,.3,1) both;
//         }

//         .sg-image-reveal {
//           animation: sgImageReveal 1200ms cubic-bezier(.16,1,.3,1) both;
//         }

//         .sg-float {
//           animation: sgFloat 4s ease-in-out infinite;
//         }

//         .sg-arrow {
//           animation: sgArrow 2s ease-in-out infinite;
//         }

//         .sg-pulse {
//           animation: sgPulse 2.8s ease-in-out infinite;
//         }

//         .sg-image-circle {
//           transition:
//             transform 700ms cubic-bezier(.16,1,.3,1),
//             box-shadow 700ms ease;
//         }

//         .sg-image-circle:hover {
//           transform: scale(1.025);
//           box-shadow: 0 35px 90px rgba(96,85,166,.18);
//         }

//         .sg-service-card {
//           transition:
//             transform 300ms cubic-bezier(.16,1,.3,1),
//             background-color 300ms ease,
//             border-color 300ms ease;
//         }

//         .sg-service-card:hover {
//           transform: translateY(-4px);
//           background-color: #6055A6;
//           border-color: #6055A6;
//         }

//         .sg-service-card:hover .service-number,
//         .sg-service-card:hover .service-name,
//         .sg-service-card:hover .service-arrow {
//           color: white;
//         }

//         .sg-contact-item {
//           transition:
//             background-color 300ms ease,
//             transform 300ms ease;
//         }

//         .sg-contact-item:hover {
//           background-color: #6055A6;
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .sg-fade-up,
//           .sg-fade-up-2,
//           .sg-fade-up-3,
//           .sg-fade-up-4,
//           .sg-image-reveal,
//           .sg-float,
//           .sg-arrow,
//           .sg-pulse {
//             animation: none;
//           }

//           .sg-image-circle,
//           .sg-service-card,
//           .sg-contact-item {
//             transition: none;
//           }
//         }
//       `}</style>

//       <section className="relative overflow-hidden mt-32 bg-white text-[#6055A6]">

//         {/* =====================================================
//             HERO
//         ===================================================== */}

//         <div className="relative min-h-[760px] overflow-hidden">

//           {/* Decorative background circles */}

//           <div className="pointer-events-none absolute -left-48 -top-48 h-[600px] w-[600px] rounded-full border-[1px] border-[#6055A6]/10" />

//           <div className="pointer-events-none absolute -right-48 -bottom-48 h-[650px] w-[650px] rounded-full border-[1px] border-[#6055A6]/10" />

//           <div className="pointer-events-none absolute left-[7%] top-[25%] hidden h-2 w-2 rounded-full bg-[#6055A6] lg:block" />

//           <div className="pointer-events-none absolute right-[7%] top-[18%] hidden h-3 w-3 rotate-45 bg-[#6055A6]/40 lg:block" />

//           {/* =================================================
//               TOP BAR
//           ================================================= */}

//           <div className="relative z-30 border-b border-[#6055A6]/10 bg-white">

//             <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-5 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">

//               {/* Brand */}

//               <div className="flex items-center gap-3">

//                 <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6055A6] text-white">
//                   <ShieldCheck size={16} strokeWidth={2.5} />
//                 </div>

//                 <div>

//                   <span className="block text-[7px] font-black uppercase tracking-[.28em] text-[#6055A6]/50">
//                     Superguard Services
//                   </span>

//                   <span className="mt-0.5 block text-[9px] font-black uppercase tracking-[.18em] text-[#6055A6]">
//                     West Wickham
//                   </span>

//                 </div>

//               </div>

//               {/* Utility */}

//               <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[8px] font-black uppercase tracking-[.16em] text-[#6055A6]/55">

//                 <span className="flex items-center gap-2">
//                   <MapPin size={12} />
//                   {LOCAL.area}, {LOCAL.city}
//                 </span>

//                 <span className="hidden h-3 w-px bg-[#6055A6]/15 sm:block" />

//                 <span>{LOCAL.postcode}</span>

//                 <span className="hidden h-3 w-px bg-[#6055A6]/15 sm:block" />

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="flex items-center gap-2 text-[#6055A6] transition hover:text-[#6055A6]/70"
//                 >
//                   <Phone size={12} />
//                   {LOCAL.phoneDisplay}
//                 </a>

//               </div>

//             </div>

//           </div>

//           {/* =================================================
//               MAIN HERO CONTENT
//           ================================================= */}

//           <div className="relative z-10 mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">

//             <div className="grid items-center gap-16 lg:grid-cols-[1fr_1fr] lg:gap-20">

//               {/* =================================================
//                   LEFT — CENTERED TEXT
//               ================================================= */}

//               <div className="sg-fade-up flex flex-col items-center text-center">

//                 {/* Label */}

//                 <div className="mb-7 flex items-center justify-center gap-4">

//                   <span className="h-px w-10 bg-[#6055A6]" />

//                   <span className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[.32em] text-[#6055A6]">
//                     <Sparkles size={13} />
//                     Our Services
//                   </span>

//                   <span className="h-px w-10 bg-[#6055A6]" />

//                 </div>

//                 {/* Heading */}

//                 <h1 className="max-w-[760px] text-[55px] font-black leading-[.84] tracking-[-.075em] text-[#6055A6] sm:text-[76px] md:text-[90px] lg:text-[88px] xl:text-[108px]">

//                   Pest control

//                   <span className="block text-[#111111]">
//                     that makes
//                   </span>

//                   <span className="block">
//                     sense.
//                   </span>

//                 </h1>

//                 {/* Location */}

//                 <div className="sg-fade-up-2 mt-8 flex items-center justify-center gap-4">

//                   <span className="h-[2px] w-14 bg-[#6055A6]" />

//                   <span className="text-[8px] font-black uppercase tracking-[.3em] text-[#6055A6]/50">
//                     {LOCAL.area} · {LOCAL.city} · {LOCAL.postcode}
//                   </span>

//                   <span className="h-[2px] w-14 bg-[#6055A6]" />

//                 </div>

//                 {/* Description */}

//                 <p className="sg-fade-up-3 mx-auto mt-8 max-w-[650px] text-[15px] font-medium leading-8 text-[#6055A6]/65 sm:text-base">

//                   Professional pest control for homes, landlords,
//                   businesses and commercial properties throughout{" "}

//                   <strong className="font-black text-[#111111]">
//                     {LOCAL.area}
//                   </strong>{" "}

//                   and surrounding London areas.

//                 </p>

//                 <p className="sg-fade-up-3 mx-auto mt-4 max-w-[600px] text-sm font-medium leading-7 text-[#6055A6]/45">

//                   From insects and rodents to birds, wildlife and
//                   prevention, we help identify the problem and
//                   choose a practical way forward.

//                 </p>

//                 {/* Buttons */}

//                 <div className="sg-fade-up-4 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">

//                   <Link
//                     to="/contact-us"
//                     className="group flex min-h-[60px] min-w-[235px] items-center justify-between gap-10 bg-[#6055A6] px-7 text-[9px] font-black uppercase tracking-[.18em] text-white shadow-[0_18px_50px_rgba(96,85,166,.18)] transition duration-300 hover:-translate-y-1 hover:bg-[#6055A6]/90"
//                   >
//                     Book Pest Control

//                     <ArrowRight
//                       size={17}
//                       className="transition-transform duration-300 group-hover:translate-x-1"
//                     />

//                   </Link>

//                   <button
//                     type="button"
//                     onClick={scrollToServices}
//                     className="group flex min-h-[60px] min-w-[205px] items-center justify-between gap-8 border border-[#6055A6]/20 bg-white px-7 text-[9px] font-black uppercase tracking-[.18em] text-[#6055A6] transition duration-300 hover:-translate-y-1 hover:border-[#6055A6] hover:bg-[#6055A6] hover:text-white"
//                   >
//                     Explore Services

//                     <ArrowDown
//                       size={17}
//                       className="sg-arrow transition-transform"
//                     />

//                   </button>

//                 </div>

//                 {/* Trust */}

//                 <div className="sg-fade-up-4 mt-10 flex max-w-[680px] flex-wrap items-center justify-center gap-x-7 gap-y-4 border-t border-[#6055A6]/10 pt-6">

//                   {[
//                     "Residential",
//                     "Commercial",
//                     "Local Team",
//                     "Professional Service",
//                   ].map((item) => (

//                     <span
//                       key={item}
//                       className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[.14em] text-[#6055A6]/50"
//                     >
//                       <Check
//                         size={13}
//                         className="text-[#6055A6]"
//                       />
//                       {item}
//                     </span>

//                   ))}

//                 </div>

//               </div>

//               {/* =================================================
//                   RIGHT — CIRCULAR IMAGE
//               ================================================= */}

//               <div className="sg-fade-up-2 relative flex items-center justify-center">

//                 {/* Outer purple ring */}

//                 <div className="absolute h-[min(88vw,690px)] w-[min(88vw,690px)] max-h-[690px] max-w-[690px] rounded-full border border-[#6055A6]/15" />

//                 {/* Second ring */}

//                 <div className="absolute h-[min(78vw,610px)] w-[min(78vw,610px)] max-h-[610px] max-w-[610px] rounded-full border border-[#6055A6]/10" />

//                 {/* Main image circle */}

//                 <div className="sg-image-circle relative z-10 h-[min(78vw,570px)] w-[min(78vw,570px)] max-h-[570px] max-w-[570px] overflow-hidden rounded-full border-[10px] border-white shadow-[0_25px_80px_rgba(96,85,166,.14)] sm:border-[14px]">

//                   <img
//                     src="/images/servicehero.webp"
//                     alt={`${LOCAL.company} pest control services in ${LOCAL.area}, London`}
//                     className="sg-image-reveal h-full w-full object-cover object-center"
//                     loading="eager"
//                     fetchPriority="high"
//                   />

//                 </div>

//                 {/* Floating location badge */}

//                 <div className="sg-float absolute bottom-[5%] left-[4%] z-20 hidden items-center gap-3 border border-[#6055A6]/10 bg-white px-5 py-4 shadow-[0_20px_55px_rgba(96,85,166,.15)] sm:flex">

//                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6055A6] text-white">
//                     <MapPin size={16} />
//                   </div>

//                   <div>

//                     <span className="block text-[7px] font-black uppercase tracking-[.22em] text-[#6055A6]/45">
//                       Local Coverage
//                     </span>

//                     <span className="mt-1 block text-[10px] font-black uppercase tracking-[.12em] text-[#6055A6]">
//                       {LOCAL.area} · London
//                     </span>

//                   </div>

//                 </div>

//                 {/* Floating shield */}

//                 <div className="sg-pulse absolute right-[4%] top-[8%] z-20 flex h-14 w-14 items-center justify-center rounded-full bg-[#6055A6] text-white shadow-[0_15px_40px_rgba(96,85,166,.22)] sm:h-16 sm:w-16">

//                   <ShieldCheck size={23} />

//                 </div>

//                 {/* Small number */}

//                 <span className="absolute bottom-[12%] right-[8%] z-20 hidden text-[90px] font-black leading-none tracking-[-.12em] text-[#6055A6]/10 lg:block">
//                   01
//                 </span>

//               </div>

//             </div>

//           </div>



//         </div>

//       </section>
//     </>
//   );
// }













// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Phone,
//   MapPin,
//   ShieldCheck,
//   SearchCheck,
//   Home,
//   Building2,
// } from "lucide-react";

// export default function ServicesHeroSection() {
//   const LOCAL = {
//     company: "SuperGuard Services Chelsea",
//     shortName: "SuperGuard Chelsea",
//     area: "Chelsea",
//     city: "London",
//     postcode: "SW3 6NU",
//     address: "13 Guthrie St, London SW3 6NU, United Kingdom",
//     phoneDisplay: "07405 745692",
//     phoneTel: "+447405745692",
//   };

//   return (
//     <>
//       <style>{`
//         @keyframes chelseaRise {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes chelseaSlide {
//           from {
//             opacity: 0;
//             transform: translateX(35px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes chelseaFloat {
//           0%,
//           100% {
//             transform: translateY(0);
//           }

//           50% {
//             transform: translateY(-7px);
//           }
//         }

//         .chelsea-rise {
//           animation: chelseaRise .85s cubic-bezier(.16,1,.3,1) both;
//         }

//         .chelsea-rise-2 {
//           animation: chelseaRise .85s .12s cubic-bezier(.16,1,.3,1) both;
//         }

//         .chelsea-rise-3 {
//           animation: chelseaRise .85s .24s cubic-bezier(.16,1,.3,1) both;
//         }

//         .chelsea-rise-4 {
//           animation: chelseaRise .85s .36s cubic-bezier(.16,1,.3,1) both;
//         }

//         .chelsea-slide {
//           animation: chelseaSlide .95s .15s cubic-bezier(.16,1,.3,1) both;
//         }

//         .chelsea-float {
//           animation: chelseaFloat 5s ease-in-out infinite;
//         }

//         .image-zoom {
//           transition: transform 1s cubic-bezier(.16,1,.3,1);
//         }

//         .image-holder:hover .image-zoom {
//           transform: scale(1.06);
//         }

//         .property-card {
//           transition:
//             transform .4s cubic-bezier(.16,1,.3,1),
//             box-shadow .4s ease;
//         }

//         .property-card:hover {
//           transform: translateY(-6px);
//           box-shadow: 0 25px 65px rgba(36,33,45,.12);
//         }

//         .property-card:hover img {
//           transform: scale(1.05);
//         }

//         .property-card img {
//           transition: transform .8s cubic-bezier(.16,1,.3,1);
//         }

//         .chelsea-button {
//           transition:
//             transform .3s ease,
//             background-color .3s ease,
//             box-shadow .3s ease;
//         }

//         .chelsea-button:hover {
//           transform: translateY(-2px);
//           background-color: #51478F;
//           box-shadow: 0 18px 40px rgba(96,85,166,.24);
//         }

//         .chelsea-outline {
//           transition:
//             border-color .3s ease,
//             color .3s ease,
//             transform .3s ease;
//         }

//         .chelsea-outline:hover {
//           border-color: #A59ED8;
//           color: #A59ED8;
//           transform: translateY(-2px);
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .chelsea-rise,
//           .chelsea-rise-2,
//           .chelsea-rise-3,
//           .chelsea-rise-4,
//           .chelsea-slide,
//           .chelsea-float {
//             animation: none;
//           }

//           .image-zoom,
//           .property-card,
//           .property-card img,
//           .chelsea-button,
//           .chelsea-outline {
//             transition: none;
//           }
//         }
//       `}</style>

//       <main className="mt-32 overflow-hidden bg-[#F7F6FA] text-[#15131A]">

//         {/* =====================================================
//             HERO
//         ===================================================== */}

//         <section className="relative bg-[#6055A6] text-white">

//           {/* background architecture */}

//           <div className="pointer-events-none absolute left-[7%] top-0 hidden h-full w-px bg-white/[.06] lg:block" />

//           <div className="pointer-events-none absolute right-[12%] top-0 hidden h-full w-px bg-white/[.06] lg:block" />

//           <div className="pointer-events-none absolute bottom-[18%] left-0 h-px w-[30%] bg-[#A59ED8]/20" />

//           <div className="pointer-events-none absolute right-[18%] top-[18%] h-[260px] w-[260px] rounded-full border border-[#A59ED8]/[.07]" />

//           <div className="relative mx-auto max-w-[1550px] px-5 pb-16 pt-7 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24 lg:pt-8">

//             {/* top bar */}

//             <div className="chelsea-rise flex items-center justify-between border-b border-white/10 pb-5">

//               <div className="flex items-center gap-3">

//                 <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#A59ED8]/30 text-[#A59ED8]">
//                   <ShieldCheck size={14} />
//                 </div>

//                 <span className="text-[8px] font-black uppercase tracking-[.28em] text-white/65">
//                   SuperGuard Services
//                 </span>

//               </div>

//               <div className="hidden items-center gap-5 sm:flex">

//                 <span className="text-[8px] font-black uppercase tracking-[.2em] text-white/30">
//                   Pest control
//                 </span>

//                 <span className="h-3 w-px bg-white/10" />

//                 <span className="text-[8px] font-black uppercase tracking-[.2em] text-[#A59ED8]">
//                   SW3 · Chelsea
//                 </span>

//               </div>

//             </div>


//             {/* main hero */}

//             <div className="relative grid gap-12 pt-12 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:gap-20 lg:pt-16">

//               {/* left content */}

//               <div className="relative z-10">

//                 <div className="chelsea-rise-2 flex items-center gap-3">

//                   <span className="h-px w-10 bg-[#A59ED8]" />

//                   <span className="text-[8px] font-black uppercase tracking-[.3em] text-[#A59ED8]">
//                     Services in {LOCAL.area}
//                   </span>

//                 </div>


//                 <h1 className="chelsea-rise-3 mt-7 max-w-[800px] text-[54px] font-black leading-[.87] tracking-[-.07em] text-white sm:text-[70px] md:text-[82px] lg:text-[88px] xl:text-[101px]">

//                   The right

//                   <span className="block text-[#A59ED8]">
//                     response.
//                   </span>

//                   <span className="block">
//                     Not guesswork.
//                   </span>

//                 </h1>


//                 <p className="chelsea-rise-4 mt-8 max-w-[610px] text-sm leading-7 text-white/48 sm:text-[15px] sm:leading-8">

//                   Practical pest control support for homes,
//                   landlords, businesses and commercial properties
//                   across Chelsea and nearby areas.

//                 </p>


//                 {/* buttons */}

//                 <div className="chelsea-rise-4 mt-9 flex flex-col gap-3 sm:flex-row">

//                   <Link
//                     to="/contact-us"
//                     className="chelsea-button group flex min-h-[56px] items-center justify-between gap-12 rounded-full bg-[#6055A6] px-7 text-[9px] font-black uppercase tracking-[.2em] text-white"
//                   >

//                     Get help with a pest problem

//                     <ArrowRight
//                       size={15}
//                       className="transition-transform duration-300 group-hover:translate-x-1"
//                     />

//                   </Link>


//                   <a
//                     href={`tel:${LOCAL.phoneTel}`}
//                     className="chelsea-outline group flex min-h-[56px] items-center justify-between gap-10 rounded-full border border-white/15 px-7 text-[9px] font-black uppercase tracking-[.2em] text-white"
//                   >

//                     <span className="flex items-center gap-3">

//                       <Phone size={14} />

//                       {LOCAL.phoneDisplay}

//                     </span>

//                     <ArrowUpRight
//                       size={15}
//                       className="transition-transform duration-300 group-hover:translate(3px,-3px)"
//                     />

//                   </a>

//                 </div>

//               </div>


//               {/* right image composition */}

//               <div className="chelsea-slide relative mx-auto w-full max-w-[560px] lg:ml-auto">

//                 {/* outer frame */}

//                 <div className="absolute -right-5 -top-5 h-[92%] w-[78%] rounded-[180px_180px_30px_30px] border border-[#A59ED8]/15 sm:-right-8 sm:-top-8" />


//                 {/* image */}

//                 <div className="image-holder relative ml-auto h-[480px] w-[78%] overflow-hidden rounded-[180px_180px_20px_20px] bg-[#24212D] sm:h-[570px] lg:h-[620px]">

//                   <img
//                     src="/images/servicehero.webp"
//                     alt={`${LOCAL.company} pest control services in ${LOCAL.area}`}
//                     className="image-zoom h-full w-full object-cover"
//                     loading="eager"
//                     fetchPriority="high"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-[#15131A]/75 via-transparent to-[#15131A]/5" />

//                 </div>


//                 {/* floating card */}

//                 <div className="chelsea-float absolute bottom-8 left-0 z-10 w-[245px] sm:w-[280px]">

//                   <div className="rounded-[24px] border border-[#24212D]/10 bg-white p-5 text-[#24212D] shadow-[0_25px_70px_rgba(0,0,0,.25)]">

//                     <div className="flex items-start justify-between">

//                       <div>

//                         <span className="text-[7px] font-black uppercase tracking-[.25em] text-[#6055A6]">
//                           Service approach
//                         </span>

//                         <h2 className="mt-2 text-[17px] font-black tracking-[-.035em]">
//                           Inspect first.
//                         </h2>

//                       </div>

//                       <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F7F6FA] text-[#6055A6]">
//                         <SearchCheck size={16} />
//                       </div>

//                     </div>


//                     <div className="mt-5 flex items-center gap-2">

//                       <div className="h-1.5 flex-1 rounded-full bg-[#6055A6]" />

//                       <div className="h-1.5 w-7 rounded-full bg-[#A59ED8]" />

//                       <div className="h-1.5 w-3 rounded-full bg-[#24212D]/10" />

//                     </div>


//                     <p className="mt-4 text-[10px] font-medium leading-5 text-[#77737C]">
//                       Identify the issue, understand the property,
//                       then determine the appropriate response.
//                     </p>

//                   </div>

//                 </div>


//                 {/* vertical label */}

//                 <div className="absolute right-[-38px] top-1/2 hidden -translate-y-1/2 rotate-90 lg:block">

//                   <span className="text-[7px] font-black uppercase tracking-[.4em] text-white/25">
//                     Property protection · Chelsea · London
//                   </span>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </section>


//         {/* =====================================================
//             PROPERTY TYPES
//         ===================================================== */}

//         <section className="bg-white">

//           <div className="mx-auto max-w-[1550px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

//             <div className="mb-14 flex flex-col gap-6 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">

//               <div>

//                 <span className="text-[8px] font-black uppercase tracking-[.28em] text-[#6055A6]">
//                   Every property is different
//                 </span>

//                 <h2 className="mt-5 max-w-[700px] text-[42px] font-black leading-[.94] tracking-[-.06em] text-[#24212D] sm:text-[58px]">

//                   Support for the places

//                   <span className="text-[#6055A6]">
//                     {" "}people use every day.
//                   </span>

//                 </h2>

//               </div>


//               <p className="max-w-[350px] text-sm leading-7 text-[#77737C]">
//                 From private homes to working premises, pest control
//                 needs to fit the property as well as the problem.
//               </p>

//             </div>


//             <div className="grid gap-5 lg:grid-cols-[1.2fr_.8fr]">

//               {/* residential */}

//               <div className="property-card group relative overflow-hidden rounded-[30px] bg-[#24212D]">

//                 <div className="image-holder relative h-[420px] overflow-hidden sm:h-[500px]">

//                   <img
//                     src="/images/about-story.webp"
//                     alt={`Residential pest control support in ${LOCAL.area}`}
//                     className="h-full w-full object-cover"
//                     loading="lazy"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-[#15131A]/85 via-[#15131A]/15 to-transparent" />

//                 </div>


//                 <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">

//                   <div className="flex items-end justify-between gap-6">

//                     <div>

//                       <span className="text-[7px] font-black uppercase tracking-[.25em] text-[#A59ED8]">
//                         01 · Residential
//                       </span>

//                       <h3 className="mt-3 text-[27px] font-black tracking-[-.04em] text-white sm:text-[34px]">
//                         Homes & flats
//                       </h3>

//                       <p className="mt-2 max-w-[470px] text-[11px] leading-5 text-white/48">
//                         Support for homeowners, tenants and residential
//                         properties experiencing pest activity.
//                       </p>

//                     </div>


//                     <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#6055A6] sm:flex">
//                       <ArrowUpRight size={16} />
//                     </div>

//                   </div>

//                 </div>

//               </div>


//               {/* commercial */}

//               <div className="property-card group flex flex-col overflow-hidden rounded-[30px] bg-[#F7F6FA]">

//                 <div className="image-holder h-[250px] overflow-hidden sm:h-[300px]">

//                   <img
//                     src="/images/mission-superguard.webp"
//                     alt={`Commercial pest control support in ${LOCAL.area}`}
//                     className="h-full w-full object-cover"
//                     loading="lazy"
//                   />

//                 </div>


//                 <div className="flex flex-1 flex-col justify-between p-7 sm:p-9">

//                   <div>

//                     <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#6055A6] shadow-sm">
//                       <Building2 size={17} />
//                     </div>

//                     <span className="mt-7 block text-[7px] font-black uppercase tracking-[.25em] text-[#6055A6]">
//                       02 · Commercial
//                     </span>

//                     <h3 className="mt-3 text-[28px] font-black tracking-[-.045em] text-[#24212D]">
//                       Businesses
//                     </h3>

//                     <p className="mt-3 max-w-[380px] text-[12px] leading-6 text-[#77737C]">
//                       Pest control support for workplaces, commercial
//                       premises and managed properties.
//                     </p>

//                   </div>


//                   <div className="mt-8 flex items-center justify-between border-t border-[#24212D]/10 pt-5">

//                     <span className="text-[7px] font-black uppercase tracking-[.2em] text-[#24212D]/35">
//                       Chelsea & nearby
//                     </span>

//                     <ArrowUpRight
//                       size={16}
//                       className="text-[#6055A6]"
//                     />

//                   </div>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </section>


//         {/* =====================================================
//             LOCAL CHELSEA
//         ===================================================== */}

//         <section className="bg-[#6055A6] text-white">

//           <div className="mx-auto max-w-[1550px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

//             <div className="grid gap-14 lg:grid-cols-[1fr_.8fr] lg:items-center lg:gap-24">

//               <div>

//                 <div className="flex items-center gap-3">

//                   <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20">
//                     <MapPin size={14} />
//                   </span>

//                   <span className="text-[8px] font-black uppercase tracking-[.3em] text-white/60">
//                     Local service area
//                   </span>

//                 </div>


//                 <h2 className="mt-7 max-w-[760px] text-[45px] font-black leading-[.92] tracking-[-.06em] sm:text-[64px]">

//                   Chelsea is local.

//                   <span className="block text-[#A59ED8]">
//                     Your property matters.
//                   </span>

//                 </h2>


//                 <p className="mt-7 max-w-[590px] text-sm leading-7 text-white/60 sm:text-[15px] sm:leading-8">

//                   SuperGuard Services Chelsea provides pest control
//                   support across Chelsea and nearby areas from its
//                   London base at {LOCAL.address}.

//                 </p>

//               </div>


//               <div className="relative">

//                 {/* postcode badge */}

//                 <div className="absolute -right-2 -top-8 hidden h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-[#51478F] text-center sm:flex">

//                   <div>

//                     <span className="block text-[6px] font-black uppercase tracking-[.2em] text-white/40">
//                       Area
//                     </span>

//                     <span className="mt-1 block text-[11px] font-black">
//                       SW3
//                     </span>

//                   </div>

//                 </div>


//                 <div className="rounded-[28px] border border-white/10 bg-[#51478F]/70 p-7 sm:p-9">

//                   <span className="text-[7px] font-black uppercase tracking-[.25em] text-white/35">
//                     Chelsea base
//                   </span>


//                   <div className="mt-6 flex gap-4">

//                     <MapPin
//                       size={18}
//                       className="mt-1 shrink-0 text-[#A59ED8]"
//                     />

//                     <p className="text-[14px] font-bold leading-7 text-white/75">
//                       {LOCAL.address}
//                     </p>

//                   </div>


//                   <div className="mt-7 border-t border-white/10 pt-6">

//                     <span className="block text-[7px] font-black uppercase tracking-[.23em] text-white/30">
//                       Speak with the team
//                     </span>

//                     <a
//                       href={`tel:${LOCAL.phoneTel}`}
//                       className="mt-3 flex items-center gap-3 text-[23px] font-black tracking-[-.035em] text-white transition hover:text-[#A59ED8]"
//                     >

//                       <Phone size={18} className="text-[#A59ED8]" />

//                       {LOCAL.phoneDisplay}

//                     </a>

//                   </div>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </section>


//         {/* =====================================================
//             FINAL CTA
//         ===================================================== */}

//         <section className="bg-[#F7F6FA]">

//           <div className="mx-auto max-w-[1550px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

//             <div className="relative overflow-hidden rounded-[34px] bg-[#24212D] px-7 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">

//               {/* abstract circles */}

//               <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border border-[#A59ED8]/10" />

//               <div className="pointer-events-none absolute -right-8 -top-16 h-52 w-52 rounded-full border border-[#A59ED8]/10" />

//               <div className="pointer-events-none absolute bottom-0 right-[27%] h-px w-[180px] bg-[#A59ED8]/20" />


//               <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

//                 <div>

//                   <span className="text-[8px] font-black uppercase tracking-[.3em] text-[#A59ED8]">
//                     SuperGuard Services Chelsea
//                   </span>

//                   <h2 className="mt-5 max-w-[800px] text-[40px] font-black leading-[.95] tracking-[-.06em] text-white sm:text-[57px]">

//                     Something not right

//                     <span className="text-[#A59ED8]">
//                       {" "}at your property?
//                     </span>

//                   </h2>

//                   <p className="mt-5 max-w-[560px] text-sm leading-7 text-white/40">
//                     Tell us what you've noticed and start a conversation
//                     about the pest problem.
//                   </p>

//                 </div>


//                 <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">

//                   <Link
//                     to="/contact-us"
//                     className="chelsea-button group flex min-h-[56px] min-w-[240px] items-center justify-between gap-8 rounded-full bg-[#6055A6] px-7 text-[9px] font-black uppercase tracking-[.19em] text-white"
//                   >

//                     Contact SuperGuard

//                     <ArrowRight
//                       size={15}
//                       className="transition-transform group-hover:translate-x-1"
//                     />

//                   </Link>


//                   <a
//                     href={`tel:${LOCAL.phoneTel}`}
//                     className="flex min-h-[56px] min-w-[240px] items-center justify-between rounded-full border border-white/12 px-7 text-[9px] font-black uppercase tracking-[.17em] text-white transition hover:border-[#A59ED8] hover:text-[#A59ED8]"
//                   >

//                     <span className="flex items-center gap-3">

//                       <Phone size={14} />

//                       {LOCAL.phoneDisplay}

//                     </span>

//                     <ArrowUpRight size={14} />

//                   </a>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </section>

//       </main>
//     </>
//   );
// }














// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Phone,
//   MapPin,
//   ShieldCheck,
//   SearchCheck,
//   Home,
//   Building2,
//   Bug,
//   Check,
//   LocateFixed,
// } from "lucide-react";

// export default function ServicesHeroSection() {
//   const LOCAL = {
//     company: "SuperGuard Services Woolwich",
//     shortName: "SuperGuard Woolwich",
//     area: "Woolwich",
//     city: "London",
//     postcode: "SE18 3QJ",
//     streetAddress: "41 Ripon Rd",
//     address: "41 Ripon Rd, London SE18 3QJ, United Kingdom",
//     phoneDisplay: "07356 230776",
//     phoneTel: "+447356230776",
//   };

//   const servicePoints = [
//     "Domestic pest problems",
//     "Commercial premises",
//     "Landlord & managed properties",
//     "Inspection-led treatment",
//   ];

//   return (
//     <>
//       <style>{`
//         @keyframes woolwichFade {
//           from {
//             opacity: 0;
//             transform: translateY(24px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes woolwichReveal {
//           from {
//             opacity: 0;
//             transform: translateX(-35px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes woolwichImage {
//           from {
//             opacity: 0;
//             transform: scale(1.06);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         .woolwich-fade {
//           animation: woolwichFade .8s cubic-bezier(.16,1,.3,1) both;
//         }

//         .woolwich-fade-2 {
//           animation: woolwichFade .8s .12s cubic-bezier(.16,1,.3,1) both;
//         }

//         .woolwich-fade-3 {
//           animation: woolwichFade .8s .24s cubic-bezier(.16,1,.3,1) both;
//         }

//         .woolwich-reveal {
//           animation: woolwichReveal .95s .1s cubic-bezier(.16,1,.3,1) both;
//         }

//         .woolwich-image {
//           animation: woolwichImage 1.1s .15s cubic-bezier(.16,1,.3,1) both;
//         }

//         .service-image {
//           transition: transform 1s cubic-bezier(.16,1,.3,1);
//         }

//         .service-image-wrap:hover .service-image {
//           transform: scale(1.045);
//         }

//         .service-row {
//           transition:
//             background-color .35s ease,
//             transform .35s ease,
//             border-color .35s ease;
//         }

//         .service-row:hover {
//           transform: translateX(6px);
//           background-color: #F7F6FA;
//           border-color: rgba(96,85,166,.15);
//         }

//         .service-row:hover .service-arrow {
//           transform: translate(3px,-3px);
//         }

//         .service-arrow {
//           transition: transform .3s ease;
//         }

//         .woolwich-link {
//           transition:
//             transform .3s ease,
//             background-color .3s ease,
//             box-shadow .3s ease;
//         }

//         .woolwich-link:hover {
//           transform: translateY(-2px);
//           background-color: #51478F;
//           box-shadow: 0 18px 40px rgba(96,85,166,.25);
//         }

//         .property-tile {
//           transition:
//             transform .4s cubic-bezier(.16,1,.3,1),
//             box-shadow .4s ease;
//         }

//         .property-tile:hover {
//           transform: translateY(-7px);
//           box-shadow: 0 28px 70px rgba(36,33,45,.13);
//         }

//         .property-tile img {
//           transition: transform .8s cubic-bezier(.16,1,.3,1);
//         }

//         .property-tile:hover img {
//           transform: scale(1.05);
//         }

//         .hero-image-frame {
//           position: relative;
//           overflow: hidden;
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .woolwich-fade,
//           .woolwich-fade-2,
//           .woolwich-fade-3,
//           .woolwich-reveal,
//           .woolwich-image {
//             animation: none;
//           }

//           .service-image,
//           .service-row,
//           .property-tile,
//           .property-tile img,
//           .woolwich-link {
//             transition: none;
//           }
//         }
//       `}</style>

//       <main className="mt-32 overflow-hidden bg-[#F7F6FA] text-[#24212D]">

//         {/* =====================================================
//             HERO
//         ===================================================== */}

//         <section className="bg-[#F7F6FA]">

//           <div className="mx-auto max-w-[1550px] px-5 pb-20 pt-8 sm:px-8 lg:px-12 lg:pb-28">

//             {/* TOP LINE */}

//             <div className="woolwich-fade flex items-center justify-between border-b border-[#24212D]/10 pb-5">

//               <div className="flex items-center gap-3">

//                 <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6055A6] text-white">
//                   <ShieldCheck size={15} />
//                 </div>

//                 <span className="text-[8px] font-black uppercase tracking-[.28em] text-[#24212D]/55">
//                   SuperGuard Services
//                 </span>

//               </div>

//               <div className="hidden items-center gap-4 sm:flex">

//                 <span className="text-[8px] font-black uppercase tracking-[.22em] text-[#24212D]/30">
//                   London pest control
//                 </span>

//                 <span className="h-3 w-px bg-[#24212D]/10" />

//                 <span className="text-[8px] font-black uppercase tracking-[.22em] text-[#6055A6]">
//                   {LOCAL.postcode}
//                 </span>

//               </div>

//             </div>


//             {/* HERO CONTENT */}

//             <div className="pt-12 lg:pt-16">

//               <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end lg:gap-20">

//                 {/* LEFT CONTENT */}

//                 <div className="woolwich-reveal">

//                   <div className="mb-7 flex items-center gap-3">

//                     <span className="h-1.5 w-1.5 rounded-full bg-[#6055A6]" />

//                     <span className="text-[8px] font-black uppercase tracking-[.3em] text-[#6055A6]">
//                       Pest control in {LOCAL.area}
//                     </span>

//                   </div>


//                   <h1 className="max-w-[900px] text-[58px] font-black leading-[.84] tracking-[-.075em] text-[#24212D] sm:text-[78px] md:text-[92px] lg:text-[100px] xl:text-[116px]">

//                     Problems

//                     <span className="block text-[#6055A6]">
//                       found.
//                     </span>

//                     <span className="block">
//                       Solutions
//                     </span>

//                     <span className="block">
//                       planned.
//                     </span>

//                   </h1>

//                 </div>


//                 {/* RIGHT INTRO */}

//                 <div className="woolwich-fade-2 pb-2 lg:pb-3">

//                   <div className="border-l-2 border-[#6055A6] pl-6">

//                     <span className="text-[8px] font-black uppercase tracking-[.3em] text-[#24212D]/35">
//                       Local pest control support
//                     </span>

//                     <p className="mt-5 max-w-[430px] text-[14px] leading-7 text-[#77737C] sm:text-[15px] sm:leading-8">

//                       Practical pest control support for homes,
//                       businesses and managed properties across
//                       Woolwich and nearby London areas.

//                     </p>

//                   </div>


//                   <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">

//                     <Link
//                       to="/contact-us"
//                       className="woolwich-link group flex min-h-[56px] items-center justify-between gap-12 rounded-[6px] bg-[#6055A6] px-7 text-[9px] font-black uppercase tracking-[.2em] text-white"
//                     >

//                       Get help with a pest problem

//                       <ArrowRight
//                         size={15}
//                         className="transition-transform duration-300 group-hover:translate-x-1"
//                       />

//                     </Link>


//                     <a
//                       href={`tel:${LOCAL.phoneTel}`}
//                       className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[.15em] text-[#24212D] transition hover:text-[#6055A6]"
//                     >

//                       <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#24212D]/10">
//                         <Phone size={14} />
//                       </span>

//                       {LOCAL.phoneDisplay}

//                     </a>

//                   </div>

//                 </div>

//               </div>


//               {/* =================================================
//                   NEW IMAGE PLACEMENT
//                   Wide editorial banner — no floating badge
//               ================================================= */}

//               <div className="woolwich-fade-2 mt-14 lg:mt-20">

//                 <div className="hero-image-frame service-image-wrap">

//                   <div className="relative h-[270px] overflow-hidden rounded-[4px] bg-[#24212D] sm:h-[390px] lg:h-[520px]">

//                     <img
//                       src="/images/servicehero.webp"
//                       alt={`${LOCAL.company} pest control services in ${LOCAL.area}`}
//                       className="woolwich-image service-image h-full w-full object-cover"
//                       loading="eager"
//                       fetchPriority="high"
//                     />

//                     {/* subtle overlay */}

//                     <div className="absolute inset-0 bg-gradient-to-r from-[#15131A]/55 via-transparent to-[#15131A]/15" />


//                     {/* TOP LEFT LABEL */}

//                     <div className="absolute left-5 top-5 sm:left-8 sm:top-8">

//                       <div className="flex items-center gap-3 bg-white px-4 py-3 shadow-xl">

//                         <span className="h-2 w-2 rounded-full bg-[#6055A6]" />

//                         <span className="text-[7px] font-black uppercase tracking-[.2em] text-[#24212D]">
//                           Woolwich · London
//                         </span>

//                       </div>

//                     </div>


//                     {/* BOTTOM INFORMATION */}

//                     <div className="absolute bottom-0 left-0 right-0">

//                       <div className="grid border-t border-white/15 bg-[#15131A]/55 backdrop-blur-sm sm:grid-cols-3">

//                         <div className="border-b border-white/10 px-5 py-5 sm:border-b-0 sm:border-r sm:px-7">

//                           <span className="text-[7px] font-black uppercase tracking-[.25em] text-white/40">
//                             Area
//                           </span>

//                           <p className="mt-2 text-[13px] font-black text-white">
//                             {LOCAL.area}
//                           </p>

//                         </div>


//                         <div className="border-b border-white/10 px-5 py-5 sm:border-b-0 sm:border-r sm:px-7">

//                           <span className="text-[7px] font-black uppercase tracking-[.25em] text-white/40">
//                             Postcode
//                           </span>

//                           <p className="mt-2 text-[13px] font-black text-white">
//                             {LOCAL.postcode}
//                           </p>

//                         </div>


//                         <div className="px-5 py-5 sm:px-7">

//                           <span className="text-[7px] font-black uppercase tracking-[.25em] text-white/40">
//                             Local team
//                           </span>

//                           <p className="mt-2 text-[13px] font-black text-white">
//                             SuperGuard Woolwich
//                           </p>

//                         </div>

//                       </div>

//                     </div>

//                   </div>

//                 </div>


//                 {/* IMAGE FOOTER */}

//                 <div className="grid border-b border-[#24212D]/10 sm:grid-cols-[1fr_auto]">

//                   <div className="flex items-center gap-3 py-5">

//                     <SearchCheck
//                       size={16}
//                       className="text-[#6055A6]"
//                     />

//                     <span className="text-[9px] font-black uppercase tracking-[.18em] text-[#24212D]/45">
//                       Inspection-led pest control support
//                     </span>

//                   </div>


//                   <div className="hidden items-center gap-2 border-l border-[#24212D]/10 px-6 sm:flex">

//                     <span className="h-1.5 w-1.5 rounded-full bg-[#6055A6]" />

//                     <span className="text-[8px] font-black uppercase tracking-[.18em] text-[#24212D]/35">
//                       SE18
//                     </span>

//                   </div>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </section>


//         {/* =====================================================
//             INTRO / SERVICE APPROACH
//         ===================================================== */}

//         <section className="bg-[#24212D] text-white">

//           <div className="mx-auto max-w-[1550px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

//             <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">

//               <div>

//                 <span className="text-[8px] font-black uppercase tracking-[.3em] text-[#A59ED8]">
//                   The SuperGuard approach
//                 </span>

//                 <h2 className="mt-6 text-[43px] font-black leading-[.92] tracking-[-.06em] sm:text-[60px]">

//                   Every property

//                   <span className="block text-[#A59ED8]">
//                     tells a story.
//                   </span>

//                 </h2>

//               </div>


//               <div>

//                 <p className="max-w-[720px] text-[15px] leading-8 text-white/55 sm:text-[17px] sm:leading-9">

//                   Pest problems can look different from one property
//                   to another. Our approach starts with understanding
//                   what is happening, where it is happening and what
//                   the property needs next.

//                 </p>


//                 <div className="mt-10 grid gap-0 border-t border-white/10 sm:grid-cols-2">

//                   {servicePoints.map((item) => (

//                     <div
//                       key={item}
//                       className="flex items-center gap-4 border-b border-white/10 py-5 sm:pr-8"
//                     >

//                       <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#6055A6] text-white">
//                         <Check size={13} />
//                       </span>

//                       <span className="text-[11px] font-bold text-white/70">
//                         {item}
//                       </span>

//                     </div>

//                   ))}

//                 </div>

//               </div>

//             </div>

//           </div>

//         </section>


//         {/* =====================================================
//             PROPERTY TYPES
//         ===================================================== */}

//         <section className="bg-white">

//           <div className="mx-auto max-w-[1550px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

//             <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">

//               <div>

//                 <span className="text-[8px] font-black uppercase tracking-[.3em] text-[#6055A6]">
//                   Where we help
//                 </span>

//                 <h2 className="mt-6 text-[43px] font-black leading-[.9] tracking-[-.065em] text-[#24212D] sm:text-[59px]">

//                   One service.

//                   <span className="block text-[#6055A6]">
//                     Different spaces.
//                   </span>

//                 </h2>

//                 <p className="mt-7 max-w-[390px] text-sm leading-7 text-[#77737C]">

//                   Whether the issue is inside a home or affecting
//                   a working premises, the response needs to suit
//                   the environment.

//                 </p>

//               </div>


//               <div className="space-y-3">

//                 {/* RESIDENTIAL */}

//                 <div className="property-tile group grid overflow-hidden border border-[#24212D]/10 bg-[#F7F6FA] md:grid-cols-[.72fr_1.28fr]">

//                   <div className="service-image-wrap h-[260px] overflow-hidden md:h-[330px]">

//                     <img
//                       src="/images/about-story.webp"
//                       alt={`Residential pest control in ${LOCAL.area}`}
//                       className="service-image h-full w-full object-cover"
//                       loading="lazy"
//                     />

//                   </div>


//                   <div className="flex flex-col justify-between p-7 sm:p-9">

//                     <div>

//                       <div className="flex items-center justify-between">

//                         <span className="text-[7px] font-black uppercase tracking-[.25em] text-[#6055A6]">
//                           01 · Residential
//                         </span>

//                         <Home
//                           size={18}
//                           className="text-[#6055A6]"
//                         />

//                       </div>

//                       <h3 className="mt-7 text-[31px] font-black tracking-[-.05em] text-[#24212D]">
//                         Homes & flats
//                       </h3>

//                       <p className="mt-4 max-w-[430px] text-[12px] leading-6 text-[#77737C]">

//                         Pest control support for homeowners, tenants
//                         and residential properties across Woolwich
//                         and nearby areas.

//                       </p>

//                     </div>


//                     <div className="mt-8 flex items-center gap-3 text-[8px] font-black uppercase tracking-[.2em] text-[#24212D]/35">

//                       <span className="h-1.5 w-1.5 rounded-full bg-[#6055A6]" />

//                       Residential support

//                     </div>

//                   </div>

//                 </div>


//                 {/* COMMERCIAL */}

//                 <div className="property-tile group grid overflow-hidden border border-[#24212D]/10 bg-[#24212D] md:grid-cols-[1.28fr_.72fr]">

//                   <div className="order-2 flex flex-col justify-between p-7 text-white sm:p-9 md:order-1">

//                     <div>

//                       <div className="flex items-center justify-between">

//                         <span className="text-[7px] font-black uppercase tracking-[.25em] text-[#A59ED8]">
//                           02 · Commercial
//                         </span>

//                         <Building2
//                           size={18}
//                           className="text-[#A59ED8]"
//                         />

//                       </div>

//                       <h3 className="mt-7 text-[31px] font-black tracking-[-.05em]">
//                         Businesses
//                       </h3>

//                       <p className="mt-4 max-w-[440px] text-[12px] leading-6 text-white/45">

//                         Practical pest control support for workplaces,
//                         shops, commercial premises and managed properties.

//                       </p>

//                     </div>


//                     <div className="mt-8 flex items-center gap-3 text-[8px] font-black uppercase tracking-[.2em] text-white/30">

//                       <span className="h-1.5 w-1.5 rounded-full bg-[#A59ED8]" />

//                       Commercial support

//                     </div>

//                   </div>


//                   <div className="service-image-wrap order-1 h-[260px] overflow-hidden md:order-2 md:h-[330px]">

//                     <img
//                       src="/images/mission-superguard.webp"
//                       alt={`Commercial pest control in ${LOCAL.area}`}
//                       className="service-image h-full w-full object-cover"
//                       loading="lazy"
//                     />

//                   </div>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </section>


//         {/* =====================================================
//             WOOLWICH LOCAL AREA
//         ===================================================== */}

//         <section className="bg-[#6055A6] text-white">

//           <div className="mx-auto max-w-[1550px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

//             <div className="grid gap-14 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:gap-20">

//               <div className="relative">

//                 <div className="absolute -left-5 -top-7 hidden text-[120px] font-black leading-none tracking-[-.1em] text-white/[.035] lg:block">
//                   SE18
//                 </div>

//                 <div className="relative">

//                   <div className="flex items-center gap-3">

//                     <LocateFixed
//                       size={16}
//                       className="text-[#A59ED8]"
//                     />

//                     <span className="text-[8px] font-black uppercase tracking-[.3em] text-white/55">
//                       Based in Woolwich
//                     </span>

//                   </div>


//                   <h2 className="mt-7 max-w-[760px] text-[47px] font-black leading-[.9] tracking-[-.065em] sm:text-[68px]">

//                     Local knowledge.

//                     <span className="block text-[#A59ED8]">
//                       Straightforward support.
//                     </span>

//                   </h2>


//                   <p className="mt-7 max-w-[620px] text-sm leading-7 text-white/55 sm:text-[15px] sm:leading-8">

//                     {LOCAL.shortName} provides pest control support
//                     across {LOCAL.area} and nearby London areas from
//                     its local base at {LOCAL.streetAddress}.

//                   </p>

//                 </div>

//               </div>


//               <div className="relative">

//                 <div className="absolute -right-3 -top-3 flex h-20 w-20 items-center justify-center rounded-full bg-[#A59ED8] text-[#24212D] shadow-xl">

//                   <div className="text-center">

//                     <span className="block text-[6px] font-black uppercase tracking-[.2em]">
//                       Area
//                     </span>

//                     <span className="mt-1 block text-[12px] font-black">
//                       SE18
//                     </span>

//                   </div>

//                 </div>


//                 <div className="border border-white/10 bg-[#51478F] p-7 sm:p-10">

//                   <div className="flex items-start gap-5">

//                     <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#6055A6]">
//                       <MapPin size={18} />
//                     </div>

//                     <div>

//                       <span className="text-[7px] font-black uppercase tracking-[.25em] text-white/35">
//                         Woolwich address
//                       </span>

//                       <p className="mt-3 text-[15px] font-bold leading-7 text-white/80">
//                         {LOCAL.address}
//                       </p>

//                     </div>

//                   </div>


//                   <div className="mt-8 border-t border-white/10 pt-7">

//                     <span className="text-[7px] font-black uppercase tracking-[.25em] text-white/35">
//                       Call the local team
//                     </span>

//                     <a
//                       href={`tel:${LOCAL.phoneTel}`}
//                       className="mt-3 flex items-center gap-3 text-[25px] font-black tracking-[-.04em] text-white transition hover:text-[#A59ED8]"
//                     >

//                       <Phone
//                         size={18}
//                         className="text-[#A59ED8]"
//                       />

//                       {LOCAL.phoneDisplay}

//                     </a>

//                   </div>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </section>


//         {/* =====================================================
//             SERVICE STRIP
//         ===================================================== */}

//         <section className="bg-[#F7F6FA]">

//           <div className="mx-auto max-w-[1550px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

//             <div className="mb-10 flex flex-col gap-4 border-b border-[#24212D]/10 pb-7 sm:flex-row sm:items-end sm:justify-between">

//               <div>

//                 <span className="text-[8px] font-black uppercase tracking-[.3em] text-[#6055A6]">
//                   Common pest problems
//                 </span>

//                 <h2 className="mt-4 text-[35px] font-black tracking-[-.055em] text-[#24212D] sm:text-[47px]">
//                   Tell us what you're seeing.
//                 </h2>

//               </div>

//               <Bug
//                 size={28}
//                 className="text-[#6055A6]"
//               />

//             </div>


//             <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">

//               {[
//                 "Rats & mice",
//                 "Cockroaches",
//                 "Wasps & insects",
//                 "Other pest activity",
//               ].map((service, index) => (

//                 <Link
//                   key={service}
//                   to="/contact-us"
//                   className="service-row group flex min-h-[92px] items-center justify-between border border-[#24212D]/10 bg-white px-5"
//                 >

//                   <div className="flex items-center gap-4">

//                     <span className="text-[8px] font-black text-[#6055A6]">
//                       0{index + 1}
//                     </span>

//                     <span className="text-[11px] font-black text-[#24212D]">
//                       {service}
//                     </span>

//                   </div>

//                   <ArrowUpRight
//                     size={15}
//                     className="service-arrow text-[#6055A6]"
//                   />

//                 </Link>

//               ))}

//             </div>

//           </div>

//         </section>


//         {/* =====================================================
//             FINAL CTA
//         ===================================================== */}

//         <section className="bg-white">

//           <div className="mx-auto max-w-[1550px] px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">

//             <div className="relative overflow-hidden bg-[#24212D]">

//               <div className="pointer-events-none absolute right-[-100px] top-[-130px] h-[420px] w-[420px] rounded-full border border-[#A59ED8]/10" />

//               <div className="pointer-events-none absolute right-[70px] top-[-70px] h-[260px] w-[260px] rounded-full border border-[#A59ED8]/10" />

//               <div className="pointer-events-none absolute bottom-0 left-[42%] h-px w-[240px] bg-[#A59ED8]/20" />


//               <div className="relative grid gap-12 px-7 py-12 sm:px-10 sm:py-14 lg:grid-cols-[1fr_auto] lg:items-center lg:px-16 lg:py-16">

//                 <div>

//                   <span className="text-[8px] font-black uppercase tracking-[.3em] text-[#A59ED8]">
//                     {LOCAL.shortName}
//                   </span>

//                   <h2 className="mt-5 max-w-[780px] text-[42px] font-black leading-[.91] tracking-[-.065em] text-white sm:text-[59px]">

//                     A pest problem

//                     <span className="block text-[#A59ED8]">
//                       doesn't need to stay one.
//                     </span>

//                   </h2>

//                   <p className="mt-5 max-w-[570px] text-sm leading-7 text-white/40">

//                     Get in touch with the local team and explain
//                     what you've noticed at your property.

//                   </p>

//                 </div>


//                 <div className="flex flex-col gap-3">

//                   <Link
//                     to="/contact-us"
//                     className="woolwich-link group flex min-h-[58px] min-w-[250px] items-center justify-between gap-8 rounded-[5px] bg-[#6055A6] px-7 text-[9px] font-black uppercase tracking-[.19em] text-white"
//                   >

//                     Contact SuperGuard

//                     <ArrowRight
//                       size={15}
//                       className="transition-transform group-hover:translate-x-1"
//                     />

//                   </Link>


//                   <a
//                     href={`tel:${LOCAL.phoneTel}`}
//                     className="flex min-h-[58px] min-w-[250px] items-center justify-between border border-white/10 px-7 text-[9px] font-black uppercase tracking-[.17em] text-white transition hover:border-[#A59ED8] hover:text-[#A59ED8]"
//                   >

//                     <span className="flex items-center gap-3">

//                       <Phone size={14} />

//                       {LOCAL.phoneDisplay}

//                     </span>

//                     <ArrowUpRight size={14} />

//                   </a>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </section>

//       </main>
//     </>
//   );
// }

























// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowDownRight,
//   ArrowRight,
//   ArrowUpRight,
//   Phone,
//   ShieldCheck,
//   MapPin,
//   ScanSearch,
// } from "lucide-react";

// const LOCAL = {
//   company: "SuperGuard Pest Control Services Chessington",
//   shortName: "SuperGuard Chessington",
//   area: "Chessington",
//   postcode: "KT9 1AY",
//   address: "95 Rhodrons Ave, Chessington KT9 1AY, United Kingdom",
//   phoneDisplay: "+44 7356 234726",
//   phoneTel: "+447356234726",
// };

// export default function ServicesHeroSection() {
//   return (
//     <main className="overflow-hidden bg-[#F7F6FA] text-[#24212D]">
//       <style>{`
//         @keyframes chessRise {
//           from { opacity: 0; transform: translateY(28px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         @keyframes chessReveal {
//           from { opacity: 0; transform: translateX(-24px); }
//           to { opacity: 1; transform: translateX(0); }
//         }

//         @keyframes chessImage {
//           from { opacity: .45; transform: scale(1.07); }
//           to { opacity: 1; transform: scale(1); }
//         }

//         .chess-rise { animation: chessRise .8s cubic-bezier(.16,1,.3,1) both; }
//         .chess-rise-delay { animation: chessRise .8s .16s cubic-bezier(.16,1,.3,1) both; }
//         .chess-reveal { animation: chessReveal .9s .1s cubic-bezier(.16,1,.3,1) both; }
//         .chess-image { animation: chessImage 1.1s .1s cubic-bezier(.16,1,.3,1) both; }

//         .chess-hero-link {
//           transition: background .25s ease, transform .25s ease;
//         }
//         .chess-hero-link:hover {
//           background: #51478F;
//           transform: translateY(-2px);
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .chess-rise, .chess-rise-delay, .chess-reveal, .chess-image {
//             animation: none;
//           }
//           .chess-hero-link { transition: none; }
//         }
//       `}</style>

//       <section className="relative">
//         <div className="mx-auto max-w-[1600px] px-5 pb-16 pt-8 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">

//           {/* Editorial header */}
//           <div className="chess-rise flex flex-wrap items-center justify-between gap-4 border-b border-[#24212D]/15 pb-5">
//             <Link to="/" className="flex items-center gap-3">
//               <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6055A6] text-white">
//                 <ShieldCheck size={17} />
//               </span>
//               <span className="max-w-[220px] text-[9px] font-black uppercase leading-4 tracking-[.17em] sm:max-w-none">
//                 {LOCAL.company}
//               </span>
//             </Link>

//             <span className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[.2em] text-[#6055A6]">
//               <MapPin size={13} />
//               Chessington · {LOCAL.postcode}
//             </span>
//           </div>

//           {/* Main asymmetric hero */}
//           <div className="grid items-center gap-12 pt-12 lg:grid-cols-[1.12fr_.88fr] lg:gap-8 lg:pt-16">

//             <div className="chess-reveal relative z-10">
//               <div className="mb-7 flex items-center gap-3">
//                 <span className="h-px w-10 bg-[#6055A6]" />
//                 <span className="text-[9px] font-black uppercase tracking-[.28em] text-[#6055A6]">
//                   Pest control · Chessington
//                 </span>
//               </div>

//               <h1 className="max-w-[850px] text-[clamp(3.4rem,8.6vw,8.5rem)] font-black leading-[.82] tracking-[-.085em]">
//                 Find the
//                 <span className="block text-[#6055A6]">problem.</span>
//                 <span className="block">Plan the</span>
//                 <span className="block">solution<span className="text-[#A59ED8]">.</span></span>
//               </h1>

//               <div className="mt-9 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
//                 <p className="max-w-[420px] text-[13px] leading-7 text-[#77737C] sm:text-sm sm:leading-8">
//                   From insects and rodents to wildlife, birds and
//                   property proofing, explore pest-control services
//                   for homes and businesses in Chessington and nearby areas.
//                 </p>

//                 <span className="hidden text-[9px] font-black uppercase tracking-[.2em] text-[#24212D]/35 sm:block">
//                   Residential
//                   <br />
//                   Commercial
//                 </span>
//               </div>

//               <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
//                 <Link
//                   to="/contact-us"
//                   className="chess-hero-link group flex min-h-[58px] items-center justify-between gap-8 rounded-full bg-[#6055A6] px-7 text-[9px] font-black uppercase tracking-[.16em] text-white"
//                 >
//                   Discuss a pest problem
//                   <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
//                 </Link>

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="inline-flex min-h-[48px] items-center gap-3 text-[10px] font-black tracking-[.06em] transition hover:text-[#6055A6]"
//                 >
//                   <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#24212D]/15">
//                     <Phone size={15} />
//                   </span>
//                   {LOCAL.phoneDisplay}
//                 </a>
//               </div>
//             </div>

//             {/* Sculpted image composition */}
//             <div className="chess-rise-delay relative mx-auto w-full max-w-[590px] lg:ml-auto lg:mt-5">

//               <div className="absolute -right-2 top-5 z-10 flex h-[92px] w-[92px] items-center justify-center rounded-full bg-[#A59ED8] text-center text-[#24212D] sm:-right-1 sm:h-[118px] sm:w-[118px]">
//                 <div>
//                   <span className="block text-[7px] font-black uppercase tracking-[.17em]">
//                     Local
//                   </span>
//                   <span className="mt-1 block text-[13px] font-black">
//                     KT9
//                   </span>
//                   <span className="block text-[7px] font-black uppercase tracking-[.14em]">
//                     Area
//                   </span>
//                 </div>
//               </div>

//               <div className="absolute -left-3 bottom-12 z-10 h-24 w-24 rounded-full border border-[#6055A6]/30 sm:-left-8 sm:h-36 sm:w-36" />

//               <div className="relative ml-5 mr-5 aspect-[.78] overflow-hidden rounded-t-[48%] rounded-b-[8px] bg-[#24212D] sm:ml-8 sm:mr-10">
//                 <img
//                   src="/images/servicehero.webp"
//                   alt={`Pest control services in ${LOCAL.area}`}
//                   className="chess-image h-full w-full object-cover"
//                   loading="eager"
//                   fetchPriority="high"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#15131A]/75 via-transparent to-[#15131A]/10" />

//                 <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
//                   <span className="text-[8px] font-black uppercase tracking-[.24em] text-[#A59ED8]">
//                     A considered approach
//                   </span>
//                   <p className="mt-3 max-w-[320px] text-[27px] font-black leading-[.98] tracking-[-.05em] text-white sm:text-[35px]">
//                     Understand the signs. Address the source.
//                   </p>
//                 </div>
//               </div>

//               <div className="relative z-10 -mt-5 flex items-center justify-between gap-4 rounded-[4px] bg-white p-5 shadow-[0_15px_50px_rgba(36,33,45,.08)] sm:ml-12 sm:mr-0 sm:p-6">
//                 <div className="flex items-center gap-3">
//                   <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F0EDF9] text-[#6055A6]">
//                     <ScanSearch size={17} />
//                   </span>
//                   <div>
//                     <p className="text-[9px] font-black uppercase tracking-[.12em]">
//                       Service information
//                     </p>
//                     <p className="mt-1 text-[10px] text-[#77737C]">
//                       Explore the available services
//                     </p>
//                   </div>
//                 </div>
//                 <a
//                   href="#services-list"
//                   aria-label="Explore pest-control services"
//                   className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6055A6] text-white transition hover:bg-[#51478F]"
//                 >
//                   <ArrowDownRight size={17} />
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Compact location footer */}
//           <div className="chess-rise-delay mt-14 grid gap-5 border-t border-[#24212D]/15 pt-5 sm:grid-cols-3 sm:gap-8 lg:mt-20">
//             <div>
//               <span className="text-[8px] font-black uppercase tracking-[.2em] text-[#24212D]/40">
//                 Service area
//               </span>
//               <p className="mt-2 text-[13px] font-black">{LOCAL.area}, Surrey</p>
//             </div>
//             <div>
//               <span className="text-[8px] font-black uppercase tracking-[.2em] text-[#24212D]/40">
//                 Local address
//               </span>
//               <p className="mt-2 text-[12px] font-bold leading-5">{LOCAL.address}</p>
//             </div>
//             <div className="sm:text-right">
//               <span className="text-[8px] font-black uppercase tracking-[.2em] text-[#24212D]/40">
//                 Speak to the team
//               </span>
//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="mt-2 flex items-center gap-2 text-[13px] font-black hover:text-[#6055A6] sm:justify-end"
//               >
//                 {LOCAL.phoneDisplay}
//                 <ArrowUpRight size={14} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }




















// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowDownRight,
//   ArrowRight,
//   ArrowUpRight,
//   Phone,
//   ShieldCheck,
//   MapPin,
//   ScanSearch,
// } from "lucide-react";

// const LOCAL = {
//   company: "SuperGuard Hampstead",
//   area: "Hampstead",
//   postcode: "NW3 5UN",
//   address: "12 Vane Cl, London NW3 5UN, United Kingdom",
//   phoneDisplay: "+44 7466 966471",
//   phoneTel: "+447466966471",
// };

// export default function ServicesHeroSection() {
//   return (
//     <main className="overflow-hidden bg-[#F7F6FA] text-[#24212D]">
//       <style>{`
//         @keyframes sgAppear {
//           from { opacity: 0; transform: translateY(24px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes sgFloat {
//           0%, 100% { transform: translateY(0) rotate(-4deg); }
//           50% { transform: translateY(-9px) rotate(-1deg); }
//         }
//         .sg-appear { animation: sgAppear .8s cubic-bezier(.16,1,.3,1) both; }
//         .sg-appear-delay { animation: sgAppear .9s .15s cubic-bezier(.16,1,.3,1) both; }
//         .sg-float { animation: sgFloat 6s ease-in-out infinite; }
//         @media (prefers-reduced-motion: reduce) {
//           .sg-appear, .sg-appear-delay, .sg-float { animation: none; }
//         }
//       `}</style>

//       <section className="relative isolate">
//         <div className="absolute -left-40 top-44 -z-10 h-80 w-80 rounded-full bg-[#EAE6F5] blur-3xl" />
//         <div className="absolute right-0 top-0 -z-10 h-[450px] w-[450px] rounded-full bg-[#A59ED8]/15 blur-3xl" />

//         <div className="mx-auto max-w-[1500px] px-5 pb-12 pt-6 sm:px-8 sm:pb-16 sm:pt-8 lg:px-12 lg:pb-20">
//           <header className="sg-appear flex flex-wrap items-center justify-between gap-4 border-b border-[#24212D]/15 pb-5">
//             <Link to="/" className="flex items-center gap-3">
//               <span className="flex h-11 w-11 items-center justify-center rounded-[15px] bg-[#6055A6] text-white">
//                 <ShieldCheck size={21} />
//               </span>
//               <span className="text-[10px] font-black uppercase leading-5 tracking-[.15em]">
//                 SuperGuard
//                 <span className="block text-[#6055A6]">Hampstead</span>
//               </span>
//             </Link>

//             <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.12em] text-[#6055A6]">
//               <MapPin size={14} />
//               London · {LOCAL.postcode}
//             </div>
//           </header>

//           <div className="grid items-center gap-10 pt-12 sm:pt-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-8 lg:pt-20">
//             <div className="sg-appear relative z-10">
//               <div className="mb-6 flex items-center gap-3">
//                 <span className="h-[2px] w-9 bg-[#6055A6]" />
//                 <span className="text-[9px] font-black uppercase tracking-[.23em] text-[#6055A6]">
//                   Pest control · Hampstead
//                 </span>
//               </div>

//               <h1 className="max-w-[780px] text-[clamp(3.5rem,8.5vw,7.6rem)] font-black leading-[.84] tracking-[-.085em]">
//                 A clearer
//                 <span className="block text-[#6055A6]">way to</span>
//                 <span className="block">deal with</span>
//                 <span className="block">pests<span className="text-[#A59ED8]">.</span></span>
//               </h1>

//               <p className="mt-7 max-w-[460px] text-[13px] leading-7 text-[#77737C] sm:text-[14px] sm:leading-8">
//                 Explore pest-control services for homes, managed properties
//                 and businesses in Hampstead and nearby areas. Start with
//                 what you have noticed and find the appropriate next step.
//               </p>

//               <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
//                 <Link
//                   to="/contact-us"
//                   className="group inline-flex min-h-[56px] items-center justify-between gap-8 rounded-full bg-[#6055A6] px-6 text-[9px] font-black uppercase tracking-[.13em] text-white transition hover:bg-[#51478F]"
//                 >
//                   Discuss a pest problem
//                   <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
//                 </Link>

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="inline-flex min-h-[48px] items-center gap-3 text-[11px] font-black transition hover:text-[#6055A6]"
//                 >
//                   <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#24212D]/15">
//                     <Phone size={15} />
//                   </span>
//                   {LOCAL.phoneDisplay}
//                 </a>
//               </div>

//               <div className="mt-9 flex flex-wrap gap-x-5 gap-y-3 text-[8px] font-black uppercase tracking-[.12em] text-[#77737C]">
//                 <span>Residential properties</span>
//                 <span className="text-[#A59ED8]">/</span>
//                 <span>Commercial premises</span>
//                 <span className="text-[#A59ED8]">/</span>
//                 <span>Prevention</span>
//               </div>
//             </div>

//             <div className="sg-appear-delay relative mx-auto w-full max-w-[570px] pb-7 pt-5 sm:pb-10">
//               <div className="absolute right-0 top-0 h-28 w-28 rounded-full border border-[#6055A6]/25 sm:h-40 sm:w-40" />
//               <div className="absolute bottom-14 left-0 h-20 w-20 rounded-full bg-[#A59ED8]/35 sm:h-28 sm:w-28" />

//               <div className="sg-float absolute right-2 top-6 z-20 flex h-[88px] w-[88px] items-center justify-center rounded-full bg-[#6055A6] text-center text-white shadow-xl sm:right-0 sm:h-[112px] sm:w-[112px]">
//                 <div>
//                   <span className="block text-[8px] font-black uppercase tracking-[.14em]">
//                     Local
//                   </span>
//                   <span className="mt-1 block text-[19px] font-black">NW3</span>
//                   <span className="text-[7px] font-bold uppercase tracking-[.12em]">
//                     Hampstead
//                   </span>
//                 </div>
//               </div>

//               <div className="relative mx-7 overflow-hidden rounded-t-[48%] rounded-bl-[45%] rounded-br-[10px] bg-[#EAE6F5] sm:mx-10">
//                 <img
//                   src="/images/servicehero.webp"
//                   alt="Pest-control service assessment"
//                   className="aspect-[.79] w-full object-cover"
//                   loading="eager"
//                   fetchPriority="high"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#171421]/75 via-transparent to-[#171421]/10" />

//                 <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
//                   <span className="text-[8px] font-black uppercase tracking-[.2em] text-[#D8D2F3]">
//                     The right starting point
//                   </span>
//                   <p className="mt-3 max-w-[310px] text-[clamp(1.6rem,3.2vw,2.5rem)] font-black leading-[.95] tracking-[-.055em] text-white">
//                     Identify the signs. Understand the problem.
//                   </p>
//                 </div>
//               </div>

//               <div className="relative z-10 -mt-5 ml-8 flex items-center justify-between gap-3 rounded-[22px] border border-[#24212D]/5 bg-white p-4 shadow-[0_18px_55px_rgba(36,33,45,.10)] sm:ml-14 sm:p-5">
//                 <div className="flex items-center gap-3">
//                   <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[15px] bg-[#F0EDF9] text-[#6055A6]">
//                     <ScanSearch size={19} />
//                   </span>
//                   <div>
//                     <p className="text-[10px] font-black uppercase tracking-[.1em]">
//                       Service directory
//                     </p>
//                     <p className="mt-1 text-[10px] text-[#77737C]">
//                       Find the relevant service
//                     </p>
//                   </div>
//                 </div>

//                 <a
//                   href="#services-list"
//                   aria-label="Explore services"
//                   className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6055A6] text-white transition hover:rotate-45"
//                 >
//                   <ArrowDownRight size={18} />
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="mt-12 grid gap-5 border-t border-[#24212D]/15 pt-6 sm:grid-cols-3 sm:gap-8 lg:mt-16">
//             <div>
//               <span className="text-[8px] font-black uppercase tracking-[.18em] text-[#77737C]">
//                 Service location
//               </span>
//               <p className="mt-2 text-[13px] font-black">Hampstead, London</p>
//             </div>
//             <div>
//               <span className="text-[8px] font-black uppercase tracking-[.18em] text-[#77737C]">
//                 Local address
//               </span>
//               <p className="mt-2 text-[12px] font-bold leading-5">{LOCAL.address}</p>
//             </div>
//             <div className="sm:text-right">
//               <span className="text-[8px] font-black uppercase tracking-[.18em] text-[#77737C]">
//                 Speak to the team
//               </span>
//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="mt-2 flex items-center gap-2 text-[13px] font-black hover:text-[#6055A6] sm:justify-end"
//               >
//                 {LOCAL.phoneDisplay}
//                 <ArrowUpRight size={14} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }













// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowDownRight,
//   ArrowRight,
//   ArrowUpRight,
//   Phone,
//   ShieldCheck,
//   MapPin,
//   ScanSearch,
// } from "lucide-react";

// const LOCAL = {
//   company: "SuperGuard Hampstead",
//   area: "Hampstead",
//   postcode: "NW3 5UN",
//   address: "12 Vane Cl, London NW3 5UN, United Kingdom",
//   phoneDisplay: "+44 7466 966471",
//   phoneTel: "+447466966471",
// };

// export default function ServicesHeroSection() {
//   return (
//     <main className="overflow-hidden bg-[#6055A6] text-white">
//       <style>{`
//         @keyframes sgAppear {
//           from {
//             opacity: 0;
//             transform: translateY(24px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes sgFloat {
//           0%, 100% {
//             transform: translateY(0) rotate(-4deg);
//           }
//           50% {
//             transform: translateY(-9px) rotate(-1deg);
//           }
//         }

//         .sg-appear {
//           animation: sgAppear .8s cubic-bezier(.16,1,.3,1) both;
//         }

//         .sg-appear-delay {
//           animation: sgAppear .9s .15s cubic-bezier(.16,1,.3,1) both;
//         }

//         .sg-float {
//           animation: sgFloat 6s ease-in-out infinite;
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .sg-appear,
//           .sg-appear-delay,
//           .sg-float {
//             animation: none;
//           }
//         }
//       `}</style>

//       <section className="relative isolate">
//         <div className="absolute -left-40 top-44 -z-10 h-80 w-80 rounded-full bg-[#A59ED8]/30 blur-3xl" />
//         <div className="absolute right-0 top-0 -z-10 h-[450px] w-[450px] rounded-full bg-[#D8D2F3]/20 blur-3xl" />

//         <div className="mx-auto max-w-[1500px] px-5 pb-12 pt-6 sm:px-8 sm:pb-16 sm:pt-8 lg:px-12 lg:pb-20">
//           <header className="sg-appear flex flex-wrap items-center justify-between gap-4 border-b border-white/25 pb-5">
//             <Link to="/" className="flex items-center gap-3">
//               <span className="flex h-11 w-11 items-center justify-center rounded-[15px] bg-white text-[#6055A6] shadow-lg">
//                 <ShieldCheck size={21} />
//               </span>

//               <span className="text-[10px] font-black uppercase leading-5 tracking-[.15em] text-white">
//                 SuperGuard
//                 <span className="block text-[#E0DCF7]">Hampstead</span>
//               </span>
//             </Link>

//             <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.12em] text-[#F0EDFF]">
//               <MapPin size={14} />
//               London · {LOCAL.postcode}
//             </div>
//           </header>

//           <div className="grid items-center gap-10 pt-12 sm:pt-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-8 lg:pt-20">
//             <div className="sg-appear relative z-10">
//               <div className="mb-6 flex items-center gap-3">
//                 <span className="h-[2px] w-9 bg-[#D8D2F3]" />
//                 <span className="text-[9px] font-black uppercase tracking-[.23em] text-[#E0DCF7]">
//                   Pest control · Hampstead
//                 </span>
//               </div>

//               <h1 className="max-w-[780px] text-[clamp(3.5rem,8.5vw,7.6rem)] font-black leading-[.84] tracking-[-.085em] text-white">
//                 A clearer
//                 <span className="block text-[#D8D2F3]">way to</span>
//                 <span className="block">deal with</span>
//                 <span className="block">
//                   pests<span className="text-[#A59ED8]">.</span>
//                 </span>
//               </h1>

//               <p className="mt-7 max-w-[460px] text-[13px] leading-7 text-white/80 sm:text-[14px] sm:leading-8">
//                 Explore pest-control services for homes, managed properties
//                 and businesses in Hampstead and nearby areas. Start with
//                 what you have noticed and find the appropriate next step.
//               </p>

//               <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
//                 <Link
//                   to="/contact-us"
//                   className="group inline-flex min-h-[56px] items-center justify-between gap-8 rounded-full bg-white px-6 text-[9px] font-black uppercase tracking-[.13em] text-[#51478F] transition hover:bg-[#EAE6F5]"
//                 >
//                   Discuss a pest problem
//                   <ArrowRight
//                     size={16}
//                     className="transition-transform group-hover:translate-x-1"
//                   />
//                 </Link>

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="inline-flex min-h-[48px] items-center gap-3 text-[11px] font-black text-white transition hover:text-[#E0DCF7]"
//                 >
//                   <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40">
//                     <Phone size={15} />
//                   </span>
//                   {LOCAL.phoneDisplay}
//                 </a>
//               </div>

//               <div className="mt-9 flex flex-wrap gap-x-5 gap-y-3 text-[8px] font-black uppercase tracking-[.12em] text-white/75">
//                 <span>Residential properties</span>
//                 <span className="text-[#D8D2F3]">/</span>
//                 <span>Commercial premises</span>
//                 <span className="text-[#D8D2F3]">/</span>
//                 <span>Prevention</span>
//               </div>
//             </div>

//             <div className="sg-appear-delay relative mx-auto w-full max-w-[570px] pb-7 pt-5 sm:pb-10">
//               <div className="absolute right-0 top-0 h-28 w-28 rounded-full border border-white/35 sm:h-40 sm:w-40" />
//               <div className="absolute bottom-14 left-0 h-20 w-20 rounded-full bg-[#D8D2F3]/35 sm:h-28 sm:w-28" />

//               <div className="sg-float absolute right-2 top-6 z-20 flex h-[88px] w-[88px] items-center justify-center rounded-full bg-white text-center text-[#6055A6] shadow-xl sm:right-0 sm:h-[112px] sm:w-[112px]">
//                 <div>
//                   <span className="block text-[8px] font-black uppercase tracking-[.14em]">
//                     Local
//                   </span>
//                   <span className="mt-1 block text-[19px] font-black">NW3</span>
//                   <span className="text-[7px] font-bold uppercase tracking-[.12em]">
//                     Hampstead
//                   </span>
//                 </div>
//               </div>

//               <div className="relative mx-7 overflow-hidden rounded-t-[48%] rounded-bl-[45%] rounded-br-[10px] bg-[#A59ED8] sm:mx-10">
//                 <img
//                   src="/images/servicehero.webp"
//                   alt="Pest-control service assessment"
//                   className="aspect-[.79] w-full object-cover"
//                   loading="eager"
//                   fetchPriority="high"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-[#211B46]/85 via-[#211B46]/10 to-[#211B46]/10" />

//                 <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
//                   <span className="text-[8px] font-black uppercase tracking-[.2em] text-[#E0DCF7]">
//                     The right starting point
//                   </span>

//                   <p className="mt-3 max-w-[310px] text-[clamp(1.6rem,3.2vw,2.5rem)] font-black leading-[.95] tracking-[-.055em] text-white">
//                     Identify the signs. Understand the problem.
//                   </p>
//                 </div>
//               </div>

//               <div className="relative z-10 -mt-5 ml-8 flex items-center justify-between gap-3 rounded-[22px] border border-[#51478F]/10 bg-white p-4 text-[#24212D] shadow-[0_18px_55px_rgba(33,27,70,.22)] sm:ml-14 sm:p-5">
//                 <div className="flex items-center gap-3">
//                   <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[15px] bg-[#F0EDF9] text-[#6055A6]">
//                     <ScanSearch size={19} />
//                   </span>

//                   <div>
//                     <p className="text-[10px] font-black uppercase tracking-[.1em]">
//                       Service directory
//                     </p>
//                     <p className="mt-1 text-[10px] text-[#77737C]">
//                       Find the relevant service
//                     </p>
//                   </div>
//                 </div>

//                 <a
//                   href="#services-list"
//                   aria-label="Explore services"
//                   className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6055A6] text-white transition hover:rotate-45 hover:bg-[#51478F]"
//                 >
//                   <ArrowDownRight size={18} />
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="mt-12 grid gap-5 border-t border-white/25 pt-6 sm:grid-cols-3 sm:gap-8 lg:mt-16">
//             <div>
//               <span className="text-[8px] font-black uppercase tracking-[.18em] text-white/65">
//                 Service location
//               </span>
//               <p className="mt-2 text-[13px] font-black text-white">
//                 Hampstead, London
//               </p>
//             </div>

//             <div>
//               <span className="text-[8px] font-black uppercase tracking-[.18em] text-white/65">
//                 Local address
//               </span>
//               <p className="mt-2 text-[12px] font-bold leading-5 text-white">
//                 {LOCAL.address}
//               </p>
//             </div>

//             <div className="sm:text-right">
//               <span className="text-[8px] font-black uppercase tracking-[.18em] text-white/65">
//                 Speak to the team
//               </span>

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="mt-2 flex items-center gap-2 text-[13px] font-black text-white transition hover:text-[#E0DCF7] sm:justify-end"
//               >
//                 {LOCAL.phoneDisplay}
//                 <ArrowUpRight size={14} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

















import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Phone,
  ShieldCheck,
  MapPin,
  ScanSearch,
} from "lucide-react";

const LOCAL = {
  company: "SuperGuard Hampstead",
  area: "Hampstead",
  postcode: "NW3 5UN",
  address: "12 Vane Cl, London NW3 5UN, United Kingdom",
  phoneDisplay: "+44 7466 966471",
  phoneTel: "+447466966471",
};

export default function ServicesHeroSection() {
  return (
    <main className="overflow-hidden bg-[#6055A6] text-white">
      <style>{`
        @keyframes sgAppear {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes sgSoftFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .sg-appear {
          animation: sgAppear .85s cubic-bezier(.16,1,.3,1) both;
        }

        .sg-appear-delay {
          animation: sgAppear .95s .18s cubic-bezier(.16,1,.3,1) both;
        }

        .sg-appear-delay-2 {
          animation: sgAppear 1s .28s cubic-bezier(.16,1,.3,1) both;
        }

        .sg-soft-float {
          animation: sgSoftFloat 5.5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .sg-appear,
          .sg-appear-delay,
          .sg-appear-delay-2,
          .sg-soft-float {
            animation: none;
          }
        }
      `}</style>

      <section className="relative isolate min-h-[100svh]">
        {/* Soft ambient glows */}
        <div className="pointer-events-none absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-[#A59ED8]/25 blur-[100px]" />
        <div className="pointer-events-none absolute -right-20 bottom-10 h-[380px] w-[380px] rounded-full bg-[#D8D2F3]/15 blur-[90px]" />

        <div className="mx-auto max-w-[1440px] px-5 pb-16 pt-6 sm:px-8 sm:pb-20 sm:pt-8 lg:px-12 lg:pb-24">
          {/* Top bar */}
          <header className="sg-appear flex flex-wrap items-center justify-between gap-4 border-b border-white/20 pb-5">
            <Link to="/" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#6055A6] shadow-lg">
                <ShieldCheck size={21} />
              </span>
              <span className="text-[10px] font-black uppercase leading-5 tracking-[.15em] text-white">
                SuperGuard
                <span className="block text-[#E0DCF7]">Hampstead</span>
              </span>
            </Link>

            <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.12em] text-[#F0EDFF]">
              <MapPin size={14} />
              London · {LOCAL.postcode}
            </div>
          </header>

          {/* Main content grid – reversed visual weight */}
          <div className="mt-14 grid items-center gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-10">
            
            {/* LEFT – Large image block with unique shape + floating badge */}
            <div className="sg-appear-delay relative order-2 lg:order-1 lg:col-span-6">
              {/* Soft geometric image container */}
              <div className="relative overflow-hidden rounded-[40px_12px_40px_12px] bg-[#A59ED8] sm:rounded-[56px_16px_56px_16px]">
                <img
                  src="/images/servicehero.webp"
                  alt="Pest-control service assessment"
                  className="aspect-[4/5] w-full object-cover sm:aspect-[5/6]"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#211B46]/90 via-[#211B46]/25 to-transparent" />

                {/* Bottom text inside image */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <span className="text-[8px] font-black uppercase tracking-[.2em] text-[#E0DCF7]">
                    The right starting point
                  </span>
                  <p className="mt-2 max-w-[280px] text-[clamp(1.5rem,3vw,2.1rem)] font-black leading-[1] tracking-[-.04em] text-white">
                    Identify the signs.
                    <br />
                    Understand the problem.
                  </p>
                </div>
              </div>

              {/* Floating NW3 badge – top right of image */}
              <div className="sg-soft-float absolute -right-3 top-8 z-20 flex h-[92px] w-[92px] items-center justify-center rounded-full bg-white text-center text-[#6055A6] shadow-2xl sm:-right-6 sm:top-12 sm:h-[108px] sm:w-[108px]">
                <div>
                  <span className="block text-[8px] font-black uppercase tracking-[.14em]">
                    Local
                  </span>
                  <span className="mt-0.5 block text-[20px] font-black sm:text-[22px]">
                    NW3
                  </span>
                  <span className="text-[7px] font-bold uppercase tracking-[.12em]">
                    Hampstead
                  </span>
                </div>
              </div>

              {/* Service directory card – bottom overlapping */}
              <div className="relative z-10 mx-auto -mt-8 w-[90%] max-w-[340px] rounded-2xl border border-[#51478F]/10 bg-white p-4 text-[#24212D] shadow-[0_20px_50px_rgba(33,27,70,.25)] sm:-mt-10 sm:p-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F0EDF9] text-[#6055A6]">
                      <ScanSearch size={19} />
                    </span>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[.1em]">
                        Service directory
                      </p>
                      <p className="mt-0.5 text-[10px] text-[#77737C]">
                        Find the relevant service
                      </p>
                    </div>
                  </div>

                  <a
                    href="#services-list"
                    aria-label="Explore services"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6055A6] text-white transition hover:rotate-45 hover:bg-[#51478F]"
                  >
                    <ArrowDownRight size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT – Typography & CTAs */}
            <div className="sg-appear order-1 lg:order-2 lg:col-span-6">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#D8D2F3]" />
                <span className="text-[9px] font-black uppercase tracking-[.23em] text-[#E0DCF7]">
                  Pest control · Hampstead
                </span>
              </div>

              <h1 className="max-w-[620px] text-[clamp(3.2rem,7.5vw,6.8rem)] font-black leading-[0.86] tracking-[-.08em] text-white">
                A clearer
                <span className="block text-[#D8D2F3]">way to</span>
                <span className="block">deal with</span>
                <span className="block">
                  pests<span className="text-[#A59ED8]">.</span>
                </span>
              </h1>

              <p className="mt-7 max-w-[440px] text-[13px] leading-7 text-white/80 sm:text-[14px] sm:leading-8">
                Explore pest-control services for homes, managed properties
                and businesses in Hampstead and nearby areas. Start with
                what you have noticed and find the appropriate next step.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  to="/contact-us"
                  className="group inline-flex min-h-[54px] items-center justify-between gap-7 rounded-full bg-white px-6 text-[9px] font-black uppercase tracking-[.13em] text-[#51478F] transition hover:bg-[#EAE6F5]"
                >
                  Discuss a pest problem
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href={`tel:${LOCAL.phoneTel}`}
                  className="inline-flex min-h-[48px] items-center gap-3 text-[11px] font-black text-white transition hover:text-[#E0DCF7]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35">
                    <Phone size={15} />
                  </span>
                  {LOCAL.phoneDisplay}
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2.5 text-[8px] font-black uppercase tracking-[.12em] text-white/70">
                <span>Residential properties</span>
                <span className="text-[#D8D2F3]">/</span>
                <span>Commercial premises</span>
                <span className="text-[#D8D2F3]">/</span>
                <span>Prevention</span>
              </div>
            </div>
          </div>

          {/* Bottom info strip */}
          <div className="sg-appear-delay-2 mt-16 grid gap-6 border-t border-white/20 pt-7 sm:grid-cols-3 sm:gap-8 lg:mt-20">
            <div>
              <span className="text-[8px] font-black uppercase tracking-[.18em] text-white/60">
                Service location
              </span>
              <p className="mt-2 text-[13px] font-black text-white">
                Hampstead, London
              </p>
            </div>

            <div>
              <span className="text-[8px] font-black uppercase tracking-[.18em] text-white/60">
                Local address
              </span>
              <p className="mt-2 text-[12px] font-bold leading-5 text-white">
                {LOCAL.address}
              </p>
            </div>

            <div className="sm:text-right">
              <span className="text-[8px] font-black uppercase tracking-[.18em] text-white/60">
                Speak to the team
              </span>
              <a
                href={`tel:${LOCAL.phoneTel}`}
                className="mt-2 flex items-center gap-2 text-[13px] font-black text-white transition hover:text-[#E0DCF7] sm:justify-end"
              >
                {LOCAL.phoneDisplay}
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}