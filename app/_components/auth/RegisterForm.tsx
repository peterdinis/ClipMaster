'use client';

import { FC, ReactNode } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from './authSchemas';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import { useMutation } from '@tanstack/react-query';
import { registerUser } from '@/app/_store/mutations/authMutations';

const RegisterForm: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(registerSchema),
    });
    const router = useRouter();
    const { toast } = useToast();

    const registerUserMut = useMutation({
        mutationKey: ['registerUser'],
        mutationFn: (data) => registerUser(data),
        onSuccess: () => {
            toast({
                title: 'Sucessfully registered to the app',
                className: 'bg-green-600 text-white font-bold',
                duration: 2000,
            });
            router.push('/login');
        },
        onError: () => {
            toast({
                title: 'Failed to register app',
                className: 'bg-red-600 text-white font-bold',
                duration: 2000,
            });
        },
    });

    const onSubmit = (data: any) => {
        registerUserMut.mutate(data);
        reset();
    };

    return (
        <Card className='relative pt-20'>
            <CardHeader>
                <CardTitle className='text-2xl'>Register</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid gap-4'>
                        <div className='grid gap-2'>
                            <Label htmlFor='name'>Name</Label>
                            <Input
                                id='name'
                                type='text'
                                placeholder='Name'
                                required
                                {...register('name')}
                            />

                            {errors.name && (
                                <p className='font-bold text-red-600'>
                                    {
                                        errors.name
                                            .message as unknown as ReactNode
                                    }
                                </p>
                            )}
                        </div>
                        <div className='grid gap-2'>
                            <Label htmlFor='email'>Email</Label>
                            <Input
                                id='email'
                                type='email'
                                placeholder='Email'
                                required
                                {...register('email')}
                            />

                            {errors.email && (
                                <p className='font-bold text-red-600'>
                                    {
                                        errors.email
                                            .message as unknown as ReactNode
                                    }
                                </p>
                            )}
                        </div>
                        <div className='grid gap-2'>
                            <Label htmlFor='password'>Password</Label>
                            <Input
                                id='password'
                                type='password'
                                placeholder='**********************************'
                                required
                                {...register('password')}
                            />

                            {errors.password && (
                                <p className='font-bold text-red-600'>
                                    {
                                        errors.password
                                            .message as unknown as ReactNode
                                    }
                                </p>
                            )}
                        </div>
                        <Button type='submit' className='w-full'>
                            Register
                        </Button>
                    </div>
                    <div className='mt-4 text-center text-sm'>
                        Already have an account?{' '}
                        <Link href='/login' className='underline'>
                            Login here
                        </Link>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
};

export default RegisterForm;
