// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Bug,
//   Building2,
//   CheckCircle2,
//   Clock,
//   Home,
//   MapPin,
//   Rat,
//   ShieldCheck,
// } from "lucide-react";

// const Footer = () => {
//   const LOCAL = {
//     company: "SuperGuard Services Limited Holborn",
//     shortName: "SuperGuard Holborn",
//     area: "Holborn",
//     postcode: "WC2R 3JF",
//     city: "London",
//     streetAddress: "50 Essex Street",
//     address: "50 Essex Street, London, WC2R 3JF",
//   };

//   const quickLinks = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about-us" },
//     { name: "Services", path: "/services" },
//     { name: "Contact Us", path: "/contact-us" },
//   ];

//   const services = [
//     {
//       name: "Rats & Mice Control",
//       icon: Rat,
//       state: {
//         scrollToService: "Rats & Mice Control",
//         category: "Rodents & Wildlife",
//       },
//     },
//     {
//       name: "Bed Bug Treatments",
//       icon: Bug,
//       state: {
//         scrollToService: "Bed Bugs Control",
//         category: "Insects",
//       },
//     },
//     {
//       name: "Wasp Nest Control",
//       icon: ShieldCheck,
//       state: {
//         scrollToService: "Wasp Nest Removal",
//         category: "Insects",
//       },
//     },
//     {
//       name: "Home Pest Inspection",
//       icon: Home,
//       state: {
//         scrollToService: null,
//         category: "All",
//       },
//     },
//   ];

//   const footerHighlights = [
//     "Inspection-Led Service",
//     "Residential Pest Control",
//     "Commercial Pest Support",
//   ];

//   return (
//     <footer
//       itemScope
//       itemType="https://schema.org/PestControlService"
//       className="relative overflow-hidden bg-[#171327] font-sans text-white"
//     >
//       <meta itemProp="name" content={LOCAL.company} />
//       <meta
//         itemProp="areaServed"
//         content={`${LOCAL.area}, Central London`}
//       />

//       <div
//         itemProp="address"
//         itemScope
//         itemType="https://schema.org/PostalAddress"
//         className="hidden"
//       >
//         <meta
//           itemProp="streetAddress"
//           content={LOCAL.streetAddress}
//         />

//         <meta
//           itemProp="addressLocality"
//           content={LOCAL.city}
//         />

//         <meta
//           itemProp="postalCode"
//           content={LOCAL.postcode}
//         />

//         <meta
//           itemProp="addressCountry"
//           content="GB"
//         />
//       </div>

//       {/* BACKGROUND DECORATION */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute -left-44 -top-48 h-[560px] w-[560px] rounded-full bg-[#6157A7]/30 blur-[150px]" />

//         <div className="absolute -bottom-64 right-[-140px] h-[620px] w-[620px] rounded-full bg-[#6157A7]/25 blur-[160px]" />

//         <div
//           className="absolute inset-0 opacity-[0.035]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)",
//             backgroundSize: "78px 78px",
//           }}
//         />

//         <div className="absolute right-0 top-0 h-full w-[34%] bg-[#6157A7]/[0.045]" />

//         <div
//           aria-hidden="true"
//           className="absolute bottom-[-40px] left-1/2 hidden -translate-x-1/2 select-none whitespace-nowrap text-[180px] font-black uppercase leading-none tracking-[-0.08em] text-white/[0.018] lg:block"
//         >
//           Holborn
//         </div>
//       </div>

//       <div className="relative z-10 mx-auto max-w-[1450px] px-5 pt-16 sm:px-8 sm:pt-20 md:px-10 lg:px-14 lg:pt-24">
//         {/* ===================================================== */}
//         {/* TOP CTA */}
//         {/* ===================================================== */}

//         <div className="relative overflow-hidden rounded-[34px] bg-[#6157A7] px-6 py-9 shadow-[0_30px_90px_rgba(0,0,0,0.22)] sm:px-9 sm:py-11 lg:px-12 lg:py-14">
//           <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border-[48px] border-white/[0.06]" />

//           <div className="pointer-events-none absolute bottom-[-160px] left-[30%] h-80 w-80 rounded-full bg-white/10 blur-[100px]" />

//           <div className="relative z-10 grid gap-9 lg:grid-cols-[1fr_auto] lg:items-end">
//             <div className="max-w-[900px]">
//               <div className="flex items-center gap-4">
//                 <span className="h-px w-10 bg-white/55 sm:w-16" />

//                 <span className="text-[9px] font-black uppercase tracking-[0.27em] text-white/70 sm:text-[10px]">
//                   Need Pest Control Support?
//                 </span>
//               </div>

//               <h2 className="mt-6 text-[40px] font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-[54px] md:text-[65px] lg:text-[72px]">
//                 Tell Us What You Have
//                 <span className="block text-[#DDD9FF]">
//                   Noticed At Your Property.
//                 </span>
//               </h2>

//               <p className="mt-6 max-w-3xl text-sm font-medium leading-7 text-white/75 sm:text-base sm:leading-8">
//                 Whether you have seen rodents, insects, nests, droppings or
//                 unusual pest activity, our Holborn team can help you arrange
//                 the appropriate next step.
//               </p>
//             </div>

//             <Link
//               to="/contact-us"
//               className="group inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.17em] text-[#6157A7] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#171327] hover:text-white"
//             >
//               Request Pest Support

//               <ArrowRight
//                 size={17}
//                 strokeWidth={2.6}
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </Link>
//           </div>
//         </div>

//         {/* ===================================================== */}
//         {/* MAIN FOOTER */}
//         {/* ===================================================== */}

//         <div className="grid gap-12 border-b border-white/10 py-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-16">
//           {/* BRAND */}
//           <div className="lg:col-span-4">
//             <Link
//               to="/"
//               aria-label={`${LOCAL.company} home`}
//               className="inline-block"
//             >
//               <img
//                 src="/images/superguard-logo.webp"
//                 alt={`${LOCAL.company} pest control`}
//                 className="h-16 w-auto object-contain brightness-0 invert sm:h-[72px]"
//                 loading="lazy"
//               />
//             </Link>

//             <p className="mt-7 max-w-md text-sm font-medium leading-7 text-white/65">
//               {LOCAL.company} provides pest control support for homes, flats,
//               landlords, offices and commercial properties across{" "}
//               {LOCAL.area} and Central London.
//             </p>

//             <p className="mt-4 max-w-md text-sm font-medium leading-7 text-white/45">
//               Our service focuses on careful inspection, considered treatment
//               planning and clear practical advice.
//             </p>

//             <div className="mt-7 inline-flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 backdrop-blur-md">
//               <span className="relative flex h-2.5 w-2.5 shrink-0">
//                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#BDB6FF] opacity-60" />

//                 <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#BDB6FF]" />
//               </span>

//               <div>
//                 <span className="block text-[9px] font-black uppercase tracking-[0.19em] text-[#BDB6FF]">
//                   Local Property Support
//                 </span>

//                 <span className="mt-1 block text-xs font-bold text-white">
//                   Serving {LOCAL.area} and Central London
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* QUICK LINKS */}
//           <div className="lg:col-span-2 lg:pl-4">
//             <h3 className="text-[10px] font-black uppercase tracking-[0.24em] text-[#BDB6FF]">
//               Quick Links
//             </h3>

//             <nav
//               aria-label="Footer quick links"
//               className="mt-7 flex flex-col gap-4"
//             >
//               {quickLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   className="group inline-flex w-fit items-center gap-3 text-sm font-bold text-white/60 transition-colors duration-300 hover:text-white"
//                 >
//                   <span className="h-px w-4 bg-white/20 transition-all duration-300 group-hover:w-7 group-hover:bg-[#BDB6FF]" />

//                   <span>{link.name}</span>
//                 </Link>
//               ))}
//             </nav>
//           </div>

//           {/* SERVICES */}
//           <div className="lg:col-span-3">
//             <h3 className="text-[10px] font-black uppercase tracking-[0.24em] text-[#BDB6FF]">
//               Pest Services
//             </h3>

//             <div className="mt-7 flex flex-col gap-3">
//               {services.map((service) => {
//                 const Icon = service.icon;

//                 return (
//                   <Link
//                     key={service.name}
//                     to="/services"
//                     state={service.state}
//                     className="group flex items-center gap-4 rounded-[18px] border border-white/[0.07] bg-white/[0.035] p-3 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.08]"
//                   >
//                     <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] bg-[#6157A7] text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#6157A7]">
//                       <Icon
//                         size={17}
//                         strokeWidth={2.4}
//                       />
//                     </span>

//                     <span className="text-sm font-bold leading-snug text-white/65 transition-colors group-hover:text-white">
//                       {service.name}
//                     </span>

//                     <ArrowRight
//                       size={14}
//                       strokeWidth={2.5}
//                       className="ml-auto shrink-0 -translate-x-1 text-[#BDB6FF] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
//                     />
//                   </Link>
//                 );
//               })}
//             </div>
//           </div>

//           {/* LOCAL DETAILS */}
//           <div className="lg:col-span-3">
//             <div className="h-full rounded-[26px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md sm:p-7">
//               <h3 className="text-[10px] font-black uppercase tracking-[0.24em] text-[#BDB6FF]">
//                 Local Details
//               </h3>

//               <div className="mt-7 space-y-6">
//                 <div className="flex items-start gap-4">
//                   <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#6157A7] text-white">
//                     <MapPin
//                       size={19}
//                       strokeWidth={2.4}
//                     />
//                   </span>

//                   <div>
//                     <span className="block text-[9px] font-black uppercase tracking-[0.19em] text-white/40">
//                       Holborn Base
//                     </span>

//                     <address className="mt-2 not-italic text-sm font-semibold leading-6 text-white/75">
//                       {LOCAL.address}
//                     </address>
//                   </div>
//                 </div>

//                 <div className="h-px bg-white/[0.07]" />

//                 <div className="flex items-start gap-4">
//                   <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-white/10 text-white">
//                     <Clock
//                       size={19}
//                       strokeWidth={2.4}
//                     />
//                   </span>

//                   <div>
//                     <span className="block text-[9px] font-black uppercase tracking-[0.19em] text-white/40">
//                       Availability
//                     </span>

//                     <p className="mt-2 text-sm font-semibold leading-6 text-white/75">
//                       Local pest control enquiries and property support
//                     </p>
//                   </div>
//                 </div>

//                 <div className="h-px bg-white/[0.07]" />

//                 <div className="flex items-start gap-4">
//                   <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-white/10 text-white">
//                     <Building2
//                       size={19}
//                       strokeWidth={2.4}
//                     />
//                   </span>

//                   <div>
//                     <span className="block text-[9px] font-black uppercase tracking-[0.19em] text-white/40">
//                       Properties
//                     </span>

//                     <p className="mt-2 text-sm font-semibold leading-6 text-white/75">
//                       Homes, flats, landlords, offices and businesses
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <Link
//                 to="/contact-us"
//                 className="group mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-[10px] font-black uppercase tracking-[0.16em] text-[#6157A7] transition-all duration-300 hover:bg-[#6157A7] hover:text-white"
//               >
//                 Contact Our Team

//                 <ArrowRight
//                   size={16}
//                   strokeWidth={2.6}
//                   className="transition-transform duration-300 group-hover:translate-x-1"
//                 />
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* ===================================================== */}
//         {/* TRUST STRIP */}
//         {/* ===================================================== */}

//         <div className="grid gap-4 border-b border-white/10 py-8 sm:grid-cols-3">
//           {footerHighlights.map((item, index) => (
//             <div
//               key={item}
//               className={`flex items-center gap-4 ${
//                 index !== footerHighlights.length - 1
//                   ? "sm:border-r sm:border-white/10"
//                   : ""
//               }`}
//             >
//               <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6157A7] text-white">
//                 <CheckCircle2
//                   size={18}
//                   strokeWidth={2.7}
//                 />
//               </span>

//               <span className="text-sm font-black text-white/75">
//                 {item}
//               </span>
//             </div>
//           ))}
//         </div>

//         {/* ===================================================== */}
//         {/* BOTTOM BAR */}
//         {/* ===================================================== */}

//         <div className="py-7">
//           <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
//             <p className="text-sm font-medium leading-relaxed text-white/45">
//               © {new Date().getFullYear()}{" "}
//               <span className="font-black text-white/75">
//                 {LOCAL.company}
//               </span>
//               . All Rights Reserved.
//             </p>

//             <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
//               {quickLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   className="text-xs font-bold text-white/45 transition-colors duration-300 hover:text-white"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </div>

//             <Link
//               to="/contact-us"
//               className="group inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.17em] text-[#BDB6FF] transition-colors hover:text-white"
//             >
//               Send An Enquiry

//               <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 group-hover:bg-[#6157A7]">
//                 <ArrowRight
//                   size={15}
//                   strokeWidth={2.6}
//                 />
//               </span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
















// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Bug,
//   Building2,
//   Check,
//   Clock3,
//   Home,
//   MapPin,
//   Phone,
//   Rat,
//   ShieldCheck,
// } from "lucide-react";

// const Footer = () => {
//   const LOCAL = {
//     company: "SuperGuard Services Westminster",
//     shortName: "SuperGuard Westminster",
//     area: "Westminster",
//     postcode: "SW1P 4BD",
//     city: "London",
//     streetAddress: "14 Regency St",
//     address: "14 Regency St, London SW1P 4BD",
//     phoneDisplay: "07466 936103",
//     phoneTel: "+447466936103",
//   };

//   const quickLinks = [
//     {
//       number: "01",
//       name: "Home",
//       path: "/",
//     },
//     {
//       number: "02",
//       name: "Services",
//       path: "/services",
//     },
//     {
//       number: "03",
//       name: "About Us",
//       path: "/about-us",
//     },
//     {
//       number: "04",
//       name: "Contact Us",
//       path: "/contact-us",
//     },
//   ];

//   const services = [
//     {
//       number: "01",
//       name: "Rats & Mice Control",
//       icon: Rat,
//       state: {
//         scrollToService: "Rats & Mice Control",
//         category: "Rodents & Wildlife",
//       },
//     },
//     {
//       number: "02",
//       name: "Bed Bug Treatments",
//       icon: Bug,
//       state: {
//         scrollToService: "Bed Bugs Control",
//         category: "Insects",
//       },
//     },
//     {
//       number: "03",
//       name: "Wasp Nest Control",
//       icon: ShieldCheck,
//       state: {
//         scrollToService: "Wasp Nest Removal",
//         category: "Insects",
//       },
//     },
//     {
//       number: "04",
//       name: "Home Pest Inspection",
//       icon: Home,
//       state: {
//         scrollToService: null,
//         category: "All",
//       },
//     },
//   ];

