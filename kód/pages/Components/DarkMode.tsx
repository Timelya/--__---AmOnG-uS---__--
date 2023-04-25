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
      body.style.backgroundColor = '#82cae0';
      body.style.color = '#efefaa';
      body.style.marginLeft = '100px';
       }
      }
  }, [isDarkMode]);

  return (

      <label className="container">

      <input id="check" type="checkbox" onChange={handleHatterValtozas}></input>
      <span></span>
  
      <label htmlFor="check" className="shadow"></label>
  </label>

  );
}

export default DarkMode;
