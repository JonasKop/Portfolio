import { Ref, useEffect, useRef } from 'react';

const shadowWidth = 30;
function calcWidth(offset: number) {
  return Math.round(offset > shadowWidth * 4 ? shadowWidth : offset / 4);
}

interface UseScrollableShadowsType {
  cardsRef: Ref<HTMLDivElement>;
  leftRef: Ref<HTMLDivElement>;
  rightRef: Ref<HTMLDivElement>;
}

export default function useScrollableShadows(): UseScrollableShadowsType {
  const cardsRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (leftRef.current) leftRef.current.style.width = '0px';
    if (rightRef.current) rightRef.current.style.width = `${calcWidth(100)}px`;
  }, []);

  useEffect(() => {
    cardsRef.current?.addEventListener('scroll', () => {
      if (cardsRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = cardsRef.current;
        const leftOffset = Math.round(calcWidth(scrollLeft));
        const rightOffset = Math.round(calcWidth(scrollWidth - clientWidth - scrollLeft));
        if (leftRef.current) leftRef.current.style.width = `${leftOffset}px`;
        if (rightRef.current) rightRef.current.style.width = `${rightOffset}px`;
      }
    });
  }, [cardsRef]);
  return { leftRef, rightRef, cardsRef };
}
