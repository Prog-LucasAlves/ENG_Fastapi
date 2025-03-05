async function addItem() {
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;

    const response = await fetch("/items/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description })
    });

    const newItem = await response.json();
    document.getElementById("items").innerHTML += `<li>${newItem.name}: ${newItem.description}</li>`;
}
