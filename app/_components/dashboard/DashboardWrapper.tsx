'use client';

import { FC } from 'react';
import DashboardContent from './DashboardContent';
import Sidebar from '../shared/Sidebar';
const DashboardWrapper: FC = () => {
    return (
        <div className='relative isolation-auto mx-auto min-h-screen max-w-screen-xl overflow-hidden pt-24'>
            <Sidebar />
            <div className='flex flex-1 justify-center'>
                <DashboardContent />
            </div>
        </div>
    );
};

export default DashboardWrapper;
