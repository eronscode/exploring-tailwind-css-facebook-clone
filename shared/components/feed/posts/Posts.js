import Post from "./Post";

const posts=[
    {
        id: 2,
        name:"Ose Matthew",
        message: 'Hello there we have some things to do for you. Hope you\'re great',
        postImage: '/images/user.jpeg',
        image: '/images/user.jpeg',
        timeStamp:'20/06/2021, 22:34:34'
    },
    {
        id: 2,
        name:"Ose Matthew",
        message: 'Hello there we have some things to do for you. Hope you\'re great',
        postImage: '/images/user.jpeg',
        image: '/images/user.jpeg',
        timeStamp:'20/06/2021, 22:34:34'
    },
    {
        id: 2,
        name:"Ose Matthew",
        message: 'Hello there we have some things to do for you. Hope you\'re great',
        postImage: '/images/user.jpeg',
        image: '/images/user.jpeg',
        timeStamp:'20/06/2021, 22:34:34'
    }
]

function Posts() {
    return (
        <div>
            {posts?.map((item)=>(
                <Post
                key={item.id}
                name={item.name}
                message={item.message}
                postImage={item.postImage}
                timeStamp={item.timeStamp}
                 />
            ))}
        </div>
    )
}

export default Posts
