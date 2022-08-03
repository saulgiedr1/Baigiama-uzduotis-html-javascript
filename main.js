window.onload = function(){

    let antraste = document.getElementById("antraste");
    let pastraipa = document.getElementById("pastraipa");
    let mygtukas = document.getElementById("mygtukas");
    let ivedimas1 = document.getElementById("pavadinimas")
    let ivedimas2 = document.getElementById("ingredientai")
    let ivedimas3 = document.getElementById("nurodymai")


    mygtukas.onclick = function(){


        antraste.style.color = "green";
       
        let aRaides = 0
        if (ivedimas1.value === "" || ivedimas2.value === "" || ivedimas3.value === ""){
            alert("Trūksta įvedimo duomenų");
        }        

        
        for(let i = 0; i < ivedimas3.value.length; i++){
            if(ivedimas3.value[i] === "a")
                aRaides++
        }
        console.log(aRaides)
    }

    antraste.onclick = function() {
        togglePaslepti(pastraipa);
    }

    function togglePaslepti(elementas) {
        if (elementas.style.display != "none") {
            console.log("paslepta");
            elementas.style.display = "none";
        }
        else {
            console.log("nepaslepta");
            elementas.style.display = "initial";
        }

}


}