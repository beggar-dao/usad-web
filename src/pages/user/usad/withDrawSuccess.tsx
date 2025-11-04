import complete from '@/assets/images/fiat.png';
import { history, useModel } from '@umijs/max';
import { Modal } from 'antd';
export default function WithDrawSuccess() {
  const { withDrawSuccess, setWithDrawSuccess } = useModel('gbpc');
  return (
    <Modal
      onCancel={() => {
        setWithDrawSuccess(false);
      }}
      centered
      maskClosable={false}
      footer={null}
      open={withDrawSuccess}
      zIndex={9999}
    >
      <div className="p-2">
        <img
          src={complete}
          className="block w-[80px] m-auto mt-4"
          alt="success"
        />
        <div className="text-center font-bold text-[24px] leading-8 mt-4">
          Withdrawal Submitted
        </div>
        <div className="text-center leading-5 text-[#5b6276] mt-2">
          Your GBPC tokens have been successfully burned. <br />
          The equivalent amount in GBP will be deposited into your bank account
          shortly. <br />
          Processing typically takes up to one business day
        </div>
        <div className="flex items-center gap-6 justify-between mt-10 ">
          <div
            onClick={() => {
              setWithDrawSuccess(false);
              history.push('/user/wallet');
            }}
            className="rounded-2xl border border-[#202B4B1F] flex-1 cursor-pointer text-[#202B4B] leading-[48px] text-center"
          >
            Check Status
          </div>
          <div
            onClick={() => {
              setWithDrawSuccess(false);
              history.push('/user/history');
            }}
            className="rounded-2xl flex-1 cursor-pointer bg-[#202B4B] text-white leading-[48px] text-center"
          >
            View History
          </div>
        </div>
        <div
          className="text-center mt-3 text-[#63BCFF] cursor-pointer"
          onClick={() => {
            setWithDrawSuccess(false);
            history.push('/ContactUs');
          }}
        >
          Contact us
        </div>
      </div>
    </Modal>
  );
}
