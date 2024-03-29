import React, { useEffect, useState } from "react";
import Button from "../Button";
import accountStore from "../../store/AccountInfoStore";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Alert, Snackbar } from "@mui/material";
import { useTranslation } from "react-i18next";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLoginRoute = () => {
    navigate("/login");
  };

  const handleHomeRoute = () => {
    navigate("/");
  };

  const [logoutMessage, setLogoutMessage] = useState("");
  const [logout, setLogout] = useState(false);

  const handleLogoutRoute = () => {
    // remove local storage
    localStorage.clear();
    // sessionStorage.removeItem("accountInfo");
    // sessionStorage.removeItem("username");
    sessionStorage.clear();
    setLogoutMessage("Đăng xuất thành công");
    setLogout(true);
    navigate("/");
    window.location.reload();
  };

  // modify username in header
  const [username, setUsername] = useState("");

  // shorten username contain more than 10 characters
  useEffect(() => {
    function getUserName() {
      if (sessionStorage.getItem("username")) {
        if (sessionStorage.getItem("username").length > 10) {
          setUsername(
            sessionStorage.getItem("username").substring(0, 10) + "..."
          );
        } else {
          setUsername(sessionStorage.getItem("username"));
        }
      }
    }
    getUserName();
  }, [username]);

  return (
    <div className="fixed w-full z-50 h-16 bg-gradient-to-r from-cyan-500 to-pink-500 flex justify-between items-center">
      <div className="w-4/5">
        <p
          className="text-black font-bold text-xl ml-5 cursor-pointer"
          onClick={() => handleHomeRoute()}
        >
          Happy Travel
        </p>
      </div>
      {logout && (
        <Snackbar
          open={logout}
          autoHideDuration={6000}
          onClose={() => setLogout(false)}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert onClose={() => setLogout(false)} severity="success">
            {logoutMessage}
          </Alert>
        </Snackbar>
      )}
      {location.pathname !== "/login" &&
        (sessionStorage.getItem("accountInfo") ? (
          <>
            <div className="flex items-center space-x-4 w-1/6">
              <img
                className="w-10 h-10 rounded-full"
                src={accountStore?.AccountInfo.imageUrl}
                alt="avatar"
              />
              {username ? (
                <div className="font-medium dark:text-white">
                  <div className="font-bold">
                    {/* {accountStore?.AccountInfo.accountname} */}
                    {username}
                  </div>
                </div>
              ) : (
                <div className="font-medium dark:text-white">
                  <div className="font-bold">
                    {/* {accountStore?.AccountInfo.accountname} */}
                    {sessionStorage.getItem("username").substring(0, 10) +
                      "..."}
                  </div>
                </div>
              )}

              <div className="w-32 ml-4">
                <p
                  className="font-bold cursor-pointer"
                  onClick={() => handleLogoutRoute()}
                >
                  {t("login.logout")}
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-4/5 flex mr-4 justify-end">
              <Button
                color="font-bold mr-0 px-2 py-2"
                onClick={() => handleLoginRoute()}
              >
                {t("header.login")}
              </Button>
            </div>
          </>
        ))}
    </div>
  );
};

export default Header;
