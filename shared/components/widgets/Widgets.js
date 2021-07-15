import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

const contacts = [
    {id:1, src:'/images/user.jpeg', name: 'David Mark'},
    {id:2, src:'/images/user.jpeg', name: 'David Mark'},
    {id:3, src:'/images/user.jpeg', name: 'David Mark'},
    {id:4, src:'/images/user.jpeg', name: 'David Mark'},
    {id:5, src:'/images/user.jpeg', name: 'David Mark'},
    {id:6, src:'/images/user.jpeg', name: 'David Mark'},
    {id:7, src:'/images/user.jpeg', name: 'David Mark'},
    {id:8, src:'/images/user.jpeg', name: 'David Mark'},
    {id:9, src:'/images/user.jpeg', name: 'David Mark'},
]

function Widgets() {
    return (
        <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
            <div className="flex justify-between items-center text-gray-500 mb-5">
                <h2 className="text-xl">Contacts</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon className="h-6" />
                    <SearchIcon className="h-6" />
                    <DotsHorizontalIcon className="h-6" />
                </div>
            </div>

            {contacts.map(contact => (
                <Contact
                    key={contact.id}
                    src={contact.src}
                    name={contact.name}
                />
            ))}
        </div>
    )
}

export default Widgets
