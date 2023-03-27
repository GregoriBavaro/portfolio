import { useState, createContext} from "react";

const initialState = {
  value: false,
};

export const Context = createContext();

const Store = ({ children }) => {
  const [stateSkills, setStateSkills] = useState(initialState);
  const [stateContact, setStateContact] = useState(initialState);

  return (
    <Context.Provider
      value={[
        stateSkills,
        setStateSkills,
        stateContact,
        setStateContact
      ]}
    >
      {children}
    </Context.Provider>
  );
};

export default Store;
