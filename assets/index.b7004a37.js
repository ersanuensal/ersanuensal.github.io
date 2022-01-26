import{r as O,c as I,a as u,o as c,b as h,d as i,w as g,v as b,e as A,t as N,f as E,n as _,g as S,h as z,i as w,j as P,k as U,l as j}from"./vendor.04f159f0.js";const C=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&e(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}};C();const f=O({user:{}}),M="https://oyioqvxlilouegwbeekh.supabase.co",B="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQzMDQ0MjY5LCJleHAiOjE5NTg2MjAyNjl9.kTzSGH01qKcDB7tuNFODKL20eBZZm8srXFI02ZVFOD8",d=I(M,B);var y=(a,t)=>{const n=a.__vccOpts||a;for(const[e,o]of t)n[e]=o;return n};const D={setup(){const a=u(!1),t=u(""),n=u("");return{loading:a,email:t,password:n,handleLogin:async()=>{try{a.value=!0;const{user:o,error:s}=await d.auth.signIn({email:t.value,password:n.value});if(s)throw s}catch(o){alert(o.error_description||o.message)}finally{a.value=!1}}}}},F={class:"col-6 form-widget"},J=i("h1",{class:"header"},"Blind Date",-1),V=i("p",{class:"description"},"Sign in via email and password below",-1),q=["value","disabled"],W=["value","disabled"];function Y(a,t,n,e,o,s){return c(),h("form",{class:"row flex flex-center",onSubmit:t[2]||(t[2]=A((...l)=>e.handleLogin&&e.handleLogin(...l),["prevent"]))},[i("div",F,[J,V,i("div",null,[g(i("input",{class:"inputField",type:"email",placeholder:"Your email","onUpdate:modelValue":t[0]||(t[0]=l=>e.email=l)},null,512),[[b,e.email]]),g(i("input",{class:"inputField",type:"password",placeholder:"Your password","onUpdate:modelValue":t[1]||(t[1]=l=>e.password=l)},null,512),[[b,e.password]])]),i("div",null,[i("input",{type:"submit",class:"button block",value:e.loading?"Loading":"Login",disabled:e.loading},null,8,q),i("input",{type:"button",class:"button block",value:e.loading?"Loading":"Sign Up",disabled:e.loading},null,8,W)])])],32)}var K=y(D,[["render",Y]]);const R={props:{path:String},emits:["upload","update:path"],setup(a,{emit:t}){const{path:n}=N(a),e=u("10em"),o=u(!1),s=u(""),l=u(),r=async()=>{try{const{data:m,error:v}=await d.storage.from("avatars").download(n.value);if(v)throw v;s.value=URL.createObjectURL(m)}catch(m){console.error("Error downloading image: ",m.message)}},p=async m=>{l.value=m.target.files;try{if(o.value=!0,!l.value||l.value.length===0)throw new Error("You must select an image to upload.");const v=l.value[0],x=v.name.split(".").pop(),k=`${`${Math.random()}.${x}`}`;let{error:L}=await d.storage.from("avatars").upload(k,v);if(L)throw L;t("update:path",k),t("upload")}catch(v){alert(v.message)}finally{o.value=!1}};return E(n,()=>{n.value&&r()}),{path:n,size:e,uploading:o,src:s,files:l,uploadAvatar:p}}},Z=["src"],G={class:"button primary block",for:"single"},H=["disabled"];function T(a,t,n,e,o,s){return c(),h("div",null,[e.src?(c(),h("img",{key:0,src:e.src,alt:"Avatar",class:"avatar image",style:_({height:e.size,width:e.size})},null,12,Z)):(c(),h("div",{key:1,class:"avatar no-image",style:_({height:e.size,width:e.size})},null,4)),i("div",{style:_({width:e.size})},[i("label",G,S(e.uploading?"Uploading ...":"Upload"),1),i("input",{style:{visibility:"hidden",position:"absolute"},type:"file",id:"single",accept:"image/*",onChange:t[0]||(t[0]=(...l)=>e.uploadAvatar&&e.uploadAvatar(...l)),disabled:e.uploading},null,40,H)],4)])}var X=y(R,[["render",T]]);const Q={components:{Avatar:X},setup(){const a=u(!0),t=u(""),n=u(""),e=u("");async function o(){try{a.value=!0,f.user=d.auth.user();let{data:r,error:p,status:m}=await d.from("profiles").select("username, website, avatar_url").eq("id",f.user.id).single();if(p&&m!==406)throw p;r&&(t.value=r.username,n.value=r.website,e.value=r.avatar_url)}catch(r){alert(r.message)}finally{a.value=!1}}async function s(){try{a.value=!0,f.user=d.auth.user();const r={id:f.user.id,username:t.value,website:n.value,avatar_url:e.value,updated_at:new Date};let{error:p}=await d.from("profiles").upsert(r,{returning:"minimal"});if(p)throw p}catch(r){alert(r.message)}finally{a.value=!1}}async function l(){try{a.value=!0;let{error:r}=await d.auth.signOut();if(r)throw r}catch(r){alert(r.message)}finally{a.value=!1}}return z(()=>{o()}),{store:f,loading:a,username:t,website:n,avatar_url:e,updateProfile:s,signOut:l}}},$=i("label",{for:"email"},"Email",-1),ee=["value"],te=i("label",{for:"username"},"Name",-1),ae=i("label",{for:"website"},"Website",-1),oe=["value","disabled"],re=["disabled"];function ne(a,t,n,e,o,s){const l=w("Avatar");return c(),h("form",{class:"form-widget",onSubmit:t[4]||(t[4]=A((...r)=>e.updateProfile&&e.updateProfile(...r),["prevent"]))},[P(l,{path:e.avatar_url,"onUpdate:path":t[0]||(t[0]=r=>e.avatar_url=r),onUpload:e.updateProfile},null,8,["path","onUpload"]),i("div",null,[$,i("input",{id:"email",type:"text",value:e.store.user.email,disabled:""},null,8,ee)]),i("div",null,[te,g(i("input",{id:"username",type:"text","onUpdate:modelValue":t[1]||(t[1]=r=>e.username=r)},null,512),[[b,e.username]])]),i("div",null,[ae,g(i("input",{id:"website",type:"website","onUpdate:modelValue":t[2]||(t[2]=r=>e.website=r)},null,512),[[b,e.website]])]),i("div",null,[i("input",{type:"submit",class:"button block primary",value:e.loading?"Loading ...":"Update",disabled:e.loading},null,8,oe)]),i("div",null,[i("button",{class:"button block",onClick:t[3]||(t[3]=(...r)=>e.signOut&&e.signOut(...r)),disabled:e.loading}," Sign Out ",8,re)])],32)}var ie=y(Q,[["render",ne]]);const se={components:{Auth:K,Profile:ie},created(){this.$workbox&&this.$workbox.addEventListener("waiting",()=>{this.showUpdateUI=!0})},setup(){return f.user=d.auth.user(),d.auth.onAuthStateChange((a,t)=>{f.user=t.user}),{store:f}}};"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("service-worker.js")});function le(a){return a&&a.status===200&&a.type==="basic"}self.addEventListener("fetch",function(a){a.respondWith(caches.match(a.request).then(function(t){return t||fetch(a.request.clone()).then(function(n){return le(n)&&caches.open(CACHE_NAME).then(function(e){e.put(a.request,n.clone())}),n})}))});const ue={class:"container",style:{padding:"50px 0 100px 0"}};function de(a,t,n,e,o,s){const l=w("Profile"),r=w("Auth");return c(),h("div",ue,[e.store.user?(c(),U(l,{key:0})):(c(),U(r,{key:1}))])}var ce=y(se,[["render",de]]);j(ce).mount("#app");
