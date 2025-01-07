import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Ex_Love_Back from '@/components/services-inner/Ex_Love_Back';
import React from 'react';

const Page = () => {
  const breadcrumbItems = [
    { label: 'Home', url: '/' },
    { label: 'Services', url: '/services' },
    { label: 'Ex Love Back', url: '/ex-love-back' },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} title="Ex Love Back" />
      <Ex_Love_Back />
      <Footer />
    </>
  );
};

export default Page;

export const metadata = {
  title: "Ex Love Back Solutions: Rebuild Your Relationship with Ved Shastri",
  description: "Ex Love Back solution by Ved Parkash Shastri helps you rekindle your past relationship with expert guidance, healing, and cosmic remedies for a fresh start.",
  keywords: ["Ex Love Back Solutions"],
};
