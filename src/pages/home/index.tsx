import PageAnimate from '@/components/pageAnimate';
import { Helmet } from '@umijs/max';
import Banner from './Banner';
import { FAQ } from './FAQ';
import News from './news';
import Technology from './technology';
import What from './what';
import Why from './why';
import Works from './works';
export default function Home() {
  return (
    <PageAnimate>
      <Helmet>
        <title>USAD by Pathenom</title>
        <meta name="keywords" content="USAD, USAD by Pathenom" />
        <meta
          name="description"
          content="Pathenom is the home of USAD. Learn how to mint USAD, redeem GBPC, and view verified history. Start fast with clear steps, fees, and safety notes for new users."
        />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://pathenom.com/#organization",
                "name": "Pathenom",
                "url": "https://pathenom.com/"
              },
              {
                "@type": "WebSite",
                "@id": "https://pathenom.com/#website",
                "url": "https://pathenom.com/",
                "name": "Pathenom",
                "inLanguage": "en"
              },
              {
                "@type": "WebPage",
                "@id": "https://pathenom.com/#webpage",
                "url": "https://pathenom.com/",
                "name": "USAD on Pathenom | Get USAD, Redeem GBPC, History",
                "description": "The new global currency for the Web4 era. USAD is a decentralized, asset backed stablecoin on TOK Chain with transparent governance.",
                "isPartOf": { "@id": "https://pathenom.com/#website" },
                "inLanguage": "en"
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://pathenom.com/#breadcrumb",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pathenom.com/" }
                ]
              },
              {
                "@type": "FAQPage",
                "@id": "https://pathenom.com/#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is USAD?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "USAD is a decentralized, asset backed stablecoin built on TOK Chain. It is designed to keep a stable value near one US dollar through over collateralization and transparent governance."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How is USAD different from other stablecoins?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "USAD uses a fixed total supply, diversified asset backing, and decentralized governance through a DAO. This makes it transparent, resilient, and community driven compared to traditional stablecoins."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How is the value of USAD maintained?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "USAD targets one dollar by using over collateralization with a basket of assets and an automated system that can adjust supply based on market demand."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I redeem USAD for fiat currency?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "USAD can be redeemed for its collateral assets through authorized partners. The protocol is designed so each USAD token is backed by at least one dollar worth of assets."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How can I participate in the USAD ecosystem?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You can hold USAD, provide liquidity, stake for rewards, or join governance votes through the DAO. See the documentation for step by step guides."
                    }
                  }
                ]
              }
            ]
          }`}
        </script>
      </Helmet>
      <Banner />
      <What />
      <Why />
      <Technology />
      <Works />
      {/* <Token /> */}
      <FAQ />
      <News />
    </PageAnimate>
  );
}
