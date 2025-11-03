import { ReactComponent as RightIcon } from '@/assets/svg/right.svg';
import { useModel } from '@umijs/max';
import { Button, ConfigProvider, Form, Input, Select } from 'antd';

export default function AddBank() {
  const [form] = Form.useForm();
  const { handlerCreateBank, officialList } = useModel('payment');
  const handleSubmit = async (values: any) => {
    console.log(values);
    await handlerCreateBank({
      ...values,
    });
  };
  return (
    <div className="flex h-full flex-col">
      <div className="pb-6 text-[24px] font-bold text-white">
        Bank Accounts
      </div>
      <div className="text-base text-[#202B4B] pb-7 border-b border-b-[#E9E9E9]">
        Add your bank account details
      </div>
      <div className="flex-1 flex">
        <div className="!pt-5 pr-9 relative">
          <div className="bg-gradient-to-l w-[32px] absolute  top-[0px] bottom-[-34px] right-[-36px] from-transparent to-[#F8FAFB]"></div>

          <div className="rounded-[16px] min-w-[300px] px-6 h-[137px] flex items-center justify-between !border !border-[#5CBAFF] bg-gradient-to-b from-[#CEE7FF] to-white shadow-[0_4px_8px_rgba(0,0,0,0.04)]">
            <div className="text-[#202B4B] text-[24px] font-bold leading-[26px]">
              Bank Account
            </div>
            <RightIcon />
          </div>
        </div>
        <div className="flex-1 px-[60px] pt-[48px]">
          <div className="mb-9 text-base text-[#202b4b] font-bold">
            Please enter bank details
          </div>
          <ConfigProvider
            theme={{
              components: {
                Form: {
                  itemMarginBottom: 16,
                },
              },
            }}
          >
            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
              className="register-form-layout"
              size="large"
            >
              <div className="flex gap-8 justify-between">
                <div className="flex-1">
                  <Form.Item
                    label="Account Number(IBAN)"
                    name="iban"
                    style={{ flex: 1 }}
                    rules={[
                      {
                        required: true,
                        message: '',
                      },
                    ]}
                  >
                    <Input type="text" className="register-input" />
                  </Form.Item>
                </div>
                <div className="flex-1">
                  <Form.Item
                    label="Account Holder's Name"
                    name="holderName"
                    style={{ flex: 1 }}
                    rules={[
                      {
                        required: true,
                        message: '',
                      },
                    ]}
                  >
                    <Input type="text" className="register-input" />
                  </Form.Item>
                </div>
              </div>
              <div className="flex mt-0 gap-8 justify-between">
                <div className="flex-1">
                  <Form.Item
                    label="Bank Name"
                    name="bankName"
                    style={{ flex: 1 }}
                    rules={[
                      {
                        required: true,
                        message: '',
                      },
                    ]}
                  >
                    <Input type="text" className="register-input" />
                  </Form.Item>
                </div>
                <div className="flex-1">
                  <Form.Item
                    label="Swift Code(BIC)"
                    name="bic"
                    style={{ flex: 1 }}
                    rules={[
                      {
                        required: true,
                        message: '',
                      },
                    ]}
                  >
                    <Input type="text" className="register-input" />
                  </Form.Item>
                </div>
              </div>
              <div className="flex mt-0 gap-8 justify-between">
                <div className="flex-1">
                  <Form.Item
                    label="Currency"
                    name="currency"
                    style={{ flex: 1 }}
                    rules={[
                      {
                        required: true,
                        message: '',
                      },
                    ]}
                  >
                    <Select
                      className="no-border-select"
                      placeholder="Please Select Currency"
                      options={officialList
                        .map((item: any) => {
                          return {
                            value: item.currency,
                            label: item.currency,
                          };
                        })
                        .concat({ value: 'Other', label: 'Other' })}
                    />
                    {/* <Input type="text" className="register-input" /> */}
                  </Form.Item>
                </div>
                <div className="flex-1">
                  <Form.Item
                    label="Bank Branch (optional)"
                    name="bankBranch"
                    style={{ flex: 1 }}
                  >
                    <Input type="text" className="register-input" />
                  </Form.Item>
                </div>
              </div>
              <div className="flex mt-0 gap-8 justify-between">
                <div className="flex-1">
                  <Form.Item
                    label="Billing Address (optional)"
                    name="billingAddress"
                    style={{ flex: 1 }}
                  >
                    <Input type="text" className="register-input" />
                  </Form.Item>
                </div>
                <div className="flex-1"></div>
              </div>
              <Button
                htmlType="submit"
                type="primary"
                className="mt-12 cursor-pointer w-[214px] h-[48px] bg-[#202B4B] flex justify-center items-center text-center text-white rounded-lg"
              >
                Verify Bank
              </Button>
            </Form>
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
}
