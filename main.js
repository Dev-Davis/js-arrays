const dinosaurs = [
    {
        dinoType: 't-rex',
        name:'<span class="saur">Wrex</span>',
    },
    {
        dinoType: 'stegosaurus',
        name:'<span class="saur">Steve</span>',
    },
    {
        dinoType: 'brontosaurus',
        name: '<span class="saur">Ted</span>',
    }
];



//loop over the dinosaurs
//build up a DOMstring
//print the DOMstring to the DOM

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
}

const buildDinosaurs = () => {
    // local variable
    let domString = '';

    for(let i = 0; i < dinosaurs.length; i++){
        domString += `<div class="dinosaur">`
        domString +=    `<h3>${dinosaurs[i].dinoType}</h3>`;
        domString +=    `<p>${dinosaurs[i].name}</p>`
        domString += `</div>`
        console.log(dinosaurs[i].dinoType);
    }
    printToDom('dino-barn', domString);
}

const init = () => {
    buildDinosaurs();
};

init();