import React, { useEffect, useState } from "react";

export default function DataForm({ param, setParam, setUserProfile, setErr }) {
  const handleSubmit = () => {
    if (param) {
      fetch(`https://api.github.com/users/${param}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("This API needs authentication");
          }
          return response.json();
        })
        .then((dataJson) => {
          setUserProfile(dataJson);
        })
        .catch((e) => setErr(e.message));
    } else {
      setUserProfile(null);
    }
  };
  useEffect(() => {
    if (param === "") {
      setUserProfile(null);
      return;
    }
    // handleSubmit();
  }, [param]);

  return (
    <div className="data-form">
      <input
        type="text"
        value={param}
        onChange={(e) => setParam(e.target.value)}
      />
      <button onClick={() => handleSubmit()}>submit</button>
    </div>
  );
}
