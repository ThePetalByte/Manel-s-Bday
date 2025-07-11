const yayBtn = document.getElementById('yay-btn')
const audio = document.getElementById('bg-song')
const frame1 = document.getElementById('frame1')
const frame2 = document.getElementById('frame2')
const cakeImg = document.getElementById('cake-img') 
const lightItBtn = document.getElementById('light-it-btn')
const yay = document.getElementById("yay")
const frame3 = document.getElementById('frame3')
const studioBtn = document.getElementById('studio-btn')
const frame4 = document.getElementById('frame4')
const takeBtn = document.getElementById('take-a-pic-btn')
const frame5 = document.getElementById('frame5')
const cakeSfx = new Audio('assets/cake.mp3')
const cameraSfx = new Audio('assets/camera.wav')




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
    cakeSfx.play()

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
    frame3.classList.add("fade-out");
    frame3.addEventListener("animationend", () => {
        frame3.style.display = "none";

        // Show frame2 but keep it invisible first
        frame4.style.display = 'block';
        frame4.style.opacity = 0;

        // Force reflow so browser "sees" the opacity change
        void frame4.offsetWidth;

        // Now add fade-in class
        frame4.classList.add("fade-in");})
})


takeBtn.addEventListener('click', () => {
    cameraSfx.play()
    setTimeout(() => {
        
        frame4.classList.add("fade-out");
        frame4.addEventListener("animationend", () => {
            frame4.style.display = "none";
            
            // Show frame2 but keep it invisible first
            frame5.style.display = 'block';
            frame5.style.opacity = 0;
            
            // Force reflow so browser "sees" the opacity change
            void frame5.offsetWidth;
            
            // Now add fade-in class
            frame5.classList.add("fade-in");})
        }, 500);
})
