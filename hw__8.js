//Оператор if

// Перевірка часу:
let hour = 8
if (hour < 12) {
    console.log('Доброго ранку!');
}

// Перевірка віку:

let age1 = 18
let age2 = 18

if (age1 >= age2) {console.log('Ви повнолітній');
    
}

// Оператор if else

//  Парність числа: 

let Number1 = 27 

let Number2 = Number1 % 2

if (Number2 === 0) {
    console.log(`число ${Number1} є парним`);
} else { console.log(`число ${Number1} є непарним`)
    
}

// Оператор if else if
// - Оцінка за балами: 

// Варіант №1

// let rating = 95

// if (rating >= 101) {
//     console.log(`ERROR`)
// } else if (rating >= 90) {
//     console.log(`відмінно`)
// } else if (rating >= 70) {
//     console.log(`добре`)
// } else if (rating >= 50) {
//     console.log(`задовільно`)
// }
// else if (rating <= 49) {
//     console.log(`незадовільно`)
// }

//Варіант №2

let rating = 58

if (rating >= 101) {
    console.log(`ERROR`)

} else if (rating <= 49) {
    console.log(`незадовільно`)

} else if (rating <= 69 && rating >= 50) {
    console.log(`задовільно`)

} else if (rating <= 89 && rating >= 70) {
    console.log(`добре`)

} else if (rating <= 100 && rating >= 90) {
    console.log(`відмінно`)
} 

// - Визначення пори року: 

let Month = 10

if (Month == 12) { console.log(`Winter`)
    
} else if (Month == 3 || Month == 4 || Month == 5) {console.log(`Spring`)
    
} else if(Month == 6 || Month == 7 || Month == 8) {console.log(`Summer`)
    
} else if(Month == 9 || Month == 10 || Month == 11) {console.log(`Autumn`)
    
} else if(Month == 1 || Month == 2) {console.log(`Winter`)
    
}
  
// Оператор switch case


let Money = "100 GBP"

switch (Money) {

    case "100 USD":
        console.log(`${Money} is 3 972.06 UAH`);
    break;
    case "100 EUR":
        console.log(`${Money} is 4 281.48 UAH`);
    break;
    case "100 GBP":
        console.log(`${Money} is 4 975.01 UAH`);
    break;
    default:
        console.log(`${Money} is not valid currency`);
        break;
}

// Тернарний оператор


let Total = 100
let Term = 1001
    console.log(Total);
    
(Total >= Term) ? console.log('Знижка 10%') : console.log('Без знижки');


