const ide = document.getElementById("kiir");

function fact() {
    let szam = Math.floor(Math.random() * 10) + 1;
    switch (szam){
        case 1: ide.innerHTML = "Sushi eredete: A sushi nem csak a halakról szól. Eredetileg a halak tartósítására használták, amikor a halat erjesztett rizsben tárolták. A modern sushi, amelyet ma is ismerünk, csak a 19. században alakult ki Japánban.";
        break;
        case 2: ide.innerHTML = "Fűszeres ételek: Az ázsiai konyhákban gyakran használnak erőteljes fűszereket, mint például a chili, gyömbér, fokhagyma, kurkuma, és citromfű, amelyek nemcsak ízt adnak, hanem jótékony hatással vannak az egészségre is.";
        break;
        case 3: ide.innerHTML = "Tészták sokfélesége: Ázsiában rengeteg különböző tésztát használnak, amelyek különböznek a hozzávalóikban és a készítési módokban is. Kínában az ételekben gyakran használnak rizstésztát, míg Japánban és Koreában búzaliszt alapú tésztákat, mint a ramen vagy a soba.";
        break;
        case 4: ide.innerHTML = "Szójaszósz: A szójaszósz egy alapvető hozzávaló az ázsiai konyhában, különösen Japánban, Kínában és Koreában. A szója, a búza, a víz és a só erjesztésével készül, és kiváló ízesítője az ételeknek.";
        break;
        case 5: ide.innerHTML = "A kimchi: A kimchi egy erjesztett étel, amelyet elsősorban Koreában fogyasztanak. Főként káposztából és egyéb zöldségekből készül, és számos fűszerrel ízesítik, mint például a chili, fokhagyma, és gyömbér. Emellett probiotikus hatása van, segíti az emésztést.";
        break;
        case 6: ide.innerHTML = "Indiai curry: Az indiai curry nem csupán egy étel, hanem egy fűszerkeverék is. A curry szó alatt számos fűszer és étel található, mint a kurkuma, kardamom, kömény és koriander, amelyek különböző formákban készülnek a világ különböző részein.";
        break;
        case 7: ide.innerHTML = "Teák kultúrája: Az ázsiai országokban, különösen Kínában, Japánban és Indiában, a tea fogyasztása nemcsak napi szokás, hanem fontos kulturális esemény is. Kínában a tea ivása egy ősi hagyomány, és Japánban a tea szertartása (chanoyu) külön művészeti formává vált.";
        break;
        case 8: ide.innerHTML = "Hal és rizs: A hal és a rizs az ázsiai konyha két alapvető összetevője. Japánban és Kínában a rizs az étkezések központi eleme, míg a hal számos formában, például nyersen (sushi), sült, párolt vagy füstölt formában jelenik meg.";
        break;
        case 9: ide.innerHTML = "Durian – Az 'illatgyilkos gyümölcs': A durian egy rendkívül népszerű, de megosztó thai gyümölcs. Erős, éles szaga miatt sok helyen tiltanak be helyekre, például szállodákba és tömegközlekedésre, de az íze és állaga olyan egyedülálló, hogy a rajongói imádják. Az 'illatgyilkos gyümölcs' neve ellenére a durian a thai konyha különleges csemegéje, amit frissen vagy desszertekben is fogyasztanak.";
        break;
        case 10: ide.innerHTML = "Kínai dim sum: A dim sum egy kínai étkezési forma, amelyet kis adagokban szolgálnak fel, általában gőzölt vagy sült tésztában. Ezeket az ételeket gyakran tea mellett fogyasztják, és a dim sum éttermekben az étkezés közben folyamatosan hoznak új falatokat, így az élmény igazán interaktív.";
        break;
        };
}

document.getElementById("gomb").addEventListener("click", fact);