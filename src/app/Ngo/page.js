"use client"
import Image from "next/image";
import { useState,useEffect } from "react";
import Footer from "@/Components/Footer/page";
import Overheadbar from "@/Components/Overhead-bar/page";
import Link from "next/link";
import { ChevronDown,ChevronRight,ChevronLeft, DivideCircle } from "lucide-react";

export default function Ngo() {

    
  return (
    <div className="flex flex-col flex-1 leading-loose gap-0 tracking-widest  items-center overflow-x-hidden min-h-screen justify-center bg-white font-sans">
          {/* overhead bar */}
          <Overheadbar/>
          
          {/* main */}
          <div className="flex flex-col   w-full -mt-10">
            <div className="relative w-full">
            <img src="/ngorg.jpeg" className="w-full h-[790px] max-[887px]:mt-20 object-cover"/>
            <div className="absolute inset-0 z-10 flex flex-col items-center  max-[887px]:mt-20 justify-center w-full rounded-lg bg-black/56  text-center text-white">
                  <p className="text-7xl font-extrabold">NGO Partners</p>
                </div>
            </div>
                        
            <div className="flex flex-col gap-20 text-black  p-15 max-[1000px]:mt-10 max-[1000px]:p-5">
                    <div className="flex flex-col items-start justify-center gap-20">
                        <div className="flex flex-col gap-7">
                    <p className="text-[#06896B] font-bold text-3xl">3DReach Program</p>
                    <p className="w-[90vw]">3DWebSoft Foundation, through its 3DReach Program, works to build the capacity of partner NGOs that are providing training and education opportunities to underprivileged youth across the country. </p>
                    <p>Under 3DReach, we equip our partners with all the support they need to implement high-quality programs that create real benefit for young people.</p>
                    <p> Faculty training, curriculum, assessments, and industry-recognized certification are some of the key offerings we provide to partner organizations.</p>
                   
                    
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className="uppercase text-[#06896B] font-bold text-3xl">3DReach Partner Process</p>
                        <ul className="flex flex-col gap-3 list-disc pl-10">
                            <li>Organizations undergo a detailed selection process.</li>
                            <li>Selected partners enter into an agreement with 3DWebSoft Foundation.</li>
                            <li>Training is provided to the faculty of the partner organization.</li>
                            <li>Mapped courseware is delivered to the partner organization. Partners can choose from a variety of courses — including skill training, career courses, digital literacy, and school IT lab programs — depending on the beneficiary profile and requirements.</li>
                            <li>Regular handholding and follow-up support is provided to the partner NGO throughout.</li>
                        </ul>
                        </div>
                    </div>
            </div>
            <div className="flex flex-col gap-8 items-center">
                    <p className="text-3xl font-bold text-[#06896B]">Key NGO Partners</p>
                    <div className="grid grid-cols-4 max-[500px]:grid-cols-1 max-[800px]:grid-cols-2  max-[1090px]:grid-cols-3 gap-x-20 gap-y-6">
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/magicbus.jpeg" className="object-cover"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/casp.jpeg" className="min-h-full object-contain"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/talwar.jpeg"  className="h-full object-contain"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] max-[500px]:hidden h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/sleepwell.jpg"  className="h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] max-[500px]:hidden h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/deepalaya.jpeg"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/earth.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/prayatna.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/cks.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/lakshya.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/sakashm.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/smile.png"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/reach.png"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/Niveda.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/Udaan.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/Noda.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/nab.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/adarshila23.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/rotary.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/youthinvest.jpeg"  className="min-h-full"/>
                        </div>
                    </div>
            </div>
</div>
{/* footer */}
<Footer/>          
    </div>
  );
}
