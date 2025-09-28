"use client"
import Image from "next/image";
import NotFound from "@/components/NotFound";
import Loader from "@/components/Loader"
import { useEffect, useState } from "react";

export default function Home() {
  const [redirect, setRedirect] = useState(false)
  const [geoInfo, setGeoInfo] = useState(null)

  useEffect(() => {

   const mySearchParams = new URLSearchParams(window.location.search)
   const key = mySearchParams.get('jsm')
   const sid = mySearchParams.get('sid')

   getGeoInfo(key, sid)

  }, [])

  async function getGeoInfo(key, sid) {
    const response = await fetch('/api/getInfo')
    const data = await response.json()
    if(data.protect !== key && data.sid !== sid) {

      setRedirect(false)

    } else {
      setRedirect(true)
    }

    // setGeoInfo(data)

  }
  return (
    <>
    {/* <Loader /> */}
    {!redirect ? <NotFound /> : <Loader /> }

    </>
  );
}
