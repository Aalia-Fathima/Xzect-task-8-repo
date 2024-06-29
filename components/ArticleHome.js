// import Image from "next/image";
// import styles from '../app/page.module.css';

// export default function ArticleHome() {
//     return (
//         <section style={{ textAlign: 'center' }}>
//             <p style={{ fontWeight: 'bold', color: 'red', fontSize: "1.2em" }} className={styles.p}>ARTICLE</p>
//             <h1 className={styles.h1} style={{ color: "black", fontSize: "2.3em" }}>Get More Update From<br />RoofTox</h1>
//             <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
//                 <div className={styles.card}>
//                     <img src="roof (3).png" alt="Card image" className={styles.cardimage} />
//                     <div className={styles.cardcontent}>
//                         <h2 className={styles.cardtitle} style={{ color: "black" }}>How to Handle Unexpected Situations on Road</h2>
//                         <p className={`${styles.carddescription} ${styles.p}`}>by Admin 2 Comments</p>
//                         <p className={`${styles.carddescription} ${styles.p}`}>Tincidunt Maur nemi sit Interdum praesent eget morbi lacinia
//                             volutpat pellentesque Tincidunt aurna suspit.</p>
//                         <hr style={{ margin: '20px', height: '0.1px', border: 'thin', color: 'rgb(178, 192, 200)', backgroundColor: 'rgb(178, 192, 200)' }} />
//                         <a href="#" style={{ textDecoration: 'none', color: '#666' }} className={styles.a}>READ MORE</a>
//                     </div>
//                 </div>
//                 <div className={styles.card}>
//                     <img src="roof (2).png" alt="Card image" className={styles.cardimage} />
//                     <div className={styles.cardcontent}>
//                         <h2 className={styles.cardtitle} style={{ color: "black" }}>How to Handle Unexpected Situations on Road</h2>
//                         <p className={`${styles.carddescription} ${styles.p}`}>by Admin 2 Comments</p>
//                         <p className={`${styles.carddescription} ${styles.p}`}>Tincidunt Maur nemi sit Interdum praesent eget morbi lacinia
//                             volutpat pellentesque Tincidunt aurna suspit.</p>
//                         <hr style={{ margin: '20px', height: '0.1px', border: 'thin', color: 'rgb(178, 192, 200)', backgroundColor: 'rgb(178, 192, 200)' }} />
//                         <a href="#" style={{ textDecoration: 'none', color: '#666' }} className={styles.a}>READ MORE</a>
//                     </div>
//                 </div>
//                 <div className={styles.card}>
//                     <img src="roofer.png" alt="Card image" className={styles.cardimage} />
//                     <div className={styles.cardcontent}>
//                         <h2 className={styles.cardtitle} style={{ color: "black" }}>How to Handle Unexpected Situations on Road</h2>
//                         <p className={`${styles.carddescription} ${styles.p}`}>by Admin 2 Comments</p>
//                         <p className={`${styles.carddescription} ${styles.p}`}>Tincidunt Maur nemi sit Interdum praesent eget morbi lacinia
//                             volutpat pellentesque Tincidunt aurna suspit.</p>
//                         <hr style={{ margin: '20px', height: '0.1px', border: 'thin', color: 'rgb(178, 192, 200)', backgroundColor: 'rgb(178, 192, 200)' }} />
//                         <a href="#" style={{ textDecoration: 'none', color: '#666' }} className={styles.a}>READ MORE</a>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }
import Image from "next/image";
import styles from '../app/page.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function ArticleHome() {
    return (
        <section className="text-center py-5">
            <p className={`font-weight-bold text-danger ${styles.p}`} style={{ fontSize: "1.2em" }}>ARTICLE</p>
            <h1 className={styles.h1} style={{ color: "black", fontSize: "2.3em" }}>Get More Update From<br />RoofTox</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 shadow-sm">
                            <img src="roof (3).png" alt="Card image" className="card-img-top" />
                            <div className="card-body">
                                <h2 className="card-title" style={{ color: "black" }}>How to Handle Unexpected Situations on Road</h2>
                                <p className={`${styles.carddescription} ${styles.p}`}>by Admin 2 Comments</p>
                                <p className={`${styles.carddescription} ${styles.p}`}>Tincidunt Maur nemi sit Interdum praesent eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.</p>
                                <hr className="my-4" style={{ color: 'rgb(178, 192, 200)' }} />
                                <a href="#" className="text-secondary" style={{ textDecoration: 'none' }}>READ MORE</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 shadow-sm">
                            <img src="roof (2).png" alt="Card image" className="card-img-top" />
                            <div className="card-body">
                                <h2 className="card-title" style={{ color: "black" }}>How to Handle Unexpected Situations on Road</h2>
                                <p className={`${styles.carddescription} ${styles.p}`}>by Admin 2 Comments</p>
                                <p className={`${styles.carddescription} ${styles.p}`}>Tincidunt Maur nemi sit Interdum praesent eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.</p>
                                <hr className="my-4" style={{ color: 'rgb(178, 192, 200)' }} />
                                <a href="#" className="text-secondary" style={{ textDecoration: 'none' }}>READ MORE</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 shadow-sm">
                            <img src="roofer.png" alt="Card image" className="card-img-top" />
                            <div className="card-body">
                                <h2 className="card-title" style={{ color: "black" }}>How to Handle Unexpected Situations on Road</h2>
                                <p className={`${styles.carddescription} ${styles.p}`}>by Admin 2 Comments</p>
                                <p className={`${styles.carddescription} ${styles.p}`}>Tincidunt Maur nemi sit Interdum praesent eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.</p>
                                <hr className="my-4" style={{ color: 'rgb(178, 192, 200)' }} />
                                <a href="#" className="text-secondary" style={{ textDecoration: 'none' }}>READ MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}