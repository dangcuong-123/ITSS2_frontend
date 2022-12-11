import Card from "../../../components/User/Login/Card";
import Input from "../../../components/Input";
import EmailIcon from "../../../assets/User/Login/EmailIcon.svg";
import { Link } from "react-router-dom";

const PasswordForgotScreen = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Card>
        <span className="text-sm text-[#2286C3] mb-4">
          We will send you instructions on how to reset your password.
        </span>
        <div className="w-4/5 flex flex-col justify-center">
          <Input leftIcon={EmailIcon} placeholder="Email Address" />
          <button className="bg-gradient-to-r from-[#64B5F6] to-[#2286C3] py-3 text-white shadow-lg">
            Next
          </button>
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

export default PasswordForgotScreen;
