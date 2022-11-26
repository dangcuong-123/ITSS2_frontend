const Card = ({ children }) => {
  return (
    <div className="bg-[#FFFFFF] w-11/12 mt-44 flex flex-col justify-center items-center pt-8 pb-7 shadow-[0_4px_10px_#00A0FF]">
      {children}
    </div>
  );
};

export default Card;
