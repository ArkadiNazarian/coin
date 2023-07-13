import { useSession } from "next-auth/react"

export default function Signin(){

    const se=useSession()
console.log(se)
    return(
        <div>hello</div>
    )
}