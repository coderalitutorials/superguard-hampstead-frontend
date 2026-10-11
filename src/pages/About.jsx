


// import React from 'react'
// import AboutStorySection from '../components/AboutStorySection'
// import AboutPassionSection from '../components/AboutPassionSection'
// import MissionVisionSection from '../components/MissionVisionSection'
// import AboutCommitmentSection from '../components/AboutCommitmentSection'

// const About = () => {
//   return (
//     <>
//     <AboutStorySection/>
//     <AboutPassionSection/>
//     <MissionVisionSection/>
//     <AboutCommitmentSection/>
//     </>
//   )
// }

// export default About





















// import React from "react";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Check,
//   Mail,
//   MapPin,
//   Phone,
//   ShieldCheck,
//   Sparkles,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const About = () => {
//   const LOCAL = {
//     company: "Superguard Services West Wickham",
//     shortName: "Superguard West Wickham",
//     area: "West Wickham",
//     city: "London",
//     postcode: "BR4 0QL",
//     address: "16 Ash Grove, West Wickham BR4 0QL",
//     phoneDisplay: "07356 270867",
//     phoneTel: "+447356270867",
//     email: "info@superguardwestwickham.uk",
//   };

//   const principles = [
//     {
//       number: "01",
//       title: "Understand",
//       text: "We begin by understanding the pest activity, the property and the circumstances surrounding the problem.",
//     },
//     {
//       number: "02",
//       title: "Assess",
//       text: "We look for visible signs, likely harbourage areas, access points and conditions that may be contributing to activity.",
//     },
//     {
//       number: "03",
//       title: "Control",
//       text: "We recommend a practical control approach based on the pest, property and level of activity identified.",
//     },
//     {
//       number: "04",
//       title: "Prevent",
//       text: "Where appropriate, we highlight practical steps that can help reduce the chance of future pest activity.",
//     },
//   ];

//   const serviceGroups = [
//     {
//       number: "01",
//       title: "Insect Control",
//       services: [
//         "Ant Control",
//         "Bed Bug Treatment",
//         "Carpet Moth Treatment",
//         "Carpet Beetle Control",
//         "Cockroach Control",
//         "Flea Treatment",
//         "Wasp Nest Control",
//         "Bee Activity Support",
//       ],
//     },
//     {
//       number: "02",
//       title: "Rodent & Wildlife",
//       services: [
//         "Rats & Mice Control",
//         "Squirrel Control",
//       ],
//     },
//     {
//       number: "03",
//       title: "Birds & Prevention",
//       services: [
//         "Bird Control",
//         "Property Proofing",
//       ],
//     },
//   ];

//   const coveragePoints = [
//     "Residential properties",
//     "Landlords & rental properties",
//     "Offices & workplaces",
//     "Commercial properties",
//     "Local businesses",
//     "Surrounding London areas",
//   ];

//   const values = [
//     {
//       number: "01",
//       title: "Clear communication",
//       text: "We explain the situation in straightforward language so you know what has been identified and what the next step involves.",
//     },
//     {
//       number: "02",
//       title: "Property-focused",
//       text: "The same pest can behave differently from one property to another, so the surrounding conditions and access points matter.",
//     },
//     {
//       number: "03",
//       title: "Practical solutions",
//       text: "We focus on suitable control measures based on the pest, property and activity rather than taking a one-size-fits-all approach.",
//     },
//   ];

//   return (
//     <main className="overflow-hidden bg-white mt-20 text-[#111111]">

//       {/* =====================================================
//           HERO
//       ===================================================== */}

//       <section className="relative overflow-hidden bg-white">

//         <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">

//           <div className="grid min-h-[760px] items-center gap-14 py-20 lg:grid-cols-[.9fr_1.1fr] lg:gap-20 lg:py-24">

//             {/* LEFT CONTENT */}

//             <div className="relative z-10">

//               <div className="mb-8 flex items-center gap-4">

//                 <span className="h-px w-12 bg-[#6055A6]" />

//                 <span className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[.3em] text-[#6055A6]">
//                   <Sparkles size={13} />
//                   About Superguard
//                 </span>

//               </div>

//               <h1 className="max-w-4xl text-[58px] font-black leading-[.84] tracking-[-.075em] sm:text-[78px] md:text-[92px] lg:text-[100px] xl:text-[118px]">

//                 Local team.

//                 <span className="block text-[#6055A6]">
//                   Professional
//                 </span>

//                 <span className="block">
//                   pest control.
//                 </span>

//               </h1>

//               <p className="mt-9 max-w-xl text-[15px] font-medium leading-8 text-[#666666] sm:text-base">
//                 {LOCAL.company} provides professional pest control
//                 support for homes, landlords, businesses and
//                 commercial properties throughout {LOCAL.area} and
//                 surrounding London areas.
//               </p>

//               <div className="mt-9 flex flex-col gap-3 sm:flex-row">

//                 <Link
//                   to="/contact-us"
//                   className="group inline-flex min-h-[58px] items-center justify-between gap-10 bg-[#6055A6] px-7 text-[9px] font-black uppercase tracking-[.18em] text-white transition duration-300 hover:-translate-y-1"
//                 >
//                   Get In Touch

//                   <ArrowRight
//                     size={16}
//                     className="transition-transform duration-300 group-hover:translate-x-1"
//                   />
//                 </Link>

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="group inline-flex min-h-[58px] items-center justify-between gap-7 border border-[#6055A6]/30 px-7 text-[9px] font-black uppercase tracking-[.18em] text-[#151515] transition duration-300 hover:-translate-y-1 hover:border-[#6055A6] hover:bg-[#6055A6] hover:text-white"
//                 >
//                   <Phone size={15} />

//                   {LOCAL.phoneDisplay}

//                   <ArrowUpRight
//                     size={15}
//                     className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
//                   />
//                 </a>

//               </div>

//               <div className="mt-12 flex flex-wrap gap-x-7 gap-y-4 border-t border-[#6055A6]/15 pt-6">

//                 {[
//                   "Local Service",
//                   "Residential",
//                   "Commercial",
//                   "Professional Approach",
//                 ].map((item) => (

//                   <span
//                     key={item}
//                     className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[.14em] text-[#777777]"
//                   >
//                     <Check
//                       size={13}
//                       className="text-[#6055A6]"
//                     />

//                     {item}
//                   </span>

//                 ))}

//               </div>

//             </div>

//             {/* HERO IMAGE */}

//             <div className="relative flex min-h-[520px] items-center justify-center lg:min-h-[650px]">

//               <div className="absolute right-[2%] top-[5%] h-[430px] w-[430px] rounded-full border border-[#6055A6]/20 sm:h-[550px] sm:w-[550px] lg:h-[680px] lg:w-[680px]" />

//               <div className="absolute right-[8%] top-[11%] h-[330px] w-[330px] rounded-full border border-[#6055A6]/10 sm:h-[430px] sm:w-[430px] lg:h-[550px] lg:w-[550px]" />

//               <div className="relative z-10 h-[430px] w-[430px] overflow-hidden rounded-full border-[10px] border-white shadow-[0_25px_80px_rgba(96,85,166,.18)] sm:h-[520px] sm:w-[520px] lg:h-[620px] lg:w-[620px]">

//                 <img
//                   src="/images/about-story.webp"
//                   alt={`${LOCAL.company} professional pest control team`}
//                   className="h-full w-full object-cover"
//                   loading="eager"
//                   fetchPriority="high"
//                 />

//               </div>

//               <div className="absolute bottom-4 left-2 z-20 max-w-[240px] bg-[#6055A6] p-6 text-white shadow-[0_20px_60px_rgba(96,85,166,.25)] sm:bottom-8 sm:left-4">

//                 <ShieldCheck size={21} />

//                 <span className="mt-5 block text-[8px] font-black uppercase tracking-[.25em] text-white/65">
//                   Serving locally
//                 </span>

//                 <span className="mt-2 block text-lg font-black leading-tight">
//                   {LOCAL.area}
//                   <br />
//                   {LOCAL.city}
//                 </span>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           INTRO STATEMENT
//       ===================================================== */}

//       <section className="border-y border-[#6055A6]/15 bg-[#6055A6] text-white">

//         <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

//           <div className="grid gap-12 lg:grid-cols-[.55fr_1.45fr] lg:gap-20">

//             <div>
//               <span className="text-[9px] font-black uppercase tracking-[.3em] text-white/65">
//                 01 — Our Approach
//               </span>

//               <div className="mt-7 flex items-center gap-3">
//                 <span className="h-2 w-2 rounded-full bg-white" />
//                 <span className="h-px w-20 bg-white/35" />
//               </div>
//             </div>

//             <div>

//               <h2 className="max-w-5xl text-[43px] font-black leading-[.92] tracking-[-.055em] sm:text-[60px] lg:text-[76px]">
//                 Pest problems need
//                 <span className="text-white/55">
//                   {" "}a considered response.
//                 </span>
//               </h2>

//               <p className="mt-8 max-w-3xl text-base font-medium leading-8 text-white/75 sm:text-lg">
//                 At {LOCAL.company}, our approach starts with
//                 understanding what is happening at the property.
//                 We consider the pest involved, where activity has
//                 been noticed and the conditions that may be allowing
//                 the problem to continue.
//               </p>

//               <p className="mt-5 max-w-3xl text-sm leading-8 text-white/60">
//                 From insects and rodents to wildlife, birds and
//                 property proofing, our focus is on giving customers
//                 clear information and a practical way forward.
//               </p>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           IMAGE + STORY
//       ===================================================== */}

//       <section className="bg-white">

//         <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

//           <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-24">

//             {/* IMAGE */}

//             <div className="relative">

//               <div className="absolute -left-5 -top-5 h-28 w-28 border-l border-t border-[#6055A6]/35 sm:-left-8 sm:-top-8 sm:h-36 sm:w-36" />

//               <div className="absolute -bottom-5 -right-5 h-28 w-28 border-b border-r border-[#6055A6]/35 sm:-bottom-8 sm:-right-8 sm:h-36 sm:w-36" />

//               <div className="relative overflow-hidden">

//                 <img
//                   src="/images/about-superguard-banner.webp"
//                   alt={`${LOCAL.company} pest control services in ${LOCAL.area}`}
//                   className="h-[430px] w-full object-cover sm:h-[560px] lg:h-[640px]"
//                   loading="lazy"
//                 />

//               </div>

//               <div className="absolute bottom-0 left-0 bg-[#6055A6] px-6 py-5 text-white sm:px-8 sm:py-6">

//                 <span className="block text-[8px] font-black uppercase tracking-[.25em] text-white/60">
//                   Local Coverage
//                 </span>

//                 <span className="mt-2 block text-lg font-black">
//                   {LOCAL.area}, {LOCAL.city}
//                 </span>

//               </div>

//             </div>


//             {/* CONTENT */}

//             <div>

//               <span className="text-[9px] font-black uppercase tracking-[.3em] text-[#6055A6]">
//                 02 — What We Believe
//               </span>

//               <h2 className="mt-6 max-w-xl text-[50px] font-black leading-[.87] tracking-[-.065em] sm:text-[68px]">
//                 Good pest control
//                 <span className="block text-[#6055A6]">
//                   starts with clarity.
//                 </span>
//               </h2>

//               <p className="mt-8 max-w-xl text-sm font-medium leading-8 text-[#666666] sm:text-base">
//                 When you discover pest activity, you want to know
//                 what is happening and what can be done about it.
//                 We aim to make that process straightforward.
//               </p>

//               <div className="mt-10 border-t border-[#6055A6]/15">

//                 {values.map((item) => (

//                   <div
//                     key={item.number}
//                     className="grid gap-5 border-b border-[#6055A6]/15 py-7 sm:grid-cols-[55px_1fr]"
//                   >

//                     <span className="text-[9px] font-black text-[#6055A6]">
//                       {item.number}
//                     </span>

//                     <div>

//                       <h3 className="text-xl font-black tracking-[-.035em]">
//                         {item.title}
//                       </h3>

//                       <p className="mt-3 max-w-xl text-sm leading-7 text-[#777777]">
//                         {item.text}
//                       </p>

//                     </div>

//                   </div>

//                 ))}

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           PROCESS
//       ===================================================== */}

//       <section className="bg-[#6055A6] text-white">

//         <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

//           <div className="grid gap-16 lg:grid-cols-[.65fr_1.35fr] lg:gap-24">

//             <div>

//               <span className="text-[9px] font-black uppercase tracking-[.3em] text-white/65">
//                 03 — How We Work
//               </span>

//               <h2 className="mt-7 text-[52px] font-black leading-[.86] tracking-[-.065em] sm:text-[72px]">
//                 Inspect.
//                 <br />
//                 Control.
//                 <br />
//                 <span className="text-white/55">
//                   Prevent.
//                 </span>
//               </h2>

//               <p className="mt-8 max-w-md text-sm leading-8 text-white/65 sm:text-base">
//                 Every pest problem is different. We focus on
//                 understanding the activity, the property and
//                 the likely cause before recommending the next
//                 practical step.
//               </p>

//             </div>


//             <div className="border-t border-white/20">

//               {principles.map((item) => (

//                 <div
//                   key={item.number}
//                   className="group grid gap-5 border-b border-white/20 py-9 sm:grid-cols-[70px_190px_1fr] sm:items-start"
//                 >

//                   <span className="text-[10px] font-black text-white/50">
//                     {item.number}
//                   </span>

//                   <h3 className="text-2xl font-black tracking-[-.04em]">
//                     {item.title}
//                   </h3>

//                   <p className="max-w-lg text-sm leading-7 text-white/65">
//                     {item.text}
//                   </p>

//                 </div>

//               ))}

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           SERVICES
//       ===================================================== */}

//       <section className="bg-white">

//         <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

//           <div className="flex flex-col gap-8 border-b border-[#6055A6]/15 pb-10 lg:flex-row lg:items-end lg:justify-between">

//             <div>

//               <span className="text-[9px] font-black uppercase tracking-[.3em] text-[#6055A6]">
//                 04 — What We Cover
//               </span>

//               <h2 className="mt-6 max-w-4xl text-[50px] font-black leading-[.87] tracking-[-.065em] sm:text-[70px]">
//                 One local team.
//                 <span className="block text-[#6055A6]">
//                   Multiple pest problems.
//                 </span>
//               </h2>

//             </div>

//             <Link
//               to="/services"
//               className="group inline-flex items-center gap-4 self-start bg-[#6055A6] px-6 py-5 text-[9px] font-black uppercase tracking-[.18em] text-white transition hover:-translate-y-1"
//             >
//               Explore Services

//               <ArrowRight
//                 size={15}
//                 className="transition-transform group-hover:translate-x-2"
//               />
//             </Link>

//           </div>


//           <div className="mt-14 grid border-l border-t border-[#6055A6]/15 sm:grid-cols-2 lg:grid-cols-3">

//             {serviceGroups.map((group) => (

//               <div
//                 key={group.number}
//                 className="group border-b border-r border-[#6055A6]/15 p-7 transition duration-300 hover:bg-[#6055A6] hover:text-white sm:p-9 lg:p-10"
//               >

//                 <div className="flex items-center justify-between">

//                   <span className="text-[9px] font-black text-[#6055A6] transition group-hover:text-white/55">
//                     {group.number}
//                   </span>

//                   <ArrowUpRight
//                     size={17}
//                     className="text-[#6055A6] transition group-hover:text-white"
//                   />

//                 </div>

//                 <h3 className="mt-8 text-2xl font-black tracking-[-.04em]">
//                   {group.title}
//                 </h3>

//                 <div className="mt-8">

//                   {group.services.map((service) => (

//                     <div
//                       key={service}
//                       className="flex items-center gap-3 border-t border-[#6055A6]/15 py-3 transition group-hover:border-white/15"
//                     >

//                       <Check
//                         size={13}
//                         className="shrink-0 text-[#6055A6] transition group-hover:text-white"
//                       />

//                       <span className="text-[10px] font-bold text-[#666666] transition group-hover:text-white/75">
//                         {service}
//                       </span>

//                     </div>

//                   ))}

//                 </div>

//               </div>

//             ))}

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           LOCAL COVERAGE
//       ===================================================== */}

//       <section className="border-t border-[#6055A6]/15 bg-white">

//         <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

//           <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">

//             <div>

//               <span className="text-[9px] font-black uppercase tracking-[.3em] text-[#6055A6]">
//                 05 — Local Coverage
//               </span>

//               <h2 className="mt-6 text-[52px] font-black leading-[.86] tracking-[-.065em] sm:text-[72px]">
//                 West Wickham.
//                 <span className="block text-[#6055A6]">
//                   And beyond.
//                 </span>
//               </h2>

//               <p className="mt-8 max-w-lg text-sm font-medium leading-8 text-[#666666] sm:text-base">
//                 Based at {LOCAL.address}, {LOCAL.company}
//                 provides professional pest control support
//                 throughout {LOCAL.area}, {LOCAL.city} and
//                 surrounding London areas.
//               </p>

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="mt-8 inline-flex items-center gap-4 bg-[#6055A6] px-7 py-5 text-[9px] font-black uppercase tracking-[.18em] text-white transition hover:-translate-y-1"
//               >
//                 <Phone size={15} />
//                 Call {LOCAL.phoneDisplay}
//               </a>

//             </div>


//             <div className="border-t border-[#6055A6]/15">

//               {coveragePoints.map((item, index) => (

//                 <div
//                   key={item}
//                   className="group flex items-center justify-between gap-5 border-b border-[#6055A6]/15 py-7"
//                 >

//                   <div className="flex items-center gap-5">

//                     <span className="text-[9px] font-black text-[#6055A6]">
//                       {String(index + 1).padStart(2, "0")}
//                     </span>

//                     <span className="text-lg font-black tracking-[-.025em]">
//                       {item}
//                     </span>

//                   </div>

//                   <ArrowUpRight
//                     size={17}
//                     className="shrink-0 text-[#6055A6] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
//                   />

//                 </div>

//               ))}

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           CONTACT INFORMATION
//       ===================================================== */}

//       <section className="bg-white">

//         <div className="mx-auto max-w-[1500px] px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">

//           <div className="grid border border-[#6055A6]/20 md:grid-cols-3">

//             {/* ADDRESS */}

//             <div className="p-7 sm:p-9 lg:p-10">

//               <div className="flex h-11 w-11 items-center justify-center bg-[#6055A6] text-white">
//                 <MapPin size={17} />
//               </div>

//               <span className="mt-7 block text-[8px] font-black uppercase tracking-[.25em] text-[#6055A6]">
//                 Local Address
//               </span>

//               <p className="mt-4 text-base font-black leading-7">
//                 {LOCAL.address}
//               </p>

//             </div>


//             {/* PHONE */}

//             <div className="border-t border-[#6055A6]/20 p-7 sm:p-9 md:border-l md:border-t-0 lg:p-10">

//               <div className="flex h-11 w-11 items-center justify-center bg-[#6055A6] text-white">
//                 <Phone size={17} />
//               </div>

//               <span className="mt-7 block text-[8px] font-black uppercase tracking-[.25em] text-[#6055A6]">
//                 Phone
//               </span>

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="mt-4 block text-base font-black transition hover:text-[#6055A6]"
//               >
//                 {LOCAL.phoneDisplay}
//               </a>

//             </div>


//             {/* EMAIL */}

//             <div className="border-t border-[#6055A6]/20 p-7 sm:p-9 md:border-l md:border-t-0 lg:p-10">

//               <div className="flex h-11 w-11 items-center justify-center bg-[#6055A6] text-white">
//                 <Mail size={17} />
//               </div>

