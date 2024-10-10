import { cn } from "../../utils"

export function DefaultFooter() {
    return (
        <footer className={cn("footer footer-center text-xs bg-base-100 text-base-content p-4")}>
            <aside>
                {/* ❤️❤ */}
                <p>Made with ❤ by <a href="https://www.linkedin.com/in/anjulbhatia" target="_blank" className={cn("font-bold")}>Anjul Bhatia</a> for the Community</p>
            </aside>
        </footer>
    )
}

export function ExtendedFooter() {
    return (
        <footer className={cn("footer footer-center bg-base-300 text-base-content p-4")}>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All rights reserved by ACME Industries Ltd</p>
            </aside>
        </footer>
    )
}