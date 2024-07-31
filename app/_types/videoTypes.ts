import { ColumnDef } from "@tanstack/react-table";

export type Video = {
    id: string;
    videoName: string;
    videoLength: string;
    status: 'pending' | 'processing' | 'success' | 'failed';
    lastUpdated: string | Date;
    uploadedAt: string | Date;
};


export interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
}