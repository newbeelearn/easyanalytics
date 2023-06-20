import { Button } from "@/components/ui/button"
import { Github } from 'lucide-react';
import { useSession, signIn, signOut } from "next-auth/react"

export default function LogUser(){
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="lg:p-8 m-auto">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
	  <Button variant="outline" type="button" onClick={() => signIn("github")}>
	    <Github className="mr-2 h-4 w-4" /> Github
	  </Button>
        </div>
      </div>
    </main>
  )
}
