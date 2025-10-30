import { ReactComponent as GoogleSvg } from '@/assets/images/google.svg';
import { updatePassword } from '@/services/user';
import { useModel } from '@umijs/max';
import { ConfigProvider, Form, Input, Modal } from 'antd';
import { useEffect } from 'react';

export default function ChangePassword() {
  const [form] = Form.useForm();
  const { passwordModel, setPasswordModel, setAlertInfo } =
    useModel('dialogState');
  const onFinish = async () => {
    let values = await form.validateFields();
    await updatePassword({
      ...values,
    });
    setPasswordModel(false);
    setAlertInfo({
      type: 'success',
      message: 'Password updated successfully',
      show: true,
    });
  };

  useEffect(() => {
    if (!passwordModel) {
      form.resetFields();
    }
  }, [passwordModel]);

  return (
    <Modal
      onCancel={() => {
        setPasswordModel(false);
      }}
      centered
      maskClosable={false}
      footer={null}
      open={passwordModel}
    >
      <div className="px-4 py-[15px]">
        <div className="text-[24px] mb-[30px] font-bold text-center text-[#202b4b]">
          Change Password
        </div>
        <div className="px-[16px] py-[12px] mb-4 bg-[#FFA60014] leading-[22px] border-[1px] border-[#F3974F] rounded-lg text-[#EE6700] text-sm">
          For account security, please be aware that after changing your
          password, fiat withdrawals(burn) and Transfers will be suspended for
          24h{' '}
        </div>
        <ConfigProvider>
          <Form form={form} size="large">
            <div className="flex items-center font-bold mb-3 text-[14px]">
              Old Password
            </div>
            <Form.Item
              name="oldPassword"
              rules={[
                {
                  required: true,
                  message: 'Please enter your current password.',
                },
              ]}
            >
              <Input.Password placeholder="Please enter your current password." />
            </Form.Item>
            <div className="flex items-center font-bold mb-3 text-[14px]">
              New Password
            </div>
            <Form.Item
              name="newPassword"
              rules={[
                {
                  required: true,
                  message: 'Please enter a new password.',
                },
                {
                  min: 6,
                  message: 'Password must be at least 6 characters!',
                },
              ]}
            >
              <Input.Password placeholder="Please enter a new password." />
            </Form.Item>
            <div className="flex items-center font-bold mb-3 text-[14px]">
              Confirm New Password
            </div>
            <Form.Item
              name="newPassword_1"
              dependencies={['newPassword']} // 依赖 newPassword 字段
              rules={[
                {
                  required: true,
                  message: 'Please enter again your new password.',
                },

                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('newPassword') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error('The two passwords do not match!'),
                    );
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Please enter again your new password." />
            </Form.Item>
            <div className="flex items-center font-bold mb-3 text-[14px]">
              <GoogleSvg className="mr-3" />
              Google verification code
            </div>
            <Form.Item
              name="totp"
              rules={[
                {
                  required: true,
                  message: 'Please enter the Google Authenticator code',
                },
              ]}
            >
              <Input placeholder="Please enter the Google Authenticator code" />
            </Form.Item>
          </Form>
          <div
            onClick={() => onFinish()}
            className="text-base  hover:opacity-90 text-white h-[48px] text-center mt-12 bg-[#202B4B] leading-[48px] cursor-pointer rounded-[8px]"
          >
            Confirm
          </div>
          <div
            onClick={() => {
              window.open('/ContactUs', '_blank');
            }}
            className="text-xs cursor-pointer text-center text-[#63bcff] mt-4"
          >
            Having problems with verification?
          </div>
        </ConfigProvider>
      </div>
    </Modal>
  );
}
