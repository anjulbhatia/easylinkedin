import { cn } from '../../../utils';
import { BsTypeBold, BsTypeItalic, BsTypeUnderline, BsTypeStrikethrough } from 'react-icons/bs';
import { TooltipButton } from './TooltipButton';

export function MoreFormattingButtons ({ onTransform }) {
    return (
        <div className="flex items-center p-2 bg-transparent absolute mt-20 gap-1">
          <TooltipButton id="boldSerifBtn" icon="𝐁" label="Bold Serif" onClick={() => onTransform('boldSerif')} />
          <TooltipButton id="italicSerifBtn" icon="𝐼" label="Italic Serif" onClick={() => onTransform('italicSerif')} />
          <TooltipButton id="boldItalicSerifBtn" icon="𝒃" label="Bold Italic Serif" onClick={() => onTransform('boldItalicSerif')} />
          <TooltipButton id="strikethroughBtn" icon={<BsTypeStrikethrough/>} label="Strikethrough" onClick={() => onTransform('strikethrough')} /> 
          <TooltipButton id="scriptBtn" icon="𝙼" label="Mono" onClick={() => onTransform('mono')} />
          <TooltipButton id="scriptBtn" icon="𝓢" label="Style" onClick={() => onTransform('script')} />
          <TooltipButton id="fullwidthBtn" icon="Ａ" label="Fullwidth" onClick={() => onTransform('fullwidth')} />
        </div>
    )
}