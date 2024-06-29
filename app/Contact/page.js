'use client'
import Image from "next/image";
import React from 'react';
import styles from "../page.module.css";
import Footer from "@/components/Footer.js"
import Header from "@/components/Header.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import dynamic from 'next/dynamic';
const Map = dynamic(() => import('@/components/Map'), { ssr: false });

export default function Contact() {
    return (
        <>
            <Header />
            <main>
                <section className="position-relative">
                    <img src="contact.png" alt="Background Image" className="w-100" style={{ height: "50vh", objectFit: "cover" }} />
                    <div className={`position-absolute top-50 start-50 translate-middle text-center ${styles.overlays}`}>
                        <div className={styles.content}>
                            <h1 className={styles.h1}>CONTACT US</h1>
                            <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit Turpis ridiculus tellus.hdfhfhf</p>
                        </div>
                    </div>
                </section>
                <section className="container my-5">
                    <div className="row g-4">
                        <div className="col-md-6">
                            <p className="text-danger">CONTACT INFO</p>
                            <h2 className="fw-bold">Get In Touch</h2>
                            <p>Eros proin nibh neque interdum accumsan, neque vitae. Tortor etiam sed suspendise faucibus volutpat mattis tortor nec.</p>
                            <div className="d-flex gap-3 py-3">
                                <div className="bg-danger rounded-circle d-flex justify-content-center align-items-center" style={{ width: "90px", height: "90px" }}>
                                    <FontAwesomeIcon icon={faLocationDot} className="text-white" size="2x" />
                                </div>
                                <div>
                                    <h3 className="fw-bold">Our Location</h3>
                                    <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                                </div>
                            </div>
                            <div className="d-flex gap-3 py-3">
                                <div className="bg-danger rounded-circle d-flex justify-content-center align-items-center" style={{ width: "90px", height: "90px" }}>
                                    <FontAwesomeIcon icon={faEnvelope} className="text-white" size="2x" />
                                </div>
                                <div>
                                    <h3 className="fw-bold">Email Address</h3>
                                    <p>contact@example.com<br />support@example.com</p>
                                </div>
                            </div>
                            <div className="d-flex gap-3 py-3">
                                <div className="bg-danger rounded-circle d-flex justify-content-center align-items-center" style={{ width: "90px", height: "90px" }}>
                                    <FontAwesomeIcon icon={faPhoneVolume} className="text-white" size="2x" />
                                </div>
                                <div>
                                    <h3 className="fw-bold">Phone Number</h3>
                                    <p>Emergency Cases<br />+(208) 555-0112 (24/7)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 text-center p-5" style={{backgroundColor:"#e5e9f0"}}>
                            <p className="text-danger">BOOKING FORM</p>
                            <h3>Send Us Message</h3>
                            <form action="#" method="POST" className="mt-4">
                                <div className="mb-3">
                                    <input type="text" name="name" placeholder="Name" required className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <input type="email" name="email" placeholder="Your Email" required className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" name="phone" placeholder="Phone Number" required className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <textarea name="message" placeholder="Type Message" required className="form-control" rows="5"></textarea>
                                </div>
                                <button type="submit" className="btn btn-danger">SEND YOUR MESSAGE</button>
                            </form>
                        </div>
                    </div>
                </section>
                <Map />
            </main>
            <Footer />
        </>
    );
}
