








// import React, { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const LOCAL = {
//     company: "SuperGuard Walworth",
//     brand: "SuperGuard Pest Control",
//     area: "Walworth",
//     postcode: "SE17",
//     fullAddress: "36 Sutherland Square, London SE17 3EE",
//     phoneDisplay: "07466 565503",
//     phoneTel: "+447466565503",
//   };

//   useEffect(() => {
//     const onScroll = () => setIsScrolled(window.scrollY > 10);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const menuItems = [
//     ["Home", "/"],
//     ["Services", "/services"],
//     ["About", "/about-us"],
//     ["Contact", "/contact-us"],
//   ];

//   const navClass = ({ isActive }) =>
//     `relative text-[13px] lg:text-[14px] font-extrabold uppercase tracking-[0.16em] transition-all duration-300 ${
//       isActive
//         ? "text-[#6254B4]"
//         : "text-slate-700 hover:text-[#6254B4]"
//     }`;

//   const mobileNavClass = ({ isActive }) =>
//     `block rounded-2xl px-5 py-4 text-sm font-black uppercase tracking-widest transition-all ${
//       isActive
//         ? "bg-[#6254B4] text-white"
//         : "bg-white text-slate-900 border border-[#6254B4]/15"
//     }`;

//   return (
//     <header
//       className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
//         isScrolled
//           ? "bg-white/92 backdrop-blur-2xl shadow-xl shadow-slate-950/10"
//           : "bg-[#F7F5FF]"
//       }`}
//     >
//       {/* WALWORTH TOP BAR */}
//       <div
//         itemScope
//         itemType="https://schema.org/LocalBusiness"
//         className="hidden md:block bg-[#17122F] text-white"
//       >
//         <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-6 py-2.5 lg:px-10">
//           <p className="m-0 text-[11px] font-black uppercase tracking-[0.22em] text-white/80">
//             Local Pest Control Covering{" "}
//             <span itemProp="areaServed" className="text-[#A89BFF]">
//               {LOCAL.area} {LOCAL.postcode}
//             </span>
//           </p>

//           <div className="flex items-center gap-6 text-[11px] font-bold text-white/75">
//             <span
//               itemProp="address"
//               itemScope
//               itemType="https://schema.org/PostalAddress"
//               className="hidden lg:inline"
//             >
//               📍 <span itemProp="streetAddress">{LOCAL.fullAddress}</span>
//             </span>

//             <a
//               href={`tel:${LOCAL.phoneTel}`}
//               className="font-black text-[#A89BFF] hover:text-white transition-colors"
//             >
//               Call Walworth Team:{" "}
//               <span itemProp="telephone">{LOCAL.phoneDisplay}</span>
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* MAIN NAV */}
//       <nav className="border-b border-[#6254B4]/10">
//         <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-5 md:h-24 md:px-8 lg:px-10">
//           {/* LOGO */}
//           <Link
//             to="/"
//             onClick={() => setOpen(false)}
//             aria-label={`${LOCAL.company} Home`}
//             className="group flex items-center gap-3"
//           >
//             <div className="relative rounded-3xl bg-white px-4 py-2 shadow-lg shadow-[#6254B4]/10 ring-1 ring-[#6254B4]/15">
//               <span className="absolute -right-2 -top-2 h-5 w-5 rounded-full bg-[#6254B4]" />
//               <img
//                 src="/images/superguard-logo.webp"
//                 alt={`${LOCAL.company} Logo`}
//                 className="h-12 w-auto object-contain md:h-16"
//                 loading="eager"
//               />
//             </div>
//           </Link>

//           {/* DESKTOP MENU */}
//           <div className="hidden md:flex items-center rounded-full bg-white px-7 py-4 shadow-md shadow-[#6254B4]/8 ring-1 ring-[#6254B4]/10">
//             <ul className="flex list-none items-center gap-8 lg:gap-10 m-0 p-0">
//               {menuItems.map(([label, path]) => (
//                 <li key={path}>
//                   <NavLink to={path} className={navClass}>
//                     {({ isActive }) => (
//                       <>
//                         {label}
//                         <span
//                           className={`absolute left-1/2 -bottom-3 h-2 rounded-full bg-[#6254B4] transition-all duration-300 -translate-x-1/2 ${
//                             isActive ? "w-2" : "w-0"
//                           }`}
//                         />
//                       </>
//                     )}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* DESKTOP CTA */}
//           <div className="hidden lg:flex items-center gap-3">
//             <div className="leading-tight text-right">
//               <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-[#6254B4]">
//                 Fast Local Help
//               </span>
//               <span className="block text-sm font-black text-slate-900">
//                 {LOCAL.area} Pest Specialists
//               </span>
//             </div>

//             <a
//               href={`tel:${LOCAL.phoneTel}`}
//               className="rounded-full bg-[#6254B4] px-6 py-4 text-sm font-black text-white shadow-xl shadow-[#6254B4]/25 transition-all hover:bg-[#17122F] hover:-translate-y-0.5"
//             >
//               {LOCAL.phoneDisplay}
//             </a>
//           </div>

//           {/* MOBILE BUTTON */}
//           <button
//             onClick={() => setOpen((prev) => !prev)}
//             className="md:hidden flex h-12 w-12 items-center justify-center rounded-2xl bg-[#17122F] text-white shadow-lg shadow-[#17122F]/20 active:scale-95 transition-all"
//             aria-label="Toggle navigation"
//           >
//             <span className="text-xl font-black">{open ? "✕" : "☰"}</span>
//           </button>
//         </div>

//         {/* MOBILE MENU */}
//         {open && (
//           <div className="absolute left-0 top-full w-full bg-[#F7F5FF] border-t border-[#6254B4]/10 shadow-2xl shadow-slate-950/20 md:hidden">
//             <div className="p-5 flex flex-col gap-3">
//               <div className="relative overflow-hidden rounded-[30px] bg-[#17122F] p-5 text-white">
//                 <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#6254B4]/35" />
//                 <div className="absolute -bottom-14 -left-14 h-32 w-32 rounded-full border border-white/10" />

//                 <div className="relative z-10">
//                   <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-[#A89BFF]">
//                     {LOCAL.postcode} Local Response
//                   </span>

//                   <span className="mt-1 block text-xl font-black">
//                     {LOCAL.company}
//                   </span>

//                   <span className="mt-3 block text-xs font-semibold leading-relaxed text-white/75">
//                     📍 {LOCAL.fullAddress}
//                   </span>
//                 </div>
//               </div>

//               {menuItems.map(([label, path]) => (
//                 <NavLink
//                   key={path}
//                   onClick={() => setOpen(false)}
//                   to={path}
//                   className={mobileNavClass}
//                 >
//                   {label}
//                 </NavLink>
//               ))}

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="mt-2 rounded-full bg-[#6254B4] py-4 text-center text-xs font-black uppercase tracking-widest text-white shadow-xl shadow-[#6254B4]/25"
//               >
//                 Call Now: {LOCAL.phoneDisplay}
//               </a>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }















// import React, { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import {
//   ArrowUpRight,
//   Building2,
//   MapPin,
//   Menu,
//   ShieldCheck,
//   X,
// } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const LOCAL = {
//     company: "SuperGuard Services Limited Holborn",
//     shortCompany: "SuperGuard Holborn",
//     brand: "SuperGuard Pest Control",
//     area: "Holborn",
//     city: "London",
//     postcode: "WC2R 3JF",
//     streetAddress: "50 Essex Street",
//     fullAddress: "50 Essex Street, London, WC2R 3JF",
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 16);
//     };

//     handleScroll();

//     window.addEventListener("scroll", handleScroll, {
//       passive: true,
//     });

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "";

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [open]);

//   const menuItems = [
//     {
//       label: "Home",
//       path: "/",
//     },
//     {
//       label: "Services",
//       path: "/services",
//     },
//     {
//       label: "About Us",
//       path: "/about-us",
//     },
//     {
//       label: "Contact",
//       path: "/contact-us",
//     },
//   ];

//   const desktopNavClass = ({ isActive }) =>
//     `group relative flex items-center py-3 text-[13px] font-black uppercase tracking-[0.14em] transition-colors duration-300 ${
//       isActive
//         ? "text-[#6254B4]"
//         : "text-slate-700 hover:text-[#6254B4]"
//     }`;

//   const mobileNavClass = ({ isActive }) =>
//     `flex items-center justify-between rounded-2xl border px-5 py-4 text-sm font-black uppercase tracking-[0.12em] transition-all duration-300 ${
//       isActive
//         ? "border-[#6254B4] bg-[#6254B4] text-white shadow-lg shadow-[#6254B4]/20"
//         : "border-slate-200 bg-white text-slate-900 hover:border-[#6254B4]/40 hover:text-[#6254B4]"
//     }`;

//   return (
//     <header
//       itemScope
//       itemType="https://schema.org/PestControl"
//       className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
//         isScrolled
//           ? "bg-white/95 shadow-[0_15px_50px_rgba(15,23,42,0.10)] backdrop-blur-xl"
//           : "bg-white"
//       }`}
//     >
//       <meta itemProp="name" content={LOCAL.company} />
//       <meta itemProp="areaServed" content={`${LOCAL.area}, ${LOCAL.city}`} />

//       {/* TOP LOCATION BAR */}
//       <div className="hidden border-b border-white/10 bg-[#171327] text-white md:block">
//         <div className="mx-auto flex max-w-[1380px] items-center justify-between gap-6 px-6 py-2.5 lg:px-10">
//           <div className="flex items-center gap-2.5">
//             <ShieldCheck
//               size={15}
//               strokeWidth={2.5}
//               className="text-[#9C90EF]"
//             />

//             <p className="m-0 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/75">
//               Professional pest control serving{" "}
//               <span
//                 itemProp="areaServed"
//                 className="text-[#B9B0FF]"
//               >
//                 Holborn and Central London
//               </span>
//             </p>
//           </div>

//           <div
//             itemProp="address"
//             itemScope
//             itemType="https://schema.org/PostalAddress"
//             className="flex items-center gap-2 text-[11px] font-bold text-white/80"
//           >
//             <MapPin
//               size={14}
//               strokeWidth={2.5}
//               className="text-[#9C90EF]"
//             />

//             <span itemProp="streetAddress">
//               {LOCAL.streetAddress}
//             </span>

//             <span className="text-white/30">•</span>

//             <span itemProp="addressLocality">
//               {LOCAL.city}
//             </span>

//             <span itemProp="postalCode">
//               {LOCAL.postcode}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* MAIN NAVIGATION */}
//       <nav
//         aria-label="Main navigation"
//         className="border-b border-slate-200/70"
//       >
//         <div className="mx-auto flex h-[82px] max-w-[1380px] items-center justify-between gap-5 px-5 md:h-[94px] md:px-8 lg:px-10">
//           {/* BRAND */}
//           <Link
//             to="/"
//             onClick={() => setOpen(false)}
//             aria-label={`${LOCAL.company} homepage`}
//             className="group flex min-w-0 items-center gap-3"
//           >
//             <div className="relative flex h-[62px] w-[78px] shrink-0 items-center justify-center overflow-hidden rounded-[22px] border border-[#6254B4]/15 bg-[#F7F5FF] px-2 shadow-sm transition-all duration-300 group-hover:border-[#6254B4]/35 group-hover:shadow-lg group-hover:shadow-[#6254B4]/10 md:h-[70px] md:w-[94px]">
//               <div className="absolute -right-4 -top-4 h-10 w-10 rounded-full bg-[#6254B4]/10" />

//               <img
//                 src="/images/superguard-logo.webp"
//                 alt="SuperGuard Services Limited Holborn logo"
//                 className="relative z-10 h-full w-full object-contain"
//                 loading="eager"
//               />
//             </div>

//             <div className="hidden min-w-0 sm:block">
//               <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-[#6254B4]">
//                 Pest Control Services
//               </span>

//               <span
//                 itemProp="name"
//                 className="mt-1 block max-w-[230px] text-[15px] font-black leading-[1.2] text-[#171327] lg:max-w-[290px] lg:text-[17px]"
//               >
//                 SuperGuard Holborn Services Limited 
//               </span>

//               <span className="mt-0.5 block text-[11px] font-bold text-slate-500">
//                 Holborn, London
//               </span>
//             </div>
//           </Link>

//           {/* DESKTOP LINKS */}
//           <div className="hidden items-center xl:flex">
//             <ul className="m-0 flex list-none items-center gap-8 p-0">
//               {menuItems.map((item) => (
//                 <li key={item.path}>
//                   <NavLink
//                     to={item.path}
//                     className={desktopNavClass}
//                   >
//                     {({ isActive }) => (
//                       <>
//                         {item.label}

//                         <span
//                           className={`absolute bottom-0 left-0 h-[3px] rounded-full bg-[#6254B4] transition-all duration-300 ${
//                             isActive
//                               ? "w-full"
//                               : "w-0 group-hover:w-full"
//                           }`}
//                         />
//                       </>
//                     )}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* DESKTOP RIGHT SIDE */}
//           <div className="hidden items-center gap-4 md:flex">
//             <div className="hidden items-center gap-3 border-r border-slate-200 pr-5 lg:flex">
//               <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0EDFF] text-[#6254B4]">
//                 <Building2 size={18} strokeWidth={2.5} />
//               </div>

//               <div className="leading-tight">
//                 <span className="block text-[9px] font-black uppercase tracking-[0.18em] text-slate-400">
//                   Our Holborn Office
//                 </span>

//                 <span className="mt-1 block text-[11px] font-extrabold text-slate-800">
//                   50 Essex Street
//                 </span>
//               </div>
//             </div>

//             <Link
//               to="/contact-us"
//               className="group inline-flex items-center gap-2 rounded-full bg-[#6254B4] px-5 py-3.5 text-xs font-black uppercase tracking-[0.12em] text-white shadow-lg shadow-[#6254B4]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#171327] hover:shadow-xl"
//             >
//               Request a Quote

//               <ArrowUpRight
//                 size={16}
//                 strokeWidth={2.7}
//                 className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//               />
//             </Link>
//           </div>

//           {/* MOBILE MENU BUTTON */}
//           <button
//             type="button"
//             onClick={() => setOpen((prev) => !prev)}
//             aria-label={open ? "Close navigation menu" : "Open navigation menu"}
//             aria-expanded={open}
//             className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#171327] text-white shadow-lg shadow-[#171327]/15 transition-all duration-300 hover:bg-[#6254B4] active:scale-95 xl:hidden"
//           >
//             {open ? (
//               <X size={23} strokeWidth={2.8} />
//             ) : (
//               <Menu size={24} strokeWidth={2.8} />
//             )}
//           </button>
//         </div>
//       </nav>

//       {/* MOBILE AND TABLET MENU */}
//       <div
//         className={`absolute left-0 top-full w-full overflow-hidden border-t border-slate-200 bg-[#F8F7FC] shadow-2xl transition-all duration-300 xl:hidden ${
//           open
//             ? "visible max-h-[calc(100vh-82px)] opacity-100"
//             : "invisible max-h-0 opacity-0"
//         }`}
//       >
//         <div className="max-h-[calc(100vh-100px)] overflow-y-auto p-5 md:p-7">
//           <div className="mx-auto max-w-3xl">
//             {/* MOBILE LOCATION CARD */}
//             <div className="relative mb-4 overflow-hidden rounded-[28px] bg-[#171327] p-6 text-white">
//               <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[#6254B4]/35 blur-sm" />
//               <div className="absolute -bottom-16 -left-12 h-36 w-36 rounded-full border border-white/10" />

//               <div className="relative z-10">
//                 <div className="mb-4 flex items-center gap-2">
//                   <ShieldCheck
//                     size={17}
//                     className="text-[#B9B0FF]"
//                   />

//                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#B9B0FF]">
//                     Local Holborn Pest Control
//                   </span>
//                 </div>

//                 <h2 className="m-0 max-w-md text-xl font-black leading-tight">
//                   {LOCAL.company}
//                 </h2>

//                 <div className="mt-4 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
//                   <MapPin
//                     size={18}
//                     className="mt-0.5 shrink-0 text-[#B9B0FF]"
//                   />

//                   <div>
//                     <span className="block text-[10px] font-black uppercase tracking-widest text-white/50">
//                       Registered Business Address
//                     </span>

//                     <address className="mt-1 not-italic text-sm font-bold leading-relaxed text-white/90">
//                       {LOCAL.fullAddress}
//                     </address>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* MOBILE LINKS */}
//             <div className="flex flex-col gap-3">
//               {menuItems.map((item) => (
//                 <NavLink
//                   key={item.path}
//                   to={item.path}
//                   onClick={() => setOpen(false)}
//                   className={mobileNavClass}
//                 >
//                   {item.label}

//                   <ArrowUpRight
//                     size={17}
//                     strokeWidth={2.5}
//                   />
//                 </NavLink>
//               ))}
//             </div>