//   const serviceStandards = [
//     "Local Westminster support",
//     "Inspection-led service",
//     "Residential pest control",
//     "Commercial property support",
//   ];

//   return (
//     <footer
//       itemScope
//       itemType="https://schema.org/PestControlService"
//       className="relative overflow-hidden bg-[#16121E] font-sans text-white"
//     >
//       {/* SCHEMA */}
//       <meta itemProp="name" content={LOCAL.company} />

//       <meta
//         itemProp="areaServed"
//         content={`${LOCAL.area}, Central London`}
//       />

//       <div
//         itemProp="address"
//         itemScope
//         itemType="https://schema.org/PostalAddress"
//         className="hidden"
//       >
//         <meta
//           itemProp="streetAddress"
//           content={LOCAL.streetAddress}
//         />

//         <meta
//           itemProp="addressLocality"
//           content={LOCAL.city}
//         />

//         <meta
//           itemProp="postalCode"
//           content={LOCAL.postcode}
//         />

//         <meta itemProp="addressCountry" content="GB" />
//       </div>

//       <style>{`
//         .sgw-footer-grid {
//           background-image:
//             linear-gradient(
//               rgba(255, 255, 255, 0.035) 1px,
//               transparent 1px
//             ),
//             linear-gradient(
//               90deg,
//               rgba(255, 255, 255, 0.035) 1px,
//               transparent 1px
//             );
//           background-size: 70px 70px;
//         }

//         .sgw-footer-dot-grid {
//           background-image: radial-gradient(
//             circle,
//             rgba(194, 185, 255, 0.5) 1.2px,
//             transparent 1.2px
//           );
//           background-size: 11px 11px;
//         }

//         .sgw-footer-service-line::before {
//           content: "";
//           position: absolute;
//           left: 0;
//           bottom: 0;
//           width: 0;
//           height: 1px;
//           background: #bdb6ff;
//           transition: width 350ms ease;
//         }

//         .sgw-footer-service-line:hover::before {
//           width: 100%;
//         }
//       `}</style>

//       {/* BACKGROUND */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 overflow-hidden"
//       >
//         <div className="sgw-footer-grid absolute inset-0 opacity-60" />

//         <div className="absolute -left-60 -top-72 h-[660px] w-[660px] rounded-full bg-[#6254B4]/30 blur-[180px]" />

//         <div className="absolute -bottom-80 right-[-220px] h-[720px] w-[720px] rounded-full bg-[#6254B4]/20 blur-[190px]" />

//         <div className="sgw-footer-dot-grid absolute right-8 top-28 h-48 w-48 opacity-20" />

//         <div className="absolute right-0 top-0 h-full w-[31%] border-l border-white/[0.035] bg-white/[0.018]" />
//       </div>

//       {/* LARGE BACKGROUND TEXT */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute bottom-[-25px] left-1/2 hidden -translate-x-1/2 select-none whitespace-nowrap text-[180px] font-black uppercase leading-none tracking-[-0.085em] text-white/[0.018] xl:block 2xl:text-[220px]"
//       >
//         Westminster
//       </div>

//       <div className="relative z-10">
//         {/* ===================================================== */}
//         {/* TOP CONTROL STRIP */}
//         {/* ===================================================== */}

//         <div className="border-y border-white/10 bg-white/[0.025]">
//           <div className="mx-auto grid max-w-[1500px] lg:grid-cols-[1fr_auto]">
//             <div className="flex flex-col gap-6 px-5 py-7 sm:px-7 lg:flex-row lg:items-center lg:justify-between lg:px-10">
//               <div>
//                 <span className="block text-[8px] font-black uppercase tracking-[0.26em] text-[#BDB6FF]">
//                   Westminster Pest Control Desk
//                 </span>

//                 <h2 className="mt-2 max-w-3xl text-[25px] font-black leading-tight tracking-[-0.035em] text-white sm:text-[30px]">
//                   Noticed pest activity at your property?
//                 </h2>
//               </div>

//               <div className="flex flex-wrap gap-3">
//                 <Link
//                   to="/contact-us"
//                   className="group inline-flex min-h-[52px] items-center justify-center gap-4 bg-[#6254B4] px-6 text-[9px] font-black uppercase tracking-[0.17em] text-white transition-colors duration-300 hover:bg-white hover:text-[#18141F]"
//                 >
//                   Request Pest Support

//                   <ArrowUpRight
//                     size={17}
//                     strokeWidth={2.4}
//                     className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
//                   />
//                 </Link>

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="group inline-flex min-h-[52px] items-center justify-center gap-3 border border-white/15 px-6 text-[10px] font-black text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-[#18141F]"
//                 >
//                   <Phone
//                     size={17}
//                     strokeWidth={2.3}
//                     className="text-[#BDB6FF] transition-transform duration-300 group-hover:rotate-6 group-hover:text-[#6254B4]"
//                   />

//                   {LOCAL.phoneDisplay}
//                 </a>
//               </div>
//             </div>

//             <div className="hidden min-w-[230px] items-center justify-center border-l border-white/10 px-8 lg:flex">
//               <div className="flex items-center gap-4">
//                 <span className="relative flex h-3 w-3">
//                   <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#BDB6FF] opacity-45" />

//                   <span className="relative inline-flex h-3 w-3 rounded-full bg-[#BDB6FF]" />
//                 </span>

//                 <div>
//                   <span className="block text-[8px] font-black uppercase tracking-[0.22em] text-white/35">
//                     Service area
//                   </span>

//                   <span className="mt-1 block text-xs font-black text-white">
//                     Westminster · SW1P
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ===================================================== */}
//         {/* MAIN FOOTER DIRECTORY */}
//         {/* ===================================================== */}

//         <div className="mx-auto max-w-[1500px] px-5 sm:px-7 lg:px-10">
//           <div className="grid border-b border-white/10 lg:grid-cols-[1.1fr_0.72fr_1fr]">
//             {/* BRAND STATEMENT */}
//             <div className="border-b border-white/10 py-12 lg:border-b-0 lg:border-r lg:py-16 lg:pr-12">
//               <Link
//                 to="/"
//                 aria-label={`${LOCAL.company} home`}
//                 className="inline-flex items-center gap-4"
//               >
//                 <div className="flex h-[72px] w-[88px] items-center justify-center bg-white">
//                   <img
//                     src="/images/superguard-logo.webp"
//                     alt={`${LOCAL.company} logo`}
//                     className="h-[58px] w-[74px] object-contain"
//                     loading="lazy"
//                   />
//                 </div>

//                 <div>
//                   <span className="block text-[17px] font-black uppercase tracking-[-0.025em] text-white">
//                     SuperGuard
//                   </span>

//                   <span className="mt-1 block text-[8px] font-black uppercase tracking-[0.21em] text-[#BDB6FF]">
//                     Services Westminster
//                   </span>
//                 </div>
//               </Link>

//               <h3 className="mt-9 max-w-[520px] text-[35px] font-black leading-[0.98] tracking-[-0.045em] text-white sm:text-[42px]">
//                 Local pest control,
//                 <span className="block text-[#8F80E4]">
//                   clearly organised.
//                 </span>
//               </h3>

//               <p className="mb-0 mt-6 max-w-[520px] text-sm font-medium leading-7 text-white/55">
//                 Pest control support for homes, flats, landlords,
//                 offices and commercial properties across Westminster
//                 and Central London.
//               </p>

//               <div className="mt-8 grid gap-3 sm:grid-cols-2">
//                 {serviceStandards.map((item) => (
//                   <div
//                     key={item}
//                     className="flex items-center gap-3 border-t border-white/10 pt-3"
//                   >
//                     <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6254B4] text-white">
//                       <Check size={13} strokeWidth={3} />
//                     </span>

//                     <span className="text-[9px] font-black uppercase leading-5 tracking-[0.12em] text-white/60">
//                       {item}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* NAVIGATION INDEX */}
//             <div className="border-b border-white/10 py-12 lg:border-b-0 lg:border-r lg:px-10 lg:py-16">
//               <div className="flex items-center justify-between gap-5">
//                 <h3 className="text-[9px] font-black uppercase tracking-[0.25em] text-[#BDB6FF]">
//                   Site Directory
//                 </h3>

//                 <span className="text-[8px] font-black uppercase tracking-[0.18em] text-white/25">
//                   Index / 04
//                 </span>
//               </div>

//               <nav
//                 aria-label="Footer navigation"
//                 className="mt-8"
//               >
//                 {quickLinks.map((link) => (
//                   <Link
//                     key={link.name}
//                     to={link.path}
//                     className="group flex items-center gap-5 border-t border-white/10 py-5 last:border-b"
//                   >
//                     <span className="text-[9px] font-black tracking-[0.17em] text-[#6254B4]">
//                       {link.number}
//                     </span>

//                     <span className="text-[17px] font-black tracking-[-0.025em] text-white/65 transition-colors duration-300 group-hover:text-white">
//                       {link.name}
//                     </span>

//                     <ArrowRight
//                       size={17}
//                       strokeWidth={2.2}
//                       className="ml-auto -translate-x-2 text-[#BDB6FF] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
//                     />
//                   </Link>
//                 ))}
//               </nav>
//             </div>

//             {/* CONTACT TERMINAL */}
//             <div className="py-12 lg:py-16 lg:pl-10">
//               <div className="flex items-center justify-between gap-5">
//                 <h3 className="text-[9px] font-black uppercase tracking-[0.25em] text-[#BDB6FF]">
//                   Local Contact Terminal
//                 </h3>

//                 <span className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.16em] text-white/30">
//                   <span className="h-2 w-2 rounded-full bg-[#6254B4]" />
//                   Active
//                 </span>
//               </div>

//               <div className="mt-8 border border-white/10 bg-white/[0.035]">
//                 {/* ADDRESS */}
//                 <div className="grid grid-cols-[58px_1fr] border-b border-white/10">
//                   <div className="flex items-center justify-center border-r border-white/10 text-[#BDB6FF]">
//                     <MapPin size={20} strokeWidth={2.2} />
//                   </div>

//                   <div className="p-5">
//                     <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-white/30">
//                       Westminster base
//                     </span>

//                     <address className="mt-2 not-italic text-sm font-bold leading-6 text-white/70">
//                       {LOCAL.address}
//                     </address>
//                   </div>
//                 </div>

//                 {/* PHONE */}
//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="group grid grid-cols-[58px_1fr] border-b border-white/10 transition-colors duration-300 hover:bg-white/[0.05]"
//                 >
//                   <div className="flex items-center justify-center border-r border-white/10 text-[#BDB6FF]">
//                     <Phone
//                       size={20}
//                       strokeWidth={2.2}
//                       className="transition-transform duration-300 group-hover:rotate-6"
//                     />
//                   </div>

//                   <div className="p-5">
//                     <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-white/30">
//                       Call our team
//                     </span>

//                     <span className="mt-2 block text-lg font-black text-white">
//                       {LOCAL.phoneDisplay}
//                     </span>
//                   </div>
//                 </a>

//                 {/* AVAILABILITY */}
//                 <div className="grid grid-cols-[58px_1fr] border-b border-white/10">
//                   <div className="flex items-center justify-center border-r border-white/10 text-[#BDB6FF]">
//                     <Clock3 size={20} strokeWidth={2.2} />
//                   </div>

//                   <div className="p-5">
//                     <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-white/30">
//                       Enquiries
//                     </span>

//                     <span className="mt-2 block text-sm font-bold leading-6 text-white/70">
//                       Local property and pest control support
//                     </span>
//                   </div>
//                 </div>

//                 {/* PROPERTY TYPES */}
//                 <div className="grid grid-cols-[58px_1fr]">
//                   <div className="flex items-center justify-center border-r border-white/10 text-[#BDB6FF]">
//                     <Building2 size={20} strokeWidth={2.2} />
//                   </div>

//                   <div className="p-5">
//                     <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-white/30">
//                       Property coverage
//                     </span>

//                     <span className="mt-2 block text-sm font-bold leading-6 text-white/70">
//                       Residential and commercial properties
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <Link
//                 to="/contact-us"
//                 className="group mt-4 flex min-h-[54px] w-full items-center justify-between bg-white px-5 text-[9px] font-black uppercase tracking-[0.17em] text-[#18141F] transition-colors duration-300 hover:bg-[#6254B4] hover:text-white"
//               >
//                 Send An Enquiry

//                 <ArrowUpRight
//                   size={17}
//                   strokeWidth={2.4}
//                   className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
//                 />
//               </Link>
//             </div>
//           </div>

//           {/* ===================================================== */}
//           {/* SERVICE ROUTE DIRECTORY */}
//           {/* Scroll state intentionally preserved */}
//           {/* ===================================================== */}

//           <div className="border-b border-white/10 py-10">
//             <div className="flex flex-col gap-7 xl:flex-row xl:items-end xl:justify-between">
//               <div>
//                 <span className="text-[8px] font-black uppercase tracking-[0.23em] text-[#BDB6FF]">
//                   Pest Service Directory
//                 </span>

//                 <h3 className="mt-2 text-[25px] font-black tracking-[-0.035em] text-white">
//                   Select a service route
//                 </h3>
//               </div>

//               <div className="grid flex-1 gap-x-8 sm:grid-cols-2 xl:max-w-[950px] xl:grid-cols-4">
//                 {services.map((service) => {
//                   const Icon = service.icon;

//                   return (
//                     <Link
//                       key={service.name}
//                       to="/services"
//                       state={service.state}
//                       className="sgw-footer-service-line group relative flex items-center gap-4 border-t border-white/10 py-5"
//                     >
//                       <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-white/[0.06] text-[#BDB6FF] transition-colors duration-300 group-hover:bg-[#6254B4] group-hover:text-white">
//                         <Icon size={18} strokeWidth={2.3} />
//                       </span>

//                       <div>
//                         <span className="block text-[8px] font-black tracking-[0.17em] text-white/25">
//                           {service.number}
//                         </span>

//                         <span className="mt-1 block text-[12px] font-black leading-5 text-white/65 transition-colors duration-300 group-hover:text-white">
//                           {service.name}
//                         </span>
//                       </div>

//                       <ArrowRight
//                         size={15}
//                         strokeWidth={2.3}
//                         className="ml-auto text-[#BDB6FF] transition-transform duration-300 group-hover:translate-x-1"
//                       />
//                     </Link>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           {/* ===================================================== */}
//           {/* BOTTOM BAR */}
//           {/* ===================================================== */}

//           <div className="flex flex-col items-center justify-between gap-6 py-7 text-center lg:flex-row lg:text-left">
//             <p className="text-xs font-medium leading-6 text-white/35">
//               © {new Date().getFullYear()}{" "}
//               <span className="font-black text-white/65">
//                 {LOCAL.company}
//               </span>
//               . All rights reserved.
//             </p>

