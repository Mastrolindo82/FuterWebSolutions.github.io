import{a}from"https://app.framerstatic.com/chunk-56USAD5N.mjs";import{a as n}from"https://app.framerstatic.com/chunk-DFNFZLDR.mjs";import"https://app.framerstatic.com/chunk-B3PEGEKP.mjs";function c(){return!new URL(window.location.href).searchParams.get("source")?.endsWith(n().previewDomain)}async function d(){let e=window.deferredJsFiles;if(!e)return;let r=e.map(o=>new Promise((s,i)=>{let t=document.createElement("script");t.src=o,t.async=!1,t.defer=!0,t.onload=()=>s(),t.onerror=()=>i(),document.body.appendChild(t)}));await Promise.all(r)}async function l(){let e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href",window.cssBundleURL);let r=new Promise((o,s)=>{e.onload=()=>o(),e.onerror=()=>s()});document.head.appendChild(e),await r}async function u(){let e=new URLSearchParams(window.location.search),r=e.get("framerSiteId");if(!r)return null;let o=e.get("features"),s={};try{o&&(s=JSON.parse(o))}catch{}Object.defineProperty(window,"editorBarFeatures",{value:Object.freeze(s),writable:!1});let i=await a(r);if(c()&&i.status!=="success")return;await Promise.all([d(),l()]);let{renderEditorBar:t}=await import("https://app.framerstatic.com/render-QFEEJPYN.mjs");await t(i,r)}u().catch(console.error);
//# sourceMappingURL=https://app.framerstatic.com/editorbar.GQIJYF36.mjs.map
