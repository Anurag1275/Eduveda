const textdisplay = document.getElementsByClassName('textdisplay'); 
const text = ['Creation..!', 'Admiration..!','Innovation..!'];
let index = 0;

function changetext() {
    Array.from(textdisplay).forEach(el => {
        el.textContent = text[index];
        el.style.transform = 'scale(1.2)';
    });

    index = (index + 1) % text.length;

    setTimeout(() => {
        Array.from(textdisplay).forEach(el => {
            el.style.transform = 'scale(1)';
        });
    }, 2000);
}

setInterval(changetext, 2000);

changetext();
function toggleAnswer(element) {
    const answer = element.nextElementSibling; 
    
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block"; r
    }
}
