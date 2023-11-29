//https://api.github.com/users/${qry}
import { useEffect, useState } from "react";

export function UseFetchFollowers({ id }) {
  const [dataFollower, setDataFollower] = useState([]);

  function getFollowersData() {
    fetch(`https://api.github.com/users/${data.id}/followers`)
      .then((response) => response.json())
      .then((dataJson) => setDataFollower(dataJson));
  }
  useEffect(() => {
    getFollowersData();
  }, [id]);

  return { dataFollower };
}
