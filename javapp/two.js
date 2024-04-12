const textarea =document.querySelector("textarea");
const button=document.querySelector("button");
const texttospeech =()=> {
    const synth = window.speechSynthesis;
    const text= textarea.value;
    const utternace = new SpeechSynthesisUtterance(text);
    synth.speak(utternace);
}
button.addEventListener("click",texttospeech);