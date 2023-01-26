const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
}
document.getElementById("btn1").addEventListener("click", getColor)

getColor();