//               <span className="mt-7 block text-[8px] font-black uppercase tracking-[.25em] text-[#6055A6]">
//                 Email
//               </span>

//               <a
//                 href={`mailto:${LOCAL.email}`}
//                 className="mt-4 block break-all text-base font-black transition hover:text-[#6055A6]"
//               >
//                 {LOCAL.email}
//               </a>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           FINAL CTA
//       ===================================================== */}

//       <section className="bg-[#6055A6] text-white">

//         <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

//           <div className="grid items-end gap-14 lg:grid-cols-[1fr_auto] lg:gap-20">

//             <div>

//               <span className="text-[9px] font-black uppercase tracking-[.3em] text-white/60">
//                 06 — Get Started
//               </span>

//               <h2 className="mt-6 max-w-4xl text-[54px] font-black leading-[.86] tracking-[-.065em] sm:text-[78px]">
//                 Got a pest
//                 <br />
//                 problem?

//                 <span className="block text-white/55">
//                   Let's talk.
//                 </span>
//               </h2>

//               <p className="mt-8 max-w-xl text-sm leading-8 text-white/70 sm:text-base">
//                 Tell us what you've noticed around your property
//                 and our local team can help you understand the
//                 next practical step.
//               </p>

//             </div>


//             <div className="flex flex-col gap-3">

//               <Link
//                 to="/contact-us"
//                 className="group flex min-h-[60px] min-w-[250px] items-center justify-between gap-10 bg-white px-7 text-[9px] font-black uppercase tracking-[.18em] text-[#111111] transition hover:-translate-y-1"
//               >
//                 Contact Our Team

//                 <ArrowRight
//                   size={16}
//                   className="transition-transform group-hover:translate-x-1"
//                 />
//               </Link>

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="group flex min-h-[60px] items-center justify-between gap-7 border border-white/35 px-7 text-[9px] font-black uppercase tracking-[.18em] text-white transition hover:bg-white hover:text-[#111111]"
//               >

//                 <span className="flex items-center gap-3">
//                   <Phone size={15} />
//                   {LOCAL.phoneDisplay}
//                 </span>

//                 <ArrowUpRight
//                   size={15}
//                   className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
//                 />

//               </a>

//             </div>

//           </div>


      

//         </div>

//       </section>

//     </main>
//   );
// };

// export default About;






















// import React from "react";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Check,
//   MapPin,
//   Phone,
//   ShieldCheck,
//   Search,
//   Target,
//   Wrench,
//   Leaf,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const About = () => {
//   const LOCAL = {
//     company: "Superguard Services Isleworth",
//     shortName: "Superguard Isleworth",
//     area: "Isleworth",
//     city: "London",
//     postcode: "TW7 7HG",
//     address: "71 Talbot Rd, Isleworth TW7 7HG, United Kingdom",
//     phoneDisplay: "7405 940152",
//     phoneTel: "+447405940152",
//   };

//   const principles = [
//     {
//       icon: Search,
//       title: "We look at the whole situation",
//       text: "Where activity is appearing, what signs are present and what is happening around the property can all help shape the right response.",
//     },
//     {
//       icon: Target,
//       title: "We focus on the cause",
//       text: "Access points, harbourage and property conditions can influence pest activity, so the surrounding environment matters.",
//     },
//     {
//       icon: Wrench,
//       title: "We plan practical control",
//       text: "Treatment should reflect the pest, the property and the circumstances rather than relying on the same response for every situation.",
//     },
//     {
//       icon: Leaf,
//       title: "We think beyond treatment",
//       text: "Where appropriate, practical prevention advice can help reduce conditions that may contribute to future pest activity.",
//     },
//   ];

//   const serviceGroups = [
//     {
//       title: "Insect Control",
//       description:
//         "Solutions for common indoor and outdoor insect activity.",
//       services: [
//         "Ant Control",
//         "Bed Bug Treatment",
//         "Carpet Moth Treatment",
//         "Carpet Beetle Control",
//         "Cockroach Control",
//         "Flea Treatment",
//         "Wasp Nest Control",
//         "Bee Activity Support",
//       ],
//     },
//     {
//       title: "Rodent & Wildlife",
//       description:
//         "Support for rodents and selected wildlife-related problems.",
//       services: [
//         "Rats & Mice Control",
//         "Squirrel Control",
//       ],
//     },
//     {
//       title: "Birds & Prevention",
//       description:
//         "Property-focused measures for birds and pest access.",
//       services: [
//         "Bird Control",
//         "Property Proofing",
//       ],
//     },
//   ];

//   const propertyTypes = [
//     "Homes & flats",
//     "Rental properties",
//     "Landlord properties",
//     "Offices & workplaces",
//     "Retail premises",
//     "Commercial buildings",
//   ];

//   return (
//     <main className="mt-20 overflow-hidden bg-[#F7F6FA] text-[#15131A]">

//       {/* =========================================================
//           HERO
//       ========================================================= */}

//       <section className="bg-[#F7F6FA]">
//         <div className="mx-auto max-w-[1540px] px-5 pb-20 pt-8 sm:px-8 lg:px-12 lg:pb-28 lg:pt-12">

//           <div className="grid gap-8 lg:grid-cols-[1.08fr_.92fr]">

//             {/* MAIN IMAGE PANEL */}
//             <div className="relative min-h-[580px] overflow-hidden bg-[#24212D] sm:min-h-[680px] lg:min-h-[760px]">

//               <img
//                 src="/images/about-story.webp"
//                 alt={`${LOCAL.company} pest control`}
//                 className="absolute inset-0 h-full w-full object-cover"
//                 loading="eager"
//                 fetchPriority="high"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-[#15131A]/95 via-[#15131A]/20 to-transparent" />

//               {/* floating location */}
//               <div className="absolute left-5 top-5 flex items-center gap-3 bg-white px-4 py-3 shadow-lg sm:left-7 sm:top-7">
//                 <MapPin
//                   size={15}
//                   className="text-[#6055A6]"
//                 />

//                 <span className="text-[9px] font-black uppercase tracking-[.18em] text-[#24212D]">
//                   {LOCAL.area} · {LOCAL.postcode}
//                 </span>
//               </div>

//               {/* image copy */}
//               <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-14">

//                 <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[8px] font-black uppercase tracking-[.25em] text-white backdrop-blur-md">
//                   <span className="h-1.5 w-1.5 rounded-full bg-[#A59ED8]" />
//                   Local pest control
//                 </span>

//                 <h1 className="mt-5 max-w-3xl text-[48px] font-black leading-[.94] tracking-[-.055em] text-white sm:text-[65px] lg:text-[76px]">
//                   A cleaner approach
//                   <span className="block text-[#A59ED8]">
//                     to pest problems.
//                   </span>
//                 </h1>

//                 <p className="mt-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
//                   Professional pest control support for homes,
//                   landlords, businesses and commercial properties
//                   throughout {LOCAL.area} and surrounding London areas.
//                 </p>

//               </div>
//             </div>


//             {/* HERO INFORMATION */}
//             <div className="flex flex-col gap-8">

//               {/* Intro card */}
//               <div className="flex-1 bg-white p-7 shadow-[0_18px_55px_rgba(36,33,45,.06)] sm:p-10 lg:p-12">

//                 <div className="flex items-center justify-between">
//                   <span className="text-[9px] font-black uppercase tracking-[.28em] text-[#6055A6]">
//                     About the company
//                   </span>

//                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7F6FA] text-[#6055A6]">
//                     <ShieldCheck size={18} />
//                   </div>
//                 </div>

//                 <h2 className="mt-10 max-w-xl text-[39px] font-black leading-[.95] tracking-[-.055em] sm:text-[51px]">
//                   Pest control that starts with
//                   <span className="text-[#6055A6]">
//                     {" "}understanding.
//                   </span>
//                 </h2>

//                 <p className="mt-7 max-w-lg text-sm leading-8 text-[#6C6972]">
//                   At {LOCAL.company}, we believe a pest problem
//                   deserves more than a quick reaction. The property,
//                   the activity and the conditions around it all form
//                   part of the picture.
//                 </p>

//                 <p className="mt-5 max-w-lg text-sm leading-8 text-[#85818A]">
//                   Our role is to help make that picture clearer and
//                   identify a practical route forward.
//                 </p>

//                 <Link
//                   to="/contact-us"
//                   className="group mt-9 inline-flex items-center gap-5 rounded-full bg-[#6055A6] px-7 py-4 text-[9px] font-black uppercase tracking-[.18em] text-white transition duration-300 hover:bg-[#51478F] hover:shadow-lg"
//                 >
//                   Talk to Superguard
//                   <ArrowRight
//                     size={15}
//                     className="transition-transform group-hover:translate-x-1"
//                   />
//                 </Link>

//               </div>


//               {/* Phone card */}
//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="group flex items-center justify-between gap-5 bg-[#24212D] p-6 text-white transition duration-300 hover:bg-[#6055A6] sm:p-8"
//               >

//                 <div className="flex items-center gap-4">

//                   <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
//                     <Phone size={18} />
//                   </div>

//                   <div>
//                     <span className="block text-[8px] font-black uppercase tracking-[.25em] text-white/40">
//                       Speak with the local team
//                     </span>

//                     <span className="mt-1 block text-xl font-black tracking-[-.025em]">
//                       {LOCAL.phoneDisplay}
//                     </span>
//                   </div>

//                 </div>

//                 <ArrowUpRight
//                   size={19}
//                   className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
//                 />

//               </a>

//             </div>

//           </div>
//         </div>
//       </section>


//       {/* =========================================================
//           TRUST / INTRO BAND
//       ========================================================= */}

//       <section className="bg-white">
//         <div className="mx-auto max-w-[1540px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

//           <div className="grid items-start gap-10 lg:grid-cols-[.55fr_1.45fr]">

//             <div>
//               <span className="inline-flex rounded-full bg-[#F7F6FA] px-4 py-2 text-[8px] font-black uppercase tracking-[.25em] text-[#6055A6]">
//                 Our approach
//               </span>

//               <p className="mt-5 max-w-xs text-sm leading-7 text-[#77747D]">
//                 A pest problem can look simple from the outside.
//                 The conditions behind it often tell a bigger story.
//               </p>
//             </div>

//             <div>
//               <h2 className="max-w-5xl text-[38px] font-black leading-[1.02] tracking-[-.055em] sm:text-[53px] lg:text-[67px]">
//                 We don't just ask
//                 <span className="text-[#6055A6]">
//                   {" "}“what pest is this?”
//                 </span>
//                 <br className="hidden sm:block" />
//                 We ask what is allowing it to happen.
//               </h2>
//             </div>

//           </div>

//         </div>
//       </section>


//       {/* =========================================================
//           FOUR APPROACH CARDS
//       ========================================================= */}

//       <section className="bg-[#F7F6FA]">
//         <div className="mx-auto max-w-[1540px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

//           <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

//             <div>
//               <span className="text-[8px] font-black uppercase tracking-[.28em] text-[#6055A6]">
//                 How we think
//               </span>

//               <h2 className="mt-4 text-[39px] font-black leading-none tracking-[-.05em] sm:text-[52px]">
//                 A considered process.
//               </h2>
//             </div>

//             <p className="max-w-md text-sm leading-7 text-[#77747D]">
//               From identifying the activity to considering what
//               may help prevent it from continuing, each stage has
//               a practical purpose.
//             </p>

//           </div>


//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

//             {principles.map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <article
//                   key={item.title}
//                   className="group min-h-[340px] bg-white p-7 shadow-[0_12px_45px_rgba(36,33,45,.045)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_25px_65px_rgba(36,33,45,.10)] sm:p-8"
//                 >

//                   <div className="flex items-center justify-between">

//                     <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7F6FA] text-[#6055A6] transition group-hover:bg-[#6055A6] group-hover:text-white">
//                       <Icon size={19} />
//                     </div>

//                     <span className="text-[9px] font-black text-[#C8C5CF]">
//                       0{index + 1}
//                     </span>

//                   </div>

//                   <h3 className="mt-12 text-xl font-black leading-tight tracking-[-.035em]">
//                     {item.title}
//                   </h3>

//                   <p className="mt-4 text-sm leading-7 text-[#77747D]">
//                     {item.text}
//                   </p>

//                   <div className="mt-8 h-1 w-8 rounded-full bg-[#6055A6] transition-all duration-500 group-hover:w-16" />

//                 </article>
//               );
//             })}

//           </div>
//         </div>
//       </section>


//       {/* =========================================================
//           IMAGE STORY
//       ========================================================= */}

//       <section className="bg-white">
//         <div className="mx-auto max-w-[1540px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

//           <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">

//             {/* image */}
//             <div className="relative min-h-[520px] overflow-hidden rounded-[28px] bg-[#24212D] sm:min-h-[650px]">

//               <img
//                 src="/images/about-superguard-banner.webp"
//                 alt={`${LOCAL.company} pest control services`}
//                 className="absolute inset-0 h-full w-full object-cover"
//                 loading="lazy"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-[#15131A]/80 via-transparent to-transparent" />

//               <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-[#24212D]/80 p-6 backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8 sm:p-8">

//                 <span className="text-[8px] font-black uppercase tracking-[.25em] text-[#A59ED8]">
//                   Local knowledge
//                 </span>

//                 <p className="mt-3 text-lg font-black leading-tight text-white sm:text-xl">
//                   Understanding the property is part of understanding
//                   the pest problem.
//                 </p>

//               </div>

//             </div>


//             {/* text */}
//             <div className="flex flex-col justify-center lg:pl-10">

//               <span className="text-[8px] font-black uppercase tracking-[.28em] text-[#6055A6]">
//                 What we value
//               </span>

//               <h2 className="mt-5 max-w-2xl text-[42px] font-black leading-[.94] tracking-[-.055em] sm:text-[58px]">
//                 Clear answers are
//                 <span className="text-[#6055A6]">
//                   {" "}part of good service.
//                 </span>
//               </h2>

//               <p className="mt-7 max-w-xl text-sm leading-8 text-[#6F6C75] sm:text-base">
//                 When someone discovers pest activity, they usually
//                 want two things: to understand what is happening
//                 and to know what they can do next.
//               </p>

//               <div className="mt-10 space-y-4">

//                 {[
//                   "Straightforward explanations",
//                   "Property-aware thinking",
//                   "Practical control options",
//                   "Relevant prevention guidance",
//                 ].map((item) => (
//                   <div
//                     key={item}
//                     className="flex items-center gap-4 rounded-xl bg-[#F7F6FA] px-5 py-4"
//                   >
//                     <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#6055A6] text-white">
//                       <Check size={13} />
//                     </span>

//                     <span className="text-sm font-bold text-[#3E3B44]">
//                       {item}
//                     </span>
//                   </div>
//                 ))}

//               </div>

//             </div>

//           </div>
//         </div>
//       </section>


//       {/* =========================================================
//           SERVICES
//       ========================================================= */}

//       <section className="bg-[#24212D] text-white">
//         <div className="mx-auto max-w-[1540px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

//           <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">

//             <div>

//               <span className="inline-flex rounded-full border border-white/10 px-4 py-2 text-[8px] font-black uppercase tracking-[.25em] text-[#A59ED8]">
//                 Pest services
//               </span>

//               <h2 className="mt-6 max-w-lg text-[42px] font-black leading-[.93] tracking-[-.055em] sm:text-[58px]">
//                 Different problems
//                 <span className="block text-[#A59ED8]">
//                   need different responses.
//                 </span>
//               </h2>

//               <p className="mt-7 max-w-md text-sm leading-8 text-white/50">
//                 Superguard supports a range of common pest
//                 control requirements for residential, rental and
//                 commercial properties.
//               </p>

//               <Link
//                 to="/services"
//                 className="group mt-9 inline-flex items-center gap-4 rounded-full bg-[#6055A6] px-7 py-4 text-[9px] font-black uppercase tracking-[.18em] text-white transition hover:bg-[#51478F]"
//               >
//                 Explore services
//                 <ArrowRight
//                   size={15}
//                   className="transition-transform group-hover:translate-x-1"
//                 />
//               </Link>

//             </div>


//             <div className="space-y-4">

//               {serviceGroups.map((group) => (
//                 <div
//                   key={group.title}
//                   className="rounded-[22px] border border-white/10 bg-white/[.045] p-6 transition duration-300 hover:border-[#A59ED8]/40 hover:bg-white/[.07] sm:p-8"
//                 >

//                   <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

//                     <div>
//                       <h3 className="text-2xl font-black tracking-[-.035em]">
//                         {group.title}
//                       </h3>

//                       <p className="mt-2 max-w-md text-sm leading-6 text-white/40">
//                         {group.description}
//                       </p>
//                     </div>

//                     <ArrowUpRight
//                       size={19}
//                       className="shrink-0 text-[#A59ED8]"
//                     />

//                   </div>

//                   <div className="mt-7 flex flex-wrap gap-2">

//                     {group.services.map((service) => (
//                       <span
//                         key={service}
//                         className="rounded-full border border-white/10 bg-white/[.04] px-4 py-2.5 text-[10px] font-bold text-white/65"
//                       >
//                         {service}
//                       </span>
//                     ))}

//                   </div>

//                 </div>
//               ))}

//             </div>

//           </div>

//         </div>
//       </section>


//       {/* =========================================================
//           PROPERTY TYPES
//       ========================================================= */}

//       <section className="bg-[#F7F6FA]">
//         <div className="mx-auto max-w-[1540px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

//           <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">

//             <div>

//               <span className="text-[8px] font-black uppercase tracking-[.28em] text-[#6055A6]">
//                 Who we work with
//               </span>

//               <h2 className="mt-5 max-w-lg text-[42px] font-black leading-[.94] tracking-[-.055em] sm:text-[58px]">
//                 Built around
//                 <span className="block text-[#6055A6]">
//                   the property.
//                 </span>
//               </h2>

//               <p className="mt-7 max-w-md text-sm leading-8 text-[#77747D]">
//                 Whether the issue is at home, in a rental property
//                 or within a workplace, the surrounding conditions
//                 can influence how pest activity develops.
//               </p>

//             </div>


//             <div className="grid gap-3 sm:grid-cols-2">

//               {propertyTypes.map((item, index) => (
//                 <div
//                   key={item}
//                   className="flex min-h-[120px] items-end justify-between rounded-2xl bg-white p-6 shadow-[0_10px_35px_rgba(36,33,45,.04)]"
//                 >

//                   <div>
//                     <span className="text-[8px] font-black uppercase tracking-[.22em] text-[#A59ED8]">
//                       Property
//                     </span>

//                     <h3 className="mt-3 text-base font-black tracking-[-.025em]">
//                       {item}
//                     </h3>
//                   </div>

//                   <span className="text-[9px] font-black text-[#D2CFD8]">
//                     {String(index + 1).padStart(2, "0")}
//                   </span>

//                 </div>
//               ))}

//             </div>

//           </div>
//         </div>
//       </section>


//       {/* =========================================================
//           LOCAL IDENTITY
//       ========================================================= */}

//       <section className="bg-white">
//         <div className="mx-auto max-w-[1540px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

//           <div className="relative overflow-hidden rounded-[32px] bg-[#6055A6] p-7 text-white sm:p-10 lg:p-14">

//             {/* decorative shapes */}
//             <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/15" />
//             <div className="absolute -right-4 -top-4 h-52 w-52 rounded-full border border-white/10" />

//             <div className="relative grid gap-12 lg:grid-cols-[1fr_.75fr] lg:items-end">

//               <div>

//                 <div className="flex items-center gap-3">
//                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
//                     <MapPin size={17} />
//                   </div>

