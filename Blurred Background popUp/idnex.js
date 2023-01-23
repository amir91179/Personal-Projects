const containerBtnEl = document.querySelector(".btn");
const containerEl = document.querySelector(".container");
const popContainerEl = document.querySelector(".popup-container");
const popCloseEl = document.querySelector(".closeIcon");


containerBtnEl.addEventListener("click", ()=>{
    containerEl.classList.add("active");
    popContainerEl.classList.remove("invisible");
});

popCloseEl.addEventListener("click", ()=>{
    containerEl.classList.remove("active");
    popContainerEl.classList.add("invisible");
});
