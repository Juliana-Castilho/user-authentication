"use client";

import { createContext, ReactNode, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies";
import { redirect } from "next/navigation";

import { recoverUserInformation, signInRequest } from "../services/auth";
import { api } from "../services/api";

type TUser = {
  name: string;
  email: string;
  avatar_url: string;
};

type TSignInData = {
  email: string;
  password: string;
};

export type TAuthContextProps = {
  isAuthenticated: boolean;
  user: TUser | null;
  signIn: (data: TSignInData) => Promise<void>;
};

type TAuthProviderProps = {
  children: ReactNode;
};

const PATH = "/";

export const AuthContext = createContext({} as TAuthContextProps);

export function AuthProvider({ children }: TAuthProviderProps) {
  const [user, setUser] = useState<TUser | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { "nextauth-token": token } = parseCookies();

    if (token) {
      recoverUserInformation().then((response) => {
        setUser(response.user);
      });
    }
  }, []);

  const signIn = async ({ email, password }: TSignInData) => {
    const { token, user } = await signInRequest({
      email,
      password,
    });

    setCookie(undefined, "nextauth-token", token, {
      maxAge: 60 * 60 * 1, // 1 hour
    }); //primeiro parâmetro como undefined porque a requisição não é server side (AuthContext), e sim no client

    api.defaults.headers["Authorization"] = `Bearer ${token}`;

    setUser(user);

    console.log("TOKEN", token);

    redirect(PATH);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
