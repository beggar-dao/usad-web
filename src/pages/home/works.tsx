import gbpc_bi from '@/assets/images/gbpc_bi.png';
import layer from '@/assets/images/layer.png';
import other_bi from '@/assets/images/other_bi.png';
import reserve from '@/assets/images/reserve.png';
import tgbp from '@/assets/images/tgbp.png';
import work1 from '@/assets/images/work1.png';
import work2 from '@/assets/images/work2.png';
import work3 from '@/assets/images/work3.png';
import AnimatedContent from '@/components/Animate';
import AnimatedNumber from '@/components/AnimatedNumber';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
export default function Works() {
  return (
    <div className="works pt-[40px] md:pt-[95px] pb-[60px] md:pb-[120px]">
      <AnimatedContent
        className="text-base md:text-[32px] font-bold px-4 md:px-0 text-left md:text-center text-[#DAC89F]"
        content="How USAD Works"
        animateClassName="animate__slideInDown"
      />
      <AnimatedContent
        content="USAD operates on two core layers, combining cutting-edge blockchain
        technology with real-world asset backing."
        animateClassName="animate__slideInUp"
        className="text-[14px] px-4 mt-3 text-white text-left md:text-center"
      ></AnimatedContent>
      <div className="px-4 md:max-w-[1440px] m-auto grid grid-cols-1 md:grid-cols-2 gap-[28px] md:gap-[56px] mt-[46px] md:mt-[92px]">
        <div className="py-4 md:py-[82px] works_bg px-4 md:px-[56px] flex items-center gap-[25px] md:gap-[50px]">
          <img className="block w-[74px] md:w-[148px]" src={layer} />
          <div className="flex-1">
            <AnimatedContent
              content="Protocol Layer"
              className="text-sm md:text-[28px] leading-6 md:leading-[48px] text-[#DAC89F]"
              animateClassName="animate__bounceIn"
            ></AnimatedContent>
            <AnimatedContent
              animateClassName="animate__headShake"
              className="text-xs md:text-[14px]  text-white leading-5 font-[200]"
            >
              Natively deployed on TOK Chain with smart contracts managing
              minting, burning, and collateral tracking.
            </AnimatedContent>
          </div>
        </div>
        <div className="py-4 md:py-[82px] works_bg px-4 md:px-[56px] flex items-center gap-[25px] md:gap-[50px]">
          <img className="block w-[74px] md:w-[148px]" src={reserve} />
          <div className="flex-1">
            <AnimatedContent
              animateClassName="animate__bounceIn"
              className="text-sm md:text-[28px] leading-6 md:leading-[48px] text-[#DAC89F]"
            >
              Reserve Layer
            </AnimatedContent>
            <AnimatedContent
              animateClassName="animate__headShake"
              className="text-xs md:text-[14px]  text-white leading-5 font-[200]"
            >
              Comprised of tokenized real-world assets including treasuries,
              GBPC, and other fiat-backed instruments.
            </AnimatedContent>
          </div>
        </div>
      </div>
      <AnimatedContent
        animateClassName="animate__heartBeat"
        className="text-[18px] md:text-[36px] px-4 md:px-0 text-[#DAC89F] font-bold text-left md:text-center mt-8 md:mt-[200px]"
      >
        Technical Specifications
      </AnimatedContent>
      <div className="px-4 md:max-w-[1440px] m-auto grid grid-cols-2 md:grid-cols-4 mt-5 md:mt-[72px]">
        <div className="md:border-r md:border-r-[#FFFFFF14] h-[88px] flex flex-col md:items-center justify-center">
          <div className="text-[14px] leading-[22px] text-white">
            Total Supply
          </div>
          <div className="text-[20px] md:text-[28px] leading-[48px] text-[#DAC89F] font-bold">
            <AnimatedNumber value={94} duration={1000} /> Trillions
          </div>
        </div>
        <div className="md:border-r md:border-r-[#FFFFFF14] h-[88px] flex flex-col md:items-center justify-center">
          <div className="text-[14px] leading-[22px] text-white">
            Reserve Ratio
          </div>
          <div className="text-[20px] md:text-[28px] leading-[48px] text-[#DAC89F] font-bold">
            <AnimatedNumber value={137} duration={1000} />%
          </div>
        </div>
        <div className="md:border-r md:border-r-[#FFFFFF14] h-[88px] flex flex-col md:items-center justify-center">
          <div className="text-[14px] leading-[22px] text-white">
            Blockchain
          </div>
          <div className="text-[20px] md:text-[28px] leading-[48px] text-[#DAC89F] font-bold">
            TOK Chain
          </div>
        </div>
        <div className=" h-[88px] flex flex-col md:items-center justify-center">
          <div className="text-[14px] leading-[22px] text-white">
            Transaction Speed
          </div>
          <div className="text-[20px] md:text-[28px] leading-[48px] text-[#DAC89F] font-bold">
            3-5 seconds
          </div>
        </div>
        {/* <div className="h-[88px] flex flex-col md:items-end justify-center">
          <div className="text-[14px] leading-[22px] text-white">
            Transaction Speed
          </div>
          <div className="text-[20px] md:text-[28px] leading-[48px] text-[#DAC89F] font-bold">
            <AnimatedNumber value={100} duration={1000} />%
          </div>
        </div> */}
      </div>
      <div className="max-w-[1440px] hidden md:block m-auto mt-[66px] text-sm text-[#fff] leading-[22px]">
        Backing Assets
      </div>
      <div className="px-4 md:max-w-[1440px] m-auto mt-[22px] text-[#fff] grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        <div className="p-4 md:p-[33px] bg-[#0000001F] rounded-[16px] flex items-center justify-between">
          <div className="flex-1">
            <div className="text-white text-[10px] md:text-base">
              Tokenized Treasuries
            </div>
            <div className="text-[#DAC89F] text-[14px] md:text-[28px] font-bold">
              <AnimatedNumber value={45} duration={1000} />%
            </div>
          </div>
          <div className="h-[44px] w-[44px] rounded-full bg-[#489FA4] flex items-center justify-center">
            {/* <img src={Vector} className="block w-[22px]" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="30"
              viewBox="0 0 38 40"
              fill="none"
            >
              <path
                d="M19 40C15.2422 40 11.5687 38.827 8.44417 36.6294C5.31964 34.4318 2.88436 31.3082 1.4463 27.6537C0.00823234 23.9992 -0.368031 19.9778 0.365088 16.0982C1.09821 12.2186 2.90778 8.65492 5.56498 5.85787C8.22218 3.06082 11.6077 1.15601 15.2933 0.384303C18.9789 -0.387401 22.7992 0.00866562 26.271 1.52242C29.7428 3.03617 32.7102 5.59962 34.7979 8.8886C36.8857 12.1776 38 16.0444 38 20C38 25.3043 35.9982 30.3914 32.435 34.1421C28.8718 37.8929 24.0391 40 19 40ZM19 4.28601C16.0475 4.28601 13.1612 5.20762 10.7063 6.93429C8.25134 8.66097 6.33794 11.1152 5.20806 13.9865C4.07817 16.8579 3.78254 20.0174 4.35855 23.0657C4.93456 26.1139 6.35635 28.9138 8.44411 31.1115C10.5319 33.3091 13.1918 34.8057 16.0876 35.4121C18.9834 36.0184 21.985 35.7072 24.7128 34.5178C27.4406 33.3285 29.7721 31.3144 31.4124 28.7302C33.0528 26.1461 33.9283 23.1079 33.9283 20C33.9283 15.8324 32.3555 11.8355 29.5559 8.88853C26.7563 5.94159 22.9592 4.28601 19 4.28601ZM21.8791 27.0713C21.1156 27.8749 20.08 28.3264 19.0003 28.3264C17.9206 28.3264 16.8851 27.8749 16.1215 27.0713L12.2829 23.0307C11.5195 22.2269 11.0906 21.1369 11.0906 20.0003C11.0906 18.8638 11.5195 17.7738 12.2829 16.97L16.1215 12.9293C16.8851 12.1258 17.9206 11.6743 19.0003 11.6743C20.08 11.6743 21.1156 12.1258 21.8791 12.9293L25.7178 16.97C26.4812 17.7738 26.91 18.8638 26.91 20.0003C26.91 21.1369 26.4812 22.2269 25.7178 23.0307L21.8791 27.0713ZM22.8386 18.99L19.9595 15.9593C19.8335 15.8266 19.6838 15.7214 19.5191 15.6496C19.3545 15.5777 19.1779 15.5408 18.9997 15.5408C18.8214 15.5408 18.6449 15.5777 18.4802 15.6496C18.3155 15.7214 18.1659 15.8266 18.0399 15.9593L15.1607 18.99C15.0347 19.1227 14.9347 19.2802 14.8664 19.4535C14.7982 19.6269 14.7631 19.8127 14.7631 20.0003C14.7631 20.188 14.7982 20.3738 14.8664 20.5471C14.9347 20.7205 15.0347 20.878 15.1607 21.0107L18.0399 24.0413C18.1659 24.174 18.3155 24.2793 18.4802 24.3511C18.6449 24.4229 18.8214 24.4599 18.9997 24.4599C19.1779 24.4599 19.3545 24.4229 19.5191 24.3511C19.6838 24.2793 19.8335 24.174 19.9595 24.0413L22.8386 21.0107C22.9647 20.878 23.0647 20.7205 23.1329 20.5471C23.2012 20.3738 23.2363 20.188 23.2363 20.0003C23.2363 19.8127 23.2012 19.6269 23.1329 19.4535C23.0647 19.2802 22.9647 19.1227 22.8386 18.99Z"
                fill="#035D62"
              />
            </svg>
          </div>
        </div>
        <div className="p-4 md:p-[33px] bg-[#0000001F] rounded-[16px] flex items-center justify-between">
          <div>
            <div className="text-white  text-[10px] md:text-base">GBPC</div>
            <div className="text-[#DAC89F] text-[14px] md:text-[28px] font-bold">
              <AnimatedNumber value={30} duration={1000} />%
            </div>
          </div>
          {/* <div className="h-[66px] w-[66px] rounded-full bg-[#F9B813] flex items-center justify-center">
            <img src={Vector} className="block w-[22px]" />
          </div> */}
          <img src={gbpc_bi} className="block w-[44px]" />
        </div>
        <div className="p-4 md:p-[33px] bg-[#0000001F] rounded-[16px] flex items-center justify-between">
          <div>
            <div className="text-white  text-[10px] md:text-base">TGBP</div>
            <div className="text-[#DAC89F] text-[14px] md:text-[28px] font-bold">
              <AnimatedNumber value={15} duration={1000} />%
            </div>
          </div>
          {/* <div className="h-[66px] w-[66px] rounded-full bg-[#C93CAF] flex items-center justify-center">
            <img src={Vector} className="block w-[22px]" />
          </div> */}
          <img src={tgbp} className="block w-[44px]" />
        </div>
        <div className="p-4 md:p-[33px] bg-[#0000001F] rounded-[16px] flex items-center justify-between">
          <div>
            <div className="text-white  text-[10px] md:text-base">
              Other Assets
            </div>
            <div className="text-[#DAC89F] text-[14px] md:text-[28px] font-bold">
              <AnimatedNumber value={10} duration={1000} />%
            </div>
          </div>
          {/* <div className="h-[66px] w-[66px] rounded-full bg-[#1F1F1F] flex items-center justify-center">
            <img src={Vector} className="block w-[22px]" />
          </div> */}
          <img src={other_bi} className="block w-[44px]" />
        </div>
      </div>
      <AnimatedContent
        content="Transparency & Governance"
        animateClassName="animate__slideInUp"
        className="text-left px-4 md:text-center text-[18px] md:text-[36px] mt-[30px] md:mt-[176px] text-[#DAC89F] font-bold"
      ></AnimatedContent>
      <AnimatedContent
        content="USAD is governed by its community through a decentralized autonomous
        organization (DAO), ensuring democratic <br /> decision-making and full
        transparency."
        animateClassName="animate__slideInUp"
        className="text-left md:text-center px-4 text-xs md:text-base mt-[12px] leading-[25px] text-[#fff]"
      ></AnimatedContent>

      <div className="md:hidden px-4 mt-[30px]">
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
            <div className="relative">
              <img src={work1} className="block  w-full" />
              <div className="absolute top-[62px] left-0 w-full h-full">
                <div className="text-[28px] text-center text-white leading-[36px] font-bold">
                  Full Transparency
                </div>
                <div className="text-center text-[#fff] text-base leading-6 mt-4">
                  Real-time reserve audits and public smart <br /> contract
                  code.
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={work2} className="block  w-full" />
              <div className="absolute top-[62px] left-0 w-full h-full">
                <div className="text-[28px] text-center text-white leading-[36px] font-bold">
                  Community Governance
                </div>
                <div className="text-center text-[#fff] text-base leading-6 mt-4">
                  Token holders vote on protocol upgrades and <br /> parameter
                  adjustments.
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={work3} className="block  w-full" />
              <div className="absolute top-[62px] left-0 w-full h-full">
                <div className="text-[28px] text-center text-white leading-[36px] font-bold">
                  Secure & Resilient
                </div>
                <div className="text-center text-[#fff] text-base leading-6 mt-4">
                  Multi-layer security architecture with <br /> regular audits.
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="max-w-[1440px] m-auto mt-[80px] gap-[30px] hidden md:flex items-end justify-center">
        <div className="w-[32%] hover:scale-[1.05] transition-all relative">
          <img src={work1} className="block  w-full" />
          <div className="absolute top-[62px] left-0 w-full h-full">
            <div className="text-[28px] text-center text-white leading-[36px] font-bold">
              Full Transparency
            </div>
            <div className="text-center text-[#fff] text-base leading-6 mt-4">
              Real-time reserve audits and public smart <br /> contract code.
            </div>
          </div>
        </div>
        <div className="w-[35%] hover:scale-[1.05] transition-all relative">
          <img src={work2} className="block  w-full" />
          <div className="absolute top-[62px] left-0 w-full h-full">
            <div className="text-[28px] text-center text-white leading-[36px] font-bold">
              Community Governance
            </div>
            <div className="text-center text-[#fff] text-base leading-6 mt-4">
              Token holders vote on protocol upgrades and <br /> parameter
              adjustments.
            </div>
          </div>
        </div>
        <div className="w-[32%] hover:scale-[1.05] transition-all relative">
          <img src={work3} className="block  w-full" />
          <div className="absolute top-[62px] left-0 w-full h-full">
            <div className="text-[28px] text-center text-white leading-[36px] font-bold">
              Secure & Resilient
            </div>
            <div className="text-center text-[#fff] text-base leading-6 mt-4">
              Multi-layer security architecture with <br /> regular audits.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
