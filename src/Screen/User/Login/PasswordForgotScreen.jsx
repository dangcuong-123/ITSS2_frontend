import Card from "../../../components/User/Login/Card";
import Input from "../../../components/User/Login/Input";
import EmailIcon from "../../../assets/User/Login/EmailIcon.svg";

const PasswordForgotScreen = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Card>
        <span className="text-sm text-[#2286C3] mb-4">
          パスワードの再設定手順を送りいたします。
        </span>
        <div className="w-4/5 flex flex-col justify-center">
          <Input leftIcon={EmailIcon} placeholder="メールアドレス" />
          <button className="bg-gradient-to-r from-[#64B5F6] to-[#2286C3] py-3 text-white shadow-lg">
            次へ
          </button>
        </div>
      </Card>
      <span className="text-center text-[#64B5F6] mt-6 text-lg font-medium">
        ログインはこちらから
      </span>
    </div>
  );
};

export default PasswordForgotScreen;
