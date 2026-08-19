"use client"
import Image from "next/image";
import { useState,useEffect } from "react";
import Footer from "@/Components/Footer/page";
import Overheadbar from "@/Components/Overhead-bar/page";
import Link from "next/link";
import { ChevronDown,ChevronRight,ChevronLeft, DivideCircle } from "lucide-react";

export default function Skill() {

    
  return (
    <div className="flex flex-col flex-1 leading-loose gap-0 tracking-widest  items-center overflow-x-hidden min-h-screen justify-center bg-white font-sans">
          {/* overhead bar */}
          <Overheadbar/>
          
          {/* main */}
          <div className="flex flex-col   w-full -mt-10">
            <div className="relative w-full">
            <img src="/kerbol.jpeg" className="w-full h-[790px] object-cover max-[887px]:mt-40"/>
            <div className="absolute inset-0 z-10 flex flex-col max-[887px]:mt-40 items-center justify-center w-full rounded-lg bg-black/56  text-center text-white">
                  <p className="text-7xl font-extrabold max-[800px]:text-5xl">Skilling at 3DWEBSOFT Foundation</p>
                </div>
            </div>
                        
            <div className="flex flex-col gap-7 text-black  p-15 max-[500px]:p-5">
                    <div className="flex gap-8 max-[1000px]:flex-col items-center">
                        <div className="flex flex-col gap-5 max-[1000px]:order-2 ">
                        <p>A large population of underprivileged youth and women across urban slums and rural communities in Karnataka lack or possess negligible vocational skills. This prevents them from taking advantage of the vast employment opportunities in India's cities. As a result, many young people remain unemployed or under-employed.</p>
                        <p>Skills training is one of the most powerful tools for making a lasting impact on the lives of these young people and their families. Our aim is to make them self-reliant, bridge the gap between learning and earning, and instill confidence and dignity in every one of our students. Over 10 years of dedicated service, we have empowered 5,000+ beneficiaries and facilitated 1,200+ placements through 30+ community and skilling programs.</p>
                        </div>
                    <img src="/lagfer.jpeg" className="w-[400px] max-[1000px]:w-[100vw] max-[1000px]:order-1 h-auto"/>
                    </div>
                    <div className="flex flex-col gap-8">
                        <p>3DWEBSOFT Foundation has various models through which skill training is provided to our beneficiaries.</p>
                        <ul className="flex flex-col gap-8 list-disc pl-10 text-left w-[85vw]">
                            <li><span className="font-bold">Computer Training Programs</span> — short-term, certified courses focusing on essential digital and computer literacy. These are set up in underserved locations where even basic digital access is lacking, with the objective of equipping unemployed youth with hands-on skills that lead to employment in the organized industry.</li>
                            <li><span className="font-bold">Web Designing & Full Stack Development</span> — Recognizing the need for skilling to go beyond basic technical skills, the second model is our Web Designing & Full Stack Development programs. These longer-term, career-focused courses are designed for learners who are already digitally literate and want to build a professional career in technology. Alongside coding and development, we impart industry-relevant skills through job-ready projects, focusing on the all-round development of every beneficiary.</li>
                            <li><span className="font-bold">Women Empowerment programs</span> — 3DWEBSOFT Foundation also runs Women Empowerment programs including tailoring, beauty parlour, and handicrafts training — enabling women to earn a livelihood, start their own businesses, and achieve economic independence.</li>
                            <li><span className="font-bold"> CSR partnership model</span> — 3DWEBSOFT Foundation also welcomes a sponsorship and CSR partnership model, where individuals, institutions, and corporates can support the skilling of students across our centers and locations.</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-6 items-center justify-center w-full pt-10">
                        <p className="text-[#06896B] font-bold text-3xl tracking-widest">The Methodology followed across our centers include:</p>
                        <div className="w-[88vw] flex flex-col items-center justify-center p-20 min-h-[300px] rounded-lg bg-[#06896B]">
                            <div className="text-white flex text-left font-bold max-[500px]:min-w-[70vw] flex-col gap-6 list-disc ">
                                    <li>Community mapping and mobilisation</li>
                                    <li>Counselling students and their families on the importance of skill development</li>
                                    <li>Certified courses focusing on youth employability</li>
                                    <li>Industry-linked, career-focused training at subsidized cost</li>
                                    <li>Preparing students for interviews and providing them with professional skills</li>
                                    <li>Placement opportunities for youth who have completed the course</li>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5 max-[1000px]:flex-col  items-center justify-center">
                        <div className="flex tracking-widest max-[1000px]:w-[85vw] max-[1000px]:order-2 leading-loose flex-col gap-4 w-[55vw]">
                            <p className="tracking-widest">3DWEBSOFT Foundation has a range of career and skill-focused courses to choose from. Some of these include Computer Training / Office Automation, Web Designing, Full Stack Development, Digital Literacy, Tailoring & Self-Employment, Beauty Parlour Training, and Handicrafts & Home Business Support.</p>
                            <p className="tracking-widest">3DWEBSOFT Foundation prepares students to build careers and assists them with placements. For this, job drives, campus placement fairs, on-the-spot interviews, mock interviews, counseling, and regular follow-ups take place. Through our employer tie-ups, we connect our students directly with hiring partners to open pathways to employment.</p>
                        </div>
                        <img src="/laugher.jpeg" className="w-[500px] max-[1000px]:w-[100vw] max-[1000px]:h-auto h-[300px]"/>
                    </div>
                    <div className="flex flex-col items-start gap-3 max-[1000px]:p-1 pt-10 p-10">
                                    <p className="font-semibold">Skilling Going Virtual:</p>
                                    <p>To ensure that learning can take place anytime and anywhere, 3DWEBSOFT Foundation is extending digital literacy and skill training into rural areas through accessible, hands-on programs that bridge the digital divide. As we move forward, a hybrid model is developing where students have access to both center facilities and online sessions — enabling us to continue our mission of creating deep impact across communities.</p>
                                    <p>Today, the Key Features that make Skilling Programs at 3DWEBSOFT Foundation Stand Out:</p>
                                    <ul className="flex flex-col gap-2 list-disc p-5 w-[60vw] max-[1000px]:w-[90vw]">
                                        <li>5,000+ Beneficiaries — youth and women empowered through our training programs</li>
                                        <li>1,200+ Placements — successful job placements facilitated for community members</li>
                                        <li>10 Years of Experience — dedicated service supporting underprivileged groups</li>
                                        <li>30+ Programs — community, skilling, and awareness programs conducted annually</li>
                                        <li>Certified & Scalable — industry-aligned certified courses on a replicable model for quick deployment in any urban, semi-urban, or rural location</li>
                                    </ul>
                    </div>
                    
            </div>
</div>
{/* footer */}
<Footer/>          
    </div>
  );
}
