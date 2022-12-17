import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import LayoutAdmin from "../../../components/Sidebar/AdminContainer";
import { AdminTitle } from "../../../style";
import accountStore from "../../../store/AccountInfoStore";
import { editProfile } from "../../../services/UserServices";

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [username, setUsername] = useState(
    accountStore.AccountInfo.accountname
  );
  const [email, setEmail] = useState(accountStore.AccountInfo.email);
  const [imageURL, setImageURL] = useState();
  const [password, setPassword] = useState();

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
          <AdminTitle>PROFILE</AdminTitle>
          <div class="columns-3xs mt-5">
            <img
              class="w-full aspect-square "
              src={accountStore.AccountInfo.imageUrl}
            ></img>
            <div class="w-full aspect-square">
              <div className="mb-3">
                <span className="text-xl font-bold">Email: </span>
                <span className="text-xl">
                  {accountStore.AccountInfo.email}
                </span>
              </div>
              <div className="mb-3">
                <span className="text-xl font-bold">Username: </span>
                {isEdit ? (
                  <span className="text-xl">
                    {accountStore.AccountInfo.accountname}
                  </span>
                ) : (
                  <div>
                    <input
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                      className="w-3/4 p-2"
                      placeholder={accountStore.AccountInfo.accountname}
                    ></input>
                  </div>
                )}
              </div>
              {!isEdit && (
                <div>
                  <span className="text-xl font-bold">Password: </span>
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
                  EDIT
                </button>
              ) : (
                <button
                  className="bg-yellow-500 text-black p-2 rounded-xl active:bg-yellow-700 mt-5"
                  onClick={handleSave}
                >
                  SAVE
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
