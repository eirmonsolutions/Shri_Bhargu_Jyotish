import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Family_Dispute from '@/components/services-inner/Family_Dispute';
import React from 'react';

const Page = () => {
  const breadcrumbItems = [
    { label: 'Home', url: '/' },
    { label: 'Services', url: '/services' },
    { label: 'Family Dispute', url: '/family-dispute' },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} title="Family Dispute" />
      <Family_Dispute />
      <Footer />
    </>
  );
};

export default Page;


export const metadata = {
  title: "Family Dispute Solutions for Harmony by Ved Parkash Shastri",
  description: "Family Dispute Solutions by Ved Parkash Shastri help resolve conflicts and restore harmony in your home with expert guidance and Vedic remedies.",
  keywords: ["Family Dispute Solutions"],
};

