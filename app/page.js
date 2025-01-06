import About_Area from '@/components/About_Area';
import Banner_Area from '@/components/Banner_Area';
import Bg_Image from '@/components/Bg_Image';
import Contact_Area from '@/components/Contact_Area';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Other_Services from '@/components/Other_Services';
import Services_Area from '@/components/Services_Area';
import Text_Services_Slide from '@/components/Text_Services_Slide';
import React from 'react';

const page = () => {
  const firstBgImages = [
    { src: "/assets/images/banner-imgs/banner-1.png", alt: "Banner 1" },
  ];

  const secondBgImages = [
    { src: "/assets/images/banner-imgs/banner-1.png", alt: "Banner 2" },
  ];

  return (
    <>
      <Navbar />
      <Text_Services_Slide />
      <Banner_Area />
      <About_Area />
      <Services_Area />
      <Bg_Image images={firstBgImages} />
      <Other_Services />
      <Bg_Image images={secondBgImages} />
      <Contact_Area />
      <Footer />
    </>
  );
};

export default page;

export const metadata = {
  title: "Astro",
  description: "",
  keywords: [""],
  openGraph: {
    title: "Astro",
  },
  alternates: {
    canonical: "",
    shortlink: "",
  },
};
