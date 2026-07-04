// Loading Screen
window.onload = () => {

    setTimeout(() => {

        document.getElementById("loading").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("loading").style.display = "none";
            document.getElementById("main").style.display = "flex";

            document.getElementById("title").innerHTML =
                "❤️ Hey Salomi or should i call you fattu❤️";

            typeWriter();

        }, 700);

    }, 2500);

};


// Romantic Message
const message = `

They say...

Love arrives when you least expect it.

Maybe that's true...

Because I never planned on meeting someone
who would quietly become my favorite thought.

Every notification from you...

Every smile...

Every conversation...

Made ordinary days feel extraordinary.

Somehow...

You became the first person I want to tell everything to.

The one I look for...

Without even realizing it.

And today...

There's just one thing my heart wants to ask...

❤️
`;

let index = 0;

function typeWriter() {

    const text = document.getElementById("message");

    if (index < message.length) {

        text.innerHTML += message.charAt(index);

        index++;

        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });

        setTimeout(typeWriter, 35);

    }

}


// Proposal Page
function nextScene() {

    const box = document.querySelector(".glass-card");

    box.style.opacity = "0";

    setTimeout(() => {

        document.getElementById("title").innerHTML =
            "❤️ One Last Question ❤️";

        document.getElementById("message").innerHTML = `

        <h2 style="margin-bottom:20px;">
            Will you make my life more beautiful
            by becoming a part of it?
        </h2>

        <p style="margin-bottom:30px;">
            I promise to annoy you forever,
            make you laugh,
            support your dreams,
            and love you a little more every single day. ❤️
        </p>

        <div class="buttons">

            <button id="yes" onclick="yesClicked()">
                YES ❤️
            </button>

            <button id="no"
                onmouseover="moveButton()"
                onclick="moveButton()">
                NO 😅
            </button>

        </div>

        `;

        box.style.opacity = "1";

    }, 500);

}


// YES
function yesClicked() {

    createHearts();

    document.body.innerHTML = `

    <div class="success">

        <h1>❤️ YAYYY!! ❤️</h1>

        <h2>
            You just made me
            the happiest person alive.
        </h2>

        <p>

            I promise to cherish you,
            respect you,
            make memories with you,
            and keep choosing you
            every single day.

            ❤️ Forever Starts Here ❤️

        </p>

    </div>

    `;

}


// NO Button
function moveButton() {

    const btn = document.getElementById("no");

    const x = Math.random() * (window.innerWidth - 180);

    const y = Math.random() * (window.innerHeight - 120);

    btn.style.position = "fixed";

    btn.style.transition = ".25s";

    btn.style.left = x + "px";

    btn.style.top = y + "px";

}


// Floating Hearts
function createHearts() {

    for (let i = 0; i < 60; i++) {

        let heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = (20 + Math.random() * 25) + "px";
        heart.style.pointerEvents = "none";
        heart.style.animation =
            `float ${4 + Math.random() * 4}s linear forwards`;

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 8000);

    }

}