import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Extra_Marital_Affair from '@/components/services-inner/Extra_Marital_Affair';
import React from 'react';

const Page = () => {
  const breadcrumbItems = [
    { label: 'Home', url: '/' },
    { label: 'Services', url: '/services' },
    { label: 'Extra Marital Affair', url: '/extra-marital-affair' },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} title="Extra Marital Affair" />
      <Extra_Marital_Affair />
      <Footer />
    </>
  );
};

export default Page;



export const metadata = {
  title: "Expert Help to Solve Extra Marital Affair Issues by Ved Shastri",
  description: "Get expert help from Ved Parkash Shastri to solve extra marital affair issues, restore harmony, and guide you toward a peaceful resolution.",
  keywords: ["Solve Extra Marital Affair "],
};
