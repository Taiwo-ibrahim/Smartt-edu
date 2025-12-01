import { Sidebar } from "@/component/Sidebar"
import { Suspense } from "react"
import Loading from "@/component/loading"
import { RightPanel2 } from "@/component/RightPanel2"


export default function HomeLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <section className="flex w-full gap-[10px] overflow-hidden bg-[#F9FAFB]">
            <div className="hidden md:block lg:block w-[21%]  min-w-[280px]">
                <Sidebar />
            </div>
             {/* RIGHT PANEL UNDER MAIN CONTENT FOR MOBILE */}
             <div className="flex md:hidden lg:hidden pt-0 w-[13%] min-w-[20px] ">
              <RightPanel2 />
            </div>
            <Suspense fallback={<Loading />}>
                <div className=" border w-[80%] sm:w-[76%] max-w-[1500px] bg-[#F9FAFB]">
                    {children}
                </div>
            </Suspense>
        </section>
    )
  }