import right from '@/assets/images/right.png';
import te1 from '@/assets/images/te1.png';
import te10_1 from '@/assets/images/te10_1.png';
import te2 from '@/assets/images/te2.png';
import te3 from '@/assets/images/te3.png';
import te4 from '@/assets/images/te4.png';
import te5 from '@/assets/images/te5.png';
import te9_1 from '@/assets/images/te9_1.png';

import AnimatedContent from '@/components/Animate';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
export default function Why() {
  return (
    <div className="bg-[#0F0F0F] pt-[48px] md:pt-[177px] pb-[40px] md:pb-[142px]">
      <AnimatedContent
        content="Why Choose USAD?"
        className=" text-center  text-[26px] md:text-[52px] leading-[48px] font-bold text-[#dac89f]"
        animateClassName="animate__slideInDown"
      ></AnimatedContent>
      <AnimatedContent
        content="The most advanced stablecoin solution for global finance"
        className="text-center text-sm md:text-base text-[#FFFFFFE5] mt-4"
        animateClassName="animate__slideInUp"
      ></AnimatedContent>

      <div className="md:hidden px-4 mt-[80px]">
        <Swiper
          modules={[Pagination, Autoplay]}
          navigation={true}
          autoplay={{
            delay: 3000, // 自动播放延迟时间，单位为毫秒
            disableOnInteraction: false, // 用户操作后是否停止自动播放
          }}
          pagination={{
            clickable: true, // 使小圆点可点击
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          spaceBetween={50}
          slidesPerView={1}
        >
          <SwiperSlide>
            <div className="px-[20px] py-[30px] gap-6 flex items-center justify-between rounded-[24px] transition-all duration-300 ">
              <div className="flex-1">
                <div className="text-[#DAC89F] font-bold leading-[36px] md:text-[28px] text-[14px]">
                  Stability
                </div>
                <div className="mt-6 text-[16px] text-[#FFFFFFE5] leading-6 font-[200]">
                  Maintains $1 peg through diversified asset backing and
                  real-time reserve management.
                </div>
              </div>
              <img src={te1} className="w-[30%] block" />
            </div>
            <div className="px-[20px] py-[30px] gap-6 flex items-center justify-between rounded-[24px] transition-all duration-300 ">
              <div className="flex-1">
                <div className="text-[#DAC89F] font-bold leading-[36px] md:text-[28px] text-[14px]">
                  Transparency
                </div>
                <div className="mt-6 text-[16px] text-[#FFFFFFE5] leading-6 font-[200]">
                  All reserves and transactions publicly verifiable on the
                  blockchain.
                </div>
              </div>
              <img src={te2} className="w-[30%] block" />
            </div>

            <div className="px-[20px] py-[30px] gap-6 flex items-center justify-between rounded-[24px] transition-all duration-300 ">
              <div className="flex-1">
                <div className="text-[#DAC89F] font-bold leading-[36px] md:text-[28px] text-[14px]">
                  Security
                </div>
                <div className="mt-6 text-[16px] text-[#FFFFFFE5] leading-6 font-[200]">
                  Built on TOK Chain with advanced cryptographic protections.
                </div>
              </div>
              <img src={te3} className="w-[30%] block" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-[20px] py-[30px] gap-6 flex items-center justify-between rounded-[24px] transition-all duration-300 ">
              <div className="flex-1">
                <div className="text-[#DAC89F] font-bold leading-[36px] md:text-[28px] text-[14px]">
                  Global Access
                </div>
                <div className="mt-6 text-[16px] text-[#FFFFFFE5] leading-6 font-[200]">
                  Accessible to anyone with internet, regardless of location or
                  financial status.
                </div>
              </div>
              <img src={te2} className="w-[30%] block" />
            </div>
            <div className="px-[20px] py-[30px] gap-6 flex items-center justify-between rounded-[24px] transition-all duration-300 ">
              <div className="flex-1">
                <div className="text-[#DAC89F] font-bold leading-[36px] md:text-[28px] text-[14px]">
                  Fast Transactions
                </div>
                <div className="mt-6 text-[16px] text-[#FFFFFFE5] leading-6 font-[200]">
                  Lightning-fast settlement times optimized for global use.
                </div>
              </div>
              <img src={te4} className="w-[30%] block" />
            </div>
            <div className="px-[20px] py-[30px] gap-6 flex items-center justify-between rounded-[24px] transition-all duration-300 ">
              <div className="flex-1">
                <div className="text-[#DAC89F] font-bold leading-[36px] md:text-[28px] text-[14px]">
                  DAO Governance
                </div>
                <div className="mt-6 text-[16px] text-[#FFFFFFE5] leading-6 font-[200]">
                  Community-driven decisions through decentralized voting.
                </div>
              </div>
              <img src={te5} className="w-[30%] block" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="px-4 md:max-w-[1440px] m-auto mt-[48px] hidden md:grid grid-cols-1 md:grid-cols-3 gap-[16px]">
        <div className="p-[40px] rounded-[24px] transition-all duration-300 hover:bg-[#1b1b1b]">
          <div className="text-[#DAC89F] font-bold leading-[36px] md:text-[28px] text-[14px]">
            Stability
          </div>
          <div className="mt-5 text-[16px] line-clamp-2 text-[#FFFFFFE5] leading-6 font-[200]">
            Maintains $1 peg through diversified asset backing and real-time
            reserve management.
          </div>
          <div className="flex items-center justify-center  w-[164px] h-[164px] m-auto mt-[30px]">
            <img src={te1} className="h-[148px] block" />
          </div>
        </div>
        <div className="p-[40px] rounded-[24px] transition-all duration-300 hover:bg-[#1b1b1b]">
          <div className="text-[#DAC89F] font-bold leading-[36px] md:text-[28px] text-[14px]">
            Transparency
          </div>
          <div className="mt-5 text-[16px] line-clamp-2 text-[#FFFFFFE5] leading-6 font-[200]">
            All reserves and transactions publicly verifiable on the blockchain.
          </div>
          <div className="flex items-center justify-center  w-[164px] h-[164px] m-auto mt-[30px]">
            <img src={te2} className="h-[120px] block" />
          </div>
        </div>

        <div className="p-[40px] rounded-[24px] transition-all duration-300 hover:bg-[#1b1b1b]">
          <div className="text-[#DAC89F] font-bold leading-[36px] md:text-[28px] text-[14px]">
            Security
          </div>
          <div className="mt-5 text-[16px] line-clamp-2 text-[#FFFFFFE5] leading-6 font-[200]">
            Built on TOK Chain with advanced cryptographic protections.
          </div>
          <div className="flex items-center justify-center  w-[164px] h-[164px] m-auto mt-[30px]">
            <img src={te3} className="h-[135px] block" />
          </div>
        </div>

        <div className="p-[40px] rounded-[24px] transition-all duration-300 hover:bg-[#1b1b1b]">
          <div className="text-[#DAC89F]  font-bold leading-[36px] md:text-[28px] text-[14px]">
            Global Access
          </div>
          <div className="mt-5 text-[16px] line-clamp-2 text-[#FFFFFFE5] leading-6 font-[200]">
            Accessible to anyone with internet, regardless of location or
            financial status.
          </div>
          <div className="flex items-center justify-center  w-[164px] h-[164px] m-auto mt-[30px]">
            <img src={te2} className="h-[133px] block" />
          </div>
        </div>
        <div className="p-[40px] rounded-[24px] transition-all duration-300 hover:bg-[#1b1b1b]">
          <div className="text-[#DAC89F] font-bold leading-[36px] md:text-[28px] text-[14px]">
            Fast Transactions
          </div>
          <div className="mt-5 text-[16px] line-clamp-2 text-[#FFFFFFE5] leading-6 font-[200]">
            Lightning-fast settlement times optimized for global use.
          </div>
          <div className="flex items-center justify-center  w-[164px] h-[164px] m-auto mt-[30px]">
            <img src={te4} className="h-[150px] block" />
          </div>
        </div>
        <div className="p-[40px] rounded-[24px] transition-all duration-300 hover:bg-[#1b1b1b]">
          <div className="text-[#DAC89F] font-bold leading-[36px] md:text-[28px] text-[14px]">
            DAO Governance
          </div>
          <div className="mt-5 text-[16px] line-clamp-2 text-[#FFFFFFE5] leading-6 font-[200]">
            Community-driven decisions through decentralized voting.
          </div>
          <div className="flex items-center justify-center  w-[164px] h-[164px] m-auto mt-[30px]">
            <img src={te5} className="h-[115px] block" />
          </div>
        </div>
      </div>

      <div className="md:hidden px-4 mt-[80px]">
        <Swiper
          modules={[Pagination, Autoplay]}
          navigation={true}
          autoplay={{
            delay: 3000, // 自动播放延迟时间，单位为毫秒
            disableOnInteraction: false, // 用户操作后是否停止自动播放
          }}
          pagination={{
            clickable: true, // 使小圆点可点击
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          spaceBetween={50}
          slidesPerView={1}
        >
          <SwiperSlide>
            <div className="p-4 why1">
              <AnimatedContent
                content="USAD vs Traditional Stablecoins"
                animateClassName="animate__bounce"
                className="text-[#DAC89F] mb-2 text-base md:text-[32px] leading-[36px] font-bold"
              ></AnimatedContent>
              <div className="flex mb-2 items-center gap-4">
                <img src={right} className="w-8 h-8 block" />
                <div>
                  <div className="text-[14px] text-white leading-[30px]">
                    Fixed Supply Model
                  </div>
                  <div className="text-xs mt-1 text-[#FFFFFF73] leading-[22px]">
                    94.49 Trillion total tokens with no inflationary issuance.
                  </div>
                </div>
              </div>
              <div className="flex mb-2 items-center gap-4">
                <img src={right} className="w-8 h-8 block" />
                <div>
                  <div className="text-[14px] text-white leading-[30px]">
                    Multi-Asset Collateral
                  </div>
                  <div className="text-xs mt-1 text-[#FFFFFF73] leading-[22px]">
                    Diversified basket including tokenized treasuries and
                    fiat-backed assets.
                  </div>
                </div>
              </div>
              <div className="flex mb-2 items-center gap-4">
                <img src={right} className="w-8 h-8 block" />
                <div>
                  <div className="text-[14px] text-white leading-[30px]">
                    Decentralized Governanceodel
                  </div>
                  <div className="text-xs mt-1 text-[#FFFFFF73] leading-[22px]">
                    Community votes determine protocol upgrades and parameters.
                  </div>
                </div>
              </div>
              <div className="flex mb-2 items-center gap-4">
                <img src={right} className="w-8 h-8 block" />
                <div>
                  <div className="text-[14px] text-white leading-[30px]">
                    Full Transparency
                  </div>
                  <div className="text-xs mt-1 text-[#FFFFFF73] leading-[22px]">
                    Real-time on-chain reserve verification and regular audits.
                  </div>
                </div>
              </div>
              <img src={te9_1} className="w-full block mt-4" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4 why2">
              <AnimatedContent
                animateClassName="animate__bounce"
                className="text-[#DAC89F] mb-2 text-base md:text-[32px] leading-[36px] font-bold"
                content="The USAD Advantage"
              ></AnimatedContent>
              <div className="flex mb-2 items-center gap-4">
                <img src={right} className="w-8 h-8 block" />
                <div>
                  <div className="text-[14px] text-white leading-[30px]">
                    Inflation-Proof Value
                  </div>
                  <div className="text-xs mt-1 text-[#FFFFFF73] leading-[22px]">
                    94.49T fixed supply ensures zero dilution · Your assets stay
                    protected
                  </div>
                </div>
              </div>
              <div className="flex mb-2 items-center gap-4">
                <img src={right} className="w-8 h-8 block" />
                <div>
                  <div className="text-[14px] text-white leading-[30px]">
                    Diversified Security
                  </div>
                  <div className="text-xs mt-1 text-[#FFFFFF73] leading-[22px]">
                    Bond-backed + fiat-collateralized · Most secure stablecoin
                    reserves
                  </div>
                </div>
              </div>
              <div className="flex mb-2 items-center gap-4">
                <img src={right} className="w-8 h-8 block" />
                <div>
                  <div className="text-[14px] text-white leading-[30px]">
                    Community Governance
                  </div>
                  <div className="text-xs mt-1 text-[#FFFFFF73] leading-[22px]">
                    You vote on all changes · No centralized control
                  </div>
                </div>
              </div>
              <div className="flex mb-2 items-center gap-4">
                <img src={right} className="w-8 h-8 block" />
                <div>
                  <div className="text-[14px] text-white leading-[30px]">
                    Total Transparency
                  </div>
                  <div className="text-xs mt-1 text-[#FFFFFF73] leading-[22px]">
                    Live reserve verification · Always fully backed
                  </div>
                </div>
              </div>
              <img src={te10_1} className="w-full block mt-4" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="px-4 md:max-w-[1440px] m-auto mt-[75px] md:mt-[150px] gap-[60px] hidden md:flex justify-between">
        <div className="p-[60px]  why1">
          <AnimatedContent
            content="USAD vs Traditional Stablecoins"
            animateClassName="animate__bounce"
            className="text-[#DAC89F] mb-8 text-[32px] leading-[36px] font-bold"
          ></AnimatedContent>
          <div className="flex mb-5 items-center gap-4">
            <img src={right} className="w-8 h-8 block" />
            <div>
              <div className="text-[20px] text-white leading-[30px]">
                Fixed Supply Model
              </div>
              <div className="text-sm mt-1 text-[#FFFFFF73] leading-[22px]">
                94.49 Trillion total tokens with no inflationary issuance.
              </div>
            </div>
          </div>
          <div className="flex mb-5 items-center gap-4">
            <img src={right} className="w-8 h-8 block" />
            <div>
              <div className="text-[20px] text-white leading-[30px]">
                Multi-Asset Collateral
              </div>
              <div className="text-sm mt-1 text-[#FFFFFF73] leading-[22px]">
                Diversified basket including tokenized treasuries and
                fiat-backed assets.
              </div>
            </div>
          </div>
          <div className="flex mb-5 items-center gap-4">
            <img src={right} className="w-8 h-8 block" />
            <div>
              <div className="text-[20px] text-white leading-[30px]">
                Decentralized Governanceodel
              </div>
              <div className="text-sm mt-1 text-[#FFFFFF73] leading-[22px]">
                Community votes determine protocol upgrades and parameters.
              </div>
            </div>
          </div>
          <div className="flex mb-5 items-center gap-4">
            <img src={right} className="w-8 h-8 block" />
            <div>
              <div className="text-[20px] text-white leading-[30px]">
                Full Transparency
              </div>
              <div className="text-sm mt-1 text-[#FFFFFF73] leading-[22px]">
                Real-time on-chain reserve verification and regular audits.
              </div>
            </div>
          </div>
          <img src={te9_1} className="w-full block mt-9" />
        </div>
        <div className="p-[60px]  why2">
          <AnimatedContent
            animateClassName="animate__bounce"
            className="text-[#DAC89F] mb-8 text-[32px] leading-[36px] font-bold"
            content="The USAD Advantage"
          ></AnimatedContent>
          <div className="flex mb-5 items-center gap-4">
            <img src={right} className="w-8 h-8 block" />
            <div>
              <div className="text-[20px] text-white leading-[30px]">
                Inflation-Proof Value
              </div>
              <div className="text-sm mt-1 text-[#FFFFFF73] leading-[22px]">
                94.49T fixed supply ensures zero dilution · Your assets stay
                protected
              </div>
            </div>
          </div>
          <div className="flex mb-5 items-center gap-4">
            <img src={right} className="w-8 h-8 block" />
            <div>
              <div className="text-[20px] text-white leading-[30px]">
                Diversified Security
              </div>
              <div className="text-sm mt-1 text-[#FFFFFF73] leading-[22px]">
                Bond-backed + fiat-collateralized · Most secure stablecoin
                reserves
              </div>
            </div>
          </div>
          <div className="flex mb-5 items-center gap-4">
            <img src={right} className="w-8 h-8 block" />
            <div>
              <div className="text-[20px] text-white leading-[30px]">
                Community Governance
              </div>
              <div className="text-sm mt-1 text-[#FFFFFF73] leading-[22px]">
                You vote on all changes · No centralized control
              </div>
            </div>
          </div>
          <div className="flex mb-5 items-center gap-4">
            <img src={right} className="w-8 h-8 block" />
            <div>
              <div className="text-[20px] text-white leading-[30px]">
                Total Transparency
              </div>
              <div className="text-sm mt-1 text-[#FFFFFF73] leading-[22px]">
                Live reserve verification · Always fully backed
              </div>
            </div>
          </div>
          <img src={te10_1} className="w-full block mt-9" />
        </div>
      </div>
    </div>
  );
}
