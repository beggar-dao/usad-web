import { DeleteOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import {
  Checkbox,
  ConfigProvider,
  Drawer,
  Form,
  Input,
  Select,
  Tooltip,
} from 'antd';
import { useEffect } from 'react';
export default function AddressBatchModal() {
  const { addressBatchModal, setAddressBatchModal, setAddressObj } =
    useModel('addressWhiteList');
  const { setLoginModel } = useModel('dialogState');
  const [form] = Form.useForm();
  const onFinish = async () => {
    let values = await form.validateFields();
    setLoginModel(true);
    setAddressObj({
      ...values,
      batch: true,
      isSecondaryAuth: values.isSecondaryAuth ? 1 : 0,
    });
  };

  useEffect(() => {
    if (addressBatchModal) {
      form.resetFields();
      form.setFieldsValue({
        whitelists: [{}],
      });
    }
  }, [addressBatchModal]);

  return (
    <Drawer
      title="Add Your Wallet Addresses"
      width={'57%'}
      open={addressBatchModal}
      onClose={() => {
        setAddressBatchModal(false);
      }}
      maskClosable={false}
      destroyOnHidden={true}
    >
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
          name="dynamic_form_nest_item"
          autoComplete="off"
          form={form}
          layout="vertical"
        >
          <Form.List name="whitelists">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name }, index) => (
                  <div
                    className="flex  justify-center items-start flex-col"
                    key={key}
                  >
                    <div className="text-sm text-[#202B4B] font-[500]">
                      Address {index + 1}
                    </div>
                    <div className="flex mt-3 w-full gap-6 items-center">
                      <div className="flex-1 overflow-hidden">
                        <Form.Item
                          name={[name, 'currency']}
                          label="Assets"
                          className="w-full"
                          rules={[{ required: true, message: '' }]}
                          initialValue={'GBPC'}
                        >
                          <Input readOnly className="register-input w-full" />
                        </Form.Item>
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <Form.Item
                          name={[name, 'chainType']}
                          label="Chain Type"
                          rules={[{ required: true, message: '' }]}
                          className="w-full"
                        >
                          <Select
                            placeholder="Please select a chain type"
                            style={{ height: '47px' }}
                            dropdownRender={(menu) => (
                              <>
                                <div className="px-[16px] py-[12px] m-2 bg-[#FFA60014] leading-[22px] border-[1px] border-[#F3974F] rounded-lg text-[#EE6700] text-sm">
                                  Note: Once successfully added, your
                                  withdrawal/transfer address cannot be
                                  modified.
                                </div>
                                {menu}
                              </>
                            )}
                            optionRender={(option) => {
                              return (
                                <>
                                  <div className="flex items-center justify-between px-[8px]">
                                    <div>{option.label}</div>
                                    <div>≈{option.data.mins}</div>
                                  </div>
                                  <div className="flex text-[#9EA6BC] items-center justify-between px-[8px]">
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
                              value="ETH"
                            >
                              ETH
                            </Select.Option>
                            <Select.Option
                              name="Tron(ERC20)"
                              count={`6 Confirmation/s`}
                              mins={`1 mins`}
                              value="TRX"
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
                          </Select>
                        </Form.Item>
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <Form.Item
                          name={[name, 'address']}
                          label="Address"
                          className="w-full"
                          rules={[{ required: true, message: '' }]}
                        >
                          <Input
                            className="register-input w-full"
                            placeholder="Please enter the address you would like to whitelist"
                          />
                        </Form.Item>
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <Form.Item
                          name={[name, 'tag']}
                          label="Tag"
                          className="w-full"
                        >
                          <Input
                            className="register-input w-full"
                            placeholder="Optional"
                          />
                        </Form.Item>
                      </div>
                      {fields.length > 1 ? (
                        <DeleteOutlined
                          className="mt-2"
                          onClick={() => {
                            remove(name);
                          }}
                        />
                      ) : null}
                    </div>
                  </div>
                ))}
                <Form.Item>
                  <div
                    onClick={() => {
                      add();
                    }}
                    className="max-w-[100px] px-4 h-8 leading-8 cursor-pointer text-xs rounded-lg bg-[#202B4B] text-white font-bold"
                  >
                    + Add
                  </div>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item
            className="mt-[45px]"
            name="isSecondaryAuth"
            valuePropName="checked"
          >
            <Checkbox>
              <div className="text-[#5B6276] flex items-center text-xs">
                No verification needed for this address next time
                <Tooltip
                  title={`If selected, transfer to this address will not require
                    additional verification (2FA/email) in the future.`}
                >
                  <InfoCircleOutlined className="ml-2" />
                </Tooltip>
              </div>
            </Checkbox>
          </Form.Item>
          <div
            onClick={onFinish}
            className="max-w-[213px] text-base hover:opacity-90 text-white h-[48px] text-center mt-6 bg-[#202B4B] leading-[48px] cursor-pointer rounded-[8px]"
          >
            Confirm
          </div>
        </Form>
      </ConfigProvider>
    </Drawer>
  );
}
