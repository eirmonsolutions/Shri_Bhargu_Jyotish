import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import One_Side_Love_Solution from '@/components/services-inner/One_Side_Love_Solution';
import React from 'react';

const Page = () => {
  const breadcrumbItems = [
    { label: 'Home', url: '/' },
    { label: 'Services', url: '/services' },
    { label: 'One Side Love Solution', url: '/one-side-love-solution' },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} title="One Side Love Solution" />
      <One_Side_Love_Solution />
      <Footer />
    </>
  );
};

export default Page;


export const metadata = {
  title: "One Side Love Solution: Get Guidance from Ved Parkash Shastri",
  description: "One Side Love Solution by Ved Parkash Shastri offers expert guidance to help you navigate unrequited love and find peace, healing, and clarity.",
  keywords: ["One Side Love Solution"],
};