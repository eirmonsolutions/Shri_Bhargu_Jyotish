import React from "react";
import Link from "next/link";

const Other_Services = () => {
    const services = [
        {
            title: "Child Problem",
            image: "/assets/images/services-imgs/childlessness.jpg",
            link: "/child-problem",
            phone: "+917717292608",
        },
        {
            title: "Love Marriage",
            image: "/assets/images/services-imgs/childlessness.jpg",
            link: "/love-marriage",
            phone: "+917717292608",
        },
        {
            title: "Job Problem Solution",
            image: "/assets/images/services-imgs/childlessness.jpg",
            link: "/job-problem-solution",
            phone: "+917717292608",
        },
        {
            title: "Business Problem Solution",
            image: "/assets/images/services-imgs/childlessness.jpg",
            link: "/business-problem-solution",
            phone: "+917717292608",
        },
        {
            title: "Extra Marital Affair",
            image: "/assets/images/services-imgs/childlessness.jpg",
            link: "/extra-marital-affair",
            phone: "+917717292608",
        },
        {
            title: "Husband Wife Dispute",
            image: "/assets/images/services-imgs/childlessness.jpg",
            link: "/husband-wife-dispute",
            phone: "+917717292608",
        },
        {
            title: "Black Magic Removal",
            image: "/assets/images/services-imgs/childlessness.jpg",
            link: "/black-magic-removal",
            phone: "+917717292608",
        },
        {
            title: "Negative Energy Removal",
            image: "/assets/images/services-imgs/childlessness.jpg",
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
                            <div className="col-md-3" key={index}>
                                <div className="other-services-box">
                                    <div className="other-services-img">
                                        <img src={service.image} alt={service.title} loading="lazy" />
                                    </div>
                                    <div className="other-services-content">
                                        <h3>
                                            <Link href={service.link}>{service.title}</Link>
                                        </h3>
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
