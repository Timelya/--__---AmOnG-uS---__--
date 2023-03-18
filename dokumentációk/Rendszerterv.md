<br><br>
<h1 align="center">
ඞ 𝐑𝐞𝐧𝐝𝐬𝐳𝐞𝐫𝐭𝐞𝐫𝐯 𝐝𝐨𝐤𝐮𝐦𝐞𝐧𝐭𝐮𝐦 ඞ
</h1><br>
<h3 align="center">
-- Rendezvény és jegykezelő alkalmazás --
</h3>
<p align="center">
Esemény létrehozása, meghívók küldése, QR kód beolvasásával jelenlét <br>
  vezetése, meghívók jóváhagyása ezzel ebből statisztika létrehozása.
</p>
<p align="center">
_________________________________________________________________________________________________________________________________________________
</p>
<p align="center">𝙳𝙾𝙲𝚄𝙼𝙴𝙽𝚃 𝚅𝙴𝚁𝚂𝙸𝙾𝙽<br>
2023.03.14.</p>
<br><br><br><br>
<h1 align="center">~Szerkesztők~</h1>


| <h3 align="center">Név</h3> | <h3 align="center">Elsődleges feladatok</h3> | <h3 align="center">Másodlagos feladatok</h3> |
|------:|------:|-------|
|Rokob Attila Adrián|Programozás és funkció képessé tételi feladat elemek működtetése|Adatbázis kezelés és tesztelés vezetése|
|Pataki Tamás|Adatbázis alapok és tesztelési jegyzőkönyvek csatolsa és folyamatos frisstése|Dokumentáció ellenőrzése és programozás segítése|
|Petrovics Tímea|Dokumentációs feladatok és kinézeti elemek kezelése|Tesztelések vezetése és programozási részek megoldása|

<br><br><br>

# 1. A rendszer célja 

Leírja hogy mit szeretne megoldani a rendszer. 

A rendszer célja, hogy a felhasználók könnyedén hozzanak létre rendezvényeket és arra hívjanak meg más felhasználókat. Napjainkban nagyon sok a hasonló tematikájú oldal ám ezek legtöbbje fizetett hirdetést tartalmaz melyet mi feltétlenül el szeretnénk kerülni. Generációk közötti hidakat átlépve szándékunk hogy minden korosztály könnyen kezelje az oldalunk ezért fontos számunkra a letisztult felület. 

A rendszer az adatokat egy Web Service segítségével kapja az adatbázisból. Mivel az alkalmazást csak webes felületen, szeretnénk elérhetővé tenni, nem célunk hogy más, például IOS operációs rendszerrel rendelkező eszközön fusson. 

## 1.2. Dokumentumnak nem célja 

Az informatikai rendszertervnek nem célja, hogy az üzleti funkciókat megvalósító algoritmusokat ismertesse. Az informatikai rendszerterv a műszaki kereteket definiálja, de nem tér ki minden funkcionális elem részletes műszaki megvalósítására. 

## 1.3. Felhasznált dokumentumok 

-   Követelmény specifikáció      
-   Rendszerterv 
- Funkcionális specifikáció 
Az értelmezést segítő, az elkészítéshez felhasznált dokumentumok felsorolása. A tartalmi elem megadja azon dokumentumokat, amelyek olyan információkat tartalmaznak, amelyek kiegészítik az informatikai rendszertervet. 

# 2. Projektterv

## 2.1 Projektszerepkörök, felelőségek:
- Scrum masters: Palotai Marcell Martin
- Product owner: Palotai Marcell Martin 
- Üzleti szereplő: Palotai Marcell Martin

## 2.2 Projektmunkások és felelőségek
Frontend: 
- Elsődleges: Petrovics Tímea     
- Másodlagos: Pataki Tamás-
- Harmadlagos: Rokob Attila Adrián 

Backend: 
- Elsődleges: Rokob Attila Adrián   
- Másodlagos: Pataki Tamás   
- Harmadlagos: Petrovics Tímea 

Tesztelés: 
- Elsődleges: Pataki Tamás   
- Másodlagos: Petrovics Tímea
- Harmadlagos: Rokob Attila Adrián

## 2.3 Ütemterv

| Funkció                   | Feladat                  | Prioritás | Becslés | Aktuális becslés | Eltelt idő (nap) | Becsült idő (nap) |
| ------------------------- | ------------------------ | --------- | ------- | ---------------- | ---------------- | ----------------- |
| Követelmény specifikáció  | Megírás                  | 2         | 2       | 1,5              | 2                | 2                 |
| Funkcionális specifikáció | Megírás                  | 1,5       | 1       | 1,5              | 1                | 1                 |
| Rendszerterv              | Megírás                  | 1         | 2       | 2                | 1                | 3                 |
| Program                   | Képernyőterv elkészítése | 3         | 4       | 5                | 5                | 3                 |
| Program                   | Prototípus elkészítése   | 4         | 8       | 9                | 8                | 8                 |
| Program                   | Alapfunkciók elkészítése | 3         | 8       | 8                | 9                | 7                  |

## 2.4 Mérföldkövek

02.28.~ Az ötlet gondolatának megszületése ~ 

03.07. ~ Frontend tervének megbeszélése ~ 

03.14. ~ Dokumentáció elkezdése ~ 

03.21 ~ Dokumentáció befejezése ~!

03.28 ~ Dokumentáció helyesírásának javítása  ~ 

04.04. ~ Programkód elkezdése ~! 

04.11. ~ Program funkciók hozzáadása ~ 

04.18. ~ Utolsó funkciók hozzáadása ~ 

04.25.  ~ Projekt funkciók bemutatása ~ 

05.02.  ~ Végleges kinézet hozzáadása ~

05.09. ~ Végső tesztelések ~ 

05.16. ~ Hibajavítások ~ 

05.23. ~ Végleges program bemutatása ~!

# 3. Üzleti folyamatok modellje 

Bővebben kifejtjük azt a folyamatot, amit a programunk szeretne kibővíteni.  

A kezdeti szakaszban meg kell határozni a felhasználók igényeket és az elvárásokat. Ez magában foglalja a rendezvény típusát, a résztvevők számát, az esemény időpontját, a helyszínt és az egyéb szolgáltatásokat. A felhasználó tervezik meg az eseményt, és meghatározzák a részleteket. 

A felhasználó a főoldalon tud bejelentkezni (e-mail, jelszó), valamint a regisztrációt megkezdeni, mely egy új oldalon folytatódik (felhasználónév, jelszó, e-mail). Bejelentkezést követően lehetőséget, hozzáférést kap az oldal további funkcióihoz. Az ügyfélnek lehetősége van a főoldalon rendezvényt létrehozni és az igénye szerint variálni. Az ügyfél megadja a rendezvény típusát, a résztvevők számát, az esemény időpontját, a helyszínt és az egyéb szolgáltatásokat mint például a ruházati stílust.
