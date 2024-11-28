const containerText = document.getElementById("containerText");

for (let i = 0; i < 6; i++){
    const colDiv = document.createElement("div");
    colDiv.className = "text-white text-center d-none d-lg-block";

    const h1 = document.createElement("h1");
    h1.className = "display-4";
    h1.textContent = "MUSEUM OF DINO";

    colDiv.appendChild(h1);
    containerText.appendChild(colDiv);
}