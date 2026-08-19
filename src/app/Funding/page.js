"use client"
import Image from "next/image";
import { useState,useEffect } from "react";
import Footer from "@/Components/Footer/page";
import Overheadbar from "@/Components/Overhead-bar/page";
import Link from "next/link";
import { ChevronDown,ChevronRight,ChevronLeft, DivideCircle } from "lucide-react";

export default function Funding() {

    
  return (
    <div className="flex flex-col flex-1 leading-loose gap-0 tracking-widest  items-center overflow-x-hidden min-h-screen justify-center bg-white font-sans">
          {/* overhead bar */}
          <Overheadbar/>
          
          {/* main */}
          <div className="flex flex-col   w-full -mt-10">
            <div className="relative w-full">
            <img src="/Funder.jpeg" className="w-full h-[790px] max-[887px]:mt-40 object-cover"/>
            <div className="absolute inset-0 z-10 flex flex-col items-center max-[887px]:mt-40 justify-center w-full rounded-lg bg-black/56  text-center text-white">
                  <p className="text-7xl font-extrabold">Funding Partners</p>
                </div>
            </div>
                        
            <div className="flex flex-col gap-20 text-black  p-15 max-[1000px]:p-5 mt-10">
                    <div className="flex flex-col gap-5">
                    <p className="text-[#06896B] font-bold text-3xl">PARTNER WITH 3DWEBSOFT FOUNDATION</p>
                    <p className="w-[80vw] max-[1000px]:w-[90vw]">At 3DWebSoft Foundation, we deeply value our collaborations with the funding partners who support us in our mission to eliminate unemployment and digital illiteracy across India. 3DWebSoft Foundation has well-defined, technology-driven systems and processes in place to deliver skill-development and empowerment programs at the grassroots level. We are committed to ensuring a high level of transparency, which builds the credibility and accountability that define every project we deliver with our corporate partners.</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className="uppercase text-[#06896B] font-bold text-3xl">Reasons to partner with us:</p>
                        <ul className="flex flex-col gap-3 list-disc pl-10">
                            <li>A trusted and dedicated partner to manage and execute your CSR projects.</li>
                            <li>Complete transparency and accountability at every stage.</li>
                            <li>Greater social impact by maximizing the reach of your philanthropic investment.</li>
                            <li>Strong community presence with deep local roots.</li>
                            <li>Scalable and replicable programs designed for long-term change.</li>
                        </ul>
                    </div>
            </div>
            <div className="flex flex-col gap-8 items-center p-40 max-[1090px]:p-10 max-[800px]:p-5">
                    <p className="text-3xl font-bold text-[#06896B]">Key Funding Partners</p>
                    <div className="grid grid-cols-4 max-[500px]:grid-cols-1 max-[800px]:grid-cols-2  max-[1090px]:grid-cols-3 gap-x-20 gap-y-6">
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/infoedge.jpeg" className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw]  h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/chiratae.jpeg" className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/omidyar.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/lightspeed.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/venture.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/orios.jpeg"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/kalaari.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/sequioa.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/ivycap.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/stellaris.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/blume.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/ankur.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/accel.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/matrix.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/eppendorf.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/cipla.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/hdfc.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/persistent.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/praj.jpeg"  className="min-h-full"/>
                        </div>
                        <div className="w-[200px] max-[500px]:w-[90vw] h-[200px] border-1 flex flex-col items-center justify-center border-black object-cover  rounded-lg">
                            <img src="/intox.jpeg"  className="min-h-full"/>
                        </div>
                    </div>
            </div>
</div>
{/* footer */}
<Footer/>          
    </div>
  );
}
