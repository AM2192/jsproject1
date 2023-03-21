# Websovellusten kehittäminen JavaScriptillä projekti 1

Tämä sovellus on koulutyöni websovellusten kehittäminen JavaScriptillä kurssille.
Sovellus on applikaatio, johon käyttäjä syöttää tehtäviänsä sille varattuun kenttään ja painamalla add nappia applikaatio lisää tehtävän selaimen paikalliseen muistiin. Lisätyt tehtävät listautuvat näkyville syöttökentän alapuolelle. Tehtävä on mahdollista kuitata tehdyksi painamalla tehtävää. Painamalla tehtävää tehtävän väri muuttuu ja tekstin päälle ilmestyy yliviivaus. Näkyvältä listalta on mahdollista poistaa yksittäisiä tehtäviä painamalla tehtävän perässä olevaa ruksia. Paikallisen muistin pystyy tyhjentämää painamalla clear list nappia. Lisäksi applikaatiossa on nappi, joka piilottaa kaiken muun sivustolla näkyvän sisällön. 

* To do list
    Listan toiminta on toteutettu JavaScriptillä ja mallia olen tähän listaan ja sen ominaisuuksiin olen ottanut sivustolta. https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_todo.
* Hide button
    Tällä napilla käyttäjä voi piilottaa sivun sisällön. Ominaisuus on toteutettu JavaScriptillä toggle funktiolla. 
    Mallia olen ottanut tähän tältä sivustolta. https://learn.coderslang.com/0153-show-or-hide-any-html-element-with-a-button-click/. Napin animointiin olen ottanut mallia tältä sivustolta. https://www.w3schools.com/csS/tryit.asp?filename=trycss_buttons_animate3. 
* Add button
    Tällä napilla käyttäjä lisää listalle kohteen ja tallentaa sen selaimen paikallismuistiin. Napin painallus kutsuu newElement funktiota, joka on toteutettu JavaScriptillä. Nappi on itsessään muotoiltu css avulla ja animointiin on käytetty samaa mallia kuin Hide buttonissa. Mikäli tekstinsyöttökenttä on tyhjä ja käyttäjä painaa add nappia antaa sovellus alert ilmoituksen ' Input field was found empty. To complete you must type something.'. 
* Clear list
    Tällä napilla käyttäjä voi tyhjentää selaimen paikallisen muistin listan sisällöstä. Napin painallus kutsuu resetAll funktiota, joka tyhjentää paikallisen muistin. Päädyiin toteuttamaan listan tyhjennyksen tällä tavalla, koska en saanut toimimaan ominaisuutta, jolla olisi voinut kohteen perässä olevalla 'x' napilla poistaa näkyvältä ja paikallisen muistin listalta kohteen. Mallia tähän ominaisuuteen olen ottanut sivustolta. https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage.
* Items on list
    Kohteet listautuvat tekstinsyöttökentän alapuolelle. Kohteilla on hover ominaisuus, kun käyttäjä vie hiiren kohteen päälle väri vaihtuu. Kohteen perässä on 'x' painike, jolla käyttäjä voi poistaa kohteen näkyvältä listalta. Tämän lisäksi kohdetta painamalla kohteen voi merkata tehdyksi. Painamalla kohdetta kohteen päälle ilmestyy viiva ja taustaväri vaihtuu. Toiminnallisuus on toteutettu JavaScriptillä ja muotoilus css. Mallia tähän olen ottanut sivustolta. https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_todo. 
