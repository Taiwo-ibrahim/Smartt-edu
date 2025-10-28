"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../lib/firebase"; // make sure you export `auth` from firebase.ts
import { Router } from "next/router";
import { useRouter } from "next/navigation";



export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter()

  // ✅ Watch authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User signed in:", user.uid);
        // Example: redirect to dashboard
        router.push("/Home");
      } else {
        console.log("No user signed in");
      }
    });

    return () => unsubscribe();
  }, []);

  // ✅ Handle Sign In
  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const user = res.user;
    //   console.log("Login successful:", res.user);
      router.push("/Home"); // navigate after login
      sessionStorage.setItem("user", "true"); // not secure, just a flag
    } catch (error: any) {
      console.error("Login failed:", error.code, error.message);
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-[100vh] h-full md:min-h-[1026px] bg-[#ffffff] flex">
      {/* Left side image + text */}
      <div className="hidden  md:w-1/2 md:flex md:flex-col lg:p-[66px] md:p-[30px] md:bg-no-repeat md:bg-cover md:bg-center bg-[url('/signin-img.png')]">
        <h2 className="text-[#257117] text-2xl font-bold text-[32px]/[40px]">Smartt</h2>
        <div className="flex flex-col gap-[8px] text-[#FFFFFF] mt-[400px] w-[100%] max-w-[350px]">
          <h2 className=" w-full text-2xl font-bold text-[30px]/[40px]">
            Manage Your Academic Journey at a Go
          </h2>
          <p className="w-full text-[#E4E7EC] max-w-[346px] font-normal text-[16px]/[24px]">
            From assignments and grades to schedules and communication, we’ve got everything you need to stay focused and organized
          </p>
        </div>
      </div>

      {/* Right side form */}
      <div className="relative flex flex-col h-full w-full md:w-1/2">
        <div className="flex flex-col w-[90%] max-w-[517px] mt-[84px] mx-auto">
          <h2 className="font-[700] mb-[40px] md:hidden text-[20px]/[32px] text-[#257117]">Smartt</h2>
          <div className="flex flex-col gap-[8px]">
            <h2 className="text-[#101828] text-[24px]/[32px] font-[700]">Welcome Back</h2>
            <p className="text-[#344054] text-[16px]/[24px] font-[400]">
              Please enter the login details to your account and pick up from where you left off on Smartt.
            </p>
          </div>

          <form autoComplete="off" onSubmit={handleSignIn} className="mt-[24px] flex flex-col gap-[24px]">

            <div className="flex flex-col gap-[6px]">
              <label className="text-[14px]/[22px] font-[500] text-[#344054]" htmlFor="schoolEmail">
                School Email
              </label>
              <input
                className="border border-[#D0D5DD] p-[10px] rounded-[8px]"
                type="email"
                id="schoolEmail"
                placeholder="examplemail@smartt.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col gap-[6px]">
              <label className="text-[14px]/[22px] font-[500] text-[#344054]" htmlFor="password">
                Password
              </label>
              <input
                className="border border-[#D0D5DD] p-[10px] rounded-[8px]"
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}

            <div className="mt-[5px]">
              <button
                className="bg-[#D0D5DD] text-[#000] hover:opacity-90 w-full p-[11px] rounded-[8px] text-[14px]/[22px]"
                type="submit"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>

              <span className="flex mt-[16px] items-center justify-center gap-[4px]">
                <p className="text-[#101828] text-[16px]/[24px]">Don`&apos;`t have an account?</p>
                <Link className="font-[500] text-[#B44A05] underline underline-offset-4 text-[16px]/[24px]" href="/">
                  SignUp here
                </Link>
              </span>
            </div>
          </form>
        </div>

        <div className="mt-[150px] md:absolute md:bottom-0 w-full flex justify-center bg-[#F2F4F8] border-[#D0D5DD] p-[24px]">
          <p className="text-[#667085] text-[14px]/[22px]">
            &copy; 2025 Powered by Smartt Nig. All rights are reserved
          </p>
        </div>
      </div>
    </div>
  );
}


 


