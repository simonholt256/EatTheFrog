import {ArrayFromStorage, checkingForFrog, createCartItem, checkDone, saveEditCart, removeItem} from './cartFunctions.js';
import { chooseCart } from "./arrangeList.js";


/*
New layout

---- Making the display

Get list from storage (Not sure where to put this yet??)
- Standard list
- list current order

Render List (create element so no reload?) (could be own function only file)
- is checked or no?
- is frog or no?
- list html 

---- inputs

buttons
- sliders (condense with interpolation)
- hide, add, tick, edit, delete
- reorder buttons (make the process of highlighting selected button more efficient, also what brief explanation below to appear)

---- List CRUD functions + tick (not buttons) (could be own function only file)

- create new item (blend with save edited somehow to condense code)
- add to list
- edit list item
- delete list item
- tick item

---- Other functions

- ID maker
- frog check
- slider with interpolation function
- how hard/slow/boring (for future display for sliders)

---- List reordering 

- reorder depend on input factors (fun/boring/easy/hard/fast/slow)
- Eat frog
- Frog with chaser
- snowball
- One for me
- Hump
- As added

*/




// retrieve storage and ender html

// Render html for user list

// retrieve storage and ender html

export let currentCart = ArrayFromStorage('standardCart');

console.log(localStorage.getItem('listOrder'))

let choosenCart = chooseCart();


console.log(choosenCart);

console.log("hello");

let listHTML = "";

choosenCart.forEach((item) => {
    let boxColour = "rgba(233, 233, 233, 0.34)";
    let tickBox = "";
    if (item.completed == 1) {
        boxColour = "rgba(60, 255, 0, 0.38)";
        tickBox = `<input class="tick-pic" type="image" src="./tick.png"></input>`;
    };

    let frogDisplay = ""
    if (item.frog == false) {
        frogDisplay = "no-frog";
    };



    listHTML +=
    `
        <div class="item-box" style="background:${boxColour};" >
            <div class="list-item-one list-item">
            <div class="item-text-box" id="js-text-box"> ~ ${item.text}</div>
            <div class="tick-box">
                <button class="tick-button js-tick-button" id="js-tick-button" data-tick ="${item.idNum}" style="background:${boxColour};">
                ${tickBox}
                </button>
            </div>
            </div>
            <div class="item-buttons">
            <button class="edit js-edit" id="js-edit" data-edit ="${item.idNum}">edit</button>
            <button class="delete js-delete" id="delete js-delete" data-delete ="${item.idNum}">remove</button>
            
            <img class="frog-pic ${frogDisplay}" src="../frogPic.png" >
            <div class="invisible"></div>
            </div>
        </div>`

});

document.querySelector(`.js-list-div`).innerHTML = listHTML;

// sliders

let tediumSlider = document.querySelector(`.js-tedium-slider`);
let tediumOutput = document.querySelector(`.js-tedium-output`);

tediumOutput.innerHTML = tediumSlider.value;

tediumSlider.oninput = function() {
    tediumOutput.innerHTML = this.value;
}

let difficultySlider = document.querySelector(`.js-difficulty-slider`);
let difficultyOutput = document.querySelector(`.js-difficulty-output`);

difficultyOutput.innerHTML = difficultySlider.value;

difficultySlider.oninput = function() {
    difficultyOutput.innerHTML = this.value;
}

let timeSlider = document.querySelector(`.js-time-slider`);
let timeOutput = document.querySelector(`.js-time-output`);

timeOutput.innerHTML = timeSlider.value;

timeSlider.oninput = function() {
    timeOutput.innerHTML = this.value;
}

// edit sliders

let editTediumSlider = document.querySelector(`.js-edit-tedium-slider`);
let editTediumOutput = document.querySelector(`.js-edit-tedium-output`);

editTediumOutput.innerHTML = editTediumSlider.value;

editTediumSlider.oninput = function() {
    editTediumOutput.innerHTML = this.value;
};

let editDifficultySlider = document.querySelector(`.js-edit-difficulty-slider`);
let editDifficultyOutput = document.querySelector(`.js-edit-difficulty-output`);

editDifficultyOutput.innerHTML = editDifficultySlider.value;

editDifficultySlider.oninput = function() {
    editDifficultyOutput.innerHTML = this.value;
};

let editTimeSlider = document.querySelector(`.js-edit-time-slider`);
let editTimeOutput = document.querySelector(`.js-edit-time-output`);

editTimeOutput.innerHTML = editTimeSlider.value;

