import React, { useEffect, useContext } from "react";
import { UserContext } from "../../Context/UserState/UserState";
import "./Profile.scss";
import { Spin } from "antd";

const Profile = () => {
  const { getUserInfo, user, token } = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, [token]);

 
  if (!user) {
    return <Spin size="large" />;
  }
  return (
    
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-info">
        <p className="profile-info-line id">ID: {user.id}</p>
        <p className="profile-info-line">Name: {user.name}</p>
        <p className="profile-info-line">Email: {user.email}</p>
      </div>
    </div>
  );
};

export default Profile;
