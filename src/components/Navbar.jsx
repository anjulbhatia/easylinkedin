import { cn } from '../../utils'
import { ThemeToggleBtn } from './themeToggleBtns'

export function Navbar() {
    return (
        <div className={cn("navbar bg-base-100")}>
            <div className={cn("navbar-start")}>
                <div className={cn("drawer z-10")}>
                    <input id="my-drawer" type="checkbox" className={cn("drawer-toggle")} />
                    <div className={cn("drawer-content")}>
                        {/* Page content here */}
                        <label tabIndex="0" role="button" htmlFor="my-drawer" className={cn("drawer-button btn btn-ghost btn-circle z-[999px]")}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={cn("h-5 w-5")}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </label>
                    </div>
                    <div className={cn("drawer-side")}>
                        <label htmlFor="my-drawer" aria-label="close sidebar" className={cn("drawer-overlay")}></label>
                        <ul className={cn("menu bg-base-200 text-base-content min-h-full w-80 p-4")}>
                            {/* Sidebar content here */}
                            <li><a>LinkedIn Formatter</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={cn("navbar-center")}>
                <a className={cn("font-medium text-xl")}>Easy LinkedIn</a>
            </div>
            <div className={cn("navbar-end")}>
                <ThemeToggleBtn />
            </div>
        </div>
    )
}