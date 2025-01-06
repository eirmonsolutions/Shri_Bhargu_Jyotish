import Bg_Image from '@/components/Bg_Image';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Other_Services from '@/components/Other_Services';
import Services_Area from '@/components/Services_Area';
import React from 'react';

const Page = () => {
  const firstBgImages = [
    { src: "/assets/images/banner-imgs/banner-1.png", alt: "Banner 1" },
  ];
  const breadcrumbItems = [
    { label: 'Home', url: '/' },
    { label: 'Services', url: '/services' },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} title="Services" />
      <Services_Area />
      <Bg_Image images={firstBgImages} />
      <Other_Services />
      <Footer />
    </>
  );
};

export default Page;
