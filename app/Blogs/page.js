import Image from "next/image";
import styles from "../page.module.css";
import Footer from "@/components/Footer.js"
import Header from "@/components/Header.js"
export default function Services() {
    return (
        <>
            <Header />
            <main>
                <section>
                    <div className={styles.container}>
                        <img src="roof (2).png" alt="Background Image" className={styles.backgroundimage} style={{height:"50vh"}}/>
                        <div className={styles.overlays}>
                            <div className={styles.content}>
                                <h1 className={styles.h1}>Blog Page</h1>
                                <p style={{ wordWrap: "break-word" }} className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit Turpis
                                    ridiculus tellus.hdfhfhf</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="text-center py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 mb-4">
                                <div className="card h-100 shadow-sm">
                                    <img src="services (1).png" alt="Card image" className="card-img-top" />
                                    <div className="card-body">
                                        <h2 className="card-title" style={{ color: "black" }}>How to Handle Unexpected Situations on Road</h2>
                                        <p className={`${styles.carddescription} ${styles.p}`}>Tincidunt Maur nemi sit Interdum praesent eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.</p>
                                        <hr className="my-4" style={{ color: 'rgb(178, 192, 200)' }} />
                                        <a href="#" className="text-secondary" style={{ textDecoration: 'none' }}>READ MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card h-100 shadow-sm">
                                    <img src="services (2).png" alt="Card image" className="card-img-top" />
                                    <div className="card-body">
                                        <h2 className="card-title" style={{ color: "black" }}>Roofing Surveys Paints Optimistic Outlook</h2>
                                        <p className={`${styles.carddescription} ${styles.p}`}>Tincidunt Maur nemi sit Interdum praesent eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.</p>
                                        <hr className="my-4" style={{ color: 'rgb(178, 192, 200)' }} />
                                        <a href="#" className="text-secondary" style={{ textDecoration: 'none' }}>READ MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card h-100 shadow-sm">
                                    <img src="services (3).png" alt="Card image" className="card-img-top" />
                                    <div className="card-body">
                                        <h2 className="card-title" style={{ color: "black" }}>Roofing are Fact Make Easier 10 Reason</h2>
                                        <p className={`${styles.carddescription} ${styles.p}`}>Tincidunt Maur nemi sit Interdum praesent eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.</p>
                                        <hr className="my-4" style={{ color: 'rgb(178, 192, 200)' }} />
                                        <a href="#" className="text-secondary" style={{ textDecoration: 'none' }}>READ MORE</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-4">
                                <div className="card h-100 shadow-sm">
                                    <img src="services (4).png" alt="Card image" className="card-img-top" />
                                    <div className="card-body">
                                        <h2 className="card-title" style={{ color: "black" }}>All Important Info On Flat Roofing</h2>
                                        <p className={`${styles.carddescription} ${styles.p}`}>Suspendisse varius etiam est vitae dui tempus nec vitae orci sodales metus velit nec at diam in sed.</p>
                                        <hr className="my-4" style={{ color: 'rgb(178, 192, 200)' }} />
                                        <a href="#" className="text-secondary" style={{ textDecoration: 'none' }}>READ MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card h-100 shadow-sm">
                                    <img src="services (5).png" alt="Card image" className="card-img-top" />
                                    <div className="card-body">
                                        <h2 className="card-title" style={{ color: "black" }}>Installing The New Roofing Systems By Experts</h2>
                                        <p className={`${styles.carddescription} ${styles.p}`}>Suspendisse varius etiam est vitae dui tempus nec vitae orci sodales metus velit nec at diam in sed.</p>
                                        <hr className="my-4" style={{ color: 'rgb(178, 192, 200)' }} />
                                        <a href="#" className="text-secondary" style={{ textDecoration: 'none' }}>READ MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card h-100 shadow-sm">
                                    <img src="services (6).png" alt="Card image" className="card-img-top" />
                                    <div className="card-body">
                                        <h2 className="card-title" style={{ color: "black" }}>How to Handle Unexpected Situations on Road</h2>
                                        <p className={`${styles.carddescription} ${styles.p}`}>Suspendisse varius etiam est vitae dui tempus nec vitae orci sodales metus velit nec at diam in sed.</p>
                                        <hr className="my-4" style={{ color: 'rgb(178, 192, 200)' }} />
                                        <a href="#" className="text-secondary" style={{ textDecoration: 'none' }}>READ MORE</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-4">
                                <div className="card h-100 shadow-sm">
                                    <img src="roof (2).png" alt="Card image" className="card-img-top" />
                                    <div className="card-body">
                                        <h2 className="card-title" style={{ color: "black" }}>Importance Of Expert Engineer By Roofer</h2>
                                        <p className={`${styles.carddescription} ${styles.p}`}>Suspendisse varius etiam est vitae dui tempus nec vitae orci sodales metus velit nec at diam in sed.</p>
                                        <hr className="my-4" style={{ color: 'rgb(178, 192, 200)' }} />
                                        <a href="#" className="text-secondary" style={{ textDecoration: 'none' }}>READ MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card h-100 shadow-sm">
                                    <img src="roof (1).png" alt="Card image" className="card-img-top" />
                                    <div className="card-body">
                                        <h2 className="card-title" style={{ color: "black" }}>Durable Roofing Solutions Importance</h2>
                                        <p className={`${styles.carddescription} ${styles.p}`}>Suspendisse varius etiam est vitae dui tempus nec vitae orci sodales metus velit nec at diam in sed.</p>
                                        <hr className="my-4" style={{ color: 'rgb(178, 192, 200)' }} />
                                        <a href="#" className="text-secondary" style={{ textDecoration: 'none' }}>READ MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card h-100 shadow-sm">
                                    <img src="roof (3).png" alt="Card image" className="card-img-top" />
                                    <div className="card-body">
                                        <h2 className="card-title" style={{ color: "black" }}>All About Custom Roofing Design</h2>
                                        <p className={`${styles.carddescription} ${styles.p}`}>Suspendisse varius etiam est vitae dui tempus nec vitae orci sodales metus velit nec at diam in sed.</p>
                                        <hr className="my-4" style={{ color: 'rgb(178, 192, 200)' }} />
                                        <a href="#" className="text-secondary" style={{ textDecoration: 'none' }}>READ MORE</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

        </>
    );
}
