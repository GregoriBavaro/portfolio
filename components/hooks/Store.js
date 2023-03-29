import { useState, createContext } from "react";

const initialState = {
  value: false,
};


export const Context = createContext();

const Store = ({ children }) => {
  const [stateSkills, setStateSkills] = useState(initialState);
  const [stateContact, setStateContact] = useState(initialState);

  console.log(`skills ${stateSkills}`);
  console.log(`contact ${stateContact}`);

  return (
    <Context.Provider
      value={{
        skills: [stateSkills, setStateSkills],
        contact: [stateContact, setStateContact],
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Store;
