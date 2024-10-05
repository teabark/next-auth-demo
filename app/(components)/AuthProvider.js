"use client";

//meant for our client side authentication
import {SessionProvider} from "next-auth/react";

const AuthProvider = ({children}) => {
    return <SessionProvider>{ children }</SessionProvider>
};

export default AuthProvider;