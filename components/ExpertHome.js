// import Image from "next/image";
// import styles from '../app/page.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPenRuler,faUser,faFileSignature } from '@fortawesome/free-solid-svg-icons';
// export default function ExpertHome() {
//     return (
//         <>
//             <section style={{ textAlign: 'center' }}>
//                 <p style={{ fontWeight: 'bold', color: 'red', fontSize: "1.2em" }} className={styles.p}>EXPERT TEAM</p>
//                 <h1 className={styles.h1} style={{ color: '#000', fontSize: "2.3em" }}>We Have A Professional<br />Team Member</h1>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
//                     <div className={styles.container} style={{ padding: "20px" }}>
//                         <div>
//                             <Image src="/worker (1).png" alt="image" width={400} height={450} />
//                             <div style={{ height: '50px' }}></div>
//                         </div>
//                         <div className={styles.formoverlay} style={{ textAlign: 'center', padding: '20px' }}>
//                             <h3 style={{ padding: '0%', margin: '10px', color: "black" }} className={styles.h3}>Guy Hawkins</h3>
//                             <p className={styles.p} style={{ fontSize: 'small', padding: '0%', margin: '10px', color: 'red', fontWeight: "bold" }}>Worker</p>
//                         </div>
//                     </div>
//                     <div className={styles.container} style={{ padding: "20px" }}>
//                         <div>
//                             <Image src="/worker (2).png" alt="image" width={400} height={450} />
//                             <div style={{ height: '50px' }}></div>
//                         </div>
//                         <div className={styles.formoverlay} style={{ textAlign: 'center', padding: '20px' }}>
//                             <h3 style={{ padding: '0%', margin: '10px', color: "black" }} className={styles.h3}>Cody Fisher</h3>
//                             <p className={styles.p} style={{ fontSize: 'small', padding: '0%', margin: '10px', color: 'red', fontWeight: "bold" }}>Consultant</p>
//                         </div>
//                     </div>
//                     <div className={styles.container} style={{ padding: "20px" }}>
//                         <div>
//                             <Image src="/worker (3).png" alt="image" width={400} height={450} />
//                             <div style={{ height: '50px' }}></div>
//                         </div>
//                         <div className={styles.formoverlay} style={{ textAlign: 'center', padding: '20px', width: "300px" }}>
//                             <h6 style={{ padding: '0%', margin: '10px', color: "black" }} className={styles.h3}>Brooklyn Simmons</h6>
//                             <p className={styles.p} style={{ fontSize: 'small', padding: '0%', margin: '10px', color: 'red', fontWeight: "bold" }}>Founder</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <section style={{ textAlign: 'center', backgroundColor: '#1b1a1a', paddingTop: '40px', paddingBottom: '40px' }}>
//                 <br />
//                 <p style={{ fontWeight: 'bold', color: 'red', fontSize: "1.2em" }} className={styles.p}>WORK PROCESS</p><br />
//                 <h1 style={{ color: 'aliceblue', fontSize: "2.3em" }} className={styles.h1}>3 Easy Steps to Get<br />Quick Help</h1><br />
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
//                     <div style={{ textAlign: 'center', backgroundColor: '#666', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '20%', padding: '20px', borderRadius: '20px' }}>
//                         <div style={{ height: '100px', width: '100px', borderRadius: '100px', backgroundColor: 'red', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                             <div><FontAwesomeIcon icon={faUser} fontSize={40}/></div>
//                         </div><br/>
//                         <h2 style={{ color: 'aliceblue' }}>Get<br />Consultation</h2>
//                     </div>
//                     <div style={{ textAlign: 'center', backgroundColor: '#666', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '20%', padding: '20px', borderRadius: '20px' }}>
//                         <div style={{ height: '100px', width: '100px', borderRadius: '100px', backgroundColor: 'red', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                         <div><FontAwesomeIcon icon={faPenRuler} style={{ color: "#e8ecf2", }} fontSize={40}/></div>
//                         </div><br/>
//                         <h2 style={{ color: 'aliceblue' }}>Install New<br />Roof</h2>
//                     </div>
//                     <div style={{ textAlign: 'center', backgroundColor: '#666', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '20%', padding: '20px', borderRadius: '20px' }}>
//                         <div style={{ height: '100px', width: '100px', borderRadius: '100px', backgroundColor: 'red', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                         <div><FontAwesomeIcon icon={faFileSignature} style={{ color: "#edeff3" }} fontSize={40}/></div>
//                         </div><br/>
//                         <h2 style={{ color: 'aliceblue' }}>Relax & Enjoy<br />Roofing</h2>
//                     </div>
//                 </div>
//             </section>
//             <section style={{ backgroundColor: 'red', padding: '40px' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
//                     <img src="icon (1).png" alt="image" />
//                     <img src="icon (2).png" alt="image" />
//                     <img src="icon (1).png" alt="image" />
//                     <img src="icon (2).png" alt="image" />
//                 </div>
//             </section>
//         </>
//     );
// }
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenRuler, faUser, faFileSignature } from '@fortawesome/free-solid-svg-icons';
import styles from '../app/page.module.css';

