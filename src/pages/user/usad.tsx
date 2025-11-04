import buy from '@/assets/images/buy.png';
import deposit from '@/assets/images/deposit.png';
import fiat from '@/assets/images/fiat.png';
import transfer from '@/assets/images/transfer.png';
import No2fa from '@/components/No2fa';
import { history, useModel } from '@umijs/max';

export default function USAD() {
  const { user } = useModel('auth');

  return (
    <>
      {user.is2FA ? (
        <>
          <div className=" pb-6 text-[24px] font-bold text-white">USAD</div>
          <div className="grid grid-cols-[320px_320px] justify-center cursor-pointer gap-8">
            <div
              onClick={() => {
                history.push('/user/usad/buy');
              }}
              className="h-[300px] w-full flex flex-col items-center justify-center bg-[#F4F7FF] rounded-2xl "
            >
              <img src={buy} className="w-[140px] h-[140px] block" />
              <div className="mt-[30px] text-[24px] font-bold text-[#202B4B]">
                Buy USAD
              </div>
              <div className="text-[14px] mt-1 text-[#5b6276]">
                with fiat currency
              </div>
            </div>
            <div
              onClick={() => {
                history.push('/user/usad/transfer');
              }}
              className="h-[300px] w-full flex flex-col items-center justify-center bg-[#F4F7FF] rounded-2xl "
            >
              <img src={transfer} className="w-[140px] h-[140px] block" />
              <div className="mt-[30px] text-[24px] font-bold text-[#202B4B]">
                Transfer
              </div>
              <div className="text-[14px] mt-1 text-[#5b6276]">on chain</div>
            </div>
            <div
              onClick={() => {
                history.push('/user/usad/deposit');
              }}
              className="h-[300px] w-full flex flex-col items-center justify-center bg-[#F4F7FF] rounded-2xl "
            >
              <img src={deposit} className="w-[140px] h-[140px] block" />
              <div className="mt-[30px] text-[24px] font-bold text-[#202B4B]">
                Deposit USAD
              </div>
              <div className="text-[14px] mt-1 text-[#5b6276]">
                from other exchange/ wallet
              </div>
            </div>
            <div
              onClick={() => {
                history.push('/user/usad/withdraw');
              }}
              className="h-[300px] w-full flex flex-col items-center justify-center bg-[#F4F7FF] rounded-2xl "
            >
              <img src={fiat} className="w-[140px] h-[140px] block" />
              <div className="mt-[30px] text-[24px] font-bold text-[#202B4B]">
                Fiat withdraw
              </div>
              <div className="text-[14px] mt-1 text-[#5b6276]">
                burn gbpc and get your fiat back
              </div>
            </div>
          </div>
        </>
      ) : (
        <No2fa />
      )}
    </>
  );
}
