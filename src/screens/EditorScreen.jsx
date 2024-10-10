import React, { useState, useCallback, useRef, useEffect } from 'react';
import { cn } from '../../utils';
import { applyUnicode, bulletMap } from '../scripts/applyUnicode';
import { Navbar } from '../components/Navbar';
import { ToolPalette } from '../components/ToolPalette';
import { WritingArea } from '../components/WritingArea';
import { DefaultFooter } from '../components/Footer';

export function EditorScreen() {
  const [content, setContent] = useState('');
  const textareaRef = useRef(null);

  const handleTransform = useCallback((type) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    if (start === end) return;

    const selectedText = content.substring(start, end);
    const transformedText = applyUnicode(selectedText, type);

    const newText = content.substring(0, start) + transformedText + content.substring(end);
    setContent(newText);

    setTimeout(() => {
      textarea.setSelectionRange(start, start + transformedText.length);
      textarea.focus();
    }, 0);
  }, [content]);

  const handleEmojiSelect = (emoji) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    const updatedContent = content.substring(0, start) + emoji + content.substring(end);
    setContent(updatedContent);

    textarea.selectionStart = textarea.selectionEnd = start + emoji.length;
    textarea.focus();
  };

  const handleBullets = useCallback((type) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    if (bulletMap[type]) {
      const icon = bulletMap[type];
      const selectedText = content.substring(start, end);
      const newText = content.substring(0, start) + icon + selectedText + content.substring(end);
      setContent(newText);

      setTimeout(() => {
        textarea.setSelectionRange(start + icon.length, start + icon.length + selectedText.length);
        textarea.focus();
      }, 0);
    } else {
      const selectedText = content.substring(start, end);
      const transformedText = applyUnicode(selectedText, type);
      const newText = content.substring(0, start) + transformedText + content.substring(end);
      setContent(newText);

      setTimeout(() => {
        textarea.setSelectionRange(start, start + transformedText.length);
        textarea.focus();
      }, 0);
    }
  }, [content]);

  const handleCopyToClipboard = async () => {
    try {
      if (textareaRef.current) {
        await navigator.clipboard.writeText(textareaRef.current.value);
        console.log('Content copied to clipboard');
      }
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleClearWritingArea = () => {
    setContent('');
    if (textareaRef.current) {
      textareaRef.current.value = '';
      localStorage.removeItem('linkedinPostDraft'); // Remove from localStorage
    }
  };

  useEffect(() => {
    // Load saved draft from localStorage when component mounts
    const savedDraft = localStorage.getItem('linkedinPostDraft');
    if (savedDraft) {
      setContent(savedDraft);
    }
  }, []);

  return (
    <div className="group/area min-w-fit max-w-full min-h-screen bg-base-100 overflow-hidden">
      <Navbar />

      <main className={cn("container flex w-full justify-center px-4 overflow-y-hidden")}>
        <div className={cn("bg-base-200 min-w-[100px] max-w-[415px] p-4 rounded-lg sm:max-w-[500px] md:max-w-[600px] lg:max-w-[800px]")}>
          <h2 className={cn("text-xl font-bold mb-4")}>Write a LinkedIn Post</h2>

          <ToolPalette onTransform={handleTransform} onEmojiSelect={handleEmojiSelect} onHandleBullets={handleBullets} />

          <WritingArea
            ref={textareaRef}
            content={content}
            setContent={setContent}
            onCopy={handleCopyToClipboard}
            onClear={handleClearWritingArea}
          />
        </div>
      </main>

      <div className={cn("fixed bottom-0 flex justify-center w-full")}>
        <DefaultFooter />
      </div>
    </div>
  );
}
