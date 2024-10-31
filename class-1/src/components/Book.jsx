import { Children } from "react";
import styles from "./../styles/Global.module.css";
import PropTypes from "prop-types";


//using props object
export default function Book(props) {
    console.log(props);
    return(
        <>
        <div className={styles["seller-card"]}>
            <img src={props.image} />
            <p className={styles["title"]}>{props.title}</p>
            <p className={styles["writter"]}>{props.writter}</p>
            <div className="content">{props.children}</div>
        </div>
        </>
    );
}

Book.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
    writter: PropTypes.string,
    children: PropTypes.string
}


//destructuring the props
const book1 = ({image, title, writter}) => {
    return(
        <>
        <div className={styles["seller-card"]}>
            <img src={image} />
            <p className={styles["title"]}>{title}</p>
            <p className={styles["writter"]}>{writter}</p>
        </div>
        </>
    );
};

//default props
book1.defaultProps = {
    image: "/../../public/images/pic1.jpg",
    title: "Patriot",
    writter: "J. K. Rowling"
}


//children prop
//Done

//simple list
// Usage
//< book2 books={['AnimalFarm', 'HurryPoter', 'JaneEyre']} />
//
// const book2 = (props) => {
//     return(
//         <>
//             <ul>
//                 {props.books.map(
//                     (book, index) => (
//                         <li key={index}>{book}</li>
//                     )
//                 )}
//             </ul>
//         </>
//     );
// };
//AnimalFarm
//HurryPoter
//JaneEyre

// usage 
/*
const movieData = [
    { id: 1, title: 'The Shawshank Redemption', year: 1994 },
    { id: 2, title: 'The Godfather', year: 1972 },
    { id: 3, title: 'The Godfather: Part II', year: 1974 },
];

<book3 movies={movieData} />
*/

// const MoviesList = ({movies}) => {
//     return(
//         <>
//             <ul>
//                 {movies.map((movie) => (
//                     <li key={movie.id}>{movie.title}</li>
//                 ))}
//             </ul>
//         </>
//     );
// };

