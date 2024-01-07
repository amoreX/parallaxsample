const paral = document.querySelectorAll(".parallax");

let xVal = 0, yVal = 0;

window.addEventListener("mousemove", (e) => {
    xVal = e.clientX - window.innerWidth / 2;
    yVal = e.clientY - window.innerHeight / 2;

    console.log(xVal, yVal);
    paral.forEach((item) => {
		let speedx=item.dataset.speedx;
        item.style.transform = `translateX(calc(-50% + ${-xVal*speedx}px)) translateY(calc(-50% + ${yVal*speedx}px))`;
    });
});

