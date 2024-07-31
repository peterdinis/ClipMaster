import { FC } from 'react';
import { DashboardTable } from './DashboardTable';
import { columns } from './columns';

const DashboardContent: FC = () => {
    return <div className='w-full max-w-4xl px-4'>
        <DashboardTable columns={columns} data={[]} />
    </div>;
};

export default DashboardContent;
