import { history, useLocation } from '@umijs/max';

export default function Header() {
  const location = useLocation();

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
        <div
          onClick={() => history.push('/')}
          className="font-bold cursor-pointer text-white text-[28px]"
        >
          US<span className="text-[#F2C94C]">AD</span>
        </div>
        <div className="ml-[138px] flex items-center">
          {nav.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => history.push(item.path)}
                className={`mr-[66px] cursor-pointer transition-all font-[500] ${
                  location.pathname === item.path
                    ? 'text-[#F2C94C]'
                    : 'text-white'
                }`}
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