//             {/* MOBILE CTA */}
//             <Link
//               to="/contact-us"
//               onClick={() => setOpen(false)}
//               className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-[#6254B4] px-6 py-4 text-sm font-black uppercase tracking-[0.13em] text-white shadow-xl shadow-[#6254B4]/20 transition-all hover:bg-[#171327]"
//             >
//               Request a Free Quote
//               <ArrowUpRight size={18} strokeWidth={2.7} />
//             </Link>

//             <p className="mb-0 mt-4 text-center text-[11px] font-bold leading-relaxed text-slate-500">
//               Serving homes and businesses throughout Holborn and Central
//               London from {LOCAL.fullAddress}.
//             </p>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
















// import React, { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import {
//   ArrowUpRight,
//   ChevronRight,
//   MapPin,
//   Menu,
//   Phone,
//   ShieldCheck,
//   X,
// } from "lucide-react";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const LOCAL = {
//     company: "SuperGuard Services Westminster",
//     area: "Westminster",
//     city: "London",
//     postcode: "SW1P 4BD",
//     streetAddress: "14 Regency St",
//     fullAddress: "14 Regency St, London SW1P 4BD",
//     phoneDisplay: "07466 936103",
//     phoneTel: "+447466936103",
//   };

//   const menuItems = [
//     {
//       label: "Home",
//       path: "/",
//     },
//     {
//       label: "Services",
//       path: "/services",
//     },
//     {
//       label: "About Us",
//       path: "/about-us",
//     },
//     {
//       label: "Contact",
//       path: "/contact-us",
//     },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 30);
//     };

//     handleScroll();

//     window.addEventListener("scroll", handleScroll, {
//       passive: true,
//     });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "";

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [menuOpen]);

//   const desktopNavClass = ({ isActive }) =>
//     `relative flex items-center rounded-full px-4 py-3 text-[11px] font-black uppercase tracking-[0.11em] transition-all duration-300 2xl:px-5 2xl:text-[12px] ${
//       isActive
//         ? "bg-[#6254B4] text-white shadow-lg shadow-[#6254B4]/20"
//         : "text-[#262137] hover:bg-[#F1EEFF] hover:text-[#6254B4]"
//     }`;

//   const mobileNavClass = ({ isActive }) =>
//     `group flex items-center justify-between border-b border-white/10 px-1 py-5 text-lg font-black transition-all duration-300 ${
//       isActive
//         ? "text-[#C8C0FF]"
//         : "text-white hover:pl-2 hover:text-[#C8C0FF]"
//     }`;

//   return (
//     <>
//       <header
//         itemScope
//         itemType="https://schema.org/PestControl"
//         className="fixed left-0 top-0 z-50 w-full"
//       >
//         <meta itemProp="name" content={LOCAL.company} />
//         <meta itemProp="telephone" content={LOCAL.phoneDisplay} />
//         <meta
//           itemProp="areaServed"
//           content={`${LOCAL.area}, ${LOCAL.city}`}
//         />

//         <div
//           className={`mx-auto transition-all duration-500 ${
//             isScrolled
//               ? "max-w-[1360px] px-3 pt-3 sm:px-5"
//               : "max-w-[1440px] px-4 pt-4 sm:px-6 lg:pt-6"
//           }`}
//         >
//           <div
//             className={`overflow-hidden border border-white/70 bg-white/95 shadow-[0_20px_70px_rgba(26,20,52,0.14)] backdrop-blur-2xl transition-all duration-500 ${
//               isScrolled ? "rounded-[25px]" : "rounded-[30px]"
//             }`}
//           >
//             {/* DESKTOP INFORMATION STRIP */}
//             <div className="hidden bg-[#6254B4] text-white lg:block">
//               <div className="flex min-h-[36px] items-center justify-between gap-6 px-6 xl:px-8">
//                 <div className="flex items-center gap-2.5">
//                   <ShieldCheck
//                     size={14}
//                     strokeWidth={2.7}
//                     className="text-white/80"
//                   />

//                   <span className="text-[9px] font-black uppercase tracking-[0.19em] text-white/85">
//                     Professional pest control across Westminster
//                   </span>
//                 </div>

//                 <div className="flex items-center gap-6">
//                   <div
//                     itemProp="address"
//                     itemScope
//                     itemType="https://schema.org/PostalAddress"
//                     className="flex items-center gap-2 text-[10px] font-bold text-white/90"
//                   >
//                     <MapPin size={13} strokeWidth={2.8} />

//                     <span itemProp="streetAddress">
//                       {LOCAL.streetAddress}
//                     </span>

//                     <span className="text-white/40">•</span>

//                     <span itemProp="addressLocality">
//                       {LOCAL.city}
//                     </span>

//                     <span itemProp="postalCode">
//                       {LOCAL.postcode}
//                     </span>
//                   </div>

//                   <a
//                     href={`tel:${LOCAL.phoneTel}`}
//                     className="flex items-center gap-2 border-l border-white/20 pl-6 text-[10px] font-black text-white transition-opacity hover:opacity-75"
//                   >
//                     <Phone size={13} strokeWidth={2.8} />
//                     {LOCAL.phoneDisplay}
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* MAIN NAVIGATION */}
//             <nav
//               aria-label="Main navigation"
//               className="relative flex h-[82px] items-center justify-between gap-4 px-4 sm:px-5 lg:h-[88px] lg:px-6 xl:px-7"
//             >
//               {/* BRAND */}
//               <Link
//                 to="/"
//                 onClick={() => setMenuOpen(false)}
//                 aria-label={`${LOCAL.company} homepage`}
//                 className="group flex min-w-0 shrink-0 items-center gap-3"
//               >
//                 <div className="relative flex h-[56px] w-[68px] shrink-0 items-center justify-center overflow-hidden rounded-[17px]  p-2 shadow-lg shadow-[#6254B4]/20 transition-all duration-300 group-hover:-rotate-2 group-hover:scale-[1.03] lg:h-[60px] lg:w-[74px]">
//                 <div className="relative flex h-[56px] w-[68px] shrink-0 items-center justify-center transition-all duration-300 group-hover:scale-105 lg:h-[60px] lg:w-[74px]">
//   <img
//     src="/images/superguard-logo.webp"
//     alt="SuperGuard Services Westminster logo"
//     className="h-full w-full object-contain drop-shadow-[0_8px_18px_rgba(98,84,180,0.18)]"
//     loading="eager"
//   />
// </div>
                  
//                 </div>

//                 <div className="hidden min-w-0 sm:block">
//                   <span className="block text-[8px] font-black uppercase tracking-[0.25em] text-[#6254B4]">
//                     Westminster Pest Control
//                   </span>

//                   <span
//                     itemProp="name"
//                     className="mt-1 block max-w-[190px] text-[14px] font-black leading-[1.12] text-[#181425] 2xl:max-w-[230px] 2xl:text-[16px]"
//                   >
//                     SuperGuard Services
//                   </span>

//                   <span className="mt-1 block text-[10px] font-bold text-slate-500">
//                     Westminster, London
//                   </span>
//                 </div>
//               </Link>

//               {/* DESKTOP NAVIGATION LINKS */}
//               <div className="absolute left-1/2 hidden -translate-x-1/2 xl:block">
//                 <div className="flex items-center gap-1 rounded-full border border-[#E6E1F4] bg-[#FAF9FD] p-1.5 shadow-inner">
//                   {menuItems.map((item) => (
//                     <NavLink
//                       key={item.path}
//                       to={item.path}
//                       className={desktopNavClass}
//                     >
//                       {item.label}
//                     </NavLink>
//                   ))}
//                 </div>
//               </div>

//               {/* DESKTOP CTA */}
//               <div className="hidden shrink-0 items-center md:flex">
//                 <Link
//                   to="/contact-us"
//                   className="group flex items-center gap-2 rounded-full bg-[#181425] px-4 py-3 text-[10px] font-black uppercase tracking-[0.11em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6254B4] hover:shadow-xl hover:shadow-[#6254B4]/20 lg:px-5 lg:py-3.5 lg:text-[11px]"
//                 >
//                   Book Service

//                   <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-white group-hover:text-[#6254B4]">
//                     <ArrowUpRight size={14} strokeWidth={2.8} />
//                   </span>
//                 </Link>
//               </div>

//               {/* MOBILE AND TABLET MENU BUTTON */}
//               <button
//                 type="button"
//                 onClick={() => setMenuOpen(true)}
//                 aria-label="Open navigation menu"
//                 aria-expanded={menuOpen}
//                 className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#6254B4] text-white shadow-lg shadow-[#6254B4]/25 transition-all duration-300 hover:scale-105 hover:bg-[#181425] active:scale-95 xl:hidden"
//               >
//                 <Menu size={23} strokeWidth={2.8} />
//               </button>
//             </nav>
//           </div>
//         </div>
//       </header>

//       {/* MOBILE OVERLAY */}
//       <div
//         onClick={() => setMenuOpen(false)}
//         className={`fixed inset-0 z-[60] bg-[#0E0B18]/70 backdrop-blur-sm transition-all duration-500 xl:hidden ${
//           menuOpen
//             ? "visible opacity-100"
//             : "invisible opacity-0"
//         }`}
//       />

//       {/* MOBILE AND TABLET SIDE PANEL */}
//       <aside
//         className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-[410px] flex-col overflow-y-auto bg-[#181425] text-white shadow-2xl transition-transform duration-500 xl:hidden ${
//           menuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="relative min-h-full overflow-hidden px-6 pb-8 pt-6">
//           <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#6254B4]/35 blur-2xl" />
//           <div className="absolute -bottom-32 -left-24 h-64 w-64 rounded-full border border-white/5" />

//           <div className="relative z-10">
//             {/* PANEL HEADER */}
//             <div className="flex items-center justify-between">
//               <Link
//                 to="/"
//                 onClick={() => setMenuOpen(false)}
//                 className="flex items-center gap-3"
//               >
//                 <div className="flex h-14 w-16 items-center justify-center rounded-[17px] bg-[#6254B4] p-2">
//                   <img
//                     src="/images/superguard-logo.webp"
//                     alt="SuperGuard Services Westminster logo"
//                     className="h-full w-full object-contain brightness-0 invert"
//                   />
//                 </div>

//                 <div>
//                   <span className="block text-[8px] font-black uppercase tracking-[0.23em] text-[#B7ADFF]">
//                     Pest Control
//                   </span>

//                   <span className="mt-1 block text-sm font-black leading-tight text-white">
//                     SuperGuard Westminster
//                   </span>
//                 </div>
//               </Link>

//               <button
//                 type="button"
//                 onClick={() => setMenuOpen(false)}
//                 aria-label="Close navigation menu"
//                 className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:rotate-90 hover:bg-[#6254B4]"
//               >
//                 <X size={21} strokeWidth={2.8} />
//               </button>
//             </div>

//             {/* MOBILE INTRO */}
//             <div className="mt-10">
//               <div className="mb-4 flex items-center gap-2">
//                 <ShieldCheck
//                   size={17}
//                   strokeWidth={2.7}
//                   className="text-[#B7ADFF]"
//                 />

//                 <span className="text-[9px] font-black uppercase tracking-[0.22em] text-[#B7ADFF]">
//                   Professional Local Service
//                 </span>
//               </div>

//               <h2 className="m-0 text-3xl font-black leading-[1.05]">
//                 Pest control across Westminster.
//               </h2>

//               <p className="mb-0 mt-4 text-sm font-medium leading-7 text-white/60">
//                 Reliable pest control for residential and commercial
//                 properties throughout Westminster and Central London.
//               </p>
//             </div>

//             {/* MOBILE LINKS */}
//             <div className="mt-8">
//               {menuItems.map((item) => (
//                 <NavLink
//                   key={item.path}
//                   to={item.path}
//                   onClick={() => setMenuOpen(false)}
//                   className={mobileNavClass}
//                 >
//                   {item.label}

//                   <ChevronRight
//                     size={20}
//                     strokeWidth={2.7}
//                     className="transition-transform duration-300 group-hover:translate-x-1"
//                   />
//                 </NavLink>
//               ))}
//             </div>

//             {/* CONTACT DETAILS */}
//             <div className="mt-8 rounded-[26px] bg-white p-5 text-[#181425]">
//               <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#6254B4]">
//                 Need Pest Control?
//               </span>

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="mt-3 flex items-center justify-between rounded-2xl bg-[#F3F0FF] p-4"
//               >
//                 <span className="flex items-center gap-3">
//                   <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#6254B4] text-white">
//                     <Phone size={18} strokeWidth={2.8} />
//                   </span>

//                   <span>
//                     <span className="block text-[9px] font-black uppercase tracking-wider text-slate-400">
//                       Call Our Team
//                     </span>

//                     <span className="mt-1 block text-sm font-black">
//                       {LOCAL.phoneDisplay}
//                     </span>
//                   </span>
//                 </span>

//                 <ArrowUpRight
//                   size={18}
//                   strokeWidth={2.7}
//                   className="text-[#6254B4]"
//                 />
//               </a>

//               <div
//                 itemProp="address"
//                 itemScope
//                 itemType="https://schema.org/PostalAddress"
//                 className="mt-3 flex items-start gap-3 rounded-2xl border border-slate-200 p-4"
//               >
//                 <MapPin
//                   size={19}
//                   strokeWidth={2.7}
//                   className="mt-0.5 shrink-0 text-[#6254B4]"
//                 />

//                 <div>
//                   <span className="block text-[9px] font-black uppercase tracking-wider text-slate-400">
//                     Westminster Office
//                   </span>

//                   <address className="mt-1 not-italic text-xs font-bold leading-5">
//                     <span itemProp="streetAddress">
//                       {LOCAL.streetAddress}
//                     </span>
//                     ,{" "}
//                     <span itemProp="addressLocality">
//                       {LOCAL.city}
//                     </span>{" "}
//                     <span itemProp="postalCode">
//                       {LOCAL.postcode}
//                     </span>
//                   </address>
//                 </div>
//               </div>

//               <Link
//                 to="/contact-us"
//                 onClick={() => setMenuOpen(false)}
//                 className="mt-3 flex items-center justify-center gap-2 rounded-2xl bg-[#6254B4] px-5 py-4 text-xs font-black uppercase tracking-[0.13em] text-white transition-all duration-300 hover:bg-[#181425]"
//               >
//                 Request a  Quote
//                 <ArrowUpRight size={17} strokeWidth={2.7} />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// }
















// import React, { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import {
//   ArrowUpRight,
//   ChevronRight,
//   MapPin,
//   Menu,
//   Phone,
//   ShieldCheck,
//   X,
// } from "lucide-react";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const LOCAL = {
//     company: "Superguard Services Marylebone",
//     area: "Marylebone",
//     city: "London",
//     postcode: "NW1 6UB",
//     streetAddress: "49 Shroton St",
//     fullAddress: "49 Shroton St, London NW1 6UB",
//     phoneDisplay: "+44 7356 236459",
//     phoneTel: "+447356236459",
//   };

//   const menuItems = [
//     {
//       label: "Home",
//       path: "/",
//     },
//     {
//       label: "Services",
//       path: "/services",
//     },
//     {
//       label: "About Us",
//       path: "/about-us",
//     },
//     {
//       label: "Contact",
//       path: "/contact-us",
//     },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 30);
//     };

//     handleScroll();

//     window.addEventListener("scroll", handleScroll, {
//       passive: true,
//     });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "";

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [menuOpen]);

//   const desktopNavClass = ({ isActive }) =>
//     `relative flex items-center px-4 py-2 text-[12px] font-black uppercase tracking-[0.1em] transition-all duration-300 ${
//       isActive
//         ? "text-[#7C66DC] border-b-2 border-[#7C66DC]"
//         : "text-slate-700 hover:text-[#7C66DC]"
//     }`;

//   const mobileNavClass = ({ isActive }) =>
//     `group flex items-center justify-between border-b border-white/10 px-1 py-5 text-lg font-black transition-all duration-300 ${
//       isActive
//         ? "text-[#D2CBEF]"
//         : "text-white hover:pl-2 hover:text-[#D2CBEF]"
//     }`;

//   return (
//     <>
//       <header
//         itemScope
//         itemType="https://schema.org/PestControl"
//         className="fixed left-0 top-0 z-50 w-full"
//       >
//         <meta itemProp="name" content={LOCAL.company} />
//         <meta itemProp="telephone" content={LOCAL.phoneDisplay} />
//         <meta
//           itemProp="areaServed"
//           content={`${LOCAL.area}, ${LOCAL.city}`}
//         />

//         <div
//           className={`mx-auto transition-all duration-500 ${
//             isScrolled
//               ? "max-w-[1360px] px-3 pt-3 sm:px-5"
//               : "max-w-[1440px] px-4 pt-4 sm:px-6 lg:pt-6"
//           }`}
//         >
//           <div
//             className={`overflow-hidden border border-slate-200/80 bg-white/90 shadow-xl backdrop-blur-xl transition-all duration-500 ${
//               isScrolled ? "rounded-[20px]" : "rounded-[24px]"
//             }`}
//           >
//             {/* DESKTOP INFORMATION STRIP */}
//             <div className="hidden bg-[#181425] text-white lg:block">
//               <div className="flex min-h-[38px] items-center justify-between gap-6 px-6 xl:px-8">
//                 <div className="flex items-center gap-2.5">
//                   <ShieldCheck
//                     size={15}
//                     strokeWidth={2.7}
//                     className="text-[#7C66DC]"
//                   />

