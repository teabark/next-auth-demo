'use client';

//client side authenticating
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const page = () => {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated(){
            redirect("/api/auth/signin?callbackUrl=/clientMember")
        }
    })
  return (
    <div>
      Member Client Session
    </div>
  )
}

export default page
