"use client"
import Image from "next/image";
import { useState,useEffect } from "react";
import Footer from "@/Components/Footer/page";
import Overheadbar from "@/Components/Overhead-bar/page";
import Link from "next/link";
import { ChevronDown,ChevronRight,ChevronLeft, DivideCircle } from "lucide-react";

export default function Placement() {

    
  return (
    <div className="flex flex-col flex-1 leading-loose gap-0 tracking-widest  items-center overflow-x-hidden min-h-screen justify-center bg-white font-sans">
          {/* overhead bar */}
          <Overheadbar/>
          
          {/* main */}
          <div className="flex flex-col   w-full -mt-10">
            <div className="relative w-full">
            <img src="/Placementer.jpeg" className="w-full  h-[790px] max-[887px]:mt-20 object-cover"/>
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center max-[887px]:mt-20 w-full rounded-lg bg-black/56  text-center text-white">
                  <p className="text-7xl font-extrabold max-[500px]:text-2xl">Placement Partners</p>
                </div>
            </div>
                        
            <div className="flex flex-col gap-20 text-black  p-15 max-[1000px]:mt-10 max-[1000px]:p-5 ">
                    <div className="flex flex-col items-start justify-center gap-20">
                        <div className="flex flex-col gap-7">
                    <p className="text-[#06896B] font-bold text-3xl max-[500px]:text-2xl">RECRUITMENT OF 3DWEBSOFT FOUNDATION STUDENTS</p>
                    <p className="w-[90vw] max-[500px]:text-sm">3DWebSoft Foundation runs training programs that provide industry-focused vocational and technology courses. Our objective is to open doors to employment in the organized industry for under-served youth. Students at our centers get trained in a range of professional and industry-specific skill courses.</p>
                    <p className="max-[500px]:text-sm"> We believe these young people will transform their own lives and those of their families when they enter the workforce and go on to lead productive, independent lives. Placement Partners who give these youth an opportunity and the support to grow therefore play a vital role in the entire ecosystem.</p>
                    <p className="w-[90vw] max-[500px]:text-sm">Our training programs combine rigorous theoretical learning with essential life-skills development that helps students perform well in interviews and in the workplace. Our placement partners have consistently been satisfied with how 3DWebSoft Foundation alumni adapt to and thrive in the professional space.</p>
                    
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className="uppercase text-[#06896B] font-bold text-3xl max-[500px]:text-2xl">Why recruit 3DWebSoft Foundation students?</p>
                        <ul className="flex flex-col gap-3 list-disc pl-10 max-[500px]:text-sm">
                            <li>Industry-recognized, structured courses that make students job-ready upon completion.</li>
                            <li>Exposure to real-world industry examples and practical, work-relevant projects during training, so students are better prepared for the workplace.</li>
                            <li>Life-skills training built into every course, helping students build confidence, communication, and a well-rounded professional personality.</li>
                            
                        </ul>
                        </div>
                    </div>
            </div>
            <div className="flex flex-col gap-8 items-center">
                    <p className="text-3xl font-bold text-[#06896B] p-5">Key Placement Partners</p>
                    <div className="grid grid-cols-4 max-[500px]:grid-cols-1 max-[800px]:grid-cols-2  max-[1090px]:grid-cols-3 gap-x-20 gap-y-6">
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/tcs.jpeg" className="object-cover"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/infosys.jpeg" className="min-h-full object-contain"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/wipro.jpeg"  className="h-full object-contain"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/accenture.jpeg"  className="h-full object-contain"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/vision95.jpeg"  className="h-[240px] object-contain"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/google.jpeg"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/ibm.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/oracle23.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/amazon3.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/dell.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/intel.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/salesforce.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/zoho.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/cognizant.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/hcl.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/techmahindra.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/microsoft23.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/3dwebsoft.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/zensar.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/l&t.jpeg"  className="min-h-full"/>
                        </div>
                    </div>
            </div>
</div>
{/* footer */}
<Footer/>          
    </div>
  );
}
