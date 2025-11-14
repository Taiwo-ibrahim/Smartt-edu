import Loading from "@/component/loading"
import { Sidebar } from "@/component/Sidebar"
import { Suspense } from "react"


export default function SubjectLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <section className="flex w-full gap-[10px] bg-[#F9FAFB]">
            <div className="w-[21%]  min-w-[280px]">
                <Sidebar />
            </div>
            <Suspense>
                <div className="w-[76%] max-w-[1500px] bg-[#F9FAFB]">
                    {children}
                </div>
            </Suspense>
        </section>
    )
  }