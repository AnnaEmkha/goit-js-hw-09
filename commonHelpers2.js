import"./assets/modulepreload-polyfill-3cfb730f.js";const t={email:"",message:""},a=document.querySelector(".feedback-form");a.addEventListener("input",r);a.addEventListener("submit",l);function r(e){const s=e.target.name;t[s]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))}function l(e){const{email:s,message:n}=a.elements;if(e.preventDefault(),s.value===""||n.value===""){alert("Fill please all fields");return}localStorage.removeItem("feedback-form-state"),t.email="",t.message="",a.reset()}
//# sourceMappingURL=commonHelpers2.js.map