//                   <span className="text-[8px] font-black uppercase tracking-[.27em] text-white/60">
//                     Local base
//                   </span>
//                 </div>

//                 <h2 className="mt-7 max-w-3xl text-[43px] font-black leading-[.94] tracking-[-.06em] sm:text-[62px]">
//                   Proudly based in
//                   <span className="block text-white/55">
//                     {LOCAL.area}.
//                   </span>
//                 </h2>

//                 <p className="mt-7 max-w-xl text-sm leading-8 text-white/70">
//                   {LOCAL.company} is based at {LOCAL.address}
//                   and provides pest control support throughout
//                   {` ${LOCAL.area}`} and surrounding London areas.
//                 </p>

//               </div>


//               <div className="rounded-[22px] bg-[#24212D] p-7 sm:p-8">

//                 <span className="text-[8px] font-black uppercase tracking-[.25em] text-[#A59ED8]">
//                   Contact details
//                 </span>

//                 <div className="mt-6 space-y-5">

//                   <div>
//                     <span className="block text-[8px] font-black uppercase tracking-[.2em] text-white/30">
//                       Address
//                     </span>

//                     <span className="mt-2 block text-sm font-bold leading-6 text-white/80">
//                       {LOCAL.address}
//                     </span>
//                   </div>

//                   <div className="border-t border-white/10 pt-5">
//                     <span className="block text-[8px] font-black uppercase tracking-[.2em] text-white/30">
//                       Phone
//                     </span>

//                     <a
//                       href={`tel:${LOCAL.phoneTel}`}
//                       className="mt-2 block text-xl font-black text-white transition hover:text-[#A59ED8]"
//                     >
//                       {LOCAL.phoneDisplay}
//                     </a>
//                   </div>

//                 </div>

//               </div>

//             </div>
//           </div>

//         </div>
//       </section>


//       {/* =========================================================
//           FINAL CTA
//       ========================================================= */}

//       <section className="bg-[#F7F6FA]">
//         <div className="mx-auto max-w-[1540px] px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">

//           <div className="rounded-[30px] bg-white p-7 shadow-[0_20px_70px_rgba(36,33,45,.07)] sm:p-10 lg:p-14">

//             <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

//               <div>

//                 <span className="text-[8px] font-black uppercase tracking-[.28em] text-[#6055A6]">
//                   Need some help?
//                 </span>

//                 <h2 className="mt-5 max-w-3xl text-[42px] font-black leading-[.94] tracking-[-.055em] sm:text-[59px]">
//                   Tell us what you've
//                   <span className="text-[#6055A6]">
//                     {" "}noticed.
//                   </span>
//                 </h2>

//                 <p className="mt-6 max-w-xl text-sm leading-7 text-[#77747D]">
//                   Share the pest problem, the property and what
//                   you've seen so far. We can then discuss the
//                   appropriate next step.
//                 </p>

//               </div>


//               <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">

//                 <Link
//                   to="/contact-us"
//                   className="group flex min-h-[56px] min-w-[235px] items-center justify-between gap-8 rounded-full bg-[#6055A6] px-6 text-[9px] font-black uppercase tracking-[.18em] text-white transition hover:bg-[#51478F]"
//                 >
//                   Contact Superguard
//                   <ArrowRight
//                     size={15}
//                     className="transition-transform group-hover:translate-x-1"
//                   />
//                 </Link>

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="group flex min-h-[56px] min-w-[235px] items-center justify-between gap-6 rounded-full border border-[#6055A6]/20 px-6 text-[9px] font-black uppercase tracking-[.18em] text-[#24212D] transition hover:border-[#6055A6] hover:text-[#6055A6]"
//                 >
//                   <span className="flex items-center gap-3">
//                     <Phone size={14} />
//                     {LOCAL.phoneDisplay}
//                   </span>

//                   <ArrowUpRight
//                     size={14}
//                     className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
//                   />
//                 </a>

//               </div>

//             </div>

//           </div>

//         </div>
//       </section>

//     </main>
//   );
// };

// export default About;
















// import React from "react";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Check,
//   MapPin,
//   Phone,
//   ShieldCheck,
//   Search,
//   Target,
//   Wrench,
//   Leaf,
//   Home,
//   Building2,
//   Bug,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const About = () => {
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

//   const principles = [
//     {
//       number: "01",
//       icon: Search,
//       eyebrow: "Observe",
//       title: "We start with the signs.",
//       text: "Visible activity, movement patterns, damage and other clues can help build a clearer picture of what is happening at the property.",
//     },
//     {
//       number: "02",
//       icon: Target,
//       eyebrow: "Understand",
//       title: "We look for the cause.",
//       text: "Access points, harbourage and surrounding conditions can all influence pest activity. Understanding those factors matters.",
//     },
//     {
//       number: "03",
//       icon: Wrench,
//       eyebrow: "Respond",
//       title: "We choose a practical response.",
//       text: "Different pests and properties require different approaches. We focus on solutions suited to the situation.",
//     },
//     {
//       number: "04",
//       icon: Leaf,
//       eyebrow: "Prevent",
//       title: "We think beyond today.",
//       text: "Where appropriate, practical advice can help reduce the conditions that may contribute to recurring pest activity.",
//     },
//   ];

//   const serviceGroups = [
//     {
//       number: "01",
//       title: "Insects",
//       count: "08",
//       description:
//         "Professional support for common insect problems found in homes, rentals and commercial properties.",
//       services: [
//         "Ant Control",
//         "Bed Bug Treatment",
//         "Carpet Moth Treatment",
//         "Carpet Beetle Control",
//         "Cockroach Control",
//         "Flea Treatment",
//         "Wasp Nest Control",
//         "Bee Activity Support",
//       ],
//     },
//     {
//       number: "02",
//       title: "Rodents",
//       count: "02",
//       description:
//         "Property-focused control for rats, mice and selected wildlife-related problems.",
//       services: ["Rats & Mice Control", "Squirrel Control"],
//     },
//     {
//       number: "03",
//       title: "Prevention",
//       count: "02",
//       description:
//         "Measures designed around the property to help manage pest access and activity.",
//       services: ["Bird Control", "Property Proofing"],
//     },
//   ];

//   const propertyTypes = [
//     {
//       icon: Home,
//       number: "01",
//       title: "Homes & flats",
//     },
//     {
//       icon: Building2,
//       number: "02",
//       title: "Rental properties",
//     },
//     {
//       icon: Home,
//       number: "03",
//       title: "Landlord properties",
//     },
//     {
//       icon: Building2,
//       number: "04",
//       title: "Offices & workplaces",
//     },
//     {
//       icon: Building2,
//       number: "05",
//       title: "Retail premises",
//     },
//     {
//       icon: Building2,
//       number: "06",
//       title: "Commercial buildings",
//     },
//   ];

//   return (
//     <main className="mt-20 overflow-hidden bg-[#6055A6] text-[#15131A]">
//       {/* =========================================================
//           HERO — COMPLETELY NEW COMPOSITION
//       ========================================================= */}

//       <section className="relative bg-[#6055A6] text-white">
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-white/[0.07]" />
//           <div className="absolute -right-16 top-20 h-[310px] w-[310px] rounded-full border border-white/[0.05]" />
//           <div className="absolute bottom-[-180px] left-[-100px] h-[420px] w-[420px] rounded-full bg-[#6055A6]/20 blur-3xl" />
//         </div>

//         <div className="relative mx-auto max-w-[1540px] px-5 pb-10 pt-8 sm:px-8 lg:px-12 lg:pb-16 lg:pt-12">
//           {/* top meta row */}
//           <div className="flex items-center justify-between border-b border-white/10 pb-5">
//             <div className="flex items-center gap-3">
//               <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6055A6]">
//                 <ShieldCheck size={16} />
//               </span>

//               <div>
//                 <p className="text-[8px] font-black uppercase tracking-[0.25em] text-white/40">
//                   About
//                 </p>
//                 <p className="mt-0.5 text-xs font-bold text-white/80">
//                   {LOCAL.shortName}
//                 </p>
//               </div>
//             </div>

//             <div className="hidden items-center gap-2 text-[8px] font-black uppercase tracking-[0.22em] text-white/40 sm:flex">
//               <MapPin size={13} />
//               {LOCAL.area}, {LOCAL.city}
//             </div>
//           </div>

//           {/* editorial hero */}
//           <div className="grid gap-12 pt-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-16 lg:pt-16">
//             <div className="flex flex-col justify-between">
//               <div>
//                 <div className="flex items-center gap-3">
//                   <span className="h-px w-10 bg-[#A59ED8]" />

//                   <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#A59ED8]">
//                     Local pest control
//                   </span>
//                 </div>

//                 <h1 className="mt-7 max-w-4xl text-[54px] font-black leading-[0.88] tracking-[-0.065em] sm:text-[76px] lg:text-[100px]">
//                   More than
//                   <span className="block text-[#A59ED8]">
//                     just treatment.
//                   </span>
//                 </h1>

//                 <p className="mt-8 max-w-xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
//                   SuperGuard Services Chelsea provides practical pest
//                   control support for homes, landlords, businesses and
//                   commercial properties across Chelsea and nearby London
//                   areas.
//                 </p>
//               </div>

//               <div className="mt-12 flex flex-wrap items-center gap-3">
//                 <Link
//                   to="/contact-us"
//                   className="group inline-flex items-center gap-5 rounded-full bg-[#6055A6] px-7 py-4 text-[9px] font-black uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-[#51478F]"
//                 >
//                   Speak with us
//                   <ArrowRight
//                     size={15}
//                     className="transition-transform group-hover:translate-x-1"
//                   />
//                 </Link>

//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-4 text-[9px] font-black uppercase tracking-[0.18em] text-white/70 transition hover:border-white/40 hover:text-white"
//                 >
//                   <Phone size={14} />
//                   {LOCAL.phoneDisplay}
//                 </a>
//               </div>
//             </div>

//             {/* hero image — completely different shape */}
//             <div className="relative lg:pt-3">
//               <div className="relative ml-auto h-[480px] max-w-[570px] overflow-hidden rounded-[38px] sm:h-[600px] lg:h-[700px]">
//                 <img
//                   src="/images/about-story.webp"
//                   alt={`${LOCAL.company} pest control`}
//                   className="h-full w-full object-cover"
//                   loading="eager"
//                   fetchPriority="high"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-[#15131A]/80 via-transparent to-[#15131A]/10" />

//                 {/* floating number */}
//                 <div className="absolute right-5 top-5 flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-[#15131A]/60 backdrop-blur-md sm:right-7 sm:top-7 sm:h-24 sm:w-24">
//                   <div className="text-center">
//                     <span className="block text-[7px] font-black uppercase tracking-[0.2em] text-white/40">
//                       Based in
//                     </span>
//                     <span className="mt-1 block text-sm font-black">
//                       Chelsea
//                     </span>
//                   </div>
//                 </div>

//                 {/* bottom image card */}
//                 <div className="absolute bottom-5 left-5 right-5 rounded-[24px] border border-white/10 bg-[#15131A]/75 p-5 backdrop-blur-xl sm:bottom-7 sm:left-7 sm:right-7 sm:p-7">
//                   <div className="flex items-end justify-between gap-5">
//                     <div>
//                       <span className="text-[8px] font-black uppercase tracking-[0.25em] text-[#A59ED8]">
//                         Our perspective
//                       </span>

//                       <p className="mt-2 max-w-sm text-base font-black leading-tight text-white sm:text-xl">
//                         Understand the problem before deciding how to
//                         respond.
//                       </p>
//                     </div>

//                     <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#6055A6] sm:flex">
//                       <ArrowUpRight size={17} />
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           STATEMENT — NEW OVERSIZED TYPOGRAPHY
//       ========================================================= */}

//       <section className="bg-white">
//         <div className="mx-auto max-w-[1540px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
//           <div className="grid gap-12 lg:grid-cols-[0.35fr_1.65fr]">
//             <div>
//               <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#F7F6FA] text-[#6055A6]">
//                 <ShieldCheck size={18} />
//               </span>

//               <p className="mt-5 max-w-[150px] text-[8px] font-black uppercase leading-5 tracking-[0.2em] text-[#8B8791]">
//                 The SuperGuard approach
//               </p>
//             </div>

//             <div>
//               <h2 className="max-w-6xl text-[42px] font-black leading-[0.98] tracking-[-0.06em] sm:text-[61px] lg:text-[79px]">
//                 A pest problem is rarely just about the{" "}
//                 <span className="text-[#6055A6]">pest.</span>
//               </h2>

//               <div className="mt-10 grid gap-8 border-t border-[#E7E4ED] pt-8 sm:grid-cols-2">
//                 <p className="text-sm leading-8 text-[#77747D]">
//                   What is happening inside the property, how the pest is
//                   getting in and what conditions are allowing activity to
//                   continue can all matter.
//                 </p>

//                 <p className="text-sm leading-8 text-[#77747D]">
//                   That is why our approach begins with understanding the
//                   situation rather than automatically applying the same
//                   response everywhere.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           PRINCIPLES — DARK NUMBERED GRID
//       ========================================================= */}

//       <section className="bg-[#F7F6FA]">
//         <div className="mx-auto max-w-[1540px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
//           <div className="mb-14 grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
//             <div>
//               <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
//                 What guides us
//               </span>

//               <h2 className="mt-4 max-w-2xl text-[43px] font-black leading-[0.92] tracking-[-0.055em] sm:text-[61px]">
//                 Four ideas behind
//                 <span className="block text-[#6055A6]">
//                   every response.
//                 </span>
//               </h2>
//             </div>

//             <p className="max-w-sm text-sm leading-7 text-[#77747D]">
//               Good pest control starts with a clear understanding of the
//               property, the activity and the circumstances surrounding it.
//             </p>
//           </div>

//           <div className="grid gap-4 md:grid-cols-2">
//             {principles.map((item) => {
//               const Icon = item.icon;

//               return (
//                 <article
//                   key={item.number}
//                   className="group relative overflow-hidden rounded-[28px] bg-[#24212D] p-7 text-white transition duration-500 hover:-translate-y-1 sm:p-10"
//                 >
//                   <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full border border-white/[0.06] transition duration-700 group-hover:scale-125" />

//                   <div className="relative">
//                     <div className="flex items-start justify-between">
//                       <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.07] text-[#A59ED8]">
//                         <Icon size={19} />
//                       </div>

//                       <span className="text-[38px] font-black leading-none tracking-[-0.06em] text-white/[0.08]">
//                         {item.number}
//                       </span>
//                     </div>

//                     <div className="mt-16">
//                       <span className="text-[8px] font-black uppercase tracking-[0.27em] text-[#A59ED8]">
//                         {item.eyebrow}
//                       </span>

//                       <h3 className="mt-3 max-w-md text-[27px] font-black leading-[0.98] tracking-[-0.04em] sm:text-[34px]">
//                         {item.title}
//                       </h3>

//                       <p className="mt-5 max-w-lg text-sm leading-7 text-white/45">
//                         {item.text}
//                       </p>
//                     </div>

//                     <div className="mt-9 flex items-center gap-3">
//                       <span className="h-px w-9 bg-[#6055A6] transition-all duration-500 group-hover:w-16" />
//                       <span className="text-[7px] font-black uppercase tracking-[0.2em] text-white/25">
//                         SuperGuard principle
//                       </span>
//                     </div>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           IMAGE / STORY SECTION — ASYMMETRIC
//       ========================================================= */}

//       <section className="bg-white">
//         <div className="mx-auto max-w-[1540px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
//           <div className="grid gap-14 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
//             {/* layered images */}
//             <div className="relative min-h-[620px] sm:min-h-[720px]">
//               <div className="absolute left-0 top-0 h-[76%] w-[78%] overflow-hidden rounded-[32px] bg-[#24212D]">
//                 <img
//                   src="/images/about-superguard-banner.webp"
//                   alt={`${LOCAL.company} local pest control`}
//                   className="h-full w-full object-cover"
//                   loading="lazy"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-[#15131A]/70 via-transparent to-transparent" />
//               </div>

//               <div className="absolute bottom-0 right-0 h-[48%] w-[55%] overflow-hidden rounded-[28px] border-[10px] border-white bg-[#6055A6] shadow-[0_30px_80px_rgba(21,19,26,.15)]">
//                 <img
//                   src="/images/mission-superguard.webp"
//                   alt={`${LOCAL.company} pest control team approach`}
//                   className="h-full w-full object-cover"
//                   loading="lazy"
//                 />
//               </div>

//               {/* vertical label */}
//               <div className="absolute bottom-[28%] left-[-12px] hidden -rotate-90 origin-left sm:block">
//                 <span className="text-[8px] font-black uppercase tracking-[0.32em] text-[#6055A6]">
//                   Chelsea · London · Local
//                 </span>
//               </div>

//               {/* small floating badge */}
//               <div className="absolute right-[42%] top-[12%] flex h-20 w-20 items-center justify-center rounded-full bg-[#6055A6] text-white shadow-xl sm:h-24 sm:w-24">
//                 <div className="text-center">
//                   <span className="block text-[7px] font-black uppercase tracking-[0.2em] text-white/50">
//                     Local
//                   </span>
//                   <span className="mt-1 block text-sm font-black">
//                     Focus
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* copy */}
//             <div className="lg:pl-5">
//               <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
//                 Why the details matter
//               </span>

//               <h2 className="mt-5 max-w-xl text-[45px] font-black leading-[0.92] tracking-[-0.06em] sm:text-[63px]">
//                 Good service
//                 <span className="block text-[#6055A6]">
//                   starts with clarity.
//                 </span>
//               </h2>

//               <p className="mt-7 max-w-lg text-sm leading-8 text-[#77747D] sm:text-base">
//                 When pest activity appears, knowing what you are looking at
//                 can be just as important as deciding what to do about it.
//               </p>

//               <p className="mt-5 max-w-lg text-sm leading-8 text-[#77747D]">
//                 We aim to make the situation easier to understand, explain
//                 practical options and approach each property according to
//                 its own circumstances.
//               </p>

//               <div className="mt-10 space-y-3">
//                 {[
//                   "Straightforward communication",
//                   "Property-aware assessment",
//                   "Practical control options",
//                   "Relevant prevention advice",
//                 ].map((item, index) => (
//                   <div
//                     key={item}
//                     className="flex items-center gap-4 border-b border-[#E7E4ED] py-4"
//                   >
//                     <span className="text-[8px] font-black text-[#A59ED8]">
//                       0{index + 1}
//                     </span>

//                     <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F7F6FA] text-[#6055A6]">
//                       <Check size={13} />
//                     </span>

//                     <span className="text-sm font-bold text-[#3E3B44]">
//                       {item}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           SERVICES — COMPLETELY DIFFERENT FROM OLD PAGE
//       ========================================================= */}

//       <section className="bg-[#6055A6] text-white">
//         <div className="mx-auto max-w-[1540px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
//           <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
//             <div>
//               <div className="sticky top-28">
//                 <div className="flex items-center gap-3">
//                   <span className="h-px w-10 bg-white/40" />

//                   <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white/60">
//                     What we cover
//                   </span>
//                 </div>

//                 <h2 className="mt-6 max-w-md text-[46px] font-black leading-[0.9] tracking-[-0.06em] sm:text-[65px]">
//                   Pest control
//                   <span className="block text-white/50">
//                     without the
//                   </span>
//                   one-size-fits-all.
//                 </h2>

//                 <p className="mt-7 max-w-sm text-sm leading-8 text-white/60">
//                   Our services cover a range of common pest problems across
//                   residential, rental and commercial properties.
//                 </p>

