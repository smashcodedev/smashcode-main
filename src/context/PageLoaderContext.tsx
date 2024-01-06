"use client";

import { createContext, useEffect, useState } from "react";

const PageLoaderContext = createContext({ loading: true });

const PageLoaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 220);
  }, []);

  return (
    <PageLoaderContext.Provider value={{ loading }}>
      {children}
    </PageLoaderContext.Provider>
  );
};

export { PageLoaderContext, PageLoaderProvider };
