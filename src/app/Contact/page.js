"use client"
import Image from "next/image";
import { useState,useEffect } from "react";
import Footer from "@/Components/Footer/page";
import Overheadbar from "@/Components/Overhead-bar/page";
import Link from "next/link";
import MapEmbed from "@/Components/MapEmbed/page";
import { ChevronDown,ChevronRight,ChevronLeft, DivideCircle,Check } from "lucide-react";

export default function Contact() {
    const [state,setState]=useState("")
    const [partnershipType, setPartnershipType] = useState("")
    const [coursePreference, setCoursePreference] = useState("")
    const [Area, setArea] = useState("")

    const handleChange=(e)=>{
        setState(e.target.value)
    }

    
  return (
    <div className="flex flex-col flex-1 gap-0 tracking-widest  leading-loose  items-center overflow-x-hidden min-h-screen justify-center bg-white font-sans">
          {/* overhead bar */}
          <Overheadbar/>
          
          {/* main */}
          <div className="flex flex-col   w-full items-center -mt-10">
            <div className="relative w-full">
            <img src="/Contuctor.jpeg" className="w-full h-[790px] object-cover"/>
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center w-full rounded-lg bg-black/56  text-center text-white">
                  <p className="text-7xl font-extrabold italic">Contact us</p>
                  <p className="font-semibold text-xl italic">Reach out to us and be a part of someone's future</p>
                </div>
            </div>
            <div className="p-20 font-sans text-black">                      
              <div className="flex max-[1100px]:flex-col gap-7 items-center w-full">
                <div className="flex flex-col gap-5">
                    <p className="text-[#06896B] font-semibold italic text-4xl">Partnerships</p>
                    <p className="w-[25vw] max-[1100px]:w-[90vw]">please write to us at <span className="italic text-[#06896B] w-[25vw]">info.3DWEBSOFTorg@gmail.com</span> to know more about the partnership opportunities.</p>
                </div>
                <div className="flex flex-col gap-5">
                    <p className="text-[#06896B] font-semibold italic text-4xl">Admission</p>
                    <p className="w-[25vw] max-[1100px]:w-[90vw]">please write to us at <span className="italic text-[#06896B] w-[25vw]">info.3DWEBSOFTorg@gmail.com</span> along with your course preference and contact details.</p>
                </div>
                <div className="flex flex-col gap-5">
                    <p className="text-[#06896B] font-semibold italic text-4xl">Volunteering</p>
                    <p className="w-[25vw] max-[1100px]:w-[90vw]">please write to us at <span className="italic text-[#06896B] w-[25vw]">info.3DWEBSOFTorg@gmail.com</span> with your core skills, interest areas and location preference.

</p>
                </div>
              </div>
              <div className="flex flex-col items-center italic pt-10 gap-3">
                        <p className="text-4xl text-[#06896b] font-semibold">OR</p>
                        <p className="w-[80vw] max-[1100px]:w-[90vw] p-2 rounded-lg bg-[#06896b] font-semibold text-center text-white text-3xl">Fill the form below</p>
              </div>
              <div className="flex flex-col items-center  pt-20 gap-8">
                <p className="text-[#06896b] font-semibold italic text-4xl">For Partnerships:</p>
                <div className="grid grid-cols-3 max-[900px]:grid-cols-1  gap-x-5 gap-y-5">
                    <select
                        value={state}
                        name="Type of partnership"
                        onChange={handleChange}
                        className="w-[25vw] max-[900px]:w-[90vw] h-[50px] text-center border rounded-lg border-gray-800"
                    >
                        <option value="" disabled>
                            Select type of partnership
                        </option>
                        <option value="candidates for placement">candidates for placement</option>
                        <option value="csr project for implementation">csr project for implementation</option>
                        <option value="others">others</option>
                    </select>
                    <input placeholder="Contact Person Name" className="w-[25vw] max-[900px]:w-[90vw]  h-[50px] text-center border rounded-lg border-gray-800"/>
                    <input placeholder="Contact Number" className="w-[25vw] max-[900px]:w-[90vw] h-[50px] text-center border rounded-lg border-gray-800"/>
                    <input placeholder="Email Id" className="w-[25vw] max-[900px]:w-[90vw] h-[50px] text-center border rounded-lg border-gray-800"/>
                    <input placeholder="Company Name" className="w-[25vw] max-[900px]:w-[90vw] h-[50px] text-center border rounded-lg border-gray-800"/>
                    <input placeholder="Remarks" className="w-[25vw] max-[900px]:w-[90vw] h-[50px] text-center border rounded-lg border-gray-800"/>
                </div>
                <button className="w-fit px-4 py-2 rounded-lg text-white bg-[#06996b]">Submit</button>
              </div>
               <div className="flex flex-col items-center  pt-20 gap-8">
                <p className="text-[#06896b] font-semibold italic text-4xl">For Admission Inquiry:</p>
                <div className="grid grid-cols-3 max-[900px]:grid-cols-1 gap-x-5 gap-y-5">
                    <select
                        value={coursePreference}
                        name="Type of partnership"
                        onChange={(e)=>setCoursePreference(e.target.value)}
                        className="w-[25vw] max-[900px]:w-[90vw] h-[50px] text-center border rounded-lg border-gray-800"
                    >
                        <option value="" disabled>
                            Course preference
                        </option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="E-commerce">E-commerce</option>
                        <option value="Web-Deevelopment">Web-Development</option>
                        <option value="Voice and Non-voice process">Voice and Non-voice process</option>
                        <option value="Backend">Backend</option>
                        <option value="Fullstack">Fullstack</option>
                        <option value="others">others</option>
                    </select>
                    <input placeholder="City" className="w-[25vw] max-[900px]:w-[90vw] h-[50px] text-center border rounded-lg border-gray-800"/>
                    <input placeholder="Student Name" className="w-[25vw] max-[900px]:w-[90vw] h-[50px] text-center border rounded-lg border-gray-800"/>
                    <input placeholder="Contact Number" className="w-[25vw] max-[900px]:w-[90vw] h-[50px] text-center border rounded-lg border-gray-800"/>
                    <input placeholder="Email-Id" className="w-[25vw] max-[900px]:w-[90vw] h-[50px] text-center border rounded-lg border-gray-800"/>
                    <input placeholder="Remarks" className="w-[25vw] max-[900px]:w-[90vw] h-[50px] text-center border rounded-lg border-gray-800"/>
                </div>
                <button className="w-fit px-4 py-2 rounded-lg text-white bg-[#06996b]">Submit</button>
              </div>
               <div className="flex flex-col items-center  pt-20 gap-8">
                <p className="text-[#06896b] font-semibold italic text-4xl">For NGO Partnership:</p>
                <div className="grid grid-cols-3  max-[900px]:grid-cols-1 gap-x-5 gap-y-5">
                    <input placeholder="Your NGO Name" className="w-[25vw] max-[900px]:w-[90vw] h-[50px] text-center border rounded-lg border-gray-800"/>
                    <input placeholder="Contact Person Name" className="w-[25vw] max-[900px]:w-[90vw] h-[50px] text-center border rounded-lg border-gray-800"/>
                    <input placeholder="Contact Number" className="w-[25vw] max-[900px]:w-[90vw] h-[50px] text-center border rounded-lg border-gray-800"/>
                    <input placeholder="City" className="w-[25vw] max-[900px]:w-[90vw] h-[50px] text-center border rounded-lg border-gray-800"/>
                    <input placeholder="Email" className="w-[25vw] max-[900px]:w-[90vw] h-[50px] text-center border rounded-lg border-gray-800"/>
                    <input placeholder="Remarks" className="w-[25vw] max-[900px]:w-[90vw] h-[50px] text-center border rounded-lg border-gray-800"/>
                </div>
                <button className="w-fit px-4 py-2 rounded-lg text-white bg-[#06996b]">Submit</button>
                
                
              </div>
               <div className="flex flex-col items-center  pt-20 gap-8">
                <p className="text-[#06896b] font-semibold italic text-4xl">Be a Volunteer:</p>
                <div className="grid grid-cols-3  max-[900px]:grid-cols-1 gap-x-5 gap-y-5">
                    <select
                        value={partnershipType}
                        name="Type of partnership"
                        onChange={(e)=>setPartnershipType(e.target.value)}
                        className="w-[25vw] max-[900px]:w-[90vw] h-[50px] text-center border rounded-lg border-gray-800"
                    >
                        <option value="" disabled>
                            State
                        </option>
                        <option value="candidates for placement">Telangana</option>
                        <option value="csr project for implementation">Maharashtra</option>
                        <option value="others">Karnataka</option>
                        <option value="others">Others</option>
                    </select>
                    <input placeholder="Volunteer Name" className="w-[25vw] max-[900px]:w-[90vw] h-[50px] text-center border rounded-lg border-gray-800"/>
                    <input placeholder="Contact Number" className="w-[25vw] max-[900px]:w-[90vw] h-[50px] text-center border rounded-lg border-gray-800"/>
                    <input placeholder="Email Id" className="w-[25vw] max-[900px]:w-[90vw] h-[50px] text-center border rounded-lg border-gray-800"/>
                    <input placeholder="City" className="w-[25vw] max-[900px]:w-[90vw] h-[50px] text-center border rounded-lg border-gray-800"/>
                    <select
                        value={Area}
                        name="Type of partnership"
                        onChange={(e)=>setArea(e.target.value)}
                        className="w-[25vw] max-[900px]:w-[90vw] h-[50px] text-center border rounded-lg border-gray-800"
                    >
                        <option value="" disabled>
                            Area of Interest
                        </option>
                        <option value="candidates for placement">English Training</option>
                        <option value="csr project for implementation">IT Training</option>
                        <option value="Soft Skills Training">Soft Skills Training</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Human Resource">Human Resource</option>
                        <option value="Content Writing">Content Writing</option>
                        <option value="others">Others</option>
                    </select>
                </div>
                <button className="w-fit px-4 py-2 rounded-lg text-white bg-[#06996b]">Submit</button>
                
                
              </div>
              
              
              
              
              <div className="flex pt-20 max-[900px]:flex-col">
                <MapEmbed className=""/>
                <div className="w-[50vw] bg-[#06896B] rounded-lg flex text-white flex-col gap-7 items-center p-10  justify-center max-[900px]:w-[90vw]">
                        <p className="font-bold text-4xl">Registered Office:</p>
                        <div className="h-2 bg-white w-[70px]">
                            
                        </div>
                        <div className="flex flex-col gap-3">
                            <p>Head Office:- Plot No. 2-69/6 Near</p>
                            <p>Gowtham Model School, Market</p>
                            <p>Road, Narsingi Telangana - 500089</p>
                        </div>
                </div>
              </div>
              <div></div>
                  </div>

</div>
{/* footer */}
<Footer/>          
    </div>
  );
}
