import { cn } from '@/utils/cn';
import {
  history,
  Outlet,
  useLocation,
  useModel,
  useSearchParams,
} from '@umijs/max';
import { useEffect } from 'react';

export default function UserIndex() {
  const { user } = useModel('auth');
  const location = useLocation();
  const { init } = useModel('verify');
  const { logout } = useModel('auth');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    init();
    return () => {
      sessionStorage.removeItem('activeKey');
    };
  }, []);

  if (!user.id && !searchParams.get('code') && !searchParams.get('id')) {
    history.push('/Auth/Login');
    return;
  }

  const meunList = [
    {
      name: 'Account',
      url: '/user/profile',
      checked: location.pathname === '/user/profile',
      onClick: () => {
        history.push('/user/profile');
      },
    },
    {
      name: 'Wallet',
      url: '/user/Wallet',
      checked: location.pathname === '/user/wallet',
      onClick: () => {
        history.push('/user/wallet');
      },
    },
    {
      name: 'Verification',
      url: '/user/verification',
      checked: location.pathname.includes('/user/verification'),
      onClick: () => {
        history.push('/user/verification');
      },
    },
    {
      name: 'Payment',
      url: '/user/payment',
      onClick: () => {
        history.push('/user/payment');
      },
      checked: location.pathname.includes('/user/payment'),
    },
    {
      name: 'Address Whitelist',
      url: '/user/addressWhitelist',
      checked: location.pathname === '/user/addressWhitelist',
      onClick: () => {
        history.push('/user/addressWhitelist');
      },
    },
    {
      name: 'USAD',
      url: '/user/usad',
      checked: location.pathname.includes('/user/usad'),
      onClick: () => {
        history.push('/user/usad');
      },
    },
    {
      name: 'History',
      url: '/user/history',
      onClick: () => {
        history.push('/user/history');
      },
      checked: location.pathname === '/user/history',
    },
    {
      name: 'Logout',
      url: '/user/logout',
      checked: location.pathname === '/user/logout',
      onClick: () => {
        logout();
      },
    },
  ];

  return (
    <div className="bg-section">
      <div className="flex justify-between overflow-hidden">
        <div className="w-[256px] h-[calc(100vh-88px)] absolute top-[88px] py-[34px] bg-[#05060F] border-r-[1px] border-[#272831]">
          <div className="px-6 pb-6 text-xs font-bold text-[#969696]">
            MAIN MENU
          </div>
          <div className="px-6">
            {meunList.map((item: any, index) => {
              return (
                <div
                  key={index}
                  onClick={() => item?.onClick()}
                  className={cn(
                    'cursor-pointer w-[205px] h-[50px] border-box rounded-[8px] text-[#666] flex items-center px-6 hover:border-[1px] hover:border-[#505050] hover:black-gradient-bg1',
                    item.checked
                      ? 'border-[1px] border-[#505050] black-gradient-bg1'
                      : '',
                  )}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className="px-8 m-[34px] p-[32px] rounded border-[1px] border-[#505050] relative left-[256px] black-gradient-bg2 w-[calc(100%-320px)]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