//             <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
//               {quickLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   className="text-[10px] font-bold text-white/35 transition-colors duration-300 hover:text-white"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </div>

//             <Link
//               to="/contact-us"
//               className="group flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.18em] text-[#BDB6FF] transition-colors duration-300 hover:text-white"
//             >
//               Contact Westminster Team

//               <span className="flex h-9 w-9 items-center justify-center border border-white/10 text-white transition-colors duration-300 group-hover:border-[#6254B4] group-hover:bg-[#6254B4]">
//                 <ArrowRight size={15} strokeWidth={2.4} />
//               </span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;















// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Bug,
//   Building2,
//   Home,
//   Mail,
//   MapPin,
//   Phone,
//   Rat,
//   ShieldCheck,
// } from "lucide-react";

// const Footer = () => {
//   const LOCAL = {
//     company: "Superguard Services West Wickham",
//     shortName: "Superguard West Wickham",
//     area: "West Wickham",
//     postcode: "BR4 0QL",
//     city: "London",
//     streetAddress: "16 Ash Grove",
//     address: "16 Ash Grove, West Wickham BR4 0QL",
//     phoneDisplay: "07356 270867",
//     phoneTel: "+447356270867",
//     email: "info@superguardwestwickham.uk",
//   };

//   const quickLinks = [
//     { number: "01", name: "Home", path: "/" },
//     { number: "02", name: "Services", path: "/services" },
//     { number: "03", name: "About Us", path: "/about-us" },
//     { number: "04", name: "Contact Us", path: "/contact-us" },
//   ];

//   const services = [
//     {
//       number: "01",
//       name: "Rats & Mice Control",
//       icon: Rat,
//       state: {
//         scrollToService: "Rats & Mice Control",
//         category: "Rodents & Wildlife",
//       },
//     },
//     {
//       number: "02",
//       name: "Bed Bug Treatments",
//       icon: Bug,
//       state: {
//         scrollToService: "Bed Bugs Control",
//         category: "Insects",
//       },
//     },
//     {
//       number: "03",
//       name: "Wasp Nest Control",
//       icon: ShieldCheck,
//       state: {
//         scrollToService: "Wasp Nest Removal",
//         category: "Insects",
//       },
//     },
//     {
//       number: "04",
//       name: "Home Pest Inspection",
//       icon: Home,
//       state: {
//         scrollToService: null,
//         category: "All",
//       },
//     },
//   ];

//   return (
//     <footer
//       className="relative overflow-hidden bg-[#6055A6] text-white"
//       itemScope
//       itemType="https://schema.org/LocalBusiness"
//     >
//       <meta itemProp="name" content={LOCAL.company} />
//       <meta itemProp="areaServed" content={`${LOCAL.area}, ${LOCAL.city}`} />
//       <meta itemProp="telephone" content={LOCAL.phoneDisplay} />
//       <meta itemProp="email" content={LOCAL.email} />

//       <div
//         itemProp="address"
//         itemScope
//         itemType="https://schema.org/PostalAddress"
//         className="hidden"
//       >
//         <meta itemProp="streetAddress" content={LOCAL.streetAddress} />
//         <meta itemProp="addressLocality" content={LOCAL.city} />
//         <meta itemProp="postalCode" content={LOCAL.postcode} />
//         <meta itemProp="addressCountry" content="GB" />
//       </div>

//       <style>{`
//         .sgw-footer-link {
//           transition: transform 300ms ease;
//         }

//         .sgw-footer-link:hover {
//           transform: translateX(4px);
//         }

//         .sgw-footer-service {
//           transition:
//             transform 300ms ease,
//             background-color 300ms ease,
//             border-color 300ms ease;
//         }

//         .sgw-footer-service:hover {
//           transform: translateY(-3px);
//           background-color: rgba(255,255,255,0.10);
//           border-color: rgba(255,255,255,0.30);
//         }

//         .sgw-footer-service-icon {
//           transition:
//             transform 300ms ease,
//             background-color 300ms ease,
//             color 300ms ease;
//         }

//         .sgw-footer-service:hover .sgw-footer-service-icon {
//           transform: scale(1.06) rotate(-4deg);
//           background-color: white;
//           color: #6055A6;
//         }

//         .sgw-footer-contact {
//           transition:
//             background-color 300ms ease,
//             border-color 300ms ease;
//         }

//         .sgw-footer-contact:hover {
//           background-color: rgba(255,255,255,0.08);
//           border-color: rgba(255,255,255,0.28);
//         }

//         .sgw-footer-grid {
//           background-image:
//             linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px);
//           background-size: 70px 70px;
//         }
//       `}</style>

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 overflow-hidden"
//       >
//         <div className="sgw-footer-grid absolute inset-0 opacity-30" />
//         <div className="absolute -left-40 -top-40 h-[430px] w-[430px] rounded-full bg-white/[0.09] blur-[120px]" />
//         <div className="absolute -bottom-56 -right-40 h-[520px] w-[520px] rounded-full bg-black/[0.15] blur-[130px]" />
//         <div className="absolute -right-32 top-12 h-[350px] w-[350px] rounded-full border border-white/[0.10]" />
//         <div className="absolute -right-20 top-24 h-[260px] w-[260px] rounded-full border border-white/[0.07]" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10 xl:px-12">

//         {/* MAIN DIRECTORY */}
//         <div className="grid border-b border-white/15 py-10 lg:grid-cols-[1.15fr_0.65fr_1.2fr] lg:py-12">

//           {/* BRAND */}
//           <div className="border-b border-white/15 pb-10 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10">

//             <Link to="/" className="inline-flex items-center gap-3">

//               <div className="flex h-12 w-14 items-center justify-center rounded-lg bg-white">

//                 <img
//                   src="/images/superguard-logo.webp"
//                   alt={LOCAL.company}
//                   className="h-10 w-11 object-contain"
//                 />

//               </div>

//               <div>

//                 <span className="block text-[15px] font-black uppercase">
//                   SuperGuard
//                 </span>

//                 <span className="mt-1 block text-[7px] font-black uppercase tracking-[0.22em] text-white/45">
//                   Services West Wickham
//                 </span>

//               </div>

//             </Link>

//             <p className="mt-6 max-w-[420px] text-xs leading-6 text-white/50">
//               Local pest control services for residential and commercial
//               properties across West Wickham and surrounding London areas.
//             </p>

//             <div className="mt-7 flex flex-wrap gap-2">

//               <span className="border border-white/15 px-3 py-2 text-[7px] font-black uppercase text-white/50">
//                 West Wickham
//               </span>

//               <span className="border border-white/15 px-3 py-2 text-[7px] font-black uppercase text-white/50">
//                 BR4
//               </span>

//               <span className="border border-white/15 px-3 py-2 text-[7px] font-black uppercase text-white/50">
//                 London
//               </span>

//             </div>

//           </div>

//           {/* QUICK LINKS */}
//           <div className="border-b border-white/15 py-10 lg:border-b-0 lg:border-r lg:px-8 lg:py-0">

//             <div className="flex items-center justify-between">

//               <span className="text-[8px] font-black uppercase tracking-[0.25em] text-white/40">
//                 Navigate
//               </span>

//               <span className="text-[7px] font-black uppercase text-white/25">
//                 04 Pages
//               </span>

//             </div>

//             <nav className="mt-5">

//               {quickLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   className="sgw-footer-link group flex items-center gap-3 border-t border-white/10 py-3.5 last:border-b"
//                 >

//                   <span className="text-[7px] text-white/25">
//                     {link.number}
//                   </span>

//                   <span className="text-[13px] font-black text-white/65 group-hover:text-white">
//                     {link.name}
//                   </span>

//                   <ArrowRight
//                     size={14}
//                     className="ml-auto text-white/25"
//                   />

//                 </Link>
//               ))}

//             </nav>

//           </div>

//           {/* CONTACT */}
//           <div className="pt-10 lg:pl-9 lg:pt-0">

//             <div className="flex items-center justify-between">

//               <span className="text-[8px] font-black uppercase tracking-[0.25em] text-white/40">
//                 Contact
//               </span>

//               <span className="text-[7px] uppercase text-white/30">
//                 Local Team
//               </span>

//             </div>

//             <div className="mt-5 grid gap-2">

//               <div className="sgw-footer-contact flex items-center gap-3 border border-white/10 p-3.5">

//                 <MapPin size={16} />

//                 <address className="not-italic text-xs font-bold text-white/65">
//                   {LOCAL.address}
//                 </address>

//               </div>

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="sgw-footer-contact flex items-center gap-3 border border-white/10 p-3.5"
//               >

//                 <Phone size={16} />

//                 <span className="text-xs font-black">
//                   {LOCAL.phoneDisplay}
//                 </span>

//               </a>

//               <a
//                 href={`mailto:${LOCAL.email}`}
//                 className="sgw-footer-contact flex items-center gap-3 border border-white/10 p-3.5"
//               >

//                 <Mail size={16} />

//                 <span className="text-xs font-black break-all">
//                   {LOCAL.email}
//                 </span>

//               </a>

//             </div>

//           </div>

//         </div>

//         {/* SERVICES */}
//         <div className="border-b border-white/15 py-8">

//           <div className="flex items-center justify-between">

//             <span className="text-[8px] font-black uppercase tracking-[0.25em] text-white/40">
//               Popular Services
//             </span>

//             <Link
//               to="/services"
//               className="text-[8px] uppercase text-white/45"
//             >
//               View All
//             </Link>

//           </div>

//           <div className="mt-5 grid grid-cols-2 gap-2 lg:grid-cols-4">

//             {services.map((service) => {
//               const Icon = service.icon;

//               return (
//                 <Link
//                   key={service.name}
//                   to="/services"
//                   state={service.state}
//                   className="sgw-footer-service flex items-center gap-3 border border-white/10 bg-white/[0.035] p-3.5"
//                 >

//                   <span className="sgw-footer-service-icon flex h-9 w-9 items-center justify-center bg-white/[0.07]">

//                     <Icon size={17} />

//                   </span>

//                   <span className="text-[10px] font-black text-white/60">
//                     {service.name}
//                   </span>

//                 </Link>
//               );
//             })}

//           </div>

//         </div>

//         {/* BOTTOM BAR */}
//         <div className="flex flex-col gap-4 py-6 lg:flex-row lg:items-center lg:justify-between">

//           <p className="text-[10px] text-white/30">
//             © {new Date().getFullYear()} {LOCAL.company}. All rights reserved.
//           </p>

//           <div className="flex gap-5 text-[7px] uppercase text-white/30">

//             <span>{LOCAL.area}</span>

//             <span>{LOCAL.postcode}</span>

//             <span>Residential & Commercial</span>

//           </div>

//           <Link
//             to="/contact-us"
//             className="flex items-center gap-2 text-[8px] uppercase text-white/55"
//           >

//             Contact West Wickham Team

//             <ArrowRight size={14} />

//           </Link>

//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;
















// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Bug,
//   Building2,
//   Home,
//   MapPin,
//   Phone,
//   Rat,
//   ShieldCheck,
// } from "lucide-react";

// const Footer = () => {
//   const LOCAL = {
//     company: "Superguard Services Isleworth",
//     shortName: "Superguard Isleworth",
//     area: "Isleworth",
//     postcode: "TW7 7HG",
//     city: "London",
//     streetAddress: "71 Talbot Rd",
//     address: "71 Talbot Rd, Isleworth TW7 7HG, United Kingdom",
//     phoneDisplay: "7405 940152",
//     phoneTel: "+447405940152",
//   };

//   const quickLinks = [
//     { number: "01", name: "Home", path: "/" },
//     { number: "02", name: "Services", path: "/services" },
//     { number: "03", name: "About Us", path: "/about-us" },
//     { number: "04", name: "Contact Us", path: "/contact-us" },
//   ];

//   const services = [
//     {
//       number: "01",
//       name: "Rats & Mice Control",
//       icon: Rat,
//       state: {
//         scrollToService: "Rats & Mice Control",
//         category: "Rodents & Wildlife",
//       },
//     },
//     {
//       number: "02",
//       name: "Bed Bug Treatment",
//       icon: Bug,
//       state: {
//         scrollToService: "Bed Bug Treatment",
//         category: "Insects",
//       },
//     },
//     {
//       number: "03",
//       name: "Wasp Nest Control",
//       icon: ShieldCheck,
//       state: {
//         scrollToService: "Wasp Nest Control",
//         category: "Insects",
//       },
//     },
//     {
//       number: "04",
//       name: "Property Proofing",
//       icon: Home,
//       state: {
//         scrollToService: "Property Proofing",
//         category: "Birds & Prevention",
//       },
//     },
//   ];

//   const propertyTypes = [
//     {
//       icon: Home,
//       title: "Residential",
//       text: "Homes, flats and everyday living spaces.",
//     },
//     {
//       icon: Building2,
//       title: "Commercial",
//       text: "Workplaces, premises and managed buildings.",
//     },
//   ];

//   return (
//     <footer
//       className="relative overflow-hidden bg-[#6055A6] text-white"
//       itemScope
//       itemType="https://schema.org/LocalBusiness"
//     >
//       <meta itemProp="name" content={LOCAL.company} />

//       <meta
//         itemProp="areaServed"
//         content={`${LOCAL.area}, ${LOCAL.city}`}
//       />

//       <meta itemProp="telephone" content={LOCAL.phoneDisplay} />

//       <div
//         itemProp="address"
//         itemScope
//         itemType="https://schema.org/PostalAddress"
//         className="hidden"
//       >
//         <meta
//           itemProp="streetAddress"
//           content={LOCAL.streetAddress}
//         />
//         <meta
//           itemProp="addressLocality"
//           content={LOCAL.city}
//         />
//         <meta
//           itemProp="postalCode"
//           content={LOCAL.postcode}
//         />
//         <meta itemProp="addressCountry" content="GB" />
//       </div>

//       <style>{`
//         .sg-isleworth-link {
//           transition:
//             color 250ms ease,
//             transform 250ms ease;
//         }

//         .sg-isleworth-link:hover {
//           color: #ffffff;
//           transform: translateX(5px);
//         }

//         .sg-isleworth-service {
//           transition:
//             background-color 250ms ease,
//             border-color 250ms ease,
//             transform 250ms ease,
//             box-shadow 250ms ease;
//         }

//         .sg-isleworth-service:hover {
//           background-color: #24212D;
//           border-color: #24212D;
//           transform: translateY(-2px);
//           box-shadow: 0 14px 30px rgba(36, 33, 45, 0.18);
//         }

//         .sg-isleworth-service:hover .sg-service-number,
//         .sg-isleworth-service:hover .sg-service-name,
//         .sg-isleworth-service:hover .sg-service-arrow {
//           color: #ffffff;
//         }

