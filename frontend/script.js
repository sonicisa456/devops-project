const API = "http://localhost:3000";

async function send() {
    const text = document.getElementById("input").value;

    await fetch(API + "/query", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ text })
    });

    load();
}

async function load() {
    const res = await fetch(API + "/queries");
    const data = await res.json();

    const list = document.getElementById("list");
    list.innerHTML = "";

    data.forEach(q => {
        const li = document.createElement("li");
        li.textContent = q.text;
        list.appendChild(li);
    });
}

load();