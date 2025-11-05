import lock from '@/assets/images/no_bank.png';
import { history } from '@umijs/max';

export default function NoBank() {
  return (
    <div className="h-full flex items-center justify-center mb-16">
      <div className="w-[690px] black-gradient-bg2 rounded-2xl border border-[#505050] py-[40px] m-auto">
        <img src={lock} className="block m-auto w-[180px]" />
        <div className="text-center text-[14px] mt-[20px] mb-[24px] text-[#ADB1B8]">
          No bank account added...
        </div>
        <div
          onClick={() => {
            history.push('/user/payment/addBank');
          }}
          className="m-auto cursor-pointer max-w-[244px] flex items-center gold-gradient-bg justify-center h-[48px] text-white rounded-lg"
        >
          Add Bank Account
        </div>
      </div>
    </div>
  );
}
