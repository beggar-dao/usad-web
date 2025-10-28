import complete from '@/assets/images/success.png';
import { history, useModel } from '@umijs/max';
import { Modal } from 'antd';
export default function BuySuccess() {
  const { buySuccess, setBuySuccess, setBuyDrawer } = useModel('gbpc');
  return (
    <Modal
      onCancel={() => {
        setBuyDrawer(false);
        setBuySuccess(false);
      }}
      centered
      maskClosable={false}
      footer={null}
      open={buySuccess}
      zIndex={9999}
    >
      <div className="p-2">
        <img
          src={complete}
          className="block w-[80px] m-auto mt-4"
          alt="success"
        />
        <div className="text-center font-bold text-[24px] leading-8 mt-4">
          Your money is on the way
        </div>
        <div className="text-center leading-5 text-[#5b6276] mt-2">
          Your GBPC tokens will be minted and credited soon. This may take a few
          minutes or up to one business day. We’ll email you once it’s done.
        </div>
        <div
          onClick={() => {
            setBuySuccess(false);
            history.push('/user/wallet');
          }}
          className="rounded-2xl cursor-pointer bg-[#202B4B] text-white leading-[48px] text-center mt-10"
        >
          Check Status
        </div>
      </div>
    </Modal>
  );
}
