import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const m={form:document.querySelector(".form")},{form:t}=m;t.addEventListener("submit",o=>{o.preventDefault();const e={delay:t.elements.delay.value,isSuccess:t.elements.state.value};n(e)});function n(o){const{delay:e,isSuccess:l}=o;new Promise((s,i)=>{setTimeout(()=>{l==="fulfilled"?s(`✅ Fulfilled promise in ${e}ms`):i(`❌ Rejected promise in ${e}ms`)},e)}).then(s=>console.log(s)).catch(s=>console.log(s))}
//# sourceMappingURL=commonHelpers2.js.map
