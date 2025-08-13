import right from '@/assets/images/right.png';
import what4 from '@/assets/images/what4.png';
import AnimatedContent from '@/components/Animate';
export default function What() {
  return (
    <div className="what pt-[129px] pb-[85px]">
      <AnimatedContent
        content="What is USAD?"
        className="text-[52px] text-center font-bold leading-[48px] text-[#dac89f]"
        animateClassName="animate__slideInDown"
      ></AnimatedContent>
      <AnimatedContent
        content="The next generation of decentralized, asset-backed stablecoins"
        className="text-base text-[#fff] mt-4 text-center"
        animateClassName="animate__slideInUp"
      ></AnimatedContent>
      <div className="max-w-[1440px] m-auto mt-[80px] grid grid-cols-3 gap-[32px]">
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
        className="mt-[169px] text-[32px] text-[#DAC89F] font-bold text-center"
        animateClassName="animate__slideInDown"
      ></AnimatedContent>
      <AnimatedContent
        content="USAD addresses the flaws of traditional stablecoins with a transparent,
        decentralized, and asset-backed approach. <br /> Unlike other
        stablecoins, USAD features a fixed supply of 94.49T,
        over-collateralization, and community governance through a DAO."
        className="text-[16px] mt-[30px] text-white text-center leading-[26px]"
        animateClassName="animate__slideInUp"
      ></AnimatedContent>
      <div className="max-w-[1440px] m-auto grid grid-cols-4 mt-[72px]">
        <div className="border-r border-r-[#FFFFFF14] h-[106px] flex  justify-start">
          <div>
            <img src={right} className="w-8 h-8 block" />
            <div className="text-[24px] leading-[48px] text-[#DAC89F] font-bold">
              Decentralized Governance
            </div>
            <div className="text-[16px] leading-[22px] font-[200] text-white">
              Community-driven decision making
            </div>
          </div>
        </div>
        <div className="border-r border-r-[#FFFFFF14]  h-[106px] flex  justify-center">
          <div>
            <img src={right} className="w-8 h-8 block" />
            <div className="text-[24px] leading-[48px] text-[#DAC89F] font-bold">
              Fixed Supply
            </div>
            <div className="text-[16px] leading-[22px] font-[200] text-white">
              94.49T total tokens
            </div>
          </div>
        </div>
        <div className="border-r border-r-[#FFFFFF14]  h-[106px] flex justify-center">
          <div>
            <img src={right} className="w-8 h-8 block" />
            <div className="text-[24px] leading-[48px] text-[#DAC89F] font-bold">
              Over-Collateralized
            </div>
            <div className="text-[16px] leading-[22px] font-[200] text-white">
              137% reserve ratio
            </div>
          </div>
        </div>
        <div className="h-[106px] flex  justify-end">
          <div>
            <img src={right} className="w-8 h-8 block" />
            <div className="text-[24px] leading-[48px] text-[#DAC89F] font-bold">
              On-Chain Transparency
            </div>
            <div className="text-[16px] leading-[22px] font-[200] text-white">
              Real-time auditability
            </div>
          </div>
        </div>
      </div>
      <img src={what4} className="m-auto mt-[95px] w-[1010px]" />
    </div>
  );
}
