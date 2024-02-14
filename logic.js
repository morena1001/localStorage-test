var id = localStorage.getItem("id");
var wordsArray = localStorage.getItem("words") ? JSON.parse(localStorage.getItem("words")) : [];

document.getElementById("submit").addEventListener("click", function() {
    document.getElementById("list-body").innerHTML = "";
    if (document.getElementById("input").value != "") {
        let word = '{"id": ' + ++id + ', "word": "' + document.getElementById("input").value.toString() + '"}';
        console.log(JSON.parse(word));
        wordsArray.push(JSON.parse(word));
        localStorage.setItem("words", JSON.stringify(wordsArray));
    }

    for(let i = 0; i < wordsArray.length; i++) {
        const li = document.createElement("li");
        li.setAttribute("id", wordsArray[i].id);
        li.textContent = wordsArray[i].word;
        document.getElementById("list-body").appendChild(li);
    }
});