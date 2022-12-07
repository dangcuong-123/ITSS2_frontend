import Card from "../../../components/User/Login/Card";
import Input from "../../../components/User/Login/Input";
import EmailIcon from "../../../assets/User/Login/EmailIcon.svg";
import PasswordIcon from "../../../assets/User/Login/Password.svg";
import ShowPassword from "../../../assets/User/Login/show.svg";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Card>
        <span className="text-sm text-[#2286C3] mb-4">Register</span>
        <div className="w-4/5 flex flex-col justify-center">
          <Input leftIcon={EmailIcon} placeholder="Email Address" />
          <Input
            leftIcon={PasswordIcon}
            rightIcon={ShowPassword}
            placeholder="Password"
          />
          <Input
            leftIcon={PasswordIcon}
            rightIcon={ShowPassword}
            placeholder="Password confirmation"
          />
        </div>
      </Card>
      <Link
        to="/login"
        className="text-center text-[#64B5F6] mt-6 text-lg font-medium"
      >
        Login here
      </Link>
    </div>
  );
};

export default RegisterScreen;
