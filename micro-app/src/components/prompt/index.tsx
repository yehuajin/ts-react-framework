import { useContext, useEffect, useCallback } from 'react';
import { UNSAFE_NavigationContext as NavigationContext } from 'react-router-dom';

// eslint-disable-next-line
export function useBlocker(blocker: any, when = true): void {
  const { navigator } = useContext(NavigationContext);

  useEffect(() => {
    if (!when) return;
    const unblock = (navigator as any).block((tx: any) => {
      const autoUnblockingTx = {
        ...tx,
        retry() {
          unblock();
          tx.retry();
        },
      };
      blocker(autoUnblockingTx);
    });

    return unblock;
  }, [navigator, blocker, when]);
}

// eslint-disable-next-line
export function usePrompt(message: any, when = true): any {
  const { basename } = useContext(NavigationContext);

  const blocker = useCallback(
    (tx: any) => {
      if (typeof message === 'function') {
        let targetLocation = tx?.location?.pathname;
        if (targetLocation.startsWith(basename)) {
          targetLocation = targetLocation.substring(basename.length);
        }
        if (message(targetLocation)) {
          tx.retry();
        }
      } else if (typeof message === 'string') {
        // eslint-disable-next-line no-alert
        if (window.confirm(message)) {
          tx.retry();
        }
      }
    },
    [message, basename],
  );

  return useBlocker(blocker, when);
}
