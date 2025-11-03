import { ReactComponent as CloseSvg } from '@/assets/images/close.svg';
import { history, useModel } from '@umijs/max';
import { ConfigProvider, Form, InputNumber, Select } from 'antd';
import { useEffect, useState } from 'react';
import BuyDraw from './buyDraw';
import BuySuccess from './buySuccess';
export default function Buy() {
  const [form] = Form.useForm();
  const [checkedBank, setCheckedBank] = useState({});
  const { list, handlerBankList } = useModel('payment');

  const {
    handlerGetOfficialCurrency,
    currencyList,
    handlerGetExchangeRate,
    rate,
    handlerDepositPre,
  } = useModel('gbpc');

  const handlerSubmit = async () => {
    let values = await form.validateFields();
    await handlerDepositPre({
      ...values,
      currency: 195,
      chainId: 195,
    });
  };

  const faitCurrency = Form.useWatch('faitCurrency', form);

  useEffect(() => {
    setCheckedBank({});
  }, [faitCurrency]);

  useEffect(() => {
    handlerGetOfficialCurrency();
    handlerBankList();
  }, []);

  const currency = {
    GBP: '£',
    EUR: '€',
    USD: '$',
    AED: 'د.إ',
  };

  return (
    <>
      <BuyDraw currency={currency[faitCurrency]} />
      <BuySuccess />
      <div className="flex items-center justify-between pb-3 text-[24px] font-bold text-[#202B4B]">
        <div className="text-sm cursor-pointer leading-[26px] text-[#5B6276] flex items-center gap-6">
          <span className="text-[#202B4B] border-b border-b-[#63BCFF]">
            Buy GBPC
          </span>
          <span
            onClick={() => {
              history.push('/user/gbpc/transfer');
            }}
          >
            Transfer
          </span>
          <span
            onClick={() => {
              history.push('/user/gbpc/deposit');
            }}
          >
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
      <div className="w-[580px] p-8 m-auto !mt-[96px] border border-[#505050] rounded-2xl">
        <div className="text-center text-[24px] font-bold text-[#202B4B] mb-8">
          Buy with Fiat
        </div>
        <ConfigProvider
          theme={{
            components: {
              InputNumber: {
                hoverBorderColor: 'transparent',
                activeBorderColor: 'transparent',
                controlOutline: 'transparent',
                paddingInline: 0,
                paddingBlock: 0,
              },
              Select: {
                activeBorderColor: 'transparent',
                controlOutline: 'transparent',
                colorBorder: 'transparent',
                colorBgContainer: 'transparent',
                hoverBorderColor: 'transparent',
                padding: 0,
                selectorBg: '#F2F6FA',
              },
            },
          }}
        >
          <Form layout="vertical" size="large" form={form}>
            <div className=" rounded-lg px-4 !pt-5  bg-[#F2F6FA]">
              <div className="mb-2 text-[14px] text-[#5B6276] font-bold">
                Spend
              </div>
              <div className="flex items-center justify-between">
                <Form.Item
                  name={'faitAmount'}
                  label=""
                  rules={[{ required: true, message: 'Please input amount' }]}
                >
                  <InputNumber
                    controls={false}
                    placeholder="0.000"
                    min={100000}
                    className="flex-1 relative left-[-10px] bg-transparent text-[28px] min-w-[200px] focus:shadow-none focus:border-0 focus:outline-0 border-0 text-[#9EA6BC] font-bold !px-0"
                  />
                </Form.Item>
                <Form.Item
                  rules={[{ required: true, message: '' }]}
                  name={'faitCurrency'}
                  label=""
                >
                  <Select
                    className="bg-transparent relative right-[-10px] border-none"
                    placeholder="Select currency"
                    onChange={(value) => {
                      handlerGetExchangeRate(value);
                    }}
                  >
                    {currencyList.map((item) => {
                      return (
                        <Select.Option
                          label={item?.name}
                          key={item?.name}
                          value={item?.name}
                        ></Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>
              </div>
            </div>
            <div className=" mt-3 rounded-lg px-4 !py-5 bg-[#F2F6FA]">
              <div className="mb-2 text-[14px] text-[#5B6276] font-bold">
                Receive
              </div>
              <div className="flex items-center justify-between">
                {/* <InputNumber
                controls={false}
                disabled
                placeholder="0.000"
                className="flex-1 bg-transparent text-[28px] border-none text-[#9EA6BC] font-bold !px-0"
              /> */}
                <div className="flex-1 text-[28px] font-bold">
                  {(
                    (rate || 0) * (form.getFieldValue('faitAmount') || 0)
                  ).toFixed(2)}
                </div>
                <div className="flex items-center text-[14px] text-[#26282C]">
                  <img className="block w-4 mr-2" src="/images/gbpc.png" />
                  GBPC
                </div>
              </div>
            </div>
            <div className="text-sm mt-6 mb-1 flex items-center justify-between text-[#5B6276] leading-[22px]">
              <div>Payment</div>
              <div
                onClick={() => {
                  history.push('/user/payment/addBank');
                }}
                className="text-[#63BCFF] cursor-pointer"
              >
                Add Bank
              </div>
            </div>
            <Form.Item
              rules={[{ required: true, message: '' }]}
              name={'bankId'}
              label=""
            >
              <Select
                className="!h-[auto] min-h-[47px]"
                disabled={!faitCurrency}
                onChange={(id) => {
                  setCheckedBank(list.find((obj) => obj.id === id));
                }}
                labelRender={() => (
                  <>
                    {checkedBank.iban ? (
                      <div className="!p-4">
                        <div className="flex items-center gap-2">
                          <div className="w-[48px] h-[48px] rounded bg-blue-500"></div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <div className="text-sm font-bold leading-[26px] text-[#202b4b]">
                                {checkedBank.bankName}
                              </div>
                              <div className="text-sm text-[#5B6276]">
                                {checkedBank.iban}
                              </div>
                            </div>
                            <div className="text-sm text-[#202B4B]">
                              {checkedBank.holderName}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </>
                )}
                options={list
                  .filter(
                    (obj) => obj.status === 2 && obj.currency === faitCurrency,
                  )
                  .map((item) => {
                    return {
                      label: (
                        <div className="flex items-center gap-2">
                          <div className="w-[48px] h-[48px] rounded bg-blue-500"></div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <div className="text-sm font-bold leading-[26px] text-[#202b4b]">
                                {item.bankName}
                              </div>
                              <div className="text-sm text-[#5B6276]">
                                {item.iban}
                              </div>
                            </div>
                            <div className="text-sm text-[#202B4B]">
                              {item.holderName}
                            </div>
                          </div>
                        </div>
                      ),
                      value: item.id,
                    };
                  })}
              ></Select>
            </Form.Item>

            <div
              onClick={handlerSubmit}
              className="mt-[80px] font-bold cursor-pointer leading-[48px] w-full rounded-lg bg-[#202B4B] text-white text-center"
            >
              Buy GBPC
            </div>
          </Form>
        </ConfigProvider>
      </div>
    </>
  );
}
