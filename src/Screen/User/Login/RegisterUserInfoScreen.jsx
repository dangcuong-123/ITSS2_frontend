import Card from "../../../components/User/Login/Card";
import Input from "../../../components/User/Login/Input";
import InputDate from "../../../components/User/Login/InputDate";
import UserIcon from "../../../assets/User/Login/user.svg";

const RegisterUserInfoScreen = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Card>
        <span className="text-sm text-[#2286C3] mb-4">
          ユーザ情報を入力して下さい。
        </span>
        <div className="w-4/5 flex flex-col justify-center">
          <Input leftIcon={UserIcon} placeholder="表示名" />
          <span className="text-[#2286C3] font-semibold">生年月日</span>
          <div className="flex flex-row items-center">
            <InputDate />
            <span className="mx-2 text-[#2286C3]">年</span>
            <InputDate />
            <span className="mx-2 text-[#2286C3]">月</span>
            <InputDate />
            <span className="mx-2 text-[#2286C3]">日</span>
          </div>
          <span className="text-[#2286C3]">性別</span>
          <div className="flex flex-row justify-between">
            <div>
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <span className="ml-2 text-[#2286C3]">男</span>
            </div>
            <div>
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <span className="ml-2 text-[#2286C3]">女</span>
            </div>
            <div>
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <span className="ml-2 text-[#2286C3]">その他</span>
            </div>
          </div>

          <button className="bg-gradient-to-r from-[#64B5F6] to-[#2286C3] py-3 text-white shadow-lg">
            登録
          </button>
        </div>
      </Card>
      <span className="text-center text-[#64B5F6] mt-6 text-lg font-medium">
        ログインはこちらから
      </span>
    </div>
  );
};

export default RegisterUserInfoScreen;
