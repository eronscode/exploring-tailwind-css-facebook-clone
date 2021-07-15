import StoriesCard from "./StoriesCard";

const stories = [
  {
    id: 1,
    name: "Bill Gates",
    src: "/images/billgates.jpg",
    profile: "/images/billgates.jpg",
  },
  {
    id: 2,
    name: "Mark Zuckerberg",
    src: "/images/zuckerberg.jpeg",
    profile: "/images/zuckerberg.jpeg",
  },
  {
    id: 3,
    name: "Kylie Spring",
    src: "/images/fashion-girl.jpg",
    profile: "/images/fashion-girl.jpg",
  },
  {
    id: 4,
    name: "Jane Doe",
    src: "/images/fashion3.jpg",
    profile: "/images/fashion3.jpg",
  },
  {
    id: 5,
    name: "Jane Picachu",
    src: "/images/fashion6.jpg",
    profile: "/images/fashion4.jpg",
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
