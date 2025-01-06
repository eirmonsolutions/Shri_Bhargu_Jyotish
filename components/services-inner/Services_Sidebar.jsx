import React from 'react';
import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";
const Services_Sidebar = () => {
    return (
        <>

            <div className="services-list-area">
                <ul>
                    <li><Link href="/love-problem-solution">Love Problem Solution <span className='icon-right-arrow'><FaArrowRightLong /></span></Link></li>
                    <li><Link href="/one-side-love-solution">One Side Love Solution <span className='icon-right-arrow'><FaArrowRightLong /></span></Link></li>
                    <li><Link href="/breakup-problem">Breakup Problem <span className='icon-right-arrow'><FaArrowRightLong /></span></Link></li>
                    <li><Link href="/ex-love-back">Ex Love Back <span className='icon-right-arrow'><FaArrowRightLong /></span></Link></li>
                    <li><Link href="/family-dispute">Family Dispute <span className='icon-right-arrow'><FaArrowRightLong /></span></Link></li>
                    <li><Link href="/grah-kalesh">Grah Kalesh <span className='icon-right-arrow'><FaArrowRightLong /></span></Link></li>
                    <li><Link href="/child-problem">Child Problem <span className='icon-right-arrow'><FaArrowRightLong /></span></Link></li>
                    <li><Link href="/love-marriage">Love Marriage <span className='icon-right-arrow'><FaArrowRightLong /></span></Link></li>
                    <li><Link href="/job-problem-solution">Job Problem Solution <span className='icon-right-arrow'><FaArrowRightLong /></span></Link></li>
                    <li><Link href="/business-problem-solution">Business Problem Solution <span className='icon-right-arrow'><FaArrowRightLong /></span></Link></li>
                    <li><Link href="/extra-marital-affair">Extra Marital Affair <span className='icon-right-arrow'><FaArrowRightLong /></span></Link></li>
                    <li><Link href="/husband-wife-dispute">Husband Wife Dispute <span className='icon-right-arrow'><FaArrowRightLong /></span></Link></li>
                    <li><Link href="/black-magic-removal">Black Magic Removal <span className='icon-right-arrow'><FaArrowRightLong /></span></Link></li>
                    <li><Link href="/negative-energy-removal">Negative Energy Removal <span className='icon-right-arrow'><FaArrowRightLong /></span></Link></li>
                </ul>
            </div>
        </>
    )
}

export default Services_Sidebar