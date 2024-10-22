import Image from "next/image";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContexts";
import { api } from "../services/api";
import { redirect } from "next/navigation";

const PATH = "/login";

export default function Home() {
  const { user } = useContext(AuthContext);
  const [authUser, setAuthUser] = useState("");

  useEffect(() => {
    api.get("/user");
    setAuthUser(user);
  }, [user]);

  return (
    <div>
      <Head>Página inicial</Head>
      <main>
        <h1>Hello World</h1>
        <Image
          alt={user ? user.name : ""}
          src={user ? user.avatar_url : "/default-avatar.png"}
          width={80}
          height={80}
          className="rounded-full"
        />
      </main>
    </div>
  );
}
