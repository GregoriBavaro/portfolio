import { useState, createContext, useRef } from "react";

const initialState = {
  value: false,
};

export const Context = createContext();

const Store = ({ children }) => {
  const [stateSkills, setStateSkills] = useState(initialState);
  return (
    <Context.Provider
      value={[
        stateSkills,
        setStateSkills
      ]}
    >
      {children}
    </Context.Provider>
  );
};

export default Store;
