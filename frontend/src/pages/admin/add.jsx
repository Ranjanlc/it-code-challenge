import { useEffect } from "react";
import AlumniOnBoard from "../alumni";
import { useRouter } from "next/router";

function Add() {
  const navigate = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("alumni-token");
    !token && navigate.replacep("/");
  }, [navigate]);
  return (
    <>
      <AlumniOnBoard admin={true} />
    </>
  );
}

export default Add;
