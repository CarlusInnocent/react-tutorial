import Book from "./Book";
import styles from "./../styles/Global.module.css";

const book1 = {
    image: "/../../public/images/pic1.jpg",
    title: "Patriot",
    writter: "J. K. Rowling",
}

const book2 = {
    image: "/../../public/images/4.jpg",
    title: "Patriot",
    writter: "J. K. Rowling",
}

const book3 = {
    image: "/../../public/images/pic3.jpg",
    title: "Patriot",
    writter: "J. K. Rowling",
}

export default function BestSellers() {
    return (
        <>
        <h1>These are the best sellers</h1>
        <div className={styles["best-sellers"]}>
            
            <Book 
            image={book1.image}
            title={book1.title}
            writter={book1.writter}
            >
                <h1>Hello, World</h1>
                <p>THis is inside the first book component</p>
            </Book>
            <Book 
            image={book2.image}
            title={book2.title}
            writter={book2.writter}
            />
            <Book 
            image={book3.image}
            title={book3.title}
            writter={book3.writter}
            />
        </div>
        </>
    );
}


