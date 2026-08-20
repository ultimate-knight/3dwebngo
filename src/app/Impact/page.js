"use client"
import Image from "next/image";
import { useState,useEffect } from "react";
import Curved from "@/Components/Curved/page";
import Footer from "@/Components/Footer/page";
import Overheadbar from "@/Components/Overhead-bar/page";
import Link from "next/link";
import { ChevronDown,ChevronRight,ChevronLeft, DivideCircle } from "lucide-react";

export default function Impact() {

    
  return (
    <div className="flex flex-col flex-1 leading-loose gap-0 tracking-widest  items-center overflow-x-hidden min-h-screen justify-center bg-white font-sans">
          {/* overhead bar */}
          <Overheadbar/>
          
          {/* main */}
          <div className="flex flex-col   w-full -mt-10">
            <div className="relative w-full">
            <img src="/empowering.jpeg" className="w-full h-[790px] max-[887px]:mt-20 object-cover"/>
            <div className="absolute inset-0 z-10 flex flex-col max-[887px]:mt-20 items-center justify-center w-full rounded-lg bg-black/56  text-center text-white">
                  <p className="text-7xl font-extrabold">Impact stories</p>
                </div>
            </div>
                        
            <div className=" text-black  p-15 max-[1000px]:p-5 mt-10">
                    <div className="flex gap-10 max-[1000px]:flex-col items-center">
                        <img src="/ravi.jpeg" alt="image coming wait" className="w-[23vw] max-[1000px]:w-[90vw] shrink-0 h-[370px] max-[1000px]:h-auto"/>
                        <div className="flex gap-5">
                            <Curved/>
                            <div className="flex flex-col max-[1000px]:w-[90vw] justify-center gap-4 min-w-0 flex-1">
                                <p className="text-[#06896B] font-bold text-3xl">Ravi</p>
                                <p className="w-[45vw] max-[1000px]:w-[90vw]">Ravi grew up in a family where money was always tight, and becoming financially independent quickly was his biggest goal."</p>
                                <p className="w-[45vw] max-[1000px]:w-[90vw]"> He heard about 3DWebSoft Foundation and the courses offered at our centre, discussed the options with his family, and enrolled in the Web Development Foundation course. The training gave him direction and confidence.</p>
                                <p className="w-[45vw] max-[1000px]:w-[90vw]"> Today he works as a junior frontend developer and continues to build his skills, believing that "success isn't in the result — it's in giving your best every single day.</p>
                            </div>
                        </div>
                    </div>
                    
                                </div>
                                <div className=" text-black  p-15">
                    <div className="flex max-[1000px]:flex-col gap-10 items-center">
                        <img src="/sana.jpeg" alt="image coming wait" className="w-[23vw] max-[1000px]:w-[90vw] max-[1000px]:h-auto shrink-0 h-[370px] object-cover"/>
                        <div className="flex gap-5">
                            <Curved/>
                            <div className="flex flex-col max-[1000px]:w-[90vw] justify-center gap-4 min-w-0 flex-1">
                                <p className="text-[#06896B] font-bold text-3xl">Sana</p>
                                <p className="w-[45vw] max-[1000px]:w-[90vw]">Sana is a homemaker from a small town who had studied up to Class X. She had stopped working for several years after marriage and was eager to do something with her life.</p>
                                <p className="w-[45vw] max-[1000px]:w-[90vw]"> She joined the Digital Literacy and Spoken English course at our centre. Soon after, she was hired at a local startup handling customer support and data entry.</p>
                                <p className="w-[45vw] max-[1000px]:w-[90vw]">The course helped her gain the confidence to read, communicate, and take on responsibility at work.</p>
                            </div>
                        </div>
                    </div>
                    
                                </div>
                                <div className=" text-black   p-15">
                    <div className="flex gap-10 max-[1000px]:flex-col items-center">
                        <img src="/imran.jpeg" alt="image coming wait" className="w-[23vw] max-[1000px]:w-[90vw] max-[1000px]:h-auto shrink-0 h-[370px] object-cover"/>
                        <div className="flex gap-5">
                            <Curved/>
                            <div className="flex flex-col justify-center max-[1000px]:w-[90vw] gap-4 min-w-0 flex-1">
                                <p className="text-[#06896B] font-bold text-3xl">Imran</p>
                                <p className="w-[45vw] max-[1000px]:w-[90vw]">During a community mobilization drive, our team met a group of young men with no clear direction. One of them, Imran, visited the centre a few days later and joined our Basic IT & Coding course.</p>
                                <p className="w-[45vw] max-[1000px]:w-[90vw]">With the encouragement of his trainer and his own discipline, he attended regularly and completed a career-counselling session.</p>
                                <p className="w-[45vw] max-[1000px]:w-[90vw]"> Inspired, he started freelancing in basic web design and now earns a steady monthly income while continuing to upskill.</p>
                            </div>
                        </div>
                    </div>
                    
                                </div>
                                <div className=" text-black  p-15">
                    <div className="flex gap-10 max-[1000px]:flex-col items-center">
                        <img src="/lakshmi96.jpeg" alt="image coming wait" className="w-[23vw] max-[1000px]:w-[90vw] max-[1000px]:h-auto shrink-0 h-[370px] object-cover"/>
                        <div className="flex gap-5">
                            <Curved/>
                            <div className="flex flex-col justify-center max-[1000px]:w-[90vw] gap-4 min-w-0 flex-1">
                                <p className="text-[#06896B] font-bold text-3xl">Lakshmi</p>
                                <p className="w-[45vw] max-[1000px]:w-[90vw]">Lakshmi is the eldest sibling in a family facing real hardship. Despite the odds, she completed her graduation and wanted to work.</p>
                                <p className="w-[45vw] max-[1000px]:w-[90vw]"> By chance she came across 3DWebSoft Foundation at a local community event and enrolled soon after.</p>
                                <p className="w-[45vw] max-[1000px]:w-[90vw]"> By the end of the Data Entry & Office Tools course, she had begun tutoring school students, and now runs her own small coaching classes from home while supporting her family.</p>
                            </div>
                        </div>
                    </div>
                    
                                </div>
                                <div className=" text-black  p-15">
                    <div className="flex gap-10 max-[1000px]:flex-col items-center">
                        <img src="/arjun.jpeg" alt="image coming wait" className="w-[23vw] max-[1000px]:w-[90vw] max-[1000px]:h-auto shrink-0 h-[370px] object-cover"/>
                        <div className="flex gap-5">
                            <Curved/>
                            <div className="flex flex-col justify-center gap-4 min-w-0 flex-1">
                                <p className="text-[#06896B] font-bold text-3xl">Arjun</p>
                                <p className="w-[45vw] max-[1000px]:w-[90vw]">Arjun always had a curiosity for computers but no clear path. When he came to our centre, the trainers counselled him on his options and he enrolled in the Coding Fundamentals course.</p>
                                <p className="w-[45vw] max-[1000px]:w-[90vw]">His journey wasn't smooth — the professional terms and hands-on practice were new to him — but he was determined.</p>
                                <p className="w-[45vw] max-[1000px]:w-[90vw]">Today he works as a backend support executive and mentors newer students in his free time.</p>
                            </div>
                        </div>
                    </div>
                    
                                </div>
                                
</div>
{/* footer */}
<Footer/>          
    </div>
  );
}
