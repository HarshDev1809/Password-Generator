let choice = [];
const smallAlphabets = [];
const capitalAlphabets = [];
const numbers = [];
const specialCharacters = ["!", "@", "#", "$", "_", "*"];
const refrenceObj = { "capital_letter": capitalAlphabets, "small_letter": smallAlphabets, "numbers": numbers, "special_characters": specialCharacters, "empty": [] };

getArray();

function getArray() {
    for (let i = 0; i <= 25; i++) {
        if (i <= 9)
            numbers.push(i);
        smallAlphabets.push(String.fromCharCode(97 + i));
        capitalAlphabets.push(String.fromCharCode(65 + i));
    }
}

$(".generate-btn").click(function () {
    choice = [];
    for (let i = 0; i < $(".character-div #options").length; i++)
        choice.push($($(".character-div")[i]).find(":selected").val());
    let password = generatePassword();
    console.log(password);
    displayPassword(password);
});

function displayPassword(password) {
    let passwd = password.split("");
    let j = 0;
    let k = 0
    let characterDiv = Object.entries($(".character-div")).slice(0, 10);
    characterDiv.forEach(function (value, index) {
        if ($(value).children()[1].value != "empty") {
            $(($(value).children()[0])).text(passwd[j]);
            j++;
        }
    });
    $(".value").text(password);
}

function generatePassword() {
    let password = "";
    choice.forEach(function (value) {
        let ch = refrenceObj[value][Math.floor(Math.random() * refrenceObj[value].length)];
        if (ch != undefined)
            password += ch;
    })
    return password;
}
