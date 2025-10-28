import PageAnimate from '@/components/pageAnimate';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useModel, history } from '@umijs/max';
import { Form, Input } from 'antd';
import { useEffect, useState } from 'react';
import { resetPassword } from '@/services/api/gbpc';

const LoginForm = () => {
  const { setLoginModel, resetStep, setAlertInfo } = useModel('dialogState');
  const { user, setUser } = useModel('auth');
  const [form] = Form.useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const { clearError } = useModel('auth');
  const [step, setStep] = useState(1);

  // Clear any previous errors when component mounts
  useEffect(() => {
    clearError();
  }, [clearError]);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleRepeatPasswordVisibility = () =>
    setShowRepeatPassword(!showRepeatPassword);

  // const [showPassword, setShowPassword] = useState(false);

  // const togglePasswordVisibility = () => setShowPassword(!showPassword);

  //   useEffect(() => {
  //     document
  //       .querySelector('.toggle-password')
  //       .addEventListener('click', function () {
  //         const input = document.querySelector('.password-wrapper input');
  //         const icon = this.querySelector('i');
  //         if (input.type === 'password') {
  //           input.type = 'text';
  //           icon.classList.remove('bi-eye-slash');
  //           icon.classList.add('bi-eye');
  //         } else {
  //           input.type = 'password';
  //           icon.classList.remove('bi-eye');
  //           icon.classList.add('bi-eye-slash');
  //         }
  //       });
  //     document
  //       .querySelector('.toggle-password2')
  //       .addEventListener('click', function () {
  //         const input = document.querySelector('.password-wrapper2 input');
  //         const icon = this.querySelector('i');
  //         if (input.type === 'password') {
  //           input.type = 'text';
  //           icon.classList.remove('bi-eye-slash');
  //           icon.classList.add('bi-eye');
  //         } else {
  //           input.type = 'password';
  //           icon.classList.remove('bi-eye');
  //           icon.classList.add('bi-eye-slash');
  //         }
  //       });
  //   }, []);
  useEffect(() => {
    if (resetStep === 2) {
      setLoginModel(false);
      setStep(3);
    }
  }, [resetStep]);
  const handeConfirm = async () => {
    const params = {
      email: user.email,
      newPassword: form.getFieldValue('newPassword'),
      confirmPassword: form.getFieldValue('confirmPassword'),
      captcha: localStorage.getItem('captcha'),
      totp: ''
    }
    await resetPassword(params)
    setAlertInfo({
      type: 'success',
      message: 'reset password success',
      show: true
    })
    history.push('/Auth/Login');
  };
  
  const Steps = () => {
    const [email, setEmail] = useState('');
    const handleSubmit = () => {
      const emailReg = '"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"'
      if (!email) {
        setAlertInfo({
          type: 'error',
          message: 'Please enter a valid email!',
          show: true
        })
        return
      }
      setUser({
        ...user,
        email
      })
      setLoginModel(true);
      setStep(2);
    };
    if (step <= 2) {
      return (
        <div>
          <div className="container card-dataprotection !px-6">
            <h2 className="register-title">Reset Password</h2>

            <div className="alert-warning-box">
              <p className="pb-0 mb-0">
                <strong>Important: </strong>For account security, please be aware
                that after changing your password, fiat redemption and transfers
                will be suspended for 24h.
              </p>
            </div>

            <div className="register-form">
              <label className="text-[#5B6276] !font-[500] text-[14px]">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="register-input h-[48px] px-[16px] mb-[32px] outline-none"
                placeholder="Enter your email"
                required
              />

              <button
                type="button"
                onClick={handleSubmit}
                className={`register-button outline-none ${email ? '' : 'opacity-15 pointer-events-none'}`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      );
    } else if (step === 3) {
      return (
        <div className="container card-dataprotection !px-6">
          <h2 className="register-title">Reset Password</h2>
          <Form
            form={form}
            name="reset-password"
            layout="vertical"
            className="register-form"
            size="large"
          >
            <Form.Item
              label="New Password"
              name="newPassword"
              rules={[
                {
                  required: true,
                  message: 'Please enter your password!',
                },
                {
                  min: 6,
                  message: 'Password must be at least 8 characters!',
                },
              ]}
            >
              <Input.Password
                placeholder="Please enter a new password."
                className="register-input"
                iconRender={(visible) => {
                  return (
                    <button type="button" onClick={togglePasswordVisibility}>
                      {visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
                    </button>
                  );
                }}
                type={showPassword ? 'text' : 'password'}
              />
            </Form.Item>
            <Form.Item
              label="Confirm New Password"
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: 'Please enter your new password again.',
                },
                {
                  min: 8,
                  message: 'Password must be at least 8 characters!',
                },
              ]}
            >
              <Input.Password
                placeholder="Please enter your new password again."
                className="register-input"
                iconRender={(visible) => {
                  return (
                    <button
                      type="button"
                      onClick={toggleRepeatPasswordVisibility}
                    >
                      {visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
                    </button>
                  );
                }}
                type={showPassword ? 'text' : 'password'}
              />
            </Form.Item>
            <button
              type="button"
              onClick={handeConfirm}
              className={`register-button hover:bg-[#202b4b] mt-[120px]`}
            >
              Confirm
            </button>
          </Form>
        </div>
      );
    }
  };
  return (
    <PageAnimate>
      <div className="bg-login flex flex-column justify-center">
        <section className="two-column-section">
          <div>
            <img
              src="../images/img_login.png"
              alt="Reset Password Illustration"
            />
          </div>
          <Steps />
        </section>
      </div>
    </PageAnimate>
  );
};

export default LoginForm;
