import Image from "next/image";
import styles from "./home.module.css";
import Marquee from "react-fast-marquee";
import { pacifico } from "./fonts";


const footerLabel = "Under construction. Coming soon.";
export default function Home() {
  return (
    <div className={styles.home__container}>
      <div className={styles.home__header}>
        <h1 className={`${styles.home__title} ${pacifico.className}`}>Papeleria el</h1>
        <Image className={styles.home__logo} src="/elsollogo.png" alt="Next.js logo" width={350} height={350} />
      </div>
      <div className={styles.home__content}>
        <Image className={styles['home__image-in-dev']} src="/under_construction.webp" alt="Next.js logo" width={500} height={500} />      
      </div>
      <div className={styles.home__footer}>
         <Marquee>
            {
              Array(20).fill(footerLabel).map((label, index) => {
                if(index % 2 === 0) return <span>&emsp;&emsp;&emsp;</span>
                return (
                  <span key={index} className={styles['home__footer-text']}>{label}</span>
                )
            })
            }
          </Marquee>
      </div>
    </div>
  );
}
