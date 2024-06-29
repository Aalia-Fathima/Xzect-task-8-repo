'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import styles from '../app/page.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
// import { faCircleCheck as faCircleCheckRegular } from '@fortawesome/free-regular-svg-icons';
// export default function Service() {
//   const [activeTab, setActiveTab] = useState('damage-repair');

//   const tabs = [
//     { id: 'roofing-layer', label: 'Roofing Layer', image: '/slide (2).png', title: 'Roofing Layer' },
//     { id: 'damage-repair', label: 'Damage Repair', image: '/slide (1).png', title: 'Damage Repair' },
//     { id: 'roof-cornering', label: 'Roof Cornering', image: '/slide (3).png', title: 'Roof Cornering' },
//     { id: 'siding-install', label: 'Siding Install', image: '/WORK.png', title: 'Siding Install' },
//   ];

//   return (
//     <>
//       <section style={{ textAlign: 'center', margin: 0, padding: 0 }}>
//         <div className={styles.container} style={{ backgroundColor: '#1b1a1a', paddingTop: '40px' }}>
//           <br />
//           <p style={{ fontWeight: 'bold', color: 'red' }}>OUR SERVICES</p><br />
//           <h1 style={{ color: 'aliceblue', fontSize: "2em" }}>We’re Providing Quality<br />Roofing Services</h1>
//           <br /><br />
//           <div style={{ display: 'flex', justifyContent: 'center' }}>
//             {tabs.map(tab => (
//               <div
//                 key={tab.id}
//                 className={`tab ${activeTab === tab.id ? styles.active : ''}`}
//                 style={{ border: '#666 solid thin', padding: '10px', cursor: 'pointer' }}
//                 onClick={() => setActiveTab(tab.id)}
//               >
//                 <a style={{ textDecoration: 'none', color: 'aliceblue', fontSize: 'medium' }}>{tab.label}</a>
//               </div>
//             ))}
//           </div>
//           <br /><br />
//           {tabs.map(tab => (
//             <div key={tab.id} id={tab.id} className={`${styles.tabcontent} ${activeTab === tab.id ? styles.active : ''}`}>
//               <div style={{ display: 'flex', justifyContent: 'space-evenly', color: 'aliceblue', paddingBottom: '150px', paddingLeft: '20px', paddingRight: '20px', gap: '20px' }}>
//                 <div>
//                   <Image src={tab.image} alt="image" width={600} height={400} />
//                 </div>
//                 <div style={{ fontSize: 'medium' }}>
//                   <h2 style={{ fontSize: '2.1em' }} className={styles.h2}>{tab.title}</h2>
//                   <p style={{ fontWeight: 400, color: 'antiquewhite' }} className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing integer ultrices suspendisse varius etiam est. Est, felis, tempus nec vitae orci sodales Metus, velit nec at diam in sed. Massa dui ipsum ornare sagittis dolor sagittis amet odio est. Sit semper et velit fusce.</p>
//                   <p className={styles.p}><FontAwesomeIcon icon={faCircleCheckRegular} style={{ color: "#c75284", }} /> Innovative Work Experience</p>
//                   <p className={styles.p}><FontAwesomeIcon icon={faCircleCheckRegular} style={{ color: "#c75284", }} /> 100% Satisfaction Guarantee</p>
//                   <p className={styles.p}><FontAwesomeIcon icon={faCircleCheckRegular} style={{ color: "#c75284", }} /> Quality Expert Engineer</p>
//                   <button style={{ backgroundColor: 'red', color: 'aliceblue' }} className={styles.buttons}>READ MORE</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//           <div style={{ height: '100px', backgroundColor: 'rgb(226, 206, 206)', margin: 0 }}></div>
//           <div className={styles.formoverlay} style={{ textAlign: 'center', margin: 0, display: 'flex', justifyContent: 'space-evenly', gap: '20px', backgroundColor: 'transparent', boxShadow: 'none', width: '95vw' }}>
//             <div style={{ paddingTop: '20px', paddingBottom: '20px', backgroundColor: 'red', width: '900px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginLeft: '20px' }}>
//               <div>
//                 <FontAwesomeIcon icon={faHouse} style={{ color: "#e5e9f0", }} fontSize={60} />
//               </div>
//               <div style={{ color: 'aliceblue', margin: 0, padding: 0 }}>
//                 <h1 style={{ fontSize: '3.1em', padding: 0, margin: 0 }}>932+</h1>
//                 <p style={{ fontWeight: 'bold', padding: 0, margin: 0 }}>Project Complete</p>
//               </div>
//             </div>
//             <div style={{ paddingTop: '20px', paddingBottom: '20px', backgroundColor: 'aliceblue', width: '1000px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
//               <div>
//                 <Image src="/support.png" alt="image" width={80} height={80} />
//               </div>
//               <div style={{ margin: 0, padding: 0 }}>
//                 <h1 style={{ fontSize: '3.1em', padding: 0, margin: 0, color: "black" }}>90+</h1>
//                 <p style={{ fontWeight: 'bold', padding: 0, margin: 0, color: "black" }}>Experience Staff</p>
//               </div>
//             </div>
//             <div style={{ backgroundColor: 'red', width: '1000px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', paddingTop: '20px', paddingBottom: '20px', marginRight: '20px' }}>
//               <div>
//                 <FontAwesomeIcon icon={faUser} fontSize={60} />
//               </div>
//               <div style={{ margin: 0, padding: 0 }}>
//                 <h1 style={{ fontSize: '3.1em', padding: 0, margin: 0 }}>620+</h1>
//                 <p style={{ fontWeight: 'bold', padding: 0, margin: 0 }}>Satisfied Clients</p>
//               </div>
//             </div>
//             <div style={{ paddingTop: '20px', paddingBottom: '20px', backgroundColor: 'aliceblue', width: '1000px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
//               <div>
//                 <Image src="/life-insurance.png" alt="life" width={80} height={80} />
//               </div>
//               <div style={{ color: 'black', margin: 0, padding: 0 }}>
//                 <h1 style={{ fontSize: '3.1em', padding: 0, margin: 0 }}>20+</h1>
//                 <p style={{ fontWeight: 'bold', padding: 0, margin: 0 }}>Awards Win</p>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section >
//       <section style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: 'rgb(226, 206, 206)', margin: 0, padding: 0,color:"black" }}>
//         <div style={{ padding: '20px' }}>
//           <p style={{ color: 'red', fontWeight: 'bold' }} className={styles.p}>WHY CHOOSE ROOFTOX</p>
//           <h1 className={styles.h1}>Why Choose RoofTox For Roofing Service.</h1>
//           <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing integer suspendisse varius etiam est tempus nec vitae orci sodales.</p>
//           <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
//             <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', alignItems: 'center' }}>
//               <div style={{ backgroundColor: 'aliceblue', width: '90px', height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '20px' }}>
//                 <FontAwesomeIcon icon={faUser} color='black' fontSize={50} />
//               </div>
//               <div>
//                 <h3 className={styles.h3}>Expert Engineer</h3>
//                 <p className={styles.p}>Suspendisse varius etiam tempus nec vitae.</p>
//               </div>
//             </div>
//             <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', alignItems: 'center' }}>
//               <div style={{ backgroundColor: 'aliceblue', width: '90px', height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '20px' }}>
//                 <Image src="/pillar.png" alt="pillar" width={50} height={50} />
//               </div>
//               <div>
//                 <h3 className={styles.h3}>Quality Materials</h3>
//                 <p className={styles.p}>Suspendisse varius etiam tempus nec vitae.</p>
//               </div>
//             </div>
//           </div>
//           <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
//             <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', alignItems: 'center' }}>
//               <div style={{ backgroundColor: 'aliceblue', width: '90px', height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '20px' }}>
//                 <FontAwesomeIcon icon={faHouse} style={{ color: 'black' }} fontSize={40} />
//               </div>
//               <div>
//                 <h3 className={styles.h3}>Required Works</h3>
//                 <p className={styles.p}>Suspendisse varius etiam tempus nec vitae.</p>
//               </div>
//             </div>
//             <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', alignItems: 'center' }}>
//               <div style={{ backgroundColor: 'aliceblue', width: '90px', height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '20px' }}>
//                 <Image src="/life-insurance.png" alt="life" width={50} height={50} />
//               </div>
//               <div>
//                 <h3 className={styles.h3}>Fully Insured</h3>
//                 <p className={styles.p}>Suspendisse varius etiam tempus nec vitae.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//           <Image src="/man.png" alt="image" width={500} height={700} />
//         </div>
//       </section>
//       <br /><br /><br />
//       <section>
//         <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
//           <Image src="/some.png" alt="image" width={300} height={200} />
//           <Image src="/some1.png" alt="image" width={300} height={200} />
//           <Image src="/somes (1).png" alt="image" width={300} height={200} />
//           <Image src="/somes (2).png" alt="image" width={300} height={200} />
//         </div>
//       </section>
//     </>
//   );
// }
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck as faCircleCheckRegular } from '@fortawesome/free-regular-svg-icons';
import styles from '../app/page.module.css';

