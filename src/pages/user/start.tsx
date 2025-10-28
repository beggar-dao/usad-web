import { ReactComponent as CloseSvg } from '@/assets/images/close.svg';
import { ReactComponent as Jt } from '@/assets/images/jt.svg';
import { ReactComponent as Step1 } from '@/assets/images/step1.svg';
import { ReactComponent as Step1_1 } from '@/assets/images/step1_1.svg';
import { ReactComponent as Step2 } from '@/assets/images/step2.svg';
import { ReactComponent as Step2_1 } from '@/assets/images/step2_1.svg';
import { ReactComponent as Step3 } from '@/assets/images/step3.svg';
import { ReactComponent as Step3_1 } from '@/assets/images/step3_1.svg';
import { history, useSearchParams } from '@umijs/max';

export default function VerificationStart() {
  const [params] = useSearchParams();
  const individual = [
    {
      icon: <Step1 />,
      name: 'Step1',
      content: 'We will ask you some questions',
    },
    {
      icon: <Step2 />,
      name: 'Step2',
      content: 'Provide identity documents',
    },
    {
      icon: <Step3 />,
      name: 'Step3',
      content: 'FaceMatch ID',
    },
  ];
  const corporate = [
    {
      icon: <Step1_1 />,
      name: 'Step1',
      content: 'Provide company details',
    },
    {
      icon: <Step3_1 />,
      name: 'Step2',
      content: 'We will ask you some questions',
    },
    {
      icon: <Step2_1 />,
      name: 'Step3',
      content: 'Provide associated parties',
    },
  ];
  return (
    <>
      <div className="flex items-center justify-between pb-3 text-[24px] font-bold text-[#202B4B]">
        <div>
          {params.get('type') === 'individual'
            ? 'Individual Verification'
            : 'Corporate Verification'}
        </div>
        <CloseSvg
          className="cursor-pointer"
          onClick={() => {
            history.push('/user/verification');
          }}
        />
      </div>
      <div className="text-[20px] leading-[36px] text-[#202B4B] mt-[108px]">
        Let's get you verified <br /> Follow the simple steps below
      </div>
      <div className="mt-[40px] flex gap-[62px] items-center">
        {(params.get('type') === 'individual' ? individual : corporate).map(
          (item, index) => (
            <div
              key={index}
              className="border-0 relative flex-1 px-6 py-[30px] border-[#202B4B0A] bg-[#F4F7FF] rounded-[16px] "
            >
              <div className="flex justify-end">{item.icon}</div>
              <div className="text-[#5B6276] mt-[10px] text-[20px] font-[400]">
                {item.name}
              </div>
              <div className="text-[#202b4b] mt-[10px] text-[18px] font-bold h-[42px]">
                {item.content}
              </div>
              {index !== 2 ? (
                <Jt className="absolute top-[50%] mt-[-16px] right-[-50px]" />
              ) : null}
            </div>
          ),
        )}
      </div>
      <div className="flex mt-[80px] items-center gap-[25px] justify-center">
        <div
          onClick={() => {
            params.get('type') === 'individual'
              ? history.push('/user/verification/individual')
              : history.push('/user/verification/corporate');
          }}
          className="h-[48px] cursor-pointer leading-[48px] hover:opacity-[90] transition-all bg-[#202B4B] rounded-lg px-[40px] text-white text-base"
        >
          Continue on this device
        </div>
        <div className="h-[48px] cursor-pointer leading-[48px] border border-[#202B4B14] text-[#202B4B] hover:opacity-[90] transition-all rounded-lg px-[40px] text-base">
          Continue on phone
        </div>
      </div>
    </>
  );
}
