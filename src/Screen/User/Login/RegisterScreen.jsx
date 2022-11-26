import Card from "../../../components/User/Login/Card";
import Input from "../../../components/User/Login/Input";
import EmailIcon from "../../../assets/User/Login/EmailIcon.svg";
import PasswordIcon from "../../../assets/User/Login/Password.svg";
import ShowPassword from "../../../assets/User/Login/show.svg";

const RegisterScreen = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Card>
        <span className="text-sm text-[#2286C3] mb-4">
          メールアドレス・パスワードを入力して下さい。
        </span>
        <div className="w-4/5 flex flex-col justify-center">
          <Input leftIcon={EmailIcon} placeholder="メールアドレス" />
          <Input
            leftIcon={PasswordIcon}
            rightIcon={ShowPassword}
            placeholder="パスワード"
          />
          <Input
            leftIcon={PasswordIcon}
            rightIcon={ShowPassword}
            placeholder="パスワード確認"
          />
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

export default RegisterScreen;
