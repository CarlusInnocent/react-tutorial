import PostItem from "./PostItem";

const usersData = [
    {id:1, name:"Carlus", content:"Hello Carlus", img:"./../../public/images/user.jpeg"},
    {id:2, name:"Teddy", content:"Hello Teddy", img:"./../../public/images/teddy.jpeg"},
    {id:3, name:"Bacelona", content:"Hello Bac", img:"./../../public/images/bac.jpeg"},
    {id:4, name:"Cedric", content:"Hello Cedric", img:"./../../public/images/ced.jpeg"},
    {id:5, name:"Evelyne", content:"Hello Eve", img:"./../../public/images/eve.jpeg"}
]

//= [1, 2, 3, 4]

export default function Posts(){
    return(
        <>
            <h1>POSTS</h1>
            <PostItem users={usersData}/>
        </>
    );
};

//./../../public/images/user.jpeg