//                 <Link
//                   to="/services"
//                   className="group mt-9 inline-flex items-center gap-5 rounded-full bg-[#24212D] px-7 py-4 text-[9px] font-black uppercase tracking-[0.18em] text-white transition hover:bg-[#15131A]"
//                 >
//                   View all services
//                   <ArrowRight
//                     size={15}
//                     className="transition-transform group-hover:translate-x-1"
//                   />
//                 </Link>
//               </div>
//             </div>

//             <div className="space-y-3">
//               {serviceGroups.map((group) => (
//                 <Link
//                   key={group.number}
//                   to="/services"
//                   className="group block rounded-[28px] border border-white/15 bg-white/[0.07] p-6 transition duration-500 hover:bg-[#24212D] sm:p-8"
//                 >
//                   <div className="flex items-start gap-5">
//                     <span className="pt-1 text-[9px] font-black tracking-[0.15em] text-white/35">
//                       {group.number}
//                     </span>

//                     <div className="flex-1">
//                       <div className="flex items-start justify-between gap-5">
//                         <div>
//                           <h3 className="text-[30px] font-black leading-none tracking-[-0.045em] sm:text-[38px]">
//                             {group.title}
//                           </h3>

//                           <p className="mt-4 max-w-lg text-sm leading-7 text-white/45">
//                             {group.description}
//                           </p>
//                         </div>

//                         <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 transition duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[#24212D]">
//                           <ArrowUpRight size={17} />
//                         </span>
//                       </div>

//                       <div className="mt-7 flex flex-wrap gap-2">
//                         {group.services.map((service) => (
//                           <span
//                             key={service}
//                             className="rounded-full border border-white/10 bg-black/10 px-3.5 py-2 text-[9px] font-bold text-white/60"
//                           >
//                             {service}
//                           </span>
//                         ))}
//                       </div>
//                     </div>

//                     <span className="hidden self-end text-[9px] font-black text-white/20 sm:block">
//                       {group.count}
//                     </span>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           WHO WE HELP — NEW LARGE CARDS
//       ========================================================= */}

//       <section className="bg-[#F7F6FA]">
//         <div className="mx-auto max-w-[1540px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
//           <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
//             <div>
//               <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
//                 The properties
//               </span>

//               <h2 className="mt-5 max-w-lg text-[45px] font-black leading-[0.91] tracking-[-0.06em] sm:text-[63px]">
//                 One service.
//                 <span className="block text-[#6055A6]">
//                   Different settings.
//                 </span>
//               </h2>

//               <p className="mt-7 max-w-md text-sm leading-8 text-[#77747D]">
//                 Pest activity can occur in almost any type of property.
//                 Our approach considers the environment in which the
//                 problem is taking place.
//               </p>
//             </div>

//             <div className="grid gap-3 sm:grid-cols-2">
//               {propertyTypes.map((item) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={item.number}
//                     className="group relative overflow-hidden rounded-[22px] bg-white p-7 shadow-[0_12px_40px_rgba(36,33,45,.045)] transition duration-400 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(36,33,45,.08)] sm:p-8"
//                   >
//                     <div className="flex items-start justify-between">
//                       <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F7F6FA] text-[#6055A6] transition group-hover:bg-[#6055A6] group-hover:text-white">
//                         <Icon size={18} />
//                       </div>

//                       <span className="text-[9px] font-black text-[#D1CED8]">
//                         {item.number}
//                       </span>
//                     </div>

//                     <h3 className="mt-12 text-lg font-black tracking-[-0.03em]">
//                       {item.title}
//                     </h3>

//                     <div className="mt-5 h-1 w-6 rounded-full bg-[#6055A6] transition-all duration-500 group-hover:w-12" />
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           LOCAL CHELSEA SECTION — NEW DARK MAP-LIKE DESIGN
//       ========================================================= */}

//       <section className="bg-[#15131A] text-white">
//         <div className="mx-auto max-w-[1540px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
//           <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#24212D]">
//             {/* decorative rings */}
//             <div className="absolute -right-28 -top-28 h-[420px] w-[420px] rounded-full border border-white/[0.06]" />
//             <div className="absolute -right-4 top-4 h-[260px] w-[260px] rounded-full border border-white/[0.05]" />
//             <div className="absolute bottom-[-160px] left-[-100px] h-[360px] w-[360px] rounded-full bg-[#6055A6]/20 blur-3xl" />

//             <div className="relative grid gap-12 p-7 sm:p-10 lg:grid-cols-[1.2fr_.8fr] lg:p-14">
//               <div>
//                 <div className="flex items-center gap-3">
//                   <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6055A6]">
//                     <MapPin size={17} />
//                   </span>

//                   <span className="text-[8px] font-black uppercase tracking-[0.28em] text-white/45">
//                     Local base
//                   </span>
//                 </div>

//                 <h2 className="mt-8 max-w-3xl text-[48px] font-black leading-[0.9] tracking-[-0.06em] sm:text-[70px]">
//                   Chelsea
//                   <span className="block text-[#A59ED8]">
//                     is home base.
//                   </span>
//                 </h2>

//                 <p className="mt-7 max-w-xl text-sm leading-8 text-white/50">
//                   {LOCAL.company} is based at {LOCAL.address}. We focus on
//                   Chelsea and nearby London areas, providing direct local
//                   contact for pest control enquiries.
//                 </p>

//                 <div className="mt-9 flex flex-wrap gap-2">
//                   {[
//                     "Chelsea",
//                     "SW3",
//                     "Nearby London areas",
//                     "Residential",
//                     "Commercial",
//                   ].map((item) => (
//                     <span
//                       key={item}
//                       className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.08em] text-white/55"
//                     >
//                       {item}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               <div className="flex flex-col justify-end">
//                 <div className="rounded-[26px] border border-white/10 bg-black/10 p-6 sm:p-8">
//                   <span className="text-[8px] font-black uppercase tracking-[0.25em] text-[#A59ED8]">
//                     Contact
//                   </span>

//                   <div className="mt-7 space-y-6">
//                     <div>
//                       <span className="block text-[7px] font-black uppercase tracking-[0.22em] text-white/25">
//                         Address
//                       </span>

//                       <p className="mt-2 text-sm font-bold leading-6 text-white/75">
//                         {LOCAL.address}
//                       </p>
//                     </div>

//                     <div className="border-t border-white/10 pt-6">
//                       <span className="block text-[7px] font-black uppercase tracking-[0.22em] text-white/25">
//                         Phone
//                       </span>

//                       <a
//                         href={`tel:${LOCAL.phoneTel}`}
//                         className="mt-2 block text-2xl font-black tracking-[-0.035em] text-white transition hover:text-[#A59ED8]"
//                       >
//                         {LOCAL.phoneDisplay}
//                       </a>
//                     </div>
//                   </div>
//                 </div>

//                 <Link
//                   to="/contact-us"
//                   className="group mt-3 flex items-center justify-between rounded-[22px] bg-[#6055A6] px-6 py-5 transition hover:bg-[#51478F]"
//                 >
//                   <span className="text-[9px] font-black uppercase tracking-[0.18em]">
//                     Request a callback
//                   </span>

//                   <ArrowUpRight
//                     size={17}
//                     className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
//                   />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           FINAL CTA — NEW EDITORIAL BLOCK
//       ========================================================= */}

//       <section className="bg-[#F7F6FA]">
//         <div className="mx-auto max-w-[1540px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
//           <div className="grid overflow-hidden rounded-[34px] bg-white shadow-[0_20px_70px_rgba(36,33,45,.07)] lg:grid-cols-[1.25fr_.75fr]">
//             <div className="p-7 sm:p-10 lg:p-14">
//               <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#6055A6]">
//                 Have a pest problem?
//               </span>

//               <h2 className="mt-6 max-w-3xl text-[46px] font-black leading-[0.9] tracking-[-0.06em] sm:text-[65px]">
//                 Tell us what
//                 <span className="text-[#6055A6]"> you've noticed.</span>
//               </h2>

//               <p className="mt-7 max-w-xl text-sm leading-8 text-[#77747D]">
//                 Share what you have seen, where the activity is happening
//                 and the type of property involved. We can then discuss
//                 the next step.
//               </p>

//               <div className="mt-9 flex flex-col gap-3 sm:flex-row">
//                 <Link
//                   to="/contact-us"
//                   className="group inline-flex min-h-[56px] items-center justify-between gap-10 rounded-full bg-[#6055A6] px-6 text-[9px] font-black uppercase tracking-[0.18em] text-white transition hover:bg-[#51478F]"
//                 >
//                   Contact SuperGuard
//                   <ArrowRight
//                     size={15}
//                     className="transition-transform group-hover:translate-x-1"
//                   />
//                 </Link>

//                 <Link
//                   to="/services"
//                   className="group inline-flex min-h-[56px] items-center justify-between gap-8 rounded-full border border-[#E0DCE7] px-6 text-[9px] font-black uppercase tracking-[0.18em] text-[#24212D] transition hover:border-[#6055A6] hover:text-[#6055A6]"
//                 >
//                   Explore services
//                   <ArrowUpRight
//                     size={14}
//                     className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
//                   />
//                 </Link>
//               </div>
//             </div>

//             <div className="relative min-h-[340px] overflow-hidden bg-[#6055A6] lg:min-h-full">
//               <img
//                 src="/images/mission-superguard.webp"
//                 alt={`${LOCAL.company} pest control`}
//                 className="absolute inset-0 h-full w-full object-cover opacity-65 mix-blend-multiply"
//                 loading="lazy"
//               />

//               <div className="absolute inset-0 bg-[#6055A6]/65" />

//               <div className="absolute inset-0 flex flex-col justify-between p-7 sm:p-10 lg:p-12">
//                 <div className="flex justify-end">
//                   <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10">
//                     <Bug size={21} />
//                   </span>
//                 </div>

//                 <div>
//                   <span className="text-[8px] font-black uppercase tracking-[0.25em] text-white/50">
//                     SuperGuard Chelsea
//                   </span>

//                   <p className="mt-3 max-w-xs text-2xl font-black leading-[0.98] tracking-[-0.04em] text-white">
//                     Practical pest control for local properties.
//                   </p>

//                   <a
//                     href={`tel:${LOCAL.phoneTel}`}
//                     className="mt-7 inline-flex items-center gap-3 text-sm font-black text-white transition hover:text-white/60"
//                   >
//                     <Phone size={15} />
//                     {LOCAL.phoneDisplay}
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           CONTACT FOOT STRIP
//       ========================================================= */}

//       <section className="border-t border-[#E7E4ED] bg-white">
//         <div className="mx-auto max-w-[1540px] px-5 py-8 sm:px-8 lg:px-12">
//           <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
//             <div className="flex items-center gap-3">
//               <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7F6FA] text-[#6055A6]">
//                 <MapPin size={16} />
//               </span>

//               <div>
//                 <span className="block text-[7px] font-black uppercase tracking-[0.25em] text-[#AAA6B1]">
//                   Local base
//                 </span>

//                 <span className="mt-1 block text-sm font-bold text-[#24212D]">
//                   {LOCAL.address}
//                 </span>
//               </div>
//             </div>

//             <a
//               href={`tel:${LOCAL.phoneTel}`}
//               className="group flex items-center gap-3 text-sm font-black text-[#6055A6]"
//             >
//               <span>{LOCAL.phoneDisplay}</span>

//               <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F7F6FA] transition group-hover:bg-[#6055A6] group-hover:text-white">
//                 <Phone size={13} />
//               </span>
//             </a>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default About;

















// import React from "react";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Check,
//   MapPin,
//   Phone,
//   ShieldCheck,
//   Search,
//   Target,
//   Wrench,
//   Leaf,
//   Home,
//   Building2,
//   Bug,
//   Crosshair,
//   Eye,
//   Route,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const About = () => {
//   const LOCAL = {
//     company: "SuperGuard Services Woolwich",
//     shortName: "SuperGuard Woolwich",
//     area: "Woolwich",
//     city: "London",
//     postcode: "SE18 3QJ",
//     streetAddress: "41 Ripon Rd",
//     fullAddress: "41 Ripon Rd, London SE18 3QJ, United Kingdom",
//     phoneDisplay: "07356 230776",
//     phoneTel: "+447356230776",
//   };

//   const principles = [
//     {
//       number: "01",
//       icon: Eye,
//       eyebrow: "Look closer",
//       title: "The first sign is only the beginning.",
//       text: "Droppings, damage, insects, scratching sounds and nests can all tell part of the story. We look at the wider picture before deciding what the property needs.",
//     },
//     {
//       number: "02",
//       icon: Crosshair,
//       eyebrow: "Locate",
//       title: "We focus on where activity starts.",
//       text: "Pests rarely appear without a reason. Access points, harbourage and conditions around the property can help explain why activity is happening.",
//     },
//     {
//       number: "03",
//       icon: Wrench,
//       eyebrow: "Act",
//       title: "The response should fit the problem.",
//       text: "A home with mice does not require the same approach as a commercial property with cockroaches. We consider the pest and the environment together.",
//     },
//     {
//       number: "04",
//       icon: Route,
//       eyebrow: "Move forward",
//       title: "The goal is more than today's visit.",
//       text: "Where appropriate, we explain practical steps that can help reduce access, harbourage and the conditions that may encourage future activity.",
//     },
//   ];

//   const serviceGroups = [
//     {
//       number: "01",
//       title: "Insect control",
//       count: "08",
//       description:
//         "Support for common insect problems affecting homes, flats, rental properties and workplaces.",
//       services: [
//         "Ant Control",
//         "Bed Bug Treatment",
//         "Carpet Moth Treatment",
//         "Carpet Beetle Control",
//         "Cockroach Control",
//         "Flea Treatment",
//         "Wasp Nest Control",
//         "Bee Activity Support",
//       ],
//     },
//     {
//       number: "02",
//       title: "Rodent control",
//       count: "02",
//       description:
//         "Focused control for rats and mice, with attention to activity, access and property conditions.",
//       services: [
//         "Rats & Mice Control",
//         "Squirrel Control",
//       ],
//     },
//     {
//       number: "03",
//       title: "Prevention",
//       count: "02",
//       description:
//         "Practical measures designed to help manage access and reduce opportunities for recurring pest activity.",
//       services: [
//         "Bird Control",
//         "Property Proofing",
//       ],
//     },
//   ];

//   const propertyTypes = [
//     {
//       icon: Home,
//       number: "01",
//       title: "Homes & flats",
//       text: "Everyday residential pest problems.",
//     },
//     {
//       icon: Building2,
//       number: "02",
//       title: "Rental properties",
//       text: "Practical support for rented spaces.",
//     },
//     {
//       icon: Home,
//       number: "03",
//       title: "Landlord properties",
//       text: "Property-focused pest management.",
//     },
//     {
//       icon: Building2,
//       number: "04",
//       title: "Offices",
//       text: "Workplaces where pests disrupt the environment.",
//     },
//     {
//       icon: Building2,
//       number: "05",
//       title: "Retail premises",
//       text: "Support for customer-facing properties.",
//     },
//     {
//       icon: Building2,
//       number: "06",
//       title: "Commercial buildings",
//       text: "Approaches suited to larger environments.",
//     },
//   ];

//   return (
//     <main className="mt-20 overflow-hidden bg-[#F3F1F6] text-[#17151B]">

//       {/* =========================================================
//           HERO — NEW SPLIT / OFFSET COMPOSITION
//       ========================================================= */}

//       <section className="relative bg-[#F3F1F6]">

//         <div className="mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-12">

//           <div className="relative grid min-h-[760px] lg:grid-cols-[.78fr_1.22fr]">

//             {/* LEFT CONTENT */}

//             <div className="relative z-10 flex flex-col justify-between py-10 lg:py-16">

//               <div className="flex items-center gap-3">
//                 <span className="h-2.5 w-2.5 rounded-full bg-[#6055A6]" />

//                 <span className="text-[8px] font-black uppercase tracking-[.3em] text-[#77727E]">
//                   {LOCAL.company}
//                 </span>
//               </div>

//               <div className="max-w-2xl py-16 lg:py-20">

//                 <div className="mb-7 flex items-center gap-3">

//                   <span className="text-[8px] font-black uppercase tracking-[.25em] text-[#6055A6]">
//                     About SuperGuard
//                   </span>

//                   <span className="h-px w-12 bg-[#6055A6]" />

//                 </div>

//                 <h1 className="text-[clamp(3.5rem,7vw,7.4rem)] font-black leading-[.82] tracking-[-.075em]">
//                   We deal with
//                   <span className="block text-[#6055A6]">
//                     what shouldn't
//                   </span>
//                   be there.
//                 </h1>

//                 <p className="mt-9 max-w-xl text-sm leading-7 text-[#706C76] sm:text-base sm:leading-8">
//                   SuperGuard Services Woolwich provides practical pest-control
//                   support for homes, landlords, businesses and commercial
//                   properties across Woolwich and nearby London areas.
//                 </p>

//                 <div className="mt-9 flex flex-wrap gap-3">

//                   <Link
//                     to="/contact-us"
//                     className="group inline-flex items-center gap-4 bg-[#6055A6] px-6 py-4 text-[9px] font-black uppercase tracking-[.18em] text-white transition hover:bg-[#4F468D]"
//                   >
//                     Talk to SuperGuard
//                     <ArrowRight
//                       size={15}
//                       className="transition-transform group-hover:translate-x-1"
//                     />
//                   </Link>

//                   <a
//                     href={`tel:${LOCAL.phoneTel}`}
//                     className="inline-flex items-center gap-3 border border-[#D8D4DF] bg-white px-6 py-4 text-[9px] font-black uppercase tracking-[.18em] text-[#24212A] transition hover:border-[#6055A6] hover:text-[#6055A6]"
//                   >
//                     <Phone size={14} />
//                     {LOCAL.phoneDisplay}
//                   </a>

//                 </div>

//               </div>

//               <div className="grid grid-cols-2 border-t border-[#DCD8E3] sm:grid-cols-4">

//                 {[
//                   "Woolwich",
//                   "SE18",
//                   "London",
//                   "Local service",
//                 ].map((item) => (
//                   <div
//                     key={item}
//                     className="border-b border-[#DCD8E3] py-4 text-[8px] font-black uppercase tracking-[.18em] text-[#8C8793] sm:border-b-0 sm:border-r sm:px-4 first:sm:pl-0 last:sm:border-r-0"
//                   >
//                     {item}
//                   </div>
//                 ))}

//               </div>

//             </div>

//             {/* RIGHT VISUAL */}

//             <div className="relative min-h-[600px] lg:min-h-0">

//               <div className="absolute inset-y-0 right-[-20vw] left-0 overflow-hidden bg-[#6055A6] lg:left-10">

//                 {/* decorative lines */}

//                 <div className="absolute inset-0 opacity-20">
//                   <div className="absolute left-[12%] top-0 h-full w-px bg-white" />
//                   <div className="absolute left-[38%] top-0 h-full w-px bg-white" />
//                   <div className="absolute left-[64%] top-0 h-full w-px bg-white" />
//                   <div className="absolute left-[86%] top-0 h-full w-px bg-white" />
//                 </div>

//                 <div className="absolute right-[-120px] top-[-120px] h-[430px] w-[430px] rounded-full border border-white/15" />

//                 <div className="absolute bottom-[-160px] left-[-100px] h-[400px] w-[400px] rounded-full border border-white/10" />

//                 {/* IMAGE */}

//                 <div className="absolute bottom-8 left-8 right-8 top-8 overflow-hidden sm:bottom-12 sm:left-12 sm:right-12 sm:top-12">

