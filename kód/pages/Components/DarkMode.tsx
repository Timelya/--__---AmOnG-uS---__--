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
      body.style.marginLeft = '100px';
        body.style.backgroundColor = '#ffffe0';
        body.style.color = '#313123';
        
     } else {
      body.style.backgroundColor = '#333';
      body.style.color = '#efefaa';
      body.style.marginLeft = '100px';
       }
      }
  }, [isDarkMode]);

  return (
    <div>
      <input type="checkbox" id="hatterkapcsolo" onChange={handleHatterValtozas} />
      <label htmlFor="hatterkapcsolo">Szinnn!!</label>
    </div>
  );
}

export default DarkMode;
