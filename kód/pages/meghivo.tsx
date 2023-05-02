import React, { useState } from 'react';
import Navbar from "./Components/Navbar";
import DarkMode from "./Components/DarkMode";

const MeghivoElfogadoOldal = () => {
  const [meghivasElfogadva, setMeghivasElfogadva] = useState(false);

  const elfogadasraKattintas = () => {
    setMeghivasElfogadva(true);
  };

  return (
    <div>
        <Navbar />
        <DarkMode />
      {!meghivasElfogadva ? (
        <div>
            <h1 className="mx-auto text-2xl font-bold text-center mt-4">
            Meghívás elfogadása
						</h1>
          <p>Kedves Felhasználó,</p>
          <p>
            Ön egy meghívást kapott az eseményre. Kérjük, erősítse meg részvételét az alábbi gomb
            megnyomásával:
          </p>
          <br></br>
          <button onClick={elfogadasraKattintas}>Meghívás elfogadása</button>
        </div>
      ) : (
        <div>
          <h1>Köszönjük a meghívás elfogadását!</h1>
          <p>Kedves Felhasználó,</p>
          <p>
            Örömmel értesítjük, hogy meghívását elfogadták. Várjuk részvételét az eseményen.
          </p>
        </div>
      )}
    </div>
  );
};

export default MeghivoElfogadoOldal;
