setTimeout(() => {
    document.getElementById("loading").style.display = "none";
    document.getElementById("main").style.display = "block";

    document.getElementById("title").innerHTML = "❤️ yk salomi ❤️";

    typeWriter();
}, 3000);

const message =
`
They say it takes courage to fall in love...

Well...

I guess I have that courage.

Because somewhere along the way,
you became more important to me than my morning coffee,
my sleep...

maybe even oxygen. ❤️

And today...



There's something I want to ask you something my dear fattu ...`;

let index = 0;

function typeWriter() {
    if (index < message.length) {
        document.getElementById("message").innerHTML += message.charAt(index);
        index++;
        setTimeout(typeWriter, 45);
    }
}

function nextScene() {

    document.getElementById("title").innerHTML = "❤️";

    document.getElementById("message").innerHTML = `
    <h2>Will you make my life beautiful by being a part of it?</h2>

    <br>

    <button onclick="yesClicked()" id="yes">YES ❤️</button>

    <button id="no" onmouseover="moveButton()">NO 😅</button>
    `;
}

function yesClicked() {

    document.body.innerHTML = `
    <div style="display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    background:#111;
    color:white;
    font-size:45px;
    text-align:center;">
    ❤️ Thank You ❤️<br><br>
    You just made me the happiest person alive!
    </div>
    `;
}

function moveButton() {

    let btn = document.getElementById("no");

    btn.style.position = "absolute";

    btn.style.left = Math.random() * (window.innerWidth - 150) + "px";

    btn.style.top = Math.random() * (window.innerHeight - 80) + "px";
}