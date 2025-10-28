import complete from '@/assets/images/transfer.png';
import { history, useModel } from '@umijs/max';
import { Modal } from 'antd';
export default function TransferSuccess() {
  const { transferSuccess, setTransferSuccess, setBuyDrawer } =
    useModel('gbpc');
  return (
    <Modal
      onCancel={() => {
        setBuyDrawer(false);
        setTransferSuccess(false);
      }}
      centered
      maskClosable={false}
      footer={null}
      open={transferSuccess}
      zIndex={9999}
    >
      <div className="p-2">
        <img
          src={complete}
          className="block w-[80px] m-auto mt-4"
          alt="success"
        />
        <div className="text-center font-bold text-[24px] leading-8 mt-4">
          Transfer Completed
        </div>
        <div className="text-center leading-5 text-[#5b6276] mt-2">
          Transfer request submitted. <br />
          Visit History to view your order status.
        </div>
        <div className="flex items-center gap-6 justify-between mt-10 ">
          <div
            onClick={() => {
              history.push('/user/wallet');
            }}
            className="rounded-2xl border border-[#202B4B1F] flex-1 cursor-pointer text-[#202B4B] leading-[48px] text-center"
          >
            Check Status
          </div>
          <div
            onClick={() => {
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
            history.push('/ContactUs');
          }}
        >
          Contact us
        </div>
      </div>
    </Modal>
  );
}
