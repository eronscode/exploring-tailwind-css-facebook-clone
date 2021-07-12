import Image from "next/image";

function SideBarItem({src, Icon, title}) {
    return (
        <div className="flex items-center space-x-2 p-4 hover:bg-gray-200 dark:hover:bg-gray-500 rounded-xl cursor-pointer">
            {src && (
                <Image
                    className="rounded-full"
                    src={src}
                    width={30}
                    height={30}
                    layout="fixed"
                    alt={title}
                /> 
            )}

            {Icon && <Icon className="h-8 w-8 text-blue-500 dark:text-blue-200" />}
            <p className="hidden sm:inline-flex font-medium dark:text-white">{title}</p>
        </div>
    )
}

export default SideBarItem
