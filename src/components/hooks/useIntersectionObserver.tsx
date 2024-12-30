import { useEffect, useRef } from "react";

function buildThersoldList(numSteps: number) {
  let ratio;
  const thresholds = [];

  for (let i = 1.0; i <= numSteps; i++) {
    ratio = i / numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}

export const useIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit,
  thresholdNum: number
) => {
  const ref = useRef(null);
  if (thresholdNum < 1.0) {
    options.threshold = [thresholdNum];
  } else {
    options.threshold = buildThersoldList(thresholdNum);
  }
  //   console.log(options.threshold);
  useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver(
      callback,
      options
    );
    const currentRef = ref.current;

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [callback, options]);

  return ref; // attach it to the obsevered element
};
