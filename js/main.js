/*------ START Accordion Function ------*/
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
/*------ END Accordion Function ---------*/

/*------ START Countdown Functions ------*/
const countDownClock = () => {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let date = "07/15/2023"
    const countDown = new Date(date).getTime(),
        x = setInterval(function () {

            const now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        }, 0)
}

countDownClock();
/*-------- END Countdown Functions -----*/

/*------ START Menu Mobile Function ------*/
let check = document.getElementById("menuToogle");
let menu = document.getElementById('menu');
let body = document.body;
check.addEventListener("click", () => {
    if(check.checked){
        menu.classList.add('show');
        body.classList.add('no-scroll');
    } else{
        menu.classList.remove('show')
        body.classList.remove('no-scroll')
    }
})
/*------ END Menu Mobile Function ------*/