//                   <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-300">
//                     Certified Pest Extermination in Marylebone
//                   </span>
//                 </div>

//                 <div className="flex items-center gap-6">
//                   <div
//                     itemProp="address"
//                     itemScope
//                     itemType="https://schema.org/PostalAddress"
//                     className="flex items-center gap-2 text-[10px] font-bold text-slate-300"
//                   >
//                     <MapPin size={13} strokeWidth={2.8} className="text-[#7C66DC]" />

//                     <span itemProp="streetAddress">
//                       {LOCAL.streetAddress}
//                     </span>

//                     <span className="text-white/40">•</span>

//                     <span itemProp="addressLocality">
//                       {LOCAL.city}
//                     </span>

//                     <span itemProp="postalCode">
//                       {LOCAL.postcode}
//                     </span>
//                   </div>

//                   <a
//                     href={`tel:${LOCAL.phoneTel}`}
//                     className="flex items-center gap-2 border-l border-white/10 pl-6 text-[10px] font-black text-white transition-opacity hover:opacity-75"
//                   >
//                     <Phone size={13} strokeWidth={2.8} className="text-[#7C66DC]" />
//                     {LOCAL.phoneDisplay}
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* MAIN NAVIGATION */}
//             <nav
//               aria-label="Main navigation"
//               className="relative flex h-[76px] items-center justify-between gap-4 px-4 sm:px-5 lg:h-[82px] lg:px-6 xl:px-7"
//             >
//               {/* BRAND (Original Colors Maintained) */}
//               <Link
//                 to="/"
//                 onClick={() => setMenuOpen(false)}
//                 aria-label={`${LOCAL.company} homepage`}
//                 className="group flex min-w-0 shrink-0 items-center gap-3"
//               >
//                 <div className="relative flex h-[48px] w-[58px] shrink-0 items-center justify-center p-1 transition-all duration-300 group-hover:scale-105">
//                   <img
//                     src="/images/superguard-logo.webp"
//                     alt="Superguard Services Marylebone logo"
//                     className="h-full w-full object-contain drop-shadow-md"
//                     loading="eager"
//                   />
//                 </div>

//                 <div className="hidden min-w-0 sm:block">
//                   <span className="block text-[8px] font-black uppercase tracking-[0.22em] text-[#7C66DC]">
//                     Marylebone Pest Control
//                   </span>

//                   <span
//                     itemProp="name"
//                     className="mt-0.5 block max-w-[200px] text-[13px] font-black leading-tight text-slate-900 2xl:text-[15px]"
//                   >
//                     Superguard Services
//                   </span>
//                 </div>
//               </Link>

//               {/* DESKTOP NAVIGATION LINKS (Unique Split/Clean Design) */}
//               <div className="hidden xl:flex items-center gap-2">
//                 {menuItems.map((item) => (
//                   <NavLink
//                     key={item.path}
//                     to={item.path}
//                     className={desktopNavClass}
//                   >
//                     {item.label}
//                   </NavLink>
//                 ))}
//               </div>

//               {/* DESKTOP CTA */}
//               <div className="hidden shrink-0 items-center md:flex">
//                 <Link
//                   to="/contact-us"
//                   className="group flex items-center gap-2 rounded-full bg-[#7C66DC] px-5 py-3 text-[11px] font-black uppercase tracking-[0.11em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#181425] hover:shadow-lg hover:shadow-[#7C66DC]/20"
//                 >
//                   Book Service

//                   <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-all duration-300 group-hover:bg-white group-hover:text-[#181425]">
//                     <ArrowUpRight size={13} strokeWidth={2.8} />
//                   </span>
//                 </Link>
//               </div>

//               {/* MOBILE AND TABLET MENU BUTTON */}
//               <button
//                 type="button"
//                 onClick={() => setMenuOpen(true)}
//                 aria-label="Open navigation menu"
//                 aria-expanded={menuOpen}
//                 className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#7C66DC] text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#181425] active:scale-95 xl:hidden"
//               >
//                 <Menu size={21} strokeWidth={2.8} />
//               </button>
//             </nav>
//           </div>
//         </div>
//       </header>

//       {/* MOBILE OVERLAY */}
//       <div
//         onClick={() => setMenuOpen(false)}
//         className={`fixed inset-0 z-[60] bg-[#181425]/70 backdrop-blur-sm transition-all duration-500 xl:hidden ${
//           menuOpen
//             ? "visible opacity-100"
//             : "invisible opacity-0"
//         }`}
//       />

//       {/* MOBILE AND TABLET SIDE PANEL */}
//       <aside
//         className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-[410px] flex-col overflow-y-auto bg-[#181425] text-white shadow-2xl transition-transform duration-500 xl:hidden ${
//           menuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="relative min-h-full overflow-hidden px-6 pb-8 pt-6">
//           <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#7C66DC]/25 blur-3xl" />

//           <div className="relative z-10">
//             {/* PANEL HEADER */}
//             <div className="flex items-center justify-between">
//               <Link
//                 to="/"
//                 onClick={() => setMenuOpen(false)}
//                 className="flex items-center gap-3"
//               >
//                 <div className="flex h-12 w-14 items-center justify-center rounded-xl bg-white/10 p-1.5">
//                   <img
//                     src="/images/superguard-logo.webp"
//                     alt="Superguard Services Marylebone logo"
//                     className="h-full w-full object-contain"
//                   />
//                 </div>

//                 <div>
//                   <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-[#D2CBEF]">
//                     Pest Control
//                   </span>
//                   <span className="mt-0.5 block text-xs font-black leading-tight text-white">
//                     Superguard Marylebone
//                   </span>
//                 </div>
//               </Link>

//               <button
//                 type="button"
//                 onClick={() => setMenuOpen(false)}
//                 aria-label="Close navigation menu"
//                 className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:rotate-90 hover:bg-[#7C66DC]"
//               >
//                 <X size={19} strokeWidth={2.8} />
//               </button>
//             </div>

//             {/* MOBILE INTRO */}
//             <div className="mt-8">
//               <div className="mb-3 flex items-center gap-2">
//                 <ShieldCheck
//                   size={16}
//                   strokeWidth={2.7}
//                   className="text-[#D2CBEF]"
//                 />
//                 <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#D2CBEF]">
//                   Marylebone Local Service
//                 </span>
//               </div>

//               <h2 className="m-0 text-2xl font-black leading-snug">
//                 Professional pest control across Marylebone.
//               </h2>

//               <p className="mb-0 mt-3 text-xs font-medium leading-6 text-slate-300">
//                 Reliable pest management solutions for homes and businesses throughout Marylebone, London.
//               </p>
//             </div>

//             {/* MOBILE LINKS */}
//             <div className="mt-6">
//               {menuItems.map((item) => (
//                 <NavLink
//                   key={item.path}
//                   to={item.path}
//                   onClick={() => setMenuOpen(false)}
//                   className={mobileNavClass}
//                 >
//                   {item.label}

//                   <ChevronRight
//                     size={18}
//                     strokeWidth={2.7}
//                     className="transition-transform duration-300 group-hover:translate-x-1"
//                   />
//                 </NavLink>
//               ))}
//             </div>

//             {/* CONTACT DETAILS */}
//             <div className="mt-6 rounded-[22px] bg-white p-4 text-slate-900">
//               <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#7C66DC]">
//                 Need Pest Assistance?
//               </span>

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="mt-2.5 flex items-center justify-between rounded-xl bg-slate-100 p-3.5 transition hover:bg-slate-200"
//               >
//                 <span className="flex items-center gap-3">
//                   <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7C66DC] text-white">
//                     <Phone size={16} strokeWidth={2.8} />
//                   </span>

//                   <div>
//                     <span className="block text-[8px] font-black uppercase tracking-wider text-slate-400">
//                       Direct Line
//                     </span>
//                     <span className="text-xs font-black">
//                       {LOCAL.phoneDisplay}
//                     </span>
//                   </div>
//                 </span>

//                 <ArrowUpRight
//                   size={16}
//                   strokeWidth={2.7}
//                   className="text-[#7C66DC]"
//                 />
//               </a>

//               <div
//                 itemProp="address"
//                 itemScope
//                 itemType="https://schema.org/PostalAddress"
//                 className="mt-2.5 flex items-start gap-3 rounded-xl border border-slate-200 p-3.5"
//               >
//                 <MapPin
//                   size={17}
//                   strokeWidth={2.7}
//                   className="mt-0.5 shrink-0 text-[#7C66DC]"
//                 />

//                 <div>
//                   <span className="block text-[8px] font-black uppercase tracking-wider text-slate-400">
//                     Marylebone Office
//                   </span>

//                   <address className="not-italic text-[11px] font-bold leading-4 text-slate-700 mt-0.5">
//                     <span itemProp="streetAddress">{LOCAL.streetAddress}</span>,{" "}
//                     <span itemProp="addressLocality">{LOCAL.city}</span>{" "}
//                     <span itemProp="postalCode">{LOCAL.postcode}</span>
//                   </address>
//                 </div>
//               </div>

//               <Link
//                 to="/contact-us"
//                 onClick={() => setMenuOpen(false)}
//                 className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#7C66DC] px-4 py-3 text-[11px] font-black uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-[#181425]"
//               >
//                 Book Service Now
//                 <ArrowUpRight size={15} strokeWidth={2.7} />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// }















// import React, { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import {
//   ArrowUpRight,
//   ChevronRight,
//   MapPin,
//   Menu,
//   Phone,
//   ShieldCheck,
//   Sparkles,
//   X,
// } from "lucide-react";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const LOCAL = {
//     company: "Superguard Services Marylebone",
//     area: "Marylebone",
//     city: "London",
//     postcode: "NW1 6UB",
//     streetAddress: "49 Shroton St",
//     fullAddress: "49 Shroton St, London NW1 6UB",
//     phoneDisplay: "+44 7356 236459",
//     phoneTel: "+447356236459",
//   };

//   const menuItems = [
//     { label: "Home", path: "/" },
//     { label: "Services", path: "/services" },
//     { label: "About Us", path: "/about-us" },
//     { label: "Contact", path: "/contact-us" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     handleScroll();
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [menuOpen]);

//   const desktopNavClass = ({ isActive }) =>
//     `relative px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] transition-all duration-300 rounded-full ${
//       isActive
//         ? "bg-[#7C66DC]/10 text-[#7C66DC] shadow-sm"
//         : "text-slate-600 hover:text-[#7C66DC] hover:bg-slate-100/60"
//     }`;

//   const mobileNavClass = ({ isActive }) =>
//     `group flex items-center justify-between border-b border-white/10 px-2 py-4 text-base font-black transition-all duration-300 ${
//       isActive
//         ? "text-[#D2CBEF] pl-3 bg-white/5 rounded-xl"
//         : "text-slate-200 hover:pl-3 hover:text-white"
//     }`;

//   return (
//     <>
//       <header
//         itemScope
//         itemType="https://schema.org/PestControl"
//         className="fixed left-0 top-0 z-50 w-full transition-all duration-500"
//       >
//         <meta itemProp="name" content={LOCAL.company} />
//         <meta itemProp="telephone" content={LOCAL.phoneDisplay} />
//         <meta itemProp="areaServed" content={`${LOCAL.area}, ${LOCAL.city}`} />

//         <div className="mx-auto max-w-[1400px] px-3 pt-3 sm:px-6 lg:pt-4">
//           <div
//             className={`relative overflow-hidden transition-all duration-500 border ${
//               isScrolled
//                 ? "bg-white/95 border-slate-200/90 shadow-2xl shadow-slate-900/10 backdrop-blur-2xl rounded-[22px]"
//                 : "bg-white/80 border-slate-200/60 shadow-xl shadow-slate-900/5 backdrop-blur-xl rounded-[26px]"
//             }`}
//           >
//             {/* TOP ULTRA-THIN UTILITY BAR */}
//             <div className="hidden bg-gradient-to-r from-[#181425] via-[#241d38] to-[#181425] text-white lg:block">
//               <div className="flex h-[34px] items-center justify-between px-6 xl:px-8">
//                 <div className="flex items-center gap-2">
//                   <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
//                   <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-300">
//                     Marylebone Priority Dispatch Live
//                   </span>
//                 </div>

//                 <div className="flex items-center gap-6">
//                   <div
//                     itemProp="address"
//                     itemScope
//                     itemType="https://schema.org/PostalAddress"
//                     className="flex items-center gap-2 text-[10px] font-bold text-slate-300"
//                   >
//                     <MapPin size={12} strokeWidth={2.8} className="text-[#7C66DC]" />
//                     <span itemProp="streetAddress">{LOCAL.streetAddress}</span>,{" "}
//                     <span itemProp="addressLocality">{LOCAL.city}</span>{" "}
//                     <span itemProp="postalCode">{LOCAL.postcode}</span>
//                   </div>

//                   <a
//                     href={`tel:${LOCAL.phoneTel}`}
//                     className="flex items-center gap-2 border-l border-white/10 pl-5 text-[10px] font-black text-white transition-all hover:text-[#D2CBEF]"
//                   >
//                     <Phone size={12} strokeWidth={2.8} className="text-[#7C66DC]" />
//                     {LOCAL.phoneDisplay}
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* MAIN NAVIGATION BAR */}
//             <nav
//               aria-label="Main navigation"
//               className="flex h-[70px] items-center justify-between px-4 sm:px-6 lg:h-[76px] lg:px-8"
//             >
//               {/* BRAND LOGO AREA */}
//               <Link
//                 to="/"
//                 onClick={() => setMenuOpen(false)}
//                 aria-label={`${LOCAL.company} homepage`}
//                 className="group flex items-center gap-3.5"
//               >
//                 <div className="relative flex h-[44px] w-[52px] shrink-0 items-center justify-center rounded-xl bg-slate-100/80 p-1 border border-slate-200/60 transition-transform duration-300 group-hover:scale-105">
//                   <img
//                     src="/images/superguard-logo.webp"
//                     alt="Superguard Services Marylebone logo"
//                     className="h-full w-full object-contain drop-shadow"
//                     loading="eager"
//                   />
//                 </div>

//                 <div className="hidden min-w-0 sm:block">
//                   <div className="flex items-center gap-1.5">
//                     <span className="text-[8px] font-black uppercase tracking-[0.25em] text-[#7C66DC]">
//                       Marylebone
//                     </span>
//                     <span className="h-1 w-1 rounded-full bg-slate-300" />
//                     <span className="text-[8px] font-black uppercase tracking-[0.2em] text-slate-400">
//                       24/7
//                     </span>
//                   </div>
//                   <span
//                     itemProp="name"
//                     className="block text-[13px] font-black leading-none text-slate-900 tracking-tight mt-0.5 xl:text-[14px]"
//                   >
//                     Superguard Services
//                   </span>
//                 </div>
//               </Link>

//               {/* CENTER DESKTOP LINKS (Pill Container Style) */}
//               <div className="hidden xl:flex items-center gap-1 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/60">
//                 {menuItems.map((item) => (
//                   <NavLink
//                     key={item.path}
//                     to={item.path}
//                     className={desktopNavClass}
//                   >
//                     {item.label}
//                   </NavLink>
//                 ))}
//               </div>

//               {/* RIGHT ACTIONS / CTA */}
//               <div className="hidden shrink-0 items-center gap-3 md:flex">
//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="hidden 2xl:flex items-center gap-2 px-4 py-2.5 rounded-full text-[11px] font-black text-slate-700 bg-slate-100 hover:bg-slate-200/70 transition"
//                 >
//                   <Phone size={13} className="text-[#7C66DC]" />
//                   {LOCAL.phoneDisplay}
//                 </a>

//                 <Link
//                   to="/contact-us"
//                   className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-[#181425] px-6 py-3 text-[11px] font-black uppercase tracking-[0.12em] text-white shadow-lg transition-all duration-300 hover:bg-[#7C66DC] hover:shadow-[#7C66DC]/25 active:scale-95"
//                 >
//                   <span>Book Service</span>
//                   <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
//                     <ArrowUpRight size={12} strokeWidth={3} />
//                   </span>
//                 </Link>
//               </div>

//               {/* MOBILE TRIGGER BUTTON */}
//               <button
//                 type="button"
//                 onClick={() => setMenuOpen(true)}
//                 aria-label="Open navigation menu"
//                 aria-expanded={menuOpen}
//                 className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#181425] text-white shadow-md transition-all duration-300 hover:bg-[#7C66DC] active:scale-95 xl:hidden"
//               >
//                 <Menu size={20} strokeWidth={2.8} />
//               </button>
//             </nav>
//           </div>
//         </div>
//       </header>

