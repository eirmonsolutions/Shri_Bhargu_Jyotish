import Breadcrumb from '@/components/Breadcrumb';
import Contact_Area from '@/components/Contact_Area';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const Page = () => {
  const breadcrumbItems = [
    { label: 'Home', url: '/' },
    { label: 'Contact', url: '/contact' },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} title="Contact Us" />
      <Contact_Area />
      <Footer />
    </>
  );
};

export default Page;
