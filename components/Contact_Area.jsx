import React from 'react'
import Contact_Form from './Contact_Form'

const Contact_Area = () => {
    return (
        <>

            <section className="contact-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-lg-6">
                            <div className="contact-img">
                                <img src="/assets/images/contact-img.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <Contact_Form />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact_Area;