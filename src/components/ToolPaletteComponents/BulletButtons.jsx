import { cn } from '../../../utils';
import { TooltipButton } from './TooltipButton';

export function BulletButtons ({ onHandleBullets }) {
    return (
      <div className="flex items-center p-2 bg-transparent absolute mt-20 gap-1">
      <TooltipButton id="bulletBtn" icon="•" onClick={() => onHandleBullets('bullet')} />
      <TooltipButton id="fancyBulletBtn" icon="▪️ " onClick={() => onHandleBullets('squareBullet')} />
      <TooltipButton id="fancyBulletBtn" icon="☑️ " onClick={() => onHandleBullets('tickBullet')} />
      <TooltipButton id="sectionBulletBtn" icon="#" onClick={() => onHandleBullets('sectionBullet')} />
    </div>
    )
}