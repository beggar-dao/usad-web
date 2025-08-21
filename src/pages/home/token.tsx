import bi from '@/assets/images/bi.png';
import bg from '@/assets/images/home4.png';
import AnimatedContent from '@/components/Animate';
import AnimatedNumber from '@/components/AnimatedNumber';
export default function Token() {
  return (
    <div className="h-[800px] md:h-[920px] relative token-bg">
      <img
        src={bg}
        className="absolute left-0 bottom-[85px] md:bottom-[170px] z-0 block md:w-[1000px]"
      />
      <img
        src={bi}
        className="absolute bottom-[113px] md:bottom-[225px] block w-[146px] md:w-[292px] left-[50%] ml-[-73px] md:left-[360px] z-10"
      />
      <div className="flex px-4 md:max-w-[1440px] pt-[30px] md:pt-[140px] m-auto justify-between">
        <div className="flex-1 hidden md:block"></div>
        <div className="w-full md:max-w-[45%] relative z-50 ">
          <AnimatedContent
            content="The Tok token"
            animateClassName="animate__slideInDown"
            className="text-[20px] md:text-[48px] font-bold text-[#DAC89F]"
          ></AnimatedContent>
          <AnimatedContent
            content="TOK is the governance token at the heart of World Liberty Financial.
            Token holders can participate in the World Liberty Financial
            Governance Platform to help guide the protocol through voting on
            proposals and strategic decisions."
            className="mt-3 text-sm md:text-base md:mt-[33px] leading-6"
            animateClassName="animate__slideInUp"
          ></AnimatedContent>
          <div className="mt-7 h-[48px] flex items-center justify-center text-center text-[#101010] max-w-[205px] rounded-[48px] bg-[#dac89f]">
            Learn About USAD
          </div>
          <div className="w-full mt-[30px] md:mt-[75px] flex flex-col">
            <div className="flex">
              <div className="w-full md:min-w-[316px]">
                <div className="text-[18px] md:text-[36px] text-[#DAC89F] font-bold leading-[28px] md:leading-[56px]">
                  <AnimatedNumber value={32.5} decimals={1} duration={1000} />%
                </div>
                <div className="text-base text-white font-[200]">
                  Community Growth
                </div>
              </div>
              <div className="w-full md:min-w-[316px]">
                <div className="text-[18px] md:text-[36px] text-[#DAC89F] font-bold leading-7 md:leading-[56px]">
                  <AnimatedNumber value={32.5} decimals={1} duration={1000} />%
                </div>
                <div className="text-base text-white font-[200]">
                  Community Growth
                </div>
              </div>
            </div>

            <div className="flex mt-5 md:mt-[40px]">
              <div className="w-full md:min-w-[316px]">
                <div className="text-[18px] md:text-[36px] text-[#DAC89F] font-bold leading-7 md:leading-[56px]">
                  <AnimatedNumber value={32.5} decimals={1} duration={1000} />%
                </div>
                <div className="text-base text-white font-[200]">
                  Token SaLe
                </div>
              </div>
              <div className="w-full md:min-w-[316px]">
                <div className="text-[18px] md:text-[36px] text-[#DAC89F] font-bold leading-7 md:leading-[56px]">
                  <AnimatedNumber value={32.5} decimals={1} duration={1000} />%
                </div>
                <div className="text-base text-white font-[200]">
                  Initial Supporters
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
