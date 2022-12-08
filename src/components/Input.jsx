const Input = ({ leftIcon, rightIcon, placeholder, onChange, value }) => {
	return (
		<div className="relative flex w-full
						items-center m-4 border-1 border-[#2286C3]">
			<input
				type="text"
				placeholder={placeholder}
				className="px-3 py-3 placeholder-[#21212180] text-slate-600 relative bg-white text-sm border-2 border-[#2286C3]
						rounded-lg shadow outline-nonefocus:outline-none focus:ring w-full "
				onChange={onChange}
				value={value}
			/>
		</div>
	);
};

export default Input;
