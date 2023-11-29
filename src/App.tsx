

import './App.css'
import DataForm from "./DataForm";
// import UseFetchFollowers from "./UseFetchFollowers";

import  { useEffect, useState } from "react";
import SingleUser from "./SingleUser";
import Followers from "./Followers";


export default function App() {
  const [userProfile, setUserProfile] = useState("");
  const [followersData, setFollowersData] = useState([]);
  const [err, setErr] = useState(false);
  const [param, setParam] = useState("");

  const fetchHelper = async (query) => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${query}/followers`
      );
      if (!response.ok) {
        throw new Error("errot text");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

  const handleFollowers = async() => {
    if (userProfile?.login) {
      const q=await fetchHelper(userProfile.login);
      setFollowersData(q);
      // fetch(`https://api.github.com/users/${userProfile.login}/followers`)
      //   .then((response) => response.json())
      //   .then((dataJson) => {
      //     setFollowersData(dataJson);
      //   });
    } else {
      setFollowersData(null);
    }
  };

  useEffect(() => {
    setFollowersData(null);
  }, [userProfile?.login]);

  return (
    <div className="App">
      <h1>GitHub Users</h1>
      <DataForm
        param={param}
        setParam={setParam}
        setUserProfile={setUserProfile}
        setErr={setErr}
      />
      {err && <p>{err}</p>}
      {!err && userProfile && (
        <SingleUser
          userProfile={userProfile}
          handleFollowers={handleFollowers}
        />
      )}
      {followersData && !err && (
        <>
          {followersData && <h1>Followers</h1>}
          <Followers
            userProfile={userProfile}
            setParam={setParam}
            setUserProfile={setUserProfile}
            followersData={followersData}
            handleFollowers={handleFollowers}
            setFollowersData={setFollowersData}
          />
        </>
      )}
    </div>
  );
}
