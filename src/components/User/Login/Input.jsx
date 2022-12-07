const Input = ({ leftIcon, rightIcon, placeholder, onChange, value }) => {
	return (
		<div className="relative flex w-full flex-wrap items-stretch mb-3 border-1 border-[#2286C3]">
			<span className="z-10 h-full leading-snug font-normal text-center text-slate-300 absolute bg-transparent text-base items-center justify-center w-8 pl-3 py-3">
				<img src={leftIcon} alt="Email" />
			</span>
			<input
				type="text"
				placeholder={placeholder}
				className="px-3 py-3 placeholder-[#21212180] text-slate-600 relative bg-white text-sm border-2 border-[#2286C3] rounded-lg shadow outline-none focus:outline-none focus:ring w-full pl-12"
				onChange={onChange}
				value={value}
			/>
			<div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
				{rightIcon && <img src={rightIcon} alt="Email" />}
			</div>
		</div>
	);
};

export default Input;
