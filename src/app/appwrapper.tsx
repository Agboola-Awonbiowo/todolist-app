"use client"
import { TaskProvider } from "./context";

interface AppwrapperProps {
  children: React.ReactNode;
}

const Appwrapper = ({ children }: AppwrapperProps) => {
  return <TaskProvider>{children}</TaskProvider>;
};

export default Appwrapper;
