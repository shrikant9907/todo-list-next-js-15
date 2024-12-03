'use client';

import useLocalStorage from "@/hooks/useLocalStorage";
import { useRouter } from "next/navigation";
import { LuList, LuSettings, LuDownload, LuChevronDown, LuChevronUp, LuChevronLeft, LuChevronRight, LuListTodo } from 'react-icons/lu';

const SidebarMenu = ({ name, icon, isActive, toggle, hideText, path }) => {
    const router = useRouter();

    const handleClick = () => {
        if (path) {
            router.push(path);
        }
        toggle && toggle();
    };

    return (
        <li>
            <div
                className="flex justify-between items-center py-2 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:bg-opacity-30 rounded-md px-2 cursor-pointer"
                onClick={handleClick}
            >
                <div className="flex items-center">
                    {icon}
                    {!hideText && <span className="ml-2 hidden text-sm lg:block">{name}</span>}
                </div>
                {isActive && <LuChevronUp />}
            </div>
        </li>
    );
};

const menuItems = [
    { name: "My Tasks", icon: <LuListTodo className="text-xl text-orange-400" />, path: "/" },
    { name: "Categories", icon: <LuList className="text-xl text-orange-400" />, path: "/categories" },
    { name: "Settings", icon: <LuSettings className="text-xl text-orange-400" />, path: "/settings" },
    { name: "Export", icon: <LuDownload className="text-xl text-orange-400" />, path: "/export" }
];

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useLocalStorage('sidebarCollapsed', false);

    const toggleSidebar = () => setIsCollapsed(!isCollapsed);

    return (
        <aside
            className={`transition-all duration-300 ease-in-out ${isCollapsed ? 'w-16' : 'w-64'} 
                bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 overflow-hidden`}
        >
            <div className="flex justify-between items-center pb-4">
                <div
                    onClick={toggleSidebar}
                    className="cursor-pointer text-xl text-orange-400"
                >
                    {isCollapsed ? <LuChevronRight /> : <LuChevronLeft />}
                </div>
            </div>

            <ul>
                {menuItems.map((item, index) => (
                    <SidebarMenu
                        key={index}
                        hideText={isCollapsed}
                        name={item.name}
                        icon={item.icon}
                        path={item.path}
                    />
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
