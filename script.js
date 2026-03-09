document.getElementById('saveBtn').addEventListener('click', function() {
    const entryText = document.getElementById("journalEntry").value;
    if (entryText.trim() !== "") {
        const entryDiv = document.createElement("div");
        entryDiv.textContent = entryText;
        document.getElementById("entries").appendChild(entryDiv);
        document.getElementById("journalEntry").value = "";
    }
});

//Load saved entries when the page starts
window.onload = function() {
    const savedEntries = JSON.parse(localStorage.getItem("entries")) || [];
    savedEntries.forEach(text => {
        const entryDiv = document.createElement("div");
        entryDiv.textContent = text;
        document.getElementById("entries").appendChild(entryDiv);
    })
};

//save new entry
document.getElementById('saveBtn').addEventListener('click', function() {
    const entryText = document.getElementById("journalEntry").value;
    if (entryText.trim() !== "") {
        const entryDiv = document.createElement("div");
        entryDiv.textContent = entryText;
        document.getElementById("entries").appendChild(entryDiv);
        document.getElementById("journalEntry").value = "";


        // Save the entry to localStorage
        const savedEntries = JSON.parse(localStorage.getItem("entries")) || [];
        savedEntries.push(entryText);
        localStorage.setItem("entries", JSON.stringify(savedEntries));}
});


