const Button = ({ children }) => {
  return (
    <button className="bg-gradient-to-r from-[#64B5F6] to-[#2286C3] shadow-lg inline-flex
                  py-3 px-3 m-4 items-center text-center rounded-lg w-1/5 border-1 border-[#2286C3]">
      {children}
    </button>
  );
};

export default Button;
