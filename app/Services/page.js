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
                    <Image src="/roof (1).png" alt="image"  width={400} height={450} className={styles.backgroundimage} style={{height:"50vh"}}/>
                       
                        <div className={styles.overlays}>
                            <div className={styles.content}>
                                <h1 className={styles.h1}>OUR SERVICES</h1>
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
                                <Image src="/services (1).png" alt="image"  width={400} height={250} className="card-img-top"/>
                                  
                                    <div className="card-body">
                                        <h2 className="card-title" style={{ color: "black" }}>Roofing Layer</h2>
                                        <p className={`${styles.carddescription} ${styles.p}`}>Tincidunt Maur nemi sit Interdum praesent eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.</p>
                                        <hr className="my-4" style={{ color: 'rgb(178, 192, 200)' }} />
                                        <a href="#" className="text-secondary" style={{ textDecoration: 'none' }}>READ MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card h-100 shadow-sm">
                                <Image src="/services (2).png" alt="image"  width={400} height={250} className="card-img-top"/>
                                    
                                    <div className="card-body">
                                        <h2 className="card-title" style={{ color: "black" }}>Damage Repair</h2>
                                        <p className={`${styles.carddescription} ${styles.p}`}>Tincidunt Maur nemi sit Interdum praesent eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.</p>
                                        <hr className="my-4" style={{ color: 'rgb(178, 192, 200)' }} />
                                        <a href="#" className="text-secondary" style={{ textDecoration: 'none' }}>READ MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card h-100 shadow-sm">
                                <Image src="/services (3).png" alt="image"  width={400} height={250} className="card-img-top"/>
                                   
                                    <div className="card-body">
                                        <h2 className="card-title" style={{ color: "black" }}>Roof Cornering</h2>
                                        <p className={`${styles.carddescription} ${styles.p}`}>Tincidunt Maur nemi sit Interdum praesent eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.</p>
                                        <hr className="my-4" style={{ color: 'rgb(178, 192, 200)' }} />
                                        <a href="#" className="text-secondary" style={{ textDecoration: 'none' }}>READ MORE</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-4">
                                <div className="card h-100 shadow-sm">
                                <Image src="/services (4).png" alt="image"  width={400} height={250} className="card-img-top"/>
                                   
                                    <div className="card-body">
                                        <h2 className="card-title" style={{ color: "black" }}>Siding Install</h2>
                                        <p className={`${styles.carddescription} ${styles.p}`}>Suspendisse varius etiam est vitae dui tempus nec vitae orci sodales metus velit nec at diam in sed.</p>
                                        <hr className="my-4" style={{ color: 'rgb(178, 192, 200)' }} />
                                        <a href="#" className="text-secondary" style={{ textDecoration: 'none' }}>READ MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card h-100 shadow-sm">
                                <Image src="/services (5).png" alt="image"  width={400} height={250} className="card-img-top"/>
                                 
                                    <div className="card-body">
                                        <h2 className="card-title" style={{ color: "black" }}>Corner Fixing</h2>
                                        <p className={`${styles.carddescription} ${styles.p}`}>Suspendisse varius etiam est vitae dui tempus nec vitae orci sodales metus velit nec at diam in sed.</p>
                                        <hr className="my-4" style={{ color: 'rgb(178, 192, 200)' }} />
                                        <a href="#" className="text-secondary" style={{ textDecoration: 'none' }}>READ MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card h-100 shadow-sm">
                                <Image src="/services (6).png" alt="image"  width={400} height={250} className="card-img-top"/>
                                 
                                    <div className="card-body">
                                        <h2 className="card-title" style={{ color: "black" }}>Metal Roofing</h2>
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
