"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PersonalInfo } from "@/component/personalInfo";
import { CreatePassword } from "@/component/createPassword";
import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";
import { z } from "zod";
import Link from "next/link";

const formSchema = z.object({
  fullName: z.string().min(1, { message: 'Full name is required'}),
  schoolEmail: z.string().email({ message: 'Please enter a valid school email address'}),
  accountType: z.string().min(1, { message: 'Please select an account type' }),
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

type FormValues = z.infer<typeof formSchema>;

export default function Home() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const handleNextStep = () => setStep(step + 1);

  const handleSignUp = async (data: FormValues) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, data.schoolEmail, data.password);
      console.log("User created:", res.user);
      router.push("/SignIn");
      sessionStorage.setItem("user", "true");
      if (res.user) {
        await updateProfile(res.user, { displayName: data.fullName });
      }
    } catch (error: any) {
      console.error("Signup failed:", error.code, error.message);
    }
  };

  return (
     <div className="w-full h-[100vh] max-h-[1026px] bg-[#ffffff] min-h-[1025px] flex h-full max-h-[1025px]">
       <div className="w-1/2 flex flex-col h-full p-[66px] gap-2 bg-no-repeat bg-cover bg-center bg-[url('/friend-study.png')] ">
            <h2 className="text-[#257117] text-2xl font-bold drop-shadow-(color:[#0000001F]) text-[32px]/[40px] ">Smartt</h2>
          <div className="flex flex-col gap-[8px] text-[#FFFFFF] mt-[350px] w-[80%] max-w-[350px]">
            <h2 className="text-2xl font-bold text-[30px]/[40px]">Manage Your Academic Journey at a Go</h2>
            <p className="text-[#E4E7EC] w-full max-w-[346px] drop-shadow-(color:[#0000001F]) font-normal text-[16px]/[24px] ">From assignments and grades to schedules and communication, we've got everything you need to stay focused and organized</p>
          </div>
        </div>

      <div className=" relative flex flex-col h-full w-1/2">
        {/* <div className="flex flex-col w-full max-w-[520px] mt-[80px] mx-auto gap-[8px]">
          <h2 className="font-bold text-[24px]/[32px] text-[#101828]">Create an Account</h2>
          <p className="font-normal text-[16px]/[24px] text-[#344054]">Sign up and get started with Edusmart. Fill in your details and you're all set to explore our features</p>
        </div> */}

        <div className="mt-[24px] mx-auto w-[100%] max-w-[517px]">
          {step === 1 ? (
            <PersonalInfo
              onNext={handleSubmit(handleNextStep)}
              register={register}
              errors={errors}
              setValue={setValue}
            />
          ) : (
            <CreatePassword
              onSubmit={(data) => {
                handleSignUp({ ...watch(), ...data });
              }}
            />
          )}
        </div>

        <div className="mt-[1000px] absolute bottom-0 right-0  w-full justify-center items-center flex bg-[#F2F4F8] border-[#D0D5DD] drop-shadow-xl drop-shadow-[#0000001F] p-[24px]">
          <p className=" text-[#667085] text-[14px]/[22px]"> &copy; 2025 Powered by Smartt Nig. All rights are reserved</p>
        </div>
      </div>
     </div>
  );
}

