// Initial Data

const numbers = document.querySelectorAll(".number");
const confirmVote = document.querySelector(".confirm");
const remedyVote = document.querySelector(".remedy");
const nullVote = document.querySelector(".null");
const boxes = document.querySelectorAll(".box");
const title = document.querySelector("h1");
const warningTop = document.querySelector(".warning-message-top");
const warningBottom = document.querySelector(".warning-message-bottom");
const img = document.querySelector(".display-right img");

let voteOption = [];
let votes = [];
let numVotes = 1;

// ------------------------------ click events on the numbers and the buttons ------------------------------

for (let item of numbers) {
    item.addEventListener("click", () => {

        // changes the number color
        item.style.backgroundColor = "red";
        setTimeout(() => {
            item.style.backgroundColor = "black";
        }, 200);

        // if the vote option isn't already filled
        if (voteOption.length < 5) {
            // collects the pressed button
            let number = item.innerHTML;
            voteOption.push(number);
            updateVoteSelection();

            // if the selection is filled after the last number digited it shows the warnings 
            if (voteOption.length === 5) {
                warningTop.querySelector("span").style.display = "block";
                warningBottom.querySelector("span").style.display = "block";
                if ((candidates.find((item) => voteOption.join("") === item.number)) !== undefined) {
                    let candidate = candidates.find((item) => voteOption.join("") === item.number);
                    title.innerHTML = candidate.name;
                    img.style.display = "block";
                    
                    // to change the color
                    setTimeout(() => {
                        img.src = candidate.img;
                    }, 200);
                }
            }
        }
    })
}   

// starts the voting again
remedyVote.addEventListener("click", () => {
    clearImg();
    clearVoteSelection();
});

// compute the vote
confirmVote.addEventListener("click", () => {
    // checks if th candidate exists
    if (candidates.find((item) => voteOption.join("") === item.number) !== undefined) {
        let candidate = candidates.find((item) => voteOption.join("") === item.number);
        let newVote = {
            id: numVotes,
            number: voteOption.join(""),
        };
        
        // computes the vote
        votes.push(newVote);
        candidate.votes++;
        numVotes++;
        
        // resets the display area
        title.innerHTML = "PRESIDENT";
        clearImg();
        clearVoteSelection();
    } else {
        alert("Número de candidato inexistente, tente novamente");
        clearVoteSelection();
    }
});

// computes a white vote
nullVote.addEventListener("click", () => {
    alert("Voto em Nulo computado");
    votes.push({
        id: numVotes,
        number: "null"
    });
    numVotes++;
});

// ------------------------------ general functions ------------------------------

// clears the img
function clearImg() {
    // clear the img 
    setTimeout(() => {
        img.setAttribute("src", " ");
    }, 200);
    img.style.display = "none";
}

// update vote selection space in the display 
function updateVoteSelection() {
    for (let i = 0; i < voteOption.length; i++) {
        boxes[i].innerHTML = voteOption[i];
    }

    // change the next number icon selection indicator
    document.querySelector(".nextNumber").classList.remove("nextNumber");
    if (voteOption.length < 5) {
        boxes[voteOption.length].classList.add("nextNumber");
    }
}

// clear the vote selection
function clearVoteSelection() {
    warningTop.querySelector("span").style.display = "none";
    warningBottom.querySelector("span").style.display = "none";
    clearImg();
    title.innerHTML = "PRESIDENT";

    for (let box of boxes) {
        box.innerHTML = "";
    }

    boxes[0].classList.add("nextNumber");
    voteOption = [];
}