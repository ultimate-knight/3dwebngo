"use client"
import Image from "next/image";
import { useState,useEffect } from "react";
import Footer from "@/Components/Footer/page";
import Overheadbar from "@/Components/Overhead-bar/page";
import Link from "next/link";
import { ChevronDown,ChevronRight,ChevronLeft, DivideCircle } from "lucide-react";

export default function Future() {

    
  return (
    <div className="flex flex-col flex-1 leading-loose gap-0 tracking-widest  items-center overflow-x-hidden min-h-screen justify-center bg-white font-sans">
          {/* overhead bar */}
          <Overheadbar/>
          
          {/* main */}
          <div className="flex flex-col   w-full -mt-10">
            <div className="relative w-full">
            <img src="/kergoling.jpeg" className="w-full h-[790px] max-[887px]:mt-20 object-cover"/>
            <div className="absolute inset-0 z-10 flex flex-col items-center max-[887px]:mt-20 justify-center w-full rounded-lg bg-black/56  text-center text-white">
                  <p className="text-7xl font-extrabold">Future Tech School Program</p>
                </div>
            </div>
                        
            <div className="flex flex-col gap-7 items-center text-black  p-15 max-[1070px]:p-10">
                <div className="w-[88vw] flex max-[1200px]:flex-col max-[800px]:w-[100vw] gap-5 p-10 bg-gray-100 min-h-[600px] rounded-3xl">
                                <div className="flex max-[1200px]:order-2 flex-col justify-start gap-5">
                                    <p>Technology has always been at the forefront of development — whether individual or national. Access to information technology is strongly linked to a higher standard of living, better skills, and greater career advancement. Following the COVID-19 pandemic, the use of technology in everyday life has risen sharply.</p>
                                    <p>Government schemes, banking transactions, job applications, and college admissions have all moved online to improve accessibility and transparency, ultimately benefiting citizens. Yet a significant digital divide persists in our country, especially for those living in isolated or remote areas.</p>
                                    <p>People in these areas are typically less exposed to technology and are at a disadvantage when it comes to reaping its full benefits. Such locations often have limited electricity and internet access, and few people who are digitally skilled. Because these places are difficult to reach or sparsely populated, no trainers or classes are available, and many citizens remain digitally illiterate.</p>
                                    <p>During our outreach, 3DWEBSOFT Foundation also found that women and girls were often unable to travel or leave their communities to study. The ideal solution to these challenges was clear: bring knowledge and learning directly to their doorstep.</p>
                                    <p>From this idea, 3DWEBSOFT Foundation created the Future Tech School Program — to bridge the digital divide between the privileged and the underprivileged.</p>
                                </div>
                                <img src="/gergalgi.jpeg" className="w-[40vw] max-[1200px]:w-[90vw] max-[1200px]:order-1 object-cover h-auto"/>
                </div>

                <div className="flex flex-col gap-5 p-15">
                    
                    <div className="w-[88vw] flex flex-col gap-5 items-center justify-center  min-h-[300px] max-[800px]:w-[100vw] rounded-3xl bg-gray-200 p-5">
                                <ul className="list-disc flex flex-col gap-3 p-5">
                                    <li>Through the Future Tech School Program, 3DWEBSOFT Foundation brings cutting-edge mobile classrooms that deliver IT courses, assessment, and certification — along with access to a world of information and knowledge — right to students in remote areas. Each solar-powered mobile classroom is designed to include the following features:</li>
                                        <li>16 to 20 computers</li>
                                        <li>Video conferencing and webinar facilities</li>
                                        <li>Printing solutions</li>
                                        <li>Software and e-learning tools to deliver training</li>
                                        <li>Trained facilitators to run the courses</li>
                                </ul>
                    </div>
                </div>
                <div className="flex flex-col items-center max-[1000px]:items-start ">
                    <p className="text-4xl">The program has five components to it:</p>
                    <div className="grid grid-cols-5 max-[800px]:-ml-15 gap-x-20 max-[800px]:grid-cols-1 max-[1070px]:gap-x-10 max-[1070px]:grid-cols-2 gap-y-10 items-center w-full text-white p-15 max-[1070px]:p-5 max-[800px]:p-5">
                        <div className="w-[15vw] max-[800px]:w-[100vw] max-[1070px]:w-[43vw] flex flex-col items-center justify-center bg-[#06896B] rounded-2xl text-center p-5 min-h-[200px]">
                            <p className="text-center font-semibold">Providing digital literacy at the village doorstep</p>
                        </div>
                        <div className="w-[15vw] max-[800px]:w-screen max-[1070px]:w-[45vw] flex flex-col items-center justify-center bg-[#06896B] rounded-2xl  min-h-[200px]">
                            <p className="text-center font-semibold">IT education</p>
                        </div>
                        <div className="w-[15vw] max-[800px]:w-screen max-[1070px]:w-[43vw] flex flex-col items-center justify-center p-10 bg-[#06896B] rounded-2xl min-h-[200px]">
                            <p className="text-center font-semibold">Entrepreneurship development</p>
                        </div>
                        <div className="w-[15vw] max-[800px]:w-screen max-[1070px]:w-[45vw]  flex flex-col items-center justify-center p-10 bg-[#06896B] rounded-2xl h-[200px]">
                            <p className="text-center font-semibold">Common public utility services.</p>
                        </div>
                        <div className="w-[15vw] max-[800px]:w-screen max-[1070px]:w-[43vw] flex flex-col items-center justify-center bg-[#06896B] rounded-2xl h-[200px]">
                            <p className="text-center font-semibold">Dissemination of government policies and schemes</p>
                        </div>
                        
                    </div>
                </div>
                <div className="flex flex-col gap-5 items-center justify-center">
                    <p className="text-4xl">The Key Objectives of the program are:</p>
                    <div className="flex max-[1000px]:flex-col max-[1000px]:gap-6 items-center p-5 gap-3 w-[80vw] max-[1000px]:w-[100vw]  bg-gray-200 min-h-[550px] rounded-2xl">
                            <div className=" flex flex-col justify-center items-center border border-8 border-black w-[40vw] max-[1000px]:w-[90vw] p-10 min-h-[400px]">
                                <ul className="flex flex-col items-start  text-xl gap-4 list-disc">
                                    <li>Reducing the digital divide for those living in remote areas</li>
                                    <li>Building awareness of computers as a window to knowledge</li>
                                    <li>Creating linkages to government programs and initiatives</li>
                                    <li>Enhancing interest levels in learning</li>
                                    <li>Introducing a multidisciplinary approach to education</li>
                                </ul>
                            </div>
                            <div className=" flex flex-col justify-start max-[1000px]:justify-center items-center border border-8 border-black w-[40vw] max-[1000px]:w-[90vw] p-10 min-h-[400px]">
                                <ul className="flex flex-col items-start   text-xl gap-4 list-disc">
                                    <li>Using computers as a tool for everyday tasks</li>
                                    <li>Encouraging collaborative learning</li>
                                    <li>Developing interpersonal skills</li>
                                    <li>Spreading technology awareness across rural communities</li>
                                    <li>Providing equal opportunities for rural youth</li>
                                </ul>
                            </div>
                    </div>
                </div>
                <div className="flex flex-col gap-30 max-[800px]:gap-20 p-5  items-center justify-center pt-20">
                    <p className="text-2xl font-medium text-center text-[#06896B] font-semibold">3DWEBSOFT Foundation follows a systematic process to bring the Future Tech School Program to villages:</p>
                    <div className="flex gap-8 max-[1000px]:flex-col max-[1000px]:gap-10 items-center justify-center bg-gray-200 min-w-screen p-5 min-h-[300px]">
                        <div className="flex flex-col max-[1000px]:order-2 gap-5 w-[55vw] max-[1000px]:w-[90vw]">
                            <p className="text-2xl font-semibold">1. Village Mapping and Community Engagement:</p>
                            <p className="">As a first step, villages are identified and mapped. Regular meetings are held with school administrators and community members to raise awareness of the program and enrol students. Community-building and rapport-building activities are conducted on an ongoing basis.</p>
                        </div>
                        <img src="/futuring1.jpeg" className="w-[30vw] h-auto max-[1000px]:w-[90vw]"/>
                    </div>
                     <div className="flex gap-8 max-[1000px]:flex-col items-center max-[1000px]:gap-10 justify-center bg-gray-200 min-w-screen p-5 min-h-[300px]">
                        
                        <img src="/futuring2.jpeg" className="w-[30vw] max-[1000px]:w-[90vw] h-auto"/>
                        <div className="flex flex-col gap-5 w-[55vw] max-[1000px]:w-[90vw]">
                            <p className="text-2xl font-semibold">2. Student Counselling and Enrollment:</p>
                            <p className="">Students are then enrolled and given career counselling, which helps them discover their strengths, talents, and interests so they can make informed decisions. Facilitators hold special sessions for adults to show the value technology can add to their lives. Women are encouraged to enrol through the support and example of other women in the community. Certified courses — covering digital literacy, advanced IT, and entrepreneurship development — are then delivered.</p>
                        </div>
                    </div>
                     <div className="flex gap-8 max-[1000px]:flex-col items-center justify-center bg-gray-200 min-w-screen p-5 min-h-[300px]">
                        <div className="flex flex-col  gap-5 w-[55vw] max-[1000px]:w-[90vw] max-[1000px]:order-2">
                            <p className="text-2xl font-semibold">3. Video Conferencing and Guest Sessions:</p>
                            <p className="">The mobile classroom is equipped with video-conferencing capabilities, used by 3DWEBSOFT Foundation to sensitise, capacitate, and empower communities on issues such as women's empowerment, financial literacy, medical consultation, job opportunities, the environment, and seasonal health awareness.</p>
                        </div>
                        <img src="/futuring3.jpeg" className="w-[30vw] max-[1000px]:w-[90vw] max-[1000px]:order-1 h-auto"/>
                    </div>
                     <div className="flex gap-8 max-[1000px]:flex-col items-center justify-center bg-gray-200 min-w-screen p-5 min-h-[300px]">
                        <img src="/futuring7.jpeg" className="w-[30vw] h-auto max-[1000px]:w-[90vw]"/>
                        <div className="flex flex-col gap-5 w-[55vw] max-[1000px]:w-[90vw] max-[1000px]:order-2">
                            <p className="text-2xl font-semibold">4. Development of Support Groups:</p>
                            <p className="">Facilitators also help community members form support groups made up of students from different batches who have completed the program's courses. These groups help one another learn new skills, revise course content, apply for government assistance, and provide social support. Support groups have played an especially important role in advancing inclusivity and gender equality by helping more girls and women continue their education.</p>
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
