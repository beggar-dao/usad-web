import home1 from '@/assets/images/home1.jpg';
import home2 from '@/assets/images/home2.jpg';
import home3 from '@/assets/images/home3.jpg';
import AnimatedContent from '@/components/Animate';
import { FiArrowRight } from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
export default function News() {
  return (
    <div id="news" className="bg-[#D6CFC7] py-[60px] md:py-[120px]">
      <AnimatedContent
        content="News & Updates"
        animateClassName="animate__slideInDown"
        className="text-[24px] md:text-[48px] mb-[14px] font-bold text-center text-black"
      ></AnimatedContent>
      <AnimatedContent
        content="Latest developments and announcements from the USAD ecosystem"
        className="text-center px-4 md:px-0 text-[#584e4e] mb-[64px]"
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
            <div className="hover:scale-[1.05] transition-all rounded-lg overflow-hidden">
              <img
                src={home1}
                className="w-full h-[300px] object-cover"
                alt=""
              />
              <div className="px-[33px] py-[36px] bg-[#fff]">
                <div className="text-[12px] text-[#737373] mb-[22px]">
                  Jul 23, 2025
                </div>
                <div className="text-[18px] line-clamp-2 text-[#000] mb-[15px]">
                  The Collapse of Old Web3
                </div>
                <div className="text-[14px] line-clamp-2 text-[#737373] leading-6 mb-[30px]">
                  For over a decade, Web3 has promised to disrupt traditional
                  finance. But instead of creating a new monetary order, it
                  replicated the failures of the old one, just with different
                  logos, new coins, and more fragile assumptions.
                </div>
                <div
                  onClick={() => {
                    window.open(
                      'https://medium.com/@web4-usad/part-i-the-collapse-of-old-web3-6a3519fe7241',
                      '_blank',
                    );
                  }}
                  className="text-[#DAC89F] cursor-pointer text-[12px] flex items-center"
                >
                  Read More <FiArrowRight className="ml-2 mt-[2px]" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hover:scale-[1.05] transition-all rounded-lg overflow-hidden">
              <img
                src={home2}
                className="w-full h-[300px] object-cover"
                alt=""
              />
              <div className="px-[33px] py-[36px] bg-[#fff]">
                <div className="text-[12px] text-[#737373] mb-[22px]">
                  Jul 30, 2025
                </div>
                <div className="text-[18px] line-clamp-2 text-[#000] mb-[15px]">
                  USAD and Web4 — The Birth of a Monetary Ideology
                </div>
                <div className="text-[14px] line-clamp-2 text-[#737373] leading-6 mb-[30px]">
                  The collapse of old Web3 is not just a matter of code or
                  collateral. It is the death of an ideology: one that tried to
                  replicate the fiat system with different names, wallets, and
                  wrappers — but never questioned its core assumptions.
                </div>
                <div
                  onClick={() => {
                    window.open(
                      'https://medium.com/@web4-usad/part-ii-usad-and-web4-the-birth-of-a-monetary-ideology-30th-july-19da20e93a42',
                      '_blank',
                    );
                  }}
                  className="text-[#DAC89F] cursor-pointer text-[12px] flex items-center"
                >
                  Read More <FiArrowRight className="ml-2 mt-[2px]" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hover:scale-[1.05] transition-all rounded-lg overflow-hidden">
              <img
                src={home3}
                className="w-full h-[300px] object-cover"
                alt=""
              />
              <div className="px-[33px] py-[36px] bg-[#fff]">
                <div className="text-[12px] text-[#737373] mb-[22px]">
                  Aug 5, 2025
                </div>
                <div className="text-[18px] line-clamp-1 text-[#000] mb-[15px]">
                  The Web4 Blueprint — USAD’s Architecture for a Post-Fiat World
                </div>
                <div className="text-[14px] line-clamp-2 text-[#737373] leading-6 mb-[30px]">
                  The collapse of old Web3 is not simply a failure of belief,
                  but a failure of system design. What comes after must not only
                  offer a new vision, but a new architecture — one capable of
                  replacing fiat logic, institutional privilege, and unstable
                  monetary assumptions with verifiable, deflationary, and
                  decentralized order.
                </div>
                <div
                  onClick={() => {
                    window.open(
                      'https://medium.com/@web4-usad/part-iii-the-web4-blueprint-usads-architecture-for-a-post-fiat-world-f12d5d595b28',
                      '_blank',
                    );
                  }}
                  className="text-[#DAC89F] text-[12px] flex items-center"
                >
                  Read More <FiArrowRight className="ml-2 mt-[2px]" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="max-w-[1440px] m-auto hidden md:grid grid-cols-3 gap-[32px]">
        <div className="hover:scale-[1.05] transition-all rounded-lg overflow-hidden">
          <img src={home1} className="w-full h-[300px] object-cover" alt="" />
          <div className="px-[33px] py-[36px] bg-[#fff]">
            <div className="text-[12px] text-[#737373] mb-[22px]">
              Jul 23, 2025
            </div>
            <div className="text-[18px] line-clamp-1 text-[#000] mb-[15px]">
              The Collapse of Old Web3
            </div>
            <div className="text-[14px] line-clamp-2 text-[#737373] leading-6 mb-[30px]">
              For over a decade, Web3 has promised to disrupt traditional
              finance. But instead of creating a new monetary order, it
              replicated the failures of the old one, just with different logos,
              new coins, and more fragile assumptions.
            </div>
            <div
              onClick={() => {
                window.open(
                  'https://medium.com/@web4-usad/part-i-the-collapse-of-old-web3-6a3519fe7241',
                  '_blank',
                );
              }}
              className=" cursor-pointer text-[#DAC89F] text-[12px] flex items-center"
            >
              Read More <FiArrowRight className="ml-2 mt-[2px]" />
            </div>
          </div>
        </div>
        <div className="hover:scale-[1.05] transition-all rounded-lg overflow-hidden">
          <img src={home2} className="w-full h-[300px] object-cover" alt="" />
          <div className="px-[33px] py-[36px] bg-[#fff]">
            <div className="text-[12px] text-[#737373] mb-[22px]">
              Jul 30, 2025
            </div>
            <div className="text-[18px] line-clamp-1 text-[#000] mb-[15px]">
              USAD and Web4 — The Birth of a Monetary Ideology
            </div>
            <div className="text-[14px] line-clamp-2 text-[#737373] leading-6 mb-[30px]">
              The collapse of old Web3 is not just a matter of code or
              collateral. It is the death of an ideology: one that tried to
              replicate the fiat system with different names, wallets, and
              wrappers — but never questioned its core assumptions.
            </div>
            <div
              onClick={() => {
                window.open(
                  'https://medium.com/@web4-usad/part-ii-usad-and-web4-the-birth-of-a-monetary-ideology-30th-july-19da20e93a42',
                  '_blank',
                );
              }}
              className="cursor-pointer text-[#DAC89F] text-[12px] flex items-center"
            >
              Read More <FiArrowRight className="ml-2 mt-[2px]" />
            </div>
          </div>
        </div>
        <div className="hover:scale-[1.05] transition-all rounded-lg overflow-hidden">
          <img src={home3} className="w-full h-[300px] object-cover" alt="" />
          <div className="px-[33px] py-[36px] bg-[#fff]">
            <div className="text-[12px] text-[#737373] mb-[22px]">
              Aug 5, 2025
            </div>
            <div className="text-[18px] line-clamp-1 text-[#000] mb-[15px]">
              The Web4 Blueprint — USAD’s Architecture for a Post-Fiat World
            </div>
            <div className="text-[14px] line-clamp-2 text-[#737373] leading-6 mb-[30px]">
              The collapse of old Web3 is not simply a failure of belief, but a
              failure of system design. What comes after must not only offer a
              new vision, but a new architecture — one capable of replacing fiat
              logic, institutional privilege, and unstable monetary assumptions
              with verifiable, deflationary, and decentralized order.
            </div>
            <div
              onClick={() => {
                window.open(
                  'https://medium.com/@web4-usad/part-iii-the-web4-blueprint-usads-architecture-for-a-post-fiat-world-f12d5d595b28',
                  '_blank',
                );
              }}
              className="text-[#DAC89F] cursor-pointer text-[12px] flex items-center"
            >
              Read More <FiArrowRight className="ml-2 mt-[2px]" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="text-center text-[24px] md:text-[48px] font-bold text-black mt-[89px] md:mt-[198px]">
        Join Our Community{' '}
      </div>
      <div className="text-center w-full md:w-[670px] m-auto mt-5 leading-[24px] text-[#584E4E] text-base font-normal">
        World Liberty Financial invites you to become part of the future of
        finance. Join our community to participate in protocol governance and
        help shape the future of stablecoin and decentralized finance projects.
      </div>
      <div className="flex items-center justify-center">
        <div className="text-white hover:opacity-80 transition-all text-base text-center py-3 px-[52px] bg-[#000] rounded-[48px] inline-block m-auto mt-[48px]">
          Join Discord
        </div>
      </div> */}
    </div>
  );
}
