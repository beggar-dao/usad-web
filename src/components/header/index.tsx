import logo from '@/assets/images/logo.png';
import { history, useLocation } from '@umijs/max';

export default function Header() {
  const location = useLocation();

  const nav = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Circulate',
      path: '/mint',
    },
    {
      name: 'History',
      path: '/history',
    },
  ];
  return (
    <div className="border-b border-b-[#FFFFFF24] ">
      <div className="flex px-4  md:max-w-[1440px] m-auto h-[87px] items-center justify-between md:justify-normal ">
        <img
          onClick={() => history.push('/')}
          src={logo}
          className="h-[20px] md:h-[40px] cursor-pointer"
          alt=""
        />
        <div className="md:ml-[138px] flex items-center">
          {nav.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => history.push(item.path)}
                className={`${
                  index === nav.length - 1 ? '' : 'mr-6'
                } md:mr-[66px] cursor-pointer transition-all font-[500] ${
                  location.pathname === item.path
                    ? 'text-[#DAC89F]'
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
