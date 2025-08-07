import AnimatedContent from '@/components/Animate';
import technology1 from '../../assets/images/technology1.png';
export default function technology() {
  return (
    <div className="technology pt-[120px]">
      <AnimatedContent
        animateClassName="animate__slideInDown"
        content="Technology"
        className=" leading-[48px] text-center text-[#362e2b] text-[52px] font-bold"
      ></AnimatedContent>
      <AnimatedContent
        content="The innovative architecture behind USAD"
        animateClassName="animate__slideInUp"
        className="text-center text-base text-[#141414] mt-[22px]"
      ></AnimatedContent>
      <img className="block w-[1000px] m-auto mt-[30px]" src={technology1} />
    </div>
  );
}
