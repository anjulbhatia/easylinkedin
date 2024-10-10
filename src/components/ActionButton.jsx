import { cn } from '../../utils';

export function ActionButton ({ type, text, id, onClick }) {
    const buttonClass = type === 'primary' 
    ? "btn action-button-primary" 
    : "btn action-button-secondary";

  return (
    <button className={cn(buttonClass)} id={id} onClick={onClick}>
      {text}
    </button>
  ); 
}