// import Link from "next/link";

// export default function SignIn() {
//     return (
//         <div className="w-full h-[100vh] max-h-[1026px] bg-[#ffffff] min-h-[1025px] flex h-full max-h-[1025px]">
//         <div className="w-1/2 flex flex-col h-full p-[66px] gap-2 bg-no-repeat bg-cover bg-center bg-[url('/signin-img.png')] ">
//              <h2 className="text-[#257117] text-2xl font-bold drop-shadow-(color:[#0000001F]) text-[32px]/[40px] ">Smartt</h2>
//            <div className="flex flex-col gap-[8px] text-[#FFFFFF] mt-[400px] w-[80%] max-w-[350px]">
//              <h2 className="text-2xl font-bold text-[30px]/[40px]">Manage Your Academic Journey at a Go</h2>
//              <p className="text-[#E4E7EC] w-full max-w-[346px] drop-shadow-(color:[#0000001F]) font-normal text-[16px]/[24px] ">From assignments and grades to schedules and communication, we’ve got everything you need to stay focused and organized</p>
//            </div>
//          </div>
 
//        <div className=" relative flex flex-col h-full w-1/2">

//         <div className="flex flex-col w-[80%] max-w-[517px] mt-[84px] mx-auto">
//             <div className="flex flex-col w-full gap-[8px]">
//                 <h2 className="text-[#101828] text-[24px]/[32px] font-[700] ">Welcome Back</h2>
//                 <p className="text-[#344054] text-[16px]/[24px] font-[400]   ">Please enter the login details to your account and pick up from where you left off on Smartt. </p>
//             </div>
//             <form autoComplete="off" className="mt-[24px] w-full flex flex-col gap-[24px]  ">
//                 <div className="flex flex-col w-full gap-[6px]">
//                     <label className=" text-[14px]/[22px] text-[#344054] font-[500] " htmlFor="schoolEmail">School Email</label>
//                     <input className="border drop-shadow-[#1018280D] border-[#D0D5DD] p-[10px] rounded-[8px] " type="email" name="schoolEmail" id="schoolEmail" placeholder="examplemail@smartt.com" />
//                 </div>
//                 <div className="flex flex-col w-full gap-[6px]">
//                     <label className=" text-[14px]/[22px] text-[#344054] font-[500] " htmlFor="password">Password</label>
//                     <input className="border drop-shadow-[#1018280D] border-[#D0D5DD] p-[10px] rounded-[8px] " type="password" name="password" id="password" placeholder="Enter your password" />
//                 </div>

//                 <div className="mt-[5px] mx-auto w-[100%] max-w-[517px]">
//                     <button
//                     className="bg-[#FCB485] border border-[#FB914C] text-[#000000]  mt-[50px] bg-[#D0D5DD] hover:opacity-90 w-full p-[11px] rounded-[8px] cursor-pointer text-[14px]/[22px]"
//                     type="submit"
//                     >Login</button>
//                     <span className="flex mt-[16px] items-center justify-center gap-[4px]">
//                     <p className="text-[#101828] font-[400] text-[16px]/[24px]">Don't have an account?</p>
//                     <Link className="font-[500] text-[#B44A05] underline text-[16px]/[24px]" href="/">Sign up here</Link>
//                     </span>
//                 </div>
//             </form>
//         </div>
               
 
//          <div className="mt-[1000px] absolute bottom-0 right-0  w-full justify-center items-center flex bg-[#F2F4F8] border-[#D0D5DD] drop-shadow-xl drop-shadow-[#0000001F] p-[24px]">
//            <p className=" text-[#667085] text-[14px]/[22px]"> &copy; 2025 Powered by Smartt Nig. All rights are reserved</p>
//          </div>
//        </div>
//       </div>
//     )
// }