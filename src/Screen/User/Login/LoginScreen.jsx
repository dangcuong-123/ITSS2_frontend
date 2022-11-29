import Card from "../../../components/User/Login/Card";
import Button from "../../../components/User/Login/Button";
import TwitterIcon from "../../../assets/User/Login/TwitterIcon.svg";
import EmailIcon from "../../../assets/User/Login/EmailIcon.svg";
import PasswordIcon from "../../../assets/User/Login/Password.svg";
import ShowPassword from "../../../assets/User/Login/show.svg";
import Input from "../../../components/User/Login/Input";

const LoginScreen = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Card>
        <div className="w-4/5 flex flex-col justify-center">
          {/* <Button>
            <img src={TwitterIcon} alt="Twitter" />
            <span className="text-white font-semibold text-base">
            Login with Twitter
            </span>
          </Button> */}
          {/* <div className="flex items-center my-3">
            <div className="flex-grow h-px bg-[#2286C3]"></div>
            <span className="text-[#2286C3] text-sm font-medium px-4">
            Or
            </span>
            <div className="flex-grow h-px bg-[#2286C3]"></div>
          </div> */}
          <Input leftIcon={EmailIcon} placeholder="Email Address" />
          <Input
            leftIcon={PasswordIcon}
            // rightIcon={ShowPassword}
            placeholder="Password"
          />
          <button className="bg-gradient-to-r from-[#64B5F6] to-[#2286C3] py-3 text-white shadow-lg">
            Login
          </button>
        
          <button className="text-center text-[#64B5F6] mt-5 text-lg font-medium">
            Forgot Password
          </button>
        </div>
      </Card>
      <button className="text-center text-[#64B5F6] mt-6 text-lg font-medium">
      Create a new account
      </button>
    </div>
  );
};

export default LoginScreen;
