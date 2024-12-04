'use client';

import Image from 'next/image';
import { useState } from 'react';
import { LuUser, LuList, LuLogOut, LuSettings } from 'react-icons/lu';

export default function AvatarMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const menuOptions = [
        { name: 'Profile', icon: <LuUser className="text-xl" /> },
        { name: 'My Tasks', icon: <LuList className="text-xl" /> },
        { name: 'Settings', icon: <LuSettings className="text-xl" /> },
        { name: 'Logout', icon: <LuLogOut className="text-xl" /> },
    ];

    return (
        <div className="relative z-20">
            {/* Avatar */}
            <Image
                src="/images/profile-pic.jpg"
                alt="User Avatar"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full cursor-pointer"
                onClick={toggleMenu}
            />

            {/* Dropdown Menu */}
            {menuOpen && (
                <div className="absolute z-20 right-0 p-2 mt-2 w-48 bg-white dark:bg-gray-700 border dark:border-gray-600 rounded-lg shadow-lg">
                    <ul>
                        {menuOptions.map((option, index) => (
                            <li
                                key={index}
                                className="flex items-center rounded-md px-2 py-2 hover:bg-gray-100 dark:hover:bg-opacity-50 dark:hover:bg-gray-600 cursor-pointer"
                            >
                                {option.icon}
                                <span className="ml-2 text-sm">{option.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
