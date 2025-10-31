import logo from '@/assets/images/logo.png';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { history, NavLink, useLocation } from '@umijs/max';
import { useModel } from '@umijs/max';
import { Avatar, Button, Dropdown } from 'antd';

export default function Header() {
  const location = useLocation();
  const { logout, user } = useModel('auth');

  const nav = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Circulate',
      path: '/mint',
    },
  ];

  /**
   * Handle user logout
   */
  const handleLogout = async () => {
    try {
      await logout();
      // Redirect will be handled by the auth model
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleProfile = () => {
    // Handle profile click
    history.push('/user/profile');
  };

  /**
   * User dropdown menu items
   */
  const userMenuItems = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Profile',
      onClick: handleProfile,
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Logout',
      onClick: handleLogout,
    },
  ];

  const MobileHeaderRight = () => {
    if (user.tokenInfo?.tokenValue) {
      return (
        <Dropdown
          menu={{ items: userMenuItems }}
          placement="bottomRight"
          trigger={['click']}
          className="my-dropdown"
        >
          <Button
            type="text"
            className="d-flex align-items-center gap-2"
          >
            <Avatar size="small" icon={<UserOutlined />} />
            <span className="text-white">
              {user.email}
            </span>
          </Button>
        </Dropdown>
      );
    } else {
      return (
        <>
          <NavLink
            to="/Auth/Login"
            className="py-[10px] mx-4 bg-[transparent]"
          >
            <span className="font-[500]">Log in</span>
          </NavLink>
          <NavLink
            to="/Auth/CreateAccount"
            className="py-[10px] mx-4"
          >
            <span className="font-[500]">Sign Up</span>
          </NavLink>
        </>
      );
    }
  };

  return (
    <div className="border-b border-b-[#FFFFFF24]">
      <div className="container mx-auto w-full flex items-center gap-4">
        <div className="flex flex-1 h-[87px] items-center">
          <img
            onClick={() => history.push('/')}
            src={logo}
            className="h-[20px] md:h-[32px] cursor-pointer"
            alt=""
          />
          <div className="md:ml-[138px] flex items-center">
            {nav.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => history.push(item.path)}
                  className={`${index === nav.length - 1 ? '' : 'mr-6'
                    } md:mr-[66px] cursor-pointer transition-all font-[500] ${location.pathname === item.path
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
        <div className='flex justify-content-end'>
          <MobileHeaderRight />
        </div>
      </div>
    </div>
  );
}
