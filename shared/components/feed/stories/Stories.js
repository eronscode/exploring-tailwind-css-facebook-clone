import StoriesCard from "./StoriesCard";

const stories = [
  {
    id: 1,
    name: "Jane Doe",
    src: "/images/user.jpeg",
    profile: "/images/user.jpeg",
  },
  {
    id: 2,
    name: "Jane Doe",
    src: "/images/user.jpeg",
    profile: "/images/user.jpeg",
  },
  {
    id: 3,
    name: "Jane Doe",
    src: "/images/user.jpeg",
    profile: "/images/user.jpeg",
  },
  {
    id: 4,
    name: "Jane Doe",
    src: "/images/user.jpeg",
    profile: "/images/user.jpeg",
  },
  {
    id: 5,
    name: "Jane Doe",
    src: "/images/user.jpeg",
    profile: "/images/user.jpeg",
  },
];

function Stories() {
  return (
    <div className='flex space-x-3 justify-center mx-auto'>
      {stories.map((item) => (
        <StoriesCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Stories;
