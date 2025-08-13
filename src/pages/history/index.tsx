import AnimatedContent from '@/components/Animate';
import PageAnimate from '@/components/pageAnimate';
import { ConfigProvider, Pagination } from 'antd';
import { useState } from 'react';
import { FiCopy, FiSearch } from 'react-icons/fi';

export default function History() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'text-green-400';
      case 'Pending':
        return 'text-yellow-400';
      case 'Failed':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };
  // Mock transaction data
  const allTransactions = [
    {
      id: '1',
      type: 'Mint',
      from: 'GBPC',
      to: 'USAD',
      fromAmount: '1,000',
      toAmount: '1,080',
      timestamp: '2025-01-15 14:30',
      status: 'Completed',
      txHash: '0x754c...2d96',
    },
    {
      id: '2',
      type: 'Mint',
      from: 'GBPC',
      to: 'USAD',
      fromAmount: '1,000',
      toAmount: '23123.232',
      timestamp: '2025-01-14 14:30',
      status: 'Completed',
      txHash: '0x754c...2d96',
    },
    {
      id: '3',
      type: 'Mint',
      from: 'GBPC',
      to: 'USAD',
      fromAmount: '1,000',
      toAmount: '1,080',
      timestamp: '2025-01-13 14:30',
      status: 'Completed',
      txHash: '0x754c...2d96',
    },
    {
      id: '4',
      type: 'Mint',
      from: 'GBPC',
      to: 'USAD',
      fromAmount: '1,000',
      toAmount: '1,080',
      timestamp: '2025-01-12 14:30',
      status: 'Completed',
      txHash: '0x754c...2d96',
    },
    {
      id: '5',
      type: 'Mint',
      from: 'GBPC',
      to: 'USAD',
      fromAmount: '1,000',
      toAmount: '23123.232',
      timestamp: '2025-01-11 14:30',
      status: 'Completed',
      txHash: '0x754c...2d96',
    },
    {
      id: '6',
      type: 'Mint',
      from: 'GBPC',
      to: 'USAD',
      fromAmount: '12,000',
      toAmount: '23123.2120',
      timestamp: '2025-01-15 14:30',
      status: 'Completed',
      txHash: '0x754c...2d96',
    },
    {
      id: '7',
      type: 'Mint',
      from: 'GBPC',
      to: 'USAD',
      fromAmount: '1,000',
      toAmount: '1,080',
      timestamp: '2025-01-09 14:30',
      status: 'Completed',
      txHash: '0x754c...2d96',
    },
    {
      id: '8',
      type: 'Mint',
      from: 'GBPC',
      to: 'USAD',
      fromAmount: '1,000',
      toAmount: '1,080',
      timestamp: '2025-01-08 14:30',
      status: 'Completed',
      txHash: '0x754c...2d96',
    },
    {
      id: '9',
      type: 'Mint',
      from: 'GBPC',
      to: 'USAD',
      fromAmount: '1,000',
      toAmount: '1,080',
      timestamp: '2025-01-07 14:30',
      status: 'Completed',
      txHash: '0x754c...2d96',
    },
  ];
  const itemRender = (_, type, originalElement) => {
    if (type === 'prev') {
      return <a>Previous</a>;
    }
    if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  };
  return (
    <PageAnimate>
      <div className="history relative overflow-hidden py-[75px]">
        <div className=" max-w-[1440px] mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <AnimatedContent
              content="Transaction History"
              className="text-[44px] font-bold text-[#DAC89F] mb-4"
              animateClassName="animate__slideInDown"
            ></AnimatedContent>
            <AnimatedContent
              content="View and track all your currency exchange transactions across
              different payment methods."
              className="text-base mb-[54px] text-[#FFFFFFA6]"
              animateClassName="animate__slideInUp"
            ></AnimatedContent>
          </div>

          {/* Main Content Container */}
          <div className="border border-[#FFFFFF14]  py-4 rounded-[16px]">
            {/* Filter Tabs and Search */}
            <div className="flex px-[40px] justify-between mb-[20px] gap-6">
              {/* Filter Tabs */}
              <div className="flex flex-1 gap-2">
                {[
                  { key: 'all', label: 'All Transactions' },
                  { key: 'pending', label: 'Pending' },
                  { key: 'completed', label: 'Completed' },
                  { key: 'failed', label: 'Failed' },
                ].map((filter) => (
                  <button
                    key={filter.key}
                    onClick={() => {
                      setActiveFilter(filter.key);
                    }}
                    className={`p-4 whitespace-nowrap text-[18px] font-bold ${
                      activeFilter === filter.key
                        ? ' text-[#DAC89F] border-b border-b-[#DAC89F]'
                        : 'text-[#FFFFFFA6] border-b border-b-[#000]'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative w-[245px] flex items-center">
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-[#FFFFFF1F] rounded-full pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/50"
                />
              </div>
            </div>

            {/* Table Header */}
            <div className="bg-[#22201A99] mb-[18px] px-[40px] h-[48px] leading-[48px] grid grid-cols-[1.5fr_1.5fr_1.5fr_1.5fr_1.5fr_1fr] text-sm font-bold text-[#FFFFFF66]">
              <div>Date</div>
              <div>Transaction Hash</div>
              <div>From</div>
              <div>To</div>
              <div>Amount</div>
              <div>Status</div>
            </div>

            {/* Transaction List */}
            <div className="">
              {allTransactions.map((tx) => (
                <div
                  key={tx.id}
                  className="grid grid-cols-[1.5fr_1.5fr_1.5fr_1.5fr_1.5fr_1fr] items-center hover:bg-[#22201A99] transition-all px-[40px] h-[56px] leading-[56px]"
                >
                  <div className="text-white text-sm">{tx.timestamp}</div>
                  <div className="flex items-center ">
                    <span className="text-sm font-mono">{tx.txHash}</span>
                    <FiCopy className="w-4 h-4 ml-4 cursor-pointer text-[#FFFFFF66]" />
                  </div>
                  <div className="text-white text-base flex items-center">
                    <div className="w-5 h-5 bg-[#1B4ED9] rounded-full mr-[10px]"></div>
                    {tx.from}
                  </div>
                  <div className="text-white text-base  flex items-center">
                    <div className="w-5 h-5 bg-[#54AD01] rounded-full mr-[10px]"></div>
                    {tx.to}
                  </div>
                  <div className="text-base text-white font-[200]">
                    {tx.toAmount}
                  </div>
                  <div>
                    <div
                      className={`text-xs inline-block h-8 leading-8 rounded-[4px] px-6 bg-[#5B7B5F1F] ${getStatusColor(
                        tx.status,
                      )}`}
                    >
                      {tx.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-[50px] flex items-center justify-center">
          <ConfigProvider
            theme={{
              components: {
                Pagination: {
                  itemActiveBg: '#000',
                  itemBg: 'transparent',
                  colorText: '#fff',
                  itemActiveColorDisabled: '#fff',
                  colorBorder: 'transparent',
                },
              },
            }}
          >
            <Pagination
              className="my-page select-none"
              total={50}
              itemRender={itemRender}
              showSizeChanger={false}
            />
          </ConfigProvider>
        </div>
      </div>
    </PageAnimate>
  );
}
