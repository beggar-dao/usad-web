import AnimatedContent from '@/components/Animate';
import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

export default function Banner() {
  const ref = useRef<HTMLDivElement>(null);
  const stars = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    top: Math.random() * 100, // 随机生成 0-100% 的 top 值
    left: Math.random() * 100, // 随机生成 0-100% 的 left 值
  }));
function getRecent12Days() {
  const days = [];
  const today = new Date();
  
  // 从今天开始，往前推11天，共12天
  for (let i = 0; i < 12; i++) {
    // 创建当前偏移量的日期对象
    const date = new Date();
    date.setTime(today.getTime() - i * 24 * 60 * 60 * 1000);
    
    // 获取年、月、日
    const year = date.getFullYear();
    // 月份从0开始，所以需要+1
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    // 格式化为YYYY-MM-DD并添加到数组
    days.push(`${year}-${month}-${day}`);
  }
  
  return days;
}
  
  useEffect(() => {
    var myChart = echarts.init(ref.current);
    const option = {
      grid: {
        left: 0, // 图表紧贴容器左边
        right: 0, // 图表紧贴容器右边
        top: '10%', // 可根据需要调整顶部边距
        bottom: '10%', // 可根据需要调整底部边距
        containLabel: true, // 确保标签不会被裁剪
      },
      tooltip: {
        trigger: 'axis', // 触发类型，'axis' 表示悬停在轴线上时触发
        formatter: (params: any) => {
          // 自定义显示内容
          const data = params[0];
          return `${data.axisValue}<br/> $${data.value.toFixed(4)}`;
        },
        axisPointer: {
          type: 'none', // 禁用刻度线
        },
        padding: 10,
        backgroundColor: 'rgba(10, 30, 10, 0.8)', // 背景颜色
        borderColor: '#FFD700', // 边框颜色
        borderWidth: 1, // 边框宽度
        textStyle: {
          color: '#fff', // 文本颜色
        },
      },
      xAxis: {
        show: false,
        type: 'category',
        data: getRecent12Days(),
        splitLine: {
          show: false, // 隐藏 y 轴网格线
        },
      },
      yAxis: {
        type: 'value',
        min: 0.9901,
        max: 1.0199,
        interval: 0.01,
        itemStyle: {
          color: '#FFFFFF73',
        },
        splitLine: {
          lineStyle: {
            color: '#DAC89F14',
          },
        },
        axisLabel: {
          formatter: (value: number) => {
            // 只显示 1, 1.01, 0.99
            console.log(value, '/');
            if (
              value === 1.0001 ||
              value === 1.0101 ||
              value === 1.0199 ||
              value === 0.9901
            ) {
              console.log(value);
              return value.toFixed(4);
            }
            return '';
          },
        },
      },
      series: [
        {
          data: [
            1.0101, 1.0199, 0.9901, 1.0051, 1.0051, 1.0051, 1.0051, 1.0051,
            1.0188, 1.0051, 1.0051, 1.0101,
          ],
          type: 'line',
          lineStyle: {
            color: '#DAC89F',
          },
          itemStyle: {
            color: 'white', // 设置连接点颜色为白色
          },
          emphasis: {
            itemStyle: {
              color: '#DAC89F', // 悬浮时连接点的颜色
            },
          },
          symbol: 'circle', // 设置连接点的形状为圆形
          symbolSize: 8,
        },
      ],
    };

    option && myChart.setOption(option);
  }, []);
  const createParticles = () => {
    const container = document.getElementById('particles');
    const container_width = container?.clientWidth;
    const container_height = container?.clientHeight;
    const particleCount = 100; // 粒子数量

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';

      // 随机粒子大小
      const size = Math.random() * 4 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // 随机颜色
      const colors = [
        'rgba(59, 130, 246, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(139, 92, 246, 0.8)',
      ];
      particle.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];

      // 随机位置
      const startX = Math.random() * container_width;
      const startY = Math.random() * container_height; // 从屏幕底部开始
      particle.style.position = `absolute`;
      particle.style.left = `${startX}px`;
      particle.style.top = `${startY}px`;

      // 随机动画属性
      const duration = Math.random() * 30 + 20; // 动画持续时间
      const floatX = (Math.random() - 0.5) * 200; // 水平偏移
      particle.style.animation = `float ${duration}s linear infinite`;
      particle.style.setProperty('--float-x', `${floatX}vw`);

      container.appendChild(particle);
    }
  };
  useEffect(() => {
    // 创建粒子
    createParticles();
  }, []);
  return (
    <div
      id="particles"
      className="home_banner pt-[30px] md:pt-[180px] pb-[40px] md:pb-[194px] relative"
    >
      {/* {stars.map((star) => (
        <div
          key={star.id}
          className="absolute w-[4px] h-[4px] rounded-full star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
          }}
        ></div>
      ))} */}
      <div className="px-4 md:max-w-[1440px] m-auto flex flex-col gap-6 md:flex-row items-center justify-between">
        <div className="w-full md:w-[43%]">
          <AnimatedContent
            content="The New Global"
            className="text-white font-bold text-[28px] md:text-[56px] md:leading-[77px]"
            animateClassName="animate__lightSpeedInRight"
          />
          <AnimatedContent
            content="Currency for Web4 Era"
            className="text-[#DAC89F]  font-bold text-[28px] md:text-[56px] md:leading-[77px]"
            animateClassName="animate__lightSpeedInLeft"
          ></AnimatedContent>
          <div className="mt-3 md:mt-[27px] text-base left-8 text-[#FFFFFFA6]">
            Fully decentralized, asset-backed stablecoin bringing transparency
            and financial inclusion to the global economy.
          </div>
          <div className="mt-8 md:mt-[110px] flex items-center">
            <div
              onClick={() => {
                const element = document.getElementById('whatUSAD');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-base cursor-pointer w-[180px] text-center text-[#060606] rounded-[48px] h-[48px] leading-[48px] bg-[#dac89f]"
            >
              Learn More
            </div>
            {/* <div className="text-base w-[180px] text-center ml-7 border border-[#FFFFFFA6] text-white rounded-[48px] h-[48px] leading-[48px]">
              Down Whitepaper
            </div> */}
          </div>
        </div>
        <div className="w-full md:w-[46%] md:hover:scale-[1.05] transition-all p-4 md:p-10 home_banner_bg">
          <div className="flex justify-between items-center mb-2 md:mb-[20px]">
            <div className="text-[20px] leading-4 md:leading-[32px] text-[#DAC89F] font-bold">
              USAD
            </div>
            <div className="bg-[#1FA00DF2] text-white w-[55px] leading-6 text-center h-[24px] rounded-full text-sm font-medium">
              live
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[#FFFFFF73] text-sm">Current Price</span>
              <span className="text-[#FFFFFF73] text-sm">24h Change</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-base md:text-[32px] text-[#DAC89F] font-bold">
                $1.0001
              </span>
              <span className="text-[#1E990E] text-base font-medium">
                +0.03%
              </span>
            </div>
          </div>

          <div ref={ref} className="h-32 md:h-64"></div>

          <div className="mt-2 md:mt-6 grid grid-cols-3 gap-4">
            <div className="bg-[#FFFFFF12] p-2 md:p-5 rounded-lg">
              <div className="text-[#FFFFFF73] text-xs md:text-sm mb-1">
                Market Cap
              </div>
              <div className="font-bold text-xs md:text-[16px] text-[#DAC89F]">
                94.4927 Trillion
              </div>
            </div>
            <div className="bg-[#FFFFFF12] p-2 md:p-5 rounded-lg">
              <div className="text-[#FFFFFF73] text-sm mb-1">Total Supply</div>
              <div className="font-bold text-xs md:text-[16px] text-[#DAC89F]">
                94.4927 Trillion
              </div>
            </div>
            <div className="bg-[#FFFFFF12] p-2 md:p-5 rounded-lg">
              <div className="text-[#FFFFFF73] text-xs md:text-sm mb-1">
                In Circulated
              </div>
              <div className="font-bold text-xs md:text-[16px] text-[#DAC89F]">
                19.8985 Trillion
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
