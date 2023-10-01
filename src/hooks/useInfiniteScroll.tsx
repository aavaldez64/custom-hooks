import { useEffect, useRef } from "react";

export const useInfiniteScroll = (action: Function) => {
    const elementRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting) {
                action();
                //* (OPTIONAL) Disconnect observer
                observer.disconnect();  
            } 
          });
      
          observer.observe(elementRef.current!);
          return () => observer.disconnect();
    }, [])
    
    return {
        elementRef,

    }
}
