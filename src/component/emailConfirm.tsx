import { MdOutlineMarkEmailUnread } from 'react-icons/md';

export function EmailConfirmation() {
    return (
        <div className='flex flex-col gap-[px] justify-center items-center mt-[150px]'>
            {/* <img src="/email-confirmation.png" alt="Email-recieved" /> */}
            <span className='w-[70px] h-[70px] rounded-[50%] justify-center items-center flex bg-[#D1FADF] border-[#ECFDF3] border-[8px]'>
                <MdOutlineMarkEmailUnread className='text-[#257117] w-[30px] h-[30px] flex' />

            </span>
            <h1 className='font-[700] mt-[24px] text-[24px]/[32px] text-[#101828]'>Email Confirmation</h1>
            <p className='text-[16px]/[24px] mt-[8px] font-[400] text-[#344054]'>we have sent confirmation link to this email address</p>
            <p className='text-[16px]/[24px] font-[500] text-[#344054]'>***jeremiah@smartt.com</p>
        </div>
    )
}