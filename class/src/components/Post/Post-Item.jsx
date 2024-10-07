import PropTypes from "prop-types";

PostItem.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    verified: PropTypes.bool,
    image: PropTypes.string
}

PostItem.defaultProps = {
    name: "Anonymous",
    age: 0,
    verified: false,
    image: "./src/components/aci.jpeg"
}
export function PostItem(props){
    return(
        <div className="post-item">
            <span>
                <img src={props.image} alt="user-image" width={100} height={125}/>
                <span className="bio">
                    <p>Name: {props.name}</p>
                    <p>Age: {props.age}</p>
                    <p>Verified: {props.verified ? "Yes" : "No"}</p>
                </span>
            </span>
            <p>This is my first post in REACT #learningReact</p>
            <p>Last Seen 3 hours ago</p>
            <button>Like</button>
            <button>Comment</button>
            <button>Retweet</button>
        </div>
    );
}
