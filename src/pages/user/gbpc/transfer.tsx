import { ReactComponent as CloseSvg } from '@/assets/images/close.svg';
import { walletMatch } from '@/services/user';
import { history, useModel } from '@umijs/max';
import { ConfigProvider, Form, Input, Select } from 'antd';
import { useEffect, useState } from 'react';
import TransferSuccess from './transferSuccess';

const chainType = {
  60: 'ETH',
  195: 'TRX',
  SOL: 'SOL',
  2510: 'BSC',
};

export default function Buy() {
  const [form] = Form.useForm();
  const [addressObj, setAddressObj] = useState({});
  const { setAddressModal, getAddress, addressList, getAddressByAddress } =
    useModel('addressWhiteList');
  const { setLoginModel } = useModel('dialogState');
  const { setTransferForm, handlerTransfer } = useModel('gbpc');

  const handleSubmit = async () => {
    let values = await form.validateFields();

    const addressInfo = getAddressByAddress(values.toAddress);
    const params = {
      valid: true,
      ...values,
      assetId: addressObj.id,
    };

    if (addressInfo?.isSecondaryAuth) {
      setLoginModel(true);
      setTransferForm(params);
    } else {
      handlerTransfer({ ...params, checked: true });
    }
  };

  const getWalletMatch = async (value: string) => {
    const res = await walletMatch({
      chainId: value,
      currency: value,
    });
    setAddressObj(res.data || {});
  };

  const handlerChange = (value: string) => {
    getWalletMatch(value);
  };

  useEffect(() => {
    getAddress();
  }, []);

  const network = Form.useWatch('network', form);

  return (
    <>
      <TransferSuccess />
      <div className="flex items-center justify-between pb-3 text-[24px] font-bold text-[#202B4B]">
        <div className="text-sm cursor-pointer leading-[26px] text-[#5B6276] flex items-center gap-6">
          <span
            onClick={() => {
              history.push('/user/gbpc/buy');
            }}
          >
            Buy GBPC
          </span>
          <span className="text-[#202B4B] border-b border-b-[#63BCFF]">
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
      <div className="w-[580px] p-8 m-auto !mt-[96px] border border-[#F0F1F1] rounded-2xl">
        <div className="text-center text-[24px] font-bold text-[#202B4B] mb-8">
          Transfer
        </div>
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
            form={form}
            layout="vertical"
            className="register-form-layout"
            size="large"
          >
            <div className="text-sm mb-1  text-[#5B6276] leading-[22px]">
              Select Network
            </div>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: '',
                },
              ]}
              label=""
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

            <div className="text-sm mb-1 text-[#5B6276] leading-[22px]">
              Coin
            </div>
            <div className="mb-2 leading-[48px] text-[14px] text-[#26282C] rounded-lg bg-[#F2F6FA] flex items-center px-3">
              <img className="block w-4 mr-2" src="/images/gbpc.png" />
              GBPC
            </div>

            <div className="text-sm mb-1 mt-2 flex items-center justify-between text-[#5B6276] leading-[22px]">
              <div>To</div>
              <div
                onClick={() => {
                  history.push('/user/addressWhitelist');
                  setAddressModal(true);
                }}
                className="text-[#63BCFF] cursor-pointer"
              >
                Add an Address
              </div>
            </div>
            <Form.Item
              label=""
              name="toAddress"
              rules={[
                {
                  required: true,
                  message: '',
                },
              ]}
            >
              <Select
                showSearch
                disabled={!network}
                placeholder="Enter the destination wallet address"
              >
                {addressList
                  .filter(
                    (item) =>
                      item.status === 1 &&
                      item.chainType === chainType[network],
                  )
                  .map((item, index) => {
                    return (
                      <Select.Option key={index} value={item.address}>
                        {item.address}
                      </Select.Option>
                    );
                  })}
              </Select>
            </Form.Item>

            <div className="text-sm flex justify-between mb-1 mt-2 text-[#5B6276] leading-[22px]">
              <div>Amount</div>
              <div className="text-[14px] text-[#5B6276]">
                Transferable Amount：
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
                  message: '',
                },
                {
                  validator: (_, value) => {
                    if (
                      value &&
                      parseFloat(value) > parseFloat(addressObj.balance || 0)
                    ) {
                      return Promise.reject(
                        'Amount exceeds transferable balance',
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
                      form.setFieldsValue({ amount: addressObj.balance || 0 });
                    }}
                    className="text-[#63BCFF] cursor-pointer"
                  >
                    All
                  </span>
                }
              />
            </Form.Item>
          </Form>
        </ConfigProvider>
        <div
          onClick={handleSubmit}
          className="mt-[80px] font-bold cursor-pointer leading-[48px] w-full rounded-lg bg-[#202B4B] text-white text-center"
        >
          Confirm
        </div>
      </div>
    </>
  );
}
