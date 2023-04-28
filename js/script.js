{
    const welcome = () => {
        console.log("Hi everyone!");
    }
    welcome()

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".js-themeName");
        body.classList.toggle("white")
        themeName.innerText = body.classList.contains("white") ? "ciemny" : "jasny";
    }

    const init = () => {
        const changeBackgroundButton = document.querySelector(".js-changeBackground");
        changeBackgroundButton.addEventListener("click", toggleBackground)
    }

    init()

}