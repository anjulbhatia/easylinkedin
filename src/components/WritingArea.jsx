import React, { forwardRef, useState, useEffect } from 'react';
import { cn } from '../../utils';
import { ActionButton } from './ActionButton';

export const WritingArea = forwardRef(({ content, setContent, onCopy, onClear }, ref) => {
  const [copyStatus, setCopyStatus] = useState(false);

  // Save draft to localStorage whenever content changes
  useEffect(() => {
    if (content) {
      localStorage.setItem('linkedinPostDraft', content);
    }
  }, [content]);

  const insertAtCursor = (text) => {
    const textarea = ref.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    const updatedText =
      content.substring(0, start) + text + content.substring(end);
    setContent(updatedText);

    textarea.selectionStart = textarea.selectionEnd = start + text.length;
    textarea.focus();
  };

  const onCopyText = async () => {
    try {
      if (content) {
        await navigator.clipboard.writeText(content);
        //console.log('Content copied to clipboard');
        setCopyStatus(true);
        setTimeout(() => setCopyStatus(false), 2000); // Reset status after 2 seconds

      }
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <>
      <textarea
        ref={ref}
        id="postContent"
        className={cn("group/area flex-1 overflow-auto resize min-w-[200pt] max-w-[540pt] textarea textarea-bordered w-full min-h-[150px] mb-0")}
        placeholder="Start writing your post here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className={cn("flex space-x-4 mt-2")}>
        <ActionButton type="primary" text="Copy to Clipboard" id="copyToClipboard" onClick={onCopyText}/>
        {copyStatus && 
          <div className="toast toast-top toast-end">
            <div className="alert alert-success">
              <span>Copied to Clipboard.</span>
            </div>
          </div>
        }
        <ActionButton type="secondary" text="Clear" onClick={onClear}/>
      </div>
    </>
  );
});
