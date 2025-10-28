import { ReactComponent as Right } from '@/assets/images/right.svg';
export default function TimeLine({
  active,
  progress,
}: {
  active: number;
  progress: number;
}) {
  return (
    <div className="flex flex-col items-center justify-center  absolute left-[-77px] top-[37px]">
      <div
        className={`w-[30px] h-[30px] text-sm ${
          active === 1
            ? `!border !border-[#202b4b] text-white bg-[#202b4b]`
            : `!border !border-[#202b4b] text-[#BCBCBC] `
        } rounded-full text-center flex items-center justify-center`}
      >
        {active <= 1 ? 1 : <Right />}
      </div>
      <div className="relative">
        <div
          style={{ height: `${active === 1 ? progress : 100}%` }}
          className="w-[1px] absolute top-0 bg-[#202b4b]"
        ></div>
        <div className="w-[1px] h-[70px]  bg-[#F0F0F0]"></div>
      </div>
      <div
        className={`w-[30px] h-[30px] text-sm ${
          active === 2
            ? `!border !border-[#202b4b] text-white bg-[#202b4b]`
            : `!border ${
                active < 2 ? `!border-[#BCBCBC]` : `!border-[#202b4b]`
              } text-[#BCBCBC] `
        } rounded-full text-center flex items-center justify-center`}
      >
        {active <= 2 ? 2 : <Right />}
      </div>
      <div className="relative">
        <div
          style={{
            height: `${active < 2 ? 0 : active === 2 ? progress : 100}%`,
          }}
          className="w-[1px] absolute top-0 bg-[#202b4b]"
        ></div>
        <div className="w-[1px] h-[70px] bg-[#F0F0F0]"></div>
      </div>
      <div
        className={`w-[30px] h-[30px] text-sm ${
          active === 3
            ? `border border-[#202b4b] text-white bg-[#202b4b]`
            : `border ${
                active < 3 ? `!border-[#BCBCBC]` : `!border-[#202b4b]`
              } text-[#BCBCBC] `
        } rounded-full text-center flex items-center justify-center`}
      >
        {active <= 3 ? 3 : <Right />}
      </div>
    </div>
  );
}
