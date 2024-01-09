const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const popup = document.getElementById("popup");

noButton.addEventListener("mouseover", () => {
    noButton.style.position = "absolute";
    noButton.style.left = Math.random() * 80 + "vw";
    noButton.style.top = Math.random() * 80 + "vh";
});

yesButton.addEventListener("click", () => {
    popup.style.display = "block";
    popup2.style.display = "block";
});

popup.addEventListener("click", () => {
    popup.style.display = "none";
    popup2.style.display = "block";
});

// Hide the popup initially
popup.style.display = "none";
popup2.style.display = "none";

const deleteButton = document 
            .getElementById('yes-btn'); 
        const imageElement = document 
            .getElementById('image'); 
  
        deleteButton.addEventListener('click', 
            function () { 
                imageElement.parentNode.removeChild(imageElement); 
            }); 