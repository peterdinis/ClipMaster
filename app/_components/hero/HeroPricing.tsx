import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FC } from 'react';
import { CheckIcon } from 'lucide-react';

const HeroPricing: FC = () => {
    return (
        <section className='w-full'>
            <div className='container grid gap-8 px-4 md:px-6'>
                <div className='flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-8'>
                    <div className='grid gap-1'>
                        <h1 className='text-2xl font-bold tracking-tight'>
                            Pricing Plans
                        </h1>
                        <p className='text-muted-foreground'>
                            Choose the plan that fits your video editing needs.
                        </p>
                    </div>
                </div>
                <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    <Card className='bg-card text-card-foreground'>
                        <CardHeader>
                            <CardTitle className='text-xl font-bold'>
                                Starter
                            </CardTitle>
                            <CardDescription>
                                Perfect for hobbyists and small projects.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className='grid gap-4'>
                            <div className='text-4xl font-bold'>$9</div>
                            <div className='text-sm text-muted-foreground'>
                                per month
                            </div>
                            <ul className='grid gap-2 text-sm'>
                                <li className='flex items-center gap-2'>
                                    <CheckIcon className='h-4 w-4' />
                                    1080p video export
                                </li>
                                <li className='flex items-center gap-2'>
                                    <CheckIcon className='h-4 w-4' />
                                    Basic editing tools
                                </li>
                                <li className='flex items-center gap-2'>
                                    <CheckIcon className='h-4 w-4' />
                                    10GB cloud storage
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className='w-full'>Buy Now</Button>
                        </CardFooter>
                    </Card>
                    <Card className='bg-card text-card-foreground'>
                        <CardHeader>
                            <CardTitle className='text-xl font-bold'>
                                Pro
                            </CardTitle>
                            <CardDescription>
                                For advanced users and small teams.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className='grid gap-4'>
                            <div className='text-4xl font-bold'>$19</div>
                            <div className='text-sm text-muted-foreground'>
                                per month
                            </div>
                            <ul className='grid gap-2 text-sm'>
                                <li className='flex items-center gap-2'>
                                    <CheckIcon className='h-4 w-4 fill-green-500' />
                                    4K video export
                                </li>
                                <li className='flex items-center gap-2'>
                                    <CheckIcon className='h-4 w-4 fill-green-500' />
                                    Advanced editing tools
                                </li>
                                <li className='flex items-center gap-2'>
                                    <CheckIcon className='h-4 w-4 fill-green-500' />
                                    50GB cloud storage
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className='w-full'>Buy Now</Button>
                        </CardFooter>
                    </Card>
                    <Card className='bg-card text-card-foreground'>
                        <CardHeader>
                            <CardTitle className='text-xl font-bold'>
                                Enterprise
                            </CardTitle>
                            <CardDescription>
                                For large teams and professional use.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className='grid gap-4'>
                            <div className='text-4xl font-bold'>$49</div>
                            <div className='text-sm text-muted-foreground'>
                                per month
                            </div>
                            <ul className='grid gap-2 text-sm'>
                                <li className='flex items-center gap-2'>
                                    <CheckIcon className='h-4 w-4 fill-green-500' />
                                    8K video export
                                </li>
                                <li className='flex items-center gap-2'>
                                    <CheckIcon className='h-4 w-4 fill-green-500' />
                                    Professional editing tools
                                </li>
                                <li className='flex items-center gap-2'>
                                    <CheckIcon className='h-4 w-4 fill-green-500' />
                                    Unlimited cloud storage
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className='w-full'>Buy Now</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default HeroPricing;
