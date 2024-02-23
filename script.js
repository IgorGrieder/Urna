// Initial Data

const numbers = document.querySelectorAll(".number");
const confirmVote = document.querySelector(".confirm");
const remedyVote = document.querySelector(".remedy");
const nullVote = document.querySelector(".null");
const boxes = document.querySelectorAll(".box");
const title = document.querySelector("h1");
const warningTop = document.querySelector(".warning-message-top");
const warningBottom = document.querySelector(".warning-message-bottom");

let voteOption = [];

// click events on the numbers and the buttons

for (let item of numbers) {
    item.addEventListener("click", () => {

        // changes the number color
        item.style.backgroundColor = "red";
        setTimeout(() => {
            item.style.backgroundColor = "black";
        })

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
            }
        }
    })
}

// update vote selection space in the display 
function updateVoteSelection() {
    for (let i = 0; i < voteOption.length; i++) {
        boxes[i].innerHTML = voteOption[i];
    }
}