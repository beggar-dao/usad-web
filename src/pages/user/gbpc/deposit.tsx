import { ReactComponent as CloseSvg } from '@/assets/images/close.svg';
import { history } from '@umijs/max';
import DepositContent from './deposit_content';
export default function Buy() {
  return (
    <>
      <div className="flex items-center justify-between pb-3 text-[24px] font-bold text-[#202B4B]">
        <div className="text-sm cursor-pointer leading-[26px] text-[#5B6276] flex items-center gap-6">
          <span
            onClick={() => {
              history.push('/user/gbpc/buy');
            }}
          >
            Buy GBPC
          </span>
          <span
            onClick={() => {
              history.push('/user/gbpc/transfer');
            }}
          >
            Transfer
          </span>
          <span className="text-[#202B4B] border-b border-b-[#63BCFF]">
            Deposit GBPC
          </span>
          <span
            onClick={() => {
              history.push('/user/gbpc/withdraw');
            }}
          >
            Fiat withdraw
          </span>
        </div>
        <CloseSvg
          className="cursor-pointer"
          onClick={() => {
            history.push('/user/gbpc');
          }}
        />
      </div>

      <div className="w-[580px] p-8 m-auto !mt-[96px] border border-[#F0F1F1] rounded-2xl">
        <DepositContent />
      </div>
    </>
  );
}
