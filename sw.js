if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const d=e=>n(e,o),l={module:{uri:o},exports:t,require:d};i[o]=Promise.all(s.map((e=>l[e]||d(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-DmfqOoHq.css",revision:null},{url:"assets/index-oKynzsPM.js",revision:null},{url:"assets/Logo-CiqWa4F7.png",revision:null},{url:"icon144x144.png",revision:"df6ba61db3a0b5b90b5c8884e85c1eba"},{url:"icon310x310.png",revision:"d2f6cdf56efab0ade9e537ae0edcf1e3"},{url:"icon36x36.png",revision:"e297a77754ad3cbba44863e99e06b816"},{url:"icon48x48.png",revision:"c1e486057367154b67e74004b82ba4aa"},{url:"index.html",revision:"c8eaf90e5c751115154987618d053ebb"},{url:"registerSW.js",revision:"320307206e8ba16db4075af6bb673e03"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"manifest.webmanifest",revision:"4e1f4b6dacd65b15a5de5b85d4d29a4c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));