import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i}from"./assets/vendor-77e16229.js";const l={form:document.querySelector(".form")},{form:o}=l;o.addEventListener("submit",t=>{t.preventDefault();const e={delay:o.elements.delay.value,isSuccess:o.elements.state.value};r(e)});function r(t){const{delay:e,isSuccess:m}=t;new Promise((s,n)=>{setTimeout(()=>{m==="fulfilled"?s(i.success({title:"OK",message:`✅ Fulfilled promise in ${e}ms`})):n(i.warning({title:"Warning",message:`❌ Rejected promise in ${e}ms`}))},e)}).then(s=>console.log(s)).catch(s=>console.log(s))}
//# sourceMappingURL=commonHelpers2.js.map