//         .sg-isleworth-service:hover .sg-service-icon {
//           background-color: #A59ED8;
//           color: #24212D;
//         }

//         .sg-isleworth-contact {
//           transition:
//             background-color 250ms ease,
//             border-color 250ms ease,
//             transform 250ms ease;
//         }

//         .sg-isleworth-contact:hover {
//           background-color: #24212D;
//           border-color: #24212D;
//           transform: translateY(-2px);
//         }

//         .sg-isleworth-contact:hover .sg-contact-icon {
//           background-color: #A59ED8;
//           color: #24212D;
//         }

//         .sg-isleworth-contact:hover .sg-contact-text {
//           color: #ffffff;
//         }

//         .sg-isleworth-property {
//           transition:
//             border-color 250ms ease,
//             background-color 250ms ease,
//             transform 250ms ease;
//         }

//         .sg-isleworth-property:hover {
//           border-color: #A59ED8;
//           background-color: #24212D;
//           transform: translateY(-2px);
//         }

//         .sg-isleworth-property:hover .sg-property-title,
//         .sg-isleworth-property:hover .sg-property-text {
//           color: #ffffff;
//         }

//         .sg-isleworth-property:hover .sg-property-icon {
//           color: #A59ED8;
//         }
//       `}</style>

//       {/* =====================================================
//           TOP STATEMENT
//       ===================================================== */}

//       <div className="bg-[#24212D] text-white">
//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
//           <div className="flex flex-col gap-7 py-10 lg:flex-row lg:items-end lg:justify-between lg:py-12">
//             <div>
//               <div className="flex items-center gap-3">
//                 <span className="h-[2px] w-8 bg-[#A59ED8]" />

//                 <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#A59ED8]">
//                   Local pest control · Isleworth
//                 </span>
//               </div>

//               <h2 className="mt-5 max-w-[760px] text-[32px] font-black leading-[0.98] tracking-[-0.045em] sm:text-[43px]">
//                 Professional pest control,
//                 <span className="block text-[#A59ED8]">
//                   close to home.
//                 </span>
//               </h2>
//             </div>

//             <Link
//               to="/contact-us"
//               className="group inline-flex w-fit items-center gap-10 border border-white/25 px-5 py-4 text-[8px] font-black uppercase tracking-[0.2em] text-white transition hover:border-[#A59ED8] hover:bg-[#A59ED8] hover:text-[#24212D]"
//             >
//               Discuss a pest problem

//               <ArrowUpRight
//                 size={15}
//                 className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
//               />
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* =====================================================
//           MAIN FOOTER
//       ===================================================== */}

//       <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

//         <div className="grid gap-0 border-b border-white/20 lg:grid-cols-[1.05fr_.65fr_1fr]">

//           {/* =================================================
//               BRAND COLUMN
//           ================================================= */}

//           <div className="border-b border-white/20 py-12 lg:border-b-0 lg:border-r lg:pr-12 lg:py-14">

//             <Link
//               to="/"
//               className="group inline-flex items-center gap-4"
//             >
//               <div className="flex h-[58px] w-[66px] items-center justify-center bg-white shadow-sm">
//                 <img
//                   src="/images/superguard-logo.webp"
//                   alt={LOCAL.company}
//                   className="h-12 w-12 object-contain"
//                 />
//               </div>

//               <div>
//                 <span className="block text-[17px] font-black uppercase tracking-[-0.025em] text-white">
//                   SuperGuard
//                 </span>

//                 <span className="mt-1 block text-[7px] font-black uppercase tracking-[0.24em] text-[#D7D3F0]">
//                   Services Isleworth
//                 </span>
//               </div>
//             </Link>

//             <p className="mt-7 max-w-[410px] text-[12px] leading-6 text-[#E2DFF2]">
//               Local pest control services for homes, businesses
//               and managed properties throughout Isleworth and
//               surrounding London areas.
//             </p>

//             <div className="mt-8">
//               <span className="text-[7px] font-black uppercase tracking-[0.25em] text-[#C9C5E2]">
//                 Based in
//               </span>

//               <p className="mt-2 text-[15px] font-black text-white">
//                 {LOCAL.area}, {LOCAL.city}
//               </p>

//               <p className="mt-1 text-[10px] font-bold text-[#D1CDE7]">
//                 {LOCAL.postcode}
//               </p>
//             </div>

//           </div>

//           {/* =================================================
//               NAVIGATION
//           ================================================= */}

//           <div className="border-b border-white/20 py-12 lg:border-b-0 lg:border-r lg:px-9 lg:py-14">

//             <div className="flex items-center justify-between">
//               <span className="text-[8px] font-black uppercase tracking-[0.25em] text-[#D7D3F0]">
//                 Site navigation
//               </span>

//               <span className="text-[7px] font-black text-[#BDB8D7]">
//                 04
//               </span>
//             </div>

//             <nav className="mt-7">
//               {quickLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   className="sg-isleworth-link group flex items-center border-t border-white/20 py-4 last:border-b"
//                 >
//                   <span className="w-8 text-[7px] font-black text-[#BDB8D7]">
//                     {link.number}
//                   </span>

//                   <span className="text-[12px] font-black text-white">
//                     {link.name}
//                   </span>

//                   <ArrowUpRight
//                     size={13}
//                     className="ml-auto text-[#C8C4DE] transition group-hover:text-white"
//                   />
//                 </Link>
//               ))}
//             </nav>

//           </div>

//           {/* =================================================
//               CONTACT
//           ================================================= */}

//           <div className="py-12 lg:py-14 lg:pl-10">

//             <div className="flex items-center justify-between">
//               <span className="text-[8px] font-black uppercase tracking-[0.25em] text-[#D7D3F0]">
//                 Contact the team
//               </span>

//               <span className="text-[7px] font-black uppercase tracking-[0.15em] text-[#C1BDD9]">
//                 Isleworth
//               </span>
//             </div>

//             <div className="mt-7 space-y-2">

//               {/* ADDRESS */}

//               <div className="sg-isleworth-contact flex items-start gap-4 border border-white/20 bg-white/10 p-4">

//                 <span className="sg-contact-icon flex h-9 w-9 shrink-0 items-center justify-center bg-[#A59ED8] text-[#24212D] transition">
//                   <MapPin size={16} />
//                 </span>

//                 <div>
//                   <span className="block text-[7px] font-black uppercase tracking-[0.18em] text-[#C9C5E2]">
//                     Address
//                   </span>

//                   <address className="sg-contact-text mt-1 not-italic text-[11px] font-black leading-5 text-white">
//                     {LOCAL.address}
//                   </address>
//                 </div>

//               </div>

//               {/* PHONE */}

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="sg-isleworth-contact flex items-center gap-4 border border-white/20 bg-white/10 p-4"
//               >

//                 <span className="sg-contact-icon flex h-9 w-9 shrink-0 items-center justify-center bg-[#A59ED8] text-[#24212D] transition">
//                   <Phone size={16} />
//                 </span>

//                 <div>
//                   <span className="block text-[7px] font-black uppercase tracking-[0.18em] text-[#C9C5E2]">
//                     Telephone
//                   </span>

//                   <span className="sg-contact-text mt-1 block text-[15px] font-black text-white">
//                     {LOCAL.phoneDisplay}
//                   </span>
//                 </div>

//                 <ArrowUpRight
//                   size={14}
//                   className="ml-auto text-[#D0CCE4]"
//                 />

//               </a>

//             </div>

//             <div className="mt-5 border-l-2 border-[#A59ED8] pl-4">
//               <p className="text-[10px] leading-5 text-[#E2DFF2]">
//                 For enquiries, describe the pest activity,
//                 where you've noticed it and the type of property.
//               </p>
//             </div>

//           </div>

//         </div>

//         {/* =====================================================
//             SERVICE DIRECTORY
//         ===================================================== */}

//         <div className="border-b border-white/20 py-12 lg:py-14">

//           <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

//             <div>
//               <span className="text-[8px] font-black uppercase tracking-[0.25em] text-[#D7D3F0]">
//                 Service directory
//               </span>

//               <h3 className="mt-3 text-[27px] font-black tracking-[-0.045em] text-white sm:text-[34px]">
//                 Common pest problems
//               </h3>
//             </div>

//             <Link
//               to="/services"
//               className="group flex w-fit items-center gap-3 text-[8px] font-black uppercase tracking-[0.18em] text-white"
//             >
//               Explore all services

//               <ArrowRight
//                 size={14}
//                 className="transition group-hover:translate-x-1"
//               />
//             </Link>

//           </div>

//           <div className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">

//             {services.map((service) => {
//               const Icon = service.icon;

//               return (
//                 <Link
//                   key={service.name}
//                   to="/services"
//                   state={service.state}
//                   className="sg-isleworth-service group relative border border-white/20 bg-white/10 p-5"
//                 >

//                   <div className="flex items-start justify-between">

//                     <span className="sg-service-number text-[8px] font-black tracking-[0.15em] text-[#C5C1DE] transition">
//                       {service.number}
//                     </span>

//                     <ArrowUpRight
//                       size={14}
//                       className="sg-service-arrow text-[#D0CCE4] transition"
//                     />

//                   </div>

//                   <span className="sg-service-icon mt-8 flex h-10 w-10 items-center justify-center bg-[#A59ED8] text-[#24212D] transition">
//                     <Icon size={18} />
//                   </span>

//                   <span className="sg-service-name mt-5 block text-[11px] font-black leading-5 text-white transition">
//                     {service.name}
//                   </span>

//                 </Link>
//               );
//             })}

//           </div>

//         </div>

//         {/* =====================================================
//             PROPERTY / SERVICE AREA STRIP
//         ===================================================== */}

//         <div className="grid border-b border-white/20 lg:grid-cols-[1fr_1fr]">

//           {/* PROPERTY TYPES */}

//           <div className="py-10 lg:border-r lg:border-white/20 lg:pr-10">

//             <span className="text-[8px] font-black uppercase tracking-[0.25em] text-[#D7D3F0]">
//               Property types
//             </span>

//             <div className="mt-6 grid gap-2 sm:grid-cols-2">

//               {propertyTypes.map((item) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={item.title}
//                     className="sg-isleworth-property border border-white/20 bg-white/10 p-4"
//                   >

//                     <Icon
//                       size={17}
//                       className="sg-property-icon text-[#D7D3F0]"
//                     />

//                     <h4 className="sg-property-title mt-4 text-[12px] font-black text-white transition">
//                       {item.title}
//                     </h4>

//                     <p className="sg-property-text mt-2 text-[9px] leading-5 text-[#DDD9ED] transition">
//                       {item.text}
//                     </p>

//                   </div>
//                 );
//               })}

//             </div>

//           </div>

//           {/* SERVICE AREA */}

//           <div className="py-10 lg:pl-10">

//             <span className="text-[8px] font-black uppercase tracking-[0.25em] text-[#D7D3F0]">
//               Local coverage
//             </span>

//             <div className="mt-6 flex gap-5">

//               <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#24212D] text-[#A59ED8]">
//                 <MapPin size={19} />
//               </div>

//               <div>
//                 <h4 className="text-[18px] font-black tracking-[-0.03em] text-white">
//                   {LOCAL.area}
//                 </h4>

//                 <p className="mt-1 text-[9px] font-black uppercase tracking-[0.16em] text-[#C8C4DE]">
//                   {LOCAL.city} · {LOCAL.postcode}
//                 </p>

//                 <p className="mt-4 max-w-[390px] text-[10px] leading-5 text-[#E0DDEC]">
//                   Serving residential and commercial properties
//                   in {LOCAL.area} and surrounding London locations.
//                 </p>
//               </div>

//             </div>

//           </div>

//         </div>

//         {/* =====================================================
//             BOTTOM BAR
//         ===================================================== */}

//         <div className="flex flex-col gap-5 py-7 lg:flex-row lg:items-center lg:justify-between">

//           <div>
//             <p className="text-[9px] font-bold text-[#E0DDEC]">
//               © {new Date().getFullYear()} {LOCAL.company}
//             </p>

//             <p className="mt-1 text-[7px] font-black uppercase tracking-[0.18em] text-[#C4C0DB]">
//               Pest control services · {LOCAL.area} · London
//             </p>
//           </div>

//           <div className="flex flex-wrap items-center gap-x-5 gap-y-2">

//             <span className="text-[7px] font-black uppercase tracking-[0.18em] text-[#D0CCE4]">
//               {LOCAL.postcode}
//             </span>

//             <span className="h-3 w-px bg-white/25" />

//             <span className="text-[7px] font-black uppercase tracking-[0.18em] text-[#D0CCE4]">
//               Residential
//             </span>

//             <span className="h-3 w-px bg-white/25" />

//             <span className="text-[7px] font-black uppercase tracking-[0.18em] text-[#D0CCE4]">
//               Commercial
//             </span>

//           </div>

//           <Link
//             to="/contact-us"
//             className="group flex items-center gap-3 text-[8px] font-black uppercase tracking-[0.18em] text-white"
//           >
//             Contact Isleworth

//             <span className="flex h-7 w-7 items-center justify-center border border-white/30 transition group-hover:bg-white group-hover:text-[#6055A6]">
//               <ArrowUpRight size={13} />
//             </span>
//           </Link>

//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;






















// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Bug,
//   Building2,
//   Home,
//   Mail,
//   MapPin,
//   Phone,
//   Rat,
//   ShieldCheck,
// } from "lucide-react";

// const Footer = () => {
//   const LOCAL = {
//     company: "SuperGuard Services Chelsea",
//     shortName: "SuperGuard Chelsea",
//     area: "Chelsea",
//     postcode: "SW3 6NU",
//     city: "London",
//     streetAddress: "13 Guthrie St",
//     address: "13 Guthrie St, London SW3 6NU, United Kingdom",
//     phoneDisplay: "07405 745692",
//     phoneTel: "+447405745692",
//     email: "info@superguardchelsea.uk",
//   };

//   const quickLinks = [
//     { number: "01", name: "Home", path: "/" },
//     { number: "02", name: "Services", path: "/services" },
//     { number: "03", name: "About Us", path: "/about-us" },
//     { number: "04", name: "Contact Us", path: "/contact-us" },
//   ];

//   const services = [
//     {
//       number: "01",
//       name: "Rats & Mice Control",
//       icon: Rat,
//       state: {
//         scrollToService: "Rats & Mice Control",
//         category: "Rodents & Wildlife",
//       },
//     },
//     {
//       number: "02",
//       name: "Bed Bug Treatment",
//       icon: Bug,
//       state: {
//         scrollToService: "Bed Bug Treatment",
//         category: "Insects",
//       },
//     },
//     {
//       number: "03",
//       name: "Wasp Nest Control",
//       icon: ShieldCheck,
//       state: {
//         scrollToService: "Wasp Nest Control",
//         category: "Insects",
//       },
//     },
//     {
//       number: "04",
//       name: "Property Proofing",
//       icon: Home,
//       state: {
//         scrollToService: "Property Proofing",
//         category: "Birds & Prevention",
//       },
//     },
//   ];

