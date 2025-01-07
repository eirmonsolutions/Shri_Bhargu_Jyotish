import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Child_Problem from '@/components/services-inner/Child_Problem';
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
      <Child_Problem />
      <Footer />
    </>
  );
};

export default Page;


export const metadata = {
  title: "Child Problem Solutions for a Better Future by Ved Shastri",
  description: "Child Problem Solutions by Ved Parkash Shastri provide expert guidance to address behavioral, emotional, or academic issues, ensuring a brighter future.",
  keywords: ["Child Problem Solutions"],
};

