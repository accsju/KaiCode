import { useState } from 'react'

import { Link } from 'react-router-dom';

import styles from './header.module.css'

import Menu from './menu';

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    window.addEventListener("resize", () => {
        setIsOpen(false);
    })
    return (
        <>  
            <header className={styles.globalHeader}>      
                <div className={styles.header}>
                    <div>
                        <button onClick={
                            () => { 
                                setIsOpen(!isOpen);
                            }
                        } className={styles.menuBtn}>
                            {isOpen ? "Close" : "Open"}
                        </button>
                        <h1 className={styles.siteTitle}>
                            <Link to="/KaiCode/" className={styles.linkHeader}>Dai Code</Link>  
                        </h1>
                    </div>
                    <div className={styles.headerLink}>
                        <Link to="/KaiCode/about" className={styles.link}>About</Link>
                        <Link to="/KaiCode/blog" className={styles.link}>Blog</Link>
                        <Link to="/KaiCode/portfolio" className={styles.link}>Portfolio</Link>
                    </div>
                </div>          
                { isOpen && <Menu/> }
            </header>
        </>
    )
}
