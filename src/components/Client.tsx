import React, { ReactNode, useEffect, useState } from "react";

interface ClientProps {
  children: ReactNode;
}

/**
 * Forces CSR (Client-Side Rendering) to the children.
 */
const Client = ({ children }: ClientProps) => {
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(true);
  }, []);

  return <>{render && children}</>;
};

export default Client;
