import React from "react";
import Link from "next/link";

const Other_Services = () => {
    const services = [
        {
            title: "Child Problem",
            description: "Get the best solution for your child problem with the help of astrology.",
            image: "/assets/images/services-imgs/child-problem.jpg",
            link: "/child-problem",
            phone: "+917717292608",
        },
        {
            title: "Love Marriage",
            description:"Get the best solution for your love marriage problem with the help of astrology.",
            image: "/assets/images/services-imgs/love-marriage.jpg",
            link: "/love-marriage",
            phone: "+917717292608",
        },
        {
            title: "Job Problem Solution",
            description: "Get the best solution for your job problem with the help of astrology.",
            image: "/assets/images/services-imgs/job-problem-solution.jpg",
            link: "/job-problem-solution",
            phone: "+917717292608",
        },
        {
            title: "Business Problem Solution",
            description: "Get the best solution for your business problem with the help of astrology.",
            image: "/assets/images/services-imgs/business-problem-solution.jpg",
            link: "/business-problem-solution",
            phone: "+917717292608",
        },
        {
            title: "Extra Marital Affair",
            description: "Get the best solution for your extra marital affair problem with the help of astrology.",
            image: "/assets/images/services-imgs/extra-marital-affair.jpg",
            link: "/extra-marital-affair",
            phone: "+917717292608",
        },
        {
            title: "Husband Wife Dispute",
            description: "Get the best solution for your husband wife dispute problem with the help of astrology.",
            image: "/assets/images/services-imgs/husband-wife-dispute.jpg",
            link: "/husband-wife-dispute",
            phone: "+917717292608",
        },
        {
            title: "Black Magic Removal",
            description: "Get the best solution for your black magic removal with the help of astrology." ,
            image: "/assets/images/services-imgs/black-magic-removal.jpg",
            link: "/black-magic-removal",
            phone: "+917717292608",
        },
        {
            title: "Negative Energy Removal",
            description: "Get the best solution for your negative energy removal with the help of astrology.",
            image: "/assets/images/services-imgs/negative-energy-removal.jpg",
            link: "/negative-energy-removal",
            phone: "+917717292608",
        },
    ];


    return (
        <>
            <section className="other-services-area">
                <div className="container">
                    <div className="section-heading">
                        <h3>Other Services</h3>
                    </div>
                    <div className="row">
                        {services.map((service, index) => (
                            <div className="col-md-6 col-lg-3" key={index}>
                                <div className="other-services-box">
                                    <div className="other-services-img">
                                        <img src={service.image} alt={service.title} loading="lazy" />
                                    </div>
                                    <div className="other-services-content">
                                        <h3>
                                            <Link href={service.link}>{service.title}</Link>
                                        </h3>

                                        <p>{service.description}</p>
                                        <Link href={`tel:${service.phone}`} className="as_btn">
                                            {service.phone}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Other_Services;
