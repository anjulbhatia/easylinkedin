import { cn } from '../../utils'
import { DefaultFooter } from '../components/Footer';
import { ThemeToggleBtn, ThemeSwitch } from "../components/themeToggleBtns";
import { SignInWithGoogleBtn, SignInWithLinkedinBtn } from '../components/socialBtns';

export  function AuthScreen () {
    return (
      <div className={cn("flex flex-col items-center justify-center h-screen lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2")}>
        <h1 className={cn("text-3xl font-bold mb-4")}>Easy LinkedIn</h1>
        
        <p className={cn("text-xl font-medium text-center mb-4 mx-3 w-[90%]")}>Transform your LinkedIn experience with effortless post creation and smart formatting</p>
        
        <SignInWithGoogleBtn />

        <SignInWithLinkedinBtn/>

        <div class={cn("divider mx-[30%]")}></div>

        <button className={cn("btn btn-wide bg-base-100 btn-outline hover:bg-base-300 hover:text-primary")}>
          <i className={cn("material-symbols-rounded hidden")}>person</i>
          Continue as Guest
        </button>

        <div className={cn("fixed bottom-0 flex justify-center w-full")}>
          <DefaultFooter />
        </div>

        {/* Optional Theme Switcher for */}
        <div className={cn("lg:hidden absolute top-0 right-0 scale-75 align-middle flex gap-1")}>
          <span class="label-text hidden">Light</span>
          <ThemeSwitch/>
          <span class="label-text hidden">Dark</span>
        </div>
    </div>
    )
}