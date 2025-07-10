const yayBtn = document.getElementById('yay-btn')
const audio = document.getElementById('bg-song')
const frame1 = document.getElementById('frame1')
const frame2 = document.getElementById('frame2')
const cakeImg = document.getElementById('cake-img') 
const lightItBtn = document.getElementById('light-it-btn')
const yay = document.getElementById("yay")
const frame = document.getElementById('frame3')
const studioBtn = document.getElementById('studio-btn')


yayBtn.addEventListener('click', () => {
    audio.play()
    frame1.classList.add("fade-out")

    frame1.addEventListener("animationend", () => {
        frame1.style.display = "none";

        // Show frame2 but keep it invisible first
        frame2.style.display = 'block';
        frame2.style.opacity = 0;

        // Force reflow so browser "sees" the opacity change
        void frame2.offsetWidth;

        // Now add fade-in class
        frame2.classList.add("fade-in");
        setTimeout(() => {
            cakeImg.classList.add("fade-in");
        }, 2000);
        setTimeout(() => {
            lightItBtn.classList.add("fade-in")
        }, 4000); // 2 sec after frame2 fade starts
    }, { once: true })
})

lightItBtn.addEventListener('click', () => {
    cakeImg.src="assets/lit-cake.png"
    lightItBtn.classList.add("fade-out");
    lightItBtn.addEventListener("animationend", () => {
        lightItBtn.style.display="none";
            yay.classList.add("fade-in")

    }, {once:true})

    setTimeout(() => {
        
        frame2.classList.add("fade-out");
        frame2.addEventListener('animationend',() => {
            frame2.style.display="none";
            frame3.style.display = "block";
            frame2.style.opacity = 0;

        // Force reflow so browser "sees" the opacity change
        void frame2.offsetWidth;
                frame3.classList.add("fade-in");

        })
    }, 4000);
})

studioBtn.addEventListener('click', () => {
    
})

