import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Business_Problem_Solution from '@/components/services-inner/Business_Problem_Solution';
import React from 'react';

const Page = () => {
  const breadcrumbItems = [
    { label: 'Home', url: '/' },
    { label: 'Services', url: '/services' },
    { label: 'Business Problem Solution', url: '/business-problem-solution' },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} title="Business Problem Solution" />
      <Business_Problem_Solution />
      <Footer />
    </>
  );
};

export default Page;


export const metadata = {
  title: "Business Problem Solutions for a Bright Future with Ved Parkash Shastri",
  description: "business Problem Solutions by Ved Parkash Shastri offer expert guidance to overcome challenges and ensure a bright, prosperous future for your business.",
  keywords: ["Business Problem Solutions"],
};