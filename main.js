const dinosaurs = [
    {
        dinoType: 'T-rex',
        name:'Wrex',
    },
    {
        dinoType: 'Stegosaurus',
        name:'Steve',
    },
    {
        dinoType: 'Brontosaurus',
        name: 'Ted',
    },
    {
        dinoType: 'Veloceraptor',
        name: 'Bruno'
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
        domString +=    `<h5>${dinosaurs[i].dinoType}</h5>`;
        domString +=    `<p>${dinosaurs[i].name}</p>`;
        domString += `</div>`;
        // console.log(dinosaurs[i].dinoType);
    }
    printToDom('dino-barn', domString);
}


const assignments = [
    {
        title: 'Product Cards',
        dueDate: '03/05/2019',
        topic: 'HTML/CSS',
        notes: 'Use Flexbox',
        assigmentURL: 'www.google.com'
    },
    {
        title: 'House of Wizards',
        dueDate: '04/01/2019',
        topic: 'JavaScript',
        notes: 'Use wizard hat',
        assignmentURL: 'www.wizards.com'
    },
    {
        title: 'Penn and Teller',
        dueDate: '05/12/2019',
        topic: 'Python',
        notes: 'Use magic wand',
        assignmentURL: 'www.pixies.com'
    },
    {
        title: 'Runny Noses',
        dueDate: '06/02/2019',
        topic: 'JavaScript',
        notes: 'Use endless handkerchief',
        assignmentURL: 'www.mermaids.com'
    },
    {
        title: 'Super Powers',
        dueDate: '07/03/2019',
        topic: 'PHP',
        notes: 'Use invisibility cloak',
        assignmentURL: 'www.potterheads.com'
    }
];

console.log(assignments.length);

const ssignmentCards = () => {
    let domString = '';
    for(let i = 0; i < assignments.length; i++) {
        domString += `<div class="assignment">`;
        domString += `<h5 class="assignment-title">${assignments[i].title}</h5>`;
        domString += `<div class="due-date"><h6>Due Date: ${assignments[i].dueDate}</h6></div>`;
        // domString += `<p>Get the assignment <a href=${assignments[i].assignmentURL}>HERE</a></p>`;
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

