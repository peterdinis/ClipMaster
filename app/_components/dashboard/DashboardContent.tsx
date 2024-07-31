import { FC } from 'react';
import { columns } from './columns';
import { DataTable } from './DashboardTable';

const DashboardContent: FC = () => {
    return <div className='w-full max-w-4xl px-4'>
        <DataTable columns={columns} data={[]} />
    </div>;
};

export default DashboardContent;
