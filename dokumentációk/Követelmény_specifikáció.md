<br><br>
<h1 align="center">
ඞ 𝐊ö𝐯𝐞𝐭𝐞𝐥𝐦é𝐧𝐲 𝐒𝐩𝐞𝐜𝐢𝐟𝐢𝐤á𝐜𝐢ó 𝐝𝐨𝐤𝐮𝐦𝐞𝐧𝐭𝐮𝐦 ඞ
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


A követelmény specifikáció dokumentumban a rendszer szolgáltatások és működési feltételek meghatározása a megrendel számára a cél. A dokumentum során összekapcsolódik a rendszer és szoftver tervezés folyamata.
# 1. Áttekintés
Ebben a fejezetben röviden ismertetem a projektünk egészét. Milyen technológiákat szeretnénk alkalmazni, hogyan fog működni az alkalmazásunk és hasonlók.

A feladat, hogy egy olyan oldalt kell tervezni, amely kiszolgálja egy átlagos/kezdő rendezvény létrehozó ember igényeit, ingyen és egységesen. Tehát a program két részre bomlik. Az egyik rész az, amit a felhasználó használ és lát. A rendszer ezen része, legyen annyira egyszerűen kezelhető, hogy használatához akár ne is legyen szükség külső segítségre. A tervbe van több különböző kategória létrehozása rendezvények szerint. A felhasználók tudják megtekinteni a számukra elérhető rendezvények listáját. A rendszer másik része pedig az admin részére érhető el. Az admin látja az összes regisztrált felhasználó adatát. Valamint kezelheti a felhasználók adatait. Változtathat rajta pl adhat admin jogot vagy törölheti is őket. A felhasználó által létrehozott rendezvényeket is tudja szerkeszteni és törölni.


# 2. A jelenlegi helyzet leírása
Az elvárás egy rendezvény kezelő oldal ahol lehetőség van rendezvény létrehozására, meghívók küldése, QR kód beolvasásával jelenlét vezetése és meghívók jóváhagyása ezzel együtt ebből statisztika létrehozása.

## 2.1		A dokumentum célja
A követelményspecifikáció dokumentáció, egy olyan folyamat, amely az összes rendszer- és felhasználói követelményt egy dokumentum formájában rögzíti. Ezeknek a követelményeknek világosnak, teljesnek, átfogónak és következetesnek kell lenniük. 
A rögzítési tevékenység során minden igényt összegyűjtünk különböző forrásokból. Az elemzési és tárgyalási tevékenységek során elemezzük és megértjük ezeket a követelményeket. Most el kell készítenünk egy hivatalos dokumentumot, amely elmagyarázza ezeket a követelményeket. Ez a követelmény specifikációja. Pontosabban, ez az összes felhasználói és rendszerigény és korlát egyértelmű és pontos dokumentálása.

## 2.2		Projekt hatóköre
**A projekt célja:** A projekt célja egy rendezvény kezelő oldal létrehozása melyben
lehetősége van az oldalt használó személyeknek saját eseményt létrehozni és arra
meghívókat küldeni a kívánt személyeknek. Valamint amennyiben őket hívják meg egy
eseményre a kapott meghívót elfogadni.<br>

**A projekt végeredménye:** A projekt által elérni kívánt termék funkciói az esemény
létrehozása, meghívó küldése és elfogadása valamint QR kód segítségével jelenlét
vezetése.<br>

Projektek termékei:
* Funkcionális specifikáció
* Követelmény specifikáció
* Rendszerterv
* tesztjegyzőkönyvek,
* programkód,
* adatbázis,<br>

**A projekt korlátai:** Projektünk költségvetése nagyon alacsony megközelíti a nullát ugyanis
minden szükséges eszköz a rendelkezésünkre áll. Viszont az időkorlátokat négy szakaszra
bontottuk.<br>

_Március 21_-ra tervezzük a dokumentáció teljes elkészitést, pontositva a Funkcionális
specifikáció, Követelmény specifikáció és Rendszerterv megléte az elvárt.<br>
_Április 4_-re a programunk elkezdése és némely funkció működése a terv.<br>
_Április 25_-én a programunk legtöbb funkciója működik és használatra kész.<br>
_Május 23_ az utolsó leadási határidőre a program hiba mentes és a kinézet terv szerint jelenik meg.<br>

## 2.3		Kapcsolódó dokumentumok
| Név                         | Leírás                                                                                                     |
|-----------------------------|------------------------------------------------------------------------------------------------------------|
|  Funkcionális specifikáció, | egy olyan dokumentum, ami meghatározza azokat a funkciókat, amiket a rendszernek meg kell tudni valósítani |
| Követelmény specifikáció,   | tartalmazza az összes követelményt, amelyet a termék tervezésére és ellenőrzésére kell támasztani valamint egyéb kapcsolódó információkat is, amelyek a termék tervezéséhez, ellenőrzéséhez és karbantartásához szükségesek   |
| Rendszerterv,               | a fejlesztési folyamatnak az a szakasza, melyben a fejlesztés tárgyának felső szintű definíciója és terve kerül meghatározásra|
| Teszt jegyzőkönyv,          | tesztesetek leírását tartalmazza |

