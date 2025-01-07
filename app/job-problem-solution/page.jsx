import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Job_Problem_Solution from '@/components/services-inner/Job_Problem_Solution';
import React from 'react';

const Page = () => {
  const breadcrumbItems = [
    { label: 'Home', url: '/' },
    { label: 'Services', url: '/services' },
    { label: 'Job Problem Solution', url: '/job-problem-solution' },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} title="Job Problem Solution" />
      <Job_Problem_Solution />
      <Footer />
    </>
  );
};

export default Page;


export const metadata = {
  title: "Career Growth: Job Problem Solutions by Ved Parkash Shastri",
  description: "Career growth and job problem solutions by Ved Parkash Shastri help overcome challenges and guide you toward success with expert remedies and advice.",
  keywords: ["Job Problem Solutions"],
};