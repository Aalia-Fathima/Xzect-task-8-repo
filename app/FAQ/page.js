'use client'
import Image from "next/image";
import React from 'react';
import styles from "../page.module.css";
import Footer from "@/components/Footer.js"
import Header from "@/components/Header.js"
import CollapsibleDiv from '@/components/CollapseDiv.js';
export default function Contact() {
    return (
        <>
            <Header />
            <main>
                <section className="position-relative">
                <Image src="/contact.png" alt="image"  width={400} height={450} className="w-100" style={{ height: "50vh", objectFit: "cover" }}/>

                    <div className={`position-absolute top-50 start-50 translate-middle text-center ${styles.overlays}`}>
                        <div className={styles.content}>
                            <h1 className={styles.h1}>Frequently Asked Question</h1>
                            <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit Turpis ridiculus tellus.hdfhfhf</p>
                        </div>
                    </div>
                </section>
                <section className="container my-5">
                    <div className="row g-4">
                        <div className="col-md-6">
                            <p className="text-danger">FAQ’S</p>
                            <h2 className="fw-bold">Frequently Asked<br />
                                Question</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipiscing integer ultrices suspendisse varius etiam est.</p>
                            <CollapsibleDiv />
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
            </main>
            <Footer />
        </>
    );
}