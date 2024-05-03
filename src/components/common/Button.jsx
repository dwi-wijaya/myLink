
const Button = ({
  children,
  isLoading,
  className = '',
  icon,
  ...rest
}) => {
  return (
    <button
      disabled={isLoading}
      className={`btn ${className}`}
      {...rest}
    >
      {isLoading ? (
        <> <i className="bx bx-loader bx-spin"/> Loading...</>
      ) : (
        <>
          {icon && <>{icon}</>}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;