//       {/* MOBILE BACKDROP */}
//       <div
//         onClick={() => setMenuOpen(false)}
//         className={`fixed inset-0 z-[60] bg-[#181425]/80 backdrop-blur-md transition-opacity duration-500 xl:hidden ${
//           menuOpen ? "visible opacity-100" : "invisible opacity-0"
//         }`}
//       />

//       {/* LUXURY MOBILE SLIDE-OVER PANEL */}
//       <aside
//         className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-[420px] flex-col overflow-y-auto bg-[#181425] text-white shadow-2xl transition-transform duration-500 xl:hidden ${
//           menuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="relative min-h-full px-6 pb-10 pt-6 flex flex-col justify-between">
//           <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#7C66DC]/30 blur-3xl pointer-events-none" />

//           <div className="relative z-10">
//             {/* PANEL TOP */}
//             <div className="flex items-center justify-between border-b border-white/10 pb-5">
//               <Link
//                 to="/"
//                 onClick={() => setMenuOpen(false)}
//                 className="flex items-center gap-3"
//               >
//                 <div className="flex h-11 w-13 items-center justify-center rounded-xl bg-white/10 p-1 border border-white/10">
//                   <img
//                     src="/images/superguard-logo.webp"
//                     alt="Superguard Services Marylebone logo"
//                     className="h-full w-full object-contain"
//                   />
//                 </div>
//                 <div>
//                   <span className="block text-[8px] font-black uppercase tracking-[0.2em] text-[#7C66DC]">
//                     Marylebone Hub
//                   </span>
//                   <span className="text-xs font-black text-white">
//                     Superguard Services
//                   </span>
//                 </div>
//               </Link>

//               <button
//                 type="button"
//                 onClick={() => setMenuOpen(false)}
//                 aria-label="Close menu"
//                 className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#7C66DC]"
//               >
//                 <X size={18} strokeWidth={2.8} />
//               </button>
//             </div>

//             {/* MOBILE HERO CARD */}
//             <div className="mt-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-4 border border-white/10">
//               <div className="flex items-center gap-2 mb-2">
//                 <Sparkles size={14} className="text-[#7C66DC]" />
//                 <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#D2CBEF]">
//                   Local Elite Extermination
//                 </span>
//               </div>
//               <p className="text-xs font-medium text-slate-300 leading-relaxed">
//                 Fast response pest elimination services for domestic and commercial properties across Marylebone.
//               </p>
//             </div>

//             {/* NAVIGATION LINKS */}
//             <div className="mt-6 space-y-1">
//               {menuItems.map((item) => (
//                 <NavLink
//                   key={item.path}
//                   to={item.path}
//                   onClick={() => setMenuOpen(false)}
//                   className={mobileNavClass}
//                 >
//                   <span>{item.label}</span>
//                   <ChevronRight size={16} className="text-slate-500" />
//                 </NavLink>
//               ))}
//             </div>
//           </div>

//           {/* PANEL FOOTER CONTACT INFO */}
//           <div className="relative z-10 mt-8 rounded-2xl bg-white p-4 text-slate-900 shadow-xl">
//             <span className="text-[9px] font-black uppercase tracking-[0.15em] text-[#7C66DC]">
//               Direct Assistance
//             </span>

//             <a
//               href={`tel:${LOCAL.phoneTel}`}
//               className="mt-2 flex items-center justify-between rounded-xl bg-slate-100 p-3 hover:bg-slate-200 transition"
//             >
//               <span className="flex items-center gap-3">
//                 <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7C66DC] text-white">
//                   <Phone size={14} />
//                 </span>
//                 <span className="text-xs font-black">{LOCAL.phoneDisplay}</span>
//               </span>
//               <ArrowUpRight size={14} className="text-[#7C66DC]" />
//             </a>

//             <div className="mt-2.5 flex items-start gap-2.5 rounded-xl border border-slate-200 p-3">
//               <MapPin size={15} className="mt-0.5 text-[#7C66DC] shrink-0" />
//               <address className="not-italic text-[11px] font-bold text-slate-700 leading-tight">
//                 {LOCAL.streetAddress}, {LOCAL.city} {LOCAL.postcode}
//               </address>
//             </div>

//             <Link
//               to="/contact-us"
//               onClick={() => setMenuOpen(false)}
//               className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#7C66DC] py-3 text-[11px] font-black uppercase tracking-[0.1em] text-white transition hover:bg-[#181425]"
//             >
//               Book Service Now
//               <ArrowUpRight size={14} />
//             </Link>
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// }











// import React, { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import {
//   ArrowUpRight,
//   ChevronDown,
//   ChevronRight,
//   MapPin,
//   Menu,
//   Phone,
//   ShieldCheck,
//   X,
// } from "lucide-react";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const LOCAL = {
//     company: "Superguard Services West Wickham",
//     area: "West Wickham",
//     city: "London",
//     postcode: "BR4 0QL",
//     streetAddress: "16 Ash Grove",
//     fullAddress: "16 Ash Grove, West Wickham BR4 0QL",
//     phoneDisplay: "07356 270867",
//     phoneTel: "+447356270867",
//     email: "info@superguardwestwickham.uk",
//   };

//   const menuItems = [
//     { label: "Home", path: "/" },
//     { label: "Services", path: "/services" },
//     { label: "About Us", path: "/about-us" },
//     { label: "Contact", path: "/contact-us" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 35);
//     };

//     handleScroll();

//     window.addEventListener("scroll", handleScroll, {
//       passive: true,
//     });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "";

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [menuOpen]);

//   const desktopNavClass = ({ isActive }) =>
//     `relative flex items-center gap-1 px-4 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.13em] transition-all duration-300 ${
//       isActive
//         ? "text-white after:absolute after:-bottom-1 after:left-4 after:right-4 after:h-[2px] after:rounded-full after:bg-white"
//         : "text-white/70 hover:text-white"
//     }`;

//   const mobileNavClass = ({ isActive }) =>
//     `group flex items-center justify-between border-b border-white/15 py-5 transition-all duration-300 ${
//       isActive ? "text-white" : "text-white/65 hover:text-white"
//     }`;

//   return (
//     <>
//       <header
//         itemScope
//         itemType="https://schema.org/PestControl"
//         className="fixed left-0 top-0 z-50 w-full"
//       >
//         <meta itemProp="name" content={LOCAL.company} />
//         <meta itemProp="telephone" content={LOCAL.phoneDisplay} />
//         <meta
//           itemProp="areaServed"
//           content={`${LOCAL.area}, ${LOCAL.city}`}
//         />

//         {/* =========================================================
//             TOP LOCATION STRIP
//         ========================================================= */}
//         <div
//           className={`hidden bg-[#6055A6] text-white lg:block transition-all duration-300 ${
//             isScrolled ? "h-0 overflow-hidden opacity-0" : "h-9 opacity-100"
//           }`}
//         >
//           <div className="mx-auto flex h-full max-w-[1500px] items-center justify-between px-8">
//             <div className="flex items-center gap-2">
//               <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
//                 <ShieldCheck size={11} strokeWidth={2.5} />
//               </span>

//               <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/80">
//                 Professional Pest Control in West Wickham
//               </span>
//             </div>

//             <div className="flex items-center gap-6">
//               <div className="flex items-center gap-2 text-[10px] font-semibold text-white/80">
//                 <MapPin size={12} strokeWidth={2.5} />

//                 <span
//                   itemProp="address"
//                   itemScope
//                   itemType="https://schema.org/PostalAddress"
//                 >
//                   <span itemProp="streetAddress">
//                     {LOCAL.streetAddress}
//                   </span>
//                   {", "}
//                   <span itemProp="addressLocality">{LOCAL.city}</span>{" "}
//                   <span itemProp="postalCode">{LOCAL.postcode}</span>
//                 </span>
//               </div>

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="flex items-center gap-2 border-l border-white/20 pl-6 text-[10px] font-extrabold transition-colors hover:text-white/70"
//               >
//                 <Phone size={12} />
//                 {LOCAL.phoneDisplay}
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* =========================================================
//             MAIN NAVIGATION
//         ========================================================= */}
//         <div
//           className={`transition-all duration-500 ${
//             isScrolled ? "pt-0" : "pt-3 lg:pt-4"
//           }`}
//         >
//           <div
//             className={`mx-auto max-w-[1500px] transition-all duration-500 ${
//               isScrolled ? "" : "px-3 sm:px-5 lg:px-8"
//             }`}
//           >
//             <nav
//               aria-label="Main navigation"
//               className={`relative flex h-[72px] items-center justify-between overflow-hidden bg-[#6055A6] px-4 text-white transition-all duration-500 sm:px-6 lg:h-[82px] lg:px-8 ${
//                 isScrolled
//                   ? "shadow-2xl shadow-[#30276c]/30"
//                   : "rounded-2xl shadow-xl shadow-[#30276c]/20"
//               }`}
//             >
//               {/* Decorative background element */}
//               <div className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full border-[35px] border-white/[0.035]" />

//               <div className="pointer-events-none absolute -bottom-28 left-[30%] h-48 w-48 rounded-full border-[28px] border-white/[0.025]" />

//               {/* =====================================================
//                   LOGO
//               ===================================================== */}
//               <Link
//                 to="/"
//                 onClick={() => setMenuOpen(false)}
//                 aria-label={`${LOCAL.company} homepage`}
//                 className="relative z-10 flex shrink-0 items-center gap-3"
//               >
//                 <div className="flex h-[48px] w-[58px] items-center justify-center rounded-lg bg-white p-1 shadow-md transition-transform duration-300 hover:scale-105">
//                   <img
//                     src="/images/superguard-logo.webp"
//                     alt={`${LOCAL.company} logo`}
//                     className="h-full w-full object-contain"
//                     loading="eager"
//                   />
//                 </div>

//                 <div className="hidden sm:block">
//                   <div className="mb-1 flex items-center gap-2">
//                     <span className="h-1.5 w-1.5 rounded-full bg-white" />

//                     <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-white/65">
//                       West Wickham
//                     </span>
//                   </div>

//                   <span
//                     itemProp="name"
//                     className="block text-[13px] font-black uppercase leading-none tracking-tight text-white lg:text-[14px]"
//                   >
//                     Superguard Services
//                   </span>
//                 </div>
//               </Link>

//               {/* =====================================================
//                   DESKTOP NAVIGATION
//               ===================================================== */}
//               <div className="relative z-10 hidden items-center xl:flex">
//                 {menuItems.map((item, index) => (
//                   <React.Fragment key={item.path}>
//                     <NavLink
//                       to={item.path}
//                       className={desktopNavClass}
//                     >
//                       {item.label}
//                     </NavLink>

//                     {index < menuItems.length - 1 && (
//                       <span className="h-1 w-1 rounded-full bg-white/20" />
//                     )}
//                   </React.Fragment>
//                 ))}
//               </div>

//               {/* =====================================================
//                   RIGHT SIDE ACTION
//               ===================================================== */}
//               <div className="relative z-10 hidden items-center gap-4 md:flex">
//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="hidden items-center gap-2 text-[11px] font-extrabold text-white/85 transition-colors hover:text-white 2xl:flex"
//                 >
//                   <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20">
//                     <Phone size={13} />
//                   </span>

//                   <span>{LOCAL.phoneDisplay}</span>
//                 </a>

//                 <Link
//                   to="/contact-us"
//                   className="group flex items-center gap-3 bg-white px-5 py-3 text-[10px] font-black uppercase tracking-[0.13em] text-[#6055A6] transition-all duration-300 hover:bg-[#17141b] hover:text-white"
//                 >
//                   <span>Get a Quote</span>

//                   <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#6055A6]/10 transition-transform duration-300 group-hover:translate-x-1">
//                     <ArrowUpRight size={12} strokeWidth={3} />
//                   </span>
//                 </Link>
//               </div>

//               {/* =====================================================
//                   MOBILE MENU BUTTON
//               ===================================================== */}
//               <button
//                 type="button"
//                 onClick={() => setMenuOpen(true)}
//                 aria-label="Open navigation menu"
//                 aria-expanded={menuOpen}
//                 className="relative z-10 flex h-11 w-11 items-center justify-center border border-white/20 bg-white/10 text-white transition-all duration-300 hover:bg-white hover:text-[#6055A6] active:scale-95 xl:hidden"
//               >
//                 <Menu size={20} strokeWidth={2.5} />
//               </button>
//             </nav>
//           </div>
//         </div>
//       </header>

//       {/* =========================================================
//           MOBILE MENU
//       ========================================================= */}

//       <div
//         onClick={() => setMenuOpen(false)}
//         className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-all duration-500 xl:hidden ${
//           menuOpen
//             ? "visible opacity-100"
//             : "invisible opacity-0"
//         }`}
//       />

//       <aside
//         className={`fixed inset-0 z-[70] flex h-full w-full flex-col bg-[#6055A6] text-white transition-transform duration-500 xl:hidden ${
//           menuOpen
//             ? "translate-y-0"
//             : "translate-y-full"
//         }`}
//       >
//         {/* Decorative circles */}
//         <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border-[50px] border-white/[0.035]" />

//         <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full border-[55px] border-white/[0.025]" />

//         <div className="relative z-10 flex h-full flex-col px-6 py-6">
//           {/* =====================================================
//               MOBILE HEADER
//           ===================================================== */}
//           <div className="flex items-center justify-between border-b border-white/15 pb-5">
//             <Link
//               to="/"
//               onClick={() => setMenuOpen(false)}
//               className="flex items-center gap-3"
//             >
//               <div className="flex h-11 w-12 items-center justify-center rounded-lg bg-white p-1">
//                 <img
//                   src="/images/superguard-logo.webp"
//                   alt={`${LOCAL.company} logo`}
//                   className="h-full w-full object-contain"
//                 />
//               </div>

//               <div>
//                 <span className="block text-[8px] font-bold uppercase tracking-[0.2em] text-white/60">
//                   West Wickham
//                 </span>

//                 <span className="block text-xs font-black uppercase">
//                   Superguard Services
//                 </span>
//               </div>
//             </Link>

//             <button
//               type="button"
//               onClick={() => setMenuOpen(false)}
//               aria-label="Close menu"
//               className="flex h-10 w-10 items-center justify-center border border-white/20 bg-white/10 transition hover:bg-white hover:text-[#6055A6]"
//             >
//               <X size={18} strokeWidth={2.5} />
//             </button>
//           </div>

//           {/* =====================================================
//               MOBILE INTRO
//           ===================================================== */}
//           <div className="mt-8">
//             <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/55">
//               Local Pest Control Specialists
//             </span>

//             <h2 className="mt-2 max-w-sm text-3xl font-black leading-[1.05] tracking-tight">
//               Pest control for homes and businesses in{" "}
//               <span className="text-white/60">West Wickham.</span>
//             </h2>
//           </div>

//           {/* =====================================================
//               MOBILE LINKS
//           ===================================================== */}
//           <div className="mt-8">
//             {menuItems.map((item) => (
//               <NavLink
//                 key={item.path}
//                 to={item.path}
//                 onClick={() => setMenuOpen(false)}
//                 className={mobileNavClass}
//               >
//                 <span className="text-lg font-extrabold">
//                   {item.label}
//                 </span>

//                 <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:bg-white group-hover:text-[#6055A6]">
//                   <ChevronRight size={15} />
//                 </span>
//               </NavLink>
//             ))}
//           </div>

//           {/* =====================================================
//               MOBILE CONTACT AREA
//           ===================================================== */}
//           <div className="mt-auto pt-8">
//             <div className="border border-white/15 bg-white/[0.06] p-4">
//               <div className="flex items-start gap-3">
//                 <MapPin
//                   size={17}
//                   className="mt-0.5 shrink-0 text-white"
//                 />

//                 <address className="not-italic text-[11px] font-semibold leading-relaxed text-white/70">
//                   {LOCAL.fullAddress}
//                 </address>
//               </div>

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="mt-3 flex items-center justify-between bg-white p-3 text-[#6055A6] transition hover:bg-[#17141b] hover:text-white"
//               >
//                 <span className="flex items-center gap-3">
//                   <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#6055A6] text-white">
//                     <Phone size={13} />
//                   </span>

//                   <span className="text-xs font-black">
//                     {LOCAL.phoneDisplay}
//                   </span>
//                 </span>

//                 <ArrowUpRight size={15} />
//               </a>

//               <Link
//                 to="/contact-us"
//                 onClick={() => setMenuOpen(false)}
//                 className="mt-3 flex items-center justify-center gap-2 bg-white py-3.5 text-[10px] font-black uppercase tracking-[0.13em] text-[#6055A6] transition hover:bg-[#17141b] hover:text-white"
//               >
//                 Request Pest Control
//                 <ArrowUpRight size={14} />
//               </Link>
//             </div>

