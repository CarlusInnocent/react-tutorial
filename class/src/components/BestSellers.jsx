import Book from "./Book";
import styles from "./../styles/Global.module.css";

export default function BestSellers() {
    return (
        <>
        <h1>These are the best sellers</h1>
        <div className={styles["best-sellers"]}>
            
            <Book />
            <Book />
            <Book />
        </div>
        </>
    );
}