'use client'

import { useState } from 'react';
import { UseFormRegister, FieldErrors, UseFormSetValue } from "react-hook-form";
import { BsPerson } from 'react-icons/bs';
import Link from 'next/link';

interface FormValues {
  fullName: string;
  schoolEmail: string;
  accountType: string;
  password: string;
  confirmPassword: string;
}

interface PersonalInfoProps {
  onNext: () => void;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  setValue: UseFormSetValue<FormValues>;
}

export function PersonalInfo({ onNext, register, errors, setValue }: PersonalInfoProps) {
  const [accountTypeOpen, setAccountTypeOpen] = useState(false);
  const [selectedAccountType, setSelectedAccountType] = useState('Select account type');
  
  function handleClick() {
    setAccountTypeOpen(!accountTypeOpen);
  }

  function handleAccountTypeSelect(accountType: string) {
    setSelectedAccountType(accountType);
    setAccountTypeOpen(false);
    setValue('accountType', accountType, { shouldValidate: true });
  }
  return (
    <div className='flex flex-col gap-[24px] w-full'>
      <div>

      </div>

      <div>

        <div className="flex flex-col w-full max-w-[520px] mt-[80px] mx-auto gap-[10px]">
          <h2 className="font-bold text-[24px]/[32px] text-[#101828]">Create an Account</h2>
          <p className="font-[400] text-[16px]/[24px] text-[#344054] mb-[20px]">Sign up and get started with smartt. Fill in your details and you&apos;re all set to explore our features</p>
        </div>

        <form onSubmit={onNext} className="flex flex-col w-full gap-[24px] max-w-[510px] justify-center">
          <div className="flex flex-col w-full gap-[6px]">
            <label className="font-[500] text-[14px] text-[#344054]" htmlFor="fullName">Full Name</label>
            <input 
              className="border border-[#D0D5DD] p-[10px] rounded-[8px]" 
              id="fullName" 
              {...register('fullName')}
              type="text" 
              name="fullName" 
              placeholder="Enter your full name"
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName?.message}</p>}
          </div>

          <div className="flex flex-col w-full gap-[2px]">
            <label className="font-[500] text-[14px] mt-[4px] text-[#344054]" htmlFor="schoolEmail">School Email</label>
            <input 
              className="border border-[#D0D5DD] p-[10px] rounded-[8px]" 
              id="schoolEmail" 
              {...register('schoolEmail')}
              type="email" 
              name="schoolEmail" 
              placeholder="examplemail@smartt.com"
            />
            {/* <p>Be sure to cross-check the email address you enter</p> */}
            {errors.schoolEmail && <p className="text-red-500 text-sm mt-1">{errors.schoolEmail?.message}</p>}
          </div>

          <div className="flex flex-col w-full gap-[6px]">
            <p className="font-[500] text-[14px]/[22px] text-[#344054] ">Account Type</p>
            <div className="flex flex-col w-full gap-[6px] ">
              <button
                type="button"
                onClick={handleClick}
                className="hover:shadow-sm hover:border-[#1018280D]-500 transition-all duration-300 ease-in-out flex items-center justify-between p-[10px] cursor-pointer border rounded-[8px] border-[#BDD4B9]"
              >
                <span className='flex items-center gap-[6px]'>
                  <BsPerson className='text-[#667085]'/>
                  <p className='text-[#101828] text-[16px] font-normal'>{selectedAccountType}</p>
                </span>
                <span>
                  {accountTypeOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#667085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6"/></svg> 
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#667085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                  )}
                </span>
              </button>
              {errors.accountType && <p className="text-red-500 text-sm mt-1">{errors.accountType?.message}</p>}

              {accountTypeOpen && (
                <div className='flex cursor-pointer flex-col w-full gap-[0] rounded-[8px] border border-[#F2F4F7] inset-shadow-sm shadow-md'>
                  <button
                    type="button" 
                    onClick={() => handleAccountTypeSelect("Student's Account")}
                    className='flex items-center justify-between p-[8px] hover:bg-[#F9FAFB] rounded-[8px]'
                  >
                    <span className='flex gap-[6px] items-center'>
                      <BsPerson className='text-[#667085]' />
                      <p className='font-[500] text-[16px]/[24px]'>Student&apos;s Account </p>
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#257117" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAccountTypeSelect("Teacher's Account")}
                    className='flex items-center justify-between p-[8px] hover:bg-[#F9FAFB] rounded-[8px]'
                  >
                    <span className='flex gap-[6px] items-center'>
                      <BsPerson className='text-[#667085]' />
                      <p className='text-[#101828] text-[16px]/[24px]'>Teacher&apos;s Account</p>
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAccountTypeSelect("Parent's Account")}
                    className='flex items-center justify-between p-[8px] hover:bg-[#F9FAFB] rounded-[8px]'
                  >
                    <span className='flex gap-[6px] items-center'>
                      <BsPerson className='text-[#667085]' />
                      <p className='text-[#101828] text-[16px]/[24px]'>Parent&apos;s Account</p>
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="mt-[5px] mx-auto w-[100%] max-w-[517px]">
            <button
              className="bg-[#D0D5DD] text-[#FFFFFF] mt-[50px] hover:opacity-90 w-full p-[11px] rounded-[8px] cursor-pointer text-[14px]/[22px]"
              type="submit"

            >Continue</button>
            <span className="flex mt-[16px] items-center justify-center gap-[4px]">
              <p className="text-[#101828] font-[400] text-[16px]/[24px]">Already have an account?</p>
              <Link className="font-[500] text-[#B44A05] underline text-[16px]/[24px]" href="/SignIn">Login here</Link>
            </span>
          </div>
          
        </form>
      </div>


    </div>
    );
}
