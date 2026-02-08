// 1. Soo qaado walxaha HTML-ka (DOM Elements)
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

/**
 * Shaqada lagu darayo hawl cusub
 */
function addTask() {
    // Hubi haddii meesha wax laga qoro ay madhan tahay
    if (inputBox.value.trim() === '') {
        alert("Fadlan qor wax qorshe ah!");
    } 
    else {
        // Samee lix (li) cusub
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        // Samee calaamadda tirtirista (×) ee dhinaca midig
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; 
        li.appendChild(span);
    }
    
    // Nadiifi sanduuqa qoraalka marka hawsha lagu daro ka dib
    inputBox.value = "";
    saveData(); // Kaydi xogta cusub
}

/**
 * Shaqada lagu calaamadinayo ama lagu tirtirayo hawlaha
 */
listContainer.addEventListener("click", function(e) {
    // Haddii la gujiyo qoraalka (LI) - calaamadi inay dhammaatay
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } 
    // Haddii la gujiyo calaamadda (SPAN) - tirtir hawsha
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

/**
 * In xogta lagu kaydiyo browser-ka (LocalStorage)
 */
function saveData() {
    localStorage.setItem("myTasks", listContainer.innerHTML);
}

/**
 * In xogta dib looga soo saaro kaydka markasta oo bogga la furo
 */
function showTask() {
    const savedData = localStorage.getItem("myTasks");
    if (savedData) {
        listContainer.innerHTML = savedData;
    }
}

// U yeedh shaqada soo saarista xogta markii u horraysay
showTask();