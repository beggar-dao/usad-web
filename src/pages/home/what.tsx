import right from '@/assets/images/right.png';
import what1_1 from '@/assets/images/what1_1.png';
import what2_2 from '@/assets/images/what2_2.png';
import what3_3 from '@/assets/images/what3_3.png';
import what4 from '@/assets/images/what4.png';
import AnimatedContent from '@/components/Animate';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
export default function What() {
  return (
    <div
      id="whatUSAD"
      className="what px-4 md:px-0 pt-8 md:pt-[129px] pb-10 md:pb-[85px]"
    >
      <AnimatedContent
        content="What is USAD?"
        className="text-[26px]  md:text-[52px] text-center font-bold leading-6 md:leading-[48px] text-[#dac89f]"
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
            <div className="wt1_bg  px-[20px] py-[28px]">
              <div className="text-[#DAC89F]  text-[24px] font-bold leading-[20px]">
                Borderless Currency
              </div>
              <div className="mt-3 text-[#FFFFFFA6] line-clamp-2 leading-[24px] font-[200] text-sm">
                Designed for global use, enabling seamless transactions across
                borders and financial systems.
              </div>
              <img src={what1_1} className="block mt-4 w-full m-auto" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="wt2_bg  px-[20px] py-[28px]">
              <div className="text-[#DAC89F] text-[24px] font-bold leading-[20px]">
                Asset-Backed
              </div>
              <div className="mt-3 text-[#FFFFFFA6] line-clamp-2 leading-[24px] font-[200] text-sm">
                Each token is backed by a diversified basket of real-world
                assets, ensuring stability and trust.
              </div>
              <img src={what2_2} className="block mt-4 w-full m-auto" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="wt3_bg px-[20px] py-[28px]">
              <div className="text-[#DAC89F] text-[24px] font-bold leading-[20px]">
                Web4 Technology
              </div>
              <div className="mt-3 text-[#FFFFFFA6] line-clamp-2 leading-[24px] font-[200] text-sm">
                Built on TOK Chain for enhanced security, transparency, and
                decentralized governance.
              </div>
              <img src={what3_3} className="block mt-4 w-full m-auto" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="px-4 hidden md:grid md:max-w-[1440px] m-auto mt-[80px] md:grid-cols-3 gap-[32px]">
        <div className="wt1_bg hover:scale-[1.05] transition-all  px-[40px] py-[56px]">
          <div className="text-[#DAC89F] line-clamp-1 text-[28px] font-bold leading-[36px]">
            Borderless Currency
          </div>
          <div className="mt-6 text-[#FFFFFFA6] line-clamp-2 leading-[26px] font-[200] text-base">
            Designed for global use, enabling seamless transactions across
            borders and financial systems.
          </div>
          <img
            src={what1_1}
            className="block max-w-[320px] mt-8 w-full m-auto"
          />
        </div>
        <div className="wt2_bg hover:scale-[1.05] transition-all   px-[40px] py-[56px]">
          <div className="text-[#DAC89F] line-clamp-1 text-[28px] font-bold leading-[36px]">
            Asset-Backed
          </div>
          <div className="mt-6 text-[#FFFFFFA6] line-clamp-2 leading-[26px] font-[200] text-base">
            Each token is backed by a diversified basket of real-world assets,
            ensuring stability and trust.
          </div>
          <img
            src={what2_2}
            className="block max-w-[320px] mt-8 w-full m-auto"
          />
        </div>
        <div className="wt3_bg hover:scale-[1.05] transition-all  px-[40px] py-[56px]">
          <div className="text-[#DAC89F] text-[28px] line-clamp-1 font-bold leading-[36px]">
            Web4 Technology
          </div>
          <div className="mt-6 text-[#FFFFFFA6] line-clamp-2 leading-[26px] font-[200] text-base">
            Built on TOK Chain for enhanced security, transparency, and
            decentralized governance.
          </div>
          <img
            src={what3_3}
            className="block max-w-[320px] mt-8 w-full m-auto"
          />
        </div>
      </div>

      <AnimatedContent
        id="features"
        content="Breaking Away from Traditional Models"
        className="mt-[88px] md:mt-[169px] text-[24px] md:text-[32px] text-[#DAC89F] font-bold text-left md:text-center"
        animateClassName="animate__slideInDown"
      ></AnimatedContent>
      <AnimatedContent
        content="USAD addresses the flaws of traditional stablecoins with a transparent,
        decentralized, and asset-backed approach. <br /> Unlike other
        stablecoins, USAD features a fixed supply of 94.49 Trillion,
        over-collateralization, and community governance through a DAO."
        className="text-sm md:text-[16px] mt-4 md:mt-[30px] text-left text-white md:text-center leading-5 md:leading-[26px]"
        animateClassName="animate__slideInUp"
      ></AnimatedContent>
      <div className="md:max-w-[1440px] m-auto grid grid-cols-2 gap-4 md:gap-0 md:grid-cols-4 mt-[36px] md:mt-[72px]">
        <div className="md:border-r md:border-r-[#FFFFFF14] px-2 md:px-[30px] flex  justify-start">
          <div>
            <img src={right} className="w-8 h-8 block" />
            <div className="text-base md:text-[24px] leading-6 md:leading-[48px] text-[#DAC89F] font-bold">
              Decentralized Governance
            </div>
            <div className="text-xs md:text-[16px] leading-[22px] font-[200] text-white">
              Community-driven decision making enables financial equity
            </div>
          </div>
        </div>
        <div className=" px-2 md:px-[30px]  md:hidden  justify-end">
          <div>
            <img src={right} className="w-8 h-8 block" />
            <div className="text-base md:text-[24px] leading-6 md:leading-[48px] text-[#DAC89F] font-bold">
              On-Chain Transparency
            </div>
            <div className="text-xs md:text-[16px] leading-[22px] font-[200] text-white">
              Real-time auditability provides real trust
            </div>
          </div>
        </div>
        <div className="md:border-r md:border-r-[#FFFFFF14] px-2 md:px-[30px]   flex  md:justify-center">
          <div>
            <img src={right} className="w-8 h-8 block" />
            <div className="text-base md:text-[24px] leading-6 md:leading-[48px] text-[#DAC89F] font-bold">
              Fixed Supply
            </div>
            <div className="text-xs md:text-[16px] leading-[22px] font-[200] text-white">
              94.49 trillion total supply equivalent to the M2 of the 4 biggest
              countries in the world
            </div>
          </div>
        </div>
        <div className="md:border-r md:border-r-[#FFFFFF14] px-2 md:px-[30px]  flex md:justify-center">
          <div>
            <img src={right} className="w-8 h-8 block" />
            <div className="text-base md:text-[24px] leading-6 md:leading-[48px] text-[#DAC89F] font-bold">
              Over-Collateralized
            </div>
            <div className="text-xs md:text-[16px] leading-[22px] font-[200] text-white">
              137% reserve ratio ensures your assets safety
            </div>
          </div>
        </div>
        <div className=" hidden md:flex  px-2 md:px-[30px]">
          <div>
            <img src={right} className="w-8 h-8 block" />
            <div className="text-base md:text-[24px] leading-6 md:leading-[48px] text-[#DAC89F] font-bold">
              On-Chain Transparency
            </div>
            <div className="text-xs md:text-[16px] leading-[22px] font-[200] text-white">
              Real-time auditability provides real trust
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