//   const propertyTypes = [
//     {
//       icon: Home,
//       number: "01",
//       title: "Residential",
//       text: "Homes, flats and everyday living spaces.",
//     },
//     {
//       icon: Building2,
//       number: "02",
//       title: "Commercial",
//       text: "Workplaces, premises and managed buildings.",
//     },
//   ];

//   return (
//     <footer
//       className="relative overflow-hidden bg-[#6055A6] text-white"
//       itemScope
//       itemType="https://schema.org/LocalBusiness"
//     >
//       {/* =====================================================
//           LOCAL BUSINESS SEO DATA
//       ===================================================== */}

//       <meta itemProp="name" content={LOCAL.company} />

//       <meta
//         itemProp="areaServed"
//         content={`${LOCAL.area}, ${LOCAL.city}`}
//       />

//       <meta itemProp="telephone" content={LOCAL.phoneDisplay} />

//       <meta itemProp="email" content={LOCAL.email} />

//       <div
//         itemProp="address"
//         itemScope
//         itemType="https://schema.org/PostalAddress"
//         className="hidden"
//       >
//         <meta
//           itemProp="streetAddress"
//           content={LOCAL.streetAddress}
//         />

//         <meta
//           itemProp="addressLocality"
//           content={LOCAL.city}
//         />

//         <meta
//           itemProp="postalCode"
//           content={LOCAL.postcode}
//         />

//         <meta itemProp="addressCountry" content="GB" />
//       </div>

//       <style>{`
//         .sg-chelsea-footer-link {
//           transition:
//             color 220ms ease,
//             transform 220ms ease;
//         }

//         .sg-chelsea-footer-link:hover {
//           color: #A59ED8;
//           transform: translateX(5px);
//         }

//         .sg-chelsea-service-row {
//           transition:
//             background-color 250ms ease,
//             padding-left 250ms ease,
//             border-color 250ms ease;
//         }

//         .sg-chelsea-service-row:hover {
//           background-color: #24212D;
//           padding-left: 14px;
//           border-color: rgba(165, 158, 216, 0.4);
//         }

//         .sg-chelsea-service-row:hover
//         .sg-chelsea-service-arrow {
//           color: #A59ED8;
//           transform: translateX(4px) translateY(-2px);
//         }

//         .sg-chelsea-property {
//           transition:
//             background-color 250ms ease,
//             border-color 250ms ease,
//             transform 250ms ease;
//         }

//         .sg-chelsea-property:hover {
//           background-color: #24212D;
//           border-color: rgba(165, 158, 216, 0.35);
//           transform: translateY(-3px);
//         }

//         .sg-chelsea-property:hover
//         .sg-chelsea-property-icon {
//           background-color: #A59ED8;
//           color: #24212D;
//         }

//         .sg-chelsea-contact {
//           transition:
//             background-color 250ms ease,
//             border-color 250ms ease,
//             transform 250ms ease;
//         }

//         .sg-chelsea-contact:hover {
//           background-color: #24212D;
//           border-color: rgba(165, 158, 216, 0.4);
//           transform: translateX(2px);
//         }

//         .sg-chelsea-contact:hover
//         .sg-chelsea-contact-icon {
//           background-color: #A59ED8;
//           color: #24212D;
//         }

//         .sg-chelsea-contact:hover
//         .sg-chelsea-contact-arrow {
//           color: #A59ED8;
//           transform: translateX(4px);
//         }

//         .sg-chelsea-big-number {
//           font-variant-numeric: tabular-nums;
//         }

//         .sg-chelsea-purple-button {
//           transition:
//             background-color 220ms ease,
//             transform 220ms ease;
//         }

//         .sg-chelsea-purple-button:hover {
//           background-color: #51478F;
//           transform: translateY(-2px);
//         }

//         .sg-chelsea-dark-button {
//           transition:
//             background-color 220ms ease,
//             transform 220ms ease;
//         }

//         .sg-chelsea-dark-button:hover {
//           background-color: #15131A;
//           transform: translateY(-2px);
//         }
//       `}</style>

//       {/* =====================================================
//           CONTACT HERO
//       ===================================================== */}

//       <section className="relative overflow-hidden bg-[#6055A6]">

//         {/* Decorative geometry */}

//         <div className="pointer-events-none absolute -right-28 -top-28 h-[430px] w-[430px] rounded-full border border-white/10" />

//         <div className="pointer-events-none absolute right-[-5px] top-[-5px] h-[240px] w-[240px] rounded-full border border-white/10" />

//         <div className="pointer-events-none absolute bottom-[-100px] left-[-100px] h-[260px] w-[260px] rounded-full bg-[#51478F]/35 blur-3xl" />

//         <div className="mx-auto max-w-[1550px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">

//           <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

//             <div>

//               <div className="flex items-center gap-3">

//                 <span className="h-[2px] w-9 bg-[#24212D]" />

//                 <span className="text-[8px] font-black uppercase tracking-[.3em] text-white/70">
//                   Local pest control · {LOCAL.area}
//                 </span>

//               </div>

//               <h2 className="mt-7 max-w-[920px] text-[47px] font-black leading-[.88] tracking-[-.065em] sm:text-[68px] lg:text-[82px]">

//                 Something unwanted

//                 <span className="block text-[#24212D]">
//                   in your property?
//                 </span>

//               </h2>

//               <p className="mt-7 max-w-[600px] text-[12px] font-medium leading-7 text-white/70 sm:text-[13px]">
//                 Tell SuperGuard Services Chelsea what you've
//                 noticed and where you've noticed it. We'll help
//                 establish the appropriate next step.
//               </p>

//             </div>

//             <Link
//               to="/contact-us"
//               className="sg-chelsea-dark-button group flex min-h-[58px] items-center justify-between gap-12 bg-[#24212D] px-6 text-[8px] font-black uppercase tracking-[.2em] text-white"
//             >
//               Contact the team

//               <ArrowRight
//                 size={16}
//                 className="transition group-hover:translate-x-1"
//               />
//             </Link>

//           </div>

//         </div>
//       </section>

//       {/* =====================================================
//           MAIN FOOTER
//       ===================================================== */}

//       <div className="mx-auto max-w-[1550px] px-5 sm:px-8 lg:px-12">

//         {/* ===================================================
//             BRAND + CONTACT
//         =================================================== */}

//         <section className="grid border-t border-white/10 lg:grid-cols-[1.15fr_.85fr]">

//           {/* BRAND */}

//           <div className="relative border-b border-white/10 py-14 lg:border-b-0 lg:border-r lg:pr-16 lg:py-20">

//             <div className="absolute right-8 top-10 hidden text-[150px] font-black leading-none tracking-[-.12em] text-white/[0.07] lg:block">
//               SG
//             </div>

//             <Link
//               to="/"
//               className="relative z-10 inline-flex items-center gap-4"
//             >

//               {/* Changed logo treatment */}

//               <div className="relative flex h-[66px] w-[66px] items-center justify-center overflow-hidden rounded-[18px] bg-[#F7F6FA] shadow-xl">

//                 <div className="absolute -right-5 -top-5 h-10 w-10 rounded-full bg-[#A59ED8]/40" />

//                 <img
//                   src="/images/superguard-logo.webp"
//                   alt={LOCAL.company}
//                   className="relative z-10 h-[48px] w-[48px] object-contain"
//                 />

//               </div>

//               <div>

//                 <span className="block text-[18px] font-black uppercase tracking-[-.035em]">
//                   SuperGuard
//                 </span>

//                 <span className="mt-1 block text-[7px] font-black uppercase tracking-[.28em] text-[#A59ED8]">
//                   Services Chelsea
//                 </span>

//               </div>

//             </Link>

//             <p className="relative z-10 mt-8 max-w-[510px] text-[12px] leading-7 text-white/50">
//               Pest control services for residential,
//               commercial and managed properties throughout
//               Chelsea and nearby London areas.
//             </p>

//             <div className="relative z-10 mt-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:gap-8">

//               <div>

//                 <span className="text-[7px] font-black uppercase tracking-[.24em] text-white/30">
//                   Local base
//                 </span>

//                 <p className="mt-2 text-[16px] font-black text-white">
//                   {LOCAL.area}
//                 </p>

//               </div>

//               <span className="hidden h-8 w-px bg-white/15 sm:block" />

//               <div>

//                 <span className="text-[7px] font-black uppercase tracking-[.24em] text-white/30">
//                   Postcode
//                 </span>

//                 <p className="mt-2 text-[11px] font-black text-[#A59ED8]">
//                   {LOCAL.postcode}
//                 </p>

//               </div>

//             </div>

//           </div>

//           {/* CONTACT */}

//           <div className="py-14 lg:py-20 lg:pl-16">

//             <div className="flex items-center justify-between">

//               <span className="text-[8px] font-black uppercase tracking-[.28em] text-[#A59ED8]">
//                 Contact details
//               </span>

//               <span className="text-[7px] font-black uppercase tracking-[.18em] text-white/25">
//                 {LOCAL.city}
//               </span>

//             </div>

//             <div className="mt-8">

//               {/* ADDRESS */}

//               <div className="sg-chelsea-contact border border-white/10 bg-[#6055A6] p-5">

//                 <div className="flex gap-4">

//                   <span className="sg-chelsea-contact-icon flex h-10 w-10 shrink-0 items-center justify-center bg-[#24212D] text-[#A59ED8] transition">
//                     <MapPin size={17} />
//                   </span>

//                   <div>

//                     <span className="block text-[7px] font-black uppercase tracking-[.2em] text-white/30">
//                       Visit / correspondence
//                     </span>

//                     <address className="mt-2 max-w-[360px] not-italic text-[14px] font-black leading-6 text-white">
//                       {LOCAL.address}
//                     </address>

//                   </div>

//                 </div>

//               </div>

//               {/* PHONE */}

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="sg-chelsea-contact mt-2 flex items-center gap-4 border border-white/10 bg-[#6055A6] p-5"
//               >

//                 <span className="sg-chelsea-contact-icon flex h-10 w-10 shrink-0 items-center justify-center bg-[#24212D] text-[#A59ED8] transition">
//                   <Phone size={17} />
//                 </span>

//                 <div>

//                   <span className="block text-[7px] font-black uppercase tracking-[.2em] text-white/30">
//                     Call directly
//                   </span>

//                   <span className="mt-2 block text-[18px] font-black text-white">
//                     {LOCAL.phoneDisplay}
//                   </span>

//                 </div>

//                 <ArrowUpRight
//                   size={16}
//                   className="sg-chelsea-contact-arrow ml-auto text-white/30 transition"
//                 />

//               </a>

//               {/* EMAIL */}

//               <a
//                 href={`mailto:${LOCAL.email}`}
//                 className="sg-chelsea-contact mt-2 flex items-center gap-4 border border-white/10 bg-[#6055A6] p-5"
//               >

//                 <span className="sg-chelsea-contact-icon flex h-10 w-10 shrink-0 items-center justify-center bg-[#24212D] text-[#A59ED8] transition">
//                   <Mail size={17} />
//                 </span>

//                 <div className="min-w-0">

//                   <span className="block text-[7px] font-black uppercase tracking-[.2em] text-white/30">
//                     Email the team
//                   </span>

//                   <span className="mt-2 block break-all text-[13px] font-black text-white sm:text-[14px]">
//                     {LOCAL.email}
//                   </span>

//                 </div>

//                 <ArrowUpRight
//                   size={16}
//                   className="sg-chelsea-contact-arrow ml-auto shrink-0 text-white/30 transition"
//                 />

//               </a>

//             </div>

//           </div>

//         </section>

//         {/* ===================================================
//             NAVIGATION + SERVICES
//         =================================================== */}

//         <section className="grid border-t border-white/10 lg:grid-cols-[.62fr_1.38fr]">

//           {/* NAVIGATION */}

//           <div className="border-b border-white/10 py-14 lg:border-b-0 lg:border-r lg:pr-12 lg:py-16">

//             <div className="flex items-center justify-between">

//               <span className="text-[8px] font-black uppercase tracking-[.27em] text-white/35">
//                 Navigate
//               </span>

//               <span className="text-[7px] font-black text-white/20">
//                 04 pages
//               </span>

//             </div>

//             <nav className="mt-8">

//               {quickLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   className="sg-chelsea-footer-link group flex items-center border-t border-white/10 py-5 last:border-b"
//                 >

//                   <span className="w-9 text-[7px] font-black text-[#A59ED8]">
//                     {link.number}
//                   </span>

//                   <span className="text-[12px] font-black text-white">
//                     {link.name}
//                   </span>

//                   <ArrowUpRight
//                     size={14}
//                     className="ml-auto text-white/30 transition group-hover:text-[#A59ED8]"
//                   />

//                 </Link>
//               ))}

//             </nav>

//           </div>

//           {/* SERVICES */}

//           <div className="py-14 lg:py-16 lg:pl-12">

//             <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

//               <div>

//                 <span className="text-[8px] font-black uppercase tracking-[.27em] text-[#A59ED8]">
//                   Selected services
//                 </span>

//                 <h3 className="mt-3 text-[28px] font-black tracking-[-.045em] text-white sm:text-[35px]">
//                   Common pest problems.
//                 </h3>

//               </div>

//               <Link
//                 to="/services"
//                 className="group inline-flex items-center gap-3 text-[8px] font-black uppercase tracking-[.18em] text-white/60 transition hover:text-white"
//               >

//                 View full range

//                 <ArrowRight
//                   size={14}
//                   className="transition group-hover:translate-x-1"
//                 />

//               </Link>

//             </div>

//             <div className="mt-8 grid gap-x-8 sm:grid-cols-2">

//               {services.map((service) => {
//                 const Icon = service.icon;

//                 return (
//                   <Link
//                     key={service.name}
//                     to="/services"
//                     state={service.state}
//                     className="sg-chelsea-service-row group flex items-center gap-4 border-t border-white/10 py-5"
//                   >

//                     <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#24212D] text-[#A59ED8]">
//                       <Icon size={16} />
//                     </span>

//                     <span className="min-w-0">

//                       <span className="block text-[7px] font-black tracking-[.16em] text-white/25">
//                         {service.number}
//                       </span>

//                       <span className="mt-1 block text-[11px] font-black text-white">
//                         {service.name}
//                       </span>

//                     </span>

