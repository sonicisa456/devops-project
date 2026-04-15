const API = `http://${window.location.hostname}:3000`;

async function send() {
    const text = document.getElementById("input").value;

    const res = await fetch(API + "/query", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ text })
    });

    // 👇 VALIDACIÓN CLAVE
    const contentType = res.headers.get("content-type");

    if (contentType && contentType.includes("application/json")) {
        const data = await res.json();
        console.log(data);
    } else {
        console.error("Respuesta no es JSON");
    }

    load();
}

async function load() {
    const res = await fetch(API + "/queries");

    const contentType = res.headers.get("content-type");

    if (!contentType || !contentType.includes("application/json")) {
        console.error("Respuesta inválida");
        return;
    }

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