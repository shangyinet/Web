import React, { ReactNode, ComponentType } from "react";

interface Props {
  children: ReactNode;
}

export const Text20: ComponentType<Props> = ({ children }) => {
  return <text style={{ fontSize: 20 }}>{children}</text>;
};

export const Text18: ComponentType<Props> = ({ children }) => {
  return <text style={{ fontSize: 18 }}>{children}</text>;
};
