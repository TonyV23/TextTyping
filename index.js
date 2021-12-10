const target = document.getElementById("target");

let array = [
    "I'm",
    "Your",
    "Biggest",
    "Fan",
    "BOOBA",
    "La Piraterie n'est Jamais Finie"
];

let wordIndex = 0; 
let letterIndex = 0;

const createLetter = () =>{
    const letter = document.createElement("span");
    target.appendChild(letter);
    letter.textContent = array[wordIndex][letterIndex];
    
    setTimeout(() => {
        letter.remove();
    }, 1500);
}

const loop = () =>{
    if (wordIndex >=array.length) {
        wordIndex = 0;
        letterIndex =0;
        loop();
    }
    setTimeout(() => {
        if (array[wordIndex].length > letterIndex) {
            createLetter();
            letterIndex++;
            loop();
        }else {
            wordIndex++;
            letterIndex = 0;
            setTimeout(() => {
                loop();
            }, 1000);
        }
    }, 100);
};
loop();