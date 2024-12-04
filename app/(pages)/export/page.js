'use client';

import Button from '@/components/button';
import { LuExternalLink } from 'react-icons/lu';

const Home = () => {

    return (
        <div className="p-4">
            <div className='flex flex-wrap gap-3 justify-between items-start'>
                <h1 className="text-2xl font-semibold mb-4">Import / Export</h1>
                <Button onClick={() => setOpenCategoryModal(true)}>
                    <LuExternalLink className="mr-2 text-xl" /> Export To JSON
                </Button>
            </div>

        </div >
    );
};

export default Home;
