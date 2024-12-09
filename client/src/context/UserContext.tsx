import React, { createContext, useContext, useState } from "react";

type UserContextProps = {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
};

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string>("bishal");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be with in the UserProvider");
  } else return context;
};