editTimeSlider.oninput = function() {
    editTimeOutput.innerHTML = this.value;
};

// Algo buttons

document.querySelector(`.js-frog`)
    .addEventListener('click', () => {
        let currentListOrder = "frog";
        localStorage.setItem('listOrder', currentListOrder);
        
        window.location.reload();
    })

document.querySelector(`.js-frog-chase`)
    .addEventListener('click', () => {
        let currentListOrder = "frogChase";
        localStorage.setItem('listOrder', currentListOrder);
        
        window.location.reload();
    })
    

document.querySelector(`.js-snowball`)
    .addEventListener('click', () => {
        let currentListOrder = "snowball";
        localStorage.setItem('listOrder', currentListOrder);

        window.location.reload();
    })

document.querySelector(`.js-one-for`)
    .addEventListener('click', () => {
        let currentListOrder = "oneForMe";
        localStorage.setItem('listOrder', currentListOrder);
        // one hard and slow, one fun and easy
        window.location.reload();
    })

document.querySelector(`.js-hump`)
    .addEventListener('click', () => {
        let currentListOrder = "hump";
        localStorage.setItem('listOrder', currentListOrder);
        // worst in the middle
        window.location.reload();
    })

document.querySelector(`.js-as-added`)
    .addEventListener('click', () => {
        let currentListOrder = "asAdded"

        localStorage.setItem('listOrder', currentListOrder);
        // ass they were enter. done
        window.location.reload();
    })

// button listeners (hide, add, tick, edit, delete)

document.querySelector(`.js-hide-button`)
    .addEventListener('click', () => {
        let boxStatus = document.getElementById('js-hide-button').innerHTML;


        if (boxStatus == "Hide") {
            document.getElementById('js-hide-button').innerHTML = "Add to list";
            document.getElementById('js-hide-box').classList.add("hidden");
            
        } else {
            document.getElementById('js-hide-button').innerHTML = "Hide";
            document.getElementById('js-hide-box').classList.remove("hidden");
            
        }
    });

document.querySelector(`.js-add-to-list`)
    .addEventListener('click', () => {
        console.log("add to list");

        if (document.getElementById('js-my-frog').checked == true && checkingForFrog() != 0) {
            console.log("oh no, there's already a frog in this pond");
            alert("Sorry partner. There's already a frog in this here pond");
            return;
        } else {
            console.log("come on in Mr frog");
        };

        createCartItem();


        window.location.reload();
        
    });


document.querySelectorAll(`.js-tick-button`)
    .forEach((button) => {
        button.addEventListener('click', () => {
            const tickId = button.dataset.tick;
            checkDone(tickId);

            window.location.reload();
        });
});

document.querySelectorAll(`.js-edit`)
    .forEach((button) => {
        button.addEventListener('click', () => {
            
            let oldText = "";

            console.log("edit");
            const editId = button.dataset.edit;
            console.log(editId);

            document.getElementById('js-edit-box').classList.add("edit-display");

            currentCart.forEach((item) => {
                if (item.idNum == editId) {
                    let oldText = item.text;
                    let tediumNum = item.tedium;
                    let difficultyNum = item.difficulty;
                    let timeNum = item.time;
                    let frog = item.frog;

                    let changeCode = item.idNum;

                    console.log(item.frog);

                    document.getElementById('js-edit-todo-input').innerHTML = oldText;

                    document.getElementById('js-edit-tedium-slider').value = tediumNum;
                    document.getElementById('js-edit-difficulty-slider').value = difficultyNum;
                    document.getElementById('js-edit-time-slider').value = timeNum;

                    document.getElementById('js-edit-tedium-output').innerHTML = tediumNum;
                    document.getElementById('js-edit-difficulty-output').innerHTML = difficultyNum;
                    document.getElementById('js-edit-time-output').innerHTML = timeNum;
                    
                    document.getElementById('js-edit-my-frog').checked = frog;

                    document.getElementById('js-secret-box').innerHTML = changeCode;
                    

                };
                
            });

        });
});

document.querySelectorAll(`.js-edit-save`)
    .forEach((button) => {
        button.addEventListener('click', () => {
            
            console.log("save");

            saveEditCart();


            document.getElementById('js-edit-box').classList.remove("edit-display");

            window.location.reload()

        });
});


document.querySelectorAll(`.js-delete`)
    .forEach((button) => {
        button.addEventListener('click', () => {
            const deleteId = button.dataset.delete;
            removeItem(deleteId);

            window.location.reload()
        });

    
});
