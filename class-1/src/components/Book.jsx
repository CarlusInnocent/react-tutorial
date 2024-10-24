import styles from "./../styles/Global.module.css";

export default function Book() {
    return(
        <>
        <div className={styles["seller-card"]}>
            <img src="./public/images/pic1.jpg" alt="patriot" />
            <p className={styles["title"]}>Patriot</p>
            <p className={styles["writter"]}>Alexei Navalny</p>
        </div>
        </>
    );
}