"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();


  // ✅ Watch auth state (only redirect if already logged in on page load)
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, async (user) => {
  //     if (!user) return;

  //     const userRef = doc(db, "users", user.uid);
  //     const snap = await getDoc(userRef);
  //     const data = snap.data();
  //     const role = data?.role?.toLowerCase?.();

  //     if (role === "student") router.push("/student");
  //     else if (role === "teacher") router.push("/teacher");
  //     else if (role === "parent") router.push("/parent");
  //   });

  //   return () => unsubscribe();
  // }, [router]);

  // ✅ Handle Sign In (main redirect happens here)
  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const user = res.user;

      const userRef = doc(db, "users", user.uid);
      const snap = await getDoc(userRef);

      if (!snap.exists()) throw new Error("User document not found");

      const data = snap.data();
      const role = data?.role;

      console.log("Redirecting role:", role);

      // 🔥 Only redirect here
      if (role === "Student's Account") router.push("/student");
      else if (role === "Teacher's Account") router.push("/teacher");
      else if (role === "Parent's Account") router.push("/parent");
      // else router.push("/Home");

    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Login failed:", error.message);
        setErrorMsg(error.message);
      } else {
        console.error("Login failed:", error);
        setErrorMsg("Invalid email or password");
      }
    } finally {
      setLoading(false);
    }
  };


  // ✅ Watch authentication state
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, async (user) => {
  //     if (user) {
  //       const userRef = doc(db, "users", user.uid);
  //       const snap = await getDoc(userRef);
      
  //       if (!snap.exists()) {
  //         console.warn("❌ No user document found for:", user.uid);
  //         return router.push("/Home");
  //       }
      
  //       const data = snap.data();
  //       console.log("🔥 Firestore user data:", data);
      
  //       const role = data?.role?.toLowerCase?.() || "student";
  //       console.log("✅ Resolved role:", role);
      
  //       if (role === "student") {
  //         router.push("/student");
  //       } else if (role === "teacher") {
  //         router.push("/teacher");
  //       } else if (role === "parent") {
  //         router.push("/parent");
  //       } else {
  //         // router.push("/Home");
  //       }
  //     }
      
  //   });

  //   return () => unsubscribe();
  // }, [router]);

  // // ✅ Handle Sign In
  // const handleSignIn = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setErrorMsg("");

  //   try {
  //     const res = await signInWithEmailAndPassword(auth, email, password);
  //     const user = res.user;

  //     // ✅ Fetch role from Firestore after login
  //     const userRef = doc(db, "users", user.uid);
  //     const snap = await getDoc(userRef);
  //     let role = "student";

  //     if (snap.exists()) {
  //       const data = snap.data();
  //       role = data.role?.toLowerCase?.() || "student";
  //     }

  //     // ✅ Redirect to dashboard by role
  //     console.log(role)

  //     // switch (role) {
  //     //   case "student":
  //     //     router.push("/student");
  //     //     break;
  //     //   case "teacher":
  //     //     router.push("/teacher");
  //     //     break;
  //     //   case "parent":
  //     //     router.push("/parent");
  //     //     break;

  //     // }

  //     sessionStorage.setItem("user", "true"); // optional session flag
  //   } catch (error: any) {
  //     console.error("Login failed:", error.code, error.message);
  //     setErrorMsg(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="w-full h-[100vh] bg-[#ffffff] flex">
      {/* Left side image + text */}
      <div className="hidden md:w-1/2 md:flex md:flex-col lg:p-[66px] md:p-[30px] bg-no-repeat bg-cover bg-center bg-[url('/signin-img.png')]">
        <h2 className="text-[#257117] text-2xl font-bold text-[32px]/[40px]">Smartt</h2>
        <div className="flex flex-col gap-[8px] text-[#FFFFFF] mt-[400px] w-[100%] max-w-[350px]">
          <h2 className="w-full text-2xl font-bold text-[30px]/[40px]">
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
              Please enter your login details to your account and pick up from where you left off on Smartt.
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
                <p className="text-[#101828] text-[16px]/[24px]">Don&apos;t have an account?</p>
                <Link className="font-[500] text-[#B44A05] underline underline-offset-4 text-[16px]/[24px]" href="/">
                  Sign Up here
                </Link>
              </span>
            </div>
          </form>
        </div>

        <div className="mt-[150px] md:absolute md:bottom-0 w-full flex justify-center bg-[#F2F4F8] border-[#D0D5DD] p-[24px]">
          <p className="text-[#667085] text-[14px]/[22px]">
            &copy; 2025 Powered by Smartt Nig. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}






// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// import { auth } from "../../lib/firebase"; // make sure you export `auth` from firebase.ts
// import { Router } from "next/router";
// import { useRouter } from "next/navigation";



// export default function SignIn() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [errorMsg, setErrorMsg] = useState("");
//   const router = useRouter()

//   // ✅ Watch authentication state
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         console.log("User signed in:", user.uid);
//         // Example: redirect to dashboard
//         router.push("/Home");
//       } else {
//         console.log("No user signed in");
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   // ✅ Handle Sign In
//   const handleSignIn = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setErrorMsg("");

//     try {
//       const res = await signInWithEmailAndPassword(auth, email, password);
//       const user = res.user;
//     //   console.log("Login successful:", res.user);
//       router.push("/Home"); // navigate after login
//       sessionStorage.setItem("user", "true"); // not secure, just a flag
//     } catch (error: any) {
//       console.error("Login failed:", error.code, error.message);
//       setErrorMsg(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-full h-[100vh] h-full md:min-h-[1026px] bg-[#ffffff] flex">
//       {/* Left side image + text */}
//       <div className="hidden  md:w-1/2 md:flex md:flex-col lg:p-[66px] md:p-[30px] md:bg-no-repeat md:bg-cover md:bg-center bg-[url('/signin-img.png')]">
//         <h2 className="text-[#257117] text-2xl font-bold text-[32px]/[40px]">Smartt</h2>
//         <div className="flex flex-col gap-[8px] text-[#FFFFFF] mt-[400px] w-[100%] max-w-[350px]">
//           <h2 className=" w-full text-2xl font-bold text-[30px]/[40px]">
//             Manage Your Academic Journey at a Go
//           </h2>
//           <p className="w-full text-[#E4E7EC] max-w-[346px] font-normal text-[16px]/[24px]">
//             From assignments and grades to schedules and communication, we’ve got everything you need to stay focused and organized
//           </p>
//         </div>
//       </div>

//       {/* Right side form */}
//       <div className="relative flex flex-col h-full w-full md:w-1/2">
//         <div className="flex flex-col w-[90%] max-w-[517px] mt-[84px] mx-auto">
//           <h2 className="font-[700] mb-[40px] md:hidden text-[20px]/[32px] text-[#257117]">Smartt</h2>
//           <div className="flex flex-col gap-[8px]">
//             <h2 className="text-[#101828] text-[24px]/[32px] font-[700]">Welcome Back</h2>
//             <p className="text-[#344054] text-[16px]/[24px] font-[400]">
//               Please enter the login details to your account and pick up from where you left off on Smartt.
//             </p>
//           </div>

//           <form autoComplete="off" onSubmit={handleSignIn} className="mt-[24px] flex flex-col gap-[24px]">

//             <div className="flex flex-col gap-[6px]">
//               <label className="text-[14px]/[22px] font-[500] text-[#344054]" htmlFor="schoolEmail">
//                 School Email
//               </label>
//               <input
//                 className="border border-[#D0D5DD] p-[10px] rounded-[8px]"
//                 type="email"
//                 id="schoolEmail"
//                 placeholder="examplemail@smartt.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="flex flex-col gap-[6px]">
//               <label className="text-[14px]/[22px] font-[500] text-[#344054]" htmlFor="password">
//                 Password
//               </label>
//               <input
//                 className="border border-[#D0D5DD] p-[10px] rounded-[8px]"
//                 type="password"
//                 id="password"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>

//             {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}

//             <div className="mt-[5px]">
//               <button
//                 className="bg-[#D0D5DD] text-[#000] hover:opacity-90 w-full p-[11px] rounded-[8px] text-[14px]/[22px]"
//                 type="submit"
//                 disabled={loading}
//               >
//                 {loading ? "Logging in..." : "Login"}
//               </button>

//               <span className="flex mt-[16px] items-center justify-center gap-[4px]">
//                 <p className="text-[#101828] text-[16px]/[24px]">Don`&apos;`t have an account?</p>
//                 <Link className="font-[500] text-[#B44A05] underline underline-offset-4 text-[16px]/[24px]" href="/">
//                   SignUp here
//                 </Link>
//               </span>
//             </div>
//           </form>
//         </div>

//         <div className="mt-[150px] md:absolute md:bottom-0 w-full flex justify-center bg-[#F2F4F8] border-[#D0D5DD] p-[24px]">
//           <p className="text-[#667085] text-[14px]/[22px]">
//             &copy; 2025 Powered by Smartt Nig. All rights are reserved
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


 

