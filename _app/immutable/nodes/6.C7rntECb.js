import{s as R,n as D}from"../chunks/scheduler.KIPEeUFd.js";import{S,i as T,e as i,s as E,g as M,c as f,a as y,m as P,j as k,h as O,d as _,n as l,b as q,k as a,l as A}from"../chunks/index.CF97Aj9B.js";function B(v){let t,s,p="Pynecraft",n,h,j='Pynecraft is a minecraft recreation made with <a href="https://www.python.org/" target="_blank">Python</a> and with <a href="https://www.ursinaengine.org/" target="_blank">Ursina Engine</a>',C,c,L="Pynecraft is made to be a fan moddable game, so have fun :,)",b,d,m,w,o,u,g;return{c(){t=i("body"),s=i("h1"),s.textContent=p,n=E(),h=i("h3"),h.innerHTML=j,C=E(),c=i("h3"),c.textContent=L,b=E(),d=i("h3"),m=i("code"),w=M("Latest version: "),o=i("a"),u=M(v[0]),this.h()},l(r){t=f(r,"BODY",{class:!0});var e=y(t);s=f(e,"H1",{class:!0,"data-svelte-h":!0}),P(s)!=="svelte-dli296"&&(s.textContent=p),n=k(e),h=f(e,"H3",{class:!0,"data-svelte-h":!0}),P(h)!=="svelte-1z0veaa"&&(h.innerHTML=j),C=k(e),c=f(e,"H3",{class:!0,"data-svelte-h":!0}),P(c)!=="svelte-1cfhzsl"&&(c.textContent=L),b=k(e),d=f(e,"H3",{class:!0});var $=y(d);m=f($,"CODE",{});var x=y(m);w=O(x,"Latest version: "),o=f(x,"A",{href:!0,target:!0});var z=y(o);u=O(z,v[0]),z.forEach(_),x.forEach(_),$.forEach(_),e.forEach(_),this.h()},h(){l(s,"class","svelte-58oma5"),l(h,"class","svelte-58oma5"),l(c,"class","svelte-58oma5"),l(o,"href",g="https://pypi.org/project/"+H+"/"+v[0]),l(o,"target","_blank"),l(d,"class","svelte-58oma5"),l(t,"class","svelte-58oma5")},m(r,e){q(r,t,e),a(t,s),a(t,n),a(t,h),a(t,C),a(t,c),a(t,b),a(t,d),a(d,m),a(m,w),a(m,o),a(o,u)},p(r,[e]){e&1&&A(u,r[0]),e&1&&g!==(g="https://pypi.org/project/"+H+"/"+r[0])&&l(o,"href",g)},i:D,o:D,d(r){r&&_(t)}}}const H="Paolog_Pynecraft";function U(v,t,s){var p;return fetch(`https://pypi.org/pypi/${H}/json`).then(n=>n.json()).then(n=>{s(0,p=n.info.version)}).catch(n=>s(0,p="Couldn't check latest version. ERR: "+n)),[p]}class F extends S{constructor(t){super(),T(this,t,U,B,R,{})}}export{F as component};