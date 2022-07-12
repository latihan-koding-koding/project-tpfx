import { ReactNode } from 'react';
import { CSSProperties } from 'styled-components';

const Section = ({
  children,
  className,
  style,
  id
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  id?: string;
}) => (
  <section
    className={'w-full py-7 px-4 text-primary-gray-4 overflow-x-hidden ' + className}
    style={style}
    id={id}
  >
    <div className="max-w-7xl flex mx-auto flex-col">{children}</div>
  </section>
);

export default Section;
