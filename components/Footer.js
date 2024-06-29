// import Image from "next/image";
// import styles from '../app/page.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faTwitter, faLinkedin, faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons';
// export default function Footer() {
//     return (
//         <footer className={styles.footer}>
//             <br /><br />
//             <div style={{ display: 'flex', justifyContent: 'center' }}>
//                 <div className={styles.container} style={{ width: '90%', height: '40vh', boxShadow: '0 4px 8px whitesmoke' }}>
//                     <img src="house.png" alt="Background Image" className={styles.backgroundimage} style={{ height: '40vh' }} />
//                     <div className={styles.overlay} style={{ height: '100%' }}>
//                         <div className={styles.content}>
//                             <h1>Our Newsletters</h1>
//                             <form action="#" method="POST">
//                                 <input type="text" name="email" placeholder="Your Email" required style={{ padding: '10px', margin: '5px', border: 'none', borderRadius: '5px' }} />
//                                 <button type="submit" style={{ padding: '10px', margin: '5px', border: 'none', borderRadius: '5px' }} className={styles.button}>SUBSCRIBE NOW</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <br /><br />
//             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px' }}>
//                 <div style={{ display: 'flex' }}>
//                     <img src="roof.png" alt="" style={{ width: '100px', height: 'auto' }} />
//                     <div style={{ color: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
//                         <h2 style={{ padding: '0%', margin: '0%', color: 'aliceblue' }}>Roofer</h2>
//                         <p style={{ padding: '0%', margin: '0%', color: 'aliceblue' }}>Roof services</p>
//                     </div>
//                 </div>
//                 <div style={{ display: "flex" }}>
//                     <div style={{ width: "35px" }}>
//                         <FontAwesomeIcon icon={faFacebookF} style={{ color: '#e9ecf1', marginRight: "20px" }} />
//                     </div>
//                     <div style={{ width: "40px" }}>
//                         <FontAwesomeIcon icon={faTwitter} style={{ color: "#e4e7ec", marginRight: "20px" }} />
//                     </div>
//                     <div style={{ width: "40px" }}>
//                         <FontAwesomeIcon icon={faLinkedin} style={{ color: "#e8eaed", marginRight: "20px" }} />
//                     </div>
//                     <div style={{ width: "40px" }}>
//                         <FontAwesomeIcon icon={faInstagram} style={{ color: "#e6e9ef", marginRight: "20px" }} />
//                     </div>
//                     <div style={{ width: "40px" }}>
//                         <FontAwesomeIcon icon={faPinterestP} style={{ color: "#e8eaee", marginRight: "20px" }} />
//                     </div>
//                 </div>
//             </div>
//             <br />
//             <hr style={{ margin: '20px', height: '0.1px', border: 'thin', color: 'rgb(49, 51, 52)', backgroundColor: 'rgb(49, 51, 52)' }} />
//             <br /><br /><br />
//             <div style={{ display: 'flex', justifyContent: 'space-evenly', color: 'aliceblue' }}>
//                 <div>
//                     <h2 className={styles.h2}>Get In Touch</h2>
//                     <p className={styles.p}>Tincidunt neque pretium lectus donec risus.</p>
//                     <p className={styles.p}><span style={{ fontWeight: 'bold' }}>Add:</span> New Hyde Park, NY 11040</p>
//                     <p className={styles.p}><span style={{ fontWeight: 'bold' }}>Email:</span> example@gmail.com</p>
//                     <p className={styles.p}><span style={{ fontWeight: 'bold' }}>Phone:</span> 333 666 0000</p>
//                     <div style={{ display: "flex",justifyContent:"center" }}>
//                         <div style={{ width: "30px" }}>
//                             <FontAwesomeIcon icon={faFacebookF} style={{ color: '#e9ecf1', marginRight: "20px" }} />
//                         </div>
//                         <div style={{ width: "35px" }}>
//                             <FontAwesomeIcon icon={faTwitter} style={{ color: "#e4e7ec", marginRight: "20px" }} />
//                         </div>
//                         <div style={{ width: "35px" }}>
//                             <FontAwesomeIcon icon={faLinkedin} style={{ color: "#e8eaed", marginRight: "20px" }} />
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <h2 className={styles.h2}>Links</h2>
//                     <p className={styles.p}>About Us</p>
//                     <p className={styles.p}>Services</p>
//                     <p className={styles.p}>Case</p>
//                     <p className={styles.p}>Roof Repair</p>
//                     <p className={styles.p}>Contact Us</p>
//                 </div>
//                 <div>
//                     <h2 className={styles.h2}>Working Hours</h2>
//                     <p className={styles.p}>Tincidunt neque pretium lectus donec risus.</p>
//                     <p className={styles.p}>Mon - Fri: 9:00AM - 6:00PM</p>
//                     <p className={styles.p}>Sat - Sun: 8:00AM - 4:00PM</p>
//                 </div>
//                 <div>
//                     <h2 className={styles.h2}>Follow Instagram</h2>
//                     <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
//                         <div style={{ display: 'flex', gap: '10px' }}>
//                             <img src="roof (2).png" alt="Worker Image" style={{ height: '100px', width: '100px' }} />
//                             <img src="roof (3).png" alt="Worker Image" style={{ height: '100px', width: '100px' }} />
//                             <img src="roof (1).png" alt="Worker Image" style={{ height: '100px', width: '100px' }} />
//                         </div>
//                         <div style={{ display: 'flex', gap: '10px' }}>
//                             <img src="roofer.png" alt="Background Image" className="background-image" style={{ height: '100px', width: '100px' }} />
//                             <img src="roofer.png" alt="Background Image" className="background-image" style={{ height: '100px', width: '100px' }} />
//                             <img src="roofer.png" alt="Background Image" className="background-image" style={{ height: '100px', width: '100px' }} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <br /><br /><br /><br /><br /><br />
//             <div style={{ backgroundColor: '#000', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                 <p style={{ color: 'white' }} className={styles.p}>Copyright 2024 by Roofer theme All Right Reserved.</p>
//             </div>
//         </footer>
//     );
// }
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../app/page.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedin, faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <br />
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className={styles.container + "col-12 col-md-10 col-lg-8 position-relative"} style={{ boxShadow: '0 4px 8px whitesmoke' }}>
                        <Image src="/house.png" alt="image" width={400} height={450} className={styles.backgroundimage + "img-fluid w-100"} style={{ height: '40vh' }} />

                        <div className={styles.overlay + " d-flex align-items-center justify-content-center"} style={{ height: "100%" }}>
                            <div className={styles.content + "text-center text-white"}>
                                <h1>Our Newsletters</h1>
                                <form action="#" method="POST" className="d-flex flex-column align-items-center">
                                    <input type="email" name="email" className="form-control mb-3" placeholder="Your Email" required style={{ width: "20vw" }} />
                                    <button type="submit" className="btn btn-primary">SUBSCRIBE NOW</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="container my-5">
                <div className="row justify-content-between align-items-center">
                    <div className="col-auto d-flex align-items-center">
                        <img src="roof.png" alt="" className="img-fluid" style={{ width: '100px' }} />
                        <div className="text-white ml-3">
                            <h2>Roofer</h2>
                            <p>Roof services</p>
                        </div>
                    </div>
                    <div className="col-auto d-flex">
                        <a href="#" className="text-white me-3"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#" className="text-white me-3"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#" className="text-white me-3"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="#" className="text-white me-3"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="#" className="text-white"><FontAwesomeIcon icon={faPinterestP} /></a>
                    </div>
                </div>
            </div>
            <br />
            <hr className="my-4" style={{ borderTop: '2px solid #666' }} />
            <br /><br />
            <div className="container my-5">
                <div className="row text-white text-center text-md-left">
                    <div className="col-md-3 mb-4 mb-md-0">
                        <h2>Get In Touch</h2>
                        <p>Tincidunt neque pretium lectus donec risus.</p>
                        <p><strong>Add:</strong> New Hyde Park, NY 11040</p>
                        <p><strong>Email:</strong> example@gmail.com</p>
                        <p><strong>Phone:</strong> 333 666 0000</p>
                        <div className="d-flex justify-content-center">
                            <a href="#" className="text-white me-3"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="#" className="text-white me-3"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="#" className="text-white"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4 mb-md-0">
                        <h2>Links</h2>
                        <p>About Us</p>
                        <p>Services</p>
                        <p>Case</p>
                        <p>Roof Repair</p>
                        <p>Contact Us</p>
                    </div>
                    <div className="col-md-3 mb-4 mb-md-0">
                        <h2>Working Hours</h2>
                        <p>Tincidunt neque pretium lectus donec risus.</p>
                        <p>Mon - Fri: 9:00AM - 6:00PM</p>
                        <p>Sat - Sun: 8:00AM - 4:00PM</p>
                    </div>
                    <div className="col-md-3">
                        <h2>Follow Instagram</h2>
                        <div className="d-flex flex-wrap align-items-center justify-content-center">
                            <Image src="/roof (2).png" alt="image" width={400} height={450} className="img-thumbnail m-1" style={{ height: '100px', width: '100px' }} />
                            <Image src="/roof (3).png" alt="image" width={400} height={450} className="img-thumbnail m-1" style={{ height: '100px', width: '100px' }} />
                            <Image src="/roof (1).png" alt="image" width={400} height={450} className="img-thumbnail m-1" style={{ height: '100px', width: '100px' }} />
                            <Image src="/house.png" alt="image" width={400} height={450} className="img-thumbnail m-1" style={{ height: '100px', width: '100px' }} />
                            <Image src="/services (3).png" alt="image" width={400} height={450} className="img-thumbnail m-1" style={{ height: '100px', width: '100px' }} />
                            <Image src="/services (5).png" alt="image" width={400} height={450} className="img-thumbnail m-1" style={{ height: '100px', width: '100px' }} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-dark py-4">
                <p className="text-white text-center mb-0">Copyright 2024 by Roofer theme All Right Reserved.</p>
            </div>
        </footer>
    );
}
