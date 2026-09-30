#!/usr/bin/env node
const __jmImportMetaUrl = require("node:url").pathToFileURL(__filename).href;
"use strict";var cT=Object.create;var Zo=Object.defineProperty;var dT=Object.getOwnPropertyDescriptor;var uT=Object.getOwnPropertyNames;var pT=Object.getPrototypeOf,mT=Object.prototype.hasOwnProperty;var y=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(r){throw n=[r],r}};var A=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}},_r=(e,t)=>{for(var n in t)Zo(e,n,{get:t[n],enumerable:!0})},Ou=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of uT(t))!mT.call(e,o)&&o!==n&&Zo(e,o,{get:()=>t[o],enumerable:!(r=dT(t,o))||r.enumerable});return e};var kr=(e,t,n)=>(n=e!=null?cT(pT(e)):{},Ou(t||!e||!e.__esModule?Zo(n,"default",{value:e,enumerable:!0}):n,e)),fT=e=>Ou(Zo({},"__esModule",{value:!0}),e);function Ta(){return gT.getStore()?.traceId}var $u,dD,gT,ts=y(()=>{"use strict";$u=require("node:async_hooks"),dD="0".repeat(32),gT=new $u.AsyncLocalStorage});function R(e){return e instanceof Error?e.message:String(e)}function Zt(e){return e instanceof Error&&e.code==="ENOENT"}function ns(e){Hu=e}function V(){return Uu}function TT(e,t){let n=ST[t]??ET;return Fu[e]>=Fu[n]}function _T(e,t,n,r,o){let s=new Date().toISOString(),i=e.toUpperCase().padEnd(5),a=n,l=0;a=a.replace(/%[sdj]/g,d=>{if(l>=r.length)return d;let u=r[l++];return d==="%d"?String(Number(u)):d==="%j"?JSON.stringify(u):String(u)});let c=o?` [trace=${o}]`:"";return`[${s}] ${i} [${t}]${c} ${a}`}function G(e){let t=e??Hu??process.cwd();return(0,On.join)(t,hT,yT)}function Rr(e){return String(e).padStart(2,"0")}async function AT(e,t){let n=new Date,r=`${n.getUTCFullYear()}-${Rr(n.getUTCMonth()+1)}-${Rr(n.getUTCDate())}_${Rr(n.getUTCHours())}-${Rr(n.getUTCMinutes())}-${Rr(n.getUTCSeconds())}`;try{let o=(0,On.join)(e,`debug_${r}.log`);for(let s=1;await xT(o);s++)o=(0,On.join)(e,`debug_${r}_${s}.log`);await(0,Ne.rename)(t,o)}catch{return}try{let o=(await(0,Ne.readdir)(e)).filter(s=>vT.test(s)).sort();for(let s=0;s<o.length-RT;s++)await(0,Ne.unlink)((0,On.join)(e,o[s])).catch(()=>{})}catch{}}async function xT(e){try{return await(0,Ne.stat)(e),!0}catch{return!1}}function CT(e){process.env.VITEST||process.env.JOLLI_DISABLE_LOG_FILE||Uu||(ju=ju.then(async()=>{try{let t=G(),n=(0,On.join)(t,wT);await(0,Ne.stat)(t);try{(await(0,Ne.stat)(n)).size>kT&&await AT(t,n)}catch{}await(0,Ne.appendFile)(n,`${e}
`,"utf-8")}catch{}}))}function f(e){function t(n,r,o){let s=_T(n,e,r,o,Ta());bT&&(n==="info"||n==="debug")||(n==="warn"?console.warn(s):console.error(s)),TT(n,e)&&CT(s)}return{debug(n,...r){t("debug",n,r)},info(n,...r){t("info",n,r)},warn(n,...r){t("warn",n,r)},error(n,...r){t("error",n,r)}}}var Ne,On,hT,yT,wT,He,Hu,Uu,Fu,ET,ST,bT,ju,kT,RT,vT,w=y(()=>{"use strict";Ne=require("node:fs/promises"),On=require("node:path");ts();hT=".jolli",yT="jollimemory",wT="debug.log";He="jollimemory/summaries/v3";Uu=!1;Fu={debug:0,info:1,warn:2,error:3},ET="info",ST={},bT=!0;ju=Promise.resolve(),kT=2*1024*1024,RT=10,vT=/^debug_.*\.log$/});function Dn(e,t,n){return(0,Bu.promisify)(mt.execFile)(e,t,{...vr,...n??{}})}function Ee(e,t,n){return(0,mt.execFileSync)(e,t,{...vr,...n??{}})}function Wu(e,t,n){return(0,mt.spawnSync)(e,t,{...vr,...n??{}})}var mt,Bu,vr,ft,ke=y(()=>{"use strict";mt=require("node:child_process"),Bu=require("node:util"),vr={windowsHide:!0};ft=((e,t,n)=>Array.isArray(t)?(0,mt.spawn)(e,t,{...vr,...n??{}}):(0,mt.spawn)(e,{...vr,...t??{}}))});function Ot(e){return Ar(e,process.platform)}function Ar(e,t){let n=Ln(e.replace(/\\/g,"/"));return t==="win32"||t==="darwin"?n.toLowerCase():n}function Ln(e){let t=e.length;for(;t>0&&e[t-1]==="/";)t--;return t===e.length?e:e.slice(0,t)}function _a(e,t){let n=Ot(e),r=Ot(t);return n===r||n.startsWith(`${r}/`)}function Ue(e){return e.replace(/\\/g,"/")}var ae=y(()=>{"use strict"});function PT(e){return NT.some(t=>(e[t]??"")!=="")}function en(e){try{return(0,Mn.readFileSync)(e,"utf-8")}catch{return null}}function ka(e){try{return(0,Mn.realpathSync)(e)}catch{return(0,X.resolve)(e)}}function rs(e){try{return(0,Mn.statSync)(e).isDirectory()}catch{return!1}}function Ju(e,t){let n=en((0,X.join)(e,"HEAD"))?.trim();return!n||!(os.test(n)||OT.test(n))?!1:rs((0,X.join)(t,"objects"))&&rs((0,X.join)(t,"refs"))}function DT(e,t,n){let r=/^gitdir:\s*(.+)$/m.exec(t);if(!r)return null;let o=r[1].trim();if(!o)return null;let s=(0,X.isAbsolute)(o)?o:(0,X.resolve)(e,o);return rs(s)?n?ka(s):s:null}function Gu(e,t){let n=en((0,X.join)(e,"commondir"))?.trim();if(!n)return e;let r=(0,X.isAbsolute)(n)?n:(0,X.resolve)(e,n);return t?ka(r):r}function Dt(e,t={}){let{env:n=process.env,realpath:r=!1}=t;if(PT(n))return null;let o=r?ka(e):(0,X.resolve)(e);for(;;){let s=(0,X.join)(o,".git");if(rs(s)){let l=Gu(s,r);return Ju(s,l)?{worktreeRoot:o,gitDir:s,commonDir:l}:null}let i=en(s);if(i!==null){let l=DT(o,i,r);if(l===null)return null;let c=Gu(l,r);return Ju(l,c)?{worktreeRoot:o,gitDir:l,commonDir:c}:null}let a=(0,X.dirname)(o);if(a===o)return null;o=a}}function qu(e){let t=en((0,X.join)(e.gitDir,"HEAD"))?.trim();if(!t)return null;let n=/^ref:\s*refs\/heads\/(.+)$/.exec(t);return n&&n[1].trim()||null}function MT(e){return LT.test(e)&&!e.split("/").includes("..")}function $T(e,t){let n=en((0,X.join)(e,"packed-refs"));if(n===null)return null;for(let r of n.split(`
`)){if(!r||r.startsWith("#")||r.startsWith("^"))continue;let o=r.indexOf(" ");if(!(o<=0)&&r.slice(o+1).trim()===t){let s=r.slice(0,o).trim();return os.test(s)?s:null}}return null}function Ku(e){let t=en((0,X.join)(e.gitDir,"HEAD"))?.trim();if(!t)return null;if(os.test(t))return t;let n=/^ref:\s*(.+)$/.exec(t);if(!n)return null;let r=n[1].trim();if(!MT(r))return null;for(let o of e.gitDir===e.commonDir?[e.gitDir]:[e.gitDir,e.commonDir]){let s=en((0,X.join)(o,r))?.trim();if(s&&os.test(s))return s;let i=$T(o,r);if(i)return i}return null}var Mn,X,NT,os,OT,LT,xr=y(()=>{"use strict";Mn=require("node:fs"),X=require("node:path");ae();NT=["GIT_DIR","GIT_WORK_TREE","GIT_COMMON_DIR"];os=/^[0-9a-f]{40}$|^[0-9a-f]{64}$/,OT=/^ref:\s*refs\//;LT=/^refs\/[A-Za-z0-9._\-/]+$/});function UT(){let e={...process.env,LC_ALL:"C"};for(let t of HT)delete e[t];return e}function zu(e){return BT(e)??e}function BT(e){let t=Ra.get(e);if(t!==void 0)return t;let n=Dt(e,{realpath:!0})?.worktreeRoot;if(n){let o=Ue(n);return Ra.set(e,o),o}let r=null;try{let o=Ee("git",["rev-parse","--show-toplevel"],{cwd:e,encoding:"utf-8",env:UT(),stdio:["ignore","pipe","pipe"]}).trim();o&&(r=o)}catch{}return Ra.set(e,r),r}async function Y(e,t){re.debug("git %s%s",t?`[cwd=${t}] `:"",e.join(" "));try{let{stdout:n,stderr:r}=await Dn("git",e,{maxBuffer:FT,env:{...process.env,LC_ALL:"C"},...t!==void 0&&{cwd:t}});return{stdout:n.trimEnd(),stderr:r.trim(),exitCode:0}}catch(n){let r=n,o=typeof r.code=="number"?r.code:r.code==="ENOENT"?127:1,s={stdout:(r.stdout??"").trimEnd(),stderr:(r.stderr??r.message??"").trim(),exitCode:o};return re.debug("git command failed (exit: %d, stderr: %s)",o,s.stderr.substring(0,200)),s}}function WT(e){let t=e.split(`
`).filter(s=>s.trim().length>0).pop()??"",n=t.match(/(\d+)\s+files?\s+changed/),r=t.match(/(\d+)\s+insertions?/),o=t.match(/(\d+)\s+deletions?/);return{filesChanged:n?Number.parseInt(n[1],10):0,insertions:r?Number.parseInt(r[1],10):0,deletions:o?Number.parseInt(o[1],10):0}}async function is(e,t,n){let r=await Y(["diff","--stat",`${e}..${t}`],n);return WT(r.stdout)}async function va(e,t){return(await Y(["rev-parse","--verify",`refs/heads/${e}`],t)).exitCode===0}async function Aa(e,t){if(await va(e,t))return;re.info("Creating orphan branch '%s' using plumbing commands",e);let n=JSON.stringify({version:1,entries:[]},null,"	"),r=await KT(n,t);re.debug("Created blob: %s",r);let o=`100644 blob ${r}	index.json
`,s=await XT(o,t);re.debug("Created tree: %s",s);let i=await Y(["commit-tree",s,"-m","Initialize Jolli Memory summaries"],t);if(i.exitCode!==0)throw new Error(`Failed to create commit: ${i.stderr}`);let a=i.stdout.trim();re.debug("Created commit: %s",a);let l=await Y(["update-ref",`refs/heads/${e}`,a],t);if(l.exitCode!==0)throw new Error(`Failed to update ref: ${l.stderr}`);re.info("Orphan branch '%s' created successfully",e)}function GT(e){let t=e.toLowerCase();return JT.some(n=>t.includes(n))}async function xa(e,t,n){re.debug("Reading file from branch: %s:%s",e,t);let r=await Y(["show",`${e}:${t}`],n);return r.exitCode!==0?(GT(r.stderr)?re.debug("File not found: %s:%s",e,t):re.warn("Read failed for %s:%s (git exit %d): %s",e,t,r.exitCode,r.stderr||"(no stderr)"),null):r.stdout}async function Ca(e,t,n){let r=new Map;if(t.length===0)return r;let o=["cat-file","--batch"];return re.debug("git (cat-file --batch stream) %s%s for %d paths",n?`[cwd=${n}] `:"",o.join(" "),t.length),new Promise((s,i)=>{let a=ft("git",o,{stdio:["pipe","pipe","pipe"],...n!==void 0&&{cwd:n}}),l="",c=Buffer.alloc(0),d=!0,u=0,p=[],m=!1,g=0,h=!1,E=S=>{h||(h=!0,S?i(S):s(r))};a.stderr.on("data",S=>{l+=S.toString()}),a.stdout.on("data",S=>{for(c=Buffer.concat([c,S]);!h;){if(d){let k=c.indexOf(10);if(k<0)return;let b=c.subarray(0,k).toString("utf8");if(c=c.subarray(k+1),g>=t.length){E(new Error(`git cat-file --batch returned extra response: ${b}`));return}let x=t[g];if(g++,b.endsWith(" missing")){r.set(x,null);continue}let P=b.substring(b.lastIndexOf(" ")+1),$=Number.parseInt(P,10);if(!Number.isFinite($)||$<0){E(new Error(`Unexpected cat-file --batch header for ${x}: ${b}`));return}u=$,p=[],d=!1,m=!0}if(u>0){if(c.length===0)return;let k=Math.min(u,c.length);if(p.push(c.subarray(0,k)),c=c.subarray(k),u-=k,u>0)return}if(m){if(c.length<1)return;c=c.subarray(1),m=!1;let k=t[g-1];r.set(k,Buffer.concat(p).toString("utf8")),p=[],d=!0}}}),a.on("close",S=>{if(S!==0){E(new Error(`git cat-file --batch failed (exit ${S}): ${l.trim()}`));return}if(g<t.length){E(new Error(`git cat-file --batch returned ${g} of ${t.length} expected responses; stderr=${l.trim()}`));return}E(null)}),a.on("error",S=>{E(S)}),a.stdin.on("error",S=>{E(S)});for(let S of t)a.stdin.write(`${e}:${S}
`);a.stdin.end()})}async function Qu(e,t,n,r){await Aa(e,r);let o=await Y(["rev-parse",`refs/heads/${e}`],r);if(o.exitCode!==0)throw new Error(`Failed to get branch tip: ${o.stderr}`);let s=o.stdout.trim();await VT(e,s,n,t,r);let i=t.filter(l=>!l.delete).length,a=t.filter(l=>l.delete).length;re.info("Updated branch '%s': %d written, %d deleted (via fast-import)",e,i,a)}async function Cr(e,t){let n=await Y(["cat-file","-p",e],t);if(n.exitCode!==0)return null;let r=n.stdout.match(/^tree ([a-f0-9]+)/m);return r?r[1]:null}async function Ia(e,t,n){re.debug("Listing files in branch %s under prefix '%s'",e,t);let r=await Y(["ls-tree","-z","-r","--name-only",e,t],n);if(r.exitCode!==0)return re.debug("Failed to list files (branch may not exist): %s",r.stderr),[];let o=r.stdout.split(jT).filter(s=>s.length>0);return re.debug("Found %d files",o.length),o}async function qT(e){let t=await Y(["rev-parse","--git-common-dir"],e);if(t.exitCode!==0)throw new Error(`Failed to get git common dir: ${t.stderr}`);let n=t.stdout.trim();return(0,ze.resolve)(e,n)}async function Na(e){let t=await qT(e);return(0,ze.dirname)(t)}async function $n(e){return Dt(e)!==null?!0:(await Y(["rev-parse","--git-dir"],e)).exitCode===0}async function Ir(e){let t=await Y(["worktree","list","--porcelain"],e);if(t.exitCode!==0)throw new Error(`Failed to list worktrees: ${t.stderr}`);return t.stdout.split(`
`).filter(r=>r.startsWith("worktree ")).map(r=>r.slice(9).trim())}async function Fn(e){let t=(0,ze.join)(e,".git");if((await(0,ss.stat)(t)).isDirectory())return(0,ze.join)(t,"hooks");let r=await(0,ss.readFile)(t,"utf-8"),o=r.trim().match(/^gitdir:\s*(.+)$/);if(!o)throw new Error(`Unexpected .git file content: ${r.trim()}`);let s=o[1].trim(),i=(0,ze.resolve)(e,s),a=i.replace(/\\/g,"/").lastIndexOf("/worktrees/");if(a>=0){let l=i.substring(0,a);return(0,ze.join)(l,"hooks")}return(0,ze.join)(i,"hooks")}function Zu(e,t,n){return re.debug("git (stdin) %s%s",n?`[cwd=${n}] `:"",e.join(" ")),new Promise((r,o)=>{let s=ft("git",e,{stdio:["pipe","pipe","pipe"],...n!==void 0&&{cwd:n}}),i="",a="";s.stdout.on("data",l=>{i+=l.toString()}),s.stderr.on("data",l=>{a+=l.toString()}),s.on("close",l=>{l!==0?o(new Error(`git ${e[0]} failed (exit ${l}): ${a.trim()}`)):r(i.trim())}),s.on("error",l=>{o(l)}),s.stdin.write(t),s.stdin.end()})}async function KT(e,t){return Zu(["hash-object","-w","--stdin"],e,t)}async function Vu(e,t){let n=await Y(["var",e],t);if(n.exitCode!==0)throw new Error(`Failed to read ${e}: ${n.stderr}`);return n.stdout.trim()}async function VT(e,t,n,r,o){let s=await Vu("GIT_AUTHOR_IDENT",o),i=await Vu("GIT_COMMITTER_IDENT",o),a=["fast-import","--quiet","--done"];re.debug("git (fast-import stream) %s%s",o?`[cwd=${o}] `:"",a.join(" "));let l=r.filter(d=>!d.delete),c=r.filter(d=>d.delete);return new Promise((d,u)=>{let p=ft("git",a,{stdio:["pipe","pipe","pipe"],...o!==void 0&&{cwd:o}}),m="";p.stderr.on("data",S=>{m+=S.toString()}),p.on("close",S=>{S!==0?u(new Error(`git fast-import failed (exit ${S}): ${m.trim()}`)):d()}),p.on("error",S=>{u(S)});let g=p.stdin;g.on("error",S=>{u(S)});let h=[];l.forEach((S,k)=>{let b=k+1,x=Buffer.from(S.content,"utf8");h.push(`blob
mark :${b}
data ${x.length}
`,x,`
`)});let E=Buffer.from(n,"utf8");h.push(`commit refs/heads/${e}
`,`author ${s}
`,`committer ${i}
`,`data ${E.length}
`,E,`
`,`from ${t}
`),l.forEach((S,k)=>{h.push(`M 100644 :${k+1} ${Yu(S.path)}
`)});for(let S of c)h.push(`D ${Yu(S.path)}
`);h.push(`done
`),YT(g,h).then(()=>{g.end()},S=>{u(S)})})}async function YT(e,t){for(let n of t)e.write(n)||await(0,Xu.once)(e,"drain")}function Yu(e){return/["\\\n\r]/.test(e)?`"${e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r")}"`:e}async function XT(e,t){return Zu(["mktree"],e,t)}var Xu,ss,ze,FT,jT,re,Ra,HT,JT,Se=y(()=>{"use strict";Xu=require("node:events"),ss=require("node:fs/promises"),ze=require("node:path");w();ke();xr();ae();FT=10*1024*1024,jT="\0",re=f("GitOps"),Ra=new Map,HT=["GIT_DIR","GIT_WORK_TREE","GIT_INDEX_FILE","GIT_COMMON_DIR","GIT_PREFIX","GIT_OBJECT_DIRECTORY","GIT_NAMESPACE"];JT=["does not exist in","does not exist (neither on disk nor in the index)","invalid object name","exists on disk, but not in","unknown revision or path not in the working tree"]});function zT(e){return new Promise(t=>setTimeout(t,e))}function tp(e){let t=Number(e);if(!Number.isInteger(t)||t<=0)return!1;if(t===process.pid)return!0;try{return process.kill(t,0),!0}catch(n){return n.code!=="ESRCH"}}async function Pa(e){try{let t=await(0,Qe.stat)(e),n=Date.now()-t.mtimeMs,r=await np(e),o=r!==null&&!tp(r);if(!o&&n<ep)return!1;o?Nr.warn("Removing orphaned lock %s (PID %s no longer running)",e,r):Nr.warn("Removing stale lock file %s (age: %dms)",e,n),await(0,Qe.rm)(e,{force:!0})}catch(t){if(t.code!=="ENOENT")return Nr.error("Failed to check lock file %s: %s",e,t.message),!1}try{return await(0,Qe.writeFile)(e,String(process.pid),{flag:"wx"}),!0}catch{return!1}}async function np(e){try{let n=(await(0,Qe.readFile)(e,"utf-8")).trim();return n.length>0?n:null}catch{return null}}async function jn(e,t){let n=await np(e);if(n!==null&&n!==String(process.pid)){Nr.warn("Skipping release of %s: held by pid %s, not us (pid %s) \u2014 stale-reclaim race",t,n,process.pid);return}try{await(0,Qe.rm)(e,{force:!0})}catch(r){Nr.error("Failed to release %s: %s",t,r.message)}}async function Hn(e,t){if(t.timeoutMs<=0)return Pa(e);let n=Date.now()+t.timeoutMs;for(;;){if(await Pa(e))return!0;if(Date.now()>=n)return!1;await zT(t.pollMs)}}var Qe,Nr,ep,Oa=y(()=>{"use strict";Qe=require("node:fs/promises");w();Nr=f("LockPrimitives"),ep=300*1e3});function sp(e){return(0,op.resolve)(e??process.cwd())}function Un(e){return Da.getStore()?.has(sp(e))===!0}function Bn(e,t){let n=new Set(Da.getStore()??[]);return n.add(sp(e)),Da.run(n,t)}var rp,op,Da,as=y(()=>{"use strict";rp=require("node:async_hooks"),op=require("node:path"),Da=new rp.AsyncLocalStorage});function QT(e){return Dn("git",["rev-parse","--git-common-dir"],{cwd:e})}async function mp(e){let t=e??process.cwd(),n=cp.get(t);if(n!==void 0)return n;let r;try{let{stdout:o}=await QT(t),s=o.trim(),i=(0,Re.isAbsolute)(s)?s:(0,Re.resolve)(t,s);r=(0,Re.join)(i,"jollimemory")}catch{up.debug("resolveSharedLockDir: git rev-parse failed for cwd=%s \u2014 falling back to per-worktree dir",t),r=G(t)}return cp.set(t,r),r}async function La(e){let t=await mp(e);return await(0,Pr.mkdir)(t,{recursive:!0}),t}async function Or(e,t={}){let n=t.timeoutMs??e_,r=t.pollMs??t_,o=await La(e);return Hn((0,Re.join)(o,pp),{timeoutMs:n,pollMs:r})}async function Dr(e){let t=await mp(e);await jn((0,Re.join)(t,pp),"orphan-write.lock")}async function i_(e,t,n,r){let o=r.timeoutMs??r_,s=r.pollMs??cs;await(0,Pr.mkdir)(e,{recursive:!0});let i=(0,Re.join)(e,t),a=await Hn(i,{timeoutMs:o,pollMs:s});a||up.warn("Could not acquire %s within %d ms \u2014 proceeding best-effort",t,o);try{return await n()}finally{a&&await jn(i,t)}}async function Ma(e,t,n={}){return i_(e,ZT,t,n)}async function Lr(e,t={}){let n=t.timeoutMs??o_,r=t.pollMs??cs,o=await La(e),s=(0,Re.join)(o,ap);return await Hn(s,{timeoutMs:n,pollMs:r})?{release:()=>jn(s,ap)}:null}async function $a(e,t,n={}){let r=await Lr(e,n);if(!r)return{acquired:!1};try{return{acquired:!0,value:await t()}}finally{await r.release()}}async function Fa(e,t,n={}){let r=n.timeoutMs??n_,o=n.pollMs??cs,s=await La(e),i=(0,Re.join)(s,ip);if(!await Hn(i,{timeoutMs:r,pollMs:o}))return{acquired:!1};try{return{acquired:!0,value:await t()}}finally{await jn(i,ip)}}async function ja(e,t={}){let n=t.timeoutMs??s_,r=t.pollMs??cs,o=t.globalDir??(0,Re.join)((0,dp.homedir)(),".jolli","jollimemory");await(0,Pr.mkdir)(o,{recursive:!0});let s=(0,Re.join)(o,lp);if(!await Hn(s,{timeoutMs:n,pollMs:r}))return{acquired:!1};try{return{acquired:!0,value:await e()}}finally{await jn(s,lp)}}var Pr,dp,Re,up,pp,ip,ZT,ap,lp,e_,ls,t_,n_,cs,r_,o_,s_,cp,Ze=y(()=>{"use strict";Pr=require("node:fs/promises"),dp=require("node:os"),Re=require("node:path");w();ke();Oa();as();up=f("Locks");pp="orphan-write.lock",ip="profile.lock",ZT="config.lock",ap="repo-hooks.lock",lp="runtime-registry.lock",e_=1e3,ls=class extends Error{constructor(t,n){super(`${t}: could not acquire orphan-write.lock within ${n}ms`),this.name="OrphanWriteBusyError"}},t_=50,n_=5e3,cs=25,r_=5e3,o_=5e3,s_=5e3,cp=new Map});async function Ha(e,t,n={}){await(0,Lt.mkdir)((0,fp.dirname)(e),{recursive:!0});let r=`${e}.${process.pid}.tmp`;await(0,Lt.writeFile)(r,t,n.mode!==void 0?{encoding:"utf-8",mode:n.mode}:"utf-8");try{await(0,Lt.rename)(r,e)}catch(o){throw await(0,Lt.unlink)(r).catch(()=>{}),o}}var Lt,fp,Ua=y(()=>{"use strict";Lt=require("node:fs/promises"),fp=require("node:path")});function wp(e,t){let n={...e,manuallyDisabled:t};return delete n.userDisabled,n}async function c_(e){let t=Dt(e)?.commonDir;if(t)return t;let n=await Y(["rev-parse","--git-common-dir"],e),r=n.exitCode===0?n.stdout.trim():"";return r?(0,le.isAbsolute)(r)?r:(0,le.join)(e,r):null}async function Ga(e){let t=await c_(e);if(t===null)return{profilePath:(0,le.join)(G(e),Wa),legacyMarkerPath:null};let n=(0,le.dirname)(t);return{profilePath:(0,le.join)(G(n),Wa),legacyMarkerPath:(0,le.join)(t,a_,l_)}}async function ps(e){try{let t=await(0,Mr.readFile)(e,"utf-8"),n=JSON.parse(t);return n&&typeof n=="object"&&!Array.isArray(n)?n:{}}catch{return{}}}async function d_(e){try{return await(0,Mr.stat)(e),!0}catch{return!1}}async function Ep(e,t){await Ha(e,`${JSON.stringify(t,null,"	")}
`)}function ds(e,t,n,r,o,s){if(e==="read"){let i=`${o}|${t}|${n}`;if(gp.has(i))return n;gp.add(i)}return Ja.info("manual-disable %s \u2192 %s (by=%s, pid=%d, cwd=%s, profile=%s, raw: userDisabled=%s manuallyDisabled=%s fence=%s)",e,n,t,process.pid,r,o,String(s.userDisabled),String(s.manuallyDisabled),s.cutoverFence?s.cutoverFence.at:"none"),n}function Sp(){return(new Error("manual-disable write").stack??"(no stack)").split(`
`).slice(1,8).join(" | ").replace(/\s+/g," ")}async function u_(e){let t;try{t=await Ir(e)}catch{t=[e]}for(let n of t)if(await d_((0,le.join)(G(n),yp)))return!0;return!1}async function Mt(e){let{profilePath:t}=await Ga(e),n=await ps(t);if(n.userDisabled!==void 0){let s=await hp(e,t,n.userDisabled===!0);return ds("read","migrate:userDisabled",s,e,t,n)}if(n.manuallyDisabled!==void 0)return ds("read","manuallyDisabled",n.manuallyDisabled===!0,e,t,n);let r=await u_(e),o=await hp(e,t,r);return ds("read","migrate:legacy-marker",o,e,t,n)}async function hp(e,t,n){let r=await Fa(e,async()=>{let o=await ps(t),s=o.userDisabled??o.manuallyDisabled,i=s===void 0?n:s===!0;return o.userDisabled===void 0&&o.manuallyDisabled!==void 0||(Ja.info("manual-disable MIGRATE \u2192 manuallyDisabled=%s (pid=%d, profile=%s, fence=%s, from=%s) \u2190 %s",i,process.pid,t,o.cutoverFence?o.cutoverFence.at:"none",o.userDisabled!==void 0?"userDisabled":"legacy-marker",Sp()),await Ep(t,wp(o,i))),i}).catch(()=>{});return r?.acquired&&r.value!==void 0?r.value:n}async function qa(e,t){let{profilePath:n}=await Ga(e);if(Ja.info("manual-disable WRITE %s (pid=%d, cwd=%s, profile=%s) \u2190 %s",t,process.pid,e,n,Sp()),!(await Fa(e,async()=>{let o=await ps(n);ds("write",`explicit:${t}`,t,e,n,o),await Ep(n,wp(o,t))})).acquired)throw new Error("Timed out acquiring the repo profile lock")}async function $r(e){let{profilePath:t}=await Ga(e);return(await ps(t)).cutoverFence??null}function p_(e){let t=Ba.get(e);if(t!==void 0)return t;let n=Dt(e)?.commonDir;if(n){let s=(0,le.dirname)(n);return Ba.set(e,s),s}let r="";try{let s=Ee("git",["rev-parse","--git-common-dir"],{cwd:e,encoding:"utf-8",stdio:["ignore","pipe","pipe"]}).trim();s&&(r=(0,le.isAbsolute)(s)?s:(0,le.join)(e,s))}catch{r=""}let o=r?(0,le.dirname)(r):e;return Ba.set(e,o),o}function Ka(e){let t=p_(e),n;try{n=(0,us.readFileSync)((0,le.join)(G(t),Wa),"utf-8")}catch{}let r=m_(n);if(r!==void 0)return r;try{return(0,us.statSync)((0,le.join)(G(e),yp)),!0}catch{return!1}}function m_(e){if(e===void 0)return;let t;try{t=JSON.parse(e)}catch{return}if(!t||typeof t!="object"||Array.isArray(t))return;let n=t;if(n.userDisabled!==void 0)return n.userDisabled===!0;if(n.manuallyDisabled!==void 0)return n.manuallyDisabled===!0}var us,Mr,le,Ja,Wa,a_,l_,yp,gp,Ba,et=y(()=>{"use strict";us=require("node:fs"),Mr=require("node:fs/promises"),le=require("node:path");w();ke();Ua();xr();Se();Ze();Ja=f("RepoProfile"),Wa="profile.json",a_="jollimemory",l_="backfill-card-dismissed",yp="disabled-by-user";gp=new Set;Ba=new Map});function Tp(e){return typeof e=="string"&&bp.includes(e)}var bp,Va,ms=y(()=>{"use strict";bp=["claude","codex","gemini","opencode","cursor","cursor-cli","copilot","copilot-chat","cline","cline-cli","devin","antigravity","kimi","hermes"];Va=5});async function v(e,t,n){let r=`${e}.${process.pid}.${(0,_p.randomUUID)()}.tmp`;await(0,tn.writeFile)(r,t,n===void 0?"utf-8":{encoding:"utf-8",mode:n});try{await(0,tn.rename)(r,e)}catch(o){let s=o.code;if(s==="EPERM"||s==="EACCES")await(0,tn.writeFile)(e,t,n===void 0?"utf-8":{encoding:"utf-8",mode:n}),await(0,tn.rm)(r,{force:!0});else throw o}}var _p,tn,Q=y(()=>{"use strict";_p=require("node:crypto"),tn=require("node:fs/promises")});function $t(e){if(!e.startsWith("sk-jol-"))return null;let t=e.slice(7);if(!t.includes("."))return null;for(let n of t.split("."))try{let r=Buffer.from(n,"base64url").toString("utf-8"),o=JSON.parse(r);if(typeof o.t=="string"&&typeof o.u=="string")return{t:o.t,u:o.u,...typeof o.o=="string"?{o:o.o}:{}}}catch{}return null}function fs(e){let t;try{t=new URL(e)}catch{throw new Error(`Rejected Jolli origin (unparseable): ${e}`)}if(!h_(t))throw new Error(`Rejected Jolli origin "${t.origin}". Only https://*.jolli.ai, https://*.jolli.dev, https://*.jollidev.com, https://*.jollidev.dev, https://*.jolli.cloud, and https://*.jolli-local.me are permitted.`)}function kp(e){let t;try{t=new URL(e).hostname.toLowerCase()}catch{return!1}return g_.some(n=>t===n||t.endsWith(`.${n}`))}function h_(e){let t=e.hostname.toLowerCase();return e.protocol==="https:"&&t!==""&&f_.some(n=>t===n||t.endsWith(`.${n}`))}var f_,g_,Wn=y(()=>{"use strict";ae();f_=["jolli.ai","jolli.dev","jollidev.com","jollidev.dev","jolli.cloud","jolli-local.me"];g_=["jolli.ai"]});function ce(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}var Fr=y(()=>{"use strict"});var Rp=y(()=>{"use strict"});function Ya(e,t){if(e.length<=t)return e;let n=e.length-t;return`${e.slice(0,t)}
\u2026[truncated, ${n} more chars]`}var Xa=y(()=>{"use strict"});function vp(e){return Number.isFinite(e)&&e>=0&&e<=1114111&&!(e>=55296&&e<=57343)}function Ap(e){return e.replace(/&(#x[0-9a-fA-F]+|#\d+|[a-zA-Z]+);/g,(t,n)=>{if(n.startsWith("#x")){let o=Number.parseInt(n.slice(2),16);return vp(o)?String.fromCodePoint(o):t}if(n.startsWith("#")){let o=Number.parseInt(n.slice(1),10);return vp(o)?String.fromCodePoint(o):t}let r=y_[n];return typeof r=="string"?r:t})}var y_,xp=y(()=>{"use strict";y_={amp:"&",lt:"<",gt:">",quot:'"',apos:"'"}});var w_,Cp,Ip=y(()=>{"use strict";Rp();Fr();Xa();xp();w_={decodeHtmlEntities:Ap,lowercase:e=>e.toLowerCase()},Cp=new Set(Object.keys(w_))});var E_,Np,Pp=y(()=>{"use strict";E_="^https://app\\.asana\\.com/",Np={id:"asana",label:"Asana",icon:"checklist",match:{claude:{prefixes:["mcp__claude_ai_Asana__"],acceptSuffix:"get_task"},codex:{namespaceSuffix:"asana",functionCallNames:["_get_task"],invocationTools:["asana.get_task"]}},wrapperKeys:["data"],reference:{nativeId:{pipe:[{op:"path",path:"gid"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"name"}],require:".+"},url:{pipe:[{op:"path",path:"permalink_url"}],require:E_,requireFlags:"i"},description:{pipe:[{op:"path",path:"notes"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"task"}]},{key:"assignee",label:"Assignee",icon:"person",pipe:[{op:"path",path:"assignee.name"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"asana-tasks",itemTag:"task",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var S_,Op,Dp=y(()=>{"use strict";S_="^https://[^/]+/wiki/",Op={id:"confluence",label:"Confluence",icon:"book",match:{claude:{prefixes:["mcp__claude_ai_Atlassian__"],acceptSuffix:"getConfluencePage"},codex:{namespaceSuffix:"atlassian_rovo",functionCallNames:["_getconfluencepage"],invocationTools:["atlassian_rovo.getConfluencePage"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"pageId"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:S_},description:{pipe:[{op:"path",path:"body"}],optional:!0}},fields:[{key:"space",label:"Space",icon:"symbol-namespace",pipe:[{op:"path",path:"space"}]},{key:"author",label:"Author",icon:"account",pipe:[{op:"path",path:"author"}]},{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"coalesce",of:[[{op:"path",path:"entityType"}],[{op:"const",value:"page"}]]}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"confluence-pages",itemTag:"page",bodyTag:"content",maxCharsPerReference:3e4,maxTotalChars:6e4}}});var b_,Lp,Mp=y(()=>{"use strict";b_="^/[^/\\s]+/[^/\\s]+",Lp={id:"context7",label:"Context7",icon:"book",trackOnly:!0,argumentsDerived:!0,match:{claude:{prefixes:["mcp__context7__"],acceptSuffix:"query-docs"},codex:{namespaceSuffix:"context7",functionCallNames:["_query_docs"],invocationTools:["query-docs","context7.query-docs"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"libraryId"}],require:b_},title:{pipe:[{op:"path",path:"libraryId"},{op:"regex",pattern:"^/(.+)$",extract:"$1"}],require:".+"},url:{pipe:[{op:"template",template:"https://context7.com{id}",from:{id:[{op:"path",path:"libraryId"}]}}],require:"^https://context7\\.com/"},description:{pipe:[{op:"path",path:"query"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"context7-libraries",itemTag:"library",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var za,T_,Qa,oL,$p=y(()=>{"use strict";Fr();za=["mcp__Figma__","mcp__figma__"],T_={get_metadata:"Read structure",get_screenshot:"Viewed screenshot",get_variable_defs:"Read variables",get_figjam:"Read FigJam board",get_design_context:"Read design context"},Qa=Object.keys(T_),oL=new Set(Qa)});var __,k_,Fp,jp=y(()=>{"use strict";$p();__="^[0-9a-zA-Z]{22,128}$",k_=za.flatMap(e=>Qa.map(t=>`${e}${t}`)),Fp={id:"figma",label:"Figma",icon:"symbol-color",trackOnly:!0,argumentsDerived:!0,accumulateBody:!0,titleFallbackPattern:"^Figma file [0-9a-zA-Z]{1,8}$",match:{claude:{prefixes:[...za],exact:k_}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"fileKey"}],require:__},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://www\\.figma\\.com/"},description:{pipe:[{op:"path",path:"detail"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"figma-files",itemTag:"file",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var R_,v_,Hp,Up=y(()=>{"use strict";R_="^https?://github\\.com/([^/]+)/[^/]+/(?:issues|pull)/\\d+",v_="^https?://github\\.com/[^/]+/([^/]+)/(?:issues|pull)/\\d+",Hp={id:"github",label:"GitHub",icon:"issues",match:{claude:{prefixes:["mcp__github__"]},codex:{namespaceSuffix:"github",functionCallNames:["_fetch_issue","_search_issues"],invocationTools:["github_fetch_issue","github_search_issues"]}},wrapperKeys:["items","issues","nodes","results"],reference:{nativeId:{pipe:[{op:"template",template:"{owner}/{repo}#{number}",from:{owner:[{op:"coalesce",of:[[{op:"path",path:"repository.full_name"},{op:"regex",pattern:"^([^/]+)/[^/]+$",extract:"$1"}],[{op:"path",path:"html_url"},{op:"regex",pattern:R_,extract:"$1"}]]}],repo:[{op:"coalesce",of:[[{op:"path",path:"repository.full_name"},{op:"regex",pattern:"^[^/]+/([^/]+)$",extract:"$1"}],[{op:"path",path:"html_url"},{op:"regex",pattern:v_,extract:"$1"}]]}],number:[{op:"path",path:"number"}]}}],require:"^[^/]+/[^/]+#\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"html_url"}],require:"^https?://"},description:{pipe:[{op:"path",path:"body"},{op:"transform",fn:"decodeHtmlEntities"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"path",path:"state"}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"labels"},{op:"join",sep:", "}]},{key:"assignees",label:"Assignees",icon:"account",pipe:[{op:"path",path:"assignees"},{op:"join",sep:", "}]},{key:"milestone",label:"Milestone",icon:"milestone",pipe:[{op:"coalesce",of:[[{op:"path",path:"milestone"}],[{op:"path",path:"milestone.title"}]]}]},{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"coalesce",of:[[{op:"path",path:"issue_type"}],[{op:"path",path:"issue_type.name"}]]}]}],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"github-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var A_,Bp,Wp=y(()=>{"use strict";A_="^[A-Z][A-Z0-9_]*-\\d+$",Bp={id:"jira",label:"Jira",icon:"issues",match:{claude:{prefixes:["mcp__claude_ai_Atlassian__"]},codex:{namespaceSuffix:"atlassian_rovo",functionCallNames:["_fetch","_getjiraissue"],invocationTools:["atlassian_rovo.fetch","atlassian_rovo.getJiraIssue"]}},wrapperKeys:["nodes","issues","items","results"],reference:{nativeId:{pipe:[{op:"path",path:"key"}],require:A_},title:{pipe:[{op:"path",path:"fields.summary"}],require:".+"},url:{pipe:[{op:"path",path:"webUrl"}],require:"^https?://"},description:{pipe:[{op:"path",path:"fields.description"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"coalesce",of:[[{op:"path",path:"fields.status.name"}],[{op:"path",path:"fields.status"}]]}]},{key:"priority",label:"Priority",icon:"flame",pipe:[{op:"coalesce",of:[[{op:"path",path:"fields.priority.name"}],[{op:"path",path:"fields.priority"}]]}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"fields.labels"},{op:"join",sep:", "}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"jira-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var Jp,Gp=y(()=>{"use strict";Jp={id:"jollimemory",label:"Jolli Memory",icon:"history",trackOnly:!0,argumentsDerived:!0,accumulateBody:!0,match:{claude:{prefixes:["mcp__jollimemory__"],exact:["mcp__jollimemory__recall","mcp__jollimemory__search","mcp__jollimemory__get_decision_timeline"]},codex:{namespaceSuffix:"jollimemory",functionCallNames:["recall","search","get_decision_timeline"],invocationTools:["recall","search","get_decision_timeline"],invocationServer:"jollimemory"}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"tool"}],require:"^(recall|search|get_decision_timeline)$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},description:{pipe:[{op:"path",path:"query"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"jolli-memory-lookups",itemTag:"lookup",bodyTag:"queries",maxCharsPerReference:2e3,maxTotalChars:6e3}}});var x_,qp,Kp=y(()=>{"use strict";x_="^[A-Z][A-Z0-9_]*-\\d+$",qp={id:"linear",label:"Linear",icon:"issues",match:{claude:{prefixes:["mcp__linear__","mcp__claude_ai_Linear__"],denySuffixes:["list_issues","search_issues"]},codex:{namespaceSuffix:"linear",functionCallNames:["_fetch","_get_issue"],invocationTools:["linear_fetch","linear.get_issue"]}},wrapperKeys:["items","issues","nodes","results"],reference:{nativeId:{pipe:[{op:"path",path:"id"}],require:x_},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https?://"},description:{pipe:[{op:"path",path:"description"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"path",path:"status"}]},{key:"priority",label:"Priority",icon:"flame",pipe:[{op:"coalesce",of:[[{op:"path",path:"priority"}],[{op:"path",path:"priority.name"}]]}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"labels"},{op:"join",sep:", "}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"linear-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var Vp,Yp=y(()=>{"use strict";Vp={id:"monday",label:"monday.com",icon:"table",match:{claude:{prefixes:["mcp__claude_ai_monday_com__"],acceptSuffix:"get_board_items_page"},codex:{namespaceSuffix:"monday_com",functionCallNames:["_get_board_items_page"],invocationTools:["monday_com.get_board_items_page"]}},wrapperKeys:["items"],reference:{nativeId:{pipe:[{op:"path",path:"id"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"name"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://([\\w-]+\\.)*monday\\.com/",requireFlags:"i"},description:{pipe:[{op:"path",path:"description"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"item"}]},{key:"board",label:"Board",icon:"project",pipe:[{op:"path",path:"board"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"monday-items",itemTag:"item",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var C_,I_,N_,Xp,zp=y(()=>{"use strict";C_="[-/]([0-9a-fA-F]{32})(?=[/?#]|$)",I_="^https://(www\\.notion\\.so|notion\\.so|app\\.notion\\.com|[A-Za-z0-9.-]+\\.notion\\.site)/",N_="<content\\b[^>]*>([\\s\\S]*?)</content>",Xp={id:"notion",label:"Notion",icon:"file-text",match:{claude:{prefixes:["mcp__claude_ai_Notion__"],acceptSuffix:"notion-fetch"},codex:{namespaceSuffix:"notion",functionCallNames:["_fetch"],invocationTools:["notion_fetch"]}},wrapperKeys:["results","items","pages"],reference:{guard:{pipe:[{op:"path",path:"metadata.type"}],require:"^page$"},nativeId:{pipe:[{op:"path",path:"url"},{op:"regex",pattern:C_,extract:"$1",lastMatch:!0},{op:"transform",fn:"lowercase"}],require:"^[0-9a-fA-F]{32}$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:I_,requireFlags:"i"},description:{pipe:[{op:"path",path:"text"},{op:"regex",pattern:N_,extract:"$1"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"page"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"notion-pages",itemTag:"page",bodyTag:"content",fieldAttrs:!1,maxCharsPerReference:3e4,maxTotalChars:6e4}}});var Za,P_,O_,el,gL,Qp=y(()=>{"use strict";Fr();Za=["mcp__Sentry__","mcp__sentry__"],P_="get_sentry_resource",O_="analyze_issue_with_seer",el=[P_,O_],gL=new Set(el)});var D_,L_,M_,$_,Zp,em=y(()=>{"use strict";Qp();D_=Za.flatMap(e=>el.map(t=>`${e}${t}`)),L_="^[A-Za-z0-9.-]{1,253}/[A-Za-z0-9_-]{1,128}$",M_="^Issue [A-Za-z0-9_-]{1,128}$",$_="^Issue [0-9]{1,128}$",Zp={id:"sentry",label:"Sentry",icon:"bug",trackOnly:!0,argumentsDerived:!0,titleFallbackPattern:M_,titleFallbackPoorestPattern:$_,match:{claude:{prefixes:[...Za],exact:D_}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"nativeId"}],require:L_},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://(?:[A-Za-z0-9-]{1,63}\\.)*sentry\\.io/issues/[A-Za-z0-9_-]{1,128}$",requireFlags:"i"},description:{pipe:[{op:"path",path:"detail"}],optional:!0}},fields:[{key:"issue-id",label:"Issue",icon:"bug",pipe:[{op:"path",path:"shortId"}]},{key:"project",label:"Project",icon:"symbol-property",pipe:[{op:"path",path:"project"}]}],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"sentry-issues",itemTag:"issue",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var tm,nm=y(()=>{"use strict";tm={id:"slack",label:"Slack",icon:"comment-discussion",match:{claude:{prefixes:["mcp__claude_ai_Slack__"],acceptSuffix:"slack_read_thread"},codex:{namespaceSuffix:"slack",functionCallNames:["_slack_read_thread"],invocationTools:["slack.slack_read_thread"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"template",template:"{c}-{t}",from:{c:[{op:"path",path:"channelId"}],t:[{op:"path",path:"parentTs"}]}}],require:"^[A-Z0-9]+-\\d{7,}\\.\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://"},description:{pipe:[{op:"path",path:"text"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"comment-discussion",pipe:[{op:"const",value:"thread"}]},{key:"replies",label:"Replies",icon:"reply",pipe:[{op:"path",path:"replyCount"}]},{key:"channel",label:"Channel",icon:"symbol-namespace",pipe:[{op:"path",path:"channelId"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"slack-threads",itemTag:"thread",bodyTag:"messages",fieldAttrs:!0,maxCharsPerReference:8e3,maxTotalChars:4e4}}});var F_,tl,nl,rm,om=y(()=>{"use strict";F_="^dpl_[A-Za-z0-9]+$",tl=[{op:"coalesce",of:[[{op:"path",path:"readyState"}],[{op:"path",path:"state"}]]}],nl=[{op:"template",template:"https://{host}",from:{host:[{op:"path",path:"url"}]}}],rm={id:"vercel",label:"Vercel",icon:"rocket",trackOnly:!0,match:{claude:{prefixes:["mcp__claude_ai_Vercel__","mcp__vercel__"],acceptSuffix:"get_deployment"}},wrapperKeys:["deployment"],reference:{nativeId:{pipe:[{op:"path",path:"id"}],require:F_},title:{pipe:[{op:"coalesce",of:[[{op:"template",template:"{name} ({state})",from:{name:[{op:"path",path:"name"}],state:tl}}],[{op:"path",path:"name"}]]}],require:".+"},url:{pipe:nl,require:"^https://[A-Za-z0-9.-]+\\.vercel\\.app$",requireFlags:"i"},description:{pipe:[{op:"coalesce",of:[[{op:"path",path:"errorMessage"}],[{op:"template",template:"Deployment {state} \xB7 {target} \xB7 {url}",from:{state:tl,target:[{op:"path",path:"target"}],url:nl}}],[{op:"template",template:"Deployment {state} \xB7 {url}",from:{state:tl,url:nl}}]]}],optional:!0}},fields:[{key:"target",label:"Target",icon:"rocket",pipe:[{op:"path",path:"target"}]},{key:"framework",label:"Framework",icon:"symbol-property",pipe:[{op:"path",path:"project.framework"}]},{key:"error-code",label:"Error",icon:"error",pipe:[{op:"path",path:"errorCode"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"vercel-deployments",itemTag:"deployment",bodyTag:"content",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var sm,im=y(()=>{"use strict";sm={id:"zoom-doc",label:"Zoom Doc",icon:"file",match:{claude:{prefixes:["mcp__claude_ai_Zoom_for_Claude__"],acceptSuffix:"hub_get_file_content"}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"fileId"}],require:"^[\\w.-]+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://docs\\.zoom\\.us/doc/"},description:{pipe:[{op:"path",path:"content"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"doc"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"zoom-docs",itemTag:"doc",bodyTag:"content",maxCharsPerReference:3e4,maxTotalChars:6e4}}});var am,lm=y(()=>{"use strict";am={id:"zoom-meeting",label:"Zoom Meeting",icon:"device-camera-video",match:{claude:{prefixes:["mcp__claude_ai_Zoom_for_Claude__"],acceptSuffix:"get_meeting_assets"},codex:{namespaceSuffix:"zoom",functionCallNames:["_get_meeting_assets"],invocationTools:["zoom.get_meeting_assets"]}},wrapperKeys:[],reference:{guard:{pipe:[{op:"path",path:"meeting_summary.summary_markdown"}],require:".+"},nativeId:{pipe:[{op:"path",path:"meeting_uuid"}],require:"^[\\w-]+$"},title:{pipe:[{op:"path",path:"topic"}],require:".+"},url:{pipe:[{op:"coalesce",of:[[{op:"path",path:"meeting_summary.summary_doc_url"}],[{op:"path",path:"deep_url"}]]}],require:"^https://"},description:{pipe:[{op:"path",path:"meeting_summary.summary_markdown"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"meeting"}]},{key:"started",label:"Started",icon:"calendar",pipe:[{op:"path",path:"start_time"}]},{key:"meeting-number",label:"Meeting #",icon:"symbol-number",pipe:[{op:"path",path:"meeting_number"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"zoom-meetings",itemTag:"meeting",bodyTag:"summary",maxCharsPerReference:2e4,maxTotalChars:4e4}}});var cm,dm=y(()=>{"use strict";Pp();Dp();Mp();jp();Up();Wp();Gp();Kp();Yp();zp();em();nm();om();im();lm();cm=[qp,Op,Bp,Hp,Xp,tm,am,sm,Np,Vp,Lp,Jp,rm,Fp,Zp]});function H_(e,t,n){if(!ce(e))return"op must be an object";if(n.opCount++,n.opCount>um)return`pipe exceeds ${um} ops`;let r=e.op;if(typeof r!="string"||!j_.has(r))return`unknown op: ${String(r)}`;switch(r){case"path":return typeof e.path=="string"?void 0:"path op requires a string 'path'";case"const":return typeof e.value=="string"?void 0:"const op requires a string 'value'";case"join":return typeof e.sep=="string"?void 0:"join op requires a string 'sep'";case"regex":return typeof e.pattern!="string"?"regex op requires a string 'pattern'":e.extract!==void 0&&typeof e.extract!="string"?"regex.extract must be a string":e.lastMatch!==void 0&&typeof e.lastMatch!="boolean"?"regex.lastMatch must be a boolean":void 0;case"transform":return typeof e.fn!="string"?"transform op requires a string 'fn'":Cp.has(e.fn)?void 0:`unknown transform: ${e.fn}`;case"coalesce":{if(t+1>gs)return`nesting depth exceeds ${gs}`;if(!Array.isArray(e.of))return"coalesce op requires an array 'of'";for(let o of e.of){let s=rl(o,t+1,n);if(s!==void 0)return s}return}case"template":{if(t+1>gs)return`nesting depth exceeds ${gs}`;if(typeof e.template!="string")return"template op requires a string 'template'";if(!ce(e.from))return"template op requires an object 'from'";for(let o of Object.values(e.from)){let s=rl(o,t+1,n);if(s!==void 0)return s}return}}}function rl(e,t,n){if(!Array.isArray(e))return"pipe must be an array";for(let r of e){let o=H_(r,t,n);if(o!==void 0)return o}}function jr(e,t){let n=rl(e,0,{opCount:0});return n===void 0?void 0:`${t}: ${n}`}function U_(e){if(!ce(e))return{ok:!1,error:"definition must be an object"};if(typeof e.id!="string"||e.id.length===0)return{ok:!1,error:"id must be a non-empty string"};if(typeof e.label!="string"||e.label.length===0)return{ok:!1,error:"label must be a non-empty string"};if(typeof e.icon!="string"||e.icon.length===0)return{ok:!1,error:"icon must be a non-empty string"};if(e.titleFallbackPattern!==void 0){if(typeof e.titleFallbackPattern!="string"||e.titleFallbackPattern.length===0)return{ok:!1,error:"titleFallbackPattern must be a non-empty string"};try{new RegExp(e.titleFallbackPattern)}catch(n){return{ok:!1,error:`titleFallbackPattern is not a valid regex: ${n.message}`}}}if(e.titleFallbackPoorestPattern!==void 0){if(typeof e.titleFallbackPoorestPattern!="string"||e.titleFallbackPoorestPattern.length===0)return{ok:!1,error:"titleFallbackPoorestPattern must be a non-empty string"};try{new RegExp(e.titleFallbackPoorestPattern)}catch(n){return{ok:!1,error:`titleFallbackPoorestPattern is not a valid regex: ${n.message}`}}if(e.titleFallbackPattern===void 0)return{ok:!1,error:"titleFallbackPoorestPattern requires titleFallbackPattern"}}if(!ce(e.match))return{ok:!1,error:"match must be an object"};if(!Array.isArray(e.wrapperKeys))return{ok:!1,error:"wrapperKeys must be an array"};if(!ce(e.reference))return{ok:!1,error:"reference must be an object"};if(!Array.isArray(e.fields))return{ok:!1,error:"fields must be an array"};if(!ce(e.storage))return{ok:!1,error:"storage must be an object"};if(!ce(e.render))return{ok:!1,error:"render must be an object"};let t=e.reference;for(let n of["nativeId","title"]){let r=t[n];if(!ce(r))return{ok:!1,error:`reference.${n} is required`};let o=jr(r.pipe,`reference.${n}.pipe`);if(o!==void 0)return{ok:!1,error:o}}if(t.url!==void 0){if(!ce(t.url))return{ok:!1,error:"reference.url must be an object"};let n=jr(t.url.pipe,"reference.url.pipe");if(n!==void 0)return{ok:!1,error:n}}if(t.description!==void 0){if(!ce(t.description))return{ok:!1,error:"reference.description must be an object"};let n=jr(t.description.pipe,"reference.description.pipe");if(n!==void 0)return{ok:!1,error:n}}if(t.guard!==void 0){if(!ce(t.guard))return{ok:!1,error:"reference.guard must be an object"};let n=jr(t.guard.pipe,"reference.guard.pipe");if(n!==void 0)return{ok:!1,error:n}}for(let[n,r]of e.fields.entries()){if(!ce(r))return{ok:!1,error:`fields[${n}] must be an object`};if(typeof r.key!="string"||!pm.test(r.key))return{ok:!1,error:`fields[${n}].key must match ${pm}`};if(typeof r.label!="string"||r.label.length===0)return{ok:!1,error:`fields[${n}].label must be a non-empty string`};let o=jr(r.pipe,`fields[${n}].pipe`);if(o!==void 0)return{ok:!1,error:o}}return{ok:!0,def:e}}function Jn(){if(hs!==void 0)return hs;let e=[];for(let t of cm){let n=U_(t);if(!n.ok)throw new Error(`invalid built-in source definition '${t.id}': ${n.error}`);e.push(n.def)}return hs=new ol(e),hs}var um,gs,j_,pm,ol,hs,ys=y(()=>{"use strict";Fr();Ip();dm();um=64,gs=8,j_=new Set(["path","coalesce","regex","template","join","const","transform"]);pm=/^[\w-]+$/;ol=class{constructor(t){this.definitions=t}all(){return this.definitions}byId(t){return this.definitions.find(n=>n.id===t)}match(t,n,r,o){return t==="claude"?this.definitions.find(s=>{let i=s.match.claude;return!(i===void 0||!i.prefixes.some(a=>n.startsWith(a))||i.exact!==void 0&&!i.exact.includes(n)||i.acceptSuffix!==void 0&&!n.endsWith(i.acceptSuffix)||i.denySuffixes?.some(a=>n.endsWith(a)))}):r!==void 0?this.definitions.find(s=>{let i=s.match.codex;return i!==void 0&&i.namespaceSuffix===r&&i.functionCallNames.includes(n)}):this.definitions.find(s=>{let i=s.match.codex;return i===void 0||!i.invocationTools.includes(n)?!1:i.invocationServer===void 0||i.invocationServer===o})}}});function fm(e,t){let n=Jn().byId(e);if(n===void 0||n.storage.nativeIdPathSafe===!1){let r=t.replace(/[^\w.-]/g,"-"),o=V_(t).slice(0,8);return`${r}-${o}`}if(t.includes("..")||/[/\\]/.test(t))throw new Error(`Refusing unsafe ${e} nativeId for path: ${JSON.stringify(t)}`);return t}function sl(e){return G_(e)}function B_(e){return e.replace(/^\n+/,"").replace(/\n+$/,"")}function W_(e){let t=e.indexOf(J_);return t===-1?e:e.slice(0,t)}function G_(e){if(typeof e!="string")return null;let t=e.split(`
`);if(t[0]?.trim()!=="---")return null;let n=-1;for(let k=1;k<t.length;k++)if(t[k].trim()==="---"){n=k;break}if(n===-1)return null;let r=t.slice(1,n),o=B_(W_(t.slice(n+1).join(`
`))),s={},i=[],a=!1;for(let k of r){if(a){let x=/^\s+- (.+)$/.exec(k);if(x){try{let P=JSON.parse(x[1]);q_(P)&&i.push(P)}catch{}continue}a=!1}if(k.trim()==="fields:"){a=!0;continue}let b=/^([a-zA-Z]+):\s*(.+)$/.exec(k);b&&(s[b[1]]=b[2])}let l=k=>{let b=s[k];if(b!==void 0)try{let x=JSON.parse(b);return typeof x=="string"?x:void 0}catch{return}},c=l("source"),d=l("nativeId");if(c===void 0||d===void 0||!K_(c))return null;let u=c,p=d,m=l("title"),g=l("url"),h=l("referencedAt"),E=l("sourceToolName");return!m||h===void 0||!E?null:{mapKey:`${u}:${p}`,source:u,nativeId:p,title:m,referencedAt:h,toolName:E,...g!==void 0?{url:g}:{},...i.length>0?{fields:i}:{},...o.length>0?{description:o}:{}}}function q_(e){if(typeof e!="object"||e===null)return!1;let t=e;return!(typeof t.key!="string"||typeof t.label!="string"||typeof t.value!="string"||!/^[\w-]+$/.test(t.key)||t.icon!==void 0&&typeof t.icon!="string")}function K_(e){return e.length>0&&/^[\w-]+$/.test(e)}function gm(e){return Jn().byId(e)!==void 0}function V_(e){return(0,mm.createHash)("sha256").update(e,"utf-8").digest("hex")}var mm,GL,J_,Hr=y(()=>{"use strict";mm=require("node:crypto");w();ys();GL=f("ReferenceStore");J_="<!-- jolli:auto-note -->"});function Y_(e){return`${e.source}:${e.skill}`}function X_(e,t){if(e===void 0)return t;let n=e.usage===void 0||t.usage===void 0?e.usage??t.usage:{input:e.usage.input+t.usage.input,output:e.usage.output+t.usage.output,cached:e.usage.cached+t.usage.cached,confidence:e.usage.confidence==="attributed"&&t.usage.confidence==="attributed"?"attributed":"estimated"},r=[e,t].filter(l=>l.usage!==void 0),o=Q_(r),{usageBySession:s,supersededDocIds:i,...a}=e;return{...a,invocationCount:e.invocationCount+t.invocationCount,...n!==void 0?{usage:n}:{},...o!==void 0?{usageBySession:o}:{},...e.detection==="heuristic"||t.detection==="heuristic"?{detection:"heuristic"}:{},...e.jolliDocId===void 0&&t.jolliDocId!==void 0?{jolliDocId:t.jolliDocId,jolliDocUrl:t.jolliDocUrl}:{},...z_(e,t)}}function z_(e,t){let n=new Set([...e.supersededDocIds??[],...t.supersededDocIds??[]]);e.jolliDocId!==void 0&&t.jolliDocId!==void 0&&n.add(t.jolliDocId);let r=e.jolliDocId??t.jolliDocId;return r!==void 0&&n.delete(r),n.size>0?{supersededDocIds:[...n]}:{}}function ws(e){if(e.supersededDocIds===void 0)return e;let{supersededDocIds:t,...n}=e;return n}function Q_(e){if(e.length===0)return;let t=[];for(let r of e){if(r.usageBySession===void 0)return;t.push(r.usageBySession)}let n={};for(let r of t)for(let[o,s]of Object.entries(r)){let i=n[o];n[o]=i===void 0?s:{input:i.input+s.input,cached:i.cached+s.cached,output:i.output+s.output,confidence:i.confidence==="attributed"&&s.confidence==="attributed"?"attributed":"estimated"}}return n}function Es(e){let t=new Map;for(let r of e)t.has(r.archivedKey)||t.set(r.archivedKey,r);let n=new Map;for(let r of t.values()){let o=Y_(r);n.set(o,X_(n.get(o),r))}return[...n.values()]}var il=y(()=>{"use strict"});var YL,hm=y(()=>{"use strict";w();YL=f("SkillStore")});async function ll(e){let t=G(e);return await(0,be.mkdir)(t,{recursive:!0}),t}function Z(){return(0,Br.join)((0,wm.homedir)(),".jolli","jollimemory")}async function rn(e){let t=(0,Br.join)(e,Em);try{let n=await(0,be.readFile)(t,"utf-8"),r=JSON.parse(n);return tk(ek(r))}catch{return nn.debug("No config file found in %s, using defaults",e),{}}}function ek(e){if(e.syncEnabled===void 0)return e;let{syncEnabled:t,...n}=e;return n.autoSyncEnabled===void 0?{...n,autoSyncEnabled:t}:n}function tk(e){let t=e.jolliApiKey?$t(e.jolliApiKey)?.u:void 0;if(!t||!kp(t))return e;nn.info("Ignoring stored credential for a retired Jolli host \u2014 sign in again");let{authToken:n,jolliApiKey:r,...o}=e;if(o.aiProvider!=="jolli")return o;let{aiProvider:s,...i}=o;return i}function nk(e,t){return!("localAgentTool"in t)||"localAgentPath"in t||(e.localAgentTool??"claude-code")===(t.localAgentTool??"claude-code")||e.localAgentPath===void 0?t:(nn.info("Clearing localAgentPath (was set for %s, switching to %s)",e.localAgentTool??"claude-code",t.localAgentTool),{...t,localAgentPath:void 0})}async function Wr(e,t){await Ma(t,async()=>{await Sm(e,t)}),nn.info("Config saved to %s",t)}async function Ss(e){return rk(e,Z())}async function rk(e,t){return Ma(t,async()=>{let{update:n,result:r}=e(await rn(t));return n!==null&&(await Sm(n,t),nn.info("Config saved to %s",t)),r})}async function Sm(e,t){let n=await rn(t),r={...n,...nk(n,e)};await v((0,Br.join)(t,Em),JSON.stringify(r,null,"	"))}async function de(){return rn(Z())}async function gt(e){return Wr(e,Z())}async function bm(){return ok(Z())}async function ok(e){let t=await rn(e);if(t.installId)return{installId:t.installId,created:!1};let n=(0,Br.join)(e,Z_),r=(0,Ur.randomUUID)();await(0,be.mkdir)(e,{recursive:!0});let o,s,i=`${n}.${(0,Ur.randomUUID)()}.tmp`;try{await(0,be.writeFile)(i,r,{flag:"wx"});try{await(0,be.link)(i,n),o=r,s=!0}catch{o=await ym(n,r),s=!1}}catch(a){nn.warn("could not stage the install-id sentinel: %s",R(a)),o=await ym(n,r),s=!1}finally{await(0,be.rm)(i,{force:!0}).catch(()=>{})}return t.installId!==o&&await Wr({installId:o},e).catch(a=>{nn.warn("could not persist the install id: %s",R(a))}),{installId:o,created:s}}async function ym(e,t){try{let n=(await(0,be.readFile)(e,"utf-8")).trim();return n.length>0?n:t}catch{return t}}function al(e,t){let n={...e},r=!1;for(let o of t)o in n&&(delete n[o],r=!0);return{value:n,changed:r}}function Tm(e){let t=!1,n={};for(let[i,a]of Object.entries(e.plans??{})){if(a.ignored===!0){t=!0;continue}let l=al(a,sk);l.changed&&(t=!0),n[i]=l.value}let r;if(e.notes!==void 0){r={};for(let[i,a]of Object.entries(e.notes)){if(a.ignored===!0){t=!0;continue}let l=al(a,ik);l.changed&&(t=!0),r[i]=l.value}}let o;if(e.references!==void 0){o={};for(let[i,a]of Object.entries(e.references)){let l=a;if(l.ignored===!0||l.commitHash!=null||l.contentHashAtCommit!==void 0){t=!0;continue}let c=al(a,ak);c.changed&&(t=!0),o[i]=c.value}}return{registry:{version:1,plans:n,...r!==void 0?{notes:r}:{},...o!==void 0?{references:o}:{},...e.skills!==void 0?{skills:e.skills}:{}},changed:t}}var Ur,be,wm,Br,nn,Em,Z_,m0,f0,g0,h0,sk,ik,ak,ue=y(()=>{"use strict";Ur=require("node:crypto"),be=require("node:fs/promises"),wm=require("node:os"),Br=require("node:path");w();ms();Q();Wn();Ze();Hr();il();hm();nn=f("SessionTracker"),Em="config.json",Z_="install-id",m0=2880*60*1e3;f0=2880*60*1e3,g0=10080*60*1e3,h0=(0,Ur.randomBytes)(4).toString("hex"),sk=["ignored","branch","editCount"],ik=["ignored","branch"],ak=["ignored","branch","commitHash","contentHashAtCommit"]});function tt(e=process.versions.node){let t=/^(\d+)\.(\d+)/.exec(e);if(!t)return!1;let n=Number.parseInt(t[1],10),r=Number.parseInt(t[2],10);return n>ht.major?!0:n<ht.major?!1:r>=ht.minor}function Ft(e){let t=e,n=t?.message??String(e),r=t?.code;return r==="ENOENT"?null:r==="EACCES"||r==="EPERM"?{kind:"permission",message:n}:/SQLITE_CORRUPT|SQLITE_NOTADB|file is not a database/i.test(n)?{kind:"corrupt",message:n}:/SQLITE_BUSY|SQLITE_LOCKED|database is locked/i.test(n)?{kind:"locked",message:n}:/no such table|no such column/i.test(n)?{kind:"schema",message:n}:/SQLITE_CANTOPEN|unable to open/i.test(n)?{kind:"permission",message:n}:{kind:"unknown",message:n}}var ht,Be=y(()=>{"use strict";ht={major:22,minor:13}});function dk(){return ck.width}async function Gn(e,t,n=dk()){let r=new Array(e.length),o=0,s=Math.max(1,Math.min(n,e.length)),i=Array.from({length:s},async()=>{for(;;){let a=o++;if(a>=e.length)return;r[a]=await t(e[a],a)}});return await Promise.all(i),r}var ul,ck,qn=y(()=>{"use strict";ul=class{constructor(){this.slots=8;this.bytesCap=67108864;this.slotsInUse=0;this.bytesInUse=0;this.waiting=[]}get width(){return this.slots}configure(t){t.slots!==void 0&&(this.slots=Math.max(1,Math.floor(t.slots))),t.bytesInFlight!==void 0&&(this.bytesCap=Math.max(0,Math.floor(t.bytesInFlight))),this.pump()}reset(){this.slots=8,this.bytesCap=67108864,this.pump()}async run(t,n){let r=await this.acquire(Math.max(0,t));try{return await n()}finally{this.slotsInUse--,this.bytesInUse-=r,this.pump()}}clamp(t){return Math.min(t,this.bytesCap)}fits(t){return this.slotsInUse<this.slots&&this.bytesInUse+this.clamp(t)<=this.bytesCap}acquire(t){return this.waiting.length===0&&this.fits(t)?Promise.resolve(this.take(t)):new Promise(n=>{this.waiting.push({want:t,wake:n})})}take(t){let n=this.clamp(t);return this.slotsInUse++,this.bytesInUse+=n,n}pump(){for(;this.waiting.length>0&&this.fits(this.waiting[0].want);){let t=this.waiting.shift();t.wake(this.take(t.want))}}},ck=new ul});function Af(e){if((0,vf.platform)()==="win32")try{Wu("attrib",["+h",e],{timeout:2e3})}catch{}}var vf,xf=y(()=>{"use strict";vf=require("node:os");ke()});var Cf,z,ve,zn,fe,Ps=y(()=>{"use strict";Cf=require("node:crypto"),z=require("node:fs"),ve=require("node:path");w();xf();ae();zn=f("MetadataManager"),fe=class e{constructor(t){this.jolliDir=t;this.manifestPath=(0,ve.join)(t,"manifest.json"),this.branchesPath=(0,ve.join)(t,"branches.json"),this.configPath=(0,ve.join)(t,"config.json"),this.migrationPath=(0,ve.join)(t,"migration.json"),this.indexPath=(0,ve.join)(t,"index.json")}ensure(){(0,z.mkdirSync)(this.jolliDir,{recursive:!0})!==void 0&&Af(this.jolliDir),(0,z.existsSync)(this.manifestPath)||this.atomicWrite(this.manifestPath,JSON.stringify({version:1,files:[]},null,"	")),(0,z.existsSync)(this.branchesPath)||this.atomicWrite(this.branchesPath,JSON.stringify({version:1,mappings:[]},null,"	")),(0,z.existsSync)(this.configPath)||this.atomicWrite(this.configPath,JSON.stringify({version:1,sortOrder:"date"},null,"	"))}readManifest(){return this.readJson(this.manifestPath)??{version:1,files:[]}}updateManifest(t){let n=this.readManifest(),r=n.files.filter(o=>o.fileId!==t.fileId);r.push(t),this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:r},null,"	")),zn.info("Manifest updated: %s (%s)",t.path,t.type)}removeFromManifest(t){let n=this.readManifest(),r=n.files.filter(o=>o.fileId!==t);return r.length===n.files.length?!1:(this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:r},null,"	")),!0)}unregisterFilesByType(t){let n=this.readManifest(),r=n.files.filter(s=>s.type!==t),o=n.files.length-r.length;return o===0?0:(this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:r},null,"	")),zn.info("Manifest unregistered %d entries of type=%s",o,t),o)}replaceFiles(t){let n=this.readManifest();this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:[...t]},null,"	"))}findByPath(t){return this.readManifest().files.find(n=>n.path===t)}findById(t){return this.readManifest().files.find(n=>n.fileId===t)}updatePath(t,n){let r=this.readManifest();if(!r.files.find(i=>i.fileId===t))return!1;let s=r.files.map(i=>i.fileId===t?{...i,path:n}:i);return this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:s},null,"	")),!0}resolveFolderForBranch(t){let n=this.readBranches(),r=n.mappings.find(a=>a.branch===t);if(r)return r.folder;let o=e.transcodeBranchName(t),s={folder:o,branch:t,createdAt:new Date().toISOString()},i={...n,mappings:[...n.mappings,s]};return this.atomicWrite(this.branchesPath,JSON.stringify(i,null,"	")),zn.info("Branch mapping created: %s \u2192 %s",t,o),o}removeBranchMapping(t){let n=this.readBranches(),r=n.mappings.filter(o=>o.branch!==t);return r.length===n.mappings.length?!1:(this.atomicWrite(this.branchesPath,JSON.stringify({...n,mappings:r},null,"	")),zn.info("Branch mapping removed: %s (no remaining head)",t),!0)}renameBranchFolder(t,n){let r=this.readBranches(),o=r.mappings.map(l=>l.folder===t?{...l,folder:n}:l);this.atomicWrite(this.branchesPath,JSON.stringify({...r,mappings:o},null,"	"));let s=this.readManifest(),i=0,a=s.files.map(l=>l.path.startsWith(`${t}/`)?(i++,{...l,path:l.path.replace(`${t}/`,`${n}/`)}):l);return i>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...s,files:a},null,"	")),i}removeBranchFolder(t){let n=this.readBranches();this.atomicWrite(this.branchesPath,JSON.stringify({...n,mappings:n.mappings.filter(i=>i.folder!==t)},null,"	"));let r=this.readManifest(),o=r.files.filter(i=>!i.path.startsWith(`${t}/`)),s=r.files.length-o.length;return s>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:o},null,"	")),s}unregisterBranches(t){let n=new Set(t);if(n.size===0)return 0;let r=this.readBranches(),o=r.mappings.filter(i=>!n.has(i.branch)),s=r.mappings.length-o.length;return s===0?0:(this.atomicWrite(this.branchesPath,JSON.stringify({...r,mappings:o},null,"	")),zn.info("Branch mappings unregistered: %d",s),s)}readBranches(){return this.readJson(this.branchesPath)??{version:1,mappings:[]}}listBranchMappings(){return this.readBranches().mappings}folderToBranch(t){try{return this.listBranchMappings().find(n=>n.folder===t)?.branch??t}catch{return t}}listIndexHeads(){let t=this.readJson(this.indexPath);return!t||!Array.isArray(t.entries)?[]:t.entries.filter(n=>typeof n?.commitHash=="string"&&typeof n.branch=="string"&&(n.parentCommitHash===null||typeof n.parentCommitHash=="string")&&n.parentCommitHash===null)}readIndex(){return this.readJson(this.indexPath)}readConfig(){return this.readJson(this.configPath)??{version:1,sortOrder:"date"}}saveConfig(t){this.atomicWrite(this.configPath,JSON.stringify(t,null,"	"))}readMigrationState(){return this.readJson(this.migrationPath)}saveMigrationState(t){this.atomicWrite(this.migrationPath,JSON.stringify(t,null,"	"))}reconcile(t){let n=this.readManifest();if(n.files.length===0||!n.files.some(a=>!(0,z.existsSync)((0,ve.join)(t,a.path))))return 0;let o=new Map;try{this.walkDir(t,t,o)}catch{}let s=0,i=[];for(let a of n.files){let l=(0,ve.join)(t,a.path);if((0,z.existsSync)(l))i.push(a);else{let c=o.get(a.fingerprint);c&&c!==a.path?(i.push({...a,path:c}),s++):(zn.warn("Manifest entry '%s' (id=%s) not found on disk \u2014 keeping entry to avoid data loss",a.path,a.fileId),i.push(a))}}return s>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:i},null,"	")),s}walkDir(t,n,r){for(let o of(0,z.readdirSync)(t,{withFileTypes:!0})){if(o.name.startsWith("."))continue;let s=(0,ve.join)(t,o.name);if(o.isDirectory())this.walkDir(s,n,r);else if(o.name.endsWith(".md"))try{let i=(0,z.readFileSync)(s,"utf-8"),a=e.sha256(i);r.set(a,Ue((0,ve.relative)(n,s)))}catch{}}}static transcodeBranchName(t){let n=t.replace(/[/\\:*?~^]/g,"-");return n=n.replace(/-{3,}/g,"-"),n=n.replace(/\.\./g,"--"),n=n.replace(/^[.-]+|[.-]+$/g,""),n||"default"}static sha256(t){return(0,Cf.createHash)("sha256").update(t,"utf-8").digest("hex")}readJson(t){if(!(0,z.existsSync)(t))return null;try{return JSON.parse((0,z.readFileSync)(t,"utf-8"))}catch{return null}}atomicWrite(t,n){let r=(0,ve.dirname)(t);(0,z.mkdirSync)(r,{recursive:!0});let o=`${t}.tmp`;(0,z.writeFileSync)(o,n,"utf-8"),(0,z.renameSync)(o,t)}}});function gR(e,t){if(process.env.VITEST)return null;let n=t?`${t}@${e}`:e;try{return Ee("ssh",["-G",n],{encoding:"utf-8",timeout:pR,stdio:["ignore","pipe","pipe"]})}catch(r){return uR.debug("ssh -G %s failed: %s",n,r instanceof Error?r.message:String(r)),null}}function Nf(e,t){let n=new RegExp(`^${t}\\s+(\\S+)`,"i");for(let r of e.split(/\r?\n/)){let o=r.match(n);if(o?.[1])return o[1]}return null}function Qn(e,t){if(!e)return{host:e,port:"",endpointRemapped:!1};let n=`${t??""}\0${e}`,r=If.get(n);if(r!==void 0)return r;let o=e,s="",i=fR(e,t);if(i){let c=Nf(i,"hostname");c&&(o=c);let d=Nf(i,"port");d&&(s=d)}let a=mR.get(o.toLowerCase()),l=a?{host:a,port:"",endpointRemapped:!0}:{host:o,port:s,endpointRemapped:!1};return If.set(n,l),l}function Zn(e){return e.includes(":")&&!e.startsWith("[")?`[${e}]`:e}var uR,pR,mR,If,fR,Ol=y(()=>{"use strict";w();ke();uR=f("SshAliasResolver"),pR=5e3,mR=new Map([["ssh.github.com","github.com"],["altssh.gitlab.com","gitlab.com"],["altssh.bitbucket.org","bitbucket.org"]]),If=new Map,fR=gR});function Pf(){return(0,oe.join)((0,Lf.homedir)(),"Documents","jolli")}function Ml(e){return e?yR(e)?e:(hR.warn("Invalid customPath '%s': must be absolute and not contain '..'. Falling back to default.",e),Pf()):Pf()}function yR(e){return e?(0,oe.isAbsolute)(e)&&!e.includes(".."):!0}function Mf(e,t,n){let r=Ml(n),o=(0,oe.join)(r,e);if(!(0,jt.existsSync)(o)){let i=Jf(r,e,t).match;return i||(Ll(o,e,t),o)}let s=qf(o);return s&&Uf(s,t,e)?o:s&&Gf(o,s)?(Ll(o,e,t),o):TR(r,e,t)}function $f(e){let t=Fl(e,["config","--get","remote.origin.url"]);if(t){let r=t.match(/\/([^/]+?)(?:\.git)?$/);if(r?.[1])return r[1]}let n=Ff(e);return n?(0,oe.basename)(n):(0,oe.basename)(e)||"unknown"}function Ff(e){let t=Fl(e,["rev-parse","--git-common-dir"]);if(!t)return null;let n=(0,oe.isAbsolute)(t)?t:(0,oe.join)(e,t),r=(0,oe.dirname)(n);return r&&r!=="/"&&r!=="."?r:null}function wR(e,t){if(!(0,oe.basename)(e))return{claimable:!1,blocker:"not-a-project"};let n=Ff(e);if(!n)return{claimable:!1,blocker:"not-a-project"};let r;try{r=Ml(t)}catch{return{claimable:!1,blocker:"unresolvable-folder"}}return _a(r,n)?{claimable:!1,blocker:"folder-inside-repo"}:{claimable:!0}}function $l(e,t){return wR(e,t).claimable}function jf(){let e=Number(process.env.JOLLI_GIT_CMD_TIMEOUT_MS);return Number.isFinite(e)&&e>0?e:3e4}function ER(){return Math.min(jf(),5e3)}function SR(e){return typeof e=="object"&&e!==null&&e.code==="ETIMEDOUT"}function Of(e,t,n=jf()){return Ee("git",t,{cwd:e,encoding:"utf-8",timeout:n,stdio:["ignore","pipe","pipe"]}).trim()||null}function Fl(e,t){try{return Of(e,t)}catch(n){if(!SR(n))return null;try{return Of(e,t,ER())}catch{return null}}}function Hf(e){return Fl(e,["remote","get-url","origin"])}function Uf(e,t,n){return e.remoteUrl&&t?Df(e.remoteUrl)===Df(t):!e.remoteUrl&&!t?e.repoName==null||e.repoName===n:!1}function Df(e){return Wf(e).replace(/\/+$/,"").replace(/\.git$/,"").toLowerCase()}function Xr(e,t){return bR.has(e)?t:""}function Wf(e){let t=e.match(/^(?:git\+)?ssh:\/\/(?:([^@/]+)@)?([^/:]+)(?::(\d+))?\/(.+)$/i);if(t){let o=Qn(t[2],t[1]||void 0),s=o.endpointRemapped?"":t[3]??o.port,i=Xr(o.host.toLowerCase(),s);return`https://${Zn(o.host)}${Dl(i,"22")}/${t[4]}`}let n=e.match(/^git:\/\/([^/:]+)(?::(\d+))?\/(.+)$/i);if(n)return`https://${n[1]}${Dl(n[2],"9418")}/${n[3]}`;let r=e.match(/^([^@/:]+)@([^/:]+):(.+)$/);if(r){let o=Qn(r[2],r[1]||void 0),s=Xr(o.host.toLowerCase(),o.port);return`https://${Zn(o.host)}${Dl(s,"22")}/${r[3]}`}return e}function Dl(e,t){return!e||e===t?"":`:${e}`}function Jf(e,t,n){let r=null,o=null,s=null;for(let i=2;i<=99;i++){let a=(0,oe.join)(e,`${t}-${i}`);if(!(0,jt.existsSync)(a)){s===null&&(s=a);continue}let l=qf(a);if(l&&Uf(l,n,t)){r=a;break}l&&o===null&&Gf(a,l)&&(o=a)}return{match:r,stub:o,firstUnused:s}}function TR(e,t,n){let r=Jf(e,t,n);if(r.match)return r.match;let o=r.stub??r.firstUnused??(0,oe.join)(e,`${t}-${Date.now()}`);return Ll(o,t,n),o}function Ll(e,t,n){if(V())return;let r=new fe((0,oe.join)(e,".jolli"));r.ensure();let o=r.readConfig();r.saveConfig({...o,remoteUrl:n??void 0,repoName:t})}function Gf(e,t){return t.remoteUrl==null&&t.repoName==null}function qf(e){let t=(0,oe.join)(e,".jolli","config.json");if(!(0,jt.existsSync)(t))return null;try{return JSON.parse((0,jt.readFileSync)(t,"utf-8"))}catch{return null}}var jt,Lf,oe,hR,Bf,bR,zr=y(()=>{"use strict";jt=require("node:fs"),Lf=require("node:os"),oe=require("node:path");w();ke();Ps();ae();Ol();hR=f("KBPathResolver");Bf=new Set(["github.com","gitlab.com","bitbucket.org"]),bR=new Set(["github.com","gitlab.com","bitbucket.org"])});async function Wl(e){let t=await Y(["config","--get","remote.origin.url"],e),n=t.exitCode===0?t.stdout.trim():"";return n.length===0?Qr(e):og(n,e)}function og(e,t){let n=e.trim();if(n.length===0)return Qr(t);let r=/^([A-Za-z0-9_.+-]+@)([^:/\s]+):(.+)$/.exec(n);if(r&&!n.includes("://")){let i=Qn(r[2],r[1].slice(0,-1)||void 0),a=i.host.toLowerCase(),l=ng(a,tg(r[3])),c=rg("ssh",Xr(a,i.port));return`https://${Zn(a)}${c}/${l}`}let o;try{o=new URL(n)}catch{return Qr(t)}let s=o.protocol.replace(/:$/,"").toLowerCase();if(s==="ssh"||s==="git"||s==="http"||s==="https"){let a=s==="ssh"?Qn(o.hostname,o.username||void 0):{host:o.hostname,port:"",endpointRemapped:!1},l=a.host.toLowerCase(),c=ng(l,tg(o.pathname.replace(/^\/+/,""))),d=a.endpointRemapped?"":o.port!==""?o.port:a.port,u=s==="ssh"?Xr(l,d):d,p=rg(s,u);return`https://${Zn(l)}${p}/${c}`}return Qr(s==="file"?o.pathname:t)}function Qr(e){let t=Ln(Ue(e));return t.length===0?"file:///":t.startsWith("/")?`file://${t}`:`file:///${t}`}function tg(e){let t=Ln(e);return t.toLowerCase().endsWith(".git")&&(t=t.slice(0,-4)),Ln(t)}function ng(e,t){return Bf.has(e)?t.toLowerCase():t}function rg(e,t){return t.length===0?"":e==="ssh"||e==="git"?t===xR[e]?"":`:${t}`:`:${t}`}var xR,$s=y(()=>{"use strict";Se();zr();ae();Ol();xR={ssh:"22",git:"9418"}});function Jl(){return"codex-plugin"}var Ht,er=y(()=>{"use strict";Ht="codex-plugin/1.0.6"});function j(e,t,n,r){if(!wg.test(t))throw new Error(`unsafe table name in migration: ${t}`);if(!wg.test(n))throw new Error(`unsafe column name in migration: ${n}`);if(!VR.test(r))throw new Error(`unsafe column declaration in migration: ${r}`);e.prepare("SELECT name FROM pragma_table_info(?)").all(t).some(s=>s.name===n)||e.exec(`ALTER TABLE ${t} ADD COLUMN ${n} ${r};`)}var F,wg,VR,B=y(()=>{"use strict";F=(e,t)=>({name:e,sql:t,run:n=>n.exec(t)}),wg=/^[A-Za-z_][A-Za-z0-9_]*$/,VR=/^[A-Za-z0-9_ '.-]+$/});var YR,XR,Eg,Sg=y(()=>{"use strict";B();YR=`
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
`,XR=`
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
`,Eg=F("BASELINE_DDL",YR+`
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
`+XR)});var bg,Tg=y(()=>{"use strict";B();bg=F("RECALL_RECEIPTS_DDL",`
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
`)});var _g,kg=y(()=>{"use strict";B();_g=F("SKILL_CONTEXT_KIND_DDL",`
INSERT OR IGNORE INTO context_kinds (kind) VALUES ('skill');
`)});var Rg,vg=y(()=>{"use strict";B();Rg={name:"EVENT_FAILED_KIND_DDL",run:e=>j(e,"events_raw","failed_kind","TEXT")}});var Ag,xg=y(()=>{"use strict";B();Ag={name:"TOOL_CALL_TIME_DDL",run:e=>j(e,"session_tool_use","last_call_at_ms","INTEGER")}});var Cg,Ig=y(()=>{"use strict";B();Cg=F("SCHEMA_MIGRATIONS_DDL",`
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
`)});var Ng,Pg=y(()=>{"use strict";B();Ng=F("REPOS_DELETE_ALLOWED_DDL",`
DROP TRIGGER IF EXISTS repos_no_delete;
`)});function ov(e){j(e,"sessions","written_at_ms","INTEGER NOT NULL DEFAULT 0"),j(e,"session_model_usage","updated_at_ms","INTEGER NOT NULL DEFAULT 0"),j(e,"session_tool_use","updated_at_ms","INTEGER NOT NULL DEFAULT 0"),j(e,"recall_receipts","updated_at_ms","INTEGER NOT NULL DEFAULT 0"),j(e,"commits","written_at_ms","INTEGER NOT NULL DEFAULT 0"),e.exec(zR),e.exec(ZR),e.exec(ev),e.exec(tv),e.exec(rv),e.exec(nv)}var zR,QR,ZR,ev,tv,nv,rv,Og,Dg=y(()=>{"use strict";B();zR=`
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
`,QR=`
CREATE INDEX IF NOT EXISTS ix_stats_daily_day ON stats_daily(tz, day);
`,ZR=`
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
${QR}
`,ev=`
CREATE INDEX IF NOT EXISTS ix_sessions_written ON sessions(written_at_ms);
CREATE INDEX IF NOT EXISTS ix_smu_sync ON session_model_usage(updated_at_ms);
CREATE INDEX IF NOT EXISTS ix_stu_sync ON session_tool_use(updated_at_ms);
CREATE INDEX IF NOT EXISTS ix_recall_receipts_sync ON recall_receipts(updated_at_ms);
CREATE INDEX IF NOT EXISTS ix_commits_written ON commits(written_at_ms);
CREATE INDEX IF NOT EXISTS ix_mem_written ON memories(written_at_ms);
`,tv=`
CREATE INDEX IF NOT EXISTS ix_sessions_keyset ON sessions(written_at_ms, event_id);
CREATE INDEX IF NOT EXISTS ix_smu_keyset ON session_model_usage(updated_at_ms, session_event_id, model);
CREATE INDEX IF NOT EXISTS ix_stu_keyset ON session_tool_use(updated_at_ms, session_event_id, tool_name, kind);
CREATE INDEX IF NOT EXISTS ix_recall_receipts_keyset ON recall_receipts(updated_at_ms, receipt_id);
`,nv=`
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
`,rv=`
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
`;Og={name:"SESSION_STATS_SYNC_DDL",run:ov}});var Lg,Mg=y(()=>{"use strict";B();Lg=F("SESSION_ACTIVITY_DDL",`
CREATE TABLE IF NOT EXISTS session_activity (
  session_event_id TEXT NOT NULL REFERENCES sessions(event_id) ON DELETE CASCADE,
  bucket_ms        INTEGER NOT NULL,
  recorded_at_ms   INTEGER NOT NULL,
  PRIMARY KEY (session_event_id, bucket_ms)
) STRICT;
CREATE INDEX IF NOT EXISTS ix_activity_bucket ON session_activity(bucket_ms);
CREATE INDEX IF NOT EXISTS ix_activity_recorded ON session_activity(recorded_at_ms);
`)});var $g,Fg=y(()=>{"use strict";B();$g={name:"SKILL_TOKEN_USAGE_DDL",run:e=>{j(e,"session_tool_use","input_tokens","INTEGER"),j(e,"session_tool_use","output_tokens","INTEGER"),j(e,"session_tool_use","cached_tokens","INTEGER"),j(e,"session_tool_use","usage_confidence","TEXT")}}});var jg,Hg=y(()=>{"use strict";B();jg=F("SKILL_INVOCATIONS_DDL",`
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
`)});var Ug,Bg=y(()=>{"use strict";B();Ug={name:"SKILL_PLUGIN_DDL",run:e=>j(e,"session_tool_use","plugin","TEXT")}});var Wg,Jg=y(()=>{"use strict";B();Wg={name:"SKILL_ORIGIN_ROOT_DDL",run:e=>j(e,"session_tool_use","origin_root","TEXT")}});var Gg,qg=y(()=>{"use strict";B();Gg=F("2026-08-25-0000-memory-transcripts-covering-index",`
CREATE INDEX IF NOT EXISTS ix_mt_transcript_covering
  ON memory_transcripts(repo_id, transcript_id, commit_hash);
`)});var Kg,Vg=y(()=>{"use strict";B();Kg={name:"2026-08-25-0001-memory-reachable",run:e=>j(e,"memories","reachable","INTEGER NOT NULL DEFAULT 1")}});var Yg,Xg=y(()=>{"use strict";B();Yg={name:"2026-08-25-0002-commit-reachable",run:e=>j(e,"commits","reachable","INTEGER NOT NULL DEFAULT 1")}});var zg,Qg=y(()=>{"use strict";B();zg=F("2026-08-26-0000-memory-lookups",`
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
`)});var Zg,eh=y(()=>{"use strict";B();Zg=F("2026-08-27-0804-session-activity-keyset-index",`
CREATE INDEX IF NOT EXISTS ix_activity_keyset
  ON session_activity(recorded_at_ms, session_event_id, bucket_ms);
`)});var th,nh=y(()=>{"use strict";B();th=F("2026-08-27-0824-session-turns",`
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
`)});var rh,oh=y(()=>{"use strict";B();rh={name:"2026-08-27-0922-skill-invocation-sync-stamp",run:e=>j(e,"skill_invocations","updated_at_ms","INTEGER NOT NULL DEFAULT 0")}});var sh,ih=y(()=>{"use strict";B();sh=F("2026-08-28-0516-session-turns-keyset-index",`
CREATE INDEX IF NOT EXISTS ix_turns_keyset
  ON session_turns(recorded_at_ms, session_event_id, slice_id, seq);
`)});var ah,lh=y(()=>{"use strict";B();ah=F("2026-08-28-0910-skill-invocation-keyset-index",`
CREATE INDEX IF NOT EXISTS ix_si_keyset
  ON skill_invocations(updated_at_ms, session_event_id, skill_name, at_ms);
`)});var js,ec=y(()=>{"use strict";Sg();Tg();kg();vg();xg();Ig();Pg();Dg();Mg();Fg();Hg();Bg();Jg();qg();Vg();Xg();Qg();eh();nh();oh();ih();lh();B();js=[Eg,bg,_g,Rg,Ag,Cg,Ng,Og,Lg,$g,jg,Ug,Wg,Gg,Kg,Yg,zg,Zg,th,rh,sh,ah]});function iv(e=process.env){let t=e.JOLLI_SLOW_SQL_MS?.trim();if(t===void 0||t==="")return ch;if(t.toLowerCase()==="off")return null;let n=Number(t);return Number.isFinite(n)&&n>=0?n:ch}function av(e){let t=e.replace(/\s+/g," ").trim();return t.length>dh?`${t.slice(0,dh)}\u2026`:t}function lv(e){let t=e.rows===void 0?"":` rows=${e.rows}`;sv.info("%dms %s [%s] params=%d%s :: %s",Math.round(e.ms),e.method,e.role,e.params,t,e.sql)}function uh(e,t={}){let n="thresholdMs"in t?t.thresholdMs:iv();if(n==null)return e;let r=t.now??(()=>performance.now()),o=t.onSlow??lv,s=t.role??"rw",i=(l,c,d,u)=>{let p=r(),m;try{let g=u();return l==="all"&&Array.isArray(g)&&(m=g.length),g}finally{let g=r()-p;g>=n&&o({ms:g,method:l,sql:av(c),params:d,role:s,...m===void 0?{}:{rows:m}})}};return{exec:l=>i("exec",l,0,()=>e.exec(l)),close:()=>e.close(),prepare:l=>{let c=e.prepare(l);return{all:(...d)=>i("all",l,d.length,()=>c.all(...d)),get:(...d)=>i("get",l,d.length,()=>c.get(...d)),run:(...d)=>i("run",l,d.length,()=>c.run(...d))}}}}var sv,ch,dh,ph=y(()=>{"use strict";w();sv=f("SlowQuery"),ch=200,dh=240});function to(){return(0,Bs.join)(Z(),"jollimemory.db")}function cn(e=process.versions.node){let t=/^(\d+)\.(\d+)/.exec(e);if(!t)return!1;let n=Number.parseInt(t[1],10),r=Number.parseInt(t[2],10);return n>eo.major?!0:n<eo.major?!1:r>=eo.minor}function pv(e){try{return(e.prepare("SELECT COUNT(*) AS n FROM sqlite_master WHERE type = 'table' AND name = 'schema_migrations'").get()?.n??0)>0?"present":"absent"}catch{return"unknown"}}function rc(e){try{return{kind:"rows",rows:e.prepare("SELECT seq, slot, name, outcome, applied_by, applied_at_ms, duration_ms, ddl FROM schema_migrations ORDER BY seq").all()}}catch(t){let n=pv(e);return n==="absent"?{kind:"none"}:{kind:"unreadable",reason:R(t),tableConfirmed:n==="present"}}}function mh(e){let t=rc(e);return t.kind==="rows"?t.rows:void 0}function Hs(e,t){e.prepare(`INSERT INTO schema_migrations (slot, name, outcome, applied_by, applied_at_ms, duration_ms, ddl)
		 VALUES (?, ?, ?, ?, ?, ?, ?)`).run(t.slot,t.name,t.outcome,t.appliedBy,t.atMs,t.durationMs,t.ddl)}function mv(e){let t=new Map;for(let n of e){let r=t.get(n.name);(!r||n.seq>r.seq)&&t.set(n.name,n)}return t}function tc(e){return e.sql??""}function fv(e){let t=rc(e);if(t.kind==="none")return;if(t.kind==="unreadable"){Us.has(fh)||(Us.add(fh),Ut.warn(t.tableConfirmed?"the schema_migrations table exists but could not be read (%s) \u2014 drift verification is skipped; run `jolli doctor --schema-log`":"the database could not be queried for its migration log (%s) \u2014 drift verification is skipped; run `jolli doctor --schema-log`",t.reason));return}let n=t.rows,r=new Set(js.map(o=>o.name));for(let[o,s]of mv(n))r.has(o)||Us.has(o)||(Us.add(o),Ut.warn("migration %s was touched by %s but is unknown to this build (%s) \u2014 the database has been opened by another build",o,s.applied_by,Ht))}function gv(e,t={}){let n=t.now??Date.now,r=t.appliedBy??Ht,o=rc(e),s=new Set;if(o.kind==="rows")for(let c of o.rows)(c.outcome==="applied"||c.outcome==="baseline")&&s.add(c.name);else o.kind==="none"?Ut.info("no migration log in this database \u2014 replaying every entry (all are re-runnable)"):Ut.warn(o.tableConfirmed?"the schema_migrations table exists but could not be read (%s) \u2014 replaying every entry and recording nothing":"the database could not be queried for its migration log (%s) \u2014 replaying every entry and recording nothing",o.reason);let i=js.map((c,d)=>({m:c,slot:d})).filter(({m:c})=>!s.has(c.name));if(i.length===0)return;let a=[],l=()=>{for(let c of a)Hs(e,c);a.length=0};e.exec("PRAGMA foreign_keys = OFF");try{for(let{m:c,slot:d}of i){let u=n();e.exec("BEGIN IMMEDIATE");try{if(mh(e)?.some(g=>g.name===c.name&&(g.outcome==="applied"||g.outcome==="baseline"))){l(),Hs(e,{slot:d,name:c.name,outcome:"skipped",appliedBy:r,atMs:n(),durationMs:0,ddl:tc(c)}),e.exec("COMMIT");continue}c.run(e);let m={slot:d,name:c.name,outcome:"applied",appliedBy:r,atMs:n(),durationMs:n()-u,ddl:tc(c)};mh(e)?(l(),Hs(e,m)):a.push(m),e.exec("COMMIT")}catch(p){try{e.exec("ROLLBACK")}catch{}try{e.prepare("DELETE FROM schema_migrations WHERE name = ? AND outcome = 'failed'").run(c.name),Hs(e,{slot:d,name:c.name,outcome:"failed",appliedBy:r,atMs:n(),durationMs:n()-u,ddl:tc(c)})}catch(m){Ut.debug("could not record the failed migration %s: %s",c.name,R(m))}throw p}}}finally{e.exec("PRAGMA foreign_keys = ON")}Ut.info("dashboard schema migrated: %s",i.map(({m:c})=>c.name).join(", "))}function hv(e){let t=(0,Bs.dirname)(e);try{(0,St.mkdirSync)(t,{recursive:!0,mode:448}),((0,St.statSync)(t).mode&511)!==448&&(0,St.chmodSync)(t,448)}catch(n){Ut.warn("could not restrict %s to owner-only: %s",t,R(n))}}function yv(e){for(let t of[e,`${e}-wal`,`${e}-shm`])try{((0,St.statSync)(t).mode&511)!==384&&(0,St.chmodSync)(t,384)}catch(n){Zt(n)||Ut.warn("could not restrict %s to 0600: %s",t,R(n))}}async function gh(e,t){if(!cn())throw new nc(process.versions.node);let n=t.dbPath??to(),r=t.maxAttempts??4,o=t.baseDelayMs??50;e||hv(n);let{DatabaseSync:s}=await import("node:sqlite");for(let i=1;;i++){let a;try{a=new s(n,{readOnly:e});for(let l of e?dv:cv)a.exec(l);return a.exec(`PRAGMA busy_timeout = ${t.busyTimeoutMs??uv}`),e||yv(n),uh(a,{role:e?"ro":"rw"})}catch(l){try{a?.close()}catch{}if(Ft(l)?.kind!=="locked"||i>=r)throw l;await new Promise(c=>setTimeout(c,o*2**(i-1)))}}}async function hh(e,t={}){let n=await gh(!1,t);try{return fv(n),gv(n),await e(n)}finally{n.close()}}async function oc(e,t={}){let n=await gh(!0,t);try{return await e(n)}finally{n.close()}}function Ws(e,t){e.exec("BEGIN IMMEDIATE");try{let n=t();return e.exec("COMMIT"),n}catch(n){try{e.exec("ROLLBACK")}catch{}throw n}}var St,Bs,Ut,eo,nc,cv,dv,uv,Us,fh,Bt=y(()=>{"use strict";St=require("node:fs"),Bs=require("node:path");er();ue();Be();w();ec();ph();ec();B();Ut=f("DashboardDb"),eo={major:22,minor:13};nc=class extends Error{constructor(t){super(`The Jolli dashboard needs Node >= ${eo.major}.${eo.minor} for built-in SQLite (running ${t}). Upgrade Node, or run the CLI with --experimental-sqlite.`),this.name="DashboardRuntimeError"}},cv=["PRAGMA journal_mode = WAL","PRAGMA foreign_keys = ON"],dv=["PRAGMA foreign_keys = ON"],uv=2e3;Us=new Set,fh="\0unreadable-log"});function sc(e){let t=s=>{try{return(0,no.statSync)(`${e}${s}`),!0}catch{return!1}},n=t(""),r=t("-wal"),o=t("-shm");return n?r&&o?"healthy-active":r?"healthy-recoverable":"healthy-clean":r||o?"alarm-sidecars-only":"absent"}var no,lU,ic=y(()=>{"use strict";no=require("node:fs");w();lU=f("DbDetection")});async function Sv(e){try{let n=await Wl(e);if(n&&!n.startsWith("file:"))return{identity:n,remoteUrl:n}}catch(n){wv.debug("no canonical remote for %s (%s) \u2014 using path identity",e,R(n))}let t=(0,yh.createHash)("sha256").update(Ue(e)).digest("hex").slice(0,32);return{identity:`${Ev}${t}`}}async function dn(e){return Sv(await Na(e))}var yh,wv,Ev,tr=y(()=>{"use strict";yh=require("node:crypto");Ua();Se();$s();Ze();ae();et();ue();w();wv=f("RepoRegistry"),Ev="local:"});var Eh={};_r(Eh,{hasCutoverRow:()=>Rv,resetCutoverRouterCaches:()=>Tv,resolveCutoverRoute:()=>ro,routeMovesOffOrphanBranch:()=>kv});function Tv(){ac.clear()}async function _v(e){let t=ac.get(e);if(t!==void 0)return t;let{identity:n}=await dn(e);return ac.set(e,n),n}function kv(e){return e?.state==="cutover"||e?.state==="legacy-fenced"}async function wh(e,t){if(!cn())return{kind:"unavailable",reason:`Node ${process.versions.node} lacks flag-free node:sqlite`};let n=sc(t);if(n==="alarm-sidecars-only")return{kind:"unavailable",reason:"database file missing but WAL/SHM remain \u2014 run jolli doctor --recover"};if(n==="absent")return{kind:"unavailable",reason:"database file does not exist"};try{let{DatabaseSync:r}=await import("node:sqlite"),o=new r(t,{readOnly:!0});try{let s=await _v(e),i=o.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(s);if(!i)return{kind:"no-row"};let a=o.prepare("SELECT value FROM repo_state WHERE repo_id = ? AND key = 'cutover'").get(i.id);return a?{kind:"row",record:JSON.parse(a.value)}:{kind:"no-row"}}finally{o.close()}}catch(r){return{kind:"unavailable",reason:R(r)}}}async function Rv(e,t={}){return(await wh(e,t.dbPath??to())).kind==="row"}async function ro(e,t={}){let n=await $r(e).catch(()=>null),r=await wh(e,t.dbPath??to());return r.kind==="row"?{state:"cutover",record:r.record}:n!==null?r.kind==="no-row"?{state:"legacy-fenced"}:{state:"blocked",reason:r.reason}:r.kind==="unavailable"?(bv.warn("database unavailable for un-cutover repo (%s) \u2014 orphan remains authoritative",r.reason),{state:"uncutover",warning:r.reason}):{state:"uncutover"}}var bv,ac,Js=y(()=>{"use strict";et();w();Bt();ic();tr();bv=f("CutoverRouter"),ac=new Map});var Gs,bt,qs=y(()=>{"use strict";w();Se();et();Gs=class extends Error{constructor(t){super(t),this.name="OrphanBranchFrozenError"}},bt=class{constructor(t){this.cwd=t;this.kind="orphan-branch"}async readFile(t){return xa(He,t,this.cwd)}async batchReadFiles(t){return Ca(He,t,this.cwd)}async writeFiles(t,n){if(V())return;if(await $r(this.cwd??process.cwd()).catch(()=>null)!==null)throw new Gs("orphan branch is frozen (cutover fence in place) \u2014 this process holds a pre-cutover storage object; restart it so writes route to the database");let{hasCutoverRow:o}=await Promise.resolve().then(()=>(Js(),Eh));if(await o(this.cwd??process.cwd()).catch(()=>!1))throw new Gs("orphan branch is retired for this repository (cutover committed) \u2014 writes route to the database; re-run the operation from an up-to-date surface");await this.ensure(),await Qu(He,t,n,this.cwd)}async listFiles(t){return[...await Ia(He,t,this.cwd)]}async exists(){return va(He,this.cwd)}async ensure(){await Aa(He,this.cwd)}}});function oo(e){return e.version>=4}function vv(e){return[...e??[]].reverse()}function nr(e){let t=vv(e.children).flatMap(nr),n=(e.topics??[]).map(r=>({...r,commitDate:e.commitDate,generatedAt:e.generatedAt}));return[...t,...n]}function Sh(e){let t=e.stats,n=t?.filesChanged??0,r=t?.insertions??0,o=t?.deletions??0;for(let s of e.children??[]){let i=Sh(s);n+=i.filesChanged,r+=i.insertions,o+=i.deletions}return{filesChanged:n,insertions:r,deletions:o}}function so(e){return e.diffStats?e.diffStats:(e.children?.length??0)>0?Sh(e):e.stats??{filesChanged:0,insertions:0,deletions:0}}function lc(e){let t=e.conversationTurns??0,n=(e.children??[]).reduce((r,o)=>r+lc(o),0);return t+n}function cc(e){let t=e.conversationTokens??0,n=(e.children??[]).reduce((r,o)=>r+cc(o),0);return t+n}function dc(e){let t=e.conversationTokenBreakdown,n={input:t?.input??0,output:t?.output??0,cached:t?.cached??0};return(e.children??[]).reduce((r,o)=>{let s=dc(o);return{input:r.input+s.input,output:r.output+s.output,cached:r.cached+s.cached}},{input:n.input,output:n.output,cached:n.cached})}function uc(e){let t=e.topics?.length??0,n=(e.children??[]).reduce((r,o)=>r+uc(o),0);return t+n}function Ks(e){let t=[],n=r=>{if(!r.children?.length)t.push(r);else for(let o of r.children)n(o)};for(let r of e.children??[])n(r);return t}function Vs(e){return oo(e)?(e.topics??[]).map(t=>({...t,commitDate:e.commitDate,generatedAt:e.generatedAt})):nr(e)}function io(e){let t=[e.commitHash];for(let n of e.children??[])t.push(...io(n));return t}function Wt(e,t){return e.transcripts!==void 0?e.transcripts:io(e).filter(n=>t.has(n))}function Av(e){let t=Ks(e);return t.length<=1?1:new Set(t.map(r=>new Date(r.generatedAt||r.commitDate).toISOString().substring(0,10))).size}function bh(e){let t=Av(e),n=t===1?"1 day":`${t} days`,r=Ks(e);if(r.length<=1)return n;let o=r.map(l=>new Date(l.generatedAt||l.commitDate).getTime()),s=new Date(Math.min(...o)),i=new Date(Math.max(...o)),a=l=>l.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});return`${n} (${a(s)} \u2014 ${a(i)})`}var Jt=y(()=>{"use strict"});function xv(e,t,n){return n.sessionId?e.get(t,n.source??"claude",n.sessionId)?.event_id:void 0}function Cv(e){return e.prepare("SELECT event_id FROM sessions WHERE repo_id = ? AND source = ? AND session_id = ?")}function Ys(e,t,n){e.prepare(`DELETE FROM session_turns
		  WHERE slice_id = ?
		    AND session_event_id IN (SELECT event_id FROM sessions WHERE repo_id = ?)`).run(n,t)}function pc(e,t,n,r,o){let s=e.prepare(`INSERT OR REPLACE INTO session_turns
		 (session_event_id, slice_id, seq, role, ts_ms, kind, recorded_at_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?)`),i=Cv(e),a=e.prepare("DELETE FROM session_turns WHERE session_event_id = ? AND slice_id = ?");for(let l of r){let c=xv(i,t,l);if(c===void 0)continue;a.run(c,n);let d=0;for(let u of l.entries??[]){let p=u.timestamp===void 0?void 0:Date.parse(u.timestamp),m=p===void 0||Number.isNaN(p)?null:p;s.run(c,n,d++,u.role,m,"turn",o)}for(let[u,p]of[["compaction",l.compactions],["test-run",l.testRuns],["turn-abort",l.turnAborts]])for(let m of p??[])s.run(c,n,d++,null,m,u,o)}}var mc=y(()=>{"use strict"});var Th=y(()=>{"use strict";Se()});async function _h(e,t,n,r){return Gn(e,async(o,s)=>{if(!r)return n(o,s);try{return await n(o,s)}catch(i){return r(o,i,s)}},t)}var kh=y(()=>{"use strict";qn()});function un(e,t,n){let r=new Map;for(let o of e??[])r.set(n(o),o);for(let o of t??[])r.set(n(o),o);return[...r.values()]}var Rh,pn,fc=y(()=>{"use strict";Rh=/-[0-9a-f]{8}$/;pn={plan:e=>e.slug,note:e=>e.id,reference:e=>e.archivedKey}});function Ah(e){return e.summaryError===Iv}function xh(e){return e.summaryError!==void 0||e.llm?.stopReason==="error"}var vh,Iv,gc=y(()=>{"use strict";vh="llm-failed",Iv="local-agent-auth"});function ao(e){return Xs[e]?.label??"Local agent"}function Nh(e){return Xs[e]?.loginHint??"Sign in to your local agent CLI."}function Ph(e){let t=Xs[e]?.separateDesktopApp;return t===void 0?null:`(This login is SEPARATE from ${t} \u2014 ${t} stays signed in on its own.)`}var Ch,Ih,Xs,$U,zs=y(()=>{"use strict";Ch="sonnet",Ih="inherit",Xs={"claude-code":{label:"Claude Code",loginHint:"Run `claude` once and sign in to your subscription.",separateDesktopApp:"Claude Desktop",defaultModel:Ch,models:[{id:"haiku",label:"Haiku \u2014 fastest"},{id:Ch,label:"Sonnet \u2014 balanced (default)"},{id:"opus",label:"Opus \u2014 most capable"},{id:Ih,label:"Use Claude Code's own setting"}]},codex:{label:"Codex",loginHint:"Run `codex login` to sign in with your ChatGPT plan.",separateDesktopApp:"the ChatGPT app",defaultModel:"gpt-5.6-terra",models:[{id:"gpt-5.6-luna",label:"GPT-5.6-Luna \u2014 fastest"},{id:"gpt-5.6-terra",label:"GPT-5.6-Terra \u2014 balanced (default)"},{id:"gpt-5.6-sol",label:"GPT-5.6-Sol \u2014 most capable"},{id:"gpt-5.5",label:"GPT-5.5 \u2014 previous generation"},{id:Ih,label:"Use Codex's own setting"}]},"cursor-agent":{label:"Cursor",loginHint:"Run `cursor-agent login` to sign in to Cursor."},opencode:{label:"OpenCode",loginHint:"Run `opencode auth login` to connect a provider."},kimi:{label:"Kimi Code",loginHint:"Run `kimi login` to sign in to your Moonshot account."},hermes:{label:"Hermes",loginHint:"Run `hermes setup` (or `hermes model`) to configure a provider."}};$U=[...new Set(Object.values(Xs).flatMap(e=>(e.models??[]).map(t=>t.id)))]});function Pv(e){return Nv.has(e)}function hc(e){return Pv(e.source)?`${e.nativeId} \u2014 ${e.title}`:e.title}var Nv,yc=y(()=>{"use strict";ys();Nv=new Set(["linear","jira","github"])});var wc=y(()=>{"use strict"});function q(e){return e.generatedAt||e.commitDate}function Dh(e){try{return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch{return e}}function Ec(e){try{return new Date(e).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})}catch{return e}}function Oh(e){return e.substring(0,10)}function Dv(e){return[...e].sort((t,n)=>{let r=Oh(t.generatedAt||t.commitDate||""),o=Oh(n.generatedAt||n.commitDate||"");if(r!==o)return r>o?-1:1;let s=t.importance==="minor"?1:0,i=n.importance==="minor"?1:0;return s-i})}function Lh(e){return String(e+1).padStart(2,"0")}function Mv(e,t){return t==="local-agent"?e.localAgentTool?`Local agent - ${ao(e.localAgentTool)}`:"Local agent":Lv[t]}function Mh(e){let t=new Set,n=o=>{let s=o.llm;s?.source&&t.add(Mv(s,s.source));for(let i of o.children??[])n(i)};n(e);let r=[...t];if(r.length!==0)return r.length===1?r[0]:`mixed: ${r.join(", ")}`}function Sc(e){let t=$v[e];return t!==void 0?t:e&&e.charAt(0).toUpperCase()+e.slice(1)}function $h(e){let t=Ks(e),n=Vs(e);return{topics:Dv(n.map((o,s)=>({...o,treeIndex:s}))),sourceNodes:t}}var Lv,$v,lo=y(()=>{"use strict";zs();yc();Jt();wc();Lv={"anthropic-config":"Anthropic","anthropic-env":"Anthropic (env)","jolli-proxy":"Jolli proxy","local-agent":"Local agent"};$v={claude:"Claude Code",opencode:"OpenCode",codex:"Codex",cursor:"Cursor",kimi:"Kimi",hermes:"Hermes"}});function Qs(e){return Fv.exec(e)?.[1]??null}var Fv,bc=y(()=>{"use strict";Fv=/^transcripts\/(.+)\.json$/});var ny={};_r(ny,{AmbiguousHashError:()=>po,ORPHAN_WRITE_REQUIRED_TIMEOUT_MS:()=>Tc,collectChildE2eScenarios:()=>ti,collectChildJolliMeta:()=>ii,collectChildNotes:()=>ri,collectChildPlans:()=>ni,collectChildReferences:()=>oi,collectChildSkills:()=>si,collectChildSkillsDocMeta:()=>kc,copyHoistFields:()=>_c,deleteNoteVisibleArtifact:()=>EA,deletePlanVisibleArtifact:()=>hA,deleteTranscript:()=>nA,expandSourcesForConsolidation:()=>Vv,getActiveStorage:()=>Hv,getCatalog:()=>uA,getCatalogWithLazyBuild:()=>pA,getIndex:()=>ho,getIndexEntryMap:()=>iA,getSummary:()=>Qh,getSummaryCount:()=>Zh,getTranscriptHashes:()=>xc,indexNeedsMigration:()=>lA,listSummaries:()=>oA,listSummaryHashes:()=>sA,loadCatalog:()=>Tt,mergeManyToOne:()=>Yv,migrateIndexToV3:()=>cA,migrateOneToOne:()=>Gv,normalizeToV4:()=>vc,readNoteFromBranch:()=>SA,readPlanFromBranch:()=>gA,readPlanProgress:()=>yA,readReferenceFromBranch:()=>kA,readSkillFromBranch:()=>_A,readTranscript:()=>Xh,readTranscriptsBatch:()=>Zv,readTranscriptsForCommits:()=>Qv,remountStrandedTree:()=>Jv,removeFromIndex:()=>zv,resolveEffectiveRecap:()=>Ac,resolveEffectiveTopics:()=>li,resolveReadStorage:()=>mo,resolveStorage:()=>H,saveTranscriptsBatch:()=>zh,scanTreeHashAliases:()=>aA,setActiveStorage:()=>jv,storeNotes:()=>wA,storePlans:()=>fA,storeReferences:()=>bA,storeSkills:()=>TA,storeSummary:()=>Wv,stripFunctionalMetadata:()=>ci,toCatalogEntry:()=>mn,withDeferrableOrphanWriteLock:()=>ei,withRequiredOrphanWriteLock:()=>Te});function jv(e){co=e}function Hv(){return co}async function Fh(e){let t=await ui(e);return t.ok?t.storage:(D.warn("system-of-record unavailable (%s) \u2014 falling back to the orphan branch. cwd=%s",t.reason,e),new bt(e))}async function H(e,t){return e||co||(process.env.VITEST||D.warn("resolveStorage fell back to the system of record \u2014 caller did not thread storage or call setActiveStorage. The Memory Bank side will miss this write. cwd=%s",t??"(undef)"),Fh(t))}async function mo(e,t){return e??co??await Fh(t)}async function Te(e,t,n){if(Un(e))return await n();if(!await Or(e,{timeoutMs:Tc}))throw new ls(t,Tc);try{return await Bn(e,n)}finally{await Dr(e)}}async function ei(e,t,n){if(Un(e))return await n();if(!await Or(e,{timeoutMs:jh}))return await t();try{return await Bn(e,n)}finally{await Dr(e)}}function uo(e){return e.parentCommitHash==null}function Uv(e,t){if(!e&&!t)return null;if(!t)return e;if(!e)return t;let n=new Map;for(let o of t.entries)n.set(o.commitHash,o);for(let o of e.entries)n.set(o.commitHash,o);let r={...t.commitAliases??{},...e.commitAliases??{}};return{version:e.version,entries:[...n.values()],...Object.keys(r).length>0&&{commitAliases:r}}}function Bv(e,t){if(!e&&!t)return null;if(!t)return e;if(!e)return t;let n=new Map;for(let r of t.entries)n.set(r.commitHash,r);for(let r of e.entries)n.set(r.commitHash,r);return{version:e.version,entries:[...n.values()]}}async function Wv(e,t,n=!1,r,o,s){V()||await Te(t,"storeSummary",()=>Hh(e,t,n,r,o,s))}async function Hh(e,t,n=!1,r,o,s){let i=await ee(t,o),a=await Tt(t,o),l=s!==void 0&&s!==o,c=l?await ee(t,s):null,d=l?await Tt(t,s):null,u=l?Uv(i,c):i,p=l?Bv(a,d):a,m=u?.entries?[...u.entries]:[],g=new Map(m.map(P=>[P.commitHash,P])),h=new Set;if(l&&c){let P=new Set(i?.entries.map($=>$.commitHash)??[]);for(let $ of c.entries)P.has($.commitHash)||h.add($.commitHash)}if(!n&&g.has(e.commitHash)){D.info("Summary for commit %s already exists \u2014 skipping (use force to overwrite)",e.commitHash.substring(0,8));return}let E=await go(e,null,t,g);for(let P of E)g.set(P.commitHash,P);let S={version:3,entries:[...g.values()],commitAliases:u?.commitAliases},k=n?"Overwrite":"Add",b=[{path:`summaries/${e.commitHash}.json`,content:JSON.stringify(e,null,"	")},{path:fn,content:JSON.stringify(S,null,"	")},Cc(p,g,e)];if(r?.transcript&&r.transcript.data.sessions.length>0&&b.push({path:`transcripts/${r.transcript.id}.json`,content:JSON.stringify(r.transcript.data,null,"	")}),r?.planProgress)for(let P of r.planProgress)b.push({path:`plan-progress/${P.planSlug}.json`,content:JSON.stringify(P,null,"	")});if(h.size>0&&s)for(let P of h){if(P===e.commitHash)continue;let $=`summaries/${P}.json`,we=`transcripts/${P}.json`,Fe=await s.readFile($);Fe!==null&&b.push({path:$,content:Fe});let je=await s.readFile(we);je!==null&&b.push({path:we,content:je})}await(await H(o,t)).writeFiles(b,`${k} summary for ${e.commitHash.substring(0,8)}: ${e.commitMessage.substring(0,50)}`),D.info("Summary stored successfully for commit %s",e.commitHash.substring(0,8))}function _c(e){return{...e.skills&&{skills:e.skills},...e.jolliSkillsDocId&&{jolliSkillsDocId:e.jolliSkillsDocId},...e.jolliSkillsDocUrl&&{jolliSkillsDocUrl:e.jolliSkillsDocUrl},...e.transcripts&&{transcripts:e.transcripts},...e.plans&&{plans:e.plans},...e.notes&&{notes:e.notes},...e.references&&{references:e.references}}}async function Jv(e,t,n,r){if((e.children??[]).length>0)throw new Error(`target ${e.commitHash.substring(0,8)} already has children \u2014 refusing to clobber`);if(V())return;let o=un(t.plans,e.plans,pn.plan),s=un(t.notes,e.notes,pn.note),i=un(t.references,e.references,pn.reference),a=[...new Set([...e.transcripts??[],...t.transcripts??[]])],l=Es([...t.skills??[],...e.skills??[]]),c=l.flatMap(g=>g.supersededDocIds??[]),d=kc([e,t]),u=[...new Set([...e.orphanedDocIds??[],...d.orphanedDocIds,...c,...Rc([t])])],p=[...new Set([...e.unresolvedOrphanHashes??[],...ai([t])])],m={...e,..._c(t),...a.length>0&&{transcripts:a},...o.length>0&&{plans:o},...s.length>0&&{notes:s},...i.length>0&&{references:i},...l.length>0&&{skills:l.map(ws)},...d.winner&&{jolliSkillsDocId:d.winner.jolliSkillsDocId,jolliSkillsDocUrl:d.winner.jolliSkillsDocUrl},...u.length>0&&{orphanedDocIds:u},...p.length>0&&{unresolvedOrphanHashes:p},children:[t]};await Te(n,"remountStrandedTree",()=>Hh(m,n,!0,void 0,r))}async function Gv(e,t,n,r,o){await Te(n,"migrateOneToOne",()=>qv(e,t,n,r,o))}async function qv(e,t,n,r,o){D.info("Migrating summary 1:1: %s \u2192 %s",e.commitHash.substring(0,8),t.hash.substring(0,8));let s=ci(e),i=e.jolliDocUrl,a=await is(`${t.hash}^`,t.hash,n).catch(()=>({filesChanged:0,insertions:0,deletions:0})),l=li(e),c=Ac(e),d=await xc(n,o),u=Wt(e,d),p={version:Va,commitHash:t.hash,commitMessage:t.message,commitAuthor:t.author,commitDate:t.date,branch:e.branch,generatedAt:new Date().toISOString(),commitType:r?.commitType??"rebase",...r?.commitSource&&{commitSource:r.commitSource},...e.ticketId&&{ticketId:e.ticketId},...e.jolliDocId&&{jolliDocId:e.jolliDocId},...i&&{jolliDocUrl:i},...e.orphanedDocIds&&{orphanedDocIds:e.orphanedDocIds},...e.unresolvedOrphanHashes&&{unresolvedOrphanHashes:e.unresolvedOrphanHashes},..._c(e),...e.e2eTestGuide&&{e2eTestGuide:e.e2eTestGuide},...xh(e)&&{summaryError:vh},topics:l,...c!==void 0?{recap:c}:{},transcripts:u,diffStats:a,children:[s]},m=await ee(n,o),g=await Tt(n,o),h=m?.entries?[...m.entries]:[],E=new Map(h.map(P=>[P.commitHash,P]));if(E.has(t.hash)){D.info("New hash %s already in index, skipping migration",t.hash.substring(0,8));return}let S=await go(p,null,n,E);for(let P of S)E.set(P.commitHash,P);let k={version:3,entries:[...E.values()],commitAliases:m?.commitAliases},b=[{path:`summaries/${p.commitHash}.json`,content:JSON.stringify(p,null,"	")},{path:fn,content:JSON.stringify(k,null,"	")},Cc(g,E,p)];await(await H(o,n)).writeFiles(b,`Migrate summary ${e.commitHash.substring(0,8)} \u2192 ${t.hash.substring(0,8)}`),D.info("Summary migrated: %s \u2192 %s",e.commitHash.substring(0,8),t.hash.substring(0,8))}function ti(e){let t=[];for(let n of e)n.e2eTestGuide&&t.push(...n.e2eTestGuide),n.children&&t.push(...ti(n.children));return t}function Uh(e){let{e2eTestGuide:t,...n}=e;return n.children?{...n,children:n.children.map(Uh)}:n}function ni(e){let t=new Map;for(let n of e){if(n.plans)for(let r of n.plans){let o=r.slug,s=t.get(o);(!s||r.updatedAt>s.updatedAt)&&t.set(o,r)}if(n.children)for(let r of ni(n.children)){let o=t.get(r.slug);(!o||r.updatedAt>o.updatedAt)&&t.set(r.slug,r)}}return[...t.values()]}function Bh(e){let{plans:t,...n}=e;return n.children?{...n,children:n.children.map(Bh)}:n}function ri(e){let t=new Map;for(let n of e){if(n.notes)for(let r of n.notes){let o=t.get(r.id);(!o||r.updatedAt>o.updatedAt)&&t.set(r.id,r)}if(n.children)for(let r of ri(n.children)){let o=t.get(r.id);(!o||r.updatedAt>o.updatedAt)&&t.set(r.id,r)}}return[...t.values()]}function Wh(e){let{notes:t,...n}=e;return n.children?{...n,children:n.children.map(Wh)}:n}function Jh(e){let{references:t,...n}=e;return n.children?{...n,children:n.children.map(Jh)}:n}function oi(e){let t=new Map;for(let n of e){let r=n.references??[];for(let o of r){let s=t.get(o.archivedKey);(!s||o.referencedAt>s.referencedAt)&&t.set(o.archivedKey,o)}if(n.children)for(let o of oi(n.children)){let s=t.get(o.archivedKey);(!s||o.referencedAt>s.referencedAt)&&t.set(o.archivedKey,o)}}return[...t.values()]}function si(e){let t=[];for(let n of e)t.push(...n.skills??[]),n.children&&t.push(...si(n.children));return Es(t)}function Gh(e){let{jolliDocId:t,jolliDocUrl:n,jolliSkillsDocId:r,jolliSkillsDocUrl:o,orphanedDocIds:s,unresolvedOrphanHashes:i,...a}=e;return a.children?{...a,children:a.children.map(Gh)}:a}function ii(e){let t=[];for(let o of e){let s=o.jolliDocUrl;if(o.jolliDocId&&s&&t.push({jolliDocId:o.jolliDocId,jolliDocUrl:s,commitDate:o.commitDate,generatedAt:o.generatedAt}),o.children){let i=ii(o.children);i.winner&&t.push({...i.winner})}}if(t.length===0)return{winner:null,orphanedDocIds:[]};t.sort((o,s)=>new Date(q(s)).getTime()-new Date(q(o)).getTime());let n=t[0],r=t.slice(1).map(o=>o.jolliDocId);return{winner:n,orphanedDocIds:r}}function kc(e){let{winner:t,orphanedDocIds:n}=qh(e);return{winner:t&&{jolliSkillsDocId:t.jolliSkillsDocId,jolliSkillsDocUrl:t.jolliSkillsDocUrl},orphanedDocIds:n}}function qh(e){let t=[];for(let o of e){let s=o.jolliSkillsDocUrl;if(o.jolliSkillsDocId&&s&&t.push({jolliSkillsDocId:o.jolliSkillsDocId,jolliSkillsDocUrl:s,commitDate:o.commitDate,generatedAt:o.generatedAt}),o.children){let i=qh(o.children);i.winner&&t.push(i.winner)}}if(t.length===0)return{winner:null,orphanedDocIds:[]};t.sort((o,s)=>new Date(q(s)).getTime()-new Date(q(o)).getTime());let[n,...r]=t;return{winner:n,orphanedDocIds:r.map(o=>o.jolliSkillsDocId)}}function Rc(e){let t=[];for(let n of e??[])n.orphanedDocIds&&t.push(...n.orphanedDocIds),t.push(...Rc(n.children));return t}function ai(e){let t=[];for(let n of e??[])n.unresolvedOrphanHashes&&t.push(...n.unresolvedOrphanHashes),t.push(...ai(n.children));return t}function vc(e){if(e.version>=4)return e;let t=ti([e]),n=ni([e]),r=ri([e]),o=oi([e]),s=si([e]),i=s.map(ws),a=ii([e]),l=Array.from(new Set([...a.orphanedDocIds,...e.orphanedDocIds??[],...Rc(e.children),...s.flatMap(h=>h.supersededDocIds??[])])),c=Array.from(new Set([...e.unresolvedOrphanHashes??[],...ai(e.children)])),d=li(e),u=Ac(e),p=e.diffStats===void 0&&e.stats!==void 0?so(e):void 0,{stats:m,...g}=e;return{...g,version:4,topics:d,...u!==void 0?{recap:u}:{},...p!==void 0?{diffStats:p}:{},...t.length>0?{e2eTestGuide:t}:{},...n.length>0?{plans:n}:{},...r.length>0?{notes:r}:{},...o.length>0?{references:o}:{},...i.length>0?{skills:i}:{},...a.winner?{jolliDocId:a.winner.jolliDocId,jolliDocUrl:a.winner.jolliDocUrl}:{},...l.length>0?{orphanedDocIds:l}:{},...c.length>0?{unresolvedOrphanHashes:c}:{},...e.children!==void 0?{children:e.children.map(ci)}:{}}}function Kh(e){let{topics:t,...n}=e;return n.children?{...n,children:n.children.map(Kh)}:n}function Vh(e){let{recap:t,...n}=e;return n.children?{...n,children:n.children.map(Vh)}:n}function li(e){return oo(e)?e.topics??[]:nr(e).map(({commitDate:t,generatedAt:n,treeIndex:r,...o})=>o)}function Ac(e){return oo(e)||e.recap?e.recap:Kv(e.children)}function Kv(e){if(!e||e.length===0)return;let t=[];if(Yh(e,t),t.length!==0)return t.sort((n,r)=>new Date(r.date).getTime()-new Date(n.date).getTime()),t[0]?.recap}function Yh(e,t){for(let n of e)n.recap&&t.push({recap:n.recap,date:q(n)}),n.children&&Yh(n.children,t)}function Vv(e){if(oo(e))return[{commitHash:e.commitHash,commitMessage:e.commitMessage,commitDate:e.commitDate,...e.ticketId&&{ticketId:e.ticketId},topics:e.topics??[],...e.recap&&{recap:e.recap}}];let t=(e.children??[]).map(r=>({commitHash:r.commitHash,commitMessage:r.commitMessage,commitDate:r.commitDate,...r.ticketId&&{ticketId:r.ticketId},topics:li(r),...r.recap&&{recap:r.recap}}));return((e.topics?.length??0)>0||e.recap)&&t.push({commitHash:e.commitHash,commitMessage:e.commitMessage,commitDate:e.commitDate,...e.ticketId&&{ticketId:e.ticketId},topics:e.topics??[],...e.recap&&{recap:e.recap}}),t}function ci(e){return Gh(Jh(Wh(Bh(Uh(Kh(Vh(e)))))))}async function Yv(e,t,n,r){return Te(n,"mergeManyToOne",()=>Xv(e,t,n,r))}async function Xv(e,t,n,r){let{metadata:o,consolidated:s,storage:i,extraRefs:a,extraSkills:l}=r??{};D.info("Merging %d summaries into %s",e.length,t.hash.substring(0,8));let c=[...e].sort((K,Qo)=>new Date(q(Qo)).getTime()-new Date(q(K)).getTime()),d=ti(c),u=un(ni(c),a?.plans,pn.plan),p=un(ri(c),a?.notes,pn.note),m=un(oi(c),a?.references,pn.reference),g=Es([...si(c),...l??[]]),h=g.map(ws),E=ii(c),S=kc(c),k=c.flatMap(K=>K.orphanedDocIds??[]),b=g.flatMap(K=>K.supersededDocIds??[]),x=[...E.orphanedDocIds,...S.orphanedDocIds,...k,...b],P=Array.from(new Set([...c.filter(K=>!K.jolliDocId).map(K=>K.commitHash),...ai(c)])),$=c.map(ci),we=await is(`${t.hash}^`,t.hash,n).catch(()=>({filesChanged:0,insertions:0,deletions:0})),Fe=s?.topics??[],je=s?.recap,It=s?.ticketId,zt=s?.llm,xn=s?.summaryError,Qt=await xc(n,i),Iu=Array.from(new Set(c.flatMap(K=>Wt(K,Qt)))),ut={version:Va,commitHash:t.hash,commitMessage:t.message,commitAuthor:t.author,commitDate:t.date,branch:e[0].branch,generatedAt:new Date().toISOString(),...o?.commitType&&{commitType:o.commitType},...o?.commitSource&&{commitSource:o.commitSource},...It&&{ticketId:It},...zt&&{llm:zt},...xn&&{summaryError:xn},...d.length>0&&{e2eTestGuide:d},...u.length>0&&{plans:u},...p.length>0&&{notes:p},...m.length>0&&{references:m},...h.length>0&&{skills:h},...E.winner&&{jolliDocId:E.winner.jolliDocId,jolliDocUrl:E.winner.jolliDocUrl},...S.winner&&S.winner,...x.length>0&&{orphanedDocIds:x},...P.length>0&&{unresolvedOrphanHashes:P},topics:Fe,...je&&{recap:je},transcripts:Iu,diffStats:we,children:$},Nt=await ee(n,i),Cn=await Tt(n,i),In=Nt?.entries?[...Nt.entries]:[],Xe=new Map(In.map(K=>[K.commitHash,K]));if(Xe.has(t.hash))return D.info("New hash %s already in index, skipping merge",t.hash.substring(0,8)),{orphanedDocIds:[]};let Tr=await go(ut,null,n,Xe);for(let K of Tr)Xe.set(K.commitHash,K);let Nu={version:3,entries:[...Xe.values()],commitAliases:Nt?.commitAliases},Xo=e.map(K=>K.commitHash.substring(0,8)).join(", "),zo=[{path:`summaries/${ut.commitHash}.json`,content:JSON.stringify(ut,null,"	")},{path:fn,content:JSON.stringify(Nu,null,"	")},Cc(Cn,Xe,ut)];return await(await H(i,n)).writeFiles(zo,`Merge summaries [${Xo}] \u2192 ${t.hash.substring(0,8)}`),D.info("Summaries merged: [%s] \u2192 %s (%d children, %d orphaned docs, %d unresolved orphan hashes)",Xo,t.hash.substring(0,8),c.length,x.length,P.length),{orphanedDocIds:x}}async function zv(e,t,n){await ei(t,()=>{D.warn("removeFromIndex: could not acquire orphan-write lock within %dms \u2014 skipping removal of %s",jh,e.substring(0,8))},async()=>{let r=await ee(t,n);if(!r)return;let o=r.entries.filter(d=>d.commitHash!==e);if(o.length===r.entries.length)return;let s={version:r.version,entries:o,commitAliases:r.commitAliases},i=[{path:fn,content:JSON.stringify(s,null,"	")}],a=await Tt(t,n),l=mA(a,e);l&&i.push(l),await(await H(n,t)).writeFiles(i,`Remove index entry for ${e.substring(0,8)}`),D.info("Removed %s from index",e.substring(0,8))})}async function Xh(e,t,n){let o=await(await H(n,t)).readFile(`transcripts/${e}.json`);if(!o)return null;try{return JSON.parse(o)}catch{return D.warn("Failed to parse transcript for %s",e.substring(0,8)),null}}async function Qv(e,t,n){let r=new Map;for(let o of e){let s=await Xh(o,t,n);s&&r.set(o,s)}return r}async function Zv(e,t,n){let r=new Map;if(e.length===0)return r;let o=await mo(n,t),s=l=>`transcripts/${l}.json`,i=e.map(s),a=o.batchReadFiles?await o.batchReadFiles(i):await tA(o,i);for(let l of e){let c=a.get(s(l));if(!c){r.set(l,null);continue}try{r.set(l,JSON.parse(c))}catch{D.warn("Failed to parse transcript for %s",l.substring(0,8)),r.set(l,null)}}return r}async function tA(e,t){let n=await _h(t,eA,o=>e.readFile(o),(o,s)=>(D.warn("readFile failed for %s: %s",o,R(s)),null)),r=new Map;for(let o=0;o<t.length;o++)r.set(t[o],n[o]??null);return r}async function zh(e,t,n,r){let o=[];for(let{hash:i,data:a}of e)o.push({path:`transcripts/${i}.json`,content:JSON.stringify(a,null,"	")});for(let i of t)o.push({path:`transcripts/${i}.json`,content:"",delete:!0});if(o.length===0||V())return;let s=[e.length>0?`${e.length} written`:"",t.length>0?`${t.length} deleted`:""].filter(Boolean).join(", ");await Te(n,"saveTranscriptsBatch",async()=>{await(await H(r,n)).writeFiles(o,`Update transcripts: ${s}`),D.info("Transcript batch: %s",s)})}async function nA(e,t,n){await zh([],[e],t,n)}async function xc(e,t){let r=await(await H(t,e)).listFiles("transcripts/"),o=new Set;for(let s of r){let i=Qs(s);i&&o.add(i)}return o}function rA(e,t){return t.filter(n=>n.commitHash.startsWith(e))}async function Qh(e,t,n){if(e.length===0)return null;let r=e.toLowerCase(),o=await rt(r,t,n);if(o)return o;let s=ry(await mo(n,t));if(s){if(r.length===Zs){let c=await s.lookupAlias(r);if(c)return rt(c,t,n)}else{let c=await s.findHashesByPrefix(r);if(c.length===1)return rt(c[0],t,n);if(c.length>=2)throw new po(r,c)}let l=await Cr(r,t);if(l){let c=await s.findShallowestByTreeHash(l);if(c)return rt(c,t,n)}return null}let i=await ee(t,n);if(!i)return null;if(r.length===Zs){let l=i.commitAliases?.[r];if(l)return rt(l,t,n)}else{let l=rA(r,i.entries);if(l.length===1)return rt(l[0].commitHash,t,n);if(l.length>=2)throw new po(r,l.map(c=>c.commitHash))}if(i.version===3){let l=await Cr(r,t);if(l){let c=new Map(i.entries.map(u=>[u.commitHash,u])),d=ey(l,i.entries,c);if(d)return rt(d.commitHash,t,n)}}return null}async function oA(e=10,t,n){let r=await ee(t,n);if(!r||r.entries.length===0)return[];let i=[...r.entries.filter(uo)].sort((l,c)=>new Date(q(c)).getTime()-new Date(q(l)).getTime()).slice(0,e),a=[];for(let l of i){let c=await Qh(l.commitHash,t,n);c&&a.push(c)}return a}async function sA(e){let t=await ee(e);if(!t||t.entries.length===0)return new Set;let n=new Set(t.entries.map(r=>r.commitHash));if(t.commitAliases)for(let r of Object.keys(t.commitAliases))n.add(r);return n}async function iA(e,t){let n=await ee(e,t);if(!n)return new Map;let r=new Map(n.entries.map(o=>[o.commitHash,o]));if(n.commitAliases)for(let[o,s]of Object.entries(n.commitAliases)){let i=r.get(s);i&&!r.has(o)&&r.set(o,i)}return r}async function aA(e,t,n,r){if(V())return!1;let o=r??n,s=await ee(t,o);if(!s||s.version!==3)return!1;let i=s.commitAliases??{},a=new Set(s.entries.map(d=>d.commitHash)),l=new Map(s.entries.map(d=>[d.commitHash,d])),c={};for(let d of e){if(a.has(d)||i[d])continue;let u=await Cr(d,t);if(!u)continue;let p=ey(u,s.entries,l);p&&(c[d]=p.commitHash,D.info("Tree hash match: %s \u2192 %s (treeHash: %s)",d.substring(0,8),p.commitHash.substring(0,8),u.substring(0,8)))}return Object.keys(c).length===0?!1:await ei(t,()=>(D.debug("scanTreeHashAliases: orphan-write lock contention \u2014 alias write deferred"),!1),async()=>{let d=await ee(t,n);if(!d||d.version!==3)return!1;if(o!==n){let k=await ee(t,o);if(k&&k.version===3){let b=new Set(d.entries.map(P=>P.commitHash)),x=k.entries.reduce((P,$)=>b.has($.commitHash)?P:P+1,0);if(x>0)return D.warn("scanTreeHashAliases: read side has %d row(s) write side lacks \u2014 deferring alias write to avoid shadow clobber",x),!1}}let u=d.commitAliases??{},p=new Set(d.entries.map(k=>k.commitHash)),m={...u},g=0;for(let[k,b]of Object.entries(c))p.has(k)||m[k]||(m[k]=b,g++);if(g===0)return!1;let h={...d,commitAliases:m},E=[{path:fn,content:JSON.stringify(h,null,"	")}];return await(await H(n,t)).writeFiles(E,`Add ${g} tree hash alias(es)`),!0})}async function Zh(e,t){let n=await ee(e,t);return n?n.entries.filter(uo).length:0}async function lA(e,t){let n=await ee(e,t);return!n||n.entries.length===0?!1:n.version!==3}async function cA(e,t){return Te(e,"migrateIndexToV3",()=>dA(e,t))}async function dA(e,t){let n=await ee(e,t);if(!n)return D.info("No index found \u2014 nothing to migrate"),{migrated:0,skipped:0};if(n.version===3)return D.info("Index already at v3 \u2014 skipping migration"),{migrated:0,skipped:0};let r=0,o=0,s=new Map,i=[];for(let u of n.entries){let p=await rt(u.commitHash,e,t);if(!p){D.warn("Could not load summary for %s \u2014 skipping",u.commitHash.substring(0,8)),o++;continue}try{let m=await go(p,null,e);for(let g of m)s.set(g.commitHash,g);i.push(mn(p)),r++}catch(m){D.warn("Failed to flatten summary for %s: %s",u.commitHash.substring(0,8),m.message),o++}}let a={version:3,entries:[...s.values()]},l={version:1,entries:i},c=[{path:fn,content:JSON.stringify(a,null,"	")},{path:fo,content:JSON.stringify(l,null,"	")}];return await(await H(t,e)).writeFiles(c,`Migrate index v1 \u2192 v3 (${r} entries)`),D.info("Index migrated to v3: %d migrated, %d skipped",r,o),{migrated:r,skipped:o}}async function go(e,t,n,r){let o=await Cr(e.commitHash,n)??void 0,s=t===null,i;if(s){let c=e.diffStats,d=r?.get(e.commitHash)?.diffStats,u;c?u=c:d?u=d:u=await is(`${e.commitHash}^`,e.commitHash,n),i={topicCount:uc(e),diffStats:u}}let l=[{commitHash:e.commitHash,parentCommitHash:t,treeHash:o,commitType:e.commitType,commitMessage:e.commitMessage,commitDate:e.commitDate,branch:e.branch,generatedAt:e.generatedAt,...i&&{topicCount:i.topicCount,diffStats:i.diffStats}}];for(let c of e.children??[]){let d=await go(c,e.commitHash,n,r);l.push(...d)}return l}async function rt(e,t,n){let o=await(await mo(n,t)).readFile(`summaries/${e}.json`);if(!o)return null;try{return JSON.parse(o)}catch(s){return D.error("Failed to parse summary for %s: %s",e.substring(0,8),s.message),null}}function ey(e,t,n){let r=t.filter(s=>s.treeHash===e);if(r.length===0)return null;if(r.length===1)return r[0];let o=r.map(s=>{let i=0,a=new Set,l=s;for(;l?.parentCommitHash!=null&&!a.has(l.commitHash);)a.add(l.commitHash),i++,l=n.get(l.parentCommitHash);return{entry:s,depth:i}});return o.sort((s,i)=>s.depth!==i.depth?s.depth-i.depth:new Date(q(i.entry)).getTime()-new Date(q(s.entry)).getTime()),o[0].entry}async function ho(e,t){return ee(e,t)}async function ee(e,t){let n=await mo(t,e),r=await n.readFile(fn);if(!r)return D.debug("loadIndex: no index.json in %s storage",n.kind??"unknown"),null;try{return JSON.parse(r)}catch(o){return D.error("Failed to parse index.json: %s",o.message),null}}function mn(e){let t=Vs(e).map(n=>({title:n.title,...n.decisions!==void 0&&{decisions:n.decisions},...n.category!==void 0&&{category:n.category},...n.importance!==void 0&&{importance:n.importance},...n.filesAffected&&n.filesAffected.length>0&&{filesAffected:n.filesAffected}}));return{commitHash:e.commitHash,...e.recap!==void 0&&{recap:e.recap},...e.ticketId!==void 0&&{ticketId:e.ticketId},...t.length>0&&{topics:t}}}async function Tt(e,t){let r=await(await H(t,e)).readFile(fo);if(!r)return null;try{return JSON.parse(r)}catch(o){return D.error("Failed to parse catalog.json: %s",o.message),null}}async function uA(e,t){return Tt(e,t)}async function pA(e,t){let n=await H(t,e),r=await Tt(e,n)??{version:1,entries:[]},o=await ee(e,n);if(!o||o.entries.length===0)return r;let s=new Set(o.entries.filter(uo).map(c=>c.commitHash)),i=new Set(r.entries.map(c=>c.commitHash)),a=r.entries.filter(c=>s.has(c.commitHash)).length,l=[];for(let c of s)i.has(c)||l.push(c);return a===r.entries.length&&l.length===0?r:await ei(e,async()=>{D.debug("getCatalogWithLazyBuild: orphan-write lock contention \u2014 returning in-memory catalog without writeback");let c=r.entries.filter(u=>s.has(u.commitHash)),d=[];for(let u of l){let p=await rt(u,e,n);p&&d.push(mn(p))}return{version:1,entries:[...c,...d]}},async()=>{let c=await Tt(e,n)??{version:1,entries:[]},d=await ee(e,n);if(!d||d.entries.length===0)return c;let u=new Set(d.entries.filter(uo).map(b=>b.commitHash)),p=c.entries.filter(b=>u.has(b.commitHash)),m=new Set(p.map(b=>b.commitHash)),g=[];for(let b of u)m.has(b)||g.push(b);if(p.length===c.entries.length&&g.length===0)return c;let h=[];for(let b of g){let x=await rt(b,e,n);x?h.push(mn(x)):D.warn("Catalog lazy build: summary file missing for root %s",b.substring(0,8))}let E={version:1,entries:[...p,...h]},S=c.entries.length-p.length,k=`catalog: reconcile (+${h.length}, -${S})`;return await n.writeFiles([{path:fo,content:JSON.stringify(E,null,"	")}],k),E})}function Cc(e,t,n){let r=new Set([...t.values()].filter(uo).map(a=>a.commitHash)),i={version:1,entries:[...(e?.entries??[]).filter(a=>r.has(a.commitHash)&&a.commitHash!==n.commitHash),mn(n)]};return{path:fo,content:JSON.stringify(i,null,"	")}}function mA(e,t){if(!e)return null;let n=e.entries.filter(o=>o.commitHash!==t);return n.length===e.entries.length?null:{path:fo,content:JSON.stringify({version:1,entries:n},null,"	")}}async function fA(e,t,n,r,o){if(e.length===0||V())return;let s=e.map(i=>({path:`plans/${i.slug}.md`,content:i.content,branch:r}));await Te(n,"storePlans",async()=>{await(await H(o,n)).writeFiles(s,t),D.info("Stored %d plan file(s)",e.length)})}async function gA(e,t,n){try{return await(await H(n,t)).readFile(`plans/${e}.md`)}catch{return null}}async function hA(e,t,n,r){let o=await H(r,n);o.deletePlanVisible&&await o.deletePlanVisible(e,t)}async function yA(e,t,n){try{let o=await(await H(n,t)).readFile(`plan-progress/${e}.json`);return o?JSON.parse(o):null}catch{return null}}async function wA(e,t,n,r,o){if(e.length===0||V())return;let s=e.map(i=>({path:`notes/${i.id}.md`,content:i.content,branch:r}));await Te(n,"storeNotes",async()=>{await(await H(o,n)).writeFiles(s,t),D.info("Stored %d note file(s)",e.length)})}async function EA(e,t,n,r){let o=await H(r,n);o.deleteNoteVisible&&await o.deleteNoteVisible(e,t)}async function SA(e,t,n){try{return await(await H(n,t)).readFile(`notes/${e}.md`)}catch{return null}}function ty(e,t){if(!gm(e))throw new Error(`orphanPathFor: refusing unknown reference source ${JSON.stringify(e)}`);let n=`${e}:`,r=t.startsWith(n)?t.slice(n.length):t,o=fm(e,r);return`references/${e}/${o}.md`}async function bA(e,t,n,r,o){if(e.length===0||V())return;let s=e.map(i=>({path:ty(i.source,i.archivedKey),content:i.content,branch:r}));await Te(n,"storeReferences",async()=>{await(await H(o,n)).writeFiles(s,t),D.info("Stored %d reference file(s) across sources",e.length)})}async function TA(e,t,n,r,o){if(e.length===0||V())return;let s=e.map(i=>({path:i.path,content:i.content,branch:r}));await Te(n,"storeSkills",async()=>{await(await H(o,n)).writeFiles(s,t),D.info("Stored %d skill file(s)",e.length)})}async function _A(e,t,n){try{return await(await H(n,t)).readFile(e)}catch{return null}}async function kA(e,t,n,r){let o=await H(r,n);try{return await o.readFile(ty(e,t))}catch{return null}}var co,D,fn,fo,Tc,jh,eA,Zs,po,ot=y(()=>{"use strict";w();ms();kh();Se();Ze();qs();as();fc();Hr();pi();di();gc();lo();Jt();il();bc();D=f("SummaryStore"),fn="index.json",fo="catalog.json",Tc=3e4,jh=1e3;eA=8;Zs=40,po=class extends Error{constructor(t,n){if(n.length<2)throw new Error(`AmbiguousHashError requires \u22652 matches (got ${n.length}); use null/undefined for "not found"`);if(t.length===0||t.length>=Zs)throw new Error(`AmbiguousHashError prefix must be 1..${Zs-1} chars (got length ${t.length})`);super(`abbreviation \`${t}\` is ambiguous; please use a longer prefix (matched ${n.length} commits)`),this.name="AmbiguousHashError",this.prefix=t,this.matches=n}static is(t){return t instanceof Error&&t.name==="AmbiguousHashError"&&typeof t.prefix=="string"&&Array.isArray(t.matches)}}});var m1,oy=y(()=>{"use strict";w();ot();m1=f("ProcessedSourceStore")});var y1,sy=y(()=>{"use strict";w();ot();y1=f("TopicIndexStore")});function iy(e){if(!e.startsWith("topics/")||!e.endsWith(".json"))return!1;let t=e.slice(7,-5);return t.length>0&&!t.includes("/")&&!RA.has(t)}var RA,ay,E1,S1,Ic=y(()=>{"use strict";RA=new Set(["index","processed"]);ay=[["summaries/",e=>e.endsWith(".json")],["transcripts/",e=>e.endsWith(".json")],["plans/",e=>e.endsWith(".md")],["notes/",e=>e.endsWith(".md")],["references/",e=>e.endsWith(".md")],["skills/",e=>e.endsWith(".md")],["plan-progress/",e=>e.endsWith(".json")],["topics/",iy]],E1=ay.map(([e])=>e),S1=Object.fromEntries(ay)});var R1,ly=y(()=>{"use strict";Ic();w();ot();R1=f("TopicPageStore")});var P1,O1,cy=y(()=>{"use strict";Oa();w();Bt();ic();tr();P1=f("ImportState"),O1=10*6e4});var Nc=y(()=>{"use strict"});var $1,Pc=y(()=>{"use strict";w();$1=f("DashboardScope")});function vA(e){let t=dy.get(e);return t||(t=new Intl.DateTimeFormat("en-CA",{timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}),dy.set(e,t)),t}function mi(e,t){let n=vA(t).formatToParts(e),r=o=>Number.parseInt(n.find(s=>s.type===o)?.value??"0",10);return{year:r("year"),month:r("month"),day:r("day"),hour:r("hour"),minute:r("minute")}}function AA(e,t){let n=mi(e,t);return`${n.year}-${String(n.month).padStart(2,"0")}-${String(n.day).padStart(2,"0")}`}function py(e,t){let n=uy.get(t);if(n&&e>=n.fromMs&&e<n.toMs)return n.key;let r=mi(e,t),o=`${r.year}-${String(r.month).padStart(2,"0")}-${String(r.day).padStart(2,"0")}`,s=my(r.year,r.month,r.day,t);return uy.set(t,{fromMs:s,toMs:fy(s,1,t),key:o}),o}function my(e,t,n,r){let o=Date.UTC(e,t-1,n),s=o;for(let i=0;i<3;i++){let a=mi(s,r),l=Date.UTC(a.year,a.month-1,a.day,a.hour,a.minute)-o;if(l===0)return s;s-=l}return xA(e,t,n,r)}function xA(e,t,n,r){let o=`${e}-${String(t).padStart(2,"0")}-${String(n).padStart(2,"0")}`,s=Date.UTC(e,t-1,n),i=Math.floor((s-15*36e5)/6e4),a=Math.ceil((s+14*36e5)/6e4);for(;a-i>1;){let l=Math.floor((i+a)/2);AA(l*6e4,r)<o?i=l:a=l}return a*6e4}function Oc(e,t){let n=mi(e,t);return my(n.year,n.month,n.day,t)}function fy(e,t,n){if(!Number.isInteger(t))throw new Error(`addLocalDays: days must be a finite integer, got ${t}`);let r=Oc(e,n),o=t>=0?1:-1;for(let s=0;s!==t;s+=o)r=Oc(r+o*864e5+432e5,n);return r}var dy,uy,gy=y(()=>{"use strict";dy=new Map;uy=new Map});var Dc,Lc,U1,yo,fi=y(()=>{"use strict";Pc();Dc=`LEFT JOIN commits cm ON cm.repo_id = m.repo_id AND cm.hash = m.commit_hash
	  LEFT JOIN (
	      SELECT a.repo_id, a.target_hash, c.hash AS live_hash, MAX(c.committed_at_ms) AS at_ms
	        FROM commit_aliases a
	        JOIN commits c ON c.repo_id = a.repo_id AND c.hash = a.old_hash
	       GROUP BY a.repo_id, a.target_hash
	  ) al ON al.repo_id = m.repo_id AND al.target_hash = m.commit_hash`,Lc="COALESCE(cm.committed_at_ms, al.at_ms, m.commit_date_ms)",U1=`WITH memory_landing AS (
	SELECT m.repo_id, m.commit_hash,
	       COALESCE(cm.hash, al.live_hash, m.commit_hash) AS live_hash,
	       ${Lc} AS at_ms
	  FROM memories m
	  ${Dc}
	 WHERE m.parent_hash IS NULL
)`,yo=`SELECT ${Lc} AS at_ms
	  FROM memories m
	  ${Dc}
	 WHERE m.repo_id = ? AND m.commit_hash = ?`});function wo(e,t){if(t.length===0)return;let n=e.prepare("SELECT DISTINCT tz FROM stats_daily").all();if(n.length!==0)for(let{tz:r}of n){let o=[...new Set(t.map(s=>py(s,r)))];e.prepare(`DELETE FROM stats_daily WHERE tz = ? AND day IN (${o.map(()=>"?").join(", ")})`).run(r,...o)}}var Z1,NA,PA,OA,DA,eB,Mc=y(()=>{"use strict";w();Bt();Pc();gy();fi();Z1=f("StatsRollup"),NA={model:!0,agent:!0,project:!0,branch:!0,ticket:!0,category:!0},PA=Object.keys(NA),OA="built",DA="tokens",eB=[...PA,DA,OA]});function _t(e){if(e==null)return null;try{return JSON.parse(e)}catch{return null}}function hy(e){let t=/^#\s+(.+)$/m.exec(e);return t?t[1].trim():null}function yy(e,t,n){for(let{path:r,accepts:o}of MA){let s=e;for(let a of r){if(s==null||typeof s!="object"){s=void 0;break}s=s[a]}s==null||(o==="integer"?Number.isInteger(s):typeof s=="number")||n("off-type numeric",`${t}.${r.join(".")} is ${typeof s} (${JSON.stringify(s)}) \u2014 column reads NULL`)}}function wy(e,t,n,r){let o=Date.parse(e.commitDate??"");return Number.isFinite(o)?o:(r("commit date",`${t} has no parsable commitDate \u2014 falling back to first-seen time`),n)}function Ey(e,t,n,r,o){let s=e.prepare(yo),i=e.prepare("SELECT target_hash FROM commit_aliases WHERE repo_id = ? AND old_hash = ?").get(t,n)?.target_hash,a=i!==void 0&&i!==r?[r,i]:[r],l=u=>s.get(t,u)?.at_ms??void 0,c=[],d=!1;for(let u of a){let p=s.get(t,u);u===r&&(d=p!==void 0),p?.at_ms!=null&&c.push(p.at_ms)}if(!d)return{stored:!1,days:[]};e.prepare(`INSERT INTO commit_aliases (repo_id, old_hash, target_hash, created_ms) VALUES (?, ?, ?, ?)
		 ON CONFLICT(repo_id, old_hash) DO UPDATE SET target_hash = excluded.target_hash`).run(t,n,r,o);for(let u of a){let p=l(u);p!==void 0&&c.push(p)}return i!==void 0&&i!==r&&LA.info("alias %s retargeted %s -> %s",n,i,r),{stored:!0,days:c}}function Sy(e,t){let n=e.prepare("SELECT commit_hash, parent_hash, root_hash, depth FROM memories WHERE repo_id = ?").all(t),r=new Map,o=[];for(let l of n)if(l.parent_hash===null)o.push({hash:l.commit_hash,root:l.commit_hash,depth:0});else{let c=r.get(l.parent_hash)??[];c.push(l.commit_hash),r.set(l.parent_hash,c)}let s=e.prepare("UPDATE memories SET root_hash = ?, depth = ? WHERE repo_id = ? AND commit_hash = ?"),i=new Map(n.map(l=>[l.commit_hash,l])),a=0;for(;o.length>0;){let{hash:l,root:c,depth:d}=o.shift();a++;let u=i.get(l);(u.root_hash!==c||u.depth!==d)&&s.run(c,d,t,l);for(let p of r.get(l)??[])o.push({hash:p,root:c,depth:d+1})}if(a!==n.length)throw new Error(`remountRepo: ${n.length-a} node(s) unreachable from any root \u2014 cycle in batch`)}var LA,MA,by=y(()=>{"use strict";Th();oy();et();Hr();ot();Jt();sy();ly();w();Bt();Ic();cy();tr();mc();Nc();Mc();fi();LA=f("SotImport");MA=[{path:["conversationTurns"],accepts:"integer"},{path:["conversationTokens"],accepts:"integer"},{path:["estimatedCostUsd"],accepts:"number"},{path:["diffStats","filesChanged"],accepts:"integer"},{path:["diffStats","insertions"],accepts:"integer"},{path:["diffStats","deletions"],accepts:"integer"}]});function FA(e){let t=[],n=(r,o,s)=>{t.push({hash:r.commitHash,parentInFile:o,pos:s,summary:r}),(r.children??[]).forEach((i,a)=>{n(i,r.commitHash,a)})};return n(e,null,null),t}function jA(e){let t={summaryDeletes:[],summaryTrees:[],transcriptWrites:[],transcriptDeletes:[],contextWrites:[],contextDeletes:[],progressWrites:[],progressDeletes:[],topicPageWrites:[],topicPageDeletes:[],treeHashes:new Map,aliases:new Map,topicSummaries:new Map,processedSet:null,v5State:null};for(let n of e){let r=n.delete===!0,o=n.path.match(/^summaries\/([0-9a-f]+)\.json$/);if(o){if(r){t.summaryDeletes.push(o[1]);continue}let c=_t(n.content);if(!c?.commitHash)throw new Error(`SotWrite: unparsable summary at ${n.path}`);t.summaryTrees.push(FA(c));continue}if(n.path==="index.json"){if(r)continue;let c=_t(n.content);for(let d of c?.entries??[])d.treeHash&&t.treeHashes.set(d.commitHash,d.treeHash);for(let[d,u]of Object.entries(c?.commitAliases??{}))t.aliases.set(d,u);continue}if(n.path==="catalog.json")continue;if(n.path==="topics/index.json"){if(r)continue;let c=_t(n.content);for(let d of c?.topics??[])d.stableSlug&&d.summary!==void 0&&t.topicSummaries.set(d.stableSlug,d.summary);continue}if(n.path==="topics/processed.json"){t.processedSet=r?null:n.content;continue}if(n.path==="schema-v5-migration.json"){r||(t.v5State=n.content);continue}let s=n.path.match(/^transcripts\/(.+)\.json$/);if(s){r?t.transcriptDeletes.push(s[1]):t.transcriptWrites.push({id:s[1],content:n.content});continue}let i=n.path.match(/^(plans|notes|references|skills)\/(.+)\.md$/);if(i){let c=$A[i[1]];r?t.contextDeletes.push({kind:c,key:i[2]}):t.contextWrites.push({kind:c,key:i[2],body:n.content});continue}let a=n.path.match(/^plan-progress\/(.+)\.json$/);if(a){r?t.progressDeletes.push(a[1]):t.progressWrites.push({pathSlug:a[1],content:n.content});continue}let l=n.path.match(/^topics\/([^/]+)\.json$/);if(l){r?t.topicPageDeletes.push(l[1]):t.topicPageWrites.push({slug:l[1],content:n.content});continue}throw new Error(`SotWrite: no table backs path ${n.path}`)}return t}function Eo(e,t){gn.warn("SotWrite: dropping unparsable %s (%s) -- keeping the rest of the batch",e,t)}function HA(e,t,n){let r=/-([0-9a-f]{8})$/.exec(n);return r?e.prepare("SELECT branch FROM memories WHERE repo_id = ? AND commit_hash LIKE ? || '%' LIMIT 1").get(t,r[1])?.branch??null:null}function UA(e,t,n,r){let o=[];for(let g of n.summaryDeletes){let h=e.prepare(yo).get(t,g);h?.at_ms!=null&&o.push(h.at_ms),e.prepare("DELETE FROM memories WHERE repo_id = ? AND commit_hash = ?").run(t,g)}if(wo(e,o),n.summaryTrees.length===0)return;let s=new Set;for(let g of n.summaryTrees)for(let h of g)"children"in h.summary&&s.add(h.hash);let i=e.prepare(`UPDATE memories SET child_pos = child_pos + ${1e6}
		  WHERE repo_id = ? AND parent_hash = ? AND child_pos < ${1e6}`);for(let g of s)i.run(t,g);let a=new Map;for(let g of n.summaryTrees)for(let h of g){if(h.parentInFile===null||h.pos===null)continue;let E=a.get(h.parentInFile)??new Map;E.set(h.hash,h.pos),a.set(h.parentInFile,E)}let l=e.prepare(`INSERT INTO memories (repo_id, commit_hash, parent_hash, child_pos, root_hash, depth,
		                       summary_json, tree_hash, first_seen_ms, written_at_ms, commit_date_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(repo_id, commit_hash) DO UPDATE SET
		   parent_hash = excluded.parent_hash, child_pos = excluded.child_pos,
		   summary_json = excluded.summary_json,
		   tree_hash = COALESCE(excluded.tree_hash, memories.tree_hash),
		   written_at_ms = excluded.written_at_ms, commit_date_ms = excluded.commit_date_ms`),c=(g,h)=>gn.info("write degraded a value: %s %s",g,h);for(let g of n.summaryTrees)for(let h of g){let E=h.parentInFile,S=h.pos;if(h.parentInFile===null){let x=e.prepare("SELECT parent_hash, child_pos FROM memories WHERE repo_id = ? AND commit_hash = ?").get(t,h.hash);x&&(E=x.parent_hash,S=x.child_pos,S!==null&&S>=1e6&&((E===null?void 0:a.get(E))?.has(h.hash)||(E=null,S=null)))}let k=JSON.stringify("children"in h.summary?{...h.summary,children:[]}:h.summary);l.run(t,h.hash,E,S,h.hash,0,k,n.treeHashes.get(h.hash)??null,r,r,wy(h.summary,h.hash,r,c)),yy(h.summary,h.hash,c),e.prepare("DELETE FROM memory_topics WHERE repo_id = ? AND commit_hash = ?").run(t,h.hash);let b=e.prepare("INSERT INTO memory_topics (repo_id, commit_hash, pos, category, importance, title) VALUES (?, ?, ?, ?, ?, ?)");(h.summary.topics??[]).forEach((x,P)=>{if(!x.title){c("topic",`${h.hash}[${P}] has no title`);return}b.run(t,h.hash,P,x.category??null,x.importance??null,x.title)})}let d=e.prepare(`UPDATE memories SET parent_hash = NULL, child_pos = NULL
		  WHERE repo_id = ? AND parent_hash = ? AND child_pos >= ${1e6}`),u=[],p=e.prepare(`SELECT m.commit_hash FROM memories m
		  WHERE m.repo_id = ? AND m.parent_hash = ? AND m.child_pos >= ${1e6}`),m=e.prepare(yo);for(let g of s){for(let{commit_hash:h}of p.all(t,g)){let E=m.get(t,h);E?.at_ms!=null&&u.push(E.at_ms)}d.run(t,g)}wo(e,u),Sy(e,t)}function BA(e,t,n,r){let o=[];for(let[s,i]of n.aliases){let a=Ey(e,t,s,i,r);if(!a.stored){gn.info("dropping alias %s -> %s (no such memory row)",s,i);continue}o.push(...a.days)}wo(e,o)}function WA(e,t,n,r){let o=new Set;for(let s of n.transcriptDeletes)e.prepare("DELETE FROM transcript_sessions WHERE repo_id = ? AND transcript_id = ?").run(t,s),e.prepare("DELETE FROM memory_transcripts WHERE repo_id = ? AND transcript_id = ?").run(t,s),e.prepare("DELETE FROM transcripts WHERE repo_id = ? AND transcript_id = ?").run(t,s),Ys(e,t,s);for(let{id:s,content:i}of n.transcriptWrites){let a=_t(i);if(!a||!Array.isArray(a.sessions)){Eo("transcript",s);continue}e.prepare(`INSERT INTO transcripts (repo_id, transcript_id, sessions_blob, written_at_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, transcript_id) DO UPDATE SET sessions_blob = excluded.sessions_blob,
			   written_at_ms = excluded.written_at_ms`).run(t,s,(0,Ty.deflateSync)(Buffer.from(i,"utf8")),r),e.prepare("DELETE FROM transcript_sessions WHERE repo_id = ? AND transcript_id = ?").run(t,s);for(let l of a.sessions)l.sessionId&&e.prepare(`INSERT INTO transcript_sessions (repo_id, transcript_id, session_id, source) VALUES (?, ?, ?, ?)
				 ON CONFLICT(repo_id, transcript_id, session_id) DO UPDATE SET source = excluded.source`).run(t,s,l.sessionId,l.source??null);Ys(e,t,s),pc(e,t,s,a.sessions,r),o.add(s)}return o}function JA(e,t,n,r){if(r.size===0)return;let o=new Set(n.summaryTrees.flat().map(c=>c.hash)),s=new Set(n.summaryTrees.flat().flatMap(c=>[...Wt(c.summary,r)])),i=[...r].filter(c=>!s.has(c));if(i.length===0)return;let a=e.prepare("SELECT commit_hash, summary_json FROM memories WHERE repo_id = ? AND summary_json LIKE ?"),l=e.prepare(`INSERT INTO memory_transcripts (repo_id, commit_hash, transcript_id) VALUES (?, ?, ?)
		 ON CONFLICT(repo_id, commit_hash, transcript_id) DO NOTHING`);for(let c of i){let d=a.all(t,`%${c}%`);for(let u of d){if(o.has(u.commit_hash))continue;let p=_t(u.summary_json);p&&Wt(p,r).includes(c)&&(l.run(t,u.commit_hash,c),gn.info("linked stored transcript %s to memory %s written earlier",c,u.commit_hash))}}}function GA(e,t,n){if(n.summaryTrees.length===0)return;let r=new Set(e.prepare("SELECT transcript_id FROM transcripts WHERE repo_id = ?").all(t).map(o=>o.transcript_id));for(let o of n.summaryTrees)for(let s of o){let i=[...new Set(Wt(s.summary,r).filter(a=>r.has(a)))];for(let a of s.summary.transcripts??[])r.has(a)||gn.info("dropping dangling transcript link %s \u2192 %s (no transcript row)",s.hash,a);e.prepare("DELETE FROM memory_transcripts WHERE repo_id = ? AND commit_hash = ?").run(t,s.hash);for(let a of i)e.prepare("INSERT INTO memory_transcripts (repo_id, commit_hash, transcript_id) VALUES (?, ?, ?)").run(t,s.hash,a)}}function qA(e,t,n,r){for(let{kind:s,key:i}of n.contextDeletes)e.prepare("DELETE FROM context WHERE repo_id = ? AND kind = ? AND context_key = ?").run(t,s,i);let o=e.prepare(`INSERT INTO context (repo_id, kind, context_key, source, native_id, tool_name, referenced_at,
		                      original_slug, branch, title, url, body_md, created_at_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(repo_id, kind, context_key) DO UPDATE SET
		   source = excluded.source, native_id = excluded.native_id, tool_name = excluded.tool_name,
		   referenced_at = excluded.referenced_at, original_slug = excluded.original_slug,
		   branch = excluded.branch, title = excluded.title, url = excluded.url,
		   body_md = excluded.body_md, updated_at_ms = ?`);for(let{kind:s,key:i,body:a}of n.contextWrites){if(s==="reference"){let d=sl(a);if(!d){Eo("reference frontmatter",`references/${i}.md`);continue}o.run(t,s,i,d.source,d.nativeId,d.toolName,d.referencedAt,null,null,d.title,d.url??null,a,r,r);continue}let l=s==="plan"||s==="note"?HA(e,t,i):null,c=s==="plan"&&l!==null?i.replace(/-[0-9a-f]{8}$/,""):null;o.run(t,s,i,null,null,null,null,c,l,hy(a),null,a,r,r)}}function KA(e,t,n,r){for(let o of n.progressDeletes)e.prepare("DELETE FROM plan_progress WHERE repo_id = ? AND plan_slug = ?").run(t,o);for(let{pathSlug:o,content:s}of n.progressWrites){let i=_t(s);if(!i){Eo("plan-progress",`plan-progress/${o}.json`);continue}let a=i.planSlug??o;if(!e.prepare("SELECT 1 AS ok FROM context WHERE repo_id = ? AND kind = 'plan' AND context_key = ?").get(t,a)){gn.warn("plan-progress for %s has no plan row -- skipping the artifact, keeping the rest of the batch",a);continue}e.prepare(`INSERT INTO plan_progress (repo_id, plan_slug, artifact_json, updated_at_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, plan_slug) DO UPDATE SET
			   artifact_json = excluded.artifact_json, updated_at_ms = excluded.updated_at_ms`).run(t,a,s,r)}}function VA(e,t,n,r){for(let o of n.topicPageDeletes)e.prepare("DELETE FROM topic_pages WHERE repo_id = ? AND stable_slug = ?").run(t,o);for(let{slug:o,content:s}of n.topicPageWrites){let i=_t(s);if(!i?.stableSlug||i.title===void 0||i.content===void 0||!i.lastUpdatedAt){Eo("topic page",`topics/${o}.json`);continue}e.prepare(`INSERT INTO topic_pages (repo_id, stable_slug, title, summary, content_md,
			                          related_branches_json, last_updated_at, payload_version)
			 VALUES (?, ?, ?, ?, ?, ?, ?, ?)
			 ON CONFLICT(repo_id, stable_slug) DO UPDATE SET
			   title = excluded.title, content_md = excluded.content_md,
			   related_branches_json = excluded.related_branches_json,
			   last_updated_at = excluded.last_updated_at, payload_version = excluded.payload_version`).run(t,i.stableSlug,i.title,n.topicSummaries.get(i.stableSlug)??null,i.content,JSON.stringify(i.relatedBranches??[]),i.lastUpdatedAt,i.schemaVersion??1),e.prepare("DELETE FROM topic_source_refs WHERE repo_id = ? AND stable_slug = ?").run(t,i.stableSlug),(i.sourceRefs??[]).forEach((a,l)=>{e.prepare(`INSERT INTO topic_source_refs (repo_id, stable_slug, pos, ref_type, ref_id, ts, branch)
				 VALUES (?, ?, ?, ?, ?, ?, ?)`).run(t,i.stableSlug,l,a.type,a.id,a.timestamp,a.branch??null)})}for(let[o,s]of n.topicSummaries){let i=e.prepare("UPDATE topic_pages SET summary = ? WHERE repo_id = ? AND stable_slug = ?").run(s,t,o);Number(i.changes)===0&&gn.info("topics/index.json names %s but no page row exists \u2014 summary dropped",o)}if(n.processedSet!==null){let o=_t(n.processedSet);if(!o?.processed)Eo("processed set","topics/processed.json");else{e.prepare("DELETE FROM topic_processed_sources WHERE repo_id = ?").run(t);let s=e.prepare(`INSERT INTO topic_processed_sources (repo_id, source_type, source_id) VALUES (?, ?, ?)
				 ON CONFLICT(repo_id, source_type, source_id) DO NOTHING`);for(let[i,a]of Object.entries(o.processed))for(let l of a)s.run(t,i,l)}}n.v5State!==null&&e.prepare(`INSERT INTO repo_state (repo_id, key, value) VALUES (?, 'v5-migration', ?)
			 ON CONFLICT(repo_id, key) DO UPDATE SET value = excluded.value`).run(t,n.v5State)}function _y(e,t,n,r){let o=jA(n);Ws(e,()=>{e.exec("PRAGMA defer_foreign_keys = ON"),UA(e,t,o,r),BA(e,t,o,r);let s=WA(e,t,o,r);GA(e,t,o),JA(e,t,o,s),qA(e,t,o,r),KA(e,t,o,r),VA(e,t,o,r)})}var Ty,gn,$A,ky=y(()=>{"use strict";Ty=require("node:zlib");Hr();Jt();w();Bt();mc();by();Nc();Mc();fi();gn=f("SotWrite"),$A={plans:"plan",notes:"note",references:"reference",skills:"skill"}});function vy(e){let t=new Map;for(let n of e){if(n.parent_hash==null)continue;let r=t.get(n.parent_hash)??[];r.push(n),t.set(n.parent_hash,r)}for(let n of t.values())n.sort((r,o)=>Number(r.child_pos)-Number(o.child_pos));return t}function $c(e,t){let n=JSON.parse(t.summary_json);return"children"in n&&(n.children=(e.get(t.commit_hash)??[]).map(r=>$c(e,r))),n}function YA(e,t,n){let r=e.prepare("SELECT root_hash, parent_hash FROM memories WHERE repo_id = ? AND commit_hash = ?").get(t,n);if(!r)return;let o=(r.parent_hash===null?e.prepare(`SELECT commit_hash, parent_hash, child_pos, tree_hash, summary_json
					   FROM memories WHERE repo_id = ? AND root_hash = ?`):e.prepare(`WITH RECURSIVE subtree(commit_hash) AS (
					     SELECT commit_hash FROM memories WHERE repo_id = ?1 AND commit_hash = ?2
					     UNION ALL
					     SELECT m.commit_hash FROM memories m
					       JOIN subtree s ON m.parent_hash = s.commit_hash
					      WHERE m.repo_id = ?1
					   )
					   SELECT m.commit_hash, m.parent_hash, m.child_pos, m.tree_hash, m.summary_json
					     FROM memories m JOIN subtree ON subtree.commit_hash = m.commit_hash
					    WHERE m.repo_id = ?1`)).all(t,r.parent_hash===null?r.root_hash:n),s=o.find(i=>i.commit_hash===n);return s?$c(vy(o),s):void 0}function ry(e){if(e instanceof Gt)return e;let t=e?.primary;return t instanceof Gt?t:null}function XA(e){if(e===null)return{};try{return{diffStats:JSON.parse(e)}}catch{return{}}}var Ry,Gt,di=y(()=>{"use strict";Ry=require("node:zlib");Bt();ky();w();ot();Gt=class{constructor(t,n){this.repoIdentity=t;this.dbPath=n;this.kind="sqlite"}async withDb(t){return oc(n=>{let r=n.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);if(!r)throw new Error(`SqliteStorage: no repos row for ${this.repoIdentity}`);return t(n,r.id)},{dbPath:this.dbPath})}async withDbOrAbsent(t,n){return oc(r=>{let o=r.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);return o?t(r,o.id):n},{dbPath:this.dbPath})}async readFile(t){return this.withDbOrAbsent((n,r)=>this.readOne(n,r,t),null)}async batchReadFiles(t){return this.withDbOrAbsent((n,r)=>{let o=new Map;for(let s of t)o.set(s,this.readOne(n,r,s));return o},new Map(t.map(n=>[n,null])))}readOne(t,n,r){let o=r.match(/^summaries\/([0-9a-f]+)\.json$/);if(o){let c=YA(t,n,o[1]);return c?JSON.stringify(c,null,"	"):null}if(r==="index.json")return this.synthIndex(t,n);if(r==="catalog.json")return this.synthCatalog(t,n);if(r==="topics/index.json")return this.synthTopicIndex(t,n);if(r==="topics/processed.json")return this.synthProcessed(t,n);if(r==="schema-v5-migration.json")return t.prepare("SELECT value FROM repo_state WHERE repo_id = ? AND key = 'v5-migration'").get(n)?.value??null;let s=r.match(/^topics\/([^/]+)\.json$/);if(s)return this.synthTopicPage(t,n,s[1]);let i=r.match(/^transcripts\/(.+)\.json$/);if(i){let c=t.prepare("SELECT sessions_blob FROM transcripts WHERE repo_id = ? AND transcript_id = ?").get(n,i[1]);return c?(0,Ry.inflateSync)(Buffer.from(c.sessions_blob)).toString("utf8"):null}let a=r.match(/^(plans|notes|references|skills)\/(.+)\.md$/);if(a){let c={plans:"plan",notes:"note",references:"reference",skills:"skill"}[a[1]];return t.prepare("SELECT body_md FROM context WHERE repo_id = ? AND kind = ? AND context_key = ?").get(n,c,a[2])?.body_md??null}let l=r.match(/^plan-progress\/(.+)\.json$/);return l?t.prepare("SELECT artifact_json FROM plan_progress WHERE repo_id = ? AND plan_slug = ?").get(n,l[1])?.artifact_json??null:null}allMemories(t,n){return t.prepare(`SELECT commit_hash, parent_hash, child_pos, tree_hash, summary_json, index_diff_stats_json
				   FROM memories WHERE repo_id = ? ORDER BY rowid`).all(n)}synthIndex(t,n){let r=t.prepare(`SELECT commit_hash, parent_hash, root_hash, tree_hash, commit_type, commit_message,
				        commit_date, branch, generated_at,
				        CASE WHEN parent_hash IS NULL
				             THEN COALESCE(json_extract(summary_json, '$.diffStats'), index_diff_stats_json)
				        END AS diff_stats_json
				   FROM memories WHERE repo_id = ? ORDER BY rowid`).all(n);if(r.length===0)return null;let o=new Map(t.prepare(`SELECT m.root_hash AS root, COUNT(t.rowid) AS n
						   FROM memories m
						   LEFT JOIN memory_topics t ON t.repo_id = m.repo_id AND t.commit_hash = m.commit_hash
						  WHERE m.repo_id = ? GROUP BY m.root_hash`).all(n).map(a=>[a.root,a.n])),s=r.map(a=>({commitHash:a.commit_hash,parentCommitHash:a.parent_hash,...a.tree_hash!==null&&{treeHash:a.tree_hash},...a.commit_type!==null&&{commitType:a.commit_type},commitMessage:a.commit_message??void 0,commitDate:a.commit_date??void 0,branch:a.branch??void 0,...a.generated_at!==null&&{generatedAt:a.generated_at},...a.parent_hash===null&&{topicCount:o.get(a.root_hash)??0,...XA(a.diff_stats_json)}})),i=t.prepare("SELECT old_hash, target_hash FROM commit_aliases WHERE repo_id = ? ORDER BY rowid").all(n);return JSON.stringify({version:3,entries:s,...i.length>0&&{commitAliases:Object.fromEntries(i.map(a=>[a.old_hash,a.target_hash]))}},null,"	")}synthCatalog(t,n){let r=this.allMemories(t,n);if(r.length===0)return null;let o=vy(r),s=r.filter(i=>i.parent_hash===null).map(i=>mn($c(o,i)));return JSON.stringify({version:1,entries:s},null,"	")}topicRefs(t,n,r){return t.prepare(`SELECT ref_type, ref_id, ts, branch FROM topic_source_refs
				  WHERE repo_id = ? AND stable_slug = ? ORDER BY pos`).all(n,r).map(s=>({type:s.ref_type,id:s.ref_id,timestamp:s.ts,...s.branch!==null&&{branch:s.branch}}))}synthTopicPage(t,n,r){let o=t.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json,
				        last_updated_at, payload_version
				   FROM topic_pages WHERE repo_id = ? AND stable_slug = ?`).get(n,r);return o?JSON.stringify({schemaVersion:o.payload_version,stableSlug:o.stable_slug,title:o.title,content:o.content_md,relatedBranches:JSON.parse(o.related_branches_json),sourceRefs:this.topicRefs(t,n,r),lastUpdatedAt:o.last_updated_at},null,"	"):null}synthTopicIndex(t,n){let r=t.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json,
				        last_updated_at, payload_version
				   FROM topic_pages WHERE repo_id = ? ORDER BY rowid`).all(n);if(r.length===0)return null;let o=r.map(s=>({stableSlug:s.stable_slug,title:s.title,...s.summary!==null&&{summary:s.summary},relatedBranches:JSON.parse(s.related_branches_json),sourceRefs:this.topicRefs(t,n,s.stable_slug),lastUpdatedAt:s.last_updated_at}));return JSON.stringify({schemaVersion:1,topics:o},null,"	")}synthProcessed(t,n){let r=t.prepare("SELECT source_type, source_id FROM topic_processed_sources WHERE repo_id = ? ORDER BY rowid").all(n);if(r.length===0)return null;let o={summary:[],plan:[],note:[],userfile:[]};for(let s of r)o[s.source_type].push(s.source_id);return JSON.stringify({schemaVersion:1,processed:o},null,"	")}async listFiles(t){return this.withDbOrAbsent((n,r)=>{let o=(i,a)=>n.prepare(i).all(r).map(l=>a(l.v));return[...o("SELECT commit_hash AS v FROM memories WHERE repo_id = ?",i=>`summaries/${i}.json`),...o("SELECT transcript_id AS v FROM transcripts WHERE repo_id = ?",i=>`transcripts/${i}.json`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'plan'",i=>`plans/${i}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'note'",i=>`notes/${i}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'reference'",i=>`references/${i}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'skill'",i=>`skills/${i}.md`),...o("SELECT plan_slug AS v FROM plan_progress WHERE repo_id = ?",i=>`plan-progress/${i}.json`),...o("SELECT stable_slug AS v FROM topic_pages WHERE repo_id = ?",i=>`topics/${i}.json`),...o("SELECT 'index.json' AS v FROM memories WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'catalog.json' AS v FROM memories WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'topics/index.json' AS v FROM topic_pages WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'topics/processed.json' AS v FROM topic_processed_sources WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'schema-v5-migration.json' AS v FROM repo_state WHERE repo_id = ? AND key = 'v5-migration'",i=>i)].filter(i=>i.startsWith(t)).sort()},[])}async writeFiles(t,n){V()||await hh(r=>{let o=r.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);if(!o)throw new Error(`SqliteStorage: cannot write memories for unregistered ${this.repoIdentity}`);_y(r,o.id,t,Date.now())},{dbPath:this.dbPath})}async searchSignatureParts(){return this.withDbOrAbsent((t,n)=>{let r=t.prepare("SELECT COUNT(*) AS n, COALESCE(MAX(written_at_ms), 0) AS newest FROM memories WHERE repo_id = ?").get(n),o=t.prepare("SELECT COUNT(*) AS n, COALESCE(MAX(last_updated_at), '') AS newest FROM topic_pages WHERE repo_id = ?").get(n);return{memoriesCount:r.n,memoriesNewestMs:r.newest,topicCount:o.n,topicNewest:o.newest}},{memoriesCount:0,memoriesNewestMs:0,topicCount:0,topicNewest:""})}async lookupAlias(t){return this.withDbOrAbsent((n,r)=>n.prepare("SELECT target_hash FROM commit_aliases WHERE repo_id = ? AND old_hash = ?").get(r,t)?.target_hash??null,null)}async findShallowestByTreeHash(t){return this.withDbOrAbsent((n,r)=>n.prepare(`SELECT commit_hash FROM memories WHERE repo_id = ? AND tree_hash = ?
					  ORDER BY depth ASC, commit_date_ms DESC LIMIT 1`).get(r,t)?.commit_hash??null,null)}async findHashesByPrefix(t){return/^[0-9a-f]+$/.test(t)?this.withDbOrAbsent((n,r)=>n.prepare("SELECT commit_hash FROM memories WHERE repo_id = ? AND commit_hash LIKE ? || '%'").all(r,t).map(s=>s.commit_hash),[]):[]}async listHeadEntries(t){return this.withDbOrAbsent((n,r)=>n.prepare(`SELECT commit_hash, tree_hash, commit_type, commit_message, commit_date, branch, generated_at
					   FROM memories WHERE repo_id = ? AND parent_hash IS NULL${t!==void 0?" AND branch = ?":""}`).all(...t!==void 0?[r,t]:[r]).map(s=>({commitHash:s.commit_hash,parentCommitHash:null,...s.tree_hash!==null?{treeHash:s.tree_hash}:{},...s.commit_type!==null?{commitType:s.commit_type}:{},commitMessage:s.commit_message??"",commitDate:s.commit_date??"",branch:s.branch??"",generatedAt:s.generated_at??""})),[])}async topicTitlesByHash(){return this.withDbOrAbsent((t,n)=>{let r=t.prepare("SELECT commit_hash, title FROM memory_topics WHERE repo_id = ? ORDER BY commit_hash, pos").all(n),o=new Map;for(let s of r){let i=o.get(s.commit_hash)??[];i.push(s.title),o.set(s.commit_hash,i)}return o},new Map)}async listTopicSearchRows(){return this.withDbOrAbsent((t,n)=>{let r=t.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json, last_updated_at
					   FROM topic_pages WHERE repo_id = ?`).all(n),o=t.prepare("SELECT stable_slug, ref_type FROM topic_source_refs WHERE repo_id = ? ORDER BY pos").all(n),s=new Map;for(let i of o){let a=s.get(i.stable_slug)??[];a.push(i.ref_type),s.set(i.stable_slug,a)}return r.map(i=>({stableSlug:i.stable_slug,title:i.title,summary:i.summary,content:i.content_md,relatedBranches:JSON.parse(i.related_branches_json),lastUpdatedAt:i.last_updated_at,refTypes:s.get(i.stable_slug)??[]}))},[])}async listRootSummaries(){return this.withDbOrAbsent((t,n)=>t.prepare("SELECT commit_hash FROM memories WHERE repo_id = ? AND parent_hash IS NULL").all(n).map(o=>this.readOne(t,n,`summaries/${o.commit_hash}.json`)).filter(o=>o!==null).map(o=>JSON.parse(o)),[])}async exists(){try{return await this.withDb(()=>!0)}catch{return!1}}async ensure(){throw new Error("SqliteStorage cannot create its database: opening it runs the migrations already")}}});async function xy(e){let t=Date.now(),n=Ay.get(e);if(n&&t-n.at<zA)return n.route;let r=await ro(e);return Ay.set(e,{route:r,at:t}),r}async function Cy(e,t,n){if(n.state==="legacy-fenced"||n.state==="cutover"){let{identity:r}=await dn(t);return new Gt(r)}return new bt(e)}async function Iy(e){let t=e??process.cwd(),n=await xy(t);if(n.state==="blocked")throw new Error(`storage unavailable: ${n.reason} \u2014 this repo's orphan branch is frozen (cutover), so the system of record cannot fall back to it; run 'jolli doctor --recover' or upgrade this surface`);return Cy(e,t,n)}async function ui(e){let t=e??process.cwd(),n;try{n=await xy(t)}catch(r){return{ok:!1,reason:r.message}}if(n.state==="blocked")return{ok:!1,reason:n.reason};try{return{ok:!0,state:n.state,storage:await Cy(e,t,n)}}catch(r){return{ok:!1,reason:r.message}}}var zA,Ay,pi=y(()=>{"use strict";Js();tr();qs();di();zA=3e3,Ay=new Map});function Rt(e,t=""){let n=t?` ${t}`:"";return`${Sx} ${e}${n}`}function To(e,t){let n=typeof t=="string"?[t]:t;return e.some(r=>{let o=r.hooks;return Array.isArray(o)?o.some(s=>typeof s.command=="string"&&n.some(i=>s.command.includes(i))):!1})}function hn(e,t){let n=typeof t=="string"?[t]:t,r=[];for(let o of e){let s=o.hooks;if(!Array.isArray(s)){r.push(o);continue}let i=s.filter(a=>!(typeof a.command=="string"&&n.some(l=>a.command.includes(l))));i.length>0&&r.push({...o,hooks:i})}return r}function Kc(e){return To(e,qc)}function bi(e){return hn(e,qc)}var Sx,qc,Ei,Si,Ti=y(()=>{"use strict";Sx='"$HOME/.jolli/jollimemory/run-hook"';qc=["run-hook","StopHook","jollimemory-hooks.jar"],Ei=["run-hook","SessionStartHook"],Si=["run-hook","GeminiAfterAgentHook","jollimemory-hooks.jar"]});var sr=A((nJ,tw)=>{"use strict";var _x="2.0.0",kx=Number.MAX_SAFE_INTEGER||9007199254740991,Rx=16,vx=250,Ax=["major","premajor","minor","preminor","patch","prepatch","prerelease"];tw.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:Rx,MAX_SAFE_BUILD_LENGTH:vx,MAX_SAFE_INTEGER:kx,RELEASE_TYPES:Ax,SEMVER_SPEC_VERSION:_x,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}});var vo=A((rJ,nw)=>{"use strict";var xx=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};nw.exports=xx});var ir=A((st,rw)=>{"use strict";var{MAX_SAFE_COMPONENT_LENGTH:Xc,MAX_SAFE_BUILD_LENGTH:Cx,MAX_LENGTH:Ix}=sr(),Nx=vo();st=rw.exports={};var Px=st.re=[],Ox=st.safeRe=[],T=st.src=[],Dx=st.safeSrc=[],_=st.t={},Lx=0,zc="[a-zA-Z0-9-]",Mx=[["\\s",1],["\\d",Ix],[zc,Cx]],$x=e=>{for(let[t,n]of Mx)e=e.split(`${t}*`).join(`${t}{0,${n}}`).split(`${t}+`).join(`${t}{1,${n}}`);return e},N=(e,t,n)=>{let r=$x(t),o=Lx++;Nx(e,o,t),_[e]=o,T[o]=t,Dx[o]=r,Px[o]=new RegExp(t,n?"g":void 0),Ox[o]=new RegExp(r,n?"g":void 0)};N("NUMERICIDENTIFIER","0|[1-9]\\d*");N("NUMERICIDENTIFIERLOOSE","\\d+");N("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${zc}*`);N("MAINVERSION",`(${T[_.NUMERICIDENTIFIER]})\\.(${T[_.NUMERICIDENTIFIER]})\\.(${T[_.NUMERICIDENTIFIER]})`);N("MAINVERSIONLOOSE",`(${T[_.NUMERICIDENTIFIERLOOSE]})\\.(${T[_.NUMERICIDENTIFIERLOOSE]})\\.(${T[_.NUMERICIDENTIFIERLOOSE]})`);N("PRERELEASEIDENTIFIER",`(?:${T[_.NONNUMERICIDENTIFIER]}|${T[_.NUMERICIDENTIFIER]})`);N("PRERELEASEIDENTIFIERLOOSE",`(?:${T[_.NONNUMERICIDENTIFIER]}|${T[_.NUMERICIDENTIFIERLOOSE]})`);N("PRERELEASE",`(?:-(${T[_.PRERELEASEIDENTIFIER]}(?:\\.${T[_.PRERELEASEIDENTIFIER]})*))`);N("PRERELEASELOOSE",`(?:-?(${T[_.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${T[_.PRERELEASEIDENTIFIERLOOSE]})*))`);N("BUILDIDENTIFIER",`${zc}+`);N("BUILD",`(?:\\+(${T[_.BUILDIDENTIFIER]}(?:\\.${T[_.BUILDIDENTIFIER]})*))`);N("FULLPLAIN",`v?${T[_.MAINVERSION]}${T[_.PRERELEASE]}?${T[_.BUILD]}?`);N("FULL",`^${T[_.FULLPLAIN]}$`);N("LOOSEPLAIN",`[v=\\s]*${T[_.MAINVERSIONLOOSE]}${T[_.PRERELEASELOOSE]}?${T[_.BUILD]}?`);N("LOOSE",`^${T[_.LOOSEPLAIN]}$`);N("GTLT","((?:<|>)?=?)");N("XRANGEIDENTIFIERLOOSE",`${T[_.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);N("XRANGEIDENTIFIER",`${T[_.NUMERICIDENTIFIER]}|x|X|\\*`);N("XRANGEPLAIN",`[v=\\s]*(${T[_.XRANGEIDENTIFIER]})(?:\\.(${T[_.XRANGEIDENTIFIER]})(?:\\.(${T[_.XRANGEIDENTIFIER]})(?:${T[_.PRERELEASE]})?${T[_.BUILD]}?)?)?`);N("XRANGEPLAINLOOSE",`[v=\\s]*(${T[_.XRANGEIDENTIFIERLOOSE]})(?:\\.(${T[_.XRANGEIDENTIFIERLOOSE]})(?:\\.(${T[_.XRANGEIDENTIFIERLOOSE]})(?:${T[_.PRERELEASELOOSE]})?${T[_.BUILD]}?)?)?`);N("XRANGE",`^${T[_.GTLT]}\\s*${T[_.XRANGEPLAIN]}$`);N("XRANGELOOSE",`^${T[_.GTLT]}\\s*${T[_.XRANGEPLAINLOOSE]}$`);N("COERCEPLAIN",`(^|[^\\d])(\\d{1,${Xc}})(?:\\.(\\d{1,${Xc}}))?(?:\\.(\\d{1,${Xc}}))?`);N("COERCE",`${T[_.COERCEPLAIN]}(?:$|[^\\d])`);N("COERCEFULL",T[_.COERCEPLAIN]+`(?:${T[_.PRERELEASE]})?(?:${T[_.BUILD]})?(?:$|[^\\d])`);N("COERCERTL",T[_.COERCE],!0);N("COERCERTLFULL",T[_.COERCEFULL],!0);N("LONETILDE","(?:~>?)");N("TILDETRIM",`(\\s*)${T[_.LONETILDE]}\\s+`,!0);st.tildeTrimReplace="$1~";N("TILDE",`^${T[_.LONETILDE]}${T[_.XRANGEPLAIN]}$`);N("TILDELOOSE",`^${T[_.LONETILDE]}${T[_.XRANGEPLAINLOOSE]}$`);N("LONECARET","(?:\\^)");N("CARETTRIM",`(\\s*)${T[_.LONECARET]}\\s+`,!0);st.caretTrimReplace="$1^";N("CARET",`^${T[_.LONECARET]}${T[_.XRANGEPLAIN]}$`);N("CARETLOOSE",`^${T[_.LONECARET]}${T[_.XRANGEPLAINLOOSE]}$`);N("COMPARATORLOOSE",`^${T[_.GTLT]}\\s*(${T[_.LOOSEPLAIN]})$|^$`);N("COMPARATOR",`^${T[_.GTLT]}\\s*(${T[_.FULLPLAIN]})$|^$`);N("COMPARATORTRIM",`(\\s*)${T[_.GTLT]}\\s*(${T[_.LOOSEPLAIN]}|${T[_.XRANGEPLAIN]})`,!0);st.comparatorTrimReplace="$1$2$3";N("HYPHENRANGE",`^\\s*(${T[_.XRANGEPLAIN]})\\s+-\\s+(${T[_.XRANGEPLAIN]})\\s*$`);N("HYPHENRANGELOOSE",`^\\s*(${T[_.XRANGEPLAINLOOSE]})\\s+-\\s+(${T[_.XRANGEPLAINLOOSE]})\\s*$`);N("STAR","(<|>)?=?\\s*\\*");N("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$");N("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")});var Ri=A((oJ,ow)=>{"use strict";var Fx=Object.freeze({loose:!0}),jx=Object.freeze({}),Hx=e=>e?typeof e!="object"?Fx:e:jx;ow.exports=Hx});var Qc=A((sJ,aw)=>{"use strict";var sw=/^[0-9]+$/,iw=(e,t)=>{if(typeof e=="number"&&typeof t=="number")return e===t?0:e<t?-1:1;let n=sw.test(e),r=sw.test(t);return n&&r&&(e=+e,t=+t),e===t?0:n&&!r?-1:r&&!n?1:e<t?-1:1},Ux=(e,t)=>iw(t,e);aw.exports={compareIdentifiers:iw,rcompareIdentifiers:Ux}});var se=A((iJ,cw)=>{"use strict";var vi=vo(),{MAX_LENGTH:lw,MAX_SAFE_INTEGER:Ai}=sr(),{safeRe:xi,t:Ci}=ir(),Bx=Ri(),{compareIdentifiers:Zc}=Qc(),ed=class e{constructor(t,n){if(n=Bx(n),t instanceof e){if(t.loose===!!n.loose&&t.includePrerelease===!!n.includePrerelease)return t;t=t.version}else if(typeof t!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);if(t.length>lw)throw new TypeError(`version is longer than ${lw} characters`);vi("SemVer",t,n),this.options=n,this.loose=!!n.loose,this.includePrerelease=!!n.includePrerelease;let r=t.trim().match(n.loose?xi[Ci.LOOSE]:xi[Ci.FULL]);if(!r)throw new TypeError(`Invalid Version: ${t}`);if(this.raw=t,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>Ai||this.major<0)throw new TypeError("Invalid major version");if(this.minor>Ai||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>Ai||this.patch<0)throw new TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map(o=>{if(/^[0-9]+$/.test(o)){let s=+o;if(s>=0&&s<Ai)return s}return o}):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(t){if(vi("SemVer.compare",this.version,this.options,t),!(t instanceof e)){if(typeof t=="string"&&t===this.version)return 0;t=new e(t,this.options)}return t.version===this.version?0:this.compareMain(t)||this.comparePre(t)}compareMain(t){return t instanceof e||(t=new e(t,this.options)),this.major<t.major?-1:this.major>t.major?1:this.minor<t.minor?-1:this.minor>t.minor?1:this.patch<t.patch?-1:this.patch>t.patch?1:0}comparePre(t){if(t instanceof e||(t=new e(t,this.options)),this.prerelease.length&&!t.prerelease.length)return-1;if(!this.prerelease.length&&t.prerelease.length)return 1;if(!this.prerelease.length&&!t.prerelease.length)return 0;let n=0;do{let r=this.prerelease[n],o=t.prerelease[n];if(vi("prerelease compare",n,r,o),r===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(r===void 0)return-1;if(r===o)continue;return Zc(r,o)}while(++n)}compareBuild(t){t instanceof e||(t=new e(t,this.options));let n=0;do{let r=this.build[n],o=t.build[n];if(vi("build compare",n,r,o),r===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(r===void 0)return-1;if(r===o)continue;return Zc(r,o)}while(++n)}inc(t,n,r){if(t.startsWith("pre")){if(!n&&r===!1)throw new Error("invalid increment argument: identifier is empty");if(n){let o=`-${n}`.match(this.options.loose?xi[Ci.PRERELEASELOOSE]:xi[Ci.PRERELEASE]);if(!o||o[1]!==n)throw new Error(`invalid identifier: ${n}`)}}switch(t){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",n,r);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",n,r);break;case"prepatch":this.prerelease.length=0,this.inc("patch",n,r),this.inc("pre",n,r);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",n,r),this.inc("pre",n,r);break;case"release":if(this.prerelease.length===0)throw new Error(`version ${this.raw} is not a prerelease`);this.prerelease.length=0;break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{let o=Number(r)?1:0;if(this.prerelease.length===0)this.prerelease=[o];else{let s=this.prerelease.length;for(;--s>=0;)typeof this.prerelease[s]=="number"&&(this.prerelease[s]++,s=-2);if(s===-1){if(n===this.prerelease.join(".")&&r===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(o)}}if(n){let s=[n,o];r===!1&&(s=[n]),Zc(this.prerelease[0],n)===0?isNaN(this.prerelease[1])&&(this.prerelease=s):this.prerelease=s}break}default:throw new Error(`invalid increment argument: ${t}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};cw.exports=ed});var Kt=A((aJ,uw)=>{"use strict";var dw=se(),Wx=(e,t,n=!1)=>{if(e instanceof dw)return e;try{return new dw(e,t)}catch(r){if(!n)return null;throw r}};uw.exports=Wx});var mw=A((lJ,pw)=>{"use strict";var Jx=Kt(),Gx=(e,t)=>{let n=Jx(e,t);return n?n.version:null};pw.exports=Gx});var gw=A((cJ,fw)=>{"use strict";var qx=Kt(),Kx=(e,t)=>{let n=qx(e.trim().replace(/^[=v]+/,""),t);return n?n.version:null};fw.exports=Kx});var ww=A((dJ,yw)=>{"use strict";var hw=se(),Vx=(e,t,n,r,o)=>{typeof n=="string"&&(o=r,r=n,n=void 0);try{return new hw(e instanceof hw?e.version:e,n).inc(t,r,o).version}catch{return null}};yw.exports=Vx});var bw=A((uJ,Sw)=>{"use strict";var Ew=Kt(),Yx=(e,t)=>{let n=Ew(e,null,!0),r=Ew(t,null,!0),o=n.compare(r);if(o===0)return null;let s=o>0,i=s?n:r,a=s?r:n,l=!!i.prerelease.length;if(!!a.prerelease.length&&!l){if(!a.patch&&!a.minor)return"major";if(a.compareMain(i)===0)return a.minor&&!a.patch?"minor":"patch"}let d=l?"pre":"";return n.major!==r.major?d+"major":n.minor!==r.minor?d+"minor":n.patch!==r.patch?d+"patch":"prerelease"};Sw.exports=Yx});var _w=A((pJ,Tw)=>{"use strict";var Xx=se(),zx=(e,t)=>new Xx(e,t).major;Tw.exports=zx});var Rw=A((mJ,kw)=>{"use strict";var Qx=se(),Zx=(e,t)=>new Qx(e,t).minor;kw.exports=Zx});var Aw=A((fJ,vw)=>{"use strict";var eC=se(),tC=(e,t)=>new eC(e,t).patch;vw.exports=tC});var Cw=A((gJ,xw)=>{"use strict";var nC=Kt(),rC=(e,t)=>{let n=nC(e,t);return n&&n.prerelease.length?n.prerelease:null};xw.exports=rC});var Oe=A((hJ,Nw)=>{"use strict";var Iw=se(),oC=(e,t,n)=>new Iw(e,n).compare(new Iw(t,n));Nw.exports=oC});var Ow=A((yJ,Pw)=>{"use strict";var sC=Oe(),iC=(e,t,n)=>sC(t,e,n);Pw.exports=iC});var Lw=A((wJ,Dw)=>{"use strict";var aC=Oe(),lC=(e,t)=>aC(e,t,!0);Dw.exports=lC});var Ii=A((EJ,$w)=>{"use strict";var Mw=se(),cC=(e,t,n)=>{let r=new Mw(e,n),o=new Mw(t,n);return r.compare(o)||r.compareBuild(o)};$w.exports=cC});var jw=A((SJ,Fw)=>{"use strict";var dC=Ii(),uC=(e,t)=>e.sort((n,r)=>dC(n,r,t));Fw.exports=uC});var Uw=A((bJ,Hw)=>{"use strict";var pC=Ii(),mC=(e,t)=>e.sort((n,r)=>pC(r,n,t));Hw.exports=mC});var Ao=A((TJ,Bw)=>{"use strict";var fC=Oe(),gC=(e,t,n)=>fC(e,t,n)>0;Bw.exports=gC});var Ni=A((_J,Ww)=>{"use strict";var hC=Oe(),yC=(e,t,n)=>hC(e,t,n)<0;Ww.exports=yC});var td=A((kJ,Jw)=>{"use strict";var wC=Oe(),EC=(e,t,n)=>wC(e,t,n)===0;Jw.exports=EC});var nd=A((RJ,Gw)=>{"use strict";var SC=Oe(),bC=(e,t,n)=>SC(e,t,n)!==0;Gw.exports=bC});var Pi=A((vJ,qw)=>{"use strict";var TC=Oe(),_C=(e,t,n)=>TC(e,t,n)>=0;qw.exports=_C});var Oi=A((AJ,Kw)=>{"use strict";var kC=Oe(),RC=(e,t,n)=>kC(e,t,n)<=0;Kw.exports=RC});var rd=A((xJ,Vw)=>{"use strict";var vC=td(),AC=nd(),xC=Ao(),CC=Pi(),IC=Ni(),NC=Oi(),PC=(e,t,n,r)=>{switch(t){case"===":return typeof e=="object"&&(e=e.version),typeof n=="object"&&(n=n.version),e===n;case"!==":return typeof e=="object"&&(e=e.version),typeof n=="object"&&(n=n.version),e!==n;case"":case"=":case"==":return vC(e,n,r);case"!=":return AC(e,n,r);case">":return xC(e,n,r);case">=":return CC(e,n,r);case"<":return IC(e,n,r);case"<=":return NC(e,n,r);default:throw new TypeError(`Invalid operator: ${t}`)}};Vw.exports=PC});var Xw=A((CJ,Yw)=>{"use strict";var OC=se(),DC=Kt(),{safeRe:Di,t:Li}=ir(),LC=(e,t)=>{if(e instanceof OC)return e;if(typeof e=="number"&&(e=String(e)),typeof e!="string")return null;t=t||{};let n=null;if(!t.rtl)n=e.match(t.includePrerelease?Di[Li.COERCEFULL]:Di[Li.COERCE]);else{let l=t.includePrerelease?Di[Li.COERCERTLFULL]:Di[Li.COERCERTL],c;for(;(c=l.exec(e))&&(!n||n.index+n[0].length!==e.length);)(!n||c.index+c[0].length!==n.index+n[0].length)&&(n=c),l.lastIndex=c.index+c[1].length+c[2].length;l.lastIndex=-1}if(n===null)return null;let r=n[2],o=n[3]||"0",s=n[4]||"0",i=t.includePrerelease&&n[5]?`-${n[5]}`:"",a=t.includePrerelease&&n[6]?`+${n[6]}`:"";return DC(`${r}.${o}.${s}${i}${a}`,t)};Yw.exports=LC});var Qw=A((IJ,zw)=>{"use strict";var MC=Kt(),$C=sr(),FC=se(),jC=(e,t,n)=>{if(!$C.RELEASE_TYPES.includes(t))return null;let r=HC(e,n);return r&&UC(r,t)},HC=(e,t)=>{let n=e instanceof FC?e.version:e;return MC(n,t)},UC=(e,t)=>{if(BC(t))return e.version;switch(e.prerelease=[],t){case"major":e.minor=0,e.patch=0;break;case"minor":e.patch=0;break}return e.format()},BC=e=>e.startsWith("pre");zw.exports=jC});var eE=A((NJ,Zw)=>{"use strict";var od=class{constructor(){this.max=1e3,this.map=new Map}get(t){let n=this.map.get(t);if(n!==void 0)return this.map.delete(t),this.map.set(t,n),n}delete(t){return this.map.delete(t)}set(t,n){if(!this.delete(t)&&n!==void 0){if(this.map.size>=this.max){let o=this.map.keys().next().value;this.delete(o)}this.map.set(t,n)}return this}};Zw.exports=od});var De=A((PJ,oE)=>{"use strict";var WC=/\s+/g,sd=class e{constructor(t,n){if(n=GC(n),t instanceof e)return t.loose===!!n.loose&&t.includePrerelease===!!n.includePrerelease?t:new e(t.raw,n);if(t instanceof id)return this.raw=t.value,this.set=[[t]],this.formatted=void 0,this;if(this.options=n,this.loose=!!n.loose,this.includePrerelease=!!n.includePrerelease,this.raw=t.trim().replace(WC," "),this.set=this.raw.split("||").map(r=>this.parseRange(r.trim())).filter(r=>r.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){let r=this.set[0];if(this.set=this.set.filter(o=>!nE(o[0])),this.set.length===0)this.set=[r];else if(this.set.length>1){for(let o of this.set)if(o.length===1&&eI(o[0])){this.set=[o];break}}}this.formatted=void 0}get range(){if(this.formatted===void 0){this.formatted="";for(let t=0;t<this.set.length;t++){t>0&&(this.formatted+="||");let n=this.set[t];for(let r=0;r<n.length;r++)r>0&&(this.formatted+=" "),this.formatted+=n[r].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(t){t=t.replace(ZC,"");let r=((this.options.includePrerelease&&zC)|(this.options.loose&&QC))+":"+t,o=tE.get(r);if(o)return o;let s=this.options.loose,i=s?ge[ie.HYPHENRANGELOOSE]:ge[ie.HYPHENRANGE];t=t.replace(i,dI(this.options.includePrerelease)),W("hyphen replace",t),t=t.replace(ge[ie.COMPARATORTRIM],VC),W("comparator trim",t),t=t.replace(ge[ie.TILDETRIM],YC),W("tilde trim",t),t=t.replace(ge[ie.CARETTRIM],XC),W("caret trim",t);let a=t.split(" ").map(u=>tI(u,this.options)).join(" ").split(/\s+/).map(u=>cI(u,this.options));s&&(a=a.filter(u=>(W("loose invalid filter",u,this.options),!!u.match(ge[ie.COMPARATORLOOSE])))),W("range list",a);let l=new Map,c=a.map(u=>new id(u,this.options));for(let u of c){if(nE(u))return[u];l.set(u.value,u)}l.size>1&&l.has("")&&l.delete("");let d=[...l.values()];return tE.set(r,d),d}intersects(t,n){if(!(t instanceof e))throw new TypeError("a Range is required");return this.set.some(r=>rE(r,n)&&t.set.some(o=>rE(o,n)&&r.every(s=>o.every(i=>s.intersects(i,n)))))}test(t){if(!t)return!1;if(typeof t=="string")try{t=new qC(t,this.options)}catch{return!1}for(let n=0;n<this.set.length;n++)if(uI(this.set[n],t,this.options))return!0;return!1}};oE.exports=sd;var JC=eE(),tE=new JC,GC=Ri(),id=xo(),W=vo(),qC=se(),{safeRe:ge,src:KC,t:ie,comparatorTrimReplace:VC,tildeTrimReplace:YC,caretTrimReplace:XC}=ir(),{FLAG_INCLUDE_PRERELEASE:zC,FLAG_LOOSE:QC}=sr(),ZC=new RegExp(KC[ie.BUILD],"g"),nE=e=>e.value==="<0.0.0-0",eI=e=>e.value==="",rE=(e,t)=>{let n=!0,r=e.slice(),o=r.pop();for(;n&&r.length;)n=r.every(s=>o.intersects(s,t)),o=r.pop();return n},tI=(e,t)=>(e=e.replace(ge[ie.BUILD],""),W("comp",e,t),e=oI(e,t),W("caret",e),e=nI(e,t),W("tildes",e),e=iI(e,t),W("xrange",e),e=lI(e,t),W("stars",e),e),he=e=>!e||e.toLowerCase()==="x"||e==="*",nI=(e,t)=>e.trim().split(/\s+/).map(n=>rI(n,t)).join(" "),rI=(e,t)=>{let n=t.loose?ge[ie.TILDELOOSE]:ge[ie.TILDE];return e.replace(n,(r,o,s,i,a)=>{W("tilde",e,r,o,s,i,a);let l;return he(o)?l="":he(s)?l=`>=${o}.0.0 <${+o+1}.0.0-0`:he(i)?l=`>=${o}.${s}.0 <${o}.${+s+1}.0-0`:a?(W("replaceTilde pr",a),l=`>=${o}.${s}.${i}-${a} <${o}.${+s+1}.0-0`):l=`>=${o}.${s}.${i} <${o}.${+s+1}.0-0`,W("tilde return",l),l})},oI=(e,t)=>e.trim().split(/\s+/).map(n=>sI(n,t)).join(" "),sI=(e,t)=>{W("caret",e,t);let n=t.loose?ge[ie.CARETLOOSE]:ge[ie.CARET],r=t.includePrerelease?"-0":"";return e.replace(n,(o,s,i,a,l)=>{W("caret",e,o,s,i,a,l);let c;return he(s)?c="":he(i)?c=`>=${s}.0.0${r} <${+s+1}.0.0-0`:he(a)?s==="0"?c=`>=${s}.${i}.0${r} <${s}.${+i+1}.0-0`:c=`>=${s}.${i}.0${r} <${+s+1}.0.0-0`:l?(W("replaceCaret pr",l),s==="0"?i==="0"?c=`>=${s}.${i}.${a}-${l} <${s}.${i}.${+a+1}-0`:c=`>=${s}.${i}.${a}-${l} <${s}.${+i+1}.0-0`:c=`>=${s}.${i}.${a}-${l} <${+s+1}.0.0-0`):(W("no pr"),s==="0"?i==="0"?c=`>=${s}.${i}.${a}${r} <${s}.${i}.${+a+1}-0`:c=`>=${s}.${i}.${a}${r} <${s}.${+i+1}.0-0`:c=`>=${s}.${i}.${a} <${+s+1}.0.0-0`),W("caret return",c),c})},iI=(e,t)=>(W("replaceXRanges",e,t),e.split(/\s+/).map(n=>aI(n,t)).join(" ")),aI=(e,t)=>{e=e.trim();let n=t.loose?ge[ie.XRANGELOOSE]:ge[ie.XRANGE];return e.replace(n,(r,o,s,i,a,l)=>{W("xRange",e,r,o,s,i,a,l);let c=he(s),d=c||he(i),u=d||he(a),p=u;return o==="="&&p&&(o=""),l=t.includePrerelease?"-0":"",c?o===">"||o==="<"?r="<0.0.0-0":r="*":o&&p?(d&&(i=0),a=0,o===">"?(o=">=",d?(s=+s+1,i=0,a=0):(i=+i+1,a=0)):o==="<="&&(o="<",d?s=+s+1:i=+i+1),o==="<"&&(l="-0"),r=`${o+s}.${i}.${a}${l}`):d?r=`>=${s}.0.0${l} <${+s+1}.0.0-0`:u&&(r=`>=${s}.${i}.0${l} <${s}.${+i+1}.0-0`),W("xRange return",r),r})},lI=(e,t)=>(W("replaceStars",e,t),e.trim().replace(ge[ie.STAR],"")),cI=(e,t)=>(W("replaceGTE0",e,t),e.trim().replace(ge[t.includePrerelease?ie.GTE0PRE:ie.GTE0],"")),dI=e=>(t,n,r,o,s,i,a,l,c,d,u,p)=>(he(r)?n="":he(o)?n=`>=${r}.0.0${e?"-0":""}`:he(s)?n=`>=${r}.${o}.0${e?"-0":""}`:i?n=`>=${n}`:n=`>=${n}${e?"-0":""}`,he(c)?l="":he(d)?l=`<${+c+1}.0.0-0`:he(u)?l=`<${c}.${+d+1}.0-0`:p?l=`<=${c}.${d}.${u}-${p}`:e?l=`<${c}.${d}.${+u+1}-0`:l=`<=${l}`,`${n} ${l}`.trim()),uI=(e,t,n)=>{for(let r=0;r<e.length;r++)if(!e[r].test(t))return!1;if(t.prerelease.length&&!n.includePrerelease){for(let r=0;r<e.length;r++)if(W(e[r].semver),e[r].semver!==id.ANY&&e[r].semver.prerelease.length>0){let o=e[r].semver;if(o.major===t.major&&o.minor===t.minor&&o.patch===t.patch)return!0}return!1}return!0}});var xo=A((OJ,dE)=>{"use strict";var Co=Symbol("SemVer ANY"),cd=class e{static get ANY(){return Co}constructor(t,n){if(n=sE(n),t instanceof e){if(t.loose===!!n.loose)return t;t=t.value}t=t.trim().split(/\s+/).join(" "),ld("comparator",t,n),this.options=n,this.loose=!!n.loose,this.parse(t),this.semver===Co?this.value="":this.value=this.operator+this.semver.version,ld("comp",this)}parse(t){let n=this.options.loose?iE[aE.COMPARATORLOOSE]:iE[aE.COMPARATOR],r=t.match(n);if(!r)throw new TypeError(`Invalid comparator: ${t}`);this.operator=r[1]!==void 0?r[1]:"",this.operator==="="&&(this.operator=""),r[2]?this.semver=new lE(r[2],this.options.loose):this.semver=Co}toString(){return this.value}test(t){if(ld("Comparator.test",t,this.options.loose),this.semver===Co||t===Co)return!0;if(typeof t=="string")try{t=new lE(t,this.options)}catch{return!1}return ad(t,this.operator,this.semver,this.options)}intersects(t,n){if(!(t instanceof e))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new cE(t.value,n).test(this.value):t.operator===""?t.value===""?!0:new cE(this.value,n).test(t.semver):(n=sE(n),n.includePrerelease&&(this.value==="<0.0.0-0"||t.value==="<0.0.0-0")||!n.includePrerelease&&(this.value.startsWith("<0.0.0")||t.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&t.operator.startsWith(">")||this.operator.startsWith("<")&&t.operator.startsWith("<")||this.semver.version===t.semver.version&&this.operator.includes("=")&&t.operator.includes("=")||ad(this.semver,"<",t.semver,n)&&this.operator.startsWith(">")&&t.operator.startsWith("<")||ad(this.semver,">",t.semver,n)&&this.operator.startsWith("<")&&t.operator.startsWith(">")))}};dE.exports=cd;var sE=Ri(),{safeRe:iE,t:aE}=ir(),ad=rd(),ld=vo(),lE=se(),cE=De()});var Io=A((DJ,uE)=>{"use strict";var pI=De(),mI=(e,t,n)=>{try{t=new pI(t,n)}catch{return!1}return t.test(e)};uE.exports=mI});var mE=A((LJ,pE)=>{"use strict";var fI=De(),gI=(e,t)=>new fI(e,t).set.map(n=>n.map(r=>r.value).join(" ").trim().split(" "));pE.exports=gI});var gE=A((MJ,fE)=>{"use strict";var hI=se(),yI=De(),wI=(e,t,n)=>{let r=null,o=null,s=null;try{s=new yI(t,n)}catch{return null}return e.forEach(i=>{s.test(i)&&(!r||o.compare(i)===-1)&&(r=i,o=new hI(r,n))}),r};fE.exports=wI});var yE=A(($J,hE)=>{"use strict";var EI=se(),SI=De(),bI=(e,t,n)=>{let r=null,o=null,s=null;try{s=new SI(t,n)}catch{return null}return e.forEach(i=>{s.test(i)&&(!r||o.compare(i)===1)&&(r=i,o=new EI(r,n))}),r};hE.exports=bI});var SE=A((FJ,EE)=>{"use strict";var dd=se(),TI=De(),wE=Ao(),_I=(e,t)=>{e=new TI(e,t);let n=new dd("0.0.0");if(e.test(n)||(n=new dd("0.0.0-0"),e.test(n)))return n;n=null;for(let r=0;r<e.set.length;++r){let o=e.set[r],s=null;o.forEach(i=>{let a=new dd(i.semver.version);switch(i.operator){case">":a.prerelease.length===0?a.patch++:a.prerelease.push(0),a.raw=a.format();case"":case">=":(!s||wE(a,s))&&(s=a);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${i.operator}`)}}),s&&(!n||wE(n,s))&&(n=s)}return n&&e.test(n)?n:null};EE.exports=_I});var TE=A((jJ,bE)=>{"use strict";var kI=De(),RI=(e,t)=>{try{return new kI(e,t).range||"*"}catch{return null}};bE.exports=RI});var Mi=A((HJ,vE)=>{"use strict";var vI=se(),RE=xo(),{ANY:AI}=RE,xI=De(),CI=Io(),_E=Ao(),kE=Ni(),II=Oi(),NI=Pi(),PI=(e,t,n,r)=>{e=new vI(e,r),t=new xI(t,r);let o,s,i,a,l;switch(n){case">":o=_E,s=II,i=kE,a=">",l=">=";break;case"<":o=kE,s=NI,i=_E,a="<",l="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(CI(e,t,r))return!1;for(let c=0;c<t.set.length;++c){let d=t.set[c],u=null,p=null;if(d.forEach(m=>{m.semver===AI&&(m=new RE(">=0.0.0")),u=u||m,p=p||m,o(m.semver,u.semver,r)?u=m:i(m.semver,p.semver,r)&&(p=m)}),u.operator===a||u.operator===l||(!p.operator||p.operator===a)&&s(e,p.semver))return!1;if(p.operator===l&&i(e,p.semver))return!1}return!0};vE.exports=PI});var xE=A((UJ,AE)=>{"use strict";var OI=Mi(),DI=(e,t,n)=>OI(e,t,">",n);AE.exports=DI});var IE=A((BJ,CE)=>{"use strict";var LI=Mi(),MI=(e,t,n)=>LI(e,t,"<",n);CE.exports=MI});var OE=A((WJ,PE)=>{"use strict";var NE=De(),$I=(e,t,n)=>(e=new NE(e,n),t=new NE(t,n),e.intersects(t,n));PE.exports=$I});var LE=A((JJ,DE)=>{"use strict";var FI=Io(),jI=Oe();DE.exports=(e,t,n)=>{let r=[],o=null,s=null,i=e.sort((d,u)=>jI(d,u,n));for(let d of i)FI(d,t,n)?(s=d,o||(o=d)):(s&&r.push([o,s]),s=null,o=null);o&&r.push([o,null]);let a=[];for(let[d,u]of r)d===u?a.push(d):!u&&d===i[0]?a.push("*"):u?d===i[0]?a.push(`<=${u}`):a.push(`${d} - ${u}`):a.push(`>=${d}`);let l=a.join(" || "),c=typeof t.raw=="string"?t.raw:String(t);return l.length<c.length?l:t}});var UE=A((GJ,HE)=>{"use strict";var ME=De(),md=xo(),{ANY:ud}=md,pd=Io(),fd=Oe(),HI=(e,t,n={})=>{if(e===t)return!0;e=new ME(e,n),t=new ME(t,n);let r=!1;e:for(let o of e.set){for(let s of t.set){let i=BI(o,s,n);if(r=r||i!==null,i)continue e}if(r)return!1}return!0},UI=[new md(">=0.0.0-0")],$E=[new md(">=0.0.0")],BI=(e,t,n)=>{if(e===t)return!0;if(e.length===1&&e[0].semver===ud){if(t.length===1&&t[0].semver===ud)return!0;n.includePrerelease?e=UI:e=$E}if(t.length===1&&t[0].semver===ud){if(n.includePrerelease)return!0;t=$E}let r=new Set,o,s;for(let m of e)m.operator===">"||m.operator===">="?o=FE(o,m,n):m.operator==="<"||m.operator==="<="?s=jE(s,m,n):r.add(m.semver);if(r.size>1)return null;let i;if(o&&s){if(i=fd(o.semver,s.semver,n),i>0)return null;if(i===0&&(o.operator!==">="||s.operator!=="<="))return null}for(let m of r){if(o&&!pd(m,String(o),n)||s&&!pd(m,String(s),n))return null;for(let g of t)if(!pd(m,String(g),n))return!1;return!0}let a,l,c,d,u=s&&!n.includePrerelease&&s.semver.prerelease.length?s.semver:!1,p=o&&!n.includePrerelease&&o.semver.prerelease.length?o.semver:!1;u&&u.prerelease.length===1&&s.operator==="<"&&u.prerelease[0]===0&&(u=!1);for(let m of t){if(d=d||m.operator===">"||m.operator===">=",c=c||m.operator==="<"||m.operator==="<=",o){if(p&&m.semver.prerelease&&m.semver.prerelease.length&&m.semver.major===p.major&&m.semver.minor===p.minor&&m.semver.patch===p.patch&&(p=!1),m.operator===">"||m.operator===">="){if(a=FE(o,m,n),a===m&&a!==o)return!1}else if(o.operator===">="&&!m.test(o.semver))return!1}if(s){if(u&&m.semver.prerelease&&m.semver.prerelease.length&&m.semver.major===u.major&&m.semver.minor===u.minor&&m.semver.patch===u.patch&&(u=!1),m.operator==="<"||m.operator==="<="){if(l=jE(s,m,n),l===m&&l!==s)return!1}else if(s.operator==="<="&&!m.test(s.semver))return!1}if(!m.operator&&(s||o)&&i!==0)return!1}return!(o&&c&&!s&&i!==0||s&&d&&!o&&i!==0||p||u)},FE=(e,t,n)=>{if(!e)return t;let r=fd(e.semver,t.semver,n);return r>0?e:r<0||t.operator===">"&&e.operator===">="?t:e},jE=(e,t,n)=>{if(!e)return t;let r=fd(e.semver,t.semver,n);return r<0?e:r>0||t.operator==="<"&&e.operator==="<="?t:e};HE.exports=HI});var GE=A((qJ,JE)=>{"use strict";var gd=ir(),BE=sr(),WI=se(),WE=Qc(),JI=Kt(),GI=mw(),qI=gw(),KI=ww(),VI=bw(),YI=_w(),XI=Rw(),zI=Aw(),QI=Cw(),ZI=Oe(),eN=Ow(),tN=Lw(),nN=Ii(),rN=jw(),oN=Uw(),sN=Ao(),iN=Ni(),aN=td(),lN=nd(),cN=Pi(),dN=Oi(),uN=rd(),pN=Xw(),mN=Qw(),fN=xo(),gN=De(),hN=Io(),yN=mE(),wN=gE(),EN=yE(),SN=SE(),bN=TE(),TN=Mi(),_N=xE(),kN=IE(),RN=OE(),vN=LE(),AN=UE();JE.exports={parse:JI,valid:GI,clean:qI,inc:KI,diff:VI,major:YI,minor:XI,patch:zI,prerelease:QI,compare:ZI,rcompare:eN,compareLoose:tN,compareBuild:nN,sort:rN,rsort:oN,gt:sN,lt:iN,eq:aN,neq:lN,gte:cN,lte:dN,cmp:uN,coerce:pN,truncate:mN,Comparator:fN,Range:gN,satisfies:hN,toComparators:yN,maxSatisfying:wN,minSatisfying:EN,minVersion:SN,validRange:bN,outside:TN,gtr:_N,ltr:kN,intersects:RN,simplifyRange:vN,subset:AN,SemVer:WI,re:gd.re,src:gd.src,tokens:gd.t,SEMVER_SPEC_VERSION:BE.SEMVER_SPEC_VERSION,RELEASE_TYPES:BE.RELEASE_TYPES,compareIdentifiers:WE.compareIdentifiers,rcompareIdentifiers:WE.rcompareIdentifiers}});var cS={};_r(cS,{POST_MERGE_MARKER_START:()=>Fo,POST_REWRITE_MARKER_START:()=>Mo,PREPARE_MSG_MARKER_START:()=>$o,PRE_PUSH_MARKER_START:()=>jo,installGitHook:()=>Ad,installPostMergeHook:()=>Id,installPostRewriteHook:()=>xd,installPrePushHook:()=>Nd,installPrepareMsgHook:()=>Cd,isGitHookInstalled:()=>aS,isGitPipelineFullyInstalled:()=>lS,isHookSectionInstalled:()=>ur,removeGitHook:()=>Pd,removePostMergeHook:()=>Ld,removePostRewriteHook:()=>Od,removePrePushHook:()=>Md,removePrepareMsgHook:()=>Dd});async function Ad(e){let t=await Fn(e),n=(0,pr.join)(t,"post-commit"),r=Rt("post-commit"),o=[dr,r,vd].join(`
`),s,i="";try{if(i=await(0,ne.readFile)(n,"utf-8"),i.includes(dr)){let l=new RegExp(`\\n*${Vt(dr)}[\\s\\S]*?${Vt(vd)}\\n*`,"g"),d=`${i.replace(l,`
`).trimEnd()}

${o}
`;return i===d?(await Ji(n),{path:n}):(await v(n,d),await(0,ne.chmod)(n,493),{path:n})}s="Existing post-commit hook found \u2014 Jolli Memory section appended",Ui.warn(s)}catch{}let a;i?a=`${i}

${o}
`:a=`#!/bin/sh

${o}
`,await(0,ne.mkdir)(t,{recursive:!0}),await v(n,a);try{await(0,ne.chmod)(n,493)}catch{}return Ui.info("Git post-commit hook installed"),{warning:s,path:n}}async function xd(e){let t=Rt("post-rewrite",'"$1"'),n=[Mo,t,rS].join(`
`);return Bi(e,"post-rewrite",n,Mo)}async function Cd(e){let t='"$HOME/.jolli/jollimemory/run-hook"',n=["__jolli_prepare_msg_previous_status=$?",`if [ -x ${t} ]; then ${t} prepare-commit-msg "$1" "$2" || true; fi`,'(exit "$__jolli_prepare_msg_previous_status")'].join(`
`),r=[$o,n,oS].join(`
`);return Bi(e,"prepare-commit-msg",r,$o)}async function Id(e){let t=Rt("post-merge"),n=[Fo,t,sS].join(`
`);return Bi(e,"post-merge",n,Fo)}async function Nd(e){let t='"$HOME/.jolli/jollimemory/run-hook"',n=["__jolli_pre_push_previous_status=$?",`if [ -x ${t} ]; then ${t} pre-push "$@" || true; fi`,'(exit "$__jolli_pre_push_previous_status")'].join(`
`),r=[jo,n,iS].join(`
`);return Bi(e,"pre-push",r,jo)}async function Bi(e,t,n,r){let o=n.slice(n.lastIndexOf(`
`)+1),s=await Fn(e),i=(0,pr.join)(s,t),a,l="";try{if(l=await(0,ne.readFile)(i,"utf-8"),l.includes(r)){let d=new RegExp(`\\n*${Vt(r)}[\\s\\S]*?${Vt(o)}\\n*`,"g"),p=`${l.replace(d,`
`).trimEnd()}

${n}
`;return l===p?(await Ji(i),{path:i}):(await v(i,p),await(0,ne.chmod)(i,493),{path:i})}a=`Existing ${t} hook found \u2014 Jolli Memory section appended`,Ui.warn(a)}catch{}let c;l?c=`${l}

${n}
`:c=`#!/bin/sh

${n}
`,await(0,ne.mkdir)(s,{recursive:!0}),await v(i,c);try{await(0,ne.chmod)(i,493)}catch{}return Ui.info("Git %s hook installed",t),{warning:a,path:i}}async function Pd(e){let t;try{let s=await Fn(e);t=(0,pr.join)(s,"post-commit")}catch{return{}}let n;try{n=await(0,ne.readFile)(t,"utf-8")}catch{return{}}if(!n.includes(dr))return{};let r=new RegExp(`\\n*${Vt(dr)}[\\s\\S]*?${Vt(vd)}\\n*`,"g"),o=n.replace(r,`
`);if(o.trim()==="#!/bin/sh"||o.trim()===""){let{rm:s}=await import("node:fs/promises");await s(t,{force:!0})}else await v(t,o),await Ji(t);return{}}async function Od(e){await Wi(e,"post-rewrite",Mo,rS)}async function Dd(e){await Wi(e,"prepare-commit-msg",$o,oS)}async function Ld(e){await Wi(e,"post-merge",Fo,sS)}async function Md(e){await Wi(e,"pre-push",jo,iS)}async function Wi(e,t,n,r){let o;try{o=await Fn(e)}catch{return}let s=(0,pr.join)(o,t),i;try{i=await(0,ne.readFile)(s,"utf-8")}catch{return}if(!i.includes(n))return;let a=new RegExp(`\\n*${Vt(n)}[\\s\\S]*?${Vt(r)}\\n*`,"g"),l=i.replace(a,`
`);if(l.trim()==="#!/bin/sh"||l.trim()===""){let{rm:c}=await import("node:fs/promises");await c(s,{force:!0})}else await v(s,l),await Ji(s)}async function aS(e){return ur(e,"post-commit",dr)}async function lS(e){return await aS(e)&&await ur(e,"post-rewrite",Mo)&&await ur(e,"prepare-commit-msg",$o)&&await ur(e,"post-merge",Fo)}async function ur(e,t,n){try{let r=await Fn(e),o=(0,pr.join)(r,t);return(await(0,ne.readFile)(o,"utf-8")).includes(n)?process.platform==="win32"?!0:((await(0,ne.stat)(o)).mode&73)!==0:!1}catch{return!1}}function Vt(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}async function Ji(e){try{((await(0,ne.stat)(e)).mode&73)===0&&await(0,ne.chmod)(e,493)}catch{}}var ne,pr,Ui,dr,vd,Mo,rS,$o,oS,Fo,sS,jo,iS,$d=y(()=>{"use strict";ne=require("node:fs/promises"),pr=require("node:path");Q();Se();w();Ti();Ui=f("GitHookInstaller"),dr="# >>> JolliMemory post-commit hook >>>",vd="# <<< JolliMemory post-commit hook <<<",Mo="# >>> JolliMemory post-rewrite hook >>>",rS="# <<< JolliMemory post-rewrite hook <<<",$o="# >>> JolliMemory prepare-commit-msg hook >>>",oS="# <<< JolliMemory prepare-commit-msg hook <<<",Fo="# >>> JolliMemory post-merge hook >>>",sS="# <<< JolliMemory post-merge hook <<<",jo="# >>> JolliMemory pre-push hook >>>",iS="# <<< JolliMemory pre-push hook <<<"});function Fb(){return"0.99.18"}function Lb(e){return/^\d/.test(e)}function jb(e,t){if(!Lb(e)||!Lb(t))return!1;let n=s=>s.split(".").map(i=>Number.parseInt(i,10)||0),r=n(e),o=n(t);for(let s=0;s<Math.max(r.length,o.length);s++){let i=r[s]??0,a=o[s]??0;if(i!==a)return i>a}return!1}function ha(e,t=TO){return new Promise(n=>{let r=Buffer.alloc(0),o=!1,s=c=>{o||(o=!0,clearTimeout(l),e.removeListener("data",i),e.removeListener("close",a),e.removeListener("error",a),n(c))},i=c=>{r=Buffer.concat([r,c]);let d=r.indexOf(10);if(d===-1){r.length>_O&&s(void 0);return}s({line:r.subarray(0,d).toString("utf8"),rest:r.subarray(d+1)})},a=()=>s(void 0),l=setTimeout(()=>s(void 0),t);l.unref?.(),e.on("data",i),e.once("close",a),e.once("error",a)})}function Hb(e,t){return(0,br.join)((0,Mb.tmpdir)(),`.jolli-${e}-${t}`)}function mu(e){return`${JSON.stringify(e)}
`}var pu,Mb,br,$b,uu,TO,_O,fu=y(()=>{"use strict";pu=require("node:fs"),Mb=require("node:os"),br=require("node:path"),$b=require("node:url");ae();TO=1e4,_O=4096});function vO(e){let t=(0,An.join)((0,An.dirname)((0,hu.fileURLToPath)(e)),kO);return(0,gu.existsSync)(t)?t:void 0}function yu(e,t=process.argv[1],n=process.execArgv){let r=vO(e);if(r)return{entry:r,nodeArgs:[]};let o=(0,An.dirname)((0,hu.fileURLToPath)(e)),s=(0,An.join)((0,An.dirname)(o),RO);if(t?.endsWith(".ts")&&(0,gu.existsSync)(s))return{entry:s,nodeArgs:n}}var gu,An,hu,kO,RO,Ub=y(()=>{"use strict";gu=require("node:fs"),An=require("node:path"),hu=require("node:url"),kO="Cli.js",RO="Cli.ts"});function xO(e){return Hb("global",e)}function CO(e=(0,Wb.homedir)()){return(0,Bb.createHash)("sha256").update(Ar(e,"win32")).digest("hex").slice(0,16)}function ya(e={}){if((e.platform??process.platform)==="win32")return`\\\\.\\pipe\\jolli-global-${CO(e.home)}`;let n=e.uid??process.getuid?.()??0;return(0,Jb.join)(xO(n),"daemon.sock")}function Su(e){let t;try{t=JSON.parse(e)}catch{return}if(typeof t!="object"||t===null)return;let{t:n,protocol:r,version:o,pid:s,startedAt:i}=t;if(!(n!=="hello"||r!==AO)&&!(typeof o!="string"||typeof s!="number"||typeof i!="number"))return{t:"hello",protocol:r,version:o,pid:s,startedAt:i}}var Bb,Wb,Jb,AO,wu,Eu,Gb=y(()=>{"use strict";Bb=require("node:crypto"),Wb=require("node:os"),Jb=require("node:path");fu();ae();AO=1,wu="global-daemon",Eu=300});var Ru={};_r(Ru,{GLOBAL_DAEMON_ENSURE_COMMAND:()=>Tu,ensureGlobalDaemon:()=>OO,probeGlobalDaemon:()=>MO,retireGlobalDaemon:()=>LO,shouldSkipGlobalDaemon:()=>_u,triggerEnsureGlobalDaemon:()=>DO});function _u(e){return e!==null&&NO.has(e)}function ku(e){return new Promise(t=>{let n=!1,r=(0,Kb.connect)(e),o=i=>{n||(n=!0,clearTimeout(s),r.removeAllListeners("connect"),i.socket===void 0&&r.destroy(),t(i))},s=setTimeout(()=>o({socket:void 0}),IO);s.unref?.(),r.once("connect",()=>o({socket:r})),r.on("error",i=>{if(n){Ke.warn("global daemon socket error after connect: %s",R(i));return}o({socket:void 0,code:i.code})})})}async function PO(e){if(!e.startsWith("\\\\.\\pipe\\"))try{await(0,qb.unlink)(e)}catch{}}async function OO(e={}){try{if(_u(e.command??null))return"skipped-excluded-command";if(!cn(e.nodeVersion??process.versions.node))return"skipped-unsupported-node";let t=e.socketPath??ya(),{socket:n,code:r}=await ku(t);if(!n)return r==="ECONNREFUSED"&&await PO(t),(e.spawnDaemon??$O)(t),"spawned";try{let o=await ha(n,e.helloTimeoutMs??Eu),s=o?Su(o.line):void 0;if(!s)return"already-running";let i=e.ownVersion??Fb();return jb(i,s.version)?(n.write(mu({t:"retire"})),Ke.info("retiring global daemon pid %d (v%s < v%s)",s.pid,s.version,i),"retired-incumbent"):"already-running"}finally{n.end()}}catch(t){return Ke.warn("could not ensure the global daemon: %s",R(t)),"failed"}}function DO(e={}){try{return _u(e.command??null)||!cn(e.nodeVersion??process.versions.node)?!1:(FO(e.socketPath),!0)}catch(t){return Ke.warn("could not trigger the global daemon ensure helper: %s",R(t)),!1}}async function LO(e={}){try{let{socket:t}=await ku(e.socketPath??ya());return t?(await ha(t,Eu),t.write(mu({t:"retire"})),t.end(),!0):!1}catch(t){return Ke.warn("could not retire the global daemon: %s",R(t)),!1}}async function MO(e){try{let{socket:t}=await ku(e??ya());if(!t)return;try{let n=await ha(t,5e3);return n?Su(n.line):void 0}finally{t.end()}}catch{return}}function $O(e){let t=yu(__jmImportMetaUrl);if(!t){Ke.warn("Cannot locate the CLI entry to spawn the global daemon");return}let n=ft(process.execPath,[...t.nodeArgs,t.entry,wu,"--socket",e],{detached:!0,stdio:"ignore",cwd:(0,bu.homedir)()});n.on("error",r=>Ke.warn("global daemon failed to spawn: %s",R(r))),n.unref(),Ke.info("spawned global daemon (pid %d)",n.pid??-1)}function FO(e){let t=yu(__jmImportMetaUrl);if(!t){Ke.warn("Cannot locate the CLI entry to spawn the global daemon ensure helper");return}let n=[...t.nodeArgs,t.entry,Tu];e&&n.push("--socket",e);let r=ft(process.execPath,n,{detached:!0,stdio:"ignore",cwd:(0,bu.homedir)()});r.on("error",o=>Ke.warn("global daemon ensure helper failed to start: %s",R(o))),r.unref(),Ke.info("spawned global daemon ensure helper (pid %d)",r.pid??-1)}var qb,Kb,bu,Ke,Tu,IO,NO,vu=y(()=>{"use strict";qb=require("node:fs/promises"),Kb=require("node:net"),bu=require("node:os");fu();Bt();w();Ub();ke();Gb();Ke=f("EnsureGlobalDaemon"),Tu="global-daemon-ensure",IO=200,NO=new Set([wu,Tu,"mcp","mcp-serve","daemon","uninstall","disable"])});var aD={};_r(aD,{buildCodexBootstrapOutput:()=>oT,main:()=>iT,runCodexPluginBootstrap:()=>sT});module.exports=fT(aD);var Yo=require("node:path"),rT=require("node:url");var Pt=require("node:fs"),Du=require("node:os"),es=require("node:path"),_e="JOLLI_LOCAL_AGENT_CHILD",Lu=".jolli-local-agent-child",Mu="jolli-localagent-";function Ie(){let e=(0,Pt.mkdtempSync)((0,es.join)((0,Du.tmpdir)(),Mu));try{(0,Pt.writeFileSync)((0,es.join)(e,Lu),"","utf-8")}catch(t){throw(0,Pt.rmSync)(e,{recursive:!0,force:!0}),t}return e}function Pn(e=process.env,t){return e[_e]==="1"?!0:t!==void 0&&(0,Pt.existsSync)((0,es.join)(t,Lu))}Se();Ze();et();ue();var ra=require("node:fs/promises"),Tn=require("node:path"),QS=require("node:url");var cl=require("node:fs"),_m=require("node:fs/promises"),dl=require("node:os"),Jr=require("node:path");w();Be();var b0=f("AntigravityDetector"),km=["antigravity","antigravity-ide","antigravity-cli"];function Rm(e=(0,dl.homedir)()){let t=[];for(let n of km){let r=(0,Jr.join)(e,".gemini",n),o=(0,Jr.join)(r,"conversations");(0,cl.existsSync)(o)&&t.push({variant:n,root:r,conversationsDir:o,brainDir:(0,Jr.join)(r,"brain")})}return t}async function lk(e){for(let t of Rm(e))try{if((await(0,_m.readdir)(t.conversationsDir)).some(n=>n.endsWith(".db")))return!0}catch{}return!1}async function vm(e=(0,dl.homedir)()){return await lk(e)?!0:km.some(t=>(0,cl.existsSync)((0,Jr.join)(e,".gemini",t)))}w();qn();var bs="mcp__";function Gr(e){return{name:e,kind:"builtin",calls:0}}function pl(e){return{name:e,kind:"skill",calls:0}}function Kn(e,t){return{name:t?`${e}.${t}`:e,kind:"mcp",server:e,calls:0}}function Ts(e){if(!e.startsWith(bs))return Gr(e);let t=e.slice(bs.length),n=t.indexOf("__");return n===-1?Kn(t,""):Kn(t.slice(0,n),t.slice(n+2))}function Am(e,t){if(t===void 0||t.length===0)return Gr(e);if(!t.startsWith(bs))return Kn(t,e);let n=t.slice(bs.length).split("__"),r=n[n.length-1]||n[0]||t;return Kn(r,e)}function uk(e,t){let n=Math.max(e.lastCallAtMs??Number.NEGATIVE_INFINITY,t.lastCallAtMs??Number.NEGATIVE_INFINITY);return Number.isFinite(n)?{lastCallAtMs:n}:{}}var on=class{constructor(){this.byKey=new Map;this.seen=new Set}add(t,n=1){let r=`${t.kind}:${t.name}`,o=this.byKey.get(r);if(!o){this.byKey.set(r,{...t,calls:n});return}this.byKey.set(r,{...o,calls:o.calls+n,...uk(o,t)})}addOnce(t,n){if(t!==void 0){if(this.seen.has(t))return;this.seen.add(t)}this.add(n)}hasSeen(t){return this.seen.has(t)}values(){return[...this.byKey.values()]}};w();w();var pk=new Set(["vitest","jest","mocha","pytest","rspec","phpunit","pest","tox","nose2","unittest","ava","tape","karma","jasmine","cypress"]),mk=new Set(["go test","cargo test","cargo nextest","mix test","dart test","flutter test","dotnet test","bazel test","playwright test"]),fk=new Set(["npm","pnpm","yarn","bun","deno","make"]),gk=/&&|\|\||[;&|]|\n/,hk=/^[A-Za-z_][A-Za-z0-9_]*=/;function ml(e,t){return e===void 0?!1:pk.has(e)?!0:t!==void 0&&mk.has(`${e} ${t}`)}function yk(e){let t=e.split(/\s+/).filter(i=>i.length>0),n=0;for(;n<t.length&&hk.test(t[n]);)n+=1;if(n>=t.length)return!1;let r=t[n],o=t[n+1],s=t[n+2];return!!(r==="npx"&&ml(o,s)||(r==="python"||r==="python3")&&o==="-m"&&ml(s,t[n+3])||ml(r,o)||fk.has(r)&&(o==="test"||o==="t"||o==="run"&&(s==="test"||s==="t")))}function fl(e){for(let t of e.split(gk))if(yk(t))return!0;return!1}function sn(e){if(e===void 0)return;let t=Date.parse(e);return Number.isFinite(t)?t:void 0}function xm(...e){let t=e.filter(n=>n!==void 0);return t.length>0?{lastCallAtMs:Math.max(...t)}:{}}function wk(e){let t=0;for(let n of e)n.type==="tool_result"&&t++;return t}var Om=f("TranscriptParser"),_s=class{parseLine(t,n){return Lm(t,n)}parseUsageTokens(t,n){let r=Pm(t);return r?{input:r.input,output:r.output,cached:r.cached,...r.id&&{dedupKey:r.id},...r.model&&{model:r.model}}:{input:0,output:0,cached:0}}parseUsageByModel(t){let n=new Map,r=new Set;for(let o of t){let s=Pm(o);if(!s)continue;if(s.id){if(r.has(s.id))continue;r.add(s.id)}let i=n.get(s.model);i?n.set(s.model,{...i,input:i.input+s.input,output:i.output+s.output,cached:i.cached+s.cached}):n.set(s.model,{model:s.model,provider:"anthropic",input:s.input,output:s.output,cached:s.cached})}return[...n.values()].filter(o=>o.input+o.output+o.cached>0)}parseToolUse(t){let n=new on,r=[],o=new Map;for(let s of t){let i;try{i=JSON.parse(s)}catch{continue}let a=i,l=a?.message?.content;if(!Array.isArray(l))continue;let c=a.toolUseResult?.commandName,d=typeof c=="string"&&c.length>0?c:void 0,u=wk(l)===1,p=sn(this.parseTimestamp(s));for(let m of l){let g=m;if(g.type==="tool_result"){d!==void 0&&u&&typeof g.tool_use_id=="string"&&o.set(g.tool_use_id,d);continue}if(g.type!=="tool_use"||typeof g.name!="string")continue;let h=typeof g.id=="string"?g.id:void 0;if(g.name==="Skill"&&typeof g.input?.skill=="string"){r.push({...h!==void 0?{id:h}:{},requested:g.input.skill,...p!==void 0?{atMs:p}:{}});continue}n.addOnce(h,{...Ts(g.name),...p!==void 0&&{lastCallAtMs:p}})}}for(let s of r)n.addOnce(s.id,{...pl((s.id!==void 0?o.get(s.id):void 0)??s.requested),...s.atMs!==void 0&&{lastCallAtMs:s.atMs}});return n.values()}parseTimestamp(t,n){try{let r=JSON.parse(t);return typeof r.timestamp=="string"?r.timestamp:void 0}catch{return}}parseCompactions(t){let n=new Set;for(let r of t){let o;try{o=JSON.parse(r)}catch{continue}if(o.isCompactSummary!==!0)continue;let s=sn(this.parseTimestamp(r));s!==void 0&&n.add(s)}return[...n].sort((r,o)=>r-o)}parseTestRuns(t){let n=new Set;for(let r of t){let o;try{o=JSON.parse(r)}catch{continue}let s=o.message?.content;if(Array.isArray(s))for(let i of s){let a=i;if(a.type!=="tool_use"||a.name!=="Bash"||typeof a.input?.command!="string"||!fl(a.input.command))continue;let l=sn(this.parseTimestamp(r));l!==void 0&&n.add(l)}}return[...n].sort((r,o)=>r-o)}},Ek=new Set(["compacted","context_compacted"]);function Cm(e,t){let n=new Set;for(let r of e){let o;try{o=JSON.parse(r)}catch{continue}let s=o?.payload;if(s===null||typeof s!="object")continue;let i=s.type;if(typeof i!="string"||!t.has(i))continue;let a=o.timestamp,l=sn(typeof a=="string"?a:void 0);l!==void 0&&n.add(l)}return[...n].sort((r,o)=>r-o)}var gl=class{parseLine(t,n){try{let r=JSON.parse(t),o=typeof r.timestamp=="string"?r.timestamp:void 0;if(r.type!=="response_item")return null;let s=r.payload;if(!s||typeof s!="object"||s.type!=="message")return null;let i=s.role;if(i!=="user"&&i!=="assistant")return null;let a=Rk(s.content);if(a===null)return null;let l=Ck(a);return l.length===0?null:i==="user"?Ak(l)?null:{role:"human",content:l,timestamp:o}:{role:"assistant",content:l,timestamp:o}}catch(r){return Om.debug("Failed to parse Codex transcript line %d: %s",n,r.message),null}}parseToolUse(t){let n=new Map,r=[];for(let s of t){let i;try{i=JSON.parse(s)}catch{continue}let a=i?.payload;if(a===null||typeof a!="object")continue;let l=a;if(typeof l.type!="string"||!Sk.has(l.type))continue;let c=typeof l.invocation?.tool=="string"?l.invocation.tool:void 0,d=typeof l.invocation?.server=="string"?l.invocation.server:"",u;if(c!==void 0)u=d?Kn(d,c):Gr(c);else if(typeof l.name=="string"&&l.name.length>0)u=Am(l.name,typeof l.namespace=="string"?l.namespace:void 0);else continue;let p=i.timestamp,m=sn(typeof p=="string"?p:void 0),g={...u,...m!==void 0&&{lastCallAtMs:m}},h=typeof l.call_id=="string"?l.call_id:void 0;if(h===void 0){r.push(g);continue}let E=n.get(h),S=E===void 0||E.kind!=="mcp"&&g.kind==="mcp"?g:E;n.set(h,{...S,...E?xm(E.lastCallAtMs,g.lastCallAtMs):xm(g.lastCallAtMs)})}let o=new on;for(let s of[...n.values(),...r])o.add(s);return o.values()}parseUnrecognizedRows(t){let n=0;for(let r of t){let o;try{o=JSON.parse(r)}catch{continue}if(o?.type!=="response_item")continue;let s=o.payload;if(s===null||typeof s!="object")continue;let i=s.type;if(typeof i=="string"){if(!bk.has(i)){n++;continue}i==="message"&&kk(s)&&n++}}return n}parseCompactions(t){return Cm(t,Ek)}parseTurnAborts(t){return Cm(t,new Set(["turn_aborted"]))}parseTestRuns(t){let n=new Set;for(let r of t){let o;try{o=JSON.parse(r)}catch{continue}let s=o?.payload;if(s===null||typeof s!="object")continue;let i=s;if(i.type!=="function_call"||i.name!=="exec_command")continue;let a;try{a=(typeof i.arguments=="string"?JSON.parse(i.arguments):{}).cmd}catch{continue}if(typeof a!="string"||!fl(a))continue;let l=o.timestamp,c=sn(typeof l=="string"?l:void 0);c!==void 0&&n.add(c)}return[...n].sort((r,o)=>r-o)}},Sk=new Set(["function_call","custom_tool_call","local_shell_call","web_search_call","mcp_tool_call_end"]),bk=new Set(["message","reasoning","function_call","function_call_output","custom_tool_call","custom_tool_call_output","local_shell_call","local_shell_call_output","tool_search_call","tool_search_output","web_search_call","mcp_tool_call_begin","mcp_tool_call_end"]),hl=class{parseLine(t,n){try{let r=JSON.parse(t),o=r.type,s=Nm(r);if(o==="turn.prompt"){let a=Dm(r.input)?.trim();return a?{role:"human",content:a,timestamp:s}:null}let i=_k(r);if(i&&i.type==="text"){let a=typeof i.text=="string"?i.text.trim():"";return a?{role:"assistant",content:a,timestamp:s}:null}return null}catch(r){return Om.debug("Failed to parse Kimi transcript line %d: %s",n,r.message),null}}parseToolUse(t){let n=new on;for(let r of t){if(!r.includes(Im))continue;let o;try{o=JSON.parse(r)}catch{continue}if(o.type!==Im)continue;let s=o.event;if(s===null||typeof s!="object"||s.type!=="tool.call"||typeof s.name!="string")continue;let i=sn(this.parseTimestamp(r));n.addOnce(typeof s.toolCallId=="string"?s.toolCallId:void 0,{...s.name===Tk&&typeof s.args?.skill=="string"?pl(s.args.skill):Ts(s.name),...i!==void 0&&{lastCallAtMs:i}})}return n.values()}parseTimestamp(t,n){try{return Nm(JSON.parse(t))}catch{return}}},Im="context.append_loop_event",Tk="Skill";function _k(e){if(e.type==="context.append_loop_event"){let t=e.event;return t?.type==="content.part"&&t.part&&typeof t.part=="object"?t.part:null}return e.type==="content.part"&&e.part&&typeof e.part=="object"?e.part:null}function Nm(e){let t=e.time??e.timestamp;return typeof t=="number"&&Number.isFinite(t)?new Date(t).toISOString():typeof t=="string"&&t.length>0?t:void 0}function Dm(e){if(typeof e=="string")return e.length>0?e:null;if(Array.isArray(e)){let t=[];for(let n of e){let r=Dm(n);r&&t.push(r)}return t.length>0?t.join(`
`):null}if(e!==null&&typeof e=="object"){let t=e;if((t.type==="text"||t.type===void 0)&&typeof t.text=="string"&&t.text.length>0)return t.text}return null}function kk(e){let t=e.role;if(typeof t=="string"&&t!=="user"&&t!=="assistant")return!0;let n=e.content;if(Array.isArray(n))for(let r of n){if(!r||typeof r!="object")continue;let o=r.type;if(typeof r.text=="string"&&o!=="input_text"&&o!=="output_text")return!0}return!1}function Rk(e){if(!Array.isArray(e))return null;let t=[];for(let r of e){if(!r||typeof r!="object")continue;let o=r.type,s=r.text;(o==="input_text"||o==="output_text")&&typeof s=="string"&&t.push(s)}let n=t.join(`
`).trim();return n.length>0?n:null}var vk=["recommended_plugins","environment_context","skill","turn_aborted"];function Ak(e){let t=e.trimStart();for(let r of vk)if(t.startsWith(`<${r}>`)&&e.includes(`</${r}>`))return!0;return t.startsWith("# AGENTS.md instructions")&&(/<INSTRUCTIONS>[\s\S]*<\/INSTRUCTIONS>/.test(e)||/<environment_context>[\s\S]*<\/environment_context>/.test(e))||t.startsWith("The following is the Codex agent history")&&e.includes("untrusted evidence")?!0:e.replace(/<image\b[^>]*\/?>|<\/image>/g,"").trim().length===0}var xk=/(?:\s*<oai-mem-citation>(?:(?!<\/oai-mem-citation>)[\s\S])*<\/oai-mem-citation>)+\s*$/;function Ck(e){return e.replace(xk,"").trimEnd()}function Pm(e){try{return Nk(JSON.parse(e))}catch{return null}}function Ik(e){return e.startsWith("<")&&e.endsWith(">")}function Nk(e){let t=e,n=t?.message?.usage??t?.usage;if(!n||typeof n!="object")return null;let r=i=>typeof n[i]=="number"?n[i]:0,o=t?.message?.model??t?.model,s=t?.message?.id;return{id:typeof s=="string"?s:"",model:typeof o=="string"&&!Ik(o)?o:"",input:r("input_tokens"),output:r("output_tokens"),cached:r("cache_creation_input_tokens")}}var Pk=new _s,Ok=new gl,Dk=new hl;function Lk(e){switch(e){case"codex":return Ok;case"kimi":return Dk;case"claude":return Pk}}var Mk=["claude","codex","kimi"],$k=["gemini","opencode","antigravity","cursor","cursor-cli","cline-cli","devin","hermes"],I0=new Set([...Mk.filter(e=>Lk(e).parseToolUse!==void 0),...$k]);var yl=f("TranscriptReader");var Fk=["Base directory for this skill:","[Request interrupted by user"],jk=/<(?:system-reminder|ide_opened_file|ide_selection|local-command-caveat|command-name|command-message|command-args|local-command-stdout)>[\s\S]*?<\/(?:system-reminder|ide_opened_file|ide_selection|local-command-caveat|command-name|command-message|command-args|local-command-stdout)>/g;function Lm(e,t){try{let n=JSON.parse(e);if(n.isCompactSummary===!0)return yl.debug("Skipping compaction summary at line %d",t),null;if(!n.message||typeof n.message!="object")return null;let r=n.message,o=r.role,s=typeof n.timestamp=="string"?n.timestamp:void 0;if(o==="user")return Hk(r,s,t);if(o==="assistant"){let i=Mm(r.content)?.trim();return i?{role:"assistant",content:i,timestamp:s}:null}return null}catch(n){return yl.debug("Failed to parse transcript line %d: %s",t,n.message),null}}function Hk(e,t,n){let r=Mm(e.content);if(!r)return null;let o=Uk(r);return o.length===0?null:Fk.some(s=>o.startsWith(s))?(yl.debug("Skipping filtered user message at line %d",n),null):{role:"human",content:o,timestamp:t}}function Uk(e){return e.replace(jk,"").trim()}function Mm(e){if(typeof e=="string")return e.length>0?e:null;if(Array.isArray(e)){let t=[];for(let n of e)if(n!==null&&typeof n=="object"){let r=n;r.type==="text"&&typeof r.text=="string"&&t.push(r.text)}return t.length>0?t.join(`
`):null}return null}Se();xr();ae();Be();var tM=f("AntigravityDiscoverer"),nM=2880*60*1e3;var $m=require("node:fs/promises"),ks=require("node:os"),El=require("node:path");function Bk(e=(0,ks.homedir)()){return(0,El.join)(e,".cline","data")}function Fm(e=(0,ks.homedir)()){return(0,El.join)(Bk(e),"sessions")}async function jm(e=(0,ks.homedir)()){try{return await(0,$m.access)(Fm(e)),!0}catch{return!1}}w();ae();var dM=f("ClineCliDiscoverer"),uM=2880*60*1e3;var Sl=require("node:fs/promises"),Vr=require("node:os"),vs=require("node:path");var Rs=require("node:os"),Kr=require("node:path");w();var fM=f("VscodeWorkspaceLocator"),Hm=["Code","Code - Insiders","Cursor","VSCodium","Windsurf"];function wt(e,t=(0,Rs.homedir)()){switch((0,Rs.platform)()){case"darwin":return(0,Kr.join)(t,"Library","Application Support",e);case"win32":return(0,Kr.join)(process.env.APPDATA??(0,Kr.join)(t,"AppData","Roaming"),e);default:return(0,Kr.join)(t,".config",e)}}var Wk="saoudrizwan.claude-dev";function Jk(e,t){return(0,vs.join)(wt(e,t),"User","globalStorage",Wk)}function Yr(e=(0,Vr.homedir)()){return Hm.map(t=>Jk(t,e))}function As(e){return(0,vs.join)(e,"settings","cline_mcp_settings.json")}async function Um(e=(0,Vr.homedir)()){for(let t of Yr(e))try{return await(0,Sl.access)((0,vs.join)(t,"state","taskHistory.json")),!0}catch{}return!1}async function bl(e=(0,Vr.homedir)()){let t=[];for(let n of Yr(e))try{await(0,Sl.access)(As(n)),t.push(n)}catch{}return t}async function Bm(e=(0,Vr.homedir)()){return(await bl(e)).length>0}w();ae();var TM=f("ClineDiscoverer"),_M=2880*60*1e3;var Tl=require("node:fs/promises"),Wm=require("node:os"),_l=require("node:path");w();qn();ae();var PM=f("CodexDiscoverer"),OM=2880*60*1e3,Gk=".codex";async function kl(){let e=(0,_l.join)((0,Wm.homedir)(),Gk);try{return(await(0,Tl.stat)(e)).isDirectory()}catch{return!1}}var DM=1440*60*1e3;var Gm=require("node:fs/promises"),qm=require("node:os"),Rl=require("node:path");w();var qk=f("CopilotChatDetector");function Kk(e){return(0,Rl.join)(wt("Code",e),"User","globalStorage","github.copilot-chat")}function Vk(e=(0,qm.homedir)()){return(0,Rl.join)(e,".copilot","session-state")}async function Jm(e){try{return(await(0,Gm.stat)(e)).isDirectory()}catch(t){let n=t.code;return n!=="ENOENT"&&qk.warn("Copilot Chat probe stat failed for %s (%s): %s",e,n??"unknown",t.message),!1}}async function Km(){let[e,t]=await Promise.all([Jm(Kk()),Jm(Vk())]);return e||t}w();qn();var GM=f("CopilotChatDiscoverer"),qM=2880*60*1e3;var Ym=require("node:fs/promises"),Xm=require("node:os"),zm=require("node:path");w();Be();var Qm=f("CopilotDetector");function Zm(){return(0,zm.join)((0,Xm.homedir)(),".copilot","session-store.db")}async function ef(){return tt()?vl():(Qm.info("Copilot CLI support disabled: this runtime is Node %s, requires %d.%d+ for built-in SQLite",process.versions.node,ht.major,ht.minor),!1)}async function vl(){let e=Zm();try{return(await(0,Ym.stat)(e)).isFile()}catch(t){let n=t.code;return n!=="ENOENT"&&Qm.warn("Copilot DB stat failed (%s): %s",n??"unknown",t.message),!1}}w();Be();var n$=f("CopilotDiscoverer"),r$=2880*60*1e3;var xs=require("node:fs/promises"),Cs=require("node:os"),of=require("node:path");w();var tf=require("node:os"),nf=require("node:path");function rf(e=(0,tf.homedir)()){return(0,nf.join)(e,".cursor")}ae();var d$=f("CursorCliDiscoverer"),u$=2880*60*1e3;function Qk(e=(0,Cs.homedir)()){return rf(e)}function Zk(e=(0,Cs.homedir)()){return(0,of.join)(Qk(e),"chats")}async function sf(e=(0,Cs.homedir)()){try{return(await(0,xs.stat)(Zk(e))).isDirectory()}catch{return!1}}var af=require("node:fs/promises"),lf=require("node:path");w();Be();var eR=f("CursorDetector");function cf(e){return(0,lf.join)(wt("Cursor",e),"User","globalStorage","state.vscdb")}async function df(){return tt()?Al():(eR.info("Cursor support disabled: this runtime is Node %s, requires 22.13+ for built-in SQLite",process.versions.node),!1)}async function Al(){let e=cf();try{return(await(0,af.stat)(e)).isFile()}catch{return!1}}w();Be();var _$=f("CursorDiscoverer"),k$=2880*60*1e3;var xl=require("node:fs/promises"),uf=require("node:os"),Yn=require("node:path");w();Be();var I$=f("DevinDiscoverer"),N$=2880*60*1e3;function pf(e){let t=e??(0,uf.homedir)();if(process.platform==="win32")return(0,Yn.join)(process.env.APPDATA??(0,Yn.join)(t,"AppData","Roaming"),"devin","cli");let n=process.env.XDG_DATA_HOME,r=n&&n.length>0?n:(0,Yn.join)(t,".local","share");return(0,Yn.join)(r,"devin","cli")}function tR(e){return(0,Yn.join)(pf(e),"sessions.db")}async function nR(){try{return(await(0,xl.stat)(tR())).isFile()}catch{return!1}}async function mf(){if(await nR())return!0;try{return(await(0,xl.stat)(pf())).isDirectory()}catch{return!1}}var ff=require("node:fs/promises"),gf=require("node:os"),hf=require("node:path");w();var rR=f("GeminiDetector"),oR=".gemini";async function Cl(){let e=(0,hf.join)((0,gf.homedir)(),oR);try{return(await(0,ff.stat)(e)).isDirectory()}catch{return rR.debug("Gemini directory not found: %s",e),!1}}Se();var Et=require("node:fs/promises"),Nl=require("node:os"),an=require("node:path");w();Q();var Il=f("HermesConfigPaths");function Is(e=process.env,t=(0,Nl.homedir)(),n=process.platform){let r=e.HERMES_HOME?.trim();if(r&&r.length>0)return r;if(n==="win32"){let o=e.LOCALAPPDATA?.trim();return(0,an.join)(o&&o.length>0?o:(0,an.join)(t,"AppData","Local"),"hermes")}return(0,an.join)(t,".hermes")}async function Pl(e=process.env,t=(0,Nl.homedir)(),n=process.platform){let r=Is(e,t,n),o;try{o=await(0,Et.readdir)((0,an.join)(r,"profiles"),{withFileTypes:!0})}catch{return[r]}let s=[];for(let i of o){if(!i.isDirectory())continue;let a=(0,an.join)(r,"profiles",i.name);await sR(a)&&s.push(a)}return[r,...s.sort()]}async function sR(e){try{return(await(0,Et.readdir)(e)).length>0}catch(t){return Il.warn("Skipping unreadable Hermes profile directory %s: %s",e,String(t)),!1}}function yf(e=process.env){return(0,an.join)(Is(e),"config.yaml")}async function wf(e,t){let n="";try{n=await(0,Et.readFile)(e,"utf-8")}catch(a){if(a.code!=="ENOENT"){Il.warn("Skipping Hermes allowlist upsert: %s unreadable (%s)",e,String(a));return}}let r;try{r=n.trim().length===0?{approvals:[]}:JSON.parse(n)}catch(a){Il.warn("Skipping Hermes allowlist upsert: %s not valid JSON (%s)",e,String(a));return}Array.isArray(r.approvals)||(r.approvals=[]);let o=await iR(t.scriptPath),s=r.approvals.find(a=>a.event===t.event&&a.command===t.command);if(s!==void 0){if(s.script_mtime_at_approval===o)return;s.approved_at=t.nowIso,s.script_mtime_at_approval=o}else r.approvals.push({event:t.event,command:t.command,approved_at:t.nowIso,script_mtime_at_approval:o});let i={approvals:Sf(r.approvals)};await v(e,`${JSON.stringify(i,Tf,2)}`,await bf(e))}async function Ef(e,t){let n;try{n=await(0,Et.readFile)(e,"utf-8")}catch{return}let r;try{r=JSON.parse(n)}catch{return}if(!Array.isArray(r.approvals))return;let o=r.approvals.length;r.approvals=r.approvals.filter(s=>!(s.event===t.event&&s.command===t.command)),r.approvals.length!==o&&await v(e,`${JSON.stringify({approvals:Sf(r.approvals)},Tf,2)}`,await bf(e))}function Sf(e){return e.sort((t,n)=>t.event===n.event?t.command<n.command?-1:t.command>n.command?1:0:t.event<n.event?-1:1)}async function bf(e){try{return(await(0,Et.stat)(e)).mode&511}catch{return}}function Tf(e,t){return t!==null&&typeof t=="object"&&!Array.isArray(t)?Object.fromEntries(Object.entries(t).sort(([n],[r])=>n<r?-1:1)):t}async function iR(e){try{let t=await(0,Et.stat)(e,{bigint:!0});return aR(t.mtimeNs)}catch{return null}}function aR(e){let t=1000000000n,n=e/t,r=e%t,o=Number(n)+Number(r)/1e9,s=Math.floor(o),i=lR((o-s)*1e6);i===1e6&&(s+=1,i=0);let a=new Date(s*1e3).toISOString().replace(".000Z","");return i===0?`${a}Z`:`${a}.${i.toString().padStart(6,"0")}Z`}function lR(e){let t=Math.floor(e),n=e-t;return n<.5?t:n>.5?t+1:t%2===0?t:t+1}var Xn=require("node:fs/promises"),_f=require("node:os"),Ns=require("node:path");w();Be();var J$=f("HermesDiscoverer"),G$=2880*60*1e3;function kf(e){return Is(process.env,e??(0,_f.homedir)(),process.platform)}async function cR(e){let t=kf(e),n=[(0,Ns.join)(t,"state.db")],r;try{r=(await(0,Xn.readdir)((0,Ns.join)(t,"profiles"),{withFileTypes:!0})).filter(s=>s.isDirectory()).map(s=>s.name)}catch{return n}for(let o of r){let s=(0,Ns.join)(t,"profiles",o,"state.db");try{(await(0,Xn.stat)(s)).isFile()&&n.push(s)}catch{}}return n}async function dR(){for(let e of await cR())try{if((await(0,Xn.stat)(e)).isFile())return!0}catch{}return!1}async function Rf(){if(await dR())return!0;try{return(await(0,Xn.stat)(kf())).isDirectory()}catch{return!1}}zr();var Os=require("node:fs/promises"),Kf=require("node:os"),jl=require("node:path");w();qn();var pF=f("KimiDiscoverer"),mF=2880*60*1e3,_R=".kimi-code";function Ds(){return process.env.KIMI_CODE_HOME||(0,jl.join)((0,Kf.homedir)(),_R)}async function Vf(){let e=Ds();try{return(await(0,Os.stat)(e)).isDirectory()}catch{return!1}}Ze();ue();var Ls={"claude-plugin":{host:"claude",localAgentTool:"claude-code",skillInvocation:"/jolli:<name>"},"codex-plugin":{host:"codex",localAgentTool:"codex",skillInvocation:"$jolli:<name>"},"cursor-plugin":{host:"cursor",localAgentTool:"cursor-agent",skillInvocation:"/jolli-<name>"}},hF=Object.keys(Ls);function Ms(e){return e===void 0?void 0:Ls[e]?.localAgentTool}function Hl(e,t){return(e===void 0?void 0:Ls[e]?.skillInvocation)?.replace("<name>",t)}function Xf(e){return(e===void 0?void 0:Ls[e]?.host)??"claude"}function Yf(e,t){return e===void 0||e===t?void 0:e}async function zf(e,t){let n=Ms(e);return n===void 0?null:t.localAgentTool!==void 0&&t.aiProvider!==void 0?{tool:n,seededTool:!1,keptTool:Yf(t.localAgentTool,n),seededProvider:!1}:Ss(r=>{let o=r.localAgentTool===void 0,s=r.aiProvider===void 0,i={tool:n,seededTool:o,keptTool:Yf(r.localAgentTool,n),seededProvider:s};return!o&&!s?{update:null,result:i}:{update:{...s?{aiProvider:"local-agent"}:{},...o?{localAgentTool:n}:{}},result:i}})}var Qf=require("node:fs/promises"),Zf=require("node:os"),Ul=require("node:path");w();Be();var kR=f("OpenCodeDiscoverer"),TF=2880*60*1e3;function RR(){return process.env.XDG_DATA_HOME||(0,Ul.join)((0,Zf.homedir)(),".local","share")}function vR(){return(0,Ul.join)(RR(),"opencode","opencode.db")}async function eg(){return tt()?Bl():(kR.info("OpenCode support disabled: this runtime is Node %s, requires %d.%d+ for built-in SQLite",process.versions.node,ht.major,ht.minor),!1)}async function Bl(){let e=vR();try{return(await(0,Qf.stat)(e)).isFile()}catch{return!1}}w();Q();Ze();ue();var CF=f("PushPendingStore");var IF=10080*60*1e3;var AR=300*1e3,NF=Math.floor(AR/3);ts();w();ke();var jF=f("PushCompensation");w();$s();w();zr();var VF=f("KBRepoDiscoverer");w();Q();$s();Ze();ue();var nj=f("PushControlStore");et();var Ql=require("node:crypto");er();ms();var CR=[["CLAUDECODE","claude"],["CODEX_THREAD_ID","codex"],["GEMINI_CLI","gemini"],["OPENCODE","opencode"],["ANTIGRAVITY_AGENT","antigravity"],["COPILOT_CLI","copilot"],["CLINE_WRAPPER_PATH","cline-cli"],["CLINE_CONNECTOR_CLI_LAUNCH","cline-cli"]],IR=[{familyKey:"CURSOR_AGENT",variants:[["CURSOR_WORKSPACE_LABEL","cursor"],["CURSOR_INVOKED_AS","cursor-cli"]]}];var NR=["recall","search","local-run","remote-run","jolli","init","login","logout","status","timeline","push","dashboard"],aj=new Set(NR);function Gl(e){return e!==void 0&&e!==""&&e!=="0"&&e.toLowerCase()!=="false"}function ql(e){return Tp(e)?e:void 0}function ig(e=process.env){if(Pn(e))return;let t,n=r=>t!==void 0&&t!==r?!1:(t=r,!0);for(let[r,o]of CR)if(Gl(e[r])&&!n(o))return;for(let r of IR){if(!Gl(e[r.familyKey]))continue;let o=new Set(r.variants.filter(([i])=>Gl(e[i])).map(([,i])=>i)),[s]=o;if(o.size!==1||s===void 0||!n(s))return}return t}var ag=require("node:crypto"),nt=require("node:fs"),ln=require("node:fs/promises"),Kl=require("node:path");w();Q();var lg="telemetry-queue.ndjson",PR=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,Vl=500,OR=1e6;function Fs(e){return(0,Kl.join)(G(e),lg)}function DR(e){return typeof e=="string"&&PR.test(e)}function LR(e){let t=(0,ag.createHash)("sha256").update(e).digest("hex"),n=(Number.parseInt(t.slice(16,18),16)&63|128).toString(16).padStart(2,"0");return`${t.slice(0,8)}-${t.slice(8,12)}-5${t.slice(13,16)}-${n}${t.slice(18,20)}-${t.slice(20,32)}`}function MR(e,t){if(typeof e!="object"||e===null||Array.isArray(e))return null;let n=e;return DR(n.eventId)?n:{...n,eventId:LR(t)}}function cg(e,t){let n=G(e);(0,nt.mkdirSync)(n,{recursive:!0});let r=(0,Kl.join)(n,lg);(0,nt.appendFileSync)(r,`${JSON.stringify(t)}
`,"utf-8");try{if((0,nt.statSync)(r).size>OR){let o=(0,nt.readFileSync)(r,"utf-8").split(`
`).filter(s=>s.trim().length>0).slice(-Vl);(0,nt.writeFileSync)(r,o.length>0?`${o.join(`
`)}
`:"","utf-8")}}catch{}}async function Yl(e){let t;try{t=await(0,ln.readFile)(Fs(e),"utf-8")}catch{return[]}let n=[];for(let r of t.split(`
`)){let o=r.trim();if(o.length!==0)try{let s=MR(JSON.parse(o),o);s&&n.push(s)}catch{}}return n.slice(-Vl)}async function dg(e,t){let n=t.slice(-Vl);if(n.length===0){await(0,ln.rm)(Fs(e),{force:!0});return}await(0,ln.mkdir)(G(e),{recursive:!0});let r=`${n.map(o=>JSON.stringify(o)).join(`
`)}
`;await v(Fs(e),r)}async function ug(e){await(0,ln.rm)(Fs(e),{force:!0})}function $R(e){let t=e.DO_NOT_TRACK;if(t===void 0)return!1;let n=t.trim();return n!==""&&n!=="0"}function Xl(e){let t=e.env??process.env;return $R(t)?{enabled:!1,reason:"do-not-track"}:e.platformDisabled===!0?{enabled:!1,reason:"platform-off"}:e.config.telemetry==="off"?{enabled:!1,reason:"config-off"}:{enabled:!0,reason:"on"}}function pg(e){return Xl(e).enabled}var FR={app_installed:"First run after install; installId minted (once per machine). Props: none \u2014 count distinct install_id.",client_activated:"A GUI surface activated (VS Code activate / IntelliJ project open), carrying `surface_version`. First-seen (install_id, surface_version) \u2248 new + upgrade installs that launched. GUI-only \u2014 CLI new/upgrade is read from any event's surface_version.",surface_enabled:"A surface was enabled in a repo. Props: trigger.",surface_disabled:"A surface was disabled / opted out. Props: trigger, reason.",push_enabled:"Outbound push re-enabled for a repo (spec 306, per-repo push control). Props: trigger.",push_disabled:"Outbound push disabled for a repo (spec 306, per-repo push control). Props: trigger.",signin_started:"User initiated OAuth sign-in. Props: trigger.",signin_completed:"jolliApiKey minted \u2014 the conversion event. Props: api_key_minted.",signed_out:"User logged out. Props: none.",ai_provider_selected:"User chose jolli vs anthropic for LLM. Props: provider (discriminator).",memory_bank_migrated:"Migrate-to-Memory-Bank run. Props: outcome, repos, entries_bucket.",onboarding_progressed:"Per-install onboarding-funnel snapshot, emitted from a repo context and deduped by state tuple (+ daily heartbeat). Content-free \u2014 answers 'after install, where do people stall'. Props: in_git_repo, repo_enabled, capture_configured, capture_method (discriminator: local-agent/anthropic/jolli/none), memories_generated, memories_bucket.",command_invoked:'Any CLI command ran (auto-emitted). Props: command (discriminator), ok, duration_ms; via (discriminator: skill:<name> from a closed skill-name set \u2014 present when a Jolli skill\'s recipe invoked the command; absent means directly typed OR a pre-upgrade skill copy that predates the stamp, so absence is not proof of direct use). MCP tool calls carry a `tool` property and are emitted per call (not per session); the session-level `command:"mcp"` event is suppressed.',recall_performed:"A recall was run. Props: hit, result_count_bucket.",search_performed:"A search was run. Props: query_len_bucket, result_count_bucket.",memory_pushed:"Memories pushed to a Space. Props: kind, created, plans_bucket.",export_performed:"Export run. Props: format (discriminator).",ai_source_detected:"A new AI source transcript was detected. Props: source (discriminator: claude/codex/cursor/\u2026).",settings_opened:"Settings UI opened (vscode/intellij). Props: tab (discriminator).",ingest_completed:"A drainIngest run finished. Props: outcome, ingested, idle (no-op when ingested=0), batches, route_calls, reconcile_calls, touched_slugs, topic_failures, duration_ms. Filter idle=true out for real-ingest latency/health metrics.",error_occurred:"A structured error was raised. Content-free schema: { where (stage/subsystem), code (enumerated), source? , retryable? }. Emitted via trackError(); never carries a message/stack/path.",queue_drained:"QueueWorker finished a drain. Props: ops, duration_ms; trigger (discriminator: agent/ui/terminal/unknown \u2014 who set the drained commits in motion) and agent (which AI host, when trigger=agent) are present only when every drained entry agrees, and omitted for mixed or unstamped drains.",sync_completed:"A memory-bank sync round finished. Props: outcome (discriminator), duration_ms.",toolwindow_opened:"The memory tool window was opened. Props: view.",view_switched:"Tool window view switched (current/bank/knowledge). Props: view (discriminator).",memory_committed:"User committed a memory via the Commit button. Props: files_bucket (bucketed changed-file count), has_conversations (bool), context_bucket (bucketed plans/context count).",memory_expanded:"A committed memory's details were expanded. Props: expanded.",memory_item_opened:"An item inside a memory was opened. Props: item_type (discriminator: conversation/file/plan/note/reference/shipped); render (conversation only: live/stored \u2014 whether the source transcript was reopened or the stored copy was shown); source (conversation only: the transcript source, e.g. claude/codex); status (file only: the git status code, e.g. A/M/D).",session_resumed:"A conversation session was resumed in a terminal. Props: source (discriminator).",recall_prompt_copied:"A recall prompt was copied to the clipboard. Props: none.",memory_ref_id_copied:"A memory reference id (JM-<docId>) was copied to the clipboard. Props: surface_area (discriminator: list/detail \u2014 which UI the chip was clicked in).",memory_pinned:"An item was pinned. Props: kind (discriminator).",memory_unpinned:"An item was unpinned. Props: kind (discriminator).",repo_switched:"User switched the active repo in the tool window's breadcrumb. Props: is_foreign (bool).",branch_switched:"User switched the active branch in the tool window's breadcrumb. Props: is_foreign (bool).",squash_performed:"User squashed commits. Props: count_bucket (bucketed number of commits squashed).",pr_created:"User created or updated a PR from the tool window. Props: action (discriminator: created/updated).",memory_shared:"User invoked Share for a branch's memories (read-only share link). Props: none.",key_rejected:"The server rejected the API key (401/403). Props: retried, where.",reauth_completed:"Re-authentication after a rejected key finished. Props: outcome.",dashboard_opened:"The local web dashboard was opened in a browser (surface web-local). Props: first_run (bool \u2014 first open in this browser profile; per-origin localStorage, so it re-reports across ports, browsers, or a storage clear).",dashboard_view_switched:"The local web dashboard's left-nav view was switched. Props: view (discriminator: stats/standup/repositories/memories). Distinct from view_switched, which is the IDE tool-window event with its own view vocabulary.",range_changed:"The dashboard time-range control was changed. Props: range (discriminator: 7d/30d/90d/custom).",chart_split_changed:"A dashboard card's split-by control was changed. Props: card (discriminator: tokens/mcp), split (discriminator)."};var jR=new Set(Object.keys(FR));function mg(e){return jR.has(e)}var HR=1,Zl=null;function gg(e){let t=Xl({config:e.config,env:e.env,platformDisabled:e.platformDisabled}),{surface:n,surfaceVersion:r}=WR(),o=ql(e.agent);Zl={enabled:t.enabled,cwd:e.cwd,installId:e.installId,sessionId:e.sessionId,surface:n,surfaceVersion:r,env:BR(e.origin,e.env),...o?{agent:o}:{}}}function hg(){return Zl}function Zr(e,t={}){UR(e,t,void 0)}function UR(e,t,n){let r=Zl;if(!(!r||!r.enabled)&&mg(e))try{let o=KR(t);delete o.agent;let s=t.agent!==void 0,i=n===void 0?r.agent:void 0,a=s?ql(t.agent):i;a&&(o.agent=a);let l={schemaVersion:HR,eventId:(0,Ql.randomUUID)(),eventName:e,surface:n??r.surface,surfaceVersion:r.surfaceVersion,installId:r.installId,...r.sessionId?{sessionId:r.sessionId}:{},os:process.platform,arch:process.arch,runtimeVersion:`node-${process.versions.node}`,env:r.env,tsIso:new Date().toISOString(),accountId:null,properties:o};cg(r.cwd,l)}catch{}}function yg(e){return!Number.isFinite(e)||e<=0?"0":e<=5?"1-5":e<=20?"6-20":e<=100?"21-100":"100+"}function BR(e,t=process.env){if(t.JOLLI_TELEMETRY_ENV==="sandbox")return"sandbox";if(!e)return"unknown";let n;try{n=new URL(e).hostname.toLowerCase()}catch{return"unknown"}let r=o=>n===o||n.endsWith(`.${o}`);return r("jolli-local.me")?"local":r("jolli.dev")||r("jollidev.dev")?"dev":r("jolli.cloud")?"preview":r("jolli.ai")||r("jollidev.com")?"prod":"unknown"}function WR(e=Ht){let t=e.indexOf("/"),n=t===-1?e:e.slice(0,t),r=t===-1?"unknown":e.slice(t+1);return{surface:n==="vscode-plugin"?"vscode":n,surfaceVersion:r||"unknown"}}var JR=new Set(["token","secret","password","passwd","apikey","api_key","jolliapikey","authtoken","auth_token","accesstoken","access_token","refreshtoken","refresh_token","cookie","credential","credentials"]),GR=4,qR=120;function fg(e){return e.length>qR?"[redacted:long]":/\b(?:sk-|ghp_|gho_|ghs_|github_pat_|xox[baprs]-)/.test(e)||e.includes("-----BEGIN")?"[redacted:secret]":/[^\s@]+@[^\s@]+\.[^\s@]+/.test(e)?"[redacted:email]":e.includes("://")?"[redacted:url]":/^~[/\\]/.test(e)||/[A-Za-z0-9._-][/\\][A-Za-z0-9._-]/.test(e)?"[redacted:path]":e}function zl(e,t){if(t>GR)return"[redacted:deep]";if(e===null)return null;if(typeof e=="number")return Number.isFinite(e)?e:null;if(typeof e=="boolean")return e;if(typeof e=="string")return fg(e);if(Array.isArray(e))return e.map(n=>zl(n,t+1)).filter(n=>n!==void 0);if(typeof e=="object"){let n={};for(let[r,o]of Object.entries(e)){if(JR.has(r.toLowerCase()))continue;let s=zl(o,t+1);s!==void 0&&(n[fg(r)]=s)}return n}}function KR(e){return zl(e,0)}var Pj=f("PushControl");et();w();Se();Ze();as();pi();var qy=require("node:path");Js();tr();w();w();var qt=f("DualWriteStorage"),So=class{constructor(t,n){this.primary=t;this.shadow=n;this.kind="dual-write"}get kbRoot(){return this.shadow.kbRoot}async readFile(t){return this.primary.readFile(t)}async batchReadFiles(t){if(this.primary.batchReadFiles)return this.primary.batchReadFiles(t);let n=new Map;for(let r of t)n.set(r,await this.primary.readFile(r));return n}async writeFiles(t,n){if(!V()){await this.primary.writeFiles(t,n);try{await this.shadow.writeFiles(t,n),this.shadow.clearDirty?.()}catch(r){qt.warn("Shadow write failed (folder storage): %s",r instanceof Error?r.message:String(r)),this.shadow.markDirty?.(n)}}}async deleteVisibleMarkdown(t){if(!this.shadow.deleteVisibleMarkdown)return!1;try{return await this.shadow.deleteVisibleMarkdown(t)}catch(n){let r=t.commitHash.substring(0,8);return qt.warn("Shadow deleteVisibleMarkdown failed (folder storage) for %s/%s: %s",t.branch,r,R(n)),this.shadow.markDirty?.(`deleteVisibleMarkdown ${t.branch}/${r}`),!1}}async regenerateVisibleMarkdown(t){if(!this.shadow.regenerateVisibleMarkdown)return!1;try{return await this.shadow.regenerateVisibleMarkdown(t)}catch(n){let r=t.commitHash.substring(0,8);return qt.warn("Shadow regenerateVisibleMarkdown failed (folder storage) for %s/%s: %s",t.branch,r,R(n)),this.shadow.markDirty?.(`regenerateVisibleMarkdown ${t.branch}/${r}`),!1}}async deletePlanVisible(t,n){if(this.shadow.deletePlanVisible)try{await this.shadow.deletePlanVisible(t,n)}catch(r){qt.warn("Shadow deletePlanVisible failed (folder storage) for %s on %s: %s",t,n,R(r)),this.shadow.markDirty?.(`deletePlanVisible ${n}/${t}`)}}async deleteNoteVisible(t,n){if(this.shadow.deleteNoteVisible)try{await this.shadow.deleteNoteVisible(t,n)}catch(r){qt.warn("Shadow deleteNoteVisible failed (folder storage) for %s on %s: %s",t,n,R(r)),this.shadow.markDirty?.(`deleteNoteVisible ${n}/${t}`)}}async pruneBranchMappings(t){if(!this.shadow.pruneBranchMappings)return 0;try{return await this.shadow.pruneBranchMappings(t)}catch(n){return qt.warn("Shadow pruneBranchMappings failed (folder storage): %s",R(n)),this.shadow.markDirty?.(`pruneBranchMappings ${t.length}`),0}}async healMissingVisibleMarkdown(t){let n=this.shadow.healMissingVisibleMarkdown?this.shadow:this.primary.healMissingVisibleMarkdown?this.primary:null;if(!n)return{healed:0,skipped:0,failed:0};let r=t?.dropOrphanedManifestEntries??!0,o=n===this.shadow?"shadow":"primary";try{return await n.healMissingVisibleMarkdown?.({dropOrphanedManifestEntries:r})??{healed:0,skipped:0,failed:0}}catch(s){let i=s?.code,a=i?`[${i}] ${R(s)}`:R(s);return qt.warn("%s healMissingVisibleMarkdown failed: %s",o,a),n.markDirty?.("healMissingVisibleMarkdown"),{healed:0,skipped:0,failed:0,error:a}}}async listFiles(t){return this.primary.listFiles(t)}async exists(){return this.primary.exists()}isDirty(){return this.shadow.isDirty?.()??!1}async ensure(){await this.primary.ensure();try{await this.shadow.ensure()}catch(t){qt.warn("Shadow ensure failed: %s",t instanceof Error?t.message:String(t))}}async renderTopicWiki(t){await this.shadow.renderTopicWiki?.(t)}isTopicWikiPresent(){return this.shadow.isTopicWikiPresent?.()??!1}};var O=require("node:fs"),Jy=require("node:fs/promises"),L=require("node:path");w();var te=require("node:fs");var We=require("node:path");w();var QA=f("Sync:VaultSymlinkGuard");function ZA(e,t){if(!(0,We.isAbsolute)(t))throw new Error(`assertNoSymlinksInPathSync: absTargetPath must be absolute, got ${t}`);if(!(0,We.isAbsolute)(e))throw new Error(`assertNoSymlinksInPathSync: vaultRoot must be absolute, got ${e}`);let n=(0,We.relative)(e,t);if(n===""||n.startsWith("..")||(0,We.isAbsolute)(n))throw new Error(`assertNoSymlinksInPathSync: target ${t} is not inside vault ${e}`);let r=n.split(We.sep),o=e;for(let s=0;s<r.length-1;s++){let i=r[s];if(i===void 0||i.length===0)continue;o=`${o}${We.sep}${i}`;let a;try{a=(0,te.lstatSync)(o)}catch(l){if(l.code==="ENOENT")return;throw l}if(a.isSymbolicLink())throw QA.warn("Refusing vault write \u2014 symlink in path chain: %s",o),new Error(`Refused vault write: path segment is a symlink at ${o} (target ${t}). Inspect and unlink before retrying.`);if(!a.isDirectory())throw new Error(`Refused vault write: path segment is not a directory at ${o} (target ${t}).`)}}function Fc(e,t,n){ZA(e,t),(0,te.mkdirSync)((0,We.dirname)(t),{recursive:!0});let r=`${t}.tmp`,o=te.constants.O_WRONLY|te.constants.O_CREAT|te.constants.O_TRUNC|te.constants.O_NOFOLLOW,s=(0,te.openSync)(r,o,420);try{typeof n=="string"?(0,te.writeSync)(s,n,void 0,"utf-8"):(0,te.writeSync)(s,n)}finally{(0,te.closeSync)(s)}(0,te.renameSync)(r,t)}Ps();ae();lo();function ex(e){return`skills--${e}`}function gi(e){return`${ex(e)}.md`}function Ny(e){let t=["| Skill | Agent | \xD7 | Tokens | Input | Output | Cached |","|---|---|---|---|---|---|---|"],n=[...e].sort((o,s)=>{let i=jc(s)-jc(o);if(i!==0)return i;let a=o.skill<s.skill?-1:o.skill>s.skill?1:0;if(a!==0)return a;let l=o.source??"",c=s.source??"";return l<c?-1:l>c?1:0}),r=!1;for(let o of n){let s=o.detection==="heuristic"?" \u2020":"";s!==""&&(r=!0),t.push(`| ${Dy(o.skill)}${s} | ${tx(o)} | ${o.invocationCount} | ${nx(o).join(" | ")} |`)}return r&&t.push("","\u2020 Inferred from a file read rather than an observed invocation: the count is per session, and a human reading the skill file looks the same."),t}function Py(e){let t=`${e.length} skill${e.length===1?"":"s"}`,n=0,r=!1,o=!1;for(let s of e)s.usage!==void 0&&(r=!0,n+=s.usage.input+s.usage.cached+s.usage.output,s.usage.confidence!=="attributed"&&(o=!0));return r?`${t} \xB7 ${Ly(n,o?"~":"")} tokens`:t}function Oy(e,t){let n=e.commitHash.substring(0,8);return`${["---","type: skill-usage",`commitHash: ${e.commitHash}`,`branch: ${e.branch}`,`generatedAt: ${e.generatedAt}`,"---","",`# Skills used \u2014 ${n}`,"",`_${e.commitMessage}_`,"",...Ny(t),""].join(`
`)}
`}function Dy(e){return e.replace(/\\/g,"\\\\").replace(/\|/g,"\\|").replace(/[\r\n]+/g," ")}function jc(e){let t=e.usage;return t===void 0?0:t.input+t.cached+t.output}function tx(e){let t=e.source;return t===void 0||t===""?"\u2014":Dy(Sc(t))}function nx(e){let t=e.usage;if(t===void 0)return["\u2014","\u2014","\u2014","\u2014"];let n=t.confidence==="attributed"?"":"~";return[jc(e),t.input,t.output,t.cached].map(r=>Ly(r,n))}function Ly(e,t){return e<1e3?`${t}${e}`:`${t}${(e/1e3).toFixed(1)}k`}function kt(e){return e.replace(/[\\[\]]/g,"\\$&").replace(/[\r\n]+/g," ")}function My(e){return e.replace(/[\\[\]~]/g,"\\$&").replace(/[\r\n]+/g," ")}function hi(e){return e.replace(/[()\s<>"]/g,t=>t==="("?"%28":t===")"?"%29":encodeURIComponent(t))}fc();yc();ys();lo();Jt();var $y=3/1e6,rx=15/1e6,ox=3.75/1e6;function bo(e){return Math.round(e).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function Fy(e){return e>=.01?`$${e.toFixed(2)}`:e>=5e-5?`$${e.toFixed(4)}`:e>0?"<$0.0001":"$0.00"}function jy(e,t){return e?e.input*$y+e.output*rx+e.cached*ox:t*$y}function Bc(e){let{topics:t,sourceNodes:n}=$h(e),r=[];return sx(r,e),cx(r,e,{withRelevance:!0}),ix(r,e),dx(r,e.e2eTestGuide),ux(r,n),mx(r,t,px),fx(r),r.join(`
`)}function sx(e,t){let n=so(t),r=n.filesChanged,o=lc(t),s=`${r} file${r!==1?"s":""} changed, +${n.insertions} insertions, \u2212${n.deletions} deletions`,i=Ec(q(t));e.push(`# ${t.commitMessage}`,"",`- **Commit:** \`${t.commitHash}\``,`- **Branch:** \`${t.branch}\``,`- **Author:** ${t.commitAuthor}`,`- **Date:** ${i}`,`- **Duration:** ${bh(t)}`,`- **Changes:** ${s}`),o>0&&e.push(`- **Conversations:** ${o} turn${o!==1?"s":""}`);let a=cc(t);if(a>0){let c=dc(t),d=c.input>0||c.output>0||c.cached>0?c:void 0,u=Fy(jy(d,a)),p=d?` (${bo(d.input)} input, ${bo(d.output)} output, ${bo(d.cached)} cached)`:"";e.push(`- **Task usage:** ${bo(a)} tokens \xB7 ${u}${p}`)}let l=t.jolliDocUrl;l&&e.push(`- **Jolli Memory:** [${l}](${l})`),e.push("","---")}function ix(e,t){let n=t.recap?.trim();n&&e.push("","## Quick recap","",n,"","---")}function ax(e){let t=new Map;for(let o of e){let s=t.get(o.source)??[];s.push(o),t.set(o.source,s)}let n=Jn().all().map(o=>o.id),r=[];for(let o of n){let s=t.get(o);s&&(r.push(...s),t.delete(o))}for(let o of t.values())r.push(...o);return r}function Hc(e,t,n){return e.get(`${t}:${n}`)??e.get(`${t}:${n.replace(Rh,"")}`)}var lx={high:"High",mid:"Med",low:"Low"};function Uc(e){return!e||e.reason===""?"":` \u2014 ${lx[e.tier]} \xB7 ${kt(e.reason)}`}function cx(e,t,n){let r=t.plans??[],o=t.notes??[],s=n?.includeReferences?t.references??[]:[],i=n?.withRelevance?t.excludedContext??[]:[],a=new Map;if(n?.withRelevance)for(let u of t.contextRelevance??[])a.set(`${u.kind}:${u.key}`,{tier:u.tier,reason:u.reason});let l=t.skills??[],c=r.length+o.length+s.length+(l.length>0?1:0);if(c===0&&i.length===0)return;let d=c>1?` (${c})`:"";e.push("",`## Context${d}`,"");for(let u of r){let p=u.jolliPlanDocUrl,m=Uc(Hc(a,"plan",u.slug));e.push((p?`- [${kt(u.title)}](${hi(p)})`:`- ${kt(u.title)}`)+m)}for(let u of o){let p=u.jolliNoteDocUrl,m=Uc(Hc(a,"note",u.id));e.push((p?`- [${kt(u.title)}](${hi(p)})`:`- ${kt(u.title)}`)+m)}for(let u of ax(s)){let p=kt(hc(u)),m=u.jolliReferenceDocUrl??u.url,g=Uc(Hc(a,"reference",`${u.source}:${u.nativeId}`));e.push((m?`- [${p}](${hi(m)})`:`- ${p}`)+g)}if(l.length>0){let u=l.some(p=>p.detection==="heuristic")?" \xB7 some inferred":"";e.push(`- Skills used \u2014 ${kt(Py(l))}${u}`)}for(let u of i)e.push(`- ~~${My(u.title)}~~ \u2014 Excluded${u.reason?` \xB7 ${kt(u.reason)}`:""}`)}function dx(e,t){if(!(!t||t.length===0)){e.push("",`## E2E Test (${t.length})`);for(let n=0;n<t.length;n++){let r=t[n];e.push("",`### ${n+1}. ${r.title}`),r.preconditions&&e.push("",`**Preconditions:** ${r.preconditions}`),e.push("","**Steps:**");for(let o=0;o<r.steps.length;o++)e.push(`${o+1}. ${r.steps[o]}`);e.push("","**Expected Results:**");for(let o of r.expectedResults)e.push(`- ${o}`)}e.push("","---")}}function ux(e,t){if(!(t.length<=1)){e.push("",`## Source Commits (${t.length})`);for(let n of t){let r=so(n),o=n.conversationTurns?` \xB7 ${n.conversationTurns} turns`:"";e.push(`- \`${n.commitHash.substring(0,8)}\` ${n.commitMessage}  _(+${r.insertions} \u2212${r.deletions}${o} \xB7 ${Dh(q(n))})_`)}e.push("","---")}}function px(e,t){if(e.push("","**\u26A1 Why This Change**","",t.trigger),e.push("","**\u{1F4A1} Decisions Behind the Code**","",t.decisions),e.push("","**\u2705 What Was Implemented**","",t.response),t.todo&&e.push("","**\u{1F4CB} Future Enhancements**","",t.todo),t.filesAffected&&t.filesAffected.length>0){e.push("","**\u{1F4C1} FILES**");for(let n of t.filesAffected)e.push(`- \`${n}\``)}}function mx(e,t,n,r={singular:"Summary",plural:"Summaries"}){if(t.length!==0){e.push("",`## ${t.length===1?r.singular:r.plural} (${t.length})`);for(let o=0;o<t.length;o++){let s=t[o],i=s.category?` \`${s.category}\``:"";e.push("",`### ${Lh(o)} \xB7 ${s.title}${i}`),n(e,s)}}}function fx(e,t){let n=Ec(new Date().toISOString()),r=t?Mh(t):void 0,o=r?` \xB7 via ${r}`:"";e.push("","---","",`*Generated by Jolli Memory \xB7 ${n}${o}*`)}var Hy="<!-- Generated by Jolli Memory \xB7 do not edit \u2014 regenerated on every merge -->";function Uy(e,t,n,r){let o=[];if(o.push(`# ${e.title}`),o.push(""),o.push(Hy),o.push(""),o.push(`> **Source branches:** ${t.join(", ")}`),o.push(`> **Merged:** ${n}`),o.push(`> **Topic slug:** \`${e.stableSlug}\` (stable across re-merges)`),o.push(""),o.push(e.content.trim()),o.push(""),e.keyDecisions&&e.keyDecisions.length>0){o.push("## Key Decisions"),o.push("");for(let s of e.keyDecisions)o.push(`- ${s}`);o.push("")}if(e.sourceCommits.length>0){o.push("## Source Commits"),o.push("");for(let s of e.sourceCommits){let i=s.substring(0,8),a=r.resolveCommitVisiblePath(i),l=r.resolveCommitMessage(i);a&&l?o.push(`- ${Wc(i,gx(a))} \u2014 ${l}`):l?o.push(`- \`${i}\` \u2014 ${l}`):o.push(`- \`${i}\``)}o.push("")}if(e.relatedBranches&&e.relatedBranches.length>0){o.push("## Related Branches"),o.push("");for(let s of e.relatedBranches){let i=r.resolveBranchFolder(s);i?o.push(`- ${Wc(s,`../${i}/`)}`):o.push(`- \`${s}\``)}o.push("")}return o.join(`
`)}function By(e){return{title:e.title,stableSlug:e.stableSlug,content:e.content,...e.relatedBranches.length>0&&{relatedBranches:[...e.relatedBranches]},sourceCommits:e.sourceRefs.filter(t=>t.type==="summary").map(t=>t.id)}}function Wy(e,t){let n=[];if(n.push(`# ${t.repoName} \xB7 Knowledge Wiki`),n.push(""),n.push(Hy),n.push(""),n.push(`> **${e.length} topics** in the knowledge base`),n.push(""),e.length>0){n.push("## Topics"),n.push("");for(let r of e)n.push(`- ${Wc(r.title,`topic--${r.stableSlug}.md`)}`);n.push("")}return n.join(`
`)}function gx(e){return e.startsWith("./")?e.substring(2):e}function Wc(e,t){let n=e.replace(/[\\[\]]/g,"\\$&"),r=t.replace(/ /g,"%20").replace(/\(/g,"%28").replace(/\)/g,"%29");return`[${n}](${r})`}var I=f("FolderStorage"),yi=class e{constructor(t,n){this.rootPath=t;this.metadataManager=n;this.kind="folder"}get vaultRoot(){return(0,L.dirname)(this.rootPath)}get kbRoot(){return this.rootPath}async readFile(t){let n=(0,L.join)(this.rootPath,".jolli",t);try{return(0,O.readFileSync)(n,"utf-8")}catch(r){let o=r.code;return o==="ENOENT"||o==="ENOTDIR"||I.warn("readFile failed for %s: %s",n,R(r)),null}}async writeFiles(t,n){if(V())return;await this.ensure();let r=0,o=0;for(let s of t)s.delete?this.deleteHiddenFile(s.path)&&o++:(this.writeHiddenFile(s.path,s.content),r++,s.path.startsWith("summaries/")&&s.path.endsWith(".json")&&this.generateSummaryMarkdown(s.content),s.path.startsWith("plans/")&&s.path.endsWith(".md")&&this.generatePlanMarkdown(s.path,s.content,s.branch),s.path.startsWith("notes/")&&s.path.endsWith(".md")&&this.generateNoteMarkdown(s.path,s.content,s.branch));I.info("Wrote %d files, deleted %d (%s)",r,o,n)}async listFiles(t){let n=(0,L.join)(this.rootPath,".jolli",t);if(!(0,O.existsSync)(n))return[];let r=(0,L.join)(this.rootPath,".jolli"),o=[];return this.walkDir(n,r,o),o.sort()}async exists(){return(0,O.existsSync)(this.rootPath)}async ensure(){(0,O.mkdirSync)(this.rootPath,{recursive:!0}),this.metadataManager.ensure()}markDirty(t){let n=(0,L.join)(this.rootPath,".jolli","shadow-status.json"),r={dirty:!0,lastFailedAt:new Date().toISOString(),message:t};try{Fc(this.vaultRoot,n,JSON.stringify(r,null,"	"))}catch(o){I.warn("markDirty suppressed: %s",R(o))}}clearDirty(){let t=(0,L.join)(this.rootPath,".jolli","shadow-status.json");try{(0,O.existsSync)(t)&&(0,O.unlinkSync)(t)}catch{}}isDirty(){let t=(0,L.join)(this.rootPath,".jolli","shadow-status.json");return(0,O.existsSync)(t)}async deleteVisibleMarkdown(t){let n=e.slugify(t.commitMessage),r=t.commitHash.substring(0,8);try{await this.deleteVisibleArtifact(`skill:${t.commitHash}`,t.branch,gi(r))}catch(o){I.warn("Failed to delete skills aggregate for %s: %s",r,String(o))}return this.deleteVisibleArtifact(t.commitHash,t.branch,`${n}-${r}.md`)}async deletePlanVisible(t,n){await this.deleteVisibleArtifact(`plan:${t}`,n,`plan--${t}.md`)}async deleteNoteVisible(t,n){await this.deleteVisibleArtifact(`note:${t}`,n,`note--${t}.md`)}async pruneBranchMappings(t){let n=new Map,r=new Set(t);for(let s of this.metadataManager.listBranchMappings())r.has(s.branch)&&n.set(s.branch,s.folder);let o=this.metadataManager.unregisterBranches(t);return o===0?0:(await Promise.all([...n.values()].map(s=>this.rmdirIfEmpty((0,L.join)(this.rootPath,s)))),o)}async rmdirIfEmpty(t){try{await(0,Jy.rmdir)(t)}catch(n){let r=n.code;if(r==="ENOENT"||r==="ENOTEMPTY"||r==="EEXIST")return;I.warn("rmdir(%s) failed (non-fatal): %s",t,R(n))}}resolveBranchForFolder(t){return this.metadataManager.listBranchMappings().find(r=>r.folder===t)?.branch??null}async deleteVisibleArtifact(t,n,r){let o=this.metadataManager.findById(t),s=this.metadataManager.resolveFolderForBranch(n),i=o?.path??`${s}/${r}`,a=(0,L.join)(this.rootPath,i);if(!(0,O.existsSync)(a))return o&&this.metadataManager.removeFromManifest(t),!1;if(o?.fingerprint&&this.isUserEditedOnDisk(a,o.fingerprint))return I.warn("Skipping cleanup of %s \u2014 file modified since manifest record (likely hand-edited)",i),!1;try{return(0,O.unlinkSync)(a),o&&this.metadataManager.removeFromManifest(t),I.info("Deleted visible MD: %s",i),!0}catch(l){if(l.code==="ENOENT")return o&&this.metadataManager.removeFromManifest(t),!1;throw l}}async forceRegenerateVisibleMarkdown(t){let n=await this.readFile(`summaries/${t.commitHash}.json`);if(!n)return I.warn("forceRegenerateVisibleMarkdown: hidden summaries/%s.json missing \u2014 leaving visible file intact",t.commitHash.substring(0,8)),{ok:!1,reason:"missing"};try{JSON.parse(n)}catch(c){return I.warn("forceRegenerateVisibleMarkdown: malformed summaries/%s.json (%s) \u2014 leaving visible file intact",t.commitHash.substring(0,8),R(c)),{ok:!1,reason:"malformed"}}let r=this.metadataManager.resolveFolderForBranch(t.branch),o=e.slugify(t.commitMessage),s=t.commitHash.substring(0,8),i=`${r}/${o}-${s}.md`,a=(0,L.join)(this.rootPath,i);if((0,O.existsSync)(a))try{(0,O.unlinkSync)(a)}catch(c){return I.warn("forceRegenerateVisibleMarkdown: cannot unlink %s [%s]",i,String(c)),{ok:!1,reason:"unlinkFailed"}}return await this.regenerateVisibleMarkdown(t)?{ok:!0}:{ok:!1,reason:"missing"}}async regenerateVisibleMarkdown(t){let n=this.metadataManager.resolveFolderForBranch(t.branch),r=e.slugify(t.commitMessage),o=t.commitHash.substring(0,8),s=`${n}/${r}-${o}.md`,i=(0,L.join)(this.rootPath,s);if((0,O.existsSync)(i))return await this.healSkillsAggregate(t,n,o),!0;let a=await this.readFile(`summaries/${t.commitHash}.json`);if(!a)return I.warn("regenerateVisibleMarkdown: hidden summaries/%s.json missing",t.commitHash.substring(0,8)),!1;let l;try{l=JSON.parse(a)}catch(g){return I.warn("regenerateVisibleMarkdown: malformed summaries/%s.json \u2014 %s",t.commitHash.substring(0,8),R(g)),!1}let c=this.buildYamlFrontmatter(l),d=Bc(l),u=`${c}
${d}`;this.atomicWrite(i,u);let p=this.metadataManager.findById(t.commitHash),m=fe.sha256(u);return this.metadataManager.updateManifest({path:s,fileId:l.commitHash,type:"commit",fingerprint:m,source:{commitHash:l.commitHash,branch:l.branch,generatedAt:l.generatedAt},title:p?.title??l.commitMessage}),this.generateSkillsAggregate(l,n,o),I.info("Regenerated visible MD: %s",s),!0}async healMissingVisibleMarkdown(t){let r=this.metadataManager.readManifest().files.filter(c=>c.type==="commit"),o=0,s=0,i=0,a=[];for(let c of r){let d=(0,L.join)(this.rootPath,c.path);if((0,O.existsSync)(d)){s++;continue}let u=(0,L.join)(this.rootPath,".jolli","summaries",`${c.fileId}.json`),p;try{p=(0,O.readFileSync)(u,"utf-8")}catch(b){let x=b.code;if(x==="ENOENT"){i++,t?.dropOrphanedManifestEntries?(a.push(c.fileId),I.warn("healMissingVisibleMarkdown: hidden JSON missing for %s \u2014 will drop manifest entry",c.fileId.substring(0,8))):I.warn("healMissingVisibleMarkdown: hidden JSON missing for %s \u2014 keeping manifest entry (no truth source to repopulate)",c.fileId.substring(0,8));continue}i++,I.warn("healMissingVisibleMarkdown: hidden JSON read failed for %s [%s]: %s \u2014 keeping manifest entry",c.fileId.substring(0,8),x??"?",R(b));continue}let m;try{m=JSON.parse(p)}catch(b){i++,I.warn("healMissingVisibleMarkdown: malformed hidden JSON for %s: %s",c.fileId.substring(0,8),R(b));continue}let g=this.metadataManager.resolveFolderForBranch(m.branch),h=e.slugify(m.commitMessage),E=m.commitHash.substring(0,8),S=`${g}/${h}-${E}.md`;if(S!==c.path){s++,I.warn("healMissingVisibleMarkdown: manifest path drift for %s \u2014 manifest=%s computed=%s \u2014 keeping manifest entry, run reconcile",c.fileId.substring(0,8),c.path,S);continue}let k={commitHash:m.commitHash,parentCommitHash:null,commitMessage:m.commitMessage,commitDate:m.commitDate,branch:m.branch,generatedAt:m.generatedAt};try{await this.regenerateVisibleMarkdown(k)?o++:(i++,I.warn("healMissingVisibleMarkdown: regenerate returned false for %s \u2014 retry on next pass",c.fileId.substring(0,8)))}catch(b){i++,I.warn("healMissingVisibleMarkdown: regenerate failed for %s: %s",c.fileId.substring(0,8),R(b))}}let l=a.length>0?this.dropManifestEntries(a):[];return(o>0||i>0)&&I.info("healMissingVisibleMarkdown: healed=%d skipped=%d failed=%d dropped=%d",o,s,i,l.length),l.length>0?{healed:o,skipped:s,failed:i,droppedIds:l}:{healed:o,skipped:s,failed:i}}dropManifestEntries(t){if(t.length===0)return[];let n=new Set(t),r=this.metadataManager.readManifest(),o=r.files.filter(i=>n.has(i.fileId)).map(i=>i.fileId);if(o.length===0)return[];let s=r.files.filter(i=>!n.has(i.fileId));return this.metadataManager.replaceFiles(s),o}isUserEditedOnDisk(t,n){if(!(0,O.existsSync)(t)||!n)return!1;let r;try{r=fe.sha256((0,O.readFileSync)(t,"utf-8"))}catch(o){return I.warn("isUserEditedOnDisk: cannot read %s [%s] \u2014 treating as edited",t,String(o)),!0}return r!==n}generateSummaryMarkdown(t){let n;try{n=JSON.parse(t)}catch{return}let r=this.metadataManager.resolveFolderForBranch(n.branch),o=e.slugify(n.commitMessage),s=n.commitHash.substring(0,8),i=`${o}-${s}.md`,a=`${r}/${i}`,l=this.buildYamlFrontmatter(n),c=Bc(n),d=`${l}
${c}`,u=(0,L.join)(this.rootPath,a),p=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(u,p?.fingerprint)){I.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(u,d);let m=fe.sha256(d);this.metadataManager.updateManifest({path:a,fileId:n.commitHash,type:"commit",fingerprint:m,source:{commitHash:n.commitHash,branch:n.branch,generatedAt:n.generatedAt},title:n.commitMessage}),I.info("Markdown generated: %s",a),this.generateSkillsAggregate(n,r,s),n.children&&n.children.length>0&&this.cleanupSupersededDescendants(n.children,a)}async healSkillsAggregate(t,n,r){if((0,O.existsSync)((0,L.join)(this.rootPath,n,gi(r))))return;let o=await this.readFile(`summaries/${t.commitHash}.json`);if(o)try{this.generateSkillsAggregate(JSON.parse(o),n,r)}catch{}}generateSkillsAggregate(t,n,r){let o=t.skills;if(o===void 0||o.length===0)return;let s=`${n}/${gi(r)}`,i=(0,L.join)(this.rootPath,s),a=this.metadataManager.findByPath(s);if(this.isUserEditedOnDisk(i,a?.fingerprint)){I.info("FolderStorage: skip overwrite of user-edited %s",s);return}let l=Oy(t,o);this.atomicWrite(i,l),this.metadataManager.updateManifest({path:s,fileId:`skill:${t.commitHash}`,type:"skill",fingerprint:fe.sha256(l),source:{commitHash:t.commitHash,branch:t.branch,generatedAt:t.generatedAt},title:`Skills used \u2014 ${r}`}),I.info("Skills aggregate generated: %s",s)}cleanupSupersededDescendants(t,n){let r=[];e.collectDescendantHashes(t,r);for(let o of r){let s=this.metadataManager.findById(o);if(!s||s.type!=="commit"||s.path===n)continue;let i=(0,L.join)(this.rootPath,s.path);if(!(0,O.existsSync)(i)){this.metadataManager.removeFromManifest(o);continue}if(!s.fingerprint){I.warn("Skipping cleanup of %s \u2014 legacy entry has no fingerprint baseline",s.path);continue}if(this.isUserEditedOnDisk(i,s.fingerprint)){I.warn("Skipping cleanup of %s \u2014 file modified since manifest record (likely hand-edited)",s.path);continue}try{(0,O.unlinkSync)(i),this.metadataManager.removeFromManifest(o),I.info("Cleaned up superseded MD: %s",s.path)}catch(a){I.warn("Failed to delete superseded MD %s: %s",s.path,String(a))}}}static collectDescendantHashes(t,n){for(let r of t)n.push(r.commitHash),r.children&&r.children.length>0&&e.collectDescendantHashes(r.children,n)}buildYamlFrontmatter(t){let n=["---"];return n.push(`commitHash: ${t.commitHash}`),n.push(`branch: ${t.branch}`),n.push(`author: ${t.commitAuthor}`),n.push(`date: ${t.commitDate}`),n.push("type: commit"),t.commitType&&n.push(`commitType: ${t.commitType}`),t.stats&&(n.push(`filesChanged: ${t.stats.filesChanged}`),n.push(`insertions: ${t.stats.insertions}`),n.push(`deletions: ${t.stats.deletions}`)),n.push("---"),n.join(`
`)}async regenerateVisiblePlan(t,n){let r=await this.readFile(`plans/${t}.md`);if(!r)return I.warn("regenerateVisiblePlan: hidden plans/%s.md missing",t),!1;let o=this.metadataManager.resolveFolderForBranch(n),s=(0,L.join)(this.rootPath,o,`plan--${t}.md`);if((0,O.existsSync)(s))try{(0,O.unlinkSync)(s)}catch(i){return I.warn("regenerateVisiblePlan: cannot unlink %s [%s]",s,String(i)),!1}return this.generatePlanMarkdown(`plans/${t}.md`,r,n),!0}generatePlanMarkdown(t,n,r){let o=t.replace(/^plans\//,"").replace(/\.md$/,""),s=r?this.metadataManager.resolveFolderForBranch(r):this.resolveBranchFromSlug(o),i=`plan--${o}.md`,a=`${s}/${i}`,c=`${["---","type: plan",`slug: ${o}`,"---"].join(`
`)}

${n}`,d=(0,L.join)(this.rootPath,a),u=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(d,u?.fingerprint)){I.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(d,c);let p=fe.sha256(c);this.metadataManager.updateManifest({path:a,fileId:`plan:${o}`,type:"plan",fingerprint:p,updatedAt:new Date().toISOString(),source:r?{branch:r}:{},title:this.extractTitle(n)??o}),I.info("Plan markdown generated: %s",a)}async regenerateVisibleNote(t,n){let r=await this.readFile(`notes/${t}.md`);if(!r)return I.warn("regenerateVisibleNote: hidden notes/%s.md missing",t),!1;let o=this.metadataManager.resolveFolderForBranch(n),s=(0,L.join)(this.rootPath,o,`note--${t}.md`);if((0,O.existsSync)(s))try{(0,O.unlinkSync)(s)}catch(i){return I.warn("regenerateVisibleNote: cannot unlink %s [%s]",s,String(i)),!1}return this.generateNoteMarkdown(`notes/${t}.md`,r,n),!0}generateNoteMarkdown(t,n,r){let o=t.replace(/^notes\//,"").replace(/\.md$/,""),s=r?this.metadataManager.resolveFolderForBranch(r):this.resolveBranchFromSlug(o),i=`note--${o}.md`,a=`${s}/${i}`,c=`${["---","type: note",`id: ${o}`,"---"].join(`
`)}

${n}`,d=(0,L.join)(this.rootPath,a),u=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(d,u?.fingerprint)){I.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(d,c);let p=fe.sha256(c);this.metadataManager.updateManifest({path:a,fileId:`note:${o}`,type:"note",fingerprint:p,source:r?{branch:r}:{},title:this.extractTitle(n)??o,updatedAt:new Date().toISOString()}),I.info("Note markdown generated: %s",a)}resolveBranchFromSlug(t){let n=t.split("-").at(-1);if(n.length>=7){let o=this.metadataManager.readManifest().files.find(i=>i.type==="commit"&&i.source?.commitHash?.startsWith(n));if(o?.source?.branch)return this.metadataManager.resolveFolderForBranch(o.source.branch);let s=(0,L.join)(this.rootPath,".jolli","index.json");if((0,O.existsSync)(s))try{let a=JSON.parse((0,O.readFileSync)(s,"utf-8")).entries.find(l=>l.commitHash.startsWith(n));if(a?.branch)return this.metadataManager.resolveFolderForBranch(a.branch)}catch{}}return"_shared"}extractTitle(t){let n=t.match(/^#\s+(.+)/m);return n?n[1].trim():null}writeHiddenFile(t,n){let r=(0,L.join)(this.rootPath,".jolli",t);this.atomicWrite(r,n)}deleteHiddenFile(t){let n=(0,L.join)(this.rootPath,".jolli",t);if(!(0,O.existsSync)(n))return!1;try{return(0,O.unlinkSync)(n),!0}catch{return!1}}walkDir(t,n,r){for(let o of(0,O.readdirSync)(t,{withFileTypes:!0})){let s=(0,L.join)(t,o.name);o.isDirectory()?this.walkDir(s,n,r):r.push(Ue((0,L.relative)(n,s)))}}async renderTopicWiki(t){let n=(0,L.join)(this.rootPath,"_wiki");this.wipeWikiArtifacts(n);let r=this.buildWikiRenderContext();(0,O.mkdirSync)(n,{recursive:!0});let o=[];for(let s of t)try{let i=By(s);o.push(i);let a=`_wiki/topic--${i.stableSlug}.md`,l=Uy(i,s.relatedBranches,s.lastUpdatedAt,r);this.atomicWrite((0,L.join)(this.rootPath,a),l),this.metadataManager.updateManifest({path:a,fileId:`wiki-topic-${i.stableSlug}`,type:"wiki",fingerprint:fe.sha256(l),source:{generatedAt:s.lastUpdatedAt},title:i.title})}catch(i){I.warn("renderTopicWiki: failed to render topic %s: %s",s.stableSlug,R(i))}try{let s=Wy(o,r),i="_wiki/_index.md";this.atomicWrite((0,L.join)(this.rootPath,i),s),this.metadataManager.updateManifest({path:i,fileId:"wiki-index",type:"wiki",fingerprint:fe.sha256(s),source:{generatedAt:new Date().toISOString()},title:`${r.repoName} Knowledge Wiki`})}catch(s){I.warn("renderTopicWiki: failed to render index: %s",R(s))}I.info("Topic-KB wiki regenerated: %d topics under %s",t.length,n)}isTopicWikiPresent(){return(0,O.existsSync)((0,L.join)(this.rootPath,"_wiki","_index.md"))}wipeWikiArtifacts(t){if(this.metadataManager.unregisterFilesByType("wiki"),!!(0,O.existsSync)(t))try{for(let n of(0,O.readdirSync)(t))if(n.endsWith(".md"))try{(0,O.unlinkSync)((0,L.join)(t,n))}catch(r){I.warn("FolderStorage.wipeWikiArtifacts: failed to unlink %s: %s",n,R(r))}}catch(n){I.warn("FolderStorage.wipeWikiArtifacts: failed to list %s: %s",t,R(n))}}buildWikiRenderContext(){let t=this.metadataManager.readConfig(),n=this.metadataManager.listBranchMappings(),r=new Map(n.map(i=>[i.branch,i.folder])),o=this.metadataManager.readManifest(),s=new Map;for(let i of o.files)i.type==="commit"&&i.source.commitHash&&s.set(i.source.commitHash.substring(0,8),i);return{repoName:t.repoName??"Memory Bank",resolveCommitVisiblePath:i=>{let a=s.get(i);return a?`../${a.path}`:null},resolveBranchFolder:i=>r.get(i)??null,resolveCommitMessage:i=>s.get(i)?.title??null}}atomicWrite(t,n){Fc(this.vaultRoot,t,n)}static slugify(t){let n=t.toLowerCase().replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"");return n.length>50&&(n=n.substring(0,50).replace(/-+$/,"")),n||"untitled"}};zr();Ps();qs();ue();di();var wi=f("StorageFactory");async function Jc(e,t){let n;try{n=await de()}catch(a){wi.warn("Failed to load config, falling back to defaults: %s",a.message),n={}}n.storageMode!==void 0&&wi.info("ignoring retired storageMode=%s \u2014 routing is decided by the cutover state",n.storageMode);let r=n.localFolder,o=await ro(e);if(wi.info("StorageFactory.create: route=%s, projectPath=%s",o.state,e),o.state==="blocked")throw new Error(`storage unavailable: ${o.reason} \u2014 this repo's orphan branch is frozen (cutover), so writes cannot fall back to it; run 'jolli doctor --recover' or upgrade this surface`);if(o.state==="legacy-fenced"||o.state==="cutover"){let{identity:a}=await dn(e),l=new Gt(a);return $l(e,r)?new So(l,Gy(e,r)):l}if(!$l(e,r))return wi.warn("Not a claimable project (no git worktree, or inside the Memory Bank folder): %s \u2014 using orphan-only storage",e),new bt(t);let s=new bt(t),i=Gy(e,r);return new So(s,i)}function Gy(e,t){let n=$f(e),r=Hf(e),o=Mf(n,r,t),s=new fe((0,qy.join)(o,".jolli"));return new yi(o,s)}ot();Jt();bc();var Pe=f("SchemaV5Migration"),Vy="schema-v5-migration.json",Ky=3e4;async function Gc(e,t){let r=await(t??await Jc(e??process.cwd(),e)).readFile(Vy);if(!r)return null;try{return JSON.parse(r)}catch(o){return Pe.warn("Failed to parse v5 migration state \u2014 treating as absent: %s",o.message),null}}async function hx(e,t,n){if(Un(e))return await n();if(!await Or(e,{timeoutMs:Ky}))throw new Error(`${t}: could not acquire orphan-write lock within ${Ky}ms`);try{return await Bn(e,n)}finally{await Dr(e)}}async function Yy(e){let t=await Jc(e??process.cwd(),e),n=await Gc(e,t);return n?.status==="completed"?(Pe.info("Schema v5 migration already completed at %s \u2014 skipping",n.completedAt),{migrated:n.migratedCount,skipped:n.skippedCount,fresh:n.fresh,alreadyDone:!0}):await t.exists()?hx(e,"migrateSchemaToV5",()=>wx(e,t)):(Pe.info("Storage backend not initialized yet \u2014 skipping schema v5 migration (no data to migrate)"),{migrated:0,skipped:0,fresh:!0,alreadyDone:!1})}async function yx(e,t){if(t.length===0)return new Map;if(e.batchReadFiles)return e.batchReadFiles(t);let n=new Map;for(let r of t)n.set(r,await e.readFile(r));return n}async function wx(e,t){let n=await Gc(e,t);if(n?.status==="completed")return Pe.info("Schema v5 migration completed by a concurrent run at %s \u2014 skipping",n.completedAt),{migrated:n.migratedCount,skipped:n.skippedCount,fresh:n.fresh,alreadyDone:!0};let r=new Date().toISOString(),o=await ui(e),s=o.ok&&o.state==="uncutover"?await Y(["rev-parse",`refs/heads/${He}`],e).then($=>$.stdout.trim()).catch(()=>null):null,i=await t.listFiles("summaries/");Pe.info("Found %d summary files to inspect",i.length);let a=await t.listFiles("transcripts/"),l=new Set;for(let $ of a){let we=Qs($);we&&l.add(we)}Pe.info("Reading %d summaries...",i.length);let c=Date.now(),d=await yx(t,i);Pe.info("Read %d summaries in %d ms",d.size,Date.now()-c);let u=[],p=[],m=0,g=0;for(let $ of i){let we=d.get($);if(we===void 0)throw new Error(`readSummaries omitted ${$} \u2014 protocol contract violation (expected one entry per request)`);if(we===null){g++;continue}let Fe;try{Fe=JSON.parse(we)}catch(zt){Pe.warn("Skipping unparseable summary %s: %s",$,zt.message),g++;continue}let je=Ex(Fe,l),It=JSON.stringify(je,null,"	");if(p.push({path:$,content:It}),je===Fe){g++;continue}u.push({path:$,content:It}),m++}let h=i.length===0,E=m===0&&g>0,S=E?p:u,k=h?"Schema v5 migration: no pre-v5 data found":E?`Schema v5 migration: re-pushing ${g} v5 summaries to heal storage shadow`:`Schema v5 migration: ${m} upgraded, ${g} skipped`,b=Date.now();if(S.length>0&&(Pe.info("Writing %d summary file(s) via active storage...",S.length),await t.writeFiles(S,k)),t.isDirty?.()??!1)return Pe.warn("Schema v5 migration: storage shadow write failed (folder marked dirty) \u2014 leaving state PENDING; next startup will retry and re-push (migrated=%d, skipped=%d, took %d ms)",m,g,Date.now()-b),{migrated:m,skipped:g,fresh:h,alreadyDone:!1};let P={version:1,status:"completed",startedAt:r,completedAt:new Date().toISOString(),migratedCount:m,skippedCount:g,fresh:h};return await t.writeFiles([{path:Vy,content:JSON.stringify(P,null,"	")}],k),Pe.info("Schema v5 migration complete: %d migrated, %d skipped, fresh=%s, recovery=%s (took %d ms)",m,g,h,E,Date.now()-b),s&&Pe.info("Pre-migration orphan-branch SHA was %s (debug-only recovery anchor)",s),{migrated:m,skipped:g,fresh:h,alreadyDone:!1}}function Ex(e,t){if(e.version>=5&&e.transcripts!==void 0)return e;let n=vc(e);if(n.transcripts!==void 0)return{...n,version:5};let o=io(n).filter(i=>t.has(i));return{...n,version:5,transcripts:o}}ue();ot();w();var or=require("node:fs/promises"),_o=require("node:path");Q();Ti();async function Vc(e){let t=(0,_o.join)(e,".claude"),n=(0,_o.join)(t,"settings.local.json"),r=Rt("stop"),o=Rt("session-start");await Xy(e);let s={},i;try{i=await(0,or.readFile)(n,"utf-8"),s=JSON.parse(i)}catch(m){if(m.code!=="ENOENT")throw m}let a=s.hooks??{},l=a.Stop??[],c=a.SessionStart??[],d=bi(l);d.push({hooks:[{type:"command",command:r,async:!0}]});let u=hn(c,Ei);u.push({hooks:[{type:"command",command:o}]}),a.Stop=d,a.SessionStart=u,s.hooks=a;let p=JSON.stringify(s,null,"	");return i===p?{path:n}:(await(0,or.mkdir)(t,{recursive:!0}),await v(n,p),{path:n})}async function Xy(e){let t=(0,_o.join)(e,".claude","settings.json"),n;try{let i=await(0,or.readFile)(t,"utf-8");n=JSON.parse(i)}catch{return}let r=n.hooks;if(!r)return;let o=r.Stop??[];if(!Kc(o))return;let s=bi(o);s.length===0?delete r.Stop:r.Stop=s,Object.keys(r).length===0?delete n.hooks:n.hooks=r,await v(t,JSON.stringify(n,null,"	"))}async function Yc(e){await Xy(e);let t=(0,_o.join)(e,".claude","settings.local.json"),n;try{let l=await(0,or.readFile)(t,"utf-8");n=JSON.parse(l)}catch{return{}}let r=n.hooks;if(!r)return{};let o=r.Stop??[],s=Kc(o);if(s){let l=bi(o);l.length===0?delete r.Stop:r.Stop=l}let i=r.SessionStart??[],a=To(i,Ei);if(a){let l=hn(i,Ei);l.length===0?delete r.SessionStart:r.SessionStart=l}return!s&&!a?{}:(Object.keys(r).length===0?delete n.hooks:n.hooks=r,await v(t,JSON.stringify(n,null,"	")),{})}var wn=require("node:fs/promises"),zE=require("node:os"),Po=require("node:path");Q();w();var qE=require("node:crypto"),lr=require("node:fs"),yd=require("node:fs/promises"),Fi=require("node:os"),vt=require("node:path");w();var Qy=require("node:fs"),ki=require("node:fs/promises"),Zy=require("node:os"),yn=require("node:path"),ew=require("node:url");Q();w();var bx=/^[a-z0-9][a-z0-9-]*$/;function ko(e){return bx.test(e)}var _i=f("DistPathWriter");async function Ro(e,t,n,r){if(!ko(e))return _i.warn("Refusing to write dist-paths entry for unsafe source tag: %s",JSON.stringify(e)),!1;let o=t??(0,yn.dirname)((0,ew.fileURLToPath)(__jmImportMetaUrl)),s=n??"0.99.18",i=(0,yn.join)(r??(0,yn.join)((0,Zy.homedir)(),".jolli","jollimemory"),"dist-paths"),a=(0,yn.join)(i,e);try{await(0,ki.mkdir)(i,{recursive:!0});let l=`${s}
${o}`,c;try{c=await(0,ki.readFile)(a,"utf-8")}catch{}if(c){let[d,u]=c.split(`
`);if(!!(d&&u&&zy(u))&&!zy(o))return _i.info("Kept complete dist-paths/%s (version=%s) \u2014 candidate dist is incomplete: %s",e,d,o),!0}return c!==l&&await v(a,l),_i.info("Wrote dist-paths/%s (version=%s, distDir=%s)",e,s,o),!0}catch(l){return _i.warn("Failed to write dist-paths/%s: %s",e,l.message),!1}}var Tx=["Cli.js","StopHook.js","SessionStartHook.js","PostCommitHook.js","PostRewriteHook.js","PrepareMsgHook.js","PostMergeHook.js","PrePushHook.js","QueueWorker.js","PrePushWorker.js","HermesStopHook.js","HermesDiscoveryWorker.js"];function zy(e){return Tx.every(t=>(0,Qy.existsSync)((0,yn.join)(e,t)))}var ar=kr(GE(),1);function $i(e,t){if(e.includes("-")||e.includes("+")||t.includes("-")||t.includes("+")){let i=c=>{let d=(0,ar.valid)(c);return d||(/^\d+(\.\d+)*$/.test(c)?(0,ar.coerce)(c)?.version??null:null)},a=i(e),l=i(t);if(a&&l)return(0,ar.compare)(a,l);if(a)return 1;if(l)return-1}let n=/^\d+(\.\d+)*$/.test(e),r=/^\d+(\.\d+)*$/.test(t);if(!n&&!r)return 0;if(!n)return-1;if(!r)return 1;let o=e.split(".").map(Number),s=t.split(".").map(Number);for(let i=0;i<Math.max(o.length,s.length);i++){let a=(o[i]??0)-(s[i]??0);if(a!==0)return a}return 0}var hd=f("DistPathResolver"),xN=[[".cursor/","cursor"],[".windsurf/","windsurf"],[".antigravity/","antigravity"],[".vscode-oss/","vscodium"],[".positron/","positron"],[".trae/","trae"],[".vscode/","vscode"]];function wd(e){let t=e.replace(/\\/g,"/");for(let[r,o]of xN)if(t.includes(r))return o;let n=t.match(/\/\.([a-z][a-z0-9-]*)\/extensions\//i);return n?.[1]?n[1].toLowerCase():(0,qE.createHash)("sha256").update(e).digest("hex").slice(0,8)}function KE(e){try{let n=(0,lr.readFileSync)(e,"utf-8").trim().split(`
`).map(s=>s.trim());if(n.length<2)return null;let r=n[0],o=n[n.length-1];if(!o)return null;if(r.startsWith("source=")){let s=r.slice(7),i=s.indexOf("@");return i===-1?{source:s,version:"unknown",distDir:o}:{source:s.slice(0,i),version:s.slice(i+1),distDir:o}}return{source:"",version:r,distDir:o}}catch{return null}}function No(e){let t=(0,vt.join)(e??(0,vt.join)((0,Fi.homedir)(),".jolli","jollimemory"),"dist-paths"),n;try{n=(0,lr.readdirSync)(t).sort()}catch{return[]}let r=[];for(let o of n){let s=(0,vt.join)(t,o),i=KE(s);i&&r.push({source:o,version:i.version,distDir:i.distDir,available:(0,lr.existsSync)(i.distDir)})}return r}async function VE(e){let t=(0,vt.join)(e??(0,vt.join)((0,Fi.homedir)(),".jolli","jollimemory"),"dist-paths"),n=[];for(let r of No(e))if(!r.available)try{await(0,yd.unlink)((0,vt.join)(t,r.source)),n.push(r.source),hd.info("Pruned stale dist-paths/%s (dir gone: %s)",r.source,r.distDir)}catch(o){hd.warn("Failed to prune stale dist-paths/%s: %s",r.source,o.message)}return n}var Ed=["cli","vscode","cursor"];function ji(e){let t=e.filter(o=>o.available);if(t.length===0)return;let n=t[0];for(let o=1;o<t.length;o++)$i(t[o].version,n.version)>0&&(n=t[o]);let r=t.filter(o=>$i(o.version,n.version)===0);for(let o of Ed){let s=r.find(i=>i.source===o);if(s)return s}return n}async function YE(){let e=(0,vt.join)((0,Fi.homedir)(),".jolli","jollimemory"),t=(0,vt.join)(e,"dist-path"),n=KE(t);if(!n)return!1;let r;if(n.source==="cli")r="cli";else{let o=wd(n.distDir);r=/^[a-f0-9]{8}$/.test(o)?"vscode":o}return r==="vscode-extension"&&(r="vscode"),await Ro(r,n.distDir,n.version),await(0,yd.unlink)(t).catch(()=>{}),hd.info("Migrated legacy dist-path -> dist-paths/%s (version=%s, distDir=%s)",r,n.version,n.distDir),!0}var XE=f("DispatchScripts"),CN=`#!/bin/bash
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
  for pref in ${Ed.join(" ")}; do
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
`,IN=`#!/bin/bash
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
`,NN=`#!/bin/bash
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
`;async function Sd(e,t){let n=!1;try{n=await(0,wn.readFile)(e,"utf-8")===t}catch{}if(n){await(0,wn.chmod)(e,493);return}await v(e,t),await(0,wn.chmod)(e,493)}async function bd(){let e=(0,Po.join)((0,zE.homedir)(),".jolli","jollimemory");try{return await(0,wn.mkdir)(e,{recursive:!0}),await Sd((0,Po.join)(e,"resolve-dist-path"),CN),await Sd((0,Po.join)(e,"run-hook"),IN),await Sd((0,Po.join)(e,"run-cli"),NN),XE.info("Wrote resolve-dist-path, run-hook, and run-cli scripts to %s",e),!0}catch(t){return XE.warn("Failed to write resolve scripts: %s",t.message),!1}}var Oo=require("node:fs/promises"),Hi=require("node:path");Q();w();Ti();var QE=f("GeminiHookInstaller");async function Td(e){let t=(0,Hi.join)(e,".gemini"),n=(0,Hi.join)(t,"settings.json"),r=Rt("gemini-after-agent"),o={},s;try{s=await(0,Oo.readFile)(n,"utf-8"),o=JSON.parse(s)}catch(d){if(d.code!=="ENOENT")throw d}let i=o.hooks??{},a=i.AfterAgent??[],l=hn(a,Si);l.push({hooks:[{type:"command",command:r,name:"jolli-session-tracker"}]}),i.AfterAgent=l,o.hooks=i;let c=JSON.stringify(o,null,"	");return s===c?{path:n}:(await(0,Oo.mkdir)(t,{recursive:!0}),await v(n,c),QE.info("Gemini AfterAgent hook installed"),{path:n})}async function _d(e){let t=(0,Hi.join)(e,".gemini","settings.json"),n;try{let i=await(0,Oo.readFile)(t,"utf-8");n=JSON.parse(i)}catch{return}let r=n.hooks;if(!r)return;let o=r.AfterAgent??[];if(!To(o,Si))return;let s=hn(o,Si);s.length===0?delete r.AfterAgent:r.AfterAgent=s,Object.keys(r).length===0?delete n.hooks:n.hooks=r,await v(t,JSON.stringify(n,null,"	")),QE.info("Gemini AfterAgent hook removed")}var En=require("node:fs/promises"),At=require("node:path");Q();w();ke();var Le=f("GitExclude"),Do="# >>> jolli skill exclude >>>",Lo="# <<< jolli skill exclude <<<";function PN(e,t){return At.win32.isAbsolute(e)||At.posix.isAbsolute(e)?e:(0,At.join)(t,e)}var ZE=new Map;async function kd(e){let t=ZE.get(e);if(t!==void 0)return t;try{let{stdout:n}=await Dn("git",["rev-parse","--git-path","info/exclude"],{cwd:e}),r=n.trim();if(r.length===0)return null;let o=PN(r,e);return ZE.set(e,o),o}catch{return null}}async function eS(e,t){let n=await kd(e);if(!n)return Le.warn("Skipping .git/info/exclude update for %s: not a git repo or git unavailable",e),!1;let r="";try{r=await(0,En.readFile)(n,"utf-8")}catch(i){if(i.code!=="ENOENT")return Le.warn("Failed to read %s: %s \u2014 skipping update",n,i.message),!1}let o=tS(t),s=nS(r,o);if(s===r)return!0;try{return await(0,En.mkdir)((0,At.dirname)(n),{recursive:!0}),await v(n,s),Le.info("Updated %s with %d Jolli skill exclude paths",n,t.length),!0}catch(i){return Le.warn("Failed to write %s: %s",n,i.message),!1}}async function Rd(e,t){let n=await kd(e);if(!n)return Le.warn("Skipping .git/info/exclude update for %s: not a git repo or git unavailable",e),!1;let r="";try{r=await(0,En.readFile)(n,"utf-8")}catch(s){if(s.code!=="ENOENT")return Le.warn("Failed to read %s: %s \u2014 skipping update",n,s.message),!1}let o=ON(r,t);if(o===r)return!0;try{return await(0,En.mkdir)((0,At.dirname)(n),{recursive:!0}),await v(n,o),Le.info("Merged %d Jolli skill exclude path(s) into %s",t.length,n),!0}catch(s){return Le.warn("Failed to write %s: %s",n,s.message),!1}}async function cr(e,t){let n=await kd(e);if(!n)return Le.warn("Skipping .git/info/exclude cleanup for %s: not a git repo or git unavailable",e),!1;let r;try{r=await(0,En.readFile)(n,"utf-8")}catch(s){return s.code==="ENOENT"?!0:(Le.warn("Failed to read %s: %s \u2014 skipping cleanup",n,s.message),!1)}let o=DN(r,t);if(o===r)return!0;try{return await v(n,o),Le.info("Removed %d Jolli exclude path(s) from %s",t.length,n),!0}catch(s){return Le.warn("Failed to write %s: %s",n,s.message),!1}}function tS(e){return`${[Do,...e,Lo].join(`
`)}
`}function nS(e,t){let n=e.split(`
`),r=n.indexOf(Do),o=n.indexOf(Lo),s=t.slice(0,-1).split(`
`);if(r!==-1&&o!==-1&&o>r)return[...n.slice(0,r),...s,...n.slice(o+1)].join(`
`);if(e.length===0)return t;let i=e.endsWith(`
`)?"":`
`;return`${e}${i}${t}`}function ON(e,t){let n=e.split(`
`),r=n.indexOf(Do),o=n.indexOf(Lo),s=r!==-1&&o!==-1&&o>r?n.slice(r+1,o):[],i=new Set(s),a=[...s];for(let l of t)i.has(l)||(i.add(l),a.push(l));return nS(e,tS(a))}function DN(e,t){let n=e.split(`
`),r=n.indexOf(Do),o=n.indexOf(Lo);if(r===-1||o===-1||o<=r)return e;let s=new Set(t),i=n.slice(r+1,o).filter(c=>!s.has(c)),a=n.slice(0,r),l=n.slice(o+1);return i.length===0?[...a.length>0&&a[a.length-1]===""?a.slice(0,-1):a,...l].join(`
`):[...a,Do,...i,Lo,...l].join(`
`)}$d();var Yt=require("node:fs/promises"),Fd=require("node:os"),Ho=require("node:path");w();var mr=f("GlobalInstructionsInstaller"),jd="<!-- >>> jolli memory instructions >>> -->",Hd="<!-- <<< jolli memory instructions <<< -->",dS="## Jolli Memory",uS=[{host:"claude",relPath:[".claude","CLAUDE.md"]},{host:"gemini",relPath:[".gemini","GEMINI.md"]},{host:"codex",relPath:[".codex","AGENTS.md"]}];function LN(){return`${[jd,dS,"","This repository may have **Jolli Memory** enabled \u2014 a durable record of past","development the current code cannot show: why choices were made, how a topic was","handled before, what was already tried, and where work stopped. Treat it as a","first-class source and reach for it **proactively \u2014 before answering or guessing,","and even when the user never names Jolli** \u2014 whenever a request is memory-shaped","(about intent, history, or prior work). Its reads are read-only and cheap, so","lean toward consulting memory rather than guessing: a hit often changes the","answer, and a miss costs little.","","Two capabilities are available; invoke whichever recall / search skill or tool is","registered in this session \u2014 the exact name varies by host (a plugin skill, a","project skill, or e.g. an `mcp__jollimemory__*` MCP tool), so route by intent, not","by a fixed name:","","- **Recall** \u2014 deep context for one branch (the current branch by default): its","  decisions, a recap, and where work left off.","- **Search** \u2014 full-text lookup across *all* branches: decisions, topics, files.","","Consult memory FIRST, before answering from your own assumptions, when the request","is memory-shaped:","",'- **Why / intent** \u2014 "why is this like this", "why X and not Y", "what was the','  reasoning", or anything where the code shows *what* but not *why*. \u2192 Search (or',"  Recall when it's about the current branch).",'- **How it works / design** \u2014 "how does X work", "how is X built/designed", "how','  would I implement X", or walking through / extending an existing feature or',"  subsystem in this repo. The code shows the mechanism; memory holds why it is","  shaped that way and what was already tried. \u2192 Search (or Recall for the current","  branch). A quick lookup here is cheap and often surfaces rationale and pitfalls",`  the code comments don't \u2014 so search even though the ask starts with "how".`,'- **Prior art** \u2014 "have we done/hit this before", "how was <topic> handled", "is','  there a pattern for this", "where else do we do X", or a bug that may have been',"  seen before. \u2192 Search (decisions / topics / files across ALL branches).",`- **Resume** \u2014 "where were we", "pick up where I left off", "what's left on this`,'  branch", or returning to work after a break. \u2192 Recall (current-branch decisions',"  + recap + where work stopped).","- **Before non-trivial edits** \u2014 before refactoring, changing, or deleting code","  whose intent isn't obvious from the code itself, search memory first; a past","  decision may constrain the change, and skipping this risks re-breaking what a","  prior fix already addressed.","",'Routing: current-branch history or resume \u2192 Recall; cross-branch or "has this','come up before" \u2192 Search. When unsure whether memory helps, run a quick search',"first before answering from your own assumptions.","","Do NOT reach for memory on narrow, current-state facts you can read straight from","the code \u2014 one function's behavior, a type or signature, running a command, a","rename, formatting, or a literal text lookup \u2014 answer those from the code directly.","That exclusion is for single-symbol lookups only; do not let it swallow a",'whole-feature "how does it work / how is it designed" question \u2014 that is',"design-shaped, so search memory first (per the How it works / design rule above).","","Treat any concrete fact memory states as of-its-time: use it for why / intent /","prior context, but verify names, paths, and code shape against the current code","before relying on them. If no Jolli memory capability is registered here (Jolli","Memory not enabled in this repo), fall back to normal behavior.",Hd].join(`
`)}
`}function pS(e){return e==="enabled"?{write:!0}:e==="disabled"?{write:!1,remove:!0}:{write:!1}}function MN(e,t){let n=e.split(`
`),r=n.indexOf(jd),o=n.indexOf(Hd),s=t.slice(0,-1).split(`
`);if(r!==-1&&o!==-1&&o>r)return[...n.slice(0,r),...s,...n.slice(o+1)].join(`
`);let i=n.indexOf(dS);if(i!==-1){let l=n.length;for(let u=i+1;u<n.length;u++)if(/^#{1,2} /.test(n[u])){l=u;break}let c=n.slice(0,i).join(`
`),d=n.slice(l).join(`
`);return`${c.length>0?`${c}
`:""}${t}${d}`}if(e.length===0)return t;let a=e.endsWith(`
`)?"":`
`;return`${e}${a}${t}`}async function $N(e,t){let n="";try{n=await(0,Yt.readFile)(e,"utf-8")}catch(o){if(o.code!=="ENOENT"){mr.warn("Failed to read %s: %s \u2014 skipping",e,o.message);return}}let r=MN(n,t);if(r!==n)try{await(0,Yt.mkdir)((0,Ho.dirname)(e),{recursive:!0}),await(0,Yt.writeFile)(e,r,"utf-8"),mr.info("Updated %s with Jolli Memory instructions",e)}catch(o){mr.warn("Failed to write %s: %s",e,o.message)}}async function mS(e){let t=LN(),n=(0,Fd.homedir)();for(let r of uS)e[r.host]&&await $N((0,Ho.join)(n,...r.relPath),t)}function FN(e){let t=e.split(`
`),n=t.indexOf(jd),r=t.indexOf(Hd);if(n===-1||r===-1||r<n)return e;let o=n>0&&t[n-1]===""?n-1:n;return[...t.slice(0,o),...t.slice(r+1)].join(`
`)}async function jN(e){let t;try{t=await(0,Yt.readFile)(e,"utf-8")}catch(r){r.code!=="ENOENT"&&mr.warn("Failed to read %s: %s \u2014 skipping",e,r.message);return}let n=FN(t);if(n!==t)try{await(0,Yt.writeFile)(e,n,"utf-8"),mr.info("Removed Jolli Memory instructions from %s",e)}catch(r){mr.warn("Failed to write %s: %s",e,r.message)}}async function fS(){let e=(0,Fd.homedir)();for(let t of uS)await jN((0,Ho.join)(e,...t.relPath))}var xe=require("node:os"),U=require("node:path");ue();w();var gS=require("node:fs"),gr=require("node:fs/promises"),fr=require("node:path");ue();w();var Ud=f("McpRegistration"),Bd="jollimemory";function HN(e,t,n,r){return e==="win32"&&n?{command:"node",args:[n,...r]}:{command:t,args:[...r]}}function Wd(e,t,n){return HN(e,t,n,["mcp"])}function Jd(e){let t=ji(No(e));return t?(0,fr.join)(t.distDir,"Cli.js"):void 0}function hS(e){let t=ji(No(e));if(!t)return;let n=(0,fr.join)(t.distDir,"McpLauncher.js");return(0,gS.existsSync)(n)?n:void 0}var yS="/.mcp.json";async function wS(e){let t=(0,fr.join)(e,".mcp.json"),n;try{n=JSON.parse(await(0,gr.readFile)(t,"utf-8"))}catch(l){if(l.code!=="ENOENT"){Ud.warn("Skipping MCP registration: %s exists but is unreadable/invalid (%s)",t,String(l));return}n={}}let r=n.mcpServers??{},o=Z(),s=(0,fr.join)(o,"run-cli"),i=process.platform==="win32"?Jd(o):void 0;r[Bd]=Wd(process.platform,s,i);let a={...n,mcpServers:r};await(0,gr.writeFile)(t,`${JSON.stringify(a,null,2)}
`,"utf-8"),Ud.info("Registered MCP server in %s",t)}async function ES(e){let t=(0,fr.join)(e,".mcp.json"),n;try{n=JSON.parse(await(0,gr.readFile)(t,"utf-8"))}catch{return}n.mcpServers?.[Bd]&&(delete n.mcpServers[Bd],await(0,gr.writeFile)(t,`${JSON.stringify(n,null,2)}
`,"utf-8"),Ud.info("Removed MCP server from %s",t))}var Sn=require("node:fs/promises"),bS=require("node:path");Q();w();var Gi=f("CodexTomlWriter"),qi="[mcp_servers.jollimemory]";async function TS(e){try{return(await(0,Sn.stat)(e)).mode&511}catch{return 384}}function SS(e){return`${qi}
command = ${JSON.stringify(e.command)}
args = ${JSON.stringify(e.args??[])}
`}function _S(e){if(e.startsWith(qi))return 0;let t=e.indexOf(`
${qi}`);return t===-1?-1:t+1}function kS(e){let t=_S(e);if(t===-1)return e;let n=e.indexOf(`
[`,t+qi.length),r=n===-1?e.length:n+1,o=e.slice(0,t),s=e.slice(r);return o===""||s===""?o+s:`${o.replace(/\n+$/,"")}

${s}`}async function RS(e,t){let n="";try{n=await(0,Sn.readFile)(e,"utf-8")}catch(i){if(i.code!=="ENOENT"){Gi.warn("Skipping Codex MCP: %s unreadable (%s)",e,String(i));return}}let r=kS(n).replace(/\s*$/,""),o=r.length===0?SS(t):`${r}

${SS(t)}`;if(o===n){Gi.info("Codex MCP server already registered in %s \u2014 no write needed",e);return}await(0,Sn.mkdir)((0,bS.dirname)(e),{recursive:!0});let s=await TS(e);await v(e,o,s),Gi.info("Registered Codex MCP server in %s",e)}async function vS(e){let t;try{t=await(0,Sn.readFile)(e,"utf-8")}catch{return}_S(t)!==-1&&(await v(e,`${kS(t).replace(/\s*$/,"")}
`,await TS(e)),Gi.info("Removed Codex MCP server from %s",e))}var at=require("node:fs/promises"),qd=require("node:path");Q();w();var it=f("HermesConfigWriter");async function Vi(e){try{return(await(0,at.stat)(e)).mode&511}catch{return 384}}function xt(e){return e.replace(/\r\n/g,`
`).replace(/\r/g,`
`)}var Ae=e=>/^\s*$/.test(e),Gd=e=>/^#/.test(e),AS=e=>e.length===0||/^[ \t]/.test(e);function Kd(e){return e.startsWith("#")?"":e}var Vd=new Set(["{}","[]","null","~"]);function Uo(e,t){let n=new RegExp(`^${t}:(\\s*(.*))?$`),r=-1,o;for(let i=0;i<e.length;i++){let a=n.exec(e[i]);if(a!==null){r=i,o=(a[2]??"").trim();break}}if(r===-1)return null;if(o!==void 0&&(o=Kd(o)),o!==void 0&&o.length>0)return Vd.has(o)?{headerIndex:r,endIndex:r+1,trivialInline:!0,nonTrivialInline:!1}:{headerIndex:r,endIndex:r+1,trivialInline:!1,nonTrivialInline:!0};let s=r+1;for(;s<e.length;){let i=e[s];if(Ae(i)){s++;continue}if(!AS(i)&&!Gd(i))break;if(Gd(i)){let a=s+1;for(;a<e.length&&(Ae(e[a])||Gd(e[a]));)a++;if(a<e.length&&AS(e[a])&&!Ae(e[a])){s++;continue}break}s++}for(;s>r+1&&Ae(e[s-1]);)s--;return{headerIndex:r,endIndex:s,trivialInline:!1,nonTrivialInline:!1}}function IS(e,t){let n=xt(e),r=n.split(`
`);return n.endsWith(`
`)&&r.pop(),Uo(r,t)?.nonTrivialInline??!1}function Yi(e,t){if(t.trivialInline)return null;let n=e.slice(t.headerIndex+1,t.endIndex);if(n.length===0)return[];let r=n.find(c=>!Ae(c));if(r===void 0)return[];let o=/^([ \t]+)/.exec(r)?.[1]??"",s=new RegExp(`^${o}(?!-\\s)([^\\s:#][^:]*):(.*)$`),i=c=>c.length>o.length&&c.startsWith(o)&&c[o.length]==="#",a=[],l=0;for(;l<n.length;){if(Ae(n[l])){l++;continue}let c=s.exec(n[l]);if(c===null){a.push({subKey:"",body:`${n[l]}
`}),l++;continue}let d=c[1].trim(),u=l;for(l++;l<n.length;){let m=n[l];if(Ae(m)){l++;continue}if(s.exec(m)!==null||i(m))break;l++}let p=l;for(;p>u+1&&Ae(n[p-1]);)p--;a.push({subKey:d,body:`${n.slice(u,p).join(`
`)}
`})}return a}function Xi(e,t){if(t.length===0)return`${e}: {}`;let n=t.map(r=>r.body.replace(/\n+$/,""));return`${e}:
${n.join(`
`)}`}async function NS(e,t,n){let r="";try{r=await(0,at.readFile)(e,"utf-8")}catch(i){if(i.code!=="ENOENT"){it.warn("Skipping %s: %s unreadable (%s)",e,t,String(i));return}}if(IS(r,t)){it.warn("Skipping Hermes %s upsert in %s: the %s block is a non-trivial inline block and was left untouched",t,e,t);return}let o=xt(r),s=UN(o,t,n);if(s===o){it.info("Hermes %s already up to date in %s \u2014 no write needed",t,e);return}await(0,at.mkdir)((0,qd.dirname)(e),{recursive:!0}),await v(e,s,await Vi(e)),it.info("Wrote Hermes %s.%s to %s",t,n.subKey,e)}async function PS(e,t,n){let r;try{r=await(0,at.readFile)(e,"utf-8")}catch{return}let o=xt(r),s=BN(o,t,n);s!==o&&(await v(e,s,await Vi(e)),it.info("Removed Hermes %s.%s from %s",t,n,e))}async function OS(e,t,n,r){let o="";try{o=await(0,at.readFile)(e,"utf-8")}catch(a){if(a.code!=="ENOENT"){it.warn("Skipping %s: hooks unreadable (%s)",e,String(a));return}}if(IS(o,"hooks")){it.warn("Skipping Hermes hooks upsert in %s: the hooks block is a non-trivial inline block and was left untouched",e);return}let s=xt(o),i=qN(s,t,n,r);if(i===s){it.info("Hermes hook already up to date in %s \u2014 no write needed",e);return}await(0,at.mkdir)((0,qd.dirname)(e),{recursive:!0}),await v(e,i,await Vi(e)),it.info("Wrote Hermes hook %s command to %s",t,e)}async function DS(e,t,n){let r;try{r=await(0,at.readFile)(e,"utf-8")}catch{return}let o=xt(r),s=KN(o,t,n);s!==o&&(await v(e,s,await Vi(e)),it.info("Removed Hermes hook %s command from %s",t,e))}function UN(e,t,n){let r=xt(e),o=r.split(`
`);r.endsWith(`
`)&&o.pop();let s=Uo(o,t),i=Xi(t,YN(s!==null?Yi(o,s)??[]:[],n)),a;if(s===null){let l=o.join(`
`).replace(/\s*$/,"");a=l.length===0?i:`${l}

${i}`}else{if(s.nonTrivialInline)return e;let l=o.slice(0,s.headerIndex).join(`
`),c=o.slice(s.endIndex).join(`
`);a=[l,i,c].filter(d=>d.length>0).join(`
`)}return`${a.replace(/\n+$/,"")}
`}function BN(e,t,n){let r=xt(e),o=r.split(`
`);r.endsWith(`
`)&&o.pop();let s=Uo(o,t);if(s===null||s.trivialInline)return e;let i=Yi(o,s)??[],a=i.filter(p=>p.subKey!==n);if(a.length===i.length)return e;let l=Xi(t,a),c=o.slice(0,s.headerIndex).join(`
`),d=o.slice(s.endIndex).join(`
`);return`${[c,l,d].filter(p=>p.length>0).join(`
`).replace(/\n+$/,"")}
`}function WN(e){let t=e.trim();if(t.length===0||/^[|>][+-]?\d*$/.test(t))return null;if(t.startsWith('"'))try{let n=JSON.parse(t);return typeof n=="string"?n:null}catch{return null}return t.startsWith("'")&&t.endsWith("'")?t.slice(1,-1).replace(/''/g,"'"):t}function Yd(e){let t=[];for(let n=1;n<e.length;n++){let r=/^([ \t]*)-\s+command:\s*(.*?)\s*$/.exec(e[n]);r!==null&&t.push({index:n,indent:r[1],command:WN(r[2])})}return t.map((n,r)=>{let o=e.length;for(let i=n.index+1;i<e.length;i++)if(e[i].startsWith(`${n.indent}- `)){o=i;break}let s=t[r+1]?.index;return s!==void 0&&(o=Math.min(o,s)),{start:n.index,end:o,indent:n.indent,command:n.command}})}function Ki(e,t,n){return[`${e}- command: ${JSON.stringify(t)}`,`${e}  timeout: ${n}`]}function JN(e,t,n,r){let o=e.body.replace(/\n+$/,"").split(`
`),s=/^([ \t]*)[^:]+:\s*(.*?)\s*$/.exec(o[0]),i=s?.[1]??"  ",a=Kd(s?.[2]??"");if(Vd.has(a))return{subKey:t,body:`${i}${t}:
${Ki(`${i}  `,n,r).join(`
`)}
`};if(a.length>0)return e;let l=Yd(o),c=l.filter(h=>h.command===n),d=l[0]?.indent??`${i}  `;if(c.length===0)return{subKey:t,body:`${[...o,...Ki(d,n,r)].join(`
`)}
`};let u=c[0],p=new Set;for(let h of c)for(let E=h.start;E<h.end;E++)p.add(E);let m=o.filter((h,E)=>!p.has(E)),g=[...p].filter(h=>h<u.start).length;return m.splice(u.start-g,0,...Ki(u.indent,n,r)),{subKey:t,body:`${m.join(`
`)}
`}}function GN(e){for(let t of e){if(t.subKey.length===0)continue;let n=t.body.replace(/\n+$/,"").split(`
`),r=/^([ \t]*)/.exec(n[0])?.[1];if(!r)continue;let o=Yd(n)[0]?.indent;return{event:r,list:o??`${r}${r}`}}return{event:"  ",list:"    "}}function qN(e,t,n,r){let o=xt(e),s=o.split(`
`);o.endsWith(`
`)&&s.pop();let i=Uo(s,"hooks"),a=i!==null?Yi(s,i)??[]:[],l=a.findIndex(g=>g.subKey===t),c=GN(a),d={subKey:t,body:`${c.event}${t}:
${Ki(c.list,n,r).join(`
`)}
`},u=[...a];l===-1?u.push(d):u[l]=JN(a[l],t,n,r);let p=Xi("hooks",u),m;if(i===null){let g=s.join(`
`).replace(/\s*$/,"");m=g.length===0?p:`${g}

${p}`}else{if(i.nonTrivialInline)return e;let g=s.slice(0,i.headerIndex).join(`
`),h=s.slice(i.endIndex).join(`
`);m=[g,p,h].filter(E=>E.length>0).join(`
`)}return`${m.replace(/\n+$/,"")}
`}function KN(e,t,n){let r=xt(e),o=r.split(`
`);r.endsWith(`
`)&&o.pop();let s=Uo(o,"hooks");if(s===null||s.trivialInline)return e;let i=Yi(o,s)??[],a=i.findIndex(b=>b.subKey===t);if(a===-1)return e;let l=i[a].body.replace(/\n+$/,"").split(`
`),d=Yd(l).filter(b=>b.command===n);if(d.length===0)return e;let u=new Set;for(let b of d)for(let x=b.start;x<b.end;x++)u.add(x);let p=l.filter((b,x)=>!u.has(x)),m=p.slice(1).some(b=>!Ae(b)),g=[...i];m?g[a]={subKey:t,body:`${p.join(`
`)}
`}:g.splice(a,1);let h=Xi("hooks",g),E=o.slice(0,s.headerIndex).join(`
`),S=o.slice(s.endIndex).join(`
`);return`${[E,h,S].filter(b=>b.length>0).join(`
`).replace(/\n+$/,"")}
`}function xS(e){let t=e.replace(/\n+$/,"").split(`
`),n=/^[ \t]*[^\s:#][^:]*:\s*(.*?)\s*$/.exec(t[0]);if(n===null)return null;let r=t.slice(1),o=r.find(a=>!Ae(a)),s=o===void 0?"":/^([ \t]+)/.exec(o)?.[1]??"",i=[];if(s.length>0){let a=new RegExp(`^${s}(?!-\\s)([^\\s:#][^:]*):`),l=0;for(;l<r.length;){if(Ae(r[l])){l++;continue}let c=a.exec(r[l]);if(c===null){i.push({key:"",lines:[r[l]]}),l++;continue}let d=l;for(l++;l<r.length&&(Ae(r[l])||a.exec(r[l])===null);)l++;let u=l;for(;u>d+1&&Ae(r[u-1]);)u--;i.push({key:c[1].trim(),lines:r.slice(d,u)})}}return{header:t[0],inlineValue:Kd(n[1]??""),indent:s,children:i}}function CS(e,t,n){return t===n||t.length===0?[...e]:e.map(r=>r.startsWith(t)?n+r.slice(t.length):r)}function VN(e,t){let n=xS(e.body),r=xS(t.body);if(n===null||r===null)return e;if(n.inlineValue.length>0)return Vd.has(n.inlineValue)?t:e;if(n.children.length===0)return t;let o=n.children.map(i=>{if(i.key.length===0)return i;let a=r.children.find(l=>l.key===i.key);return a===void 0?i:{key:i.key,lines:CS(a.lines,r.indent,n.indent)}}),s=new Set(n.children.map(i=>i.key));for(let i of r.children)i.key.length===0||s.has(i.key)||o.push({key:i.key,lines:CS(i.lines,r.indent,n.indent)});return{subKey:e.subKey,body:`${[n.header,...o.flatMap(i=>i.lines)].join(`
`)}
`}}function YN(e,t){let n=e.findIndex(o=>o.subKey===t.subKey);if(n===-1)return[...e,t];let r=[...e];return r[n]=VN(e[n],t),r}var bn=require("node:fs/promises"),LS=require("node:path");Q();w();var zi=f("JsonMcpWriter"),Xd="jollimemory",MS="mcpServers";async function $S(e){try{return(await(0,bn.stat)(e)).mode&511}catch{return}}async function lt(e,t,n=MS){let r,o="";try{let c=await(0,bn.readFile)(e,"utf-8");o=c,r=c.trim()===""?{}:JSON.parse(c)}catch(c){if(c.code!=="ENOENT"){zi.warn("Skipping MCP registration: %s unreadable/invalid (%s)",e,String(c));return}r={}}let s=r[n]??{},i=()=>`${JSON.stringify({...r,[n]:s},null,2)}
`,a=i();s[Xd]=t;let l=i();if(l===o||l===a){zi.info("MCP server already registered in %s \u2014 no write needed",e);return}await(0,bn.mkdir)((0,LS.dirname)(e),{recursive:!0}),await v(e,l,await $S(e)),zi.info("Registered MCP server in %s",e)}async function ct(e,t=MS){let n;try{n=JSON.parse(await(0,bn.readFile)(e,"utf-8"))}catch{return}let r=n[t];r?.[Xd]&&(delete r[Xd],await v(e,`${JSON.stringify(n,null,2)}
`,await $S(e)),zi.info("Removed MCP server from %s",e))}var Zi=f("HostRegistrars"),XN={host:"claude",scope:"repo",register:wS,remove:ES,gitExcludePaths:()=>[yS]};function Je(){let e=Z(),t=process.platform==="win32"?Jd(e):void 0;return Wd(process.platform,(0,U.join)(e,"run-cli"),t)}function zN(){let e=Je();if(process.platform!=="win32")return e;let t=hS(Z());return t?{command:"node",args:[t]}:e}var QN={host:"cursor",scope:"repo",register:e=>lt((0,U.join)(e,".cursor","mcp.json"),{...Je()}),remove:e=>ct((0,U.join)(e,".cursor","mcp.json")),gitExcludePaths:()=>["/.cursor/mcp.json"]},ZN={host:"gemini",scope:"global",register:()=>lt((0,U.join)((0,xe.homedir)(),".gemini","settings.json"),{...Je()}),remove:()=>ct((0,U.join)((0,xe.homedir)(),".gemini","settings.json")),gitExcludePaths:()=>[]},eP={host:"codex",scope:"global",register:()=>RS((0,U.join)((0,xe.homedir)(),".codex","config.toml"),zN()),remove:()=>vS((0,U.join)((0,xe.homedir)(),".codex","config.toml")),gitExcludePaths:()=>[]},tP={host:"opencode",scope:"global",register:()=>{let e=Je(),t={type:"local",command:[e.command,...e.args],enabled:!0};return lt((0,U.join)((0,xe.homedir)(),".config","opencode","opencode.json"),t,"mcp")},remove:()=>ct((0,U.join)((0,xe.homedir)(),".config","opencode","opencode.json"),"mcp"),gitExcludePaths:()=>[]},nP={host:"copilot",scope:"global",register:()=>lt((0,U.join)((0,xe.homedir)(),".copilot","mcp-config.json"),{...Je()}),remove:()=>ct((0,U.join)((0,xe.homedir)(),".copilot","mcp-config.json")),gitExcludePaths:()=>[]},rP={host:"copilotChat",scope:"global",register:()=>{let e=Je(),t={type:"stdio",command:e.command,args:e.args};return lt((0,U.join)(wt("Code"),"User","mcp.json"),t,"servers")},remove:()=>ct((0,U.join)(wt("Code"),"User","mcp.json"),"servers"),gitExcludePaths:()=>[]},oP={host:"cline",scope:"global",register:async()=>{for(let e of await bl())await lt(As(e),{...Je()})},remove:async()=>{for(let e of Yr())await ct(As(e))},gitExcludePaths:()=>[]},sP={host:"devin",scope:"global",register:()=>lt((0,U.join)((0,xe.homedir)(),".config","devin","config.json"),{...Je(),transport:"stdio"}),remove:()=>ct((0,U.join)((0,xe.homedir)(),".config","devin","config.json")),gitExcludePaths:()=>[]},iP={host:"antigravity",scope:"global",register:()=>lt((0,U.join)((0,xe.homedir)(),".gemini","config","mcp_config.json"),{...Je()}),remove:()=>ct((0,U.join)((0,xe.homedir)(),".gemini","config","mcp_config.json")),gitExcludePaths:()=>[]},aP={host:"kimi",scope:"global",register:()=>lt((0,U.join)(Ds(),"mcp.json"),{...Je()}),remove:()=>ct((0,U.join)(Ds(),"mcp.json")),gitExcludePaths:()=>[]},Qi="on_session_end";function lP(e){return/[\s"\\]/.test(e)?`"${e.replace(/([\\"])/g,"\\$1")}"`:e}function FS(){return`${lP((0,U.join)(Z(),"run-hook"))} hermes-stop`}var cP={host:"hermes",scope:"global",register:async()=>{let e=Je(),t=["  jollimemory:",`    command: ${JSON.stringify(e.command)}`,`    args: ${JSON.stringify(e.args)}`].join(`
`),n=FS();for(let r of await Pl())try{let o=(0,U.join)(r,"config.yaml");if(await NS(o,"mcp_servers",{subKey:"jollimemory",body:`${t}
`}),process.platform==="win32")continue;await wf((0,U.join)(r,"shell-hooks-allowlist.json"),{event:Qi,command:n,scriptPath:(0,U.join)(Z(),"run-hook"),nowIso:new Date().toISOString().replace(/\.\d{3}Z$/,"Z")}),await OS(o,Qi,n,30)}catch(o){Zi.warn("Hermes registration failed for profile home %s: %s",r,String(o))}process.platform==="win32"&&Zi.info("Hermes hook registration skipped on win32 \u2014 run-hook is POSIX-only")},remove:async()=>{let e=FS();for(let t of await Pl())try{let n=(0,U.join)(t,"config.yaml");await PS(n,"mcp_servers","jollimemory"),process.platform!=="win32"&&(await DS(n,Qi,e),await Ef((0,U.join)(t,"shell-hooks-allowlist.json"),{event:Qi,command:e}))}catch(n){Zi.warn("Hermes removal failed for profile home %s: %s",t,String(n))}},gitExcludePaths:()=>[]};function hr(e){let t=[];return e.claude&&t.push(XN),e.cursor&&t.push(QN),e.gemini&&t.push(ZN),e.codex&&t.push(eP),e.opencode&&t.push(tP),e.copilot&&t.push(nP),e.copilotChat&&t.push(rP),e.cline&&t.push(oP),e.devin&&t.push(sP),e.antigravity&&t.push(iP),e.kimi&&t.push(aP),e.hermes&&t.push(cP),t}var dP={claude:!0,codex:!0,cursor:!0,gemini:!0,opencode:!0,copilot:!0,copilotChat:!0,cline:!0,devin:!0,antigravity:!0,kimi:!0,hermes:!0};async function zd(e,t,n,r){for(let o of e)try{await r(o)}catch(s){Zi.warn("MCP %s failed for %s in %s (non-fatal): %s",n,o.host,t,String(s))}}async function Qd(e,t){let n=hr(t).filter(r=>r.scope==="repo");await zd(n,e,"registration",r=>r.register(e))}async function jS(e){let t=hr(e).filter(n=>n.scope==="global");await zd(t,"(global)","registration",n=>n.register(""))}async function Zd(e){let t=hr(dP).filter(n=>n.scope==="repo");await zd(t,e,"removal",n=>n.remove(e))}var ye=require("node:fs/promises"),pe=require("node:path");Q();w();var Bo=`### Shell prerequisite

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
security recipe and the dist resolver and will not produce valid output.`;var Ce=f("SkillInstaller"),yr="1.0.6",US=["jollimemory-recall","jolli-memory-recall"],Wo=[{host:"agents-std",relativeDir:[".agents","skills"],enabled:()=>!0}],tu=[".claude","skills"],Jo=[{name:"jolli-recall",build:gP},{name:"jolli-search",build:hP},{name:"jolli-local-run",build:yP},{name:"jolli-remote-run",build:wP},{name:"jolli",build:EP}],KG=Jo.map(e=>e.name),BS=["jolli-pr"],WS=Wo.flatMap(e=>Jo.map(t=>`/${e.relativeDir.join("/")}/${t.name}/`)),ea=["/.claude/skills/jolli/"],JS=[...Wo.map(e=>`/${e.relativeDir.join("/")}/jolli/`),...ea];async function uP(e,t={}){for(let n of US)await ru((0,pe.join)(e,".claude","skills",n),"legacy");await nu(e);for(let n of Wo){if(!n.enabled(t))continue;let r=(0,pe.join)(e,...n.relativeDir);for(let o of Jo)await XS(r,o.name,o.build())}await na(e),await cr(e,ta)}async function nu(e){for(let t of Wo){let n=(0,pe.join)(e,...t.relativeDir);for(let r of BS)await ru((0,pe.join)(n,r),"retired")}}async function ru(e,t){let n=(0,pe.join)(e,"SKILL.md"),r;try{r=await(0,ye.readFile)(n,"utf-8")}catch{return}if(!ou(r)){Ce.info("Keeping %s \u2014 no Jolli ownership marker (user-owned)",e);return}try{await(0,ye.rm)(e,{recursive:!0,force:!0}),Ce.info("Removed %s Jolli skill at %s",t,e)}catch(o){Ce.warn("Failed to remove %s skill at %s: %s",t,e,o.message)}}async function GS(e,t={}){return uP(e,t)}async function qS(e){let t=(0,pe.join)(e,...tu),n=(0,pe.join)(t,"jolli","SKILL.md");try{if(!(await(0,ye.readFile)(n,"utf-8")).includes('vendor: "jolli.ai"')){Ce.info("Skipping umbrella write \u2014 existing %s lacks vendor marker (user-owned)",n);return}}catch{}await XS(t,"jolli",SP())}var eu=[".cursor","skills"],KS=Jo.filter(e=>e.name!=="jolli"),ta=[`/${eu.join("/")}/`,...KS.map(e=>`/${eu.join("/")}/${e.name}/`)];async function na(e){let t=(0,pe.join)(e,...eu);for(let n of KS){let r=(0,pe.join)(t,n.name),o=!1;try{o=(await(0,ye.lstat)(r)).isSymbolicLink()}catch{continue}if(o){await(0,ye.rm)(r,{recursive:!0,force:!0}),Ce.info("Removed cursor mirror symlink at %s",r);continue}await ru(r,"cursor mirror")}}async function VS(e){let t=[...Wo.map(n=>n.relativeDir),tu];for(let n of t){let r=(0,pe.join)(e,...n,"jolli"),o=(0,pe.join)(r,"SKILL.md"),s;try{s=await(0,ye.readFile)(o,"utf-8")}catch{continue}if(s.includes('vendor: "jolli.ai"'))try{await(0,ye.rm)(r,{recursive:!0,force:!0}),Ce.info("Removed Jolli umbrella menu at %s",r)}catch(i){Ce.warn("Failed to remove umbrella at %s: %s",r,i.message)}}}var pP=[...Jo.filter(e=>e.name!=="jolli").map(e=>e.name),...BS,...US];async function YS(e){for(let t of pP){let n=(0,pe.join)(e,...tu,t),r=(0,pe.join)(n,"SKILL.md"),o;try{o=await(0,ye.readFile)(r,"utf-8")}catch{continue}if(!ou(o)){Ce.info("Keeping %s \u2014 no Jolli ownership marker (user-owned)",n);continue}try{await(0,ye.rm)(n,{recursive:!0,force:!0}),Ce.info("Removed legacy Jolli skill at %s",n)}catch(s){Ce.warn("Failed to remove legacy skill at %s: %s",n,s.message)}}}var mP=/(?:^|\n)[ \t]*revision:\s*(\d+)/,fP=-1;function HS(e){let t=e.match(mP),n=t?Number.parseInt(t[1],10):Number.NaN;return Number.isFinite(n)?n:fP}function ou(e){return e.includes('vendor: "jolli.ai"')||e.includes("jolli-skill-version:")}async function XS(e,t,n){let r=(0,pe.join)(e,t),o=(0,pe.join)(r,"SKILL.md"),s=HS(n);try{let i=await(0,ye.readFile)(o,"utf-8");if(!ou(i)){Ce.info("Skipping %s SKILL.md \u2014 no Jolli ownership marker (user-owned)",t);return}if(HS(i)>=s)return}catch{}try{await(0,ye.mkdir)(r,{recursive:!0}),await v(o,n),Ce.info("Wrote SKILL.md (revision %d) to %s",s,o)}catch(i){Ce.warn("Failed to write %s SKILL.md: %s",t,i.message)}}function zS(e,t){return`${Bo}

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
vector.`}function gP(){return`---
name: jolli-recall
description: Recall prior development context from Jolli for the current branch. Use when the user wants to recall, remember, or resume prior work on a branch.
metadata:
  version: "${yr}"
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

${zS("recall"," --format json")}

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
`}function hP(){return`---
name: jolli-search
description: Search structured commit memories across all branches \u2014 decisions, topics, files. Use when the user wants to find prior decisions, related commits, or how a topic was handled before.
metadata:
  version: "${yr}"
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

${zS("search"," --format json")}

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
`}function yP(){return`---
name: jolli-local-run
description: Run a Jolli workflow locally \u2014 your own agent executes the workflow's recipe (no Jolli LLM budget) and its file writes land in a git-backed Jolli Space via a branch and pull request that space-cli opens on this machine. Use when the user wants to run a Jolli workflow locally.
metadata:
  version: "${yr}"
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

${Bo}

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
`}function wP(){return`---
name: jolli-remote-run
description: Run a Jolli workflow remotely \u2014 the Jolli backend executes the workflow server-side; this recipe triggers the run, monitors it to completion, reports the outcome (failed / cancelled / succeeded) with its article, PR, and workflow links, and offers to open any in your browser. Use when the user wants to run a Jolli workflow remotely (on the Jolli backend).
metadata:
  version: "${yr}"
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

${Bo}

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
`}function EP(){return`---
name: jolli
description: The Jolli action menu \u2014 a single front door that lists the Jolli skills available in this session (recall, search, run a workflow local or remote, workflow history, plus any setup and account skills a Jolli plugin adds) and the Jolli MCP tools, then routes your choice to the right one. Use when the user types /jolli or asks for the Jolli menu.
metadata:
  version: "${yr}"
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

${Bo}

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
`}function SP(){return`---
name: jolli
description: The Jolli front door \u2014 checks how Jolli is set up in this repo, guides first-time setup through /jolli:init when something's missing, reminds you to sign in when memories can't sync yet, and otherwise shows a status snapshot and routes you to the right Jolli skill or MCP tool. Use when the user types /jolli or asks for Jolli / the Jolli menu.
metadata:
  version: "${yr}"
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
`}var M=f("Installer");function TP(e,t){return process.platform==="linux"?e===t:e.toLowerCase()===t.toLowerCase()}async function _P(e){let t=await de(),n=pS(t.globalInstructions);if(n.write){let r=e?.codexDetected??await kl(),o=e?.geminiDetected??await Cl();await mS({claude:t.claudeEnabled!==!1,gemini:o&&t.geminiEnabled!==!1,codex:r&&t.codexEnabled!==!1})}else n.remove&&await fS()}async function kP(e,t,n){let r=async()=>{if(!await bd())return!1;try{await YE()}catch(s){M.warn("Legacy dist-path migration failed (non-fatal): %s",s.message)}if(!await Ro(e,t))return!1;try{let s=await VE();s.length>0&&M.info("Pruned stale dist-paths entries: %s",s.join(", "))}catch(s){M.warn("Pruning stale dist-paths failed (non-fatal): %s",s.message)}return!0},o=n?await ja(r,n):await ja(r);return o.acquired&&o.value===!0}async function ZS(e,t){let n=e??process.cwd(),r=[],o=t?.integrationsOnly===!0,s=t?.repoHooksOnly===!0;if(o&&s)return{success:!1,message:"install: integrationsOnly and repoHooksOnly are mutually exclusive",warnings:r};if(!await $n(n))return M.info("Skipping Jolli Memory install \u2014 %s is not inside a git work tree",n),{success:!1,message:`Not a git repository \u2014 skipping Jolli Memory install (${n})`,warnings:r};M.info(s?"Installing Jolli Memory repo hooks only (no integrations)":o?"Installing Jolli Memory integrations (no hooks)":"Installing Jolli Memory hooks");let i=null;try{let a=await de(),l=t?.automatic?[n]:await Ir(n),c=t?.automatic?{timeoutMs:200,pollMs:25}:void 0,d=(0,Tn.dirname)((0,QS.fileURLToPath)(__jmImportMetaUrl)),u=t?.source??"cli",p=t?.sourceTag??(u==="vscode-extension"?wd(d):"cli");if(!ko(p))return{success:!1,message:`Refusing to install with an unsafe source tag: ${JSON.stringify(p)}`,warnings:r};let m=Xf(p);if(!await kP(p,t?.distDir,c))return{success:!1,message:"Failed to reconcile the shared runtime registry \u2014 cannot install hooks that depend on it",warnings:r};if(!o){if(i=c?await Lr(n,c):await Lr(n),!i)return{success:!1,message:"Another Jolli enable/disable operation is still running; retry shortly",warnings:r};if(t?.respectManualDisable&&await Mt(n))return{success:!0,message:"Repository remains manually disabled",warnings:r,manuallyDisabled:!0};if(!t?.automatic)try{let C=await zf(p,a);C!==null&&(C.seededTool||C.seededProvider)&&M.info("Plugin init seeded localAgentTool=%s (source %s, seededTool=%s, seededProvider=%s)",C.tool,p,C.seededTool,C.seededProvider),C?.keptTool!==void 0&&M.info("Plugin init kept localAgentTool=%s (source %s drives %s; left alone)",C.keptTool,p,C.tool)}catch(C){r.push(`Could not record the local agent tool for this host: ${C.message}`)}}let g=s?!1:await kl(),h=s?!1:await Cl(),E=s?!1:await df(),S=s?!1:await eg(),k=s?!1:await ef(),b=s?!1:await Km(),x=s?!1:await Um()||await jm(),P=s?!1:await Al(),$=s?!1:await Bl(),we=s?!1:await vl(),Fe=s?!1:await Bm(),je=s?!1:await mf(),It=s?!1:await vm(),zt=s?!1:await Vf(),xn=s?!1:await Rf(),Qt={};for(let C of l){let Nn=await ll(C),aT=(0,Tn.join)(Nn,"sessions.json");try{await(0,ra.writeFile)(aT,JSON.stringify({version:1,sessions:{}},null,"	"),{encoding:"utf-8",flag:"wx"})}catch(pt){pt.code!=="EEXIST"&&M.warn("Failed to bootstrap sessions.json in %s: %s",C,pt.message)}if(s){if(await nu(C),m==="claude"){if(await qS(C),await YS(C),await Rd(C,[...ea]),a.claudeEnabled!==!1){let pt=await Vc(C);(C===n||Qt.path===void 0)&&(Qt=pt)}}else if(m==="cursor"){let pt={claude:!1,codex:!1,cursor:!0,gemini:!1,opencode:!1,copilot:!1,copilotChat:!1,cline:!1,devin:!1,antigravity:!1,kimi:!1,hermes:!1};await Qd(C,pt),await Rd(C,hr(pt).flatMap(lT=>lT.gitExcludePaths()))}await na(C),await cr(C,[...ta]);continue}await GS(C,{claudeEnabled:a.claudeEnabled});let Pu={claude:a.claudeEnabled!==!1,codex:g,cursor:P,gemini:h,opencode:$,copilot:we,copilotChat:b,cline:Fe,devin:je,antigravity:It,kimi:zt,hermes:xn};if(await eS(C,[...WS,...ea,...hr(Pu).flatMap(pt=>pt.gitExcludePaths())]),await Qd(C,Pu),o||a.claudeEnabled===!1)continue;let ba=await Vc(C);ba.warning&&r.push(ba.warning),(C===n||Qt.path===void 0)&&(Qt=ba)}await jS({claude:!1,cursor:!1,codex:g||s&&m==="codex",gemini:h,opencode:$,copilot:we,copilotChat:b,cline:Fe,devin:je,antigravity:It,kimi:zt,hermes:xn}),s||await _P({codexDetected:g,geminiDetected:h});let ut={},Nt={},Cn={},In={},Xe={};o||(ut=await Ad(n),ut.warning&&r.push(ut.warning),Nt=await xd(n),Nt.warning&&r.push(Nt.warning),Cn=await Cd(n),Cn.warning&&r.push(Cn.warning),In=await Id(n),In.warning&&r.push(In.warning),Xe=await Nd(n),Xe.warning&&r.push(Xe.warning)),g&&a.codexEnabled===void 0&&(await gt({codexEnabled:!0}),M.info("Codex detected \u2014 enabled Codex session discovery"));let Tr;if(h&&a.geminiEnabled!==!1){if(!o)for(let C of l){let Nn=await Td(C);(C===n||Tr===void 0)&&(Tr=Nn.path)}a.geminiEnabled===void 0&&(await gt({geminiEnabled:!0}),M.info("Gemini detected \u2014 enabled Gemini session tracking"))}a.openCodeEnabled!==!1&&S&&a.openCodeEnabled===void 0&&(await gt({openCodeEnabled:!0}),M.info("OpenCode detected \u2014 enabled OpenCode session discovery"));let Xo=s?!1:await sf(),zo=a.cursorEnabled!==!1&&E,Sa=a.cursorEnabled!==!1&&Xo;(zo||Sa)&&a.cursorEnabled===void 0&&(await gt({cursorEnabled:!0}),M.info("Cursor detected (IDE=%s, CLI=%s) \u2014 enabled session discovery",zo,Sa));let K=a.copilotEnabled!==!1&&k,Qo=a.copilotEnabled!==!1&&b;if((K||Qo)&&a.copilotEnabled===void 0&&(await gt({copilotEnabled:!0}),M.info("GitHub Copilot detected (CLI=%s, Chat=%s) \u2014 enabled session discovery",K,Qo)),x&&a.clineEnabled===void 0&&(await gt({clineEnabled:!0}),M.info("Cline detected \u2014 enabled Cline session discovery")),!s)for(let C of l)await RP(C);if(t?.source==="vscode-extension")M.info("Skipping v5 migration on vscode-extension source \u2014 Extension.ts owns it with UI");else if(s)M.info("Skipping v5 migration in repo-hooks-only mode \u2014 runs on every session start");else try{let C=await Yy(n);M.info("Schema v5 migration: alreadyDone=%s fresh=%s migrated=%d skipped=%d",C.alreadyDone,C.fresh,C.migrated,C.skipped)}catch(C){M.warn("Schema v5 migration failed (non-fatal): %s",C.message)}if(t?.clearManualDisableOnSuccess&&!o)try{await qa(n,!1)}catch(C){let Nn=C.message;r.push(`Enabled, but could not clear the manual-disable opt-out (${Nn}). Run enable again to clear it.`),M.warn("Could not clear manual-disable opt-out after enable (non-fatal): %s",Nn)}return M.info("Installation complete"),{success:!0,message:"Jolli Memory hooks installed successfully",warnings:r,claudeSettingsPath:Qt.path,gitHookPath:ut.path,postRewriteHookPath:Nt.path,prepareMsgHookPath:Cn.path,postMergeHookPath:In.path,prePushHookPath:Xe.path,geminiSettingsPath:Tr,hermesConfigPath:xn?yf():void 0}}catch(a){let l=`Installation failed: ${a.message}`;return M.error(l),{success:!1,message:l,warnings:r}}finally{i&&await i.release()}}async function RP(e){let t=G(e);try{await(0,ra.stat)(t)}catch{return}let n=Z();if(TP((0,Tn.resolve)(t),(0,Tn.resolve)(n)))return;let r=await rn(t),o={};for(let[c,d]of Object.entries(r))d!==void 0&&(o[c]=d);if(Object.keys(o).length===0)return;let s=await rn(n),i={};for(let[c,d]of Object.entries(o))s[c]===void 0&&(i[c]=d);Object.keys(i).length>0&&await Wr(i,n);let a={};for(let c of Object.keys(i))a[c]=void 0;Object.keys(a).length>0&&await Wr(a,t);let l=Object.keys(o).filter(c=>!(c in i));for(let c of l)M.warn("Worktree %s field %s not migrated: worktree=%s, global=%s (global value takes effect)",e,c,String(o[c]),String(s[c]));M.info("Migrated %d config fields from worktree %s to global",Object.keys(i).length,e)}async function eb(e,t){let n=e??process.cwd(),r=[],o=t?.integrationsOnly===!0;M.info(o?"Removing Jolli Memory integrations (MCP)":"Removing Jolli Memory hooks");let s=null;try{if(!o&&!t?.repoLockHeld&&(s=await Lr(n),!s))return{success:!1,message:"Another Jolli enable/disable operation is still running; retry shortly",warnings:r};!o&&t?.persistManualDisable&&await qa(n,!0);let i;try{i=await Ir(n)}catch{i=[n]}if(o){for(let l of i)try{await Zd(l)}catch(c){M.warn("MCP removal failed in %s (non-fatal): %s",l,c.message)}return M.info("Integrations removal complete"),{success:!0,message:"Jolli Memory integrations removed (MCP)",warnings:r}}for(let l of i){let c=await Yc(l);c.warning&&r.push(c.warning),await _d(l);try{await Zd(l)}catch(d){M.warn("MCP removal failed in %s (non-fatal): %s",l,d.message)}t?.preserveMenu||await VS(l),await na(l),await cr(l,[...ta])}let a=await Pd(n);return a.warning&&r.push(a.warning),await Od(n),await Dd(n),await Ld(n),await Md(n),t?.preserveMenu||await cr(n,JS),r.push("The `jolli-*` skill files were left in place. To remove them manually: `rm -rf .agents/skills/jolli-* .claude/skills/jolli-*` and delete the `# >>> jolli skill exclude >>>` block from `.git/info/exclude` if you no longer want it."),M.info("Uninstallation complete"),{success:!0,message:"Jolli Memory hooks removed successfully",warnings:r}}catch(i){let a=`Uninstallation failed: ${i.message}`;return M.error(a),{success:!1,message:a,warnings:r}}finally{s&&await s.release()}}w();function oa(){return new Promise((e,t)=>{let n=[];process.stdin.setEncoding("utf-8"),process.stdin.on("data",r=>n.push(r)),process.stdin.on("end",()=>{process.stdin.destroy(),e(n.join(""))}),process.stdin.on("error",t)})}var fa=require("node:fs/promises"),Ab=require("node:path");w();Q();Se();w();er();Wn();var J=class extends Error{constructor(t){super(t),this.name="LocalAgentSetupError"}},_n=class extends J{constructor(t){super(t),this.name="LocalAgentModelRefusedError"}},Ge=class extends Error{constructor(t){super(t),this.name="LocalAgentAuthError"}},Ct=class extends Error{constructor(t){super(t),this.name="LocalAgentTransientError"}};var vP=new Map;function kn(e){vP.set(e.id,e)}var Er=require("node:path");var qe=require("node:fs"),su=require("node:os"),wr=require("node:path");w();ke();var sa=f("ExecutableResolver"),AP=15*6e4,Go=null;function xP(e){return e.split(`
`).map(t=>t.trim()).filter(Boolean)}function tb(e){return(e??"0").replace(/^v/i,"").split(".").map(t=>Number.parseInt(t,10)||0)}function CP(e,t){let n=tb(e),r=tb(t);for(let o=0;o<Math.max(n.length,r.length);o++){let s=n[o]??0,i=r[o]??0;if(s!==i)return s>i}return!1}function IP(e){return[wr.posix.join(e,".local/bin"),"/usr/local/bin","/opt/homebrew/bin","/opt/homebrew/sbin",wr.posix.join(e,".npm-global/bin"),"/Applications/ChatGPT.app/Contents/Resources"]}function rb(e,t,n){if(n==="win32")return e;let r=e.split(":").filter(Boolean);return[...new Set([...r,...IP(t)])].join(":")}function NP(e,t,n){let r={...process.env};for(let o of Object.keys(r))o.toLowerCase()==="path"&&delete r[o];return r.PATH=n,Ee(e,[...t],{encoding:"utf8",env:r})}function PP(e,t,n={}){let r=n.home??(0,su.homedir)(),o=n.basePath??process.env.PATH??"",s=n.exists??qe.existsSync,i=n.runFinder??NP,a=n.listDir??ab,l=[],c=t==="win32"?"where":"which",d=t==="win32"?[e.binName]:["-a",e.binName],u=rb(o,r,t);try{l.push(...xP(i(c,d,u)))}catch(k){sa.info("%s: `%s %s` found nothing (%s)",e.binName,c,d.join(" "),k.message)}let p=e.knownPaths(r,t).filter(s);l.push(...p);let m=[...new Set(l)];if(t!=="win32")return nb(e,m.length,m,[],p,u,":"),m.map(k=>({file:k}));let g=k=>k.toLowerCase().endsWith(".exe"),h=m.filter(k=>!g(k)),E=h.flatMap(k=>e.expandShim?.(k,{exists:s,listDir:a})??[]),S=sb([...m.filter(g).map(k=>({file:k})),...E]);return nb(e,S.length,S.map(qo),h,p,u,";"),S}var OP=[".exe",".cmd",".bat",".ps1",""];function ob(e,t){try{return(0,qe.statSync)(e).isFile()?(t==="win32"||(0,qe.accessSync)(e,qe.constants.X_OK),!0):!1}catch{return!1}}function DP(e,t,n={}){let r=n.home??(0,su.homedir)(),o=n.basePath??process.env.PATH??"",s=n.exists??(d=>ob(d,t)),i=t==="win32"?wr.win32.join:wr.posix.join,a=rb(o,r,t).split(t==="win32"?";":":"),l=t==="win32"?OP:[""],c=[];for(let d of a)if(d)for(let u of l){let p=i(d,e.binName+u);s(p)&&c.push(p)}return c.push(...e.knownPaths(r,t).filter(s)),[...new Set(c)]}function Me(e,t={}){let n=t.platform??process.platform,r=t.exists??(o=>ob(o,n));return t.overridePath?ib(e,t.overridePath,n).list.some(o=>r(o.file)):t.candidates?t.candidates().length>0:DP(e,n,t).length>0}function sb(e){let t=new Set;return e.filter(n=>{let r=[n.file,...n.launchArgs??[]].join("\0");return t.has(r)?!1:(t.add(r),!0)})}function ib(e,t,n){let r={list:[{file:t}],expanded:!1};if(n!=="win32"||t.toLowerCase().endsWith(".exe"))return r;let o=sb(e.expandShim?.(t,{exists:qe.existsSync,listDir:ab})??[]);return o.length?{list:o,expanded:!0}:r}function LP(e,t){return t!=="win32"||e.toLowerCase().endsWith(".exe")?"":" On Windows this must be a real .exe \u2014 a .cmd/.ps1 launcher cannot be run directly."}function qo(e){return e.launchArgs?.length?`${e.file} ${e.launchArgs.join(" ")}`:e.file}function ab(e){try{return(0,qe.readdirSync)(e)}catch{return[]}}function nb(e,t,n,r,o,s,i){sa.info("%s discovery: %d candidate(s)=[%s]; shims=[%s]; knownPaths present=[%s] (searched %d PATH entries)",e.binName,t,n.join(", ")||"(none)",r.join(", ")||"(none)",o.join(", ")||"(none)",s.split(i).filter(Boolean).length)}function MP(e){let t=e.trim().split(/\s+/).filter(Boolean);return t.find(n=>/^v?\d+\./.test(n))??t[0]}function $P(e,t){try{let n=[...e.launchArgs??[],...t],r=Ee(e.file,n,{encoding:"utf8",timeout:1e4}),o=MP(r);return{ok:!!o,version:o}}catch{return{ok:!1}}}function $e(e,t={}){let n=t.now??Date.now,r=`${e.binName} ${t.overridePath??""}`;if(Go&&Go.key===r&&n()-Go.at<AP)return Go.result;let o=t.probe??(d=>$P(d,e.probeArgs)),s=t.platform??process.platform,i=t.overridePath?ib(e,t.overridePath,s):null,a=i?.list??(t.candidates??(()=>PP(e,s)))(),l=null,c=[];for(let d of a){let u=o(d);if(!u.ok){c.push(qo(d));continue}(!l||CP(u.version,l.version))&&(l={file:d.file,version:u.version??"0",launchArgs:d.launchArgs})}if(!l){sa.warn("No compatible %s: overridePath=%s; candidates=[%s]; failed probe `%s %s`=[%s]",e.binName,t.overridePath??"(none)",a.map(qo).join(", ")||"(none)",e.binName,e.probeArgs.join(" "),c.join(", ")||"(none)");let d=t.overridePath&&!i?.expanded?LP(t.overridePath,s):"";throw new J(t.overridePath?`Configured local agent path "${t.overridePath}" is not a working ${e.binName} CLI.${d}`:`No compatible ${e.binName} CLI found. Install/upgrade it, or switch the AI provider.`)}return sa.info("Resolved %s executable: %s (v%s)",e.binName,qo(l),l.version),Go={at:n(),key:r,result:l},l}var lb={binName:"claude",knownPaths:(e,t)=>t==="win32"?[Er.win32.join(e,".local","bin","claude.exe"),Er.win32.join(e,".claude","local","claude.exe")]:[Er.posix.join(e,".local/bin/claude"),Er.posix.join(e,".claude/local/claude")],probeArgs:["--permission-mode","dontAsk","--version"]};function cb(e={}){return $e(lb,e)}function db(e={}){return Me(lb,e)}w();Q();ue();var _K=f("OptionalFlags");function Sr(e,t){let n=[];for(let r of e)t?.has(r.id)||n.push(...r.args);return n}function FP(e,t){let n=t?.trim().toLowerCase()??"",r,o=-1,s=!1;for(let[i,a]of Object.entries(e??{})){let l=(a?.inputTokens??0)+(a?.cacheReadInputTokens??0),c=n!==""&&i.toLowerCase().includes(n);(l>o||l===o&&c&&!s)&&(r=i,o=l,s=c)}return r}var jP=["ANTHROPIC_API_KEY","ANTHROPIC_AUTH_TOKEN","ANTHROPIC_BASE_URL","CLAUDE_CODE_OAUTH_TOKEN","CLAUDECODE"],ub=[{id:"--strict-mcp-config",args:["--strict-mcp-config"]},{id:"--disable-slash-commands",args:["--disable-slash-commands"]},{id:"--setting-sources",args:["--setting-sources",""]}],ia=class{constructor(){this.id="claude-code";this.optionalFlags=ub}discoverExecutable(t){return Promise.resolve(cb({overridePath:t}))}isPresent(t){return db({overridePath:t})}buildInvocation(t,n){let r={...process.env};for(let s of jP)delete r[s];r[_e]="1";let o=Ie();return{file:t.file,args:[...t.launchArgs??[],"-p","--output-format","json",...n.model?["--model",n.model]:[],"--system-prompt",n.systemPrompt,"--tools","","--permission-mode","dontAsk","--no-session-persistence",...Sr(ub,n.disabledFlagIds)],stdin:n.prompt,env:r,cwd:o}}parseResult(t,n){let r;try{r=JSON.parse(t)}catch{throw new J(`Could not parse Claude Code output as JSON (first 200 chars): ${t.slice(0,200)}`)}if(r.is_error){let i=r.api_error_status??0,a=r.result??r.subtype??"unknown",l=`Claude Code returned an error (status ${i}): ${a}`;throw i===401||i===403?new Ge(l):i===429||i>=500&&i<600?new Ct(l):i===404?new _n(l):/log ?in|logged in|unauthori|authenticat|invalid api key/i.test(a)?new Ge(l):new J(l)}let o=r.usage??{},s=FP(r.modelUsage,n);return{text:r.result??"",inputTokens:o.input_tokens??0,outputTokens:o.output_tokens??0,cachedTokens:(o.cache_read_input_tokens??0)+(o.cache_creation_input_tokens??0),costUsd:r.total_cost_usd??0,stopReason:r.stop_reason??null,...s!==void 0&&{model:s}}}};var la=require("node:path");var HP=300;function UP(e){let t=e.trim();if(!t.startsWith("{"))return null;try{let n=JSON.parse(t);return typeof n?.status=="number"?n:null}catch{return null}}function pb(e,t){let n=e.slice(0,HP),r=UP(e);if(r){let o=r.status,s=r.error?.message??"",i=!!t&&s.includes(`'${t}'`);if(o===401)return new Ge(`Codex auth error: ${n}`);if(o===429||o>=500&&o<600)return new Ct(`Codex run failed: ${n}`);if(o>=400&&o<500&&i)return new _n(`Codex refused the model '${t}': ${n}`);if(o===403)return new Ge(`Codex auth error: ${n}`)}return/log ?in|logged in|unauthori|authenticat/i.test(n)?new Ge(`Codex auth error: ${n}`):new Ct(`Codex run failed: ${n}`)}var mb={binName:"codex",knownPaths:(e,t)=>t==="win32"?[la.win32.join(e,".local","bin","codex.exe")]:[la.posix.join(e,".local/bin/codex")],probeArgs:["--version"]},fb=[{id:"--disable",args:["--disable","plugins"],matches:["--disable","Unknown feature flag: plugins"]}],aa=class{constructor(){this.id="codex";this.optionalFlags=fb}discoverExecutable(t){return Promise.resolve($e(mb,{overridePath:t}))}isPresent(t){return Me(mb,{overridePath:t})}buildInvocation(t,n){let r={...process.env};delete r.OPENAI_API_KEY,delete r.OPENAI_BASE_URL,r[_e]="1";let o=Ie(),s=n.systemPrompt?`${n.systemPrompt}

${n.prompt}`:n.prompt,i=[...t.launchArgs??[],"exec","--json","--skip-git-repo-check","-s","read-only","-C",o,...Sr(fb,n.disabledFlagIds),...n.model?["-m",n.model]:[],s];return{file:t.file,args:i,stdin:"",env:r,cwd:o}}parseResult(t,n){let r="",o=0,s=0,i=0,a=!1,l;for(let c of t.split(`
`)){let d=c.trim();if(!d)continue;let u;try{u=JSON.parse(d)}catch{continue}a=!0;let p=u.type??"";if(p==="turn.failed")throw pb(u.message??u.error?.message??d,n);if(/error/i.test(p)){l??=u.message??u.error?.message??d;continue}if(p==="item.completed"&&u.item?.type==="agent_message"){let m=u.item.text;m&&(r=m)}p==="turn.completed"&&u.usage&&(o=u.usage.input_tokens??o,s=u.usage.output_tokens??s,i=u.usage.cached_input_tokens??i)}if(!a)throw new J(`Codex produced no JSONL events (first 200 chars): ${t.slice(0,200)}`);if(l!==void 0&&r.trim()==="")throw pb(l,n);return{text:r,inputTokens:o,outputTokens:s,cachedTokens:i,costUsd:0,stopReason:null}}};var dt=require("node:path");function BP(e,t){let n=dt.win32.join(dt.win32.dirname(e),"versions");return[...t.listDir(n)].sort().reverse().flatMap(o=>{let s=dt.win32.join(n,o,"node.exe"),i=dt.win32.join(n,o,"index.js");return!t.exists(s)||!t.exists(i)?[]:[{file:s,launchArgs:["--use-system-ca",i]},{file:s,launchArgs:[i]}]})}function WP(e,t=process.env){return t.LOCALAPPDATA||dt.win32.join(e,"AppData","Local")}function JP(e,t,n){return t!=="win32"?[dt.posix.join(e,".local/bin/cursor-agent")]:[dt.win32.join(WP(e,n),"cursor-agent","cursor-agent.cmd"),dt.win32.join(e,".local","bin","cursor-agent.exe")]}var gb={binName:"cursor-agent",knownPaths:JP,probeArgs:["--version"],expandShim:BP},ca=class{constructor(){this.id="cursor-agent"}discoverExecutable(t){return Promise.resolve($e(gb,{overridePath:t}))}isPresent(t){return Me(gb,{overridePath:t})}buildInvocation(t,n){let r={...process.env};delete r.CURSOR_API_KEY,r[_e]="1";let o=Ie(),s=n.systemPrompt?`${n.systemPrompt}

${n.prompt}`:n.prompt,i=[...t.launchArgs??[],"-p","--output-format","json","--trust",...n.model?["--model",n.model]:[],s];return{file:t.file,args:i,stdin:"",env:r,cwd:o}}parseResult(t){let n;try{n=JSON.parse(t)}catch{throw new J(`Could not parse Cursor output as JSON (first 200 chars): ${t.slice(0,200)}`)}if(n.is_error){let o=n.result??n.subtype??"unknown",s=`Cursor returned an error: ${o}`;throw/log ?in|logged in|unauthori|authenticat|not_logged_in/i.test(o)||/auth/i.test(n.subtype??"")?new Ge(s):new J(s)}let r=n.usage??{};return{text:n.result??"",inputTokens:r.inputTokens??0,outputTokens:r.outputTokens??0,cachedTokens:(r.cacheReadTokens??0)+(r.cacheWriteTokens??0),costUsd:0,stopReason:n.subtype??null}}};var wb=require("node:fs"),Xt=require("node:path");w();var GP=f("HermesBackend"),hb="usage.json";function qP(e){return e==="win32"?24e3:e==="darwin"?512*1024:12e4}function KP(e,t){return t!=="win32"?[Xt.posix.join(e,".local/bin/hermes")]:[Xt.win32.join(e,".hermes","bin","hermes.exe"),Xt.win32.join(e,".local","bin","hermes.exe")]}var yb={binName:"hermes",knownPaths:KP,probeArgs:["--version"]},VP=[{id:"--ignore-rules",args:["--ignore-rules"]}];function Ko(e){let t=typeof e=="number"?e:typeof e=="string"&&e.trim().length>0?Number(e):Number.NaN;return Number.isFinite(t)&&t>=0?t:0}var da=class{constructor(){this.id="hermes";this.optionalFlags=VP}discoverExecutable(t){return Promise.resolve($e(yb,{overridePath:t}))}isPresent(t){return Me(yb,{overridePath:t})}buildInvocation(t,n){let r={...process.env};r[_e]="1";let o=n.systemPrompt?`${n.systemPrompt}

${n.prompt}`:n.prompt,s=qP(process.platform),i=Buffer.byteLength(o,"utf8");if(i>s)throw new J(`Hermes prompt is ${i} UTF-8 bytes, above this platform's ${s}-byte argv budget. Hermes exposes no lossless prompt-file channel, so refusing to generate a partial summary.`);let a=Ie(),l=[...t.launchArgs??[],...n.model?["--model",n.model]:[],...n.disabledFlagIds?.has("--ignore-rules")?[]:["--ignore-rules"],"--usage-file",(0,Xt.join)(a,hb),"-z",o];return{file:t.file,args:l,stdin:"",env:r,cwd:a}}parseResult(t,n,r){let o=r===void 0?void 0:YP((0,Xt.join)(r,hb));if(o===void 0)throw new J("Hermes did not produce a valid usage report; refusing unverified stdout that may describe a failed run.");let s=t.trim(),i=typeof o.failure=="string"&&o.failure.trim().length>0?o.failure:void 0;if(o.failed===!0||i!==void 0){let a=i??"no reason reported";throw new Error(`Hermes reported a failed run: ${a}`)}if(o.failed!==void 0&&o.failed!==!1)throw new J("Hermes usage report contained a non-boolean failure status; refusing unverified stdout.");if(!s)throw new J(`Hermes produced no output (first 200 chars of stdout): ${t.slice(0,200)}`);return{text:s,inputTokens:Ko(o.input_tokens),outputTokens:Ko(o.output_tokens),cachedTokens:Ko(o.cache_read_tokens)+Ko(o.cache_write_tokens),costUsd:Ko(o.estimated_cost_usd),stopReason:null,...typeof o.model=="string"&&o.model?{model:o.model}:{}}}};function YP(e){let t;try{t=(0,wb.readFileSync)(e,"utf-8")}catch{return}try{let n=JSON.parse(t);return typeof n=="object"&&n!==null&&!Array.isArray(n)?n:void 0}catch{GP.debug("Hermes usage report at %s is not valid JSON \u2014 treating the run as unverifiable",e);return}}var Sb=require("node:fs"),Rn=require("node:path");Xa();var XP=24e3,zP=1e6,QP="jolli-context.md",ZP=["---","name: jolli-task","description: Full task context for this run; follow the instructions it contains.","---"].join(`
`),eO="Follow the instructions in your agent definition and output only what they ask for \u2014 no preamble, no commentary.";function tO(e,t){return t!=="win32"?[Rn.posix.join(e,".local/bin/kimi")]:[Rn.win32.join(e,".kimi-code","bin","kimi.exe"),Rn.win32.join(e,".local","bin","kimi.exe")]}var Eb={binName:"kimi",knownPaths:tO,probeArgs:["--version"]},ua=class{constructor(){this.id="kimi"}discoverExecutable(t){return Promise.resolve($e(Eb,{overridePath:t}))}isPresent(t){return Me(Eb,{overridePath:t})}buildInvocation(t,n){let r={...process.env};delete r.MOONSHOT_API_KEY,delete r.MOONSHOT_BASE_URL,r[_e]="1";let o=Ie(),s=n.systemPrompt?`${n.systemPrompt}

${n.prompt}`:n.prompt,i=[...t.launchArgs??[],...n.model?["--model",n.model]:[],"--output-format","stream-json"];if(s.length<=XP)return{file:t.file,args:[...i,"--prompt",s],stdin:"",env:r,cwd:o};let a=(0,Rn.join)(o,QP);(0,Sb.writeFileSync)(a,`${ZP}
${Ya(s,zP)}`,"utf-8");let l=[...i,"--agent-file",a,"--prompt",eO];return{file:t.file,args:l,stdin:"",env:r,cwd:o}}parseResult(t){let n="";for(let r of t.split(`
`)){let o=r.trim();if(!o)continue;let s;try{s=JSON.parse(o)}catch{continue}s.role==="assistant"&&typeof s.content=="string"&&s.content&&(n=s.content)}if(!n)throw new J(`Kimi produced no assistant output (first 200 chars): ${t.slice(0,200)}`);return{text:n,inputTokens:0,outputTokens:0,cachedTokens:0,costUsd:0,stopReason:null}}};var vn=require("node:path");function nO(e,t){let n=vn.win32.dirname(e),r=vn.win32.join(n,"node_modules","opencode-ai","bin","opencode.exe");return t.exists(r)?[{file:r}]:[]}var bb={binName:"opencode",knownPaths:(e,t)=>t==="win32"?[vn.win32.join(e,".opencode","bin","opencode.exe"),vn.win32.join(e,".local","bin","opencode.exe")]:[vn.posix.join(e,".local/bin/opencode")],probeArgs:["--version"],expandShim:nO},Tb=[{id:"--pure",args:["--pure"]}],pa=class{constructor(){this.id="opencode";this.optionalFlags=Tb;this.unnamedFlagFailures=!0}discoverExecutable(t){return Promise.resolve($e(bb,{overridePath:t}))}isPresent(t){return Me(bb,{overridePath:t})}buildInvocation(t,n){let r={...process.env};r[_e]="1",r.OPENCODE_DISABLE_CLAUDE_CODE="1";let o=Ie(),s=n.systemPrompt?`${n.systemPrompt}

${n.prompt}`:n.prompt,i=[...t.launchArgs??[],"run",...Sr(Tb,n.disabledFlagIds),...n.model?["--model",n.model]:[],s];return{file:t.file,args:i,stdin:"",env:r,cwd:o}}parseResult(t){let n=t.trim();if(!n)throw new J("OpenCode produced no output.");return{text:n,inputTokens:0,outputTokens:0,cachedTokens:0,costUsd:0,stopReason:null}}};kn(new ia);kn(new ca);kn(new aa);kn(new pa);kn(new ua);kn(new da);w();ke();var d2=f("LocalAgentRunner"),u2=15*6e4;zs();var iu=`  - Subject and tense: third person, past tense, with a concrete subject. Use "The developer added...", "This commit (or batch of commits) introduced...", "The login page now ...", or "Users can now ...". FORBIDDEN subjects: "the tool", "the LLM", "the system", "the model", "the AI" -- never anthropomorphize the generator. Never "I" or "we".
  - Describe WHAT changed and what users can now do differently. Do NOT explain WHY technical choices were made -- that belongs in the decisions field. If a sentence connects clauses with any of the words below, it is almost certainly explaining WHY/HOW or contrasting an alternative -- rewrite to state only the outcome, even if the sentence becomes shorter:
      * Causal: "so", "because", "since" (when meaning "because"), "which means", "which forced", "in order to"
      * Contrastive: "rather than", "instead of", "as opposed to", "unlike before", "unlike previously"
    Note: words like "without" and "until" are NOT forbidden. They are fine when they describe a neutral spatial / contextual fact ("without leaving the page", "until the result satisfies the user"). They become a problem only when they implicitly criticise an old path ("...there was no way to fix it without re-running the entire flow from scratch") -- which is already covered by the broader rule "do not describe before-vs-after in the recap".
  - No code identifiers: no file paths, no function/class/variable names, no CLI flags, no inline code. Also forbidden: any internal field name or section label from this prompt or the data model (e.g. "decisions field", "topic count", "importance label", "recap block", "word ceiling", "trailing mention"). Also forbidden: references to how the generator works internally ("before labeling", "after parsing", "the tool decides", "marked as major"). The test: a colleague who uses the product but has never seen this codebase or this prompt should understand every sentence.
  - User-facing names ARE allowed and encouraged: product names, page names ("the login page"), feature names ("article reordering"), and widely-recognized UI element names ("the sidebar", "the Settings panel").
  - Meta-commits (changes to internal rules, prompts, configuration, or generation behavior the user does not directly interact with): describe the user-VISIBLE consequence -- what the user will see in future output or product behavior -- NOT the internal rule that changed. Translate mechanism statements like "the recap is now generated after the topic list" into user-facing outcomes like "future commit summaries will read more clearly: each recap covers fewer topics in greater depth". If you cannot identify a visible consequence for the user, this change may not warrant a recap at all.
  - Paragraph balance: when the recap has multiple paragraphs, each paragraph MUST contain at least 2 sentences. Single-sentence paragraphs alongside longer ones produce a fragmented finish -- expand the short one with concrete detail, or merge it into an adjacent paragraph. (A whole-recap-of-one-sentence is still fine for trivial single-change commits.)
  - Self-check (mandatory): before finalizing your output, mentally scan each sentence of your draft recap for the forbidden connectives listed above. For every match, rewrite that sentence to state only the visible outcome and drop the comparison/causation clause entirely. The lost information either belongs in the decisions field or should not be in the recap at all. If you have not done this scan, your output is not ready.`,au=`  Recap anti-patterns (do NOT write like this):
  - BAD: "The way the tool selects topics was overhauled, so it can look back at what was already marked as major rather than guessing ahead."
    Why bad: subject "the tool" anthropomorphizes the generator; "so" + "rather than" are causal connectives explaining WHY/HOW; "marked as major" is implementation-level vocabulary.
  - BAD: "The recap block was moved after the topics, which means the LLM no longer needs to anticipate the importance label."
    Why bad: "the LLM" forbidden subject; "the recap block" / "importance label" are internal field names; "which means" explains mechanism.
  - GOOD: "Future commit summaries will be easier to read: each recap now focuses on the two or three most impactful changes and explains them in real depth. Single-line summaries of every topic are gone. Routine cleanup work no longer appears in the recap at all."
    Why good: subject is the user-visible artefact ("future commit summaries"); describes WHAT the user will see; no internal vocabulary; no forbidden causal/contrastive connectives.`,_b=`**Output format requirements (READ FIRST -- the rest of this prompt depends on these being followed):**

Your response MUST be a delimited plain-text document with the following shape:

\`\`\`
===SUMMARY===
[optional ---TICKETID--- block]
[zero or more ===TOPIC=== blocks]
[optional ---RECAP--- block, AFTER all topics]
\`\`\``;function kb(e,t){return`===TOPIC===
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
major`}function lu(e){let t=e.majorQualifier?" major":"",n=e.preserveNote?" -- the topics list preserves them":"";return`  - Pick the ${e.topicRange} highest-impact${t} topics to cover; skip the rest${n}. Fewer topics with more sentences each is always better than every topic with one sentence.
  - For each chosen topic, write 2-4 sentences. Target ${e.wordTarget} words total. No hard upper limit -- let the substance drive length.`}var rO=`You are Jolli Memory, an AI development process documentation tool. Your job is to analyze a development session (human-AI conversation + code changes) and produce a structured summary.

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

${_b}

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

${kb("What was implemented or fixed -- this is a detail field, so technical precision is welcome. Name files, functions, and systems changed. ALWAYS use a bulleted list (- item) when there are 2+ distinct points. Use 2-4 sentences per point -- enough to specify what changed, not pad. A single sentence is fine for trivial single-point changes. Maximum 3 points. If the commit has more than 3 substantive changes, pick the 3 with highest impact (architectural changes, user-visible behavior changes, changes to load-bearing systems) -- do NOT merge unrelated changes into one point just to fit more in. Lower-impact changes you don't pick simply don't appear; that's the intended trade-off.","Why THIS approach was chosen over alternatives. ALWAYS use a bulleted list (- **Bold label**: explanation) when there are 2+ decisions -- each bullet is one decision with its rationale. When there is exactly one decision, write it as plain prose -- no bullet, no bold label. One decision is fine; one bullet is a formatting error. Prioritize insights from the conversation: alternatives considered, constraints, trade-offs. Explain in plain language using impact dimensions (speed, safety, complexity, UX, maintainability) -- no code identifiers. Write so a teammate unfamiliar with this codebase area can follow. Use 2-4 sentences per bullet -- enough to explain the trade-off, not pad. Maximum 3 bullets. If the commit has more than 3 substantive decisions, pick the 3 with highest impact (architectural choices, user-visible behavior changes, decisions that constrain future work) -- do NOT merge unrelated decisions into one bullet just to fit more in. Lower-impact decisions you don't pick simply don't appear; that's the intended trade-off.")}

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
${lu({topicRange:"2-3",majorQualifier:!0,preserveNote:!0,wordTarget:"150-300"})}
${iu}
  - The recap describes ONLY \`importance: major\` topics. \`importance: minor\` topics (routine formatting, config tweaks, version bumps, doc-only changes) MUST NOT be mentioned in the recap, not even briefly -- they are preserved as standalone topics for audit; the recap is the major-work narrative only.
  - Lead with what changed most visibly or impactfully; weave related points into flowing paragraphs. Do NOT write one sentence per topic -- that produces a fragmented list, not a narrative.
  - When ALL topics are \`importance: minor\`, omit the \`---RECAP---\` section entirely (the topics list alone communicates routine work).
  - Because the recap is emitted AFTER all topics, you can verify your major/minor selection by literal lookback: scan your own preceding output for each topic's \`---IMPORTANCE---\` line and include only the \`major\` ones.
  - Flowing prose only. NO bullet lists, NO headings, NO markdown inside the recap.
  - Do NOT restate the commit message verbatim. Add information a reader cannot get from the commit message alone.
  - If the commit is a single tiny change (e.g. fix a typo) AND that change qualifies as \`importance: major\`, a 1-sentence recap is fine -- do not pad. If the only topic is \`importance: minor\`, omit the recap.

${au}

## Begin response now

Output ONLY the delimited text starting with the \`===SUMMARY===\` sentinel. Do NOT preface it with markdown headers, markdown tables, code fences, or prose. If you have nothing substantive to emit (per rule 16), output \`===SUMMARY===\` alone on its own line and stop.`;var m2=`You are Jolli Memory, an AI development process documentation tool. Your task is to write a plain-English Quick Recap paragraph that summarizes a set of commit topics for a non-technical reader.

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

${lu({topicRange:"2-3",majorQualifier:!1,preserveNote:!1,wordTarget:"150-300"})}
${iu}
  - Lead with what changed most visibly or impactfully; weave related points into flowing paragraphs. Do NOT write one sentence per topic -- that produces a fragmented list, not a narrative. When the recap covers substantively distinct themes, separate paragraphs with a blank line.
  - Flowing prose only. NO bullet lists, NO headings, NO markdown inside the recap.
  - Do NOT restate the commit message verbatim. Add information a reader cannot get from the commit message alone.
  - NEVER use the literal string \`---RECAP---\` inside your content. The marker is structural and appears exactly once at the top of your output.

${au}

## Begin response now

Output ONLY the \`---RECAP---\` marker followed by the recap text. No prose before or after.`;var oO=`You are Jolli Memory, an AI development process documentation tool. Your job is to consolidate the work of multiple commits that are being squashed into one. You produce TWO outputs in a single call:
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

${_b}

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

${kb("What was implemented or fixed. This is a detail field, so technical precision is welcome. Name files, functions, and systems changed. ALWAYS use a bulleted list (- item) when there are 2+ distinct points. Use 2-4 sentences per point -- enough to specify what changed, not pad. A single sentence is fine for trivial single-point changes. Cap and selection are governed by rule 6's bullet-count guidance (squash-consolidate raises the per-topic cap to 5 vs the summarize prompt's 3, since consolidation aggregates work from multiple commits).","Why THIS approach was chosen over alternatives. ALWAYS use a bulleted list (- **Bold label**: explanation) when there are 2+ decisions -- each bullet is one decision with its rationale. Prioritize insights carried over from the source topics: alternatives considered, constraints, trade-offs. Explain in plain language using impact dimensions (speed, safety, complexity, UX, maintainability) -- no code identifiers. Use 2-4 sentences per bullet -- enough to explain the trade-off, not pad. Cap and selection are governed by rule 6's bullet-count guidance (max 5 per topic; pick the highest-impact decisions when consolidating yields more).")}

===TOPIC===
[Repeat the full ===TOPIC=== block above for each independent or merged topic the consolidation produces. Squashes spanning diverse work commonly emit 5-15 topics -- see rule 11 for sizing. The example shows ONE block for brevity; do not let that anchor your output to a single topic.]

---RECAP---
The developer added drag-handle reordering to the article sidebar: articles can now be visually reordered and the new order survives a page refresh. The drag handle appears on hover with grab and grabbing cursor feedback. Ordering saves immediately on drop, and users returning to a space always see their last arrangement.

A new confirmation step was added before destructive actions in the settings panel. Clicking "Delete Space" or "Archive" now presents a confirmation dialog. Accidental data loss is much less likely, and both actions share the same pattern across the panel.

## Rules

1. RECAP: Output a ---RECAP--- section AFTER the final ===TOPIC=== block when at least one consolidated topic carries \`importance: major\`. Omit the section entirely otherwise -- do NOT invent content, and do NOT write a recap when every consolidated topic is \`importance: minor\`. Content rules:
${lu({topicRange:"3-5",majorQualifier:!0,preserveNote:!0,wordTarget:"200-400"})}
${iu}
  - The consolidated recap describes ONLY \`importance: major\` topics. \`importance: minor\` topics (routine formatting, config tweaks, version bumps, doc-only changes) MUST NOT be mentioned in the recap, not even briefly -- they survive in the topics list; the recap is reserved for major-work narrative.
  - Lead with what changed most visibly or impactfully; weave related points into flowing paragraphs. Do NOT write one sentence per topic -- that produces a fragmented list, not a narrative.
  - When ALL post-merge topics are \`importance: minor\`, omit the \`---RECAP---\` section entirely (the topics list alone communicates routine work).
  - Because the recap is emitted AFTER all topics, you can verify your major/minor selection by literal lookback: scan your own preceding output for each topic's \`---IMPORTANCE---\` line and include only the \`major\` ones. Do NOT copy verbatim from any single source recap; the consolidated recap MUST be a fresh synthesis driven by the \`major\` topics you just emitted, not by which input recap looked most comprehensive.
  - Deduplicate iterations: describe the FINAL state only, not the iteration history. If an earlier recap says a button was added and a later recap says it was renamed with a confirmation dialog, the consolidated recap describes the button in its final form.
  - When source iteration represents a substantive technical evolution (algorithm change, library swap, scope pivot), do NOT describe the path here -- that belongs in DECISIONS per rule 6's evolution sub-rule. RECAP is for final-state user-facing prose; the X-over-Y trade-off path lives in the structured decisions field.
  - Describe net effects (subject to rule 4's evidence requirement).
  - Flowing prose only. NO bullet lists, NO headings, NO markdown.
  - Do NOT restate the squash commit message verbatim. Add information a reader cannot get from the commit message alone.

${au}

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

Output ONLY the delimited text starting with the \`===SUMMARY===\` sentinel. Do NOT preface it with markdown headers, markdown tables, code fences, or prose. If every source topic is trivial and there is nothing substantive to emit (per rule 15), output \`===SUMMARY===\` alone on its own line and stop.`,Rb="IMPORTANT -- YOUR PREVIOUS RESPONSE FAILED FORMAT VALIDATION\n\nYour previous response did not start with the required `===SUMMARY===` sentinel followed by the `===TOPIC===` / `---FIELDNAME---` delimited plain-text format. It used markdown headers (e.g. `##`, `###`), tables, or prose instead. The parser could not extract any topics from it.\n\nThis is your previous (rejected) response, between the markers below. The markers themselves are bookkeeping for this retry message and are NOT part of the format you should emit:\n\nPREVIOUS_RESPONSE_BEGIN\n{{previousResponse}}\nPREVIOUS_RESPONSE_END\n\nNow produce the SAME summary AGAIN, this time using the required output format strictly:\n  - The first non-blank line of your response MUST be `===SUMMARY===`.\n  - Do NOT use markdown headers (`#`, `##`, `###`, `####`), markdown tables, code fences (```), or prose introductions.\n  - Block order is fixed: `---TICKETID---` (optional) -> `===TOPIC===` blocks -> `---RECAP---` (optional, AFTER all topics). Recap is the final block, never before topics.\n  - The recap, when emitted, MUST cover only `importance: major` topics; minor topics are omitted from the recap entirely.\n  - If your previous response contained useful content, carry it forward into the correct format -- do NOT discard the work, just re-format it under `===SUMMARY===`.\n  - The transcript or source-commit content shown below may itself be styled in markdown; that is INPUT DATA, not your output template.\n\nThe original task instructions follow. Re-read them and produce your response in the correct delimited format.\n\n---\n\n",f2=Rb+rO,g2=Rb+oO;w();wc();var S2=f("Summarizer");ts();var z2=f("LlmClient");var Q2=900*1e3;function vb(e){return e.aiProvider==="local-agent"?"local-agent":e.aiProvider==="jolli"?e.jolliApiKey?"jolli-proxy":null:e.aiProvider==="anthropic"?e.apiKey?"anthropic-config":process.env.ANTHROPIC_API_KEY?"anthropic-env":null:e.apiKey?"anthropic-config":process.env.ANTHROPIC_API_KEY?"anthropic-env":e.jolliApiKey?"jolli-proxy":null}et();function iO(e){switch(vb(e)){case"local-agent":return"local-agent";case"jolli-proxy":return"jolli";case"anthropic-config":case"anthropic-env":return"anthropic";default:return"none"}}async function aO(e){let[t,n]=await Promise.all([Promise.resolve().then(()=>($d(),cS)),Promise.resolve().then(()=>(ot(),ny))]),[r,o]=await Promise.all([t.isGitPipelineFullyInstalled(e),n.getSummaryCount(e)]);return{enabled:r,summaryCount:o}}async function lO(e){let t=iO(e.config),n=t!=="none";if(!await $n(e.cwd))return{inGitRepo:!1,repoEnabled:!1,captureConfigured:n,captureMethod:t,memoriesGenerated:!1,memoriesBucket:"0"};let o=e.status??await aO(e.cwd),s=o.summaryCount??0;return{inGitRepo:!0,repoEnabled:!!o.enabled,captureConfigured:n,captureMethod:t,memoriesGenerated:s>0,memoriesBucket:yg(s)}}var cO="onboarding-progress.json",dO=1440*60*1e3;function uO(e){return[e.inGitRepo,e.repoEnabled,e.captureMethod,e.memoriesGenerated,e.memoriesBucket].join("|")}async function pO(e){try{let t=JSON.parse(await(0,fa.readFile)(e,"utf-8"));if(typeof t?.sig=="string"&&typeof t?.tsIso=="string")return t}catch{}}var ma=new Map;async function xb(e){let t,n;try{if(!hg()?.enabled||V()||Ka(e.cwd))return;t=(0,Ab.join)(G(e.cwd),cO);let r=t;n=(ma.get(r)??Promise.resolve()).then(()=>mO(e,r)),ma.set(r,n),await n}catch{}finally{t&&n&&ma.get(t)===n&&ma.delete(t)}}async function mO(e,t){try{let n=await lO(e),r=uO(n),o=await pO(t),s=Date.now(),i=!o||o.sig!==r,a=o?s-Date.parse(o.tsIso):Number.POSITIVE_INFINITY,l=!Number.isFinite(a)||a>=dO;if(!i&&!l)return;Zr("onboarding_progressed",{in_git_repo:n.inGitRepo,repo_enabled:n.repoEnabled,capture_configured:n.captureConfigured,capture_method:n.captureMethod,memories_generated:n.memoriesGenerated,memories_bucket:n.memoriesBucket});let c=G(e.cwd);await(0,fa.mkdir)(c,{recursive:!0}),await v(t,JSON.stringify({sig:r,tsIso:new Date(s).toISOString()}))}catch{}}ue();Wn();ue();var fO="https://auth.jollidev.com";function cu(){let e=(process.env.JOLLI_URL?.trim()||fO).replace(/\/+$/,"");return fs(e),e}Wn();ue();er();Wn();var gO="/api/telemetry/events",hO=1e4,yO=100;async function Cb(e){let t=e.fetchImpl??fetch,n=e.timeoutMs??hO,r=Math.max(1,e.maxBatch??yO),o=e.origin,s;if(e.jolliApiKey){let g=$t(e.jolliApiKey);g&&(o=g.u,s=e.jolliApiKey)}let i=await Yl(e.cwd);if(i.length===0)return{sent:0,remaining:0};if(!o)return{sent:0,remaining:i.length};try{fs(o)}catch{return{sent:0,remaining:i.length}}let a;try{a=new URL(gO,o).toString()}catch{return{sent:0,remaining:i.length}}let l=new Map;for(let g of i){let h=l.get(g.installId);h?h.push(g):l.set(g.installId,[g])}let c=e.deadlineMs===void 0?void 0:performance.now()+e.deadlineMs,d=!1,u=[];for(let g of l.values()){if(d)break;for(let h=0;h<g.length;h+=r){let E=g.slice(h,h+r),S=n;if(c!==void 0){let k=c-performance.now();if(k<=0){d=!0;break}S=Math.min(n,k)}if(!await EO(a,E,s,t,S))break;u.push(...E)}}if(u.length===0)return{sent:0,remaining:i.length};let p=await Yl(e.cwd),m=wO(p,u);return await dg(e.cwd,m),{sent:u.length,remaining:m.length}}function wO(e,t){let n=new Map;for(let o of t){let s=JSON.stringify(o);n.set(s,(n.get(s)??0)+1)}let r=[];for(let o of e){let s=JSON.stringify(o),i=n.get(s)??0;i>0?n.set(s,i-1):r.push(o)}return r}async function EO(e,t,n,r,o){let s={"Content-Type":"application/json","x-jolli-client":Ht};n&&(s.Authorization=`Bearer ${n}`);let i=new AbortController,a=setTimeout(()=>i.abort(),o);try{return(await r(e,{method:"POST",headers:s,body:JSON.stringify({events:t}),signal:i.signal})).ok}catch{return!1}finally{clearTimeout(a)}}function Ib(e,t){if(e.jolliApiKey){let n=$t(e.jolliApiKey);if(n)return n.u}if(e.jolliUrl)return e.jolliUrl;try{return t()}catch{return}}async function Nb(e){let t=e.deps?.loadConfig??de,n=e.deps?.getOrCreateInstallId??bm,r=e.deps?.getJolliUrl??cu;try{let o=await t(),{installId:s,created:i}=await n(),a=Ib(o,r);gg({cwd:e.cwd,installId:s,sessionId:e.sessionId,agent:e.agent??(e.inferAgentFromEnv?ig(e.env):void 0),origin:a,config:o,platformDisabled:e.platformDisabled,env:e.env}),i&&Zr("app_installed")}catch{}}var du=2e3;async function Pb(e,t){let n=t?.loadConfig??de,r=t?.getJolliUrl??cu;try{let o=await n();if(!pg({config:o,env:t?.env,platformDisabled:t?.platformDisabled})){await ug(e);return}let s=Ib(o,r);await Cb({cwd:e,origin:s,jolliApiKey:o.jolliApiKey,fetchImpl:t?.fetchImpl,timeoutMs:t?.timeoutMs,deadlineMs:t?.deadlineMs})}catch{}}function ga(e,t,n){return{done:(async()=>{try{let o=await de(),s=async()=>o;await Nb({cwd:e,sessionId:t,agent:n,inferAgentFromEnv:!0,deps:{loadConfig:s}}),await xb({cwd:e,config:o}),await Pb(e,{loadConfig:s,timeoutMs:du,deadlineMs:du})}catch{}})()}}var me=require("node:fs"),Ye=require("node:path"),Yb=require("node:url");er();xr();Se();function Ob(e){return e.aiProvider==="local-agent"?!0:e.aiProvider==="jolli"?!!e.jolliApiKey:e.aiProvider==="anthropic"?!!(e.apiKey||process.env.ANTHROPIC_API_KEY):!!(e.apiKey||process.env.ANTHROPIC_API_KEY||e.jolliApiKey)}et();ue();pi();gc();lo();ot();Jt();w();ke();zs();function SO(e){return[`1) Re-authenticate ${ao(e)}:  ${Nh(e)}`,"2) Or switch the provider:   jolli configure --set aiProvider=anthropic --set apiKey=sk-ant-\u2026","                             (or --set aiProvider=jolli to use Jolli)"]}function bO(e,t){let n=Ph(e);return n===null?[]:[`${t}${n}`]}function Db(e){return[`[Jolli Memory] Memory generation failed for a recent commit: ${ao(e)} authentication expired or is unavailable.`,...bO(e,""),"\u2192 Fix with either:",...SO(e).map(t=>`    ${t}`),"This message clears automatically once memory generation succeeds again."].join(`
`)}var Ve=f("SessionStartHook"),jO=new Set(["main","master","develop","development","staging","production"]),wa=500,HO=250;function UO(e=wa+HO){let t=setTimeout(()=>process.exit(0),e);return t.unref(),t}var Xb="login-reminder-dismissed";function BO(e){let t=Hl(e,"init");return t===void 0?null:["[Jolli Memory] Memory generation is not configured for this repository.",`\u2192 ${`Run ${t} to finish setup.`}`,`(To stop this reminder, create an empty file at .jolli/jollimemory/${Xb}.)`].join(`
`)}function WO(e,t,n){return t||n?null:BO(e)}async function zb(e,t){let n=Ms(e);if(n===void 0||t.aiProvider!==void 0)return!1;try{let r=await Ss(o=>o.aiProvider===void 0?{update:{aiProvider:"local-agent",...o.localAgentTool===void 0?{localAgentTool:n}:{}},result:o.localAgentTool??n}:{update:null,result:void 0});return r===void 0?(Ve.info("Skipped seeding the %s default \u2014 another writer set aiProvider first",e),!1):(Ve.info("Seeded default aiProvider=local-agent tool=%s for the %s surface",r,e),!0)}catch(r){return Ve.info("Failed to seed default local-agent provider: %s",r.message),!1}}async function JO(e,t=Jl()){let n=await de(),r=Ob(n),o=(0,Ye.join)(e,".jolli","jollimemory",Xb),s=(0,me.existsSync)(o);if(r&&s)try{(0,me.rmSync)(o)}catch{}return WO(t,r,s)}async function Qb(e,t){return(await Iy(t)).readFile(`summaries/${e}.json`)}async function GO(e,t){try{let n=await Qb(e,t);return n?Ah(JSON.parse(n)):!1}catch(n){return Ve.info("Failed to check auth-failure state for %s: %s",e.substring(0,8),n.message),!1}}async function qO(e,t=Jl()){let n=Ms(t);if(n===void 0)return null;let r=tT(e);if(!r)return null;let o=await ho(e);if(!o)return null;let s=o.entries.filter(l=>l.branch===r&&(l.parentCommitHash===null||l.parentCommitHash===void 0));if(s.length===0)return null;let i=[...s].sort((l,c)=>new Date(q(c)).getTime()-new Date(q(l)).getTime())[0];if(!await GO(i.commitHash,e))return null;let a=await de();return Db(a.localAgentTool??n)}async function KO(){if(Pn()){Ve.info("SessionStart hook skipped \u2014 running inside a jollimemory-spawned local agent");return}try{let e=await oa(),{cwd:t}=JSON.parse(e),n=zu(t??process.cwd());if(ns(n),Ve.info("SessionStartHook invoked (cwd=%s)",n),await Mt(n)){Ve.info("SessionStart hook skipped \u2014 repository manually disabled");return}let r=await xu(n,"shared",{includeBriefing:!0,includePluginReminders:!1});r?process.stdout.write(r):Ve.info("No briefing or reminder generated (skipped or timed out)");let{triggerEnsureGlobalDaemon:o}=await Promise.resolve().then(()=>(vu(),Ru));o()}catch(e){Ve.info("SessionStartHook failed: %s",e.message)}}async function xu(e,t,n={}){let r=n.includeBriefing!==!1,o=n.includePluginReminders!==!1,[s,i,a]=await Promise.all([r?Promise.race([VO(e,t),Au(wa)]):Promise.resolve(null),o?Promise.race([qO(e,t),Au(wa)]):Promise.resolve(null),o?Promise.race([JO(e,t),Au(wa)]):Promise.resolve(null)]),l=[i,a,s].filter(c=>!!c);return l.length===0?null:(Ve.info("SessionStart output (%d sections)",l.length),l.join(`

`))}async function VO(e,t){let n=Ea(e),r=tT(e,n);if(!r||jO.has(r))return null;let o=tD(e,r,t,n);if(o)return o;let s=await ho(e);if(!s)return null;let i=s.entries.filter(h=>h.branch===r&&(h.parentCommitHash===null||h.parentCommitHash===void 0));if(i.length===0)return null;let a=[...i].sort((h,E)=>new Date(q(E)).getTime()-new Date(q(h)).getTime()),l=a[0],c=a[a.length-1];if(a.length===1&&rD(q(l)))return null;let d=await YO(l.commitHash,e),u=XO(e,r),p=zO(a),m=QO(r,a,l,c,d,u,p,t),g=eT(e,n);return nD(e,r,g??l.commitHash,m,t),m}async function YO(e,t){try{let n=await Qb(e,t);if(!n)return{lastTopicTitle:null,keyDecisions:[]};let r=JSON.parse(n),o=nr(r),s=o.length>0?o[o.length-1].title:null,i=[];for(let a of o)a.decisions&&a.decisions.trim().length>0&&i.push(a.decisions);return{lastTopicTitle:s,keyDecisions:i}}catch(n){return Ve.info("Failed to load last summary: %s",n.message),{lastTopicTitle:null,keyDecisions:[]}}}function XO(e,t){try{let n=(0,Ye.join)(e,".jolli","jollimemory","plans.json");if(!(0,me.existsSync)(n))return[];let r=JSON.parse((0,me.readFileSync)(n,"utf-8")),o=Tm(r).registry,s=[];for(let i of Object.values(o.plans))!i.commitHash&&i.title&&s.push(i.title);return s}catch{return[]}}function zO(e){let t=0,n=0,r=0,o=!1;for(let s of e)s.diffStats&&(t+=s.diffStats.filesChanged,n+=s.diffStats.insertions,r+=s.diffStats.deletions,o=!0);return o?{filesChanged:t,insertions:n,deletions:r}:null}function QO(e,t,n,r,o,s,i,a){let l=t.length,c=Vb(q(r)),d=Vb(q(n)),u=oD(q(n),new Date().toISOString()),p=[];p.push(`[Jolli Memory \u2014 ${e}]`);let m=`${l} commits (${c} ~ ${d})`;i&&(m+=` | ${i.filesChanged} files, +${i.insertions} -${i.deletions}`),p.push(m);let g=o.lastTopicTitle??n.commitMessage;if(p.push(`Last: ${g} (${d})`),o.keyDecisions.length>0){let E=eD(o.keyDecisions);p.push(`Decisions: ${E}`)}s.length>0&&p.push(`Plans: ${s.join("; ")}`);let h=ZO(u,a);return h&&p.push(h),p.join(`
`)}function ZO(e,t){if(e<=0)return null;let n=Hl(t,"recall")??"`jolli recall`";return e>3?`Warning: ${e} days since last commit. Run ${n} for full context.`:`Tip: run ${n} for full context`}function eD(e){let n=[],r=0;for(let o of e){let s=o.replace(/[.;]\s*$/,"").trim();if(s.length>200&&(s=`${s.slice(0,199)}\u2026`),r+s.length>200&&n.length>0)break;n.push(s),r+=s.length+2}return n.join("; ")}function Zb(e){return(0,Ye.join)(e,".jolli","jollimemory","briefing-cache.json")}function tD(e,t,n,r=Ea(e)){let o=Zb(e);if(!(0,me.existsSync)(o))return null;try{let s=JSON.parse((0,me.readFileSync)(o,"utf-8"));if(s.branch!==t||s.clientKind!==n)return null;let i=eT(e,r);return!i||s.lastCommitHash!==i?null:s.briefingText}catch{return null}}function nD(e,t,n,r,o){let s=Zb(e),i={branch:t,lastCommitHash:n,briefingText:r,clientKind:o,generatedAt:new Date().toISOString()};try{let a=(0,Ye.dirname)(s);(0,me.existsSync)(a)||(0,me.mkdirSync)(a,{recursive:!0});let l=`${s}.${process.pid}.tmp`;(0,me.writeFileSync)(l,JSON.stringify(i,null,"	"),"utf-8"),(0,me.renameSync)(l,s)}catch{}}function Ea(e){return Dt(e)}function eT(e,t=Ea(e)){let n=t?Ku(t):null;if(n)return n;try{return Ee("git",["rev-parse","HEAD"],{encoding:"utf-8",cwd:e}).trim()||null}catch{return null}}function tT(e,t=Ea(e)){let n=t?qu(t):null;if(n)return n;if(t)return null;try{return Ee("git",["branch","--show-current"],{encoding:"utf-8",cwd:e}).trim()||null}catch{return null}}function Au(e){return new Promise(t=>{setTimeout(()=>t(null),e).unref()})}function rD(e){let t=new Date(e),n=new Date;return t.getFullYear()===n.getFullYear()&&t.getMonth()===n.getMonth()&&t.getDate()===n.getDate()}function oD(e,t){let n=new Date(e).getTime(),r=new Date(t).getTime();return Math.floor(Math.abs(r-n)/(1e3*60*60*24))}function Vb(e){return e?e.split("T")[0]:"unknown"}function sD(){let e=process.argv[1];if(process.env.VITEST||!e||(0,Ye.resolve)(e)!==(0,Ye.resolve)((0,Yb.fileURLToPath)(__jmImportMetaUrl)))return!1;let t=(0,Ye.basename)(e).toLowerCase();return t==="sessionstarthook.js"||t==="sessionstarthook.ts"}sD()&&(UO(),KO());var Vo=f("CodexPluginBootstrapHook"),Cu="codex-plugin",nT={timeoutMs:200,pollMs:25};function oT(e){return e?{hookSpecificOutput:{hookEventName:"SessionStart",additionalContext:e}}:null}async function sT(e){if(!await $n(e))return null;let t=await Y(["rev-parse","--show-toplevel"],e);if(t.exitCode!==0||!t.stdout.trim())return null;let n=t.stdout.trim();ns(n);let r=!1;if(!(await $a(n,async()=>{r=await Mt(n),r&&await eb(n,{preserveMenu:!0,repoLockHeld:!0})},nT)).acquired)return Vo.info("Codex plugin bootstrap deferred \u2014 repo hook lifecycle lock is busy"),null;if(r)return null;let s=await ZS(n,{repoHooksOnly:!0,sourceTag:Cu,respectManualDisable:!0,automatic:!0});if(!s.success)return Vo.warn("Codex plugin repo-hook reconciliation failed: %s",s.message),await ga(n,void 0,"codex").done,null;let i,a=null,l=!1;try{l=!(await $a(n,async()=>{if(await Mt(n))return;let d=await de();d.codexEnabled!==!1&&(await zb(Cu,d),i=ga(n,void 0,"codex"),a=await xu(n,Cu,{includeBriefing:!0,includePluginReminders:!0}))},nT)).acquired}finally{i??=ga(n,void 0,"codex"),await i.done}return l&&Vo.info("Codex plugin context deferred \u2014 repo hook lifecycle lock is busy"),oT(a)}async function iT(){if(Pn()){Vo.info("Codex plugin bootstrap skipped \u2014 running inside a jollimemory-spawned local agent");return}try{let e=await oa(),t=e.trim()?JSON.parse(e):{},n=await sT(t.cwd??process.cwd());n&&process.stdout.write(JSON.stringify(n));let{triggerEnsureGlobalDaemon:r}=await Promise.resolve().then(()=>(vu(),Ru));r()}catch(e){Vo.info("Codex plugin bootstrap failed: %s",e.message)}}function iD(){let e=process.argv[1];if(process.env.VITEST||!e||(0,Yo.resolve)(e)!==(0,Yo.resolve)((0,rT.fileURLToPath)(__jmImportMetaUrl)))return!1;let t=(0,Yo.basename)(e).toLowerCase();return t==="codexpluginbootstraphook.js"||t==="codexpluginbootstraphook.ts"}iD()&&iT();0&&(module.exports={buildCodexBootstrapOutput,main,runCodexPluginBootstrap});
