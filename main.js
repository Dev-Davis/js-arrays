const dinosaurs = [
    {
        dinoType: 't-rex',
    },
    {
        dinoType: 'stegosaurus',
    },
    {
        dinoType: 'brontosaurus',
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
    let domString = '';
    for(let i = 0; i < dinosaurs.length; i++){
        domString += `<h3>${dinosaurs[i].dinoType}</h3>`;
        console.log(dinosaurs[i].dinoType);
    }
    printToDom('dino-barn', domString);
}

const init = () => {
    buildDinosaurs();
};

init();