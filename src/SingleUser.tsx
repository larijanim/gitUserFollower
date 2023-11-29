import { useEffect, useState } from "react";

export default function SingleUser({ userProfile, handleFollowers }) {
  return (
    <div className="single-user">
      <p>{userProfile?.login}</p>
      <p>
        {" "}
        <img
          alt="Avatar"
          className="fixed-size-image"
          src={userProfile?.avatar_url}
        />
      </p>
      <p>{userProfile?.location}</p>
      <p>
        <span>Created at:</span>
        {userProfile?.created_at}
      </p>
      <button onClick={() => handleFollowers()}>find myfollowers</button>
    </div>
  );
}
