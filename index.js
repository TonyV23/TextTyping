const target = document.getElementById("target");
let array = ["Web developer", "Analyst","Engineer","Investissor"];

let wordIndex = 0; 
let letterIndex = 0;

const createLetter = () =>{
    const letter = document.createElement("span");
    target.appendChild(letter);
    letter.textContent = array[wordIndex][letterIndex];
    
    setTimeout(() => {
        letter.remove();
    }, 2800);
}

const loop = () =>{
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
            }, 2800);
        }
    }, 60);
};
loop();