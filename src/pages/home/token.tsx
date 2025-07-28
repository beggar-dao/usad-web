import bi from '@/assets/images/bi.png';
import bg from '@/assets/images/home4.png';
import AnimatedContent from '@/components/Animate';
import AnimatedNumber from '@/components/AnimatedNumber';
export default function Token() {
  return (
    <div className="h-[920px] relative token-bg">
      <img
        src={bg}
        className="absolute left-0 bottom-[170px] z-0 block w-[1000px]"
      />
      <img
        src={bi}
        className="absolute bottom-[225px] block w-[292px] left-[360px] z-10"
      />
      <div className="flex w-[1440px] pt-[140px] m-auto justify-between">
        <div className="flex-1"></div>
        <div className="max-w-[655px] ">
          <AnimatedContent
            content="The Tok token"
            animateClassName="animate__slideInDown"
            className="text-[48px] font-bold text-[#DAC89F]"
          ></AnimatedContent>
          <AnimatedContent
            content="TOK is the governance token at the heart of World Liberty Financial.
            Token holders can participate in the World Liberty Financial
            Governance Platform to help guide the protocol through voting on
            proposals and strategic decisions."
            className="mt-[33px] leading-6"
            animateClassName="animate__slideInUp"
          ></AnimatedContent>
          <div className="mt-7 h-[48px] flex items-center justify-center text-center text-[#101010] max-w-[205px] rounded-[48px] bg-[#dac89f]">
            Learn About USAD
          </div>
          <div className="mt-[75px] flex flex-col">
            <div className="flex">
              <div className="min-w-[316px]">
                <div className="text-[36px] text-[#DAC89F] font-bold leading-[56px]">
                  <AnimatedNumber value={32.5} decimals={1} duration={1000} />%
                </div>
                <div className="text-base text-white font-[200]">
                  Community Growth
                </div>
              </div>
              <div className="min-w-[316px]">
                <div className="text-[36px] text-[#DAC89F] font-bold leading-[56px]">
                  <AnimatedNumber value={32.5} decimals={1} duration={1000} />%
                </div>
                <div className="text-base text-white font-[200]">
                  Community Growth
                </div>
              </div>
            </div>

            <div className="flex mt-[40px]">
              <div className="min-w-[316px]">
                <div className="text-[36px] text-[#DAC89F] font-bold leading-[56px]">
                  <AnimatedNumber value={32.5} decimals={1} duration={1000} />%
                </div>
                <div className="text-base text-white font-[200]">
                  Token SaLe
                </div>
              </div>
              <div className="min-w-[316px]">
                <div className="text-[36px] text-[#DAC89F] font-bold leading-[56px]">
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
