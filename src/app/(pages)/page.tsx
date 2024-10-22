"use client";
// import { useContext, useEffect } from "react";
// import { AuthContext } from "../contexts/AuthContexts";
// import { api } from "../services/api";
import Home from "../ui";

export default function Page() {
  // const { user } = useContext(AuthContext);

  // useEffect(() => {
  //   api.get("/user");
  // }, []);

  return (
    <main>
      <Home />
    </main>
  );
}

// export async function getServerSideProps() {
//   const cookieStore = await cookies(); // Use 'await' aqui
//   const userCookie = cookieStore.get("nextauth-token");

//   return {
//     props: {
//       token: userCookie ? userCookie.value : null,
//     },
//   };
// }
