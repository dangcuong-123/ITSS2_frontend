const InputDate = () => {
  return (
    <select
      id="countries"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 appearance-none p-2"
    >
      <option selected>1990</option>
      <option value="US">1991</option>
      <option value="CA">1992</option>
      <option value="FR">1993</option>
      <option value="DE">1994</option>
    </select>
  );
};

export default InputDate;
