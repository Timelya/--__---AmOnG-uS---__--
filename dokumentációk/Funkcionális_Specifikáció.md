<br>
<h3 align="center">
  ,.-~*´¨¯¨`*·~-.¸-(...𝔼𝕤𝕫𝕥𝕖𝕣𝕙á𝕫𝕪 𝕂á𝕣𝕠𝕝𝕪 𝕂𝕒𝕥𝕠𝕝𝕚𝕜𝕦𝕤 𝔼𝕘𝕪𝕖𝕥𝕖𝕞...)-,.-~*´¨¯¨`*·~-.¸

</h3>

<h4 align="center">
ඞ csapat
</h4><br>

<h1 align="center">
𝐅𝐮𝐧𝐤𝐜𝐢𝐨𝐧á𝐥𝐢𝐬 𝐒𝐩𝐞𝐜𝐢𝐟𝐢𝐤á𝐜𝐢ó 𝐝𝐨𝐤𝐮𝐦𝐞𝐧𝐭𝐮𝐦
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
2023.03.07</p>
<br><br><br><br>
<h1 align="center">~Szerkesztők~</h1>


| <h3 align="center">Név</h3> | <h3 align="center">Elsődleges feladatok</h3> | <h3 align="center">Másodlagos feladatok</h3> |
|------:|------:|-------|
|Rokob Attila Adrián|Programozás és funkció képessé tételi feladat elemek működtetése|Adatbázis kezelés és tesztelés vezetése|
|Pataki Tamás|Adatbázis alapok és tesztelési jegyzőkönyvek csatolsa és folyamatos frisstése|Dokumentáció ellenőrzése és programozás segítése|
|Petrovics Tímea|Dokumentációs feladatok és kinézeti elemek kezelése|Tesztelések vezetése és programozási részek megoldása|

<br><br><br>





# 1. Jelenlegi helyzet leírása
Egy rendezvény kezelő oldal ahol lehetőség van rendezvény létrehozására, meghívók küldése, QR kód beolvasásával
jelenlét vezetése és meghívók jóváhagyása ezzel együtt ebből statisztika létrehozása.<br>

## 1.1		A dokumentum célja
A Funkcionális specifikációs dokumentum egy olyan dokumentum, amely részletes
információkat tartalmaz a rendszermegoldás működéséről és a kért viselkedésről. Ez a
dokumentum az Üzleti Követelmények Dokumentumában meghatározott magas szintű
követelmények alapján készült, és a funkcionális specifikációk nyomon követhetőségét
biztosítja az üzleti követelményekig. Ez a dokumentum tartalmazza a részletes funkcionális
követelményeket, beleértve a használati eseteket, a rendszer bemeneteit és kimeneteit,
folyamatfolyamatait, diagramjait és modelljeit.<br>

## 1.2		Projekt hatóköre
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

## 1.3		Kapcsolódó dokumentumok
|                         Név |                                              Leírás |
|----------------------------:|------------------------------------------------------:|
|  Funkcionális specifikáció, | egy olyan dokumentum, ami meghatározza azokat a funkciókat, amiket a rendszernek meg kell tudni valósítani                                                                                                                  |
| Követelmény specifikáció    | tartalmazza az összes követelményt, amelyet a termék tervezésére és ellenőrzésére kell támasztani valamint egyéb kapcsolódó információkat is, amelyek a termék tervezéséhez, ellenőrzéséhez és karbantartásához szükségesek |
| Rendszerterv,               | a fejlesztési folyamatnak az a szakasza, melyben a fejlesztés tárgyának felső szintű definíciója és terve kerül meghatározásra                                                                                              |
| Teszt jegyzőkönyv,          | tesztesetek leírását tartalmazza                                                                                                                                                                                            |
<br>

# 2. Vágyálomrendszer leírása<br>
A vágyálom rendszer azért felelős, hogy kifejtsük benne mit szeretnénk célul a programunkban a 100%-ban ideális esetben. A projekt célja egy olyan rendszer, ami rendezvények létrehozására és szerkesztésére szolgál. A rendszer weben lesz elérhető. Regisztrációt követően a felhasználó létrehozhat rendezvényeket és meghivhat arra más felhasználókat. Továbbá a felhasználónak joga van természetesen a meghívó elfogadására vagy elutasítására.  Látványos, színes felülettel rendelkezik az oldal, hogy felkeltse a felhasználók figyelmét. A rendszer lehetőséget nyújt a felhasználók adatainak módosítására valamint van egy admin felülete is, ahol az admin fiókkal bejelentkezett felhasználó láthatját az üsszes rendezvényt és azt törölni tudják.<br>


