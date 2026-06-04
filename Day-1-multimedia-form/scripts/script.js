function showForm(formType){
    let signin=document.getElementById("signin");
    let signup=document.getElementById("signup");
    let tabs=document.querySelectorAll(".tab");
    tabs.forEach(tab=>{
        tab.classList.remove("active");
    });
    if(formType==="signin"){
        signin.classList.remove("hidden");
        signup.classList.add("hidden");
        tabs[0].classList.add("active");
    }
    else{
        signup.classList.remove("hidden");
        signin.classList.add("hidden");
        tabs[1].classList.add("active");
    }
}

/* REGISTRATION VALIDATION */

function validate(event){
    event.preventDefault();
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("pass1").value;
    let confirmPassword=document.getElementById("pass2").value
    const nonAlphabetRegex=/[^\p{L}\s]/u;
    if(nonAlphabetRegex.test(name)){
        alert("Name should contain only alphabets");
        return;
    }
    if(password.length<8){
        alert("Password should contain minimum 8 characters");
        return;
    }
    if(password!==confirmPassword){
        alert("Passwords do not match");
        return;
    }
    alert("Registration Successful");
}

const menu=document.querySelector(".menu-icon");
const nav=document.querySelector(".text");
menu.addEventListener("click",()=>{
    nav.classList.toggle("active");
});



/* AUDIO EVENT */

const audio=document.getElementById("intro-audio");
if(audio){
    audio.addEventListener("play",()=>{
        console.log(
        `[Audio] Played: speech1.mp3 | Duration: ${Math.round(audio.duration)}s`);
    });
}

/* VIDEO EVENT */

const video=document.querySelector("video");
if(video){
    video.addEventListener("play",()=>{
        console.log(`[Video] Played: skillsec.mp4 | Resolution: ${video.videoWidth}x${video.videoHeight}`);
    });
}


const frame=document.querySelector("iframe");
if(frame){
    frame.addEventListener("load",()=>{
        console.log(`[i-frame Loaded] ${frame.src}`);
    });
}

if(window.innerWidth<=768){
    console.log("[Layout] Columns collapsed on mobile breakpoint");
}