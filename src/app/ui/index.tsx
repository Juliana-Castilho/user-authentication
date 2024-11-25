import Image from "next/image";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContexts";

export default function Home() {
  const { user } = useContext(AuthContext);

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
