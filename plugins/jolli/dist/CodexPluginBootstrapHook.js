#!/usr/bin/env node
const __jmImportMetaUrl = require("node:url").pathToFileURL(__filename).href;
"use strict";var RS=Object.create;var Uo=Object.defineProperty;var kS=Object.getOwnPropertyDescriptor;var vS=Object.getOwnPropertyNames;var AS=Object.getPrototypeOf,CS=Object.prototype.hasOwnProperty;var y=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(r){throw n=[r],r}};var v=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}},mr=(e,t)=>{for(var n in t)Uo(e,n,{get:t[n],enumerable:!0})},Qd=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of vS(t))!CS.call(e,o)&&o!==n&&Uo(e,o,{get:()=>t[o],enumerable:!(r=kS(t,o))||r.enumerable});return e};var fr=(e,t,n)=>(n=e!=null?RS(AS(e)):{},Qd(t||!e||!e.__esModule?Uo(n,"default",{value:e,enumerable:!0}):n,e)),xS=e=>Qd(Uo({},"__esModule",{value:!0}),e);function Qi(){return IS.getStore()?.traceId}var nu,jP,IS,Bo=y(()=>{"use strict";nu=require("node:async_hooks"),jP="0".repeat(32),IS=new nu.AsyncLocalStorage});function k(e){return e instanceof Error?e.message:String(e)}function Bt(e){return e instanceof Error&&e.code==="ENOENT"}function Wo(e){su=e}function W(){return iu}function $S(e,t){let n=LS[t]??DS;return ru[e]>=ru[n]}function FS(e,t,n,r,o){let s=new Date().toISOString(),i=e.toUpperCase().padEnd(5),a=n,l=0;a=a.replace(/%[sdj]/g,u=>{if(l>=r.length)return u;let d=r[l++];return u==="%d"?String(Number(d)):u==="%j"?JSON.stringify(d):String(d)});let c=o?` [trace=${o}]`:"";return`[${s}] ${i} [${t}]${c} ${a}`}function U(e){let t=e??su??process.cwd();return(0,Sn.join)(t,PS,NS)}function hr(e){return String(e).padStart(2,"0")}async function BS(e,t){let n=new Date,r=`${n.getUTCFullYear()}-${hr(n.getUTCMonth()+1)}-${hr(n.getUTCDate())}_${hr(n.getUTCHours())}-${hr(n.getUTCMinutes())}-${hr(n.getUTCSeconds())}`;try{let o=(0,Sn.join)(e,`debug_${r}.log`);for(let s=1;await WS(o);s++)o=(0,Sn.join)(e,`debug_${r}_${s}.log`);await(0,ke.rename)(t,o)}catch{return}try{let o=(await(0,ke.readdir)(e)).filter(s=>HS.test(s)).sort();for(let s=0;s<o.length-US;s++)await(0,ke.unlink)((0,Sn.join)(e,o[s])).catch(()=>{})}catch{}}async function WS(e){try{return await(0,ke.stat)(e),!0}catch{return!1}}function JS(e){process.env.VITEST||process.env.JOLLI_DISABLE_LOG_FILE||iu||(ou=ou.then(async()=>{try{let t=U(),n=(0,Sn.join)(t,OS);await(0,ke.stat)(t);try{(await(0,ke.stat)(n)).size>jS&&await BS(t,n)}catch{}await(0,ke.appendFile)(n,`${e}
`,"utf-8")}catch{}}))}function f(e){function t(n,r,o){let s=FS(n,e,r,o,Qi());MS&&(n==="info"||n==="debug")||(n==="warn"?console.warn(s):console.error(s)),$S(n,e)&&JS(s)}return{debug(n,...r){t("debug",n,r)},info(n,...r){t("info",n,r)},warn(n,...r){t("warn",n,r)},error(n,...r){t("error",n,r)}}}var ke,Sn,PS,NS,OS,Oe,su,iu,ru,DS,LS,MS,ou,jS,US,HS,w=y(()=>{"use strict";ke=require("node:fs/promises"),Sn=require("node:path");Bo();PS=".jolli",NS="jollimemory",OS="debug.log";Oe="jollimemory/summaries/v3";iu=!1;ru={debug:0,info:1,warn:2,error:3},DS="info",LS={},MS=!0;ou=Promise.resolve(),jS=2*1024*1024,US=10,HS=/^debug_.*\.log$/});function bn(e,t,n){return(0,au.promisify)(at.execFile)(e,t,{...gr,...n??{}})}function ge(e,t,n){return(0,at.execFileSync)(e,t,{...gr,...n??{}})}function lu(e,t,n){return(0,at.spawnSync)(e,t,{...gr,...n??{}})}var at,au,gr,lt,Se=y(()=>{"use strict";at=require("node:child_process"),au=require("node:util"),gr={windowsHide:!0};lt=((e,t,n)=>Array.isArray(t)?(0,at.spawn)(e,t,{...gr,...n??{}}):(0,at.spawn)(e,{...gr,...t??{}}))});function At(e){return yr(e,process.platform)}function yr(e,t){let n=Tn(e.replace(/\\/g,"/"));return t==="win32"||t==="darwin"?n.toLowerCase():n}function Tn(e){let t=e.length;for(;t>0&&e[t-1]==="/";)t--;return t===e.length?e:e.slice(0,t)}function Zi(e,t){let n=At(e),r=At(t);return n===r||n.startsWith(`${r}/`)}function De(e){return e.replace(/\\/g,"/")}var ne=y(()=>{"use strict"});function KS(e){return qS.some(t=>(e[t]??"")!=="")}function Wt(e){try{return(0,_n.readFileSync)(e,"utf-8")}catch{return null}}function ea(e){try{return(0,_n.realpathSync)(e)}catch{return(0,G.resolve)(e)}}function Jo(e){try{return(0,_n.statSync)(e).isDirectory()}catch{return!1}}function cu(e,t){let n=Wt((0,G.join)(e,"HEAD"))?.trim();return!n||!(Go.test(n)||VS.test(n))?!1:Jo((0,G.join)(t,"objects"))&&Jo((0,G.join)(t,"refs"))}function YS(e,t,n){let r=/^gitdir:\s*(.+)$/m.exec(t);if(!r)return null;let o=r[1].trim();if(!o)return null;let s=(0,G.isAbsolute)(o)?o:(0,G.resolve)(e,o);return Jo(s)?n?ea(s):s:null}function du(e,t){let n=Wt((0,G.join)(e,"commondir"))?.trim();if(!n)return e;let r=(0,G.isAbsolute)(n)?n:(0,G.resolve)(e,n);return t?ea(r):r}function Ct(e,t={}){let{env:n=process.env,realpath:r=!1}=t;if(KS(n))return null;let o=r?ea(e):(0,G.resolve)(e);for(;;){let s=(0,G.join)(o,".git");if(Jo(s)){let l=du(s,r);return cu(s,l)?{worktreeRoot:o,gitDir:s,commonDir:l}:null}let i=Wt(s);if(i!==null){let l=YS(o,i,r);if(l===null)return null;let c=du(l,r);return cu(l,c)?{worktreeRoot:o,gitDir:l,commonDir:c}:null}let a=(0,G.dirname)(o);if(a===o)return null;o=a}}function uu(e){let t=Wt((0,G.join)(e.gitDir,"HEAD"))?.trim();if(!t)return null;let n=/^ref:\s*refs\/heads\/(.+)$/.exec(t);return n&&n[1].trim()||null}function zS(e){return XS.test(e)&&!e.split("/").includes("..")}function QS(e,t){let n=Wt((0,G.join)(e,"packed-refs"));if(n===null)return null;for(let r of n.split(`
`)){if(!r||r.startsWith("#")||r.startsWith("^"))continue;let o=r.indexOf(" ");if(!(o<=0)&&r.slice(o+1).trim()===t){let s=r.slice(0,o).trim();return Go.test(s)?s:null}}return null}function pu(e){let t=Wt((0,G.join)(e.gitDir,"HEAD"))?.trim();if(!t)return null;if(Go.test(t))return t;let n=/^ref:\s*(.+)$/.exec(t);if(!n)return null;let r=n[1].trim();if(!zS(r))return null;for(let o of e.gitDir===e.commonDir?[e.gitDir]:[e.gitDir,e.commonDir]){let s=Wt((0,G.join)(o,r))?.trim();if(s&&Go.test(s))return s;let i=QS(o,r);if(i)return i}return null}var _n,G,qS,Go,VS,XS,wr=y(()=>{"use strict";_n=require("node:fs"),G=require("node:path");ne();qS=["GIT_DIR","GIT_WORK_TREE","GIT_COMMON_DIR"];Go=/^[0-9a-f]{40}$|^[0-9a-f]{64}$/,VS=/^ref:\s*refs\//;XS=/^refs\/[A-Za-z0-9._\-/]+$/});function nb(){let e={...process.env,LC_ALL:"C"};for(let t of tb)delete e[t];return e}function gu(e){return rb(e)??e}function rb(e){let t=ta.get(e);if(t!==void 0)return t;let n=Ct(e,{realpath:!0})?.worktreeRoot;if(n){let o=De(n);return ta.set(e,o),o}let r=null;try{let o=ge("git",["rev-parse","--show-toplevel"],{cwd:e,encoding:"utf-8",env:nb(),stdio:["ignore","pipe","pipe"]}).trim();o&&(r=o)}catch{}return ta.set(e,r),r}async function J(e,t){Q.debug("git %s%s",t?`[cwd=${t}] `:"",e.join(" "));try{let{stdout:n,stderr:r}=await bn("git",e,{maxBuffer:ZS,env:{...process.env,LC_ALL:"C"},...t!==void 0&&{cwd:t}});return{stdout:n.trimEnd(),stderr:r.trim(),exitCode:0}}catch(n){let r=n,o=typeof r.code=="number"?r.code:r.code==="ENOENT"?127:1,s={stdout:(r.stdout??"").trimEnd(),stderr:(r.stderr??r.message??"").trim(),exitCode:o};return Q.debug("git command failed (exit: %d, stderr: %s)",o,s.stderr.substring(0,200)),s}}function ob(e){let t=e.split(`
`).filter(s=>s.trim().length>0).pop()??"",n=t.match(/(\d+)\s+files?\s+changed/),r=t.match(/(\d+)\s+insertions?/),o=t.match(/(\d+)\s+deletions?/);return{filesChanged:n?Number.parseInt(n[1],10):0,insertions:r?Number.parseInt(r[1],10):0,deletions:o?Number.parseInt(o[1],10):0}}async function Ko(e,t,n){let r=await J(["diff","--stat",`${e}..${t}`],n);return ob(r.stdout)}async function na(e,t){return(await J(["rev-parse","--verify",`refs/heads/${e}`],t)).exitCode===0}async function ra(e,t){if(await na(e,t))return;Q.info("Creating orphan branch '%s' using plumbing commands",e);let n=JSON.stringify({version:1,entries:[]},null,"	"),r=await lb(n,t);Q.debug("Created blob: %s",r);let o=`100644 blob ${r}	index.json
`,s=await ub(o,t);Q.debug("Created tree: %s",s);let i=await J(["commit-tree",s,"-m","Initialize Jolli Memory summaries"],t);if(i.exitCode!==0)throw new Error(`Failed to create commit: ${i.stderr}`);let a=i.stdout.trim();Q.debug("Created commit: %s",a);let l=await J(["update-ref",`refs/heads/${e}`,a],t);if(l.exitCode!==0)throw new Error(`Failed to update ref: ${l.stderr}`);Q.info("Orphan branch '%s' created successfully",e)}function ib(e){let t=e.toLowerCase();return sb.some(n=>t.includes(n))}async function oa(e,t,n){Q.debug("Reading file from branch: %s:%s",e,t);let r=await J(["show",`${e}:${t}`],n);return r.exitCode!==0?(ib(r.stderr)?Q.debug("File not found: %s:%s",e,t):Q.warn("Read failed for %s:%s (git exit %d): %s",e,t,r.exitCode,r.stderr||"(no stderr)"),null):r.stdout}async function sa(e,t,n){let r=new Map;if(t.length===0)return r;let o=["cat-file","--batch"];return Q.debug("git (cat-file --batch stream) %s%s for %d paths",n?`[cwd=${n}] `:"",o.join(" "),t.length),new Promise((s,i)=>{let a=lt("git",o,{stdio:["pipe","pipe","pipe"],...n!==void 0&&{cwd:n}}),l="",c=Buffer.alloc(0),u=!0,d=0,p=[],m=!1,h=0,g=!1,S=E=>{g||(g=!0,E?i(E):s(r))};a.stderr.on("data",E=>{l+=E.toString()}),a.stdout.on("data",E=>{for(c=Buffer.concat([c,E]);!g;){if(u){let _=c.indexOf(10);if(_<0)return;let R=c.subarray(0,_).toString("utf8");if(c=c.subarray(_+1),h>=t.length){S(new Error(`git cat-file --batch returned extra response: ${R}`));return}let P=t[h];if(h++,R.endsWith(" missing")){r.set(P,null);continue}let I=R.substring(R.lastIndexOf(" ")+1),$=Number.parseInt(I,10);if(!Number.isFinite($)||$<0){S(new Error(`Unexpected cat-file --batch header for ${P}: ${R}`));return}d=$,p=[],u=!1,m=!0}if(d>0){if(c.length===0)return;let _=Math.min(d,c.length);if(p.push(c.subarray(0,_)),c=c.subarray(_),d-=_,d>0)return}if(m){if(c.length<1)return;c=c.subarray(1),m=!1;let _=t[h-1];r.set(_,Buffer.concat(p).toString("utf8")),p=[],u=!0}}}),a.on("close",E=>{if(E!==0){S(new Error(`git cat-file --batch failed (exit ${E}): ${l.trim()}`));return}if(h<t.length){S(new Error(`git cat-file --batch returned ${h} of ${t.length} expected responses; stderr=${l.trim()}`));return}S(null)}),a.on("error",E=>{S(E)}),a.stdin.on("error",E=>{S(E)});for(let E of t)a.stdin.write(`${e}:${E}
`);a.stdin.end()})}async function yu(e,t,n,r){await ra(e,r);let o=await J(["rev-parse",`refs/heads/${e}`],r);if(o.exitCode!==0)throw new Error(`Failed to get branch tip: ${o.stderr}`);let s=o.stdout.trim();await cb(e,s,n,t,r);let i=t.filter(l=>!l.delete).length,a=t.filter(l=>l.delete).length;Q.info("Updated branch '%s': %d written, %d deleted (via fast-import)",e,i,a)}async function Er(e,t){let n=await J(["cat-file","-p",e],t);if(n.exitCode!==0)return null;let r=n.stdout.match(/^tree ([a-f0-9]+)/m);return r?r[1]:null}async function ia(e,t,n){Q.debug("Listing files in branch %s under prefix '%s'",e,t);let r=await J(["ls-tree","-z","-r","--name-only",e,t],n);if(r.exitCode!==0)return Q.debug("Failed to list files (branch may not exist): %s",r.stderr),[];let o=r.stdout.split(eb).filter(s=>s.length>0);return Q.debug("Found %d files",o.length),o}async function ab(e){let t=await J(["rev-parse","--git-common-dir"],e);if(t.exitCode!==0)throw new Error(`Failed to get git common dir: ${t.stderr}`);let n=t.stdout.trim();return(0,Be.resolve)(e,n)}async function aa(e){let t=await ab(e);return(0,Be.dirname)(t)}async function Rn(e){return Ct(e)!==null?!0:(await J(["rev-parse","--git-dir"],e)).exitCode===0}async function Sr(e){let t=await J(["worktree","list","--porcelain"],e);if(t.exitCode!==0)throw new Error(`Failed to list worktrees: ${t.stderr}`);return t.stdout.split(`
`).filter(r=>r.startsWith("worktree ")).map(r=>r.slice(9).trim())}async function kn(e){let t=(0,Be.join)(e,".git");if((await(0,qo.stat)(t)).isDirectory())return(0,Be.join)(t,"hooks");let r=await(0,qo.readFile)(t,"utf-8"),o=r.trim().match(/^gitdir:\s*(.+)$/);if(!o)throw new Error(`Unexpected .git file content: ${r.trim()}`);let s=o[1].trim(),i=(0,Be.resolve)(e,s),a=i.replace(/\\/g,"/").lastIndexOf("/worktrees/");if(a>=0){let l=i.substring(0,a);return(0,Be.join)(l,"hooks")}return(0,Be.join)(i,"hooks")}function wu(e,t,n){return Q.debug("git (stdin) %s%s",n?`[cwd=${n}] `:"",e.join(" ")),new Promise((r,o)=>{let s=lt("git",e,{stdio:["pipe","pipe","pipe"],...n!==void 0&&{cwd:n}}),i="",a="";s.stdout.on("data",l=>{i+=l.toString()}),s.stderr.on("data",l=>{a+=l.toString()}),s.on("close",l=>{l!==0?o(new Error(`git ${e[0]} failed (exit ${l}): ${a.trim()}`)):r(i.trim())}),s.on("error",l=>{o(l)}),s.stdin.write(t),s.stdin.end()})}async function lb(e,t){return wu(["hash-object","-w","--stdin"],e,t)}async function mu(e,t){let n=await J(["var",e],t);if(n.exitCode!==0)throw new Error(`Failed to read ${e}: ${n.stderr}`);return n.stdout.trim()}async function cb(e,t,n,r,o){let s=await mu("GIT_AUTHOR_IDENT",o),i=await mu("GIT_COMMITTER_IDENT",o),a=["fast-import","--quiet","--done"];Q.debug("git (fast-import stream) %s%s",o?`[cwd=${o}] `:"",a.join(" "));let l=r.filter(u=>!u.delete),c=r.filter(u=>u.delete);return new Promise((u,d)=>{let p=lt("git",a,{stdio:["pipe","pipe","pipe"],...o!==void 0&&{cwd:o}}),m="";p.stderr.on("data",E=>{m+=E.toString()}),p.on("close",E=>{E!==0?d(new Error(`git fast-import failed (exit ${E}): ${m.trim()}`)):u()}),p.on("error",E=>{d(E)});let h=p.stdin;h.on("error",E=>{d(E)});let g=[];l.forEach((E,_)=>{let R=_+1,P=Buffer.from(E.content,"utf8");g.push(`blob
mark :${R}
data ${P.length}
`,P,`
`)});let S=Buffer.from(n,"utf8");g.push(`commit refs/heads/${e}
`,`author ${s}
`,`committer ${i}
`,`data ${S.length}
`,S,`
`,`from ${t}
`),l.forEach((E,_)=>{g.push(`M 100644 :${_+1} ${fu(E.path)}
`)});for(let E of c)g.push(`D ${fu(E.path)}
`);g.push(`done
`),db(h,g).then(()=>{h.end()},E=>{d(E)})})}async function db(e,t){for(let n of t)e.write(n)||await(0,hu.once)(e,"drain")}function fu(e){return/["\\\n\r]/.test(e)?`"${e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r")}"`:e}async function ub(e,t){return wu(["mktree"],e,t)}var hu,qo,Be,ZS,eb,Q,ta,tb,sb,ye=y(()=>{"use strict";hu=require("node:events"),qo=require("node:fs/promises"),Be=require("node:path");w();Se();wr();ne();ZS=10*1024*1024,eb="\0",Q=f("GitOps"),ta=new Map,tb=["GIT_DIR","GIT_WORK_TREE","GIT_INDEX_FILE","GIT_COMMON_DIR","GIT_PREFIX","GIT_OBJECT_DIRECTORY","GIT_NAMESPACE"];sb=["does not exist in","does not exist (neither on disk nor in the index)","invalid object name","exists on disk, but not in","unknown revision or path not in the working tree"]});function pb(e){return new Promise(t=>setTimeout(t,e))}function Su(e){let t=Number(e);if(!Number.isInteger(t)||t<=0)return!1;if(t===process.pid)return!0;try{return process.kill(t,0),!0}catch(n){return n.code!=="ESRCH"}}async function la(e){try{let t=await(0,We.stat)(e),n=Date.now()-t.mtimeMs,r=await bu(e),o=r!==null&&!Su(r);if(!o&&n<Eu)return!1;o?br.warn("Removing orphaned lock %s (PID %s no longer running)",e,r):br.warn("Removing stale lock file %s (age: %dms)",e,n),await(0,We.rm)(e,{force:!0})}catch(t){if(t.code!=="ENOENT")return br.error("Failed to check lock file %s: %s",e,t.message),!1}try{return await(0,We.writeFile)(e,String(process.pid),{flag:"wx"}),!0}catch{return!1}}async function bu(e){try{let n=(await(0,We.readFile)(e,"utf-8")).trim();return n.length>0?n:null}catch{return null}}async function vn(e,t){let n=await bu(e);if(n!==null&&n!==String(process.pid)){br.warn("Skipping release of %s: held by pid %s, not us (pid %s) \u2014 stale-reclaim race",t,n,process.pid);return}try{await(0,We.rm)(e,{force:!0})}catch(r){br.error("Failed to release %s: %s",t,r.message)}}async function An(e,t){if(t.timeoutMs<=0)return la(e);let n=Date.now()+t.timeoutMs;for(;;){if(await la(e))return!0;if(Date.now()>=n)return!1;await pb(t.pollMs)}}var We,br,Eu,ca=y(()=>{"use strict";We=require("node:fs/promises");w();br=f("LockPrimitives"),Eu=300*1e3});function Ru(e){return(0,_u.resolve)(e??process.cwd())}function Cn(e){return da.getStore()?.has(Ru(e))===!0}function xn(e,t){let n=new Set(da.getStore()??[]);return n.add(Ru(e)),da.run(n,t)}var Tu,_u,da,Vo=y(()=>{"use strict";Tu=require("node:async_hooks"),_u=require("node:path"),da=new Tu.AsyncLocalStorage});function mb(e){return bn("git",["rev-parse","--git-common-dir"],{cwd:e})}async function Nu(e){let t=e??process.cwd(),n=Cu.get(t);if(n!==void 0)return n;let r;try{let{stdout:o}=await mb(t),s=o.trim(),i=(0,be.isAbsolute)(s)?s:(0,be.resolve)(t,s);r=(0,be.join)(i,"jollimemory")}catch{Iu.debug("resolveSharedLockDir: git rev-parse failed for cwd=%s \u2014 falling back to per-worktree dir",t),r=U(t)}return Cu.set(t,r),r}async function ua(e){let t=await Nu(e);return await(0,Tr.mkdir)(t,{recursive:!0}),t}async function _r(e,t={}){let n=t.timeoutMs??hb,r=t.pollMs??gb,o=await ua(e);return An((0,be.join)(o,Pu),{timeoutMs:n,pollMs:r})}async function Rr(e){let t=await Nu(e);await vn((0,be.join)(t,Pu),"orphan-write.lock")}async function bb(e,t,n,r){let o=r.timeoutMs??wb,s=r.pollMs??Xo;await(0,Tr.mkdir)(e,{recursive:!0});let i=(0,be.join)(e,t),a=await An(i,{timeoutMs:o,pollMs:s});a||Iu.warn("Could not acquire %s within %d ms \u2014 proceeding best-effort",t,o);try{return await n()}finally{a&&await vn(i,t)}}async function pa(e,t,n={}){return bb(e,fb,t,n)}async function kr(e,t={}){let n=t.timeoutMs??Eb,r=t.pollMs??Xo,o=await ua(e),s=(0,be.join)(o,vu);return await An(s,{timeoutMs:n,pollMs:r})?{release:()=>vn(s,vu)}:null}async function ma(e,t,n={}){let r=await kr(e,n);if(!r)return{acquired:!1};try{return{acquired:!0,value:await t()}}finally{await r.release()}}async function fa(e,t,n={}){let r=n.timeoutMs??yb,o=n.pollMs??Xo,s=await ua(e),i=(0,be.join)(s,ku);if(!await An(i,{timeoutMs:r,pollMs:o}))return{acquired:!1};try{return{acquired:!0,value:await t()}}finally{await vn(i,ku)}}async function ha(e,t={}){let n=t.timeoutMs??Sb,r=t.pollMs??Xo,o=t.globalDir??(0,be.join)((0,xu.homedir)(),".jolli","jollimemory");await(0,Tr.mkdir)(o,{recursive:!0});let s=(0,be.join)(o,Au);if(!await An(s,{timeoutMs:n,pollMs:r}))return{acquired:!1};try{return{acquired:!0,value:await e()}}finally{await vn(s,Au)}}var Tr,xu,be,Iu,Pu,ku,fb,vu,Au,hb,Yo,gb,yb,Xo,wb,Eb,Sb,Cu,Je=y(()=>{"use strict";Tr=require("node:fs/promises"),xu=require("node:os"),be=require("node:path");w();Se();ca();Vo();Iu=f("Locks");Pu="orphan-write.lock",ku="profile.lock",fb="config.lock",vu="repo-hooks.lock",Au="runtime-registry.lock",hb=1e3,Yo=class extends Error{constructor(t,n){super(`${t}: could not acquire orphan-write.lock within ${n}ms`),this.name="OrphanWriteBusyError"}},gb=50,yb=5e3,Xo=25,wb=5e3,Eb=5e3,Sb=5e3,Cu=new Map});async function ga(e,t,n={}){await(0,xt.mkdir)((0,Ou.dirname)(e),{recursive:!0});let r=`${e}.${process.pid}.tmp`;await(0,xt.writeFile)(r,t,n.mode!==void 0?{encoding:"utf-8",mode:n.mode}:"utf-8");try{await(0,xt.rename)(r,e)}catch(o){throw await(0,xt.unlink)(r).catch(()=>{}),o}}var xt,Ou,ya=y(()=>{"use strict";xt=require("node:fs/promises"),Ou=require("node:path")});function $u(e,t){let n={...e,manuallyDisabled:t};return delete n.userDisabled,n}async function Rb(e){let t=Ct(e)?.commonDir;if(t)return t;let n=await J(["rev-parse","--git-common-dir"],e),r=n.exitCode===0?n.stdout.trim():"";return r?(0,re.isAbsolute)(r)?r:(0,re.join)(e,r):null}async function ba(e){let t=await Rb(e);if(t===null)return{profilePath:(0,re.join)(U(e),Ea),legacyMarkerPath:null};let n=(0,re.dirname)(t);return{profilePath:(0,re.join)(U(n),Ea),legacyMarkerPath:(0,re.join)(t,Tb,_b)}}async function Zo(e){try{let t=await(0,vr.readFile)(e,"utf-8"),n=JSON.parse(t);return n&&typeof n=="object"&&!Array.isArray(n)?n:{}}catch{return{}}}async function kb(e){try{return await(0,vr.stat)(e),!0}catch{return!1}}async function Fu(e,t){await ga(e,`${JSON.stringify(t,null,"	")}
`)}function zo(e,t,n,r,o,s){if(e==="read"){let i=`${o}|${t}|${n}`;if(Du.has(i))return n;Du.add(i)}return Sa.info("manual-disable %s \u2192 %s (by=%s, pid=%d, cwd=%s, profile=%s, raw: userDisabled=%s manuallyDisabled=%s fence=%s)",e,n,t,process.pid,r,o,String(s.userDisabled),String(s.manuallyDisabled),s.cutoverFence?s.cutoverFence.at:"none"),n}function ju(){return(new Error("manual-disable write").stack??"(no stack)").split(`
`).slice(1,8).join(" | ").replace(/\s+/g," ")}async function vb(e){let t;try{t=await Sr(e)}catch{t=[e]}for(let n of t)if(await kb((0,re.join)(U(n),Mu)))return!0;return!1}async function It(e){let{profilePath:t}=await ba(e),n=await Zo(t);if(n.userDisabled!==void 0){let s=await Lu(e,t,n.userDisabled===!0);return zo("read","migrate:userDisabled",s,e,t,n)}if(n.manuallyDisabled!==void 0)return zo("read","manuallyDisabled",n.manuallyDisabled===!0,e,t,n);let r=await vb(e),o=await Lu(e,t,r);return zo("read","migrate:legacy-marker",o,e,t,n)}async function Lu(e,t,n){let r=await fa(e,async()=>{let o=await Zo(t),s=o.userDisabled??o.manuallyDisabled,i=s===void 0?n:s===!0;return o.userDisabled===void 0&&o.manuallyDisabled!==void 0||(Sa.info("manual-disable MIGRATE \u2192 manuallyDisabled=%s (pid=%d, profile=%s, fence=%s, from=%s) \u2190 %s",i,process.pid,t,o.cutoverFence?o.cutoverFence.at:"none",o.userDisabled!==void 0?"userDisabled":"legacy-marker",ju()),await Fu(t,$u(o,i))),i}).catch(()=>{});return r?.acquired&&r.value!==void 0?r.value:n}async function Ta(e,t){let{profilePath:n}=await ba(e);if(Sa.info("manual-disable WRITE %s (pid=%d, cwd=%s, profile=%s) \u2190 %s",t,process.pid,e,n,ju()),!(await fa(e,async()=>{let o=await Zo(n);zo("write",`explicit:${t}`,t,e,n,o),await Fu(n,$u(o,t))})).acquired)throw new Error("Timed out acquiring the repo profile lock")}async function Ar(e){let{profilePath:t}=await ba(e);return(await Zo(t)).cutoverFence??null}function Ab(e){let t=wa.get(e);if(t!==void 0)return t;let n=Ct(e)?.commonDir;if(n){let s=(0,re.dirname)(n);return wa.set(e,s),s}let r="";try{let s=ge("git",["rev-parse","--git-common-dir"],{cwd:e,encoding:"utf-8",stdio:["ignore","pipe","pipe"]}).trim();s&&(r=(0,re.isAbsolute)(s)?s:(0,re.join)(e,s))}catch{r=""}let o=r?(0,re.dirname)(r):e;return wa.set(e,o),o}function _a(e){let t=Ab(e),n;try{n=(0,Qo.readFileSync)((0,re.join)(U(t),Ea),"utf-8")}catch{}let r=Cb(n);if(r!==void 0)return r;try{return(0,Qo.statSync)((0,re.join)(U(e),Mu)),!0}catch{return!1}}function Cb(e){if(e===void 0)return;let t;try{t=JSON.parse(e)}catch{return}if(!t||typeof t!="object"||Array.isArray(t))return;let n=t;if(n.userDisabled!==void 0)return n.userDisabled===!0;if(n.manuallyDisabled!==void 0)return n.manuallyDisabled===!0}var Qo,vr,re,Sa,Ea,Tb,_b,Mu,Du,wa,Ge=y(()=>{"use strict";Qo=require("node:fs"),vr=require("node:fs/promises"),re=require("node:path");w();Se();ya();wr();ye();Je();Sa=f("RepoProfile"),Ea="profile.json",Tb="jollimemory",_b="backfill-card-dismissed",Mu="disabled-by-user";Du=new Set;wa=new Map});function Hu(e){return typeof e=="string"&&Uu.includes(e)}var Uu,Ra,es=y(()=>{"use strict";Uu=["claude","codex","gemini","opencode","cursor","cursor-cli","copilot","copilot-chat","cline","cline-cli","devin","antigravity","kimi"];Ra=5});async function N(e,t,n){let r=`${e}.${process.pid}.${(0,Bu.randomUUID)()}.tmp`;await(0,Jt.writeFile)(r,t,n===void 0?"utf-8":{encoding:"utf-8",mode:n});try{await(0,Jt.rename)(r,e)}catch(o){let s=o.code;if(s==="EPERM"||s==="EACCES")await(0,Jt.writeFile)(e,t,n===void 0?"utf-8":{encoding:"utf-8",mode:n}),await(0,Jt.rm)(r,{force:!0});else throw o}}var Bu,Jt,oe=y(()=>{"use strict";Bu=require("node:crypto"),Jt=require("node:fs/promises")});function se(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}var Cr=y(()=>{"use strict"});var Wu=y(()=>{"use strict"});function ka(e,t){if(e.length<=t)return e;let n=e.length-t;return`${e.slice(0,t)}
\u2026[truncated, ${n} more chars]`}var va=y(()=>{"use strict"});function Ju(e){return Number.isFinite(e)&&e>=0&&e<=1114111&&!(e>=55296&&e<=57343)}function Gu(e){return e.replace(/&(#x[0-9a-fA-F]+|#\d+|[a-zA-Z]+);/g,(t,n)=>{if(n.startsWith("#x")){let o=Number.parseInt(n.slice(2),16);return Ju(o)?String.fromCodePoint(o):t}if(n.startsWith("#")){let o=Number.parseInt(n.slice(1),10);return Ju(o)?String.fromCodePoint(o):t}let r=xb[n];return typeof r=="string"?r:t})}var xb,qu=y(()=>{"use strict";xb={amp:"&",lt:"<",gt:">",quot:'"',apos:"'"}});var Ib,Ku,Vu=y(()=>{"use strict";Wu();Cr();va();qu();Ib={decodeHtmlEntities:Gu,lowercase:e=>e.toLowerCase()},Ku=new Set(Object.keys(Ib))});var Pb,Yu,Xu=y(()=>{"use strict";Pb="^https://app\\.asana\\.com/",Yu={id:"asana",label:"Asana",icon:"checklist",match:{claude:{prefixes:["mcp__claude_ai_Asana__"],acceptSuffix:"get_task"},codex:{namespaceSuffix:"asana",functionCallNames:["_get_task"],invocationTools:["asana.get_task"]}},wrapperKeys:["data"],reference:{nativeId:{pipe:[{op:"path",path:"gid"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"name"}],require:".+"},url:{pipe:[{op:"path",path:"permalink_url"}],require:Pb,requireFlags:"i"},description:{pipe:[{op:"path",path:"notes"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"task"}]},{key:"assignee",label:"Assignee",icon:"person",pipe:[{op:"path",path:"assignee.name"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"asana-tasks",itemTag:"task",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var Nb,zu,Qu=y(()=>{"use strict";Nb="^https://[^/]+/wiki/",zu={id:"confluence",label:"Confluence",icon:"book",match:{claude:{prefixes:["mcp__claude_ai_Atlassian__"],acceptSuffix:"getConfluencePage"},codex:{namespaceSuffix:"atlassian_rovo",functionCallNames:["_getconfluencepage"],invocationTools:["atlassian_rovo.getConfluencePage"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"pageId"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:Nb},description:{pipe:[{op:"path",path:"body"}],optional:!0}},fields:[{key:"space",label:"Space",icon:"symbol-namespace",pipe:[{op:"path",path:"space"}]},{key:"author",label:"Author",icon:"account",pipe:[{op:"path",path:"author"}]},{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"coalesce",of:[[{op:"path",path:"entityType"}],[{op:"const",value:"page"}]]}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"confluence-pages",itemTag:"page",bodyTag:"content",maxCharsPerReference:3e4,maxTotalChars:6e4}}});var Ob,Zu,ep=y(()=>{"use strict";Ob="^/[^/\\s]+/[^/\\s]+",Zu={id:"context7",label:"Context7",icon:"book",trackOnly:!0,argumentsDerived:!0,match:{claude:{prefixes:["mcp__context7__"],acceptSuffix:"query-docs"},codex:{namespaceSuffix:"context7",functionCallNames:["_query_docs"],invocationTools:["query-docs","context7.query-docs"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"libraryId"}],require:Ob},title:{pipe:[{op:"path",path:"libraryId"},{op:"regex",pattern:"^/(.+)$",extract:"$1"}],require:".+"},url:{pipe:[{op:"template",template:"https://context7.com{id}",from:{id:[{op:"path",path:"libraryId"}]}}],require:"^https://context7\\.com/"},description:{pipe:[{op:"path",path:"query"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"context7-libraries",itemTag:"library",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var Aa,Db,Ca,PN,tp=y(()=>{"use strict";Cr();Aa=["mcp__Figma__","mcp__figma__"],Db={get_metadata:"Read structure",get_screenshot:"Viewed screenshot",get_variable_defs:"Read variables",get_figjam:"Read FigJam board",get_design_context:"Read design context"},Ca=Object.keys(Db),PN=new Set(Ca)});var Lb,Mb,np,rp=y(()=>{"use strict";tp();Lb="^[0-9a-zA-Z]{22,128}$",Mb=Aa.flatMap(e=>Ca.map(t=>`${e}${t}`)),np={id:"figma",label:"Figma",icon:"symbol-color",trackOnly:!0,argumentsDerived:!0,accumulateBody:!0,titleFallbackPattern:"^Figma file [0-9a-zA-Z]{1,8}$",match:{claude:{prefixes:[...Aa],exact:Mb}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"fileKey"}],require:Lb},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://www\\.figma\\.com/"},description:{pipe:[{op:"path",path:"detail"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"figma-files",itemTag:"file",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var $b,Fb,op,sp=y(()=>{"use strict";$b="^https?://github\\.com/([^/]+)/[^/]+/(?:issues|pull)/\\d+",Fb="^https?://github\\.com/[^/]+/([^/]+)/(?:issues|pull)/\\d+",op={id:"github",label:"GitHub",icon:"issues",match:{claude:{prefixes:["mcp__github__"]},codex:{namespaceSuffix:"github",functionCallNames:["_fetch_issue","_search_issues"],invocationTools:["github_fetch_issue","github_search_issues"]}},wrapperKeys:["items","issues","nodes","results"],reference:{nativeId:{pipe:[{op:"template",template:"{owner}/{repo}#{number}",from:{owner:[{op:"coalesce",of:[[{op:"path",path:"repository.full_name"},{op:"regex",pattern:"^([^/]+)/[^/]+$",extract:"$1"}],[{op:"path",path:"html_url"},{op:"regex",pattern:$b,extract:"$1"}]]}],repo:[{op:"coalesce",of:[[{op:"path",path:"repository.full_name"},{op:"regex",pattern:"^[^/]+/([^/]+)$",extract:"$1"}],[{op:"path",path:"html_url"},{op:"regex",pattern:Fb,extract:"$1"}]]}],number:[{op:"path",path:"number"}]}}],require:"^[^/]+/[^/]+#\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"html_url"}],require:"^https?://"},description:{pipe:[{op:"path",path:"body"},{op:"transform",fn:"decodeHtmlEntities"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"path",path:"state"}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"labels"},{op:"join",sep:", "}]},{key:"assignees",label:"Assignees",icon:"account",pipe:[{op:"path",path:"assignees"},{op:"join",sep:", "}]},{key:"milestone",label:"Milestone",icon:"milestone",pipe:[{op:"coalesce",of:[[{op:"path",path:"milestone"}],[{op:"path",path:"milestone.title"}]]}]},{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"coalesce",of:[[{op:"path",path:"issue_type"}],[{op:"path",path:"issue_type.name"}]]}]}],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"github-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var jb,ip,ap=y(()=>{"use strict";jb="^[A-Z][A-Z0-9_]*-\\d+$",ip={id:"jira",label:"Jira",icon:"issues",match:{claude:{prefixes:["mcp__claude_ai_Atlassian__"]},codex:{namespaceSuffix:"atlassian_rovo",functionCallNames:["_fetch","_getjiraissue"],invocationTools:["atlassian_rovo.fetch","atlassian_rovo.getJiraIssue"]}},wrapperKeys:["nodes","issues","items","results"],reference:{nativeId:{pipe:[{op:"path",path:"key"}],require:jb},title:{pipe:[{op:"path",path:"fields.summary"}],require:".+"},url:{pipe:[{op:"path",path:"webUrl"}],require:"^https?://"},description:{pipe:[{op:"path",path:"fields.description"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"coalesce",of:[[{op:"path",path:"fields.status.name"}],[{op:"path",path:"fields.status"}]]}]},{key:"priority",label:"Priority",icon:"flame",pipe:[{op:"coalesce",of:[[{op:"path",path:"fields.priority.name"}],[{op:"path",path:"fields.priority"}]]}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"fields.labels"},{op:"join",sep:", "}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"jira-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var lp,cp=y(()=>{"use strict";lp={id:"jollimemory",label:"Jolli Memory",icon:"history",trackOnly:!0,argumentsDerived:!0,accumulateBody:!0,match:{claude:{prefixes:["mcp__jollimemory__"],exact:["mcp__jollimemory__recall","mcp__jollimemory__search","mcp__jollimemory__get_decision_timeline"]},codex:{namespaceSuffix:"jollimemory",functionCallNames:["recall","search","get_decision_timeline"],invocationTools:["recall","search","get_decision_timeline"],invocationServer:"jollimemory"}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"tool"}],require:"^(recall|search|get_decision_timeline)$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},description:{pipe:[{op:"path",path:"query"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"jolli-memory-lookups",itemTag:"lookup",bodyTag:"queries",maxCharsPerReference:2e3,maxTotalChars:6e3}}});var Ub,dp,up=y(()=>{"use strict";Ub="^[A-Z][A-Z0-9_]*-\\d+$",dp={id:"linear",label:"Linear",icon:"issues",match:{claude:{prefixes:["mcp__linear__","mcp__claude_ai_Linear__"],denySuffixes:["list_issues","search_issues"]},codex:{namespaceSuffix:"linear",functionCallNames:["_fetch","_get_issue"],invocationTools:["linear_fetch","linear.get_issue"]}},wrapperKeys:["items","issues","nodes","results"],reference:{nativeId:{pipe:[{op:"path",path:"id"}],require:Ub},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https?://"},description:{pipe:[{op:"path",path:"description"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"path",path:"status"}]},{key:"priority",label:"Priority",icon:"flame",pipe:[{op:"coalesce",of:[[{op:"path",path:"priority"}],[{op:"path",path:"priority.name"}]]}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"labels"},{op:"join",sep:", "}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"linear-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var pp,mp=y(()=>{"use strict";pp={id:"monday",label:"monday.com",icon:"table",match:{claude:{prefixes:["mcp__claude_ai_monday_com__"],acceptSuffix:"get_board_items_page"},codex:{namespaceSuffix:"monday_com",functionCallNames:["_get_board_items_page"],invocationTools:["monday_com.get_board_items_page"]}},wrapperKeys:["items"],reference:{nativeId:{pipe:[{op:"path",path:"id"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"name"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://([\\w-]+\\.)*monday\\.com/",requireFlags:"i"},description:{pipe:[{op:"path",path:"description"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"item"}]},{key:"board",label:"Board",icon:"project",pipe:[{op:"path",path:"board"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"monday-items",itemTag:"item",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var Hb,Bb,Wb,fp,hp=y(()=>{"use strict";Hb="[-/]([0-9a-fA-F]{32})(?=[/?#]|$)",Bb="^https://(www\\.notion\\.so|notion\\.so|app\\.notion\\.com|[A-Za-z0-9.-]+\\.notion\\.site)/",Wb="<content\\b[^>]*>([\\s\\S]*?)</content>",fp={id:"notion",label:"Notion",icon:"file-text",match:{claude:{prefixes:["mcp__claude_ai_Notion__"],acceptSuffix:"notion-fetch"},codex:{namespaceSuffix:"notion",functionCallNames:["_fetch"],invocationTools:["notion_fetch"]}},wrapperKeys:["results","items","pages"],reference:{guard:{pipe:[{op:"path",path:"metadata.type"}],require:"^page$"},nativeId:{pipe:[{op:"path",path:"url"},{op:"regex",pattern:Hb,extract:"$1",lastMatch:!0},{op:"transform",fn:"lowercase"}],require:"^[0-9a-fA-F]{32}$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:Bb,requireFlags:"i"},description:{pipe:[{op:"path",path:"text"},{op:"regex",pattern:Wb,extract:"$1"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"page"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"notion-pages",itemTag:"page",bodyTag:"content",fieldAttrs:!1,maxCharsPerReference:3e4,maxTotalChars:6e4}}});var xa,Jb,Gb,Ia,BN,gp=y(()=>{"use strict";Cr();xa=["mcp__Sentry__","mcp__sentry__"],Jb="get_sentry_resource",Gb="analyze_issue_with_seer",Ia=[Jb,Gb],BN=new Set(Ia)});var qb,Kb,Vb,Yb,yp,wp=y(()=>{"use strict";gp();qb=xa.flatMap(e=>Ia.map(t=>`${e}${t}`)),Kb="^[A-Za-z0-9.-]{1,253}/[A-Za-z0-9_-]{1,128}$",Vb="^Issue [A-Za-z0-9_-]{1,128}$",Yb="^Issue [0-9]{1,128}$",yp={id:"sentry",label:"Sentry",icon:"bug",trackOnly:!0,argumentsDerived:!0,titleFallbackPattern:Vb,titleFallbackPoorestPattern:Yb,match:{claude:{prefixes:[...xa],exact:qb}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"nativeId"}],require:Kb},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://(?:[A-Za-z0-9-]{1,63}\\.)*sentry\\.io/issues/[A-Za-z0-9_-]{1,128}$",requireFlags:"i"},description:{pipe:[{op:"path",path:"detail"}],optional:!0}},fields:[{key:"issue-id",label:"Issue",icon:"bug",pipe:[{op:"path",path:"shortId"}]},{key:"project",label:"Project",icon:"symbol-property",pipe:[{op:"path",path:"project"}]}],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"sentry-issues",itemTag:"issue",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var Ep,Sp=y(()=>{"use strict";Ep={id:"slack",label:"Slack",icon:"comment-discussion",match:{claude:{prefixes:["mcp__claude_ai_Slack__"],acceptSuffix:"slack_read_thread"},codex:{namespaceSuffix:"slack",functionCallNames:["_slack_read_thread"],invocationTools:["slack.slack_read_thread"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"template",template:"{c}-{t}",from:{c:[{op:"path",path:"channelId"}],t:[{op:"path",path:"parentTs"}]}}],require:"^[A-Z0-9]+-\\d{7,}\\.\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://"},description:{pipe:[{op:"path",path:"text"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"comment-discussion",pipe:[{op:"const",value:"thread"}]},{key:"replies",label:"Replies",icon:"reply",pipe:[{op:"path",path:"replyCount"}]},{key:"channel",label:"Channel",icon:"symbol-namespace",pipe:[{op:"path",path:"channelId"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"slack-threads",itemTag:"thread",bodyTag:"messages",fieldAttrs:!0,maxCharsPerReference:8e3,maxTotalChars:4e4}}});var Xb,Pa,Na,bp,Tp=y(()=>{"use strict";Xb="^dpl_[A-Za-z0-9]+$",Pa=[{op:"coalesce",of:[[{op:"path",path:"readyState"}],[{op:"path",path:"state"}]]}],Na=[{op:"template",template:"https://{host}",from:{host:[{op:"path",path:"url"}]}}],bp={id:"vercel",label:"Vercel",icon:"rocket",trackOnly:!0,match:{claude:{prefixes:["mcp__claude_ai_Vercel__","mcp__vercel__"],acceptSuffix:"get_deployment"}},wrapperKeys:["deployment"],reference:{nativeId:{pipe:[{op:"path",path:"id"}],require:Xb},title:{pipe:[{op:"coalesce",of:[[{op:"template",template:"{name} ({state})",from:{name:[{op:"path",path:"name"}],state:Pa}}],[{op:"path",path:"name"}]]}],require:".+"},url:{pipe:Na,require:"^https://[A-Za-z0-9.-]+\\.vercel\\.app$",requireFlags:"i"},description:{pipe:[{op:"coalesce",of:[[{op:"path",path:"errorMessage"}],[{op:"template",template:"Deployment {state} \xB7 {target} \xB7 {url}",from:{state:Pa,target:[{op:"path",path:"target"}],url:Na}}],[{op:"template",template:"Deployment {state} \xB7 {url}",from:{state:Pa,url:Na}}]]}],optional:!0}},fields:[{key:"target",label:"Target",icon:"rocket",pipe:[{op:"path",path:"target"}]},{key:"framework",label:"Framework",icon:"symbol-property",pipe:[{op:"path",path:"project.framework"}]},{key:"error-code",label:"Error",icon:"error",pipe:[{op:"path",path:"errorCode"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"vercel-deployments",itemTag:"deployment",bodyTag:"content",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var _p,Rp=y(()=>{"use strict";_p={id:"zoom-doc",label:"Zoom Doc",icon:"file",match:{claude:{prefixes:["mcp__claude_ai_Zoom_for_Claude__"],acceptSuffix:"hub_get_file_content"}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"fileId"}],require:"^[\\w.-]+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://docs\\.zoom\\.us/doc/"},description:{pipe:[{op:"path",path:"content"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"doc"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"zoom-docs",itemTag:"doc",bodyTag:"content",maxCharsPerReference:3e4,maxTotalChars:6e4}}});var kp,vp=y(()=>{"use strict";kp={id:"zoom-meeting",label:"Zoom Meeting",icon:"device-camera-video",match:{claude:{prefixes:["mcp__claude_ai_Zoom_for_Claude__"],acceptSuffix:"get_meeting_assets"},codex:{namespaceSuffix:"zoom",functionCallNames:["_get_meeting_assets"],invocationTools:["zoom.get_meeting_assets"]}},wrapperKeys:[],reference:{guard:{pipe:[{op:"path",path:"meeting_summary.summary_markdown"}],require:".+"},nativeId:{pipe:[{op:"path",path:"meeting_uuid"}],require:"^[\\w-]+$"},title:{pipe:[{op:"path",path:"topic"}],require:".+"},url:{pipe:[{op:"coalesce",of:[[{op:"path",path:"meeting_summary.summary_doc_url"}],[{op:"path",path:"deep_url"}]]}],require:"^https://"},description:{pipe:[{op:"path",path:"meeting_summary.summary_markdown"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"meeting"}]},{key:"started",label:"Started",icon:"calendar",pipe:[{op:"path",path:"start_time"}]},{key:"meeting-number",label:"Meeting #",icon:"symbol-number",pipe:[{op:"path",path:"meeting_number"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"zoom-meetings",itemTag:"meeting",bodyTag:"summary",maxCharsPerReference:2e4,maxTotalChars:4e4}}});var Ap,Cp=y(()=>{"use strict";Xu();Qu();ep();rp();sp();ap();cp();up();mp();hp();wp();Sp();Tp();Rp();vp();Ap=[dp,zu,ip,op,fp,Ep,kp,_p,Yu,pp,Zu,lp,bp,np,yp]});function Qb(e,t,n){if(!se(e))return"op must be an object";if(n.opCount++,n.opCount>xp)return`pipe exceeds ${xp} ops`;let r=e.op;if(typeof r!="string"||!zb.has(r))return`unknown op: ${String(r)}`;switch(r){case"path":return typeof e.path=="string"?void 0:"path op requires a string 'path'";case"const":return typeof e.value=="string"?void 0:"const op requires a string 'value'";case"join":return typeof e.sep=="string"?void 0:"join op requires a string 'sep'";case"regex":return typeof e.pattern!="string"?"regex op requires a string 'pattern'":e.extract!==void 0&&typeof e.extract!="string"?"regex.extract must be a string":e.lastMatch!==void 0&&typeof e.lastMatch!="boolean"?"regex.lastMatch must be a boolean":void 0;case"transform":return typeof e.fn!="string"?"transform op requires a string 'fn'":Ku.has(e.fn)?void 0:`unknown transform: ${e.fn}`;case"coalesce":{if(t+1>ts)return`nesting depth exceeds ${ts}`;if(!Array.isArray(e.of))return"coalesce op requires an array 'of'";for(let o of e.of){let s=Oa(o,t+1,n);if(s!==void 0)return s}return}case"template":{if(t+1>ts)return`nesting depth exceeds ${ts}`;if(typeof e.template!="string")return"template op requires a string 'template'";if(!se(e.from))return"template op requires an object 'from'";for(let o of Object.values(e.from)){let s=Oa(o,t+1,n);if(s!==void 0)return s}return}}}function Oa(e,t,n){if(!Array.isArray(e))return"pipe must be an array";for(let r of e){let o=Qb(r,t,n);if(o!==void 0)return o}}function xr(e,t){let n=Oa(e,0,{opCount:0});return n===void 0?void 0:`${t}: ${n}`}function Zb(e){if(!se(e))return{ok:!1,error:"definition must be an object"};if(typeof e.id!="string"||e.id.length===0)return{ok:!1,error:"id must be a non-empty string"};if(typeof e.label!="string"||e.label.length===0)return{ok:!1,error:"label must be a non-empty string"};if(typeof e.icon!="string"||e.icon.length===0)return{ok:!1,error:"icon must be a non-empty string"};if(e.titleFallbackPattern!==void 0){if(typeof e.titleFallbackPattern!="string"||e.titleFallbackPattern.length===0)return{ok:!1,error:"titleFallbackPattern must be a non-empty string"};try{new RegExp(e.titleFallbackPattern)}catch(n){return{ok:!1,error:`titleFallbackPattern is not a valid regex: ${n.message}`}}}if(e.titleFallbackPoorestPattern!==void 0){if(typeof e.titleFallbackPoorestPattern!="string"||e.titleFallbackPoorestPattern.length===0)return{ok:!1,error:"titleFallbackPoorestPattern must be a non-empty string"};try{new RegExp(e.titleFallbackPoorestPattern)}catch(n){return{ok:!1,error:`titleFallbackPoorestPattern is not a valid regex: ${n.message}`}}if(e.titleFallbackPattern===void 0)return{ok:!1,error:"titleFallbackPoorestPattern requires titleFallbackPattern"}}if(!se(e.match))return{ok:!1,error:"match must be an object"};if(!Array.isArray(e.wrapperKeys))return{ok:!1,error:"wrapperKeys must be an array"};if(!se(e.reference))return{ok:!1,error:"reference must be an object"};if(!Array.isArray(e.fields))return{ok:!1,error:"fields must be an array"};if(!se(e.storage))return{ok:!1,error:"storage must be an object"};if(!se(e.render))return{ok:!1,error:"render must be an object"};let t=e.reference;for(let n of["nativeId","title"]){let r=t[n];if(!se(r))return{ok:!1,error:`reference.${n} is required`};let o=xr(r.pipe,`reference.${n}.pipe`);if(o!==void 0)return{ok:!1,error:o}}if(t.url!==void 0){if(!se(t.url))return{ok:!1,error:"reference.url must be an object"};let n=xr(t.url.pipe,"reference.url.pipe");if(n!==void 0)return{ok:!1,error:n}}if(t.description!==void 0){if(!se(t.description))return{ok:!1,error:"reference.description must be an object"};let n=xr(t.description.pipe,"reference.description.pipe");if(n!==void 0)return{ok:!1,error:n}}if(t.guard!==void 0){if(!se(t.guard))return{ok:!1,error:"reference.guard must be an object"};let n=xr(t.guard.pipe,"reference.guard.pipe");if(n!==void 0)return{ok:!1,error:n}}for(let[n,r]of e.fields.entries()){if(!se(r))return{ok:!1,error:`fields[${n}] must be an object`};if(typeof r.key!="string"||!Ip.test(r.key))return{ok:!1,error:`fields[${n}].key must match ${Ip}`};if(typeof r.label!="string"||r.label.length===0)return{ok:!1,error:`fields[${n}].label must be a non-empty string`};let o=xr(r.pipe,`fields[${n}].pipe`);if(o!==void 0)return{ok:!1,error:o}}return{ok:!0,def:e}}function In(){if(ns!==void 0)return ns;let e=[];for(let t of Ap){let n=Zb(t);if(!n.ok)throw new Error(`invalid built-in source definition '${t.id}': ${n.error}`);e.push(n.def)}return ns=new Da(e),ns}var xp,ts,zb,Ip,Da,ns,rs=y(()=>{"use strict";Cr();Vu();Cp();xp=64,ts=8,zb=new Set(["path","coalesce","regex","template","join","const","transform"]);Ip=/^[\w-]+$/;Da=class{constructor(t){this.definitions=t}all(){return this.definitions}byId(t){return this.definitions.find(n=>n.id===t)}match(t,n,r,o){return t==="claude"?this.definitions.find(s=>{let i=s.match.claude;return!(i===void 0||!i.prefixes.some(a=>n.startsWith(a))||i.exact!==void 0&&!i.exact.includes(n)||i.acceptSuffix!==void 0&&!n.endsWith(i.acceptSuffix)||i.denySuffixes?.some(a=>n.endsWith(a)))}):r!==void 0?this.definitions.find(s=>{let i=s.match.codex;return i!==void 0&&i.namespaceSuffix===r&&i.functionCallNames.includes(n)}):this.definitions.find(s=>{let i=s.match.codex;return i===void 0||!i.invocationTools.includes(n)?!1:i.invocationServer===void 0||i.invocationServer===o})}}});function Np(e,t){let n=In().byId(e);if(n===void 0||n.storage.nativeIdPathSafe===!1){let r=t.replace(/[^\w.-]/g,"-"),o=iT(t).slice(0,8);return`${r}-${o}`}if(t.includes("..")||/[/\\]/.test(t))throw new Error(`Refusing unsafe ${e} nativeId for path: ${JSON.stringify(t)}`);return t}function La(e){return rT(e)}function eT(e){return e.replace(/^\n+/,"").replace(/\n+$/,"")}function tT(e){let t=e.indexOf(nT);return t===-1?e:e.slice(0,t)}function rT(e){if(typeof e!="string")return null;let t=e.split(`
`);if(t[0]?.trim()!=="---")return null;let n=-1;for(let _=1;_<t.length;_++)if(t[_].trim()==="---"){n=_;break}if(n===-1)return null;let r=t.slice(1,n),o=eT(tT(t.slice(n+1).join(`
`))),s={},i=[],a=!1;for(let _ of r){if(a){let P=/^\s+- (.+)$/.exec(_);if(P){try{let I=JSON.parse(P[1]);oT(I)&&i.push(I)}catch{}continue}a=!1}if(_.trim()==="fields:"){a=!0;continue}let R=/^([a-zA-Z]+):\s*(.+)$/.exec(_);R&&(s[R[1]]=R[2])}let l=_=>{let R=s[_];if(R!==void 0)try{let P=JSON.parse(R);return typeof P=="string"?P:void 0}catch{return}},c=l("source"),u=l("nativeId");if(c===void 0||u===void 0||!sT(c))return null;let d=c,p=u,m=l("title"),h=l("url"),g=l("referencedAt"),S=l("sourceToolName");return!m||g===void 0||!S?null:{mapKey:`${d}:${p}`,source:d,nativeId:p,title:m,referencedAt:g,toolName:S,...h!==void 0?{url:h}:{},...i.length>0?{fields:i}:{},...o.length>0?{description:o}:{}}}function oT(e){if(typeof e!="object"||e===null)return!1;let t=e;return!(typeof t.key!="string"||typeof t.label!="string"||typeof t.value!="string"||!/^[\w-]+$/.test(t.key)||t.icon!==void 0&&typeof t.icon!="string")}function sT(e){return e.length>0&&/^[\w-]+$/.test(e)}function Op(e){return In().byId(e)!==void 0}function iT(e){return(0,Pp.createHash)("sha256").update(e,"utf-8").digest("hex")}var Pp,wO,nT,Ir=y(()=>{"use strict";Pp=require("node:crypto");w();rs();wO=f("ReferenceStore");nT="<!-- jolli:auto-note -->"});function aT(e){return`${e.source}:${e.skill}`}function lT(e,t){if(e===void 0)return t;let n=e.usage===void 0||t.usage===void 0?e.usage??t.usage:{input:e.usage.input+t.usage.input,output:e.usage.output+t.usage.output,cached:e.usage.cached+t.usage.cached,confidence:e.usage.confidence==="attributed"&&t.usage.confidence==="attributed"?"attributed":"estimated"},r=[e,t].filter(l=>l.usage!==void 0),o=dT(r),{usageBySession:s,supersededDocIds:i,...a}=e;return{...a,invocationCount:e.invocationCount+t.invocationCount,...n!==void 0?{usage:n}:{},...o!==void 0?{usageBySession:o}:{},...e.detection==="heuristic"||t.detection==="heuristic"?{detection:"heuristic"}:{},...e.jolliDocId===void 0&&t.jolliDocId!==void 0?{jolliDocId:t.jolliDocId,jolliDocUrl:t.jolliDocUrl}:{},...cT(e,t)}}function cT(e,t){let n=new Set([...e.supersededDocIds??[],...t.supersededDocIds??[]]);e.jolliDocId!==void 0&&t.jolliDocId!==void 0&&n.add(t.jolliDocId);let r=e.jolliDocId??t.jolliDocId;return r!==void 0&&n.delete(r),n.size>0?{supersededDocIds:[...n]}:{}}function os(e){if(e.supersededDocIds===void 0)return e;let{supersededDocIds:t,...n}=e;return n}function dT(e){if(e.length===0)return;let t=[];for(let r of e){if(r.usageBySession===void 0)return;t.push(r.usageBySession)}let n={};for(let r of t)for(let[o,s]of Object.entries(r)){let i=n[o];n[o]=i===void 0?s:{input:i.input+s.input,cached:i.cached+s.cached,output:i.output+s.output,confidence:i.confidence==="attributed"&&s.confidence==="attributed"?"attributed":"estimated"}}return n}function ss(e){let t=new Map;for(let r of e)t.has(r.archivedKey)||t.set(r.archivedKey,r);let n=new Map;for(let r of t.values()){let o=aT(r);n.set(o,lT(n.get(o),r))}return[...n.values()]}var Ma=y(()=>{"use strict"});var TO,Dp=y(()=>{"use strict";w();TO=f("SkillStore")});async function Fa(e){let t=U(e);return await(0,we.mkdir)(t,{recursive:!0}),t}function ie(){return(0,Nr.join)((0,Mp.homedir)(),".jolli","jollimemory")}async function Gt(e){let t=(0,Nr.join)(e,$p);try{let n=await(0,we.readFile)(t,"utf-8"),r=JSON.parse(n);return pT(r)}catch{return Pn.debug("No config file found in %s, using defaults",e),{}}}function pT(e){if(e.syncEnabled===void 0)return e;let{syncEnabled:t,...n}=e;return n.autoSyncEnabled===void 0?{...n,autoSyncEnabled:t}:n}function mT(e,t){return!("localAgentTool"in t)||"localAgentPath"in t||(e.localAgentTool??"claude-code")===(t.localAgentTool??"claude-code")||e.localAgentPath===void 0?t:(Pn.info("Clearing localAgentPath (was set for %s, switching to %s)",e.localAgentTool??"claude-code",t.localAgentTool),{...t,localAgentPath:void 0})}async function Or(e,t){await pa(t,async()=>{await Fp(e,t)}),Pn.info("Config saved to %s",t)}async function is(e){return fT(e,ie())}async function fT(e,t){return pa(t,async()=>{let{update:n,result:r}=e(await Gt(t));return n!==null&&(await Fp(n,t),Pn.info("Config saved to %s",t)),r})}async function Fp(e,t){let n=await Gt(t),r={...n,...mT(n,e)};await N((0,Nr.join)(t,$p),JSON.stringify(r,null,"	"))}async function ae(){return Gt(ie())}async function ct(e){return Or(e,ie())}async function jp(){return hT(ie())}async function hT(e){let t=await Gt(e);if(t.installId)return{installId:t.installId,created:!1};let n=(0,Nr.join)(e,uT),r=(0,Pr.randomUUID)();await(0,we.mkdir)(e,{recursive:!0});let o,s,i=`${n}.${(0,Pr.randomUUID)()}.tmp`;try{await(0,we.writeFile)(i,r,{flag:"wx"});try{await(0,we.link)(i,n),o=r,s=!0}catch{o=await Lp(n,r),s=!1}}catch(a){Pn.warn("could not stage the install-id sentinel: %s",k(a)),o=await Lp(n,r),s=!1}finally{await(0,we.rm)(i,{force:!0}).catch(()=>{})}return t.installId!==o&&await Or({installId:o},e).catch(a=>{Pn.warn("could not persist the install id: %s",k(a))}),{installId:o,created:s}}async function Lp(e,t){try{let n=(await(0,we.readFile)(e,"utf-8")).trim();return n.length>0?n:t}catch{return t}}function $a(e,t){let n={...e},r=!1;for(let o of t)o in n&&(delete n[o],r=!0);return{value:n,changed:r}}function Up(e){let t=!1,n={};for(let[i,a]of Object.entries(e.plans??{})){if(a.ignored===!0){t=!0;continue}let l=$a(a,gT);l.changed&&(t=!0),n[i]=l.value}let r;if(e.notes!==void 0){r={};for(let[i,a]of Object.entries(e.notes)){if(a.ignored===!0){t=!0;continue}let l=$a(a,yT);l.changed&&(t=!0),r[i]=l.value}}let o;if(e.references!==void 0){o={};for(let[i,a]of Object.entries(e.references)){let l=a;if(l.ignored===!0||l.commitHash!=null||l.contentHashAtCommit!==void 0){t=!0;continue}let c=$a(a,wT);c.changed&&(t=!0),o[i]=c.value}}return{registry:{version:1,plans:n,...r!==void 0?{notes:r}:{},...o!==void 0?{references:o}:{},...e.skills!==void 0?{skills:e.skills}:{}},changed:t}}var Pr,we,Mp,Nr,Pn,$p,uT,jO,UO,HO,BO,gT,yT,wT,le=y(()=>{"use strict";Pr=require("node:crypto"),we=require("node:fs/promises"),Mp=require("node:os"),Nr=require("node:path");w();es();oe();Je();Ir();Ma();Dp();Pn=f("SessionTracker"),$p="config.json",uT="install-id",jO=2880*60*1e3;UO=2880*60*1e3,HO=10080*60*1e3,BO=(0,Pr.randomBytes)(4).toString("hex"),gT=["ignored","branch","editCount"],yT=["ignored","branch"],wT=["ignored","branch","commitHash","contentHashAtCommit"]});function ut(e=process.versions.node){let t=/^(\d+)\.(\d+)/.exec(e);if(!t)return!1;let n=Number.parseInt(t[1],10),r=Number.parseInt(t[2],10);return n>dt.major?!0:n<dt.major?!1:r>=dt.minor}function qt(e){let t=e,n=t?.message??String(e),r=t?.code;return r==="ENOENT"?null:r==="EACCES"||r==="EPERM"?{kind:"permission",message:n}:/SQLITE_CORRUPT|SQLITE_NOTADB|file is not a database/i.test(n)?{kind:"corrupt",message:n}:/SQLITE_BUSY|SQLITE_LOCKED|database is locked/i.test(n)?{kind:"locked",message:n}:/no such table|no such column/i.test(n)?{kind:"schema",message:n}:/SQLITE_CANTOPEN|unable to open/i.test(n)?{kind:"permission",message:n}:{kind:"unknown",message:n}}var dt,qe=y(()=>{"use strict";dt={major:22,minor:13}});function bT(){return ST.width}async function Nn(e,t,n=bT()){let r=new Array(e.length),o=0,s=Math.max(1,Math.min(n,e.length)),i=Array.from({length:s},async()=>{for(;;){let a=o++;if(a>=e.length)return;r[a]=await t(e[a],a)}});return await Promise.all(i),r}var Ha,ST,On=y(()=>{"use strict";Ha=class{constructor(){this.slots=8;this.bytesCap=67108864;this.slotsInUse=0;this.bytesInUse=0;this.waiting=[]}get width(){return this.slots}configure(t){t.slots!==void 0&&(this.slots=Math.max(1,Math.floor(t.slots))),t.bytesInFlight!==void 0&&(this.bytesCap=Math.max(0,Math.floor(t.bytesInFlight))),this.pump()}reset(){this.slots=8,this.bytesCap=67108864,this.pump()}async run(t,n){let r=await this.acquire(Math.max(0,t));try{return await n()}finally{this.slotsInUse--,this.bytesInUse-=r,this.pump()}}clamp(t){return Math.min(t,this.bytesCap)}fits(t){return this.slotsInUse<this.slots&&this.bytesInUse+this.clamp(t)<=this.bytesCap}acquire(t){return this.waiting.length===0&&this.fits(t)?Promise.resolve(this.take(t)):new Promise(n=>{this.waiting.push({want:t,wake:n})})}take(t){let n=this.clamp(t);return this.slotsInUse++,this.bytesInUse+=n,n}pump(){for(;this.waiting.length>0&&this.fits(this.waiting[0].want);){let t=this.waiting.shift();t.wake(this.take(t.want))}}},ST=new Ha});function Pm(e){if((0,Im.platform)()==="win32")try{lu("attrib",["+h",e],{timeout:2e3})}catch{}}var Im,Nm=y(()=>{"use strict";Im=require("node:os");Se()});var Om,V,Te,Mn,ue,ys=y(()=>{"use strict";Om=require("node:crypto"),V=require("node:fs"),Te=require("node:path");w();Nm();ne();Mn=f("MetadataManager"),ue=class e{constructor(t){this.jolliDir=t;this.manifestPath=(0,Te.join)(t,"manifest.json"),this.branchesPath=(0,Te.join)(t,"branches.json"),this.configPath=(0,Te.join)(t,"config.json"),this.migrationPath=(0,Te.join)(t,"migration.json"),this.indexPath=(0,Te.join)(t,"index.json")}ensure(){(0,V.mkdirSync)(this.jolliDir,{recursive:!0})!==void 0&&Pm(this.jolliDir),(0,V.existsSync)(this.manifestPath)||this.atomicWrite(this.manifestPath,JSON.stringify({version:1,files:[]},null,"	")),(0,V.existsSync)(this.branchesPath)||this.atomicWrite(this.branchesPath,JSON.stringify({version:1,mappings:[]},null,"	")),(0,V.existsSync)(this.configPath)||this.atomicWrite(this.configPath,JSON.stringify({version:1,sortOrder:"date"},null,"	"))}readManifest(){return this.readJson(this.manifestPath)??{version:1,files:[]}}updateManifest(t){let n=this.readManifest(),r=n.files.filter(o=>o.fileId!==t.fileId);r.push(t),this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:r},null,"	")),Mn.info("Manifest updated: %s (%s)",t.path,t.type)}removeFromManifest(t){let n=this.readManifest(),r=n.files.filter(o=>o.fileId!==t);return r.length===n.files.length?!1:(this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:r},null,"	")),!0)}unregisterFilesByType(t){let n=this.readManifest(),r=n.files.filter(s=>s.type!==t),o=n.files.length-r.length;return o===0?0:(this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:r},null,"	")),Mn.info("Manifest unregistered %d entries of type=%s",o,t),o)}replaceFiles(t){let n=this.readManifest();this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:[...t]},null,"	"))}findByPath(t){return this.readManifest().files.find(n=>n.path===t)}findById(t){return this.readManifest().files.find(n=>n.fileId===t)}updatePath(t,n){let r=this.readManifest();if(!r.files.find(i=>i.fileId===t))return!1;let s=r.files.map(i=>i.fileId===t?{...i,path:n}:i);return this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:s},null,"	")),!0}resolveFolderForBranch(t){let n=this.readBranches(),r=n.mappings.find(a=>a.branch===t);if(r)return r.folder;let o=e.transcodeBranchName(t),s={folder:o,branch:t,createdAt:new Date().toISOString()},i={...n,mappings:[...n.mappings,s]};return this.atomicWrite(this.branchesPath,JSON.stringify(i,null,"	")),Mn.info("Branch mapping created: %s \u2192 %s",t,o),o}removeBranchMapping(t){let n=this.readBranches(),r=n.mappings.filter(o=>o.branch!==t);return r.length===n.mappings.length?!1:(this.atomicWrite(this.branchesPath,JSON.stringify({...n,mappings:r},null,"	")),Mn.info("Branch mapping removed: %s (no remaining head)",t),!0)}renameBranchFolder(t,n){let r=this.readBranches(),o=r.mappings.map(l=>l.folder===t?{...l,folder:n}:l);this.atomicWrite(this.branchesPath,JSON.stringify({...r,mappings:o},null,"	"));let s=this.readManifest(),i=0,a=s.files.map(l=>l.path.startsWith(`${t}/`)?(i++,{...l,path:l.path.replace(`${t}/`,`${n}/`)}):l);return i>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...s,files:a},null,"	")),i}removeBranchFolder(t){let n=this.readBranches();this.atomicWrite(this.branchesPath,JSON.stringify({...n,mappings:n.mappings.filter(i=>i.folder!==t)},null,"	"));let r=this.readManifest(),o=r.files.filter(i=>!i.path.startsWith(`${t}/`)),s=r.files.length-o.length;return s>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:o},null,"	")),s}unregisterBranches(t){let n=new Set(t);if(n.size===0)return 0;let r=this.readBranches(),o=r.mappings.filter(i=>!n.has(i.branch)),s=r.mappings.length-o.length;return s===0?0:(this.atomicWrite(this.branchesPath,JSON.stringify({...r,mappings:o},null,"	")),Mn.info("Branch mappings unregistered: %d",s),s)}readBranches(){return this.readJson(this.branchesPath)??{version:1,mappings:[]}}listBranchMappings(){return this.readBranches().mappings}folderToBranch(t){try{return this.listBranchMappings().find(n=>n.folder===t)?.branch??t}catch{return t}}listIndexHeads(){let t=this.readJson(this.indexPath);return!t||!Array.isArray(t.entries)?[]:t.entries.filter(n=>typeof n?.commitHash=="string"&&typeof n.branch=="string"&&(n.parentCommitHash===null||typeof n.parentCommitHash=="string")&&n.parentCommitHash===null)}readIndex(){return this.readJson(this.indexPath)}readConfig(){return this.readJson(this.configPath)??{version:1,sortOrder:"date"}}saveConfig(t){this.atomicWrite(this.configPath,JSON.stringify(t,null,"	"))}readMigrationState(){return this.readJson(this.migrationPath)}saveMigrationState(t){this.atomicWrite(this.migrationPath,JSON.stringify(t,null,"	"))}reconcile(t){let n=this.readManifest();if(n.files.length===0||!n.files.some(a=>!(0,V.existsSync)((0,Te.join)(t,a.path))))return 0;let o=new Map;try{this.walkDir(t,t,o)}catch{}let s=0,i=[];for(let a of n.files){let l=(0,Te.join)(t,a.path);if((0,V.existsSync)(l))i.push(a);else{let c=o.get(a.fingerprint);c&&c!==a.path?(i.push({...a,path:c}),s++):(Mn.warn("Manifest entry '%s' (id=%s) not found on disk \u2014 keeping entry to avoid data loss",a.path,a.fileId),i.push(a))}}return s>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:i},null,"	")),s}walkDir(t,n,r){for(let o of(0,V.readdirSync)(t,{withFileTypes:!0})){if(o.name.startsWith("."))continue;let s=(0,Te.join)(t,o.name);if(o.isDirectory())this.walkDir(s,n,r);else if(o.name.endsWith(".md"))try{let i=(0,V.readFileSync)(s,"utf-8"),a=e.sha256(i);r.set(a,De((0,Te.relative)(n,s)))}catch{}}}static transcodeBranchName(t){let n=t.replace(/[/\\:*?~^]/g,"-");return n=n.replace(/-{3,}/g,"-"),n=n.replace(/\.\./g,"--"),n=n.replace(/^[.-]+|[.-]+$/g,""),n||"default"}static sha256(t){return(0,Om.createHash)("sha256").update(t,"utf-8").digest("hex")}readJson(t){if(!(0,V.existsSync)(t))return null;try{return JSON.parse((0,V.readFileSync)(t,"utf-8"))}catch{return null}}atomicWrite(t,n){let r=(0,Te.dirname)(t);(0,V.mkdirSync)(r,{recursive:!0});let o=`${t}.tmp`;(0,V.writeFileSync)(o,n,"utf-8"),(0,V.renameSync)(o,t)}}});function y_(e,t){if(process.env.VITEST)return null;let n=t?`${t}@${e}`:e;try{return ge("ssh",["-G",n],{encoding:"utf-8",timeout:f_,stdio:["ignore","pipe","pipe"]})}catch(r){return m_.debug("ssh -G %s failed: %s",n,r instanceof Error?r.message:String(r)),null}}function Lm(e,t){let n=new RegExp(`^${t}\\s+(\\S+)`,"i");for(let r of e.split(/\r?\n/)){let o=r.match(n);if(o?.[1])return o[1]}return null}function $n(e,t){if(!e)return{host:e,port:"",endpointRemapped:!1};let n=`${t??""}\0${e}`,r=Dm.get(n);if(r!==void 0)return r;let o=e,s="",i=g_(e,t);if(i){let c=Lm(i,"hostname");c&&(o=c);let u=Lm(i,"port");u&&(s=u)}let a=h_.get(o.toLowerCase()),l=a?{host:a,port:"",endpointRemapped:!0}:{host:o,port:s,endpointRemapped:!1};return Dm.set(n,l),l}function Fn(e){return e.includes(":")&&!e.startsWith("[")?`[${e}]`:e}var m_,f_,h_,Dm,g_,al=y(()=>{"use strict";w();Se();m_=f("SshAliasResolver"),f_=5e3,h_=new Map([["ssh.github.com","github.com"],["altssh.gitlab.com","gitlab.com"],["altssh.bitbucket.org","bitbucket.org"]]),Dm=new Map,g_=y_});function Mm(){return(0,Z.join)((0,jm.homedir)(),"Documents","jolli")}function dl(e){return e?E_(e)?e:(w_.warn("Invalid customPath '%s': must be absolute and not contain '..'. Falling back to default.",e),Mm()):Mm()}function E_(e){return e?(0,Z.isAbsolute)(e)&&!e.includes(".."):!0}function Um(e,t,n){let r=dl(n),o=(0,Z.join)(r,e);if(!(0,Nt.existsSync)(o)){let i=Vm(r,e,t).match;return i||(cl(o,e,t),o)}let s=Xm(o);return s&&Gm(s,t,e)?o:s&&Ym(o,s)?(cl(o,e,t),o):R_(r,e,t)}function Hm(e){let t=pl(e,["config","--get","remote.origin.url"]);if(t){let r=t.match(/\/([^/]+?)(?:\.git)?$/);if(r?.[1])return r[1]}let n=Bm(e);return n?(0,Z.basename)(n):(0,Z.basename)(e)||"unknown"}function Bm(e){let t=pl(e,["rev-parse","--git-common-dir"]);if(!t)return null;let n=(0,Z.isAbsolute)(t)?t:(0,Z.join)(e,t),r=(0,Z.dirname)(n);return r&&r!=="/"&&r!=="."?r:null}function S_(e,t){if(!(0,Z.basename)(e))return{claimable:!1,blocker:"not-a-project"};let n=Bm(e);if(!n)return{claimable:!1,blocker:"not-a-project"};let r;try{r=dl(t)}catch{return{claimable:!1,blocker:"unresolvable-folder"}}return Zi(r,n)?{claimable:!1,blocker:"folder-inside-repo"}:{claimable:!0}}function ul(e,t){return S_(e,t).claimable}function Wm(){let e=Number(process.env.JOLLI_GIT_CMD_TIMEOUT_MS);return Number.isFinite(e)&&e>0?e:3e4}function b_(){return Math.min(Wm(),5e3)}function T_(e){return typeof e=="object"&&e!==null&&e.code==="ETIMEDOUT"}function $m(e,t,n=Wm()){return ge("git",t,{cwd:e,encoding:"utf-8",timeout:n,stdio:["ignore","pipe","pipe"]}).trim()||null}function pl(e,t){try{return $m(e,t)}catch(n){if(!T_(n))return null;try{return $m(e,t,b_())}catch{return null}}}function Jm(e){return pl(e,["remote","get-url","origin"])}function Gm(e,t,n){return e.remoteUrl&&t?Fm(e.remoteUrl)===Fm(t):!e.remoteUrl&&!t?e.repoName==null||e.repoName===n:!1}function Fm(e){return Km(e).replace(/\/+$/,"").replace(/\.git$/,"").toLowerCase()}function Ur(e,t){return __.has(e)?t:""}function Km(e){let t=e.match(/^(?:git\+)?ssh:\/\/(?:([^@/]+)@)?([^/:]+)(?::(\d+))?\/(.+)$/i);if(t){let o=$n(t[2],t[1]||void 0),s=o.endpointRemapped?"":t[3]??o.port,i=Ur(o.host.toLowerCase(),s);return`https://${Fn(o.host)}${ll(i,"22")}/${t[4]}`}let n=e.match(/^git:\/\/([^/:]+)(?::(\d+))?\/(.+)$/i);if(n)return`https://${n[1]}${ll(n[2],"9418")}/${n[3]}`;let r=e.match(/^([^@/:]+)@([^/:]+):(.+)$/);if(r){let o=$n(r[2],r[1]||void 0),s=Ur(o.host.toLowerCase(),o.port);return`https://${Fn(o.host)}${ll(s,"22")}/${r[3]}`}return e}function ll(e,t){return!e||e===t?"":`:${e}`}function Vm(e,t,n){let r=null,o=null,s=null;for(let i=2;i<=99;i++){let a=(0,Z.join)(e,`${t}-${i}`);if(!(0,Nt.existsSync)(a)){s===null&&(s=a);continue}let l=Xm(a);if(l&&Gm(l,n,t)){r=a;break}l&&o===null&&Ym(a,l)&&(o=a)}return{match:r,stub:o,firstUnused:s}}function R_(e,t,n){let r=Vm(e,t,n);if(r.match)return r.match;let o=r.stub??r.firstUnused??(0,Z.join)(e,`${t}-${Date.now()}`);return cl(o,t,n),o}function cl(e,t,n){if(W())return;let r=new ue((0,Z.join)(e,".jolli"));r.ensure();let o=r.readConfig();r.saveConfig({...o,remoteUrl:n??void 0,repoName:t})}function Ym(e,t){return t.remoteUrl==null&&t.repoName==null}function Xm(e){let t=(0,Z.join)(e,".jolli","config.json");if(!(0,Nt.existsSync)(t))return null;try{return JSON.parse((0,Nt.readFileSync)(t,"utf-8"))}catch{return null}}var Nt,jm,Z,w_,qm,__,Hr=y(()=>{"use strict";Nt=require("node:fs"),jm=require("node:os"),Z=require("node:path");w();Se();ys();ne();al();w_=f("KBPathResolver");qm=new Set(["github.com","gitlab.com","bitbucket.org"]),__=new Set(["github.com","gitlab.com","bitbucket.org"])});async function yl(e){let t=await J(["config","--get","remote.origin.url"],e),n=t.exitCode===0?t.stdout.trim():"";return n.length===0?Br(e):cf(n,e)}function cf(e,t){let n=e.trim();if(n.length===0)return Br(t);let r=/^([A-Za-z0-9_.+-]+@)([^:/\s]+):(.+)$/.exec(n);if(r&&!n.includes("://")){let i=$n(r[2],r[1].slice(0,-1)||void 0),a=i.host.toLowerCase(),l=af(a,sf(r[3])),c=lf("ssh",Ur(a,i.port));return`https://${Fn(a)}${c}/${l}`}let o;try{o=new URL(n)}catch{return Br(t)}let s=o.protocol.replace(/:$/,"").toLowerCase();if(s==="ssh"||s==="git"||s==="http"||s==="https"){let a=s==="ssh"?$n(o.hostname,o.username||void 0):{host:o.hostname,port:"",endpointRemapped:!1},l=a.host.toLowerCase(),c=af(l,sf(o.pathname.replace(/^\/+/,""))),u=a.endpointRemapped?"":o.port!==""?o.port:a.port,d=s==="ssh"?Ur(l,u):u,p=lf(s,d);return`https://${Fn(l)}${p}/${c}`}return Br(s==="file"?o.pathname:t)}function Br(e){let t=Tn(De(e));return t.length===0?"file:///":t.startsWith("/")?`file://${t}`:`file:///${t}`}function sf(e){let t=Tn(e);return t.toLowerCase().endsWith(".git")&&(t=t.slice(0,-4)),Tn(t)}function af(e,t){return qm.has(e)?t.toLowerCase():t}function lf(e,t){return t.length===0?"":e==="ssh"||e==="git"?t===I_[e]?"":`:${t}`:`:${t}`}var I_,Ts=y(()=>{"use strict";ye();Hr();ne();al();I_={ssh:"22",git:"9418"}});function wl(){return"codex-plugin"}var Ke,jn=y(()=>{"use strict";Ke="codex-plugin/1.0.3"});var _f,Rf,kf,vf,Af,Cf,xf,If,Pf,Nf,Of,Df,Lf,Mf,Cl,$f,Ff,jf,Uf,Rs=y(()=>{"use strict";_f=`
-- \u2500\u2500 Metadata \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
CREATE TABLE schema_meta (key TEXT PRIMARY KEY, value TEXT) STRICT;

-- \u2500\u2500 Repo registry \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- \`id\` is the surrogate key every other table references. repo_identity is a
-- normalized remote URL that legitimately CHANGES (a local-only repo gaining a
-- remote, a checkout moving), and it is 60-odd bytes that would otherwise ride
-- in every row and every composite index \u2014 measured, that one substitution took
-- commit_branches from 37.3 MiB to 30.2 MiB before any other change. It stays as
-- a UNIQUE natural key because that is what a worktree resolves to at startup.
--
-- Rows are NEVER deleted; disable is an UPDATE of \`disabled_at\`, so history
-- stays queryable and no single statement can wipe a repo's memories. The
-- trigger that enforces it is in DashboardDb, with the reasoning for why it is
-- the one trigger that survived.
-- Every column here is either read today or is a fact about the repo that only
-- this row records. \`bootstrap_cursor\` was neither \u2014 it was declared and never
-- written by anything \u2014 so it is the one that went.
CREATE TABLE repos (
  id                INTEGER PRIMARY KEY,
  repo_identity     TEXT NOT NULL UNIQUE,
  repo_name         TEXT NOT NULL,
  worktree_root     TEXT NOT NULL,
  remote_url        TEXT,
  enabled_at        TEXT NOT NULL,
  disabled_at       TEXT,
  last_ingested_at  TEXT,
  bootstrap_state   TEXT NOT NULL DEFAULT 'pending'
) STRICT;

-- \u2500\u2500 Sessions \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- event_id embeds repo_identity + source + sessionId, so the PK IS the natural
-- key and every write can be a plain idempotent UPSERT.
-- Instants are stored ONCE, as epoch ms. The ISO twins (\`started_at\`,
-- \`updated_at\`) held the same instant a second time and were read by nothing \u2014
-- every query orders and filters on the \`_ms\` column. The instants themselves
-- stay: \`started_at_ms\` cannot be recovered from \`updated_at_ms\` and duration.
CREATE TABLE sessions (
  event_id        TEXT PRIMARY KEY,
  repo_id         INTEGER NOT NULL REFERENCES repos(id),
  source          TEXT NOT NULL,
  session_id      TEXT NOT NULL,
  title           TEXT,
  started_at_ms   INTEGER,
  updated_at_ms   INTEGER NOT NULL,
  message_count   INTEGER,
  duration_ms     INTEGER,
  model           TEXT,
  input_tokens    INTEGER NOT NULL DEFAULT 0,
  output_tokens   INTEGER NOT NULL DEFAULT 0,
  cached_tokens   INTEGER NOT NULL DEFAULT 0,
  est_cost_usd    REAL,
  token_coverage  TEXT NOT NULL DEFAULT 'sessions-only',
  prices_as_of    TEXT,
  UNIQUE (repo_id, source, session_id)
) STRICT;
CREATE INDEX ix_sessions_repo_time ON sessions(repo_id, updated_at_ms);
CREATE INDEX ix_sessions_time ON sessions(updated_at_ms);
CREATE INDEX ix_sessions_source ON sessions(source);

-- Per-session, per-model split. A session can switch models mid-stream, so
-- sessions.model is a display convenience and THIS is authoritative.
--
-- Keyed on session_event_id rather than an integer: measured at 24 and 114 rows,
-- so the key-shape work that paid for itself on the commits chain would buy
-- nothing here while touching StopHook, the VS Code tick and two projections.
CREATE TABLE session_model_usage (
  session_event_id TEXT NOT NULL REFERENCES sessions(event_id) ON DELETE CASCADE,
  model            TEXT NOT NULL,
  -- No \`provider\` column: it was recorded per row and selected by nothing.
  -- Pricing resolves the provider from the model id (see core/Pricing.ts), so a
  -- stored copy is a second answer to a question that already has one.
  input_tokens     INTEGER NOT NULL DEFAULT 0,
  output_tokens    INTEGER NOT NULL DEFAULT 0,
  cached_tokens    INTEGER NOT NULL DEFAULT 0,
  est_cost_usd     REAL,
  PRIMARY KEY (session_event_id, model)
) STRICT;
CREATE INDEX ix_smu_model ON session_model_usage(model);

CREATE TABLE session_tool_use (
  session_event_id TEXT NOT NULL REFERENCES sessions(event_id) ON DELETE CASCADE,
  tool_name        TEXT NOT NULL,
  kind             TEXT NOT NULL,
  server           TEXT,
  calls            INTEGER NOT NULL DEFAULT 0,
  -- This table counts CALLS, nothing more. It used to carry a metadata_json
  -- column holding each recall call's own hit/miss and served commits, parsed
  -- back out of Claude's transcript; \`recall_receipts\` replaced that (see its
  -- DDL for why), so the column has no writer and no reader and is gone from
  -- the definition. Databases created before the change still have it \u2014 an
  -- unused nullable column, harmless, and cheaper to leave than to rewrite a
  -- STRICT table for.
  -- "kind" is part of the key, not just a column: a skill and a builtin can
  -- share a name, and the parser already groups on (kind, name). Keying on the
  -- name alone would silently merge two different things into one row.
  PRIMARY KEY (session_event_id, tool_name, kind)
) STRICT;
CREATE INDEX ix_stu_kind ON session_tool_use(kind);
CREATE INDEX ix_stu_server ON session_tool_use(server);

-- \u2500\u2500 Commits \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- Child tables reference \`id\`, never \`event_id\`. event_id is the producer's
-- idempotency key \u2014 'commit:<remote URL>:<40-hex sha>', measured at 80 bytes
-- average \u2014 and it is used only to dedupe at write time. Carrying it in the
-- children instead is what made commit_branches the largest object in the
-- database while holding no business data at all.
--
-- The memory projections that used to trail here (turns, tokens, est_cost_usd,
-- ticket_id, plus the commit_insights / commit_references / session_commit_link
-- child tables) are GONE (A3b): a copy falls behind whenever a memory is
-- regenerated, so the dashboard reads them from the memory tables instead \u2014
-- generated columns on \`memories\`, json_each over summary_json for insights,
-- transcript_sessions x memory_transcripts for the session link \u2014 which
-- recordCommitsFromWorker refreshes live at the same moment it emits
-- commit.summary. Do not reintroduce a stored copy; dev databases created
-- before the drop may still carry the dead columns/tables harmlessly
-- (pre-release, nothing reads or writes them).
--
-- work_category is deliberately NOT among them: it never was a summary field but
-- a mode computed over the topics' categories, and category belongs to a TOPIC.
-- Pages that aggregate by category read \`memory_topics\`; pages that want a
-- commit-level LABEL derive the mode at query time, so there is no stored copy
-- to fall behind.
-- Same instant-stored-once rule as \`sessions\`: \`committed_at\` (ISO) rode beside
-- \`committed_at_ms\` and no query read it. The author columns stay \u2014 nothing
-- displays them today, but they are the commit's own facts and re-deriving them
-- means re-walking git.
CREATE TABLE commits (
  id              INTEGER PRIMARY KEY,
  event_id        TEXT NOT NULL UNIQUE,
  repo_id         INTEGER NOT NULL REFERENCES repos(id),
  hash            TEXT NOT NULL,
  branch          TEXT,
  message         TEXT,
  author_name     TEXT,
  author_email    TEXT,
  committed_at_ms INTEGER NOT NULL,
  files_changed   INTEGER,
  insertions      INTEGER,
  deletions       INTEGER,
  UNIQUE (repo_id, hash)
) STRICT;
CREATE INDEX ix_commits_repo_time ON commits(repo_id, committed_at_ms);
CREATE INDEX ix_commits_branch ON commits(branch);





-- Branch-name dictionary. Measured: 87 distinct names referenced by 102,767
-- rows, average name length 27.4 bytes, so the names were repeating tens of
-- thousands of times \u2014 one of them 2,098 times by itself.
CREATE TABLE branches (
  id      INTEGER PRIMARY KEY,
  repo_id INTEGER NOT NULL REFERENCES repos(id),
  name    TEXT NOT NULL,
  UNIQUE (repo_id, name)
) STRICT;

-- Commit<->branch reachability. A commit is reachable from many branches, so
-- commits.branch cannot answer "group by branch" correctly \u2014 it is only a
-- heuristic "first seen on" label. Refreshed by unioning per-ref 'git rev-list',
-- never by 'git branch --contains' per commit.
--
-- The row count is correct and not worth optimizing: measured, 1,078 commits are
-- each reachable from 68 branches, because old branches all contain main's
-- history. O(commit x reachable branches) is the true answer to reachability.
-- What was wrong was 380 bytes per row for 3 bytes of information.
--
-- This is the ONE table with no repo_id: the boundary comes from
-- branches.repo_id, and "commits on branch X of repo Y" is two hops
-- (branches(repo_id,name) -> branch_id -> ix_cb_branch). One extra join, and the
-- table plus its indexes went from 30.19 MiB to 2.04 MiB on real data.
-- WITHOUT ROWID because a pure key table does not need a second rowid index.
CREATE TABLE commit_branches (
  commit_id INTEGER NOT NULL REFERENCES commits(id)  ON DELETE CASCADE,
  branch_id INTEGER NOT NULL REFERENCES branches(id) ON DELETE CASCADE,
  PRIMARY KEY (commit_id, branch_id)
) STRICT, WITHOUT ROWID;
CREATE INDEX ix_cb_branch ON commit_branches(branch_id, commit_id);

CREATE TABLE commit_files (
  commit_id  INTEGER NOT NULL REFERENCES commits(id) ON DELETE CASCADE,
  path       TEXT NOT NULL,
  insertions INTEGER,
  deletions  INTEGER,
  PRIMARY KEY (commit_id, path)
) STRICT, WITHOUT ROWID;
CREATE INDEX ix_commit_files_path ON commit_files(path);

-- \u2500\u2500 Workspace \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- Transient, latest-wins. A detached HEAD has no branch name; branch_key holds
-- the '' sentinel so the PK stays usable (SQLite treats every NULL as distinct,
-- which would let detached-HEAD rows accumulate without bound).
CREATE TABLE worktree_status (
  repo_id        INTEGER NOT NULL REFERENCES repos(id),
  branch_key     TEXT NOT NULL DEFAULT '',
  branch         TEXT,
  files_changed  INTEGER,
  insertions     INTEGER,
  deletions      INTEGER,
  -- Instant stored once, as epoch ms \u2014 see \`sessions\`.
  observed_at_ms INTEGER NOT NULL,
  PRIMARY KEY (repo_id, branch_key)
) STRICT;

-- \u2500\u2500 Write-ahead log / durable ingest queue \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- StatsWriter lands every event here as 'pending' and COMMITS before it
-- projects, so a crash mid-projection leaves something to drain. event_id is
-- deliberately NOT unique: the same event may be written repeatedly, and
-- idempotency lives in the projection tables.
--
-- This is the one table that keeps \`repo_identity\` instead of \`repo_id\`, and the
-- reason is the same one that makes it a separate transaction: the log's job is
-- to get the raw event onto disk before anything is interpreted. Resolving an id
-- would make that first commit depend on a repos row existing, which is exactly
-- the ordering assumption the log exists to avoid \u2014 producers write in any order,
-- and a session event can arrive before \`jolli enable\` has projected the
-- registry. Storing what the producer said keeps the log a log; the projection
-- resolves the id on the way out.
CREATE TABLE events_raw (
  seq               INTEGER PRIMARY KEY AUTOINCREMENT,
  event_id          TEXT,
  repo_identity     TEXT,
  type              TEXT NOT NULL,
  schema_version    INTEGER NOT NULL,
  producer_kind     TEXT,
  producer_version  TEXT,
  occurred_at       TEXT,
  received_at       TEXT NOT NULL,
  data_json         TEXT NOT NULL,
  projection_status TEXT NOT NULL DEFAULT 'pending',
  claimed_at_ms     INTEGER,
  attempts          INTEGER NOT NULL DEFAULT 0
) STRICT;
-- Only ONE index, and it is the drain's: every events_raw query filters on
-- projection_status (+ seq, attempts, schema_version) or prunes on received_at.
-- The three that used to sit here (on type, on (repo_identity, occurred_at) and
-- on event_id) indexed columns no query has ever filtered on \u2014 they cost a write
-- per enqueue on the blocking commit path and bought nothing. Re-add one only
-- alongside the query that needs it.
CREATE INDEX ix_events_pending ON events_raw(projection_status, seq);

-- \u2500\u2500 Gap-recovery cursors \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- A fast path for append-only history plus a rewrite detector \u2014 NOT the
-- correctness mechanism. Adds/changes are handled by idempotent UPSERT and
-- deletes by set reconciliation, because a high-water mark alone misses
-- out-of-order updates, history rewrites and deletions.
CREATE TABLE ingest_cursors (
  repo_id       INTEGER NOT NULL REFERENCES repos(id),
  source        TEXT NOT NULL,
  cursor        TEXT NOT NULL,
  updated_at_ms INTEGER NOT NULL,
  PRIMARY KEY (repo_id, source)
) STRICT;

-- \u2500\u2500 Aggregates \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- There are none. agg_repo_totals lived here and was removed unused: every
-- reader that wants tokens, cost or activity spans computes them live from the
-- detail tables (see the ~20 such queries in DashboardQuery), so the aggregate
-- was maintained on the projection path and read by nothing but a single
-- session count \u2014 which the Repositories page now counts live, the same way it
-- already counted memories. Read-time aggregation over the indexed detail rows
-- is what this schema is shaped for; re-adding a stored aggregate needs a
-- measured query that is actually too slow without it, not the assumption that
-- one will be.
-- \u2500\u2500 Provider usage / quota \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- There is none. \`usage_observations\` (and the Claude-shaped \`usage_samples\`
-- before it) recorded account-level limit pressure read out of Claude Code's own
-- local cache; the whole feature \u2014 reader, sampler, model, cards \u2014 was removed.
-- A database created before that still carries the table; it is simply unused,
-- and nothing here recreates it. Bringing quota tracking back means designing it
-- against whatever provider actually exposes it, not reviving this shape.

-- \u2500\u2500 Code graph \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- PARKED, not deleted. The graph page was removed (no view token, no route, no
-- reader), which left this table written by DbBackfill and read by nothing \u2014 a few
-- hundred KB of JSON per repo per import, for no query. The writer is commented
-- out in lockstep (StatsWriter.recordRepoGraph, DbBackfill's call site); uncomment
-- all three together if the page returns. Kept as commented DDL rather than
-- dropped from history because this is the exact shape it would come back to.
--
-- CREATE TABLE repo_graphs (
--   repo_id        INTEGER PRIMARY KEY REFERENCES repos(id),
--   generated_at   TEXT NOT NULL,
--   schema_version INTEGER NOT NULL,
--   categories     INTEGER NOT NULL DEFAULT 0,
--   topics         INTEGER NOT NULL DEFAULT 0,
--   units          INTEGER NOT NULL DEFAULT 0,
--   edges          INTEGER NOT NULL DEFAULT 0,
--   graph_json     TEXT NOT NULL
-- ) STRICT;
`,Rf=`
CREATE TABLE recall_receipts (
  -- The producer's own idempotency key (statsEventId), so a re-drained event
  -- converges on one row instead of appending a duplicate call.
  receipt_id   TEXT PRIMARY KEY,
  repo_id      INTEGER NOT NULL REFERENCES repos(id),
  at_ms        INTEGER NOT NULL,
  -- 'mcp' | 'cli'. Kept because the two answer different questions about
  -- adoption, and because a surface that stops reporting is only visible here.
  surface      TEXT NOT NULL,
  session_id   TEXT,
  hit          INTEGER NOT NULL,
  commit_count INTEGER NOT NULL DEFAULT 0,
  -- JSON array of {hash, date} for a hit; NULL for a miss. Powers "distinct
  -- memories used" and the stale-memory count, neither of which a bare
  -- commit_count can answer.
  commits_json TEXT
) STRICT;
CREATE INDEX ix_recall_receipts_repo_at ON recall_receipts(repo_id, at_ms);
`,kf=`
INSERT INTO context_kinds (kind) VALUES ('skill');
`,vf=`
ALTER TABLE events_raw ADD COLUMN failed_kind TEXT;
`,Af=`
ALTER TABLE session_tool_use ADD COLUMN last_call_at_ms INTEGER;
`,Cf=`
CREATE TABLE session_usage_events (
  session_event_id TEXT NOT NULL REFERENCES sessions(event_id) ON DELETE CASCADE,
  -- The response's identity, or 'line:<n>' when the source cannot name one.
  dedup_key        TEXT NOT NULL,
  -- THIS response's instant. The column the whole table exists for; named for
  -- what it IS rather than what reads do with it, because those bucket it by a
  -- timezone the table deliberately does not store.
  responded_at_ms  INTEGER NOT NULL,
  -- Empty string when the transcript recorded usage without naming a model,
  -- matching how the whole-slice aggregate buckets those.
  model            TEXT NOT NULL,
  input_tokens     INTEGER NOT NULL DEFAULT 0,
  output_tokens    INTEGER NOT NULL DEFAULT 0,
  cached_tokens    INTEGER NOT NULL DEFAULT 0,
  est_cost_usd     REAL,
  -- Sync stamp, same rule as SYNC_STAMP_DDL's columns: bumped on every write,
  -- never a business time. See that constant for why the two cannot be one.
  updated_at_ms    INTEGER NOT NULL,
  PRIMARY KEY (session_event_id, dedup_key)
) STRICT, WITHOUT ROWID;
-- Every read is "this window", and the window is on the RESPONSE's own time
-- rather than its session's \u2014 which is the point of the table.
CREATE INDEX ix_sue_at ON session_usage_events(responded_at_ms);
CREATE INDEX ix_sue_sync ON session_usage_events(updated_at_ms);
`,xf=`
ALTER TABLE sessions            ADD COLUMN written_at_ms INTEGER NOT NULL DEFAULT 0;
ALTER TABLE session_model_usage ADD COLUMN updated_at_ms INTEGER NOT NULL DEFAULT 0;
ALTER TABLE session_tool_use    ADD COLUMN updated_at_ms INTEGER NOT NULL DEFAULT 0;
ALTER TABLE recall_receipts     ADD COLUMN updated_at_ms INTEGER NOT NULL DEFAULT 0;

UPDATE sessions        SET written_at_ms = updated_at_ms WHERE written_at_ms = 0;
UPDATE recall_receipts SET updated_at_ms = at_ms         WHERE updated_at_ms = 0;
-- COALESCE is load-bearing twice over: the column is NOT NULL, so a child row
-- whose parent session is missing would abort the migration outright \u2014 and 0 is
-- the right value for it anyway, matching a row that predates the column.
UPDATE session_model_usage
   SET updated_at_ms = COALESCE((SELECT s.updated_at_ms FROM sessions s
                                  WHERE s.event_id = session_model_usage.session_event_id), 0)
 WHERE updated_at_ms = 0;
UPDATE session_tool_use
   SET updated_at_ms = COALESCE((SELECT s.updated_at_ms FROM sessions s
                                  WHERE s.event_id = session_tool_use.session_event_id), 0)
 WHERE updated_at_ms = 0;
`,If=`
CREATE TABLE schema_migrations (
  seq           INTEGER PRIMARY KEY AUTOINCREMENT,
  -- Which array position it ran at. DIAGNOSTIC ONLY \u2014 nothing decides anything
  -- from it. Kept because "slot 5" is what a bug report says out loud.
  slot          INTEGER NOT NULL,
  name          TEXT    NOT NULL,
  outcome       TEXT    NOT NULL CHECK (outcome IN ('applied','failed','skipped','baseline')),
  -- \`JOLLI_CLIENT_HEADER\` \u2014 '<kind>/<version>', e.g. 'cli/0.99.11' or
  -- 'vscode-plugin/0.99.11'. The surface identity the user would go and upgrade.
  applied_by    TEXT    NOT NULL,
  applied_at_ms INTEGER NOT NULL,
  duration_ms   INTEGER NOT NULL,
  ddl           TEXT    NOT NULL
) STRICT;
CREATE INDEX ix_schema_migrations_name ON schema_migrations(name, seq);
`,Pf=`
DROP TRIGGER IF EXISTS repos_no_delete;
`,Nf=`
CREATE TABLE session_activity (
  session_event_id TEXT NOT NULL REFERENCES sessions(event_id) ON DELETE CASCADE,
  bucket_ms        INTEGER NOT NULL,
  recorded_at_ms   INTEGER NOT NULL,
  PRIMARY KEY (session_event_id, bucket_ms)
) STRICT;
CREATE INDEX ix_activity_bucket ON session_activity(bucket_ms);
CREATE INDEX ix_activity_recorded ON session_activity(recorded_at_ms);
`,Of=`
ALTER TABLE session_tool_use ADD COLUMN input_tokens INTEGER;
ALTER TABLE session_tool_use ADD COLUMN output_tokens INTEGER;
ALTER TABLE session_tool_use ADD COLUMN cached_tokens INTEGER;
ALTER TABLE session_tool_use ADD COLUMN usage_confidence TEXT;
`,Df=`
CREATE TABLE skill_invocations (
  session_event_id TEXT NOT NULL REFERENCES sessions(event_id) ON DELETE CASCADE,
  skill_name       TEXT NOT NULL,
  -- Epoch ms, matching every other instant in this schema. The invocation's own
  -- moment from the transcript, never the row's write time: it is the identity.
  at_ms            INTEGER NOT NULL,
  ok               INTEGER NOT NULL,
  -- 'observed' (read from a result record) | 'assumed' (defaulted, unknowable).
  ok_confidence    TEXT NOT NULL,
  -- NULL when the entry was observed; 'heuristic' when inferred from a file read.
  detection        TEXT,
  -- 'tool' (the agent decided) | 'command' (the user asked for it) | NULL unknown.
  entry_path       TEXT,
  args             TEXT,
  -- Characters injected by THIS entry. See the docblock on why it cannot be folded.
  body_chars       INTEGER,
  PRIMARY KEY (session_event_id, skill_name, at_ms)
) STRICT;
-- Every read is "this skill's entries, oldest first". The primary key already
-- serves the cascade delete, whose lookup is by session_event_id.
CREATE INDEX ix_si_skill_time ON skill_invocations(skill_name, at_ms);
`,Lf=`
ALTER TABLE session_tool_use ADD COLUMN plugin TEXT;
`,Mf=`
-- Per-repo control state (JSON values): 'orphan-import', 'cutover',
-- 'v5-migration' (the raw bytes of the orphan's schema-v5-migration.json \u2014 a
-- completed-marker whose absence would make the v5 migration re-run), ...
-- Kept out of schema_meta, which is a whole-database singleton. A key-value
-- table rather than columns on \`repos\` because \`cutover\` has to be written in
-- the same transaction as the data it certifies, and because adding a column
-- after release is a cross-surface release event while adding a marker is an
-- INSERT.
CREATE TABLE repo_state (
  repo_id INTEGER NOT NULL REFERENCES repos(id),
  key     TEXT NOT NULL,
  value   TEXT NOT NULL,
  PRIMARY KEY (repo_id, key)
) STRICT;

-- \u2500\u2500 memories: identity, topology and content in one row \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- \`children[]\` is stored as edges + array position rather than nested copies of
-- the child files (measured: the nesting is 31.3% of the bytes). The key stays
-- present in \`summary_json\` with its value emptied to \`[]\` \u2014 removing it and
-- appending it back during reassembly would reorder the JSON keys, and the
-- byte-for-byte equivalence check does not allow that difference.
--
-- root_hash and depth are denormalizations the write module maintains: the tree
-- measures 17 levels deep, so without them every root read is a recursive query.
-- depth doubles as cycle detection \u2014 a cycle makes inspection query 1 return
-- rows.
CREATE TABLE memories (
  repo_id       INTEGER NOT NULL REFERENCES repos(id),
  commit_hash   TEXT NOT NULL,

  parent_hash   TEXT,
  child_pos     INTEGER,
  root_hash     TEXT NOT NULL,
  depth         INTEGER NOT NULL DEFAULT 0,

  summary_json   TEXT NOT NULL,
  -- A REAL column, not a generated one: measured 313/313, summary files carry
  -- no \`treeHash\` \u2014 it exists only in index.json entries, computed from git at
  -- index-build time. It is load-bearing for alias scanning (tree-hash matching
  -- finds "same content, new sha"), so the importer copies it off the index
  -- entry and the write module stamps it via getTreeHash, exactly as
  -- flattenSummaryTree does today. NULL when git could not answer.
  tree_hash      TEXT,
  -- Same story as \`tree_hash\`, and a REAL column for the same reason: legacy
  -- (pre-v4) summaries carry their root diff stats ONLY on the index entry,
  -- never in the body. \`synthIndex\` rebuilds index.json from these rows and
  -- reads \`diffStats\` off the body, so without this the badge \`jolli view\`,
  -- the sidebar and the SessionStart briefing render is lost for every legacy
  -- root, and the rebuilt entry stops matching the file the branch carried.
  -- Not folded into \`summary_json\`: that blob has to reproduce the source file
  -- byte-for-byte for the cutover compare. NULL means the body is the only
  -- source, which is every v4-and-later memory.
  index_diff_stats_json TEXT,
  first_seen_ms  INTEGER NOT NULL,
  written_at_ms  INTEGER NOT NULL,
  -- Hand-written, not generated: date functions are barred from generated
  -- columns. It must be derived from the same field as \`commit_date\`, and no
  -- constraint can enforce that. NOT NULL plus an optional source field means a
  -- missing \`commitDate\` fails the whole row, so the write module falls back
  -- commitDate -> git commit time -> first_seen_ms before giving up.
  commit_date_ms INTEGER NOT NULL,

  -- STORED only for columns that feed an index or get read as a whole column.
  -- STORED is also restricted to TEXT (see this module's header): all three are.
  branch          TEXT    GENERATED ALWAYS AS (json_extract(summary_json,'$.branch'))            STORED,
  commit_message  TEXT    GENERATED ALWAYS AS (json_extract(summary_json,'$.commitMessage'))     STORED,
  commit_type     TEXT    GENERATED ALWAYS AS (json_extract(summary_json,'$.commitType'))        STORED,

  commit_date     TEXT    GENERATED ALWAYS AS (json_extract(summary_json,'$.commitDate'))        VIRTUAL,
  commit_author   TEXT    GENERATED ALWAYS AS (json_extract(summary_json,'$.commitAuthor'))      VIRTUAL,
  generated_at    TEXT    GENERATED ALWAYS AS (json_extract(summary_json,'$.generatedAt'))       VIRTUAL,
  recap           TEXT    GENERATED ALWAYS AS (json_extract(summary_json,'$.recap'))             VIRTUAL,
  ticket_id       TEXT    GENERATED ALWAYS AS (json_extract(summary_json,'$.ticketId'))          VIRTUAL,
  jolli_doc_id    TEXT    GENERATED ALWAYS AS (json_extract(summary_json,'$.jolliDocId'))        VIRTUAL,
  -- No topics_json column: the topics are projected into \`memory_topics\` instead,
  -- for the reason spelled out on that table.
  -- Numeric columns pass through a json_type gate so an off-type value degrades
  -- to NULL \u2014 the case the pages already handle for a missing field \u2014 instead of
  -- handing a REAL back from an INTEGER column. VIRTUAL escapes STRICT's type
  -- check entirely, so nothing else would notice.
  turns           INTEGER GENERATED ALWAYS AS (CASE WHEN json_type(summary_json,'$.conversationTurns')='integer'  THEN json_extract(summary_json,'$.conversationTurns')  END) VIRTUAL,
  tokens          INTEGER GENERATED ALWAYS AS (CASE WHEN json_type(summary_json,'$.conversationTokens')='integer' THEN json_extract(summary_json,'$.conversationTokens') END) VIRTUAL,
  est_cost_usd    REAL    GENERATED ALWAYS AS (CASE WHEN json_type(summary_json,'$.estimatedCostUsd') IN ('integer','real') THEN json_extract(summary_json,'$.estimatedCostUsd') END) VIRTUAL,
  files_changed   INTEGER GENERATED ALWAYS AS (CASE WHEN json_type(summary_json,'$.diffStats.filesChanged')='integer' THEN json_extract(summary_json,'$.diffStats.filesChanged') END) VIRTUAL,
  insertions      INTEGER GENERATED ALWAYS AS (CASE WHEN json_type(summary_json,'$.diffStats.insertions')='integer'   THEN json_extract(summary_json,'$.diffStats.insertions')   END) VIRTUAL,
  deletions       INTEGER GENERATED ALWAYS AS (CASE WHEN json_type(summary_json,'$.diffStats.deletions')='integer'    THEN json_extract(summary_json,'$.diffStats.deletions')    END) VIRTUAL,

  PRIMARY KEY (repo_id, commit_hash),
  UNIQUE (repo_id, parent_hash, child_pos),
  -- Shape handed to the engine: a root has no position, a child must have one.
  -- Blocks "root with a position" and "child without one" in a single check.
  CHECK ((parent_hash IS NULL) = (child_pos IS NULL)),
  -- Non-negative, so a reorder's temporaries have to offset upward. A negative
  -- scheme would need this check relaxed for the duration of every reorder.
  CHECK (child_pos IS NULL OR child_pos >= 0),
  -- Deliberately as loose as 2x REORDER_OFFSET: it must admit the reorder's own
  -- temporaries, so it cannot be the tight bound. What it catches is a retried
  -- reorder offsetting crash residue a second time. The tight bound
  -- (final positions < REORDER_OFFSET) is an assertion in the write module,
  -- because as a CHECK it would reject the temporaries.
  CHECK (child_pos IS NULL OR child_pos < 2000000),
  -- Self-reference: deleting a root deletes the whole tree. Pruning is therefore
  -- a whole-tree decision by root_hash, never a row-by-row one by date.
  FOREIGN KEY (repo_id, parent_hash)
    REFERENCES memories(repo_id, commit_hash) ON DELETE CASCADE
) STRICT;
CREATE INDEX ix_mem_root   ON memories(repo_id, root_hash);
CREATE INDEX ix_mem_branch ON memories(repo_id, branch, commit_date_ms);
CREATE INDEX ix_mem_date   ON memories(repo_id, commit_date_ms);
CREATE INDEX ix_mem_ticket ON memories(repo_id, ticket_id);

-- \u2500\u2500 memory_topics: the summary's topics[], one row per topic \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- A topic is "one independent problem/goal within a commit" (TopicSummary), and
-- \`category\` / \`importance\` belong to IT, not to the commit \u2014 the model is asked
-- for one category per topic, not one per commit. Measured on this repo: 727
-- memories carry 5,159 topics, 7.6 on average and up to 43.
--
-- The old read model collapsed them with a mode ("the commit's dominant
-- category") and stored one value per commit. That loses information the data
-- plainly has: by topic the split is bugfix 2,050 / feature 1,292, while by
-- commit-mode it is 39 / 36 \u2014 and \`security\` (211 topics) and \`docs\` (30) vanish
-- entirely, because neither ever wins a commit's vote. 15% of commits had a TIE
-- at the top, where "dominant" silently meant "whichever topic came first".
--
-- Why a table rather than reading them out of summary_json, all four measured on
-- the real 727 rows:
--   GROUP BY commits.work_category   0.87 ms  \u2014 fast, wrong shape
--   parse topics in JS               37 ms    \u2014 wrong shape, and ships 11.2 MiB
--   json_each over summary_json      303 ms   \u2014 right shape, unusable
--   this table                       4.88 ms  \u2014 right shape, fast
-- Same reason \`transcript_sessions\` exists: a queryable field sitting inside a
-- payload SQL has to parse per row is not queryable. summary_json stays the
-- source of truth and keeps the full topics for byte-faithful reassembly; this is
-- a projection of it, replaced as a whole group on every write.
--
-- Only the queryable fields are projected. decisions / trigger / response are
-- long prose that only ever gets displayed, and the pages already read those
-- from summary_json \u2014 a second copy would be bytes with no query behind them.
CREATE TABLE memory_topics (
  repo_id     INTEGER NOT NULL,
  commit_hash TEXT NOT NULL,
  pos         INTEGER NOT NULL,          -- topics[] index; ordering is restored from it
  category    TEXT,                      -- TopicCategory; NULL when the model omitted it
  importance  TEXT,                      -- 'major' | 'minor'
  title       TEXT NOT NULL,
  PRIMARY KEY (repo_id, commit_hash, pos),
  CHECK (pos >= 0),
  FOREIGN KEY (repo_id, commit_hash)
    REFERENCES memories(repo_id, commit_hash) ON DELETE CASCADE
) STRICT;
-- Leads with repo_id because every page query is repo-scoped; category second
-- because "group by category" is the whole point of the table.
CREATE INDEX ix_mtopic_category ON memory_topics(repo_id, category);

-- \u2500\u2500 commit aliases (index.json's third top-level key) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- A rewritten SHA -> the live memory with the same tree hash. Step 2 of
-- getSummary()'s four-step lookup. Tree-hash matching costs a git subprocess
-- per candidate, so a computed alias is kept forever; in index.json every
-- rebuild path had to remember to copy them across (one of five did not), and a
-- table has no rebuild to forget.
CREATE TABLE commit_aliases (
  repo_id     INTEGER NOT NULL,
  old_hash    TEXT NOT NULL,
  target_hash TEXT NOT NULL,
  created_ms  INTEGER NOT NULL,
  PRIMARY KEY (repo_id, old_hash),
  FOREIGN KEY (repo_id, target_hash)
    REFERENCES memories(repo_id, commit_hash) ON DELETE CASCADE
) STRICT;

-- \u2500\u2500 transcripts (keyed by TranscriptId \u2014 UUID or legacy commit hash) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- sessions_blob is zlib-compressed JSON: no generated columns, not indexed,
-- stored and fetched whole. It is the only compressible block in the database
-- (everywhere else has a query dependency on the text) and the second largest.
CREATE TABLE transcripts (
  repo_id       INTEGER NOT NULL REFERENCES repos(id),
  transcript_id TEXT NOT NULL,
  sessions_blob BLOB NOT NULL,
  written_at_ms INTEGER NOT NULL,
  PRIMARY KEY (repo_id, transcript_id)
) STRICT;

-- Many-to-many: one transcript is shared by several nodes of an amend chain,
-- and one memory can reference several. No array index is stored \u2014
-- \`summary.transcripts\` carries the order in summary_json and that is what
-- reassembly uses, so this table only answers queries and owes no fidelity.
CREATE TABLE memory_transcripts (
  repo_id       INTEGER NOT NULL,
  commit_hash   TEXT NOT NULL,
  transcript_id TEXT NOT NULL,
  PRIMARY KEY (repo_id, commit_hash, transcript_id),
  FOREIGN KEY (repo_id, commit_hash)
    REFERENCES memories(repo_id, commit_hash) ON DELETE CASCADE,
  FOREIGN KEY (repo_id, transcript_id)
    REFERENCES transcripts(repo_id, transcript_id) ON DELETE CASCADE
) STRICT;
CREATE INDEX ix_mt_transcript ON memory_transcripts(repo_id, transcript_id);

-- Compression makes the sessions invisible to SQL, so the queryable fields are
-- projected out. Uncompressed it would still need this: one session lookup
-- would otherwise parse megabytes of transcript JSON.
CREATE TABLE transcript_sessions (
  repo_id       INTEGER NOT NULL,
  transcript_id TEXT NOT NULL,
  session_id    TEXT NOT NULL,
  source        TEXT,
  PRIMARY KEY (repo_id, transcript_id, session_id),
  FOREIGN KEY (repo_id, transcript_id)
    REFERENCES transcripts(repo_id, transcript_id) ON DELETE CASCADE
) STRICT;
-- session_id leads, not source: the only reason this table exists is "which
-- commits is this session tied to", and source is legitimately NULL on older
-- data and not always known by the caller. Leading with source degrades that
-- lookup to a repo_id prefix plus a scan.
CREATE INDEX ix_ts_session ON transcript_sessions(repo_id, session_id, source);

-- \u2500\u2500 context: plans / notes / references / skills unified \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- All four are the same shape: one key, one complete file body, one version.
-- body_md is exactly what readFile() returns today (frontmatter included for a
-- reference or a skill), so the round trip is byte-faithful by construction.
-- native_id is stored separately because path escaping is irreversible \u2014
-- GitHub's \`owner/repo#number\` cannot be recovered from context_key.
--
-- A kind registry table rather than a closed CHECK: adding a kind is an INSERT.
-- 'skill' is NOT inserted here \u2014 it arrived after this entry was already on
-- disk in dev databases, so it ships as its own append-only migration (see
-- {@link SKILL_CONTEXT_KIND_DDL}); a fresh database gets it by running that
-- migration, exactly like an existing one.
CREATE TABLE context_kinds (kind TEXT PRIMARY KEY) STRICT;
INSERT INTO context_kinds (kind) VALUES ('plan'), ('note'), ('reference');
CREATE TABLE context (
  id            INTEGER PRIMARY KEY,
  repo_id       INTEGER NOT NULL REFERENCES repos(id),
  kind          TEXT NOT NULL REFERENCES context_kinds(kind),
  context_key   TEXT NOT NULL,
  source        TEXT,
  native_id     TEXT,
  tool_name     TEXT,
  referenced_at TEXT,
  original_slug TEXT,
  branch        TEXT,
  title         TEXT,
  url           TEXT,
  body_md       TEXT NOT NULL,
  created_at_ms INTEGER NOT NULL,
  updated_at_ms INTEGER,
  -- Non-NULL for plans only. This is plan_progress's foreign-key target, which
  -- is what replaced the three triggers that used to police that relation.
  plan_key TEXT GENERATED ALWAYS AS (CASE WHEN kind = 'plan' THEN context_key END) STORED,
  UNIQUE (repo_id, kind, context_key),
  UNIQUE (repo_id, plan_key),
  -- These three are stricter than file storage, which is a deliberate open
  -- question rather than a settled constraint: a historical reference file on
  -- orphan that lacks \`referencedAt\` is legal as a file but a CHECK violation
  -- here, and the importer's failure set has to be EMPTY before a repo may cut
  -- over. So the import phase counts how many real reference files are missing
  -- each field; if any are, the affected check degrades to the one-way form
  -- below (NULL unless reference) and the missing side is stored as NULL and
  -- logged. Until that measurement exists, keep them \u2014 do not relax them on
  -- the theory that looser is safer, because a silent NULL where the field was
  -- expected is its own class of bug.
  CHECK ((source        IS NOT NULL) = (kind = 'reference')),
  CHECK ((native_id     IS NOT NULL) = (kind = 'reference')),
  CHECK ((referenced_at IS NOT NULL) = (kind = 'reference')),
  CHECK (tool_name     IS NULL OR kind = 'reference'),
  CHECK (url           IS NULL OR kind = 'reference'),
  CHECK (original_slug IS NULL OR kind = 'plan'),
  CHECK (branch        IS NULL OR kind IN ('plan','note'))
) STRICT;
-- No indexes. Every context read is by (repo_id, kind, context_key) or
-- (repo_id, kind), both served by the UNIQUE constraint above. The three partial
-- indexes that used to sit here (on source, on (source, native_id), on branch)
-- were built for a queryable-metadata story no query ever arrived for; the
-- columns stay, the indexes do not.

-- \u2500\u2500 plan progress \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- One artifact per (plan, commit), keyed on the plan: a later commit for the
-- same plan overwrites the row. It has to be a table rather than a query
-- because rebuilding it is one LLM call per plan and the output is not
-- reproducible \u2014 the same criterion that keeps topic_pages a table.
--
-- ON UPDATE CASCADE is not optional. Plan slugs get normalized and rewritten
-- (which is why context.original_slug exists), and without the cascade an
-- in-place rename is rejected by the foreign key while a DELETE+INSERT rename
-- silently takes the progress with it.
CREATE TABLE plan_progress (
  repo_id       INTEGER NOT NULL,
  plan_slug     TEXT NOT NULL,
  artifact_json TEXT NOT NULL,
  updated_at_ms INTEGER NOT NULL,
  -- No generated columns. \`artifact_json\` is written and read whole (see
  -- SqliteStorage), so the eight projections that used to sit here \u2014 originalSlug,
  -- commitHash, commitMessage, commitDate, summary, steps, llm.model and a CAST
  -- payload_version \u2014 answered no query. Project a field out again when something
  -- needs to filter or sort on it, not on the theory that it might.
  PRIMARY KEY (repo_id, plan_slug),
  FOREIGN KEY (repo_id, plan_slug) REFERENCES context(repo_id, plan_key)
    ON UPDATE CASCADE ON DELETE CASCADE
) STRICT;

-- \u2500\u2500 topic KB \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- Not the same thing as summary_json's \`topics\`, which are groupings inside one
-- commit. A topic page is what accumulated about one topic across commits, so
-- it is derived but not cheap: one LLM call per topic, output not reproducible.
-- topic_pages.summary existed only inside topics/index.json; storing it here is
-- what lets that index become a view.
CREATE TABLE topic_pages (
  repo_id         INTEGER NOT NULL REFERENCES repos(id),
  stable_slug     TEXT NOT NULL,
  title           TEXT NOT NULL,
  summary         TEXT,
  content_md      TEXT NOT NULL,
  related_branches_json TEXT NOT NULL DEFAULT '[]',
  last_updated_at TEXT NOT NULL,
  payload_version INTEGER NOT NULL DEFAULT 1,
  PRIMARY KEY (repo_id, stable_slug)
) STRICT;

-- pos preserves the page's sourceRefs[] array order. The UNIQUE on it is the
-- same hazard as memories.child_pos, with a cheaper fix: this table has no
-- self-referencing foreign key, so the write module replaces a page's refs as a
-- whole group (DELETE then re-INSERT in one transaction) rather than updating
-- positions row by row. Never UPDATE pos in place.
CREATE TABLE topic_source_refs (
  repo_id     INTEGER NOT NULL,
  stable_slug TEXT NOT NULL,
  pos         INTEGER NOT NULL,
  ref_type    TEXT NOT NULL CHECK (ref_type IN ('summary','plan','note','userfile')),
  ref_id      TEXT NOT NULL,
  ts          TEXT NOT NULL,
  branch      TEXT,
  PRIMARY KEY (repo_id, stable_slug, ref_type, ref_id),
  UNIQUE (repo_id, stable_slug, pos),
  CHECK (pos >= 0),
  FOREIGN KEY (repo_id, stable_slug)
    REFERENCES topic_pages(repo_id, stable_slug) ON DELETE CASCADE
) STRICT;
CREATE INDEX ix_tsr_ref ON topic_source_refs(repo_id, ref_type, ref_id);

CREATE TABLE topic_processed_sources (
  repo_id     INTEGER NOT NULL REFERENCES repos(id),
  source_type TEXT NOT NULL CHECK (source_type IN ('summary','plan','note','userfile')),
  source_id   TEXT NOT NULL,
  PRIMARY KEY (repo_id, source_type, source_id)
) STRICT;

-- No views. \`v_topic_index\` used to live here, assembling topics/index.json's
-- array-ordered projection with ORDER BY inside json_group_array \u2014 but
-- SqliteStorage rebuilds that index directly from topic_pages + topic_source_refs
-- and never queried the view, so it was maintained by the engine on every write
-- and read by nothing.
`,Cl=`
CREATE INDEX IF NOT EXISTS ix_stats_daily_day ON stats_daily(tz, day);
`,$f=`
ALTER TABLE commits ADD COLUMN written_at_ms INTEGER NOT NULL DEFAULT 0;

-- IF NOT EXISTS because an earlier, unreleased build of this branch already
-- created this table on some machines (a developer's own among them) under a
-- migration name this log has no row for. Without the guard, such a database
-- re-runs the entry, dies on "table stats_daily already exists", and every open
-- after that fails until 'doctor --mark-migration' is run by hand.
--
-- The ALTER above cannot be guarded the same way -- SQLite has no
-- ADD COLUMN IF NOT EXISTS -- so a database that also already has that column
-- still needs that repair, which is precisely the state 'doctor
-- --mark-migration' documents itself as existing for. The two statements are
-- deliberately NOT split into separate entries to make each independently
-- markable: the split would leave a machine that has ALREADY applied this entry
-- under this name re-running the ALTER from a new slot, turning a repair anyone
-- can do into a failure everyone gets.
CREATE TABLE IF NOT EXISTS stats_daily (
  -- 0 on the 'built' sentinel, which speaks for the whole day rather than for
  -- one repo; a real repos.id on every data row. No foreign key, for that
  -- reason and because nothing here should cascade: this table is rebuilt, not
  -- maintained, and its delete path is explicit.
  repo_id       INTEGER NOT NULL,
  -- IANA zone the day was cut in. In the key because a day boundary is a
  -- property of the asker: a reader in another zone misses and builds its own
  -- rows rather than reading someone else's days as if they were its own.
  tz            TEXT NOT NULL,
  day           TEXT NOT NULL,           -- local calendar day, YYYY-MM-DD
  -- One of the spend axes, or 'tokens', or the 'built' sentinel.
  --
  -- The sentinel is what separates "this day was computed and had no activity"
  -- from "this day was never computed". Without it every quiet day misses
  -- forever and is recomputed on every request \u2014 the days most likely to be
  -- quiet being exactly the ones a wide range is full of. It is stored ONCE per
  -- day rather than once per repo so that a repo added later cannot leave old
  -- days permanently unavailable: a repo that did not exist contributed
  -- nothing, and when it does contribute, its own write stamp marks the day
  -- stale and the day is rebuilt.
  kind          TEXT NOT NULL,
  -- The series within the kind: a model/branch/ticket name for an axis,
  -- input|output|cached for 'tokens', '' for the sentinel.
  series_key    TEXT NOT NULL,
  -- REAL, not INTEGER: the category and branch axes apportion a commit's tokens
  -- across its topics or branches, so a day's contribution is fractional. The
  -- read path rounds at emission exactly as the live path does.
  value         REAL NOT NULL,
  cost_usd      REAL NOT NULL DEFAULT 0,
  -- When this day was computed. Staleness is "a source row was written after
  -- this", so it is compared against the sources' own write stamps and must
  -- never hold a business time.
  built_at_ms   INTEGER NOT NULL,
  -- Sync stamp, same rule as SYNC_STAMP_DDL's columns.
  updated_at_ms INTEGER NOT NULL,
  PRIMARY KEY (repo_id, tz, day, kind, series_key)
) STRICT, WITHOUT ROWID;
${Cl}
`,Ff=`
CREATE INDEX IF NOT EXISTS ix_sessions_written ON sessions(written_at_ms);
CREATE INDEX IF NOT EXISTS ix_smu_sync ON session_model_usage(updated_at_ms);
CREATE INDEX IF NOT EXISTS ix_stu_sync ON session_tool_use(updated_at_ms);
CREATE INDEX IF NOT EXISTS ix_recall_receipts_sync ON recall_receipts(updated_at_ms);
CREATE INDEX IF NOT EXISTS ix_commits_written ON commits(written_at_ms);
CREATE INDEX IF NOT EXISTS ix_mem_written ON memories(written_at_ms);
`,jf=`
CREATE INDEX IF NOT EXISTS ix_sessions_keyset ON sessions(written_at_ms, event_id);
CREATE INDEX IF NOT EXISTS ix_smu_keyset ON session_model_usage(updated_at_ms, session_event_id, model);
CREATE INDEX IF NOT EXISTS ix_stu_keyset ON session_tool_use(updated_at_ms, session_event_id, tool_name, kind);
CREATE INDEX IF NOT EXISTS ix_recall_receipts_keyset ON recall_receipts(updated_at_ms, receipt_id);
`,Uf=`
UPDATE sessions        SET written_at_ms = COALESCE(updated_at_ms, 0) WHERE written_at_ms IS NULL;
UPDATE recall_receipts SET updated_at_ms = COALESCE(at_ms, 0)         WHERE updated_at_ms IS NULL;
UPDATE session_model_usage
   SET updated_at_ms = COALESCE((SELECT s.updated_at_ms FROM sessions s
                                  WHERE s.event_id = session_model_usage.session_event_id), 0)
 WHERE updated_at_ms IS NULL;
UPDATE session_tool_use
   SET updated_at_ms = COALESCE(last_call_at_ms,
                                (SELECT s.updated_at_ms FROM sessions s
                                  WHERE s.event_id = session_tool_use.session_event_id), 0)
 WHERE updated_at_ms IS NULL;
`});function qr(){return(0,ks.join)(ie(),"jollimemory.db")}function Xt(e=process.versions.node){let t=/^(\d+)\.(\d+)/.exec(e);if(!t)return!1;let n=Number.parseInt(t[1],10),r=Number.parseInt(t[2],10);return n>Gr.major?!0:n<Gr.major?!1:r>=Gr.minor}function Hn(e){try{let t=e.prepare("SELECT value FROM schema_meta WHERE key = 'schema_version'").get(),n=Number.parseInt(t?.value??"",10);return Number.isFinite(n)?n:0}catch{return 0}}function Z_(e){try{return(e.prepare("SELECT COUNT(*) AS n FROM sqlite_master WHERE type = 'table' AND name = 'schema_migrations'").get()?.n??0)>0?"present":"absent"}catch{return"unknown"}}function Pl(e){try{return{kind:"rows",rows:e.prepare("SELECT seq, slot, name, outcome, applied_by, applied_at_ms, duration_ms, ddl FROM schema_migrations ORDER BY seq").all()}}catch(t){let n=Z_(e);return n==="absent"?{kind:"none"}:{kind:"unreadable",reason:k(t),tableConfirmed:n==="present"}}}function Hf(e){let t=Pl(e);return t.kind==="rows"?t.rows:void 0}function Jr(e,t){e.prepare(`INSERT INTO schema_migrations (slot, name, outcome, applied_by, applied_at_ms, duration_ms, ddl)
		 VALUES (?, ?, ?, ?, ?, ?, ?)`).run(t.slot,t.name,t.outcome,t.appliedBy,t.atMs,t.durationMs,t.ddl)}function eR(e){let t=new Map;for(let n of e){let r=t.get(n.name);(!r||n.seq>r.seq)&&t.set(n.name,n)}return t}function tR(e){let t=new Map;for(let n of e){if(n.outcome!=="applied")continue;let r=t.get(n.name);(!r||n.seq>r.seq)&&t.set(n.name,n)}return t}function nR(e){return Bn.findIndex(t=>t.name===e)}function rR(e){let t=Pl(e);if(t.kind==="none")return;if(t.kind==="unreadable"){Un.has(Bf)||(Un.add(Bf),mt.warn(t.tableConfirmed?"the schema_migrations table exists but could not be read (%s) \u2014 drift verification is skipped; run `jolli doctor --schema-log`":"the database could not be queried for its migration log (%s) \u2014 drift verification is skipped; run `jolli doctor --schema-log`",t.reason));return}let n=t.rows,r=new Set(Bn.map(o=>o.name));for(let[o,s]of eR(n))r.has(o)||Un.has(o)||(Un.add(o),mt.warn("migration %s was touched by %s but is unknown to this build (%s) \u2014 the database has been opened by another build",o,s.applied_by,Ke));for(let[o,s]of tR(n))r.has(o)&&(Un.has(o)||s.ddl!==Bn[nR(o)].ddl&&(Un.add(o),mt.warn("migration %s (slot %d) was applied by %s on %s with DIFFERENT DDL than this build (%s) carries \u2014 run `jolli doctor --schema-log` to see the log",o,s.slot,s.applied_by,new Date(s.applied_at_ms).toISOString().slice(0,10),Ke)))}function oR(e,t={}){let n=t.now??Date.now,r=t.appliedBy??Ke,o=Hn(e),s=Pl(e),i=new Set,a=[];if(s.kind==="rows")for(let d of s.rows)(d.outcome==="applied"||d.outcome==="baseline")&&i.add(d.name);else{let d=Math.min(o,Bn.length),p=Bn.slice(0,d).map((m,h)=>({slot:h,name:m.name,ddl:m.ddl}));for(let m of p)i.add(m.name);s.kind==="none"?a=p:mt.warn(s.tableConfirmed?"the schema_migrations table exists but could not be read (%s) \u2014 migrating from the version stamp and recording nothing":"the database could not be queried for its migration log (%s) \u2014 migrating from the version stamp and recording nothing",s.reason)}let l=Bn.map((d,p)=>({m:d,slot:p})).filter(({m:d})=>!i.has(d.name));if(l.length===0)return;let c=[],u=()=>{for(let d of a)Jr(e,{...d,outcome:"baseline",appliedBy:r,atMs:n(),durationMs:0});a=[];for(let d of c)Jr(e,d);c.length=0};e.exec("PRAGMA foreign_keys = OFF");try{for(let{m:d,slot:p}of l){let m=n();e.exec("BEGIN IMMEDIATE");try{let h=Hf(e);if(h?.some(E=>E.name===d.name&&(E.outcome==="applied"||E.outcome==="baseline"))){u(),Jr(e,{slot:p,name:d.name,outcome:"skipped",appliedBy:r,atMs:n(),durationMs:0,ddl:d.ddl}),e.exec("COMMIT");continue}if(!h&&Hn(e)>p){e.exec("COMMIT");continue}e.exec(d.ddl);let g={slot:p,name:d.name,outcome:"applied",appliedBy:r,atMs:n(),durationMs:n()-m,ddl:d.ddl};Hf(e)?(u(),Jr(e,g)):c.push(g);let S=Math.max(Hn(e),p+1);sR(e,"schema_version",String(S)),e.exec("COMMIT")}catch(h){try{e.exec("ROLLBACK")}catch{}try{e.prepare("DELETE FROM schema_migrations WHERE name = ? AND outcome = 'failed'").run(d.name),Jr(e,{slot:p,name:d.name,outcome:"failed",appliedBy:r,atMs:n(),durationMs:n()-m,ddl:d.ddl})}catch(g){mt.debug("could not record the failed migration %s: %s",d.name,k(g))}throw h}}}finally{e.exec("PRAGMA foreign_keys = ON")}mt.info("dashboard schema migrated %d \u2192 %d (%s)",o,Hn(e),l.map(({m:d})=>d.name).join(", "))}function sR(e,t,n){e.prepare(`INSERT INTO schema_meta (key, value) VALUES (?, ?)
		 ON CONFLICT(key) DO UPDATE SET value = excluded.value`).run(t,n)}function iR(e){Wf!==e&&(Wf=e,mt.warn("database is at format v%d, this build (%s) reads v%d \u2014 data written by newer builds is not visible here",e,Ke,Il))}function aR(e){let t=(0,ks.dirname)(e);try{(0,ft.mkdirSync)(t,{recursive:!0,mode:448}),((0,ft.statSync)(t).mode&511)!==448&&(0,ft.chmodSync)(t,448)}catch(n){mt.warn("could not restrict %s to owner-only: %s",t,k(n))}}function lR(e){for(let t of[e,`${e}-wal`,`${e}-shm`])try{((0,ft.statSync)(t).mode&511)!==384&&(0,ft.chmodSync)(t,384)}catch(n){Bt(n)||mt.warn("could not restrict %s to 0600: %s",t,k(n))}}async function Jf(e,t){if(!Xt())throw new xl(process.versions.node);let n=t.dbPath??qr(),r=t.maxAttempts??4,o=t.baseDelayMs??50;e||aR(n);let{DatabaseSync:s}=await import("node:sqlite");for(let i=1;;i++){let a;try{a=new s(n,{readOnly:e});for(let l of e?z_:X_)a.exec(l);return a.exec(`PRAGMA busy_timeout = ${t.busyTimeoutMs??Q_}`),e||lR(n),a}catch(l){try{a?.close()}catch{}if(qt(l)?.kind!=="locked"||i>=r)throw l;await new Promise(c=>setTimeout(c,o*2**(i-1)))}}}async function Gf(e,t={}){let n=await Jf(!1,t);try{let r=Hn(n);return r>Il&&iR(r),rR(n),oR(n),await e(n)}finally{n.close()}}async function Nl(e,t={}){let n=await Jf(!0,t);try{return await e(n)}finally{n.close()}}function vs(e,t){e.exec("BEGIN IMMEDIATE");try{let n=t();return e.exec("COMMIT"),n}catch(n){try{e.exec("ROLLBACK")}catch{}throw n}}var ft,ks,mt,Il,Gr,xl,X_,z_,Q_,Bn,Un,Bf,Wf,Ot=y(()=>{"use strict";ft=require("node:fs"),ks=require("node:path");jn();le();qe();w();Rs();mt=f("DashboardDb"),Il=12,Gr={major:22,minor:13};xl=class extends Error{constructor(t){super(`The Jolli dashboard needs Node >= ${Gr.major}.${Gr.minor} for built-in SQLite (running ${t}). Upgrade Node, or run the CLI with --experimental-sqlite.`),this.name="DashboardRuntimeError"}},X_=["PRAGMA journal_mode = WAL","PRAGMA foreign_keys = ON"],z_=["PRAGMA foreign_keys = ON"],Q_=2e3,Bn=[{name:"BASELINE_DDL",ddl:_f+`
-- Policy: repo rows are NEVER deleted \u2014 disable = set disabled_at. Every table
-- references repos(id) with default NO ACTION (not CASCADE), so a stray DELETE
-- errors instead of silently wiping a repo's memories; this trigger catches even
-- the zero-data case.
--
-- This is the ONE trigger the no-triggers rule keeps, and the reasons it does
-- not fall under that rule are worth stating: it encodes no business rule that
-- could change (repo rows stay forever by design), it has no ordering
-- relationship with any other trigger, and what it prevents is not a wrong value
-- but the irreversible loss of every memory belonging to a repo. Replacing it
-- with "the code does not write DELETE, and a test pins that" would trade an
-- engine-enforced guarantee for a convention.
CREATE TRIGGER repos_no_delete BEFORE DELETE ON repos
BEGIN SELECT RAISE(ABORT, 'repos are never deleted: set disabled_at instead'); END;
`+Mf},{name:"RECALL_RECEIPTS_DDL",ddl:Rf},{name:"SKILL_CONTEXT_KIND_DDL",ddl:kf},{name:"EVENT_FAILED_KIND_DDL",ddl:vf},{name:"TOOL_CALL_TIME_DDL",ddl:Af},{name:"SCHEMA_MIGRATIONS_DDL",ddl:If},{name:"REPOS_DELETE_ALLOWED_DDL",ddl:Pf},{name:"SESSION_STATS_SYNC_DDL",ddl:xf+Cf+$f+Cl+Ff+jf+Uf},{name:"SESSION_ACTIVITY_DDL",ddl:Nf},{name:"SKILL_TOKEN_USAGE_DDL",ddl:Of},{name:"SKILL_INVOCATIONS_DDL",ddl:Df},{name:"SKILL_PLUGIN_DDL",ddl:Lf}];Un=new Set,Bf="\0unreadable-log";Wf=0});function Ol(e){let t=s=>{try{return(0,Kr.statSync)(`${e}${s}`),!0}catch{return!1}},n=t(""),r=t("-wal"),o=t("-shm");return n?r&&o?"healthy-active":r?"healthy-recoverable":"healthy-clean":r||o?"alarm-sidecars-only":"absent"}var Kr,Z0,Dl=y(()=>{"use strict";Kr=require("node:fs");w();Z0=f("DbDetection")});async function uR(e){try{let n=await yl(e);if(n&&!n.startsWith("file:"))return{identity:n,remoteUrl:n}}catch(n){cR.debug("no canonical remote for %s (%s) \u2014 using path identity",e,k(n))}let t=(0,qf.createHash)("sha256").update(De(e)).digest("hex").slice(0,32);return{identity:`${dR}${t}`}}async function zt(e){return uR(await aa(e))}var qf,cR,dR,Wn=y(()=>{"use strict";qf=require("node:crypto");ya();ye();Ts();Je();ne();Ge();le();w();cR=f("RepoRegistry"),dR="local:"});var Vf={};mr(Vf,{hasCutoverRow:()=>gR,resetCutoverRouterCaches:()=>mR,resolveCutoverRoute:()=>Vr,routeMovesOffOrphanBranch:()=>hR});function mR(){Ll.clear()}async function fR(e){let t=Ll.get(e);if(t!==void 0)return t;let{identity:n}=await zt(e);return Ll.set(e,n),n}function hR(e){return e?.state==="cutover"||e?.state==="legacy-fenced"}async function Kf(e,t){if(!Xt())return{kind:"unavailable",reason:`Node ${process.versions.node} lacks flag-free node:sqlite`};let n=Ol(t);if(n==="alarm-sidecars-only")return{kind:"unavailable",reason:"database file missing but WAL/SHM remain \u2014 run jolli doctor --recover"};if(n==="absent")return{kind:"unavailable",reason:"database file does not exist"};try{let{DatabaseSync:r}=await import("node:sqlite"),o=new r(t,{readOnly:!0});try{let s=await fR(e),i=o.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(s);if(!i)return{kind:"no-row"};let a=o.prepare("SELECT value FROM repo_state WHERE repo_id = ? AND key = 'cutover'").get(i.id);return a?{kind:"row",record:JSON.parse(a.value)}:{kind:"no-row"}}finally{o.close()}}catch(r){return{kind:"unavailable",reason:k(r)}}}async function gR(e,t={}){return(await Kf(e,t.dbPath??qr())).kind==="row"}async function Vr(e,t={}){let n=await Ar(e).catch(()=>null),r=await Kf(e,t.dbPath??qr());return r.kind==="row"?{state:"cutover",record:r.record}:n!==null?r.kind==="no-row"?{state:"legacy-fenced"}:{state:"blocked",reason:r.reason}:r.kind==="unavailable"?(pR.warn("database unavailable for un-cutover repo (%s) \u2014 orphan remains authoritative",r.reason),{state:"uncutover",warning:r.reason}):{state:"uncutover"}}var pR,Ll,As=y(()=>{"use strict";Ge();w();Ot();Dl();Wn();pR=f("CutoverRouter"),Ll=new Map});var Cs,ht,xs=y(()=>{"use strict";w();ye();Ge();Cs=class extends Error{constructor(t){super(t),this.name="OrphanBranchFrozenError"}},ht=class{constructor(t){this.cwd=t;this.kind="orphan-branch"}async readFile(t){return oa(Oe,t,this.cwd)}async batchReadFiles(t){return sa(Oe,t,this.cwd)}async writeFiles(t,n){if(W())return;if(await Ar(this.cwd??process.cwd()).catch(()=>null)!==null)throw new Cs("orphan branch is frozen (cutover fence in place) \u2014 this process holds a pre-cutover storage object; restart it so writes route to the database");let{hasCutoverRow:o}=await Promise.resolve().then(()=>(As(),Vf));if(await o(this.cwd??process.cwd()).catch(()=>!1))throw new Cs("orphan branch is retired for this repository (cutover committed) \u2014 writes route to the database; re-run the operation from an up-to-date surface");await this.ensure(),await yu(Oe,t,n,this.cwd)}async listFiles(t){return[...await ia(Oe,t,this.cwd)]}async exists(){return na(Oe,this.cwd)}async ensure(){await ra(Oe,this.cwd)}}});function Yr(e){return e.version>=4}function yR(e){return[...e??[]].reverse()}function Jn(e){let t=yR(e.children).flatMap(Jn),n=(e.topics??[]).map(r=>({...r,commitDate:e.commitDate,generatedAt:e.generatedAt}));return[...t,...n]}function Yf(e){let t=e.stats,n=t?.filesChanged??0,r=t?.insertions??0,o=t?.deletions??0;for(let s of e.children??[]){let i=Yf(s);n+=i.filesChanged,r+=i.insertions,o+=i.deletions}return{filesChanged:n,insertions:r,deletions:o}}function Xr(e){return e.diffStats?e.diffStats:(e.children?.length??0)>0?Yf(e):e.stats??{filesChanged:0,insertions:0,deletions:0}}function Ml(e){let t=e.conversationTurns??0,n=(e.children??[]).reduce((r,o)=>r+Ml(o),0);return t+n}function $l(e){let t=e.conversationTokens??0,n=(e.children??[]).reduce((r,o)=>r+$l(o),0);return t+n}function Fl(e){let t=e.conversationTokenBreakdown,n={input:t?.input??0,output:t?.output??0,cached:t?.cached??0};return(e.children??[]).reduce((r,o)=>{let s=Fl(o);return{input:r.input+s.input,output:r.output+s.output,cached:r.cached+s.cached}},{input:n.input,output:n.output,cached:n.cached})}function jl(e){let t=e.topics?.length??0,n=(e.children??[]).reduce((r,o)=>r+jl(o),0);return t+n}function Is(e){let t=[],n=r=>{if(!r.children?.length)t.push(r);else for(let o of r.children)n(o)};for(let r of e.children??[])n(r);return t}function Ps(e){return Yr(e)?(e.topics??[]).map(t=>({...t,commitDate:e.commitDate,generatedAt:e.generatedAt})):Jn(e)}function zr(e){let t=[e.commitHash];for(let n of e.children??[])t.push(...zr(n));return t}function Dt(e,t){return e.transcripts!==void 0?e.transcripts:zr(e).filter(n=>t.has(n))}function wR(e){let t=Is(e);return t.length<=1?1:new Set(t.map(r=>new Date(r.generatedAt||r.commitDate).toISOString().substring(0,10))).size}function Xf(e){let t=wR(e),n=t===1?"1 day":`${t} days`,r=Is(e);if(r.length<=1)return n;let o=r.map(l=>new Date(l.generatedAt||l.commitDate).getTime()),s=new Date(Math.min(...o)),i=new Date(Math.max(...o)),a=l=>l.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});return`${n} (${a(s)} \u2014 ${a(i)})`}var Lt=y(()=>{"use strict"});var zf=y(()=>{"use strict";ye()});async function Qf(e,t,n,r){return Nn(e,async(o,s)=>{if(!r)return n(o,s);try{return await n(o,s)}catch(i){return r(o,i,s)}},t)}var Zf=y(()=>{"use strict";On()});function Qt(e,t,n){let r=new Map;for(let o of e??[])r.set(n(o),o);for(let o of t??[])r.set(n(o),o);return[...r.values()]}var eh,Zt,Ul=y(()=>{"use strict";eh=/-[0-9a-f]{8}$/;Zt={plan:e=>e.slug,note:e=>e.id,reference:e=>e.archivedKey}});function nh(e){return e.summaryError===ER}function rh(e){return e.summaryError!==void 0||e.llm?.stopReason==="error"}var th,ER,Hl=y(()=>{"use strict";th="llm-failed",ER="local-agent-auth"});function Qr(e){return Ns[e]?.label??"Local agent"}function ih(e){return Ns[e]?.loginHint??"Sign in to your local agent CLI."}function ah(e){let t=Ns[e]?.separateDesktopApp;return t===void 0?null:`(This login is SEPARATE from ${t} \u2014 ${t} stays signed in on its own.)`}var oh,sh,Ns,A$,Os=y(()=>{"use strict";oh="sonnet",sh="inherit",Ns={"claude-code":{label:"Claude Code",loginHint:"Run `claude` once and sign in to your subscription.",separateDesktopApp:"Claude Desktop",defaultModel:oh,models:[{id:"haiku",label:"Haiku \u2014 fastest"},{id:oh,label:"Sonnet \u2014 balanced (default)"},{id:"opus",label:"Opus \u2014 most capable"},{id:sh,label:"Use Claude Code's own setting"}]},codex:{label:"Codex",loginHint:"Run `codex login` to sign in with your ChatGPT plan.",separateDesktopApp:"the ChatGPT app",defaultModel:"gpt-5.6-terra",models:[{id:"gpt-5.6-luna",label:"GPT-5.6-Luna \u2014 fastest"},{id:"gpt-5.6-terra",label:"GPT-5.6-Terra \u2014 balanced (default)"},{id:"gpt-5.6-sol",label:"GPT-5.6-Sol \u2014 most capable"},{id:"gpt-5.5",label:"GPT-5.5 \u2014 previous generation"},{id:sh,label:"Use Codex's own setting"}]},"cursor-agent":{label:"Cursor",loginHint:"Run `cursor-agent login` to sign in to Cursor."},opencode:{label:"OpenCode",loginHint:"Run `opencode auth login` to connect a provider."},kimi:{label:"Kimi Code",loginHint:"Run `kimi login` to sign in to your Moonshot account."}};A$=[...new Set(Object.values(Ns).flatMap(e=>(e.models??[]).map(t=>t.id)))]});function bR(e){return SR.has(e)}function Bl(e){return bR(e.source)?`${e.nativeId} \u2014 ${e.title}`:e.title}var SR,Wl=y(()=>{"use strict";rs();SR=new Set(["linear","jira","github"])});var Jl=y(()=>{"use strict"});function H(e){return e.generatedAt||e.commitDate}function ch(e){try{return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch{return e}}function Gl(e){try{return new Date(e).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})}catch{return e}}function lh(e){return e.substring(0,10)}function _R(e){return[...e].sort((t,n)=>{let r=lh(t.generatedAt||t.commitDate||""),o=lh(n.generatedAt||n.commitDate||"");if(r!==o)return r>o?-1:1;let s=t.importance==="minor"?1:0,i=n.importance==="minor"?1:0;return s-i})}function dh(e){return String(e+1).padStart(2,"0")}function kR(e,t){return t==="local-agent"?e.localAgentTool?`Local agent - ${Qr(e.localAgentTool)}`:"Local agent":RR[t]}function uh(e){let t=new Set,n=o=>{let s=o.llm;s?.source&&t.add(kR(s,s.source));for(let i of o.children??[])n(i)};n(e);let r=[...t];if(r.length!==0)return r.length===1?r[0]:`mixed: ${r.join(", ")}`}function ql(e){let t=vR[e];return t!==void 0?t:e&&e.charAt(0).toUpperCase()+e.slice(1)}function ph(e){let t=Is(e),n=Ps(e);return{topics:_R(n.map((o,s)=>({...o,treeIndex:s}))),sourceNodes:t}}var RR,vR,Zr=y(()=>{"use strict";Os();Wl();Lt();Jl();RR={"anthropic-config":"Anthropic","anthropic-env":"Anthropic (env)","jolli-proxy":"Jolli proxy","local-agent":"Local agent"};vR={claude:"Claude Code",opencode:"OpenCode",codex:"Codex",cursor:"Cursor",kimi:"Kimi"}});function Ds(e){return AR.exec(e)?.[1]??null}var AR,Kl=y(()=>{"use strict";AR=/^transcripts\/(.+)\.json$/});var Ph={};mr(Ph,{AmbiguousHashError:()=>no,ORPHAN_WRITE_REQUIRED_TIMEOUT_MS:()=>Vl,collectChildE2eScenarios:()=>$s,collectChildJolliMeta:()=>Bs,collectChildNotes:()=>js,collectChildPlans:()=>Fs,collectChildReferences:()=>Us,collectChildSkills:()=>Hs,collectChildSkillsDocMeta:()=>Xl,copyHoistFields:()=>Yl,deleteNoteVisibleArtifact:()=>lk,deletePlanVisibleArtifact:()=>sk,deleteTranscript:()=>GR,expandSourcesForConsolidation:()=>$R,getActiveStorage:()=>xR,getCatalog:()=>ek,getCatalogWithLazyBuild:()=>tk,getIndex:()=>io,getIndexEntryMap:()=>YR,getSummary:()=>Ah,getSummaryCount:()=>Ch,getTranscriptHashes:()=>ec,indexNeedsMigration:()=>zR,listSummaries:()=>KR,listSummaryHashes:()=>VR,loadCatalog:()=>gt,mergeManyToOne:()=>FR,migrateIndexToV3:()=>QR,migrateOneToOne:()=>DR,normalizeToV4:()=>Ql,readNoteFromBranch:()=>ck,readPlanFromBranch:()=>ok,readPlanProgress:()=>ik,readReferenceFromBranch:()=>mk,readSkillFromBranch:()=>pk,readTranscript:()=>kh,readTranscriptsBatch:()=>BR,readTranscriptsForCommits:()=>HR,remountStrandedTree:()=>OR,removeFromIndex:()=>UR,resolveEffectiveRecap:()=>Zl,resolveEffectiveTopics:()=>Js,resolveReadStorage:()=>ro,resolveStorage:()=>F,saveTranscriptsBatch:()=>vh,scanTreeHashAliases:()=>XR,setActiveStorage:()=>CR,storeNotes:()=>ak,storePlans:()=>rk,storeReferences:()=>dk,storeSkills:()=>uk,storeSummary:()=>NR,stripFunctionalMetadata:()=>Gs,toCatalogEntry:()=>en,withDeferrableOrphanWriteLock:()=>Ms,withRequiredOrphanWriteLock:()=>Ee});function CR(e){eo=e}function xR(){return eo}async function mh(e){let t=await Ks(e);return t.ok?t.storage:(D.warn("system-of-record unavailable (%s) \u2014 falling back to the orphan branch. cwd=%s",t.reason,e),new ht(e))}async function F(e,t){return e||eo||(process.env.VITEST||D.warn("resolveStorage fell back to the system of record \u2014 caller did not thread storage or call setActiveStorage. The Memory Bank side will miss this write. cwd=%s",t??"(undef)"),mh(t))}async function ro(e,t){return e??eo??await mh(t)}async function Ee(e,t,n){if(Cn(e))return await n();if(!await _r(e,{timeoutMs:Vl}))throw new Yo(t,Vl);try{return await xn(e,n)}finally{await Rr(e)}}async function Ms(e,t,n){if(Cn(e))return await n();if(!await _r(e,{timeoutMs:fh}))return await t();try{return await xn(e,n)}finally{await Rr(e)}}function to(e){return e.parentCommitHash==null}function IR(e,t){if(!e&&!t)return null;if(!t)return e;if(!e)return t;let n=new Map;for(let o of t.entries)n.set(o.commitHash,o);for(let o of e.entries)n.set(o.commitHash,o);let r={...t.commitAliases??{},...e.commitAliases??{}};return{version:e.version,entries:[...n.values()],...Object.keys(r).length>0&&{commitAliases:r}}}function PR(e,t){if(!e&&!t)return null;if(!t)return e;if(!e)return t;let n=new Map;for(let r of t.entries)n.set(r.commitHash,r);for(let r of e.entries)n.set(r.commitHash,r);return{version:e.version,entries:[...n.values()]}}async function NR(e,t,n=!1,r,o,s){W()||await Ee(t,"storeSummary",()=>hh(e,t,n,r,o,s))}async function hh(e,t,n=!1,r,o,s){let i=await Y(t,o),a=await gt(t,o),l=s!==void 0&&s!==o,c=l?await Y(t,s):null,u=l?await gt(t,s):null,d=l?IR(i,c):i,p=l?PR(a,u):a,m=d?.entries?[...d.entries]:[],h=new Map(m.map(I=>[I.commitHash,I])),g=new Set;if(l&&c){let I=new Set(i?.entries.map($=>$.commitHash)??[]);for(let $ of c.entries)I.has($.commitHash)||g.add($.commitHash)}if(!n&&h.has(e.commitHash)){D.info("Summary for commit %s already exists \u2014 skipping (use force to overwrite)",e.commitHash.substring(0,8));return}let S=await so(e,null,t,h);for(let I of S)h.set(I.commitHash,I);let E={version:3,entries:[...h.values()],commitAliases:d?.commitAliases},_=n?"Overwrite":"Add",R=[{path:`summaries/${e.commitHash}.json`,content:JSON.stringify(e,null,"	")},{path:tn,content:JSON.stringify(E,null,"	")},tc(p,h,e)];if(r?.transcript&&r.transcript.data.sessions.length>0&&R.push({path:`transcripts/${r.transcript.id}.json`,content:JSON.stringify(r.transcript.data,null,"	")}),r?.planProgress)for(let I of r.planProgress)R.push({path:`plan-progress/${I.planSlug}.json`,content:JSON.stringify(I,null,"	")});if(g.size>0&&s)for(let I of g){if(I===e.commitHash)continue;let $=`summaries/${I}.json`,he=`transcripts/${I}.json`,Ie=await s.readFile($);Ie!==null&&R.push({path:$,content:Ie});let Pe=await s.readFile(he);Pe!==null&&R.push({path:he,content:Pe})}await(await F(o,t)).writeFiles(R,`${_} summary for ${e.commitHash.substring(0,8)}: ${e.commitMessage.substring(0,50)}`),D.info("Summary stored successfully for commit %s",e.commitHash.substring(0,8))}function Yl(e){return{...e.skills&&{skills:e.skills},...e.jolliSkillsDocId&&{jolliSkillsDocId:e.jolliSkillsDocId},...e.jolliSkillsDocUrl&&{jolliSkillsDocUrl:e.jolliSkillsDocUrl},...e.transcripts&&{transcripts:e.transcripts},...e.plans&&{plans:e.plans},...e.notes&&{notes:e.notes},...e.references&&{references:e.references}}}async function OR(e,t,n,r){if((e.children??[]).length>0)throw new Error(`target ${e.commitHash.substring(0,8)} already has children \u2014 refusing to clobber`);if(W())return;let o=Qt(t.plans,e.plans,Zt.plan),s=Qt(t.notes,e.notes,Zt.note),i=Qt(t.references,e.references,Zt.reference),a=[...new Set([...e.transcripts??[],...t.transcripts??[]])],l=ss([...t.skills??[],...e.skills??[]]),c=l.flatMap(h=>h.supersededDocIds??[]),u=Xl([e,t]),d=[...new Set([...e.orphanedDocIds??[],...u.orphanedDocIds,...c,...zl([t])])],p=[...new Set([...e.unresolvedOrphanHashes??[],...Ws([t])])],m={...e,...Yl(t),...a.length>0&&{transcripts:a},...o.length>0&&{plans:o},...s.length>0&&{notes:s},...i.length>0&&{references:i},...l.length>0&&{skills:l.map(os)},...u.winner&&{jolliSkillsDocId:u.winner.jolliSkillsDocId,jolliSkillsDocUrl:u.winner.jolliSkillsDocUrl},...d.length>0&&{orphanedDocIds:d},...p.length>0&&{unresolvedOrphanHashes:p},children:[t]};await Ee(n,"remountStrandedTree",()=>hh(m,n,!0,void 0,r))}async function DR(e,t,n,r,o){await Ee(n,"migrateOneToOne",()=>LR(e,t,n,r,o))}async function LR(e,t,n,r,o){D.info("Migrating summary 1:1: %s \u2192 %s",e.commitHash.substring(0,8),t.hash.substring(0,8));let s=Gs(e),i=e.jolliDocUrl,a=await Ko(`${t.hash}^`,t.hash,n).catch(()=>({filesChanged:0,insertions:0,deletions:0})),l=Js(e),c=Zl(e),u=await ec(n,o),d=Dt(e,u),p={version:Ra,commitHash:t.hash,commitMessage:t.message,commitAuthor:t.author,commitDate:t.date,branch:e.branch,generatedAt:new Date().toISOString(),commitType:r?.commitType??"rebase",...r?.commitSource&&{commitSource:r.commitSource},...e.ticketId&&{ticketId:e.ticketId},...e.jolliDocId&&{jolliDocId:e.jolliDocId},...i&&{jolliDocUrl:i},...e.orphanedDocIds&&{orphanedDocIds:e.orphanedDocIds},...e.unresolvedOrphanHashes&&{unresolvedOrphanHashes:e.unresolvedOrphanHashes},...Yl(e),...e.e2eTestGuide&&{e2eTestGuide:e.e2eTestGuide},...rh(e)&&{summaryError:th},topics:l,...c!==void 0?{recap:c}:{},transcripts:d,diffStats:a,children:[s]},m=await Y(n,o),h=await gt(n,o),g=m?.entries?[...m.entries]:[],S=new Map(g.map(I=>[I.commitHash,I]));if(S.has(t.hash)){D.info("New hash %s already in index, skipping migration",t.hash.substring(0,8));return}let E=await so(p,null,n,S);for(let I of E)S.set(I.commitHash,I);let _={version:3,entries:[...S.values()],commitAliases:m?.commitAliases},R=[{path:`summaries/${p.commitHash}.json`,content:JSON.stringify(p,null,"	")},{path:tn,content:JSON.stringify(_,null,"	")},tc(h,S,p)];await(await F(o,n)).writeFiles(R,`Migrate summary ${e.commitHash.substring(0,8)} \u2192 ${t.hash.substring(0,8)}`),D.info("Summary migrated: %s \u2192 %s",e.commitHash.substring(0,8),t.hash.substring(0,8))}function $s(e){let t=[];for(let n of e)n.e2eTestGuide&&t.push(...n.e2eTestGuide),n.children&&t.push(...$s(n.children));return t}function gh(e){let{e2eTestGuide:t,...n}=e;return n.children?{...n,children:n.children.map(gh)}:n}function Fs(e){let t=new Map;for(let n of e){if(n.plans)for(let r of n.plans){let o=r.slug,s=t.get(o);(!s||r.updatedAt>s.updatedAt)&&t.set(o,r)}if(n.children)for(let r of Fs(n.children)){let o=t.get(r.slug);(!o||r.updatedAt>o.updatedAt)&&t.set(r.slug,r)}}return[...t.values()]}function yh(e){let{plans:t,...n}=e;return n.children?{...n,children:n.children.map(yh)}:n}function js(e){let t=new Map;for(let n of e){if(n.notes)for(let r of n.notes){let o=t.get(r.id);(!o||r.updatedAt>o.updatedAt)&&t.set(r.id,r)}if(n.children)for(let r of js(n.children)){let o=t.get(r.id);(!o||r.updatedAt>o.updatedAt)&&t.set(r.id,r)}}return[...t.values()]}function wh(e){let{notes:t,...n}=e;return n.children?{...n,children:n.children.map(wh)}:n}function Eh(e){let{references:t,...n}=e;return n.children?{...n,children:n.children.map(Eh)}:n}function Us(e){let t=new Map;for(let n of e){let r=n.references??[];for(let o of r){let s=t.get(o.archivedKey);(!s||o.referencedAt>s.referencedAt)&&t.set(o.archivedKey,o)}if(n.children)for(let o of Us(n.children)){let s=t.get(o.archivedKey);(!s||o.referencedAt>s.referencedAt)&&t.set(o.archivedKey,o)}}return[...t.values()]}function Hs(e){let t=[];for(let n of e)t.push(...n.skills??[]),n.children&&t.push(...Hs(n.children));return ss(t)}function Sh(e){let{jolliDocId:t,jolliDocUrl:n,jolliSkillsDocId:r,jolliSkillsDocUrl:o,orphanedDocIds:s,unresolvedOrphanHashes:i,...a}=e;return a.children?{...a,children:a.children.map(Sh)}:a}function Bs(e){let t=[];for(let o of e){let s=o.jolliDocUrl;if(o.jolliDocId&&s&&t.push({jolliDocId:o.jolliDocId,jolliDocUrl:s,commitDate:o.commitDate,generatedAt:o.generatedAt}),o.children){let i=Bs(o.children);i.winner&&t.push({...i.winner})}}if(t.length===0)return{winner:null,orphanedDocIds:[]};t.sort((o,s)=>new Date(H(s)).getTime()-new Date(H(o)).getTime());let n=t[0],r=t.slice(1).map(o=>o.jolliDocId);return{winner:n,orphanedDocIds:r}}function Xl(e){let{winner:t,orphanedDocIds:n}=bh(e);return{winner:t&&{jolliSkillsDocId:t.jolliSkillsDocId,jolliSkillsDocUrl:t.jolliSkillsDocUrl},orphanedDocIds:n}}function bh(e){let t=[];for(let o of e){let s=o.jolliSkillsDocUrl;if(o.jolliSkillsDocId&&s&&t.push({jolliSkillsDocId:o.jolliSkillsDocId,jolliSkillsDocUrl:s,commitDate:o.commitDate,generatedAt:o.generatedAt}),o.children){let i=bh(o.children);i.winner&&t.push(i.winner)}}if(t.length===0)return{winner:null,orphanedDocIds:[]};t.sort((o,s)=>new Date(H(s)).getTime()-new Date(H(o)).getTime());let[n,...r]=t;return{winner:n,orphanedDocIds:r.map(o=>o.jolliSkillsDocId)}}function zl(e){let t=[];for(let n of e??[])n.orphanedDocIds&&t.push(...n.orphanedDocIds),t.push(...zl(n.children));return t}function Ws(e){let t=[];for(let n of e??[])n.unresolvedOrphanHashes&&t.push(...n.unresolvedOrphanHashes),t.push(...Ws(n.children));return t}function Ql(e){if(e.version>=4)return e;let t=$s([e]),n=Fs([e]),r=js([e]),o=Us([e]),s=Hs([e]),i=s.map(os),a=Bs([e]),l=Array.from(new Set([...a.orphanedDocIds,...e.orphanedDocIds??[],...zl(e.children),...s.flatMap(g=>g.supersededDocIds??[])])),c=Array.from(new Set([...e.unresolvedOrphanHashes??[],...Ws(e.children)])),u=Js(e),d=Zl(e),p=e.diffStats===void 0&&e.stats!==void 0?Xr(e):void 0,{stats:m,...h}=e;return{...h,version:4,topics:u,...d!==void 0?{recap:d}:{},...p!==void 0?{diffStats:p}:{},...t.length>0?{e2eTestGuide:t}:{},...n.length>0?{plans:n}:{},...r.length>0?{notes:r}:{},...o.length>0?{references:o}:{},...i.length>0?{skills:i}:{},...a.winner?{jolliDocId:a.winner.jolliDocId,jolliDocUrl:a.winner.jolliDocUrl}:{},...l.length>0?{orphanedDocIds:l}:{},...c.length>0?{unresolvedOrphanHashes:c}:{},...e.children!==void 0?{children:e.children.map(Gs)}:{}}}function Th(e){let{topics:t,...n}=e;return n.children?{...n,children:n.children.map(Th)}:n}function _h(e){let{recap:t,...n}=e;return n.children?{...n,children:n.children.map(_h)}:n}function Js(e){return Yr(e)?e.topics??[]:Jn(e).map(({commitDate:t,generatedAt:n,treeIndex:r,...o})=>o)}function Zl(e){return Yr(e)||e.recap?e.recap:MR(e.children)}function MR(e){if(!e||e.length===0)return;let t=[];if(Rh(e,t),t.length!==0)return t.sort((n,r)=>new Date(r.date).getTime()-new Date(n.date).getTime()),t[0]?.recap}function Rh(e,t){for(let n of e)n.recap&&t.push({recap:n.recap,date:H(n)}),n.children&&Rh(n.children,t)}function $R(e){if(Yr(e))return[{commitHash:e.commitHash,commitMessage:e.commitMessage,commitDate:e.commitDate,...e.ticketId&&{ticketId:e.ticketId},topics:e.topics??[],...e.recap&&{recap:e.recap}}];let t=(e.children??[]).map(r=>({commitHash:r.commitHash,commitMessage:r.commitMessage,commitDate:r.commitDate,...r.ticketId&&{ticketId:r.ticketId},topics:Js(r),...r.recap&&{recap:r.recap}}));return((e.topics?.length??0)>0||e.recap)&&t.push({commitHash:e.commitHash,commitMessage:e.commitMessage,commitDate:e.commitDate,...e.ticketId&&{ticketId:e.ticketId},topics:e.topics??[],...e.recap&&{recap:e.recap}}),t}function Gs(e){return Sh(Eh(wh(yh(gh(Th(_h(e)))))))}async function FR(e,t,n,r){return Ee(n,"mergeManyToOne",()=>jR(e,t,n,r))}async function jR(e,t,n,r){let{metadata:o,consolidated:s,storage:i,extraRefs:a,extraSkills:l}=r??{};D.info("Merging %d summaries into %s",e.length,t.hash.substring(0,8));let c=[...e].sort((B,A)=>new Date(H(A)).getTime()-new Date(H(B)).getTime()),u=$s(c),d=Qt(Fs(c),a?.plans,Zt.plan),p=Qt(js(c),a?.notes,Zt.note),m=Qt(Us(c),a?.references,Zt.reference),h=ss([...Hs(c),...l??[]]),g=h.map(os),S=Bs(c),E=Xl(c),_=c.flatMap(B=>B.orphanedDocIds??[]),R=h.flatMap(B=>B.supersededDocIds??[]),P=[...S.orphanedDocIds,...E.orphanedDocIds,..._,...R],I=Array.from(new Set([...c.filter(B=>!B.jolliDocId).map(B=>B.commitHash),...Ws(c)])),$=c.map(Gs),he=await Ko(`${t.hash}^`,t.hash,n).catch(()=>({filesChanged:0,insertions:0,deletions:0})),Ie=s?.topics??[],Pe=s?.recap,_t=s?.ticketId,Ht=s?.llm,Rt=s?.summaryError,Yd=await ec(n,i),hn=Array.from(new Set(c.flatMap(B=>Dt(B,Yd)))),ot={version:Ra,commitHash:t.hash,commitMessage:t.message,commitAuthor:t.author,commitDate:t.date,branch:e[0].branch,generatedAt:new Date().toISOString(),...o?.commitType&&{commitType:o.commitType},...o?.commitSource&&{commitSource:o.commitSource},..._t&&{ticketId:_t},...Ht&&{llm:Ht},...Rt&&{summaryError:Rt},...u.length>0&&{e2eTestGuide:u},...d.length>0&&{plans:d},...p.length>0&&{notes:p},...m.length>0&&{references:m},...g.length>0&&{skills:g},...S.winner&&{jolliDocId:S.winner.jolliDocId,jolliDocUrl:S.winner.jolliDocUrl},...E.winner&&E.winner,...P.length>0&&{orphanedDocIds:P},...I.length>0&&{unresolvedOrphanHashes:I},topics:Ie,...Pe&&{recap:Pe},transcripts:hn,diffStats:he,children:$},kt=await Y(n,i),gn=await gt(n,i),yn=kt?.entries?[...kt.entries]:[],st=new Map(yn.map(B=>[B.commitHash,B]));if(st.has(t.hash))return D.info("New hash %s already in index, skipping merge",t.hash.substring(0,8)),{orphanedDocIds:[]};let Xd=await so(ot,null,n,st);for(let B of Xd)st.set(B.commitHash,B);let Yi={version:3,entries:[...st.values()],commitAliases:kt?.commitAliases},pr=e.map(B=>B.commitHash.substring(0,8)).join(", "),jo=[{path:`summaries/${ot.commitHash}.json`,content:JSON.stringify(ot,null,"	")},{path:tn,content:JSON.stringify(Yi,null,"	")},tc(gn,st,ot)];return await(await F(i,n)).writeFiles(jo,`Merge summaries [${pr}] \u2192 ${t.hash.substring(0,8)}`),D.info("Summaries merged: [%s] \u2192 %s (%d children, %d orphaned docs, %d unresolved orphan hashes)",pr,t.hash.substring(0,8),c.length,P.length,I.length),{orphanedDocIds:P}}async function UR(e,t,n){await Ms(t,()=>{D.warn("removeFromIndex: could not acquire orphan-write lock within %dms \u2014 skipping removal of %s",fh,e.substring(0,8))},async()=>{let r=await Y(t,n);if(!r)return;let o=r.entries.filter(u=>u.commitHash!==e);if(o.length===r.entries.length)return;let s={version:r.version,entries:o,commitAliases:r.commitAliases},i=[{path:tn,content:JSON.stringify(s,null,"	")}],a=await gt(t,n),l=nk(a,e);l&&i.push(l),await(await F(n,t)).writeFiles(i,`Remove index entry for ${e.substring(0,8)}`),D.info("Removed %s from index",e.substring(0,8))})}async function kh(e,t,n){let o=await(await F(n,t)).readFile(`transcripts/${e}.json`);if(!o)return null;try{return JSON.parse(o)}catch{return D.warn("Failed to parse transcript for %s",e.substring(0,8)),null}}async function HR(e,t,n){let r=new Map;for(let o of e){let s=await kh(o,t,n);s&&r.set(o,s)}return r}async function BR(e,t,n){let r=new Map;if(e.length===0)return r;let o=await ro(n,t),s=l=>`transcripts/${l}.json`,i=e.map(s),a=o.batchReadFiles?await o.batchReadFiles(i):await JR(o,i);for(let l of e){let c=a.get(s(l));if(!c){r.set(l,null);continue}try{r.set(l,JSON.parse(c))}catch{D.warn("Failed to parse transcript for %s",l.substring(0,8)),r.set(l,null)}}return r}async function JR(e,t){let n=await Qf(t,WR,o=>e.readFile(o),(o,s)=>(D.warn("readFile failed for %s: %s",o,k(s)),null)),r=new Map;for(let o=0;o<t.length;o++)r.set(t[o],n[o]??null);return r}async function vh(e,t,n,r){let o=[];for(let{hash:i,data:a}of e)o.push({path:`transcripts/${i}.json`,content:JSON.stringify(a,null,"	")});for(let i of t)o.push({path:`transcripts/${i}.json`,content:"",delete:!0});if(o.length===0||W())return;let s=[e.length>0?`${e.length} written`:"",t.length>0?`${t.length} deleted`:""].filter(Boolean).join(", ");await Ee(n,"saveTranscriptsBatch",async()=>{await(await F(r,n)).writeFiles(o,`Update transcripts: ${s}`),D.info("Transcript batch: %s",s)})}async function GR(e,t,n){await vh([],[e],t,n)}async function ec(e,t){let r=await(await F(t,e)).listFiles("transcripts/"),o=new Set;for(let s of r){let i=Ds(s);i&&o.add(i)}return o}function qR(e,t){return t.filter(n=>n.commitHash.startsWith(e))}async function Ah(e,t,n){if(e.length===0)return null;let r=e.toLowerCase(),o=await Ye(r,t,n);if(o)return o;let s=Nh(await ro(n,t));if(s){if(r.length===Ls){let c=await s.lookupAlias(r);if(c)return Ye(c,t,n)}else{let c=await s.findHashesByPrefix(r);if(c.length===1)return Ye(c[0],t,n);if(c.length>=2)throw new no(r,c)}let l=await Er(r,t);if(l){let c=await s.findShallowestByTreeHash(l);if(c)return Ye(c,t,n)}return null}let i=await Y(t,n);if(!i)return null;if(r.length===Ls){let l=i.commitAliases?.[r];if(l)return Ye(l,t,n)}else{let l=qR(r,i.entries);if(l.length===1)return Ye(l[0].commitHash,t,n);if(l.length>=2)throw new no(r,l.map(c=>c.commitHash))}if(i.version===3){let l=await Er(r,t);if(l){let c=new Map(i.entries.map(d=>[d.commitHash,d])),u=xh(l,i.entries,c);if(u)return Ye(u.commitHash,t,n)}}return null}async function KR(e=10,t,n){let r=await Y(t,n);if(!r||r.entries.length===0)return[];let i=[...r.entries.filter(to)].sort((l,c)=>new Date(H(c)).getTime()-new Date(H(l)).getTime()).slice(0,e),a=[];for(let l of i){let c=await Ah(l.commitHash,t,n);c&&a.push(c)}return a}async function VR(e){let t=await Y(e);if(!t||t.entries.length===0)return new Set;let n=new Set(t.entries.map(r=>r.commitHash));if(t.commitAliases)for(let r of Object.keys(t.commitAliases))n.add(r);return n}async function YR(e,t){let n=await Y(e,t);if(!n)return new Map;let r=new Map(n.entries.map(o=>[o.commitHash,o]));if(n.commitAliases)for(let[o,s]of Object.entries(n.commitAliases)){let i=r.get(s);i&&!r.has(o)&&r.set(o,i)}return r}async function XR(e,t,n,r){if(W())return!1;let o=r??n,s=await Y(t,o);if(!s||s.version!==3)return!1;let i=s.commitAliases??{},a=new Set(s.entries.map(u=>u.commitHash)),l=new Map(s.entries.map(u=>[u.commitHash,u])),c={};for(let u of e){if(a.has(u)||i[u])continue;let d=await Er(u,t);if(!d)continue;let p=xh(d,s.entries,l);p&&(c[u]=p.commitHash,D.info("Tree hash match: %s \u2192 %s (treeHash: %s)",u.substring(0,8),p.commitHash.substring(0,8),d.substring(0,8)))}return Object.keys(c).length===0?!1:await Ms(t,()=>(D.debug("scanTreeHashAliases: orphan-write lock contention \u2014 alias write deferred"),!1),async()=>{let u=await Y(t,n);if(!u||u.version!==3)return!1;if(o!==n){let _=await Y(t,o);if(_&&_.version===3){let R=new Set(u.entries.map(I=>I.commitHash)),P=_.entries.reduce((I,$)=>R.has($.commitHash)?I:I+1,0);if(P>0)return D.warn("scanTreeHashAliases: read side has %d row(s) write side lacks \u2014 deferring alias write to avoid shadow clobber",P),!1}}let d=u.commitAliases??{},p=new Set(u.entries.map(_=>_.commitHash)),m={...d},h=0;for(let[_,R]of Object.entries(c))p.has(_)||m[_]||(m[_]=R,h++);if(h===0)return!1;let g={...u,commitAliases:m},S=[{path:tn,content:JSON.stringify(g,null,"	")}];return await(await F(n,t)).writeFiles(S,`Add ${h} tree hash alias(es)`),!0})}async function Ch(e,t){let n=await Y(e,t);return n?n.entries.filter(to).length:0}async function zR(e,t){let n=await Y(e,t);return!n||n.entries.length===0?!1:n.version!==3}async function QR(e,t){return Ee(e,"migrateIndexToV3",()=>ZR(e,t))}async function ZR(e,t){let n=await Y(e,t);if(!n)return D.info("No index found \u2014 nothing to migrate"),{migrated:0,skipped:0};if(n.version===3)return D.info("Index already at v3 \u2014 skipping migration"),{migrated:0,skipped:0};let r=0,o=0,s=new Map,i=[];for(let d of n.entries){let p=await Ye(d.commitHash,e,t);if(!p){D.warn("Could not load summary for %s \u2014 skipping",d.commitHash.substring(0,8)),o++;continue}try{let m=await so(p,null,e);for(let h of m)s.set(h.commitHash,h);i.push(en(p)),r++}catch(m){D.warn("Failed to flatten summary for %s: %s",d.commitHash.substring(0,8),m.message),o++}}let a={version:3,entries:[...s.values()]},l={version:1,entries:i},c=[{path:tn,content:JSON.stringify(a,null,"	")},{path:oo,content:JSON.stringify(l,null,"	")}];return await(await F(t,e)).writeFiles(c,`Migrate index v1 \u2192 v3 (${r} entries)`),D.info("Index migrated to v3: %d migrated, %d skipped",r,o),{migrated:r,skipped:o}}async function so(e,t,n,r){let o=await Er(e.commitHash,n)??void 0,s=t===null,i;if(s){let c=e.diffStats,u=r?.get(e.commitHash)?.diffStats,d;c?d=c:u?d=u:d=await Ko(`${e.commitHash}^`,e.commitHash,n),i={topicCount:jl(e),diffStats:d}}let l=[{commitHash:e.commitHash,parentCommitHash:t,treeHash:o,commitType:e.commitType,commitMessage:e.commitMessage,commitDate:e.commitDate,branch:e.branch,generatedAt:e.generatedAt,...i&&{topicCount:i.topicCount,diffStats:i.diffStats}}];for(let c of e.children??[]){let u=await so(c,e.commitHash,n,r);l.push(...u)}return l}async function Ye(e,t,n){let o=await(await ro(n,t)).readFile(`summaries/${e}.json`);if(!o)return null;try{return JSON.parse(o)}catch(s){return D.error("Failed to parse summary for %s: %s",e.substring(0,8),s.message),null}}function xh(e,t,n){let r=t.filter(s=>s.treeHash===e);if(r.length===0)return null;if(r.length===1)return r[0];let o=r.map(s=>{let i=0,a=new Set,l=s;for(;l?.parentCommitHash!=null&&!a.has(l.commitHash);)a.add(l.commitHash),i++,l=n.get(l.parentCommitHash);return{entry:s,depth:i}});return o.sort((s,i)=>s.depth!==i.depth?s.depth-i.depth:new Date(H(i.entry)).getTime()-new Date(H(s.entry)).getTime()),o[0].entry}async function io(e,t){return Y(e,t)}async function Y(e,t){let n=await ro(t,e),r=await n.readFile(tn);if(!r)return D.debug("loadIndex: no index.json in %s storage",n.kind??"unknown"),null;try{return JSON.parse(r)}catch(o){return D.error("Failed to parse index.json: %s",o.message),null}}function en(e){let t=Ps(e).map(n=>({title:n.title,...n.decisions!==void 0&&{decisions:n.decisions},...n.category!==void 0&&{category:n.category},...n.importance!==void 0&&{importance:n.importance},...n.filesAffected&&n.filesAffected.length>0&&{filesAffected:n.filesAffected}}));return{commitHash:e.commitHash,...e.recap!==void 0&&{recap:e.recap},...e.ticketId!==void 0&&{ticketId:e.ticketId},...t.length>0&&{topics:t}}}async function gt(e,t){let r=await(await F(t,e)).readFile(oo);if(!r)return null;try{return JSON.parse(r)}catch(o){return D.error("Failed to parse catalog.json: %s",o.message),null}}async function ek(e,t){return gt(e,t)}async function tk(e,t){let n=await F(t,e),r=await gt(e,n)??{version:1,entries:[]},o=await Y(e,n);if(!o||o.entries.length===0)return r;let s=new Set(o.entries.filter(to).map(c=>c.commitHash)),i=new Set(r.entries.map(c=>c.commitHash)),a=r.entries.filter(c=>s.has(c.commitHash)).length,l=[];for(let c of s)i.has(c)||l.push(c);return a===r.entries.length&&l.length===0?r:await Ms(e,async()=>{D.debug("getCatalogWithLazyBuild: orphan-write lock contention \u2014 returning in-memory catalog without writeback");let c=r.entries.filter(d=>s.has(d.commitHash)),u=[];for(let d of l){let p=await Ye(d,e,n);p&&u.push(en(p))}return{version:1,entries:[...c,...u]}},async()=>{let c=await gt(e,n)??{version:1,entries:[]},u=await Y(e,n);if(!u||u.entries.length===0)return c;let d=new Set(u.entries.filter(to).map(R=>R.commitHash)),p=c.entries.filter(R=>d.has(R.commitHash)),m=new Set(p.map(R=>R.commitHash)),h=[];for(let R of d)m.has(R)||h.push(R);if(p.length===c.entries.length&&h.length===0)return c;let g=[];for(let R of h){let P=await Ye(R,e,n);P?g.push(en(P)):D.warn("Catalog lazy build: summary file missing for root %s",R.substring(0,8))}let S={version:1,entries:[...p,...g]},E=c.entries.length-p.length,_=`catalog: reconcile (+${g.length}, -${E})`;return await n.writeFiles([{path:oo,content:JSON.stringify(S,null,"	")}],_),S})}function tc(e,t,n){let r=new Set([...t.values()].filter(to).map(a=>a.commitHash)),i={version:1,entries:[...(e?.entries??[]).filter(a=>r.has(a.commitHash)&&a.commitHash!==n.commitHash),en(n)]};return{path:oo,content:JSON.stringify(i,null,"	")}}function nk(e,t){if(!e)return null;let n=e.entries.filter(o=>o.commitHash!==t);return n.length===e.entries.length?null:{path:oo,content:JSON.stringify({version:1,entries:n},null,"	")}}async function rk(e,t,n,r,o){if(e.length===0||W())return;let s=e.map(i=>({path:`plans/${i.slug}.md`,content:i.content,branch:r}));await Ee(n,"storePlans",async()=>{await(await F(o,n)).writeFiles(s,t),D.info("Stored %d plan file(s)",e.length)})}async function ok(e,t,n){try{return await(await F(n,t)).readFile(`plans/${e}.md`)}catch{return null}}async function sk(e,t,n,r){let o=await F(r,n);o.deletePlanVisible&&await o.deletePlanVisible(e,t)}async function ik(e,t,n){try{let o=await(await F(n,t)).readFile(`plan-progress/${e}.json`);return o?JSON.parse(o):null}catch{return null}}async function ak(e,t,n,r,o){if(e.length===0||W())return;let s=e.map(i=>({path:`notes/${i.id}.md`,content:i.content,branch:r}));await Ee(n,"storeNotes",async()=>{await(await F(o,n)).writeFiles(s,t),D.info("Stored %d note file(s)",e.length)})}async function lk(e,t,n,r){let o=await F(r,n);o.deleteNoteVisible&&await o.deleteNoteVisible(e,t)}async function ck(e,t,n){try{return await(await F(n,t)).readFile(`notes/${e}.md`)}catch{return null}}function Ih(e,t){if(!Op(e))throw new Error(`orphanPathFor: refusing unknown reference source ${JSON.stringify(e)}`);let n=`${e}:`,r=t.startsWith(n)?t.slice(n.length):t,o=Np(e,r);return`references/${e}/${o}.md`}async function dk(e,t,n,r,o){if(e.length===0||W())return;let s=e.map(i=>({path:Ih(i.source,i.archivedKey),content:i.content,branch:r}));await Ee(n,"storeReferences",async()=>{await(await F(o,n)).writeFiles(s,t),D.info("Stored %d reference file(s) across sources",e.length)})}async function uk(e,t,n,r,o){if(e.length===0||W())return;let s=e.map(i=>({path:i.path,content:i.content,branch:r}));await Ee(n,"storeSkills",async()=>{await(await F(o,n)).writeFiles(s,t),D.info("Stored %d skill file(s)",e.length)})}async function pk(e,t,n){try{return await(await F(n,t)).readFile(e)}catch{return null}}async function mk(e,t,n,r){let o=await F(r,n);try{return await o.readFile(Ih(e,t))}catch{return null}}var eo,D,tn,oo,Vl,fh,WR,Ls,no,Xe=y(()=>{"use strict";w();es();Zf();ye();Je();xs();Vo();Ul();Ir();Vs();qs();Hl();Zr();Lt();Ma();Kl();D=f("SummaryStore"),tn="index.json",oo="catalog.json",Vl=3e4,fh=1e3;WR=8;Ls=40,no=class extends Error{constructor(t,n){if(n.length<2)throw new Error(`AmbiguousHashError requires \u22652 matches (got ${n.length}); use null/undefined for "not found"`);if(t.length===0||t.length>=Ls)throw new Error(`AmbiguousHashError prefix must be 1..${Ls-1} chars (got length ${t.length})`);super(`abbreviation \`${t}\` is ambiguous; please use a longer prefix (matched ${n.length} commits)`),this.name="AmbiguousHashError",this.prefix=t,this.matches=n}static is(t){return t instanceof Error&&t.name==="AmbiguousHashError"&&typeof t.prefix=="string"&&Array.isArray(t.matches)}}});var rF,Oh=y(()=>{"use strict";w();Xe();rF=f("ProcessedSourceStore")});var aF,Dh=y(()=>{"use strict";w();Xe();aF=f("TopicIndexStore")});function Lh(e){if(!e.startsWith("topics/")||!e.endsWith(".json"))return!1;let t=e.slice(7,-5);return t.length>0&&!t.includes("/")&&!fk.has(t)}var fk,Mh,cF,dF,nc=y(()=>{"use strict";fk=new Set(["index","processed"]);Mh=[["summaries/",e=>e.endsWith(".json")],["transcripts/",e=>e.endsWith(".json")],["plans/",e=>e.endsWith(".md")],["notes/",e=>e.endsWith(".md")],["references/",e=>e.endsWith(".md")],["skills/",e=>e.endsWith(".md")],["plan-progress/",e=>e.endsWith(".json")],["topics/",Lh]],cF=Mh.map(([e])=>e),dF=Object.fromEntries(Mh)});var hF,$h=y(()=>{"use strict";nc();w();Xe();hF=f("TopicPageStore")});var TF,_F,Fh=y(()=>{"use strict";ca();w();Ot();Dl();Wn();TF=f("ImportState"),_F=10*6e4});var vF,rc=y(()=>{"use strict";w();vF=f("DashboardScope")});function hk(e){let t=jh.get(e);return t||(t=new Intl.DateTimeFormat("en-CA",{timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}),jh.set(e,t)),t}function gk(e,t){let n=hk(t).formatToParts(e),r=o=>Number.parseInt(n.find(s=>s.type===o)?.value??"0",10);return{year:r("year"),month:r("month"),day:r("day"),hour:r("hour"),minute:r("minute")}}function Uh(e,t){let n=gk(e,t);return`${n.year}-${String(n.month).padStart(2,"0")}-${String(n.day).padStart(2,"0")}`}var jh,Hh=y(()=>{"use strict";jh=new Map});var Bh,IF,PF,oc,sc,NF,ao,Ys=y(()=>{"use strict";rc();Bh=`EXISTS (SELECT 1 FROM session_usage_events e0
	                                   WHERE e0.session_event_id = s.event_id)
	                         AND (SELECT COALESCE(SUM(e2.input_tokens + e2.output_tokens + e2.cached_tokens), 0)
	                                FROM session_usage_events e2
	                               WHERE e2.session_event_id = s.event_id)
	                             >= s.input_tokens + s.output_tokens + s.cached_tokens`,IF=`(${Bh})`,PF=`NOT (${Bh})`,oc=`LEFT JOIN commits cm ON cm.repo_id = m.repo_id AND cm.hash = m.commit_hash
	  LEFT JOIN (
	      SELECT a.repo_id, a.target_hash, c.hash AS live_hash, MAX(c.committed_at_ms) AS at_ms
	        FROM commit_aliases a
	        JOIN commits c ON c.repo_id = a.repo_id AND c.hash = a.old_hash
	       GROUP BY a.repo_id, a.target_hash
	  ) al ON al.repo_id = m.repo_id AND al.target_hash = m.commit_hash`,sc="COALESCE(cm.committed_at_ms, al.at_ms, m.commit_date_ms)",NF=`WITH memory_landing AS (
	SELECT m.repo_id, m.commit_hash,
	       COALESCE(cm.hash, al.live_hash, m.commit_hash) AS live_hash,
	       ${sc} AS at_ms
	  FROM memories m
	  ${oc}
	 WHERE m.parent_hash IS NULL
)`,ao=`SELECT ${sc} AS at_ms
	  FROM memories m
	  ${oc}
	 WHERE m.repo_id = ? AND m.commit_hash = ?`});function lo(e,t){if(t.length===0)return;let n=e.prepare("SELECT DISTINCT tz FROM stats_daily").all();if(n.length!==0)for(let{tz:r}of n){let o=[...new Set(t.map(s=>Uh(s,r)))];e.prepare(`DELETE FROM stats_daily WHERE tz = ? AND day IN (${o.map(()=>"?").join(", ")})`).run(r,...o)}}var GF,Ek,Sk,bk,Tk,qF,ic=y(()=>{"use strict";w();Ot();rc();Hh();Ys();GF=f("StatsRollup"),Ek={model:!0,agent:!0,project:!0,branch:!0,ticket:!0,category:!0},Sk=Object.keys(Ek),bk="built",Tk="tokens",qF=[...Sk,Tk,bk]});function yt(e){if(e==null)return null;try{return JSON.parse(e)}catch{return null}}function Wh(e){let t=/^#\s+(.+)$/m.exec(e);return t?t[1].trim():null}function Jh(e,t,n){for(let{path:r,accepts:o}of Rk){let s=e;for(let a of r){if(s==null||typeof s!="object"){s=void 0;break}s=s[a]}s==null||(o==="integer"?Number.isInteger(s):typeof s=="number")||n("off-type numeric",`${t}.${r.join(".")} is ${typeof s} (${JSON.stringify(s)}) \u2014 column reads NULL`)}}function Gh(e,t,n,r){let o=Date.parse(e.commitDate??"");return Number.isFinite(o)?o:(r("commit date",`${t} has no parsable commitDate \u2014 falling back to first-seen time`),n)}function qh(e,t,n,r,o){let s=e.prepare(ao),i=e.prepare("SELECT target_hash FROM commit_aliases WHERE repo_id = ? AND old_hash = ?").get(t,n)?.target_hash,a=i!==void 0&&i!==r?[r,i]:[r],l=d=>s.get(t,d)?.at_ms??void 0,c=[],u=!1;for(let d of a){let p=s.get(t,d);d===r&&(u=p!==void 0),p?.at_ms!=null&&c.push(p.at_ms)}if(!u)return{stored:!1,days:[]};e.prepare(`INSERT INTO commit_aliases (repo_id, old_hash, target_hash, created_ms) VALUES (?, ?, ?, ?)
		 ON CONFLICT(repo_id, old_hash) DO UPDATE SET target_hash = excluded.target_hash`).run(t,n,r,o);for(let d of a){let p=l(d);p!==void 0&&c.push(p)}return i!==void 0&&i!==r&&_k.info("alias %s retargeted %s -> %s",n,i,r),{stored:!0,days:c}}function Kh(e,t){let n=e.prepare("SELECT commit_hash, parent_hash, root_hash, depth FROM memories WHERE repo_id = ?").all(t),r=new Map,o=[];for(let l of n)if(l.parent_hash===null)o.push({hash:l.commit_hash,root:l.commit_hash,depth:0});else{let c=r.get(l.parent_hash)??[];c.push(l.commit_hash),r.set(l.parent_hash,c)}let s=e.prepare("UPDATE memories SET root_hash = ?, depth = ? WHERE repo_id = ? AND commit_hash = ?"),i=new Map(n.map(l=>[l.commit_hash,l])),a=0;for(;o.length>0;){let{hash:l,root:c,depth:u}=o.shift();a++;let d=i.get(l);(d.root_hash!==c||d.depth!==u)&&s.run(c,u,t,l);for(let p of r.get(l)??[])o.push({hash:p,root:c,depth:u+1})}if(a!==n.length)throw new Error(`remountRepo: ${n.length-a} node(s) unreachable from any root \u2014 cycle in batch`)}var _k,Rk,Vh=y(()=>{"use strict";zf();Oh();Ge();Ir();Xe();Lt();Dh();$h();w();Ot();nc();Fh();Wn();Rs();ic();Ys();_k=f("SotImport");Rk=[{path:["conversationTurns"],accepts:"integer"},{path:["conversationTokens"],accepts:"integer"},{path:["estimatedCostUsd"],accepts:"number"},{path:["diffStats","filesChanged"],accepts:"integer"},{path:["diffStats","insertions"],accepts:"integer"},{path:["diffStats","deletions"],accepts:"integer"}]});function vk(e){let t=[],n=(r,o,s)=>{t.push({hash:r.commitHash,parentInFile:o,pos:s,summary:r}),(r.children??[]).forEach((i,a)=>{n(i,r.commitHash,a)})};return n(e,null,null),t}function Ak(e){let t={summaryDeletes:[],summaryTrees:[],transcriptWrites:[],transcriptDeletes:[],contextWrites:[],contextDeletes:[],progressWrites:[],progressDeletes:[],topicPageWrites:[],topicPageDeletes:[],treeHashes:new Map,aliases:new Map,topicSummaries:new Map,processedSet:null,v5State:null};for(let n of e){let r=n.delete===!0,o=n.path.match(/^summaries\/([0-9a-f]+)\.json$/);if(o){if(r){t.summaryDeletes.push(o[1]);continue}let c=yt(n.content);if(!c?.commitHash)throw new Error(`SotWrite: unparsable summary at ${n.path}`);t.summaryTrees.push(vk(c));continue}if(n.path==="index.json"){if(r)continue;let c=yt(n.content);for(let u of c?.entries??[])u.treeHash&&t.treeHashes.set(u.commitHash,u.treeHash);for(let[u,d]of Object.entries(c?.commitAliases??{}))t.aliases.set(u,d);continue}if(n.path==="catalog.json")continue;if(n.path==="topics/index.json"){if(r)continue;let c=yt(n.content);for(let u of c?.topics??[])u.stableSlug&&u.summary!==void 0&&t.topicSummaries.set(u.stableSlug,u.summary);continue}if(n.path==="topics/processed.json"){t.processedSet=r?null:n.content;continue}if(n.path==="schema-v5-migration.json"){r||(t.v5State=n.content);continue}let s=n.path.match(/^transcripts\/(.+)\.json$/);if(s){r?t.transcriptDeletes.push(s[1]):t.transcriptWrites.push({id:s[1],content:n.content});continue}let i=n.path.match(/^(plans|notes|references|skills)\/(.+)\.md$/);if(i){let c=kk[i[1]];r?t.contextDeletes.push({kind:c,key:i[2]}):t.contextWrites.push({kind:c,key:i[2],body:n.content});continue}let a=n.path.match(/^plan-progress\/(.+)\.json$/);if(a){r?t.progressDeletes.push(a[1]):t.progressWrites.push({pathSlug:a[1],content:n.content});continue}let l=n.path.match(/^topics\/([^/]+)\.json$/);if(l){r?t.topicPageDeletes.push(l[1]):t.topicPageWrites.push({slug:l[1],content:n.content});continue}throw new Error(`SotWrite: no table backs path ${n.path}`)}return t}function co(e,t){nn.warn("SotWrite: dropping unparsable %s (%s) -- keeping the rest of the batch",e,t)}function Ck(e,t,n){let r=/-([0-9a-f]{8})$/.exec(n);return r?e.prepare("SELECT branch FROM memories WHERE repo_id = ? AND commit_hash LIKE ? || '%' LIMIT 1").get(t,r[1])?.branch??null:null}function xk(e,t,n,r){let o=[];for(let h of n.summaryDeletes){let g=e.prepare(ao).get(t,h);g?.at_ms!=null&&o.push(g.at_ms),e.prepare("DELETE FROM memories WHERE repo_id = ? AND commit_hash = ?").run(t,h)}if(lo(e,o),n.summaryTrees.length===0)return;let s=new Set;for(let h of n.summaryTrees)for(let g of h)"children"in g.summary&&s.add(g.hash);let i=e.prepare(`UPDATE memories SET child_pos = child_pos + ${1e6}
		  WHERE repo_id = ? AND parent_hash = ? AND child_pos < ${1e6}`);for(let h of s)i.run(t,h);let a=new Map;for(let h of n.summaryTrees)for(let g of h){if(g.parentInFile===null||g.pos===null)continue;let S=a.get(g.parentInFile)??new Map;S.set(g.hash,g.pos),a.set(g.parentInFile,S)}let l=e.prepare(`INSERT INTO memories (repo_id, commit_hash, parent_hash, child_pos, root_hash, depth,
		                       summary_json, tree_hash, first_seen_ms, written_at_ms, commit_date_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(repo_id, commit_hash) DO UPDATE SET
		   parent_hash = excluded.parent_hash, child_pos = excluded.child_pos,
		   summary_json = excluded.summary_json,
		   tree_hash = COALESCE(excluded.tree_hash, memories.tree_hash),
		   written_at_ms = excluded.written_at_ms, commit_date_ms = excluded.commit_date_ms`),c=(h,g)=>nn.info("write degraded a value: %s %s",h,g);for(let h of n.summaryTrees)for(let g of h){let S=g.parentInFile,E=g.pos;if(g.parentInFile===null){let P=e.prepare("SELECT parent_hash, child_pos FROM memories WHERE repo_id = ? AND commit_hash = ?").get(t,g.hash);P&&(S=P.parent_hash,E=P.child_pos,E!==null&&E>=1e6&&((S===null?void 0:a.get(S))?.has(g.hash)||(S=null,E=null)))}let _=JSON.stringify("children"in g.summary?{...g.summary,children:[]}:g.summary);l.run(t,g.hash,S,E,g.hash,0,_,n.treeHashes.get(g.hash)??null,r,r,Gh(g.summary,g.hash,r,c)),Jh(g.summary,g.hash,c),e.prepare("DELETE FROM memory_topics WHERE repo_id = ? AND commit_hash = ?").run(t,g.hash);let R=e.prepare("INSERT INTO memory_topics (repo_id, commit_hash, pos, category, importance, title) VALUES (?, ?, ?, ?, ?, ?)");(g.summary.topics??[]).forEach((P,I)=>{if(!P.title){c("topic",`${g.hash}[${I}] has no title`);return}R.run(t,g.hash,I,P.category??null,P.importance??null,P.title)})}let u=e.prepare(`UPDATE memories SET parent_hash = NULL, child_pos = NULL
		  WHERE repo_id = ? AND parent_hash = ? AND child_pos >= ${1e6}`),d=[],p=e.prepare(`SELECT m.commit_hash FROM memories m
		  WHERE m.repo_id = ? AND m.parent_hash = ? AND m.child_pos >= ${1e6}`),m=e.prepare(ao);for(let h of s){for(let{commit_hash:g}of p.all(t,h)){let S=m.get(t,g);S?.at_ms!=null&&d.push(S.at_ms)}u.run(t,h)}lo(e,d),Kh(e,t)}function Ik(e,t,n,r){let o=[];for(let[s,i]of n.aliases){let a=qh(e,t,s,i,r);if(!a.stored){nn.info("dropping alias %s -> %s (no such memory row)",s,i);continue}o.push(...a.days)}lo(e,o)}function Pk(e,t,n,r){let o=new Set;for(let s of n.transcriptDeletes)e.prepare("DELETE FROM transcript_sessions WHERE repo_id = ? AND transcript_id = ?").run(t,s),e.prepare("DELETE FROM memory_transcripts WHERE repo_id = ? AND transcript_id = ?").run(t,s),e.prepare("DELETE FROM transcripts WHERE repo_id = ? AND transcript_id = ?").run(t,s);for(let{id:s,content:i}of n.transcriptWrites){let a=yt(i);if(!a||!Array.isArray(a.sessions)){co("transcript",s);continue}e.prepare(`INSERT INTO transcripts (repo_id, transcript_id, sessions_blob, written_at_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, transcript_id) DO UPDATE SET sessions_blob = excluded.sessions_blob,
			   written_at_ms = excluded.written_at_ms`).run(t,s,(0,Yh.deflateSync)(Buffer.from(i,"utf8")),r),e.prepare("DELETE FROM transcript_sessions WHERE repo_id = ? AND transcript_id = ?").run(t,s);for(let l of a.sessions)l.sessionId&&e.prepare(`INSERT INTO transcript_sessions (repo_id, transcript_id, session_id, source) VALUES (?, ?, ?, ?)
				 ON CONFLICT(repo_id, transcript_id, session_id) DO UPDATE SET source = excluded.source`).run(t,s,l.sessionId,l.source??null);o.add(s)}return o}function Nk(e,t,n,r){if(r.size===0)return;let o=new Set(n.summaryTrees.flat().map(c=>c.hash)),s=new Set(n.summaryTrees.flat().flatMap(c=>[...Dt(c.summary,r)])),i=[...r].filter(c=>!s.has(c));if(i.length===0)return;let a=e.prepare("SELECT commit_hash, summary_json FROM memories WHERE repo_id = ? AND summary_json LIKE ?"),l=e.prepare(`INSERT INTO memory_transcripts (repo_id, commit_hash, transcript_id) VALUES (?, ?, ?)
		 ON CONFLICT(repo_id, commit_hash, transcript_id) DO NOTHING`);for(let c of i){let u=a.all(t,`%${c}%`);for(let d of u){if(o.has(d.commit_hash))continue;let p=yt(d.summary_json);p&&Dt(p,r).includes(c)&&(l.run(t,d.commit_hash,c),nn.info("linked stored transcript %s to memory %s written earlier",c,d.commit_hash))}}}function Ok(e,t,n){if(n.summaryTrees.length===0)return;let r=new Set(e.prepare("SELECT transcript_id FROM transcripts WHERE repo_id = ?").all(t).map(o=>o.transcript_id));for(let o of n.summaryTrees)for(let s of o){let i=[...new Set(Dt(s.summary,r).filter(a=>r.has(a)))];for(let a of s.summary.transcripts??[])r.has(a)||nn.info("dropping dangling transcript link %s \u2192 %s (no transcript row)",s.hash,a);e.prepare("DELETE FROM memory_transcripts WHERE repo_id = ? AND commit_hash = ?").run(t,s.hash);for(let a of i)e.prepare("INSERT INTO memory_transcripts (repo_id, commit_hash, transcript_id) VALUES (?, ?, ?)").run(t,s.hash,a)}}function Dk(e,t,n,r){for(let{kind:s,key:i}of n.contextDeletes)e.prepare("DELETE FROM context WHERE repo_id = ? AND kind = ? AND context_key = ?").run(t,s,i);let o=e.prepare(`INSERT INTO context (repo_id, kind, context_key, source, native_id, tool_name, referenced_at,
		                      original_slug, branch, title, url, body_md, created_at_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(repo_id, kind, context_key) DO UPDATE SET
		   source = excluded.source, native_id = excluded.native_id, tool_name = excluded.tool_name,
		   referenced_at = excluded.referenced_at, original_slug = excluded.original_slug,
		   branch = excluded.branch, title = excluded.title, url = excluded.url,
		   body_md = excluded.body_md, updated_at_ms = ?`);for(let{kind:s,key:i,body:a}of n.contextWrites){if(s==="reference"){let u=La(a);if(!u){co("reference frontmatter",`references/${i}.md`);continue}o.run(t,s,i,u.source,u.nativeId,u.toolName,u.referencedAt,null,null,u.title,u.url??null,a,r,r);continue}let l=s==="plan"||s==="note"?Ck(e,t,i):null,c=s==="plan"&&l!==null?i.replace(/-[0-9a-f]{8}$/,""):null;o.run(t,s,i,null,null,null,null,c,l,Wh(a),null,a,r,r)}}function Lk(e,t,n,r){for(let o of n.progressDeletes)e.prepare("DELETE FROM plan_progress WHERE repo_id = ? AND plan_slug = ?").run(t,o);for(let{pathSlug:o,content:s}of n.progressWrites){let i=yt(s);if(!i){co("plan-progress",`plan-progress/${o}.json`);continue}let a=i.planSlug??o;if(!e.prepare("SELECT 1 AS ok FROM context WHERE repo_id = ? AND kind = 'plan' AND context_key = ?").get(t,a)){nn.warn("plan-progress for %s has no plan row -- skipping the artifact, keeping the rest of the batch",a);continue}e.prepare(`INSERT INTO plan_progress (repo_id, plan_slug, artifact_json, updated_at_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, plan_slug) DO UPDATE SET
			   artifact_json = excluded.artifact_json, updated_at_ms = excluded.updated_at_ms`).run(t,a,s,r)}}function Mk(e,t,n,r){for(let o of n.topicPageDeletes)e.prepare("DELETE FROM topic_pages WHERE repo_id = ? AND stable_slug = ?").run(t,o);for(let{slug:o,content:s}of n.topicPageWrites){let i=yt(s);if(!i?.stableSlug||i.title===void 0||i.content===void 0||!i.lastUpdatedAt){co("topic page",`topics/${o}.json`);continue}e.prepare(`INSERT INTO topic_pages (repo_id, stable_slug, title, summary, content_md,
			                          related_branches_json, last_updated_at, payload_version)
			 VALUES (?, ?, ?, ?, ?, ?, ?, ?)
			 ON CONFLICT(repo_id, stable_slug) DO UPDATE SET
			   title = excluded.title, content_md = excluded.content_md,
			   related_branches_json = excluded.related_branches_json,
			   last_updated_at = excluded.last_updated_at, payload_version = excluded.payload_version`).run(t,i.stableSlug,i.title,n.topicSummaries.get(i.stableSlug)??null,i.content,JSON.stringify(i.relatedBranches??[]),i.lastUpdatedAt,i.schemaVersion??1),e.prepare("DELETE FROM topic_source_refs WHERE repo_id = ? AND stable_slug = ?").run(t,i.stableSlug),(i.sourceRefs??[]).forEach((a,l)=>{e.prepare(`INSERT INTO topic_source_refs (repo_id, stable_slug, pos, ref_type, ref_id, ts, branch)
				 VALUES (?, ?, ?, ?, ?, ?, ?)`).run(t,i.stableSlug,l,a.type,a.id,a.timestamp,a.branch??null)})}for(let[o,s]of n.topicSummaries){let i=e.prepare("UPDATE topic_pages SET summary = ? WHERE repo_id = ? AND stable_slug = ?").run(s,t,o);Number(i.changes)===0&&nn.info("topics/index.json names %s but no page row exists \u2014 summary dropped",o)}if(n.processedSet!==null){let o=yt(n.processedSet);if(!o?.processed)co("processed set","topics/processed.json");else{e.prepare("DELETE FROM topic_processed_sources WHERE repo_id = ?").run(t);let s=e.prepare(`INSERT INTO topic_processed_sources (repo_id, source_type, source_id) VALUES (?, ?, ?)
				 ON CONFLICT(repo_id, source_type, source_id) DO NOTHING`);for(let[i,a]of Object.entries(o.processed))for(let l of a)s.run(t,i,l)}}n.v5State!==null&&e.prepare(`INSERT INTO repo_state (repo_id, key, value) VALUES (?, 'v5-migration', ?)
			 ON CONFLICT(repo_id, key) DO UPDATE SET value = excluded.value`).run(t,n.v5State)}function Xh(e,t,n,r){let o=Ak(n);vs(e,()=>{e.exec("PRAGMA defer_foreign_keys = ON"),xk(e,t,o,r),Ik(e,t,o,r);let s=Pk(e,t,o,r);Ok(e,t,o),Nk(e,t,o,s),Dk(e,t,o,r),Lk(e,t,o,r),Mk(e,t,o,r)})}var Yh,nn,kk,zh=y(()=>{"use strict";Yh=require("node:zlib");Ir();Lt();w();Ot();Vh();Rs();ic();Ys();nn=f("SotWrite"),kk={plans:"plan",notes:"note",references:"reference",skills:"skill"}});function Zh(e){let t=new Map;for(let n of e){if(n.parent_hash==null)continue;let r=t.get(n.parent_hash)??[];r.push(n),t.set(n.parent_hash,r)}for(let n of t.values())n.sort((r,o)=>Number(r.child_pos)-Number(o.child_pos));return t}function ac(e,t){let n=JSON.parse(t.summary_json);return"children"in n&&(n.children=(e.get(t.commit_hash)??[]).map(r=>ac(e,r))),n}function $k(e,t,n){let r=e.prepare("SELECT root_hash, parent_hash FROM memories WHERE repo_id = ? AND commit_hash = ?").get(t,n);if(!r)return;let o=(r.parent_hash===null?e.prepare(`SELECT commit_hash, parent_hash, child_pos, tree_hash, summary_json
					   FROM memories WHERE repo_id = ? AND root_hash = ?`):e.prepare(`WITH RECURSIVE subtree(commit_hash) AS (
					     SELECT commit_hash FROM memories WHERE repo_id = ?1 AND commit_hash = ?2
					     UNION ALL
					     SELECT m.commit_hash FROM memories m
					       JOIN subtree s ON m.parent_hash = s.commit_hash
					      WHERE m.repo_id = ?1
					   )
					   SELECT m.commit_hash, m.parent_hash, m.child_pos, m.tree_hash, m.summary_json
					     FROM memories m JOIN subtree ON subtree.commit_hash = m.commit_hash
					    WHERE m.repo_id = ?1`)).all(t,r.parent_hash===null?r.root_hash:n),s=o.find(i=>i.commit_hash===n);return s?ac(Zh(o),s):void 0}function Nh(e){if(e instanceof Mt)return e;let t=e?.primary;return t instanceof Mt?t:null}function Fk(e){if(e===null)return{};try{return{diffStats:JSON.parse(e)}}catch{return{}}}var Qh,Mt,qs=y(()=>{"use strict";Qh=require("node:zlib");Ot();zh();w();Xe();Mt=class{constructor(t,n){this.repoIdentity=t;this.dbPath=n;this.kind="sqlite"}async withDb(t){return Nl(n=>{let r=n.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);if(!r)throw new Error(`SqliteStorage: no repos row for ${this.repoIdentity}`);return t(n,r.id)},{dbPath:this.dbPath})}async withDbOrAbsent(t,n){return Nl(r=>{let o=r.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);return o?t(r,o.id):n},{dbPath:this.dbPath})}async readFile(t){return this.withDbOrAbsent((n,r)=>this.readOne(n,r,t),null)}async batchReadFiles(t){return this.withDbOrAbsent((n,r)=>{let o=new Map;for(let s of t)o.set(s,this.readOne(n,r,s));return o},new Map(t.map(n=>[n,null])))}readOne(t,n,r){let o=r.match(/^summaries\/([0-9a-f]+)\.json$/);if(o){let c=$k(t,n,o[1]);return c?JSON.stringify(c,null,"	"):null}if(r==="index.json")return this.synthIndex(t,n);if(r==="catalog.json")return this.synthCatalog(t,n);if(r==="topics/index.json")return this.synthTopicIndex(t,n);if(r==="topics/processed.json")return this.synthProcessed(t,n);if(r==="schema-v5-migration.json")return t.prepare("SELECT value FROM repo_state WHERE repo_id = ? AND key = 'v5-migration'").get(n)?.value??null;let s=r.match(/^topics\/([^/]+)\.json$/);if(s)return this.synthTopicPage(t,n,s[1]);let i=r.match(/^transcripts\/(.+)\.json$/);if(i){let c=t.prepare("SELECT sessions_blob FROM transcripts WHERE repo_id = ? AND transcript_id = ?").get(n,i[1]);return c?(0,Qh.inflateSync)(Buffer.from(c.sessions_blob)).toString("utf8"):null}let a=r.match(/^(plans|notes|references|skills)\/(.+)\.md$/);if(a){let c={plans:"plan",notes:"note",references:"reference",skills:"skill"}[a[1]];return t.prepare("SELECT body_md FROM context WHERE repo_id = ? AND kind = ? AND context_key = ?").get(n,c,a[2])?.body_md??null}let l=r.match(/^plan-progress\/(.+)\.json$/);return l?t.prepare("SELECT artifact_json FROM plan_progress WHERE repo_id = ? AND plan_slug = ?").get(n,l[1])?.artifact_json??null:null}allMemories(t,n){return t.prepare(`SELECT commit_hash, parent_hash, child_pos, tree_hash, summary_json, index_diff_stats_json
				   FROM memories WHERE repo_id = ? ORDER BY rowid`).all(n)}synthIndex(t,n){let r=t.prepare(`SELECT commit_hash, parent_hash, root_hash, tree_hash, commit_type, commit_message,
				        commit_date, branch, generated_at,
				        CASE WHEN parent_hash IS NULL
				             THEN COALESCE(json_extract(summary_json, '$.diffStats'), index_diff_stats_json)
				        END AS diff_stats_json
				   FROM memories WHERE repo_id = ? ORDER BY rowid`).all(n);if(r.length===0)return null;let o=new Map(t.prepare(`SELECT m.root_hash AS root, COUNT(t.rowid) AS n
						   FROM memories m
						   LEFT JOIN memory_topics t ON t.repo_id = m.repo_id AND t.commit_hash = m.commit_hash
						  WHERE m.repo_id = ? GROUP BY m.root_hash`).all(n).map(a=>[a.root,a.n])),s=r.map(a=>({commitHash:a.commit_hash,parentCommitHash:a.parent_hash,...a.tree_hash!==null&&{treeHash:a.tree_hash},...a.commit_type!==null&&{commitType:a.commit_type},commitMessage:a.commit_message??void 0,commitDate:a.commit_date??void 0,branch:a.branch??void 0,...a.generated_at!==null&&{generatedAt:a.generated_at},...a.parent_hash===null&&{topicCount:o.get(a.root_hash)??0,...Fk(a.diff_stats_json)}})),i=t.prepare("SELECT old_hash, target_hash FROM commit_aliases WHERE repo_id = ? ORDER BY rowid").all(n);return JSON.stringify({version:3,entries:s,...i.length>0&&{commitAliases:Object.fromEntries(i.map(a=>[a.old_hash,a.target_hash]))}},null,"	")}synthCatalog(t,n){let r=this.allMemories(t,n);if(r.length===0)return null;let o=Zh(r),s=r.filter(i=>i.parent_hash===null).map(i=>en(ac(o,i)));return JSON.stringify({version:1,entries:s},null,"	")}topicRefs(t,n,r){return t.prepare(`SELECT ref_type, ref_id, ts, branch FROM topic_source_refs
				  WHERE repo_id = ? AND stable_slug = ? ORDER BY pos`).all(n,r).map(s=>({type:s.ref_type,id:s.ref_id,timestamp:s.ts,...s.branch!==null&&{branch:s.branch}}))}synthTopicPage(t,n,r){let o=t.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json,
				        last_updated_at, payload_version
				   FROM topic_pages WHERE repo_id = ? AND stable_slug = ?`).get(n,r);return o?JSON.stringify({schemaVersion:o.payload_version,stableSlug:o.stable_slug,title:o.title,content:o.content_md,relatedBranches:JSON.parse(o.related_branches_json),sourceRefs:this.topicRefs(t,n,r),lastUpdatedAt:o.last_updated_at},null,"	"):null}synthTopicIndex(t,n){let r=t.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json,
				        last_updated_at, payload_version
				   FROM topic_pages WHERE repo_id = ? ORDER BY rowid`).all(n);if(r.length===0)return null;let o=r.map(s=>({stableSlug:s.stable_slug,title:s.title,...s.summary!==null&&{summary:s.summary},relatedBranches:JSON.parse(s.related_branches_json),sourceRefs:this.topicRefs(t,n,s.stable_slug),lastUpdatedAt:s.last_updated_at}));return JSON.stringify({schemaVersion:1,topics:o},null,"	")}synthProcessed(t,n){let r=t.prepare("SELECT source_type, source_id FROM topic_processed_sources WHERE repo_id = ? ORDER BY rowid").all(n);if(r.length===0)return null;let o={summary:[],plan:[],note:[],userfile:[]};for(let s of r)o[s.source_type].push(s.source_id);return JSON.stringify({schemaVersion:1,processed:o},null,"	")}async listFiles(t){return this.withDbOrAbsent((n,r)=>{let o=(i,a)=>n.prepare(i).all(r).map(l=>a(l.v));return[...o("SELECT commit_hash AS v FROM memories WHERE repo_id = ?",i=>`summaries/${i}.json`),...o("SELECT transcript_id AS v FROM transcripts WHERE repo_id = ?",i=>`transcripts/${i}.json`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'plan'",i=>`plans/${i}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'note'",i=>`notes/${i}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'reference'",i=>`references/${i}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'skill'",i=>`skills/${i}.md`),...o("SELECT plan_slug AS v FROM plan_progress WHERE repo_id = ?",i=>`plan-progress/${i}.json`),...o("SELECT stable_slug AS v FROM topic_pages WHERE repo_id = ?",i=>`topics/${i}.json`),...o("SELECT 'index.json' AS v FROM memories WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'catalog.json' AS v FROM memories WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'topics/index.json' AS v FROM topic_pages WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'topics/processed.json' AS v FROM topic_processed_sources WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'schema-v5-migration.json' AS v FROM repo_state WHERE repo_id = ? AND key = 'v5-migration'",i=>i)].filter(i=>i.startsWith(t)).sort()},[])}async writeFiles(t,n){W()||await Gf(r=>{let o=r.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);if(!o)throw new Error(`SqliteStorage: cannot write memories for unregistered ${this.repoIdentity}`);Xh(r,o.id,t,Date.now())},{dbPath:this.dbPath})}async searchSignatureParts(){return this.withDbOrAbsent((t,n)=>{let r=t.prepare("SELECT COUNT(*) AS n, COALESCE(MAX(written_at_ms), 0) AS newest FROM memories WHERE repo_id = ?").get(n),o=t.prepare("SELECT COUNT(*) AS n, COALESCE(MAX(last_updated_at), '') AS newest FROM topic_pages WHERE repo_id = ?").get(n);return{memoriesCount:r.n,memoriesNewestMs:r.newest,topicCount:o.n,topicNewest:o.newest}},{memoriesCount:0,memoriesNewestMs:0,topicCount:0,topicNewest:""})}async lookupAlias(t){return this.withDbOrAbsent((n,r)=>n.prepare("SELECT target_hash FROM commit_aliases WHERE repo_id = ? AND old_hash = ?").get(r,t)?.target_hash??null,null)}async findShallowestByTreeHash(t){return this.withDbOrAbsent((n,r)=>n.prepare(`SELECT commit_hash FROM memories WHERE repo_id = ? AND tree_hash = ?
					  ORDER BY depth ASC, commit_date_ms DESC LIMIT 1`).get(r,t)?.commit_hash??null,null)}async findHashesByPrefix(t){return/^[0-9a-f]+$/.test(t)?this.withDbOrAbsent((n,r)=>n.prepare("SELECT commit_hash FROM memories WHERE repo_id = ? AND commit_hash LIKE ? || '%'").all(r,t).map(s=>s.commit_hash),[]):[]}async listHeadEntries(t){return this.withDbOrAbsent((n,r)=>n.prepare(`SELECT commit_hash, tree_hash, commit_type, commit_message, commit_date, branch, generated_at
					   FROM memories WHERE repo_id = ? AND parent_hash IS NULL${t!==void 0?" AND branch = ?":""}`).all(...t!==void 0?[r,t]:[r]).map(s=>({commitHash:s.commit_hash,parentCommitHash:null,...s.tree_hash!==null?{treeHash:s.tree_hash}:{},...s.commit_type!==null?{commitType:s.commit_type}:{},commitMessage:s.commit_message??"",commitDate:s.commit_date??"",branch:s.branch??"",generatedAt:s.generated_at??""})),[])}async topicTitlesByHash(){return this.withDbOrAbsent((t,n)=>{let r=t.prepare("SELECT commit_hash, title FROM memory_topics WHERE repo_id = ? ORDER BY commit_hash, pos").all(n),o=new Map;for(let s of r){let i=o.get(s.commit_hash)??[];i.push(s.title),o.set(s.commit_hash,i)}return o},new Map)}async listTopicSearchRows(){return this.withDbOrAbsent((t,n)=>{let r=t.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json, last_updated_at
					   FROM topic_pages WHERE repo_id = ?`).all(n),o=t.prepare("SELECT stable_slug, ref_type FROM topic_source_refs WHERE repo_id = ? ORDER BY pos").all(n),s=new Map;for(let i of o){let a=s.get(i.stable_slug)??[];a.push(i.ref_type),s.set(i.stable_slug,a)}return r.map(i=>({stableSlug:i.stable_slug,title:i.title,summary:i.summary,content:i.content_md,relatedBranches:JSON.parse(i.related_branches_json),lastUpdatedAt:i.last_updated_at,refTypes:s.get(i.stable_slug)??[]}))},[])}async listRootSummaries(){return this.withDbOrAbsent((t,n)=>t.prepare("SELECT commit_hash FROM memories WHERE repo_id = ? AND parent_hash IS NULL").all(n).map(o=>this.readOne(t,n,`summaries/${o.commit_hash}.json`)).filter(o=>o!==null).map(o=>JSON.parse(o)),[])}async exists(){try{return await this.withDb(()=>!0)}catch{return!1}}async ensure(){throw new Error("SqliteStorage cannot create its database: opening it runs the migrations already")}}});async function tg(e){let t=Date.now(),n=eg.get(e);if(n&&t-n.at<jk)return n.route;let r=await Vr(e);return eg.set(e,{route:r,at:t}),r}async function ng(e,t,n){if(n.state==="legacy-fenced"||n.state==="cutover"){let{identity:r}=await zt(t);return new Mt(r)}return new ht(e)}async function rg(e){let t=e??process.cwd(),n=await tg(t);if(n.state==="blocked")throw new Error(`storage unavailable: ${n.reason} \u2014 this repo's orphan branch is frozen (cutover), so the system of record cannot fall back to it; run 'jolli doctor --recover' or upgrade this surface`);return ng(e,t,n)}async function Ks(e){let t=e??process.cwd(),n;try{n=await tg(t)}catch(r){return{ok:!1,reason:r.message}}if(n.state==="blocked")return{ok:!1,reason:n.reason};try{return{ok:!0,state:n.state,storage:await ng(e,t,n)}}catch(r){return{ok:!1,reason:r.message}}}var jk,eg,Vs=y(()=>{"use strict";As();Wn();xs();qs();jk=3e3,eg=new Map});function Et(e,t=""){let n=t?` ${t}`:"";return`${lv} ${e}${n}`}function mo(e,t){let n=typeof t=="string"?[t]:t;return e.some(r=>{let o=r.hooks;return Array.isArray(o)?o.some(s=>typeof s.command=="string"&&n.some(i=>s.command.includes(i))):!1})}function rn(e,t){let n=typeof t=="string"?[t]:t,r=[];for(let o of e){let s=o.hooks;if(!Array.isArray(s)){r.push(o);continue}let i=s.filter(a=>!(typeof a.command=="string"&&n.some(l=>a.command.includes(l))));i.length>0&&r.push({...o,hooks:i})}return r}function yc(e){return mo(e,gc)}function ni(e){return rn(e,gc)}var lv,gc,ei,ti,ri=y(()=>{"use strict";lv='"$HOME/.jolli/jollimemory/run-hook"';gc=["run-hook","StopHook","jollimemory-hooks.jar"],ei=["run-hook","SessionStartHook"],ti=["run-hook","GeminiAfterAgentHook","jollimemory-hooks.jar"]});var Kn=v((qU,Cg)=>{"use strict";var uv="2.0.0",pv=Number.MAX_SAFE_INTEGER||9007199254740991,mv=16,fv=250,hv=["major","premajor","minor","preminor","patch","prepatch","prerelease"];Cg.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:mv,MAX_SAFE_BUILD_LENGTH:fv,MAX_SAFE_INTEGER:pv,RELEASE_TYPES:hv,SEMVER_SPEC_VERSION:uv,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}});var yo=v((KU,xg)=>{"use strict";var gv=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};xg.exports=gv});var Vn=v((ze,Ig)=>{"use strict";var{MAX_SAFE_COMPONENT_LENGTH:Sc,MAX_SAFE_BUILD_LENGTH:yv,MAX_LENGTH:wv}=Kn(),Ev=yo();ze=Ig.exports={};var Sv=ze.re=[],bv=ze.safeRe=[],b=ze.src=[],Tv=ze.safeSrc=[],T=ze.t={},_v=0,bc="[a-zA-Z0-9-]",Rv=[["\\s",1],["\\d",wv],[bc,yv]],kv=e=>{for(let[t,n]of Rv)e=e.split(`${t}*`).join(`${t}{0,${n}}`).split(`${t}+`).join(`${t}{1,${n}}`);return e},x=(e,t,n)=>{let r=kv(t),o=_v++;Ev(e,o,t),T[e]=o,b[o]=t,Tv[o]=r,Sv[o]=new RegExp(t,n?"g":void 0),bv[o]=new RegExp(r,n?"g":void 0)};x("NUMERICIDENTIFIER","0|[1-9]\\d*");x("NUMERICIDENTIFIERLOOSE","\\d+");x("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${bc}*`);x("MAINVERSION",`(${b[T.NUMERICIDENTIFIER]})\\.(${b[T.NUMERICIDENTIFIER]})\\.(${b[T.NUMERICIDENTIFIER]})`);x("MAINVERSIONLOOSE",`(${b[T.NUMERICIDENTIFIERLOOSE]})\\.(${b[T.NUMERICIDENTIFIERLOOSE]})\\.(${b[T.NUMERICIDENTIFIERLOOSE]})`);x("PRERELEASEIDENTIFIER",`(?:${b[T.NONNUMERICIDENTIFIER]}|${b[T.NUMERICIDENTIFIER]})`);x("PRERELEASEIDENTIFIERLOOSE",`(?:${b[T.NONNUMERICIDENTIFIER]}|${b[T.NUMERICIDENTIFIERLOOSE]})`);x("PRERELEASE",`(?:-(${b[T.PRERELEASEIDENTIFIER]}(?:\\.${b[T.PRERELEASEIDENTIFIER]})*))`);x("PRERELEASELOOSE",`(?:-?(${b[T.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${b[T.PRERELEASEIDENTIFIERLOOSE]})*))`);x("BUILDIDENTIFIER",`${bc}+`);x("BUILD",`(?:\\+(${b[T.BUILDIDENTIFIER]}(?:\\.${b[T.BUILDIDENTIFIER]})*))`);x("FULLPLAIN",`v?${b[T.MAINVERSION]}${b[T.PRERELEASE]}?${b[T.BUILD]}?`);x("FULL",`^${b[T.FULLPLAIN]}$`);x("LOOSEPLAIN",`[v=\\s]*${b[T.MAINVERSIONLOOSE]}${b[T.PRERELEASELOOSE]}?${b[T.BUILD]}?`);x("LOOSE",`^${b[T.LOOSEPLAIN]}$`);x("GTLT","((?:<|>)?=?)");x("XRANGEIDENTIFIERLOOSE",`${b[T.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);x("XRANGEIDENTIFIER",`${b[T.NUMERICIDENTIFIER]}|x|X|\\*`);x("XRANGEPLAIN",`[v=\\s]*(${b[T.XRANGEIDENTIFIER]})(?:\\.(${b[T.XRANGEIDENTIFIER]})(?:\\.(${b[T.XRANGEIDENTIFIER]})(?:${b[T.PRERELEASE]})?${b[T.BUILD]}?)?)?`);x("XRANGEPLAINLOOSE",`[v=\\s]*(${b[T.XRANGEIDENTIFIERLOOSE]})(?:\\.(${b[T.XRANGEIDENTIFIERLOOSE]})(?:\\.(${b[T.XRANGEIDENTIFIERLOOSE]})(?:${b[T.PRERELEASELOOSE]})?${b[T.BUILD]}?)?)?`);x("XRANGE",`^${b[T.GTLT]}\\s*${b[T.XRANGEPLAIN]}$`);x("XRANGELOOSE",`^${b[T.GTLT]}\\s*${b[T.XRANGEPLAINLOOSE]}$`);x("COERCEPLAIN",`(^|[^\\d])(\\d{1,${Sc}})(?:\\.(\\d{1,${Sc}}))?(?:\\.(\\d{1,${Sc}}))?`);x("COERCE",`${b[T.COERCEPLAIN]}(?:$|[^\\d])`);x("COERCEFULL",b[T.COERCEPLAIN]+`(?:${b[T.PRERELEASE]})?(?:${b[T.BUILD]})?(?:$|[^\\d])`);x("COERCERTL",b[T.COERCE],!0);x("COERCERTLFULL",b[T.COERCEFULL],!0);x("LONETILDE","(?:~>?)");x("TILDETRIM",`(\\s*)${b[T.LONETILDE]}\\s+`,!0);ze.tildeTrimReplace="$1~";x("TILDE",`^${b[T.LONETILDE]}${b[T.XRANGEPLAIN]}$`);x("TILDELOOSE",`^${b[T.LONETILDE]}${b[T.XRANGEPLAINLOOSE]}$`);x("LONECARET","(?:\\^)");x("CARETTRIM",`(\\s*)${b[T.LONECARET]}\\s+`,!0);ze.caretTrimReplace="$1^";x("CARET",`^${b[T.LONECARET]}${b[T.XRANGEPLAIN]}$`);x("CARETLOOSE",`^${b[T.LONECARET]}${b[T.XRANGEPLAINLOOSE]}$`);x("COMPARATORLOOSE",`^${b[T.GTLT]}\\s*(${b[T.LOOSEPLAIN]})$|^$`);x("COMPARATOR",`^${b[T.GTLT]}\\s*(${b[T.FULLPLAIN]})$|^$`);x("COMPARATORTRIM",`(\\s*)${b[T.GTLT]}\\s*(${b[T.LOOSEPLAIN]}|${b[T.XRANGEPLAIN]})`,!0);ze.comparatorTrimReplace="$1$2$3";x("HYPHENRANGE",`^\\s*(${b[T.XRANGEPLAIN]})\\s+-\\s+(${b[T.XRANGEPLAIN]})\\s*$`);x("HYPHENRANGELOOSE",`^\\s*(${b[T.XRANGEPLAINLOOSE]})\\s+-\\s+(${b[T.XRANGEPLAINLOOSE]})\\s*$`);x("STAR","(<|>)?=?\\s*\\*");x("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$");x("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")});var ii=v((VU,Pg)=>{"use strict";var vv=Object.freeze({loose:!0}),Av=Object.freeze({}),Cv=e=>e?typeof e!="object"?vv:e:Av;Pg.exports=Cv});var Tc=v((YU,Dg)=>{"use strict";var Ng=/^[0-9]+$/,Og=(e,t)=>{if(typeof e=="number"&&typeof t=="number")return e===t?0:e<t?-1:1;let n=Ng.test(e),r=Ng.test(t);return n&&r&&(e=+e,t=+t),e===t?0:n&&!r?-1:r&&!n?1:e<t?-1:1},xv=(e,t)=>Og(t,e);Dg.exports={compareIdentifiers:Og,rcompareIdentifiers:xv}});var ee=v((XU,Mg)=>{"use strict";var ai=yo(),{MAX_LENGTH:Lg,MAX_SAFE_INTEGER:li}=Kn(),{safeRe:ci,t:di}=Vn(),Iv=ii(),{compareIdentifiers:_c}=Tc(),Rc=class e{constructor(t,n){if(n=Iv(n),t instanceof e){if(t.loose===!!n.loose&&t.includePrerelease===!!n.includePrerelease)return t;t=t.version}else if(typeof t!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);if(t.length>Lg)throw new TypeError(`version is longer than ${Lg} characters`);ai("SemVer",t,n),this.options=n,this.loose=!!n.loose,this.includePrerelease=!!n.includePrerelease;let r=t.trim().match(n.loose?ci[di.LOOSE]:ci[di.FULL]);if(!r)throw new TypeError(`Invalid Version: ${t}`);if(this.raw=t,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>li||this.major<0)throw new TypeError("Invalid major version");if(this.minor>li||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>li||this.patch<0)throw new TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map(o=>{if(/^[0-9]+$/.test(o)){let s=+o;if(s>=0&&s<li)return s}return o}):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(t){if(ai("SemVer.compare",this.version,this.options,t),!(t instanceof e)){if(typeof t=="string"&&t===this.version)return 0;t=new e(t,this.options)}return t.version===this.version?0:this.compareMain(t)||this.comparePre(t)}compareMain(t){return t instanceof e||(t=new e(t,this.options)),this.major<t.major?-1:this.major>t.major?1:this.minor<t.minor?-1:this.minor>t.minor?1:this.patch<t.patch?-1:this.patch>t.patch?1:0}comparePre(t){if(t instanceof e||(t=new e(t,this.options)),this.prerelease.length&&!t.prerelease.length)return-1;if(!this.prerelease.length&&t.prerelease.length)return 1;if(!this.prerelease.length&&!t.prerelease.length)return 0;let n=0;do{let r=this.prerelease[n],o=t.prerelease[n];if(ai("prerelease compare",n,r,o),r===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(r===void 0)return-1;if(r===o)continue;return _c(r,o)}while(++n)}compareBuild(t){t instanceof e||(t=new e(t,this.options));let n=0;do{let r=this.build[n],o=t.build[n];if(ai("build compare",n,r,o),r===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(r===void 0)return-1;if(r===o)continue;return _c(r,o)}while(++n)}inc(t,n,r){if(t.startsWith("pre")){if(!n&&r===!1)throw new Error("invalid increment argument: identifier is empty");if(n){let o=`-${n}`.match(this.options.loose?ci[di.PRERELEASELOOSE]:ci[di.PRERELEASE]);if(!o||o[1]!==n)throw new Error(`invalid identifier: ${n}`)}}switch(t){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",n,r);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",n,r);break;case"prepatch":this.prerelease.length=0,this.inc("patch",n,r),this.inc("pre",n,r);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",n,r),this.inc("pre",n,r);break;case"release":if(this.prerelease.length===0)throw new Error(`version ${this.raw} is not a prerelease`);this.prerelease.length=0;break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{let o=Number(r)?1:0;if(this.prerelease.length===0)this.prerelease=[o];else{let s=this.prerelease.length;for(;--s>=0;)typeof this.prerelease[s]=="number"&&(this.prerelease[s]++,s=-2);if(s===-1){if(n===this.prerelease.join(".")&&r===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(o)}}if(n){let s=[n,o];r===!1&&(s=[n]),_c(this.prerelease[0],n)===0?isNaN(this.prerelease[1])&&(this.prerelease=s):this.prerelease=s}break}default:throw new Error(`invalid increment argument: ${t}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};Mg.exports=Rc});var Ft=v((zU,Fg)=>{"use strict";var $g=ee(),Pv=(e,t,n=!1)=>{if(e instanceof $g)return e;try{return new $g(e,t)}catch(r){if(!n)return null;throw r}};Fg.exports=Pv});var Ug=v((QU,jg)=>{"use strict";var Nv=Ft(),Ov=(e,t)=>{let n=Nv(e,t);return n?n.version:null};jg.exports=Ov});var Bg=v((ZU,Hg)=>{"use strict";var Dv=Ft(),Lv=(e,t)=>{let n=Dv(e.trim().replace(/^[=v]+/,""),t);return n?n.version:null};Hg.exports=Lv});var Gg=v((eH,Jg)=>{"use strict";var Wg=ee(),Mv=(e,t,n,r,o)=>{typeof n=="string"&&(o=r,r=n,n=void 0);try{return new Wg(e instanceof Wg?e.version:e,n).inc(t,r,o).version}catch{return null}};Jg.exports=Mv});var Vg=v((tH,Kg)=>{"use strict";var qg=Ft(),$v=(e,t)=>{let n=qg(e,null,!0),r=qg(t,null,!0),o=n.compare(r);if(o===0)return null;let s=o>0,i=s?n:r,a=s?r:n,l=!!i.prerelease.length;if(!!a.prerelease.length&&!l){if(!a.patch&&!a.minor)return"major";if(a.compareMain(i)===0)return a.minor&&!a.patch?"minor":"patch"}let u=l?"pre":"";return n.major!==r.major?u+"major":n.minor!==r.minor?u+"minor":n.patch!==r.patch?u+"patch":"prerelease"};Kg.exports=$v});var Xg=v((nH,Yg)=>{"use strict";var Fv=ee(),jv=(e,t)=>new Fv(e,t).major;Yg.exports=jv});var Qg=v((rH,zg)=>{"use strict";var Uv=ee(),Hv=(e,t)=>new Uv(e,t).minor;zg.exports=Hv});var ey=v((oH,Zg)=>{"use strict";var Bv=ee(),Wv=(e,t)=>new Bv(e,t).patch;Zg.exports=Wv});var ny=v((sH,ty)=>{"use strict";var Jv=Ft(),Gv=(e,t)=>{let n=Jv(e,t);return n&&n.prerelease.length?n.prerelease:null};ty.exports=Gv});var Ae=v((iH,oy)=>{"use strict";var ry=ee(),qv=(e,t,n)=>new ry(e,n).compare(new ry(t,n));oy.exports=qv});var iy=v((aH,sy)=>{"use strict";var Kv=Ae(),Vv=(e,t,n)=>Kv(t,e,n);sy.exports=Vv});var ly=v((lH,ay)=>{"use strict";var Yv=Ae(),Xv=(e,t)=>Yv(e,t,!0);ay.exports=Xv});var ui=v((cH,dy)=>{"use strict";var cy=ee(),zv=(e,t,n)=>{let r=new cy(e,n),o=new cy(t,n);return r.compare(o)||r.compareBuild(o)};dy.exports=zv});var py=v((dH,uy)=>{"use strict";var Qv=ui(),Zv=(e,t)=>e.sort((n,r)=>Qv(n,r,t));uy.exports=Zv});var fy=v((uH,my)=>{"use strict";var eA=ui(),tA=(e,t)=>e.sort((n,r)=>eA(r,n,t));my.exports=tA});var wo=v((pH,hy)=>{"use strict";var nA=Ae(),rA=(e,t,n)=>nA(e,t,n)>0;hy.exports=rA});var pi=v((mH,gy)=>{"use strict";var oA=Ae(),sA=(e,t,n)=>oA(e,t,n)<0;gy.exports=sA});var kc=v((fH,yy)=>{"use strict";var iA=Ae(),aA=(e,t,n)=>iA(e,t,n)===0;yy.exports=aA});var vc=v((hH,wy)=>{"use strict";var lA=Ae(),cA=(e,t,n)=>lA(e,t,n)!==0;wy.exports=cA});var mi=v((gH,Ey)=>{"use strict";var dA=Ae(),uA=(e,t,n)=>dA(e,t,n)>=0;Ey.exports=uA});var fi=v((yH,Sy)=>{"use strict";var pA=Ae(),mA=(e,t,n)=>pA(e,t,n)<=0;Sy.exports=mA});var Ac=v((wH,by)=>{"use strict";var fA=kc(),hA=vc(),gA=wo(),yA=mi(),wA=pi(),EA=fi(),SA=(e,t,n,r)=>{switch(t){case"===":return typeof e=="object"&&(e=e.version),typeof n=="object"&&(n=n.version),e===n;case"!==":return typeof e=="object"&&(e=e.version),typeof n=="object"&&(n=n.version),e!==n;case"":case"=":case"==":return fA(e,n,r);case"!=":return hA(e,n,r);case">":return gA(e,n,r);case">=":return yA(e,n,r);case"<":return wA(e,n,r);case"<=":return EA(e,n,r);default:throw new TypeError(`Invalid operator: ${t}`)}};by.exports=SA});var _y=v((EH,Ty)=>{"use strict";var bA=ee(),TA=Ft(),{safeRe:hi,t:gi}=Vn(),_A=(e,t)=>{if(e instanceof bA)return e;if(typeof e=="number"&&(e=String(e)),typeof e!="string")return null;t=t||{};let n=null;if(!t.rtl)n=e.match(t.includePrerelease?hi[gi.COERCEFULL]:hi[gi.COERCE]);else{let l=t.includePrerelease?hi[gi.COERCERTLFULL]:hi[gi.COERCERTL],c;for(;(c=l.exec(e))&&(!n||n.index+n[0].length!==e.length);)(!n||c.index+c[0].length!==n.index+n[0].length)&&(n=c),l.lastIndex=c.index+c[1].length+c[2].length;l.lastIndex=-1}if(n===null)return null;let r=n[2],o=n[3]||"0",s=n[4]||"0",i=t.includePrerelease&&n[5]?`-${n[5]}`:"",a=t.includePrerelease&&n[6]?`+${n[6]}`:"";return TA(`${r}.${o}.${s}${i}${a}`,t)};Ty.exports=_A});var ky=v((SH,Ry)=>{"use strict";var RA=Ft(),kA=Kn(),vA=ee(),AA=(e,t,n)=>{if(!kA.RELEASE_TYPES.includes(t))return null;let r=CA(e,n);return r&&xA(r,t)},CA=(e,t)=>{let n=e instanceof vA?e.version:e;return RA(n,t)},xA=(e,t)=>{if(IA(t))return e.version;switch(e.prerelease=[],t){case"major":e.minor=0,e.patch=0;break;case"minor":e.patch=0;break}return e.format()},IA=e=>e.startsWith("pre");Ry.exports=AA});var Ay=v((bH,vy)=>{"use strict";var Cc=class{constructor(){this.max=1e3,this.map=new Map}get(t){let n=this.map.get(t);if(n!==void 0)return this.map.delete(t),this.map.set(t,n),n}delete(t){return this.map.delete(t)}set(t,n){if(!this.delete(t)&&n!==void 0){if(this.map.size>=this.max){let o=this.map.keys().next().value;this.delete(o)}this.map.set(t,n)}return this}};vy.exports=Cc});var Ce=v((TH,Py)=>{"use strict";var PA=/\s+/g,xc=class e{constructor(t,n){if(n=OA(n),t instanceof e)return t.loose===!!n.loose&&t.includePrerelease===!!n.includePrerelease?t:new e(t.raw,n);if(t instanceof Ic)return this.raw=t.value,this.set=[[t]],this.formatted=void 0,this;if(this.options=n,this.loose=!!n.loose,this.includePrerelease=!!n.includePrerelease,this.raw=t.trim().replace(PA," "),this.set=this.raw.split("||").map(r=>this.parseRange(r.trim())).filter(r=>r.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){let r=this.set[0];if(this.set=this.set.filter(o=>!xy(o[0])),this.set.length===0)this.set=[r];else if(this.set.length>1){for(let o of this.set)if(o.length===1&&BA(o[0])){this.set=[o];break}}}this.formatted=void 0}get range(){if(this.formatted===void 0){this.formatted="";for(let t=0;t<this.set.length;t++){t>0&&(this.formatted+="||");let n=this.set[t];for(let r=0;r<n.length;r++)r>0&&(this.formatted+=" "),this.formatted+=n[r].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(t){t=t.replace(HA,"");let r=((this.options.includePrerelease&&jA)|(this.options.loose&&UA))+":"+t,o=Cy.get(r);if(o)return o;let s=this.options.loose,i=s?pe[te.HYPHENRANGELOOSE]:pe[te.HYPHENRANGE];t=t.replace(i,QA(this.options.includePrerelease)),j("hyphen replace",t),t=t.replace(pe[te.COMPARATORTRIM],MA),j("comparator trim",t),t=t.replace(pe[te.TILDETRIM],$A),j("tilde trim",t),t=t.replace(pe[te.CARETTRIM],FA),j("caret trim",t);let a=t.split(" ").map(d=>WA(d,this.options)).join(" ").split(/\s+/).map(d=>zA(d,this.options));s&&(a=a.filter(d=>(j("loose invalid filter",d,this.options),!!d.match(pe[te.COMPARATORLOOSE])))),j("range list",a);let l=new Map,c=a.map(d=>new Ic(d,this.options));for(let d of c){if(xy(d))return[d];l.set(d.value,d)}l.size>1&&l.has("")&&l.delete("");let u=[...l.values()];return Cy.set(r,u),u}intersects(t,n){if(!(t instanceof e))throw new TypeError("a Range is required");return this.set.some(r=>Iy(r,n)&&t.set.some(o=>Iy(o,n)&&r.every(s=>o.every(i=>s.intersects(i,n)))))}test(t){if(!t)return!1;if(typeof t=="string")try{t=new DA(t,this.options)}catch{return!1}for(let n=0;n<this.set.length;n++)if(ZA(this.set[n],t,this.options))return!0;return!1}};Py.exports=xc;var NA=Ay(),Cy=new NA,OA=ii(),Ic=Eo(),j=yo(),DA=ee(),{safeRe:pe,src:LA,t:te,comparatorTrimReplace:MA,tildeTrimReplace:$A,caretTrimReplace:FA}=Vn(),{FLAG_INCLUDE_PRERELEASE:jA,FLAG_LOOSE:UA}=Kn(),HA=new RegExp(LA[te.BUILD],"g"),xy=e=>e.value==="<0.0.0-0",BA=e=>e.value==="",Iy=(e,t)=>{let n=!0,r=e.slice(),o=r.pop();for(;n&&r.length;)n=r.every(s=>o.intersects(s,t)),o=r.pop();return n},WA=(e,t)=>(e=e.replace(pe[te.BUILD],""),j("comp",e,t),e=qA(e,t),j("caret",e),e=JA(e,t),j("tildes",e),e=VA(e,t),j("xrange",e),e=XA(e,t),j("stars",e),e),me=e=>!e||e.toLowerCase()==="x"||e==="*",JA=(e,t)=>e.trim().split(/\s+/).map(n=>GA(n,t)).join(" "),GA=(e,t)=>{let n=t.loose?pe[te.TILDELOOSE]:pe[te.TILDE];return e.replace(n,(r,o,s,i,a)=>{j("tilde",e,r,o,s,i,a);let l;return me(o)?l="":me(s)?l=`>=${o}.0.0 <${+o+1}.0.0-0`:me(i)?l=`>=${o}.${s}.0 <${o}.${+s+1}.0-0`:a?(j("replaceTilde pr",a),l=`>=${o}.${s}.${i}-${a} <${o}.${+s+1}.0-0`):l=`>=${o}.${s}.${i} <${o}.${+s+1}.0-0`,j("tilde return",l),l})},qA=(e,t)=>e.trim().split(/\s+/).map(n=>KA(n,t)).join(" "),KA=(e,t)=>{j("caret",e,t);let n=t.loose?pe[te.CARETLOOSE]:pe[te.CARET],r=t.includePrerelease?"-0":"";return e.replace(n,(o,s,i,a,l)=>{j("caret",e,o,s,i,a,l);let c;return me(s)?c="":me(i)?c=`>=${s}.0.0${r} <${+s+1}.0.0-0`:me(a)?s==="0"?c=`>=${s}.${i}.0${r} <${s}.${+i+1}.0-0`:c=`>=${s}.${i}.0${r} <${+s+1}.0.0-0`:l?(j("replaceCaret pr",l),s==="0"?i==="0"?c=`>=${s}.${i}.${a}-${l} <${s}.${i}.${+a+1}-0`:c=`>=${s}.${i}.${a}-${l} <${s}.${+i+1}.0-0`:c=`>=${s}.${i}.${a}-${l} <${+s+1}.0.0-0`):(j("no pr"),s==="0"?i==="0"?c=`>=${s}.${i}.${a}${r} <${s}.${i}.${+a+1}-0`:c=`>=${s}.${i}.${a}${r} <${s}.${+i+1}.0-0`:c=`>=${s}.${i}.${a} <${+s+1}.0.0-0`),j("caret return",c),c})},VA=(e,t)=>(j("replaceXRanges",e,t),e.split(/\s+/).map(n=>YA(n,t)).join(" ")),YA=(e,t)=>{e=e.trim();let n=t.loose?pe[te.XRANGELOOSE]:pe[te.XRANGE];return e.replace(n,(r,o,s,i,a,l)=>{j("xRange",e,r,o,s,i,a,l);let c=me(s),u=c||me(i),d=u||me(a),p=d;return o==="="&&p&&(o=""),l=t.includePrerelease?"-0":"",c?o===">"||o==="<"?r="<0.0.0-0":r="*":o&&p?(u&&(i=0),a=0,o===">"?(o=">=",u?(s=+s+1,i=0,a=0):(i=+i+1,a=0)):o==="<="&&(o="<",u?s=+s+1:i=+i+1),o==="<"&&(l="-0"),r=`${o+s}.${i}.${a}${l}`):u?r=`>=${s}.0.0${l} <${+s+1}.0.0-0`:d&&(r=`>=${s}.${i}.0${l} <${s}.${+i+1}.0-0`),j("xRange return",r),r})},XA=(e,t)=>(j("replaceStars",e,t),e.trim().replace(pe[te.STAR],"")),zA=(e,t)=>(j("replaceGTE0",e,t),e.trim().replace(pe[t.includePrerelease?te.GTE0PRE:te.GTE0],"")),QA=e=>(t,n,r,o,s,i,a,l,c,u,d,p)=>(me(r)?n="":me(o)?n=`>=${r}.0.0${e?"-0":""}`:me(s)?n=`>=${r}.${o}.0${e?"-0":""}`:i?n=`>=${n}`:n=`>=${n}${e?"-0":""}`,me(c)?l="":me(u)?l=`<${+c+1}.0.0-0`:me(d)?l=`<${c}.${+u+1}.0-0`:p?l=`<=${c}.${u}.${d}-${p}`:e?l=`<${c}.${u}.${+d+1}-0`:l=`<=${l}`,`${n} ${l}`.trim()),ZA=(e,t,n)=>{for(let r=0;r<e.length;r++)if(!e[r].test(t))return!1;if(t.prerelease.length&&!n.includePrerelease){for(let r=0;r<e.length;r++)if(j(e[r].semver),e[r].semver!==Ic.ANY&&e[r].semver.prerelease.length>0){let o=e[r].semver;if(o.major===t.major&&o.minor===t.minor&&o.patch===t.patch)return!0}return!1}return!0}});var Eo=v((_H,$y)=>{"use strict";var So=Symbol("SemVer ANY"),Oc=class e{static get ANY(){return So}constructor(t,n){if(n=Ny(n),t instanceof e){if(t.loose===!!n.loose)return t;t=t.value}t=t.trim().split(/\s+/).join(" "),Nc("comparator",t,n),this.options=n,this.loose=!!n.loose,this.parse(t),this.semver===So?this.value="":this.value=this.operator+this.semver.version,Nc("comp",this)}parse(t){let n=this.options.loose?Oy[Dy.COMPARATORLOOSE]:Oy[Dy.COMPARATOR],r=t.match(n);if(!r)throw new TypeError(`Invalid comparator: ${t}`);this.operator=r[1]!==void 0?r[1]:"",this.operator==="="&&(this.operator=""),r[2]?this.semver=new Ly(r[2],this.options.loose):this.semver=So}toString(){return this.value}test(t){if(Nc("Comparator.test",t,this.options.loose),this.semver===So||t===So)return!0;if(typeof t=="string")try{t=new Ly(t,this.options)}catch{return!1}return Pc(t,this.operator,this.semver,this.options)}intersects(t,n){if(!(t instanceof e))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new My(t.value,n).test(this.value):t.operator===""?t.value===""?!0:new My(this.value,n).test(t.semver):(n=Ny(n),n.includePrerelease&&(this.value==="<0.0.0-0"||t.value==="<0.0.0-0")||!n.includePrerelease&&(this.value.startsWith("<0.0.0")||t.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&t.operator.startsWith(">")||this.operator.startsWith("<")&&t.operator.startsWith("<")||this.semver.version===t.semver.version&&this.operator.includes("=")&&t.operator.includes("=")||Pc(this.semver,"<",t.semver,n)&&this.operator.startsWith(">")&&t.operator.startsWith("<")||Pc(this.semver,">",t.semver,n)&&this.operator.startsWith("<")&&t.operator.startsWith(">")))}};$y.exports=Oc;var Ny=ii(),{safeRe:Oy,t:Dy}=Vn(),Pc=Ac(),Nc=yo(),Ly=ee(),My=Ce()});var bo=v((RH,Fy)=>{"use strict";var eC=Ce(),tC=(e,t,n)=>{try{t=new eC(t,n)}catch{return!1}return t.test(e)};Fy.exports=tC});var Uy=v((kH,jy)=>{"use strict";var nC=Ce(),rC=(e,t)=>new nC(e,t).set.map(n=>n.map(r=>r.value).join(" ").trim().split(" "));jy.exports=rC});var By=v((vH,Hy)=>{"use strict";var oC=ee(),sC=Ce(),iC=(e,t,n)=>{let r=null,o=null,s=null;try{s=new sC(t,n)}catch{return null}return e.forEach(i=>{s.test(i)&&(!r||o.compare(i)===-1)&&(r=i,o=new oC(r,n))}),r};Hy.exports=iC});var Jy=v((AH,Wy)=>{"use strict";var aC=ee(),lC=Ce(),cC=(e,t,n)=>{let r=null,o=null,s=null;try{s=new lC(t,n)}catch{return null}return e.forEach(i=>{s.test(i)&&(!r||o.compare(i)===1)&&(r=i,o=new aC(r,n))}),r};Wy.exports=cC});var Ky=v((CH,qy)=>{"use strict";var Dc=ee(),dC=Ce(),Gy=wo(),uC=(e,t)=>{e=new dC(e,t);let n=new Dc("0.0.0");if(e.test(n)||(n=new Dc("0.0.0-0"),e.test(n)))return n;n=null;for(let r=0;r<e.set.length;++r){let o=e.set[r],s=null;o.forEach(i=>{let a=new Dc(i.semver.version);switch(i.operator){case">":a.prerelease.length===0?a.patch++:a.prerelease.push(0),a.raw=a.format();case"":case">=":(!s||Gy(a,s))&&(s=a);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${i.operator}`)}}),s&&(!n||Gy(n,s))&&(n=s)}return n&&e.test(n)?n:null};qy.exports=uC});var Yy=v((xH,Vy)=>{"use strict";var pC=Ce(),mC=(e,t)=>{try{return new pC(e,t).range||"*"}catch{return null}};Vy.exports=mC});var yi=v((IH,Zy)=>{"use strict";var fC=ee(),Qy=Eo(),{ANY:hC}=Qy,gC=Ce(),yC=bo(),Xy=wo(),zy=pi(),wC=fi(),EC=mi(),SC=(e,t,n,r)=>{e=new fC(e,r),t=new gC(t,r);let o,s,i,a,l;switch(n){case">":o=Xy,s=wC,i=zy,a=">",l=">=";break;case"<":o=zy,s=EC,i=Xy,a="<",l="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(yC(e,t,r))return!1;for(let c=0;c<t.set.length;++c){let u=t.set[c],d=null,p=null;if(u.forEach(m=>{m.semver===hC&&(m=new Qy(">=0.0.0")),d=d||m,p=p||m,o(m.semver,d.semver,r)?d=m:i(m.semver,p.semver,r)&&(p=m)}),d.operator===a||d.operator===l||(!p.operator||p.operator===a)&&s(e,p.semver))return!1;if(p.operator===l&&i(e,p.semver))return!1}return!0};Zy.exports=SC});var tw=v((PH,ew)=>{"use strict";var bC=yi(),TC=(e,t,n)=>bC(e,t,">",n);ew.exports=TC});var rw=v((NH,nw)=>{"use strict";var _C=yi(),RC=(e,t,n)=>_C(e,t,"<",n);nw.exports=RC});var iw=v((OH,sw)=>{"use strict";var ow=Ce(),kC=(e,t,n)=>(e=new ow(e,n),t=new ow(t,n),e.intersects(t,n));sw.exports=kC});var lw=v((DH,aw)=>{"use strict";var vC=bo(),AC=Ae();aw.exports=(e,t,n)=>{let r=[],o=null,s=null,i=e.sort((u,d)=>AC(u,d,n));for(let u of i)vC(u,t,n)?(s=u,o||(o=u)):(s&&r.push([o,s]),s=null,o=null);o&&r.push([o,null]);let a=[];for(let[u,d]of r)u===d?a.push(u):!d&&u===i[0]?a.push("*"):d?u===i[0]?a.push(`<=${d}`):a.push(`${u} - ${d}`):a.push(`>=${u}`);let l=a.join(" || "),c=typeof t.raw=="string"?t.raw:String(t);return l.length<c.length?l:t}});var fw=v((LH,mw)=>{"use strict";var cw=Ce(),$c=Eo(),{ANY:Lc}=$c,Mc=bo(),Fc=Ae(),CC=(e,t,n={})=>{if(e===t)return!0;e=new cw(e,n),t=new cw(t,n);let r=!1;e:for(let o of e.set){for(let s of t.set){let i=IC(o,s,n);if(r=r||i!==null,i)continue e}if(r)return!1}return!0},xC=[new $c(">=0.0.0-0")],dw=[new $c(">=0.0.0")],IC=(e,t,n)=>{if(e===t)return!0;if(e.length===1&&e[0].semver===Lc){if(t.length===1&&t[0].semver===Lc)return!0;n.includePrerelease?e=xC:e=dw}if(t.length===1&&t[0].semver===Lc){if(n.includePrerelease)return!0;t=dw}let r=new Set,o,s;for(let m of e)m.operator===">"||m.operator===">="?o=uw(o,m,n):m.operator==="<"||m.operator==="<="?s=pw(s,m,n):r.add(m.semver);if(r.size>1)return null;let i;if(o&&s){if(i=Fc(o.semver,s.semver,n),i>0)return null;if(i===0&&(o.operator!==">="||s.operator!=="<="))return null}for(let m of r){if(o&&!Mc(m,String(o),n)||s&&!Mc(m,String(s),n))return null;for(let h of t)if(!Mc(m,String(h),n))return!1;return!0}let a,l,c,u,d=s&&!n.includePrerelease&&s.semver.prerelease.length?s.semver:!1,p=o&&!n.includePrerelease&&o.semver.prerelease.length?o.semver:!1;d&&d.prerelease.length===1&&s.operator==="<"&&d.prerelease[0]===0&&(d=!1);for(let m of t){if(u=u||m.operator===">"||m.operator===">=",c=c||m.operator==="<"||m.operator==="<=",o){if(p&&m.semver.prerelease&&m.semver.prerelease.length&&m.semver.major===p.major&&m.semver.minor===p.minor&&m.semver.patch===p.patch&&(p=!1),m.operator===">"||m.operator===">="){if(a=uw(o,m,n),a===m&&a!==o)return!1}else if(o.operator===">="&&!m.test(o.semver))return!1}if(s){if(d&&m.semver.prerelease&&m.semver.prerelease.length&&m.semver.major===d.major&&m.semver.minor===d.minor&&m.semver.patch===d.patch&&(d=!1),m.operator==="<"||m.operator==="<="){if(l=pw(s,m,n),l===m&&l!==s)return!1}else if(s.operator==="<="&&!m.test(s.semver))return!1}if(!m.operator&&(s||o)&&i!==0)return!1}return!(o&&c&&!s&&i!==0||s&&u&&!o&&i!==0||p||d)},uw=(e,t,n)=>{if(!e)return t;let r=Fc(e.semver,t.semver,n);return r>0?e:r<0||t.operator===">"&&e.operator===">="?t:e},pw=(e,t,n)=>{if(!e)return t;let r=Fc(e.semver,t.semver,n);return r<0?e:r>0||t.operator==="<"&&e.operator==="<="?t:e};mw.exports=CC});var ww=v((MH,yw)=>{"use strict";var jc=Vn(),hw=Kn(),PC=ee(),gw=Tc(),NC=Ft(),OC=Ug(),DC=Bg(),LC=Gg(),MC=Vg(),$C=Xg(),FC=Qg(),jC=ey(),UC=ny(),HC=Ae(),BC=iy(),WC=ly(),JC=ui(),GC=py(),qC=fy(),KC=wo(),VC=pi(),YC=kc(),XC=vc(),zC=mi(),QC=fi(),ZC=Ac(),ex=_y(),tx=ky(),nx=Eo(),rx=Ce(),ox=bo(),sx=Uy(),ix=By(),ax=Jy(),lx=Ky(),cx=Yy(),dx=yi(),ux=tw(),px=rw(),mx=iw(),fx=lw(),hx=fw();yw.exports={parse:NC,valid:OC,clean:DC,inc:LC,diff:MC,major:$C,minor:FC,patch:jC,prerelease:UC,compare:HC,rcompare:BC,compareLoose:WC,compareBuild:JC,sort:GC,rsort:qC,gt:KC,lt:VC,eq:YC,neq:XC,gte:zC,lte:QC,cmp:ZC,coerce:ex,truncate:tx,Comparator:nx,Range:rx,satisfies:ox,toComparators:sx,maxSatisfying:ix,minSatisfying:ax,minVersion:lx,validRange:cx,outside:dx,gtr:ux,ltr:px,intersects:mx,simplifyRange:fx,subset:hx,SemVer:PC,re:jc.re,src:jc.src,tokens:jc.t,SEMVER_SPEC_VERSION:hw.SEMVER_SPEC_VERSION,RELEASE_TYPES:hw.RELEASE_TYPES,compareIdentifiers:gw.compareIdentifiers,rcompareIdentifiers:gw.rcompareIdentifiers}});var Mw={};mr(Mw,{POST_MERGE_MARKER_START:()=>xo,POST_REWRITE_MARKER_START:()=>Ao,PREPARE_MSG_MARKER_START:()=>Co,PRE_PUSH_MARKER_START:()=>Io,installGitHook:()=>zc,installPostMergeHook:()=>ed,installPostRewriteHook:()=>Qc,installPrePushHook:()=>td,installPrepareMsgHook:()=>Zc,isGitHookInstalled:()=>Dw,isGitPipelineFullyInstalled:()=>Lw,isHookSectionInstalled:()=>Zn,removeGitHook:()=>nd,removePostMergeHook:()=>sd,removePostRewriteHook:()=>rd,removePrePushHook:()=>id,removePrepareMsgHook:()=>od});async function zc(e){let t=await kn(e),n=(0,er.join)(t,"post-commit"),r=Et("post-commit"),o=[Qn,r,Xc].join(`
`),s,i="";try{if(i=await(0,z.readFile)(n,"utf-8"),i.includes(Qn)){let l=new RegExp(`\\n*${jt(Qn)}[\\s\\S]*?${jt(Xc)}\\n*`,"g"),u=`${i.replace(l,`
`).trimEnd()}

${o}
`;return i===u?(await ki(n),{path:n}):(await N(n,u),await(0,z.chmod)(n,493),{path:n})}s="Existing post-commit hook found \u2014 Jolli Memory section appended",Ti.warn(s)}catch{}let a;i?a=`${i}

${o}
`:a=`#!/bin/sh

${o}
`,await(0,z.mkdir)(t,{recursive:!0}),await N(n,a);try{await(0,z.chmod)(n,493)}catch{}return Ti.info("Git post-commit hook installed"),{warning:s,path:n}}async function Qc(e){let t=Et("post-rewrite",'"$1"'),n=[Ao,t,Iw].join(`
`);return _i(e,"post-rewrite",n,Ao)}async function Zc(e){let t='"$HOME/.jolli/jollimemory/run-hook"',n=["__jolli_prepare_msg_previous_status=$?",`if [ -x ${t} ]; then ${t} prepare-commit-msg "$1" "$2" || true; fi`,'(exit "$__jolli_prepare_msg_previous_status")'].join(`
`),r=[Co,n,Pw].join(`
`);return _i(e,"prepare-commit-msg",r,Co)}async function ed(e){let t=Et("post-merge"),n=[xo,t,Nw].join(`
`);return _i(e,"post-merge",n,xo)}async function td(e){let t='"$HOME/.jolli/jollimemory/run-hook"',n=["__jolli_pre_push_previous_status=$?",`if [ -x ${t} ]; then ${t} pre-push "$@" || true; fi`,'(exit "$__jolli_pre_push_previous_status")'].join(`
`),r=[Io,n,Ow].join(`
`);return _i(e,"pre-push",r,Io)}async function _i(e,t,n,r){let o=n.slice(n.lastIndexOf(`
`)+1),s=await kn(e),i=(0,er.join)(s,t),a,l="";try{if(l=await(0,z.readFile)(i,"utf-8"),l.includes(r)){let u=new RegExp(`\\n*${jt(r)}[\\s\\S]*?${jt(o)}\\n*`,"g"),p=`${l.replace(u,`
`).trimEnd()}

${n}
`;return l===p?(await ki(i),{path:i}):(await N(i,p),await(0,z.chmod)(i,493),{path:i})}a=`Existing ${t} hook found \u2014 Jolli Memory section appended`,Ti.warn(a)}catch{}let c;l?c=`${l}

${n}
`:c=`#!/bin/sh

${n}
`,await(0,z.mkdir)(s,{recursive:!0}),await N(i,c);try{await(0,z.chmod)(i,493)}catch{}return Ti.info("Git %s hook installed",t),{warning:a,path:i}}async function nd(e){let t;try{let s=await kn(e);t=(0,er.join)(s,"post-commit")}catch{return{}}let n;try{n=await(0,z.readFile)(t,"utf-8")}catch{return{}}if(!n.includes(Qn))return{};let r=new RegExp(`\\n*${jt(Qn)}[\\s\\S]*?${jt(Xc)}\\n*`,"g"),o=n.replace(r,`
`);if(o.trim()==="#!/bin/sh"||o.trim()===""){let{rm:s}=await import("node:fs/promises");await s(t,{force:!0})}else await N(t,o),await ki(t);return{}}async function rd(e){await Ri(e,"post-rewrite",Ao,Iw)}async function od(e){await Ri(e,"prepare-commit-msg",Co,Pw)}async function sd(e){await Ri(e,"post-merge",xo,Nw)}async function id(e){await Ri(e,"pre-push",Io,Ow)}async function Ri(e,t,n,r){let o;try{o=await kn(e)}catch{return}let s=(0,er.join)(o,t),i;try{i=await(0,z.readFile)(s,"utf-8")}catch{return}if(!i.includes(n))return;let a=new RegExp(`\\n*${jt(n)}[\\s\\S]*?${jt(r)}\\n*`,"g"),l=i.replace(a,`
`);if(l.trim()==="#!/bin/sh"||l.trim()===""){let{rm:c}=await import("node:fs/promises");await c(s,{force:!0})}else await N(s,l),await ki(s)}async function Dw(e){return Zn(e,"post-commit",Qn)}async function Lw(e){return await Dw(e)&&await Zn(e,"post-rewrite",Ao)&&await Zn(e,"prepare-commit-msg",Co)&&await Zn(e,"post-merge",xo)}async function Zn(e,t,n){try{let r=await kn(e),o=(0,er.join)(r,t);return(await(0,z.readFile)(o,"utf-8")).includes(n)?process.platform==="win32"?!0:((await(0,z.stat)(o)).mode&73)!==0:!1}catch{return!1}}function jt(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}async function ki(e){try{((await(0,z.stat)(e)).mode&73)===0&&await(0,z.chmod)(e,493)}catch{}}var z,er,Ti,Qn,Xc,Ao,Iw,Co,Pw,xo,Nw,Io,Ow,ad=y(()=>{"use strict";z=require("node:fs/promises"),er=require("node:path");oe();ye();w();ri();Ti=f("GitHookInstaller"),Qn="# >>> JolliMemory post-commit hook >>>",Xc="# <<< JolliMemory post-commit hook <<<",Ao="# >>> JolliMemory post-rewrite hook >>>",Iw="# <<< JolliMemory post-rewrite hook <<<",Co="# >>> JolliMemory prepare-commit-msg hook >>>",Pw="# <<< JolliMemory prepare-commit-msg hook <<<",xo="# >>> JolliMemory post-merge hook >>>",Nw="# <<< JolliMemory post-merge hook <<<",Io="# >>> JolliMemory pre-push hook >>>",Ow="# <<< JolliMemory pre-push hook <<<"});function ZE(){return"0.99.14"}function XE(e){return/^\d/.test(e)}function eS(e,t){if(!XE(e)||!XE(t))return!1;let n=s=>s.split(".").map(i=>Number.parseInt(i,10)||0),r=n(e),o=n(t);for(let s=0;s<Math.max(r.length,o.length);s++){let i=r[s]??0,a=o[s]??0;if(i!==a)return i>a}return!1}function Gi(e,t=zI){return new Promise(n=>{let r=Buffer.alloc(0),o=!1,s=c=>{o||(o=!0,clearTimeout(l),e.removeListener("data",i),e.removeListener("close",a),e.removeListener("error",a),n(c))},i=c=>{r=Buffer.concat([r,c]);let u=r.indexOf(10);if(u===-1){r.length>QI&&s(void 0);return}s({line:r.subarray(0,u).toString("utf8"),rest:r.subarray(u+1)})},a=()=>s(void 0),l=setTimeout(()=>s(void 0),t);l.unref?.(),e.on("data",i),e.once("close",a),e.once("error",a)})}function tS(e,t){return(0,ur.join)((0,zE.tmpdir)(),`.jolli-${e}-${t}`)}function Nd(e){return`${JSON.stringify(e)}
`}var Pd,zE,ur,QE,Id,zI,QI,Od=y(()=>{"use strict";Pd=require("node:fs"),zE=require("node:os"),ur=require("node:path"),QE=require("node:url");ne();zI=1e4,QI=4096});function tP(e){let t=(0,fn.join)((0,fn.dirname)((0,Ld.fileURLToPath)(e)),ZI);return(0,Dd.existsSync)(t)?t:void 0}function Md(e,t=process.argv[1],n=process.execArgv){let r=tP(e);if(r)return{entry:r,nodeArgs:[]};let o=(0,fn.dirname)((0,Ld.fileURLToPath)(e)),s=(0,fn.join)((0,fn.dirname)(o),eP);if(t?.endsWith(".ts")&&(0,Dd.existsSync)(s))return{entry:s,nodeArgs:n}}var Dd,fn,Ld,ZI,eP,nS=y(()=>{"use strict";Dd=require("node:fs"),fn=require("node:path"),Ld=require("node:url"),ZI="Cli.js",eP="Cli.ts"});function rP(e){return tS("global",e)}function oP(e=(0,oS.homedir)()){return(0,rS.createHash)("sha256").update(yr(e,"win32")).digest("hex").slice(0,16)}function qi(e={}){if((e.platform??process.platform)==="win32")return`\\\\.\\pipe\\jolli-global-${oP(e.home)}`;let n=e.uid??process.getuid?.()??0;return(0,sS.join)(rP(n),"daemon.sock")}function jd(e){let t;try{t=JSON.parse(e)}catch{return}if(typeof t!="object"||t===null)return;let{t:n,protocol:r,version:o,pid:s,startedAt:i}=t;if(!(n!=="hello"||r!==nP)&&!(typeof o!="string"||typeof s!="number"||typeof i!="number"))return{t:"hello",protocol:r,version:o,pid:s,startedAt:i}}var rS,oS,sS,nP,$d,Fd,iS=y(()=>{"use strict";rS=require("node:crypto"),oS=require("node:os"),sS=require("node:path");Od();ne();nP=1,$d="global-daemon",Fd=300});var Jd={};mr(Jd,{GLOBAL_DAEMON_ENSURE_COMMAND:()=>Hd,ensureGlobalDaemon:()=>lP,probeGlobalDaemon:()=>uP,retireGlobalDaemon:()=>dP,shouldSkipGlobalDaemon:()=>Bd,triggerEnsureGlobalDaemon:()=>cP});function Bd(e){return e!==null&&iP.has(e)}function Wd(e){return new Promise(t=>{let n=!1,r=(0,lS.connect)(e),o=i=>{n||(n=!0,clearTimeout(s),r.removeAllListeners("connect"),i.socket===void 0&&r.destroy(),t(i))},s=setTimeout(()=>o({socket:void 0}),sP);s.unref?.(),r.once("connect",()=>o({socket:r})),r.on("error",i=>{if(n){Fe.warn("global daemon socket error after connect: %s",k(i));return}o({socket:void 0,code:i.code})})})}async function aP(e){if(!e.startsWith("\\\\.\\pipe\\"))try{await(0,aS.unlink)(e)}catch{}}async function lP(e={}){try{if(Bd(e.command??null))return"skipped-excluded-command";if(!Xt(e.nodeVersion??process.versions.node))return"skipped-unsupported-node";let t=e.socketPath??qi(),{socket:n,code:r}=await Wd(t);if(!n)return r==="ECONNREFUSED"&&await aP(t),(e.spawnDaemon??pP)(t),"spawned";try{let o=await Gi(n,e.helloTimeoutMs??Fd),s=o?jd(o.line):void 0;if(!s)return"already-running";let i=e.ownVersion??ZE();return eS(i,s.version)?(n.write(Nd({t:"retire"})),Fe.info("retiring global daemon pid %d (v%s < v%s)",s.pid,s.version,i),"retired-incumbent"):"already-running"}finally{n.end()}}catch(t){return Fe.warn("could not ensure the global daemon: %s",k(t)),"failed"}}function cP(e={}){try{return Bd(e.command??null)||!Xt(e.nodeVersion??process.versions.node)?!1:(mP(e.socketPath),!0)}catch(t){return Fe.warn("could not trigger the global daemon ensure helper: %s",k(t)),!1}}async function dP(e={}){try{let{socket:t}=await Wd(e.socketPath??qi());return t?(await Gi(t,Fd),t.write(Nd({t:"retire"})),t.end(),!0):!1}catch(t){return Fe.warn("could not retire the global daemon: %s",k(t)),!1}}async function uP(e){try{let{socket:t}=await Wd(e??qi());if(!t)return;try{let n=await Gi(t,5e3);return n?jd(n.line):void 0}finally{t.end()}}catch{return}}function pP(e){let t=Md(__jmImportMetaUrl);if(!t){Fe.warn("Cannot locate the CLI entry to spawn the global daemon");return}let n=lt(process.execPath,[...t.nodeArgs,t.entry,$d,"--socket",e],{detached:!0,stdio:"ignore",cwd:(0,Ud.homedir)()});n.on("error",r=>Fe.warn("global daemon failed to spawn: %s",k(r))),n.unref(),Fe.info("spawned global daemon (pid %d)",n.pid??-1)}function mP(e){let t=Md(__jmImportMetaUrl);if(!t){Fe.warn("Cannot locate the CLI entry to spawn the global daemon ensure helper");return}let n=[...t.nodeArgs,t.entry,Hd];e&&n.push("--socket",e);let r=lt(process.execPath,n,{detached:!0,stdio:"ignore",cwd:(0,Ud.homedir)()});r.on("error",o=>Fe.warn("global daemon ensure helper failed to start: %s",k(o))),r.unref(),Fe.info("spawned global daemon ensure helper (pid %d)",r.pid??-1)}var aS,lS,Ud,Fe,Hd,sP,iP,Gd=y(()=>{"use strict";aS=require("node:fs/promises"),lS=require("node:net"),Ud=require("node:os");Od();Ot();w();nS();Se();iS();Fe=f("EnsureGlobalDaemon"),Hd="global-daemon-ensure",sP=200,iP=new Set([$d,Hd,"mcp","mcp-serve","daemon","uninstall","disable"])});var MP={};mr(MP,{buildCodexBootstrapOutput:()=>ES,main:()=>bS,runCodexPluginBootstrap:()=>SS});module.exports=xS(MP);var Fo=require("node:path"),wS=require("node:url");var vt=require("node:fs"),Zd=require("node:os"),Ho=require("node:path"),Ne="JOLLI_LOCAL_AGENT_CHILD",eu=".jolli-local-agent-child",tu="jolli-localagent-";function He(){let e=(0,vt.mkdtempSync)((0,Ho.join)((0,Zd.tmpdir)(),tu));try{(0,vt.writeFileSync)((0,Ho.join)(e,eu),"","utf-8")}catch(t){throw(0,vt.rmSync)(e,{recursive:!0,force:!0}),t}return e}function En(e=process.env,t){return e[Ne]==="1"?!0:t!==void 0&&(0,vt.existsSync)((0,Ho.join)(t,eu))}ye();Je();Ge();le();var Ni=require("node:fs/promises"),dn=require("node:path"),gE=require("node:url");var ja=require("node:fs"),Hp=require("node:fs/promises"),Ua=require("node:os"),Dr=require("node:path");w();qe();var KO=f("AntigravityDetector"),Bp=["antigravity","antigravity-ide","antigravity-cli"];function Wp(e=(0,Ua.homedir)()){let t=[];for(let n of Bp){let r=(0,Dr.join)(e,".gemini",n),o=(0,Dr.join)(r,"conversations");(0,ja.existsSync)(o)&&t.push({variant:n,root:r,conversationsDir:o,brainDir:(0,Dr.join)(r,"brain")})}return t}async function ET(e){for(let t of Wp(e))try{if((await(0,Hp.readdir)(t.conversationsDir)).some(n=>n.endsWith(".db")))return!0}catch{}return!1}async function Jp(e=(0,Ua.homedir)()){return await ET(e)?!0:Bp.some(t=>(0,ja.existsSync)((0,Dr.join)(e,".gemini",t)))}w();On();var as="mcp__";function Lr(e){return{name:e,kind:"builtin",calls:0}}function Ba(e){return{name:e,kind:"skill",calls:0}}function Dn(e,t){return{name:t?`${e}.${t}`:e,kind:"mcp",server:e,calls:0}}function ls(e){if(!e.startsWith(as))return Lr(e);let t=e.slice(as.length),n=t.indexOf("__");return n===-1?Dn(t,""):Dn(t.slice(0,n),t.slice(n+2))}function Gp(e,t){if(t===void 0||t.length===0)return Lr(e);if(!t.startsWith(as))return Dn(t,e);let n=t.slice(as.length).split("__"),r=n[n.length-1]||n[0]||t;return Dn(r,e)}function TT(e,t){let n=Math.max(e.lastCallAtMs??Number.NEGATIVE_INFINITY,t.lastCallAtMs??Number.NEGATIVE_INFINITY);return Number.isFinite(n)?{lastCallAtMs:n}:{}}var Kt=class{constructor(){this.byKey=new Map;this.seen=new Set}add(t,n=1){let r=`${t.kind}:${t.name}`,o=this.byKey.get(r);if(!o){this.byKey.set(r,{...t,calls:n});return}this.byKey.set(r,{...o,calls:o.calls+n,...TT(o,t)})}addOnce(t,n){if(t!==void 0){if(this.seen.has(t))return;this.seen.add(t)}this.add(n)}hasSeen(t){return this.seen.has(t)}values(){return[...this.byKey.values()]}};w();w();var _T=new Set(["vitest","jest","mocha","pytest","rspec","phpunit","pest","tox","nose2","unittest","ava","tape","karma","jasmine","cypress"]),RT=new Set(["go test","cargo test","cargo nextest","mix test","dart test","flutter test","dotnet test","bazel test","playwright test"]),kT=new Set(["npm","pnpm","yarn","bun","deno","make"]),vT=/&&|\|\||[;&|]|\n/,AT=/^[A-Za-z_][A-Za-z0-9_]*=/;function Wa(e,t){return e===void 0?!1:_T.has(e)?!0:t!==void 0&&RT.has(`${e} ${t}`)}function CT(e){let t=e.split(/\s+/).filter(i=>i.length>0),n=0;for(;n<t.length&&AT.test(t[n]);)n+=1;if(n>=t.length)return!1;let r=t[n],o=t[n+1],s=t[n+2];return!!(r==="npx"&&Wa(o,s)||(r==="python"||r==="python3")&&o==="-m"&&Wa(s,t[n+3])||Wa(r,o)||kT.has(r)&&(o==="test"||o==="t"||o==="run"&&(s==="test"||s==="t")))}function Ja(e){for(let t of e.split(vT))if(CT(t))return!0;return!1}function Vt(e){if(e===void 0)return;let t=Date.parse(e);return Number.isFinite(t)?t:void 0}function qp(...e){let t=e.filter(n=>n!==void 0);return t.length>0?{lastCallAtMs:Math.max(...t)}:{}}function xT(e){let t=0;for(let n of e)n.type==="tool_result"&&t++;return t}var zp=f("TranscriptParser"),cs=class{parseLine(t,n){return Zp(t,n)}parseUsageTokens(t,n){let r=Xp(t);return r?{input:r.input,output:r.output,cached:r.cached,...r.id&&{dedupKey:r.id},...r.model&&{model:r.model}}:{input:0,output:0,cached:0}}parseUsageByModel(t){let n=new Map,r=new Set;for(let o of t){let s=Xp(o);if(!s)continue;if(s.id){if(r.has(s.id))continue;r.add(s.id)}let i=n.get(s.model);i?n.set(s.model,{...i,input:i.input+s.input,output:i.output+s.output,cached:i.cached+s.cached}):n.set(s.model,{model:s.model,provider:"anthropic",input:s.input,output:s.output,cached:s.cached})}return[...n.values()].filter(o=>o.input+o.output+o.cached>0)}parseToolUse(t){let n=new Kt,r=[],o=new Map;for(let s of t){let i;try{i=JSON.parse(s)}catch{continue}let a=i,l=a?.message?.content;if(!Array.isArray(l))continue;let c=a.toolUseResult?.commandName,u=typeof c=="string"&&c.length>0?c:void 0,d=xT(l)===1,p=Vt(this.parseTimestamp(s));for(let m of l){let h=m;if(h.type==="tool_result"){u!==void 0&&d&&typeof h.tool_use_id=="string"&&o.set(h.tool_use_id,u);continue}if(h.type!=="tool_use"||typeof h.name!="string")continue;let g=typeof h.id=="string"?h.id:void 0;if(h.name==="Skill"&&typeof h.input?.skill=="string"){r.push({...g!==void 0?{id:g}:{},requested:h.input.skill,...p!==void 0?{atMs:p}:{}});continue}n.addOnce(g,{...ls(h.name),...p!==void 0&&{lastCallAtMs:p}})}}for(let s of r)n.addOnce(s.id,{...Ba((s.id!==void 0?o.get(s.id):void 0)??s.requested),...s.atMs!==void 0&&{lastCallAtMs:s.atMs}});return n.values()}parseTimestamp(t,n){try{let r=JSON.parse(t);return typeof r.timestamp=="string"?r.timestamp:void 0}catch{return}}parseCompactions(t){let n=new Set;for(let r of t){let o;try{o=JSON.parse(r)}catch{continue}if(o.isCompactSummary!==!0)continue;let s=Vt(this.parseTimestamp(r));s!==void 0&&n.add(s)}return[...n].sort((r,o)=>r-o)}parseTestRuns(t){let n=new Set;for(let r of t){let o;try{o=JSON.parse(r)}catch{continue}let s=o.message?.content;if(Array.isArray(s))for(let i of s){let a=i;if(a.type!=="tool_use"||a.name!=="Bash"||typeof a.input?.command!="string"||!Ja(a.input.command))continue;let l=Vt(this.parseTimestamp(r));l!==void 0&&n.add(l)}}return[...n].sort((r,o)=>r-o)}},IT=new Set(["compacted","context_compacted"]);function Kp(e,t){let n=new Set;for(let r of e){let o;try{o=JSON.parse(r)}catch{continue}let s=o?.payload;if(s===null||typeof s!="object")continue;let i=s.type;if(typeof i!="string"||!t.has(i))continue;let a=o.timestamp,l=Vt(typeof a=="string"?a:void 0);l!==void 0&&n.add(l)}return[...n].sort((r,o)=>r-o)}var Ga=class{parseLine(t,n){try{let r=JSON.parse(t),o=typeof r.timestamp=="string"?r.timestamp:void 0;if(r.type!=="response_item")return null;let s=r.payload;if(!s||typeof s!="object"||s.type!=="message")return null;let i=s.role;if(i!=="user"&&i!=="assistant")return null;let a=MT(s.content);if(a===null)return null;let l=UT(a);return l.length===0?null:i==="user"?FT(l)?null:{role:"human",content:l,timestamp:o}:{role:"assistant",content:l,timestamp:o}}catch(r){return zp.debug("Failed to parse Codex transcript line %d: %s",n,r.message),null}}parseToolUse(t){let n=new Map,r=[];for(let s of t){let i;try{i=JSON.parse(s)}catch{continue}let a=i?.payload;if(a===null||typeof a!="object")continue;let l=a;if(typeof l.type!="string"||!PT.has(l.type))continue;let c=typeof l.invocation?.tool=="string"?l.invocation.tool:void 0,u=typeof l.invocation?.server=="string"?l.invocation.server:"",d;if(c!==void 0)d=u?Dn(u,c):Lr(c);else if(typeof l.name=="string"&&l.name.length>0)d=Gp(l.name,typeof l.namespace=="string"?l.namespace:void 0);else continue;let p=i.timestamp,m=Vt(typeof p=="string"?p:void 0),h={...d,...m!==void 0&&{lastCallAtMs:m}},g=typeof l.call_id=="string"?l.call_id:void 0;if(g===void 0){r.push(h);continue}let S=n.get(g),E=S===void 0||S.kind!=="mcp"&&h.kind==="mcp"?h:S;n.set(g,{...E,...S?qp(S.lastCallAtMs,h.lastCallAtMs):qp(h.lastCallAtMs)})}let o=new Kt;for(let s of[...n.values(),...r])o.add(s);return o.values()}parseUnrecognizedRows(t){let n=0;for(let r of t){let o;try{o=JSON.parse(r)}catch{continue}if(o?.type!=="response_item")continue;let s=o.payload;if(s===null||typeof s!="object")continue;let i=s.type;if(typeof i=="string"){if(!NT.has(i)){n++;continue}i==="message"&&LT(s)&&n++}}return n}parseCompactions(t){return Kp(t,IT)}parseTurnAborts(t){return Kp(t,new Set(["turn_aborted"]))}parseTestRuns(t){let n=new Set;for(let r of t){let o;try{o=JSON.parse(r)}catch{continue}let s=o?.payload;if(s===null||typeof s!="object")continue;let i=s;if(i.type!=="function_call"||i.name!=="exec_command")continue;let a;try{a=(typeof i.arguments=="string"?JSON.parse(i.arguments):{}).cmd}catch{continue}if(typeof a!="string"||!Ja(a))continue;let l=o.timestamp,c=Vt(typeof l=="string"?l:void 0);c!==void 0&&n.add(c)}return[...n].sort((r,o)=>r-o)}},PT=new Set(["function_call","custom_tool_call","local_shell_call","web_search_call","mcp_tool_call_end"]),NT=new Set(["message","reasoning","function_call","function_call_output","custom_tool_call","custom_tool_call_output","local_shell_call","local_shell_call_output","tool_search_call","tool_search_output","web_search_call","mcp_tool_call_begin","mcp_tool_call_end"]),qa=class{parseLine(t,n){try{let r=JSON.parse(t),o=r.type,s=Yp(r);if(o==="turn.prompt"){let a=Qp(r.input)?.trim();return a?{role:"human",content:a,timestamp:s}:null}let i=DT(r);if(i&&i.type==="text"){let a=typeof i.text=="string"?i.text.trim():"";return a?{role:"assistant",content:a,timestamp:s}:null}return null}catch(r){return zp.debug("Failed to parse Kimi transcript line %d: %s",n,r.message),null}}parseToolUse(t){let n=new Kt;for(let r of t){if(!r.includes(Vp))continue;let o;try{o=JSON.parse(r)}catch{continue}if(o.type!==Vp)continue;let s=o.event;if(s===null||typeof s!="object"||s.type!=="tool.call"||typeof s.name!="string")continue;let i=Vt(this.parseTimestamp(r));n.addOnce(typeof s.toolCallId=="string"?s.toolCallId:void 0,{...s.name===OT&&typeof s.args?.skill=="string"?Ba(s.args.skill):ls(s.name),...i!==void 0&&{lastCallAtMs:i}})}return n.values()}parseTimestamp(t,n){try{return Yp(JSON.parse(t))}catch{return}}},Vp="context.append_loop_event",OT="Skill";function DT(e){if(e.type==="context.append_loop_event"){let t=e.event;return t?.type==="content.part"&&t.part&&typeof t.part=="object"?t.part:null}return e.type==="content.part"&&e.part&&typeof e.part=="object"?e.part:null}function Yp(e){let t=e.time??e.timestamp;return typeof t=="number"&&Number.isFinite(t)?new Date(t).toISOString():typeof t=="string"&&t.length>0?t:void 0}function Qp(e){if(typeof e=="string")return e.length>0?e:null;if(Array.isArray(e)){let t=[];for(let n of e){let r=Qp(n);r&&t.push(r)}return t.length>0?t.join(`
`):null}if(e!==null&&typeof e=="object"){let t=e;if((t.type==="text"||t.type===void 0)&&typeof t.text=="string"&&t.text.length>0)return t.text}return null}function LT(e){let t=e.role;if(typeof t=="string"&&t!=="user"&&t!=="assistant")return!0;let n=e.content;if(Array.isArray(n))for(let r of n){if(!r||typeof r!="object")continue;let o=r.type;if(typeof r.text=="string"&&o!=="input_text"&&o!=="output_text")return!0}return!1}function MT(e){if(!Array.isArray(e))return null;let t=[];for(let r of e){if(!r||typeof r!="object")continue;let o=r.type,s=r.text;(o==="input_text"||o==="output_text")&&typeof s=="string"&&t.push(s)}let n=t.join(`
`).trim();return n.length>0?n:null}var $T=["recommended_plugins","environment_context","skill","turn_aborted"];function FT(e){let t=e.trimStart();for(let r of $T)if(t.startsWith(`<${r}>`)&&e.includes(`</${r}>`))return!0;return t.startsWith("# AGENTS.md instructions")&&(/<INSTRUCTIONS>[\s\S]*<\/INSTRUCTIONS>/.test(e)||/<environment_context>[\s\S]*<\/environment_context>/.test(e))||t.startsWith("The following is the Codex agent history")&&e.includes("untrusted evidence")?!0:e.replace(/<image\b[^>]*\/?>|<\/image>/g,"").trim().length===0}var jT=/(?:\s*<oai-mem-citation>(?:(?!<\/oai-mem-citation>)[\s\S])*<\/oai-mem-citation>)+\s*$/;function UT(e){return e.replace(jT,"").trimEnd()}function Xp(e){try{return BT(JSON.parse(e))}catch{return null}}function HT(e){return e.startsWith("<")&&e.endsWith(">")}function BT(e){let t=e,n=t?.message?.usage??t?.usage;if(!n||typeof n!="object")return null;let r=i=>typeof n[i]=="number"?n[i]:0,o=t?.message?.model??t?.model,s=t?.message?.id;return{id:typeof s=="string"?s:"",model:typeof o=="string"&&!HT(o)?o:"",input:r("input_tokens"),output:r("output_tokens"),cached:r("cache_creation_input_tokens")}}var WT=new cs,JT=new Ga,GT=new qa;function qT(e){switch(e){case"codex":return JT;case"kimi":return GT;case"claude":return WT}}var KT=["claude","codex","kimi"],VT=["gemini","opencode","antigravity","cursor-cli","cline-cli","devin"],nD=new Set([...KT.filter(e=>qT(e).parseToolUse!==void 0),...VT]);var Ka=f("TranscriptReader");var YT=["Base directory for this skill:","[Request interrupted by user"],XT=/<(?:system-reminder|ide_opened_file|ide_selection|local-command-caveat|command-name|command-message|command-args|local-command-stdout)>[\s\S]*?<\/(?:system-reminder|ide_opened_file|ide_selection|local-command-caveat|command-name|command-message|command-args|local-command-stdout)>/g;function Zp(e,t){try{let n=JSON.parse(e);if(n.isCompactSummary===!0)return Ka.debug("Skipping compaction summary at line %d",t),null;if(!n.message||typeof n.message!="object")return null;let r=n.message,o=r.role,s=typeof n.timestamp=="string"?n.timestamp:void 0;if(o==="user")return zT(r,s,t);if(o==="assistant"){let i=em(r.content)?.trim();return i?{role:"assistant",content:i,timestamp:s}:null}return null}catch(n){return Ka.debug("Failed to parse transcript line %d: %s",t,n.message),null}}function zT(e,t,n){let r=em(e.content);if(!r)return null;let o=QT(r);return o.length===0?null:YT.some(s=>o.startsWith(s))?(Ka.debug("Skipping filtered user message at line %d",n),null):{role:"human",content:o,timestamp:t}}function QT(e){return e.replace(XT,"").trim()}function em(e){if(typeof e=="string")return e.length>0?e:null;if(Array.isArray(e)){let t=[];for(let n of e)if(n!==null&&typeof n=="object"){let r=n;r.type==="text"&&typeof r.text=="string"&&t.push(r.text)}return t.length>0?t.join(`
`):null}return null}ye();wr();ne();qe();var AD=f("AntigravityDiscoverer"),CD=2880*60*1e3;var tm=require("node:fs/promises"),us=require("node:os"),Ya=require("node:path");function ZT(e=(0,us.homedir)()){return(0,Ya.join)(e,".cline","data")}function nm(e=(0,us.homedir)()){return(0,Ya.join)(ZT(e),"sessions")}async function rm(e=(0,us.homedir)()){try{return await(0,tm.access)(nm(e)),!0}catch{return!1}}w();ne();var MD=f("ClineCliDiscoverer"),$D=2880*60*1e3;var Xa=require("node:fs/promises"),Fr=require("node:os"),ms=require("node:path");var ps=require("node:os"),$r=require("node:path");w();var UD=f("VscodeWorkspaceLocator"),om=["Code","Code - Insiders","Cursor","VSCodium","Windsurf"];function pt(e,t=(0,ps.homedir)()){switch((0,ps.platform)()){case"darwin":return(0,$r.join)(t,"Library","Application Support",e);case"win32":return(0,$r.join)(process.env.APPDATA??(0,$r.join)(t,"AppData","Roaming"),e);default:return(0,$r.join)(t,".config",e)}}var e_="saoudrizwan.claude-dev";function t_(e,t){return(0,ms.join)(pt(e,t),"User","globalStorage",e_)}function jr(e=(0,Fr.homedir)()){return om.map(t=>t_(t,e))}function fs(e){return(0,ms.join)(e,"settings","cline_mcp_settings.json")}async function sm(e=(0,Fr.homedir)()){for(let t of jr(e))try{return await(0,Xa.access)((0,ms.join)(t,"state","taskHistory.json")),!0}catch{}return!1}async function za(e=(0,Fr.homedir)()){let t=[];for(let n of jr(e))try{await(0,Xa.access)(fs(n)),t.push(n)}catch{}return t}async function im(e=(0,Fr.homedir)()){return(await za(e)).length>0}w();ne();var VD=f("ClineDiscoverer"),YD=2880*60*1e3;var Qa=require("node:fs/promises"),am=require("node:os"),Za=require("node:path");w();On();ne();var oL=f("CodexDiscoverer"),sL=2880*60*1e3,n_=".codex";async function el(){let e=(0,Za.join)((0,am.homedir)(),n_);try{return(await(0,Qa.stat)(e)).isDirectory()}catch{return!1}}var iL=1440*60*1e3;var cm=require("node:fs/promises"),dm=require("node:os"),tl=require("node:path");w();var r_=f("CopilotChatDetector");function o_(e){return(0,tl.join)(pt("Code",e),"User","globalStorage","github.copilot-chat")}function s_(e=(0,dm.homedir)()){return(0,tl.join)(e,".copilot","session-state")}async function lm(e){try{return(await(0,cm.stat)(e)).isDirectory()}catch(t){let n=t.code;return n!=="ENOENT"&&r_.warn("Copilot Chat probe stat failed for %s (%s): %s",e,n??"unknown",t.message),!1}}async function um(){let[e,t]=await Promise.all([lm(o_()),lm(s_())]);return e||t}w();On();var yL=f("CopilotChatDiscoverer"),wL=2880*60*1e3;var mm=require("node:fs/promises"),fm=require("node:os"),hm=require("node:path");w();qe();var gm=f("CopilotDetector");function ym(){return(0,hm.join)((0,fm.homedir)(),".copilot","session-store.db")}async function wm(){return ut()?nl():(gm.info("Copilot CLI support disabled: this runtime is Node %s, requires %d.%d+ for built-in SQLite",process.versions.node,dt.major,dt.minor),!1)}async function nl(){let e=ym();try{return(await(0,mm.stat)(e)).isFile()}catch(t){let n=t.code;return n!=="ENOENT"&&gm.warn("Copilot DB stat failed (%s): %s",n??"unknown",t.message),!1}}w();qe();var CL=f("CopilotDiscoverer"),xL=2880*60*1e3;var hs=require("node:fs/promises"),gs=require("node:os"),rl=require("node:path");w();ne();var DL=f("CursorCliDiscoverer"),LL=2880*60*1e3;function i_(e=(0,gs.homedir)()){return(0,rl.join)(e,".cursor")}function a_(e=(0,gs.homedir)()){return(0,rl.join)(i_(e),"chats")}async function Em(e=(0,gs.homedir)()){try{return(await(0,hs.stat)(a_(e))).isDirectory()}catch{return!1}}var Sm=require("node:fs/promises"),bm=require("node:path");w();qe();var l_=f("CursorDetector");function Tm(e){return(0,bm.join)(pt("Cursor",e),"User","globalStorage","state.vscdb")}async function _m(){return ut()?ol():(l_.info("Cursor support disabled: this runtime is Node %s, requires 22.13+ for built-in SQLite",process.versions.node),!1)}async function ol(){let e=Tm();try{return(await(0,Sm.stat)(e)).isFile()}catch{return!1}}w();qe();var qL=f("CursorDiscoverer"),KL=2880*60*1e3;var sl=require("node:fs/promises"),Rm=require("node:os"),Ln=require("node:path");w();qe();var ZL=f("DevinDiscoverer"),eM=2880*60*1e3;function km(e){let t=e??(0,Rm.homedir)();if(process.platform==="win32")return(0,Ln.join)(process.env.APPDATA??(0,Ln.join)(t,"AppData","Roaming"),"devin","cli");let n=process.env.XDG_DATA_HOME,r=n&&n.length>0?n:(0,Ln.join)(t,".local","share");return(0,Ln.join)(r,"devin","cli")}function c_(e){return(0,Ln.join)(km(e),"sessions.db")}async function d_(){try{return(await(0,sl.stat)(c_())).isFile()}catch{return!1}}async function vm(){if(await d_())return!0;try{return(await(0,sl.stat)(km())).isDirectory()}catch{return!1}}var Am=require("node:fs/promises"),Cm=require("node:os"),xm=require("node:path");w();var u_=f("GeminiDetector"),p_=".gemini";async function il(){let e=(0,xm.join)((0,Cm.homedir)(),p_);try{return(await(0,Am.stat)(e)).isDirectory()}catch{return u_.debug("Gemini directory not found: %s",e),!1}}ye();Hr();var ws=require("node:fs/promises"),zm=require("node:os"),ml=require("node:path");w();On();var _M=f("KimiDiscoverer"),RM=2880*60*1e3,k_=".kimi-code";function Es(){return process.env.KIMI_CODE_HOME||(0,ml.join)((0,zm.homedir)(),k_)}async function Qm(){let e=Es();try{return(await(0,ws.stat)(e)).isDirectory()}catch{return!1}}Je();le();var Ss={"claude-plugin":{host:"claude",localAgentTool:"claude-code",skillInvocation:"/jolli:<name>"},"codex-plugin":{host:"codex",localAgentTool:"codex",skillInvocation:"$jolli:<name>"},"cursor-plugin":{host:"cursor",localAgentTool:"cursor-agent",skillInvocation:"/jolli-<name>"}},AM=Object.keys(Ss);function bs(e){return e===void 0?void 0:Ss[e]?.localAgentTool}function fl(e,t){return(e===void 0?void 0:Ss[e]?.skillInvocation)?.replace("<name>",t)}function ef(e){return(e===void 0?void 0:Ss[e]?.host)??"claude"}function Zm(e,t){return e===void 0||e===t?void 0:e}async function tf(e,t){let n=bs(e);return n===void 0?null:t.localAgentTool!==void 0&&t.aiProvider!==void 0?{tool:n,seededTool:!1,keptTool:Zm(t.localAgentTool,n),seededProvider:!1}:is(r=>{let o=r.localAgentTool===void 0,s=r.aiProvider===void 0,i={tool:n,seededTool:o,keptTool:Zm(r.localAgentTool,n),seededProvider:s};return!o&&!s?{update:null,result:i}:{update:{...s?{aiProvider:"local-agent"}:{},...o?{localAgentTool:n}:{}},result:i}})}var nf=require("node:fs/promises"),rf=require("node:os"),hl=require("node:path");w();qe();var v_=f("OpenCodeDiscoverer"),OM=2880*60*1e3;function A_(){return process.env.XDG_DATA_HOME||(0,hl.join)((0,rf.homedir)(),".local","share")}function C_(){return(0,hl.join)(A_(),"opencode","opencode.db")}async function of(){return ut()?gl():(v_.info("OpenCode support disabled: this runtime is Node %s, requires %d.%d+ for built-in SQLite",process.versions.node,dt.major,dt.minor),!1)}async function gl(){let e=C_();try{return(await(0,nf.stat)(e)).isFile()}catch{return!1}}w();oe();Je();le();var UM=f("PushPendingStore");var HM=10080*60*1e3;var x_=300*1e3,BM=Math.floor(x_/3);Bo();w();Se();var XM=f("PushCompensation");w();Ts();w();Hr();var s0=f("KBRepoDiscoverer");w();oe();Ts();Je();le();var m0=f("PushControlStore");Ge();var vl=require("node:crypto");jn();es();var P_=[["CLAUDECODE","claude"],["CODEX_THREAD_ID","codex"],["GEMINI_CLI","gemini"],["OPENCODE","opencode"],["ANTIGRAVITY_AGENT","antigravity"],["COPILOT_CLI","copilot"],["CLINE_WRAPPER_PATH","cline-cli"],["CLINE_CONNECTOR_CLI_LAUNCH","cline-cli"]],N_=[{familyKey:"CURSOR_AGENT",variants:[["CURSOR_WORKSPACE_LABEL","cursor"],["CURSOR_INVOKED_AS","cursor-cli"]]}];var O_=["recall","search","local-run","remote-run","jolli","init","login","logout","status","timeline","push","dashboard"],w0=new Set(O_);function El(e){return e!==void 0&&e!==""&&e!=="0"&&e.toLowerCase()!=="false"}function Sl(e){return Hu(e)?e:void 0}function uf(e=process.env){if(En(e))return;let t,n=r=>t!==void 0&&t!==r?!1:(t=r,!0);for(let[r,o]of P_)if(El(e[r])&&!n(o))return;for(let r of N_){if(!El(e[r.familyKey]))continue;let o=new Set(r.variants.filter(([i])=>El(e[i])).map(([,i])=>i)),[s]=o;if(o.size!==1||s===void 0||!n(s))return}return t}var pf=require("node:crypto"),Ve=require("node:fs"),Yt=require("node:fs/promises"),bl=require("node:path");w();oe();var mf="telemetry-queue.ndjson",D_=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,Tl=500,L_=1e6;function _s(e){return(0,bl.join)(U(e),mf)}function M_(e){return typeof e=="string"&&D_.test(e)}function $_(e){let t=(0,pf.createHash)("sha256").update(e).digest("hex"),n=(Number.parseInt(t.slice(16,18),16)&63|128).toString(16).padStart(2,"0");return`${t.slice(0,8)}-${t.slice(8,12)}-5${t.slice(13,16)}-${n}${t.slice(18,20)}-${t.slice(20,32)}`}function F_(e,t){if(typeof e!="object"||e===null||Array.isArray(e))return null;let n=e;return M_(n.eventId)?n:{...n,eventId:$_(t)}}function ff(e,t){let n=U(e);(0,Ve.mkdirSync)(n,{recursive:!0});let r=(0,bl.join)(n,mf);(0,Ve.appendFileSync)(r,`${JSON.stringify(t)}
`,"utf-8");try{if((0,Ve.statSync)(r).size>L_){let o=(0,Ve.readFileSync)(r,"utf-8").split(`
`).filter(s=>s.trim().length>0).slice(-Tl);(0,Ve.writeFileSync)(r,o.length>0?`${o.join(`
`)}
`:"","utf-8")}}catch{}}async function _l(e){let t;try{t=await(0,Yt.readFile)(_s(e),"utf-8")}catch{return[]}let n=[];for(let r of t.split(`
`)){let o=r.trim();if(o.length!==0)try{let s=F_(JSON.parse(o),o);s&&n.push(s)}catch{}}return n.slice(-Tl)}async function hf(e,t){let n=t.slice(-Tl);if(n.length===0){await(0,Yt.rm)(_s(e),{force:!0});return}await(0,Yt.mkdir)(U(e),{recursive:!0});let r=`${n.map(o=>JSON.stringify(o)).join(`
`)}
`;await N(_s(e),r)}async function gf(e){await(0,Yt.rm)(_s(e),{force:!0})}function j_(e){let t=e.DO_NOT_TRACK;if(t===void 0)return!1;let n=t.trim();return n!==""&&n!=="0"}function Rl(e){let t=e.env??process.env;return j_(t)?{enabled:!1,reason:"do-not-track"}:e.platformDisabled===!0?{enabled:!1,reason:"platform-off"}:e.config.telemetry==="off"?{enabled:!1,reason:"config-off"}:{enabled:!0,reason:"on"}}function yf(e){return Rl(e).enabled}var U_={app_installed:"First run after install; installId minted (once per machine). Props: none \u2014 count distinct install_id.",client_activated:"A GUI surface activated (VS Code activate / IntelliJ project open), carrying `surface_version`. First-seen (install_id, surface_version) \u2248 new + upgrade installs that launched. GUI-only \u2014 CLI new/upgrade is read from any event's surface_version.",surface_enabled:"A surface was enabled in a repo. Props: trigger.",surface_disabled:"A surface was disabled / opted out. Props: trigger, reason.",push_enabled:"Outbound push re-enabled for a repo (spec 306, per-repo push control). Props: trigger.",push_disabled:"Outbound push disabled for a repo (spec 306, per-repo push control). Props: trigger.",signin_started:"User initiated OAuth sign-in. Props: trigger.",signin_completed:"jolliApiKey minted \u2014 the conversion event. Props: api_key_minted.",signed_out:"User logged out. Props: none.",ai_provider_selected:"User chose jolli vs anthropic for LLM. Props: provider (discriminator).",memory_bank_migrated:"Migrate-to-Memory-Bank run. Props: outcome, repos, entries_bucket.",onboarding_progressed:"Per-install onboarding-funnel snapshot, emitted from a repo context and deduped by state tuple (+ daily heartbeat). Content-free \u2014 answers 'after install, where do people stall'. Props: in_git_repo, repo_enabled, capture_configured, capture_method (discriminator: local-agent/anthropic/jolli/none), memories_generated, memories_bucket.",command_invoked:'Any CLI command ran (auto-emitted). Props: command (discriminator), ok, duration_ms; via (discriminator: skill:<name> from a closed skill-name set \u2014 present when a Jolli skill\'s recipe invoked the command; absent means directly typed OR a pre-upgrade skill copy that predates the stamp, so absence is not proof of direct use). MCP tool calls carry a `tool` property and are emitted per call (not per session); the session-level `command:"mcp"` event is suppressed.',recall_performed:"A recall was run. Props: hit, result_count_bucket.",search_performed:"A search was run. Props: query_len_bucket, result_count_bucket.",memory_pushed:"Memories pushed to a Space. Props: kind, created, plans_bucket.",export_performed:"Export run. Props: format (discriminator).",ai_source_detected:"A new AI source transcript was detected. Props: source (discriminator: claude/codex/cursor/\u2026).",settings_opened:"Settings UI opened (vscode/intellij). Props: tab (discriminator).",ingest_completed:"A drainIngest run finished. Props: outcome, ingested, idle (no-op when ingested=0), batches, route_calls, reconcile_calls, touched_slugs, topic_failures, duration_ms. Filter idle=true out for real-ingest latency/health metrics.",error_occurred:"A structured error was raised. Content-free schema: { where (stage/subsystem), code (enumerated), source? , retryable? }. Emitted via trackError(); never carries a message/stack/path.",queue_drained:"QueueWorker finished a drain. Props: ops, duration_ms; trigger (discriminator: agent/ui/terminal/unknown \u2014 who set the drained commits in motion) and agent (which AI host, when trigger=agent) are present only when every drained entry agrees, and omitted for mixed or unstamped drains.",sync_completed:"A memory-bank sync round finished. Props: outcome (discriminator), duration_ms.",toolwindow_opened:"The memory tool window was opened. Props: view.",view_switched:"Tool window view switched (current/bank/knowledge). Props: view (discriminator).",memory_committed:"User committed a memory via the Commit button. Props: files_bucket (bucketed changed-file count), has_conversations (bool), context_bucket (bucketed plans/context count).",memory_expanded:"A committed memory's details were expanded. Props: expanded.",memory_item_opened:"An item inside a memory was opened. Props: item_type (discriminator: conversation/file/plan/note/reference/shipped); render (conversation only: live/stored \u2014 whether the source transcript was reopened or the stored copy was shown); source (conversation only: the transcript source, e.g. claude/codex); status (file only: the git status code, e.g. A/M/D).",session_resumed:"A conversation session was resumed in a terminal. Props: source (discriminator).",recall_prompt_copied:"A recall prompt was copied to the clipboard. Props: none.",memory_ref_id_copied:"A memory reference id (JM-<docId>) was copied to the clipboard. Props: surface_area (discriminator: list/detail \u2014 which UI the chip was clicked in).",memory_pinned:"An item was pinned. Props: kind (discriminator).",memory_unpinned:"An item was unpinned. Props: kind (discriminator).",repo_switched:"User switched the active repo in the tool window's breadcrumb. Props: is_foreign (bool).",branch_switched:"User switched the active branch in the tool window's breadcrumb. Props: is_foreign (bool).",squash_performed:"User squashed commits. Props: count_bucket (bucketed number of commits squashed).",pr_created:"User created or updated a PR from the tool window. Props: action (discriminator: created/updated).",memory_shared:"User invoked Share for a branch's memories (read-only share link). Props: none.",key_rejected:"The server rejected the API key (401/403). Props: retried, where.",reauth_completed:"Re-authentication after a rejected key finished. Props: outcome.",dashboard_opened:"The local web dashboard was opened in a browser (surface web-local). Props: first_run (bool \u2014 first open in this browser profile; per-origin localStorage, so it re-reports across ports, browsers, or a storage clear).",dashboard_view_switched:"The local web dashboard's left-nav view was switched. Props: view (discriminator: stats/standup/repositories/memories). Distinct from view_switched, which is the IDE tool-window event with its own view vocabulary.",range_changed:"The dashboard time-range control was changed. Props: range (discriminator: 7d/30d/90d/custom).",chart_split_changed:"A dashboard card's split-by control was changed. Props: card (discriminator: tokens/mcp), split (discriminator)."};var H_=new Set(Object.keys(U_));function wf(e){return H_.has(e)}var B_=1,Al=null;function Sf(e){let t=Rl({config:e.config,env:e.env,platformDisabled:e.platformDisabled}),{surface:n,surfaceVersion:r}=G_(),o=Sl(e.agent);Al={enabled:t.enabled,cwd:e.cwd,installId:e.installId,sessionId:e.sessionId,surface:n,surfaceVersion:r,env:J_(e.origin,e.env),...o?{agent:o}:{}}}function bf(){return Al}function Wr(e,t={}){W_(e,t,void 0)}function W_(e,t,n){let r=Al;if(!(!r||!r.enabled)&&wf(e))try{let o=Y_(t);delete o.agent;let s=t.agent!==void 0,i=n===void 0?r.agent:void 0,a=s?Sl(t.agent):i;a&&(o.agent=a);let l={schemaVersion:B_,eventId:(0,vl.randomUUID)(),eventName:e,surface:n??r.surface,surfaceVersion:r.surfaceVersion,installId:r.installId,...r.sessionId?{sessionId:r.sessionId}:{},os:process.platform,arch:process.arch,runtimeVersion:`node-${process.versions.node}`,env:r.env,tsIso:new Date().toISOString(),accountId:null,properties:o};ff(r.cwd,l)}catch{}}function Tf(e){return!Number.isFinite(e)||e<=0?"0":e<=5?"1-5":e<=20?"6-20":e<=100?"21-100":"100+"}function J_(e,t=process.env){if(t.JOLLI_TELEMETRY_ENV==="sandbox")return"sandbox";if(!e)return"unknown";let n;try{n=new URL(e).hostname.toLowerCase()}catch{return"unknown"}let r=o=>n===o||n.endsWith(`.${o}`);return r("jolli-local.me")?"local":r("jolli.dev")?"dev":r("jolli.cloud")?"preview":r("jolli.ai")?"prod":"unknown"}function G_(e=Ke){let t=e.indexOf("/"),n=t===-1?e:e.slice(0,t),r=t===-1?"unknown":e.slice(t+1);return{surface:n==="vscode-plugin"?"vscode":n,surfaceVersion:r||"unknown"}}var q_=new Set(["token","secret","password","passwd","apikey","api_key","jolliapikey","authtoken","auth_token","accesstoken","access_token","refreshtoken","refresh_token","cookie","credential","credentials"]),K_=4,V_=120;function Ef(e){return e.length>V_?"[redacted:long]":/\b(?:sk-|ghp_|gho_|ghs_|github_pat_|xox[baprs]-)/.test(e)||e.includes("-----BEGIN")?"[redacted:secret]":/[^\s@]+@[^\s@]+\.[^\s@]+/.test(e)?"[redacted:email]":e.includes("://")?"[redacted:url]":/^~[/\\]/.test(e)||/[A-Za-z0-9._-][/\\][A-Za-z0-9._-]/.test(e)?"[redacted:path]":e}function kl(e,t){if(t>K_)return"[redacted:deep]";if(e===null)return null;if(typeof e=="number")return Number.isFinite(e)?e:null;if(typeof e=="boolean")return e;if(typeof e=="string")return Ef(e);if(Array.isArray(e))return e.map(n=>kl(n,t+1)).filter(n=>n!==void 0);if(typeof e=="object"){let n={};for(let[r,o]of Object.entries(e)){if(q_.has(r.toLowerCase()))continue;let s=kl(o,t+1);s!==void 0&&(n[Ef(r)]=s)}return n}}function Y_(e){return kl(e,0)}var W0=f("PushControl");Ge();w();ye();Je();Vo();Vs();var Eg=require("node:path");As();Wn();w();w();var $t=f("DualWriteStorage"),uo=class{constructor(t,n){this.primary=t;this.shadow=n;this.kind="dual-write"}get kbRoot(){return this.shadow.kbRoot}async readFile(t){return this.primary.readFile(t)}async batchReadFiles(t){if(this.primary.batchReadFiles)return this.primary.batchReadFiles(t);let n=new Map;for(let r of t)n.set(r,await this.primary.readFile(r));return n}async writeFiles(t,n){if(!W()){await this.primary.writeFiles(t,n);try{await this.shadow.writeFiles(t,n),this.shadow.clearDirty?.()}catch(r){$t.warn("Shadow write failed (folder storage): %s",r instanceof Error?r.message:String(r)),this.shadow.markDirty?.(n)}}}async deleteVisibleMarkdown(t){if(!this.shadow.deleteVisibleMarkdown)return!1;try{return await this.shadow.deleteVisibleMarkdown(t)}catch(n){let r=t.commitHash.substring(0,8);return $t.warn("Shadow deleteVisibleMarkdown failed (folder storage) for %s/%s: %s",t.branch,r,k(n)),this.shadow.markDirty?.(`deleteVisibleMarkdown ${t.branch}/${r}`),!1}}async regenerateVisibleMarkdown(t){if(!this.shadow.regenerateVisibleMarkdown)return!1;try{return await this.shadow.regenerateVisibleMarkdown(t)}catch(n){let r=t.commitHash.substring(0,8);return $t.warn("Shadow regenerateVisibleMarkdown failed (folder storage) for %s/%s: %s",t.branch,r,k(n)),this.shadow.markDirty?.(`regenerateVisibleMarkdown ${t.branch}/${r}`),!1}}async deletePlanVisible(t,n){if(this.shadow.deletePlanVisible)try{await this.shadow.deletePlanVisible(t,n)}catch(r){$t.warn("Shadow deletePlanVisible failed (folder storage) for %s on %s: %s",t,n,k(r)),this.shadow.markDirty?.(`deletePlanVisible ${n}/${t}`)}}async deleteNoteVisible(t,n){if(this.shadow.deleteNoteVisible)try{await this.shadow.deleteNoteVisible(t,n)}catch(r){$t.warn("Shadow deleteNoteVisible failed (folder storage) for %s on %s: %s",t,n,k(r)),this.shadow.markDirty?.(`deleteNoteVisible ${n}/${t}`)}}async pruneBranchMappings(t){if(!this.shadow.pruneBranchMappings)return 0;try{return await this.shadow.pruneBranchMappings(t)}catch(n){return $t.warn("Shadow pruneBranchMappings failed (folder storage): %s",k(n)),this.shadow.markDirty?.(`pruneBranchMappings ${t.length}`),0}}async healMissingVisibleMarkdown(t){let n=this.shadow.healMissingVisibleMarkdown?this.shadow:this.primary.healMissingVisibleMarkdown?this.primary:null;if(!n)return{healed:0,skipped:0,failed:0};let r=t?.dropOrphanedManifestEntries??!0,o=n===this.shadow?"shadow":"primary";try{return await n.healMissingVisibleMarkdown?.({dropOrphanedManifestEntries:r})??{healed:0,skipped:0,failed:0}}catch(s){let i=s?.code,a=i?`[${i}] ${k(s)}`:k(s);return $t.warn("%s healMissingVisibleMarkdown failed: %s",o,a),n.markDirty?.("healMissingVisibleMarkdown"),{healed:0,skipped:0,failed:0,error:a}}}async listFiles(t){return this.primary.listFiles(t)}async exists(){return this.primary.exists()}isDirty(){return this.shadow.isDirty?.()??!1}async ensure(){await this.primary.ensure();try{await this.shadow.ensure()}catch(t){$t.warn("Shadow ensure failed: %s",t instanceof Error?t.message:String(t))}}async renderTopicWiki(t){await this.shadow.renderTopicWiki?.(t)}isTopicWikiPresent(){return this.shadow.isTopicWikiPresent?.()??!1}};var O=require("node:fs"),yg=require("node:fs/promises"),L=require("node:path");w();var X=require("node:fs");var Le=require("node:path");w();var Uk=f("Sync:VaultSymlinkGuard");function Hk(e,t){if(!(0,Le.isAbsolute)(t))throw new Error(`assertNoSymlinksInPathSync: absTargetPath must be absolute, got ${t}`);if(!(0,Le.isAbsolute)(e))throw new Error(`assertNoSymlinksInPathSync: vaultRoot must be absolute, got ${e}`);let n=(0,Le.relative)(e,t);if(n===""||n.startsWith("..")||(0,Le.isAbsolute)(n))throw new Error(`assertNoSymlinksInPathSync: target ${t} is not inside vault ${e}`);let r=n.split(Le.sep),o=e;for(let s=0;s<r.length-1;s++){let i=r[s];if(i===void 0||i.length===0)continue;o=`${o}${Le.sep}${i}`;let a;try{a=(0,X.lstatSync)(o)}catch(l){if(l.code==="ENOENT")return;throw l}if(a.isSymbolicLink())throw Uk.warn("Refusing vault write \u2014 symlink in path chain: %s",o),new Error(`Refused vault write: path segment is a symlink at ${o} (target ${t}). Inspect and unlink before retrying.`);if(!a.isDirectory())throw new Error(`Refused vault write: path segment is not a directory at ${o} (target ${t}).`)}}function lc(e,t,n){Hk(e,t),(0,X.mkdirSync)((0,Le.dirname)(t),{recursive:!0});let r=`${t}.tmp`,o=X.constants.O_WRONLY|X.constants.O_CREAT|X.constants.O_TRUNC|X.constants.O_NOFOLLOW,s=(0,X.openSync)(r,o,420);try{typeof n=="string"?(0,X.writeSync)(s,n,void 0,"utf-8"):(0,X.writeSync)(s,n)}finally{(0,X.closeSync)(s)}(0,X.renameSync)(r,t)}ys();ne();Zr();function Bk(e){return`skills--${e}`}function Xs(e){return`${Bk(e)}.md`}function og(e){let t=["| Skill | Agent | \xD7 | Tokens | Input | Output | Cached |","|---|---|---|---|---|---|---|"],n=[...e].sort((o,s)=>{let i=cc(s)-cc(o);if(i!==0)return i;let a=o.skill<s.skill?-1:o.skill>s.skill?1:0;if(a!==0)return a;let l=o.source??"",c=s.source??"";return l<c?-1:l>c?1:0}),r=!1;for(let o of n){let s=o.detection==="heuristic"?" \u2020":"";s!==""&&(r=!0),t.push(`| ${ag(o.skill)}${s} | ${Wk(o)} | ${o.invocationCount} | ${Jk(o).join(" | ")} |`)}return r&&t.push("","\u2020 Inferred from a file read rather than an observed invocation: the count is per session, and a human reading the skill file looks the same."),t}function sg(e){let t=`${e.length} skill${e.length===1?"":"s"}`,n=0,r=!1,o=!1;for(let s of e)s.usage!==void 0&&(r=!0,n+=s.usage.input+s.usage.cached+s.usage.output,s.usage.confidence!=="attributed"&&(o=!0));return r?`${t} \xB7 ${lg(n,o?"~":"")} tokens`:t}function ig(e,t){let n=e.commitHash.substring(0,8);return`${["---","type: skill-usage",`commitHash: ${e.commitHash}`,`branch: ${e.branch}`,`generatedAt: ${e.generatedAt}`,"---","",`# Skills used \u2014 ${n}`,"",`_${e.commitMessage}_`,"",...og(t),""].join(`
`)}
`}function ag(e){return e.replace(/\\/g,"\\\\").replace(/\|/g,"\\|").replace(/[\r\n]+/g," ")}function cc(e){let t=e.usage;return t===void 0?0:t.input+t.cached+t.output}function Wk(e){let t=e.source;return t===void 0||t===""?"\u2014":ag(ql(t))}function Jk(e){let t=e.usage;if(t===void 0)return["\u2014","\u2014","\u2014","\u2014"];let n=t.confidence==="attributed"?"":"~";return[cc(e),t.input,t.output,t.cached].map(r=>lg(r,n))}function lg(e,t){return e<1e3?`${t}${e}`:`${t}${(e/1e3).toFixed(1)}k`}function wt(e){return e.replace(/[\\[\]]/g,"\\$&").replace(/[\r\n]+/g," ")}function cg(e){return e.replace(/[\\[\]~]/g,"\\$&").replace(/[\r\n]+/g," ")}function zs(e){return e.replace(/[()\s<>"]/g,t=>t==="("?"%28":t===")"?"%29":encodeURIComponent(t))}Ul();Wl();rs();Zr();Lt();var dg=3/1e6,Gk=15/1e6,qk=3.75/1e6;function po(e){return Math.round(e).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function ug(e){return e>=.01?`$${e.toFixed(2)}`:e>=5e-5?`$${e.toFixed(4)}`:e>0?"<$0.0001":"$0.00"}function pg(e,t){return e?e.input*dg+e.output*Gk+e.cached*qk:t*dg}function pc(e){let{topics:t,sourceNodes:n}=ph(e),r=[];return Kk(r,e),zk(r,e,{withRelevance:!0}),Vk(r,e),Qk(r,e.e2eTestGuide),Zk(r,n),tv(r,t,ev),nv(r),r.join(`
`)}function Kk(e,t){let n=Xr(t),r=n.filesChanged,o=Ml(t),s=`${r} file${r!==1?"s":""} changed, +${n.insertions} insertions, \u2212${n.deletions} deletions`,i=Gl(H(t));e.push(`# ${t.commitMessage}`,"",`- **Commit:** \`${t.commitHash}\``,`- **Branch:** \`${t.branch}\``,`- **Author:** ${t.commitAuthor}`,`- **Date:** ${i}`,`- **Duration:** ${Xf(t)}`,`- **Changes:** ${s}`),o>0&&e.push(`- **Conversations:** ${o} turn${o!==1?"s":""}`);let a=$l(t);if(a>0){let c=Fl(t),u=c.input>0||c.output>0||c.cached>0?c:void 0,d=ug(pg(u,a)),p=u?` (${po(u.input)} input, ${po(u.output)} output, ${po(u.cached)} cached)`:"";e.push(`- **Task usage:** ${po(a)} tokens \xB7 ${d}${p}`)}let l=t.jolliDocUrl;l&&e.push(`- **Jolli Memory:** [${l}](${l})`),e.push("","---")}function Vk(e,t){let n=t.recap?.trim();n&&e.push("","## Quick recap","",n,"","---")}function Yk(e){let t=new Map;for(let o of e){let s=t.get(o.source)??[];s.push(o),t.set(o.source,s)}let n=In().all().map(o=>o.id),r=[];for(let o of n){let s=t.get(o);s&&(r.push(...s),t.delete(o))}for(let o of t.values())r.push(...o);return r}function dc(e,t,n){return e.get(`${t}:${n}`)??e.get(`${t}:${n.replace(eh,"")}`)}var Xk={high:"High",mid:"Med",low:"Low"};function uc(e){return!e||e.reason===""?"":` \u2014 ${Xk[e.tier]} \xB7 ${wt(e.reason)}`}function zk(e,t,n){let r=t.plans??[],o=t.notes??[],s=n?.includeReferences?t.references??[]:[],i=n?.withRelevance?t.excludedContext??[]:[],a=new Map;if(n?.withRelevance)for(let d of t.contextRelevance??[])a.set(`${d.kind}:${d.key}`,{tier:d.tier,reason:d.reason});let l=t.skills??[],c=r.length+o.length+s.length+(l.length>0?1:0);if(c===0&&i.length===0)return;let u=c>1?` (${c})`:"";e.push("",`## Context${u}`,"");for(let d of r){let p=d.jolliPlanDocUrl,m=uc(dc(a,"plan",d.slug));e.push((p?`- [${wt(d.title)}](${zs(p)})`:`- ${wt(d.title)}`)+m)}for(let d of o){let p=d.jolliNoteDocUrl,m=uc(dc(a,"note",d.id));e.push((p?`- [${wt(d.title)}](${zs(p)})`:`- ${wt(d.title)}`)+m)}for(let d of Yk(s)){let p=wt(Bl(d)),m=d.jolliReferenceDocUrl??d.url,h=uc(dc(a,"reference",`${d.source}:${d.nativeId}`));e.push((m?`- [${p}](${zs(m)})`:`- ${p}`)+h)}if(l.length>0){let d=l.some(p=>p.detection==="heuristic")?" \xB7 some inferred":"";e.push(`- Skills used \u2014 ${wt(sg(l))}${d}`)}for(let d of i)e.push(`- ~~${cg(d.title)}~~ \u2014 Excluded${d.reason?` \xB7 ${wt(d.reason)}`:""}`)}function Qk(e,t){if(!(!t||t.length===0)){e.push("",`## E2E Test (${t.length})`);for(let n=0;n<t.length;n++){let r=t[n];e.push("",`### ${n+1}. ${r.title}`),r.preconditions&&e.push("",`**Preconditions:** ${r.preconditions}`),e.push("","**Steps:**");for(let o=0;o<r.steps.length;o++)e.push(`${o+1}. ${r.steps[o]}`);e.push("","**Expected Results:**");for(let o of r.expectedResults)e.push(`- ${o}`)}e.push("","---")}}function Zk(e,t){if(!(t.length<=1)){e.push("",`## Source Commits (${t.length})`);for(let n of t){let r=Xr(n),o=n.conversationTurns?` \xB7 ${n.conversationTurns} turns`:"";e.push(`- \`${n.commitHash.substring(0,8)}\` ${n.commitMessage}  _(+${r.insertions} \u2212${r.deletions}${o} \xB7 ${ch(H(n))})_`)}e.push("","---")}}function ev(e,t){if(e.push("","**\u26A1 Why This Change**","",t.trigger),e.push("","**\u{1F4A1} Decisions Behind the Code**","",t.decisions),e.push("","**\u2705 What Was Implemented**","",t.response),t.todo&&e.push("","**\u{1F4CB} Future Enhancements**","",t.todo),t.filesAffected&&t.filesAffected.length>0){e.push("","**\u{1F4C1} FILES**");for(let n of t.filesAffected)e.push(`- \`${n}\``)}}function tv(e,t,n,r={singular:"Summary",plural:"Summaries"}){if(t.length!==0){e.push("",`## ${t.length===1?r.singular:r.plural} (${t.length})`);for(let o=0;o<t.length;o++){let s=t[o],i=s.category?` \`${s.category}\``:"";e.push("",`### ${dh(o)} \xB7 ${s.title}${i}`),n(e,s)}}}function nv(e,t){let n=Gl(new Date().toISOString()),r=t?uh(t):void 0,o=r?` \xB7 via ${r}`:"";e.push("","---","",`*Generated by Jolli Memory \xB7 ${n}${o}*`)}var mg="<!-- Generated by Jolli Memory \xB7 do not edit \u2014 regenerated on every merge -->";function fg(e,t,n,r){let o=[];if(o.push(`# ${e.title}`),o.push(""),o.push(mg),o.push(""),o.push(`> **Source branches:** ${t.join(", ")}`),o.push(`> **Merged:** ${n}`),o.push(`> **Topic slug:** \`${e.stableSlug}\` (stable across re-merges)`),o.push(""),o.push(e.content.trim()),o.push(""),e.keyDecisions&&e.keyDecisions.length>0){o.push("## Key Decisions"),o.push("");for(let s of e.keyDecisions)o.push(`- ${s}`);o.push("")}if(e.sourceCommits.length>0){o.push("## Source Commits"),o.push("");for(let s of e.sourceCommits){let i=s.substring(0,8),a=r.resolveCommitVisiblePath(i),l=r.resolveCommitMessage(i);a&&l?o.push(`- ${mc(i,rv(a))} \u2014 ${l}`):l?o.push(`- \`${i}\` \u2014 ${l}`):o.push(`- \`${i}\``)}o.push("")}if(e.relatedBranches&&e.relatedBranches.length>0){o.push("## Related Branches"),o.push("");for(let s of e.relatedBranches){let i=r.resolveBranchFolder(s);i?o.push(`- ${mc(s,`../${i}/`)}`):o.push(`- \`${s}\``)}o.push("")}return o.join(`
`)}function hg(e){return{title:e.title,stableSlug:e.stableSlug,content:e.content,...e.relatedBranches.length>0&&{relatedBranches:[...e.relatedBranches]},sourceCommits:e.sourceRefs.filter(t=>t.type==="summary").map(t=>t.id)}}function gg(e,t){let n=[];if(n.push(`# ${t.repoName} \xB7 Knowledge Wiki`),n.push(""),n.push(mg),n.push(""),n.push(`> **${e.length} topics** in the knowledge base`),n.push(""),e.length>0){n.push("## Topics"),n.push("");for(let r of e)n.push(`- ${mc(r.title,`topic--${r.stableSlug}.md`)}`);n.push("")}return n.join(`
`)}function rv(e){return e.startsWith("./")?e.substring(2):e}function mc(e,t){let n=e.replace(/[\\[\]]/g,"\\$&"),r=t.replace(/ /g,"%20").replace(/\(/g,"%28").replace(/\)/g,"%29");return`[${n}](${r})`}var C=f("FolderStorage"),Qs=class e{constructor(t,n){this.rootPath=t;this.metadataManager=n;this.kind="folder"}get vaultRoot(){return(0,L.dirname)(this.rootPath)}get kbRoot(){return this.rootPath}async readFile(t){let n=(0,L.join)(this.rootPath,".jolli",t);try{return(0,O.readFileSync)(n,"utf-8")}catch(r){let o=r.code;return o==="ENOENT"||o==="ENOTDIR"||C.warn("readFile failed for %s: %s",n,k(r)),null}}async writeFiles(t,n){if(W())return;await this.ensure();let r=0,o=0;for(let s of t)s.delete?this.deleteHiddenFile(s.path)&&o++:(this.writeHiddenFile(s.path,s.content),r++,s.path.startsWith("summaries/")&&s.path.endsWith(".json")&&this.generateSummaryMarkdown(s.content),s.path.startsWith("plans/")&&s.path.endsWith(".md")&&this.generatePlanMarkdown(s.path,s.content,s.branch),s.path.startsWith("notes/")&&s.path.endsWith(".md")&&this.generateNoteMarkdown(s.path,s.content,s.branch));C.info("Wrote %d files, deleted %d (%s)",r,o,n)}async listFiles(t){let n=(0,L.join)(this.rootPath,".jolli",t);if(!(0,O.existsSync)(n))return[];let r=(0,L.join)(this.rootPath,".jolli"),o=[];return this.walkDir(n,r,o),o.sort()}async exists(){return(0,O.existsSync)(this.rootPath)}async ensure(){(0,O.mkdirSync)(this.rootPath,{recursive:!0}),this.metadataManager.ensure()}markDirty(t){let n=(0,L.join)(this.rootPath,".jolli","shadow-status.json"),r={dirty:!0,lastFailedAt:new Date().toISOString(),message:t};try{lc(this.vaultRoot,n,JSON.stringify(r,null,"	"))}catch(o){C.warn("markDirty suppressed: %s",k(o))}}clearDirty(){let t=(0,L.join)(this.rootPath,".jolli","shadow-status.json");try{(0,O.existsSync)(t)&&(0,O.unlinkSync)(t)}catch{}}isDirty(){let t=(0,L.join)(this.rootPath,".jolli","shadow-status.json");return(0,O.existsSync)(t)}async deleteVisibleMarkdown(t){let n=e.slugify(t.commitMessage),r=t.commitHash.substring(0,8);try{await this.deleteVisibleArtifact(`skill:${t.commitHash}`,t.branch,Xs(r))}catch(o){C.warn("Failed to delete skills aggregate for %s: %s",r,String(o))}return this.deleteVisibleArtifact(t.commitHash,t.branch,`${n}-${r}.md`)}async deletePlanVisible(t,n){await this.deleteVisibleArtifact(`plan:${t}`,n,`plan--${t}.md`)}async deleteNoteVisible(t,n){await this.deleteVisibleArtifact(`note:${t}`,n,`note--${t}.md`)}async pruneBranchMappings(t){let n=new Map,r=new Set(t);for(let s of this.metadataManager.listBranchMappings())r.has(s.branch)&&n.set(s.branch,s.folder);let o=this.metadataManager.unregisterBranches(t);return o===0?0:(await Promise.all([...n.values()].map(s=>this.rmdirIfEmpty((0,L.join)(this.rootPath,s)))),o)}async rmdirIfEmpty(t){try{await(0,yg.rmdir)(t)}catch(n){let r=n.code;if(r==="ENOENT"||r==="ENOTEMPTY"||r==="EEXIST")return;C.warn("rmdir(%s) failed (non-fatal): %s",t,k(n))}}resolveBranchForFolder(t){return this.metadataManager.listBranchMappings().find(r=>r.folder===t)?.branch??null}async deleteVisibleArtifact(t,n,r){let o=this.metadataManager.findById(t),s=this.metadataManager.resolveFolderForBranch(n),i=o?.path??`${s}/${r}`,a=(0,L.join)(this.rootPath,i);if(!(0,O.existsSync)(a))return o&&this.metadataManager.removeFromManifest(t),!1;if(o?.fingerprint&&this.isUserEditedOnDisk(a,o.fingerprint))return C.warn("Skipping cleanup of %s \u2014 file modified since manifest record (likely hand-edited)",i),!1;try{return(0,O.unlinkSync)(a),o&&this.metadataManager.removeFromManifest(t),C.info("Deleted visible MD: %s",i),!0}catch(l){if(l.code==="ENOENT")return o&&this.metadataManager.removeFromManifest(t),!1;throw l}}async forceRegenerateVisibleMarkdown(t){let n=await this.readFile(`summaries/${t.commitHash}.json`);if(!n)return C.warn("forceRegenerateVisibleMarkdown: hidden summaries/%s.json missing \u2014 leaving visible file intact",t.commitHash.substring(0,8)),{ok:!1,reason:"missing"};try{JSON.parse(n)}catch(c){return C.warn("forceRegenerateVisibleMarkdown: malformed summaries/%s.json (%s) \u2014 leaving visible file intact",t.commitHash.substring(0,8),k(c)),{ok:!1,reason:"malformed"}}let r=this.metadataManager.resolveFolderForBranch(t.branch),o=e.slugify(t.commitMessage),s=t.commitHash.substring(0,8),i=`${r}/${o}-${s}.md`,a=(0,L.join)(this.rootPath,i);if((0,O.existsSync)(a))try{(0,O.unlinkSync)(a)}catch(c){return C.warn("forceRegenerateVisibleMarkdown: cannot unlink %s [%s]",i,String(c)),{ok:!1,reason:"unlinkFailed"}}return await this.regenerateVisibleMarkdown(t)?{ok:!0}:{ok:!1,reason:"missing"}}async regenerateVisibleMarkdown(t){let n=this.metadataManager.resolveFolderForBranch(t.branch),r=e.slugify(t.commitMessage),o=t.commitHash.substring(0,8),s=`${n}/${r}-${o}.md`,i=(0,L.join)(this.rootPath,s);if((0,O.existsSync)(i))return await this.healSkillsAggregate(t,n,o),!0;let a=await this.readFile(`summaries/${t.commitHash}.json`);if(!a)return C.warn("regenerateVisibleMarkdown: hidden summaries/%s.json missing",t.commitHash.substring(0,8)),!1;let l;try{l=JSON.parse(a)}catch(h){return C.warn("regenerateVisibleMarkdown: malformed summaries/%s.json \u2014 %s",t.commitHash.substring(0,8),k(h)),!1}let c=this.buildYamlFrontmatter(l),u=pc(l),d=`${c}
${u}`;this.atomicWrite(i,d);let p=this.metadataManager.findById(t.commitHash),m=ue.sha256(d);return this.metadataManager.updateManifest({path:s,fileId:l.commitHash,type:"commit",fingerprint:m,source:{commitHash:l.commitHash,branch:l.branch,generatedAt:l.generatedAt},title:p?.title??l.commitMessage}),this.generateSkillsAggregate(l,n,o),C.info("Regenerated visible MD: %s",s),!0}async healMissingVisibleMarkdown(t){let r=this.metadataManager.readManifest().files.filter(c=>c.type==="commit"),o=0,s=0,i=0,a=[];for(let c of r){let u=(0,L.join)(this.rootPath,c.path);if((0,O.existsSync)(u)){s++;continue}let d=(0,L.join)(this.rootPath,".jolli","summaries",`${c.fileId}.json`),p;try{p=(0,O.readFileSync)(d,"utf-8")}catch(R){let P=R.code;if(P==="ENOENT"){i++,t?.dropOrphanedManifestEntries?(a.push(c.fileId),C.warn("healMissingVisibleMarkdown: hidden JSON missing for %s \u2014 will drop manifest entry",c.fileId.substring(0,8))):C.warn("healMissingVisibleMarkdown: hidden JSON missing for %s \u2014 keeping manifest entry (no truth source to repopulate)",c.fileId.substring(0,8));continue}i++,C.warn("healMissingVisibleMarkdown: hidden JSON read failed for %s [%s]: %s \u2014 keeping manifest entry",c.fileId.substring(0,8),P??"?",k(R));continue}let m;try{m=JSON.parse(p)}catch(R){i++,C.warn("healMissingVisibleMarkdown: malformed hidden JSON for %s: %s",c.fileId.substring(0,8),k(R));continue}let h=this.metadataManager.resolveFolderForBranch(m.branch),g=e.slugify(m.commitMessage),S=m.commitHash.substring(0,8),E=`${h}/${g}-${S}.md`;if(E!==c.path){s++,C.warn("healMissingVisibleMarkdown: manifest path drift for %s \u2014 manifest=%s computed=%s \u2014 keeping manifest entry, run reconcile",c.fileId.substring(0,8),c.path,E);continue}let _={commitHash:m.commitHash,parentCommitHash:null,commitMessage:m.commitMessage,commitDate:m.commitDate,branch:m.branch,generatedAt:m.generatedAt};try{await this.regenerateVisibleMarkdown(_)?o++:(i++,C.warn("healMissingVisibleMarkdown: regenerate returned false for %s \u2014 retry on next pass",c.fileId.substring(0,8)))}catch(R){i++,C.warn("healMissingVisibleMarkdown: regenerate failed for %s: %s",c.fileId.substring(0,8),k(R))}}let l=a.length>0?this.dropManifestEntries(a):[];return(o>0||i>0)&&C.info("healMissingVisibleMarkdown: healed=%d skipped=%d failed=%d dropped=%d",o,s,i,l.length),l.length>0?{healed:o,skipped:s,failed:i,droppedIds:l}:{healed:o,skipped:s,failed:i}}dropManifestEntries(t){if(t.length===0)return[];let n=new Set(t),r=this.metadataManager.readManifest(),o=r.files.filter(i=>n.has(i.fileId)).map(i=>i.fileId);if(o.length===0)return[];let s=r.files.filter(i=>!n.has(i.fileId));return this.metadataManager.replaceFiles(s),o}isUserEditedOnDisk(t,n){if(!(0,O.existsSync)(t)||!n)return!1;let r;try{r=ue.sha256((0,O.readFileSync)(t,"utf-8"))}catch(o){return C.warn("isUserEditedOnDisk: cannot read %s [%s] \u2014 treating as edited",t,String(o)),!0}return r!==n}generateSummaryMarkdown(t){let n;try{n=JSON.parse(t)}catch{return}let r=this.metadataManager.resolveFolderForBranch(n.branch),o=e.slugify(n.commitMessage),s=n.commitHash.substring(0,8),i=`${o}-${s}.md`,a=`${r}/${i}`,l=this.buildYamlFrontmatter(n),c=pc(n),u=`${l}
${c}`,d=(0,L.join)(this.rootPath,a),p=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(d,p?.fingerprint)){C.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(d,u);let m=ue.sha256(u);this.metadataManager.updateManifest({path:a,fileId:n.commitHash,type:"commit",fingerprint:m,source:{commitHash:n.commitHash,branch:n.branch,generatedAt:n.generatedAt},title:n.commitMessage}),C.info("Markdown generated: %s",a),this.generateSkillsAggregate(n,r,s),n.children&&n.children.length>0&&this.cleanupSupersededDescendants(n.children,a)}async healSkillsAggregate(t,n,r){if((0,O.existsSync)((0,L.join)(this.rootPath,n,Xs(r))))return;let o=await this.readFile(`summaries/${t.commitHash}.json`);if(o)try{this.generateSkillsAggregate(JSON.parse(o),n,r)}catch{}}generateSkillsAggregate(t,n,r){let o=t.skills;if(o===void 0||o.length===0)return;let s=`${n}/${Xs(r)}`,i=(0,L.join)(this.rootPath,s),a=this.metadataManager.findByPath(s);if(this.isUserEditedOnDisk(i,a?.fingerprint)){C.info("FolderStorage: skip overwrite of user-edited %s",s);return}let l=ig(t,o);this.atomicWrite(i,l),this.metadataManager.updateManifest({path:s,fileId:`skill:${t.commitHash}`,type:"skill",fingerprint:ue.sha256(l),source:{commitHash:t.commitHash,branch:t.branch,generatedAt:t.generatedAt},title:`Skills used \u2014 ${r}`}),C.info("Skills aggregate generated: %s",s)}cleanupSupersededDescendants(t,n){let r=[];e.collectDescendantHashes(t,r);for(let o of r){let s=this.metadataManager.findById(o);if(!s||s.type!=="commit"||s.path===n)continue;let i=(0,L.join)(this.rootPath,s.path);if(!(0,O.existsSync)(i)){this.metadataManager.removeFromManifest(o);continue}if(!s.fingerprint){C.warn("Skipping cleanup of %s \u2014 legacy entry has no fingerprint baseline",s.path);continue}if(this.isUserEditedOnDisk(i,s.fingerprint)){C.warn("Skipping cleanup of %s \u2014 file modified since manifest record (likely hand-edited)",s.path);continue}try{(0,O.unlinkSync)(i),this.metadataManager.removeFromManifest(o),C.info("Cleaned up superseded MD: %s",s.path)}catch(a){C.warn("Failed to delete superseded MD %s: %s",s.path,String(a))}}}static collectDescendantHashes(t,n){for(let r of t)n.push(r.commitHash),r.children&&r.children.length>0&&e.collectDescendantHashes(r.children,n)}buildYamlFrontmatter(t){let n=["---"];return n.push(`commitHash: ${t.commitHash}`),n.push(`branch: ${t.branch}`),n.push(`author: ${t.commitAuthor}`),n.push(`date: ${t.commitDate}`),n.push("type: commit"),t.commitType&&n.push(`commitType: ${t.commitType}`),t.stats&&(n.push(`filesChanged: ${t.stats.filesChanged}`),n.push(`insertions: ${t.stats.insertions}`),n.push(`deletions: ${t.stats.deletions}`)),n.push("---"),n.join(`
`)}async regenerateVisiblePlan(t,n){let r=await this.readFile(`plans/${t}.md`);if(!r)return C.warn("regenerateVisiblePlan: hidden plans/%s.md missing",t),!1;let o=this.metadataManager.resolveFolderForBranch(n),s=(0,L.join)(this.rootPath,o,`plan--${t}.md`);if((0,O.existsSync)(s))try{(0,O.unlinkSync)(s)}catch(i){return C.warn("regenerateVisiblePlan: cannot unlink %s [%s]",s,String(i)),!1}return this.generatePlanMarkdown(`plans/${t}.md`,r,n),!0}generatePlanMarkdown(t,n,r){let o=t.replace(/^plans\//,"").replace(/\.md$/,""),s=r?this.metadataManager.resolveFolderForBranch(r):this.resolveBranchFromSlug(o),i=`plan--${o}.md`,a=`${s}/${i}`,c=`${["---","type: plan",`slug: ${o}`,"---"].join(`
`)}

${n}`,u=(0,L.join)(this.rootPath,a),d=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(u,d?.fingerprint)){C.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(u,c);let p=ue.sha256(c);this.metadataManager.updateManifest({path:a,fileId:`plan:${o}`,type:"plan",fingerprint:p,updatedAt:new Date().toISOString(),source:r?{branch:r}:{},title:this.extractTitle(n)??o}),C.info("Plan markdown generated: %s",a)}async regenerateVisibleNote(t,n){let r=await this.readFile(`notes/${t}.md`);if(!r)return C.warn("regenerateVisibleNote: hidden notes/%s.md missing",t),!1;let o=this.metadataManager.resolveFolderForBranch(n),s=(0,L.join)(this.rootPath,o,`note--${t}.md`);if((0,O.existsSync)(s))try{(0,O.unlinkSync)(s)}catch(i){return C.warn("regenerateVisibleNote: cannot unlink %s [%s]",s,String(i)),!1}return this.generateNoteMarkdown(`notes/${t}.md`,r,n),!0}generateNoteMarkdown(t,n,r){let o=t.replace(/^notes\//,"").replace(/\.md$/,""),s=r?this.metadataManager.resolveFolderForBranch(r):this.resolveBranchFromSlug(o),i=`note--${o}.md`,a=`${s}/${i}`,c=`${["---","type: note",`id: ${o}`,"---"].join(`
`)}

${n}`,u=(0,L.join)(this.rootPath,a),d=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(u,d?.fingerprint)){C.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(u,c);let p=ue.sha256(c);this.metadataManager.updateManifest({path:a,fileId:`note:${o}`,type:"note",fingerprint:p,source:r?{branch:r}:{},title:this.extractTitle(n)??o,updatedAt:new Date().toISOString()}),C.info("Note markdown generated: %s",a)}resolveBranchFromSlug(t){let n=t.split("-").at(-1);if(n.length>=7){let o=this.metadataManager.readManifest().files.find(i=>i.type==="commit"&&i.source?.commitHash?.startsWith(n));if(o?.source?.branch)return this.metadataManager.resolveFolderForBranch(o.source.branch);let s=(0,L.join)(this.rootPath,".jolli","index.json");if((0,O.existsSync)(s))try{let a=JSON.parse((0,O.readFileSync)(s,"utf-8")).entries.find(l=>l.commitHash.startsWith(n));if(a?.branch)return this.metadataManager.resolveFolderForBranch(a.branch)}catch{}}return"_shared"}extractTitle(t){let n=t.match(/^#\s+(.+)/m);return n?n[1].trim():null}writeHiddenFile(t,n){let r=(0,L.join)(this.rootPath,".jolli",t);this.atomicWrite(r,n)}deleteHiddenFile(t){let n=(0,L.join)(this.rootPath,".jolli",t);if(!(0,O.existsSync)(n))return!1;try{return(0,O.unlinkSync)(n),!0}catch{return!1}}walkDir(t,n,r){for(let o of(0,O.readdirSync)(t,{withFileTypes:!0})){let s=(0,L.join)(t,o.name);o.isDirectory()?this.walkDir(s,n,r):r.push(De((0,L.relative)(n,s)))}}async renderTopicWiki(t){let n=(0,L.join)(this.rootPath,"_wiki");this.wipeWikiArtifacts(n);let r=this.buildWikiRenderContext();(0,O.mkdirSync)(n,{recursive:!0});let o=[];for(let s of t)try{let i=hg(s);o.push(i);let a=`_wiki/topic--${i.stableSlug}.md`,l=fg(i,s.relatedBranches,s.lastUpdatedAt,r);this.atomicWrite((0,L.join)(this.rootPath,a),l),this.metadataManager.updateManifest({path:a,fileId:`wiki-topic-${i.stableSlug}`,type:"wiki",fingerprint:ue.sha256(l),source:{generatedAt:s.lastUpdatedAt},title:i.title})}catch(i){C.warn("renderTopicWiki: failed to render topic %s: %s",s.stableSlug,k(i))}try{let s=gg(o,r),i="_wiki/_index.md";this.atomicWrite((0,L.join)(this.rootPath,i),s),this.metadataManager.updateManifest({path:i,fileId:"wiki-index",type:"wiki",fingerprint:ue.sha256(s),source:{generatedAt:new Date().toISOString()},title:`${r.repoName} Knowledge Wiki`})}catch(s){C.warn("renderTopicWiki: failed to render index: %s",k(s))}C.info("Topic-KB wiki regenerated: %d topics under %s",t.length,n)}isTopicWikiPresent(){return(0,O.existsSync)((0,L.join)(this.rootPath,"_wiki","_index.md"))}wipeWikiArtifacts(t){if(this.metadataManager.unregisterFilesByType("wiki"),!!(0,O.existsSync)(t))try{for(let n of(0,O.readdirSync)(t))if(n.endsWith(".md"))try{(0,O.unlinkSync)((0,L.join)(t,n))}catch(r){C.warn("FolderStorage.wipeWikiArtifacts: failed to unlink %s: %s",n,k(r))}}catch(n){C.warn("FolderStorage.wipeWikiArtifacts: failed to list %s: %s",t,k(n))}}buildWikiRenderContext(){let t=this.metadataManager.readConfig(),n=this.metadataManager.listBranchMappings(),r=new Map(n.map(i=>[i.branch,i.folder])),o=this.metadataManager.readManifest(),s=new Map;for(let i of o.files)i.type==="commit"&&i.source.commitHash&&s.set(i.source.commitHash.substring(0,8),i);return{repoName:t.repoName??"Memory Bank",resolveCommitVisiblePath:i=>{let a=s.get(i);return a?`../${a.path}`:null},resolveBranchFolder:i=>r.get(i)??null,resolveCommitMessage:i=>s.get(i)?.title??null}}atomicWrite(t,n){lc(this.vaultRoot,t,n)}static slugify(t){let n=t.toLowerCase().replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"");return n.length>50&&(n=n.substring(0,50).replace(/-+$/,"")),n||"untitled"}};Hr();ys();xs();le();qs();var Zs=f("StorageFactory");async function fc(e,t){let n;try{n=await ae()}catch(a){Zs.warn("Failed to load config, falling back to defaults: %s",a.message),n={}}n.storageMode!==void 0&&Zs.info("ignoring retired storageMode=%s \u2014 routing is decided by the cutover state",n.storageMode);let r=n.localFolder,o=await Vr(e);if(Zs.info("StorageFactory.create: route=%s, projectPath=%s",o.state,e),o.state==="blocked")throw new Error(`storage unavailable: ${o.reason} \u2014 this repo's orphan branch is frozen (cutover), so writes cannot fall back to it; run 'jolli doctor --recover' or upgrade this surface`);if(o.state==="legacy-fenced"||o.state==="cutover"){let{identity:a}=await zt(e),l=new Mt(a);return ul(e,r)?new uo(l,wg(e,r)):l}if(!ul(e,r))return Zs.warn("Not a claimable project (no git worktree, or inside the Memory Bank folder): %s \u2014 using orphan-only storage",e),new ht(t);let s=new ht(t),i=wg(e,r);return new uo(s,i)}function wg(e,t){let n=Hm(e),r=Jm(e),o=Um(n,r,t),s=new ue((0,Eg.join)(o,".jolli"));return new Qs(o,s)}Xe();Lt();Kl();var ve=f("SchemaV5Migration"),bg="schema-v5-migration.json",Sg=3e4;async function hc(e,t){let r=await(t??await fc(e??process.cwd(),e)).readFile(bg);if(!r)return null;try{return JSON.parse(r)}catch(o){return ve.warn("Failed to parse v5 migration state \u2014 treating as absent: %s",o.message),null}}async function ov(e,t,n){if(Cn(e))return await n();if(!await _r(e,{timeoutMs:Sg}))throw new Error(`${t}: could not acquire orphan-write lock within ${Sg}ms`);try{return await xn(e,n)}finally{await Rr(e)}}async function Tg(e){let t=await fc(e??process.cwd(),e),n=await hc(e,t);return n?.status==="completed"?(ve.info("Schema v5 migration already completed at %s \u2014 skipping",n.completedAt),{migrated:n.migratedCount,skipped:n.skippedCount,fresh:n.fresh,alreadyDone:!0}):await t.exists()?ov(e,"migrateSchemaToV5",()=>iv(e,t)):(ve.info("Storage backend not initialized yet \u2014 skipping schema v5 migration (no data to migrate)"),{migrated:0,skipped:0,fresh:!0,alreadyDone:!1})}async function sv(e,t){if(t.length===0)return new Map;if(e.batchReadFiles)return e.batchReadFiles(t);let n=new Map;for(let r of t)n.set(r,await e.readFile(r));return n}async function iv(e,t){let n=await hc(e,t);if(n?.status==="completed")return ve.info("Schema v5 migration completed by a concurrent run at %s \u2014 skipping",n.completedAt),{migrated:n.migratedCount,skipped:n.skippedCount,fresh:n.fresh,alreadyDone:!0};let r=new Date().toISOString(),o=await Ks(e),s=o.ok&&o.state==="uncutover"?await J(["rev-parse",`refs/heads/${Oe}`],e).then($=>$.stdout.trim()).catch(()=>null):null,i=await t.listFiles("summaries/");ve.info("Found %d summary files to inspect",i.length);let a=await t.listFiles("transcripts/"),l=new Set;for(let $ of a){let he=Ds($);he&&l.add(he)}ve.info("Reading %d summaries...",i.length);let c=Date.now(),u=await sv(t,i);ve.info("Read %d summaries in %d ms",u.size,Date.now()-c);let d=[],p=[],m=0,h=0;for(let $ of i){let he=u.get($);if(he===void 0)throw new Error(`readSummaries omitted ${$} \u2014 protocol contract violation (expected one entry per request)`);if(he===null){h++;continue}let Ie;try{Ie=JSON.parse(he)}catch(Ht){ve.warn("Skipping unparseable summary %s: %s",$,Ht.message),h++;continue}let Pe=av(Ie,l),_t=JSON.stringify(Pe,null,"	");if(p.push({path:$,content:_t}),Pe===Ie){h++;continue}d.push({path:$,content:_t}),m++}let g=i.length===0,S=m===0&&h>0,E=S?p:d,_=g?"Schema v5 migration: no pre-v5 data found":S?`Schema v5 migration: re-pushing ${h} v5 summaries to heal storage shadow`:`Schema v5 migration: ${m} upgraded, ${h} skipped`,R=Date.now();if(E.length>0&&(ve.info("Writing %d summary file(s) via active storage...",E.length),await t.writeFiles(E,_)),t.isDirty?.()??!1)return ve.warn("Schema v5 migration: storage shadow write failed (folder marked dirty) \u2014 leaving state PENDING; next startup will retry and re-push (migrated=%d, skipped=%d, took %d ms)",m,h,Date.now()-R),{migrated:m,skipped:h,fresh:g,alreadyDone:!1};let I={version:1,status:"completed",startedAt:r,completedAt:new Date().toISOString(),migratedCount:m,skippedCount:h,fresh:g};return await t.writeFiles([{path:bg,content:JSON.stringify(I,null,"	")}],_),ve.info("Schema v5 migration complete: %d migrated, %d skipped, fresh=%s, recovery=%s (took %d ms)",m,h,g,S,Date.now()-R),s&&ve.info("Pre-migration orphan-branch SHA was %s (debug-only recovery anchor)",s),{migrated:m,skipped:h,fresh:g,alreadyDone:!1}}function av(e,t){if(e.version>=5&&e.transcripts!==void 0)return e;let n=Ql(e);if(n.transcripts!==void 0)return{...n,version:5};let o=zr(n).filter(i=>t.has(i));return{...n,version:5,transcripts:o}}le();Xe();w();var qn=require("node:fs/promises"),fo=require("node:path");oe();ri();async function wc(e){let t=(0,fo.join)(e,".claude"),n=(0,fo.join)(t,"settings.local.json"),r=Et("stop"),o=Et("session-start");await _g(e);let s={},i;try{i=await(0,qn.readFile)(n,"utf-8"),s=JSON.parse(i)}catch(m){if(m.code!=="ENOENT")throw m}let a=s.hooks??{},l=a.Stop??[],c=a.SessionStart??[],u=ni(l);u.push({hooks:[{type:"command",command:r,async:!0}]});let d=rn(c,ei);d.push({hooks:[{type:"command",command:o}]}),a.Stop=u,a.SessionStart=d,s.hooks=a;let p=JSON.stringify(s,null,"	");return i===p?{path:n}:(await(0,qn.mkdir)(t,{recursive:!0}),await N(n,p),{path:n})}async function _g(e){let t=(0,fo.join)(e,".claude","settings.json"),n;try{let i=await(0,qn.readFile)(t,"utf-8");n=JSON.parse(i)}catch{return}let r=n.hooks;if(!r)return;let o=r.Stop??[];if(!yc(o))return;let s=ni(o);s.length===0?delete r.Stop:r.Stop=s,Object.keys(r).length===0?delete n.hooks:n.hooks=r,await N(t,JSON.stringify(n,null,"	"))}async function Ec(e){await _g(e);let t=(0,fo.join)(e,".claude","settings.local.json"),n;try{let l=await(0,qn.readFile)(t,"utf-8");n=JSON.parse(l)}catch{return{}}let r=n.hooks;if(!r)return{};let o=r.Stop??[],s=yc(o);if(s){let l=ni(o);l.length===0?delete r.Stop:r.Stop=l}let i=r.SessionStart??[],a=mo(i,ei);if(a){let l=rn(i,ei);l.length===0?delete r.SessionStart:r.SessionStart=l}return!s&&!a?{}:(Object.keys(r).length===0?delete n.hooks:n.hooks=r,await N(t,JSON.stringify(n,null,"	")),{})}var sn=require("node:fs/promises"),Rw=require("node:os"),_o=require("node:path");oe();w();var Ew=require("node:crypto"),Xn=require("node:fs"),Hc=require("node:fs/promises"),Ei=require("node:os"),St=require("node:path");w();var kg=require("node:fs"),si=require("node:fs/promises"),vg=require("node:os"),on=require("node:path"),Ag=require("node:url");oe();w();var cv=/^[a-z0-9][a-z0-9-]*$/;function ho(e){return cv.test(e)}var oi=f("DistPathWriter");async function go(e,t,n,r){if(!ho(e))return oi.warn("Refusing to write dist-paths entry for unsafe source tag: %s",JSON.stringify(e)),!1;let o=t??(0,on.dirname)((0,Ag.fileURLToPath)(__jmImportMetaUrl)),s=n??"0.99.14",i=(0,on.join)(r??(0,on.join)((0,vg.homedir)(),".jolli","jollimemory"),"dist-paths"),a=(0,on.join)(i,e);try{await(0,si.mkdir)(i,{recursive:!0});let l=`${s}
${o}`,c;try{c=await(0,si.readFile)(a,"utf-8")}catch{}if(c){let[u,d]=c.split(`
`);if(!!(u&&d&&Rg(d))&&!Rg(o))return oi.info("Kept complete dist-paths/%s (version=%s) \u2014 candidate dist is incomplete: %s",e,u,o),!0}return c!==l&&await N(a,l),oi.info("Wrote dist-paths/%s (version=%s, distDir=%s)",e,s,o),!0}catch(l){return oi.warn("Failed to write dist-paths/%s: %s",e,l.message),!1}}var dv=["Cli.js","StopHook.js","SessionStartHook.js","PostCommitHook.js","PostRewriteHook.js","PrepareMsgHook.js","PostMergeHook.js","PrePushHook.js","QueueWorker.js","PrePushWorker.js"];function Rg(e){return dv.every(t=>(0,kg.existsSync)((0,on.join)(e,t)))}var Yn=fr(ww(),1);function wi(e,t){if(e.includes("-")||e.includes("+")||t.includes("-")||t.includes("+")){let i=c=>{let u=(0,Yn.valid)(c);return u||(/^\d+(\.\d+)*$/.test(c)?(0,Yn.coerce)(c)?.version??null:null)},a=i(e),l=i(t);if(a&&l)return(0,Yn.compare)(a,l);if(a)return 1;if(l)return-1}let n=/^\d+(\.\d+)*$/.test(e),r=/^\d+(\.\d+)*$/.test(t);if(!n&&!r)return 0;if(!n)return-1;if(!r)return 1;let o=e.split(".").map(Number),s=t.split(".").map(Number);for(let i=0;i<Math.max(o.length,s.length);i++){let a=(o[i]??0)-(s[i]??0);if(a!==0)return a}return 0}var Uc=f("DistPathResolver"),gx=[[".cursor/","cursor"],[".windsurf/","windsurf"],[".antigravity/","antigravity"],[".vscode-oss/","vscodium"],[".positron/","positron"],[".trae/","trae"],[".vscode/","vscode"]];function Bc(e){let t=e.replace(/\\/g,"/");for(let[r,o]of gx)if(t.includes(r))return o;let n=t.match(/\/\.([a-z][a-z0-9-]*)\/extensions\//i);return n?.[1]?n[1].toLowerCase():(0,Ew.createHash)("sha256").update(e).digest("hex").slice(0,8)}function Sw(e){try{let n=(0,Xn.readFileSync)(e,"utf-8").trim().split(`
`).map(s=>s.trim());if(n.length<2)return null;let r=n[0],o=n[n.length-1];if(!o)return null;if(r.startsWith("source=")){let s=r.slice(7),i=s.indexOf("@");return i===-1?{source:s,version:"unknown",distDir:o}:{source:s.slice(0,i),version:s.slice(i+1),distDir:o}}return{source:"",version:r,distDir:o}}catch{return null}}function To(e){let t=(0,St.join)(e??(0,St.join)((0,Ei.homedir)(),".jolli","jollimemory"),"dist-paths"),n;try{n=(0,Xn.readdirSync)(t).sort()}catch{return[]}let r=[];for(let o of n){let s=(0,St.join)(t,o),i=Sw(s);i&&r.push({source:o,version:i.version,distDir:i.distDir,available:(0,Xn.existsSync)(i.distDir)})}return r}async function bw(e){let t=(0,St.join)(e??(0,St.join)((0,Ei.homedir)(),".jolli","jollimemory"),"dist-paths"),n=[];for(let r of To(e))if(!r.available)try{await(0,Hc.unlink)((0,St.join)(t,r.source)),n.push(r.source),Uc.info("Pruned stale dist-paths/%s (dir gone: %s)",r.source,r.distDir)}catch(o){Uc.warn("Failed to prune stale dist-paths/%s: %s",r.source,o.message)}return n}var Wc=["cli","vscode","cursor"];function Si(e){let t=e.filter(o=>o.available);if(t.length===0)return;let n=t[0];for(let o=1;o<t.length;o++)wi(t[o].version,n.version)>0&&(n=t[o]);let r=t.filter(o=>wi(o.version,n.version)===0);for(let o of Wc){let s=r.find(i=>i.source===o);if(s)return s}return n}async function Tw(){let e=(0,St.join)((0,Ei.homedir)(),".jolli","jollimemory"),t=(0,St.join)(e,"dist-path"),n=Sw(t);if(!n)return!1;let r;if(n.source==="cli")r="cli";else{let o=Bc(n.distDir);r=/^[a-f0-9]{8}$/.test(o)?"vscode":o}return r==="vscode-extension"&&(r="vscode"),await go(r,n.distDir,n.version),await(0,Hc.unlink)(t).catch(()=>{}),Uc.info("Migrated legacy dist-path -> dist-paths/%s (version=%s, distDir=%s)",r,n.version,n.distDir),!0}var _w=f("DispatchScripts"),yx=`#!/bin/bash
# JolliMemory dist-path resolver.
# Outputs the absolute path to the current winning dist directory: the highest
# core version across all registered sources whose path exists. Ties (same core
# version) are broken by a preference list (cli > vscode > cursor > \u2026) because
# the bundled @jolli.ai/cli core is identical at equal versions \u2014 the tie-break
# only makes the winner deterministic and favours the canonical CLI build.
#
# When JOLLI_DIST_PREFER_SOURCE is set (for example by Claude Plugin CLI
# commands), that source is SOFT-preferred: it wins a
# version TIE \u2014 selected only if present, complete, and already at the top version
# BEST_VER \u2014 but never beats a strictly-higher version from another source, and a
# missing / incomplete / older prefer silently falls through to normal cross-source
# selection below. This replaces the former hard pin (resolve-only-that-source-or-
# fail) so every install source competes on version.
#
# Optional arg $1 = a required script filename (e.g. "PrepareMsgHook.js"). When
# given, a candidate dist is eligible ONLY if it actually contains that file, so
# an INCOMPLETE source that wins on version is skipped and resolution falls
# through to the next-best complete source. Without this, a source registered
# with a partial dist (e.g. the Claude Code plugin before it bundled the git-hook
# scripts) would win, and run-hook would 'node <dist>/PrepareMsgHook.js' a
# missing file \u2014 non-zero exit that BLOCKS the commit. Callers that don't care
# (run-cli baking, external tools) omit the arg and get the legacy dir-only check.
#
# Stable public API: run-hook, run-cli, legacy hooks still on disk, and
# third-party tools all rely on this script's "output a path, exit 0/1"
# contract.
#
# EVERY command below is a bash builtin \u2014 no sed, no sort, no grep. This script
# runs on the front of every hook dispatch, including the SessionStart hook a user
# waits on before Claude Code gives them a prompt. The previous form spent two
# 'sed' processes per registered source plus a four-process 'printf | sort -V |
# tail | grep' pipeline per version comparison: ~40 processes and ~60 ms of pure
# fork/exec to read a dozen two-line files. It is now ~5 ms. Keep it fork-free \u2014
# a single innocuous-looking pipeline here is paid by every git hook and every
# session start.

DIR="$HOME/.jolli/jollimemory"
REQUIRED="$1"
PREFER="$JOLLI_DIST_PREFER_SOURCE"
BEST_PATH=""
BEST_VER="0.0.0"

# has_required <distDir> \u2014 true when no file is required, or the required file
# exists inside the candidate dist. Keeps the eligibility test in one place so
# both passes stay in lockstep.
has_required() {
  [ -z "$REQUIRED" ] && return 0
  [ -f "$1/$REQUIRED" ]
}

# read_entry <file> \u2014 sets ENTRY_VER / ENTRY_PATH from a two-line registration.
# 'read' is a builtin, so this replaces two 'sed' processes per source. A final
# line with no trailing newline (which is how these files are actually written)
# still populates the variable even though 'read' reports failure, hence the
# unconditional 'return 0'. The CR strip mirrors run-hook's node-path reader: a
# file round-tripped through a Windows-side sync would otherwise fail the -d test
# with no diagnostic anywhere.
read_entry() {
  ENTRY_VER=""
  ENTRY_PATH=""
  [ -f "$1" ] || return 1
  { IFS= read -r ENTRY_VER; IFS= read -r ENTRY_PATH; } < "$1"
  ENTRY_VER="\${ENTRY_VER%$'\\r'}"
  ENTRY_PATH="\${ENTRY_PATH%$'\\r'}"
  return 0
}

# ver_gt <a> <b> \u2014 true when version <a> sorts strictly ABOVE <b>.
#
# Replaces 'sort -V' with dotted-numeric comparison over the first three fields,
# which is the shape every version here has (dev/unknown are normalised to 0.0.0
# by the caller). It also CLOSES a documented divergence rather than adding one:
# 'sort -V' ranks 1.0.0-rc.1 above 1.0.0, while semver \u2014 and the in-process
# compareSemver in cli/src/install/DistPathResolver.ts this script must agree
# with \u2014 rank a prerelease below its own release.
#
# The prerelease tail is compared too, not stripped. Dropping it would make
# 1.0.0-rc.1 and 1.0.0-rc.2 compare EQUAL in both directions, and since an equal
# version never displaces the incumbent, the winner would fall out of readdir
# order \u2014 hooks silently routed to the older of two prereleases. Rules are
# semver's: identifier by identifier, numerically when both are numeric, and a
# longer identifier list wins when every shared one is equal.
#
# Build metadata is stripped FIRST, which is both what semver requires (it takes
# no part in precedence) and the only way the numeric scrub below stays honest:
# the third field of 1.0.0+b1 is '0+b1', and scrubbing non-digits out of that
# yields '01' \u2014 so without this the version compared EQUAL to 1.0.1 and ABOVE a
# plain 1.0.0, where compareSemver says below and equal. That is exactly the
# equal-compare shape described above, with readdir order deciding the winner.
ver_gt() {
  # LC_ALL is local so the string comparison below is byte order everywhere. It is
  # an assignment, not a subprocess: bash re-inits its collation on it and restores
  # the caller's on return.
  local av="\${1%%+*}" bv="\${2%%+*}" a b apre="" bpre="" i x y ap bp ai bi LC_ALL=C
  a="\${av%%-*}"
  b="\${bv%%-*}"
  [ "$a" != "$av" ] && apre=1
  [ "$b" != "$bv" ] && bpre=1
  for i in 1 2 3; do
    x="\${a%%.*}"
    y="\${b%%.*}"
    # Backstop for anything else non-numeric that reaches a field (a hand-edited
    # registration, a tag we do not know); build metadata is already gone by here.
    x="\${x//[!0-9]/}"
    y="\${y//[!0-9]/}"
    [ -z "$x" ] && x=0
    [ -z "$y" ] && y=0
    [ "$x" -gt "$y" ] && return 0
    [ "$x" -lt "$y" ] && return 1
    case "$a" in *.*) a="\${a#*.}" ;; *) a=0 ;; esac
    case "$b" in *.*) b="\${b#*.}" ;; *) b=0 ;; esac
  done
  # Numerically equal. A release outranks its own prerelease; two releases are
  # equal; two prereleases fall through to their identifiers.
  [ -z "$apre" ] && [ -n "$bpre" ] && return 0
  [ -n "$apre" ] && [ -z "$bpre" ] && return 1
  [ -z "$apre" ] && return 1
  ap="\${av#*-}"
  bp="\${bv#*-}"
  while [ -n "$ap" ] || [ -n "$bp" ]; do
    ai="\${ap%%.*}"
    bi="\${bp%%.*}"
    # Ran out of identifiers: the shorter list is the lower version (rc < rc.1).
    [ -z "$ai" ] && return 1
    [ -z "$bi" ] && return 0
    case "$ai$bi" in
      # Either side non-numeric: byte order, which puts digits below letters and
      # so agrees with semver's "numeric identifiers rank below alphanumeric".
      *[!0-9]*)
        [[ "$ai" > "$bi" ]] && return 0
        [[ "$ai" < "$bi" ]] && return 1
        ;;
      *)
        [ "$ai" -gt "$bi" ] && return 0
        [ "$ai" -lt "$bi" ] && return 1
        ;;
    esac
    case "$ap" in *.*) ap="\${ap#*.}" ;; *) ap="" ;; esac
    case "$bp" in *.*) bp="\${bp#*.}" ;; *) bp="" ;; esac
  done
  return 1
}

# Pass 1 \u2014 highest core version wins. The comparison is STRICT greater-than: an
# equal version does NOT overwrite, so enumeration (alphabetical) order never
# decides a tie.
if [ -d "$DIR/dist-paths" ]; then
  for f in "$DIR/dist-paths"/*; do
    read_entry "$f" || continue
    VER="$ENTRY_VER"
    CANDIDATE="$ENTRY_PATH"
    [ -z "$VER" ] && continue
    [ -d "$CANDIDATE" ] || continue
    has_required "$CANDIDATE" || continue
    case "$VER" in
      dev|unknown) VER_CMP="0.0.0" ;;
      *)           VER_CMP="$VER" ;;
    esac
    if [ -z "$BEST_PATH" ]; then
      BEST_PATH="$CANDIDATE"
      BEST_VER="$VER_CMP"
    elif ver_gt "$VER_CMP" "$BEST_VER"; then
      BEST_PATH="$CANDIDATE"
      BEST_VER="$VER_CMP"
    fi
  done
fi

# Soft prefer \u2014 when JOLLI_DIST_PREFER_SOURCE names a source (the Claude Code
# plugin sets it to "claude-plugin" for its CLI recipes), that source WINS a
# version tie ahead of the global preference order below: it is chosen only if it is
# present, complete, AND already at the top version BEST_VER. A strictly-higher
# version elsewhere has already won BEST_VER in Pass 1, so prefer never overrides it;
# a missing / incomplete / older prefer falls through to Pass 2. This is the soft
# replacement for the former hard pin \u2014 every source still competes on version.
if [ -n "$BEST_PATH" ] && [ -n "$PREFER" ]; then
  if read_entry "$DIR/dist-paths/$PREFER"; then
    PVER="$ENTRY_VER"
    PPATH="$ENTRY_PATH"
    case "$PVER" in dev|unknown) PVER="0.0.0" ;; esac
    if [ -d "$PPATH" ] && has_required "$PPATH" && [ "$PVER" = "$BEST_VER" ]; then
      echo "$PPATH"
      exit 0
    fi
  fi
fi

# Pass 2 \u2014 among sources tied at BEST_VER, prefer the order below (kept in lockstep
# with SOURCE_PREFERENCE_ORDER in DistPathResolver.ts). Only overrides when the
# preferred source carries the same top version AND is itself complete (has the
# required file, if any) \u2014 a preferred-but-incomplete source must not displace the
# complete pass-1 winner.
if [ -n "$BEST_PATH" ]; then
  for pref in ${Wc.join(" ")}; do
    read_entry "$DIR/dist-paths/$pref" || continue
    PVER="$ENTRY_VER"
    PPATH="$ENTRY_PATH"
    [ -d "$PPATH" ] || continue
    has_required "$PPATH" || continue
    case "$PVER" in dev|unknown) PVER="0.0.0" ;; esac
    if [ "$PVER" = "$BEST_VER" ]; then
      BEST_PATH="$PPATH"
      break
    fi
  done
fi

if [ -n "$BEST_PATH" ]; then
  echo "$BEST_PATH"
else
  echo "ERROR: No valid Jolli Memory dist-path found. Run 'jolli enable' to fix." >&2
  exit 1
fi
`,wx=`#!/bin/bash
# JolliMemory hook runner.
# Takes a hook-type argument; execs the corresponding node hook entry in the
# winning dist (selected by resolve-dist-path).
#
# The hook-type \u2192 script name is resolved FIRST, then passed to resolve-dist-path
# so it can skip any winning-but-incomplete dist that lacks this specific script
# and fall through to a complete source. This is what stops a partial source
# (e.g. a plugin bundle missing PrepareMsgHook.js) from turning a commit hook into
# 'node <missing file>' \u2014 a non-zero exit that would BLOCK the git operation.

HOOK_TYPE="$1"
shift

# Both failure exits below are otherwise completely silent by design (hooks must
# never block git), which means a dispatch failure \u2014 e.g. a dist mid-reinstall
# and briefly missing a required script \u2014 leaves no trace anywhere: no debug.log
# entry (Node never starts), no queue file, nothing. This breadcrumb is the one
# place such a failure becomes visible after the fact. It's overwritten on every
# invocation (last-failure only, not an append log) and cleared on the next
# successful dispatch, so its mere existence means "the most recent hook run
# failed," not "a hook failed at some point in history."
BREADCRUMB="$HOME/.jolli/jollimemory/last-hook-dispatch-failure"
write_dispatch_failure() {
  printf '%s %s %s cwd=%s\\n' "$(date -u +%Y-%m-%dT%H:%M:%SZ)" "$1" "$2" "$PWD" > "$BREADCRUMB"
}

case "$HOOK_TYPE" in
  post-commit)        SCRIPT="PostCommitHook.js" ;;
  post-merge)         SCRIPT="PostMergeHook.js" ;;
  post-rewrite)       SCRIPT="PostRewriteHook.js" ;;
  prepare-commit-msg) SCRIPT="PrepareMsgHook.js" ;;
  pre-push)           SCRIPT="PrePushHook.js" ;;
  stop)               SCRIPT="StopHook.js" ;;
  session-start)      SCRIPT="SessionStartHook.js" ;;
  gemini-after-agent) SCRIPT="GeminiAfterAgentHook.js" ;;
  *)                  echo "ERROR: unknown hook type '$HOOK_TYPE'" >&2; exit 0 ;;
esac

DIST=$("$HOME/.jolli/jollimemory/resolve-dist-path" "$SCRIPT") || {
  write_dispatch_failure "$HOOK_TYPE" "no-valid-dist"
  exit 0
}

# Resolve a usable node binary. The caller's PATH comes first so interactive
# shells keep their own version-manager choice (nvm/volta/fnm/\u2026). GUI git
# clients launch git with a minimal PATH that lacks those locations, so when
# PATH has no node, fall back to the runtime the IDE detected and recorded in
# node-path (one absolute path per line; its writer already proved the binary
# runs and meets the minimum version, so an -x check is enough here \u2014 never
# spawn 'node --version' on this path: prepare-commit-msg is blocking).
NODE_BIN=""
if command -v node >/dev/null 2>&1; then
  NODE_BIN="node"
else
  # tr -d '\r' strips a CR the file might have picked up from a Windows-side
  # sync (iCloud/Dropbox/OneDrive) or Notepad round-trip: without it, [ -x
  # "/abs/path\r" ] would fail and the dispatcher would silently no-op on a
  # machine that clearly has Node \u2014 a debug hazard with no user-visible error.
  RECORDED=$(sed -n '1p' "$HOME/.jolli/jollimemory/node-path" 2>/dev/null | tr -d '\r')
  if [ -n "$RECORDED" ] && [ -x "$RECORDED" ]; then
    NODE_BIN="$RECORDED"
  fi
fi

if [ -z "$NODE_BIN" ]; then
  echo "ERROR: node runtime not found. Jolli Memory hooks require Node.js." >&2
  write_dispatch_failure "$HOOK_TYPE" "no-node-runtime"
  exit 0
fi

# Guarded on existence because rm is NOT a shell builtin: unconditional, this
# costs a fork+exec on EVERY dispatch, including prepare-commit-msg, which runs
# on the blocking commit path this file is otherwise careful to keep spawn-free.
# The test operator IS a builtin, so the common case (no prior failure) now
# costs nothing, and the || : keeps a failed removal from ending the script
# non-zero. exec follows immediately, so the guard's own false exit status
# (1, when no breadcrumb exists) is never observable.
[ -e "$BREADCRUMB" ] && { rm -f "$BREADCRUMB" || :; }
exec "$NODE_BIN" "$DIST/$SCRIPT" "$@"
`,Ex=`#!/bin/bash
# JolliMemory CLI runner.
# Execs node on the winning dist's Cli.js with all args passed through.
# Requires the winning dist to actually contain Cli.js (every real dist does),
# so a partial source can't win run-cli either.

DIST=$("$HOME/.jolli/jollimemory/resolve-dist-path" Cli.js) || exit 1

# Node resolution mirrors run-hook: PATH first (respects the user's own
# version-manager choice), then the IDE-recorded runtime for GUI clients
# whose minimal PATH lacks node. See run-hook for the full rationale.
NODE_BIN=""
if command -v node >/dev/null 2>&1; then
  NODE_BIN="node"
else
  # tr -d '\r' strips a CR the file might have picked up from a Windows-side
  # sync (iCloud/Dropbox/OneDrive) or Notepad round-trip: without it, [ -x
  # "/abs/path\r" ] would fail and the dispatcher would silently no-op on a
  # machine that clearly has Node \u2014 a debug hazard with no user-visible error.
  RECORDED=$(sed -n '1p' "$HOME/.jolli/jollimemory/node-path" 2>/dev/null | tr -d '\r')
  if [ -n "$RECORDED" ] && [ -x "$RECORDED" ]; then
    NODE_BIN="$RECORDED"
  fi
fi

if [ -z "$NODE_BIN" ]; then
  echo "ERROR: node runtime not found. Jolli Memory CLI requires Node.js." >&2
  exit 1
fi

exec "$NODE_BIN" "$DIST/Cli.js" "$@"
`;async function Jc(e,t){let n=!1;try{n=await(0,sn.readFile)(e,"utf-8")===t}catch{}if(n){await(0,sn.chmod)(e,493);return}await N(e,t),await(0,sn.chmod)(e,493)}async function Gc(){let e=(0,_o.join)((0,Rw.homedir)(),".jolli","jollimemory");try{return await(0,sn.mkdir)(e,{recursive:!0}),await Jc((0,_o.join)(e,"resolve-dist-path"),yx),await Jc((0,_o.join)(e,"run-hook"),wx),await Jc((0,_o.join)(e,"run-cli"),Ex),_w.info("Wrote resolve-dist-path, run-hook, and run-cli scripts to %s",e),!0}catch(t){return _w.warn("Failed to write resolve scripts: %s",t.message),!1}}var Ro=require("node:fs/promises"),bi=require("node:path");oe();w();ri();var kw=f("GeminiHookInstaller");async function qc(e){let t=(0,bi.join)(e,".gemini"),n=(0,bi.join)(t,"settings.json"),r=Et("gemini-after-agent"),o={},s;try{s=await(0,Ro.readFile)(n,"utf-8"),o=JSON.parse(s)}catch(u){if(u.code!=="ENOENT")throw u}let i=o.hooks??{},a=i.AfterAgent??[],l=rn(a,ti);l.push({hooks:[{type:"command",command:r,name:"jolli-session-tracker"}]}),i.AfterAgent=l,o.hooks=i;let c=JSON.stringify(o,null,"	");return s===c?{path:n}:(await(0,Ro.mkdir)(t,{recursive:!0}),await N(n,c),kw.info("Gemini AfterAgent hook installed"),{path:n})}async function Kc(e){let t=(0,bi.join)(e,".gemini","settings.json"),n;try{let i=await(0,Ro.readFile)(t,"utf-8");n=JSON.parse(i)}catch{return}let r=n.hooks;if(!r)return;let o=r.AfterAgent??[];if(!mo(o,ti))return;let s=rn(o,ti);s.length===0?delete r.AfterAgent:r.AfterAgent=s,Object.keys(r).length===0?delete n.hooks:n.hooks=r,await N(t,JSON.stringify(n,null,"	")),kw.info("Gemini AfterAgent hook removed")}var an=require("node:fs/promises"),bt=require("node:path");oe();w();Se();var xe=f("GitExclude"),ko="# >>> jolli skill exclude >>>",vo="# <<< jolli skill exclude <<<";function Sx(e,t){return bt.win32.isAbsolute(e)||bt.posix.isAbsolute(e)?e:(0,bt.join)(t,e)}var vw=new Map;async function Vc(e){let t=vw.get(e);if(t!==void 0)return t;try{let{stdout:n}=await bn("git",["rev-parse","--git-path","info/exclude"],{cwd:e}),r=n.trim();if(r.length===0)return null;let o=Sx(r,e);return vw.set(e,o),o}catch{return null}}async function Aw(e,t){let n=await Vc(e);if(!n)return xe.warn("Skipping .git/info/exclude update for %s: not a git repo or git unavailable",e),!1;let r="";try{r=await(0,an.readFile)(n,"utf-8")}catch(i){if(i.code!=="ENOENT")return xe.warn("Failed to read %s: %s \u2014 skipping update",n,i.message),!1}let o=Cw(t),s=xw(r,o);if(s===r)return!0;try{return await(0,an.mkdir)((0,bt.dirname)(n),{recursive:!0}),await N(n,s),xe.info("Updated %s with %d Jolli skill exclude paths",n,t.length),!0}catch(i){return xe.warn("Failed to write %s: %s",n,i.message),!1}}async function Yc(e,t){let n=await Vc(e);if(!n)return xe.warn("Skipping .git/info/exclude update for %s: not a git repo or git unavailable",e),!1;let r="";try{r=await(0,an.readFile)(n,"utf-8")}catch(s){if(s.code!=="ENOENT")return xe.warn("Failed to read %s: %s \u2014 skipping update",n,s.message),!1}let o=bx(r,t);if(o===r)return!0;try{return await(0,an.mkdir)((0,bt.dirname)(n),{recursive:!0}),await N(n,o),xe.info("Merged %d Jolli skill exclude path(s) into %s",t.length,n),!0}catch(s){return xe.warn("Failed to write %s: %s",n,s.message),!1}}async function zn(e,t){let n=await Vc(e);if(!n)return xe.warn("Skipping .git/info/exclude cleanup for %s: not a git repo or git unavailable",e),!1;let r;try{r=await(0,an.readFile)(n,"utf-8")}catch(s){return s.code==="ENOENT"?!0:(xe.warn("Failed to read %s: %s \u2014 skipping cleanup",n,s.message),!1)}let o=Tx(r,t);if(o===r)return!0;try{return await N(n,o),xe.info("Removed %d Jolli exclude path(s) from %s",t.length,n),!0}catch(s){return xe.warn("Failed to write %s: %s",n,s.message),!1}}function Cw(e){return`${[ko,...e,vo].join(`
`)}
`}function xw(e,t){let n=e.split(`
`),r=n.indexOf(ko),o=n.indexOf(vo),s=t.slice(0,-1).split(`
`);if(r!==-1&&o!==-1&&o>r)return[...n.slice(0,r),...s,...n.slice(o+1)].join(`
`);if(e.length===0)return t;let i=e.endsWith(`
`)?"":`
`;return`${e}${i}${t}`}function bx(e,t){let n=e.split(`
`),r=n.indexOf(ko),o=n.indexOf(vo),s=r!==-1&&o!==-1&&o>r?n.slice(r+1,o):[],i=new Set(s),a=[...s];for(let l of t)i.has(l)||(i.add(l),a.push(l));return xw(e,Cw(a))}function Tx(e,t){let n=e.split(`
`),r=n.indexOf(ko),o=n.indexOf(vo);if(r===-1||o===-1||o<=r)return e;let s=new Set(t),i=n.slice(r+1,o).filter(c=>!s.has(c)),a=n.slice(0,r),l=n.slice(o+1);return i.length===0?[...a.length>0&&a[a.length-1]===""?a.slice(0,-1):a,...l].join(`
`):[...a,ko,...i,vo,...l].join(`
`)}ad();var Ut=require("node:fs/promises"),ld=require("node:os"),Po=require("node:path");w();var tr=f("GlobalInstructionsInstaller"),cd="<!-- >>> jolli memory instructions >>> -->",dd="<!-- <<< jolli memory instructions <<< -->",$w="## Jolli Memory",Fw=[{host:"claude",relPath:[".claude","CLAUDE.md"]},{host:"gemini",relPath:[".gemini","GEMINI.md"]},{host:"codex",relPath:[".codex","AGENTS.md"]}];function _x(){return`${[cd,$w,"","This repository may have **Jolli Memory** enabled \u2014 a durable record of past","development the current code cannot show: why choices were made, how a topic was","handled before, what was already tried, and where work stopped. Treat it as a","first-class source and reach for it **proactively \u2014 before answering or guessing,","and even when the user never names Jolli** \u2014 whenever a request is memory-shaped","(about intent, history, or prior work). Its reads are read-only and cheap, so","lean toward consulting memory rather than guessing: a hit often changes the","answer, and a miss costs little.","","Two capabilities are available; invoke whichever recall / search skill or tool is","registered in this session \u2014 the exact name varies by host (a plugin skill, a","project skill, or e.g. an `mcp__jollimemory__*` MCP tool), so route by intent, not","by a fixed name:","","- **Recall** \u2014 deep context for one branch (the current branch by default): its","  decisions, a recap, and where work left off.","- **Search** \u2014 full-text lookup across *all* branches: decisions, topics, files.","","Consult memory FIRST, before answering from your own assumptions, when the request","is memory-shaped:","",'- **Why / intent** \u2014 "why is this like this", "why X and not Y", "what was the','  reasoning", or anything where the code shows *what* but not *why*. \u2192 Search (or',"  Recall when it's about the current branch).",'- **How it works / design** \u2014 "how does X work", "how is X built/designed", "how','  would I implement X", or walking through / extending an existing feature or',"  subsystem in this repo. The code shows the mechanism; memory holds why it is","  shaped that way and what was already tried. \u2192 Search (or Recall for the current","  branch). A quick lookup here is cheap and often surfaces rationale and pitfalls",`  the code comments don't \u2014 so search even though the ask starts with "how".`,'- **Prior art** \u2014 "have we done/hit this before", "how was <topic> handled", "is','  there a pattern for this", "where else do we do X", or a bug that may have been',"  seen before. \u2192 Search (decisions / topics / files across ALL branches).",`- **Resume** \u2014 "where were we", "pick up where I left off", "what's left on this`,'  branch", or returning to work after a break. \u2192 Recall (current-branch decisions',"  + recap + where work stopped).","- **Before non-trivial edits** \u2014 before refactoring, changing, or deleting code","  whose intent isn't obvious from the code itself, search memory first; a past","  decision may constrain the change, and skipping this risks re-breaking what a","  prior fix already addressed.","",'Routing: current-branch history or resume \u2192 Recall; cross-branch or "has this','come up before" \u2192 Search. When unsure whether memory helps, run a quick search',"first before answering from your own assumptions.","","Do NOT reach for memory on narrow, current-state facts you can read straight from","the code \u2014 one function's behavior, a type or signature, running a command, a","rename, formatting, or a literal text lookup \u2014 answer those from the code directly.","That exclusion is for single-symbol lookups only; do not let it swallow a",'whole-feature "how does it work / how is it designed" question \u2014 that is',"design-shaped, so search memory first (per the How it works / design rule above).","","Treat any concrete fact memory states as of-its-time: use it for why / intent /","prior context, but verify names, paths, and code shape against the current code","before relying on them. If no Jolli memory capability is registered here (Jolli","Memory not enabled in this repo), fall back to normal behavior.",dd].join(`
`)}
`}function jw(e){return e==="enabled"?{write:!0}:e==="disabled"?{write:!1,remove:!0}:{write:!1}}function Rx(e,t){let n=e.split(`
`),r=n.indexOf(cd),o=n.indexOf(dd),s=t.slice(0,-1).split(`
`);if(r!==-1&&o!==-1&&o>r)return[...n.slice(0,r),...s,...n.slice(o+1)].join(`
`);let i=n.indexOf($w);if(i!==-1){let l=n.length;for(let d=i+1;d<n.length;d++)if(/^#{1,2} /.test(n[d])){l=d;break}let c=n.slice(0,i).join(`
`),u=n.slice(l).join(`
`);return`${c.length>0?`${c}
`:""}${t}${u}`}if(e.length===0)return t;let a=e.endsWith(`
`)?"":`
`;return`${e}${a}${t}`}async function kx(e,t){let n="";try{n=await(0,Ut.readFile)(e,"utf-8")}catch(o){if(o.code!=="ENOENT"){tr.warn("Failed to read %s: %s \u2014 skipping",e,o.message);return}}let r=Rx(n,t);if(r!==n)try{await(0,Ut.mkdir)((0,Po.dirname)(e),{recursive:!0}),await(0,Ut.writeFile)(e,r,"utf-8"),tr.info("Updated %s with Jolli Memory instructions",e)}catch(o){tr.warn("Failed to write %s: %s",e,o.message)}}async function Uw(e){let t=_x(),n=(0,ld.homedir)();for(let r of Fw)e[r.host]&&await kx((0,Po.join)(n,...r.relPath),t)}function vx(e){let t=e.split(`
`),n=t.indexOf(cd),r=t.indexOf(dd);if(n===-1||r===-1||r<n)return e;let o=n>0&&t[n-1]===""?n-1:n;return[...t.slice(0,o),...t.slice(r+1)].join(`
`)}async function Ax(e){let t;try{t=await(0,Ut.readFile)(e,"utf-8")}catch(r){r.code!=="ENOENT"&&tr.warn("Failed to read %s: %s \u2014 skipping",e,r.message);return}let n=vx(t);if(n!==t)try{await(0,Ut.writeFile)(e,n,"utf-8"),tr.info("Removed Jolli Memory instructions from %s",e)}catch(r){tr.warn("Failed to write %s: %s",e,r.message)}}async function Hw(){let e=(0,ld.homedir)();for(let t of Fw)await Ax((0,Po.join)(e,...t.relPath))}var _e=require("node:os"),q=require("node:path");le();w();var Bw=require("node:fs"),rr=require("node:fs/promises"),nr=require("node:path");le();w();var ud=f("McpRegistration"),pd="jollimemory";function Cx(e,t,n,r){return e==="win32"&&n?{command:"node",args:[n,...r]}:{command:t,args:[...r]}}function md(e,t,n){return Cx(e,t,n,["mcp"])}function fd(e){let t=Si(To(e));return t?(0,nr.join)(t.distDir,"Cli.js"):void 0}function Ww(e){let t=Si(To(e));if(!t)return;let n=(0,nr.join)(t.distDir,"McpLauncher.js");return(0,Bw.existsSync)(n)?n:void 0}var Jw="/.mcp.json";async function Gw(e){let t=(0,nr.join)(e,".mcp.json"),n;try{n=JSON.parse(await(0,rr.readFile)(t,"utf-8"))}catch(l){if(l.code!=="ENOENT"){ud.warn("Skipping MCP registration: %s exists but is unreadable/invalid (%s)",t,String(l));return}n={}}let r=n.mcpServers??{},o=ie(),s=(0,nr.join)(o,"run-cli"),i=process.platform==="win32"?fd(o):void 0;r[pd]=md(process.platform,s,i);let a={...n,mcpServers:r};await(0,rr.writeFile)(t,`${JSON.stringify(a,null,2)}
`,"utf-8"),ud.info("Registered MCP server in %s",t)}async function qw(e){let t=(0,nr.join)(e,".mcp.json"),n;try{n=JSON.parse(await(0,rr.readFile)(t,"utf-8"))}catch{return}n.mcpServers?.[pd]&&(delete n.mcpServers[pd],await(0,rr.writeFile)(t,`${JSON.stringify(n,null,2)}
`,"utf-8"),ud.info("Removed MCP server from %s",t))}var ln=require("node:fs/promises"),Vw=require("node:path");oe();w();var vi=f("CodexTomlWriter"),Ai="[mcp_servers.jollimemory]";async function Yw(e){try{return(await(0,ln.stat)(e)).mode&511}catch{return 384}}function Kw(e){return`${Ai}
command = ${JSON.stringify(e.command)}
args = ${JSON.stringify(e.args??[])}
`}function Xw(e){if(e.startsWith(Ai))return 0;let t=e.indexOf(`
${Ai}`);return t===-1?-1:t+1}function zw(e){let t=Xw(e);if(t===-1)return e;let n=e.indexOf(`
[`,t+Ai.length),r=n===-1?e.length:n+1,o=e.slice(0,t),s=e.slice(r);return o===""||s===""?o+s:`${o.replace(/\n+$/,"")}

${s}`}async function Qw(e,t){let n="";try{n=await(0,ln.readFile)(e,"utf-8")}catch(i){if(i.code!=="ENOENT"){vi.warn("Skipping Codex MCP: %s unreadable (%s)",e,String(i));return}}let r=zw(n).replace(/\s*$/,""),o=r.length===0?Kw(t):`${r}

${Kw(t)}`;if(o===n){vi.info("Codex MCP server already registered in %s \u2014 no write needed",e);return}await(0,ln.mkdir)((0,Vw.dirname)(e),{recursive:!0});let s=await Yw(e);await N(e,o,s),vi.info("Registered Codex MCP server in %s",e)}async function Zw(e){let t;try{t=await(0,ln.readFile)(e,"utf-8")}catch{return}Xw(t)!==-1&&(await N(e,`${zw(t).replace(/\s*$/,"")}
`,await Yw(e)),vi.info("Removed Codex MCP server from %s",e))}var cn=require("node:fs/promises"),eE=require("node:path");oe();w();var Ci=f("JsonMcpWriter"),hd="jollimemory",tE="mcpServers";async function nE(e){try{return(await(0,cn.stat)(e)).mode&511}catch{return}}async function Qe(e,t,n=tE){let r,o="";try{let c=await(0,cn.readFile)(e,"utf-8");o=c,r=c.trim()===""?{}:JSON.parse(c)}catch(c){if(c.code!=="ENOENT"){Ci.warn("Skipping MCP registration: %s unreadable/invalid (%s)",e,String(c));return}r={}}let s=r[n]??{},i=()=>`${JSON.stringify({...r,[n]:s},null,2)}
`,a=i();s[hd]=t;let l=i();if(l===o||l===a){Ci.info("MCP server already registered in %s \u2014 no write needed",e);return}await(0,cn.mkdir)((0,eE.dirname)(e),{recursive:!0}),await N(e,l,await nE(e)),Ci.info("Registered MCP server in %s",e)}async function Ze(e,t=tE){let n;try{n=JSON.parse(await(0,cn.readFile)(e,"utf-8"))}catch{return}let r=n[t];r?.[hd]&&(delete r[hd],await N(e,`${JSON.stringify(n,null,2)}
`,await nE(e)),Ci.info("Removed MCP server from %s",e))}var xx=f("HostRegistrars"),Ix={host:"claude",scope:"repo",register:Gw,remove:qw,gitExcludePaths:()=>[Jw]};function et(){let e=ie(),t=process.platform==="win32"?fd(e):void 0;return md(process.platform,(0,q.join)(e,"run-cli"),t)}function Px(){let e=et();if(process.platform!=="win32")return e;let t=Ww(ie());return t?{command:"node",args:[t]}:e}var Nx={host:"cursor",scope:"repo",register:e=>Qe((0,q.join)(e,".cursor","mcp.json"),{...et()}),remove:e=>Ze((0,q.join)(e,".cursor","mcp.json")),gitExcludePaths:()=>["/.cursor/mcp.json"]},Ox={host:"gemini",scope:"global",register:()=>Qe((0,q.join)((0,_e.homedir)(),".gemini","settings.json"),{...et()}),remove:()=>Ze((0,q.join)((0,_e.homedir)(),".gemini","settings.json")),gitExcludePaths:()=>[]},Dx={host:"codex",scope:"global",register:()=>Qw((0,q.join)((0,_e.homedir)(),".codex","config.toml"),Px()),remove:()=>Zw((0,q.join)((0,_e.homedir)(),".codex","config.toml")),gitExcludePaths:()=>[]},Lx={host:"opencode",scope:"global",register:()=>{let e=et(),t={type:"local",command:[e.command,...e.args],enabled:!0};return Qe((0,q.join)((0,_e.homedir)(),".config","opencode","opencode.json"),t,"mcp")},remove:()=>Ze((0,q.join)((0,_e.homedir)(),".config","opencode","opencode.json"),"mcp"),gitExcludePaths:()=>[]},Mx={host:"copilot",scope:"global",register:()=>Qe((0,q.join)((0,_e.homedir)(),".copilot","mcp-config.json"),{...et()}),remove:()=>Ze((0,q.join)((0,_e.homedir)(),".copilot","mcp-config.json")),gitExcludePaths:()=>[]},$x={host:"copilotChat",scope:"global",register:()=>{let e=et(),t={type:"stdio",command:e.command,args:e.args};return Qe((0,q.join)(pt("Code"),"User","mcp.json"),t,"servers")},remove:()=>Ze((0,q.join)(pt("Code"),"User","mcp.json"),"servers"),gitExcludePaths:()=>[]},Fx={host:"cline",scope:"global",register:async()=>{for(let e of await za())await Qe(fs(e),{...et()})},remove:async()=>{for(let e of jr())await Ze(fs(e))},gitExcludePaths:()=>[]},jx={host:"devin",scope:"global",register:()=>Qe((0,q.join)((0,_e.homedir)(),".config","devin","config.json"),{...et(),transport:"stdio"}),remove:()=>Ze((0,q.join)((0,_e.homedir)(),".config","devin","config.json")),gitExcludePaths:()=>[]},Ux={host:"antigravity",scope:"global",register:()=>Qe((0,q.join)((0,_e.homedir)(),".gemini","config","mcp_config.json"),{...et()}),remove:()=>Ze((0,q.join)((0,_e.homedir)(),".gemini","config","mcp_config.json")),gitExcludePaths:()=>[]},Hx={host:"kimi",scope:"global",register:()=>Qe((0,q.join)(Es(),"mcp.json"),{...et()}),remove:()=>Ze((0,q.join)(Es(),"mcp.json")),gitExcludePaths:()=>[]};function or(e){let t=[];return e.claude&&t.push(Ix),e.cursor&&t.push(Nx),e.gemini&&t.push(Ox),e.codex&&t.push(Dx),e.opencode&&t.push(Lx),e.copilot&&t.push(Mx),e.copilotChat&&t.push($x),e.cline&&t.push(Fx),e.devin&&t.push(jx),e.antigravity&&t.push(Ux),e.kimi&&t.push(Hx),t}var Bx={claude:!0,codex:!0,cursor:!0,gemini:!0,opencode:!0,copilot:!0,copilotChat:!0,cline:!0,devin:!0,antigravity:!0,kimi:!0};async function gd(e,t,n,r){for(let o of e)try{await r(o)}catch(s){xx.warn("MCP %s failed for %s in %s (non-fatal): %s",n,o.host,t,String(s))}}async function yd(e,t){let n=or(t).filter(r=>r.scope==="repo");await gd(n,e,"registration",r=>r.register(e))}async function rE(e){let t=or(e).filter(n=>n.scope==="global");await gd(t,"(global)","registration",n=>n.register(""))}async function wd(e){let t=or(Bx).filter(n=>n.scope==="repo");await gd(t,e,"removal",n=>n.remove(e))}var fe=require("node:fs/promises"),ce=require("node:path");oe();w();var No=`### Shell prerequisite

This block requires a POSIX bash shell. On Linux/macOS the system bash works.
**On Windows, use Git Bash** (the bash bundled with Git for Windows). Other
Windows "bash" options \u2014 \`C:\\Windows\\System32\\bash.exe\`, the WindowsApps
alias, or any WSL bash \u2014 see a separate Linux home directory and will not
find the Jolli entry script that lives under \`%USERPROFILE%\`.

If Git Bash is not available on Windows, STOP and tell the user:
"Jolli skill needs Git Bash on Windows. Install Git for Windows from
https://git-scm.com/download/win and retry."

Do NOT fall back to \`npm run\`, \`npx\`, \`node\` directly, PowerShell-native
commands, WSL bash, or any workspace-local script \u2014 those bypass the
security recipe and the dist resolver and will not produce valid output.`;var Re=f("SkillInstaller"),sr="1.0.3",sE=["jollimemory-recall","jolli-memory-recall"],Oo=[{host:"agents-std",relativeDir:[".agents","skills"],enabled:()=>!0}],Sd=[".claude","skills"],Do=[{name:"jolli-recall",build:Kx},{name:"jolli-search",build:Vx},{name:"jolli-local-run",build:Yx},{name:"jolli-remote-run",build:Xx},{name:"jolli",build:zx}],N1=Do.map(e=>e.name),iE=["jolli-pr"],aE=Oo.flatMap(e=>Do.map(t=>`/${e.relativeDir.join("/")}/${t.name}/`)),xi=["/.claude/skills/jolli/"],lE=[...Oo.map(e=>`/${e.relativeDir.join("/")}/jolli/`),...xi];async function Wx(e,t={}){for(let n of sE)await Td((0,ce.join)(e,".claude","skills",n),"legacy");await bd(e);for(let n of Oo){if(!n.enabled(t))continue;let r=(0,ce.join)(e,...n.relativeDir);for(let o of Do)await fE(r,o.name,o.build())}await Pi(e),await zn(e,Ii)}async function bd(e){for(let t of Oo){let n=(0,ce.join)(e,...t.relativeDir);for(let r of iE)await Td((0,ce.join)(n,r),"retired")}}async function Td(e,t){let n=(0,ce.join)(e,"SKILL.md"),r;try{r=await(0,fe.readFile)(n,"utf-8")}catch{return}if(!_d(r)){Re.info("Keeping %s \u2014 no Jolli ownership marker (user-owned)",e);return}try{await(0,fe.rm)(e,{recursive:!0,force:!0}),Re.info("Removed %s Jolli skill at %s",t,e)}catch(o){Re.warn("Failed to remove %s skill at %s: %s",t,e,o.message)}}async function cE(e,t={}){return Wx(e,t)}async function dE(e){let t=(0,ce.join)(e,...Sd),n=(0,ce.join)(t,"jolli","SKILL.md");try{if(!(await(0,fe.readFile)(n,"utf-8")).includes('vendor: "jolli.ai"')){Re.info("Skipping umbrella write \u2014 existing %s lacks vendor marker (user-owned)",n);return}}catch{}await fE(t,"jolli",Qx())}var Ed=[".cursor","skills"],uE=Do.filter(e=>e.name!=="jolli"),Ii=[`/${Ed.join("/")}/`,...uE.map(e=>`/${Ed.join("/")}/${e.name}/`)];async function Pi(e){let t=(0,ce.join)(e,...Ed);for(let n of uE){let r=(0,ce.join)(t,n.name),o=!1;try{o=(await(0,fe.lstat)(r)).isSymbolicLink()}catch{continue}if(o){await(0,fe.rm)(r,{recursive:!0,force:!0}),Re.info("Removed cursor mirror symlink at %s",r);continue}await Td(r,"cursor mirror")}}async function pE(e){let t=[...Oo.map(n=>n.relativeDir),Sd];for(let n of t){let r=(0,ce.join)(e,...n,"jolli"),o=(0,ce.join)(r,"SKILL.md"),s;try{s=await(0,fe.readFile)(o,"utf-8")}catch{continue}if(s.includes('vendor: "jolli.ai"'))try{await(0,fe.rm)(r,{recursive:!0,force:!0}),Re.info("Removed Jolli umbrella menu at %s",r)}catch(i){Re.warn("Failed to remove umbrella at %s: %s",r,i.message)}}}var Jx=[...Do.filter(e=>e.name!=="jolli").map(e=>e.name),...iE,...sE];async function mE(e){for(let t of Jx){let n=(0,ce.join)(e,...Sd,t),r=(0,ce.join)(n,"SKILL.md"),o;try{o=await(0,fe.readFile)(r,"utf-8")}catch{continue}if(!_d(o)){Re.info("Keeping %s \u2014 no Jolli ownership marker (user-owned)",n);continue}try{await(0,fe.rm)(n,{recursive:!0,force:!0}),Re.info("Removed legacy Jolli skill at %s",n)}catch(s){Re.warn("Failed to remove legacy skill at %s: %s",n,s.message)}}}var Gx=/(?:^|\n)[ \t]*revision:\s*(\d+)/,qx=-1;function oE(e){let t=e.match(Gx),n=t?Number.parseInt(t[1],10):Number.NaN;return Number.isFinite(n)?n:qx}function _d(e){return e.includes('vendor: "jolli.ai"')||e.includes("jolli-skill-version:")}async function fE(e,t,n){let r=(0,ce.join)(e,t),o=(0,ce.join)(r,"SKILL.md"),s=oE(n);try{let i=await(0,fe.readFile)(o,"utf-8");if(!_d(i)){Re.info("Skipping %s SKILL.md \u2014 no Jolli ownership marker (user-owned)",t);return}if(oE(i)>=s)return}catch{}try{await(0,fe.mkdir)(r,{recursive:!0}),await N(o,n),Re.info("Wrote SKILL.md (revision %d) to %s",s,o)}catch(i){Re.warn("Failed to write %s SKILL.md: %s",t,i.message)}}function hE(e,t){return`${No}

### Invocation

Generate a fresh random 16-character hex string (the "delimiter token") for
this invocation \u2014 e.g. \`3f8a9b2c5d7e1f4a\`. Quickly scan the user's argument:
if the argument text contains a line that is exactly \`JOLLI_ARG_<delimiter
token>_END\`, regenerate the delimiter token and re-check.

Then run this Bash, replacing the two \`<DELIM>\` occurrences with your
delimiter token and replacing \`<user-arg>\` with the user's input verbatim:

\`\`\`bash
JOLLI_INVOKED_VIA=skill:${e} "$HOME/.jolli/jollimemory/run-cli" ${e} --arg-stdin${t} <<'JOLLI_ARG_<DELIM>_END'
<user-arg>
JOLLI_ARG_<DELIM>_END
\`\`\`

If you cannot follow the above structure (e.g., your environment doesn't
support here-docs), STOP and tell the user "Jolli skill cannot run safely
in this environment." DO NOT attempt to interpolate the argument into argv
or any double-quoted shell string \u2014 that path has a known shell injection
vector.`}function Kx(){return`---
name: jolli-recall
description: Recall prior development context from Jolli for the current branch. Use when the user wants to recall, remember, or resume prior work on a branch.
metadata:
  version: "${sr}"
  revision: 3
  vendor: "jolli.ai"
---

# Jolli Recall

> Every commit deserves a Memory. Every memory deserves a Recall.

Load the structured development context for a branch \u2014 commits with their
distilled topics (trigger / response / decisions / files), plus any plans
and notes that the work referenced. Synthesize a grounded answer to the
user's prompt about that branch.

## Step 1: Load the recall result

\`<user-arg>\` is a branch name (exact or fragment) or empty (current branch).

### Preferred: MCP tool

If the \`recall\` tool from the \`jollimemory\` MCP server is available, call it with
\`{ "branch": "<user-arg>" }\` (omit \`branch\` when \`<user-arg>\` is empty). It
returns a \`type\`-tagged object \u2014 \`recall\` / \`catalog\` / \`error\` \u2014 identical to
the CLI fallback below.

Match that tool by what it DOES, not by one host's spelling of it: Claude Code
prefixes it as \`mcp__jollimemory__recall\`, while Codex exposes a bare \`recall\`
inside the \`mcp__jollimemory\` namespace and loads MCP tools lazily \u2014 so an empty
first look is not proof it is absent.

### Fallback: CLI here-doc

Only if the jollimemory MCP server is not registered at all \u2014 NOT merely because
one spelling of the tool name is absent from your tool list. Then use:

${hE("recall"," --format json")}

If \`~/.jolli/jollimemory/run-cli\` does not exist, tell the user:
"Jolli not installed. Please install via \`npm install -g @jolli.ai/cli && jolli enable\` or install the Jolli VS Code extension."
Do not attempt further processing.

Both the MCP tool and the CLI fallback return the same \`type\`-tagged union.
Handle the result using Step 2 regardless of which path was used.

## Step 2: Handle the result by \`type\`

The result (from either the MCP tool or the CLI) is a \`type\`-tagged object:

- \`type:"recall"\` \u2192 render Part A + Part B below.
- \`type:"catalog"\` \u2192 semantic-match \`<user-arg>\` against \`branches[].branch\` /
  \`commitMessages\` / \`topicTitles\`. One match \u2192 repeat Step 1 with that branch.
  Many \u2192 list and ask. None \u2192 show catalog, ask to clarify.
- \`type:"error"\` \u2192 surface \`message\` verbatim (translated); for "no records",
  suggest \`jolli enable\`. Never fabricate.

### type: "recall" \u2014 full payload returned

You have a \`RecallPayload\` with these fields:

- \`branch\`, \`period: { start, end }\`, \`commitCount\`, \`totalFilesChanged\`,
  \`totalInsertions\`, \`totalDeletions\` \u2014 branch-level facts.
- \`commits[]\` \u2014 per-commit projection. Each carries:
  - identity (always present): \`hash\` (8-char display), \`fullHash\`, \`branch\`,
    \`commitDate\`, \`commitAuthor\`, \`commitMessage\`; optional \`commitType?\`,
    \`ticketId?\`.
  - \`diffStats?\` \u2014 \`{ filesChanged, insertions, deletions }\`.
  - \`recap?\` \u2014 1-3 paragraphs of plain-English narrative.
  - \`topics[]\` \u2014 each with **always present**: \`title\`, **\`decisions\` (\u2605)**;
    **may be absent**: \`trigger?\`, \`response?\`, \`todo?\`, \`filesAffected?\`,
    \`category?\`, \`importance?\`. Trimming rules differ by field:
    - \`response\` is **policy-trimmed unconditionally** when the branch
      ships more than 8 kept commits \u2014 raising \`--budget\` will not bring
      it back. Additionally, on tight budgets it may be dropped
      oldest-first on shorter branches.
    - \`trigger\` is only dropped by \`--budget\` (oldest-first); raising
      \`--budget\` can restore it.
    - \`decisions\` is never dropped from a kept commit (if the budget
      can't fit it, the whole commit is omitted from \`commits[]\`).
  - \`plans?\` \u2014 \`{ slug, title }[]\` refs only; \`slug\` is the **normalized
    base slug** that always resolves to an entry in payload-level \`plans\`.
  - \`notes?\` \u2014 \`{ id, title }[]\` refs only; \`id\` always resolves to an
    entry in payload-level \`notes\`. (Notes use \`id\`, not \`slug\` \u2014 they
    have no archive-suffix mechanism.)
- \`plans[]\` \u2014 branch-deduplicated plan bodies: \`{ slug, title, content? }\`.
  \`content\` may be absent under tight budget \u2014 when absent, the entry is
  still a valid grounding anchor but you can't quote from it.
- \`notes[]\` \u2014 same shape and trimming rule as plans.
- \`stats\`, \`estimatedTokens\`, \`truncated?\`.

Render in two parts (in order):

#### Part A \u2014 Forced fact opener (no paraphrase, no interpretation)

Render the loaded confirmation as a heading + bullet block (not a prose
line). **Facts only \u2014 do not interpret what the branch is "about" here.**
The mandated shape:

\`\`\`markdown
### Loaded \`feature/auth\`

- **Period:** 2026-04-10 \u2192 2026-04-15 (5 days)
- **Commits:** 8 (+312 \u221289, 24 files)
- **Captured:** 12 topics, 5 key decisions, 2 plans, 3 notes
\`\`\`

The heading + bullet shape is required \u2014 a single prose line blends into
the synthesis below and the user loses the visual anchor for verification.
Save interpretation for Part B.

#### Part B \u2014 Free-form synthesis

Pick whatever shape best serves the user's prompt: prose narrative,
chronological timeline, decision-focused bullet list, per-theme
\`###\` sections, side-by-side comparison, mixed. When multiple
distinct themes emerge across the commits, prefer \`###\` per theme \u2014
inline-bold paragraph prefixes blend into a wall under markdown
rendering. The principles below are the only constraints.

#### Universal principles (apply regardless of shape)

1. **Lead with the answer.** No "Let me analyze..." or "Found N commits..."
   preamble.

2. **Ground every concrete claim** to a hash and/or file. Use \`(abc12345)\`
   for hashes and \`[middleware/auth.ts](middleware/auth.ts)\` for files.

3. **Synthesize, don't dump \u2014 but DO use verbatim quotes from stored
   data.** Read everything; fold into coherent prose or bullets.
   Whenever a phrase from \`decisions\` / \`recap\` / \`plans[].content\` /
   \`notes[].content\` captures the answer more compactly than your
   paraphrase, quote it verbatim in **bold** with attribution.

   Quote **complete clauses (typically 10-30 words)** \u2014 not 2-3 word
   fragments that depend on your surrounding paraphrase to mean
   anything. The reader should be able to skim the bold quote alone
   and understand its claim. Format, embedded in narrative:

   *The design chose JWT because* **"the stateless model lets us scale
   horizontally without a shared session store across regions"**
   *(decisions, abc12345)*; *per the auth-redesign plan,* **"all session
   tokens must be opaque, with no client-readable claims, so rotation
   never breaks the API"** *(plan: auth-redesign)*.

   **Bold = verbatim from stored data.** Never use bold for general
   emphasis. Quotes belong inside running prose or bullets that carry
   their own narrative \u2014 never as bare bullets stripped of context.
   Stringing bare quotes is the wall-of-fragments failure mode.

4. **Reply in the user's language.** Template is English; user-visible
   output matches the user.

5. **Don't expose machinery.** No "RecallPayload" / "commits array" /
   "JSON field" / "SearchHit" mentions.

6. **Brief by default \u2014 synthesize, don't dump every commit.** Skip
   routine commits and merge overlapping themes; aim for ~500 words
   on a typical branch, but favor section structure over compression.
   Never collapse \`###\` themes into inline-bold paragraph prefixes
   just to hit a word count \u2014 that produces a wall and defeats the
   structure's purpose. Branches with many distinct themes may
   legitimately run longer; a "deep dive" on a specific theme is
   opt-in.

#### Plan / note stubs on commits

When a commit carries \`plans?\` / \`notes?\` stubs, use the stub title as a
grounding anchor for narrative ("the auth-redesign plan guides this work").

**To quote from a plan or note body**, look up the matching entry in the
top-level \`plans\` / \`notes\` array by its \`slug\` (plans) or \`id\` (notes):

- If the entry has \`content\`: quote verbatim with \`(plan: <slug>)\` /
  \`(note: <id>)\` attribution if relevant to the user's prompt.
- If \`content\` is absent (budget trimming dropped the body): use **only**
  the title as a citation anchor \u2014 never fabricate a quote from a body
  you cannot see.

#### Empty / partial handling

- Empty \`commits\`: tell the user no records were found; suggest running
  \`jolli enable\` if they expected records.
- \`truncated: true\`: policy trims or budget enforcement dropped fields
  or commits. Policy trims drop \`importance: "minor"\` topics (and any
  commit whose every topic is minor) and drop \`topic.response\` when the
  branch ships more than 8 commits; budget trims drop oldest-first
  \`response\` / \`trigger\` / plan / note content. Mention it with a
  one-liner if the user asks for deeper detail; otherwise stay silent.

### type: "catalog" \u2014 branch lookup needed

Returned when no exact branch match was found. Has a \`branches[]\` array
with \`branch\`, \`commitCount\`, \`period\`, \`commitMessages\`, \`topicTitles?\`.
If a \`query\` field is present, semantic-match the user's input against
\`branch\`, \`commitMessages\`, and \`topicTitles\` (the highest-signal source);
support cross-language matching and time-relative queries.

- One match: re-run Step 1 with the chosen branch as the user-arg and
  continue from Step 2.
- Multiple matches: list candidates, ask user to choose.
- No matches: show the catalog, ask user to clarify.

### type: "error" \u2014 CLI returned a hard error

Has a \`message\` string. Common cases:

- Branch matched but its summaries failed to load.
- No records in the repo at all.
- Invalid argument or internal failure.

Surface the message verbatim to the user (translated into their language if
non-English). For "no records in this repo" specifically, suggest running
\`jolli enable\` if they expected records. Do NOT retry or fabricate a recall
payload from nothing.
`}function Vx(){return`---
name: jolli-search
description: Search structured commit memories across all branches \u2014 decisions, topics, files. Use when the user wants to find prior decisions, related commits, or how a topic was handled before.
metadata:
  version: "${sr}"
  revision: 3
  vendor: "jolli.ai"
---

# Jolli Search

Search structured commit memories across every branch in this repo.
Lightweight BM25 index returns relevance-ranked hits \u2014 no two-phase catalog
scan required. For full context of a known branch, use jolli-recall instead.

## When to use

- "Has anyone dealt with X before?" / "How have we handled Y previously?"
- Looking for a past decision: "why did we choose X over Y?"
- Finding the commit related to a half-remembered ticket / file / topic.

## When NOT to use

- Need full context of a known branch \u2192 run jolli-recall.
- Looking at the current code \u2192 grep / read files directly.
- Need deep rationale/decisions for a specific branch \u2192 run jolli-recall on
  that branch (search hits are lightweight; full decisions live in recall).

## Step 1: Parse the query

Extract the natural-language query (any language). Optional: \`limit\` (integer,
default 20). Note: time/budget filters (\`--since\`, \`--budget\`) are not supported
on the search path \u2014 point users at jolli-recall for a full branch when they
need depth.

## Step 2: Get hits

### Preferred: MCP tool

If the \`search\` tool from the \`jollimemory\` MCP server is available, call it with:

\`\`\`json
{ "query": "<query>", "limit": 20 }
\`\`\`

Returns \`{ "hits": [ { type, title, snippet, branch, commitDate, slug, hash, score } ] }\`,
relevance-ranked (BM25). Proceed to Step 3 with these hits.

Match that tool by what it DOES, not by one host's spelling of it: Claude Code
prefixes it as \`mcp__jollimemory__search\`, while Codex exposes a bare \`search\`
inside the \`mcp__jollimemory\` namespace and loads MCP tools lazily \u2014 so an empty
first look is not proof it is absent.

### Fallback: CLI here-doc

Only if the jollimemory MCP server is not registered at all \u2014 NOT merely because
one spelling of the tool name is absent from your tool list. Prefer the MCP tool:
in a sandboxed agent this CLI path cannot write its search index cache, so it
rebuilds the whole index on every call. Then use:

${hE("search"," --format json")}

The CLI returns the same \`{ hits }\` envelope as the MCP tool.

**Failure handling**:
- If \`~/.jolli/jollimemory/run-cli\` does not exist: tell the user
  "Jolli not installed. Please install via \`npm install -g @jolli.ai/cli && jolli enable\`
  or install the Jolli VS Code extension." Do not attempt further processing.
- If the command output starts with \`error:\` or contains \`unknown command 'search'\`:
  the installed CLI is older than this skill. Tell the user
  "Your installed Jolli CLI is older than this skill \u2014 please run
  \`npm update -g @jolli.ai/cli\` (or update your VS Code extension), then retry."
  Do not attempt further processing.

Both paths produce the same \`{ hits }\` shape. Proceed to Step 3 regardless of
which path was used.

## Step 3: Render

\`hits\` are lightweight \u2014 no full decisions/recap per hit. For each relevant
hit you have:

- \`type\` \u2014 \`"commit"\` or \`"topic"\`
- \`title\` \u2014 one-sentence label
- \`snippet\` \u2014 short excerpt from the matching content
- \`branch\` \u2014 branch the hit belongs to
- \`commitDate\` \u2014 ISO 8601 date
- \`slug\` \u2014 human-readable identifier (for topics)
- \`hash\` \u2014 8-char short SHA (for commits)
- \`score\` \u2014 BM25 relevance score (internal; do not expose to the user)

**Universal principles** (apply regardless of shape):

1. **Lead with the answer.** No "Let me analyze..." or "Found N commits..." preamble.

2. **Ground every concrete claim** to its \`hash\` (commit hits) or \`slug\` +
   \`branch\` (topic hits). Use \`(abc12345)\` for hashes.

3. **Synthesize, don't dump \u2014 but DO use verbatim quotes from stored data.**
   Read everything; fold into coherent prose or bullets. Whenever a phrase from
   \`snippet\` captures the answer more compactly than your paraphrase, quote it
   verbatim in **bold** with attribution.

   Quote **complete clauses (typically 10-30 words)** \u2014 not 2-3 word fragments
   that depend on your surrounding paraphrase to mean anything. The reader
   should be able to skim the bold quote alone and understand its claim.
   Format, embedded in narrative: *the design chose JWT because*
   **"the stateless model lets us scale horizontally without a shared session store across regions"**
   *(snippet, abc12345)*.

   **Bold = verbatim from stored data.** Never use bold for general emphasis.
   Quotes belong inside running prose or bullets that carry their own narrative
   \u2014 never as bare bullets stripped of context. Stringing bare quotes is the
   wall-of-fragments failure mode.

4. **Reply in the user's language.** Template is English; user-visible output
   matches the user.

5. **Don't expose machinery.** No "BM25" / "SearchHit" / "hits array" / "score"
   mentions. Don't expose \`slug\` or internal field names either.

6. **Output shape is entirely your call.** Prose, compact list, timeline,
   per-theme sections \u2014 pick whatever serves the query. Every concrete claim
   must be groundable to a hash or branch.

7. **If the user needs the full decisions/rationale behind a hit**, tell them
   to run jolli-recall on that hit's \`branch\`.

**Empty hits** \u2192 tell the user nothing matched; suggest broader keywords or a
different phrasing. Do NOT mention BM25 or index internals.
`}function Yx(){return`---
name: jolli-local-run
description: Run a Jolli workflow locally \u2014 your own agent executes the workflow's recipe (no Jolli LLM budget) and its file writes land in a git-backed Jolli Space via a branch and pull request that space-cli opens on this machine. Use when the user wants to run a Jolli workflow locally.
metadata:
  version: "${sr}"
  revision: 6
  vendor: "jolli.ai"
---

# Jolli Local Run

Run a Jolli **workflow** locally: *your* agent executes the workflow's recipe on
this machine (so it spends no Jolli LLM budget), Jolli supplies the recipe and
tracks the run, and the workflow's file writes are published to a git-backed
Jolli Space through an agent branch + pull request that space-cli commits and
pushes locally.

A workflow can be run locally only when its destination Space is **git-backed**
AND already **cloned** on this machine. Before starting, the user is told whether
the resulting PR will **auto-merge** or **open for team review**.

Drive the steps below in order. Prefer the Jolli MCP tools for the run lifecycle;
the eligibility check and the git operations go through the \`jolli\` CLI (via the
run-cli entry script the sibling skills also use).

${No}

## Step 1 \u2014 discover the runnable workflows

Run the eligibility helper and read its JSON:

\`\`\`bash
JOLLI_INVOKED_VIA=skill:local-run "$HOME/.jolli/jollimemory/run-cli" workflow local-run
\`\`\`

- \`{ "type": "workflows", "workflows": [ { "id": 7, "name": "Impact Analysis", "autoMerges": true|false }, ... ] }\`
  \u2014 the workflows runnable right now. **Offer only these.** Present each one to
  the user by its \`name\` (fall back to the \`id\` when \`name\` is absent), and tell
  them up front whether it will **auto-merge** the PR (\`autoMerges: true\`) or
  **open the PR for team review** (\`autoMerges: false\`). If the array is empty,
  tell the user there are no locally-runnable workflows (a workflow's destination
  must be a git-backed, already-cloned Space) and stop.
- \`{ "type": "workflow_cli_required", "installHint": "..." }\` \u2014 the workflow-cli
  plugin is missing. Tell the user to install it (run the \`installHint\`) and stop:

  \`\`\`bash
  npm i -g @jolli.ai/cli @jolli.ai/workflow-cli
  \`\`\`

- \`{ "type": "space_cli_required", ... }\` \u2014 the space-cli plugin is missing. Tell
  the user to install it and stop:

  \`\`\`bash
  npm i -g @jolli.ai/cli @jolli.ai/space-cli
  \`\`\`

- \`{ "type": "error", "message": "..." }\` \u2014 report the message and stop.

Have the user pick one workflow \u2014 list them by \`name\` (use your host's
interactive single-select tool if it has one \u2014 e.g. AskUserQuestion on Claude
Code \u2014 otherwise list them as text). Keep the chosen workflow's \`id\` for Step 2.

## Step 2 \u2014 start the run

Call the \`start_local_run\` tool (on Claude Code
\`mcp__jollimemory__start_local_run\`) with the chosen workflow's id, passed
**exactly as the helper returned it** \u2014 the backend's id is a number, so it stays
an unquoted number: \`{ "id": <workflow id> }\` (a string id/slug stays quoted).
Capture from its result:

- \`runId\` \u2014 the run handle for every later call.
- \`plan\` \u2014 the recipe steps your agent will execute.
- \`writeTarget\` \u2014 carries the server-derived \`workBranch\`, the destination Space,
  and the destination folder. Refer to the destination in user-facing prose by its
  **Space name / folder** only. Do **not** announce a backing repo \`owner/name\`, and
  do **not** present the \`workBranch\` as "the write target" \u2014 those are internal
  plumbing, not the destination's identity. The \`workBranch\` is passed verbatim to
  \`docs pull --branch\` in Step 3, but keep it framed as an internal detail. Do not
  inspect the clone's git remotes to name the destination. \`writeTarget.repo\` may be
  **empty** for a private Jolli-managed destination \u2014 that is normal, never an error,
  and never something to look up or narrate.

## Step 3 \u2014 check out the agent branch

Pull the destination clone onto the server-derived work branch:

\`\`\`bash
JOLLI_INVOKED_VIA=skill:local-run "$HOME/.jolli/jollimemory/run-cli" docs pull --branch <writeTarget.workBranch>
\`\`\`

**Always \`--branch\`. NEVER \`--agent\`.** The \`--agent\` mode runs a destructive
\`git clean -fdx\` that wipes untracked files; \`--branch\` checks out the
server-derived branch without cleaning. Do not substitute \`--agent\` under any
circumstances. \`docs pull\` fetches the destination write token internally \u2014 you
do **not** fetch or handle any token yourself.

## Step 4 \u2014 write the workflow's output

Execute the workflow's \`plan\` from Step 2, writing the output files under the
destination folder from \`writeTarget\`, inside the checked-out clone.

## Step 5 \u2014 local review gate (with heartbeats)

Nothing is committed or pushed until the human explicitly approves.

1. Send a heartbeat so the run's lease stays alive while the human reviews: call
   \`report_local_run_progress\` (on Claude Code
   \`mcp__jollimemory__report_local_run_progress\`) with \`{ "runId": "<runId>" }\`.
2. Show the working-tree diff of what the workflow wrote, and ask the user to
   review, edit if needed, and **explicitly approve** (or cancel).
3. When the user answers, send \`report_local_run_progress\` again.

Send the heartbeat **immediately before** asking and **immediately after** the
answer. Your turn is blocked while you wait for the human, so you cannot
heartbeat *during* the review \u2014 bracketing the approval prompt keeps the lease
fresh across the wait.

## Step 6 \u2014 on approval: publish and complete

1. Publish the branch as a pull request and capture the machine-readable result:

   \`\`\`bash
   JOLLI_INVOKED_VIA=skill:local-run "$HOME/.jolli/jollimemory/run-cli" docs publish --json
   \`\`\`

   \`--json\` prints exactly one JSON object on stdout (all human-readable progress
   goes to stderr) \u2014 parse that object; never scrape the human log for a PR number.
2. Verify the pull request landed on the server-derived work branch. \`docs publish\`
   reports the branch the PR was actually opened on as \`headBranch\` (present on both
   the public and the private/withheld paths); the run's server work branch is
   \`writeTarget.workBranch\` from Step 2. **When \`pushed\` is true, cross-check them
   deterministically** \u2014 do not eyeball it yourself:

   \`\`\`bash
   JOLLI_INVOKED_VIA=skill:local-run "$HOME/.jolli/jollimemory/run-cli" space verify-publish-branch <writeTarget.workBranch> <headBranch>
   \`\`\`

   It prints \`{ "match": true|false, "expected": "...", "actual": "..." }\` and exits
   non-zero when the branches differ or \`headBranch\` is missing. **If \`match\` is
   false, STOP** \u2014 the PR was opened on the wrong branch (usually because \`docs pull
   --branch <workBranch>\` in Step 3 was skipped, so space-cli generated its own
   \`jolli-<hex>\` branch). The backend cannot link the run to that PR, so it will
   **not** auto-merge and the articles will **never** publish. Tell the user the
   run-to-PR link is broken (published on \`<actual>\` instead of the expected
   \`<expected>\`) and **do NOT call \`complete_local_run\` as if the run succeeded** \u2014
   release the run with \`abandon_local_run\` (Step 7) or ask the user how to proceed.
   Skip this check only when \`pushed\` is false (nothing was published).
3. Call \`complete_local_run\` (on Claude Code
   \`mcp__jollimemory__complete_local_run\`), branching on what the publish JSON
   contained:
   - **PR refs present** (the JSON has a \`prNumber\` \u2014 a user-accessible
     destination): pass them through \u2014
     \`{ "runId": "<runId>", "prNumber": <prNumber>, "prUrl": "<prUrl>" }\`.
   - **PR refs withheld** (the JSON is \`"private": true\` with no \`prNumber\` \u2014 a
     private Jolli-managed destination whose backing repo the user cannot access):
     complete WITHOUT a PR reference \u2014 \`{ "runId": "<runId>" }\`. Do not invent,
     guess, or look up a \`prNumber\`; the run already knows its destination is private.
   - **Nothing published** (\`"pushed": false\`, e.g. \`"reason": "no-changes"\`): no PR
     was opened, so there is nothing to complete \u2014 tell the user the workflow produced
     no changes and release the run with \`abandon_local_run\` (Step 7).
4. Read the outcome and its links off \`complete_local_run\`'s result and report them.
   Every URL is read **verbatim** off the result \u2014 never construct, guess, or look up
   one. The result carries \`willAutoMerge\`, \`workflowUrl\`, \`runUrl\`, and (auto-apply
   ON only) a \`writtenArticles\` list of \`{ operation, path, url, active, ... }\`.
   - **Auto-apply on** (\`willAutoMerge: true\`): the destination auto-applies, so the PR
     is **set to auto-merge** and \u2014 once it does \u2014 the created/edited **articles are the
     artifact**. Treat \`willAutoMerge: true\` as the destination's *intent*, NOT a
     confirmation that the merge already completed \u2014 so do **not** flatly tell the user
     "PR auto-merged". Report what actually published, judged by each article's own state:
     for every \`writtenArticles\` entry that is still openable (\`active: true\` **and** a
     non-null \`url\`), present its URL as a published article. If an article is
     \`active: false\` or has \`url: null\`, publishing has **not** completed yet (the
     auto-merge and reindex may still be in progress) \u2014 tell the user that article is
     **not yet available**, never invent a URL, and note they can re-check shortly via the
     run URL or by re-running \`workflow run-status <runId>\`. Then present the workflow URL
     (\`workflowUrl\`) and the run URL (\`runUrl\`).
   - **PR left open for team review** (\`willAutoMerge: false\` \u2014 auto-apply off): the
     open **PR is the artifact**. Tell the user "PR left open for team review" and
     present the PR URL (\`prUrl\`), the workflow URL (\`workflowUrl\`), and the run URL
     (\`runUrl\`).
   - **Private Jolli-managed destination** (the result carries no \`prUrl\`): present the
     **article URLs only** (same \`active: true\` + non-null \`url\` rule) plus the workflow
     URL and run URL \u2014 never surface a repo or PR link the result did not carry. As with
     any auto-apply run, an article that is not yet \`active\` / lacks a \`url\` is **not yet
     available** (publishing still completing), not an error \u2014 say it will appear once
     published and offer the run URL to re-check.
5. Offer to open any reported URL in the user's default browser. For each URL the user
   chooses, shell:

   \`\`\`bash
   JOLLI_INVOKED_VIA=skill:local-run "$HOME/.jolli/jollimemory/run-cli" open-url <url>
   \`\`\`

   It prints one JSON line \`{ "opened": true|false, "url": "..." }\`. When \`opened\` is
   \`false\` (headless / no browser available) the URL is printed for the user to copy
   instead \u2014 that is normal, not a failure. Only \`https\` URLs are accepted. A URL
   whose origin is off Jolli's allowlist is refused (never launched) and printed
   instead \u2014 the result carries \`"refused": true\`; surface that URL for the user to
   open manually, not as an error.

## Step 7 \u2014 on cancel: abandon

If the user cancels at the review gate (or you must abort), release the run: call
\`abandon_local_run\` (on Claude Code \`mcp__jollimemory__abandon_local_run\`) with
\`{ "runId": "<runId>" }\`.

## If space-cli is missing at any point

Any \`docs\` command that prints an install hint (or the eligibility helper's
\`space_cli_required\` result) means the space-cli plugin is not installed. Tell the
user to install it and stop:

\`\`\`bash
npm i -g @jolli.ai/cli @jolli.ai/space-cli
\`\`\`
`}function Xx(){return`---
name: jolli-remote-run
description: Run a Jolli workflow remotely \u2014 the Jolli backend executes the workflow server-side; this recipe triggers the run, monitors it to completion, reports the outcome (failed / cancelled / succeeded) with its article, PR, and workflow links, and offers to open any in your browser. Use when the user wants to run a Jolli workflow remotely (on the Jolli backend).
metadata:
  version: "${sr}"
  revision: 5
  vendor: "jolli.ai"
---

# Jolli Remote Run

Run a Jolli **workflow** remotely: the Jolli backend executes the workflow
server-side (it spends Jolli LLM budget, unlike a local run), and this recipe
triggers the run, monitors it to a terminal state, and reports what it produced \u2014
the still-active article URLs, the pull-request URL when the destination is
git-backed, and the workflow/run deep-links \u2014 then offers to open any of them.

Drive the steps below in order. Prefer the Jolli MCP tools for the run lifecycle \u2014
the run tools (\`run_remote_workflow\`, \`cancel_remote_workflow\`) have **no CLI
mirror** \u2014 and shell the \`jolli\` CLI (via the run-cli entry script the sibling
skills also use) only for the deterministic monitor and the browser-open helper.

Every URL is read **verbatim** off the run report \u2014 never construct, guess, or
look one up. A link that is not in the report was withheld on purpose (for
example, a private Jolli-managed destination omits the PR link but keeps the
article URLs); treat its absence as normal, never an error.

${No}

## Step 1 \u2014 identify the workflow to run

Determine which workflow the user wants to run and keep its numeric \`id\`.

- If the \`list_workflows\` tool is registered this session (on Claude Code
  \`mcp__jollimemory__list_workflows\`), call it to list the available workflows and
  present them to the user by \`name\` (use your host's interactive single-select
  tool if it has one \u2014 e.g. AskUserQuestion on Claude Code \u2014 otherwise list them as
  text). Keep the chosen workflow's \`id\`.
- Otherwise, ask the user which workflow to run and get its numeric \`id\`.

## Step 2 \u2014 confirm the run monitor is installed (before triggering)

The run trigger (\`run_remote_workflow\`) is a Jolli **backend** tool: it creates a
real, budget-spending run **even when the deterministic monitor is not installed**.
The monitor (\`workflow run-status\`, Step 4) is provided by the
\`@jolli.ai/workflow-cli\` plugin. So confirm that plugin is present **before**
triggering \u2014 otherwise a missing monitor would leave the run you are about to
create orphaned (still running server-side, with no way for this recipe to report
its outcome).

Run the plugin's eligibility helper purely as a presence probe and read its JSON:

\`\`\`bash
JOLLI_INVOKED_VIA=skill:remote-run "$HOME/.jolli/jollimemory/run-cli" workflow local-run
\`\`\`

- \`{ "type": "workflow_cli_required", "installHint": "..." }\` \u2014 the workflow-cli
  plugin is **not installed**. Do **not** trigger the run. Tell the user to install
  it (run the \`installHint\`) and stop:

  \`\`\`bash
  npm i -g @jolli.ai/cli @jolli.ai/workflow-cli
  \`\`\`

- **any other result** (\`workflows\`, \`space_cli_required\`, or \`error\`) \u2014 the plugin
  **is** installed (only its stub ever emits \`workflow_cli_required\`), so the monitor
  is available. Ignore the rest of this probe's output \u2014 it reports *local*-run
  eligibility, which does not gate a remote run \u2014 and proceed to Step 3.

## Step 3 \u2014 trigger the remote run

Call the \`run_remote_workflow\` tool (on Claude Code
\`mcp__jollimemory__run_remote_workflow\`) with the chosen workflow's id, passed as
an **unquoted number**: \`{ "id": <workflow id> }\` (add \`templateVariables\` only if
the workflow needs them). Capture \`runId\` from its result (\`{ "runId": "..." }\`) \u2014
that handle drives the monitor in Step 4.

## Step 4 \u2014 monitor the run to completion

Shell the deterministic monitor with the captured \`runId\`:

\`\`\`bash
JOLLI_INVOKED_VIA=skill:remote-run "$HOME/.jolli/jollimemory/run-cli" workflow run-status <runId>
\`\`\`

It polls the run to a terminal state (with backoff, so you do not drive the poll
loop yourself) and prints exactly one JSON line \u2014 the run report. Parse it:

- \`status\` \u2014 one of \`"succeeded"\`, \`"failed"\`, \`"cancelled"\`, \`"running"\`.
- \`openableUrls\` \u2014 an array of \`{ "kind": "workflow" | "run" | "article" | "pr", "url": "...", "label": "..." }\`.
  Only openable URLs appear here (active articles with a non-null url, a PR only
  when the payload carried one) \u2014 present exactly these, nothing more.
- \`cancel\` (cancelled runs) \u2014 \`{ "by": "...", "at": "..." }\` when known.
- \`troubleshooting\` (failed runs) \u2014 the actionable error detail.
- \`timedOut\` \u2014 \`true\` when the monitor stopped polling before the run reached a
  terminal state (see the "still running" case below).

If the command instead prints \`{ "type": "error", "message": "..." }\` (the run
could not be reached \u2014 platform tools off, or a transport failure), tell the user
the run status could not be retrieved and stop. That is a degraded outcome, not a
crash \u2014 the run may still be progressing server-side.

If instead the command exits non-zero and prints a prose install hint naming
\`@jolli.ai/workflow-cli\` (rather than a JSON report line), the workflow-cli plugin
is not installed. Tell the user to install it and stop:

\`\`\`bash
npm i -g @jolli.ai/cli @jolli.ai/workflow-cli
\`\`\`

## Step 5 \u2014 report the outcome

Report based on \`status\`:

- **succeeded** (\`status: "succeeded"\`): the run finished. Present the \`article\`
  URLs from \`openableUrls\` (each by its \`label\`), the \`pr\` URL if one is present,
  and the \`workflow\` and \`run\` deep-links. Never surface a link that is not in
  \`openableUrls\` \u2014 a missing PR link means the destination withheld it (a private
  Jolli-managed destination), which is normal.
- **failed** (\`status: "failed"\`): the run failed. Present the \`troubleshooting\`
  detail (the actionable error) and the \`workflow\` URL.
- **cancelled** (\`status: "cancelled"\`): the run was cancelled. Report who
  (\`cancel.by\`) and when (\`cancel.at\`) when present, plus the \`workflow\` URL.
- **still running** (\`status: "running"\` with \`timedOut: true\`): the monitor
  stopped polling before the run reached a terminal state \u2014 the run is **still
  running server-side**, not failed. Tell the user it is still in progress, present
  the \`workflow\` URL so they can watch it, and note they can re-check later by
  re-running \`workflow run-status <runId>\`.

## Step 6 \u2014 offer to open any reported URL

Offer to open any URL from the report in the user's default browser. For each URL
the user chooses, shell:

\`\`\`bash
JOLLI_INVOKED_VIA=skill:remote-run "$HOME/.jolli/jollimemory/run-cli" open-url <url>
\`\`\`

It prints one JSON line \`{ "opened": true|false, "url": "..." }\`. When \`opened\` is
\`false\` (headless / no browser available) the URL is printed for the user to copy
instead \u2014 that is normal, not a failure. Only \`https\` URLs are accepted. A URL whose
origin is off Jolli's allowlist is refused (never launched) and printed instead \u2014 the
result carries \`"refused": true\`; surface that URL for the user to open manually, not
as an error.

## Cancelling an in-flight run

While a remote run is still in progress, the user can stop it: call
\`cancel_remote_workflow\` (on Claude Code
\`mcp__jollimemory__cancel_remote_workflow\`) with the workflow's numeric id \u2014
\`{ "id": <workflow id> }\`. After cancelling, re-run \`workflow run-status <runId>\`
to report the cancelled outcome (who/when + workflow URL).
`}function zx(){return`---
name: jolli
description: The Jolli action menu \u2014 a single front door that lists the Jolli skills available in this session (recall, search, run a workflow local or remote, workflow history, plus any setup and account skills a Jolli plugin adds) and the Jolli MCP tools, then routes your choice to the right one. Use when the user types /jolli or asks for the Jolli menu.
metadata:
  version: "${sr}"
  revision: 9
  vendor: "jolli.ai"
---

# Jolli

The single umbrella action menu for Jolli. It ties together the standalone Jolli
skills and whatever Jolli MCP tools are registered in this session, and routes the
user's choice to the right one. It is a friendly front door \u2014 it **never**
re-implements any action, it only invokes an existing skill or an existing MCP
tool. The standalone \`/jolli-recall\`, \`/jolli-search\` commands and
the \`/mcp__jollimemory__jolli\` prompt all keep working unchanged; this is layered
on top of them, not a replacement.

The **Workflow history** action below shells the \`jolli\` CLI (via the run-cli
entry script), so the shell prerequisite applies when that action is used.

${No}

## Step 1 \u2014 build the unified menu

Assemble ONE combined list of actions from two sources.

### Local Jolli skills

Offer the \`jolli-*\` skills that are ACTUALLY AVAILABLE in this session, not a
fixed list \u2014 exactly as with the MCP tools below. The four described here ship
everywhere, so they are documented in full; a host that also has a Jolli plugin
installed (Cursor, Codex, Claude Code) additionally exposes setup, account and
dashboard skills such as \`jolli-init\`, \`jolli-login\`, \`jolli-logout\`,
\`jolli-status\`, \`jolli-dashboard\`, \`jolli-timeline\` and \`jolli-push\`.
Include whichever of those exist, named as this host invokes them, and route by
invoking the skill rather than restating its steps. If the user asks for something
one of them owns \u2014 setting Jolli up, signing in, checking installation health,
publishing this branch's memories \u2014 route there instead of answering that the menu
has no such action.

- **jolli-recall** \u2014 Recall prior development context for the current branch.
  Route by invoking the \`jolli-recall\` skill.
- **jolli-search** \u2014 Search structured commit memories across branches
  (decisions, topics, files). Route by invoking the \`jolli-search\` skill.
- **Run a workflow** \u2014 Run a Jolli workflow. When the user picks this, ask them
  **local vs remote**, defaulting to **local**:
  - **local (default)** \u2014 your agent executes the workflow's recipe on this
    machine (no Jolli LLM budget); the writes land in a git-backed Space via a
    branch + PR. Route by invoking the \`jolli-local-run\` skill.
  - **remote** \u2014 the Jolli backend executes the workflow server-side, and the run
    is monitored to completion and its result reported. Route by invoking the
    \`jolli-remote-run\` skill (which drives the \`run_remote_workflow\` tool for
    you) \u2014 not by calling the raw tool.

  A running **remote** run can be canceled with the \`cancel_remote_workflow\` MCP
  tool (\`mcp__jollimemory__cancel_remote_workflow\`) \u2014 offer this if the user
  wants to stop an in-flight remote run.
- **Workflow history** \u2014 Show a workflow's past runs. When the user picks this,
  identify the workflow's numeric id (if the \`list_workflows\` tool is registered
  this session, use it to let the user pick one by name; otherwise ask for the
  id), then shell:

  \`\`\`bash
  JOLLI_INVOKED_VIA=skill:jolli "$HOME/.jolli/jollimemory/run-cli" workflow runs <workflowId>
  \`\`\`

  It prints \`{ "type": "runs", "runs": [ ... ] }\` \u2014 one entry per run with its
  \`status\`, \`timestamp\`, and any \`workflowUrl\` / \`runUrl\` / \`prUrl\` /
  \`articleUrls\`. An empty \`runs\` list is the normal "no history yet" outcome, not
  an error. If instead the command exits non-zero and prints an install hint naming
  \`@jolli.ai/workflow-cli\` (rather than the JSON above), the workflow-cli plugin is
  not installed \u2014 tell the user to install it (\`npm i -g @jolli.ai/cli @jolli.ai/workflow-cli\`)
  and stop. Offer to open any listed URL via the \`open-url\` helper:

  \`\`\`bash
  JOLLI_INVOKED_VIA=skill:jolli "$HOME/.jolli/jollimemory/run-cli" open-url <url>
  \`\`\`

  (\`{ "opened": true|false, "url": "..." }\`; \`opened: false\` on a headless host
  just prints the URL \u2014 normal, not a failure. Only \`https\` URLs are accepted. A URL
  whose origin is off Jolli's allowlist is refused (never launched) and printed \u2014 the
  result carries \`"refused": true\`; surface it for the user to open manually.)

Route a local, remote, or history choice by invoking that skill through your
host's skill-invocation mechanism (for example, the Skill tool in Claude Code);
the Workflow history action runs its \`run-cli\` commands directly as shown above.

### Jolli MCP tools (whatever is registered this session)

Surface every jollimemory MCP tool registered in the current session \u2014 for example
\`recall\`, \`search\`, \`get_pr_description\`, \`queue_status\`, and any
manifest-driven platform tools (space, article, and the like). Route a choice by
calling the matching tool.

**How to find them depends on the host.** On Claude Code they are prefixed, so
match names starting with \`mcp__jollimemory__\`. On Codex the same tools are BARE
names inside the \`mcp__jollimemory\` namespace, so a prefix match finds nothing \u2014
look for the namespace instead, and note that Codex loads MCP tools lazily, so
search your available tools before concluding none are registered.

**Exclusions \u2014 do NOT surface these as standalone menu items:**

- \`list_workflow_definitions\` \u2014 discovery/plumbing, not a human quick-action.
- \`run_remote_workflow\` and \`cancel_remote_workflow\` \u2014 these are already covered
  by the **Run a workflow** action above (its *remote* path and its cancellation
  option); don't list them again as raw tools.

Do NOT assume a fixed list \u2014 enumerate the Jolli MCP tools that are actually
registered right now, minus the exclusions above. Do NOT try to fetch or
re-derive any backend "menu" curation; a skill cannot read the manifest, so
simply surface the Jolli MCP tools present in the session. If no Jolli MCP tools
are registered, present just the local skills above.

## Step 2 \u2014 route the request

This skill takes one optional free-text argument.

- **Argument provided** \u2192 match it to exactly one menu action and invoke that
  action directly (invoke the skill, or call the MCP tool). Only ask the user to
  choose if the request is ambiguous or matches no menu action.
- **Argument absent** \u2192 present the unified menu and let the user pick one, using
  an interactive single-select tool if your host provides one (for example
  AskUserQuestion in Claude Code); otherwise list the options as plain text and
  ask the user to choose. After the user selects, invoke the corresponding skill
  or MCP tool.

Host-agnostic by design: the AskUserQuestion mention is only an example; the
text-list fallback keeps \`/jolli\` usable on every host that loads skills.
`}function Qx(){return`---
name: jolli
description: The Jolli front door \u2014 checks how Jolli is set up in this repo, guides first-time setup through /jolli:init when something's missing, reminds you to sign in when memories can't sync yet, and otherwise shows a status snapshot and routes you to the right Jolli skill or MCP tool. Use when the user types /jolli or asks for Jolli / the Jolli menu.
metadata:
  version: "${sr}"
  revision: 10
  vendor: "jolli.ai"
---

# Jolli

The single front door for Jolli. Rather than dumping a static list, it reads how
Jolli is set up in THIS repo and guides the next step: if setup is incomplete it
walks the user into \`/jolli:init\`; if memories are being captured but cannot be
shared yet it reminds the user to sign in; once everything is wired it shows a
short status snapshot and routes the user's choice to the right skill or Jolli
MCP tool. It is a friendly front door \u2014 it **never** re-implements any action, it
only reads status and invokes an existing skill or an existing MCP tool. The
standalone \`/jolli:init\`, \`/jolli:recall\`, \`/jolli:search\`, \`/jolli:push\`,
\`/jolli:dashboard\`, \`/jolli:login\`, \`/jolli:logout\`, \`/jolli:status\` and
\`/jolli:timeline\` entry points all keep working unchanged; this is layered on
top of them, not a replacement.

## Step 0 \u2014 confirm this menu can route

This menu is a project skill written OUTSIDE the Jolli plugin (a plugin skill
could only ever be \`/jolli:<name>\`, never a bare \`/jolli\`), so it can linger
in \`.claude/skills/jolli/\` after the plugin has been uninstalled. It can only
route to targets that exist in THIS session, so before doing anything else
confirm at least one routing target is available. The menu can route if
**either** of these holds:

- one or more MCP tools whose name contains \`jollimemory\` are registered, **or**
- the plugin's own namespaced skills (\`jolli:init\` / \`jolli:recall\` /
  \`jolli:search\` / \`jolli:push\` / \`jolli:dashboard\`) are invocable this
  session.

If **either** holds, proceed to Step 1.

If **neither** holds, do **not** build the menu and do **not** invoke any
\`/jolli:*\` skill \u2014 it is not registered and the call will fail. But this alone
does NOT mean Jolli is gone: the Jolli CLI installs a memory pipeline that runs
independently of this plugin (git hooks that generate memories on every commit).
So distinguish the two cases \u2014 check whether the bundled CLI dispatch exists by
running \`test -f "$HOME/.jolli/jollimemory/run-cli" && echo present\`:

- **CLI present** \u2192 Jolli still works; only the plugin's interactive menu is not
  loaded in this session. Tell the user plainly: the Jolli plugin menu isn't
  loaded here, but the Jolli CLI is still installed \u2014 commits still generate
  memories, and they can run \`jolli recall\` / \`jolli search\` directly. This
  \`/jolli\` file is a leftover from a previous plugin install; they can remove
  it with \`rm -rf .claude/skills/jolli\`, and reinstall the Jolli plugin to
  bring the menu back.
- **CLI absent** \u2192 Jolli is no longer installed at all. Tell the user this
  \`/jolli\` menu is a stale leftover; they can remove it with
  \`rm -rf .claude/skills/jolli\`, and (re)install Jolli to bring it back.

Either way, then stop \u2014 do not continue to Step 1.

## Step 1 \u2014 read how Jolli is set up

Before deciding what to show, read the current state so you can guide instead of
guessing. This is the state-aware front door \u2014 not a static list.

**Preferred (MCP):** call the \`status\` tool (on Claude Code
\`mcp__jollimemory__status\`) with no arguments. From its result read:

- \`enabled\` \u2014 are Jolli's git hooks installed in this repo (is memory
  generation on)?
- \`account.signedIn\` \u2014 is the user signed in to Jolli?
- \`account.jolliApiKeyConfigured\` \u2014 is a stored Jolli API key present? Surfaced
  ONLY when signed OUT (a sign-in already implies a Jolli credential, so the field
  is omitted once \`account.signedIn\` is true).
- \`account.anthropicKeyConfigured\` \u2014 is an Anthropic key present? Surfaced ONLY
  when \`account.aiProvider === "anthropic"\`; omitted for every other provider.
- \`account.aiProvider\` \u2014 \`"local-agent"\` | \`"jolli"\` | \`"anthropic"\` | \`null\`.
  Drives the provider-aware generation check in Step 2.
- \`account.localAgentTool\` \u2014 label of the local agent CLI that generates
  summaries (e.g. "Claude Code"). Surfaced ONLY when
  \`account.aiProvider === "local-agent"\`; feeds the snapshot's engine suffix.
- \`account.site\` \u2014 the Jolli site host, for the snapshot line.
- \`storedMemories\` \u2014 how many memories this repo already has.
- \`space\` \u2014 the bound Jolli Space (\`{ name }\`) this repo's memories sync to, or
  \`null\` when the repo isn't bound yet. Drives the \`syncing \xB7 Space\` snapshot line.

**Fallback (CLI):** if the \`status\` MCP tool is unavailable (an older Jolli),
run the bundled CLI through its stable dispatch script and read the same facts
from its printed output:

\`\`\`bash
JOLLI_INVOKED_VIA=skill:jolli "$HOME/.jolli/jollimemory/run-cli" status
\`\`\`

If neither the tool nor the CLI can be reached at all, skip the state-based
guidance and go straight to Step 3's menu (present it without a snapshot).

Note: \`status.space\` is display-only \u2014 it names the bound Space for the snapshot
but does NOT confirm push health. Full binding management (picking / re-binding a
Space) stays \`/jolli:init\`'s and \`/jolli:push\`'s job; do not try to (re)bind here.

## Step 2 \u2014 guide by state (the front door)

Derive two capabilities from Step 1, mirroring the CLI's guided front door:

- **can generate memories** \u2014 provider-AWARE, NOT a blind OR of every field.
  Read \`account.aiProvider\` and decide:
  - \`local-agent\` \u2192 **yes** (memories generate through the user's local agent CLI
    named by \`account.localAgentTool\` \u2014 no API key and no Jolli sign-in required).
    This is the plugin's default, so a freshly-installed plugin repo can already
    generate.
  - \`jolli\` \u2192 yes if \`account.signedIn\` OR \`account.jolliApiKeyConfigured\`.
  - \`anthropic\` \u2192 yes only if \`account.anthropicKeyConfigured\`.
  - \`null\` / unset \u2192 yes if \`account.signedIn\` OR \`account.jolliApiKeyConfigured\`.

  (For the Jolli proxy a sign-in DOES carry a generation credential \u2014 signing in
  mints a Jolli API key \u2014 which is why \`jolliApiKeyConfigured\` is omitted once
  signed in. For the \`anthropic\` provider, sign-in alone does NOT count.)
- **can sync memories** = \`account.signedIn\` OR \`account.jolliApiKeyConfigured\`.
  Provider-independent: syncing to a Jolli Space always needs a **Jolli**
  credential, so an Anthropic key never satisfies it. This axis is orthogonal to
  generation \u2014 the default \`local-agent\` repo generates fine while unable to
  sync, which is exactly the state the Step 2 sign-in nudge below exists for.
- **enabled** = the \`enabled\` flag.

Then take exactly one branch:

- **Not fully set up** \u2014 \`enabled\` is false, OR memories can't be generated:
  memory generation isn't wired yet, so lead with SETUP, not the action menu.
  State in one line what's missing (for example "not signed in, and memory
  generation is off for this repo"), then invoke the \`jolli:init\` skill through
  the Skill tool \u2014 it walks sign-in \u2192 enable \u2192 bind a Space in one guided pass.
  Do NOT hand-roll those steps here; \`/jolli:init\` owns them. (Exception: if the
  user gave an argument in Step 3 that clearly names a different action, honor
  that instead \u2014 see Step 3.)

- **Fully set up** \u2014 enabled AND a credential present: print a short snapshot,
  then continue to Step 3 to present the action menu.

  \`\`\`
  \u2713 signed in \xB7 <account.site> \xB7 summaries via <account.localAgentTool>
  \u2713 enabled \xB7 <storedMemories> memories
  \u2713 syncing \xB7 Space "<space.name>"    (ONLY when \`space\` is non-null; omit the whole line otherwise)

  Jolli is listening \u2014 last memory saved.
  \`\`\`

  Pick the FIRST line by state, mirroring the CLI front door's wording exactly:

  - signed in \u2192 \`\u2713 signed in \xB7 <account.site>\`, plus \` \xB7 summaries via
    <account.localAgentTool>\` when \`account.aiProvider\` is \`local-agent\`. Drop
    the \`\xB7 <site>\` segment when \`account.site\` is null.
  - not signed in, \`local-agent\` \u2192 \`\u2713 local agent set (not signed in to Jolli)\`.
  - not signed in, \`jolli\` \u2192 \`\u2713 Jolli API key set (not signed in to Jolli)\`.
  - not signed in, \`anthropic\` \u2192 \`\u2713 Anthropic API key set (not signed in to Jolli)\`.

  Render the \`\u2713 syncing \xB7 Space "<space.name>"\` line **only when \`space\` is
  non-null** \u2014 it means a \`git push\` auto-publishes this branch's memories to that
  Space (the pre-push hook does it). When \`space\` is null, drop that line entirely;
  do not print a "not bound" line here (binding is \`/jolli:init\`'s job).

  The closing \`Jolli is listening \u2014 \u2026\` line mirrors the CLI front door: use
  **"last memory saved."** when \`storedMemories\` > 0, or **"your next commit is your
  first memory"** when \`storedMemories\` is 0.

  If \`storedMemories\` is 0, still show the menu, but Step 3 leads it with
  \`/jolli:init\` (on a fresh repo recall / search would only return empty, so
  they must not be the default action).

### Sign-in nudge \u2014 only when **can sync** is false

Generation working does not mean memories are shared. When the user can generate
but **can sync** is false (the normal state of a fresh \`local-agent\` install),
add ONE line under the snapshot, mirroring the CLI front door's optional
sign-in step:

\`\`\`
Sign in to Jolli to sync memories to a Space? (/jolli:login \u2014 memory generation keeps running locally either way)
\`\`\`

Rules for the nudge:

- It is **non-blocking**. Never withhold the Step 3 menu waiting for an answer,
  and never treat "not signed in" as broken \u2014 the repo is capturing memories.
- Offer it **once** per invocation. If the user declines, drop it for the rest of
  the session and do not repeat it after later actions.
- If the user accepts, hand off to the existing login flow: tell them to run
  \`/jolli:login\` (a skill cannot invoke a slash command for them), or invoke
  \`jolli:init\` when they also want to bind a Space in the same pass. Do NOT run
  \`auth login\` yourself here \u2014 \`/jolli:login\` owns that flow.
- Skip the nudge entirely when **can sync** is true, and inside the "Not fully
  set up" branch (there \`/jolli:init\` already walks sign-in).

## Step 3 \u2014 route the request / present the menu

This skill takes one optional free-text argument.

- **Argument provided** \u2192 match it to exactly one action below and invoke that
  action directly (invoke the skill, or call the Jolli MCP tool), regardless of
  the Step 2 state \u2014 a specific request wins over the setup nudge. The invoked
  skill handles its own preconditions (for example \`/jolli:push\` will offer to
  bind a Space if the repo isn't bound). Only ask the user to choose if the
  request is ambiguous or matches no action.
- **Argument absent** \u2192 after the Step 2 guidance, present the action menu and
  let the user pick, using an interactive single-select tool if your host
  provides one (for example AskUserQuestion in Claude Code); otherwise list the
  options as plain text and ask. Bias the ordering to the state: when
  \`storedMemories\` is 0, lead with \`/jolli:init\` as the FIRST (default)
  option \u2014 finish setup / bind a Space, or just make the first commit \u2014 and
  demote recall / search below it, since on a fresh repo both would only
  return empty. When memories exist, lead instead with recall / search. Either
  way keep \`/jolli:init\` available for re-running setup or re-binding a Space.
  After the user selects, invoke the corresponding skill or MCP tool.

### Jolli plugin skills

List a plugin skill only if it was confirmed available in Step 0.

- **/jolli:init** \u2014 Set up Jolli for this repo: sign in if needed, enable memory
  generation, and bind the repo to a Jolli Space. Route by invoking the
  \`jolli:init\` skill.
- **/jolli:recall** \u2014 Recall prior development context for the current branch.
  Route by invoking the \`jolli:recall\` skill.
- **/jolli:search** \u2014 Search structured commit memories across branches
  (decisions, topics, files). Route by invoking the \`jolli:search\` skill.
- **/jolli:push** \u2014 Publish this branch's memories to a Jolli Space. Route by
  invoking the \`jolli:push\` skill.
- **/jolli:dashboard** \u2014 Open the local Jolli dashboard in a browser: the
  machine-wide view of memories, agent sessions, token spend and knowledge across
  every repository on this machine, plus the standup page. Route by invoking the
  \`jolli:dashboard\` skill. Machine-level, so it is worth offering even when THIS
  repo has no memories yet.

Route a local choice by invoking that skill through the Skill tool.

### Jolli plugin commands

The plugin also ships these as slash **commands**, so they belong in the menu \u2014
but a skill cannot invoke a command. Route a choice by telling the user to run
it (one line, with the command spelled out), or by calling the equivalent Jolli
MCP tool when one exists.

- **/jolli:login** \u2014 Sign in to Jolli so this repo can bind a Space and share
  memories. Surface this whenever **can sync** is false, even if the user did not
  pick it. Generation is unaffected by signing in.
- **/jolli:logout** \u2014 Clear the stored Jolli credentials.
- **/jolli:status** \u2014 Full installation / queue health. Prefer the \`status\` MCP
  tool when it is registered.
- **/jolli:timeline** \u2014 How one decision topic evolved. Prefer the
  \`get_decision_timeline\` MCP tool when it is registered.

### Jolli MCP tools (whatever is registered this session)

Surface every tool whose name contains \`jollimemory\` that is available in the
current session \u2014 for example \`recall\`, \`search\`, \`get_pr_description\`,
\`queue_status\`, \`status\`, and the Jolli Space tools (\`list_spaces\`,
\`bind_space\`, \`push_memory\`). Route a choice by calling the matching Jolli
MCP tool.

Do NOT assume a fixed list \u2014 enumerate the Jolli MCP tools that are actually
registered right now. If no Jolli MCP tools are registered, present just the
plugin skills above.
`}var M=f("Installer");function eI(e,t){return process.platform==="linux"?e===t:e.toLowerCase()===t.toLowerCase()}async function tI(e){let t=await ae(),n=jw(t.globalInstructions);if(n.write){let r=e?.codexDetected??await el(),o=e?.geminiDetected??await il();await Uw({claude:t.claudeEnabled!==!1,gemini:o&&t.geminiEnabled!==!1,codex:r&&t.codexEnabled!==!1})}else n.remove&&await Hw()}async function nI(e,t,n){let r=async()=>{if(!await Gc())return!1;try{await Tw()}catch(s){M.warn("Legacy dist-path migration failed (non-fatal): %s",s.message)}if(!await go(e,t))return!1;try{let s=await bw();s.length>0&&M.info("Pruned stale dist-paths entries: %s",s.join(", "))}catch(s){M.warn("Pruning stale dist-paths failed (non-fatal): %s",s.message)}return!0},o=n?await ha(r,n):await ha(r);return o.acquired&&o.value===!0}async function yE(e,t){let n=e??process.cwd(),r=[],o=t?.integrationsOnly===!0,s=t?.repoHooksOnly===!0;if(o&&s)return{success:!1,message:"install: integrationsOnly and repoHooksOnly are mutually exclusive",warnings:r};if(!await Rn(n))return M.info("Skipping Jolli Memory install \u2014 %s is not inside a git work tree",n),{success:!1,message:`Not a git repository \u2014 skipping Jolli Memory install (${n})`,warnings:r};M.info(s?"Installing Jolli Memory repo hooks only (no integrations)":o?"Installing Jolli Memory integrations (no hooks)":"Installing Jolli Memory hooks");let i=null;try{let a=await ae(),l=t?.automatic?[n]:await Sr(n),c=t?.automatic?{timeoutMs:200,pollMs:25}:void 0,u=(0,dn.dirname)((0,gE.fileURLToPath)(__jmImportMetaUrl)),d=t?.source??"cli",p=t?.sourceTag??(d==="vscode-extension"?Bc(u):"cli");if(!ho(p))return{success:!1,message:`Refusing to install with an unsafe source tag: ${JSON.stringify(p)}`,warnings:r};let m=ef(p);if(!await nI(p,t?.distDir,c))return{success:!1,message:"Failed to reconcile the shared runtime registry \u2014 cannot install hooks that depend on it",warnings:r};if(!o){if(i=c?await kr(n,c):await kr(n),!i)return{success:!1,message:"Another Jolli enable/disable operation is still running; retry shortly",warnings:r};if(t?.respectManualDisable&&await It(n))return{success:!0,message:"Repository remains manually disabled",warnings:r,manuallyDisabled:!0};if(!t?.automatic)try{let A=await tf(p,a);A!==null&&(A.seededTool||A.seededProvider)&&M.info("Plugin init seeded localAgentTool=%s (source %s, seededTool=%s, seededProvider=%s)",A.tool,p,A.seededTool,A.seededProvider),A?.keptTool!==void 0&&M.info("Plugin init kept localAgentTool=%s (source %s drives %s; left alone)",A.keptTool,p,A.tool)}catch(A){r.push(`Could not record the local agent tool for this host: ${A.message}`)}}let h=s?!1:await el(),g=s?!1:await il(),S=s?!1:await _m(),E=s?!1:await of(),_=s?!1:await wm(),R=s?!1:await um(),P=s?!1:await sm()||await rm(),I=s?!1:await ol(),$=s?!1:await gl(),he=s?!1:await nl(),Ie=s?!1:await im(),Pe=s?!1:await vm(),_t=s?!1:await Jp(),Ht=s?!1:await Qm(),Rt={};for(let A of l){let wn=await Fa(A),TS=(0,dn.join)(wn,"sessions.json");try{await(0,Ni.writeFile)(TS,JSON.stringify({version:1,sessions:{}},null,"	"),{encoding:"utf-8",flag:"wx"})}catch(it){it.code!=="EEXIST"&&M.warn("Failed to bootstrap sessions.json in %s: %s",A,it.message)}if(s){if(await bd(A),m==="claude"){if(await dE(A),await mE(A),await Yc(A,[...xi]),a.claudeEnabled!==!1){let it=await wc(A);(A===n||Rt.path===void 0)&&(Rt=it)}}else if(m==="cursor"){let it={claude:!1,codex:!1,cursor:!0,gemini:!1,opencode:!1,copilot:!1,copilotChat:!1,cline:!1,devin:!1,antigravity:!1,kimi:!1};await yd(A,it),await Yc(A,or(it).flatMap(_S=>_S.gitExcludePaths()))}await Pi(A),await zn(A,[...Ii]);continue}await cE(A,{claudeEnabled:a.claudeEnabled});let zd={claude:a.claudeEnabled!==!1,codex:h,cursor:I,gemini:g,opencode:$,copilot:he,copilotChat:R,cline:Ie,devin:Pe,antigravity:_t,kimi:Ht};if(await Aw(A,[...aE,...xi,...or(zd).flatMap(it=>it.gitExcludePaths())]),await yd(A,zd),o||a.claudeEnabled===!1)continue;let zi=await wc(A);zi.warning&&r.push(zi.warning),(A===n||Rt.path===void 0)&&(Rt=zi)}await rE({claude:!1,cursor:!1,codex:h||s&&m==="codex",gemini:g,opencode:$,copilot:he,copilotChat:R,cline:Ie,devin:Pe,antigravity:_t,kimi:Ht}),s||await tI({codexDetected:h,geminiDetected:g});let hn={},ot={},kt={},gn={},yn={};o||(hn=await zc(n),hn.warning&&r.push(hn.warning),ot=await Qc(n),ot.warning&&r.push(ot.warning),kt=await Zc(n),kt.warning&&r.push(kt.warning),gn=await ed(n),gn.warning&&r.push(gn.warning),yn=await td(n),yn.warning&&r.push(yn.warning)),h&&a.codexEnabled===void 0&&(await ct({codexEnabled:!0}),M.info("Codex detected \u2014 enabled Codex session discovery"));let st;if(g&&a.geminiEnabled!==!1){if(!o)for(let A of l){let wn=await qc(A);(A===n||st===void 0)&&(st=wn.path)}a.geminiEnabled===void 0&&(await ct({geminiEnabled:!0}),M.info("Gemini detected \u2014 enabled Gemini session tracking"))}a.openCodeEnabled!==!1&&E&&a.openCodeEnabled===void 0&&(await ct({openCodeEnabled:!0}),M.info("OpenCode detected \u2014 enabled OpenCode session discovery"));let Yi=s?!1:await Em(),pr=a.cursorEnabled!==!1&&S,jo=a.cursorEnabled!==!1&&Yi;(pr||jo)&&a.cursorEnabled===void 0&&(await ct({cursorEnabled:!0}),M.info("Cursor detected (IDE=%s, CLI=%s) \u2014 enabled session discovery",pr,jo));let Xi=a.copilotEnabled!==!1&&_,B=a.copilotEnabled!==!1&&R;if((Xi||B)&&a.copilotEnabled===void 0&&(await ct({copilotEnabled:!0}),M.info("GitHub Copilot detected (CLI=%s, Chat=%s) \u2014 enabled session discovery",Xi,B)),P&&a.clineEnabled===void 0&&(await ct({clineEnabled:!0}),M.info("Cline detected \u2014 enabled Cline session discovery")),!s)for(let A of l)await rI(A);if(t?.source==="vscode-extension")M.info("Skipping v5 migration on vscode-extension source \u2014 Extension.ts owns it with UI");else if(s)M.info("Skipping v5 migration in repo-hooks-only mode \u2014 runs on every session start");else try{let A=await Tg(n);M.info("Schema v5 migration: alreadyDone=%s fresh=%s migrated=%d skipped=%d",A.alreadyDone,A.fresh,A.migrated,A.skipped)}catch(A){M.warn("Schema v5 migration failed (non-fatal): %s",A.message)}if(t?.clearManualDisableOnSuccess&&!o)try{await Ta(n,!1)}catch(A){let wn=A.message;r.push(`Enabled, but could not clear the manual-disable opt-out (${wn}). Run enable again to clear it.`),M.warn("Could not clear manual-disable opt-out after enable (non-fatal): %s",wn)}return M.info("Installation complete"),{success:!0,message:"Jolli Memory hooks installed successfully",warnings:r,claudeSettingsPath:Rt.path,gitHookPath:hn.path,postRewriteHookPath:ot.path,prepareMsgHookPath:kt.path,postMergeHookPath:gn.path,prePushHookPath:yn.path,geminiSettingsPath:st}}catch(a){let l=`Installation failed: ${a.message}`;return M.error(l),{success:!1,message:l,warnings:r}}finally{i&&await i.release()}}async function rI(e){let t=U(e);try{await(0,Ni.stat)(t)}catch{return}let n=ie();if(eI((0,dn.resolve)(t),(0,dn.resolve)(n)))return;let r=await Gt(t),o={};for(let[c,u]of Object.entries(r))u!==void 0&&(o[c]=u);if(Object.keys(o).length===0)return;let s=await Gt(n),i={};for(let[c,u]of Object.entries(o))s[c]===void 0&&(i[c]=u);Object.keys(i).length>0&&await Or(i,n);let a={};for(let c of Object.keys(i))a[c]=void 0;Object.keys(a).length>0&&await Or(a,t);let l=Object.keys(o).filter(c=>!(c in i));for(let c of l)M.warn("Worktree %s field %s not migrated: worktree=%s, global=%s (global value takes effect)",e,c,String(o[c]),String(s[c]));M.info("Migrated %d config fields from worktree %s to global",Object.keys(i).length,e)}async function wE(e,t){let n=e??process.cwd(),r=[],o=t?.integrationsOnly===!0;M.info(o?"Removing Jolli Memory integrations (MCP)":"Removing Jolli Memory hooks");let s=null;try{if(!o&&!t?.repoLockHeld&&(s=await kr(n),!s))return{success:!1,message:"Another Jolli enable/disable operation is still running; retry shortly",warnings:r};!o&&t?.persistManualDisable&&await Ta(n,!0);let i;try{i=await Sr(n)}catch{i=[n]}if(o){for(let l of i)try{await wd(l)}catch(c){M.warn("MCP removal failed in %s (non-fatal): %s",l,c.message)}return M.info("Integrations removal complete"),{success:!0,message:"Jolli Memory integrations removed (MCP)",warnings:r}}for(let l of i){let c=await Ec(l);c.warning&&r.push(c.warning),await Kc(l);try{await wd(l)}catch(u){M.warn("MCP removal failed in %s (non-fatal): %s",l,u.message)}t?.preserveMenu||await pE(l),await Pi(l),await zn(l,[...Ii])}let a=await nd(n);return a.warning&&r.push(a.warning),await rd(n),await od(n),await sd(n),await id(n),t?.preserveMenu||await zn(n,lE),r.push("The `jolli-*` skill files were left in place. To remove them manually: `rm -rf .agents/skills/jolli-* .claude/skills/jolli-*` and delete the `# >>> jolli skill exclude >>>` block from `.git/info/exclude` if you no longer want it."),M.info("Uninstallation complete"),{success:!0,message:"Jolli Memory hooks removed successfully",warnings:r}}catch(i){let a=`Uninstallation failed: ${i.message}`;return M.error(a),{success:!1,message:a,warnings:r}}finally{s&&await s.release()}}w();function Oi(){return new Promise((e,t)=>{let n=[];process.stdin.setEncoding("utf-8"),process.stdin.on("data",r=>n.push(r)),process.stdin.on("end",()=>{process.stdin.destroy(),e(n.join(""))}),process.stdin.on("error",t)})}var Wi=require("node:fs/promises"),BE=require("node:path");w();oe();ye();w();jn();ne();function ir(e){if(!e.startsWith("sk-jol-"))return null;let t=e.slice(7);if(!t.includes("."))return null;for(let n of t.split("."))try{let r=Buffer.from(n,"base64url").toString("utf-8"),o=JSON.parse(r);if(typeof o.t=="string"&&typeof o.u=="string")return{t:o.t,u:o.u,...typeof o.o=="string"?{o:o.o}:{}}}catch{}return null}var oI=["jolli.ai","jolli.dev","jolli.cloud","jolli-local.me"];function Di(e){let t;try{t=new URL(e)}catch{throw new Error(`Rejected Jolli origin (unparseable): ${e}`)}if(!sI(t))throw new Error(`Rejected Jolli origin "${t.origin}". Only https://*.jolli.ai, https://*.jolli.dev, https://*.jolli.cloud, and https://*.jolli-local.me are permitted.`)}function sI(e){let t=e.hostname.toLowerCase();return e.protocol==="https:"&&t!==""&&oI.some(n=>t===n||t.endsWith(`.${n}`))}var K=class extends Error{constructor(t){super(t),this.name="LocalAgentSetupError"}},un=class extends K{constructor(t){super(t),this.name="LocalAgentModelRefusedError"}},Me=class extends Error{constructor(t){super(t),this.name="LocalAgentAuthError"}},Tt=class extends Error{constructor(t){super(t),this.name="LocalAgentTransientError"}};var iI=new Map;function ar(e){iI.set(e.id,e)}var cr=require("node:path");var $e=require("node:fs"),Rd=require("node:os"),lr=require("node:path");w();Se();var Li=f("ExecutableResolver"),aI=15*6e4,Lo=null;function lI(e){return e.split(`
`).map(t=>t.trim()).filter(Boolean)}function EE(e){return(e??"0").split(".").map(t=>Number.parseInt(t,10)||0)}function cI(e,t){let n=EE(e),r=EE(t);for(let o=0;o<Math.max(n.length,r.length);o++){let s=n[o]??0,i=r[o]??0;if(s!==i)return s>i}return!1}function dI(e){return[lr.posix.join(e,".local/bin"),"/usr/local/bin","/opt/homebrew/bin","/opt/homebrew/sbin",lr.posix.join(e,".npm-global/bin"),"/Applications/ChatGPT.app/Contents/Resources"]}function bE(e,t,n){if(n==="win32")return e;let r=e.split(":").filter(Boolean);return[...new Set([...r,...dI(t)])].join(":")}function uI(e,t,n){let r={...process.env};for(let o of Object.keys(r))o.toLowerCase()==="path"&&delete r[o];return r.PATH=n,ge(e,[...t],{encoding:"utf8",env:r})}function pI(e,t,n={}){let r=n.home??(0,Rd.homedir)(),o=n.basePath??process.env.PATH??"",s=n.exists??$e.existsSync,i=n.runFinder??uI,a=n.listDir??kE,l=[],c=t==="win32"?"where":"which",u=t==="win32"?[e.binName]:["-a",e.binName],d=bE(o,r,t);try{l.push(...lI(i(c,u,d)))}catch(_){Li.info("%s: `%s %s` found nothing (%s)",e.binName,c,u.join(" "),_.message)}let p=e.knownPaths(r,t).filter(s);l.push(...p);let m=[...new Set(l)];if(t!=="win32")return SE(e,m.length,m,[],p,d,":"),m.map(_=>({file:_}));let h=_=>_.toLowerCase().endsWith(".exe"),g=m.filter(_=>!h(_)),S=g.flatMap(_=>e.expandShim?.(_,{exists:s,listDir:a})??[]),E=_E([...m.filter(h).map(_=>({file:_})),...S]);return SE(e,E.length,E.map(Mo),g,p,d,";"),E}var mI=[".exe",".cmd",".bat",".ps1",""];function TE(e,t){try{return(0,$e.statSync)(e).isFile()?(t==="win32"||(0,$e.accessSync)(e,$e.constants.X_OK),!0):!1}catch{return!1}}function fI(e,t,n={}){let r=n.home??(0,Rd.homedir)(),o=n.basePath??process.env.PATH??"",s=n.exists??(u=>TE(u,t)),i=t==="win32"?lr.win32.join:lr.posix.join,a=bE(o,r,t).split(t==="win32"?";":":"),l=t==="win32"?mI:[""],c=[];for(let u of a)if(u)for(let d of l){let p=i(u,e.binName+d);s(p)&&c.push(p)}return c.push(...e.knownPaths(r,t).filter(s)),[...new Set(c)]}function tt(e,t={}){let n=t.platform??process.platform,r=t.exists??(o=>TE(o,n));return t.overridePath?RE(e,t.overridePath,n).list.some(o=>r(o.file)):t.candidates?t.candidates().length>0:fI(e,n,t).length>0}function _E(e){let t=new Set;return e.filter(n=>{let r=[n.file,...n.launchArgs??[]].join("\0");return t.has(r)?!1:(t.add(r),!0)})}function RE(e,t,n){let r={list:[{file:t}],expanded:!1};if(n!=="win32"||t.toLowerCase().endsWith(".exe"))return r;let o=_E(e.expandShim?.(t,{exists:$e.existsSync,listDir:kE})??[]);return o.length?{list:o,expanded:!0}:r}function hI(e,t){return t!=="win32"||e.toLowerCase().endsWith(".exe")?"":" On Windows this must be a real .exe \u2014 a .cmd/.ps1 launcher cannot be run directly."}function Mo(e){return e.launchArgs?.length?`${e.file} ${e.launchArgs.join(" ")}`:e.file}function kE(e){try{return(0,$e.readdirSync)(e)}catch{return[]}}function SE(e,t,n,r,o,s,i){Li.info("%s discovery: %d candidate(s)=[%s]; shims=[%s]; knownPaths present=[%s] (searched %d PATH entries)",e.binName,t,n.join(", ")||"(none)",r.join(", ")||"(none)",o.join(", ")||"(none)",s.split(i).filter(Boolean).length)}function gI(e){let t=e.trim().split(/\s+/).filter(Boolean);return t.find(n=>/^v?\d+\./.test(n))??t[0]}function yI(e,t){try{let n=[...e.launchArgs??[],...t],r=ge(e.file,n,{encoding:"utf8",timeout:1e4}),o=gI(r);return{ok:!!o,version:o}}catch{return{ok:!1}}}function nt(e,t={}){let n=t.now??Date.now,r=`${e.binName} ${t.overridePath??""}`;if(Lo&&Lo.key===r&&n()-Lo.at<aI)return Lo.result;let o=t.probe??(u=>yI(u,e.probeArgs)),s=t.platform??process.platform,i=t.overridePath?RE(e,t.overridePath,s):null,a=i?.list??(t.candidates??(()=>pI(e,s)))(),l=null,c=[];for(let u of a){let d=o(u);if(!d.ok){c.push(Mo(u));continue}(!l||cI(d.version,l.version))&&(l={file:u.file,version:d.version??"0",launchArgs:u.launchArgs})}if(!l){Li.warn("No compatible %s: overridePath=%s; candidates=[%s]; failed probe `%s %s`=[%s]",e.binName,t.overridePath??"(none)",a.map(Mo).join(", ")||"(none)",e.binName,e.probeArgs.join(" "),c.join(", ")||"(none)");let u=t.overridePath&&!i?.expanded?hI(t.overridePath,s):"";throw new K(t.overridePath?`Configured local agent path "${t.overridePath}" is not a working ${e.binName} CLI.${u}`:`No compatible ${e.binName} CLI found. Install/upgrade it, or switch the AI provider.`)}return Li.info("Resolved %s executable: %s (v%s)",e.binName,Mo(l),l.version),Lo={at:n(),key:r,result:l},l}var vE={binName:"claude",knownPaths:(e,t)=>t==="win32"?[cr.win32.join(e,".local","bin","claude.exe"),cr.win32.join(e,".claude","local","claude.exe")]:[cr.posix.join(e,".local/bin/claude"),cr.posix.join(e,".claude/local/claude")],probeArgs:["--permission-mode","dontAsk","--version"]};function AE(e={}){return nt(vE,e)}function CE(e={}){return tt(vE,e)}w();oe();le();var sW=f("OptionalFlags");function dr(e,t){let n=[];for(let r of e)t?.has(r.id)||n.push(...r.args);return n}function wI(e,t){let n=t?.trim().toLowerCase()??"",r,o=-1,s=!1;for(let[i,a]of Object.entries(e??{})){let l=(a?.inputTokens??0)+(a?.cacheReadInputTokens??0),c=n!==""&&i.toLowerCase().includes(n);(l>o||l===o&&c&&!s)&&(r=i,o=l,s=c)}return r}var EI=["ANTHROPIC_API_KEY","ANTHROPIC_AUTH_TOKEN","ANTHROPIC_BASE_URL","CLAUDE_CODE_OAUTH_TOKEN","CLAUDECODE"],xE=[{id:"--strict-mcp-config",args:["--strict-mcp-config"]},{id:"--disable-slash-commands",args:["--disable-slash-commands"]},{id:"--setting-sources",args:["--setting-sources",""]}],Mi=class{constructor(){this.id="claude-code";this.optionalFlags=xE}discoverExecutable(t){return Promise.resolve(AE({overridePath:t}))}isPresent(t){return CE({overridePath:t})}buildInvocation(t,n){let r={...process.env};for(let s of EI)delete r[s];r[Ne]="1";let o=He();return{file:t.file,args:[...t.launchArgs??[],"-p","--output-format","json",...n.model?["--model",n.model]:[],"--system-prompt",n.systemPrompt,"--tools","","--permission-mode","dontAsk","--no-session-persistence",...dr(xE,n.disabledFlagIds)],stdin:n.prompt,env:r,cwd:o}}parseResult(t,n){let r;try{r=JSON.parse(t)}catch{throw new K(`Could not parse Claude Code output as JSON (first 200 chars): ${t.slice(0,200)}`)}if(r.is_error){let i=r.api_error_status??0,a=r.result??r.subtype??"unknown",l=`Claude Code returned an error (status ${i}): ${a}`;throw i===401||i===403?new Me(l):i===429||i>=500&&i<600?new Tt(l):i===404?new un(l):/log ?in|logged in|unauthori|authenticat|invalid api key/i.test(a)?new Me(l):new K(l)}let o=r.usage??{},s=wI(r.modelUsage,n);return{text:r.result??"",inputTokens:o.input_tokens??0,outputTokens:o.output_tokens??0,cachedTokens:(o.cache_read_input_tokens??0)+(o.cache_creation_input_tokens??0),costUsd:r.total_cost_usd??0,stopReason:r.stop_reason??null,...s!==void 0&&{model:s}}}};var Fi=require("node:path");var SI=300;function bI(e){let t=e.trim();if(!t.startsWith("{"))return null;try{let n=JSON.parse(t);return typeof n?.status=="number"?n:null}catch{return null}}function IE(e,t){let n=e.slice(0,SI),r=bI(e);if(r){let o=r.status,s=r.error?.message??"",i=!!t&&s.includes(`'${t}'`);if(o===401)return new Me(`Codex auth error: ${n}`);if(o===429||o>=500&&o<600)return new Tt(`Codex run failed: ${n}`);if(o>=400&&o<500&&i)return new un(`Codex refused the model '${t}': ${n}`);if(o===403)return new Me(`Codex auth error: ${n}`)}return/log ?in|logged in|unauthori|authenticat/i.test(n)?new Me(`Codex auth error: ${n}`):new Tt(`Codex run failed: ${n}`)}var PE={binName:"codex",knownPaths:(e,t)=>t==="win32"?[Fi.win32.join(e,".local","bin","codex.exe")]:[Fi.posix.join(e,".local/bin/codex")],probeArgs:["--version"]},NE=[{id:"--disable",args:["--disable","plugins"],matches:["--disable","Unknown feature flag: plugins"]}],$i=class{constructor(){this.id="codex";this.optionalFlags=NE}discoverExecutable(t){return Promise.resolve(nt(PE,{overridePath:t}))}isPresent(t){return tt(PE,{overridePath:t})}buildInvocation(t,n){let r={...process.env};delete r.OPENAI_API_KEY,delete r.OPENAI_BASE_URL,r[Ne]="1";let o=He(),s=n.systemPrompt?`${n.systemPrompt}

${n.prompt}`:n.prompt,i=[...t.launchArgs??[],"exec","--json","--skip-git-repo-check","-s","read-only","-C",o,...dr(NE,n.disabledFlagIds),...n.model?["-m",n.model]:[],s];return{file:t.file,args:i,stdin:"",env:r,cwd:o}}parseResult(t,n){let r="",o=0,s=0,i=0,a=!1,l;for(let c of t.split(`
`)){let u=c.trim();if(!u)continue;let d;try{d=JSON.parse(u)}catch{continue}a=!0;let p=d.type??"";if(p==="turn.failed")throw IE(d.message??d.error?.message??u,n);if(/error/i.test(p)){l??=d.message??d.error?.message??u;continue}if(p==="item.completed"&&d.item?.type==="agent_message"){let m=d.item.text;m&&(r=m)}p==="turn.completed"&&d.usage&&(o=d.usage.input_tokens??o,s=d.usage.output_tokens??s,i=d.usage.cached_input_tokens??i)}if(!a)throw new K(`Codex produced no JSONL events (first 200 chars): ${t.slice(0,200)}`);if(l!==void 0&&r.trim()==="")throw IE(l,n);return{text:r,inputTokens:o,outputTokens:s,cachedTokens:i,costUsd:0,stopReason:null}}};var rt=require("node:path");function TI(e,t){let n=rt.win32.join(rt.win32.dirname(e),"versions");return[...t.listDir(n)].sort().reverse().flatMap(o=>{let s=rt.win32.join(n,o,"node.exe"),i=rt.win32.join(n,o,"index.js");return!t.exists(s)||!t.exists(i)?[]:[{file:s,launchArgs:["--use-system-ca",i]},{file:s,launchArgs:[i]}]})}function _I(e,t=process.env){return t.LOCALAPPDATA||rt.win32.join(e,"AppData","Local")}function RI(e,t,n){return t!=="win32"?[rt.posix.join(e,".local/bin/cursor-agent")]:[rt.win32.join(_I(e,n),"cursor-agent","cursor-agent.cmd"),rt.win32.join(e,".local","bin","cursor-agent.exe")]}var OE={binName:"cursor-agent",knownPaths:RI,probeArgs:["--version"],expandShim:TI},ji=class{constructor(){this.id="cursor-agent"}discoverExecutable(t){return Promise.resolve(nt(OE,{overridePath:t}))}isPresent(t){return tt(OE,{overridePath:t})}buildInvocation(t,n){let r={...process.env};delete r.CURSOR_API_KEY,r[Ne]="1";let o=He(),s=n.systemPrompt?`${n.systemPrompt}

${n.prompt}`:n.prompt,i=[...t.launchArgs??[],"-p","--output-format","json","--trust",...n.model?["--model",n.model]:[],s];return{file:t.file,args:i,stdin:"",env:r,cwd:o}}parseResult(t){let n;try{n=JSON.parse(t)}catch{throw new K(`Could not parse Cursor output as JSON (first 200 chars): ${t.slice(0,200)}`)}if(n.is_error){let o=n.result??n.subtype??"unknown",s=`Cursor returned an error: ${o}`;throw/log ?in|logged in|unauthori|authenticat|not_logged_in/i.test(o)||/auth/i.test(n.subtype??"")?new Me(s):new K(s)}let r=n.usage??{};return{text:n.result??"",inputTokens:r.inputTokens??0,outputTokens:r.outputTokens??0,cachedTokens:(r.cacheReadTokens??0)+(r.cacheWriteTokens??0),costUsd:0,stopReason:n.subtype??null}}};var LE=require("node:fs"),pn=require("node:path");va();var kI=24e3,vI=1e6,AI="jolli-context.md",CI=["---","name: jolli-task","description: Full task context for this run; follow the instructions it contains.","---"].join(`
`),xI="Follow the instructions in your agent definition and output only what they ask for \u2014 no preamble, no commentary.";function II(e,t){return t!=="win32"?[pn.posix.join(e,".local/bin/kimi")]:[pn.win32.join(e,".kimi-code","bin","kimi.exe"),pn.win32.join(e,".local","bin","kimi.exe")]}var DE={binName:"kimi",knownPaths:II,probeArgs:["--version"]},Ui=class{constructor(){this.id="kimi"}discoverExecutable(t){return Promise.resolve(nt(DE,{overridePath:t}))}isPresent(t){return tt(DE,{overridePath:t})}buildInvocation(t,n){let r={...process.env};delete r.MOONSHOT_API_KEY,delete r.MOONSHOT_BASE_URL,r[Ne]="1";let o=He(),s=n.systemPrompt?`${n.systemPrompt}

${n.prompt}`:n.prompt,i=[...t.launchArgs??[],...n.model?["--model",n.model]:[],"--output-format","stream-json"];if(s.length<=kI)return{file:t.file,args:[...i,"--prompt",s],stdin:"",env:r,cwd:o};let a=(0,pn.join)(o,AI);(0,LE.writeFileSync)(a,`${CI}
${ka(s,vI)}`,"utf-8");let l=[...i,"--agent-file",a,"--prompt",xI];return{file:t.file,args:l,stdin:"",env:r,cwd:o}}parseResult(t){let n="";for(let r of t.split(`
`)){let o=r.trim();if(!o)continue;let s;try{s=JSON.parse(o)}catch{continue}s.role==="assistant"&&typeof s.content=="string"&&s.content&&(n=s.content)}if(!n)throw new K(`Kimi produced no assistant output (first 200 chars): ${t.slice(0,200)}`);return{text:n,inputTokens:0,outputTokens:0,cachedTokens:0,costUsd:0,stopReason:null}}};var mn=require("node:path");function PI(e,t){let n=mn.win32.dirname(e),r=mn.win32.join(n,"node_modules","opencode-ai","bin","opencode.exe");return t.exists(r)?[{file:r}]:[]}var ME={binName:"opencode",knownPaths:(e,t)=>t==="win32"?[mn.win32.join(e,".opencode","bin","opencode.exe"),mn.win32.join(e,".local","bin","opencode.exe")]:[mn.posix.join(e,".local/bin/opencode")],probeArgs:["--version"],expandShim:PI},$E=[{id:"--pure",args:["--pure"]}],Hi=class{constructor(){this.id="opencode";this.optionalFlags=$E;this.unnamedFlagFailures=!0}discoverExecutable(t){return Promise.resolve(nt(ME,{overridePath:t}))}isPresent(t){return tt(ME,{overridePath:t})}buildInvocation(t,n){let r={...process.env};r[Ne]="1",r.OPENCODE_DISABLE_CLAUDE_CODE="1";let o=He(),s=n.systemPrompt?`${n.systemPrompt}

${n.prompt}`:n.prompt,i=[...t.launchArgs??[],"run",...dr($E,n.disabledFlagIds),...n.model?["--model",n.model]:[],s];return{file:t.file,args:i,stdin:"",env:r,cwd:o}}parseResult(t){let n=t.trim();if(!n)throw new K("OpenCode produced no output.");return{text:n,inputTokens:0,outputTokens:0,cachedTokens:0,costUsd:0,stopReason:null}}};ar(new Mi);ar(new ji);ar(new $i);ar(new Hi);ar(new Ui);w();Se();var UW=f("LocalAgentRunner"),HW=15*6e4;Os();var kd=`  - Subject and tense: third person, past tense, with a concrete subject. Use "The developer added...", "This commit (or batch of commits) introduced...", "The login page now ...", or "Users can now ...". FORBIDDEN subjects: "the tool", "the LLM", "the system", "the model", "the AI" -- never anthropomorphize the generator. Never "I" or "we".
  - Describe WHAT changed and what users can now do differently. Do NOT explain WHY technical choices were made -- that belongs in the decisions field. If a sentence connects clauses with any of the words below, it is almost certainly explaining WHY/HOW or contrasting an alternative -- rewrite to state only the outcome, even if the sentence becomes shorter:
      * Causal: "so", "because", "since" (when meaning "because"), "which means", "which forced", "in order to"
      * Contrastive: "rather than", "instead of", "as opposed to", "unlike before", "unlike previously"
    Note: words like "without" and "until" are NOT forbidden. They are fine when they describe a neutral spatial / contextual fact ("without leaving the page", "until the result satisfies the user"). They become a problem only when they implicitly criticise an old path ("...there was no way to fix it without re-running the entire flow from scratch") -- which is already covered by the broader rule "do not describe before-vs-after in the recap".
  - No code identifiers: no file paths, no function/class/variable names, no CLI flags, no inline code. Also forbidden: any internal field name or section label from this prompt or the data model (e.g. "decisions field", "topic count", "importance label", "recap block", "word ceiling", "trailing mention"). Also forbidden: references to how the generator works internally ("before labeling", "after parsing", "the tool decides", "marked as major"). The test: a colleague who uses the product but has never seen this codebase or this prompt should understand every sentence.
  - User-facing names ARE allowed and encouraged: product names, page names ("the login page"), feature names ("article reordering"), and widely-recognized UI element names ("the sidebar", "the Settings panel").
  - Meta-commits (changes to internal rules, prompts, configuration, or generation behavior the user does not directly interact with): describe the user-VISIBLE consequence -- what the user will see in future output or product behavior -- NOT the internal rule that changed. Translate mechanism statements like "the recap is now generated after the topic list" into user-facing outcomes like "future commit summaries will read more clearly: each recap covers fewer topics in greater depth". If you cannot identify a visible consequence for the user, this change may not warrant a recap at all.
  - Paragraph balance: when the recap has multiple paragraphs, each paragraph MUST contain at least 2 sentences. Single-sentence paragraphs alongside longer ones produce a fragmented finish -- expand the short one with concrete detail, or merge it into an adjacent paragraph. (A whole-recap-of-one-sentence is still fine for trivial single-change commits.)
  - Self-check (mandatory): before finalizing your output, mentally scan each sentence of your draft recap for the forbidden connectives listed above. For every match, rewrite that sentence to state only the visible outcome and drop the comparison/causation clause entirely. The lost information either belongs in the decisions field or should not be in the recap at all. If you have not done this scan, your output is not ready.`,vd=`  Recap anti-patterns (do NOT write like this):
  - BAD: "The way the tool selects topics was overhauled, so it can look back at what was already marked as major rather than guessing ahead."
    Why bad: subject "the tool" anthropomorphizes the generator; "so" + "rather than" are causal connectives explaining WHY/HOW; "marked as major" is implementation-level vocabulary.
  - BAD: "The recap block was moved after the topics, which means the LLM no longer needs to anticipate the importance label."
    Why bad: "the LLM" forbidden subject; "the recap block" / "importance label" are internal field names; "which means" explains mechanism.
  - GOOD: "Future commit summaries will be easier to read: each recap now focuses on the two or three most impactful changes and explains them in real depth. Single-line summaries of every topic are gone. Routine cleanup work no longer appears in the recap at all."
    Why good: subject is the user-visible artefact ("future commit summaries"); describes WHAT the user will see; no internal vocabulary; no forbidden causal/contrastive connectives.`,FE=`**Output format requirements (READ FIRST -- the rest of this prompt depends on these being followed):**

Your response MUST be a delimited plain-text document with the following shape:

\`\`\`
===SUMMARY===
[optional ---TICKETID--- block]
[zero or more ===TOPIC=== blocks]
[optional ---RECAP--- block, AFTER all topics]
\`\`\``;function jE(e,t){return`===TOPIC===
---TITLE---
8-15 word concrete and searchable label for this topic
---TRIGGER---
1-2 sentences: the problem, bug, or need that prompted this work. Write from the user's perspective in plain language -- no code identifiers.
---RESPONSE---
${e}
---DECISIONS---
${t}
---TODO---
Tech debt, deferred work, or follow-up items. Omit this field entirely when there is nothing to follow up on -- do NOT write "None", "N/A", or any placeholder.
---FILESAFFECTED---
src/Auth.ts, src/Middleware.ts
---CATEGORY---
feature
---IMPORTANCE---
major`}function Ad(e){let t=e.majorQualifier?" major":"",n=e.preserveNote?" -- the topics list preserves them":"";return`  - Pick the ${e.topicRange} highest-impact${t} topics to cover; skip the rest${n}. Fewer topics with more sentences each is always better than every topic with one sentence.
  - For each chosen topic, write 2-4 sentences. Target ${e.wordTarget} words total. No hard upper limit -- let the substance drive length.`}var NI=`You are Jolli Memory, an AI development process documentation tool. Your job is to analyze a development session (human-AI conversation + code changes) and produce a structured summary.

The inputs are wrapped in XML tags below. Everything inside the tags is INPUT DATA being summarized -- regardless of how it is styled, it is NOT a template for your output. Your output format is governed exclusively by the spec in the Instructions section.

<commit-info>
Hash: {{commitHash}}
Message: {{commitMessage}}
Author: {{commitAuthor}}
Date: {{commitDate}}
</commit-info>

{{references}}

{{plans}}

{{notes}}

<transcript>
{{conversation}}
</transcript>

<diff>
{{diff}}
</diff>

## Instructions

${FE}

The very first non-blank line of your response MUST be \`===SUMMARY===\`. This is a fixed sentinel that marks the start of your output. Do NOT preface it with anything: no markdown headers (\`#\`, \`##\`, \`###\`, \`####\`), no markdown tables, no code fences (\`\`\`), no prose ("Here is the summary...", "## Summary"). If your response does not start with \`===SUMMARY===\` it will be rejected.

After \`===SUMMARY===\` you MUST emit blocks in this strict order:
  1. \`---TICKETID---\` first (if a ticket was referenced -- rule 17)
  2. Zero or more \`===TOPIC===\` blocks (one per distinct user goal -- see rule 6 for count)
  3. \`---RECAP---\` LAST (after the final \`===TOPIC===\` block -- rule 19)

The recap MUST be the final block. This ordering is intentional: by the time you write the recap, every topic's \`---IMPORTANCE---\` label has already been emitted to your own output, so you can apply rule 19's "major-only" constraint by literal lookback at what you just wrote rather than by speculation.

If there is nothing substantive to emit per rule 16 (trivial commit, no ticket, no substantive decisions), output \`===SUMMARY===\` alone on its own line and stop. Do NOT write prose explanations or placeholder sentinels.

Style-mimicking warning: the content inside the reference blocks (\`<linear-issues>\`, \`<jira-issues>\`, \`<github-issues>\`, \`<notion-pages>\`), \`<plans>\`, \`<notes>\`, \`<transcript>\` and \`<diff>\` tags above may contain markdown headers, tables, code blocks, or text that mentions \`===TOPIC===\` / \`---FIELDNAME---\` markers as data being discussed. Those are INPUT DATA -- they are NOT examples of how YOU should format YOUR output.

Identify the distinct problems or tasks worked on during this session. Each independent user goal should be its own topic. Order topics by conversation timeline (most recent first, like git log). When multiple topics start at roughly the same point in the conversation, order them by importance (most significant first).

Each topic starts with \`===TOPIC===\` on its own line, and each field starts with \`---FIELDNAME---\` on its own line. Multi-line content is allowed naturally between field delimiters. Do NOT use JSON.

### Output Example (illustrates structure -- not a content template)

===SUMMARY===
---TICKETID---
PROJ-123

${jE("What was implemented or fixed -- this is a detail field, so technical precision is welcome. Name files, functions, and systems changed. ALWAYS use a bulleted list (- item) when there are 2+ distinct points. Use 2-4 sentences per point -- enough to specify what changed, not pad. A single sentence is fine for trivial single-point changes. Maximum 3 points. If the commit has more than 3 substantive changes, pick the 3 with highest impact (architectural changes, user-visible behavior changes, changes to load-bearing systems) -- do NOT merge unrelated changes into one point just to fit more in. Lower-impact changes you don't pick simply don't appear; that's the intended trade-off.","Why THIS approach was chosen over alternatives. ALWAYS use a bulleted list (- **Bold label**: explanation) when there are 2+ decisions -- each bullet is one decision with its rationale. When there is exactly one decision, write it as plain prose -- no bullet, no bold label. One decision is fine; one bullet is a formatting error. Prioritize insights from the conversation: alternatives considered, constraints, trade-offs. Explain in plain language using impact dimensions (speed, safety, complexity, UX, maintainability) -- no code identifiers. Write so a teammate unfamiliar with this codebase area can follow. Use 2-4 sentences per bullet -- enough to explain the trade-off, not pad. Maximum 3 bullets. If the commit has more than 3 substantive decisions, pick the 3 with highest impact (architectural choices, user-visible behavior changes, decisions that constrain future work) -- do NOT merge unrelated decisions into one bullet just to fit more in. Lower-impact decisions you don't pick simply don't appear; that's the intended trade-off.")}

===TOPIC===
[Repeat the ===TOPIC=== block above for each additional topic the commit warrants per rule 6's count guidance. The example shows ONE block for brevity -- do not let that anchor your output to a single topic when the diff covers multiple goals.]

---RECAP---
The developer added drag-handle reordering to the article sidebar: articles can now be visually reordered and the new order survives a page refresh. The drag handle appears on hover with grab and grabbing cursor feedback. Ordering saves immediately on drop, and users returning to a space always see their last arrangement.

## Rules
1. The summary has two audiences. The **narrative fields** (title, trigger, decisions) are read by everyone -- write them for a colleague who uses the product but was NOT present in the session and has never read this codebase. Use plain language: no file paths, no function/class/variable names, no code snippets, no CLI flags, and no implementation-level terms that only make sense if you have seen the code (e.g. internal algorithm names, internal protocol names, framework-specific concepts). The test: a product manager or designer should understand every sentence in these fields without needing an explanation. The **detail fields** (response, todo, filesAffected) are collapsed by default and read on-demand -- they MAY use technical identifiers (file names, function names, specific APIs) to describe implementation precisely.
2. decisions is the most valuable field -- it captures reasoning that cannot be reconstructed from the diff alone. ALWAYS use a bulleted list (- **Label**: rationale) when there are 2+ decisions. When there is exactly one decision, write it as plain prose -- no bullet, no bold label. One decision is fine; one bullet is a formatting error. Express each in terms of IMPACT and TRADE-OFFS, not code architecture. Use 2-4 sentences per bullet to actually explain the trade-off (depth over breadth). Maximum 3 bullets. If there are more than 3 substantive decisions, pick the 3 with highest impact -- do NOT merge unrelated decisions into one bullet just to fit more in. Lower-impact decisions you don't pick simply don't appear; that's the intended trade-off.
3. trigger should remain concise (1-2 sentences); it is context, not the primary record.
4. response is a detail field -- be specific and technical. Name the files, functions, or systems changed. ALWAYS use a bulleted list (- item) when there are 2 or more distinct points. Use 2-4 sentences per point to specify what changed (depth over breadth). A single prose sentence is acceptable only for trivial single-point changes. Maximum 3 points. If there are more than 3 substantive changes, pick the 3 with highest impact -- do NOT merge unrelated changes into one point just to fit more in. Lower-impact changes you don't pick simply don't appear; that's the intended trade-off.
5. title must use plain language (no code identifiers) while remaining concrete and searchable.
6. Topic count: gauge the scope of the diff and choose accordingly:
   - Focused, lightweight change (small diff, one feature): 1-3 topics. Consolidate closely related sub-tasks.
   - Moderate work (medium diff, multiple distinct user goals): 2-6 topics. Each topic = one distinct goal.
   - Substantial wide-ranging work (large diff, many goals): 3-12 topics, splitting distinct goals into separate entries.
   When in doubt about which bucket applies, lean toward fewer topics.
7. Do not over-split minor sub-tasks that belong to the same goal; merge them into one topic. If the entire commit clearly addresses one purpose, a single topic is preferred.
8. If the conversation is empty or uninformative, infer topics from the diff and commit message. Conversely, when the conversation IS rich, lean heavily on it for trigger and decisions -- the diff should only confirm what was implemented, not drive the narrative.
9. todo: only include when deferred work was EXPLICITLY discussed in the conversation or commit message. "Verify that..." or "Ensure that..." is NOT a valid todo -- those are testing steps, not deferred work. If there is nothing to follow up on, omit the ---TODO--- field entirely -- never write "None", "N/A", or similar.
10. The conversation transcript is the PRIMARY source -- it contains reasoning, trade-offs, and context that cannot be reconstructed later. The diff is the SECONDARY source -- use it to verify what was actually implemented, to fill gaps when the conversation is sparse, and to write the response field accurately. Do not speculate beyond what these sources contain.
11. When the conversation IS rich, extract these high-value elements for trigger and decisions: the user's original problem statement, alternatives that were discussed and discarded, moments where the approach changed direction, explicit rationale given for a choice, and any concerns or risks mentioned. These are the unique value of Jolli Memory -- the diff alone cannot provide them.
12. Return ONLY the delimited text starting with ===SUMMARY=== and using ===TOPIC=== / ---FIELDNAME--- markers. No JSON, no markdown fences, no other wrapping.
13. filesAffected: list the 2-6 most important files changed in this topic as comma-separated paths (relative to repo root). Focus on business logic and entry points. Exclude test files (*.test.ts, *.spec.ts, *.test.tsx, etc.), boilerplate (lockfiles, config snapshots), and generated files. If the topic touches only 1 non-test file, list just that file.
14. category: pick exactly one from the following: feature, bugfix, refactor, tech-debt, performance, security, test, docs, ux, devops.
15. importance: "major" for topics that add features, fix user-facing bugs, make architectural decisions, or change system behavior. "minor" for routine cleanup, formatting, config tweaks, version bumps, or documentation-only changes.
16. If a change has no meaningful decision behind it (e.g. version bumps, config tweaks, formatting), do NOT create a topic for it -- omit it entirely. Every topic MUST have a substantive decisions field. Never write "No design decisions recorded" or similar placeholders. If rule 16 causes ALL topics to be omitted (the entire commit has no substantive decisions), simply emit no ===TOPIC=== sections. Other top-level sections (such as ---TICKETID--- if a ticket exists, and ---RECAP--- if that field is part of your output format) remain governed by their own rules and may still appear. If there is nothing to emit at all (no ticket, no recap, no topics), output \`===SUMMARY===\` alone on its own line and stop. Do NOT write any prose explanation or placeholder sentinel.
17. ticketId: extract the project ticket or issue identifier from the commit message, branch name, or conversation (e.g. "PROJ-123", "FEAT-456", "#789"). Output the canonical uppercase form (e.g. "proj-123" -> "PROJ-123"). The value MUST be a real ticket key of the form \`ABC-123\` (or "#789"); a plan slug (e.g. "2026-07-02-memory-detail-panel"), a file path, a commit SHA, or a bare date is NOT a ticket -- never emit one. If no ticket is referenced anywhere, omit the ---TICKETID--- field entirely; never emit a placeholder such as "(none referenced)".
18. NEVER use the literal strings ===SUMMARY===, ===TOPIC===, or ---FIELDNAME--- (e.g. ---TITLE---, ---RESPONSE---, ---RECAP---, ---TICKETID---) inside your content. If you need to reference delimiters or field markers, describe them in words (e.g. "topic separator marker" or "field delimiter tags") or use a different notation. The format-level markers that structure your response are required and not subject to this restriction.
19. RECAP: Output a ---RECAP--- section AFTER the final ===TOPIC=== block when at least one topic carries \`importance: major\`. Omit the section entirely otherwise -- do NOT invent content for trivial commits, and do NOT write a recap when every topic is \`importance: minor\`. Content rules:
${Ad({topicRange:"2-3",majorQualifier:!0,preserveNote:!0,wordTarget:"150-300"})}
${kd}
  - The recap describes ONLY \`importance: major\` topics. \`importance: minor\` topics (routine formatting, config tweaks, version bumps, doc-only changes) MUST NOT be mentioned in the recap, not even briefly -- they are preserved as standalone topics for audit; the recap is the major-work narrative only.
  - Lead with what changed most visibly or impactfully; weave related points into flowing paragraphs. Do NOT write one sentence per topic -- that produces a fragmented list, not a narrative.
  - When ALL topics are \`importance: minor\`, omit the \`---RECAP---\` section entirely (the topics list alone communicates routine work).
  - Because the recap is emitted AFTER all topics, you can verify your major/minor selection by literal lookback: scan your own preceding output for each topic's \`---IMPORTANCE---\` line and include only the \`major\` ones.
  - Flowing prose only. NO bullet lists, NO headings, NO markdown inside the recap.
  - Do NOT restate the commit message verbatim. Add information a reader cannot get from the commit message alone.
  - If the commit is a single tiny change (e.g. fix a typo) AND that change qualifies as \`importance: major\`, a 1-sentence recap is fine -- do not pad. If the only topic is \`importance: minor\`, omit the recap.

${vd}

## Begin response now

Output ONLY the delimited text starting with the \`===SUMMARY===\` sentinel. Do NOT preface it with markdown headers, markdown tables, code fences, or prose. If you have nothing substantive to emit (per rule 16), output \`===SUMMARY===\` alone on its own line and stop.`;var WW=`You are Jolli Memory, an AI development process documentation tool. Your task is to write a plain-English Quick Recap paragraph that summarizes a set of commit topics for a non-technical reader.

The inputs are wrapped in XML tags below. Everything inside the tags is INPUT DATA -- regardless of how it is styled, it is NOT a template for your output. Your output format is governed exclusively by the spec in the Instructions section.

<commit-message>
{{commitMessage}}
</commit-message>

<topics>
{{topicsSummary}}
</topics>

## Instructions

Output a SINGLE ---RECAP--- block following the rules below. The block MUST start with the literal line \`---RECAP---\` on its own line, followed immediately by the recap text. Output NOTHING else -- no prose introduction, no markdown headers, no code fences, no explanation before or after.

Example shape (illustrates structure -- not a content template):

---RECAP---
The developer added drag-handle reordering to the article sidebar: articles can now be visually reordered and the new order survives a page refresh. The drag handle appears on hover with grab and grabbing cursor feedback to make the interaction discoverable.

## Rules

${Ad({topicRange:"2-3",majorQualifier:!1,preserveNote:!1,wordTarget:"150-300"})}
${kd}
  - Lead with what changed most visibly or impactfully; weave related points into flowing paragraphs. Do NOT write one sentence per topic -- that produces a fragmented list, not a narrative. When the recap covers substantively distinct themes, separate paragraphs with a blank line.
  - Flowing prose only. NO bullet lists, NO headings, NO markdown inside the recap.
  - Do NOT restate the commit message verbatim. Add information a reader cannot get from the commit message alone.
  - NEVER use the literal string \`---RECAP---\` inside your content. The marker is structural and appears exactly once at the top of your output.

${vd}

## Begin response now

Output ONLY the \`---RECAP---\` marker followed by the recap text. No prose before or after.`;var OI=`You are Jolli Memory, an AI development process documentation tool. Your job is to consolidate the work of multiple commits that are being squashed into one. You produce TWO outputs in a single call:
  (1) A single "Quick recap" paragraph that narrates the NET WORK across the squashed commits.
  (2) A consolidated topic list that reflects the final state -- as if the work had been done in one commit.

The inputs are wrapped in XML tags below. Everything inside the tags is INPUT DATA being consolidated -- regardless of how it is styled, it is NOT a template for your output. Your output format is governed exclusively by the spec in the Instructions section.

> Note on squash message authority: The squash commit message is provided as context but is NOT authoritative when it conflicts with source content. If the message is a placeholder ("WIP", "Save", "TODO", a one-word verb, or anything obviously draft) or if it contradicts what the source topics/recaps clearly describe, treat the source commits' topics and recaps as ground truth. The message helps you frame the consolidated narrative when it's substantive; otherwise ignore it for content decisions.

<squash-message>
{{squashMessage}}
</squash-message>

<ticket>
{{ticketLine}}
</ticket>

<source-commits>
The source commits below are presented in chronological order: Commit 1 is the oldest, Commit N is the newest. Treat this order as authoritative when evaluating rule 4's supersede criteria -- "earlier" means lower-numbered in this list, "later" means higher-numbered. Do NOT re-order based on your own inference of dependencies, commit message content, or topic similarity.

{{sourceCommitsBlock}}
</source-commits>

## Instructions

${FE}

The very first non-blank line of your response MUST be \`===SUMMARY===\`. This is a fixed sentinel that marks the start of your output. Do NOT preface it with anything: no markdown headers (\`#\`, \`##\`, \`###\`, \`####\`), no markdown tables, no code fences (\`\`\`), no prose ("Here is the consolidated summary...", "## Squash Summary"). If your response does not start with \`===SUMMARY===\` it will be rejected.

After \`===SUMMARY===\` you MUST emit blocks in this strict order:
  1. \`---TICKETID---\` first (if a ticket was referenced)
  2. Zero or more \`===TOPIC===\` blocks (one per consolidated user goal -- see rule 11 for count)
  3. \`---RECAP---\` LAST, after the final \`===TOPIC===\` block (rule 1)

The recap MUST be the final block. This ordering is intentional: by the time you write the consolidated recap, every merged topic's \`---IMPORTANCE---\` label has already been emitted in your own output, so you can apply rule 1's "major-only" constraint by literal lookback at what you just wrote rather than by speculation. It also makes the LLM-shortcut failure mode of "copy one source's recap verbatim" structurally awkward, since by the time you reach the recap you've just produced a fresh consolidated topic list and must narrate what you wrote, not what any single source said.

If every source topic is trivial and there is nothing substantive to emit (per rule 15), output \`===SUMMARY===\` alone on its own line and stop.

Style-mimicking warning: the content inside the XML tags above may itself contain prose with formatting cues, and the squash commit message may use markdown. Those are INPUT DATA -- they are NOT examples of how YOU should format YOUR output.

First, identify the distinct user goals represented across the source topics and recaps. Merge overlapping work, drop topics only when later source content explicitly shows they were superseded (see rule 4 for the evidence standard), and consolidate iterative recaps into a single narrative of the final state.

Then emit your response in the delimited plain-text format below. Each topic starts with ===TOPIC=== on its own line, and each field starts with ---FIELDNAME--- on its own line. Do NOT use JSON.

### Output Example (illustrates structure -- not a content template)

===SUMMARY===
---TICKETID---
PROJ-123

${jE("What was implemented or fixed. This is a detail field, so technical precision is welcome. Name files, functions, and systems changed. ALWAYS use a bulleted list (- item) when there are 2+ distinct points. Use 2-4 sentences per point -- enough to specify what changed, not pad. A single sentence is fine for trivial single-point changes. Cap and selection are governed by rule 6's bullet-count guidance (squash-consolidate raises the per-topic cap to 5 vs the summarize prompt's 3, since consolidation aggregates work from multiple commits).","Why THIS approach was chosen over alternatives. ALWAYS use a bulleted list (- **Bold label**: explanation) when there are 2+ decisions -- each bullet is one decision with its rationale. Prioritize insights carried over from the source topics: alternatives considered, constraints, trade-offs. Explain in plain language using impact dimensions (speed, safety, complexity, UX, maintainability) -- no code identifiers. Use 2-4 sentences per bullet -- enough to explain the trade-off, not pad. Cap and selection are governed by rule 6's bullet-count guidance (max 5 per topic; pick the highest-impact decisions when consolidating yields more).")}

===TOPIC===
[Repeat the full ===TOPIC=== block above for each independent or merged topic the consolidation produces. Squashes spanning diverse work commonly emit 5-15 topics -- see rule 11 for sizing. The example shows ONE block for brevity; do not let that anchor your output to a single topic.]

---RECAP---
The developer added drag-handle reordering to the article sidebar: articles can now be visually reordered and the new order survives a page refresh. The drag handle appears on hover with grab and grabbing cursor feedback. Ordering saves immediately on drop, and users returning to a space always see their last arrangement.

A new confirmation step was added before destructive actions in the settings panel. Clicking "Delete Space" or "Archive" now presents a confirmation dialog. Accidental data loss is much less likely, and both actions share the same pattern across the panel.

## Rules

1. RECAP: Output a ---RECAP--- section AFTER the final ===TOPIC=== block when at least one consolidated topic carries \`importance: major\`. Omit the section entirely otherwise -- do NOT invent content, and do NOT write a recap when every consolidated topic is \`importance: minor\`. Content rules:
${Ad({topicRange:"3-5",majorQualifier:!0,preserveNote:!0,wordTarget:"200-400"})}
${kd}
  - The consolidated recap describes ONLY \`importance: major\` topics. \`importance: minor\` topics (routine formatting, config tweaks, version bumps, doc-only changes) MUST NOT be mentioned in the recap, not even briefly -- they survive in the topics list; the recap is reserved for major-work narrative.
  - Lead with what changed most visibly or impactfully; weave related points into flowing paragraphs. Do NOT write one sentence per topic -- that produces a fragmented list, not a narrative.
  - When ALL post-merge topics are \`importance: minor\`, omit the \`---RECAP---\` section entirely (the topics list alone communicates routine work).
  - Because the recap is emitted AFTER all topics, you can verify your major/minor selection by literal lookback: scan your own preceding output for each topic's \`---IMPORTANCE---\` line and include only the \`major\` ones. Do NOT copy verbatim from any single source recap; the consolidated recap MUST be a fresh synthesis driven by the \`major\` topics you just emitted, not by which input recap looked most comprehensive.
  - Deduplicate iterations: describe the FINAL state only, not the iteration history. If an earlier recap says a button was added and a later recap says it was renamed with a confirmation dialog, the consolidated recap describes the button in its final form.
  - When source iteration represents a substantive technical evolution (algorithm change, library swap, scope pivot), do NOT describe the path here -- that belongs in DECISIONS per rule 6's evolution sub-rule. RECAP is for final-state user-facing prose; the X-over-Y trade-off path lives in the structured decisions field.
  - Describe net effects (subject to rule 4's evidence requirement).
  - Flowing prose only. NO bullet lists, NO headings, NO markdown.
  - Do NOT restate the squash commit message verbatim. Add information a reader cannot get from the commit message alone.

${vd}

2. Consolidate topics about the same feature or user goal. If commit A introduced feature X and commit B later changed how feature X works, produce ONE topic that describes feature X in its final state. Describe the outcome, not the iteration history.

3. Drop superseded work, but preserve partial survivors:
   - If commit A added code that commit B **completely** removed (no surviving net effect), do NOT emit a topic about it -- a reviewer does not care about the churn.
   - If commit B only **partially** modified A's addition (kept some, removed some, refactored some), emit ONE topic describing the surviving net effect. Don't drop the whole topic just because part of it was reverted.
   - "Completely removed" is a high bar -- requires explicit evidence per rule 4. When in doubt, keep the topic and describe the surviving state.

4. Evidence requirement for supersede / merge (governs rules 2 and 3):
   - Only drop or merge a source topic when the source content EXPLICITLY signals it. Concrete signals to look for:
     - A later source topic's title / decisions / trigger / response uses words like: "replaces", "renames", "removes", "supersedes", "reverts", "rolled back", "no longer needed", "undid", "deleted", "abandoned", "discarded", "obsoleted".
     - A later recap describes earlier work as "reworked", "rewritten", "scrapped", "thrown away", "replaced with", "moved to a different approach".
     - A later decision bullet explicitly compares to the earlier choice ("**Y over the previous X**", "**Switched from X to Y because...**").
   - Do NOT infer supersede from commit ordering alone, from shared file paths, from shared identifiers, or from surface similarity. Two topics touching the same file may be orthogonal additions; two topics named similarly may address different goals.
   - When evidence is ambiguous, KEEP both topics. The cost of a redundant topic is lower than the cost of dropping a real one.

5. Preserve independent topics as-is. When a source topic has no peer covering the same goal, carry it forward with minimal editing -- rewriting only to improve consistency with the other consolidated topics (never for its own sake). Every edit is a chance to lose information.

6. Decisions are the highest-value field. When merging topics, combine their decisions into one bulleted list with the most important trade-offs:
  - Deduplicate overlapping points; prefer the richer phrasing; never paraphrase away specifics like "chose X over Y because Z".
  - When source topics document an EVOLUTION of approach (e.g. an earlier commit used A, a later commit switched to B), preserve it as ONE bullet that captures both the final choice and the path: "**B over A**: tried A first, hit constraint X, switched to B which avoids X while preserving Y." This is more informative than either source's bullet alone, and avoids the failure mode of either dropping the earlier rationale or emitting two contradictory bullets.
  - Maximum 5 bullets per topic (note: this is intentionally higher than the 3-bullet cap in the summarize prompt -- squash aggregates decisions from multiple commits). Pick the 5 with highest impact and drop the rest -- lower-impact decisions you don't pick simply don't appear, that's the intended trade-off. Use 2-4 sentences per bullet to actually explain the trade-off (depth over breadth). When there is exactly one decision, write it as plain prose -- no bullet, no bold label. One decision is fine; one bullet is a formatting error.

7. Todo handling on merge:
   - If a source topic's todo was addressed by a later commit in this squash (under rule 4's evidence standard), DROP that todo.
   - If a source topic's todo is still relevant to the final state, carry it forward.
   - Merge multiple surviving todos into a single todo field as a bulleted list.

8. filesAffected handling on merge: union the file lists of the merged topics, then trim to the 2-6 most important files as defined by the summarize rule. Exclude test files, lockfiles, generated files, and config snapshots. If the merged topic touches only 1 non-test file, list just that file.

9. category and importance: when merging, pick the highest-importance ("major" beats "minor") and the category that best reflects the consolidated work (prefer the later commit's category on ties).

10. The narrative fields (title, trigger, decisions) are read by everyone -- write them for a colleague who uses the product but has never read this codebase. Use plain language: no file paths, no function/class/variable names, no code snippets, no CLI flags, and no implementation-level terms that only make sense if you have seen the code. The test: a product manager or designer should understand every sentence in these fields without needing an explanation. The detail fields (response, todo, filesAffected) MAY use technical identifiers.

11. Topic count is determined by what survives consolidation, NOT by an arbitrary range. The upper bound is the union of distinct source topics after rules 2-4 merge duplicates and drop superseded work. Every independent topic from sources MUST be carried forward (per rule 5) -- do not drop independent topics just to keep the count small. There is no artificial cap; squashes spanning diverse work may produce 10+ topics if sources warrant it. The only floor is rule 15: if every source topic is trivial, zero topics is correct.

12. Use the source chronology authoritatively. Commit 1 is the oldest, Commit N is the newest. When evaluating overlap (rules 2 / 3 / 4):
  - When a topic from an earlier commit is contradicted, replaced, or refined by a later commit (under rule 4's evidence standard), the LATER version represents the final state -- describe that.
  - When an early-commit topic has no peer in later commits, it has not been touched again; carry it forward unchanged.
  - Treat each source topic's apparent age as a hint, not a reason to drop it. "Old" alone is not evidence of being outdated -- only explicit supersede signals from later sources are.

13. Do NOT invent new information. The source topics and recaps contain all that is known -- your job is reorganization, deduplication, and narration, not analysis.

14. ticketId: extract from the squash commit message or any source topic's context. If multiple tickets appear, prefer the one on the squash commit message. Output canonical uppercase form. The value MUST be a real ticket key of the form \`ABC-123\` (or "#789"); a plan slug, file path, commit SHA, or bare date is NOT a ticket. Omit the field entirely if no ticket is referenced; never emit a placeholder.

15. Return ONLY the delimited text starting with the \`===SUMMARY===\` sentinel. No JSON, no markdown fences, no prose before or after. If every source topic is trivial and none have substantive decisions (e.g. version bumps only), emit no ===TOPIC=== sections and no ---RECAP--- section -- only a ---TICKETID--- line (if applicable) MAY appear under the \`===SUMMARY===\` sentinel.

16. Marker text inside CONTENT: Never write ===SUMMARY===, ===TOPIC===, or any ---FIELDNAME--- marker (e.g., ---TITLE---, ---RECAP---, ---DECISIONS---, ---TICKETID---) inside the content of a field. If you need to reference these markers in prose, describe them in words (e.g., "the topic delimiter", "the title field"). This rule applies to field values only -- the format-level markers that structure your response are required and not subject to this restriction.

17. Trigger field on merged topics: When merging multiple source topics into one (per rule 2), the merged topic's TRIGGER should reflect the EARLIEST source's trigger -- the original problem that prompted the work, not the iteration context. The follow-up commits' trigger contexts (which typically describe "extending" or "fixing edge case in" the earlier work) are downstream effects; their rationale belongs in DECISIONS per rule 6's evolution sub-rule, not in the trigger field. Goal: a reader sees "what user need started this" in TRIGGER, "what's there now" in RESPONSE, and "what trade-offs along the way" in DECISIONS.

18. Topic ordering: emit topics in two-key sort order:
    - Primary key: importance descending. "major" topics appear before "minor" topics.
    - Secondary key: source chronology newest-first. Among topics of equal importance, the topic from the most recent source commit appears first; topics merged from multiple sources use the latest contributing commit's date as their position.
    This matches the summarize prompt's "git log style" ordering applied to consolidated work, so a reviewer scanning top-down sees the most impactful and most recent work first.

## Begin response now

Output ONLY the delimited text starting with the \`===SUMMARY===\` sentinel. Do NOT preface it with markdown headers, markdown tables, code fences, or prose. If every source topic is trivial and there is nothing substantive to emit (per rule 15), output \`===SUMMARY===\` alone on its own line and stop.`,UE="IMPORTANT -- YOUR PREVIOUS RESPONSE FAILED FORMAT VALIDATION\n\nYour previous response did not start with the required `===SUMMARY===` sentinel followed by the `===TOPIC===` / `---FIELDNAME---` delimited plain-text format. It used markdown headers (e.g. `##`, `###`), tables, or prose instead. The parser could not extract any topics from it.\n\nThis is your previous (rejected) response, between the markers below. The markers themselves are bookkeeping for this retry message and are NOT part of the format you should emit:\n\nPREVIOUS_RESPONSE_BEGIN\n{{previousResponse}}\nPREVIOUS_RESPONSE_END\n\nNow produce the SAME summary AGAIN, this time using the required output format strictly:\n  - The first non-blank line of your response MUST be `===SUMMARY===`.\n  - Do NOT use markdown headers (`#`, `##`, `###`, `####`), markdown tables, code fences (```), or prose introductions.\n  - Block order is fixed: `---TICKETID---` (optional) -> `===TOPIC===` blocks -> `---RECAP---` (optional, AFTER all topics). Recap is the final block, never before topics.\n  - The recap, when emitted, MUST cover only `importance: major` topics; minor topics are omitted from the recap entirely.\n  - If your previous response contained useful content, carry it forward into the correct format -- do NOT discard the work, just re-format it under `===SUMMARY===`.\n  - The transcript or source-commit content shown below may itself be styled in markdown; that is INPUT DATA, not your output template.\n\nThe original task instructions follow. Re-read them and produce your response in the correct delimited format.\n\n---\n\n",JW=UE+NI,GW=UE+OI;w();Jl();var XW=f("Summarizer");Bo();var AJ=f("LlmClient");var CJ=900*1e3;function HE(e){return e.aiProvider==="local-agent"?"local-agent":e.aiProvider==="jolli"?e.jolliApiKey?"jolli-proxy":null:e.aiProvider==="anthropic"?e.apiKey?"anthropic-config":process.env.ANTHROPIC_API_KEY?"anthropic-env":null:e.apiKey?"anthropic-config":process.env.ANTHROPIC_API_KEY?"anthropic-env":e.jolliApiKey?"jolli-proxy":null}Ge();function LI(e){switch(HE(e)){case"local-agent":return"local-agent";case"jolli-proxy":return"jolli";case"anthropic-config":case"anthropic-env":return"anthropic";default:return"none"}}async function MI(e){let[t,n]=await Promise.all([Promise.resolve().then(()=>(ad(),Mw)),Promise.resolve().then(()=>(Xe(),Ph))]),[r,o]=await Promise.all([t.isGitPipelineFullyInstalled(e),n.getSummaryCount(e)]);return{enabled:r,summaryCount:o}}async function $I(e){let t=LI(e.config),n=t!=="none";if(!await Rn(e.cwd))return{inGitRepo:!1,repoEnabled:!1,captureConfigured:n,captureMethod:t,memoriesGenerated:!1,memoriesBucket:"0"};let o=e.status??await MI(e.cwd),s=o.summaryCount??0;return{inGitRepo:!0,repoEnabled:!!o.enabled,captureConfigured:n,captureMethod:t,memoriesGenerated:s>0,memoriesBucket:Tf(s)}}var FI="onboarding-progress.json",jI=1440*60*1e3;function UI(e){return[e.inGitRepo,e.repoEnabled,e.captureMethod,e.memoriesGenerated,e.memoriesBucket].join("|")}async function HI(e){try{let t=JSON.parse(await(0,Wi.readFile)(e,"utf-8"));if(typeof t?.sig=="string"&&typeof t?.tsIso=="string")return t}catch{}}var Bi=new Map;async function WE(e){let t,n;try{if(!bf()?.enabled||W()||_a(e.cwd))return;t=(0,BE.join)(U(e.cwd),FI);let r=t;n=(Bi.get(r)??Promise.resolve()).then(()=>BI(e,r)),Bi.set(r,n),await n}catch{}finally{t&&n&&Bi.get(t)===n&&Bi.delete(t)}}async function BI(e,t){try{let n=await $I(e),r=UI(n),o=await HI(t),s=Date.now(),i=!o||o.sig!==r,a=o?s-Date.parse(o.tsIso):Number.POSITIVE_INFINITY,l=!Number.isFinite(a)||a>=jI;if(!i&&!l)return;Wr("onboarding_progressed",{in_git_repo:n.inGitRepo,repo_enabled:n.repoEnabled,capture_configured:n.captureConfigured,capture_method:n.captureMethod,memories_generated:n.memoriesGenerated,memories_bucket:n.memoriesBucket});let c=U(e.cwd);await(0,Wi.mkdir)(c,{recursive:!0}),await N(t,JSON.stringify({sig:r,tsIso:new Date(s).toISOString()}))}catch{}}le();le();var WI="https://auth.jolli.ai";function Cd(){let e=(process.env.JOLLI_URL?.trim()||WI).replace(/\/+$/,"");return Di(e),e}le();jn();var JI="/api/telemetry/events",GI=1e4,qI=100;async function JE(e){let t=e.fetchImpl??fetch,n=e.timeoutMs??GI,r=Math.max(1,e.maxBatch??qI),o=e.origin,s;if(e.jolliApiKey){let h=ir(e.jolliApiKey);h&&(o=h.u,s=e.jolliApiKey)}let i=await _l(e.cwd);if(i.length===0)return{sent:0,remaining:0};if(!o)return{sent:0,remaining:i.length};try{Di(o)}catch{return{sent:0,remaining:i.length}}let a;try{a=new URL(JI,o).toString()}catch{return{sent:0,remaining:i.length}}let l=new Map;for(let h of i){let g=l.get(h.installId);g?g.push(h):l.set(h.installId,[h])}let c=e.deadlineMs===void 0?void 0:performance.now()+e.deadlineMs,u=!1,d=[];for(let h of l.values()){if(u)break;for(let g=0;g<h.length;g+=r){let S=h.slice(g,g+r),E=n;if(c!==void 0){let _=c-performance.now();if(_<=0){u=!0;break}E=Math.min(n,_)}if(!await VI(a,S,s,t,E))break;d.push(...S)}}if(d.length===0)return{sent:0,remaining:i.length};let p=await _l(e.cwd),m=KI(p,d);return await hf(e.cwd,m),{sent:d.length,remaining:m.length}}function KI(e,t){let n=new Map;for(let o of t){let s=JSON.stringify(o);n.set(s,(n.get(s)??0)+1)}let r=[];for(let o of e){let s=JSON.stringify(o),i=n.get(s)??0;i>0?n.set(s,i-1):r.push(o)}return r}async function VI(e,t,n,r,o){let s={"Content-Type":"application/json","x-jolli-client":Ke};n&&(s.Authorization=`Bearer ${n}`);let i=new AbortController,a=setTimeout(()=>i.abort(),o);try{return(await r(e,{method:"POST",headers:s,body:JSON.stringify({events:t}),signal:i.signal})).ok}catch{return!1}finally{clearTimeout(a)}}function GE(e,t){if(e.jolliApiKey){let n=ir(e.jolliApiKey);if(n)return n.u}if(e.jolliUrl)return e.jolliUrl;try{return t()}catch{return}}async function qE(e){let t=e.deps?.loadConfig??ae,n=e.deps?.getOrCreateInstallId??jp,r=e.deps?.getJolliUrl??Cd;try{let o=await t(),{installId:s,created:i}=await n(),a=GE(o,r);Sf({cwd:e.cwd,installId:s,sessionId:e.sessionId,agent:e.agent??(e.inferAgentFromEnv?uf(e.env):void 0),origin:a,config:o,platformDisabled:e.platformDisabled,env:e.env}),i&&Wr("app_installed")}catch{}}var xd=2e3;async function KE(e,t){let n=t?.loadConfig??ae,r=t?.getJolliUrl??Cd;try{let o=await n();if(!yf({config:o,env:t?.env,platformDisabled:t?.platformDisabled})){await gf(e);return}let s=GE(o,r);await JE({cwd:e,origin:s,jolliApiKey:o.jolliApiKey,fetchImpl:t?.fetchImpl,timeoutMs:t?.timeoutMs,deadlineMs:t?.deadlineMs})}catch{}}function Ji(e,t,n){return{done:(async()=>{try{let o=await ae(),s=async()=>o;await qE({cwd:e,sessionId:t,agent:n,inferAgentFromEnv:!0,deps:{loadConfig:s}}),await WE({cwd:e,config:o}),await KE(e,{loadConfig:s,timeoutMs:xd,deadlineMs:xd})}catch{}})()}}var de=require("node:fs"),Ue=require("node:path"),dS=require("node:url");jn();wr();ye();function VE(e){return e.aiProvider==="local-agent"?!0:e.aiProvider==="jolli"?!!e.jolliApiKey:e.aiProvider==="anthropic"?!!(e.apiKey||process.env.ANTHROPIC_API_KEY):!!(e.apiKey||process.env.ANTHROPIC_API_KEY||e.jolliApiKey)}Ge();le();Vs();Hl();Zr();Xe();Lt();w();Se();Os();function YI(e){return[`1) Re-authenticate ${Qr(e)}:  ${ih(e)}`,"2) Or switch the provider:   jolli configure --set aiProvider=anthropic --set apiKey=sk-ant-\u2026","                             (or --set aiProvider=jolli to use Jolli)"]}function XI(e,t){let n=ah(e);return n===null?[]:[`${t}${n}`]}function YE(e){return[`[Jolli Memory] Memory generation failed for a recent commit: ${Qr(e)} authentication expired or is unavailable.`,...XI(e,""),"\u2192 Fix with either:",...YI(e).map(t=>`    ${t}`),"This message clears automatically once memory generation succeeds again."].join(`
`)}var je=f("SessionStartHook"),fP=new Set(["main","master","develop","development","staging","production"]),Ki=500,hP=250;function gP(e=Ki+hP){let t=setTimeout(()=>process.exit(0),e);return t.unref(),t}var uS="login-reminder-dismissed";function yP(e){let t=fl(e,"init");return t===void 0?null:["[Jolli Memory] Memory generation is not configured for this repository.",`\u2192 ${`Run ${t} to finish setup.`}`,`(To stop this reminder, create an empty file at .jolli/jollimemory/${uS}.)`].join(`
`)}function wP(e,t,n){return t||n?null:yP(e)}async function pS(e,t){let n=bs(e);if(n===void 0||t.aiProvider!==void 0)return!1;try{let r=await is(o=>o.aiProvider===void 0?{update:{aiProvider:"local-agent",...o.localAgentTool===void 0?{localAgentTool:n}:{}},result:o.localAgentTool??n}:{update:null,result:void 0});return r===void 0?(je.info("Skipped seeding the %s default \u2014 another writer set aiProvider first",e),!1):(je.info("Seeded default aiProvider=local-agent tool=%s for the %s surface",r,e),!0)}catch(r){return je.info("Failed to seed default local-agent provider: %s",r.message),!1}}async function EP(e,t=wl()){let n=await ae(),r=VE(n),o=(0,Ue.join)(e,".jolli","jollimemory",uS),s=(0,de.existsSync)(o);if(r&&s)try{(0,de.rmSync)(o)}catch{}return wP(t,r,s)}async function mS(e,t){return(await rg(t)).readFile(`summaries/${e}.json`)}async function SP(e,t){try{let n=await mS(e,t);return n?nh(JSON.parse(n)):!1}catch(n){return je.info("Failed to check auth-failure state for %s: %s",e.substring(0,8),n.message),!1}}async function bP(e,t=wl()){let n=bs(t);if(n===void 0)return null;let r=gS(e);if(!r)return null;let o=await io(e);if(!o)return null;let s=o.entries.filter(l=>l.branch===r&&(l.parentCommitHash===null||l.parentCommitHash===void 0));if(s.length===0)return null;let i=[...s].sort((l,c)=>new Date(H(c)).getTime()-new Date(H(l)).getTime())[0];if(!await SP(i.commitHash,e))return null;let a=await ae();return YE(a.localAgentTool??n)}async function TP(){if(En()){je.info("SessionStart hook skipped \u2014 running inside a jollimemory-spawned local agent");return}try{let e=await Oi(),{cwd:t}=JSON.parse(e),n=gu(t??process.cwd());if(Wo(n),je.info("SessionStartHook invoked (cwd=%s)",n),await It(n)){je.info("SessionStart hook skipped \u2014 repository manually disabled");return}let r=await Kd(n,"shared",{includeBriefing:!0,includePluginReminders:!1});r?process.stdout.write(r):je.info("No briefing or reminder generated (skipped or timed out)");let{triggerEnsureGlobalDaemon:o}=await Promise.resolve().then(()=>(Gd(),Jd));o()}catch(e){je.info("SessionStartHook failed: %s",e.message)}}async function Kd(e,t,n={}){let r=n.includeBriefing!==!1,o=n.includePluginReminders!==!1,[s,i,a]=await Promise.all([r?Promise.race([_P(e,t),qd(Ki)]):Promise.resolve(null),o?Promise.race([bP(e,t),qd(Ki)]):Promise.resolve(null),o?Promise.race([EP(e,t),qd(Ki)]):Promise.resolve(null)]),l=[i,a,s].filter(c=>!!c);return l.length===0?null:(je.info("SessionStart output (%d sections)",l.length),l.join(`

`))}async function _P(e,t){let n=Vi(e),r=gS(e,n);if(!r||fP.has(r))return null;let o=IP(e,r,t,n);if(o)return o;let s=await io(e);if(!s)return null;let i=s.entries.filter(g=>g.branch===r&&(g.parentCommitHash===null||g.parentCommitHash===void 0));if(i.length===0)return null;let a=[...i].sort((g,S)=>new Date(H(S)).getTime()-new Date(H(g)).getTime()),l=a[0],c=a[a.length-1];if(a.length===1&&NP(H(l)))return null;let u=await RP(l.commitHash,e),d=kP(e,r),p=vP(a),m=AP(r,a,l,c,u,d,p,t),h=hS(e,n);return PP(e,r,h??l.commitHash,m,t),m}async function RP(e,t){try{let n=await mS(e,t);if(!n)return{lastTopicTitle:null,keyDecisions:[]};let r=JSON.parse(n),o=Jn(r),s=o.length>0?o[o.length-1].title:null,i=[];for(let a of o)a.decisions&&a.decisions.trim().length>0&&i.push(a.decisions);return{lastTopicTitle:s,keyDecisions:i}}catch(n){return je.info("Failed to load last summary: %s",n.message),{lastTopicTitle:null,keyDecisions:[]}}}function kP(e,t){try{let n=(0,Ue.join)(e,".jolli","jollimemory","plans.json");if(!(0,de.existsSync)(n))return[];let r=JSON.parse((0,de.readFileSync)(n,"utf-8")),o=Up(r).registry,s=[];for(let i of Object.values(o.plans))!i.commitHash&&i.title&&s.push(i.title);return s}catch{return[]}}function vP(e){let t=0,n=0,r=0,o=!1;for(let s of e)s.diffStats&&(t+=s.diffStats.filesChanged,n+=s.diffStats.insertions,r+=s.diffStats.deletions,o=!0);return o?{filesChanged:t,insertions:n,deletions:r}:null}function AP(e,t,n,r,o,s,i,a){let l=t.length,c=cS(H(r)),u=cS(H(n)),d=OP(H(n),new Date().toISOString()),p=[];p.push(`[Jolli Memory \u2014 ${e}]`);let m=`${l} commits (${c} ~ ${u})`;i&&(m+=` | ${i.filesChanged} files, +${i.insertions} -${i.deletions}`),p.push(m);let h=o.lastTopicTitle??n.commitMessage;if(p.push(`Last: ${h} (${u})`),o.keyDecisions.length>0){let S=xP(o.keyDecisions);p.push(`Decisions: ${S}`)}s.length>0&&p.push(`Plans: ${s.join("; ")}`);let g=CP(d,a);return g&&p.push(g),p.join(`
`)}function CP(e,t){if(e<=0)return null;let n=fl(t,"recall")??"`jolli recall`";return e>3?`Warning: ${e} days since last commit. Run ${n} for full context.`:`Tip: run ${n} for full context`}function xP(e){let n=[],r=0;for(let o of e){let s=o.replace(/[.;]\s*$/,"").trim();if(s.length>200&&(s=`${s.slice(0,199)}\u2026`),r+s.length>200&&n.length>0)break;n.push(s),r+=s.length+2}return n.join("; ")}function fS(e){return(0,Ue.join)(e,".jolli","jollimemory","briefing-cache.json")}function IP(e,t,n,r=Vi(e)){let o=fS(e);if(!(0,de.existsSync)(o))return null;try{let s=JSON.parse((0,de.readFileSync)(o,"utf-8"));if(s.branch!==t||s.clientKind!==n)return null;let i=hS(e,r);return!i||s.lastCommitHash!==i?null:s.briefingText}catch{return null}}function PP(e,t,n,r,o){let s=fS(e),i={branch:t,lastCommitHash:n,briefingText:r,clientKind:o,generatedAt:new Date().toISOString()};try{let a=(0,Ue.dirname)(s);(0,de.existsSync)(a)||(0,de.mkdirSync)(a,{recursive:!0});let l=`${s}.${process.pid}.tmp`;(0,de.writeFileSync)(l,JSON.stringify(i,null,"	"),"utf-8"),(0,de.renameSync)(l,s)}catch{}}function Vi(e){return Ct(e)}function hS(e,t=Vi(e)){let n=t?pu(t):null;if(n)return n;try{return ge("git",["rev-parse","HEAD"],{encoding:"utf-8",cwd:e}).trim()||null}catch{return null}}function gS(e,t=Vi(e)){let n=t?uu(t):null;if(n)return n;if(t)return null;try{return ge("git",["branch","--show-current"],{encoding:"utf-8",cwd:e}).trim()||null}catch{return null}}function qd(e){return new Promise(t=>{setTimeout(()=>t(null),e).unref()})}function NP(e){let t=new Date(e),n=new Date;return t.getFullYear()===n.getFullYear()&&t.getMonth()===n.getMonth()&&t.getDate()===n.getDate()}function OP(e,t){let n=new Date(e).getTime(),r=new Date(t).getTime();return Math.floor(Math.abs(r-n)/(1e3*60*60*24))}function cS(e){return e?e.split("T")[0]:"unknown"}function DP(){let e=process.argv[1];if(process.env.VITEST||!e||(0,Ue.resolve)(e)!==(0,Ue.resolve)((0,dS.fileURLToPath)(__jmImportMetaUrl)))return!1;let t=(0,Ue.basename)(e).toLowerCase();return t==="sessionstarthook.js"||t==="sessionstarthook.ts"}DP()&&(gP(),TP());var $o=f("CodexPluginBootstrapHook"),Vd="codex-plugin",yS={timeoutMs:200,pollMs:25};function ES(e){return e?{hookSpecificOutput:{hookEventName:"SessionStart",additionalContext:e}}:null}async function SS(e){if(!await Rn(e))return null;let t=await J(["rev-parse","--show-toplevel"],e);if(t.exitCode!==0||!t.stdout.trim())return null;let n=t.stdout.trim();Wo(n);let r=!1;if(!(await ma(n,async()=>{r=await It(n),r&&await wE(n,{preserveMenu:!0,repoLockHeld:!0})},yS)).acquired)return $o.info("Codex plugin bootstrap deferred \u2014 repo hook lifecycle lock is busy"),null;if(r)return null;let s=await yE(n,{repoHooksOnly:!0,sourceTag:Vd,respectManualDisable:!0,automatic:!0});if(!s.success)return $o.warn("Codex plugin repo-hook reconciliation failed: %s",s.message),await Ji(n,void 0,"codex").done,null;let i,a=null,l=!1;try{l=!(await ma(n,async()=>{if(await It(n))return;let u=await ae();u.codexEnabled!==!1&&(await pS(Vd,u),i=Ji(n,void 0,"codex"),a=await Kd(n,Vd,{includeBriefing:!0,includePluginReminders:!0}))},yS)).acquired}finally{i??=Ji(n,void 0,"codex"),await i.done}return l&&$o.info("Codex plugin context deferred \u2014 repo hook lifecycle lock is busy"),ES(a)}async function bS(){if(En()){$o.info("Codex plugin bootstrap skipped \u2014 running inside a jollimemory-spawned local agent");return}try{let e=await Oi(),t=e.trim()?JSON.parse(e):{},n=await SS(t.cwd??process.cwd());n&&process.stdout.write(JSON.stringify(n));let{triggerEnsureGlobalDaemon:r}=await Promise.resolve().then(()=>(Gd(),Jd));r()}catch(e){$o.info("Codex plugin bootstrap failed: %s",e.message)}}function LP(){let e=process.argv[1];if(process.env.VITEST||!e||(0,Fo.resolve)(e)!==(0,Fo.resolve)((0,wS.fileURLToPath)(__jmImportMetaUrl)))return!1;let t=(0,Fo.basename)(e).toLowerCase();return t==="codexpluginbootstraphook.js"||t==="codexpluginbootstraphook.ts"}LP()&&bS();0&&(module.exports={buildCodexBootstrapOutput,main,runCodexPluginBootstrap});