//             <div className="mt-4 flex items-center justify-between text-[8px] font-bold uppercase tracking-[0.15em] text-white/35">
//               <span>Superguard Services</span>
//               <span>West Wickham • London</span>
//             </div>
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// }















// import React, { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   ChevronRight,
//   MapPin,
//   Menu,
//   Phone,
//   ShieldCheck,
//   X,
// } from "lucide-react";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const LOCAL = {
//     company: "SuperGuard Services Chelsea",
//     area: "Chelsea",
//     city: "London",
//     postcode: "SW3 6NU",
//     streetAddress: "13 Guthrie St",
//     fullAddress: "13 Guthrie St, London SW3 6NU, United Kingdom",
//     phoneDisplay: "07405 745692",
//     phoneTel: "+447405745692",
//     email: "info@superguardchelsea.uk",
//   };

//   const menuItems = [
//     {
//       number: "01",
//       label: "Home",
//       path: "/",
//     },
//     {
//       number: "02",
//       label: "Services",
//       path: "/services",
//     },
//     {
//       number: "03",
//       label: "About Us",
//       path: "/about-us",
//     },
//     {
//       number: "04",
//       label: "Contact",
//       path: "/contact-us",
//     },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 45);
//     };

//     handleScroll();

//     window.addEventListener("scroll", handleScroll, {
//       passive: true,
//     });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "";

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [menuOpen]);

//   const desktopNavClass = ({ isActive }) =>
//     `group relative flex h-full items-center gap-3 px-5 text-[9px] font-black uppercase tracking-[0.18em] transition-all duration-300 ${
//       isActive
//         ? "bg-white text-[#6055A6]"
//         : "text-white/70 hover:bg-white/10 hover:text-white"
//     }`;

//   return (
//     <>
//       {/* =========================================================
//           MAIN HEADER
//       ========================================================= */}

//       <header
//         itemScope
//         itemType="https://schema.org/PestControl"
//         className="fixed left-0 top-0 z-50 w-full"
//       >
//         <meta itemProp="name" content={LOCAL.company} />

//         <meta
//           itemProp="telephone"
//           content={LOCAL.phoneDisplay}
//         />

//         <meta
//           itemProp="email"
//           content={LOCAL.email}
//         />

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

//           <meta
//             itemProp="addressCountry"
//             content="GB"
//           />
//         </div>

//         {/* =======================================================
//             HEADER WRAPPER
//         ======================================================= */}

//         <div
//           className={`mx-auto transition-all duration-500 ${
//             isScrolled
//               ? "max-w-[1550px] px-0 lg:px-5"
//               : "max-w-[1550px] px-3 pt-3 sm:px-5 lg:px-8 lg:pt-5"
//           }`}
//         >
//           <nav
//             aria-label="Main navigation"
//             className={`relative flex items-stretch overflow-hidden bg-[#6055A6] text-white transition-all duration-500 ${
//               isScrolled
//                 ? "h-[68px] shadow-[0_15px_45px_rgba(96,85,166,0.25)]"
//                 : "h-[88px] shadow-[0_18px_50px_rgba(23,20,27,0.18)]"
//             }`}
//           >
//             {/* =================================================
//                 DECORATIVE GEOMETRY
//             ================================================= */}

//             <div className="pointer-events-none absolute right-[22%] top-0 h-full w-[260px] overflow-hidden opacity-100">
//               <div className="absolute -right-24 -top-28 h-[300px] w-[300px] rotate-45 border border-white/[0.09]" />

//               <div className="absolute right-20 top-[-80px] h-[210px] w-[210px] rounded-full border-[24px] border-white/[0.035]" />
//             </div>

//             <div className="pointer-events-none absolute bottom-[-120px] left-[40%] h-[190px] w-[190px] rounded-full border-[28px] border-white/[0.035]" />

//             {/* =================================================
//                 LEFT BRAND AREA
//             ================================================= */}

//             <Link
//               to="/"
//               onClick={() => setMenuOpen(false)}
//               aria-label={`${LOCAL.company} homepage`}
//               className="group relative z-20 flex shrink-0 items-center bg-white px-4 sm:px-5 lg:px-7"
//             >
//               {/* Purple cut-out decoration */}

//               <div className="absolute right-[-20px] top-0 h-full w-10 skew-x-[-12deg] bg-white" />

//               <div
//                 className={`relative flex items-center transition-all duration-500 ${
//                   isScrolled
//                     ? "gap-3"
//                     : "gap-4"
//                 }`}
//               >
//                 {/* LOGO */}

//                 <div
//                   className={`relative flex shrink-0 items-center justify-center overflow-hidden border border-[#6055A6]/10 bg-white transition-all duration-500 ${
//                     isScrolled
//                       ? "h-[45px] w-[52px]"
//                       : "h-[60px] w-[68px]"
//                   }`}
//                 >
//                   <div className="absolute -bottom-5 -right-5 h-12 w-12 rounded-full bg-[#6055A6]/[0.08]" />

//                   <img
//                     src="/images/superguard-logo.webp"
//                     alt={`${LOCAL.company} logo`}
//                     className="relative z-10 h-[88%] w-[88%] object-contain"
//                     loading="eager"
//                   />
//                 </div>

//                 {/* BRAND TEXT */}

//                 <div className="hidden sm:block">
//                   <span className="block text-[7px] font-black uppercase tracking-[0.25em] text-[#6055A6]">
//                     Local Pest Control
//                   </span>

//                   <span
//                     itemProp="name"
//                     className="mt-1 block whitespace-nowrap text-[13px] font-black uppercase leading-none tracking-[-0.02em] text-[#17141b] lg:text-[15px]"
//                   >
//                     SuperGuard
//                   </span>

//                   <span className="mt-1 block text-[7px] font-bold uppercase tracking-[0.2em] text-[#17141b]/35">
//                     Chelsea · London
//                   </span>
//                 </div>
//               </div>
//             </Link>

//             {/* =================================================
//                 DESKTOP LOCATION
//             ================================================= */}

//             <div
//               className={`relative z-10 hidden items-center border-l border-white/10 px-7 2xl:flex ${
//                 isScrolled ? "w-[205px]" : "w-[230px]"
//               }`}
//             >
//               <div className="flex items-center gap-3">
//                 <span className="flex h-8 w-8 items-center justify-center border border-white/15">
//                   <MapPin size={13} />
//                 </span>

//                 <div>
//                   <span className="block text-[6px] font-black uppercase tracking-[0.22em] text-white/35">
//                     Serving
//                   </span>

//                   <span className="mt-1 block text-[10px] font-black uppercase tracking-[0.08em] text-white">
//                     Chelsea
//                   </span>

//                   <span className="mt-0.5 block text-[7px] font-bold text-white/40">
//                     {LOCAL.postcode} · London
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* =================================================
//                 DESKTOP NAVIGATION
//             ================================================= */}

//             <div className="relative z-10 ml-auto hidden h-full xl:flex">
//               {menuItems.map((item) => (
//                 <NavLink
//                   key={item.path}
//                   to={item.path}
//                   className={desktopNavClass}
//                 >
//                   <span className="text-[7px] font-black text-current opacity-35">
//                     {item.number}
//                   </span>

//                   <span>{item.label}</span>

//                   <span className="absolute bottom-0 left-5 right-5 h-[2px] origin-left scale-x-0 bg-[#6055A6] transition-transform duration-300 group-hover:scale-x-100" />
//                 </NavLink>
//               ))}
//             </div>

//             {/* =================================================
//                 DESKTOP PHONE
//             ================================================= */}

//             <a
//               href={`tel:${LOCAL.phoneTel}`}
//               aria-label={`Call ${LOCAL.company}`}
//               className="relative z-10 hidden items-center gap-3 border-l border-white/10 px-5 transition hover:bg-white/10 2xl:flex"
//             >
//               <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15">
//                 <Phone size={13} />
//               </span>

//               <div>
//                 <span className="block text-[6px] font-black uppercase tracking-[0.2em] text-white/35">
//                   Call us
//                 </span>

//                 <span className="mt-1 block text-[10px] font-black">
//                   {LOCAL.phoneDisplay}
//                 </span>
//               </div>
//             </a>

//             {/* =================================================
//                 CTA
//             ================================================= */}

//             <Link
//               to="/contact-us"
//               className="group relative z-10 hidden min-w-[150px] items-center justify-center gap-3 bg-[#17141b] px-5 text-[8px] font-black uppercase tracking-[0.18em] text-white transition hover:bg-[#24212D] lg:flex"
//             >
//               <span>Get a Quote</span>

//               <span className="flex h-6 w-6 items-center justify-center border border-white/15 transition-transform duration-300 group-hover:translate-x-1">
//                 <ArrowUpRight
//                   size={12}
//                   strokeWidth={2.5}
//                 />
//               </span>
//             </Link>

//             {/* =================================================
//                 MOBILE MENU BUTTON
//             ================================================= */}

//             <button
//               type="button"
//               onClick={() => setMenuOpen(true)}
//               aria-label="Open navigation menu"
//               aria-expanded={menuOpen}
//               className="relative z-20 ml-auto flex h-full w-[72px] items-center justify-center bg-[#17141b] text-white transition hover:bg-[#24212D] xl:hidden"
//             >
//               <div className="flex flex-col items-center gap-1.5">
//                 <Menu
//                   size={21}
//                   strokeWidth={2.2}
//                 />

//                 <span className="text-[6px] font-black uppercase tracking-[0.2em]">
//                   Menu
//                 </span>
//               </div>
//             </button>
//           </nav>
//         </div>
//       </header>

//       {/* =========================================================
//           MOBILE BACKDROP
//       ========================================================= */}

//       <div
//         onClick={() => setMenuOpen(false)}
//         className={`fixed inset-0 z-[60] bg-[#17141b]/65 backdrop-blur-sm transition-all duration-500 xl:hidden ${
//           menuOpen
//             ? "visible opacity-100"
//             : "invisible opacity-0"
//         }`}
//       />

//       {/* =========================================================
//           MOBILE SIDE PANEL
//       ========================================================= */}

//       <aside
//         className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-[430px] flex-col bg-[#F7F6FA] text-[#17141b] shadow-[-20px_0_70px_rgba(23,20,27,0.22)] transition-transform duration-500 xl:hidden ${
//           menuOpen
//             ? "translate-x-0"
//             : "translate-x-full"
//         }`}
//       >
//         {/* =======================================================
//             DECORATIVE PURPLE TOP
//         ======================================================= */}

//         <div className="relative h-[190px] shrink-0 overflow-hidden bg-[#6055A6] text-white">
//           <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border-[38px] border-white/[0.06]" />

//           <div className="pointer-events-none absolute bottom-[-100px] left-[-70px] h-56 w-56 rotate-45 border border-white/[0.08]" />

//           {/* MOBILE HEADER */}

//           <div className="relative z-10 flex items-center justify-between px-6 pt-6">
//             <Link
//               to="/"
//               onClick={() => setMenuOpen(false)}
//               className="flex items-center gap-3"
//             >
//               <div className="flex h-12 w-14 items-center justify-center bg-white p-1.5">
//                 <img
//                   src="/images/superguard-logo.webp"
//                   alt={`${LOCAL.company} logo`}
//                   className="h-full w-full object-contain"
//                 />
//               </div>

//               <div>
//                 <span className="block text-[7px] font-black uppercase tracking-[0.24em] text-white/55">
//                   Chelsea · London
//                 </span>

//                 <span className="mt-1 block text-[12px] font-black uppercase">
//                   SuperGuard
//                 </span>
//               </div>
//             </Link>

//             <button
//               type="button"
//               onClick={() => setMenuOpen(false)}
//               aria-label="Close navigation menu"
//               className="flex h-10 w-10 items-center justify-center border border-white/20 bg-white/10 transition hover:bg-white hover:text-[#6055A6]"
//             >
//               <X
//                 size={18}
//                 strokeWidth={2.5}
//               />
//             </button>
//           </div>

//           {/* MOBILE HEADING */}

//           <div className="relative z-10 px-6 pt-8">
//             <div className="flex items-center gap-2">
//               <ShieldCheck size={13} />

//               <span className="text-[7px] font-black uppercase tracking-[0.25em] text-white/55">
//                 Local pest control
//               </span>
//             </div>

//             <h2 className="mt-3 max-w-[320px] text-[28px] font-black leading-[0.95] tracking-[-0.05em]">
//               Protecting properties across{" "}
//               <span className="text-white/55">
//                 Chelsea.
//               </span>
//             </h2>
//           </div>
//         </div>

//         {/* =======================================================
//             MOBILE CONTENT
//         ======================================================= */}

//         <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-6 py-7">
//           {/* NAVIGATION LABEL */}

//           <div className="flex items-center justify-between">
//             <span className="text-[7px] font-black uppercase tracking-[0.25em] text-[#6055A6]">
//               Navigation
//             </span>

//             <span className="text-[7px] font-black uppercase tracking-[0.18em] text-[#17141b]/25">
//               04 pages
//             </span>
//           </div>

//           {/* LINKS */}

//           <nav className="mt-4">
//             {menuItems.map((item) => (
//               <NavLink
//                 key={item.path}
//                 to={item.path}
//                 onClick={() => setMenuOpen(false)}
//                 className={({ isActive }) =>
//                   `group flex items-center justify-between border-b border-[#17141b]/10 py-5 transition ${
//                     isActive
//                       ? "text-[#6055A6]"
//                       : "text-[#17141b] hover:text-[#6055A6]"
//                   }`
//                 }
//               >
//                 {({ isActive }) => (
//                   <>
//                     <div className="flex items-center gap-4">
//                       <span
//                         className={`text-[7px] font-black ${
//                           isActive
//                             ? "text-[#6055A6]"
//                             : "text-[#17141b]/25"
//                         }`}
//                       >
//                         {item.number}
//                       </span>

//                       <span className="text-[17px] font-black tracking-[-0.02em]">
//                         {item.label}
//                       </span>
//                     </div>

//                     <span
//                       className={`flex h-8 w-8 items-center justify-center border transition ${
//                         isActive
//                           ? "border-[#6055A6] bg-[#6055A6] text-white"
//                           : "border-[#17141b]/10 group-hover:border-[#6055A6] group-hover:bg-[#6055A6] group-hover:text-white"
//                       }`}
//                     >
//                       <ChevronRight size={14} />
//                     </span>
//                   </>
//                 )}
//               </NavLink>
//             ))}
//           </nav>

//           {/* =====================================================
//               CONTACT CARD
//           ===================================================== */}

//           <div className="mt-auto pt-8">
//             <div className="relative overflow-hidden bg-[#17141b] p-5 text-white">
//               <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full border-[18px] border-white/[0.035]" />

//               <div className="relative z-10">
//                 <div className="flex items-center gap-2">
//                   <MapPin
//                     size={13}
//                     className="text-[#A59ED8]"
//                   />

//                   <span className="text-[7px] font-black uppercase tracking-[0.2em] text-white/35">
//                     Chelsea office
//                   </span>
//                 </div>

//                 <address className="mt-3 not-italic text-[10px] font-bold leading-5 text-white/70">
//                   {LOCAL.fullAddress}
//                 </address>

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="group mt-5 flex items-center justify-between bg-white p-3.5 text-[#17141b] transition hover:bg-[#6055A6] hover:text-white"
//                 >
//                   <div className="flex items-center gap-3">
//                     <span className="flex h-8 w-8 items-center justify-center bg-[#6055A6] text-white transition group-hover:bg-white group-hover:text-[#6055A6]">
//                       <Phone size={13} />
//                     </span>

//                     <div>
//                       <span className="block text-[6px] font-black uppercase tracking-[0.18em] opacity-40">
//                         Call directly
//                       </span>

//                       <span className="mt-1 block text-[11px] font-black">
//                         {LOCAL.phoneDisplay}
//                       </span>
//                     </div>
//                   </div>

//                   <ArrowUpRight size={15} />
//                 </a>

//                 <Link
//                   to="/contact-us"
//                   onClick={() => setMenuOpen(false)}
//                   className="group mt-2 flex items-center justify-between border border-white/10 bg-[#6055A6] p-3.5 text-white transition hover:bg-[#51478F]"
//                 >
//                   <span className="text-[8px] font-black uppercase tracking-[0.16em]">
//                     Request pest control
//                   </span>

//                   <ArrowRight
//                     size={14}
//                     className="transition group-hover:translate-x-1"
//                   />
//                 </Link>
//               </div>
//             </div>

//             {/* MOBILE FOOTNOTE */}

//             <div className="mt-5 flex items-center justify-between">
//               <span className="text-[7px] font-black uppercase tracking-[0.17em] text-[#17141b]/25">
//                 SuperGuard Chelsea
//               </span>

//               <span className="text-[7px] font-black uppercase tracking-[0.17em] text-[#6055A6]/60">
//                 {LOCAL.postcode}
//               </span>
//             </div>
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// }





















// import React, { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   ChevronDown,
//   MapPin,
//   Menu,
//   Phone,
//   ShieldCheck,
//   X,
// } from "lucide-react";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

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

