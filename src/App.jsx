import { useState } from 'react'
import { cn } from "../utils";
import { EditorScreen } from './screens/EditorScreen'
//import { DefaultScreen } from './screens/defaultScreen';
//import { AuthScreen } from './screens/AuthScreen';
//import { OnboardingScreen } from './screens/OnboardingScreen';
//import { SplashScreen } from './screens/SplashScreen';
import './index.css'
import './App.css'

function App() {

    return (
      <div className={cn('group/area min-w-fit max-md:max-w-fit min-h-[28rem] max-h-[110rem] overflow-hidden resize')}>
        <EditorScreen/>
      </div>
    )
  }

export default App
