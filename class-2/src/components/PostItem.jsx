export default function PostItem({ users }){
    return (
        <>
            {users.map((user) => (
                <div className="postItem" key={user.id}>
                    <img src={user.img} alt={user.name} />
                    <div>
                        <span>{user.name}</span>
                        <span>{user.content}</span>
                        <button>LIKE</button>
                    </div>
                </div>
            ))}
        </>
    );
};
