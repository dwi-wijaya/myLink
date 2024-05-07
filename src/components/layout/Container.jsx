import { ReactNode } from 'react';

const Container = ({ children, className = '', ...others }) => {
  return (
    <div className={`group-[.sidebar-expanded]/main:blur-[1px] mb-10 px-5 ${className} `} {...others}>
      <section className='mx-auto max-w-[1024px]'>
        {children}
      </section>
    </div>
  );
};

export default Container;
