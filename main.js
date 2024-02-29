/* fogd meg az "azon" nevezetű elemet és írj bele valami kedveset! */

const azonELEM = document.getElementById("azon")
const azonELEM2 = document.querySelector("#azon")
console.log(azonELEM)
console.log(azonELEM2)
azonELEM.innerHTML = "<h3>Tanulni jó!</h3>"


/* kartya elemeket fogjuk meg */
const kartyaELEM = document.querySelector(".kartya")
console.log(kartyaELEM)
/* visszaadja az első megfelelő elemet */
const kartyaELEMEK = document.querySelectorAll(".kartya")
console.log(kartyaELEMEK) /* NodeList */
/* 2. elembe írjuk bele, hogy "A JS jó!" */
kartyaELEMEK[1].innerHTML = "A JS jó!"

const kartyaELEMEK2 = document.getElementsByClassName("kartya")
console.log(kartyaELEMEK2) /* HTML collection */
/* 2. elembe írjuk bele, hogy "A JS jó!" */
kartyaELEMEK2[1].innerHTML += "A JS jó!"

/* Button elérése */
const gombELEM = document.querySelectorAll("button")[0]
console.log(gombELEM)

/* ha rákattintok a gombra, akkor írjon ki egy üzenetet! */
/* esemenykezelőket teszek a gombra */
gombELEM.addEventListener("click",kattintasKezelo)/* függvény referencia */

/* console.log(kattintasKezelo) */

function kattintasKezelo() {
    /* alert("Hurrá, rámkattintottál!") */
    /* ha rákattintunk a gombra, akkor a 4. kártya tartalmát írja hozzá az első kártyához! */
    kartyaELEMEK2[0].innerHTML += kartyaELEMEK2[3]
}