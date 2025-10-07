'use client'

import { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface FormValues {
  password: string;
  confirmPassword: string;
}

const passwordSchema = z.object({
  password: z.string().min(8, { message: 'Password must be at least 8 characters long'}),
  confirmPassword: z.string().min(8, { message: 'Confirm password must be at least 8 characters long'})
}).superRefine(({ password, confirmPassword }, ctx) => {
  if (password !== confirmPassword) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Passwords do not match',
      path: ['confirmPassword'],
    });
  }
});

interface CreatePasswordProps {
  onSubmit?: (data: FormValues) => void;
}

export function CreatePassword({ onSubmit }: CreatePasswordProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(passwordSchema),
  });

  const onFormSubmit: SubmitHandler<FormValues> = (data) => {
    onSubmit?.(data);
  };
   
    
    return (
        <div className='flex flex-col w-full mt-[40px]'>
            <div className='flex flex-col gap-[8px]'>
                <h1 className='font-[700] text-[24px]/[32px] text-[#101828]'>Create Password</h1>
                <p className='font-[400] text-[16px]/[24px] text-[#344054]'>To secure your account, please create a unique password you can always remember when you want to login</p>
            </div>
            <form onSubmit={handleSubmit(onFormSubmit)} className='mt-[24px] w-full flex flex-col gap-[24px]'>
                <div className='flex flex-col w-full gap-[6px]'>
                    <label className='font-[500] text-[14px]/[22px] text-[#344054]' htmlFor='password'>Create Password</label>
                    <input 
                        className='border border-[#D0D5DD] p-[10px] rounded-[8px] focus:outline-none'  
                        {...register('password')}
                        name='password' 
                        placeholder="Enter a secure password" 
                        type="password"
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                </div>

                <div className='flex flex-col w-full gap-[6px]'>
                    <label className='font-[500] text-[14px]/[22px] text-[#344054]' htmlFor='confirmPassword'>Confirm Password</label>
                    <input 
                        className='border border-[#D0D5DD] p-[10px] rounded-[8px] focus:outline-none' 
                        {...register('confirmPassword')}
                        name='confirmPassword' 
                        placeholder="Confirm Your password" 
                        type="password"
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
                </div>

                <button type='submit' className='bg-[#D0D5DD] text-[#FFFFFF] mt-[50px] hover:opacity-90 w-full p-[11px] rounded-[8px] cursor-pointer text-[14px]/[22px]'>Sign up</button>
            </form>
        </div>
    )
}