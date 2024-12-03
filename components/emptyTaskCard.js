'use client';

import { LuPlus } from 'react-icons/lu';
import Button from './button';

const EmptyTaskCard = ({ onClick }) => {
    return (
        <div className="bg-white min-h-content dark:bg-gray-800 p-4 rounded-lg justify-center items-center flex">
            <div className="flex flex-col items-center text-center">
                <p className="text-xl text-gray-800 dark:text-gray-100 mb-4">Tasks Not Available</p>
                <Button
                    onClick={() => onClick()}
                >
                    <LuPlus className="mr-2 text-xl" /> Add Task
                </Button>
            </div>
        </div>
    );
};

export default EmptyTaskCard;
