import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import LayoutAdmin from "../../../components/Sidebar/AdminContainer";
import { AdminTitle } from "../../../style";
import accountStore from "../../../store/AccountInfoStore";
import { editProfile } from "../../../services/UserServices";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const [isEdit, setIsEdit] = useState(true);
  const [username, setUsername] = useState(sessionStorage.getItem("username"));
  console.log(
    '🚀 ~ file: Profile.jsx:14 ~ Profile ~ JSON.parse(sessionStorage.getItem("accountInfo"))',
    JSON.parse(sessionStorage.getItem("accountInfo"))
  );
  const [email, setEmail] = useState(
    JSON.parse(sessionStorage.getItem("accountInfo")).email
  );
  const [imageURL, setImageURL] = useState(
    "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
  );
  const [password, setPassword] = useState(
    JSON.parse(sessionStorage.getItem("accountInfo")).password
  );
  const { t } = useTranslation();

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };
  const handleSave = () => {
    setIsEdit(!isEdit);
    const tempAccountInfo = {
      email: email,
      accountname: username,
      imageUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
    };
    accountStore.updateAccountInfo(tempAccountInfo);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <LayoutAdmin>
          <AdminTitle>{t("profile.title")}</AdminTitle>
          <div class="columns-3xs mt-5">
            <img class="w-full aspect-square " src={imageURL}></img>
            <div class="w-full aspect-square">
              <div className="mb-3">
                <span className="text-xl font-bold">Email: </span>
                <span className="text-xl">{email}</span>
              </div>
              <div className="mb-3">
                <span className="text-xl font-bold">{t("profile.name")}: </span>
                {isEdit ? (
                  <span className="text-xl">{username}</span>
                ) : (
                  <div>
                    <input
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                      className="w-3/4 p-2"
                      placeholder={username}
                    ></input>
                  </div>
                )}
              </div>
              {!isEdit && (
                <div>
                  <span className="text-xl font-bold">
                    {t("profile.password")}:{" "}
                  </span>
                  <div>
                    <input
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      className="w-3/4 p-2"
                    ></input>
                  </div>
                </div>
              )}
              {isEdit ? (
                <button
                  className="bg-yellow-500 text-black p-2 rounded-xl active:bg-yellow-700 mt-5"
                  onClick={handleEdit}
                >
                  {t("profile.edit")}
                </button>
              ) : (
                <button
                  className="bg-yellow-500 text-black p-2 rounded-xl active:bg-yellow-700 mt-5"
                  onClick={handleSave}
                >
                  {t("profile.save")}
                </button>
              )}
            </div>
          </div>
        </LayoutAdmin>
      </Container>
    </React.Fragment>
  );
};

export default Profile;
