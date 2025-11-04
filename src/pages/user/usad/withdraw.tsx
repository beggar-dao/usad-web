import { ReactComponent as CloseSvg } from '@/assets/images/close.svg';
import { walletMatch } from '@/services/user';
import { history, useModel } from '@umijs/max';
import { ConfigProvider, Form, Input, Select } from 'antd';
import { useEffect, useState } from 'react';
import WithDrawSuccess from './withDrawSuccess';
export default function Buy() {
  const [form] = Form.useForm();
  const [addressObj, setAddressObj] = useState({});
  const { setLoginModel } = useModel('dialogState');
  const { setWithDrawForm, handlerWithDraw } = useModel('gbpc');
  const { setWithDrawModal, setting, handleSettingAddressWhitelist } =
    useModel('addressWhiteList');
  const [checkedBank, setCheckedBank] = useState({});
  const { list, handlerBankList } = useModel('payment');

  useEffect(() => {
    handleSettingAddressWhitelist();
    handlerBankList();
  }, []);

  const getWalletMatch = async (value: string) => {
    try {
      const res = await walletMatch({
        chainId: value,
        currency: value,
      });
      setAddressObj(res.data || {});
    } catch (error) {
      console.log(error);
      setAddressObj({});
    }
  };
  const handlerChange = (value: string) => {
    if (value === '60') {
      form.setFieldValue(
        'burnAddress',
        '0xB72250c7f4F5d9037F431f654CE15F01A2f5a8CC',
      );
    }
    if (value === '195') {
      form.setFieldValue('burnAddress', 'TSNM5FHwcoDqPm6smSa9y6zUf1C9E4Qfdi');
    }
    if (value === 'SOL') {
      form.setFieldValue(
        'burnAddress',
        '8rXrkdyQvgkbvzLZfASsnnGZcnhjbea7zJb5R82Xikc9',
      );
    }
    if (value === '2510') {
      form.setFieldValue(
        'burnAddress',
        '0xB72250c7f4F5d9037F431f654CE15F01A2f5a8CC',
      );
    }
    if (value) {
      getWalletMatch(value);
    }
  };

  const handlerLimit = async () => {
    history.push('/user/addressWhitelist');
    setWithDrawModal(true);
  };

  const handleSubmit = async () => {
    let values = await form.validateFields();
    if (setting.isSecondaryAuthOfFiatWithdrawal === 0) {
      handlerWithDraw({
        assetId: addressObj.id,
        bankInfo: list.find((obj) => obj.id === values.bankId),
        ...values,
        checked: 1,
      });
      return;
    }
    setLoginModel(true);
    setWithDrawForm({
      valid: true,
      assetId: addressObj.id,
      bankInfo: list.find((obj) => obj.id === values.bankId),
      ...values,
    });
  };
  return (
    <>
      <WithDrawSuccess />
      <div className="flex items-center justify-between pb-3 text-[24px] font-bold text-[#202B4B]">
        <div className="text-sm cursor-pointer leading-[26px] text-[#5B6276] flex items-center gap-6">
          <span
            onClick={() => {
              history.push('/user/usad/buy');
            }}
          >
            Buy GBPC
          </span>
          <span
            onClick={() => {
              history.push('/user/usad/transfer');
            }}
          >
            Transfer
          </span>
          <span
            onClick={() => {
              history.push('/user/usad/deposit');
            }}
          >
            Deposit GBPC
          </span>
          <span className="text-[#202B4B] border-b border-b-[#63BCFF]">
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

      <div className="flex mt-9 gap-[50px]">
        <div className="flex-1">
          <ConfigProvider
            theme={{
              components: {
                Form: {
                  itemMarginBottom: 16,
                },
                Input: {},
                Select: {
                  selectorBg: '#F2F6FA',
                },
              },
            }}
          >
            <Form
              layout="vertical"
              className="register-form-layout"
              size="large"
              form={form}
            >
              <div className="text-sm mb-1 text-[#5B6276] leading-[22px]">
                Coin
              </div>
              <div className=" leading-[48px] text-[14px] text-[#26282C] rounded-lg bg-[#F2F6FA] flex items-center px-3">
                <img className="block w-4 mr-2" src="/images/gbpc.png" />
                GBPC
              </div>

              <div className="text-sm mb-1 mt-3 text-[#5B6276] leading-[22px]">
                Select Network
              </div>

              <Form.Item
                rules={[
                  {
                    required: true,
                    message: '',
                  },
                ]}
                name="network"
              >
                <Select
                  placeholder="Please select a chain type"
                  allowClear
                  onChange={handlerChange}
                  style={{ width: '100%', height: '47px' }}
                  dropdownRender={(menu) => <>{menu}</>}
                  optionRender={(option) => {
                    return (
                      <>
                        <div className="flex items-center justify-between">
                          <div>{option.label}</div>
                          <div>≈{option.data.mins}</div>
                        </div>
                        <div className="flex text-[#9EA6BC] items-center justify-between">
                          <div>{option.data.name}</div>
                          <div>{option.data.count}</div>
                        </div>
                      </>
                    );
                  }}
                >
                  <Select.Option
                    name="Ethereum(ERC20)"
                    count={`6 Confirmation/s`}
                    mins={`2 mins`}
                    value="60"
                  >
                    ETH
                  </Select.Option>
                  <Select.Option
                    name="Tron(ERC20)"
                    count={`6 Confirmation/s`}
                    mins={`1 mins`}
                    value="195"
                  >
                    TRX
                  </Select.Option>
                  <Select.Option
                    name="Solana"
                    count={`3 Confirmation/s`}
                    mins={`30 sec`}
                    value="SOL"
                  >
                    SOL
                  </Select.Option>
                  <Select.Option
                    name="BSC"
                    count={`5 Confirmation/s`}
                    mins={`10 sec`}
                    value="2510"
                  >
                    BSC
                  </Select.Option>
                </Select>
              </Form.Item>
              <div className="text-sm flex justify-between mb-1 text-[#5B6276] leading-[22px]">
                <div>Burn Address</div>
              </div>
              <Form.Item
                name={'burnAddress'}
                rules={[
                  {
                    required: true,
                    message: '',
                  },
                ]}
              >
                <Input
                  placeholder="gbpc burn wallet default address"
                  disabled
                  className="w-full h-[48px] bg-[#F2F6FA]"
                />
              </Form.Item>
              <div className="text-sm flex justify-between mb-1 text-[#5B6276] leading-[22px]">
                <div>Amount</div>
                <div className="text-[14px] text-[#5B6276]">
                  <span className="font-bold">
                    {addressObj.balance || 0} GBPC
                  </span>
                </div>
              </div>
              <Form.Item
                name={'amount'}
                rules={[
                  {
                    required: true,
                    message: '',
                  },
                  {
                    pattern: /^\d+(\.\d+)?$/,
                    message: 'Please enter a valid number!',
                  },
                  {
                    validator: (_, value) => {
                      if (value && parseFloat(value) < 100000) {
                        return Promise.reject('Minimum amount is 100,000 GBPC');
                      }
                      return Promise.resolve();
                    },
                  },
                  {
                    validator: (_, value) => {
                      if (value && parseFloat(value) > addressObj.balance) {
                        return Promise.reject(
                          `Maximum amount is ${addressObj.balance} GBPC`,
                        );
                      }
                      return Promise.resolve();
                    },
                  },
                ]}
              >
                <Input
                  className="w-full h-[48px] bg-[#F2F6FA]"
                  onKeyDown={(e) => {
                    // 只允许数字、小数点、退格、删除、Tab、Escape、Enter键
                    if (
                      !/[0-9.]/.test(e.key) &&
                      ![
                        'Backspace',
                        'Delete',
                        'Tab',
                        'Escape',
                        'Enter',
                        'ArrowLeft',
                        'ArrowRight',
                      ].includes(e.key)
                    ) {
                      // 阻止非数字字符的输入
                      e.preventDefault();
                    }

                    // 确保小数点只能输入一次
                    if (e.key === '.' && e.currentTarget.value.includes('.')) {
                      e.preventDefault();
                    }
                  }}
                  suffix={
                    <span
                      onClick={() => {
                        form.setFieldsValue({ amount: addressObj.balance });
                      }}
                      className="text-[#63BCFF] cursor-pointer"
                    >
                      All
                    </span>
                  }
                />
              </Form.Item>

              <div className="text-sm mt-1 mb-1 flex items-center justify-between text-[#5B6276] leading-[22px]">
                <div>Receiver</div>
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
                  onChange={(id) => {
                    setCheckedBank(list.find((obj) => obj.id === id));
                  }}
                  labelRender={() => (
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
                  )}
                  options={list
                    .filter((obj) => obj.status === 2)
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
              <div className="text-sm text-[#5b6276] mt-8">Transaction Fee</div>
              <div className="font-bold text-base">0.1%</div>
              <div
                onClick={handleSubmit}
                className="mt-6 max-w-[212px] font-bold cursor-pointer leading-[48px] w-full rounded-lg bg-[#202B4B] text-white text-center"
              >
                Confirm
              </div>
            </Form>
          </ConfigProvider>
        </div>
        <div className="w-[424px] pb-[230px] rounded-lg bg-[#202B4B05] p-8">
          <div className="text-sm text-[#5B6276] leading-[26px]">
            Daily Remaining Limit
          </div>
          <div className="mt-1 text-[#202B4B] font-bold">
            {setting.usedFiatWithdrawalDailyLimit || 0}/
            {setting.fiatWithdrawalDailyLimit} GBPC
          </div>

          <div className="mt-4 text-sm text-[#5B6276] leading-[26px]">
            Monthly Remaining Limit
          </div>
          <div className="mt-1 text-[#202B4B] font-bold">
            {setting.usedFiatWithdrawalMonthlyLimit || 0}/
            {setting.fiatWithdrawalMonthlyLimit} GBPC
          </div>
          <div
            onClick={handlerLimit}
            className="mt-[50px] cursor-pointer text-sm leading-[26px] text-[#63BCFF]"
          >
            Increase Limit Manage Limit
          </div>
          <div className="text-sm text-[#202b4b] mt-[10px]">
            · The minimum withdrawal amount is: 100,000 GBPC
          </div>
        </div>
      </div>
    </>
  );
}
