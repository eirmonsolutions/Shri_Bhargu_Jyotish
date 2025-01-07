import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Husband_Wife_Dispute from '@/components/services-inner/Husband_Wife_Dispute';
import React from 'react';

const Page = () => {
  const breadcrumbItems = [
    { label: 'Home', url: '/' },
    { label: 'Services', url: '/services' },
    { label: 'Husband Wife Dispute', url: '/husband-wife-dispute' },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} title="Husband Wife Dispute" />
      <Husband_Wife_Dispute />
      <Footer />
    </>
  );
};

export default Page;



export const metadata = {
  title: "Expert Husband Wife Dispute Solutions by Ved Parkash Shastri",
  description: "Get expert husband-wife dispute solutions from Ved Parkash Shastri to resolve conflicts, restore harmony, and guide your marriage toward peace.",
  keywords: ["Husband Wife Dispute Solutions "],
};
