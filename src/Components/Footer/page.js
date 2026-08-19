

import {
  
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  
  
} from "react-icons/fa";
import { MapPin,PhoneCallIcon,MessageSquare } from 'lucide-react';

import Link from "next/link";





export default function Footer(){
  return (
    <div className="w-full flex  tracking-widest  justify-between items-start  p-10  min-h-[400px] mt-20 bg-blue-950">
          <div className="flex flex-col gap-6">
            <div className="flex gap-5 items-center">
              <img src="/images2.jpeg" className="rounded-tr-4xl w-[70px]"/>
              <p className="text-2xl font-bold">3DWEBSOFT Foundation</p>
            </div>
            <p className="w-[30vw]">Empowering communities across India through education, skill development, women empowerment, and community initiatives.</p>
            <p>CNI REG NO: U85499TS2026NPL220500</p>
              <p>DARPAN ID: TS/2026/1176375</p>
             <div className="flex gap-3">
                           <p className="bg-blue-600 p-3 rounded-lg"><FaFacebookF/></p>
                  <p className="bg-blue-600 p-3 rounded-lg bg-pink-300"><FaInstagram/></p>
                  <p className="bg-blue-600 p-3 rounded-lg"><FaTwitter/></p>
                  <p className="bg-red-600 p-3 rounded-lg"><FaYoutube/></p>
                  <p className="bg-blue-600 p-3 rounded-lg"><FaLinkedinIn/></p>
                      </div>
                      
                      <div className="flex flex-col gap-3">
                        <p className="font-semibold">Subscribe to our newsletter</p>
                        <div className="flex gap-5">
                          <input placeholder="enter your email" className="rounded-lg p-2 text-gray-700 bg-white"/>
                          <button className="w-fit p-2  rounded-lg text-white bg-[#06896B]">Subscribe</button>
                        </div>
                        
                      </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-[#06896B] font-bold text-lg">Quick Links</p>
            <div className="flex flex-col gap-3">
              <Link href="/" className="hover:text-[#06896B] hover:translate-x-3 transform-transition duration-300">Home</Link>
               <Link href="/About" className="hover:text-[#06896B] hover:translate-x-3 transform-transition duration-300">About Us</Link>
                <Link href="/Contact" className="hover:text-[#06896B] hover:translate-x-3 transform-transition duration-300">Volunteer</Link>
                 <Link href="/Donate" className="hover:text-[#06896B] hover:translate-x-3 transform-transition duration-300">Donate</Link>
                  <Link href="/Learn" className="hover:text-[#06896B] hover:translate-x-3 transform-transition duration-300">Learn-lms</Link>
                   <Link href="/Contact" className="hover:text-[#06896B] hover:translate-x-3 transform-transition duration-300">Join us</Link>
            </div>
          </div>
           <div className="flex flex-col gap-6">
            <p className="text-[#06896B] font-bold text-lg">Explore</p>
            <div className="flex flex-col gap-3">
              <Link href="/Blog" className="hover:text-[#06896B] hover:translate-x-3 transform-transition duration-300">Blogs</Link>
               <Link href="/Gallery" className="hover:text-[#06896B] hover:translate-x-3 transform-transition duration-300">Gallery</Link>
                <Link href="/FAQ" className="hover:text-[#06896B] hover:translate-x-3 transform-transition duration-300">FAQ</Link>
                
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[#06896B] font-bold text-lg">Contact us</p>
            <div className="flex flex-col gap-7">
           
              <div className="flex gap-2">
                <MapPin className="text-[#06896b] mt-2"/>
                <p className="w-[20vw]">Head Office:- Plot No. 2-69/6 Near Gowtham Model School, Market Road, Narsingi Telangana - 500089</p>
              </div>
               <div className="flex gap-2">
                <PhoneCallIcon className="text-[#06896b] mt-2"/>
                <p>+91 8374972501</p>
                <p>+91 9381192595</p>
              </div>
              <div className="flex gap-2">
                <MessageSquare className="mt-1 text-[#06896b]"/>
                <div className="flex flex-col gap-1">
                  <p>info@3DWEBSOFTitsolutions,</p>
                  <p>ceo@3DWEBSOFTitsolutions,</p>
                  <p>hr@3DWEBSOFTitsolutions,</p>
                  <p>contact@3DWEBSOFTitsolutions</p>
                </div>
                
              </div>
                 
            </div>
          </div>
     </div>
  )
}