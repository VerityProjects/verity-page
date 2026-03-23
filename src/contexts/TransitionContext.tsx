import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { motion, useReducedMotion } from "framer-motion";

type TransitionContextValue = {
  runTransition: (action?: () => void) => void;
};

const ACTION_DELAY_MS = 320;
const TOTAL_DURATION_MS = 920;

const TransitionContext = createContext<TransitionContextValue | null>(null);

export function TransitionProvider({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  const [transitionKey, setTransitionKey] = useState<number | null>(null);
  const isTransitioningRef = useRef(false);

  const runTransition = useCallback(
    (action?: () => void) => {
      if (reduceMotion) {
        action?.();
        return;
      }

      if (isTransitioningRef.current) {
        return;
      }

      isTransitioningRef.current = true;
      const key = Date.now();
      setTransitionKey(key);

      window.setTimeout(() => {
        action?.();
      }, ACTION_DELAY_MS);

      window.setTimeout(() => {
        setTransitionKey((currentKey) => (currentKey === key ? null : currentKey));
        isTransitioningRef.current = false;
      }, TOTAL_DURATION_MS);
    },
    [reduceMotion],
  );

  const value = useMemo(() => ({ runTransition }), [runTransition]);

  return (
    <TransitionContext.Provider value={value}>
      {children}
      {transitionKey !== null && (
        <>
          <motion.div
            key={`transition-screen-${transitionKey}`}
            aria-hidden="true"
            className="pointer-events-none fixed inset-x-0 top-0 z-[80] h-screen origin-top bg-background"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: [0, 1, 1, 0] }}
            transition={{
              duration: TOTAL_DURATION_MS / 1000,
              times: [0, 0.35, 0.65, 1],
              ease: [0.83, 0, 0.17, 1],
            }}
          />
          <motion.div
            key={`transition-line-${transitionKey}`}
            aria-hidden="true"
            className="pointer-events-none fixed inset-x-0 top-0 z-[81] h-1 origin-left bg-primary"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: [0, 1, 1, 0] }}
            transition={{
              duration: TOTAL_DURATION_MS / 1000,
              times: [0, 0.3, 0.75, 1],
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </>
      )}
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  const context = useContext(TransitionContext);

  if (!context) {
    throw new Error("useTransition must be used within TransitionProvider");
  }

  return context;
}