//                     <ArrowUpRight
//                       size={14}
//                       className="sg-chelsea-service-arrow ml-auto shrink-0 text-white/25 transition"
//                     />

//                   </Link>
//                 );
//               })}

//             </div>

//           </div>

//         </section>

//         {/* ===================================================
//             PROPERTY TYPES + LOCAL AREA
//         =================================================== */}

//         <section className="grid border-t border-white/10 lg:grid-cols-[1fr_1fr]">

//           {/* PROPERTY TYPES */}

//           <div className="border-b border-white/10 py-12 lg:border-b-0 lg:border-r lg:pr-12 lg:py-16">

//             <span className="text-[8px] font-black uppercase tracking-[.27em] text-white/35">
//               Property environments
//             </span>

//             <div className="mt-7 grid gap-2 sm:grid-cols-2">

//               {propertyTypes.map((item) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={item.title}
//                     className="sg-chelsea-property border border-white/10 bg-[#6055A6] p-5"
//                   >

//                     <div className="flex items-start justify-between">

//                       <span className="sg-chelsea-property-icon flex h-9 w-9 items-center justify-center bg-[#24212D] text-[#A59ED8] transition">
//                         <Icon size={16} />
//                       </span>

//                       <span className="text-[7px] font-black text-white/20">
//                         {item.number}
//                       </span>

//                     </div>

//                     <h4 className="mt-7 text-[13px] font-black text-white">
//                       {item.title}
//                     </h4>

//                     <p className="mt-2 text-[9px] leading-5 text-white/35">
//                       {item.text}
//                     </p>

//                   </div>
//                 );
//               })}

//             </div>

//           </div>

//           {/* LOCAL AREA */}

//           <div className="py-12 lg:py-16 lg:pl-12">

//             <div className="flex items-center gap-3">

//               <MapPin
//                 size={15}
//                 className="text-[#A59ED8]"
//               />

//               <span className="text-[8px] font-black uppercase tracking-[.27em] text-[#A59ED8]">
//                 Local coverage
//               </span>

//             </div>

//             <div className="mt-7 flex items-end gap-5">

//               <span className="sg-chelsea-big-number text-[76px] font-black leading-[.75] tracking-[-.09em] text-[#24212D] sm:text-[105px]">
//                 SW3
//               </span>

//               <div className="pb-1">

//                 <span className="block text-[21px] font-black tracking-[-.04em] text-white">
//                   {LOCAL.area}
//                 </span>

//                 <span className="mt-1 block text-[8px] font-black uppercase tracking-[.18em] text-[#A59ED8]">
//                   {LOCAL.city} · {LOCAL.postcode}
//                 </span>

//               </div>

//             </div>

//             <p className="mt-8 max-w-[510px] text-[10px] leading-6 text-white/35">
//               SuperGuard Services Chelsea serves properties
//               throughout Chelsea and nearby London areas,
//               covering domestic, managed and commercial
//               environments.
//             </p>

//             <Link
//               to="/contact-us"
//               className="group mt-7 inline-flex items-center gap-4 border-b border-[#A59ED8] pb-3 text-[8px] font-black uppercase tracking-[.18em] text-white"
//             >

//               Ask about your area

//               <ArrowRight
//                 size={14}
//                 className="transition group-hover:translate-x-1"
//               />

//             </Link>

//           </div>

//         </section>

//         {/* ===================================================
//             BOTTOM BAR
//         =================================================== */}

//         <div className="flex flex-col gap-5 border-t border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between">

//           <div>

//             <p className="text-[8px] font-bold text-white/40">
//               © {new Date().getFullYear()} {LOCAL.company}
//             </p>

//             <p className="mt-1 text-[7px] font-black uppercase tracking-[.18em] text-white/20">
//               Pest control · {LOCAL.area} · {LOCAL.city}
//             </p>

//           </div>

//           <div className="flex flex-wrap items-center gap-4">

//             <span className="text-[7px] font-black uppercase tracking-[.17em] text-white/25">
//               {LOCAL.postcode}
//             </span>

//             <span className="h-3 w-px bg-white/15" />

//             <span className="text-[7px] font-black uppercase tracking-[.17em] text-white/25">
//               Residential
//             </span>

//             <span className="h-3 w-px bg-white/15" />

//             <span className="text-[7px] font-black uppercase tracking-[.17em] text-white/25">
//               Commercial
//             </span>

//           </div>

//           <Link
//             to="/contact-us"
//             className="group flex items-center gap-3 text-[8px] font-black uppercase tracking-[.18em] text-white"
//           >

//             Contact Chelsea

//             <span className="flex h-7 w-7 items-center justify-center border border-white/15 transition group-hover:border-[#A59ED8] group-hover:bg-[#A59ED8] group-hover:text-[#24212D]">
//               <ArrowUpRight size={13} />
//             </span>

//           </Link>

//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;



















// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Bug,
//   Building2,
//   Home,
//   Mail,
//   MapPin,
//   Phone,
//   Rat,
//   ShieldCheck,
// } from "lucide-react";

// const Footer = () => {
//   const LOCAL = {
//     company: "SuperGuard Services Woolwich",
//     shortName: "SuperGuard Woolwich",
//     area: "Woolwich",
//     postcode: "SE18 3QJ",
//     city: "London",
//     streetAddress: "41 Ripon Rd",
//     address: "41 Ripon Rd, London SE18 3QJ, United Kingdom",
//     phoneDisplay: "07356 230776",
//     phoneTel: "+447356230776",
//   };

//   const quickLinks = [
//     {
//       number: "01",
//       name: "Home",
//       path: "/",
//     },
//     {
//       number: "02",
//       name: "Services",
//       path: "/services",
//     },
//     {
//       number: "03",
//       name: "About Us",
//       path: "/about-us",
//     },
//     {
//       number: "04",
//       name: "Contact Us",
//       path: "/contact-us",
//     },
//   ];

//   const services = [
//     {
//       number: "01",
//       name: "Rats & Mice Control",
//       icon: Rat,
//       state: {
//         scrollToService: "Rats & Mice Control",
//         category: "Rodents & Wildlife",
//       },
//     },
//     {
//       number: "02",
//       name: "Bed Bug Treatment",
//       icon: Bug,
//       state: {
//         scrollToService: "Bed Bug Treatment",
//         category: "Insects",
//       },
//     },
//     {
//       number: "03",
//       name: "Wasp Nest Control",
//       icon: ShieldCheck,
//       state: {
//         scrollToService: "Wasp Nest Control",
//         category: "Insects",
//       },
//     },
//     {
//       number: "04",
//       name: "Property Proofing",
//       icon: Home,
//       state: {
//         scrollToService: "Property Proofing",
//         category: "Birds & Prevention",
//       },
//     },
//   ];

//   const propertyTypes = [
//     {
//       icon: Home,
//       number: "01",
//       title: "Residential",
//       text: "Homes, flats and everyday living spaces.",
//     },
//     {
//       icon: Building2,
//       number: "02",
//       title: "Commercial",
//       text: "Workplaces, premises and managed buildings.",
//     },
//   ];

//   return (
//     <footer
//       className="relative overflow-hidden bg-[#6055A6] text-white"
//       itemScope
//       itemType="https://schema.org/LocalBusiness"
//     >
//       {/* =========================================================
//           SEO DATA
//       ========================================================= */}

//       <meta itemProp="name" content={LOCAL.company} />

//       <meta
//         itemProp="areaServed"
//         content={`${LOCAL.area}, ${LOCAL.city}`}
//       />

//       <meta
//         itemProp="telephone"
//         content={LOCAL.phoneDisplay}
//       />

//       <div
//         itemProp="address"
//         itemScope
//         itemType="https://schema.org/PostalAddress"
//         className="hidden"
//       >
//         <meta
//           itemProp="streetAddress"
//           content={LOCAL.streetAddress}
//         />

//         <meta
//           itemProp="addressLocality"
//           content={LOCAL.city}
//         />

//         <meta
//           itemProp="postalCode"
//           content={LOCAL.postcode}
//         />

//         <meta
//           itemProp="addressCountry"
//           content="GB"
//         />
//       </div>

//       {/* =========================================================
//           FOOTER STYLES
//       ========================================================= */}

//       <style>{`
//         .sg-woolwich-link {
//           transition:
//             color 220ms ease,
//             transform 220ms ease;
//         }

//         .sg-woolwich-link:hover {
//           color: #A59ED8;
//           transform: translateX(5px);
//         }

//         .sg-woolwich-service {
//           transition:
//             background-color 250ms ease,
//             border-color 250ms ease,
//             transform 250ms ease;
//         }

//         .sg-woolwich-service:hover {
//           background-color: #24212D;
//           border-color: rgba(165, 158, 216, 0.35);
//           transform: translateY(-2px);
//         }

//         .sg-woolwich-service:hover .sg-woolwich-service-icon {
//           background-color: #A59ED8;
//           color: #24212D;
//         }

//         .sg-woolwich-service:hover .sg-woolwich-service-arrow {
//           color: #A59ED8;
//           transform: translateX(4px) translateY(-2px);
//         }

//         .sg-woolwich-property {
//           transition:
//             background-color 250ms ease,
//             border-color 250ms ease,
//             transform 250ms ease;
//         }

//         .sg-woolwich-property:hover {
//           background-color: #24212D;
//           border-color: rgba(165, 158, 216, 0.4);
//           transform: translateY(-3px);
//         }

//         .sg-woolwich-property:hover .sg-woolwich-property-icon {
//           background-color: #A59ED8;
//           color: #24212D;
//         }

//         .sg-woolwich-contact {
//           transition:
//             background-color 250ms ease,
//             border-color 250ms ease,
//             transform 250ms ease;
//         }

//         .sg-woolwich-contact:hover {
//           background-color: #24212D;
//           border-color: rgba(165, 158, 216, 0.4);
//           transform: translateY(-2px);
//         }

//         .sg-woolwich-contact:hover .sg-woolwich-contact-icon {
//           background-color: #A59ED8;
//           color: #24212D;
//         }

//         .sg-woolwich-contact:hover .sg-woolwich-contact-arrow {
//           color: #A59ED8;
//           transform: translateX(4px);
//         }

//         .sg-woolwich-main-cta {
//           transition:
//             background-color 250ms ease,
//             transform 250ms ease;
//         }

//         .sg-woolwich-main-cta:hover {
//           background-color: #24212D;
//           transform: translateY(-3px);
//         }

//         .sg-woolwich-dark-button {
//           transition:
//             background-color 220ms ease,
//             transform 220ms ease;
//         }

//         .sg-woolwich-dark-button:hover {
//           background-color: #15131A;
//           transform: translateY(-2px);
//         }

//         .sg-woolwich-purple-button {
//           transition:
//             background-color 220ms ease,
//             transform 220ms ease;
//         }

//         .sg-woolwich-purple-button:hover {
//           background-color: #51478F;
//           transform: translateY(-2px);
//         }
//       `}</style>

//       {/* =========================================================
//           TOP CTA / INTRO
//       ========================================================= */}

//       <section className="relative overflow-hidden bg-[#6055A6]">
//         {/* Large decorative background */}

//         <div className="pointer-events-none absolute inset-0">
//           <div className="absolute left-[-140px] top-[-150px] h-[420px] w-[420px] rounded-full border-[55px] border-white/[0.035]" />

//           <div className="absolute right-[-110px] top-[-100px] h-[390px] w-[390px] rounded-full border border-white/[0.12]" />

//           <div className="absolute right-[80px] top-[70px] h-[170px] w-[170px] rotate-45 border border-white/[0.08]" />

//           <div className="absolute bottom-[-150px] left-[45%] h-[300px] w-[300px] rounded-full bg-[#51478F]/30 blur-3xl" />
//         </div>

//         <div className="relative mx-auto max-w-[1550px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
//           <div className="grid gap-10 lg:grid-cols-[1.35fr_.65fr] lg:items-end">
//             {/* LEFT */}

//             <div>
//               <div className="flex items-center gap-3">
//                 <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#24212D]">
//                   <ShieldCheck
//                     size={13}
//                     className="text-[#A59ED8]"
//                   />
//                 </span>

//                 <span className="text-[8px] font-black uppercase tracking-[0.28em] text-white/60">
//                   SuperGuard · {LOCAL.area}
//                 </span>
//               </div>

//               <h2 className="mt-7 max-w-[920px] text-[45px] font-black leading-[0.88] tracking-[-0.065em] sm:text-[62px] lg:text-[78px]">
//                 Keep unwanted pests
//                 <span className="block text-[#24212D]">
//                   out of your property.
//                 </span>
//               </h2>

//               <p className="mt-7 max-w-[590px] text-[11px] font-medium leading-7 text-white/65 sm:text-[13px]">
//                 From first signs of activity to ongoing
//                 prevention, SuperGuard Services Woolwich
//                 provides practical pest control support for
//                 homes, flats, businesses and managed
//                 properties.
//               </p>
//             </div>

//             {/* RIGHT CTA */}

//             <div className="lg:flex lg:justify-end">
//               <Link
//                 to="/contact-us"
//                 className="sg-woolwich-dark-button group flex min-h-[64px] w-full max-w-[350px] items-center justify-between gap-8 rounded-[18px] bg-[#24212D] px-6 text-[8px] font-black uppercase tracking-[0.2em] text-white"
//               >
//                 <div>
//                   <span className="block text-white">
//                     Speak with the team
//                   </span>

//                   <span className="mt-1 block text-[6px] tracking-[0.16em] text-white/30">
//                     Request pest control support
//                   </span>
//                 </div>

//                 <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition group-hover:bg-[#6055A6]">
//                   <ArrowRight
//                     size={15}
//                     className="transition group-hover:translate-x-1"
//                   />
//                 </span>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           MAIN FOOTER BODY
//       ========================================================= */}

//       <div className="mx-auto max-w-[1550px] px-5 sm:px-8 lg:px-12">
//         {/* =======================================================
//             BRAND / CONTACT GRID
//         ======================================================= */}

//         <section className="grid border-t border-white/10 lg:grid-cols-[1fr_1fr]">
//           {/* BRAND SIDE */}

//           <div className="relative overflow-hidden border-b border-white/10 py-14 lg:border-b-0 lg:border-r lg:py-20 lg:pr-16">
//             {/* Giant SG */}

//             <div className="pointer-events-none absolute -right-4 top-8 text-[170px] font-black leading-none tracking-[-0.13em] text-white/[0.045]">
//               SG
//             </div>

//             <div className="relative z-10">
//               {/* Brand */}

//               <Link
//                 to="/"
//                 className="inline-flex items-center gap-4"
//               >
//                 <div className="relative flex h-[72px] w-[72px] items-center justify-center overflow-hidden rounded-[22px] bg-[#F7F6FA] p-2 shadow-[0_15px_35px_rgba(21,19,26,0.18)]">
//                   <div className="absolute -right-6 -top-6 h-14 w-14 rounded-full bg-[#A59ED8]/40" />

