import { history } from '@umijs/max';

export default function Header() {
  const nav = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Mint',
      path: '/mint',
    },
    {
      name: 'History',
      path: '/history',
    },
  ];
  return (
    <div className="border-b border-b-[#FFFFFF24]">
      <div className="flex w-[1440px] m-auto h-[82px] items-center ">
        <div className="font-bold text-white text-[28px]">USAD</div>
        <div className="ml-[138px] flex items-center">
          {nav.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => history.push(item.path)}
                className="mr-[66px] cursor-pointer text-white font-[500]"
              >
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
