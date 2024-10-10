import { cn } from "../../utils"
import { Navbar } from "../components/Navbar";
import { DefaultFooter } from "../components/Footer";

export function DefaultScreen () {
    return (
        <>
            <Navbar />

            <h1 className={cn("text-3xl font-bold text-primary underline")}>
              Hello world!
            </h1>

            <div className={cn("fixed bottom-0 flex justify-center w-full")}>
                <DefaultFooter />
            </div>
        </>
    )
}