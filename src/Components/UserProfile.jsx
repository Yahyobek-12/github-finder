import '../Styles/UserProfile.css';
import { IoPersonCircle } from "react-icons/io5";
import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";

const UserProfile = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);

  console.log(username);

  useEffect(() => {
    document.title = `User/${username}`;

    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [username]);

  return (
    <div className='user-profile'>
      {userData ? (
        <>
          <div className="user-top-bar">
            <img src={userData.avatar_url} alt={userData.login} />
            <h2>@{userData.login}</h2>
            <div className="user-top-flex">
              <h3>Followers: {userData.followers}</h3>
              <h3>Following: {userData.following}</h3>
              <h3>Repositories: {userData.public_repos}</h3>
            </div>
          </div>
          <div className="user-middle-bar">
            <p>Bio: {userData.bio}</p>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;
