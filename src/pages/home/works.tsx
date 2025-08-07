import layer from '@/assets/images/layer.png';
import reserve from '@/assets/images/reserve.png';
import Vector from '@/assets/images/Vector.png';
import work1 from '@/assets/images/work1.png';
import work2 from '@/assets/images/work2.png';
import work3 from '@/assets/images/work3.png';
import AnimatedContent from '@/components/Animate';
import AnimatedNumber from '@/components/AnimatedNumber';
export default function Works() {
  return (
    <div className="works pt-[95px] pb-[120px]">
      <AnimatedContent
        className="text-[32px] font-bold text-center text-[#DAC89F]"
        content="How USAD Works"
        animateClassName="animate__slideInDown"
      />
      <AnimatedContent
        content="USAD operates on two core layers, combining cutting-edge blockchain
        technology <br /> with real-world asset backing."
        animateClassName="animate__slideInUp"
        className="text-[14px] mt-3 text-white text-center"
      ></AnimatedContent>
      <div className="w-[1440px] m-auto grid grid-cols-2 gap-[56px] mt-[92px]">
        <div className="py-[82px] works_bg px-[56px] flex items-center gap-[50px]">
          <img className="block w-[150px]" src={layer} />
          <div className="flex-1">
            <AnimatedContent
              content="Protocol Layer"
              className="text-[28px] leading-[48px] text-[#DAC89F]"
              animateClassName="animate__bounceIn"
            ></AnimatedContent>
            <AnimatedContent
              animateClassName="animate__headShake"
              className="text-[14px]  text-white leading-5 font-[200]"
            >
              Natively deployed on TOK Chain with smart contracts managing
              minting, burning, and collateral tracking.
            </AnimatedContent>
          </div>
        </div>
        <div className="py-[82px] works_bg px-[56px] flex items-center gap-[50px]">
          <img className="block w-[132px]" src={reserve} />
          <div className="flex-1">
            <AnimatedContent
              animateClassName="animate__bounceIn"
              className="text-[28px] leading-[48px] text-[#DAC89F]"
            >
              Reserve Layer
            </AnimatedContent>
            <AnimatedContent
              animateClassName="animate__headShake"
              className="text-[14px]  text-white leading-5 font-[200]"
            >
              Comprised of tokenized real-world assets including treasuries,
              GBPC, and other fiat-backed instruments.
            </AnimatedContent>
          </div>
        </div>
      </div>
      <AnimatedContent
        animateClassName="animate__heartBeat"
        className="text-[36px] text-[#DAC89F] font-bold text-center mt-[200px]"
      >
        Technical Specifications
      </AnimatedContent>
      <div className="max-w-[1440px] m-auto grid grid-cols-5 mt-[72px]">
        <div className="border-r border-r-[#FFFFFF14] h-[88px] flex flex-col justify-center">
          <div className="text-[14px] leading-[22px] text-white">
            Total Supply
          </div>
          <div className="text-[28px] leading-[48px] text-[#DAC89F] font-bold">
            <AnimatedNumber value={94.49} duration={1000} />T
          </div>
        </div>
        <div className="border-r border-r-[#FFFFFF14] h-[88px] flex flex-col items-center justify-center">
          <div className="text-[14px] leading-[22px] text-white">
            Reserve Ratio
          </div>
          <div className="text-[28px] leading-[48px] text-[#DAC89F] font-bold">
            <AnimatedNumber value={137} duration={1000} />%
          </div>
        </div>
        <div className="border-r border-r-[#FFFFFF14] h-[88px] flex flex-col items-center justify-center">
          <div className="text-[14px] leading-[22px] text-white">
            Blockchain
          </div>
          <div className="text-[28px] leading-[48px] text-[#DAC89F] font-bold">
            TOK Chain
          </div>
        </div>
        <div className="border-r border-r-[#FFFFFF14] h-[88px] flex flex-col items-center justify-center">
          <div className="text-[14px] leading-[22px] text-white">
            Transaction Speed
          </div>
          <div className="text-[28px] leading-[48px] text-[#DAC89F] font-bold">
            3-5 seconds
          </div>
        </div>
        <div className="h-[88px] flex flex-col items-end justify-center">
          <div className="text-[14px] leading-[22px] text-white">
            Transaction Speed
          </div>
          <div className="text-[28px] leading-[48px] text-[#DAC89F] font-bold">
            <AnimatedNumber value={100} duration={1000} />%
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] m-auto mt-[66px] text-sm text-[#fff] leading-[22px]">
        Backing Assets
      </div>
      <div className="max-w-[1440px] m-auto mt-[22px] text-[#fff] grid grid-cols-4 gap-8">
        <div className="p-[33px] bg-[#0000001F] rounded-[16px] flex items-center justify-between">
          <div>
            <div className="text-white text-base">Tokenized Treasuries</div>
            <div className="text-[#DAC89F] text-[28px] font-bold">
              <AnimatedNumber value={45} duration={1000} />%
            </div>
          </div>
          <div className="h-[66px] w-[66px] rounded-full bg-[#46F6FF] flex items-center justify-center">
            <img src={Vector} className="block w-[22px]" />
          </div>
        </div>
        <div className="p-[33px] bg-[#0000001F] rounded-[16px] flex items-center justify-between">
          <div>
            <div className="text-white text-base">GBPC</div>
            <div className="text-[#DAC89F] text-[28px] font-bold">
              <AnimatedNumber value={30} duration={1000} />%
            </div>
          </div>
          <div className="h-[66px] w-[66px] rounded-full bg-[#F9B813] flex items-center justify-center">
            <img src={Vector} className="block w-[22px]" />
          </div>
        </div>
        <div className="p-[33px] bg-[#0000001F] rounded-[16px] flex items-center justify-between">
          <div>
            <div className="text-white text-base">TGBP</div>
            <div className="text-[#DAC89F] text-[28px] font-bold">
              <AnimatedNumber value={15} duration={1000} />%
            </div>
          </div>
          <div className="h-[66px] w-[66px] rounded-full bg-[#C93CAF] flex items-center justify-center">
            <img src={Vector} className="block w-[22px]" />
          </div>
        </div>
        <div className="p-[33px] bg-[#0000001F] rounded-[16px] flex items-center justify-between">
          <div>
            <div className="text-white text-base">Other Assets</div>
            <div className="text-[#DAC89F] text-[28px] font-bold">
              <AnimatedNumber value={10} duration={1000} />%
            </div>
          </div>
          <div className="h-[66px] w-[66px] rounded-full bg-[#1F1F1F] flex items-center justify-center">
            <img src={Vector} className="block w-[22px]" />
          </div>
        </div>
      </div>
      <AnimatedContent
        content="Transparency & Governance"
        animateClassName="animate__slideInUp"
        className="text-center text-[36px] mt-[176px] text-[#DAC89F] font-bold"
      ></AnimatedContent>
      <AnimatedContent
        content="USAD is governed by its community through a decentralized autonomous
        organization (DAO), ensuring democratic <br /> decision-making and full
        transparency."
        animateClassName="animate__slideInUp"
        className="text-center text-base mt-[12px] leading-[25px] text-[#fff]"
      ></AnimatedContent>
      <div className=" mt-[80px] gap-[30px] flex items-end justify-center">
        <img
          src={work1}
          className="block hover:scale-[1.05] transition-all w-[465px]"
        />
        <img
          src={work2}
          className="block hover:scale-[1.05] transition-all w-[500px]"
        />
        <img
          src={work3}
          className="block hover:scale-[1.05] transition-all w-[465px]"
        />
      </div>
    </div>
  );
}
