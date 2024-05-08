import { ReactNode } from 'react';

const Container = ({ children, className = '', ...others }) => {
  return (
    <div className={`group-[.sidebar-expanded]/main:blur-[1px] px-5 sm:!px-4 ${className} `} {...others}>
      <section className='mx-auto max-w-[1024px]'>
        {children}
      </section>
    </div>
  );
};

export default Container;