# 3. Vágyálomrendszer
A vágyálom rendszer azért felelős, hogy kifejtsük benne mit szeretnénk célul a programunkban a 100%-ban ideális esetben.
A projekt célja egy olyan rendszer, ami rendezvények létrehozására és szerkesztésére szolgál. A rendszer weben lesz elérhető. Regisztrációt követően a felhasználó létrehozhat rendezvényeket és meghivhat arra más felhasználókat. Továbbá a felhasználónak joga van természetesen a meghívó elfogadására vagy elutasítására.  Látványos, színes felülettel rendelkezik az oldal, hogy felkeltse a felhasználók figyelmét. A rendszer lehetőséget nyújt a felhasználók adatainak módosítására valamint van egy admin felülete is, ahol az admin fiókkal bejelentkezett felhasználó láthatját az üsszes rendezvényt és azt törölni tudják.

3.1 Rendszer szereplői
![]()
DIAGRAM CSATOLÁS!!!

# 4. Jelenlegi üzleti folyamatok modellje
Bővebben kifejtjük azt a folyamatot, amit a programunk szeretne kibővíteni. 

A kezdeti szakaszban meg kell határozni a felhasználók igényeket és az elvárásokat. Ez magában foglalja a rendezvény típusát, a résztvevők számát, az esemény időpontját, a helyszínt és az egyéb szolgáltatásokat. A felhasználó tervezik meg az eseményt, és meghatározzák a részleteket.


# 5. Igényelt üzleti folyamatok modellje
Az előző pontban leírtuk a jelenlegi üzleti folyamatok modelljét most ezt azt fejtjük ki, hogy hogyan szeretnénk ezt kibővíteni.
A felhasználó a főoldalon tud bejelentkezni (e-mail, jelszó), valamint a regisztrációt megkezdeni, mely egy új oldalon folytatódik (felhasználónév, jelszó, e-mail). Bejelentkezést követően lehetőséget, hozzáférést kap az oldal további funkcióihoz. Az ügyfélnek lehetősége van a főoldalon rendezvényt létrehozni és az igénye szerint variálni. Az ügyfél megadja a rendezvény típusát, a résztvevők számát, az esemény időpontját, a helyszínt és az egyéb szolgáltatásokat mint például a ruházati stílust.

# 6. Követelménylista
## 6.1. Felhasználói követelmények
A program egy számítógépes vagy telefonos böngészőben futtatható. Előre kreált kategóriákból a felhasználó ki válassza a rendezvényének témáját. Az meghívottak számára láthatóaknak a rendezvény paraméterei (pl. téma, név, öltözködési követelmények stb.). A meghívók elfogadása a rendezvény kezdetéig lehetséges. A felhasználó tudja saját rendezvényeit utólagosan szerkeszteni és további embereket meghívni arra valamint akár törölni a rendezvényt vagy a meghivottakat.

## 6.2. Use Case diagram
DAIAGRAMM CSATOLÁS

## 6.3 Rendszerkövetelmények
A rendszer a regisztrált fiókokat két nagy csoportra ossza, admin és felhasználó. Továbbá a felhasználót meghívott és szervező csoportra szedi szét. Az admin a rendszer karbantartásért felelős, minden olyan joggal rendelkezik amivel a felhasználó is sótt még többel is hiszen ő minden felhasználó felett rendelkezik. A felhasználó egyik alcsoportja a szervező aki létrehoz egy rendezvényt megadott paraméterek alapján majd arra meghívja a többi felhasználót akik a meghívottak szerepkörét töltik be. A meghívott eldöntheti, hogy elfogadja e a meghívást vagy elutasítja azt.

# 7. Fogalomszótár

| Kifejezés | Meghatározás |
|----------:|------------:|
| WEB-SERVICE | különböző programnyelveken írt és különböző platformokon futó szoftveralkalmazások interneten keresztül történő adat cseréjére használt webszolgáltatások|
| MULTIPLATFORM | több környezetben futtatható alkalmazás |
| MAIN MENU | a főmenü, amely a weboldal indításakor megjelenik |
| WEBOLDAL | jelen helyzetben egy felület mely rendezvények létrehozására alkalmas |
| FRONT_END | a programoknak, weboldalaknak az a része, amelyik a felhasználóval közvetlenül kapcsolatban van. Feladata az adatok megjelenése, befogadása a felhasználó felől |
| BACK_END | a programoknak, weboldalaknak a hátsó, a felhasználó elől rejtett, a tényleges számításokat végző része. Feladata a front‑end felől érkező adatok feldolgozása, és az eredményeknek a front‑end felé történő visszajuttatása |

# 8. Forgatókönyvek
## 8.1. Regisztráció
Belép a felhasználó az oldalra. A szeme elé tárul egy regisztrációs felület ahol létre tudja hozni a felhasználó fiókját néhány adat megadását követően. 

## 8.2. Rendezvény létrehozás
Amennyiben már regisztrálva van a felhasználó a rendszerben, azonnal létre tudja hozni a saját rendezvényét néhány adat megadásával. 


## 8.3. Profil szerkesztés
Ha a felhasználó a felhasználó változtatni szeretne az adatain vagy további adatokat szeretne megadni akkor arra a profil szerkesztése menüben van lehetősége.

## 8.4. Meghívó elfogadás
A felhasználók meghívhatnak más felhasználókat rendezvényeikre mely meghívók külön jelennek meg. A meghívók menüben a rendezvények néhány adata és egy elfogadás vagy elutasítás gombot látnak. Amivel interakcióba lépve eldönthetik hogy elfogadják vagy elutasitjá a megivást.

