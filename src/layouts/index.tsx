import Footer from '@/components/footer';
import Header from '@/components/header';
import { Outlet } from '@umijs/max';

export default () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
