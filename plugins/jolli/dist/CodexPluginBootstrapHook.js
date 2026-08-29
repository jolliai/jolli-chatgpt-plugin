#!/usr/bin/env node
const __jmImportMetaUrl = require("node:url").pathToFileURL(__filename).href;
"use strict";var oT=Object.create;var Qo=Object.defineProperty;var sT=Object.getOwnPropertyDescriptor;var iT=Object.getOwnPropertyNames;var aT=Object.getPrototypeOf,lT=Object.prototype.hasOwnProperty;var y=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(r){throw n=[r],r}};var A=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}},Tr=(e,t)=>{for(var n in t)Qo(e,n,{get:t[n],enumerable:!0})},Iu=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of iT(t))!lT.call(e,o)&&o!==n&&Qo(e,o,{get:()=>t[o],enumerable:!(r=sT(t,o))||r.enumerable});return e};var _r=(e,t,n)=>(n=e!=null?oT(aT(e)):{},Iu(t||!e||!e.__esModule?Qo(n,"default",{value:e,enumerable:!0}):n,e)),cT=e=>Iu(Qo({},"__esModule",{value:!0}),e);function ba(){return dT.getStore()?.traceId}var Du,nD,dT,es=y(()=>{"use strict";Du=require("node:async_hooks"),nD="0".repeat(32),dT=new Du.AsyncLocalStorage});function R(e){return e instanceof Error?e.message:String(e)}function Qt(e){return e instanceof Error&&e.code==="ENOENT"}function ts(e){$u=e}function V(){return Fu}function yT(e,t){let n=gT[t]??fT;return Lu[e]>=Lu[n]}function wT(e,t,n,r,o){let s=new Date().toISOString(),i=e.toUpperCase().padEnd(5),a=n,l=0;a=a.replace(/%[sdj]/g,d=>{if(l>=r.length)return d;let u=r[l++];return d==="%d"?String(Number(u)):d==="%j"?JSON.stringify(u):String(u)});let c=o?` [trace=${o}]`:"";return`[${s}] ${i} [${t}]${c} ${a}`}function G(e){let t=e??$u??process.cwd();return(0,Nn.join)(t,uT,pT)}function kr(e){return String(e).padStart(2,"0")}async function TT(e,t){let n=new Date,r=`${n.getUTCFullYear()}-${kr(n.getUTCMonth()+1)}-${kr(n.getUTCDate())}_${kr(n.getUTCHours())}-${kr(n.getUTCMinutes())}-${kr(n.getUTCSeconds())}`;try{let o=(0,Nn.join)(e,`debug_${r}.log`);for(let s=1;await _T(o);s++)o=(0,Nn.join)(e,`debug_${r}_${s}.log`);await(0,Ie.rename)(t,o)}catch{return}try{let o=(await(0,Ie.readdir)(e)).filter(s=>bT.test(s)).sort();for(let s=0;s<o.length-ST;s++)await(0,Ie.unlink)((0,Nn.join)(e,o[s])).catch(()=>{})}catch{}}async function _T(e){try{return await(0,Ie.stat)(e),!0}catch{return!1}}function kT(e){process.env.VITEST||process.env.JOLLI_DISABLE_LOG_FILE||Fu||(Mu=Mu.then(async()=>{try{let t=G(),n=(0,Nn.join)(t,mT);await(0,Ie.stat)(t);try{(await(0,Ie.stat)(n)).size>ET&&await TT(t,n)}catch{}await(0,Ie.appendFile)(n,`${e}
`,"utf-8")}catch{}}))}function f(e){function t(n,r,o){let s=wT(n,e,r,o,ba());hT&&(n==="info"||n==="debug")||(n==="warn"?console.warn(s):console.error(s)),yT(n,e)&&kT(s)}return{debug(n,...r){t("debug",n,r)},info(n,...r){t("info",n,r)},warn(n,...r){t("warn",n,r)},error(n,...r){t("error",n,r)}}}var Ie,Nn,uT,pT,mT,je,$u,Fu,Lu,fT,gT,hT,Mu,ET,ST,bT,w=y(()=>{"use strict";Ie=require("node:fs/promises"),Nn=require("node:path");es();uT=".jolli",pT="jollimemory",mT="debug.log";je="jollimemory/summaries/v3";Fu=!1;Lu={debug:0,info:1,warn:2,error:3},fT="info",gT={},hT=!0;Mu=Promise.resolve(),ET=2*1024*1024,ST=10,bT=/^debug_.*\.log$/});function Pn(e,t,n){return(0,ju.promisify)(pt.execFile)(e,t,{...Rr,...n??{}})}function Ee(e,t,n){return(0,pt.execFileSync)(e,t,{...Rr,...n??{}})}function Hu(e,t,n){return(0,pt.spawnSync)(e,t,{...Rr,...n??{}})}var pt,ju,Rr,mt,ke=y(()=>{"use strict";pt=require("node:child_process"),ju=require("node:util"),Rr={windowsHide:!0};mt=((e,t,n)=>Array.isArray(t)?(0,pt.spawn)(e,t,{...Rr,...n??{}}):(0,pt.spawn)(e,{...Rr,...t??{}}))});function Ot(e){return vr(e,process.platform)}function vr(e,t){let n=On(e.replace(/\\/g,"/"));return t==="win32"||t==="darwin"?n.toLowerCase():n}function On(e){let t=e.length;for(;t>0&&e[t-1]==="/";)t--;return t===e.length?e:e.slice(0,t)}function Ta(e,t){let n=Ot(e),r=Ot(t);return n===r||n.startsWith(`${r}/`)}function He(e){return e.replace(/\\/g,"/")}var ae=y(()=>{"use strict"});function AT(e){return vT.some(t=>(e[t]??"")!=="")}function Zt(e){try{return(0,Dn.readFileSync)(e,"utf-8")}catch{return null}}function _a(e){try{return(0,Dn.realpathSync)(e)}catch{return(0,X.resolve)(e)}}function ns(e){try{return(0,Dn.statSync)(e).isDirectory()}catch{return!1}}function Uu(e,t){let n=Zt((0,X.join)(e,"HEAD"))?.trim();return!n||!(rs.test(n)||xT.test(n))?!1:ns((0,X.join)(t,"objects"))&&ns((0,X.join)(t,"refs"))}function CT(e,t,n){let r=/^gitdir:\s*(.+)$/m.exec(t);if(!r)return null;let o=r[1].trim();if(!o)return null;let s=(0,X.isAbsolute)(o)?o:(0,X.resolve)(e,o);return ns(s)?n?_a(s):s:null}function Bu(e,t){let n=Zt((0,X.join)(e,"commondir"))?.trim();if(!n)return e;let r=(0,X.isAbsolute)(n)?n:(0,X.resolve)(e,n);return t?_a(r):r}function Dt(e,t={}){let{env:n=process.env,realpath:r=!1}=t;if(AT(n))return null;let o=r?_a(e):(0,X.resolve)(e);for(;;){let s=(0,X.join)(o,".git");if(ns(s)){let l=Bu(s,r);return Uu(s,l)?{worktreeRoot:o,gitDir:s,commonDir:l}:null}let i=Zt(s);if(i!==null){let l=CT(o,i,r);if(l===null)return null;let c=Bu(l,r);return Uu(l,c)?{worktreeRoot:o,gitDir:l,commonDir:c}:null}let a=(0,X.dirname)(o);if(a===o)return null;o=a}}function Wu(e){let t=Zt((0,X.join)(e.gitDir,"HEAD"))?.trim();if(!t)return null;let n=/^ref:\s*refs\/heads\/(.+)$/.exec(t);return n&&n[1].trim()||null}function NT(e){return IT.test(e)&&!e.split("/").includes("..")}function PT(e,t){let n=Zt((0,X.join)(e,"packed-refs"));if(n===null)return null;for(let r of n.split(`
`)){if(!r||r.startsWith("#")||r.startsWith("^"))continue;let o=r.indexOf(" ");if(!(o<=0)&&r.slice(o+1).trim()===t){let s=r.slice(0,o).trim();return rs.test(s)?s:null}}return null}function Ju(e){let t=Zt((0,X.join)(e.gitDir,"HEAD"))?.trim();if(!t)return null;if(rs.test(t))return t;let n=/^ref:\s*(.+)$/.exec(t);if(!n)return null;let r=n[1].trim();if(!NT(r))return null;for(let o of e.gitDir===e.commonDir?[e.gitDir]:[e.gitDir,e.commonDir]){let s=Zt((0,X.join)(o,r))?.trim();if(s&&rs.test(s))return s;let i=PT(o,r);if(i)return i}return null}var Dn,X,vT,rs,xT,IT,Ar=y(()=>{"use strict";Dn=require("node:fs"),X=require("node:path");ae();vT=["GIT_DIR","GIT_WORK_TREE","GIT_COMMON_DIR"];rs=/^[0-9a-f]{40}$|^[0-9a-f]{64}$/,xT=/^ref:\s*refs\//;IT=/^refs\/[A-Za-z0-9._\-/]+$/});function MT(){let e={...process.env,LC_ALL:"C"};for(let t of LT)delete e[t];return e}function Vu(e){return $T(e)??e}function $T(e){let t=ka.get(e);if(t!==void 0)return t;let n=Dt(e,{realpath:!0})?.worktreeRoot;if(n){let o=He(n);return ka.set(e,o),o}let r=null;try{let o=Ee("git",["rev-parse","--show-toplevel"],{cwd:e,encoding:"utf-8",env:MT(),stdio:["ignore","pipe","pipe"]}).trim();o&&(r=o)}catch{}return ka.set(e,r),r}async function Y(e,t){re.debug("git %s%s",t?`[cwd=${t}] `:"",e.join(" "));try{let{stdout:n,stderr:r}=await Pn("git",e,{maxBuffer:OT,env:{...process.env,LC_ALL:"C"},...t!==void 0&&{cwd:t}});return{stdout:n.trimEnd(),stderr:r.trim(),exitCode:0}}catch(n){let r=n,o=typeof r.code=="number"?r.code:r.code==="ENOENT"?127:1,s={stdout:(r.stdout??"").trimEnd(),stderr:(r.stderr??r.message??"").trim(),exitCode:o};return re.debug("git command failed (exit: %d, stderr: %s)",o,s.stderr.substring(0,200)),s}}function FT(e){let t=e.split(`
`).filter(s=>s.trim().length>0).pop()??"",n=t.match(/(\d+)\s+files?\s+changed/),r=t.match(/(\d+)\s+insertions?/),o=t.match(/(\d+)\s+deletions?/);return{filesChanged:n?Number.parseInt(n[1],10):0,insertions:r?Number.parseInt(r[1],10):0,deletions:o?Number.parseInt(o[1],10):0}}async function ss(e,t,n){let r=await Y(["diff","--stat",`${e}..${t}`],n);return FT(r.stdout)}async function Ra(e,t){return(await Y(["rev-parse","--verify",`refs/heads/${e}`],t)).exitCode===0}async function va(e,t){if(await Ra(e,t))return;re.info("Creating orphan branch '%s' using plumbing commands",e);let n=JSON.stringify({version:1,entries:[]},null,"	"),r=await BT(n,t);re.debug("Created blob: %s",r);let o=`100644 blob ${r}	index.json
`,s=await GT(o,t);re.debug("Created tree: %s",s);let i=await Y(["commit-tree",s,"-m","Initialize Jolli Memory summaries"],t);if(i.exitCode!==0)throw new Error(`Failed to create commit: ${i.stderr}`);let a=i.stdout.trim();re.debug("Created commit: %s",a);let l=await Y(["update-ref",`refs/heads/${e}`,a],t);if(l.exitCode!==0)throw new Error(`Failed to update ref: ${l.stderr}`);re.info("Orphan branch '%s' created successfully",e)}function HT(e){let t=e.toLowerCase();return jT.some(n=>t.includes(n))}async function Aa(e,t,n){re.debug("Reading file from branch: %s:%s",e,t);let r=await Y(["show",`${e}:${t}`],n);return r.exitCode!==0?(HT(r.stderr)?re.debug("File not found: %s:%s",e,t):re.warn("Read failed for %s:%s (git exit %d): %s",e,t,r.exitCode,r.stderr||"(no stderr)"),null):r.stdout}async function xa(e,t,n){let r=new Map;if(t.length===0)return r;let o=["cat-file","--batch"];return re.debug("git (cat-file --batch stream) %s%s for %d paths",n?`[cwd=${n}] `:"",o.join(" "),t.length),new Promise((s,i)=>{let a=mt("git",o,{stdio:["pipe","pipe","pipe"],...n!==void 0&&{cwd:n}}),l="",c=Buffer.alloc(0),d=!0,u=0,p=[],m=!1,g=0,h=!1,E=S=>{h||(h=!0,S?i(S):s(r))};a.stderr.on("data",S=>{l+=S.toString()}),a.stdout.on("data",S=>{for(c=Buffer.concat([c,S]);!h;){if(d){let k=c.indexOf(10);if(k<0)return;let b=c.subarray(0,k).toString("utf8");if(c=c.subarray(k+1),g>=t.length){E(new Error(`git cat-file --batch returned extra response: ${b}`));return}let x=t[g];if(g++,b.endsWith(" missing")){r.set(x,null);continue}let P=b.substring(b.lastIndexOf(" ")+1),$=Number.parseInt(P,10);if(!Number.isFinite($)||$<0){E(new Error(`Unexpected cat-file --batch header for ${x}: ${b}`));return}u=$,p=[],d=!1,m=!0}if(u>0){if(c.length===0)return;let k=Math.min(u,c.length);if(p.push(c.subarray(0,k)),c=c.subarray(k),u-=k,u>0)return}if(m){if(c.length<1)return;c=c.subarray(1),m=!1;let k=t[g-1];r.set(k,Buffer.concat(p).toString("utf8")),p=[],d=!0}}}),a.on("close",S=>{if(S!==0){E(new Error(`git cat-file --batch failed (exit ${S}): ${l.trim()}`));return}if(g<t.length){E(new Error(`git cat-file --batch returned ${g} of ${t.length} expected responses; stderr=${l.trim()}`));return}E(null)}),a.on("error",S=>{E(S)}),a.stdin.on("error",S=>{E(S)});for(let S of t)a.stdin.write(`${e}:${S}
`);a.stdin.end()})}async function Yu(e,t,n,r){await va(e,r);let o=await Y(["rev-parse",`refs/heads/${e}`],r);if(o.exitCode!==0)throw new Error(`Failed to get branch tip: ${o.stderr}`);let s=o.stdout.trim();await WT(e,s,n,t,r);let i=t.filter(l=>!l.delete).length,a=t.filter(l=>l.delete).length;re.info("Updated branch '%s': %d written, %d deleted (via fast-import)",e,i,a)}async function xr(e,t){let n=await Y(["cat-file","-p",e],t);if(n.exitCode!==0)return null;let r=n.stdout.match(/^tree ([a-f0-9]+)/m);return r?r[1]:null}async function Ca(e,t,n){re.debug("Listing files in branch %s under prefix '%s'",e,t);let r=await Y(["ls-tree","-z","-r","--name-only",e,t],n);if(r.exitCode!==0)return re.debug("Failed to list files (branch may not exist): %s",r.stderr),[];let o=r.stdout.split(DT).filter(s=>s.length>0);return re.debug("Found %d files",o.length),o}async function UT(e){let t=await Y(["rev-parse","--git-common-dir"],e);if(t.exitCode!==0)throw new Error(`Failed to get git common dir: ${t.stderr}`);let n=t.stdout.trim();return(0,Xe.resolve)(e,n)}async function Ia(e){let t=await UT(e);return(0,Xe.dirname)(t)}async function Ln(e){return Dt(e)!==null?!0:(await Y(["rev-parse","--git-dir"],e)).exitCode===0}async function Cr(e){let t=await Y(["worktree","list","--porcelain"],e);if(t.exitCode!==0)throw new Error(`Failed to list worktrees: ${t.stderr}`);return t.stdout.split(`
`).filter(r=>r.startsWith("worktree ")).map(r=>r.slice(9).trim())}async function Mn(e){let t=(0,Xe.join)(e,".git");if((await(0,os.stat)(t)).isDirectory())return(0,Xe.join)(t,"hooks");let r=await(0,os.readFile)(t,"utf-8"),o=r.trim().match(/^gitdir:\s*(.+)$/);if(!o)throw new Error(`Unexpected .git file content: ${r.trim()}`);let s=o[1].trim(),i=(0,Xe.resolve)(e,s),a=i.replace(/\\/g,"/").lastIndexOf("/worktrees/");if(a>=0){let l=i.substring(0,a);return(0,Xe.join)(l,"hooks")}return(0,Xe.join)(i,"hooks")}function Xu(e,t,n){return re.debug("git (stdin) %s%s",n?`[cwd=${n}] `:"",e.join(" ")),new Promise((r,o)=>{let s=mt("git",e,{stdio:["pipe","pipe","pipe"],...n!==void 0&&{cwd:n}}),i="",a="";s.stdout.on("data",l=>{i+=l.toString()}),s.stderr.on("data",l=>{a+=l.toString()}),s.on("close",l=>{l!==0?o(new Error(`git ${e[0]} failed (exit ${l}): ${a.trim()}`)):r(i.trim())}),s.on("error",l=>{o(l)}),s.stdin.write(t),s.stdin.end()})}async function BT(e,t){return Xu(["hash-object","-w","--stdin"],e,t)}async function Gu(e,t){let n=await Y(["var",e],t);if(n.exitCode!==0)throw new Error(`Failed to read ${e}: ${n.stderr}`);return n.stdout.trim()}async function WT(e,t,n,r,o){let s=await Gu("GIT_AUTHOR_IDENT",o),i=await Gu("GIT_COMMITTER_IDENT",o),a=["fast-import","--quiet","--done"];re.debug("git (fast-import stream) %s%s",o?`[cwd=${o}] `:"",a.join(" "));let l=r.filter(d=>!d.delete),c=r.filter(d=>d.delete);return new Promise((d,u)=>{let p=mt("git",a,{stdio:["pipe","pipe","pipe"],...o!==void 0&&{cwd:o}}),m="";p.stderr.on("data",S=>{m+=S.toString()}),p.on("close",S=>{S!==0?u(new Error(`git fast-import failed (exit ${S}): ${m.trim()}`)):d()}),p.on("error",S=>{u(S)});let g=p.stdin;g.on("error",S=>{u(S)});let h=[];l.forEach((S,k)=>{let b=k+1,x=Buffer.from(S.content,"utf8");h.push(`blob
mark :${b}
data ${x.length}
`,x,`
`)});let E=Buffer.from(n,"utf8");h.push(`commit refs/heads/${e}
`,`author ${s}
`,`committer ${i}
`,`data ${E.length}
`,E,`
`,`from ${t}
`),l.forEach((S,k)=>{h.push(`M 100644 :${k+1} ${qu(S.path)}
`)});for(let S of c)h.push(`D ${qu(S.path)}
`);h.push(`done
`),JT(g,h).then(()=>{g.end()},S=>{u(S)})})}async function JT(e,t){for(let n of t)e.write(n)||await(0,Ku.once)(e,"drain")}function qu(e){return/["\\\n\r]/.test(e)?`"${e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r")}"`:e}async function GT(e,t){return Xu(["mktree"],e,t)}var Ku,os,Xe,OT,DT,re,ka,LT,jT,Se=y(()=>{"use strict";Ku=require("node:events"),os=require("node:fs/promises"),Xe=require("node:path");w();ke();Ar();ae();OT=10*1024*1024,DT="\0",re=f("GitOps"),ka=new Map,LT=["GIT_DIR","GIT_WORK_TREE","GIT_INDEX_FILE","GIT_COMMON_DIR","GIT_PREFIX","GIT_OBJECT_DIRECTORY","GIT_NAMESPACE"];jT=["does not exist in","does not exist (neither on disk nor in the index)","invalid object name","exists on disk, but not in","unknown revision or path not in the working tree"]});function qT(e){return new Promise(t=>setTimeout(t,e))}function Qu(e){let t=Number(e);if(!Number.isInteger(t)||t<=0)return!1;if(t===process.pid)return!0;try{return process.kill(t,0),!0}catch(n){return n.code!=="ESRCH"}}async function Na(e){try{let t=await(0,ze.stat)(e),n=Date.now()-t.mtimeMs,r=await Zu(e),o=r!==null&&!Qu(r);if(!o&&n<zu)return!1;o?Ir.warn("Removing orphaned lock %s (PID %s no longer running)",e,r):Ir.warn("Removing stale lock file %s (age: %dms)",e,n),await(0,ze.rm)(e,{force:!0})}catch(t){if(t.code!=="ENOENT")return Ir.error("Failed to check lock file %s: %s",e,t.message),!1}try{return await(0,ze.writeFile)(e,String(process.pid),{flag:"wx"}),!0}catch{return!1}}async function Zu(e){try{let n=(await(0,ze.readFile)(e,"utf-8")).trim();return n.length>0?n:null}catch{return null}}async function $n(e,t){let n=await Zu(e);if(n!==null&&n!==String(process.pid)){Ir.warn("Skipping release of %s: held by pid %s, not us (pid %s) \u2014 stale-reclaim race",t,n,process.pid);return}try{await(0,ze.rm)(e,{force:!0})}catch(r){Ir.error("Failed to release %s: %s",t,r.message)}}async function Fn(e,t){if(t.timeoutMs<=0)return Na(e);let n=Date.now()+t.timeoutMs;for(;;){if(await Na(e))return!0;if(Date.now()>=n)return!1;await qT(t.pollMs)}}var ze,Ir,zu,Pa=y(()=>{"use strict";ze=require("node:fs/promises");w();Ir=f("LockPrimitives"),zu=300*1e3});function np(e){return(0,tp.resolve)(e??process.cwd())}function jn(e){return Oa.getStore()?.has(np(e))===!0}function Hn(e,t){let n=new Set(Oa.getStore()??[]);return n.add(np(e)),Oa.run(n,t)}var ep,tp,Oa,is=y(()=>{"use strict";ep=require("node:async_hooks"),tp=require("node:path"),Oa=new ep.AsyncLocalStorage});function KT(e){return Pn("git",["rev-parse","--git-common-dir"],{cwd:e})}async function dp(e){let t=e??process.cwd(),n=ip.get(t);if(n!==void 0)return n;let r;try{let{stdout:o}=await KT(t),s=o.trim(),i=(0,Re.isAbsolute)(s)?s:(0,Re.resolve)(t,s);r=(0,Re.join)(i,"jollimemory")}catch{lp.debug("resolveSharedLockDir: git rev-parse failed for cwd=%s \u2014 falling back to per-worktree dir",t),r=G(t)}return ip.set(t,r),r}async function Da(e){let t=await dp(e);return await(0,Nr.mkdir)(t,{recursive:!0}),t}async function Pr(e,t={}){let n=t.timeoutMs??YT,r=t.pollMs??XT,o=await Da(e);return Fn((0,Re.join)(o,cp),{timeoutMs:n,pollMs:r})}async function Or(e){let t=await dp(e);await $n((0,Re.join)(t,cp),"orphan-write.lock")}async function t_(e,t,n,r){let o=r.timeoutMs??QT,s=r.pollMs??ls;await(0,Nr.mkdir)(e,{recursive:!0});let i=(0,Re.join)(e,t),a=await Fn(i,{timeoutMs:o,pollMs:s});a||lp.warn("Could not acquire %s within %d ms \u2014 proceeding best-effort",t,o);try{return await n()}finally{a&&await $n(i,t)}}async function La(e,t,n={}){return t_(e,VT,t,n)}async function Dr(e,t={}){let n=t.timeoutMs??ZT,r=t.pollMs??ls,o=await Da(e),s=(0,Re.join)(o,op);return await Fn(s,{timeoutMs:n,pollMs:r})?{release:()=>$n(s,op)}:null}async function Ma(e,t,n={}){let r=await Dr(e,n);if(!r)return{acquired:!1};try{return{acquired:!0,value:await t()}}finally{await r.release()}}async function $a(e,t,n={}){let r=n.timeoutMs??zT,o=n.pollMs??ls,s=await Da(e),i=(0,Re.join)(s,rp);if(!await Fn(i,{timeoutMs:r,pollMs:o}))return{acquired:!1};try{return{acquired:!0,value:await t()}}finally{await $n(i,rp)}}async function Fa(e,t={}){let n=t.timeoutMs??e_,r=t.pollMs??ls,o=t.globalDir??(0,Re.join)((0,ap.homedir)(),".jolli","jollimemory");await(0,Nr.mkdir)(o,{recursive:!0});let s=(0,Re.join)(o,sp);if(!await Fn(s,{timeoutMs:n,pollMs:r}))return{acquired:!1};try{return{acquired:!0,value:await e()}}finally{await $n(s,sp)}}var Nr,ap,Re,lp,cp,rp,VT,op,sp,YT,as,XT,zT,ls,QT,ZT,e_,ip,Qe=y(()=>{"use strict";Nr=require("node:fs/promises"),ap=require("node:os"),Re=require("node:path");w();ke();Pa();is();lp=f("Locks");cp="orphan-write.lock",rp="profile.lock",VT="config.lock",op="repo-hooks.lock",sp="runtime-registry.lock",YT=1e3,as=class extends Error{constructor(t,n){super(`${t}: could not acquire orphan-write.lock within ${n}ms`),this.name="OrphanWriteBusyError"}},XT=50,zT=5e3,ls=25,QT=5e3,ZT=5e3,e_=5e3,ip=new Map});async function ja(e,t,n={}){await(0,Lt.mkdir)((0,up.dirname)(e),{recursive:!0});let r=`${e}.${process.pid}.tmp`;await(0,Lt.writeFile)(r,t,n.mode!==void 0?{encoding:"utf-8",mode:n.mode}:"utf-8");try{await(0,Lt.rename)(r,e)}catch(o){throw await(0,Lt.unlink)(r).catch(()=>{}),o}}var Lt,up,Ha=y(()=>{"use strict";Lt=require("node:fs/promises"),up=require("node:path")});function gp(e,t){let n={...e,manuallyDisabled:t};return delete n.userDisabled,n}async function o_(e){let t=Dt(e)?.commonDir;if(t)return t;let n=await Y(["rev-parse","--git-common-dir"],e),r=n.exitCode===0?n.stdout.trim():"";return r?(0,le.isAbsolute)(r)?r:(0,le.join)(e,r):null}async function Ja(e){let t=await o_(e);if(t===null)return{profilePath:(0,le.join)(G(e),Ba),legacyMarkerPath:null};let n=(0,le.dirname)(t);return{profilePath:(0,le.join)(G(n),Ba),legacyMarkerPath:(0,le.join)(t,n_,r_)}}async function us(e){try{let t=await(0,Lr.readFile)(e,"utf-8"),n=JSON.parse(t);return n&&typeof n=="object"&&!Array.isArray(n)?n:{}}catch{return{}}}async function s_(e){try{return await(0,Lr.stat)(e),!0}catch{return!1}}async function hp(e,t){await ja(e,`${JSON.stringify(t,null,"	")}
`)}function cs(e,t,n,r,o,s){if(e==="read"){let i=`${o}|${t}|${n}`;if(pp.has(i))return n;pp.add(i)}return Wa.info("manual-disable %s \u2192 %s (by=%s, pid=%d, cwd=%s, profile=%s, raw: userDisabled=%s manuallyDisabled=%s fence=%s)",e,n,t,process.pid,r,o,String(s.userDisabled),String(s.manuallyDisabled),s.cutoverFence?s.cutoverFence.at:"none"),n}function yp(){return(new Error("manual-disable write").stack??"(no stack)").split(`
`).slice(1,8).join(" | ").replace(/\s+/g," ")}async function i_(e){let t;try{t=await Cr(e)}catch{t=[e]}for(let n of t)if(await s_((0,le.join)(G(n),fp)))return!0;return!1}async function Mt(e){let{profilePath:t}=await Ja(e),n=await us(t);if(n.userDisabled!==void 0){let s=await mp(e,t,n.userDisabled===!0);return cs("read","migrate:userDisabled",s,e,t,n)}if(n.manuallyDisabled!==void 0)return cs("read","manuallyDisabled",n.manuallyDisabled===!0,e,t,n);let r=await i_(e),o=await mp(e,t,r);return cs("read","migrate:legacy-marker",o,e,t,n)}async function mp(e,t,n){let r=await $a(e,async()=>{let o=await us(t),s=o.userDisabled??o.manuallyDisabled,i=s===void 0?n:s===!0;return o.userDisabled===void 0&&o.manuallyDisabled!==void 0||(Wa.info("manual-disable MIGRATE \u2192 manuallyDisabled=%s (pid=%d, profile=%s, fence=%s, from=%s) \u2190 %s",i,process.pid,t,o.cutoverFence?o.cutoverFence.at:"none",o.userDisabled!==void 0?"userDisabled":"legacy-marker",yp()),await hp(t,gp(o,i))),i}).catch(()=>{});return r?.acquired&&r.value!==void 0?r.value:n}async function Ga(e,t){let{profilePath:n}=await Ja(e);if(Wa.info("manual-disable WRITE %s (pid=%d, cwd=%s, profile=%s) \u2190 %s",t,process.pid,e,n,yp()),!(await $a(e,async()=>{let o=await us(n);cs("write",`explicit:${t}`,t,e,n,o),await hp(n,gp(o,t))})).acquired)throw new Error("Timed out acquiring the repo profile lock")}async function Mr(e){let{profilePath:t}=await Ja(e);return(await us(t)).cutoverFence??null}function a_(e){let t=Ua.get(e);if(t!==void 0)return t;let n=Dt(e)?.commonDir;if(n){let s=(0,le.dirname)(n);return Ua.set(e,s),s}let r="";try{let s=Ee("git",["rev-parse","--git-common-dir"],{cwd:e,encoding:"utf-8",stdio:["ignore","pipe","pipe"]}).trim();s&&(r=(0,le.isAbsolute)(s)?s:(0,le.join)(e,s))}catch{r=""}let o=r?(0,le.dirname)(r):e;return Ua.set(e,o),o}function qa(e){let t=a_(e),n;try{n=(0,ds.readFileSync)((0,le.join)(G(t),Ba),"utf-8")}catch{}let r=l_(n);if(r!==void 0)return r;try{return(0,ds.statSync)((0,le.join)(G(e),fp)),!0}catch{return!1}}function l_(e){if(e===void 0)return;let t;try{t=JSON.parse(e)}catch{return}if(!t||typeof t!="object"||Array.isArray(t))return;let n=t;if(n.userDisabled!==void 0)return n.userDisabled===!0;if(n.manuallyDisabled!==void 0)return n.manuallyDisabled===!0}var ds,Lr,le,Wa,Ba,n_,r_,fp,pp,Ua,Ze=y(()=>{"use strict";ds=require("node:fs"),Lr=require("node:fs/promises"),le=require("node:path");w();ke();Ha();Ar();Se();Qe();Wa=f("RepoProfile"),Ba="profile.json",n_="jollimemory",r_="backfill-card-dismissed",fp="disabled-by-user";pp=new Set;Ua=new Map});function Ep(e){return typeof e=="string"&&wp.includes(e)}var wp,Ka,ps=y(()=>{"use strict";wp=["claude","codex","gemini","opencode","cursor","cursor-cli","copilot","copilot-chat","cline","cline-cli","devin","antigravity","kimi","hermes"];Ka=5});async function v(e,t,n){let r=`${e}.${process.pid}.${(0,Sp.randomUUID)()}.tmp`;await(0,en.writeFile)(r,t,n===void 0?"utf-8":{encoding:"utf-8",mode:n});try{await(0,en.rename)(r,e)}catch(o){let s=o.code;if(s==="EPERM"||s==="EACCES")await(0,en.writeFile)(e,t,n===void 0?"utf-8":{encoding:"utf-8",mode:n}),await(0,en.rm)(r,{force:!0});else throw o}}var Sp,en,Q=y(()=>{"use strict";Sp=require("node:crypto"),en=require("node:fs/promises")});function ce(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}var $r=y(()=>{"use strict"});var bp=y(()=>{"use strict"});function Va(e,t){if(e.length<=t)return e;let n=e.length-t;return`${e.slice(0,t)}
\u2026[truncated, ${n} more chars]`}var Ya=y(()=>{"use strict"});function Tp(e){return Number.isFinite(e)&&e>=0&&e<=1114111&&!(e>=55296&&e<=57343)}function _p(e){return e.replace(/&(#x[0-9a-fA-F]+|#\d+|[a-zA-Z]+);/g,(t,n)=>{if(n.startsWith("#x")){let o=Number.parseInt(n.slice(2),16);return Tp(o)?String.fromCodePoint(o):t}if(n.startsWith("#")){let o=Number.parseInt(n.slice(1),10);return Tp(o)?String.fromCodePoint(o):t}let r=c_[n];return typeof r=="string"?r:t})}var c_,kp=y(()=>{"use strict";c_={amp:"&",lt:"<",gt:">",quot:'"',apos:"'"}});var d_,Rp,vp=y(()=>{"use strict";bp();$r();Ya();kp();d_={decodeHtmlEntities:_p,lowercase:e=>e.toLowerCase()},Rp=new Set(Object.keys(d_))});var u_,Ap,xp=y(()=>{"use strict";u_="^https://app\\.asana\\.com/",Ap={id:"asana",label:"Asana",icon:"checklist",match:{claude:{prefixes:["mcp__claude_ai_Asana__"],acceptSuffix:"get_task"},codex:{namespaceSuffix:"asana",functionCallNames:["_get_task"],invocationTools:["asana.get_task"]}},wrapperKeys:["data"],reference:{nativeId:{pipe:[{op:"path",path:"gid"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"name"}],require:".+"},url:{pipe:[{op:"path",path:"permalink_url"}],require:u_,requireFlags:"i"},description:{pipe:[{op:"path",path:"notes"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"task"}]},{key:"assignee",label:"Assignee",icon:"person",pipe:[{op:"path",path:"assignee.name"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"asana-tasks",itemTag:"task",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var p_,Cp,Ip=y(()=>{"use strict";p_="^https://[^/]+/wiki/",Cp={id:"confluence",label:"Confluence",icon:"book",match:{claude:{prefixes:["mcp__claude_ai_Atlassian__"],acceptSuffix:"getConfluencePage"},codex:{namespaceSuffix:"atlassian_rovo",functionCallNames:["_getconfluencepage"],invocationTools:["atlassian_rovo.getConfluencePage"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"pageId"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:p_},description:{pipe:[{op:"path",path:"body"}],optional:!0}},fields:[{key:"space",label:"Space",icon:"symbol-namespace",pipe:[{op:"path",path:"space"}]},{key:"author",label:"Author",icon:"account",pipe:[{op:"path",path:"author"}]},{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"coalesce",of:[[{op:"path",path:"entityType"}],[{op:"const",value:"page"}]]}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"confluence-pages",itemTag:"page",bodyTag:"content",maxCharsPerReference:3e4,maxTotalChars:6e4}}});var m_,Np,Pp=y(()=>{"use strict";m_="^/[^/\\s]+/[^/\\s]+",Np={id:"context7",label:"Context7",icon:"book",trackOnly:!0,argumentsDerived:!0,match:{claude:{prefixes:["mcp__context7__"],acceptSuffix:"query-docs"},codex:{namespaceSuffix:"context7",functionCallNames:["_query_docs"],invocationTools:["query-docs","context7.query-docs"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"libraryId"}],require:m_},title:{pipe:[{op:"path",path:"libraryId"},{op:"regex",pattern:"^/(.+)$",extract:"$1"}],require:".+"},url:{pipe:[{op:"template",template:"https://context7.com{id}",from:{id:[{op:"path",path:"libraryId"}]}}],require:"^https://context7\\.com/"},description:{pipe:[{op:"path",path:"query"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"context7-libraries",itemTag:"library",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var Xa,f_,za,VD,Op=y(()=>{"use strict";$r();Xa=["mcp__Figma__","mcp__figma__"],f_={get_metadata:"Read structure",get_screenshot:"Viewed screenshot",get_variable_defs:"Read variables",get_figjam:"Read FigJam board",get_design_context:"Read design context"},za=Object.keys(f_),VD=new Set(za)});var g_,h_,Dp,Lp=y(()=>{"use strict";Op();g_="^[0-9a-zA-Z]{22,128}$",h_=Xa.flatMap(e=>za.map(t=>`${e}${t}`)),Dp={id:"figma",label:"Figma",icon:"symbol-color",trackOnly:!0,argumentsDerived:!0,accumulateBody:!0,titleFallbackPattern:"^Figma file [0-9a-zA-Z]{1,8}$",match:{claude:{prefixes:[...Xa],exact:h_}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"fileKey"}],require:g_},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://www\\.figma\\.com/"},description:{pipe:[{op:"path",path:"detail"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"figma-files",itemTag:"file",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var y_,w_,Mp,$p=y(()=>{"use strict";y_="^https?://github\\.com/([^/]+)/[^/]+/(?:issues|pull)/\\d+",w_="^https?://github\\.com/[^/]+/([^/]+)/(?:issues|pull)/\\d+",Mp={id:"github",label:"GitHub",icon:"issues",match:{claude:{prefixes:["mcp__github__"]},codex:{namespaceSuffix:"github",functionCallNames:["_fetch_issue","_search_issues"],invocationTools:["github_fetch_issue","github_search_issues"]}},wrapperKeys:["items","issues","nodes","results"],reference:{nativeId:{pipe:[{op:"template",template:"{owner}/{repo}#{number}",from:{owner:[{op:"coalesce",of:[[{op:"path",path:"repository.full_name"},{op:"regex",pattern:"^([^/]+)/[^/]+$",extract:"$1"}],[{op:"path",path:"html_url"},{op:"regex",pattern:y_,extract:"$1"}]]}],repo:[{op:"coalesce",of:[[{op:"path",path:"repository.full_name"},{op:"regex",pattern:"^[^/]+/([^/]+)$",extract:"$1"}],[{op:"path",path:"html_url"},{op:"regex",pattern:w_,extract:"$1"}]]}],number:[{op:"path",path:"number"}]}}],require:"^[^/]+/[^/]+#\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"html_url"}],require:"^https?://"},description:{pipe:[{op:"path",path:"body"},{op:"transform",fn:"decodeHtmlEntities"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"path",path:"state"}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"labels"},{op:"join",sep:", "}]},{key:"assignees",label:"Assignees",icon:"account",pipe:[{op:"path",path:"assignees"},{op:"join",sep:", "}]},{key:"milestone",label:"Milestone",icon:"milestone",pipe:[{op:"coalesce",of:[[{op:"path",path:"milestone"}],[{op:"path",path:"milestone.title"}]]}]},{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"coalesce",of:[[{op:"path",path:"issue_type"}],[{op:"path",path:"issue_type.name"}]]}]}],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"github-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var E_,Fp,jp=y(()=>{"use strict";E_="^[A-Z][A-Z0-9_]*-\\d+$",Fp={id:"jira",label:"Jira",icon:"issues",match:{claude:{prefixes:["mcp__claude_ai_Atlassian__"]},codex:{namespaceSuffix:"atlassian_rovo",functionCallNames:["_fetch","_getjiraissue"],invocationTools:["atlassian_rovo.fetch","atlassian_rovo.getJiraIssue"]}},wrapperKeys:["nodes","issues","items","results"],reference:{nativeId:{pipe:[{op:"path",path:"key"}],require:E_},title:{pipe:[{op:"path",path:"fields.summary"}],require:".+"},url:{pipe:[{op:"path",path:"webUrl"}],require:"^https?://"},description:{pipe:[{op:"path",path:"fields.description"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"coalesce",of:[[{op:"path",path:"fields.status.name"}],[{op:"path",path:"fields.status"}]]}]},{key:"priority",label:"Priority",icon:"flame",pipe:[{op:"coalesce",of:[[{op:"path",path:"fields.priority.name"}],[{op:"path",path:"fields.priority"}]]}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"fields.labels"},{op:"join",sep:", "}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"jira-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var Hp,Up=y(()=>{"use strict";Hp={id:"jollimemory",label:"Jolli Memory",icon:"history",trackOnly:!0,argumentsDerived:!0,accumulateBody:!0,match:{claude:{prefixes:["mcp__jollimemory__"],exact:["mcp__jollimemory__recall","mcp__jollimemory__search","mcp__jollimemory__get_decision_timeline"]},codex:{namespaceSuffix:"jollimemory",functionCallNames:["recall","search","get_decision_timeline"],invocationTools:["recall","search","get_decision_timeline"],invocationServer:"jollimemory"}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"tool"}],require:"^(recall|search|get_decision_timeline)$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},description:{pipe:[{op:"path",path:"query"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"jolli-memory-lookups",itemTag:"lookup",bodyTag:"queries",maxCharsPerReference:2e3,maxTotalChars:6e3}}});var S_,Bp,Wp=y(()=>{"use strict";S_="^[A-Z][A-Z0-9_]*-\\d+$",Bp={id:"linear",label:"Linear",icon:"issues",match:{claude:{prefixes:["mcp__linear__","mcp__claude_ai_Linear__"],denySuffixes:["list_issues","search_issues"]},codex:{namespaceSuffix:"linear",functionCallNames:["_fetch","_get_issue"],invocationTools:["linear_fetch","linear.get_issue"]}},wrapperKeys:["items","issues","nodes","results"],reference:{nativeId:{pipe:[{op:"path",path:"id"}],require:S_},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https?://"},description:{pipe:[{op:"path",path:"description"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"path",path:"status"}]},{key:"priority",label:"Priority",icon:"flame",pipe:[{op:"coalesce",of:[[{op:"path",path:"priority"}],[{op:"path",path:"priority.name"}]]}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"labels"},{op:"join",sep:", "}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"linear-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var Jp,Gp=y(()=>{"use strict";Jp={id:"monday",label:"monday.com",icon:"table",match:{claude:{prefixes:["mcp__claude_ai_monday_com__"],acceptSuffix:"get_board_items_page"},codex:{namespaceSuffix:"monday_com",functionCallNames:["_get_board_items_page"],invocationTools:["monday_com.get_board_items_page"]}},wrapperKeys:["items"],reference:{nativeId:{pipe:[{op:"path",path:"id"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"name"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://([\\w-]+\\.)*monday\\.com/",requireFlags:"i"},description:{pipe:[{op:"path",path:"description"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"item"}]},{key:"board",label:"Board",icon:"project",pipe:[{op:"path",path:"board"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"monday-items",itemTag:"item",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var b_,T_,__,qp,Kp=y(()=>{"use strict";b_="[-/]([0-9a-fA-F]{32})(?=[/?#]|$)",T_="^https://(www\\.notion\\.so|notion\\.so|app\\.notion\\.com|[A-Za-z0-9.-]+\\.notion\\.site)/",__="<content\\b[^>]*>([\\s\\S]*?)</content>",qp={id:"notion",label:"Notion",icon:"file-text",match:{claude:{prefixes:["mcp__claude_ai_Notion__"],acceptSuffix:"notion-fetch"},codex:{namespaceSuffix:"notion",functionCallNames:["_fetch"],invocationTools:["notion_fetch"]}},wrapperKeys:["results","items","pages"],reference:{guard:{pipe:[{op:"path",path:"metadata.type"}],require:"^page$"},nativeId:{pipe:[{op:"path",path:"url"},{op:"regex",pattern:b_,extract:"$1",lastMatch:!0},{op:"transform",fn:"lowercase"}],require:"^[0-9a-fA-F]{32}$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:T_,requireFlags:"i"},description:{pipe:[{op:"path",path:"text"},{op:"regex",pattern:__,extract:"$1"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"page"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"notion-pages",itemTag:"page",bodyTag:"content",fieldAttrs:!1,maxCharsPerReference:3e4,maxTotalChars:6e4}}});var Qa,k_,R_,Za,sL,Vp=y(()=>{"use strict";$r();Qa=["mcp__Sentry__","mcp__sentry__"],k_="get_sentry_resource",R_="analyze_issue_with_seer",Za=[k_,R_],sL=new Set(Za)});var v_,A_,x_,C_,Yp,Xp=y(()=>{"use strict";Vp();v_=Qa.flatMap(e=>Za.map(t=>`${e}${t}`)),A_="^[A-Za-z0-9.-]{1,253}/[A-Za-z0-9_-]{1,128}$",x_="^Issue [A-Za-z0-9_-]{1,128}$",C_="^Issue [0-9]{1,128}$",Yp={id:"sentry",label:"Sentry",icon:"bug",trackOnly:!0,argumentsDerived:!0,titleFallbackPattern:x_,titleFallbackPoorestPattern:C_,match:{claude:{prefixes:[...Qa],exact:v_}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"nativeId"}],require:A_},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://(?:[A-Za-z0-9-]{1,63}\\.)*sentry\\.io/issues/[A-Za-z0-9_-]{1,128}$",requireFlags:"i"},description:{pipe:[{op:"path",path:"detail"}],optional:!0}},fields:[{key:"issue-id",label:"Issue",icon:"bug",pipe:[{op:"path",path:"shortId"}]},{key:"project",label:"Project",icon:"symbol-property",pipe:[{op:"path",path:"project"}]}],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"sentry-issues",itemTag:"issue",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var zp,Qp=y(()=>{"use strict";zp={id:"slack",label:"Slack",icon:"comment-discussion",match:{claude:{prefixes:["mcp__claude_ai_Slack__"],acceptSuffix:"slack_read_thread"},codex:{namespaceSuffix:"slack",functionCallNames:["_slack_read_thread"],invocationTools:["slack.slack_read_thread"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"template",template:"{c}-{t}",from:{c:[{op:"path",path:"channelId"}],t:[{op:"path",path:"parentTs"}]}}],require:"^[A-Z0-9]+-\\d{7,}\\.\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://"},description:{pipe:[{op:"path",path:"text"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"comment-discussion",pipe:[{op:"const",value:"thread"}]},{key:"replies",label:"Replies",icon:"reply",pipe:[{op:"path",path:"replyCount"}]},{key:"channel",label:"Channel",icon:"symbol-namespace",pipe:[{op:"path",path:"channelId"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"slack-threads",itemTag:"thread",bodyTag:"messages",fieldAttrs:!0,maxCharsPerReference:8e3,maxTotalChars:4e4}}});var I_,el,tl,Zp,em=y(()=>{"use strict";I_="^dpl_[A-Za-z0-9]+$",el=[{op:"coalesce",of:[[{op:"path",path:"readyState"}],[{op:"path",path:"state"}]]}],tl=[{op:"template",template:"https://{host}",from:{host:[{op:"path",path:"url"}]}}],Zp={id:"vercel",label:"Vercel",icon:"rocket",trackOnly:!0,match:{claude:{prefixes:["mcp__claude_ai_Vercel__","mcp__vercel__"],acceptSuffix:"get_deployment"}},wrapperKeys:["deployment"],reference:{nativeId:{pipe:[{op:"path",path:"id"}],require:I_},title:{pipe:[{op:"coalesce",of:[[{op:"template",template:"{name} ({state})",from:{name:[{op:"path",path:"name"}],state:el}}],[{op:"path",path:"name"}]]}],require:".+"},url:{pipe:tl,require:"^https://[A-Za-z0-9.-]+\\.vercel\\.app$",requireFlags:"i"},description:{pipe:[{op:"coalesce",of:[[{op:"path",path:"errorMessage"}],[{op:"template",template:"Deployment {state} \xB7 {target} \xB7 {url}",from:{state:el,target:[{op:"path",path:"target"}],url:tl}}],[{op:"template",template:"Deployment {state} \xB7 {url}",from:{state:el,url:tl}}]]}],optional:!0}},fields:[{key:"target",label:"Target",icon:"rocket",pipe:[{op:"path",path:"target"}]},{key:"framework",label:"Framework",icon:"symbol-property",pipe:[{op:"path",path:"project.framework"}]},{key:"error-code",label:"Error",icon:"error",pipe:[{op:"path",path:"errorCode"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"vercel-deployments",itemTag:"deployment",bodyTag:"content",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var tm,nm=y(()=>{"use strict";tm={id:"zoom-doc",label:"Zoom Doc",icon:"file",match:{claude:{prefixes:["mcp__claude_ai_Zoom_for_Claude__"],acceptSuffix:"hub_get_file_content"}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"fileId"}],require:"^[\\w.-]+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://docs\\.zoom\\.us/doc/"},description:{pipe:[{op:"path",path:"content"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"doc"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"zoom-docs",itemTag:"doc",bodyTag:"content",maxCharsPerReference:3e4,maxTotalChars:6e4}}});var rm,om=y(()=>{"use strict";rm={id:"zoom-meeting",label:"Zoom Meeting",icon:"device-camera-video",match:{claude:{prefixes:["mcp__claude_ai_Zoom_for_Claude__"],acceptSuffix:"get_meeting_assets"},codex:{namespaceSuffix:"zoom",functionCallNames:["_get_meeting_assets"],invocationTools:["zoom.get_meeting_assets"]}},wrapperKeys:[],reference:{guard:{pipe:[{op:"path",path:"meeting_summary.summary_markdown"}],require:".+"},nativeId:{pipe:[{op:"path",path:"meeting_uuid"}],require:"^[\\w-]+$"},title:{pipe:[{op:"path",path:"topic"}],require:".+"},url:{pipe:[{op:"coalesce",of:[[{op:"path",path:"meeting_summary.summary_doc_url"}],[{op:"path",path:"deep_url"}]]}],require:"^https://"},description:{pipe:[{op:"path",path:"meeting_summary.summary_markdown"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"meeting"}]},{key:"started",label:"Started",icon:"calendar",pipe:[{op:"path",path:"start_time"}]},{key:"meeting-number",label:"Meeting #",icon:"symbol-number",pipe:[{op:"path",path:"meeting_number"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"zoom-meetings",itemTag:"meeting",bodyTag:"summary",maxCharsPerReference:2e4,maxTotalChars:4e4}}});var sm,im=y(()=>{"use strict";xp();Ip();Pp();Lp();$p();jp();Up();Wp();Gp();Kp();Xp();Qp();em();nm();om();sm=[Bp,Cp,Fp,Mp,qp,zp,rm,tm,Ap,Jp,Np,Hp,Zp,Dp,Yp]});function P_(e,t,n){if(!ce(e))return"op must be an object";if(n.opCount++,n.opCount>am)return`pipe exceeds ${am} ops`;let r=e.op;if(typeof r!="string"||!N_.has(r))return`unknown op: ${String(r)}`;switch(r){case"path":return typeof e.path=="string"?void 0:"path op requires a string 'path'";case"const":return typeof e.value=="string"?void 0:"const op requires a string 'value'";case"join":return typeof e.sep=="string"?void 0:"join op requires a string 'sep'";case"regex":return typeof e.pattern!="string"?"regex op requires a string 'pattern'":e.extract!==void 0&&typeof e.extract!="string"?"regex.extract must be a string":e.lastMatch!==void 0&&typeof e.lastMatch!="boolean"?"regex.lastMatch must be a boolean":void 0;case"transform":return typeof e.fn!="string"?"transform op requires a string 'fn'":Rp.has(e.fn)?void 0:`unknown transform: ${e.fn}`;case"coalesce":{if(t+1>ms)return`nesting depth exceeds ${ms}`;if(!Array.isArray(e.of))return"coalesce op requires an array 'of'";for(let o of e.of){let s=nl(o,t+1,n);if(s!==void 0)return s}return}case"template":{if(t+1>ms)return`nesting depth exceeds ${ms}`;if(typeof e.template!="string")return"template op requires a string 'template'";if(!ce(e.from))return"template op requires an object 'from'";for(let o of Object.values(e.from)){let s=nl(o,t+1,n);if(s!==void 0)return s}return}}}function nl(e,t,n){if(!Array.isArray(e))return"pipe must be an array";for(let r of e){let o=P_(r,t,n);if(o!==void 0)return o}}function Fr(e,t){let n=nl(e,0,{opCount:0});return n===void 0?void 0:`${t}: ${n}`}function O_(e){if(!ce(e))return{ok:!1,error:"definition must be an object"};if(typeof e.id!="string"||e.id.length===0)return{ok:!1,error:"id must be a non-empty string"};if(typeof e.label!="string"||e.label.length===0)return{ok:!1,error:"label must be a non-empty string"};if(typeof e.icon!="string"||e.icon.length===0)return{ok:!1,error:"icon must be a non-empty string"};if(e.titleFallbackPattern!==void 0){if(typeof e.titleFallbackPattern!="string"||e.titleFallbackPattern.length===0)return{ok:!1,error:"titleFallbackPattern must be a non-empty string"};try{new RegExp(e.titleFallbackPattern)}catch(n){return{ok:!1,error:`titleFallbackPattern is not a valid regex: ${n.message}`}}}if(e.titleFallbackPoorestPattern!==void 0){if(typeof e.titleFallbackPoorestPattern!="string"||e.titleFallbackPoorestPattern.length===0)return{ok:!1,error:"titleFallbackPoorestPattern must be a non-empty string"};try{new RegExp(e.titleFallbackPoorestPattern)}catch(n){return{ok:!1,error:`titleFallbackPoorestPattern is not a valid regex: ${n.message}`}}if(e.titleFallbackPattern===void 0)return{ok:!1,error:"titleFallbackPoorestPattern requires titleFallbackPattern"}}if(!ce(e.match))return{ok:!1,error:"match must be an object"};if(!Array.isArray(e.wrapperKeys))return{ok:!1,error:"wrapperKeys must be an array"};if(!ce(e.reference))return{ok:!1,error:"reference must be an object"};if(!Array.isArray(e.fields))return{ok:!1,error:"fields must be an array"};if(!ce(e.storage))return{ok:!1,error:"storage must be an object"};if(!ce(e.render))return{ok:!1,error:"render must be an object"};let t=e.reference;for(let n of["nativeId","title"]){let r=t[n];if(!ce(r))return{ok:!1,error:`reference.${n} is required`};let o=Fr(r.pipe,`reference.${n}.pipe`);if(o!==void 0)return{ok:!1,error:o}}if(t.url!==void 0){if(!ce(t.url))return{ok:!1,error:"reference.url must be an object"};let n=Fr(t.url.pipe,"reference.url.pipe");if(n!==void 0)return{ok:!1,error:n}}if(t.description!==void 0){if(!ce(t.description))return{ok:!1,error:"reference.description must be an object"};let n=Fr(t.description.pipe,"reference.description.pipe");if(n!==void 0)return{ok:!1,error:n}}if(t.guard!==void 0){if(!ce(t.guard))return{ok:!1,error:"reference.guard must be an object"};let n=Fr(t.guard.pipe,"reference.guard.pipe");if(n!==void 0)return{ok:!1,error:n}}for(let[n,r]of e.fields.entries()){if(!ce(r))return{ok:!1,error:`fields[${n}] must be an object`};if(typeof r.key!="string"||!lm.test(r.key))return{ok:!1,error:`fields[${n}].key must match ${lm}`};if(typeof r.label!="string"||r.label.length===0)return{ok:!1,error:`fields[${n}].label must be a non-empty string`};let o=Fr(r.pipe,`fields[${n}].pipe`);if(o!==void 0)return{ok:!1,error:o}}return{ok:!0,def:e}}function Un(){if(fs!==void 0)return fs;let e=[];for(let t of sm){let n=O_(t);if(!n.ok)throw new Error(`invalid built-in source definition '${t.id}': ${n.error}`);e.push(n.def)}return fs=new rl(e),fs}var am,ms,N_,lm,rl,fs,gs=y(()=>{"use strict";$r();vp();im();am=64,ms=8,N_=new Set(["path","coalesce","regex","template","join","const","transform"]);lm=/^[\w-]+$/;rl=class{constructor(t){this.definitions=t}all(){return this.definitions}byId(t){return this.definitions.find(n=>n.id===t)}match(t,n,r,o){return t==="claude"?this.definitions.find(s=>{let i=s.match.claude;return!(i===void 0||!i.prefixes.some(a=>n.startsWith(a))||i.exact!==void 0&&!i.exact.includes(n)||i.acceptSuffix!==void 0&&!n.endsWith(i.acceptSuffix)||i.denySuffixes?.some(a=>n.endsWith(a)))}):r!==void 0?this.definitions.find(s=>{let i=s.match.codex;return i!==void 0&&i.namespaceSuffix===r&&i.functionCallNames.includes(n)}):this.definitions.find(s=>{let i=s.match.codex;return i===void 0||!i.invocationTools.includes(n)?!1:i.invocationServer===void 0||i.invocationServer===o})}}});function dm(e,t){let n=Un().byId(e);if(n===void 0||n.storage.nativeIdPathSafe===!1){let r=t.replace(/[^\w.-]/g,"-"),o=H_(t).slice(0,8);return`${r}-${o}`}if(t.includes("..")||/[/\\]/.test(t))throw new Error(`Refusing unsafe ${e} nativeId for path: ${JSON.stringify(t)}`);return t}function ol(e){return $_(e)}function D_(e){return e.replace(/^\n+/,"").replace(/\n+$/,"")}function L_(e){let t=e.indexOf(M_);return t===-1?e:e.slice(0,t)}function $_(e){if(typeof e!="string")return null;let t=e.split(`
`);if(t[0]?.trim()!=="---")return null;let n=-1;for(let k=1;k<t.length;k++)if(t[k].trim()==="---"){n=k;break}if(n===-1)return null;let r=t.slice(1,n),o=D_(L_(t.slice(n+1).join(`
`))),s={},i=[],a=!1;for(let k of r){if(a){let x=/^\s+- (.+)$/.exec(k);if(x){try{let P=JSON.parse(x[1]);F_(P)&&i.push(P)}catch{}continue}a=!1}if(k.trim()==="fields:"){a=!0;continue}let b=/^([a-zA-Z]+):\s*(.+)$/.exec(k);b&&(s[b[1]]=b[2])}let l=k=>{let b=s[k];if(b!==void 0)try{let x=JSON.parse(b);return typeof x=="string"?x:void 0}catch{return}},c=l("source"),d=l("nativeId");if(c===void 0||d===void 0||!j_(c))return null;let u=c,p=d,m=l("title"),g=l("url"),h=l("referencedAt"),E=l("sourceToolName");return!m||h===void 0||!E?null:{mapKey:`${u}:${p}`,source:u,nativeId:p,title:m,referencedAt:h,toolName:E,...g!==void 0?{url:g}:{},...i.length>0?{fields:i}:{},...o.length>0?{description:o}:{}}}function F_(e){if(typeof e!="object"||e===null)return!1;let t=e;return!(typeof t.key!="string"||typeof t.label!="string"||typeof t.value!="string"||!/^[\w-]+$/.test(t.key)||t.icon!==void 0&&typeof t.icon!="string")}function j_(e){return e.length>0&&/^[\w-]+$/.test(e)}function um(e){return Un().byId(e)!==void 0}function H_(e){return(0,cm.createHash)("sha256").update(e,"utf-8").digest("hex")}var cm,LL,M_,jr=y(()=>{"use strict";cm=require("node:crypto");w();gs();LL=f("ReferenceStore");M_="<!-- jolli:auto-note -->"});function U_(e){return`${e.source}:${e.skill}`}function B_(e,t){if(e===void 0)return t;let n=e.usage===void 0||t.usage===void 0?e.usage??t.usage:{input:e.usage.input+t.usage.input,output:e.usage.output+t.usage.output,cached:e.usage.cached+t.usage.cached,confidence:e.usage.confidence==="attributed"&&t.usage.confidence==="attributed"?"attributed":"estimated"},r=[e,t].filter(l=>l.usage!==void 0),o=J_(r),{usageBySession:s,supersededDocIds:i,...a}=e;return{...a,invocationCount:e.invocationCount+t.invocationCount,...n!==void 0?{usage:n}:{},...o!==void 0?{usageBySession:o}:{},...e.detection==="heuristic"||t.detection==="heuristic"?{detection:"heuristic"}:{},...e.jolliDocId===void 0&&t.jolliDocId!==void 0?{jolliDocId:t.jolliDocId,jolliDocUrl:t.jolliDocUrl}:{},...W_(e,t)}}function W_(e,t){let n=new Set([...e.supersededDocIds??[],...t.supersededDocIds??[]]);e.jolliDocId!==void 0&&t.jolliDocId!==void 0&&n.add(t.jolliDocId);let r=e.jolliDocId??t.jolliDocId;return r!==void 0&&n.delete(r),n.size>0?{supersededDocIds:[...n]}:{}}function hs(e){if(e.supersededDocIds===void 0)return e;let{supersededDocIds:t,...n}=e;return n}function J_(e){if(e.length===0)return;let t=[];for(let r of e){if(r.usageBySession===void 0)return;t.push(r.usageBySession)}let n={};for(let r of t)for(let[o,s]of Object.entries(r)){let i=n[o];n[o]=i===void 0?s:{input:i.input+s.input,cached:i.cached+s.cached,output:i.output+s.output,confidence:i.confidence==="attributed"&&s.confidence==="attributed"?"attributed":"estimated"}}return n}function ys(e){let t=new Map;for(let r of e)t.has(r.archivedKey)||t.set(r.archivedKey,r);let n=new Map;for(let r of t.values()){let o=U_(r);n.set(o,B_(n.get(o),r))}return[...n.values()]}var sl=y(()=>{"use strict"});var jL,pm=y(()=>{"use strict";w();jL=f("SkillStore")});async function al(e){let t=G(e);return await(0,be.mkdir)(t,{recursive:!0}),t}function Z(){return(0,Ur.join)((0,fm.homedir)(),".jolli","jollimemory")}async function tn(e){let t=(0,Ur.join)(e,gm);try{let n=await(0,be.readFile)(t,"utf-8"),r=JSON.parse(n);return q_(r)}catch{return Bn.debug("No config file found in %s, using defaults",e),{}}}function q_(e){if(e.syncEnabled===void 0)return e;let{syncEnabled:t,...n}=e;return n.autoSyncEnabled===void 0?{...n,autoSyncEnabled:t}:n}function K_(e,t){return!("localAgentTool"in t)||"localAgentPath"in t||(e.localAgentTool??"claude-code")===(t.localAgentTool??"claude-code")||e.localAgentPath===void 0?t:(Bn.info("Clearing localAgentPath (was set for %s, switching to %s)",e.localAgentTool??"claude-code",t.localAgentTool),{...t,localAgentPath:void 0})}async function Br(e,t){await La(t,async()=>{await hm(e,t)}),Bn.info("Config saved to %s",t)}async function ws(e){return V_(e,Z())}async function V_(e,t){return La(t,async()=>{let{update:n,result:r}=e(await tn(t));return n!==null&&(await hm(n,t),Bn.info("Config saved to %s",t)),r})}async function hm(e,t){let n=await tn(t),r={...n,...K_(n,e)};await v((0,Ur.join)(t,gm),JSON.stringify(r,null,"	"))}async function de(){return tn(Z())}async function ft(e){return Br(e,Z())}async function ym(){return Y_(Z())}async function Y_(e){let t=await tn(e);if(t.installId)return{installId:t.installId,created:!1};let n=(0,Ur.join)(e,G_),r=(0,Hr.randomUUID)();await(0,be.mkdir)(e,{recursive:!0});let o,s,i=`${n}.${(0,Hr.randomUUID)()}.tmp`;try{await(0,be.writeFile)(i,r,{flag:"wx"});try{await(0,be.link)(i,n),o=r,s=!0}catch{o=await mm(n,r),s=!1}}catch(a){Bn.warn("could not stage the install-id sentinel: %s",R(a)),o=await mm(n,r),s=!1}finally{await(0,be.rm)(i,{force:!0}).catch(()=>{})}return t.installId!==o&&await Br({installId:o},e).catch(a=>{Bn.warn("could not persist the install id: %s",R(a))}),{installId:o,created:s}}async function mm(e,t){try{let n=(await(0,be.readFile)(e,"utf-8")).trim();return n.length>0?n:t}catch{return t}}function il(e,t){let n={...e},r=!1;for(let o of t)o in n&&(delete n[o],r=!0);return{value:n,changed:r}}function wm(e){let t=!1,n={};for(let[i,a]of Object.entries(e.plans??{})){if(a.ignored===!0){t=!0;continue}let l=il(a,X_);l.changed&&(t=!0),n[i]=l.value}let r;if(e.notes!==void 0){r={};for(let[i,a]of Object.entries(e.notes)){if(a.ignored===!0){t=!0;continue}let l=il(a,z_);l.changed&&(t=!0),r[i]=l.value}}let o;if(e.references!==void 0){o={};for(let[i,a]of Object.entries(e.references)){let l=a;if(l.ignored===!0||l.commitHash!=null||l.contentHashAtCommit!==void 0){t=!0;continue}let c=il(a,Q_);c.changed&&(t=!0),o[i]=c.value}}return{registry:{version:1,plans:n,...r!==void 0?{notes:r}:{},...o!==void 0?{references:o}:{},...e.skills!==void 0?{skills:e.skills}:{}},changed:t}}var Hr,be,fm,Ur,Bn,gm,G_,n0,r0,o0,s0,X_,z_,Q_,ue=y(()=>{"use strict";Hr=require("node:crypto"),be=require("node:fs/promises"),fm=require("node:os"),Ur=require("node:path");w();ps();Q();Qe();jr();sl();pm();Bn=f("SessionTracker"),gm="config.json",G_="install-id",n0=2880*60*1e3;r0=2880*60*1e3,o0=10080*60*1e3,s0=(0,Hr.randomBytes)(4).toString("hex"),X_=["ignored","branch","editCount"],z_=["ignored","branch"],Q_=["ignored","branch","commitHash","contentHashAtCommit"]});function et(e=process.versions.node){let t=/^(\d+)\.(\d+)/.exec(e);if(!t)return!1;let n=Number.parseInt(t[1],10),r=Number.parseInt(t[2],10);return n>gt.major?!0:n<gt.major?!1:r>=gt.minor}function $t(e){let t=e,n=t?.message??String(e),r=t?.code;return r==="ENOENT"?null:r==="EACCES"||r==="EPERM"?{kind:"permission",message:n}:/SQLITE_CORRUPT|SQLITE_NOTADB|file is not a database/i.test(n)?{kind:"corrupt",message:n}:/SQLITE_BUSY|SQLITE_LOCKED|database is locked/i.test(n)?{kind:"locked",message:n}:/no such table|no such column/i.test(n)?{kind:"schema",message:n}:/SQLITE_CANTOPEN|unable to open/i.test(n)?{kind:"permission",message:n}:{kind:"unknown",message:n}}var gt,Ue=y(()=>{"use strict";gt={major:22,minor:13}});function tk(){return ek.width}async function Wn(e,t,n=tk()){let r=new Array(e.length),o=0,s=Math.max(1,Math.min(n,e.length)),i=Array.from({length:s},async()=>{for(;;){let a=o++;if(a>=e.length)return;r[a]=await t(e[a],a)}});return await Promise.all(i),r}var dl,ek,Jn=y(()=>{"use strict";dl=class{constructor(){this.slots=8;this.bytesCap=67108864;this.slotsInUse=0;this.bytesInUse=0;this.waiting=[]}get width(){return this.slots}configure(t){t.slots!==void 0&&(this.slots=Math.max(1,Math.floor(t.slots))),t.bytesInFlight!==void 0&&(this.bytesCap=Math.max(0,Math.floor(t.bytesInFlight))),this.pump()}reset(){this.slots=8,this.bytesCap=67108864,this.pump()}async run(t,n){let r=await this.acquire(Math.max(0,t));try{return await n()}finally{this.slotsInUse--,this.bytesInUse-=r,this.pump()}}clamp(t){return Math.min(t,this.bytesCap)}fits(t){return this.slotsInUse<this.slots&&this.bytesInUse+this.clamp(t)<=this.bytesCap}acquire(t){return this.waiting.length===0&&this.fits(t)?Promise.resolve(this.take(t)):new Promise(n=>{this.waiting.push({want:t,wake:n})})}take(t){let n=this.clamp(t);return this.slotsInUse++,this.bytesInUse+=n,n}pump(){for(;this.waiting.length>0&&this.fits(this.waiting[0].want);){let t=this.waiting.shift();t.wake(this.take(t.want))}}},ek=new dl});function _f(e){if((0,Tf.platform)()==="win32")try{Hu("attrib",["+h",e],{timeout:2e3})}catch{}}var Tf,kf=y(()=>{"use strict";Tf=require("node:os");ke()});var Rf,z,ve,Yn,fe,Is=y(()=>{"use strict";Rf=require("node:crypto"),z=require("node:fs"),ve=require("node:path");w();kf();ae();Yn=f("MetadataManager"),fe=class e{constructor(t){this.jolliDir=t;this.manifestPath=(0,ve.join)(t,"manifest.json"),this.branchesPath=(0,ve.join)(t,"branches.json"),this.configPath=(0,ve.join)(t,"config.json"),this.migrationPath=(0,ve.join)(t,"migration.json"),this.indexPath=(0,ve.join)(t,"index.json")}ensure(){(0,z.mkdirSync)(this.jolliDir,{recursive:!0})!==void 0&&_f(this.jolliDir),(0,z.existsSync)(this.manifestPath)||this.atomicWrite(this.manifestPath,JSON.stringify({version:1,files:[]},null,"	")),(0,z.existsSync)(this.branchesPath)||this.atomicWrite(this.branchesPath,JSON.stringify({version:1,mappings:[]},null,"	")),(0,z.existsSync)(this.configPath)||this.atomicWrite(this.configPath,JSON.stringify({version:1,sortOrder:"date"},null,"	"))}readManifest(){return this.readJson(this.manifestPath)??{version:1,files:[]}}updateManifest(t){let n=this.readManifest(),r=n.files.filter(o=>o.fileId!==t.fileId);r.push(t),this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:r},null,"	")),Yn.info("Manifest updated: %s (%s)",t.path,t.type)}removeFromManifest(t){let n=this.readManifest(),r=n.files.filter(o=>o.fileId!==t);return r.length===n.files.length?!1:(this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:r},null,"	")),!0)}unregisterFilesByType(t){let n=this.readManifest(),r=n.files.filter(s=>s.type!==t),o=n.files.length-r.length;return o===0?0:(this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:r},null,"	")),Yn.info("Manifest unregistered %d entries of type=%s",o,t),o)}replaceFiles(t){let n=this.readManifest();this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:[...t]},null,"	"))}findByPath(t){return this.readManifest().files.find(n=>n.path===t)}findById(t){return this.readManifest().files.find(n=>n.fileId===t)}updatePath(t,n){let r=this.readManifest();if(!r.files.find(i=>i.fileId===t))return!1;let s=r.files.map(i=>i.fileId===t?{...i,path:n}:i);return this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:s},null,"	")),!0}resolveFolderForBranch(t){let n=this.readBranches(),r=n.mappings.find(a=>a.branch===t);if(r)return r.folder;let o=e.transcodeBranchName(t),s={folder:o,branch:t,createdAt:new Date().toISOString()},i={...n,mappings:[...n.mappings,s]};return this.atomicWrite(this.branchesPath,JSON.stringify(i,null,"	")),Yn.info("Branch mapping created: %s \u2192 %s",t,o),o}removeBranchMapping(t){let n=this.readBranches(),r=n.mappings.filter(o=>o.branch!==t);return r.length===n.mappings.length?!1:(this.atomicWrite(this.branchesPath,JSON.stringify({...n,mappings:r},null,"	")),Yn.info("Branch mapping removed: %s (no remaining head)",t),!0)}renameBranchFolder(t,n){let r=this.readBranches(),o=r.mappings.map(l=>l.folder===t?{...l,folder:n}:l);this.atomicWrite(this.branchesPath,JSON.stringify({...r,mappings:o},null,"	"));let s=this.readManifest(),i=0,a=s.files.map(l=>l.path.startsWith(`${t}/`)?(i++,{...l,path:l.path.replace(`${t}/`,`${n}/`)}):l);return i>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...s,files:a},null,"	")),i}removeBranchFolder(t){let n=this.readBranches();this.atomicWrite(this.branchesPath,JSON.stringify({...n,mappings:n.mappings.filter(i=>i.folder!==t)},null,"	"));let r=this.readManifest(),o=r.files.filter(i=>!i.path.startsWith(`${t}/`)),s=r.files.length-o.length;return s>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:o},null,"	")),s}unregisterBranches(t){let n=new Set(t);if(n.size===0)return 0;let r=this.readBranches(),o=r.mappings.filter(i=>!n.has(i.branch)),s=r.mappings.length-o.length;return s===0?0:(this.atomicWrite(this.branchesPath,JSON.stringify({...r,mappings:o},null,"	")),Yn.info("Branch mappings unregistered: %d",s),s)}readBranches(){return this.readJson(this.branchesPath)??{version:1,mappings:[]}}listBranchMappings(){return this.readBranches().mappings}folderToBranch(t){try{return this.listBranchMappings().find(n=>n.folder===t)?.branch??t}catch{return t}}listIndexHeads(){let t=this.readJson(this.indexPath);return!t||!Array.isArray(t.entries)?[]:t.entries.filter(n=>typeof n?.commitHash=="string"&&typeof n.branch=="string"&&(n.parentCommitHash===null||typeof n.parentCommitHash=="string")&&n.parentCommitHash===null)}readIndex(){return this.readJson(this.indexPath)}readConfig(){return this.readJson(this.configPath)??{version:1,sortOrder:"date"}}saveConfig(t){this.atomicWrite(this.configPath,JSON.stringify(t,null,"	"))}readMigrationState(){return this.readJson(this.migrationPath)}saveMigrationState(t){this.atomicWrite(this.migrationPath,JSON.stringify(t,null,"	"))}reconcile(t){let n=this.readManifest();if(n.files.length===0||!n.files.some(a=>!(0,z.existsSync)((0,ve.join)(t,a.path))))return 0;let o=new Map;try{this.walkDir(t,t,o)}catch{}let s=0,i=[];for(let a of n.files){let l=(0,ve.join)(t,a.path);if((0,z.existsSync)(l))i.push(a);else{let c=o.get(a.fingerprint);c&&c!==a.path?(i.push({...a,path:c}),s++):(Yn.warn("Manifest entry '%s' (id=%s) not found on disk \u2014 keeping entry to avoid data loss",a.path,a.fileId),i.push(a))}}return s>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:i},null,"	")),s}walkDir(t,n,r){for(let o of(0,z.readdirSync)(t,{withFileTypes:!0})){if(o.name.startsWith("."))continue;let s=(0,ve.join)(t,o.name);if(o.isDirectory())this.walkDir(s,n,r);else if(o.name.endsWith(".md"))try{let i=(0,z.readFileSync)(s,"utf-8"),a=e.sha256(i);r.set(a,He((0,ve.relative)(n,s)))}catch{}}}static transcodeBranchName(t){let n=t.replace(/[/\\:*?~^]/g,"-");return n=n.replace(/-{3,}/g,"-"),n=n.replace(/\.\./g,"--"),n=n.replace(/^[.-]+|[.-]+$/g,""),n||"default"}static sha256(t){return(0,Rf.createHash)("sha256").update(t,"utf-8").digest("hex")}readJson(t){if(!(0,z.existsSync)(t))return null;try{return JSON.parse((0,z.readFileSync)(t,"utf-8"))}catch{return null}}atomicWrite(t,n){let r=(0,ve.dirname)(t);(0,z.mkdirSync)(r,{recursive:!0});let o=`${t}.tmp`;(0,z.writeFileSync)(o,n,"utf-8"),(0,z.renameSync)(o,t)}}});function iR(e,t){if(process.env.VITEST)return null;let n=t?`${t}@${e}`:e;try{return Ee("ssh",["-G",n],{encoding:"utf-8",timeout:rR,stdio:["ignore","pipe","pipe"]})}catch(r){return nR.debug("ssh -G %s failed: %s",n,r instanceof Error?r.message:String(r)),null}}function Af(e,t){let n=new RegExp(`^${t}\\s+(\\S+)`,"i");for(let r of e.split(/\r?\n/)){let o=r.match(n);if(o?.[1])return o[1]}return null}function Xn(e,t){if(!e)return{host:e,port:"",endpointRemapped:!1};let n=`${t??""}\0${e}`,r=vf.get(n);if(r!==void 0)return r;let o=e,s="",i=sR(e,t);if(i){let c=Af(i,"hostname");c&&(o=c);let d=Af(i,"port");d&&(s=d)}let a=oR.get(o.toLowerCase()),l=a?{host:a,port:"",endpointRemapped:!0}:{host:o,port:s,endpointRemapped:!1};return vf.set(n,l),l}function zn(e){return e.includes(":")&&!e.startsWith("[")?`[${e}]`:e}var nR,rR,oR,vf,sR,Pl=y(()=>{"use strict";w();ke();nR=f("SshAliasResolver"),rR=5e3,oR=new Map([["ssh.github.com","github.com"],["altssh.gitlab.com","gitlab.com"],["altssh.bitbucket.org","bitbucket.org"]]),vf=new Map,sR=iR});function xf(){return(0,oe.join)((0,Nf.homedir)(),"Documents","jolli")}function Ll(e){return e?lR(e)?e:(aR.warn("Invalid customPath '%s': must be absolute and not contain '..'. Falling back to default.",e),xf()):xf()}function lR(e){return e?(0,oe.isAbsolute)(e)&&!e.includes(".."):!0}function Pf(e,t,n){let r=Ll(n),o=(0,oe.join)(r,e);if(!(0,Ft.existsSync)(o)){let i=Hf(r,e,t).match;return i||(Dl(o,e,t),o)}let s=Bf(o);return s&&$f(s,t,e)?o:s&&Uf(o,s)?(Dl(o,e,t),o):mR(r,e,t)}function Of(e){let t=$l(e,["config","--get","remote.origin.url"]);if(t){let r=t.match(/\/([^/]+?)(?:\.git)?$/);if(r?.[1])return r[1]}let n=Df(e);return n?(0,oe.basename)(n):(0,oe.basename)(e)||"unknown"}function Df(e){let t=$l(e,["rev-parse","--git-common-dir"]);if(!t)return null;let n=(0,oe.isAbsolute)(t)?t:(0,oe.join)(e,t),r=(0,oe.dirname)(n);return r&&r!=="/"&&r!=="."?r:null}function cR(e,t){if(!(0,oe.basename)(e))return{claimable:!1,blocker:"not-a-project"};let n=Df(e);if(!n)return{claimable:!1,blocker:"not-a-project"};let r;try{r=Ll(t)}catch{return{claimable:!1,blocker:"unresolvable-folder"}}return Ta(r,n)?{claimable:!1,blocker:"folder-inside-repo"}:{claimable:!0}}function Ml(e,t){return cR(e,t).claimable}function Lf(){let e=Number(process.env.JOLLI_GIT_CMD_TIMEOUT_MS);return Number.isFinite(e)&&e>0?e:3e4}function dR(){return Math.min(Lf(),5e3)}function uR(e){return typeof e=="object"&&e!==null&&e.code==="ETIMEDOUT"}function Cf(e,t,n=Lf()){return Ee("git",t,{cwd:e,encoding:"utf-8",timeout:n,stdio:["ignore","pipe","pipe"]}).trim()||null}function $l(e,t){try{return Cf(e,t)}catch(n){if(!uR(n))return null;try{return Cf(e,t,dR())}catch{return null}}}function Mf(e){return $l(e,["remote","get-url","origin"])}function $f(e,t,n){return e.remoteUrl&&t?If(e.remoteUrl)===If(t):!e.remoteUrl&&!t?e.repoName==null||e.repoName===n:!1}function If(e){return jf(e).replace(/\/+$/,"").replace(/\.git$/,"").toLowerCase()}function Yr(e,t){return pR.has(e)?t:""}function jf(e){let t=e.match(/^(?:git\+)?ssh:\/\/(?:([^@/]+)@)?([^/:]+)(?::(\d+))?\/(.+)$/i);if(t){let o=Xn(t[2],t[1]||void 0),s=o.endpointRemapped?"":t[3]??o.port,i=Yr(o.host.toLowerCase(),s);return`https://${zn(o.host)}${Ol(i,"22")}/${t[4]}`}let n=e.match(/^git:\/\/([^/:]+)(?::(\d+))?\/(.+)$/i);if(n)return`https://${n[1]}${Ol(n[2],"9418")}/${n[3]}`;let r=e.match(/^([^@/:]+)@([^/:]+):(.+)$/);if(r){let o=Xn(r[2],r[1]||void 0),s=Yr(o.host.toLowerCase(),o.port);return`https://${zn(o.host)}${Ol(s,"22")}/${r[3]}`}return e}function Ol(e,t){return!e||e===t?"":`:${e}`}function Hf(e,t,n){let r=null,o=null,s=null;for(let i=2;i<=99;i++){let a=(0,oe.join)(e,`${t}-${i}`);if(!(0,Ft.existsSync)(a)){s===null&&(s=a);continue}let l=Bf(a);if(l&&$f(l,n,t)){r=a;break}l&&o===null&&Uf(a,l)&&(o=a)}return{match:r,stub:o,firstUnused:s}}function mR(e,t,n){let r=Hf(e,t,n);if(r.match)return r.match;let o=r.stub??r.firstUnused??(0,oe.join)(e,`${t}-${Date.now()}`);return Dl(o,t,n),o}function Dl(e,t,n){if(V())return;let r=new fe((0,oe.join)(e,".jolli"));r.ensure();let o=r.readConfig();r.saveConfig({...o,remoteUrl:n??void 0,repoName:t})}function Uf(e,t){return t.remoteUrl==null&&t.repoName==null}function Bf(e){let t=(0,oe.join)(e,".jolli","config.json");if(!(0,Ft.existsSync)(t))return null;try{return JSON.parse((0,Ft.readFileSync)(t,"utf-8"))}catch{return null}}var Ft,Nf,oe,aR,Ff,pR,Xr=y(()=>{"use strict";Ft=require("node:fs"),Nf=require("node:os"),oe=require("node:path");w();ke();Is();ae();Pl();aR=f("KBPathResolver");Ff=new Set(["github.com","gitlab.com","bitbucket.org"]),pR=new Set(["github.com","gitlab.com","bitbucket.org"])});async function Bl(e){let t=await Y(["config","--get","remote.origin.url"],e),n=t.exitCode===0?t.stdout.trim():"";return n.length===0?zr(e):eg(n,e)}function eg(e,t){let n=e.trim();if(n.length===0)return zr(t);let r=/^([A-Za-z0-9_.+-]+@)([^:/\s]+):(.+)$/.exec(n);if(r&&!n.includes("://")){let i=Xn(r[2],r[1].slice(0,-1)||void 0),a=i.host.toLowerCase(),l=Qf(a,zf(r[3])),c=Zf("ssh",Yr(a,i.port));return`https://${zn(a)}${c}/${l}`}let o;try{o=new URL(n)}catch{return zr(t)}let s=o.protocol.replace(/:$/,"").toLowerCase();if(s==="ssh"||s==="git"||s==="http"||s==="https"){let a=s==="ssh"?Xn(o.hostname,o.username||void 0):{host:o.hostname,port:"",endpointRemapped:!1},l=a.host.toLowerCase(),c=Qf(l,zf(o.pathname.replace(/^\/+/,""))),d=a.endpointRemapped?"":o.port!==""?o.port:a.port,u=s==="ssh"?Yr(l,d):d,p=Zf(s,u);return`https://${zn(l)}${p}/${c}`}return zr(s==="file"?o.pathname:t)}function zr(e){let t=On(He(e));return t.length===0?"file:///":t.startsWith("/")?`file://${t}`:`file:///${t}`}function zf(e){let t=On(e);return t.toLowerCase().endsWith(".git")&&(t=t.slice(0,-4)),On(t)}function Qf(e,t){return Ff.has(e)?t.toLowerCase():t}function Zf(e,t){return t.length===0?"":e==="ssh"||e==="git"?t===ER[e]?"":`:${t}`:`:${t}`}var ER,Ls=y(()=>{"use strict";Se();Xr();ae();Pl();ER={ssh:"22",git:"9418"}});function Wl(){return"codex-plugin"}var jt,Qn=y(()=>{"use strict";jt="codex-plugin/1.0.5"});function j(e,t,n,r){if(!fg.test(t))throw new Error(`unsafe table name in migration: ${t}`);if(!fg.test(n))throw new Error(`unsafe column name in migration: ${n}`);if(!jR.test(r))throw new Error(`unsafe column declaration in migration: ${r}`);e.prepare("SELECT name FROM pragma_table_info(?)").all(t).some(s=>s.name===n)||e.exec(`ALTER TABLE ${t} ADD COLUMN ${n} ${r};`)}var F,fg,jR,B=y(()=>{"use strict";F=(e,t)=>({name:e,sql:t,run:n=>n.exec(t)}),fg=/^[A-Za-z_][A-Za-z0-9_]*$/,jR=/^[A-Za-z0-9_ '.-]+$/});var HR,UR,gg,hg=y(()=>{"use strict";B();HR=`
-- \u2500\u2500 Metadata \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
CREATE TABLE IF NOT EXISTS schema_meta (key TEXT PRIMARY KEY, value TEXT) STRICT;

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
CREATE TABLE IF NOT EXISTS repos (
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
CREATE TABLE IF NOT EXISTS sessions (
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
CREATE INDEX IF NOT EXISTS ix_sessions_repo_time ON sessions(repo_id, updated_at_ms);
CREATE INDEX IF NOT EXISTS ix_sessions_time ON sessions(updated_at_ms);
CREATE INDEX IF NOT EXISTS ix_sessions_source ON sessions(source);

-- Per-session, per-model split. A session can switch models mid-stream, so
-- sessions.model is a display convenience and THIS is authoritative.
--
-- Keyed on session_event_id rather than an integer: measured at 24 and 114 rows,
-- so the key-shape work that paid for itself on the commits chain would buy
-- nothing here while touching StopHook, the VS Code tick and two projections.
CREATE TABLE IF NOT EXISTS session_model_usage (
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
CREATE INDEX IF NOT EXISTS ix_smu_model ON session_model_usage(model);

CREATE TABLE IF NOT EXISTS session_tool_use (
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
CREATE INDEX IF NOT EXISTS ix_stu_kind ON session_tool_use(kind);
CREATE INDEX IF NOT EXISTS ix_stu_server ON session_tool_use(server);

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
CREATE TABLE IF NOT EXISTS commits (
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
CREATE INDEX IF NOT EXISTS ix_commits_repo_time ON commits(repo_id, committed_at_ms);
CREATE INDEX IF NOT EXISTS ix_commits_branch ON commits(branch);





-- Branch-name dictionary. Measured: 87 distinct names referenced by 102,767
-- rows, average name length 27.4 bytes, so the names were repeating tens of
-- thousands of times \u2014 one of them 2,098 times by itself.
CREATE TABLE IF NOT EXISTS branches (
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
CREATE TABLE IF NOT EXISTS commit_branches (
  commit_id INTEGER NOT NULL REFERENCES commits(id)  ON DELETE CASCADE,
  branch_id INTEGER NOT NULL REFERENCES branches(id) ON DELETE CASCADE,
  PRIMARY KEY (commit_id, branch_id)
) STRICT, WITHOUT ROWID;
CREATE INDEX IF NOT EXISTS ix_cb_branch ON commit_branches(branch_id, commit_id);

CREATE TABLE IF NOT EXISTS commit_files (
  commit_id  INTEGER NOT NULL REFERENCES commits(id) ON DELETE CASCADE,
  path       TEXT NOT NULL,
  insertions INTEGER,
  deletions  INTEGER,
  PRIMARY KEY (commit_id, path)
) STRICT, WITHOUT ROWID;
CREATE INDEX IF NOT EXISTS ix_commit_files_path ON commit_files(path);

-- \u2500\u2500 Workspace \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- Transient, latest-wins. A detached HEAD has no branch name; branch_key holds
-- the '' sentinel so the PK stays usable (SQLite treats every NULL as distinct,
-- which would let detached-HEAD rows accumulate without bound).
CREATE TABLE IF NOT EXISTS worktree_status (
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
CREATE TABLE IF NOT EXISTS events_raw (
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
CREATE INDEX IF NOT EXISTS ix_events_pending ON events_raw(projection_status, seq);

-- \u2500\u2500 Gap-recovery cursors \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- A fast path for append-only history plus a rewrite detector \u2014 NOT the
-- correctness mechanism. Adds/changes are handled by idempotent UPSERT and
-- deletes by set reconciliation, because a high-water mark alone misses
-- out-of-order updates, history rewrites and deletions.
CREATE TABLE IF NOT EXISTS ingest_cursors (
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
`,UR=`
-- Per-repo control state (JSON values): 'orphan-import', 'cutover',
-- 'v5-migration' (the raw bytes of the orphan's schema-v5-migration.json \u2014 a
-- completed-marker whose absence would make the v5 migration re-run), ...
-- Kept out of schema_meta, which is a whole-database singleton. A key-value
-- table rather than columns on \`repos\` because \`cutover\` has to be written in
-- the same transaction as the data it certifies, and because adding a column
-- after release is a cross-surface release event while adding a marker is an
-- INSERT.
CREATE TABLE IF NOT EXISTS repo_state (
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
CREATE TABLE IF NOT EXISTS memories (
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
CREATE INDEX IF NOT EXISTS ix_mem_root   ON memories(repo_id, root_hash);
CREATE INDEX IF NOT EXISTS ix_mem_branch ON memories(repo_id, branch, commit_date_ms);
CREATE INDEX IF NOT EXISTS ix_mem_date   ON memories(repo_id, commit_date_ms);
CREATE INDEX IF NOT EXISTS ix_mem_ticket ON memories(repo_id, ticket_id);

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
CREATE TABLE IF NOT EXISTS memory_topics (
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
CREATE INDEX IF NOT EXISTS ix_mtopic_category ON memory_topics(repo_id, category);

-- \u2500\u2500 commit aliases (index.json's third top-level key) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- A rewritten SHA -> the live memory with the same tree hash. Step 2 of
-- getSummary()'s four-step lookup. Tree-hash matching costs a git subprocess
-- per candidate, so a computed alias is kept forever; in index.json every
-- rebuild path had to remember to copy them across (one of five did not), and a
-- table has no rebuild to forget.
CREATE TABLE IF NOT EXISTS commit_aliases (
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
CREATE TABLE IF NOT EXISTS transcripts (
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
CREATE TABLE IF NOT EXISTS memory_transcripts (
  repo_id       INTEGER NOT NULL,
  commit_hash   TEXT NOT NULL,
  transcript_id TEXT NOT NULL,
  PRIMARY KEY (repo_id, commit_hash, transcript_id),
  FOREIGN KEY (repo_id, commit_hash)
    REFERENCES memories(repo_id, commit_hash) ON DELETE CASCADE,
  FOREIGN KEY (repo_id, transcript_id)
    REFERENCES transcripts(repo_id, transcript_id) ON DELETE CASCADE
) STRICT;
CREATE INDEX IF NOT EXISTS ix_mt_transcript ON memory_transcripts(repo_id, transcript_id);

-- Compression makes the sessions invisible to SQL, so the queryable fields are
-- projected out. Uncompressed it would still need this: one session lookup
-- would otherwise parse megabytes of transcript JSON.
CREATE TABLE IF NOT EXISTS transcript_sessions (
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
CREATE INDEX IF NOT EXISTS ix_ts_session ON transcript_sessions(repo_id, session_id, source);

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
CREATE TABLE IF NOT EXISTS context_kinds (kind TEXT PRIMARY KEY) STRICT;
INSERT OR IGNORE INTO context_kinds (kind) VALUES ('plan'), ('note'), ('reference');
CREATE TABLE IF NOT EXISTS context (
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
CREATE TABLE IF NOT EXISTS plan_progress (
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
CREATE TABLE IF NOT EXISTS topic_pages (
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
CREATE TABLE IF NOT EXISTS topic_source_refs (
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
CREATE INDEX IF NOT EXISTS ix_tsr_ref ON topic_source_refs(repo_id, ref_type, ref_id);

CREATE TABLE IF NOT EXISTS topic_processed_sources (
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
`,gg=F("BASELINE_DDL",HR+`
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
CREATE TRIGGER IF NOT EXISTS repos_no_delete BEFORE DELETE ON repos
BEGIN SELECT RAISE(ABORT, 'repos are never deleted: set disabled_at instead'); END;
`+UR)});var yg,wg=y(()=>{"use strict";B();yg=F("RECALL_RECEIPTS_DDL",`
CREATE TABLE IF NOT EXISTS recall_receipts (
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
CREATE INDEX IF NOT EXISTS ix_recall_receipts_repo_at ON recall_receipts(repo_id, at_ms);
`)});var Eg,Sg=y(()=>{"use strict";B();Eg=F("SKILL_CONTEXT_KIND_DDL",`
INSERT OR IGNORE INTO context_kinds (kind) VALUES ('skill');
`)});var bg,Tg=y(()=>{"use strict";B();bg={name:"EVENT_FAILED_KIND_DDL",run:e=>j(e,"events_raw","failed_kind","TEXT")}});var _g,kg=y(()=>{"use strict";B();_g={name:"TOOL_CALL_TIME_DDL",run:e=>j(e,"session_tool_use","last_call_at_ms","INTEGER")}});var Rg,vg=y(()=>{"use strict";B();Rg=F("SCHEMA_MIGRATIONS_DDL",`
CREATE TABLE IF NOT EXISTS schema_migrations (
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
CREATE INDEX IF NOT EXISTS ix_schema_migrations_name ON schema_migrations(name, seq);
`)});var Ag,xg=y(()=>{"use strict";B();Ag=F("REPOS_DELETE_ALLOWED_DDL",`
DROP TRIGGER IF EXISTS repos_no_delete;
`)});function YR(e){j(e,"sessions","written_at_ms","INTEGER NOT NULL DEFAULT 0"),j(e,"session_model_usage","updated_at_ms","INTEGER NOT NULL DEFAULT 0"),j(e,"session_tool_use","updated_at_ms","INTEGER NOT NULL DEFAULT 0"),j(e,"recall_receipts","updated_at_ms","INTEGER NOT NULL DEFAULT 0"),j(e,"commits","written_at_ms","INTEGER NOT NULL DEFAULT 0"),e.exec(BR),e.exec(JR),e.exec(GR),e.exec(qR),e.exec(VR),e.exec(KR)}var BR,WR,JR,GR,qR,KR,VR,Cg,Ig=y(()=>{"use strict";B();BR=`
CREATE TABLE IF NOT EXISTS session_usage_events (
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
CREATE INDEX IF NOT EXISTS ix_sue_at ON session_usage_events(responded_at_ms);
CREATE INDEX IF NOT EXISTS ix_sue_sync ON session_usage_events(updated_at_ms);
`,WR=`
CREATE INDEX IF NOT EXISTS ix_stats_daily_day ON stats_daily(tz, day);
`,JR=`
CREATE TABLE IF NOT EXISTS stats_daily (
  repo_id       INTEGER NOT NULL,
  tz            TEXT NOT NULL,
  day           TEXT NOT NULL,
  kind          TEXT NOT NULL,
  series_key    TEXT NOT NULL,
  value         REAL NOT NULL,
  cost_usd      REAL NOT NULL DEFAULT 0,
  built_at_ms   INTEGER NOT NULL,
  updated_at_ms INTEGER NOT NULL,
  PRIMARY KEY (repo_id, tz, day, kind, series_key)
) STRICT, WITHOUT ROWID;
${WR}
`,GR=`
CREATE INDEX IF NOT EXISTS ix_sessions_written ON sessions(written_at_ms);
CREATE INDEX IF NOT EXISTS ix_smu_sync ON session_model_usage(updated_at_ms);
CREATE INDEX IF NOT EXISTS ix_stu_sync ON session_tool_use(updated_at_ms);
CREATE INDEX IF NOT EXISTS ix_recall_receipts_sync ON recall_receipts(updated_at_ms);
CREATE INDEX IF NOT EXISTS ix_commits_written ON commits(written_at_ms);
CREATE INDEX IF NOT EXISTS ix_mem_written ON memories(written_at_ms);
`,qR=`
CREATE INDEX IF NOT EXISTS ix_sessions_keyset ON sessions(written_at_ms, event_id);
CREATE INDEX IF NOT EXISTS ix_smu_keyset ON session_model_usage(updated_at_ms, session_event_id, model);
CREATE INDEX IF NOT EXISTS ix_stu_keyset ON session_tool_use(updated_at_ms, session_event_id, tool_name, kind);
CREATE INDEX IF NOT EXISTS ix_recall_receipts_keyset ON recall_receipts(updated_at_ms, receipt_id);
`,KR=`
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
`,VR=`
UPDATE sessions        SET written_at_ms = updated_at_ms WHERE written_at_ms = 0;
UPDATE recall_receipts SET updated_at_ms = at_ms         WHERE updated_at_ms = 0;
UPDATE session_model_usage
   SET updated_at_ms = COALESCE((SELECT s.updated_at_ms FROM sessions s
                                  WHERE s.event_id = session_model_usage.session_event_id), 0)
 WHERE updated_at_ms = 0;
UPDATE session_tool_use
   SET updated_at_ms = COALESCE((SELECT s.updated_at_ms FROM sessions s
                                  WHERE s.event_id = session_tool_use.session_event_id), 0)
 WHERE updated_at_ms = 0;
`;Cg={name:"SESSION_STATS_SYNC_DDL",run:YR}});var Ng,Pg=y(()=>{"use strict";B();Ng=F("SESSION_ACTIVITY_DDL",`
CREATE TABLE IF NOT EXISTS session_activity (
  session_event_id TEXT NOT NULL REFERENCES sessions(event_id) ON DELETE CASCADE,
  bucket_ms        INTEGER NOT NULL,
  recorded_at_ms   INTEGER NOT NULL,
  PRIMARY KEY (session_event_id, bucket_ms)
) STRICT;
CREATE INDEX IF NOT EXISTS ix_activity_bucket ON session_activity(bucket_ms);
CREATE INDEX IF NOT EXISTS ix_activity_recorded ON session_activity(recorded_at_ms);
`)});var Og,Dg=y(()=>{"use strict";B();Og={name:"SKILL_TOKEN_USAGE_DDL",run:e=>{j(e,"session_tool_use","input_tokens","INTEGER"),j(e,"session_tool_use","output_tokens","INTEGER"),j(e,"session_tool_use","cached_tokens","INTEGER"),j(e,"session_tool_use","usage_confidence","TEXT")}}});var Lg,Mg=y(()=>{"use strict";B();Lg=F("SKILL_INVOCATIONS_DDL",`
CREATE TABLE IF NOT EXISTS skill_invocations (
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
CREATE INDEX IF NOT EXISTS ix_si_skill_time ON skill_invocations(skill_name, at_ms);
`)});var $g,Fg=y(()=>{"use strict";B();$g={name:"SKILL_PLUGIN_DDL",run:e=>j(e,"session_tool_use","plugin","TEXT")}});var jg,Hg=y(()=>{"use strict";B();jg={name:"SKILL_ORIGIN_ROOT_DDL",run:e=>j(e,"session_tool_use","origin_root","TEXT")}});var Ug,Bg=y(()=>{"use strict";B();Ug=F("2026-08-25-0000-memory-transcripts-covering-index",`
CREATE INDEX IF NOT EXISTS ix_mt_transcript_covering
  ON memory_transcripts(repo_id, transcript_id, commit_hash);
`)});var Wg,Jg=y(()=>{"use strict";B();Wg={name:"2026-08-25-0001-memory-reachable",run:e=>j(e,"memories","reachable","INTEGER NOT NULL DEFAULT 1")}});var Gg,qg=y(()=>{"use strict";B();Gg={name:"2026-08-25-0002-commit-reachable",run:e=>j(e,"commits","reachable","INTEGER NOT NULL DEFAULT 1")}});var Kg,Vg=y(()=>{"use strict";B();Kg=F("2026-08-26-0000-memory-lookups",`
CREATE TABLE IF NOT EXISTS memory_lookups (
  -- The producer's own idempotency key (statsEventId), so a re-drained event
  -- converges on one row instead of appending a duplicate lookup.
  receipt_id    TEXT PRIMARY KEY,
  repo_id       INTEGER NOT NULL REFERENCES repos(id),
  -- 'search' | 'recall'. Not a CHECK \u2014 see the docblock.
  kind          TEXT NOT NULL,
  -- 'mcp' | 'cli'. Kept because the two answer different questions about adoption,
  -- and because a surface that stops reporting is only visible here.
  surface       TEXT NOT NULL,
  session_id    TEXT,
  -- Business clock: the first sync's "only go back N days" window filters on this,
  -- never on updated_at_ms (a backfill rewrites every stamp to "just now").
  at_ms         INTEGER NOT NULL,
  -- Verbatim query text for 'search'; NULL for 'recall'.
  query         TEXT,
  -- Normalised bucket key for 'search' (lower + trim + collapsed whitespace);
  -- NULL for 'recall'. Written by the producer, never derived in SQL.
  query_key     TEXT,
  -- The branch a 'recall' asked for; NULL for 'search'.
  target        TEXT,
  result_count  INTEGER NOT NULL DEFAULT 0,
  -- Not derivable from result_count on a 'recall' \u2014 see the docblock.
  hit           INTEGER NOT NULL DEFAULT 0,
  -- Sync stamp. NOT NULL DEFAULT 0 is a hard requirement: NULL >= anything is NULL
  -- rather than false, so one nullable stamp is a row no cursor can ever select.
  updated_at_ms INTEGER NOT NULL DEFAULT 0
) STRICT;
CREATE INDEX IF NOT EXISTS ix_memory_lookups_kind_at ON memory_lookups(kind, at_ms);
CREATE INDEX IF NOT EXISTS ix_memory_lookups_repo_at ON memory_lookups(repo_id, kind, at_ms);
CREATE INDEX IF NOT EXISTS ix_memory_lookups_keyset  ON memory_lookups(updated_at_ms, receipt_id);
`)});var Yg,Xg=y(()=>{"use strict";B();Yg=F("2026-08-27-0804-session-activity-keyset-index",`
CREATE INDEX IF NOT EXISTS ix_activity_keyset
  ON session_activity(recorded_at_ms, session_event_id, bucket_ms);
`)});var zg,Qg=y(()=>{"use strict";B();zg=F("2026-08-27-0824-session-turns",`
CREATE TABLE IF NOT EXISTS session_turns (
  session_event_id TEXT NOT NULL REFERENCES sessions(event_id) ON DELETE CASCADE,
  slice_id         TEXT NOT NULL,
  seq              INTEGER NOT NULL,
  role             TEXT,
  ts_ms            INTEGER,
  kind             TEXT NOT NULL,
  recorded_at_ms   INTEGER NOT NULL,
  PRIMARY KEY (session_event_id, slice_id, seq)
) STRICT;
`)});var Zg,eh=y(()=>{"use strict";B();Zg={name:"2026-08-27-0922-skill-invocation-sync-stamp",run:e=>j(e,"skill_invocations","updated_at_ms","INTEGER NOT NULL DEFAULT 0")}});var th,nh=y(()=>{"use strict";B();th=F("2026-08-28-0516-session-turns-keyset-index",`
CREATE INDEX IF NOT EXISTS ix_turns_keyset
  ON session_turns(recorded_at_ms, session_event_id, slice_id, seq);
`)});var rh,oh=y(()=>{"use strict";B();rh=F("2026-08-28-0910-skill-invocation-keyset-index",`
CREATE INDEX IF NOT EXISTS ix_si_keyset
  ON skill_invocations(updated_at_ms, session_event_id, skill_name, at_ms);
`)});var $s,Zl=y(()=>{"use strict";hg();wg();Sg();Tg();kg();vg();xg();Ig();Pg();Dg();Mg();Fg();Hg();Bg();Jg();qg();Vg();Xg();Qg();eh();nh();oh();B();$s=[gg,yg,Eg,bg,_g,Rg,Ag,Cg,Ng,Og,Lg,$g,jg,Ug,Wg,Gg,Kg,Yg,zg,Zg,th,rh]});function zR(e=process.env){let t=e.JOLLI_SLOW_SQL_MS?.trim();if(t===void 0||t==="")return sh;if(t.toLowerCase()==="off")return null;let n=Number(t);return Number.isFinite(n)&&n>=0?n:sh}function QR(e){let t=e.replace(/\s+/g," ").trim();return t.length>ih?`${t.slice(0,ih)}\u2026`:t}function ZR(e){let t=e.rows===void 0?"":` rows=${e.rows}`;XR.info("%dms %s [%s] params=%d%s :: %s",Math.round(e.ms),e.method,e.role,e.params,t,e.sql)}function ah(e,t={}){let n="thresholdMs"in t?t.thresholdMs:zR();if(n==null)return e;let r=t.now??(()=>performance.now()),o=t.onSlow??ZR,s=t.role??"rw",i=(l,c,d,u)=>{let p=r(),m;try{let g=u();return l==="all"&&Array.isArray(g)&&(m=g.length),g}finally{let g=r()-p;g>=n&&o({ms:g,method:l,sql:QR(c),params:d,role:s,...m===void 0?{}:{rows:m}})}};return{exec:l=>i("exec",l,0,()=>e.exec(l)),close:()=>e.close(),prepare:l=>{let c=e.prepare(l);return{all:(...d)=>i("all",l,d.length,()=>c.all(...d)),get:(...d)=>i("get",l,d.length,()=>c.get(...d)),run:(...d)=>i("run",l,d.length,()=>c.run(...d))}}}}var XR,sh,ih,lh=y(()=>{"use strict";w();XR=f("SlowQuery"),sh=200,ih=240});function eo(){return(0,Hs.join)(Z(),"jollimemory.db")}function an(e=process.versions.node){let t=/^(\d+)\.(\d+)/.exec(e);if(!t)return!1;let n=Number.parseInt(t[1],10),r=Number.parseInt(t[2],10);return n>Zr.major?!0:n<Zr.major?!1:r>=Zr.minor}function rv(e){try{return(e.prepare("SELECT COUNT(*) AS n FROM sqlite_master WHERE type = 'table' AND name = 'schema_migrations'").get()?.n??0)>0?"present":"absent"}catch{return"unknown"}}function nc(e){try{return{kind:"rows",rows:e.prepare("SELECT seq, slot, name, outcome, applied_by, applied_at_ms, duration_ms, ddl FROM schema_migrations ORDER BY seq").all()}}catch(t){let n=rv(e);return n==="absent"?{kind:"none"}:{kind:"unreadable",reason:R(t),tableConfirmed:n==="present"}}}function ch(e){let t=nc(e);return t.kind==="rows"?t.rows:void 0}function Fs(e,t){e.prepare(`INSERT INTO schema_migrations (slot, name, outcome, applied_by, applied_at_ms, duration_ms, ddl)
		 VALUES (?, ?, ?, ?, ?, ?, ?)`).run(t.slot,t.name,t.outcome,t.appliedBy,t.atMs,t.durationMs,t.ddl)}function ov(e){let t=new Map;for(let n of e){let r=t.get(n.name);(!r||n.seq>r.seq)&&t.set(n.name,n)}return t}function ec(e){return e.sql??""}function sv(e){let t=nc(e);if(t.kind==="none")return;if(t.kind==="unreadable"){js.has(dh)||(js.add(dh),Ht.warn(t.tableConfirmed?"the schema_migrations table exists but could not be read (%s) \u2014 drift verification is skipped; run `jolli doctor --schema-log`":"the database could not be queried for its migration log (%s) \u2014 drift verification is skipped; run `jolli doctor --schema-log`",t.reason));return}let n=t.rows,r=new Set($s.map(o=>o.name));for(let[o,s]of ov(n))r.has(o)||js.has(o)||(js.add(o),Ht.warn("migration %s was touched by %s but is unknown to this build (%s) \u2014 the database has been opened by another build",o,s.applied_by,jt))}function iv(e,t={}){let n=t.now??Date.now,r=t.appliedBy??jt,o=nc(e),s=new Set;if(o.kind==="rows")for(let c of o.rows)(c.outcome==="applied"||c.outcome==="baseline")&&s.add(c.name);else o.kind==="none"?Ht.info("no migration log in this database \u2014 replaying every entry (all are re-runnable)"):Ht.warn(o.tableConfirmed?"the schema_migrations table exists but could not be read (%s) \u2014 replaying every entry and recording nothing":"the database could not be queried for its migration log (%s) \u2014 replaying every entry and recording nothing",o.reason);let i=$s.map((c,d)=>({m:c,slot:d})).filter(({m:c})=>!s.has(c.name));if(i.length===0)return;let a=[],l=()=>{for(let c of a)Fs(e,c);a.length=0};e.exec("PRAGMA foreign_keys = OFF");try{for(let{m:c,slot:d}of i){let u=n();e.exec("BEGIN IMMEDIATE");try{if(ch(e)?.some(g=>g.name===c.name&&(g.outcome==="applied"||g.outcome==="baseline"))){l(),Fs(e,{slot:d,name:c.name,outcome:"skipped",appliedBy:r,atMs:n(),durationMs:0,ddl:ec(c)}),e.exec("COMMIT");continue}c.run(e);let m={slot:d,name:c.name,outcome:"applied",appliedBy:r,atMs:n(),durationMs:n()-u,ddl:ec(c)};ch(e)?(l(),Fs(e,m)):a.push(m),e.exec("COMMIT")}catch(p){try{e.exec("ROLLBACK")}catch{}try{e.prepare("DELETE FROM schema_migrations WHERE name = ? AND outcome = 'failed'").run(c.name),Fs(e,{slot:d,name:c.name,outcome:"failed",appliedBy:r,atMs:n(),durationMs:n()-u,ddl:ec(c)})}catch(m){Ht.debug("could not record the failed migration %s: %s",c.name,R(m))}throw p}}}finally{e.exec("PRAGMA foreign_keys = ON")}Ht.info("dashboard schema migrated: %s",i.map(({m:c})=>c.name).join(", "))}function av(e){let t=(0,Hs.dirname)(e);try{(0,Et.mkdirSync)(t,{recursive:!0,mode:448}),((0,Et.statSync)(t).mode&511)!==448&&(0,Et.chmodSync)(t,448)}catch(n){Ht.warn("could not restrict %s to owner-only: %s",t,R(n))}}function lv(e){for(let t of[e,`${e}-wal`,`${e}-shm`])try{((0,Et.statSync)(t).mode&511)!==384&&(0,Et.chmodSync)(t,384)}catch(n){Qt(n)||Ht.warn("could not restrict %s to 0600: %s",t,R(n))}}async function uh(e,t){if(!an())throw new tc(process.versions.node);let n=t.dbPath??eo(),r=t.maxAttempts??4,o=t.baseDelayMs??50;e||av(n);let{DatabaseSync:s}=await import("node:sqlite");for(let i=1;;i++){let a;try{a=new s(n,{readOnly:e});for(let l of e?tv:ev)a.exec(l);return a.exec(`PRAGMA busy_timeout = ${t.busyTimeoutMs??nv}`),e||lv(n),ah(a,{role:e?"ro":"rw"})}catch(l){try{a?.close()}catch{}if($t(l)?.kind!=="locked"||i>=r)throw l;await new Promise(c=>setTimeout(c,o*2**(i-1)))}}}async function ph(e,t={}){let n=await uh(!1,t);try{return sv(n),iv(n),await e(n)}finally{n.close()}}async function rc(e,t={}){let n=await uh(!0,t);try{return await e(n)}finally{n.close()}}function Us(e,t){e.exec("BEGIN IMMEDIATE");try{let n=t();return e.exec("COMMIT"),n}catch(n){try{e.exec("ROLLBACK")}catch{}throw n}}var Et,Hs,Ht,Zr,tc,ev,tv,nv,js,dh,Ut=y(()=>{"use strict";Et=require("node:fs"),Hs=require("node:path");Qn();ue();Ue();w();Zl();lh();Zl();B();Ht=f("DashboardDb"),Zr={major:22,minor:13};tc=class extends Error{constructor(t){super(`The Jolli dashboard needs Node >= ${Zr.major}.${Zr.minor} for built-in SQLite (running ${t}). Upgrade Node, or run the CLI with --experimental-sqlite.`),this.name="DashboardRuntimeError"}},ev=["PRAGMA journal_mode = WAL","PRAGMA foreign_keys = ON"],tv=["PRAGMA foreign_keys = ON"],nv=2e3;js=new Set,dh="\0unreadable-log"});function oc(e){let t=s=>{try{return(0,to.statSync)(`${e}${s}`),!0}catch{return!1}},n=t(""),r=t("-wal"),o=t("-shm");return n?r&&o?"healthy-active":r?"healthy-recoverable":"healthy-clean":r||o?"alarm-sidecars-only":"absent"}var to,XH,sc=y(()=>{"use strict";to=require("node:fs");w();XH=f("DbDetection")});async function uv(e){try{let n=await Bl(e);if(n&&!n.startsWith("file:"))return{identity:n,remoteUrl:n}}catch(n){cv.debug("no canonical remote for %s (%s) \u2014 using path identity",e,R(n))}let t=(0,mh.createHash)("sha256").update(He(e)).digest("hex").slice(0,32);return{identity:`${dv}${t}`}}async function ln(e){return uv(await Ia(e))}var mh,cv,dv,Zn=y(()=>{"use strict";mh=require("node:crypto");Ha();Se();Ls();Qe();ae();Ze();ue();w();cv=f("RepoRegistry"),dv="local:"});var gh={};Tr(gh,{hasCutoverRow:()=>hv,resetCutoverRouterCaches:()=>mv,resolveCutoverRoute:()=>no,routeMovesOffOrphanBranch:()=>gv});function mv(){ic.clear()}async function fv(e){let t=ic.get(e);if(t!==void 0)return t;let{identity:n}=await ln(e);return ic.set(e,n),n}function gv(e){return e?.state==="cutover"||e?.state==="legacy-fenced"}async function fh(e,t){if(!an())return{kind:"unavailable",reason:`Node ${process.versions.node} lacks flag-free node:sqlite`};let n=oc(t);if(n==="alarm-sidecars-only")return{kind:"unavailable",reason:"database file missing but WAL/SHM remain \u2014 run jolli doctor --recover"};if(n==="absent")return{kind:"unavailable",reason:"database file does not exist"};try{let{DatabaseSync:r}=await import("node:sqlite"),o=new r(t,{readOnly:!0});try{let s=await fv(e),i=o.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(s);if(!i)return{kind:"no-row"};let a=o.prepare("SELECT value FROM repo_state WHERE repo_id = ? AND key = 'cutover'").get(i.id);return a?{kind:"row",record:JSON.parse(a.value)}:{kind:"no-row"}}finally{o.close()}}catch(r){return{kind:"unavailable",reason:R(r)}}}async function hv(e,t={}){return(await fh(e,t.dbPath??eo())).kind==="row"}async function no(e,t={}){let n=await Mr(e).catch(()=>null),r=await fh(e,t.dbPath??eo());return r.kind==="row"?{state:"cutover",record:r.record}:n!==null?r.kind==="no-row"?{state:"legacy-fenced"}:{state:"blocked",reason:r.reason}:r.kind==="unavailable"?(pv.warn("database unavailable for un-cutover repo (%s) \u2014 orphan remains authoritative",r.reason),{state:"uncutover",warning:r.reason}):{state:"uncutover"}}var pv,ic,Bs=y(()=>{"use strict";Ze();w();Ut();sc();Zn();pv=f("CutoverRouter"),ic=new Map});var Ws,St,Js=y(()=>{"use strict";w();Se();Ze();Ws=class extends Error{constructor(t){super(t),this.name="OrphanBranchFrozenError"}},St=class{constructor(t){this.cwd=t;this.kind="orphan-branch"}async readFile(t){return Aa(je,t,this.cwd)}async batchReadFiles(t){return xa(je,t,this.cwd)}async writeFiles(t,n){if(V())return;if(await Mr(this.cwd??process.cwd()).catch(()=>null)!==null)throw new Ws("orphan branch is frozen (cutover fence in place) \u2014 this process holds a pre-cutover storage object; restart it so writes route to the database");let{hasCutoverRow:o}=await Promise.resolve().then(()=>(Bs(),gh));if(await o(this.cwd??process.cwd()).catch(()=>!1))throw new Ws("orphan branch is retired for this repository (cutover committed) \u2014 writes route to the database; re-run the operation from an up-to-date surface");await this.ensure(),await Yu(je,t,n,this.cwd)}async listFiles(t){return[...await Ca(je,t,this.cwd)]}async exists(){return Ra(je,this.cwd)}async ensure(){await va(je,this.cwd)}}});function ro(e){return e.version>=4}function yv(e){return[...e??[]].reverse()}function er(e){let t=yv(e.children).flatMap(er),n=(e.topics??[]).map(r=>({...r,commitDate:e.commitDate,generatedAt:e.generatedAt}));return[...t,...n]}function hh(e){let t=e.stats,n=t?.filesChanged??0,r=t?.insertions??0,o=t?.deletions??0;for(let s of e.children??[]){let i=hh(s);n+=i.filesChanged,r+=i.insertions,o+=i.deletions}return{filesChanged:n,insertions:r,deletions:o}}function oo(e){return e.diffStats?e.diffStats:(e.children?.length??0)>0?hh(e):e.stats??{filesChanged:0,insertions:0,deletions:0}}function ac(e){let t=e.conversationTurns??0,n=(e.children??[]).reduce((r,o)=>r+ac(o),0);return t+n}function lc(e){let t=e.conversationTokens??0,n=(e.children??[]).reduce((r,o)=>r+lc(o),0);return t+n}function cc(e){let t=e.conversationTokenBreakdown,n={input:t?.input??0,output:t?.output??0,cached:t?.cached??0};return(e.children??[]).reduce((r,o)=>{let s=cc(o);return{input:r.input+s.input,output:r.output+s.output,cached:r.cached+s.cached}},{input:n.input,output:n.output,cached:n.cached})}function dc(e){let t=e.topics?.length??0,n=(e.children??[]).reduce((r,o)=>r+dc(o),0);return t+n}function Gs(e){let t=[],n=r=>{if(!r.children?.length)t.push(r);else for(let o of r.children)n(o)};for(let r of e.children??[])n(r);return t}function qs(e){return ro(e)?(e.topics??[]).map(t=>({...t,commitDate:e.commitDate,generatedAt:e.generatedAt})):er(e)}function so(e){let t=[e.commitHash];for(let n of e.children??[])t.push(...so(n));return t}function Bt(e,t){return e.transcripts!==void 0?e.transcripts:so(e).filter(n=>t.has(n))}function wv(e){let t=Gs(e);return t.length<=1?1:new Set(t.map(r=>new Date(r.generatedAt||r.commitDate).toISOString().substring(0,10))).size}function yh(e){let t=wv(e),n=t===1?"1 day":`${t} days`,r=Gs(e);if(r.length<=1)return n;let o=r.map(l=>new Date(l.generatedAt||l.commitDate).getTime()),s=new Date(Math.min(...o)),i=new Date(Math.max(...o)),a=l=>l.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});return`${n} (${a(s)} \u2014 ${a(i)})`}var Wt=y(()=>{"use strict"});function Ev(e,t,n){return n.sessionId?e.get(t,n.source??"claude",n.sessionId)?.event_id:void 0}function Sv(e){return e.prepare("SELECT event_id FROM sessions WHERE repo_id = ? AND source = ? AND session_id = ?")}function Ks(e,t,n){e.prepare(`DELETE FROM session_turns
		  WHERE slice_id = ?
		    AND session_event_id IN (SELECT event_id FROM sessions WHERE repo_id = ?)`).run(n,t)}function uc(e,t,n,r,o){let s=e.prepare(`INSERT OR REPLACE INTO session_turns
		 (session_event_id, slice_id, seq, role, ts_ms, kind, recorded_at_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?)`),i=Sv(e),a=e.prepare("DELETE FROM session_turns WHERE session_event_id = ? AND slice_id = ?");for(let l of r){let c=Ev(i,t,l);if(c===void 0)continue;a.run(c,n);let d=0;for(let u of l.entries??[]){let p=u.timestamp===void 0?void 0:Date.parse(u.timestamp),m=p===void 0||Number.isNaN(p)?null:p;s.run(c,n,d++,u.role,m,"turn",o)}for(let[u,p]of[["compaction",l.compactions],["test-run",l.testRuns],["turn-abort",l.turnAborts]])for(let m of p??[])s.run(c,n,d++,null,m,u,o)}}var pc=y(()=>{"use strict"});var wh=y(()=>{"use strict";Se()});async function Eh(e,t,n,r){return Wn(e,async(o,s)=>{if(!r)return n(o,s);try{return await n(o,s)}catch(i){return r(o,i,s)}},t)}var Sh=y(()=>{"use strict";Jn()});function cn(e,t,n){let r=new Map;for(let o of e??[])r.set(n(o),o);for(let o of t??[])r.set(n(o),o);return[...r.values()]}var bh,dn,mc=y(()=>{"use strict";bh=/-[0-9a-f]{8}$/;dn={plan:e=>e.slug,note:e=>e.id,reference:e=>e.archivedKey}});function _h(e){return e.summaryError===bv}function kh(e){return e.summaryError!==void 0||e.llm?.stopReason==="error"}var Th,bv,fc=y(()=>{"use strict";Th="llm-failed",bv="local-agent-auth"});function io(e){return Vs[e]?.label??"Local agent"}function Ah(e){return Vs[e]?.loginHint??"Sign in to your local agent CLI."}function xh(e){let t=Vs[e]?.separateDesktopApp;return t===void 0?null:`(This login is SEPARATE from ${t} \u2014 ${t} stays signed in on its own.)`}var Rh,vh,Vs,RU,Ys=y(()=>{"use strict";Rh="sonnet",vh="inherit",Vs={"claude-code":{label:"Claude Code",loginHint:"Run `claude` once and sign in to your subscription.",separateDesktopApp:"Claude Desktop",defaultModel:Rh,models:[{id:"haiku",label:"Haiku \u2014 fastest"},{id:Rh,label:"Sonnet \u2014 balanced (default)"},{id:"opus",label:"Opus \u2014 most capable"},{id:vh,label:"Use Claude Code's own setting"}]},codex:{label:"Codex",loginHint:"Run `codex login` to sign in with your ChatGPT plan.",separateDesktopApp:"the ChatGPT app",defaultModel:"gpt-5.6-terra",models:[{id:"gpt-5.6-luna",label:"GPT-5.6-Luna \u2014 fastest"},{id:"gpt-5.6-terra",label:"GPT-5.6-Terra \u2014 balanced (default)"},{id:"gpt-5.6-sol",label:"GPT-5.6-Sol \u2014 most capable"},{id:"gpt-5.5",label:"GPT-5.5 \u2014 previous generation"},{id:vh,label:"Use Codex's own setting"}]},"cursor-agent":{label:"Cursor",loginHint:"Run `cursor-agent login` to sign in to Cursor."},opencode:{label:"OpenCode",loginHint:"Run `opencode auth login` to connect a provider."},kimi:{label:"Kimi Code",loginHint:"Run `kimi login` to sign in to your Moonshot account."},hermes:{label:"Hermes",loginHint:"Run `hermes setup` (or `hermes model`) to configure a provider."}};RU=[...new Set(Object.values(Vs).flatMap(e=>(e.models??[]).map(t=>t.id)))]});function _v(e){return Tv.has(e)}function gc(e){return _v(e.source)?`${e.nativeId} \u2014 ${e.title}`:e.title}var Tv,hc=y(()=>{"use strict";gs();Tv=new Set(["linear","jira","github"])});var yc=y(()=>{"use strict"});function q(e){return e.generatedAt||e.commitDate}function Ih(e){try{return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch{return e}}function wc(e){try{return new Date(e).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})}catch{return e}}function Ch(e){return e.substring(0,10)}function Rv(e){return[...e].sort((t,n)=>{let r=Ch(t.generatedAt||t.commitDate||""),o=Ch(n.generatedAt||n.commitDate||"");if(r!==o)return r>o?-1:1;let s=t.importance==="minor"?1:0,i=n.importance==="minor"?1:0;return s-i})}function Nh(e){return String(e+1).padStart(2,"0")}function Av(e,t){return t==="local-agent"?e.localAgentTool?`Local agent - ${io(e.localAgentTool)}`:"Local agent":vv[t]}function Ph(e){let t=new Set,n=o=>{let s=o.llm;s?.source&&t.add(Av(s,s.source));for(let i of o.children??[])n(i)};n(e);let r=[...t];if(r.length!==0)return r.length===1?r[0]:`mixed: ${r.join(", ")}`}function Ec(e){let t=xv[e];return t!==void 0?t:e&&e.charAt(0).toUpperCase()+e.slice(1)}function Oh(e){let t=Gs(e),n=qs(e);return{topics:Rv(n.map((o,s)=>({...o,treeIndex:s}))),sourceNodes:t}}var vv,xv,ao=y(()=>{"use strict";Ys();hc();Wt();yc();vv={"anthropic-config":"Anthropic","anthropic-env":"Anthropic (env)","jolli-proxy":"Jolli proxy","local-agent":"Local agent"};xv={claude:"Claude Code",opencode:"OpenCode",codex:"Codex",cursor:"Cursor",kimi:"Kimi",hermes:"Hermes"}});function Xs(e){return Cv.exec(e)?.[1]??null}var Cv,Sc=y(()=>{"use strict";Cv=/^transcripts\/(.+)\.json$/});var Qh={};Tr(Qh,{AmbiguousHashError:()=>uo,ORPHAN_WRITE_REQUIRED_TIMEOUT_MS:()=>bc,collectChildE2eScenarios:()=>Zs,collectChildJolliMeta:()=>oi,collectChildNotes:()=>ti,collectChildPlans:()=>ei,collectChildReferences:()=>ni,collectChildSkills:()=>ri,collectChildSkillsDocMeta:()=>_c,copyHoistFields:()=>Tc,deleteNoteVisibleArtifact:()=>dA,deletePlanVisibleArtifact:()=>aA,deleteTranscript:()=>Kv,expandSourcesForConsolidation:()=>jv,getActiveStorage:()=>Nv,getCatalog:()=>nA,getCatalogWithLazyBuild:()=>rA,getIndex:()=>go,getIndexEntryMap:()=>zv,getSummary:()=>Vh,getSummaryCount:()=>Yh,getTranscriptHashes:()=>Ac,indexNeedsMigration:()=>Zv,listSummaries:()=>Yv,listSummaryHashes:()=>Xv,loadCatalog:()=>bt,mergeManyToOne:()=>Hv,migrateIndexToV3:()=>eA,migrateOneToOne:()=>Mv,normalizeToV4:()=>Rc,readNoteFromBranch:()=>uA,readPlanFromBranch:()=>iA,readPlanProgress:()=>lA,readReferenceFromBranch:()=>gA,readSkillFromBranch:()=>fA,readTranscript:()=>qh,readTranscriptsBatch:()=>Jv,readTranscriptsForCommits:()=>Wv,remountStrandedTree:()=>Lv,removeFromIndex:()=>Bv,resolveEffectiveRecap:()=>vc,resolveEffectiveTopics:()=>ii,resolveReadStorage:()=>po,resolveStorage:()=>H,saveTranscriptsBatch:()=>Kh,scanTreeHashAliases:()=>Qv,setActiveStorage:()=>Iv,storeNotes:()=>cA,storePlans:()=>sA,storeReferences:()=>pA,storeSkills:()=>mA,storeSummary:()=>Dv,stripFunctionalMetadata:()=>ai,toCatalogEntry:()=>un,withDeferrableOrphanWriteLock:()=>Qs,withRequiredOrphanWriteLock:()=>Te});function Iv(e){lo=e}function Nv(){return lo}async function Dh(e){let t=await ci(e);return t.ok?t.storage:(D.warn("system-of-record unavailable (%s) \u2014 falling back to the orphan branch. cwd=%s",t.reason,e),new St(e))}async function H(e,t){return e||lo||(process.env.VITEST||D.warn("resolveStorage fell back to the system of record \u2014 caller did not thread storage or call setActiveStorage. The Memory Bank side will miss this write. cwd=%s",t??"(undef)"),Dh(t))}async function po(e,t){return e??lo??await Dh(t)}async function Te(e,t,n){if(jn(e))return await n();if(!await Pr(e,{timeoutMs:bc}))throw new as(t,bc);try{return await Hn(e,n)}finally{await Or(e)}}async function Qs(e,t,n){if(jn(e))return await n();if(!await Pr(e,{timeoutMs:Lh}))return await t();try{return await Hn(e,n)}finally{await Or(e)}}function co(e){return e.parentCommitHash==null}function Pv(e,t){if(!e&&!t)return null;if(!t)return e;if(!e)return t;let n=new Map;for(let o of t.entries)n.set(o.commitHash,o);for(let o of e.entries)n.set(o.commitHash,o);let r={...t.commitAliases??{},...e.commitAliases??{}};return{version:e.version,entries:[...n.values()],...Object.keys(r).length>0&&{commitAliases:r}}}function Ov(e,t){if(!e&&!t)return null;if(!t)return e;if(!e)return t;let n=new Map;for(let r of t.entries)n.set(r.commitHash,r);for(let r of e.entries)n.set(r.commitHash,r);return{version:e.version,entries:[...n.values()]}}async function Dv(e,t,n=!1,r,o,s){V()||await Te(t,"storeSummary",()=>Mh(e,t,n,r,o,s))}async function Mh(e,t,n=!1,r,o,s){let i=await ee(t,o),a=await bt(t,o),l=s!==void 0&&s!==o,c=l?await ee(t,s):null,d=l?await bt(t,s):null,u=l?Pv(i,c):i,p=l?Ov(a,d):a,m=u?.entries?[...u.entries]:[],g=new Map(m.map(P=>[P.commitHash,P])),h=new Set;if(l&&c){let P=new Set(i?.entries.map($=>$.commitHash)??[]);for(let $ of c.entries)P.has($.commitHash)||h.add($.commitHash)}if(!n&&g.has(e.commitHash)){D.info("Summary for commit %s already exists \u2014 skipping (use force to overwrite)",e.commitHash.substring(0,8));return}let E=await fo(e,null,t,g);for(let P of E)g.set(P.commitHash,P);let S={version:3,entries:[...g.values()],commitAliases:u?.commitAliases},k=n?"Overwrite":"Add",b=[{path:`summaries/${e.commitHash}.json`,content:JSON.stringify(e,null,"	")},{path:pn,content:JSON.stringify(S,null,"	")},xc(p,g,e)];if(r?.transcript&&r.transcript.data.sessions.length>0&&b.push({path:`transcripts/${r.transcript.id}.json`,content:JSON.stringify(r.transcript.data,null,"	")}),r?.planProgress)for(let P of r.planProgress)b.push({path:`plan-progress/${P.planSlug}.json`,content:JSON.stringify(P,null,"	")});if(h.size>0&&s)for(let P of h){if(P===e.commitHash)continue;let $=`summaries/${P}.json`,we=`transcripts/${P}.json`,$e=await s.readFile($);$e!==null&&b.push({path:$,content:$e});let Fe=await s.readFile(we);Fe!==null&&b.push({path:we,content:Fe})}await(await H(o,t)).writeFiles(b,`${k} summary for ${e.commitHash.substring(0,8)}: ${e.commitMessage.substring(0,50)}`),D.info("Summary stored successfully for commit %s",e.commitHash.substring(0,8))}function Tc(e){return{...e.skills&&{skills:e.skills},...e.jolliSkillsDocId&&{jolliSkillsDocId:e.jolliSkillsDocId},...e.jolliSkillsDocUrl&&{jolliSkillsDocUrl:e.jolliSkillsDocUrl},...e.transcripts&&{transcripts:e.transcripts},...e.plans&&{plans:e.plans},...e.notes&&{notes:e.notes},...e.references&&{references:e.references}}}async function Lv(e,t,n,r){if((e.children??[]).length>0)throw new Error(`target ${e.commitHash.substring(0,8)} already has children \u2014 refusing to clobber`);if(V())return;let o=cn(t.plans,e.plans,dn.plan),s=cn(t.notes,e.notes,dn.note),i=cn(t.references,e.references,dn.reference),a=[...new Set([...e.transcripts??[],...t.transcripts??[]])],l=ys([...t.skills??[],...e.skills??[]]),c=l.flatMap(g=>g.supersededDocIds??[]),d=_c([e,t]),u=[...new Set([...e.orphanedDocIds??[],...d.orphanedDocIds,...c,...kc([t])])],p=[...new Set([...e.unresolvedOrphanHashes??[],...si([t])])],m={...e,...Tc(t),...a.length>0&&{transcripts:a},...o.length>0&&{plans:o},...s.length>0&&{notes:s},...i.length>0&&{references:i},...l.length>0&&{skills:l.map(hs)},...d.winner&&{jolliSkillsDocId:d.winner.jolliSkillsDocId,jolliSkillsDocUrl:d.winner.jolliSkillsDocUrl},...u.length>0&&{orphanedDocIds:u},...p.length>0&&{unresolvedOrphanHashes:p},children:[t]};await Te(n,"remountStrandedTree",()=>Mh(m,n,!0,void 0,r))}async function Mv(e,t,n,r,o){await Te(n,"migrateOneToOne",()=>$v(e,t,n,r,o))}async function $v(e,t,n,r,o){D.info("Migrating summary 1:1: %s \u2192 %s",e.commitHash.substring(0,8),t.hash.substring(0,8));let s=ai(e),i=e.jolliDocUrl,a=await ss(`${t.hash}^`,t.hash,n).catch(()=>({filesChanged:0,insertions:0,deletions:0})),l=ii(e),c=vc(e),d=await Ac(n,o),u=Bt(e,d),p={version:Ka,commitHash:t.hash,commitMessage:t.message,commitAuthor:t.author,commitDate:t.date,branch:e.branch,generatedAt:new Date().toISOString(),commitType:r?.commitType??"rebase",...r?.commitSource&&{commitSource:r.commitSource},...e.ticketId&&{ticketId:e.ticketId},...e.jolliDocId&&{jolliDocId:e.jolliDocId},...i&&{jolliDocUrl:i},...e.orphanedDocIds&&{orphanedDocIds:e.orphanedDocIds},...e.unresolvedOrphanHashes&&{unresolvedOrphanHashes:e.unresolvedOrphanHashes},...Tc(e),...e.e2eTestGuide&&{e2eTestGuide:e.e2eTestGuide},...kh(e)&&{summaryError:Th},topics:l,...c!==void 0?{recap:c}:{},transcripts:u,diffStats:a,children:[s]},m=await ee(n,o),g=await bt(n,o),h=m?.entries?[...m.entries]:[],E=new Map(h.map(P=>[P.commitHash,P]));if(E.has(t.hash)){D.info("New hash %s already in index, skipping migration",t.hash.substring(0,8));return}let S=await fo(p,null,n,E);for(let P of S)E.set(P.commitHash,P);let k={version:3,entries:[...E.values()],commitAliases:m?.commitAliases},b=[{path:`summaries/${p.commitHash}.json`,content:JSON.stringify(p,null,"	")},{path:pn,content:JSON.stringify(k,null,"	")},xc(g,E,p)];await(await H(o,n)).writeFiles(b,`Migrate summary ${e.commitHash.substring(0,8)} \u2192 ${t.hash.substring(0,8)}`),D.info("Summary migrated: %s \u2192 %s",e.commitHash.substring(0,8),t.hash.substring(0,8))}function Zs(e){let t=[];for(let n of e)n.e2eTestGuide&&t.push(...n.e2eTestGuide),n.children&&t.push(...Zs(n.children));return t}function $h(e){let{e2eTestGuide:t,...n}=e;return n.children?{...n,children:n.children.map($h)}:n}function ei(e){let t=new Map;for(let n of e){if(n.plans)for(let r of n.plans){let o=r.slug,s=t.get(o);(!s||r.updatedAt>s.updatedAt)&&t.set(o,r)}if(n.children)for(let r of ei(n.children)){let o=t.get(r.slug);(!o||r.updatedAt>o.updatedAt)&&t.set(r.slug,r)}}return[...t.values()]}function Fh(e){let{plans:t,...n}=e;return n.children?{...n,children:n.children.map(Fh)}:n}function ti(e){let t=new Map;for(let n of e){if(n.notes)for(let r of n.notes){let o=t.get(r.id);(!o||r.updatedAt>o.updatedAt)&&t.set(r.id,r)}if(n.children)for(let r of ti(n.children)){let o=t.get(r.id);(!o||r.updatedAt>o.updatedAt)&&t.set(r.id,r)}}return[...t.values()]}function jh(e){let{notes:t,...n}=e;return n.children?{...n,children:n.children.map(jh)}:n}function Hh(e){let{references:t,...n}=e;return n.children?{...n,children:n.children.map(Hh)}:n}function ni(e){let t=new Map;for(let n of e){let r=n.references??[];for(let o of r){let s=t.get(o.archivedKey);(!s||o.referencedAt>s.referencedAt)&&t.set(o.archivedKey,o)}if(n.children)for(let o of ni(n.children)){let s=t.get(o.archivedKey);(!s||o.referencedAt>s.referencedAt)&&t.set(o.archivedKey,o)}}return[...t.values()]}function ri(e){let t=[];for(let n of e)t.push(...n.skills??[]),n.children&&t.push(...ri(n.children));return ys(t)}function Uh(e){let{jolliDocId:t,jolliDocUrl:n,jolliSkillsDocId:r,jolliSkillsDocUrl:o,orphanedDocIds:s,unresolvedOrphanHashes:i,...a}=e;return a.children?{...a,children:a.children.map(Uh)}:a}function oi(e){let t=[];for(let o of e){let s=o.jolliDocUrl;if(o.jolliDocId&&s&&t.push({jolliDocId:o.jolliDocId,jolliDocUrl:s,commitDate:o.commitDate,generatedAt:o.generatedAt}),o.children){let i=oi(o.children);i.winner&&t.push({...i.winner})}}if(t.length===0)return{winner:null,orphanedDocIds:[]};t.sort((o,s)=>new Date(q(s)).getTime()-new Date(q(o)).getTime());let n=t[0],r=t.slice(1).map(o=>o.jolliDocId);return{winner:n,orphanedDocIds:r}}function _c(e){let{winner:t,orphanedDocIds:n}=Bh(e);return{winner:t&&{jolliSkillsDocId:t.jolliSkillsDocId,jolliSkillsDocUrl:t.jolliSkillsDocUrl},orphanedDocIds:n}}function Bh(e){let t=[];for(let o of e){let s=o.jolliSkillsDocUrl;if(o.jolliSkillsDocId&&s&&t.push({jolliSkillsDocId:o.jolliSkillsDocId,jolliSkillsDocUrl:s,commitDate:o.commitDate,generatedAt:o.generatedAt}),o.children){let i=Bh(o.children);i.winner&&t.push(i.winner)}}if(t.length===0)return{winner:null,orphanedDocIds:[]};t.sort((o,s)=>new Date(q(s)).getTime()-new Date(q(o)).getTime());let[n,...r]=t;return{winner:n,orphanedDocIds:r.map(o=>o.jolliSkillsDocId)}}function kc(e){let t=[];for(let n of e??[])n.orphanedDocIds&&t.push(...n.orphanedDocIds),t.push(...kc(n.children));return t}function si(e){let t=[];for(let n of e??[])n.unresolvedOrphanHashes&&t.push(...n.unresolvedOrphanHashes),t.push(...si(n.children));return t}function Rc(e){if(e.version>=4)return e;let t=Zs([e]),n=ei([e]),r=ti([e]),o=ni([e]),s=ri([e]),i=s.map(hs),a=oi([e]),l=Array.from(new Set([...a.orphanedDocIds,...e.orphanedDocIds??[],...kc(e.children),...s.flatMap(h=>h.supersededDocIds??[])])),c=Array.from(new Set([...e.unresolvedOrphanHashes??[],...si(e.children)])),d=ii(e),u=vc(e),p=e.diffStats===void 0&&e.stats!==void 0?oo(e):void 0,{stats:m,...g}=e;return{...g,version:4,topics:d,...u!==void 0?{recap:u}:{},...p!==void 0?{diffStats:p}:{},...t.length>0?{e2eTestGuide:t}:{},...n.length>0?{plans:n}:{},...r.length>0?{notes:r}:{},...o.length>0?{references:o}:{},...i.length>0?{skills:i}:{},...a.winner?{jolliDocId:a.winner.jolliDocId,jolliDocUrl:a.winner.jolliDocUrl}:{},...l.length>0?{orphanedDocIds:l}:{},...c.length>0?{unresolvedOrphanHashes:c}:{},...e.children!==void 0?{children:e.children.map(ai)}:{}}}function Wh(e){let{topics:t,...n}=e;return n.children?{...n,children:n.children.map(Wh)}:n}function Jh(e){let{recap:t,...n}=e;return n.children?{...n,children:n.children.map(Jh)}:n}function ii(e){return ro(e)?e.topics??[]:er(e).map(({commitDate:t,generatedAt:n,treeIndex:r,...o})=>o)}function vc(e){return ro(e)||e.recap?e.recap:Fv(e.children)}function Fv(e){if(!e||e.length===0)return;let t=[];if(Gh(e,t),t.length!==0)return t.sort((n,r)=>new Date(r.date).getTime()-new Date(n.date).getTime()),t[0]?.recap}function Gh(e,t){for(let n of e)n.recap&&t.push({recap:n.recap,date:q(n)}),n.children&&Gh(n.children,t)}function jv(e){if(ro(e))return[{commitHash:e.commitHash,commitMessage:e.commitMessage,commitDate:e.commitDate,...e.ticketId&&{ticketId:e.ticketId},topics:e.topics??[],...e.recap&&{recap:e.recap}}];let t=(e.children??[]).map(r=>({commitHash:r.commitHash,commitMessage:r.commitMessage,commitDate:r.commitDate,...r.ticketId&&{ticketId:r.ticketId},topics:ii(r),...r.recap&&{recap:r.recap}}));return((e.topics?.length??0)>0||e.recap)&&t.push({commitHash:e.commitHash,commitMessage:e.commitMessage,commitDate:e.commitDate,...e.ticketId&&{ticketId:e.ticketId},topics:e.topics??[],...e.recap&&{recap:e.recap}}),t}function ai(e){return Uh(Hh(jh(Fh($h(Wh(Jh(e)))))))}async function Hv(e,t,n,r){return Te(n,"mergeManyToOne",()=>Uv(e,t,n,r))}async function Uv(e,t,n,r){let{metadata:o,consolidated:s,storage:i,extraRefs:a,extraSkills:l}=r??{};D.info("Merging %d summaries into %s",e.length,t.hash.substring(0,8));let c=[...e].sort((K,zo)=>new Date(q(zo)).getTime()-new Date(q(K)).getTime()),d=Zs(c),u=cn(ei(c),a?.plans,dn.plan),p=cn(ti(c),a?.notes,dn.note),m=cn(ni(c),a?.references,dn.reference),g=ys([...ri(c),...l??[]]),h=g.map(hs),E=oi(c),S=_c(c),k=c.flatMap(K=>K.orphanedDocIds??[]),b=g.flatMap(K=>K.supersededDocIds??[]),x=[...E.orphanedDocIds,...S.orphanedDocIds,...k,...b],P=Array.from(new Set([...c.filter(K=>!K.jolliDocId).map(K=>K.commitHash),...si(c)])),$=c.map(ai),we=await ss(`${t.hash}^`,t.hash,n).catch(()=>({filesChanged:0,insertions:0,deletions:0})),$e=s?.topics??[],Fe=s?.recap,It=s?.ticketId,Xt=s?.llm,vn=s?.summaryError,zt=await Ac(n,i),Au=Array.from(new Set(c.flatMap(K=>Bt(K,zt)))),dt={version:Ka,commitHash:t.hash,commitMessage:t.message,commitAuthor:t.author,commitDate:t.date,branch:e[0].branch,generatedAt:new Date().toISOString(),...o?.commitType&&{commitType:o.commitType},...o?.commitSource&&{commitSource:o.commitSource},...It&&{ticketId:It},...Xt&&{llm:Xt},...vn&&{summaryError:vn},...d.length>0&&{e2eTestGuide:d},...u.length>0&&{plans:u},...p.length>0&&{notes:p},...m.length>0&&{references:m},...h.length>0&&{skills:h},...E.winner&&{jolliDocId:E.winner.jolliDocId,jolliDocUrl:E.winner.jolliDocUrl},...S.winner&&S.winner,...x.length>0&&{orphanedDocIds:x},...P.length>0&&{unresolvedOrphanHashes:P},topics:$e,...Fe&&{recap:Fe},transcripts:Au,diffStats:we,children:$},Nt=await ee(n,i),An=await bt(n,i),xn=Nt?.entries?[...Nt.entries]:[],Ye=new Map(xn.map(K=>[K.commitHash,K]));if(Ye.has(t.hash))return D.info("New hash %s already in index, skipping merge",t.hash.substring(0,8)),{orphanedDocIds:[]};let br=await fo(dt,null,n,Ye);for(let K of br)Ye.set(K.commitHash,K);let xu={version:3,entries:[...Ye.values()],commitAliases:Nt?.commitAliases},Yo=e.map(K=>K.commitHash.substring(0,8)).join(", "),Xo=[{path:`summaries/${dt.commitHash}.json`,content:JSON.stringify(dt,null,"	")},{path:pn,content:JSON.stringify(xu,null,"	")},xc(An,Ye,dt)];return await(await H(i,n)).writeFiles(Xo,`Merge summaries [${Yo}] \u2192 ${t.hash.substring(0,8)}`),D.info("Summaries merged: [%s] \u2192 %s (%d children, %d orphaned docs, %d unresolved orphan hashes)",Yo,t.hash.substring(0,8),c.length,x.length,P.length),{orphanedDocIds:x}}async function Bv(e,t,n){await Qs(t,()=>{D.warn("removeFromIndex: could not acquire orphan-write lock within %dms \u2014 skipping removal of %s",Lh,e.substring(0,8))},async()=>{let r=await ee(t,n);if(!r)return;let o=r.entries.filter(d=>d.commitHash!==e);if(o.length===r.entries.length)return;let s={version:r.version,entries:o,commitAliases:r.commitAliases},i=[{path:pn,content:JSON.stringify(s,null,"	")}],a=await bt(t,n),l=oA(a,e);l&&i.push(l),await(await H(n,t)).writeFiles(i,`Remove index entry for ${e.substring(0,8)}`),D.info("Removed %s from index",e.substring(0,8))})}async function qh(e,t,n){let o=await(await H(n,t)).readFile(`transcripts/${e}.json`);if(!o)return null;try{return JSON.parse(o)}catch{return D.warn("Failed to parse transcript for %s",e.substring(0,8)),null}}async function Wv(e,t,n){let r=new Map;for(let o of e){let s=await qh(o,t,n);s&&r.set(o,s)}return r}async function Jv(e,t,n){let r=new Map;if(e.length===0)return r;let o=await po(n,t),s=l=>`transcripts/${l}.json`,i=e.map(s),a=o.batchReadFiles?await o.batchReadFiles(i):await qv(o,i);for(let l of e){let c=a.get(s(l));if(!c){r.set(l,null);continue}try{r.set(l,JSON.parse(c))}catch{D.warn("Failed to parse transcript for %s",l.substring(0,8)),r.set(l,null)}}return r}async function qv(e,t){let n=await Eh(t,Gv,o=>e.readFile(o),(o,s)=>(D.warn("readFile failed for %s: %s",o,R(s)),null)),r=new Map;for(let o=0;o<t.length;o++)r.set(t[o],n[o]??null);return r}async function Kh(e,t,n,r){let o=[];for(let{hash:i,data:a}of e)o.push({path:`transcripts/${i}.json`,content:JSON.stringify(a,null,"	")});for(let i of t)o.push({path:`transcripts/${i}.json`,content:"",delete:!0});if(o.length===0||V())return;let s=[e.length>0?`${e.length} written`:"",t.length>0?`${t.length} deleted`:""].filter(Boolean).join(", ");await Te(n,"saveTranscriptsBatch",async()=>{await(await H(r,n)).writeFiles(o,`Update transcripts: ${s}`),D.info("Transcript batch: %s",s)})}async function Kv(e,t,n){await Kh([],[e],t,n)}async function Ac(e,t){let r=await(await H(t,e)).listFiles("transcripts/"),o=new Set;for(let s of r){let i=Xs(s);i&&o.add(i)}return o}function Vv(e,t){return t.filter(n=>n.commitHash.startsWith(e))}async function Vh(e,t,n){if(e.length===0)return null;let r=e.toLowerCase(),o=await nt(r,t,n);if(o)return o;let s=Zh(await po(n,t));if(s){if(r.length===zs){let c=await s.lookupAlias(r);if(c)return nt(c,t,n)}else{let c=await s.findHashesByPrefix(r);if(c.length===1)return nt(c[0],t,n);if(c.length>=2)throw new uo(r,c)}let l=await xr(r,t);if(l){let c=await s.findShallowestByTreeHash(l);if(c)return nt(c,t,n)}return null}let i=await ee(t,n);if(!i)return null;if(r.length===zs){let l=i.commitAliases?.[r];if(l)return nt(l,t,n)}else{let l=Vv(r,i.entries);if(l.length===1)return nt(l[0].commitHash,t,n);if(l.length>=2)throw new uo(r,l.map(c=>c.commitHash))}if(i.version===3){let l=await xr(r,t);if(l){let c=new Map(i.entries.map(u=>[u.commitHash,u])),d=Xh(l,i.entries,c);if(d)return nt(d.commitHash,t,n)}}return null}async function Yv(e=10,t,n){let r=await ee(t,n);if(!r||r.entries.length===0)return[];let i=[...r.entries.filter(co)].sort((l,c)=>new Date(q(c)).getTime()-new Date(q(l)).getTime()).slice(0,e),a=[];for(let l of i){let c=await Vh(l.commitHash,t,n);c&&a.push(c)}return a}async function Xv(e){let t=await ee(e);if(!t||t.entries.length===0)return new Set;let n=new Set(t.entries.map(r=>r.commitHash));if(t.commitAliases)for(let r of Object.keys(t.commitAliases))n.add(r);return n}async function zv(e,t){let n=await ee(e,t);if(!n)return new Map;let r=new Map(n.entries.map(o=>[o.commitHash,o]));if(n.commitAliases)for(let[o,s]of Object.entries(n.commitAliases)){let i=r.get(s);i&&!r.has(o)&&r.set(o,i)}return r}async function Qv(e,t,n,r){if(V())return!1;let o=r??n,s=await ee(t,o);if(!s||s.version!==3)return!1;let i=s.commitAliases??{},a=new Set(s.entries.map(d=>d.commitHash)),l=new Map(s.entries.map(d=>[d.commitHash,d])),c={};for(let d of e){if(a.has(d)||i[d])continue;let u=await xr(d,t);if(!u)continue;let p=Xh(u,s.entries,l);p&&(c[d]=p.commitHash,D.info("Tree hash match: %s \u2192 %s (treeHash: %s)",d.substring(0,8),p.commitHash.substring(0,8),u.substring(0,8)))}return Object.keys(c).length===0?!1:await Qs(t,()=>(D.debug("scanTreeHashAliases: orphan-write lock contention \u2014 alias write deferred"),!1),async()=>{let d=await ee(t,n);if(!d||d.version!==3)return!1;if(o!==n){let k=await ee(t,o);if(k&&k.version===3){let b=new Set(d.entries.map(P=>P.commitHash)),x=k.entries.reduce((P,$)=>b.has($.commitHash)?P:P+1,0);if(x>0)return D.warn("scanTreeHashAliases: read side has %d row(s) write side lacks \u2014 deferring alias write to avoid shadow clobber",x),!1}}let u=d.commitAliases??{},p=new Set(d.entries.map(k=>k.commitHash)),m={...u},g=0;for(let[k,b]of Object.entries(c))p.has(k)||m[k]||(m[k]=b,g++);if(g===0)return!1;let h={...d,commitAliases:m},E=[{path:pn,content:JSON.stringify(h,null,"	")}];return await(await H(n,t)).writeFiles(E,`Add ${g} tree hash alias(es)`),!0})}async function Yh(e,t){let n=await ee(e,t);return n?n.entries.filter(co).length:0}async function Zv(e,t){let n=await ee(e,t);return!n||n.entries.length===0?!1:n.version!==3}async function eA(e,t){return Te(e,"migrateIndexToV3",()=>tA(e,t))}async function tA(e,t){let n=await ee(e,t);if(!n)return D.info("No index found \u2014 nothing to migrate"),{migrated:0,skipped:0};if(n.version===3)return D.info("Index already at v3 \u2014 skipping migration"),{migrated:0,skipped:0};let r=0,o=0,s=new Map,i=[];for(let u of n.entries){let p=await nt(u.commitHash,e,t);if(!p){D.warn("Could not load summary for %s \u2014 skipping",u.commitHash.substring(0,8)),o++;continue}try{let m=await fo(p,null,e);for(let g of m)s.set(g.commitHash,g);i.push(un(p)),r++}catch(m){D.warn("Failed to flatten summary for %s: %s",u.commitHash.substring(0,8),m.message),o++}}let a={version:3,entries:[...s.values()]},l={version:1,entries:i},c=[{path:pn,content:JSON.stringify(a,null,"	")},{path:mo,content:JSON.stringify(l,null,"	")}];return await(await H(t,e)).writeFiles(c,`Migrate index v1 \u2192 v3 (${r} entries)`),D.info("Index migrated to v3: %d migrated, %d skipped",r,o),{migrated:r,skipped:o}}async function fo(e,t,n,r){let o=await xr(e.commitHash,n)??void 0,s=t===null,i;if(s){let c=e.diffStats,d=r?.get(e.commitHash)?.diffStats,u;c?u=c:d?u=d:u=await ss(`${e.commitHash}^`,e.commitHash,n),i={topicCount:dc(e),diffStats:u}}let l=[{commitHash:e.commitHash,parentCommitHash:t,treeHash:o,commitType:e.commitType,commitMessage:e.commitMessage,commitDate:e.commitDate,branch:e.branch,generatedAt:e.generatedAt,...i&&{topicCount:i.topicCount,diffStats:i.diffStats}}];for(let c of e.children??[]){let d=await fo(c,e.commitHash,n,r);l.push(...d)}return l}async function nt(e,t,n){let o=await(await po(n,t)).readFile(`summaries/${e}.json`);if(!o)return null;try{return JSON.parse(o)}catch(s){return D.error("Failed to parse summary for %s: %s",e.substring(0,8),s.message),null}}function Xh(e,t,n){let r=t.filter(s=>s.treeHash===e);if(r.length===0)return null;if(r.length===1)return r[0];let o=r.map(s=>{let i=0,a=new Set,l=s;for(;l?.parentCommitHash!=null&&!a.has(l.commitHash);)a.add(l.commitHash),i++,l=n.get(l.parentCommitHash);return{entry:s,depth:i}});return o.sort((s,i)=>s.depth!==i.depth?s.depth-i.depth:new Date(q(i.entry)).getTime()-new Date(q(s.entry)).getTime()),o[0].entry}async function go(e,t){return ee(e,t)}async function ee(e,t){let n=await po(t,e),r=await n.readFile(pn);if(!r)return D.debug("loadIndex: no index.json in %s storage",n.kind??"unknown"),null;try{return JSON.parse(r)}catch(o){return D.error("Failed to parse index.json: %s",o.message),null}}function un(e){let t=qs(e).map(n=>({title:n.title,...n.decisions!==void 0&&{decisions:n.decisions},...n.category!==void 0&&{category:n.category},...n.importance!==void 0&&{importance:n.importance},...n.filesAffected&&n.filesAffected.length>0&&{filesAffected:n.filesAffected}}));return{commitHash:e.commitHash,...e.recap!==void 0&&{recap:e.recap},...e.ticketId!==void 0&&{ticketId:e.ticketId},...t.length>0&&{topics:t}}}async function bt(e,t){let r=await(await H(t,e)).readFile(mo);if(!r)return null;try{return JSON.parse(r)}catch(o){return D.error("Failed to parse catalog.json: %s",o.message),null}}async function nA(e,t){return bt(e,t)}async function rA(e,t){let n=await H(t,e),r=await bt(e,n)??{version:1,entries:[]},o=await ee(e,n);if(!o||o.entries.length===0)return r;let s=new Set(o.entries.filter(co).map(c=>c.commitHash)),i=new Set(r.entries.map(c=>c.commitHash)),a=r.entries.filter(c=>s.has(c.commitHash)).length,l=[];for(let c of s)i.has(c)||l.push(c);return a===r.entries.length&&l.length===0?r:await Qs(e,async()=>{D.debug("getCatalogWithLazyBuild: orphan-write lock contention \u2014 returning in-memory catalog without writeback");let c=r.entries.filter(u=>s.has(u.commitHash)),d=[];for(let u of l){let p=await nt(u,e,n);p&&d.push(un(p))}return{version:1,entries:[...c,...d]}},async()=>{let c=await bt(e,n)??{version:1,entries:[]},d=await ee(e,n);if(!d||d.entries.length===0)return c;let u=new Set(d.entries.filter(co).map(b=>b.commitHash)),p=c.entries.filter(b=>u.has(b.commitHash)),m=new Set(p.map(b=>b.commitHash)),g=[];for(let b of u)m.has(b)||g.push(b);if(p.length===c.entries.length&&g.length===0)return c;let h=[];for(let b of g){let x=await nt(b,e,n);x?h.push(un(x)):D.warn("Catalog lazy build: summary file missing for root %s",b.substring(0,8))}let E={version:1,entries:[...p,...h]},S=c.entries.length-p.length,k=`catalog: reconcile (+${h.length}, -${S})`;return await n.writeFiles([{path:mo,content:JSON.stringify(E,null,"	")}],k),E})}function xc(e,t,n){let r=new Set([...t.values()].filter(co).map(a=>a.commitHash)),i={version:1,entries:[...(e?.entries??[]).filter(a=>r.has(a.commitHash)&&a.commitHash!==n.commitHash),un(n)]};return{path:mo,content:JSON.stringify(i,null,"	")}}function oA(e,t){if(!e)return null;let n=e.entries.filter(o=>o.commitHash!==t);return n.length===e.entries.length?null:{path:mo,content:JSON.stringify({version:1,entries:n},null,"	")}}async function sA(e,t,n,r,o){if(e.length===0||V())return;let s=e.map(i=>({path:`plans/${i.slug}.md`,content:i.content,branch:r}));await Te(n,"storePlans",async()=>{await(await H(o,n)).writeFiles(s,t),D.info("Stored %d plan file(s)",e.length)})}async function iA(e,t,n){try{return await(await H(n,t)).readFile(`plans/${e}.md`)}catch{return null}}async function aA(e,t,n,r){let o=await H(r,n);o.deletePlanVisible&&await o.deletePlanVisible(e,t)}async function lA(e,t,n){try{let o=await(await H(n,t)).readFile(`plan-progress/${e}.json`);return o?JSON.parse(o):null}catch{return null}}async function cA(e,t,n,r,o){if(e.length===0||V())return;let s=e.map(i=>({path:`notes/${i.id}.md`,content:i.content,branch:r}));await Te(n,"storeNotes",async()=>{await(await H(o,n)).writeFiles(s,t),D.info("Stored %d note file(s)",e.length)})}async function dA(e,t,n,r){let o=await H(r,n);o.deleteNoteVisible&&await o.deleteNoteVisible(e,t)}async function uA(e,t,n){try{return await(await H(n,t)).readFile(`notes/${e}.md`)}catch{return null}}function zh(e,t){if(!um(e))throw new Error(`orphanPathFor: refusing unknown reference source ${JSON.stringify(e)}`);let n=`${e}:`,r=t.startsWith(n)?t.slice(n.length):t,o=dm(e,r);return`references/${e}/${o}.md`}async function pA(e,t,n,r,o){if(e.length===0||V())return;let s=e.map(i=>({path:zh(i.source,i.archivedKey),content:i.content,branch:r}));await Te(n,"storeReferences",async()=>{await(await H(o,n)).writeFiles(s,t),D.info("Stored %d reference file(s) across sources",e.length)})}async function mA(e,t,n,r,o){if(e.length===0||V())return;let s=e.map(i=>({path:i.path,content:i.content,branch:r}));await Te(n,"storeSkills",async()=>{await(await H(o,n)).writeFiles(s,t),D.info("Stored %d skill file(s)",e.length)})}async function fA(e,t,n){try{return await(await H(n,t)).readFile(e)}catch{return null}}async function gA(e,t,n,r){let o=await H(r,n);try{return await o.readFile(zh(e,t))}catch{return null}}var lo,D,pn,mo,bc,Lh,Gv,zs,uo,rt=y(()=>{"use strict";w();ps();Sh();Se();Qe();Js();is();mc();jr();di();li();fc();ao();Wt();sl();Sc();D=f("SummaryStore"),pn="index.json",mo="catalog.json",bc=3e4,Lh=1e3;Gv=8;zs=40,uo=class extends Error{constructor(t,n){if(n.length<2)throw new Error(`AmbiguousHashError requires \u22652 matches (got ${n.length}); use null/undefined for "not found"`);if(t.length===0||t.length>=zs)throw new Error(`AmbiguousHashError prefix must be 1..${zs-1} chars (got length ${t.length})`);super(`abbreviation \`${t}\` is ambiguous; please use a longer prefix (matched ${n.length} commits)`),this.name="AmbiguousHashError",this.prefix=t,this.matches=n}static is(t){return t instanceof Error&&t.name==="AmbiguousHashError"&&typeof t.prefix=="string"&&Array.isArray(t.matches)}}});var t1,ey=y(()=>{"use strict";w();rt();t1=f("ProcessedSourceStore")});var s1,ty=y(()=>{"use strict";w();rt();s1=f("TopicIndexStore")});function ny(e){if(!e.startsWith("topics/")||!e.endsWith(".json"))return!1;let t=e.slice(7,-5);return t.length>0&&!t.includes("/")&&!hA.has(t)}var hA,ry,a1,l1,Cc=y(()=>{"use strict";hA=new Set(["index","processed"]);ry=[["summaries/",e=>e.endsWith(".json")],["transcripts/",e=>e.endsWith(".json")],["plans/",e=>e.endsWith(".md")],["notes/",e=>e.endsWith(".md")],["references/",e=>e.endsWith(".md")],["skills/",e=>e.endsWith(".md")],["plan-progress/",e=>e.endsWith(".json")],["topics/",ny]],a1=ry.map(([e])=>e),l1=Object.fromEntries(ry)});var m1,oy=y(()=>{"use strict";Cc();w();rt();m1=f("TopicPageStore")});var S1,b1,sy=y(()=>{"use strict";Pa();w();Ut();sc();Zn();S1=f("ImportState"),b1=10*6e4});var Ic=y(()=>{"use strict"});var R1,Nc=y(()=>{"use strict";w();R1=f("DashboardScope")});function yA(e){let t=iy.get(e);return t||(t=new Intl.DateTimeFormat("en-CA",{timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}),iy.set(e,t)),t}function ui(e,t){let n=yA(t).formatToParts(e),r=o=>Number.parseInt(n.find(s=>s.type===o)?.value??"0",10);return{year:r("year"),month:r("month"),day:r("day"),hour:r("hour"),minute:r("minute")}}function wA(e,t){let n=ui(e,t);return`${n.year}-${String(n.month).padStart(2,"0")}-${String(n.day).padStart(2,"0")}`}function ly(e,t){let n=ay.get(t);if(n&&e>=n.fromMs&&e<n.toMs)return n.key;let r=ui(e,t),o=`${r.year}-${String(r.month).padStart(2,"0")}-${String(r.day).padStart(2,"0")}`,s=cy(r.year,r.month,r.day,t);return ay.set(t,{fromMs:s,toMs:dy(s,1,t),key:o}),o}function cy(e,t,n,r){let o=Date.UTC(e,t-1,n),s=o;for(let i=0;i<3;i++){let a=ui(s,r),l=Date.UTC(a.year,a.month-1,a.day,a.hour,a.minute)-o;if(l===0)return s;s-=l}return EA(e,t,n,r)}function EA(e,t,n,r){let o=`${e}-${String(t).padStart(2,"0")}-${String(n).padStart(2,"0")}`,s=Date.UTC(e,t-1,n),i=Math.floor((s-15*36e5)/6e4),a=Math.ceil((s+14*36e5)/6e4);for(;a-i>1;){let l=Math.floor((i+a)/2);wA(l*6e4,r)<o?i=l:a=l}return a*6e4}function Pc(e,t){let n=ui(e,t);return cy(n.year,n.month,n.day,t)}function dy(e,t,n){if(!Number.isInteger(t))throw new Error(`addLocalDays: days must be a finite integer, got ${t}`);let r=Pc(e,n),o=t>=0?1:-1;for(let s=0;s!==t;s+=o)r=Pc(r+o*864e5+432e5,n);return r}var iy,ay,uy=y(()=>{"use strict";iy=new Map;ay=new Map});var Oc,Dc,C1,ho,pi=y(()=>{"use strict";Nc();Oc=`LEFT JOIN commits cm ON cm.repo_id = m.repo_id AND cm.hash = m.commit_hash
	  LEFT JOIN (
	      SELECT a.repo_id, a.target_hash, c.hash AS live_hash, MAX(c.committed_at_ms) AS at_ms
	        FROM commit_aliases a
	        JOIN commits c ON c.repo_id = a.repo_id AND c.hash = a.old_hash
	       GROUP BY a.repo_id, a.target_hash
	  ) al ON al.repo_id = m.repo_id AND al.target_hash = m.commit_hash`,Dc="COALESCE(cm.committed_at_ms, al.at_ms, m.commit_date_ms)",C1=`WITH memory_landing AS (
	SELECT m.repo_id, m.commit_hash,
	       COALESCE(cm.hash, al.live_hash, m.commit_hash) AS live_hash,
	       ${Dc} AS at_ms
	  FROM memories m
	  ${Oc}
	 WHERE m.parent_hash IS NULL
)`,ho=`SELECT ${Dc} AS at_ms
	  FROM memories m
	  ${Oc}
	 WHERE m.repo_id = ? AND m.commit_hash = ?`});function yo(e,t){if(t.length===0)return;let n=e.prepare("SELECT DISTINCT tz FROM stats_daily").all();if(n.length!==0)for(let{tz:r}of n){let o=[...new Set(t.map(s=>ly(s,r)))];e.prepare(`DELETE FROM stats_daily WHERE tz = ? AND day IN (${o.map(()=>"?").join(", ")})`).run(r,...o)}}var U1,TA,_A,kA,RA,B1,Lc=y(()=>{"use strict";w();Ut();Nc();uy();pi();U1=f("StatsRollup"),TA={model:!0,agent:!0,project:!0,branch:!0,ticket:!0,category:!0},_A=Object.keys(TA),kA="built",RA="tokens",B1=[..._A,RA,kA]});function Tt(e){if(e==null)return null;try{return JSON.parse(e)}catch{return null}}function py(e){let t=/^#\s+(.+)$/m.exec(e);return t?t[1].trim():null}function my(e,t,n){for(let{path:r,accepts:o}of AA){let s=e;for(let a of r){if(s==null||typeof s!="object"){s=void 0;break}s=s[a]}s==null||(o==="integer"?Number.isInteger(s):typeof s=="number")||n("off-type numeric",`${t}.${r.join(".")} is ${typeof s} (${JSON.stringify(s)}) \u2014 column reads NULL`)}}function fy(e,t,n,r){let o=Date.parse(e.commitDate??"");return Number.isFinite(o)?o:(r("commit date",`${t} has no parsable commitDate \u2014 falling back to first-seen time`),n)}function gy(e,t,n,r,o){let s=e.prepare(ho),i=e.prepare("SELECT target_hash FROM commit_aliases WHERE repo_id = ? AND old_hash = ?").get(t,n)?.target_hash,a=i!==void 0&&i!==r?[r,i]:[r],l=u=>s.get(t,u)?.at_ms??void 0,c=[],d=!1;for(let u of a){let p=s.get(t,u);u===r&&(d=p!==void 0),p?.at_ms!=null&&c.push(p.at_ms)}if(!d)return{stored:!1,days:[]};e.prepare(`INSERT INTO commit_aliases (repo_id, old_hash, target_hash, created_ms) VALUES (?, ?, ?, ?)
		 ON CONFLICT(repo_id, old_hash) DO UPDATE SET target_hash = excluded.target_hash`).run(t,n,r,o);for(let u of a){let p=l(u);p!==void 0&&c.push(p)}return i!==void 0&&i!==r&&vA.info("alias %s retargeted %s -> %s",n,i,r),{stored:!0,days:c}}function hy(e,t){let n=e.prepare("SELECT commit_hash, parent_hash, root_hash, depth FROM memories WHERE repo_id = ?").all(t),r=new Map,o=[];for(let l of n)if(l.parent_hash===null)o.push({hash:l.commit_hash,root:l.commit_hash,depth:0});else{let c=r.get(l.parent_hash)??[];c.push(l.commit_hash),r.set(l.parent_hash,c)}let s=e.prepare("UPDATE memories SET root_hash = ?, depth = ? WHERE repo_id = ? AND commit_hash = ?"),i=new Map(n.map(l=>[l.commit_hash,l])),a=0;for(;o.length>0;){let{hash:l,root:c,depth:d}=o.shift();a++;let u=i.get(l);(u.root_hash!==c||u.depth!==d)&&s.run(c,d,t,l);for(let p of r.get(l)??[])o.push({hash:p,root:c,depth:d+1})}if(a!==n.length)throw new Error(`remountRepo: ${n.length-a} node(s) unreachable from any root \u2014 cycle in batch`)}var vA,AA,yy=y(()=>{"use strict";wh();ey();Ze();jr();rt();Wt();ty();oy();w();Ut();Cc();sy();Zn();pc();Ic();Lc();pi();vA=f("SotImport");AA=[{path:["conversationTurns"],accepts:"integer"},{path:["conversationTokens"],accepts:"integer"},{path:["estimatedCostUsd"],accepts:"number"},{path:["diffStats","filesChanged"],accepts:"integer"},{path:["diffStats","insertions"],accepts:"integer"},{path:["diffStats","deletions"],accepts:"integer"}]});function CA(e){let t=[],n=(r,o,s)=>{t.push({hash:r.commitHash,parentInFile:o,pos:s,summary:r}),(r.children??[]).forEach((i,a)=>{n(i,r.commitHash,a)})};return n(e,null,null),t}function IA(e){let t={summaryDeletes:[],summaryTrees:[],transcriptWrites:[],transcriptDeletes:[],contextWrites:[],contextDeletes:[],progressWrites:[],progressDeletes:[],topicPageWrites:[],topicPageDeletes:[],treeHashes:new Map,aliases:new Map,topicSummaries:new Map,processedSet:null,v5State:null};for(let n of e){let r=n.delete===!0,o=n.path.match(/^summaries\/([0-9a-f]+)\.json$/);if(o){if(r){t.summaryDeletes.push(o[1]);continue}let c=Tt(n.content);if(!c?.commitHash)throw new Error(`SotWrite: unparsable summary at ${n.path}`);t.summaryTrees.push(CA(c));continue}if(n.path==="index.json"){if(r)continue;let c=Tt(n.content);for(let d of c?.entries??[])d.treeHash&&t.treeHashes.set(d.commitHash,d.treeHash);for(let[d,u]of Object.entries(c?.commitAliases??{}))t.aliases.set(d,u);continue}if(n.path==="catalog.json")continue;if(n.path==="topics/index.json"){if(r)continue;let c=Tt(n.content);for(let d of c?.topics??[])d.stableSlug&&d.summary!==void 0&&t.topicSummaries.set(d.stableSlug,d.summary);continue}if(n.path==="topics/processed.json"){t.processedSet=r?null:n.content;continue}if(n.path==="schema-v5-migration.json"){r||(t.v5State=n.content);continue}let s=n.path.match(/^transcripts\/(.+)\.json$/);if(s){r?t.transcriptDeletes.push(s[1]):t.transcriptWrites.push({id:s[1],content:n.content});continue}let i=n.path.match(/^(plans|notes|references|skills)\/(.+)\.md$/);if(i){let c=xA[i[1]];r?t.contextDeletes.push({kind:c,key:i[2]}):t.contextWrites.push({kind:c,key:i[2],body:n.content});continue}let a=n.path.match(/^plan-progress\/(.+)\.json$/);if(a){r?t.progressDeletes.push(a[1]):t.progressWrites.push({pathSlug:a[1],content:n.content});continue}let l=n.path.match(/^topics\/([^/]+)\.json$/);if(l){r?t.topicPageDeletes.push(l[1]):t.topicPageWrites.push({slug:l[1],content:n.content});continue}throw new Error(`SotWrite: no table backs path ${n.path}`)}return t}function wo(e,t){mn.warn("SotWrite: dropping unparsable %s (%s) -- keeping the rest of the batch",e,t)}function NA(e,t,n){let r=/-([0-9a-f]{8})$/.exec(n);return r?e.prepare("SELECT branch FROM memories WHERE repo_id = ? AND commit_hash LIKE ? || '%' LIMIT 1").get(t,r[1])?.branch??null:null}function PA(e,t,n,r){let o=[];for(let g of n.summaryDeletes){let h=e.prepare(ho).get(t,g);h?.at_ms!=null&&o.push(h.at_ms),e.prepare("DELETE FROM memories WHERE repo_id = ? AND commit_hash = ?").run(t,g)}if(yo(e,o),n.summaryTrees.length===0)return;let s=new Set;for(let g of n.summaryTrees)for(let h of g)"children"in h.summary&&s.add(h.hash);let i=e.prepare(`UPDATE memories SET child_pos = child_pos + ${1e6}
		  WHERE repo_id = ? AND parent_hash = ? AND child_pos < ${1e6}`);for(let g of s)i.run(t,g);let a=new Map;for(let g of n.summaryTrees)for(let h of g){if(h.parentInFile===null||h.pos===null)continue;let E=a.get(h.parentInFile)??new Map;E.set(h.hash,h.pos),a.set(h.parentInFile,E)}let l=e.prepare(`INSERT INTO memories (repo_id, commit_hash, parent_hash, child_pos, root_hash, depth,
		                       summary_json, tree_hash, first_seen_ms, written_at_ms, commit_date_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(repo_id, commit_hash) DO UPDATE SET
		   parent_hash = excluded.parent_hash, child_pos = excluded.child_pos,
		   summary_json = excluded.summary_json,
		   tree_hash = COALESCE(excluded.tree_hash, memories.tree_hash),
		   written_at_ms = excluded.written_at_ms, commit_date_ms = excluded.commit_date_ms`),c=(g,h)=>mn.info("write degraded a value: %s %s",g,h);for(let g of n.summaryTrees)for(let h of g){let E=h.parentInFile,S=h.pos;if(h.parentInFile===null){let x=e.prepare("SELECT parent_hash, child_pos FROM memories WHERE repo_id = ? AND commit_hash = ?").get(t,h.hash);x&&(E=x.parent_hash,S=x.child_pos,S!==null&&S>=1e6&&((E===null?void 0:a.get(E))?.has(h.hash)||(E=null,S=null)))}let k=JSON.stringify("children"in h.summary?{...h.summary,children:[]}:h.summary);l.run(t,h.hash,E,S,h.hash,0,k,n.treeHashes.get(h.hash)??null,r,r,fy(h.summary,h.hash,r,c)),my(h.summary,h.hash,c),e.prepare("DELETE FROM memory_topics WHERE repo_id = ? AND commit_hash = ?").run(t,h.hash);let b=e.prepare("INSERT INTO memory_topics (repo_id, commit_hash, pos, category, importance, title) VALUES (?, ?, ?, ?, ?, ?)");(h.summary.topics??[]).forEach((x,P)=>{if(!x.title){c("topic",`${h.hash}[${P}] has no title`);return}b.run(t,h.hash,P,x.category??null,x.importance??null,x.title)})}let d=e.prepare(`UPDATE memories SET parent_hash = NULL, child_pos = NULL
		  WHERE repo_id = ? AND parent_hash = ? AND child_pos >= ${1e6}`),u=[],p=e.prepare(`SELECT m.commit_hash FROM memories m
		  WHERE m.repo_id = ? AND m.parent_hash = ? AND m.child_pos >= ${1e6}`),m=e.prepare(ho);for(let g of s){for(let{commit_hash:h}of p.all(t,g)){let E=m.get(t,h);E?.at_ms!=null&&u.push(E.at_ms)}d.run(t,g)}yo(e,u),hy(e,t)}function OA(e,t,n,r){let o=[];for(let[s,i]of n.aliases){let a=gy(e,t,s,i,r);if(!a.stored){mn.info("dropping alias %s -> %s (no such memory row)",s,i);continue}o.push(...a.days)}yo(e,o)}function DA(e,t,n,r){let o=new Set;for(let s of n.transcriptDeletes)e.prepare("DELETE FROM transcript_sessions WHERE repo_id = ? AND transcript_id = ?").run(t,s),e.prepare("DELETE FROM memory_transcripts WHERE repo_id = ? AND transcript_id = ?").run(t,s),e.prepare("DELETE FROM transcripts WHERE repo_id = ? AND transcript_id = ?").run(t,s),Ks(e,t,s);for(let{id:s,content:i}of n.transcriptWrites){let a=Tt(i);if(!a||!Array.isArray(a.sessions)){wo("transcript",s);continue}e.prepare(`INSERT INTO transcripts (repo_id, transcript_id, sessions_blob, written_at_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, transcript_id) DO UPDATE SET sessions_blob = excluded.sessions_blob,
			   written_at_ms = excluded.written_at_ms`).run(t,s,(0,wy.deflateSync)(Buffer.from(i,"utf8")),r),e.prepare("DELETE FROM transcript_sessions WHERE repo_id = ? AND transcript_id = ?").run(t,s);for(let l of a.sessions)l.sessionId&&e.prepare(`INSERT INTO transcript_sessions (repo_id, transcript_id, session_id, source) VALUES (?, ?, ?, ?)
				 ON CONFLICT(repo_id, transcript_id, session_id) DO UPDATE SET source = excluded.source`).run(t,s,l.sessionId,l.source??null);Ks(e,t,s),uc(e,t,s,a.sessions,r),o.add(s)}return o}function LA(e,t,n,r){if(r.size===0)return;let o=new Set(n.summaryTrees.flat().map(c=>c.hash)),s=new Set(n.summaryTrees.flat().flatMap(c=>[...Bt(c.summary,r)])),i=[...r].filter(c=>!s.has(c));if(i.length===0)return;let a=e.prepare("SELECT commit_hash, summary_json FROM memories WHERE repo_id = ? AND summary_json LIKE ?"),l=e.prepare(`INSERT INTO memory_transcripts (repo_id, commit_hash, transcript_id) VALUES (?, ?, ?)
		 ON CONFLICT(repo_id, commit_hash, transcript_id) DO NOTHING`);for(let c of i){let d=a.all(t,`%${c}%`);for(let u of d){if(o.has(u.commit_hash))continue;let p=Tt(u.summary_json);p&&Bt(p,r).includes(c)&&(l.run(t,u.commit_hash,c),mn.info("linked stored transcript %s to memory %s written earlier",c,u.commit_hash))}}}function MA(e,t,n){if(n.summaryTrees.length===0)return;let r=new Set(e.prepare("SELECT transcript_id FROM transcripts WHERE repo_id = ?").all(t).map(o=>o.transcript_id));for(let o of n.summaryTrees)for(let s of o){let i=[...new Set(Bt(s.summary,r).filter(a=>r.has(a)))];for(let a of s.summary.transcripts??[])r.has(a)||mn.info("dropping dangling transcript link %s \u2192 %s (no transcript row)",s.hash,a);e.prepare("DELETE FROM memory_transcripts WHERE repo_id = ? AND commit_hash = ?").run(t,s.hash);for(let a of i)e.prepare("INSERT INTO memory_transcripts (repo_id, commit_hash, transcript_id) VALUES (?, ?, ?)").run(t,s.hash,a)}}function $A(e,t,n,r){for(let{kind:s,key:i}of n.contextDeletes)e.prepare("DELETE FROM context WHERE repo_id = ? AND kind = ? AND context_key = ?").run(t,s,i);let o=e.prepare(`INSERT INTO context (repo_id, kind, context_key, source, native_id, tool_name, referenced_at,
		                      original_slug, branch, title, url, body_md, created_at_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(repo_id, kind, context_key) DO UPDATE SET
		   source = excluded.source, native_id = excluded.native_id, tool_name = excluded.tool_name,
		   referenced_at = excluded.referenced_at, original_slug = excluded.original_slug,
		   branch = excluded.branch, title = excluded.title, url = excluded.url,
		   body_md = excluded.body_md, updated_at_ms = ?`);for(let{kind:s,key:i,body:a}of n.contextWrites){if(s==="reference"){let d=ol(a);if(!d){wo("reference frontmatter",`references/${i}.md`);continue}o.run(t,s,i,d.source,d.nativeId,d.toolName,d.referencedAt,null,null,d.title,d.url??null,a,r,r);continue}let l=s==="plan"||s==="note"?NA(e,t,i):null,c=s==="plan"&&l!==null?i.replace(/-[0-9a-f]{8}$/,""):null;o.run(t,s,i,null,null,null,null,c,l,py(a),null,a,r,r)}}function FA(e,t,n,r){for(let o of n.progressDeletes)e.prepare("DELETE FROM plan_progress WHERE repo_id = ? AND plan_slug = ?").run(t,o);for(let{pathSlug:o,content:s}of n.progressWrites){let i=Tt(s);if(!i){wo("plan-progress",`plan-progress/${o}.json`);continue}let a=i.planSlug??o;if(!e.prepare("SELECT 1 AS ok FROM context WHERE repo_id = ? AND kind = 'plan' AND context_key = ?").get(t,a)){mn.warn("plan-progress for %s has no plan row -- skipping the artifact, keeping the rest of the batch",a);continue}e.prepare(`INSERT INTO plan_progress (repo_id, plan_slug, artifact_json, updated_at_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, plan_slug) DO UPDATE SET
			   artifact_json = excluded.artifact_json, updated_at_ms = excluded.updated_at_ms`).run(t,a,s,r)}}function jA(e,t,n,r){for(let o of n.topicPageDeletes)e.prepare("DELETE FROM topic_pages WHERE repo_id = ? AND stable_slug = ?").run(t,o);for(let{slug:o,content:s}of n.topicPageWrites){let i=Tt(s);if(!i?.stableSlug||i.title===void 0||i.content===void 0||!i.lastUpdatedAt){wo("topic page",`topics/${o}.json`);continue}e.prepare(`INSERT INTO topic_pages (repo_id, stable_slug, title, summary, content_md,
			                          related_branches_json, last_updated_at, payload_version)
			 VALUES (?, ?, ?, ?, ?, ?, ?, ?)
			 ON CONFLICT(repo_id, stable_slug) DO UPDATE SET
			   title = excluded.title, content_md = excluded.content_md,
			   related_branches_json = excluded.related_branches_json,
			   last_updated_at = excluded.last_updated_at, payload_version = excluded.payload_version`).run(t,i.stableSlug,i.title,n.topicSummaries.get(i.stableSlug)??null,i.content,JSON.stringify(i.relatedBranches??[]),i.lastUpdatedAt,i.schemaVersion??1),e.prepare("DELETE FROM topic_source_refs WHERE repo_id = ? AND stable_slug = ?").run(t,i.stableSlug),(i.sourceRefs??[]).forEach((a,l)=>{e.prepare(`INSERT INTO topic_source_refs (repo_id, stable_slug, pos, ref_type, ref_id, ts, branch)
				 VALUES (?, ?, ?, ?, ?, ?, ?)`).run(t,i.stableSlug,l,a.type,a.id,a.timestamp,a.branch??null)})}for(let[o,s]of n.topicSummaries){let i=e.prepare("UPDATE topic_pages SET summary = ? WHERE repo_id = ? AND stable_slug = ?").run(s,t,o);Number(i.changes)===0&&mn.info("topics/index.json names %s but no page row exists \u2014 summary dropped",o)}if(n.processedSet!==null){let o=Tt(n.processedSet);if(!o?.processed)wo("processed set","topics/processed.json");else{e.prepare("DELETE FROM topic_processed_sources WHERE repo_id = ?").run(t);let s=e.prepare(`INSERT INTO topic_processed_sources (repo_id, source_type, source_id) VALUES (?, ?, ?)
				 ON CONFLICT(repo_id, source_type, source_id) DO NOTHING`);for(let[i,a]of Object.entries(o.processed))for(let l of a)s.run(t,i,l)}}n.v5State!==null&&e.prepare(`INSERT INTO repo_state (repo_id, key, value) VALUES (?, 'v5-migration', ?)
			 ON CONFLICT(repo_id, key) DO UPDATE SET value = excluded.value`).run(t,n.v5State)}function Ey(e,t,n,r){let o=IA(n);Us(e,()=>{e.exec("PRAGMA defer_foreign_keys = ON"),PA(e,t,o,r),OA(e,t,o,r);let s=DA(e,t,o,r);MA(e,t,o),LA(e,t,o,s),$A(e,t,o,r),FA(e,t,o,r),jA(e,t,o,r)})}var wy,mn,xA,Sy=y(()=>{"use strict";wy=require("node:zlib");jr();Wt();w();Ut();pc();yy();Ic();Lc();pi();mn=f("SotWrite"),xA={plans:"plan",notes:"note",references:"reference",skills:"skill"}});function Ty(e){let t=new Map;for(let n of e){if(n.parent_hash==null)continue;let r=t.get(n.parent_hash)??[];r.push(n),t.set(n.parent_hash,r)}for(let n of t.values())n.sort((r,o)=>Number(r.child_pos)-Number(o.child_pos));return t}function Mc(e,t){let n=JSON.parse(t.summary_json);return"children"in n&&(n.children=(e.get(t.commit_hash)??[]).map(r=>Mc(e,r))),n}function HA(e,t,n){let r=e.prepare("SELECT root_hash, parent_hash FROM memories WHERE repo_id = ? AND commit_hash = ?").get(t,n);if(!r)return;let o=(r.parent_hash===null?e.prepare(`SELECT commit_hash, parent_hash, child_pos, tree_hash, summary_json
					   FROM memories WHERE repo_id = ? AND root_hash = ?`):e.prepare(`WITH RECURSIVE subtree(commit_hash) AS (
					     SELECT commit_hash FROM memories WHERE repo_id = ?1 AND commit_hash = ?2
					     UNION ALL
					     SELECT m.commit_hash FROM memories m
					       JOIN subtree s ON m.parent_hash = s.commit_hash
					      WHERE m.repo_id = ?1
					   )
					   SELECT m.commit_hash, m.parent_hash, m.child_pos, m.tree_hash, m.summary_json
					     FROM memories m JOIN subtree ON subtree.commit_hash = m.commit_hash
					    WHERE m.repo_id = ?1`)).all(t,r.parent_hash===null?r.root_hash:n),s=o.find(i=>i.commit_hash===n);return s?Mc(Ty(o),s):void 0}function Zh(e){if(e instanceof Jt)return e;let t=e?.primary;return t instanceof Jt?t:null}function UA(e){if(e===null)return{};try{return{diffStats:JSON.parse(e)}}catch{return{}}}var by,Jt,li=y(()=>{"use strict";by=require("node:zlib");Ut();Sy();w();rt();Jt=class{constructor(t,n){this.repoIdentity=t;this.dbPath=n;this.kind="sqlite"}async withDb(t){return rc(n=>{let r=n.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);if(!r)throw new Error(`SqliteStorage: no repos row for ${this.repoIdentity}`);return t(n,r.id)},{dbPath:this.dbPath})}async withDbOrAbsent(t,n){return rc(r=>{let o=r.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);return o?t(r,o.id):n},{dbPath:this.dbPath})}async readFile(t){return this.withDbOrAbsent((n,r)=>this.readOne(n,r,t),null)}async batchReadFiles(t){return this.withDbOrAbsent((n,r)=>{let o=new Map;for(let s of t)o.set(s,this.readOne(n,r,s));return o},new Map(t.map(n=>[n,null])))}readOne(t,n,r){let o=r.match(/^summaries\/([0-9a-f]+)\.json$/);if(o){let c=HA(t,n,o[1]);return c?JSON.stringify(c,null,"	"):null}if(r==="index.json")return this.synthIndex(t,n);if(r==="catalog.json")return this.synthCatalog(t,n);if(r==="topics/index.json")return this.synthTopicIndex(t,n);if(r==="topics/processed.json")return this.synthProcessed(t,n);if(r==="schema-v5-migration.json")return t.prepare("SELECT value FROM repo_state WHERE repo_id = ? AND key = 'v5-migration'").get(n)?.value??null;let s=r.match(/^topics\/([^/]+)\.json$/);if(s)return this.synthTopicPage(t,n,s[1]);let i=r.match(/^transcripts\/(.+)\.json$/);if(i){let c=t.prepare("SELECT sessions_blob FROM transcripts WHERE repo_id = ? AND transcript_id = ?").get(n,i[1]);return c?(0,by.inflateSync)(Buffer.from(c.sessions_blob)).toString("utf8"):null}let a=r.match(/^(plans|notes|references|skills)\/(.+)\.md$/);if(a){let c={plans:"plan",notes:"note",references:"reference",skills:"skill"}[a[1]];return t.prepare("SELECT body_md FROM context WHERE repo_id = ? AND kind = ? AND context_key = ?").get(n,c,a[2])?.body_md??null}let l=r.match(/^plan-progress\/(.+)\.json$/);return l?t.prepare("SELECT artifact_json FROM plan_progress WHERE repo_id = ? AND plan_slug = ?").get(n,l[1])?.artifact_json??null:null}allMemories(t,n){return t.prepare(`SELECT commit_hash, parent_hash, child_pos, tree_hash, summary_json, index_diff_stats_json
				   FROM memories WHERE repo_id = ? ORDER BY rowid`).all(n)}synthIndex(t,n){let r=t.prepare(`SELECT commit_hash, parent_hash, root_hash, tree_hash, commit_type, commit_message,
				        commit_date, branch, generated_at,
				        CASE WHEN parent_hash IS NULL
				             THEN COALESCE(json_extract(summary_json, '$.diffStats'), index_diff_stats_json)
				        END AS diff_stats_json
				   FROM memories WHERE repo_id = ? ORDER BY rowid`).all(n);if(r.length===0)return null;let o=new Map(t.prepare(`SELECT m.root_hash AS root, COUNT(t.rowid) AS n
						   FROM memories m
						   LEFT JOIN memory_topics t ON t.repo_id = m.repo_id AND t.commit_hash = m.commit_hash
						  WHERE m.repo_id = ? GROUP BY m.root_hash`).all(n).map(a=>[a.root,a.n])),s=r.map(a=>({commitHash:a.commit_hash,parentCommitHash:a.parent_hash,...a.tree_hash!==null&&{treeHash:a.tree_hash},...a.commit_type!==null&&{commitType:a.commit_type},commitMessage:a.commit_message??void 0,commitDate:a.commit_date??void 0,branch:a.branch??void 0,...a.generated_at!==null&&{generatedAt:a.generated_at},...a.parent_hash===null&&{topicCount:o.get(a.root_hash)??0,...UA(a.diff_stats_json)}})),i=t.prepare("SELECT old_hash, target_hash FROM commit_aliases WHERE repo_id = ? ORDER BY rowid").all(n);return JSON.stringify({version:3,entries:s,...i.length>0&&{commitAliases:Object.fromEntries(i.map(a=>[a.old_hash,a.target_hash]))}},null,"	")}synthCatalog(t,n){let r=this.allMemories(t,n);if(r.length===0)return null;let o=Ty(r),s=r.filter(i=>i.parent_hash===null).map(i=>un(Mc(o,i)));return JSON.stringify({version:1,entries:s},null,"	")}topicRefs(t,n,r){return t.prepare(`SELECT ref_type, ref_id, ts, branch FROM topic_source_refs
				  WHERE repo_id = ? AND stable_slug = ? ORDER BY pos`).all(n,r).map(s=>({type:s.ref_type,id:s.ref_id,timestamp:s.ts,...s.branch!==null&&{branch:s.branch}}))}synthTopicPage(t,n,r){let o=t.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json,
				        last_updated_at, payload_version
				   FROM topic_pages WHERE repo_id = ? AND stable_slug = ?`).get(n,r);return o?JSON.stringify({schemaVersion:o.payload_version,stableSlug:o.stable_slug,title:o.title,content:o.content_md,relatedBranches:JSON.parse(o.related_branches_json),sourceRefs:this.topicRefs(t,n,r),lastUpdatedAt:o.last_updated_at},null,"	"):null}synthTopicIndex(t,n){let r=t.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json,
				        last_updated_at, payload_version
				   FROM topic_pages WHERE repo_id = ? ORDER BY rowid`).all(n);if(r.length===0)return null;let o=r.map(s=>({stableSlug:s.stable_slug,title:s.title,...s.summary!==null&&{summary:s.summary},relatedBranches:JSON.parse(s.related_branches_json),sourceRefs:this.topicRefs(t,n,s.stable_slug),lastUpdatedAt:s.last_updated_at}));return JSON.stringify({schemaVersion:1,topics:o},null,"	")}synthProcessed(t,n){let r=t.prepare("SELECT source_type, source_id FROM topic_processed_sources WHERE repo_id = ? ORDER BY rowid").all(n);if(r.length===0)return null;let o={summary:[],plan:[],note:[],userfile:[]};for(let s of r)o[s.source_type].push(s.source_id);return JSON.stringify({schemaVersion:1,processed:o},null,"	")}async listFiles(t){return this.withDbOrAbsent((n,r)=>{let o=(i,a)=>n.prepare(i).all(r).map(l=>a(l.v));return[...o("SELECT commit_hash AS v FROM memories WHERE repo_id = ?",i=>`summaries/${i}.json`),...o("SELECT transcript_id AS v FROM transcripts WHERE repo_id = ?",i=>`transcripts/${i}.json`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'plan'",i=>`plans/${i}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'note'",i=>`notes/${i}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'reference'",i=>`references/${i}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'skill'",i=>`skills/${i}.md`),...o("SELECT plan_slug AS v FROM plan_progress WHERE repo_id = ?",i=>`plan-progress/${i}.json`),...o("SELECT stable_slug AS v FROM topic_pages WHERE repo_id = ?",i=>`topics/${i}.json`),...o("SELECT 'index.json' AS v FROM memories WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'catalog.json' AS v FROM memories WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'topics/index.json' AS v FROM topic_pages WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'topics/processed.json' AS v FROM topic_processed_sources WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'schema-v5-migration.json' AS v FROM repo_state WHERE repo_id = ? AND key = 'v5-migration'",i=>i)].filter(i=>i.startsWith(t)).sort()},[])}async writeFiles(t,n){V()||await ph(r=>{let o=r.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);if(!o)throw new Error(`SqliteStorage: cannot write memories for unregistered ${this.repoIdentity}`);Ey(r,o.id,t,Date.now())},{dbPath:this.dbPath})}async searchSignatureParts(){return this.withDbOrAbsent((t,n)=>{let r=t.prepare("SELECT COUNT(*) AS n, COALESCE(MAX(written_at_ms), 0) AS newest FROM memories WHERE repo_id = ?").get(n),o=t.prepare("SELECT COUNT(*) AS n, COALESCE(MAX(last_updated_at), '') AS newest FROM topic_pages WHERE repo_id = ?").get(n);return{memoriesCount:r.n,memoriesNewestMs:r.newest,topicCount:o.n,topicNewest:o.newest}},{memoriesCount:0,memoriesNewestMs:0,topicCount:0,topicNewest:""})}async lookupAlias(t){return this.withDbOrAbsent((n,r)=>n.prepare("SELECT target_hash FROM commit_aliases WHERE repo_id = ? AND old_hash = ?").get(r,t)?.target_hash??null,null)}async findShallowestByTreeHash(t){return this.withDbOrAbsent((n,r)=>n.prepare(`SELECT commit_hash FROM memories WHERE repo_id = ? AND tree_hash = ?
					  ORDER BY depth ASC, commit_date_ms DESC LIMIT 1`).get(r,t)?.commit_hash??null,null)}async findHashesByPrefix(t){return/^[0-9a-f]+$/.test(t)?this.withDbOrAbsent((n,r)=>n.prepare("SELECT commit_hash FROM memories WHERE repo_id = ? AND commit_hash LIKE ? || '%'").all(r,t).map(s=>s.commit_hash),[]):[]}async listHeadEntries(t){return this.withDbOrAbsent((n,r)=>n.prepare(`SELECT commit_hash, tree_hash, commit_type, commit_message, commit_date, branch, generated_at
					   FROM memories WHERE repo_id = ? AND parent_hash IS NULL${t!==void 0?" AND branch = ?":""}`).all(...t!==void 0?[r,t]:[r]).map(s=>({commitHash:s.commit_hash,parentCommitHash:null,...s.tree_hash!==null?{treeHash:s.tree_hash}:{},...s.commit_type!==null?{commitType:s.commit_type}:{},commitMessage:s.commit_message??"",commitDate:s.commit_date??"",branch:s.branch??"",generatedAt:s.generated_at??""})),[])}async topicTitlesByHash(){return this.withDbOrAbsent((t,n)=>{let r=t.prepare("SELECT commit_hash, title FROM memory_topics WHERE repo_id = ? ORDER BY commit_hash, pos").all(n),o=new Map;for(let s of r){let i=o.get(s.commit_hash)??[];i.push(s.title),o.set(s.commit_hash,i)}return o},new Map)}async listTopicSearchRows(){return this.withDbOrAbsent((t,n)=>{let r=t.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json, last_updated_at
					   FROM topic_pages WHERE repo_id = ?`).all(n),o=t.prepare("SELECT stable_slug, ref_type FROM topic_source_refs WHERE repo_id = ? ORDER BY pos").all(n),s=new Map;for(let i of o){let a=s.get(i.stable_slug)??[];a.push(i.ref_type),s.set(i.stable_slug,a)}return r.map(i=>({stableSlug:i.stable_slug,title:i.title,summary:i.summary,content:i.content_md,relatedBranches:JSON.parse(i.related_branches_json),lastUpdatedAt:i.last_updated_at,refTypes:s.get(i.stable_slug)??[]}))},[])}async listRootSummaries(){return this.withDbOrAbsent((t,n)=>t.prepare("SELECT commit_hash FROM memories WHERE repo_id = ? AND parent_hash IS NULL").all(n).map(o=>this.readOne(t,n,`summaries/${o.commit_hash}.json`)).filter(o=>o!==null).map(o=>JSON.parse(o)),[])}async exists(){try{return await this.withDb(()=>!0)}catch{return!1}}async ensure(){throw new Error("SqliteStorage cannot create its database: opening it runs the migrations already")}}});async function ky(e){let t=Date.now(),n=_y.get(e);if(n&&t-n.at<BA)return n.route;let r=await no(e);return _y.set(e,{route:r,at:t}),r}async function Ry(e,t,n){if(n.state==="legacy-fenced"||n.state==="cutover"){let{identity:r}=await ln(t);return new Jt(r)}return new St(e)}async function vy(e){let t=e??process.cwd(),n=await ky(t);if(n.state==="blocked")throw new Error(`storage unavailable: ${n.reason} \u2014 this repo's orphan branch is frozen (cutover), so the system of record cannot fall back to it; run 'jolli doctor --recover' or upgrade this surface`);return Ry(e,t,n)}async function ci(e){let t=e??process.cwd(),n;try{n=await ky(t)}catch(r){return{ok:!1,reason:r.message}}if(n.state==="blocked")return{ok:!1,reason:n.reason};try{return{ok:!0,state:n.state,storage:await Ry(e,t,n)}}catch(r){return{ok:!1,reason:r.message}}}var BA,_y,di=y(()=>{"use strict";Bs();Zn();Js();li();BA=3e3,_y=new Map});function kt(e,t=""){let n=t?` ${t}`:"";return`${ux} ${e}${n}`}function bo(e,t){let n=typeof t=="string"?[t]:t;return e.some(r=>{let o=r.hooks;return Array.isArray(o)?o.some(s=>typeof s.command=="string"&&n.some(i=>s.command.includes(i))):!1})}function fn(e,t){let n=typeof t=="string"?[t]:t,r=[];for(let o of e){let s=o.hooks;if(!Array.isArray(s)){r.push(o);continue}let i=s.filter(a=>!(typeof a.command=="string"&&n.some(l=>a.command.includes(l))));i.length>0&&r.push({...o,hooks:i})}return r}function qc(e){return bo(e,Gc)}function Ei(e){return fn(e,Gc)}var ux,Gc,yi,wi,Si=y(()=>{"use strict";ux='"$HOME/.jolli/jollimemory/run-hook"';Gc=["run-hook","StopHook","jollimemory-hooks.jar"],yi=["run-hook","SessionStartHook"],wi=["run-hook","GeminiAfterAgentHook","jollimemory-hooks.jar"]});var rr=A((JW,zy)=>{"use strict";var fx="2.0.0",gx=Number.MAX_SAFE_INTEGER||9007199254740991,hx=16,yx=250,wx=["major","premajor","minor","preminor","patch","prepatch","prerelease"];zy.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:hx,MAX_SAFE_BUILD_LENGTH:yx,MAX_SAFE_INTEGER:gx,RELEASE_TYPES:wx,SEMVER_SPEC_VERSION:fx,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}});var Ro=A((GW,Qy)=>{"use strict";var Ex=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};Qy.exports=Ex});var or=A((ot,Zy)=>{"use strict";var{MAX_SAFE_COMPONENT_LENGTH:Yc,MAX_SAFE_BUILD_LENGTH:Sx,MAX_LENGTH:bx}=rr(),Tx=Ro();ot=Zy.exports={};var _x=ot.re=[],kx=ot.safeRe=[],T=ot.src=[],Rx=ot.safeSrc=[],_=ot.t={},vx=0,Xc="[a-zA-Z0-9-]",Ax=[["\\s",1],["\\d",bx],[Xc,Sx]],xx=e=>{for(let[t,n]of Ax)e=e.split(`${t}*`).join(`${t}{0,${n}}`).split(`${t}+`).join(`${t}{1,${n}}`);return e},N=(e,t,n)=>{let r=xx(t),o=vx++;Tx(e,o,t),_[e]=o,T[o]=t,Rx[o]=r,_x[o]=new RegExp(t,n?"g":void 0),kx[o]=new RegExp(r,n?"g":void 0)};N("NUMERICIDENTIFIER","0|[1-9]\\d*");N("NUMERICIDENTIFIERLOOSE","\\d+");N("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${Xc}*`);N("MAINVERSION",`(${T[_.NUMERICIDENTIFIER]})\\.(${T[_.NUMERICIDENTIFIER]})\\.(${T[_.NUMERICIDENTIFIER]})`);N("MAINVERSIONLOOSE",`(${T[_.NUMERICIDENTIFIERLOOSE]})\\.(${T[_.NUMERICIDENTIFIERLOOSE]})\\.(${T[_.NUMERICIDENTIFIERLOOSE]})`);N("PRERELEASEIDENTIFIER",`(?:${T[_.NONNUMERICIDENTIFIER]}|${T[_.NUMERICIDENTIFIER]})`);N("PRERELEASEIDENTIFIERLOOSE",`(?:${T[_.NONNUMERICIDENTIFIER]}|${T[_.NUMERICIDENTIFIERLOOSE]})`);N("PRERELEASE",`(?:-(${T[_.PRERELEASEIDENTIFIER]}(?:\\.${T[_.PRERELEASEIDENTIFIER]})*))`);N("PRERELEASELOOSE",`(?:-?(${T[_.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${T[_.PRERELEASEIDENTIFIERLOOSE]})*))`);N("BUILDIDENTIFIER",`${Xc}+`);N("BUILD",`(?:\\+(${T[_.BUILDIDENTIFIER]}(?:\\.${T[_.BUILDIDENTIFIER]})*))`);N("FULLPLAIN",`v?${T[_.MAINVERSION]}${T[_.PRERELEASE]}?${T[_.BUILD]}?`);N("FULL",`^${T[_.FULLPLAIN]}$`);N("LOOSEPLAIN",`[v=\\s]*${T[_.MAINVERSIONLOOSE]}${T[_.PRERELEASELOOSE]}?${T[_.BUILD]}?`);N("LOOSE",`^${T[_.LOOSEPLAIN]}$`);N("GTLT","((?:<|>)?=?)");N("XRANGEIDENTIFIERLOOSE",`${T[_.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);N("XRANGEIDENTIFIER",`${T[_.NUMERICIDENTIFIER]}|x|X|\\*`);N("XRANGEPLAIN",`[v=\\s]*(${T[_.XRANGEIDENTIFIER]})(?:\\.(${T[_.XRANGEIDENTIFIER]})(?:\\.(${T[_.XRANGEIDENTIFIER]})(?:${T[_.PRERELEASE]})?${T[_.BUILD]}?)?)?`);N("XRANGEPLAINLOOSE",`[v=\\s]*(${T[_.XRANGEIDENTIFIERLOOSE]})(?:\\.(${T[_.XRANGEIDENTIFIERLOOSE]})(?:\\.(${T[_.XRANGEIDENTIFIERLOOSE]})(?:${T[_.PRERELEASELOOSE]})?${T[_.BUILD]}?)?)?`);N("XRANGE",`^${T[_.GTLT]}\\s*${T[_.XRANGEPLAIN]}$`);N("XRANGELOOSE",`^${T[_.GTLT]}\\s*${T[_.XRANGEPLAINLOOSE]}$`);N("COERCEPLAIN",`(^|[^\\d])(\\d{1,${Yc}})(?:\\.(\\d{1,${Yc}}))?(?:\\.(\\d{1,${Yc}}))?`);N("COERCE",`${T[_.COERCEPLAIN]}(?:$|[^\\d])`);N("COERCEFULL",T[_.COERCEPLAIN]+`(?:${T[_.PRERELEASE]})?(?:${T[_.BUILD]})?(?:$|[^\\d])`);N("COERCERTL",T[_.COERCE],!0);N("COERCERTLFULL",T[_.COERCEFULL],!0);N("LONETILDE","(?:~>?)");N("TILDETRIM",`(\\s*)${T[_.LONETILDE]}\\s+`,!0);ot.tildeTrimReplace="$1~";N("TILDE",`^${T[_.LONETILDE]}${T[_.XRANGEPLAIN]}$`);N("TILDELOOSE",`^${T[_.LONETILDE]}${T[_.XRANGEPLAINLOOSE]}$`);N("LONECARET","(?:\\^)");N("CARETTRIM",`(\\s*)${T[_.LONECARET]}\\s+`,!0);ot.caretTrimReplace="$1^";N("CARET",`^${T[_.LONECARET]}${T[_.XRANGEPLAIN]}$`);N("CARETLOOSE",`^${T[_.LONECARET]}${T[_.XRANGEPLAINLOOSE]}$`);N("COMPARATORLOOSE",`^${T[_.GTLT]}\\s*(${T[_.LOOSEPLAIN]})$|^$`);N("COMPARATOR",`^${T[_.GTLT]}\\s*(${T[_.FULLPLAIN]})$|^$`);N("COMPARATORTRIM",`(\\s*)${T[_.GTLT]}\\s*(${T[_.LOOSEPLAIN]}|${T[_.XRANGEPLAIN]})`,!0);ot.comparatorTrimReplace="$1$2$3";N("HYPHENRANGE",`^\\s*(${T[_.XRANGEPLAIN]})\\s+-\\s+(${T[_.XRANGEPLAIN]})\\s*$`);N("HYPHENRANGELOOSE",`^\\s*(${T[_.XRANGEPLAINLOOSE]})\\s+-\\s+(${T[_.XRANGEPLAINLOOSE]})\\s*$`);N("STAR","(<|>)?=?\\s*\\*");N("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$");N("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")});var _i=A((qW,ew)=>{"use strict";var Cx=Object.freeze({loose:!0}),Ix=Object.freeze({}),Nx=e=>e?typeof e!="object"?Cx:e:Ix;ew.exports=Nx});var zc=A((KW,rw)=>{"use strict";var tw=/^[0-9]+$/,nw=(e,t)=>{if(typeof e=="number"&&typeof t=="number")return e===t?0:e<t?-1:1;let n=tw.test(e),r=tw.test(t);return n&&r&&(e=+e,t=+t),e===t?0:n&&!r?-1:r&&!n?1:e<t?-1:1},Px=(e,t)=>nw(t,e);rw.exports={compareIdentifiers:nw,rcompareIdentifiers:Px}});var se=A((VW,sw)=>{"use strict";var ki=Ro(),{MAX_LENGTH:ow,MAX_SAFE_INTEGER:Ri}=rr(),{safeRe:vi,t:Ai}=or(),Ox=_i(),{compareIdentifiers:Qc}=zc(),Zc=class e{constructor(t,n){if(n=Ox(n),t instanceof e){if(t.loose===!!n.loose&&t.includePrerelease===!!n.includePrerelease)return t;t=t.version}else if(typeof t!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);if(t.length>ow)throw new TypeError(`version is longer than ${ow} characters`);ki("SemVer",t,n),this.options=n,this.loose=!!n.loose,this.includePrerelease=!!n.includePrerelease;let r=t.trim().match(n.loose?vi[Ai.LOOSE]:vi[Ai.FULL]);if(!r)throw new TypeError(`Invalid Version: ${t}`);if(this.raw=t,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>Ri||this.major<0)throw new TypeError("Invalid major version");if(this.minor>Ri||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>Ri||this.patch<0)throw new TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map(o=>{if(/^[0-9]+$/.test(o)){let s=+o;if(s>=0&&s<Ri)return s}return o}):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(t){if(ki("SemVer.compare",this.version,this.options,t),!(t instanceof e)){if(typeof t=="string"&&t===this.version)return 0;t=new e(t,this.options)}return t.version===this.version?0:this.compareMain(t)||this.comparePre(t)}compareMain(t){return t instanceof e||(t=new e(t,this.options)),this.major<t.major?-1:this.major>t.major?1:this.minor<t.minor?-1:this.minor>t.minor?1:this.patch<t.patch?-1:this.patch>t.patch?1:0}comparePre(t){if(t instanceof e||(t=new e(t,this.options)),this.prerelease.length&&!t.prerelease.length)return-1;if(!this.prerelease.length&&t.prerelease.length)return 1;if(!this.prerelease.length&&!t.prerelease.length)return 0;let n=0;do{let r=this.prerelease[n],o=t.prerelease[n];if(ki("prerelease compare",n,r,o),r===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(r===void 0)return-1;if(r===o)continue;return Qc(r,o)}while(++n)}compareBuild(t){t instanceof e||(t=new e(t,this.options));let n=0;do{let r=this.build[n],o=t.build[n];if(ki("build compare",n,r,o),r===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(r===void 0)return-1;if(r===o)continue;return Qc(r,o)}while(++n)}inc(t,n,r){if(t.startsWith("pre")){if(!n&&r===!1)throw new Error("invalid increment argument: identifier is empty");if(n){let o=`-${n}`.match(this.options.loose?vi[Ai.PRERELEASELOOSE]:vi[Ai.PRERELEASE]);if(!o||o[1]!==n)throw new Error(`invalid identifier: ${n}`)}}switch(t){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",n,r);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",n,r);break;case"prepatch":this.prerelease.length=0,this.inc("patch",n,r),this.inc("pre",n,r);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",n,r),this.inc("pre",n,r);break;case"release":if(this.prerelease.length===0)throw new Error(`version ${this.raw} is not a prerelease`);this.prerelease.length=0;break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{let o=Number(r)?1:0;if(this.prerelease.length===0)this.prerelease=[o];else{let s=this.prerelease.length;for(;--s>=0;)typeof this.prerelease[s]=="number"&&(this.prerelease[s]++,s=-2);if(s===-1){if(n===this.prerelease.join(".")&&r===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(o)}}if(n){let s=[n,o];r===!1&&(s=[n]),Qc(this.prerelease[0],n)===0?isNaN(this.prerelease[1])&&(this.prerelease=s):this.prerelease=s}break}default:throw new Error(`invalid increment argument: ${t}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};sw.exports=Zc});var qt=A((YW,aw)=>{"use strict";var iw=se(),Dx=(e,t,n=!1)=>{if(e instanceof iw)return e;try{return new iw(e,t)}catch(r){if(!n)return null;throw r}};aw.exports=Dx});var cw=A((XW,lw)=>{"use strict";var Lx=qt(),Mx=(e,t)=>{let n=Lx(e,t);return n?n.version:null};lw.exports=Mx});var uw=A((zW,dw)=>{"use strict";var $x=qt(),Fx=(e,t)=>{let n=$x(e.trim().replace(/^[=v]+/,""),t);return n?n.version:null};dw.exports=Fx});var fw=A((QW,mw)=>{"use strict";var pw=se(),jx=(e,t,n,r,o)=>{typeof n=="string"&&(o=r,r=n,n=void 0);try{return new pw(e instanceof pw?e.version:e,n).inc(t,r,o).version}catch{return null}};mw.exports=jx});var yw=A((ZW,hw)=>{"use strict";var gw=qt(),Hx=(e,t)=>{let n=gw(e,null,!0),r=gw(t,null,!0),o=n.compare(r);if(o===0)return null;let s=o>0,i=s?n:r,a=s?r:n,l=!!i.prerelease.length;if(!!a.prerelease.length&&!l){if(!a.patch&&!a.minor)return"major";if(a.compareMain(i)===0)return a.minor&&!a.patch?"minor":"patch"}let d=l?"pre":"";return n.major!==r.major?d+"major":n.minor!==r.minor?d+"minor":n.patch!==r.patch?d+"patch":"prerelease"};hw.exports=Hx});var Ew=A((eJ,ww)=>{"use strict";var Ux=se(),Bx=(e,t)=>new Ux(e,t).major;ww.exports=Bx});var bw=A((tJ,Sw)=>{"use strict";var Wx=se(),Jx=(e,t)=>new Wx(e,t).minor;Sw.exports=Jx});var _w=A((nJ,Tw)=>{"use strict";var Gx=se(),qx=(e,t)=>new Gx(e,t).patch;Tw.exports=qx});var Rw=A((rJ,kw)=>{"use strict";var Kx=qt(),Vx=(e,t)=>{let n=Kx(e,t);return n&&n.prerelease.length?n.prerelease:null};kw.exports=Vx});var Pe=A((oJ,Aw)=>{"use strict";var vw=se(),Yx=(e,t,n)=>new vw(e,n).compare(new vw(t,n));Aw.exports=Yx});var Cw=A((sJ,xw)=>{"use strict";var Xx=Pe(),zx=(e,t,n)=>Xx(t,e,n);xw.exports=zx});var Nw=A((iJ,Iw)=>{"use strict";var Qx=Pe(),Zx=(e,t)=>Qx(e,t,!0);Iw.exports=Zx});var xi=A((aJ,Ow)=>{"use strict";var Pw=se(),eC=(e,t,n)=>{let r=new Pw(e,n),o=new Pw(t,n);return r.compare(o)||r.compareBuild(o)};Ow.exports=eC});var Lw=A((lJ,Dw)=>{"use strict";var tC=xi(),nC=(e,t)=>e.sort((n,r)=>tC(n,r,t));Dw.exports=nC});var $w=A((cJ,Mw)=>{"use strict";var rC=xi(),oC=(e,t)=>e.sort((n,r)=>rC(r,n,t));Mw.exports=oC});var vo=A((dJ,Fw)=>{"use strict";var sC=Pe(),iC=(e,t,n)=>sC(e,t,n)>0;Fw.exports=iC});var Ci=A((uJ,jw)=>{"use strict";var aC=Pe(),lC=(e,t,n)=>aC(e,t,n)<0;jw.exports=lC});var ed=A((pJ,Hw)=>{"use strict";var cC=Pe(),dC=(e,t,n)=>cC(e,t,n)===0;Hw.exports=dC});var td=A((mJ,Uw)=>{"use strict";var uC=Pe(),pC=(e,t,n)=>uC(e,t,n)!==0;Uw.exports=pC});var Ii=A((fJ,Bw)=>{"use strict";var mC=Pe(),fC=(e,t,n)=>mC(e,t,n)>=0;Bw.exports=fC});var Ni=A((gJ,Ww)=>{"use strict";var gC=Pe(),hC=(e,t,n)=>gC(e,t,n)<=0;Ww.exports=hC});var nd=A((hJ,Jw)=>{"use strict";var yC=ed(),wC=td(),EC=vo(),SC=Ii(),bC=Ci(),TC=Ni(),_C=(e,t,n,r)=>{switch(t){case"===":return typeof e=="object"&&(e=e.version),typeof n=="object"&&(n=n.version),e===n;case"!==":return typeof e=="object"&&(e=e.version),typeof n=="object"&&(n=n.version),e!==n;case"":case"=":case"==":return yC(e,n,r);case"!=":return wC(e,n,r);case">":return EC(e,n,r);case">=":return SC(e,n,r);case"<":return bC(e,n,r);case"<=":return TC(e,n,r);default:throw new TypeError(`Invalid operator: ${t}`)}};Jw.exports=_C});var qw=A((yJ,Gw)=>{"use strict";var kC=se(),RC=qt(),{safeRe:Pi,t:Oi}=or(),vC=(e,t)=>{if(e instanceof kC)return e;if(typeof e=="number"&&(e=String(e)),typeof e!="string")return null;t=t||{};let n=null;if(!t.rtl)n=e.match(t.includePrerelease?Pi[Oi.COERCEFULL]:Pi[Oi.COERCE]);else{let l=t.includePrerelease?Pi[Oi.COERCERTLFULL]:Pi[Oi.COERCERTL],c;for(;(c=l.exec(e))&&(!n||n.index+n[0].length!==e.length);)(!n||c.index+c[0].length!==n.index+n[0].length)&&(n=c),l.lastIndex=c.index+c[1].length+c[2].length;l.lastIndex=-1}if(n===null)return null;let r=n[2],o=n[3]||"0",s=n[4]||"0",i=t.includePrerelease&&n[5]?`-${n[5]}`:"",a=t.includePrerelease&&n[6]?`+${n[6]}`:"";return RC(`${r}.${o}.${s}${i}${a}`,t)};Gw.exports=vC});var Vw=A((wJ,Kw)=>{"use strict";var AC=qt(),xC=rr(),CC=se(),IC=(e,t,n)=>{if(!xC.RELEASE_TYPES.includes(t))return null;let r=NC(e,n);return r&&PC(r,t)},NC=(e,t)=>{let n=e instanceof CC?e.version:e;return AC(n,t)},PC=(e,t)=>{if(OC(t))return e.version;switch(e.prerelease=[],t){case"major":e.minor=0,e.patch=0;break;case"minor":e.patch=0;break}return e.format()},OC=e=>e.startsWith("pre");Kw.exports=IC});var Xw=A((EJ,Yw)=>{"use strict";var rd=class{constructor(){this.max=1e3,this.map=new Map}get(t){let n=this.map.get(t);if(n!==void 0)return this.map.delete(t),this.map.set(t,n),n}delete(t){return this.map.delete(t)}set(t,n){if(!this.delete(t)&&n!==void 0){if(this.map.size>=this.max){let o=this.map.keys().next().value;this.delete(o)}this.map.set(t,n)}return this}};Yw.exports=rd});var Oe=A((SJ,eE)=>{"use strict";var DC=/\s+/g,od=class e{constructor(t,n){if(n=MC(n),t instanceof e)return t.loose===!!n.loose&&t.includePrerelease===!!n.includePrerelease?t:new e(t.raw,n);if(t instanceof sd)return this.raw=t.value,this.set=[[t]],this.formatted=void 0,this;if(this.options=n,this.loose=!!n.loose,this.includePrerelease=!!n.includePrerelease,this.raw=t.trim().replace(DC," "),this.set=this.raw.split("||").map(r=>this.parseRange(r.trim())).filter(r=>r.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){let r=this.set[0];if(this.set=this.set.filter(o=>!Qw(o[0])),this.set.length===0)this.set=[r];else if(this.set.length>1){for(let o of this.set)if(o.length===1&&GC(o[0])){this.set=[o];break}}}this.formatted=void 0}get range(){if(this.formatted===void 0){this.formatted="";for(let t=0;t<this.set.length;t++){t>0&&(this.formatted+="||");let n=this.set[t];for(let r=0;r<n.length;r++)r>0&&(this.formatted+=" "),this.formatted+=n[r].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(t){t=t.replace(JC,"");let r=((this.options.includePrerelease&&BC)|(this.options.loose&&WC))+":"+t,o=zw.get(r);if(o)return o;let s=this.options.loose,i=s?ge[ie.HYPHENRANGELOOSE]:ge[ie.HYPHENRANGE];t=t.replace(i,tI(this.options.includePrerelease)),W("hyphen replace",t),t=t.replace(ge[ie.COMPARATORTRIM],jC),W("comparator trim",t),t=t.replace(ge[ie.TILDETRIM],HC),W("tilde trim",t),t=t.replace(ge[ie.CARETTRIM],UC),W("caret trim",t);let a=t.split(" ").map(u=>qC(u,this.options)).join(" ").split(/\s+/).map(u=>eI(u,this.options));s&&(a=a.filter(u=>(W("loose invalid filter",u,this.options),!!u.match(ge[ie.COMPARATORLOOSE])))),W("range list",a);let l=new Map,c=a.map(u=>new sd(u,this.options));for(let u of c){if(Qw(u))return[u];l.set(u.value,u)}l.size>1&&l.has("")&&l.delete("");let d=[...l.values()];return zw.set(r,d),d}intersects(t,n){if(!(t instanceof e))throw new TypeError("a Range is required");return this.set.some(r=>Zw(r,n)&&t.set.some(o=>Zw(o,n)&&r.every(s=>o.every(i=>s.intersects(i,n)))))}test(t){if(!t)return!1;if(typeof t=="string")try{t=new $C(t,this.options)}catch{return!1}for(let n=0;n<this.set.length;n++)if(nI(this.set[n],t,this.options))return!0;return!1}};eE.exports=od;var LC=Xw(),zw=new LC,MC=_i(),sd=Ao(),W=Ro(),$C=se(),{safeRe:ge,src:FC,t:ie,comparatorTrimReplace:jC,tildeTrimReplace:HC,caretTrimReplace:UC}=or(),{FLAG_INCLUDE_PRERELEASE:BC,FLAG_LOOSE:WC}=rr(),JC=new RegExp(FC[ie.BUILD],"g"),Qw=e=>e.value==="<0.0.0-0",GC=e=>e.value==="",Zw=(e,t)=>{let n=!0,r=e.slice(),o=r.pop();for(;n&&r.length;)n=r.every(s=>o.intersects(s,t)),o=r.pop();return n},qC=(e,t)=>(e=e.replace(ge[ie.BUILD],""),W("comp",e,t),e=YC(e,t),W("caret",e),e=KC(e,t),W("tildes",e),e=zC(e,t),W("xrange",e),e=ZC(e,t),W("stars",e),e),he=e=>!e||e.toLowerCase()==="x"||e==="*",KC=(e,t)=>e.trim().split(/\s+/).map(n=>VC(n,t)).join(" "),VC=(e,t)=>{let n=t.loose?ge[ie.TILDELOOSE]:ge[ie.TILDE];return e.replace(n,(r,o,s,i,a)=>{W("tilde",e,r,o,s,i,a);let l;return he(o)?l="":he(s)?l=`>=${o}.0.0 <${+o+1}.0.0-0`:he(i)?l=`>=${o}.${s}.0 <${o}.${+s+1}.0-0`:a?(W("replaceTilde pr",a),l=`>=${o}.${s}.${i}-${a} <${o}.${+s+1}.0-0`):l=`>=${o}.${s}.${i} <${o}.${+s+1}.0-0`,W("tilde return",l),l})},YC=(e,t)=>e.trim().split(/\s+/).map(n=>XC(n,t)).join(" "),XC=(e,t)=>{W("caret",e,t);let n=t.loose?ge[ie.CARETLOOSE]:ge[ie.CARET],r=t.includePrerelease?"-0":"";return e.replace(n,(o,s,i,a,l)=>{W("caret",e,o,s,i,a,l);let c;return he(s)?c="":he(i)?c=`>=${s}.0.0${r} <${+s+1}.0.0-0`:he(a)?s==="0"?c=`>=${s}.${i}.0${r} <${s}.${+i+1}.0-0`:c=`>=${s}.${i}.0${r} <${+s+1}.0.0-0`:l?(W("replaceCaret pr",l),s==="0"?i==="0"?c=`>=${s}.${i}.${a}-${l} <${s}.${i}.${+a+1}-0`:c=`>=${s}.${i}.${a}-${l} <${s}.${+i+1}.0-0`:c=`>=${s}.${i}.${a}-${l} <${+s+1}.0.0-0`):(W("no pr"),s==="0"?i==="0"?c=`>=${s}.${i}.${a}${r} <${s}.${i}.${+a+1}-0`:c=`>=${s}.${i}.${a}${r} <${s}.${+i+1}.0-0`:c=`>=${s}.${i}.${a} <${+s+1}.0.0-0`),W("caret return",c),c})},zC=(e,t)=>(W("replaceXRanges",e,t),e.split(/\s+/).map(n=>QC(n,t)).join(" ")),QC=(e,t)=>{e=e.trim();let n=t.loose?ge[ie.XRANGELOOSE]:ge[ie.XRANGE];return e.replace(n,(r,o,s,i,a,l)=>{W("xRange",e,r,o,s,i,a,l);let c=he(s),d=c||he(i),u=d||he(a),p=u;return o==="="&&p&&(o=""),l=t.includePrerelease?"-0":"",c?o===">"||o==="<"?r="<0.0.0-0":r="*":o&&p?(d&&(i=0),a=0,o===">"?(o=">=",d?(s=+s+1,i=0,a=0):(i=+i+1,a=0)):o==="<="&&(o="<",d?s=+s+1:i=+i+1),o==="<"&&(l="-0"),r=`${o+s}.${i}.${a}${l}`):d?r=`>=${s}.0.0${l} <${+s+1}.0.0-0`:u&&(r=`>=${s}.${i}.0${l} <${s}.${+i+1}.0-0`),W("xRange return",r),r})},ZC=(e,t)=>(W("replaceStars",e,t),e.trim().replace(ge[ie.STAR],"")),eI=(e,t)=>(W("replaceGTE0",e,t),e.trim().replace(ge[t.includePrerelease?ie.GTE0PRE:ie.GTE0],"")),tI=e=>(t,n,r,o,s,i,a,l,c,d,u,p)=>(he(r)?n="":he(o)?n=`>=${r}.0.0${e?"-0":""}`:he(s)?n=`>=${r}.${o}.0${e?"-0":""}`:i?n=`>=${n}`:n=`>=${n}${e?"-0":""}`,he(c)?l="":he(d)?l=`<${+c+1}.0.0-0`:he(u)?l=`<${c}.${+d+1}.0-0`:p?l=`<=${c}.${d}.${u}-${p}`:e?l=`<${c}.${d}.${+u+1}-0`:l=`<=${l}`,`${n} ${l}`.trim()),nI=(e,t,n)=>{for(let r=0;r<e.length;r++)if(!e[r].test(t))return!1;if(t.prerelease.length&&!n.includePrerelease){for(let r=0;r<e.length;r++)if(W(e[r].semver),e[r].semver!==sd.ANY&&e[r].semver.prerelease.length>0){let o=e[r].semver;if(o.major===t.major&&o.minor===t.minor&&o.patch===t.patch)return!0}return!1}return!0}});var Ao=A((bJ,iE)=>{"use strict";var xo=Symbol("SemVer ANY"),ld=class e{static get ANY(){return xo}constructor(t,n){if(n=tE(n),t instanceof e){if(t.loose===!!n.loose)return t;t=t.value}t=t.trim().split(/\s+/).join(" "),ad("comparator",t,n),this.options=n,this.loose=!!n.loose,this.parse(t),this.semver===xo?this.value="":this.value=this.operator+this.semver.version,ad("comp",this)}parse(t){let n=this.options.loose?nE[rE.COMPARATORLOOSE]:nE[rE.COMPARATOR],r=t.match(n);if(!r)throw new TypeError(`Invalid comparator: ${t}`);this.operator=r[1]!==void 0?r[1]:"",this.operator==="="&&(this.operator=""),r[2]?this.semver=new oE(r[2],this.options.loose):this.semver=xo}toString(){return this.value}test(t){if(ad("Comparator.test",t,this.options.loose),this.semver===xo||t===xo)return!0;if(typeof t=="string")try{t=new oE(t,this.options)}catch{return!1}return id(t,this.operator,this.semver,this.options)}intersects(t,n){if(!(t instanceof e))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new sE(t.value,n).test(this.value):t.operator===""?t.value===""?!0:new sE(this.value,n).test(t.semver):(n=tE(n),n.includePrerelease&&(this.value==="<0.0.0-0"||t.value==="<0.0.0-0")||!n.includePrerelease&&(this.value.startsWith("<0.0.0")||t.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&t.operator.startsWith(">")||this.operator.startsWith("<")&&t.operator.startsWith("<")||this.semver.version===t.semver.version&&this.operator.includes("=")&&t.operator.includes("=")||id(this.semver,"<",t.semver,n)&&this.operator.startsWith(">")&&t.operator.startsWith("<")||id(this.semver,">",t.semver,n)&&this.operator.startsWith("<")&&t.operator.startsWith(">")))}};iE.exports=ld;var tE=_i(),{safeRe:nE,t:rE}=or(),id=nd(),ad=Ro(),oE=se(),sE=Oe()});var Co=A((TJ,aE)=>{"use strict";var rI=Oe(),oI=(e,t,n)=>{try{t=new rI(t,n)}catch{return!1}return t.test(e)};aE.exports=oI});var cE=A((_J,lE)=>{"use strict";var sI=Oe(),iI=(e,t)=>new sI(e,t).set.map(n=>n.map(r=>r.value).join(" ").trim().split(" "));lE.exports=iI});var uE=A((kJ,dE)=>{"use strict";var aI=se(),lI=Oe(),cI=(e,t,n)=>{let r=null,o=null,s=null;try{s=new lI(t,n)}catch{return null}return e.forEach(i=>{s.test(i)&&(!r||o.compare(i)===-1)&&(r=i,o=new aI(r,n))}),r};dE.exports=cI});var mE=A((RJ,pE)=>{"use strict";var dI=se(),uI=Oe(),pI=(e,t,n)=>{let r=null,o=null,s=null;try{s=new uI(t,n)}catch{return null}return e.forEach(i=>{s.test(i)&&(!r||o.compare(i)===1)&&(r=i,o=new dI(r,n))}),r};pE.exports=pI});var hE=A((vJ,gE)=>{"use strict";var cd=se(),mI=Oe(),fE=vo(),fI=(e,t)=>{e=new mI(e,t);let n=new cd("0.0.0");if(e.test(n)||(n=new cd("0.0.0-0"),e.test(n)))return n;n=null;for(let r=0;r<e.set.length;++r){let o=e.set[r],s=null;o.forEach(i=>{let a=new cd(i.semver.version);switch(i.operator){case">":a.prerelease.length===0?a.patch++:a.prerelease.push(0),a.raw=a.format();case"":case">=":(!s||fE(a,s))&&(s=a);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${i.operator}`)}}),s&&(!n||fE(n,s))&&(n=s)}return n&&e.test(n)?n:null};gE.exports=fI});var wE=A((AJ,yE)=>{"use strict";var gI=Oe(),hI=(e,t)=>{try{return new gI(e,t).range||"*"}catch{return null}};yE.exports=hI});var Di=A((xJ,TE)=>{"use strict";var yI=se(),bE=Ao(),{ANY:wI}=bE,EI=Oe(),SI=Co(),EE=vo(),SE=Ci(),bI=Ni(),TI=Ii(),_I=(e,t,n,r)=>{e=new yI(e,r),t=new EI(t,r);let o,s,i,a,l;switch(n){case">":o=EE,s=bI,i=SE,a=">",l=">=";break;case"<":o=SE,s=TI,i=EE,a="<",l="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(SI(e,t,r))return!1;for(let c=0;c<t.set.length;++c){let d=t.set[c],u=null,p=null;if(d.forEach(m=>{m.semver===wI&&(m=new bE(">=0.0.0")),u=u||m,p=p||m,o(m.semver,u.semver,r)?u=m:i(m.semver,p.semver,r)&&(p=m)}),u.operator===a||u.operator===l||(!p.operator||p.operator===a)&&s(e,p.semver))return!1;if(p.operator===l&&i(e,p.semver))return!1}return!0};TE.exports=_I});var kE=A((CJ,_E)=>{"use strict";var kI=Di(),RI=(e,t,n)=>kI(e,t,">",n);_E.exports=RI});var vE=A((IJ,RE)=>{"use strict";var vI=Di(),AI=(e,t,n)=>vI(e,t,"<",n);RE.exports=AI});var CE=A((NJ,xE)=>{"use strict";var AE=Oe(),xI=(e,t,n)=>(e=new AE(e,n),t=new AE(t,n),e.intersects(t,n));xE.exports=xI});var NE=A((PJ,IE)=>{"use strict";var CI=Co(),II=Pe();IE.exports=(e,t,n)=>{let r=[],o=null,s=null,i=e.sort((d,u)=>II(d,u,n));for(let d of i)CI(d,t,n)?(s=d,o||(o=d)):(s&&r.push([o,s]),s=null,o=null);o&&r.push([o,null]);let a=[];for(let[d,u]of r)d===u?a.push(d):!u&&d===i[0]?a.push("*"):u?d===i[0]?a.push(`<=${u}`):a.push(`${d} - ${u}`):a.push(`>=${d}`);let l=a.join(" || "),c=typeof t.raw=="string"?t.raw:String(t);return l.length<c.length?l:t}});var $E=A((OJ,ME)=>{"use strict";var PE=Oe(),pd=Ao(),{ANY:dd}=pd,ud=Co(),md=Pe(),NI=(e,t,n={})=>{if(e===t)return!0;e=new PE(e,n),t=new PE(t,n);let r=!1;e:for(let o of e.set){for(let s of t.set){let i=OI(o,s,n);if(r=r||i!==null,i)continue e}if(r)return!1}return!0},PI=[new pd(">=0.0.0-0")],OE=[new pd(">=0.0.0")],OI=(e,t,n)=>{if(e===t)return!0;if(e.length===1&&e[0].semver===dd){if(t.length===1&&t[0].semver===dd)return!0;n.includePrerelease?e=PI:e=OE}if(t.length===1&&t[0].semver===dd){if(n.includePrerelease)return!0;t=OE}let r=new Set,o,s;for(let m of e)m.operator===">"||m.operator===">="?o=DE(o,m,n):m.operator==="<"||m.operator==="<="?s=LE(s,m,n):r.add(m.semver);if(r.size>1)return null;let i;if(o&&s){if(i=md(o.semver,s.semver,n),i>0)return null;if(i===0&&(o.operator!==">="||s.operator!=="<="))return null}for(let m of r){if(o&&!ud(m,String(o),n)||s&&!ud(m,String(s),n))return null;for(let g of t)if(!ud(m,String(g),n))return!1;return!0}let a,l,c,d,u=s&&!n.includePrerelease&&s.semver.prerelease.length?s.semver:!1,p=o&&!n.includePrerelease&&o.semver.prerelease.length?o.semver:!1;u&&u.prerelease.length===1&&s.operator==="<"&&u.prerelease[0]===0&&(u=!1);for(let m of t){if(d=d||m.operator===">"||m.operator===">=",c=c||m.operator==="<"||m.operator==="<=",o){if(p&&m.semver.prerelease&&m.semver.prerelease.length&&m.semver.major===p.major&&m.semver.minor===p.minor&&m.semver.patch===p.patch&&(p=!1),m.operator===">"||m.operator===">="){if(a=DE(o,m,n),a===m&&a!==o)return!1}else if(o.operator===">="&&!m.test(o.semver))return!1}if(s){if(u&&m.semver.prerelease&&m.semver.prerelease.length&&m.semver.major===u.major&&m.semver.minor===u.minor&&m.semver.patch===u.patch&&(u=!1),m.operator==="<"||m.operator==="<="){if(l=LE(s,m,n),l===m&&l!==s)return!1}else if(s.operator==="<="&&!m.test(s.semver))return!1}if(!m.operator&&(s||o)&&i!==0)return!1}return!(o&&c&&!s&&i!==0||s&&d&&!o&&i!==0||p||u)},DE=(e,t,n)=>{if(!e)return t;let r=md(e.semver,t.semver,n);return r>0?e:r<0||t.operator===">"&&e.operator===">="?t:e},LE=(e,t,n)=>{if(!e)return t;let r=md(e.semver,t.semver,n);return r<0?e:r>0||t.operator==="<"&&e.operator==="<="?t:e};ME.exports=NI});var UE=A((DJ,HE)=>{"use strict";var fd=or(),FE=rr(),DI=se(),jE=zc(),LI=qt(),MI=cw(),$I=uw(),FI=fw(),jI=yw(),HI=Ew(),UI=bw(),BI=_w(),WI=Rw(),JI=Pe(),GI=Cw(),qI=Nw(),KI=xi(),VI=Lw(),YI=$w(),XI=vo(),zI=Ci(),QI=ed(),ZI=td(),eN=Ii(),tN=Ni(),nN=nd(),rN=qw(),oN=Vw(),sN=Ao(),iN=Oe(),aN=Co(),lN=cE(),cN=uE(),dN=mE(),uN=hE(),pN=wE(),mN=Di(),fN=kE(),gN=vE(),hN=CE(),yN=NE(),wN=$E();HE.exports={parse:LI,valid:MI,clean:$I,inc:FI,diff:jI,major:HI,minor:UI,patch:BI,prerelease:WI,compare:JI,rcompare:GI,compareLoose:qI,compareBuild:KI,sort:VI,rsort:YI,gt:XI,lt:zI,eq:QI,neq:ZI,gte:eN,lte:tN,cmp:nN,coerce:rN,truncate:oN,Comparator:sN,Range:iN,satisfies:aN,toComparators:lN,maxSatisfying:cN,minSatisfying:dN,minVersion:uN,validRange:pN,outside:mN,gtr:fN,ltr:gN,intersects:hN,simplifyRange:yN,subset:wN,SemVer:DI,re:fd.re,src:fd.src,tokens:fd.t,SEMVER_SPEC_VERSION:FE.SEMVER_SPEC_VERSION,RELEASE_TYPES:FE.RELEASE_TYPES,compareIdentifiers:jE.compareIdentifiers,rcompareIdentifiers:jE.rcompareIdentifiers}});var sS={};Tr(sS,{POST_MERGE_MARKER_START:()=>$o,POST_REWRITE_MARKER_START:()=>Lo,PREPARE_MSG_MARKER_START:()=>Mo,PRE_PUSH_MARKER_START:()=>Fo,installGitHook:()=>vd,installPostMergeHook:()=>Cd,installPostRewriteHook:()=>Ad,installPrePushHook:()=>Id,installPrepareMsgHook:()=>xd,isGitHookInstalled:()=>rS,isGitPipelineFullyInstalled:()=>oS,isHookSectionInstalled:()=>cr,removeGitHook:()=>Nd,removePostMergeHook:()=>Dd,removePostRewriteHook:()=>Pd,removePrePushHook:()=>Ld,removePrepareMsgHook:()=>Od});async function vd(e){let t=await Mn(e),n=(0,dr.join)(t,"post-commit"),r=kt("post-commit"),o=[lr,r,Rd].join(`
`),s,i="";try{if(i=await(0,ne.readFile)(n,"utf-8"),i.includes(lr)){let l=new RegExp(`\\n*${Kt(lr)}[\\s\\S]*?${Kt(Rd)}\\n*`,"g"),d=`${i.replace(l,`
`).trimEnd()}

${o}
`;return i===d?(await Bi(n),{path:n}):(await v(n,d),await(0,ne.chmod)(n,493),{path:n})}s="Existing post-commit hook found \u2014 Jolli Memory section appended",ji.warn(s)}catch{}let a;i?a=`${i}

${o}
`:a=`#!/bin/sh

${o}
`,await(0,ne.mkdir)(t,{recursive:!0}),await v(n,a);try{await(0,ne.chmod)(n,493)}catch{}return ji.info("Git post-commit hook installed"),{warning:s,path:n}}async function Ad(e){let t=kt("post-rewrite",'"$1"'),n=[Lo,t,ZE].join(`
`);return Hi(e,"post-rewrite",n,Lo)}async function xd(e){let t='"$HOME/.jolli/jollimemory/run-hook"',n=["__jolli_prepare_msg_previous_status=$?",`if [ -x ${t} ]; then ${t} prepare-commit-msg "$1" "$2" || true; fi`,'(exit "$__jolli_prepare_msg_previous_status")'].join(`
`),r=[Mo,n,eS].join(`
`);return Hi(e,"prepare-commit-msg",r,Mo)}async function Cd(e){let t=kt("post-merge"),n=[$o,t,tS].join(`
`);return Hi(e,"post-merge",n,$o)}async function Id(e){let t='"$HOME/.jolli/jollimemory/run-hook"',n=["__jolli_pre_push_previous_status=$?",`if [ -x ${t} ]; then ${t} pre-push "$@" || true; fi`,'(exit "$__jolli_pre_push_previous_status")'].join(`
`),r=[Fo,n,nS].join(`
`);return Hi(e,"pre-push",r,Fo)}async function Hi(e,t,n,r){let o=n.slice(n.lastIndexOf(`
`)+1),s=await Mn(e),i=(0,dr.join)(s,t),a,l="";try{if(l=await(0,ne.readFile)(i,"utf-8"),l.includes(r)){let d=new RegExp(`\\n*${Kt(r)}[\\s\\S]*?${Kt(o)}\\n*`,"g"),p=`${l.replace(d,`
`).trimEnd()}

${n}
`;return l===p?(await Bi(i),{path:i}):(await v(i,p),await(0,ne.chmod)(i,493),{path:i})}a=`Existing ${t} hook found \u2014 Jolli Memory section appended`,ji.warn(a)}catch{}let c;l?c=`${l}

${n}
`:c=`#!/bin/sh

${n}
`,await(0,ne.mkdir)(s,{recursive:!0}),await v(i,c);try{await(0,ne.chmod)(i,493)}catch{}return ji.info("Git %s hook installed",t),{warning:a,path:i}}async function Nd(e){let t;try{let s=await Mn(e);t=(0,dr.join)(s,"post-commit")}catch{return{}}let n;try{n=await(0,ne.readFile)(t,"utf-8")}catch{return{}}if(!n.includes(lr))return{};let r=new RegExp(`\\n*${Kt(lr)}[\\s\\S]*?${Kt(Rd)}\\n*`,"g"),o=n.replace(r,`
`);if(o.trim()==="#!/bin/sh"||o.trim()===""){let{rm:s}=await import("node:fs/promises");await s(t,{force:!0})}else await v(t,o),await Bi(t);return{}}async function Pd(e){await Ui(e,"post-rewrite",Lo,ZE)}async function Od(e){await Ui(e,"prepare-commit-msg",Mo,eS)}async function Dd(e){await Ui(e,"post-merge",$o,tS)}async function Ld(e){await Ui(e,"pre-push",Fo,nS)}async function Ui(e,t,n,r){let o;try{o=await Mn(e)}catch{return}let s=(0,dr.join)(o,t),i;try{i=await(0,ne.readFile)(s,"utf-8")}catch{return}if(!i.includes(n))return;let a=new RegExp(`\\n*${Kt(n)}[\\s\\S]*?${Kt(r)}\\n*`,"g"),l=i.replace(a,`
`);if(l.trim()==="#!/bin/sh"||l.trim()===""){let{rm:c}=await import("node:fs/promises");await c(s,{force:!0})}else await v(s,l),await Bi(s)}async function rS(e){return cr(e,"post-commit",lr)}async function oS(e){return await rS(e)&&await cr(e,"post-rewrite",Lo)&&await cr(e,"prepare-commit-msg",Mo)&&await cr(e,"post-merge",$o)}async function cr(e,t,n){try{let r=await Mn(e),o=(0,dr.join)(r,t);return(await(0,ne.readFile)(o,"utf-8")).includes(n)?process.platform==="win32"?!0:((await(0,ne.stat)(o)).mode&73)!==0:!1}catch{return!1}}function Kt(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}async function Bi(e){try{((await(0,ne.stat)(e)).mode&73)===0&&await(0,ne.chmod)(e,493)}catch{}}var ne,dr,ji,lr,Rd,Lo,ZE,Mo,eS,$o,tS,Fo,nS,Md=y(()=>{"use strict";ne=require("node:fs/promises"),dr=require("node:path");Q();Se();w();Si();ji=f("GitHookInstaller"),lr="# >>> JolliMemory post-commit hook >>>",Rd="# <<< JolliMemory post-commit hook <<<",Lo="# >>> JolliMemory post-rewrite hook >>>",ZE="# <<< JolliMemory post-rewrite hook <<<",Mo="# >>> JolliMemory prepare-commit-msg hook >>>",eS="# <<< JolliMemory prepare-commit-msg hook <<<",$o="# >>> JolliMemory post-merge hook >>>",tS="# <<< JolliMemory post-merge hook <<<",Fo="# >>> JolliMemory pre-push hook >>>",nS="# <<< JolliMemory pre-push hook <<<"});function Ob(){return"0.99.16"}function Ib(e){return/^\d/.test(e)}function Db(e,t){if(!Ib(e)||!Ib(t))return!1;let n=s=>s.split(".").map(i=>Number.parseInt(i,10)||0),r=n(e),o=n(t);for(let s=0;s<Math.max(r.length,o.length);s++){let i=r[s]??0,a=o[s]??0;if(i!==a)return i>a}return!1}function ga(e,t=fO){return new Promise(n=>{let r=Buffer.alloc(0),o=!1,s=c=>{o||(o=!0,clearTimeout(l),e.removeListener("data",i),e.removeListener("close",a),e.removeListener("error",a),n(c))},i=c=>{r=Buffer.concat([r,c]);let d=r.indexOf(10);if(d===-1){r.length>gO&&s(void 0);return}s({line:r.subarray(0,d).toString("utf8"),rest:r.subarray(d+1)})},a=()=>s(void 0),l=setTimeout(()=>s(void 0),t);l.unref?.(),e.on("data",i),e.once("close",a),e.once("error",a)})}function Lb(e,t){return(0,Sr.join)((0,Nb.tmpdir)(),`.jolli-${e}-${t}`)}function du(e){return`${JSON.stringify(e)}
`}var cu,Nb,Sr,Pb,lu,fO,gO,uu=y(()=>{"use strict";cu=require("node:fs"),Nb=require("node:os"),Sr=require("node:path"),Pb=require("node:url");ae();fO=1e4,gO=4096});function wO(e){let t=(0,Rn.join)((0,Rn.dirname)((0,mu.fileURLToPath)(e)),hO);return(0,pu.existsSync)(t)?t:void 0}function fu(e,t=process.argv[1],n=process.execArgv){let r=wO(e);if(r)return{entry:r,nodeArgs:[]};let o=(0,Rn.dirname)((0,mu.fileURLToPath)(e)),s=(0,Rn.join)((0,Rn.dirname)(o),yO);if(t?.endsWith(".ts")&&(0,pu.existsSync)(s))return{entry:s,nodeArgs:n}}var pu,Rn,mu,hO,yO,Mb=y(()=>{"use strict";pu=require("node:fs"),Rn=require("node:path"),mu=require("node:url"),hO="Cli.js",yO="Cli.ts"});function SO(e){return Lb("global",e)}function bO(e=(0,Fb.homedir)()){return(0,$b.createHash)("sha256").update(vr(e,"win32")).digest("hex").slice(0,16)}function ha(e={}){if((e.platform??process.platform)==="win32")return`\\\\.\\pipe\\jolli-global-${bO(e.home)}`;let n=e.uid??process.getuid?.()??0;return(0,jb.join)(SO(n),"daemon.sock")}function yu(e){let t;try{t=JSON.parse(e)}catch{return}if(typeof t!="object"||t===null)return;let{t:n,protocol:r,version:o,pid:s,startedAt:i}=t;if(!(n!=="hello"||r!==EO)&&!(typeof o!="string"||typeof s!="number"||typeof i!="number"))return{t:"hello",protocol:r,version:o,pid:s,startedAt:i}}var $b,Fb,jb,EO,gu,hu,Hb=y(()=>{"use strict";$b=require("node:crypto"),Fb=require("node:os"),jb=require("node:path");uu();ae();EO=1,gu="global-daemon",hu=300});var Tu={};Tr(Tu,{GLOBAL_DAEMON_ENSURE_COMMAND:()=>Eu,ensureGlobalDaemon:()=>RO,probeGlobalDaemon:()=>xO,retireGlobalDaemon:()=>AO,shouldSkipGlobalDaemon:()=>Su,triggerEnsureGlobalDaemon:()=>vO});function Su(e){return e!==null&&_O.has(e)}function bu(e){return new Promise(t=>{let n=!1,r=(0,Bb.connect)(e),o=i=>{n||(n=!0,clearTimeout(s),r.removeAllListeners("connect"),i.socket===void 0&&r.destroy(),t(i))},s=setTimeout(()=>o({socket:void 0}),TO);s.unref?.(),r.once("connect",()=>o({socket:r})),r.on("error",i=>{if(n){qe.warn("global daemon socket error after connect: %s",R(i));return}o({socket:void 0,code:i.code})})})}async function kO(e){if(!e.startsWith("\\\\.\\pipe\\"))try{await(0,Ub.unlink)(e)}catch{}}async function RO(e={}){try{if(Su(e.command??null))return"skipped-excluded-command";if(!an(e.nodeVersion??process.versions.node))return"skipped-unsupported-node";let t=e.socketPath??ha(),{socket:n,code:r}=await bu(t);if(!n)return r==="ECONNREFUSED"&&await kO(t),(e.spawnDaemon??CO)(t),"spawned";try{let o=await ga(n,e.helloTimeoutMs??hu),s=o?yu(o.line):void 0;if(!s)return"already-running";let i=e.ownVersion??Ob();return Db(i,s.version)?(n.write(du({t:"retire"})),qe.info("retiring global daemon pid %d (v%s < v%s)",s.pid,s.version,i),"retired-incumbent"):"already-running"}finally{n.end()}}catch(t){return qe.warn("could not ensure the global daemon: %s",R(t)),"failed"}}function vO(e={}){try{return Su(e.command??null)||!an(e.nodeVersion??process.versions.node)?!1:(IO(e.socketPath),!0)}catch(t){return qe.warn("could not trigger the global daemon ensure helper: %s",R(t)),!1}}async function AO(e={}){try{let{socket:t}=await bu(e.socketPath??ha());return t?(await ga(t,hu),t.write(du({t:"retire"})),t.end(),!0):!1}catch(t){return qe.warn("could not retire the global daemon: %s",R(t)),!1}}async function xO(e){try{let{socket:t}=await bu(e??ha());if(!t)return;try{let n=await ga(t,5e3);return n?yu(n.line):void 0}finally{t.end()}}catch{return}}function CO(e){let t=fu(__jmImportMetaUrl);if(!t){qe.warn("Cannot locate the CLI entry to spawn the global daemon");return}let n=mt(process.execPath,[...t.nodeArgs,t.entry,gu,"--socket",e],{detached:!0,stdio:"ignore",cwd:(0,wu.homedir)()});n.on("error",r=>qe.warn("global daemon failed to spawn: %s",R(r))),n.unref(),qe.info("spawned global daemon (pid %d)",n.pid??-1)}function IO(e){let t=fu(__jmImportMetaUrl);if(!t){qe.warn("Cannot locate the CLI entry to spawn the global daemon ensure helper");return}let n=[...t.nodeArgs,t.entry,Eu];e&&n.push("--socket",e);let r=mt(process.execPath,n,{detached:!0,stdio:"ignore",cwd:(0,wu.homedir)()});r.on("error",o=>qe.warn("global daemon ensure helper failed to start: %s",R(o))),r.unref(),qe.info("spawned global daemon ensure helper (pid %d)",r.pid??-1)}var Ub,Bb,wu,qe,Eu,TO,_O,_u=y(()=>{"use strict";Ub=require("node:fs/promises"),Bb=require("node:net"),wu=require("node:os");uu();Ut();w();Mb();ke();Hb();qe=f("EnsureGlobalDaemon"),Eu="global-daemon-ensure",TO=200,_O=new Set([gu,Eu,"mcp","mcp-serve","daemon","uninstall","disable"])});var ZO={};Tr(ZO,{buildCodexBootstrapOutput:()=>Zb,main:()=>tT,runCodexPluginBootstrap:()=>eT});module.exports=cT(ZO);var Vo=require("node:path"),Qb=require("node:url");var Pt=require("node:fs"),Nu=require("node:os"),Zo=require("node:path"),_e="JOLLI_LOCAL_AGENT_CHILD",Pu=".jolli-local-agent-child",Ou="jolli-localagent-";function Ce(){let e=(0,Pt.mkdtempSync)((0,Zo.join)((0,Nu.tmpdir)(),Ou));try{(0,Pt.writeFileSync)((0,Zo.join)(e,Pu),"","utf-8")}catch(t){throw(0,Pt.rmSync)(e,{recursive:!0,force:!0}),t}return e}function In(e=process.env,t){return e[_e]==="1"?!0:t!==void 0&&(0,Pt.existsSync)((0,Zo.join)(t,Pu))}Se();Qe();Ze();ue();var ta=require("node:fs/promises"),Sn=require("node:path"),KS=require("node:url");var ll=require("node:fs"),Em=require("node:fs/promises"),cl=require("node:os"),Wr=require("node:path");w();Ue();var d0=f("AntigravityDetector"),Sm=["antigravity","antigravity-ide","antigravity-cli"];function bm(e=(0,cl.homedir)()){let t=[];for(let n of Sm){let r=(0,Wr.join)(e,".gemini",n),o=(0,Wr.join)(r,"conversations");(0,ll.existsSync)(o)&&t.push({variant:n,root:r,conversationsDir:o,brainDir:(0,Wr.join)(r,"brain")})}return t}async function Z_(e){for(let t of bm(e))try{if((await(0,Em.readdir)(t.conversationsDir)).some(n=>n.endsWith(".db")))return!0}catch{}return!1}async function Tm(e=(0,cl.homedir)()){return await Z_(e)?!0:Sm.some(t=>(0,ll.existsSync)((0,Wr.join)(e,".gemini",t)))}w();Jn();var Es="mcp__";function Jr(e){return{name:e,kind:"builtin",calls:0}}function ul(e){return{name:e,kind:"skill",calls:0}}function Gn(e,t){return{name:t?`${e}.${t}`:e,kind:"mcp",server:e,calls:0}}function Ss(e){if(!e.startsWith(Es))return Jr(e);let t=e.slice(Es.length),n=t.indexOf("__");return n===-1?Gn(t,""):Gn(t.slice(0,n),t.slice(n+2))}function _m(e,t){if(t===void 0||t.length===0)return Jr(e);if(!t.startsWith(Es))return Gn(t,e);let n=t.slice(Es.length).split("__"),r=n[n.length-1]||n[0]||t;return Gn(r,e)}function nk(e,t){let n=Math.max(e.lastCallAtMs??Number.NEGATIVE_INFINITY,t.lastCallAtMs??Number.NEGATIVE_INFINITY);return Number.isFinite(n)?{lastCallAtMs:n}:{}}var nn=class{constructor(){this.byKey=new Map;this.seen=new Set}add(t,n=1){let r=`${t.kind}:${t.name}`,o=this.byKey.get(r);if(!o){this.byKey.set(r,{...t,calls:n});return}this.byKey.set(r,{...o,calls:o.calls+n,...nk(o,t)})}addOnce(t,n){if(t!==void 0){if(this.seen.has(t))return;this.seen.add(t)}this.add(n)}hasSeen(t){return this.seen.has(t)}values(){return[...this.byKey.values()]}};w();w();var rk=new Set(["vitest","jest","mocha","pytest","rspec","phpunit","pest","tox","nose2","unittest","ava","tape","karma","jasmine","cypress"]),ok=new Set(["go test","cargo test","cargo nextest","mix test","dart test","flutter test","dotnet test","bazel test","playwright test"]),sk=new Set(["npm","pnpm","yarn","bun","deno","make"]),ik=/&&|\|\||[;&|]|\n/,ak=/^[A-Za-z_][A-Za-z0-9_]*=/;function pl(e,t){return e===void 0?!1:rk.has(e)?!0:t!==void 0&&ok.has(`${e} ${t}`)}function lk(e){let t=e.split(/\s+/).filter(i=>i.length>0),n=0;for(;n<t.length&&ak.test(t[n]);)n+=1;if(n>=t.length)return!1;let r=t[n],o=t[n+1],s=t[n+2];return!!(r==="npx"&&pl(o,s)||(r==="python"||r==="python3")&&o==="-m"&&pl(s,t[n+3])||pl(r,o)||sk.has(r)&&(o==="test"||o==="t"||o==="run"&&(s==="test"||s==="t")))}function ml(e){for(let t of e.split(ik))if(lk(t))return!0;return!1}function rn(e){if(e===void 0)return;let t=Date.parse(e);return Number.isFinite(t)?t:void 0}function km(...e){let t=e.filter(n=>n!==void 0);return t.length>0?{lastCallAtMs:Math.max(...t)}:{}}function ck(e){let t=0;for(let n of e)n.type==="tool_result"&&t++;return t}var Cm=f("TranscriptParser"),bs=class{parseLine(t,n){return Nm(t,n)}parseUsageTokens(t,n){let r=xm(t);return r?{input:r.input,output:r.output,cached:r.cached,...r.id&&{dedupKey:r.id},...r.model&&{model:r.model}}:{input:0,output:0,cached:0}}parseUsageByModel(t){let n=new Map,r=new Set;for(let o of t){let s=xm(o);if(!s)continue;if(s.id){if(r.has(s.id))continue;r.add(s.id)}let i=n.get(s.model);i?n.set(s.model,{...i,input:i.input+s.input,output:i.output+s.output,cached:i.cached+s.cached}):n.set(s.model,{model:s.model,provider:"anthropic",input:s.input,output:s.output,cached:s.cached})}return[...n.values()].filter(o=>o.input+o.output+o.cached>0)}parseToolUse(t){let n=new nn,r=[],o=new Map;for(let s of t){let i;try{i=JSON.parse(s)}catch{continue}let a=i,l=a?.message?.content;if(!Array.isArray(l))continue;let c=a.toolUseResult?.commandName,d=typeof c=="string"&&c.length>0?c:void 0,u=ck(l)===1,p=rn(this.parseTimestamp(s));for(let m of l){let g=m;if(g.type==="tool_result"){d!==void 0&&u&&typeof g.tool_use_id=="string"&&o.set(g.tool_use_id,d);continue}if(g.type!=="tool_use"||typeof g.name!="string")continue;let h=typeof g.id=="string"?g.id:void 0;if(g.name==="Skill"&&typeof g.input?.skill=="string"){r.push({...h!==void 0?{id:h}:{},requested:g.input.skill,...p!==void 0?{atMs:p}:{}});continue}n.addOnce(h,{...Ss(g.name),...p!==void 0&&{lastCallAtMs:p}})}}for(let s of r)n.addOnce(s.id,{...ul((s.id!==void 0?o.get(s.id):void 0)??s.requested),...s.atMs!==void 0&&{lastCallAtMs:s.atMs}});return n.values()}parseTimestamp(t,n){try{let r=JSON.parse(t);return typeof r.timestamp=="string"?r.timestamp:void 0}catch{return}}parseCompactions(t){let n=new Set;for(let r of t){let o;try{o=JSON.parse(r)}catch{continue}if(o.isCompactSummary!==!0)continue;let s=rn(this.parseTimestamp(r));s!==void 0&&n.add(s)}return[...n].sort((r,o)=>r-o)}parseTestRuns(t){let n=new Set;for(let r of t){let o;try{o=JSON.parse(r)}catch{continue}let s=o.message?.content;if(Array.isArray(s))for(let i of s){let a=i;if(a.type!=="tool_use"||a.name!=="Bash"||typeof a.input?.command!="string"||!ml(a.input.command))continue;let l=rn(this.parseTimestamp(r));l!==void 0&&n.add(l)}}return[...n].sort((r,o)=>r-o)}},dk=new Set(["compacted","context_compacted"]);function Rm(e,t){let n=new Set;for(let r of e){let o;try{o=JSON.parse(r)}catch{continue}let s=o?.payload;if(s===null||typeof s!="object")continue;let i=s.type;if(typeof i!="string"||!t.has(i))continue;let a=o.timestamp,l=rn(typeof a=="string"?a:void 0);l!==void 0&&n.add(l)}return[...n].sort((r,o)=>r-o)}var fl=class{parseLine(t,n){try{let r=JSON.parse(t),o=typeof r.timestamp=="string"?r.timestamp:void 0;if(r.type!=="response_item")return null;let s=r.payload;if(!s||typeof s!="object"||s.type!=="message")return null;let i=s.role;if(i!=="user"&&i!=="assistant")return null;let a=hk(s.content);if(a===null)return null;let l=Sk(a);return l.length===0?null:i==="user"?wk(l)?null:{role:"human",content:l,timestamp:o}:{role:"assistant",content:l,timestamp:o}}catch(r){return Cm.debug("Failed to parse Codex transcript line %d: %s",n,r.message),null}}parseToolUse(t){let n=new Map,r=[];for(let s of t){let i;try{i=JSON.parse(s)}catch{continue}let a=i?.payload;if(a===null||typeof a!="object")continue;let l=a;if(typeof l.type!="string"||!uk.has(l.type))continue;let c=typeof l.invocation?.tool=="string"?l.invocation.tool:void 0,d=typeof l.invocation?.server=="string"?l.invocation.server:"",u;if(c!==void 0)u=d?Gn(d,c):Jr(c);else if(typeof l.name=="string"&&l.name.length>0)u=_m(l.name,typeof l.namespace=="string"?l.namespace:void 0);else continue;let p=i.timestamp,m=rn(typeof p=="string"?p:void 0),g={...u,...m!==void 0&&{lastCallAtMs:m}},h=typeof l.call_id=="string"?l.call_id:void 0;if(h===void 0){r.push(g);continue}let E=n.get(h),S=E===void 0||E.kind!=="mcp"&&g.kind==="mcp"?g:E;n.set(h,{...S,...E?km(E.lastCallAtMs,g.lastCallAtMs):km(g.lastCallAtMs)})}let o=new nn;for(let s of[...n.values(),...r])o.add(s);return o.values()}parseUnrecognizedRows(t){let n=0;for(let r of t){let o;try{o=JSON.parse(r)}catch{continue}if(o?.type!=="response_item")continue;let s=o.payload;if(s===null||typeof s!="object")continue;let i=s.type;if(typeof i=="string"){if(!pk.has(i)){n++;continue}i==="message"&&gk(s)&&n++}}return n}parseCompactions(t){return Rm(t,dk)}parseTurnAborts(t){return Rm(t,new Set(["turn_aborted"]))}parseTestRuns(t){let n=new Set;for(let r of t){let o;try{o=JSON.parse(r)}catch{continue}let s=o?.payload;if(s===null||typeof s!="object")continue;let i=s;if(i.type!=="function_call"||i.name!=="exec_command")continue;let a;try{a=(typeof i.arguments=="string"?JSON.parse(i.arguments):{}).cmd}catch{continue}if(typeof a!="string"||!ml(a))continue;let l=o.timestamp,c=rn(typeof l=="string"?l:void 0);c!==void 0&&n.add(c)}return[...n].sort((r,o)=>r-o)}},uk=new Set(["function_call","custom_tool_call","local_shell_call","web_search_call","mcp_tool_call_end"]),pk=new Set(["message","reasoning","function_call","function_call_output","custom_tool_call","custom_tool_call_output","local_shell_call","local_shell_call_output","tool_search_call","tool_search_output","web_search_call","mcp_tool_call_begin","mcp_tool_call_end"]),gl=class{parseLine(t,n){try{let r=JSON.parse(t),o=r.type,s=Am(r);if(o==="turn.prompt"){let a=Im(r.input)?.trim();return a?{role:"human",content:a,timestamp:s}:null}let i=fk(r);if(i&&i.type==="text"){let a=typeof i.text=="string"?i.text.trim():"";return a?{role:"assistant",content:a,timestamp:s}:null}return null}catch(r){return Cm.debug("Failed to parse Kimi transcript line %d: %s",n,r.message),null}}parseToolUse(t){let n=new nn;for(let r of t){if(!r.includes(vm))continue;let o;try{o=JSON.parse(r)}catch{continue}if(o.type!==vm)continue;let s=o.event;if(s===null||typeof s!="object"||s.type!=="tool.call"||typeof s.name!="string")continue;let i=rn(this.parseTimestamp(r));n.addOnce(typeof s.toolCallId=="string"?s.toolCallId:void 0,{...s.name===mk&&typeof s.args?.skill=="string"?ul(s.args.skill):Ss(s.name),...i!==void 0&&{lastCallAtMs:i}})}return n.values()}parseTimestamp(t,n){try{return Am(JSON.parse(t))}catch{return}}},vm="context.append_loop_event",mk="Skill";function fk(e){if(e.type==="context.append_loop_event"){let t=e.event;return t?.type==="content.part"&&t.part&&typeof t.part=="object"?t.part:null}return e.type==="content.part"&&e.part&&typeof e.part=="object"?e.part:null}function Am(e){let t=e.time??e.timestamp;return typeof t=="number"&&Number.isFinite(t)?new Date(t).toISOString():typeof t=="string"&&t.length>0?t:void 0}function Im(e){if(typeof e=="string")return e.length>0?e:null;if(Array.isArray(e)){let t=[];for(let n of e){let r=Im(n);r&&t.push(r)}return t.length>0?t.join(`
`):null}if(e!==null&&typeof e=="object"){let t=e;if((t.type==="text"||t.type===void 0)&&typeof t.text=="string"&&t.text.length>0)return t.text}return null}function gk(e){let t=e.role;if(typeof t=="string"&&t!=="user"&&t!=="assistant")return!0;let n=e.content;if(Array.isArray(n))for(let r of n){if(!r||typeof r!="object")continue;let o=r.type;if(typeof r.text=="string"&&o!=="input_text"&&o!=="output_text")return!0}return!1}function hk(e){if(!Array.isArray(e))return null;let t=[];for(let r of e){if(!r||typeof r!="object")continue;let o=r.type,s=r.text;(o==="input_text"||o==="output_text")&&typeof s=="string"&&t.push(s)}let n=t.join(`
`).trim();return n.length>0?n:null}var yk=["recommended_plugins","environment_context","skill","turn_aborted"];function wk(e){let t=e.trimStart();for(let r of yk)if(t.startsWith(`<${r}>`)&&e.includes(`</${r}>`))return!0;return t.startsWith("# AGENTS.md instructions")&&(/<INSTRUCTIONS>[\s\S]*<\/INSTRUCTIONS>/.test(e)||/<environment_context>[\s\S]*<\/environment_context>/.test(e))||t.startsWith("The following is the Codex agent history")&&e.includes("untrusted evidence")?!0:e.replace(/<image\b[^>]*\/?>|<\/image>/g,"").trim().length===0}var Ek=/(?:\s*<oai-mem-citation>(?:(?!<\/oai-mem-citation>)[\s\S])*<\/oai-mem-citation>)+\s*$/;function Sk(e){return e.replace(Ek,"").trimEnd()}function xm(e){try{return Tk(JSON.parse(e))}catch{return null}}function bk(e){return e.startsWith("<")&&e.endsWith(">")}function Tk(e){let t=e,n=t?.message?.usage??t?.usage;if(!n||typeof n!="object")return null;let r=i=>typeof n[i]=="number"?n[i]:0,o=t?.message?.model??t?.model,s=t?.message?.id;return{id:typeof s=="string"?s:"",model:typeof o=="string"&&!bk(o)?o:"",input:r("input_tokens"),output:r("output_tokens"),cached:r("cache_creation_input_tokens")}}var _k=new bs,kk=new fl,Rk=new gl;function vk(e){switch(e){case"codex":return kk;case"kimi":return Rk;case"claude":return _k}}var Ak=["claude","codex","kimi"],xk=["gemini","opencode","antigravity","cursor","cursor-cli","cline-cli","devin","hermes"],E0=new Set([...Ak.filter(e=>vk(e).parseToolUse!==void 0),...xk]);var hl=f("TranscriptReader");var Ck=["Base directory for this skill:","[Request interrupted by user"],Ik=/<(?:system-reminder|ide_opened_file|ide_selection|local-command-caveat|command-name|command-message|command-args|local-command-stdout)>[\s\S]*?<\/(?:system-reminder|ide_opened_file|ide_selection|local-command-caveat|command-name|command-message|command-args|local-command-stdout)>/g;function Nm(e,t){try{let n=JSON.parse(e);if(n.isCompactSummary===!0)return hl.debug("Skipping compaction summary at line %d",t),null;if(!n.message||typeof n.message!="object")return null;let r=n.message,o=r.role,s=typeof n.timestamp=="string"?n.timestamp:void 0;if(o==="user")return Nk(r,s,t);if(o==="assistant"){let i=Pm(r.content)?.trim();return i?{role:"assistant",content:i,timestamp:s}:null}return null}catch(n){return hl.debug("Failed to parse transcript line %d: %s",t,n.message),null}}function Nk(e,t,n){let r=Pm(e.content);if(!r)return null;let o=Pk(r);return o.length===0?null:Ck.some(s=>o.startsWith(s))?(hl.debug("Skipping filtered user message at line %d",n),null):{role:"human",content:o,timestamp:t}}function Pk(e){return e.replace(Ik,"").trim()}function Pm(e){if(typeof e=="string")return e.length>0?e:null;if(Array.isArray(e)){let t=[];for(let n of e)if(n!==null&&typeof n=="object"){let r=n;r.type==="text"&&typeof r.text=="string"&&t.push(r.text)}return t.length>0?t.join(`
`):null}return null}Se();Ar();ae();Ue();var J0=f("AntigravityDiscoverer"),G0=2880*60*1e3;var Om=require("node:fs/promises"),Ts=require("node:os"),wl=require("node:path");function Ok(e=(0,Ts.homedir)()){return(0,wl.join)(e,".cline","data")}function Dm(e=(0,Ts.homedir)()){return(0,wl.join)(Ok(e),"sessions")}async function Lm(e=(0,Ts.homedir)()){try{return await(0,Om.access)(Dm(e)),!0}catch{return!1}}w();ae();var Z0=f("ClineCliDiscoverer"),eM=2880*60*1e3;var El=require("node:fs/promises"),Kr=require("node:os"),ks=require("node:path");var _s=require("node:os"),qr=require("node:path");w();var rM=f("VscodeWorkspaceLocator"),Mm=["Code","Code - Insiders","Cursor","VSCodium","Windsurf"];function yt(e,t=(0,_s.homedir)()){switch((0,_s.platform)()){case"darwin":return(0,qr.join)(t,"Library","Application Support",e);case"win32":return(0,qr.join)(process.env.APPDATA??(0,qr.join)(t,"AppData","Roaming"),e);default:return(0,qr.join)(t,".config",e)}}var Dk="saoudrizwan.claude-dev";function Lk(e,t){return(0,ks.join)(yt(e,t),"User","globalStorage",Dk)}function Vr(e=(0,Kr.homedir)()){return Mm.map(t=>Lk(t,e))}function Rs(e){return(0,ks.join)(e,"settings","cline_mcp_settings.json")}async function $m(e=(0,Kr.homedir)()){for(let t of Vr(e))try{return await(0,El.access)((0,ks.join)(t,"state","taskHistory.json")),!0}catch{}return!1}async function Sl(e=(0,Kr.homedir)()){let t=[];for(let n of Vr(e))try{await(0,El.access)(Rs(n)),t.push(n)}catch{}return t}async function Fm(e=(0,Kr.homedir)()){return(await Sl(e)).length>0}w();ae();var uM=f("ClineDiscoverer"),pM=2880*60*1e3;var bl=require("node:fs/promises"),jm=require("node:os"),Tl=require("node:path");w();Jn();ae();var bM=f("CodexDiscoverer"),TM=2880*60*1e3,Mk=".codex";async function _l(){let e=(0,Tl.join)((0,jm.homedir)(),Mk);try{return(await(0,bl.stat)(e)).isDirectory()}catch{return!1}}var _M=1440*60*1e3;var Um=require("node:fs/promises"),Bm=require("node:os"),kl=require("node:path");w();var $k=f("CopilotChatDetector");function Fk(e){return(0,kl.join)(yt("Code",e),"User","globalStorage","github.copilot-chat")}function jk(e=(0,Bm.homedir)()){return(0,kl.join)(e,".copilot","session-state")}async function Hm(e){try{return(await(0,Um.stat)(e)).isDirectory()}catch(t){let n=t.code;return n!=="ENOENT"&&$k.warn("Copilot Chat probe stat failed for %s (%s): %s",e,n??"unknown",t.message),!1}}async function Wm(){let[e,t]=await Promise.all([Hm(Fk()),Hm(jk())]);return e||t}w();Jn();var DM=f("CopilotChatDiscoverer"),LM=2880*60*1e3;var Gm=require("node:fs/promises"),qm=require("node:os"),Km=require("node:path");w();Ue();var Vm=f("CopilotDetector");function Ym(){return(0,Km.join)((0,qm.homedir)(),".copilot","session-store.db")}async function Xm(){return et()?Rl():(Vm.info("Copilot CLI support disabled: this runtime is Node %s, requires %d.%d+ for built-in SQLite",process.versions.node,gt.major,gt.minor),!1)}async function Rl(){let e=Ym();try{return(await(0,Gm.stat)(e)).isFile()}catch(t){let n=t.code;return n!=="ENOENT"&&Vm.warn("Copilot DB stat failed (%s): %s",n??"unknown",t.message),!1}}w();Ue();var GM=f("CopilotDiscoverer"),qM=2880*60*1e3;var vs=require("node:fs/promises"),As=require("node:os"),ef=require("node:path");w();var zm=require("node:os"),Qm=require("node:path");function Zm(e=(0,zm.homedir)()){return(0,Qm.join)(e,".cursor")}ae();var ZM=f("CursorCliDiscoverer"),e$=2880*60*1e3;function Wk(e=(0,As.homedir)()){return Zm(e)}function Jk(e=(0,As.homedir)()){return(0,ef.join)(Wk(e),"chats")}async function tf(e=(0,As.homedir)()){try{return(await(0,vs.stat)(Jk(e))).isDirectory()}catch{return!1}}var nf=require("node:fs/promises"),rf=require("node:path");w();Ue();var Gk=f("CursorDetector");function of(e){return(0,rf.join)(yt("Cursor",e),"User","globalStorage","state.vscdb")}async function sf(){return et()?vl():(Gk.info("Cursor support disabled: this runtime is Node %s, requires 22.13+ for built-in SQLite",process.versions.node),!1)}async function vl(){let e=of();try{return(await(0,nf.stat)(e)).isFile()}catch{return!1}}w();Ue();var p$=f("CursorDiscoverer"),m$=2880*60*1e3;var Al=require("node:fs/promises"),af=require("node:os"),Kn=require("node:path");w();Ue();var E$=f("DevinDiscoverer"),S$=2880*60*1e3;function lf(e){let t=e??(0,af.homedir)();if(process.platform==="win32")return(0,Kn.join)(process.env.APPDATA??(0,Kn.join)(t,"AppData","Roaming"),"devin","cli");let n=process.env.XDG_DATA_HOME,r=n&&n.length>0?n:(0,Kn.join)(t,".local","share");return(0,Kn.join)(r,"devin","cli")}function qk(e){return(0,Kn.join)(lf(e),"sessions.db")}async function Kk(){try{return(await(0,Al.stat)(qk())).isFile()}catch{return!1}}async function cf(){if(await Kk())return!0;try{return(await(0,Al.stat)(lf())).isDirectory()}catch{return!1}}var df=require("node:fs/promises"),uf=require("node:os"),pf=require("node:path");w();var Vk=f("GeminiDetector"),Yk=".gemini";async function xl(){let e=(0,pf.join)((0,uf.homedir)(),Yk);try{return(await(0,df.stat)(e)).isDirectory()}catch{return Vk.debug("Gemini directory not found: %s",e),!1}}Se();var wt=require("node:fs/promises"),Il=require("node:os"),on=require("node:path");w();Q();var Cl=f("HermesConfigPaths");function xs(e=process.env,t=(0,Il.homedir)(),n=process.platform){let r=e.HERMES_HOME?.trim();if(r&&r.length>0)return r;if(n==="win32"){let o=e.LOCALAPPDATA?.trim();return(0,on.join)(o&&o.length>0?o:(0,on.join)(t,"AppData","Local"),"hermes")}return(0,on.join)(t,".hermes")}async function Nl(e=process.env,t=(0,Il.homedir)(),n=process.platform){let r=xs(e,t,n),o;try{o=await(0,wt.readdir)((0,on.join)(r,"profiles"),{withFileTypes:!0})}catch{return[r]}let s=[];for(let i of o){if(!i.isDirectory())continue;let a=(0,on.join)(r,"profiles",i.name);await Xk(a)&&s.push(a)}return[r,...s.sort()]}async function Xk(e){try{return(await(0,wt.readdir)(e)).length>0}catch(t){return Cl.warn("Skipping unreadable Hermes profile directory %s: %s",e,String(t)),!1}}function mf(e=process.env){return(0,on.join)(xs(e),"config.yaml")}async function ff(e,t){let n="";try{n=await(0,wt.readFile)(e,"utf-8")}catch(a){if(a.code!=="ENOENT"){Cl.warn("Skipping Hermes allowlist upsert: %s unreadable (%s)",e,String(a));return}}let r;try{r=n.trim().length===0?{approvals:[]}:JSON.parse(n)}catch(a){Cl.warn("Skipping Hermes allowlist upsert: %s not valid JSON (%s)",e,String(a));return}Array.isArray(r.approvals)||(r.approvals=[]);let o=await zk(t.scriptPath),s=r.approvals.find(a=>a.event===t.event&&a.command===t.command);if(s!==void 0){if(s.script_mtime_at_approval===o)return;s.approved_at=t.nowIso,s.script_mtime_at_approval=o}else r.approvals.push({event:t.event,command:t.command,approved_at:t.nowIso,script_mtime_at_approval:o});let i={approvals:hf(r.approvals)};await v(e,`${JSON.stringify(i,wf,2)}`,await yf(e))}async function gf(e,t){let n;try{n=await(0,wt.readFile)(e,"utf-8")}catch{return}let r;try{r=JSON.parse(n)}catch{return}if(!Array.isArray(r.approvals))return;let o=r.approvals.length;r.approvals=r.approvals.filter(s=>!(s.event===t.event&&s.command===t.command)),r.approvals.length!==o&&await v(e,`${JSON.stringify({approvals:hf(r.approvals)},wf,2)}`,await yf(e))}function hf(e){return e.sort((t,n)=>t.event===n.event?t.command<n.command?-1:t.command>n.command?1:0:t.event<n.event?-1:1)}async function yf(e){try{return(await(0,wt.stat)(e)).mode&511}catch{return}}function wf(e,t){return t!==null&&typeof t=="object"&&!Array.isArray(t)?Object.fromEntries(Object.entries(t).sort(([n],[r])=>n<r?-1:1)):t}async function zk(e){try{let t=await(0,wt.stat)(e,{bigint:!0});return Qk(t.mtimeNs)}catch{return null}}function Qk(e){let t=1000000000n,n=e/t,r=e%t,o=Number(n)+Number(r)/1e9,s=Math.floor(o),i=Zk((o-s)*1e6);i===1e6&&(s+=1,i=0);let a=new Date(s*1e3).toISOString().replace(".000Z","");return i===0?`${a}Z`:`${a}.${i.toString().padStart(6,"0")}Z`}function Zk(e){let t=Math.floor(e),n=e-t;return n<.5?t:n>.5?t+1:t%2===0?t:t+1}var Vn=require("node:fs/promises"),Ef=require("node:os"),Cs=require("node:path");w();Ue();var P$=f("HermesDiscoverer"),O$=2880*60*1e3;function Sf(e){return xs(process.env,e??(0,Ef.homedir)(),process.platform)}async function eR(e){let t=Sf(e),n=[(0,Cs.join)(t,"state.db")],r;try{r=(await(0,Vn.readdir)((0,Cs.join)(t,"profiles"),{withFileTypes:!0})).filter(s=>s.isDirectory()).map(s=>s.name)}catch{return n}for(let o of r){let s=(0,Cs.join)(t,"profiles",o,"state.db");try{(await(0,Vn.stat)(s)).isFile()&&n.push(s)}catch{}}return n}async function tR(){for(let e of await eR())try{if((await(0,Vn.stat)(e)).isFile())return!0}catch{}return!1}async function bf(){if(await tR())return!0;try{return(await(0,Vn.stat)(Sf())).isDirectory()}catch{return!1}}Xr();var Ns=require("node:fs/promises"),Wf=require("node:os"),Fl=require("node:path");w();Jn();var eF=f("KimiDiscoverer"),tF=2880*60*1e3,fR=".kimi-code";function Ps(){return process.env.KIMI_CODE_HOME||(0,Fl.join)((0,Wf.homedir)(),fR)}async function Jf(){let e=Ps();try{return(await(0,Ns.stat)(e)).isDirectory()}catch{return!1}}Qe();ue();var Os={"claude-plugin":{host:"claude",localAgentTool:"claude-code",skillInvocation:"/jolli:<name>"},"codex-plugin":{host:"codex",localAgentTool:"codex",skillInvocation:"$jolli:<name>"},"cursor-plugin":{host:"cursor",localAgentTool:"cursor-agent",skillInvocation:"/jolli-<name>"}},oF=Object.keys(Os);function Ds(e){return e===void 0?void 0:Os[e]?.localAgentTool}function jl(e,t){return(e===void 0?void 0:Os[e]?.skillInvocation)?.replace("<name>",t)}function qf(e){return(e===void 0?void 0:Os[e]?.host)??"claude"}function Gf(e,t){return e===void 0||e===t?void 0:e}async function Kf(e,t){let n=Ds(e);return n===void 0?null:t.localAgentTool!==void 0&&t.aiProvider!==void 0?{tool:n,seededTool:!1,keptTool:Gf(t.localAgentTool,n),seededProvider:!1}:ws(r=>{let o=r.localAgentTool===void 0,s=r.aiProvider===void 0,i={tool:n,seededTool:o,keptTool:Gf(r.localAgentTool,n),seededProvider:s};return!o&&!s?{update:null,result:i}:{update:{...s?{aiProvider:"local-agent"}:{},...o?{localAgentTool:n}:{}},result:i}})}var Vf=require("node:fs/promises"),Yf=require("node:os"),Hl=require("node:path");w();Ue();var gR=f("OpenCodeDiscoverer"),dF=2880*60*1e3;function hR(){return process.env.XDG_DATA_HOME||(0,Hl.join)((0,Yf.homedir)(),".local","share")}function yR(){return(0,Hl.join)(hR(),"opencode","opencode.db")}async function Xf(){return et()?Ul():(gR.info("OpenCode support disabled: this runtime is Node %s, requires %d.%d+ for built-in SQLite",process.versions.node,gt.major,gt.minor),!1)}async function Ul(){let e=yR();try{return(await(0,Vf.stat)(e)).isFile()}catch{return!1}}w();Q();Qe();ue();var yF=f("PushPendingStore");var wF=10080*60*1e3;var wR=300*1e3,EF=Math.floor(wR/3);es();w();ke();var AF=f("PushCompensation");w();Ls();w();Xr();var MF=f("KBRepoDiscoverer");w();Q();Ls();Qe();ue();var JF=f("PushControlStore");Ze();var zl=require("node:crypto");Qn();ps();var SR=[["CLAUDECODE","claude"],["CODEX_THREAD_ID","codex"],["GEMINI_CLI","gemini"],["OPENCODE","opencode"],["ANTIGRAVITY_AGENT","antigravity"],["COPILOT_CLI","copilot"],["CLINE_WRAPPER_PATH","cline-cli"],["CLINE_CONNECTOR_CLI_LAUNCH","cline-cli"]],bR=[{familyKey:"CURSOR_AGENT",variants:[["CURSOR_WORKSPACE_LABEL","cursor"],["CURSOR_INVOKED_AS","cursor-cli"]]}];var TR=["recall","search","local-run","remote-run","jolli","init","login","logout","status","timeline","push","dashboard"],YF=new Set(TR);function Jl(e){return e!==void 0&&e!==""&&e!=="0"&&e.toLowerCase()!=="false"}function Gl(e){return Ep(e)?e:void 0}function ng(e=process.env){if(In(e))return;let t,n=r=>t!==void 0&&t!==r?!1:(t=r,!0);for(let[r,o]of SR)if(Jl(e[r])&&!n(o))return;for(let r of bR){if(!Jl(e[r.familyKey]))continue;let o=new Set(r.variants.filter(([i])=>Jl(e[i])).map(([,i])=>i)),[s]=o;if(o.size!==1||s===void 0||!n(s))return}return t}var rg=require("node:crypto"),tt=require("node:fs"),sn=require("node:fs/promises"),ql=require("node:path");w();Q();var og="telemetry-queue.ndjson",_R=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,Kl=500,kR=1e6;function Ms(e){return(0,ql.join)(G(e),og)}function RR(e){return typeof e=="string"&&_R.test(e)}function vR(e){let t=(0,rg.createHash)("sha256").update(e).digest("hex"),n=(Number.parseInt(t.slice(16,18),16)&63|128).toString(16).padStart(2,"0");return`${t.slice(0,8)}-${t.slice(8,12)}-5${t.slice(13,16)}-${n}${t.slice(18,20)}-${t.slice(20,32)}`}function AR(e,t){if(typeof e!="object"||e===null||Array.isArray(e))return null;let n=e;return RR(n.eventId)?n:{...n,eventId:vR(t)}}function sg(e,t){let n=G(e);(0,tt.mkdirSync)(n,{recursive:!0});let r=(0,ql.join)(n,og);(0,tt.appendFileSync)(r,`${JSON.stringify(t)}
`,"utf-8");try{if((0,tt.statSync)(r).size>kR){let o=(0,tt.readFileSync)(r,"utf-8").split(`
`).filter(s=>s.trim().length>0).slice(-Kl);(0,tt.writeFileSync)(r,o.length>0?`${o.join(`
`)}
`:"","utf-8")}}catch{}}async function Vl(e){let t;try{t=await(0,sn.readFile)(Ms(e),"utf-8")}catch{return[]}let n=[];for(let r of t.split(`
`)){let o=r.trim();if(o.length!==0)try{let s=AR(JSON.parse(o),o);s&&n.push(s)}catch{}}return n.slice(-Kl)}async function ig(e,t){let n=t.slice(-Kl);if(n.length===0){await(0,sn.rm)(Ms(e),{force:!0});return}await(0,sn.mkdir)(G(e),{recursive:!0});let r=`${n.map(o=>JSON.stringify(o)).join(`
`)}
`;await v(Ms(e),r)}async function ag(e){await(0,sn.rm)(Ms(e),{force:!0})}function xR(e){let t=e.DO_NOT_TRACK;if(t===void 0)return!1;let n=t.trim();return n!==""&&n!=="0"}function Yl(e){let t=e.env??process.env;return xR(t)?{enabled:!1,reason:"do-not-track"}:e.platformDisabled===!0?{enabled:!1,reason:"platform-off"}:e.config.telemetry==="off"?{enabled:!1,reason:"config-off"}:{enabled:!0,reason:"on"}}function lg(e){return Yl(e).enabled}var CR={app_installed:"First run after install; installId minted (once per machine). Props: none \u2014 count distinct install_id.",client_activated:"A GUI surface activated (VS Code activate / IntelliJ project open), carrying `surface_version`. First-seen (install_id, surface_version) \u2248 new + upgrade installs that launched. GUI-only \u2014 CLI new/upgrade is read from any event's surface_version.",surface_enabled:"A surface was enabled in a repo. Props: trigger.",surface_disabled:"A surface was disabled / opted out. Props: trigger, reason.",push_enabled:"Outbound push re-enabled for a repo (spec 306, per-repo push control). Props: trigger.",push_disabled:"Outbound push disabled for a repo (spec 306, per-repo push control). Props: trigger.",signin_started:"User initiated OAuth sign-in. Props: trigger.",signin_completed:"jolliApiKey minted \u2014 the conversion event. Props: api_key_minted.",signed_out:"User logged out. Props: none.",ai_provider_selected:"User chose jolli vs anthropic for LLM. Props: provider (discriminator).",memory_bank_migrated:"Migrate-to-Memory-Bank run. Props: outcome, repos, entries_bucket.",onboarding_progressed:"Per-install onboarding-funnel snapshot, emitted from a repo context and deduped by state tuple (+ daily heartbeat). Content-free \u2014 answers 'after install, where do people stall'. Props: in_git_repo, repo_enabled, capture_configured, capture_method (discriminator: local-agent/anthropic/jolli/none), memories_generated, memories_bucket.",command_invoked:'Any CLI command ran (auto-emitted). Props: command (discriminator), ok, duration_ms; via (discriminator: skill:<name> from a closed skill-name set \u2014 present when a Jolli skill\'s recipe invoked the command; absent means directly typed OR a pre-upgrade skill copy that predates the stamp, so absence is not proof of direct use). MCP tool calls carry a `tool` property and are emitted per call (not per session); the session-level `command:"mcp"` event is suppressed.',recall_performed:"A recall was run. Props: hit, result_count_bucket.",search_performed:"A search was run. Props: query_len_bucket, result_count_bucket.",memory_pushed:"Memories pushed to a Space. Props: kind, created, plans_bucket.",export_performed:"Export run. Props: format (discriminator).",ai_source_detected:"A new AI source transcript was detected. Props: source (discriminator: claude/codex/cursor/\u2026).",settings_opened:"Settings UI opened (vscode/intellij). Props: tab (discriminator).",ingest_completed:"A drainIngest run finished. Props: outcome, ingested, idle (no-op when ingested=0), batches, route_calls, reconcile_calls, touched_slugs, topic_failures, duration_ms. Filter idle=true out for real-ingest latency/health metrics.",error_occurred:"A structured error was raised. Content-free schema: { where (stage/subsystem), code (enumerated), source? , retryable? }. Emitted via trackError(); never carries a message/stack/path.",queue_drained:"QueueWorker finished a drain. Props: ops, duration_ms; trigger (discriminator: agent/ui/terminal/unknown \u2014 who set the drained commits in motion) and agent (which AI host, when trigger=agent) are present only when every drained entry agrees, and omitted for mixed or unstamped drains.",sync_completed:"A memory-bank sync round finished. Props: outcome (discriminator), duration_ms.",toolwindow_opened:"The memory tool window was opened. Props: view.",view_switched:"Tool window view switched (current/bank/knowledge). Props: view (discriminator).",memory_committed:"User committed a memory via the Commit button. Props: files_bucket (bucketed changed-file count), has_conversations (bool), context_bucket (bucketed plans/context count).",memory_expanded:"A committed memory's details were expanded. Props: expanded.",memory_item_opened:"An item inside a memory was opened. Props: item_type (discriminator: conversation/file/plan/note/reference/shipped); render (conversation only: live/stored \u2014 whether the source transcript was reopened or the stored copy was shown); source (conversation only: the transcript source, e.g. claude/codex); status (file only: the git status code, e.g. A/M/D).",session_resumed:"A conversation session was resumed in a terminal. Props: source (discriminator).",recall_prompt_copied:"A recall prompt was copied to the clipboard. Props: none.",memory_ref_id_copied:"A memory reference id (JM-<docId>) was copied to the clipboard. Props: surface_area (discriminator: list/detail \u2014 which UI the chip was clicked in).",memory_pinned:"An item was pinned. Props: kind (discriminator).",memory_unpinned:"An item was unpinned. Props: kind (discriminator).",repo_switched:"User switched the active repo in the tool window's breadcrumb. Props: is_foreign (bool).",branch_switched:"User switched the active branch in the tool window's breadcrumb. Props: is_foreign (bool).",squash_performed:"User squashed commits. Props: count_bucket (bucketed number of commits squashed).",pr_created:"User created or updated a PR from the tool window. Props: action (discriminator: created/updated).",memory_shared:"User invoked Share for a branch's memories (read-only share link). Props: none.",key_rejected:"The server rejected the API key (401/403). Props: retried, where.",reauth_completed:"Re-authentication after a rejected key finished. Props: outcome.",dashboard_opened:"The local web dashboard was opened in a browser (surface web-local). Props: first_run (bool \u2014 first open in this browser profile; per-origin localStorage, so it re-reports across ports, browsers, or a storage clear).",dashboard_view_switched:"The local web dashboard's left-nav view was switched. Props: view (discriminator: stats/standup/repositories/memories). Distinct from view_switched, which is the IDE tool-window event with its own view vocabulary.",range_changed:"The dashboard time-range control was changed. Props: range (discriminator: 7d/30d/90d/custom).",chart_split_changed:"A dashboard card's split-by control was changed. Props: card (discriminator: tokens/mcp), split (discriminator)."};var IR=new Set(Object.keys(CR));function cg(e){return IR.has(e)}var NR=1,Ql=null;function ug(e){let t=Yl({config:e.config,env:e.env,platformDisabled:e.platformDisabled}),{surface:n,surfaceVersion:r}=DR(),o=Gl(e.agent);Ql={enabled:t.enabled,cwd:e.cwd,installId:e.installId,sessionId:e.sessionId,surface:n,surfaceVersion:r,env:OR(e.origin,e.env),...o?{agent:o}:{}}}function pg(){return Ql}function Qr(e,t={}){PR(e,t,void 0)}function PR(e,t,n){let r=Ql;if(!(!r||!r.enabled)&&cg(e))try{let o=FR(t);delete o.agent;let s=t.agent!==void 0,i=n===void 0?r.agent:void 0,a=s?Gl(t.agent):i;a&&(o.agent=a);let l={schemaVersion:NR,eventId:(0,zl.randomUUID)(),eventName:e,surface:n??r.surface,surfaceVersion:r.surfaceVersion,installId:r.installId,...r.sessionId?{sessionId:r.sessionId}:{},os:process.platform,arch:process.arch,runtimeVersion:`node-${process.versions.node}`,env:r.env,tsIso:new Date().toISOString(),accountId:null,properties:o};sg(r.cwd,l)}catch{}}function mg(e){return!Number.isFinite(e)||e<=0?"0":e<=5?"1-5":e<=20?"6-20":e<=100?"21-100":"100+"}function OR(e,t=process.env){if(t.JOLLI_TELEMETRY_ENV==="sandbox")return"sandbox";if(!e)return"unknown";let n;try{n=new URL(e).hostname.toLowerCase()}catch{return"unknown"}let r=o=>n===o||n.endsWith(`.${o}`);return r("jolli-local.me")?"local":r("jolli.dev")?"dev":r("jolli.cloud")?"preview":r("jolli.ai")?"prod":"unknown"}function DR(e=jt){let t=e.indexOf("/"),n=t===-1?e:e.slice(0,t),r=t===-1?"unknown":e.slice(t+1);return{surface:n==="vscode-plugin"?"vscode":n,surfaceVersion:r||"unknown"}}var LR=new Set(["token","secret","password","passwd","apikey","api_key","jolliapikey","authtoken","auth_token","accesstoken","access_token","refreshtoken","refresh_token","cookie","credential","credentials"]),MR=4,$R=120;function dg(e){return e.length>$R?"[redacted:long]":/\b(?:sk-|ghp_|gho_|ghs_|github_pat_|xox[baprs]-)/.test(e)||e.includes("-----BEGIN")?"[redacted:secret]":/[^\s@]+@[^\s@]+\.[^\s@]+/.test(e)?"[redacted:email]":e.includes("://")?"[redacted:url]":/^~[/\\]/.test(e)||/[A-Za-z0-9._-][/\\][A-Za-z0-9._-]/.test(e)?"[redacted:path]":e}function Xl(e,t){if(t>MR)return"[redacted:deep]";if(e===null)return null;if(typeof e=="number")return Number.isFinite(e)?e:null;if(typeof e=="boolean")return e;if(typeof e=="string")return dg(e);if(Array.isArray(e))return e.map(n=>Xl(n,t+1)).filter(n=>n!==void 0);if(typeof e=="object"){let n={};for(let[r,o]of Object.entries(e)){if(LR.has(r.toLowerCase()))continue;let s=Xl(o,t+1);s!==void 0&&(n[dg(r)]=s)}return n}}function FR(e){return Xl(e,0)}var Sj=f("PushControl");Ze();w();Se();Qe();is();di();var By=require("node:path");Bs();Zn();w();w();var Gt=f("DualWriteStorage"),Eo=class{constructor(t,n){this.primary=t;this.shadow=n;this.kind="dual-write"}get kbRoot(){return this.shadow.kbRoot}async readFile(t){return this.primary.readFile(t)}async batchReadFiles(t){if(this.primary.batchReadFiles)return this.primary.batchReadFiles(t);let n=new Map;for(let r of t)n.set(r,await this.primary.readFile(r));return n}async writeFiles(t,n){if(!V()){await this.primary.writeFiles(t,n);try{await this.shadow.writeFiles(t,n),this.shadow.clearDirty?.()}catch(r){Gt.warn("Shadow write failed (folder storage): %s",r instanceof Error?r.message:String(r)),this.shadow.markDirty?.(n)}}}async deleteVisibleMarkdown(t){if(!this.shadow.deleteVisibleMarkdown)return!1;try{return await this.shadow.deleteVisibleMarkdown(t)}catch(n){let r=t.commitHash.substring(0,8);return Gt.warn("Shadow deleteVisibleMarkdown failed (folder storage) for %s/%s: %s",t.branch,r,R(n)),this.shadow.markDirty?.(`deleteVisibleMarkdown ${t.branch}/${r}`),!1}}async regenerateVisibleMarkdown(t){if(!this.shadow.regenerateVisibleMarkdown)return!1;try{return await this.shadow.regenerateVisibleMarkdown(t)}catch(n){let r=t.commitHash.substring(0,8);return Gt.warn("Shadow regenerateVisibleMarkdown failed (folder storage) for %s/%s: %s",t.branch,r,R(n)),this.shadow.markDirty?.(`regenerateVisibleMarkdown ${t.branch}/${r}`),!1}}async deletePlanVisible(t,n){if(this.shadow.deletePlanVisible)try{await this.shadow.deletePlanVisible(t,n)}catch(r){Gt.warn("Shadow deletePlanVisible failed (folder storage) for %s on %s: %s",t,n,R(r)),this.shadow.markDirty?.(`deletePlanVisible ${n}/${t}`)}}async deleteNoteVisible(t,n){if(this.shadow.deleteNoteVisible)try{await this.shadow.deleteNoteVisible(t,n)}catch(r){Gt.warn("Shadow deleteNoteVisible failed (folder storage) for %s on %s: %s",t,n,R(r)),this.shadow.markDirty?.(`deleteNoteVisible ${n}/${t}`)}}async pruneBranchMappings(t){if(!this.shadow.pruneBranchMappings)return 0;try{return await this.shadow.pruneBranchMappings(t)}catch(n){return Gt.warn("Shadow pruneBranchMappings failed (folder storage): %s",R(n)),this.shadow.markDirty?.(`pruneBranchMappings ${t.length}`),0}}async healMissingVisibleMarkdown(t){let n=this.shadow.healMissingVisibleMarkdown?this.shadow:this.primary.healMissingVisibleMarkdown?this.primary:null;if(!n)return{healed:0,skipped:0,failed:0};let r=t?.dropOrphanedManifestEntries??!0,o=n===this.shadow?"shadow":"primary";try{return await n.healMissingVisibleMarkdown?.({dropOrphanedManifestEntries:r})??{healed:0,skipped:0,failed:0}}catch(s){let i=s?.code,a=i?`[${i}] ${R(s)}`:R(s);return Gt.warn("%s healMissingVisibleMarkdown failed: %s",o,a),n.markDirty?.("healMissingVisibleMarkdown"),{healed:0,skipped:0,failed:0,error:a}}}async listFiles(t){return this.primary.listFiles(t)}async exists(){return this.primary.exists()}isDirty(){return this.shadow.isDirty?.()??!1}async ensure(){await this.primary.ensure();try{await this.shadow.ensure()}catch(t){Gt.warn("Shadow ensure failed: %s",t instanceof Error?t.message:String(t))}}async renderTopicWiki(t){await this.shadow.renderTopicWiki?.(t)}isTopicWikiPresent(){return this.shadow.isTopicWikiPresent?.()??!1}};var O=require("node:fs"),Hy=require("node:fs/promises"),L=require("node:path");w();var te=require("node:fs");var Be=require("node:path");w();var WA=f("Sync:VaultSymlinkGuard");function JA(e,t){if(!(0,Be.isAbsolute)(t))throw new Error(`assertNoSymlinksInPathSync: absTargetPath must be absolute, got ${t}`);if(!(0,Be.isAbsolute)(e))throw new Error(`assertNoSymlinksInPathSync: vaultRoot must be absolute, got ${e}`);let n=(0,Be.relative)(e,t);if(n===""||n.startsWith("..")||(0,Be.isAbsolute)(n))throw new Error(`assertNoSymlinksInPathSync: target ${t} is not inside vault ${e}`);let r=n.split(Be.sep),o=e;for(let s=0;s<r.length-1;s++){let i=r[s];if(i===void 0||i.length===0)continue;o=`${o}${Be.sep}${i}`;let a;try{a=(0,te.lstatSync)(o)}catch(l){if(l.code==="ENOENT")return;throw l}if(a.isSymbolicLink())throw WA.warn("Refusing vault write \u2014 symlink in path chain: %s",o),new Error(`Refused vault write: path segment is a symlink at ${o} (target ${t}). Inspect and unlink before retrying.`);if(!a.isDirectory())throw new Error(`Refused vault write: path segment is not a directory at ${o} (target ${t}).`)}}function $c(e,t,n){JA(e,t),(0,te.mkdirSync)((0,Be.dirname)(t),{recursive:!0});let r=`${t}.tmp`,o=te.constants.O_WRONLY|te.constants.O_CREAT|te.constants.O_TRUNC|te.constants.O_NOFOLLOW,s=(0,te.openSync)(r,o,420);try{typeof n=="string"?(0,te.writeSync)(s,n,void 0,"utf-8"):(0,te.writeSync)(s,n)}finally{(0,te.closeSync)(s)}(0,te.renameSync)(r,t)}Is();ae();ao();function GA(e){return`skills--${e}`}function mi(e){return`${GA(e)}.md`}function Ay(e){let t=["| Skill | Agent | \xD7 | Tokens | Input | Output | Cached |","|---|---|---|---|---|---|---|"],n=[...e].sort((o,s)=>{let i=Fc(s)-Fc(o);if(i!==0)return i;let a=o.skill<s.skill?-1:o.skill>s.skill?1:0;if(a!==0)return a;let l=o.source??"",c=s.source??"";return l<c?-1:l>c?1:0}),r=!1;for(let o of n){let s=o.detection==="heuristic"?" \u2020":"";s!==""&&(r=!0),t.push(`| ${Iy(o.skill)}${s} | ${qA(o)} | ${o.invocationCount} | ${KA(o).join(" | ")} |`)}return r&&t.push("","\u2020 Inferred from a file read rather than an observed invocation: the count is per session, and a human reading the skill file looks the same."),t}function xy(e){let t=`${e.length} skill${e.length===1?"":"s"}`,n=0,r=!1,o=!1;for(let s of e)s.usage!==void 0&&(r=!0,n+=s.usage.input+s.usage.cached+s.usage.output,s.usage.confidence!=="attributed"&&(o=!0));return r?`${t} \xB7 ${Ny(n,o?"~":"")} tokens`:t}function Cy(e,t){let n=e.commitHash.substring(0,8);return`${["---","type: skill-usage",`commitHash: ${e.commitHash}`,`branch: ${e.branch}`,`generatedAt: ${e.generatedAt}`,"---","",`# Skills used \u2014 ${n}`,"",`_${e.commitMessage}_`,"",...Ay(t),""].join(`
`)}
`}function Iy(e){return e.replace(/\\/g,"\\\\").replace(/\|/g,"\\|").replace(/[\r\n]+/g," ")}function Fc(e){let t=e.usage;return t===void 0?0:t.input+t.cached+t.output}function qA(e){let t=e.source;return t===void 0||t===""?"\u2014":Iy(Ec(t))}function KA(e){let t=e.usage;if(t===void 0)return["\u2014","\u2014","\u2014","\u2014"];let n=t.confidence==="attributed"?"":"~";return[Fc(e),t.input,t.output,t.cached].map(r=>Ny(r,n))}function Ny(e,t){return e<1e3?`${t}${e}`:`${t}${(e/1e3).toFixed(1)}k`}function _t(e){return e.replace(/[\\[\]]/g,"\\$&").replace(/[\r\n]+/g," ")}function Py(e){return e.replace(/[\\[\]~]/g,"\\$&").replace(/[\r\n]+/g," ")}function fi(e){return e.replace(/[()\s<>"]/g,t=>t==="("?"%28":t===")"?"%29":encodeURIComponent(t))}mc();hc();gs();ao();Wt();var Oy=3/1e6,VA=15/1e6,YA=3.75/1e6;function So(e){return Math.round(e).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function Dy(e){return e>=.01?`$${e.toFixed(2)}`:e>=5e-5?`$${e.toFixed(4)}`:e>0?"<$0.0001":"$0.00"}function Ly(e,t){return e?e.input*Oy+e.output*VA+e.cached*YA:t*Oy}function Uc(e){let{topics:t,sourceNodes:n}=Oh(e),r=[];return XA(r,e),ex(r,e,{withRelevance:!0}),zA(r,e),tx(r,e.e2eTestGuide),nx(r,n),ox(r,t,rx),sx(r),r.join(`
`)}function XA(e,t){let n=oo(t),r=n.filesChanged,o=ac(t),s=`${r} file${r!==1?"s":""} changed, +${n.insertions} insertions, \u2212${n.deletions} deletions`,i=wc(q(t));e.push(`# ${t.commitMessage}`,"",`- **Commit:** \`${t.commitHash}\``,`- **Branch:** \`${t.branch}\``,`- **Author:** ${t.commitAuthor}`,`- **Date:** ${i}`,`- **Duration:** ${yh(t)}`,`- **Changes:** ${s}`),o>0&&e.push(`- **Conversations:** ${o} turn${o!==1?"s":""}`);let a=lc(t);if(a>0){let c=cc(t),d=c.input>0||c.output>0||c.cached>0?c:void 0,u=Dy(Ly(d,a)),p=d?` (${So(d.input)} input, ${So(d.output)} output, ${So(d.cached)} cached)`:"";e.push(`- **Task usage:** ${So(a)} tokens \xB7 ${u}${p}`)}let l=t.jolliDocUrl;l&&e.push(`- **Jolli Memory:** [${l}](${l})`),e.push("","---")}function zA(e,t){let n=t.recap?.trim();n&&e.push("","## Quick recap","",n,"","---")}function QA(e){let t=new Map;for(let o of e){let s=t.get(o.source)??[];s.push(o),t.set(o.source,s)}let n=Un().all().map(o=>o.id),r=[];for(let o of n){let s=t.get(o);s&&(r.push(...s),t.delete(o))}for(let o of t.values())r.push(...o);return r}function jc(e,t,n){return e.get(`${t}:${n}`)??e.get(`${t}:${n.replace(bh,"")}`)}var ZA={high:"High",mid:"Med",low:"Low"};function Hc(e){return!e||e.reason===""?"":` \u2014 ${ZA[e.tier]} \xB7 ${_t(e.reason)}`}function ex(e,t,n){let r=t.plans??[],o=t.notes??[],s=n?.includeReferences?t.references??[]:[],i=n?.withRelevance?t.excludedContext??[]:[],a=new Map;if(n?.withRelevance)for(let u of t.contextRelevance??[])a.set(`${u.kind}:${u.key}`,{tier:u.tier,reason:u.reason});let l=t.skills??[],c=r.length+o.length+s.length+(l.length>0?1:0);if(c===0&&i.length===0)return;let d=c>1?` (${c})`:"";e.push("",`## Context${d}`,"");for(let u of r){let p=u.jolliPlanDocUrl,m=Hc(jc(a,"plan",u.slug));e.push((p?`- [${_t(u.title)}](${fi(p)})`:`- ${_t(u.title)}`)+m)}for(let u of o){let p=u.jolliNoteDocUrl,m=Hc(jc(a,"note",u.id));e.push((p?`- [${_t(u.title)}](${fi(p)})`:`- ${_t(u.title)}`)+m)}for(let u of QA(s)){let p=_t(gc(u)),m=u.jolliReferenceDocUrl??u.url,g=Hc(jc(a,"reference",`${u.source}:${u.nativeId}`));e.push((m?`- [${p}](${fi(m)})`:`- ${p}`)+g)}if(l.length>0){let u=l.some(p=>p.detection==="heuristic")?" \xB7 some inferred":"";e.push(`- Skills used \u2014 ${_t(xy(l))}${u}`)}for(let u of i)e.push(`- ~~${Py(u.title)}~~ \u2014 Excluded${u.reason?` \xB7 ${_t(u.reason)}`:""}`)}function tx(e,t){if(!(!t||t.length===0)){e.push("",`## E2E Test (${t.length})`);for(let n=0;n<t.length;n++){let r=t[n];e.push("",`### ${n+1}. ${r.title}`),r.preconditions&&e.push("",`**Preconditions:** ${r.preconditions}`),e.push("","**Steps:**");for(let o=0;o<r.steps.length;o++)e.push(`${o+1}. ${r.steps[o]}`);e.push("","**Expected Results:**");for(let o of r.expectedResults)e.push(`- ${o}`)}e.push("","---")}}function nx(e,t){if(!(t.length<=1)){e.push("",`## Source Commits (${t.length})`);for(let n of t){let r=oo(n),o=n.conversationTurns?` \xB7 ${n.conversationTurns} turns`:"";e.push(`- \`${n.commitHash.substring(0,8)}\` ${n.commitMessage}  _(+${r.insertions} \u2212${r.deletions}${o} \xB7 ${Ih(q(n))})_`)}e.push("","---")}}function rx(e,t){if(e.push("","**\u26A1 Why This Change**","",t.trigger),e.push("","**\u{1F4A1} Decisions Behind the Code**","",t.decisions),e.push("","**\u2705 What Was Implemented**","",t.response),t.todo&&e.push("","**\u{1F4CB} Future Enhancements**","",t.todo),t.filesAffected&&t.filesAffected.length>0){e.push("","**\u{1F4C1} FILES**");for(let n of t.filesAffected)e.push(`- \`${n}\``)}}function ox(e,t,n,r={singular:"Summary",plural:"Summaries"}){if(t.length!==0){e.push("",`## ${t.length===1?r.singular:r.plural} (${t.length})`);for(let o=0;o<t.length;o++){let s=t[o],i=s.category?` \`${s.category}\``:"";e.push("",`### ${Nh(o)} \xB7 ${s.title}${i}`),n(e,s)}}}function sx(e,t){let n=wc(new Date().toISOString()),r=t?Ph(t):void 0,o=r?` \xB7 via ${r}`:"";e.push("","---","",`*Generated by Jolli Memory \xB7 ${n}${o}*`)}var My="<!-- Generated by Jolli Memory \xB7 do not edit \u2014 regenerated on every merge -->";function $y(e,t,n,r){let o=[];if(o.push(`# ${e.title}`),o.push(""),o.push(My),o.push(""),o.push(`> **Source branches:** ${t.join(", ")}`),o.push(`> **Merged:** ${n}`),o.push(`> **Topic slug:** \`${e.stableSlug}\` (stable across re-merges)`),o.push(""),o.push(e.content.trim()),o.push(""),e.keyDecisions&&e.keyDecisions.length>0){o.push("## Key Decisions"),o.push("");for(let s of e.keyDecisions)o.push(`- ${s}`);o.push("")}if(e.sourceCommits.length>0){o.push("## Source Commits"),o.push("");for(let s of e.sourceCommits){let i=s.substring(0,8),a=r.resolveCommitVisiblePath(i),l=r.resolveCommitMessage(i);a&&l?o.push(`- ${Bc(i,ix(a))} \u2014 ${l}`):l?o.push(`- \`${i}\` \u2014 ${l}`):o.push(`- \`${i}\``)}o.push("")}if(e.relatedBranches&&e.relatedBranches.length>0){o.push("## Related Branches"),o.push("");for(let s of e.relatedBranches){let i=r.resolveBranchFolder(s);i?o.push(`- ${Bc(s,`../${i}/`)}`):o.push(`- \`${s}\``)}o.push("")}return o.join(`
`)}function Fy(e){return{title:e.title,stableSlug:e.stableSlug,content:e.content,...e.relatedBranches.length>0&&{relatedBranches:[...e.relatedBranches]},sourceCommits:e.sourceRefs.filter(t=>t.type==="summary").map(t=>t.id)}}function jy(e,t){let n=[];if(n.push(`# ${t.repoName} \xB7 Knowledge Wiki`),n.push(""),n.push(My),n.push(""),n.push(`> **${e.length} topics** in the knowledge base`),n.push(""),e.length>0){n.push("## Topics"),n.push("");for(let r of e)n.push(`- ${Bc(r.title,`topic--${r.stableSlug}.md`)}`);n.push("")}return n.join(`
`)}function ix(e){return e.startsWith("./")?e.substring(2):e}function Bc(e,t){let n=e.replace(/[\\[\]]/g,"\\$&"),r=t.replace(/ /g,"%20").replace(/\(/g,"%28").replace(/\)/g,"%29");return`[${n}](${r})`}var I=f("FolderStorage"),gi=class e{constructor(t,n){this.rootPath=t;this.metadataManager=n;this.kind="folder"}get vaultRoot(){return(0,L.dirname)(this.rootPath)}get kbRoot(){return this.rootPath}async readFile(t){let n=(0,L.join)(this.rootPath,".jolli",t);try{return(0,O.readFileSync)(n,"utf-8")}catch(r){let o=r.code;return o==="ENOENT"||o==="ENOTDIR"||I.warn("readFile failed for %s: %s",n,R(r)),null}}async writeFiles(t,n){if(V())return;await this.ensure();let r=0,o=0;for(let s of t)s.delete?this.deleteHiddenFile(s.path)&&o++:(this.writeHiddenFile(s.path,s.content),r++,s.path.startsWith("summaries/")&&s.path.endsWith(".json")&&this.generateSummaryMarkdown(s.content),s.path.startsWith("plans/")&&s.path.endsWith(".md")&&this.generatePlanMarkdown(s.path,s.content,s.branch),s.path.startsWith("notes/")&&s.path.endsWith(".md")&&this.generateNoteMarkdown(s.path,s.content,s.branch));I.info("Wrote %d files, deleted %d (%s)",r,o,n)}async listFiles(t){let n=(0,L.join)(this.rootPath,".jolli",t);if(!(0,O.existsSync)(n))return[];let r=(0,L.join)(this.rootPath,".jolli"),o=[];return this.walkDir(n,r,o),o.sort()}async exists(){return(0,O.existsSync)(this.rootPath)}async ensure(){(0,O.mkdirSync)(this.rootPath,{recursive:!0}),this.metadataManager.ensure()}markDirty(t){let n=(0,L.join)(this.rootPath,".jolli","shadow-status.json"),r={dirty:!0,lastFailedAt:new Date().toISOString(),message:t};try{$c(this.vaultRoot,n,JSON.stringify(r,null,"	"))}catch(o){I.warn("markDirty suppressed: %s",R(o))}}clearDirty(){let t=(0,L.join)(this.rootPath,".jolli","shadow-status.json");try{(0,O.existsSync)(t)&&(0,O.unlinkSync)(t)}catch{}}isDirty(){let t=(0,L.join)(this.rootPath,".jolli","shadow-status.json");return(0,O.existsSync)(t)}async deleteVisibleMarkdown(t){let n=e.slugify(t.commitMessage),r=t.commitHash.substring(0,8);try{await this.deleteVisibleArtifact(`skill:${t.commitHash}`,t.branch,mi(r))}catch(o){I.warn("Failed to delete skills aggregate for %s: %s",r,String(o))}return this.deleteVisibleArtifact(t.commitHash,t.branch,`${n}-${r}.md`)}async deletePlanVisible(t,n){await this.deleteVisibleArtifact(`plan:${t}`,n,`plan--${t}.md`)}async deleteNoteVisible(t,n){await this.deleteVisibleArtifact(`note:${t}`,n,`note--${t}.md`)}async pruneBranchMappings(t){let n=new Map,r=new Set(t);for(let s of this.metadataManager.listBranchMappings())r.has(s.branch)&&n.set(s.branch,s.folder);let o=this.metadataManager.unregisterBranches(t);return o===0?0:(await Promise.all([...n.values()].map(s=>this.rmdirIfEmpty((0,L.join)(this.rootPath,s)))),o)}async rmdirIfEmpty(t){try{await(0,Hy.rmdir)(t)}catch(n){let r=n.code;if(r==="ENOENT"||r==="ENOTEMPTY"||r==="EEXIST")return;I.warn("rmdir(%s) failed (non-fatal): %s",t,R(n))}}resolveBranchForFolder(t){return this.metadataManager.listBranchMappings().find(r=>r.folder===t)?.branch??null}async deleteVisibleArtifact(t,n,r){let o=this.metadataManager.findById(t),s=this.metadataManager.resolveFolderForBranch(n),i=o?.path??`${s}/${r}`,a=(0,L.join)(this.rootPath,i);if(!(0,O.existsSync)(a))return o&&this.metadataManager.removeFromManifest(t),!1;if(o?.fingerprint&&this.isUserEditedOnDisk(a,o.fingerprint))return I.warn("Skipping cleanup of %s \u2014 file modified since manifest record (likely hand-edited)",i),!1;try{return(0,O.unlinkSync)(a),o&&this.metadataManager.removeFromManifest(t),I.info("Deleted visible MD: %s",i),!0}catch(l){if(l.code==="ENOENT")return o&&this.metadataManager.removeFromManifest(t),!1;throw l}}async forceRegenerateVisibleMarkdown(t){let n=await this.readFile(`summaries/${t.commitHash}.json`);if(!n)return I.warn("forceRegenerateVisibleMarkdown: hidden summaries/%s.json missing \u2014 leaving visible file intact",t.commitHash.substring(0,8)),{ok:!1,reason:"missing"};try{JSON.parse(n)}catch(c){return I.warn("forceRegenerateVisibleMarkdown: malformed summaries/%s.json (%s) \u2014 leaving visible file intact",t.commitHash.substring(0,8),R(c)),{ok:!1,reason:"malformed"}}let r=this.metadataManager.resolveFolderForBranch(t.branch),o=e.slugify(t.commitMessage),s=t.commitHash.substring(0,8),i=`${r}/${o}-${s}.md`,a=(0,L.join)(this.rootPath,i);if((0,O.existsSync)(a))try{(0,O.unlinkSync)(a)}catch(c){return I.warn("forceRegenerateVisibleMarkdown: cannot unlink %s [%s]",i,String(c)),{ok:!1,reason:"unlinkFailed"}}return await this.regenerateVisibleMarkdown(t)?{ok:!0}:{ok:!1,reason:"missing"}}async regenerateVisibleMarkdown(t){let n=this.metadataManager.resolveFolderForBranch(t.branch),r=e.slugify(t.commitMessage),o=t.commitHash.substring(0,8),s=`${n}/${r}-${o}.md`,i=(0,L.join)(this.rootPath,s);if((0,O.existsSync)(i))return await this.healSkillsAggregate(t,n,o),!0;let a=await this.readFile(`summaries/${t.commitHash}.json`);if(!a)return I.warn("regenerateVisibleMarkdown: hidden summaries/%s.json missing",t.commitHash.substring(0,8)),!1;let l;try{l=JSON.parse(a)}catch(g){return I.warn("regenerateVisibleMarkdown: malformed summaries/%s.json \u2014 %s",t.commitHash.substring(0,8),R(g)),!1}let c=this.buildYamlFrontmatter(l),d=Uc(l),u=`${c}
${d}`;this.atomicWrite(i,u);let p=this.metadataManager.findById(t.commitHash),m=fe.sha256(u);return this.metadataManager.updateManifest({path:s,fileId:l.commitHash,type:"commit",fingerprint:m,source:{commitHash:l.commitHash,branch:l.branch,generatedAt:l.generatedAt},title:p?.title??l.commitMessage}),this.generateSkillsAggregate(l,n,o),I.info("Regenerated visible MD: %s",s),!0}async healMissingVisibleMarkdown(t){let r=this.metadataManager.readManifest().files.filter(c=>c.type==="commit"),o=0,s=0,i=0,a=[];for(let c of r){let d=(0,L.join)(this.rootPath,c.path);if((0,O.existsSync)(d)){s++;continue}let u=(0,L.join)(this.rootPath,".jolli","summaries",`${c.fileId}.json`),p;try{p=(0,O.readFileSync)(u,"utf-8")}catch(b){let x=b.code;if(x==="ENOENT"){i++,t?.dropOrphanedManifestEntries?(a.push(c.fileId),I.warn("healMissingVisibleMarkdown: hidden JSON missing for %s \u2014 will drop manifest entry",c.fileId.substring(0,8))):I.warn("healMissingVisibleMarkdown: hidden JSON missing for %s \u2014 keeping manifest entry (no truth source to repopulate)",c.fileId.substring(0,8));continue}i++,I.warn("healMissingVisibleMarkdown: hidden JSON read failed for %s [%s]: %s \u2014 keeping manifest entry",c.fileId.substring(0,8),x??"?",R(b));continue}let m;try{m=JSON.parse(p)}catch(b){i++,I.warn("healMissingVisibleMarkdown: malformed hidden JSON for %s: %s",c.fileId.substring(0,8),R(b));continue}let g=this.metadataManager.resolveFolderForBranch(m.branch),h=e.slugify(m.commitMessage),E=m.commitHash.substring(0,8),S=`${g}/${h}-${E}.md`;if(S!==c.path){s++,I.warn("healMissingVisibleMarkdown: manifest path drift for %s \u2014 manifest=%s computed=%s \u2014 keeping manifest entry, run reconcile",c.fileId.substring(0,8),c.path,S);continue}let k={commitHash:m.commitHash,parentCommitHash:null,commitMessage:m.commitMessage,commitDate:m.commitDate,branch:m.branch,generatedAt:m.generatedAt};try{await this.regenerateVisibleMarkdown(k)?o++:(i++,I.warn("healMissingVisibleMarkdown: regenerate returned false for %s \u2014 retry on next pass",c.fileId.substring(0,8)))}catch(b){i++,I.warn("healMissingVisibleMarkdown: regenerate failed for %s: %s",c.fileId.substring(0,8),R(b))}}let l=a.length>0?this.dropManifestEntries(a):[];return(o>0||i>0)&&I.info("healMissingVisibleMarkdown: healed=%d skipped=%d failed=%d dropped=%d",o,s,i,l.length),l.length>0?{healed:o,skipped:s,failed:i,droppedIds:l}:{healed:o,skipped:s,failed:i}}dropManifestEntries(t){if(t.length===0)return[];let n=new Set(t),r=this.metadataManager.readManifest(),o=r.files.filter(i=>n.has(i.fileId)).map(i=>i.fileId);if(o.length===0)return[];let s=r.files.filter(i=>!n.has(i.fileId));return this.metadataManager.replaceFiles(s),o}isUserEditedOnDisk(t,n){if(!(0,O.existsSync)(t)||!n)return!1;let r;try{r=fe.sha256((0,O.readFileSync)(t,"utf-8"))}catch(o){return I.warn("isUserEditedOnDisk: cannot read %s [%s] \u2014 treating as edited",t,String(o)),!0}return r!==n}generateSummaryMarkdown(t){let n;try{n=JSON.parse(t)}catch{return}let r=this.metadataManager.resolveFolderForBranch(n.branch),o=e.slugify(n.commitMessage),s=n.commitHash.substring(0,8),i=`${o}-${s}.md`,a=`${r}/${i}`,l=this.buildYamlFrontmatter(n),c=Uc(n),d=`${l}
${c}`,u=(0,L.join)(this.rootPath,a),p=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(u,p?.fingerprint)){I.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(u,d);let m=fe.sha256(d);this.metadataManager.updateManifest({path:a,fileId:n.commitHash,type:"commit",fingerprint:m,source:{commitHash:n.commitHash,branch:n.branch,generatedAt:n.generatedAt},title:n.commitMessage}),I.info("Markdown generated: %s",a),this.generateSkillsAggregate(n,r,s),n.children&&n.children.length>0&&this.cleanupSupersededDescendants(n.children,a)}async healSkillsAggregate(t,n,r){if((0,O.existsSync)((0,L.join)(this.rootPath,n,mi(r))))return;let o=await this.readFile(`summaries/${t.commitHash}.json`);if(o)try{this.generateSkillsAggregate(JSON.parse(o),n,r)}catch{}}generateSkillsAggregate(t,n,r){let o=t.skills;if(o===void 0||o.length===0)return;let s=`${n}/${mi(r)}`,i=(0,L.join)(this.rootPath,s),a=this.metadataManager.findByPath(s);if(this.isUserEditedOnDisk(i,a?.fingerprint)){I.info("FolderStorage: skip overwrite of user-edited %s",s);return}let l=Cy(t,o);this.atomicWrite(i,l),this.metadataManager.updateManifest({path:s,fileId:`skill:${t.commitHash}`,type:"skill",fingerprint:fe.sha256(l),source:{commitHash:t.commitHash,branch:t.branch,generatedAt:t.generatedAt},title:`Skills used \u2014 ${r}`}),I.info("Skills aggregate generated: %s",s)}cleanupSupersededDescendants(t,n){let r=[];e.collectDescendantHashes(t,r);for(let o of r){let s=this.metadataManager.findById(o);if(!s||s.type!=="commit"||s.path===n)continue;let i=(0,L.join)(this.rootPath,s.path);if(!(0,O.existsSync)(i)){this.metadataManager.removeFromManifest(o);continue}if(!s.fingerprint){I.warn("Skipping cleanup of %s \u2014 legacy entry has no fingerprint baseline",s.path);continue}if(this.isUserEditedOnDisk(i,s.fingerprint)){I.warn("Skipping cleanup of %s \u2014 file modified since manifest record (likely hand-edited)",s.path);continue}try{(0,O.unlinkSync)(i),this.metadataManager.removeFromManifest(o),I.info("Cleaned up superseded MD: %s",s.path)}catch(a){I.warn("Failed to delete superseded MD %s: %s",s.path,String(a))}}}static collectDescendantHashes(t,n){for(let r of t)n.push(r.commitHash),r.children&&r.children.length>0&&e.collectDescendantHashes(r.children,n)}buildYamlFrontmatter(t){let n=["---"];return n.push(`commitHash: ${t.commitHash}`),n.push(`branch: ${t.branch}`),n.push(`author: ${t.commitAuthor}`),n.push(`date: ${t.commitDate}`),n.push("type: commit"),t.commitType&&n.push(`commitType: ${t.commitType}`),t.stats&&(n.push(`filesChanged: ${t.stats.filesChanged}`),n.push(`insertions: ${t.stats.insertions}`),n.push(`deletions: ${t.stats.deletions}`)),n.push("---"),n.join(`
`)}async regenerateVisiblePlan(t,n){let r=await this.readFile(`plans/${t}.md`);if(!r)return I.warn("regenerateVisiblePlan: hidden plans/%s.md missing",t),!1;let o=this.metadataManager.resolveFolderForBranch(n),s=(0,L.join)(this.rootPath,o,`plan--${t}.md`);if((0,O.existsSync)(s))try{(0,O.unlinkSync)(s)}catch(i){return I.warn("regenerateVisiblePlan: cannot unlink %s [%s]",s,String(i)),!1}return this.generatePlanMarkdown(`plans/${t}.md`,r,n),!0}generatePlanMarkdown(t,n,r){let o=t.replace(/^plans\//,"").replace(/\.md$/,""),s=r?this.metadataManager.resolveFolderForBranch(r):this.resolveBranchFromSlug(o),i=`plan--${o}.md`,a=`${s}/${i}`,c=`${["---","type: plan",`slug: ${o}`,"---"].join(`
`)}

${n}`,d=(0,L.join)(this.rootPath,a),u=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(d,u?.fingerprint)){I.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(d,c);let p=fe.sha256(c);this.metadataManager.updateManifest({path:a,fileId:`plan:${o}`,type:"plan",fingerprint:p,updatedAt:new Date().toISOString(),source:r?{branch:r}:{},title:this.extractTitle(n)??o}),I.info("Plan markdown generated: %s",a)}async regenerateVisibleNote(t,n){let r=await this.readFile(`notes/${t}.md`);if(!r)return I.warn("regenerateVisibleNote: hidden notes/%s.md missing",t),!1;let o=this.metadataManager.resolveFolderForBranch(n),s=(0,L.join)(this.rootPath,o,`note--${t}.md`);if((0,O.existsSync)(s))try{(0,O.unlinkSync)(s)}catch(i){return I.warn("regenerateVisibleNote: cannot unlink %s [%s]",s,String(i)),!1}return this.generateNoteMarkdown(`notes/${t}.md`,r,n),!0}generateNoteMarkdown(t,n,r){let o=t.replace(/^notes\//,"").replace(/\.md$/,""),s=r?this.metadataManager.resolveFolderForBranch(r):this.resolveBranchFromSlug(o),i=`note--${o}.md`,a=`${s}/${i}`,c=`${["---","type: note",`id: ${o}`,"---"].join(`
`)}

${n}`,d=(0,L.join)(this.rootPath,a),u=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(d,u?.fingerprint)){I.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(d,c);let p=fe.sha256(c);this.metadataManager.updateManifest({path:a,fileId:`note:${o}`,type:"note",fingerprint:p,source:r?{branch:r}:{},title:this.extractTitle(n)??o,updatedAt:new Date().toISOString()}),I.info("Note markdown generated: %s",a)}resolveBranchFromSlug(t){let n=t.split("-").at(-1);if(n.length>=7){let o=this.metadataManager.readManifest().files.find(i=>i.type==="commit"&&i.source?.commitHash?.startsWith(n));if(o?.source?.branch)return this.metadataManager.resolveFolderForBranch(o.source.branch);let s=(0,L.join)(this.rootPath,".jolli","index.json");if((0,O.existsSync)(s))try{let a=JSON.parse((0,O.readFileSync)(s,"utf-8")).entries.find(l=>l.commitHash.startsWith(n));if(a?.branch)return this.metadataManager.resolveFolderForBranch(a.branch)}catch{}}return"_shared"}extractTitle(t){let n=t.match(/^#\s+(.+)/m);return n?n[1].trim():null}writeHiddenFile(t,n){let r=(0,L.join)(this.rootPath,".jolli",t);this.atomicWrite(r,n)}deleteHiddenFile(t){let n=(0,L.join)(this.rootPath,".jolli",t);if(!(0,O.existsSync)(n))return!1;try{return(0,O.unlinkSync)(n),!0}catch{return!1}}walkDir(t,n,r){for(let o of(0,O.readdirSync)(t,{withFileTypes:!0})){let s=(0,L.join)(t,o.name);o.isDirectory()?this.walkDir(s,n,r):r.push(He((0,L.relative)(n,s)))}}async renderTopicWiki(t){let n=(0,L.join)(this.rootPath,"_wiki");this.wipeWikiArtifacts(n);let r=this.buildWikiRenderContext();(0,O.mkdirSync)(n,{recursive:!0});let o=[];for(let s of t)try{let i=Fy(s);o.push(i);let a=`_wiki/topic--${i.stableSlug}.md`,l=$y(i,s.relatedBranches,s.lastUpdatedAt,r);this.atomicWrite((0,L.join)(this.rootPath,a),l),this.metadataManager.updateManifest({path:a,fileId:`wiki-topic-${i.stableSlug}`,type:"wiki",fingerprint:fe.sha256(l),source:{generatedAt:s.lastUpdatedAt},title:i.title})}catch(i){I.warn("renderTopicWiki: failed to render topic %s: %s",s.stableSlug,R(i))}try{let s=jy(o,r),i="_wiki/_index.md";this.atomicWrite((0,L.join)(this.rootPath,i),s),this.metadataManager.updateManifest({path:i,fileId:"wiki-index",type:"wiki",fingerprint:fe.sha256(s),source:{generatedAt:new Date().toISOString()},title:`${r.repoName} Knowledge Wiki`})}catch(s){I.warn("renderTopicWiki: failed to render index: %s",R(s))}I.info("Topic-KB wiki regenerated: %d topics under %s",t.length,n)}isTopicWikiPresent(){return(0,O.existsSync)((0,L.join)(this.rootPath,"_wiki","_index.md"))}wipeWikiArtifacts(t){if(this.metadataManager.unregisterFilesByType("wiki"),!!(0,O.existsSync)(t))try{for(let n of(0,O.readdirSync)(t))if(n.endsWith(".md"))try{(0,O.unlinkSync)((0,L.join)(t,n))}catch(r){I.warn("FolderStorage.wipeWikiArtifacts: failed to unlink %s: %s",n,R(r))}}catch(n){I.warn("FolderStorage.wipeWikiArtifacts: failed to list %s: %s",t,R(n))}}buildWikiRenderContext(){let t=this.metadataManager.readConfig(),n=this.metadataManager.listBranchMappings(),r=new Map(n.map(i=>[i.branch,i.folder])),o=this.metadataManager.readManifest(),s=new Map;for(let i of o.files)i.type==="commit"&&i.source.commitHash&&s.set(i.source.commitHash.substring(0,8),i);return{repoName:t.repoName??"Memory Bank",resolveCommitVisiblePath:i=>{let a=s.get(i);return a?`../${a.path}`:null},resolveBranchFolder:i=>r.get(i)??null,resolveCommitMessage:i=>s.get(i)?.title??null}}atomicWrite(t,n){$c(this.vaultRoot,t,n)}static slugify(t){let n=t.toLowerCase().replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"");return n.length>50&&(n=n.substring(0,50).replace(/-+$/,"")),n||"untitled"}};Xr();Is();Js();ue();li();var hi=f("StorageFactory");async function Wc(e,t){let n;try{n=await de()}catch(a){hi.warn("Failed to load config, falling back to defaults: %s",a.message),n={}}n.storageMode!==void 0&&hi.info("ignoring retired storageMode=%s \u2014 routing is decided by the cutover state",n.storageMode);let r=n.localFolder,o=await no(e);if(hi.info("StorageFactory.create: route=%s, projectPath=%s",o.state,e),o.state==="blocked")throw new Error(`storage unavailable: ${o.reason} \u2014 this repo's orphan branch is frozen (cutover), so writes cannot fall back to it; run 'jolli doctor --recover' or upgrade this surface`);if(o.state==="legacy-fenced"||o.state==="cutover"){let{identity:a}=await ln(e),l=new Jt(a);return Ml(e,r)?new Eo(l,Uy(e,r)):l}if(!Ml(e,r))return hi.warn("Not a claimable project (no git worktree, or inside the Memory Bank folder): %s \u2014 using orphan-only storage",e),new St(t);let s=new St(t),i=Uy(e,r);return new Eo(s,i)}function Uy(e,t){let n=Of(e),r=Mf(e),o=Pf(n,r,t),s=new fe((0,By.join)(o,".jolli"));return new gi(o,s)}rt();Wt();Sc();var Ne=f("SchemaV5Migration"),Jy="schema-v5-migration.json",Wy=3e4;async function Jc(e,t){let r=await(t??await Wc(e??process.cwd(),e)).readFile(Jy);if(!r)return null;try{return JSON.parse(r)}catch(o){return Ne.warn("Failed to parse v5 migration state \u2014 treating as absent: %s",o.message),null}}async function ax(e,t,n){if(jn(e))return await n();if(!await Pr(e,{timeoutMs:Wy}))throw new Error(`${t}: could not acquire orphan-write lock within ${Wy}ms`);try{return await Hn(e,n)}finally{await Or(e)}}async function Gy(e){let t=await Wc(e??process.cwd(),e),n=await Jc(e,t);return n?.status==="completed"?(Ne.info("Schema v5 migration already completed at %s \u2014 skipping",n.completedAt),{migrated:n.migratedCount,skipped:n.skippedCount,fresh:n.fresh,alreadyDone:!0}):await t.exists()?ax(e,"migrateSchemaToV5",()=>cx(e,t)):(Ne.info("Storage backend not initialized yet \u2014 skipping schema v5 migration (no data to migrate)"),{migrated:0,skipped:0,fresh:!0,alreadyDone:!1})}async function lx(e,t){if(t.length===0)return new Map;if(e.batchReadFiles)return e.batchReadFiles(t);let n=new Map;for(let r of t)n.set(r,await e.readFile(r));return n}async function cx(e,t){let n=await Jc(e,t);if(n?.status==="completed")return Ne.info("Schema v5 migration completed by a concurrent run at %s \u2014 skipping",n.completedAt),{migrated:n.migratedCount,skipped:n.skippedCount,fresh:n.fresh,alreadyDone:!0};let r=new Date().toISOString(),o=await ci(e),s=o.ok&&o.state==="uncutover"?await Y(["rev-parse",`refs/heads/${je}`],e).then($=>$.stdout.trim()).catch(()=>null):null,i=await t.listFiles("summaries/");Ne.info("Found %d summary files to inspect",i.length);let a=await t.listFiles("transcripts/"),l=new Set;for(let $ of a){let we=Xs($);we&&l.add(we)}Ne.info("Reading %d summaries...",i.length);let c=Date.now(),d=await lx(t,i);Ne.info("Read %d summaries in %d ms",d.size,Date.now()-c);let u=[],p=[],m=0,g=0;for(let $ of i){let we=d.get($);if(we===void 0)throw new Error(`readSummaries omitted ${$} \u2014 protocol contract violation (expected one entry per request)`);if(we===null){g++;continue}let $e;try{$e=JSON.parse(we)}catch(Xt){Ne.warn("Skipping unparseable summary %s: %s",$,Xt.message),g++;continue}let Fe=dx($e,l),It=JSON.stringify(Fe,null,"	");if(p.push({path:$,content:It}),Fe===$e){g++;continue}u.push({path:$,content:It}),m++}let h=i.length===0,E=m===0&&g>0,S=E?p:u,k=h?"Schema v5 migration: no pre-v5 data found":E?`Schema v5 migration: re-pushing ${g} v5 summaries to heal storage shadow`:`Schema v5 migration: ${m} upgraded, ${g} skipped`,b=Date.now();if(S.length>0&&(Ne.info("Writing %d summary file(s) via active storage...",S.length),await t.writeFiles(S,k)),t.isDirty?.()??!1)return Ne.warn("Schema v5 migration: storage shadow write failed (folder marked dirty) \u2014 leaving state PENDING; next startup will retry and re-push (migrated=%d, skipped=%d, took %d ms)",m,g,Date.now()-b),{migrated:m,skipped:g,fresh:h,alreadyDone:!1};let P={version:1,status:"completed",startedAt:r,completedAt:new Date().toISOString(),migratedCount:m,skippedCount:g,fresh:h};return await t.writeFiles([{path:Jy,content:JSON.stringify(P,null,"	")}],k),Ne.info("Schema v5 migration complete: %d migrated, %d skipped, fresh=%s, recovery=%s (took %d ms)",m,g,h,E,Date.now()-b),s&&Ne.info("Pre-migration orphan-branch SHA was %s (debug-only recovery anchor)",s),{migrated:m,skipped:g,fresh:h,alreadyDone:!1}}function dx(e,t){if(e.version>=5&&e.transcripts!==void 0)return e;let n=Rc(e);if(n.transcripts!==void 0)return{...n,version:5};let o=so(n).filter(i=>t.has(i));return{...n,version:5,transcripts:o}}ue();rt();w();var nr=require("node:fs/promises"),To=require("node:path");Q();Si();async function Kc(e){let t=(0,To.join)(e,".claude"),n=(0,To.join)(t,"settings.local.json"),r=kt("stop"),o=kt("session-start");await qy(e);let s={},i;try{i=await(0,nr.readFile)(n,"utf-8"),s=JSON.parse(i)}catch(m){if(m.code!=="ENOENT")throw m}let a=s.hooks??{},l=a.Stop??[],c=a.SessionStart??[],d=Ei(l);d.push({hooks:[{type:"command",command:r,async:!0}]});let u=fn(c,yi);u.push({hooks:[{type:"command",command:o}]}),a.Stop=d,a.SessionStart=u,s.hooks=a;let p=JSON.stringify(s,null,"	");return i===p?{path:n}:(await(0,nr.mkdir)(t,{recursive:!0}),await v(n,p),{path:n})}async function qy(e){let t=(0,To.join)(e,".claude","settings.json"),n;try{let i=await(0,nr.readFile)(t,"utf-8");n=JSON.parse(i)}catch{return}let r=n.hooks;if(!r)return;let o=r.Stop??[];if(!qc(o))return;let s=Ei(o);s.length===0?delete r.Stop:r.Stop=s,Object.keys(r).length===0?delete n.hooks:n.hooks=r,await v(t,JSON.stringify(n,null,"	"))}async function Vc(e){await qy(e);let t=(0,To.join)(e,".claude","settings.local.json"),n;try{let l=await(0,nr.readFile)(t,"utf-8");n=JSON.parse(l)}catch{return{}}let r=n.hooks;if(!r)return{};let o=r.Stop??[],s=qc(o);if(s){let l=Ei(o);l.length===0?delete r.Stop:r.Stop=l}let i=r.SessionStart??[],a=bo(i,yi);if(a){let l=fn(i,yi);l.length===0?delete r.SessionStart:r.SessionStart=l}return!s&&!a?{}:(Object.keys(r).length===0?delete n.hooks:n.hooks=r,await v(t,JSON.stringify(n,null,"	")),{})}var hn=require("node:fs/promises"),KE=require("node:os"),No=require("node:path");Q();w();var BE=require("node:crypto"),ir=require("node:fs"),hd=require("node:fs/promises"),Mi=require("node:os"),Rt=require("node:path");w();var Vy=require("node:fs"),Ti=require("node:fs/promises"),Yy=require("node:os"),gn=require("node:path"),Xy=require("node:url");Q();w();var px=/^[a-z0-9][a-z0-9-]*$/;function _o(e){return px.test(e)}var bi=f("DistPathWriter");async function ko(e,t,n,r){if(!_o(e))return bi.warn("Refusing to write dist-paths entry for unsafe source tag: %s",JSON.stringify(e)),!1;let o=t??(0,gn.dirname)((0,Xy.fileURLToPath)(__jmImportMetaUrl)),s=n??"0.99.16",i=(0,gn.join)(r??(0,gn.join)((0,Yy.homedir)(),".jolli","jollimemory"),"dist-paths"),a=(0,gn.join)(i,e);try{await(0,Ti.mkdir)(i,{recursive:!0});let l=`${s}
${o}`,c;try{c=await(0,Ti.readFile)(a,"utf-8")}catch{}if(c){let[d,u]=c.split(`
`);if(!!(d&&u&&Ky(u))&&!Ky(o))return bi.info("Kept complete dist-paths/%s (version=%s) \u2014 candidate dist is incomplete: %s",e,d,o),!0}return c!==l&&await v(a,l),bi.info("Wrote dist-paths/%s (version=%s, distDir=%s)",e,s,o),!0}catch(l){return bi.warn("Failed to write dist-paths/%s: %s",e,l.message),!1}}var mx=["Cli.js","StopHook.js","SessionStartHook.js","PostCommitHook.js","PostRewriteHook.js","PrepareMsgHook.js","PostMergeHook.js","PrePushHook.js","QueueWorker.js","PrePushWorker.js","HermesStopHook.js","HermesDiscoveryWorker.js"];function Ky(e){return mx.every(t=>(0,Vy.existsSync)((0,gn.join)(e,t)))}var sr=_r(UE(),1);function Li(e,t){if(e.includes("-")||e.includes("+")||t.includes("-")||t.includes("+")){let i=c=>{let d=(0,sr.valid)(c);return d||(/^\d+(\.\d+)*$/.test(c)?(0,sr.coerce)(c)?.version??null:null)},a=i(e),l=i(t);if(a&&l)return(0,sr.compare)(a,l);if(a)return 1;if(l)return-1}let n=/^\d+(\.\d+)*$/.test(e),r=/^\d+(\.\d+)*$/.test(t);if(!n&&!r)return 0;if(!n)return-1;if(!r)return 1;let o=e.split(".").map(Number),s=t.split(".").map(Number);for(let i=0;i<Math.max(o.length,s.length);i++){let a=(o[i]??0)-(s[i]??0);if(a!==0)return a}return 0}var gd=f("DistPathResolver"),EN=[[".cursor/","cursor"],[".windsurf/","windsurf"],[".antigravity/","antigravity"],[".vscode-oss/","vscodium"],[".positron/","positron"],[".trae/","trae"],[".vscode/","vscode"]];function yd(e){let t=e.replace(/\\/g,"/");for(let[r,o]of EN)if(t.includes(r))return o;let n=t.match(/\/\.([a-z][a-z0-9-]*)\/extensions\//i);return n?.[1]?n[1].toLowerCase():(0,BE.createHash)("sha256").update(e).digest("hex").slice(0,8)}function WE(e){try{let n=(0,ir.readFileSync)(e,"utf-8").trim().split(`
`).map(s=>s.trim());if(n.length<2)return null;let r=n[0],o=n[n.length-1];if(!o)return null;if(r.startsWith("source=")){let s=r.slice(7),i=s.indexOf("@");return i===-1?{source:s,version:"unknown",distDir:o}:{source:s.slice(0,i),version:s.slice(i+1),distDir:o}}return{source:"",version:r,distDir:o}}catch{return null}}function Io(e){let t=(0,Rt.join)(e??(0,Rt.join)((0,Mi.homedir)(),".jolli","jollimemory"),"dist-paths"),n;try{n=(0,ir.readdirSync)(t).sort()}catch{return[]}let r=[];for(let o of n){let s=(0,Rt.join)(t,o),i=WE(s);i&&r.push({source:o,version:i.version,distDir:i.distDir,available:(0,ir.existsSync)(i.distDir)})}return r}async function JE(e){let t=(0,Rt.join)(e??(0,Rt.join)((0,Mi.homedir)(),".jolli","jollimemory"),"dist-paths"),n=[];for(let r of Io(e))if(!r.available)try{await(0,hd.unlink)((0,Rt.join)(t,r.source)),n.push(r.source),gd.info("Pruned stale dist-paths/%s (dir gone: %s)",r.source,r.distDir)}catch(o){gd.warn("Failed to prune stale dist-paths/%s: %s",r.source,o.message)}return n}var wd=["cli","vscode","cursor"];function $i(e){let t=e.filter(o=>o.available);if(t.length===0)return;let n=t[0];for(let o=1;o<t.length;o++)Li(t[o].version,n.version)>0&&(n=t[o]);let r=t.filter(o=>Li(o.version,n.version)===0);for(let o of wd){let s=r.find(i=>i.source===o);if(s)return s}return n}async function GE(){let e=(0,Rt.join)((0,Mi.homedir)(),".jolli","jollimemory"),t=(0,Rt.join)(e,"dist-path"),n=WE(t);if(!n)return!1;let r;if(n.source==="cli")r="cli";else{let o=yd(n.distDir);r=/^[a-f0-9]{8}$/.test(o)?"vscode":o}return r==="vscode-extension"&&(r="vscode"),await ko(r,n.distDir,n.version),await(0,hd.unlink)(t).catch(()=>{}),gd.info("Migrated legacy dist-path -> dist-paths/%s (version=%s, distDir=%s)",r,n.version,n.distDir),!0}var qE=f("DispatchScripts"),SN=`#!/bin/bash
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
  for pref in ${wd.join(" ")}; do
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
`,bN=`#!/bin/bash
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
  hermes-stop)        SCRIPT="HermesStopHook.js" ;;
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
`,TN=`#!/bin/bash
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
`;async function Ed(e,t){let n=!1;try{n=await(0,hn.readFile)(e,"utf-8")===t}catch{}if(n){await(0,hn.chmod)(e,493);return}await v(e,t),await(0,hn.chmod)(e,493)}async function Sd(){let e=(0,No.join)((0,KE.homedir)(),".jolli","jollimemory");try{return await(0,hn.mkdir)(e,{recursive:!0}),await Ed((0,No.join)(e,"resolve-dist-path"),SN),await Ed((0,No.join)(e,"run-hook"),bN),await Ed((0,No.join)(e,"run-cli"),TN),qE.info("Wrote resolve-dist-path, run-hook, and run-cli scripts to %s",e),!0}catch(t){return qE.warn("Failed to write resolve scripts: %s",t.message),!1}}var Po=require("node:fs/promises"),Fi=require("node:path");Q();w();Si();var VE=f("GeminiHookInstaller");async function bd(e){let t=(0,Fi.join)(e,".gemini"),n=(0,Fi.join)(t,"settings.json"),r=kt("gemini-after-agent"),o={},s;try{s=await(0,Po.readFile)(n,"utf-8"),o=JSON.parse(s)}catch(d){if(d.code!=="ENOENT")throw d}let i=o.hooks??{},a=i.AfterAgent??[],l=fn(a,wi);l.push({hooks:[{type:"command",command:r,name:"jolli-session-tracker"}]}),i.AfterAgent=l,o.hooks=i;let c=JSON.stringify(o,null,"	");return s===c?{path:n}:(await(0,Po.mkdir)(t,{recursive:!0}),await v(n,c),VE.info("Gemini AfterAgent hook installed"),{path:n})}async function Td(e){let t=(0,Fi.join)(e,".gemini","settings.json"),n;try{let i=await(0,Po.readFile)(t,"utf-8");n=JSON.parse(i)}catch{return}let r=n.hooks;if(!r)return;let o=r.AfterAgent??[];if(!bo(o,wi))return;let s=fn(o,wi);s.length===0?delete r.AfterAgent:r.AfterAgent=s,Object.keys(r).length===0?delete n.hooks:n.hooks=r,await v(t,JSON.stringify(n,null,"	")),VE.info("Gemini AfterAgent hook removed")}var yn=require("node:fs/promises"),vt=require("node:path");Q();w();ke();var De=f("GitExclude"),Oo="# >>> jolli skill exclude >>>",Do="# <<< jolli skill exclude <<<";function _N(e,t){return vt.win32.isAbsolute(e)||vt.posix.isAbsolute(e)?e:(0,vt.join)(t,e)}var YE=new Map;async function _d(e){let t=YE.get(e);if(t!==void 0)return t;try{let{stdout:n}=await Pn("git",["rev-parse","--git-path","info/exclude"],{cwd:e}),r=n.trim();if(r.length===0)return null;let o=_N(r,e);return YE.set(e,o),o}catch{return null}}async function XE(e,t){let n=await _d(e);if(!n)return De.warn("Skipping .git/info/exclude update for %s: not a git repo or git unavailable",e),!1;let r="";try{r=await(0,yn.readFile)(n,"utf-8")}catch(i){if(i.code!=="ENOENT")return De.warn("Failed to read %s: %s \u2014 skipping update",n,i.message),!1}let o=zE(t),s=QE(r,o);if(s===r)return!0;try{return await(0,yn.mkdir)((0,vt.dirname)(n),{recursive:!0}),await v(n,s),De.info("Updated %s with %d Jolli skill exclude paths",n,t.length),!0}catch(i){return De.warn("Failed to write %s: %s",n,i.message),!1}}async function kd(e,t){let n=await _d(e);if(!n)return De.warn("Skipping .git/info/exclude update for %s: not a git repo or git unavailable",e),!1;let r="";try{r=await(0,yn.readFile)(n,"utf-8")}catch(s){if(s.code!=="ENOENT")return De.warn("Failed to read %s: %s \u2014 skipping update",n,s.message),!1}let o=kN(r,t);if(o===r)return!0;try{return await(0,yn.mkdir)((0,vt.dirname)(n),{recursive:!0}),await v(n,o),De.info("Merged %d Jolli skill exclude path(s) into %s",t.length,n),!0}catch(s){return De.warn("Failed to write %s: %s",n,s.message),!1}}async function ar(e,t){let n=await _d(e);if(!n)return De.warn("Skipping .git/info/exclude cleanup for %s: not a git repo or git unavailable",e),!1;let r;try{r=await(0,yn.readFile)(n,"utf-8")}catch(s){return s.code==="ENOENT"?!0:(De.warn("Failed to read %s: %s \u2014 skipping cleanup",n,s.message),!1)}let o=RN(r,t);if(o===r)return!0;try{return await v(n,o),De.info("Removed %d Jolli exclude path(s) from %s",t.length,n),!0}catch(s){return De.warn("Failed to write %s: %s",n,s.message),!1}}function zE(e){return`${[Oo,...e,Do].join(`
`)}
`}function QE(e,t){let n=e.split(`
`),r=n.indexOf(Oo),o=n.indexOf(Do),s=t.slice(0,-1).split(`
`);if(r!==-1&&o!==-1&&o>r)return[...n.slice(0,r),...s,...n.slice(o+1)].join(`
`);if(e.length===0)return t;let i=e.endsWith(`
`)?"":`
`;return`${e}${i}${t}`}function kN(e,t){let n=e.split(`
`),r=n.indexOf(Oo),o=n.indexOf(Do),s=r!==-1&&o!==-1&&o>r?n.slice(r+1,o):[],i=new Set(s),a=[...s];for(let l of t)i.has(l)||(i.add(l),a.push(l));return QE(e,zE(a))}function RN(e,t){let n=e.split(`
`),r=n.indexOf(Oo),o=n.indexOf(Do);if(r===-1||o===-1||o<=r)return e;let s=new Set(t),i=n.slice(r+1,o).filter(c=>!s.has(c)),a=n.slice(0,r),l=n.slice(o+1);return i.length===0?[...a.length>0&&a[a.length-1]===""?a.slice(0,-1):a,...l].join(`
`):[...a,Oo,...i,Do,...l].join(`
`)}Md();var Vt=require("node:fs/promises"),$d=require("node:os"),jo=require("node:path");w();var ur=f("GlobalInstructionsInstaller"),Fd="<!-- >>> jolli memory instructions >>> -->",jd="<!-- <<< jolli memory instructions <<< -->",iS="## Jolli Memory",aS=[{host:"claude",relPath:[".claude","CLAUDE.md"]},{host:"gemini",relPath:[".gemini","GEMINI.md"]},{host:"codex",relPath:[".codex","AGENTS.md"]}];function vN(){return`${[Fd,iS,"","This repository may have **Jolli Memory** enabled \u2014 a durable record of past","development the current code cannot show: why choices were made, how a topic was","handled before, what was already tried, and where work stopped. Treat it as a","first-class source and reach for it **proactively \u2014 before answering or guessing,","and even when the user never names Jolli** \u2014 whenever a request is memory-shaped","(about intent, history, or prior work). Its reads are read-only and cheap, so","lean toward consulting memory rather than guessing: a hit often changes the","answer, and a miss costs little.","","Two capabilities are available; invoke whichever recall / search skill or tool is","registered in this session \u2014 the exact name varies by host (a plugin skill, a","project skill, or e.g. an `mcp__jollimemory__*` MCP tool), so route by intent, not","by a fixed name:","","- **Recall** \u2014 deep context for one branch (the current branch by default): its","  decisions, a recap, and where work left off.","- **Search** \u2014 full-text lookup across *all* branches: decisions, topics, files.","","Consult memory FIRST, before answering from your own assumptions, when the request","is memory-shaped:","",'- **Why / intent** \u2014 "why is this like this", "why X and not Y", "what was the','  reasoning", or anything where the code shows *what* but not *why*. \u2192 Search (or',"  Recall when it's about the current branch).",'- **How it works / design** \u2014 "how does X work", "how is X built/designed", "how','  would I implement X", or walking through / extending an existing feature or',"  subsystem in this repo. The code shows the mechanism; memory holds why it is","  shaped that way and what was already tried. \u2192 Search (or Recall for the current","  branch). A quick lookup here is cheap and often surfaces rationale and pitfalls",`  the code comments don't \u2014 so search even though the ask starts with "how".`,'- **Prior art** \u2014 "have we done/hit this before", "how was <topic> handled", "is','  there a pattern for this", "where else do we do X", or a bug that may have been',"  seen before. \u2192 Search (decisions / topics / files across ALL branches).",`- **Resume** \u2014 "where were we", "pick up where I left off", "what's left on this`,'  branch", or returning to work after a break. \u2192 Recall (current-branch decisions',"  + recap + where work stopped).","- **Before non-trivial edits** \u2014 before refactoring, changing, or deleting code","  whose intent isn't obvious from the code itself, search memory first; a past","  decision may constrain the change, and skipping this risks re-breaking what a","  prior fix already addressed.","",'Routing: current-branch history or resume \u2192 Recall; cross-branch or "has this','come up before" \u2192 Search. When unsure whether memory helps, run a quick search',"first before answering from your own assumptions.","","Do NOT reach for memory on narrow, current-state facts you can read straight from","the code \u2014 one function's behavior, a type or signature, running a command, a","rename, formatting, or a literal text lookup \u2014 answer those from the code directly.","That exclusion is for single-symbol lookups only; do not let it swallow a",'whole-feature "how does it work / how is it designed" question \u2014 that is',"design-shaped, so search memory first (per the How it works / design rule above).","","Treat any concrete fact memory states as of-its-time: use it for why / intent /","prior context, but verify names, paths, and code shape against the current code","before relying on them. If no Jolli memory capability is registered here (Jolli","Memory not enabled in this repo), fall back to normal behavior.",jd].join(`
`)}
`}function lS(e){return e==="enabled"?{write:!0}:e==="disabled"?{write:!1,remove:!0}:{write:!1}}function AN(e,t){let n=e.split(`
`),r=n.indexOf(Fd),o=n.indexOf(jd),s=t.slice(0,-1).split(`
`);if(r!==-1&&o!==-1&&o>r)return[...n.slice(0,r),...s,...n.slice(o+1)].join(`
`);let i=n.indexOf(iS);if(i!==-1){let l=n.length;for(let u=i+1;u<n.length;u++)if(/^#{1,2} /.test(n[u])){l=u;break}let c=n.slice(0,i).join(`
`),d=n.slice(l).join(`
`);return`${c.length>0?`${c}
`:""}${t}${d}`}if(e.length===0)return t;let a=e.endsWith(`
`)?"":`
`;return`${e}${a}${t}`}async function xN(e,t){let n="";try{n=await(0,Vt.readFile)(e,"utf-8")}catch(o){if(o.code!=="ENOENT"){ur.warn("Failed to read %s: %s \u2014 skipping",e,o.message);return}}let r=AN(n,t);if(r!==n)try{await(0,Vt.mkdir)((0,jo.dirname)(e),{recursive:!0}),await(0,Vt.writeFile)(e,r,"utf-8"),ur.info("Updated %s with Jolli Memory instructions",e)}catch(o){ur.warn("Failed to write %s: %s",e,o.message)}}async function cS(e){let t=vN(),n=(0,$d.homedir)();for(let r of aS)e[r.host]&&await xN((0,jo.join)(n,...r.relPath),t)}function CN(e){let t=e.split(`
`),n=t.indexOf(Fd),r=t.indexOf(jd);if(n===-1||r===-1||r<n)return e;let o=n>0&&t[n-1]===""?n-1:n;return[...t.slice(0,o),...t.slice(r+1)].join(`
`)}async function IN(e){let t;try{t=await(0,Vt.readFile)(e,"utf-8")}catch(r){r.code!=="ENOENT"&&ur.warn("Failed to read %s: %s \u2014 skipping",e,r.message);return}let n=CN(t);if(n!==t)try{await(0,Vt.writeFile)(e,n,"utf-8"),ur.info("Removed Jolli Memory instructions from %s",e)}catch(r){ur.warn("Failed to write %s: %s",e,r.message)}}async function dS(){let e=(0,$d.homedir)();for(let t of aS)await IN((0,jo.join)(e,...t.relPath))}var Ae=require("node:os"),U=require("node:path");ue();w();var uS=require("node:fs"),mr=require("node:fs/promises"),pr=require("node:path");ue();w();var Hd=f("McpRegistration"),Ud="jollimemory";function NN(e,t,n,r){return e==="win32"&&n?{command:"node",args:[n,...r]}:{command:t,args:[...r]}}function Bd(e,t,n){return NN(e,t,n,["mcp"])}function Wd(e){let t=$i(Io(e));return t?(0,pr.join)(t.distDir,"Cli.js"):void 0}function pS(e){let t=$i(Io(e));if(!t)return;let n=(0,pr.join)(t.distDir,"McpLauncher.js");return(0,uS.existsSync)(n)?n:void 0}var mS="/.mcp.json";async function fS(e){let t=(0,pr.join)(e,".mcp.json"),n;try{n=JSON.parse(await(0,mr.readFile)(t,"utf-8"))}catch(l){if(l.code!=="ENOENT"){Hd.warn("Skipping MCP registration: %s exists but is unreadable/invalid (%s)",t,String(l));return}n={}}let r=n.mcpServers??{},o=Z(),s=(0,pr.join)(o,"run-cli"),i=process.platform==="win32"?Wd(o):void 0;r[Ud]=Bd(process.platform,s,i);let a={...n,mcpServers:r};await(0,mr.writeFile)(t,`${JSON.stringify(a,null,2)}
`,"utf-8"),Hd.info("Registered MCP server in %s",t)}async function gS(e){let t=(0,pr.join)(e,".mcp.json"),n;try{n=JSON.parse(await(0,mr.readFile)(t,"utf-8"))}catch{return}n.mcpServers?.[Ud]&&(delete n.mcpServers[Ud],await(0,mr.writeFile)(t,`${JSON.stringify(n,null,2)}
`,"utf-8"),Hd.info("Removed MCP server from %s",t))}var wn=require("node:fs/promises"),yS=require("node:path");Q();w();var Wi=f("CodexTomlWriter"),Ji="[mcp_servers.jollimemory]";async function wS(e){try{return(await(0,wn.stat)(e)).mode&511}catch{return 384}}function hS(e){return`${Ji}
command = ${JSON.stringify(e.command)}
args = ${JSON.stringify(e.args??[])}
`}function ES(e){if(e.startsWith(Ji))return 0;let t=e.indexOf(`
${Ji}`);return t===-1?-1:t+1}function SS(e){let t=ES(e);if(t===-1)return e;let n=e.indexOf(`
[`,t+Ji.length),r=n===-1?e.length:n+1,o=e.slice(0,t),s=e.slice(r);return o===""||s===""?o+s:`${o.replace(/\n+$/,"")}

${s}`}async function bS(e,t){let n="";try{n=await(0,wn.readFile)(e,"utf-8")}catch(i){if(i.code!=="ENOENT"){Wi.warn("Skipping Codex MCP: %s unreadable (%s)",e,String(i));return}}let r=SS(n).replace(/\s*$/,""),o=r.length===0?hS(t):`${r}

${hS(t)}`;if(o===n){Wi.info("Codex MCP server already registered in %s \u2014 no write needed",e);return}await(0,wn.mkdir)((0,yS.dirname)(e),{recursive:!0});let s=await wS(e);await v(e,o,s),Wi.info("Registered Codex MCP server in %s",e)}async function TS(e){let t;try{t=await(0,wn.readFile)(e,"utf-8")}catch{return}ES(t)!==-1&&(await v(e,`${SS(t).replace(/\s*$/,"")}
`,await wS(e)),Wi.info("Removed Codex MCP server from %s",e))}var it=require("node:fs/promises"),Gd=require("node:path");Q();w();var st=f("HermesConfigWriter");async function qi(e){try{return(await(0,it.stat)(e)).mode&511}catch{return 384}}function xt(e){return e.replace(/\r\n/g,`
`).replace(/\r/g,`
`)}var At=e=>/^\s*$/.test(e),Jd=e=>/^#/.test(e),_S=e=>e.length===0||/^[ \t]/.test(e),kS=new Set(["{}","[]","null","~"]);function Ho(e,t){let n=new RegExp(`^${t}:(\\s*(.*))?$`),r=-1,o;for(let i=0;i<e.length;i++){let a=n.exec(e[i]);if(a!==null){r=i,o=(a[2]??"").trim();break}}if(r===-1)return null;if(o?.startsWith("#")&&(o=""),o!==void 0&&o.length>0)return kS.has(o)?{headerIndex:r,endIndex:r+1,trivialInline:!0,nonTrivialInline:!1}:{headerIndex:r,endIndex:r+1,trivialInline:!1,nonTrivialInline:!0};let s=r+1;for(;s<e.length;){let i=e[s];if(At(i)){s++;continue}if(!_S(i)&&!Jd(i))break;if(Jd(i)){let a=s+1;for(;a<e.length&&(At(e[a])||Jd(e[a]));)a++;if(a<e.length&&_S(e[a])&&!At(e[a])){s++;continue}break}s++}for(;s>r+1&&At(e[s-1]);)s--;return{headerIndex:r,endIndex:s,trivialInline:!1,nonTrivialInline:!1}}function RS(e,t){let n=xt(e),r=n.split(`
`);return n.endsWith(`
`)&&r.pop(),Ho(r,t)?.nonTrivialInline??!1}function Ki(e,t){if(t.trivialInline)return null;let n=e.slice(t.headerIndex+1,t.endIndex);if(n.length===0)return[];let r=n.find(c=>!At(c));if(r===void 0)return[];let o=/^([ \t]+)/.exec(r)?.[1]??"",s=new RegExp(`^${o}(?!-\\s)([^\\s:#][^:]*):(.*)$`),i=c=>c.length>o.length&&c.startsWith(o)&&c[o.length]==="#",a=[],l=0;for(;l<n.length;){if(At(n[l])){l++;continue}let c=s.exec(n[l]);if(c===null){a.push({subKey:"",body:`${n[l]}
`}),l++;continue}let d=c[1].trim(),u=l;for(l++;l<n.length;){let m=n[l];if(At(m)){l++;continue}if(s.exec(m)!==null||i(m))break;l++}let p=l;for(;p>u+1&&At(n[p-1]);)p--;a.push({subKey:d,body:`${n.slice(u,p).join(`
`)}
`})}return a}function Vi(e,t){if(t.length===0)return`${e}: {}`;let n=t.map(r=>r.body.replace(/\n+$/,""));return`${e}:
${n.join(`
`)}`}async function vS(e,t,n){let r="";try{r=await(0,it.readFile)(e,"utf-8")}catch(i){if(i.code!=="ENOENT"){st.warn("Skipping %s: %s unreadable (%s)",e,t,String(i));return}}if(RS(r,t)){st.warn("Skipping Hermes %s upsert in %s: the %s block is a non-trivial inline block and was left untouched",t,e,t);return}let o=xt(r),s=PN(o,t,n);if(s===o){st.info("Hermes %s already up to date in %s \u2014 no write needed",t,e);return}await(0,it.mkdir)((0,Gd.dirname)(e),{recursive:!0}),await v(e,s,await qi(e)),st.info("Wrote Hermes %s.%s to %s",t,n.subKey,e)}async function AS(e,t,n){let r;try{r=await(0,it.readFile)(e,"utf-8")}catch{return}let o=xt(r),s=ON(o,t,n);s!==o&&(await v(e,s,await qi(e)),st.info("Removed Hermes %s.%s from %s",t,n,e))}async function xS(e,t,n,r){let o="";try{o=await(0,it.readFile)(e,"utf-8")}catch(a){if(a.code!=="ENOENT"){st.warn("Skipping %s: hooks unreadable (%s)",e,String(a));return}}if(RS(o,"hooks")){st.warn("Skipping Hermes hooks upsert in %s: the hooks block is a non-trivial inline block and was left untouched",e);return}let s=xt(o),i=$N(s,t,n,r);if(i===s){st.info("Hermes hook already up to date in %s \u2014 no write needed",e);return}await(0,it.mkdir)((0,Gd.dirname)(e),{recursive:!0}),await v(e,i,await qi(e)),st.info("Wrote Hermes hook %s command to %s",t,e)}async function CS(e,t,n){let r;try{r=await(0,it.readFile)(e,"utf-8")}catch{return}let o=xt(r),s=FN(o,t,n);s!==o&&(await v(e,s,await qi(e)),st.info("Removed Hermes hook %s command from %s",t,e))}function PN(e,t,n){let r=xt(e),o=r.split(`
`);r.endsWith(`
`)&&o.pop();let s=Ho(o,t),i=Vi(t,jN(s!==null?Ki(o,s)??[]:[],n)),a;if(s===null){let l=o.join(`
`).replace(/\s*$/,"");a=l.length===0?i:`${l}

${i}`}else{if(s.nonTrivialInline)return e;let l=o.slice(0,s.headerIndex).join(`
`),c=o.slice(s.endIndex).join(`
`);a=[l,i,c].filter(d=>d.length>0).join(`
`)}return`${a.replace(/\n+$/,"")}
`}function ON(e,t,n){let r=xt(e),o=r.split(`
`);r.endsWith(`
`)&&o.pop();let s=Ho(o,t);if(s===null||s.trivialInline)return e;let i=Ki(o,s)??[],a=i.filter(p=>p.subKey!==n);if(a.length===i.length)return e;let l=Vi(t,a),c=o.slice(0,s.headerIndex).join(`
`),d=o.slice(s.endIndex).join(`
`);return`${[c,l,d].filter(p=>p.length>0).join(`
`).replace(/\n+$/,"")}
`}function DN(e){let t=e.trim();if(t.length===0||/^[|>][+-]?\d*$/.test(t))return null;if(t.startsWith('"'))try{let n=JSON.parse(t);return typeof n=="string"?n:null}catch{return null}return t.startsWith("'")&&t.endsWith("'")?t.slice(1,-1).replace(/''/g,"'"):t}function qd(e){let t=[];for(let n=1;n<e.length;n++){let r=/^([ \t]*)-\s+command:\s*(.*?)\s*$/.exec(e[n]);r!==null&&t.push({index:n,indent:r[1],command:DN(r[2])})}return t.map((n,r)=>{let o=e.length;for(let i=n.index+1;i<e.length;i++)if(e[i].startsWith(`${n.indent}- `)){o=i;break}let s=t[r+1]?.index;return s!==void 0&&(o=Math.min(o,s)),{start:n.index,end:o,indent:n.indent,command:n.command}})}function Gi(e,t,n){return[`${e}- command: ${JSON.stringify(t)}`,`${e}  timeout: ${n}`]}function LN(e,t,n,r){let o=e.body.replace(/\n+$/,"").split(`
`),s=/^([ \t]*)[^:]+:\s*(.*?)\s*$/.exec(o[0]),i=s?.[1]??"  ",a=s?.[2]??"";if(kS.has(a))return{subKey:t,body:`${i}${t}:
${Gi(`${i}  `,n,r).join(`
`)}
`};if(a.length>0)return e;let l=qd(o),c=l.filter(h=>h.command===n),d=l[0]?.indent??`${i}  `;if(c.length===0)return{subKey:t,body:`${[...o,...Gi(d,n,r)].join(`
`)}
`};let u=c[0],p=new Set;for(let h of c)for(let E=h.start;E<h.end;E++)p.add(E);let m=o.filter((h,E)=>!p.has(E)),g=[...p].filter(h=>h<u.start).length;return m.splice(u.start-g,0,...Gi(u.indent,n,r)),{subKey:t,body:`${m.join(`
`)}
`}}function MN(e){for(let t of e){if(t.subKey.length===0)continue;let n=t.body.replace(/\n+$/,"").split(`
`),r=/^([ \t]*)/.exec(n[0])?.[1];if(!r)continue;let o=qd(n)[0]?.indent;return{event:r,list:o??`${r}${r}`}}return{event:"  ",list:"    "}}function $N(e,t,n,r){let o=xt(e),s=o.split(`
`);o.endsWith(`
`)&&s.pop();let i=Ho(s,"hooks"),a=i!==null?Ki(s,i)??[]:[],l=a.findIndex(g=>g.subKey===t),c=MN(a),d={subKey:t,body:`${c.event}${t}:
${Gi(c.list,n,r).join(`
`)}
`},u=[...a];l===-1?u.push(d):u[l]=LN(a[l],t,n,r);let p=Vi("hooks",u),m;if(i===null){let g=s.join(`
`).replace(/\s*$/,"");m=g.length===0?p:`${g}

${p}`}else{if(i.nonTrivialInline)return e;let g=s.slice(0,i.headerIndex).join(`
`),h=s.slice(i.endIndex).join(`
`);m=[g,p,h].filter(E=>E.length>0).join(`
`)}return`${m.replace(/\n+$/,"")}
`}function FN(e,t,n){let r=xt(e),o=r.split(`
`);r.endsWith(`
`)&&o.pop();let s=Ho(o,"hooks");if(s===null||s.trivialInline)return e;let i=Ki(o,s)??[],a=i.findIndex(b=>b.subKey===t);if(a===-1)return e;let l=i[a].body.replace(/\n+$/,"").split(`
`),d=qd(l).filter(b=>b.command===n);if(d.length===0)return e;let u=new Set;for(let b of d)for(let x=b.start;x<b.end;x++)u.add(x);let p=l.filter((b,x)=>!u.has(x)),m=p.slice(1).some(b=>!At(b)),g=[...i];m?g[a]={subKey:t,body:`${p.join(`
`)}
`}:g.splice(a,1);let h=Vi("hooks",g),E=o.slice(0,s.headerIndex).join(`
`),S=o.slice(s.endIndex).join(`
`);return`${[E,h,S].filter(b=>b.length>0).join(`
`).replace(/\n+$/,"")}
`}function jN(e,t){let n=e.findIndex(o=>o.subKey===t.subKey);if(n===-1)return[...e,t];let r=[...e];return r[n]=t,r}var En=require("node:fs/promises"),IS=require("node:path");Q();w();var Yi=f("JsonMcpWriter"),Kd="jollimemory",NS="mcpServers";async function PS(e){try{return(await(0,En.stat)(e)).mode&511}catch{return}}async function at(e,t,n=NS){let r,o="";try{let c=await(0,En.readFile)(e,"utf-8");o=c,r=c.trim()===""?{}:JSON.parse(c)}catch(c){if(c.code!=="ENOENT"){Yi.warn("Skipping MCP registration: %s unreadable/invalid (%s)",e,String(c));return}r={}}let s=r[n]??{},i=()=>`${JSON.stringify({...r,[n]:s},null,2)}
`,a=i();s[Kd]=t;let l=i();if(l===o||l===a){Yi.info("MCP server already registered in %s \u2014 no write needed",e);return}await(0,En.mkdir)((0,IS.dirname)(e),{recursive:!0}),await v(e,l,await PS(e)),Yi.info("Registered MCP server in %s",e)}async function lt(e,t=NS){let n;try{n=JSON.parse(await(0,En.readFile)(e,"utf-8"))}catch{return}let r=n[t];r?.[Kd]&&(delete r[Kd],await v(e,`${JSON.stringify(n,null,2)}
`,await PS(e)),Yi.info("Removed MCP server from %s",e))}var zi=f("HostRegistrars"),HN={host:"claude",scope:"repo",register:fS,remove:gS,gitExcludePaths:()=>[mS]};function We(){let e=Z(),t=process.platform==="win32"?Wd(e):void 0;return Bd(process.platform,(0,U.join)(e,"run-cli"),t)}function UN(){let e=We();if(process.platform!=="win32")return e;let t=pS(Z());return t?{command:"node",args:[t]}:e}var BN={host:"cursor",scope:"repo",register:e=>at((0,U.join)(e,".cursor","mcp.json"),{...We()}),remove:e=>lt((0,U.join)(e,".cursor","mcp.json")),gitExcludePaths:()=>["/.cursor/mcp.json"]},WN={host:"gemini",scope:"global",register:()=>at((0,U.join)((0,Ae.homedir)(),".gemini","settings.json"),{...We()}),remove:()=>lt((0,U.join)((0,Ae.homedir)(),".gemini","settings.json")),gitExcludePaths:()=>[]},JN={host:"codex",scope:"global",register:()=>bS((0,U.join)((0,Ae.homedir)(),".codex","config.toml"),UN()),remove:()=>TS((0,U.join)((0,Ae.homedir)(),".codex","config.toml")),gitExcludePaths:()=>[]},GN={host:"opencode",scope:"global",register:()=>{let e=We(),t={type:"local",command:[e.command,...e.args],enabled:!0};return at((0,U.join)((0,Ae.homedir)(),".config","opencode","opencode.json"),t,"mcp")},remove:()=>lt((0,U.join)((0,Ae.homedir)(),".config","opencode","opencode.json"),"mcp"),gitExcludePaths:()=>[]},qN={host:"copilot",scope:"global",register:()=>at((0,U.join)((0,Ae.homedir)(),".copilot","mcp-config.json"),{...We()}),remove:()=>lt((0,U.join)((0,Ae.homedir)(),".copilot","mcp-config.json")),gitExcludePaths:()=>[]},KN={host:"copilotChat",scope:"global",register:()=>{let e=We(),t={type:"stdio",command:e.command,args:e.args};return at((0,U.join)(yt("Code"),"User","mcp.json"),t,"servers")},remove:()=>lt((0,U.join)(yt("Code"),"User","mcp.json"),"servers"),gitExcludePaths:()=>[]},VN={host:"cline",scope:"global",register:async()=>{for(let e of await Sl())await at(Rs(e),{...We()})},remove:async()=>{for(let e of Vr())await lt(Rs(e))},gitExcludePaths:()=>[]},YN={host:"devin",scope:"global",register:()=>at((0,U.join)((0,Ae.homedir)(),".config","devin","config.json"),{...We(),transport:"stdio"}),remove:()=>lt((0,U.join)((0,Ae.homedir)(),".config","devin","config.json")),gitExcludePaths:()=>[]},XN={host:"antigravity",scope:"global",register:()=>at((0,U.join)((0,Ae.homedir)(),".gemini","config","mcp_config.json"),{...We()}),remove:()=>lt((0,U.join)((0,Ae.homedir)(),".gemini","config","mcp_config.json")),gitExcludePaths:()=>[]},zN={host:"kimi",scope:"global",register:()=>at((0,U.join)(Ps(),"mcp.json"),{...We()}),remove:()=>lt((0,U.join)(Ps(),"mcp.json")),gitExcludePaths:()=>[]},Xi="on_session_end";function QN(e){return/[\s"\\]/.test(e)?`"${e.replace(/([\\"])/g,"\\$1")}"`:e}function OS(){return`${QN((0,U.join)(Z(),"run-hook"))} hermes-stop`}var ZN={host:"hermes",scope:"global",register:async()=>{let e=We(),t=["  jollimemory:",`    command: ${JSON.stringify(e.command)}`,`    args: ${JSON.stringify(e.args)}`].join(`
`),n=OS();for(let r of await Nl())try{let o=(0,U.join)(r,"config.yaml");if(await vS(o,"mcp_servers",{subKey:"jollimemory",body:`${t}
`}),process.platform==="win32")continue;await ff((0,U.join)(r,"shell-hooks-allowlist.json"),{event:Xi,command:n,scriptPath:(0,U.join)(Z(),"run-hook"),nowIso:new Date().toISOString().replace(/\.\d{3}Z$/,"Z")}),await xS(o,Xi,n,30)}catch(o){zi.warn("Hermes registration failed for profile home %s: %s",r,String(o))}process.platform==="win32"&&zi.info("Hermes hook registration skipped on win32 \u2014 run-hook is POSIX-only")},remove:async()=>{let e=OS();for(let t of await Nl())try{let n=(0,U.join)(t,"config.yaml");await AS(n,"mcp_servers","jollimemory"),process.platform!=="win32"&&(await CS(n,Xi,e),await gf((0,U.join)(t,"shell-hooks-allowlist.json"),{event:Xi,command:e}))}catch(n){zi.warn("Hermes removal failed for profile home %s: %s",t,String(n))}},gitExcludePaths:()=>[]};function fr(e){let t=[];return e.claude&&t.push(HN),e.cursor&&t.push(BN),e.gemini&&t.push(WN),e.codex&&t.push(JN),e.opencode&&t.push(GN),e.copilot&&t.push(qN),e.copilotChat&&t.push(KN),e.cline&&t.push(VN),e.devin&&t.push(YN),e.antigravity&&t.push(XN),e.kimi&&t.push(zN),e.hermes&&t.push(ZN),t}var eP={claude:!0,codex:!0,cursor:!0,gemini:!0,opencode:!0,copilot:!0,copilotChat:!0,cline:!0,devin:!0,antigravity:!0,kimi:!0,hermes:!0};async function Vd(e,t,n,r){for(let o of e)try{await r(o)}catch(s){zi.warn("MCP %s failed for %s in %s (non-fatal): %s",n,o.host,t,String(s))}}async function Yd(e,t){let n=fr(t).filter(r=>r.scope==="repo");await Vd(n,e,"registration",r=>r.register(e))}async function DS(e){let t=fr(e).filter(n=>n.scope==="global");await Vd(t,"(global)","registration",n=>n.register(""))}async function Xd(e){let t=fr(eP).filter(n=>n.scope==="repo");await Vd(t,e,"removal",n=>n.remove(e))}var ye=require("node:fs/promises"),pe=require("node:path");Q();w();var Uo=`### Shell prerequisite

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
security recipe and the dist resolver and will not produce valid output.`;var xe=f("SkillInstaller"),gr="1.0.5",MS=["jollimemory-recall","jolli-memory-recall"],Bo=[{host:"agents-std",relativeDir:[".agents","skills"],enabled:()=>!0}],Qd=[".claude","skills"],Wo=[{name:"jolli-recall",build:sP},{name:"jolli-search",build:iP},{name:"jolli-local-run",build:aP},{name:"jolli-remote-run",build:lP},{name:"jolli",build:cP}],LG=Wo.map(e=>e.name),$S=["jolli-pr"],FS=Bo.flatMap(e=>Wo.map(t=>`/${e.relativeDir.join("/")}/${t.name}/`)),Qi=["/.claude/skills/jolli/"],jS=[...Bo.map(e=>`/${e.relativeDir.join("/")}/jolli/`),...Qi];async function tP(e,t={}){for(let n of MS)await eu((0,pe.join)(e,".claude","skills",n),"legacy");await Zd(e);for(let n of Bo){if(!n.enabled(t))continue;let r=(0,pe.join)(e,...n.relativeDir);for(let o of Wo)await GS(r,o.name,o.build())}await ea(e),await ar(e,Zi)}async function Zd(e){for(let t of Bo){let n=(0,pe.join)(e,...t.relativeDir);for(let r of $S)await eu((0,pe.join)(n,r),"retired")}}async function eu(e,t){let n=(0,pe.join)(e,"SKILL.md"),r;try{r=await(0,ye.readFile)(n,"utf-8")}catch{return}if(!tu(r)){xe.info("Keeping %s \u2014 no Jolli ownership marker (user-owned)",e);return}try{await(0,ye.rm)(e,{recursive:!0,force:!0}),xe.info("Removed %s Jolli skill at %s",t,e)}catch(o){xe.warn("Failed to remove %s skill at %s: %s",t,e,o.message)}}async function HS(e,t={}){return tP(e,t)}async function US(e){let t=(0,pe.join)(e,...Qd),n=(0,pe.join)(t,"jolli","SKILL.md");try{if(!(await(0,ye.readFile)(n,"utf-8")).includes('vendor: "jolli.ai"')){xe.info("Skipping umbrella write \u2014 existing %s lacks vendor marker (user-owned)",n);return}}catch{}await GS(t,"jolli",dP())}var zd=[".cursor","skills"],BS=Wo.filter(e=>e.name!=="jolli"),Zi=[`/${zd.join("/")}/`,...BS.map(e=>`/${zd.join("/")}/${e.name}/`)];async function ea(e){let t=(0,pe.join)(e,...zd);for(let n of BS){let r=(0,pe.join)(t,n.name),o=!1;try{o=(await(0,ye.lstat)(r)).isSymbolicLink()}catch{continue}if(o){await(0,ye.rm)(r,{recursive:!0,force:!0}),xe.info("Removed cursor mirror symlink at %s",r);continue}await eu(r,"cursor mirror")}}async function WS(e){let t=[...Bo.map(n=>n.relativeDir),Qd];for(let n of t){let r=(0,pe.join)(e,...n,"jolli"),o=(0,pe.join)(r,"SKILL.md"),s;try{s=await(0,ye.readFile)(o,"utf-8")}catch{continue}if(s.includes('vendor: "jolli.ai"'))try{await(0,ye.rm)(r,{recursive:!0,force:!0}),xe.info("Removed Jolli umbrella menu at %s",r)}catch(i){xe.warn("Failed to remove umbrella at %s: %s",r,i.message)}}}var nP=[...Wo.filter(e=>e.name!=="jolli").map(e=>e.name),...$S,...MS];async function JS(e){for(let t of nP){let n=(0,pe.join)(e,...Qd,t),r=(0,pe.join)(n,"SKILL.md"),o;try{o=await(0,ye.readFile)(r,"utf-8")}catch{continue}if(!tu(o)){xe.info("Keeping %s \u2014 no Jolli ownership marker (user-owned)",n);continue}try{await(0,ye.rm)(n,{recursive:!0,force:!0}),xe.info("Removed legacy Jolli skill at %s",n)}catch(s){xe.warn("Failed to remove legacy skill at %s: %s",n,s.message)}}}var rP=/(?:^|\n)[ \t]*revision:\s*(\d+)/,oP=-1;function LS(e){let t=e.match(rP),n=t?Number.parseInt(t[1],10):Number.NaN;return Number.isFinite(n)?n:oP}function tu(e){return e.includes('vendor: "jolli.ai"')||e.includes("jolli-skill-version:")}async function GS(e,t,n){let r=(0,pe.join)(e,t),o=(0,pe.join)(r,"SKILL.md"),s=LS(n);try{let i=await(0,ye.readFile)(o,"utf-8");if(!tu(i)){xe.info("Skipping %s SKILL.md \u2014 no Jolli ownership marker (user-owned)",t);return}if(LS(i)>=s)return}catch{}try{await(0,ye.mkdir)(r,{recursive:!0}),await v(o,n),xe.info("Wrote SKILL.md (revision %d) to %s",s,o)}catch(i){xe.warn("Failed to write %s SKILL.md: %s",t,i.message)}}function qS(e,t){return`${Uo}

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
vector.`}function sP(){return`---
name: jolli-recall
description: Recall prior development context from Jolli for the current branch. Use when the user wants to recall, remember, or resume prior work on a branch.
metadata:
  version: "${gr}"
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

${qS("recall"," --format json")}

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
`}function iP(){return`---
name: jolli-search
description: Search structured commit memories across all branches \u2014 decisions, topics, files. Use when the user wants to find prior decisions, related commits, or how a topic was handled before.
metadata:
  version: "${gr}"
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

${qS("search"," --format json")}

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
`}function aP(){return`---
name: jolli-local-run
description: Run a Jolli workflow locally \u2014 your own agent executes the workflow's recipe (no Jolli LLM budget) and its file writes land in a git-backed Jolli Space via a branch and pull request that space-cli opens on this machine. Use when the user wants to run a Jolli workflow locally.
metadata:
  version: "${gr}"
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

${Uo}

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
`}function lP(){return`---
name: jolli-remote-run
description: Run a Jolli workflow remotely \u2014 the Jolli backend executes the workflow server-side; this recipe triggers the run, monitors it to completion, reports the outcome (failed / cancelled / succeeded) with its article, PR, and workflow links, and offers to open any in your browser. Use when the user wants to run a Jolli workflow remotely (on the Jolli backend).
metadata:
  version: "${gr}"
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

${Uo}

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
`}function cP(){return`---
name: jolli
description: The Jolli action menu \u2014 a single front door that lists the Jolli skills available in this session (recall, search, run a workflow local or remote, workflow history, plus any setup and account skills a Jolli plugin adds) and the Jolli MCP tools, then routes your choice to the right one. Use when the user types /jolli or asks for the Jolli menu.
metadata:
  version: "${gr}"
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

${Uo}

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
`}function dP(){return`---
name: jolli
description: The Jolli front door \u2014 checks how Jolli is set up in this repo, guides first-time setup through /jolli:init when something's missing, reminds you to sign in when memories can't sync yet, and otherwise shows a status snapshot and routes you to the right Jolli skill or MCP tool. Use when the user types /jolli or asks for Jolli / the Jolli menu.
metadata:
  version: "${gr}"
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
`}var M=f("Installer");function pP(e,t){return process.platform==="linux"?e===t:e.toLowerCase()===t.toLowerCase()}async function mP(e){let t=await de(),n=lS(t.globalInstructions);if(n.write){let r=e?.codexDetected??await _l(),o=e?.geminiDetected??await xl();await cS({claude:t.claudeEnabled!==!1,gemini:o&&t.geminiEnabled!==!1,codex:r&&t.codexEnabled!==!1})}else n.remove&&await dS()}async function fP(e,t,n){let r=async()=>{if(!await Sd())return!1;try{await GE()}catch(s){M.warn("Legacy dist-path migration failed (non-fatal): %s",s.message)}if(!await ko(e,t))return!1;try{let s=await JE();s.length>0&&M.info("Pruned stale dist-paths entries: %s",s.join(", "))}catch(s){M.warn("Pruning stale dist-paths failed (non-fatal): %s",s.message)}return!0},o=n?await Fa(r,n):await Fa(r);return o.acquired&&o.value===!0}async function VS(e,t){let n=e??process.cwd(),r=[],o=t?.integrationsOnly===!0,s=t?.repoHooksOnly===!0;if(o&&s)return{success:!1,message:"install: integrationsOnly and repoHooksOnly are mutually exclusive",warnings:r};if(!await Ln(n))return M.info("Skipping Jolli Memory install \u2014 %s is not inside a git work tree",n),{success:!1,message:`Not a git repository \u2014 skipping Jolli Memory install (${n})`,warnings:r};M.info(s?"Installing Jolli Memory repo hooks only (no integrations)":o?"Installing Jolli Memory integrations (no hooks)":"Installing Jolli Memory hooks");let i=null;try{let a=await de(),l=t?.automatic?[n]:await Cr(n),c=t?.automatic?{timeoutMs:200,pollMs:25}:void 0,d=(0,Sn.dirname)((0,KS.fileURLToPath)(__jmImportMetaUrl)),u=t?.source??"cli",p=t?.sourceTag??(u==="vscode-extension"?yd(d):"cli");if(!_o(p))return{success:!1,message:`Refusing to install with an unsafe source tag: ${JSON.stringify(p)}`,warnings:r};let m=qf(p);if(!await fP(p,t?.distDir,c))return{success:!1,message:"Failed to reconcile the shared runtime registry \u2014 cannot install hooks that depend on it",warnings:r};if(!o){if(i=c?await Dr(n,c):await Dr(n),!i)return{success:!1,message:"Another Jolli enable/disable operation is still running; retry shortly",warnings:r};if(t?.respectManualDisable&&await Mt(n))return{success:!0,message:"Repository remains manually disabled",warnings:r,manuallyDisabled:!0};if(!t?.automatic)try{let C=await Kf(p,a);C!==null&&(C.seededTool||C.seededProvider)&&M.info("Plugin init seeded localAgentTool=%s (source %s, seededTool=%s, seededProvider=%s)",C.tool,p,C.seededTool,C.seededProvider),C?.keptTool!==void 0&&M.info("Plugin init kept localAgentTool=%s (source %s drives %s; left alone)",C.keptTool,p,C.tool)}catch(C){r.push(`Could not record the local agent tool for this host: ${C.message}`)}}let g=s?!1:await _l(),h=s?!1:await xl(),E=s?!1:await sf(),S=s?!1:await Xf(),k=s?!1:await Xm(),b=s?!1:await Wm(),x=s?!1:await $m()||await Lm(),P=s?!1:await vl(),$=s?!1:await Ul(),we=s?!1:await Rl(),$e=s?!1:await Fm(),Fe=s?!1:await cf(),It=s?!1:await Tm(),Xt=s?!1:await Jf(),vn=s?!1:await bf(),zt={};for(let C of l){let Cn=await al(C),nT=(0,Sn.join)(Cn,"sessions.json");try{await(0,ta.writeFile)(nT,JSON.stringify({version:1,sessions:{}},null,"	"),{encoding:"utf-8",flag:"wx"})}catch(ut){ut.code!=="EEXIST"&&M.warn("Failed to bootstrap sessions.json in %s: %s",C,ut.message)}if(s){if(await Zd(C),m==="claude"){if(await US(C),await JS(C),await kd(C,[...Qi]),a.claudeEnabled!==!1){let ut=await Kc(C);(C===n||zt.path===void 0)&&(zt=ut)}}else if(m==="cursor"){let ut={claude:!1,codex:!1,cursor:!0,gemini:!1,opencode:!1,copilot:!1,copilotChat:!1,cline:!1,devin:!1,antigravity:!1,kimi:!1,hermes:!1};await Yd(C,ut),await kd(C,fr(ut).flatMap(rT=>rT.gitExcludePaths()))}await ea(C),await ar(C,[...Zi]);continue}await HS(C,{claudeEnabled:a.claudeEnabled});let Cu={claude:a.claudeEnabled!==!1,codex:g,cursor:P,gemini:h,opencode:$,copilot:we,copilotChat:b,cline:$e,devin:Fe,antigravity:It,kimi:Xt,hermes:vn};if(await XE(C,[...FS,...Qi,...fr(Cu).flatMap(ut=>ut.gitExcludePaths())]),await Yd(C,Cu),o||a.claudeEnabled===!1)continue;let Sa=await Kc(C);Sa.warning&&r.push(Sa.warning),(C===n||zt.path===void 0)&&(zt=Sa)}await DS({claude:!1,cursor:!1,codex:g||s&&m==="codex",gemini:h,opencode:$,copilot:we,copilotChat:b,cline:$e,devin:Fe,antigravity:It,kimi:Xt,hermes:vn}),s||await mP({codexDetected:g,geminiDetected:h});let dt={},Nt={},An={},xn={},Ye={};o||(dt=await vd(n),dt.warning&&r.push(dt.warning),Nt=await Ad(n),Nt.warning&&r.push(Nt.warning),An=await xd(n),An.warning&&r.push(An.warning),xn=await Cd(n),xn.warning&&r.push(xn.warning),Ye=await Id(n),Ye.warning&&r.push(Ye.warning)),g&&a.codexEnabled===void 0&&(await ft({codexEnabled:!0}),M.info("Codex detected \u2014 enabled Codex session discovery"));let br;if(h&&a.geminiEnabled!==!1){if(!o)for(let C of l){let Cn=await bd(C);(C===n||br===void 0)&&(br=Cn.path)}a.geminiEnabled===void 0&&(await ft({geminiEnabled:!0}),M.info("Gemini detected \u2014 enabled Gemini session tracking"))}a.openCodeEnabled!==!1&&S&&a.openCodeEnabled===void 0&&(await ft({openCodeEnabled:!0}),M.info("OpenCode detected \u2014 enabled OpenCode session discovery"));let Yo=s?!1:await tf(),Xo=a.cursorEnabled!==!1&&E,Ea=a.cursorEnabled!==!1&&Yo;(Xo||Ea)&&a.cursorEnabled===void 0&&(await ft({cursorEnabled:!0}),M.info("Cursor detected (IDE=%s, CLI=%s) \u2014 enabled session discovery",Xo,Ea));let K=a.copilotEnabled!==!1&&k,zo=a.copilotEnabled!==!1&&b;if((K||zo)&&a.copilotEnabled===void 0&&(await ft({copilotEnabled:!0}),M.info("GitHub Copilot detected (CLI=%s, Chat=%s) \u2014 enabled session discovery",K,zo)),x&&a.clineEnabled===void 0&&(await ft({clineEnabled:!0}),M.info("Cline detected \u2014 enabled Cline session discovery")),!s)for(let C of l)await gP(C);if(t?.source==="vscode-extension")M.info("Skipping v5 migration on vscode-extension source \u2014 Extension.ts owns it with UI");else if(s)M.info("Skipping v5 migration in repo-hooks-only mode \u2014 runs on every session start");else try{let C=await Gy(n);M.info("Schema v5 migration: alreadyDone=%s fresh=%s migrated=%d skipped=%d",C.alreadyDone,C.fresh,C.migrated,C.skipped)}catch(C){M.warn("Schema v5 migration failed (non-fatal): %s",C.message)}if(t?.clearManualDisableOnSuccess&&!o)try{await Ga(n,!1)}catch(C){let Cn=C.message;r.push(`Enabled, but could not clear the manual-disable opt-out (${Cn}). Run enable again to clear it.`),M.warn("Could not clear manual-disable opt-out after enable (non-fatal): %s",Cn)}return M.info("Installation complete"),{success:!0,message:"Jolli Memory hooks installed successfully",warnings:r,claudeSettingsPath:zt.path,gitHookPath:dt.path,postRewriteHookPath:Nt.path,prepareMsgHookPath:An.path,postMergeHookPath:xn.path,prePushHookPath:Ye.path,geminiSettingsPath:br,hermesConfigPath:vn?mf():void 0}}catch(a){let l=`Installation failed: ${a.message}`;return M.error(l),{success:!1,message:l,warnings:r}}finally{i&&await i.release()}}async function gP(e){let t=G(e);try{await(0,ta.stat)(t)}catch{return}let n=Z();if(pP((0,Sn.resolve)(t),(0,Sn.resolve)(n)))return;let r=await tn(t),o={};for(let[c,d]of Object.entries(r))d!==void 0&&(o[c]=d);if(Object.keys(o).length===0)return;let s=await tn(n),i={};for(let[c,d]of Object.entries(o))s[c]===void 0&&(i[c]=d);Object.keys(i).length>0&&await Br(i,n);let a={};for(let c of Object.keys(i))a[c]=void 0;Object.keys(a).length>0&&await Br(a,t);let l=Object.keys(o).filter(c=>!(c in i));for(let c of l)M.warn("Worktree %s field %s not migrated: worktree=%s, global=%s (global value takes effect)",e,c,String(o[c]),String(s[c]));M.info("Migrated %d config fields from worktree %s to global",Object.keys(i).length,e)}async function YS(e,t){let n=e??process.cwd(),r=[],o=t?.integrationsOnly===!0;M.info(o?"Removing Jolli Memory integrations (MCP)":"Removing Jolli Memory hooks");let s=null;try{if(!o&&!t?.repoLockHeld&&(s=await Dr(n),!s))return{success:!1,message:"Another Jolli enable/disable operation is still running; retry shortly",warnings:r};!o&&t?.persistManualDisable&&await Ga(n,!0);let i;try{i=await Cr(n)}catch{i=[n]}if(o){for(let l of i)try{await Xd(l)}catch(c){M.warn("MCP removal failed in %s (non-fatal): %s",l,c.message)}return M.info("Integrations removal complete"),{success:!0,message:"Jolli Memory integrations removed (MCP)",warnings:r}}for(let l of i){let c=await Vc(l);c.warning&&r.push(c.warning),await Td(l);try{await Xd(l)}catch(d){M.warn("MCP removal failed in %s (non-fatal): %s",l,d.message)}t?.preserveMenu||await WS(l),await ea(l),await ar(l,[...Zi])}let a=await Nd(n);return a.warning&&r.push(a.warning),await Pd(n),await Od(n),await Dd(n),await Ld(n),t?.preserveMenu||await ar(n,jS),r.push("The `jolli-*` skill files were left in place. To remove them manually: `rm -rf .agents/skills/jolli-* .claude/skills/jolli-*` and delete the `# >>> jolli skill exclude >>>` block from `.git/info/exclude` if you no longer want it."),M.info("Uninstallation complete"),{success:!0,message:"Jolli Memory hooks removed successfully",warnings:r}}catch(i){let a=`Uninstallation failed: ${i.message}`;return M.error(a),{success:!1,message:a,warnings:r}}finally{s&&await s.release()}}w();function na(){return new Promise((e,t)=>{let n=[];process.stdin.setEncoding("utf-8"),process.stdin.on("data",r=>n.push(r)),process.stdin.on("end",()=>{process.stdin.destroy(),e(n.join(""))}),process.stdin.on("error",t)})}var ma=require("node:fs/promises"),Tb=require("node:path");w();Q();Se();w();Qn();ae();function hr(e){if(!e.startsWith("sk-jol-"))return null;let t=e.slice(7);if(!t.includes("."))return null;for(let n of t.split("."))try{let r=Buffer.from(n,"base64url").toString("utf-8"),o=JSON.parse(r);if(typeof o.t=="string"&&typeof o.u=="string")return{t:o.t,u:o.u,...typeof o.o=="string"?{o:o.o}:{}}}catch{}return null}var hP=["jolli.ai","jolli.dev","jolli.cloud","jolli-local.me"];function ra(e){let t;try{t=new URL(e)}catch{throw new Error(`Rejected Jolli origin (unparseable): ${e}`)}if(!yP(t))throw new Error(`Rejected Jolli origin "${t.origin}". Only https://*.jolli.ai, https://*.jolli.dev, https://*.jolli.cloud, and https://*.jolli-local.me are permitted.`)}function yP(e){let t=e.hostname.toLowerCase();return e.protocol==="https:"&&t!==""&&hP.some(n=>t===n||t.endsWith(`.${n}`))}var J=class extends Error{constructor(t){super(t),this.name="LocalAgentSetupError"}},bn=class extends J{constructor(t){super(t),this.name="LocalAgentModelRefusedError"}},Je=class extends Error{constructor(t){super(t),this.name="LocalAgentAuthError"}},Ct=class extends Error{constructor(t){super(t),this.name="LocalAgentTransientError"}};var wP=new Map;function Tn(e){wP.set(e.id,e)}var wr=require("node:path");var Ge=require("node:fs"),nu=require("node:os"),yr=require("node:path");w();ke();var oa=f("ExecutableResolver"),EP=15*6e4,Jo=null;function SP(e){return e.split(`
`).map(t=>t.trim()).filter(Boolean)}function XS(e){return(e??"0").replace(/^v/i,"").split(".").map(t=>Number.parseInt(t,10)||0)}function bP(e,t){let n=XS(e),r=XS(t);for(let o=0;o<Math.max(n.length,r.length);o++){let s=n[o]??0,i=r[o]??0;if(s!==i)return s>i}return!1}function TP(e){return[yr.posix.join(e,".local/bin"),"/usr/local/bin","/opt/homebrew/bin","/opt/homebrew/sbin",yr.posix.join(e,".npm-global/bin"),"/Applications/ChatGPT.app/Contents/Resources"]}function QS(e,t,n){if(n==="win32")return e;let r=e.split(":").filter(Boolean);return[...new Set([...r,...TP(t)])].join(":")}function _P(e,t,n){let r={...process.env};for(let o of Object.keys(r))o.toLowerCase()==="path"&&delete r[o];return r.PATH=n,Ee(e,[...t],{encoding:"utf8",env:r})}function kP(e,t,n={}){let r=n.home??(0,nu.homedir)(),o=n.basePath??process.env.PATH??"",s=n.exists??Ge.existsSync,i=n.runFinder??_P,a=n.listDir??nb,l=[],c=t==="win32"?"where":"which",d=t==="win32"?[e.binName]:["-a",e.binName],u=QS(o,r,t);try{l.push(...SP(i(c,d,u)))}catch(k){oa.info("%s: `%s %s` found nothing (%s)",e.binName,c,d.join(" "),k.message)}let p=e.knownPaths(r,t).filter(s);l.push(...p);let m=[...new Set(l)];if(t!=="win32")return zS(e,m.length,m,[],p,u,":"),m.map(k=>({file:k}));let g=k=>k.toLowerCase().endsWith(".exe"),h=m.filter(k=>!g(k)),E=h.flatMap(k=>e.expandShim?.(k,{exists:s,listDir:a})??[]),S=eb([...m.filter(g).map(k=>({file:k})),...E]);return zS(e,S.length,S.map(Go),h,p,u,";"),S}var RP=[".exe",".cmd",".bat",".ps1",""];function ZS(e,t){try{return(0,Ge.statSync)(e).isFile()?(t==="win32"||(0,Ge.accessSync)(e,Ge.constants.X_OK),!0):!1}catch{return!1}}function vP(e,t,n={}){let r=n.home??(0,nu.homedir)(),o=n.basePath??process.env.PATH??"",s=n.exists??(d=>ZS(d,t)),i=t==="win32"?yr.win32.join:yr.posix.join,a=QS(o,r,t).split(t==="win32"?";":":"),l=t==="win32"?RP:[""],c=[];for(let d of a)if(d)for(let u of l){let p=i(d,e.binName+u);s(p)&&c.push(p)}return c.push(...e.knownPaths(r,t).filter(s)),[...new Set(c)]}function Le(e,t={}){let n=t.platform??process.platform,r=t.exists??(o=>ZS(o,n));return t.overridePath?tb(e,t.overridePath,n).list.some(o=>r(o.file)):t.candidates?t.candidates().length>0:vP(e,n,t).length>0}function eb(e){let t=new Set;return e.filter(n=>{let r=[n.file,...n.launchArgs??[]].join("\0");return t.has(r)?!1:(t.add(r),!0)})}function tb(e,t,n){let r={list:[{file:t}],expanded:!1};if(n!=="win32"||t.toLowerCase().endsWith(".exe"))return r;let o=eb(e.expandShim?.(t,{exists:Ge.existsSync,listDir:nb})??[]);return o.length?{list:o,expanded:!0}:r}function AP(e,t){return t!=="win32"||e.toLowerCase().endsWith(".exe")?"":" On Windows this must be a real .exe \u2014 a .cmd/.ps1 launcher cannot be run directly."}function Go(e){return e.launchArgs?.length?`${e.file} ${e.launchArgs.join(" ")}`:e.file}function nb(e){try{return(0,Ge.readdirSync)(e)}catch{return[]}}function zS(e,t,n,r,o,s,i){oa.info("%s discovery: %d candidate(s)=[%s]; shims=[%s]; knownPaths present=[%s] (searched %d PATH entries)",e.binName,t,n.join(", ")||"(none)",r.join(", ")||"(none)",o.join(", ")||"(none)",s.split(i).filter(Boolean).length)}function xP(e){let t=e.trim().split(/\s+/).filter(Boolean);return t.find(n=>/^v?\d+\./.test(n))??t[0]}function CP(e,t){try{let n=[...e.launchArgs??[],...t],r=Ee(e.file,n,{encoding:"utf8",timeout:1e4}),o=xP(r);return{ok:!!o,version:o}}catch{return{ok:!1}}}function Me(e,t={}){let n=t.now??Date.now,r=`${e.binName} ${t.overridePath??""}`;if(Jo&&Jo.key===r&&n()-Jo.at<EP)return Jo.result;let o=t.probe??(d=>CP(d,e.probeArgs)),s=t.platform??process.platform,i=t.overridePath?tb(e,t.overridePath,s):null,a=i?.list??(t.candidates??(()=>kP(e,s)))(),l=null,c=[];for(let d of a){let u=o(d);if(!u.ok){c.push(Go(d));continue}(!l||bP(u.version,l.version))&&(l={file:d.file,version:u.version??"0",launchArgs:d.launchArgs})}if(!l){oa.warn("No compatible %s: overridePath=%s; candidates=[%s]; failed probe `%s %s`=[%s]",e.binName,t.overridePath??"(none)",a.map(Go).join(", ")||"(none)",e.binName,e.probeArgs.join(" "),c.join(", ")||"(none)");let d=t.overridePath&&!i?.expanded?AP(t.overridePath,s):"";throw new J(t.overridePath?`Configured local agent path "${t.overridePath}" is not a working ${e.binName} CLI.${d}`:`No compatible ${e.binName} CLI found. Install/upgrade it, or switch the AI provider.`)}return oa.info("Resolved %s executable: %s (v%s)",e.binName,Go(l),l.version),Jo={at:n(),key:r,result:l},l}var rb={binName:"claude",knownPaths:(e,t)=>t==="win32"?[wr.win32.join(e,".local","bin","claude.exe"),wr.win32.join(e,".claude","local","claude.exe")]:[wr.posix.join(e,".local/bin/claude"),wr.posix.join(e,".claude/local/claude")],probeArgs:["--permission-mode","dontAsk","--version"]};function ob(e={}){return Me(rb,e)}function sb(e={}){return Le(rb,e)}w();Q();ue();var mK=f("OptionalFlags");function Er(e,t){let n=[];for(let r of e)t?.has(r.id)||n.push(...r.args);return n}function IP(e,t){let n=t?.trim().toLowerCase()??"",r,o=-1,s=!1;for(let[i,a]of Object.entries(e??{})){let l=(a?.inputTokens??0)+(a?.cacheReadInputTokens??0),c=n!==""&&i.toLowerCase().includes(n);(l>o||l===o&&c&&!s)&&(r=i,o=l,s=c)}return r}var NP=["ANTHROPIC_API_KEY","ANTHROPIC_AUTH_TOKEN","ANTHROPIC_BASE_URL","CLAUDE_CODE_OAUTH_TOKEN","CLAUDECODE"],ib=[{id:"--strict-mcp-config",args:["--strict-mcp-config"]},{id:"--disable-slash-commands",args:["--disable-slash-commands"]},{id:"--setting-sources",args:["--setting-sources",""]}],sa=class{constructor(){this.id="claude-code";this.optionalFlags=ib}discoverExecutable(t){return Promise.resolve(ob({overridePath:t}))}isPresent(t){return sb({overridePath:t})}buildInvocation(t,n){let r={...process.env};for(let s of NP)delete r[s];r[_e]="1";let o=Ce();return{file:t.file,args:[...t.launchArgs??[],"-p","--output-format","json",...n.model?["--model",n.model]:[],"--system-prompt",n.systemPrompt,"--tools","","--permission-mode","dontAsk","--no-session-persistence",...Er(ib,n.disabledFlagIds)],stdin:n.prompt,env:r,cwd:o}}parseResult(t,n){let r;try{r=JSON.parse(t)}catch{throw new J(`Could not parse Claude Code output as JSON (first 200 chars): ${t.slice(0,200)}`)}if(r.is_error){let i=r.api_error_status??0,a=r.result??r.subtype??"unknown",l=`Claude Code returned an error (status ${i}): ${a}`;throw i===401||i===403?new Je(l):i===429||i>=500&&i<600?new Ct(l):i===404?new bn(l):/log ?in|logged in|unauthori|authenticat|invalid api key/i.test(a)?new Je(l):new J(l)}let o=r.usage??{},s=IP(r.modelUsage,n);return{text:r.result??"",inputTokens:o.input_tokens??0,outputTokens:o.output_tokens??0,cachedTokens:(o.cache_read_input_tokens??0)+(o.cache_creation_input_tokens??0),costUsd:r.total_cost_usd??0,stopReason:r.stop_reason??null,...s!==void 0&&{model:s}}}};var aa=require("node:path");var PP=300;function OP(e){let t=e.trim();if(!t.startsWith("{"))return null;try{let n=JSON.parse(t);return typeof n?.status=="number"?n:null}catch{return null}}function ab(e,t){let n=e.slice(0,PP),r=OP(e);if(r){let o=r.status,s=r.error?.message??"",i=!!t&&s.includes(`'${t}'`);if(o===401)return new Je(`Codex auth error: ${n}`);if(o===429||o>=500&&o<600)return new Ct(`Codex run failed: ${n}`);if(o>=400&&o<500&&i)return new bn(`Codex refused the model '${t}': ${n}`);if(o===403)return new Je(`Codex auth error: ${n}`)}return/log ?in|logged in|unauthori|authenticat/i.test(n)?new Je(`Codex auth error: ${n}`):new Ct(`Codex run failed: ${n}`)}var lb={binName:"codex",knownPaths:(e,t)=>t==="win32"?[aa.win32.join(e,".local","bin","codex.exe")]:[aa.posix.join(e,".local/bin/codex")],probeArgs:["--version"]},cb=[{id:"--disable",args:["--disable","plugins"],matches:["--disable","Unknown feature flag: plugins"]}],ia=class{constructor(){this.id="codex";this.optionalFlags=cb}discoverExecutable(t){return Promise.resolve(Me(lb,{overridePath:t}))}isPresent(t){return Le(lb,{overridePath:t})}buildInvocation(t,n){let r={...process.env};delete r.OPENAI_API_KEY,delete r.OPENAI_BASE_URL,r[_e]="1";let o=Ce(),s=n.systemPrompt?`${n.systemPrompt}

${n.prompt}`:n.prompt,i=[...t.launchArgs??[],"exec","--json","--skip-git-repo-check","-s","read-only","-C",o,...Er(cb,n.disabledFlagIds),...n.model?["-m",n.model]:[],s];return{file:t.file,args:i,stdin:"",env:r,cwd:o}}parseResult(t,n){let r="",o=0,s=0,i=0,a=!1,l;for(let c of t.split(`
`)){let d=c.trim();if(!d)continue;let u;try{u=JSON.parse(d)}catch{continue}a=!0;let p=u.type??"";if(p==="turn.failed")throw ab(u.message??u.error?.message??d,n);if(/error/i.test(p)){l??=u.message??u.error?.message??d;continue}if(p==="item.completed"&&u.item?.type==="agent_message"){let m=u.item.text;m&&(r=m)}p==="turn.completed"&&u.usage&&(o=u.usage.input_tokens??o,s=u.usage.output_tokens??s,i=u.usage.cached_input_tokens??i)}if(!a)throw new J(`Codex produced no JSONL events (first 200 chars): ${t.slice(0,200)}`);if(l!==void 0&&r.trim()==="")throw ab(l,n);return{text:r,inputTokens:o,outputTokens:s,cachedTokens:i,costUsd:0,stopReason:null}}};var ct=require("node:path");function DP(e,t){let n=ct.win32.join(ct.win32.dirname(e),"versions");return[...t.listDir(n)].sort().reverse().flatMap(o=>{let s=ct.win32.join(n,o,"node.exe"),i=ct.win32.join(n,o,"index.js");return!t.exists(s)||!t.exists(i)?[]:[{file:s,launchArgs:["--use-system-ca",i]},{file:s,launchArgs:[i]}]})}function LP(e,t=process.env){return t.LOCALAPPDATA||ct.win32.join(e,"AppData","Local")}function MP(e,t,n){return t!=="win32"?[ct.posix.join(e,".local/bin/cursor-agent")]:[ct.win32.join(LP(e,n),"cursor-agent","cursor-agent.cmd"),ct.win32.join(e,".local","bin","cursor-agent.exe")]}var db={binName:"cursor-agent",knownPaths:MP,probeArgs:["--version"],expandShim:DP},la=class{constructor(){this.id="cursor-agent"}discoverExecutable(t){return Promise.resolve(Me(db,{overridePath:t}))}isPresent(t){return Le(db,{overridePath:t})}buildInvocation(t,n){let r={...process.env};delete r.CURSOR_API_KEY,r[_e]="1";let o=Ce(),s=n.systemPrompt?`${n.systemPrompt}

${n.prompt}`:n.prompt,i=[...t.launchArgs??[],"-p","--output-format","json","--trust",...n.model?["--model",n.model]:[],s];return{file:t.file,args:i,stdin:"",env:r,cwd:o}}parseResult(t){let n;try{n=JSON.parse(t)}catch{throw new J(`Could not parse Cursor output as JSON (first 200 chars): ${t.slice(0,200)}`)}if(n.is_error){let o=n.result??n.subtype??"unknown",s=`Cursor returned an error: ${o}`;throw/log ?in|logged in|unauthori|authenticat|not_logged_in/i.test(o)||/auth/i.test(n.subtype??"")?new Je(s):new J(s)}let r=n.usage??{};return{text:n.result??"",inputTokens:r.inputTokens??0,outputTokens:r.outputTokens??0,cachedTokens:(r.cacheReadTokens??0)+(r.cacheWriteTokens??0),costUsd:0,stopReason:n.subtype??null}}};var mb=require("node:fs"),Yt=require("node:path");w();var $P=f("HermesBackend"),ub="usage.json";function FP(e){return e==="win32"?24e3:e==="darwin"?512*1024:12e4}function jP(e,t){return t!=="win32"?[Yt.posix.join(e,".local/bin/hermes")]:[Yt.win32.join(e,".hermes","bin","hermes.exe"),Yt.win32.join(e,".local","bin","hermes.exe")]}var pb={binName:"hermes",knownPaths:jP,probeArgs:["--version"]},HP=[{id:"--ignore-rules",args:["--ignore-rules"]}];function qo(e){let t=typeof e=="number"?e:typeof e=="string"&&e.trim().length>0?Number(e):Number.NaN;return Number.isFinite(t)&&t>=0?t:0}var ca=class{constructor(){this.id="hermes";this.optionalFlags=HP}discoverExecutable(t){return Promise.resolve(Me(pb,{overridePath:t}))}isPresent(t){return Le(pb,{overridePath:t})}buildInvocation(t,n){let r={...process.env};r[_e]="1";let o=n.systemPrompt?`${n.systemPrompt}

${n.prompt}`:n.prompt,s=FP(process.platform),i=Buffer.byteLength(o,"utf8");if(i>s)throw new J(`Hermes prompt is ${i} UTF-8 bytes, above this platform's ${s}-byte argv budget. Hermes exposes no lossless prompt-file channel, so refusing to generate a partial summary.`);let a=Ce(),l=[...t.launchArgs??[],...n.model?["--model",n.model]:[],...n.disabledFlagIds?.has("--ignore-rules")?[]:["--ignore-rules"],"--usage-file",(0,Yt.join)(a,ub),"-z",o];return{file:t.file,args:l,stdin:"",env:r,cwd:a}}parseResult(t,n,r){let o=r===void 0?void 0:UP((0,Yt.join)(r,ub));if(o===void 0)throw new J("Hermes did not produce a valid usage report; refusing unverified stdout that may describe a failed run.");let s=t.trim(),i=typeof o.failure=="string"&&o.failure.trim().length>0?o.failure:void 0;if(o.failed===!0||i!==void 0){let a=i??"no reason reported";throw new Error(`Hermes reported a failed run: ${a}`)}if(o.failed!==void 0&&o.failed!==!1)throw new J("Hermes usage report contained a non-boolean failure status; refusing unverified stdout.");if(!s)throw new J(`Hermes produced no output (first 200 chars of stdout): ${t.slice(0,200)}`);return{text:s,inputTokens:qo(o.input_tokens),outputTokens:qo(o.output_tokens),cachedTokens:qo(o.cache_read_tokens)+qo(o.cache_write_tokens),costUsd:qo(o.estimated_cost_usd),stopReason:null,...typeof o.model=="string"&&o.model?{model:o.model}:{}}}};function UP(e){let t;try{t=(0,mb.readFileSync)(e,"utf-8")}catch{return}try{let n=JSON.parse(t);return typeof n=="object"&&n!==null&&!Array.isArray(n)?n:void 0}catch{$P.debug("Hermes usage report at %s is not valid JSON \u2014 treating the run as unverifiable",e);return}}var gb=require("node:fs"),_n=require("node:path");Ya();var BP=24e3,WP=1e6,JP="jolli-context.md",GP=["---","name: jolli-task","description: Full task context for this run; follow the instructions it contains.","---"].join(`
`),qP="Follow the instructions in your agent definition and output only what they ask for \u2014 no preamble, no commentary.";function KP(e,t){return t!=="win32"?[_n.posix.join(e,".local/bin/kimi")]:[_n.win32.join(e,".kimi-code","bin","kimi.exe"),_n.win32.join(e,".local","bin","kimi.exe")]}var fb={binName:"kimi",knownPaths:KP,probeArgs:["--version"]},da=class{constructor(){this.id="kimi"}discoverExecutable(t){return Promise.resolve(Me(fb,{overridePath:t}))}isPresent(t){return Le(fb,{overridePath:t})}buildInvocation(t,n){let r={...process.env};delete r.MOONSHOT_API_KEY,delete r.MOONSHOT_BASE_URL,r[_e]="1";let o=Ce(),s=n.systemPrompt?`${n.systemPrompt}

${n.prompt}`:n.prompt,i=[...t.launchArgs??[],...n.model?["--model",n.model]:[],"--output-format","stream-json"];if(s.length<=BP)return{file:t.file,args:[...i,"--prompt",s],stdin:"",env:r,cwd:o};let a=(0,_n.join)(o,JP);(0,gb.writeFileSync)(a,`${GP}
${Va(s,WP)}`,"utf-8");let l=[...i,"--agent-file",a,"--prompt",qP];return{file:t.file,args:l,stdin:"",env:r,cwd:o}}parseResult(t){let n="";for(let r of t.split(`
`)){let o=r.trim();if(!o)continue;let s;try{s=JSON.parse(o)}catch{continue}s.role==="assistant"&&typeof s.content=="string"&&s.content&&(n=s.content)}if(!n)throw new J(`Kimi produced no assistant output (first 200 chars): ${t.slice(0,200)}`);return{text:n,inputTokens:0,outputTokens:0,cachedTokens:0,costUsd:0,stopReason:null}}};var kn=require("node:path");function VP(e,t){let n=kn.win32.dirname(e),r=kn.win32.join(n,"node_modules","opencode-ai","bin","opencode.exe");return t.exists(r)?[{file:r}]:[]}var hb={binName:"opencode",knownPaths:(e,t)=>t==="win32"?[kn.win32.join(e,".opencode","bin","opencode.exe"),kn.win32.join(e,".local","bin","opencode.exe")]:[kn.posix.join(e,".local/bin/opencode")],probeArgs:["--version"],expandShim:VP},yb=[{id:"--pure",args:["--pure"]}],ua=class{constructor(){this.id="opencode";this.optionalFlags=yb;this.unnamedFlagFailures=!0}discoverExecutable(t){return Promise.resolve(Me(hb,{overridePath:t}))}isPresent(t){return Le(hb,{overridePath:t})}buildInvocation(t,n){let r={...process.env};r[_e]="1",r.OPENCODE_DISABLE_CLAUDE_CODE="1";let o=Ce(),s=n.systemPrompt?`${n.systemPrompt}

${n.prompt}`:n.prompt,i=[...t.launchArgs??[],"run",...Er(yb,n.disabledFlagIds),...n.model?["--model",n.model]:[],s];return{file:t.file,args:i,stdin:"",env:r,cwd:o}}parseResult(t){let n=t.trim();if(!n)throw new J("OpenCode produced no output.");return{text:n,inputTokens:0,outputTokens:0,cachedTokens:0,costUsd:0,stopReason:null}}};Tn(new sa);Tn(new la);Tn(new ia);Tn(new ua);Tn(new da);Tn(new ca);w();ke();var e2=f("LocalAgentRunner"),t2=15*6e4;Ys();var ru=`  - Subject and tense: third person, past tense, with a concrete subject. Use "The developer added...", "This commit (or batch of commits) introduced...", "The login page now ...", or "Users can now ...". FORBIDDEN subjects: "the tool", "the LLM", "the system", "the model", "the AI" -- never anthropomorphize the generator. Never "I" or "we".
  - Describe WHAT changed and what users can now do differently. Do NOT explain WHY technical choices were made -- that belongs in the decisions field. If a sentence connects clauses with any of the words below, it is almost certainly explaining WHY/HOW or contrasting an alternative -- rewrite to state only the outcome, even if the sentence becomes shorter:
      * Causal: "so", "because", "since" (when meaning "because"), "which means", "which forced", "in order to"
      * Contrastive: "rather than", "instead of", "as opposed to", "unlike before", "unlike previously"
    Note: words like "without" and "until" are NOT forbidden. They are fine when they describe a neutral spatial / contextual fact ("without leaving the page", "until the result satisfies the user"). They become a problem only when they implicitly criticise an old path ("...there was no way to fix it without re-running the entire flow from scratch") -- which is already covered by the broader rule "do not describe before-vs-after in the recap".
  - No code identifiers: no file paths, no function/class/variable names, no CLI flags, no inline code. Also forbidden: any internal field name or section label from this prompt or the data model (e.g. "decisions field", "topic count", "importance label", "recap block", "word ceiling", "trailing mention"). Also forbidden: references to how the generator works internally ("before labeling", "after parsing", "the tool decides", "marked as major"). The test: a colleague who uses the product but has never seen this codebase or this prompt should understand every sentence.
  - User-facing names ARE allowed and encouraged: product names, page names ("the login page"), feature names ("article reordering"), and widely-recognized UI element names ("the sidebar", "the Settings panel").
  - Meta-commits (changes to internal rules, prompts, configuration, or generation behavior the user does not directly interact with): describe the user-VISIBLE consequence -- what the user will see in future output or product behavior -- NOT the internal rule that changed. Translate mechanism statements like "the recap is now generated after the topic list" into user-facing outcomes like "future commit summaries will read more clearly: each recap covers fewer topics in greater depth". If you cannot identify a visible consequence for the user, this change may not warrant a recap at all.
  - Paragraph balance: when the recap has multiple paragraphs, each paragraph MUST contain at least 2 sentences. Single-sentence paragraphs alongside longer ones produce a fragmented finish -- expand the short one with concrete detail, or merge it into an adjacent paragraph. (A whole-recap-of-one-sentence is still fine for trivial single-change commits.)
  - Self-check (mandatory): before finalizing your output, mentally scan each sentence of your draft recap for the forbidden connectives listed above. For every match, rewrite that sentence to state only the visible outcome and drop the comparison/causation clause entirely. The lost information either belongs in the decisions field or should not be in the recap at all. If you have not done this scan, your output is not ready.`,ou=`  Recap anti-patterns (do NOT write like this):
  - BAD: "The way the tool selects topics was overhauled, so it can look back at what was already marked as major rather than guessing ahead."
    Why bad: subject "the tool" anthropomorphizes the generator; "so" + "rather than" are causal connectives explaining WHY/HOW; "marked as major" is implementation-level vocabulary.
  - BAD: "The recap block was moved after the topics, which means the LLM no longer needs to anticipate the importance label."
    Why bad: "the LLM" forbidden subject; "the recap block" / "importance label" are internal field names; "which means" explains mechanism.
  - GOOD: "Future commit summaries will be easier to read: each recap now focuses on the two or three most impactful changes and explains them in real depth. Single-line summaries of every topic are gone. Routine cleanup work no longer appears in the recap at all."
    Why good: subject is the user-visible artefact ("future commit summaries"); describes WHAT the user will see; no internal vocabulary; no forbidden causal/contrastive connectives.`,wb=`**Output format requirements (READ FIRST -- the rest of this prompt depends on these being followed):**

Your response MUST be a delimited plain-text document with the following shape:

\`\`\`
===SUMMARY===
[optional ---TICKETID--- block]
[zero or more ===TOPIC=== blocks]
[optional ---RECAP--- block, AFTER all topics]
\`\`\``;function Eb(e,t){return`===TOPIC===
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
major`}function su(e){let t=e.majorQualifier?" major":"",n=e.preserveNote?" -- the topics list preserves them":"";return`  - Pick the ${e.topicRange} highest-impact${t} topics to cover; skip the rest${n}. Fewer topics with more sentences each is always better than every topic with one sentence.
  - For each chosen topic, write 2-4 sentences. Target ${e.wordTarget} words total. No hard upper limit -- let the substance drive length.`}var YP=`You are Jolli Memory, an AI development process documentation tool. Your job is to analyze a development session (human-AI conversation + code changes) and produce a structured summary.

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

${wb}

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

${Eb("What was implemented or fixed -- this is a detail field, so technical precision is welcome. Name files, functions, and systems changed. ALWAYS use a bulleted list (- item) when there are 2+ distinct points. Use 2-4 sentences per point -- enough to specify what changed, not pad. A single sentence is fine for trivial single-point changes. Maximum 3 points. If the commit has more than 3 substantive changes, pick the 3 with highest impact (architectural changes, user-visible behavior changes, changes to load-bearing systems) -- do NOT merge unrelated changes into one point just to fit more in. Lower-impact changes you don't pick simply don't appear; that's the intended trade-off.","Why THIS approach was chosen over alternatives. ALWAYS use a bulleted list (- **Bold label**: explanation) when there are 2+ decisions -- each bullet is one decision with its rationale. When there is exactly one decision, write it as plain prose -- no bullet, no bold label. One decision is fine; one bullet is a formatting error. Prioritize insights from the conversation: alternatives considered, constraints, trade-offs. Explain in plain language using impact dimensions (speed, safety, complexity, UX, maintainability) -- no code identifiers. Write so a teammate unfamiliar with this codebase area can follow. Use 2-4 sentences per bullet -- enough to explain the trade-off, not pad. Maximum 3 bullets. If the commit has more than 3 substantive decisions, pick the 3 with highest impact (architectural choices, user-visible behavior changes, decisions that constrain future work) -- do NOT merge unrelated decisions into one bullet just to fit more in. Lower-impact decisions you don't pick simply don't appear; that's the intended trade-off.")}

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
${su({topicRange:"2-3",majorQualifier:!0,preserveNote:!0,wordTarget:"150-300"})}
${ru}
  - The recap describes ONLY \`importance: major\` topics. \`importance: minor\` topics (routine formatting, config tweaks, version bumps, doc-only changes) MUST NOT be mentioned in the recap, not even briefly -- they are preserved as standalone topics for audit; the recap is the major-work narrative only.
  - Lead with what changed most visibly or impactfully; weave related points into flowing paragraphs. Do NOT write one sentence per topic -- that produces a fragmented list, not a narrative.
  - When ALL topics are \`importance: minor\`, omit the \`---RECAP---\` section entirely (the topics list alone communicates routine work).
  - Because the recap is emitted AFTER all topics, you can verify your major/minor selection by literal lookback: scan your own preceding output for each topic's \`---IMPORTANCE---\` line and include only the \`major\` ones.
  - Flowing prose only. NO bullet lists, NO headings, NO markdown inside the recap.
  - Do NOT restate the commit message verbatim. Add information a reader cannot get from the commit message alone.
  - If the commit is a single tiny change (e.g. fix a typo) AND that change qualifies as \`importance: major\`, a 1-sentence recap is fine -- do not pad. If the only topic is \`importance: minor\`, omit the recap.

${ou}

## Begin response now

Output ONLY the delimited text starting with the \`===SUMMARY===\` sentinel. Do NOT preface it with markdown headers, markdown tables, code fences, or prose. If you have nothing substantive to emit (per rule 16), output \`===SUMMARY===\` alone on its own line and stop.`;var r2=`You are Jolli Memory, an AI development process documentation tool. Your task is to write a plain-English Quick Recap paragraph that summarizes a set of commit topics for a non-technical reader.

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

${su({topicRange:"2-3",majorQualifier:!1,preserveNote:!1,wordTarget:"150-300"})}
${ru}
  - Lead with what changed most visibly or impactfully; weave related points into flowing paragraphs. Do NOT write one sentence per topic -- that produces a fragmented list, not a narrative. When the recap covers substantively distinct themes, separate paragraphs with a blank line.
  - Flowing prose only. NO bullet lists, NO headings, NO markdown inside the recap.
  - Do NOT restate the commit message verbatim. Add information a reader cannot get from the commit message alone.
  - NEVER use the literal string \`---RECAP---\` inside your content. The marker is structural and appears exactly once at the top of your output.

${ou}

## Begin response now

Output ONLY the \`---RECAP---\` marker followed by the recap text. No prose before or after.`;var XP=`You are Jolli Memory, an AI development process documentation tool. Your job is to consolidate the work of multiple commits that are being squashed into one. You produce TWO outputs in a single call:
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

${wb}

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

${Eb("What was implemented or fixed. This is a detail field, so technical precision is welcome. Name files, functions, and systems changed. ALWAYS use a bulleted list (- item) when there are 2+ distinct points. Use 2-4 sentences per point -- enough to specify what changed, not pad. A single sentence is fine for trivial single-point changes. Cap and selection are governed by rule 6's bullet-count guidance (squash-consolidate raises the per-topic cap to 5 vs the summarize prompt's 3, since consolidation aggregates work from multiple commits).","Why THIS approach was chosen over alternatives. ALWAYS use a bulleted list (- **Bold label**: explanation) when there are 2+ decisions -- each bullet is one decision with its rationale. Prioritize insights carried over from the source topics: alternatives considered, constraints, trade-offs. Explain in plain language using impact dimensions (speed, safety, complexity, UX, maintainability) -- no code identifiers. Use 2-4 sentences per bullet -- enough to explain the trade-off, not pad. Cap and selection are governed by rule 6's bullet-count guidance (max 5 per topic; pick the highest-impact decisions when consolidating yields more).")}

===TOPIC===
[Repeat the full ===TOPIC=== block above for each independent or merged topic the consolidation produces. Squashes spanning diverse work commonly emit 5-15 topics -- see rule 11 for sizing. The example shows ONE block for brevity; do not let that anchor your output to a single topic.]

---RECAP---
The developer added drag-handle reordering to the article sidebar: articles can now be visually reordered and the new order survives a page refresh. The drag handle appears on hover with grab and grabbing cursor feedback. Ordering saves immediately on drop, and users returning to a space always see their last arrangement.

A new confirmation step was added before destructive actions in the settings panel. Clicking "Delete Space" or "Archive" now presents a confirmation dialog. Accidental data loss is much less likely, and both actions share the same pattern across the panel.

## Rules

1. RECAP: Output a ---RECAP--- section AFTER the final ===TOPIC=== block when at least one consolidated topic carries \`importance: major\`. Omit the section entirely otherwise -- do NOT invent content, and do NOT write a recap when every consolidated topic is \`importance: minor\`. Content rules:
${su({topicRange:"3-5",majorQualifier:!0,preserveNote:!0,wordTarget:"200-400"})}
${ru}
  - The consolidated recap describes ONLY \`importance: major\` topics. \`importance: minor\` topics (routine formatting, config tweaks, version bumps, doc-only changes) MUST NOT be mentioned in the recap, not even briefly -- they survive in the topics list; the recap is reserved for major-work narrative.
  - Lead with what changed most visibly or impactfully; weave related points into flowing paragraphs. Do NOT write one sentence per topic -- that produces a fragmented list, not a narrative.
  - When ALL post-merge topics are \`importance: minor\`, omit the \`---RECAP---\` section entirely (the topics list alone communicates routine work).
  - Because the recap is emitted AFTER all topics, you can verify your major/minor selection by literal lookback: scan your own preceding output for each topic's \`---IMPORTANCE---\` line and include only the \`major\` ones. Do NOT copy verbatim from any single source recap; the consolidated recap MUST be a fresh synthesis driven by the \`major\` topics you just emitted, not by which input recap looked most comprehensive.
  - Deduplicate iterations: describe the FINAL state only, not the iteration history. If an earlier recap says a button was added and a later recap says it was renamed with a confirmation dialog, the consolidated recap describes the button in its final form.
  - When source iteration represents a substantive technical evolution (algorithm change, library swap, scope pivot), do NOT describe the path here -- that belongs in DECISIONS per rule 6's evolution sub-rule. RECAP is for final-state user-facing prose; the X-over-Y trade-off path lives in the structured decisions field.
  - Describe net effects (subject to rule 4's evidence requirement).
  - Flowing prose only. NO bullet lists, NO headings, NO markdown.
  - Do NOT restate the squash commit message verbatim. Add information a reader cannot get from the commit message alone.

${ou}

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

Output ONLY the delimited text starting with the \`===SUMMARY===\` sentinel. Do NOT preface it with markdown headers, markdown tables, code fences, or prose. If every source topic is trivial and there is nothing substantive to emit (per rule 15), output \`===SUMMARY===\` alone on its own line and stop.`,Sb="IMPORTANT -- YOUR PREVIOUS RESPONSE FAILED FORMAT VALIDATION\n\nYour previous response did not start with the required `===SUMMARY===` sentinel followed by the `===TOPIC===` / `---FIELDNAME---` delimited plain-text format. It used markdown headers (e.g. `##`, `###`), tables, or prose instead. The parser could not extract any topics from it.\n\nThis is your previous (rejected) response, between the markers below. The markers themselves are bookkeeping for this retry message and are NOT part of the format you should emit:\n\nPREVIOUS_RESPONSE_BEGIN\n{{previousResponse}}\nPREVIOUS_RESPONSE_END\n\nNow produce the SAME summary AGAIN, this time using the required output format strictly:\n  - The first non-blank line of your response MUST be `===SUMMARY===`.\n  - Do NOT use markdown headers (`#`, `##`, `###`, `####`), markdown tables, code fences (```), or prose introductions.\n  - Block order is fixed: `---TICKETID---` (optional) -> `===TOPIC===` blocks -> `---RECAP---` (optional, AFTER all topics). Recap is the final block, never before topics.\n  - The recap, when emitted, MUST cover only `importance: major` topics; minor topics are omitted from the recap entirely.\n  - If your previous response contained useful content, carry it forward into the correct format -- do NOT discard the work, just re-format it under `===SUMMARY===`.\n  - The transcript or source-commit content shown below may itself be styled in markdown; that is INPUT DATA, not your output template.\n\nThe original task instructions follow. Re-read them and produce your response in the correct delimited format.\n\n---\n\n",o2=Sb+YP,s2=Sb+XP;w();yc();var d2=f("Summarizer");es();var U2=f("LlmClient");var B2=900*1e3;function bb(e){return e.aiProvider==="local-agent"?"local-agent":e.aiProvider==="jolli"?e.jolliApiKey?"jolli-proxy":null:e.aiProvider==="anthropic"?e.apiKey?"anthropic-config":process.env.ANTHROPIC_API_KEY?"anthropic-env":null:e.apiKey?"anthropic-config":process.env.ANTHROPIC_API_KEY?"anthropic-env":e.jolliApiKey?"jolli-proxy":null}Ze();function QP(e){switch(bb(e)){case"local-agent":return"local-agent";case"jolli-proxy":return"jolli";case"anthropic-config":case"anthropic-env":return"anthropic";default:return"none"}}async function ZP(e){let[t,n]=await Promise.all([Promise.resolve().then(()=>(Md(),sS)),Promise.resolve().then(()=>(rt(),Qh))]),[r,o]=await Promise.all([t.isGitPipelineFullyInstalled(e),n.getSummaryCount(e)]);return{enabled:r,summaryCount:o}}async function eO(e){let t=QP(e.config),n=t!=="none";if(!await Ln(e.cwd))return{inGitRepo:!1,repoEnabled:!1,captureConfigured:n,captureMethod:t,memoriesGenerated:!1,memoriesBucket:"0"};let o=e.status??await ZP(e.cwd),s=o.summaryCount??0;return{inGitRepo:!0,repoEnabled:!!o.enabled,captureConfigured:n,captureMethod:t,memoriesGenerated:s>0,memoriesBucket:mg(s)}}var tO="onboarding-progress.json",nO=1440*60*1e3;function rO(e){return[e.inGitRepo,e.repoEnabled,e.captureMethod,e.memoriesGenerated,e.memoriesBucket].join("|")}async function oO(e){try{let t=JSON.parse(await(0,ma.readFile)(e,"utf-8"));if(typeof t?.sig=="string"&&typeof t?.tsIso=="string")return t}catch{}}var pa=new Map;async function _b(e){let t,n;try{if(!pg()?.enabled||V()||qa(e.cwd))return;t=(0,Tb.join)(G(e.cwd),tO);let r=t;n=(pa.get(r)??Promise.resolve()).then(()=>sO(e,r)),pa.set(r,n),await n}catch{}finally{t&&n&&pa.get(t)===n&&pa.delete(t)}}async function sO(e,t){try{let n=await eO(e),r=rO(n),o=await oO(t),s=Date.now(),i=!o||o.sig!==r,a=o?s-Date.parse(o.tsIso):Number.POSITIVE_INFINITY,l=!Number.isFinite(a)||a>=nO;if(!i&&!l)return;Qr("onboarding_progressed",{in_git_repo:n.inGitRepo,repo_enabled:n.repoEnabled,capture_configured:n.captureConfigured,capture_method:n.captureMethod,memories_generated:n.memoriesGenerated,memories_bucket:n.memoriesBucket});let c=G(e.cwd);await(0,ma.mkdir)(c,{recursive:!0}),await v(t,JSON.stringify({sig:r,tsIso:new Date(s).toISOString()}))}catch{}}ue();ue();var iO="https://auth.jolli.ai";function iu(){let e=(process.env.JOLLI_URL?.trim()||iO).replace(/\/+$/,"");return ra(e),e}ue();Qn();var aO="/api/telemetry/events",lO=1e4,cO=100;async function kb(e){let t=e.fetchImpl??fetch,n=e.timeoutMs??lO,r=Math.max(1,e.maxBatch??cO),o=e.origin,s;if(e.jolliApiKey){let g=hr(e.jolliApiKey);g&&(o=g.u,s=e.jolliApiKey)}let i=await Vl(e.cwd);if(i.length===0)return{sent:0,remaining:0};if(!o)return{sent:0,remaining:i.length};try{ra(o)}catch{return{sent:0,remaining:i.length}}let a;try{a=new URL(aO,o).toString()}catch{return{sent:0,remaining:i.length}}let l=new Map;for(let g of i){let h=l.get(g.installId);h?h.push(g):l.set(g.installId,[g])}let c=e.deadlineMs===void 0?void 0:performance.now()+e.deadlineMs,d=!1,u=[];for(let g of l.values()){if(d)break;for(let h=0;h<g.length;h+=r){let E=g.slice(h,h+r),S=n;if(c!==void 0){let k=c-performance.now();if(k<=0){d=!0;break}S=Math.min(n,k)}if(!await uO(a,E,s,t,S))break;u.push(...E)}}if(u.length===0)return{sent:0,remaining:i.length};let p=await Vl(e.cwd),m=dO(p,u);return await ig(e.cwd,m),{sent:u.length,remaining:m.length}}function dO(e,t){let n=new Map;for(let o of t){let s=JSON.stringify(o);n.set(s,(n.get(s)??0)+1)}let r=[];for(let o of e){let s=JSON.stringify(o),i=n.get(s)??0;i>0?n.set(s,i-1):r.push(o)}return r}async function uO(e,t,n,r,o){let s={"Content-Type":"application/json","x-jolli-client":jt};n&&(s.Authorization=`Bearer ${n}`);let i=new AbortController,a=setTimeout(()=>i.abort(),o);try{return(await r(e,{method:"POST",headers:s,body:JSON.stringify({events:t}),signal:i.signal})).ok}catch{return!1}finally{clearTimeout(a)}}function Rb(e,t){if(e.jolliApiKey){let n=hr(e.jolliApiKey);if(n)return n.u}if(e.jolliUrl)return e.jolliUrl;try{return t()}catch{return}}async function vb(e){let t=e.deps?.loadConfig??de,n=e.deps?.getOrCreateInstallId??ym,r=e.deps?.getJolliUrl??iu;try{let o=await t(),{installId:s,created:i}=await n(),a=Rb(o,r);ug({cwd:e.cwd,installId:s,sessionId:e.sessionId,agent:e.agent??(e.inferAgentFromEnv?ng(e.env):void 0),origin:a,config:o,platformDisabled:e.platformDisabled,env:e.env}),i&&Qr("app_installed")}catch{}}var au=2e3;async function Ab(e,t){let n=t?.loadConfig??de,r=t?.getJolliUrl??iu;try{let o=await n();if(!lg({config:o,env:t?.env,platformDisabled:t?.platformDisabled})){await ag(e);return}let s=Rb(o,r);await kb({cwd:e,origin:s,jolliApiKey:o.jolliApiKey,fetchImpl:t?.fetchImpl,timeoutMs:t?.timeoutMs,deadlineMs:t?.deadlineMs})}catch{}}function fa(e,t,n){return{done:(async()=>{try{let o=await de(),s=async()=>o;await vb({cwd:e,sessionId:t,agent:n,inferAgentFromEnv:!0,deps:{loadConfig:s}}),await _b({cwd:e,config:o}),await Ab(e,{loadConfig:s,timeoutMs:au,deadlineMs:au})}catch{}})()}}var me=require("node:fs"),Ve=require("node:path"),Jb=require("node:url");Qn();Ar();Se();function xb(e){return e.aiProvider==="local-agent"?!0:e.aiProvider==="jolli"?!!e.jolliApiKey:e.aiProvider==="anthropic"?!!(e.apiKey||process.env.ANTHROPIC_API_KEY):!!(e.apiKey||process.env.ANTHROPIC_API_KEY||e.jolliApiKey)}Ze();ue();di();fc();ao();rt();Wt();w();ke();Ys();function pO(e){return[`1) Re-authenticate ${io(e)}:  ${Ah(e)}`,"2) Or switch the provider:   jolli configure --set aiProvider=anthropic --set apiKey=sk-ant-\u2026","                             (or --set aiProvider=jolli to use Jolli)"]}function mO(e,t){let n=xh(e);return n===null?[]:[`${t}${n}`]}function Cb(e){return[`[Jolli Memory] Memory generation failed for a recent commit: ${io(e)} authentication expired or is unavailable.`,...mO(e,""),"\u2192 Fix with either:",...pO(e).map(t=>`    ${t}`),"This message clears automatically once memory generation succeeds again."].join(`
`)}var Ke=f("SessionStartHook"),NO=new Set(["main","master","develop","development","staging","production"]),ya=500,PO=250;function OO(e=ya+PO){let t=setTimeout(()=>process.exit(0),e);return t.unref(),t}var Gb="login-reminder-dismissed";function DO(e){let t=jl(e,"init");return t===void 0?null:["[Jolli Memory] Memory generation is not configured for this repository.",`\u2192 ${`Run ${t} to finish setup.`}`,`(To stop this reminder, create an empty file at .jolli/jollimemory/${Gb}.)`].join(`
`)}function LO(e,t,n){return t||n?null:DO(e)}async function qb(e,t){let n=Ds(e);if(n===void 0||t.aiProvider!==void 0)return!1;try{let r=await ws(o=>o.aiProvider===void 0?{update:{aiProvider:"local-agent",...o.localAgentTool===void 0?{localAgentTool:n}:{}},result:o.localAgentTool??n}:{update:null,result:void 0});return r===void 0?(Ke.info("Skipped seeding the %s default \u2014 another writer set aiProvider first",e),!1):(Ke.info("Seeded default aiProvider=local-agent tool=%s for the %s surface",r,e),!0)}catch(r){return Ke.info("Failed to seed default local-agent provider: %s",r.message),!1}}async function MO(e,t=Wl()){let n=await de(),r=xb(n),o=(0,Ve.join)(e,".jolli","jollimemory",Gb),s=(0,me.existsSync)(o);if(r&&s)try{(0,me.rmSync)(o)}catch{}return LO(t,r,s)}async function Kb(e,t){return(await vy(t)).readFile(`summaries/${e}.json`)}async function $O(e,t){try{let n=await Kb(e,t);return n?_h(JSON.parse(n)):!1}catch(n){return Ke.info("Failed to check auth-failure state for %s: %s",e.substring(0,8),n.message),!1}}async function FO(e,t=Wl()){let n=Ds(t);if(n===void 0)return null;let r=Xb(e);if(!r)return null;let o=await go(e);if(!o)return null;let s=o.entries.filter(l=>l.branch===r&&(l.parentCommitHash===null||l.parentCommitHash===void 0));if(s.length===0)return null;let i=[...s].sort((l,c)=>new Date(q(c)).getTime()-new Date(q(l)).getTime())[0];if(!await $O(i.commitHash,e))return null;let a=await de();return Cb(a.localAgentTool??n)}async function jO(){if(In()){Ke.info("SessionStart hook skipped \u2014 running inside a jollimemory-spawned local agent");return}try{let e=await na(),{cwd:t}=JSON.parse(e),n=Vu(t??process.cwd());if(ts(n),Ke.info("SessionStartHook invoked (cwd=%s)",n),await Mt(n)){Ke.info("SessionStart hook skipped \u2014 repository manually disabled");return}let r=await Ru(n,"shared",{includeBriefing:!0,includePluginReminders:!1});r?process.stdout.write(r):Ke.info("No briefing or reminder generated (skipped or timed out)");let{triggerEnsureGlobalDaemon:o}=await Promise.resolve().then(()=>(_u(),Tu));o()}catch(e){Ke.info("SessionStartHook failed: %s",e.message)}}async function Ru(e,t,n={}){let r=n.includeBriefing!==!1,o=n.includePluginReminders!==!1,[s,i,a]=await Promise.all([r?Promise.race([HO(e,t),ku(ya)]):Promise.resolve(null),o?Promise.race([FO(e,t),ku(ya)]):Promise.resolve(null),o?Promise.race([MO(e,t),ku(ya)]):Promise.resolve(null)]),l=[i,a,s].filter(c=>!!c);return l.length===0?null:(Ke.info("SessionStart output (%d sections)",l.length),l.join(`

`))}async function HO(e,t){let n=wa(e),r=Xb(e,n);if(!r||NO.has(r))return null;let o=KO(e,r,t,n);if(o)return o;let s=await go(e);if(!s)return null;let i=s.entries.filter(h=>h.branch===r&&(h.parentCommitHash===null||h.parentCommitHash===void 0));if(i.length===0)return null;let a=[...i].sort((h,E)=>new Date(q(E)).getTime()-new Date(q(h)).getTime()),l=a[0],c=a[a.length-1];if(a.length===1&&YO(q(l)))return null;let d=await UO(l.commitHash,e),u=BO(e,r),p=WO(a),m=JO(r,a,l,c,d,u,p,t),g=Yb(e,n);return VO(e,r,g??l.commitHash,m,t),m}async function UO(e,t){try{let n=await Kb(e,t);if(!n)return{lastTopicTitle:null,keyDecisions:[]};let r=JSON.parse(n),o=er(r),s=o.length>0?o[o.length-1].title:null,i=[];for(let a of o)a.decisions&&a.decisions.trim().length>0&&i.push(a.decisions);return{lastTopicTitle:s,keyDecisions:i}}catch(n){return Ke.info("Failed to load last summary: %s",n.message),{lastTopicTitle:null,keyDecisions:[]}}}function BO(e,t){try{let n=(0,Ve.join)(e,".jolli","jollimemory","plans.json");if(!(0,me.existsSync)(n))return[];let r=JSON.parse((0,me.readFileSync)(n,"utf-8")),o=wm(r).registry,s=[];for(let i of Object.values(o.plans))!i.commitHash&&i.title&&s.push(i.title);return s}catch{return[]}}function WO(e){let t=0,n=0,r=0,o=!1;for(let s of e)s.diffStats&&(t+=s.diffStats.filesChanged,n+=s.diffStats.insertions,r+=s.diffStats.deletions,o=!0);return o?{filesChanged:t,insertions:n,deletions:r}:null}function JO(e,t,n,r,o,s,i,a){let l=t.length,c=Wb(q(r)),d=Wb(q(n)),u=XO(q(n),new Date().toISOString()),p=[];p.push(`[Jolli Memory \u2014 ${e}]`);let m=`${l} commits (${c} ~ ${d})`;i&&(m+=` | ${i.filesChanged} files, +${i.insertions} -${i.deletions}`),p.push(m);let g=o.lastTopicTitle??n.commitMessage;if(p.push(`Last: ${g} (${d})`),o.keyDecisions.length>0){let E=qO(o.keyDecisions);p.push(`Decisions: ${E}`)}s.length>0&&p.push(`Plans: ${s.join("; ")}`);let h=GO(u,a);return h&&p.push(h),p.join(`
`)}function GO(e,t){if(e<=0)return null;let n=jl(t,"recall")??"`jolli recall`";return e>3?`Warning: ${e} days since last commit. Run ${n} for full context.`:`Tip: run ${n} for full context`}function qO(e){let n=[],r=0;for(let o of e){let s=o.replace(/[.;]\s*$/,"").trim();if(s.length>200&&(s=`${s.slice(0,199)}\u2026`),r+s.length>200&&n.length>0)break;n.push(s),r+=s.length+2}return n.join("; ")}function Vb(e){return(0,Ve.join)(e,".jolli","jollimemory","briefing-cache.json")}function KO(e,t,n,r=wa(e)){let o=Vb(e);if(!(0,me.existsSync)(o))return null;try{let s=JSON.parse((0,me.readFileSync)(o,"utf-8"));if(s.branch!==t||s.clientKind!==n)return null;let i=Yb(e,r);return!i||s.lastCommitHash!==i?null:s.briefingText}catch{return null}}function VO(e,t,n,r,o){let s=Vb(e),i={branch:t,lastCommitHash:n,briefingText:r,clientKind:o,generatedAt:new Date().toISOString()};try{let a=(0,Ve.dirname)(s);(0,me.existsSync)(a)||(0,me.mkdirSync)(a,{recursive:!0});let l=`${s}.${process.pid}.tmp`;(0,me.writeFileSync)(l,JSON.stringify(i,null,"	"),"utf-8"),(0,me.renameSync)(l,s)}catch{}}function wa(e){return Dt(e)}function Yb(e,t=wa(e)){let n=t?Ju(t):null;if(n)return n;try{return Ee("git",["rev-parse","HEAD"],{encoding:"utf-8",cwd:e}).trim()||null}catch{return null}}function Xb(e,t=wa(e)){let n=t?Wu(t):null;if(n)return n;if(t)return null;try{return Ee("git",["branch","--show-current"],{encoding:"utf-8",cwd:e}).trim()||null}catch{return null}}function ku(e){return new Promise(t=>{setTimeout(()=>t(null),e).unref()})}function YO(e){let t=new Date(e),n=new Date;return t.getFullYear()===n.getFullYear()&&t.getMonth()===n.getMonth()&&t.getDate()===n.getDate()}function XO(e,t){let n=new Date(e).getTime(),r=new Date(t).getTime();return Math.floor(Math.abs(r-n)/(1e3*60*60*24))}function Wb(e){return e?e.split("T")[0]:"unknown"}function zO(){let e=process.argv[1];if(process.env.VITEST||!e||(0,Ve.resolve)(e)!==(0,Ve.resolve)((0,Jb.fileURLToPath)(__jmImportMetaUrl)))return!1;let t=(0,Ve.basename)(e).toLowerCase();return t==="sessionstarthook.js"||t==="sessionstarthook.ts"}zO()&&(OO(),jO());var Ko=f("CodexPluginBootstrapHook"),vu="codex-plugin",zb={timeoutMs:200,pollMs:25};function Zb(e){return e?{hookSpecificOutput:{hookEventName:"SessionStart",additionalContext:e}}:null}async function eT(e){if(!await Ln(e))return null;let t=await Y(["rev-parse","--show-toplevel"],e);if(t.exitCode!==0||!t.stdout.trim())return null;let n=t.stdout.trim();ts(n);let r=!1;if(!(await Ma(n,async()=>{r=await Mt(n),r&&await YS(n,{preserveMenu:!0,repoLockHeld:!0})},zb)).acquired)return Ko.info("Codex plugin bootstrap deferred \u2014 repo hook lifecycle lock is busy"),null;if(r)return null;let s=await VS(n,{repoHooksOnly:!0,sourceTag:vu,respectManualDisable:!0,automatic:!0});if(!s.success)return Ko.warn("Codex plugin repo-hook reconciliation failed: %s",s.message),await fa(n,void 0,"codex").done,null;let i,a=null,l=!1;try{l=!(await Ma(n,async()=>{if(await Mt(n))return;let d=await de();d.codexEnabled!==!1&&(await qb(vu,d),i=fa(n,void 0,"codex"),a=await Ru(n,vu,{includeBriefing:!0,includePluginReminders:!0}))},zb)).acquired}finally{i??=fa(n,void 0,"codex"),await i.done}return l&&Ko.info("Codex plugin context deferred \u2014 repo hook lifecycle lock is busy"),Zb(a)}async function tT(){if(In()){Ko.info("Codex plugin bootstrap skipped \u2014 running inside a jollimemory-spawned local agent");return}try{let e=await na(),t=e.trim()?JSON.parse(e):{},n=await eT(t.cwd??process.cwd());n&&process.stdout.write(JSON.stringify(n));let{triggerEnsureGlobalDaemon:r}=await Promise.resolve().then(()=>(_u(),Tu));r()}catch(e){Ko.info("Codex plugin bootstrap failed: %s",e.message)}}function QO(){let e=process.argv[1];if(process.env.VITEST||!e||(0,Vo.resolve)(e)!==(0,Vo.resolve)((0,Qb.fileURLToPath)(__jmImportMetaUrl)))return!1;let t=(0,Vo.basename)(e).toLowerCase();return t==="codexpluginbootstraphook.js"||t==="codexpluginbootstraphook.ts"}QO()&&tT();0&&(module.exports={buildCodexBootstrapOutput,main,runCodexPluginBootstrap});
