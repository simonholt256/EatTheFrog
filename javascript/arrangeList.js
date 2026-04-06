import { currentCart } from "./index.js";
import { checkingForFrog } from "./changeList.js";

/* ordering items standard */

export function arrangeCart(cart, orderChoice) {
    if (orderChoice == "fun") {
        const firstRound = cart.toSorted((a, b) => a.difficulty - b.difficulty);
        const secondRound = firstRound.toSorted((a, b) => a.time - b.time);
        const cartOrder = secondRound.toSorted((a, b) => a.tedium - b.tedium);
            
        return cartOrder;

    } else if (orderChoice == "boring") {
        const firstRound = cart.toSorted((a, b) => b.difficulty - a.difficulty);
        const secondRound = firstRound.toSorted((a, b) => b.time - a.time);
        const cartOrder = secondRound.toSorted((a, b) => b.tedium - a.tedium);
        return cartOrder;

    } else if (orderChoice == "easy") {
        const firstRound = cart.toSorted((a, b) => a.time - b.time);
        const secondRound = firstRound.toSorted((a, b) => a.tedium - b.tedium);
        const cartOrder = secondRound.toSorted((a, b) => a.difficulty - b.difficulty);
        return cartOrder;

    } else if (orderChoice == "hard") {
        const firstRound = cart.toSorted((a, b) => b.time - a.time);
        const secondRound = firstRound.toSorted((a, b) => b.tedium - a.tedium);
        const cartOrder = secondRound.toSorted((a, b) => b.difficulty - a.difficulty);
        return cartOrder;

    } else if (orderChoice == "fast") {
        const firstRound = cart.toSorted((a, b) => a.tedium - b.tedium);
        const secondRound = firstRound.toSorted((a, b) => a.difficulty - b.difficulty);
        const cartOrder = secondRound.toSorted((a, b) => a.time - b.time);
        return cartOrder;

    } else if (orderChoice == "slow") {
        const firstRound = cart.toSorted((a, b) => b.tedium - a.tedium);
        const secondRound = firstRound.toSorted((a, b) => b.difficulty - a.difficulty);
        const cartOrder = secondRound.toSorted((a, b) =>  b.time - a.time);
        return cartOrder;

    } 

}

/* choosing cart */

export function chooseCart() {
    let selectedOrder = localStorage.getItem('listOrder');
    if (selectedOrder == "frog") {
        document.getElementById('js-frog-button').classList.add("glow");
        return eatTheFrogOrder();
    } else if (selectedOrder == "frogChase") {
        document.getElementById('js-chase-button').classList.add("glow");
        return frogChaseOrder();
    } else if (selectedOrder == "snowball") {
        document.getElementById('js-snowball-button').classList.add("glow");
        return arrangeCart(currentCart, "fast");
    } else if (selectedOrder == "oneForMe") {
        document.getElementById('js-one-for-button').classList.add("glow");
        return oneForMeOrder();
    } else if (selectedOrder == "hump") {
        document.getElementById('js-hump-button').classList.add("glow");
        return humpOrder();
    } else {
        document.getElementById('js-as-added-button').classList.add("glow");
        return currentCart;
    }
}

/* ording items advanced */

// Eat the frog

export function eatTheFrogOrder() {
    let cart = arrangeCart(currentCart, "hard");
    let bulkCart = [];
    let frogCart = [];
    let joinedCart = [];

    // should add in a && cart is 2 or more

    if (checkingForFrog() != 0) {
        cart.forEach((item) => {
            if (item.frog == false) {
                bulkCart.push(item)
            } else {
                frogCart.push(item);
            }
        })
        
        joinedCart = frogCart.concat(bulkCart);

        console.log(joinedCart);

        // joinedCart.forEach((item))

        return joinedCart;
        
    } else {
        return arrangeCart(currentCart, "hard"); 
    };

    
};

// Frog with a chaser

export function frogChaseOrder() {
    let cart = arrangeCart(currentCart, "fun");
    let funCart = [];
    let frogCart = [];
    let hardCart = [];
    let joinedCart = [];

    // add in an && if cart is 3 or more

    console.log(cart);
    if (checkingForFrog() != 0) {
        console.log("we found a frog")
        cart.forEach((item) => {
            if (item.frog == false) {
                funCart.push(item)
            } else {
                frogCart.push(item);
            };
        });

        joinedCart.push(frogCart[0]);

        joinedCart.push(funCart[0]);

        joinedCart.push(funCart[1]);

        funCart.splice(0, 2);

        hardCart = arrangeCart(funCart, "hard");

        joinedCart = joinedCart.concat(hardCart);

        return joinedCart;
        
        } else {
            // need to change order to hardest first, two funs, the hardest
        console.log(arrangeCart(currentCart, "hard"));
        return arrangeCart(currentCart, "hard"); 
    };
};

// One for me, one for them

export function oneForMeOrder() {
    let cart = arrangeCart(currentCart, "fun")
    let forMeCart = [];
    let forThemCart = [];
    let joinedCart = [];



    cart.forEach((item) => {
        item.tedium = (item.difficulty * item.tedium);
    })

    cart = cart.toSorted((a, b) => a.tedium - b.tedium);

    cart.forEach((item) => {
        if (cart.indexOf(item) + 1 <= cart.length / 2) {
            forMeCart.push(item);

        } else {
            forThemCart.push(item);
        }
    });

    forThemCart = forThemCart.reverse();

    for (let i = 0; i < forMeCart.length; i++) {
        
        joinedCart.push(forMeCart[i]);
        
        joinedCart.push(forThemCart[i]);
    }

    if (forMeCart.length == forThemCart.length) {
        console.log("even");
    } else {
        console.log("odd");
        joinedCart.push(forThemCart[forThemCart.length - 1])
    };
    // works if even. but if odd there it a final for them chart left.

    joinedCart.forEach((item) => {
    item.tedium = (item.tedium / item.difficulty);
    });

    return joinedCart;

}

// hump

export function humpOrder() {
    let cart = arrangeCart(currentCart, "easy");
    let frontCart = [];
    let backCart = [];
    let joinedCart = [];

    cart.forEach((item) => {
        item.difficulty = (item.difficulty * item.time);
    })

    cart = cart.toSorted((a, b) => a.difficulty - b.difficulty);

    cart.forEach((item) => {
        if (cart.indexOf(item) % 2 == 0 ) {
            frontCart.push(item);

        } else {
            backCart.push(item);

        }
    });

    backCart = backCart.reverse();

    joinedCart = frontCart.concat(backCart);

    joinedCart.forEach((item) => {
        item.difficulty = (item.difficulty / item.time);
    })

    return joinedCart;
};