export default function ExpertHome() {
    return (
        <>
            <section className="text-center">
                <p className={`font-weight-bold text-danger ${styles.p}`} style={{ fontSize: "1.2em" }}>EXPERT TEAM</p>
                <h1 className={styles.h1} style={{ color: '#000', fontSize: "2.3em" }}>We Have A Professional<br />Team Member</h1>
                <div className="d-flex justify-content-evenly flex-wrap flex-md-nowrap">
                    <div className={`${styles.container} p-3`}>
                        <div>
                            <Image src="/worker (1).png" alt="image" width={400} height={450} />
                        </div>
                        <div className={`${styles.formoverlay} text-center p-3`}style={{ width: "300px" }} >
                            <h3 className={`m-2 text-dark ${styles.h3}`}>Guy Hawkins</h3>
                            <p className="text-danger font-weight-bold small m-2">Worker</p>
                        </div>
                    </div>
                    <div className={`${styles.container} p-3`}>
                        <div>
                            <Image src="/worker (2).png" alt="image" width={400} height={450} />
                        </div>
                        <div className={`${styles.formoverlay} text-center p-3`}style={{ width: "300px" }} >
                            <h3 className={`m-2 text-dark ${styles.h3}`}>Cody Fisher</h3>
                            <p className="text-danger font-weight-bold small m-2">Consultant</p>
                        </div>
                    </div>
                    <div className={`${styles.container} p-3`}>
                        <div>
                            <Image src="/worker (3).png" alt="image" width={400} height={450} />
                        </div>
                        <div className={`${styles.formoverlay} text-center p-3`} style={{ width: "300px" }}>
                            <h6 className={`m-2 text-dark ${styles.h3}`}>Brooklyn Simmons</h6>
                            <p className="text-danger font-weight-bold small m-2">Founder</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-center bg-dark py-4">
                <p className={`font-weight-bold text-danger ${styles.p}`} style={{ fontSize: "1.2em" }}>WORK PROCESS</p>
                <h1 className={`text-light ${styles.h1}`} style={{ fontSize: "2.3em" }}>3 Easy Steps to Get<br />Quick Help</h1>
                <div className="d-flex justify-content-evenly flex-wrap gap-2">
                    <div className="text-center bg-secondary d-flex flex-column align-items-center p-3 rounded" style={{width:"20em"}}>
                        <div className="bg-danger d-flex align-items-center justify-content-center rounded-circle" style={{ height: '100px', width:"100px" }}>
                            <FontAwesomeIcon icon={faUser} fontSize={40} color="white"/>
                        </div>
                        <h2 className="text-light mt-3">Get<br />Consultation</h2>
                    </div>
                    <div className="text-center bg-secondary d-flex flex-column align-items-center p-3 rounded" style={{width:"20em"}}>
                        <div className="bg-danger d-flex align-items-center justify-content-center rounded-circle" style={{ height: '100px', width: '100px' }}>
                            <FontAwesomeIcon icon={faPenRuler} fontSize={40} color="white"/>
                        </div>
                        <h2 className="text-light mt-3">Install New<br />Roof</h2>
                    </div>
                    <div className="text-center bg-secondary d-flex flex-column align-items-center p-3 rounded" style={{width:"20em"}}>
                        <div className="bg-danger d-flex align-items-center justify-content-center rounded-circle" style={{ height: '100px', width: '100px' }}>
                            <FontAwesomeIcon icon={faFileSignature} fontSize={40} color="white"/>
                        </div>
                        <h2 className="text-light mt-3">Relax & Enjoy<br />Roofing</h2>
                    </div>
                </div>
            </section>
            <section className="bg-danger py-4">
                <div className="d-flex justify-content-evenly flex-wrap">
                    <img src="icon (1).png" alt="image" />
                    <img src="icon (2).png" alt="image" />
                    <img src="icon (1).png" alt="image" />
                    <img src="icon (2).png" alt="image" />
                </div>
            </section>
        </>
    );
}
