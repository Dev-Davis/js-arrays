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

//global function
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
}

const buildDinosaurs = () => {
    // local variable inside the scope
    let domString = '';

    for(let i = 0; i < dinosaurs.length; i++){
        domString += `<div class="dinosaur">`;
        domString +=    `<h3>${dinosaurs[i].dinoType}</h3>`;
        domString +=    `<p>${dinosaurs[i].name}</p>`;
        domString += `</div>`;
        console.log(dinosaurs[i].dinoType);
    }
    printToDom('dino-barn', domString);
}


const assignments = [
    {
        title: 'product cards',
        dueDate: '03/05/2019',
        topic: 'HTML/CSS',
        notes: 'use flexbox',
        assigmentURL: 'www.google.com'
    },
    {
        title: 'monkeys',
        dueDate: '04/01/2019',
        topic: 'JavaScript',
        notes: 'use wizard hat',
        assignmentURL: 'www.wizards.com'
    },
    {
        title: 'kittens',
        dueDate: '05/12/2019',
        topic: 'Python',
        notes: 'use magic wand',
        assignmentURL: 'www.pixies.com'
    },
    {
        title: 'antelopes',
        dueDate: '06/02/2019',
        topic: 'JavaScript',
        notes: 'use endless handkerchief',
        assignmentURL: 'www.mermaids.com'
    },
    {
        title: 'zebras',
        dueDate: '07/03/2019',
        topic: 'PHP',
        notes: 'use invisibility cloak',
        assignmentURL: 'www.potterheads.com'
    }
];

const ssignmentCards = () => {
    let domString = '';
    for(let i = 0; i < assignments.length; i++) {
        domString += `<div class="assignment">`;
        domString += `<h5 class="assignment-title">${assignments[i].title}</h5>`;
        domString += `<div class="due-date"><h3>Due Date: ${assignments[i].dueDate}</h3></div>`;
        domString += `<p>Get the assignment <a href=${assignments[i].assignmentURL}>HERE</a></p>`;
        domString += `<p>Topic: ${assignments[i].topic}</p>`;
        domString += `<p>Notes: ${assignments[i].notes}</p>`;
        domString += `</div>`;
    }
    printToDom('assignment-cards', domString);
};

init = () => {
    buildDinosaurs();
    ssignmentCards();
};

init();

