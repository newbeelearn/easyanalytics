'use client'
import LogUser from "@/components/loguser"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';

export default function Login(){
  const { data: session, status } = useSession()
  const router = useRouter();
  
  if (status === "authenticated"){
    router.push(`/dashboard`);
  }

  return (
    <LogUser />
  )  
}
