import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Black_Magic_Removal from '@/components/services-inner/Black_Magic_Removal';
import React from 'react';

const Page = () => {
  const breadcrumbItems = [
    { label: 'Home', url: '/' },
    { label: 'Services', url: '/services' },
    { label: 'Black Magic Removal', url: '/black-magic-removal' },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} title="Black Magic Removal" />
      <Black_Magic_Removal />
      <Footer />
    </>
  );
};

export default Page;


export const metadata = {
  title: "Black Magic Removal Services for Happiness by Ved Shastri",
  description: "Experience Black Magic Removal Services by Ved Parkash Shastri to eliminate dark energies, restore balance, and bring happiness and peace to your life.",
  keywords: ["Black Magic Removal Services  "],
};
