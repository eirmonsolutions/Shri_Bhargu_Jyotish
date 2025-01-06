import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Love_Problem_Solution from '@/components/services-inner/Love_Problem_Solution';
import React from 'react';

const Page = () => {
  const breadcrumbItems = [
    { label: 'Home', url: '/' },
    { label: 'Services', url: '/services' },
    { label: 'Child Problem', url: '/child-problem' },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} title="Child Problem" />
      <Love_Problem_Solution />
      <Footer />
    </>
  );
};

export default Page;
