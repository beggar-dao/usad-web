import PageAnimate from '@/components/pageAnimate';
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
      name: 'GBPC',
      url: '/user/gbpc',
      checked: location.pathname.includes('/user/gbpc'),
      onClick: () => {
        history.push('/user/gbpc');
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
  ]

  return (
    <PageAnimate>
      <div className="bg-section ">
        <div className="footer_bg">
          <div className="flex justify-between mb-[80px] overflow-hidden">
            <div className="w-[256px] min-h-[800px] py-[34px] bg-[#05060F] border-r-[1px] border-[#272831]">
              <div className="px-6 pb-6 text-xs font-bold text-[#969696]">
                MAIN MENU
              </div>
              <div className="px-6">
                {meunList.map((item: any, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => item?.onClick()}
                      className={cn("cursor-pointer h-[50px] transition-all duration-700 rounded-[8px] text-[#666] flex items-center px-6", item.checked ? 'border-[1px] border-[#505050]' : '')}
                      style={{ background: item.checked ? 'linear-gradient(91.51deg, #212121 0%, #121314 100%)' : '' }}
                    >
                      {item.name}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex-1 px-8 m-[34px] p-[32px] rounded border-[1px] border-[#505050] relative" style={{ background: 'linear-gradient(182.38deg, #212121 2.38%, #000000 14.39%)' }}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </PageAnimate>
  );
}
