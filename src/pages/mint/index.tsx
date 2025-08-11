import mint from '@/assets/images/mint1.png';
import AnimatedContent from '@/components/Animate';
import PageAnimate from '@/components/pageAnimate';
import { ConfigProvider, Select } from 'antd';
import { useState } from 'react';
export default function Mint() {
  const [active, setActive] = useState<'buy' | 'sell'>('buy');
  const [selectedCurrency, setSelectedCurrency] = useState<string>('GBPC');
  const [selectedCurrency1, setSelectedCurrency1] = useState<string>('USAD');
  const [selectedCurrency2, setSelectedCurrency2] = useState<string>('GBPC');

  return (
    <PageAnimate>
      <div className="my-mint  pt-[133px] pb-[170px]">
        <div className="max-w-[1440px] m-auto flex justify-between ">
          <div>
            <AnimatedContent
              content="Recharge local fiat currency to buy cryptocurrency"
              className="text-[32px] text-[#dac89f] leading-[48px] font-bold mb-[10px]"
              animateClassName="animate__slideInDown"
            ></AnimatedContent>
            <AnimatedContent
              content="Recharge funds through a bank account and then use the cash balance to buy USAD."
              className=" leading-6 text-sm text-[#FFFFFFA6]"
              animateClassName="animate__slideInUp"
            ></AnimatedContent>
            <img src={mint} className="block w-[557px]" />
          </div>
          <ConfigProvider
            theme={{
              components: {
                Select: {
                  selectorBg: 'transparent',
                  activeBorderColor: 'transparent',
                  optionActiveBg: '#FFFFFF0A',
                  optionSelectedBg: '#FFFFFF0A',
                  optionHeight: 48,
                  optionLineHeight: '48px',
                  optionSelectedColor: '#FFFFFFD9',
                  activeOutlineColor: 'transparent',
                  hoverBorderColor: 'transparent',
                  colorBorder: 'transparent',
                  colorText: '#FFFFFFD9',
                },
              },
            }}
          >
            <div
              style={{
                background: `linear-gradient(180deg, #0D0D0D 0%, #0D0D0C 100%)`,
              }}
              className="w-[560px] px-[32px] rounded-[24px] border border-[#DAC89F33]"
            >
              <div className="flex items-center mb-6">
                <div
                  onClick={() => {
                    setActive('buy');
                    setSelectedCurrency('GBPC');
                    setSelectedCurrency1('USAD');
                  }}
                  className={`p-7 text-center flex-1 text-[24px] font-[700] ${
                    active === 'buy' ? 'text-[#DAC89F]' : 'text-[#FFFFFF66]'
                  } cursor-pointer leading-[26px]`}
                >
                  Buy
                </div>
                <div
                  onClick={() => {
                    setActive('sell');
                    setSelectedCurrency('USAD');
                    setSelectedCurrency1('GBPC');
                  }}
                  className={`p-7 text-center flex-1 text-[24px] font-[700] ${
                    active === 'sell' ? 'text-[#DAC89F]' : 'text-[#FFFFFF66]'
                  } cursor-pointer leading-[26px]`}
                >
                  Sell
                </div>
              </div>
              <div className=" rounded-[12px] bg-[#FFFFFF08] py-5 px-6">
                <div className="text-[14px] text-[#FFFFFFD9] leading-[26px]">
                  You will pay
                </div>
                <div className="flex mt-3 items-center justify-between">
                  <input
                    placeholder="0.00"
                    className="bg-transparent flex-1 outline-none text-[#fff] text-[32px] leading-[42px]"
                  />
                  <Select
                    className="flex-1 h-[48px] flex items-center select_cc my-select"
                    value={selectedCurrency}
                    labelRender={() => (
                      <div className="flex items-center">
                        <div className="w-5 h-5 bg-[#1f8d09] rounded-full mr-2"></div>
                        {selectedCurrency}
                      </div>
                    )}
                    getPopupContainer={() =>
                      document.querySelector('.select_cc')
                    }
                    onChange={(value) => {
                      setSelectedCurrency(value);
                    }}
                    options={(active === 'buy'
                      ? [
                          { value: 'GBPC', label: 'GBPC' },
                          { value: 'BTC', label: 'BTC' },
                          { value: 'ETH', label: 'ETH' },
                          { value: 'USDT', label: 'USDT' },
                        ]
                      : [{ value: 'USAD', label: 'USAD' }]
                    ).map((item) => ({
                      label: (
                        <div className="flex items-center">
                          <div className="w-5 h-5 bg-[#1f8d09] rounded-full mr-2"></div>{' '}
                          {item.label}
                        </div>
                      ),
                      value: item.value,
                    }))}
                  ></Select>
                </div>
              </div>
              <div className="mt-7 rounded-[12px] bg-[#FFFFFF08] py-5 px-6">
                <div className="text-[14px] text-[#FFFFFFD9] leading-[26px]">
                  You receive
                </div>
                <div className="flex mt-3 items-center justify-between">
                  <input
                    placeholder="0.00"
                    className="bg-transparent flex-1 outline-none text-[#fff] text-[32px] leading-[42px]"
                  />
                  <Select
                    className="flex-1 h-[48px] flex items-center select_cc1 my-select"
                    value={selectedCurrency1}
                    labelRender={() => (
                      <div className="flex items-center">
                        <div className="w-5 h-5 bg-[#1f8d09] rounded-full mr-2"></div>
                        {selectedCurrency1}
                      </div>
                    )}
                    getPopupContainer={() =>
                      document.querySelector('.select_cc1')
                    }
                    onChange={(value) => {
                      setSelectedCurrency1(value);
                    }}
                    options={(active === 'buy'
                      ? [{ value: 'USAD', label: 'USAD' }]
                      : [{ value: 'GBPC', label: 'GBPC' }]
                    ).map((item) => ({
                      label: (
                        <div className="flex items-center">
                          <div className="w-5 h-5 bg-[#1f8d09] rounded-full mr-2"></div>{' '}
                          {item.label}
                        </div>
                      ),
                      value: item.value,
                    }))}
                  ></Select>
                </div>
              </div>
              <div className="mt-3 text-[#FFFFFF66] leading-[26px] text-sm">
                1USDT ≈ 1.08 USAD
              </div>
              <div className="mt-8 text-white text-sm">Pay</div>
              <Select
                className="flex-1 mt-[10px] rounded-lg h-[48px] flex items-center border border-[#DAC89F1F] select_cc2 my-select"
                value={selectedCurrency2}
                labelRender={() => (
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-[#1f8d09] rounded-full mr-2"></div>
                    {selectedCurrency2}
                  </div>
                )}
                getPopupContainer={() => document.querySelector('.select_cc2')}
                onChange={(value) => {
                  setSelectedCurrency2(value);
                }}
                options={[
                  // { value: 'USAD', label: 'USAD' },
                  // { value: 'USDT', label: 'USDT' },
                  { value: 'GBPC', label: 'GBPC' },
                ].map((item) => ({
                  label: (
                    <div className="flex items-center">
                      <div className="w-5 h-5 bg-[#1f8d09] rounded-full mr-2"></div>{' '}
                      {item.label}
                    </div>
                  ),
                  value: item.value,
                }))}
              ></Select>
              <div className="mt-[45px] cursor-pointer mb-[32px] transition-all duration-300 active:bg-[#CCB47D] hover:bg-[#F1E3C1] rounded-lg h-[48px] justify-center font-bold text-[#000] bg-[#DAC89F] flex items-center">
                {active === 'buy' ? 'Buy' : 'Sell'}
              </div>
            </div>
          </ConfigProvider>
        </div>
      </div>
    </PageAnimate>
  );
}
