import { ConfigProvider, Tabs } from 'antd';
import { useEffect, useState } from 'react';
import ProfileSecurity from './components/ProfileSecurity';
import ProfileTab1 from './components/ProfileTab1';

export default function Profile() {
  const [activeKey, setActiveKey] = useState(
    () => sessionStorage.getItem('activeKey') || '1',
  );
  const items = [
    {
      key: '1',
      label: 'Profile',
      children: <ProfileTab1 />,
    },
    {
      key: '2',
      label: 'Security',
      children: <ProfileSecurity setActiveKey={setActiveKey} />,
    },
  ];
  useEffect(() => {
    return () => {
      sessionStorage.removeItem('activeKey');
    };
  }, []);
  return (
    <>
      <div className=" pb-6 text-[24px] font-bold text-[#202B4B]">
        Account Setting
      </div>
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              /* 这里是你的组件 token */
              titleFontSize: 16,
            },
          },
        }}
      >
        <Tabs
          activeKey={activeKey}
          onChange={(key) => {
            sessionStorage.setItem('activeKey', key);
            setActiveKey(key);
          }}
          className="gbpc-tabs"
          items={items}
        />
      </ConfigProvider>
    </>
  );
}
