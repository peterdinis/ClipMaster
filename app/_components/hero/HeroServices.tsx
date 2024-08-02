import {
    FileOutputIcon,
    FilePenIcon,
    ImportIcon,
    VideoIcon,
} from 'lucide-react';
import { FC } from 'react';

const HeroServices: FC = () => {
    return (
        <section id="services" className='w-full md:py-24 lg:py-32'>
            <div className='container px-4 md:px-6'>
                <div className='flex flex-col items-center justify-center space-y-8'>
                    <div className='space-y-4 text-center'>
                        <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                            Our Video Editing Services
                        </h2>
                        <p className='max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                            From capture to export, we've got you covered. Our
                            suite of video editing tools and services will help
                            you create professional-quality videos with ease.
                        </p>
                    </div>
                    <div className='grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
                        <div className='flex flex-col items-center gap-4 rounded-lg bg-background p-6 shadow-sm'>
                            <div className='flex items-center justify-center rounded-md bg-primary p-3'>
                                <VideoIcon className='h-6 w-6 text-primary-foreground' />
                            </div>
                            <h3 className='text-lg font-semibold'>
                                Video Capture
                            </h3>
                            <p className='text-center text-muted-foreground'>
                                Capture high-quality video footage with our
                                advanced recording tools.
                            </p>
                        </div>
                        <div className='flex flex-col items-center gap-4 rounded-lg bg-background p-6 shadow-sm'>
                            <div className='flex items-center justify-center rounded-md bg-secondary p-3'>
                                <FilePenIcon className='h-6 w-6 text-secondary-foreground' />
                            </div>
                            <h3 className='text-lg font-semibold'>
                                Video Editing
                            </h3>
                            <p className='text-center text-muted-foreground'>
                                Effortlessly edit your videos with our intuitive
                                editing suite.
                            </p>
                        </div>
                        <div className='flex flex-col items-center gap-4 rounded-lg bg-background p-6 shadow-sm'>
                            <div className='flex items-center justify-center rounded-md bg-muted p-3'>
                                <FileOutputIcon className='h-6 w-6 text-muted-foreground' />
                            </div>
                            <h3 className='text-lg font-semibold'>
                                Video Rendering
                            </h3>
                            <p className='text-center text-muted-foreground'>
                                Render your videos with high-quality output and
                                fast processing.
                            </p>
                        </div>
                        <div className='flex flex-col items-center gap-4 rounded-lg bg-background p-6 shadow-sm'>
                            <div className='flex items-center justify-center rounded-md bg-card p-3'>
                                <ImportIcon className='h-6 w-6 text-card-foreground' />
                            </div>
                            <h3 className='text-lg font-semibold'>
                                Video Exporting
                            </h3>
                            <p className='text-center text-muted-foreground'>
                                Export your videos in a variety of formats for
                                easy sharing and distribution.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroServices;
