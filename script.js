// Function to generate flashcards
async function Flashcard_generator (){
    //Get the notes that the user enters
    const notes =document.getElementById("notes").value;

    // Check if the notes are empty
    if (!notes.trim ()){
        alert("Please enter some notes before generating a flashcard buddy");
        return;
    }
    
    // show loading message
    const container = document.getElementById("Flashcards");
    container.innerHTML = "</p> Flashcards are being generated, Please wait...</p>";

    // send the flashcards to the backend
    try {
        const response = await fetch("Generate",{
            method : "POST",
            headers : {
                "content-type":"application/json"
            },
            body : JSON.stringify({notes: notes})
        })
        const flashcards = await response.json();
        if (flashcards.error){
            container.innerHTML = '<p style="color:red;">Error: $ {flashcards.error}</p>';
            return;
        }

        // Dislay the generated flashcards
        displayFlashcards(flashcards);
    }  catch (error){
            container.innerHTML = "<p style = 'color:red;'>ERROR: Something went wrong. Try again.</p>";
    }

    }
