// import Image from "next/image";
// import styles from '../app/page.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// export default function Header() {
//     return (
//         <header className={styles.header} style={{color:"white"}}>
//             <div className={styles.contactinfo}>
//                 <p className={styles.p}>2464 Royal Ln. Mesa, New Jersey 45463</p>
//                 <p className={styles.p}>info@example.com</p>
//                 <p className={styles.p}>+91-213-666-0027</p>
//                 <p className={styles.p}>Login</p>
//                 <div>
//                     <FontAwesomeIcon icon={faFacebookF} style={{paddingRight:"10px"}}/>
//                     <FontAwesomeIcon icon={faTwitter} style={{paddingRight:"10px"}}/>
//                     <FontAwesomeIcon icon={faLinkedin} style={{paddingRight:"10px"}}/>
//                 </div>

//             </div>
//             <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
//                 <div style={{ display: "flex", justifyContent: "space-evenly" }}>
//                     <img src="roof.png" alt="" style={{ width: "100px", height: "auto" }} />
//                     <div style={{ color: "black", display: "flex", flexDirection: "column", justifyContent: "center" }}>
//                         <h2 style={{ padding: 0, margin: 0 }} className={styles.h2}>Roofer</h2>
//                         <p style={{ padding: 0, margin: 0 }} className={styles.p}>Roof services</p>
//                     </div>
//                 </div>
//                 <nav className={styles.nav}>
//                     <ul className={styles.ul}>
//                         <li className={styles.li}><a href="#" className={styles.a}>Home</a></li>
//                         <li className={styles.li}><a href="#" className={styles.a}>About Us</a></li>
//                         <li className={styles.li}><a href="#" className={styles.a}>Services</a></li>
//                         <li className={styles.li}><a href="#" className={styles.a}>Pages</a></li>
//                         <li className={styles.li}><a href="#" className={styles.a}>News</a></li>
//                         <li className={styles.li}><a href="#" className={styles.a}>Contact</a></li>
//                     </ul>
//                 </nav>
//                 <button style={{backgroundColor: "red"}} className={styles.buttons}>Free Estimate</button>
//             </div>

//         </header>
//     );
// }
// components/Header.js
'use client'
import React, { useState,useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  useEffect(() => {
    // Import Bootstrap JS manually to ensure the dropdown works
    if (typeof window !== 'undefined') {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
}, []);

  return (
    <header className="bg-dark text-white py-3">
      <div className="container">
        <div className="d-flex justify-content-evenly align-items-center mb-3 flex-md-nowrap flex-wrap gap-2">
          <div className="d-flex gap-3 flex-md-nowrap flex-wrap justify-content-evenly">
            <p className="mb-0">2464 Royal Ln. Mesa, New Jersey 45463</p>
            <p className="mb-0">info@example.com</p>
            <p className="mb-0">+91-213-666-0027</p>
            
          </div>
          <div className="d-flex gap-3">
          <p className="mb-0">Login</p>
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Image src="/roof.png" alt="Roofer Logo" width={100} height={100} className="img-fluid" />
            <div className="ms-3">
              <h2 className="h4 mb-0">Roofer</h2>
              <p className="mb-0">Roof services</p>
            </div>
          </div>
          <nav className="navbar navbar-expand-md navbar-dark">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" onClick={handleNavCollapse} aria-controls="navbarNav" aria-expanded={!isNavCollapsed} aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">About Us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Services">Services</a>
                  </li>
                  <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pages
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Project</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Shop</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/FAQ">FAQ</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Pricing</a></li>
                                </ul>
                            </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Blogs">Blogs</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* <button className="btn btn-danger">Free Estimate</button> */}
        </div>
      </div>
    </header>
  );
}