//   const menuItems = [
//     {
//       number: "01",
//       label: "Home",
//       path: "/",
//     },
//     {
//       number: "02",
//       label: "Services",
//       path: "/services",
//     },
//     {
//       number: "03",
//       label: "About Us",
//       path: "/about-us",
//     },
//     {
//       number: "04",
//       label: "Contact",
//       path: "/contact-us",
//     },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 30);
//     };

//     handleScroll();

//     window.addEventListener("scroll", handleScroll, {
//       passive: true,
//     });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "";

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [menuOpen]);

//   return (
//     <>
//       {/* =========================================================
//           MAIN NAVBAR
//       ========================================================= */}

//       <header
//         itemScope
//         itemType="https://schema.org/PestControl"
//         className="fixed inset-x-0 top-0 z-50"
//       >
//         <meta itemProp="name" content={LOCAL.company} />

//         <meta
//           itemProp="telephone"
//           content={LOCAL.phoneDisplay}
//         />

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

//           <meta
//             itemProp="addressCountry"
//             content="GB"
//           />
//         </div>

//         {/* =======================================================
//             OUTER WRAPPER
//         ======================================================= */}

//         <div
//           className={`mx-auto px-3 transition-all duration-500 sm:px-5 lg:px-8 ${
//             isScrolled
//               ? "max-w-[1500px] pt-2"
//               : "max-w-[1500px] pt-4 lg:pt-6"
//           }`}
//         >
//           {/* =====================================================
//               NAVIGATION SHELL
//           ===================================================== */}

//           <nav
//             aria-label="Main navigation"
//             className={`relative flex items-center overflow-hidden border border-white/10 bg-[#6055A6] text-white transition-all duration-500 ${
//               isScrolled
//                 ? "h-[70px] rounded-[22px] shadow-[0_18px_55px_rgba(96,85,166,0.28)]"
//                 : "h-[82px] rounded-[28px] shadow-[0_22px_65px_rgba(21,19,26,0.16)]"
//             }`}
//           >
//             {/* ===================================================
//                 BACKGROUND VISUALS
//             =================================================== */}

//             <div className="pointer-events-none absolute inset-0 overflow-hidden">
//               <div className="absolute -right-20 -top-28 h-[260px] w-[260px] rounded-full border-[45px] border-white/[0.045]" />

//               <div className="absolute right-[28%] top-[-90px] h-[240px] w-[240px] rotate-45 border border-white/[0.07]" />

//               <div className="absolute bottom-[-100px] left-[48%] h-[190px] w-[190px] rounded-full border-[30px] border-white/[0.035]" />

//               <div className="absolute left-[27%] top-0 h-full w-px bg-white/[0.05]" />
//             </div>

//             {/* ===================================================
//                 BRAND
//             =================================================== */}

//             <Link
//               to="/"
//               onClick={() => setMenuOpen(false)}
//               aria-label={`${LOCAL.company} homepage`}
//               className="group relative z-20 flex h-full shrink-0 items-center bg-[#F7F6FA] px-4 sm:px-5 lg:px-7"
//             >
//               {/* angled transition */}
//               <div className="absolute -right-5 top-0 h-full w-10 skew-x-[-13deg] bg-[#F7F6FA]" />

//               <div className="relative z-10 flex items-center gap-3">
//                 {/* Logo */}

//                 <div
//                   className={`flex items-center justify-center rounded-[14px] border border-[#6055A6]/10 bg-white p-1.5 transition-all duration-500 ${
//                     isScrolled
//                       ? "h-[48px] w-[55px]"
//                       : "h-[58px] w-[66px]"
//                   }`}
//                 >
//                   <img
//                     src="/images/superguard-logo.webp"
//                     alt={`${LOCAL.company} logo`}
//                     className="h-full w-full object-contain"
//                     loading="eager"
//                   />
//                 </div>

//                 {/* Brand text */}

//                 <div className="hidden sm:block">
//                   <span className="block text-[7px] font-black uppercase tracking-[0.25em] text-[#6055A6]">
//                     Local Pest Control
//                   </span>

//                   <span
//                     itemProp="name"
//                     className="mt-1 block whitespace-nowrap text-[13px] font-black uppercase leading-none tracking-[-0.03em] text-[#15131A] lg:text-[15px]"
//                   >
//                     SuperGuard
//                   </span>

//                   <span className="mt-1 block text-[7px] font-bold uppercase tracking-[0.18em] text-[#15131A]/35">
//                     Woolwich · London
//                   </span>
//                 </div>
//               </div>
//             </Link>

//             {/* ===================================================
//                 WOOLWICH LOCATION PILL
//             =================================================== */}

//             <div className="relative z-10 hidden h-full items-center px-6 xl:flex 2xl:px-8">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06]">
//                   <MapPin
//                     size={15}
//                     strokeWidth={1.8}
//                   />
//                 </div>

//                 <div>
//                   <span className="block text-[6px] font-black uppercase tracking-[0.24em] text-white/40">
//                     Serving locally
//                   </span>

//                   <span className="mt-1 block text-[10px] font-black uppercase tracking-[0.08em]">
//                     {LOCAL.area}
//                   </span>

//                   <span className="mt-0.5 block text-[7px] font-bold text-white/40">
//                     {LOCAL.postcode} · {LOCAL.city}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* ===================================================
//                 DESKTOP NAVIGATION
//             =================================================== */}

//             <div className="relative z-10 ml-auto hidden h-full items-center gap-1 px-2 xl:flex">
//               {menuItems.map((item) => (
//                 <NavLink
//                   key={item.path}
//                   to={item.path}
//                   className={({ isActive }) =>
//                     `group relative flex h-[calc(100%-16px)] items-center gap-2.5 rounded-[14px] px-4 text-[8px] font-black uppercase tracking-[0.15em] transition-all duration-300 ${
//                       isActive
//                         ? "bg-white text-[#6055A6] shadow-[0_8px_20px_rgba(21,19,26,0.10)]"
//                         : "text-white/65 hover:bg-white/10 hover:text-white"
//                     }`
//                   }
//                 >
//                   {({ isActive }) => (
//                     <>
//                       <span
//                         className={`text-[7px] transition ${
//                           isActive
//                             ? "text-[#6055A6]/45"
//                             : "text-white/25"
//                         }`}
//                       >
//                         {item.number}
//                       </span>

//                       <span>{item.label}</span>

//                       {isActive && (
//                         <span className="absolute bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#6055A6]" />
//                       )}
//                     </>
//                   )}
//                 </NavLink>
//               ))}
//             </div>

//             {/* ===================================================
//                 PHONE AREA
//             =================================================== */}

//             <a
//               href={`tel:${LOCAL.phoneTel}`}
//               aria-label={`Call ${LOCAL.company}`}
//               className="relative z-10 hidden h-full items-center gap-3 border-l border-white/10 px-5 transition hover:bg-white/10 2xl:flex"
//             >
//               <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#6055A6]">
//                 <Phone
//                   size={13}
//                   strokeWidth={2.4}
//                 />
//               </span>

//               <div>
//                 <span className="block text-[6px] font-black uppercase tracking-[0.2em] text-white/35">
//                   Call Woolwich
//                 </span>

//                 <span className="mt-1 block text-[10px] font-black tracking-[0.02em]">
//                   {LOCAL.phoneDisplay}
//                 </span>
//               </div>
//             </a>

//             {/* ===================================================
//                 DESKTOP CTA
//             =================================================== */}

//             <Link
//               to="/contact-us"
//               className="group relative z-10 hidden h-full min-w-[145px] items-center justify-center gap-3 bg-[#15131A] px-5 text-[8px] font-black uppercase tracking-[0.18em] text-white transition hover:bg-[#24212D] lg:flex"
//             >
//               <span>Get a Quote</span>

//               <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:bg-[#6055A6] group-hover:border-[#6055A6] group-hover:translate-x-1">
//                 <ArrowUpRight
//                   size={12}
//                   strokeWidth={2.5}
//                 />
//               </span>
//             </Link>

//             {/* ===================================================
//                 MOBILE BUTTON
//             =================================================== */}

//             <button
//               type="button"
//               onClick={() => setMenuOpen(true)}
//               aria-label="Open navigation menu"
//               aria-expanded={menuOpen}
//               className="relative z-20 ml-auto mr-2 flex h-[calc(100%-12px)] w-[62px] items-center justify-center rounded-[16px] bg-[#15131A] text-white transition hover:bg-[#24212D] xl:hidden"
//             >
//               <div className="flex flex-col items-center gap-1.5">
//                 <Menu
//                   size={20}
//                   strokeWidth={2}
//                 />

//                 <span className="text-[6px] font-black uppercase tracking-[0.2em]">
//                   Menu
//                 </span>
//               </div>
//             </button>
//           </nav>
//         </div>
//       </header>

//       {/* =========================================================
//           MOBILE BACKDROP
//       ========================================================= */}

//       <div
//         onClick={() => setMenuOpen(false)}
//         className={`fixed inset-0 z-[60] bg-[#15131A]/70 backdrop-blur-md transition-all duration-500 xl:hidden ${
//           menuOpen
//             ? "visible opacity-100"
//             : "invisible opacity-0"
//         }`}
//       />

//       {/* =========================================================
//           MOBILE NAVIGATION
//       ========================================================= */}

//       <aside
//         className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-[440px] flex-col bg-[#F7F6FA] text-[#15131A] shadow-[-25px_0_80px_rgba(21,19,26,0.28)] transition-transform duration-500 xl:hidden ${
//           menuOpen
//             ? "translate-x-0"
//             : "translate-x-full"
//         }`}
//       >
//         {/* =====================================================
//             MOBILE TOP
//         ===================================================== */}

//         <div className="relative shrink-0 overflow-hidden rounded-b-[34px] bg-[#6055A6] px-6 pb-8 pt-6 text-white">
//           {/* decorative circles */}

//           <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[45px] border-white/[0.055]" />

//           <div className="pointer-events-none absolute -bottom-24 -left-16 h-52 w-52 rotate-45 border border-white/[0.08]" />

//           {/* top bar */}

//           <div className="relative z-10 flex items-center justify-between">
//             <Link
//               to="/"
//               onClick={() => setMenuOpen(false)}
//               className="flex items-center gap-3"
//             >
//               <div className="flex h-12 w-14 items-center justify-center rounded-[12px] bg-[#F7F6FA] p-1.5">
//                 <img
//                   src="/images/superguard-logo.webp"
//                   alt={`${LOCAL.company} logo`}
//                   className="h-full w-full object-contain"
//                 />
//               </div>

//               <div>
//                 <span className="block text-[7px] font-black uppercase tracking-[0.23em] text-white/45">
//                   Woolwich · London
//                 </span>

//                 <span className="mt-1 block text-[12px] font-black uppercase">
//                   SuperGuard
//                 </span>
//               </div>
//             </Link>

//             <button
//               type="button"
//               onClick={() => setMenuOpen(false)}
//               aria-label="Close navigation menu"
//               className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 transition hover:bg-white hover:text-[#6055A6]"
//             >
//               <X
//                 size={18}
//                 strokeWidth={2.5}
//               />
//             </button>
//           </div>

//           {/* heading */}

//           <div className="relative z-10 mt-10">
//             <div className="flex items-center gap-2">
//               <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
//                 <ShieldCheck size={12} />
//               </span>

//               <span className="text-[7px] font-black uppercase tracking-[0.24em] text-white/50">
//                 Local pest protection
//               </span>
//             </div>

//             <h2 className="mt-4 max-w-[340px] text-[31px] font-black leading-[0.95] tracking-[-0.055em]">
//               Protecting properties across{" "}
//               <span className="text-white/45">
//                 Woolwich.
//               </span>
//             </h2>
//           </div>

//           {/* location strip */}

//           <div className="relative z-10 mt-7 flex items-center justify-between rounded-[16px] border border-white/10 bg-white/[0.07] px-4 py-3">
//             <div className="flex items-center gap-2.5">
//               <MapPin size={13} />

//               <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-white/70">
//                 {LOCAL.postcode}
//               </span>
//             </div>

//             <span className="text-[7px] font-black uppercase tracking-[0.15em] text-white/35">
//               London
//             </span>
//           </div>
//         </div>

//         {/* =====================================================
//             MOBILE CONTENT
//         ===================================================== */}

//         <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-6 py-7">
//           {/* navigation heading */}

//           <div className="flex items-center justify-between">
//             <div>
//               <span className="text-[7px] font-black uppercase tracking-[0.25em] text-[#6055A6]">
//                 Explore
//               </span>

//               <h3 className="mt-1 text-[18px] font-black tracking-[-0.03em]">
//                 Navigation
//               </h3>
//             </div>

//             <div className="flex h-8 items-center rounded-full bg-[#6055A6]/10 px-3">
//               <span className="text-[7px] font-black uppercase tracking-[0.16em] text-[#6055A6]">
//                 04 Pages
//               </span>
//             </div>
//           </div>

//           {/* links */}

//           <nav className="mt-5">
//             {menuItems.map((item) => (
//               <NavLink
//                 key={item.path}
//                 to={item.path}
//                 onClick={() => setMenuOpen(false)}
//                 className={({ isActive }) =>
//                   `group mb-2 flex items-center justify-between rounded-[18px] border p-4 transition-all duration-300 ${
//                     isActive
//                       ? "border-[#6055A6] bg-[#6055A6] text-white shadow-[0_10px_25px_rgba(96,85,166,0.18)]"
//                       : "border-[#15131A]/[0.07] bg-white text-[#15131A] hover:border-[#6055A6]/30 hover:bg-[#6055A6]/5"
//                   }`
//                 }
//               >
//                 {({ isActive }) => (
//                   <>
//                     <div className="flex items-center gap-4">
//                       <span
//                         className={`flex h-8 w-8 items-center justify-center rounded-full text-[7px] font-black ${
//                           isActive
//                             ? "bg-white/15 text-white"
//                             : "bg-[#6055A6]/10 text-[#6055A6]"
//                         }`}
//                       >
//                         {item.number}
//                       </span>

//                       <span className="text-[15px] font-black tracking-[-0.02em]">
//                         {item.label}
//                       </span>
//                     </div>

//                     <span
//                       className={`flex h-8 w-8 items-center justify-center rounded-full transition ${
//                         isActive
//                           ? "bg-white text-[#6055A6]"
//                           : "bg-[#F7F6FA] text-[#15131A]/40 group-hover:bg-[#6055A6] group-hover:text-white"
//                       }`}
//                     >
//                       <ChevronDown
//                         size={14}
//                         className="-rotate-90"
//                       />
//                     </span>
//                   </>
//                 )}
//               </NavLink>
//             ))}
//           </nav>

//           {/* ===================================================
//               CONTACT PANEL
//           =================================================== */}

//           <div className="mt-auto pt-7">
//             <div className="relative overflow-hidden rounded-[24px] bg-[#15131A] p-5 text-white">
//               {/* decoration */}

//               <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border-[22px] border-white/[0.035]" />

//               <div className="relative z-10">
//                 <div className="flex items-center justify-between">
//                   <span className="flex items-center gap-2 text-[7px] font-black uppercase tracking-[0.2em] text-white/35">
//                     <MapPin
//                       size={12}
//                       className="text-[#A59ED8]"
//                     />

//                     Woolwich office
//                   </span>

//                   <span className="rounded-full bg-[#6055A6]/20 px-2.5 py-1 text-[6px] font-black uppercase tracking-[0.15em] text-[#A59ED8]">
//                     SE18
//                   </span>
//                 </div>

//                 <address className="mt-3 max-w-[290px] not-italic text-[10px] font-bold leading-5 text-white/65">
//                   {LOCAL.address}
//                 </address>

//                 {/* phone */}

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="group mt-5 flex items-center justify-between rounded-[15px] bg-white p-3.5 text-[#15131A] transition hover:bg-[#6055A6] hover:text-white"
//                 >
//                   <div className="flex items-center gap-3">
//                     <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6055A6] text-white transition group-hover:bg-white group-hover:text-[#6055A6]">
//                       <Phone size={13} />
//                     </span>

//                     <div>
//                       <span className="block text-[6px] font-black uppercase tracking-[0.18em] opacity-40">
//                         Call directly
//                       </span>

//                       <span className="mt-1 block text-[11px] font-black">
//                         {LOCAL.phoneDisplay}
//                       </span>
//                     </div>
//                   </div>

//                   <ArrowUpRight size={15} />
//                 </a>

//                 {/* CTA */}

//                 <Link
//                   to="/contact-us"
//                   onClick={() => setMenuOpen(false)}
//                   className="group mt-2 flex items-center justify-between rounded-[15px] bg-[#6055A6] p-3.5 text-white transition hover:bg-[#51478F]"
//                 >
//                   <div>
//                     <span className="block text-[8px] font-black uppercase tracking-[0.16em]">
//                       Request pest control
//                     </span>

