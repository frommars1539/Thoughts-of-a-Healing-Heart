//save new entry
document.getElementById('saveBtn').addEventListener('click', function() {
    const entryText = document.getElementById("journalEntry").value;
    if (entryText.trim() !== "") {
        document.getElementById("journalEntry").value = "";


        // Save the entry to localStorage
        const savedEntries = JSON.parse(localStorage.getItem("entries")) || [];
        savedEntries.push(entryText);
        localStorage.setItem("entries", JSON.stringify(savedEntries));}
});


