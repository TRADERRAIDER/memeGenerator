const form = document.querySelector('#memeify')
const topText = document.querySelector('input[name = "top-text"]')
// const topTextSizeInput = document.querySelector('input[name = "top-text-size-input"]')
const bottomText = document.querySelector('input[name = "bottom-text"]')
// const bottomTextSizeInput = document.querySelector('input[name = "bottom-text-size-input"]')
const imgInput = document.querySelector('input[name = "img"]')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const newMeme = makeMeme(
        topText.value,
        bottomText.value,
        imgInput.value
    );
    memeland.appendChild(newMeme)
    alert ('DO YOU MEME IT??')
});

function makeMeme(topText, bottomText, image) {
    const meme = document.createElement('body');
    meme.innerText = topText + bottomText + image;
    return meme;
}