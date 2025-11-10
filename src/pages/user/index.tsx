import {
  AccountIcon,
  AddressIcon,
  LogoutIcon,
  PaymentIcon,
  TimeIcon,
  UsadIcon,
  VerificationIcon,
  WalletIcon,
} from '@/components/Icons';
import { cn } from '@/utils/cn';
import {
  history,
  Outlet,
  useLocation,
  useModel,
  useSearchParams,
} from '@umijs/max';
import { useEffect } from 'react';

interface MenuItem {
  name: string;
  url: string;
  icon?: React.ReactNode;
  checked: boolean;
  onClick: () => void;
}

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

  const meunList: MenuItem[] = [
    {
      name: 'Account',
      url: '/user/profile',
      icon: <AccountIcon isActive={location.pathname === '/user/profile'} />,
      checked: location.pathname === '/user/profile',
      onClick: () => {
        history.push('/user/profile');
      },
    },
    {
      name: 'Wallet',
      url: '/user/Wallet',
      icon: <WalletIcon isActive={location.pathname === '/user/wallet'} />,
      checked: location.pathname === '/user/wallet',
      onClick: () => {
        history.push('/user/wallet');
      },
    },
    {
      name: 'Verification',
      url: '/user/verification',
      icon: (
        <VerificationIcon
          isActive={location.pathname === '/user/verification'}
        />
      ),
      checked: location.pathname.includes('/user/verification'),
      onClick: () => {
        history.push('/user/verification');
      },
    },
    {
      name: 'Payment',
      url: '/user/payment',
      icon: <PaymentIcon isActive={location.pathname === '/user/payment'} />,
      onClick: () => {
        history.push('/user/payment');
      },
      checked: location.pathname.includes('/user/payment'),
    },
    {
      name: 'Address Whitelist',
      url: '/user/addressWhitelist',
      icon: (
        <AddressIcon
          isActive={location.pathname === '/user/addressWhitelist'}
        />
      ),
      checked: location.pathname === '/user/addressWhitelist',
      onClick: () => {
        history.push('/user/addressWhitelist');
      },
    },
    {
      name: 'USAD',
      url: '/user/usad',
      icon: <UsadIcon isActive={location.pathname === '/user/usad'} />,
      checked: location.pathname.includes('/user/usad'),
      onClick: () => {
        history.push('/user/usad');
      },
    },
    {
      name: 'History',
      url: '/user/history',
      icon: <TimeIcon isActive={location.pathname === '/user/history'} />,
      onClick: () => {
        history.push('/user/history');
      },
      checked: location.pathname === '/user/history',
    },
    {
      name: 'Logout',
      url: '/user/logout',
      icon: <LogoutIcon isActive={location.pathname === '/user/logout'} />,
      checked: location.pathname === '/user/logout',
      onClick: () => {
        logout();
      },
    },
  ];

  return (
    <>
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
                  'cursor-pointer w-[205px] h-[50px] border-box rounded-[8px] my-1 text-[#666] flex items-center gap-3 px-5 border border-transparent hover:border hover:border-[#505050] hover:black-gradient-bg1',
                  item.checked
                    ? 'border-[1px] border-[#505050] black-gradient-bg1'
                    : '',
                )}
              >
                {item.icon}
                <span className={item.checked ? 'gold-gradient-text' : ''}>
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="m-[34px] relative rounded left-[256px] black-gradient-bg2 w-[calc(100%-320px)]">
        <div className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-pink-500 to-blue-500 -z-10" />
        <div className="p-8 m-[2px]">
          <Outlet />
        </div>
      </div>
    </>
  );
}
