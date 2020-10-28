
window.onload = presentScene;

function presentScene() {
    alert("Welcome to my game! Hope you like it. Click on the button to the left to start playing");
}

function startGame() {
    let person = prompt("You have entered the other realm and you are being attacked by some ghouls. Do you choose to hide or fight them?");
    if (person == null || person =="") {
        alert ("You fool! The ghouls have eaten you alive. Game over.");
    }
    else if (person == "fight") {
        alert ("You are a brave one. You have fought and died. Game over");
    }
    else if (person == "hide") {
        alert ("You are hiding in a cave. Wait here until the coast clears");
            let person2 = prompt("You're walking inside the cage and you are starting to feel safe when a bear appears. You have the option to run again or fight. What do you choose?"); 
                if (person2 == null || person =="") {
                    alert ("You fool! The bear has eaten you alive. Game over.");
                }
                else if (person2 == "run") {
                    alert ("You have run like a champ and now you're back amongst the living. Well done! End of game.");
                }

                else if (person2 == "fight") {
                    alert ("The bear has eaten you alive. Did you really think you could kill a bear...? :( Game over.");
                }
            }
    
}