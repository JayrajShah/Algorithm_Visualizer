import React, { useState, createContext } from "react";

export const infoContext = createContext();

export const InfoProvider = (props) => {
  const [info, setinfo] = useState({
    name: "",
    time: null,
    array: [],
    isSorted: false,
  });

  return (
    <infoContext.Provider value={[info, setinfo]}>
      {props.children}
    </infoContext.Provider>
  );
};
