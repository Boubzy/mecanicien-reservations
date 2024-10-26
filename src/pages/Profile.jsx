import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logout } from '../redux/slices/userSlice';
import './profile.css';

const Profile = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const userInfo = useSelector((state) => state.user.userInfo);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="container">
      <div className="card p-3">
        <img src="/images/profile-avatar.png" alt="Profile" className="profile-avatar mb-3" />
        <h1 className="card-title">Mon Profil</h1>
        {userInfo && (
          <div className="card-body">
            <p><strong>Nom :</strong> {userInfo.name}</p>
            <p><strong>Email :</strong> {userInfo.email}</p>
          </div>
        )}
        <button onClick={() => dispatch(logout())} className="button-primary">
          Se déconnecter
        </button>
      </div>
    </div>
  );
};

export default Profile;
