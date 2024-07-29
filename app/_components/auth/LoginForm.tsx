'use client';

import { FC, ReactNode, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from './authSchemas';
import { useToast } from '@/components/ui/use-toast';

const LoginForm: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });
    const router = useRouter();
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);

    const loginUser = async (data: any) => {
        setLoading(true);

        try {
            const result = await signIn('credentials', {
                ...data,
                redirect: false,
            });

            if (result?.error) {
                toast({
                    title: 'Something went wrong',
                    className: 'bg-red-600 text-white font-bold',
                    duration: 2000,
                });
            } else {
                toast({
                    title: 'Successfully login to app',
                    className: 'bg-green-600 text-white font-bold',
                    duration: 2000,
                });
                router.push('/dashboard');
            }
        } catch (error) {
            toast({
                title: 'Something went wrong',
                className: 'bg-red-600 text-white font-bold',
                duration: 2000,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className='relative pt-20'>
            <CardHeader>
                <CardTitle className='text-2xl'>Login</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(loginUser)}>
                    <div className='grid gap-4'>
                        <div className='grid gap-2'>
                            <Label htmlFor='email'>Email</Label>
                            <Input
                                id='email'
                                type='email'
                                placeholder='m@example.com'
                                required
                                {...register('email')}
                            />
                            {errors.email && (
                                <p className='text-xl font-bold text-red-700'>
                                    {
                                        errors.email
                                            .message as unknown as ReactNode
                                    }
                                </p>
                            )}
                        </div>
                        <div className='grid gap-2'>
                            <div className='flex items-center'>
                                <Label htmlFor='password'>Password</Label>
                            </div>
                            <Input
                                id='password'
                                type='password'
                                {...register('password')}
                                disabled={loading}
                                required
                            />
                        </div>
                        <Button type='submit' className='w-full'>
                            Login
                        </Button>
                    </div>
                    <div className='mt-4 text-center text-sm'>
                        Don&apos;t have an account?{' '}
                        <Link href='/register' className='underline'>
                            Sign up
                        </Link>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
};

export default LoginForm;
