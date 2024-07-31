'use client';

import { Video } from '@/app/_types/videoTypes';
import { ColumnDef } from '@tanstack/react-table';


export const columns: ColumnDef<Video>[] = [
    {
        accessorKey: 'videoName',
        header: 'Video Name',
        enableSorting: true
    },
    {
        accessorKey: 'videoLength',
        header: 'Length',
        enableSorting: true
        
    },
    {
        accessorKey: 'status',
        header: 'Status',
        enableSorting: true
    },

    {
      accessorKey: "lastUpdated",
      header: "Last Updated",
      enableSorting: true
    },

    {
      accessorKey: "uploadedAt",
      header: "Uploaded to app",
      enableSorting: true
    }
];
