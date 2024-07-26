import { FilterIcon, MoveIcon, Music2Icon, VideoIcon } from 'lucide-react';
import { FC } from 'react';

const AboutWrapper: FC = () => {
    return (
        <>
            <section className='md:py-20 lg:py-24'>
                <div className='container mx-auto px-4 md:px-6'>
                    <div className='mx-auto mb-12 max-w-3xl space-y-4 text-center md:mb-16'>
                        <h2 className='text-3xl font-bold tracking-tight md:text-4xl'>
                            Video Editor
                        </h2>
                        <p className='text-lg text-muted-foreground md:text-xl'>
                            Powerful video editing tools to help you create
                            professional-looking videos with ease.
                        </p>
                    </div>
                    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3'>
                        <div className='rounded-lg bg-card p-6 shadow-sm'>
                            <div className='mb-4 flex items-center gap-4'>
                                <div className='flex items-center justify-center rounded-md bg-primary p-3'>
                                    <VideoIcon className='h-6 w-6 text-primary-foreground' />
                                </div>
                                <h3 className='text-xl font-semibold'>
                                    Trim & Cut
                                </h3>
                            </div>
                            <p className='text-muted-foreground'>
                                Easily trim and cut your videos to get the
                                perfect length and remove unwanted footage.
                            </p>
                        </div>
                        <div className='rounded-lg bg-card p-6 shadow-sm'>
                            <div className='mb-4 flex items-center gap-4'>
                                <div className='flex items-center justify-center rounded-md bg-primary p-3'>
                                    <FilterIcon className='h-6 w-6 text-primary-foreground' />
                                </div>
                                <h3 className='text-xl font-semibold'>
                                    Filters & Effects
                                </h3>
                            </div>
                            <p className='text-muted-foreground'>
                                Apply a wide range of filters and effects to
                                enhance the look and feel of your videos.
                            </p>
                        </div>
                        <div className='rounded-lg bg-card p-6 shadow-sm'>
                            <div className='mb-4 flex items-center gap-4'>
                                <div className='flex items-center justify-center rounded-md bg-primary p-3'>
                                    <Music2Icon className='h-6 w-6 text-primary-foreground' />
                                </div>
                                <h3 className='text-xl font-semibold'>
                                    Audio Editing
                                </h3>
                            </div>
                            <p className='text-muted-foreground'>
                                Easily add, adjust, and mix audio tracks to
                                create the perfect soundtrack for your videos.
                            </p>
                        </div>
                        <div className='rounded-lg bg-card p-6 shadow-sm'>
                            <div className='mb-4 flex items-center gap-4'>
                                <div className='flex items-center justify-center rounded-md bg-primary p-3'>
                                    <MoveIcon className='h-6 w-6 text-primary-foreground' />
                                </div>
                                <h3 className='text-xl font-semibold'>
                                    Transitions
                                </h3>
                            </div>
                            <p className='text-muted-foreground'>
                                Seamlessly transition between clips with a
                                variety of smooth and professional-looking
                                transitions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutWrapper;
