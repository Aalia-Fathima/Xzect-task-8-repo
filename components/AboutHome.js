import Image from "next/image";
import styles from '../app/page.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenRuler,faUser } from '@fortawesome/free-solid-svg-icons';
export default function AboutHome() {
    return (
        <section className={`${styles.aboutsection} d-flex flex-md-nowrap flex-wrap align-items-center justify-content-evenly`}>
            <div style={{ width:"50em", display: 'flex', gap: 20,justifyContent:"center" }} className="flex-md-nowrap flex-wrap">
                <div>
                    <Image src="/roof (1).png" alt="Worker Image" width={300} height={500}/>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <Image src="/roof (2).png" alt="Worker Image" width={300} height={200} />
                    <Image src="/roof (3).png" alt="Worker Image" width={300} height={280} />
                </div>
            </div>
            <div style={{ width:"50em",textAlign: 'center' }}>
                <h3 style={{ color: 'red' }} className={styles.h3}>ABOUT ROOFTOX</h3>
                <h1 className={styles.h1} style={{color:"black",fontSize:"2em"}}>Experienced & Quality More Than 30 Years</h1>
                <p className={styles.p} style={{color:"black"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing integer ultrices suspendisse varius etiam est. Est, felis, tempus nec vitae orci sodales Metus, velit nec at diam in sed. Massa dui ipsum ornare sagittis dolor sagittis amet odio est. Sit semper et velit fusce.</p>
                <div className={styles.features}>
                    <div className={styles.featureitem}>
                        <div><FontAwesomeIcon icon={faPenRuler} style={{ color: "red", }} fontSize={40}/></div><br/>
                        <h4 style={{color:"black",fontSize:"large"}} className={styles.h3}>Quality Materials</h4>
                        <p className={styles.p}>Amet minim mollit deserunt ullamco sit enim.</p>
                    </div>
                    <div className={styles.featureitem}>
                        <div><FontAwesomeIcon icon={faUser} style={{ color: "red", }} fontSize={40}/></div><br/>
                        <h4 style={{color:"black",fontSize:"large"}} className={styles.h3}>Expert Engineer</h4>
                        <p className={styles.p}>Amet minim mollit deserunt ullamco sit enim.</p>
                    </div>
                </div>
                <button className={styles.buttons} style={{backgroundColor:"red"}}>READ MORE</button>
            </div>
        </section>
    );
}


