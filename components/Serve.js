import Image from "next/image";
import styles from '../app/page.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenRuler,faUser,faFileSignature } from '@fortawesome/free-solid-svg-icons';
export default function Serve() {
    return (
        <section className={styles.servicessection}>
            <div className={styles.serviceitem}>
                <div>
                <FontAwesomeIcon icon={faUser} color="red" fontSize={40}/>
                </div><br/>
                <h3>Expert Engineer</h3>
                <p className={styles.p}>Suspendisse varius etiam est vitae dui tempus nec vitae orci sodales metus velit nec at diam in sed.</p>
            </div>
            <div className={styles.serviceitem}>
                <div>
                <FontAwesomeIcon icon={faPenRuler} color="red" fontSize={40}/> 
                </div><br/>
                <h3>Quality Materials</h3>
                <p className={styles.p}>Suspendisse varius etiam est vitae dui tempus nec vitae orci sodales metus velit nec at diam in sed.</p>
            </div>
            <div className={styles.serviceitem}>
                <div>
                <FontAwesomeIcon icon={faFileSignature} color="red" fontSize={40}/>
                </div><br/>
                <h3>Free Estimates</h3>
                <p className={styles.p}>Suspendisse varius etiam est vitae dui tempus nec vitae orci sodales metus velit nec at diam in sed.</p>
            </div>
        </section>
    );
}