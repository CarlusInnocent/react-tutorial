import styles from "./NavBar.module.css";

export function NavBar(){
    return(
        <header className={styles.header}>
            <img className={styles.logo} src="./src/components/images/logo.jpg" alt="logo" />
            <nav>
                <ul className={styles.nav_links}>
                    <li><a href="#">SEARCH</a></li>
                    <li><a href="#">LOGOUT</a></li>
                    <li><a href="#">SETTINGS</a></li>
                </ul>
            </nav>
            <a href="#" className={styles.cta}><button>ACCOUNT</button></a>
        </header>
    );
}