//                   <img
//                     src="/images/superguard-logo.webp"
//                     alt={LOCAL.company}
//                     className="relative z-10 h-full w-full object-contain"
//                   />
//                 </div>

//                 <div>
//                   <span className="block text-[19px] font-black uppercase leading-none tracking-[-0.04em]">
//                     SuperGuard
//                   </span>

//                   <span className="mt-2 block text-[7px] font-black uppercase tracking-[0.3em] text-[#A59ED8]">
//                     Services Woolwich
//                   </span>
//                 </div>
//               </Link>

//               {/* Description */}

//               <p className="mt-8 max-w-[510px] text-[11px] leading-7 text-white/45">
//                 Local pest control support for residential,
//                 commercial and managed properties throughout
//                 Woolwich and surrounding London areas.
//               </p>

//               {/* Location mini cards */}

//               <div className="mt-10 grid max-w-[500px] grid-cols-2 gap-2">
//                 <div className="rounded-[18px] border border-white/10 bg-[#24212D]/35 p-5">
//                   <span className="text-[7px] font-black uppercase tracking-[0.2em] text-white/25">
//                     Local area
//                   </span>

//                   <p className="mt-3 text-[17px] font-black text-white">
//                     {LOCAL.area}
//                   </p>
//                 </div>

//                 <div className="rounded-[18px] border border-white/10 bg-[#24212D]/35 p-5">
//                   <span className="text-[7px] font-black uppercase tracking-[0.2em] text-white/25">
//                     Postcode
//                   </span>

//                   <p className="mt-3 text-[14px] font-black text-[#A59ED8]">
//                     {LOCAL.postcode}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* CONTACT SIDE */}

//           <div className="py-14 lg:py-20 lg:pl-16">
//             <div className="flex items-end justify-between">
//               <div>
//                 <span className="text-[8px] font-black uppercase tracking-[0.28em] text-[#A59ED8]">
//                   Get in touch
//                 </span>

//                 <h3 className="mt-3 text-[28px] font-black tracking-[-0.045em] text-white sm:text-[34px]">
//                   Contact Woolwich
//                 </h3>
//               </div>

//               <span className="hidden text-[7px] font-black uppercase tracking-[0.18em] text-white/20 sm:block">
//                 {LOCAL.city}
//               </span>
//             </div>

//             <div className="mt-8">
//               {/* ADDRESS */}

//               <div className="sg-woolwich-contact rounded-[20px] border border-white/10 bg-[#6055A6] p-5">
//                 <div className="flex gap-4">
//                   <span className="sg-woolwich-contact-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#24212D] text-[#A59ED8] transition">
//                     <MapPin size={17} />
//                   </span>

//                   <div>
//                     <span className="block text-[7px] font-black uppercase tracking-[0.2em] text-white/25">
//                       Local address
//                     </span>

//                     <address className="mt-2 max-w-[380px] not-italic text-[13px] font-black leading-6 text-white">
//                       {LOCAL.address}
//                     </address>
//                   </div>
//                 </div>
//               </div>

//               {/* PHONE */}

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="sg-woolwich-contact mt-2 flex items-center gap-4 rounded-[20px] border border-white/10 bg-[#6055A6] p-5"
//               >
//                 <span className="sg-woolwich-contact-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#24212D] text-[#A59ED8] transition">
//                   <Phone size={17} />
//                 </span>

//                 <div>
//                   <span className="block text-[7px] font-black uppercase tracking-[0.2em] text-white/25">
//                     Call directly
//                   </span>

//                   <span className="mt-2 block text-[17px] font-black text-white">
//                     {LOCAL.phoneDisplay}
//                   </span>
//                 </div>

//                 <span className="sg-woolwich-contact-arrow ml-auto flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/30 transition">
//                   <ArrowUpRight size={14} />
//                 </span>
//               </a>

//               {/* LOCATION */}

//               <div className="mt-2 grid grid-cols-2 gap-2">
//                 <div className="rounded-[18px] border border-white/10 bg-[#24212D]/35 p-4">
//                   <span className="block text-[6px] font-black uppercase tracking-[0.18em] text-white/25">
//                     Street
//                   </span>

//                   <span className="mt-2 block text-[10px] font-black text-white">
//                     {LOCAL.streetAddress}
//                   </span>
//                 </div>

//                 <div className="rounded-[18px] border border-white/10 bg-[#24212D]/35 p-4">
//                   <span className="block text-[6px] font-black uppercase tracking-[0.18em] text-white/25">
//                     Area
//                   </span>

//                   <span className="mt-2 block text-[10px] font-black text-white">
//                     {LOCAL.area}, {LOCAL.city}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* =======================================================
//             NAVIGATION / SERVICES
//         ======================================================= */}

//         <section className="grid border-t border-white/10 lg:grid-cols-[0.72fr_1.28fr]">
//           {/* NAVIGATION */}

//           <div className="border-b border-white/10 py-14 lg:border-b-0 lg:border-r lg:py-16 lg:pr-12">
//             <div className="flex items-center justify-between">
//               <span className="text-[8px] font-black uppercase tracking-[0.28em] text-white/30">
//                 Explore
//               </span>

//               <span className="text-[7px] font-black uppercase tracking-[0.15em] text-white/20">
//                 04 links
//               </span>
//             </div>

//             <nav className="mt-7 space-y-2">
//               {quickLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   className="sg-woolwich-link group flex items-center rounded-[15px] border border-white/10 bg-[#6055A6] px-4 py-4"
//                 >
//                   <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#24212D] text-[6px] font-black text-[#A59ED8]">
//                     {link.number}
//                   </span>

//                   <span className="ml-4 text-[11px] font-black text-white">
//                     {link.name}
//                   </span>

//                   <ArrowUpRight
//                     size={13}
//                     className="ml-auto text-white/25 transition group-hover:text-[#A59ED8]"
//                   />
//                 </Link>
//               ))}
//             </nav>

//             {/* Small CTA */}

//             <Link
//               to="/contact-us"
//               className="sg-woolwich-purple-button group mt-5 flex items-center justify-between rounded-[17px] bg-[#24212D] p-4"
//             >
//               <span className="text-[7px] font-black uppercase tracking-[0.18em] text-white">
//                 Request pest control
//               </span>

//               <ArrowRight
//                 size={14}
//                 className="transition group-hover:translate-x-1"
//               />
//             </Link>
//           </div>

//           {/* SERVICES */}

//           <div className="py-14 lg:py-16 lg:pl-12">
//             <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
//               <div>
//                 <span className="text-[8px] font-black uppercase tracking-[0.28em] text-[#A59ED8]">
//                   Pest control services
//                 </span>

//                 <h3 className="mt-3 max-w-[520px] text-[29px] font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-[37px]">
//                   Practical support for common pest problems.
//                 </h3>
//               </div>

//               <Link
//                 to="/services"
//                 className="group inline-flex shrink-0 items-center gap-3 text-[8px] font-black uppercase tracking-[0.18em] text-white/55 transition hover:text-white"
//               >
//                 All services

//                 <ArrowRight
//                   size={14}
//                   className="transition group-hover:translate-x-1"
//                 />
//               </Link>
//             </div>

//             {/* Service cards */}

//             <div className="mt-8 grid gap-2 sm:grid-cols-2">
//               {services.map((service) => {
//                 const Icon = service.icon;

//                 return (
//                   <Link
//                     key={service.name}
//                     to="/services"
//                     state={service.state}
//                     className="sg-woolwich-service group rounded-[20px] border border-white/10 bg-[#6055A6] p-5"
//                   >
//                     <div className="flex items-start justify-between">
//                       <span className="sg-woolwich-service-icon flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#24212D] text-[#A59ED8] transition">
//                         <Icon size={17} />
//                       </span>

//                       <span className="text-[7px] font-black text-white/20">
//                         {service.number}
//                       </span>
//                     </div>

//                     <div className="mt-8 flex items-end justify-between gap-4">
//                       <div>
//                         <span className="block text-[6px] font-black uppercase tracking-[0.18em] text-white/25">
//                           SuperGuard
//                         </span>

//                         <span className="mt-2 block text-[12px] font-black leading-5 text-white">
//                           {service.name}
//                         </span>
//                       </div>

//                       <span className="sg-woolwich-service-arrow flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/25 transition">
//                         <ArrowUpRight size={13} />
//                       </span>
//                     </div>
//                   </Link>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {/* =======================================================
//             PROPERTY + LOCAL AREA
//         ======================================================= */}

//         <section className="grid border-t border-white/10 lg:grid-cols-[1fr_1fr]">
//           {/* PROPERTY TYPES */}

//           <div className="border-b border-white/10 py-14 lg:border-b-0 lg:border-r lg:py-16 lg:pr-12">
//             <span className="text-[8px] font-black uppercase tracking-[0.28em] text-white/30">
//               Property types
//             </span>

//             <h3 className="mt-3 max-w-[400px] text-[28px] font-black leading-[0.95] tracking-[-0.045em] text-white">
//               Support across different property environments.
//             </h3>

//             <div className="mt-7 grid gap-2 sm:grid-cols-2">
//               {propertyTypes.map((item) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={item.title}
//                     className="sg-woolwich-property rounded-[20px] border border-white/10 bg-[#6055A6] p-5"
//                   >
//                     <div className="flex items-start justify-between">
//                       <span className="sg-woolwich-property-icon flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#24212D] text-[#A59ED8] transition">
//                         <Icon size={17} />
//                       </span>

//                       <span className="text-[7px] font-black text-white/20">
//                         {item.number}
//                       </span>
//                     </div>

//                     <h4 className="mt-8 text-[13px] font-black text-white">
//                       {item.title}
//                     </h4>

//                     <p className="mt-2 text-[9px] leading-5 text-white/35">
//                       {item.text}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* WOOLWICH AREA */}

//           <div className="relative overflow-hidden py-14 lg:py-16 lg:pl-12">
//             {/* Decorative postcode */}

//             <div className="pointer-events-none absolute -right-5 bottom-[-25px] text-[110px] font-black leading-none tracking-[-0.1em] text-[#24212D]">
//               SE18
//             </div>

//             <div className="relative z-10">
//               <div className="flex items-center gap-3">
//                 <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#24212D]">
//                   <MapPin
//                     size={13}
//                     className="text-[#A59ED8]"
//                   />
//                 </span>

//                 <span className="text-[8px] font-black uppercase tracking-[0.28em] text-[#A59ED8]">
//                   Local coverage
//                 </span>
//               </div>

//               <div className="mt-8">
//                 <span className="block text-[76px] font-black leading-[0.72] tracking-[-0.1em] text-[#24212D] sm:text-[105px]">
//                   SE18
//                 </span>

//                 <div className="mt-7">
//                   <h3 className="text-[28px] font-black tracking-[-0.045em] text-white">
//                     {LOCAL.area}
//                   </h3>

//                   <p className="mt-1 text-[8px] font-black uppercase tracking-[0.2em] text-[#A59ED8]">
//                     {LOCAL.city} · {LOCAL.postcode}
//                   </p>
//                 </div>
//               </div>

//               <p className="mt-8 max-w-[480px] text-[10px] leading-6 text-white/35">
//                 SuperGuard Services Woolwich provides pest
//                 control support for homes, flats, businesses
//                 and managed properties throughout Woolwich
//                 and nearby London areas.
//               </p>

//               <Link
//                 to="/contact-us"
//                 className="group mt-7 inline-flex items-center gap-4 border-b border-[#A59ED8] pb-3 text-[8px] font-black uppercase tracking-[0.18em] text-white"
//               >
//                 Ask about your area

//                 <ArrowRight
//                   size={14}
//                   className="transition group-hover:translate-x-1"
//                 />
//               </Link>
//             </div>
//           </div>
//         </section>

//         {/* =======================================================
//             FINAL CONTACT STRIP
//         ======================================================= */}

//         <section className="border-t border-white/10 py-10">
//           <div className="grid gap-3 lg:grid-cols-[1fr_auto_auto] lg:items-center">
//             {/* COMPANY */}

//             <div>
//               <span className="block text-[7px] font-black uppercase tracking-[0.2em] text-white/25">
//                 Local pest control
//               </span>

//               <p className="mt-2 text-[12px] font-black text-white">
//                 {LOCAL.company}
//               </p>

//               <p className="mt-1 text-[7px] font-bold uppercase tracking-[0.16em] text-white/25">
//                 {LOCAL.area} · {LOCAL.city} · {LOCAL.postcode}
//               </p>
//             </div>

//             {/* PHONE */}

//             <a
//               href={`tel:${LOCAL.phoneTel}`}
//               className="group flex items-center gap-3 rounded-[15px] border border-white/10 bg-[#24212D]/50 px-4 py-3 transition hover:bg-[#24212D]"
//             >
//               <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#6055A6] text-[#A59ED8]">
//                 <Phone size={13} />
//               </span>

//               <div>
//                 <span className="block text-[6px] font-black uppercase tracking-[0.17em] text-white/25">
//                   Call
//                 </span>

//                 <span className="mt-1 block text-[10px] font-black text-white">
//                   {LOCAL.phoneDisplay}
//                 </span>
//               </div>
//             </a>

//             {/* CONTACT */}

//             <Link
//               to="/contact-us"
//               className="group flex items-center justify-center gap-3 rounded-[15px] bg-[#24212D] px-5 py-4 text-[7px] font-black uppercase tracking-[0.18em] text-white transition hover:bg-[#15131A]"
//             >
//               Contact SuperGuard

//               <ArrowUpRight
//                 size={13}
//                 className="transition group-hover:translate-x-1"
//               />
//             </Link>
//           </div>
//         </section>

//         {/* =======================================================
//             COPYRIGHT
//         ======================================================= */}

//         <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
//           <div>
//             <p className="text-[7px] font-bold text-white/35">
//               © {new Date().getFullYear()} {LOCAL.company}
//             </p>

//             <p className="mt-1 text-[6px] font-black uppercase tracking-[0.18em] text-white/20">
//               Pest control · {LOCAL.area} · {LOCAL.city}
//             </p>
//           </div>

//           <div className="flex flex-wrap items-center gap-3">
//             <span className="text-[6px] font-black uppercase tracking-[0.17em] text-white/20">
//               {LOCAL.postcode}
//             </span>

//             <span className="h-3 w-px bg-white/10" />

//             <span className="text-[6px] font-black uppercase tracking-[0.17em] text-white/20">
//               Residential
//             </span>

//             <span className="h-3 w-px bg-white/10" />

