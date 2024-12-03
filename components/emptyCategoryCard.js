'use client';

import { LuPlus } from 'react-icons/lu';  // Import the Plus icon
import Button from './button';

const EmptyCategoryCard = ({ onClick }) => {
    return (
        <div className="bg-white min-h-content dark:bg-gray-800 p-4 rounded-lg justify-center items-center flex">
            <div className="flex flex-col items-center text-center">
                <p className="text-xl text-gray-800 dark:text-gray-100 mb-4">Category Not Available</p>
                <Button
                    onClick={() => onClick()}
                >
                    <LuPlus className="mr-2 text-xl" /> Add Category
                </Button>
            </div>
        </div >
    );
};

export default EmptyCategoryCard;
