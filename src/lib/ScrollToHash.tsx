import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scrolls to hash target (#id) after navigation; falls back to top.
export const ScrollToHash: React.FC = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        // small timeout to allow layout/React paint
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [hash]);
  return null;
};
