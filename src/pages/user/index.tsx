import PageAnimate from '@/components/pageAnimate';
import {
  history,
  Outlet,
  useLocation,
  useModel,
  useSearchParams,
} from '@umijs/max';
import { useEffect, useState } from 'react';
export default function UserIndex() {
  const { user } = useModel('auth');
  const location = useLocation();
  const [_, setActiveKey] = useState(
    () => sessionStorage.getItem('activeKey') || '1',
  );
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
  return (
    <PageAnimate>
      <div className="bg-section ">
        <div className="footer_bg">
          <div className="max-w-[1440px] m-auto">
            <div className="pt-[56px] pb-[32px] text-[48px] font-bold">
              Profile
            </div>
            <div className="flex justify-between mb-[80px] rounded-[24px] overflow-hidden">
              <div className="w-[260px] min-h-[800px] py-[34px] bg-[#202B4B]">
                <div className="px-6 pb-6 text-[24px] font-bold text-white">
                  Setting
                </div>
                <div className="">
                  {[
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
                  ].map((item: any, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => item.onClick && item.onClick()}
                        className={` cursor-pointer h-[56px] transition-all duration-700 hover:bg-[rgba(255,255,255,0.2)] text-white flex items-center px-6 ${
                          item.checked ? 'bg-[rgba(255,255,255,0.2)]' : ''
                        }`}
                      >
                        {item.name}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex-1 px-8 py-[34px] relative bg-white">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageAnimate>
  );
}
