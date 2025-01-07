import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Grah_Kalesh from '@/components/services-inner/Grah_Kalesh';
import React from 'react';

const Page = () => {
  const breadcrumbItems = [
    { label: 'Home', url: '/' },
    { label: 'Services', url: '/services' },
    { label: 'Grah Kalesh', url: '/grah-kalesh' },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} title="Grah Kalesh" />
      <Grah_Kalesh />
      <Footer />
    </>
  );
};

export default Page;


export const metadata = {
  title: "Find Peace with Grah Kalesh Solutions by Ved Parkash Shastri",
  description: "Find peace and harmony at home with Grah Kalesh solutions by Ved Parkash Shastri, offering expert guidance and remedies to resolve family conflicts.",
  keywords: ["Grah Kalesh Solutions"],
};
