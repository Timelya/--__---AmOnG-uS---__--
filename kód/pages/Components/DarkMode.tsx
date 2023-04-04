import { useEffect, useState } from 'react';

function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Kapcsoló állapotának figyelése
  function handleHatterValtozas(e) {
    setIsDarkMode(e.target.checked);
  }

  // Oldal háttérszínének beállítása a sötét módban
  useEffect(() => {
    const body = document.querySelector('body');
    if (body?.style) {
      if (isDarkMode) {
      body.style.backgroundColor = '#333';
     } else {
      body.style.backgroundColor = '#fff';
       }
      }
  }, [isDarkMode]);

  return (
    <div>
      <input type="checkbox" id="hatterkapcsolo" onChange={handleHatterValtozas} />
      <label htmlFor="hatterkapcsolo" className="text-black">Szinnnnnnnnnnnnnnnnnnnnnnnnnnnn!!</label>
    </div>
  );
}

export default DarkMode;
