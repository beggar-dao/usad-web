import btc_coin from '@/assets/images/btc_coin.png';
import eth_coin from '@/assets/images/eth_coin.png';
import gbpc_coin from '@/assets/images/gbpc_coin.png';
import mint from '@/assets/images/mint1.png';
import usad_coin from '@/assets/images/usad_coin.png';
import usdt_coin from '@/assets/images/usdt_coin.png';
import AnimatedContent from '@/components/Animate';
import PageAnimate from '@/components/pageAnimate';
import { Helmet } from '@umijs/max';
import { ConfigProvider, Select } from 'antd';
import { useState } from 'react';
export default function Mint() {
  const [active, setActive] = useState<'buy' | 'sell'>('buy');
  const [selectedCurrency, setSelectedCurrency] = useState<string>('GBPC');
  const [selectedCurrency1, setSelectedCurrency1] = useState<string>('USAD');
  const [selectedCurrency2, setSelectedCurrency2] = useState<string>('GBPC');
  const coinArr = [
    { value: 'GBPC', img: gbpc_coin },
    { value: 'BTC', img: btc_coin },
    { value: 'ETH', img: eth_coin },
    { value: 'USDT', img: usdt_coin },
    { value: 'USAD', img: usad_coin },
  ];
  return (
    <PageAnimate>
      <Helmet>
        <title>Mint USAD on Pathenom | Quick Start Guide and Tips</title>
        <meta name="keywords" content="USAD, Mint" />
        <meta
          name="description"
          content="Mint USAD on Pathenom in a few steps. Connect your wallet, set the amount, review fees and limits, then confirm. Tips for faster support and safer transactions."
        />
      </Helmet>
      <div className="my-mint pt-6 pb-8 md:pt-[133px] md:pb-[170px]">
        <div className="px-4 md:max-w-[1440px] m-auto flex gap-6 flex-col md:flex-row justify-between ">
          <div className="flex-1 pr-10">
            <AnimatedContent
              content="Recharge local fiat currency to <br/> buy cryptocurrency"
              className="text-[16px] md:text-[32px] text-[#dac89f] leading-6 md:leading-[48px] font-bold mb-[10px]"
              animateClassName="animate__slideInDown"
            ></AnimatedContent>
            <AnimatedContent
              content="Recharge funds through a bank account and then use the cash balance to buy USAD."
              className="leading-6 text-xs md:text-sm text-[#FFFFFFA6]"
              animateClassName="animate__slideInUp"
            ></AnimatedContent>
            <img src={mint} className="hidden md:block w-[557px]" />
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
              className="w-full md:w-[560px] px-4 md:px-[32px] rounded-[24px] border border-[#DAC89F33]"
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
              <div className=" rounded-[12px] bg-[#FFFFFF08] py-3 md:py-5 px-3 md:px-6 pr-0 md:pr-3">
                <div className="text-[14px] text-[#FFFFFFD9] leading-[26px]">
                  You will pay
                </div>
                <div className="flex mt-3 items-center justify-between">
                  <input
                    placeholder="0.00"
                    className="bg-transparent w-[160px] md:w-auto flex-1 outline-none text-[#fff] text-[32px] leading-[42px]"
                  />
                  <Select
                    className="flex-1 h-[48px] flex items-center select_cc my-select"
                    value={selectedCurrency}
                    suffixIcon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M7.20759 10.9706C7.6079 11.4906 8.3921 11.4906 8.79241 10.9706L11.9568 6.85999C12.463 6.20243 11.9942 5.25 11.1644 5.25H4.83563C4.00579 5.25 3.53702 6.20243 4.04322 6.85999L7.20759 10.9706Z"
                          fill="#757575"
                        />
                      </svg>
                    }
                    labelRender={() => (
                      <div className="flex items-center">
                        <img
                          src={
                            coinArr.find(
                              (coin) => coin.value === selectedCurrency,
                            )?.img || ''
                          }
                          className="w-[22px] h-[22px] object-contain bg-[#000] rounded-full mr-2"
                        />
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
                          { value: 'GBPC', label: 'GBPC', img: gbpc_coin },
                          { value: 'BTC', label: 'BTC', img: btc_coin },
                          { value: 'ETH', label: 'ETH', img: eth_coin },
                          { value: 'USDT', label: 'USDT', img: usdt_coin },
                        ]
                      : [{ value: 'USAD', label: 'USAD', img: usad_coin }]
                    ).map((item) => {
                      return {
                        label: (
                          <div className="flex items-center">
                            <img
                              src={item?.img}
                              className="w-[22px] h-[22px] object-contain bg-[#000] rounded-full mr-2"
                            />
                            {item.label}
                          </div>
                        ),
                        value: item.value,
                      };
                    })}
                  ></Select>
                </div>
              </div>
              <div className="mt-7 rounded-[12px] bg-[#FFFFFF08] py-3 md:py-5 px-3 md:px-6 pr-0 md:pr-3">
                <div className="text-[14px] text-[#FFFFFFD9] leading-[26px]">
                  You receive
                </div>
                <div className="flex mt-3 items-center justify-between">
                  <input
                    placeholder="0.00"
                    className="bg-transparent w-[160px] md:w-auto flex-1 outline-none text-[#fff] text-[32px] leading-[42px]"
                  />
                  <Select
                    className="flex-1 h-[48px] flex items-center select_cc1 my-select"
                    value={selectedCurrency1}
                    suffixIcon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M7.20759 10.9706C7.6079 11.4906 8.3921 11.4906 8.79241 10.9706L11.9568 6.85999C12.463 6.20243 11.9942 5.25 11.1644 5.25H4.83563C4.00579 5.25 3.53702 6.20243 4.04322 6.85999L7.20759 10.9706Z"
                          fill="#757575"
                        />
                      </svg>
                    }
                    labelRender={() => (
                      <div className="flex items-center">
                        <img
                          src={
                            coinArr.find(
                              (coin) => coin.value === selectedCurrency1,
                            )?.img || ''
                          }
                          className="w-[22px] h-[22px] object-contain bg-[#000] rounded-full mr-2"
                        />
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
                      ? [{ value: 'USAD', label: 'USAD', img: usad_coin }]
                      : [
                          { value: 'GBPC', label: 'GBPC', img: gbpc_coin },
                          { value: 'USDT', label: 'USDT', img: usdt_coin },
                        ]
                    ).map((item) => ({
                      label: (
                        <div className="flex items-center">
                          <img
                            src={item?.img}
                            className="w-[22px] h-[22px] object-contain bg-[#000] rounded-full mr-2"
                          />
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
                value={selectedCurrency}
                suffixIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M7.20759 10.9706C7.6079 11.4906 8.3921 11.4906 8.79241 10.9706L11.9568 6.85999C12.463 6.20243 11.9942 5.25 11.1644 5.25H4.83563C4.00579 5.25 3.53702 6.20243 4.04322 6.85999L7.20759 10.9706Z"
                      fill="#757575"
                    />
                  </svg>
                }
                labelRender={() => (
                  <div className="flex items-center">
                    <img
                      src={
                        coinArr.find((coin) => coin.value === selectedCurrency)
                          ?.img || ''
                      }
                      className="w-[22px] h-[22px] object-contain bg-[#000] rounded-full mr-2"
                    />
                    {selectedCurrency}
                  </div>
                )}
                getPopupContainer={() => document.querySelector('.select_cc2')}
                onChange={(value) => {
                  setSelectedCurrency2(value);
                }}
                options={[
                  // { value: 'USAD', label: 'USAD' },
                  // { value: 'USDT', label: 'USDT' },
                  {
                    value: selectedCurrency,
                    label: selectedCurrency,
                    img:
                      coinArr.find((coin) => coin.value === selectedCurrency)
                        ?.img || '',
                  },
                  // { value: 'GBPC', label: 'GBPC', img: gbpc_coin },
                ].map((item) => ({
                  label: (
                    <div className="flex items-center">
                      <img
                        src={item?.img}
                        className="w-[22px] h-[22px] object-contain bg-[#000] rounded-full mr-2"
                      />
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
