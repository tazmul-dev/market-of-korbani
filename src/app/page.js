import Image from "next/image";
import logo from '@/assers/logo.png'
import Hero from "@/component/homePages/Hero";
import Fetured from "@/component/homePages/Fetured";
import QurbaniTips from "@/component/homePages/QurbaniTips";
import Breed from "@/component/homePages/Breed";
export default function Home() {
  return (
    <div className="animate__animated animate__fadeIn">
     <Hero></Hero>
     <Fetured></Fetured>
     <Breed></Breed>
     <QurbaniTips></QurbaniTips>
    </div>
  );
}
