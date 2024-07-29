"use client"

import { useSession, signOut } from "next-auth/react";
import { FC } from "react";

const DashboardWrapper: FC = () => {
    const {data: session} = useSession();
    return (
        <div className="relative">
            <h1>{session?.user.email}</h1>
            <button onClick={() => {
                signOut();
            }}>
                Logout
            </button>
        </div>
    )
}

export default DashboardWrapper