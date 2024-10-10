import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { cn } from "../../utils"
import { OnScreenToolPalette } from '../components/OnScreenToolPalette.jsx'
import App from '../App.jsx'
import '../index.css'

console.clear()
console.log("Content script loaded");

async function injectToolPalette() {
  // Wait for LinkedIn post creation textbox to appear
  const checkForTextBox = () => new Promise((resolve) => {
    const interval = setInterval(() => {
      const linkedInTextbox = document.querySelector('.ql-editor[role="textbox"]');
      if (linkedInTextbox) {
        clearInterval(interval);
        resolve(linkedInTextbox);
      }
    }, 500); // Check every 500ms
  });

  // Wait for the textbox to load
  const linkedInTextbox = await checkForTextBox();

  // Create a container for the ToolPalette
  const toolPaletteContainer = document.createElement('div');
  toolPaletteContainer.id = 'react-tool-palette';

  // Insert the container into the LinkedIn DOM (above the textbox)
  linkedInTextbox.parentElement.insertBefore(toolPaletteContainer, linkedInTextbox);

  // Render the ToolPalette component into the container
  const root = createRoot(toolPaletteContainer);
  root.render(
    <StrictMode>
      <OnScreenToolPalette />
    </StrictMode>
  );

  console.log('ToolPalette injected into LinkedIn post editor.');
}

// Run the injection function
injectToolPalette();

// content.js
//import React from 'react';
//import ReactDOM, {createRoot} from 'react-dom/client';
//import { ToolPalette } from './src/components/ToolPalette';


/*
const src = chrome.runtime.getURL('src/screens/Footer.jsx')

const iframe = new DOMParser().parseFromString(
  `<iframe class="crx" src="${src}"></iframe>`,
).body.firstElementChild

document.body.append(iframe)

// Wait for LinkedIn's DOM to fully load
window.addEventListener('load', () => {
  // Find the LinkedIn post editor with role="textbox"
  const linkedInTextbox = document.querySelector('[role="textbox"]');
  const root = createRoot(linkedInTextbox);

  if (linkedInTextbox) {
    btn = document.createElement("btn","button")
    btn.textContent="Hello"
    linkedInTextbox.parentElement.insertBefore(btn, linkedInTextbox)}

  if (linkedInTextbox) {
    // Create a container div for the React component
    const toolPaletteContainer = document.createElement('div');
    toolPaletteContainer.id = 'react-tool-palette';

    // Insert the container into the LinkedIn DOM (above the textbox)
    console.log("Here")
    linkedInTextbox.parentElement.insertBefore(toolPaletteContainer, linkedInTextbox);

    // Render the ToolPalette component into the container
    root.render(<ToolPalette />, toolPaletteContainer);
  }
});

*/