//                   <img
//                     src="/images/about-story.webp"
//                     alt={`${LOCAL.company} pest control`}
//                     className="h-full w-full object-cover"
//                     loading="eager"
//                     fetchPriority="high"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-r from-[#15131A]/55 via-transparent to-[#6055A6]/10" />

//                   <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-5 sm:bottom-8 sm:left-8 sm:right-8">

//                     <div className="max-w-sm border-l-2 border-white pl-4">

//                       <span className="text-[7px] font-black uppercase tracking-[.25em] text-white/55">
//                         Our approach
//                       </span>

//                       <p className="mt-2 text-lg font-black leading-tight text-white sm:text-2xl">
//                         Understand first.
//                         <br />
//                         Respond properly.
//                       </p>

//                     </div>

//                     <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-white text-[#6055A6]">
//                       <ArrowUpRight size={18} />
//                     </span>

//                   </div>

//                 </div>

//                 {/* floating postcode */}

//                 <div className="absolute right-4 top-4 bg-[#15131A] px-4 py-3 text-white sm:right-7 sm:top-7">

//                   <span className="block text-[7px] font-black uppercase tracking-[.2em] text-white/35">
//                     Local base
//                   </span>

//                   <span className="mt-1 block text-xs font-black">
//                     {LOCAL.postcode}
//                   </span>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* =========================================================
//           INTRO — HUGE NUMBER + STATEMENT
//       ========================================================= */}

//       <section className="bg-white">

//         <div className="mx-auto max-w-[1540px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

//           <div className="grid gap-12 lg:grid-cols-[180px_1fr]">

//             <div>

//               <span className="text-[92px] font-black leading-none tracking-[-.09em] text-[#6055A6]/15">
//                 01
//               </span>

//               <div className="mt-5 h-px w-14 bg-[#6055A6]" />

//               <p className="mt-5 max-w-[150px] text-[8px] font-black uppercase leading-5 tracking-[.2em] text-[#8A8590]">
//                 Why we work differently
//               </p>

//             </div>

//             <div>

//               <h2 className="max-w-6xl text-[clamp(2.7rem,5.4vw,6rem)] font-black leading-[.9] tracking-[-.07em]">
//                 Pest control should begin with a{" "}
//                 <span className="text-[#6055A6]">
//                   better understanding
//                 </span>
//                 of the problem.
//               </h2>

//               <div className="mt-10 grid gap-8 border-t border-[#E4E0E8] pt-8 sm:grid-cols-2">

//                 <p className="max-w-xl text-sm leading-8 text-[#77727F]">
//                   A pest problem can look simple from the outside. But the
//                   visible pest is often only one part of what is happening
//                   inside or around a property.
//                 </p>

//                 <p className="max-w-xl text-sm leading-8 text-[#77727F]">
//                   At SuperGuard Woolwich, we focus on the signs, the setting
//                   and the circumstances so the response can be practical
//                   rather than automatic.
//                 </p>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* =========================================================
//           PRINCIPLES — VERTICAL STACK
//       ========================================================= */}

//       <section className="bg-[#17151B] text-white">

//         <div className="mx-auto max-w-[1540px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

//           <div className="grid gap-14 lg:grid-cols-[.55fr_1.45fr]">

//             <div>

//               <span className="text-[8px] font-black uppercase tracking-[.3em] text-[#A9A2D8]">
//                 The SuperGuard method
//               </span>

//               <h2 className="mt-6 max-w-md text-[clamp(2.7rem,4.8vw,5rem)] font-black leading-[.88] tracking-[-.065em]">
//                 Four stages.
//                 <span className="block text-white/35">
//                   One clear purpose.
//                 </span>
//               </h2>

//               <p className="mt-7 max-w-sm text-sm leading-7 text-white/40">
//                 We keep the thinking behind pest control simple: understand
//                 what is happening, deal with it appropriately and consider
//                 what can help afterwards.
//               </p>

//               <div className="mt-10 hidden lg:block">

//                 <div className="flex items-center gap-3 text-[8px] font-black uppercase tracking-[.2em] text-white/25">

//                   <span className="h-px w-8 bg-[#6055A6]" />

//                   Woolwich / London

//                 </div>

//               </div>

//             </div>

//             <div className="border-t border-white/10">

//               {principles.map((item, index) => {

//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={item.number}
//                     className="group grid gap-5 border-b border-white/10 py-8 sm:grid-cols-[70px_55px_1fr] sm:items-start"
//                   >

//                     <span className="text-2xl font-black tracking-[-.04em] text-white/20">
//                       {item.number}
//                     </span>

//                     <div className="flex h-11 w-11 items-center justify-center border border-white/10 text-[#A9A2D8] transition group-hover:border-[#A9A2D8] group-hover:bg-[#6055A6] group-hover:text-white">
//                       <Icon size={18} />
//                     </div>

//                     <div>

//                       <span className="text-[8px] font-black uppercase tracking-[.22em] text-[#A9A2D8]">
//                         {item.eyebrow}
//                       </span>

//                       <h3 className="mt-2 max-w-xl text-[25px] font-black leading-[1] tracking-[-.035em] sm:text-[31px]">
//                         {item.title}
//                       </h3>

//                       <p className="mt-4 max-w-2xl text-sm leading-7 text-white/40">
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

//       {/* =========================================================
//           IMAGE STORY — HORIZONTAL FILM STRIP
//       ========================================================= */}

//       <section className="bg-[#E9E6EF]">

//         <div className="mx-auto max-w-[1540px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

//           <div className="relative">

//             <div className="grid gap-0 lg:grid-cols-[1.35fr_.65fr]">

//               {/* MAIN IMAGE */}

//               <div className="relative h-[480px] overflow-hidden sm:h-[600px] lg:h-[690px]">

//                 <img
//                   src="/images/about-superguard-banner.webp"
//                   alt={`${LOCAL.company} local pest control`}
//                   className="h-full w-full object-contain"
//                   loading="lazy"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-[#15131A]/70 via-transparent to-transparent" />

//                 <div className="absolute left-6 top-6 sm:left-10 sm:top-10">

//                   <span className="inline-flex items-center gap-2 bg-white px-4 py-3 text-[8px] font-black uppercase tracking-[.18em] text-[#24212D]">

//                     <MapPin size={12} className="text-[#6055A6]" />

//                     Woolwich, London

//                   </span>

//                 </div>

//                 <div className="absolute bottom-6 left-6 max-w-xl sm:bottom-10 sm:left-10">

//                   <span className="text-[8px] font-black uppercase tracking-[.25em] text-white/50">
//                     Local perspective
//                   </span>

//                   <p className="mt-3 text-2xl font-black leading-[.95] tracking-[-.04em] text-white sm:text-4xl">
//                     Every property has its own conditions.
//                   </p>

//                 </div>

//               </div>

//               {/* SIDE PANEL */}

//               <div className="relative flex min-h-[390px] flex-col justify-between bg-[#6055A6] p-7 text-white sm:p-10 lg:min-h-[690px] lg:p-12">

//                 <div>

//                   <span className="text-[8px] font-black uppercase tracking-[.28em] text-white/45">
//                     02 / The property
//                   </span>

//                   <h2 className="mt-7 text-[clamp(2.5rem,4vw,4.5rem)] font-black leading-[.86] tracking-[-.065em]">
//                     Context
//                     <span className="block text-white/40">
//                       matters.
//                     </span>
//                   </h2>

//                 </div>

//                 <div>

//                   <p className="text-sm leading-7 text-white/60">
//                     A flat, family home, rental property or workplace can all
//                     present a different pest-control challenge. The setting
//                     matters when deciding how to respond.
//                   </p>

//                   <div className="mt-8 border-t border-white/15 pt-6">

//                     <div className="flex items-center justify-between">

//                       <span className="text-[8px] font-black uppercase tracking-[.2em] text-white/35">
//                         Local service
//                       </span>

//                       <span className="text-sm font-black">
//                         {LOCAL.postcode}
//                       </span>

//                     </div>

//                   </div>

//                 </div>

//               </div>

//             </div>

//             {/* OFFSET IMAGE */}

//             <div className="absolute -bottom-20 right-[8%] hidden h-40 w-64 overflow-hidden border-[8px] border-[#E9E6EF] bg-[#6055A6] shadow-2xl xl:block">

//               <img
//                 src="/images/mission-superguard.webp"
//                 alt={`${LOCAL.company} service approach`}
//                 className="h-full w-full object-cover"
//                 loading="lazy"
//               />

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* =========================================================
//           SERVICES — NEW LARGE TYPOGRAPHIC ACCORDION LOOK
//       ========================================================= */}

//       <section className="bg-white">

//         <div className="mx-auto max-w-[1540px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

//           <div className="grid gap-12 lg:grid-cols-[.6fr_1.4fr]">

//             <div>

//               <span className="text-[8px] font-black uppercase tracking-[.3em] text-[#6055A6]">
//                 03 / What we cover
//               </span>

//               <h2 className="mt-6 max-w-md text-[clamp(2.8rem,4.8vw,5.2rem)] font-black leading-[.87] tracking-[-.07em]">
//                 Different pests.
//                 <span className="block text-[#6055A6]">
//                   Different responses.
//                 </span>
//               </h2>

//               <p className="mt-7 max-w-sm text-sm leading-7 text-[#77727F]">
//                 Our wider service range allows us to support common pest
//                 problems across residential and commercial settings.
//               </p>

//               <Link
//                 to="/services"
//                 className="group mt-8 inline-flex items-center gap-4 border-b border-[#6055A6] pb-3 text-[9px] font-black uppercase tracking-[.18em] text-[#6055A6]"
//               >
//                 Explore services
//                 <ArrowRight
//                   size={14}
//                   className="transition-transform group-hover:translate-x-1"
//                 />
//               </Link>

//             </div>

//             <div className="border-t-2 border-[#17151B]">

//               {serviceGroups.map((group, index) => (

//                 <Link
//                   key={group.number}
//                   to="/services"
//                   className="group block border-b border-[#DDD9E3] py-8 transition hover:bg-[#F5F3F8] sm:py-10"
//                 >

//                   <div className="grid gap-6 sm:grid-cols-[55px_1fr_auto] sm:items-start">

//                     <span className="text-[9px] font-black tracking-[.15em] text-[#6055A6]">
//                       {group.number}
//                     </span>

//                     <div>

//                       <div className="flex items-start justify-between gap-5">

//                         <div>

//                           <h3 className="text-[clamp(2rem,3.3vw,3.3rem)] font-black leading-none tracking-[-.055em]">
//                             {group.title}
//                           </h3>

//                           <p className="mt-4 max-w-xl text-sm leading-7 text-[#77727F]">
//                             {group.description}
//                           </p>

//                         </div>

//                         <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F1EEF5] text-[#6055A6] transition group-hover:bg-[#6055A6] group-hover:text-white">

//                           <ArrowUpRight size={17} />

//                         </span>

//                       </div>

//                       <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">

//                         {group.services.map((service) => (

//                           <span
//                             key={service}
//                             className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.08em] text-[#6F6A75]"
//                           >
//                             <span className="h-1.5 w-1.5 rounded-full bg-[#6055A6]" />
//                             {service}
//                           </span>

//                         ))}

//                       </div>

//                     </div>

//                     <span className="hidden text-[40px] font-black leading-none tracking-[-.07em] text-[#E2DFE8] sm:block">
//                       {group.count}
//                     </span>

//                   </div>

//                 </Link>

//               ))}

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* =========================================================
//           WHO WE HELP — DARK OFFSET CARDS
//       ========================================================= */}

//       <section className="bg-[#F3F1F6]">

//         <div className="mx-auto max-w-[1540px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

//           <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr]">

//             <div className="relative">

//               <div className="sticky top-28">

//                 <span className="text-[8px] font-black uppercase tracking-[.3em] text-[#6055A6]">
//                   04 / Property types
//                 </span>

//                 <h2 className="mt-6 max-w-md text-[clamp(2.8rem,4.7vw,5rem)] font-black leading-[.87] tracking-[-.065em]">
//                   Pest problems
//                   <span className="block text-[#6055A6]">
//                     don't choose
//                   </span>
//                   the property.
//                 </h2>

//                 <p className="mt-7 max-w-sm text-sm leading-7 text-[#77727F]">
//                   From a single flat to a commercial building, the environment
//                   around a pest problem can influence how it should be
//                   approached.
//                 </p>

//               </div>

//             </div>

//             <div className="grid gap-3 sm:grid-cols-2">

//               {propertyTypes.map((item, index) => {

//                 const Icon = item.icon;

//                 return (

//                   <div
//                     key={item.number}
//                     className={`group relative min-h-[230px] overflow-hidden bg-white p-7 transition duration-500 hover:-translate-y-1 sm:p-8 ${
//                       index % 3 === 1
//                         ? "sm:translate-y-8"
//                         : ""
//                     }`}
//                   >

//                     <span className="absolute right-5 top-5 text-[9px] font-black text-[#D7D3DD]">
//                       {item.number}
//                     </span>

//                     <div className="flex h-12 w-12 items-center justify-center bg-[#F3F1F6] text-[#6055A6] transition group-hover:bg-[#6055A6] group-hover:text-white">

//                       <Icon size={19} />

//                     </div>

//                     <div className="mt-14">

//                       <h3 className="text-xl font-black tracking-[-.03em]">
//                         {item.title}
//                       </h3>

//                       <p className="mt-2 max-w-xs text-xs leading-6 text-[#85808B]">
//                         {item.text}
//                       </p>

//                     </div>

//                     <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#6055A6] transition-all duration-500 group-hover:w-full" />

//                   </div>

//                 );

//               })}

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* =========================================================
//           LOCAL WOOLWICH — MAP GRID VISUAL
//       ========================================================= */}

//       <section className="bg-[#17151B] text-white">

//         <div className="mx-auto max-w-[1540px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

//           <div className="grid gap-0 lg:grid-cols-[1fr_1fr]">

//             {/* MAP STYLE AREA */}

//             <div className="relative min-h-[520px] overflow-hidden border border-white/10 bg-[#211E27]">

//               <div className="absolute inset-0">

//                 {/* grid */}

//                 <div
//                   className="absolute inset-0 opacity-[.08]"
//                   style={{
//                     backgroundImage:
//                       "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
//                     backgroundSize: "70px 70px",
//                   }}
//                 />

//                 {/* rings */}

//                 <div className="absolute left-[30%] top-[35%] h-52 w-52 rounded-full border border-white/10" />

//                 <div className="absolute left-[30%] top-[35%] h-36 w-36 rounded-full border border-white/10" />

//                 <div className="absolute left-[30%] top-[35%] h-20 w-20 rounded-full border border-white/10" />

//                 {/* route */}

//                 <div className="absolute left-[10%] top-[62%] h-px w-[78%] rotate-[-18deg] bg-[#6055A6]" />

//                 <div className="absolute left-[18%] top-[43%] h-px w-[60%] rotate-[28deg] bg-white/10" />

//                 {/* location marker */}

//                 <div className="absolute left-[calc(30%+32px)] top-[calc(35%+32px)] flex h-14 w-14 items-center justify-center rounded-full bg-[#6055A6] shadow-[0_0_0_12px_rgba(96,85,166,.15)]">

//                   <MapPin size={20} />

//                 </div>

//               </div>

//               <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">

//                 <span className="text-[8px] font-black uppercase tracking-[.25em] text-white/30">
//                   Local base
//                 </span>

//                 <p className="mt-2 text-3xl font-black tracking-[-.05em]">
//                   Woolwich
//                 </p>

//                 <p className="mt-1 text-xs font-bold uppercase tracking-[.15em] text-white/30">
//                   London · {LOCAL.postcode}
//                 </p>

//               </div>

//             </div>

//             {/* CONTACT INFO */}

//             <div className="flex flex-col justify-between bg-[#6055A6] p-7 sm:p-10 lg:p-14">

//               <div>

//                 <span className="text-[8px] font-black uppercase tracking-[.3em] text-white/45">
//                   Local connection
//                 </span>

//                 <h2 className="mt-6 max-w-lg text-[clamp(2.7rem,4.5vw,5rem)] font-black leading-[.88] tracking-[-.065em]">
//                   Close to the problem.
//                   <span className="block text-white/40">
//                     Close to home.
//                   </span>
//                 </h2>

//                 <p className="mt-7 max-w-lg text-sm leading-8 text-white/60">
//                   {LOCAL.company} is based in Woolwich and provides pest
//                   control support across the local area and nearby parts of
//                   London.
//                 </p>

//               </div>

//               <div className="mt-12">

//                 <div className="border-t border-white/15">

//                   <div className="grid gap-6 border-b border-white/15 py-6 sm:grid-cols-2">

//                     <div>

//                       <span className="block text-[7px] font-black uppercase tracking-[.22em] text-white/35">
//                         Address
//                       </span>

//                       <p className="mt-2 text-sm font-bold leading-6 text-white/85">
//                         {LOCAL.fullAddress}
//                       </p>

//                     </div>

//                     <div>

//                       <span className="block text-[7px] font-black uppercase tracking-[.22em] text-white/35">
//                         Area
//                       </span>

//                       <p className="mt-2 text-sm font-bold text-white/85">
//                         {LOCAL.area}, {LOCAL.city}
//                       </p>

//                     </div>

//                   </div>

//                   <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">

//                     <a
//                       href={`tel:${LOCAL.phoneTel}`}
//                       className="flex items-center gap-3 text-xl font-black tracking-[-.03em] text-white transition hover:text-white/60"
//                     >
//                       <Phone size={17} />
//                       {LOCAL.phoneDisplay}
//                     </a>

//                     <Link
//                       to="/contact-us"
//                       className="group inline-flex items-center gap-3 text-[9px] font-black uppercase tracking-[.18em] text-white"
//                     >
//                       Contact us

//                       <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#6055A6] transition group-hover:bg-[#17151B] group-hover:text-white">

//                         <ArrowUpRight size={14} />

//                       </span>

//                     </Link>

//                   </div>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* =========================================================
//           FINAL CTA — NEW OVERLAPPING DESIGN
//       ========================================================= */}

//       <section className="bg-white">

//         <div className="mx-auto max-w-[1540px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

//           <div className="relative overflow-hidden bg-[#F3F1F6]">

//             <div className="absolute right-[-100px] top-[-160px] h-[420px] w-[420px] rounded-full border border-[#6055A6]/10" />

//             <div className="absolute bottom-[-180px] left-[40%] h-[400px] w-[400px] rounded-full bg-[#6055A6]/[.04]" />

//             <div className="relative grid gap-12 px-7 py-10 sm:px-10 sm:py-14 lg:grid-cols-[1fr_350px] lg:px-14 lg:py-16">

//               <div>

//                 <span className="text-[8px] font-black uppercase tracking-[.3em] text-[#6055A6]">
//                   Ready to talk?
//                 </span>

//                 <h2 className="mt-6 max-w-4xl text-[clamp(3rem,5.5vw,6rem)] font-black leading-[.85] tracking-[-.07em]">
//                   Tell us what
//                   <span className="block text-[#6055A6]">
//                     you've noticed.
//                   </span>
//                 </h2>

//                 <p className="mt-7 max-w-xl text-sm leading-8 text-[#77727F]">
//                   You don't need to know exactly which pest you're dealing
//                   with. Tell us what you've seen and where you've noticed it,
//                   and we can discuss the next practical step.
//                 </p>

//                 <div className="mt-9 flex flex-wrap gap-3">

//                   <Link
//                     to="/contact-us"
//                     className="group inline-flex items-center gap-5 bg-[#6055A6] px-7 py-4 text-[9px] font-black uppercase tracking-[.18em] text-white transition hover:bg-[#4F468D]"
//                   >
//                     Contact SuperGuard

