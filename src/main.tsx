import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Disable right-click context menu globally
document.addEventListener('contextmenu', (e) => e.preventDefault());

// Block common devtools keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // F12
  if (e.key === 'F12') { e.preventDefault(); return; }
  // Ctrl+Shift+I / Cmd+Option+I
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'I') { e.preventDefault(); return; }
  // Ctrl+Shift+J
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'J') { e.preventDefault(); return; }
  // Ctrl+Shift+C
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'C') { e.preventDefault(); return; }
  // Ctrl+U (view source)
  if ((e.ctrlKey || e.metaKey) && e.key === 'u') { e.preventDefault(); return; }
  // Ctrl+S (save page)
  if ((e.ctrlKey || e.metaKey) && e.key === 's') { e.preventDefault(); return; }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
