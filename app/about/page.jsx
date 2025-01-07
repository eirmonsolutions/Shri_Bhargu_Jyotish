import About_Page_Data from '@/components/about-page/About_Page_Data';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const Page = () => {
  const breadcrumbItems = [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} title="About Us" />
      <About_Page_Data />
      <Footer />
    </>
  );
};

export default Page;

export const metadata = {
  title: "Ved Parkash Shastri: Expert Astrologer for Love, Family, Business & Life Problem Solutions",
  description: "Ved Parkash Shastri offers expert Vedic astrology solutions for love, family, business, and life challenges, helping you achieve peace and success.",
};


