'use client';

import AnimatedContent from '@/components/Animate';
import { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

const faqData = [
  {
    question: 'What’s USAD?',
    answer:
      'USAD is a decentralized, asset-backed stablecoin built on TOK Chain. It is designed to maintain a stable value relative to the US dollar through a combination of over-collateralization and transparent governance.',
  },
  {
    question: 'How is USAD different from other stablecoins?',
    answer:
      'USAD features a fixed total supply, diversified asset backing, and decentralized governance through a DAO. This makes it more transparent, resilient, and community-driven compared to traditional stablecoins.',
  },
  {
    question: 'How is the value of USAD maintained?',
    answer:
      'USAD maintains its $1 peg through over-collateralization with a diversified basket of assets and an automated system that adjusts supply based on market demand.',
  },
  {
    question: 'Can I redeem USAD for fiat currency?',
    answer:
      'USAD can be redeemed for its underlying collateral assets through authorized partners. The protocol ensures that each USAD token is always backed by at least $1 worth of assets.',
  },
  {
    question: 'How can I participate in the USAD ecosystem?',
    answer:
      'You can participate by holding USAD tokens, providing liquidity, staking for rewards, or participating in governance votes through the DAO. Visit our documentation for detailed guides on getting started.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-[140px] bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-[60px]">
          <AnimatedContent
            content="FAQ"
            animateClassName="animate__slideInDown"
            className="text-4xl md:text-[52px] text-[#DAC89F] font-bold mb-4"
          />

          <AnimatedContent
            content="Answers to common questions about USAD"
            className="text-white text-lg "
            animateClassName="animate__slideInUp"
          ></AnimatedContent>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4">
              <div
                className="bg-[#FFFFFF1A]  rounded-lg p-6 cursor-pointer hover:bg-[#FFFFFF2A] transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-base  text-white">{faq.question}</h3>
                  <div className="text-yellow-400 ml-4">
                    {openIndex === index ? (
                      <FiMinus className="text-xl" />
                    ) : (
                      <FiPlus className="text-xl" />
                    )}
                  </div>
                </div>
                {openIndex === index && (
                  <div className="mt-4 text-white leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
