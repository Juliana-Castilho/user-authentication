import Image from "next/image";
import Head from "next/head";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContexts";
import { api } from "../services/api";
import { GetServerSideProps } from "next";
import nookies from "nookies";
// import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const PATH = "/login";

export default function Home() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const cookies = nookies.get(null);
    const token = cookies["nextauth-token"];

    if (!token) {
      return redirect(PATH);
    }
  }, []);

  useEffect(() => {
    api.get("/user");
  }, []);

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

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   console.log("CTX ===>", ctx.req.cookies);
//   return {
//     props: {},
//   };
// };