//                     <ArrowRight
//                       size={15}
//                       className="transition-transform group-hover:translate-x-1"
//                     />

//                   </Link>

//                   <a
//                     href={`tel:${LOCAL.phoneTel}`}
//                     className="inline-flex items-center gap-3 border border-[#D8D4DF] bg-white px-6 py-4 text-[9px] font-black uppercase tracking-[.18em] text-[#24212D] transition hover:border-[#6055A6] hover:text-[#6055A6]"
//                   >
//                     <Phone size={14} />
//                     {LOCAL.phoneDisplay}
//                   </a>

//                 </div>

//               </div>

//               <div className="relative flex items-end">

//                 <div className="w-full bg-[#17151B] p-6 text-white sm:p-8">

//                   <div className="flex items-center justify-between">

//                     <span className="text-[8px] font-black uppercase tracking-[.25em] text-white/30">
//                       SuperGuard Woolwich
//                     </span>

//                     <Bug size={17} className="text-[#A9A2D8]" />

//                   </div>

//                   <div className="mt-16">

//                     <span className="text-[7px] font-black uppercase tracking-[.2em] text-white/25">
//                       Local service
//                     </span>

//                     <p className="mt-2 text-2xl font-black leading-none tracking-[-.04em]">
//                       Woolwich
//                     </p>

//                     <p className="mt-1 text-xs font-bold text-white/35">
//                       London {LOCAL.postcode}
//                     </p>

//                   </div>

//                   <div className="mt-8 border-t border-white/10 pt-5">

//                     <a
//                       href={`tel:${LOCAL.phoneTel}`}
//                       className="flex items-center justify-between text-sm font-black"
//                     >

//                       <span>{LOCAL.phoneDisplay}</span>

//                       <ArrowUpRight size={15} />

//                     </a>

//                   </div>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* =========================================================
//           BOTTOM INFORMATION BAR
//       ========================================================= */}

//       <section className="border-t border-[#DDD9E3] bg-[#F3F1F6]">

//         <div className="mx-auto max-w-[1540px] px-5 py-7 sm:px-8 lg:px-12">

//           <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

//             <div className="flex items-start gap-3">

//               <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-white text-[#6055A6]">

//                 <MapPin size={15} />

//               </span>

//               <div>

//                 <span className="block text-[7px] font-black uppercase tracking-[.25em] text-[#9A95A0]">
//                   Local base
//                 </span>

//                 <span className="mt-1 block text-xs font-bold text-[#29262F]">
//                   {LOCAL.fullAddress}
//                 </span>

//               </div>

//             </div>

//             <div className="flex flex-wrap items-center gap-5">

//               <a
//                 href={`tel:${LOCAL.phoneTel}`}
//                 className="flex items-center gap-2 text-sm font-black text-[#6055A6]"
//               >
//                 <Phone size={14} />
//                 {LOCAL.phoneDisplay}
//               </a>

//               <Link
//                 to="/contact-us"
//                 className="group flex items-center gap-2 text-[8px] font-black uppercase tracking-[.16em] text-[#29262F] transition hover:text-[#6055A6]"
//               >
//                 Get in touch

//                 <ArrowUpRight
//                   size={13}
//                   className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                 />

//               </Link>

//             </div>

//           </div>

//         </div>

//       </section>

//     </main>
//   );
// };

// export default About;





















// import React from "react";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   MapPin,
//   Phone,
//   ShieldCheck,
//   Wrench,
//   Home,
//   Building2,
//   Bug,
//   Crosshair,
//   Eye,
//   Route,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const About = () => {
//   const LOCAL = {
//     company: "SuperGuard Pest Control Services Chessington",
//     shortName: "SuperGuard Chessington",
//     area: "Chessington",
//     city: "Surrey",
//     postcode: "KT9 1AY",
//     streetAddress: "95 Rhodrons Ave",
//     fullAddress: "95 Rhodrons Ave, Chessington KT9 1AY, United Kingdom",
//     phoneDisplay: "+44 7356 234726",
//     phoneTel: "+447356234726",
//   };

//   const principles = [
//     {
//       number: "01",
//       icon: Eye,
//       eyebrow: "Look closer",
//       title: "The first sign is only the beginning.",
//       text: "Droppings, damage, insects, scratching sounds and nests can all tell part of the story. We look at the wider picture before deciding what the property needs.",
//     },
//     {
//       number: "02",
//       icon: Crosshair,
//       eyebrow: "Locate",
//       title: "We focus on where activity starts.",
//       text: "Pests rarely appear without a reason. Access points, harbourage and conditions around the property can help explain why activity is happening.",
//     },
//     {
//       number: "03",
//       icon: Wrench,
//       eyebrow: "Act",
//       title: "The response should fit the problem.",
//       text: "A home with mice does not require the same approach as a commercial property with cockroaches. We consider the pest and the environment together.",
//     },
//     {
//       number: "04",
//       icon: Route,
//       eyebrow: "Move forward",
//       title: "The goal is more than today's visit.",
//       text: "Where appropriate, we explain practical steps that can help reduce access, harbourage and the conditions that may encourage future activity.",
//     },
//   ];

//   const serviceGroups = [
//     {
//       number: "01",
//       title: "Insect control",
//       count: "08",
//       description: "Support for common insect problems affecting homes, flats, rental properties and workplaces.",
//       services: ["Ant Control", "Bed Bug Treatment", "Carpet Moth Treatment", "Carpet Beetle Control", "Cockroach Control", "Flea Treatment", "Wasp Nest Control", "Bee Activity Support"],
//     },
//     {
//       number: "02",
//       title: "Rodent control",
//       count: "02",
//       description: "Focused control for rats and mice, with attention to activity, access and property conditions.",
//       services: ["Rats & Mice Control", "Squirrel Control"],
//     },
//     {
//       number: "03",
//       title: "Prevention",
//       count: "02",
//       description: "Practical measures designed to help manage access and reduce opportunities for recurring pest activity.",
//       services: ["Bird Control", "Property Proofing"],
//     },
//   ];

//   const propertyTypes = [
//     { icon: Home, number: "01", title: "Homes & flats", text: "Everyday residential pest problems." },
//     { icon: Building2, number: "02", title: "Rental properties", text: "Practical support for rented spaces." },
//     { icon: Home, number: "03", title: "Landlord properties", text: "Property-focused pest management." },
//     { icon: Building2, number: "04", title: "Offices", text: "Workplaces where pests disrupt the environment." },
//     { icon: Building2, number: "05", title: "Retail premises", text: "Support for customer-facing properties." },
//     { icon: Building2, number: "06", title: "Commercial buildings", text: "Approaches suited to larger environments." },
//   ];

//   return (
//     <main className="mt-20 overflow-hidden bg-[#F3F1F6] text-[#17151B]">
//       {/* HERO — editorial layout with organic image shapes */}
//       <section className="relative isolate">
//         <div className="pointer-events-none absolute -left-28 top-24 h-72 w-72 rounded-full border border-[#6055A6]/15" />
//         <div className="mx-auto max-w-[1540px] px-5 pb-16 pt-8 sm:px-8 lg:px-12 lg:pb-24 lg:pt-12">
//           <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[#DCD8E3] pb-5">
//             <div className="flex items-center gap-3">
//               <span className="h-2.5 w-2.5 rounded-full bg-[#6055A6]" />
//               <span className="text-[8px] font-black uppercase tracking-[.28em] text-[#77727E]">{LOCAL.company}</span>
//             </div>
//             <span className="text-[8px] font-black uppercase tracking-[.2em] text-[#8C8793]">Pest control · {LOCAL.area} & nearby</span>
//           </div>

//           <div className="grid items-center gap-10 lg:grid-cols-[.92fr_1.08fr] lg:gap-16">
//             <div className="relative z-10 py-5 lg:py-12">
//               <div className="mb-7 flex items-center gap-3">
//                 <span className="text-[8px] font-black uppercase tracking-[.25em] text-[#6055A6]">About SuperGuard</span>
//                 <span className="h-px w-12 bg-[#6055A6]" />
//               </div>
//               <h1 className="max-w-3xl text-[clamp(3.4rem,7vw,7.2rem)] font-black leading-[.82] tracking-[-.075em]">
//                 A clearer way to deal with <span className="text-[#6055A6]">unwanted visitors.</span>
//               </h1>
//               <p className="mt-8 max-w-xl text-sm leading-8 text-[#706C76] sm:text-base">
//                 SuperGuard Pest Control Services Chessington provides practical pest-control support for homes, landlords, businesses and commercial properties across Chessington and nearby areas.
//               </p>
//               <div className="mt-8 flex flex-wrap gap-3">
//                 <Link to="/contact-us" className="group inline-flex items-center gap-4 bg-[#6055A6] px-6 py-4 text-[9px] font-black uppercase tracking-[.16em] text-white transition hover:bg-[#4F468D]">
//                   Talk to SuperGuard <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
//                 </Link>
//                 <a href={`tel:${LOCAL.phoneTel}`} className="inline-flex items-center gap-3 border border-[#D8D4DF] bg-white px-5 py-4 text-[9px] font-black uppercase tracking-[.14em] text-[#24212A] transition hover:border-[#6055A6] hover:text-[#6055A6]">
//                   <Phone size={14} /> {LOCAL.phoneDisplay}
//                 </a>
//               </div>
//               <div className="mt-12 grid max-w-xl grid-cols-3 border-y border-[#DCD8E3] py-4">
//                 {["Chessington", "KT9 1AY", "Local service"].map((item) => (
//                   <div key={item} className="border-r border-[#DCD8E3] px-3 first:pl-0 last:border-r-0">
//                     <span className="text-[8px] font-black uppercase tracking-[.13em] text-[#8C8793]">{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="relative min-h-[480px] sm:min-h-[600px] lg:min-h-[690px]">
//               <div className="absolute right-0 top-2 h-[88%] w-[86%] rounded-[48%_52%_13%_42%/32%_26%_74%_68%] bg-[#6055A6] sm:w-[82%]" />
//               <div className="absolute right-[5%] top-[7%] h-[82%] w-[78%] overflow-hidden rounded-[46%_54%_10%_38%/28%_24%_76%_72%] border-[9px] border-[#F3F1F6] shadow-2xl sm:right-[8%] sm:w-[75%]">
//                 <img src="/images/about-story.webp" alt={`${LOCAL.company} pest control`} className="h-full w-full object-cover" loading="eager" fetchPriority="high" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#15131A]/75 via-transparent to-[#6055A6]/10" />
//                 <div className="absolute bottom-8 left-7 right-7 sm:bottom-10 sm:left-10 sm:right-10">
//                   <span className="text-[8px] font-black uppercase tracking-[.25em] text-white/65">Our approach</span>
//                   <p className="mt-3 max-w-sm text-2xl font-black leading-tight text-white sm:text-4xl">Understand first. Respond properly.</p>
//                 </div>
//               </div>
//               <div className="absolute left-0 top-[16%] flex h-24 w-24 items-center justify-center rounded-full border-[7px] border-[#F3F1F6] bg-[#17151B] text-white shadow-xl sm:h-32 sm:w-32">
//                 <div className="text-center"><ShieldCheck className="mx-auto mb-2 text-[#A9A2D8]" size={23} /><span className="block text-[7px] font-black uppercase tracking-[.15em]">Local care</span><span className="mt-1 block text-xs font-black">{LOCAL.postcode}</span></div>
//               </div>
//               <div className="absolute bottom-[5%] left-[4%] max-w-[190px] rotate-[-5deg] bg-white px-5 py-4 shadow-xl sm:left-0 sm:max-w-[230px] sm:px-6 sm:py-5">
//                 <span className="text-[7px] font-black uppercase tracking-[.2em] text-[#8C8793]">The starting point</span>
//                 <p className="mt-2 text-sm font-black leading-snug">Inspect the signs. Understand the setting.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* INTRO */}
//       <section className="bg-white">
//         <div className="mx-auto max-w-[1540px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
//           <div className="grid gap-10 lg:grid-cols-[180px_1fr] lg:gap-16">
//             <div><span className="text-[92px] font-black leading-none tracking-[-.09em] text-[#6055A6]/15">01</span><div className="mt-5 h-px w-14 bg-[#6055A6]" /><p className="mt-5 max-w-[150px] text-[8px] font-black uppercase leading-5 tracking-[.2em] text-[#8A8590]">Why we work differently</p></div>
//             <div>
//               <h2 className="max-w-6xl text-[clamp(2.7rem,5.4vw,6rem)] font-black leading-[.9] tracking-[-.07em]">Pest control should begin with a <span className="text-[#6055A6]">better understanding</span> of the problem.</h2>
//               <div className="mt-10 grid gap-8 border-t border-[#E4E0E8] pt-8 sm:grid-cols-2">
//                 <p className="max-w-xl text-sm leading-8 text-[#77727F]">A pest problem can look simple from the outside. But the visible pest is often only one part of what is happening inside or around a property.</p>
//                 <p className="max-w-xl text-sm leading-8 text-[#77727F]">At SuperGuard Chessington, we focus on the signs, the setting and the circumstances so the response can be practical rather than automatic.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* METHOD — numbered editorial rail */}
//       <section className="bg-[#17151B] text-white">
//         <div className="mx-auto max-w-[1540px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
//           <div className="grid gap-12 lg:grid-cols-[.55fr_1.45fr] lg:gap-20">
//             <div>
//               <span className="text-[8px] font-black uppercase tracking-[.3em] text-[#A9A2D8]">The SuperGuard method</span>
//               <h2 className="mt-6 max-w-md text-[clamp(2.7rem,4.8vw,5rem)] font-black leading-[.88] tracking-[-.065em]">Four stages.<span className="block text-white/35">One clear purpose.</span></h2>
//               <p className="mt-7 max-w-sm text-sm leading-7 text-white/45">We keep the thinking behind pest control simple: understand what is happening, deal with it appropriately and consider what can help afterwards.</p>
//               <div className="mt-10 flex items-center gap-3 text-[8px] font-black uppercase tracking-[.2em] text-white/25"><span className="h-px w-8 bg-[#6055A6]" />Chessington / Surrey</div>
//             </div>
//             <div className="relative border-l border-white/10 pl-5 sm:pl-9">
//               {principles.map((item) => { const Icon = item.icon; return (
//                 <div key={item.number} className="group relative grid gap-5 border-b border-white/10 py-8 first:pt-2 sm:grid-cols-[56px_1fr] sm:gap-7">
//                   <span className="absolute -left-[26px] top-10 h-2 w-2 rounded-full border border-[#A9A2D8] bg-[#17151B] sm:-left-[40px]" />
//                   <span className="pt-1 text-xl font-black tracking-[-.04em] text-white/20">{item.number}</span>
//                   <div className="grid gap-4 sm:grid-cols-[48px_1fr] sm:gap-6">
//                     <div className="flex h-11 w-11 items-center justify-center rounded-[40%_60%_55%_45%] border border-white/10 text-[#A9A2D8] transition group-hover:bg-[#6055A6] group-hover:text-white"><Icon size={18} /></div>
//                     <div><span className="text-[8px] font-black uppercase tracking-[.22em] text-[#A9A2D8]">{item.eyebrow}</span><h3 className="mt-2 max-w-xl text-[25px] font-black leading-[1] tracking-[-.035em] sm:text-[31px]">{item.title}</h3><p className="mt-4 max-w-2xl text-sm leading-7 text-white/45">{item.text}</p></div>
//                   </div>
//                 </div>
//               ); })}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* LOCAL IMAGE STORY — offset collage, non-standard crops */}
//       <section className="bg-[#E9E6EF]">
//         <div className="mx-auto max-w-[1540px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
//           <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
//             <div><span className="text-[8px] font-black uppercase tracking-[.3em] text-[#6055A6]">02 / The property</span><h2 className="mt-5 max-w-2xl text-[clamp(2.8rem,5vw,5.5rem)] font-black leading-[.86] tracking-[-.07em]">Every property has its own <span className="text-[#6055A6]">conditions.</span></h2></div>
//             <p className="max-w-sm text-sm leading-7 text-[#77727F]">A flat, family home, rental property or workplace can all present a different pest-control challenge. The setting matters when deciding how to respond.</p>
//           </div>
//           <div className="grid items-center gap-7 lg:grid-cols-[1.15fr_.85fr]">
//             <div className="relative min-h-[400px] sm:min-h-[570px]">
//               <div className="absolute inset-x-0 top-0 h-[88%] overflow-hidden rounded-[7%_7%_38%_7%/7%_7%_28%_7%] bg-[#6055A6] sm:inset-x-[3%]">
//                 <img src="/images/about-superguard-banner.webp" alt={`${LOCAL.company} local pest control`} className="h-full w-full object-cover" loading="lazy" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#15131A]/75 via-transparent to-transparent" />
//                 <div className="absolute left-6 top-6 sm:left-10 sm:top-10"><span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-[8px] font-black uppercase tracking-[.16em] text-[#24212D]"><MapPin size={12} className="text-[#6055A6]" />Chessington, Surrey</span></div>
//                 <div className="absolute bottom-7 left-7 max-w-lg sm:bottom-10 sm:left-10"><span className="text-[8px] font-black uppercase tracking-[.25em] text-white/55">Local perspective</span><p className="mt-3 text-2xl font-black leading-[.95] tracking-[-.04em] text-white sm:text-4xl">The right response starts with the right context.</p></div>
//               </div>
//               <div className="absolute bottom-0 right-0 h-36 w-36 overflow-hidden rounded-full border-[8px] border-[#E9E6EF] bg-[#6055A6] shadow-xl sm:right-[2%] sm:h-48 sm:w-48">
//                 <img src="/images/mission-superguard.webp" alt={`${LOCAL.company} service approach`} className="h-full w-full object-cover" loading="lazy" />
//               </div>
//             </div>
//             <div className="relative flex min-h-[390px] flex-col justify-between overflow-hidden rounded-t-[42%] rounded-b-[4%] bg-[#6055A6] px-7 pb-8 pt-16 text-white sm:px-10 sm:pb-10 sm:pt-20 lg:min-h-[530px] lg:px-12">
//               <div className="absolute -right-16 top-12 h-64 w-64 rounded-full border border-white/15" /><div className="absolute -right-4 top-24 h-40 w-40 rounded-full border border-white/15" />
//               <div className="relative"><span className="text-[8px] font-black uppercase tracking-[.28em] text-white/50">Local knowledge</span><h3 className="mt-7 text-[clamp(2.5rem,4vw,4.5rem)] font-black leading-[.86] tracking-[-.065em]">Context <span className="block text-white/45">matters.</span></h3></div>
//               <div className="relative"><p className="text-sm leading-7 text-white/65">We support properties across Chessington and nearby areas, considering the type of building, signs of activity and possible access points.</p><div className="mt-8 border-t border-white/20 pt-6"><span className="text-[8px] font-black uppercase tracking-[.2em] text-white/40">Local postcode</span><p className="mt-2 text-2xl font-black">{LOCAL.postcode}</p></div></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SERVICES — vertical colour-coded editorial list */}
//       <section className="bg-white">
//         <div className="mx-auto max-w-[1540px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
//           <div className="grid gap-12 lg:grid-cols-[.6fr_1.4fr] lg:gap-20">
//             <div><span className="text-[8px] font-black uppercase tracking-[.3em] text-[#6055A6]">03 / What we cover</span><h2 className="mt-6 max-w-md text-[clamp(2.8rem,4.8vw,5.2rem)] font-black leading-[.87] tracking-[-.07em]">Different pests.<span className="block text-[#6055A6]">Different responses.</span></h2><p className="mt-7 max-w-sm text-sm leading-7 text-[#77727F]">Our wider service range allows us to support common pest problems across residential and commercial settings.</p><Link to="/services" className="group mt-8 inline-flex items-center gap-4 border-b border-[#6055A6] pb-3 text-[9px] font-black uppercase tracking-[.18em] text-[#6055A6]">Explore services <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></Link></div>
//             <div className="space-y-4">
//               {serviceGroups.map((group, index) => (
//                 <Link key={group.number} to="/services" className={`group relative block overflow-hidden border border-[#E4E0E8] p-6 transition hover:border-[#6055A6] sm:p-8 ${index === 0 ? "rounded-t-[3rem]" : index === 2 ? "rounded-b-[3rem]" : "rounded-l-[3rem]"}`}>
//                   <div className="absolute bottom-0 left-0 top-0 w-1.5 bg-[#6055A6] transition-all group-hover:w-3" />
//                   <div className="grid gap-5 pl-3 sm:grid-cols-[48px_1fr_auto] sm:items-start sm:pl-4"><span className="pt-1 text-[9px] font-black tracking-[.15em] text-[#6055A6]">{group.number}</span><div><div className="flex items-start justify-between gap-4"><div><h3 className="text-[clamp(2rem,3.3vw,3.3rem)] font-black leading-none tracking-[-.055em]">{group.title}</h3><p className="mt-4 max-w-xl text-sm leading-7 text-[#77727F]">{group.description}</p></div><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F1EEF5] text-[#6055A6] transition group-hover:bg-[#6055A6] group-hover:text-white"><ArrowUpRight size={17} /></span></div><div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">{group.services.map((service) => <span key={service} className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.07em] text-[#6F6A75]"><span className="h-1.5 w-1.5 rounded-full bg-[#6055A6]" />{service}</span>)}</div></div><span className="hidden text-[38px] font-black leading-none tracking-[-.07em] text-[#E2DFE8] sm:block">{group.count}</span></div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* WHO WE HELP — staggered pill-edge panels */}
//       <section className="bg-[#F3F1F6]">
//         <div className="mx-auto max-w-[1540px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
//           <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
//             <div className="lg:sticky lg:top-28 lg:self-start"><span className="text-[8px] font-black uppercase tracking-[.3em] text-[#6055A6]">04 / Property types</span><h2 className="mt-6 max-w-md text-[clamp(2.8rem,4.7vw,5rem)] font-black leading-[.87] tracking-[-.065em]">Pest problems <span className="text-[#6055A6]">don't choose</span> the property.</h2><p className="mt-7 max-w-sm text-sm leading-7 text-[#77727F]">From a single flat to a commercial building, the environment around a pest problem can influence how it should be approached.</p></div>
//             <div className="grid gap-4 sm:grid-cols-2">
//               {propertyTypes.map((item, index) => { const Icon = item.icon; return (
//                 <div key={item.number} className={`group relative min-h-[220px] overflow-hidden bg-white p-7 transition duration-500 hover:-translate-y-1 sm:p-8 ${index % 3 === 1 ? "sm:translate-y-8 sm:rounded-t-[3rem]" : index % 3 === 2 ? "sm:rounded-br-[3rem]" : "rounded-bl-[2.5rem]"}`}>
//                   <span className="absolute right-5 top-5 text-[9px] font-black text-[#D7D3DD]">{item.number}</span><div className="flex h-12 w-12 items-center justify-center rounded-[42%_58%_48%_52%] bg-[#F3F1F6] text-[#6055A6] transition group-hover:bg-[#6055A6] group-hover:text-white"><Icon size={19} /></div><div className="mt-12"><h3 className="text-xl font-black tracking-[-.03em]">{item.title}</h3><p className="mt-2 max-w-xs text-xs leading-6 text-[#85808B]">{item.text}</p></div><div className="absolute bottom-0 left-0 h-1 w-0 bg-[#6055A6] transition-all duration-500 group-hover:w-full" />
//                 </div>
//               ); })}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CHESSINGTON AREA */}
//       <section className="bg-[#17151B] text-white">
//         <div className="mx-auto max-w-[1540px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
//           <div className="grid gap-0 lg:grid-cols-2">
//             <div className="relative min-h-[430px] overflow-hidden rounded-t-[9rem] border border-white/10 bg-[#211E27] sm:min-h-[520px] lg:rounded-l-[9rem] lg:rounded-tr-none">
//               <div className="absolute inset-0 opacity-[.08]" style={{ backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)", backgroundSize: "70px 70px" }} />
//               <div className="absolute left-[25%] top-[20%] h-64 w-64 rounded-full border border-white/10 sm:left-[29%] sm:top-[22%]" /><div className="absolute left-[32%] top-[27%] h-44 w-44 rounded-full border border-white/10" /><div className="absolute left-[39%] top-[34%] h-24 w-24 rounded-full border border-white/10" />
//               <div className="absolute left-[12%] top-[62%] h-px w-[78%] rotate-[-18deg] bg-[#A9A2D8]" /><div className="absolute left-[18%] top-[43%] h-px w-[60%] rotate-[28deg] bg-white/15" />
//               <div className="absolute left-[calc(39%+12px)] top-[calc(34%+12px)] flex h-14 w-14 items-center justify-center rounded-full bg-[#6055A6] shadow-[0_0_0_12px_rgba(96,85,166,.18)]"><MapPin size={20} /></div>
//               <div className="absolute bottom-7 left-7 sm:bottom-10 sm:left-10"><span className="text-[8px] font-black uppercase tracking-[.25em] text-white/35">Local service area</span><p className="mt-2 text-4xl font-black tracking-[-.05em] sm:text-5xl">Chessington</p><p className="mt-2 text-xs font-bold uppercase tracking-[.15em] text-white/40">Surrey · {LOCAL.postcode}</p></div>
//             </div>
//             <div className="flex flex-col justify-between rounded-b-[3rem] bg-[#6055A6] p-7 sm:p-10 lg:rounded-bl-none lg:rounded-r-[3rem] lg:p-14">
//               <div><span className="text-[8px] font-black uppercase tracking-[.3em] text-white/50">Local connection</span><h2 className="mt-6 max-w-lg text-[clamp(2.7rem,4.5vw,5rem)] font-black leading-[.88] tracking-[-.065em]">Close to the problem.<span className="block text-white/45">Close to home.</span></h2><p className="mt-7 max-w-lg text-sm leading-8 text-white/65">{LOCAL.company} provides pest-control support across {LOCAL.area} and nearby areas.</p></div>
//               <div className="mt-12 border-t border-white/20"><div className="grid gap-6 border-b border-white/20 py-6 sm:grid-cols-2"><div><span className="block text-[7px] font-black uppercase tracking-[.22em] text-white/45">Address</span><p className="mt-2 text-sm font-bold leading-6 text-white/90">{LOCAL.fullAddress}</p></div><div><span className="block text-[7px] font-black uppercase tracking-[.22em] text-white/45">Area served</span><p className="mt-2 text-sm font-bold text-white/90">{LOCAL.area} and nearby areas</p></div></div><div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between"><a href={`tel:${LOCAL.phoneTel}`} className="flex items-center gap-3 text-xl font-black tracking-[-.03em] text-white transition hover:text-white/70"><Phone size={17} />{LOCAL.phoneDisplay}</a><Link to="/contact-us" className="group inline-flex items-center gap-3 text-[9px] font-black uppercase tracking-[.18em] text-white">Contact us <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#6055A6] transition group-hover:bg-[#17151B] group-hover:text-white"><ArrowUpRight size={14} /></span></Link></div></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FINAL CTA */}
//       <section className="bg-white">
//         <div className="mx-auto max-w-[1540px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
//           <div className="relative overflow-hidden rounded-[3rem_3rem_3rem_0] bg-[#F3F1F6]">
//             <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full border border-[#6055A6]/15" /><div className="absolute bottom-[-180px] left-[40%] h-[400px] w-[400px] rounded-full bg-[#6055A6]/[.05]" />
//             <div className="relative grid gap-10 px-7 py-10 sm:px-10 sm:py-14 lg:grid-cols-[1fr_350px] lg:items-center lg:px-14 lg:py-16">
//               <div><span className="text-[8px] font-black uppercase tracking-[.3em] text-[#6055A6]">Ready to talk?</span><h2 className="mt-6 max-w-4xl text-[clamp(3rem,5.5vw,6rem)] font-black leading-[.85] tracking-[-.07em]">Tell us what <span className="block text-[#6055A6]">you've noticed.</span></h2><p className="mt-7 max-w-xl text-sm leading-8 text-[#77727F]">You don't need to know exactly which pest you're dealing with. Tell us what you've seen and where you've noticed it, and we can discuss the next practical step.</p><div className="mt-9 flex flex-wrap gap-3"><Link to="/contact-us" className="group inline-flex items-center gap-5 bg-[#6055A6] px-7 py-4 text-[9px] font-black uppercase tracking-[.18em] text-white transition hover:bg-[#4F468D]">Contact SuperGuard <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></Link><a href={`tel:${LOCAL.phoneTel}`} className="inline-flex items-center gap-3 border border-[#D8D4DF] bg-white px-6 py-4 text-[9px] font-black uppercase tracking-[.18em] text-[#24212D] transition hover:border-[#6055A6] hover:text-[#6055A6]"><Phone size={14} />{LOCAL.phoneDisplay}</a></div></div>
//               <div className="relative mx-auto w-full max-w-[310px] rotate-[2deg] rounded-[2rem_2rem_2rem_0] bg-[#17151B] p-6 text-white shadow-2xl sm:p-8"><div className="flex items-center justify-between"><span className="text-[8px] font-black uppercase tracking-[.25em] text-white/40">SuperGuard Chessington</span><Bug size={17} className="text-[#A9A2D8]" /></div><div className="mt-14"><span className="text-[7px] font-black uppercase tracking-[.2em] text-white/30">Local service</span><p className="mt-2 text-3xl font-black leading-none tracking-[-.04em]">{LOCAL.area}</p><p className="mt-2 text-xs font-bold text-white/40">Surrey {LOCAL.postcode}</p></div><div className="mt-8 border-t border-white/10 pt-5"><a href={`tel:${LOCAL.phoneTel}`} className="flex items-center justify-between text-sm font-black"><span>{LOCAL.phoneDisplay}</span><ArrowUpRight size={15} /></a></div></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* BOTTOM INFORMATION STRIP — not a site-wide footer */}
//       <section className="border-t border-[#DDD9E3] bg-[#F3F1F6]">
//         <div className="mx-auto max-w-[1540px] px-5 py-7 sm:px-8 lg:px-12"><div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-start gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#6055A6]"><MapPin size={15} /></span><div><span className="block text-[7px] font-black uppercase tracking-[.25em] text-[#9A95A0]">Local base</span><span className="mt-1 block text-xs font-bold text-[#29262F]">{LOCAL.fullAddress}</span></div></div><div className="flex flex-wrap items-center gap-5"><a href={`tel:${LOCAL.phoneTel}`} className="flex items-center gap-2 text-sm font-black text-[#6055A6]"><Phone size={14} />{LOCAL.phoneDisplay}</a><Link to="/contact-us" className="group flex items-center gap-2 text-[8px] font-black uppercase tracking-[.16em] text-[#29262F] transition hover:text-[#6055A6]">Get in touch <ArrowUpRight size={13} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link></div></div></div>
//       </section>
//     </main>
//   );
// };

