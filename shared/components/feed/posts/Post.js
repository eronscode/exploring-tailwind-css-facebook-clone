import Image from "next/image"
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";

function Post({name, message, email, postImage, image, timeStamp}) {
    return (
        <div className="flex flex-col">
            <div className="p-5 dark:bg-gray-500  bg-white mt-5 rounded-t-2xl shadow-sm">
                <div className="flex items-center space-x-2">
                    <Image className="rounded-full" src={image} width={40} height={40} alt="post"/>
                    <div>
                        <p className="dark:text-white font-medium">{name}</p>
                        <p className="dark:text-white text-xs text-gray-400">
                            {timeStamp}
                        </p>
                    </div>
                </div>
                <p className="pt-4 dark:text-white">{message}</p>
            </div>
            {postImage && (
                <div className="relative h-56 md:h-96 dark:bg-gray-500  bg-white">
                    <Image src={postImage} alt="post" objectFit='cover' layout="fill"/>
                </div>
            )}
            {/*  */}
            <div className="flex justify-between items-center rounded-b-2-xl dark:bg-gray-500  bg-white shadow-md dark:text-white text-gray-400 border-t">
                <div className="inputIcon rounded-none rounded-bl-2xl"><ThumbUpIcon className="h-4" /><p className="text-xs sm:text-base">Like</p></div>
                <div className="inputIcon rounded-none"><ChatAltIcon className="h-4" /><p className="text-xs sm:text-base">Comment</p></div>
                <div className="inputIcon rounded-none rounded-br-2xl"><ShareIcon className="h-4" /><p className="text-xs sm:text-base">Share</p></div>
            </div>
        </div>
    )
}

export default Post
