"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PersonalInfo } from "@/component/personalInfo";
import { CreatePassword } from "@/component/createPassword";
import { auth, db } from "../lib/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { z } from "zod";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  fullName: z.string().min(1, { message: "Full name is required" }),
  schoolEmail: z.string().email({ message: "Please enter a valid school email" }),
  accountType: z.string().min(1, { message: "Please select an account type" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
  confirmPassword: z.string().min(8, { message: "Confirm password must be at least 8 characters long" }),
}).superRefine(({ password, confirmPassword }, ctx) => {
  if (password !== confirmPassword) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });
  }
});

type FormValues = z.infer<typeof formSchema>;

export default function Home() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
  });

  // ✅ Validate first-step fields before proceeding
  const handleNextStep = async () => {
    const isValid = await trigger(["fullName", "schoolEmail", "accountType"]);
    if (isValid) setStep(2);
  };

  const handleSignUp = async (data: FormValues) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, data.schoolEmail, data.password);
      const user = res.user;

      await updateProfile(user, { displayName: data.fullName });

      // ✅ Save role and details to Firestore
      await setDoc(doc(db, "users", user.uid), {
        email: data.schoolEmail,
        fullName: data.fullName,
        role: data.accountType,
        createdAt: new Date().toISOString(),
      });

      router.push("/SignIn");
    } catch (error) {
      console.error("Signup failed:", error);
      const message = error instanceof Error ? error.message : "An unexpected error occurred";
      alert(message);
    }
  };

  return (
    <div className="w-full h-[100vh] max-h-[1026px] bg-[#ffffff] min-h-[1025px] flex h-full max-h-[1025px]">
       <div className="hidden md:flex md:flex-col md:w-1/2 md:h-full md:p-[66px] md:border gap-2 bg-no-repeat bg-cover bg-center bg-[url('/friend-study.png')]">
             <h2 className="text-[#257117] text-2xl font-bold drop-shadow-(color:[#0000001F]) text-[32px]/[40px] ">Smartt</h2>
           <div className="flex flex-col gap-[8px] text-[#FFFFFF] mt-[350px] w-[80%] max-w-[350px]">
             <h2 className="text-2xl font-bold text-[30px]/[40px]">Manage Your Academic Journey at a Go</h2>
             <p className="text-[#E4E7EC] w-full max-w-[346px] drop-shadow-(color:[#0000001F]) font-normal text-[16px]/[24px] ">From assignments and grades to schedules and communication, we`&apos;`ve got everything you need to stay focused and organized</p>
           </div>
         </div>

      <div className="w-full mx-auto flex flex-col md:w-1/2">
        <div className="mt-[24px] mx-auto w-[90%] max-w-[517px]">
          {step === 1 ? (
            <PersonalInfo
              onNext={handleNextStep}
              register={register}
              errors={errors}
              setValue={setValue}
              
            />
          ) : (
            <CreatePassword
              onSubmit={(data) => handleSignUp({ ...watch(), ...data })}
            />
          )}
        </div>
      </div>
    </div>
  );
}



// "use client"

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { PersonalInfo } from "@/component/personalInfo";
// import { CreatePassword } from "@/component/createPassword";
// import { auth, db } from "../lib/firebase";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { useRouter } from "next/navigation";
// import {doc, setDoc } from "firebase/firestore";
// import { z } from "zod";
// import Link from "next/link";

// const formSchema = z.object({
//   fullName: z.string().min(1, { message: 'Full name is required'}),
//   schoolEmail: z.string().email({ message: 'Please enter a valid school email address'}),
//   accountType: z.string().min(1, { message: 'Please select an account type' }),
//   password: z.string().min(8, { message: 'Password must be at least 8 characters long'}),
//   confirmPassword: z.string().min(8, { message: 'Confirm password must be at least 8 characters long'})
// }).superRefine(({ password, confirmPassword }, ctx) => {
//   if (password !== confirmPassword) {
//     ctx.addIssue({
//       code: z.ZodIssueCode.custom,
//       message: 'Passwords do not match',
//       path: ['confirmPassword'],
//     });
//   }
// });

// type FormValues = z.infer<typeof formSchema>;

// export default function Home() {
//   const [step, setStep] = useState(1);
//   const router = useRouter();

//   const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<FormValues>({
//     resolver: zodResolver(formSchema),
//   });

//   const handleNextStep = () => setStep(step + 1);

