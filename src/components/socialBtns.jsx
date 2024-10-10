import { cn } from "../../utils"
import google_icon from "../assets/google-icon.svg";
import linkedin_icon from "../assets/linkedin-icon.svg";

export function SignInWithGoogleBtn () {
    return (
        <button className={cn("btn btn-wide bg-base-300 mb-2")}>
          <img src={google_icon} className={cn("w-[1.25rem] h-[1.25rem]")}/>
            Sign in with Google
        </button>
    )
}

export function SignInWithLinkedinBtn () {
    return (
        <button className={cn("btn btn-wide btn-outline text-sky-700 mb-2")}>
            <img src={linkedin_icon} className={cn("w-[1.25rem] h-[1.25rem]")}/>
            Sign in with LinkedIn
        </button>
    )
}