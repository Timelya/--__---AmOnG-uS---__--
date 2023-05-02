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
    const cardNameElement = document.getElementById('cardName');
    const cardModeDataElement = document.getElementById('cardModeData');
  
    //pink
    if (isDarkMode) {
      body.style.marginLeft = '100px';
          body.style.marginTop = '50px';
          body.style.marginRight = '5px';
          body.style.backgroundColor = '#fbdcdc';
          body.style.color = '#24031c';

      body?.classList.add('dark-mode');
      cardNameElement?.classList.add('dark-mode');
      cardModeDataElement?.classList.add('dark-mode');
    }
    //normal
    else {
      body.style.backgroundColor = '#333';

      body.style.color = '#efefaa';
      body.style.marginLeft = '100px';
      body.style.marginTop = '50px';
      body.style.marginRight = '5px';
      body?.classList.remove('dark-mode');
      cardNameElement?.classList.remove('dark-mode');
      cardModeDataElement?.classList.remove('dark-mode');
    }

  }, [isDarkMode]);
  

  return (
  <div>
        <label className="container">

        <input id="check" type="checkbox" onChange={handleHatterValtozas}></input>
        <span></span>
    
        <label htmlFor="check" className="shadow"></label>
    </label>
    </div>

  );
}

export default DarkMode;
