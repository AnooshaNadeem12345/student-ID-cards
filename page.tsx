"use client"
import Image from "next/image";
import {Card} from "./components/card";
import {useRouter} from 'next/navigation';
// import "./app/global.css";
export default function Home() {
  const route=useRouter()
  return (  
     <div className="flex flex-col justify-around sapce-x-4 ">
      <Card name="Anoosha" age="18" rollno="487917" classTime="monday (2-5) "/>
     <Card name="Atrooba" age="32" rollno="274211" classTime="wednesday (9-12)"/>
      <Card name="Ali" age="26" rollno="897987" classTime="friday (6-10)"/>
     </div>
   
);
}