//   // Helper function to normalize role values
//   const normalizeRole = (accountType: string): string => {
//     if (accountType.includes("Student")) return "student";
//     if (accountType.includes("Teacher")) return "teacher";
//     if (accountType.includes("Parent")) return "parent";
//     return "student"; // default fallback
//   };

//   const handleSignUp = async (data: FormValues) => {
//     try {
//       const res = await createUserWithEmailAndPassword(auth, data.schoolEmail, data.password);
//       const user = res.user;
//        // Update user's display name in Firebase Auth
//       //  await updateProfile(user, { displayName: data.fullName });

//       // Normalize role value before saving
//       const normalizedRole = normalizeRole(data.accountType);

//       //  Save additional data (role, fullName, email) in Firestore
//       try {
//         await setDoc(doc(db, "users", user.uid), {
//           email: data.schoolEmail,
//           fullName: data.fullName,
//           role: normalizedRole, // 'student' | 'teacher' | 'parent'
//           createdAt: new Date().toISOString(),
//         });
//         console.log("✅ User document created in Firestore:", user.uid);
//       } catch (firestoreError: any) {
//         console.error("❌ Failed to create user document in Firestore:", firestoreError);
//         // Don't block the signup flow, but log the error
//         alert(`Account created but profile setup failed: ${firestoreError.message}`);
//       }
      

      
//       router.push("/SignIn");
      
//       console.log("User created:", res.user);
//       sessionStorage.setItem("user", "true");
//     } catch (error: any) {
//       console.error("Signup failed:", error.code, error.message);
//       alert(error.message);
//     }
//   };

//   return (
//      <div className="w-full h-[100vh] max-h-[1026px] bg-[#ffffff] min-h-[1025px] flex h-full max-h-[1025px]">
//        <div className="hidden md:flex md:flex-col md:w-1/2 md:h-full md:p-[66px] md:border gap-2 bg-no-repeat bg-cover bg-center bg-[url('/friend-study.png')]">
//             <h2 className="text-[#257117] text-2xl font-bold drop-shadow-(color:[#0000001F]) text-[32px]/[40px] ">Smartt</h2>
//           <div className="flex flex-col gap-[8px] text-[#FFFFFF] mt-[350px] w-[80%] max-w-[350px]">
//             <h2 className="text-2xl font-bold text-[30px]/[40px]">Manage Your Academic Journey at a Go</h2>
//             <p className="text-[#E4E7EC] w-full max-w-[346px] drop-shadow-(color:[#0000001F]) font-normal text-[16px]/[24px] ">From assignments and grades to schedules and communication, we`&apos;`ve got everything you need to stay focused and organized</p>
//           </div>
//         </div>

//       <div className="w-full mx-auto relative flex flex-col h-full md:w-1/2">
//         {/* <div className="flex flex-col w-full max-w-[520px] mt-[80px] mx-auto gap-[8px]">
//           <h2 className="font-bold text-[24px]/[32px] text-[#101828]">Create an Account</h2>
//           <p className="font-normal text-[16px]/[24px] text-[#344054]">Sign up and get started with Edusmart. Fill in your details and you're all set to explore our features</p>
//         </div> */}

//         <div className="mt-[24px] mx-auto w-[90%] max-w-[517px]">

//           <h2 className="font-[700] md:hidden text-[20px]/[32px] text-[#257117]">Smartt</h2>
//           {step === 1 ? (
//             <PersonalInfo
//             onNext={handleNextStep}
//             register={register}
//             errors={errors}
//             setValue={setValue}
//           />
          
//             // <PersonalInfo
//             //   onNext={handleSubmit(handleNextStep)}
//             //   register={register}
//             //   errors={errors}
//             //   setValue={setValue}
//             // />
//           ) : (
//             <CreatePassword
//               onSubmit={(data) => {
//                 handleSignUp({ ...watch(), ...data });
//               }}
//             />
//           )}
//         </div>

//         <div className="mt-[1000px] absolute bottom-0 right-0  w-full justify-center items-center flex bg-[#F2F4F8] border-[#D0D5DD] drop-shadow-xl drop-shadow-[#0000001F] p-[24px]">
//           <p className=" text-[#667085] text-[14px]/[22px]"> &copy; 2025 Powered by Smartt Nig. All rights are reserved</p>
//         </div>
//       </div>
//      </div>
//   );
// }

