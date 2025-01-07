import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Love_Marriage from '@/components/services-inner/Love_Marriage';
import React from 'react';

const Page = () => {
  const breadcrumbItems = [
    { label: 'Home', url: '/' },
    { label: 'Services', url: '/services' },
    { label: 'Love Marriage', url: '/love-marriage' },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} title="Love Marriage" />
      <Love_Marriage />
      <Footer />
    </>
  );
};

export default Page;



export const metadata = {
  title: "Love Marriage Solutions for Couples by Ved Parkash Shastri",
  description: "Love Marriage Solutions by Ved Parkash Shastri help couples overcome challenges, offering expert guidance for a successful and harmonious relationship.",
  keywords: ["Love Marriage Solutions"],
};