// export default About;
























import React from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Phone,
  ShieldCheck,
  Wrench,
  Home,
  Building2,
  Bug,
  Crosshair,
  Eye,
  Route,
  Check,
  MoveUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
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

  const principles = [
    {
      number: "01",
      icon: Eye,
      eyebrow: "Observe",
      title: "Look beyond the obvious.",
      text: "Droppings, damage, scratching sounds, insects and nests can all reveal part of a pest problem. Understanding the wider picture helps establish what may be happening.",
    },
    {
      number: "02",
      icon: Crosshair,
      eyebrow: "Identify",
      title: "Find the reason behind the activity.",
      text: "Entry gaps, harbourage and conditions around a property can help explain why pests are present. Identifying possible causes helps guide the next steps.",
    },
    {
      number: "03",
      icon: Wrench,
      eyebrow: "Respond",
      title: "Choose an approach that fits.",
      text: "A mouse problem in a home is different from cockroach activity in a workplace. The pest, property and circumstances all matter when considering treatment.",
    },
    {
      number: "04",
      icon: Route,
      eyebrow: "Prevent",
      title: "Think about what happens next.",
      text: "Where appropriate, practical recommendations can help reduce pest access, remove attractive conditions and lower the likelihood of recurring activity.",
    },
  ];

  const serviceGroups = [
    {
      number: "01",
      title: "Insect management",
      label: "INSIDE & OUTSIDE",
      description:
        "Support for common crawling and flying insect problems in residential and commercial properties.",
      services: [
        "Ant Control",
        "Bed Bug Treatment",
        "Carpet Moth Treatment",
        "Carpet Beetle Control",
        "Cockroach Control",
        "Flea Treatment",
        "Wasp Nest Control",
        "Bee Activity Support",
      ],
    },
    {
      number: "02",
      title: "Rodent management",
      label: "TRACK · CONTROL · PREVENT",
      description:
        "Practical support for rodent activity, with attention to signs, access points and property conditions.",
      services: ["Rats & Mice Control", "Squirrel Control"],
    },
    {
      number: "03",
      title: "Protection & proofing",
      label: "PROPERTY PROTECTION",
      description:
        "Measures to help address access points and reduce opportunities for pest activity around a property.",
      services: ["Bird Control", "Property Proofing", "General Pest Inspection"],
    },
  ];

  const propertyTypes = [
    {
      icon: Home,
      number: "01",
      title: "Homes & flats",
      text: "Pest-control support for everyday residential settings.",
    },
    {
      icon: Building2,
      number: "02",
      title: "Rental properties",
      text: "Practical help for rented homes and accommodation.",
    },
    {
      icon: ShieldCheck,
      number: "03",
      title: "Landlords",
      text: "Property-focused support when pest activity is reported.",
    },
    {
      icon: Building2,
      number: "04",
      title: "Offices",
      text: "Solutions considered around workplace requirements.",
    },
    {
      icon: Home,
      number: "05",
      title: "Retail premises",
      text: "Support for shops and customer-facing environments.",
    },
    {
      icon: Building2,
      number: "06",
      title: "Commercial buildings",
      text: "Approaches tailored to different commercial spaces.",
    },
  ];

  const serviceHighlights = [
    "Residential properties",
    "Rental accommodation",
    "Workplaces",
    "Commercial premises",
  ];

  return (
    <main className=" overflow-hidden bg-[#6055A6] text-[#17151B]">

      {/* HERO — image-free, full purple visual identity */}
      <section className="relative isolate overflow-hidden bg-[#6055A6] text-white">
        <div className="pointer-events-none absolute -right-24 -top-28 h-[430px] w-[430px] rounded-full border border-white/15 sm:h-[620px] sm:w-[620px]" />
        <div className="pointer-events-none absolute -right-8 top-12 h-[300px] w-[300px] rounded-full border border-white/10 sm:h-[450px] sm:w-[450px]" />
        <div className="pointer-events-none absolute -bottom-44 left-[25%] h-[430px] w-[430px] rounded-full bg-[#4F468D]/50 blur-[1px]" />
        <div className="pointer-events-none absolute right-[12%] top-[23%] h-3 w-3 rounded-full bg-[#6055A6]" />
        <div className="pointer-events-none absolute right-[28%] top-[39%] h-2 w-2 rounded-full bg-[#6055A6]" />

        <div className="relative mx-auto max-w-[1540px] px-5 pb-12 pt-8 sm:px-8 lg:px-12 lg:pb-16 lg:pt-10">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/20 pb-5">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30">
                <ShieldCheck size={16} />
              </span>
              <span className="text-[9px] font-black uppercase tracking-[.2em] sm:text-[10px]">
                {LOCAL.company}
              </span>
            </div>
            <span className="text-[8px] font-bold uppercase tracking-[.2em] text-white/65 sm:text-[9px]">
              {LOCAL.area} / Local pest-control support
            </span>
          </div>

          <div className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.25fr_.75fr] lg:gap-10 lg:py-24">
            <div className="relative z-10">
              <div className="mb-8 flex items-center gap-3">
                <span className="h-px w-10 bg-white/70" />
                <span className="text-[9px] font-black uppercase tracking-[.28em] text-white/75">
                  A different perspective
                </span>
              </div>

              <h1 className="max-w-5xl text-[clamp(3.7rem,9vw,8.8rem)] font-black leading-[.79] tracking-[-.085em]">
                PEST
                <br />
                CONTROL,
                <br />
                <span className="text-[#D9D4FA]">THOUGHT</span>
                <br />
                THROUGH.
              </h1>

              <p className="mt-9 max-w-xl text-sm leading-8 text-white/75 sm:text-base">
                At SuperGuard Hampstead, we believe a considered response
                starts with understanding the problem, the property and the
                conditions surrounding it. We provide practical pest-control
                support for homes and businesses in Hampstead and nearby areas.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/contact-us"
                  className="group inline-flex items-center gap-5 rounded-full bg-white px-6 py-4 text-[9px] font-black uppercase tracking-[.14em] text-[#51478F] transition hover:bg-[#E9E5FF]"
                >
                  Talk to our team
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#6055A6] text-white transition group-hover:translate-x-1">
                    <ArrowRight size={14} />
                  </span>
                </Link>

                <a
                  href={`tel:${LOCAL.phoneTel}`}
                  className="inline-flex items-center gap-3 rounded-full border border-white/35 px-5 py-4 text-[9px] font-black uppercase tracking-[.12em] text-white transition hover:bg-white/10"
                >
                  <Phone size={14} />
                  {LOCAL.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Abstract graphic instead of a hero image */}
            <div className="relative mx-auto flex min-h-[320px] w-full max-w-[480px] items-center justify-center sm:min-h-[430px] lg:min-h-[540px]">
              <div className="absolute h-[250px] w-[250px] rotate-[-18deg] rounded-[42%_58%_61%_39%/43%_35%_65%_57%] border border-white/35 sm:h-[350px] sm:w-[350px]" />

              <div className="absolute h-[210px] w-[210px] rotate-[22deg] rounded-[58%_42%_35%_65%/40%_62%_38%_60%] bg-[#4D438D] sm:h-[300px] sm:w-[300px]" />

              <div className="absolute h-[165px] w-[165px] rotate-[-9deg] rounded-[35%_65%_48%_52%/56%_35%_65%_44%] border border-white/50 sm:h-[235px] sm:w-[235px]" />

              <div className="relative z-10 flex h-[140px] w-[140px] rotate-[8deg] flex-col items-center justify-center rounded-[35%_65%_58%_42%/46%_38%_62%_54%] bg-[#F3F1F6] text-[#6055A6] shadow-2xl sm:h-[190px] sm:w-[190px]">
                <ShieldCheck size={40} strokeWidth={1.5} />
                <span className="mt-4 text-center text-[9px] font-black uppercase tracking-[.2em]">
                  Understand
                  <br />
                  before acting
                </span>
              </div>

              <div className="absolute right-0 top-[9%] rotate-6 rounded-2xl border border-white/20 bg-white/10 px-4 py-4 backdrop-blur-sm sm:right-2 sm:px-5">
                <Eye size={19} />
                <span className="mt-3 block text-[8px] font-black uppercase tracking-[.15em]">
                  Inspect
                </span>
              </div>

              <div className="absolute bottom-[7%] left-0 -rotate-6 rounded-2xl bg-[#D9D4FA] px-4 py-4 text-[#332B68] sm:left-2 sm:px-5">
                <Crosshair size={19} />
                <span className="mt-3 block text-[8px] font-black uppercase tracking-[.15em]">
                  Identify
                </span>
              </div>

              <div className="absolute right-[7%] top-[54%] flex h-10 w-10 items-center justify-center rounded-full border border-white/35">
                <ArrowDownRight size={18} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 border-t border-white/20 sm:grid-cols-4">
            {[
              ["01", "Understand the signs"],
              ["02", "Identify the problem"],
              ["03", "Consider the setting"],
              ["04", "Plan the next step"],
            ].map(([number, label]) => (
              <div
                key={number}
                className="border-b border-white/20 py-5 pr-3 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0"
              >
                <span className="text-[9px] font-black text-[#D9D4FA]">
                  {number}
                </span>
                <p className="mt-2 text-[9px] font-bold uppercase leading-5 tracking-[.1em] text-white/75 sm:text-[10px]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO — oversized statement and editorial split */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1540px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[.25em] text-[#6055A6]">
                01 / Our point of view
              </span>
              <div className="mt-8 flex h-16 w-16 items-center justify-center rounded-[24px_24px_24px_5px] bg-[#F0EDF7] text-[#6055A6]">
                <Eye size={27} strokeWidth={1.5} />
              </div>
              <p className="mt-7 max-w-[230px] text-sm leading-7 text-[#827D89]">
                Every property tells a story. The important part is knowing
                which signs to look for.
              </p>
            </div>

            <div>
              <h2 className="max-w-5xl text-[clamp(2.8rem,6.5vw,6.6rem)] font-black leading-[.88] tracking-[-.075em]">
                The pest is visible.
                <span className="block text-[#6055A6]">
                  The cause may not be.
                </span>
              </h2>

              <div className="mt-10 grid gap-8 border-t border-[#E5E1EA] pt-8 sm:grid-cols-2">
                <p className="text-sm leading-8 text-[#77727F]">
                  Pest activity can begin in hidden spaces, around entry
                  points or in conditions that attract pests to a property.
                  What you notice first may not explain the whole situation.
                </p>
                <p className="text-sm leading-8 text-[#77727F]">
                  Our approach considers the signs, the environment and the
                  type of property before identifying practical options for
                  dealing with the issue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METHOD — offset cards, new structure */}
      <section className="bg-[#17151B] text-white">
        <div className="mx-auto max-w-[1540px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-[9px] font-black uppercase tracking-[.28em] text-[#B9B1ED]">
                02 / How we approach a problem
              </span>
              <h2 className="mt-6 max-w-3xl text-[clamp(2.8rem,6vw,6rem)] font-black leading-[.86] tracking-[-.07em]">
                A method built
                <span className="block text-[#A9A2D8]">around the details.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/50">
              There is no single response for every pest or every property.
              The right next step depends on what the evidence tells us.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className={`relative overflow-hidden border border-white/10 p-7 transition-colors duration-300 hover:border-[#A9A2D8]/60 sm:p-10 ${
                    index === 0
                      ? "rounded-tl-[4rem] bg-[#211E27]"
                      : index === 1
                      ? "rounded-tr-[4rem] bg-[#211E27] md:translate-y-8"
                      : index === 2
                      ? "rounded-bl-[4rem] bg-[#211E27]"
                      : "rounded-br-[4rem] bg-[#211E27] md:translate-y-8"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[11px] font-black tracking-[.2em] text-[#A9A2D8]">
                      {item.number}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-[17px_17px_17px_4px] bg-[#6055A6] text-white">
                      <Icon size={21} />
                    </div>
                  </div>

                  <div className="mt-12">
                    <span className="text-[8px] font-black uppercase tracking-[.24em] text-white/40">
                      {item.eyebrow}
                    </span>
                    <h3 className="mt-3 max-w-lg text-2xl font-black leading-tight tracking-[-.04em] sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-5 max-w-xl text-sm leading-7 text-white/50">
                      {item.text}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-[8px] font-bold uppercase tracking-[.18em] text-white/30">
                      SuperGuard / Hampstead
                    </span>
                    <ArrowUpRight size={17} className="text-[#A9A2D8]" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMAGE STORY — former hero image moved here */}
      <section className="bg-[#E9E6EF]">
        <div className="mx-auto max-w-[1540px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
            <div className="relative min-h-[440px] sm:min-h-[620px]">
              <div className="absolute left-0 top-0 h-[78%] w-[84%] overflow-hidden rounded-[48%_48%_8%_8%/28%_28%_8%_8%] bg-[#6055A6]">
                <img
                  src="/images/about-story.webp"
                  alt={`${LOCAL.company} pest-control approach`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17151B]/70 via-transparent to-[#6055A6]/10" />
                <div className="absolute bottom-7 left-6 right-6 sm:bottom-10 sm:left-9 sm:right-9">
                  <span className="text-[8px] font-black uppercase tracking-[.25em] text-white/70">
                    The SuperGuard approach
                  </span>
                  <p className="mt-3 max-w-md text-2xl font-black leading-tight tracking-[-.04em] text-white sm:text-4xl">
                    Understand the property. Respond to the problem.
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 h-[210px] w-[190px] overflow-hidden rounded-[48%_48%_8%_48%] border-[8px] border-[#E9E6EF] bg-[#6055A6] sm:h-[270px] sm:w-[245px]">
                <img
                  src="/images/about-superguard-banner.webp"
                  alt={`Local pest-control support from ${LOCAL.shortName}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="absolute right-[4%] top-[7%] flex h-[76px] w-[76px] items-center justify-center rounded-[25px_25px_25px_5px] border-4 border-[#E9E6EF] bg-[#6055A6] text-white shadow-lg sm:right-[9%] sm:h-[96px] sm:w-[96px]">
                <ShieldCheck size={31} strokeWidth={1.5} />
              </div>
            </div>

            <div className="py-4">
              <span className="text-[9px] font-black uppercase tracking-[.28em] text-[#6055A6]">
                03 / Every property is different
              </span>

              <h2 className="mt-6 text-[clamp(2.8rem,5.5vw,5.8rem)] font-black leading-[.86] tracking-[-.075em]">
                Context changes
                <span className="block text-[#6055A6]">the approach.</span>
              </h2>

              <p className="mt-7 text-sm leading-8 text-[#77727F]">
                A family home, rental flat, restaurant or office can each
                present different challenges. The type of building, signs of
                pest activity and possible access points can all influence
                how a problem should be approached.
              </p>

              <div className="mt-9 space-y-0 border-t border-[#D8D3E0]">
                {serviceHighlights.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between gap-4 border-b border-[#D8D3E0] py-4"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[9px] font-black text-[#6055A6]">
                        0{index + 1}
                      </span>
                      <span className="text-sm font-bold text-[#29262F]">
                        {item}
                      </span>
                    </div>
                    <Check size={16} className="text-[#6055A6]" />
                  </div>
                ))}
              </div>

              <Link
                to="/contact-us"
                className="group mt-8 inline-flex items-center gap-4 rounded-full bg-[#6055A6] px-6 py-4 text-[9px] font-black uppercase tracking-[.15em] text-white transition hover:bg-[#4F468D]"
              >
                Discuss your situation
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES — dark editorial index */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1540px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_.65fr] lg:items-end">
            <div>
              <span className="text-[9px] font-black uppercase tracking-[.28em] text-[#6055A6]">
                04 / Areas of support
              </span>
              <h2 className="mt-6 max-w-4xl text-[clamp(2.8rem,6vw,6.2rem)] font-black leading-[.85] tracking-[-.075em]">
                Different pests.
                <span className="block text-[#6055A6]">Different responses.</span>
              </h2>
            </div>
            <div>
              <p className="max-w-md text-sm leading-8 text-[#77727F]">
                We support a range of common pest problems across residential
                and commercial environments. The right service depends on
                the pest and the situation.
              </p>
              <Link
                to="/services"
                className="group mt-6 inline-flex items-center gap-3 border-b border-[#6055A6] pb-3 text-[9px] font-black uppercase tracking-[.16em] text-[#6055A6]"
              >
                View all services
                <MoveUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>

          <div className="border-t-2 border-[#6055A6]">
            {serviceGroups.map((group, index) => (
              <Link
                key={group.number}
                to="/services"
                className="group grid gap-6 border-b border-[#E5E1EA] py-8 transition-colors hover:bg-[#F8F7FA] sm:py-10 lg:grid-cols-[90px_.85fr_1.15fr_40px] lg:items-start lg:gap-8"
              >
                <span className="text-sm font-black tracking-[.15em] text-[#6055A6]">
                  {group.number}
                </span>

                <div>
                  <span className="text-[8px] font-black uppercase tracking-[.17em] text-[#8D8796]">
                    {group.label}
                  </span>
                  <h3 className="mt-3 text-2xl font-black leading-none tracking-[-.05em] sm:text-3xl">
                    {group.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-xs leading-6 text-[#827D89]">
                    {group.description}
                  </p>
                </div>

                <div className="flex flex-wrap content-start gap-2">
                  {group.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-[#E1DDE8] px-3 py-2 text-[8px] font-bold uppercase tracking-[.05em] text-[#615C69] transition group-hover:border-[#C9C2E2]"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition group-hover:bg-[#6055A6] group-hover:text-white ${
                    index === 1
                      ? "bg-[#F0EDF7] text-[#6055A6]"
                      : "bg-[#F3F1F6] text-[#6055A6]"
                  }`}
                >
                  <ArrowUpRight size={17} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROPERTY TYPES — irregular staggered tiles */}
      <section className="bg-[#F3F1F6]">
        <div className="mx-auto max-w-[1540px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <span className="text-[9px] font-black uppercase tracking-[.28em] text-[#6055A6]">
                05 / Who we help
              </span>
              <h2 className="mt-6 max-w-lg text-[clamp(2.8rem,5.5vw,5.6rem)] font-black leading-[.86] tracking-[-.075em]">
                The property
                <span className="block text-[#6055A6]">matters, too.</span>
              </h2>
              <p className="mt-7 max-w-sm text-sm leading-8 text-[#77727F]">
                Different buildings have different uses, layouts and
                requirements. We consider the environment when discussing
                appropriate pest-control options.
              </p>
              <div className="mt-9 inline-flex items-center gap-3 rounded-full border border-[#DCD7E5] bg-white px-4 py-3">
                <MapPin size={15} className="text-[#6055A6]" />
                <span className="text-[9px] font-black uppercase tracking-[.12em]">
                  Hampstead & nearby areas
                </span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {propertyTypes.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.number}
                    className={`group relative flex min-h-[240px] flex-col justify-between overflow-hidden border border-[#E3DFE9] bg-white p-6 transition duration-300 hover:border-[#6055A6] sm:p-8 ${
                      index % 3 === 0
                        ? "rounded-tl-[3.5rem]"
                        : index % 3 === 1
                        ? "rounded-tr-[3.5rem]"
                        : "rounded-br-[3.5rem]"
                    }`}
                  >
                    <span className="absolute right-6 top-6 text-[10px] font-black tracking-[.15em] text-[#D5D0E0]">
                      {item.number}
                    </span>

                    <div className="flex h-14 w-14 items-center justify-center rounded-[22px_22px_22px_5px] bg-[#F0EDF7] text-[#6055A6] transition group-hover:bg-[#6055A6] group-hover:text-white">
                      <Icon size={22} strokeWidth={1.6} />
                    </div>

                    <div className="mt-12">
                      <h3 className="text-xl font-black tracking-[-.035em]">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-xs text-xs leading-6 text-[#827D89]">
                        {item.text}
                      </p>
                    </div>

                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#6055A6] transition-all duration-300 group-hover:w-full" />
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL AREA — distinctive split layout */}
      <section className="bg-[#17151B] text-white">
        <div className="mx-auto max-w-[1540px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid overflow-hidden rounded-[2rem_2rem_2rem_0] lg:grid-cols-[.9fr_1.1fr]">
            <div className="relative flex min-h-[420px] flex-col justify-between overflow-hidden bg-[#6055A6] p-7 sm:p-10 lg:min-h-[570px] lg:p-14">
              <div className="pointer-events-none absolute -right-24 -top-16 h-80 w-80 rounded-full border border-white/20" />
              <div className="pointer-events-none absolute -right-5 top-16 h-52 w-52 rounded-full border border-white/15" />
              <div className="pointer-events-none absolute bottom-[-100px] left-[-80px] h-72 w-72 rounded-full bg-[#4F468D]" />

              <div className="relative">
                <span className="text-[9px] font-black uppercase tracking-[.27em] text-white/60">
                  06 / Our local area
                </span>
                <div className="mt-8 flex h-16 w-16 items-center justify-center rounded-full border border-white/30">
                  <MapPin size={25} />
                </div>
              </div>

              <div className="relative mt-16">
                <h2 className="text-[clamp(3rem,6vw,6.3rem)] font-black leading-[.82] tracking-[-.08em]">
                  HAMP-
                  <br />
                  STEAD.
                </h2>
                <p className="mt-5 text-sm font-bold uppercase tracking-[.16em] text-white/65">
                  London · {LOCAL.postcode}
                </p>
              </div>

              <div className="relative mt-10 flex items-center gap-3 border-t border-white/20 pt-5">
                <span className="h-2 w-2 rounded-full bg-[#D9D4FA]" />
                <span className="text-[9px] font-black uppercase tracking-[.17em] text-white/70">
                  Local pest-control support
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between bg-[#24212D] p-7 sm:p-10 lg:p-14">
              <div>
                <span className="text-[9px] font-black uppercase tracking-[.27em] text-[#B9B1ED]">
                  Local knowledge. Practical support.
                </span>
                <h3 className="mt-7 max-w-xl text-[clamp(2.6rem,4.5vw,4.8rem)] font-black leading-[.88] tracking-[-.07em]">
                  Nearby when
                  <span className="block text-[#A9A2D8]">you need a plan.</span>
                </h3>
                <p className="mt-7 max-w-lg text-sm leading-8 text-white/55">
                  {LOCAL.company} provides pest-control support across{" "}
                  {LOCAL.area} and nearby areas. Tell us what you have noticed
                  and where the activity is occurring so we can discuss a
                  suitable next step.
                </p>
              </div>

              <div className="mt-12 border-t border-white/10">
                <div className="grid gap-6 border-b border-white/10 py-6 sm:grid-cols-2">
                  <div>
                    <span className="text-[8px] font-black uppercase tracking-[.2em] text-white/35">
                      Address
                    </span>
                    <p className="mt-3 text-sm font-bold leading-6 text-white/85">
                      {LOCAL.fullAddress}
                    </p>
                  </div>
                  <div>
                    <span className="text-[8px] font-black uppercase tracking-[.2em] text-white/35">
                      Areas served
                    </span>
                    <p className="mt-3 text-sm font-bold leading-6 text-white/85">
                      {LOCAL.area} and nearby areas
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-5 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <a
                    href={`tel:${LOCAL.phoneTel}`}
                    className="flex items-center gap-3 text-lg font-black tracking-[-.03em] transition hover:text-[#B9B1ED]"
                  >
                    <Phone size={17} />
                    {LOCAL.phoneDisplay}
                  </a>

                  <Link
                    to="/contact-us"
                    className="group inline-flex items-center gap-3 text-[9px] font-black uppercase tracking-[.16em] text-white"
                  >
                    Contact our team
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6055A6] transition group-hover:bg-white group-hover:text-[#6055A6]">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA — no stock-style image or generic card */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1540px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="relative overflow-hidden rounded-[3rem_3rem_3rem_0] bg-[#EAE7F2]">
            <div className="pointer-events-none absolute -right-20 -top-32 h-96 w-96 rounded-full border border-[#6055A6]/15" />
            <div className="pointer-events-none absolute -bottom-44 left-[35%] h-[400px] w-[400px] rounded-full bg-[#6055A6]/[.06]" />

            <div className="relative grid gap-12 px-7 py-10 sm:px-10 sm:py-14 lg:grid-cols-[1fr_330px] lg:items-center lg:px-16 lg:py-16">
              <div>
                <span className="text-[9px] font-black uppercase tracking-[.27em] text-[#6055A6]">
                  Let's start with what you've noticed
                </span>

                <h2 className="mt-7 max-w-4xl text-[clamp(3.1rem,6.7vw,6.8rem)] font-black leading-[.82] tracking-[-.08em]">
                  SOMETHING
                  <span className="block text-[#6055A6]">NOT RIGHT?</span>
                </h2>

                <p className="mt-7 max-w-xl text-sm leading-8 text-[#77727F]">
                  You do not need to identify the pest yourself. Tell us what
                  you have seen, where you have noticed it and any signs of
                  activity. We can discuss the next practical step.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  <Link
                    to="/contact-us"
                    className="group inline-flex items-center gap-5 rounded-full bg-[#6055A6] px-6 py-4 text-[9px] font-black uppercase tracking-[.15em] text-white transition hover:bg-[#4F468D]"
                  >
                    Contact SuperGuard
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>

                  <a
                    href={`tel:${LOCAL.phoneTel}`}
                    className="inline-flex items-center gap-3 rounded-full border border-[#D4CFDF] bg-white px-5 py-4 text-[9px] font-black uppercase tracking-[.12em] text-[#24212D] transition hover:border-[#6055A6] hover:text-[#6055A6]"
                  >
                    <Phone size={14} />
                    Call our team
                  </a>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[310px]">
                <div className="absolute -right-3 -top-3 h-full w-full rounded-[2.5rem_2.5rem_2.5rem_0] border-2 border-[#6055A6]/25" />

                <div className="relative overflow-hidden rounded-[2.5rem_2.5rem_2.5rem_0] bg-[#6055A6] p-7 text-white shadow-xl sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-black uppercase tracking-[.2em] text-white/60">
                      SuperGuard
                    </span>
                    <ShieldCheck size={20} />
                  </div>

                  <div className="mt-14">
                    <span className="text-[8px] font-black uppercase tracking-[.2em] text-white/55">
                      Your local area
                    </span>
                    <p className="mt-3 text-4xl font-black leading-none tracking-[-.06em]">
                      {LOCAL.area}
                    </p>
                    <p className="mt-3 text-xs font-bold text-white/65">
                      London {LOCAL.postcode}
                    </p>
                  </div>

                  <div className="mt-9 border-t border-white/20 pt-5">
                    <a
                      href={`tel:${LOCAL.phoneTel}`}
                      className="flex items-center justify-between gap-3 text-sm font-black"
                    >
                      <span>{LOCAL.phoneDisplay}</span>
                      <ArrowUpRight size={17} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CONTACT STRIP */}
      <section className="border-t border-[#DDD9E3] bg-[#F3F1F6]">
        <div className="mx-auto max-w-[1540px] px-5 py-7 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[15px_15px_15px_4px] bg-white text-[#6055A6]">
                <MapPin size={17} />
              </span>
              <div>
                <span className="block text-[8px] font-black uppercase tracking-[.2em] text-[#918B99]">
                  Local address
                </span>
                <span className="mt-1 block text-xs font-bold leading-6 text-[#29262F]">
                  {LOCAL.fullAddress}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-5">
              <a
                href={`tel:${LOCAL.phoneTel}`}
                className="flex items-center gap-2 text-sm font-black text-[#6055A6]"
              >
                <Phone size={15} />
                {LOCAL.phoneDisplay}
              </a>

              <Link
                to="/contact-us"
                className="group flex items-center gap-2 text-[9px] font-black uppercase tracking-[.15em] text-[#29262F] transition hover:text-[#6055A6]"
              >
                Get in touch
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