//             <span className="text-[6px] font-black uppercase tracking-[0.17em] text-white/20">
//               Commercial
//             </span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





























// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowUpRight,
//   Bug,
//   Home,
//   MapPin,
//   Phone,
//   Rat,
//   ShieldCheck,
//   Building2,
// } from "lucide-react";

// const LOCAL = {
//   company: "SuperGuard Pest Control Services Chessington",
//   shortName: "SuperGuard Chessington",
//   area: "Chessington",
//   postcode: "KT9 1AY",
//   city: "Surrey",
//   streetAddress: "95 Rhodrons Ave",
//   address: "95 Rhodrons Ave, Chessington KT9 1AY, United Kingdom",
//   phoneDisplay: "+44 7356 234726",
//   phoneTel: "+447356234726",
// };

// const quickLinks = [
//   { name: "Home", path: "/" },
//   { name: "About Us", path: "/about-us" },
//   { name: "Services", path: "/services" },
//   { name: "Contact Us", path: "/contact-us" },
// ];

// const services = [
//   {
//     name: "Rats & Mice Control",
//     icon: Rat,
//     state: {
//       scrollToService: "Rats & Mice Control",
//       category: "Rodents & Wildlife",
//     },
//   },
//   {
//     name: "Bed Bug Treatment",
//     icon: Bug,
//     state: {
//       scrollToService: "Bed Bug Treatment",
//       category: "Insects",
//     },
//   },
//   {
//     name: "Wasp Nest Control",
//     icon: ShieldCheck,
//     state: {
//       scrollToService: "Wasp Nest Control",
//       category: "Insects",
//     },
//   },
//   {
//     name: "Property Proofing",
//     icon: Home,
//     state: {
//       scrollToService: "Property Proofing",
//       category: "Birds & Prevention",
//     },
//   },
// ];

// const Footer = () => {
//   return (
//     <footer
//       className="bg-[#6055A6] text-white"
//       itemScope
//       itemType="https://schema.org/PestControl"
//     >
//       <meta itemProp="name" content={LOCAL.company} />
//       <meta itemProp="telephone" content={LOCAL.phoneTel} />
//       <meta
//         itemProp="areaServed"
//         content={`${LOCAL.area} and nearby areas`}
//       />

//       <div
//         itemProp="address"
//         itemScope
//         itemType="https://schema.org/PostalAddress"
//         className="hidden"
//       >
//         <meta itemProp="streetAddress" content={LOCAL.streetAddress} />
//         <meta itemProp="addressLocality" content={LOCAL.area} />
//         <meta itemProp="addressRegion" content={LOCAL.city} />
//         <meta itemProp="postalCode" content={LOCAL.postcode} />
//         <meta itemProp="addressCountry" content="GB" />
//       </div>

//       <style>{`
//         .sg-footer-link {
//           transition: color 180ms ease;
//         }

//         .sg-footer-link:hover {
//           color: #A59ED8;
//         }

//         .sg-footer-service {
//           transition: color 180ms ease;
//         }

//         .sg-footer-service:hover {
//           color: #D8D2F3;
//         }

//         .sg-footer-contact {
//           transition: color 180ms ease;
//         }

//         .sg-footer-contact:hover {
//           color: #D8D2F3;
//         }

//         .sg-footer-social-arrow {
//           transition: transform 180ms ease;
//         }

//         .group:hover .sg-footer-social-arrow {
//           transform: translate(2px, -2px);
//         }
//       `}</style>

//       <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

//         {/* Main footer */}
//         <div className="grid gap-10 py-11 sm:py-12 lg:grid-cols-[1.25fr_0.7fr_1fr_1.1fr] lg:gap-10 lg:py-14">

//           {/* Brand and short description */}
//           <div className="min-w-0">
//             <Link to="/" className="inline-flex items-center gap-3">
//               <span className="flex h-[54px] w-[60px] shrink-0 items-center justify-center rounded-xl bg-[#F7F6FA] p-2">
//                 <img
//                   src="/images/superguard-logo.webp"
//                   alt={`${LOCAL.company} logo`}
//                   className="h-full w-full object-contain"
//                 />
//               </span>

//               <span>
//                 <span className="block text-[18px] font-extrabold leading-tight tracking-tight">
//                   SuperGuard
//                 </span>
//                 <span className="mt-1 block text-[9px] font-semibold tracking-wide text-white/65">
//                   Pest Control Services
//                 </span>
//               </span>
//             </Link>

//             <p className="mt-5 max-w-[300px] text-[12px] leading-6 text-white/65">
//               Pest control for homes and businesses in Chessington
//               and the surrounding areas.
//             </p>

//             <div className="mt-4 flex items-start gap-2 text-[11px] leading-5 text-white/75">
//               <MapPin
//                 size={15}
//                 className="mt-0.5 shrink-0 text-[#D8D2F3]"
//               />
//               <span>{LOCAL.area} and nearby areas</span>
//             </div>
//           </div>

//           {/* Quick navigation */}
//           <div>
//             <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-white">
//               Quick Links
//             </h3>

//             <nav
//               aria-label="Footer navigation"
//               className="mt-5 flex flex-col items-start gap-3.5"
//             >
//               {quickLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   className="sg-footer-link text-[12px] text-white/65"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </nav>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-white">
//               Our Services
//             </h3>

//             <nav
//               aria-label="Pest control services"
//               className="mt-5 flex flex-col items-start gap-3.5"
//             >
//               {services.map((service) => {
//                 const Icon = service.icon;

//                 return (
//                   <Link
//                     key={service.name}
//                     to="/services"
//                     state={service.state}
//                     className="sg-footer-service flex items-center gap-2.5 text-[12px] text-white/65"
//                   >
//                     <Icon
//                       size={14}
//                       className="shrink-0 text-[#A59ED8]"
//                     />
//                     <span>{service.name}</span>
//                   </Link>
//                 );
//               })}

//               <Link
//                 to="/services"
//                 className="sg-footer-link mt-1 inline-flex items-center gap-1.5 text-[11px] font-semibold text-white"
//               >
//                 View all services
//                 <ArrowUpRight size={13} />
//               </Link>
//             </nav>
//           </div>

//           {/* Contact details */}
//           <div className="min-w-0">
//             <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-white">
//               Contact Us
//             </h3>

//             <a
//               href={`tel:${LOCAL.phoneTel}`}
//               className="sg-footer-contact mt-5 flex items-center gap-3"
//             >
//               <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#51478F] text-[#D8D2F3]">
//                 <Phone size={16} />
//               </span>

//               <span>
//                 <span className="block text-[10px] text-white/55">
//                   Call our team
//                 </span>
//                 <span className="mt-1 block text-[13px] font-bold">
//                   {LOCAL.phoneDisplay}
//                 </span>
//               </span>
//             </a>

//             <div className="mt-5 flex items-start gap-3">
//               <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#51478F] text-[#D8D2F3]">
//                 <MapPin size={16} />
//               </span>

//               <address className="pt-0.5 text-[11px] not-italic leading-5 text-white/65">
//                 {LOCAL.address}
//               </address>
//             </div>

//             <Link
//               to="/contact-us"
//               className="sg-footer-link mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold text-white"
//             >
//               Contact SuperGuard
//               <ArrowUpRight size={13} />
//             </Link>
//           </div>
//         </div>

//         {/* Bottom footer bar */}
//         <div className="flex flex-col gap-3 border-t border-white/15 py-5 sm:flex-row sm:items-center sm:justify-between">
//           <p className="text-[10px] leading-5 text-white/55">
//             © {new Date().getFullYear()} {LOCAL.company}. All rights reserved.
//           </p>

//           <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] text-white/55">
//             <span>{LOCAL.area}</span>
//             <span className="text-[#A59ED8]">•</span>
//             <span>{LOCAL.postcode}</span>
//             <span className="text-[#A59ED8]">•</span>
//             <span>Residential & Commercial</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;






















import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Bug,
  Home,
  MapPin,
  Phone,
  Rat,
  ShieldCheck,
  Mail,
} from "lucide-react";

const LOCAL = {
  company: "SuperGuard Hampstead",
  shortName: "SuperGuard Hampstead",
  area: "Hampstead",
  postcode: "NW3 5UN",
  city: "London",
  streetAddress: "12 Vane Cl",
  address: "12 Vane Cl, London NW3 5UN, United Kingdom",
  phoneDisplay: "+44 7466 966471",
  phoneTel: "+447466966471",
  email: "info@superguardhampstead.uk",
};

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Services", path: "/services" },
  { name: "Contact Us", path: "/contact-us" },
];

const services = [
  {
    name: "Rats & Mice Control",
    icon: Rat,
    state: {
      scrollToService: "Rats & Mice Control",
      category: "Rodents & Wildlife",
    },
  },
  {
    name: "Bed Bug Treatment",
    icon: Bug,
    state: {
      scrollToService: "Bed Bug Treatment",
      category: "Insects",
    },
  },
  {
    name: "Wasp Nest Control",
    icon: ShieldCheck,
    state: {
      scrollToService: "Wasp Nest Control",
      category: "Insects",
    },
  },
  {
    name: "Property Proofing",
    icon: Home,
    state: {
      scrollToService: "Property Proofing",
      category: "Birds & Prevention",
    },
  },
];

const Footer = () => {
  return (
    <footer
      className="bg-[#6055A6] text-white"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <meta itemProp="name" content={LOCAL.company} />
      <meta itemProp="telephone" content={LOCAL.phoneTel} />
      <meta itemProp="email" content={LOCAL.email} />
      <meta
        itemProp="areaServed"
        content={`${LOCAL.area} and nearby areas`}
      />

      <div
        itemProp="address"
        itemScope
        itemType="https://schema.org/PostalAddress"
        className="hidden"
      >
        <meta itemProp="streetAddress" content={LOCAL.streetAddress} />
        <meta itemProp="addressLocality" content={LOCAL.city} />
        <meta itemProp="addressRegion" content="Greater London" />
        <meta itemProp="postalCode" content={LOCAL.postcode} />
        <meta itemProp="addressCountry" content="GB" />
      </div>

      <style>{`
        .sg-footer-link {
          transition: color 180ms ease;
        }

        .sg-footer-link:hover {
          color: #A59ED8;
        }

        .sg-footer-service {
          transition: color 180ms ease;
        }

        .sg-footer-service:hover {
          color: #D8D2F3;
        }

        .sg-footer-contact {
          transition: color 180ms ease;
        }

        .sg-footer-contact:hover {
          color: #D8D2F3;
        }
      `}</style>

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* MAIN FOOTER */}
        <div className="grid gap-10 py-11 sm:py-12 lg:grid-cols-[1.25fr_0.7fr_1fr_1.1fr] lg:gap-10 lg:py-14">
          {/* BRAND AND DESCRIPTION */}
          <div className="min-w-0">
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="flex h-[54px] w-[60px] shrink-0 items-center justify-center rounded-xl bg-[#F7F6FA] p-2">
                <img
                  src="/images/superguard-logo.webp"
                  alt={`${LOCAL.company} logo`}
                  className="h-full w-full object-contain"
                />
              </span>

              <span>
                <span className="block text-[18px] font-extrabold leading-tight tracking-tight">
                  SuperGuard
                </span>

                <span className="mt-1 block text-[9px] font-semibold tracking-wide text-white/65">
                  Pest Control Services
                </span>

                <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.12em] text-[#D8D2F3]">
                  Hampstead · London
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-[300px] text-[12px] leading-6 text-white/65">
              Professional pest control for homes and businesses in
              Hampstead and the surrounding areas.
            </p>

            <div className="mt-4 flex items-start gap-2 text-[11px] leading-5 text-white/75">
              <MapPin
                size={15}
                className="mt-0.5 shrink-0 text-[#D8D2F3]"
              />
              <span>{LOCAL.area} and nearby areas</span>
            </div>
          </div>

          {/* QUICK NAVIGATION */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-white">
              Quick Links
            </h3>

            <nav
              aria-label="Footer navigation"
              className="mt-5 flex flex-col items-start gap-3.5"
            >
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="sg-footer-link text-[12px] text-white/65"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-white">
              Our Services
            </h3>

            <nav
              aria-label="Pest control services"
              className="mt-5 flex flex-col items-start gap-3.5"
            >
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <Link
                    key={service.name}
                    to="/services"
                    state={service.state}
                    className="sg-footer-service flex items-center gap-2.5 text-[12px] text-white/65"
                  >
                    <Icon
                      size={14}
                      className="shrink-0 text-[#A59ED8]"
                    />
                    <span>{service.name}</span>
                  </Link>
                );
              })}

              <Link
                to="/services"
                className="sg-footer-link mt-1 inline-flex items-center gap-1.5 text-[11px] font-semibold text-white"
              >
                View all services
                <ArrowUpRight size={13} />
              </Link>
            </nav>
          </div>

          {/* CONTACT DETAILS */}
          <div className="min-w-0">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-white">
              Contact Us
            </h3>

            {/* PHONE */}
            <a
              href={`tel:${LOCAL.phoneTel}`}
              className="sg-footer-contact mt-5 flex items-center gap-3"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#51478F] text-[#D8D2F3]">
                <Phone size={16} />
              </span>

              <span>
                <span className="block text-[10px] text-white/55">
                  Call our team
                </span>

                <span className="mt-1 block text-[13px] font-bold">
                  {LOCAL.phoneDisplay}
                </span>
              </span>
            </a>

            {/* EMAIL */}
            <a
              href={`mailto:${LOCAL.email}`}
              className="sg-footer-contact mt-5 flex min-w-0 items-center gap-3"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#51478F] text-[#D8D2F3]">
                <Mail size={16} />
              </span>

              <span className="min-w-0">
                <span className="block text-[10px] text-white/55">
                  Email our team
                </span>

                <span className="mt-1 block break-all text-[12px] font-semibold sm:text-[13px]">
                  {LOCAL.email}
                </span>
              </span>
            </a>

            {/* ADDRESS */}
            <div className="mt-5 flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#51478F] text-[#D8D2F3]">
                <MapPin size={16} />
              </span>

              <address className="pt-0.5 text-[11px] not-italic leading-5 text-white/65">
                {LOCAL.address}
              </address>
            </div>

            <Link
              to="/contact-us"
              className="sg-footer-link mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold text-white"
            >
              Contact SuperGuard
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>

        {/* BOTTOM FOOTER BAR */}
        <div className="flex flex-col gap-3 border-t border-white/15 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] leading-5 text-white/55">
            © {new Date().getFullYear()} {LOCAL.company}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] text-white/55">
            <span>{LOCAL.area}</span>
            <span className="text-[#A59ED8]">•</span>
            <span>{LOCAL.postcode}</span>
            <span className="text-[#A59ED8]">•</span>
            <span>Residential &amp; Commercial</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
