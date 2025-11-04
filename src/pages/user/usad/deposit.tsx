import { ReactComponent as CloseSvg } from '@/assets/images/close.svg';
import { history } from '@umijs/max';
import DepositContent from './deposit_content';
export default function Buy() {
  return (
    <>
      <div className="flex items-center justify-between pb-3 text-[24px] font-bold">
        <div className="text-sm cursor-pointer leading-[26px] text-white flex items-center gap-6">
          <span
            onClick={() => {
              history.push('/user/usad/buy');
            }}
          >
            Buy USAD
          </span>
          <span
            onClick={() => {
              history.push('/user/usad/transfer');
            }}
          >
            Transfer
          </span>
          <span className="gold-gradient-text border-b border-b-[#C69F58]">
            Deposit USAD
          </span>
          <span
            onClick={() => {
              history.push('/user/usad/withdraw');
            }}
          >
            Fiat withdraw
          </span>
        </div>
        <CloseSvg
          className="cursor-pointer"
          onClick={() => {
            history.push('/user/usad');
          }}
        />
      </div>

      <div className="w-[580px] p-8 m-auto !mt-[96px] border border-[#505050] rounded-2xl">
        <DepositContent />
      </div>
    </>
  );
}
