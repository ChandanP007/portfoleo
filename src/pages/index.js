import { Inter } from "next/font/google";

//Components
import Nav from "@/components/Nav";
import SideMenu from "@/components/SideMenu";
import Main from "@/components/Main";


export default function Home() {
  return (
    <>
      <Nav/>
      <div className="main-container flex">
        <SideMenu/>
        <Main/>
      </div>
    </>
  );
}
