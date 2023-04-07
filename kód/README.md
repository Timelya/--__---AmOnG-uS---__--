külön readme, mert ma 12 órája írom a geci sessiont xd
Regisztráció:
{
    pages/register-nél lehet regisztrálni, de bejelentkezett felhasználó (nem null session esetén) nem éri el az oldalt 
}
Bejelentkezés:
{
    pages/login-nál lehet bejelentkezni, hogyha van felhasználó a db-ben
    nincs kezelve az elérése, pls nem akarj bejelentkezni, hogyha már bevagy, nem teszteltem xd
}
Kijelentkezés:
{
    api/logout-nál lehet kijelentkezni, de van a protected-en is egy külön gomb hozzá
}
Profil:
{
    pages/profile-nál lehet elérni, de csak létrehozott session-nel (bejelentkezve)
}