// server side rendering

import { options } from '../api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const page = async () => {
    const session = await getServerSession(options)

    if(!session) {
        redirect("/api/auth/signin?callbackUrl=/Member")
    }
  return (
    <div>
      Member Server Session
      <p>{session?.user?.email}</p>
      <p>{session?.user?.role}</p>
    </div>
  )
}

export default page
