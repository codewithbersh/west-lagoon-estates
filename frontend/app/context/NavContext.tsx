"use client";

import React, { ReactNode, createContext, useState } from "react";

type NavData = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type Props = {
  children: ReactNode;
};

export const NavContext = createContext<NavData>({
  isOpen: false,
  setIsOpen: () => {},
});

export const NavProvider = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const data: NavData = { isOpen: isOpen, setIsOpen: setIsOpen };
  return (
    <NavContext.Provider value={data}>{props.children}</NavContext.Provider>
  );
};
