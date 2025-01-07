import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Breakup_Problem from '@/components/services-inner/Breakup_Problem';
import React from 'react';

const Page = () => {
  const breadcrumbItems = [
    { label: 'Home', url: '/' },
    { label: 'Services', url: '/services' },
    { label: 'Breakup Problem', url: '/breakup-problem' },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} title="Breakup Problem" />
      <Breakup_Problem />
      <Footer />
    </>
  );
};

export default Page;

export const metadata = {
  title: "Breakup Solutions by Ved Parkash Shastri: Start Your Healing Journey",
  description: "Breakup Solutions by Ved Parkash Shastri help you heal emotional wounds, find peace, and move forward in life with expert guidance and support.",
  keywords: ["Breakup Solutions"],
};