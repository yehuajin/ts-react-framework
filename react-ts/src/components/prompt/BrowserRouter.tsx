import React from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';

export interface BrowserRouterProps {
  basename?: string;
  children?: React.ReactNode;
}

const browserHistory = createBrowserHistory();

const BrowserRouter: React.FC<BrowserRouterProps> = ({ basename, children }: BrowserRouterProps) => {
  const historyRef = React.useRef<any>();
  if (historyRef.current == null) {
    historyRef.current = browserHistory;
  }

  const history = historyRef.current;
  const [state, setState] = React.useState({
    action: history.action,
    location: history.location,
  });

  React.useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router basename={basename} location={state.location} navigationType={state.action} navigator={history}>
      {children}
    </Router>
  );
};

export { browserHistory, BrowserRouter };
