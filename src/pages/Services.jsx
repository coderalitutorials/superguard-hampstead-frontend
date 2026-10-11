// import React, { useEffect, useMemo, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   ArrowRight,
//   Bird,
//   Bug,
//   CheckCircle2,
//   Home,
//   MapPin,
//   Rat,
//   SearchCheck,
//   ShieldAlert,
//   SlidersHorizontal,
//   Sparkles,
// } from "lucide-react";

// import ServicesHeroSection from "../components/ServicesHeroSection";
// import SuperGuardTestimonials from "../components/PrimeShieldTestimonials";

// const Services = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const LOCAL = {
//     company: "SuperGuard Services Limited Holborn",
//     shortName: "SuperGuard Holborn",
//     area: "Holborn",
//     city: "London",
//     postcode: "WC2R 3JF",
//     streetAddress: "50 Essex Street",
//     address: "50 Essex Street, London, WC2R 3JF",
//   };

//   const categories = [
//     "All",
//     "Insects",
//     "Rodents & Wildlife",
//     "Birds & Prevention",
//   ];

//   const servicesData = [
//     {
//       number: "01",
//       cat: "Insects",
//       title: `Ants Control ${LOCAL.area}`,
//       image: "/images/ants.webp",
//       icon: Bug,
//       label: "Ant Control",
//       description: `Ants can appear around kitchens, door frames, wall edges and garden access points. Our ${LOCAL.area} team checks where activity is coming from before recommending a suitable treatment plan.`,
//       points: [
//         "Ant trail inspection",
//         "Entry point assessment",
//         "Targeted treatment guidance",
//       ],
//     },
//     {
//       number: "02",
//       cat: "Insects",
//       title: `Bed Bug Treatment ${LOCAL.area}`,
//       image: "/images/bedbugs.webp",
//       icon: Bug,
//       label: "Bed Bug Service",
//       description: `Bed bugs often hide around mattress seams, bed frames, headboards and nearby furnishings. We inspect affected rooms and provide a targeted treatment plan with preparation and aftercare advice.`,
//       points: [
//         "Affected room inspection",
//         "Targeted treatment planning",
//         "Preparation and aftercare advice",
//       ],
//     },
//     {
//       number: "03",
//       cat: "Insects",
//       title: `Carpet Moth Treatment ${LOCAL.area}`,
//       image: "/images/moths.webp",
//       icon: Sparkles,
//       label: "Fabric Pest Control",
//       description: `Carpet moth larvae can damage wool carpets, rugs, stored clothing and soft furnishings. We assess likely activity areas and explain practical treatment and prevention steps.`,
//       points: [
//         "Fabric risk inspection",
//         "Larvae activity assessment",
//         "Protection and aftercare guidance",
//       ],
//     },
//     {
//       number: "04",
//       cat: "Insects",
//       title: `Carpet Beetle Control ${LOCAL.area}`,
//       image: "/images/beetle.webp",
//       icon: Bug,
//       label: "Carpet Beetle Service",
//       description: `Carpet beetles can hide around wardrobes, skirting boards, storage areas and soft furnishings. Our team checks common harbourage areas and recommends a suitable control plan.`,
//       points: [
//         "Storage area checks",
//         "Larvae source assessment",
//         "Lifecycle prevention advice",
//       ],
//     },
//     {
//       number: "05",
//       cat: "Insects",
//       title: `Cockroach Control ${LOCAL.area}`,
//       image: "/images/cockroach.webp",
//       icon: Bug,
//       label: "Cockroach Treatment",
//       description: `Cockroaches may hide behind appliances, pipework, cracks and food preparation areas. We assess harbourage points and provide targeted support for homes and commercial premises.`,
//       points: [
//         "Kitchen risk assessment",
//         "Harbourage inspection",
//         "Targeted treatment planning",
//       ],
//     },
//     {
//       number: "06",
//       cat: "Rodents & Wildlife",
//       title: `Rats & Mice Control ${LOCAL.area}`,
//       image: "/images/rodents.webp",
//       icon: Rat,
//       label: "Rodent Control",
//       description: `Rats and mice can damage wiring, contaminate food areas and move through hidden property gaps. We inspect activity signs, possible entry routes and suitable control options.`,
//       points: [
//         "Entry point inspection",
//         "Rodent activity assessment",
//         "Practical proofing guidance",
//       ],
//     },
//     {
//       number: "07",
//       cat: "Insects",
//       title: `Flea Treatment ${LOCAL.area}`,
//       image: "/images/flea.webp",
//       icon: Bug,
//       label: "Flea Control",
//       description: `Fleas can spread through carpets, sofas, pet resting areas and soft furnishings. We inspect affected rooms and explain the preparation, treatment and aftercare process.`,
//       points: [
//         "Affected area inspection",
//         "Furnishing treatment plan",
//         "Preparation and aftercare advice",
//       ],
//     },
//     {
//       number: "08",
//       cat: "Insects",
//       title: `Wasp Nest Control ${LOCAL.area}`,
//       image: "/images/wasps.webp",
//       icon: ShieldAlert,
//       label: "Wasp Nest Service",
//       description: `Wasp activity around roof edges, wall cavities, gardens and entrances can quickly become disruptive. We help identify the active nest area and select an appropriate treatment approach.`,
//       points: [
//         "Nest activity assessment",
//         "Suitable treatment method",
//         "Clear safety guidance",
//       ],
//     },
//     {
//       number: "09",
//       cat: "Insects",
//       title: `Bee Guidance ${LOCAL.area}`,
//       image: "/images/bee.webp",
//       icon: Bug,
//       label: "Bee Activity Support",
//       description: `When bees settle close to entrances, roof spaces or living areas, we provide careful guidance and help identify the most appropriate next step for the property.`,
//       points: [
//         "Activity location review",
//         "Property risk assessment",
//         "Careful practical guidance",
//       ],
//     },
//     {
//       number: "10",
//       cat: "Rodents & Wildlife",
//       title: `Squirrel Control ${LOCAL.area}`,
//       image: "/images/squirrel.webp",
//       icon: Rat,
//       label: "Squirrel Control",
//       description: `Squirrels can damage loft insulation, timber, wiring and roof access points. We assess signs of activity and recommend suitable control and proofing measures.`,
//       points: [
//         "Loft activity inspection",
//         "Roof access assessment",
//         "Proofing recommendations",
//       ],
//     },
//     {
//       number: "11",
//       cat: "Birds & Prevention",
//       title: `Property Proofing ${LOCAL.area}`,
//       image: "/images/hygene.webp",
//       icon: Home,
//       label: "Property Prevention",
//       description: `Property proofing helps reduce the chance of pests returning through open gaps, damaged vents, pipe openings and other vulnerable access points.`,
//       points: [
//         "Access point inspection",
//         "Property gap assessment",
//         "Practical prevention work",
//       ],
//     },
//     {
//       number: "12",
//       cat: "Birds & Prevention",
//       title: `Bird Control ${LOCAL.area}`,
//       image: "/images/birds.webp",
//       icon: Bird,
//       label: "Bird Prevention",
//       description: `Bird activity can create mess and damage around roofs, ledges, balconies and commercial frontages. We assess the building and recommend practical deterrent options.`,
//       points: [
//         "Roof and ledge inspection",
//         "Bird activity assessment",
//         "Deterrent and proofing advice",
//       ],
//     },
//   ];

//   useEffect(() => {
//     const state = location.state;

//     if (!state) {
//       return undefined;
//     }

//     const incomingCategory = categories.includes(state.category)
//       ? state.category
//       : "All";

//     setSelectedCategory(incomingCategory);

//     if (!state.scrollToService) {
//       return undefined;
//     }

//     const timer = window.setTimeout(() => {
//       const incomingText = String(
//         state.scrollToService
//       ).toLowerCase();

//       let keyword = incomingText;

//       if (
//         incomingText.includes("rat") ||
//         incomingText.includes("mice") ||
//         incomingText.includes("rodent")
//       ) {
//         keyword = "rat";
//       } else if (incomingText.includes("bed bug")) {
//         keyword = "bed bug";
//       } else if (incomingText.includes("wasp")) {
//         keyword = "wasp";
//       } else if (incomingText.includes("moth")) {
//         keyword = "moth";
//       } else if (incomingText.includes("bird")) {
//         keyword = "bird";
//       } else if (incomingText.includes("squirrel")) {
//         keyword = "squirrel";
//       } else if (incomingText.includes("cockroach")) {
//         keyword = "cockroach";
//       } else if (incomingText.includes("ant")) {
//         keyword = "ant";
//       } else if (incomingText.includes("flea")) {
//         keyword = "flea";
//       } else if (incomingText.includes("beetle")) {
//         keyword = "beetle";
//       }

//       const serviceElements = Array.from(
//         document.querySelectorAll("[data-title]")
//       );

//       const targetElement = serviceElements.find((element) => {
//         const title =
//           element.getAttribute("data-title")?.toLowerCase() || "";

//         return title.includes(keyword);
//       });

//       if (targetElement) {
//         const offset = 170;

//         const position =
//           targetElement.getBoundingClientRect().top +
//           window.scrollY -
//           offset;

//         window.scrollTo({
//           top: position,
//           behavior: "smooth",
//         });
//       }
//     }, 500);

//     return () => window.clearTimeout(timer);
//   }, [location.state]);

//   useEffect(() => {
//     const elements = document.querySelectorAll(
//       ".sg-directory-animate"
//     );

//     if (!("IntersectionObserver" in window)) {
//       elements.forEach((element) => {
//         element.classList.add("sg-directory-show");
//       });

//       return undefined;
//     }

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add(
//               "sg-directory-show"
//             );

//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       {
//         threshold: 0.1,
//         rootMargin: "0px 0px -50px 0px",
//       }
//     );

//     elements.forEach((element) => {
//       observer.observe(element);
//     });

//     return () => observer.disconnect();
//   }, [selectedCategory]);

//   const filteredServices = useMemo(() => {
//     if (selectedCategory === "All") {
//       return servicesData;
//     }

//     return servicesData.filter(
//       (service) => service.cat === selectedCategory
//     );
//   }, [selectedCategory]);

//   const featuredService = filteredServices[0] || null;
//   const secondaryServices = filteredServices.slice(1);

//   const goToContact = () => {
//     navigate("/contact-us");
//   };

//   return (
//     <main className="min-h-screen overflow-x-hidden bg-[#F7F5FC] font-sans text-[#171327] selection:bg-[#6055A6] selection:text-white">
//       <ServicesHeroSection />




//    <section

//         id="services-list"

//         aria-labelledby="services-directory-heading"

//         className="relative scroll-mt-28 overflow-hidden bg-[#F7F5FC] py-20 sm:py-24 lg:py-28"

//       >

//         <style>{`

//           .sg-directory-animate {

//             opacity: 0;

//             transform: translateY(28px);

//             transition:

//               opacity 850ms cubic-bezier(0.16, 1, 0.3, 1),

//               transform 850ms cubic-bezier(0.16, 1, 0.3, 1);

//           }



//           .sg-directory-show {

//             opacity: 1;

//             transform: translateY(0);

//           }



//           @media (prefers-reduced-motion: reduce) {

//             .sg-directory-animate {

//               opacity: 1;

//               transform: none;

//               transition: none;

//             }

//           }

//         `}</style>



//         {/* BACKGROUND */}

//         <div className="pointer-events-none absolute inset-0">

//           <div className="absolute -left-56 top-32 h-[620px] w-[620px] rounded-full bg-[#6055A6]/10 blur-[150px]" />



//           <div className="absolute -bottom-72 right-[-180px] h-[700px] w-[700px] rounded-full bg-[#6055A6]/10 blur-[170px]" />



//           <div

//             className="absolute inset-0 opacity-[0.03]"

//             style={{

//               backgroundImage:

//                 "linear-gradient(rgba(96,85,166,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(96,85,166,0.22) 1px, transparent 1px)",

//               backgroundSize: "82px 82px",

//             }}

//           />



//           <div

//             aria-hidden="true"

//             className="absolute right-[-30px] top-16 hidden select-none text-[180px] font-black uppercase leading-none tracking-[-0.08em] text-[#6055A6]/[0.035] lg:block"

//           >

//             Services

//           </div>

//         </div>



//         <div className="relative z-10 mx-auto max-w-[1450px] px-5 sm:px-8 md:px-10 lg:px-14">

//           {/* LOCATION LINE */}

//           <div className="sg-directory-animate flex flex-col gap-4 border-b border-[#6055A6]/15 pb-6 sm:flex-row sm:items-center sm:justify-between">

//             <div className="flex items-center gap-3">

//               <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6055A6] text-white">

//                 <MapPin

//                   size={17}

//                   strokeWidth={2.5}

//                 />

//               </span>



//               <div>

//                 <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-[#6055A6]">

//                   {LOCAL.shortName}

//                 </span>



//                 <address className="mt-1 not-italic text-xs font-bold text-slate-500 sm:text-sm">

//                   {LOCAL.address}

//                 </address>

//               </div>

//             </div>



//             <span className="text-[9px] font-black uppercase tracking-[0.19em] text-slate-400">

//               Residential • Commercial • Inspection • Treatment

//             </span>

//           </div>



//           {/* HEADING */}

//           <div className="sg-directory-animate mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">

//             <div>

//               <div className="flex items-center gap-4">

//                 <span className="h-px w-14 bg-[#6055A6]/55 sm:w-20" />



//                 <span className="text-[9px] font-black uppercase tracking-[0.27em] text-[#6055A6] sm:text-[10px]">

//                   Complete Pest Control Directory

//                 </span>

//               </div>



//               <h1

//                 id="services-directory-heading"

//                 className="mt-6 max-w-[950px] text-[43px] font-black leading-[0.94] tracking-[-0.052em] text-[#171327] sm:text-[58px] md:text-[68px] lg:text-[78px]"

//               >

//                 Pest Control For

//                 <span className="block text-[#6055A6]">

//                   Holborn Properties.

//                 </span>

//               </h1>

//             </div>



//             <div className="lg:pb-2">

//               <p className="max-w-xl text-sm font-medium leading-7 text-slate-600 sm:text-base sm:leading-8">

//                 Browse pest control services for homes, flats,

//                 landlords, offices and commercial premises across

//                 Holborn and Central London.

//               </p>



//               <div className="mt-6 flex items-center gap-3">

//                 <CheckCircle2

//                   size={18}

//                   strokeWidth={2.6}

//                   className="shrink-0 text-[#6055A6]"

//                 />



//                 <span className="text-xs font-black text-[#171327]">

//                   Inspection-led and property-focused support

//                 </span>

//               </div>

//             </div>

//           </div>



//           {/* FILTER */}

//           <div className="sg-directory-animate mt-10 rounded-[26px] border border-[#6055A6]/10 bg-white p-4 shadow-[0_18px_55px_rgba(23,19,39,0.06)] sm:p-5">

//             <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">

//               <div className="flex items-center gap-4">

//                 <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#6055A6] text-white">

//                   <SlidersHorizontal

//                     size={18}

//                     strokeWidth={2.5}

//                   />

//                 </span>



//                 <div>

//                   <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-[#6055A6]">

//                     Filter Services

//                   </span>



//                   <span className="mt-1 block text-xs font-semibold text-slate-500">

//                     Choose the pest category affecting your property.

//                   </span>

//                 </div>

//               </div>



//               <div className="flex gap-2 overflow-x-auto pb-1 xl:flex-wrap xl:justify-end xl:overflow-visible">

//                 {categories.map((category) => {

//                   const active =

//                     selectedCategory === category;



//                   return (

//                     <button

//                       key={category}

//                       type="button"

//                       onClick={() =>

//                         setSelectedCategory(category)

//                       }

//                       aria-pressed={active}

//                       className={`shrink-0 rounded-full px-5 py-3 text-[9px] font-black uppercase tracking-[0.15em] transition-all duration-300 sm:text-[10px] ${

//                         active

//                           ? "bg-[#6055A6] text-white shadow-[0_12px_30px_rgba(96,85,166,0.24)]"

//                           : "bg-[#F3F1FA] text-slate-500 hover:bg-[#171327] hover:text-white"

//                       }`}

//                     >

//                       {category}

//                     </button>

//                   );

//                 })}

//               </div>

//             </div>

//           </div>



//           {/* FEATURED SERVICE */}

//           {featuredService && (

//             <article

//               data-title={featuredService.title}

//               onClick={goToContact}

//               onKeyDown={(event) => {

//                 if (

//                   event.key === "Enter" ||

//                   event.key === " "

//                 ) {

//                   event.preventDefault();

//                   goToContact();

//                 }

//               }}

//               role="button"

//               tabIndex={0}

//               className="sg-directory-animate group relative mt-14 cursor-pointer overflow-hidden bg-[#171327] shadow-[0_30px_90px_rgba(23,19,39,0.18)] lg:mt-16"

//             >

//               <div className="grid lg:min-h-[620px] lg:grid-cols-[1.08fr_0.92fr]">

//                 {/* IMAGE */}

//                 <div className="relative min-h-[430px] overflow-hidden sm:min-h-[520px] lg:min-h-full">

//                   <img

//                     src={featuredService.image}

//                     alt={`${featuredService.title} service in ${LOCAL.area}`}

//                     className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"

//                     loading="lazy"

//                   />



//                   <div className="absolute inset-0 bg-gradient-to-t from-[#171327]/80 via-transparent to-[#171327]/15 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#171327]/55" />



//                   <div className="absolute left-5 top-5 flex items-center gap-3 bg-white px-4 py-3 shadow-xl sm:left-7 sm:top-7">

//                     <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#6055A6]">

//                       {featuredService.number}

//                     </span>



//                     <span className="h-4 w-px bg-[#6055A6]/25" />



//                     <span className="text-[10px] font-black uppercase tracking-[0.14em] text-[#171327]">

//                       {featuredService.label}

//                     </span>

//                   </div>



//                   <div className="absolute bottom-6 left-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#6055A6] text-white shadow-[0_18px_50px_rgba(23,19,39,0.25)] sm:bottom-8 sm:left-8 sm:h-20 sm:w-20">

//                     {React.createElement(featuredService.icon, {

//                       size: 32,

//                       strokeWidth: 2.2,

//                     })}

//                   </div>

//                 </div>



//                 {/* CONTENT */}

//                 <div className="relative flex flex-col justify-center overflow-hidden px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-14 lg:py-16">

//                   <div className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full border-[48px] border-white/[0.035]" />



//                   <div className="pointer-events-none absolute bottom-[-100px] left-[-90px] h-64 w-64 rounded-full bg-[#6055A6]/25 blur-[100px]" />



//                   <div className="relative z-10">

//                     <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#BDB6FF]">

//                       Featured Holborn Service

//                     </span>



//                     <h2 className="mt-4 max-w-lg text-4xl font-black leading-[0.96] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">

//                       {featuredService.title}

//                     </h2>



//                     <p className="mt-6 max-w-xl text-sm font-medium leading-7 text-white/70 sm:text-base sm:leading-8">

//                       {featuredService.description}

//                     </p>



//                     <div className="mt-8 grid gap-4">

//                       {featuredService.points.map((point) => (

//                         <div

//                           key={point}

//                           className="flex items-center gap-4 border-b border-white/10 pb-4"

//                         >

//                           <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#6055A6] text-white">

//                             <CheckCircle2

//                               size={17}

//                               strokeWidth={2.7}

//                             />

//                           </span>



//                           <span className="text-sm font-black text-white">

//                             {point}

//                           </span>

//                         </div>

//                       ))}

//                     </div>



//                     <button

//                       type="button"

//                       onClick={(event) => {

//                         event.stopPropagation();

//                         goToContact();

//                       }}

//                       className="group/button mt-9 inline-flex min-h-14 items-center justify-center gap-3 bg-[#6055A6] px-8 py-4 text-[10px] font-black uppercase tracking-[0.17em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#6055A6]"

//                     >

//                       Request This Service



//                       <ArrowRight

//                         size={17}

//                         strokeWidth={2.5}

//                         className="transition-transform duration-300 group-hover/button:translate-x-1"

//                       />

//                     </button>

//                   </div>

//                 </div>

//               </div>

//             </article>

//           )}



//           {/* SECONDARY SERVICE CARDS */}

//           {secondaryServices.length > 0 && (

//             <div className="mt-7 grid gap-7 lg:grid-cols-2">

//               {secondaryServices.map((service) => {

//                 const Icon = service.icon;



//                 return (

//                   <article

//                     key={service.title}

//                     data-title={service.title}

//                     onClick={goToContact}

//                     onKeyDown={(event) => {

//                       if (

//                         event.key === "Enter" ||

//                         event.key === " "

//                       ) {

//                         event.preventDefault();

//                         goToContact();

//                       }

//                     }}

//                     role="button"

//                     tabIndex={0}

//                     className="sg-directory-animate group relative min-h-[590px] cursor-pointer overflow-hidden bg-[#171327] shadow-[0_28px_75px_rgba(23,19,39,0.14)]"

//                   >

//                     <img

//                       src={service.image}

//                       alt={`${service.title} service in ${LOCAL.area}`}

//                       className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1100ms] group-hover:scale-105"

//                       loading="lazy"

//                     />



//                     <div className="absolute inset-0 bg-gradient-to-t from-[#171327] via-[#171327]/76 to-[#171327]/10" />



//                     <div className="absolute inset-0 bg-[#6055A6]/10 mix-blend-multiply" />



//                     <div className="relative z-10 flex min-h-[590px] flex-col justify-between p-6 sm:p-8 lg:p-10">

//                       {/* TOP */}

//                       <div className="flex items-start justify-between gap-5">

//                         <div className="bg-white px-4 py-3 shadow-xl">

//                           <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-[#6055A6]">

//                             {service.number}

//                           </span>



//                           <span className="mt-1 block text-xs font-black text-[#171327]">

//                             {service.label}

//                           </span>

//                         </div>



//                         <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-[#6055A6]">

//                           <Icon

//                             size={29}

//                             strokeWidth={2.2}

//                           />

//                         </div>

//                       </div>



//                       {/* BOTTOM */}

//                       <div>

//                         <span className="text-[9px] font-black uppercase tracking-[0.23em] text-[#C8C2FF]">

//                           {service.cat}

//                         </span>



//                         <h2 className="mt-4 max-w-lg text-4xl font-black leading-[0.96] tracking-[-0.045em] text-white sm:text-5xl">

//                           {service.title}

//                         </h2>



//                         <p className="mt-5 max-w-xl text-sm font-medium leading-7 text-white/70">

//                           {service.description}

//                         </p>



//                         <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">

//                           {service.points.map((point) => (

//                             <div

//                               key={point}

//                               className="flex items-center gap-2"

//                             >

//                               <CheckCircle2

//                                 size={17}

//                                 strokeWidth={2.6}

//                                 className="shrink-0 text-[#C6C0FF]"

//                               />



//                               <span className="text-xs font-black text-white">

//                                 {point}

//                               </span>

//                             </div>

//                           ))}

//                         </div>



//                         <button

//                           type="button"

//                           onClick={(event) => {

//                             event.stopPropagation();

//                             goToContact();

//                           }}

//                           className="group/button mt-8 inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.18em] text-white"

//                         >

//                           Request Treatment



//                           <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#6055A6] text-white transition-all duration-300 group-hover/button:translate-x-1 group-hover/button:bg-white group-hover/button:text-[#6055A6]">

//                             <ArrowRight

//                               size={17}

//                               strokeWidth={2.6}

//                             />

//                           </span>

//                         </button>

//                       </div>

//                     </div>

//                   </article>

//                 );

//               })}

//             </div>

//           )}



//           {/* EMPTY RESULT */}

//           {filteredServices.length === 0 && (

//             <div className="mt-12 bg-white px-6 py-20 text-center shadow-[0_25px_80px_rgba(23,19,39,0.08)]">

//               <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F0EEFA] text-[#6055A6]">

//                 <SearchCheck

//                   size={27}

//                   strokeWidth={2.4}

//                 />

//               </span>



//               <h2 className="mt-5 text-2xl font-black text-[#171327]">

//                 No services found in this category.

//               </h2>



//               <p className="mx-auto mt-3 max-w-xl text-sm font-medium leading-7 text-slate-500">

//                 Select another category or contact our team and

//                 explain the pest signs you have noticed.

//               </p>

//             </div>

//           )}



//           {/* FINAL CTA */}

//           <div className="sg-directory-animate relative mt-10 overflow-hidden bg-[#6055A6] px-6 py-9 text-white sm:px-9 sm:py-11 lg:px-12">

//             <div className="pointer-events-none absolute -right-16 -top-28 h-72 w-72 rounded-full border-[48px] border-white/[0.06]" />



//             <div className="pointer-events-none absolute -bottom-36 left-[32%] h-72 w-72 rounded-full bg-[#171327]/25 blur-[100px]" />



//             <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

//               <div>

//                 <span className="text-[9px] font-black uppercase tracking-[0.24em] text-white/65">

//                   Unsure Which Service You Need?

//                 </span>



//                 <h2 className="mt-3 max-w-4xl text-3xl font-black leading-tight tracking-[-0.035em] text-white sm:text-4xl">

//                   Tell Us What Signs You Have Noticed Around The

//                   Property.

//                 </h2>



//                 <p className="mt-4 max-w-3xl text-sm font-medium leading-7 text-white/70">

//                   Share the property type, where pest activity is

//                   appearing and any signs you have noticed. Our team

//                   can help identify a suitable next step.

//                 </p>

//               </div>



//               <button

//                 type="button"

//                 onClick={goToContact}

//                 className="group inline-flex min-h-14 items-center justify-center gap-3 bg-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.17em] text-[#6055A6] transition-all duration-300 hover:-translate-y-1 hover:bg-[#171327] hover:text-white"

//               >

//                 Request Property Support



//                 <ArrowRight

//                   size={17}

//                   strokeWidth={2.6}

//                   className="transition-transform duration-300 group-hover:translate-x-1"

//                 />

//               </button>

//             </div>

//           </div>

//         </div>

//       </section> 


//       <SuperGuardTestimonials />
//     </main>
//   );
// };

// export default Services;

















// import React, { useEffect, useMemo, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   ArrowRight,
//   Bird,
//   Bug,
//   CheckCircle2,
//   Home,
//   MapPin,
//   Rat,
//   SearchCheck,
//   ShieldAlert,
//   SlidersHorizontal,
//   Sparkles,
// } from "lucide-react";

// import ServicesHeroSection from "../components/ServicesHeroSection";
// import SuperGuardTestimonials from "../components/PrimeShieldTestimonials";

// const Services = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const LOCAL = {
//     company: "SuperGuard Services Westminster",
//     shortName: "SuperGuard Westminster",
//     area: "Westminster",
//     city: "London",
//     postcode: "SW1P 4BD",
//     streetAddress: "14 Regency St",
//     address: "14 Regency St, London SW1P 4BD",
//   };

//   const categories = [
//     "All",
//     "Insects",
//     "Rodents & Wildlife",
//     "Birds & Prevention",
//   ];

//   const servicesData = [
//     {
//       number: "01",
//       cat: "Insects",
//       title: `Ants Control ${LOCAL.area}`,
//       image: "/images/ants.webp",
//       icon: Bug,
//       label: "Ant Control",
//       description: `Ants can appear around kitchens, door frames, wall edges and garden access points. Our ${LOCAL.area} team checks where activity is coming from before recommending a suitable treatment plan.`,
//       points: [
//         "Ant trail inspection",
//         "Entry point assessment",
//         "Targeted treatment guidance",
//       ],
//     },
//     {
//       number: "02",
//       cat: "Insects",
//       title: `Bed Bug Treatment ${LOCAL.area}`,
//       image: "/images/bedbugs.webp",
//       icon: Bug,
//       label: "Bed Bug Service",
//       description: `Bed bugs often hide around mattress seams, bed frames, headboards and nearby furnishings. We inspect affected rooms and provide a targeted treatment plan with preparation and aftercare advice.`,
//       points: [
//         "Affected room inspection",
//         "Targeted treatment planning",
//         "Preparation and aftercare advice",
//       ],
//     },
//     {
//       number: "03",
//       cat: "Insects",
//       title: `Carpet Moth Treatment ${LOCAL.area}`,
//       image: "/images/moths.webp",
//       icon: Sparkles,
//       label: "Fabric Pest Control",
//       description: `Carpet moth larvae can damage wool carpets, rugs, stored clothing and soft furnishings. We assess likely activity areas and explain practical treatment and prevention steps.`,
//       points: [
//         "Fabric risk inspection",
//         "Larvae activity assessment",
//         "Protection and aftercare guidance",
//       ],
//     },
//     {
//       number: "04",
//       cat: "Insects",
//       title: `Carpet Beetle Control ${LOCAL.area}`,
//       image: "/images/beetle.webp",
//       icon: Bug,
//       label: "Carpet Beetle Service",
//       description: `Carpet beetles can hide around wardrobes, skirting boards, storage areas and soft furnishings. Our team checks common harbourage areas and recommends a suitable control plan.`,
//       points: [
//         "Storage area checks",
//         "Larvae source assessment",
//         "Lifecycle prevention advice",
//       ],
//     },
//     {
//       number: "05",
//       cat: "Insects",
//       title: `Cockroach Control ${LOCAL.area}`,
//       image: "/images/cockroach.webp",
//       icon: Bug,
//       label: "Cockroach Treatment",
//       description: `Cockroaches may hide behind appliances, pipework, cracks and food preparation areas. We assess harbourage points and provide targeted support for homes and commercial premises.`,
//       points: [
//         "Kitchen risk assessment",
//         "Harbourage inspection",
//         "Targeted treatment planning",
//       ],
//     },
//     {
//       number: "06",
//       cat: "Rodents & Wildlife",
//       title: `Rats & Mice Control ${LOCAL.area}`,
//       image: "/images/rodents.webp",
//       icon: Rat,
//       label: "Rodent Control",
//       description: `Rats and mice can damage wiring, contaminate food areas and move through hidden property gaps. We inspect activity signs, possible entry routes and suitable control options.`,
//       points: [
//         "Entry point inspection",
//         "Rodent activity assessment",
//         "Practical proofing guidance",
//       ],
//     },
//     {
//       number: "07",
//       cat: "Insects",
//       title: `Flea Treatment ${LOCAL.area}`,
//       image: "/images/flea.webp",
//       icon: Bug,
//       label: "Flea Control",
//       description: `Fleas can spread through carpets, sofas, pet resting areas and soft furnishings. We inspect affected rooms and explain the preparation, treatment and aftercare process.`,
//       points: [
//         "Affected area inspection",
//         "Furnishing treatment plan",
//         "Preparation and aftercare advice",
//       ],
//     },
//     {
//       number: "08",
//       cat: "Insects",
//       title: `Wasp Nest Control ${LOCAL.area}`,
//       image: "/images/wasps.webp",
//       icon: ShieldAlert,
//       label: "Wasp Nest Service",
//       description: `Wasp activity around roof edges, wall cavities, gardens and entrances can quickly become disruptive. We help identify the active nest area and select an appropriate treatment approach.`,
//       points: [
//         "Nest activity assessment",
//         "Suitable treatment method",
//         "Clear safety guidance",
//       ],
//     },
//     {
//       number: "09",
//       cat: "Insects",
//       title: `Bee Guidance ${LOCAL.area}`,
//       image: "/images/bee.webp",
//       icon: Bug,
//       label: "Bee Activity Support",
//       description: `When bees settle close to entrances, roof spaces or living areas, we provide careful guidance and help identify the most appropriate next step for the property.`,
//       points: [
//         "Activity location review",
//         "Property risk assessment",
//         "Careful practical guidance",
//       ],
//     },
//     {
//       number: "10",
//       cat: "Rodents & Wildlife",
//       title: `Squirrel Control ${LOCAL.area}`,
//       image: "/images/squirrel.webp",
//       icon: Rat,
//       label: "Squirrel Control",
//       description: `Squirrels can damage loft insulation, timber, wiring and roof access points. We assess signs of activity and recommend suitable control and proofing measures.`,
//       points: [
//         "Loft activity inspection",
//         "Roof access assessment",
//         "Proofing recommendations",
//       ],
//     },
//     {
//       number: "11",
//       cat: "Birds & Prevention",
//       title: `Property Proofing ${LOCAL.area}`,
//       image: "/images/hygene.webp",
//       icon: Home,
//       label: "Property Prevention",
//       description: `Property proofing helps reduce the chance of pests returning through open gaps, damaged vents, pipe openings and other vulnerable access points.`,
//       points: [
//         "Access point inspection",
//         "Property gap assessment",
//         "Practical prevention work",
//       ],
//     },
//     {
//       number: "12",
//       cat: "Birds & Prevention",
//       title: `Bird Control ${LOCAL.area}`,
//       image: "/images/birds.webp",
//       icon: Bird,
//       label: "Bird Prevention",
//       description: `Bird activity can create mess and damage around roofs, ledges, balconies and commercial frontages. We assess the building and recommend practical deterrent options.`,
//       points: [
//         "Roof and ledge inspection",
//         "Bird activity assessment",
//         "Deterrent and proofing advice",
//       ],
//     },
//   ];

//   useEffect(() => {
//     const state = location.state;

//     if (!state) {
//       return undefined;
//     }

//     const incomingCategory = categories.includes(state.category)
//       ? state.category
//       : "All";

//     setSelectedCategory(incomingCategory);

//     if (!state.scrollToService) {
//       return undefined;
//     }

//     const timer = window.setTimeout(() => {
//       const incomingText = String(
//         state.scrollToService
//       ).toLowerCase();

//       let keyword = incomingText;

//       if (
//         incomingText.includes("rat") ||
//         incomingText.includes("mice") ||
//         incomingText.includes("rodent")
//       ) {
//         keyword = "rat";
//       } else if (incomingText.includes("bed bug")) {
//         keyword = "bed bug";
//       } else if (incomingText.includes("wasp")) {
//         keyword = "wasp";
//       } else if (incomingText.includes("moth")) {
//         keyword = "moth";
//       } else if (incomingText.includes("bird")) {
//         keyword = "bird";
//       } else if (incomingText.includes("squirrel")) {
//         keyword = "squirrel";
//       } else if (incomingText.includes("cockroach")) {
//         keyword = "cockroach";
//       } else if (incomingText.includes("ant")) {
//         keyword = "ant";
//       } else if (incomingText.includes("flea")) {
//         keyword = "flea";
//       } else if (incomingText.includes("beetle")) {
//         keyword = "beetle";
//       }

//       const serviceElements = Array.from(
//         document.querySelectorAll("[data-title]")
//       );

//       const targetElement = serviceElements.find((element) => {
//         const title =
//           element.getAttribute("data-title")?.toLowerCase() || "";

//         return title.includes(keyword);
//       });

//       if (targetElement) {
//         const offset = 170;

//         const position =
//           targetElement.getBoundingClientRect().top +
//           window.scrollY -
//           offset;

//         window.scrollTo({
//           top: position,
//           behavior: "smooth",
//         });
//       }
//     }, 500);

//     return () => window.clearTimeout(timer);
//   }, [location.state]);

//   useEffect(() => {
//     const elements = document.querySelectorAll(
//       ".sg-directory-animate"
//     );

//     if (!("IntersectionObserver" in window)) {
//       elements.forEach((element) => {
//         element.classList.add("sg-directory-show");
//       });

//       return undefined;
//     }

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add(
//               "sg-directory-show"
//             );

//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       {
//         threshold: 0.1,
//         rootMargin: "0px 0px -50px 0px",
//       }
//     );

//     elements.forEach((element) => {
//       observer.observe(element);
//     });

//     return () => observer.disconnect();
//   }, [selectedCategory]);

//   const filteredServices = useMemo(() => {
//     if (selectedCategory === "All") {
//       return servicesData;
//     }

//     return servicesData.filter(
//       (service) => service.cat === selectedCategory
//     );
//   }, [selectedCategory]);

//   const featuredService = filteredServices[0] || null;
//   const secondaryServices = filteredServices.slice(1);

//   const goToContact = () => {
//     navigate("/contact-us");
//   };

//   return (
//     <main className="min-h-screen overflow-x-hidden bg-[#F7F5FC] font-sans text-[#171327] selection:bg-[#6055A6] selection:text-white">
//       <ServicesHeroSection />




//       <section
//         id="services-list"
//         aria-labelledby="services-directory-heading"
//         className="relative scroll-mt-28 overflow-hidden bg-[#F4F1F8] py-20 sm:py-24 lg:py-28"
//       >
//         <style>{`
//           .sg-directory-animate {
//             opacity: 0;
//             transform: translateY(28px);
//             transition:
//               opacity 850ms cubic-bezier(0.16, 1, 0.3, 1),
//               transform 850ms cubic-bezier(0.16, 1, 0.3, 1);
//           }

//           .sg-directory-show {
//             opacity: 1;
//             transform: translateY(0);
//           }

//           .sgw-directory-dots {
//             background-image: radial-gradient(
//               circle,
//               rgba(98, 84, 180, 0.3) 1.2px,
//               transparent 1.2px
//             );
//             background-size: 11px 11px;
//           }

//           .sgw-directory-card-image::after {
//             content: "";
//             position: absolute;
//             inset: 0;
//             background: linear-gradient(
//               to top,
//               rgba(24, 20, 31, 0.3),
//               transparent 45%
//             );
//             pointer-events: none;
//           }

//           .sgw-directory-action::before {
//             content: "";
//             position: absolute;
//             inset: 0;
//             transform: scaleX(0);
//             transform-origin: left;
//             background: #18141f;
//             transition: transform 350ms cubic-bezier(0.16, 1, 0.3, 1);
//           }

//           .sgw-directory-action:hover::before {
//             transform: scaleX(1);
//           }

//           @media (prefers-reduced-motion: reduce) {
//             .sg-directory-animate {
//               opacity: 1;
//               transform: none;
//               transition: none;
//             }

//             .sgw-directory-action::before {
//               transition: none;
//             }
//           }
//         `}</style>

//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0 overflow-hidden"
//         >
//           <div
//             className="absolute inset-0 opacity-[0.04]"
//             style={{
//               backgroundImage:
//                 "linear-gradient(#6254B4 1px, transparent 1px), linear-gradient(90deg, #6254B4 1px, transparent 1px)",
//               backgroundSize: "74px 74px",
//             }}
//           />

//           <div className="absolute -left-64 top-[-100px] h-[620px] w-[620px] rounded-full bg-[#6254B4]/10 blur-[165px]" />
//           <div className="absolute -right-72 bottom-[-290px] h-[700px] w-[700px] rounded-full border-[125px] border-[#6254B4]/[0.035]" />
//           <div className="sgw-directory-dots absolute right-8 top-20 h-48 w-48 opacity-35" />
//           <div className="absolute right-0 top-0 h-full w-[29%] border-l border-[#6254B4]/[0.045] bg-white/15" />
//         </div>

//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute left-1/2 top-14 hidden -translate-x-1/2 select-none whitespace-nowrap text-[180px] font-black uppercase leading-none tracking-[-0.09em] text-[#6254B4]/[0.03] xl:block"
//         >
//           Directory
//         </div>

//         <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-7 lg:px-10">
//           <div className="sg-directory-animate grid border-y border-[#CEC7D8] lg:grid-cols-[1fr_auto]">
//             <div className="flex items-center gap-4 py-5 lg:pr-8">
//               <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#6254B4] text-white">
//                 <MapPin size={18} strokeWidth={2.5} />
//               </span>

//               <div>
//                 <span className="block text-[8px] font-black uppercase tracking-[0.24em] text-[#6254B4]">
//                   {LOCAL.shortName}
//                 </span>

//                 <address className="mt-1 not-italic text-xs font-bold text-[#68626E] sm:text-sm">
//                   {LOCAL.address}
//                 </address>
//               </div>
//             </div>

//             <div className="flex items-center border-t border-[#CEC7D8] py-5 lg:border-l lg:border-t-0 lg:pl-8">
//               <span className="text-[8px] font-black uppercase tracking-[0.18em] text-[#827C88]">
//                 Residential • Commercial • Inspection • Treatment
//               </span>
//             </div>
//           </div>

//           <div className="sg-directory-animate mt-14 grid gap-9 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
//             <div>
//               <span className="text-[9px] font-black uppercase tracking-[0.28em] text-[#6254B4]">
//                 Complete Service Directory
//               </span>

//               <h1
//                 id="services-directory-heading"
//                 className="mt-5 max-w-[940px] text-[45px] font-black leading-[0.93] tracking-[-0.055em] text-[#18141F] sm:text-[60px] lg:text-[76px]"
//               >
//                 Pest control services
//                 <span className="block text-[#6254B4]">
//                   for Westminster properties.
//                 </span>
//               </h1>
//             </div>

//             <div className="lg:pb-2">
//               <p className="mb-0 max-w-xl text-sm font-medium leading-7 text-[#68626E] sm:text-base sm:leading-8">
//                 Browse professional pest control services for homes, flats,
//                 landlords, offices and commercial premises across Westminster
//                 and Central London.
//               </p>

//               <div className="mt-6 flex items-center gap-3 border-t border-[#CEC7D8] pt-5">
//                 <CheckCircle2
//                   size={18}
//                   strokeWidth={2.6}
//                   className="shrink-0 text-[#6254B4]"
//                 />

//                 <span className="text-xs font-black text-[#18141F]">
//                   Inspection-led and property-focused support
//                 </span>
//               </div>
//             </div>
//           </div>

//           <div className="sg-directory-animate mt-11 border-y border-[#CEC7D8] bg-white/45 backdrop-blur-sm">
//             <div className="grid xl:grid-cols-[260px_minmax(0,1fr)]">
//               <div className="flex items-center gap-4 border-b border-[#CEC7D8] px-5 py-5 xl:border-b-0 xl:border-r">
//                 <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#18141F] text-white">
//                   <SlidersHorizontal size={18} strokeWidth={2.5} />
//                 </span>

//                 <div>
//                   <span className="block text-[8px] font-black uppercase tracking-[0.22em] text-[#6254B4]">
//                     Service Filter
//                   </span>

//                   <span className="mt-1 block text-xs font-semibold text-[#7A7480]">
//                     Select a pest category
//                   </span>
//                 </div>
//               </div>

//               <div
//                 className="grid min-w-max xl:min-w-0"
//                 style={{
//                   gridTemplateColumns: `repeat(${categories.length}, minmax(150px, 1fr))`,
//                 }}
//               >
//                 {categories.map((category, index) => {
//                   const active = selectedCategory === category;

//                   return (
//                     <button
//                       key={category}
//                       type="button"
//                       onClick={() => setSelectedCategory(category)}
//                       aria-pressed={active}
//                       className={`group relative min-h-[78px] border-r border-[#CEC7D8] px-5 text-left transition-colors duration-300 last:border-r-0 ${
//                         active
//                           ? "bg-[#6254B4] text-white"
//                           : "bg-transparent text-[#514B57] hover:bg-[#18141F] hover:text-white"
//                       }`}
//                     >
//                       <span
//                         className={`block text-[8px] font-black tracking-[0.16em] ${
//                           active
//                             ? "text-white/45"
//                             : "text-[#6254B4] group-hover:text-[#BDB6FF]"
//                         }`}
//                       >
//                         {String(index + 1).padStart(2, "0")}
//                       </span>

//                       <span className="mt-2 block text-[9px] font-black uppercase tracking-[0.13em]">
//                         {category}
//                       </span>

//                       {active && (
//                         <span className="absolute bottom-0 left-0 h-[4px] w-full bg-white" />
//                       )}
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           {featuredService && (
//             <article
//               data-title={featuredService.title}
//               onClick={goToContact}
//               onKeyDown={(event) => {
//                 if (event.key === "Enter" || event.key === " ") {
//                   event.preventDefault();
//                   goToContact();
//                 }
//               }}
//               role="button"
//               tabIndex={0}
//               className="sg-directory-animate group relative mt-14 cursor-pointer overflow-hidden border border-[#CFC8D9] bg-white shadow-[0_30px_90px_rgba(35,26,57,0.11)] lg:mt-16"
//             >
//               <div className="grid border-b border-[#D8D2DF] sm:grid-cols-[110px_1fr_auto]">
//                 <div className="flex min-h-[64px] items-center justify-center border-b border-[#D8D2DF] bg-[#6254B4] sm:border-b-0 sm:border-r">
//                   <span className="text-[18px] font-black tracking-[-0.03em] text-white">
//                     {featuredService.number}
//                   </span>
//                 </div>

//                 <div className="flex min-h-[64px] items-center px-5">
//                   <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#6254B4]">
//                     Featured Service Specification
//                   </span>
//                 </div>

//                 <div className="flex min-h-[64px] items-center border-t border-[#D8D2DF] px-5 sm:border-l sm:border-t-0">
//                   <span className="text-[9px] font-black uppercase tracking-[0.16em] text-[#89838F]">
//                     {featuredService.label}
//                   </span>
//                 </div>
//               </div>

//               <div className="grid lg:min-h-[650px] lg:grid-cols-[1.12fr_0.88fr]">
//                 <div className="sgw-directory-card-image relative min-h-[430px] overflow-hidden bg-[#18141F] sm:min-h-[540px] lg:min-h-full">
//                   <img
//                     src={featuredService.image}
//                     alt={`${featuredService.title} service in ${LOCAL.area}`}
//                     className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1100ms] group-hover:scale-[1.045]"
//                     loading="lazy"
//                   />

//                   <div className="absolute bottom-6 left-6 z-10 flex items-center gap-4 bg-white px-5 py-4 shadow-[0_18px_50px_rgba(24,20,31,0.18)] sm:bottom-8 sm:left-8">
//                     <span className="flex h-11 w-11 items-center justify-center bg-[#6254B4] text-white">
//                       {React.createElement(featuredService.icon, {
//                         size: 21,
//                         strokeWidth: 2.3,
//                       })}
//                     </span>

//                     <div>
//                       <span className="block text-[8px] font-black uppercase tracking-[0.19em] text-[#6254B4]">
//                         Pest Category
//                       </span>

//                       <span className="mt-1 block text-sm font-black text-[#18141F]">
//                         {featuredService.cat}
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="relative flex flex-col overflow-hidden bg-[#FBFAFD]">
//                   <div
//                     aria-hidden="true"
//                     className="pointer-events-none absolute -right-10 top-5 text-[150px] font-black leading-none tracking-[-0.09em] text-[#6254B4]/[0.045]"
//                   >
//                     {featuredService.number}
//                   </div>

//                   <div className="relative z-10 flex flex-1 flex-col p-6 sm:p-9 lg:p-12">
//                     <div className="flex items-center justify-between gap-5 border-b border-[#DDD7E5] pb-5">
//                       <span className="text-[9px] font-black uppercase tracking-[0.22em] text-[#6254B4]">
//                         Westminster Priority Service
//                       </span>

//                       <span className="h-2.5 w-2.5 rounded-full bg-[#6254B4] shadow-[0_0_16px_rgba(98,84,180,0.55)]" />
//                     </div>

//                     <h2 className="mt-8 max-w-[520px] text-[39px] font-black leading-[0.96] tracking-[-0.05em] text-[#18141F] sm:text-[49px] lg:text-[58px]">
//                       {featuredService.title}
//                     </h2>

//                     <p className="mb-0 mt-6 max-w-xl text-sm font-medium leading-7 text-[#68626E] sm:text-base sm:leading-8">
//                       {featuredService.description}
//                     </p>

//                     <div className="mt-8 border-y border-[#DDD7E5]">
//                       {featuredService.points.map((point, index) => (
//                         <div
//                           key={point}
//                           className="grid grid-cols-[52px_1fr] border-b border-[#DDD7E5] last:border-b-0"
//                         >
//                           <span className="flex min-h-[58px] items-center justify-center border-r border-[#DDD7E5] text-[8px] font-black tracking-[0.15em] text-[#6254B4]">
//                             {String(index + 1).padStart(2, "0")}
//                           </span>

//                           <span className="flex min-h-[58px] items-center gap-3 px-4 text-[10px] font-black uppercase leading-5 tracking-[0.11em] text-[#3A3440]">
//                             <CheckCircle2
//                               size={16}
//                               strokeWidth={2.7}
//                               className="shrink-0 text-[#6254B4]"
//                             />
//                             {point}
//                           </span>
//                         </div>
//                       ))}
//                     </div>

//                     <button
//                       type="button"
//                       onClick={(event) => {
//                         event.stopPropagation();
//                         goToContact();
//                       }}
//                       className="sgw-directory-action group/button relative mt-auto flex min-h-[64px] w-full items-center justify-between overflow-hidden bg-[#6254B4] px-6 text-[10px] font-black uppercase tracking-[0.17em] text-white"
//                     >
//                       <span className="relative z-10">Request This Service</span>
//                       <ArrowRight
//                         size={18}
//                         strokeWidth={2.5}
//                         className="relative z-10 transition-transform duration-300 group-hover/button:translate-x-1"
//                       />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </article>
//           )}

//           {secondaryServices.length > 0 && (
//             <div className="mt-7 grid gap-6 lg:grid-cols-2">
//               {secondaryServices.map((service) => {
//                 const Icon = service.icon;

//                 return (
//                   <article
//                     key={service.title}
//                     data-title={service.title}
//                     onClick={goToContact}
//                     onKeyDown={(event) => {
//                       if (event.key === "Enter" || event.key === " ") {
//                         event.preventDefault();
//                         goToContact();
//                       }
//                     }}
//                     role="button"
//                     tabIndex={0}
//                     className="sg-directory-animate group relative cursor-pointer overflow-hidden border border-[#CFC8D9] bg-white shadow-[0_22px_65px_rgba(35,26,57,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_85px_rgba(35,26,57,0.14)]"
//                   >
//                     <div className="grid grid-cols-[76px_1fr_60px] border-b border-[#D8D2DF]">
//                       <span className="flex min-h-[62px] items-center justify-center border-r border-[#D8D2DF] bg-[#18141F] text-[11px] font-black tracking-[0.14em] text-white">
//                         {service.number}
//                       </span>

//                       <span className="flex min-h-[62px] items-center px-5 text-[8px] font-black uppercase tracking-[0.19em] text-[#6254B4]">
//                         {service.label}
//                       </span>

//                       <span className="flex min-h-[62px] items-center justify-center border-l border-[#D8D2DF] bg-[#F1EDF7] text-[#6254B4] transition-colors duration-300 group-hover:bg-[#6254B4] group-hover:text-white">
//                         <Icon size={21} strokeWidth={2.3} />
//                       </span>
//                     </div>

//                     <div className="sgw-directory-card-image relative h-[330px] overflow-hidden bg-[#18141F] sm:h-[390px]">
//                       <img
//                         src={service.image}
//                         alt={`${service.title} service in ${LOCAL.area}`}
//                         className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1000ms] group-hover:scale-[1.055]"
//                         loading="lazy"
//                       />

//                       <div className="absolute bottom-5 left-5 z-10 bg-[#18141F]/85 px-4 py-3 text-white backdrop-blur-md">
//                         <span className="block text-[8px] font-black uppercase tracking-[0.19em] text-[#BDB6FF]">
//                           Category
//                         </span>

//                         <span className="mt-1 block text-xs font-black">
//                           {service.cat}
//                         </span>
//                       </div>
//                     </div>

//                     <div className="p-6 sm:p-8">
//                       <h2 className="max-w-[520px] text-[33px] font-black leading-[0.98] tracking-[-0.045em] text-[#18141F] sm:text-[40px]">
//                         {service.title}
//                       </h2>

//                       <p className="mb-0 mt-5 text-sm font-medium leading-7 text-[#6B6571]">
//                         {service.description}
//                       </p>

//                       <div className="mt-7 grid gap-px bg-[#DDD7E5] sm:grid-cols-2">
//                         {service.points.map((point, index) => (
//                           <div
//                             key={point}
//                             className="flex min-h-[58px] items-center gap-3 bg-[#F8F6FA] px-4"
//                           >
//                             <span className="text-[8px] font-black tracking-[0.15em] text-[#6254B4]">
//                               {String(index + 1).padStart(2, "0")}
//                             </span>

//                             <span className="text-[9px] font-black uppercase leading-5 tracking-[0.1em] text-[#453F4A]">
//                               {point}
//                             </span>
//                           </div>
//                         ))}
//                       </div>

//                       <button
//                         type="button"
//                         onClick={(event) => {
//                           event.stopPropagation();
//                           goToContact();
//                         }}
//                         className="sgw-directory-action group/button relative mt-7 flex min-h-[58px] w-full items-center justify-between overflow-hidden bg-[#6254B4] px-5 text-[9px] font-black uppercase tracking-[0.17em] text-white"
//                       >
//                         <span className="relative z-10">Request Treatment</span>
//                         <ArrowRight
//                           size={17}
//                           strokeWidth={2.5}
//                           className="relative z-10 transition-transform duration-300 group-hover/button:translate-x-1"
//                         />
//                       </button>
//                     </div>
//                   </article>
//                 );
//               })}
//             </div>
//           )}

//           {filteredServices.length === 0 && (
//             <div className="sg-directory-animate mt-12 border border-[#CFC8D9] bg-white">
//               <div className="grid min-h-[330px] sm:grid-cols-[110px_1fr]">
//                 <div className="flex items-center justify-center border-b border-[#D8D2DF] bg-[#18141F] text-white sm:border-b-0 sm:border-r">
//                   <SearchCheck size={30} strokeWidth={2.3} />
//                 </div>

//                 <div className="flex flex-col justify-center px-6 py-12 text-center sm:px-10 sm:text-left">
//                   <span className="text-[9px] font-black uppercase tracking-[0.22em] text-[#6254B4]">
//                     No Matching Category
//                   </span>

//                   <h2 className="mt-4 text-[30px] font-black tracking-[-0.04em] text-[#18141F] sm:text-[38px]">
//                     No services found in this category.
//                   </h2>

//                   <p className="mb-0 mt-4 max-w-xl text-sm font-medium leading-7 text-[#6A6470]">
//                     Select another category or contact our Westminster team and
//                     explain the pest signs you have noticed.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           )}

//           <div className="sg-directory-animate mt-12 border-y border-[#CFC8D9]">
//             <div className="grid lg:grid-cols-[180px_minmax(0,1fr)_280px]">
//               <div className="flex min-h-[150px] items-center justify-center border-b border-[#CFC8D9] bg-[#18141F] text-white lg:border-b-0 lg:border-r">
//                 <div className="text-center">
//                   <span className="block text-[48px] font-black leading-none tracking-[-0.07em] text-white">
//                     ?
//                   </span>
//                   <span className="mt-2 block text-[8px] font-black uppercase tracking-[0.18em] text-[#BDB6FF]">
//                     Unsure
//                   </span>
//                 </div>
//               </div>

//               <div className="flex flex-col justify-center px-6 py-8 lg:px-10">
//                 <span className="text-[8px] font-black uppercase tracking-[0.22em] text-[#6254B4]">
//                   Need help choosing a service?
//                 </span>

//                 <h2 className="mt-3 max-w-[800px] text-[29px] font-black leading-tight tracking-[-0.04em] text-[#18141F] sm:text-[37px]">
//                   Tell us what signs you have noticed around the property.
//                 </h2>

//                 <p className="mb-0 mt-4 max-w-3xl text-sm font-medium leading-7 text-[#6A6470]">
//                   Share the property type, affected area and visible pest
//                   activity. Our team can help identify a suitable next step.
//                 </p>
//               </div>

//               <div className="flex items-center border-t border-[#CFC8D9] p-6 lg:border-l lg:border-t-0">
//                 <button
//                   type="button"
//                   onClick={goToContact}
//                   className="group flex min-h-[62px] w-full items-center justify-between bg-[#6254B4] px-6 text-[9px] font-black uppercase tracking-[0.17em] text-white transition-colors duration-300 hover:bg-[#18141F]"
//                 >
//                   Request Property Support
//                   <ArrowRight
//                     size={18}
//                     strokeWidth={2.5}
//                     className="transition-transform duration-300 group-hover:translate-x-1"
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>


//       <SuperGuardTestimonials />
//     </main>
//   );
// };

// export default Services;
















// import React, { useEffect, useMemo, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Check,
//   ChevronDown,
//   Home,
//   MapPin,
//   Phone,
//   ShieldCheck,
// } from "lucide-react";

// import ServicesHeroSection from "../components/ServicesHeroSection";
// // import SuperGuardTestimonials from "../components/PrimeShieldTestimonials";

// const Services = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [openService, setOpenService] = useState(null);

//   const LOCAL = {
//     company: "Superguard Services Marylebone",
//     shortName: "Superguard Marylebone",
//     area: "Marylebone",
//     city: "London",
//     postcode: "NW1 6UB",
//     streetAddress: "49 Shroton St",
//     address: "49 Shroton St, London NW1 6UB, United Kingdom",
//     phoneDisplay: "+44 7356 236459",
//     phoneTel: "+447356236459",
//   };

//   const categories = [
//     "All",
//     "Insects",
//     "Rodents & Wildlife",
//     "Birds & Prevention",
//   ];

//   const servicesData = [
//     {
//       number: "01",
//       cat: "Insects",
//       title: `Ant Control ${LOCAL.area}`,
//       shortTitle: `Ant Control ${LOCAL.area}`,
//       image: "/images/ants.webp",
//       eyebrow: "INSECT CONTROL",
//       description:
//         `Ant infestations can become a persistent problem around kitchens, food storage areas, door frames, wall edges and other property access points. Our ${LOCAL.area} pest control service focuses on understanding where ant activity is coming from before recommending the most suitable control approach.`,
//       points: [
//         "Inspection of visible ant activity",
//         "Assessment of likely entry points",
//         "Targeted control and prevention advice",
//       ],
//     },

//     {
//       number: "02",
//       cat: "Insects",
//       title: `Bed Bug Treatment ${LOCAL.area}`,
//       shortTitle: `Bed Bug Treatment ${LOCAL.area}`,
//       image: "/images/bedbugs.webp",
//       eyebrow: "INSECT CONTROL",
//       description:
//         `Bed bugs can hide in mattress seams, bed frames, headboards, furniture and other concealed areas close to where people sleep. Our ${LOCAL.area} bed bug treatment service begins with a careful assessment of affected rooms so that the treatment approach can be planned around the level and location of activity.`,
//       points: [
//         "Detailed affected-area assessment",
//         "Common harbourage inspection",
//         "Treatment preparation and aftercare guidance",
//       ],
//     },

//     {
//       number: "03",
//       cat: "Insects",
//       title: `Carpet Moth Treatment ${LOCAL.area}`,
//       shortTitle: `Carpet Moth Treatment ${LOCAL.area}`,
//       image: "/images/moths.webp",
//       eyebrow: "FABRIC PEST CONTROL",
//       description:
//         `Carpet moth larvae can gradually damage carpets, rugs, wool fabrics, clothing and soft furnishings. Our ${LOCAL.area} carpet moth treatment service looks at the areas where larvae and adult moth activity may be present, helping identify the likely source and areas requiring attention.`,
//       points: [
//         "Inspection of carpets and fabric areas",
//         "Larvae activity assessment",
//         "Treatment and prevention guidance",
//       ],
//     },

//     {
//       number: "04",
//       cat: "Insects",
//       title: `Carpet Beetle Control ${LOCAL.area}`,
//       shortTitle: `Carpet Beetle Control ${LOCAL.area}`,
//       image: "/images/beetle.webp",
//       eyebrow: "FABRIC PEST CONTROL",
//       description:
//         `Carpet beetles and their larvae can remain hidden around skirting boards, wardrobes, storage spaces, carpets and soft furnishings. Our ${LOCAL.area} carpet beetle control service assesses likely harbourage areas and helps identify where activity may be developing.`,
//       points: [
//         "Inspection of likely harbourage areas",
//         "Larvae and activity assessment",
//         "Lifecycle prevention recommendations",
//       ],
//     },

//     {
//       number: "05",
//       cat: "Insects",
//       title: `Cockroach Control ${LOCAL.area}`,
//       shortTitle: `Cockroach Control ${LOCAL.area}`,
//       image: "/images/cockroach.webp",
//       eyebrow: "INSECT CONTROL",
//       description:
//         `Cockroaches often remain hidden behind appliances, inside cupboards, around pipework, cracks and service voids before becoming noticeable. Our ${LOCAL.area} cockroach control service focuses on locating potential harbourage areas and understanding the conditions allowing activity to continue.`,
//       points: [
//         "Kitchen and service-area inspection",
//         "Harbourage and activity assessment",
//         "Targeted control and prevention planning",
//       ],
//     },

//     {
//       number: "06",
//       cat: "Rodents & Wildlife",
//       title: `Rats & Mice Control ${LOCAL.area}`,
//       shortTitle: `Rats & Mice Control ${LOCAL.area}`,
//       image: "/images/rodents.webp",
//       eyebrow: "RODENT CONTROL",
//       description:
//         `Rats and mice can enter properties through surprisingly small gaps and may move through wall cavities, kitchens, lofts and other concealed areas. Our ${LOCAL.area} rodent control service investigates signs of activity and potential entry routes before recommending suitable control and proofing measures.`,
//       points: [
//         "Inspection for signs of rodent activity",
//         "Assessment of possible entry routes",
//         "Control and practical proofing advice",
//       ],
//     },

//     {
//       number: "07",
//       cat: "Insects",
//       title: `Flea Treatment ${LOCAL.area}`,
//       shortTitle: `Flea Treatment ${LOCAL.area}`,
//       image: "/images/flea.webp",
//       eyebrow: "INSECT CONTROL",
//       description:
//         `Fleas can remain active within carpets, upholstery, pet resting areas and other soft furnishings, making them difficult to deal with without addressing the wider affected area. Our ${LOCAL.area} flea treatment service helps identify the areas requiring attention and explains the preparation and aftercare process.`,
//       points: [
//         "Affected room and furnishing assessment",
//         "Identification of likely activity areas",
//         "Treatment preparation and aftercare guidance",
//       ],
//     },

//     {
//       number: "08",
//       cat: "Insects",
//       title: `Wasp Nest Control ${LOCAL.area}`,
//       shortTitle: `Wasp Nest Control ${LOCAL.area}`,
//       image: "/images/wasps.webp",
//       eyebrow: "STINGING INSECT CONTROL",
//       description:
//         `Wasp nests can develop around roof spaces, wall cavities, gardens, sheds and building entrances. Our ${LOCAL.area} wasp nest control service focuses on identifying the active area and selecting an appropriate treatment approach while keeping safety around the property in mind.`,
//       points: [
//         "Assessment of wasp activity",
//         "Identification of likely nest location",
//         "Suitable treatment and safety guidance",
//       ],
//     },

//     {
//       number: "09",
//       cat: "Insects",
//       title: `Bee Activity Support ${LOCAL.area}`,
//       shortTitle: `Bee Activity Support ${LOCAL.area}`,
//       image: "/images/bee.webp",
//       eyebrow: "BEE ACTIVITY",
//       description:
//         `Bees may settle around roof spaces, walls, entrances and other parts of a property where their presence can become a concern. Our ${LOCAL.area} team can assess the situation and provide practical guidance on the most appropriate next step.`,
//       points: [
//         "Assessment of bee activity location",
//         "Property risk assessment",
//         "Practical guidance for the situation",
//       ],
//     },

//     {
//       number: "10",
//       cat: "Rodents & Wildlife",
//       title: `Squirrel Control ${LOCAL.area}`,
//       shortTitle: `Squirrel Control ${LOCAL.area}`,
//       image: "/images/squirrel.webp",
//       eyebrow: "WILDLIFE CONTROL",
//       description:
//         `Squirrels can enter loft spaces and may cause damage to insulation, timber, wiring and other parts of a building. Our ${LOCAL.area} squirrel control service investigates signs of activity and potential access points before recommending suitable control and proofing measures.`,
//       points: [
//         "Loft and activity assessment",
//         "Roof and access-point inspection",
//         "Control and proofing recommendations",
//       ],
//     },

//     {
//       number: "11",
//       cat: "Birds & Prevention",
//       title: `Property Proofing ${LOCAL.area}`,
//       shortTitle: `Property Proofing ${LOCAL.area}`,
//       image: "/images/hygene.webp",
//       eyebrow: "PEST PREVENTION",
//       description:
//         `Property proofing can help reduce future pest access by addressing vulnerable gaps, damaged vents, pipe openings, roof access points and other building weaknesses. Our ${LOCAL.area} proofing service focuses on practical preventative measures suited to the property.`,
//       points: [
//         "Inspection of vulnerable access points",
//         "Assessment of building gaps",
//         "Practical pest prevention recommendations",
//       ],
//     },

//     {
//       number: "12",
//       cat: "Birds & Prevention",
//       title: `Bird Control ${LOCAL.area}`,
//       shortTitle: `Bird Control ${LOCAL.area}`,
//       image: "/images/birds.webp",
//       eyebrow: "BIRD PREVENTION",
//       description:
//         `Bird activity around roofs, ledges, balconies, commercial frontages and other building areas can create mess and ongoing maintenance issues. Our ${LOCAL.area} bird control service assesses the property and recommends practical deterrent and proofing options.`,
//       points: [
//         "Roof, ledge and property inspection",
//         "Bird activity assessment",
//         "Deterrent and proofing recommendations",
//       ],
//     },
//   ];

//   const filteredServices = useMemo(() => {
//     if (selectedCategory === "All") {
//       return servicesData;
//     }

//     return servicesData.filter(
//       (service) => service.cat === selectedCategory
//     );
//   }, [selectedCategory]);

//   const goToContact = () => {
//     navigate("/contact-us");
//   };

//   const handleServiceNavigation = (service) => {
//     navigate("/contact-us", {
//       state: {
//         service: service.title,
//       },
//     });
//   };

//   useEffect(() => {
//     const state = location.state;

//     if (!state) return;

//     if (state.category && categories.includes(state.category)) {
//       setSelectedCategory(state.category);
//     }

//     if (!state.scrollToService) return;

//     const timer = window.setTimeout(() => {
//       const searchText = String(state.scrollToService).toLowerCase();

//       const target = servicesData.find((service) => {
//         return (
//           service.title.toLowerCase().includes(searchText) ||
//           service.shortTitle.toLowerCase().includes(searchText)
//         );
//       });

//       if (target) {
//         const element = document.getElementById(
//           `service-${target.number}`
//         );

//         if (element) {
//           element.scrollIntoView({
//             behavior: "smooth",
//             block: "center",
//           });

//           setOpenService(target.number);
//         }
//       }
//     }, 600);

//     return () => window.clearTimeout(timer);
//   }, [location.state]);

//   return (
//     <main className="min-h-screen overflow-x-hidden bg-white font-sans text-[#171717]">

//       <style>{`
//         html {
//           scroll-behavior: smooth;
//         }

//         .sg-service-item {
//           transition:
//             background-color 300ms ease,
//             border-color 300ms ease,
//             box-shadow 400ms ease;
//         }

//         .sg-service-item:hover {
//           background: #fafafa;
//           box-shadow: 0 20px 60px rgba(23,23,23,.06);
//         }

//         .sg-service-image {
//           transition:
//             transform 800ms cubic-bezier(.16,1,.3,1);
//         }

//         .sg-service-item:hover .sg-service-image {
//           transform: scale(1.055);
//         }

//         .sg-service-image-wrap {
//           overflow: hidden;
//         }

//         .sg-number {
//           transition:
//             background-color 250ms ease,
//             color 250ms ease,
//             border-color 250ms ease;
//         }

//         .sg-service-item:hover .sg-number {
//           background: #6055A6;
//           border-color: #6055A6;
//           color: white;
//         }

//         .sg-filter {
//           transition:
//             background-color 250ms ease,
//             color 250ms ease,
//             border-color 250ms ease,
//             transform 250ms ease;
//         }

//         .sg-filter:hover {
//           transform: translateY(-2px);
//         }

//         .sg-open-content {
//           transition:
//             max-height 500ms cubic-bezier(.16,1,.3,1),
//             opacity 350ms ease;
//         }

//         .sg-open-arrow {
//           transition:
//             transform 300ms ease,
//             background-color 300ms ease,
//             color 300ms ease;
//         }

//         .sg-service-item:hover .sg-open-arrow {
//           background: #6055A6;
//           color: white;
//         }

//         .sg-marquee {
//           animation: sgMarquee 28s linear infinite;
//         }

//         @keyframes sgMarquee {
//           from {
//             transform: translateX(0);
//           }

//           to {
//             transform: translateX(-50%);
//           }
//         }

//         .sg-process-card {
//           transition:
//             transform 300ms ease,
//             border-color 300ms ease,
//             box-shadow 300ms ease;
//         }

//         .sg-process-card:hover {
//           transform: translateY(-5px);
//           border-color: #6055A6;
//           box-shadow: 0 25px 60px rgba(23,23,23,.07);
//         }

//         @media (prefers-reduced-motion: reduce) {
//           html {
//             scroll-behavior: auto;
//           }

//           .sg-service-item,
//           .sg-service-image,
//           .sg-filter,
//           .sg-open-content,
//           .sg-open-arrow,
//           .sg-marquee,
//           .sg-process-card {
//             transition: none;
//             animation: none;
//           }
//         }
//       `}</style>

//       {/* =========================================================
//           HERO
//       ========================================================= */}

//       <ServicesHeroSection />

//       {/* =========================================================
//           INTRO
//       ========================================================= */}

//       <section className="relative overflow-hidden bg-[#6055A6] text-white">

//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#6055A6]/20 blur-[120px]"
//         />

//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-white/[0.03] blur-[100px]"
//         />

//         <div className="relative mx-auto max-w-[1500px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">

//           <div className="grid gap-14 lg:grid-cols-[1.15fr_.85fr] lg:items-end">

//             <div>
//               <div className="mb-8 flex items-center gap-4">
//                 <span className="h-[2px] w-12 bg-[#6055A6]" />

//                 <span className="text-[10px] font-black uppercase tracking-[.3em] text-white">
//                   Pest Control Services
//                 </span>
//               </div>

//               <h1 className="max-w-6xl text-[52px] font-black leading-[.88] tracking-[-.065em] sm:text-[72px] lg:text-[100px]">
//                 Complete pest
//                 <br />
//                 <span className="text-white">
//                   control solutions.
//                 </span>
//               </h1>
//             </div>

//             <div className="lg:pb-2">

//               <p className="max-w-xl text-[15px] font-medium leading-8 text-white/55 sm:text-base">
//                 From insects and bed bugs to rodents, birds and property
//                 proofing, Superguard provides practical pest control
//                 services for homes, landlords, offices and commercial
//                 properties across {LOCAL.area}.
//               </p>

//               <div className="mt-8 flex items-center gap-4">

//                 <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15">
//                   <Check
//                     size={17}
//                     className="text-[#6055A6]"
//                     strokeWidth={3}
//                   />
//                 </span>

//                 <div>
//                   <span className="block text-[9px] font-black uppercase tracking-[.2em] text-white/30">
//                     Local coverage
//                   </span>

//                   <span className="mt-1 block text-sm font-bold text-white/85">
//                     {LOCAL.area}, London & surrounding areas
//                   </span>
//                 </div>

//               </div>

//             </div>

//           </div>
//         </div>

//         {/* MOVING SERVICE STRIP */}

//         <div className="overflow-hidden border-y border-white/[0.08]">

//           <div className="sg-marquee flex w-max">

//             {[
//               "ANT CONTROL",
//               "BED BUG TREATMENT",
//               "CARPET MOTH",
//               "CARPET BEETLES",
//               "COCKROACH CONTROL",
//               "RATS & MICE",
//               "FLEA TREATMENT",
//               "WASP CONTROL",
//               "SQUIRREL CONTROL",
//               "BIRD CONTROL",
//               "PROPERTY PROOFING",
//             ].map((item, index) => (
//               <div
//                 key={`first-${index}`}
//                 className="flex items-center gap-7 px-7 py-5"
//               >
//                 <span className="h-1.5 w-1.5 rounded-full bg-[#6055A6]" />

//                 <span className="text-[10px] font-black tracking-[.2em] text-white/45">
//                   {item}
//                 </span>
//               </div>
//             ))}

//             {[
//               "ANT CONTROL",
//               "BED BUG TREATMENT",
//               "CARPET MOTH",
//               "CARPET BEETLES",
//               "COCKROACH CONTROL",
//               "RATS & MICE",
//               "FLEA TREATMENT",
//               "WASP CONTROL",
//               "SQUIRREL CONTROL",
//               "BIRD CONTROL",
//               "PROPERTY PROOFING",
//             ].map((item, index) => (
//               <div
//                 key={`second-${index}`}
//                 className="flex items-center gap-7 px-7 py-5"
//               >
//                 <span className="h-1.5 w-1.5 rounded-full bg-[#6055A6]" />

//                 <span className="text-[10px] font-black tracking-[.2em] text-white/45">
//                   {item}
//                 </span>
//               </div>
//             ))}

//           </div>
//         </div>

//       </section>

//       {/* =========================================================
//           SERVICES DIRECTORY
//       ========================================================= */}

//       <section
//         id="services-list"
//         className="relative overflow-hidden bg-white"
//       >

//         <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">

//           {/* HEADER */}

//           <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-end">

//             <div>

//               <span className="text-[10px] font-black uppercase tracking-[.3em] text-[#6055A6]">
//                 01 — Service Directory
//               </span>

//               <h2 className="mt-6 text-[50px] font-black leading-[.88] tracking-[-.06em] sm:text-[72px]">
//                 Services built
//                 <br />
//                 <span className="text-[#6055A6]">
//                   around your property.
//                 </span>
//               </h2>

//             </div>

//             <div className="lg:pb-1">

//               <p className="max-w-2xl text-sm font-medium leading-8 text-[#686868] sm:text-base">
//                 Explore our pest control services available across{" "}
//                 <strong className="font-black text-[#171717]">
//                   {LOCAL.area}
//                 </strong>
//                 . Open any service to see what the service involves,
//                 what we look at and how to request help.
//               </p>

//               {/* FILTER */}

//               <div className="mt-8 flex gap-2 overflow-x-auto pb-2">

//                 {categories.map((category) => {
//                   const active = selectedCategory === category;

//                   return (
//                     <button
//                       key={category}
//                       type="button"
//                       onClick={() => {
//                         setSelectedCategory(category);
//                         setOpenService(null);
//                       }}
//                       className={`sg-filter shrink-0 rounded-full border px-5 py-3 text-[9px] font-black uppercase tracking-[.14em] ${
//                         active
//                           ? "border-[#6055A6] bg-[#6055A6] text-white"
//                           : "border-[#DADADA] bg-white text-[#555] hover:border-[#6055A6] hover:text-[#6055A6]"
//                       }`}
//                     >
//                       {category}
//                     </button>
//                   );
//                 })}

//               </div>

//             </div>

//           </div>

//           {/* SERVICE LIST */}

//           <div className="mt-16 border-t border-[#E3E3E3]">

//             {filteredServices.map((service) => {
//               const isOpen = openService === service.number;

//               return (
//                 <article
//                   key={service.number}
//                   id={`service-${service.number}`}
//                   className="sg-service-item border-b border-[#E3E3E3]"
//                 >

//                   {/* SERVICE HEADER */}

//                   <button
//                     type="button"
//                     onClick={() =>
//                       setOpenService(
//                         isOpen ? null : service.number
//                       )
//                     }
//                     className="w-full cursor-pointer text-left"
//                     aria-expanded={isOpen}
//                   >

//                     <div className="grid gap-7 py-8 md:grid-cols-[75px_1fr_300px_64px] md:items-center lg:gap-10 lg:py-10">

//                       {/* NUMBER */}

//                       <div>
//                         <span className="sg-number flex h-12 w-12 items-center justify-center rounded-full border border-[#D7D7D7] text-[10px] font-black text-[#777]">
//                           {service.number}
//                         </span>
//                       </div>

//                       {/* TITLE */}

//                       <div>

//                         <span className="block text-[8px] font-black uppercase tracking-[.25em] text-[#6055A6]">
//                           {service.eyebrow}
//                         </span>

//                         <h3 className="mt-3 text-[30px] font-black leading-[.94] tracking-[-.05em] text-[#171717] sm:text-[40px]">
//                           {service.shortTitle}
//                         </h3>

//                         <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-[#737373]">
//                           {service.description}
//                         </p>

//                       </div>

//                       {/* IMAGE */}

//                       <div className="sg-service-image-wrap relative hidden h-[155px] rounded-2xl bg-[#171717] md:block">

//                         <img
//                           src={service.image}
//                           alt={`${service.title} service in ${LOCAL.area}`}
//                           className="sg-service-image h-full w-full object-cover"
//                           loading="lazy"
//                         />

//                         <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />

//                         <span className="absolute bottom-4 left-4 rounded-full bg-white px-3 py-2 text-[8px] font-black uppercase tracking-[.16em] text-[#171717]">
//                           {LOCAL.area}
//                         </span>

//                       </div>

//                       {/* ARROW */}

//                       <div className="flex justify-end">

//                         <span className="sg-open-arrow flex h-12 w-12 items-center justify-center rounded-full bg-[#F2F2F2] text-[#171717]">

//                           {isOpen ? (
//                             <ChevronDown size={18} />
//                           ) : (
//                             <ArrowUpRight size={18} />
//                           )}

//                         </span>

//                       </div>

//                     </div>

//                   </button>

//                   {/* OPEN CONTENT */}

//                   <div
//                     className={`sg-open-content overflow-hidden ${
//                       isOpen
//                         ? "max-h-[1000px] opacity-100"
//                         : "max-h-0 opacity-0"
//                     }`}
//                   >

//                     <div className="pb-10 md:pb-14">

//                       <div className="grid gap-8 md:grid-cols-[75px_1fr] lg:gap-10">

//                         <div />

//                         <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr]">

//                           {/* MOBILE IMAGE */}

//                           <div className="relative h-[260px] overflow-hidden rounded-2xl md:hidden">

//                             <img
//                               src={service.image}
//                               alt={`${service.title} in ${LOCAL.area}`}
//                               className="h-full w-full object-cover"
//                             />

//                           </div>

//                           {/* DETAILS */}

//                           <div>

//                             <span className="text-[9px] font-black uppercase tracking-[.22em] text-[#6055A6]">
//                               Service Details
//                             </span>

//                             <p className="mt-5 text-sm font-medium leading-8 text-[#666] sm:text-base">
//                               {service.description}
//                             </p>

//                             <p className="mt-5 text-sm font-medium leading-8 text-[#666] sm:text-base">
//                               Our approach is focused on understanding
//                               the activity and the areas where pests may
//                               be entering, hiding or spreading. We then
//                               explain the practical next steps for your
//                               property and the type of control required.
//                             </p>

//                             <button
//                               type="button"
//                               onClick={(event) => {
//                                 event.stopPropagation();
//                                 handleServiceNavigation(service);
//                               }}
//                               className="mt-8 inline-flex items-center gap-4 rounded-xl bg-[#171717] px-6 py-4 text-[9px] font-black uppercase tracking-[.17em] text-white transition hover:bg-[#6055A6]"
//                             >
//                               Request {service.shortTitle}

//                               <ArrowRight size={15} />
//                             </button>

//                           </div>

//                           {/* WHAT WE LOOK AT */}

//                           <div className="border-t border-[#E2E2E2] pt-7 lg:border-l lg:border-t-0 lg:pl-9">

//                             <span className="text-[9px] font-black uppercase tracking-[.22em] text-[#6055A6]">
//                               What we look at
//                             </span>

//                             <div className="mt-6 space-y-4">

//                               {service.points.map((point) => (
//                                 <div
//                                   key={point}
//                                   className="flex items-start gap-4 border-b border-[#E8E8E8] pb-4"
//                                 >

//                                   <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#6055A6] text-white">
//                                     <Check
//                                       size={12}
//                                       strokeWidth={3}
//                                     />
//                                   </span>

//                                   <span className="text-xs font-bold leading-6 text-[#383838]">
//                                     {point}
//                                   </span>

//                                 </div>
//                               ))}

//                             </div>

//                             <div className="mt-8 rounded-2xl bg-[#171717] p-6">

//                               <span className="text-[8px] font-black uppercase tracking-[.2em] text-white/35">
//                                 Local service
//                               </span>

//                               <p className="mt-2 text-sm font-bold text-white">
//                                 {service.shortTitle}
//                               </p>

//                               <p className="mt-2 text-xs font-medium leading-6 text-white/45">
//                                 Professional pest control support in{" "}
//                                 {LOCAL.area}, London.
//                               </p>

//                             </div>

//                           </div>

//                         </div>

//                       </div>

//                     </div>

//                   </div>

//                 </article>
//               );
//             })}

//           </div>

//           {/* COUNT */}

//           <div className="mt-8 flex flex-col gap-4 border-t border-[#E3E3E3] pt-6 sm:flex-row sm:items-center sm:justify-between">

//             <span className="text-[9px] font-black uppercase tracking-[.2em] text-[#888]">
//               Showing {filteredServices.length} services
//             </span>

//             <button
//               type="button"
//               onClick={() => {
//                 setSelectedCategory("All");
//                 setOpenService(null);
//               }}
//               className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[.18em] text-[#171717] transition hover:text-[#6055A6]"
//             >
//               View all services
//               <ArrowRight size={14} />
//             </button>

//           </div>

//         </div>

//       </section>

//       {/* =========================================================
//           WHY SUPERGUARD
//       ========================================================= */}

//       <section className="bg-[#F7F7F7]">

//         <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">

//           <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr]">

//             <div>

//               <span className="text-[10px] font-black uppercase tracking-[.3em] text-[#6055A6]">
//                 02 — Our Approach
//               </span>

//               <h2 className="mt-6 text-[50px] font-black leading-[.88] tracking-[-.06em] sm:text-[72px]">
//                 Clear process.
//                 <br />
//                 <span className="text-[#6055A6]">
//                   Practical action.
//                 </span>
//               </h2>

//               <p className="mt-7 max-w-lg text-sm font-medium leading-8 text-[#6E6E6E]">
//                 Pest problems can have different causes. Our approach
//                 starts by understanding the situation at the property,
//                 then identifying the most sensible next step.
//               </p>

//             </div>

//             <div className="grid gap-4 sm:grid-cols-2">

//               {[
//                 {
//                   number: "01",
//                   title: "Inspect",
//                   text: "We assess visible signs, activity areas, possible harbourage and property access points.",
//                 },
//                 {
//                   number: "02",
//                   title: "Identify",
//                   text: "We consider the type of pest, location of activity and conditions that may be supporting it.",
//                 },
//                 {
//                   number: "03",
//                   title: "Control",
//                   text: "We recommend a suitable control approach based on the property and the pest activity identified.",
//                 },
//                 {
//                   number: "04",
//                   title: "Prevent",
//                   text: "Where appropriate, we highlight practical measures that can help reduce the chance of future activity.",
//                 },
//               ].map((item) => (
//                 <div
//                   key={item.number}
//                   className="sg-process-card rounded-2xl border border-[#E1E1E1] bg-white p-7 sm:p-8"
//                 >

//                   <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6055A6] text-[9px] font-black text-white">
//                     {item.number}
//                   </span>

//                   <h3 className="mt-7 text-2xl font-black tracking-[-.04em]">
//                     {item.title}
//                   </h3>

//                   <p className="mt-4 text-sm leading-7 text-[#777]">
//                     {item.text}
//                   </p>

//                 </div>
//               ))}

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* =========================================================
//           CONTACT CTA
//       ========================================================= */}

//       <section className="bg-[#171717] text-white">

//         <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">

//           <div className="relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#202020]">

//             <div
//               aria-hidden="true"
//               className="pointer-events-none absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-[#6055A6]/20 blur-[120px]"
//             />

//             <div className="relative grid lg:grid-cols-[1.15fr_.85fr]">

//               {/* LEFT */}

//               <div className="p-8 sm:p-12 lg:p-16">

//                 <span className="text-[9px] font-black uppercase tracking-[.28em] text-[#6055A6]">
//                   Serving {LOCAL.area}
//                 </span>

//                 <h2 className="mt-6 max-w-3xl text-[48px] font-black leading-[.88] tracking-[-.055em] sm:text-[68px]">
//                   Need pest
//                   <br />
//                   control?
//                   <br />
//                   <span className="text-[#6055A6]">
//                     Talk to us.
//                   </span>
//                 </h2>

//                 <p className="mt-7 max-w-xl text-sm font-medium leading-8 text-white/50">
//                   Tell us what you have noticed around your property.
//                   Our team can help you understand the next practical
//                   step for your situation.
//                 </p>

//                 <div className="mt-9 flex flex-col gap-3 sm:flex-row">

//                   <button
//                     type="button"
//                     onClick={goToContact}
//                     className="group flex min-h-[58px] items-center justify-between gap-10 rounded-xl bg-[#6055A6] px-6 text-[9px] font-black uppercase tracking-[.17em] text-white transition hover:bg-white hover:text-[#171717]"
//                   >
//                     Request a service

//                     <ArrowRight
//                       size={16}
//                       className="transition group-hover:translate-x-1"
//                     />
//                   </button>

//                   <a
//                     href={`tel:${LOCAL.phoneTel}`}
//                     className="group flex min-h-[58px] items-center gap-3 rounded-xl border border-white/15 px-6 text-[9px] font-black uppercase tracking-[.17em] text-white transition hover:border-[#6055A6] hover:bg-[#6055A6]"
//                   >
//                     <Phone size={15} />

//                     {LOCAL.phoneDisplay}

//                     <ArrowUpRight
//                       size={15}
//                       className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
//                     />
//                   </a>

//                 </div>

//               </div>

//               {/* RIGHT */}

//               <div className="border-t border-white/[0.08] bg-white/[0.025] lg:border-l lg:border-t-0">

//                 <div className="divide-y divide-white/[0.08]">

//                   <div className="p-8 sm:p-10 lg:p-12">

//                     <div className="flex gap-5">

//                       <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/[0.07] text-[#6055A6]">
//                         <MapPin size={18} />
//                       </span>

//                       <div>

//                         <span className="text-[8px] font-black uppercase tracking-[.2em] text-white/30">
//                           Local area
//                         </span>

//                         <p className="mt-2 text-sm font-bold leading-6 text-white/80">
//                           {LOCAL.address}
//                         </p>

//                       </div>

//                     </div>

//                   </div>

//                   <div className="p-8 sm:p-10 lg:p-12">

//                     <div className="flex gap-5">

//                       <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/[0.07] text-[#6055A6]">
//                         <Home size={18} />
//                       </span>

//                       <div>

//                         <span className="text-[8px] font-black uppercase tracking-[.2em] text-white/30">
//                           Property types
//                         </span>

//                         <p className="mt-2 text-sm font-bold leading-6 text-white/80">
//                           Homes, landlords, offices & commercial properties
//                         </p>

//                       </div>

//                     </div>

//                   </div>

//                   <div className="p-8 sm:p-10 lg:p-12">

//                     <div className="flex gap-5">

//                       <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/[0.07] text-[#6055A6]">
//                         <ShieldCheck size={18} />
//                       </span>

//                       <div>

//                         <span className="text-[8px] font-black uppercase tracking-[.2em] text-white/30">
//                           Service approach
//                         </span>

//                         <p className="mt-2 text-sm font-bold leading-6 text-white/80">
//                           Inspection-led pest control support
//                         </p>

//                       </div>

//                     </div>

//                   </div>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* =========================================================
//           TESTIMONIALS
//       ========================================================= */}

//       {/* <SuperGuardTestimonials /> */}

//     </main>
//   );
// };

// export default Services;















// import React, { useEffect, useMemo, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Mail,
//   MapPin,
//   Phone,
//   ShieldCheck,
// } from "lucide-react";
// import ServicesHeroSection from "../components/ServicesHeroSection";

// const Services = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [selectedCategory, setSelectedCategory] = useState("All");

//   /* =====================================================
//      LOCAL BUSINESS DATA
//   ===================================================== */

//   const LOCAL = {
//     company: "Superguard Services West Wickham",
//     shortName: "Superguard West Wickham",
//     area: "West Wickham",
//     city: "London",
//     postcode: "BR4 0QL",
//     streetAddress: "16 Ash Grove",
//     address: "16 Ash Grove, West Wickham BR4 0QL",
//     phoneDisplay: "07356 270867",
//     phoneTel: "+447356270867",
//     email: "info@superguardwestwickham.uk",
//   };

//   /* =====================================================
//      CATEGORIES
//   ===================================================== */

//   const categories = [
//     "All",
//     "Insects",
//     "Rodents & Wildlife",
//     "Birds & Prevention",
//   ];

//   /* =====================================================
//      SERVICES
//   ===================================================== */

//   const servicesData = [
//     {
//       number: "01",
//       cat: "Insects",
//       title: `Ant Control ${LOCAL.area}`,
//       shortTitle: `Ant Control ${LOCAL.area}`,
//       image: "/images/ants.webp",
//       eyebrow: "INSECT CONTROL",
//       description: `Professional ant control for homes and properties in ${LOCAL.area}, helping identify ant activity, access points and the most suitable way to control the infestation.`,
//     },

//     {
//       number: "02",
//       cat: "Insects",
//       title: `Bed Bug Treatment ${LOCAL.area}`,
//       shortTitle: `Bed Bug Treatment ${LOCAL.area}`,
//       image: "/images/bedbugs.webp",
//       eyebrow: "INSECT CONTROL",
//       description:
//         "Targeted bed bug treatment for affected bedrooms and living areas, with a careful assessment of common hiding places and practical preparation guidance.",
//     },

//     {
//       number: "03",
//       cat: "Insects",
//       title: `Carpet Moth Treatment ${LOCAL.area}`,
//       shortTitle: `Carpet Moth Treatment ${LOCAL.area}`,
//       image: "/images/moths.webp",
//       eyebrow: "FABRIC PEST CONTROL",
//       description:
//         "Professional carpet moth treatment designed to address moth activity and larvae affecting carpets, rugs, clothing, wool fabrics and soft furnishings.",
//     },

//     {
//       number: "04",
//       cat: "Insects",
//       title: `Carpet Beetle Control ${LOCAL.area}`,
//       shortTitle: `Carpet Beetle Control ${LOCAL.area}`,
//       image: "/images/beetle.webp",
//       eyebrow: "FABRIC PEST CONTROL",
//       description:
//         "Carpet beetle control for properties experiencing larvae or adult beetle activity around carpets, wardrobes, skirting boards and soft furnishings.",
//     },

//     {
//       number: "05",
//       cat: "Insects",
//       title: `Cockroach Control ${LOCAL.area}`,
//       shortTitle: `Cockroach Control ${LOCAL.area}`,
//       image: "/images/cockroach.webp",
//       eyebrow: "INSECT CONTROL",
//       description:
//         "Professional cockroach control focused on locating activity around kitchens, cupboards, appliances, pipework and other potential harbourage areas.",
//     },

//     {
//       number: "06",
//       cat: "Rodents & Wildlife",
//       title: `Rats & Mice Control ${LOCAL.area}`,
//       shortTitle: `Rats & Mice Control ${LOCAL.area}`,
//       image: "/images/rodents.webp",
//       eyebrow: "RODENT CONTROL",
//       description:
//         "Reliable rats and mice control for homes and businesses, including assessment of rodent activity, possible entry points and practical prevention measures.",
//     },

//     {
//       number: "07",
//       cat: "Insects",
//       title: `Flea Treatment ${LOCAL.area}`,
//       shortTitle: `Flea Treatment ${LOCAL.area}`,
//       image: "/images/flea.webp",
//       eyebrow: "INSECT CONTROL",
//       description:
//         "Professional flea treatment for affected rooms, carpets, upholstery and other areas where flea activity may be present.",
//     },

//     {
//       number: "08",
//       cat: "Insects",
//       title: `Wasp Nest Control ${LOCAL.area}`,
//       shortTitle: `Wasp Nest Control ${LOCAL.area}`,
//       image: "/images/wasps.webp",
//       eyebrow: "STINGING INSECT CONTROL",
//       description:
//         "Wasp nest control for nests around roofs, wall cavities, gardens, sheds and property entrances, with treatment based on the location and level of activity.",
//     },

//     {
//       number: "09",
//       cat: "Insects",
//       title: `Bee Activity Support ${LOCAL.area}`,
//       shortTitle: `Bee Activity Support ${LOCAL.area}`,
//       image: "/images/bee.webp",
//       eyebrow: "BEE ACTIVITY",
//       description:
//         "Professional assessment and practical guidance for bee activity around roofs, walls, entrances and other parts of a property.",
//     },

//     {
//       number: "10",
//       cat: "Rodents & Wildlife",
//       title: `Squirrel Control ${LOCAL.area}`,
//       shortTitle: `Squirrel Control ${LOCAL.area}`,
//       image: "/images/squirrel.webp",
//       eyebrow: "WILDLIFE CONTROL",
//       description:
//         "Squirrel control for properties experiencing activity in lofts, roofs and other concealed areas, with attention to potential access points and property damage.",
//     },

//     {
//       number: "11",
//       cat: "Birds & Prevention",
//       title: `Property Proofing ${LOCAL.area}`,
//       shortTitle: `Property Proofing ${LOCAL.area}`,
//       image: "/images/hygene.webp",
//       eyebrow: "PEST PREVENTION",
//       description:
//         "Practical property proofing to help reduce pest access by addressing vulnerable gaps, openings, vents, roof access points and other building weaknesses.",
//     },

//     {
//       number: "12",
//       cat: "Birds & Prevention",
//       title: `Bird Control ${LOCAL.area}`,
//       shortTitle: `Bird Control ${LOCAL.area}`,
//       image: "/images/birds.webp",
//       eyebrow: "BIRD PREVENTION",
//       description:
//         "Professional bird control solutions for roofs, ledges, balconies, commercial properties and other areas affected by bird activity.",
//     },
//   ];

//   /* =====================================================
//      FILTER SERVICES
//   ===================================================== */

//   const filteredServices = useMemo(() => {
//     if (selectedCategory === "All") {
//       return servicesData;
//     }

//     return servicesData.filter(
//       (service) => service.cat === selectedCategory
//     );
//   }, [selectedCategory]);

//   /* =====================================================
//      CONTACT NAVIGATION
//   ===================================================== */

//   const goToContact = () => {
//     navigate("/contact-us");
//   };

//   const handleServiceNavigation = (service) => {
//     navigate("/contact-us", {
//       state: {
//         service: service.title,
//       },
//     });
//   };

//   /* =====================================================
//      CLICK ANYWHERE ON SERVICE
//   ===================================================== */

//   const handleServiceClick = (service) => {
//     handleServiceNavigation(service);
//   };

//   const handleServiceKeyDown = (event, service) => {
//     if (event.key === "Enter" || event.key === " ") {
//       event.preventDefault();
//       handleServiceNavigation(service);
//     }
//   };

//   /* =====================================================
//      PRESERVE EXISTING SCROLL BEHAVIOUR
//   ===================================================== */

//   useEffect(() => {
//     const state = location.state;

//     if (!state) return;

//     if (state.category && categories.includes(state.category)) {
//       setSelectedCategory(state.category);
//     }

//     if (!state.scrollToService) return;

//     const timer = window.setTimeout(() => {
//       const searchText = String(state.scrollToService).toLowerCase();

//       const target = servicesData.find((service) => {
//         return (
//           service.title.toLowerCase().includes(searchText) ||
//           service.shortTitle.toLowerCase().includes(searchText)
//         );
//       });

//       if (target) {
//         const element = document.getElementById(
//           `service-${target.number}`
//         );

//         if (element) {
//           element.scrollIntoView({
//             behavior: "smooth",
//             block: "center",
//           });
//         }
//       }
//     }, 600);

//     return () => window.clearTimeout(timer);
//   }, [location.state]);

//   return (
//     <div className="bg-[#111111] text-white">

//       {/* =====================================================
//           HERO
//       ===================================================== */}

//       <ServicesHeroSection />

    

//       {/* =====================================================
//           SERVICE DIRECTORY
//       ===================================================== */}

//       <section
//         id="services-list"
//         className="bg-[#f5f5f3] text-[#111111]"
//       >

//         <div className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">

//           {/* DIRECTORY HEADER */}

//           <div className="grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-end">

//             <div>

//               <span className="text-[10px] font-black uppercase tracking-[.28em] text-[#6055A6]">
//                 01 — The Service Catalogue
//               </span>

//               <h2 className="mt-6 max-w-5xl text-[55px] font-black leading-[.84] tracking-[-.07em] sm:text-[78px] lg:text-[105px]">
//                 One problem.
//                 <br />

//                 <span className="text-[#6055A6]">
//                   The right response.
//                 </span>
//               </h2>

//             </div>

//             <div>

//               <p className="max-w-xl text-sm font-medium leading-8 text-[#666666] sm:text-base">
//                 Explore our professional pest control
//                 services for homes, landlords, businesses
//                 and commercial properties throughout{" "}

//                 <span className="font-bold text-[#111111]">
//                   {LOCAL.area}
//                 </span>
//                 .
//               </p>

//               {/* FILTERS */}

//               <div className="mt-8 flex flex-wrap gap-2">

//                 {categories.map((category) => {

//                   const active =
//                     selectedCategory === category;

//                   return (
//                     <button
//                       key={category}
//                       type="button"
//                       onClick={() =>
//                         setSelectedCategory(category)
//                       }
//                       className={`sg-filter rounded-full border px-5 py-3 text-[9px] font-black uppercase tracking-[.14em] ${
//                         active
//                           ? "border-[#6055A6] bg-[#6055A6] text-white"
//                           : "border-[#d8d8d5] bg-white text-[#555555] hover:border-[#6055A6] hover:text-[#6055A6]"
//                       }`}
//                     >
//                       {category}
//                     </button>
//                   );

//                 })}

//               </div>

//             </div>

//           </div>

//           {/* =================================================
//               SERVICES
//           ================================================= */}

//           <div className="mt-24 border-t border-[#d8d8d5]">

//             {filteredServices.map((service, index) => {

//               const reversed = index % 2 !== 0;

//               return (

//                 <article
//                   key={service.number}
//                   id={`service-${service.number}`}
//                   onClick={() =>
//                     handleServiceClick(service)
//                   }
//                   onKeyDown={(event) =>
//                     handleServiceKeyDown(event, service)
//                   }
//                   role="button"
//                   tabIndex={0}
//                   aria-label={`Book ${service.title}`}
//                   className="sg-service-row cursor-pointer bg-[#f5f5f3] transition-colors duration-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#6055A6]"
//                 >

//                   <div
//                     className={`mx-auto grid max-w-[1600px] items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[.9fr_380px_1fr] lg:gap-16 lg:px-12 lg:py-28 xl:grid-cols-[1fr_400px_1fr] ${
//                       reversed
//                         ? "lg:[&>.sg-service-copy]:order-3 lg:[&>.sg-service-visual]:order-2 lg:[&>.sg-service-side]:order-1"
//                         : ""
//                     }`}
//                   >

//                     {/* =================================================
//                         DESCRIPTION
//                     ================================================= */}

//                     <div className="sg-service-copy relative">

//                       <span className="sg-service-number pointer-events-none absolute -left-4 -top-20 hidden text-[190px] font-black leading-none tracking-[-.12em] text-[#dededb] lg:block">
//                         {service.number}
//                       </span>

//                       <div className="relative">

//                         <div className="mb-7 flex items-center gap-4">

//                           <span className="h-px w-10 bg-[#6055A6]" />

//                           <span className="text-[9px] font-black uppercase tracking-[.25em] text-[#6055A6]">
//                             {service.cat}
//                           </span>

//                         </div>

//                         <div className="sg-description pl-7">

//                           <span className="text-[9px] font-black uppercase tracking-[.24em] text-[#888888]">
//                             About this service
//                           </span>

//                           <p className="mt-6 max-w-lg text-[15px] font-medium leading-8 text-[#666666]">
//                             {service.description}
//                           </p>

//                           <div className="mt-10 flex items-center gap-4">

//                             <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111111] text-[9px] font-black text-white">
//                               {service.number}
//                             </span>

//                             <span className="text-[8px] font-black uppercase tracking-[.2em] text-[#999999]">
//                               Professional pest control
//                             </span>

//                           </div>

//                         </div>

//                       </div>

//                     </div>

//                     {/* =================================================
//                         CENTER IMAGE + TITLE
//                     ================================================= */}

//                     <div className="sg-service-visual flex flex-col items-center justify-center">

//                       <div className="relative">

//                         {/* OUTER RINGS */}

//                         <div className="sg-round-image-ring" />

//                         <div className="sg-round-image-ring-two" />

//                         {/* IMAGE */}

//                         <div className="sg-round-image-wrap">

//                           <img
//                             src={service.image}
//                             alt={`${service.title} service in ${LOCAL.area}`}
//                             className="sg-round-image"
//                             loading="lazy"
//                           />

//                           <div className="sg-round-image-overlay" />

//                           {/* NUMBER */}

//                           <span className="sg-image-number absolute left-2 top-2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[9px] font-black text-[#111111] shadow-lg">
//                             {service.number}
//                           </span>

//                           {/* ARROW */}

//                           <span className="absolute bottom-4 right-4 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#111111] shadow-xl">
//                             <ArrowUpRight size={19} />
//                           </span>

//                         </div>

//                       </div>

//                       {/* TITLE */}

//                       <div className="mt-14 max-w-[420px] text-center">

//                         <span className="text-[9px] font-black uppercase tracking-[.28em] text-[#6055A6]">
//                           {service.eyebrow}
//                         </span>

//                         <h3 className="sg-service-title mt-5 text-[38px] font-black leading-[.88] tracking-[-.065em] text-[#111111] sm:text-[46px]">
//                           {service.shortTitle}
//                         </h3>

//                         {/* BOOK SERVICE */}

//                         <button
//                           type="button"
//                           onClick={(event) => {
//                             event.stopPropagation();
//                             handleServiceNavigation(service);
//                           }}
//                           className="sg-book-button group mt-8 inline-flex items-center gap-5 bg-[#111111] px-7 py-5 text-[9px] font-black uppercase tracking-[.18em] text-white hover:bg-[#6055A6]"
//                         >
//                           Book This Service

//                           <ArrowRight
//                             size={15}
//                             className="transition group-hover:translate-x-1"
//                           />
//                         </button>

//                       </div>

//                     </div>

//                     {/* =================================================
//                         RIGHT SIDE — SIMPLE SERVICE INFO
//                     ================================================= */}

//                     <div className="sg-service-side">

//                       <div className="border-t border-[#d5d5d1]">

//                         <div className="flex items-center justify-between border-b border-[#d5d5d1] py-5">

//                           <span className="text-[9px] font-black uppercase tracking-[.22em] text-[#6055A6]">
//                             Service
//                           </span>

//                           <span className="text-[9px] font-black text-[#999999]">
//                             {service.number} / 12
//                           </span>

//                         </div>

//                         <div className="py-8">

//                           <p className="text-sm font-medium leading-8 text-[#666666]">
//                             {service.description}
//                           </p>

//                         </div>

//                         <div className="border-t border-[#d5d5d1] pt-7">

//                           <span className="text-[9px] font-black uppercase tracking-[.22em] text-[#888888]">
//                             Need help?
//                           </span>

//                           <p className="mt-4 text-[13px] font-black leading-6 text-[#222222]">
//                             Get in touch with our local team to
//                             discuss your pest problem.
//                           </p>

//                         </div>

//                         {/* CTA */}

//                         <button
//                           type="button"
//                           onClick={(event) => {
//                             event.stopPropagation();
//                             handleServiceNavigation(service);
//                           }}
//                           className="group mt-8 flex w-full items-center justify-between border-b-2 border-[#111111] pb-5 text-left transition hover:border-[#6055A6]"
//                         >

//                           <span className="text-[9px] font-black uppercase tracking-[.18em] text-[#111111] transition group-hover:text-[#6055A6]">
//                             Book this service
//                           </span>

//                           <ArrowRight
//                             size={17}
//                             className="transition group-hover:translate-x-2 group-hover:text-[#6055A6]"
//                           />

//                         </button>

//                       </div>

//                     </div>

//                   </div>

//                 </article>

//               );

//             })}

//           </div>

//           {/* COUNT */}

//           <div className="mt-8 flex flex-col gap-4 border-t border-[#d8d8d5] pt-6 sm:flex-row sm:items-center sm:justify-between">

//             <span className="text-[9px] font-black uppercase tracking-[.2em] text-[#888888]">
//               Showing {filteredServices.length} services
//             </span>

//             {selectedCategory !== "All" && (

//               <button
//                 type="button"
//                 onClick={() =>
//                   setSelectedCategory("All")
//                 }
//                 className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[.17em] text-[#111111] transition hover:text-[#6055A6]"
//               >
//                 View all services

//                 <ArrowRight size={14} />
//               </button>

//             )}

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           LOCAL COVERAGE
//       ===================================================== */}

//       <section className="bg-white text-[#111111]">

//         <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">

//           <div className="grid gap-16 lg:grid-cols-[.9fr_1.1fr]">

//             <div>

//               <span className="text-[10px] font-black uppercase tracking-[.28em] text-[#6055A6]">
//                 02 — Local Coverage
//               </span>

//               <h2 className="mt-6 text-[55px] font-black leading-[.86] tracking-[-.065em] sm:text-[75px]">
//                 Local team.
//                 <br />

//                 <span className="text-[#6055A6]">
//                   Local service.
//                 </span>
//               </h2>

//               <p className="mt-7 max-w-lg text-sm font-medium leading-8 text-[#666666]">
//                 Superguard Services West Wickham provides
//                 professional pest control support for homes,
//                 landlords, offices and commercial properties
//                 throughout {LOCAL.area} and surrounding areas.
//               </p>

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="mt-8 inline-flex items-center gap-4 bg-[#111111] px-7 py-5 text-[9px] font-black uppercase tracking-[.18em] text-white transition hover:bg-[#6055A6]"
//               >
//                 <Phone size={15} />

//                 Call {LOCAL.phoneDisplay}
//               </a>

//             </div>

//             <div className="border-t border-[#ddddda]">

//               {/* ADDRESS */}

//               <div className="grid gap-5 border-b border-[#ddddda] py-8 sm:grid-cols-[170px_1fr]">

//                 <div className="flex items-center gap-3 text-[#6055A6]">

//                   <MapPin size={17} />

//                   <span className="text-[9px] font-black uppercase tracking-[.2em]">
//                     Address
//                   </span>

//                 </div>

//                 <p className="text-lg font-black leading-7">
//                   {LOCAL.address}
//                 </p>

//               </div>

//               {/* PHONE */}

//               <div className="grid gap-5 border-b border-[#ddddda] py-8 sm:grid-cols-[170px_1fr]">

//                 <div className="flex items-center gap-3 text-[#6055A6]">

//                   <Phone size={17} />

//                   <span className="text-[9px] font-black uppercase tracking-[.2em]">
//                     Phone
//                   </span>

//                 </div>

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="text-lg font-black transition hover:text-[#6055A6]"
//                   onClick={(event) =>
//                     event.stopPropagation()
//                   }
//                 >
//                   {LOCAL.phoneDisplay}
//                 </a>

//               </div>

//               {/* EMAIL */}

//               <div className="grid gap-5 border-b border-[#ddddda] py-8 sm:grid-cols-[170px_1fr]">

//                 <div className="flex items-center gap-3 text-[#6055A6]">

//                   <Mail size={17} />

//                   <span className="text-[9px] font-black uppercase tracking-[.2em]">
//                     Email
//                   </span>

//                 </div>

//                 <a
//                   href={`mailto:${LOCAL.email}`}
//                   className="break-all text-lg font-black transition hover:text-[#6055A6]"
//                 >
//                   {LOCAL.email}
//                 </a>

//               </div>

//               {/* COVERAGE */}

//               <div className="grid gap-5 py-8 sm:grid-cols-[170px_1fr]">

//                 <div className="flex items-center gap-3 text-[#6055A6]">

//                   <ShieldCheck size={17} />

//                   <span className="text-[9px] font-black uppercase tracking-[.2em]">
//                     Coverage
//                   </span>

//                 </div>

//                 <p className="text-lg font-black leading-7">
//                   {LOCAL.area}, {LOCAL.city}
//                   <br />
//                   {LOCAL.postcode}
//                 </p>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           PROCESS
//       ===================================================== */}

//       <section className="bg-white text-[#6055A6]">

//         <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">

//           <div className="grid gap-16 lg:grid-cols-[.75fr_1.25fr]">

//             <div>

//               <span className="text-[10px] font-black uppercase tracking-[.28em] text-[#6055A6]">
//                 03 — How We Work
//               </span>

//               <h2 className="mt-6 text-[55px] font-black leading-[.86] tracking-[-.065em] sm:text-[75px]">
//                 Inspect.
//                 <br />

//                 <span className="text-[#6055A6]">
//                   Control.
//                 </span>

//                 <br />
//                 Prevent.
//               </h2>

//               <p className="mt-7 max-w-lg text-sm leading-8  text-[#6055A6]">
//                 Every pest problem is different.
//                 We focus on understanding the activity,
//                 the property and the likely cause before
//                 recommending the right next step.
//               </p>

//             </div>

//             <div className="border-t border-[#6055A6]">

//               {[
//                 {
//                   number: "01",
//                   title: "Inspect",
//                   text: "We assess visible signs, activity areas, possible harbourage and property access points.",
//                 },
//                 {
//                   number: "02",
//                   title: "Identify",
//                   text: "We consider the pest type, location and conditions that may be supporting the activity.",
//                 },
//                 {
//                   number: "03",
//                   title: "Control",
//                   text: "We recommend a suitable control approach based on the property and pest activity.",
//                 },
//                 {
//                   number: "04",
//                   title: "Prevent",
//                   text: "Where appropriate, we highlight practical measures that can help reduce future activity.",
//                 },
//               ].map((item) => (

//                 <div
//                   key={item.number}
//                   className="sg-process-item grid gap-5 border-b py-8 sm:grid-cols-[70px_180px_1fr]"
//                 >

//                   <span className="text-[10px] font-black text-[#6055A6]">
//                     {item.number}
//                   </span>

//                   <h3 className="text-2xl font-black tracking-[-.04em]">
//                     {item.title}
//                   </h3>

//                   <p className="max-w-lg text-sm leading-7 text-[#6055A6]">
//                     {item.text}
//                   </p>

//                 </div>

//               ))}

//             </div>

//           </div>

//         </div>

//       </section>





//       {/* =====================================================
//           FINAL CTA
//       ===================================================== */}

//       <section className="bg-[#111111]">

//         <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">

//           <div className="relative overflow-hidden bg-[#6055A6] text-white">

//             <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/10" />

//             <div className="absolute -bottom-60 -left-40 h-[500px] w-[500px] rounded-full border border-white/10" />

//             <div className="relative grid lg:grid-cols-[1.2fr_.8fr]">

//               <div className="p-8 sm:p-12 lg:p-16">

//                 <span className="text-[9px] font-black uppercase tracking-[.28em] text-white/55">
//                   Serving {LOCAL.area}
//                 </span>

//                 <h2 className="mt-6 max-w-3xl text-[52px] font-black leading-[.87] tracking-[-.065em] sm:text-[72px]">
//                   Got a pest
//                   <br />
//                   problem?
//                   <br />

//                   <span className="text-white/55">
//                     Let's fix it.
//                   </span>
//                 </h2>

//                 <p className="mt-7 max-w-xl text-sm leading-8 text-white/65">
//                   Tell us what you've noticed around your
//                   property and our team can help you understand
//                   the next practical step.
//                 </p>

//                 <div className="mt-8 flex flex-col gap-3 sm:flex-row">

//                   <button
//                     type="button"
//                     onClick={goToContact}
//                     className="group flex min-h-[58px] items-center justify-between gap-10 bg-white px-6 text-[9px] font-black uppercase tracking-[.17em] text-[#111111] transition hover:bg-[#111111] hover:text-white"
//                   >
//                     Request a service

//                     <ArrowRight
//                       size={16}
//                       className="transition group-hover:translate-x-1"
//                     />
//                   </button>

//                   <a
//                     href={`tel:${LOCAL.phoneTel}`}
//                     className="group flex min-h-[58px] items-center gap-3 border border-white/30 px-6 text-[9px] font-black uppercase tracking-[.17em] transition hover:bg-white hover:text-[#111111]"
//                   >
//                     <Phone size={15} />

//                     {LOCAL.phoneDisplay}

//                     <ArrowUpRight
//                       size={15}
//                       className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
//                     />
//                   </a>

//                 </div>

//               </div>

//               <div className="border-t border-white/15 bg-black/10 lg:border-l lg:border-t-0">

//                 <div className="divide-y divide-white/15">

//                   {/* ADDRESS */}

//                   <div className="p-8 sm:p-10 lg:p-12">

//                     <MapPin size={20} />

//                     <span className="mt-6 block text-[8px] font-black uppercase tracking-[.2em] text-white/45">
//                       Address
//                     </span>

//                     <p className="mt-3 text-sm font-bold leading-7">
//                       {LOCAL.address}
//                     </p>

//                   </div>

//                   {/* PHONE */}

//                   <div className="p-8 sm:p-10 lg:p-12">

//                     <Phone size={20} />

//                     <span className="mt-6 block text-[8px] font-black uppercase tracking-[.2em] text-white/45">
//                       Call
//                     </span>

//                     <a
//                       href={`tel:${LOCAL.phoneTel}`}
//                       className="mt-3 block text-sm font-bold hover:underline"
//                     >
//                       {LOCAL.phoneDisplay}
//                     </a>

//                   </div>

//                   {/* EMAIL */}

//                   <div className="p-8 sm:p-10 lg:p-12">

//                     <Mail size={20} />

//                     <span className="mt-6 block text-[8px] font-black uppercase tracking-[.2em] text-white/45">
//                       Email
//                     </span>

//                     <a
//                       href={`mailto:${LOCAL.email}`}
//                       className="mt-3 block break-all text-sm font-bold hover:underline"
//                     >
//                       {LOCAL.email}
//                     </a>

//                   </div>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>

//     </div>
//   );
// };

// export default Services;




















// import React, { useEffect, useMemo, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Mail,
//   MapPin,
//   Phone,
//   ShieldCheck,
// } from "lucide-react";
// import ServicesHeroSection from "../components/ServicesHeroSection";

// const Services = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [selectedCategory, setSelectedCategory] = useState("All");

//   /* =====================================================
//      LOCAL BUSINESS DATA
//   ===================================================== */

//   const LOCAL = {
//     company: "Superguard Services West Wickham",
//     shortName: "Superguard West Wickham",
//     area: "West Wickham",
//     city: "London",
//     postcode: "BR4 0QL",
//     streetAddress: "16 Ash Grove",
//     address: "16 Ash Grove, West Wickham BR4 0QL",
//     phoneDisplay: "07356 270867",
//     phoneTel: "+447356270867",
//     email: "info@superguardwestwickham.uk",
//   };

//   /* =====================================================
//      CATEGORIES
//   ===================================================== */

//   const categories = [
//     "All",
//     "Insects",
//     "Rodents & Wildlife",
//     "Birds & Prevention",
//   ];

//   /* =====================================================
//      SERVICES
//   ===================================================== */

//   const servicesData = [
//     {
//       number: "01",
//       cat: "Insects",
//       title: `Ant Control ${LOCAL.area}`,
//       shortTitle: `Ant Control ${LOCAL.area}`,
//       image: "/images/ants.webp",
//       eyebrow: "INSECT CONTROL",
//       description: `Professional ant control for homes and properties in ${LOCAL.area}, helping identify ant activity, access points and the most suitable way to control the infestation.`,
//     },
//     {
//       number: "02",
//       cat: "Insects",
//       title: `Bed Bug Treatment ${LOCAL.area}`,
//       shortTitle: `Bed Bug Treatment ${LOCAL.area}`,
//       image: "/images/bedbugs.webp",
//       eyebrow: "INSECT CONTROL",
//       description:
//         "Targeted bed bug treatment for affected bedrooms and living areas, with a careful assessment of common hiding places and practical preparation guidance.",
//     },
//     {
//       number: "03",
//       cat: "Insects",
//       title: `Carpet Moth Treatment ${LOCAL.area}`,
//       shortTitle: `Carpet Moth Treatment ${LOCAL.area}`,
//       image: "/images/moths.webp",
//       eyebrow: "FABRIC PEST CONTROL",
//       description:
//         "Professional carpet moth treatment designed to address moth activity and larvae affecting carpets, rugs, clothing, wool fabrics and soft furnishings.",
//     },
//     {
//       number: "04",
//       cat: "Insects",
//       title: `Carpet Beetle Control ${LOCAL.area}`,
//       shortTitle: `Carpet Beetle Control ${LOCAL.area}`,
//       image: "/images/beetle.webp",
//       eyebrow: "FABRIC PEST CONTROL",
//       description:
//         "Carpet beetle control for properties experiencing larvae or adult beetle activity around carpets, wardrobes, skirting boards and soft furnishings.",
//     },
//     {
//       number: "05",
//       cat: "Insects",
//       title: `Cockroach Control ${LOCAL.area}`,
//       shortTitle: `Cockroach Control ${LOCAL.area}`,
//       image: "/images/cockroach.webp",
//       eyebrow: "INSECT CONTROL",
//       description:
//         "Professional cockroach control focused on locating activity around kitchens, cupboards, appliances, pipework and other potential harbourage areas.",
//     },
//     {
//       number: "06",
//       cat: "Rodents & Wildlife",
//       title: `Rats & Mice Control ${LOCAL.area}`,
//       shortTitle: `Rats & Mice Control ${LOCAL.area}`,
//       image: "/images/rodents.webp",
//       eyebrow: "RODENT CONTROL",
//       description:
//         "Reliable rats and mice control for homes and businesses, including assessment of rodent activity, possible entry points and practical prevention measures.",
//     },
//     {
//       number: "07",
//       cat: "Insects",
//       title: `Flea Treatment ${LOCAL.area}`,
//       shortTitle: `Flea Treatment ${LOCAL.area}`,
//       image: "/images/flea.webp",
//       eyebrow: "INSECT CONTROL",
//       description:
//         "Professional flea treatment for affected rooms, carpets, upholstery and other areas where flea activity may be present.",
//     },
//     {
//       number: "08",
//       cat: "Insects",
//       title: `Wasp Nest Control ${LOCAL.area}`,
//       shortTitle: `Wasp Nest Control ${LOCAL.area}`,
//       image: "/images/wasps.webp",
//       eyebrow: "STINGING INSECT CONTROL",
//       description:
//         "Wasp nest control for nests around roofs, wall cavities, gardens, sheds and property entrances, with treatment based on the location and level of activity.",
//     },
//     {
//       number: "09",
//       cat: "Insects",
//       title: `Bee Activity Support ${LOCAL.area}`,
//       shortTitle: `Bee Activity Support ${LOCAL.area}`,
//       image: "/images/bee.webp",
//       eyebrow: "BEE ACTIVITY",
//       description:
//         "Professional assessment and practical guidance for bee activity around roofs, walls, entrances and other parts of a property.",
//     },
//     {
//       number: "10",
//       cat: "Rodents & Wildlife",
//       title: `Squirrel Control ${LOCAL.area}`,
//       shortTitle: `Squirrel Control ${LOCAL.area}`,
//       image: "/images/squirrel.webp",
//       eyebrow: "WILDLIFE CONTROL",
//       description:
//         "Squirrel control for properties experiencing activity in lofts, roofs and other concealed areas, with attention to potential access points and property damage.",
//     },
//     {
//       number: "11",
//       cat: "Birds & Prevention",
//       title: `Property Proofing ${LOCAL.area}`,
//       shortTitle: `Property Proofing ${LOCAL.area}`,
//       image: "/images/hygene.webp",
//       eyebrow: "PEST PREVENTION",
//       description:
//         "Practical property proofing to help reduce pest access by addressing vulnerable gaps, openings, vents, roof access points and other building weaknesses.",
//     },
//     {
//       number: "12",
//       cat: "Birds & Prevention",
//       title: `Bird Control ${LOCAL.area}`,
//       shortTitle: `Bird Control ${LOCAL.area}`,
//       image: "/images/birds.webp",
//       eyebrow: "BIRD PREVENTION",
//       description:
//         "Professional bird control solutions for roofs, ledges, balconies, commercial properties and other areas affected by bird activity.",
//     },
//   ];

//   /* =====================================================
//      FILTER SERVICES
//   ===================================================== */

//   const filteredServices = useMemo(() => {
//     if (selectedCategory === "All") {
//       return servicesData;
//     }

//     return servicesData.filter(
//       (service) => service.cat === selectedCategory
//     );
//   }, [selectedCategory]);

//   /* =====================================================
//      CONTACT NAVIGATION
//   ===================================================== */

//   const goToContact = () => {
//     navigate("/contact-us");
//   };

//   const handleServiceNavigation = (service) => {
//     navigate("/contact-us", {
//       state: {
//         service: service.title,
//       },
//     });
//   };

//   /* =====================================================
//      SERVICE CLICK
//   ===================================================== */

//   const handleServiceClick = (service) => {
//     handleServiceNavigation(service);
//   };

//   const handleServiceKeyDown = (event, service) => {
//     if (event.key === "Enter" || event.key === " ") {
//       event.preventDefault();
//       handleServiceNavigation(service);
//     }
//   };

//   /* =====================================================
//      PRESERVE SCROLL / CATEGORY BEHAVIOUR
//   ===================================================== */

//   useEffect(() => {
//     const state = location.state;

//     if (!state) return;

//     if (state.category && categories.includes(state.category)) {
//       setSelectedCategory(state.category);
//     }

//     if (!state.scrollToService) return;

//     const timer = window.setTimeout(() => {
//       const searchText = String(state.scrollToService).toLowerCase();

//       const target = servicesData.find((service) => {
//         return (
//           service.title.toLowerCase().includes(searchText) ||
//           service.shortTitle.toLowerCase().includes(searchText)
//         );
//       });

//       if (target) {
//         const element = document.getElementById(
//           `service-${target.number}`
//         );

//         if (element) {
//           element.scrollIntoView({
//             behavior: "smooth",
//             block: "center",
//           });
//         }
//       }
//     }, 600);

//     return () => window.clearTimeout(timer);
//   }, [location.state]);

//   return (
//     <div className="bg-white text-[#111111]">

//       {/* =====================================================
//           HERO
//       ===================================================== */}

//       <ServicesHeroSection />

//       {/* =====================================================
//           SERVICE CATALOGUE
//       ===================================================== */}

//       <section
//         id="services-list"
//         className="bg-[#f5f5f3] text-[#111111]"
//       >
//         <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

//           {/* DIRECTORY HEADER */}

//           <div className="grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-end">

//             <div>
//               <span className="text-[10px] font-black uppercase tracking-[.28em] text-[#6055A6]">
//                 01 — The Service Catalogue
//               </span>

//               <h2 className="mt-6 max-w-5xl text-[55px] font-black leading-[.84] tracking-[-.07em] sm:text-[78px] lg:text-[105px]">
//                 One problem.
//                 <br />

//                 <span className="text-[#6055A6]">
//                   The right response.
//                 </span>
//               </h2>
//             </div>

//             <div>
//               <p className="max-w-xl text-sm font-medium leading-8 text-[#666666] sm:text-base">
//                 Explore our professional pest control services
//                 for homes, landlords, businesses and commercial
//                 properties throughout{" "}
//                 <span className="font-bold text-[#111111]">
//                   {LOCAL.area}
//                 </span>
//                 .
//               </p>

//               {/* FILTERS */}

//               <div className="mt-8 flex flex-wrap gap-2">
//                 {categories.map((category) => {
//                   const active = selectedCategory === category;

//                   return (
//                     <button
//                       key={category}
//                       type="button"
//                       onClick={() => setSelectedCategory(category)}
//                       className={`rounded-full border px-5 py-3 text-[9px] font-black uppercase tracking-[.14em] transition ${
//                         active
//                           ? "border-[#6055A6] bg-[#6055A6] text-white"
//                           : "border-[#d8d8d5] bg-white text-[#555555] hover:border-[#6055A6] hover:text-[#6055A6]"
//                       }`}
//                     >
//                       {category}
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           {/* =================================================
//               SERVICES
//           ================================================= */}

//           <div className="mt-20 border-t border-[#d8d8d5]">

//             {filteredServices.map((service, index) => {
//               const reversed = index % 2 !== 0;

//               return (
//                 <article
//                   key={service.number}
//                   id={`service-${service.number}`}
//                   onClick={() => handleServiceClick(service)}
//                   onKeyDown={(event) =>
//                     handleServiceKeyDown(event, service)
//                   }
//                   role="button"
//                   tabIndex={0}
//                   aria-label={`Book ${service.title}`}
//                   className="cursor-pointer bg-[#f5f5f3] transition-colors duration-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#6055A6]"
//                 >
//                   <div
//                     className={`mx-auto grid max-w-[1600px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[.9fr_380px_1fr] lg:gap-14 lg:px-12 lg:py-24 xl:grid-cols-[1fr_400px_1fr] ${
//                       reversed
//                         ? "lg:[&>.sg-service-copy]:order-3 lg:[&>.sg-service-visual]:order-2 lg:[&>.sg-service-side]:order-1"
//                         : ""
//                     }`}
//                   >

//                     {/* DESCRIPTION */}

//                     <div className="sg-service-copy relative">

//                       <span className="pointer-events-none absolute -left-4 -top-20 hidden text-[190px] font-black leading-none tracking-[-.12em] text-[#dededb] lg:block">
//                         {service.number}
//                       </span>

//                       <div className="relative">

//                         <div className="mb-7 flex items-center gap-4">
//                           <span className="h-px w-10 bg-[#6055A6]" />

//                           <span className="text-[9px] font-black uppercase tracking-[.25em] text-[#6055A6]">
//                             {service.cat}
//                           </span>
//                         </div>

//                         <div className="pl-7">

//                           <span className="text-[9px] font-black uppercase tracking-[.24em] text-[#888888]">
//                             About this service
//                           </span>

//                           <p className="mt-6 max-w-lg text-[15px] font-medium leading-8 text-[#666666]">
//                             {service.description}
//                           </p>

//                           <div className="mt-10 flex items-center gap-4">

//                             <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111111] text-[9px] font-black text-white">
//                               {service.number}
//                             </span>

//                             <span className="text-[8px] font-black uppercase tracking-[.2em] text-[#999999]">
//                               Professional pest control
//                             </span>

//                           </div>

//                         </div>
//                       </div>
//                     </div>

//                     {/* CENTER IMAGE + TITLE */}

//                     <div className="sg-service-visual flex flex-col items-center justify-center">

//                       <div className="relative">

//                         <div className="sg-round-image-ring" />

//                         <div className="sg-round-image-ring-two" />

//                         <div className="sg-round-image-wrap">

//                           <img
//                             src={service.image}
//                             alt={`${service.title} service in ${LOCAL.area}`}
//                             className="sg-round-image"
//                             loading="lazy"
//                           />

//                           <div className="sg-round-image-overlay" />

//                           <span className="absolute left-2 top-2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[9px] font-black text-[#111111] shadow-lg">
//                             {service.number}
//                           </span>

//                           <span className="absolute bottom-4 right-4 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#111111] shadow-xl">
//                             <ArrowUpRight size={19} />
//                           </span>

//                         </div>
//                       </div>

//                       {/* TITLE */}

//                       <div className="mt-12 max-w-[420px] text-center">

//                         <span className="text-[9px] font-black uppercase tracking-[.28em] text-[#6055A6]">
//                           {service.eyebrow}
//                         </span>

//                         <h3 className="mt-5 text-[38px] font-black leading-[.88] tracking-[-.065em] text-[#111111] sm:text-[46px]">
//                           {service.shortTitle}
//                         </h3>

//                         <button
//                           type="button"
//                           onClick={(event) => {
//                             event.stopPropagation();
//                             handleServiceNavigation(service);
//                           }}
//                           className="group mt-8 inline-flex items-center gap-5 bg-[#111111] px-7 py-5 text-[9px] font-black uppercase tracking-[.18em] text-white transition hover:bg-[#6055A6]"
//                         >
//                           Book This Service

//                           <ArrowRight
//                             size={15}
//                             className="transition group-hover:translate-x-1"
//                           />
//                         </button>

//                       </div>
//                     </div>

//                     {/* RIGHT SIDE */}

//                     <div className="sg-service-side">

//                       <div className="border-t border-[#d5d5d1]">

//                         <div className="flex items-center justify-between border-b border-[#d5d5d1] py-5">

//                           <span className="text-[9px] font-black uppercase tracking-[.22em] text-[#6055A6]">
//                             Service
//                           </span>

//                           <span className="text-[9px] font-black text-[#999999]">
//                             {service.number} / 12
//                           </span>

//                         </div>

//                         <div className="py-7">
//                           <p className="text-sm font-medium leading-8 text-[#666666]">
//                             {service.description}
//                           </p>
//                         </div>

//                         <div className="border-t border-[#d5d5d1] pt-7">

//                           <span className="text-[9px] font-black uppercase tracking-[.22em] text-[#888888]">
//                             Need help?
//                           </span>

//                           <p className="mt-4 text-[13px] font-black leading-6 text-[#222222]">
//                             Get in touch with our local team to
//                             discuss your pest problem.
//                           </p>

//                         </div>

//                         <button
//                           type="button"
//                           onClick={(event) => {
//                             event.stopPropagation();
//                             handleServiceNavigation(service);
//                           }}
//                           className="group mt-8 flex w-full items-center justify-between border-b-2 border-[#111111] pb-5 text-left transition hover:border-[#6055A6]"
//                         >
//                           <span className="text-[9px] font-black uppercase tracking-[.18em] text-[#111111] transition group-hover:text-[#6055A6]">
//                             Book this service
//                           </span>

//                           <ArrowRight
//                             size={17}
//                             className="transition group-hover:translate-x-2 group-hover:text-[#6055A6]"
//                           />
//                         </button>

//                       </div>
//                     </div>

//                   </div>
//                 </article>
//               );
//             })}
//           </div>

//           {/* COUNT */}

//           <div className="mt-8 flex flex-col gap-4 border-t border-[#d8d8d5] pt-6 sm:flex-row sm:items-center sm:justify-between">

//             <span className="text-[9px] font-black uppercase tracking-[.2em] text-[#888888]">
//               Showing {filteredServices.length} services
//             </span>

//             {selectedCategory !== "All" && (
//               <button
//                 type="button"
//                 onClick={() => setSelectedCategory("All")}
//                 className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[.17em] text-[#111111] transition hover:text-[#6055A6]"
//               >
//                 View all services
//                 <ArrowRight size={14} />
//               </button>
//             )}

//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           LOCAL COVERAGE
//       ===================================================== */}

//       <section className="bg-white text-[#111111]">

//         <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

//           <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">

//             {/* LEFT */}

//             <div>

//               <span className="text-[10px] font-black uppercase tracking-[.28em] text-[#6055A6]">
//                 02 — Local Coverage
//               </span>

//               <h2 className="mt-6 text-[55px] font-black leading-[.86] tracking-[-.065em] sm:text-[75px]">
//                 Local team.
//                 <br />

//                 <span className="text-[#6055A6]">
//                   Local service.
//                 </span>
//               </h2>

//               <p className="mt-7 max-w-lg text-sm font-medium leading-8 text-[#666666]">
//                 Superguard Services West Wickham provides
//                 professional pest control support for homes,
//                 landlords, offices and commercial properties
//                 throughout {LOCAL.area} and surrounding areas.
//               </p>

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="mt-8 inline-flex items-center gap-4 bg-[#111111] px-7 py-5 text-[9px] font-black uppercase tracking-[.18em] text-white transition hover:bg-[#6055A6]"
//               >
//                 <Phone size={15} />
//                 Call {LOCAL.phoneDisplay}
//               </a>

//             </div>

//             {/* RIGHT */}

//             <div className="border-t border-[#ddddda]">

//               {/* ADDRESS */}

//               <div className="grid gap-5 border-b border-[#ddddda] py-7 sm:grid-cols-[170px_1fr]">

//                 <div className="flex items-center gap-3 text-[#6055A6]">
//                   <MapPin size={17} />

//                   <span className="text-[9px] font-black uppercase tracking-[.2em]">
//                     Address
//                   </span>
//                 </div>

//                 <p className="text-lg font-black leading-7">
//                   {LOCAL.address}
//                 </p>

//               </div>

//               {/* PHONE */}

//               <div className="grid gap-5 border-b border-[#ddddda] py-7 sm:grid-cols-[170px_1fr]">

//                 <div className="flex items-center gap-3 text-[#6055A6]">
//                   <Phone size={17} />

//                   <span className="text-[9px] font-black uppercase tracking-[.2em]">
//                     Phone
//                   </span>
//                 </div>

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="text-lg font-black transition hover:text-[#6055A6]"
//                 >
//                   {LOCAL.phoneDisplay}
//                 </a>

//               </div>

//               {/* EMAIL */}

//               <div className="grid gap-5 border-b border-[#ddddda] py-7 sm:grid-cols-[170px_1fr]">

//                 <div className="flex items-center gap-3 text-[#6055A6]">
//                   <Mail size={17} />

//                   <span className="text-[9px] font-black uppercase tracking-[.2em]">
//                     Email
//                   </span>
//                 </div>

//                 <a
//                   href={`mailto:${LOCAL.email}`}
//                   className="break-all text-lg font-black transition hover:text-[#6055A6]"
//                 >
//                   {LOCAL.email}
//                 </a>

//               </div>

//               {/* COVERAGE */}

//               <div className="grid gap-5 py-7 sm:grid-cols-[170px_1fr]">

//                 <div className="flex items-center gap-3 text-[#6055A6]">
//                   <ShieldCheck size={17} />

//                   <span className="text-[9px] font-black uppercase tracking-[.2em]">
//                     Coverage
//                   </span>
//                 </div>

//                 <p className="text-lg font-black leading-7">
//                   {LOCAL.area}, {LOCAL.city}
//                   <br />
//                   {LOCAL.postcode}
//                 </p>

//               </div>

//             </div>
//           </div>

//         </div>
//       </section>

//       {/* =====================================================
//           HOW WE WORK
//       ===================================================== */}

//       <section className="bg-white text-[#111111]">

//         <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

//           <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">

//             {/* LEFT */}

//             <div>

//               <span className="text-[10px] font-black uppercase tracking-[.28em] text-[#6055A6]">
//                 03 — How We Work
//               </span>

//               <h2 className="mt-6 text-[55px] font-black leading-[.86] tracking-[-.065em] sm:text-[75px]">
//                 Inspect.
//                 <br />

//                 <span className="text-[#6055A6]">
//                   Control.
//                 </span>

//                 <br />
//                 Prevent.
//               </h2>

//               <p className="mt-7 max-w-lg text-sm font-medium leading-8 text-[#666666]">
//                 Every pest problem is different.
//                 We focus on understanding the activity,
//                 the property and the likely cause before
//                 recommending the right next step.
//               </p>

//             </div>

//             {/* RIGHT */}

//             <div className="border-t border-[#ddddda]">

//               {[
//                 {
//                   number: "01",
//                   title: "Inspect",
//                   text: "We assess visible signs, activity areas, possible harbourage and property access points.",
//                 },
//                 {
//                   number: "02",
//                   title: "Identify",
//                   text: "We consider the pest type, location and conditions that may be supporting the activity.",
//                 },
//                 {
//                   number: "03",
//                   title: "Control",
//                   text: "We recommend a suitable control approach based on the property and pest activity.",
//                 },
//                 {
//                   number: "04",
//                   title: "Prevent",
//                   text: "Where appropriate, we highlight practical measures that can help reduce future activity.",
//                 },
//               ].map((item) => (
//                 <div
//                   key={item.number}
//                   className="grid gap-4 border-b border-[#ddddda] py-7 sm:grid-cols-[70px_180px_1fr] sm:items-start"
//                 >

//                   <span className="text-[10px] font-black text-[#6055A6]">
//                     {item.number}
//                   </span>

//                   <h3 className="text-2xl font-black tracking-[-.04em] text-[#111111]">
//                     {item.title}
//                   </h3>

//                   <p className="max-w-lg text-sm font-medium leading-7 text-[#666666]">
//                     {item.text}
//                   </p>

//                 </div>
//               ))}

//             </div>

//           </div>

//         </div>
//       </section>

//       {/* =====================================================
//           FINAL CTA
//       ===================================================== */}

//       <section className="bg-[#111111]">

//         <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">

//           <div className="relative overflow-hidden bg-[#6055A6] text-white">

//             {/* DECORATIVE CIRCLES */}

//             <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/10" />

//             <div className="pointer-events-none absolute -bottom-60 -left-40 h-[500px] w-[500px] rounded-full border border-white/10" />

//             <div className="relative grid lg:grid-cols-[1.2fr_.8fr]">

//               {/* LEFT */}

//               <div className="p-8 sm:p-12 lg:p-16">

//                 <span className="text-[9px] font-black uppercase tracking-[.28em] text-white/60">
//                   Serving {LOCAL.area}
//                 </span>

//                 <h2 className="mt-6 max-w-3xl text-[52px] font-black leading-[.87] tracking-[-.065em] sm:text-[72px]">
//                   Got a pest
//                   <br />
//                   problem?
//                   <br />

//                   <span className="text-white/60">
//                     Let's fix it.
//                   </span>
//                 </h2>

//                 <p className="mt-7 max-w-xl text-sm leading-8 text-white/70">
//                   Tell us what you've noticed around your
//                   property and our team can help you understand
//                   the next practical step.
//                 </p>

//                 <div className="mt-8 flex flex-col gap-3 sm:flex-row">

//                   <button
//                     type="button"
//                     onClick={goToContact}
//                     className="group flex min-h-[58px] items-center justify-between gap-10 bg-white px-6 text-[9px] font-black uppercase tracking-[.17em] text-[#111111] transition hover:bg-[#111111] hover:text-white"
//                   >
//                     Request a service

//                     <ArrowRight
//                       size={16}
//                       className="transition group-hover:translate-x-1"
//                     />
//                   </button>

//                   <a
//                     href={`tel:${LOCAL.phoneTel}`}
//                     className="group flex min-h-[58px] items-center gap-3 border border-white/30 px-6 text-[9px] font-black uppercase tracking-[.17em] transition hover:bg-white hover:text-[#111111]"
//                   >
//                     <Phone size={15} />

//                     {LOCAL.phoneDisplay}

//                     <ArrowUpRight
//                       size={15}
//                       className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
//                     />
//                   </a>

//                 </div>
//               </div>

//               {/* RIGHT */}

//               <div className="border-t border-white/15 lg:border-l lg:border-t-0">

//                 <div className="divide-y divide-white/15">

//                   {/* ADDRESS */}

//                   <div className="p-8 sm:p-10 lg:p-12">

//                     <MapPin size={20} />

//                     <span className="mt-6 block text-[8px] font-black uppercase tracking-[.2em] text-white/55">
//                       Address
//                     </span>

//                     <p className="mt-3 text-sm font-bold leading-7">
//                       {LOCAL.address}
//                     </p>

//                   </div>

//                   {/* PHONE */}

//                   <div className="p-8 sm:p-10 lg:p-12">

//                     <Phone size={20} />

//                     <span className="mt-6 block text-[8px] font-black uppercase tracking-[.2em] text-white/55">
//                       Call
//                     </span>

//                     <a
//                       href={`tel:${LOCAL.phoneTel}`}
//                       className="mt-3 block text-sm font-bold hover:underline"
//                     >
//                       {LOCAL.phoneDisplay}
//                     </a>

//                   </div>

//                   {/* EMAIL */}

//                   <div className="p-8 sm:p-10 lg:p-12">

//                     <Mail size={20} />

//                     <span className="mt-6 block text-[8px] font-black uppercase tracking-[.2em] text-white/55">
//                       Email
//                     </span>

//                     <a
//                       href={`mailto:${LOCAL.email}`}
//                       className="mt-3 block break-all text-sm font-bold hover:underline"
//                     >
//                       {LOCAL.email}
//                     </a>

//                   </div>

//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default Services;


















// import React, { useEffect, useMemo, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   MapPin,
//   Phone,
//   ShieldCheck,
//   Bug,
//   Home,
//   Building2,
//   Check,
// } from "lucide-react";

// import ServicesHeroSection from "../components/ServicesHeroSection";

// const Services = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const LOCAL = {
//     company: "Superguard Services Isleworth",
//     shortName: "Superguard Isleworth",
//     area: "Isleworth",
//     city: "London",
//     postcode: "TW7 7HG",
//     streetAddress: "71 Talbot Rd",
//     address: "71 Talbot Rd, Isleworth TW7 7HG, United Kingdom",
//     phoneDisplay: "7405 940152",
//     phoneTel: "+447405940152",
//   };

//   const categories = [
//     "All",
//     "Insects",
//     "Rodents & Wildlife",
//     "Birds & Prevention",
//   ];

//   const servicesData = [
//     {
//       number: "01",
//       cat: "Insects",
//       shortTitle: "Ant Control",
//       title: `Ant Control ${LOCAL.area}`,
//       image: "/images/ants.webp",
//       eyebrow: "INSECT CONTROL",
//       intro:
//         "Persistent ant activity can quickly move beyond an occasional sighting. We focus on the areas where trails develop and where colonies may be accessing the property.",
//       signs: [
//         "Visible ant trails",
//         "Repeated sightings",
//         "Activity near food areas",
//       ],
//       areas: ["Kitchens", "Entrances", "Food storage areas"],
//       focus: "Trail activity & access points",
//     },
//     {
//       number: "02",
//       cat: "Insects",
//       shortTitle: "Bed Bug Treatment",
//       title: `Bed Bug Treatment ${LOCAL.area}`,
//       image: "/images/bedbugs.webp",
//       eyebrow: "INSECT CONTROL",
//       intro:
//         "Bed bug activity often remains hidden around sleeping areas and furniture. A careful assessment helps identify the locations requiring attention.",
//       signs: ["Bite concerns", "Small spotting", "Activity around beds"],
//       areas: ["Bedrooms", "Bed frames", "Upholstered furniture"],
//       focus: "Sleeping areas & harbourage",
//     },
//     {
//       number: "03",
//       cat: "Insects",
//       shortTitle: "Carpet Moth Treatment",
//       title: `Carpet Moth Treatment ${LOCAL.area}`,
//       image: "/images/moths.webp",
//       eyebrow: "FABRIC PEST CONTROL",
//       intro:
//         "Carpet moth activity can affect natural fibres and soft furnishings. Treatment planning considers the affected rooms and surrounding fabric areas.",
//       signs: ["Fabric damage", "Larvae or cases", "Moth sightings"],
//       areas: ["Carpets", "Rugs", "Wardrobes"],
//       focus: "Fabric areas & affected rooms",
//     },
//     {
//       number: "04",
//       cat: "Insects",
//       shortTitle: "Carpet Beetle Control",
//       title: `Carpet Beetle Control ${LOCAL.area}`,
//       image: "/images/beetle.webp",
//       eyebrow: "FABRIC PEST CONTROL",
//       intro:
//         "Carpet beetles and their larvae can remain unnoticed around fabrics and floor edges. Identifying the affected areas is an important part of the response.",
//       signs: ["Larval activity", "Fabric damage", "Beetle sightings"],
//       areas: ["Carpets", "Skirting boards", "Stored fabrics"],
//       focus: "Larvae & fabric exposure",
//     },
//     {
//       number: "05",
//       cat: "Insects",
//       shortTitle: "Cockroach Control",
//       title: `Cockroach Control ${LOCAL.area}`,
//       image: "/images/cockroach.webp",
//       eyebrow: "INSECT CONTROL",
//       intro:
//         "Cockroach activity is often associated with warm, concealed areas around kitchens and services. The surrounding environment can reveal where activity is developing.",
//       signs: ["Live sightings", "Droppings", "Activity around appliances"],
//       areas: ["Kitchens", "Utility areas", "Service spaces"],
//       focus: "Harbourage & recurring activity",
//     },
//     {
//       number: "06",
//       cat: "Rodents & Wildlife",
//       shortTitle: "Rats & Mice Control",
//       title: `Rats & Mice Control ${LOCAL.area}`,
//       image: "/images/rodents.webp",
//       eyebrow: "RODENT CONTROL",
//       intro:
//         "Rodent problems can involve more than the place where a sighting occurs. We consider signs of movement alongside possible access routes and harbourage.",
//       signs: ["Droppings", "Scratching sounds", "Gnawing or movement"],
//       areas: ["Kitchens", "Lofts", "Wall and service voids"],
//       focus: "Activity, access & harbourage",
//     },
//     {
//       number: "07",
//       cat: "Insects",
//       shortTitle: "Flea Treatment",
//       title: `Flea Treatment ${LOCAL.area}`,
//       image: "/images/flea.webp",
//       eyebrow: "INSECT CONTROL",
//       intro:
//         "Flea activity can remain around carpets, upholstery and flooring even when the insects themselves are difficult to spot.",
//       signs: ["Repeated bites", "Flea sightings", "Pet-area activity"],
//       areas: ["Carpets", "Upholstery", "Flooring"],
//       focus: "Affected rooms & soft surfaces",
//     },
//     {
//       number: "08",
//       cat: "Insects",
//       shortTitle: "Wasp Nest Control",
//       title: `Wasp Nest Control ${LOCAL.area}`,
//       image: "/images/wasps.webp",
//       eyebrow: "STINGING INSECT CONTROL",
//       intro:
//         "Wasp nests can develop in roofs, wall cavities, sheds and other sheltered locations. Identifying the nest location is central to dealing with the activity safely.",
//       signs: [
//         "Repeated wasp movement",
//         "Visible nest activity",
//         "Concentrated entry points",
//       ],
//       areas: ["Roof spaces", "Wall cavities", "Sheds & gardens"],
//       focus: "Nest location & activity",
//     },
//     {
//       number: "09",
//       cat: "Insects",
//       shortTitle: "Bee Activity Support",
//       title: `Bee Activity Support ${LOCAL.area}`,
//       image: "/images/bee.webp",
//       eyebrow: "BEE ACTIVITY",
//       intro:
//         "Unusual bee activity around a property should first be understood before action is considered. Location and behaviour can help determine the appropriate next step.",
//       signs: [
//         "Repeated bee movement",
//         "Entry into a structure",
//         "Concentrated activity",
//       ],
//       areas: ["Roof areas", "Walls", "External entrances"],
//       focus: "Identification & location",
//     },
//     {
//       number: "10",
//       cat: "Rodents & Wildlife",
//       shortTitle: "Squirrel Control",
//       title: `Squirrel Control ${LOCAL.area}`,
//       image: "/images/squirrel.webp",
//       eyebrow: "WILDLIFE CONTROL",
//       intro:
//         "Noises and movement in roof or loft spaces can indicate squirrel activity. The property layout can help identify how wildlife is accessing concealed areas.",
//       signs: ["Loft noises", "Movement above ceilings", "Gnawing damage"],
//       areas: ["Lofts", "Roof spaces", "External access points"],
//       focus: "Roof access & activity",
//     },
//     {
//       number: "11",
//       cat: "Birds & Prevention",
//       shortTitle: "Property Proofing",
//       title: `Property Proofing ${LOCAL.area}`,
//       image: "/images/hygene.webp",
//       eyebrow: "PREVENTION",
//       intro:
//         "Where pest activity is linked to gaps or accessible areas, property proofing can help reduce opportunities for future access.",
//       signs: ["Visible gaps", "Repeated access", "Damage around openings"],
//       areas: ["Rooflines", "Vents", "Service openings"],
//       focus: "Access reduction & prevention",
//     },
//     {
//       number: "12",
//       cat: "Birds & Prevention",
//       shortTitle: "Bird Control",
//       title: `Bird Control ${LOCAL.area}`,
//       image: "/images/birds.webp",
//       eyebrow: "BIRD CONTROL",
//       intro:
//         "Persistent bird activity can affect roofs, ledges, balconies and commercial areas. The structure and location of the activity guide the appropriate response.",
//       signs: [
//         "Repeated landing",
//         "Nesting activity",
//         "Droppings around surfaces",
//       ],
//       areas: ["Roofs", "Ledges", "Balconies & buildings"],
//       focus: "Landing & nesting areas",
//     },
//   ];

//   const filteredServices = useMemo(() => {
//     if (selectedCategory === "All") {
//       return servicesData;
//     }

//     return servicesData.filter(
//       (service) => service.cat === selectedCategory
//     );
//   }, [selectedCategory]);

//   const goToContact = () => {
//     navigate("/contact-us");
//   };

//   const handleServiceNavigation = (service) => {
//     navigate("/contact-us", {
//       state: {
//         service: service.title,
//       },
//     });
//   };

//   const handleServiceClick = (service) => {
//     handleServiceNavigation(service);
//   };

//   const handleServiceKeyDown = (event, service) => {
//     if (event.key === "Enter" || event.key === " ") {
//       event.preventDefault();
//       handleServiceNavigation(service);
//     }
//   };

//   useEffect(() => {
//     const state = location.state;

//     if (!state) return;

//     if (state.category && categories.includes(state.category)) {
//       setSelectedCategory(state.category);
//     }

//     if (!state.scrollToService) return;

//     const timer = window.setTimeout(() => {
//       const searchText = String(state.scrollToService).toLowerCase();

//       const target = servicesData.find((service) => {
//         return (
//           service.title.toLowerCase().includes(searchText) ||
//           service.shortTitle.toLowerCase().includes(searchText)
//         );
//       });

//       if (target) {
//         const element = document.getElementById(
//           `service-${target.number}`
//         );

//         if (element) {
//           element.scrollIntoView({
//             behavior: "smooth",
//             block: "center",
//           });
//         }
//       }
//     }, 600);

//     return () => window.clearTimeout(timer);
//   }, [location.state]);

//   return (
//     <div className="bg-[#F7F6FA] text-[#15131A]">
//       <ServicesHeroSection />

//       {/* =====================================================
//           SERVICE CATALOGUE
//       ===================================================== */}

//       <section
//         id="services-list"
//         className="bg-[#6055A6] text-white"
//       >
//         <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

//           {/* DIRECTORY HEADER */}

//           <div className="grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-end">

//             <div>
//               <span className="text-[10px] font-black uppercase tracking-[.28em] text-white/55">
//                 01 — The Service Catalogue
//               </span>

//               <h2 className="mt-6 max-w-5xl text-[55px] font-black leading-[.84] tracking-[-.07em] sm:text-[78px] lg:text-[105px]">
//                 One problem.
//                 <br />

//                 <span className="text-[#24212D]">
//                   The right response.
//                 </span>
//               </h2>
//             </div>

//             <div>
//               <p className="max-w-xl text-sm font-medium leading-8 text-white/70 sm:text-base">
//                 Explore our professional pest control services
//                 for homes, landlords, businesses and commercial
//                 properties throughout{" "}
//                 <span className="font-bold text-white">
//                   {LOCAL.area}
//                 </span>
//                 .
//               </p>

//               {/* FILTERS */}

//               <div className="mt-8 flex flex-wrap gap-2">
//                 {categories.map((category) => {
//                   const active = selectedCategory === category;

//                   return (
//                     <button
//                       key={category}
//                       type="button"
//                       onClick={() => setSelectedCategory(category)}
//                       className={`rounded-full border px-5 py-3 text-[9px] font-black uppercase tracking-[.14em] transition ${
//                         active
//                           ? "border-white bg-white text-[#6055A6]"
//                           : "border-white/30 bg-transparent text-white/75 hover:border-white hover:text-white"
//                       }`}
//                     >
//                       {category}
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           {/* =================================================
//               SERVICES
//           ================================================= */}

//           <div className="mt-20 border-t border-white/20">

//             {filteredServices.map((service, index) => {
//               const reversed = index % 2 !== 0;

//               return (
//                 <article
//                   key={service.number}
//                   id={`service-${service.number}`}
//                   onClick={() => handleServiceClick(service)}
//                   onKeyDown={(event) =>
//                     handleServiceKeyDown(event, service)
//                   }
//                   role="button"
//                   tabIndex={0}
//                   aria-label={`Book ${service.title}`}
//                   className="cursor-pointer border-b border-white/20 bg-transparent transition-colors duration-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//                 >
//                   <div
//                     className={`mx-auto grid max-w-[1600px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[.9fr_400px_1fr] lg:gap-14 lg:px-12 lg:py-24 xl:grid-cols-[1fr_430px_1fr] ${
//                       reversed
//                         ? "lg:[&>.sg-service-copy]:order-3 lg:[&>.sg-service-visual]:order-2 lg:[&>.sg-service-side]:order-1"
//                         : ""
//                     }`}
//                   >

//                     {/* DESCRIPTION */}

//                     <div className="sg-service-copy relative">

//                       <span className="pointer-events-none absolute -left-4 -top-20 hidden text-[190px] font-black leading-none tracking-[-.12em] text-white/10 lg:block">
//                         {service.number}
//                       </span>

//                       <div className="relative">

//                         <div className="mb-7 flex items-center gap-4">
//                           <span className="h-px w-10 bg-white" />

//                           <span className="text-[9px] font-black uppercase tracking-[.25em] text-white/70">
//                             {service.cat}
//                           </span>
//                         </div>

//                         <div className="pl-7">

//                           <span className="text-[9px] font-black uppercase tracking-[.24em] text-white/45">
//                             About this service
//                           </span>

//                           <p className="mt-6 max-w-lg text-[15px] font-medium leading-8 text-white/75">
//                             {service.intro}
//                           </p>

//                           <div className="mt-10 flex items-center gap-4">

//                             <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[9px] font-black text-[#6055A6]">
//                               {service.number}
//                             </span>

//                             <span className="text-[8px] font-black uppercase tracking-[.2em] text-white/45">
//                               Professional pest control
//                             </span>

//                           </div>

//                         </div>
//                       </div>
//                     </div>

//                     {/* CENTER IMAGE + TITLE */}

//                     <div className="sg-service-visual flex flex-col items-center justify-center">

//                       <div className="relative">

//                         {/* OUTER RINGS */}

//                         <div className="absolute -inset-5 rounded-full border border-white/20" />

//                         <div className="absolute -inset-10 rounded-full border border-white/10" />

//                         {/* IMAGE */}

//                         <div className="relative h-[280px] w-[280px] overflow-hidden rounded-full border-[8px] border-white/20 bg-white/10 shadow-2xl sm:h-[330px] sm:w-[330px] lg:h-[370px] lg:w-[370px]">

//                           <img
//                             key={service.number}
//                             src={service.image}
//                             alt={`${service.title} service in ${LOCAL.area}`}
//                             className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
//                             loading="lazy"
//                           />

//                           <div className="absolute inset-0 bg-gradient-to-t from-[#24212D]/35 via-transparent to-transparent" />

//                           {/* NUMBER */}

//                           <span className="absolute left-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[9px] font-black text-[#6055A6] shadow-lg">
//                             {service.number}
//                           </span>

//                           {/* ARROW */}

//                           <span className="absolute bottom-5 right-5 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#24212D] shadow-xl">
//                             <ArrowUpRight size={19} />
//                           </span>

//                         </div>
//                       </div>

//                       {/* TITLE */}

//                       <div className="mt-12 max-w-[420px] text-center">

//                         <span className="text-[9px] font-black uppercase tracking-[.28em] text-white/60">
//                           {service.eyebrow}
//                         </span>

//                         <h3 className="mt-5 text-[38px] font-black leading-[.88] tracking-[-.065em] text-white sm:text-[46px]">
//                           {service.shortTitle}
//                         </h3>

//                         <button
//                           type="button"
//                           onClick={(event) => {
//                             event.stopPropagation();
//                             handleServiceNavigation(service);
//                           }}
//                           className="group mt-8 inline-flex items-center gap-5 bg-white px-7 py-5 text-[9px] font-black uppercase tracking-[.18em] text-[#24212D] transition hover:bg-[#24212D] hover:text-white"
//                         >
//                           Discuss This Service

//                           <ArrowRight
//                             size={15}
//                             className="transition group-hover:translate-x-1"
//                           />
//                         </button>

//                       </div>
//                     </div>

//                     {/* RIGHT SIDE */}

//                     <div className="sg-service-side">

//                       <div className="border-t border-white/20">

//                         <div className="flex items-center justify-between border-b border-white/20 py-5">

//                           <span className="text-[9px] font-black uppercase tracking-[.22em] text-white/65">
//                             Service
//                           </span>

//                           <span className="text-[9px] font-black text-white/40">
//                             {service.number} / 12
//                           </span>

//                         </div>

//                         <div className="py-7">

//                           <p className="text-sm font-medium leading-8 text-white/70">
//                             {service.intro}
//                           </p>

//                         </div>

//                         {/* COMMON SIGNS */}

//                         <div className="border-t border-white/20 pt-7">

//                           <span className="text-[9px] font-black uppercase tracking-[.22em] text-white/50">
//                             Common signs
//                           </span>

//                           <div className="mt-5 space-y-3">
//                             {service.signs.map((item) => (
//                               <div
//                                 key={item}
//                                 className="flex items-center gap-3"
//                               >
//                                 <Check
//                                   size={13}
//                                   className="shrink-0 text-white"
//                                 />

//                                 <span className="text-[11px] font-bold text-white/75">
//                                   {item}
//                                 </span>
//                               </div>
//                             ))}
//                           </div>

//                         </div>

//                         {/* AREAS */}

//                         <div className="mt-7 border-t border-white/20 pt-7">

//                           <span className="text-[9px] font-black uppercase tracking-[.22em] text-white/50">
//                             Areas considered
//                           </span>

//                           <div className="mt-5 space-y-3">
//                             {service.areas.map((item) => (
//                               <div
//                                 key={item}
//                                 className="flex items-center gap-3"
//                               >
//                                 <span className="h-[4px] w-[4px] rounded-full bg-white" />

//                                 <span className="text-[11px] font-bold text-white/75">
//                                   {item}
//                                 </span>
//                               </div>
//                             ))}
//                           </div>

//                         </div>

//                         {/* CTA */}

//                         <button
//                           type="button"
//                           onClick={(event) => {
//                             event.stopPropagation();
//                             handleServiceNavigation(service);
//                           }}
//                           className="group mt-8 flex w-full items-center justify-between border-b-2 border-white pb-5 text-left transition hover:border-[#24212D]"
//                         >
//                           <span className="text-[9px] font-black uppercase tracking-[.18em] text-white transition group-hover:text-[#24212D]">
//                             Discuss this service
//                           </span>

//                           <ArrowRight
//                             size={17}
//                             className="transition group-hover:translate-x-2 group-hover:text-[#24212D]"
//                           />
//                         </button>

//                       </div>
//                     </div>

//                   </div>
//                 </article>
//               );
//             })}
//           </div>

//           {/* COUNT */}

//           <div className="mt-8 flex flex-col gap-4 border-t border-white/20 pt-6 sm:flex-row sm:items-center sm:justify-between">

//             <span className="text-[9px] font-black uppercase tracking-[.2em] text-white/45">
//               Showing {filteredServices.length} services
//             </span>

//             {selectedCategory !== "All" && (
//               <button
//                 type="button"
//                 onClick={() => setSelectedCategory("All")}
//                 className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[.17em] text-white transition hover:text-[#24212D]"
//               >
//                 View all services
//                 <ArrowRight size={14} />
//               </button>
//             )}

//           </div>

//         </div>
//       </section>

//       {/* =====================================================
//           LOCAL SERVICE
//       ===================================================== */}

//       <section className="bg-[#24212D] text-white">
//         <div className="mx-auto max-w-[1650px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

//           <div className="grid gap-14 lg:grid-cols-[1.15fr_.85fr] lg:items-end">

//             <div>
//               <div className="flex items-center gap-3">
//                 <MapPin
//                   size={15}
//                   className="text-[#A59ED8]"
//                 />

//                 <span className="text-[8px] font-black uppercase tracking-[0.28em] text-[#A59ED8]">
//                   Local service · {LOCAL.area}
//                 </span>
//               </div>

//               <h2 className="mt-6 max-w-[760px] text-[42px] font-black leading-[.95] tracking-[-.055em] sm:text-[60px]">
//                 Pest control for
//                 <span className="block text-[#A59ED8]">
//                   real properties.
//                 </span>
//               </h2>

//               <p className="mt-7 max-w-[610px] text-[13px] leading-7 text-white/45">
//                 Every property presents a different combination
//                 of access, layout and pest activity. Our service
//                 range covers domestic, managed and commercial
//                 environments across Isleworth and surrounding
//                 London areas.
//               </p>

//               <button
//                 type="button"
//                 onClick={goToContact}
//                 className="group mt-9 inline-flex min-h-[54px] items-center gap-12 bg-[#6055A6] px-6 text-[8px] font-black uppercase tracking-[0.18em] text-white transition hover:bg-[#51478F]"
//               >
//                 Contact Superguard

//                 <ArrowRight
//                   size={15}
//                   className="transition group-hover:translate-x-1"
//                 />
//               </button>
//             </div>

//             <div className="border-t border-white/10 pt-7 lg:border-l lg:border-t-0 lg:pl-10">

//               <span className="text-[8px] font-black uppercase tracking-[0.24em] text-white/30">
//                 Isleworth service point
//               </span>

//               <p className="mt-5 max-w-[430px] text-[25px] font-black leading-tight tracking-[-.035em]">
//                 {LOCAL.address}
//               </p>

//               <div className="mt-8 border-t border-white/10 pt-6">

//                 <span className="text-[7px] font-black uppercase tracking-[0.2em] text-white/30">
//                   Direct contact
//                 </span>

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="mt-2 flex items-center gap-3 text-[19px] font-black text-white transition hover:text-[#A59ED8]"
//                 >
//                   <Phone size={16} />
//                   {LOCAL.phoneDisplay}
//                 </a>

//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           PROPERTY TYPES
//       ===================================================== */}

//       <section className="bg-white">
//         <div className="mx-auto max-w-[1650px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

//           <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">

//             <div>
//               <span className="text-[8px] font-black uppercase tracking-[0.28em] text-[#6055A6]">
//                 Property environments
//               </span>

//               <h2 className="mt-5 max-w-[620px] text-[40px] font-black leading-[.95] tracking-[-.05em] sm:text-[55px]">
//                 One service range.
//                 <span className="block text-[#6055A6]">
//                   Many property types.
//                 </span>
//               </h2>
//             </div>

//             <p className="max-w-[560px] text-[13px] leading-7 text-[#6F6C75]">
//               Pest activity can affect very different environments.
//               The surrounding building, use of the space and
//               location of activity all help shape what needs to
//               be considered.
//             </p>
//           </div>

//           <div className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-4">

//             <div className="border-t-2 border-[#6055A6] pt-6">
//               <Home
//                 size={19}
//                 className="text-[#6055A6]"
//               />

//               <h3 className="mt-6 text-[22px] font-black tracking-[-.035em]">
//                 Residential
//               </h3>

//               <p className="mt-4 text-[11px] leading-6 text-[#6F6C75]">
//                 Homes, flats and family properties where pest
//                 activity can affect everyday living spaces.
//               </p>
//             </div>

//             <div className="border-t-2 border-[#6055A6] pt-6">
//               <Building2
//                 size={19}
//                 className="text-[#6055A6]"
//               />

//               <h3 className="mt-6 text-[22px] font-black tracking-[-.035em]">
//                 Workplaces
//               </h3>

//               <p className="mt-4 text-[11px] leading-6 text-[#6F6C75]">
//                 Offices and working environments requiring
//                 practical attention to staff and service areas.
//               </p>
//             </div>

//             <div className="border-t-2 border-[#6055A6] pt-6">
//               <ShieldCheck
//                 size={19}
//                 className="text-[#6055A6]"
//               />

//               <h3 className="mt-6 text-[22px] font-black tracking-[-.035em]">
//                 Managed property
//               </h3>

//               <p className="mt-4 text-[11px] leading-6 text-[#6F6C75]">
//                 Rental and managed buildings where recurring
//                 activity may require wider property consideration.
//               </p>
//             </div>

//             <div className="border-t-2 border-[#6055A6] pt-6">
//               <Bug
//                 size={19}
//                 className="text-[#6055A6]"
//               />

//               <h3 className="mt-6 text-[22px] font-black tracking-[-.035em]">
//                 Commercial
//               </h3>

//               <p className="mt-4 text-[11px] leading-6 text-[#6F6C75]">
//                 Commercial spaces where pest activity may involve
//                 customer areas, storage and service spaces.
//               </p>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           RESPONSE
//       ===================================================== */}

//       <section className="bg-[#F7F6FA]">
//         <div className="mx-auto max-w-[1650px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

//           <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">

//             <div>
//               <span className="text-[8px] font-black uppercase tracking-[0.28em] text-[#6055A6]">
//                 Starting point
//               </span>

//               <h2 className="mt-6 max-w-[570px] text-[41px] font-black leading-[.95] tracking-[-.05em] sm:text-[57px]">
//                 You don't need
//                 <span className="block text-[#6055A6]">
//                   to know the answer first.
//                 </span>
//               </h2>

//               <p className="mt-7 max-w-[480px] text-[13px] leading-7 text-[#6F6C75]">
//                 If you're unsure what pest you're dealing with,
//                 explain what you've seen. The location, signs
//                 and type of property can all help establish
//                 where to begin.
//               </p>
//             </div>

//             <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">

//               <div className="border-t border-[#24212D]/15 pt-6">
//                 <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#6055A6]">
//                   01 · What you saw
//                 </span>

//                 <h3 className="mt-4 text-[23px] font-black tracking-[-.035em]">
//                   Start with the signs.
//                 </h3>

//                 <p className="mt-3 text-[11px] leading-6 text-[#6F6C75]">
//                   Sightings, damage, sounds, droppings or
//                   repeated activity can all provide useful clues.
//                 </p>
//               </div>

//               <div className="border-t border-[#24212D]/15 pt-6">
//                 <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#6055A6]">
//                   02 · Where it happens
//                 </span>

//                 <h3 className="mt-4 text-[23px] font-black tracking-[-.035em]">
//                   Look at the location.
//                 </h3>

//                 <p className="mt-3 text-[11px] leading-6 text-[#6F6C75]">
//                   Kitchens, bedrooms, roof spaces, entrances
//                   and external areas can point towards different
//                   possibilities.
//                 </p>
//               </div>

//               <div className="border-t border-[#24212D]/15 pt-6">
//                 <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#6055A6]">
//                   03 · Choose a service
//                 </span>

//                 <h3 className="mt-4 text-[23px] font-black tracking-[-.035em]">
//                   Find the closest match.
//                 </h3>

//                 <p className="mt-3 text-[11px] leading-6 text-[#6F6C75]">
//                   Use the service finder above to explore the
//                   treatment area that most closely matches
//                   your situation.
//                 </p>
//               </div>

//               <div className="border-t border-[#24212D]/15 pt-6">
//                 <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#6055A6]">
//                   04 · Talk it through
//                 </span>

//                 <h3 className="mt-4 text-[23px] font-black tracking-[-.035em]">
//                   Contact the team.
//                 </h3>

//                 <p className="mt-3 text-[11px] leading-6 text-[#6F6C75]">
//                   If you are uncertain which service applies,
//                   tell us what you've noticed and where it is
//                   happening.
//                 </p>
//               </div>

//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           FINAL CONTACT
//       ===================================================== */}

//       <section className="bg-[#6055A6] text-white">
//         <div className="mx-auto max-w-[1650px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

//           <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

//             <div>
//               <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white/55">
//                 {LOCAL.company}
//               </span>

//               <h2 className="mt-6 max-w-[850px] text-[42px] font-black leading-[.94] tracking-[-.055em] sm:text-[61px]">
//                 Not sure which service
//                 <span className="block text-[#24212D]">
//                   fits your problem?
//                 </span>
//               </h2>

//               <p className="mt-7 max-w-[590px] text-[13px] leading-7 text-white/65">
//                 Tell us what you've noticed, where you've noticed
//                 it and what type of property you're dealing with.
//                 We'll help you identify the appropriate next step.
//               </p>
//             </div>

//             <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">

//               <button
//                 type="button"
//                 onClick={goToContact}
//                 className="group flex min-h-[56px] items-center justify-between gap-14 bg-[#24212D] px-6 text-[8px] font-black uppercase tracking-[0.18em] text-white transition hover:bg-[#15131A]"
//               >
//                 Contact the team

//                 <ArrowRight
//                   size={15}
//                   className="transition group-hover:translate-x-1"
//                 />
//               </button>

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="flex min-h-[56px] items-center justify-center gap-4 border border-white/30 px-6 text-[9px] font-black uppercase tracking-[0.16em] text-white transition hover:border-white hover:bg-white/10"
//               >
//                 <Phone size={14} />

//                 {LOCAL.phoneDisplay}

//                 <ArrowUpRight size={14} />
//               </a>

//             </div>
//           </div>

//           <div className="mt-12 flex flex-col gap-3 border-t border-white/20 pt-5 text-[8px] font-black uppercase tracking-[0.18em] text-white/35 sm:flex-row sm:items-center sm:justify-between">

//             <span>{LOCAL.company}</span>

//             <span>
//               {LOCAL.address}
//             </span>

//           </div>

//         </div>
//       </section>
//     </div>
//   );
// };

// export default Services;
























// import React, { useEffect, useMemo, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   MapPin,
//   Phone,
//   ShieldCheck,
//   Bug,
//   Home,
//   Building2,
//   Check,
//   Search,
//   CircleCheck,
// } from "lucide-react";

// import ServicesHeroSection from "../components/ServicesHeroSection";

// const Services = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const LOCAL = {
//     company: "SuperGuard Services Chelsea",
//     shortName: "SuperGuard Chelsea",
//     area: "Chelsea",
//     city: "London",
//     postcode: "SW3 6NU",
//     streetAddress: "13 Guthrie St",
//     address: "13 Guthrie St, London SW3 6NU, United Kingdom",
//     phoneDisplay: "07405 745692",
//     phoneTel: "+447405745692",
//   };

//   const categories = [
//     "All",
//     "Insects",
//     "Rodents & Wildlife",
//     "Birds & Prevention",
//   ];

//   const servicesData = [
//     {
//       number: "01",
//       cat: "Insects",
//       shortTitle: "Ant Control",
//       title: `Ant Control ${LOCAL.area}`,
//       image: "/images/ants.webp",
//       eyebrow: "INSECT CONTROL",
//       intro:
//         "Persistent ant activity can quickly move beyond an occasional sighting. We focus on the areas where trails develop and where colonies may be accessing the property.",
//       signs: [
//         "Visible ant trails",
//         "Repeated sightings",
//         "Activity near food areas",
//       ],
//       areas: ["Kitchens", "Entrances", "Food storage areas"],
//       focus: "Trail activity & access points",
//     },
//     {
//       number: "02",
//       cat: "Insects",
//       shortTitle: "Bed Bug Treatment",
//       title: `Bed Bug Treatment ${LOCAL.area}`,
//       image: "/images/bedbugs.webp",
//       eyebrow: "INSECT CONTROL",
//       intro:
//         "Bed bug activity often remains hidden around sleeping areas and furniture. A careful assessment helps identify the locations requiring attention.",
//       signs: ["Bite concerns", "Small spotting", "Activity around beds"],
//       areas: ["Bedrooms", "Bed frames", "Upholstered furniture"],
//       focus: "Sleeping areas & harbourage",
//     },
//     {
//       number: "03",
//       cat: "Insects",
//       shortTitle: "Carpet Moth Treatment",
//       title: `Carpet Moth Treatment ${LOCAL.area}`,
//       image: "/images/moths.webp",
//       eyebrow: "FABRIC PEST CONTROL",
//       intro:
//         "Carpet moth activity can affect natural fibres and soft furnishings. Treatment planning considers the affected rooms and surrounding fabric areas.",
//       signs: ["Fabric damage", "Larvae or cases", "Moth sightings"],
//       areas: ["Carpets", "Rugs", "Wardrobes"],
//       focus: "Fabric areas & affected rooms",
//     },
//     {
//       number: "04",
//       cat: "Insects",
//       shortTitle: "Carpet Beetle Control",
//       title: `Carpet Beetle Control ${LOCAL.area}`,
//       image: "/images/beetle.webp",
//       eyebrow: "FABRIC PEST CONTROL",
//       intro:
//         "Carpet beetles and their larvae can remain unnoticed around fabrics and floor edges. Identifying the affected areas is an important part of the response.",
//       signs: ["Larval activity", "Fabric damage", "Beetle sightings"],
//       areas: ["Carpets", "Skirting boards", "Stored fabrics"],
//       focus: "Larvae & fabric exposure",
//     },
//     {
//       number: "05",
//       cat: "Insects",
//       shortTitle: "Cockroach Control",
//       title: `Cockroach Control ${LOCAL.area}`,
//       image: "/images/cockroach.webp",
//       eyebrow: "INSECT CONTROL",
//       intro:
//         "Cockroach activity is often associated with warm, concealed areas around kitchens and services. The surrounding environment can reveal where activity is developing.",
//       signs: ["Live sightings", "Droppings", "Activity around appliances"],
//       areas: ["Kitchens", "Utility areas", "Service spaces"],
//       focus: "Harbourage & recurring activity",
//     },
//     {
//       number: "06",
//       cat: "Rodents & Wildlife",
//       shortTitle: "Rats & Mice Control",
//       title: `Rats & Mice Control ${LOCAL.area}`,
//       image: "/images/rodents.webp",
//       eyebrow: "RODENT CONTROL",
//       intro:
//         "Rodent problems can involve more than the place where a sighting occurs. We consider signs of movement alongside possible access routes and harbourage.",
//       signs: ["Droppings", "Scratching sounds", "Gnawing or movement"],
//       areas: ["Kitchens", "Lofts", "Wall and service voids"],
//       focus: "Activity, access & harbourage",
//     },
//     {
//       number: "07",
//       cat: "Insects",
//       shortTitle: "Flea Treatment",
//       title: `Flea Treatment ${LOCAL.area}`,
//       image: "/images/flea.webp",
//       eyebrow: "INSECT CONTROL",
//       intro:
//         "Flea activity can remain around carpets, upholstery and flooring even when the insects themselves are difficult to spot.",
//       signs: ["Repeated bites", "Flea sightings", "Pet-area activity"],
//       areas: ["Carpets", "Upholstery", "Flooring"],
//       focus: "Affected rooms & soft surfaces",
//     },
//     {
//       number: "08",
//       cat: "Insects",
//       shortTitle: "Wasp Nest Control",
//       title: `Wasp Nest Control ${LOCAL.area}`,
//       image: "/images/wasps.webp",
//       eyebrow: "STINGING INSECT CONTROL",
//       intro:
//         "Wasp nests can develop in roofs, wall cavities, sheds and other sheltered locations. Identifying the nest location is central to dealing with the activity safely.",
//       signs: [
//         "Repeated wasp movement",
//         "Visible nest activity",
//         "Concentrated entry points",
//       ],
//       areas: ["Roof spaces", "Wall cavities", "Sheds & gardens"],
//       focus: "Nest location & activity",
//     },
//     {
//       number: "09",
//       cat: "Insects",
//       shortTitle: "Bee Activity Support",
//       title: `Bee Activity Support ${LOCAL.area}`,
//       image: "/images/bee.webp",
//       eyebrow: "BEE ACTIVITY",
//       intro:
//         "Unusual bee activity around a property should first be understood before action is considered. Location and behaviour can help determine the appropriate next step.",
//       signs: [
//         "Repeated bee movement",
//         "Entry into a structure",
//         "Concentrated activity",
//       ],
//       areas: ["Roof areas", "Walls", "External entrances"],
//       focus: "Identification & location",
//     },
//     {
//       number: "10",
//       cat: "Rodents & Wildlife",
//       shortTitle: "Squirrel Control",
//       title: `Squirrel Control ${LOCAL.area}`,
//       image: "/images/squirrel.webp",
//       eyebrow: "WILDLIFE CONTROL",
//       intro:
//         "Noises and movement in roof or loft spaces can indicate squirrel activity. The property layout can help identify how wildlife is accessing concealed areas.",
//       signs: ["Loft noises", "Movement above ceilings", "Gnawing damage"],
//       areas: ["Lofts", "Roof spaces", "External access points"],
//       focus: "Roof access & activity",
//     },
//     {
//       number: "11",
//       cat: "Birds & Prevention",
//       shortTitle: "Property Proofing",
//       title: `Property Proofing ${LOCAL.area}`,
//       image: "/images/hygene.webp",
//       eyebrow: "PREVENTION",
//       intro:
//         "Where pest activity is linked to gaps or accessible areas, property proofing can help reduce opportunities for future access.",
//       signs: ["Visible gaps", "Repeated access", "Damage around openings"],
//       areas: ["Rooflines", "Vents", "Service openings"],
//       focus: "Access reduction & prevention",
//     },
//     {
//       number: "12",
//       cat: "Birds & Prevention",
//       shortTitle: "Bird Control",
//       title: `Bird Control ${LOCAL.area}`,
//       image: "/images/birds.webp",
//       eyebrow: "BIRD CONTROL",
//       intro:
//         "Persistent bird activity can affect roofs, ledges, balconies and commercial areas. The structure and location of the activity guide the appropriate response.",
//       signs: [
//         "Repeated landing",
//         "Nesting activity",
//         "Droppings around surfaces",
//       ],
//       areas: ["Roofs", "Ledges", "Balconies & buildings"],
//       focus: "Landing & nesting areas",
//     },
//   ];

//   const filteredServices = useMemo(() => {
//     if (selectedCategory === "All") {
//       return servicesData;
//     }

//     return servicesData.filter(
//       (service) => service.cat === selectedCategory
//     );
//   }, [selectedCategory]);

//   const goToContact = () => {
//     navigate("/contact-us");
//   };

//   const handleServiceNavigation = (service) => {
//     navigate("/contact-us", {
//       state: {
//         service: service.title,
//       },
//     });
//   };

//   useEffect(() => {
//     const state = location.state;

//     if (!state) return;

//     if (state.category && categories.includes(state.category)) {
//       setSelectedCategory(state.category);
//     }

//     if (!state.scrollToService) return;

//     const timer = window.setTimeout(() => {
//       const searchText = String(state.scrollToService).toLowerCase();

//       const target = servicesData.find((service) => {
//         return (
//           service.title.toLowerCase().includes(searchText) ||
//           service.shortTitle.toLowerCase().includes(searchText)
//         );
//       });

//       if (target) {
//         const element = document.getElementById(
//           `service-${target.number}`
//         );

//         if (element) {
//           element.scrollIntoView({
//             behavior: "smooth",
//             block: "center",
//           });
//         }
//       }
//     }, 600);

//     return () => window.clearTimeout(timer);
//   }, [location.state]);

//   return (
//     <div className="overflow-hidden bg-[#F7F6FA] text-[#15131A]">
//       <ServicesHeroSection />

//       {/* =====================================================
//           SERVICE INDEX
//       ===================================================== */}

//       <section
//         id="services-list"
//         className="bg-[#F7F6FA] py-20 sm:py-28 lg:py-36"
//       >
//         <div className="mx-auto max-w-[1550px] px-5 sm:px-8 lg:px-12">

//           {/* INTRO */}

//           <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
//             <div>
//               <div className="flex items-center gap-3">
//                 <span className="h-[1px] w-9 bg-[#6055A6]" />

//                 <span className="text-[9px] font-black uppercase tracking-[.28em] text-[#6055A6]">
//                   What we deal with
//                 </span>
//               </div>

//               <h2 className="mt-7 max-w-[600px] text-[43px] font-black leading-[.91] tracking-[-.055em] sm:text-[62px] lg:text-[72px]">
//                 A clearer way
//                 <span className="block text-[#6055A6]">
//                   to find the right service.
//                 </span>
//               </h2>
//             </div>

//             <div className="lg:pl-16">
//               <p className="max-w-[650px] text-[13px] leading-7 text-[#6F6C75] sm:text-[14px]">
//                 From insects and rodents to wildlife, birds and
//                 preventative proofing, our service range covers
//                 common pest problems across Chelsea and nearby
//                 London areas.
//               </p>

//               {/* FILTER BAR */}

//               <div className="mt-8 flex flex-wrap gap-2">
//                 {categories.map((category) => {
//                   const active = selectedCategory === category;

//                   return (
//                     <button
//                       key={category}
//                       type="button"
//                       onClick={() => setSelectedCategory(category)}
//                       className={`rounded-full px-5 py-3 text-[9px] font-black uppercase tracking-[.15em] transition ${
//                         active
//                           ? "bg-[#6055A6] text-white"
//                           : "border border-[#24212D]/15 bg-white text-[#6F6C75] hover:border-[#6055A6] hover:text-[#6055A6]"
//                       }`}
//                     >
//                       {category}
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           {/* =================================================
//               SERVICE CARDS
//           ================================================= */}

//           <div className="mt-20 space-y-6 lg:mt-28">
//             {filteredServices.map((service, index) => {
//               const darkCard = index % 3 === 1;

//               return (
//                 <article
//                   key={service.number}
//                   id={`service-${service.number}`}
//                   onClick={() => handleServiceNavigation(service)}
//                   className={`group relative cursor-pointer overflow-hidden ${
//                     darkCard
//                       ? "bg-[#24212D] text-white"
//                       : "bg-white text-[#15131A]"
//                   }`}
//                 >
//                   <div className="grid lg:grid-cols-[110px_360px_1fr] xl:grid-cols-[125px_420px_1fr]">

//                     {/* NUMBER */}

//                     <div
//                       className={`hidden border-r p-8 lg:flex lg:flex-col lg:justify-between ${
//                         darkCard
//                           ? "border-white/10"
//                           : "border-[#24212D]/10"
//                       }`}
//                     >
//                       <span
//                         className={`text-[11px] font-black tracking-[.2em] ${
//                           darkCard
//                             ? "text-[#A59ED8]"
//                             : "text-[#6055A6]"
//                         }`}
//                       >
//                         {service.number}
//                       </span>

//                       <span
//                         className={`writing-mode-vertical rotate-180 text-[8px] font-black uppercase tracking-[.25em] ${
//                           darkCard
//                             ? "text-white/30"
//                             : "text-[#24212D]/30"
//                         }`}
//                       >
//                         {service.cat}
//                       </span>
//                     </div>

//                     {/* IMAGE */}

//                     <div className="relative h-[300px] overflow-hidden sm:h-[390px] lg:h-[430px]">
//                       <img
//                         src={service.image}
//                         alt={`${service.title} service in ${LOCAL.area}`}
//                         className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
//                         loading="lazy"
//                       />

//                       <div
//                         className={`absolute inset-0 ${
//                           darkCard
//                             ? "bg-gradient-to-t from-[#24212D]/75 via-transparent to-transparent"
//                             : "bg-gradient-to-t from-[#15131A]/55 via-transparent to-transparent"
//                         }`}
//                       />

//                       <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[10px] font-black text-[#6055A6] shadow-xl">
//                         {service.number}
//                       </div>

//                       <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#6055A6] text-white transition duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-[#6055A6]">
//                         <ArrowUpRight size={18} />
//                       </div>
//                     </div>

//                     {/* CONTENT */}

//                     <div className="flex min-h-[430px] flex-col justify-between p-7 sm:p-10 lg:p-12 xl:p-14">

//                       <div>
//                         <div className="flex items-center justify-between gap-5">
//                           <span
//                             className={`text-[8px] font-black uppercase tracking-[.25em] ${
//                               darkCard
//                                 ? "text-[#A59ED8]"
//                                 : "text-[#6055A6]"
//                             }`}
//                           >
//                             {service.eyebrow}
//                           </span>

//                           <span
//                             className={`hidden text-[8px] font-black uppercase tracking-[.2em] sm:block ${
//                               darkCard
//                                 ? "text-white/25"
//                                 : "text-[#24212D]/25"
//                             }`}
//                           >
//                             {service.focus}
//                           </span>
//                         </div>

//                         <h3
//                           className={`mt-7 max-w-[700px] text-[39px] font-black leading-[.9] tracking-[-.055em] sm:text-[52px] lg:text-[61px] ${
//                             darkCard
//                               ? "text-white"
//                               : "text-[#15131A]"
//                           }`}
//                         >
//                           {service.shortTitle}
//                         </h3>

//                         <p
//                           className={`mt-7 max-w-[620px] text-[12px] leading-7 sm:text-[13px] ${
//                             darkCard
//                               ? "text-white/55"
//                               : "text-[#6F6C75]"
//                           }`}
//                         >
//                           {service.intro}
//                         </p>
//                       </div>

//                       <div className="mt-12">

//                         {/* SIGNS */}

//                         <div className="grid gap-7 border-t pt-7 sm:grid-cols-2 xl:grid-cols-[1fr_1fr_180px]">
//                           <div>
//                             <span
//                               className={`text-[8px] font-black uppercase tracking-[.2em] ${
//                                 darkCard
//                                   ? "text-white/30"
//                                   : "text-[#24212D]/35"
//                               }`}
//                             >
//                               Common signs
//                             </span>

//                             <div className="mt-4 space-y-2">
//                               {service.signs.map((item) => (
//                                 <div
//                                   key={item}
//                                   className="flex items-center gap-2"
//                                 >
//                                   <CircleCheck
//                                     size={12}
//                                     className={
//                                       darkCard
//                                         ? "text-[#A59ED8]"
//                                         : "text-[#6055A6]"
//                                     }
//                                   />

//                                   <span
//                                     className={`text-[10px] font-bold ${
//                                       darkCard
//                                         ? "text-white/65"
//                                         : "text-[#6F6C75]"
//                                     }`}
//                                   >
//                                     {item}
//                                   </span>
//                                 </div>
//                               ))}
//                             </div>
//                           </div>

//                           <div>
//                             <span
//                               className={`text-[8px] font-black uppercase tracking-[.2em] ${
//                                 darkCard
//                                   ? "text-white/30"
//                                   : "text-[#24212D]/35"
//                               }`}
//                             >
//                               Areas considered
//                             </span>

//                             <div className="mt-4 space-y-2">
//                               {service.areas.map((item) => (
//                                 <div
//                                   key={item}
//                                   className="flex items-center gap-2"
//                                 >
//                                   <span
//                                     className={`h-1 w-1 rounded-full ${
//                                       darkCard
//                                         ? "bg-[#A59ED8]"
//                                         : "bg-[#6055A6]"
//                                     }`}
//                                   />

//                                   <span
//                                     className={`text-[10px] font-bold ${
//                                       darkCard
//                                         ? "text-white/65"
//                                         : "text-[#6F6C75]"
//                                     }`}
//                                   >
//                                     {item}
//                                   </span>
//                                 </div>
//                               ))}
//                             </div>
//                           </div>

//                           <div className="flex items-end sm:justify-end">
//                             <button
//                               type="button"
//                               onClick={(event) => {
//                                 event.stopPropagation();
//                                 handleServiceNavigation(service);
//                               }}
//                               className={`group/btn inline-flex w-full items-center justify-between gap-5 border-b-2 pb-4 text-left text-[8px] font-black uppercase tracking-[.18em] sm:w-auto ${
//                                 darkCard
//                                   ? "border-[#A59ED8] text-white"
//                                   : "border-[#6055A6] text-[#15131A]"
//                               }`}
//                             >
//                               Discuss service

//                               <ArrowRight
//                                 size={15}
//                                 className="transition group-hover/btn:translate-x-1"
//                               />
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>

//           {/* COUNT */}

//           <div className="mt-8 flex flex-col justify-between gap-4 border-t border-[#24212D]/10 pt-6 sm:flex-row sm:items-center">
//             <span className="text-[8px] font-black uppercase tracking-[.22em] text-[#24212D]/35">
//               {filteredServices.length} services available
//             </span>

//             {selectedCategory !== "All" && (
//               <button
//                 type="button"
//                 onClick={() => setSelectedCategory("All")}
//                 className="inline-flex items-center gap-3 text-[8px] font-black uppercase tracking-[.18em] text-[#6055A6]"
//               >
//                 Show all services
//                 <ArrowRight size={14} />
//               </button>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           SERVICE APPROACH
//       ===================================================== */}

//       <section className="bg-[#24212D] text-white">
//         <div className="mx-auto max-w-[1550px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">

//           <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">

//             <div>
//               <div className="flex items-center gap-3">
//                 <Search size={15} className="text-[#A59ED8]" />

//                 <span className="text-[8px] font-black uppercase tracking-[.28em] text-[#A59ED8]">
//                   Start with what you know
//                 </span>
//               </div>

//               <h2 className="mt-7 max-w-[520px] text-[43px] font-black leading-[.92] tracking-[-.055em] sm:text-[61px]">
//                 You don't have to
//                 <span className="block text-[#A59ED8]">
//                   identify the pest.
//                 </span>
//               </h2>

//               <p className="mt-7 max-w-[500px] text-[12px] leading-7 text-white/45">
//                 If you're unsure what you're dealing with, the
//                 signs and location can still provide a useful
//                 starting point.
//               </p>

//               <button
//                 type="button"
//                 onClick={goToContact}
//                 className="group mt-9 inline-flex items-center gap-10 bg-[#6055A6] px-6 py-5 text-[8px] font-black uppercase tracking-[.18em] text-white transition hover:bg-[#51478F]"
//               >
//                 Talk to SuperGuard

//                 <ArrowRight
//                   size={15}
//                   className="transition group-hover:translate-x-1"
//                 />
//               </button>
//             </div>

//             <div className="grid gap-0 sm:grid-cols-2">

//               <div className="border-t border-white/10 py-7 sm:pr-10">
//                 <span className="text-[8px] font-black uppercase tracking-[.2em] text-[#A59ED8]">
//                   01
//                 </span>

//                 <h3 className="mt-5 text-[25px] font-black tracking-[-.035em]">
//                   Tell us what happened.
//                 </h3>

//                 <p className="mt-3 text-[11px] leading-6 text-white/40">
//                   Explain the sightings, sounds, damage or
//                   activity you've noticed.
//                 </p>
//               </div>

//               <div className="border-t border-white/10 py-7 sm:pl-10">
//                 <span className="text-[8px] font-black uppercase tracking-[.2em] text-[#A59ED8]">
//                   02
//                 </span>

//                 <h3 className="mt-5 text-[25px] font-black tracking-[-.035em]">
//                   Tell us where it is.
//                 </h3>

//                 <p className="mt-3 text-[11px] leading-6 text-white/40">
//                   A bedroom, kitchen, loft, garden or commercial
//                   area can all provide useful context.
//                 </p>
//               </div>

//               <div className="border-t border-white/10 py-7 sm:pr-10">
//                 <span className="text-[8px] font-black uppercase tracking-[.2em] text-[#A59ED8]">
//                   03
//                 </span>

//                 <h3 className="mt-5 text-[25px] font-black tracking-[-.035em]">
//                   We establish a starting point.
//                 </h3>

//                 <p className="mt-3 text-[11px] leading-6 text-white/40">
//                   The information available helps determine
//                   which service or next step is appropriate.
//                 </p>
//               </div>

//               <div className="border-t border-white/10 py-7 sm:pl-10">
//                 <span className="text-[8px] font-black uppercase tracking-[.2em] text-[#A59ED8]">
//                   04
//                 </span>

//                 <h3 className="mt-5 text-[25px] font-black tracking-[-.035em]">
//                   Arrange the next step.
//                 </h3>

//                 <p className="mt-3 text-[11px] leading-6 text-white/40">
//                   Contact the team to discuss the property and
//                   the pest activity you're experiencing.
//                 </p>
//               </div>

//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           PROPERTY TYPES
//       ===================================================== */}

//       <section className="bg-white">
//         <div className="mx-auto max-w-[1550px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">

//           <div className="grid gap-12 lg:grid-cols-[1fr_.75fr] lg:items-end">
//             <div>
//               <span className="text-[8px] font-black uppercase tracking-[.28em] text-[#6055A6]">
//                 Property coverage
//               </span>

//               <h2 className="mt-6 max-w-[700px] text-[43px] font-black leading-[.9] tracking-[-.055em] sm:text-[63px]">
//                 Different buildings.
//                 <span className="block text-[#6055A6]">
//                   Different considerations.
//                 </span>
//               </h2>
//             </div>

//             <p className="max-w-[500px] text-[12px] leading-7 text-[#6F6C75]">
//               Pest activity doesn't look the same in every
//               property. The environment, access points and use
//               of the building all influence what needs to be
//               considered.
//             </p>
//           </div>

//           <div className="mt-16 grid border-t border-[#24212D]/10 sm:grid-cols-2 lg:grid-cols-4">

//             <div className="border-b border-[#24212D]/10 py-8 sm:border-r sm:pr-8 lg:border-b-0">
//               <Home size={20} className="text-[#6055A6]" />

//               <span className="mt-8 block text-[8px] font-black uppercase tracking-[.22em] text-[#24212D]/35">
//                 01
//               </span>

//               <h3 className="mt-3 text-[23px] font-black tracking-[-.04em]">
//                 Homes
//               </h3>

//               <p className="mt-3 text-[11px] leading-6 text-[#6F6C75]">
//                 Houses, flats and residential properties where
//                 pest activity can affect everyday spaces.
//               </p>
//             </div>

//             <div className="border-b border-[#24212D]/10 py-8 sm:pl-8 lg:border-b-0 lg:border-r lg:pr-8">
//               <Building2 size={20} className="text-[#6055A6]" />

//               <span className="mt-8 block text-[8px] font-black uppercase tracking-[.22em] text-[#24212D]/35">
//                 02
//               </span>

//               <h3 className="mt-3 text-[23px] font-black tracking-[-.04em]">
//                 Workplaces
//               </h3>

//               <p className="mt-3 text-[11px] leading-6 text-[#6F6C75]">
//                 Offices and working environments requiring
//                 practical attention to occupied spaces.
//               </p>
//             </div>

//             <div className="border-b border-[#24212D]/10 py-8 sm:border-r sm:pr-8 lg:border-b-0">
//               <ShieldCheck size={20} className="text-[#6055A6]" />

//               <span className="mt-8 block text-[8px] font-black uppercase tracking-[.22em] text-[#24212D]/35">
//                 03
//               </span>

//               <h3 className="mt-3 text-[23px] font-black tracking-[-.04em]">
//                 Managed property
//               </h3>

//               <p className="mt-3 text-[11px] leading-6 text-[#6F6C75]">
//                 Rental and managed buildings where recurring
//                 activity may require wider consideration.
//               </p>
//             </div>

//             <div className="py-8 sm:pl-8">
//               <Bug size={20} className="text-[#6055A6]" />

//               <span className="mt-8 block text-[8px] font-black uppercase tracking-[.22em] text-[#24212D]/35">
//                 04
//               </span>

//               <h3 className="mt-3 text-[23px] font-black tracking-[-.04em]">
//                 Commercial
//               </h3>

//               <p className="mt-3 text-[11px] leading-6 text-[#6F6C75]">
//                 Commercial environments where pest activity
//                 can affect customer and service areas.
//               </p>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           CHELSEA SERVICE AREA
//       ===================================================== */}

//       <section className="bg-[#6055A6] text-white">
//         <div className="mx-auto max-w-[1550px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">

//           <div className="grid gap-14 lg:grid-cols-[1.15fr_.85fr] lg:items-end">

//             <div>
//               <div className="flex items-center gap-3">
//                 <MapPin size={15} className="text-white/80" />

//                 <span className="text-[8px] font-black uppercase tracking-[.28em] text-white/65">
//                   Chelsea · London
//                 </span>
//               </div>

//               <h2 className="mt-7 max-w-[850px] text-[46px] font-black leading-[.9] tracking-[-.06em] sm:text-[67px]">
//                 Pest control
//                 <span className="block text-[#24212D]">
//                   around Chelsea.
//                 </span>
//               </h2>

//               <p className="mt-7 max-w-[620px] text-[13px] leading-7 text-white/65">
//                 SuperGuard Services Chelsea provides pest
//                 control support for homes, landlords, managed
//                 properties and businesses throughout Chelsea
//                 and nearby London areas.
//               </p>

//               <button
//                 type="button"
//                 onClick={goToContact}
//                 className="group mt-9 inline-flex items-center gap-12 bg-[#24212D] px-6 py-5 text-[8px] font-black uppercase tracking-[.18em] text-white transition hover:bg-[#15131A]"
//               >
//                 Contact SuperGuard

//                 <ArrowRight
//                   size={15}
//                   className="transition group-hover:translate-x-1"
//                 />
//               </button>
//             </div>

//             <div className="border-t border-white/20 pt-7 lg:border-l lg:border-t-0 lg:pl-10">
//               <span className="text-[8px] font-black uppercase tracking-[.23em] text-white/45">
//                 Chelsea service point
//               </span>

//               <p className="mt-5 max-w-[430px] text-[27px] font-black leading-tight tracking-[-.04em]">
//                 {LOCAL.address}
//               </p>

//               <div className="mt-9 border-t border-white/20 pt-6">
//                 <span className="text-[7px] font-black uppercase tracking-[.2em] text-white/45">
//                   Direct contact
//                 </span>

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="mt-3 flex items-center gap-3 text-[20px] font-black text-white transition hover:text-[#24212D]"
//                 >
//                   <Phone size={16} />
//                   {LOCAL.phoneDisplay}
//                 </a>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           FINAL CTA
//       ===================================================== */}

//       <section className="bg-[#15131A] text-white">
//         <div className="mx-auto max-w-[1550px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">

//           <div className="relative overflow-hidden border border-white/10 p-8 sm:p-12 lg:p-16">

//             <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#6055A6]/30" />

//             <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-[#6055A6]/20" />

//             <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

//               <div>
//                 <span className="text-[8px] font-black uppercase tracking-[.3em] text-[#A59ED8]">
//                   {LOCAL.company}
//                 </span>

//                 <h2 className="mt-7 max-w-[850px] text-[43px] font-black leading-[.9] tracking-[-.06em] sm:text-[65px]">
//                   Not sure which service
//                   <span className="block text-[#A59ED8]">
//                     you actually need?
//                   </span>
//                 </h2>

//                 <p className="mt-7 max-w-[590px] text-[12px] leading-7 text-white/40">
//                   Tell us what you've noticed, where it is
//                   happening and what type of property you're
//                   dealing with. We'll help establish the next
//                   step.
//                 </p>
//               </div>

//               <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">

//                 <button
//                   type="button"
//                   onClick={goToContact}
//                   className="group flex min-h-[56px] items-center justify-between gap-14 bg-[#6055A6] px-6 text-[8px] font-black uppercase tracking-[.18em] text-white transition hover:bg-[#51478F]"
//                 >
//                   Contact the team

//                   <ArrowRight
//                     size={15}
//                     className="transition group-hover:translate-x-1"
//                   />
//                 </button>

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="flex min-h-[56px] items-center justify-center gap-4 border border-white/15 px-6 text-[9px] font-black uppercase tracking-[.16em] text-white transition hover:border-[#A59ED8] hover:text-[#A59ED8]"
//                 >
//                   <Phone size={14} />
//                   {LOCAL.phoneDisplay}
//                   <ArrowUpRight size={14} />
//                 </a>

//               </div>
//             </div>

//             <div className="relative mt-12 flex flex-col gap-3 border-t border-white/10 pt-5 text-[8px] font-black uppercase tracking-[.18em] text-white/25 sm:flex-row sm:items-center sm:justify-between">
//               <span>{LOCAL.company}</span>

//               <span>{LOCAL.address}</span>
//             </div>

//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Services;



















// import React, { useEffect, useMemo, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// import {
//   ArrowRight,
//   ArrowUpRight,
//   MapPin,
//   Phone,
//   ShieldCheck,
//   Bug,
//   Home,
//   Building2,
//   Check,
//   Search,
//   CircleCheck,
//   ChevronRight,
//   MoveUpRight,
//   Sparkles,
// } from "lucide-react";

// import ServicesHeroSection from "../components/ServicesHeroSection";

// const Services = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [activeService, setActiveService] = useState(null);

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

//   const categories = [
//     "All",
//     "Insects",
//     "Rodents & Wildlife",
//     "Birds & Prevention",
//   ];

//   const servicesData = [
//     {
//       number: "01",
//       cat: "Insects",
//       shortTitle: "Ant Control",
//       title: `Ant Control ${LOCAL.area}`,
//       image: "/images/ants.webp",
//       eyebrow: "INSECT CONTROL",
//       intro:
//         "Persistent ant activity can quickly move beyond an occasional sighting. We focus on the areas where trails develop and where colonies may be accessing the property.",
//       signs: [
//         "Visible ant trails",
//         "Repeated sightings",
//         "Activity near food areas",
//       ],
//       areas: ["Kitchens", "Entrances", "Food storage areas"],
//       focus: "Trail activity & access points",
//     },
//     {
//       number: "02",
//       cat: "Insects",
//       shortTitle: "Bed Bug Treatment",
//       title: `Bed Bug Treatment ${LOCAL.area}`,
//       image: "/images/bedbugs.webp",
//       eyebrow: "INSECT CONTROL",
//       intro:
//         "Bed bug activity often remains hidden around sleeping areas and furniture. A careful assessment helps identify the locations requiring attention.",
//       signs: ["Bite concerns", "Small spotting", "Activity around beds"],
//       areas: ["Bedrooms", "Bed frames", "Upholstered furniture"],
//       focus: "Sleeping areas & harbourage",
//     },
//     {
//       number: "03",
//       cat: "Insects",
//       shortTitle: "Carpet Moth Treatment",
//       title: `Carpet Moth Treatment ${LOCAL.area}`,
//       image: "/images/moths.webp",
//       eyebrow: "FABRIC PEST CONTROL",
//       intro:
//         "Carpet moth activity can affect natural fibres and soft furnishings. Treatment planning considers the affected rooms and surrounding fabric areas.",
//       signs: ["Fabric damage", "Larvae or cases", "Moth sightings"],
//       areas: ["Carpets", "Rugs", "Wardrobes"],
//       focus: "Fabric areas & affected rooms",
//     },
//     {
//       number: "04",
//       cat: "Insects",
//       shortTitle: "Carpet Beetle Control",
//       title: `Carpet Beetle Control ${LOCAL.area}`,
//       image: "/images/beetle.webp",
//       eyebrow: "FABRIC PEST CONTROL",
//       intro:
//         "Carpet beetles and their larvae can remain unnoticed around fabrics and floor edges. Identifying the affected areas is an important part of the response.",
//       signs: ["Larval activity", "Fabric damage", "Beetle sightings"],
//       areas: ["Carpets", "Skirting boards", "Stored fabrics"],
//       focus: "Larvae & fabric exposure",
//     },
//     {
//       number: "05",
//       cat: "Insects",
//       shortTitle: "Cockroach Control",
//       title: `Cockroach Control ${LOCAL.area}`,
//       image: "/images/cockroach.webp",
//       eyebrow: "INSECT CONTROL",
//       intro:
//         "Cockroach activity is often associated with warm, concealed areas around kitchens and services. The surrounding environment can reveal where activity is developing.",
//       signs: ["Live sightings", "Droppings", "Activity around appliances"],
//       areas: ["Kitchens", "Utility areas", "Service spaces"],
//       focus: "Harbourage & recurring activity",
//     },
//     {
//       number: "06",
//       cat: "Rodents & Wildlife",
//       shortTitle: "Rats & Mice Control",
//       title: `Rats & Mice Control ${LOCAL.area}`,
//       image: "/images/rodents.webp",
//       eyebrow: "RODENT CONTROL",
//       intro:
//         "Rodent problems can involve more than the place where a sighting occurs. We consider signs of movement alongside possible access routes and harbourage.",
//       signs: ["Droppings", "Scratching sounds", "Gnawing or movement"],
//       areas: ["Kitchens", "Lofts", "Wall and service voids"],
//       focus: "Activity, access & harbourage",
//     },
//     {
//       number: "07",
//       cat: "Insects",
//       shortTitle: "Flea Treatment",
//       title: `Flea Treatment ${LOCAL.area}`,
//       image: "/images/flea.webp",
//       eyebrow: "INSECT CONTROL",
//       intro:
//         "Flea activity can remain around carpets, upholstery and flooring even when the insects themselves are difficult to spot.",
//       signs: ["Repeated bites", "Flea sightings", "Pet-area activity"],
//       areas: ["Carpets", "Upholstery", "Flooring"],
//       focus: "Affected rooms & soft surfaces",
//     },
//     {
//       number: "08",
//       cat: "Insects",
//       shortTitle: "Wasp Nest Control",
//       title: `Wasp Nest Control ${LOCAL.area}`,
//       image: "/images/wasps.webp",
//       eyebrow: "STINGING INSECT CONTROL",
//       intro:
//         "Wasp nests can develop in roofs, wall cavities, sheds and other sheltered locations. Identifying the nest location is central to dealing with the activity safely.",
//       signs: [
//         "Repeated wasp movement",
//         "Visible nest activity",
//         "Concentrated entry points",
//       ],
//       areas: ["Roof spaces", "Wall cavities", "Sheds & gardens"],
//       focus: "Nest location & activity",
//     },
//     {
//       number: "09",
//       cat: "Insects",
//       shortTitle: "Bee Activity Support",
//       title: `Bee Activity Support ${LOCAL.area}`,
//       image: "/images/bee.webp",
//       eyebrow: "BEE ACTIVITY",
//       intro:
//         "Unusual bee activity around a property should first be understood before action is considered. Location and behaviour can help determine the appropriate next step.",
//       signs: [
//         "Repeated bee movement",
//         "Entry into a structure",
//         "Concentrated activity",
//       ],
//       areas: ["Roof areas", "Walls", "External entrances"],
//       focus: "Identification & location",
//     },
//     {
//       number: "10",
//       cat: "Rodents & Wildlife",
//       shortTitle: "Squirrel Control",
//       title: `Squirrel Control ${LOCAL.area}`,
//       image: "/images/squirrel.webp",
//       eyebrow: "WILDLIFE CONTROL",
//       intro:
//         "Noises and movement in roof or loft spaces can indicate squirrel activity. The property layout can help identify how wildlife is accessing concealed areas.",
//       signs: ["Loft noises", "Movement above ceilings", "Gnawing damage"],
//       areas: ["Lofts", "Roof spaces", "External access points"],
//       focus: "Roof access & activity",
//     },
//     {
//       number: "11",
//       cat: "Birds & Prevention",
//       shortTitle: "Property Proofing",
//       title: `Property Proofing ${LOCAL.area}`,
//       image: "/images/hygene.webp",
//       eyebrow: "PREVENTION",
//       intro:
//         "Where pest activity is linked to gaps or accessible areas, property proofing can help reduce opportunities for future access.",
//       signs: ["Visible gaps", "Repeated access", "Damage around openings"],
//       areas: ["Rooflines", "Vents", "Service openings"],
//       focus: "Access reduction & prevention",
//     },
//     {
//       number: "12",
//       cat: "Birds & Prevention",
//       shortTitle: "Bird Control",
//       title: `Bird Control ${LOCAL.area}`,
//       image: "/images/birds.webp",
//       eyebrow: "BIRD CONTROL",
//       intro:
//         "Persistent bird activity can affect roofs, ledges, balconies and commercial areas. The structure and location of the activity guide the appropriate response.",
//       signs: [
//         "Repeated landing",
//         "Nesting activity",
//         "Droppings around surfaces",
//       ],
//       areas: ["Roofs", "Ledges", "Balconies & buildings"],
//       focus: "Landing & nesting areas",
//     },
//   ];

//   const filteredServices = useMemo(() => {
//     if (selectedCategory === "All") {
//       return servicesData;
//     }

//     return servicesData.filter(
//       (service) => service.cat === selectedCategory
//     );
//   }, [selectedCategory]);

//   const goToContact = () => {
//     navigate("/contact-us");
//   };

//   const handleServiceNavigation = (service) => {
//     navigate("/contact-us", {
//       state: {
//         service: service.title,
//       },
//     });
//   };

//   useEffect(() => {
//     const state = location.state;

//     if (!state) return;

//     if (state.category && categories.includes(state.category)) {
//       setSelectedCategory(state.category);
//     }

//     if (!state.scrollToService) return;

//     const timer = window.setTimeout(() => {
//       const searchText = String(state.scrollToService).toLowerCase();

//       const target = servicesData.find((service) => {
//         return (
//           service.title.toLowerCase().includes(searchText) ||
//           service.shortTitle.toLowerCase().includes(searchText)
//         );
//       });

//       if (target) {
//         const element = document.getElementById(
//           `service-${target.number}`
//         );

//         if (element) {
//           element.scrollIntoView({
//             behavior: "smooth",
//             block: "center",
//           });
//         }
//       }
//     }, 600);

//     return () => window.clearTimeout(timer);
//   }, [location.state]);

//   return (
//     <div className="overflow-hidden bg-[#F7F6FA] text-[#15131A]">
//       {/* =====================================================
//           HERO — EXISTING COMPONENT KEPT
//       ===================================================== */}

//       <ServicesHeroSection />

//       {/* =====================================================
//           NEW SERVICE INTRO
//       ===================================================== */}

//       <section className="relative bg-[#F7F6FA] py-24 sm:py-32 lg:py-40">
//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
//           <div className="grid gap-16 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
//             <div>
//               <div className="flex items-center gap-4">
//                 <span className="h-[2px] w-10 bg-[#6055A6]" />

//                 <span className="text-[9px] font-black uppercase tracking-[.3em] text-[#6055A6]">
//                   Pest services · {LOCAL.area}
//                 </span>
//               </div>

//               <h2 className="mt-8 max-w-[650px] text-[48px] font-black leading-[.88] tracking-[-.065em] sm:text-[68px] lg:text-[82px]">
//                 One property.
//                 <span className="block text-[#6055A6]">
//                   Many possibilities.
//                 </span>
//               </h2>
//             </div>

//             <div className="lg:pt-5">
//               <div className="max-w-[700px] border-l-2 border-[#6055A6]/20 pl-7 sm:pl-10">
//                 <p className="text-[14px] leading-8 text-[#6F6C75] sm:text-[15px]">
//                   From insects and rodents to wildlife, birds and
//                   preventative proofing, {LOCAL.company} provides a
//                   broad range of pest-control services across{" "}
//                   {LOCAL.area} and surrounding London areas.
//                 </p>

//                 <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4">
//                   {[
//                     "Residential",
//                     "Commercial",
//                     "Managed properties",
//                     "Local support",
//                   ].map((item) => (
//                     <div
//                       key={item}
//                       className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[.18em] text-[#24212D]/60"
//                     >
//                       <CircleCheck
//                         size={13}
//                         className="text-[#6055A6]"
//                       />
//                       {item}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* =====================================================
//               FILTERS
//           ===================================================== */}

//           <div className="mt-20 border-y border-[#24212D]/10 py-5">
//             <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
//               <div className="flex items-center gap-3">
//                 <Search size={15} className="text-[#6055A6]" />

//                 <span className="text-[9px] font-black uppercase tracking-[.25em] text-[#24212D]/45">
//                   Browse services
//                 </span>
//               </div>

//               <div className="flex flex-wrap gap-2">
//                 {categories.map((category) => {
//                   const active = selectedCategory === category;

//                   return (
//                     <button
//                       key={category}
//                       type="button"
//                       onClick={() => setSelectedCategory(category)}
//                       className={`rounded-full px-5 py-3 text-[9px] font-black uppercase tracking-[.13em] transition ${
//                         active
//                           ? "bg-[#6055A6] text-white shadow-lg shadow-[#6055A6]/20"
//                           : "border border-[#24212D]/10 bg-white text-[#6F6C75] hover:border-[#6055A6] hover:text-[#6055A6]"
//                       }`}
//                     >
//                       {category}
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           SERVICES — COMPLETELY NEW VISUAL
//       ===================================================== */}

//       <section
//         id="services-list"
//         className="bg-white pb-24 sm:pb-32 lg:pb-40"
//       >
//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             {filteredServices.map((service, index) => {
//               const isActive = activeService === service.number;

//               return (
//                 <article
//                   key={service.number}
//                   id={`service-${service.number}`}
//                   onMouseEnter={() =>
//                     setActiveService(service.number)
//                   }
//                   onMouseLeave={() => setActiveService(null)}
//                   onClick={() => handleServiceNavigation(service)}
//                   className={`group relative cursor-pointer overflow-hidden border border-[#24212D]/10 transition-all duration-500 ${
//                     index === 0
//                       ? "lg:col-span-2 lg:row-span-2"
//                       : ""
//                   } ${
//                     isActive
//                       ? "border-[#6055A6]/50 shadow-2xl shadow-[#6055A6]/10"
//                       : "hover:-translate-y-2 hover:shadow-xl"
//                   }`}
//                 >
//                   {/* IMAGE */}

//                   <div
//                     className={`relative overflow-hidden ${
//                       index === 0
//                         ? "h-[570px] sm:h-[650px] lg:h-[720px]"
//                         : "h-[390px] sm:h-[430px]"
//                     }`}
//                   >
//                     <img
//                       src={service.image}
//                       alt={`${service.title} service in ${LOCAL.area}`}
//                       loading="lazy"
//                       className="h-full w-full object-cover transition duration-[900ms] ease-out group-hover:scale-110"
//                     />

//                     <div className="absolute inset-0 bg-gradient-to-t from-[#15131A] via-[#15131A]/20 to-transparent opacity-90" />

//                     <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 sm:p-7">
//                       <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[10px] font-black text-[#6055A6] shadow-xl">
//                         {service.number}
//                       </span>

//                       <span className="rounded-full border border-white/20 bg-[#15131A]/40 px-4 py-2 text-[8px] font-black uppercase tracking-[.18em] text-white backdrop-blur-md">
//                         {service.cat}
//                       </span>
//                     </div>

//                     <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-9">
//                       <span className="text-[8px] font-black uppercase tracking-[.25em] text-[#A59ED8]">
//                         {service.eyebrow}
//                       </span>

//                       <h3
//                         className={`mt-4 max-w-[620px] font-black leading-[.9] tracking-[-.055em] text-white ${
//                           index === 0
//                             ? "text-[48px] sm:text-[61px] lg:text-[73px]"
//                             : "text-[38px] sm:text-[44px]"
//                         }`}
//                       >
//                         {service.shortTitle}
//                       </h3>

//                       <div className="mt-7 flex items-center justify-between gap-5 border-t border-white/20 pt-5">
//                         <span className="text-[9px] font-bold uppercase tracking-[.14em] text-white/50">
//                           {service.focus}
//                         </span>

//                         <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#6055A6] text-white transition duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#6055A6]">
//                           <ArrowUpRight size={17} />
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* HOVER / INFORMATION PANEL */}

//                   <div className="absolute inset-x-0 bottom-0 translate-y-full bg-[#24212D] p-6 text-white transition duration-500 group-hover:translate-y-0 sm:p-7">
//                     <div className="grid gap-5 sm:grid-cols-2">
//                       <div>
//                         <span className="text-[8px] font-black uppercase tracking-[.2em] text-[#A59ED8]">
//                           Common signs
//                         </span>

//                         <div className="mt-3 space-y-2">
//                           {service.signs.map((item) => (
//                             <div
//                               key={item}
//                               className="flex items-center gap-2"
//                             >
//                               <Check
//                                 size={12}
//                                 className="text-[#A59ED8]"
//                               />

//                               <span className="text-[10px] text-white/60">
//                                 {item}
//                               </span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>

//                       <div>
//                         <span className="text-[8px] font-black uppercase tracking-[.2em] text-[#A59ED8]">
//                           Areas considered
//                         </span>

//                         <div className="mt-3 space-y-2">
//                           {service.areas.map((item) => (
//                             <div
//                               key={item}
//                               className="flex items-center gap-2"
//                             >
//                               <span className="h-1 w-1 rounded-full bg-[#A59ED8]" />

//                               <span className="text-[10px] text-white/60">
//                                 {item}
//                               </span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>

//           {/* SERVICE COUNT */}

//           <div className="mt-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
//             <span className="text-[8px] font-black uppercase tracking-[.22em] text-[#24212D]/35">
//               Showing {filteredServices.length} services
//             </span>

//             {selectedCategory !== "All" && (
//               <button
//                 type="button"
//                 onClick={() => setSelectedCategory("All")}
//                 className="inline-flex items-center gap-3 text-[9px] font-black uppercase tracking-[.18em] text-[#6055A6]"
//               >
//                 View all services
//                 <ArrowRight size={14} />
//               </button>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           SERVICE APPROACH — NEW
//       ===================================================== */}

//       <section className="relative overflow-hidden bg-[#24212D] text-white">
//         <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full border border-white/5" />
//         <div className="absolute -right-20 top-20 h-[340px] w-[340px] rounded-full border border-[#A59ED8]/10" />

//         <div className="relative mx-auto max-w-[1500px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
//           <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
//             <div>
//               <div className="flex items-center gap-3">
//                 <Sparkles
//                   size={15}
//                   className="text-[#A59ED8]"
//                 />

//                 <span className="text-[8px] font-black uppercase tracking-[.3em] text-[#A59ED8]">
//                   How we approach it
//                 </span>
//               </div>

//               <h2 className="mt-7 max-w-[570px] text-[48px] font-black leading-[.88] tracking-[-.06em] sm:text-[67px]">
//                 Start with
//                 <span className="block text-[#A59ED8]">
//                   the signs.
//                 </span>
//               </h2>

//               <p className="mt-7 max-w-[500px] text-[13px] leading-7 text-white/45">
//                 You do not need to know exactly which pest is
//                 causing the problem. What you have noticed,
//                 where it is happening and the type of property
//                 can all provide useful information.
//               </p>

//               <button
//                 type="button"
//                 onClick={goToContact}
//                 className="group mt-9 inline-flex items-center gap-12 bg-[#6055A6] px-6 py-5 text-[8px] font-black uppercase tracking-[.18em] text-white transition hover:bg-[#51478F]"
//               >
//                 Discuss the problem

//                 <ArrowRight
//                   size={15}
//                   className="transition group-hover:translate-x-1"
//                 />
//               </button>
//             </div>

//             <div className="grid border-t border-white/10 sm:grid-cols-2">
//               {[
//                 {
//                   no: "01",
//                   title: "Tell us what you noticed.",
//                   text: "Sightings, sounds, damage or unusual activity can all help establish the starting point.",
//                 },
//                 {
//                   no: "02",
//                   title: "Tell us where it happens.",
//                   text: "A bedroom, kitchen, loft, garden or commercial space can change what needs to be considered.",
//                 },
//                 {
//                   no: "03",
//                   title: "We establish the likely direction.",
//                   text: "The available information helps identify which type of service may be relevant.",
//                 },
//                 {
//                   no: "04",
//                   title: "Arrange the next step.",
//                   text: "Contact SuperGuard Woolwich to discuss the property and the pest activity.",
//                 },
//               ].map((step) => (
//                 <div
//                   key={step.no}
//                   className="border-b border-white/10 py-8 sm:px-7 sm:py-10"
//                 >
//                   <span className="text-[9px] font-black tracking-[.2em] text-[#A59ED8]">
//                     {step.no}
//                   </span>

//                   <h3 className="mt-5 text-[23px] font-black leading-tight tracking-[-.035em]">
//                     {step.title}
//                   </h3>

//                   <p className="mt-3 max-w-[330px] text-[11px] leading-6 text-white/40">
//                     {step.text}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           PROPERTY TYPES — NEW SPLIT DESIGN
//       ===================================================== */}

//       <section className="bg-[#F7F6FA] py-24 sm:py-32 lg:py-40">
//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
//           <div className="grid gap-12 lg:grid-cols-[1fr_.8fr] lg:items-end">
//             <div>
//               <span className="text-[8px] font-black uppercase tracking-[.3em] text-[#6055A6]">
//                 Property coverage
//               </span>

//               <h2 className="mt-7 max-w-[760px] text-[48px] font-black leading-[.88] tracking-[-.06em] sm:text-[68px] lg:text-[78px]">
//                 Every building
//                 <span className="block text-[#6055A6]">
//                   has its own variables.
//                 </span>
//               </h2>
//             </div>

//             <p className="max-w-[520px] text-[13px] leading-7 text-[#6F6C75]">
//               Pest activity can behave differently depending on
//               how a building is used, where access points are
//               located and how the surrounding environment is
//               managed.
//             </p>
//           </div>

//           <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
//             {[
//               {
//                 no: "01",
//                 icon: Home,
//                 title: "Homes",
//                 text: "Houses, flats and residential properties across Woolwich and surrounding areas.",
//               },
//               {
//                 no: "02",
//                 icon: Building2,
//                 title: "Workplaces",
//                 text: "Offices and working environments where pest activity needs practical attention.",
//               },
//               {
//                 no: "03",
//                 icon: ShieldCheck,
//                 title: "Managed property",
//                 text: "Rental and managed buildings where recurring activity may require wider consideration.",
//               },
//               {
//                 no: "04",
//                 icon: Bug,
//                 title: "Commercial",
//                 text: "Commercial environments where pest activity can affect customer and service areas.",
//               },
//             ].map((item) => {
//               const Icon = item.icon;

//               return (
//                 <div
//                   key={item.no}
//                   className="group relative overflow-hidden border border-[#24212D]/10 bg-white p-7 transition duration-500 hover:-translate-y-2 hover:border-[#6055A6]/30 hover:shadow-xl sm:p-8"
//                 >
//                   <div className="flex items-center justify-between">
//                     <Icon
//                       size={21}
//                       className="text-[#6055A6]"
//                     />

//                     <span className="text-[9px] font-black tracking-[.2em] text-[#24212D]/20">
//                       {item.no}
//                     </span>
//                   </div>

//                   <h3 className="mt-16 text-[25px] font-black tracking-[-.045em]">
//                     {item.title}
//                   </h3>

//                   <p className="mt-3 text-[11px] leading-6 text-[#6F6C75]">
//                     {item.text}
//                   </p>

//                   <div className="mt-10 h-[2px] w-8 bg-[#6055A6] transition-all duration-500 group-hover:w-full" />
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           WOOLWICH AREA SECTION — NEW
//       ===================================================== */}

//       <section className="bg-[#6055A6] text-white">
//         <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
//           <div className="grid gap-16 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
//             <div>
//               <div className="flex items-center gap-3">
//                 <MapPin
//                   size={15}
//                   className="text-white/80"
//                 />

//                 <span className="text-[8px] font-black uppercase tracking-[.3em] text-white/65">
//                   {LOCAL.area} · {LOCAL.city}
//                 </span>
//               </div>

//               <h2 className="mt-7 max-w-[900px] text-[50px] font-black leading-[.86] tracking-[-.065em] sm:text-[70px] lg:text-[88px]">
//                 Pest control
//                 <span className="block text-[#24212D]">
//                   around Woolwich.
//                 </span>
//               </h2>

//               <p className="mt-8 max-w-[650px] text-[13px] leading-7 text-white/65">
//                 {LOCAL.company} provides pest-control support
//                 for homes, landlords, managed properties and
//                 businesses throughout {LOCAL.area} and nearby
//                 London areas.
//               </p>

//               <button
//                 type="button"
//                 onClick={goToContact}
//                 className="group mt-10 inline-flex items-center gap-12 bg-[#24212D] px-7 py-5 text-[8px] font-black uppercase tracking-[.18em] text-white transition hover:bg-[#15131A]"
//               >
//                 Contact SuperGuard

//                 <ArrowRight
//                   size={15}
//                   className="transition group-hover:translate-x-1"
//                 />
//               </button>
//             </div>

//             <div className="border-t border-white/20 pt-8 lg:border-l lg:border-t-0 lg:pl-12">
//               <span className="text-[8px] font-black uppercase tracking-[.25em] text-white/45">
//                 Woolwich service point
//               </span>

//               <p className="mt-5 max-w-[450px] text-[27px] font-black leading-tight tracking-[-.045em] sm:text-[31px]">
//                 {LOCAL.address}
//               </p>

//               <div className="mt-10 border-t border-white/20 pt-7">
//                 <span className="text-[7px] font-black uppercase tracking-[.22em] text-white/45">
//                   Direct contact
//                 </span>

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="mt-3 flex items-center gap-3 text-[21px] font-black text-white transition hover:text-[#24212D]"
//                 >
//                   <Phone size={16} />
//                   {LOCAL.phoneDisplay}
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           FINAL CTA — COMPLETELY NEW
//       ===================================================== */}

//       <section className="bg-[#15131A] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12 lg:py-40">
//         <div className="mx-auto max-w-[1500px]">
//           <div className="relative overflow-hidden border border-white/10">
//             <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-[#6055A6]/20" />

//             <div className="absolute -right-10 -top-10 h-[260px] w-[260px] rounded-full border border-[#6055A6]/15" />

//             <div className="relative grid gap-14 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:p-20">
//               <div>
//                 <span className="text-[8px] font-black uppercase tracking-[.3em] text-[#A59ED8]">
//                   {LOCAL.shortName}
//                 </span>

//                 <h2 className="mt-7 max-w-[850px] text-[48px] font-black leading-[.86] tracking-[-.065em] sm:text-[68px] lg:text-[80px]">
//                   Not sure which
//                   <span className="block text-[#A59ED8]">
//                     service you need?
//                   </span>
//                 </h2>

//                 <p className="mt-8 max-w-[600px] text-[12px] leading-7 text-white/40">
//                   Tell us what you have noticed, where the
//                   activity is happening and what type of property
//                   you are dealing with. We can help establish
//                   the next step.
//                 </p>
//               </div>

//               <div className="flex flex-col gap-3 self-end">
//                 <button
//                   type="button"
//                   onClick={goToContact}
//                   className="group flex min-h-[58px] items-center justify-between gap-16 bg-[#6055A6] px-6 text-[8px] font-black uppercase tracking-[.18em] text-white transition hover:bg-[#51478F]"
//                 >
//                   Contact the team

//                   <ArrowRight
//                     size={15}
//                     className="transition group-hover:translate-x-1"
//                   />
//                 </button>

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="flex min-h-[58px] items-center justify-center gap-4 border border-white/15 px-6 text-[9px] font-black uppercase tracking-[.16em] text-white transition hover:border-[#A59ED8] hover:text-[#A59ED8]"
//                 >
//                   <Phone size={14} />

//                   {LOCAL.phoneDisplay}

//                   <MoveUpRight size={14} />
//                 </a>
//               </div>
//             </div>

//             <div className="relative flex flex-col gap-3 border-t border-white/10 px-8 py-5 text-[8px] font-black uppercase tracking-[.18em] text-white/25 sm:flex-row sm:items-center sm:justify-between sm:px-12 lg:px-20">
//               <span>{LOCAL.company}</span>

//               <span>{LOCAL.address}</span>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Services;



























// import React, { useEffect, useMemo, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   MapPin,
//   Phone,
//   ShieldCheck,
//   Bug,
//   Home,
//   Building2,
//   Check,
//   Search,
//   CircleCheck,
//   Sparkles,
// } from "lucide-react";

// import ServicesHeroSection from "../components/ServicesHeroSection";

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

// const CATEGORIES = [
//   "All",
//   "Insects",
//   "Rodents & Wildlife",
//   "Birds & Prevention",
// ];

// const SERVICES = [
//   {
//     number: "01",
//     cat: "Insects",
//     shortTitle: "Ant Control",
//     title: `Ant Control ${LOCAL.area}`,
//     image: "/images/ants.webp",
//     eyebrow: "INSECT CONTROL",
//     intro:
//       "Persistent ant activity can move beyond an occasional sighting. We focus on where trails develop and where colonies may be accessing the property.",
//     signs: ["Visible ant trails", "Repeated sightings", "Activity near food areas"],
//     areas: ["Kitchens", "Entrances", "Food storage areas"],
//     focus: "Trail activity & access points",
//   },
//   {
//     number: "02",
//     cat: "Insects",
//     shortTitle: "Bed Bug Treatment",
//     title: `Bed Bug Treatment ${LOCAL.area}`,
//     image: "/images/bedbugs.webp",
//     eyebrow: "INSECT CONTROL",
//     intro:
//       "Bed bug activity can remain hidden around sleeping areas and furniture. A careful assessment helps identify locations requiring attention.",
//     signs: ["Bite concerns", "Small spotting", "Activity around beds"],
//     areas: ["Bedrooms", "Bed frames", "Upholstered furniture"],
//     focus: "Sleeping areas & harbourage",
//   },
//   {
//     number: "03",
//     cat: "Insects",
//     shortTitle: "Carpet Moth Treatment",
//     title: `Carpet Moth Treatment ${LOCAL.area}`,
//     image: "/images/moths.webp",
//     eyebrow: "FABRIC PEST CONTROL",
//     intro:
//       "Carpet moth activity can affect natural fibres and soft furnishings. Treatment planning considers affected rooms and surrounding fabric areas.",
//     signs: ["Fabric damage", "Larvae or cases", "Moth sightings"],
//     areas: ["Carpets", "Rugs", "Wardrobes"],
//     focus: "Fabric areas & affected rooms",
//   },
//   {
//     number: "04",
//     cat: "Insects",
//     shortTitle: "Carpet Beetle Control",
//     title: `Carpet Beetle Control ${LOCAL.area}`,
//     image: "/images/beetle.webp",
//     eyebrow: "FABRIC PEST CONTROL",
//     intro:
//       "Carpet beetles and their larvae can remain unnoticed around fabrics and floor edges. Identifying affected areas is an important first step.",
//     signs: ["Larval activity", "Fabric damage", "Beetle sightings"],
//     areas: ["Carpets", "Skirting boards", "Stored fabrics"],
//     focus: "Larvae & fabric exposure",
//   },
//   {
//     number: "05",
//     cat: "Insects",
//     shortTitle: "Cockroach Control",
//     title: `Cockroach Control ${LOCAL.area}`,
//     image: "/images/cockroach.webp",
//     eyebrow: "INSECT CONTROL",
//     intro:
//       "Cockroach activity is often associated with warm, concealed areas around kitchens and services. The surrounding environment can reveal where activity is developing.",
//     signs: ["Live sightings", "Droppings", "Activity around appliances"],
//     areas: ["Kitchens", "Utility areas", "Service spaces"],
//     focus: "Harbourage & recurring activity",
//   },
//   {
//     number: "06",
//     cat: "Rodents & Wildlife",
//     shortTitle: "Rats & Mice Control",
//     title: `Rats & Mice Control ${LOCAL.area}`,
//     image: "/images/rodents.webp",
//     eyebrow: "RODENT CONTROL",
//     intro:
//       "Rodent problems can involve more than the location of a sighting. We consider movement alongside possible access routes and harbourage.",
//     signs: ["Droppings", "Scratching sounds", "Gnawing or movement"],
//     areas: ["Kitchens", "Lofts", "Wall and service voids"],
//     focus: "Activity, access & harbourage",
//   },
//   {
//     number: "07",
//     cat: "Insects",
//     shortTitle: "Flea Treatment",
//     title: `Flea Treatment ${LOCAL.area}`,
//     image: "/images/flea.webp",
//     eyebrow: "INSECT CONTROL",
//     intro:
//       "Flea activity can remain around carpets, upholstery and flooring even when the insects themselves are difficult to spot.",
//     signs: ["Repeated bites", "Flea sightings", "Pet-area activity"],
//     areas: ["Carpets", "Upholstery", "Flooring"],
//     focus: "Affected rooms & soft surfaces",
//   },
//   {
//     number: "08",
//     cat: "Insects",
//     shortTitle: "Wasp Nest Control",
//     title: `Wasp Nest Control ${LOCAL.area}`,
//     image: "/images/wasps.webp",
//     eyebrow: "STINGING INSECT CONTROL",
//     intro:
//       "Wasp nests can develop in roofs, wall cavities, sheds and other sheltered locations. Identifying the nest location is central to deciding the appropriate response.",
//     signs: ["Repeated wasp movement", "Visible nest activity", "Concentrated entry points"],
//     areas: ["Roof spaces", "Wall cavities", "Sheds & gardens"],
//     focus: "Nest location & activity",
//   },
//   {
//     number: "09",
//     cat: "Insects",
//     shortTitle: "Bee Activity Support",
//     title: `Bee Activity Support ${LOCAL.area}`,
//     image: "/images/bee.webp",
//     eyebrow: "BEE ACTIVITY",
//     intro:
//       "Unusual bee activity should be understood before action is considered. Location and behaviour can help determine the appropriate next step.",
//     signs: ["Repeated bee movement", "Entry into a structure", "Concentrated activity"],
//     areas: ["Roof areas", "Walls", "External entrances"],
//     focus: "Identification & location",
//   },
//   {
//     number: "10",
//     cat: "Rodents & Wildlife",
//     shortTitle: "Squirrel Control",
//     title: `Squirrel Control ${LOCAL.area}`,
//     image: "/images/squirrel.webp",
//     eyebrow: "WILDLIFE CONTROL",
//     intro:
//       "Noises and movement in roof or loft spaces can indicate squirrel activity. The property layout can help identify how wildlife is accessing concealed areas.",
//     signs: ["Loft noises", "Movement above ceilings", "Gnawing damage"],
//     areas: ["Lofts", "Roof spaces", "External access points"],
//     focus: "Roof access & activity",
//   },
//   {
//     number: "11",
//     cat: "Birds & Prevention",
//     shortTitle: "Property Proofing",
//     title: `Property Proofing ${LOCAL.area}`,
//     image: "/images/hygene.webp",
//     eyebrow: "PREVENTION",
//     intro:
//       "Where pest activity is linked to gaps or accessible areas, property proofing can help reduce opportunities for future access.",
//     signs: ["Visible gaps", "Repeated access", "Damage around openings"],
//     areas: ["Rooflines", "Vents", "Service openings"],
//     focus: "Access reduction & prevention",
//   },
//   {
//     number: "12",
//     cat: "Birds & Prevention",
//     shortTitle: "Bird Control",
//     title: `Bird Control ${LOCAL.area}`,
//     image: "/images/birds.webp",
//     eyebrow: "BIRD CONTROL",
//     intro:
//       "Persistent bird activity can affect roofs, ledges, balconies and commercial areas. The structure and location of the activity guide the appropriate response.",
//     signs: ["Repeated landing", "Nesting activity", "Droppings around surfaces"],
//     areas: ["Roofs", "Ledges", "Balconies & buildings"],
//     focus: "Landing & nesting areas",
//   },
// ];

// const APPROACH = [
//   {
//     number: "01",
//     title: "Describe the signs",
//     text: "Sightings, sounds, damage and unusual activity can help establish a starting point.",
//   },
//   {
//     number: "02",
//     title: "Identify the location",
//     text: "A kitchen, bedroom, loft, garden or commercial space can change what needs to be considered.",
//   },
//   {
//     number: "03",
//     title: "Establish the likely issue",
//     text: "The available information helps identify which type of pest service may be relevant.",
//   },
//   {
//     number: "04",
//     title: "Plan the next step",
//     text: "Discuss the property and pest activity with the SuperGuard Chessington team.",
//   },
// ];

// const PROPERTIES = [
//   {
//     number: "01",
//     title: "Homes & flats",
//     text: "Support for residential properties, homeowners and tenants.",
//     icon: Home,
//   },
//   {
//     number: "02",
//     title: "Workplaces",
//     text: "Practical support for offices and working environments.",
//     icon: Building2,
//   },
//   {
//     number: "03",
//     title: "Managed property",
//     text: "Consideration for rental buildings and recurring pest activity.",
//     icon: ShieldCheck,
//   },
//   {
//     number: "04",
//     title: "Commercial premises",
//     text: "Services for commercial environments and customer-facing spaces.",
//     icon: Bug,
//   },
// ];

// const IMAGE_SHAPES = [
//   "rounded-t-[46%] rounded-b-[8px]",
//   "rounded-tr-[46%] rounded-bl-[46%] rounded-tl-[8px] rounded-br-[8px]",
//   "rounded-[8px] rounded-tl-[42%]",
//   "rounded-[8px] rounded-br-[42%]",
//   "rounded-t-[42%] rounded-b-[8px]",
//   "rounded-tr-[44%] rounded-bl-[8px] rounded-tl-[8px] rounded-br-[8px]",
// ];

// function ServiceCard({ service, index, onSelect }) {
//   const shape = IMAGE_SHAPES[index % IMAGE_SHAPES.length];
//   const isFeature = index === 0;

//   return (
//     <article
//       id={`service-${service.number}`}
//       className={`group min-w-0 ${
//         isFeature ? "lg:col-span-7" : "lg:col-span-5"
//       }`}
//     >
//       <button
//         type="button"
//         onClick={() => onSelect(service)}
//         aria-label={`Enquire about ${service.title}`}
//         className="block w-full text-left"
//       >
//         <div
//           className={`relative overflow-hidden bg-[#E9E5F3] ${
//             isFeature ? "mx-auto max-w-[680px]" : ""
//           }`}
//         >
//           <div
//             className={`relative overflow-hidden ${shape} ${
//               isFeature
//                 ? "aspect-[.94] sm:aspect-[1.15] lg:aspect-[1.05]"
//                 : "aspect-[1.05] sm:aspect-[1.12]"
//             }`}
//           >
//             <img
//               src={service.image}
//               alt={`${service.shortTitle} service in ${LOCAL.area}`}
//               loading="lazy"
//               className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-[#15131A]/70 via-transparent to-[#15131A]/5" />

//             <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[10px] font-black text-[#6055A6] shadow-lg sm:left-6 sm:top-6 sm:h-12 sm:w-12">
//               {service.number}
//             </div>

//             <div className="absolute right-4 top-4 max-w-[65%] rounded-full border border-white/30 bg-[#15131A]/40 px-3 py-2 text-[7px] font-black uppercase tracking-[.12em] text-white backdrop-blur-md sm:right-6 sm:top-6 sm:px-4">
//               {service.cat}
//             </div>

//             <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-8">
//               <span className="text-[8px] font-black uppercase tracking-[.22em] text-[#C8C1EE]">
//                 {service.eyebrow}
//               </span>

//               <h3
//                 className={`mt-3 max-w-[540px] font-black leading-[.94] tracking-[-.055em] text-white ${
//                   isFeature
//                     ? "text-[clamp(2.3rem,5.4vw,4.7rem)]"
//                     : "text-[clamp(1.9rem,3.2vw,3rem)]"
//                 }`}
//               >
//                 {service.shortTitle}
//               </h3>

//               <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/25 pt-4">
//                 <span className="text-[8px] font-bold uppercase tracking-[.12em] text-white/75 sm:text-[9px]">
//                   {service.focus}
//                 </span>
//                 <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6055A6] text-white transition duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#6055A6]">
//                   <ArrowUpRight size={16} />
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </button>

//       <div className={`pt-5 ${isFeature ? "lg:pl-5" : ""}`}>
//         <p className="max-w-[650px] text-[12px] leading-7 text-[#77737C] sm:text-[13px]">
//           {service.intro}
//         </p>

//         <div className="mt-5 grid gap-5 sm:grid-cols-2">
//           <div>
//             <span className="text-[8px] font-black uppercase tracking-[.18em] text-[#6055A6]">
//               Common signs
//             </span>
//             <ul className="mt-3 space-y-2">
//               {service.signs.map((sign) => (
//                 <li key={sign} className="flex items-start gap-2 text-[10px] text-[#5F5B66]">
//                   <Check size={12} className="mt-0.5 shrink-0 text-[#6055A6]" />
//                   {sign}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <span className="text-[8px] font-black uppercase tracking-[.18em] text-[#6055A6]">
//               Areas considered
//             </span>
//             <ul className="mt-3 space-y-2">
//               {service.areas.map((area) => (
//                 <li key={area} className="flex items-start gap-2 text-[10px] text-[#5F5B66]">
//                   <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#A59ED8]" />
//                   {area}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <button
//           type="button"
//           onClick={() => onSelect(service)}
//           className="mt-6 inline-flex items-center gap-3 border-b border-[#6055A6]/30 pb-2 text-[9px] font-black uppercase tracking-[.15em] text-[#6055A6] transition hover:border-[#6055A6] hover:text-[#51478F]"
//         >
//           Enquire about this service
//           <ArrowRight size={14} />
//         </button>
//       </div>
//     </article>
//   );
// }

// export default function Services() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const filteredServices = useMemo(
//     () =>
//       selectedCategory === "All"
//         ? SERVICES
//         : SERVICES.filter((service) => service.cat === selectedCategory),
//     [selectedCategory]
//   );

//   const goToContact = () => {
//     navigate("/contact-us");
//   };

//   const handleServiceNavigation = (service) => {
//     navigate("/contact-us", {
//       state: { service: service.title },
//     });
//   };

//   useEffect(() => {
//     const state = location.state;
//     if (!state) return;

//     if (state.category && CATEGORIES.includes(state.category)) {
//       setSelectedCategory(state.category);
//     }

//     if (!state.scrollToService) return;

//     const timer = window.setTimeout(() => {
//       const searchText = String(state.scrollToService).toLowerCase();

//       const target = SERVICES.find(
//         (service) =>
//           service.title.toLowerCase().includes(searchText) ||
//           service.shortTitle.toLowerCase().includes(searchText)
//       );

//       if (target) {
//         document.getElementById(`service-${target.number}`)?.scrollIntoView({
//           behavior: "smooth",
//           block: "center",
//         });
//       }
//     }, 600);

//     return () => window.clearTimeout(timer);
//   }, [location.state]);

//   return (
//     <div className="overflow-hidden bg-[#F7F6FA] text-[#24212D]">
//       <ServicesHeroSection />

//       {/* SERVICE INTRO + FILTERS */}
//       <section className="relative py-20 sm:py-28 lg:py-36">
//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
//           <div className="grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-end lg:gap-20">
//             <div>
//               <div className="flex items-center gap-3">
//                 <span className="h-px w-10 bg-[#6055A6]" />
//                 <span className="text-[9px] font-black uppercase tracking-[.25em] text-[#6055A6]">
//                   The service directory · {LOCAL.area}
//                 </span>
//               </div>

//               <h2 className="mt-7 max-w-[780px] text-[clamp(2.8rem,6vw,6rem)] font-black leading-[.88] tracking-[-.07em]">
//                 Different pests.
//                 <span className="block text-[#6055A6]">
//                   Different responses.
//                 </span>
//               </h2>
//             </div>

//             <div className="border-l-2 border-[#A59ED8] pl-6 sm:pl-8">
//               <p className="max-w-[570px] text-[13px] leading-7 text-[#77737C] sm:text-[14px] sm:leading-8">
//                 Explore the pest-control services available from{" "}
//                 {LOCAL.company}. Choose a category or browse the complete
//                 directory to find the service relevant to your property.
//               </p>

//               <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
//                 {["Residential", "Commercial", "Managed properties"].map((item) => (
//                   <span
//                     key={item}
//                     className="inline-flex items-center gap-2 text-[8px] font-black uppercase tracking-[.12em] text-[#24212D]/65"
//                   >
//                     <CircleCheck size={13} className="text-[#6055A6]" />
//                     {item}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="mt-14 rounded-[4px] bg-white p-5 shadow-[0_12px_45px_rgba(36,33,45,.035)] sm:mt-20 sm:p-7">
//             <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
//               <div className="flex items-center gap-3">
//                 <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0EDF9] text-[#6055A6]">
//                   <Search size={16} />
//                 </span>
//                 <div>
//                   <p className="text-[9px] font-black uppercase tracking-[.16em]">
//                     Browse by category
//                   </p>
//                   <p className="mt-1 text-[10px] text-[#77737C]">
//                     {filteredServices.length} services available
//                   </p>
//                 </div>
//               </div>

//               <div className="flex flex-wrap gap-2">
//                 {CATEGORIES.map((category) => {
//                   const active = selectedCategory === category;

//                   return (
//                     <button
//                       key={category}
//                       type="button"
//                       aria-pressed={active}
//                       onClick={() => setSelectedCategory(category)}
//                       className={`rounded-full px-4 py-3 text-[8px] font-black uppercase tracking-[.1em] transition sm:px-5 ${
//                         active
//                           ? "bg-[#6055A6] text-white"
//                           : "border border-[#24212D]/10 bg-white text-[#77737C] hover:border-[#6055A6] hover:text-[#6055A6]"
//                       }`}
//                     >
//                       {category}
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ASYMMETRIC SERVICE DIRECTORY */}
//       <section id="services-list" className="bg-white py-20 sm:py-28 lg:py-36">
//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
//           <div className="mb-14 flex items-end justify-between gap-5 border-b border-[#24212D]/10 pb-6 sm:mb-20">
//             <div>
//               <span className="text-[8px] font-black uppercase tracking-[.25em] text-[#6055A6]">
//                 Explore the services
//               </span>
//               <h2 className="mt-4 text-[clamp(2.2rem,4.5vw,4.5rem)] font-black leading-[.9] tracking-[-.065em]">
//                 Find your service.
//               </h2>
//             </div>
//             <span className="pb-1 text-[10px] font-black tabular-nums text-[#24212D]/40">
//               {String(filteredServices.length).padStart(2, "0")} / 12
//             </span>
//           </div>

//           <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-24">
//             {filteredServices.map((service, index) => (
//               <ServiceCard
//                 key={service.number}
//                 service={service}
//                 index={index}
//                 onSelect={handleServiceNavigation}
//               />
//             ))}
//           </div>

//           {selectedCategory !== "All" && (
//             <div className="mt-16 text-center">
//               <button
//                 type="button"
//                 onClick={() => setSelectedCategory("All")}
//                 className="inline-flex items-center gap-3 rounded-full border border-[#24212D]/15 px-6 py-4 text-[9px] font-black uppercase tracking-[.14em] transition hover:border-[#6055A6] hover:text-[#6055A6]"
//               >
//                 View all services
//                 <ArrowRight size={14} />
//               </button>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* APPROACH */}
//       <section className="relative overflow-hidden bg-[#24212D] text-white">
//         <div className="pointer-events-none absolute -right-32 top-10 h-[400px] w-[400px] rounded-full border border-[#A59ED8]/15 sm:h-[600px] sm:w-[600px]" />
//         <div className="pointer-events-none absolute -right-10 top-32 h-[280px] w-[280px] rounded-full border border-white/5 sm:h-[400px] sm:w-[400px]" />

//         <div className="relative mx-auto max-w-[1500px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
//           <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
//             <div>
//               <div className="flex items-center gap-3">
//                 <Sparkles size={15} className="text-[#A59ED8]" />
//                 <span className="text-[8px] font-black uppercase tracking-[.25em] text-[#A59ED8]">
//                   A considered approach
//                 </span>
//               </div>

//               <h2 className="mt-7 max-w-[520px] text-[clamp(2.8rem,5.5vw,5.5rem)] font-black leading-[.87] tracking-[-.07em]">
//                 Start with
//                 <span className="block text-[#A59ED8]">what you notice.</span>
//               </h2>

//               <p className="mt-7 max-w-[440px] text-[12px] leading-7 text-white/55 sm:text-[13px] sm:leading-8">
//                 You do not need to identify the pest yourself. Explain what
//                 you have seen, where it is happening and the type of property
//                 involved.
//               </p>

//               <button
//                 type="button"
//                 onClick={goToContact}
//                 className="group mt-8 inline-flex items-center gap-8 rounded-full bg-[#6055A6] px-6 py-4 text-[8px] font-black uppercase tracking-[.14em] transition hover:bg-[#51478F]"
//               >
//                 Discuss the problem
//                 <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
//               </button>
//             </div>

//             <div className="grid border-t border-white/15 sm:grid-cols-2">
//               {APPROACH.map((step) => (
//                 <div
//                   key={step.number}
//                   className="border-b border-white/15 py-7 sm:px-6 sm:py-9"
//                 >
//                   <span className="text-[9px] font-black tracking-[.2em] text-[#A59ED8]">
//                     {step.number}
//                   </span>
//                   <h3 className="mt-4 text-[21px] font-black leading-tight tracking-[-.04em] sm:text-[24px]">
//                     {step.title}
//                   </h3>
//                   <p className="mt-3 max-w-[330px] text-[11px] leading-6 text-white/45">
//                     {step.text}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* PROPERTY TYPES */}
//       <section className="bg-[#F7F6FA] py-20 sm:py-28 lg:py-36">
//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
//           <div className="grid gap-8 lg:grid-cols-[1fr_.75fr] lg:items-end lg:gap-16">
//             <div>
//               <span className="text-[8px] font-black uppercase tracking-[.25em] text-[#6055A6]">
//                 Different environments
//               </span>
//               <h2 className="mt-6 max-w-[760px] text-[clamp(2.8rem,5.8vw,5.7rem)] font-black leading-[.87] tracking-[-.07em]">
//                 Every property
//                 <span className="block text-[#6055A6]">has its own needs.</span>
//               </h2>
//             </div>
//             <p className="max-w-[490px] text-[12px] leading-7 text-[#77737C] sm:text-[13px] sm:leading-8">
//               Property use, access points and surrounding conditions can all
//               affect how pest activity should be assessed.
//             </p>
//           </div>

//           <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
//             {PROPERTIES.map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <article
//                   key={item.number}
//                   className={`group relative min-h-[245px] overflow-hidden p-6 transition duration-300 hover:-translate-y-1 sm:p-7 ${
//                     index === 1
//                       ? "rounded-t-[90px] bg-[#24212D] text-white sm:rounded-t-[110px]"
//                       : index === 2
//                       ? "rounded-br-[65px] bg-[#EAE6F5]"
//                       : index === 3
//                       ? "rounded-tl-[65px] bg-white"
//                       : "rounded-[4px] border border-[#24212D]/10 bg-white"
//                   }`}
//                 >
//                   <div className="flex items-center justify-between">
//                     <Icon
//                       size={21}
//                       className={index === 1 ? "text-[#A59ED8]" : "text-[#6055A6]"}
//                     />
//                     <span className={`text-[9px] font-black tracking-[.2em] ${
//                       index === 1 ? "text-white/35" : "text-[#24212D]/30"
//                     }`}>
//                       {item.number}
//                     </span>
//                   </div>

//                   <h3 className="mt-12 text-[24px] font-black tracking-[-.045em]">
//                     {item.title}
//                   </h3>
//                   <p className={`mt-3 text-[11px] leading-6 ${
//                     index === 1 ? "text-white/50" : "text-[#77737C]"
//                   }`}>
//                     {item.text}
//                   </p>

//                   <div className="mt-7 h-px w-10 bg-[#6055A6] transition-all duration-500 group-hover:w-full" />
//                 </article>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* LOCAL COVERAGE */}
//       <section className="bg-[#6055A6] text-white">
//         <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
//           <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-20">
//             <div>
//               <div className="flex items-center gap-3">
//                 <MapPin size={15} className="text-[#D8D2F3]" />
//                 <span className="text-[8px] font-black uppercase tracking-[.25em] text-white/65">
//                   {LOCAL.area} · {LOCAL.postcode}
//                 </span>
//               </div>

//               <h2 className="mt-7 max-w-[800px] text-[clamp(3rem,6.5vw,6.7rem)] font-black leading-[.84] tracking-[-.075em]">
//                 Local service.
//                 <span className="block text-[#24212D]">Clear next steps.</span>
//               </h2>

//               <p className="mt-7 max-w-[550px] text-[12px] leading-7 text-white/70 sm:text-[13px] sm:leading-8">
//                 {LOCAL.company} provides pest-control support for homes,
//                 landlords, managed properties and businesses in{" "}
//                 {LOCAL.area} and nearby areas.
//               </p>

//               <button
//                 type="button"
//                 onClick={goToContact}
//                 className="group mt-8 inline-flex items-center gap-8 rounded-full bg-[#24212D] px-6 py-4 text-[8px] font-black uppercase tracking-[.14em] transition hover:bg-[#15131A]"
//               >
//                 Contact SuperGuard
//                 <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
//               </button>
//             </div>

//             <div className="relative">
//               <div className="absolute -right-2 -top-7 z-10 flex h-[78px] w-[78px] items-center justify-center rounded-full bg-[#A59ED8] text-center text-[#24212D] sm:-right-4 sm:h-[100px] sm:w-[100px]">
//                 <div>
//                   <span className="block text-[7px] font-black uppercase tracking-[.15em]">
//                     Local
//                   </span>
//                   <span className="mt-1 block text-[14px] font-black">KT9</span>
//                 </div>
//               </div>

//               <div className="rounded-t-[130px] rounded-b-[4px] bg-[#51478F] px-6 pb-7 pt-14 sm:rounded-t-[180px] sm:px-10 sm:pb-10 sm:pt-20">
//                 <span className="text-[8px] font-black uppercase tracking-[.2em] text-white/50">
//                   Local address
//                 </span>
//                 <p className="mt-4 max-w-[420px] text-[22px] font-black leading-tight tracking-[-.04em] sm:text-[29px]">
//                   {LOCAL.address}
//                 </p>

//                 <div className="mt-8 border-t border-white/20 pt-6">
//                   <span className="text-[8px] font-black uppercase tracking-[.2em] text-white/50">
//                     Call the team
//                   </span>
//                   <a
//                     href={`tel:${LOCAL.phoneTel}`}
//                     className="mt-3 flex flex-wrap items-center gap-3 text-[22px] font-black transition hover:text-[#D8D2F3] sm:text-[27px]"
//                   >
//                     <Phone size={18} />
//                     {LOCAL.phoneDisplay}
//                     <ArrowUpRight size={15} />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FINAL CTA */}
//       <section className="bg-white px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
//         <div className="mx-auto max-w-[1500px]">
//           <div className="relative overflow-hidden rounded-t-[100px] rounded-b-[4px] bg-[#15131A] px-6 py-12 text-white sm:rounded-t-[160px] sm:px-12 sm:py-16 lg:px-20 lg:py-20">
//             <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full border border-[#A59ED8]/15 sm:h-[450px] sm:w-[450px]" />
//             <div className="pointer-events-none absolute right-8 top-8 h-[200px] w-[200px] rounded-full border border-[#A59ED8]/10 sm:right-16 sm:top-16 sm:h-[300px] sm:w-[300px]" />

//             <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-14">
//               <div>
//                 <span className="text-[8px] font-black uppercase tracking-[.25em] text-[#A59ED8]">
//                   {LOCAL.shortName}
//                 </span>

//                 <h2 className="mt-6 max-w-[800px] text-[clamp(2.7rem,5.5vw,5.7rem)] font-black leading-[.86] tracking-[-.07em]">
//                   Not sure which service?
//                   <span className="block text-[#A59ED8]">Let's start there.</span>
//                 </h2>

//                 <p className="mt-6 max-w-[520px] text-[12px] leading-7 text-white/50 sm:text-[13px] sm:leading-8">
//                   Tell us what you have noticed, where the activity is
//                   happening and what type of property is involved.
//                 </p>
//               </div>

//               <div className="flex flex-col gap-3">
//                 <button
//                   type="button"
//                   onClick={goToContact}
//                   className="group flex min-h-[56px] items-center justify-between gap-8 rounded-full bg-[#6055A6] px-6 text-[8px] font-black uppercase tracking-[.14em] transition hover:bg-[#51478F]"
//                 >
//                   Contact the team
//                   <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
//                 </button>

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="flex min-h-[56px] items-center justify-between gap-6 rounded-full border border-white/20 px-6 text-[9px] font-black uppercase tracking-[.12em] transition hover:border-[#A59ED8] hover:text-[#A59ED8]"
//                 >
//                   <span className="flex items-center gap-3">
//                     <Phone size={14} />
//                     {LOCAL.phoneDisplay}
//                   </span>
//                   <ArrowUpRight size={14} />
//                 </a>
//               </div>
//             </div>

//             <div className="relative mt-12 flex flex-col gap-3 border-t border-white/15 pt-5 text-[8px] font-bold uppercase tracking-[.13em] text-white/40 sm:flex-row sm:justify-between">
//               <span>{LOCAL.company}</span>
//               <span>{LOCAL.area} · {LOCAL.postcode}</span>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }





















// import React, { useEffect, useMemo, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   MapPin,
//   Phone,
//   ShieldCheck,
//   Bug,
//   Home,
//   Building2,
//   Check,
//   Search,
//   CircleCheck,
//   Sparkles,
// } from "lucide-react";

// import ServicesHeroSection from "../components/ServicesHeroSection";

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

// const CATEGORIES = [
//   "All",
//   "Insects",
//   "Rodents & Wildlife",
//   "Birds & Prevention",
// ];

// const SERVICES = [
//   {
//     number: "01",
//     cat: "Insects",
//     shortTitle: "Ant Control",
//     title: `Ant Control ${LOCAL.area}`,
//     image: "/images/ants.webp",
//     eyebrow: "INSECT CONTROL",
//     intro:
//       "Persistent ant activity can move beyond an occasional sighting. We focus on where trails develop and where colonies may be accessing the property.",
//     signs: ["Visible ant trails", "Repeated sightings", "Activity near food areas"],
//     areas: ["Kitchens", "Entrances", "Food storage areas"],
//     focus: "Trail activity & access points",
//   },
//   {
//     number: "02",
//     cat: "Insects",
//     shortTitle: "Bed Bug Treatment",
//     title: `Bed Bug Treatment ${LOCAL.area}`,
//     image: "/images/bedbugs.webp",
//     eyebrow: "INSECT CONTROL",
//     intro:
//       "Bed bug activity can remain hidden around sleeping areas and furniture. A careful assessment helps identify locations requiring attention.",
//     signs: ["Bite concerns", "Small spotting", "Activity around beds"],
//     areas: ["Bedrooms", "Bed frames", "Upholstered furniture"],
//     focus: "Sleeping areas & harbourage",
//   },
//   {
//     number: "03",
//     cat: "Insects",
//     shortTitle: "Carpet Moth Treatment",
//     title: `Carpet Moth Treatment ${LOCAL.area}`,
//     image: "/images/moths.webp",
//     eyebrow: "FABRIC PEST CONTROL",
//     intro:
//       "Carpet moth activity can affect natural fibres and soft furnishings. Treatment planning considers affected rooms and surrounding fabric areas.",
//     signs: ["Fabric damage", "Larvae or cases", "Moth sightings"],
//     areas: ["Carpets", "Rugs", "Wardrobes"],
//     focus: "Fabric areas & affected rooms",
//   },
//   {
//     number: "04",
//     cat: "Insects",
//     shortTitle: "Carpet Beetle Control",
//     title: `Carpet Beetle Control ${LOCAL.area}`,
//     image: "/images/beetle.webp",
//     eyebrow: "FABRIC PEST CONTROL",
//     intro:
//       "Carpet beetles and their larvae can remain unnoticed around fabrics and floor edges. Identifying affected areas is an important first step.",
//     signs: ["Larval activity", "Fabric damage", "Beetle sightings"],
//     areas: ["Carpets", "Skirting boards", "Stored fabrics"],
//     focus: "Larvae & fabric exposure",
//   },
//   {
//     number: "05",
//     cat: "Insects",
//     shortTitle: "Cockroach Control",
//     title: `Cockroach Control ${LOCAL.area}`,
//     image: "/images/cockroach.webp",
//     eyebrow: "INSECT CONTROL",
//     intro:
//       "Cockroach activity is often associated with warm, concealed areas around kitchens and services. The surrounding environment can reveal where activity is developing.",
//     signs: ["Live sightings", "Droppings", "Activity around appliances"],
//     areas: ["Kitchens", "Utility areas", "Service spaces"],
//     focus: "Harbourage & recurring activity",
//   },
//   {
//     number: "06",
//     cat: "Rodents & Wildlife",
//     shortTitle: "Rats & Mice Control",
//     title: `Rats & Mice Control ${LOCAL.area}`,
//     image: "/images/rodents.webp",
//     eyebrow: "RODENT CONTROL",
//     intro:
//       "Rodent problems can involve more than the location of a sighting. We consider movement alongside possible access routes and harbourage.",
//     signs: ["Droppings", "Scratching sounds", "Gnawing or movement"],
//     areas: ["Kitchens", "Lofts", "Wall and service voids"],
//     focus: "Activity, access & harbourage",
//   },
//   {
//     number: "07",
//     cat: "Insects",
//     shortTitle: "Flea Treatment",
//     title: `Flea Treatment ${LOCAL.area}`,
//     image: "/images/flea.webp",
//     eyebrow: "INSECT CONTROL",
//     intro:
//       "Flea activity can remain around carpets, upholstery and flooring even when the insects themselves are difficult to spot.",
//     signs: ["Repeated bites", "Flea sightings", "Pet-area activity"],
//     areas: ["Carpets", "Upholstery", "Flooring"],
//     focus: "Affected rooms & soft surfaces",
//   },
//   {
//     number: "08",
//     cat: "Insects",
//     shortTitle: "Wasp Nest Control",
//     title: `Wasp Nest Control ${LOCAL.area}`,
//     image: "/images/wasps.webp",
//     eyebrow: "STINGING INSECT CONTROL",
//     intro:
//       "Wasp nests can develop in roofs, wall cavities, sheds and other sheltered locations. Identifying the nest location is central to deciding the appropriate response.",
//     signs: ["Repeated wasp movement", "Visible nest activity", "Concentrated entry points"],
//     areas: ["Roof spaces", "Wall cavities", "Sheds & gardens"],
//     focus: "Nest location & activity",
//   },
//   {
//     number: "09",
//     cat: "Insects",
//     shortTitle: "Bee Activity Support",
//     title: `Bee Activity Support ${LOCAL.area}`,
//     image: "/images/bee.webp",
//     eyebrow: "BEE ACTIVITY",
//     intro:
//       "Unusual bee activity should be understood before action is considered. Location and behaviour can help determine the appropriate next step.",
//     signs: ["Repeated bee movement", "Entry into a structure", "Concentrated activity"],
//     areas: ["Roof areas", "Walls", "External entrances"],
//     focus: "Identification & location",
//   },
//   {
//     number: "10",
//     cat: "Rodents & Wildlife",
//     shortTitle: "Squirrel Control",
//     title: `Squirrel Control ${LOCAL.area}`,
//     image: "/images/squirrel.webp",
//     eyebrow: "WILDLIFE CONTROL",
//     intro:
//       "Noises and movement in roof or loft spaces can indicate squirrel activity. The property layout can help identify how wildlife is accessing concealed areas.",
//     signs: ["Loft noises", "Movement above ceilings", "Gnawing damage"],
//     areas: ["Lofts", "Roof spaces", "External access points"],
//     focus: "Roof access & activity",
//   },
//   {
//     number: "11",
//     cat: "Birds & Prevention",
//     shortTitle: "Property Proofing",
//     title: `Property Proofing ${LOCAL.area}`,
//     image: "/images/hygene.webp",
//     eyebrow: "PREVENTION",
//     intro:
//       "Where pest activity is linked to gaps or accessible areas, property proofing can help reduce opportunities for future access.",
//     signs: ["Visible gaps", "Repeated access", "Damage around openings"],
//     areas: ["Rooflines", "Vents", "Service openings"],
//     focus: "Access reduction & prevention",
//   },
//   {
//     number: "12",
//     cat: "Birds & Prevention",
//     shortTitle: "Bird Control",
//     title: `Bird Control ${LOCAL.area}`,
//     image: "/images/birds.webp",
//     eyebrow: "BIRD CONTROL",
//     intro:
//       "Persistent bird activity can affect roofs, ledges, balconies and commercial areas. The structure and location of the activity guide the appropriate response.",
//     signs: ["Repeated landing", "Nesting activity", "Droppings around surfaces"],
//     areas: ["Roofs", "Ledges", "Balconies & buildings"],
//     focus: "Landing & nesting areas",
//   },
// ];

// const APPROACH = [
//   {
//     number: "01",
//     title: "Describe the signs",
//     text: "Sightings, sounds, damage and unusual activity can help establish a starting point.",
//   },
//   {
//     number: "02",
//     title: "Identify the location",
//     text: "A kitchen, bedroom, loft, garden or commercial space can change what needs to be considered.",
//   },
//   {
//     number: "03",
//     title: "Establish the likely issue",
//     text: "The available information helps identify which type of pest service may be relevant.",
//   },
//   {
//     number: "04",
//     title: "Plan the next step",
//     text: "Discuss the property and pest activity with the SuperGuard Chessington team.",
//   },
// ];

// const PROPERTIES = [
//   {
//     number: "01",
//     title: "Homes & flats",
//     text: "Support for residential properties, homeowners and tenants.",
//     icon: Home,
//   },
//   {
//     number: "02",
//     title: "Workplaces",
//     text: "Practical support for offices and working environments.",
//     icon: Building2,
//   },
//   {
//     number: "03",
//     title: "Managed property",
//     text: "Consideration for rental buildings and recurring pest activity.",
//     icon: ShieldCheck,
//   },
//   {
//     number: "04",
//     title: "Commercial premises",
//     text: "Services for commercial environments and customer-facing spaces.",
//     icon: Bug,
//   },
// ];

// const IMAGE_SHAPES = [
//   "rounded-t-[46%] rounded-b-[8px]",
//   "rounded-tr-[46%] rounded-bl-[46%] rounded-tl-[8px] rounded-br-[8px]",
//   "rounded-[8px] rounded-tl-[42%]",
//   "rounded-[8px] rounded-br-[42%]",
//   "rounded-t-[42%] rounded-b-[8px]",
//   "rounded-tr-[44%] rounded-bl-[8px] rounded-tl-[8px] rounded-br-[8px]",
// ];

// function ServiceCard({ service, index, onSelect }) {
//   const shape = IMAGE_SHAPES[index % IMAGE_SHAPES.length];

//   return (
//     <article
//       id={`service-${service.number}`}
//       className="group w-full min-w-0"
//     >
//       <button
//         type="button"
//         onClick={() => onSelect(service)}
//         aria-label={`Enquire about ${service.title}`}
//         className="block w-full text-left"
//       >
//         <div className="relative w-full overflow-hidden bg-[#E9E5F3]">
//           <div
//             className={`relative aspect-[1.12] w-full overflow-hidden ${shape}`}
//           >
//             <img
//               src={service.image}
//               alt={`${service.shortTitle} service in ${LOCAL.area}`}
//               loading="lazy"
//               className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-[#15131A]/75 via-[#15131A]/5 to-[#15131A]/10" />

//             <div className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[10px] font-black text-[#6055A6] shadow-lg sm:left-4 sm:top-4 sm:h-10 sm:w-10">
//               {service.number}
//             </div>

//             <div className="absolute right-3 top-3 max-w-[65%] rounded-full border border-white/30 bg-[#15131A]/40 px-3 py-2 text-[7px] font-black uppercase tracking-[.1em] text-white backdrop-blur-md sm:right-4 sm:top-4">
//               {service.cat}
//             </div>

//             <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
//               <span className="text-[7px] font-black uppercase tracking-[.2em] text-[#C8C1EE]">
//                 {service.eyebrow}
//               </span>

//               <h3 className="mt-2 text-[clamp(1.45rem,2.2vw,2.15rem)] font-black leading-[.98] tracking-[-.05em] text-white">
//                 {service.shortTitle}
//               </h3>

//               <div className="mt-4 flex items-center justify-between gap-2 border-t border-white/25 pt-3">
//                 <span className="text-[7px] font-bold uppercase tracking-[.08em] text-white/80 sm:text-[8px]">
//                   {service.focus}
//                 </span>

//                 <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#6055A6] text-white transition duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#6055A6]">
//                   <ArrowUpRight size={15} />
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </button>

//       <div className="pt-4">
//         <p className="text-[11px] leading-6 text-[#77737C] sm:text-[12px]">
//           {service.intro}
//         </p>

//         <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
//           <div>
//             <span className="text-[7px] font-black uppercase tracking-[.15em] text-[#6055A6]">
//               Common signs
//             </span>

//             <ul className="mt-2 space-y-2">
//               {service.signs.map((sign) => (
//                 <li
//                   key={sign}
//                   className="flex items-start gap-2 text-[10px] leading-4 text-[#5F5B66]"
//                 >
//                   <Check
//                     size={12}
//                     className="mt-0.5 shrink-0 text-[#6055A6]"
//                   />
//                   {sign}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <span className="text-[7px] font-black uppercase tracking-[.15em] text-[#6055A6]">
//               Areas considered
//             </span>

//             <ul className="mt-2 space-y-2">
//               {service.areas.map((area) => (
//                 <li
//                   key={area}
//                   className="flex items-start gap-2 text-[10px] leading-4 text-[#5F5B66]"
//                 >
//                   <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#A59ED8]" />
//                   {area}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <button
//           type="button"
//           onClick={() => onSelect(service)}
//           className="mt-5 inline-flex items-center gap-2 border-b border-[#6055A6]/30 pb-2 text-[8px] font-black uppercase tracking-[.12em] text-[#6055A6] transition hover:border-[#6055A6] hover:text-[#51478F]"
//         >
//           Enquire about this service
//           <ArrowRight size={13} />
//         </button>
//       </div>
//     </article>
//   );
// }

// export default function Services() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const filteredServices = useMemo(
//     () =>
//       selectedCategory === "All"
//         ? SERVICES
//         : SERVICES.filter((service) => service.cat === selectedCategory),
//     [selectedCategory]
//   );

//   const goToContact = () => {
//     navigate("/contact-us");
//   };

//   const handleServiceNavigation = (service) => {
//     navigate("/contact-us", {
//       state: { service: service.title },
//     });
//   };

//   useEffect(() => {
//     const state = location.state;
//     if (!state) return;

//     if (state.category && CATEGORIES.includes(state.category)) {
//       setSelectedCategory(state.category);
//     }

//     if (!state.scrollToService) return;

//     const timer = window.setTimeout(() => {
//       const searchText = String(state.scrollToService).toLowerCase();

//       const target = SERVICES.find(
//         (service) =>
//           service.title.toLowerCase().includes(searchText) ||
//           service.shortTitle.toLowerCase().includes(searchText)
//       );

//       if (target) {
//         document.getElementById(`service-${target.number}`)?.scrollIntoView({
//           behavior: "smooth",
//           block: "center",
//         });
//       }
//     }, 600);

//     return () => window.clearTimeout(timer);
//   }, [location.state]);

//   return (
//     <div className="overflow-hidden bg-[#F7F6FA] text-[#24212D]">
//       <ServicesHeroSection />

//       {/* SERVICE INTRO + FILTERS */}
//       <section className="relative py-16 sm:py-20 lg:py-28">
//         <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
//           <div className="grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end lg:gap-16">
//             <div>
//               <div className="flex items-center gap-3">
//                 <span className="h-px w-10 bg-[#6055A6]" />
//                 <span className="text-[9px] font-black uppercase tracking-[.25em] text-[#6055A6]">
//                   The service directory · {LOCAL.area}
//                 </span>
//               </div>

//               <h2 className="mt-6 max-w-[780px] text-[clamp(2.6rem,5.5vw,5.2rem)] font-black leading-[.9] tracking-[-.07em]">
//                 Different pests.
//                 <span className="block text-[#6055A6]">
//                   Different responses.
//                 </span>
//               </h2>
//             </div>

//             <div className="border-l-2 border-[#A59ED8] pl-6 sm:pl-8">
//               <p className="max-w-[570px] text-[13px] leading-7 text-[#77737C]">
//                 Explore the pest-control services available from{" "}
//                 {LOCAL.company}. Choose a category or browse the complete
//                 directory to find the service relevant to your property.
//               </p>

//               <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
//                 {["Residential", "Commercial", "Managed properties"].map(
//                   (item) => (
//                     <span
//                       key={item}
//                       className="inline-flex items-center gap-2 text-[8px] font-black uppercase tracking-[.1em] text-[#24212D]/65"
//                     >
//                       <CircleCheck size={13} className="text-[#6055A6]" />
//                       {item}
//                     </span>
//                   )
//                 )}
//               </div>
//             </div>
//           </div>

//           <div className="mt-12 rounded-[4px] bg-white p-5 shadow-[0_12px_45px_rgba(36,33,45,.035)] sm:mt-16 sm:p-6">
//             <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
//               <div className="flex items-center gap-3">
//                 <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0EDF9] text-[#6055A6]">
//                   <Search size={16} />
//                 </span>

//                 <div>
//                   <p className="text-[9px] font-black uppercase tracking-[.16em]">
//                     Browse by category
//                   </p>
//                   <p className="mt-1 text-[10px] text-[#77737C]">
//                     {filteredServices.length} services available
//                   </p>
//                 </div>
//               </div>

//               <div className="flex flex-wrap gap-2">
//                 {CATEGORIES.map((category) => {
//                   const active = selectedCategory === category;

//                   return (
//                     <button
//                       key={category}
//                       type="button"
//                       aria-pressed={active}
//                       onClick={() => setSelectedCategory(category)}
//                       className={`rounded-full px-4 py-3 text-[8px] font-black uppercase tracking-[.1em] transition sm:px-5 ${
//                         active
//                           ? "bg-[#6055A6] text-white"
//                           : "border border-[#24212D]/10 bg-white text-[#77737C] hover:border-[#6055A6] hover:text-[#6055A6]"
//                       }`}
//                     >
//                       {category}
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* THREE SERVICES PER ROW ON DESKTOP */}
//       <section
//         id="services-list"
//         className="bg-white py-16 sm:py-20 lg:py-28"
//       >
//         <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
//           <div className="mb-10 flex items-end justify-between gap-4 border-b border-[#24212D]/10 pb-5 sm:mb-14">
//             <div>
//               <span className="text-[8px] font-black uppercase tracking-[.25em] text-[#6055A6]">
//                 Explore the services
//               </span>

//               <h2 className="mt-3 text-[clamp(2rem,4vw,3.8rem)] font-black leading-[.9] tracking-[-.065em]">
//                 Find your service.
//               </h2>
//             </div>

//             <span className="pb-1 text-[10px] font-black tabular-nums text-[#24212D]/40">
//               {String(filteredServices.length).padStart(2, "0")} / 12
//             </span>
//           </div>

//           <div className="grid grid-cols-1 gap-x-7 gap-y-14 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-20">
//             {filteredServices.map((service, index) => (
//               <ServiceCard
//                 key={service.number}
//                 service={service}
//                 index={index}
//                 onSelect={handleServiceNavigation}
//               />
//             ))}
//           </div>

//           {selectedCategory !== "All" && (
//             <div className="mt-14 text-center">
//               <button
//                 type="button"
//                 onClick={() => setSelectedCategory("All")}
//                 className="inline-flex items-center gap-3 rounded-full border border-[#24212D]/15 px-6 py-4 text-[9px] font-black uppercase tracking-[.14em] transition hover:border-[#6055A6] hover:text-[#6055A6]"
//               >
//                 View all services
//                 <ArrowRight size={14} />
//               </button>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* APPROACH */}
//       <section className="relative overflow-hidden bg-[#24212D] text-white">
//         <div className="pointer-events-none absolute -right-32 top-10 h-[400px] w-[400px] rounded-full border border-[#A59ED8]/15 sm:h-[600px] sm:w-[600px]" />
//         <div className="pointer-events-none absolute -right-10 top-32 h-[280px] w-[280px] rounded-full border border-white/5 sm:h-[400px] sm:w-[400px]" />

//         <div className="relative mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
//           <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
//             <div>
//               <div className="flex items-center gap-3">
//                 <Sparkles size={15} className="text-[#A59ED8]" />
//                 <span className="text-[8px] font-black uppercase tracking-[.25em] text-[#A59ED8]">
//                   A considered approach
//                 </span>
//               </div>

//               <h2 className="mt-6 max-w-[520px] text-[clamp(2.6rem,5vw,5rem)] font-black leading-[.88] tracking-[-.07em]">
//                 Start with
//                 <span className="block text-[#A59ED8]">what you notice.</span>
//               </h2>

//               <p className="mt-6 max-w-[440px] text-[12px] leading-7 text-white/55">
//                 You do not need to identify the pest yourself. Explain what
//                 you have seen, where it is happening and the type of property
//                 involved.
//               </p>

//               <button
//                 type="button"
//                 onClick={goToContact}
//                 className="group mt-7 inline-flex items-center gap-7 rounded-full bg-[#6055A6] px-6 py-4 text-[8px] font-black uppercase tracking-[.14em] transition hover:bg-[#51478F]"
//               >
//                 Discuss the problem
//                 <ArrowRight
//                   size={15}
//                   className="transition-transform group-hover:translate-x-1"
//                 />
//               </button>
//             </div>

//             <div className="grid border-t border-white/15 sm:grid-cols-2">
//               {APPROACH.map((step) => (
//                 <div
//                   key={step.number}
//                   className="border-b border-white/15 py-6 sm:px-6 sm:py-8"
//                 >
//                   <span className="text-[9px] font-black tracking-[.2em] text-[#A59ED8]">
//                     {step.number}
//                   </span>

//                   <h3 className="mt-3 text-[21px] font-black leading-tight tracking-[-.04em] sm:text-[23px]">
//                     {step.title}
//                   </h3>

//                   <p className="mt-3 max-w-[330px] text-[11px] leading-6 text-white/45">
//                     {step.text}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* PROPERTY TYPES */}
//       <section className="bg-[#F7F6FA] py-16 sm:py-20 lg:py-28">
//         <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
//           <div className="grid gap-7 lg:grid-cols-[1fr_.75fr] lg:items-end lg:gap-14">
//             <div>
//               <span className="text-[8px] font-black uppercase tracking-[.25em] text-[#6055A6]">
//                 Different environments
//               </span>

//               <h2 className="mt-5 max-w-[760px] text-[clamp(2.6rem,5.2vw,5.2rem)] font-black leading-[.88] tracking-[-.07em]">
//                 Every property
//                 <span className="block text-[#6055A6]">has its own needs.</span>
//               </h2>
//             </div>

//             <p className="max-w-[490px] text-[12px] leading-7 text-[#77737C]">
//               Property use, access points and surrounding conditions can all
//               affect how pest activity should be assessed.
//             </p>
//           </div>

//           <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
//             {PROPERTIES.map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <article
//                   key={item.number}
//                   className={`group relative min-h-[225px] overflow-hidden p-6 transition duration-300 hover:-translate-y-1 sm:p-7 ${
//                     index === 1
//                       ? "rounded-t-[75px] bg-[#24212D] text-white sm:rounded-t-[90px]"
//                       : index === 2
//                       ? "rounded-br-[55px] bg-[#EAE6F5]"
//                       : index === 3
//                       ? "rounded-tl-[55px] bg-white"
//                       : "rounded-[4px] border border-[#24212D]/10 bg-white"
//                   }`}
//                 >
//                   <div className="flex items-center justify-between">
//                     <Icon
//                       size={21}
//                       className={
//                         index === 1 ? "text-[#A59ED8]" : "text-[#6055A6]"
//                       }
//                     />

//                     <span
//                       className={`text-[9px] font-black tracking-[.2em] ${
//                         index === 1 ? "text-white/35" : "text-[#24212D]/30"
//                       }`}
//                     >
//                       {item.number}
//                     </span>
//                   </div>

//                   <h3 className="mt-10 text-[22px] font-black tracking-[-.045em]">
//                     {item.title}
//                   </h3>

//                   <p
//                     className={`mt-3 text-[11px] leading-6 ${
//                       index === 1 ? "text-white/50" : "text-[#77737C]"
//                     }`}
//                   >
//                     {item.text}
//                   </p>

//                   <div className="mt-6 h-px w-10 bg-[#6055A6] transition-all duration-500 group-hover:w-full" />
//                 </article>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* LOCAL COVERAGE */}
//       <section className="bg-[#6055A6] text-white">
//         <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
//           <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-16">
//             <div>
//               <div className="flex items-center gap-3">
//                 <MapPin size={15} className="text-[#D8D2F3]" />
//                 <span className="text-[8px] font-black uppercase tracking-[.25em] text-white/65">
//                   {LOCAL.area} · {LOCAL.postcode}
//                 </span>
//               </div>

//               <h2 className="mt-6 max-w-[800px] text-[clamp(2.7rem,5.8vw,6rem)] font-black leading-[.86] tracking-[-.075em]">
//                 Local service.
//                 <span className="block text-[#24212D]">Clear next steps.</span>
//               </h2>

//               <p className="mt-6 max-w-[550px] text-[12px] leading-7 text-white/70">
//                 {LOCAL.company} provides pest-control support for homes,
//                 landlords, managed properties and businesses in {LOCAL.area}{" "}
//                 and nearby areas.
//               </p>

//               <button
//                 type="button"
//                 onClick={goToContact}
//                 className="group mt-7 inline-flex items-center gap-7 rounded-full bg-[#24212D] px-6 py-4 text-[8px] font-black uppercase tracking-[.14em] transition hover:bg-[#15131A]"
//               >
//                 Contact SuperGuard
//                 <ArrowRight
//                   size={15}
//                   className="transition-transform group-hover:translate-x-1"
//                 />
//               </button>
//             </div>

//             <div className="relative">
//               <div className="absolute -right-2 -top-6 z-10 flex h-[75px] w-[75px] items-center justify-center rounded-full bg-[#A59ED8] text-center text-[#24212D] sm:-right-4 sm:h-[90px] sm:w-[90px]">
//                 <div>
//                   <span className="block text-[7px] font-black uppercase tracking-[.15em]">
//                     Local
//                   </span>
//                   <span className="mt-1 block text-[14px] font-black">KT9</span>
//                 </div>
//               </div>

//               <div className="rounded-t-[110px] rounded-b-[4px] bg-[#51478F] px-6 pb-7 pt-12 sm:rounded-t-[150px] sm:px-9 sm:pb-9 sm:pt-16">
//                 <span className="text-[8px] font-black uppercase tracking-[.2em] text-white/50">
//                   Local address
//                 </span>

//                 <p className="mt-4 max-w-[420px] text-[21px] font-black leading-tight tracking-[-.04em] sm:text-[27px]">
//                   {LOCAL.address}
//                 </p>

//                 <div className="mt-7 border-t border-white/20 pt-5">
//                   <span className="text-[8px] font-black uppercase tracking-[.2em] text-white/50">
//                     Call the team
//                   </span>

//                   <a
//                     href={`tel:${LOCAL.phoneTel}`}
//                     className="mt-3 flex flex-wrap items-center gap-3 text-[20px] font-black transition hover:text-[#D8D2F3] sm:text-[25px]"
//                   >
//                     <Phone size={18} />
//                     {LOCAL.phoneDisplay}
//                     <ArrowUpRight size={15} />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FINAL CTA */}
//       <section className="bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
//         <div className="mx-auto max-w-[1400px]">
//           <div className="relative overflow-hidden rounded-t-[90px] rounded-b-[4px] bg-[#15131A] px-6 py-10 text-white sm:rounded-t-[130px] sm:px-10 sm:py-14 lg:px-16 lg:py-16">
//             <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full border border-[#A59ED8]/15 sm:h-[400px] sm:w-[400px]" />
//             <div className="pointer-events-none absolute right-8 top-8 h-[200px] w-[200px] rounded-full border border-[#A59ED8]/10 sm:right-16 sm:top-16 sm:h-[270px] sm:w-[270px]" />

//             <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
//               <div>
//                 <span className="text-[8px] font-black uppercase tracking-[.25em] text-[#A59ED8]">
//                   {LOCAL.shortName}
//                 </span>

//                 <h2 className="mt-5 max-w-[800px] text-[clamp(2.5rem,5vw,5.2rem)] font-black leading-[.88] tracking-[-.07em]">
//                   Not sure which service?
//                   <span className="block text-[#A59ED8]">
//                     Let's start there.
//                   </span>
//                 </h2>

//                 <p className="mt-5 max-w-[520px] text-[12px] leading-7 text-white/50">
//                   Tell us what you have noticed, where the activity is
//                   happening and what type of property is involved.
//                 </p>
//               </div>

//               <div className="flex flex-col gap-3">
//                 <button
//                   type="button"
//                   onClick={goToContact}
//                   className="group flex min-h-[54px] items-center justify-between gap-7 rounded-full bg-[#6055A6] px-6 text-[8px] font-black uppercase tracking-[.14em] transition hover:bg-[#51478F]"
//                 >
//                   Contact the team
//                   <ArrowRight
//                     size={15}
//                     className="transition-transform group-hover:translate-x-1"
//                   />
//                 </button>

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="flex min-h-[54px] items-center justify-between gap-5 rounded-full border border-white/20 px-5 text-[9px] font-black uppercase tracking-[.1em] transition hover:border-[#A59ED8] hover:text-[#A59ED8]"
//                 >
//                   <span className="flex items-center gap-3">
//                     <Phone size={14} />
//                     {LOCAL.phoneDisplay}
//                   </span>
//                   <ArrowUpRight size={14} />
//                 </a>
//               </div>
//             </div>

//             <div className="relative mt-10 flex flex-col gap-3 border-t border-white/15 pt-5 text-[8px] font-bold uppercase tracking-[.13em] text-white/40 sm:flex-row sm:justify-between">
//               <span>{LOCAL.company}</span>
//               <span>
//                 {LOCAL.area} · {LOCAL.postcode}
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


























// import React, { useEffect, useMemo, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   MapPin,
//   Phone,
//   ShieldCheck,
//   Home,
//   Building2,
//   Check,
//   Search,
//   CircleCheck,
//   Sparkles,
//   ScanSearch,
// } from "lucide-react";

// import ServicesHeroSection from "../components/ServicesHeroSection";

// const LOCAL = {
//   company: "SuperGuard Hampstead",
//   shortName: "SuperGuard Hampstead",
//   area: "Hampstead",
//   city: "London",
//   postcode: "NW3 5UN",
//   streetAddress: "12 Vane Cl",
//   address: "12 Vane Cl, London NW3 5UN, United Kingdom",
//   phoneDisplay: "+44 7466 966471",
//   phoneTel: "+447466966471",
// };

// const CATEGORIES = [
//   "All",
//   "Insects",
//   "Rodents & Wildlife",
//   "Birds & Prevention",
// ];

// const SERVICES = [
//   {
//     number: "01",
//     cat: "Insects",
//     shortTitle: "Ant Control",
//     title: `Ant Control ${LOCAL.area}`,
//     image: "/images/ants.webp",
//     eyebrow: "INSECT MANAGEMENT",
//     intro:
//       "Understand where ant trails develop and investigate the access points and conditions that may be contributing to recurring activity.",
//     signs: ["Visible ant trails", "Repeated sightings", "Activity near food"],
//     areas: ["Kitchens", "Entrances", "Food storage"],
//     focus: "Trails & access points",
//   },
//   {
//     number: "02",
//     cat: "Insects",
//     shortTitle: "Bed Bug Treatment",
//     title: `Bed Bug Treatment ${LOCAL.area}`,
//     image: "/images/bedbugs.webp",
//     eyebrow: "SLEEPING AREAS",
//     intro:
//       "Bed bugs can remain concealed around beds and furniture. An appropriate assessment helps establish the extent of activity and areas requiring attention.",
//     signs: ["Small spotting", "Live sightings", "Bed-frame activity"],
//     areas: ["Bedrooms", "Bed frames", "Upholstery"],
//     focus: "Harbourage & assessment",
//   },
//   {
//     number: "03",
//     cat: "Insects",
//     shortTitle: "Carpet Moth Treatment",
//     title: `Carpet Moth Treatment ${LOCAL.area}`,
//     image: "/images/moths.webp",
//     eyebrow: "FABRIC PROTECTION",
//     intro:
//       "Moth larvae can damage natural fibres and soft furnishings. Identifying affected fabrics and surrounding areas helps inform the next step.",
//     signs: ["Fabric damage", "Larvae or cases", "Adult moth sightings"],
//     areas: ["Carpets", "Rugs", "Wardrobes"],
//     focus: "Fibres & affected areas",
//   },
//   {
//     number: "04",
//     cat: "Insects",
//     shortTitle: "Carpet Beetle Control",
//     title: `Carpet Beetle Control ${LOCAL.area}`,
//     image: "/images/beetle.webp",
//     eyebrow: "FABRIC PESTS",
//     intro:
//       "Carpet beetles and larvae may go unnoticed around floor edges and stored fabrics. Investigation helps identify where activity is concentrated.",
//     signs: ["Larval activity", "Fabric damage", "Beetle sightings"],
//     areas: ["Carpets", "Skirting boards", "Stored fabrics"],
//     focus: "Larvae & fabric exposure",
//   },
//   {
//     number: "05",
//     cat: "Insects",
//     shortTitle: "Cockroach Control",
//     title: `Cockroach Control ${LOCAL.area}`,
//     image: "/images/cockroach.webp",
//     eyebrow: "INSECT MANAGEMENT",
//     intro:
//       "Cockroaches often shelter in warm, concealed spaces. Kitchen fittings, appliances and service openings can provide important clues.",
//     signs: ["Live sightings", "Droppings", "Appliance activity"],
//     areas: ["Kitchens", "Utility rooms", "Service spaces"],
//     focus: "Harbourage & activity",
//   },
//   {
//     number: "06",
//     cat: "Rodents & Wildlife",
//     shortTitle: "Rats & Mice Control",
//     title: `Rats & Mice Control ${LOCAL.area}`,
//     image: "/images/rodents.webp",
//     eyebrow: "RODENT MANAGEMENT",
//     intro:
//       "Rodent sightings can point to wider movement around a property. Assessment considers activity, potential entry routes and concealed harbourage.",
//     signs: ["Droppings", "Scratching sounds", "Gnawing marks"],
//     areas: ["Kitchens", "Lofts", "Service voids"],
//     focus: "Movement & entry routes",
//   },
//   {
//     number: "07",
//     cat: "Insects",
//     shortTitle: "Flea Treatment",
//     title: `Flea Treatment ${LOCAL.area}`,
//     image: "/images/flea.webp",
//     eyebrow: "BITING INSECTS",
//     intro:
//       "Fleas may persist around flooring, carpets and upholstery. Identifying affected rooms and relevant pet areas helps inform treatment planning.",
//     signs: ["Repeated bites", "Flea sightings", "Pet-area activity"],
//     areas: ["Carpets", "Upholstery", "Flooring"],
//     focus: "Affected rooms & surfaces",
//   },
//   {
//     number: "08",
//     cat: "Insects",
//     shortTitle: "Wasp Nest Control",
//     title: `Wasp Nest Control ${LOCAL.area}`,
//     image: "/images/wasps.webp",
//     eyebrow: "STINGING INSECTS",
//     intro:
//       "Concentrated wasp activity can indicate a nest in a sheltered location. Identifying the location helps determine an appropriate response.",
//     signs: ["Repeated wasp movement", "Concentrated activity", "Visible nest"],
//     areas: ["Roof spaces", "Wall cavities", "Sheds"],
//     focus: "Nest location & activity",
//   },
//   {
//     number: "09",
//     cat: "Insects",
//     shortTitle: "Bee Activity Support",
//     title: `Bee Activity Support ${LOCAL.area}`,
//     image: "/images/bee.webp",
//     eyebrow: "RESPONSIBLE IDENTIFICATION",
//     intro:
//       "Bee activity should be assessed carefully before any action is considered. Species, location and behaviour can help establish the appropriate next step.",
//     signs: ["Repeated bee movement", "Entry into a structure", "Concentrated activity"],
//     areas: ["Roof areas", "Walls", "External entrances"],
//     focus: "Identification & location",
//   },
//   {
//     number: "10",
//     cat: "Rodents & Wildlife",
//     shortTitle: "Squirrel Control",
//     title: `Squirrel Control ${LOCAL.area}`,
//     image: "/images/squirrel.webp",
//     eyebrow: "WILDLIFE MANAGEMENT",
//     intro:
//       "Movement and noises in roof spaces may indicate squirrel activity. Assessment helps investigate access routes and potential damage.",
//     signs: ["Loft noises", "Ceiling movement", "Gnawing damage"],
//     areas: ["Lofts", "Roof spaces", "External access"],
//     focus: "Roof access & movement",
//   },
//   {
//     number: "11",
//     cat: "Birds & Prevention",
//     shortTitle: "Property Proofing",
//     title: `Property Proofing ${LOCAL.area}`,
//     image: "/images/hygene.webp",
//     eyebrow: "LONG-TERM PREVENTION",
//     intro:
//       "Suitable proofing can help reduce pest access where gaps and structural openings contribute to recurring activity.",
//     signs: ["Visible gaps", "Repeated access", "Damage near openings"],
//     areas: ["Rooflines", "Vents", "Service openings"],
//     focus: "Access reduction",
//   },
//   {
//     number: "12",
//     cat: "Birds & Prevention",
//     shortTitle: "Bird Control",
//     title: `Bird Control ${LOCAL.area}`,
//     image: "/images/birds.webp",
//     eyebrow: "BIRD MANAGEMENT",
//     intro:
//       "Persistent bird activity can affect roofs, ledges and balconies. The building layout and nesting locations help determine suitable management options.",
//     signs: ["Repeated landing", "Nesting activity", "Droppings on surfaces"],
//     areas: ["Roofs", "Ledges", "Balconies"],
//     focus: "Landing & nesting areas",
//   },
// ];

// const APPROACH = [
//   {
//     number: "01",
//     title: "Describe the signs",
//     text: "Share the sightings, sounds, damage or unusual activity you have noticed.",
//   },
//   {
//     number: "02",
//     title: "Understand the setting",
//     text: "The property type, affected rooms and surrounding conditions all matter.",
//   },
//   {
//     number: "03",
//     title: "Identify the service",
//     text: "Use the available information to establish which pest-control service may be appropriate.",
//   },
//   {
//     number: "04",
//     title: "Plan the next step",
//     text: "Discuss the issue with SuperGuard Hampstead and establish how to proceed.",
//   },
// ];

// const PROPERTIES = [
//   {
//     number: "01",
//     title: "Private homes",
//     text: "Pest-control support for houses, flats and everyday residential spaces.",
//     icon: Home,
//   },
//   {
//     number: "02",
//     title: "Commercial spaces",
//     text: "Consideration for offices, customer-facing premises and workplaces.",
//     icon: Building2,
//   },
//   {
//     number: "03",
//     title: "Managed buildings",
//     text: "Support for landlords and property managers dealing with pest concerns.",
//     icon: ShieldCheck,
//   },
//   {
//     number: "04",
//     title: "Pest prevention",
//     text: "Attention to access points and property conditions that may encourage activity.",
//     icon: ScanSearch,
//   },
// ];

// const IMAGE_STYLES = [
//   "rounded-tl-[80px] rounded-br-[30px]",
//   "rounded-tr-[80px] rounded-bl-[80px]",
//   "rounded-t-[42%] rounded-b-[14px]",
//   "rounded-tl-[42%] rounded-br-[42%] rounded-tr-[10px] rounded-bl-[10px]",
//   "rounded-tr-[70px] rounded-bl-[28px]",
//   "rounded-t-[70px] rounded-br-[70px]",
// ];

// function ServiceModule({ service, index, onSelect }) {
//   return (
//     <article
//       id={`service-${service.number}`}
//       className="group min-w-0"
//     >
//       <div className="h-full overflow-hidden rounded-[25px] border border-[#24212D]/8 bg-[#F7F6FA] p-3 transition duration-500 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(36,33,45,.11)] sm:rounded-[28px] sm:p-4">
//         <button
//           type="button"
//           onClick={() => onSelect(service)}
//           aria-label={`Enquire about ${service.title}`}
//           className="block w-full text-left"
//         >
//           <div
//             className={`relative min-w-0 overflow-hidden bg-[#EAE6F5] ${
//               IMAGE_STYLES[index % IMAGE_STYLES.length]
//             }`}
//           >
//             <img
//               src={service.image}
//               alt={`${service.shortTitle} in ${LOCAL.area}`}
//               loading="lazy"
//               className="aspect-[1.18] w-full object-cover transition-transform duration-700 group-hover:scale-105"
//             />

//             <div className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[10px] font-black text-[#6055A6] shadow-lg">
//               {service.number}
//             </div>

//             <span className="absolute bottom-3 left-3 rounded-full border border-white/35 bg-[#24212D]/70 px-3 py-2 text-[7px] font-black uppercase tracking-[.13em] text-white backdrop-blur-md">
//               {service.cat}
//             </span>

//             <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#6055A6] text-white shadow-lg transition duration-300 group-hover:rotate-45 group-hover:bg-[#24212D]">
//               <ArrowUpRight size={16} />
//             </span>
//           </div>

//           <div className="px-2 pb-2 pt-5 text-left sm:px-2 sm:pt-6">
//             <span className="text-[8px] font-black uppercase tracking-[.16em] text-[#6055A6]">
//               {service.eyebrow}
//             </span>

//             <h3 className="mt-3 min-h-[48px] text-[clamp(1.35rem,1.7vw,1.7rem)] font-black leading-[1.02] tracking-[-.05em] text-[#24212D]">
//               {service.shortTitle}
//             </h3>

//             <p className="mt-3 text-[11px] leading-[1.8] text-[#77737C] sm:text-[12px]">
//               {service.intro}
//             </p>
//           </div>
//         </button>

//         <div className="mx-2 mt-4 border-t border-[#24212D]/10 pt-4">
//           <span className="text-[8px] font-black uppercase tracking-[.13em] text-[#6055A6]">
//             Areas to consider
//           </span>

//           <div className="mt-3 flex flex-wrap gap-2">
//             {service.areas.map((area) => (
//               <span
//                 key={area}
//                 className="rounded-full bg-white px-3 py-2 text-[9px] font-bold text-[#5F5B66]"
//               >
//                 {area}
//               </span>
//             ))}
//           </div>
//         </div>

//         <div className="mx-2 mt-4 border-t border-[#24212D]/10 py-4">
//           <span className="text-[8px] font-black uppercase tracking-[.15em] text-[#6055A6]">
//             Common signs
//           </span>

//           <ul className="mt-3 space-y-2">
//             {service.signs.map((sign) => (
//               <li
//                 key={sign}
//                 className="flex items-start gap-2 text-[10px] leading-5 text-[#77737C]"
//               >
//                 <Check
//                   size={13}
//                   className="mt-1 shrink-0 text-[#6055A6]"
//                 />
//                 {sign}
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="mx-2 flex items-center justify-between gap-3 border-t border-[#24212D]/10 py-4">
//           <span className="text-[9px] font-bold leading-5 text-[#77737C]">
//             {service.focus}
//           </span>

//           <button
//             type="button"
//             onClick={() => onSelect(service)}
//             className="inline-flex shrink-0 items-center gap-2 text-[8px] font-black uppercase tracking-[.1em] text-[#6055A6] transition hover:text-[#24212D]"
//           >
//             Enquire
//             <ArrowRight size={13} />
//           </button>
//         </div>
//       </div>
//     </article>
//   );
// }

// export default function Services() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const filteredServices = useMemo(
//     () =>
//       selectedCategory === "All"
//         ? SERVICES
//         : SERVICES.filter(
//             (service) => service.cat === selectedCategory
//           ),
//     [selectedCategory]
//   );

//   const goToContact = () => {
//     navigate("/contact-us");
//   };

//   const handleServiceNavigation = (service) => {
//     navigate("/contact-us", {
//       state: {
//         service: service.title,
//         from: location.pathname,
//       },
//     });
//   };

//   useEffect(() => {
//     const state = location.state;
//     if (!state) return;

//     if (state.category && CATEGORIES.includes(state.category)) {
//       setSelectedCategory(state.category);
//     }

//     if (!state.scrollToService) return;

//     const timer = window.setTimeout(() => {
//       const searchText = String(state.scrollToService).toLowerCase();

//       const target = SERVICES.find(
//         (service) =>
//           service.title.toLowerCase().includes(searchText) ||
//           service.shortTitle.toLowerCase().includes(searchText)
//       );

//       if (target) {
//         document
//           .getElementById(`service-${target.number}`)
//           ?.scrollIntoView({
//             behavior: "smooth",
//             block: "center",
//           });
//       }
//     }, 600);

//     return () => window.clearTimeout(timer);
//   }, [location.state]);

//   return (
//     <div className="overflow-hidden bg-[#F7F6FA] text-[#24212D]">
//       <ServicesHeroSection />

//       {/* INTRODUCTION AND FILTERS */}
//       <section className="relative py-16 sm:py-20 lg:py-28">
//         <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
//           <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end lg:gap-16">
//             <div>
//               <div className="flex items-center gap-3">
//                 <span className="h-px w-9 bg-[#6055A6]" />
//                 <span className="text-[9px] font-black uppercase tracking-[.22em] text-[#6055A6]">
//                   The Hampstead service directory
//                 </span>
//               </div>

//               <h2 className="mt-6 max-w-[760px] text-[clamp(2.8rem,6.4vw,6rem)] font-black leading-[.87] tracking-[-.075em]">
//                 Different signs.
//                 <span className="block text-[#6055A6]">
//                   Different solutions.
//                 </span>
//               </h2>
//             </div>

//             <div className="max-w-[500px] border-l-2 border-[#A59ED8] pl-5 sm:pl-7">
//               <p className="text-[12px] leading-7 text-[#77737C] sm:text-[13px]">
//                 Explore the services available from {LOCAL.company}. From
//                 insects and rodents to bird management and property proofing,
//                 find information relevant to your home or business.
//               </p>

//               <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
//                 {["Residential", "Commercial", "Prevention"].map((item) => (
//                   <span
//                     key={item}
//                     className="inline-flex items-center gap-2 text-[8px] font-black uppercase tracking-[.1em]"
//                   >
//                     <CircleCheck
//                       size={14}
//                       className="text-[#6055A6]"
//                     />
//                     {item}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* CATEGORY FILTERS */}
//           <div className="mt-12 rounded-[24px] border border-[#24212D]/8 bg-white p-5 sm:mt-16 sm:p-7">
//             <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
//               <div className="flex items-center gap-3">
//                 <span className="flex h-11 w-11 items-center justify-center rounded-[15px] bg-[#F0EDF9] text-[#6055A6]">
//                   <Search size={18} />
//                 </span>

//                 <div>
//                   <p className="text-[10px] font-black uppercase tracking-[.12em]">
//                     Browse by category
//                   </p>
//                   <p className="mt-1 text-[10px] text-[#77737C]">
//                     {filteredServices.length} services displayed
//                   </p>
//                 </div>
//               </div>

//               <div className="flex flex-wrap gap-2">
//                 {CATEGORIES.map((category) => {
//                   const active = selectedCategory === category;

//                   return (
//                     <button
//                       key={category}
//                       type="button"
//                       aria-pressed={active}
//                       onClick={() => setSelectedCategory(category)}
//                       className={`rounded-full px-4 py-3 text-[8px] font-black uppercase tracking-[.08em] transition sm:px-5 ${
//                         active
//                           ? "bg-[#6055A6] text-white"
//                           : "border border-[#24212D]/10 bg-white text-[#77737C] hover:border-[#6055A6] hover:text-[#6055A6]"
//                       }`}
//                     >
//                       {category}
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SERVICE DIRECTORY: 3 CARDS PER DESKTOP ROW */}
//       <section
//         id="services-list"
//         className="bg-white py-16 sm:py-20 lg:py-28"
//       >
//         <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
//           <div className="mb-10 flex flex-wrap items-end justify-between gap-5 border-b border-[#24212D]/10 pb-6 sm:mb-14">
//             <div>
//               <span className="text-[8px] font-black uppercase tracking-[.23em] text-[#6055A6]">
//                 Find the right service
//               </span>

//               <h2 className="mt-3 text-[clamp(2.2rem,4.8vw,4.5rem)] font-black leading-[.9] tracking-[-.065em]">
//                 Explore the directory.
//               </h2>
//             </div>

//             <span className="text-[10px] font-black tabular-nums text-[#77737C]">
//               {String(filteredServices.length).padStart(2, "0")} SERVICES
//             </span>
//           </div>

//           <div className="grid grid-cols-1 items-stretch gap-x-5 gap-y-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-14">
//             {filteredServices.map((service, index) => (
//               <ServiceModule
//                 key={service.number}
//                 service={service}
//                 index={index}
//                 onSelect={handleServiceNavigation}
//               />
//             ))}
//           </div>

//           {selectedCategory !== "All" && (
//             <div className="mt-14 text-center">
//               <button
//                 type="button"
//                 onClick={() => setSelectedCategory("All")}
//                 className="inline-flex items-center gap-3 rounded-full border border-[#24212D]/15 px-6 py-4 text-[9px] font-black uppercase tracking-[.12em] transition hover:border-[#6055A6] hover:text-[#6055A6]"
//               >
//                 View all services
//                 <ArrowRight size={14} />
//               </button>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* HOW TO GET STARTED */}
//       <section className="relative overflow-hidden bg-[#24212D] text-white">
//         <div className="pointer-events-none absolute -right-28 top-0 h-[360px] w-[360px] rounded-full border border-[#A59ED8]/20 sm:h-[550px] sm:w-[550px]" />
//         <div className="pointer-events-none absolute -right-10 top-16 h-[270px] w-[270px] rounded-full border border-white/10 sm:h-[390px] sm:w-[390px]" />

//         <div className="relative mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
//           <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
//             <div>
//               <div className="flex items-center gap-3">
//                 <Sparkles size={15} className="text-[#A59ED8]" />
//                 <span className="text-[8px] font-black uppercase tracking-[.22em] text-[#A59ED8]">
//                   A straightforward starting point
//                 </span>
//               </div>

//               <h2 className="mt-6 max-w-[520px] text-[clamp(2.8rem,5.5vw,5.3rem)] font-black leading-[.87] tracking-[-.075em]">
//                 Start with
//                 <span className="block text-[#A59ED8]">
//                   what you notice.
//                 </span>
//               </h2>

//               <p className="mt-6 max-w-[430px] text-[12px] leading-7 text-white/55">
//                 You do not need to identify the pest yourself. Explain what
//                 you have seen, where it is happening and what type of property
//                 is involved.
//               </p>

//               <button
//                 type="button"
//                 onClick={goToContact}
//                 className="group mt-7 inline-flex min-h-[52px] items-center gap-7 rounded-full bg-[#6055A6] px-6 text-[8px] font-black uppercase tracking-[.13em] transition hover:bg-[#51478F]"
//               >
//                 Discuss the problem
//                 <ArrowRight
//                   size={15}
//                   className="transition-transform group-hover:translate-x-1"
//                 />
//               </button>
//             </div>

//             <div className="grid border-t border-white/15 sm:grid-cols-2">
//               {APPROACH.map((step) => (
//                 <div
//                   key={step.number}
//                   className="border-b border-white/15 py-6 sm:px-6 sm:py-8"
//                 >
//                   <span className="text-[9px] font-black tracking-[.2em] text-[#A59ED8]">
//                     {step.number}
//                   </span>

//                   <h3 className="mt-3 text-[21px] font-black leading-tight tracking-[-.04em]">
//                     {step.title}
//                   </h3>

//                   <p className="mt-3 max-w-[330px] text-[11px] leading-6 text-white/50">
//                     {step.text}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* PROPERTY TYPES */}
//       <section className="bg-[#F7F6FA] py-16 sm:py-20 lg:py-28">
//         <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
//           <div className="grid gap-7 lg:grid-cols-[1fr_.75fr] lg:items-end lg:gap-14">
//             <div>
//               <span className="text-[8px] font-black uppercase tracking-[.22em] text-[#6055A6]">
//                 Different environments
//               </span>

//               <h2 className="mt-5 max-w-[740px] text-[clamp(2.7rem,5.4vw,5.2rem)] font-black leading-[.88] tracking-[-.07em]">
//                 Every property
//                 <span className="block text-[#6055A6]">
//                   has its own needs.
//                 </span>
//               </h2>
//             </div>

//             <p className="max-w-[480px] text-[12px] leading-7 text-[#77737C]">
//               Property use, access points and surrounding conditions can all
//               affect how pest activity should be assessed.
//             </p>
//           </div>

//           <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
//             {PROPERTIES.map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <article
//                   key={item.number}
//                   className={`group relative min-h-[235px] overflow-hidden p-6 transition duration-300 hover:-translate-y-1 sm:p-7 ${
//                     index === 0
//                       ? "rounded-t-[70px] bg-[#6055A6] text-white"
//                       : index === 1
//                       ? "rounded-br-[65px] bg-white"
//                       : index === 2
//                       ? "rounded-tl-[65px] bg-[#EAE6F5]"
//                       : "rounded-[24px] bg-[#24212D] text-white"
//                   }`}
//                 >
//                   <div className="flex items-center justify-between">
//                     <Icon
//                       size={22}
//                       className={
//                         index === 0 || index === 3
//                           ? "text-[#D8D2F3]"
//                           : "text-[#6055A6]"
//                       }
//                     />

//                     <span
//                       className={`text-[9px] font-black tracking-[.2em] ${
//                         index === 0 || index === 3
//                           ? "text-white/40"
//                           : "text-[#24212D]/30"
//                       }`}
//                     >
//                       {item.number}
//                     </span>
//                   </div>

//                   <h3 className="mt-10 text-[21px] font-black tracking-[-.04em]">
//                     {item.title}
//                   </h3>

//                   <p
//                     className={`mt-3 text-[11px] leading-6 ${
//                       index === 0 || index === 3
//                         ? "text-white/60"
//                         : "text-[#77737C]"
//                     }`}
//                   >
//                     {item.text}
//                   </p>

//                   <div className="mt-6 h-px w-10 bg-[#A59ED8] transition-all duration-500 group-hover:w-full" />
//                 </article>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* LOCAL CONTACT */}
//       <section className="relative overflow-hidden bg-[#6055A6] text-white">
//         <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full border border-white/15 sm:h-[500px] sm:w-[500px]" />

//         <div className="relative mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
//           <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-16">
//             <div>
//               <div className="flex items-center gap-3">
//                 <MapPin size={15} className="text-[#D8D2F3]" />
//                 <span className="text-[8px] font-black uppercase tracking-[.2em] text-white/70">
//                   Hampstead · {LOCAL.postcode}
//                 </span>
//               </div>

//               <h2 className="mt-6 max-w-[760px] text-[clamp(2.8rem,6vw,5.8rem)] font-black leading-[.86] tracking-[-.075em]">
//                 Local service.
//                 <span className="block text-[#24212D]">
//                   Clear next steps.
//                 </span>
//               </h2>

//               <p className="mt-6 max-w-[520px] text-[12px] leading-7 text-white/75">
//                 {LOCAL.company} provides pest-control services for homes,
//                 managed properties and businesses in Hampstead and nearby
//                 areas.
//               </p>

//               <button
//                 type="button"
//                 onClick={goToContact}
//                 className="group mt-7 inline-flex min-h-[54px] items-center gap-7 rounded-full bg-[#24212D] px-6 text-[8px] font-black uppercase tracking-[.13em] transition hover:bg-[#15131A]"
//               >
//                 Contact SuperGuard
//                 <ArrowRight
//                   size={15}
//                   className="transition-transform group-hover:translate-x-1"
//                 />
//               </button>
//             </div>

//             <div className="rounded-t-[100px] rounded-b-[24px] bg-[#51478F] px-6 pb-7 pt-12 sm:rounded-t-[140px] sm:px-9 sm:pb-9 sm:pt-16">
//               <span className="text-[8px] font-black uppercase tracking-[.2em] text-white/55">
//                 Local address
//               </span>

//               <p className="mt-4 max-w-[420px] text-[22px] font-black leading-tight tracking-[-.04em] sm:text-[28px]">
//                 {LOCAL.address}
//               </p>

//               <div className="mt-7 border-t border-white/20 pt-5">
//                 <span className="text-[8px] font-black uppercase tracking-[.2em] text-white/55">
//                   Speak to the team
//                 </span>

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="mt-3 flex flex-wrap items-center gap-3 text-[20px] font-black transition hover:text-[#D8D2F3] sm:text-[25px]"
//                 >
//                   <Phone size={19} />
//                   {LOCAL.phoneDisplay}
//                   <ArrowUpRight size={15} />
//                 </a>
//               </div>

//               <div className="mt-7 border-t border-white/15 pt-5">
//                 <span className="text-[8px] font-black uppercase tracking-[.2em] text-white/55">
//                   Service coverage
//                 </span>

//                 <p className="mt-2 text-[12px] font-bold leading-6">
//                   Hampstead and nearby areas, London
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FINAL CONTACT SECTION */}
//       <section className="bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
//         <div className="mx-auto max-w-[1400px]">
//           <div className="relative overflow-hidden rounded-[30px] bg-[#24212D] px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-16 lg:py-16">
//             <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full border border-[#A59ED8]/20 sm:h-[420px] sm:w-[420px]" />

//             <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
//               <div>
//                 <span className="text-[8px] font-black uppercase tracking-[.22em] text-[#A59ED8]">
//                   {LOCAL.shortName}
//                 </span>

//                 <h2 className="mt-5 max-w-[750px] text-[clamp(2.5rem,5.5vw,5rem)] font-black leading-[.88] tracking-[-.07em]">
//                   Not sure which service?
//                   <span className="block text-[#A59ED8]">
//                     Let's start there.
//                   </span>
//                 </h2>

//                 <p className="mt-5 max-w-[510px] text-[12px] leading-7 text-white/55">
//                   Tell us what you have noticed, where the activity is
//                   happening and what type of property is involved.
//                 </p>
//               </div>

//               <div className="flex flex-col gap-3">
//                 <button
//                   type="button"
//                   onClick={goToContact}
//                   className="group flex min-h-[54px] items-center justify-between gap-7 rounded-full bg-[#6055A6] px-6 text-[8px] font-black uppercase tracking-[.13em] transition hover:bg-[#51478F]"
//                 >
//                   Contact the team
//                   <ArrowRight
//                     size={15}
//                     className="transition-transform group-hover:translate-x-1"
//                   />
//                 </button>

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="flex min-h-[54px] items-center justify-between gap-5 rounded-full border border-white/20 px-5 text-[10px] font-black transition hover:border-[#A59ED8] hover:text-[#A59ED8]"
//                 >
//                   <span className="flex items-center gap-3">
//                     <Phone size={14} />
//                     {LOCAL.phoneDisplay}
//                   </span>

//                   <ArrowUpRight size={14} />
//                 </a>
//               </div>
//             </div>

//             <div className="relative mt-10 flex flex-col gap-3 border-t border-white/15 pt-5 text-[8px] font-bold uppercase tracking-[.12em] text-white/45 sm:flex-row sm:justify-between">
//               <span>{LOCAL.company}</span>
//               <span>Hampstead · {LOCAL.postcode}</span>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }













import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Phone,
  ShieldCheck,
  Bug,
  Home,
  Building2,
  Check,
  Search,
  CircleCheck,
  Sparkles,
  ScanSearch,
} from "lucide-react";

import ServicesHeroSection from "../components/ServicesHeroSection";

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

const CATEGORIES = [
  "All",
  "Insects",
  "Rodents & Wildlife",
  "Birds & Prevention",
];

const SERVICES = [
  {
    number: "01",
    cat: "Insects",
    shortTitle: "Ant Control",
    title: `Ant Control ${LOCAL.area}`,
    image: "/images/ants.webp",
    eyebrow: "INSECT MANAGEMENT",
    intro: "Understand where ant trails develop and investigate the access points and conditions that may be contributing to recurring activity.",
    signs: ["Visible ant trails", "Repeated sightings", "Activity near food"],
    areas: ["Kitchens", "Entrances", "Food storage"],
    focus: "Trails & access points",
  },
  {
    number: "02",
    cat: "Insects",
    shortTitle: "Bed Bug Treatment",
    title: `Bed Bug Treatment ${LOCAL.area}`,
    image: "/images/bedbugs.webp",
    eyebrow: "SLEEPING AREAS",
    intro: "Bed bugs can remain concealed around beds and furniture. An appropriate assessment helps establish the extent of activity and areas requiring attention.",
    signs: ["Small spotting", "Live sightings", "Bed-frame activity"],
    areas: ["Bedrooms", "Bed frames", "Upholstery"],
    focus: "Harbourage & assessment",
  },
  {
    number: "03",
    cat: "Insects",
    shortTitle: "Carpet Moth Treatment",
    title: `Carpet Moth Treatment ${LOCAL.area}`,
    image: "/images/moths.webp",
    eyebrow: "FABRIC PROTECTION",
    intro: "Moth larvae can damage natural fibres and soft furnishings. Identifying affected fabrics and surrounding areas helps inform the next step.",
    signs: ["Fabric damage", "Larvae or cases", "Adult moth sightings"],
    areas: ["Carpets", "Rugs", "Wardrobes"],
    focus: "Fibres & affected areas",
  },
  {
    number: "04",
    cat: "Insects",
    shortTitle: "Carpet Beetle Control",
    title: `Carpet Beetle Control ${LOCAL.area}`,
    image: "/images/beetle.webp",
    eyebrow: "FABRIC PESTS",
    intro: "Carpet beetles and larvae may go unnoticed around floor edges and stored fabrics. Investigation helps identify where activity is concentrated.",
    signs: ["Larval activity", "Fabric damage", "Beetle sightings"],
    areas: ["Carpets", "Skirting boards", "Stored fabrics"],
    focus: "Larvae & fabric exposure",
  },
  {
    number: "05",
    cat: "Insects",
    shortTitle: "Cockroach Control",
    title: `Cockroach Control ${LOCAL.area}`,
    image: "/images/cockroach.webp",
    eyebrow: "INSECT MANAGEMENT",
    intro: "Cockroaches often shelter in warm, concealed spaces. Kitchen fittings, appliances and service openings can provide important clues.",
    signs: ["Live sightings", "Droppings", "Appliance activity"],
    areas: ["Kitchens", "Utility rooms", "Service spaces"],
    focus: "Harbourage & activity",
  },
  {
    number: "06",
    cat: "Rodents & Wildlife",
    shortTitle: "Rats & Mice Control",
    title: `Rats & Mice Control ${LOCAL.area}`,
    image: "/images/rodents.webp",
    eyebrow: "RODENT MANAGEMENT",
    intro: "Rodent sightings can point to wider movement around a property. Assessment considers activity, potential entry routes and concealed harbourage.",
    signs: ["Droppings", "Scratching sounds", "Gnawing marks"],
    areas: ["Kitchens", "Lofts", "Service voids"],
    focus: "Movement & entry routes",
  },
  {
    number: "07",
    cat: "Insects",
    shortTitle: "Flea Treatment",
    title: `Flea Treatment ${LOCAL.area}`,
    image: "/images/flea.webp",
    eyebrow: "BITING INSECTS",
    intro: "Fleas may persist around flooring, carpets and upholstery. Identifying affected rooms and relevant pet areas helps inform treatment planning.",
    signs: ["Repeated bites", "Flea sightings", "Pet-area activity"],
    areas: ["Carpets", "Upholstery", "Flooring"],
    focus: "Affected rooms & surfaces",
  },
  {
    number: "08",
    cat: "Insects",
    shortTitle: "Wasp Nest Control",
    title: `Wasp Nest Control ${LOCAL.area}`,
    image: "/images/wasps.webp",
    eyebrow: "STINGING INSECTS",
    intro: "Concentrated wasp activity can indicate a nest in a sheltered location. Identifying the location helps determine an appropriate response.",
    signs: ["Repeated wasp movement", "Concentrated activity", "Visible nest"],
    areas: ["Roof spaces", "Wall cavities", "Sheds"],
    focus: "Nest location & activity",
  },
  {
    number: "09",
    cat: "Insects",
    shortTitle: "Bee Activity Support",
    title: `Bee Activity Support ${LOCAL.area}`,
    image: "/images/bee.webp",
    eyebrow: "RESPONSIBLE IDENTIFICATION",
    intro: "Bee activity should be assessed carefully before any action is considered. Species, location and behaviour can help establish the appropriate next step.",
    signs: ["Repeated bee movement", "Entry into a structure", "Concentrated activity"],
    areas: ["Roof areas", "Walls", "External entrances"],
    focus: "Identification & location",
  },
  {
    number: "10",
    cat: "Rodents & Wildlife",
    shortTitle: "Squirrel Control",
    title: `Squirrel Control ${LOCAL.area}`,
    image: "/images/squirrel.webp",
    eyebrow: "WILDLIFE MANAGEMENT",
    intro: "Movement and noises in roof spaces may indicate squirrel activity. Assessment helps investigate access routes and potential damage.",
    signs: ["Loft noises", "Ceiling movement", "Gnawing damage"],
    areas: ["Lofts", "Roof spaces", "External access"],
    focus: "Roof access & movement",
  },
  {
    number: "11",
    cat: "Birds & Prevention",
    shortTitle: "Property Proofing",
    title: `Property Proofing ${LOCAL.area}`,
    image: "/images/hygene.webp",
    eyebrow: "LONG-TERM PREVENTION",
    intro: "Suitable proofing can help reduce pest access where gaps and structural openings contribute to recurring activity.",
    signs: ["Visible gaps", "Repeated access", "Damage near openings"],
    areas: ["Rooflines", "Vents", "Service openings"],
    focus: "Access reduction",
  },
  {
    number: "12",
    cat: "Birds & Prevention",
    shortTitle: "Bird Control",
    title: `Bird Control ${LOCAL.area}`,
    image: "/images/birds.webp",
    eyebrow: "BIRD MANAGEMENT",
    intro: "Persistent bird activity can affect roofs, ledges and balconies. The building layout and nesting locations help determine suitable management options.",
    signs: ["Repeated landing", "Nesting activity", "Droppings on surfaces"],
    areas: ["Roofs", "Ledges", "Balconies"],
    focus: "Landing & nesting areas",
  },
];

const APPROACH = [
  {
    number: "01",
    title: "Describe the signs",
    text: "Share the sightings, sounds, damage or unusual activity you have noticed.",
  },
  {
    number: "02",
    title: "Understand the setting",
    text: "The property type, affected rooms and surrounding conditions all matter.",
  },
  {
    number: "03",
    title: "Identify the service",
    text: "Use the available information to establish which pest-control service may be appropriate.",
  },
  {
    number: "04",
    title: "Plan the next step",
    text: "Discuss the issue with SuperGuard Hampstead and establish how to proceed.",
  },
];

const PROPERTIES = [
  {
    number: "01",
    title: "Private homes",
    text: "Pest-control support for houses, flats and everyday residential spaces.",
    icon: Home,
  },
  {
    number: "02",
    title: "Commercial spaces",
    text: "Consideration for offices, customer-facing premises and workplaces.",
    icon: Building2,
  },
  {
    number: "03",
    title: "Managed buildings",
    text: "Support for landlords and property managers dealing with pest concerns.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Pest prevention",
    text: "Attention to access points and property conditions that may encourage activity.",
    icon: ScanSearch,
  },
];

const IMAGE_STYLES = [
  "rounded-tl-[100px] rounded-br-[42px]",
  "rounded-tr-[105px] rounded-bl-[105px]",
  "rounded-t-[48%] rounded-b-[18px]",
  "rounded-tl-[48%] rounded-br-[48%] rounded-tr-[12px] rounded-bl-[12px]",
  "rounded-tr-[85px] rounded-bl-[35px]",
  "rounded-t-[90px] rounded-br-[90px]",
];

function ServiceModule({ service, index, onSelect }) {
  const reverse = index % 2 === 1;
  const wide = index % 4 === 0;

  return (
    <article
      id={`service-${service.number}`}
      className={`group min-w-0 ${
        wide ? "lg:col-span-7" : "lg:col-span-5"
      }`}
    >
      <button
        type="button"
        onClick={() => onSelect(service)}
        aria-label={`Enquire about ${service.title}`}
        className="block w-full text-left"
      >
        <div
          className={`relative grid min-w-0 items-center gap-5 overflow-hidden rounded-[28px] border border-[#24212D]/8 bg-[#F7F6FA] p-3 transition duration-500 hover:-translate-y-1 hover:shadow-[0_22px_65px_rgba(36,33,45,.09)] sm:gap-6 sm:p-5 ${
            wide
              ? "sm:grid-cols-[1.05fr_.95fr]"
              : "sm:grid-cols-[.9fr_1.1fr]"
          }`}
        >
          <div
            className={`relative min-w-0 overflow-hidden bg-[#EAE6F5] ${
              reverse ? "sm:order-2" : ""
            } ${IMAGE_STYLES[index % IMAGE_STYLES.length]}`}
          >
            <img
              src={service.image}
              alt={`${service.shortTitle} in ${LOCAL.area}`}
              loading="lazy"
              className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                wide ? "aspect-[.9] sm:aspect-[.82]" : "aspect-[.94]"
              }`}
            />

            <div className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[10px] font-black text-[#6055A6] shadow-lg">
              {service.number}
            </div>

            <span className="absolute bottom-3 left-3 rounded-full border border-white/35 bg-[#24212D]/65 px-3 py-2 text-[7px] font-black uppercase tracking-[.13em] text-white backdrop-blur-md">
              {service.cat}
            </span>
          </div>

          <div className={`min-w-0 px-2 py-3 sm:px-1 sm:py-5 ${reverse ? "sm:order-1" : ""}`}>
            <span className="text-[8px] font-black uppercase tracking-[.18em] text-[#6055A6]">
              {service.eyebrow}
            </span>

            <h3 className="mt-3 text-[clamp(1.45rem,2.6vw,2.5rem)] font-black leading-[.98] tracking-[-.055em] text-[#24212D]">
              {service.shortTitle}
            </h3>

            <p className="mt-4 text-[11px] leading-6 text-[#77737C] sm:text-[12px]">
              {service.intro}
            </p>

            <div className="mt-5 border-t border-[#24212D]/10 pt-4">
              <span className="text-[8px] font-black uppercase tracking-[.13em] text-[#6055A6]">
                Areas to consider
              </span>

              <div className="mt-3 flex flex-wrap gap-2">
                {service.areas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full bg-white px-3 py-2 text-[9px] font-bold text-[#5F5B66]"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-3">
              <span className="text-[9px] font-bold text-[#77737C]">
                {service.focus}
              </span>

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6055A6] text-white transition duration-300 group-hover:rotate-45 group-hover:bg-[#24212D]">
                <ArrowUpRight size={17} />
              </span>
            </div>
          </div>
        </div>
      </button>

      <div className="mt-4 grid grid-cols-1 gap-4 px-2 sm:grid-cols-2 sm:px-4">
        <div>
          <span className="text-[8px] font-black uppercase tracking-[.15em] text-[#6055A6]">
            Common signs
          </span>

          <ul className="mt-3 space-y-2">
            {service.signs.map((sign) => (
              <li
                key={sign}
                className="flex items-start gap-2 text-[10px] leading-5 text-[#77737C]"
              >
                <Check size={13} className="mt-1 shrink-0 text-[#6055A6]" />
                {sign}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-end sm:justify-end">
          <button
            type="button"
            onClick={() => onSelect(service)}
            className="inline-flex items-center gap-2 border-b border-[#6055A6]/30 pb-2 text-[8px] font-black uppercase tracking-[.12em] text-[#6055A6] transition hover:border-[#6055A6]"
          >
            Discuss this service
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Services() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices = useMemo(
    () =>
      selectedCategory === "All"
        ? SERVICES
        : SERVICES.filter((service) => service.cat === selectedCategory),
    [selectedCategory]
  );

  const goToContact = () => {
    navigate("/contact-us");
  };

  const handleServiceNavigation = (service) => {
    navigate("/contact-us", {
      state: { service: service.title },
    });
  };

  useEffect(() => {
    const state = location.state;
    if (!state) return;

    if (state.category && CATEGORIES.includes(state.category)) {
      setSelectedCategory(state.category);
    }

    if (!state.scrollToService) return;

    const timer = window.setTimeout(() => {
      const searchText = String(state.scrollToService).toLowerCase();

      const target = SERVICES.find(
        (service) =>
          service.title.toLowerCase().includes(searchText) ||
          service.shortTitle.toLowerCase().includes(searchText)
      );

      if (target) {
        document.getElementById(`service-${target.number}`)?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 600);

    return () => window.clearTimeout(timer);
  }, [location.state]);

  return (
    <div className="overflow-hidden bg-[#F7F6FA] text-[#24212D]">
      <ServicesHeroSection />

      {/* INTRODUCTION AND FILTERS */}
      <section className="relative py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-9 bg-[#6055A6]" />
                <span className="text-[9px] font-black uppercase tracking-[.22em] text-[#6055A6]">
                  The Hampstead service directory
                </span>
              </div>

              <h2 className="mt-6 max-w-[760px] text-[clamp(2.8rem,6.4vw,6rem)] font-black leading-[.87] tracking-[-.075em]">
                Different signs.
                <span className="block text-[#6055A6]">
                  Different solutions.
                </span>
              </h2>
            </div>

            <div className="max-w-[500px] border-l-2 border-[#A59ED8] pl-5 sm:pl-7">
              <p className="text-[12px] leading-7 text-[#77737C] sm:text-[13px]">
                Explore the services available from {LOCAL.company}. From
                insects and rodents to bird management and property proofing,
                find information relevant to your home or business.
              </p>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
                {["Residential", "Commercial", "Prevention"].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 text-[8px] font-black uppercase tracking-[.1em]"
                  >
                    <CircleCheck size={14} className="text-[#6055A6]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-[24px] border border-[#24212D]/8 bg-white p-5 sm:mt-16 sm:p-7">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-[15px] bg-[#F0EDF9] text-[#6055A6]">
                  <Search size={18} />
                </span>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[.12em]">
                    Browse by category
                  </p>
                  <p className="mt-1 text-[10px] text-[#77737C]">
                    {filteredServices.length} services displayed
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((category) => {
                  const active = selectedCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setSelectedCategory(category)}
                      className={`rounded-full px-4 py-3 text-[8px] font-black uppercase tracking-[.08em] transition sm:px-5 ${
                        active
                          ? "bg-[#6055A6] text-white"
                          : "border border-[#24212D]/10 bg-white text-[#77737C] hover:border-[#6055A6] hover:text-[#6055A6]"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ASYMMETRIC SERVICE DIRECTORY */}
      <section id="services-list" className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5 border-b border-[#24212D]/10 pb-6 sm:mb-14">
            <div>
              <span className="text-[8px] font-black uppercase tracking-[.23em] text-[#6055A6]">
                Find the right service
              </span>
              <h2 className="mt-3 text-[clamp(2.2rem,4.8vw,4.5rem)] font-black leading-[.9] tracking-[-.065em]">
                Explore the directory.
              </h2>
            </div>

            <span className="text-[10px] font-black tabular-nums text-[#77737C]">
              {String(filteredServices.length).padStart(2, "0")} SERVICES
            </span>
          </div>

          <div className="grid grid-cols-1 items-start gap-x-7 gap-y-14 sm:gap-y-16 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
            {filteredServices.map((service, index) => (
              <ServiceModule
                key={service.number}
                service={service}
                index={index}
                onSelect={handleServiceNavigation}
              />
            ))}
          </div>

          {selectedCategory !== "All" && (
            <div className="mt-14 text-center">
              <button
                type="button"
                onClick={() => setSelectedCategory("All")}
                className="inline-flex items-center gap-3 rounded-full border border-[#24212D]/15 px-6 py-4 text-[9px] font-black uppercase tracking-[.12em] transition hover:border-[#6055A6] hover:text-[#6055A6]"
              >
                View all services
                <ArrowRight size={14} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* HOW TO GET STARTED */}
      <section className="relative overflow-hidden bg-[#24212D] text-white">
        <div className="pointer-events-none absolute -right-28 top-0 h-[360px] w-[360px] rounded-full border border-[#A59ED8]/20 sm:h-[550px] sm:w-[550px]" />
        <div className="pointer-events-none absolute -right-10 top-16 h-[270px] w-[270px] rounded-full border border-white/10 sm:h-[390px] sm:w-[390px]" />

        <div className="relative mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
            <div>
              <div className="flex items-center gap-3">
                <Sparkles size={15} className="text-[#A59ED8]" />
                <span className="text-[8px] font-black uppercase tracking-[.22em] text-[#A59ED8]">
                  A straightforward starting point
                </span>
              </div>

              <h2 className="mt-6 max-w-[520px] text-[clamp(2.8rem,5.5vw,5.3rem)] font-black leading-[.87] tracking-[-.075em]">
                Start with
                <span className="block text-[#A59ED8]">what you notice.</span>
              </h2>

              <p className="mt-6 max-w-[430px] text-[12px] leading-7 text-white/55">
                You do not need to identify the pest yourself. Explain what
                you have seen, where it is happening and what type of property
                is involved.
              </p>

              <button
                type="button"
                onClick={goToContact}
                className="group mt-7 inline-flex min-h-[52px] items-center gap-7 rounded-full bg-[#6055A6] px-6 text-[8px] font-black uppercase tracking-[.13em] transition hover:bg-[#51478F]"
              >
                Discuss the problem
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <div className="grid border-t border-white/15 sm:grid-cols-2">
              {APPROACH.map((step) => (
                <div
                  key={step.number}
                  className="border-b border-white/15 py-6 sm:px-6 sm:py-8"
                >
                  <span className="text-[9px] font-black tracking-[.2em] text-[#A59ED8]">
                    {step.number}
                  </span>
                  <h3 className="mt-3 text-[21px] font-black leading-tight tracking-[-.04em]">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[330px] text-[11px] leading-6 text-white/50">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTY TYPES */}
      <section className="bg-[#F7F6FA] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-7 lg:grid-cols-[1fr_.75fr] lg:items-end lg:gap-14">
            <div>
              <span className="text-[8px] font-black uppercase tracking-[.22em] text-[#6055A6]">
                Different environments
              </span>

              <h2 className="mt-5 max-w-[740px] text-[clamp(2.7rem,5.4vw,5.2rem)] font-black leading-[.88] tracking-[-.07em]">
                Every property
                <span className="block text-[#6055A6]">
                  has its own needs.
                </span>
              </h2>
            </div>

            <p className="max-w-[480px] text-[12px] leading-7 text-[#77737C]">
              Property use, access points and surrounding conditions can all
              affect how pest activity should be assessed.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {PROPERTIES.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className={`group relative min-h-[235px] overflow-hidden p-6 transition duration-300 hover:-translate-y-1 sm:p-7 ${
                    index === 0
                      ? "rounded-t-[70px] bg-[#6055A6] text-white"
                      : index === 1
                      ? "rounded-br-[65px] bg-white"
                      : index === 2
                      ? "rounded-tl-[65px] bg-[#EAE6F5]"
                      : "rounded-[24px] bg-[#24212D] text-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      size={22}
                      className={
                        index === 0 || index === 3
                          ? "text-[#D8D2F3]"
                          : "text-[#6055A6]"
                      }
                    />
                    <span
                      className={`text-[9px] font-black tracking-[.2em] ${
                        index === 0 || index === 3
                          ? "text-white/40"
                          : "text-[#24212D]/30"
                      }`}
                    >
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-10 text-[21px] font-black tracking-[-.04em]">
                    {item.title}
                  </h3>

                  <p
                    className={`mt-3 text-[11px] leading-6 ${
                      index === 0 || index === 3
                        ? "text-white/60"
                        : "text-[#77737C]"
                    }`}
                  >
                    {item.text}
                  </p>

                  <div className="mt-6 h-px w-10 bg-[#A59ED8] transition-all duration-500 group-hover:w-full" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOCAL CONTACT */}
      <section className="relative overflow-hidden bg-[#6055A6] text-white">
        <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full border border-white/15 sm:h-[500px] sm:w-[500px]" />

        <div className="relative mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <MapPin size={15} className="text-[#D8D2F3]" />
                <span className="text-[8px] font-black uppercase tracking-[.2em] text-white/70">
                  Hampstead · {LOCAL.postcode}
                </span>
              </div>

              <h2 className="mt-6 max-w-[760px] text-[clamp(2.8rem,6vw,5.8rem)] font-black leading-[.86] tracking-[-.075em]">
                Local service.
                <span className="block text-[#24212D]">
                  Clear next steps.
                </span>
              </h2>

              <p className="mt-6 max-w-[520px] text-[12px] leading-7 text-white/75">
                {LOCAL.company} provides pest-control services for homes,
                managed properties and businesses in Hampstead and nearby
                areas.
              </p>

              <button
                type="button"
                onClick={goToContact}
                className="group mt-7 inline-flex min-h-[54px] items-center gap-7 rounded-full bg-[#24212D] px-6 text-[8px] font-black uppercase tracking-[.13em] transition hover:bg-[#15131A]"
              >
                Contact SuperGuard
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <div className="rounded-t-[100px] rounded-b-[24px] bg-[#51478F] px-6 pb-7 pt-12 sm:rounded-t-[140px] sm:px-9 sm:pb-9 sm:pt-16">
              <span className="text-[8px] font-black uppercase tracking-[.2em] text-white/55">
                Local address
              </span>

              <p className="mt-4 max-w-[420px] text-[22px] font-black leading-tight tracking-[-.04em] sm:text-[28px]">
                {LOCAL.address}
              </p>

              <div className="mt-7 border-t border-white/20 pt-5">
                <span className="text-[8px] font-black uppercase tracking-[.2em] text-white/55">
                  Speak to the team
                </span>

                <a
                  href={`tel:${LOCAL.phoneTel}`}
                  className="mt-3 flex flex-wrap items-center gap-3 text-[20px] font-black transition hover:text-[#D8D2F3] sm:text-[25px]"
                >
                  <Phone size={19} />
                  {LOCAL.phoneDisplay}
                  <ArrowUpRight size={15} />
                </a>
              </div>

              <div className="mt-7 border-t border-white/15 pt-5">
                <span className="text-[8px] font-black uppercase tracking-[.2em] text-white/55">
                  Service coverage
                </span>
                <p className="mt-2 text-[12px] font-bold leading-6">
                  Hampstead and nearby areas, London
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CONTACT SECTION */}
      <section className="bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="relative overflow-hidden rounded-[30px] bg-[#24212D] px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-16 lg:py-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full border border-[#A59ED8]/20 sm:h-[420px] sm:w-[420px]" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
              <div>
                <span className="text-[8px] font-black uppercase tracking-[.22em] text-[#A59ED8]">
                  {LOCAL.shortName}
                </span>

                <h2 className="mt-5 max-w-[750px] text-[clamp(2.5rem,5.5vw,5rem)] font-black leading-[.88] tracking-[-.07em]">
                  Not sure which service?
                  <span className="block text-[#A59ED8]">
                    Let's start there.
                  </span>
                </h2>

                <p className="mt-5 max-w-[510px] text-[12px] leading-7 text-white/55">
                  Tell us what you have noticed, where the activity is
                  happening and what type of property is involved.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  onClick={goToContact}
                  className="group flex min-h-[54px] items-center justify-between gap-7 rounded-full bg-[#6055A6] px-6 text-[8px] font-black uppercase tracking-[.13em] transition hover:bg-[#51478F]"
                >
                  Contact the team
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href={`tel:${LOCAL.phoneTel}`}
                  className="flex min-h-[54px] items-center justify-between gap-5 rounded-full border border-white/20 px-5 text-[10px] font-black transition hover:border-[#A59ED8] hover:text-[#A59ED8]"
                >
                  <span className="flex items-center gap-3">
                    <Phone size={14} />
                    {LOCAL.phoneDisplay}
                  </span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            <div className="relative mt-10 flex flex-col gap-3 border-t border-white/15 pt-5 text-[8px] font-bold uppercase tracking-[.12em] text-white/45 sm:flex-row sm:justify-between">
              <span>{LOCAL.company}</span>
              <span>Hampstead · {LOCAL.postcode}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
