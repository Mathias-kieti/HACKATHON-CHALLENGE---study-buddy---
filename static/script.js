// generate function (consistent name)
async function Flashcard_generator() {
    const notes = document.getElementById("notes").value;
    if (!notes.trim()) {
        alert("Please enter some notes before generating a flashcard buddy");
        return;
    }

    const container = document.getElementById("flashcards");
    container.innerHTML = "<p>Flashcards are being generated, please wait...</p>";

    try {
        const response = await fetch("/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ notes: notes })
        });

        const data = await response.json();

        if (data.error) {
            container.innerHTML = `<p style="color:red;">Error: ${data.error}</p>`;
            return;
        }

        // data should be an array of {question,answer}
        displayFlashcards(data);
    } catch (error) {
        console.error("Fetch error:", error);
        container.innerHTML = `<p style="color:red;">ERROR: ${error.message}</p>`;
    }
}

// display function (create cards)
function displayFlashcards(flashcards) {
    const container = document.getElementById("flashcards");
    container.innerHTML = "";
    flashcards.forEach(card => {
        const cardDiv = document.createElement("div");
        cardDiv.className = "flashcard";
        cardDiv.innerHTML = `
            <div class="flashcard-inner">
                <div class="front">${card.question}</div>
                <div class="back">${card.answer}</div>
            </div>`;
        cardDiv.addEventListener("click", () => cardDiv.classList.toggle("flashcard-hover"));
        container.appendChild(cardDiv);
    });
}
