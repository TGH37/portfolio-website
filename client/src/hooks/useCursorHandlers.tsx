import { useContext, useCallback, MouseEvent, MouseEventHandler } from "react";
import { CursorCtx } from "../contexts/CursorCtx";
import styles from '../styles/css/misc.module.css'

interface Props {
    onMouseEnter?: Function
    onMouseLeave?: Function
}

const useCursorHandlers = (options: Props = {}) => {
  const [, setIsHoverActive, , setHoverElement] = useContext(CursorCtx);

  const toggleCursor = () => {
    setIsHoverActive(({ active: isHoverActive }) => ({ active: !isHoverActive }));
  };

  const onMouseEnter = useCallback((event: Event | MouseEvent) => {
    const { target } = event;
    if (options.onMouseEnter) {
      options.onMouseEnter(event);
    }
    toggleCursor();
    if(!target) return;
    const targetElement = target as HTMLElement;
    setHoverElement(targetElement)
    console.log("enter")
  }, []);
  
  const onMouseLeave = useCallback((event: Event | MouseEvent) => {
    
    if (options.onMouseLeave) {
      options.onMouseLeave(event);
    }
    toggleCursor();
    setHoverElement(null)
    console.log("leave")
  }, []);
  
  return { onMouseEnter, onMouseLeave };
};

export default useCursorHandlers;