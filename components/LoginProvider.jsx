"use client";

import { getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

const LoginProvider = () => {
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    fetchProviders();
  }, []);
  return (
    providers &&
    Object.values(providers).map((provider, index) => (
      <a
        key={index}
        className="btn btn-primary btn-sm btn-outline capitalize"
        onClick={() => signIn(provider.id)}
      >
        Join <span className="lowercase mx-1">with</span> {provider.name}
      </a>
    ))
  );
};

export default LoginProvider;
