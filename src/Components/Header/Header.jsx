import styles from "./styles.module.css"


export default function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.nav}>
                <div className={styles.nav__logo}>
                    <img src="/images/logo.svg" alt="logo"></img>
                </div>
                <nav className={styles.nav__lista}>
                    <a className={styles.lista__item} href="">About</a>
                    <a className={styles.lista__item} href="">Careers</a>
                    <a className={styles.lista__item} href="">Events</a>
                    <a className={styles.lista__item} href="">Products</a>
                    <a className={styles.lista__item} href="">Support</a>
                </nav>
            </div>
            <div className={styles.header__cuadro}>
                <p className={styles.cuadro__texto} >IMMERSIVE <br/> EXPERIENCES <br/> THAT DELIVER</p>
            </div>
        </header>
    )
}