//                     <span className="mt-1 block text-[6px] font-bold uppercase tracking-[0.13em] text-white/45">
//                       Speak with SuperGuard Woolwich
//                     </span>
//                   </div>

//                   <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition group-hover:translate-x-1">
//                     <ArrowRight size={13} />
//                   </span>
//                 </Link>
//               </div>
//             </div>

//             {/* footer line */}

//             <div className="mt-5 flex items-center justify-between">
//               <span className="text-[7px] font-black uppercase tracking-[0.16em] text-[#15131A]/25">
//                 {LOCAL.shortName}
//               </span>

//               <span className="text-[7px] font-black uppercase tracking-[0.16em] text-[#6055A6]/60">
//                 {LOCAL.postcode}
//               </span>
//             </div>
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// }





















// import React, { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   MapPin,
//   Menu,
//   Phone,
//   ShieldCheck,
//   X,
//   ChevronRight,
// } from "lucide-react";

// const LOCAL = {
//   company: "SuperGuard Pest Control Services Chessington",
//   shortName: "SuperGuard Chessington",
//   area: "Chessington",
//   city: "Surrey",
//   postcode: "KT9 1AY",
//   streetAddress: "95 Rhodrons Ave",
//   address: "95 Rhodrons Ave, Chessington KT9 1AY, United Kingdom",
//   phoneDisplay: "+44 7356 234726",
//   phoneTel: "+447356234726",
// };

// const MENU_ITEMS = [
//   { number: "01", label: "Home", path: "/" },
//   { number: "02", label: "Services", path: "/services" },
//   { number: "03", label: "About Us", path: "/about-us" },
//   { number: "04", label: "Contact", path: "/contact-us" },
// ];

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 25);
//     };

//     handleScroll();

//     window.addEventListener("scroll", handleScroll, {
//       passive: true,
//     });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "";

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [menuOpen]);

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === "Escape") {
//         setMenuOpen(false);
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);

//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <>
//       {/* LOCAL BUSINESS STRUCTURED DATA */}
//       <div
//         className="hidden"
//         itemScope
//         itemType="https://schema.org/PestControl"
//       >
//         <meta itemProp="name" content={LOCAL.company} />
//         <meta itemProp="telephone" content={LOCAL.phoneDisplay} />
//         <meta
//           itemProp="areaServed"
//           content={`${LOCAL.area} and nearby areas`}
//         />

//         <div
//           itemProp="address"
//           itemScope
//           itemType="https://schema.org/PostalAddress"
//         >
//           <meta
//             itemProp="streetAddress"
//             content={LOCAL.streetAddress}
//           />
//           <meta
//             itemProp="addressLocality"
//             content={LOCAL.area}
//           />
//           <meta
//             itemProp="addressRegion"
//             content={LOCAL.city}
//           />
//           <meta
//             itemProp="postalCode"
//             content={LOCAL.postcode}
//           />
//           <meta itemProp="addressCountry" content="GB" />
//         </div>
//       </div>

//       {/* ======================================================
//           DESKTOP + MOBILE HEADER
//       ====================================================== */}

//       <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4 lg:px-8">
//         <div
//           className={`mx-auto max-w-[1440px] transition-all duration-500 ${
//             isScrolled ? "max-w-[1320px]" : ""
//           }`}
//         >
//           {/* TOP LOCAL INFORMATION STRIP */}

//           <div
//             className={`hidden items-center justify-between px-3 text-[9px] font-bold uppercase tracking-[0.12em] text-[#F7F6FA]/70 transition-all duration-300 lg:flex ${
//               isScrolled
//                 ? "h-0 overflow-hidden opacity-0"
//                 : "h-9 opacity-100"
//             }`}
//           >
//             <div className="flex items-center gap-2">
//               <span className="h-1.5 w-1.5 rounded-full bg-[#A59ED8]" />
//               <span>
//                 Local pest control in {LOCAL.area} and nearby areas
//               </span>
//             </div>

//             <a
//               href={`tel:${LOCAL.phoneTel}`}
//               className="flex items-center gap-2 transition hover:text-white"
//             >
//               <Phone size={11} />
//               {LOCAL.phoneDisplay}
//             </a>
//           </div>

//           {/* MAIN NAVIGATION SHELL */}

//           <nav
//             aria-label="Main navigation"
//             className={`relative flex items-center overflow-hidden border border-white/15 bg-[#6055A6] text-white transition-all duration-500 ${
//               isScrolled
//                 ? "h-[68px] rounded-[20px] shadow-[0_15px_45px_rgba(36,33,45,0.22)]"
//                 : "h-[78px] rounded-[24px] shadow-[0_18px_55px_rgba(36,33,45,0.16)]"
//             }`}
//           >
//             {/* DECORATIVE BACKGROUND */}

//             <div className="pointer-events-none absolute inset-0 overflow-hidden">
//               <div className="absolute -right-12 -top-24 h-64 w-64 rotate-12 rounded-[38%] border-[32px] border-white/[0.045]" />

//               <div className="absolute right-[34%] top-[-75px] h-52 w-52 rotate-45 border border-white/[0.07]" />

//               <div className="absolute bottom-[-110px] left-[45%] h-48 w-48 rounded-full border-[25px] border-white/[0.035]" />

//               <div className="absolute inset-y-0 left-[30%] w-px bg-white/[0.05]" />
//             </div>

//             {/* BRAND / ORIGINAL LOGO */}

//             <Link
//               to="/"
//               onClick={closeMenu}
//               aria-label={`${LOCAL.company} homepage`}
//               className="group relative z-10 flex h-full shrink-0 items-center bg-[#F7F6FA] pl-3 pr-5 sm:pl-5 sm:pr-7 lg:pl-6 lg:pr-9"
//             >
//               {/* ANGLED BRAND EDGE */}

//               <span className="absolute -right-4 top-0 h-full w-8 skew-x-[-12deg] bg-[#F7F6FA]" />

//               <div className="relative z-10 flex items-center gap-3">
//                 {/* Logo asset intentionally unchanged */}

//                 <div
//                   className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-[13px] border border-[#6055A6]/10 bg-white p-1.5 transition-all duration-300 group-hover:rounded-[18px] ${
//                     isScrolled ? "h-[46px] w-[51px]" : "h-[52px] w-[58px]"
//                   }`}
//                 >
//                   <img
//                     src="/images/superguard-logo.webp"
//                     alt={`${LOCAL.company} logo`}
//                     className="h-full w-full object-contain"
//                     loading="eager"
//                   />
//                 </div>

//                 <div className="hidden sm:block">
//                   <span className="block text-[7px] font-black uppercase tracking-[0.2em] text-[#6055A6]">
//                     Local Pest Control
//                   </span>

//                   <span className="mt-1 block whitespace-nowrap text-[13px] font-black uppercase leading-none tracking-[-0.04em] text-[#15131A] lg:text-[15px]">
//                     SuperGuard
//                   </span>

//                   <span className="mt-1.5 block text-[7px] font-bold uppercase tracking-[0.15em] text-[#15131A]/45">
//                     Chessington · Surrey
//                   </span>
//                 </div>
//               </div>
//             </Link>

//             {/* LOCATION BLOCK */}

//             <div className="relative z-10 hidden h-full items-center px-5 xl:flex 2xl:px-7">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-white/15 bg-white/[0.07]">
//                   <MapPin size={16} strokeWidth={1.8} />
//                 </div>

//                 <div>
//                   <span className="block text-[6px] font-black uppercase tracking-[0.2em] text-white/45">
//                     Serving locally
//                   </span>

//                   <span className="mt-1 block text-[10px] font-black uppercase tracking-[0.07em]">
//                     {LOCAL.area}
//                   </span>

//                   <span className="mt-0.5 block text-[7px] font-bold text-white/45">
//                     {LOCAL.postcode} · {LOCAL.city}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* DESKTOP NAV LINKS */}

//             <div className="relative z-10 ml-auto hidden h-full items-center gap-1 px-2 xl:flex">
//               {MENU_ITEMS.map((item) => (
//                 <NavLink
//                   key={item.path}
//                   to={item.path}
//                   end={item.path === "/"}
//                   className={({ isActive }) =>
//                     `group relative flex h-[42px] items-center gap-2 rounded-[12px] px-3 text-[8px] font-black uppercase tracking-[0.12em] transition-all duration-300 2xl:px-4 ${
//                       isActive
//                         ? "bg-[#F7F6FA] text-[#6055A6] shadow-sm"
//                         : "text-white/75 hover:bg-white/10 hover:text-white"
//                     }`
//                   }
//                 >
//                   {({ isActive }) => (
//                     <>
//                       <span
//                         className={`text-[7px] ${
//                           isActive
//                             ? "text-[#6055A6]/45"
//                             : "text-white/35"
//                         }`}
//                       >
//                         {item.number}
//                       </span>

//                       <span>{item.label}</span>

//                       {isActive && (
//                         <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#6055A6]" />
//                       )}
//                     </>
//                   )}
//                 </NavLink>
//               ))}
//             </div>

//             {/* DESKTOP PHONE */}

//             <a
//               href={`tel:${LOCAL.phoneTel}`}
//               aria-label={`Call ${LOCAL.company}`}
//               className="relative z-10 hidden h-full items-center gap-2.5 border-l border-white/10 px-4 transition hover:bg-white/10 2xl:flex"
//             >
//               <span className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-white text-[#6055A6]">
//                 <Phone size={14} strokeWidth={2.3} />
//               </span>

//               <div>
//                 <span className="block text-[6px] font-black uppercase tracking-[0.18em] text-white/45">
//                   Call our team
//                 </span>

//                 <span className="mt-1 block whitespace-nowrap text-[10px] font-black">
//                   {LOCAL.phoneDisplay}
//                 </span>
//               </div>
//             </a>

//             {/* DESKTOP CTA */}

//             <Link
//               to="/contact-us"
//               className="group relative z-10 hidden h-full min-w-[135px] items-center justify-center gap-3 bg-[#15131A] px-4 text-[8px] font-black uppercase tracking-[0.15em] transition hover:bg-[#24212D] lg:flex"
//             >
//               <span>Get a Quote</span>

//               <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 transition duration-300 group-hover:translate-x-1 group-hover:border-[#A59ED8] group-hover:bg-[#6055A6]">
//                 <ArrowUpRight size={13} />
//               </span>
//             </Link>

//             {/* MOBILE MENU TRIGGER */}

//             <button
//               type="button"
//               onClick={() => setMenuOpen(true)}
//               aria-label="Open navigation menu"
//               aria-expanded={menuOpen}
//               aria-controls="mobile-navigation"
//               className="relative z-20 ml-auto mr-2 flex h-[calc(100%-12px)] w-[58px] shrink-0 flex-col items-center justify-center gap-1.5 rounded-[15px] bg-[#15131A] transition hover:bg-[#24212D] xl:hidden"
//             >
//               <Menu size={20} strokeWidth={2} />

//               <span className="text-[6px] font-black uppercase tracking-[0.18em]">
//                 Menu
//               </span>
//             </button>
//           </nav>
//         </div>
//       </header>

//       {/* ======================================================
//           MOBILE BACKDROP
//       ====================================================== */}

//       <button
//         type="button"
//         aria-label="Close navigation menu"
//         onClick={closeMenu}
//         tabIndex={menuOpen ? 0 : -1}
//         className={`fixed inset-0 z-[60] bg-[#15131A]/65 backdrop-blur-sm transition-all duration-300 xl:hidden ${
//           menuOpen
//             ? "visible opacity-100"
//             : "invisible pointer-events-none opacity-0"
//         }`}
//       />

//       {/* ======================================================
//           MOBILE DRAWER
//       ====================================================== */}

//       <aside
//         id="mobile-navigation"
//         aria-label="Mobile navigation"
//         aria-hidden={!menuOpen}
//         className={`fixed right-0 top-0 z-[70] flex h-[100dvh] w-full max-w-[430px] flex-col overflow-hidden bg-[#F7F6FA] text-[#15131A] shadow-[-20px_0_70px_rgba(21,19,26,0.25)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] xl:hidden ${
//           menuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         {/* MOBILE DRAWER HEADER */}

//         <div className="relative shrink-0 overflow-hidden rounded-b-[30px] bg-[#6055A6] px-5 pb-7 pt-5 text-white sm:px-7">
//           <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rotate-12 rounded-[38%] border-[35px] border-white/[0.05]" />

//           <div className="pointer-events-none absolute -bottom-20 -left-10 h-44 w-44 rounded-full border-[22px] border-white/[0.04]" />

//           <div className="relative z-10 flex items-center justify-between">
//             <Link
//               to="/"
//               onClick={closeMenu}
//               tabIndex={menuOpen ? 0 : -1}
//               className="flex items-center gap-3"
//             >
//               <div className="flex h-12 w-14 items-center justify-center rounded-[12px] bg-[#F7F6FA] p-1.5">
//                 <img
//                   src="/images/superguard-logo.webp"
//                   alt={`${LOCAL.company} logo`}
//                   className="h-full w-full object-contain"
//                 />
//               </div>

//               <div>
//                 <span className="block text-[7px] font-black uppercase tracking-[0.2em] text-white/55">
//                   Local pest control
//                 </span>

//                 <span className="mt-1 block text-[12px] font-black uppercase">
//                   SuperGuard
//                 </span>

//                 <span className="mt-1 block text-[7px] font-bold uppercase tracking-[0.14em] text-white/50">
//                   Chessington · Surrey
//                 </span>
//               </div>
//             </Link>

//             <button
//               type="button"
//               onClick={closeMenu}
//               aria-label="Close navigation menu"
//               className="flex h-10 w-10 items-center justify-center rounded-[13px] border border-white/15 bg-white/10 transition hover:bg-white hover:text-[#6055A6]"
//             >
//               <X size={19} strokeWidth={2.2} />
//             </button>
//           </div>

//           <div className="relative z-10 mt-8">
//             <div className="flex items-center gap-2">
//               <ShieldCheck size={14} className="text-[#D8D2F3]" />

//               <span className="text-[7px] font-black uppercase tracking-[0.2em] text-white/55">
//                 Local pest protection
//               </span>
//             </div>

//             <h2 className="mt-4 max-w-[330px] text-[29px] font-black leading-[0.98] tracking-[-0.055em] sm:text-[32px]">
//               A pest-free property starts{" "}
//               <span className="text-[#D8D2F3]">here.</span>
//             </h2>
//           </div>

//           <div className="relative z-10 mt-6 flex items-center justify-between rounded-[14px] border border-white/10 bg-white/[0.07] px-4 py-3">
//             <div className="flex items-center gap-2.5">
//               <MapPin size={14} />

//               <span className="text-[8px] font-bold uppercase tracking-[0.1em] text-white/80">
//                 {LOCAL.area}, {LOCAL.postcode}
//               </span>
//             </div>

//             <span className="text-[7px] font-black uppercase tracking-[0.14em] text-white/45">
//               {LOCAL.city}
//             </span>
//           </div>
//         </div>

//         {/* MOBILE SCROLLABLE CONTENT */}

//         <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-5 py-6 sm:px-7">
//           <div className="flex items-end justify-between">
//             <div>
//               <span className="text-[7px] font-black uppercase tracking-[0.22em] text-[#6055A6]">
//                 Find your way
//               </span>

//               <h3 className="mt-1 text-[19px] font-black tracking-[-0.04em]">
//                 Explore the site
//               </h3>
//             </div>

//             <span className="rounded-full bg-[#6055A6]/10 px-3 py-1.5 text-[7px] font-black uppercase tracking-[0.12em] text-[#6055A6]">
//               04 Pages
//             </span>
//           </div>

//           {/* MOBILE LINKS */}

//           <nav aria-label="Mobile main navigation" className="mt-5">
//             {MENU_ITEMS.map((item) => (
//               <NavLink
//                 key={item.path}
//                 to={item.path}
//                 end={item.path === "/"}
//                 onClick={closeMenu}
//                 tabIndex={menuOpen ? 0 : -1}
//                 className={({ isActive }) =>
//                   `group mb-2 flex items-center justify-between rounded-[16px] border p-3.5 transition-all duration-300 ${
//                     isActive
//                       ? "border-[#6055A6] bg-[#6055A6] text-white shadow-[0_8px_22px_rgba(96,85,166,0.17)]"
//                       : "border-[#15131A]/[0.07] bg-white text-[#15131A] hover:border-[#6055A6]/30"
//                   }`
//                 }
//               >
//                 {({ isActive }) => (
//                   <>
//                     <div className="flex items-center gap-3.5">
//                       <span
//                         className={`flex h-9 w-9 items-center justify-center rounded-[12px] text-[8px] font-black ${
//                           isActive
//                             ? "bg-white/15 text-white"
//                             : "bg-[#6055A6]/10 text-[#6055A6]"
//                         }`}
//                       >
//                         {item.number}
//                       </span>

//                       <span className="text-[14px] font-black tracking-[-0.02em]">
//                         {item.label}
//                       </span>
//                     </div>

