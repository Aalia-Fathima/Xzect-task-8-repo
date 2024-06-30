import Image from "next/image";
import styles from '../app/page.module.css';

export default function ContainerHome() {
    return (
        <>
            <section>
                <div className={styles.container}>
                <Image src="/roofer.png" alt="Worker Image" width={300} height={200} className={styles.backgroundimage}/>

                    <div className={styles.overlays} style={{height: "100vh"}}>
                        <div className={styles.content}>
                            <h1 className={styles.h1}>BEST ROOFING SERVICE & CONSULTING</h1>
                            <p style={{ wordWrap: "break-word" }} className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit Turpis
                                ridiculus tellus.hdfhfhf</p>
                            <button className={styles.button}>MAKE APPOINTMENT</button>
                        </div>
                    </div>
                    <div style={{ height: "20vh" }}></div>
                    <div className={styles.formoverlays} style={{ textAlign: "center" }}>
                        <h1 className={styles.h1} style={{fontSize:"2em"}}>REQUEST FOR A SERVICE</h1>
                        <form action="#" method="POST">
                            <input type="text" name="name" placeholder="Name" required />
                            <input type="text" name="email" placeholder="Your Email" required />
                            <input type="text" name="phone" placeholder="Phone Number" required />
                            <button type="submit" className={styles.button}>SUBMIT NOW</button>
                        </form>
                    </div>
                </div>
            </section>
            <br />
        </>
    );
}
