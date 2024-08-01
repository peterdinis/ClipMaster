'use client';

import { FC } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Video } from 'lucide-react';

const UploadVideo: FC = () => {
    return (
        <Dialog>
            <DialogTrigger><Video />Upload Video</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className='font-bold prose prose-h2: text-3xl dark:text-white'>Upload Video</DialogTitle>
                    <DialogDescription className='pt-5'>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default UploadVideo;
