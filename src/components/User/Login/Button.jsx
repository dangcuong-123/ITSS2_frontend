const Button = ({ children }) => {
  return (
    <button className="bg-gradient-to-r from-[#64B5F6] to-[#2286C3] shadow-lg inline-flex py-4 px-4 items-center w-full justify-between ">
      {children}
    </button>
  );
};

export default Button;
