import { useInView } from '@react-spring/web';
import { useEffect, useState } from 'react';

export default function AnimatedContent({
  content = '',
  className = '',
  animateClassName = '',
  children,
}: {
  className?: string;
  content?: string | React.ReactNode;
  animateClassName?: string;
  children?: React.ReactNode;
}) {
  const [ref, inView] = useInView();
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // console.log('inView', inView);
    setStartAnimation(inView); // 重置动画
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`${className} ${
        startAnimation ? `animate__animated ${animateClassName}` : ''
      }`}
      dangerouslySetInnerHTML={{ __html: children || content }}
    ></div>
  );
}
