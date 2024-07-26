document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const img = new Image();
    img.src = 'https://coreldrawdesign.com/resources/previews/preview-happy-love-emoji-3d-wallpaper,-download-free-amazing-high-resolution-backgrounds,-images-1636366955.jpg';
    img.onload = function() {
        body.style.backgroundImage = `url(${img.src})`;
    };
});
// https://coreldrawdesign.com/resources/previews/preview-happy-love-emoji-3d-wallpaper,-download-free-amazing-high-resolution-backgrounds,-images-1636366955.jpg'

const AllJokes = [
    "<b>Why do programmers prefer dark mode?</b><br> Because light attracts bugs!",
    "<b>What’s the first step in understanding Recursion?</b><br> To understand recursion, you have to first understand recursion.",
    "<b>Why did the programmer quit his job?</b><br> He didn't get arrays",
    "<b>There are 10 types of people in this world. Those who understand binary and those who don’t.</b>",
    "<b>Why do Java developers wear glasses?</b><br> Because they can't C#."
];
const AllExp = [
    "This joke is a play on words with two different meanings of the word 'bugs.' In programming, bugs are errors or glitches in the code. However, bugs can also refer to insects that are attracted to light. The dark mode is easier on the eyes and reduces eye strain, but it can also help reduce the number of bugs in your code.",
    "In programming, recursion is a process of solving a computational problem where the solution relies on solutions of smaller versions of the same problem. It uses functions that call themselves from within their own code. Because the punch line refers to itself, the only way someone would find this developer joke amusing is if they already understand recursion, which is, as we all know, the first step in understanding recursion.",
    "Arrays are a fundamental data structure used in programming languages to store collections of related values. This joke is a play on words with the phrase 'a raise,' which means to receive a pay increase at work. The joke implies that the programmer did not understand how to work with arrays and therefore could not perform his job effectively, leading to his resignation.",
    "This is a binary joke, with binary referring to a base-2 system. Because it is a base-2 system, it only has two digits, 0 and 1. We get 1 * 21 + 0 * 20 = 1 * 2 + 0 = 2 when we convert binary 10 to decimal. As a result, the joke means 'There are two kinds of humans. Those who comprehend binary and those who do not.' If you don't understand binary, you'd assume there are ten different types of humans, which is strange. Together with decimal (base-10), octal (base-8), and binary (base-2), hexadecimal (base-16) is widely used in programming. The 'digits' above 9 are the letters A, B, C, D, E, and F.",
    "This joke is a play on words with two programming languages: Java and C#. Java is a popular object-oriented programming language used for developing desktop and mobile applications. C# is a similar programming language developed by Microsoft. The joke suggests that Java developers are near-sighted or have poor vision because they cannot see the sharpness symbol in C# (C-Sharp)."
];

let ind = null;

function getJoke() {
    ind = Math.floor(Math.random() * AllJokes.length);
    const text = document.getElementById('joke');
    text.innerHTML = AllJokes[ind];

    const expBtn = document.getElementById('expBtn');
    expBtn.style.display = 'block';

    const expl = document.getElementById('exp');
    exp.style.display = 'none';

}

function showExplanation() {
    const exp = document.getElementById('exp');
    exp.innerHTML = AllExp[ind];
    exp.style.display = 'block';

    const btn = document.getElementById('expBtn');
    btn.style.display = 'none';
}
