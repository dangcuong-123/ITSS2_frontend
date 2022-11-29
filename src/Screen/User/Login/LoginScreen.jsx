import Card from "../../../components/User/Login/Card";
import Button from "../../../components/User/Login/Button";
import TwitterIcon from "../../../assets/User/Login/TwitterIcon.svg";
import EmailIcon from "../../../assets/User/Login/EmailIcon.svg";
import PasswordIcon from "../../../assets/User/Login/Password.svg";
import ShowPassword from "../../../assets/User/Login/show.svg";
import Input from "../../../components/User/Login/Input";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Card>
        <div className="w-4/5 flex flex-col justify-center">
          {/* <Button>
            <img src={TwitterIcon} alt="Twitter" />
            <span className="text-white font-semibold text-base">
              Twitterにてログイン
            </span>
          </Button> */}
          <div className="flex items-center my-3">
            <div className="flex-grow h-px bg-[#2286C3]"></div>
            <span className="text-[#2286C3] text-sm font-medium px-4">
              LOGIN
            </span>
            <div className="flex-grow h-px bg-[#2286C3]"></div>
          </div>
          <label className="text-[#2286C3]">E-mail</label>
          <Input leftIcon={EmailIcon} placeholder="Please enter e-mail"/>
          <label className="text-[#2286C3]">Password</label>
          <Input
            leftIcon={PasswordIcon}
            rightIcon={ShowPassword}
            placeholder="Please enter password"
          />
          <div>
            <Link to="/password_forgot" className="text-center text-[#64B5F6] mt-5 text-lg font-medium"><u>Forgot password ?</u></Link>
            <button style={{float: 'right'}} className="bg-gradient-to-r px-5 from-[#64B5F6] to-[#2286C3] py-3 text-white shadow-lg">Login</button>
          </div>
          {/* <span className="text-center text-[#64B5F6] mt-5 text-lg font-medium">
            Forgot password ?
          </span> */}
        </div>
      </Card>
      {/* <span className="text-center text-[#64B5F6] mt-6 text-lg font-medium">
        新しくアカウントを作成する
      </span> */}
    </div>
  );
};

export default LoginScreen;
