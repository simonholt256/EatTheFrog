import { currentCart } from './index.js';

// retrieving list from storage with empty storage check

export function ArrayFromStorage(storage) {
    const listString = localStorage.getItem(storage);
    if (typeof listString === "string") {
        const listArray = JSON.parse(listString);

        return listArray;
    } else {
        const listArray = [];
        return listArray;
    }
    
}

// checking for frog

export function checkingForFrog() {
    console.log("frog check!")

    let frogNum = 0


    currentCart.forEach((item) => {
        if (item.frog == true) {
            frogNum = item.idNum;
            console.log(frogNum);
        }
    });

    return frogNum
}

// Creating a cart object

export function createCartItem() {
    const toDoText = document.getElementById('js-todo-input').value;
    const toDoTedium = parseInt(document.getElementById('js-tedium-slider').value);
    const toDoDifficulty = parseInt(document.getElementById('js-difficulty-slider').value);
    const toDoTime = parseInt(document.getElementById('js-time-slider').value);

    let frogOrNot = document.getElementById('js-my-frog').checked;

    currentCart.push({idNum: randomIdMaker(), text: toDoText, tedium: toDoTedium, difficulty: toDoDifficulty, time: toDoTime, completed: 0, frog: frogOrNot});

    localStorage.setItem('standardCart', JSON.stringify(currentCart));

    console.log(ArrayFromStorage('standardCart'));
}

export function saveEditCart() {

    let  frogCode = checkingForFrog();

    

    const newTodo = document.getElementById('js-edit-todo-input').innerHTML;
    console.log(newTodo)
    const newTedium =  parseInt(document.getElementById('js-edit-tedium-slider').value);
    const newDiff = parseInt(document.getElementById('js-edit-difficulty-slider').value);
    const newTime = parseInt(document.getElementById('js-edit-time-slider').value);
    let frogOrNot = document.getElementById('js-edit-my-frog').checked;

    const changeCode = parseInt(document.getElementById('js-secret-box').innerHTML)
    console.log(changeCode);

    if (document.getElementById('js-edit-my-frog').checked == true && frogCode != 0 && frogCode != changeCode) {
        console.log()
        console.log("oh no, there's already a frog in this pond");
        alert("Sorry partner. There's already a frog in this here pond");
        return;
    };

    currentCart.forEach((item) => {
        if (changeCode == item.idNum) {
            item.text = newTodo;
            item.tedium = newTedium;
            item.difficulty = newDiff;
            item.time = newTime;
            item.frog = frogOrNot;
        }
    });

    console.log(currentCart);

    localStorage.setItem('standardCart', JSON.stringify(currentCart));
};
        

// Data check functions (how boring, how hard, how quick)

export function howBoring(arrayNum) {

    const chore = cart[arrayNum].text;
    const excitment = cart[arrayNum].tedium;

    console.log(chore);
    console.log("how boring is it?: " + excitment);

    if (excitment <= 2){
        return ("Actually pretty fun");
    } else if (excitment <= 5){ 
        return ("a bit meh");
    } else if (excitment <= 8){ 
        return ("BORING!");
    } else { 
        return ("mind-numbingly-soul-crushingly dull");
    };
};

export function howHard(arrayNum) {

    const chore = cart[arrayNum].text;
    const difficulty = cart[arrayNum].difficulty;

    console.log(chore);
    console.log("how hard is it?:" + difficulty);

    if (difficulty <= 2){
        return ("Easy!");
    } else if (difficulty <= 5){ 
        return ("More effort than I'd like");
    } else if (difficulty <= 8){ 
        return ("Actually challenging");
    } else { 
        return ("Like fighting Goliath while climbing Everest");
    };
};

export function howQuick(arrayNum) {

    const chore = cart[arrayNum].text;
    const speed = cart[arrayNum].time;

    console.log(chore);
    console.log("time it takes: " + speed);

    if (speed <= 2){
        return ("really quick");
    } else if (speed <= 5){ 
        return ("relatively quick");
    } else if (speed <= 8){ 
        return ("takes bloody ages");
    } else { 
        return ("an unbareable slog");
    };
};


// creating ID

export function randomIdMaker() {
    return Math.floor(Math.random() * (999999 - 100000) + 100000);
    
}


// Editing Array (Check, delete, edit)


export function checkDone(toBeChecked) {

    const doneIdNum = toBeChecked;

    currentCart.forEach((item) => {
        if (doneIdNum == item.idNum) {
            item.completed = 1 - item.completed;
            
            
            localStorage.setItem('standardCart', JSON.stringify(currentCart));
        }
    });
};


export function removeItem(toBeRemoved) {
    const removeIdNum = toBeRemoved;

    let newCart = [];

    currentCart.forEach((item) => {
        if (removeIdNum != item.idNum) {
            newCart.push(item);

            localStorage.setItem('standardCart', JSON.stringify(newCart));
        } else if (removeIdNum == item.idNum && currentCart.length == 1) {
            newCart = [];

            localStorage.setItem('standardCart', JSON.stringify(newCart));
        };
    });

};

