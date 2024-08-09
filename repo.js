let circularProgress = document.querySelector(".circular-progress"),
    progressValue=document.querySelector(".progress-value");

let progressStartValue = 0,
    progressEndValue = 90,
    speed = 100;


let progress = setInterval(()=>{
    progressStartValue++;
    progressValue.textContent =`${progressStartValue}%`
    
    circularProgress.style.background =`conic-gradient(#c3aaef ${progressStartValue *  3.6}deg , #9534f1 0deg)`
    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }
    // console.log(progressStartValue)

},speed)


let circularProgress1 = document.querySelector(".circular-progress-1"),
    progressValue1 =document.querySelector(".progress-value-1");

let progressStartValue1 = 0,
    progressEndValue1 = 90,
    speed1 = 100;


let progress1 = setInterval(()=>{
    progressStartValue1++;
    progressValue1.textContent =`${progressStartValue1}%`
    
    circularProgress1.style.background =`conic-gradient(#c3aaef ${progressStartValue1 *  3.6}deg , #9534f1 0deg)`
    if(progressStartValue1 == progressEndValue1){
        clearInterval(progress1);
    }
    // console.log(progressStartValue)

},speed1)





let circularProgress2 = document.querySelector(".circular-progress-2"),
    progressValue2 =document.querySelector(".progress-value-2");

let progressStartValue2 = 0,
    progressEndValue2 = 80,
    speed2 = 100;


let progress2 = setInterval(()=>{
    progressStartValue2++;
    progressValue2.textContent =`${progressStartValue2}%`
    
    circularProgress2.style.background =`conic-gradient(#c3aaef ${progressStartValue2 *  3.6}deg , #9534f1 0deg)`
    if(progressStartValue2 == progressEndValue2){
        clearInterval(progress2);
    }
    // console.log(progressStartValue)

},speed2)




let circularProgress3 = document.querySelector(".circular-progress-3"),
    progressValue3 =document.querySelector(".progress-value-3");

let progressStartValue3 = 0,
    progressEndValue3 = 80,
    speed3 = 100;


let progress3 = setInterval(()=>{
    progressStartValue3++;
    progressValue3.textContent =`${progressStartValue3}%`
    
    circularProgress3.style.background =`conic-gradient(#c3aaef ${progressStartValue3 *  3.6}deg , #9534f1 0deg)`
    if(progressStartValue3 == progressEndValue3){
        clearInterval(progress3);
    }
    // console.log(progressStartValue)

},speed3)


const resumeButton = document.getElementById('resumeButton');

resumeButton.addEventListener('click', () => {
  window.open('MyResume1.pdf', '_blank'); // Replace 'your_resume.pdf' with your actual resume file path
});