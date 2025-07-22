import home1 from '@/assets/images/home1.jpg';
import home2 from '@/assets/images/home2.jpg';
import home3 from '@/assets/images/home3.jpg';
import AnimatedContent from '@/components/Animate';
import { FiArrowRight } from 'react-icons/fi';
export default function News() {
  return (
    <div className="bg-[#D6CFC7] py-[120px]">
      <AnimatedContent
        content="News & Updates"
        animateClassName="animate__slideInDown"
        className="text-[48px] mb-[14px] font-bold text-center text-black"
      ></AnimatedContent>
      <AnimatedContent
        content="Latest developments and announcements from the USAD ecosystem"
        className="text-center text-[#584e4e] mb-[64px]"
        animateClassName="animate__slideInUp"
      ></AnimatedContent>
      <div className="w-[1440px] m-auto grid grid-cols-3 gap-[32px]">
        <div className="hover:scale-[1.05] transition-all rounded-lg overflow-hidden">
          <img src={home1} className="w-full h-[300px] object-cover" alt="" />
          <div className="px-[33px] py-[36px] bg-[#fff]">
            <div className="text-[12px] text-[#737373] mb-[22px]">
              June 15, 2025
            </div>
            <div className="text-[18px] text-[#000] mb-[15px]">
              USAD Announces Strategic Partnership with Global Payment Processor
            </div>
            <div className="text-[14px] text-[#737373] leading-6 mb-[30px]">
              USAD has joined forces with leading payment processor to enable
              seamless integration of USAD into their global network.
            </div>
            <div className="text-[#DAC89F] text-[12px] flex items-center">
              Read More <FiArrowRight className="ml-2 mt-[2px]" />
            </div>
          </div>
        </div>
        <div className="hover:scale-[1.05] transition-all rounded-lg overflow-hidden">
          <img src={home2} className="w-full h-[300px] object-cover" alt="" />
          <div className="px-[33px] py-[36px] bg-[#fff]">
            <div className="text-[12px] text-[#737373] mb-[22px]">
              June 15, 2025
            </div>
            <div className="text-[18px] text-[#000] mb-[15px]">
              USAD Announces Strategic Partnership with Global Payment Processor
            </div>
            <div className="text-[14px] text-[#737373] leading-6 mb-[30px]">
              USAD has joined forces with leading payment processor to enable
              seamless integration of USAD into their global network.
            </div>
            <div className="text-[#DAC89F] text-[12px] flex items-center">
              Read More <FiArrowRight className="ml-2 mt-[2px]" />
            </div>
          </div>
        </div>
        <div className="hover:scale-[1.05] transition-all rounded-lg overflow-hidden">
          <img src={home3} className="w-full h-[300px] object-cover" alt="" />
          <div className="px-[33px] py-[36px] bg-[#fff]">
            <div className="text-[12px] text-[#737373] mb-[22px]">
              June 15, 2025
            </div>
            <div className="text-[18px] text-[#000] mb-[15px]">
              USAD Announces Strategic Partnership with Global Payment Processor
            </div>
            <div className="text-[14px] text-[#737373] leading-6 mb-[30px]">
              USAD has joined forces with leading payment processor to enable
              seamless integration of USAD into their global network.
            </div>
            <div className="text-[#DAC89F] text-[12px] flex items-center">
              Read More <FiArrowRight className="ml-2 mt-[2px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
