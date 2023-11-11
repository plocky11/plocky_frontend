import { createContext, useContext, useMemo, useState } from 'react';

const PloggingStartContext = createContext();
const PloggingValueContext = createContext();
const PloggingActionsContext = createContext();

export function usePloggingStart() {
  const value = useContext(PloggingStartContext);
  if (!value) {
    throw new Error('usePloggingStart should be used within PloggingProvider');
  }
  return value;
}

export function usePloggingValue() {
  const value = useContext(PloggingValueContext);
  if (!value) {
    throw new Error('usePloggingValue should be used within PloggingProvider');
  }
  return value;
}

export function usePloggingActions() {
  const value = useContext(PloggingActionsContext);
  if (!value) {
    throw new Error(
      'usePloggingActions should be used within PloggingProvider',
    );
  }
  return value;
}

export function PloggingProvider({ children }) {
  const [ploggingLocations, setPloggingLocations] = useState([]);
  const [isPloggingStarted, setIsPloggingStarted] = useState(false);

  function add({ lat, lng }) {
    setPloggingLocations(prev => [
      ...prev,
      {
        lat,
        lng,
      },
    ]);
    const body = JSON.stringify(ploggingLocations);
    localStorage.setItem('plogging_path', body);
  }

  const ploggingStartValue = useMemo(
    () => [isPloggingStarted, setIsPloggingStarted],
    [isPloggingStarted, setIsPloggingStarted],
  );

  return (
    <PloggingActionsContext.Provider value={add}>
      <PloggingValueContext.Provider value={ploggingLocations}>
        <PloggingStartContext.Provider value={ploggingStartValue}>
          {children}
        </PloggingStartContext.Provider>
      </PloggingValueContext.Provider>
    </PloggingActionsContext.Provider>
  );
}