export default function Service() {
  const [activeTab, setActiveTab] = useState('damage-repair');

  const tabs = [
    { id: 'roofing-layer', label: 'Roofing Layer', image: '/slide (2).png', title: 'Roofing Layer' },
    { id: 'damage-repair', label: 'Damage Repair', image: '/slide (1).png', title: 'Damage Repair' },
    { id: 'roof-cornering', label: 'Roof Cornering', image: '/slide (3).png', title: 'Roof Cornering' },
    { id: 'siding-install', label: 'Siding Install', image: '/WORK.png', title: 'Siding Install' },
  ];

  return (
    <>
      <section style={{ textAlign: 'center', margin: 0, padding: 0 }}>
        <div className={styles.container} style={{ backgroundColor: '#1b1a1a', paddingTop: '40px' }}>
          <br />
          <p style={{ fontWeight: 'bold', color: 'red' }}>OUR SERVICES</p><br />
          <h1 style={{ color: 'aliceblue', fontSize: "2em" }}>We’re Providing Quality<br />Roofing Services</h1>
          <br /><br />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {tabs.map(tab => (
              <div
                key={tab.id}
                className={`tab ${activeTab === tab.id ? styles.active : ''}`}
                style={{ border: '#666 solid thin', padding: '10px', cursor: 'pointer' }}
                onClick={() => setActiveTab(tab.id)}
              >
                <a style={{ textDecoration: 'none', color: 'aliceblue', fontSize: 'medium' }}>{tab.label}</a>
              </div>
            ))}
          </div>
          <br /><br />
          {tabs.map(tab => (
            <div key={tab.id} id={tab.id} className={`${styles.tabcontent} ${activeTab === tab.id ? styles.active : ''}`}>
              <div className='d-flex flex-md-nowrap flex-wrap' style={{ display: 'flex', justifyContent: 'space-evenly', color: 'aliceblue', paddingBottom: '150px', paddingLeft: '20px', paddingRight: '20px', gap: '20px' }}>
                <div className="col-md-6">
                  <Image src={tab.image} alt="image" width={600} height={400} className="img-fluid" />
                </div>
                <div style={{ fontSize: 'medium' }}>
                  <h2 style={{ fontSize: '2.1em' }} className={styles.h2}>{tab.title}</h2>
                  <p style={{ fontWeight: 400, color: 'antiquewhite' }} className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing integer ultrices suspendisse varius etiam est. Est, felis, tempus nec vitae orci sodales Metus, velit nec at diam in sed. Massa dui ipsum ornare sagittis dolor sagittis amet odio est. Sit semper et velit fusce.</p>
                  <p className={styles.p}><FontAwesomeIcon icon={faCircleCheckRegular} style={{ color: "#c75284", }} /> Innovative Work Experience</p>
                  <p className={styles.p}><FontAwesomeIcon icon={faCircleCheckRegular} style={{ color: "#c75284", }} /> 100% Satisfaction Guarantee</p>
                  <p className={styles.p}><FontAwesomeIcon icon={faCircleCheckRegular} style={{ color: "#c75284", }} /> Quality Expert Engineer</p>
                  <button style={{ backgroundColor: 'red', color: 'aliceblue' }} className={styles.buttons}>READ MORE</button>
                </div>
              </div>
            </div>
          ))}
          <div style={{ height: '550px', backgroundColor: 'rgb(226, 206, 206)' }} className="d-flex justify-content-between">
            <img src='/sticker (1).png' className='img-fluid' style={{width:"50%",height:"500px"}}/>
            <img src='/sticker (2).png' className='img-fluid' style={{width:"50%",height:"400px"}}/>
          </div>
          <div className={`d-flex justify-content-evenly align-items-center flex-md-nowrap flex-wrap ${styles.formoverlay}`} style={{ backgroundColor: 'transparent', boxShadow: 'none', width: '95vw' }}>
            <div className="p-3 d-flex align-items-center bg-danger rounded justify-content-center" style={{ width: '100%' }}>
              <div>
                <FontAwesomeIcon icon={faHouse} style={{ color: "#e5e9f0" }} fontSize={60} />
              </div>
              <div className="text-light ms-3">
                <h1 style={{ fontSize: '3.1em', margin: 0 }}>932+</h1>
                <p style={{ fontWeight: 'bold', margin: 0 }}>Project Complete</p>
              </div>
            </div>
            <div className="p-3 d-flex align-items-center bg-light rounded justify-content-center" style={{ width: '100%' }}>
              <div>
                <Image src="/support.png" alt="image" width={80} height={80} />
              </div>
              <div className="ms-3">
                <h1 style={{ fontSize: '3.1em', margin: 0, color: "black" }}>90+</h1>
                <p style={{ fontWeight: 'bold', margin: 0, color: "black" }}>Experience Staff</p>
              </div>
            </div>
            <div className="p-3 d-flex align-items-center bg-danger rounded justify-content-center" style={{ width: '100%' }}>
              <div>
                <FontAwesomeIcon icon={faUser} fontSize={60} />
              </div>
              <div className="text-light ms-3">
                <h1 style={{ fontSize: '3.1em', margin: 0 }}>620+</h1>
                <p style={{ fontWeight: 'bold', margin: 0 }}>Satisfied Clients</p>
              </div>
            </div>
            <div className="p-3 d-flex align-items-center bg-light rounded justify-content-center" style={{ width: '100%' }}>
              <div>
                <Image src="/life-insurance.png" alt="life" width={80} height={80} />
              </div>
              <div className="text-dark ms-3">
                <h1 style={{ fontSize: '3.1em', margin: 0 }}>20+</h1>
                <p style={{ fontWeight: 'bold', margin: 0 }}>Awards Win</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="d-flex flex-md-nowrap flex-wrap py-5" style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: 'rgb(226, 206, 206)', margin: 0, padding: 0, color: "black" }}>
        <div className="container">
          <div className="text-center">
            <p className="text-danger font-weight-bold">WHY CHOOSE ROOFTOX</p>
            <h1 className={styles.h1}>Why Choose RoofTox For Roofing Service.</h1>
            <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing integer suspendisse varius etiam est tempus nec vitae orci sodales.</p>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-lg-6 col-md-6 mb-4">
              <div className="d-flex align-items-center">
                <div className="bg-light d-flex align-items-center justify-content-center rounded-circle" style={{ width: '90px', height: '90px' }}>
                  <FontAwesomeIcon icon={faUser} color='black' fontSize={50} />
                </div>
                <div className="ms-3">
                  <h3 className={styles.h3}>Expert Engineer</h3>
                  <p className={styles.p}>Suspendisse varius etiam tempus nec vitae.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mb-4">
              <div className="d-flex align-items-center">
                <div className="bg-light d-flex align-items-center justify-content-center rounded-circle" style={{ width: '90px', height: '90px' }}>
                  <Image src="/pillar.png" alt="pillar" width={50} height={50} />
                </div>
                <div className="ms-3">
                  <h3 className={styles.h3}>Quality Materials</h3>
                  <p className={styles.p}>Suspendisse varius etiam tempus nec vitae.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-lg-6 col-md-6 mb-4">
              <div className="d-flex align-items-center">
                <div className="bg-light d-flex align-items-center justify-content-center rounded-circle" style={{ width: '90px', height: '90px' }}>
                  <FontAwesomeIcon icon={faHouse} style={{ color: 'black' }} fontSize={40} />
                </div>
                <div className="ms-3">
                  <h3 className={styles.h3}>Required Works</h3>
                  <p className={styles.p}>Suspendisse varius etiam tempus nec vitae.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mb-4">
              <div className="d-flex align-items-center">
                <div className="bg-light d-flex align-items-center justify-content-center rounded-circle" style={{ width: '90px', height: '90px' }}>
                  <Image src="/life-insurance.png" alt="pillar" width={50} height={50} />
                </div>
                <div className="ms-3">

                  <h3 className={styles.h3}>Fully Insured</h3>
                  <p className={styles.p}>Suspendisse varius etiam tempus nec vitae.</p>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image src="/man.png" alt="image" width={500} height={700} className="img-fluid"/>
        </div>
      </section>
      <br /><br /><br />
      <section>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: "wrap" }}>
          <Image src="/some.png" alt="image" width={300} height={200} className="img-fluid"/>
          <Image src="/some1.png" alt="image" width={300} height={200} className="img-fluid"/>
          <Image src="/somes (1).png" alt="image" width={300} height={200} className="img-fluid"/>
          <Image src="/somes (2).png" alt="image" width={300} height={200} className="img-fluid"/>
        </div>
      </section>
    </>
  );
}