// Первая игра на сложение
const getnumberOne = () => Math.round(Math.random() * 100);
const getnumberTwo = () => Math.round(Math.random() * 100);

const playRound = () => {

const numberOne = getnumberOne();
const numberTwo = getnumberTwo();

const sum = numberOne + numberTwo;

const userAnswer = +prompt(`${numberOne} + ${numberTwo} = ...`);

if (userAnswer === sum) {
    alert ("Верно");
    return true;
} else {
    alert ("Не верно.");
    return false;
};
};

const playGame = () => {
    for (let i = 0; i < 5; i++) {
    const isCorrect = playRound();
    if (!isCorrect) {
        return;
    };
};
    alert("Ты супер крутой. Ответил 5 раз без ошибок!");
}
// playGame();
const btn = document.querySelector(".myBtn");
btn.addEventListener("click", playGame);

// Вторая игра на умножение
const getnumberOne2 = () => Math.round(Math.random() * 10);
const getnumberTwo2 = () => Math.round(Math.random() * 10);

const playRound2 = () => {

const numberOne2 = getnumberOne2();
const numberTwo2 = getnumberTwo2();

const sum2 = numberOne2 * numberTwo2;

const userAnswer2 = +prompt(`${numberOne2} * ${numberTwo2} = ...`);

if (userAnswer2 === sum2) {
    alert ("Верно");
    return true;
} else {
    alert ("Не верно.");
    return false;
};
};

const playGame2 = () => {
    for (let i = 0; i < 10; i++) {
    const isCorrect2 = playRound2();
    if (!isCorrect2) {
        return;
    };
};
    alert("Ты супер крутой. Ответил 10 раз без ошибок!");
}
// playGame();
const btn2 = document.querySelector(".myBtn2");
btn2.addEventListener("click", playGame2);

