import clock from '@/assets/images/clock.png';
import verify from '@/assets/images/verify.png';
import { history, useLocation, useModel } from '@umijs/max';
import { Form, Input, Modal } from 'antd';
import { useEffect, useState } from 'react';

export default function VerifyBank() {
  const {
    verifyModal,
    verifyObj,
    list,
    setVerifyModal,
    handlerCompleteBank,
    handlerBankList,
    officialList,
  } = useModel('payment');
  const [status, setStatus] = useState('first');
  const [form] = Form.useForm();
  const location = useLocation();
  const { setAlertInfo } = useModel('dialogState');
  const handlerComplete = async () => {
    let res = await form.validateFields();
    console.log(res);
    await handlerCompleteBank({
      id: verifyObj.id,
      ...res,
    });
    setStatus('end');
  };
  useEffect(() => {
    handlerBankList();
  }, [verifyModal, status]);

  const bankInfo: any =
    officialList.find((item: any) => item.currency === verifyObj.currency) ||
    {};

  const handlerCancel = () => {
    if (location.pathname !== '/user/payment') {
      history.push('/user/payment');
    }
    setStatus('first');
    setVerifyModal(false);
  };

  return (
    <Modal
      onCancel={handlerCancel}
      width={488}
      centered
      maskClosable={false}
      footer={null}
      open={verifyModal}
    >
      {status === 'first' ? (
        <div className="px-4 !py-5">
          <img src={verify} className="m-auto mt-[30px] block w-187px" />
          <div className="text-center text-[24px] mb-[20px] mt-[50px] text-[#202B4B] leading-[32px]">
            Deposit to verify account
          </div>
          <div className="text-[#5B6276] flex items-center gap-[10px] text-[14px] leading-[32px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M14.3446 15.6771C14.6898 15.6771 14.9696 15.9569 14.9696 16.3021C14.9696 16.6438 14.6954 16.9215 14.355 16.927L14.3446 16.9271H5.66406C5.31889 16.9271 5.03906 16.6473 5.03906 16.3021C5.03906 15.9604 5.31332 15.6827 5.65371 15.6772L5.66406 15.6771H14.3446ZM10.0043 2.65625C10.3461 2.65625 10.6237 2.93051 10.6293 3.2709L10.6293 3.28125V12.189L13.9027 8.9157C14.1468 8.67162 14.5425 8.67162 14.7866 8.9157C15.0282 9.15734 15.0306 9.5476 14.7938 9.79221L14.7866 9.79959L10.4463 14.1398C10.4405 14.1456 10.4347 14.1512 10.4288 14.1566L10.4177 14.1667C10.3707 14.2083 10.3177 14.2425 10.2605 14.2682L10.2476 14.2738L10.2388 14.2774C10.1862 14.2987 10.1309 14.3127 10.0745 14.319L10.0604 14.3204L10.0517 14.3211L10.0373 14.3221L10.022 14.3226C10.0162 14.3229 10.0103 14.3229 10.0043 14.3229H9.99551L9.98168 14.3225L9.96559 14.3217C9.90244 14.3179 9.84024 14.3045 9.78115 14.2819L9.76916 14.2771L9.76076 14.2737C9.69964 14.2478 9.64305 14.2124 9.59314 14.1686L9.57947 14.1563L9.57195 14.1492C9.56873 14.1461 9.56554 14.143 9.56238 14.1398L5.22215 9.79961C4.97807 9.55553 4.97807 9.15978 5.22215 8.91572C5.46377 8.67408 5.85404 8.67166 6.09865 8.90848L6.10602 8.9157L9.37936 12.189V3.28125C9.37936 2.93607 9.65918 2.65625 10.0044 2.65625H10.0043Z"
                fill="#63BCFF"
              />
            </svg>
            Make a deposit with your bank account.
          </div>
          <div className="text-[#5B6276] flex items-center gap-[10px] text-[14px] leading-[32px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10 1.40625C14.7462 1.40625 18.5938 5.25381 18.5938 10C18.5938 14.7462 14.7462 18.5938 10 18.5938C5.25381 18.5938 1.40625 14.7462 1.40625 10C1.40625 5.25381 5.25381 1.40625 10 1.40625ZM10 2.71066C5.97422 2.71066 2.71066 5.9742 2.71066 10C2.71066 14.0258 5.9742 17.2893 10 17.2893C14.0258 17.2893 17.2893 14.0258 17.2893 10C17.2893 5.97422 14.0258 2.71066 10 2.71066ZM10 5.12766L10.0108 5.12773C10.366 5.1335 10.6522 5.42324 10.6522 5.77986V9.60193L12.9165 11.8663L12.9241 11.874C13.1712 12.1293 13.1687 12.5365 12.9165 12.7887C12.6618 13.0433 12.2489 13.0433 11.9942 12.7887L9.53883 10.3333L9.53182 10.3262C9.41379 10.2045 9.34779 10.0416 9.34779 9.87211V5.77988L9.34789 5.76908C9.35365 5.41387 9.6434 5.12766 10 5.12766Z"
                fill="#63BCFF"
              />
            </svg>
            Allow 1-2 business days for processing
          </div>
          <div className="text-[#5B6276] flex items-center gap-[10px] text-[14px] leading-[32px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M9.99935 1.66797C8.35117 1.66797 6.74001 2.15671 5.3696 3.07239C3.99919 3.98807 2.93109 5.28955 2.30036 6.81227C1.66963 8.33499 1.5046 10.0105 1.82614 11.6271C2.14769 13.2436 2.94136 14.7284 4.1068 15.8939C5.27223 17.0593 6.75709 17.853 8.3736 18.1745C9.99011 18.4961 11.6657 18.331 13.1884 17.7003C14.7111 17.0696 16.0126 16.0015 16.9283 14.6311C17.8439 13.2606 18.3327 11.6495 18.3327 10.0013C18.3327 7.79116 17.4547 5.67155 15.8919 4.10875C14.3291 2.54594 12.2095 1.66797 9.99935 1.66797ZM9.99935 16.9457C8.62587 16.9457 7.28323 16.5385 6.14122 15.7754C4.99922 15.0123 4.10913 13.9278 3.58352 12.6588C3.05791 11.3899 2.92039 9.9936 3.18834 8.64651C3.4563 7.29942 4.11769 6.06204 5.08889 5.09084C6.06009 4.11964 7.29747 3.45825 8.64456 3.19029C9.99165 2.92234 11.3879 3.05986 12.6569 3.58547C13.9258 4.11108 15.0104 5.00117 15.7734 6.14317C16.5365 7.28518 16.9438 8.62782 16.9438 10.0013C16.9438 10.9133 16.7642 11.8163 16.4152 12.6588C16.0662 13.5014 15.5547 14.2669 14.9098 14.9118C14.265 15.5566 13.4994 16.0681 12.6569 16.4171C11.8143 16.7661 10.9113 16.9457 9.99935 16.9457Z"
                fill="#63BCFF"
              />
              <path
                d="M12.9639 7.37569L9.19305 11.216L6.97777 9.55624C6.9044 9.50189 6.82102 9.46254 6.73242 9.44045C6.64381 9.41837 6.55172 9.41397 6.46142 9.42751C6.37111 9.44106 6.28436 9.47228 6.20614 9.5194C6.12792 9.56651 6.05975 9.62859 6.00555 9.70208C5.9512 9.77545 5.91185 9.85883 5.88976 9.94744C5.86768 10.036 5.86328 10.1281 5.87682 10.2184C5.89037 10.3087 5.92159 10.3955 5.96871 10.4737C6.01582 10.5519 6.0779 10.6201 6.15139 10.6743L8.8875 12.6951C9.00856 12.7828 9.15469 12.8291 9.30416 12.8271C9.39556 12.8276 9.48616 12.8101 9.57077 12.7755C9.65537 12.741 9.73233 12.69 9.79722 12.6257L13.9639 8.35485C14.0282 8.28965 14.079 8.21242 14.1134 8.12757C14.1479 8.04273 14.1653 7.95193 14.1646 7.86036C14.164 7.76879 14.1453 7.67825 14.1097 7.59389C14.074 7.50954 14.0221 7.43304 13.9569 7.36874C13.8917 7.30445 13.8145 7.25363 13.7297 7.21918C13.6448 7.18474 13.554 7.16734 13.4624 7.16799C13.3709 7.16863 13.2803 7.1873 13.196 7.22294C13.1116 7.25858 13.0351 7.31048 12.9708 7.37569H12.9639Z"
                fill="#63BCFF"
              />
            </svg>
            Your account will be verified and ready to use.
          </div>
          <div className="flex items-center mt-[48px] justify-between">
            <div
              onClick={() => {
                setStatus('second');
              }}
              className="text-white flex-1 text-center cursor-pointer font-bold rounded-lg bg-[#202B4B] leading-[48px]"
            >
              Continue
            </div>
            <div
              onClick={handlerCancel}
              className="border flex-1 ml-6 text-center cursor-pointer text-[#202B4B] font-bold border-[#202B4B1F] rounded-lg leading-[48px]"
            >
              Cancel
            </div>
          </div>
        </div>
      ) : null}
      {status === 'second' ? (
        <div className="px-4 !py-5">
          <div className="text-[24px] font-bold leading-8 text-center text-[#202b4b]">
            Deposit to verify account
          </div>
          <div className="mt-6 text-[#5b6276] text-center text-sm font-medium">
            Deposit Amount
          </div>
          <div className="flex items-end justify-center">
            <div className="text-sm  text-[#A3ABC0]">Min</div>
            <div className="text-[32px] relative top-[8px] font-bold mx-1 text-[#202b4b]">
              2.00
            </div>
            <div className="text-sm text-[#A3ABC0]">
              {bankInfo.currency || ''}
            </div>
          </div>
          <div className="mt-8 border !border-[#F3974F] text-[#ee6700] text-sm rounded-lg bg-[#FFA60014] py-[12px] px-[16px] leading-[22px]">
            Add a SWIFT-compatible bank account in your own name (use full
            name). Avoid using: Wise, Lydia, Spendesk, Blank and Kard
          </div>
          <div className="flex mt-3 items-start gap-4 text-sm justify-between">
            <div className="text-[#A3ABC0]">Account Name </div>
            <div className="text-[#202B4B]">
              {`${bankInfo.accountHolder || ''}`}{' '}
            </div>
          </div>
          <div className="flex mt-3 items-start gap-4 text-sm justify-between">
            <div className="text-[#A3ABC0]">IBAN</div>
            <div className="text-[#202B4B]">{bankInfo.iban || ''} </div>
          </div>
          <div className="flex mt-3 items-start gap-4 text-sm justify-between">
            <div className="text-[#A3ABC0]">BIC </div>
            <div className="text-[#202B4B]">{bankInfo.bic || ''} </div>
          </div>
          <div className="flex mt-3 items-start gap-4 text-sm justify-between">
            <div className="text-[#A3ABC0]">Bank Name </div>
            <div className="text-[#202B4B]">{bankInfo.bankName || ''} </div>
          </div>
          <div className="flex mt-3 items-start gap-4 text-sm justify-between">
            <div className="text-[#A3ABC0]">Bank Address </div>
            <div className="text-[#202B4B] text-right flex-1">
              {bankInfo.address || ''}
            </div>
          </div>
          <Form form={form}>
            <Form.Item
              rules={[{ required: true, message: '' }]}
              name="transactionId"
            >
              <div className="mt-5">
                <Input
                  placeholder="Transaction ID provided by your bank"
                  type="text"
                  className="register-input"
                />
              </div>
            </Form.Item>
          </Form>

          <div className="flex items-center mt-[48px] justify-between">
            <div
              onClick={handlerComplete}
              className="text-white flex-1 text-center cursor-pointer font-bold rounded-lg bg-[#202B4B] leading-[48px]"
            >
              Payment Completed
            </div>
          </div>
        </div>
      ) : null}
      {status === 'end' ? (
        <div className="px-4 !py-5">
          <img src={clock} className="m-auto mt-[30px] block w-187px" />
          <div className="text-center text-[24px] mb-[20px] mt-[50px] text-[#202B4B] leading-[32px]">
            Awaiting Approval
          </div>
          <div className="mt-6 text-[#5B6276] text-sm leading-[22px] text-center">
            This process may take up to one business day. Once we receive and
            confirm your deposit, we’ll notify you by email as soon as it’s
            approved.
          </div>
          <div className="flex items-center mt-[48px] justify-between">
            <div
              onClick={handlerCancel}
              className="text-white flex-1 text-center cursor-pointer font-bold rounded-lg bg-[#202B4B] leading-[48px]"
            >
              Done
            </div>
            <div
              onClick={() => {
                setVerifyModal(false);
                setStatus('first');
                if (list.length >= 5) {
                  setAlertInfo({
                    show: true,
                    message: 'You can only add up to 5 account',
                    type: 'error',
                  });
                  return;
                }
                history.push('/user/payment/addBank');
              }}
              className="border flex-1 ml-6 text-center cursor-pointer text-[#202B4B] font-bold border-[#202B4B1F] rounded-lg leading-[48px]"
            >
              Add new
            </div>
          </div>
        </div>
      ) : null}
    </Modal>
  );
}
