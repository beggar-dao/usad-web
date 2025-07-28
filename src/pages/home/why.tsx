import right from '@/assets/images/right.png';
import te1 from '@/assets/images/te1.png';
import te2 from '@/assets/images/te2.png';
import te3 from '@/assets/images/te3.png';
import te4 from '@/assets/images/te4.png';
import te5 from '@/assets/images/te5.png';
import AnimatedContent from '@/components/Animate';

export default function Why() {
  return (
    <div className="bg-[#0F0F0F] pt-[177px] pb-[142px]">
      <AnimatedContent
        content="Why Choose USAD?"
        className=" text-center text-[52px] leading-[48px] font-bold text-[#dac89f]"
        animateClassName="animate__slideInDown"
      ></AnimatedContent>
      <AnimatedContent
        content="The most advanced stablecoin solution for global finance"
        className="text-center text-[#FFFFFFE5] mt-4"
        animateClassName="animate__slideInUp"
      ></AnimatedContent>
      <div className="max-w-[1440px] m-auto mt-[80px] grid grid-cols-3 gap-[72px]">
        <div className="px-[40px] py-[60px] rounded-[24px] transition-all duration-300 hover:bg-[#1b1b1b]">
          <div className="text-[#DAC89F] font-bold leading-[36px]">
            Stability
          </div>
          <div className="mt-6 text-[16px] text-[#FFFFFFE5] leading-6 font-[200]">
            Maintains $1 peg through diversified asset backing and real-time
            reserve management.
          </div>
          <div className="flex items-center justify-center  w-[240px] h-[240px] m-auto mt-[54px]">
            <img src={te1} className="h-[207px] block" />
          </div>
        </div>
        <div className="px-[40px] py-[60px] rounded-[24px] transition-all duration-300 hover:bg-[#1b1b1b]">
          <div className="text-[#DAC89F] font-bold leading-[36px]">
            Transparency
          </div>
          <div className="mt-6 text-[16px] text-[#FFFFFFE5] leading-6 font-[200]">
            All reserves and transactions publicly verifiable on the blockchain.
          </div>
          <div className="flex items-center justify-center  w-[240px] h-[240px] m-auto mt-[54px]">
            <img src={te2} className="h-[196px] block" />
          </div>
        </div>

        <div className="px-[40px] py-[60px] rounded-[24px] transition-all duration-300 hover:bg-[#1b1b1b]">
          <div className="text-[#DAC89F] font-bold leading-[36px]">
            Security
          </div>
          <div className="mt-6 text-[16px] text-[#FFFFFFE5] leading-6 font-[200]">
            Built on TOK Chain with advanced cryptographic protections.
          </div>
          <div className="flex items-center justify-center  w-[240px] h-[240px] m-auto mt-[54px]">
            <img src={te3} className="h-[214px] block" />
          </div>
        </div>
        <div className="px-[40px] py-[60px] rounded-[24px] transition-all duration-300 hover:bg-[#1b1b1b]">
          <div className="text-[#DAC89F] font-bold leading-[36px]">
            Global Access
          </div>
          <div className="mt-6 text-[16px] text-[#FFFFFFE5] leading-6 font-[200]">
            Accessible to anyone with internet, regardless of location or
            financial status.
          </div>
          <div className="flex items-center justify-center  w-[240px] h-[240px] m-auto mt-[54px]">
            <img src={te2} className="h-[196px] block" />
          </div>
        </div>
        <div className="px-[40px] py-[60px] rounded-[24px] transition-all duration-300 hover:bg-[#1b1b1b]">
          <div className="text-[#DAC89F] font-bold leading-[36px]">
            Fast Transactions
          </div>
          <div className="mt-6 text-[16px] text-[#FFFFFFE5] leading-6 font-[200]">
            Lightning-fast settlement times optimized for global use.
          </div>
          <div className="flex items-center justify-center  w-[240px] h-[240px] m-auto mt-[54px]">
            <img src={te4} className="h-[226px] block" />
          </div>
        </div>
        <div className="px-[40px] py-[60px] rounded-[24px] transition-all duration-300 hover:bg-[#1b1b1b]">
          <div className="text-[#DAC89F] font-bold leading-[36px]">
            DAO Governance
          </div>
          <div className="mt-6 text-[16px] text-[#FFFFFFE5] leading-6 font-[200]">
            Community-driven decisions through decentralized voting.
          </div>
          <div className="flex items-center justify-center  w-[240px] h-[240px] m-auto mt-[54px]">
            <img src={te5} className="h-[168px] block" />
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] m-auto mt-[150px] gap-[60px] flex justify-between">
        <div className="p-[60px] h-[850px] why1">
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
                94.49T total tokens with no inflationary issuance.
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
        </div>
        <div className="p-[60px] h-[850px] why2">
          <AnimatedContent
            animateClassName="animate__bounce"
            className="text-[#DAC89F] mb-8 text-[32px] leading-[36px] font-bold"
            content="The USAD Advantage"
          ></AnimatedContent>
          <div className="flex mb-5 items-center gap-4">
            <img src={right} className="w-8 h-8 block" />
            <div>
              <div className="text-[20px] text-white leading-[30px]">
                Fixed Supply Model
              </div>
              <div className="text-sm mt-1 text-[#FFFFFF73] leading-[22px]">
                94.49T total tokens with no inflationary issuance.
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
        </div>
      </div>
    </div>
  );
}
