import PageAnimate from '@/components/pageAnimate';
import Banner from './Banner';
import { FAQ } from './FAQ';
import News from './news';
import Technology from './technology';
import Token from './token';
import What from './what';
import Why from './why';
import Works from './works';
export default function Home() {
  return (
    <PageAnimate>
      <Banner />
      <What />
      <Why />
      <Technology />
      <Works />
      <Token />
      <FAQ />
      <News />
    </PageAnimate>
  );
}
