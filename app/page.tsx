import Image from "next/image";
import Header from "../components/header";
import Offerings from "../components/offerings";
import Process from "../components/process";
import HomeContact from "../components/home-contact";

export default function Home() {
  return (
    <>
    <Header />
    <Offerings />
    <Process />
    <HomeContact />
    </>
  );
}
