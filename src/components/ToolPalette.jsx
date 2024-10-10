import React, { useState, useEffect } from 'react';
import { cn } from '../../utils';
import { BsType } from 'react-icons/bs';
import { FaListUl, FaListOl, FaQuoteLeft } from 'react-icons/fa';
import { MdEmojiEmotions } from 'react-icons/md';
import EmojiPicker from 'emoji-picker-react';
import { FormattingButtons } from './ToolPaletteComponents/FormattingButtons';
import { MoreFormattingButtons } from './ToolPaletteComponents/MoreFormattingButtons';
import { BulletButtons } from './ToolPaletteComponents/BulletButtons';
import { TooltipButton } from './ToolPaletteComponents/TooltipButton';

export function ToolPalette({ onTransform, onEmojiSelect, onHandleBullets }) {
  const [showMore, setShowMore] = useState(false);
  const [showBullets, setShowBullets] = useState(false);
  const [showEnumerate, setShowEnumerate] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  // Function to toggle emoji picker
  const openEmojiKeyboard = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  return (
    <div className={cn("flex items-center justify-center bg-base-100 my-1 p-1 space-x-2 group -z-[999px]")}>
      {/* Main Toolbar */}
      <FormattingButtons onTransform = {onTransform} />
      <TooltipButton id="moreBtn" icon={<BsType />} label="More formatting options" onClick={() => {setShowMore(!showMore); setShowBullets(false) ; setShowEnumerate(false)}} />
      <TooltipButton id="quoteBtn" icon={<FaQuoteLeft />} label="Blockquote" onClick={() => onHandleBullets('blockquote')} />
      <TooltipButton id="emojiBtn" icon={<MdEmojiEmotions />} label="Emoji" onClick={openEmojiKeyboard}/>

      {/* Sub-Palette: More */}
      {showMore && (
        <MoreFormattingButtons onTransform = {onTransform} />
      )}

      {/* Sub-Palette: Bullets */}
      {showBullets && (
        <BulletButtons onHandleBullets={onHandleBullets}/>
      )}

      {/* Sub-Palette: Enumerate */}
      {showEnumerate && (
        <div className="grid grid-rows-2 grid-flow-col items-center p-2 bg-transparent absolute mt-28 gap-1">
          {[...Array(10).keys()].map((num) => (
            <TooltipButton key={`${num}️⃣`} id={`num${num}Btn`} icon={`${num}️`} onClick={() => onHandleBullets(`num${num}`)} />
          ))}
        </div>
      )}

      {/* Sub-Palette: Emoji Selector */}
      {showEmojiPicker && (
        <div className={cn("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50")}>
          <span className={cn("flex items-center fixed z-50 -top-5 right-1 cursor-pointer px-2 font-mono")} onClick={() => {setShowEmojiPicker(false)}}>&lt;Close Emoji Picker&gt;</span>
          <EmojiPicker 
            reactionsDefaultOpen={false} emojiStyle={"google"} suggestedEmojisMode={'recent'}
            height={400} width={300}
            onEmojiClick={(emojiObject, event) => {
              onEmojiSelect(emojiObject.emoji); // Pass selected emoji to parent
              setShowEmojiPicker(false); // Close picker after selection
            }}
          />
        </div>
      )}
    </div>
  );
}
