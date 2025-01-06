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
