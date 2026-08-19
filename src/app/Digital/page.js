"use client"
import Image from "next/image";
import { useState,useEffect } from "react";
import Footer from "@/Components/Footer/page";
import Overheadbar from "@/Components/Overhead-bar/page";
import Link from "next/link";
import { ChevronDown,ChevronRight,ChevronLeft, DivideCircle,Check } from "lucide-react";

export default function Digital() {

    
  return (
    <div className="flex flex-col flex-1 gap-0 tracking-widest leading-loose  items-center overflow-x-hidden min-h-screen justify-center bg-white font-sans">
          {/* overhead bar */}
          <Overheadbar/>
          
          {/* main */}
          <div className="flex flex-col gap-20  w-full -mt-10">
            <div className="relative w-full">
            <img src="/negerg1.jpeg" className="w-full h-[790px] max-[887px]:mt-40 object-cover"/>
            <div className="absolute inset-0 z-10 flex flex-col items-center max-[887px]:mt-40 justify-center w-full rounded-lg bg-black/56  text-center text-white">
                  <p className="text-7xl font-extrabold">Digital Sparks Learning Station</p>
                </div>
            </div>
            <div className="p-20 -mt-20 max-[1000px]:p-10 max-[840px]:p-5 font-sans text-black">
              <div className="flex flex-col gap-10">
                <p className="text-3xl text-[#06896B] font-semibold">Digital Sparks Learning Station</p>
                <p>The Digital Sparks Learning Station is 3DWEBSOFT Foundation's own concept for open, self-directed learning — built on the belief that children learn best when curiosity is allowed to lead. The Learning Station is based on a simple but powerful idea: give children in underserved communities free, unsupervised access to technology, and they will teach themselves, and each other, remarkable things.</p>
                <p>The concept places an accessible computer or digital kiosk right in the heart of a community — in a school corridor, a community centre, or a shared public space — where children can walk up and explore freely, without fear or formal instruction. For many children living in urban slums and rural communities, this is their first ever window to computers and the internet, and it opens up a whole new world of possibility.</p>
                <p>The idea rests on a truth we see again and again: children, regardless of their social or economic background, can benefit enormously from simple technology and self-learning when given regular access and opportunity. Such interventions go a long way toward bridging the digital divide. This approach does more than support basic education — it nurtures curiosity, confidence, and key life skills among children who are too often left out of the digital world.</p>
                <p>By placing Digital Sparks kiosks in the middle of the community — in playgrounds, along boundary walls, in school corridors, or inside community buildings — the program's reach and impact can be experienced and witnessed by everyone. The initiative is designed to benefit in-school children, out-of-school children, adolescents, and adult community members alike.</p>
                <p> Through innovative digital technology and reliable connectivity, Digital Sparks aims to make computers and the internet accessible to those who need them most.</p>
              </div>
              <div className="flex  items-center max-[1000px]:flex-col gap-10 pt-10">
                  <div className="flex flex-col gap-7 max-[1000px]:order-2">
                    
                    <p className="text-2xl text-[#06896B] w-[45vw] max-[1000px]:w-[90vw] max-[1000px]:text-center uppercase font-bold">There are many benefits of the Digital Sparks Learning Station:</p>
                    <div className="flex flex-col max-[1000px]:order-2 items-center gap-4 p-10 w-[50vw] max-[1000px]:w-[100vw] min-h-[270px] bg-[#06896B]">
                            <ul className="text-white list-disc flex flex-col gap-3">
                              <li>Enables learning where there are no learning facilities and in remote locations</li>
                              <li>Provides access to technology for children who have never had it</li>
                              <li>Offers access to quality digital and innovative learning content</li>
                              <li>Supports uninterrupted learning, including in areas with unreliable power</li>
                              <li>Promotes gender equality, making no distinction among learners based on gender</li>
                              <li>Helps reduce the number of out-of-school children and improve attendance</li>
                              <li>Encourages high-impact group learning through knowledge sharing</li>
                              <li>Develops 21st-century skills and essential life skills</li>
                            </ul>
                    
                    </div>
                  </div>
                  <div className="flex flex-col gap-4  max-[1000px]:order-1">
                  <img src="/segergal.jpeg" className="w-[45vw] max-[1000px]:w-[100vw]  object-cover h-auto shrink-0"/>
                  <p className="text-center">Through the Digital Sparks Learning Station, 3DWEBSOFT Foundation gives children from rural areas, remote locations, and urban slums the chance to acquire computer literacy at their own pace — sparking a lifelong love of learning and helping bridge the digital divide, one child at a time.</p>
                  </div>
              </div>
              <div className="pt-20 flex flex-col gap-7 max-[1000px]:gap-15  items-center justify-center">
                <p className="text-3xl text-[#06896B] font-bold">This model of the Digital Sparks Learning Station is built on the following framework:</p>
                <div className="grid grid-cols-3 max-[1000px]:grid-cols-2 max-[840px]:grid-cols-1 gap-x-5 gap-y-7">
                  <div className="shadow-md justify-center shadow-gray-400 p-5 w-[27vw] max-[1000px]:w-[45vw] max-[840px]:w-[90vw] min-h-[250px] flex flex-col gap-4 items-center rounded-lg">
                    <Check strokeWidth={4} size={50} className="text-[#06896B]"/>
                    <p className="text-center text-gray-500">Open, self-directed learning stations located in school grounds or shared community spaces</p>
                  </div>
                    <div className="shadow-md justify-center shadow-gray-400 p-5 w-[27vw] max-[1000px]:w-[45vw] max-[840px]:w-[90vw] min-h-[250px] flex flex-col gap-4 items-center rounded-lg">
                    <Check strokeWidth={4} size={50} className="text-[#06896B]"/>
                    <p className="text-center text-gray-500">Installed with rugged, easy-to-use hardware suited to diverse rural and urban settings</p>
                  </div>
                    <div className="shadow-md justify-center shadow-gray-400 p-5 w-[27vw] max-[1000px]:w-[45vw] max-[840px]:w-[90vw] min-h-[250px] flex flex-col gap-4 items-center rounded-lg">
                    <Check strokeWidth={4} size={50} className="text-[#06896B]"/>
                    <p className="text-center text-gray-500">Engaging educational games and content that invite children to learn through exploration</p>
                  </div>
                    <div className="shadow-md justify-center shadow-gray-400 p-5 w-[27vw] max-[1000px]:w-[45vw] max-[840px]:w-[90vw] min-h-[250px] flex flex-col gap-4 items-center rounded-lg">
                    <Check strokeWidth={4} size={50} className="text-[#06896B]"/>
                    <p className="text-center text-gray-500">Content mapped to the school curriculum to support better academic outcomes</p>
                  </div>
                    <div className="shadow-md justify-center shadow-gray-400 p-5 w-[27vw] max-[1000px]:w-[45vw] max-[840px]:w-[90vw] min-h-[250px] flex flex-col gap-4 items-center rounded-lg">
                    <Check strokeWidth={4} size={50} className="text-[#06896B]"/>
                    <p className="text-center text-gray-500">Children working in self-organised groups, helping one another gain functional computer literacy in a short span of time</p>
                  </div>
                    <div className="shadow-md justify-center shadow-gray-400 p-5 w-[27vw] max-[1000px]:w-[45vw] max-[840px]:w-[90vw] min-h-[250px] flex flex-col gap-4 items-center rounded-lg">
                    <Check strokeWidth={4} size={50} className="text-[#06896B]"/>
                    <p className="text-center text-gray-500">Growing interest in learning that generates positive feedback from teachers and the community</p>
                  </div>
                    <div className="shadow-md justify-center shadow-gray-400 p-5 w-[27vw] max-[1000px]:w-[45vw] max-[840px]:w-[90vw] min-h-[250px] flex flex-col gap-4 items-center rounded-lg">
                    <Check strokeWidth={4} size={50} className="text-[#06896B]"/>
                    <p className="text-center text-gray-500">Children from underprivileged communities in rural areas, remote locations, and slums acquiring computer skills largely on their own</p>
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
