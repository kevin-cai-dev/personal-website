import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const PageSection = ({ children }: Props) => {
  return (
    <div className="w-screen">
      <div className="px-8">{children}</div>
    </div>
  );
};

export default PageSection;
