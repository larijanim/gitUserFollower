import { useEffect } from "react";
import SingleUser from "./SingleUser";

export default function Followers({
  userProfile,
  setParam,
  setUserProfile,
  followersData,
  handleFollowers,
  setFollowersData
}) {
  const handleFollowerDivClick = (follower) => {
    setParam(follower.login);
    fetch(`https://api.github.com/users/${follower.login}`)
      .then((response) => response.json())
      .then((re) => {
        setUserProfile(re);
        setFollowersData([]);
      });
  }; //if we want to show automaticly followers
  // useEffect(() => {
  //   handleFollowers();
  // }, [userProfile?.login]);
  console.log(followersData);
  return (
    <div className="followers">
      {followersData?.map((user) => {
        return (
          <div key={user.login} onClick={() => handleFollowerDivClick(user)}>
            <SingleUser userProfile={user} handleFollowers={handleFollowers} />
          </div>
        );
      })}
    </div>
  );
}
