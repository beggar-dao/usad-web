import right from '@/assets/images/right.png';
import what4 from '@/assets/images/what4.png';
import AnimatedContent from '@/components/Animate';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
export default function What() {
  return (
    <div className="what px-4 md:px-0 pt-8 md:pt-[129px] pb-10 md:pb-[85px]">
      <AnimatedContent
        content="What is USAD?"
        className="text-[26px] md:text-[52px] text-center font-bold leading-6 md:leading-[48px] text-[#dac89f]"
        animateClassName="animate__slideInDown"
      ></AnimatedContent>
      <AnimatedContent
        content="The next generation of decentralized, asset-backed stablecoins"
        className="text-xs md:text-base text-[#fff] mt-4 text-center"
        animateClassName="animate__slideInUp"
      ></AnimatedContent>

      <div className="md:hidden mt-[80px]">
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
            <div className="wt1_bg  h-[440px] px-[20px] py-[28px]">
              <div className="text-[#DAC89F] text-[24px] font-bold leading-[20px]">
                Borderless Currency
              </div>
              <div className="mt-3 text-[#FFFFFFA6] leading-[24px] font-[200] text-sm">
                Designed for global use, enabling seamless transactions across
                borders and financial systems.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="wt2_bg   h-[440px] px-[20px] py-[28px]">
              <div className="text-[#DAC89F] text-[24px] font-bold leading-[20px]">
                Asset-Backed
              </div>
              <div className="mt-3 text-[#FFFFFFA6] leading-[24px] font-[200] text-sm">
                Each token is backed by a diversified basket of real-world
                assets, ensuring stability and trust.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="wt3_bg h-[440px] px-[20px] py-[28px]">
              <div className="text-[#DAC89F] text-[24px] font-bold leading-[20px]">
                Web4 Technology
              </div>
              <div className="mt-3 text-[#FFFFFFA6] leading-[24px] font-[200] text-sm">
                Built on TOK Chain for enhanced security, transparency, and
                decentralized governance.
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="px-4 hidden md:grid md:max-w-[1440px] m-auto mt-[80px] md:grid-cols-3 gap-[32px]">
        <div className="wt1_bg hover:scale-[1.05] transition-all h-[560px] px-[40px] py-[56px]">
          <div className="text-[#DAC89F] text-[28px] font-bold leading-[36px]">
            Borderless Currency
          </div>
          <div className="mt-6 text-[#FFFFFFA6] leading-[26px] font-[200] text-base">
            Designed for global use, enabling seamless transactions across
            borders and financial systems.
          </div>
        </div>
        <div className="wt2_bg hover:scale-[1.05] transition-all h-[560px] px-[40px] py-[56px]">
          <div className="text-[#DAC89F] text-[28px] font-bold leading-[36px]">
            Asset-Backed
          </div>
          <div className="mt-6 text-[#FFFFFFA6] leading-[26px] font-[200] text-base">
            Each token is backed by a diversified basket of real-world assets,
            ensuring stability and trust.
          </div>
        </div>
        <div className="wt3_bg hover:scale-[1.05] transition-all h-[560px] px-[40px] py-[56px]">
          <div className="text-[#DAC89F] text-[28px] font-bold leading-[36px]">
            Web4 Technology
          </div>
          <div className="mt-6 text-[#FFFFFFA6] leading-[26px] font-[200] text-base">
            Built on TOK Chain for enhanced security, transparency, and
            decentralized governance.
          </div>
        </div>
      </div>

      <AnimatedContent
        content="Breaking Away from Traditional Models"
        className="mt-[88px] md:mt-[169px] text-[24px] md:text-[32px] text-[#DAC89F] font-bold text-left md:text-center"
        animateClassName="animate__slideInDown"
      ></AnimatedContent>
      <AnimatedContent
        content="USAD addresses the flaws of traditional stablecoins with a transparent,
        decentralized, and asset-backed approach. <br /> Unlike other
        stablecoins, USAD features a fixed supply of 94.49T,
        over-collateralization, and community governance through a DAO."
        className="text-sm md:text-[16px] mt-4 md:mt-[30px] text-left text-white md:text-center leading-5 md:leading-[26px]"
        animateClassName="animate__slideInUp"
      ></AnimatedContent>
      <div className="md:max-w-[1440px] m-auto grid grid-cols-2 gap-4 md:gap-0 md:grid-cols-4 mt-[36px] md:mt-[72px]">
        <div className="md:border-r md:border-r-[#FFFFFF14] md:h-[106px] flex  justify-start">
          <div>
            <img src={right} className="w-8 h-8 block" />
            <div className="text-base md:text-[24px] leading-6 md:leading-[48px] text-[#DAC89F] font-bold">
              Decentralized Governance
            </div>
            <div className="text-xs md:text-[16px] leading-[22px] font-[200] text-white">
              Community-driven decision making
            </div>
          </div>
        </div>
        <div className="h-[106px]  md:hidden  justify-end">
          <div>
            <img src={right} className="w-8 h-8 block" />
            <div className="text-base md:text-[24px] leading-6 md:leading-[48px] text-[#DAC89F] font-bold">
              On-Chain Transparency
            </div>
            <div className="text-xs md:text-[16px] leading-[22px] font-[200] text-white">
              Real-time auditability
            </div>
          </div>
        </div>
        <div className="md:border-r md:border-r-[#FFFFFF14]  md:h-[106px] flex  md:justify-center">
          <div>
            <img src={right} className="w-8 h-8 block" />
            <div className="text-base md:text-[24px] leading-6 md:leading-[48px] text-[#DAC89F] font-bold">
              Fixed Supply
            </div>
            <div className="text-xs md:text-[16px] leading-[22px] font-[200] text-white">
              94.49T total tokens
            </div>
          </div>
        </div>
        <div className="md:border-r md:border-r-[#FFFFFF14]  md:h-[106px] flex md:justify-center">
          <div>
            <img src={right} className="w-8 h-8 block" />
            <div className="text-base md:text-[24px] leading-6 md:leading-[48px] text-[#DAC89F] font-bold">
              Over-Collateralized
            </div>
            <div className="text-xs md:text-[16px] leading-[22px] font-[200] text-white">
              137% reserve ratio
            </div>
          </div>
        </div>
        <div className="h-[106px] hidden md:flex  justify-end">
          <div>
            <img src={right} className="w-8 h-8 block" />
            <div className="text-base md:text-[24px] leading-6 md:leading-[48px] text-[#DAC89F] font-bold">
              On-Chain Transparency
            </div>
            <div className="text-xs md:text-[16px] leading-[22px] font-[200] text-white">
              Real-time auditability
            </div>
          </div>
        </div>
      </div>
      <img
        src={what4}
        className="m-auto mt-[48px] md:mt-[95px] md:w-[1010px]"
      />
    </div>
  );
}
