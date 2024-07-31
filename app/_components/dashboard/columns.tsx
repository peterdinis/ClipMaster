'use client';

import { Video } from '@/app/_types/videoTypes';
import { ColumnDef } from '@tanstack/react-table';


export const columns: ColumnDef<Video>[] = [
    {
        accessorKey: 'videoName',
        header: 'Video Name',
    },
    {
        accessorKey: 'videoLength',
        header: 'Length',
        
    },
    {
        accessorKey: 'status',
        header: 'Status',
    },

    {
      accessorKey: "lastUpdated",
      header: "Last Updated"
    },

    {
      accessorKey: "uploadedAt",
      header: "Uploaded to app"
    }
];
