import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon
  } from "@heroicons/react/solid";
  import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon
  } from "@heroicons/react/outline";
import SideBarItem from "./SideBarItem";

function Sidebar() {
    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]" >
            <SideBarItem src={'/images/user.jpeg'} title="Dev Ose" />
            <SideBarItem Icon={UsersIcon} title="Friends" />
            <SideBarItem Icon={UserGroupIcon} title="Groups" />
            <SideBarItem Icon={ShoppingBagIcon} title="Marketplace" />
            <SideBarItem Icon={DesktopComputerIcon} title="Watch" />
            <SideBarItem Icon={CalendarIcon} title="Events" />
            <SideBarItem Icon={ClockIcon} title="Memories" />
            <SideBarItem Icon={ChevronDownIcon} title="See More" />
        </div>
    )
}

export default Sidebar
