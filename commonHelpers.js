import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as p,i as f}from"./assets/vendor-77e16229.js";const g={userInput:document.querySelector('input[type="text"]'),strButton:document.querySelector("button[data-start]"),userDays:document.querySelector("span[data-days"),userHours:document.querySelector("span[data-hours"),userMinutes:document.querySelector("span[data-minutes"),userSeconds:document.querySelector("span[data-seconds")},{userInput:r,strButton:e,userDays:y,userHours:h,userMinutes:T,userSeconds:D}=g;let a=0,u=null;e.addEventListener("click",()=>i());const M={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){v(t[0]),a=t[0].getTime()}};p(r,M);function i(){u=setTimeout(q,1e3)}function q(){let t=new Date().getTime();const n=a-t;if(n<=0)return clearTimeout(u),r.disabled=!1,o(0);const s=o(n);w(s),i()}function v(t){if(t.getTime()<new Date().getTime())return C();e.classList.add("isActive")}function w(t){r.disabled=!0,y.textContent=String(t.days).padStart(2,"0"),h.textContent=String(t.hours).padStart(2,"0"),T.textContent=String(t.minutes).padStart(2,"0"),D.textContent=String(t.seconds).padStart(2,"0")}function C(){f.warning({title:"Warning",message:"Please choose a date in the future"}),e.classList.contains("isActive")&&e.classList.remove("isActive")}function o(t){const d=String(Math.floor(t/864e5)).padStart(2,"0"),l=String(Math.floor(t%864e5/36e5)).padStart(2,"0"),m=String(Math.floor(t%864e5%36e5/6e4)).padStart(2,"0"),S=String(Math.floor(t%864e5%36e5%6e4/1e3)).padStart(2,"0");return{days:d,hours:l,minutes:m,seconds:S}}
//# sourceMappingURL=commonHelpers.js.map
