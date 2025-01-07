import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Love_Problem_Solution from '@/components/services-inner/Love_Problem_Solution';
import React from 'react';

const Page = () => {
  const breadcrumbItems = [
    { label: 'Home', url: '/' },
    { label: 'Services', url: '/services' },
    { label: 'Love Problem Solution', url: '/love-problem-solution' },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} title="Love Problem Solution" />
      <Love_Problem_Solution />
      <Footer />
    </>
  );
};

export default Page;


export const metadata = {
  title: "Get Expert Love Problem Solutions from Ved Parkash Shastri",
  description: "Get expert love problem solutions from Ved Parkash Shastri to resolve relationship issues, bring harmony, and restore love and peace in your life.",
  keywords: ["Expert Love Problem Solution"],
};