//                     <span
//                       className={`flex h-8 w-8 items-center justify-center rounded-full transition ${
//                         isActive
//                           ? "bg-white text-[#6055A6]"
//                           : "bg-[#F7F6FA] text-[#15131A]/45 group-hover:bg-[#6055A6] group-hover:text-white"
//                       }`}
//                     >
//                       <ChevronRight size={15} />
//                     </span>
//                   </>
//                 )}
//               </NavLink>
//             ))}
//           </nav>

//           {/* MOBILE CONTACT PANEL */}

//           <div className="mt-auto pt-6">
//             <div className="relative overflow-hidden rounded-[22px] bg-[#15131A] p-4.5 p-5 text-white">
//               <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full border-[20px] border-white/[0.035]" />

//               <div className="relative z-10">
//                 <div className="flex items-center justify-between gap-3">
//                   <span className="flex items-center gap-2 text-[7px] font-black uppercase tracking-[0.16em] text-white/50">
//                     <MapPin size={12} className="text-[#A59ED8]" />
//                     Local service area
//                   </span>

//                   <span className="rounded-full bg-[#6055A6]/25 px-2.5 py-1 text-[7px] font-black uppercase tracking-[0.1em] text-[#D8D2F3]">
//                     KT9
//                   </span>
//                 </div>

//                 <address className="mt-3 max-w-[290px] text-[10px] font-bold not-italic leading-5 text-white/65">
//                   {LOCAL.address}
//                 </address>

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   tabIndex={menuOpen ? 0 : -1}
//                   className="group mt-4 flex items-center justify-between rounded-[14px] bg-white p-3 text-[#15131A] transition hover:bg-[#EAE6F5]"
//                 >
//                   <div className="flex items-center gap-3">
//                     <span className="flex h-9 w-9 items-center justify-center rounded-[11px] bg-[#6055A6] text-white">
//                       <Phone size={14} />
//                     </span>

//                     <div>
//                       <span className="block text-[6px] font-black uppercase tracking-[0.16em] text-[#15131A]/45">
//                         Call SuperGuard
//                       </span>

//                       <span className="mt-1 block text-[11px] font-black">
//                         {LOCAL.phoneDisplay}
//                       </span>
//                     </div>
//                   </div>

//                   <ArrowUpRight size={15} />
//                 </a>

//                 <Link
//                   to="/contact-us"
//                   onClick={closeMenu}
//                   tabIndex={menuOpen ? 0 : -1}
//                   className="group mt-2 flex items-center justify-between rounded-[14px] bg-[#6055A6] p-3.5 text-white transition hover:bg-[#51478F]"
//                 >
//                   <div>
//                     <span className="block text-[8px] font-black uppercase tracking-[0.13em]">
//                       Request pest control
//                     </span>

//                     <span className="mt-1 block text-[7px] font-bold text-white/60">
//                       Contact our local team
//                     </span>
//                   </div>

//                   <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition group-hover:translate-x-1">
//                     <ArrowRight size={14} />
//                   </span>
//                 </Link>
//               </div>
//             </div>

//             <div className="flex items-center justify-between gap-3 py-4">
//               <span className="text-[7px] font-black uppercase tracking-[0.12em] text-[#15131A]/35">
//                 {LOCAL.shortName}
//               </span>

//               <span className="text-[7px] font-black uppercase tracking-[0.12em] text-[#6055A6]/65">
//                 {LOCAL.postcode}
//               </span>
//             </div>
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// }















import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  X,
  ChevronRight,
} from "lucide-react";

const LOCAL = {
  company: "SuperGuard Hampstead",
  shortName: "SuperGuard Hampstead",
  area: "Hampstead",
  city: "London",
  postcode: "NW3 5UN",
  streetAddress: "12 Vane Cl",
  address: "12 Vane Cl, London NW3 5UN, United Kingdom",
  phoneDisplay: "+44 7466 966471",
  phoneTel: "+447466966471",
};

const MENU_ITEMS = [
  { number: "01", label: "Home", path: "/" },
  { number: "02", label: "Services", path: "/services" },
  { number: "03", label: "About Us", path: "/about-us" },
  { number: "04", label: "Contact", path: "/contact-us" },
];

const NAV_LINK_CLASS = ({ isActive }) =>
  `relative flex h-full items-center whitespace-nowrap border-b-2 px-3 text-[11px] font-bold transition-all duration-300 xl:px-4 ${
    isActive
      ? "border-[#D8D2F3] text-white"
      : "border-transparent text-white/70 hover:border-white/40 hover:text-white"
  }`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* LOCAL BUSINESS STRUCTURED DATA */}
      <div
        className="hidden"
        itemScope
        itemType="https://schema.org/LocalBusiness"
      >
        <meta itemProp="name" content={LOCAL.company} />
        <meta itemProp="telephone" content={LOCAL.phoneDisplay} />
        <meta
          itemProp="areaServed"
          content={`${LOCAL.area} and nearby areas`}
        />

        <div
          itemProp="address"
          itemScope
          itemType="https://schema.org/PostalAddress"
        >
          <meta itemProp="streetAddress" content={LOCAL.streetAddress} />
          <meta itemProp="addressLocality" content={LOCAL.city} />
          <meta itemProp="addressRegion" content="Greater London" />
          <meta itemProp="postalCode" content={LOCAL.postcode} />
          <meta itemProp="addressCountry" content="GB" />
        </div>
      </div>

      {/* FULL-WIDTH HEADER */}
      <header className="fixed inset-x-0 top-0 z-50 w-full">
        {/* TOP INFORMATION BAR */}
        <div
          className={`hidden overflow-hidden bg-[#24212D] text-white transition-all duration-300 lg:block ${
            isScrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
          }`}
        >
          <div className="mx-auto flex max-w-[1600px] items-center justify-between px-8 py-2.5 xl:px-12">
            <div className="flex items-center gap-2.5 text-[10px] font-medium tracking-wide text-white/75">
              <span className="h-2 w-2 rounded-full bg-[#D8D2F3]" />
              Local pest control in Hampstead and nearby areas
            </div>

            <div className="flex items-center gap-6 text-[10px] font-semibold">
              <span className="flex items-center gap-2 text-white/65">
                <MapPin size={12} className="text-[#D8D2F3]" />
                {LOCAL.postcode}, London
              </span>

              <a
                href={`tel:${LOCAL.phoneTel}`}
                className="flex items-center gap-2 text-white transition hover:text-[#D8D2F3]"
              >
                <Phone size={12} />
                {LOCAL.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        {/* NEW FULL-WIDTH NAVIGATION STRAP */}
        <nav
          aria-label="Main navigation"
          className={`relative w-full border-b border-white/10 bg-[#6055A6] text-white transition-all duration-300 ${
            isScrolled
              ? "shadow-[0_8px_30px_rgba(36,33,45,0.22)]"
              : "shadow-[0_5px_22px_rgba(36,33,45,0.10)]"
          }`}
        >
          <div className="mx-auto flex min-h-[76px] max-w-[1600px] items-center justify-between gap-3 px-4 sm:px-6 lg:min-h-[84px] lg:px-8 xl:px-12">
            {/* BRAND */}
            <Link
              to="/"
              onClick={closeMenu}
              aria-label={`${LOCAL.company} homepage`}
              className="group flex min-w-0 shrink-0 items-center gap-3"
            >
              <span
                className={`relative flex shrink-0 items-center justify-center rounded-[17px] bg-[#F7F6FA] p-2 transition-all duration-300 group-hover:rounded-[22px] ${
                  isScrolled ? "h-[49px] w-[55px]" : "h-[56px] w-[62px]"
                }`}
              >
                <img
                  src="/images/superguard-logo.webp"
                  alt={`${LOCAL.company} logo`}
                  className="h-full w-full object-contain"
                  loading="eager"
                />
              </span>

              <span className="min-w-0">
                <span className="block text-[8px] font-bold uppercase tracking-[0.18em] text-[#D8D2F3] sm:text-[9px]">
                  Local Pest Control
                </span>

                <span className="mt-1 block whitespace-nowrap text-[15px] font-black leading-none tracking-[-0.045em] sm:text-[18px] lg:text-[19px]">
                  SuperGuard
                </span>

                <span className="mt-1.5 block text-[8px] font-semibold tracking-[0.12em] text-white/65 sm:text-[9px]">
                  HAMPSTEAD · LONDON
                </span>
              </span>
            </Link>

            {/* DESKTOP LOCATION INDICATOR */}
            <div className="hidden shrink-0 items-center gap-2.5 border-l border-white/15 pl-5 2xl:flex">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#D8D2F3]">
                <MapPin size={17} strokeWidth={1.8} />
              </span>

              <span>
                <span className="block text-[9px] font-bold uppercase tracking-[0.13em] text-white/55">
                  Proudly serving
                </span>
                <span className="mt-1 block text-[12px] font-bold">
                  Hampstead, NW3
                </span>
              </span>
            </div>

            {/* DESKTOP NAVIGATION */}
            <div className="ml-auto hidden h-[84px] items-center lg:flex">
              {MENU_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={NAV_LINK_CLASS}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* DESKTOP CONTACT ACTIONS */}
            <div className="hidden shrink-0 items-center gap-3 lg:flex lg:pl-3 xl:pl-5">
              <a
                href={`tel:${LOCAL.phoneTel}`}
                aria-label={`Call ${LOCAL.company}`}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition hover:border-white hover:bg-white hover:text-[#6055A6] xl:hidden"
              >
                <Phone size={17} />
              </a>

              <a
                href={`tel:${LOCAL.phoneTel}`}
                className="hidden items-center gap-2 text-[11px] font-bold transition hover:text-[#D8D2F3] xl:flex"
              >
                <Phone size={15} className="text-[#D8D2F3]" />
                {LOCAL.phoneDisplay}
              </a>

              <Link
                to="/contact-us"
                className="group flex h-11 items-center justify-center gap-3 rounded-full bg-[#F7F6FA] px-5 text-[10px] font-black uppercase tracking-[0.08em] text-[#6055A6] transition duration-300 hover:bg-[#D8D2F3] xl:ml-2"
              >
                Get a Quote
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#6055A6] text-white transition-transform group-hover:translate-x-0.5">
                  <ArrowUpRight size={14} />
                </span>
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 transition hover:bg-white hover:text-[#6055A6] lg:hidden"
            >
              <Menu size={21} />
            </button>
          </div>

          {/* SUBTLE BOTTOM ACCENT */}
          <div className="h-[3px] w-full bg-gradient-to-r from-[#A59ED8] via-[#D8D2F3] to-transparent" />
        </nav>
      </header>

      {/* MOBILE BACKDROP */}
      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={closeMenu}
        tabIndex={menuOpen ? 0 : -1}
        className={`fixed inset-0 z-[60] bg-[#15131A]/65 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          menuOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      />

      {/* MOBILE DRAWER */}
      <aside
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        className={`fixed right-0 top-0 z-[70] flex h-[100dvh] w-full max-w-[420px] flex-col overflow-hidden bg-[#F7F6FA] text-[#24212D] shadow-[-20px_0_60px_rgba(21,19,26,0.2)] transition-transform duration-500 ease-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* DRAWER BRAND HEADER */}
        <div className="relative shrink-0 overflow-hidden bg-[#6055A6] px-5 pb-7 pt-6 text-white sm:px-7">
          <div className="pointer-events-none absolute -right-16 -top-20 h-60 w-60 rounded-full border-[30px] border-white/[0.06]" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-48 w-48 rotate-45 border border-white/[0.09]" />

          <div className="relative z-10 flex items-center justify-between">
            <Link
              to="/"
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
              className="flex items-center gap-3"
            >
              <span className="flex h-14 w-16 items-center justify-center rounded-[17px] bg-[#F7F6FA] p-2">
                <img
                  src="/images/superguard-logo.webp"
                  alt={`${LOCAL.company} logo`}
                  className="h-full w-full object-contain"
                />
              </span>

              <span>
                <span className="block text-[8px] font-bold uppercase tracking-[0.16em] text-white/60">
                  Local Pest Control
                </span>
                <span className="mt-1 block text-[16px] font-black">
                  SuperGuard
                </span>
                <span className="mt-1 block text-[9px] font-semibold tracking-[0.12em] text-white/65">
                  HAMPSTEAD · LONDON
                </span>
              </span>
            </Link>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close navigation menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white hover:text-[#6055A6]"
            >
              <X size={19} />
            </button>
          </div>

          <div className="relative z-10 mt-8">
            <div className="flex items-center gap-2 text-[#D8D2F3]">
              <ShieldCheck size={16} />
              <span className="text-[9px] font-bold uppercase tracking-[0.18em]">
                Local pest protection
              </span>
            </div>

            <h2 className="mt-4 max-w-[310px] text-[32px] font-black leading-[1.02] tracking-[-0.05em]">
              A pest-free property starts{" "}
              <span className="text-[#D8D2F3]">here.</span>
            </h2>
          </div>

          <div className="relative z-10 mt-6 flex items-center justify-between rounded-[15px] border border-white/15 bg-white/[0.08] px-4 py-3">
            <span className="flex items-center gap-2 text-[10px] font-bold">
              <MapPin size={14} className="text-[#D8D2F3]" />
              {LOCAL.area}, {LOCAL.postcode}
            </span>
            <span className="text-[9px] font-semibold text-white/55">
              {LOCAL.city}
            </span>
          </div>
        </div>

        {/* SCROLLABLE MENU CONTENT */}
        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-5 py-6 sm:px-7">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#6055A6]">
                Navigation
              </span>
              <h3 className="mt-1 text-[22px] font-black tracking-[-0.04em]">
                Explore the site
              </h3>
            </div>

            <span className="rounded-full bg-[#6055A6]/10 px-3 py-1.5 text-[9px] font-bold text-[#6055A6]">
              04 Pages
            </span>
          </div>

          <nav aria-label="Mobile main navigation" className="mt-5">
            {MENU_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
                className={({ isActive }) =>
                  `group mb-2 flex items-center justify-between rounded-[16px] border p-3.5 transition-all duration-300 ${
                    isActive
                      ? "border-[#6055A6] bg-[#6055A6] text-white shadow-[0_8px_22px_rgba(96,85,166,0.17)]"
                      : "border-[#24212D]/[0.08] bg-white text-[#24212D] hover:border-[#6055A6]/35"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="flex items-center gap-3.5">
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-[13px] text-[10px] font-black ${
                          isActive
                            ? "bg-white/15 text-white"
                            : "bg-[#6055A6]/10 text-[#6055A6]"
                        }`}
                      >
                        {item.number}
                      </span>

                      <span className="text-[14px] font-bold">
                        {item.label}
                      </span>
                    </span>

                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full transition ${
                        isActive
                          ? "bg-white text-[#6055A6]"
                          : "bg-[#F7F6FA] text-[#24212D]/50 group-hover:bg-[#6055A6] group-hover:text-white"
                      }`}
                    >
                      <ChevronRight size={16} />
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* CONTACT PANEL */}
          <div className="mt-auto pt-6">
            <div className="relative overflow-hidden rounded-[23px] bg-[#24212D] p-5 text-white">
              <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full border-[20px] border-white/[0.04]" />

              <div className="relative z-10">
                <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-white/55">
                  <MapPin size={13} className="text-[#A59ED8]" />
                  Local service area
                </span>

                <address className="mt-3 text-[11px] font-medium not-italic leading-5 text-white/75">
                  {LOCAL.address}
                </address>

                <a
                  href={`tel:${LOCAL.phoneTel}`}
                  tabIndex={menuOpen ? 0 : -1}
                  className="mt-4 flex items-center justify-between gap-3 rounded-[15px] bg-white p-3.5 text-[#24212D] transition hover:bg-[#D8D2F3]"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#6055A6] text-white">
                      <Phone size={16} />
                    </span>

                    <span>
                      <span className="block text-[8px] font-bold uppercase tracking-[0.12em] text-[#24212D]/50">
                        Call SuperGuard
                      </span>
                      <span className="mt-1 block text-[12px] font-black">
                        {LOCAL.phoneDisplay}
                      </span>
                    </span>
                  </span>

                  <ArrowUpRight size={17} />
                </a>

                <Link
                  to="/contact-us"
                  onClick={closeMenu}
                  tabIndex={menuOpen ? 0 : -1}
                  className="group mt-2 flex items-center justify-between rounded-[15px] bg-[#6055A6] p-4 text-white transition hover:bg-[#51478F]"
                >
                  <span>
                    <span className="block text-[10px] font-black uppercase tracking-[0.08em]">
                      Request pest control
                    </span>
                    <span className="mt-1 block text-[9px] text-white/65">
                      Contact our local team
                    </span>
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 transition group-hover:translate-x-1">
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 py-4">
              <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#24212D]/40">
                {LOCAL.shortName}
              </span>
              <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#6055A6]">
                {LOCAL.postcode}
              </span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
