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
