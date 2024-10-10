import React, { useState } from 'react';
import { BsTypeBold, BsTypeItalic, BsTypeUnderline, BsDroplet } from 'react-icons/bs';
import { TooltipButton } from './TooltipButton';

export function FormattingButtons ({ onTransform , onToggleMoreMenu }) {
    const [showMore, setShowMore] = useState(false);

    return (
      <div className="formatting-buttons flex items-center space-x-2">
        <TooltipButton id="boldBtn" icon={<BsTypeBold />} label="Bold" onClick={() => onTransform('bold')} />
        <TooltipButton id="italicBtn" icon={<BsTypeItalic />} label="Italic" onClick={() => onTransform('italic')} />
        <TooltipButton id="underlineBtn" icon={<BsTypeUnderline />} label="Underline" onClick={() => onTransform('underline')} />
      </div>
    );
  };
  