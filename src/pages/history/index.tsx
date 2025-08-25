import btc_coin from '@/assets/images/btc_coin.png';
import eth_coin from '@/assets/images/eth_coin.png';
import gbpc_coin from '@/assets/images/gbpc_coin.png';
import usad_coin from '@/assets/images/usad_coin.png';
import usdt_coin from '@/assets/images/usdt_coin.png';
import AnimatedContent from '@/components/Animate';
import PageAnimate from '@/components/pageAnimate';
import { Helmet } from '@umijs/max';
import { ConfigProvider, Pagination } from 'antd';
import { useState } from 'react';
import { FiCopy, FiSearch } from 'react-icons/fi';

const coinIcon = {
  btc: btc_coin,
  eth: eth_coin,
  usdt: usdt_coin,
  gbpc: gbpc_coin,
  usad: usad_coin,
};
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

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);
  };

  const generateMockTransactions = (count: number) => {
    return Array.from({ length: count }, (_, index) => {
      // 生成随机交易哈希
      const generateRandomTxHash = () => {
        const randomHex = () => Math.floor(Math.random() * 16).toString(16);
        let hash = '';
        for (let i = 0; i < 32; i++) {
          hash += randomHex();
        }
        return `0x${hash.substring(0, 4)}...${hash.substring(28)}`;
      };
      const coin = ['btc', 'udst', 'gbpc', 'usdt', 'eth'];

      return {
        id: `${index + 1}`,
        type: 'Mint',
        from: coin[Math.floor(Math.random() * 5)],
        to: 'USAD',
        fromAmount: `${(Math.random() * 10000).toFixed(2)}`,
        toAmount: formatNumber(Math.random() * 10000),
        timestamp: new Date(
          Date.now() - Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1000),
        ).toLocaleString(),
        status: ['Completed', 'Pending', 'Failed'][
          Math.floor(Math.random() * 3)
        ],
        txHash: generateRandomTxHash(), // 使用生成的随机哈希
      };
    });
  };
  // Mock transaction data
  const allTransactions = generateMockTransactions(10);
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
      <Helmet>
        <title>USAD History on Pathenom | Supply, Records, and Timeline</title>
        <meta name='keywords" content="USAD, History' />
        <meta
          name="description"
          content="Track USAD history on Pathenom. See recent mints, supply changes, and records over time. Verify activity and use data exports to follow updates confidently."
        />
      </Helmet>
      <div className="history relative overflow-hidden py-4 md:py-[75px]">
        <div className="px-4 md:max-w-[1440px] mx-auto">
          {/* Header */}
          <div className="text-center hidden md:block mb-8">
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
          <div className="border overflow-hidden bg-[#FFFFFF14] border-[#FFFFFF14]  md:py-4 rounded-[16px]">
            {/* Filter Tabs and Search */}
            <div className="flex flex-col md:flex-row px-4 md:px-[40px] md:justify-between mb-[20px] gap-6">
              {/* Filter Tabs */}
              <div className="flex flex-nowrap overflow-auto md:flex-1 gap-2">
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
              <div className="relative flex w-full md:w-[245px] items-center">
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

            <div className="w-full overflow-auto">
              <div className="w-[1000px] md:w-auto">
                {/* Table Header */}
                <div className="bg-[#22201A99] whitespace-nowrap mb-[18px] px-[40px] h-[48px] leading-[48px] grid grid-cols-[1.5fr_1.5fr_1.5fr_1.5fr_1.5fr_1fr] text-sm font-bold text-[#FFFFFF66]">
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
                        <img
                          src={coinIcon[tx.from]}
                          className="w-5 h-5 bg-[#1B4ED9] rounded-full mr-[10px]"
                        />

                        {tx.from.toUpperCase()}
                      </div>
                      <div className="text-white text-base  flex items-center">
                        <img
                          src={usad_coin}
                          className="w-5 h-5 bg-[#54AD01] rounded-full mr-[10px]"
                        />
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
