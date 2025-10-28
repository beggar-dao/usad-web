import gbpc from '@/assets/images/gbpc_icon.png';
import { useModel } from '@umijs/max';
import { ConfigProvider, Form, Input, Modal, Radio } from 'antd';
import { useEffect } from 'react';
export default function WithDraw({ data }: any) {
  const [form] = Form.useForm();
  const {
    withDrawModal,
    setting,
    setWithDrawModal,
    handleSettingAddressWhitelistPost,
  } = useModel('addressWhiteList');
  const roles = Form.useWatch((values) => values.type, form);
  const { setAlertInfo } = useModel('dialogState');
  const onFinish = async () => {
    let values = await form.validateFields();
    handleSettingAddressWhitelistPost({
      ...values,
    });
    setAlertInfo({
      type: 'success',
      message: `Successfully`,
      show: true,
    });
    setWithDrawModal(false);
  };
  useEffect(() => {
    if (!withDrawModal) {
      form.resetFields();
    } else {
      form.setFieldsValue({ type: 0, ...setting });
    }
  }, [withDrawModal]);
  return (
    <Modal
      onCancel={() => {
        setWithDrawModal(false);
      }}
      centered
      maskClosable={false}
      footer={null}
      open={withDrawModal}
    >
      <div className="px-4 py-[15px]">
        <div className="text-[24px] mb-2 font-bold text-center">
          Withdrawal/Transfer Limits
        </div>

        <div className="my-2 text-xs text-[#5B6276] leading-5">
          Take control of your account security by setting custom limits for
          crypto withdrawals and transfers.
        </div>
        <ConfigProvider
          theme={{
            components: {
              Radio: {
                colorBorder: '#5B6276',
                radioSize: 20,
                dotSize: 6,
                colorPrimary: '#5B6276',
              },
            },
          }}
        >
          <Form layout="vertical" form={form} size="large">
            <Form.Item
              name="type"
              rules={[
                {
                  required: true,
                  message: '',
                },
              ]}
            >
              <Radio.Group
                className="verify-radio"
                options={[
                  { label: 'Fiat Withdrawal ', value: 0 },
                  { label: 'Transfer', value: 1 },
                ]}
              />
            </Form.Item>
            {form.getFieldsValue().type === 0 ? (
              <>
                <Form.Item
                  name="fiatWithdrawalDailyLimit"
                  label="Daily amount"
                  rules={[
                    {
                      required: true,
                      message: '',
                    },
                    {
                      validator: (_, value) => {
                        if (value && parseFloat(value) < 100000) {
                          return Promise.reject(
                            'Minimum amount is 100,000 GBPC',
                          );
                        }
                        return Promise.resolve();
                      },
                    },
                  ]}
                >
                  <Input
                    className="bg-[#F2F6FA]"
                    placeholder="Please enter daily amount."
                    suffix={
                      <div className=" flex items-center text-sm text-[#202B4B]">
                        <img src={gbpc} className="w-[22px] h-[22px] mr-3" />{' '}
                        GBPC
                      </div>
                    }
                  />
                </Form.Item>

                <Form.Item
                  name="fiatWithdrawalMonthlyLimit"
                  label="Monthly amount"
                  rules={[
                    {
                      required: true,
                      message: '',
                    },
                    {
                      validator: (_, value) => {
                        if (value && parseFloat(value) < 100000) {
                          return Promise.reject(
                            'Minimum amount is 100,000 GBPC',
                          );
                        }
                        return Promise.resolve();
                      },
                    },
                  ]}
                >
                  <Input
                    className="bg-[#F2F6FA]"
                    placeholder="Please enter monthly amount."
                    suffix={
                      <div className=" flex items-center text-sm text-[#202B4B]">
                        <img src={gbpc} className="w-[22px] h-[22px] mr-3" />{' '}
                        GBPC
                      </div>
                    }
                  />
                </Form.Item>
              </>
            ) : null}
            {form.getFieldsValue().type === 1 ? (
              <>
                <Form.Item
                  name="transferDailyLimit"
                  label="Daily amount"
                  rules={[
                    {
                      required: true,
                      message: '',
                    },
                  ]}
                >
                  <Input
                    className="bg-[#F2F6FA]"
                    placeholder="Please enter daily amount."
                    suffix={
                      <div className=" flex items-center text-sm text-[#202B4B]">
                        <img src={gbpc} className="w-[22px] h-[22px] mr-3" />{' '}
                        GBPC
                      </div>
                    }
                  />
                </Form.Item>

                <Form.Item
                  name="transferMonthlyLimit"
                  label="Monthly amount"
                  rules={[
                    {
                      required: true,
                      message: '',
                    },
                  ]}
                >
                  <Input
                    className="bg-[#F2F6FA]"
                    placeholder="Please enter monthly amount."
                    suffix={
                      <div className=" flex items-center text-sm text-[#202B4B]">
                        <img src={gbpc} className="w-[22px] h-[22px] mr-3" />{' '}
                        GBPC
                      </div>
                    }
                  />
                </Form.Item>
              </>
            ) : null}
            <div className="text-sm text-[#5B6276] leading-6">
              · Limits apply across all crypto assets. <br />· You can update or
              remove limits anytime from your settings. <br />
              · Increasing or removing a limit may require extra verification.
              <br />
            </div>
          </Form>
          <div
            onClick={() => onFinish()}
            className="text-base  hover:opacity-90 text-white h-[48px] text-center mt-12 bg-[#202B4B] leading-[48px] cursor-pointer rounded-[8px]"
          >
            Confirm
          </div>
        </ConfigProvider>
      </div>
    </Modal>
  );
}
