'use client';

import { FC } from 'react';
import Sidebar from '../shared/Sidebar';
import DashboardContent from './DashboardContent';

const DashboardWrapper: FC = () => {
    return (
        <div className="relative isolation-auto mx-auto min-h-screen max-w-screen-xl overflow-hidden pt-24">
           <Sidebar />
           <DashboardContent />
        </div>
    )
}

export default DashboardWrapper;