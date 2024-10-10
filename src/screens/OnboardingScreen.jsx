import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils'
import { DefaultFooter } from '../components/Footer';
import { ThemeSwitch } from '../components/themeToggleBtns';
import { HiArrowNarrowRight } from "react-icons/hi";

export function OnboardingScreen () {
    const userName = false ? "Bharti" : "Anjul";

    const sectionRef = useRef(null);

    const scrollToSection = () => {
        if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    return (
        <div className={cn("smooth flex flex-col items-center justify-center h-screen lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2")}>
            <ThemeSwitch/>
            <div className={cn("carousel carousel-vertical overflow-hidden rounded-box h-screen w-fit")}>
                <div className={cn("carousel-item h-full flex flex-col items-center justify-center w-screen")}>
                    <h1 className={cn("text-3xl font-bold mb-4")}>Hello, {userName}!</h1>
        
                    <p className={cn("text-xl font-medium text-center mb-4 mx-3 w-[90%]")}>Transform your LinkedIn experience with effortless post creation and smart formatting</p>
                    <a onClick={scrollToSection} className={cn('btn btn-info')}> Enhance Your Posts <HiArrowNarrowRight /></a>
                </div>
                
                <div ref={sectionRef} className={cn("carousel-item h-full flex flex-col items-center justify-center w-full")}>
                <div className={cn("carousel-item h-full flex flex-col items-center justify-center w-full bg-base-100 p-8")}>
                    <div className={cn("cards grid grid-cols-2 gap-4 w-full max-w-4xl scale-[95%]")}>
                        {/* Card 1 - Rich Formatting */}
                        <div className={cn("card bg-gray-50 border border-gray-200 p-4 shadow-sm transition-all rounded-lg flex flex-col items-start cursor-pointer hover:transform hover:-translate-y-[1rem] hover:-translate-x-[1rem] hover:shadow-[1rem_1rem_0rem_#000] duration-500")}>
                        <h1 className={cn("text-lg font-medium text-gray-800 mb-2")}>Rich Formatting</h1>
                        <p className={cn("text-sm text-gray-600")}>Easily style your LinkedIn posts with bold, italic, underline, and more.</p>
                        </div>

                        {/* Card 2 - AI Posts */}
                        <div className={cn("card bg-gray-50 border border-gray-200 p-4 shadow-sm transition-all rounded-lg flex flex-col items-start cursor-pointer hover:transform hover:-translate-y-[1rem] hover:-translate-x-[1rem] hover:shadow-[1rem_1rem_0rem_#000] duration-500")}>
                        <h1 className={cn("text-lg font-medium text-gray-800 mb-2")}>AI Posts</h1>
                        <p className={cn("text-sm text-gray-600")}>Craft engaging posts effortlessly using AI-driven prompts.</p>
                        </div>

                        {/* Card 3 - Templates */}
                        <div className={cn("card bg-gray-50 border border-gray-200 p-4 shadow-sm transition-all rounded-lg flex flex-col items-start cursor-pointer hover:transform hover:-translate-y-[1rem] hover:-translate-x-[1rem] hover:shadow-[1rem_1rem_0rem_#000] duration-500")}>
                        <h1 className={cn("text-lg font-medium text-gray-800 mb-2")}>Templates</h1>
                        <p className={cn("text-sm text-gray-600")}>Save time with pre-designed post templates for any occasion.</p>
                        </div>

                        {/* Card 4 - AI Post Analysis */}
                        <div className={cn("card bg-gray-50 border border-gray-200 p-4 shadow-sm transition-all rounded-lg flex flex-col items-start cursor-pointer hover:transform hover:-translate-y-[1rem] hover:-translate-x-[1rem] hover:shadow-[1rem_1rem_0rem_#000] duration-500")}>
                        <h1 className={cn("text-lg font-medium text-gray-800 mb-2")}>AI Post Analysis</h1>
                        <p className={cn("text-sm text-gray-600")}>Get real-time feedback on your posts with sentiment analysis.</p>
                        </div>

                        {/* Card 5 - Dashboard (Colspan) */}
                        <div className={cn("card bg-gray-50 border border-gray-200 p-4 shadow-sm transition-all rounded-lg flex flex-col items-start col-span-2 cursor-pointer hover:transform hover:-translate-y-[1rem] hover:-translate-x-[1rem] hover:shadow-[1rem_1rem_0rem_#000] duration-500")}>
                        <h1 className={cn("text-lg font-medium text-gray-800 mb-2")}>Dashboard</h1>
                        <p className={cn("text-sm text-gray-600")}>Monitor post performance with detailed insights and analytics.</p>
                        </div>

                        <button className={cn("btn btn-outline btn-primary flex flex-col items-center col-span-2")}>Let's Begin!</button>
                    </div>
                </div>
                </div>
            </div>
        </div>

    )
}

/*
<div className={cn("flex flex-col items-center justify-center h-screen lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2")}>
        <h1 className={cn("text-3xl font-bold mb-4")}>Hello, {userName}!</h1>
        
        <p className={cn("text-xl font-medium text-center mb-4 mx-3 w-[90%]")}>Transform your LinkedIn experience with effortless post creation and smart formatting</p>
        <button className='btn btn-outline'> Enhance Your Posts <HiArrowNarrowRight /></button>
        <div className={cn("fixed bottom-0 flex justify-center w-full")}>
          <DefaultFooter />
          <ThemeSwitch/>
        </div>

    </div>
*/