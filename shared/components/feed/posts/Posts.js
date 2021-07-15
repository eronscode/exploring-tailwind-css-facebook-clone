import Post from "./Post";

const posts=[
    {
        id: 1,
        name:"Mark Zuckerberg",
        message: 'Hello there we have some things to do for you. Hope you\'re great',
        postImage: '/images/fashion4.jpg',
        image: '/images/zuckerberg.jpeg',
        timeStamp:'20/06/2021, 22:34:34'
    },
    {
        id: 2,
        name:"Johnson Gates",
        message: 'Hello there we have some things to do for you. Hope you\'re great',
        postImage: '/images/fashion3.jpg',
        image: '/images/profile3.jpg',
        timeStamp:'20/06/2021, 22:34:34'
    },
    {
        id: 3,
        name:"Ose Matthew",
        message: 'Hello there we have some things to do for you. Hope you\'re great',
        postImage: '',
        image: '/images/user.jpeg',
        timeStamp:'20/06/2021, 22:34:34'
    },
    {
        id: 4,
        name:"Ose Matthew",
        message: 'Hello there we have some things to do for you. Hope you\'re great',
        postImage: '/images/fashion-girl.jpg',
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
                    image={item.image}
                    timeStamp={item.timeStamp}
                />
            ))}
        </div>
    )
}

export default Posts
