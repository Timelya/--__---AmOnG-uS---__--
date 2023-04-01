import { useState } from 'react';

function DarkMode() {
  const [hatterkep, setHatterkep] = useState("linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)");

  // Kapcsoló állapotának figyelése
  function handleHatterValtozas(e) {
    if (e.target.checked) {
      setHatterkep("linear-gradient(0deg, rgba(0,56,168,1) 0%, rgba(155,79,150,1) 50%, rgba(214,2,112,1) 100%)"); // Második gradiens
    } else {
      setHatterkep("linear-gradient(0deg, rgba(128,0,128,1) 0%, rgba(255,255,255,1) 35%, rgba(163,163,163,1) 60%, rgba(0,0,0,1) 100%)"); // Első gradiens
    }
  }

  return (
    <body style={{backgroundImage: `${hatterkep}`, backgroundSize: 'cover'}}>
      <input type="checkbox" id="hatterkapcsolo" onChange={handleHatterValtozas} />
      <label htmlFor="hatterkapcsolo">Háttérgradiens váltása</label>
    </body>
  );
}

export default DarkMode;