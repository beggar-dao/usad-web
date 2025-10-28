import lock from '@/assets/images/no_bank.png';
import { history } from '@umijs/max';
export default function NoBank() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-[690px] bg-[#F3F9FF] rounded-2xl border border-[#202B4B0A] py-[40px] m-auto">
        <img src={lock} className="block m-auto w-[180px]" />
        <div className="text-center text-[14px] mt-[20px] mb-[24px] text-[#A3ABC0]">
          No bank account added...
        </div>
        <div
          onClick={() => {
            history.push('/user/payment/addBank');
          }}
          className="m-auto cursor-pointer max-w-[244px] flex items-center bg-[#202B4B] justify-center h-[48px] text-white rounded-lg"
        >
          Add Bank Account
        </div>
      </div>
    </div>
  );
}
