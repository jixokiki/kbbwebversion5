"use client";
import NavbarAdmin from "@/components/NavbarAdmin";
import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { useRouter } from "next/navigation";
import Image from "next/image";
import NavbarGudang from "@/components/NavbarGudang";
import Footer from "@/components/Footer";

const Gudang = () => {
  const { user, userProfile } = useAuth();
  const router = useRouter();

  const [gudangName, setGudangName] = useState("");
  useEffect(() => {
    if (user && userProfile.role === "user") {
      router.push("/");
    } else if (user && userProfile.role === "delivery") {
      router.push("/delivery");
    }else if (user && userProfile.role === "admin") {
      // Jika user adalah admin, kita dapat menampilkan alert selamat datang
      // dan menampilkan nama admin dari userProfile
      alert("Selamat datang, " + userProfile.name);
      setAdminName(userProfile.name);
    }else if (user && userProfile.role === "gudang") {
      // Jika user adalah admin, kita dapat menampilkan alert selamat datang
      // dan menampilkan nama admin dari userProfile
      alert("Selamat datang, " + userProfile.name);
      setGudangName(userProfile.name);
    }
  }, [user, userProfile, router]);
  return (
    <div>
      <div className="px-7 py-1 mt-14">
      <NavbarGudang />
      <div className="flex mt-16 py-14 flex-col items-center">
        <Image
          src={"/assets/kbbLogo.jpeg"}
          width={1000 / 2}
          height={1125 / 4}
          alt="Logo"
        />
        <h1 className="text-3xl">Selamat Datang Di Halaman Gudang</h1>
        {gudangName && <p>Gudang: {gudangName}</p>}
      </div>
    {/* <div className="flex mt-1 justify-center items-center h-screen"> */}
      {/* <NavbarGudang /> */}
      {/* <div className="flex flex-col items-center">
        <Image
          src={"/assets/kbbLogo.jpeg"}
          width={1000 / 2}
          height={1125 / 4}
          alt="Logo"
        />
        <h1 className="text-3xl">Welcome To Gudang Page</h1>
        {gudangName && <p>Gudang: {gudangName}</p>}
      </div> */}
    </div>
    <Footer/>
    </div>
  );
};

export default Gudang;
