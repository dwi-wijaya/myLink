import React from "react";  

  const PageHeading = ({ title, description, children }) => {
    return (
      <>
      <div className="flex items-center justify-between">
        <h2 className="ml-3 relative font-bold text-3xl text-text dots">{title}</h2>
        {children}

      </div>
        <p className="leading-5 text-subtext">
          {description}
        </p>
        <hr className="hr" />
      </>
    );
  };
  
  export default PageHeading;
  