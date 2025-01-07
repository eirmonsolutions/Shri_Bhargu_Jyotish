import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Negative_Energy_Removal from '@/components/services-inner/Negative_Energy_Removal';
import React from 'react';

const Page = () => {
  const breadcrumbItems = [
    { label: 'Home', url: '/' },
    { label: 'Services', url: '/services' },
    { label: 'Negative Energy Removal', url: '/negative-energy-removal' },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} title="Negative Energy Removal" />
      <Negative_Energy_Removal />
      <Footer />
    </>
  );
};

export default Page;



export const metadata = {
  title: "Restore Peace with Negative Energy Removal by Ved Shastri",
  description: "Restore peace and harmony in your life by removing negative energies with the expert guidance of Ved Parkash Shastri for a positive transformation.",
  keywords: ["Negative Energy Removal "],
};
