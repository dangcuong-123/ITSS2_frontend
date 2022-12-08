const Button = ({ children, color, onClick }) => {
  return (
    <button className={`bg-gradient-to-r from-[#64B5F6] to-[#2286C3] ${color} shadow-lg inline-flex
                  py-3 px-3 m-4 rounded-lg w-1/5 border-1 border-[#2286C3] justify-center`}
                  onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