## 2.1 	Kontextus diagram, adatfolyam diagram, alkalmazás képernyő folyamata, webhelytérkép, folyamat
![Kontextus diagram negativ.jpg](https://github.com/Timelya/--__---AmOnG-uS---__--/blob/main/képek/Kontextus%20diagram%20negativ.jpg)

## 2.2 Rendszer szereplői
![Rendszer szereplői diagram negativ.jpg](https://github.com/Timelya/--__---AmOnG-uS---__--/blob/main/képek/Rendszer%20szereplői%20diagram%20negativ.jpg)

# 3. Funkció - követelmény megfeleltetése
Itt kezdje el a teljes rendszerre vonatkozó specifikációk leírását. Ismertetett összes funkcióról, és linkelheti őket az alábbi tételekhez.

| Modul       | ID  | Név                    | Kifejtés                                                                                                                                               |
|-------------|-----|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| Jogosultság | K1  | Bejelentkezési felület | A felhasználó bejelentkezhet email címmel és jelszóval. Ha a megadott email cím vagy jelszó nem megfelelő, akkor a felhasználó hibaüzenetet kap.   |
| Jogosultság | K2  | Regisztráció           |    Felhasználónév, email cím és jelszó megadásával regisztrálja magát a felhasználó. A jelszó tárolása kódolva történik az adatbázisban. Ha valamelyik adat ezek közül hiányzik vagy nem felel meg a követelményeknek, akkor a rendszer értesíti erről a felhasználót.|
| Jogosultság | K3  | Jogosultsági szintek   |*Admin:* más felhasználók törlése, adminná tétele, admin jog elvétele és más rendezvények törlése valamint minden olyan dolog amit a felhasználó is tud. *Felhasználó:* meghívó küldése, meghívó elfogadása, rendezvény létrehozása, profil szerkesztése, rendezvény létrehozása és törlése. |
| Modifikáció | K4  | Felhasználó módosítása | A felhasználó módosítani tudja saját Felhasználónevét. |
| Modifikáció | K5  | Jelszó módosítása      |   A felhasználó módosítani tudja saját jelszavát. |
| Jogosultság | K6  | Admin felület          | Felület az admin fiókkal rendelkező felhasználó számára.|
| Felület     | K7  | Rendezvény létrehozása | A felhasználó tud rendezvényeket létrehozni|
| Felület     | K8  | Rendezvény törlése     | A felhasználó képes saját rendezvényeinek törlésére.|
| Felület     | K9  | Meghívó küldése        | A felhasználó megtud hívni más felhasználókat a rendezvényeire.|
| Felület     | K10 | Meghívó elfogadása     | A felhasználó képes elfogadni a más felhasználók által küldött meghívókat.|
  
# 4. Jelenlegi üzleti folyamatok modellje
Napjainkban nagyon kevés a jól szervezett és könnyen kezelhető rendezvény létrehozó oldal. Ezért hoztuk létre oldalunk ahol a letisztult felület valamint a nem túlbonyolított rendszer adotta lehetőségeknek kösszönhetően lehetőség van rendezvények létrehozására és meghívók küldésére másik felhasználók számára. Gyorsan és könnyedén. <br>
![BPMN negativ.jpg](https://github.com/Timelya/--__---AmOnG-uS---__--/blob/main/képek/BPMN%20negativ.jpg)
  
# 5. Igényelt üzleti folyamatok modellje
|![Fázisok és unkafolyamatok negativ.jpg](https://github.com/Timelya/--__---AmOnG-uS---__--/blob/main/képek/Fázisok%20és%20unkafolyamatok%20negativ.jpg)|
|-------------------------------------------------------------------------------------------------------------------------------------------------------|


<p align="center"> ▂▃▅▇█▓▒░۩۞۩                    ۩۞۩░▒▓█▇▅▃▂</p>
<p align="center"><br>Azért, hogy megkönnyítsük az emberek életét létre hoztunk egy rendezvények kezelésére alkalmas oldalt. Mely kellően egyszerűen kezelhető azért hogy bármely generáció megérthesse és kezelni tudja. Az idősek és fiatalok is egyaránt tudnak rendezvényeket gyermeki könnyedséggel létrehozni és barátaik meghívni arra, hogy naprakészek maradjanak az események kapcsán.</p>
<p align="center"> ▂▃▅▇█▓▒░۩۞۩                    ۩۞۩░▒▓█▇▅▃▂</p>


|![Erőforrás igény negativ.jpg](https://github.com/Timelya/--__---AmOnG-uS---__--/blob/main/képek/Erőforrás%20igény%20negativ.jpg)|
|-------------------------------------------------------------------------------------------------------------------------------------------------------|

# 6. Nem funkcionális követelmények
A nem funkcionális követelmények nem közvetlenül a rendszer által biztosított specifikus funkciókkal foglalkoznak, hanem inkább a rendszer egészére vonatkozó eredő rendszertulajdonságokra koncentrálnak. Példaként: megbízhatóság, válaszidő, tárfoglalás, rugalmasság, robosztusság, hordozhatóság, stb..<br>

* A felhasználók nem juthatnak hozzá más felhasználók személyes adataihoz a nevükön kívül.
* A felhasználói felület letisztult és színes világgal rendelkezik.
* Biztonságos adattárolás van az oldalon.
* A jelszó hash kódban tárolt.
* Az oldal kellő gyorsasággal tölt be.
* Rendszeresek a karbantartások ahol az előforduló hibákat kijavítjuk és tovább bővítjük a már meglévő funkciókat.

# 7. Követelménylista
Amikor egy új szoftvert vagy funkciót szeretnénk kifejleszteni, először megpróbáljuk kitalálni, hogy hogyan képzeljük el a terméket. Ha már a tervezés fázisában összeállítjuk a listát, akkor abból több előnyünk is származik.<br>
* _ELŐNY #1:_ FÓKUSZÁLTABB TERVEZÉS<br>
A tervezési dokumentációk hajlamosak akkorára nőni, hogy a végén már nehéz mindent fejben tartani.
* _ELŐNY #2:_ KÖNNYEBBEN ÁTTEKINTHETŐ ELVÁRÁSOK<br>
Egy 100 oldalas követelmény-specifikáció nagy kihívást jelent a fejlesztőknek. Rengeteg információ van benne. Egy lista hatalmas segítséget jelent a két fél kommunikációjában.
* _ELŐNY #3:_ JOBB NYOMONKÖVETHETŐSÉG<br>
Hol járunk a projekttel? Mekkora része van már kész, és mennyi van még hátra?
* _ELŐNY #4:_ JÓ KIINDULÁSI ALAP A KÖZÖS MUNKÁHOZ<br>
Amikor több ember egy nagy projekten dolgozik, általában kisebb részfeladatokra osztják azt. A sok kicsi könnyebben kezelhető, mint az egy nagy. A követelmények felsorolásával ezt a felosztást már a projekt elején megvalósíthatjuk.<br><br>

| Azonosító | Követelmény |
|----------:|------------:|
| K1 | A meghívott rendezvények gyorsan és áttekinthetően jelennek meg. |
| K2 | A rendezvények neve jól látható. |
| K3 | A rendezvények adatai és ideje jól olvasható. |
| K4 | A rendezvény létrehozása gyorsan és könnyen lehetséges. |
| K5 | A még nem elfogadott meghívók feltűnőek. |
| K6 | QR kód beolvasása után megjelenik a jelenlévők listája. |
| K7 | A jelenlévőkről statisztikát generál. |
| K8 | A meghívó küldés lehetséges. |

# 8. Képernyő tervek

# 9. Használati esetek
![Event Management negativ.jpg](https://github.com/Timelya/--__---AmOnG-uS---__--/blob/main/képek/Event%20%20Management%20negativ.jpg)

<dr>
  
Ez leírja, hogy melyik felhasználó milyen funkciókat tud használni. Az oldalon kettő felhasználó van megkülönböztetve admin és nem admin. Az admin mindent tud amit a felhasználó sőtt még többet is. Az Admin(ok) feladata a rendszer problémamentes működése. Ez egyben jár azzal, hogy az egész rendszerhez van hozzáférésük. Az Admin(ok) hozzáférnek a felhasználók listájához, ahol mindent átváltoztathatnak egy felhasználó profilján. Például jogosultság, szerepkör, jelszó, és felhasználónév. 
<dr>
  
<h3 align="center"> Elvárt/ideális statisztika az oldal elkészülése után:</>
 
![kör diagram.png](https://github.com/Timelya/--__---AmOnG-uS---__--/blob/main/képek/kör%20diagram.png)
