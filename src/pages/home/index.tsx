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
