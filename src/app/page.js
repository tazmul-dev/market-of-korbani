import Image from "next/image";
import logo from '@/assers/logo.png'
import Hero from "@/component/homePages/Hero";
import Fetured from "@/component/homePages/Fetured";
import QurbaniTips from "@/component/homePages/QurbaniTips";
export default function Home() {
  return (
    <div>
     <Hero></Hero>
     <Fetured></Fetured>
     <QurbaniTips></QurbaniTips>
    </div>
  );
}
