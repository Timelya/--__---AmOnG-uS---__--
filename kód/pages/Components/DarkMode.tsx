import { useState } from 'react';

function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Kapcsoló állapotának figyelése
  function handleHatterValtozas(e) {
    setIsDarkMode(e.target.checked);
  }

  return (
    <body className={isDarkMode ? 'dark-mode' : ''}>
      <input type="checkbox" id="hatterkapcsolo" onChange={handleHatterValtozas} />
      <label htmlFor="hatterkapcsolo">Háttérgradiens váltása</label>
    </body>
  );
}

export default DarkMode;
