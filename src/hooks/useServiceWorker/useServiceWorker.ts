import {useEffect} from 'react';
import {getSerwist} from 'virtual:serwist';

export function useServiceWorker() {
  useEffect(() => {
    const loadSerwist = async () => {
      if ('serviceWorker' in navigator) {
        const serwist = await getSerwist();

        serwist?.addEventListener('installed', () => {
          console.log('Serwist installed!');
        });

        serwist?.register();
      }
    };

    loadSerwist();
  }, []);
}
