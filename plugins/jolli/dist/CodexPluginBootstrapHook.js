#!/usr/bin/env node
const __jmImportMetaUrl = require("node:url").pathToFileURL(__filename).href;
"use strict";var Jb=Object.create;var Ao=Object.defineProperty;var Bb=Object.getOwnPropertyDescriptor;var Wb=Object.getOwnPropertyNames;var Gb=Object.getPrototypeOf,qb=Object.prototype.hasOwnProperty;var g=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(r){throw n=[r],r}};var _=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}},cr=(e,t)=>{for(var n in t)Ao(e,n,{get:t[n],enumerable:!0})},Pd=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Wb(t))!qb.call(e,o)&&o!==n&&Ao(e,o,{get:()=>t[o],enumerable:!(r=Bb(t,o))||r.enumerable});return e};var bn=(e,t,n)=>(n=e!=null?Jb(Gb(e)):{},Pd(t||!e||!e.__esModule?Ao(n,"default",{value:e,enumerable:!0}):n,e)),Kb=e=>Pd(Ao({},"__esModule",{value:!0}),e);function Ji(){return Vb.getStore()?.traceId}var Nd,LP,Vb,Oo=g(()=>{"use strict";Nd=require("node:async_hooks"),LP="0".repeat(32),Vb=new Nd.AsyncLocalStorage});function v(e){return e instanceof Error?e.message:String(e)}function Gt(e){return e instanceof Error&&e.code==="ENOENT"}function ur(e){jd=e}function q(){return $d}function tS(e,t){let n=Zb[t]??Qb;return Ld[e]>=Ld[n]}function nS(e,t,n,r,o){let s=new Date().toISOString(),i=e.toUpperCase().padEnd(5),a=n,l=0;a=a.replace(/%[sdj]/g,u=>{if(l>=r.length)return u;let d=r[l++];return u==="%d"?String(Number(d)):u==="%j"?JSON.stringify(d):String(d)});let c=o?` [trace=${o}]`:"";return`[${s}] ${i} [${t}]${c} ${a}`}function J(e){let t=e??jd??process.cwd();return(0,Sn.join)(t,Yb,Xb)}function dr(e){return String(e).padStart(2,"0")}async function iS(e,t){let n=new Date,r=`${n.getUTCFullYear()}-${dr(n.getUTCMonth()+1)}-${dr(n.getUTCDate())}_${dr(n.getUTCHours())}-${dr(n.getUTCMinutes())}-${dr(n.getUTCSeconds())}`;try{let o=(0,Sn.join)(e,`debug_${r}.log`);for(let s=1;await aS(o);s++)o=(0,Sn.join)(e,`debug_${r}_${s}.log`);await(0,ve.rename)(t,o)}catch{return}try{let o=(await(0,ve.readdir)(e)).filter(s=>sS.test(s)).sort();for(let s=0;s<o.length-oS;s++)await(0,ve.unlink)((0,Sn.join)(e,o[s])).catch(()=>{})}catch{}}async function aS(e){try{return await(0,ve.stat)(e),!0}catch{return!1}}function lS(e){process.env.VITEST||process.env.JOLLI_DISABLE_LOG_FILE||$d||(Md=Md.then(async()=>{try{let t=J(),n=(0,Sn.join)(t,zb);await(0,ve.stat)(t);try{(await(0,ve.stat)(n)).size>rS&&await iS(t,n)}catch{}await(0,ve.appendFile)(n,`${e}
`,"utf-8")}catch{}}))}function m(e){function t(n,r,o){let s=nS(n,e,r,o,Ji());eS&&(n==="info"||n==="debug")||(n==="warn"?console.warn(s):console.error(s)),tS(n,e)&&lS(s)}return{debug(n,...r){t("debug",n,r)},info(n,...r){t("info",n,r)},warn(n,...r){t("warn",n,r)},error(n,...r){t("error",n,r)}}}var ve,Sn,Yb,Xb,zb,De,jd,$d,Ld,Qb,Zb,eS,Md,rS,oS,sS,y=g(()=>{"use strict";ve=require("node:fs/promises"),Sn=require("node:path");Oo();Yb=".jolli",Xb="jollimemory",zb="debug.log";De="jollimemory/summaries/v3";$d=!1;Ld={debug:0,info:1,warn:2,error:3},Qb="info",Zb={},eS=!0;Md=Promise.resolve(),rS=2*1024*1024,oS=10,sS=/^debug_.*\.log$/});function En(e,t,n){return(0,Fd.promisify)(it.execFile)(e,t,{...pr,...n??{}})}function ye(e,t,n){return(0,it.execFileSync)(e,t,{...pr,...n??{}})}function Hd(e,t,n){return(0,it.spawnSync)(e,t,{...pr,...n??{}})}var it,Fd,pr,at,Se=g(()=>{"use strict";it=require("node:child_process"),Fd=require("node:util"),pr={windowsHide:!0};at=((e,t,n)=>Array.isArray(t)?(0,it.spawn)(e,t,{...pr,...n??{}}):(0,it.spawn)(e,{...pr,...t??{}}))});function uS(e){return dS.some(t=>(e[t]??"")!=="")}function qt(e){try{return(0,Tn.readFileSync)(e,"utf-8")}catch{return null}}function Bi(e){try{return(0,Tn.realpathSync)(e)}catch{return(0,K.resolve)(e)}}function Do(e){try{return(0,Tn.statSync)(e).isDirectory()}catch{return!1}}function Ud(e,t){let n=qt((0,K.join)(e,"HEAD"))?.trim();return!n||!(No.test(n)||pS.test(n))?!1:Do((0,K.join)(t,"objects"))&&Do((0,K.join)(t,"refs"))}function mS(e,t,n){let r=/^gitdir:\s*(.+)$/m.exec(t);if(!r)return null;let o=r[1].trim();if(!o)return null;let s=(0,K.isAbsolute)(o)?o:(0,K.resolve)(e,o);return Do(s)?n?Bi(s):s:null}function Jd(e,t){let n=qt((0,K.join)(e,"commondir"))?.trim();if(!n)return e;let r=(0,K.isAbsolute)(n)?n:(0,K.resolve)(e,n);return t?Bi(r):r}function Ct(e,t={}){let{env:n=process.env,realpath:r=!1}=t;if(uS(n))return null;let o=r?Bi(e):(0,K.resolve)(e);for(;;){let s=(0,K.join)(o,".git");if(Do(s)){let l=Jd(s,r);return Ud(s,l)?{worktreeRoot:o,gitDir:s,commonDir:l}:null}let i=qt(s);if(i!==null){let l=mS(o,i,r);if(l===null)return null;let c=Jd(l,r);return Ud(l,c)?{worktreeRoot:o,gitDir:l,commonDir:c}:null}let a=(0,K.dirname)(o);if(a===o)return null;o=a}}function Bd(e){let t=qt((0,K.join)(e.gitDir,"HEAD"))?.trim();if(!t)return null;let n=/^ref:\s*refs\/heads\/(.+)$/.exec(t);return n&&n[1].trim()||null}function hS(e){return fS.test(e)&&!e.split("/").includes("..")}function gS(e,t){let n=qt((0,K.join)(e,"packed-refs"));if(n===null)return null;for(let r of n.split(`
`)){if(!r||r.startsWith("#")||r.startsWith("^"))continue;let o=r.indexOf(" ");if(!(o<=0)&&r.slice(o+1).trim()===t){let s=r.slice(0,o).trim();return No.test(s)?s:null}}return null}function Wd(e){let t=qt((0,K.join)(e.gitDir,"HEAD"))?.trim();if(!t)return null;if(No.test(t))return t;let n=/^ref:\s*(.+)$/.exec(t);if(!n)return null;let r=n[1].trim();if(!hS(r))return null;for(let o of e.gitDir===e.commonDir?[e.gitDir]:[e.gitDir,e.commonDir]){let s=qt((0,K.join)(o,r))?.trim();if(s&&No.test(s))return s;let i=gS(o,r);if(i)return i}return null}var Tn,K,dS,No,pS,fS,Lo=g(()=>{"use strict";Tn=require("node:fs"),K=require("node:path"),dS=["GIT_DIR","GIT_WORK_TREE","GIT_COMMON_DIR"];No=/^[0-9a-f]{40}$|^[0-9a-f]{64}$/,pS=/^ref:\s*refs\//;fS=/^refs\/[A-Za-z0-9._\-/]+$/});function kn(e){return mr(e,process.platform)}function mr(e,t){let n=Rn(e.replace(/\\/g,"/"));return t==="win32"||t==="darwin"?n.toLowerCase():n}function Rn(e){let t=e.length;for(;t>0&&e[t-1]==="/";)t--;return t===e.length?e:e.slice(0,t)}function Wi(e,t){let n=kn(e),r=kn(t);return n===r||n.startsWith(`${r}/`)}function He(e){return e.replace(/\\/g,"/")}var we=g(()=>{"use strict"});function Vd(e){let t=Gi.get(e);if(t!==void 0)return t;let n=Ct(e,{realpath:!0})?.worktreeRoot;if(n){let o=He(n);return Gi.set(e,o),o}let r=e;try{let o=ye("git",["rev-parse","--show-toplevel"],{cwd:e,encoding:"utf-8",stdio:["ignore","pipe","pipe"]}).trim();o&&(r=o)}catch{}return Gi.set(e,r),r}async function G(e,t){ee.debug("git %s%s",t?`[cwd=${t}] `:"",e.join(" "));try{let{stdout:n,stderr:r}=await En("git",e,{maxBuffer:yS,env:{...process.env,LC_ALL:"C"},...t!==void 0&&{cwd:t}});return{stdout:n.trimEnd(),stderr:r.trim(),exitCode:0}}catch(n){let r=n,o=typeof r.code=="number"?r.code:r.code==="ENOENT"?127:1,s={stdout:(r.stdout??"").trimEnd(),stderr:(r.stderr??r.message??"").trim(),exitCode:o};return ee.debug("git command failed (exit: %d, stderr: %s)",o,s.stderr.substring(0,200)),s}}function bS(e){let t=e.split(`
`).filter(s=>s.trim().length>0).pop()??"",n=t.match(/(\d+)\s+files?\s+changed/),r=t.match(/(\d+)\s+insertions?/),o=t.match(/(\d+)\s+deletions?/);return{filesChanged:n?Number.parseInt(n[1],10):0,insertions:r?Number.parseInt(r[1],10):0,deletions:o?Number.parseInt(o[1],10):0}}async function jo(e,t,n){let r=await G(["diff","--stat",`${e}..${t}`],n);return bS(r.stdout)}async function qi(e,t){return(await G(["rev-parse","--verify",`refs/heads/${e}`],t)).exitCode===0}async function Ki(e,t){if(await qi(e,t))return;ee.info("Creating orphan branch '%s' using plumbing commands",e);let n=JSON.stringify({version:1,entries:[]},null,"	"),r=await kS(n,t);ee.debug("Created blob: %s",r);let o=`100644 blob ${r}	index.json
`,s=await _S(o,t);ee.debug("Created tree: %s",s);let i=await G(["commit-tree",s,"-m","Initialize Jolli Memory summaries"],t);if(i.exitCode!==0)throw new Error(`Failed to create commit: ${i.stderr}`);let a=i.stdout.trim();ee.debug("Created commit: %s",a);let l=await G(["update-ref",`refs/heads/${e}`,a],t);if(l.exitCode!==0)throw new Error(`Failed to update ref: ${l.stderr}`);ee.info("Orphan branch '%s' created successfully",e)}function ES(e){let t=e.toLowerCase();return SS.some(n=>t.includes(n))}async function Vi(e,t,n){ee.debug("Reading file from branch: %s:%s",e,t);let r=await G(["show",`${e}:${t}`],n);return r.exitCode!==0?(ES(r.stderr)?ee.debug("File not found: %s:%s",e,t):ee.warn("Read failed for %s:%s (git exit %d): %s",e,t,r.exitCode,r.stderr||"(no stderr)"),null):r.stdout}async function Yi(e,t,n){let r=new Map;if(t.length===0)return r;let o=["cat-file","--batch"];return ee.debug("git (cat-file --batch stream) %s%s for %d paths",n?`[cwd=${n}] `:"",o.join(" "),t.length),new Promise((s,i)=>{let a=at("git",o,{stdio:["pipe","pipe","pipe"],...n!==void 0&&{cwd:n}}),l="",c=Buffer.alloc(0),u=!0,d=0,p=[],f=!1,h=0,w=!1,T=b=>{w||(w=!0,b?i(b):s(r))};a.stderr.on("data",b=>{l+=b.toString()}),a.stdout.on("data",b=>{for(c=Buffer.concat([c,b]);!w;){if(u){let k=c.indexOf(10);if(k<0)return;let R=c.subarray(0,k).toString("utf8");if(c=c.subarray(k+1),h>=t.length){T(new Error(`git cat-file --batch returned extra response: ${R}`));return}let j=t[h];if(h++,R.endsWith(" missing")){r.set(j,null);continue}let I=R.substring(R.lastIndexOf(" ")+1),F=Number.parseInt(I,10);if(!Number.isFinite(F)||F<0){T(new Error(`Unexpected cat-file --batch header for ${j}: ${R}`));return}d=F,p=[],u=!1,f=!0}if(d>0){if(c.length===0)return;let k=Math.min(d,c.length);if(p.push(c.subarray(0,k)),c=c.subarray(k),d-=k,d>0)return}if(f){if(c.length<1)return;c=c.subarray(1),f=!1;let k=t[h-1];r.set(k,Buffer.concat(p).toString("utf8")),p=[],u=!0}}}),a.on("close",b=>{if(b!==0){T(new Error(`git cat-file --batch failed (exit ${b}): ${l.trim()}`));return}if(h<t.length){T(new Error(`git cat-file --batch returned ${h} of ${t.length} expected responses; stderr=${l.trim()}`));return}T(null)}),a.on("error",b=>{T(b)}),a.stdin.on("error",b=>{T(b)});for(let b of t)a.stdin.write(`${e}:${b}
`);a.stdin.end()})}async function Yd(e,t,n,r){await Ki(e,r);let o=await G(["rev-parse",`refs/heads/${e}`],r);if(o.exitCode!==0)throw new Error(`Failed to get branch tip: ${o.stderr}`);let s=o.stdout.trim();await RS(e,s,n,t,r);let i=t.filter(l=>!l.delete).length,a=t.filter(l=>l.delete).length;ee.info("Updated branch '%s': %d written, %d deleted (via fast-import)",e,i,a)}async function fr(e,t){let n=await G(["cat-file","-p",e],t);if(n.exitCode!==0)return null;let r=n.stdout.match(/^tree ([a-f0-9]+)/m);return r?r[1]:null}async function Xi(e,t,n){ee.debug("Listing files in branch %s under prefix '%s'",e,t);let r=await G(["ls-tree","-z","-r","--name-only",e,t],n);if(r.exitCode!==0)return ee.debug("Failed to list files (branch may not exist): %s",r.stderr),[];let o=r.stdout.split(wS).filter(s=>s.length>0);return ee.debug("Found %d files",o.length),o}async function TS(e){let t=await G(["rev-parse","--git-common-dir"],e);if(t.exitCode!==0)throw new Error(`Failed to get git common dir: ${t.stderr}`);let n=t.stdout.trim();return(0,Ue.resolve)(e,n)}async function zi(e){let t=await TS(e);return(0,Ue.dirname)(t)}async function vn(e){return Ct(e)!==null?!0:(await G(["rev-parse","--git-dir"],e)).exitCode===0}async function _n(e){let t=await G(["worktree","list","--porcelain"],e);if(t.exitCode!==0)throw new Error(`Failed to list worktrees: ${t.stderr}`);return t.stdout.split(`
`).filter(r=>r.startsWith("worktree ")).map(r=>r.slice(9).trim())}async function xn(e){let t=(0,Ue.join)(e,".git");if((await(0,Mo.stat)(t)).isDirectory())return(0,Ue.join)(t,"hooks");let r=await(0,Mo.readFile)(t,"utf-8"),o=r.trim().match(/^gitdir:\s*(.+)$/);if(!o)throw new Error(`Unexpected .git file content: ${r.trim()}`);let s=o[1].trim(),i=(0,Ue.resolve)(e,s),a=i.replace(/\\/g,"/").lastIndexOf("/worktrees/");if(a>=0){let l=i.substring(0,a);return(0,Ue.join)(l,"hooks")}return(0,Ue.join)(i,"hooks")}function Xd(e,t,n){return ee.debug("git (stdin) %s%s",n?`[cwd=${n}] `:"",e.join(" ")),new Promise((r,o)=>{let s=at("git",e,{stdio:["pipe","pipe","pipe"],...n!==void 0&&{cwd:n}}),i="",a="";s.stdout.on("data",l=>{i+=l.toString()}),s.stderr.on("data",l=>{a+=l.toString()}),s.on("close",l=>{l!==0?o(new Error(`git ${e[0]} failed (exit ${l}): ${a.trim()}`)):r(i.trim())}),s.on("error",l=>{o(l)}),s.stdin.write(t),s.stdin.end()})}async function kS(e,t){return Xd(["hash-object","-w","--stdin"],e,t)}async function Gd(e,t){let n=await G(["var",e],t);if(n.exitCode!==0)throw new Error(`Failed to read ${e}: ${n.stderr}`);return n.stdout.trim()}async function RS(e,t,n,r,o){let s=await Gd("GIT_AUTHOR_IDENT",o),i=await Gd("GIT_COMMITTER_IDENT",o),a=["fast-import","--quiet","--done"];ee.debug("git (fast-import stream) %s%s",o?`[cwd=${o}] `:"",a.join(" "));let l=r.filter(u=>!u.delete),c=r.filter(u=>u.delete);return new Promise((u,d)=>{let p=at("git",a,{stdio:["pipe","pipe","pipe"],...o!==void 0&&{cwd:o}}),f="";p.stderr.on("data",b=>{f+=b.toString()}),p.on("close",b=>{b!==0?d(new Error(`git fast-import failed (exit ${b}): ${f.trim()}`)):u()}),p.on("error",b=>{d(b)});let h=p.stdin;h.on("error",b=>{d(b)});let w=[];l.forEach((b,k)=>{let R=k+1,j=Buffer.from(b.content,"utf8");w.push(`blob
mark :${R}
data ${j.length}
`,j,`
`)});let T=Buffer.from(n,"utf8");w.push(`commit refs/heads/${e}
`,`author ${s}
`,`committer ${i}
`,`data ${T.length}
`,T,`
`,`from ${t}
`),l.forEach((b,k)=>{w.push(`M 100644 :${k+1} ${qd(b.path)}
`)});for(let b of c)w.push(`D ${qd(b.path)}
`);w.push(`done
`),vS(h,w).then(()=>{h.end()},b=>{d(b)})})}async function vS(e,t){for(let n of t)e.write(n)||await(0,Kd.once)(e,"drain")}function qd(e){return/["\\\n\r]/.test(e)?`"${e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r")}"`:e}async function _S(e,t){return Xd(["mktree"],e,t)}var Kd,Mo,Ue,yS,wS,ee,Gi,SS,ue=g(()=>{"use strict";Kd=require("node:events"),Mo=require("node:fs/promises"),Ue=require("node:path");y();Se();Lo();we();yS=10*1024*1024,wS="\0",ee=m("GitOps"),Gi=new Map;SS=["does not exist in","does not exist (neither on disk nor in the index)","invalid object name","exists on disk, but not in","unknown revision or path not in the working tree"]});function xS(e){return new Promise(t=>setTimeout(t,e))}function Qd(e){let t=Number(e);if(!Number.isInteger(t)||t<=0)return!1;if(t===process.pid)return!0;try{return process.kill(t,0),!0}catch(n){return n.code!=="ESRCH"}}async function Qi(e){try{let t=await(0,Je.stat)(e),n=Date.now()-t.mtimeMs,r=await Zd(e),o=r!==null&&!Qd(r);if(!o&&n<zd)return!1;o?hr.warn("Removing orphaned lock %s (PID %s no longer running)",e,r):hr.warn("Removing stale lock file %s (age: %dms)",e,n),await(0,Je.rm)(e,{force:!0})}catch(t){if(t.code!=="ENOENT")return hr.error("Failed to check lock file %s: %s",e,t.message),!1}try{return await(0,Je.writeFile)(e,String(process.pid),{flag:"wx"}),!0}catch{return!1}}async function Zd(e){try{let n=(await(0,Je.readFile)(e,"utf-8")).trim();return n.length>0?n:null}catch{return null}}async function Cn(e,t){let n=await Zd(e);if(n!==null&&n!==String(process.pid)){hr.warn("Skipping release of %s: held by pid %s, not us (pid %s) \u2014 stale-reclaim race",t,n,process.pid);return}try{await(0,Je.rm)(e,{force:!0})}catch(r){hr.error("Failed to release %s: %s",t,r.message)}}async function An(e,t){if(t.timeoutMs<=0)return Qi(e);let n=Date.now()+t.timeoutMs;for(;;){if(await Qi(e))return!0;if(Date.now()>=n)return!1;await xS(t.pollMs)}}var Je,hr,zd,Zi=g(()=>{"use strict";Je=require("node:fs/promises");y();hr=m("LockPrimitives"),zd=300*1e3});function nu(e){return(0,tu.resolve)(e??process.cwd())}function Pn(e){return ea.getStore()?.has(nu(e))===!0}function In(e,t){let n=new Set(ea.getStore()??[]);return n.add(nu(e)),ea.run(n,t)}var eu,tu,ea,$o=g(()=>{"use strict";eu=require("node:async_hooks"),tu=require("node:path"),ea=new eu.AsyncLocalStorage});function CS(e){return En("git",["rev-parse","--git-common-dir"],{cwd:e})}async function du(e){let t=e??process.cwd(),n=iu.get(t);if(n!==void 0)return n;let r;try{let{stdout:o}=await CS(t),s=o.trim(),i=(0,Ee.isAbsolute)(s)?s:(0,Ee.resolve)(t,s);r=(0,Ee.join)(i,"jollimemory")}catch{lu.debug("resolveSharedLockDir: git rev-parse failed for cwd=%s \u2014 falling back to per-worktree dir",t),r=J(t)}return iu.set(t,r),r}async function ta(e){let t=await du(e);return await(0,gr.mkdir)(t,{recursive:!0}),t}async function yr(e,t={}){let n=t.timeoutMs??PS,r=t.pollMs??IS,o=await ta(e);return An((0,Ee.join)(o,cu),{timeoutMs:n,pollMs:r})}async function wr(e){let t=await du(e);await Cn((0,Ee.join)(t,cu),"orphan-write.lock")}async function MS(e,t,n,r){let o=r.timeoutMs??DS,s=r.pollMs??Ho;await(0,gr.mkdir)(e,{recursive:!0});let i=(0,Ee.join)(e,t),a=await An(i,{timeoutMs:o,pollMs:s});a||lu.warn("Could not acquire %s within %d ms \u2014 proceeding best-effort",t,o);try{return await n()}finally{a&&await Cn(i,t)}}async function na(e,t,n={}){return MS(e,AS,t,n)}async function br(e,t={}){let n=t.timeoutMs??NS,r=t.pollMs??Ho,o=await ta(e),s=(0,Ee.join)(o,ou);return await An(s,{timeoutMs:n,pollMs:r})?{release:()=>Cn(s,ou)}:null}async function ra(e,t,n={}){let r=await br(e,n);if(!r)return{acquired:!1};try{return{acquired:!0,value:await t()}}finally{await r.release()}}async function oa(e,t,n={}){let r=n.timeoutMs??OS,o=n.pollMs??Ho,s=await ta(e),i=(0,Ee.join)(s,ru);if(!await An(i,{timeoutMs:r,pollMs:o}))return{acquired:!1};try{return{acquired:!0,value:await t()}}finally{await Cn(i,ru)}}async function sa(e,t={}){let n=t.timeoutMs??LS,r=t.pollMs??Ho,o=t.globalDir??(0,Ee.join)((0,au.homedir)(),".jolli","jollimemory");await(0,gr.mkdir)(o,{recursive:!0});let s=(0,Ee.join)(o,su);if(!await An(s,{timeoutMs:n,pollMs:r}))return{acquired:!1};try{return{acquired:!0,value:await e()}}finally{await Cn(s,su)}}var gr,au,Ee,lu,cu,ru,AS,ou,su,PS,Fo,IS,OS,Ho,DS,NS,LS,iu,Be=g(()=>{"use strict";gr=require("node:fs/promises"),au=require("node:os"),Ee=require("node:path");y();Se();Zi();$o();lu=m("Locks");cu="orphan-write.lock",ru="profile.lock",AS="config.lock",ou="repo-hooks.lock",su="runtime-registry.lock",PS=1e3,Fo=class extends Error{constructor(t,n){super(`${t}: could not acquire orphan-write.lock within ${n}ms`),this.name="OrphanWriteBusyError"}},IS=50,OS=5e3,Ho=25,DS=5e3,NS=5e3,LS=5e3,iu=new Map});async function ia(e,t,n={}){await(0,At.mkdir)((0,uu.dirname)(e),{recursive:!0});let r=`${e}.${process.pid}.tmp`;await(0,At.writeFile)(r,t,n.mode!==void 0?{encoding:"utf-8",mode:n.mode}:"utf-8");try{await(0,At.rename)(r,e)}catch(o){throw await(0,At.unlink)(r).catch(()=>{}),o}}var At,uu,aa=g(()=>{"use strict";At=require("node:fs/promises"),uu=require("node:path")});function fu(e){return{...e,manuallyDisabled:e.userDisabled===!0||e.cutoverFence!==void 0}}async function FS(e){let t=Ct(e)?.commonDir;if(t)return t;let n=await G(["rev-parse","--git-common-dir"],e),r=n.exitCode===0?n.stdout.trim():"";return r?(0,ie.isAbsolute)(r)?r:(0,ie.join)(e,r):null}async function da(e){let t=await FS(e);if(t===null)return{profilePath:(0,ie.join)(J(e),ca),legacyMarkerPath:null};let n=(0,ie.dirname)(t);return{profilePath:(0,ie.join)(J(n),ca),legacyMarkerPath:(0,ie.join)(t,jS,$S)}}async function Jo(e){try{let t=await(0,Sr.readFile)(e,"utf-8"),n=JSON.parse(t);return n&&typeof n=="object"&&!Array.isArray(n)?n:{}}catch{return{}}}async function HS(e){try{return await(0,Sr.stat)(e),!0}catch{return!1}}async function hu(e,t){await ia(e,`${JSON.stringify(t,null,"	")}
`)}async function US(e){let t;try{t=await _n(e)}catch{t=[e]}for(let n of t)if(await HS((0,ie.join)(J(n),mu)))return!0;return!1}async function Pt(e){let{profilePath:t}=await da(e),n=await Jo(t);if(n.userDisabled!==void 0)return n.userDisabled===!0;if(n.manuallyDisabled!==void 0)return pu(e,t,n.manuallyDisabled===!0);let r=await US(e);return pu(e,t,r)}async function pu(e,t,n){let r=await oa(e,async()=>{let o=await Jo(t);return o.userDisabled!==void 0?o.userDisabled===!0:(await hu(t,fu({...o,userDisabled:n})),n)}).catch(()=>{});return r?.acquired&&r.value!==void 0?r.value:n}async function ua(e,t){let{profilePath:n}=await da(e);if(!(await oa(e,async()=>{let o=await Jo(n);await hu(n,fu({...o,userDisabled:t}))})).acquired)throw new Error("Timed out acquiring the repo profile lock")}async function Er(e){let{profilePath:t}=await da(e);return(await Jo(t)).cutoverFence??null}function JS(e){let t=la.get(e);if(t!==void 0)return t;let n=Ct(e)?.commonDir;if(n){let s=(0,ie.dirname)(n);return la.set(e,s),s}let r="";try{let s=ye("git",["rev-parse","--git-common-dir"],{cwd:e,encoding:"utf-8",stdio:["ignore","pipe","pipe"]}).trim();s&&(r=(0,ie.isAbsolute)(s)?s:(0,ie.join)(e,s))}catch{r=""}let o=r?(0,ie.dirname)(r):e;return la.set(e,o),o}function gu(e){let t=JS(e);try{let n=JSON.parse((0,Uo.readFileSync)((0,ie.join)(J(t),ca),"utf-8"));if(n&&typeof n=="object"&&!Array.isArray(n)){let r=n;if(r.userDisabled!==void 0)return r.userDisabled===!0;if(r.manuallyDisabled!==void 0)return r.manuallyDisabled===!0}}catch{}try{return(0,Uo.statSync)((0,ie.join)(J(e),mu)),!0}catch{return!1}}var Uo,Sr,ie,ca,jS,$S,mu,la,lt=g(()=>{"use strict";Uo=require("node:fs"),Sr=require("node:fs/promises"),ie=require("node:path");y();Se();aa();Lo();ue();Be();ca="profile.json",jS="jollimemory",$S="backfill-card-dismissed",mu="disabled-by-user";la=new Map});var pa,ma=g(()=>{"use strict";pa=5});async function P(e,t,n){let r=`${e}.${process.pid}.${(0,yu.randomUUID)()}.tmp`;await(0,Kt.writeFile)(r,t,n===void 0?"utf-8":{encoding:"utf-8",mode:n});try{await(0,Kt.rename)(r,e)}catch(o){let s=o.code;if(s==="EPERM"||s==="EACCES")await(0,Kt.writeFile)(e,t,n===void 0?"utf-8":{encoding:"utf-8",mode:n}),await(0,Kt.rm)(r,{force:!0});else throw o}}var yu,Kt,ae=g(()=>{"use strict";yu=require("node:crypto"),Kt=require("node:fs/promises")});function le(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}var Tr=g(()=>{"use strict"});var wu=g(()=>{"use strict"});function fa(e,t){if(e.length<=t)return e;let n=e.length-t;return`${e.slice(0,t)}
\u2026[truncated, ${n} more chars]`}var ha=g(()=>{"use strict"});function bu(e){return Number.isFinite(e)&&e>=0&&e<=1114111&&!(e>=55296&&e<=57343)}function Su(e){return e.replace(/&(#x[0-9a-fA-F]+|#\d+|[a-zA-Z]+);/g,(t,n)=>{if(n.startsWith("#x")){let o=Number.parseInt(n.slice(2),16);return bu(o)?String.fromCodePoint(o):t}if(n.startsWith("#")){let o=Number.parseInt(n.slice(1),10);return bu(o)?String.fromCodePoint(o):t}let r=BS[n];return typeof r=="string"?r:t})}var BS,Eu=g(()=>{"use strict";BS={amp:"&",lt:"<",gt:">",quot:'"',apos:"'"}});var WS,Tu,ku=g(()=>{"use strict";wu();Tr();ha();Eu();WS={decodeHtmlEntities:Su,lowercase:e=>e.toLowerCase()},Tu=new Set(Object.keys(WS))});var GS,Ru,vu=g(()=>{"use strict";GS="^https://app\\.asana\\.com/",Ru={id:"asana",label:"Asana",icon:"checklist",match:{claude:{prefixes:["mcp__claude_ai_Asana__"],acceptSuffix:"get_task"},codex:{namespaceSuffix:"asana",functionCallNames:["_get_task"],invocationTools:["asana.get_task"]}},wrapperKeys:["data"],reference:{nativeId:{pipe:[{op:"path",path:"gid"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"name"}],require:".+"},url:{pipe:[{op:"path",path:"permalink_url"}],require:GS,requireFlags:"i"},description:{pipe:[{op:"path",path:"notes"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"task"}]},{key:"assignee",label:"Assignee",icon:"person",pipe:[{op:"path",path:"assignee.name"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"asana-tasks",itemTag:"task",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var qS,_u,xu=g(()=>{"use strict";qS="^https://[^/]+/wiki/",_u={id:"confluence",label:"Confluence",icon:"book",match:{claude:{prefixes:["mcp__claude_ai_Atlassian__"],acceptSuffix:"getConfluencePage"},codex:{namespaceSuffix:"atlassian_rovo",functionCallNames:["_getconfluencepage"],invocationTools:["atlassian_rovo.getConfluencePage"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"pageId"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:qS},description:{pipe:[{op:"path",path:"body"}],optional:!0}},fields:[{key:"space",label:"Space",icon:"symbol-namespace",pipe:[{op:"path",path:"space"}]},{key:"author",label:"Author",icon:"account",pipe:[{op:"path",path:"author"}]},{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"coalesce",of:[[{op:"path",path:"entityType"}],[{op:"const",value:"page"}]]}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"confluence-pages",itemTag:"page",bodyTag:"content",maxCharsPerReference:3e4,maxTotalChars:6e4}}});var KS,Cu,Au=g(()=>{"use strict";KS="^/[^/\\s]+/[^/\\s]+",Cu={id:"context7",label:"Context7",icon:"book",trackOnly:!0,argumentsDerived:!0,match:{claude:{prefixes:["mcp__context7__"],acceptSuffix:"query-docs"},codex:{namespaceSuffix:"context7",functionCallNames:["_query_docs"],invocationTools:["query-docs","context7.query-docs"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"libraryId"}],require:KS},title:{pipe:[{op:"path",path:"libraryId"},{op:"regex",pattern:"^/(.+)$",extract:"$1"}],require:".+"},url:{pipe:[{op:"template",template:"https://context7.com{id}",from:{id:[{op:"path",path:"libraryId"}]}}],require:"^https://context7\\.com/"},description:{pipe:[{op:"path",path:"query"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"context7-libraries",itemTag:"library",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var ga,VS,ya,_I,Pu=g(()=>{"use strict";Tr();ga=["mcp__Figma__","mcp__figma__"],VS={get_metadata:"Read structure",get_screenshot:"Viewed screenshot",get_variable_defs:"Read variables",get_figjam:"Read FigJam board",get_design_context:"Read design context"},ya=Object.keys(VS),_I=new Set(ya)});var YS,XS,Iu,Ou=g(()=>{"use strict";Pu();YS="^[0-9a-zA-Z]{22,128}$",XS=ga.flatMap(e=>ya.map(t=>`${e}${t}`)),Iu={id:"figma",label:"Figma",icon:"symbol-color",trackOnly:!0,argumentsDerived:!0,accumulateBody:!0,titleFallbackPattern:"^Figma file [0-9a-zA-Z]{1,8}$",match:{claude:{prefixes:[...ga],exact:XS}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"fileKey"}],require:YS},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://www\\.figma\\.com/"},description:{pipe:[{op:"path",path:"detail"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"figma-files",itemTag:"file",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var zS,QS,Du,Nu=g(()=>{"use strict";zS="^https?://github\\.com/([^/]+)/[^/]+/(?:issues|pull)/\\d+",QS="^https?://github\\.com/[^/]+/([^/]+)/(?:issues|pull)/\\d+",Du={id:"github",label:"GitHub",icon:"issues",match:{claude:{prefixes:["mcp__github__"]},codex:{namespaceSuffix:"github",functionCallNames:["_fetch_issue","_search_issues"],invocationTools:["github_fetch_issue","github_search_issues"]}},wrapperKeys:["items","issues","nodes","results"],reference:{nativeId:{pipe:[{op:"template",template:"{owner}/{repo}#{number}",from:{owner:[{op:"coalesce",of:[[{op:"path",path:"repository.full_name"},{op:"regex",pattern:"^([^/]+)/[^/]+$",extract:"$1"}],[{op:"path",path:"html_url"},{op:"regex",pattern:zS,extract:"$1"}]]}],repo:[{op:"coalesce",of:[[{op:"path",path:"repository.full_name"},{op:"regex",pattern:"^[^/]+/([^/]+)$",extract:"$1"}],[{op:"path",path:"html_url"},{op:"regex",pattern:QS,extract:"$1"}]]}],number:[{op:"path",path:"number"}]}}],require:"^[^/]+/[^/]+#\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"html_url"}],require:"^https?://"},description:{pipe:[{op:"path",path:"body"},{op:"transform",fn:"decodeHtmlEntities"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"path",path:"state"}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"labels"},{op:"join",sep:", "}]},{key:"assignees",label:"Assignees",icon:"account",pipe:[{op:"path",path:"assignees"},{op:"join",sep:", "}]},{key:"milestone",label:"Milestone",icon:"milestone",pipe:[{op:"coalesce",of:[[{op:"path",path:"milestone"}],[{op:"path",path:"milestone.title"}]]}]},{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"coalesce",of:[[{op:"path",path:"issue_type"}],[{op:"path",path:"issue_type.name"}]]}]}],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"github-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var ZS,Lu,Mu=g(()=>{"use strict";ZS="^[A-Z][A-Z0-9_]*-\\d+$",Lu={id:"jira",label:"Jira",icon:"issues",match:{claude:{prefixes:["mcp__claude_ai_Atlassian__"]},codex:{namespaceSuffix:"atlassian_rovo",functionCallNames:["_fetch","_getjiraissue"],invocationTools:["atlassian_rovo.fetch","atlassian_rovo.getJiraIssue"]}},wrapperKeys:["nodes","issues","items","results"],reference:{nativeId:{pipe:[{op:"path",path:"key"}],require:ZS},title:{pipe:[{op:"path",path:"fields.summary"}],require:".+"},url:{pipe:[{op:"path",path:"webUrl"}],require:"^https?://"},description:{pipe:[{op:"path",path:"fields.description"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"coalesce",of:[[{op:"path",path:"fields.status.name"}],[{op:"path",path:"fields.status"}]]}]},{key:"priority",label:"Priority",icon:"flame",pipe:[{op:"coalesce",of:[[{op:"path",path:"fields.priority.name"}],[{op:"path",path:"fields.priority"}]]}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"fields.labels"},{op:"join",sep:", "}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"jira-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var ju,$u=g(()=>{"use strict";ju={id:"jollimemory",label:"Jolli Memory",icon:"history",trackOnly:!0,argumentsDerived:!0,accumulateBody:!0,match:{claude:{prefixes:["mcp__jollimemory__"],exact:["mcp__jollimemory__recall","mcp__jollimemory__search","mcp__jollimemory__get_decision_timeline"]},codex:{namespaceSuffix:"jollimemory",functionCallNames:["recall","search","get_decision_timeline"],invocationTools:["recall","search","get_decision_timeline"],invocationServer:"jollimemory"}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"tool"}],require:"^(recall|search|get_decision_timeline)$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},description:{pipe:[{op:"path",path:"query"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"jolli-memory-lookups",itemTag:"lookup",bodyTag:"queries",maxCharsPerReference:2e3,maxTotalChars:6e3}}});var eE,Fu,Hu=g(()=>{"use strict";eE="^[A-Z][A-Z0-9_]*-\\d+$",Fu={id:"linear",label:"Linear",icon:"issues",match:{claude:{prefixes:["mcp__linear__","mcp__claude_ai_Linear__"],denySuffixes:["list_issues","search_issues"]},codex:{namespaceSuffix:"linear",functionCallNames:["_fetch","_get_issue"],invocationTools:["linear_fetch","linear.get_issue"]}},wrapperKeys:["items","issues","nodes","results"],reference:{nativeId:{pipe:[{op:"path",path:"id"}],require:eE},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https?://"},description:{pipe:[{op:"path",path:"description"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"path",path:"status"}]},{key:"priority",label:"Priority",icon:"flame",pipe:[{op:"coalesce",of:[[{op:"path",path:"priority"}],[{op:"path",path:"priority.name"}]]}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"labels"},{op:"join",sep:", "}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"linear-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var Uu,Ju=g(()=>{"use strict";Uu={id:"monday",label:"monday.com",icon:"table",match:{claude:{prefixes:["mcp__claude_ai_monday_com__"],acceptSuffix:"get_board_items_page"},codex:{namespaceSuffix:"monday_com",functionCallNames:["_get_board_items_page"],invocationTools:["monday_com.get_board_items_page"]}},wrapperKeys:["items"],reference:{nativeId:{pipe:[{op:"path",path:"id"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"name"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://([\\w-]+\\.)*monday\\.com/",requireFlags:"i"},description:{pipe:[{op:"path",path:"description"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"item"}]},{key:"board",label:"Board",icon:"project",pipe:[{op:"path",path:"board"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"monday-items",itemTag:"item",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var tE,nE,rE,Bu,Wu=g(()=>{"use strict";tE="[-/]([0-9a-fA-F]{32})(?=[/?#]|$)",nE="^https://(www\\.notion\\.so|notion\\.so|app\\.notion\\.com|[A-Za-z0-9.-]+\\.notion\\.site)/",rE="<content\\b[^>]*>([\\s\\S]*?)</content>",Bu={id:"notion",label:"Notion",icon:"file-text",match:{claude:{prefixes:["mcp__claude_ai_Notion__"],acceptSuffix:"notion-fetch"},codex:{namespaceSuffix:"notion",functionCallNames:["_fetch"],invocationTools:["notion_fetch"]}},wrapperKeys:["results","items","pages"],reference:{guard:{pipe:[{op:"path",path:"metadata.type"}],require:"^page$"},nativeId:{pipe:[{op:"path",path:"url"},{op:"regex",pattern:tE,extract:"$1",lastMatch:!0},{op:"transform",fn:"lowercase"}],require:"^[0-9a-fA-F]{32}$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:nE,requireFlags:"i"},description:{pipe:[{op:"path",path:"text"},{op:"regex",pattern:rE,extract:"$1"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"page"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"notion-pages",itemTag:"page",bodyTag:"content",fieldAttrs:!1,maxCharsPerReference:3e4,maxTotalChars:6e4}}});var wa,oE,sE,ba,jI,Gu=g(()=>{"use strict";Tr();wa=["mcp__Sentry__","mcp__sentry__"],oE="get_sentry_resource",sE="analyze_issue_with_seer",ba=[oE,sE],jI=new Set(ba)});var iE,aE,lE,cE,qu,Ku=g(()=>{"use strict";Gu();iE=wa.flatMap(e=>ba.map(t=>`${e}${t}`)),aE="^[A-Za-z0-9.-]{1,253}/[A-Za-z0-9_-]{1,128}$",lE="^Issue [A-Za-z0-9_-]{1,128}$",cE="^Issue [0-9]{1,128}$",qu={id:"sentry",label:"Sentry",icon:"bug",trackOnly:!0,argumentsDerived:!0,titleFallbackPattern:lE,titleFallbackPoorestPattern:cE,match:{claude:{prefixes:[...wa],exact:iE}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"nativeId"}],require:aE},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://(?:[A-Za-z0-9-]{1,63}\\.)*sentry\\.io/issues/[A-Za-z0-9_-]{1,128}$",requireFlags:"i"},description:{pipe:[{op:"path",path:"detail"}],optional:!0}},fields:[{key:"issue-id",label:"Issue",icon:"bug",pipe:[{op:"path",path:"shortId"}]},{key:"project",label:"Project",icon:"symbol-property",pipe:[{op:"path",path:"project"}]}],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"sentry-issues",itemTag:"issue",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var Vu,Yu=g(()=>{"use strict";Vu={id:"slack",label:"Slack",icon:"comment-discussion",match:{claude:{prefixes:["mcp__claude_ai_Slack__"],acceptSuffix:"slack_read_thread"},codex:{namespaceSuffix:"slack",functionCallNames:["_slack_read_thread"],invocationTools:["slack.slack_read_thread"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"template",template:"{c}-{t}",from:{c:[{op:"path",path:"channelId"}],t:[{op:"path",path:"parentTs"}]}}],require:"^[A-Z0-9]+-\\d{7,}\\.\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://"},description:{pipe:[{op:"path",path:"text"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"comment-discussion",pipe:[{op:"const",value:"thread"}]},{key:"replies",label:"Replies",icon:"reply",pipe:[{op:"path",path:"replyCount"}]},{key:"channel",label:"Channel",icon:"symbol-namespace",pipe:[{op:"path",path:"channelId"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"slack-threads",itemTag:"thread",bodyTag:"messages",fieldAttrs:!0,maxCharsPerReference:8e3,maxTotalChars:4e4}}});var dE,Sa,Ea,Xu,zu=g(()=>{"use strict";dE="^dpl_[A-Za-z0-9]+$",Sa=[{op:"coalesce",of:[[{op:"path",path:"readyState"}],[{op:"path",path:"state"}]]}],Ea=[{op:"template",template:"https://{host}",from:{host:[{op:"path",path:"url"}]}}],Xu={id:"vercel",label:"Vercel",icon:"rocket",trackOnly:!0,match:{claude:{prefixes:["mcp__claude_ai_Vercel__","mcp__vercel__"],acceptSuffix:"get_deployment"}},wrapperKeys:["deployment"],reference:{nativeId:{pipe:[{op:"path",path:"id"}],require:dE},title:{pipe:[{op:"coalesce",of:[[{op:"template",template:"{name} ({state})",from:{name:[{op:"path",path:"name"}],state:Sa}}],[{op:"path",path:"name"}]]}],require:".+"},url:{pipe:Ea,require:"^https://[A-Za-z0-9.-]+\\.vercel\\.app$",requireFlags:"i"},description:{pipe:[{op:"coalesce",of:[[{op:"path",path:"errorMessage"}],[{op:"template",template:"Deployment {state} \xB7 {target} \xB7 {url}",from:{state:Sa,target:[{op:"path",path:"target"}],url:Ea}}],[{op:"template",template:"Deployment {state} \xB7 {url}",from:{state:Sa,url:Ea}}]]}],optional:!0}},fields:[{key:"target",label:"Target",icon:"rocket",pipe:[{op:"path",path:"target"}]},{key:"framework",label:"Framework",icon:"symbol-property",pipe:[{op:"path",path:"project.framework"}]},{key:"error-code",label:"Error",icon:"error",pipe:[{op:"path",path:"errorCode"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"vercel-deployments",itemTag:"deployment",bodyTag:"content",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var Qu,Zu=g(()=>{"use strict";Qu={id:"zoom-doc",label:"Zoom Doc",icon:"file",match:{claude:{prefixes:["mcp__claude_ai_Zoom_for_Claude__"],acceptSuffix:"hub_get_file_content"}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"fileId"}],require:"^[\\w.-]+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://docs\\.zoom\\.us/doc/"},description:{pipe:[{op:"path",path:"content"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"doc"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"zoom-docs",itemTag:"doc",bodyTag:"content",maxCharsPerReference:3e4,maxTotalChars:6e4}}});var ep,tp=g(()=>{"use strict";ep={id:"zoom-meeting",label:"Zoom Meeting",icon:"device-camera-video",match:{claude:{prefixes:["mcp__claude_ai_Zoom_for_Claude__"],acceptSuffix:"get_meeting_assets"},codex:{namespaceSuffix:"zoom",functionCallNames:["_get_meeting_assets"],invocationTools:["zoom.get_meeting_assets"]}},wrapperKeys:[],reference:{guard:{pipe:[{op:"path",path:"meeting_summary.summary_markdown"}],require:".+"},nativeId:{pipe:[{op:"path",path:"meeting_uuid"}],require:"^[\\w-]+$"},title:{pipe:[{op:"path",path:"topic"}],require:".+"},url:{pipe:[{op:"coalesce",of:[[{op:"path",path:"meeting_summary.summary_doc_url"}],[{op:"path",path:"deep_url"}]]}],require:"^https://"},description:{pipe:[{op:"path",path:"meeting_summary.summary_markdown"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"meeting"}]},{key:"started",label:"Started",icon:"calendar",pipe:[{op:"path",path:"start_time"}]},{key:"meeting-number",label:"Meeting #",icon:"symbol-number",pipe:[{op:"path",path:"meeting_number"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"zoom-meetings",itemTag:"meeting",bodyTag:"summary",maxCharsPerReference:2e4,maxTotalChars:4e4}}});var np,rp=g(()=>{"use strict";vu();xu();Au();Ou();Nu();Mu();$u();Hu();Ju();Wu();Ku();Yu();zu();Zu();tp();np=[Fu,_u,Lu,Du,Bu,Vu,ep,Qu,Ru,Uu,Cu,ju,Xu,Iu,qu]});function pE(e,t,n){if(!le(e))return"op must be an object";if(n.opCount++,n.opCount>op)return`pipe exceeds ${op} ops`;let r=e.op;if(typeof r!="string"||!uE.has(r))return`unknown op: ${String(r)}`;switch(r){case"path":return typeof e.path=="string"?void 0:"path op requires a string 'path'";case"const":return typeof e.value=="string"?void 0:"const op requires a string 'value'";case"join":return typeof e.sep=="string"?void 0:"join op requires a string 'sep'";case"regex":return typeof e.pattern!="string"?"regex op requires a string 'pattern'":e.extract!==void 0&&typeof e.extract!="string"?"regex.extract must be a string":e.lastMatch!==void 0&&typeof e.lastMatch!="boolean"?"regex.lastMatch must be a boolean":void 0;case"transform":return typeof e.fn!="string"?"transform op requires a string 'fn'":Tu.has(e.fn)?void 0:`unknown transform: ${e.fn}`;case"coalesce":{if(t+1>Bo)return`nesting depth exceeds ${Bo}`;if(!Array.isArray(e.of))return"coalesce op requires an array 'of'";for(let o of e.of){let s=Ta(o,t+1,n);if(s!==void 0)return s}return}case"template":{if(t+1>Bo)return`nesting depth exceeds ${Bo}`;if(typeof e.template!="string")return"template op requires a string 'template'";if(!le(e.from))return"template op requires an object 'from'";for(let o of Object.values(e.from)){let s=Ta(o,t+1,n);if(s!==void 0)return s}return}}}function Ta(e,t,n){if(!Array.isArray(e))return"pipe must be an array";for(let r of e){let o=pE(r,t,n);if(o!==void 0)return o}}function kr(e,t){let n=Ta(e,0,{opCount:0});return n===void 0?void 0:`${t}: ${n}`}function mE(e){if(!le(e))return{ok:!1,error:"definition must be an object"};if(typeof e.id!="string"||e.id.length===0)return{ok:!1,error:"id must be a non-empty string"};if(typeof e.label!="string"||e.label.length===0)return{ok:!1,error:"label must be a non-empty string"};if(typeof e.icon!="string"||e.icon.length===0)return{ok:!1,error:"icon must be a non-empty string"};if(e.titleFallbackPattern!==void 0){if(typeof e.titleFallbackPattern!="string"||e.titleFallbackPattern.length===0)return{ok:!1,error:"titleFallbackPattern must be a non-empty string"};try{new RegExp(e.titleFallbackPattern)}catch(n){return{ok:!1,error:`titleFallbackPattern is not a valid regex: ${n.message}`}}}if(e.titleFallbackPoorestPattern!==void 0){if(typeof e.titleFallbackPoorestPattern!="string"||e.titleFallbackPoorestPattern.length===0)return{ok:!1,error:"titleFallbackPoorestPattern must be a non-empty string"};try{new RegExp(e.titleFallbackPoorestPattern)}catch(n){return{ok:!1,error:`titleFallbackPoorestPattern is not a valid regex: ${n.message}`}}if(e.titleFallbackPattern===void 0)return{ok:!1,error:"titleFallbackPoorestPattern requires titleFallbackPattern"}}if(!le(e.match))return{ok:!1,error:"match must be an object"};if(!Array.isArray(e.wrapperKeys))return{ok:!1,error:"wrapperKeys must be an array"};if(!le(e.reference))return{ok:!1,error:"reference must be an object"};if(!Array.isArray(e.fields))return{ok:!1,error:"fields must be an array"};if(!le(e.storage))return{ok:!1,error:"storage must be an object"};if(!le(e.render))return{ok:!1,error:"render must be an object"};let t=e.reference;for(let n of["nativeId","title"]){let r=t[n];if(!le(r))return{ok:!1,error:`reference.${n} is required`};let o=kr(r.pipe,`reference.${n}.pipe`);if(o!==void 0)return{ok:!1,error:o}}if(t.url!==void 0){if(!le(t.url))return{ok:!1,error:"reference.url must be an object"};let n=kr(t.url.pipe,"reference.url.pipe");if(n!==void 0)return{ok:!1,error:n}}if(t.description!==void 0){if(!le(t.description))return{ok:!1,error:"reference.description must be an object"};let n=kr(t.description.pipe,"reference.description.pipe");if(n!==void 0)return{ok:!1,error:n}}if(t.guard!==void 0){if(!le(t.guard))return{ok:!1,error:"reference.guard must be an object"};let n=kr(t.guard.pipe,"reference.guard.pipe");if(n!==void 0)return{ok:!1,error:n}}for(let[n,r]of e.fields.entries()){if(!le(r))return{ok:!1,error:`fields[${n}] must be an object`};if(typeof r.key!="string"||!sp.test(r.key))return{ok:!1,error:`fields[${n}].key must match ${sp}`};if(typeof r.label!="string"||r.label.length===0)return{ok:!1,error:`fields[${n}].label must be a non-empty string`};let o=kr(r.pipe,`fields[${n}].pipe`);if(o!==void 0)return{ok:!1,error:o}}return{ok:!0,def:e}}function On(){if(Wo!==void 0)return Wo;let e=[];for(let t of np){let n=mE(t);if(!n.ok)throw new Error(`invalid built-in source definition '${t.id}': ${n.error}`);e.push(n.def)}return Wo=new ka(e),Wo}var op,Bo,uE,sp,ka,Wo,Go=g(()=>{"use strict";Tr();ku();rp();op=64,Bo=8,uE=new Set(["path","coalesce","regex","template","join","const","transform"]);sp=/^[\w-]+$/;ka=class{constructor(t){this.definitions=t}all(){return this.definitions}byId(t){return this.definitions.find(n=>n.id===t)}match(t,n,r,o){return t==="claude"?this.definitions.find(s=>{let i=s.match.claude;return!(i===void 0||!i.prefixes.some(a=>n.startsWith(a))||i.exact!==void 0&&!i.exact.includes(n)||i.acceptSuffix!==void 0&&!n.endsWith(i.acceptSuffix)||i.denySuffixes?.some(a=>n.endsWith(a)))}):r!==void 0?this.definitions.find(s=>{let i=s.match.codex;return i!==void 0&&i.namespaceSuffix===r&&i.functionCallNames.includes(n)}):this.definitions.find(s=>{let i=s.match.codex;return i===void 0||!i.invocationTools.includes(n)?!1:i.invocationServer===void 0||i.invocationServer===o})}}});function ap(e,t){let n=On().byId(e);if(n===void 0||n.storage.nativeIdPathSafe===!1){let r=t.replace(/[^\w.-]/g,"-"),o=SE(t).slice(0,8);return`${r}-${o}`}if(t.includes("..")||/[/\\]/.test(t))throw new Error(`Refusing unsafe ${e} nativeId for path: ${JSON.stringify(t)}`);return t}function Ra(e){return yE(e)}function fE(e){return e.replace(/^\n+/,"").replace(/\n+$/,"")}function hE(e){let t=e.indexOf(gE);return t===-1?e:e.slice(0,t)}function yE(e){if(typeof e!="string")return null;let t=e.split(`
`);if(t[0]?.trim()!=="---")return null;let n=-1;for(let k=1;k<t.length;k++)if(t[k].trim()==="---"){n=k;break}if(n===-1)return null;let r=t.slice(1,n),o=fE(hE(t.slice(n+1).join(`
`))),s={},i=[],a=!1;for(let k of r){if(a){let j=/^\s+- (.+)$/.exec(k);if(j){try{let I=JSON.parse(j[1]);wE(I)&&i.push(I)}catch{}continue}a=!1}if(k.trim()==="fields:"){a=!0;continue}let R=/^([a-zA-Z]+):\s*(.+)$/.exec(k);R&&(s[R[1]]=R[2])}let l=k=>{let R=s[k];if(R!==void 0)try{let j=JSON.parse(R);return typeof j=="string"?j:void 0}catch{return}},c=l("source"),u=l("nativeId");if(c===void 0||u===void 0||!bE(c))return null;let d=c,p=u,f=l("title"),h=l("url"),w=l("referencedAt"),T=l("sourceToolName");return!f||w===void 0||!T?null:{mapKey:`${d}:${p}`,source:d,nativeId:p,title:f,referencedAt:w,toolName:T,...h!==void 0?{url:h}:{},...i.length>0?{fields:i}:{},...o.length>0?{description:o}:{}}}function wE(e){if(typeof e!="object"||e===null)return!1;let t=e;return!(typeof t.key!="string"||typeof t.label!="string"||typeof t.value!="string"||!/^[\w-]+$/.test(t.key)||t.icon!==void 0&&typeof t.icon!="string")}function bE(e){return e.length>0&&/^[\w-]+$/.test(e)}function lp(e){return On().byId(e)!==void 0}function SE(e){return(0,ip.createHash)("sha256").update(e,"utf-8").digest("hex")}var ip,mO,gE,Rr=g(()=>{"use strict";ip=require("node:crypto");y();Go();mO=m("ReferenceStore");gE="<!-- jolli:auto-note -->"});function EE(e){return`${e.source}:${e.skill}`}function TE(e,t){if(e===void 0)return t;let n=e.usage===void 0||t.usage===void 0?e.usage??t.usage:{input:e.usage.input+t.usage.input,output:e.usage.output+t.usage.output,cached:e.usage.cached+t.usage.cached,confidence:e.usage.confidence==="attributed"&&t.usage.confidence==="attributed"?"attributed":"estimated"},r=[e,t].filter(l=>l.usage!==void 0),o=RE(r),{usageBySession:s,supersededDocIds:i,...a}=e;return{...a,invocationCount:e.invocationCount+t.invocationCount,...n!==void 0?{usage:n}:{},...o!==void 0?{usageBySession:o}:{},...e.detection==="heuristic"||t.detection==="heuristic"?{detection:"heuristic"}:{},...e.jolliDocId===void 0&&t.jolliDocId!==void 0?{jolliDocId:t.jolliDocId,jolliDocUrl:t.jolliDocUrl}:{},...kE(e,t)}}function kE(e,t){let n=new Set([...e.supersededDocIds??[],...t.supersededDocIds??[]]);e.jolliDocId!==void 0&&t.jolliDocId!==void 0&&n.add(t.jolliDocId);let r=e.jolliDocId??t.jolliDocId;return r!==void 0&&n.delete(r),n.size>0?{supersededDocIds:[...n]}:{}}function va(e){if(e.supersededDocIds===void 0)return e;let{supersededDocIds:t,...n}=e;return n}function RE(e){if(e.length===0)return;let t=[];for(let r of e){if(r.usageBySession===void 0)return;t.push(r.usageBySession)}let n={};for(let r of t)for(let[o,s]of Object.entries(r)){let i=n[o];n[o]=i===void 0?s:{input:i.input+s.input,cached:i.cached+s.cached,output:i.output+s.output,confidence:i.confidence==="attributed"&&s.confidence==="attributed"?"attributed":"estimated"}}return n}function _a(e){let t=new Map;for(let r of e)t.has(r.archivedKey)||t.set(r.archivedKey,r);let n=new Map;for(let r of t.values()){let o=EE(r);n.set(o,TE(n.get(o),r))}return[...n.values()]}var xa=g(()=>{"use strict"});var yO,cp=g(()=>{"use strict";y();yO=m("SkillStore")});async function Aa(e){let t=J(e);return await(0,be.mkdir)(t,{recursive:!0}),t}function ce(){return(0,_r.join)((0,up.homedir)(),".jolli","jollimemory")}async function Vt(e){let t=(0,_r.join)(e,pp);try{let n=await(0,be.readFile)(t,"utf-8"),r=JSON.parse(n);return _E(r)}catch{return Dn.debug("No config file found in %s, using defaults",e),{}}}function _E(e){if(e.syncEnabled===void 0)return e;let{syncEnabled:t,...n}=e;return n.autoSyncEnabled===void 0?{...n,autoSyncEnabled:t}:n}function xE(e,t){return!("localAgentTool"in t)||"localAgentPath"in t||(e.localAgentTool??"claude-code")===(t.localAgentTool??"claude-code")||e.localAgentPath===void 0?t:(Dn.info("Clearing localAgentPath (was set for %s, switching to %s)",e.localAgentTool??"claude-code",t.localAgentTool),{...t,localAgentPath:void 0})}async function xr(e,t){await na(t,async()=>{await mp(e,t)}),Dn.info("Config saved to %s",t)}async function qo(e){return CE(e,ce())}async function CE(e,t){return na(t,async()=>{let{update:n,result:r}=e(await Vt(t));return n!==null&&(await mp(n,t),Dn.info("Config saved to %s",t)),r})}async function mp(e,t){let n=await Vt(t),r={...n,...xE(n,e)};await P((0,_r.join)(t,pp),JSON.stringify(r,null,"	"))}async function te(){return Vt(ce())}async function ct(e){return xr(e,ce())}async function fp(){return AE(ce())}async function AE(e){let t=await Vt(e);if(t.installId)return{installId:t.installId,created:!1};let n=(0,_r.join)(e,vE),r=(0,vr.randomUUID)();await(0,be.mkdir)(e,{recursive:!0});let o,s,i=`${n}.${(0,vr.randomUUID)()}.tmp`;try{await(0,be.writeFile)(i,r,{flag:"wx"});try{await(0,be.link)(i,n),o=r,s=!0}catch{o=await dp(n,r),s=!1}}catch(a){Dn.warn("could not stage the install-id sentinel: %s",v(a)),o=await dp(n,r),s=!1}finally{await(0,be.rm)(i,{force:!0}).catch(()=>{})}return t.installId!==o&&await xr({installId:o},e).catch(a=>{Dn.warn("could not persist the install id: %s",v(a))}),{installId:o,created:s}}async function dp(e,t){try{let n=(await(0,be.readFile)(e,"utf-8")).trim();return n.length>0?n:t}catch{return t}}function Ca(e,t){let n={...e},r=!1;for(let o of t)o in n&&(delete n[o],r=!0);return{value:n,changed:r}}function hp(e){let t=!1,n={};for(let[i,a]of Object.entries(e.plans??{})){if(a.ignored===!0){t=!0;continue}let l=Ca(a,PE);l.changed&&(t=!0),n[i]=l.value}let r;if(e.notes!==void 0){r={};for(let[i,a]of Object.entries(e.notes)){if(a.ignored===!0){t=!0;continue}let l=Ca(a,IE);l.changed&&(t=!0),r[i]=l.value}}let o;if(e.references!==void 0){o={};for(let[i,a]of Object.entries(e.references)){let l=a;if(l.ignored===!0||l.commitHash!=null||l.contentHashAtCommit!==void 0){t=!0;continue}let c=Ca(a,OE);c.changed&&(t=!0),o[i]=c.value}}return{registry:{version:1,plans:n,...r!==void 0?{notes:r}:{},...o!==void 0?{references:o}:{},...e.skills!==void 0?{skills:e.skills}:{}},changed:t}}var vr,be,up,_r,Dn,pp,vE,NO,LO,MO,jO,PE,IE,OE,ne=g(()=>{"use strict";vr=require("node:crypto"),be=require("node:fs/promises"),up=require("node:os"),_r=require("node:path");y();ma();ae();Be();Rr();xa();cp();Dn=m("SessionTracker"),pp="config.json",vE="install-id",NO=2880*60*1e3;LO=2880*60*1e3,MO=10080*60*1e3,jO=(0,vr.randomBytes)(4).toString("hex"),PE=["ignored","branch","editCount"],IE=["ignored","branch"],OE=["ignored","branch","commitHash","contentHashAtCommit"]});function ut(e=process.versions.node){let t=/^(\d+)\.(\d+)/.exec(e);if(!t)return!1;let n=Number.parseInt(t[1],10),r=Number.parseInt(t[2],10);return n>dt.major?!0:n<dt.major?!1:r>=dt.minor}function Yt(e){let t=e,n=t?.message??String(e),r=t?.code;return r==="ENOENT"?null:r==="EACCES"||r==="EPERM"?{kind:"permission",message:n}:/SQLITE_CORRUPT|SQLITE_NOTADB|file is not a database/i.test(n)?{kind:"corrupt",message:n}:/SQLITE_BUSY|SQLITE_LOCKED|database is locked/i.test(n)?{kind:"locked",message:n}:/no such table|no such column/i.test(n)?{kind:"schema",message:n}:/SQLITE_CANTOPEN|unable to open/i.test(n)?{kind:"permission",message:n}:{kind:"unknown",message:n}}var dt,We=g(()=>{"use strict";dt={major:22,minor:13}});function sm(e){if((0,om.platform)()==="win32")try{Hd("attrib",["+h",e],{timeout:2e3})}catch{}}var om,im=g(()=>{"use strict";om=require("node:os");Se()});var am,Y,Te,Mn,pe,rs=g(()=>{"use strict";am=require("node:crypto"),Y=require("node:fs"),Te=require("node:path");y();im();we();Mn=m("MetadataManager"),pe=class e{constructor(t){this.jolliDir=t;this.manifestPath=(0,Te.join)(t,"manifest.json"),this.branchesPath=(0,Te.join)(t,"branches.json"),this.configPath=(0,Te.join)(t,"config.json"),this.migrationPath=(0,Te.join)(t,"migration.json"),this.indexPath=(0,Te.join)(t,"index.json")}ensure(){(0,Y.mkdirSync)(this.jolliDir,{recursive:!0})!==void 0&&sm(this.jolliDir),(0,Y.existsSync)(this.manifestPath)||this.atomicWrite(this.manifestPath,JSON.stringify({version:1,files:[]},null,"	")),(0,Y.existsSync)(this.branchesPath)||this.atomicWrite(this.branchesPath,JSON.stringify({version:1,mappings:[]},null,"	")),(0,Y.existsSync)(this.configPath)||this.atomicWrite(this.configPath,JSON.stringify({version:1,sortOrder:"date"},null,"	"))}readManifest(){return this.readJson(this.manifestPath)??{version:1,files:[]}}updateManifest(t){let n=this.readManifest(),r=n.files.filter(o=>o.fileId!==t.fileId);r.push(t),this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:r},null,"	")),Mn.info("Manifest updated: %s (%s)",t.path,t.type)}removeFromManifest(t){let n=this.readManifest(),r=n.files.filter(o=>o.fileId!==t);return r.length===n.files.length?!1:(this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:r},null,"	")),!0)}unregisterFilesByType(t){let n=this.readManifest(),r=n.files.filter(s=>s.type!==t),o=n.files.length-r.length;return o===0?0:(this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:r},null,"	")),Mn.info("Manifest unregistered %d entries of type=%s",o,t),o)}replaceFiles(t){let n=this.readManifest();this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:[...t]},null,"	"))}findByPath(t){return this.readManifest().files.find(n=>n.path===t)}findById(t){return this.readManifest().files.find(n=>n.fileId===t)}updatePath(t,n){let r=this.readManifest();if(!r.files.find(i=>i.fileId===t))return!1;let s=r.files.map(i=>i.fileId===t?{...i,path:n}:i);return this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:s},null,"	")),!0}resolveFolderForBranch(t){let n=this.readBranches(),r=n.mappings.find(a=>a.branch===t);if(r)return r.folder;let o=e.transcodeBranchName(t),s={folder:o,branch:t,createdAt:new Date().toISOString()},i={...n,mappings:[...n.mappings,s]};return this.atomicWrite(this.branchesPath,JSON.stringify(i,null,"	")),Mn.info("Branch mapping created: %s \u2192 %s",t,o),o}removeBranchMapping(t){let n=this.readBranches(),r=n.mappings.filter(o=>o.branch!==t);return r.length===n.mappings.length?!1:(this.atomicWrite(this.branchesPath,JSON.stringify({...n,mappings:r},null,"	")),Mn.info("Branch mapping removed: %s (no remaining head)",t),!0)}renameBranchFolder(t,n){let r=this.readBranches(),o=r.mappings.map(l=>l.folder===t?{...l,folder:n}:l);this.atomicWrite(this.branchesPath,JSON.stringify({...r,mappings:o},null,"	"));let s=this.readManifest(),i=0,a=s.files.map(l=>l.path.startsWith(`${t}/`)?(i++,{...l,path:l.path.replace(`${t}/`,`${n}/`)}):l);return i>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...s,files:a},null,"	")),i}removeBranchFolder(t){let n=this.readBranches();this.atomicWrite(this.branchesPath,JSON.stringify({...n,mappings:n.mappings.filter(i=>i.folder!==t)},null,"	"));let r=this.readManifest(),o=r.files.filter(i=>!i.path.startsWith(`${t}/`)),s=r.files.length-o.length;return s>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:o},null,"	")),s}unregisterBranches(t){let n=new Set(t);if(n.size===0)return 0;let r=this.readBranches(),o=r.mappings.filter(i=>!n.has(i.branch)),s=r.mappings.length-o.length;return s===0?0:(this.atomicWrite(this.branchesPath,JSON.stringify({...r,mappings:o},null,"	")),Mn.info("Branch mappings unregistered: %d",s),s)}readBranches(){return this.readJson(this.branchesPath)??{version:1,mappings:[]}}listBranchMappings(){return this.readBranches().mappings}folderToBranch(t){try{return this.listBranchMappings().find(n=>n.folder===t)?.branch??t}catch{return t}}listIndexHeads(){let t=this.readJson(this.indexPath);return!t||!Array.isArray(t.entries)?[]:t.entries.filter(n=>typeof n?.commitHash=="string"&&typeof n.branch=="string"&&(n.parentCommitHash===null||typeof n.parentCommitHash=="string")&&n.parentCommitHash===null)}readIndex(){return this.readJson(this.indexPath)}readConfig(){return this.readJson(this.configPath)??{version:1,sortOrder:"date"}}saveConfig(t){this.atomicWrite(this.configPath,JSON.stringify(t,null,"	"))}readMigrationState(){return this.readJson(this.migrationPath)}saveMigrationState(t){this.atomicWrite(this.migrationPath,JSON.stringify(t,null,"	"))}reconcile(t){let n=this.readManifest();if(n.files.length===0||!n.files.some(a=>!(0,Y.existsSync)((0,Te.join)(t,a.path))))return 0;let o=new Map;try{this.walkDir(t,t,o)}catch{}let s=0,i=[];for(let a of n.files){let l=(0,Te.join)(t,a.path);if((0,Y.existsSync)(l))i.push(a);else{let c=o.get(a.fingerprint);c&&c!==a.path?(i.push({...a,path:c}),s++):(Mn.warn("Manifest entry '%s' (id=%s) not found on disk \u2014 keeping entry to avoid data loss",a.path,a.fileId),i.push(a))}}return s>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:i},null,"	")),s}walkDir(t,n,r){for(let o of(0,Y.readdirSync)(t,{withFileTypes:!0})){if(o.name.startsWith("."))continue;let s=(0,Te.join)(t,o.name);if(o.isDirectory())this.walkDir(s,n,r);else if(o.name.endsWith(".md"))try{let i=(0,Y.readFileSync)(s,"utf-8"),a=e.sha256(i);r.set(a,He((0,Te.relative)(n,s)))}catch{}}}static transcodeBranchName(t){let n=t.replace(/[/\\:*?~^]/g,"-");return n=n.replace(/-{3,}/g,"-"),n=n.replace(/\.\./g,"--"),n=n.replace(/^[.-]+|[.-]+$/g,""),n||"default"}static sha256(t){return(0,am.createHash)("sha256").update(t,"utf-8").digest("hex")}readJson(t){if(!(0,Y.existsSync)(t))return null;try{return JSON.parse((0,Y.readFileSync)(t,"utf-8"))}catch{return null}}atomicWrite(t,n){let r=(0,Te.dirname)(t);(0,Y.mkdirSync)(r,{recursive:!0});let o=`${t}.tmp`;(0,Y.writeFileSync)(o,n,"utf-8"),(0,Y.renameSync)(o,t)}}});function gT(e){if(process.env.VITEST)return null;try{return ye("ssh",["-G",e],{encoding:"utf-8",timeout:fT,stdio:["ignore","pipe","pipe"]})}catch(t){return mT.debug("ssh -G %s failed: %s",e,t instanceof Error?t.message:String(t)),null}}function yT(e){for(let t of e.split(/\r?\n/)){let n=t.match(/^hostname\s+(\S+)/i);if(n?.[1])return n[1]}return null}function os(e){if(!e)return e;let t=lm.get(e);if(t!==void 0)return t;let n=e,r=hT(e);if(r){let o=yT(r);o&&(n=o)}return lm.set(e,n),n}var mT,fT,lm,hT,cm=g(()=>{"use strict";y();Se();mT=m("SshAliasResolver"),fT=5e3,lm=new Map,hT=gT});function dm(){return(0,re.join)((0,fm.homedir)(),"Documents","jolli")}function Za(e){return e?hm(e)?e:(wT.warn("Invalid customPath '%s': must be absolute and not contain '..'. Falling back to default.",e),dm()):dm()}function hm(e){return e?(0,re.isAbsolute)(e)&&!e.includes(".."):!0}function gm(e,t,n){let r=Za(n),o=(0,re.join)(r,e);if(!(0,Ot.existsSync)(o)){let i=Rm(r,e,t).match;return i||(Qa(o,e,t),o)}let s=_m(o);return s&&Em(s,t,e)?o:s&&vm(o,s)?(Qa(o,e,t),o):TT(r,e,t)}function ym(e){let t=tl(e,["config","--get","remote.origin.url"]);if(t){let r=t.match(/\/([^/]+?)(?:\.git)?$/);if(r?.[1])return r[1]}let n=wm(e);return n?(0,re.basename)(n):(0,re.basename)(e)||"unknown"}function wm(e){let t=tl(e,["rev-parse","--git-common-dir"]);if(!t)return null;let n=(0,re.isAbsolute)(t)?t:(0,re.join)(e,t),r=(0,re.dirname)(n);return r&&r!=="/"&&r!=="."?r:null}function bT(e,t){if(!(0,re.basename)(e))return{claimable:!1,blocker:"not-a-project"};let n=wm(e);if(!n)return{claimable:!1,blocker:"not-a-project"};let r;try{r=Za(t)}catch{return{claimable:!1,blocker:"unresolvable-folder"}}return Wi(r,n)?{claimable:!1,blocker:"folder-inside-repo"}:{claimable:!0}}function el(e,t){return bT(e,t).claimable}function bm(){let e=Number(process.env.JOLLI_GIT_CMD_TIMEOUT_MS);return Number.isFinite(e)&&e>0?e:3e4}function ST(){return Math.min(bm(),5e3)}function ET(e){return typeof e=="object"&&e!==null&&e.code==="ETIMEDOUT"}function um(e,t,n=bm()){return ye("git",t,{cwd:e,encoding:"utf-8",timeout:n,stdio:["ignore","pipe","pipe"]}).trim()||null}function tl(e,t){try{return um(e,t)}catch(n){if(!ET(n))return null;try{return um(e,t,ST())}catch{return null}}}function Sm(e){return tl(e,["remote","get-url","origin"])}function Em(e,t,n){return e.remoteUrl&&t?pm(e.remoteUrl)===pm(t):!e.remoteUrl&&!t?e.repoName==null||e.repoName===n:!1}function pm(e){return km(e).replace(/\/+$/,"").replace(/\.git$/,"").toLowerCase()}function km(e){let t=e.match(/^(?:git\+)?ssh:\/\/(?:[^@/]+@)?([^/:]+)(?::(\d+))?\/(.+)$/i);if(t)return`https://${os(t[1])}${mm(t[2],"22")}/${t[3]}`;let n=e.match(/^git:\/\/([^/:]+)(?::(\d+))?\/(.+)$/i);if(n)return`https://${os(n[1])}${mm(n[2],"9418")}/${n[3]}`;let r=e.match(/^[^@/:]+@([^/:]+):(.+)$/);return r?`https://${os(r[1])}/${r[2]}`:e}function mm(e,t){return e===void 0||e===t?"":`:${e}`}function Rm(e,t,n){let r=null,o=null,s=null;for(let i=2;i<=99;i++){let a=(0,re.join)(e,`${t}-${i}`);if(!(0,Ot.existsSync)(a)){s===null&&(s=a);continue}let l=_m(a);if(l&&Em(l,n,t)){r=a;break}l&&o===null&&vm(a,l)&&(o=a)}return{match:r,stub:o,firstUnused:s}}function TT(e,t,n){let r=Rm(e,t,n);if(r.match)return r.match;let o=r.stub??r.firstUnused??(0,re.join)(e,`${t}-${Date.now()}`);return Qa(o,t,n),o}function Qa(e,t,n){if(q())return;let r=new pe((0,re.join)(e,".jolli"));r.ensure();let o=r.readConfig();r.saveConfig({...o,remoteUrl:n??void 0,repoName:t})}function vm(e,t){return t.remoteUrl==null&&t.repoName==null}function _m(e){let t=(0,re.join)(e,".jolli","config.json");if(!(0,Ot.existsSync)(t))return null;try{return JSON.parse((0,Ot.readFileSync)(t,"utf-8"))}catch{return null}}var Ot,fm,re,wT,Tm,jn=g(()=>{"use strict";Ot=require("node:fs"),fm=require("node:os"),re=require("node:path");y();Se();rs();we();cm();wT=m("KBPathResolver");Tm=new Set(["github.com","gitlab.com","bitbucket.org"])});async function il(e){let t=await G(["config","--get","remote.origin.url"],e),n=t.exitCode===0?t.stdout.trim():"";return n.length===0?Nr(e):jm(n,e)}function jm(e,t){let n=e.trim();if(n.length===0)return Nr(t);let r=/^([A-Za-z0-9_.+-]+@)([^:/\s]+):(.+)$/.exec(n);if(r&&!n.includes("://")){let i=r[2].toLowerCase(),a=Mm(i,Lm(r[3]));return`https://${i}/${a}`}let o;try{o=new URL(n)}catch{return Nr(t)}let s=o.protocol.replace(/:$/,"").toLowerCase();if(s==="ssh"||s==="git"||s==="http"||s==="https"){let i=o.hostname.toLowerCase(),a=Mm(i,Lm(o.pathname.replace(/^\/+/,""))),l=AT(s,o.port);return`https://${i}${l}/${a}`}return Nr(s==="file"?o.pathname:t)}function Nr(e){let t=Rn(He(e));return t.length===0?"file:///":t.startsWith("/")?`file://${t}`:`file:///${t}`}function Lm(e){let t=Rn(e);return t.toLowerCase().endsWith(".git")&&(t=t.slice(0,-4)),Rn(t)}function Mm(e,t){return Tm.has(e)?t.toLowerCase():t}function AT(e,t){return t.length===0?"":e==="ssh"||e==="git"?t===CT[e]?"":`:${t}`:`:${t}`}var CT,cs=g(()=>{"use strict";ue();jn();we();CT={ssh:"22",git:"9418"}});function al(){return"codex-plugin"}var Ge,$n=g(()=>{"use strict";Ge="codex-plugin/1.0.2"});var Xm,zm,Qm,Zm,ef,tf,nf,rf,us=g(()=>{"use strict";Xm=`
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
`,zm=`
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
`,Qm=`
INSERT INTO context_kinds (kind) VALUES ('skill');
`,Zm=`
ALTER TABLE events_raw ADD COLUMN failed_kind TEXT;
`,ef=`
ALTER TABLE session_tool_use ADD COLUMN last_call_at_ms INTEGER;
`,tf=`
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
`,nf=`
DROP TRIGGER IF EXISTS repos_no_delete;
`,rf=`
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
`});function Un(){return(0,ps.join)(ce(),"jollimemory.db")}function Dt(e=process.versions.node){let t=/^(\d+)\.(\d+)/.exec(e);if(!t)return!1;let n=Number.parseInt(t[1],10),r=Number.parseInt(t[2],10);return n>$r.major?!0:n<$r.major?!1:r>=$r.minor}function jr(e){try{let t=e.prepare("SELECT value FROM schema_meta WHERE key = 'schema_version'").get(),n=Number.parseInt(t?.value??"",10);return Number.isFinite(n)?n:0}catch{return 0}}function YT(e){try{return(e.prepare("SELECT COUNT(*) AS n FROM sqlite_master WHERE type = 'table' AND name = 'schema_migrations'").get()?.n??0)>0?"present":"absent"}catch{return"unknown"}}function gl(e){try{return{kind:"rows",rows:e.prepare("SELECT seq, slot, name, outcome, applied_by, applied_at_ms, duration_ms, ddl FROM schema_migrations ORDER BY seq").all()}}catch(t){let n=YT(e);return n==="absent"?{kind:"none"}:{kind:"unreadable",reason:v(t),tableConfirmed:n==="present"}}}function of(e){let t=gl(e);return t.kind==="rows"?t.rows:void 0}function Mr(e,t){e.prepare(`INSERT INTO schema_migrations (slot, name, outcome, applied_by, applied_at_ms, duration_ms, ddl)
		 VALUES (?, ?, ?, ?, ?, ?, ?)`).run(t.slot,t.name,t.outcome,t.appliedBy,t.atMs,t.durationMs,t.ddl)}function XT(e){let t=new Map;for(let n of e){let r=t.get(n.name);(!r||n.seq>r.seq)&&t.set(n.name,n)}return t}function zT(e){let t=new Map;for(let n of e){if(n.outcome!=="applied")continue;let r=t.get(n.name);(!r||n.seq>r.seq)&&t.set(n.name,n)}return t}function QT(e){return Hn.findIndex(t=>t.name===e)}function ZT(e){let t=gl(e);if(t.kind==="none")return;if(t.kind==="unreadable"){Fn.has(sf)||(Fn.add(sf),mt.warn(t.tableConfirmed?"the schema_migrations table exists but could not be read (%s) \u2014 drift verification is skipped; run `jolli doctor --schema-log`":"the database could not be queried for its migration log (%s) \u2014 drift verification is skipped; run `jolli doctor --schema-log`",t.reason));return}let n=t.rows,r=new Set(Hn.map(o=>o.name));for(let[o,s]of XT(n))r.has(o)||Fn.has(o)||(Fn.add(o),mt.warn("migration %s was touched by %s but is unknown to this build (%s) \u2014 the database has been opened by another build",o,s.applied_by,Ge));for(let[o,s]of zT(n))r.has(o)&&(Fn.has(o)||s.ddl!==Hn[QT(o)].ddl&&(Fn.add(o),mt.warn("migration %s (slot %d) was applied by %s on %s with DIFFERENT DDL than this build (%s) carries \u2014 run `jolli doctor --schema-log` to see the log",o,s.slot,s.applied_by,new Date(s.applied_at_ms).toISOString().slice(0,10),Ge)))}function ek(e,t={}){let n=t.now??Date.now,r=t.appliedBy??Ge,o=jr(e),s=gl(e),i=new Set,a=[];if(s.kind==="rows")for(let d of s.rows)(d.outcome==="applied"||d.outcome==="baseline")&&i.add(d.name);else{let d=Math.min(o,Hn.length),p=Hn.slice(0,d).map((f,h)=>({slot:h,name:f.name,ddl:f.ddl}));for(let f of p)i.add(f.name);s.kind==="none"?a=p:mt.warn(s.tableConfirmed?"the schema_migrations table exists but could not be read (%s) \u2014 migrating from the version stamp and recording nothing":"the database could not be queried for its migration log (%s) \u2014 migrating from the version stamp and recording nothing",s.reason)}let l=Hn.map((d,p)=>({m:d,slot:p})).filter(({m:d})=>!i.has(d.name));if(l.length===0)return;let c=[],u=()=>{for(let d of a)Mr(e,{...d,outcome:"baseline",appliedBy:r,atMs:n(),durationMs:0});a=[];for(let d of c)Mr(e,d);c.length=0};e.exec("PRAGMA foreign_keys = OFF");try{for(let{m:d,slot:p}of l){let f=n();e.exec("BEGIN IMMEDIATE");try{let h=of(e);if(h?.some(b=>b.name===d.name&&(b.outcome==="applied"||b.outcome==="baseline"))){u(),Mr(e,{slot:p,name:d.name,outcome:"skipped",appliedBy:r,atMs:n(),durationMs:0,ddl:d.ddl}),e.exec("COMMIT");continue}if(!h&&jr(e)>p){e.exec("COMMIT");continue}e.exec(d.ddl);let w={slot:p,name:d.name,outcome:"applied",appliedBy:r,atMs:n(),durationMs:n()-f,ddl:d.ddl};of(e)?(u(),Mr(e,w)):c.push(w);let T=Math.max(jr(e),p+1);tk(e,"schema_version",String(T)),e.exec("COMMIT")}catch(h){try{e.exec("ROLLBACK")}catch{}try{e.prepare("DELETE FROM schema_migrations WHERE name = ? AND outcome = 'failed'").run(d.name),Mr(e,{slot:p,name:d.name,outcome:"failed",appliedBy:r,atMs:n(),durationMs:n()-f,ddl:d.ddl})}catch(w){mt.debug("could not record the failed migration %s: %s",d.name,v(w))}throw h}}}finally{e.exec("PRAGMA foreign_keys = ON")}mt.info("dashboard schema migrated %d \u2192 %d (%s)",o,jr(e),l.map(({m:d})=>d.name).join(", "))}function tk(e,t,n){e.prepare(`INSERT INTO schema_meta (key, value) VALUES (?, ?)
		 ON CONFLICT(key) DO UPDATE SET value = excluded.value`).run(t,n)}function nk(e){af!==e&&(af=e,mt.warn("database is at format v%d, this build (%s) reads v%d \u2014 data written by newer builds is not visible here",e,Ge,lf))}function rk(e){let t=(0,ps.dirname)(e);try{(0,ft.mkdirSync)(t,{recursive:!0,mode:448}),((0,ft.statSync)(t).mode&511)!==448&&(0,ft.chmodSync)(t,448)}catch(n){mt.warn("could not restrict %s to owner-only: %s",t,v(n))}}function ok(e){for(let t of[e,`${e}-wal`,`${e}-shm`])try{((0,ft.statSync)(t).mode&511)!==384&&(0,ft.chmodSync)(t,384)}catch(n){Gt(n)||mt.warn("could not restrict %s to 0600: %s",t,v(n))}}async function cf(e,t){if(!Dt())throw new hl(process.versions.node);let n=t.dbPath??Un(),r=t.maxAttempts??4,o=t.baseDelayMs??50;e||rk(n);let{DatabaseSync:s}=await import("node:sqlite");for(let i=1;;i++){let a;try{a=new s(n,{readOnly:e});for(let l of e?KT:qT)a.exec(l);return a.exec(`PRAGMA busy_timeout = ${t.busyTimeoutMs??VT}`),e||ok(n),a}catch(l){try{a?.close()}catch{}if(Yt(l)?.kind!=="locked"||i>=r)throw l;await new Promise(c=>setTimeout(c,o*2**(i-1)))}}}async function yl(e,t={}){let n=await cf(!1,t);try{let r=jr(n);return r>lf&&nk(r),ZT(n),ek(n),await e(n)}finally{n.close()}}async function wl(e,t={}){let n=await cf(!0,t);try{return await e(n)}finally{n.close()}}function bl(e,t){e.exec("BEGIN IMMEDIATE");try{let n=t();return e.exec("COMMIT"),n}catch(n){try{e.exec("ROLLBACK")}catch{}throw n}}var ft,ps,mt,lf,$r,hl,qT,KT,VT,Hn,Fn,sf,af,Nt=g(()=>{"use strict";ft=require("node:fs"),ps=require("node:path");$n();ne();We();y();us();mt=m("DashboardDb"),lf=7,$r={major:22,minor:13};hl=class extends Error{constructor(t){super(`The Jolli dashboard needs Node >= ${$r.major}.${$r.minor} for built-in SQLite (running ${t}). Upgrade Node, or run the CLI with --experimental-sqlite.`),this.name="DashboardRuntimeError"}},qT=["PRAGMA journal_mode = WAL","PRAGMA foreign_keys = ON"],KT=["PRAGMA foreign_keys = ON"],VT=2e3,Hn=[{name:"BASELINE_DDL",ddl:Xm+`
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
`+rf},{name:"RECALL_RECEIPTS_DDL",ddl:zm},{name:"SKILL_CONTEXT_KIND_DDL",ddl:Qm},{name:"EVENT_FAILED_KIND_DDL",ddl:Zm},{name:"TOOL_CALL_TIME_DDL",ddl:ef},{name:"SCHEMA_MIGRATIONS_DDL",ddl:tf},{name:"REPOS_DELETE_ALLOWED_DDL",ddl:nf}];Fn=new Set,sf="\0unreadable-log";af=0});function Sl(e){let t=s=>{try{return(0,Fr.statSync)(`${e}${s}`),!0}catch{return!1}},n=t(""),r=t("-wal"),o=t("-shm");return n?r&&o?"healthy-active":r?"healthy-recoverable":"healthy-clean":r||o?"alarm-sidecars-only":"absent"}var Fr,NM,El=g(()=>{"use strict";Fr=require("node:fs");y();NM=m("DbDetection")});async function ik(e){try{let n=await il(e);if(n&&!n.startsWith("file:"))return{identity:n,remoteUrl:n}}catch(n){sk.debug("no canonical remote for %s (%s) \u2014 using path identity",e,v(n))}return{identity:`local:${(0,df.createHash)("sha256").update(He(e)).digest("hex").slice(0,32)}`}}async function Qt(e){return ik(await zi(e))}var df,sk,Zt=g(()=>{"use strict";df=require("node:crypto");aa();ue();cs();Be();we();ne();y();sk=m("RepoRegistry")});var pf={};cr(pf,{hasCutoverRow:()=>dk,resetCutoverRouterCaches:()=>lk,resolveCutoverRoute:()=>Hr});function lk(){Tl.clear()}async function ck(e){let t=Tl.get(e);if(t!==void 0)return t;let{identity:n}=await Qt(e);return Tl.set(e,n),n}async function uf(e,t){if(!Dt())return{kind:"unavailable",reason:`Node ${process.versions.node} lacks flag-free node:sqlite`};let n=Sl(t);if(n==="alarm-sidecars-only")return{kind:"unavailable",reason:"database file missing but WAL/SHM remain \u2014 run jolli doctor --recover"};if(n==="absent")return{kind:"unavailable",reason:"database file does not exist"};try{let{DatabaseSync:r}=await import("node:sqlite"),o=new r(t,{readOnly:!0});try{let s=await ck(e),i=o.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(s);if(!i)return{kind:"no-row"};let a=o.prepare("SELECT value FROM repo_state WHERE repo_id = ? AND key = 'cutover'").get(i.id);return a?{kind:"row",record:JSON.parse(a.value)}:{kind:"no-row"}}finally{o.close()}}catch(r){return{kind:"unavailable",reason:v(r)}}}async function dk(e,t={}){return(await uf(e,t.dbPath??Un())).kind==="row"}async function Hr(e,t={}){let n=await Er(e).catch(()=>null),r=await uf(e,t.dbPath??Un());return r.kind==="row"?{state:"cutover",record:r.record}:n!==null?r.kind==="no-row"?{state:"legacy-fenced"}:{state:"blocked",reason:r.reason}:r.kind==="unavailable"?(ak.warn("database unavailable for un-cutover repo (%s) \u2014 orphan remains authoritative",r.reason),{state:"uncutover",warning:r.reason}):{state:"uncutover"}}var ak,Tl,ms=g(()=>{"use strict";lt();y();Nt();El();Zt();ak=m("CutoverRouter"),Tl=new Map});var ht,fs=g(()=>{"use strict";y();ue();lt();ht=class{constructor(t){this.cwd=t;this.kind="orphan-branch"}async readFile(t){return Vi(De,t,this.cwd)}async batchReadFiles(t){return Yi(De,t,this.cwd)}async writeFiles(t,n){if(q())return;if(await Er(this.cwd??process.cwd()).catch(()=>null)!==null)throw new Error("orphan branch is frozen (cutover fence in place) \u2014 this process holds a pre-cutover storage object; restart it so writes route to the database");let{hasCutoverRow:o}=await Promise.resolve().then(()=>(ms(),pf));if(await o(this.cwd??process.cwd()).catch(()=>!1))throw new Error("orphan branch is retired for this repository (cutover committed) \u2014 writes route to the database; re-run the operation from an up-to-date surface");await this.ensure(),await Yd(De,t,n,this.cwd)}async listFiles(t){return[...await Xi(De,t,this.cwd)]}async exists(){return qi(De,this.cwd)}async ensure(){await Ki(De,this.cwd)}}});function Ur(e){return e.version>=4}function uk(e){return[...e??[]].reverse()}function Jn(e){let t=uk(e.children).flatMap(Jn),n=(e.topics??[]).map(r=>({...r,commitDate:e.commitDate,generatedAt:e.generatedAt}));return[...t,...n]}function mf(e){let t=e.stats,n=t?.filesChanged??0,r=t?.insertions??0,o=t?.deletions??0;for(let s of e.children??[]){let i=mf(s);n+=i.filesChanged,r+=i.insertions,o+=i.deletions}return{filesChanged:n,insertions:r,deletions:o}}function Jr(e){return e.diffStats?e.diffStats:(e.children?.length??0)>0?mf(e):e.stats??{filesChanged:0,insertions:0,deletions:0}}function kl(e){let t=e.conversationTurns??0,n=(e.children??[]).reduce((r,o)=>r+kl(o),0);return t+n}function Rl(e){let t=e.conversationTokens??0,n=(e.children??[]).reduce((r,o)=>r+Rl(o),0);return t+n}function vl(e){let t=e.conversationTokenBreakdown,n={input:t?.input??0,output:t?.output??0,cached:t?.cached??0};return(e.children??[]).reduce((r,o)=>{let s=vl(o);return{input:r.input+s.input,output:r.output+s.output,cached:r.cached+s.cached}},{input:n.input,output:n.output,cached:n.cached})}function _l(e){let t=e.topics?.length??0,n=(e.children??[]).reduce((r,o)=>r+_l(o),0);return t+n}function hs(e){let t=[],n=r=>{if(!r.children?.length)t.push(r);else for(let o of r.children)n(o)};for(let r of e.children??[])n(r);return t}function gs(e){return Ur(e)?(e.topics??[]).map(t=>({...t,commitDate:e.commitDate,generatedAt:e.generatedAt})):Jn(e)}function Br(e){let t=[e.commitHash];for(let n of e.children??[])t.push(...Br(n));return t}function Lt(e,t){return e.transcripts!==void 0?e.transcripts:Br(e).filter(n=>t.has(n))}function pk(e){let t=hs(e);return t.length<=1?1:new Set(t.map(r=>new Date(r.generatedAt||r.commitDate).toISOString().substring(0,10))).size}function ff(e){let t=pk(e),n=t===1?"1 day":`${t} days`,r=hs(e);if(r.length<=1)return n;let o=r.map(l=>new Date(l.generatedAt||l.commitDate).getTime()),s=new Date(Math.min(...o)),i=new Date(Math.max(...o)),a=l=>l.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});return`${n} (${a(s)} \u2014 ${a(i)})`}var Mt=g(()=>{"use strict"});var hf=g(()=>{"use strict";ue()});function ys(e,t,n){let r=new Map;for(let o of e??[])r.set(n(o),o);for(let o of t??[])r.set(n(o),o);return[...r.values()]}var gf,ws,xl=g(()=>{"use strict";gf=/-[0-9a-f]{8}$/;ws={plan:e=>e.slug,note:e=>e.id,reference:e=>e.archivedKey}});function wf(e){return e.summaryError===mk}function bf(e){return e.summaryError!==void 0||e.llm?.stopReason==="error"}var yf,mk,Cl=g(()=>{"use strict";yf="llm-failed",mk="local-agent-auth"});function en(e){return Wr[e]?.label??"Local agent"}function Sf(e){return Wr[e]?.loginHint??"Sign in to your local agent CLI."}function Ef(e){let t=Wr[e]?.separateDesktopApp;return t===void 0?null:`(This login is SEPARATE from ${t} \u2014 ${t} stays signed in on its own.)`}var Wr,bs=g(()=>{"use strict";Wr={"claude-code":{label:"Claude Code",loginHint:"Run `claude` once and sign in to your subscription.",separateDesktopApp:"Claude Desktop"},codex:{label:"Codex",loginHint:"Run `codex login` to sign in with your ChatGPT plan.",separateDesktopApp:"the ChatGPT app"},"cursor-agent":{label:"Cursor",loginHint:"Run `cursor-agent login` to sign in to Cursor."},opencode:{label:"OpenCode",loginHint:"Run `opencode auth login` to connect a provider."},kimi:{label:"Kimi Code",loginHint:"Run `kimi login` to sign in to your Moonshot account."}}});function hk(e){return fk.has(e)}function Al(e){return hk(e.source)?`${e.nativeId} \u2014 ${e.title}`:e.title}var fk,Pl=g(()=>{"use strict";Go();fk=new Set(["linear","jira","github"])});var Il=g(()=>{"use strict"});function B(e){return e.generatedAt||e.commitDate}function kf(e){try{return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch{return e}}function Ol(e){try{return new Date(e).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})}catch{return e}}function Tf(e){return e.substring(0,10)}function yk(e){return[...e].sort((t,n)=>{let r=Tf(t.generatedAt||t.commitDate||""),o=Tf(n.generatedAt||n.commitDate||"");if(r!==o)return r>o?-1:1;let s=t.importance==="minor"?1:0,i=n.importance==="minor"?1:0;return s-i})}function Rf(e){return String(e+1).padStart(2,"0")}function bk(e,t){return t==="local-agent"?e.localAgentTool?`Local agent - ${en(e.localAgentTool)}`:"Local agent":wk[t]}function vf(e){let t=new Set,n=o=>{let s=o.llm;s?.source&&t.add(bk(s,s.source));for(let i of o.children??[])n(i)};n(e);let r=[...t];if(r.length!==0)return r.length===1?r[0]:`mixed: ${r.join(", ")}`}function _f(e){let t=hs(e),n=gs(e);return{topics:yk(n.map((o,s)=>({...o,treeIndex:s}))),sourceNodes:t}}var wk,Ss=g(()=>{"use strict";bs();Pl();Mt();Il();wk={"anthropic-config":"Anthropic","anthropic-env":"Anthropic (env)","jolli-proxy":"Jolli proxy","local-agent":"Local agent"}});function Es(e){return Sk.exec(e)?.[1]??null}var Sk,Dl=g(()=>{"use strict";Sk=/^transcripts\/(.+)\.json$/});var Kf={};cr(Kf,{AmbiguousHashError:()=>Kr,ORPHAN_WRITE_REQUIRED_TIMEOUT_MS:()=>Nl,collectChildE2eScenarios:()=>Rs,collectChildJolliMeta:()=>As,collectChildNotes:()=>_s,collectChildPlans:()=>vs,collectChildReferences:()=>xs,collectChildSkills:()=>Cs,collectChildSkillsDocMeta:()=>Lf,deleteNoteVisibleArtifact:()=>zk,deletePlanVisibleArtifact:()=>Vk,deleteTranscript:()=>Nk,expandSourcesForConsolidation:()=>Ak,getActiveStorage:()=>Tk,getCatalog:()=>Bk,getCatalogWithLazyBuild:()=>Wk,getIndex:()=>Xr,getIndexEntryMap:()=>$k,getSummary:()=>Bf,getSummaryCount:()=>Wf,getTranscriptHashes:()=>$l,indexNeedsMigration:()=>Hk,listSummaries:()=>Mk,listSummaryHashes:()=>jk,loadCatalog:()=>gt,mergeManyToOne:()=>Pk,migrateIndexToV3:()=>Uk,migrateOneToOne:()=>_k,normalizeToV4:()=>Ml,readNoteFromBranch:()=>Qk,readPlanFromBranch:()=>Kk,readPlanProgress:()=>Yk,readReferenceFromBranch:()=>nR,readSkillFromBranch:()=>tR,readTranscript:()=>Uf,readTranscriptsForCommits:()=>Dk,removeFromIndex:()=>Ok,resolveEffectiveRecap:()=>jl,resolveEffectiveTopics:()=>Ps,resolveReadStorage:()=>Cf,resolveStorage:()=>H,saveTranscriptsBatch:()=>Jf,scanTreeHashAliases:()=>Fk,setActiveStorage:()=>Ek,storeNotes:()=>Xk,storePlans:()=>qk,storeReferences:()=>Zk,storeSkills:()=>eR,storeSummary:()=>vk,stripFunctionalMetadata:()=>Is,toCatalogEntry:()=>tn,withDeferrableOrphanWriteLock:()=>ks,withRequiredOrphanWriteLock:()=>ke});function Ek(e){Gr=e}function Tk(){return Gr}async function xf(e){let t=await Ds(e);return t.ok?t.storage:(L.warn("system-of-record unavailable (%s) \u2014 falling back to the orphan branch. cwd=%s",t.reason,e),new ht(e))}async function H(e,t){return e||Gr||(process.env.VITEST||L.warn("resolveStorage fell back to the system of record \u2014 caller did not thread storage or call setActiveStorage. The Memory Bank side will miss this write. cwd=%s",t??"(undef)"),xf(t))}async function Cf(e,t){return e??Gr??await xf(t)}async function ke(e,t,n){if(Pn(e))return await n();if(!await yr(e,{timeoutMs:Nl}))throw new Fo(t,Nl);try{return await In(e,n)}finally{await wr(e)}}async function ks(e,t,n){if(Pn(e))return await n();if(!await yr(e,{timeoutMs:Af}))return await t();try{return await In(e,n)}finally{await wr(e)}}function qr(e){return e.parentCommitHash==null}function kk(e,t){if(!e&&!t)return null;if(!t)return e;if(!e)return t;let n=new Map;for(let o of t.entries)n.set(o.commitHash,o);for(let o of e.entries)n.set(o.commitHash,o);let r={...t.commitAliases??{},...e.commitAliases??{}};return{version:e.version,entries:[...n.values()],...Object.keys(r).length>0&&{commitAliases:r}}}function Rk(e,t){if(!e&&!t)return null;if(!t)return e;if(!e)return t;let n=new Map;for(let r of t.entries)n.set(r.commitHash,r);for(let r of e.entries)n.set(r.commitHash,r);return{version:e.version,entries:[...n.values()]}}async function vk(e,t,n=!1,r,o,s){q()||await ke(t,"storeSummary",async()=>{let i=await z(t,o),a=await gt(t,o),l=s!==void 0&&s!==o,c=l?await z(t,s):null,u=l?await gt(t,s):null,d=l?kk(i,c):i,p=l?Rk(a,u):a,f=d?.entries?[...d.entries]:[],h=new Map(f.map(I=>[I.commitHash,I])),w=new Set;if(l&&c){let I=new Set(i?.entries.map(F=>F.commitHash)??[]);for(let F of c.entries)I.has(F.commitHash)||w.add(F.commitHash)}if(!n&&h.has(e.commitHash)){L.info("Summary for commit %s already exists \u2014 skipping (use force to overwrite)",e.commitHash.substring(0,8));return}let T=await Yr(e,null,t,h);for(let I of T)h.set(I.commitHash,I);let b={version:3,entries:[...h.values()],commitAliases:d?.commitAliases},k=n?"Overwrite":"Add",R=[{path:`summaries/${e.commitHash}.json`,content:JSON.stringify(e,null,"	")},{path:nn,content:JSON.stringify(b,null,"	")},Fl(p,h,e)];if(r?.transcript&&r.transcript.data.sessions.length>0&&R.push({path:`transcripts/${r.transcript.id}.json`,content:JSON.stringify(r.transcript.data,null,"	")}),r?.planProgress)for(let I of r.planProgress)R.push({path:`plan-progress/${I.planSlug}.json`,content:JSON.stringify(I,null,"	")});if(w.size>0&&s)for(let I of w){if(I===e.commitHash)continue;let F=`summaries/${I}.json`,ge=`transcripts/${I}.json`,Pe=await s.readFile(F);Pe!==null&&R.push({path:F,content:Pe});let Ie=await s.readFile(ge);Ie!==null&&R.push({path:ge,content:Ie})}await(await H(o,t)).writeFiles(R,`${k} summary for ${e.commitHash.substring(0,8)}: ${e.commitMessage.substring(0,50)}`),L.info("Summary stored successfully for commit %s",e.commitHash.substring(0,8))})}async function _k(e,t,n,r,o){await ke(n,"migrateOneToOne",()=>xk(e,t,n,r,o))}async function xk(e,t,n,r,o){L.info("Migrating summary 1:1: %s \u2192 %s",e.commitHash.substring(0,8),t.hash.substring(0,8));let s=Is(e),i=e.jolliDocUrl,a=await jo(`${t.hash}^`,t.hash,n).catch(()=>({filesChanged:0,insertions:0,deletions:0})),l=Ps(e),c=jl(e),u=await $l(n,o),d=Lt(e,u),p={version:pa,commitHash:t.hash,commitMessage:t.message,commitAuthor:t.author,commitDate:t.date,branch:e.branch,generatedAt:new Date().toISOString(),commitType:r?.commitType??"rebase",...r?.commitSource&&{commitSource:r.commitSource},...e.ticketId&&{ticketId:e.ticketId},...e.jolliDocId&&{jolliDocId:e.jolliDocId},...i&&{jolliDocUrl:i},...e.jolliSkillsDocId&&{jolliSkillsDocId:e.jolliSkillsDocId},...e.jolliSkillsDocUrl&&{jolliSkillsDocUrl:e.jolliSkillsDocUrl},...e.orphanedDocIds&&{orphanedDocIds:e.orphanedDocIds},...e.unresolvedOrphanHashes&&{unresolvedOrphanHashes:e.unresolvedOrphanHashes},...e.plans&&{plans:e.plans},...e.notes&&{notes:e.notes},...e.references&&{references:e.references},...e.e2eTestGuide&&{e2eTestGuide:e.e2eTestGuide},...e.skills&&{skills:e.skills},...bf(e)&&{summaryError:yf},topics:l,...c!==void 0?{recap:c}:{},transcripts:d,diffStats:a,children:[s]},f=await z(n,o),h=await gt(n,o),w=f?.entries?[...f.entries]:[],T=new Map(w.map(I=>[I.commitHash,I]));if(T.has(t.hash)){L.info("New hash %s already in index, skipping migration",t.hash.substring(0,8));return}let b=await Yr(p,null,n,T);for(let I of b)T.set(I.commitHash,I);let k={version:3,entries:[...T.values()],commitAliases:f?.commitAliases},R=[{path:`summaries/${p.commitHash}.json`,content:JSON.stringify(p,null,"	")},{path:nn,content:JSON.stringify(k,null,"	")},Fl(h,T,p)];await(await H(o,n)).writeFiles(R,`Migrate summary ${e.commitHash.substring(0,8)} \u2192 ${t.hash.substring(0,8)}`),L.info("Summary migrated: %s \u2192 %s",e.commitHash.substring(0,8),t.hash.substring(0,8))}function Rs(e){let t=[];for(let n of e)n.e2eTestGuide&&t.push(...n.e2eTestGuide),n.children&&t.push(...Rs(n.children));return t}function Pf(e){let{e2eTestGuide:t,...n}=e;return n.children?{...n,children:n.children.map(Pf)}:n}function vs(e){let t=new Map;for(let n of e){if(n.plans)for(let r of n.plans){let o=r.slug,s=t.get(o);(!s||r.updatedAt>s.updatedAt)&&t.set(o,r)}if(n.children)for(let r of vs(n.children)){let o=t.get(r.slug);(!o||r.updatedAt>o.updatedAt)&&t.set(r.slug,r)}}return[...t.values()]}function If(e){let{plans:t,...n}=e;return n.children?{...n,children:n.children.map(If)}:n}function _s(e){let t=new Map;for(let n of e){if(n.notes)for(let r of n.notes){let o=t.get(r.id);(!o||r.updatedAt>o.updatedAt)&&t.set(r.id,r)}if(n.children)for(let r of _s(n.children)){let o=t.get(r.id);(!o||r.updatedAt>o.updatedAt)&&t.set(r.id,r)}}return[...t.values()]}function Of(e){let{notes:t,...n}=e;return n.children?{...n,children:n.children.map(Of)}:n}function Df(e){let{references:t,...n}=e;return n.children?{...n,children:n.children.map(Df)}:n}function xs(e){let t=new Map;for(let n of e){let r=n.references??[];for(let o of r){let s=t.get(o.archivedKey);(!s||o.referencedAt>s.referencedAt)&&t.set(o.archivedKey,o)}if(n.children)for(let o of xs(n.children)){let s=t.get(o.archivedKey);(!s||o.referencedAt>s.referencedAt)&&t.set(o.archivedKey,o)}}return[...t.values()]}function Cs(e){let t=[];for(let n of e)t.push(...n.skills??[]),n.children&&t.push(...Cs(n.children));return _a(t)}function Nf(e){let{jolliDocId:t,jolliDocUrl:n,jolliSkillsDocId:r,jolliSkillsDocUrl:o,orphanedDocIds:s,unresolvedOrphanHashes:i,...a}=e;return a.children?{...a,children:a.children.map(Nf)}:a}function As(e){let t=[];for(let o of e){let s=o.jolliDocUrl;if(o.jolliDocId&&s&&t.push({jolliDocId:o.jolliDocId,jolliDocUrl:s,commitDate:o.commitDate,generatedAt:o.generatedAt}),o.children){let i=As(o.children);i.winner&&t.push({...i.winner})}}if(t.length===0)return{winner:null,orphanedDocIds:[]};t.sort((o,s)=>new Date(B(s)).getTime()-new Date(B(o)).getTime());let n=t[0],r=t.slice(1).map(o=>o.jolliDocId);return{winner:n,orphanedDocIds:r}}function Lf(e){let{winner:t,orphanedDocIds:n}=Mf(e);return{winner:t&&{jolliSkillsDocId:t.jolliSkillsDocId,jolliSkillsDocUrl:t.jolliSkillsDocUrl},orphanedDocIds:n}}function Mf(e){let t=[];for(let o of e){let s=o.jolliSkillsDocUrl;if(o.jolliSkillsDocId&&s&&t.push({jolliSkillsDocId:o.jolliSkillsDocId,jolliSkillsDocUrl:s,commitDate:o.commitDate,generatedAt:o.generatedAt}),o.children){let i=Mf(o.children);i.winner&&t.push(i.winner)}}if(t.length===0)return{winner:null,orphanedDocIds:[]};t.sort((o,s)=>new Date(B(s)).getTime()-new Date(B(o)).getTime());let[n,...r]=t;return{winner:n,orphanedDocIds:r.map(o=>o.jolliSkillsDocId)}}function jf(e){let t=[];for(let n of e??[])n.orphanedDocIds&&t.push(...n.orphanedDocIds),t.push(...jf(n.children));return t}function Ll(e){let t=[];for(let n of e??[])n.unresolvedOrphanHashes&&t.push(...n.unresolvedOrphanHashes),t.push(...Ll(n.children));return t}function Ml(e){if(e.version>=4)return e;let t=Rs([e]),n=vs([e]),r=_s([e]),o=xs([e]),s=Cs([e]),i=s.map(va),a=As([e]),l=Array.from(new Set([...a.orphanedDocIds,...e.orphanedDocIds??[],...jf(e.children),...s.flatMap(w=>w.supersededDocIds??[])])),c=Array.from(new Set([...e.unresolvedOrphanHashes??[],...Ll(e.children)])),u=Ps(e),d=jl(e),p=e.diffStats===void 0&&e.stats!==void 0?Jr(e):void 0,{stats:f,...h}=e;return{...h,version:4,topics:u,...d!==void 0?{recap:d}:{},...p!==void 0?{diffStats:p}:{},...t.length>0?{e2eTestGuide:t}:{},...n.length>0?{plans:n}:{},...r.length>0?{notes:r}:{},...o.length>0?{references:o}:{},...i.length>0?{skills:i}:{},...a.winner?{jolliDocId:a.winner.jolliDocId,jolliDocUrl:a.winner.jolliDocUrl}:{},...l.length>0?{orphanedDocIds:l}:{},...c.length>0?{unresolvedOrphanHashes:c}:{},...e.children!==void 0?{children:e.children.map(Is)}:{}}}function $f(e){let{topics:t,...n}=e;return n.children?{...n,children:n.children.map($f)}:n}function Ff(e){let{recap:t,...n}=e;return n.children?{...n,children:n.children.map(Ff)}:n}function Ps(e){return Ur(e)?e.topics??[]:Jn(e).map(({commitDate:t,generatedAt:n,treeIndex:r,...o})=>o)}function jl(e){return Ur(e)||e.recap?e.recap:Ck(e.children)}function Ck(e){if(!e||e.length===0)return;let t=[];if(Hf(e,t),t.length!==0)return t.sort((n,r)=>new Date(r.date).getTime()-new Date(n.date).getTime()),t[0]?.recap}function Hf(e,t){for(let n of e)n.recap&&t.push({recap:n.recap,date:B(n)}),n.children&&Hf(n.children,t)}function Ak(e){if(Ur(e))return[{commitHash:e.commitHash,commitMessage:e.commitMessage,commitDate:e.commitDate,...e.ticketId&&{ticketId:e.ticketId},topics:e.topics??[],...e.recap&&{recap:e.recap}}];let t=(e.children??[]).map(r=>({commitHash:r.commitHash,commitMessage:r.commitMessage,commitDate:r.commitDate,...r.ticketId&&{ticketId:r.ticketId},topics:Ps(r),...r.recap&&{recap:r.recap}}));return((e.topics?.length??0)>0||e.recap)&&t.push({commitHash:e.commitHash,commitMessage:e.commitMessage,commitDate:e.commitDate,...e.ticketId&&{ticketId:e.ticketId},topics:e.topics??[],...e.recap&&{recap:e.recap}}),t}function Is(e){return Nf(Df(Of(If(Pf($f(Ff(e)))))))}async function Pk(e,t,n,r){return ke(n,"mergeManyToOne",()=>Ik(e,t,n,r))}async function Ik(e,t,n,r){let{metadata:o,consolidated:s,storage:i,extraRefs:a,extraSkills:l}=r??{};L.info("Merging %d summaries into %s",e.length,t.hash.substring(0,8));let c=[...e].sort((W,x)=>new Date(B(x)).getTime()-new Date(B(W)).getTime()),u=Rs(c),d=ys(vs(c),a?.plans,ws.plan),p=ys(_s(c),a?.notes,ws.note),f=ys(xs(c),a?.references,ws.reference),h=_a([...Cs(c),...l??[]]),w=h.map(va),T=As(c),b=Lf(c),k=c.flatMap(W=>W.orphanedDocIds??[]),R=h.flatMap(W=>W.supersededDocIds??[]),j=[...T.orphanedDocIds,...b.orphanedDocIds,...k,...R],I=Array.from(new Set([...c.filter(W=>!W.jolliDocId).map(W=>W.commitHash),...Ll(c)])),F=c.map(Is),ge=await jo(`${t.hash}^`,t.hash,n).catch(()=>({filesChanged:0,insertions:0,deletions:0})),Pe=s?.topics??[],Ie=s?.recap,Rt=s?.ticketId,Wt=s?.llm,vt=s?.summaryError,xd=await $l(n,i),hn=Array.from(new Set(c.flatMap(W=>Lt(W,xd)))),rt={version:pa,commitHash:t.hash,commitMessage:t.message,commitAuthor:t.author,commitDate:t.date,branch:e[0].branch,generatedAt:new Date().toISOString(),...o?.commitType&&{commitType:o.commitType},...o?.commitSource&&{commitSource:o.commitSource},...Rt&&{ticketId:Rt},...Wt&&{llm:Wt},...vt&&{summaryError:vt},...u.length>0&&{e2eTestGuide:u},...d.length>0&&{plans:d},...p.length>0&&{notes:p},...f.length>0&&{references:f},...w.length>0&&{skills:w},...T.winner&&{jolliDocId:T.winner.jolliDocId,jolliDocUrl:T.winner.jolliDocUrl},...b.winner&&b.winner,...j.length>0&&{orphanedDocIds:j},...I.length>0&&{unresolvedOrphanHashes:I},topics:Pe,...Ie&&{recap:Ie},transcripts:hn,diffStats:ge,children:F},_t=await z(n,i),gn=await gt(n,i),yn=_t?.entries?[..._t.entries]:[],ot=new Map(yn.map(W=>[W.commitHash,W]));if(ot.has(t.hash))return L.info("New hash %s already in index, skipping merge",t.hash.substring(0,8)),{orphanedDocIds:[]};let Cd=await Yr(rt,null,n,ot);for(let W of Cd)ot.set(W.commitHash,W);let Fi={version:3,entries:[...ot.values()],commitAliases:_t?.commitAliases},lr=e.map(W=>W.commitHash.substring(0,8)).join(", "),Co=[{path:`summaries/${rt.commitHash}.json`,content:JSON.stringify(rt,null,"	")},{path:nn,content:JSON.stringify(Fi,null,"	")},Fl(gn,ot,rt)];return await(await H(i,n)).writeFiles(Co,`Merge summaries [${lr}] \u2192 ${t.hash.substring(0,8)}`),L.info("Summaries merged: [%s] \u2192 %s (%d children, %d orphaned docs, %d unresolved orphan hashes)",lr,t.hash.substring(0,8),c.length,j.length,I.length),{orphanedDocIds:j}}async function Ok(e,t,n){await ks(t,()=>{L.warn("removeFromIndex: could not acquire orphan-write lock within %dms \u2014 skipping removal of %s",Af,e.substring(0,8))},async()=>{let r=await z(t,n);if(!r)return;let o=r.entries.filter(u=>u.commitHash!==e);if(o.length===r.entries.length)return;let s={version:r.version,entries:o,commitAliases:r.commitAliases},i=[{path:nn,content:JSON.stringify(s,null,"	")}],a=await gt(t,n),l=Gk(a,e);l&&i.push(l),await(await H(n,t)).writeFiles(i,`Remove index entry for ${e.substring(0,8)}`),L.info("Removed %s from index",e.substring(0,8))})}async function Uf(e,t,n){let o=await(await H(n,t)).readFile(`transcripts/${e}.json`);if(!o)return null;try{return JSON.parse(o)}catch{return L.warn("Failed to parse transcript for %s",e.substring(0,8)),null}}async function Dk(e,t,n){let r=new Map;for(let o of e){let s=await Uf(o,t,n);s&&r.set(o,s)}return r}async function Jf(e,t,n,r){let o=[];for(let{hash:i,data:a}of e)o.push({path:`transcripts/${i}.json`,content:JSON.stringify(a,null,"	")});for(let i of t)o.push({path:`transcripts/${i}.json`,content:"",delete:!0});if(o.length===0||q())return;let s=[e.length>0?`${e.length} written`:"",t.length>0?`${t.length} deleted`:""].filter(Boolean).join(", ");await ke(n,"saveTranscriptsBatch",async()=>{await(await H(r,n)).writeFiles(o,`Update transcripts: ${s}`),L.info("Transcript batch: %s",s)})}async function Nk(e,t,n){await Jf([],[e],t,n)}async function $l(e,t){let r=await(await H(t,e)).listFiles("transcripts/"),o=new Set;for(let s of r){let i=Es(s);i&&o.add(i)}return o}function Lk(e,t){return t.filter(n=>n.commitHash.startsWith(e))}async function Bf(e,t,n){if(e.length===0)return null;let r=e.toLowerCase(),o=await Ke(r,t,n);if(o)return o;let s=Vf(await H(n,t));if(s){if(r.length===Ts){let c=await s.lookupAlias(r);if(c)return Ke(c,t,n)}else{let c=await s.findHashesByPrefix(r);if(c.length===1)return Ke(c[0],t,n);if(c.length>=2)throw new Kr(r,c)}let l=await fr(r,t);if(l){let c=await s.findShallowestByTreeHash(l);if(c)return Ke(c,t,n)}return null}let i=await z(t,n);if(!i)return null;if(r.length===Ts){let l=i.commitAliases?.[r];if(l)return Ke(l,t,n)}else{let l=Lk(r,i.entries);if(l.length===1)return Ke(l[0].commitHash,t,n);if(l.length>=2)throw new Kr(r,l.map(c=>c.commitHash))}if(i.version===3){let l=await fr(r,t);if(l){let c=new Map(i.entries.map(d=>[d.commitHash,d])),u=Gf(l,i.entries,c);if(u)return Ke(u.commitHash,t,n)}}return null}async function Mk(e=10,t,n){let r=await z(t,n);if(!r||r.entries.length===0)return[];let i=[...r.entries.filter(qr)].sort((l,c)=>new Date(B(c)).getTime()-new Date(B(l)).getTime()).slice(0,e),a=[];for(let l of i){let c=await Bf(l.commitHash,t,n);c&&a.push(c)}return a}async function jk(e){let t=await z(e);if(!t||t.entries.length===0)return new Set;let n=new Set(t.entries.map(r=>r.commitHash));if(t.commitAliases)for(let r of Object.keys(t.commitAliases))n.add(r);return n}async function $k(e,t){let n=await z(e,t);if(!n)return new Map;let r=new Map(n.entries.map(o=>[o.commitHash,o]));if(n.commitAliases)for(let[o,s]of Object.entries(n.commitAliases)){let i=r.get(s);i&&!r.has(o)&&r.set(o,i)}return r}async function Fk(e,t,n,r){if(q())return!1;let o=r??n,s=await z(t,o);if(!s||s.version!==3)return!1;let i=s.commitAliases??{},a=new Set(s.entries.map(u=>u.commitHash)),l=new Map(s.entries.map(u=>[u.commitHash,u])),c={};for(let u of e){if(a.has(u)||i[u])continue;let d=await fr(u,t);if(!d)continue;let p=Gf(d,s.entries,l);p&&(c[u]=p.commitHash,L.info("Tree hash match: %s \u2192 %s (treeHash: %s)",u.substring(0,8),p.commitHash.substring(0,8),d.substring(0,8)))}return Object.keys(c).length===0?!1:await ks(t,()=>(L.debug("scanTreeHashAliases: orphan-write lock contention \u2014 alias write deferred"),!1),async()=>{let u=await z(t,n);if(!u||u.version!==3)return!1;if(o!==n){let k=await z(t,o);if(k&&k.version===3){let R=new Set(u.entries.map(I=>I.commitHash)),j=k.entries.reduce((I,F)=>R.has(F.commitHash)?I:I+1,0);if(j>0)return L.warn("scanTreeHashAliases: read side has %d row(s) write side lacks \u2014 deferring alias write to avoid shadow clobber",j),!1}}let d=u.commitAliases??{},p=new Set(u.entries.map(k=>k.commitHash)),f={...d},h=0;for(let[k,R]of Object.entries(c))p.has(k)||f[k]||(f[k]=R,h++);if(h===0)return!1;let w={...u,commitAliases:f},T=[{path:nn,content:JSON.stringify(w,null,"	")}];return await(await H(n,t)).writeFiles(T,`Add ${h} tree hash alias(es)`),!0})}async function Wf(e,t){let n=await z(e,t);return n?n.entries.filter(qr).length:0}async function Hk(e,t){let n=await z(e,t);return!n||n.entries.length===0?!1:n.version!==3}async function Uk(e,t){return ke(e,"migrateIndexToV3",()=>Jk(e,t))}async function Jk(e,t){let n=await z(e,t);if(!n)return L.info("No index found \u2014 nothing to migrate"),{migrated:0,skipped:0};if(n.version===3)return L.info("Index already at v3 \u2014 skipping migration"),{migrated:0,skipped:0};let r=0,o=0,s=new Map,i=[];for(let d of n.entries){let p=await Ke(d.commitHash,e,t);if(!p){L.warn("Could not load summary for %s \u2014 skipping",d.commitHash.substring(0,8)),o++;continue}try{let f=await Yr(p,null,e);for(let h of f)s.set(h.commitHash,h);i.push(tn(p)),r++}catch(f){L.warn("Failed to flatten summary for %s: %s",d.commitHash.substring(0,8),f.message),o++}}let a={version:3,entries:[...s.values()]},l={version:1,entries:i},c=[{path:nn,content:JSON.stringify(a,null,"	")},{path:Vr,content:JSON.stringify(l,null,"	")}];return await(await H(t,e)).writeFiles(c,`Migrate index v1 \u2192 v3 (${r} entries)`),L.info("Index migrated to v3: %d migrated, %d skipped",r,o),{migrated:r,skipped:o}}async function Yr(e,t,n,r){let o=await fr(e.commitHash,n)??void 0,s=t===null,i;if(s){let c=e.diffStats,u=r?.get(e.commitHash)?.diffStats,d;c?d=c:u?d=u:d=await jo(`${e.commitHash}^`,e.commitHash,n),i={topicCount:_l(e),diffStats:d}}let l=[{commitHash:e.commitHash,parentCommitHash:t,treeHash:o,commitType:e.commitType,commitMessage:e.commitMessage,commitDate:e.commitDate,branch:e.branch,generatedAt:e.generatedAt,...i&&{topicCount:i.topicCount,diffStats:i.diffStats}}];for(let c of e.children??[]){let u=await Yr(c,e.commitHash,n,r);l.push(...u)}return l}async function Ke(e,t,n){let o=await(await H(n,t)).readFile(`summaries/${e}.json`);if(!o)return null;try{return JSON.parse(o)}catch(s){return L.error("Failed to parse summary for %s: %s",e.substring(0,8),s.message),null}}function Gf(e,t,n){let r=t.filter(s=>s.treeHash===e);if(r.length===0)return null;if(r.length===1)return r[0];let o=r.map(s=>{let i=0,a=new Set,l=s;for(;l?.parentCommitHash!=null&&!a.has(l.commitHash);)a.add(l.commitHash),i++,l=n.get(l.parentCommitHash);return{entry:s,depth:i}});return o.sort((s,i)=>s.depth!==i.depth?s.depth-i.depth:new Date(B(i.entry)).getTime()-new Date(B(s.entry)).getTime()),o[0].entry}async function Xr(e,t){return z(e,t)}async function z(e,t){let n=await Cf(t,e),r=await n.readFile(nn);if(!r)return L.debug("loadIndex: no index.json in %s storage",n.kind??"unknown"),null;try{return JSON.parse(r)}catch(o){return L.error("Failed to parse index.json: %s",o.message),null}}function tn(e){let t=gs(e).map(n=>({title:n.title,...n.decisions!==void 0&&{decisions:n.decisions},...n.category!==void 0&&{category:n.category},...n.importance!==void 0&&{importance:n.importance},...n.filesAffected&&n.filesAffected.length>0&&{filesAffected:n.filesAffected}}));return{commitHash:e.commitHash,...e.recap!==void 0&&{recap:e.recap},...e.ticketId!==void 0&&{ticketId:e.ticketId},...t.length>0&&{topics:t}}}async function gt(e,t){let r=await(await H(t,e)).readFile(Vr);if(!r)return null;try{return JSON.parse(r)}catch(o){return L.error("Failed to parse catalog.json: %s",o.message),null}}async function Bk(e,t){return gt(e,t)}async function Wk(e,t){let n=await H(t,e),r=await gt(e,n)??{version:1,entries:[]},o=await z(e,n);if(!o||o.entries.length===0)return r;let s=new Set(o.entries.filter(qr).map(c=>c.commitHash)),i=new Set(r.entries.map(c=>c.commitHash)),a=r.entries.filter(c=>s.has(c.commitHash)).length,l=[];for(let c of s)i.has(c)||l.push(c);return a===r.entries.length&&l.length===0?r:await ks(e,async()=>{L.debug("getCatalogWithLazyBuild: orphan-write lock contention \u2014 returning in-memory catalog without writeback");let c=r.entries.filter(d=>s.has(d.commitHash)),u=[];for(let d of l){let p=await Ke(d,e,n);p&&u.push(tn(p))}return{version:1,entries:[...c,...u]}},async()=>{let c=await gt(e,n)??{version:1,entries:[]},u=await z(e,n);if(!u||u.entries.length===0)return c;let d=new Set(u.entries.filter(qr).map(R=>R.commitHash)),p=c.entries.filter(R=>d.has(R.commitHash)),f=new Set(p.map(R=>R.commitHash)),h=[];for(let R of d)f.has(R)||h.push(R);if(p.length===c.entries.length&&h.length===0)return c;let w=[];for(let R of h){let j=await Ke(R,e,n);j?w.push(tn(j)):L.warn("Catalog lazy build: summary file missing for root %s",R.substring(0,8))}let T={version:1,entries:[...p,...w]},b=c.entries.length-p.length,k=`catalog: reconcile (+${w.length}, -${b})`;return await n.writeFiles([{path:Vr,content:JSON.stringify(T,null,"	")}],k),T})}function Fl(e,t,n){let r=new Set([...t.values()].filter(qr).map(a=>a.commitHash)),i={version:1,entries:[...(e?.entries??[]).filter(a=>r.has(a.commitHash)&&a.commitHash!==n.commitHash),tn(n)]};return{path:Vr,content:JSON.stringify(i,null,"	")}}function Gk(e,t){if(!e)return null;let n=e.entries.filter(o=>o.commitHash!==t);return n.length===e.entries.length?null:{path:Vr,content:JSON.stringify({version:1,entries:n},null,"	")}}async function qk(e,t,n,r,o){if(e.length===0||q())return;let s=e.map(i=>({path:`plans/${i.slug}.md`,content:i.content,branch:r}));await ke(n,"storePlans",async()=>{await(await H(o,n)).writeFiles(s,t),L.info("Stored %d plan file(s)",e.length)})}async function Kk(e,t,n){try{return await(await H(n,t)).readFile(`plans/${e}.md`)}catch{return null}}async function Vk(e,t,n,r){let o=await H(r,n);o.deletePlanVisible&&await o.deletePlanVisible(e,t)}async function Yk(e,t,n){try{let o=await(await H(n,t)).readFile(`plan-progress/${e}.json`);return o?JSON.parse(o):null}catch{return null}}async function Xk(e,t,n,r,o){if(e.length===0||q())return;let s=e.map(i=>({path:`notes/${i.id}.md`,content:i.content,branch:r}));await ke(n,"storeNotes",async()=>{await(await H(o,n)).writeFiles(s,t),L.info("Stored %d note file(s)",e.length)})}async function zk(e,t,n,r){let o=await H(r,n);o.deleteNoteVisible&&await o.deleteNoteVisible(e,t)}async function Qk(e,t,n){try{return await(await H(n,t)).readFile(`notes/${e}.md`)}catch{return null}}function qf(e,t){if(!lp(e))throw new Error(`orphanPathFor: refusing unknown reference source ${JSON.stringify(e)}`);let n=`${e}:`,r=t.startsWith(n)?t.slice(n.length):t,o=ap(e,r);return`references/${e}/${o}.md`}async function Zk(e,t,n,r,o){if(e.length===0||q())return;let s=e.map(i=>({path:qf(i.source,i.archivedKey),content:i.content,branch:r}));await ke(n,"storeReferences",async()=>{await(await H(o,n)).writeFiles(s,t),L.info("Stored %d reference file(s) across sources",e.length)})}async function eR(e,t,n,r,o){if(e.length===0||q())return;let s=e.map(i=>({path:i.path,content:i.content,branch:r}));await ke(n,"storeSkills",async()=>{await(await H(o,n)).writeFiles(s,t),L.info("Stored %d skill file(s)",e.length)})}async function tR(e,t,n){try{return await(await H(n,t)).readFile(e)}catch{return null}}async function nR(e,t,n,r){let o=await H(r,n);try{return await o.readFile(qf(e,t))}catch{return null}}var Gr,L,nn,Vr,Nl,Af,Ts,Kr,Ve=g(()=>{"use strict";y();ma();ue();Be();fs();$o();xl();Rr();Ns();Os();Cl();Ss();Mt();xa();Dl();L=m("SummaryStore"),nn="index.json",Vr="catalog.json",Nl=3e4,Af=1e3;Ts=40,Kr=class extends Error{constructor(t,n){if(n.length<2)throw new Error(`AmbiguousHashError requires \u22652 matches (got ${n.length}); use null/undefined for "not found"`);if(t.length===0||t.length>=Ts)throw new Error(`AmbiguousHashError prefix must be 1..${Ts-1} chars (got length ${t.length})`);super(`abbreviation \`${t}\` is ambiguous; please use a longer prefix (matched ${n.length} commits)`),this.name="AmbiguousHashError",this.prefix=t,this.matches=n}static is(t){return t instanceof Error&&t.name==="AmbiguousHashError"&&typeof t.prefix=="string"&&Array.isArray(t.matches)}}});var D0,Yf=g(()=>{"use strict";y();Ve();D0=m("ProcessedSourceStore")});var j0,Xf=g(()=>{"use strict";y();Ve();j0=m("TopicIndexStore")});function zf(e){if(!e.startsWith("topics/")||!e.endsWith(".json"))return!1;let t=e.slice(7,-5);return t.length>0&&!t.includes("/")&&!rR.has(t)}var rR,Qf,F0,H0,Hl=g(()=>{"use strict";rR=new Set(["index","processed"]);Qf=[["summaries/",e=>e.endsWith(".json")],["transcripts/",e=>e.endsWith(".json")],["plans/",e=>e.endsWith(".md")],["notes/",e=>e.endsWith(".md")],["references/",e=>e.endsWith(".md")],["skills/",e=>e.endsWith(".md")],["plan-progress/",e=>e.endsWith(".json")],["topics/",zf]],F0=Qf.map(([e])=>e),H0=Object.fromEntries(Qf)});var G0,Zf=g(()=>{"use strict";Hl();y();Ve();G0=m("TopicPageStore")});var Q0,Z0,eh=g(()=>{"use strict";Zi();y();Nt();El();Zt();Q0=m("ImportState"),Z0=10*6e4});function yt(e){if(e==null)return null;try{return JSON.parse(e)}catch{return null}}function th(e){let t=/^#\s+(.+)$/m.exec(e);return t?t[1].trim():null}function nh(e,t,n){for(let{path:r,accepts:o}of oR){let s=e;for(let a of r){if(s==null||typeof s!="object"){s=void 0;break}s=s[a]}s==null||(o==="integer"?Number.isInteger(s):typeof s=="number")||n("off-type numeric",`${t}.${r.join(".")} is ${typeof s} (${JSON.stringify(s)}) \u2014 column reads NULL`)}}function rh(e,t,n,r){let o=Date.parse(e.commitDate??"");return Number.isFinite(o)?o:(r("commit date",`${t} has no parsable commitDate \u2014 falling back to first-seen time`),n)}function oh(e,t){let n=e.prepare("SELECT commit_hash, parent_hash, root_hash, depth FROM memories WHERE repo_id = ?").all(t),r=new Map,o=[];for(let l of n)if(l.parent_hash===null)o.push({hash:l.commit_hash,root:l.commit_hash,depth:0});else{let c=r.get(l.parent_hash)??[];c.push(l.commit_hash),r.set(l.parent_hash,c)}let s=e.prepare("UPDATE memories SET root_hash = ?, depth = ? WHERE repo_id = ? AND commit_hash = ?"),i=new Map(n.map(l=>[l.commit_hash,l])),a=0;for(;o.length>0;){let{hash:l,root:c,depth:u}=o.shift();a++;let d=i.get(l);(d.root_hash!==c||d.depth!==u)&&s.run(c,u,t,l);for(let p of r.get(l)??[])o.push({hash:p,root:c,depth:u+1})}if(a!==n.length)throw new Error(`remountRepo: ${n.length-a} node(s) unreachable from any root \u2014 cycle in batch`)}var _j,oR,sh=g(()=>{"use strict";hf();Yf();lt();Rr();Ve();Mt();Xf();Zf();y();Nt();Hl();eh();Zt();us();_j=m("SotImport");oR=[{path:["conversationTurns"],accepts:"integer"},{path:["conversationTokens"],accepts:"integer"},{path:["estimatedCostUsd"],accepts:"number"},{path:["diffStats","filesChanged"],accepts:"integer"},{path:["diffStats","insertions"],accepts:"integer"},{path:["diffStats","deletions"],accepts:"integer"}]});function iR(e){let t=[],n=(r,o,s)=>{t.push({hash:r.commitHash,parentInFile:o,pos:s,summary:r}),(r.children??[]).forEach((i,a)=>{n(i,r.commitHash,a)})};return n(e,null,null),t}function aR(e){let t={summaryDeletes:[],summaryTrees:[],transcriptWrites:[],transcriptDeletes:[],contextWrites:[],contextDeletes:[],progressWrites:[],progressDeletes:[],topicPageWrites:[],topicPageDeletes:[],treeHashes:new Map,aliases:new Map,topicSummaries:new Map,processedSet:null,v5State:null};for(let n of e){let r=n.delete===!0,o=n.path.match(/^summaries\/([0-9a-f]+)\.json$/);if(o){if(r){t.summaryDeletes.push(o[1]);continue}let c=yt(n.content);if(!c?.commitHash)throw new Error(`SotWrite: unparsable summary at ${n.path}`);t.summaryTrees.push(iR(c));continue}if(n.path==="index.json"){if(r)continue;let c=yt(n.content);for(let u of c?.entries??[])u.treeHash&&t.treeHashes.set(u.commitHash,u.treeHash);for(let[u,d]of Object.entries(c?.commitAliases??{}))t.aliases.set(u,d);continue}if(n.path==="catalog.json")continue;if(n.path==="topics/index.json"){if(r)continue;let c=yt(n.content);for(let u of c?.topics??[])u.stableSlug&&u.summary!==void 0&&t.topicSummaries.set(u.stableSlug,u.summary);continue}if(n.path==="topics/processed.json"){t.processedSet=r?null:n.content;continue}if(n.path==="schema-v5-migration.json"){r||(t.v5State=n.content);continue}let s=n.path.match(/^transcripts\/(.+)\.json$/);if(s){r?t.transcriptDeletes.push(s[1]):t.transcriptWrites.push({id:s[1],content:n.content});continue}let i=n.path.match(/^(plans|notes|references|skills)\/(.+)\.md$/);if(i){let c=sR[i[1]];r?t.contextDeletes.push({kind:c,key:i[2]}):t.contextWrites.push({kind:c,key:i[2],body:n.content});continue}let a=n.path.match(/^plan-progress\/(.+)\.json$/);if(a){r?t.progressDeletes.push(a[1]):t.progressWrites.push({pathSlug:a[1],content:n.content});continue}let l=n.path.match(/^topics\/([^/]+)\.json$/);if(l){r?t.topicPageDeletes.push(l[1]):t.topicPageWrites.push({slug:l[1],content:n.content});continue}throw new Error(`SotWrite: no table backs path ${n.path}`)}return t}function Qr(e,t){rn.warn("SotWrite: dropping unparsable %s (%s) -- keeping the rest of the batch",e,t)}function lR(e,t,n){let r=/-([0-9a-f]{8})$/.exec(n);return r?e.prepare("SELECT branch FROM memories WHERE repo_id = ? AND commit_hash LIKE ? || '%' LIMIT 1").get(t,r[1])?.branch??null:null}function cR(e,t,n,r){for(let u of n.summaryDeletes)e.prepare("DELETE FROM memories WHERE repo_id = ? AND commit_hash = ?").run(t,u);if(n.summaryTrees.length===0)return;let o=new Set;for(let u of n.summaryTrees)for(let d of u)"children"in d.summary&&o.add(d.hash);let s=e.prepare(`UPDATE memories SET child_pos = child_pos + ${1e6}
		  WHERE repo_id = ? AND parent_hash = ? AND child_pos < ${1e6}`);for(let u of o)s.run(t,u);let i=new Map;for(let u of n.summaryTrees)for(let d of u){if(d.parentInFile===null||d.pos===null)continue;let p=i.get(d.parentInFile)??new Map;p.set(d.hash,d.pos),i.set(d.parentInFile,p)}let a=e.prepare(`INSERT INTO memories (repo_id, commit_hash, parent_hash, child_pos, root_hash, depth,
		                       summary_json, tree_hash, first_seen_ms, written_at_ms, commit_date_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(repo_id, commit_hash) DO UPDATE SET
		   parent_hash = excluded.parent_hash, child_pos = excluded.child_pos,
		   summary_json = excluded.summary_json,
		   tree_hash = COALESCE(excluded.tree_hash, memories.tree_hash),
		   written_at_ms = excluded.written_at_ms, commit_date_ms = excluded.commit_date_ms`),l=(u,d)=>rn.info("write degraded a value: %s %s",u,d);for(let u of n.summaryTrees)for(let d of u){let p=d.parentInFile,f=d.pos;if(d.parentInFile===null){let T=e.prepare("SELECT parent_hash, child_pos FROM memories WHERE repo_id = ? AND commit_hash = ?").get(t,d.hash);T&&(p=T.parent_hash,f=T.child_pos,f!==null&&f>=1e6&&((p===null?void 0:i.get(p))?.has(d.hash)||(p=null,f=null)))}let h=JSON.stringify("children"in d.summary?{...d.summary,children:[]}:d.summary);a.run(t,d.hash,p,f,d.hash,0,h,n.treeHashes.get(d.hash)??null,r,r,rh(d.summary,d.hash,r,l)),nh(d.summary,d.hash,l),e.prepare("DELETE FROM memory_topics WHERE repo_id = ? AND commit_hash = ?").run(t,d.hash);let w=e.prepare("INSERT INTO memory_topics (repo_id, commit_hash, pos, category, importance, title) VALUES (?, ?, ?, ?, ?, ?)");(d.summary.topics??[]).forEach((T,b)=>{if(!T.title){l("topic",`${d.hash}[${b}] has no title`);return}w.run(t,d.hash,b,T.category??null,T.importance??null,T.title)})}let c=e.prepare(`UPDATE memories SET parent_hash = NULL, child_pos = NULL
		  WHERE repo_id = ? AND parent_hash = ? AND child_pos >= ${1e6}`);for(let u of o)c.run(t,u);oh(e,t)}function dR(e,t,n,r){for(let[o,s]of n.aliases){if(!e.prepare("SELECT 1 AS ok FROM memories WHERE repo_id = ? AND commit_hash = ?").get(t,s)){rn.info("dropping alias %s -> %s (no such memory row)",o,s);continue}e.prepare(`INSERT INTO commit_aliases (repo_id, old_hash, target_hash, created_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, old_hash) DO UPDATE SET target_hash = excluded.target_hash`).run(t,o,s,r)}}function uR(e,t,n,r){let o=new Set;for(let s of n.transcriptDeletes)e.prepare("DELETE FROM transcript_sessions WHERE repo_id = ? AND transcript_id = ?").run(t,s),e.prepare("DELETE FROM memory_transcripts WHERE repo_id = ? AND transcript_id = ?").run(t,s),e.prepare("DELETE FROM transcripts WHERE repo_id = ? AND transcript_id = ?").run(t,s);for(let{id:s,content:i}of n.transcriptWrites){let a=yt(i);if(!a||!Array.isArray(a.sessions)){Qr("transcript",s);continue}e.prepare(`INSERT INTO transcripts (repo_id, transcript_id, sessions_blob, written_at_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, transcript_id) DO UPDATE SET sessions_blob = excluded.sessions_blob,
			   written_at_ms = excluded.written_at_ms`).run(t,s,(0,ih.deflateSync)(Buffer.from(i,"utf8")),r),e.prepare("DELETE FROM transcript_sessions WHERE repo_id = ? AND transcript_id = ?").run(t,s);for(let l of a.sessions)l.sessionId&&e.prepare(`INSERT INTO transcript_sessions (repo_id, transcript_id, session_id, source) VALUES (?, ?, ?, ?)
				 ON CONFLICT(repo_id, transcript_id, session_id) DO UPDATE SET source = excluded.source`).run(t,s,l.sessionId,l.source??null);o.add(s)}return o}function pR(e,t,n,r){if(r.size===0)return;let o=new Set(n.summaryTrees.flat().map(c=>c.hash)),s=new Set(n.summaryTrees.flat().flatMap(c=>[...Lt(c.summary,r)])),i=[...r].filter(c=>!s.has(c));if(i.length===0)return;let a=e.prepare("SELECT commit_hash, summary_json FROM memories WHERE repo_id = ? AND summary_json LIKE ?"),l=e.prepare(`INSERT INTO memory_transcripts (repo_id, commit_hash, transcript_id) VALUES (?, ?, ?)
		 ON CONFLICT(repo_id, commit_hash, transcript_id) DO NOTHING`);for(let c of i){let u=a.all(t,`%${c}%`);for(let d of u){if(o.has(d.commit_hash))continue;let p=yt(d.summary_json);p&&Lt(p,r).includes(c)&&(l.run(t,d.commit_hash,c),rn.info("linked stored transcript %s to memory %s written earlier",c,d.commit_hash))}}}function mR(e,t,n){if(n.summaryTrees.length===0)return;let r=new Set(e.prepare("SELECT transcript_id FROM transcripts WHERE repo_id = ?").all(t).map(o=>o.transcript_id));for(let o of n.summaryTrees)for(let s of o){let i=[...new Set(Lt(s.summary,r).filter(a=>r.has(a)))];for(let a of s.summary.transcripts??[])r.has(a)||rn.info("dropping dangling transcript link %s \u2192 %s (no transcript row)",s.hash,a);e.prepare("DELETE FROM memory_transcripts WHERE repo_id = ? AND commit_hash = ?").run(t,s.hash);for(let a of i)e.prepare("INSERT INTO memory_transcripts (repo_id, commit_hash, transcript_id) VALUES (?, ?, ?)").run(t,s.hash,a)}}function fR(e,t,n,r){for(let{kind:s,key:i}of n.contextDeletes)e.prepare("DELETE FROM context WHERE repo_id = ? AND kind = ? AND context_key = ?").run(t,s,i);let o=e.prepare(`INSERT INTO context (repo_id, kind, context_key, source, native_id, tool_name, referenced_at,
		                      original_slug, branch, title, url, body_md, created_at_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(repo_id, kind, context_key) DO UPDATE SET
		   source = excluded.source, native_id = excluded.native_id, tool_name = excluded.tool_name,
		   referenced_at = excluded.referenced_at, original_slug = excluded.original_slug,
		   branch = excluded.branch, title = excluded.title, url = excluded.url,
		   body_md = excluded.body_md, updated_at_ms = ?`);for(let{kind:s,key:i,body:a}of n.contextWrites){if(s==="reference"){let u=Ra(a);if(!u){Qr("reference frontmatter",`references/${i}.md`);continue}o.run(t,s,i,u.source,u.nativeId,u.toolName,u.referencedAt,null,null,u.title,u.url??null,a,r,r);continue}let l=s==="plan"||s==="note"?lR(e,t,i):null,c=s==="plan"&&l!==null?i.replace(/-[0-9a-f]{8}$/,""):null;o.run(t,s,i,null,null,null,null,c,l,th(a),null,a,r,r)}}function hR(e,t,n,r){for(let o of n.progressDeletes)e.prepare("DELETE FROM plan_progress WHERE repo_id = ? AND plan_slug = ?").run(t,o);for(let{pathSlug:o,content:s}of n.progressWrites){let i=yt(s);if(!i){Qr("plan-progress",`plan-progress/${o}.json`);continue}let a=i.planSlug??o;if(!e.prepare("SELECT 1 AS ok FROM context WHERE repo_id = ? AND kind = 'plan' AND context_key = ?").get(t,a)){rn.warn("plan-progress for %s has no plan row -- skipping the artifact, keeping the rest of the batch",a);continue}e.prepare(`INSERT INTO plan_progress (repo_id, plan_slug, artifact_json, updated_at_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, plan_slug) DO UPDATE SET
			   artifact_json = excluded.artifact_json, updated_at_ms = excluded.updated_at_ms`).run(t,a,s,r)}}function gR(e,t,n,r){for(let o of n.topicPageDeletes)e.prepare("DELETE FROM topic_pages WHERE repo_id = ? AND stable_slug = ?").run(t,o);for(let{slug:o,content:s}of n.topicPageWrites){let i=yt(s);if(!i?.stableSlug||i.title===void 0||i.content===void 0||!i.lastUpdatedAt){Qr("topic page",`topics/${o}.json`);continue}e.prepare(`INSERT INTO topic_pages (repo_id, stable_slug, title, summary, content_md,
			                          related_branches_json, last_updated_at, payload_version)
			 VALUES (?, ?, ?, ?, ?, ?, ?, ?)
			 ON CONFLICT(repo_id, stable_slug) DO UPDATE SET
			   title = excluded.title, content_md = excluded.content_md,
			   related_branches_json = excluded.related_branches_json,
			   last_updated_at = excluded.last_updated_at, payload_version = excluded.payload_version`).run(t,i.stableSlug,i.title,n.topicSummaries.get(i.stableSlug)??null,i.content,JSON.stringify(i.relatedBranches??[]),i.lastUpdatedAt,i.schemaVersion??1),e.prepare("DELETE FROM topic_source_refs WHERE repo_id = ? AND stable_slug = ?").run(t,i.stableSlug),(i.sourceRefs??[]).forEach((a,l)=>{e.prepare(`INSERT INTO topic_source_refs (repo_id, stable_slug, pos, ref_type, ref_id, ts, branch)
				 VALUES (?, ?, ?, ?, ?, ?, ?)`).run(t,i.stableSlug,l,a.type,a.id,a.timestamp,a.branch??null)})}for(let[o,s]of n.topicSummaries){let i=e.prepare("UPDATE topic_pages SET summary = ? WHERE repo_id = ? AND stable_slug = ?").run(s,t,o);Number(i.changes)===0&&rn.info("topics/index.json names %s but no page row exists \u2014 summary dropped",o)}if(n.processedSet!==null){let o=yt(n.processedSet);if(!o?.processed)Qr("processed set","topics/processed.json");else{e.prepare("DELETE FROM topic_processed_sources WHERE repo_id = ?").run(t);let s=e.prepare(`INSERT INTO topic_processed_sources (repo_id, source_type, source_id) VALUES (?, ?, ?)
				 ON CONFLICT(repo_id, source_type, source_id) DO NOTHING`);for(let[i,a]of Object.entries(o.processed))for(let l of a)s.run(t,i,l)}}n.v5State!==null&&e.prepare(`INSERT INTO repo_state (repo_id, key, value) VALUES (?, 'v5-migration', ?)
			 ON CONFLICT(repo_id, key) DO UPDATE SET value = excluded.value`).run(t,n.v5State)}function ah(e,t,n,r){let o=aR(n);bl(e,()=>{e.exec("PRAGMA defer_foreign_keys = ON"),cR(e,t,o,r),dR(e,t,o,r);let s=uR(e,t,o,r);mR(e,t,o),pR(e,t,o,s),fR(e,t,o,r),hR(e,t,o,r),gR(e,t,o,r)})}var ih,rn,sR,lh=g(()=>{"use strict";ih=require("node:zlib");Rr();Mt();y();Nt();sh();us();rn=m("SotWrite"),sR={plans:"plan",notes:"note",references:"reference",skills:"skill"}});function dh(e){let t=new Map;for(let n of e){if(n.parent_hash==null)continue;let r=t.get(n.parent_hash)??[];r.push(n),t.set(n.parent_hash,r)}for(let n of t.values())n.sort((r,o)=>Number(r.child_pos)-Number(o.child_pos));return t}function Ul(e,t){let n=JSON.parse(t.summary_json);return"children"in n&&(n.children=(e.get(t.commit_hash)??[]).map(r=>Ul(e,r))),n}function yR(e,t,n){let r=e.prepare("SELECT root_hash, parent_hash FROM memories WHERE repo_id = ? AND commit_hash = ?").get(t,n);if(!r)return;let o=(r.parent_hash===null?e.prepare(`SELECT commit_hash, parent_hash, child_pos, tree_hash, summary_json
					   FROM memories WHERE repo_id = ? AND root_hash = ?`):e.prepare(`WITH RECURSIVE subtree(commit_hash) AS (
					     SELECT commit_hash FROM memories WHERE repo_id = ?1 AND commit_hash = ?2
					     UNION ALL
					     SELECT m.commit_hash FROM memories m
					       JOIN subtree s ON m.parent_hash = s.commit_hash
					      WHERE m.repo_id = ?1
					   )
					   SELECT m.commit_hash, m.parent_hash, m.child_pos, m.tree_hash, m.summary_json
					     FROM memories m JOIN subtree ON subtree.commit_hash = m.commit_hash
					    WHERE m.repo_id = ?1`)).all(t,r.parent_hash===null?r.root_hash:n),s=o.find(i=>i.commit_hash===n);return s?Ul(dh(o),s):void 0}function Vf(e){if(e instanceof jt)return e;let t=e?.primary;return t instanceof jt?t:null}function wR(e){if(e===null)return{};try{return{diffStats:JSON.parse(e)}}catch{return{}}}var ch,jt,Os=g(()=>{"use strict";ch=require("node:zlib");Nt();lh();y();Ve();jt=class{constructor(t,n){this.repoIdentity=t;this.dbPath=n;this.kind="sqlite"}async withDb(t){return wl(n=>{let r=n.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);if(!r)throw new Error(`SqliteStorage: no repos row for ${this.repoIdentity}`);return t(n,r.id)},{dbPath:this.dbPath})}async withDbOrAbsent(t,n){return wl(r=>{let o=r.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);return o?t(r,o.id):n},{dbPath:this.dbPath})}async readFile(t){return this.withDbOrAbsent((n,r)=>this.readOne(n,r,t),null)}async batchReadFiles(t){return this.withDbOrAbsent((n,r)=>{let o=new Map;for(let s of t)o.set(s,this.readOne(n,r,s));return o},new Map(t.map(n=>[n,null])))}readOne(t,n,r){let o=r.match(/^summaries\/([0-9a-f]+)\.json$/);if(o){let c=yR(t,n,o[1]);return c?JSON.stringify(c,null,"	"):null}if(r==="index.json")return this.synthIndex(t,n);if(r==="catalog.json")return this.synthCatalog(t,n);if(r==="topics/index.json")return this.synthTopicIndex(t,n);if(r==="topics/processed.json")return this.synthProcessed(t,n);if(r==="schema-v5-migration.json")return t.prepare("SELECT value FROM repo_state WHERE repo_id = ? AND key = 'v5-migration'").get(n)?.value??null;let s=r.match(/^topics\/([^/]+)\.json$/);if(s)return this.synthTopicPage(t,n,s[1]);let i=r.match(/^transcripts\/(.+)\.json$/);if(i){let c=t.prepare("SELECT sessions_blob FROM transcripts WHERE repo_id = ? AND transcript_id = ?").get(n,i[1]);return c?(0,ch.inflateSync)(Buffer.from(c.sessions_blob)).toString("utf8"):null}let a=r.match(/^(plans|notes|references|skills)\/(.+)\.md$/);if(a){let c={plans:"plan",notes:"note",references:"reference",skills:"skill"}[a[1]];return t.prepare("SELECT body_md FROM context WHERE repo_id = ? AND kind = ? AND context_key = ?").get(n,c,a[2])?.body_md??null}let l=r.match(/^plan-progress\/(.+)\.json$/);return l?t.prepare("SELECT artifact_json FROM plan_progress WHERE repo_id = ? AND plan_slug = ?").get(n,l[1])?.artifact_json??null:null}allMemories(t,n){return t.prepare(`SELECT commit_hash, parent_hash, child_pos, tree_hash, summary_json, index_diff_stats_json
				   FROM memories WHERE repo_id = ? ORDER BY rowid`).all(n)}synthIndex(t,n){let r=t.prepare(`SELECT commit_hash, parent_hash, root_hash, tree_hash, commit_type, commit_message,
				        commit_date, branch, generated_at,
				        CASE WHEN parent_hash IS NULL
				             THEN COALESCE(json_extract(summary_json, '$.diffStats'), index_diff_stats_json)
				        END AS diff_stats_json
				   FROM memories WHERE repo_id = ? ORDER BY rowid`).all(n);if(r.length===0)return null;let o=new Map(t.prepare(`SELECT m.root_hash AS root, COUNT(t.rowid) AS n
						   FROM memories m
						   LEFT JOIN memory_topics t ON t.repo_id = m.repo_id AND t.commit_hash = m.commit_hash
						  WHERE m.repo_id = ? GROUP BY m.root_hash`).all(n).map(a=>[a.root,a.n])),s=r.map(a=>({commitHash:a.commit_hash,parentCommitHash:a.parent_hash,...a.tree_hash!==null&&{treeHash:a.tree_hash},...a.commit_type!==null&&{commitType:a.commit_type},commitMessage:a.commit_message??void 0,commitDate:a.commit_date??void 0,branch:a.branch??void 0,...a.generated_at!==null&&{generatedAt:a.generated_at},...a.parent_hash===null&&{topicCount:o.get(a.root_hash)??0,...wR(a.diff_stats_json)}})),i=t.prepare("SELECT old_hash, target_hash FROM commit_aliases WHERE repo_id = ? ORDER BY rowid").all(n);return JSON.stringify({version:3,entries:s,...i.length>0&&{commitAliases:Object.fromEntries(i.map(a=>[a.old_hash,a.target_hash]))}},null,"	")}synthCatalog(t,n){let r=this.allMemories(t,n);if(r.length===0)return null;let o=dh(r),s=r.filter(i=>i.parent_hash===null).map(i=>tn(Ul(o,i)));return JSON.stringify({version:1,entries:s},null,"	")}topicRefs(t,n,r){return t.prepare(`SELECT ref_type, ref_id, ts, branch FROM topic_source_refs
				  WHERE repo_id = ? AND stable_slug = ? ORDER BY pos`).all(n,r).map(s=>({type:s.ref_type,id:s.ref_id,timestamp:s.ts,...s.branch!==null&&{branch:s.branch}}))}synthTopicPage(t,n,r){let o=t.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json,
				        last_updated_at, payload_version
				   FROM topic_pages WHERE repo_id = ? AND stable_slug = ?`).get(n,r);return o?JSON.stringify({schemaVersion:o.payload_version,stableSlug:o.stable_slug,title:o.title,content:o.content_md,relatedBranches:JSON.parse(o.related_branches_json),sourceRefs:this.topicRefs(t,n,r),lastUpdatedAt:o.last_updated_at},null,"	"):null}synthTopicIndex(t,n){let r=t.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json,
				        last_updated_at, payload_version
				   FROM topic_pages WHERE repo_id = ? ORDER BY rowid`).all(n);if(r.length===0)return null;let o=r.map(s=>({stableSlug:s.stable_slug,title:s.title,...s.summary!==null&&{summary:s.summary},relatedBranches:JSON.parse(s.related_branches_json),sourceRefs:this.topicRefs(t,n,s.stable_slug),lastUpdatedAt:s.last_updated_at}));return JSON.stringify({schemaVersion:1,topics:o},null,"	")}synthProcessed(t,n){let r=t.prepare("SELECT source_type, source_id FROM topic_processed_sources WHERE repo_id = ? ORDER BY rowid").all(n);if(r.length===0)return null;let o={summary:[],plan:[],note:[],userfile:[]};for(let s of r)o[s.source_type].push(s.source_id);return JSON.stringify({schemaVersion:1,processed:o},null,"	")}async listFiles(t){return this.withDbOrAbsent((n,r)=>{let o=(i,a)=>n.prepare(i).all(r).map(l=>a(l.v));return[...o("SELECT commit_hash AS v FROM memories WHERE repo_id = ?",i=>`summaries/${i}.json`),...o("SELECT transcript_id AS v FROM transcripts WHERE repo_id = ?",i=>`transcripts/${i}.json`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'plan'",i=>`plans/${i}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'note'",i=>`notes/${i}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'reference'",i=>`references/${i}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'skill'",i=>`skills/${i}.md`),...o("SELECT plan_slug AS v FROM plan_progress WHERE repo_id = ?",i=>`plan-progress/${i}.json`),...o("SELECT stable_slug AS v FROM topic_pages WHERE repo_id = ?",i=>`topics/${i}.json`),...o("SELECT 'index.json' AS v FROM memories WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'catalog.json' AS v FROM memories WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'topics/index.json' AS v FROM topic_pages WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'topics/processed.json' AS v FROM topic_processed_sources WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'schema-v5-migration.json' AS v FROM repo_state WHERE repo_id = ? AND key = 'v5-migration'",i=>i)].filter(i=>i.startsWith(t)).sort()},[])}async writeFiles(t,n){q()||await yl(r=>{let o=r.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);if(!o)throw new Error(`SqliteStorage: cannot write memories for unregistered ${this.repoIdentity}`);ah(r,o.id,t,Date.now())},{dbPath:this.dbPath})}async searchSignatureParts(){return this.withDbOrAbsent((t,n)=>{let r=t.prepare("SELECT COUNT(*) AS n, COALESCE(MAX(written_at_ms), 0) AS newest FROM memories WHERE repo_id = ?").get(n),o=t.prepare("SELECT COUNT(*) AS n, COALESCE(MAX(last_updated_at), '') AS newest FROM topic_pages WHERE repo_id = ?").get(n);return{memoriesCount:r.n,memoriesNewestMs:r.newest,topicCount:o.n,topicNewest:o.newest}},{memoriesCount:0,memoriesNewestMs:0,topicCount:0,topicNewest:""})}async lookupAlias(t){return this.withDbOrAbsent((n,r)=>n.prepare("SELECT target_hash FROM commit_aliases WHERE repo_id = ? AND old_hash = ?").get(r,t)?.target_hash??null,null)}async findShallowestByTreeHash(t){return this.withDbOrAbsent((n,r)=>n.prepare(`SELECT commit_hash FROM memories WHERE repo_id = ? AND tree_hash = ?
					  ORDER BY depth ASC, commit_date_ms DESC LIMIT 1`).get(r,t)?.commit_hash??null,null)}async findHashesByPrefix(t){return/^[0-9a-f]+$/.test(t)?this.withDbOrAbsent((n,r)=>n.prepare("SELECT commit_hash FROM memories WHERE repo_id = ? AND commit_hash LIKE ? || '%'").all(r,t).map(s=>s.commit_hash),[]):[]}async listHeadEntries(t){return this.withDbOrAbsent((n,r)=>n.prepare(`SELECT commit_hash, tree_hash, commit_type, commit_message, commit_date, branch, generated_at
					   FROM memories WHERE repo_id = ? AND parent_hash IS NULL${t!==void 0?" AND branch = ?":""}`).all(...t!==void 0?[r,t]:[r]).map(s=>({commitHash:s.commit_hash,parentCommitHash:null,...s.tree_hash!==null?{treeHash:s.tree_hash}:{},...s.commit_type!==null?{commitType:s.commit_type}:{},commitMessage:s.commit_message??"",commitDate:s.commit_date??"",branch:s.branch??"",generatedAt:s.generated_at??""})),[])}async topicTitlesByHash(){return this.withDbOrAbsent((t,n)=>{let r=t.prepare("SELECT commit_hash, title FROM memory_topics WHERE repo_id = ? ORDER BY commit_hash, pos").all(n),o=new Map;for(let s of r){let i=o.get(s.commit_hash)??[];i.push(s.title),o.set(s.commit_hash,i)}return o},new Map)}async listTopicSearchRows(){return this.withDbOrAbsent((t,n)=>{let r=t.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json, last_updated_at
					   FROM topic_pages WHERE repo_id = ?`).all(n),o=t.prepare("SELECT stable_slug, ref_type FROM topic_source_refs WHERE repo_id = ? ORDER BY pos").all(n),s=new Map;for(let i of o){let a=s.get(i.stable_slug)??[];a.push(i.ref_type),s.set(i.stable_slug,a)}return r.map(i=>({stableSlug:i.stable_slug,title:i.title,summary:i.summary,content:i.content_md,relatedBranches:JSON.parse(i.related_branches_json),lastUpdatedAt:i.last_updated_at,refTypes:s.get(i.stable_slug)??[]}))},[])}async listRootSummaries(){return this.withDbOrAbsent((t,n)=>t.prepare("SELECT commit_hash FROM memories WHERE repo_id = ? AND parent_hash IS NULL").all(n).map(o=>this.readOne(t,n,`summaries/${o.commit_hash}.json`)).filter(o=>o!==null).map(o=>JSON.parse(o)),[])}async exists(){try{return await this.withDb(()=>!0)}catch{return!1}}async ensure(){throw new Error("SqliteStorage cannot create its database: opening it runs the migrations already")}}});async function ph(e){let t=Date.now(),n=uh.get(e);if(n&&t-n.at<bR)return n.route;let r=await Hr(e);return uh.set(e,{route:r,at:t}),r}async function mh(e,t,n){if(n.state==="legacy-fenced"||n.state==="cutover"){let{identity:r}=await Qt(t);return new jt(r)}return new ht(e)}async function fh(e){let t=e??process.cwd(),n=await ph(t);if(n.state==="blocked")throw new Error(`storage unavailable: ${n.reason} \u2014 this repo's orphan branch is frozen (cutover), so the system of record cannot fall back to it; run 'jolli doctor --recover' or upgrade this surface`);return mh(e,t,n)}async function Ds(e){let t=e??process.cwd(),n;try{n=await ph(t)}catch(r){return{ok:!1,reason:r.message}}if(n.state==="blocked")return{ok:!1,reason:n.reason};try{return{ok:!0,state:n.state,storage:await mh(e,t,n)}}catch(r){return{ok:!1,reason:r.message}}}var bR,uh,Ns=g(()=>{"use strict";ms();Zt();fs();Os();bR=3e3,uh=new Map});function bt(e,t=""){let n=t?` ${t}`:"";return`${JR} ${e}${n}`}function to(e,t){let n=typeof t=="string"?[t]:t;return e.some(r=>{let o=r.hooks;return Array.isArray(o)?o.some(s=>typeof s.command=="string"&&n.some(i=>s.command.includes(i))):!1})}function on(e,t){let n=typeof t=="string"?[t]:t,r=[];for(let o of e){let s=o.hooks;if(!Array.isArray(s)){r.push(o);continue}let i=s.filter(a=>!(typeof a.command=="string"&&n.some(l=>a.command.includes(l))));i.length>0&&r.push({...o,hooks:i})}return r}function zl(e){return to(e,Xl)}function Us(e){return on(e,Xl)}var JR,Xl,Fs,Hs,Js=g(()=>{"use strict";JR='"$HOME/.jolli/jollimemory/run-hook"';Xl=["run-hook","StopHook","jollimemory-hooks.jar"],Fs=["run-hook","SessionStartHook"],Hs=["run-hook","GeminiAfterAgentHook","jollimemory-hooks.jar"]});var Wn=_((X$,$h)=>{"use strict";var GR="2.0.0",qR=Number.MAX_SAFE_INTEGER||9007199254740991,KR=16,VR=250,YR=["major","premajor","minor","preminor","patch","prepatch","prerelease"];$h.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:KR,MAX_SAFE_BUILD_LENGTH:VR,MAX_SAFE_INTEGER:qR,RELEASE_TYPES:YR,SEMVER_SPEC_VERSION:GR,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}});var so=_((z$,Fh)=>{"use strict";var XR=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};Fh.exports=XR});var Gn=_((Ye,Hh)=>{"use strict";var{MAX_SAFE_COMPONENT_LENGTH:ec,MAX_SAFE_BUILD_LENGTH:zR,MAX_LENGTH:QR}=Wn(),ZR=so();Ye=Hh.exports={};var ev=Ye.re=[],tv=Ye.safeRe=[],S=Ye.src=[],nv=Ye.safeSrc=[],E=Ye.t={},rv=0,tc="[a-zA-Z0-9-]",ov=[["\\s",1],["\\d",QR],[tc,zR]],sv=e=>{for(let[t,n]of ov)e=e.split(`${t}*`).join(`${t}{0,${n}}`).split(`${t}+`).join(`${t}{1,${n}}`);return e},A=(e,t,n)=>{let r=sv(t),o=rv++;ZR(e,o,t),E[e]=o,S[o]=t,nv[o]=r,ev[o]=new RegExp(t,n?"g":void 0),tv[o]=new RegExp(r,n?"g":void 0)};A("NUMERICIDENTIFIER","0|[1-9]\\d*");A("NUMERICIDENTIFIERLOOSE","\\d+");A("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${tc}*`);A("MAINVERSION",`(${S[E.NUMERICIDENTIFIER]})\\.(${S[E.NUMERICIDENTIFIER]})\\.(${S[E.NUMERICIDENTIFIER]})`);A("MAINVERSIONLOOSE",`(${S[E.NUMERICIDENTIFIERLOOSE]})\\.(${S[E.NUMERICIDENTIFIERLOOSE]})\\.(${S[E.NUMERICIDENTIFIERLOOSE]})`);A("PRERELEASEIDENTIFIER",`(?:${S[E.NONNUMERICIDENTIFIER]}|${S[E.NUMERICIDENTIFIER]})`);A("PRERELEASEIDENTIFIERLOOSE",`(?:${S[E.NONNUMERICIDENTIFIER]}|${S[E.NUMERICIDENTIFIERLOOSE]})`);A("PRERELEASE",`(?:-(${S[E.PRERELEASEIDENTIFIER]}(?:\\.${S[E.PRERELEASEIDENTIFIER]})*))`);A("PRERELEASELOOSE",`(?:-?(${S[E.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${S[E.PRERELEASEIDENTIFIERLOOSE]})*))`);A("BUILDIDENTIFIER",`${tc}+`);A("BUILD",`(?:\\+(${S[E.BUILDIDENTIFIER]}(?:\\.${S[E.BUILDIDENTIFIER]})*))`);A("FULLPLAIN",`v?${S[E.MAINVERSION]}${S[E.PRERELEASE]}?${S[E.BUILD]}?`);A("FULL",`^${S[E.FULLPLAIN]}$`);A("LOOSEPLAIN",`[v=\\s]*${S[E.MAINVERSIONLOOSE]}${S[E.PRERELEASELOOSE]}?${S[E.BUILD]}?`);A("LOOSE",`^${S[E.LOOSEPLAIN]}$`);A("GTLT","((?:<|>)?=?)");A("XRANGEIDENTIFIERLOOSE",`${S[E.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);A("XRANGEIDENTIFIER",`${S[E.NUMERICIDENTIFIER]}|x|X|\\*`);A("XRANGEPLAIN",`[v=\\s]*(${S[E.XRANGEIDENTIFIER]})(?:\\.(${S[E.XRANGEIDENTIFIER]})(?:\\.(${S[E.XRANGEIDENTIFIER]})(?:${S[E.PRERELEASE]})?${S[E.BUILD]}?)?)?`);A("XRANGEPLAINLOOSE",`[v=\\s]*(${S[E.XRANGEIDENTIFIERLOOSE]})(?:\\.(${S[E.XRANGEIDENTIFIERLOOSE]})(?:\\.(${S[E.XRANGEIDENTIFIERLOOSE]})(?:${S[E.PRERELEASELOOSE]})?${S[E.BUILD]}?)?)?`);A("XRANGE",`^${S[E.GTLT]}\\s*${S[E.XRANGEPLAIN]}$`);A("XRANGELOOSE",`^${S[E.GTLT]}\\s*${S[E.XRANGEPLAINLOOSE]}$`);A("COERCEPLAIN",`(^|[^\\d])(\\d{1,${ec}})(?:\\.(\\d{1,${ec}}))?(?:\\.(\\d{1,${ec}}))?`);A("COERCE",`${S[E.COERCEPLAIN]}(?:$|[^\\d])`);A("COERCEFULL",S[E.COERCEPLAIN]+`(?:${S[E.PRERELEASE]})?(?:${S[E.BUILD]})?(?:$|[^\\d])`);A("COERCERTL",S[E.COERCE],!0);A("COERCERTLFULL",S[E.COERCEFULL],!0);A("LONETILDE","(?:~>?)");A("TILDETRIM",`(\\s*)${S[E.LONETILDE]}\\s+`,!0);Ye.tildeTrimReplace="$1~";A("TILDE",`^${S[E.LONETILDE]}${S[E.XRANGEPLAIN]}$`);A("TILDELOOSE",`^${S[E.LONETILDE]}${S[E.XRANGEPLAINLOOSE]}$`);A("LONECARET","(?:\\^)");A("CARETTRIM",`(\\s*)${S[E.LONECARET]}\\s+`,!0);Ye.caretTrimReplace="$1^";A("CARET",`^${S[E.LONECARET]}${S[E.XRANGEPLAIN]}$`);A("CARETLOOSE",`^${S[E.LONECARET]}${S[E.XRANGEPLAINLOOSE]}$`);A("COMPARATORLOOSE",`^${S[E.GTLT]}\\s*(${S[E.LOOSEPLAIN]})$|^$`);A("COMPARATOR",`^${S[E.GTLT]}\\s*(${S[E.FULLPLAIN]})$|^$`);A("COMPARATORTRIM",`(\\s*)${S[E.GTLT]}\\s*(${S[E.LOOSEPLAIN]}|${S[E.XRANGEPLAIN]})`,!0);Ye.comparatorTrimReplace="$1$2$3";A("HYPHENRANGE",`^\\s*(${S[E.XRANGEPLAIN]})\\s+-\\s+(${S[E.XRANGEPLAIN]})\\s*$`);A("HYPHENRANGELOOSE",`^\\s*(${S[E.XRANGEPLAINLOOSE]})\\s+-\\s+(${S[E.XRANGEPLAINLOOSE]})\\s*$`);A("STAR","(<|>)?=?\\s*\\*");A("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$");A("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")});var Gs=_((Q$,Uh)=>{"use strict";var iv=Object.freeze({loose:!0}),av=Object.freeze({}),lv=e=>e?typeof e!="object"?iv:e:av;Uh.exports=lv});var nc=_((Z$,Wh)=>{"use strict";var Jh=/^[0-9]+$/,Bh=(e,t)=>{if(typeof e=="number"&&typeof t=="number")return e===t?0:e<t?-1:1;let n=Jh.test(e),r=Jh.test(t);return n&&r&&(e=+e,t=+t),e===t?0:n&&!r?-1:r&&!n?1:e<t?-1:1},cv=(e,t)=>Bh(t,e);Wh.exports={compareIdentifiers:Bh,rcompareIdentifiers:cv}});var oe=_((eF,qh)=>{"use strict";var qs=so(),{MAX_LENGTH:Gh,MAX_SAFE_INTEGER:Ks}=Wn(),{safeRe:Vs,t:Ys}=Gn(),dv=Gs(),{compareIdentifiers:rc}=nc(),oc=class e{constructor(t,n){if(n=dv(n),t instanceof e){if(t.loose===!!n.loose&&t.includePrerelease===!!n.includePrerelease)return t;t=t.version}else if(typeof t!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);if(t.length>Gh)throw new TypeError(`version is longer than ${Gh} characters`);qs("SemVer",t,n),this.options=n,this.loose=!!n.loose,this.includePrerelease=!!n.includePrerelease;let r=t.trim().match(n.loose?Vs[Ys.LOOSE]:Vs[Ys.FULL]);if(!r)throw new TypeError(`Invalid Version: ${t}`);if(this.raw=t,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>Ks||this.major<0)throw new TypeError("Invalid major version");if(this.minor>Ks||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>Ks||this.patch<0)throw new TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map(o=>{if(/^[0-9]+$/.test(o)){let s=+o;if(s>=0&&s<Ks)return s}return o}):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(t){if(qs("SemVer.compare",this.version,this.options,t),!(t instanceof e)){if(typeof t=="string"&&t===this.version)return 0;t=new e(t,this.options)}return t.version===this.version?0:this.compareMain(t)||this.comparePre(t)}compareMain(t){return t instanceof e||(t=new e(t,this.options)),this.major<t.major?-1:this.major>t.major?1:this.minor<t.minor?-1:this.minor>t.minor?1:this.patch<t.patch?-1:this.patch>t.patch?1:0}comparePre(t){if(t instanceof e||(t=new e(t,this.options)),this.prerelease.length&&!t.prerelease.length)return-1;if(!this.prerelease.length&&t.prerelease.length)return 1;if(!this.prerelease.length&&!t.prerelease.length)return 0;let n=0;do{let r=this.prerelease[n],o=t.prerelease[n];if(qs("prerelease compare",n,r,o),r===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(r===void 0)return-1;if(r===o)continue;return rc(r,o)}while(++n)}compareBuild(t){t instanceof e||(t=new e(t,this.options));let n=0;do{let r=this.build[n],o=t.build[n];if(qs("build compare",n,r,o),r===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(r===void 0)return-1;if(r===o)continue;return rc(r,o)}while(++n)}inc(t,n,r){if(t.startsWith("pre")){if(!n&&r===!1)throw new Error("invalid increment argument: identifier is empty");if(n){let o=`-${n}`.match(this.options.loose?Vs[Ys.PRERELEASELOOSE]:Vs[Ys.PRERELEASE]);if(!o||o[1]!==n)throw new Error(`invalid identifier: ${n}`)}}switch(t){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",n,r);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",n,r);break;case"prepatch":this.prerelease.length=0,this.inc("patch",n,r),this.inc("pre",n,r);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",n,r),this.inc("pre",n,r);break;case"release":if(this.prerelease.length===0)throw new Error(`version ${this.raw} is not a prerelease`);this.prerelease.length=0;break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{let o=Number(r)?1:0;if(this.prerelease.length===0)this.prerelease=[o];else{let s=this.prerelease.length;for(;--s>=0;)typeof this.prerelease[s]=="number"&&(this.prerelease[s]++,s=-2);if(s===-1){if(n===this.prerelease.join(".")&&r===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(o)}}if(n){let s=[n,o];r===!1&&(s=[n]),rc(this.prerelease[0],n)===0?isNaN(this.prerelease[1])&&(this.prerelease=s):this.prerelease=s}break}default:throw new Error(`invalid increment argument: ${t}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};qh.exports=oc});var Ft=_((tF,Vh)=>{"use strict";var Kh=oe(),uv=(e,t,n=!1)=>{if(e instanceof Kh)return e;try{return new Kh(e,t)}catch(r){if(!n)return null;throw r}};Vh.exports=uv});var Xh=_((nF,Yh)=>{"use strict";var pv=Ft(),mv=(e,t)=>{let n=pv(e,t);return n?n.version:null};Yh.exports=mv});var Qh=_((rF,zh)=>{"use strict";var fv=Ft(),hv=(e,t)=>{let n=fv(e.trim().replace(/^[=v]+/,""),t);return n?n.version:null};zh.exports=hv});var tg=_((oF,eg)=>{"use strict";var Zh=oe(),gv=(e,t,n,r,o)=>{typeof n=="string"&&(o=r,r=n,n=void 0);try{return new Zh(e instanceof Zh?e.version:e,n).inc(t,r,o).version}catch{return null}};eg.exports=gv});var og=_((sF,rg)=>{"use strict";var ng=Ft(),yv=(e,t)=>{let n=ng(e,null,!0),r=ng(t,null,!0),o=n.compare(r);if(o===0)return null;let s=o>0,i=s?n:r,a=s?r:n,l=!!i.prerelease.length;if(!!a.prerelease.length&&!l){if(!a.patch&&!a.minor)return"major";if(a.compareMain(i)===0)return a.minor&&!a.patch?"minor":"patch"}let u=l?"pre":"";return n.major!==r.major?u+"major":n.minor!==r.minor?u+"minor":n.patch!==r.patch?u+"patch":"prerelease"};rg.exports=yv});var ig=_((iF,sg)=>{"use strict";var wv=oe(),bv=(e,t)=>new wv(e,t).major;sg.exports=bv});var lg=_((aF,ag)=>{"use strict";var Sv=oe(),Ev=(e,t)=>new Sv(e,t).minor;ag.exports=Ev});var dg=_((lF,cg)=>{"use strict";var Tv=oe(),kv=(e,t)=>new Tv(e,t).patch;cg.exports=kv});var pg=_((cF,ug)=>{"use strict";var Rv=Ft(),vv=(e,t)=>{let n=Rv(e,t);return n&&n.prerelease.length?n.prerelease:null};ug.exports=vv});var xe=_((dF,fg)=>{"use strict";var mg=oe(),_v=(e,t,n)=>new mg(e,n).compare(new mg(t,n));fg.exports=_v});var gg=_((uF,hg)=>{"use strict";var xv=xe(),Cv=(e,t,n)=>xv(t,e,n);hg.exports=Cv});var wg=_((pF,yg)=>{"use strict";var Av=xe(),Pv=(e,t)=>Av(e,t,!0);yg.exports=Pv});var Xs=_((mF,Sg)=>{"use strict";var bg=oe(),Iv=(e,t,n)=>{let r=new bg(e,n),o=new bg(t,n);return r.compare(o)||r.compareBuild(o)};Sg.exports=Iv});var Tg=_((fF,Eg)=>{"use strict";var Ov=Xs(),Dv=(e,t)=>e.sort((n,r)=>Ov(n,r,t));Eg.exports=Dv});var Rg=_((hF,kg)=>{"use strict";var Nv=Xs(),Lv=(e,t)=>e.sort((n,r)=>Nv(r,n,t));kg.exports=Lv});var io=_((gF,vg)=>{"use strict";var Mv=xe(),jv=(e,t,n)=>Mv(e,t,n)>0;vg.exports=jv});var zs=_((yF,_g)=>{"use strict";var $v=xe(),Fv=(e,t,n)=>$v(e,t,n)<0;_g.exports=Fv});var sc=_((wF,xg)=>{"use strict";var Hv=xe(),Uv=(e,t,n)=>Hv(e,t,n)===0;xg.exports=Uv});var ic=_((bF,Cg)=>{"use strict";var Jv=xe(),Bv=(e,t,n)=>Jv(e,t,n)!==0;Cg.exports=Bv});var Qs=_((SF,Ag)=>{"use strict";var Wv=xe(),Gv=(e,t,n)=>Wv(e,t,n)>=0;Ag.exports=Gv});var Zs=_((EF,Pg)=>{"use strict";var qv=xe(),Kv=(e,t,n)=>qv(e,t,n)<=0;Pg.exports=Kv});var ac=_((TF,Ig)=>{"use strict";var Vv=sc(),Yv=ic(),Xv=io(),zv=Qs(),Qv=zs(),Zv=Zs(),e_=(e,t,n,r)=>{switch(t){case"===":return typeof e=="object"&&(e=e.version),typeof n=="object"&&(n=n.version),e===n;case"!==":return typeof e=="object"&&(e=e.version),typeof n=="object"&&(n=n.version),e!==n;case"":case"=":case"==":return Vv(e,n,r);case"!=":return Yv(e,n,r);case">":return Xv(e,n,r);case">=":return zv(e,n,r);case"<":return Qv(e,n,r);case"<=":return Zv(e,n,r);default:throw new TypeError(`Invalid operator: ${t}`)}};Ig.exports=e_});var Dg=_((kF,Og)=>{"use strict";var t_=oe(),n_=Ft(),{safeRe:ei,t:ti}=Gn(),r_=(e,t)=>{if(e instanceof t_)return e;if(typeof e=="number"&&(e=String(e)),typeof e!="string")return null;t=t||{};let n=null;if(!t.rtl)n=e.match(t.includePrerelease?ei[ti.COERCEFULL]:ei[ti.COERCE]);else{let l=t.includePrerelease?ei[ti.COERCERTLFULL]:ei[ti.COERCERTL],c;for(;(c=l.exec(e))&&(!n||n.index+n[0].length!==e.length);)(!n||c.index+c[0].length!==n.index+n[0].length)&&(n=c),l.lastIndex=c.index+c[1].length+c[2].length;l.lastIndex=-1}if(n===null)return null;let r=n[2],o=n[3]||"0",s=n[4]||"0",i=t.includePrerelease&&n[5]?`-${n[5]}`:"",a=t.includePrerelease&&n[6]?`+${n[6]}`:"";return n_(`${r}.${o}.${s}${i}${a}`,t)};Og.exports=r_});var Lg=_((RF,Ng)=>{"use strict";var o_=Ft(),s_=Wn(),i_=oe(),a_=(e,t,n)=>{if(!s_.RELEASE_TYPES.includes(t))return null;let r=l_(e,n);return r&&c_(r,t)},l_=(e,t)=>{let n=e instanceof i_?e.version:e;return o_(n,t)},c_=(e,t)=>{if(d_(t))return e.version;switch(e.prerelease=[],t){case"major":e.minor=0,e.patch=0;break;case"minor":e.patch=0;break}return e.format()},d_=e=>e.startsWith("pre");Ng.exports=a_});var jg=_((vF,Mg)=>{"use strict";var lc=class{constructor(){this.max=1e3,this.map=new Map}get(t){let n=this.map.get(t);if(n!==void 0)return this.map.delete(t),this.map.set(t,n),n}delete(t){return this.map.delete(t)}set(t,n){if(!this.delete(t)&&n!==void 0){if(this.map.size>=this.max){let o=this.map.keys().next().value;this.delete(o)}this.map.set(t,n)}return this}};Mg.exports=lc});var Ce=_((_F,Ug)=>{"use strict";var u_=/\s+/g,cc=class e{constructor(t,n){if(n=m_(n),t instanceof e)return t.loose===!!n.loose&&t.includePrerelease===!!n.includePrerelease?t:new e(t.raw,n);if(t instanceof dc)return this.raw=t.value,this.set=[[t]],this.formatted=void 0,this;if(this.options=n,this.loose=!!n.loose,this.includePrerelease=!!n.includePrerelease,this.raw=t.trim().replace(u_," "),this.set=this.raw.split("||").map(r=>this.parseRange(r.trim())).filter(r=>r.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){let r=this.set[0];if(this.set=this.set.filter(o=>!Fg(o[0])),this.set.length===0)this.set=[r];else if(this.set.length>1){for(let o of this.set)if(o.length===1&&T_(o[0])){this.set=[o];break}}}this.formatted=void 0}get range(){if(this.formatted===void 0){this.formatted="";for(let t=0;t<this.set.length;t++){t>0&&(this.formatted+="||");let n=this.set[t];for(let r=0;r<n.length;r++)r>0&&(this.formatted+=" "),this.formatted+=n[r].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(t){t=t.replace(E_,"");let r=((this.options.includePrerelease&&b_)|(this.options.loose&&S_))+":"+t,o=$g.get(r);if(o)return o;let s=this.options.loose,i=s?me[se.HYPHENRANGELOOSE]:me[se.HYPHENRANGE];t=t.replace(i,O_(this.options.includePrerelease)),U("hyphen replace",t),t=t.replace(me[se.COMPARATORTRIM],g_),U("comparator trim",t),t=t.replace(me[se.TILDETRIM],y_),U("tilde trim",t),t=t.replace(me[se.CARETTRIM],w_),U("caret trim",t);let a=t.split(" ").map(d=>k_(d,this.options)).join(" ").split(/\s+/).map(d=>I_(d,this.options));s&&(a=a.filter(d=>(U("loose invalid filter",d,this.options),!!d.match(me[se.COMPARATORLOOSE])))),U("range list",a);let l=new Map,c=a.map(d=>new dc(d,this.options));for(let d of c){if(Fg(d))return[d];l.set(d.value,d)}l.size>1&&l.has("")&&l.delete("");let u=[...l.values()];return $g.set(r,u),u}intersects(t,n){if(!(t instanceof e))throw new TypeError("a Range is required");return this.set.some(r=>Hg(r,n)&&t.set.some(o=>Hg(o,n)&&r.every(s=>o.every(i=>s.intersects(i,n)))))}test(t){if(!t)return!1;if(typeof t=="string")try{t=new f_(t,this.options)}catch{return!1}for(let n=0;n<this.set.length;n++)if(D_(this.set[n],t,this.options))return!0;return!1}};Ug.exports=cc;var p_=jg(),$g=new p_,m_=Gs(),dc=ao(),U=so(),f_=oe(),{safeRe:me,src:h_,t:se,comparatorTrimReplace:g_,tildeTrimReplace:y_,caretTrimReplace:w_}=Gn(),{FLAG_INCLUDE_PRERELEASE:b_,FLAG_LOOSE:S_}=Wn(),E_=new RegExp(h_[se.BUILD],"g"),Fg=e=>e.value==="<0.0.0-0",T_=e=>e.value==="",Hg=(e,t)=>{let n=!0,r=e.slice(),o=r.pop();for(;n&&r.length;)n=r.every(s=>o.intersects(s,t)),o=r.pop();return n},k_=(e,t)=>(e=e.replace(me[se.BUILD],""),U("comp",e,t),e=__(e,t),U("caret",e),e=R_(e,t),U("tildes",e),e=C_(e,t),U("xrange",e),e=P_(e,t),U("stars",e),e),fe=e=>!e||e.toLowerCase()==="x"||e==="*",R_=(e,t)=>e.trim().split(/\s+/).map(n=>v_(n,t)).join(" "),v_=(e,t)=>{let n=t.loose?me[se.TILDELOOSE]:me[se.TILDE];return e.replace(n,(r,o,s,i,a)=>{U("tilde",e,r,o,s,i,a);let l;return fe(o)?l="":fe(s)?l=`>=${o}.0.0 <${+o+1}.0.0-0`:fe(i)?l=`>=${o}.${s}.0 <${o}.${+s+1}.0-0`:a?(U("replaceTilde pr",a),l=`>=${o}.${s}.${i}-${a} <${o}.${+s+1}.0-0`):l=`>=${o}.${s}.${i} <${o}.${+s+1}.0-0`,U("tilde return",l),l})},__=(e,t)=>e.trim().split(/\s+/).map(n=>x_(n,t)).join(" "),x_=(e,t)=>{U("caret",e,t);let n=t.loose?me[se.CARETLOOSE]:me[se.CARET],r=t.includePrerelease?"-0":"";return e.replace(n,(o,s,i,a,l)=>{U("caret",e,o,s,i,a,l);let c;return fe(s)?c="":fe(i)?c=`>=${s}.0.0${r} <${+s+1}.0.0-0`:fe(a)?s==="0"?c=`>=${s}.${i}.0${r} <${s}.${+i+1}.0-0`:c=`>=${s}.${i}.0${r} <${+s+1}.0.0-0`:l?(U("replaceCaret pr",l),s==="0"?i==="0"?c=`>=${s}.${i}.${a}-${l} <${s}.${i}.${+a+1}-0`:c=`>=${s}.${i}.${a}-${l} <${s}.${+i+1}.0-0`:c=`>=${s}.${i}.${a}-${l} <${+s+1}.0.0-0`):(U("no pr"),s==="0"?i==="0"?c=`>=${s}.${i}.${a}${r} <${s}.${i}.${+a+1}-0`:c=`>=${s}.${i}.${a}${r} <${s}.${+i+1}.0-0`:c=`>=${s}.${i}.${a} <${+s+1}.0.0-0`),U("caret return",c),c})},C_=(e,t)=>(U("replaceXRanges",e,t),e.split(/\s+/).map(n=>A_(n,t)).join(" ")),A_=(e,t)=>{e=e.trim();let n=t.loose?me[se.XRANGELOOSE]:me[se.XRANGE];return e.replace(n,(r,o,s,i,a,l)=>{U("xRange",e,r,o,s,i,a,l);let c=fe(s),u=c||fe(i),d=u||fe(a),p=d;return o==="="&&p&&(o=""),l=t.includePrerelease?"-0":"",c?o===">"||o==="<"?r="<0.0.0-0":r="*":o&&p?(u&&(i=0),a=0,o===">"?(o=">=",u?(s=+s+1,i=0,a=0):(i=+i+1,a=0)):o==="<="&&(o="<",u?s=+s+1:i=+i+1),o==="<"&&(l="-0"),r=`${o+s}.${i}.${a}${l}`):u?r=`>=${s}.0.0${l} <${+s+1}.0.0-0`:d&&(r=`>=${s}.${i}.0${l} <${s}.${+i+1}.0-0`),U("xRange return",r),r})},P_=(e,t)=>(U("replaceStars",e,t),e.trim().replace(me[se.STAR],"")),I_=(e,t)=>(U("replaceGTE0",e,t),e.trim().replace(me[t.includePrerelease?se.GTE0PRE:se.GTE0],"")),O_=e=>(t,n,r,o,s,i,a,l,c,u,d,p)=>(fe(r)?n="":fe(o)?n=`>=${r}.0.0${e?"-0":""}`:fe(s)?n=`>=${r}.${o}.0${e?"-0":""}`:i?n=`>=${n}`:n=`>=${n}${e?"-0":""}`,fe(c)?l="":fe(u)?l=`<${+c+1}.0.0-0`:fe(d)?l=`<${c}.${+u+1}.0-0`:p?l=`<=${c}.${u}.${d}-${p}`:e?l=`<${c}.${u}.${+d+1}-0`:l=`<=${l}`,`${n} ${l}`.trim()),D_=(e,t,n)=>{for(let r=0;r<e.length;r++)if(!e[r].test(t))return!1;if(t.prerelease.length&&!n.includePrerelease){for(let r=0;r<e.length;r++)if(U(e[r].semver),e[r].semver!==dc.ANY&&e[r].semver.prerelease.length>0){let o=e[r].semver;if(o.major===t.major&&o.minor===t.minor&&o.patch===t.patch)return!0}return!1}return!0}});var ao=_((xF,Kg)=>{"use strict";var lo=Symbol("SemVer ANY"),mc=class e{static get ANY(){return lo}constructor(t,n){if(n=Jg(n),t instanceof e){if(t.loose===!!n.loose)return t;t=t.value}t=t.trim().split(/\s+/).join(" "),pc("comparator",t,n),this.options=n,this.loose=!!n.loose,this.parse(t),this.semver===lo?this.value="":this.value=this.operator+this.semver.version,pc("comp",this)}parse(t){let n=this.options.loose?Bg[Wg.COMPARATORLOOSE]:Bg[Wg.COMPARATOR],r=t.match(n);if(!r)throw new TypeError(`Invalid comparator: ${t}`);this.operator=r[1]!==void 0?r[1]:"",this.operator==="="&&(this.operator=""),r[2]?this.semver=new Gg(r[2],this.options.loose):this.semver=lo}toString(){return this.value}test(t){if(pc("Comparator.test",t,this.options.loose),this.semver===lo||t===lo)return!0;if(typeof t=="string")try{t=new Gg(t,this.options)}catch{return!1}return uc(t,this.operator,this.semver,this.options)}intersects(t,n){if(!(t instanceof e))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new qg(t.value,n).test(this.value):t.operator===""?t.value===""?!0:new qg(this.value,n).test(t.semver):(n=Jg(n),n.includePrerelease&&(this.value==="<0.0.0-0"||t.value==="<0.0.0-0")||!n.includePrerelease&&(this.value.startsWith("<0.0.0")||t.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&t.operator.startsWith(">")||this.operator.startsWith("<")&&t.operator.startsWith("<")||this.semver.version===t.semver.version&&this.operator.includes("=")&&t.operator.includes("=")||uc(this.semver,"<",t.semver,n)&&this.operator.startsWith(">")&&t.operator.startsWith("<")||uc(this.semver,">",t.semver,n)&&this.operator.startsWith("<")&&t.operator.startsWith(">")))}};Kg.exports=mc;var Jg=Gs(),{safeRe:Bg,t:Wg}=Gn(),uc=ac(),pc=so(),Gg=oe(),qg=Ce()});var co=_((CF,Vg)=>{"use strict";var N_=Ce(),L_=(e,t,n)=>{try{t=new N_(t,n)}catch{return!1}return t.test(e)};Vg.exports=L_});var Xg=_((AF,Yg)=>{"use strict";var M_=Ce(),j_=(e,t)=>new M_(e,t).set.map(n=>n.map(r=>r.value).join(" ").trim().split(" "));Yg.exports=j_});var Qg=_((PF,zg)=>{"use strict";var $_=oe(),F_=Ce(),H_=(e,t,n)=>{let r=null,o=null,s=null;try{s=new F_(t,n)}catch{return null}return e.forEach(i=>{s.test(i)&&(!r||o.compare(i)===-1)&&(r=i,o=new $_(r,n))}),r};zg.exports=H_});var ey=_((IF,Zg)=>{"use strict";var U_=oe(),J_=Ce(),B_=(e,t,n)=>{let r=null,o=null,s=null;try{s=new J_(t,n)}catch{return null}return e.forEach(i=>{s.test(i)&&(!r||o.compare(i)===1)&&(r=i,o=new U_(r,n))}),r};Zg.exports=B_});var ry=_((OF,ny)=>{"use strict";var fc=oe(),W_=Ce(),ty=io(),G_=(e,t)=>{e=new W_(e,t);let n=new fc("0.0.0");if(e.test(n)||(n=new fc("0.0.0-0"),e.test(n)))return n;n=null;for(let r=0;r<e.set.length;++r){let o=e.set[r],s=null;o.forEach(i=>{let a=new fc(i.semver.version);switch(i.operator){case">":a.prerelease.length===0?a.patch++:a.prerelease.push(0),a.raw=a.format();case"":case">=":(!s||ty(a,s))&&(s=a);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${i.operator}`)}}),s&&(!n||ty(n,s))&&(n=s)}return n&&e.test(n)?n:null};ny.exports=G_});var sy=_((DF,oy)=>{"use strict";var q_=Ce(),K_=(e,t)=>{try{return new q_(e,t).range||"*"}catch{return null}};oy.exports=K_});var ni=_((NF,cy)=>{"use strict";var V_=oe(),ly=ao(),{ANY:Y_}=ly,X_=Ce(),z_=co(),iy=io(),ay=zs(),Q_=Zs(),Z_=Qs(),ex=(e,t,n,r)=>{e=new V_(e,r),t=new X_(t,r);let o,s,i,a,l;switch(n){case">":o=iy,s=Q_,i=ay,a=">",l=">=";break;case"<":o=ay,s=Z_,i=iy,a="<",l="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(z_(e,t,r))return!1;for(let c=0;c<t.set.length;++c){let u=t.set[c],d=null,p=null;if(u.forEach(f=>{f.semver===Y_&&(f=new ly(">=0.0.0")),d=d||f,p=p||f,o(f.semver,d.semver,r)?d=f:i(f.semver,p.semver,r)&&(p=f)}),d.operator===a||d.operator===l||(!p.operator||p.operator===a)&&s(e,p.semver))return!1;if(p.operator===l&&i(e,p.semver))return!1}return!0};cy.exports=ex});var uy=_((LF,dy)=>{"use strict";var tx=ni(),nx=(e,t,n)=>tx(e,t,">",n);dy.exports=nx});var my=_((MF,py)=>{"use strict";var rx=ni(),ox=(e,t,n)=>rx(e,t,"<",n);py.exports=ox});var gy=_((jF,hy)=>{"use strict";var fy=Ce(),sx=(e,t,n)=>(e=new fy(e,n),t=new fy(t,n),e.intersects(t,n));hy.exports=sx});var wy=_(($F,yy)=>{"use strict";var ix=co(),ax=xe();yy.exports=(e,t,n)=>{let r=[],o=null,s=null,i=e.sort((u,d)=>ax(u,d,n));for(let u of i)ix(u,t,n)?(s=u,o||(o=u)):(s&&r.push([o,s]),s=null,o=null);o&&r.push([o,null]);let a=[];for(let[u,d]of r)u===d?a.push(u):!d&&u===i[0]?a.push("*"):d?u===i[0]?a.push(`<=${d}`):a.push(`${u} - ${d}`):a.push(`>=${u}`);let l=a.join(" || "),c=typeof t.raw=="string"?t.raw:String(t);return l.length<c.length?l:t}});var Ry=_((FF,ky)=>{"use strict";var by=Ce(),yc=ao(),{ANY:hc}=yc,gc=co(),wc=xe(),lx=(e,t,n={})=>{if(e===t)return!0;e=new by(e,n),t=new by(t,n);let r=!1;e:for(let o of e.set){for(let s of t.set){let i=dx(o,s,n);if(r=r||i!==null,i)continue e}if(r)return!1}return!0},cx=[new yc(">=0.0.0-0")],Sy=[new yc(">=0.0.0")],dx=(e,t,n)=>{if(e===t)return!0;if(e.length===1&&e[0].semver===hc){if(t.length===1&&t[0].semver===hc)return!0;n.includePrerelease?e=cx:e=Sy}if(t.length===1&&t[0].semver===hc){if(n.includePrerelease)return!0;t=Sy}let r=new Set,o,s;for(let f of e)f.operator===">"||f.operator===">="?o=Ey(o,f,n):f.operator==="<"||f.operator==="<="?s=Ty(s,f,n):r.add(f.semver);if(r.size>1)return null;let i;if(o&&s){if(i=wc(o.semver,s.semver,n),i>0)return null;if(i===0&&(o.operator!==">="||s.operator!=="<="))return null}for(let f of r){if(o&&!gc(f,String(o),n)||s&&!gc(f,String(s),n))return null;for(let h of t)if(!gc(f,String(h),n))return!1;return!0}let a,l,c,u,d=s&&!n.includePrerelease&&s.semver.prerelease.length?s.semver:!1,p=o&&!n.includePrerelease&&o.semver.prerelease.length?o.semver:!1;d&&d.prerelease.length===1&&s.operator==="<"&&d.prerelease[0]===0&&(d=!1);for(let f of t){if(u=u||f.operator===">"||f.operator===">=",c=c||f.operator==="<"||f.operator==="<=",o){if(p&&f.semver.prerelease&&f.semver.prerelease.length&&f.semver.major===p.major&&f.semver.minor===p.minor&&f.semver.patch===p.patch&&(p=!1),f.operator===">"||f.operator===">="){if(a=Ey(o,f,n),a===f&&a!==o)return!1}else if(o.operator===">="&&!f.test(o.semver))return!1}if(s){if(d&&f.semver.prerelease&&f.semver.prerelease.length&&f.semver.major===d.major&&f.semver.minor===d.minor&&f.semver.patch===d.patch&&(d=!1),f.operator==="<"||f.operator==="<="){if(l=Ty(s,f,n),l===f&&l!==s)return!1}else if(s.operator==="<="&&!f.test(s.semver))return!1}if(!f.operator&&(s||o)&&i!==0)return!1}return!(o&&c&&!s&&i!==0||s&&u&&!o&&i!==0||p||d)},Ey=(e,t,n)=>{if(!e)return t;let r=wc(e.semver,t.semver,n);return r>0?e:r<0||t.operator===">"&&e.operator===">="?t:e},Ty=(e,t,n)=>{if(!e)return t;let r=wc(e.semver,t.semver,n);return r<0?e:r>0||t.operator==="<"&&e.operator==="<="?t:e};ky.exports=lx});var Cy=_((HF,xy)=>{"use strict";var bc=Gn(),vy=Wn(),ux=oe(),_y=nc(),px=Ft(),mx=Xh(),fx=Qh(),hx=tg(),gx=og(),yx=ig(),wx=lg(),bx=dg(),Sx=pg(),Ex=xe(),Tx=gg(),kx=wg(),Rx=Xs(),vx=Tg(),_x=Rg(),xx=io(),Cx=zs(),Ax=sc(),Px=ic(),Ix=Qs(),Ox=Zs(),Dx=ac(),Nx=Dg(),Lx=Lg(),Mx=ao(),jx=Ce(),$x=co(),Fx=Xg(),Hx=Qg(),Ux=ey(),Jx=ry(),Bx=sy(),Wx=ni(),Gx=uy(),qx=my(),Kx=gy(),Vx=wy(),Yx=Ry();xy.exports={parse:px,valid:mx,clean:fx,inc:hx,diff:gx,major:yx,minor:wx,patch:bx,prerelease:Sx,compare:Ex,rcompare:Tx,compareLoose:kx,compareBuild:Rx,sort:vx,rsort:_x,gt:xx,lt:Cx,eq:Ax,neq:Px,gte:Ix,lte:Ox,cmp:Dx,coerce:Nx,truncate:Lx,Comparator:Mx,Range:jx,satisfies:$x,toComparators:Fx,maxSatisfying:Hx,minSatisfying:Ux,minVersion:Jx,validRange:Bx,outside:Wx,gtr:Gx,ltr:qx,intersects:Kx,simplifyRange:Vx,subset:Yx,SemVer:ux,re:bc.re,src:bc.src,tokens:bc.t,SEMVER_SPEC_VERSION:vy.SEMVER_SPEC_VERSION,RELEASE_TYPES:vy.RELEASE_TYPES,compareIdentifiers:_y.compareIdentifiers,rcompareIdentifiers:_y.rcompareIdentifiers}});var Ky={};cr(Ky,{POST_MERGE_MARKER_START:()=>wo,POST_REWRITE_MARKER_START:()=>go,PREPARE_MSG_MARKER_START:()=>yo,PRE_PUSH_MARKER_START:()=>bo,installGitHook:()=>Pc,installPostMergeHook:()=>Dc,installPostRewriteHook:()=>Ic,installPrePushHook:()=>Nc,installPrepareMsgHook:()=>Oc,isGitHookInstalled:()=>Gy,isGitPipelineFullyInstalled:()=>qy,isHookSectionInstalled:()=>Yn,removeGitHook:()=>Lc,removePostMergeHook:()=>$c,removePostRewriteHook:()=>Mc,removePrePushHook:()=>Fc,removePrepareMsgHook:()=>jc});async function Pc(e){let t=await xn(e),n=(0,Xn.join)(t,"post-commit"),r=bt("post-commit"),o=[Vn,r,Ac].join(`
`),s,i="";try{if(i=await(0,Z.readFile)(n,"utf-8"),i.includes(Vn)){let l=new RegExp(`\\n*${Ht(Vn)}[\\s\\S]*?${Ht(Ac)}\\n*`,"g"),u=`${i.replace(l,`
`).trimEnd()}

${o}
`;return i===u?(await ui(n),{path:n}):(await P(n,u),await(0,Z.chmod)(n,493),{path:n})}s="Existing post-commit hook found \u2014 Jolli Memory section appended",li.warn(s)}catch{}let a;i?a=`${i}

${o}
`:a=`#!/bin/sh

${o}
`,await(0,Z.mkdir)(t,{recursive:!0}),await P(n,a);try{await(0,Z.chmod)(n,493)}catch{}return li.info("Git post-commit hook installed"),{warning:s,path:n}}async function Ic(e){let t=bt("post-rewrite",'"$1"'),n=[go,t,Uy].join(`
`);return ci(e,"post-rewrite",n,go)}async function Oc(e){let t='"$HOME/.jolli/jollimemory/run-hook"',n=["__jolli_prepare_msg_previous_status=$?",`if [ -x ${t} ]; then ${t} prepare-commit-msg "$1" "$2" || true; fi`,'(exit "$__jolli_prepare_msg_previous_status")'].join(`
`),r=[yo,n,Jy].join(`
`);return ci(e,"prepare-commit-msg",r,yo)}async function Dc(e){let t=bt("post-merge"),n=[wo,t,By].join(`
`);return ci(e,"post-merge",n,wo)}async function Nc(e){let t='"$HOME/.jolli/jollimemory/run-hook"',n=["__jolli_pre_push_previous_status=$?",`if [ -x ${t} ]; then ${t} pre-push "$@" || true; fi`,'(exit "$__jolli_pre_push_previous_status")'].join(`
`),r=[bo,n,Wy].join(`
`);return ci(e,"pre-push",r,bo)}async function ci(e,t,n,r){let o=n.slice(n.lastIndexOf(`
`)+1),s=await xn(e),i=(0,Xn.join)(s,t),a,l="";try{if(l=await(0,Z.readFile)(i,"utf-8"),l.includes(r)){let u=new RegExp(`\\n*${Ht(r)}[\\s\\S]*?${Ht(o)}\\n*`,"g"),p=`${l.replace(u,`
`).trimEnd()}

${n}
`;return l===p?(await ui(i),{path:i}):(await P(i,p),await(0,Z.chmod)(i,493),{path:i})}a=`Existing ${t} hook found \u2014 Jolli Memory section appended`,li.warn(a)}catch{}let c;l?c=`${l}

${n}
`:c=`#!/bin/sh

${n}
`,await(0,Z.mkdir)(s,{recursive:!0}),await P(i,c);try{await(0,Z.chmod)(i,493)}catch{}return li.info("Git %s hook installed",t),{warning:a,path:i}}async function Lc(e){let t;try{let s=await xn(e);t=(0,Xn.join)(s,"post-commit")}catch{return{}}let n;try{n=await(0,Z.readFile)(t,"utf-8")}catch{return{}}if(!n.includes(Vn))return{};let r=new RegExp(`\\n*${Ht(Vn)}[\\s\\S]*?${Ht(Ac)}\\n*`,"g"),o=n.replace(r,`
`);if(o.trim()==="#!/bin/sh"||o.trim()===""){let{rm:s}=await import("node:fs/promises");await s(t,{force:!0})}else await P(t,o),await ui(t);return{}}async function Mc(e){await di(e,"post-rewrite",go,Uy)}async function jc(e){await di(e,"prepare-commit-msg",yo,Jy)}async function $c(e){await di(e,"post-merge",wo,By)}async function Fc(e){await di(e,"pre-push",bo,Wy)}async function di(e,t,n,r){let o;try{o=await xn(e)}catch{return}let s=(0,Xn.join)(o,t),i;try{i=await(0,Z.readFile)(s,"utf-8")}catch{return}if(!i.includes(n))return;let a=new RegExp(`\\n*${Ht(n)}[\\s\\S]*?${Ht(r)}\\n*`,"g"),l=i.replace(a,`
`);if(l.trim()==="#!/bin/sh"||l.trim()===""){let{rm:c}=await import("node:fs/promises");await c(s,{force:!0})}else await P(s,l),await ui(s)}async function Gy(e){return Yn(e,"post-commit",Vn)}async function qy(e){return await Gy(e)&&await Yn(e,"post-rewrite",go)&&await Yn(e,"prepare-commit-msg",yo)&&await Yn(e,"post-merge",wo)}async function Yn(e,t,n){try{let r=await xn(e),o=(0,Xn.join)(r,t);return(await(0,Z.readFile)(o,"utf-8")).includes(n)?process.platform==="win32"?!0:((await(0,Z.stat)(o)).mode&73)!==0:!1}catch{return!1}}function Ht(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}async function ui(e){try{((await(0,Z.stat)(e)).mode&73)===0&&await(0,Z.chmod)(e,493)}catch{}}var Z,Xn,li,Vn,Ac,go,Uy,yo,Jy,wo,By,bo,Wy,Hc=g(()=>{"use strict";Z=require("node:fs/promises"),Xn=require("node:path");ae();ue();y();Js();li=m("GitHookInstaller"),Vn="# >>> JolliMemory post-commit hook >>>",Ac="# <<< JolliMemory post-commit hook <<<",go="# >>> JolliMemory post-rewrite hook >>>",Uy="# <<< JolliMemory post-rewrite hook <<<",yo="# >>> JolliMemory prepare-commit-msg hook >>>",Jy="# <<< JolliMemory prepare-commit-msg hook <<<",wo="# >>> JolliMemory post-merge hook >>>",By="# <<< JolliMemory post-merge hook <<<",bo="# >>> JolliMemory pre-push hook >>>",Wy="# <<< JolliMemory pre-push hook <<<"});function dd(){return"0.99.13"}function ub(e){return/^\d/.test(e)}function fb(e,t){if(!ub(e)||!ub(t))return!1;let n=s=>s.split(".").map(i=>Number.parseInt(i,10)||0),r=n(e),o=n(t);for(let s=0;s<Math.max(r.length,o.length);s++){let i=r[s]??0,a=o[s]??0;if(i!==a)return i>a}return!1}function Ro(e,t=YA){return new Promise(n=>{let r=Buffer.alloc(0),o=!1,s=c=>{o||(o=!0,clearTimeout(l),e.removeListener("data",i),e.removeListener("close",a),e.removeListener("error",a),n(c))},i=c=>{r=Buffer.concat([r,c]);let u=r.indexOf(10);if(u===-1){r.length>XA&&s(void 0);return}s({line:r.subarray(0,u).toString("utf8"),rest:r.subarray(u+1)})},a=()=>s(void 0),l=setTimeout(()=>s(void 0),t);l.unref?.(),e.on("data",i),e.once("close",a),e.once("error",a)})}function hb(e,t){return(0,ar.join)((0,pb.tmpdir)(),`.jolli-${e}-${t}`)}function Li(e){return`${JSON.stringify(e)}
`}var cd,pb,ar,mb,ld,YA,XA,Mi=g(()=>{"use strict";cd=require("node:fs"),pb=require("node:os"),ar=require("node:path"),mb=require("node:url");we();YA=1e4,XA=4096});function ZA(e){let t=(0,fn.join)((0,fn.dirname)((0,pd.fileURLToPath)(e)),zA);return(0,ud.existsSync)(t)?t:void 0}function md(e,t=process.argv[1],n=process.execArgv){let r=ZA(e);if(r)return{entry:r,nodeArgs:[]};let o=(0,fn.dirname)((0,pd.fileURLToPath)(e)),s=(0,fn.join)((0,fn.dirname)(o),QA);if(t?.endsWith(".ts")&&(0,ud.existsSync)(s))return{entry:s,nodeArgs:n}}var ud,fn,pd,zA,QA,gb=g(()=>{"use strict";ud=require("node:fs"),fn=require("node:path"),pd=require("node:url"),zA="Cli.js",QA="Cli.ts"});var IB,OB,DB,yb=g(()=>{"use strict";ue();jn();ne();y();Nt();Zt();IB=m("Backup"),OB=2*1024*1024*1024,DB=1440*60*1e3});function Tb(e){return hb("global",e)}function eP(e=(0,bb.homedir)()){return(0,wb.createHash)("sha256").update(mr(e,"win32")).digest("hex").slice(0,16)}function vo(e={}){if((e.platform??process.platform)==="win32")return`\\\\.\\pipe\\jolli-global-${eP(e.home)}`;let n=e.uid??process.getuid?.()??0;return(0,Sb.join)(Tb(n),"daemon.sock")}function hd(e){let t;try{t=JSON.parse(e)}catch{return}if(typeof t!="object"||t===null)return;let{t:n,protocol:r,version:o,pid:s,startedAt:i}=t;if(!(n!=="hello"||r!==Eb)&&!(typeof o!="string"||typeof s!="number"||typeof i!="number"))return{t:"hello",protocol:r,version:o,pid:s,startedAt:i}}var wb,bb,Sb,Eb,fd,gd=g(()=>{"use strict";wb=require("node:crypto"),bb=require("node:os"),Sb=require("node:path");Mi();we();Eb=1,fd=300});var FB,kb=g(()=>{"use strict";y();FB=m("TaskScheduler")});var QB,yd,ZB,Rb=g(()=>{"use strict";Mi();yb();y();gd();kb();QB=m("GlobalDaemon"),yd="global-daemon",ZB=3600*1e3});var Td={};cr(Td,{GLOBAL_DAEMON_ENSURE_COMMAND:()=>bd,ensureGlobalDaemon:()=>oP,probeGlobalDaemon:()=>aP,retireGlobalDaemon:()=>iP,shouldSkipGlobalDaemon:()=>Sd,triggerEnsureGlobalDaemon:()=>sP});function Sd(e){return e!==null&&nP.has(e)}function Ed(e){return new Promise(t=>{let n=!1,r=(0,_b.connect)(e),o=i=>{n||(n=!0,clearTimeout(s),r.removeAllListeners("connect"),i.socket===void 0&&r.destroy(),t(i))},s=setTimeout(()=>o({socket:void 0}),tP);s.unref?.(),r.once("connect",()=>o({socket:r})),r.on("error",i=>{if(n){Me.warn("global daemon socket error after connect: %s",v(i));return}o({socket:void 0,code:i.code})})})}async function rP(e){if(!e.startsWith("\\\\.\\pipe\\"))try{await(0,vb.unlink)(e)}catch{}}async function oP(e={}){try{if(Sd(e.command??null))return"skipped-excluded-command";if(!Dt(e.nodeVersion??process.versions.node))return"skipped-unsupported-node";let t=e.socketPath??vo(),{socket:n,code:r}=await Ed(t);if(!n)return r==="ECONNREFUSED"&&await rP(t),(e.spawnDaemon??lP)(t),"spawned";try{let o=await Ro(n,e.helloTimeoutMs??fd),s=o?hd(o.line):void 0;if(!s)return"already-running";let i=e.ownVersion??dd();return fb(i,s.version)?(n.write(Li({t:"retire"})),Me.info("retiring global daemon pid %d (v%s < v%s)",s.pid,s.version,i),"retired-incumbent"):"already-running"}finally{n.end()}}catch(t){return Me.warn("could not ensure the global daemon: %s",v(t)),"failed"}}function sP(e={}){try{return Sd(e.command??null)||!Dt(e.nodeVersion??process.versions.node)?!1:(cP(e.socketPath),!0)}catch(t){return Me.warn("could not trigger the global daemon ensure helper: %s",v(t)),!1}}async function iP(e={}){try{let{socket:t}=await Ed(e.socketPath??vo());return t?(await Ro(t,fd),t.write(Li({t:"retire"})),t.end(),!0):!1}catch(t){return Me.warn("could not retire the global daemon: %s",v(t)),!1}}async function aP(e){try{let{socket:t}=await Ed(e??vo());if(!t)return;try{let n=await Ro(t,5e3);return n?hd(n.line):void 0}finally{t.end()}}catch{return}}function lP(e){let t=md(__jmImportMetaUrl);if(!t){Me.warn("Cannot locate the CLI entry to spawn the global daemon");return}let n=at(process.execPath,[...t.nodeArgs,t.entry,yd,"--socket",e],{detached:!0,stdio:"ignore",cwd:(0,wd.homedir)()});n.on("error",r=>Me.warn("global daemon failed to spawn: %s",v(r))),n.unref(),Me.info("spawned global daemon (pid %d)",n.pid??-1)}function cP(e){let t=md(__jmImportMetaUrl);if(!t){Me.warn("Cannot locate the CLI entry to spawn the global daemon ensure helper");return}let n=[...t.nodeArgs,t.entry,bd];e&&n.push("--socket",e);let r=at(process.execPath,n,{detached:!0,stdio:"ignore",cwd:(0,wd.homedir)()});r.on("error",o=>Me.warn("global daemon ensure helper failed to start: %s",v(o))),r.unref(),Me.info("spawned global daemon ensure helper (pid %d)",r.pid??-1)}var vb,_b,wd,Me,bd,tP,nP,kd=g(()=>{"use strict";vb=require("node:fs/promises"),_b=require("node:net"),wd=require("node:os");Mi();Nt();y();gb();Se();Rb();gd();Me=m("EnsureGlobalDaemon"),bd="global-daemon-ensure",tP=200,nP=new Set([yd,bd,"mcp","mcp-serve","daemon","uninstall","disable"])});var OP={};cr(OP,{buildCodexBootstrapOutput:()=>jb,main:()=>Fb,runCodexPluginBootstrap:()=>$b});module.exports=Kb(OP);var xo=require("node:path"),Mb=require("node:url");var xt=require("node:fs"),Id=require("node:os"),Po=require("node:path"),Oe="JOLLI_LOCAL_AGENT_CHILD",Od=".jolli-local-agent-child",Dd="jolli-localagent-";function Fe(){let e=(0,xt.mkdtempSync)((0,Po.join)((0,Id.tmpdir)(),Dd));try{(0,xt.writeFileSync)((0,Po.join)(e,Od),"","utf-8")}catch(t){throw(0,xt.rmSync)(e,{recursive:!0,force:!0}),t}return e}function Io(e=process.env,t){return e[Oe]==="1"?!0:t!==void 0&&(0,xt.existsSync)((0,Po.join)(t,Od))}ue();Be();lt();ne();var Ti=require("node:fs/promises"),un=require("node:path"),Iw=require("node:url");var Pa=require("node:fs"),gp=require("node:fs/promises"),Ia=require("node:os"),Cr=require("node:path");y();We();var JO=m("AntigravityDetector"),yp=["antigravity","antigravity-ide","antigravity-cli"];function wp(e=(0,Ia.homedir)()){let t=[];for(let n of yp){let r=(0,Cr.join)(e,".gemini",n),o=(0,Cr.join)(r,"conversations");(0,Pa.existsSync)(o)&&t.push({variant:n,root:r,conversationsDir:o,brainDir:(0,Cr.join)(r,"brain")})}return t}async function DE(e){for(let t of wp(e))try{if((await(0,gp.readdir)(t.conversationsDir)).some(n=>n.endsWith(".db")))return!0}catch{}return!1}async function bp(e=(0,Ia.homedir)()){return await DE(e)?!0:yp.some(t=>(0,Pa.existsSync)((0,Cr.join)(e,".gemini",t)))}y();var Oa=class{constructor(){this.slots=8;this.bytesCap=67108864;this.slotsInUse=0;this.bytesInUse=0;this.waiting=[]}get width(){return this.slots}configure(t){t.slots!==void 0&&(this.slots=Math.max(1,Math.floor(t.slots))),t.bytesInFlight!==void 0&&(this.bytesCap=Math.max(0,Math.floor(t.bytesInFlight))),this.pump()}reset(){this.slots=8,this.bytesCap=67108864,this.pump()}async run(t,n){let r=await this.acquire(Math.max(0,t));try{return await n()}finally{this.slotsInUse--,this.bytesInUse-=r,this.pump()}}clamp(t){return Math.min(t,this.bytesCap)}fits(t){return this.slotsInUse<this.slots&&this.bytesInUse+this.clamp(t)<=this.bytesCap}acquire(t){return this.waiting.length===0&&this.fits(t)?Promise.resolve(this.take(t)):new Promise(n=>{this.waiting.push({want:t,wake:n})})}take(t){let n=this.clamp(t);return this.slotsInUse++,this.bytesInUse+=n,n}pump(){for(;this.waiting.length>0&&this.fits(this.waiting[0].want);){let t=this.waiting.shift();t.wake(this.take(t.want))}}},WO=new Oa;var Ko="mcp__";function Ar(e){return{name:e,kind:"builtin",calls:0}}function Da(e){return{name:e,kind:"skill",calls:0}}function Nn(e,t){return{name:t?`${e}.${t}`:e,kind:"mcp",server:e,calls:0}}function Vo(e){if(!e.startsWith(Ko))return Ar(e);let t=e.slice(Ko.length),n=t.indexOf("__");return n===-1?Nn(t,""):Nn(t.slice(0,n),t.slice(n+2))}function Sp(e,t){if(t===void 0||t.length===0)return Ar(e);if(!t.startsWith(Ko))return Nn(t,e);let n=t.slice(Ko.length).split("__"),r=n[n.length-1]||n[0]||t;return Nn(r,e)}function NE(e,t){let n=Math.max(e.lastCallAtMs??Number.NEGATIVE_INFINITY,t.lastCallAtMs??Number.NEGATIVE_INFINITY);return Number.isFinite(n)?{lastCallAtMs:n}:{}}var Xt=class{constructor(){this.byKey=new Map;this.seen=new Set}add(t,n=1){let r=`${t.kind}:${t.name}`,o=this.byKey.get(r);if(!o){this.byKey.set(r,{...t,calls:n});return}this.byKey.set(r,{...o,calls:o.calls+n,...NE(o,t)})}addOnce(t,n){if(t!==void 0){if(this.seen.has(t))return;this.seen.add(t)}this.add(n)}hasSeen(t){return this.seen.has(t)}values(){return[...this.byKey.values()]}};y();y();function Ma(e){if(e===void 0)return;let t=Date.parse(e);return Number.isFinite(t)?t:void 0}function Ep(...e){let t=e.filter(n=>n!==void 0);return t.length>0?{lastCallAtMs:Math.max(...t)}:{}}function LE(e){let t=0;for(let n of e)n.type==="tool_result"&&t++;return t}var vp=m("TranscriptParser"),Yo=class{parseLine(t,n){return xp(t,n)}parseUsageTokens(t,n){let r=Rp(t);return r?{input:r.input,output:r.output,cached:r.cached,...r.id&&{dedupKey:r.id}}:{input:0,output:0,cached:0}}parseUsageByModel(t){let n=new Map,r=new Set;for(let o of t){let s=Rp(o);if(!s)continue;if(s.id){if(r.has(s.id))continue;r.add(s.id)}let i=n.get(s.model);i?n.set(s.model,{...i,input:i.input+s.input,output:i.output+s.output,cached:i.cached+s.cached}):n.set(s.model,{model:s.model,provider:"anthropic",input:s.input,output:s.output,cached:s.cached})}return[...n.values()].filter(o=>o.input+o.output+o.cached>0)}parseToolUse(t){let n=new Xt,r=[],o=new Map;for(let s of t){let i;try{i=JSON.parse(s)}catch{continue}let a=i,l=a?.message?.content;if(!Array.isArray(l))continue;let c=a.toolUseResult?.commandName,u=typeof c=="string"&&c.length>0?c:void 0,d=LE(l)===1,p=Ma(this.parseTimestamp(s));for(let f of l){let h=f;if(h.type==="tool_result"){u!==void 0&&d&&typeof h.tool_use_id=="string"&&o.set(h.tool_use_id,u);continue}if(h.type!=="tool_use"||typeof h.name!="string")continue;let w=typeof h.id=="string"?h.id:void 0;if(h.name==="Skill"&&typeof h.input?.skill=="string"){r.push({...w!==void 0?{id:w}:{},requested:h.input.skill,...p!==void 0?{atMs:p}:{}});continue}n.addOnce(w,{...Vo(h.name),...p!==void 0&&{lastCallAtMs:p}})}}for(let s of r)n.addOnce(s.id,{...Da((s.id!==void 0?o.get(s.id):void 0)??s.requested),...s.atMs!==void 0&&{lastCallAtMs:s.atMs}});return n.values()}parseTimestamp(t,n){try{let r=JSON.parse(t);return typeof r.timestamp=="string"?r.timestamp:void 0}catch{return}}},Na=class{parseLine(t,n){try{let r=JSON.parse(t),o=typeof r.timestamp=="string"?r.timestamp:void 0;if(r.type!=="event_msg")return null;let i=r.payload;if(!i||typeof i!="object")return null;let a=i.type;return a==="user_message"?FE(i,o):a==="agent_message"?HE(i,o):null}catch(r){return vp.debug("Failed to parse Codex transcript line %d: %s",n,r.message),null}}parseToolUse(t){let n=new Map,r=[];for(let s of t){let i;try{i=JSON.parse(s)}catch{continue}let a=i?.payload;if(a===null||typeof a!="object")continue;let l=a;if(typeof l.type!="string"||!ME.has(l.type))continue;let c=typeof l.invocation?.tool=="string"?l.invocation.tool:void 0,u=typeof l.invocation?.server=="string"?l.invocation.server:"",d;if(c!==void 0)d=u?Nn(u,c):Ar(c);else if(typeof l.name=="string"&&l.name.length>0)d=Sp(l.name,typeof l.namespace=="string"?l.namespace:void 0);else continue;let p=i.timestamp,f=Ma(typeof p=="string"?p:void 0),h={...d,...f!==void 0&&{lastCallAtMs:f}},w=typeof l.call_id=="string"?l.call_id:void 0;if(w===void 0){r.push(h);continue}let T=n.get(w),b=T===void 0||T.kind!=="mcp"&&h.kind==="mcp"?h:T;n.set(w,{...b,...T?Ep(T.lastCallAtMs,h.lastCallAtMs):Ep(h.lastCallAtMs)})}let o=new Xt;for(let s of[...n.values(),...r])o.add(s);return o.values()}},ME=new Set(["function_call","custom_tool_call","local_shell_call","web_search_call","mcp_tool_call_end"]),La=class{parseLine(t,n){try{let r=JSON.parse(t),o=r.type,s=kp(r);if(o==="turn.prompt"){let a=_p(r.input)?.trim();return a?{role:"human",content:a,timestamp:s}:null}let i=$E(r);if(i&&i.type==="text"){let a=typeof i.text=="string"?i.text.trim():"";return a?{role:"assistant",content:a,timestamp:s}:null}return null}catch(r){return vp.debug("Failed to parse Kimi transcript line %d: %s",n,r.message),null}}parseToolUse(t){let n=new Xt;for(let r of t){if(!r.includes(Tp))continue;let o;try{o=JSON.parse(r)}catch{continue}if(o.type!==Tp)continue;let s=o.event;if(s===null||typeof s!="object"||s.type!=="tool.call"||typeof s.name!="string")continue;let i=Ma(this.parseTimestamp(r));n.addOnce(typeof s.toolCallId=="string"?s.toolCallId:void 0,{...s.name===jE&&typeof s.args?.skill=="string"?Da(s.args.skill):Vo(s.name),...i!==void 0&&{lastCallAtMs:i}})}return n.values()}parseTimestamp(t,n){try{return kp(JSON.parse(t))}catch{return}}},Tp="context.append_loop_event",jE="Skill";function $E(e){if(e.type==="context.append_loop_event"){let t=e.event;return t?.type==="content.part"&&t.part&&typeof t.part=="object"?t.part:null}return e.type==="content.part"&&e.part&&typeof e.part=="object"?e.part:null}function kp(e){let t=e.time??e.timestamp;return typeof t=="number"&&Number.isFinite(t)?new Date(t).toISOString():typeof t=="string"&&t.length>0?t:void 0}function _p(e){if(typeof e=="string")return e.length>0?e:null;if(Array.isArray(e)){let t=[];for(let n of e){let r=_p(n);r&&t.push(r)}return t.length>0?t.join(`
`):null}if(e!==null&&typeof e=="object"){let t=e;if((t.type==="text"||t.type===void 0)&&typeof t.text=="string"&&t.text.length>0)return t.text}return null}function FE(e,t){let n=e.message;return typeof n!="string"||n.trim().length===0?null:{role:"human",content:n.trim(),timestamp:t}}function HE(e,t){let n=e.message;return typeof n!="string"||n.trim().length===0?null:{role:"assistant",content:n.trim(),timestamp:t}}function Rp(e){try{return JE(JSON.parse(e))}catch{return null}}function UE(e){return e.startsWith("<")&&e.endsWith(">")}function JE(e){let t=e,n=t?.message?.usage??t?.usage;if(!n||typeof n!="object")return null;let r=i=>typeof n[i]=="number"?n[i]:0,o=t?.message?.model??t?.model,s=t?.message?.id;return{id:typeof s=="string"?s:"",model:typeof o=="string"&&!UE(o)?o:"",input:r("input_tokens"),output:r("output_tokens"),cached:r("cache_creation_input_tokens")}}var BE=new Yo,WE=new Na,GE=new La;function qE(e){switch(e){case"codex":return WE;case"kimi":return GE;case"claude":return BE}}var KE=["claude","codex","kimi"],VE=["gemini","opencode","antigravity","cursor-cli","cline-cli","devin"],XO=new Set([...KE.filter(e=>qE(e).parseToolUse!==void 0),...VE]);var ja=m("TranscriptReader");var YE=["Base directory for this skill:","[Request interrupted by user"],XE=/<(?:system-reminder|ide_opened_file|ide_selection|local-command-caveat|command-name|command-message|command-args|local-command-stdout)>[\s\S]*?<\/(?:system-reminder|ide_opened_file|ide_selection|local-command-caveat|command-name|command-message|command-args|local-command-stdout)>/g;function xp(e,t){try{let n=JSON.parse(e);if(n.isCompactSummary===!0)return ja.debug("Skipping compaction summary at line %d",t),null;if(!n.message||typeof n.message!="object")return null;let r=n.message,o=r.role,s=typeof n.timestamp=="string"?n.timestamp:void 0;if(o==="user")return zE(r,s,t);if(o==="assistant"){let i=Cp(r.content)?.trim();return i?{role:"assistant",content:i,timestamp:s}:null}return null}catch(n){return ja.debug("Failed to parse transcript line %d: %s",t,n.message),null}}function zE(e,t,n){let r=Cp(e.content);if(!r)return null;let o=QE(r);return o.length===0?null:YE.some(s=>o.startsWith(s))?(ja.debug("Skipping filtered user message at line %d",n),null):{role:"human",content:o,timestamp:t}}function QE(e){return e.replace(XE,"").trim()}function Cp(e){if(typeof e=="string")return e.length>0?e:null;if(Array.isArray(e)){let t=[];for(let n of e)if(n!==null&&typeof n=="object"){let r=n;r.type==="text"&&typeof r.text=="string"&&t.push(r.text)}return t.length>0?t.join(`
`):null}return null}ue();we();We();var wD=m("AntigravityDiscoverer"),bD=2880*60*1e3;var Ap=require("node:fs/promises"),zo=require("node:os"),Ha=require("node:path");function ZE(e=(0,zo.homedir)()){return(0,Ha.join)(e,".cline","data")}function Pp(e=(0,zo.homedir)()){return(0,Ha.join)(ZE(e),"sessions")}async function Ip(e=(0,zo.homedir)()){try{return await(0,Ap.access)(Pp(e)),!0}catch{return!1}}y();we();var xD=m("ClineCliDiscoverer"),CD=2880*60*1e3;var Ua=require("node:fs/promises"),Or=require("node:os"),Zo=require("node:path");var Qo=require("node:os"),Ir=require("node:path");y();var ID=m("VscodeWorkspaceLocator"),Op=["Code","Code - Insiders","Cursor","VSCodium","Windsurf"];function pt(e,t=(0,Qo.homedir)()){switch((0,Qo.platform)()){case"darwin":return(0,Ir.join)(t,"Library","Application Support",e);case"win32":return(0,Ir.join)(process.env.APPDATA??(0,Ir.join)(t,"AppData","Roaming"),e);default:return(0,Ir.join)(t,".config",e)}}var eT="saoudrizwan.claude-dev";function tT(e,t){return(0,Zo.join)(pt(e,t),"User","globalStorage",eT)}function Dr(e=(0,Or.homedir)()){return Op.map(t=>tT(t,e))}function es(e){return(0,Zo.join)(e,"settings","cline_mcp_settings.json")}async function Dp(e=(0,Or.homedir)()){for(let t of Dr(e))try{return await(0,Ua.access)((0,Zo.join)(t,"state","taskHistory.json")),!0}catch{}return!1}async function Ja(e=(0,Or.homedir)()){let t=[];for(let n of Dr(e))try{await(0,Ua.access)(es(n)),t.push(n)}catch{}return t}async function Np(e=(0,Or.homedir)()){return(await Ja(e)).length>0}y();we();var FD=m("ClineDiscoverer"),HD=2880*60*1e3;var Ba=require("node:fs/promises"),Lp=require("node:os"),Wa=require("node:path");y();var GD=m("CodexDiscoverer"),qD=2880*60*1e3,nT=".codex";async function Ga(){let e=(0,Wa.join)((0,Lp.homedir)(),nT);try{return(await(0,Ba.stat)(e)).isDirectory()}catch{return!1}}var KD=1440*60*1e3;var jp=require("node:fs/promises"),$p=require("node:os"),qa=require("node:path");y();var rT=m("CopilotChatDetector");function oT(e){return(0,qa.join)(pt("Code",e),"User","globalStorage","github.copilot-chat")}function sT(e=(0,$p.homedir)()){return(0,qa.join)(e,".copilot","session-state")}async function Mp(e){try{return(await(0,jp.stat)(e)).isDirectory()}catch(t){let n=t.code;return n!=="ENOENT"&&rT.warn("Copilot Chat probe stat failed for %s (%s): %s",e,n??"unknown",t.message),!1}}async function Fp(){let[e,t]=await Promise.all([Mp(oT()),Mp(sT())]);return e||t}y();var oN=m("CopilotChatDiscoverer"),sN=2880*60*1e3;var Up=require("node:fs/promises"),Jp=require("node:os"),Bp=require("node:path");y();We();var Wp=m("CopilotDetector");function Gp(){return(0,Bp.join)((0,Jp.homedir)(),".copilot","session-store.db")}async function qp(){return ut()?Ka():(Wp.info("Copilot CLI support disabled: this runtime is Node %s, requires %d.%d+ for built-in SQLite",process.versions.node,dt.major,dt.minor),!1)}async function Ka(){let e=Gp();try{return(await(0,Up.stat)(e)).isFile()}catch(t){let n=t.code;return n!=="ENOENT"&&Wp.warn("Copilot DB stat failed (%s): %s",n??"unknown",t.message),!1}}y();We();var hN=m("CopilotDiscoverer"),gN=2880*60*1e3;var ts=require("node:fs/promises"),ns=require("node:os"),Va=require("node:path");y();we();var EN=m("CursorCliDiscoverer"),TN=2880*60*1e3;function iT(e=(0,ns.homedir)()){return(0,Va.join)(e,".cursor")}function aT(e=(0,ns.homedir)()){return(0,Va.join)(iT(e),"chats")}async function Kp(e=(0,ns.homedir)()){try{return(await(0,ts.stat)(aT(e))).isDirectory()}catch{return!1}}var Vp=require("node:fs/promises"),Yp=require("node:path");y();We();var lT=m("CursorDetector");function Xp(e){return(0,Yp.join)(pt("Cursor",e),"User","globalStorage","state.vscdb")}async function zp(){return ut()?Ya():(lT.info("Cursor support disabled: this runtime is Node %s, requires 22.13+ for built-in SQLite",process.versions.node),!1)}async function Ya(){let e=Xp();try{return(await(0,Vp.stat)(e)).isFile()}catch{return!1}}y();We();var DN=m("CursorDiscoverer"),NN=2880*60*1e3;var Xa=require("node:fs/promises"),Qp=require("node:os"),Ln=require("node:path");y();We();var HN=m("DevinDiscoverer"),UN=2880*60*1e3;function Zp(e){let t=e??(0,Qp.homedir)();if(process.platform==="win32")return(0,Ln.join)(process.env.APPDATA??(0,Ln.join)(t,"AppData","Roaming"),"devin","cli");let n=process.env.XDG_DATA_HOME,r=n&&n.length>0?n:(0,Ln.join)(t,".local","share");return(0,Ln.join)(r,"devin","cli")}function cT(e){return(0,Ln.join)(Zp(e),"sessions.db")}async function dT(){try{return(await(0,Xa.stat)(cT())).isFile()}catch{return!1}}async function em(){if(await dT())return!0;try{return(await(0,Xa.stat)(Zp())).isDirectory()}catch{return!1}}var tm=require("node:fs/promises"),nm=require("node:os"),rm=require("node:path");y();var uT=m("GeminiDetector"),pT=".gemini";async function za(){let e=(0,rm.join)((0,nm.homedir)(),pT);try{return(await(0,tm.stat)(e)).isDirectory()}catch{return uT.debug("Gemini directory not found: %s",e),!1}}ue();jn();var ss=require("node:fs/promises"),xm=require("node:os"),nl=require("node:path");y();var dL=m("KimiDiscoverer"),uL=2880*60*1e3,kT=".kimi-code";function is(){return process.env.KIMI_CODE_HOME||(0,nl.join)((0,xm.homedir)(),kT)}async function Cm(){let e=is();try{return(await(0,ss.stat)(e)).isDirectory()}catch{return!1}}Be();ne();var as={"claude-plugin":{host:"claude",localAgentTool:"claude-code",skillInvocation:"/jolli:<name>"},"codex-plugin":{host:"codex",localAgentTool:"codex",skillInvocation:"$jolli:<name>"},"cursor-plugin":{host:"cursor",localAgentTool:"cursor-agent",skillInvocation:"/jolli-<name>"}},fL=Object.keys(as);function ls(e){return e===void 0?void 0:as[e]?.localAgentTool}function rl(e,t){return(e===void 0?void 0:as[e]?.skillInvocation)?.replace("<name>",t)}function Pm(e){return(e===void 0?void 0:as[e]?.host)??"claude"}function Am(e,t){return e===void 0||e===t?void 0:e}async function Im(e,t){let n=ls(e);return n===void 0?null:t.localAgentTool!==void 0&&t.aiProvider!==void 0?{tool:n,seededTool:!1,keptTool:Am(t.localAgentTool,n),seededProvider:!1}:qo(r=>{let o=r.localAgentTool===void 0,s=r.aiProvider===void 0,i={tool:n,seededTool:o,keptTool:Am(r.localAgentTool,n),seededProvider:s};return!o&&!s?{update:null,result:i}:{update:{...s?{aiProvider:"local-agent"}:{},...o?{localAgentTool:n}:{}},result:i}})}var Om=require("node:fs/promises"),Dm=require("node:os"),ol=require("node:path");y();We();var RT=m("OpenCodeDiscoverer"),SL=2880*60*1e3;function vT(){return process.env.XDG_DATA_HOME||(0,ol.join)((0,Dm.homedir)(),".local","share")}function _T(){return(0,ol.join)(vT(),"opencode","opencode.db")}async function Nm(){return ut()?sl():(RT.info("OpenCode support disabled: this runtime is Node %s, requires %d.%d+ for built-in SQLite",process.versions.node,dt.major,dt.minor),!1)}async function sl(){let e=_T();try{return(await(0,Om.stat)(e)).isFile()}catch{return!1}}y();ae();Be();ne();var xL=m("PushPendingStore");var CL=10080*60*1e3;var xT=300*1e3,AL=Math.floor(xT/3);Oo();y();Se();var jL=m("PushCompensation");y();cs();y();jn();var GL=m("KBRepoDiscoverer");y();ae();cs();Be();ne();var ZL=m("PushControlStore");lt();var ml=require("node:crypto");$n();var Fm=require("node:crypto"),qe=require("node:fs"),zt=require("node:fs/promises"),ll=require("node:path");y();ae();var Hm="telemetry-queue.ndjson",PT=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,cl=500,IT=1e6;function ds(e){return(0,ll.join)(J(e),Hm)}function OT(e){return typeof e=="string"&&PT.test(e)}function DT(e){let t=(0,Fm.createHash)("sha256").update(e).digest("hex"),n=(Number.parseInt(t.slice(16,18),16)&63|128).toString(16).padStart(2,"0");return`${t.slice(0,8)}-${t.slice(8,12)}-5${t.slice(13,16)}-${n}${t.slice(18,20)}-${t.slice(20,32)}`}function NT(e,t){if(typeof e!="object"||e===null||Array.isArray(e))return null;let n=e;return OT(n.eventId)?n:{...n,eventId:DT(t)}}function Um(e,t){let n=J(e);(0,qe.mkdirSync)(n,{recursive:!0});let r=(0,ll.join)(n,Hm);(0,qe.appendFileSync)(r,`${JSON.stringify(t)}
`,"utf-8");try{if((0,qe.statSync)(r).size>IT){let o=(0,qe.readFileSync)(r,"utf-8").split(`
`).filter(s=>s.trim().length>0).slice(-cl);(0,qe.writeFileSync)(r,o.length>0?`${o.join(`
`)}
`:"","utf-8")}}catch{}}async function dl(e){let t;try{t=await(0,zt.readFile)(ds(e),"utf-8")}catch{return[]}let n=[];for(let r of t.split(`
`)){let o=r.trim();if(o.length!==0)try{let s=NT(JSON.parse(o),o);s&&n.push(s)}catch{}}return n.slice(-cl)}async function Jm(e,t){let n=t.slice(-cl);if(n.length===0){await(0,zt.rm)(ds(e),{force:!0});return}await(0,zt.mkdir)(J(e),{recursive:!0});let r=`${n.map(o=>JSON.stringify(o)).join(`
`)}
`;await P(ds(e),r)}async function Bm(e){await(0,zt.rm)(ds(e),{force:!0})}function LT(e){let t=e.DO_NOT_TRACK;if(t===void 0)return!1;let n=t.trim();return n!==""&&n!=="0"}function ul(e){let t=e.env??process.env;return LT(t)?{enabled:!1,reason:"do-not-track"}:e.platformDisabled===!0?{enabled:!1,reason:"platform-off"}:e.config.telemetry==="off"?{enabled:!1,reason:"config-off"}:{enabled:!0,reason:"on"}}function Wm(e){return ul(e).enabled}var MT={app_installed:"First run after install; installId minted (once per machine). Props: none \u2014 count distinct install_id.",client_activated:"A GUI surface activated (VS Code activate / IntelliJ project open), carrying `surface_version`. First-seen (install_id, surface_version) \u2248 new + upgrade installs that launched. GUI-only \u2014 CLI new/upgrade is read from any event's surface_version.",surface_enabled:"A surface was enabled in a repo. Props: trigger.",surface_disabled:"A surface was disabled / opted out. Props: trigger, reason.",push_enabled:"Outbound push re-enabled for a repo (spec 306, per-repo push control). Props: trigger.",push_disabled:"Outbound push disabled for a repo (spec 306, per-repo push control). Props: trigger.",signin_started:"User initiated OAuth sign-in. Props: trigger.",signin_completed:"jolliApiKey minted \u2014 the conversion event. Props: api_key_minted.",signed_out:"User logged out. Props: none.",ai_provider_selected:"User chose jolli vs anthropic for LLM. Props: provider (discriminator).",memory_bank_migrated:"Migrate-to-Memory-Bank run. Props: outcome, repos, entries_bucket.",onboarding_progressed:"Per-install onboarding-funnel snapshot, emitted from a repo context and deduped by state tuple (+ daily heartbeat). Content-free \u2014 answers 'after install, where do people stall'. Props: in_git_repo, repo_enabled, capture_configured, capture_method (discriminator: local-agent/anthropic/jolli/none), memories_generated, memories_bucket.",command_invoked:'Any CLI command ran (auto-emitted). Props: command (discriminator), ok, duration_ms. MCP tool calls carry a `tool` property and are emitted per call (not per session); the session-level `command:"mcp"` event is suppressed.',recall_performed:"A recall was run. Props: hit, result_count_bucket.",search_performed:"A search was run. Props: query_len_bucket, result_count_bucket.",memory_pushed:"Memories pushed to a Space. Props: kind, created, plans_bucket.",export_performed:"Export run. Props: format (discriminator).",ai_source_detected:"A new AI source transcript was detected. Props: source (discriminator: claude/codex/cursor/\u2026).",settings_opened:"Settings UI opened (vscode/intellij). Props: tab (discriminator).",ingest_completed:"A drainIngest run finished. Props: outcome, ingested, idle (no-op when ingested=0), batches, route_calls, reconcile_calls, touched_slugs, topic_failures, duration_ms. Filter idle=true out for real-ingest latency/health metrics.",error_occurred:"A structured error was raised. Content-free schema: { where (stage/subsystem), code (enumerated), source? , retryable? }. Emitted via trackError(); never carries a message/stack/path.",queue_drained:"QueueWorker finished a drain. Props: ops, duration_ms.",sync_completed:"A memory-bank sync round finished. Props: outcome (discriminator), duration_ms.",toolwindow_opened:"The memory tool window was opened. Props: view.",view_switched:"Tool window view switched (current/bank/knowledge). Props: view (discriminator).",memory_committed:"User committed a memory via the Commit button. Props: files_bucket (bucketed changed-file count), has_conversations (bool), context_bucket (bucketed plans/context count).",memory_expanded:"A committed memory's details were expanded. Props: expanded.",memory_item_opened:"An item inside a memory was opened. Props: item_type (discriminator: conversation/file/plan/note/reference/shipped); render (conversation only: live/stored \u2014 whether the source transcript was reopened or the stored copy was shown); source (conversation only: the transcript source, e.g. claude/codex); status (file only: the git status code, e.g. A/M/D).",session_resumed:"A conversation session was resumed in a terminal. Props: source (discriminator).",recall_prompt_copied:"A recall prompt was copied to the clipboard. Props: none.",memory_ref_id_copied:"A memory reference id (JM-<docId>) was copied to the clipboard. Props: surface_area (discriminator: list/detail \u2014 which UI the chip was clicked in).",memory_pinned:"An item was pinned. Props: kind (discriminator).",memory_unpinned:"An item was unpinned. Props: kind (discriminator).",repo_switched:"User switched the active repo in the tool window's breadcrumb. Props: is_foreign (bool).",branch_switched:"User switched the active branch in the tool window's breadcrumb. Props: is_foreign (bool).",squash_performed:"User squashed commits. Props: count_bucket (bucketed number of commits squashed).",pr_created:"User created or updated a PR from the tool window. Props: action (discriminator: created/updated).",memory_shared:"User invoked Share for a branch's memories (read-only share link). Props: none.",key_rejected:"The server rejected the API key (401/403). Props: retried, where.",reauth_completed:"Re-authentication after a rejected key finished. Props: outcome.",dashboard_opened:"The local web dashboard was opened in a browser (surface web-local). Props: first_run (bool \u2014 first open in this browser profile; per-origin localStorage, so it re-reports across ports, browsers, or a storage clear).",dashboard_view_switched:"The local web dashboard's left-nav view was switched. Props: view (discriminator: stats/standup/repositories/memories). Distinct from view_switched, which is the IDE tool-window event with its own view vocabulary.",range_changed:"The dashboard time-range control was changed. Props: range (discriminator: 7d/30d/90d/custom).",chart_split_changed:"A dashboard card's split-by control was changed. Props: card (discriminator: tokens/mcp), split (discriminator)."};var jT=new Set(Object.keys(MT));function Gm(e){return jT.has(e)}var $T=1,fl=null;function Km(e){let t=ul({config:e.config,env:e.env,platformDisabled:e.platformDisabled}),{surface:n,surfaceVersion:r}=UT();fl={enabled:t.enabled,cwd:e.cwd,installId:e.installId,sessionId:e.sessionId,surface:n,surfaceVersion:r,env:HT(e.origin,e.env)}}function Vm(){return fl}function Lr(e,t={}){FT(e,t,void 0)}function FT(e,t,n){let r=fl;if(!(!r||!r.enabled)&&Gm(e))try{let o={schemaVersion:$T,eventId:(0,ml.randomUUID)(),eventName:e,surface:n??r.surface,surfaceVersion:r.surfaceVersion,installId:r.installId,...r.sessionId?{sessionId:r.sessionId}:{},os:process.platform,arch:process.arch,runtimeVersion:`node-${process.versions.node}`,env:r.env,tsIso:new Date().toISOString(),accountId:null,properties:GT(t)};Um(r.cwd,o)}catch{}}function Ym(e){return!Number.isFinite(e)||e<=0?"0":e<=5?"1-5":e<=20?"6-20":e<=100?"21-100":"100+"}function HT(e,t=process.env){if(t.JOLLI_TELEMETRY_ENV==="sandbox")return"sandbox";if(!e)return"unknown";let n;try{n=new URL(e).hostname.toLowerCase()}catch{return"unknown"}let r=o=>n===o||n.endsWith(`.${o}`);return r("jolli-local.me")?"local":r("jolli.dev")?"dev":r("jolli.cloud")?"preview":r("jolli.ai")?"prod":"unknown"}function UT(e=Ge){let t=e.indexOf("/"),n=t===-1?e:e.slice(0,t),r=t===-1?"unknown":e.slice(t+1);return{surface:n==="vscode-plugin"?"vscode":n,surfaceVersion:r||"unknown"}}var JT=new Set(["token","secret","password","passwd","apikey","api_key","jolliapikey","authtoken","auth_token","accesstoken","access_token","refreshtoken","refresh_token","cookie","credential","credentials"]),BT=4,WT=120;function qm(e){return e.length>WT?"[redacted:long]":/\b(?:sk-|ghp_|gho_|ghs_|github_pat_|xox[baprs]-)/.test(e)||e.includes("-----BEGIN")?"[redacted:secret]":/[^\s@]+@[^\s@]+\.[^\s@]+/.test(e)?"[redacted:email]":e.includes("://")?"[redacted:url]":/^~[/\\]/.test(e)||/[A-Za-z0-9._-][/\\][A-Za-z0-9._-]/.test(e)?"[redacted:path]":e}function pl(e,t){if(t>BT)return"[redacted:deep]";if(e===null)return null;if(typeof e=="number")return Number.isFinite(e)?e:null;if(typeof e=="boolean")return e;if(typeof e=="string")return qm(e);if(Array.isArray(e))return e.map(n=>pl(n,t+1)).filter(n=>n!==void 0);if(typeof e=="object"){let n={};for(let[r,o]of Object.entries(e)){if(JT.has(r.toLowerCase()))continue;let s=pl(o,t+1);s!==void 0&&(n[qm(r)]=s)}return n}}function GT(e){return pl(e,0)}var RM=m("PushControl");lt();y();ue();Be();$o();Ns();var Ah=require("node:path");ms();Zt();y();y();var $t=m("DualWriteStorage"),Zr=class{constructor(t,n){this.primary=t;this.shadow=n;this.kind="dual-write"}get kbRoot(){return this.shadow.kbRoot}async readFile(t){return this.primary.readFile(t)}async batchReadFiles(t){if(this.primary.batchReadFiles)return this.primary.batchReadFiles(t);let n=new Map;for(let r of t)n.set(r,await this.primary.readFile(r));return n}async writeFiles(t,n){if(!q()){await this.primary.writeFiles(t,n);try{await this.shadow.writeFiles(t,n),this.shadow.clearDirty?.()}catch(r){$t.warn("Shadow write failed (folder storage): %s",r instanceof Error?r.message:String(r)),this.shadow.markDirty?.(n)}}}async deleteVisibleMarkdown(t){if(!this.shadow.deleteVisibleMarkdown)return!1;try{return await this.shadow.deleteVisibleMarkdown(t)}catch(n){let r=t.commitHash.substring(0,8);return $t.warn("Shadow deleteVisibleMarkdown failed (folder storage) for %s/%s: %s",t.branch,r,v(n)),this.shadow.markDirty?.(`deleteVisibleMarkdown ${t.branch}/${r}`),!1}}async regenerateVisibleMarkdown(t){if(!this.shadow.regenerateVisibleMarkdown)return!1;try{return await this.shadow.regenerateVisibleMarkdown(t)}catch(n){let r=t.commitHash.substring(0,8);return $t.warn("Shadow regenerateVisibleMarkdown failed (folder storage) for %s/%s: %s",t.branch,r,v(n)),this.shadow.markDirty?.(`regenerateVisibleMarkdown ${t.branch}/${r}`),!1}}async deletePlanVisible(t,n){if(this.shadow.deletePlanVisible)try{await this.shadow.deletePlanVisible(t,n)}catch(r){$t.warn("Shadow deletePlanVisible failed (folder storage) for %s on %s: %s",t,n,v(r)),this.shadow.markDirty?.(`deletePlanVisible ${n}/${t}`)}}async deleteNoteVisible(t,n){if(this.shadow.deleteNoteVisible)try{await this.shadow.deleteNoteVisible(t,n)}catch(r){$t.warn("Shadow deleteNoteVisible failed (folder storage) for %s on %s: %s",t,n,v(r)),this.shadow.markDirty?.(`deleteNoteVisible ${n}/${t}`)}}async pruneBranchMappings(t){if(!this.shadow.pruneBranchMappings)return 0;try{return await this.shadow.pruneBranchMappings(t)}catch(n){return $t.warn("Shadow pruneBranchMappings failed (folder storage): %s",v(n)),this.shadow.markDirty?.(`pruneBranchMappings ${t.length}`),0}}async healMissingVisibleMarkdown(t){let n=this.shadow.healMissingVisibleMarkdown?this.shadow:this.primary.healMissingVisibleMarkdown?this.primary:null;if(!n)return{healed:0,skipped:0,failed:0};let r=t?.dropOrphanedManifestEntries??!0,o=n===this.shadow?"shadow":"primary";try{return await n.healMissingVisibleMarkdown?.({dropOrphanedManifestEntries:r})??{healed:0,skipped:0,failed:0}}catch(s){let i=s?.code,a=i?`[${i}] ${v(s)}`:v(s);return $t.warn("%s healMissingVisibleMarkdown failed: %s",o,a),n.markDirty?.("healMissingVisibleMarkdown"),{healed:0,skipped:0,failed:0,error:a}}}async listFiles(t){return this.primary.listFiles(t)}async exists(){return this.primary.exists()}isDirty(){return this.shadow.isDirty?.()??!1}async ensure(){await this.primary.ensure();try{await this.shadow.ensure()}catch(t){$t.warn("Shadow ensure failed: %s",t instanceof Error?t.message:String(t))}}async renderTopicWiki(t){await this.shadow.renderTopicWiki?.(t)}isTopicWikiPresent(){return this.shadow.isTopicWikiPresent?.()??!1}};var O=require("node:fs"),xh=require("node:fs/promises"),N=require("node:path");y();var Q=require("node:fs");var Ne=require("node:path");y();var SR=m("Sync:VaultSymlinkGuard");function ER(e,t){if(!(0,Ne.isAbsolute)(t))throw new Error(`assertNoSymlinksInPathSync: absTargetPath must be absolute, got ${t}`);if(!(0,Ne.isAbsolute)(e))throw new Error(`assertNoSymlinksInPathSync: vaultRoot must be absolute, got ${e}`);let n=(0,Ne.relative)(e,t);if(n===""||n.startsWith("..")||(0,Ne.isAbsolute)(n))throw new Error(`assertNoSymlinksInPathSync: target ${t} is not inside vault ${e}`);let r=n.split(Ne.sep),o=e;for(let s=0;s<r.length-1;s++){let i=r[s];if(i===void 0||i.length===0)continue;o=`${o}${Ne.sep}${i}`;let a;try{a=(0,Q.lstatSync)(o)}catch(l){if(l.code==="ENOENT")return;throw l}if(a.isSymbolicLink())throw SR.warn("Refusing vault write \u2014 symlink in path chain: %s",o),new Error(`Refused vault write: path segment is a symlink at ${o} (target ${t}). Inspect and unlink before retrying.`);if(!a.isDirectory())throw new Error(`Refused vault write: path segment is not a directory at ${o} (target ${t}).`)}}function Jl(e,t,n){ER(e,t),(0,Q.mkdirSync)((0,Ne.dirname)(t),{recursive:!0});let r=`${t}.tmp`,o=Q.constants.O_WRONLY|Q.constants.O_CREAT|Q.constants.O_TRUNC|Q.constants.O_NOFOLLOW,s=(0,Q.openSync)(r,o,420);try{typeof n=="string"?(0,Q.writeSync)(s,n,void 0,"utf-8"):(0,Q.writeSync)(s,n)}finally{(0,Q.closeSync)(s)}(0,Q.renameSync)(r,t)}rs();we();function TR(e){return`skills--${e}`}function Ls(e){return`${TR(e)}.md`}function hh(e){let t=["| Skill | \xD7 | Tokens | Input | Output | Cached |","|---|---|---|---|---|---|"],n=[...e].sort((o,s)=>{let i=Bl(s)-Bl(o);return i!==0?i:o.skill<s.skill?-1:o.skill>s.skill?1:0}),r=!1;for(let o of n){let s=o.detection==="heuristic"?" \u2020":"";s!==""&&(r=!0),t.push(`| ${kR(o.skill)}${s} | ${o.invocationCount} | ${RR(o).join(" | ")} |`)}return r&&t.push("","\u2020 Inferred from a file read rather than an observed invocation: the count is per session, and a human reading the skill file looks the same."),t}function gh(e){let t=`${e.length} skill${e.length===1?"":"s"}`,n=0,r=!1,o=!1;for(let s of e)s.usage!==void 0&&(r=!0,n+=s.usage.input+s.usage.cached+s.usage.output,s.usage.confidence!=="attributed"&&(o=!0));return r?`${t} \xB7 ${wh(n,o?"~":"")} tokens`:t}function yh(e,t){let n=e.commitHash.substring(0,8);return`${["---","type: skill-usage",`commitHash: ${e.commitHash}`,`branch: ${e.branch}`,`generatedAt: ${e.generatedAt}`,"---","",`# Skills used \u2014 ${n}`,"",`_${e.commitMessage}_`,"",...hh(t),""].join(`
`)}
`}function kR(e){return e.replace(/\\/g,"\\\\").replace(/\|/g,"\\|").replace(/[\r\n]+/g," ")}function Bl(e){let t=e.usage;return t===void 0?0:t.input+t.cached+t.output}function RR(e){let t=e.usage;if(t===void 0)return["\u2014","\u2014","\u2014","\u2014"];let n=t.confidence==="attributed"?"":"~";return[Bl(e),t.input,t.output,t.cached].map(r=>wh(r,n))}function wh(e,t){return e<1e3?`${t}${e}`:`${t}${(e/1e3).toFixed(1)}k`}function wt(e){return e.replace(/[\\[\]]/g,"\\$&").replace(/[\r\n]+/g," ")}function bh(e){return e.replace(/[\\[\]~]/g,"\\$&").replace(/[\r\n]+/g," ")}function Ms(e){return e.replace(/[()\s<>"]/g,t=>t==="("?"%28":t===")"?"%29":encodeURIComponent(t))}xl();Pl();Go();Ss();Mt();var Sh=3/1e6,vR=15/1e6,_R=3.75/1e6;function eo(e){return Math.round(e).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function Eh(e){return e>=.01?`$${e.toFixed(2)}`:e>=5e-5?`$${e.toFixed(4)}`:e>0?"<$0.0001":"$0.00"}function Th(e,t){return e?e.input*Sh+e.output*vR+e.cached*_R:t*Sh}function ql(e){let{topics:t,sourceNodes:n}=_f(e),r=[];return xR(r,e),IR(r,e,{withRelevance:!0}),CR(r,e),OR(r,e.e2eTestGuide),DR(r,n),LR(r,t,NR),MR(r),r.join(`
`)}function xR(e,t){let n=Jr(t),r=n.filesChanged,o=kl(t),s=`${r} file${r!==1?"s":""} changed, +${n.insertions} insertions, \u2212${n.deletions} deletions`,i=Ol(B(t));e.push(`# ${t.commitMessage}`,"",`- **Commit:** \`${t.commitHash}\``,`- **Branch:** \`${t.branch}\``,`- **Author:** ${t.commitAuthor}`,`- **Date:** ${i}`,`- **Duration:** ${ff(t)}`,`- **Changes:** ${s}`),o>0&&e.push(`- **Conversations:** ${o} turn${o!==1?"s":""}`);let a=Rl(t);if(a>0){let c=vl(t),u=c.input>0||c.output>0||c.cached>0?c:void 0,d=Eh(Th(u,a)),p=u?` (${eo(u.input)} input, ${eo(u.output)} output, ${eo(u.cached)} cached)`:"";e.push(`- **Task usage:** ${eo(a)} tokens \xB7 ${d}${p}`)}let l=t.jolliDocUrl;l&&e.push(`- **Jolli Memory:** [${l}](${l})`),e.push("","---")}function CR(e,t){let n=t.recap?.trim();n&&e.push("","## Quick recap","",n,"","---")}function AR(e){let t=new Map;for(let o of e){let s=t.get(o.source)??[];s.push(o),t.set(o.source,s)}let n=On().all().map(o=>o.id),r=[];for(let o of n){let s=t.get(o);s&&(r.push(...s),t.delete(o))}for(let o of t.values())r.push(...o);return r}function Wl(e,t,n){return e.get(`${t}:${n}`)??e.get(`${t}:${n.replace(gf,"")}`)}var PR={high:"High",mid:"Med",low:"Low"};function Gl(e){return!e||e.reason===""?"":` \u2014 ${PR[e.tier]} \xB7 ${wt(e.reason)}`}function IR(e,t,n){let r=t.plans??[],o=t.notes??[],s=n?.includeReferences?t.references??[]:[],i=n?.withRelevance?t.excludedContext??[]:[],a=new Map;if(n?.withRelevance)for(let d of t.contextRelevance??[])a.set(`${d.kind}:${d.key}`,{tier:d.tier,reason:d.reason});let l=t.skills??[],c=r.length+o.length+s.length+(l.length>0?1:0);if(c===0&&i.length===0)return;let u=c>1?` (${c})`:"";e.push("",`## Context${u}`,"");for(let d of r){let p=d.jolliPlanDocUrl,f=Gl(Wl(a,"plan",d.slug));e.push((p?`- [${wt(d.title)}](${Ms(p)})`:`- ${wt(d.title)}`)+f)}for(let d of o){let p=d.jolliNoteDocUrl,f=Gl(Wl(a,"note",d.id));e.push((p?`- [${wt(d.title)}](${Ms(p)})`:`- ${wt(d.title)}`)+f)}for(let d of AR(s)){let p=wt(Al(d)),f=d.jolliReferenceDocUrl??d.url,h=Gl(Wl(a,"reference",`${d.source}:${d.nativeId}`));e.push((f?`- [${p}](${Ms(f)})`:`- ${p}`)+h)}if(l.length>0){let d=l.some(p=>p.detection==="heuristic")?" \xB7 some inferred":"";e.push(`- Skills used \u2014 ${wt(gh(l))}${d}`)}for(let d of i)e.push(`- ~~${bh(d.title)}~~ \u2014 Excluded${d.reason?` \xB7 ${wt(d.reason)}`:""}`)}function OR(e,t){if(!(!t||t.length===0)){e.push("",`## E2E Test (${t.length})`);for(let n=0;n<t.length;n++){let r=t[n];e.push("",`### ${n+1}. ${r.title}`),r.preconditions&&e.push("",`**Preconditions:** ${r.preconditions}`),e.push("","**Steps:**");for(let o=0;o<r.steps.length;o++)e.push(`${o+1}. ${r.steps[o]}`);e.push("","**Expected Results:**");for(let o of r.expectedResults)e.push(`- ${o}`)}e.push("","---")}}function DR(e,t){if(!(t.length<=1)){e.push("",`## Source Commits (${t.length})`);for(let n of t){let r=Jr(n),o=n.conversationTurns?` \xB7 ${n.conversationTurns} turns`:"";e.push(`- \`${n.commitHash.substring(0,8)}\` ${n.commitMessage}  _(+${r.insertions} \u2212${r.deletions}${o} \xB7 ${kf(B(n))})_`)}e.push("","---")}}function NR(e,t){if(e.push("","**\u26A1 Why This Change**","",t.trigger),e.push("","**\u{1F4A1} Decisions Behind the Code**","",t.decisions),e.push("","**\u2705 What Was Implemented**","",t.response),t.todo&&e.push("","**\u{1F4CB} Future Enhancements**","",t.todo),t.filesAffected&&t.filesAffected.length>0){e.push("","**\u{1F4C1} FILES**");for(let n of t.filesAffected)e.push(`- \`${n}\``)}}function LR(e,t,n,r={singular:"Summary",plural:"Summaries"}){if(t.length!==0){e.push("",`## ${t.length===1?r.singular:r.plural} (${t.length})`);for(let o=0;o<t.length;o++){let s=t[o],i=s.category?` \`${s.category}\``:"";e.push("",`### ${Rf(o)} \xB7 ${s.title}${i}`),n(e,s)}}}function MR(e,t){let n=Ol(new Date().toISOString()),r=t?vf(t):void 0,o=r?` \xB7 via ${r}`:"";e.push("","---","",`*Generated by Jolli Memory \xB7 ${n}${o}*`)}var kh="<!-- Generated by Jolli Memory \xB7 do not edit \u2014 regenerated on every merge -->";function Rh(e,t,n,r){let o=[];if(o.push(`# ${e.title}`),o.push(""),o.push(kh),o.push(""),o.push(`> **Source branches:** ${t.join(", ")}`),o.push(`> **Merged:** ${n}`),o.push(`> **Topic slug:** \`${e.stableSlug}\` (stable across re-merges)`),o.push(""),o.push(e.content.trim()),o.push(""),e.keyDecisions&&e.keyDecisions.length>0){o.push("## Key Decisions"),o.push("");for(let s of e.keyDecisions)o.push(`- ${s}`);o.push("")}if(e.sourceCommits.length>0){o.push("## Source Commits"),o.push("");for(let s of e.sourceCommits){let i=s.substring(0,8),a=r.resolveCommitVisiblePath(i),l=r.resolveCommitMessage(i);a&&l?o.push(`- ${Kl(i,jR(a))} \u2014 ${l}`):l?o.push(`- \`${i}\` \u2014 ${l}`):o.push(`- \`${i}\``)}o.push("")}if(e.relatedBranches&&e.relatedBranches.length>0){o.push("## Related Branches"),o.push("");for(let s of e.relatedBranches){let i=r.resolveBranchFolder(s);i?o.push(`- ${Kl(s,`../${i}/`)}`):o.push(`- \`${s}\``)}o.push("")}return o.join(`
`)}function vh(e){return{title:e.title,stableSlug:e.stableSlug,content:e.content,...e.relatedBranches.length>0&&{relatedBranches:[...e.relatedBranches]},sourceCommits:e.sourceRefs.filter(t=>t.type==="summary").map(t=>t.id)}}function _h(e,t){let n=[];if(n.push(`# ${t.repoName} \xB7 Knowledge Wiki`),n.push(""),n.push(kh),n.push(""),n.push(`> **${e.length} topics** in the knowledge base`),n.push(""),e.length>0){n.push("## Topics"),n.push("");for(let r of e)n.push(`- ${Kl(r.title,`topic--${r.stableSlug}.md`)}`);n.push("")}return n.join(`
`)}function jR(e){return e.startsWith("./")?e.substring(2):e}function Kl(e,t){let n=e.replace(/[\\[\]]/g,"\\$&"),r=t.replace(/ /g,"%20").replace(/\(/g,"%28").replace(/\)/g,"%29");return`[${n}](${r})`}var C=m("FolderStorage"),js=class e{constructor(t,n){this.rootPath=t;this.metadataManager=n;this.kind="folder"}get vaultRoot(){return(0,N.dirname)(this.rootPath)}get kbRoot(){return this.rootPath}async readFile(t){let n=(0,N.join)(this.rootPath,".jolli",t);try{return(0,O.readFileSync)(n,"utf-8")}catch(r){let o=r.code;return o==="ENOENT"||o==="ENOTDIR"||C.warn("readFile failed for %s: %s",n,v(r)),null}}async writeFiles(t,n){if(q())return;await this.ensure();let r=0,o=0;for(let s of t)s.delete?this.deleteHiddenFile(s.path)&&o++:(this.writeHiddenFile(s.path,s.content),r++,s.path.startsWith("summaries/")&&s.path.endsWith(".json")&&this.generateSummaryMarkdown(s.content),s.path.startsWith("plans/")&&s.path.endsWith(".md")&&this.generatePlanMarkdown(s.path,s.content,s.branch),s.path.startsWith("notes/")&&s.path.endsWith(".md")&&this.generateNoteMarkdown(s.path,s.content,s.branch));C.info("Wrote %d files, deleted %d (%s)",r,o,n)}async listFiles(t){let n=(0,N.join)(this.rootPath,".jolli",t);if(!(0,O.existsSync)(n))return[];let r=(0,N.join)(this.rootPath,".jolli"),o=[];return this.walkDir(n,r,o),o.sort()}async exists(){return(0,O.existsSync)(this.rootPath)}async ensure(){(0,O.mkdirSync)(this.rootPath,{recursive:!0}),this.metadataManager.ensure()}markDirty(t){let n=(0,N.join)(this.rootPath,".jolli","shadow-status.json"),r={dirty:!0,lastFailedAt:new Date().toISOString(),message:t};try{Jl(this.vaultRoot,n,JSON.stringify(r,null,"	"))}catch(o){C.warn("markDirty suppressed: %s",v(o))}}clearDirty(){let t=(0,N.join)(this.rootPath,".jolli","shadow-status.json");try{(0,O.existsSync)(t)&&(0,O.unlinkSync)(t)}catch{}}isDirty(){let t=(0,N.join)(this.rootPath,".jolli","shadow-status.json");return(0,O.existsSync)(t)}async deleteVisibleMarkdown(t){let n=e.slugify(t.commitMessage),r=t.commitHash.substring(0,8);try{await this.deleteVisibleArtifact(`skill:${t.commitHash}`,t.branch,Ls(r))}catch(o){C.warn("Failed to delete skills aggregate for %s: %s",r,String(o))}return this.deleteVisibleArtifact(t.commitHash,t.branch,`${n}-${r}.md`)}async deletePlanVisible(t,n){await this.deleteVisibleArtifact(`plan:${t}`,n,`plan--${t}.md`)}async deleteNoteVisible(t,n){await this.deleteVisibleArtifact(`note:${t}`,n,`note--${t}.md`)}async pruneBranchMappings(t){let n=new Map,r=new Set(t);for(let s of this.metadataManager.listBranchMappings())r.has(s.branch)&&n.set(s.branch,s.folder);let o=this.metadataManager.unregisterBranches(t);return o===0?0:(await Promise.all([...n.values()].map(s=>this.rmdirIfEmpty((0,N.join)(this.rootPath,s)))),o)}async rmdirIfEmpty(t){try{await(0,xh.rmdir)(t)}catch(n){let r=n.code;if(r==="ENOENT"||r==="ENOTEMPTY"||r==="EEXIST")return;C.warn("rmdir(%s) failed (non-fatal): %s",t,v(n))}}resolveBranchForFolder(t){return this.metadataManager.listBranchMappings().find(r=>r.folder===t)?.branch??null}async deleteVisibleArtifact(t,n,r){let o=this.metadataManager.findById(t),s=this.metadataManager.resolveFolderForBranch(n),i=o?.path??`${s}/${r}`,a=(0,N.join)(this.rootPath,i);if(!(0,O.existsSync)(a))return o&&this.metadataManager.removeFromManifest(t),!1;if(o?.fingerprint&&this.isUserEditedOnDisk(a,o.fingerprint))return C.warn("Skipping cleanup of %s \u2014 file modified since manifest record (likely hand-edited)",i),!1;try{return(0,O.unlinkSync)(a),o&&this.metadataManager.removeFromManifest(t),C.info("Deleted visible MD: %s",i),!0}catch(l){if(l.code==="ENOENT")return o&&this.metadataManager.removeFromManifest(t),!1;throw l}}async forceRegenerateVisibleMarkdown(t){let n=await this.readFile(`summaries/${t.commitHash}.json`);if(!n)return C.warn("forceRegenerateVisibleMarkdown: hidden summaries/%s.json missing \u2014 leaving visible file intact",t.commitHash.substring(0,8)),{ok:!1,reason:"missing"};try{JSON.parse(n)}catch(c){return C.warn("forceRegenerateVisibleMarkdown: malformed summaries/%s.json (%s) \u2014 leaving visible file intact",t.commitHash.substring(0,8),v(c)),{ok:!1,reason:"malformed"}}let r=this.metadataManager.resolveFolderForBranch(t.branch),o=e.slugify(t.commitMessage),s=t.commitHash.substring(0,8),i=`${r}/${o}-${s}.md`,a=(0,N.join)(this.rootPath,i);if((0,O.existsSync)(a))try{(0,O.unlinkSync)(a)}catch(c){return C.warn("forceRegenerateVisibleMarkdown: cannot unlink %s [%s]",i,String(c)),{ok:!1,reason:"unlinkFailed"}}return await this.regenerateVisibleMarkdown(t)?{ok:!0}:{ok:!1,reason:"missing"}}async regenerateVisibleMarkdown(t){let n=this.metadataManager.resolveFolderForBranch(t.branch),r=e.slugify(t.commitMessage),o=t.commitHash.substring(0,8),s=`${n}/${r}-${o}.md`,i=(0,N.join)(this.rootPath,s);if((0,O.existsSync)(i))return await this.healSkillsAggregate(t,n,o),!0;let a=await this.readFile(`summaries/${t.commitHash}.json`);if(!a)return C.warn("regenerateVisibleMarkdown: hidden summaries/%s.json missing",t.commitHash.substring(0,8)),!1;let l;try{l=JSON.parse(a)}catch(h){return C.warn("regenerateVisibleMarkdown: malformed summaries/%s.json \u2014 %s",t.commitHash.substring(0,8),v(h)),!1}let c=this.buildYamlFrontmatter(l),u=ql(l),d=`${c}
${u}`;this.atomicWrite(i,d);let p=this.metadataManager.findById(t.commitHash),f=pe.sha256(d);return this.metadataManager.updateManifest({path:s,fileId:l.commitHash,type:"commit",fingerprint:f,source:{commitHash:l.commitHash,branch:l.branch,generatedAt:l.generatedAt},title:p?.title??l.commitMessage}),this.generateSkillsAggregate(l,n,o),C.info("Regenerated visible MD: %s",s),!0}async healMissingVisibleMarkdown(t){let r=this.metadataManager.readManifest().files.filter(c=>c.type==="commit"),o=0,s=0,i=0,a=[];for(let c of r){let u=(0,N.join)(this.rootPath,c.path);if((0,O.existsSync)(u)){s++;continue}let d=(0,N.join)(this.rootPath,".jolli","summaries",`${c.fileId}.json`),p;try{p=(0,O.readFileSync)(d,"utf-8")}catch(R){let j=R.code;if(j==="ENOENT"){i++,t?.dropOrphanedManifestEntries?(a.push(c.fileId),C.warn("healMissingVisibleMarkdown: hidden JSON missing for %s \u2014 will drop manifest entry",c.fileId.substring(0,8))):C.warn("healMissingVisibleMarkdown: hidden JSON missing for %s \u2014 keeping manifest entry (no truth source to repopulate)",c.fileId.substring(0,8));continue}i++,C.warn("healMissingVisibleMarkdown: hidden JSON read failed for %s [%s]: %s \u2014 keeping manifest entry",c.fileId.substring(0,8),j??"?",v(R));continue}let f;try{f=JSON.parse(p)}catch(R){i++,C.warn("healMissingVisibleMarkdown: malformed hidden JSON for %s: %s",c.fileId.substring(0,8),v(R));continue}let h=this.metadataManager.resolveFolderForBranch(f.branch),w=e.slugify(f.commitMessage),T=f.commitHash.substring(0,8),b=`${h}/${w}-${T}.md`;if(b!==c.path){s++,C.warn("healMissingVisibleMarkdown: manifest path drift for %s \u2014 manifest=%s computed=%s \u2014 keeping manifest entry, run reconcile",c.fileId.substring(0,8),c.path,b);continue}let k={commitHash:f.commitHash,parentCommitHash:null,commitMessage:f.commitMessage,commitDate:f.commitDate,branch:f.branch,generatedAt:f.generatedAt};try{await this.regenerateVisibleMarkdown(k)?o++:(i++,C.warn("healMissingVisibleMarkdown: regenerate returned false for %s \u2014 retry on next pass",c.fileId.substring(0,8)))}catch(R){i++,C.warn("healMissingVisibleMarkdown: regenerate failed for %s: %s",c.fileId.substring(0,8),v(R))}}let l=a.length>0?this.dropManifestEntries(a):[];return(o>0||i>0)&&C.info("healMissingVisibleMarkdown: healed=%d skipped=%d failed=%d dropped=%d",o,s,i,l.length),l.length>0?{healed:o,skipped:s,failed:i,droppedIds:l}:{healed:o,skipped:s,failed:i}}dropManifestEntries(t){if(t.length===0)return[];let n=new Set(t),r=this.metadataManager.readManifest(),o=r.files.filter(i=>n.has(i.fileId)).map(i=>i.fileId);if(o.length===0)return[];let s=r.files.filter(i=>!n.has(i.fileId));return this.metadataManager.replaceFiles(s),o}isUserEditedOnDisk(t,n){if(!(0,O.existsSync)(t)||!n)return!1;let r;try{r=pe.sha256((0,O.readFileSync)(t,"utf-8"))}catch(o){return C.warn("isUserEditedOnDisk: cannot read %s [%s] \u2014 treating as edited",t,String(o)),!0}return r!==n}generateSummaryMarkdown(t){let n;try{n=JSON.parse(t)}catch{return}let r=this.metadataManager.resolveFolderForBranch(n.branch),o=e.slugify(n.commitMessage),s=n.commitHash.substring(0,8),i=`${o}-${s}.md`,a=`${r}/${i}`,l=this.buildYamlFrontmatter(n),c=ql(n),u=`${l}
${c}`,d=(0,N.join)(this.rootPath,a),p=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(d,p?.fingerprint)){C.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(d,u);let f=pe.sha256(u);this.metadataManager.updateManifest({path:a,fileId:n.commitHash,type:"commit",fingerprint:f,source:{commitHash:n.commitHash,branch:n.branch,generatedAt:n.generatedAt},title:n.commitMessage}),C.info("Markdown generated: %s",a),this.generateSkillsAggregate(n,r,s),n.children&&n.children.length>0&&this.cleanupSupersededDescendants(n.children,a)}async healSkillsAggregate(t,n,r){if((0,O.existsSync)((0,N.join)(this.rootPath,n,Ls(r))))return;let o=await this.readFile(`summaries/${t.commitHash}.json`);if(o)try{this.generateSkillsAggregate(JSON.parse(o),n,r)}catch{}}generateSkillsAggregate(t,n,r){let o=t.skills;if(o===void 0||o.length===0)return;let s=`${n}/${Ls(r)}`,i=(0,N.join)(this.rootPath,s),a=this.metadataManager.findByPath(s);if(this.isUserEditedOnDisk(i,a?.fingerprint)){C.info("FolderStorage: skip overwrite of user-edited %s",s);return}let l=yh(t,o);this.atomicWrite(i,l),this.metadataManager.updateManifest({path:s,fileId:`skill:${t.commitHash}`,type:"skill",fingerprint:pe.sha256(l),source:{commitHash:t.commitHash,branch:t.branch,generatedAt:t.generatedAt},title:`Skills used \u2014 ${r}`}),C.info("Skills aggregate generated: %s",s)}cleanupSupersededDescendants(t,n){let r=[];e.collectDescendantHashes(t,r);for(let o of r){let s=this.metadataManager.findById(o);if(!s||s.type!=="commit"||s.path===n)continue;let i=(0,N.join)(this.rootPath,s.path);if(!(0,O.existsSync)(i)){this.metadataManager.removeFromManifest(o);continue}if(!s.fingerprint){C.warn("Skipping cleanup of %s \u2014 legacy entry has no fingerprint baseline",s.path);continue}if(this.isUserEditedOnDisk(i,s.fingerprint)){C.warn("Skipping cleanup of %s \u2014 file modified since manifest record (likely hand-edited)",s.path);continue}try{(0,O.unlinkSync)(i),this.metadataManager.removeFromManifest(o),C.info("Cleaned up superseded MD: %s",s.path)}catch(a){C.warn("Failed to delete superseded MD %s: %s",s.path,String(a))}}}static collectDescendantHashes(t,n){for(let r of t)n.push(r.commitHash),r.children&&r.children.length>0&&e.collectDescendantHashes(r.children,n)}buildYamlFrontmatter(t){let n=["---"];return n.push(`commitHash: ${t.commitHash}`),n.push(`branch: ${t.branch}`),n.push(`author: ${t.commitAuthor}`),n.push(`date: ${t.commitDate}`),n.push("type: commit"),t.commitType&&n.push(`commitType: ${t.commitType}`),t.stats&&(n.push(`filesChanged: ${t.stats.filesChanged}`),n.push(`insertions: ${t.stats.insertions}`),n.push(`deletions: ${t.stats.deletions}`)),n.push("---"),n.join(`
`)}async regenerateVisiblePlan(t,n){let r=await this.readFile(`plans/${t}.md`);if(!r)return C.warn("regenerateVisiblePlan: hidden plans/%s.md missing",t),!1;let o=this.metadataManager.resolveFolderForBranch(n),s=(0,N.join)(this.rootPath,o,`plan--${t}.md`);if((0,O.existsSync)(s))try{(0,O.unlinkSync)(s)}catch(i){return C.warn("regenerateVisiblePlan: cannot unlink %s [%s]",s,String(i)),!1}return this.generatePlanMarkdown(`plans/${t}.md`,r,n),!0}generatePlanMarkdown(t,n,r){let o=t.replace(/^plans\//,"").replace(/\.md$/,""),s=r?this.metadataManager.resolveFolderForBranch(r):this.resolveBranchFromSlug(o),i=`plan--${o}.md`,a=`${s}/${i}`,c=`${["---","type: plan",`slug: ${o}`,"---"].join(`
`)}

${n}`,u=(0,N.join)(this.rootPath,a),d=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(u,d?.fingerprint)){C.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(u,c);let p=pe.sha256(c);this.metadataManager.updateManifest({path:a,fileId:`plan:${o}`,type:"plan",fingerprint:p,updatedAt:new Date().toISOString(),source:r?{branch:r}:{},title:this.extractTitle(n)??o}),C.info("Plan markdown generated: %s",a)}async regenerateVisibleNote(t,n){let r=await this.readFile(`notes/${t}.md`);if(!r)return C.warn("regenerateVisibleNote: hidden notes/%s.md missing",t),!1;let o=this.metadataManager.resolveFolderForBranch(n),s=(0,N.join)(this.rootPath,o,`note--${t}.md`);if((0,O.existsSync)(s))try{(0,O.unlinkSync)(s)}catch(i){return C.warn("regenerateVisibleNote: cannot unlink %s [%s]",s,String(i)),!1}return this.generateNoteMarkdown(`notes/${t}.md`,r,n),!0}generateNoteMarkdown(t,n,r){let o=t.replace(/^notes\//,"").replace(/\.md$/,""),s=r?this.metadataManager.resolveFolderForBranch(r):this.resolveBranchFromSlug(o),i=`note--${o}.md`,a=`${s}/${i}`,c=`${["---","type: note",`id: ${o}`,"---"].join(`
`)}

${n}`,u=(0,N.join)(this.rootPath,a),d=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(u,d?.fingerprint)){C.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(u,c);let p=pe.sha256(c);this.metadataManager.updateManifest({path:a,fileId:`note:${o}`,type:"note",fingerprint:p,source:r?{branch:r}:{},title:this.extractTitle(n)??o,updatedAt:new Date().toISOString()}),C.info("Note markdown generated: %s",a)}resolveBranchFromSlug(t){let n=t.split("-").at(-1);if(n.length>=7){let o=this.metadataManager.readManifest().files.find(i=>i.type==="commit"&&i.source?.commitHash?.startsWith(n));if(o?.source?.branch)return this.metadataManager.resolveFolderForBranch(o.source.branch);let s=(0,N.join)(this.rootPath,".jolli","index.json");if((0,O.existsSync)(s))try{let a=JSON.parse((0,O.readFileSync)(s,"utf-8")).entries.find(l=>l.commitHash.startsWith(n));if(a?.branch)return this.metadataManager.resolveFolderForBranch(a.branch)}catch{}}return"_shared"}extractTitle(t){let n=t.match(/^#\s+(.+)/m);return n?n[1].trim():null}writeHiddenFile(t,n){let r=(0,N.join)(this.rootPath,".jolli",t);this.atomicWrite(r,n)}deleteHiddenFile(t){let n=(0,N.join)(this.rootPath,".jolli",t);if(!(0,O.existsSync)(n))return!1;try{return(0,O.unlinkSync)(n),!0}catch{return!1}}walkDir(t,n,r){for(let o of(0,O.readdirSync)(t,{withFileTypes:!0})){let s=(0,N.join)(t,o.name);o.isDirectory()?this.walkDir(s,n,r):r.push(He((0,N.relative)(n,s)))}}async renderTopicWiki(t){let n=(0,N.join)(this.rootPath,"_wiki");this.wipeWikiArtifacts(n);let r=this.buildWikiRenderContext();(0,O.mkdirSync)(n,{recursive:!0});let o=[];for(let s of t)try{let i=vh(s);o.push(i);let a=`_wiki/topic--${i.stableSlug}.md`,l=Rh(i,s.relatedBranches,s.lastUpdatedAt,r);this.atomicWrite((0,N.join)(this.rootPath,a),l),this.metadataManager.updateManifest({path:a,fileId:`wiki-topic-${i.stableSlug}`,type:"wiki",fingerprint:pe.sha256(l),source:{generatedAt:s.lastUpdatedAt},title:i.title})}catch(i){C.warn("renderTopicWiki: failed to render topic %s: %s",s.stableSlug,v(i))}try{let s=_h(o,r),i="_wiki/_index.md";this.atomicWrite((0,N.join)(this.rootPath,i),s),this.metadataManager.updateManifest({path:i,fileId:"wiki-index",type:"wiki",fingerprint:pe.sha256(s),source:{generatedAt:new Date().toISOString()},title:`${r.repoName} Knowledge Wiki`})}catch(s){C.warn("renderTopicWiki: failed to render index: %s",v(s))}C.info("Topic-KB wiki regenerated: %d topics under %s",t.length,n)}isTopicWikiPresent(){return(0,O.existsSync)((0,N.join)(this.rootPath,"_wiki","_index.md"))}wipeWikiArtifacts(t){if(this.metadataManager.unregisterFilesByType("wiki"),!!(0,O.existsSync)(t))try{for(let n of(0,O.readdirSync)(t))if(n.endsWith(".md"))try{(0,O.unlinkSync)((0,N.join)(t,n))}catch(r){C.warn("FolderStorage.wipeWikiArtifacts: failed to unlink %s: %s",n,v(r))}}catch(n){C.warn("FolderStorage.wipeWikiArtifacts: failed to list %s: %s",t,v(n))}}buildWikiRenderContext(){let t=this.metadataManager.readConfig(),n=this.metadataManager.listBranchMappings(),r=new Map(n.map(i=>[i.branch,i.folder])),o=this.metadataManager.readManifest(),s=new Map;for(let i of o.files)i.type==="commit"&&i.source.commitHash&&s.set(i.source.commitHash.substring(0,8),i);return{repoName:t.repoName??"Memory Bank",resolveCommitVisiblePath:i=>{let a=s.get(i);return a?`../${a.path}`:null},resolveBranchFolder:i=>r.get(i)??null,resolveCommitMessage:i=>s.get(i)?.title??null}}atomicWrite(t,n){Jl(this.vaultRoot,t,n)}static slugify(t){let n=t.toLowerCase().replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"");return n.length>50&&(n=n.substring(0,50).replace(/-+$/,"")),n||"untitled"}};jn();rs();fs();ne();Os();var $s=m("StorageFactory");async function Vl(e,t){let n;try{n=await te()}catch(a){$s.warn("Failed to load config, falling back to defaults: %s",a.message),n={}}n.storageMode!==void 0&&$s.info("ignoring retired storageMode=%s \u2014 routing is decided by the cutover state",n.storageMode);let r=n.localFolder,o=await Hr(e);if($s.info("StorageFactory.create: route=%s, projectPath=%s",o.state,e),o.state==="blocked")throw new Error(`storage unavailable: ${o.reason} \u2014 this repo's orphan branch is frozen (cutover), so writes cannot fall back to it; run 'jolli doctor --recover' or upgrade this surface`);if(o.state==="legacy-fenced"||o.state==="cutover"){let{identity:a}=await Qt(e),l=new jt(a);return el(e,r)?new Zr(l,Ch(e,r)):l}if(!el(e,r))return $s.warn("Not a claimable project (no git worktree, or inside the Memory Bank folder): %s \u2014 using orphan-only storage",e),new ht(t);let s=new ht(t),i=Ch(e,r);return new Zr(s,i)}function Ch(e,t){let n=ym(e),r=Sm(e),o=gm(n,r,t),s=new pe((0,Ah.join)(o,".jolli"));return new js(o,s)}Ve();Mt();Dl();var _e=m("SchemaV5Migration"),Ih="schema-v5-migration.json",Ph=3e4;async function Yl(e,t){let r=await(t??await Vl(e??process.cwd(),e)).readFile(Ih);if(!r)return null;try{return JSON.parse(r)}catch(o){return _e.warn("Failed to parse v5 migration state \u2014 treating as absent: %s",o.message),null}}async function $R(e,t,n){if(Pn(e))return await n();if(!await yr(e,{timeoutMs:Ph}))throw new Error(`${t}: could not acquire orphan-write lock within ${Ph}ms`);try{return await In(e,n)}finally{await wr(e)}}async function Oh(e){let t=await Vl(e??process.cwd(),e),n=await Yl(e,t);return n?.status==="completed"?(_e.info("Schema v5 migration already completed at %s \u2014 skipping",n.completedAt),{migrated:n.migratedCount,skipped:n.skippedCount,fresh:n.fresh,alreadyDone:!0}):await t.exists()?$R(e,"migrateSchemaToV5",()=>HR(e,t)):(_e.info("Storage backend not initialized yet \u2014 skipping schema v5 migration (no data to migrate)"),{migrated:0,skipped:0,fresh:!0,alreadyDone:!1})}async function FR(e,t){if(t.length===0)return new Map;if(e.batchReadFiles)return e.batchReadFiles(t);let n=new Map;for(let r of t)n.set(r,await e.readFile(r));return n}async function HR(e,t){let n=await Yl(e,t);if(n?.status==="completed")return _e.info("Schema v5 migration completed by a concurrent run at %s \u2014 skipping",n.completedAt),{migrated:n.migratedCount,skipped:n.skippedCount,fresh:n.fresh,alreadyDone:!0};let r=new Date().toISOString(),o=await Ds(e),s=o.ok&&o.state==="uncutover"?await G(["rev-parse",`refs/heads/${De}`],e).then(F=>F.stdout.trim()).catch(()=>null):null,i=await t.listFiles("summaries/");_e.info("Found %d summary files to inspect",i.length);let a=await t.listFiles("transcripts/"),l=new Set;for(let F of a){let ge=Es(F);ge&&l.add(ge)}_e.info("Reading %d summaries...",i.length);let c=Date.now(),u=await FR(t,i);_e.info("Read %d summaries in %d ms",u.size,Date.now()-c);let d=[],p=[],f=0,h=0;for(let F of i){let ge=u.get(F);if(ge===void 0)throw new Error(`readSummaries omitted ${F} \u2014 protocol contract violation (expected one entry per request)`);if(ge===null){h++;continue}let Pe;try{Pe=JSON.parse(ge)}catch(Wt){_e.warn("Skipping unparseable summary %s: %s",F,Wt.message),h++;continue}let Ie=UR(Pe,l),Rt=JSON.stringify(Ie,null,"	");if(p.push({path:F,content:Rt}),Ie===Pe){h++;continue}d.push({path:F,content:Rt}),f++}let w=i.length===0,T=f===0&&h>0,b=T?p:d,k=w?"Schema v5 migration: no pre-v5 data found":T?`Schema v5 migration: re-pushing ${h} v5 summaries to heal storage shadow`:`Schema v5 migration: ${f} upgraded, ${h} skipped`,R=Date.now();if(b.length>0&&(_e.info("Writing %d summary file(s) via active storage...",b.length),await t.writeFiles(b,k)),t.isDirty?.()??!1)return _e.warn("Schema v5 migration: storage shadow write failed (folder marked dirty) \u2014 leaving state PENDING; next startup will retry and re-push (migrated=%d, skipped=%d, took %d ms)",f,h,Date.now()-R),{migrated:f,skipped:h,fresh:w,alreadyDone:!1};let I={version:1,status:"completed",startedAt:r,completedAt:new Date().toISOString(),migratedCount:f,skippedCount:h,fresh:w};return await t.writeFiles([{path:Ih,content:JSON.stringify(I,null,"	")}],k),_e.info("Schema v5 migration complete: %d migrated, %d skipped, fresh=%s, recovery=%s (took %d ms)",f,h,w,T,Date.now()-R),s&&_e.info("Pre-migration orphan-branch SHA was %s (debug-only recovery anchor)",s),{migrated:f,skipped:h,fresh:w,alreadyDone:!1}}function UR(e,t){if(e.version>=5&&e.transcripts!==void 0)return e;let n=Ml(e);if(n.transcripts!==void 0)return{...n,version:5};let o=Br(n).filter(i=>t.has(i));return{...n,version:5,transcripts:o}}ne();Ve();y();var Bn=require("node:fs/promises"),no=require("node:path");ae();Js();async function Ql(e){let t=(0,no.join)(e,".claude"),n=(0,no.join)(t,"settings.local.json"),r=bt("stop"),o=bt("session-start");await Dh(e);let s={},i;try{i=await(0,Bn.readFile)(n,"utf-8"),s=JSON.parse(i)}catch(f){if(f.code!=="ENOENT")throw f}let a=s.hooks??{},l=a.Stop??[],c=a.SessionStart??[],u=Us(l);u.push({hooks:[{type:"command",command:r,async:!0}]});let d=on(c,Fs);d.push({hooks:[{type:"command",command:o}]}),a.Stop=u,a.SessionStart=d,s.hooks=a;let p=JSON.stringify(s,null,"	");return i===p?{path:n}:(await(0,Bn.mkdir)(t,{recursive:!0}),await P(n,p),{path:n})}async function Dh(e){let t=(0,no.join)(e,".claude","settings.json"),n;try{let i=await(0,Bn.readFile)(t,"utf-8");n=JSON.parse(i)}catch{return}let r=n.hooks;if(!r)return;let o=r.Stop??[];if(!zl(o))return;let s=Us(o);s.length===0?delete r.Stop:r.Stop=s,Object.keys(r).length===0?delete n.hooks:n.hooks=r,await P(t,JSON.stringify(n,null,"	"))}async function Zl(e){await Dh(e);let t=(0,no.join)(e,".claude","settings.local.json"),n;try{let l=await(0,Bn.readFile)(t,"utf-8");n=JSON.parse(l)}catch{return{}}let r=n.hooks;if(!r)return{};let o=r.Stop??[],s=zl(o);if(s){let l=Us(o);l.length===0?delete r.Stop:r.Stop=l}let i=r.SessionStart??[],a=to(i,Fs);if(a){let l=on(i,Fs);l.length===0?delete r.SessionStart:r.SessionStart=l}return!s&&!a?{}:(Object.keys(r).length===0?delete n.hooks:n.hooks=r,await P(t,JSON.stringify(n,null,"	")),{})}var an=require("node:fs/promises"),Ny=require("node:os"),po=require("node:path");ae();y();var Ay=require("node:crypto"),Kn=require("node:fs"),Ec=require("node:fs/promises"),oi=require("node:os"),St=require("node:path");y();var Lh=require("node:fs"),Ws=require("node:fs/promises"),Mh=require("node:os"),sn=require("node:path"),jh=require("node:url");ae();y();var BR=/^[a-z0-9][a-z0-9-]*$/;function ro(e){return BR.test(e)}var Bs=m("DistPathWriter");async function oo(e,t,n,r){if(!ro(e))return Bs.warn("Refusing to write dist-paths entry for unsafe source tag: %s",JSON.stringify(e)),!1;let o=t??(0,sn.dirname)((0,jh.fileURLToPath)(__jmImportMetaUrl)),s=n??"0.99.13",i=(0,sn.join)(r??(0,sn.join)((0,Mh.homedir)(),".jolli","jollimemory"),"dist-paths"),a=(0,sn.join)(i,e);try{await(0,Ws.mkdir)(i,{recursive:!0});let l=`${s}
${o}`,c;try{c=await(0,Ws.readFile)(a,"utf-8")}catch{}if(c){let[u,d]=c.split(`
`);if(!!(u&&d&&Nh(d))&&!Nh(o))return Bs.info("Kept complete dist-paths/%s (version=%s) \u2014 candidate dist is incomplete: %s",e,u,o),!0}return c!==l&&await P(a,l),Bs.info("Wrote dist-paths/%s (version=%s, distDir=%s)",e,s,o),!0}catch(l){return Bs.warn("Failed to write dist-paths/%s: %s",e,l.message),!1}}var WR=["Cli.js","StopHook.js","SessionStartHook.js","PostCommitHook.js","PostRewriteHook.js","PrepareMsgHook.js","PostMergeHook.js","PrePushHook.js","QueueWorker.js","PrePushWorker.js"];function Nh(e){return WR.every(t=>(0,Lh.existsSync)((0,sn.join)(e,t)))}var qn=bn(Cy(),1);function ri(e,t){if(e.includes("-")||e.includes("+")||t.includes("-")||t.includes("+")){let i=c=>{let u=(0,qn.valid)(c);return u||(/^\d+(\.\d+)*$/.test(c)?(0,qn.coerce)(c)?.version??null:null)},a=i(e),l=i(t);if(a&&l)return(0,qn.compare)(a,l);if(a)return 1;if(l)return-1}let n=/^\d+(\.\d+)*$/.test(e),r=/^\d+(\.\d+)*$/.test(t);if(!n&&!r)return 0;if(!n)return-1;if(!r)return 1;let o=e.split(".").map(Number),s=t.split(".").map(Number);for(let i=0;i<Math.max(o.length,s.length);i++){let a=(o[i]??0)-(s[i]??0);if(a!==0)return a}return 0}var Sc=m("DistPathResolver"),Xx=[[".cursor/","cursor"],[".windsurf/","windsurf"],[".antigravity/","antigravity"],[".vscode-oss/","vscodium"],[".positron/","positron"],[".trae/","trae"],[".vscode/","vscode"]];function Tc(e){let t=e.replace(/\\/g,"/");for(let[r,o]of Xx)if(t.includes(r))return o;let n=t.match(/\/\.([a-z][a-z0-9-]*)\/extensions\//i);return n?.[1]?n[1].toLowerCase():(0,Ay.createHash)("sha256").update(e).digest("hex").slice(0,8)}function Py(e){try{let n=(0,Kn.readFileSync)(e,"utf-8").trim().split(`
`).map(s=>s.trim());if(n.length<2)return null;let r=n[0],o=n[n.length-1];if(!o)return null;if(r.startsWith("source=")){let s=r.slice(7),i=s.indexOf("@");return i===-1?{source:s,version:"unknown",distDir:o}:{source:s.slice(0,i),version:s.slice(i+1),distDir:o}}return{source:"",version:r,distDir:o}}catch{return null}}function uo(e){let t=(0,St.join)(e??(0,St.join)((0,oi.homedir)(),".jolli","jollimemory"),"dist-paths"),n;try{n=(0,Kn.readdirSync)(t).sort()}catch{return[]}let r=[];for(let o of n){let s=(0,St.join)(t,o),i=Py(s);i&&r.push({source:o,version:i.version,distDir:i.distDir,available:(0,Kn.existsSync)(i.distDir)})}return r}async function Iy(e){let t=(0,St.join)(e??(0,St.join)((0,oi.homedir)(),".jolli","jollimemory"),"dist-paths"),n=[];for(let r of uo(e))if(!r.available)try{await(0,Ec.unlink)((0,St.join)(t,r.source)),n.push(r.source),Sc.info("Pruned stale dist-paths/%s (dir gone: %s)",r.source,r.distDir)}catch(o){Sc.warn("Failed to prune stale dist-paths/%s: %s",r.source,o.message)}return n}var kc=["cli","vscode","cursor"];function si(e){let t=e.filter(o=>o.available);if(t.length===0)return;let n=t[0];for(let o=1;o<t.length;o++)ri(t[o].version,n.version)>0&&(n=t[o]);let r=t.filter(o=>ri(o.version,n.version)===0);for(let o of kc){let s=r.find(i=>i.source===o);if(s)return s}return n}async function Oy(){let e=(0,St.join)((0,oi.homedir)(),".jolli","jollimemory"),t=(0,St.join)(e,"dist-path"),n=Py(t);if(!n)return!1;let r;if(n.source==="cli")r="cli";else{let o=Tc(n.distDir);r=/^[a-f0-9]{8}$/.test(o)?"vscode":o}return r==="vscode-extension"&&(r="vscode"),await oo(r,n.distDir,n.version),await(0,Ec.unlink)(t).catch(()=>{}),Sc.info("Migrated legacy dist-path -> dist-paths/%s (version=%s, distDir=%s)",r,n.version,n.distDir),!0}var Dy=m("DispatchScripts"),zx=`#!/bin/bash
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
  for pref in ${kc.join(" ")}; do
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
`,Qx=`#!/bin/bash
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
`,Zx=`#!/bin/bash
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
`;async function Rc(e,t){let n=!1;try{n=await(0,an.readFile)(e,"utf-8")===t}catch{}if(n){await(0,an.chmod)(e,493);return}await P(e,t),await(0,an.chmod)(e,493)}async function vc(){let e=(0,po.join)((0,Ny.homedir)(),".jolli","jollimemory");try{return await(0,an.mkdir)(e,{recursive:!0}),await Rc((0,po.join)(e,"resolve-dist-path"),zx),await Rc((0,po.join)(e,"run-hook"),Qx),await Rc((0,po.join)(e,"run-cli"),Zx),Dy.info("Wrote resolve-dist-path, run-hook, and run-cli scripts to %s",e),!0}catch(t){return Dy.warn("Failed to write resolve scripts: %s",t.message),!1}}var mo=require("node:fs/promises"),ii=require("node:path");ae();y();Js();var Ly=m("GeminiHookInstaller");async function _c(e){let t=(0,ii.join)(e,".gemini"),n=(0,ii.join)(t,"settings.json"),r=bt("gemini-after-agent"),o={},s;try{s=await(0,mo.readFile)(n,"utf-8"),o=JSON.parse(s)}catch(u){if(u.code!=="ENOENT")throw u}let i=o.hooks??{},a=i.AfterAgent??[],l=on(a,Hs);l.push({hooks:[{type:"command",command:r,name:"jolli-session-tracker"}]}),i.AfterAgent=l,o.hooks=i;let c=JSON.stringify(o,null,"	");return s===c?{path:n}:(await(0,mo.mkdir)(t,{recursive:!0}),await P(n,c),Ly.info("Gemini AfterAgent hook installed"),{path:n})}async function xc(e){let t=(0,ii.join)(e,".gemini","settings.json"),n;try{let i=await(0,mo.readFile)(t,"utf-8");n=JSON.parse(i)}catch{return}let r=n.hooks;if(!r)return;let o=r.AfterAgent??[];if(!to(o,Hs))return;let s=on(o,Hs);s.length===0?delete r.AfterAgent:r.AfterAgent=s,Object.keys(r).length===0?delete n.hooks:n.hooks=r,await P(t,JSON.stringify(n,null,"	")),Ly.info("Gemini AfterAgent hook removed")}var ln=require("node:fs/promises"),Et=require("node:path");ae();y();Se();var Ae=m("GitExclude"),fo="# >>> jolli skill exclude >>>",ho="# <<< jolli skill exclude <<<";function eC(e,t){return Et.win32.isAbsolute(e)||Et.posix.isAbsolute(e)?e:(0,Et.join)(t,e)}var My=new Map;async function Cc(e){let t=My.get(e);if(t!==void 0)return t;try{let{stdout:n}=await En("git",["rev-parse","--git-path","info/exclude"],{cwd:e}),r=n.trim();if(r.length===0)return null;let o=eC(r,e);return My.set(e,o),o}catch{return null}}async function jy(e,t){let n=await Cc(e);if(!n)return Ae.warn("Skipping .git/info/exclude update for %s: not a git repo or git unavailable",e),!1;let r="";try{r=await(0,ln.readFile)(n,"utf-8")}catch(i){if(i.code!=="ENOENT")return Ae.warn("Failed to read %s: %s \u2014 skipping update",n,i.message),!1}let o=Fy(t),s=Hy(r,o);if(s===r)return!0;try{return await(0,ln.mkdir)((0,Et.dirname)(n),{recursive:!0}),await P(n,s),Ae.info("Updated %s with %d Jolli skill exclude paths",n,t.length),!0}catch(i){return Ae.warn("Failed to write %s: %s",n,i.message),!1}}async function ai(e,t){let n=await Cc(e);if(!n)return Ae.warn("Skipping .git/info/exclude update for %s: not a git repo or git unavailable",e),!1;let r="";try{r=await(0,ln.readFile)(n,"utf-8")}catch(s){if(s.code!=="ENOENT")return Ae.warn("Failed to read %s: %s \u2014 skipping update",n,s.message),!1}let o=tC(r,t);if(o===r)return!0;try{return await(0,ln.mkdir)((0,Et.dirname)(n),{recursive:!0}),await P(n,o),Ae.info("Merged %d Jolli skill exclude path(s) into %s",t.length,n),!0}catch(s){return Ae.warn("Failed to write %s: %s",n,s.message),!1}}async function $y(e,t){let n=await Cc(e);if(!n)return Ae.warn("Skipping .git/info/exclude cleanup for %s: not a git repo or git unavailable",e),!1;let r;try{r=await(0,ln.readFile)(n,"utf-8")}catch(s){return s.code==="ENOENT"?!0:(Ae.warn("Failed to read %s: %s \u2014 skipping cleanup",n,s.message),!1)}let o=nC(r,t);if(o===r)return!0;try{return await P(n,o),Ae.info("Removed %d Jolli exclude path(s) from %s",t.length,n),!0}catch(s){return Ae.warn("Failed to write %s: %s",n,s.message),!1}}function Fy(e){return`${[fo,...e,ho].join(`
`)}
`}function Hy(e,t){let n=e.split(`
`),r=n.indexOf(fo),o=n.indexOf(ho),s=t.slice(0,-1).split(`
`);if(r!==-1&&o!==-1&&o>r)return[...n.slice(0,r),...s,...n.slice(o+1)].join(`
`);if(e.length===0)return t;let i=e.endsWith(`
`)?"":`
`;return`${e}${i}${t}`}function tC(e,t){let n=e.split(`
`),r=n.indexOf(fo),o=n.indexOf(ho),s=r!==-1&&o!==-1&&o>r?n.slice(r+1,o):[],i=new Set(s),a=[...s];for(let l of t)i.has(l)||(i.add(l),a.push(l));return Hy(e,Fy(a))}function nC(e,t){let n=e.split(`
`),r=n.indexOf(fo),o=n.indexOf(ho);if(r===-1||o===-1||o<=r)return e;let s=new Set(t),i=n.slice(r+1,o).filter(c=>!s.has(c)),a=n.slice(0,r),l=n.slice(o+1);return i.length===0?[...a.length>0&&a[a.length-1]===""?a.slice(0,-1):a,...l].join(`
`):[...a,fo,...i,ho,...l].join(`
`)}Hc();var Ut=require("node:fs/promises"),Uc=require("node:os"),So=require("node:path");y();var zn=m("GlobalInstructionsInstaller"),Jc="<!-- >>> jolli memory instructions >>> -->",Bc="<!-- <<< jolli memory instructions <<< -->",Vy="## Jolli Memory",Yy=[{host:"claude",relPath:[".claude","CLAUDE.md"]},{host:"gemini",relPath:[".gemini","GEMINI.md"]},{host:"codex",relPath:[".codex","AGENTS.md"]}];function rC(){return`${[Jc,Vy,"","This repository may have **Jolli Memory** enabled \u2014 a durable record of past","development the current code cannot show: why choices were made, how a topic was","handled before, what was already tried, and where work stopped. Treat it as a","first-class source and reach for it **proactively \u2014 before answering or guessing,","and even when the user never names Jolli** \u2014 whenever a request is memory-shaped","(about intent, history, or prior work). Its reads are read-only and cheap, so","lean toward consulting memory rather than guessing: a hit often changes the","answer, and a miss costs little.","","Two capabilities are available; invoke whichever recall / search skill or tool is","registered in this session \u2014 the exact name varies by host (a plugin skill, a","project skill, or e.g. an `mcp__jollimemory__*` MCP tool), so route by intent, not","by a fixed name:","","- **Recall** \u2014 deep context for one branch (the current branch by default): its","  decisions, a recap, and where work left off.","- **Search** \u2014 full-text lookup across *all* branches: decisions, topics, files.","","Consult memory FIRST, before answering from your own assumptions, when the request","is memory-shaped:","",'- **Why / intent** \u2014 "why is this like this", "why X and not Y", "what was the','  reasoning", or anything where the code shows *what* but not *why*. \u2192 Search (or',"  Recall when it's about the current branch).",'- **How it works / design** \u2014 "how does X work", "how is X built/designed", "how','  would I implement X", or walking through / extending an existing feature or',"  subsystem in this repo. The code shows the mechanism; memory holds why it is","  shaped that way and what was already tried. \u2192 Search (or Recall for the current","  branch). A quick lookup here is cheap and often surfaces rationale and pitfalls",`  the code comments don't \u2014 so search even though the ask starts with "how".`,'- **Prior art** \u2014 "have we done/hit this before", "how was <topic> handled", "is','  there a pattern for this", "where else do we do X", or a bug that may have been',"  seen before. \u2192 Search (decisions / topics / files across ALL branches).",`- **Resume** \u2014 "where were we", "pick up where I left off", "what's left on this`,'  branch", or returning to work after a break. \u2192 Recall (current-branch decisions',"  + recap + where work stopped).","- **Before non-trivial edits** \u2014 before refactoring, changing, or deleting code","  whose intent isn't obvious from the code itself, search memory first; a past","  decision may constrain the change, and skipping this risks re-breaking what a","  prior fix already addressed.","",'Routing: current-branch history or resume \u2192 Recall; cross-branch or "has this','come up before" \u2192 Search. When unsure whether memory helps, run a quick search',"first before answering from your own assumptions.","","Do NOT reach for memory on narrow, current-state facts you can read straight from","the code \u2014 one function's behavior, a type or signature, running a command, a","rename, formatting, or a literal text lookup \u2014 answer those from the code directly.","That exclusion is for single-symbol lookups only; do not let it swallow a",'whole-feature "how does it work / how is it designed" question \u2014 that is',"design-shaped, so search memory first (per the How it works / design rule above).","","Treat any concrete fact memory states as of-its-time: use it for why / intent /","prior context, but verify names, paths, and code shape against the current code","before relying on them. If no Jolli memory capability is registered here (Jolli","Memory not enabled in this repo), fall back to normal behavior.",Bc].join(`
`)}
`}function Xy(e){return e==="enabled"?{write:!0}:e==="disabled"?{write:!1,remove:!0}:{write:!1}}function oC(e,t){let n=e.split(`
`),r=n.indexOf(Jc),o=n.indexOf(Bc),s=t.slice(0,-1).split(`
`);if(r!==-1&&o!==-1&&o>r)return[...n.slice(0,r),...s,...n.slice(o+1)].join(`
`);let i=n.indexOf(Vy);if(i!==-1){let l=n.length;for(let d=i+1;d<n.length;d++)if(/^#{1,2} /.test(n[d])){l=d;break}let c=n.slice(0,i).join(`
`),u=n.slice(l).join(`
`);return`${c.length>0?`${c}
`:""}${t}${u}`}if(e.length===0)return t;let a=e.endsWith(`
`)?"":`
`;return`${e}${a}${t}`}async function sC(e,t){let n="";try{n=await(0,Ut.readFile)(e,"utf-8")}catch(o){if(o.code!=="ENOENT"){zn.warn("Failed to read %s: %s \u2014 skipping",e,o.message);return}}let r=oC(n,t);if(r!==n)try{await(0,Ut.mkdir)((0,So.dirname)(e),{recursive:!0}),await(0,Ut.writeFile)(e,r,"utf-8"),zn.info("Updated %s with Jolli Memory instructions",e)}catch(o){zn.warn("Failed to write %s: %s",e,o.message)}}async function zy(e){let t=rC(),n=(0,Uc.homedir)();for(let r of Yy)e[r.host]&&await sC((0,So.join)(n,...r.relPath),t)}function iC(e){let t=e.split(`
`),n=t.indexOf(Jc),r=t.indexOf(Bc);if(n===-1||r===-1||r<n)return e;let o=n>0&&t[n-1]===""?n-1:n;return[...t.slice(0,o),...t.slice(r+1)].join(`
`)}async function aC(e){let t;try{t=await(0,Ut.readFile)(e,"utf-8")}catch(r){r.code!=="ENOENT"&&zn.warn("Failed to read %s: %s \u2014 skipping",e,r.message);return}let n=iC(t);if(n!==t)try{await(0,Ut.writeFile)(e,n,"utf-8"),zn.info("Removed Jolli Memory instructions from %s",e)}catch(r){zn.warn("Failed to write %s: %s",e,r.message)}}async function Qy(){let e=(0,Uc.homedir)();for(let t of Yy)await aC((0,So.join)(e,...t.relPath))}var Re=require("node:os"),V=require("node:path");ne();y();var Zy=require("node:fs"),Zn=require("node:fs/promises"),Qn=require("node:path");ne();y();var Wc=m("McpRegistration"),Gc="jollimemory";function lC(e,t,n,r){return e==="win32"&&n?{command:"node",args:[n,...r]}:{command:t,args:[...r]}}function qc(e,t,n){return lC(e,t,n,["mcp"])}function Kc(e){let t=si(uo(e));return t?(0,Qn.join)(t.distDir,"Cli.js"):void 0}function ew(e){let t=si(uo(e));if(!t)return;let n=(0,Qn.join)(t.distDir,"McpLauncher.js");return(0,Zy.existsSync)(n)?n:void 0}var tw="/.mcp.json";async function nw(e){let t=(0,Qn.join)(e,".mcp.json"),n;try{n=JSON.parse(await(0,Zn.readFile)(t,"utf-8"))}catch(l){if(l.code!=="ENOENT"){Wc.warn("Skipping MCP registration: %s exists but is unreadable/invalid (%s)",t,String(l));return}n={}}let r=n.mcpServers??{},o=ce(),s=(0,Qn.join)(o,"run-cli"),i=process.platform==="win32"?Kc(o):void 0;r[Gc]=qc(process.platform,s,i);let a={...n,mcpServers:r};await(0,Zn.writeFile)(t,`${JSON.stringify(a,null,2)}
`,"utf-8"),Wc.info("Registered MCP server in %s",t)}async function rw(e){let t=(0,Qn.join)(e,".mcp.json"),n;try{n=JSON.parse(await(0,Zn.readFile)(t,"utf-8"))}catch{return}n.mcpServers?.[Gc]&&(delete n.mcpServers[Gc],await(0,Zn.writeFile)(t,`${JSON.stringify(n,null,2)}
`,"utf-8"),Wc.info("Removed MCP server from %s",t))}var cn=require("node:fs/promises"),sw=require("node:path");ae();y();var pi=m("CodexTomlWriter"),mi="[mcp_servers.jollimemory]";async function iw(e){try{return(await(0,cn.stat)(e)).mode&511}catch{return 384}}function ow(e){return`${mi}
command = ${JSON.stringify(e.command)}
args = ${JSON.stringify(e.args??[])}
`}function aw(e){if(e.startsWith(mi))return 0;let t=e.indexOf(`
${mi}`);return t===-1?-1:t+1}function lw(e){let t=aw(e);if(t===-1)return e;let n=e.indexOf(`
[`,t+mi.length),r=n===-1?e.length:n+1,o=e.slice(0,t),s=e.slice(r);return o===""||s===""?o+s:`${o.replace(/\n+$/,"")}

${s}`}async function cw(e,t){let n="";try{n=await(0,cn.readFile)(e,"utf-8")}catch(i){if(i.code!=="ENOENT"){pi.warn("Skipping Codex MCP: %s unreadable (%s)",e,String(i));return}}let r=lw(n).replace(/\s*$/,""),o=r.length===0?ow(t):`${r}

${ow(t)}`;if(o===n){pi.info("Codex MCP server already registered in %s \u2014 no write needed",e);return}await(0,cn.mkdir)((0,sw.dirname)(e),{recursive:!0});let s=await iw(e);await P(e,o,s),pi.info("Registered Codex MCP server in %s",e)}async function dw(e){let t;try{t=await(0,cn.readFile)(e,"utf-8")}catch{return}aw(t)!==-1&&(await P(e,`${lw(t).replace(/\s*$/,"")}
`,await iw(e)),pi.info("Removed Codex MCP server from %s",e))}var dn=require("node:fs/promises"),uw=require("node:path");ae();y();var fi=m("JsonMcpWriter"),Vc="jollimemory",pw="mcpServers";async function mw(e){try{return(await(0,dn.stat)(e)).mode&511}catch{return}}async function Xe(e,t,n=pw){let r,o="";try{let c=await(0,dn.readFile)(e,"utf-8");o=c,r=c.trim()===""?{}:JSON.parse(c)}catch(c){if(c.code!=="ENOENT"){fi.warn("Skipping MCP registration: %s unreadable/invalid (%s)",e,String(c));return}r={}}let s=r[n]??{},i=()=>`${JSON.stringify({...r,[n]:s},null,2)}
`,a=i();s[Vc]=t;let l=i();if(l===o||l===a){fi.info("MCP server already registered in %s \u2014 no write needed",e);return}await(0,dn.mkdir)((0,uw.dirname)(e),{recursive:!0}),await P(e,l,await mw(e)),fi.info("Registered MCP server in %s",e)}async function ze(e,t=pw){let n;try{n=JSON.parse(await(0,dn.readFile)(e,"utf-8"))}catch{return}let r=n[t];r?.[Vc]&&(delete r[Vc],await P(e,`${JSON.stringify(n,null,2)}
`,await mw(e)),fi.info("Removed MCP server from %s",e))}var cC=m("HostRegistrars"),dC={host:"claude",scope:"repo",register:nw,remove:rw,gitExcludePaths:()=>[tw]};function Qe(){let e=ce(),t=process.platform==="win32"?Kc(e):void 0;return qc(process.platform,(0,V.join)(e,"run-cli"),t)}function uC(){let e=Qe();if(process.platform!=="win32")return e;let t=ew(ce());return t?{command:"node",args:[t]}:e}var pC={host:"cursor",scope:"repo",register:e=>Xe((0,V.join)(e,".cursor","mcp.json"),{...Qe()}),remove:e=>ze((0,V.join)(e,".cursor","mcp.json")),gitExcludePaths:()=>["/.cursor/mcp.json"]},mC={host:"gemini",scope:"global",register:()=>Xe((0,V.join)((0,Re.homedir)(),".gemini","settings.json"),{...Qe()}),remove:()=>ze((0,V.join)((0,Re.homedir)(),".gemini","settings.json")),gitExcludePaths:()=>[]},fC={host:"codex",scope:"global",register:()=>cw((0,V.join)((0,Re.homedir)(),".codex","config.toml"),uC()),remove:()=>dw((0,V.join)((0,Re.homedir)(),".codex","config.toml")),gitExcludePaths:()=>[]},hC={host:"opencode",scope:"global",register:()=>{let e=Qe(),t={type:"local",command:[e.command,...e.args],enabled:!0};return Xe((0,V.join)((0,Re.homedir)(),".config","opencode","opencode.json"),t,"mcp")},remove:()=>ze((0,V.join)((0,Re.homedir)(),".config","opencode","opencode.json"),"mcp"),gitExcludePaths:()=>[]},gC={host:"copilot",scope:"global",register:()=>Xe((0,V.join)((0,Re.homedir)(),".copilot","mcp-config.json"),{...Qe()}),remove:()=>ze((0,V.join)((0,Re.homedir)(),".copilot","mcp-config.json")),gitExcludePaths:()=>[]},yC={host:"copilotChat",scope:"global",register:()=>{let e=Qe(),t={type:"stdio",command:e.command,args:e.args};return Xe((0,V.join)(pt("Code"),"User","mcp.json"),t,"servers")},remove:()=>ze((0,V.join)(pt("Code"),"User","mcp.json"),"servers"),gitExcludePaths:()=>[]},wC={host:"cline",scope:"global",register:async()=>{for(let e of await Ja())await Xe(es(e),{...Qe()})},remove:async()=>{for(let e of Dr())await ze(es(e))},gitExcludePaths:()=>[]},bC={host:"devin",scope:"global",register:()=>Xe((0,V.join)((0,Re.homedir)(),".config","devin","config.json"),{...Qe(),transport:"stdio"}),remove:()=>ze((0,V.join)((0,Re.homedir)(),".config","devin","config.json")),gitExcludePaths:()=>[]},SC={host:"antigravity",scope:"global",register:()=>Xe((0,V.join)((0,Re.homedir)(),".gemini","config","mcp_config.json"),{...Qe()}),remove:()=>ze((0,V.join)((0,Re.homedir)(),".gemini","config","mcp_config.json")),gitExcludePaths:()=>[]},EC={host:"kimi",scope:"global",register:()=>Xe((0,V.join)(is(),"mcp.json"),{...Qe()}),remove:()=>ze((0,V.join)(is(),"mcp.json")),gitExcludePaths:()=>[]};function er(e){let t=[];return e.claude&&t.push(dC),e.cursor&&t.push(pC),e.gemini&&t.push(mC),e.codex&&t.push(fC),e.opencode&&t.push(hC),e.copilot&&t.push(gC),e.copilotChat&&t.push(yC),e.cline&&t.push(wC),e.devin&&t.push(bC),e.antigravity&&t.push(SC),e.kimi&&t.push(EC),t}var TC={claude:!0,codex:!0,cursor:!0,gemini:!0,opencode:!0,copilot:!0,copilotChat:!0,cline:!0,devin:!0,antigravity:!0,kimi:!0};async function Yc(e,t,n,r){for(let o of e)try{await r(o)}catch(s){cC.warn("MCP %s failed for %s in %s (non-fatal): %s",n,o.host,t,String(s))}}async function Xc(e,t){let n=er(t).filter(r=>r.scope==="repo");await Yc(n,e,"registration",r=>r.register(e))}async function fw(e){let t=er(e).filter(n=>n.scope==="global");await Yc(t,"(global)","registration",n=>n.register(""))}async function zc(e){let t=er(TC).filter(n=>n.scope==="repo");await Yc(t,e,"removal",n=>n.remove(e))}var M=require("node:fs/promises"),yi=require("node:os"),D=require("node:path");ae();y();bs();var Ze=`### Shell prerequisite

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
security recipe and the dist resolver and will not produce valid output.`;var Tt='"$HOME/.jolli/jollimemory/run-cli"';function kC(){let e=Object.keys(Wr),n=[...e.filter(r=>r==="cursor-agent"),...e.filter(r=>r!=="cursor-agent")].map(en);return`${n.slice(0,-1).join(", ")}, or ${n[n.length-1]}`}function RC(){return`---
name: jolli-init
description: "Set up Jolli Memory for the current repository in Cursor: verify the plugin hook, enable memory generation through Cursor, sign in to Jolli when sharing is requested, and bind the repo to a Jolli Space. Use for first-time setup, repair, enablement, or Space binding."
---

# Jolli Init

Complete the steps in order. Stop when a required step fails.

${Ze}

## 1. Inspect state

Call the Jolli Memory \`status\` tool. If unavailable, run \`${Tt} status\`.
If the dispatcher is missing, ask the user to run **Developer: Reload Window** and
start a new chat so the Jolli \`sessionStart\` hook runs, then retry.

## 2. Enable local memory generation

Run:

\`\`\`bash
${Tt} enable --repo-hooks-only --source-tag cursor-plugin
\`\`\`

This explicit setup records \`cursor-agent\` as the local-agent tool only when none
is configured yet \u2014 an agent tool and a paid provider already on disk are both left
exactly as they are. It also writes this workspace's
\`.cursor/mcp.json\`, and places \`/jolli-recall\`, \`/jolli-search\`,
\`/jolli-local-run\` and \`/jolli-remote-run\` into this repository \u2014 those four are
not bundled with the plugin, so that they appear once in the menu rather than twice
in a repository that also ran a full \`jolli enable\`. If they were already present
this step changes nothing. Cursor notices that file within a second \u2014 no reload needed \u2014
but registers the server **disconnected**, so tell the user to open **Customize** in
the sidebar and enable \`jollimemory\` to get the MCP tools. Everything below works
without them either way. If the command reports that the repository is manually
disabled, explain that an explicit full \`jolli enable\` is required to clear the
opt-out; do not silently override it.

## 3. Decide whether Jolli sign-in is needed

Local memory generation uses the user's Cursor login and needs no Jolli account.
Jolli sign-in is required to bind and share with a Space.

If the user only wants local memory, skip to Step 5. Otherwise, when status shows
neither a Jolli sign-in nor a Jolli API key, run and wait for:

\`\`\`bash
${Tt} auth login
\`\`\`

The command opens the browser and waits for a loopback callback. Never ask for a
password, token, or callback URL.

## 4. Bind a Space

Call \`list_spaces\`. Match a Space named by the user by id, slug, or exact name.
Otherwise present the available Spaces and ask them to choose, offering the default
first when one exists. Call \`bind_space\` with the selected value. Treat
\`already_bound\` as success.

If the Space tools are unavailable, run \`${Tt} spaces --format json\`,
present only the returned Spaces, then bind the selected id or slug with
\`${Tt} bind --space <id-or-slug> --format json\`. Never put free-typed
user text directly into this command.

## 5. Verify and report

Call \`status\` again (or \`${Tt} status\` when the tool is not registered yet).
Report:

- memory generation enabled or the exact remaining problem;
- which agent generates summaries when provider is \`local-agent\` \u2014 name
  \`localAgentTool\` from \`status\` rather than assuming Cursor, since a tool that
  was already configured is left alone;
- Jolli sign-in and bound Space when sharing was configured;
- a normal commit captures memory and \`git push\` publishes to the bound Space;
- when the MCP tools were unavailable, that enabling \`jollimemory\` in **Customize**
  turns them on (a reload is not required).
`}function vC(){return`---
name: jolli-login
description: Sign in to Jolli from Cursor so the repository can bind to a Jolli Space and share memories. Use when the user asks to log in, authenticate Jolli, connect an account, or fix missing Jolli credentials.
---

# Jolli Login

${Ze}

Run and wait for the interactive browser flow:

\`\`\`bash
${Tt} auth login
\`\`\`

Never ask the user for passwords, API keys, callback URLs, or browser tokens.

On success, say that Jolli credentials were saved and offer \`/jolli-init\` to bind
the repository to a Space. Clarify that local memory generation still uses the
configured local agent unless the user explicitly changes providers. On failure,
surface the command's reason and suggest retrying; if the browser did not open,
point out the login URL printed by the command. If the dispatcher does not exist,
ask the user to run **Developer: Reload Window**, start a new chat so the Jolli
\`sessionStart\` hook runs, and retry.
`}function _C(){return`---
name: jolli-logout
description: Sign out of Jolli from Cursor by clearing the stored Jolli auth token and Jolli API key while preserving other provider credentials. Use when the user asks to log out, disconnect Jolli, or remove Jolli account credentials.
---

# Jolli Logout

${Ze}

Run:

\`\`\`bash
${Tt} auth logout
\`\`\`

Report the command output, then call the Jolli Memory \`status\` tool when
available. Explain the provider-aware result:

- Space binding and cloud sharing require a future Jolli sign-in.
- \`local-agent\` memory generation continues through the configured
  ${kC()} login.
- \`anthropic\` generation continues when its preserved Anthropic key exists.
- \`jolli\` generation stops unless another Jolli API key remains configured.

If the dispatcher does not exist, ask the user to run **Developer: Reload Window**,
start a new chat so the Jolli \`sessionStart\` hook runs, and retry.
`}function xC(){return`---
name: jolli-status
description: Diagnose Jolli Memory installation, provider, account, hooks, queue, integrations, stored memories, and Space binding for the current repository. Use for status, health checks, missing or stale memories, setup verification, or troubleshooting.
---

# Jolli Status

1. Call the Jolli Memory \`status\` tool.
2. Call \`queue_status\` without waiting.
3. Render a compact Markdown table containing version/enabled, hooks/runtime,
   migration, provider/local agent, account credentials, bound Space, and stored
   memories. Omit unavailable optional fields.
4. List detected AI integrations below the table using their returned status text.
5. State whether memory generation is idle or still running.
6. Give a provider-aware verdict:
   - \`local-agent\`: ready when its tool is configured; if an auth failure is
     reported, use that tool's login remedy.
   - \`jolli\`: requires Jolli sign-in or a Jolli API key.
   - \`anthropic\`: requires an Anthropic API key.
   - unset: requires a usable provider credential.

If \`status\` is unavailable, run \`${Tt} status\` and summarize it. Do not
list branch memories; route those requests to \`/jolli-recall\` or \`/jolli-search\`.

${Ze}
`}function CC(){return`---
name: jolli-timeline
description: Show the chronological evolution of a Jolli Memory decision topic. Use when the user asks for a topic timeline, how a decision changed over time, or provides a Jolli topic slug.
---

# Jolli Decision Timeline

Obtain the topic slug from the request. If it is missing or ambiguous, call the
Jolli Memory \`search\` tool and let the user choose the matching topic.

Call \`get_decision_timeline\` with the selected slug. Render source events
oldest-first as a concise chronological narrative, grounding each transition in
the returned commit or source metadata. If the slug is unknown, search again
instead of inventing a timeline.
`}function AC(){return`---
name: jolli-push
description: Publish the current branch's Jolli memories to a Jolli Space. Use when the user asks to push, publish, share, or sync memories or decisions with a team.
---

# Jolli Push

1. Call \`queue_status\` with waiting enabled so newly committed memories are ready.
2. Call \`push_memory\` for the current branch.
3. If it returns \`binding_required\`, present the returned Spaces, ask the user to
   choose one, then call \`push_memory\` again with that Space. If authentication is
   missing, route to \`/jolli-login\` and stop; never request credentials in chat.
4. On success, report the Space and article links. Offer to open links when the host
   provides a browser action.
5. On partial or failed publication, report the exact result and do not claim all
   memories were shared.
`}var PC=[{name:"jolli-init",build:RC},{name:"jolli-login",build:vC},{name:"jolli-logout",build:_C},{name:"jolli-status",build:xC},{name:"jolli-timeline",build:CC},{name:"jolli-push",build:AC}],MH=PC.map(e=>e.name);var hi=require("node:os"),Jt=require("node:path");y();var IC=m("CursorSettings"),OC="cursor/thirdPartyExtensibilityEnabled";function hw(e){let t=e?.trim();return t!==void 0&&t!==""&&(0,Jt.isAbsolute)(t)?t:void 0}function DC(e=process.env,t=(0,hi.platform)()){let n=(0,hi.homedir)();if(t==="win32"){let r=hw(e.APPDATA)??(0,Jt.join)(n,"AppData","Roaming");return(0,Jt.join)(r,"Cursor","User","globalStorage","state.vscdb")}return t==="darwin"?(0,Jt.join)(n,"Library","Application Support","Cursor","User","globalStorage","state.vscdb"):(0,Jt.join)(hw(e.XDG_CONFIG_HOME)??(0,Jt.join)(n,".config"),"Cursor","User","globalStorage","state.vscdb")}async function gw(e=process.env,t=DC(e)){try{let{DatabaseSync:n}=await import("node:sqlite"),r=new n(t,{readOnly:!0});try{let o=r.prepare("SELECT value FROM ItemTable WHERE key = ?").get(OC);if(o?.value===void 0)return!0;let s=String(o.value).trim().replace(/^"|"$/gu,"");return s!=="false"&&s!=="0"}finally{r.close()}}catch(n){return IC.info("Could not read Cursor's third-party-extensibility setting (assuming enabled): %s",n.message),!0}}var he=m("SkillInstaller"),tr="1.0.2",bw=["jollimemory-recall","jolli-memory-recall"],Eo=[{host:"agents-std",relativeDir:[".agents","skills"],enabled:()=>!0}],Qc=[".claude","skills"],wi=[{name:"jolli-recall",build:qC},{name:"jolli-search",build:KC},{name:"jolli-local-run",build:VC},{name:"jolli-remote-run",build:YC},{name:"jolli",build:XC}],Sw=["jolli-pr"],Ew=Eo.flatMap(e=>wi.map(t=>`/${e.relativeDir.join("/")}/${t.name}/`)),bi=["/.claude/skills/jolli/"],Tw=[...Eo.map(e=>`/${e.relativeDir.join("/")}/jolli/`),...bi];async function NC(e,t={}){for(let n of bw)await Si((0,D.join)(e,".claude","skills",n),"legacy");await Zc(e);for(let n of Eo){if(!n.enabled(t))continue;let r=(0,D.join)(e,...n.relativeDir);for(let o of wi)await Aw(r,o.name,o.build())}await td(e)}async function Zc(e){for(let t of Eo){let n=(0,D.join)(e,...t.relativeDir);for(let r of Sw)await Si((0,D.join)(n,r),"retired")}}async function Si(e,t){let n=(0,D.join)(e,"SKILL.md"),r;try{r=await(0,M.readFile)(n,"utf-8")}catch{return}if(!Ei(r)){he.info("Keeping %s \u2014 no Jolli ownership marker (user-owned)",e);return}try{await(0,M.rm)(e,{recursive:!0,force:!0}),he.info("Removed %s Jolli skill at %s",t,e)}catch(o){he.warn("Failed to remove %s skill at %s: %s",t,e,o.message)}}async function kw(e,t={}){return NC(e,t)}async function Rw(e){let t=(0,D.join)(e,...Qc),n=(0,D.join)(t,"jolli","SKILL.md");try{if(!(await(0,M.readFile)(n,"utf-8")).includes('vendor: "jolli.ai"')){he.info("Skipping umbrella write \u2014 existing %s lacks vendor marker (user-owned)",n);return}}catch{}await Aw(t,"jolli",zC())}var gi=[".cursor","skills"],ed=wi.filter(e=>e.name!=="jolli"),LC=[".cursor","skills"],vw=[`/${gi.join("/")}/`,...ed.map(e=>`/${gi.join("/")}/${e.name}/`)];async function td(e){let t=(0,D.join)(e,...gi),n=await jC(),r=n===void 0?[]:await HC(e);n===void 0&&await UC();for(let o of ed){let s=(0,D.join)(t,o.name);if(!await $C(s))continue;if(await JC(r,o.name)||n===void 0){await(0,M.rm)(s,{recursive:!0,force:!0});continue}await FC(s,(0,D.join)(n,o.name))}}var MC="cursor-plugin-root";async function jC(){try{let t=(await(0,M.readFile)((0,D.join)((0,yi.homedir)(),".jolli","jollimemory",MC),"utf-8")).split(`
`)[0]?.trim();if(!t)return;let n=(0,D.join)(t,"mirror");return await(0,M.lstat)(n),n}catch{return}}async function $C(e){let t;try{t=await(0,M.lstat)(e)}catch{return!0}if(t.isSymbolicLink())return!0;if(!t.isDirectory())return!1;try{return Ei(await(0,M.readFile)((0,D.join)(e,"SKILL.md"),"utf-8"))}catch{return!1}}async function yw(e,t){try{if((await(0,M.lstat)(e)).isSymbolicLink())return await(0,M.readlink)(e)===t;let[r,o]=await Promise.all([(0,M.readFile)((0,D.join)(e,"SKILL.md"),"utf-8"),(0,M.readFile)((0,D.join)(t,"SKILL.md"),"utf-8")]);return r===o}catch{return!1}}async function FC(e,t){if(!await yw(e,t)){await(0,M.rm)(e,{recursive:!0,force:!0}),await(0,M.mkdir)((0,D.dirname)(e),{recursive:!0});try{await(0,M.symlink)(t,e,"dir");return}catch(n){if(await yw(e,t))return;he.info("Symlink unavailable for %s (%s) \u2014 copying instead",e,n.message)}try{let n=await(0,M.readFile)((0,D.join)(t,"SKILL.md"),"utf-8");await(0,M.mkdir)(e,{recursive:!0}),await P((0,D.join)(e,"SKILL.md"),n)}catch(n){he.warn("Could not place %s: %s",e,n.message)}}}async function HC(e){let t=(0,yi.homedir)(),n=[(0,D.join)(e,".agents","skills"),(0,D.join)(t,".agents","skills")];return await gw()&&n.push((0,D.join)(e,".claude","skills"),(0,D.join)(t,".claude","skills"),(0,D.join)(e,".codex","skills"),(0,D.join)(t,".codex","skills")),n}async function UC(e=(0,yi.homedir)()){await Si((0,D.join)(e,...LC,"jolli"),"cursor global menu")}async function _w(e){let t=(0,D.join)(e,...gi);for(let n of ed){let r=(0,D.join)(t,n.name),o=!1;try{o=(await(0,M.lstat)(r)).isSymbolicLink()}catch{continue}if(o){await(0,M.rm)(r,{recursive:!0,force:!0}),he.info("Removed cursor mirror symlink at %s",r);continue}await Si(r,"cursor mirror")}}async function JC(e,t){for(let n of e)try{return await(0,M.readFile)((0,D.join)(n,t,"SKILL.md"),"utf-8"),!0}catch{}return!1}async function xw(e){let t=[...Eo.map(n=>n.relativeDir),Qc];for(let n of t){let r=(0,D.join)(e,...n,"jolli"),o=(0,D.join)(r,"SKILL.md"),s;try{s=await(0,M.readFile)(o,"utf-8")}catch{continue}if(s.includes('vendor: "jolli.ai"'))try{await(0,M.rm)(r,{recursive:!0,force:!0}),he.info("Removed Jolli umbrella menu at %s",r)}catch(i){he.warn("Failed to remove umbrella at %s: %s",r,i.message)}}}var BC=[...wi.filter(e=>e.name!=="jolli").map(e=>e.name),...Sw,...bw];async function Cw(e){for(let t of BC){let n=(0,D.join)(e,...Qc,t),r=(0,D.join)(n,"SKILL.md"),o;try{o=await(0,M.readFile)(r,"utf-8")}catch{continue}if(!Ei(o)){he.info("Keeping %s \u2014 no Jolli ownership marker (user-owned)",n);continue}try{await(0,M.rm)(n,{recursive:!0,force:!0}),he.info("Removed legacy Jolli skill at %s",n)}catch(s){he.warn("Failed to remove legacy skill at %s: %s",n,s.message)}}}var WC=/(?:^|\n)[ \t]*revision:\s*(\d+)/,GC=-1;function ww(e){let t=e.match(WC),n=t?Number.parseInt(t[1],10):Number.NaN;return Number.isFinite(n)?n:GC}function Ei(e){return e.includes('vendor: "jolli.ai"')||e.includes("jolli-skill-version:")}async function Aw(e,t,n){let r=(0,D.join)(e,t),o=(0,D.join)(r,"SKILL.md"),s=ww(n);try{let i=await(0,M.readFile)(o,"utf-8");if(!Ei(i)){he.info("Skipping %s SKILL.md \u2014 no Jolli ownership marker (user-owned)",t);return}if(ww(i)>=s)return}catch{}try{await(0,M.mkdir)(r,{recursive:!0}),await P(o,n),he.info("Wrote SKILL.md (revision %d) to %s",s,o)}catch(i){he.warn("Failed to write %s SKILL.md: %s",t,i.message)}}function Pw(e,t){return`${Ze}

### Invocation

Generate a fresh random 16-character hex string (the "delimiter token") for
this invocation \u2014 e.g. \`3f8a9b2c5d7e1f4a\`. Quickly scan the user's argument:
if the argument text contains a line that is exactly \`JOLLI_ARG_<delimiter
token>_END\`, regenerate the delimiter token and re-check.

Then run this Bash, replacing the two \`<DELIM>\` occurrences with your
delimiter token and replacing \`<user-arg>\` with the user's input verbatim:

\`\`\`bash
"$HOME/.jolli/jollimemory/run-cli" ${e} --arg-stdin${t} <<'JOLLI_ARG_<DELIM>_END'
<user-arg>
JOLLI_ARG_<DELIM>_END
\`\`\`

If you cannot follow the above structure (e.g., your environment doesn't
support here-docs), STOP and tell the user "Jolli skill cannot run safely
in this environment." DO NOT attempt to interpolate the argument into argv
or any double-quoted shell string \u2014 that path has a known shell injection
vector.`}function qC(){return`---
name: jolli-recall
description: Recall prior development context from Jolli for the current branch. Use when the user wants to recall, remember, or resume prior work on a branch.
metadata:
  version: "${tr}"
  revision: 2
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

${Pw("recall"," --format json")}

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
`}function KC(){return`---
name: jolli-search
description: Search structured commit memories across all branches \u2014 decisions, topics, files. Use when the user wants to find prior decisions, related commits, or how a topic was handled before.
metadata:
  version: "${tr}"
  revision: 2
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

${Pw("search"," --format json")}

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
`}function VC(){return`---
name: jolli-local-run
description: Run a Jolli workflow locally \u2014 your own agent executes the workflow's recipe (no Jolli LLM budget) and its file writes land in a git-backed Jolli Space via a branch and pull request that space-cli opens on this machine. Use when the user wants to run a Jolli workflow locally.
metadata:
  version: "${tr}"
  revision: 5
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

${Ze}

## Step 1 \u2014 discover the runnable workflows

Run the eligibility helper and read its JSON:

\`\`\`bash
"$HOME/.jolli/jollimemory/run-cli" workflow local-run
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
"$HOME/.jolli/jollimemory/run-cli" docs pull --branch <writeTarget.workBranch>
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
   "$HOME/.jolli/jollimemory/run-cli" docs publish --json
   \`\`\`

   \`--json\` prints exactly one JSON object on stdout (all human-readable progress
   goes to stderr) \u2014 parse that object; never scrape the human log for a PR number.
2. Verify the pull request landed on the server-derived work branch. \`docs publish\`
   reports the branch the PR was actually opened on as \`headBranch\` (present on both
   the public and the private/withheld paths); the run's server work branch is
   \`writeTarget.workBranch\` from Step 2. **When \`pushed\` is true, cross-check them
   deterministically** \u2014 do not eyeball it yourself:

   \`\`\`bash
   "$HOME/.jolli/jollimemory/run-cli" space verify-publish-branch <writeTarget.workBranch> <headBranch>
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
   "$HOME/.jolli/jollimemory/run-cli" open-url <url>
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
`}function YC(){return`---
name: jolli-remote-run
description: Run a Jolli workflow remotely \u2014 the Jolli backend executes the workflow server-side; this recipe triggers the run, monitors it to completion, reports the outcome (failed / cancelled / succeeded) with its article, PR, and workflow links, and offers to open any in your browser. Use when the user wants to run a Jolli workflow remotely (on the Jolli backend).
metadata:
  version: "${tr}"
  revision: 4
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

${Ze}

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
"$HOME/.jolli/jollimemory/run-cli" workflow local-run
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
"$HOME/.jolli/jollimemory/run-cli" workflow run-status <runId>
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
"$HOME/.jolli/jollimemory/run-cli" open-url <url>
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
`}function XC(){return`---
name: jolli
description: The Jolli action menu \u2014 a single front door that lists the Jolli skills available in this session (recall, search, run a workflow local or remote, workflow history, plus any setup and account skills a Jolli plugin adds) and the Jolli MCP tools, then routes your choice to the right one. Use when the user types /jolli or asks for the Jolli menu.
metadata:
  version: "${tr}"
  revision: 7
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

${Ze}

## Step 1 \u2014 build the unified menu

Assemble ONE combined list of actions from two sources.

### Local Jolli skills

Offer the \`jolli-*\` skills that are ACTUALLY AVAILABLE in this session, not a
fixed list \u2014 exactly as with the MCP tools below. The four described here ship
everywhere, so they are documented in full; a host that also has a Jolli plugin
installed (Cursor, Codex, Claude Code) additionally exposes setup and account
skills such as \`jolli-init\`, \`jolli-login\`, \`jolli-logout\`, \`jolli-status\`,
\`jolli-timeline\` and \`jolli-push\`. Include whichever of those exist, named as
this host invokes them, and route by invoking the skill rather than restating its
steps. If the user asks for something one of them owns \u2014 setting Jolli up, signing
in, checking installation health, publishing this branch's memories \u2014 route there
instead of answering that the menu has no such action.

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
  "$HOME/.jolli/jollimemory/run-cli" workflow runs <workflowId>
  \`\`\`

  It prints \`{ "type": "runs", "runs": [ ... ] }\` \u2014 one entry per run with its
  \`status\`, \`timestamp\`, and any \`workflowUrl\` / \`runUrl\` / \`prUrl\` /
  \`articleUrls\`. An empty \`runs\` list is the normal "no history yet" outcome, not
  an error. If instead the command exits non-zero and prints an install hint naming
  \`@jolli.ai/workflow-cli\` (rather than the JSON above), the workflow-cli plugin is
  not installed \u2014 tell the user to install it (\`npm i -g @jolli.ai/cli @jolli.ai/workflow-cli\`)
  and stop. Offer to open any listed URL via the \`open-url\` helper:

  \`\`\`bash
  "$HOME/.jolli/jollimemory/run-cli" open-url <url>
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
`}function zC(){return`---
name: jolli
description: The Jolli front door \u2014 checks how Jolli is set up in this repo, guides first-time setup through /jolli:init when something's missing, reminds you to sign in when memories can't sync yet, and otherwise shows a status snapshot and routes you to the right Jolli skill or MCP tool. Use when the user types /jolli or asks for Jolli / the Jolli menu.
metadata:
  version: "${tr}"
  revision: 8
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
\`/jolli:login\`, \`/jolli:logout\`, \`/jolli:status\` and \`/jolli:timeline\`
entry points all keep working unchanged; this is layered on top of them, not a
replacement.

## Step 0 \u2014 confirm this menu can route

This menu is a project skill written OUTSIDE the Jolli plugin (a plugin skill
could only ever be \`/jolli:<name>\`, never a bare \`/jolli\`), so it can linger
in \`.claude/skills/jolli/\` after the plugin has been uninstalled. It can only
route to targets that exist in THIS session, so before doing anything else
confirm at least one routing target is available. The menu can route if
**either** of these holds:

- one or more MCP tools whose name contains \`jollimemory\` are registered, **or**
- the plugin's own namespaced skills (\`jolli:init\` / \`jolli:recall\` /
  \`jolli:search\` / \`jolli:push\`) are invocable this session.

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
"$HOME/.jolli/jollimemory/run-cli" status
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
`}var $=m("Installer");function ZC(e,t){return process.platform==="linux"?e===t:e.toLowerCase()===t.toLowerCase()}async function eA(e){let t=await te(),n=Xy(t.globalInstructions);if(n.write){let r=e?.codexDetected??await Ga(),o=e?.geminiDetected??await za();await zy({claude:t.claudeEnabled!==!1,gemini:o&&t.geminiEnabled!==!1,codex:r&&t.codexEnabled!==!1})}else n.remove&&await Qy()}async function tA(e,t,n){let r=async()=>{if(!await vc())return!1;try{await Oy()}catch(s){$.warn("Legacy dist-path migration failed (non-fatal): %s",s.message)}if(!await oo(e,t))return!1;try{let s=await Iy();s.length>0&&$.info("Pruned stale dist-paths entries: %s",s.join(", "))}catch(s){$.warn("Pruning stale dist-paths failed (non-fatal): %s",s.message)}return!0},o=n?await sa(r,n):await sa(r);return o.acquired&&o.value===!0}async function Ow(e,t){let n=e??process.cwd(),r=[],o=t?.integrationsOnly===!0,s=t?.repoHooksOnly===!0;if(o&&s)return{success:!1,message:"install: integrationsOnly and repoHooksOnly are mutually exclusive",warnings:r};if(!await vn(n))return $.info("Skipping Jolli Memory install \u2014 %s is not inside a git work tree",n),{success:!1,message:`Not a git repository \u2014 skipping Jolli Memory install (${n})`,warnings:r};$.info(s?"Installing Jolli Memory repo hooks only (no integrations)":o?"Installing Jolli Memory integrations (no hooks)":"Installing Jolli Memory hooks");let i=null;try{let a=await te(),l=t?.automatic?[n]:await _n(n),c=t?.automatic?{timeoutMs:200,pollMs:25}:void 0,u=(0,un.dirname)((0,Iw.fileURLToPath)(__jmImportMetaUrl)),d=t?.source??"cli",p=t?.sourceTag??(d==="vscode-extension"?Tc(u):"cli");if(!ro(p))return{success:!1,message:`Refusing to install with an unsafe source tag: ${JSON.stringify(p)}`,warnings:r};let f=Pm(p);if(!await tA(p,t?.distDir,c))return{success:!1,message:"Failed to reconcile the shared runtime registry \u2014 cannot install hooks that depend on it",warnings:r};if(!o){if(i=c?await br(n,c):await br(n),!i)return{success:!1,message:"Another Jolli enable/disable operation is still running; retry shortly",warnings:r};if(t?.respectManualDisable&&await Pt(n))return{success:!0,message:"Repository remains manually disabled",warnings:r,manuallyDisabled:!0};if(!t?.automatic)try{let x=await Im(p,a);x!==null&&(x.seededTool||x.seededProvider)&&$.info("Plugin init seeded localAgentTool=%s (source %s, seededTool=%s, seededProvider=%s)",x.tool,p,x.seededTool,x.seededProvider),x?.keptTool!==void 0&&$.info("Plugin init kept localAgentTool=%s (source %s drives %s; left alone)",x.keptTool,p,x.tool)}catch(x){r.push(`Could not record the local agent tool for this host: ${x.message}`)}}let h=s?!1:await Ga(),w=s?!1:await za(),T=s?!1:await zp(),b=s?!1:await Nm(),k=s?!1:await qp(),R=s?!1:await Fp(),j=s?!1:await Dp()||await Ip(),I=s?!1:await Ya(),F=s?!1:await sl(),ge=s?!1:await Ka(),Pe=s?!1:await Np(),Ie=s?!1:await em(),Rt=s?!1:await bp(),Wt=s?!1:await Cm(),vt={};for(let x of l){let wn=await Aa(x),Hb=(0,un.join)(wn,"sessions.json");try{await(0,Ti.writeFile)(Hb,JSON.stringify({version:1,sessions:{}},null,"	"),{encoding:"utf-8",flag:"wx"})}catch(st){st.code!=="EEXIST"&&$.warn("Failed to bootstrap sessions.json in %s: %s",x,st.message)}if(s){if(await Zc(x),f==="claude"){if(await Rw(x),await Cw(x),await ai(x,[...bi]),a.claudeEnabled!==!1){let st=await Ql(x);(x===n||vt.path===void 0)&&(vt=st)}}else if(f==="cursor"){let st={claude:!1,codex:!1,cursor:!0,gemini:!1,opencode:!1,copilot:!1,copilotChat:!1,cline:!1,devin:!1,antigravity:!1,kimi:!1};await Xc(x,st),await ai(x,er(st).flatMap(Ub=>Ub.gitExcludePaths()))}await td(x),await ai(x,[...vw]);continue}await kw(x,{claudeEnabled:a.claudeEnabled});let Ad={claude:a.claudeEnabled!==!1,codex:h,cursor:I,gemini:w,opencode:F,copilot:ge,copilotChat:R,cline:Pe,devin:Ie,antigravity:Rt,kimi:Wt};if(await jy(x,[...Ew,...bi,...er(Ad).flatMap(st=>st.gitExcludePaths())]),await Xc(x,Ad),o||a.claudeEnabled===!1)continue;let Ui=await Ql(x);Ui.warning&&r.push(Ui.warning),(x===n||vt.path===void 0)&&(vt=Ui)}await fw({claude:!1,cursor:!1,codex:h||s&&f==="codex",gemini:w,opencode:F,copilot:ge,copilotChat:R,cline:Pe,devin:Ie,antigravity:Rt,kimi:Wt}),s||await eA({codexDetected:h,geminiDetected:w});let hn={},rt={},_t={},gn={},yn={};o||(hn=await Pc(n),hn.warning&&r.push(hn.warning),rt=await Ic(n),rt.warning&&r.push(rt.warning),_t=await Oc(n),_t.warning&&r.push(_t.warning),gn=await Dc(n),gn.warning&&r.push(gn.warning),yn=await Nc(n),yn.warning&&r.push(yn.warning)),h&&a.codexEnabled===void 0&&(await ct({codexEnabled:!0}),$.info("Codex detected \u2014 enabled Codex session discovery"));let ot;if(w&&a.geminiEnabled!==!1){if(!o)for(let x of l){let wn=await _c(x);(x===n||ot===void 0)&&(ot=wn.path)}a.geminiEnabled===void 0&&(await ct({geminiEnabled:!0}),$.info("Gemini detected \u2014 enabled Gemini session tracking"))}a.openCodeEnabled!==!1&&b&&a.openCodeEnabled===void 0&&(await ct({openCodeEnabled:!0}),$.info("OpenCode detected \u2014 enabled OpenCode session discovery"));let Fi=s?!1:await Kp(),lr=a.cursorEnabled!==!1&&T,Co=a.cursorEnabled!==!1&&Fi;(lr||Co)&&a.cursorEnabled===void 0&&(await ct({cursorEnabled:!0}),$.info("Cursor detected (IDE=%s, CLI=%s) \u2014 enabled session discovery",lr,Co));let Hi=a.copilotEnabled!==!1&&k,W=a.copilotEnabled!==!1&&R;if((Hi||W)&&a.copilotEnabled===void 0&&(await ct({copilotEnabled:!0}),$.info("GitHub Copilot detected (CLI=%s, Chat=%s) \u2014 enabled session discovery",Hi,W)),j&&a.clineEnabled===void 0&&(await ct({clineEnabled:!0}),$.info("Cline detected \u2014 enabled Cline session discovery")),!s)for(let x of l)await nA(x);if(t?.source==="vscode-extension")$.info("Skipping v5 migration on vscode-extension source \u2014 Extension.ts owns it with UI");else if(s)$.info("Skipping v5 migration in repo-hooks-only mode \u2014 runs on every session start");else try{let x=await Oh(n);$.info("Schema v5 migration: alreadyDone=%s fresh=%s migrated=%d skipped=%d",x.alreadyDone,x.fresh,x.migrated,x.skipped)}catch(x){$.warn("Schema v5 migration failed (non-fatal): %s",x.message)}if(t?.clearManualDisableOnSuccess&&!o)try{await ua(n,!1)}catch(x){let wn=x.message;r.push(`Enabled, but could not clear the manual-disable opt-out (${wn}). Run enable again to clear it.`),$.warn("Could not clear manual-disable opt-out after enable (non-fatal): %s",wn)}return $.info("Installation complete"),{success:!0,message:"Jolli Memory hooks installed successfully",warnings:r,claudeSettingsPath:vt.path,gitHookPath:hn.path,postRewriteHookPath:rt.path,prepareMsgHookPath:_t.path,postMergeHookPath:gn.path,prePushHookPath:yn.path,geminiSettingsPath:ot}}catch(a){let l=`Installation failed: ${a.message}`;return $.error(l),{success:!1,message:l,warnings:r}}finally{i&&await i.release()}}async function nA(e){let t=J(e);try{await(0,Ti.stat)(t)}catch{return}let n=ce();if(ZC((0,un.resolve)(t),(0,un.resolve)(n)))return;let r=await Vt(t),o={};for(let[c,u]of Object.entries(r))u!==void 0&&(o[c]=u);if(Object.keys(o).length===0)return;let s=await Vt(n),i={};for(let[c,u]of Object.entries(o))s[c]===void 0&&(i[c]=u);Object.keys(i).length>0&&await xr(i,n);let a={};for(let c of Object.keys(i))a[c]=void 0;Object.keys(a).length>0&&await xr(a,t);let l=Object.keys(o).filter(c=>!(c in i));for(let c of l)$.warn("Worktree %s field %s not migrated: worktree=%s, global=%s (global value takes effect)",e,c,String(o[c]),String(s[c]));$.info("Migrated %d config fields from worktree %s to global",Object.keys(i).length,e)}async function Dw(e,t){let n=e??process.cwd(),r=[],o=t?.integrationsOnly===!0;$.info(o?"Removing Jolli Memory integrations (MCP)":"Removing Jolli Memory hooks");let s=null;try{if(!o&&!t?.repoLockHeld&&(s=await br(n),!s))return{success:!1,message:"Another Jolli enable/disable operation is still running; retry shortly",warnings:r};!o&&t?.persistManualDisable&&await ua(n,!0);let i;try{i=await _n(n)}catch{i=[n]}if(o){for(let l of i)try{await zc(l)}catch(c){$.warn("MCP removal failed in %s (non-fatal): %s",l,c.message)}return $.info("Integrations removal complete"),{success:!0,message:"Jolli Memory integrations removed (MCP)",warnings:r}}for(let l of i){let c=await Zl(l);c.warning&&r.push(c.warning),await xc(l);try{await zc(l)}catch(u){$.warn("MCP removal failed in %s (non-fatal): %s",l,u.message)}t?.preserveMenu||await xw(l),await _w(l)}let a=await Lc(n);return a.warning&&r.push(a.warning),await Mc(n),await jc(n),await $c(n),await Fc(n),t?.preserveMenu||await $y(n,Tw),r.push("The `jolli-*` skill files were left in place. To remove them manually: `rm -rf .agents/skills/jolli-* .claude/skills/jolli-*` and delete the `# >>> jolli skill exclude >>>` block from `.git/info/exclude` if you no longer want it."),$.info("Uninstallation complete"),{success:!0,message:"Jolli Memory hooks removed successfully",warnings:r}}catch(i){let a=`Uninstallation failed: ${i.message}`;return $.error(a),{success:!1,message:a,warnings:r}}finally{s&&await s.release()}}y();function ki(){return new Promise((e,t)=>{let n=[];process.stdin.setEncoding("utf-8"),process.stdin.on("data",r=>n.push(r)),process.stdin.on("end",()=>{process.stdin.destroy(),e(n.join(""))}),process.stdin.on("error",t)})}var Di=require("node:fs/promises"),rb=require("node:path");y();ae();ue();y();$n();we();function nr(e){if(!e.startsWith("sk-jol-"))return null;let t=e.slice(7);if(!t.includes("."))return null;for(let n of t.split("."))try{let r=Buffer.from(n,"base64url").toString("utf-8"),o=JSON.parse(r);if(typeof o.t=="string"&&typeof o.u=="string")return{t:o.t,u:o.u,...typeof o.o=="string"?{o:o.o}:{}}}catch{}return null}var rA=["jolli.ai","jolli.dev","jolli.cloud","jolli-local.me"];function Ri(e){let t;try{t=new URL(e)}catch{throw new Error(`Rejected Jolli origin (unparseable): ${e}`)}if(!oA(t))throw new Error(`Rejected Jolli origin "${t.origin}". Only https://*.jolli.ai, https://*.jolli.dev, https://*.jolli.cloud, and https://*.jolli-local.me are permitted.`)}function oA(e){let t=e.hostname.toLowerCase();return e.protocol==="https:"&&t!==""&&rA.some(n=>t===n||t.endsWith(`.${n}`))}var X=class extends Error{constructor(t){super(t),this.name="LocalAgentSetupError"}},kt=class extends Error{constructor(t){super(t),this.name="LocalAgentAuthError"}},Bt=class extends Error{constructor(t){super(t),this.name="LocalAgentTransientError"}};var sA=new Map;function rr(e){sA.set(e.id,e)}var sr=require("node:path");var Le=require("node:fs"),nd=require("node:os"),or=require("node:path");y();Se();var vi=m("ExecutableResolver"),iA=15*6e4,To=null;function aA(e){return e.split(`
`).map(t=>t.trim()).filter(Boolean)}function Nw(e){return(e??"0").split(".").map(t=>Number.parseInt(t,10)||0)}function lA(e,t){let n=Nw(e),r=Nw(t);for(let o=0;o<Math.max(n.length,r.length);o++){let s=n[o]??0,i=r[o]??0;if(s!==i)return s>i}return!1}function cA(e){return[or.posix.join(e,".local/bin"),"/usr/local/bin","/opt/homebrew/bin","/opt/homebrew/sbin",or.posix.join(e,".npm-global/bin"),"/Applications/ChatGPT.app/Contents/Resources"]}function Mw(e,t,n){if(n==="win32")return e;let r=e.split(":").filter(Boolean);return[...new Set([...r,...cA(t)])].join(":")}function dA(e,t,n){let r={...process.env};for(let o of Object.keys(r))o.toLowerCase()==="path"&&delete r[o];return r.PATH=n,ye(e,[...t],{encoding:"utf8",env:r})}function uA(e,t,n={}){let r=n.home??(0,nd.homedir)(),o=n.basePath??process.env.PATH??"",s=n.exists??Le.existsSync,i=n.runFinder??dA,a=n.listDir??Hw,l=[],c=t==="win32"?"where":"which",u=t==="win32"?[e.binName]:["-a",e.binName],d=Mw(o,r,t);try{l.push(...aA(i(c,u,d)))}catch(k){vi.info("%s: `%s %s` found nothing (%s)",e.binName,c,u.join(" "),k.message)}let p=e.knownPaths(r,t).filter(s);l.push(...p);let f=[...new Set(l)];if(t!=="win32")return Lw(e,f.length,f,[],p,d,":"),f.map(k=>({file:k}));let h=k=>k.toLowerCase().endsWith(".exe"),w=f.filter(k=>!h(k)),T=w.flatMap(k=>e.expandShim?.(k,{exists:s,listDir:a})??[]),b=$w([...f.filter(h).map(k=>({file:k})),...T]);return Lw(e,b.length,b.map(ko),w,p,d,";"),b}var pA=[".exe",".cmd",".bat",".ps1",""];function jw(e,t){try{return(0,Le.statSync)(e).isFile()?(t==="win32"||(0,Le.accessSync)(e,Le.constants.X_OK),!0):!1}catch{return!1}}function mA(e,t,n={}){let r=n.home??(0,nd.homedir)(),o=n.basePath??process.env.PATH??"",s=n.exists??(u=>jw(u,t)),i=t==="win32"?or.win32.join:or.posix.join,a=Mw(o,r,t).split(t==="win32"?";":":"),l=t==="win32"?pA:[""],c=[];for(let u of a)if(u)for(let d of l){let p=i(u,e.binName+d);s(p)&&c.push(p)}return c.push(...e.knownPaths(r,t).filter(s)),[...new Set(c)]}function et(e,t={}){let n=t.platform??process.platform,r=t.exists??(o=>jw(o,n));return t.overridePath?Fw(e,t.overridePath,n).list.some(o=>r(o.file)):t.candidates?t.candidates().length>0:mA(e,n,t).length>0}function $w(e){let t=new Set;return e.filter(n=>{let r=[n.file,...n.launchArgs??[]].join("\0");return t.has(r)?!1:(t.add(r),!0)})}function Fw(e,t,n){let r={list:[{file:t}],expanded:!1};if(n!=="win32"||t.toLowerCase().endsWith(".exe"))return r;let o=$w(e.expandShim?.(t,{exists:Le.existsSync,listDir:Hw})??[]);return o.length?{list:o,expanded:!0}:r}function fA(e,t){return t!=="win32"||e.toLowerCase().endsWith(".exe")?"":" On Windows this must be a real .exe \u2014 a .cmd/.ps1 launcher cannot be run directly."}function ko(e){return e.launchArgs?.length?`${e.file} ${e.launchArgs.join(" ")}`:e.file}function Hw(e){try{return(0,Le.readdirSync)(e)}catch{return[]}}function Lw(e,t,n,r,o,s,i){vi.info("%s discovery: %d candidate(s)=[%s]; shims=[%s]; knownPaths present=[%s] (searched %d PATH entries)",e.binName,t,n.join(", ")||"(none)",r.join(", ")||"(none)",o.join(", ")||"(none)",s.split(i).filter(Boolean).length)}function hA(e){let t=e.trim().split(/\s+/).filter(Boolean);return t.find(n=>/^v?\d+\./.test(n))??t[0]}function gA(e,t){try{let n=[...e.launchArgs??[],...t],r=ye(e.file,n,{encoding:"utf8",timeout:1e4}),o=hA(r);return{ok:!!o,version:o}}catch{return{ok:!1}}}function tt(e,t={}){let n=t.now??Date.now,r=`${e.binName} ${t.overridePath??""}`;if(To&&To.key===r&&n()-To.at<iA)return To.result;let o=t.probe??(u=>gA(u,e.probeArgs)),s=t.platform??process.platform,i=t.overridePath?Fw(e,t.overridePath,s):null,a=i?.list??(t.candidates??(()=>uA(e,s)))(),l=null,c=[];for(let u of a){let d=o(u);if(!d.ok){c.push(ko(u));continue}(!l||lA(d.version,l.version))&&(l={file:u.file,version:d.version??"0",launchArgs:u.launchArgs})}if(!l){vi.warn("No compatible %s: overridePath=%s; candidates=[%s]; failed probe `%s %s`=[%s]",e.binName,t.overridePath??"(none)",a.map(ko).join(", ")||"(none)",e.binName,e.probeArgs.join(" "),c.join(", ")||"(none)");let u=t.overridePath&&!i?.expanded?fA(t.overridePath,s):"";throw new X(t.overridePath?`Configured local agent path "${t.overridePath}" is not a working ${e.binName} CLI.${u}`:`No compatible ${e.binName} CLI found. Install/upgrade it, or switch the AI provider.`)}return vi.info("Resolved %s executable: %s (v%s)",e.binName,ko(l),l.version),To={at:n(),key:r,result:l},l}var Uw={binName:"claude",knownPaths:(e,t)=>t==="win32"?[sr.win32.join(e,".local","bin","claude.exe"),sr.win32.join(e,".claude","local","claude.exe")]:[sr.posix.join(e,".local/bin/claude"),sr.posix.join(e,".claude/local/claude")],probeArgs:["--permission-mode","dontAsk","--version"]};function Jw(e={}){return tt(Uw,e)}function Bw(e={}){return et(Uw,e)}y();ae();ne();var w1=m("OptionalFlags");function ir(e,t){let n=[];for(let r of e)t?.has(r.id)||n.push(...r.args);return n}function yA(e){let t,n=-1;for(let[r,o]of Object.entries(e??{})){let s=o?.outputTokens??0;s>n&&(t=r,n=s)}return t}var wA=["ANTHROPIC_API_KEY","ANTHROPIC_AUTH_TOKEN","ANTHROPIC_BASE_URL","CLAUDE_CODE_OAUTH_TOKEN","CLAUDECODE"],Ww=[{id:"--strict-mcp-config",args:["--strict-mcp-config"]},{id:"--disable-slash-commands",args:["--disable-slash-commands"]},{id:"--setting-sources",args:["--setting-sources",""]}],_i=class{constructor(){this.id="claude-code";this.optionalFlags=Ww}discoverExecutable(t){return Promise.resolve(Jw({overridePath:t}))}isPresent(t){return Bw({overridePath:t})}buildInvocation(t,n){let r={...process.env};for(let s of wA)delete r[s];r[Oe]="1";let o=Fe();return{file:t.file,args:[...t.launchArgs??[],"-p","--output-format","json",...n.model?["--model",n.model]:[],"--system-prompt",n.systemPrompt,"--tools","","--permission-mode","dontAsk","--no-session-persistence",...ir(Ww,n.disabledFlagIds)],stdin:n.prompt,env:r,cwd:o}}parseResult(t){let n;try{n=JSON.parse(t)}catch{throw new X(`Could not parse Claude Code output as JSON (first 200 chars): ${t.slice(0,200)}`)}if(n.is_error){let s=n.api_error_status??0,i=n.result??n.subtype??"unknown",a=`Claude Code returned an error (status ${s}): ${i}`;throw s===401||s===403?new kt(a):s===429||s>=500&&s<600?new Bt(a):/log ?in|logged in|unauthori|authenticat|invalid api key/i.test(i)?new kt(a):new X(a)}let r=n.usage??{},o=yA(n.modelUsage);return{text:n.result??"",inputTokens:r.input_tokens??0,outputTokens:r.output_tokens??0,cachedTokens:(r.cache_read_input_tokens??0)+(r.cache_creation_input_tokens??0),costUsd:n.total_cost_usd??0,stopReason:n.stop_reason??null,...o!==void 0&&{model:o}}}};var Ci=require("node:path");var bA=300;function Gw(e){let t=e.slice(0,bA);return/log ?in|logged in|unauthori|authenticat/i.test(t)?new kt(`Codex auth error: ${t}`):new Bt(`Codex run failed: ${t}`)}var qw={binName:"codex",knownPaths:(e,t)=>t==="win32"?[Ci.win32.join(e,".local","bin","codex.exe")]:[Ci.posix.join(e,".local/bin/codex")],probeArgs:["--version"]},Kw=[{id:"--disable",args:["--disable","plugins"],matches:["--disable","Unknown feature flag: plugins"]}],xi=class{constructor(){this.id="codex";this.optionalFlags=Kw}discoverExecutable(t){return Promise.resolve(tt(qw,{overridePath:t}))}isPresent(t){return et(qw,{overridePath:t})}buildInvocation(t,n){let r={...process.env};delete r.OPENAI_API_KEY,delete r.OPENAI_BASE_URL,r[Oe]="1";let o=Fe(),s=n.systemPrompt?`${n.systemPrompt}

${n.prompt}`:n.prompt,i=[...t.launchArgs??[],"exec","--json","--skip-git-repo-check","-s","read-only","-C",o,...ir(Kw,n.disabledFlagIds),...n.model?["-m",n.model]:[],s];return{file:t.file,args:i,stdin:"",env:r,cwd:o}}parseResult(t){let n="",r=0,o=0,s=0,i=!1,a;for(let l of t.split(`
`)){let c=l.trim();if(!c)continue;let u;try{u=JSON.parse(c)}catch{continue}i=!0;let d=u.type??"";if(d==="turn.failed")throw Gw(u.message??u.error?.message??c);if(/error/i.test(d)){a??=u.message??u.error?.message??c;continue}if(d==="item.completed"&&u.item?.type==="agent_message"){let p=u.item.text;p&&(n=p)}d==="turn.completed"&&u.usage&&(r=u.usage.input_tokens??r,o=u.usage.output_tokens??o,s=u.usage.cached_input_tokens??s)}if(!i)throw new X(`Codex produced no JSONL events (first 200 chars): ${t.slice(0,200)}`);if(a!==void 0&&n.trim()==="")throw Gw(a);return{text:n,inputTokens:r,outputTokens:o,cachedTokens:s,costUsd:0,stopReason:null}}};var nt=require("node:path");function SA(e,t){let n=nt.win32.join(nt.win32.dirname(e),"versions");return[...t.listDir(n)].sort().reverse().flatMap(o=>{let s=nt.win32.join(n,o,"node.exe"),i=nt.win32.join(n,o,"index.js");return!t.exists(s)||!t.exists(i)?[]:[{file:s,launchArgs:["--use-system-ca",i]},{file:s,launchArgs:[i]}]})}function EA(e,t=process.env){return t.LOCALAPPDATA||nt.win32.join(e,"AppData","Local")}function TA(e,t,n){return t!=="win32"?[nt.posix.join(e,".local/bin/cursor-agent")]:[nt.win32.join(EA(e,n),"cursor-agent","cursor-agent.cmd"),nt.win32.join(e,".local","bin","cursor-agent.exe")]}var Vw={binName:"cursor-agent",knownPaths:TA,probeArgs:["--version"],expandShim:SA},Ai=class{constructor(){this.id="cursor-agent"}discoverExecutable(t){return Promise.resolve(tt(Vw,{overridePath:t}))}isPresent(t){return et(Vw,{overridePath:t})}buildInvocation(t,n){let r={...process.env};delete r.CURSOR_API_KEY,r[Oe]="1";let o=Fe(),s=n.systemPrompt?`${n.systemPrompt}

${n.prompt}`:n.prompt,i=[...t.launchArgs??[],"-p","--output-format","json","--trust",...n.model?["--model",n.model]:[],s];return{file:t.file,args:i,stdin:"",env:r,cwd:o}}parseResult(t){let n;try{n=JSON.parse(t)}catch{throw new X(`Could not parse Cursor output as JSON (first 200 chars): ${t.slice(0,200)}`)}if(n.is_error){let o=n.result??n.subtype??"unknown",s=`Cursor returned an error: ${o}`;throw/log ?in|logged in|unauthori|authenticat|not_logged_in/i.test(o)||/auth/i.test(n.subtype??"")?new kt(s):new X(s)}let r=n.usage??{};return{text:n.result??"",inputTokens:r.inputTokens??0,outputTokens:r.outputTokens??0,cachedTokens:(r.cacheReadTokens??0)+(r.cacheWriteTokens??0),costUsd:0,stopReason:n.subtype??null}}};var Xw=require("node:fs"),pn=require("node:path");ha();var kA=24e3,RA=1e6,vA="jolli-context.md",_A=["---","name: jolli-task","description: Full task context for this run; follow the instructions it contains.","---"].join(`
`),xA="Follow the instructions in your agent definition and output only what they ask for \u2014 no preamble, no commentary.";function CA(e,t){return t!=="win32"?[pn.posix.join(e,".local/bin/kimi")]:[pn.win32.join(e,".kimi-code","bin","kimi.exe"),pn.win32.join(e,".local","bin","kimi.exe")]}var Yw={binName:"kimi",knownPaths:CA,probeArgs:["--version"]},Pi=class{constructor(){this.id="kimi"}discoverExecutable(t){return Promise.resolve(tt(Yw,{overridePath:t}))}isPresent(t){return et(Yw,{overridePath:t})}buildInvocation(t,n){let r={...process.env};delete r.MOONSHOT_API_KEY,delete r.MOONSHOT_BASE_URL,r[Oe]="1";let o=Fe(),s=n.systemPrompt?`${n.systemPrompt}

${n.prompt}`:n.prompt,i=[...t.launchArgs??[],...n.model?["--model",n.model]:[],"--output-format","stream-json"];if(s.length<=kA)return{file:t.file,args:[...i,"--prompt",s],stdin:"",env:r,cwd:o};let a=(0,pn.join)(o,vA);(0,Xw.writeFileSync)(a,`${_A}
${fa(s,RA)}`,"utf-8");let l=[...i,"--agent-file",a,"--prompt",xA];return{file:t.file,args:l,stdin:"",env:r,cwd:o}}parseResult(t){let n="";for(let r of t.split(`
`)){let o=r.trim();if(!o)continue;let s;try{s=JSON.parse(o)}catch{continue}s.role==="assistant"&&typeof s.content=="string"&&s.content&&(n=s.content)}if(!n)throw new X(`Kimi produced no assistant output (first 200 chars): ${t.slice(0,200)}`);return{text:n,inputTokens:0,outputTokens:0,cachedTokens:0,costUsd:0,stopReason:null}}};var mn=require("node:path");function AA(e,t){let n=mn.win32.dirname(e),r=mn.win32.join(n,"node_modules","opencode-ai","bin","opencode.exe");return t.exists(r)?[{file:r}]:[]}var zw={binName:"opencode",knownPaths:(e,t)=>t==="win32"?[mn.win32.join(e,".opencode","bin","opencode.exe"),mn.win32.join(e,".local","bin","opencode.exe")]:[mn.posix.join(e,".local/bin/opencode")],probeArgs:["--version"],expandShim:AA},Qw=[{id:"--pure",args:["--pure"]}],Ii=class{constructor(){this.id="opencode";this.optionalFlags=Qw;this.unnamedFlagFailures=!0}discoverExecutable(t){return Promise.resolve(tt(zw,{overridePath:t}))}isPresent(t){return et(zw,{overridePath:t})}buildInvocation(t,n){let r={...process.env};r[Oe]="1",r.OPENCODE_DISABLE_CLAUDE_CODE="1";let o=Fe(),s=n.systemPrompt?`${n.systemPrompt}

${n.prompt}`:n.prompt,i=[...t.launchArgs??[],"run",...ir(Qw,n.disabledFlagIds),...n.model?["--model",n.model]:[],s];return{file:t.file,args:i,stdin:"",env:r,cwd:o}}parseResult(t){let n=t.trim();if(!n)throw new X("OpenCode produced no output.");return{text:n,inputTokens:0,outputTokens:0,cachedTokens:0,costUsd:0,stopReason:null}}};rr(new _i);rr(new Ai);rr(new xi);rr(new Ii);rr(new Pi);y();Se();var Z1=m("LocalAgentRunner"),eJ=15*6e4;var rd=`  - Subject and tense: third person, past tense, with a concrete subject. Use "The developer added...", "This commit (or batch of commits) introduced...", "The login page now ...", or "Users can now ...". FORBIDDEN subjects: "the tool", "the LLM", "the system", "the model", "the AI" -- never anthropomorphize the generator. Never "I" or "we".
  - Describe WHAT changed and what users can now do differently. Do NOT explain WHY technical choices were made -- that belongs in the decisions field. If a sentence connects clauses with any of the words below, it is almost certainly explaining WHY/HOW or contrasting an alternative -- rewrite to state only the outcome, even if the sentence becomes shorter:
      * Causal: "so", "because", "since" (when meaning "because"), "which means", "which forced", "in order to"
      * Contrastive: "rather than", "instead of", "as opposed to", "unlike before", "unlike previously"
    Note: words like "without" and "until" are NOT forbidden. They are fine when they describe a neutral spatial / contextual fact ("without leaving the page", "until the result satisfies the user"). They become a problem only when they implicitly criticise an old path ("...there was no way to fix it without re-running the entire flow from scratch") -- which is already covered by the broader rule "do not describe before-vs-after in the recap".
  - No code identifiers: no file paths, no function/class/variable names, no CLI flags, no inline code. Also forbidden: any internal field name or section label from this prompt or the data model (e.g. "decisions field", "topic count", "importance label", "recap block", "word ceiling", "trailing mention"). Also forbidden: references to how the generator works internally ("before labeling", "after parsing", "the tool decides", "marked as major"). The test: a colleague who uses the product but has never seen this codebase or this prompt should understand every sentence.
  - User-facing names ARE allowed and encouraged: product names, page names ("the login page"), feature names ("article reordering"), and widely-recognized UI element names ("the sidebar", "the Settings panel").
  - Meta-commits (changes to internal rules, prompts, configuration, or generation behavior the user does not directly interact with): describe the user-VISIBLE consequence -- what the user will see in future output or product behavior -- NOT the internal rule that changed. Translate mechanism statements like "the recap is now generated after the topic list" into user-facing outcomes like "future commit summaries will read more clearly: each recap covers fewer topics in greater depth". If you cannot identify a visible consequence for the user, this change may not warrant a recap at all.
  - Paragraph balance: when the recap has multiple paragraphs, each paragraph MUST contain at least 2 sentences. Single-sentence paragraphs alongside longer ones produce a fragmented finish -- expand the short one with concrete detail, or merge it into an adjacent paragraph. (A whole-recap-of-one-sentence is still fine for trivial single-change commits.)
  - Self-check (mandatory): before finalizing your output, mentally scan each sentence of your draft recap for the forbidden connectives listed above. For every match, rewrite that sentence to state only the visible outcome and drop the comparison/causation clause entirely. The lost information either belongs in the decisions field or should not be in the recap at all. If you have not done this scan, your output is not ready.`,od=`  Recap anti-patterns (do NOT write like this):
  - BAD: "The way the tool selects topics was overhauled, so it can look back at what was already marked as major rather than guessing ahead."
    Why bad: subject "the tool" anthropomorphizes the generator; "so" + "rather than" are causal connectives explaining WHY/HOW; "marked as major" is implementation-level vocabulary.
  - BAD: "The recap block was moved after the topics, which means the LLM no longer needs to anticipate the importance label."
    Why bad: "the LLM" forbidden subject; "the recap block" / "importance label" are internal field names; "which means" explains mechanism.
  - GOOD: "Future commit summaries will be easier to read: each recap now focuses on the two or three most impactful changes and explains them in real depth. Single-line summaries of every topic are gone. Routine cleanup work no longer appears in the recap at all."
    Why good: subject is the user-visible artefact ("future commit summaries"); describes WHAT the user will see; no internal vocabulary; no forbidden causal/contrastive connectives.`,Zw=`**Output format requirements (READ FIRST -- the rest of this prompt depends on these being followed):**

Your response MUST be a delimited plain-text document with the following shape:

\`\`\`
===SUMMARY===
[optional ---TICKETID--- block]
[zero or more ===TOPIC=== blocks]
[optional ---RECAP--- block, AFTER all topics]
\`\`\``;function eb(e,t){return`===TOPIC===
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
major`}function sd(e){let t=e.majorQualifier?" major":"",n=e.preserveNote?" -- the topics list preserves them":"";return`  - Pick the ${e.topicRange} highest-impact${t} topics to cover; skip the rest${n}. Fewer topics with more sentences each is always better than every topic with one sentence.
  - For each chosen topic, write 2-4 sentences. Target ${e.wordTarget} words total. No hard upper limit -- let the substance drive length.`}var PA=`You are Jolli Memory, an AI development process documentation tool. Your job is to analyze a development session (human-AI conversation + code changes) and produce a structured summary.

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

${Zw}

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

${eb("What was implemented or fixed -- this is a detail field, so technical precision is welcome. Name files, functions, and systems changed. ALWAYS use a bulleted list (- item) when there are 2+ distinct points. Use 2-4 sentences per point -- enough to specify what changed, not pad. A single sentence is fine for trivial single-point changes. Maximum 3 points. If the commit has more than 3 substantive changes, pick the 3 with highest impact (architectural changes, user-visible behavior changes, changes to load-bearing systems) -- do NOT merge unrelated changes into one point just to fit more in. Lower-impact changes you don't pick simply don't appear; that's the intended trade-off.","Why THIS approach was chosen over alternatives. ALWAYS use a bulleted list (- **Bold label**: explanation) when there are 2+ decisions -- each bullet is one decision with its rationale. When there is exactly one decision, write it as plain prose -- no bullet, no bold label. One decision is fine; one bullet is a formatting error. Prioritize insights from the conversation: alternatives considered, constraints, trade-offs. Explain in plain language using impact dimensions (speed, safety, complexity, UX, maintainability) -- no code identifiers. Write so a teammate unfamiliar with this codebase area can follow. Use 2-4 sentences per bullet -- enough to explain the trade-off, not pad. Maximum 3 bullets. If the commit has more than 3 substantive decisions, pick the 3 with highest impact (architectural choices, user-visible behavior changes, decisions that constrain future work) -- do NOT merge unrelated decisions into one bullet just to fit more in. Lower-impact decisions you don't pick simply don't appear; that's the intended trade-off.")}

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
${sd({topicRange:"2-3",majorQualifier:!0,preserveNote:!0,wordTarget:"150-300"})}
${rd}
  - The recap describes ONLY \`importance: major\` topics. \`importance: minor\` topics (routine formatting, config tweaks, version bumps, doc-only changes) MUST NOT be mentioned in the recap, not even briefly -- they are preserved as standalone topics for audit; the recap is the major-work narrative only.
  - Lead with what changed most visibly or impactfully; weave related points into flowing paragraphs. Do NOT write one sentence per topic -- that produces a fragmented list, not a narrative.
  - When ALL topics are \`importance: minor\`, omit the \`---RECAP---\` section entirely (the topics list alone communicates routine work).
  - Because the recap is emitted AFTER all topics, you can verify your major/minor selection by literal lookback: scan your own preceding output for each topic's \`---IMPORTANCE---\` line and include only the \`major\` ones.
  - Flowing prose only. NO bullet lists, NO headings, NO markdown inside the recap.
  - Do NOT restate the commit message verbatim. Add information a reader cannot get from the commit message alone.
  - If the commit is a single tiny change (e.g. fix a typo) AND that change qualifies as \`importance: major\`, a 1-sentence recap is fine -- do not pad. If the only topic is \`importance: minor\`, omit the recap.

${od}

## Begin response now

Output ONLY the delimited text starting with the \`===SUMMARY===\` sentinel. Do NOT preface it with markdown headers, markdown tables, code fences, or prose. If you have nothing substantive to emit (per rule 16), output \`===SUMMARY===\` alone on its own line and stop.`;var nJ=`You are Jolli Memory, an AI development process documentation tool. Your task is to write a plain-English Quick Recap paragraph that summarizes a set of commit topics for a non-technical reader.

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

${sd({topicRange:"2-3",majorQualifier:!1,preserveNote:!1,wordTarget:"150-300"})}
${rd}
  - Lead with what changed most visibly or impactfully; weave related points into flowing paragraphs. Do NOT write one sentence per topic -- that produces a fragmented list, not a narrative. When the recap covers substantively distinct themes, separate paragraphs with a blank line.
  - Flowing prose only. NO bullet lists, NO headings, NO markdown inside the recap.
  - Do NOT restate the commit message verbatim. Add information a reader cannot get from the commit message alone.
  - NEVER use the literal string \`---RECAP---\` inside your content. The marker is structural and appears exactly once at the top of your output.

${od}

## Begin response now

Output ONLY the \`---RECAP---\` marker followed by the recap text. No prose before or after.`;var IA=`You are Jolli Memory, an AI development process documentation tool. Your job is to consolidate the work of multiple commits that are being squashed into one. You produce TWO outputs in a single call:
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

${Zw}

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

${eb("What was implemented or fixed. This is a detail field, so technical precision is welcome. Name files, functions, and systems changed. ALWAYS use a bulleted list (- item) when there are 2+ distinct points. Use 2-4 sentences per point -- enough to specify what changed, not pad. A single sentence is fine for trivial single-point changes. Cap and selection are governed by rule 6's bullet-count guidance (squash-consolidate raises the per-topic cap to 5 vs the summarize prompt's 3, since consolidation aggregates work from multiple commits).","Why THIS approach was chosen over alternatives. ALWAYS use a bulleted list (- **Bold label**: explanation) when there are 2+ decisions -- each bullet is one decision with its rationale. Prioritize insights carried over from the source topics: alternatives considered, constraints, trade-offs. Explain in plain language using impact dimensions (speed, safety, complexity, UX, maintainability) -- no code identifiers. Use 2-4 sentences per bullet -- enough to explain the trade-off, not pad. Cap and selection are governed by rule 6's bullet-count guidance (max 5 per topic; pick the highest-impact decisions when consolidating yields more).")}

===TOPIC===
[Repeat the full ===TOPIC=== block above for each independent or merged topic the consolidation produces. Squashes spanning diverse work commonly emit 5-15 topics -- see rule 11 for sizing. The example shows ONE block for brevity; do not let that anchor your output to a single topic.]

---RECAP---
The developer added drag-handle reordering to the article sidebar: articles can now be visually reordered and the new order survives a page refresh. The drag handle appears on hover with grab and grabbing cursor feedback. Ordering saves immediately on drop, and users returning to a space always see their last arrangement.

A new confirmation step was added before destructive actions in the settings panel. Clicking "Delete Space" or "Archive" now presents a confirmation dialog. Accidental data loss is much less likely, and both actions share the same pattern across the panel.

## Rules

1. RECAP: Output a ---RECAP--- section AFTER the final ===TOPIC=== block when at least one consolidated topic carries \`importance: major\`. Omit the section entirely otherwise -- do NOT invent content, and do NOT write a recap when every consolidated topic is \`importance: minor\`. Content rules:
${sd({topicRange:"3-5",majorQualifier:!0,preserveNote:!0,wordTarget:"200-400"})}
${rd}
  - The consolidated recap describes ONLY \`importance: major\` topics. \`importance: minor\` topics (routine formatting, config tweaks, version bumps, doc-only changes) MUST NOT be mentioned in the recap, not even briefly -- they survive in the topics list; the recap is reserved for major-work narrative.
  - Lead with what changed most visibly or impactfully; weave related points into flowing paragraphs. Do NOT write one sentence per topic -- that produces a fragmented list, not a narrative.
  - When ALL post-merge topics are \`importance: minor\`, omit the \`---RECAP---\` section entirely (the topics list alone communicates routine work).
  - Because the recap is emitted AFTER all topics, you can verify your major/minor selection by literal lookback: scan your own preceding output for each topic's \`---IMPORTANCE---\` line and include only the \`major\` ones. Do NOT copy verbatim from any single source recap; the consolidated recap MUST be a fresh synthesis driven by the \`major\` topics you just emitted, not by which input recap looked most comprehensive.
  - Deduplicate iterations: describe the FINAL state only, not the iteration history. If an earlier recap says a button was added and a later recap says it was renamed with a confirmation dialog, the consolidated recap describes the button in its final form.
  - When source iteration represents a substantive technical evolution (algorithm change, library swap, scope pivot), do NOT describe the path here -- that belongs in DECISIONS per rule 6's evolution sub-rule. RECAP is for final-state user-facing prose; the X-over-Y trade-off path lives in the structured decisions field.
  - Describe net effects (subject to rule 4's evidence requirement).
  - Flowing prose only. NO bullet lists, NO headings, NO markdown.
  - Do NOT restate the squash commit message verbatim. Add information a reader cannot get from the commit message alone.

${od}

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

Output ONLY the delimited text starting with the \`===SUMMARY===\` sentinel. Do NOT preface it with markdown headers, markdown tables, code fences, or prose. If every source topic is trivial and there is nothing substantive to emit (per rule 15), output \`===SUMMARY===\` alone on its own line and stop.`,tb="IMPORTANT -- YOUR PREVIOUS RESPONSE FAILED FORMAT VALIDATION\n\nYour previous response did not start with the required `===SUMMARY===` sentinel followed by the `===TOPIC===` / `---FIELDNAME---` delimited plain-text format. It used markdown headers (e.g. `##`, `###`), tables, or prose instead. The parser could not extract any topics from it.\n\nThis is your previous (rejected) response, between the markers below. The markers themselves are bookkeeping for this retry message and are NOT part of the format you should emit:\n\nPREVIOUS_RESPONSE_BEGIN\n{{previousResponse}}\nPREVIOUS_RESPONSE_END\n\nNow produce the SAME summary AGAIN, this time using the required output format strictly:\n  - The first non-blank line of your response MUST be `===SUMMARY===`.\n  - Do NOT use markdown headers (`#`, `##`, `###`, `####`), markdown tables, code fences (```), or prose introductions.\n  - Block order is fixed: `---TICKETID---` (optional) -> `===TOPIC===` blocks -> `---RECAP---` (optional, AFTER all topics). Recap is the final block, never before topics.\n  - The recap, when emitted, MUST cover only `importance: major` topics; minor topics are omitted from the recap entirely.\n  - If your previous response contained useful content, carry it forward into the correct format -- do NOT discard the work, just re-format it under `===SUMMARY===`.\n  - The transcript or source-commit content shown below may itself be styled in markdown; that is INPUT DATA, not your output template.\n\nThe original task instructions follow. Re-read them and produce your response in the correct delimited format.\n\n---\n\n",rJ=tb+PA,oJ=tb+IA;y();Il();var cJ=m("Summarizer");Oo();var $J=m("LlmClient");var FJ=900*1e3;function nb(e){return e.aiProvider==="local-agent"?"local-agent":e.aiProvider==="jolli"?e.jolliApiKey?"jolli-proxy":null:e.aiProvider==="anthropic"?e.apiKey?"anthropic-config":process.env.ANTHROPIC_API_KEY?"anthropic-env":null:e.apiKey?"anthropic-config":process.env.ANTHROPIC_API_KEY?"anthropic-env":e.jolliApiKey?"jolli-proxy":null}lt();function DA(e){switch(nb(e)){case"local-agent":return"local-agent";case"jolli-proxy":return"jolli";case"anthropic-config":case"anthropic-env":return"anthropic";default:return"none"}}async function NA(e){let[t,n]=await Promise.all([Promise.resolve().then(()=>(Hc(),Ky)),Promise.resolve().then(()=>(Ve(),Kf))]),[r,o]=await Promise.all([t.isGitPipelineFullyInstalled(e),n.getSummaryCount(e)]);return{enabled:r,summaryCount:o}}async function LA(e){let t=DA(e.config),n=t!=="none";if(!await vn(e.cwd))return{inGitRepo:!1,repoEnabled:!1,captureConfigured:n,captureMethod:t,memoriesGenerated:!1,memoriesBucket:"0"};let o=e.status??await NA(e.cwd),s=o.summaryCount??0;return{inGitRepo:!0,repoEnabled:!!o.enabled,captureConfigured:n,captureMethod:t,memoriesGenerated:s>0,memoriesBucket:Ym(s)}}var MA="onboarding-progress.json",jA=1440*60*1e3;function $A(e){return[e.inGitRepo,e.repoEnabled,e.captureMethod,e.memoriesGenerated,e.memoriesBucket].join("|")}async function FA(e){try{let t=JSON.parse(await(0,Di.readFile)(e,"utf-8"));if(typeof t?.sig=="string"&&typeof t?.tsIso=="string")return t}catch{}}var Oi=new Map;async function ob(e){let t,n;try{if(!Vm()?.enabled||q()||gu(e.cwd))return;t=(0,rb.join)(J(e.cwd),MA);let r=t;n=(Oi.get(r)??Promise.resolve()).then(()=>HA(e,r)),Oi.set(r,n),await n}catch{}finally{t&&n&&Oi.get(t)===n&&Oi.delete(t)}}async function HA(e,t){try{let n=await LA(e),r=$A(n),o=await FA(t),s=Date.now(),i=!o||o.sig!==r,a=o?s-Date.parse(o.tsIso):Number.POSITIVE_INFINITY,l=!Number.isFinite(a)||a>=jA;if(!i&&!l)return;Lr("onboarding_progressed",{in_git_repo:n.inGitRepo,repo_enabled:n.repoEnabled,capture_configured:n.captureConfigured,capture_method:n.captureMethod,memories_generated:n.memoriesGenerated,memories_bucket:n.memoriesBucket});let c=J(e.cwd);await(0,Di.mkdir)(c,{recursive:!0}),await P(t,JSON.stringify({sig:r,tsIso:new Date(s).toISOString()}))}catch{}}ne();ne();var UA="https://auth.jolli.ai";function id(){let e=(process.env.JOLLI_URL?.trim()||UA).replace(/\/+$/,"");return Ri(e),e}ne();$n();var JA="/api/telemetry/events",BA=1e4,WA=100;async function sb(e){let t=e.fetchImpl??fetch,n=e.timeoutMs??BA,r=Math.max(1,e.maxBatch??WA),o=e.origin,s;if(e.jolliApiKey){let h=nr(e.jolliApiKey);h&&(o=h.u,s=e.jolliApiKey)}let i=await dl(e.cwd);if(i.length===0)return{sent:0,remaining:0};if(!o)return{sent:0,remaining:i.length};try{Ri(o)}catch{return{sent:0,remaining:i.length}}let a;try{a=new URL(JA,o).toString()}catch{return{sent:0,remaining:i.length}}let l=new Map;for(let h of i){let w=l.get(h.installId);w?w.push(h):l.set(h.installId,[h])}let c=e.deadlineMs===void 0?void 0:performance.now()+e.deadlineMs,u=!1,d=[];for(let h of l.values()){if(u)break;for(let w=0;w<h.length;w+=r){let T=h.slice(w,w+r),b=n;if(c!==void 0){let k=c-performance.now();if(k<=0){u=!0;break}b=Math.min(n,k)}if(!await qA(a,T,s,t,b))break;d.push(...T)}}if(d.length===0)return{sent:0,remaining:i.length};let p=await dl(e.cwd),f=GA(p,d);return await Jm(e.cwd,f),{sent:d.length,remaining:f.length}}function GA(e,t){let n=new Map;for(let o of t){let s=JSON.stringify(o);n.set(s,(n.get(s)??0)+1)}let r=[];for(let o of e){let s=JSON.stringify(o),i=n.get(s)??0;i>0?n.set(s,i-1):r.push(o)}return r}async function qA(e,t,n,r,o){let s={"Content-Type":"application/json","x-jolli-client":Ge};n&&(s.Authorization=`Bearer ${n}`);let i=new AbortController,a=setTimeout(()=>i.abort(),o);try{return(await r(e,{method:"POST",headers:s,body:JSON.stringify({events:t}),signal:i.signal})).ok}catch{return!1}finally{clearTimeout(a)}}function ib(e,t){if(e.jolliApiKey){let n=nr(e.jolliApiKey);if(n)return n.u}if(e.jolliUrl)return e.jolliUrl;try{return t()}catch{return}}async function ab(e){let t=e.deps?.loadConfig??te,n=e.deps?.getOrCreateInstallId??fp,r=e.deps?.getJolliUrl??id;try{let o=await t(),{installId:s,created:i}=await n(),a=ib(o,r);Km({cwd:e.cwd,installId:s,sessionId:e.sessionId,origin:a,config:o,platformDisabled:e.platformDisabled,env:e.env}),i&&Lr("app_installed")}catch{}}var ad=2e3;async function lb(e,t){let n=t?.loadConfig??te,r=t?.getJolliUrl??id;try{let o=await n();if(!Wm({config:o,env:t?.env,platformDisabled:t?.platformDisabled})){await Bm(e);return}let s=ib(o,r);await sb({cwd:e,origin:s,jolliApiKey:o.jolliApiKey,fetchImpl:t?.fetchImpl,timeoutMs:t?.timeoutMs,deadlineMs:t?.deadlineMs})}catch{}}function Ni(e,t){return{done:(async()=>{try{let r=await te(),o=async()=>r;await ab({cwd:e,sessionId:t,deps:{loadConfig:o}}),await ob({cwd:e,config:r}),await lb(e,{loadConfig:o,timeoutMs:ad,deadlineMs:ad})}catch{}})()}}var de=require("node:fs"),$e=require("node:path"),Cb=require("node:url");$n();Lo();ue();function cb(e){return e.aiProvider==="local-agent"?!0:e.aiProvider==="jolli"?!!e.jolliApiKey:e.aiProvider==="anthropic"?!!(e.apiKey||process.env.ANTHROPIC_API_KEY):!!(e.apiKey||process.env.ANTHROPIC_API_KEY||e.jolliApiKey)}lt();ne();Ns();Cl();Ss();Ve();Mt();y();Se();bs();function KA(e){return[`1) Re-authenticate ${en(e)}:  ${Sf(e)}`,"2) Or switch the provider:   jolli configure --set aiProvider=anthropic --set apiKey=sk-ant-\u2026","                             (or --set aiProvider=jolli to use Jolli)"]}function VA(e,t){let n=Ef(e);return n===null?[]:[`${t}${n}`]}function db(e){return[`[Jolli Memory] Memory generation failed for a recent commit: ${en(e)} authentication expired or is unavailable.`,...VA(e,""),"\u2192 Fix with either:",...KA(e).map(t=>`    ${t}`),"This message clears automatically once memory generation succeeds again."].join(`
`)}var je=m("SessionStartHook"),dP=new Set(["main","master","develop","development","staging","production"]),ji=500,uP=250;function pP(e=ji+uP){let t=setTimeout(()=>process.exit(0),e);return t.unref(),t}var Ab="login-reminder-dismissed";function mP(e){let t=rl(e,"init");return t===void 0?null:["[Jolli Memory] Memory generation is not configured for this repository.",`\u2192 ${`Run ${t} to finish setup.`}`,`(To stop this reminder, create an empty file at .jolli/jollimemory/${Ab}.)`].join(`
`)}function fP(e,t,n){return t||n?null:mP(e)}async function Pb(e,t){let n=ls(e);if(n===void 0||t.aiProvider!==void 0)return!1;try{let r=await qo(o=>o.aiProvider===void 0?{update:{aiProvider:"local-agent",...o.localAgentTool===void 0?{localAgentTool:n}:{}},result:o.localAgentTool??n}:{update:null,result:void 0});return r===void 0?(je.info("Skipped seeding the %s default \u2014 another writer set aiProvider first",e),!1):(je.info("Seeded default aiProvider=local-agent tool=%s for the %s surface",r,e),!0)}catch(r){return je.info("Failed to seed default local-agent provider: %s",r.message),!1}}async function hP(e,t=al()){let n=await te(),r=cb(n),o=(0,$e.join)(e,".jolli","jollimemory",Ab),s=(0,de.existsSync)(o);if(r&&s)try{(0,de.rmSync)(o)}catch{}return fP(t,r,s)}async function Ib(e,t){return(await fh(t)).readFile(`summaries/${e}.json`)}async function gP(e,t){try{let n=await Ib(e,t);return n?wf(JSON.parse(n)):!1}catch(n){return je.info("Failed to check auth-failure state for %s: %s",e.substring(0,8),n.message),!1}}async function yP(e,t=al()){let n=ls(t);if(n===void 0)return null;let r=Nb(e);if(!r)return null;let o=await Xr(e);if(!o)return null;let s=o.entries.filter(l=>l.branch===r&&(l.parentCommitHash===null||l.parentCommitHash===void 0));if(s.length===0)return null;let i=[...s].sort((l,c)=>new Date(B(c)).getTime()-new Date(B(l)).getTime())[0];if(!await gP(i.commitHash,e))return null;let a=await te();return db(a.localAgentTool??n)}async function wP(){if(Io()){je.info("SessionStart hook skipped \u2014 running inside a jollimemory-spawned local agent");return}try{let e=await ki(),{cwd:t}=JSON.parse(e),n=Vd(t??process.cwd());if(ur(n),je.info("SessionStartHook invoked (cwd=%s)",n),await Pt(n)){je.info("SessionStart hook skipped \u2014 repository manually disabled");return}let r=await vd(n,"shared",{includeBriefing:!0,includePluginReminders:!1});r?process.stdout.write(r):je.info("No briefing or reminder generated (skipped or timed out)");let{triggerEnsureGlobalDaemon:o}=await Promise.resolve().then(()=>(kd(),Td));o()}catch(e){je.info("SessionStartHook failed: %s",e.message)}}async function vd(e,t,n={}){let r=n.includeBriefing!==!1,o=n.includePluginReminders!==!1,[s,i,a]=await Promise.all([r?Promise.race([bP(e,t),Rd(ji)]):Promise.resolve(null),o?Promise.race([yP(e,t),Rd(ji)]):Promise.resolve(null),o?Promise.race([hP(e,t),Rd(ji)]):Promise.resolve(null)]),l=[i,a,s].filter(c=>!!c);return l.length===0?null:(je.info("SessionStart output (%d sections)",l.length),l.join(`

`))}async function bP(e,t){let n=$i(e),r=Nb(e,n);if(!r||dP.has(r))return null;let o=_P(e,r,t,n);if(o)return o;let s=await Xr(e);if(!s)return null;let i=s.entries.filter(w=>w.branch===r&&(w.parentCommitHash===null||w.parentCommitHash===void 0));if(i.length===0)return null;let a=[...i].sort((w,T)=>new Date(B(T)).getTime()-new Date(B(w)).getTime()),l=a[0],c=a[a.length-1];if(a.length===1&&CP(B(l)))return null;let u=await SP(l.commitHash,e),d=EP(e,r),p=TP(a),f=kP(r,a,l,c,u,d,p,t),h=Db(e,n);return xP(e,r,h??l.commitHash,f,t),f}async function SP(e,t){try{let n=await Ib(e,t);if(!n)return{lastTopicTitle:null,keyDecisions:[]};let r=JSON.parse(n),o=Jn(r),s=o.length>0?o[o.length-1].title:null,i=[];for(let a of o)a.decisions&&a.decisions.trim().length>0&&i.push(a.decisions);return{lastTopicTitle:s,keyDecisions:i}}catch(n){return je.info("Failed to load last summary: %s",n.message),{lastTopicTitle:null,keyDecisions:[]}}}function EP(e,t){try{let n=(0,$e.join)(e,".jolli","jollimemory","plans.json");if(!(0,de.existsSync)(n))return[];let r=JSON.parse((0,de.readFileSync)(n,"utf-8")),o=hp(r).registry,s=[];for(let i of Object.values(o.plans))!i.commitHash&&i.title&&s.push(i.title);return s}catch{return[]}}function TP(e){let t=0,n=0,r=0,o=!1;for(let s of e)s.diffStats&&(t+=s.diffStats.filesChanged,n+=s.diffStats.insertions,r+=s.diffStats.deletions,o=!0);return o?{filesChanged:t,insertions:n,deletions:r}:null}function kP(e,t,n,r,o,s,i,a){let l=t.length,c=xb(B(r)),u=xb(B(n)),d=AP(B(n),new Date().toISOString()),p=[];p.push(`[Jolli Memory \u2014 ${e}]`);let f=`${l} commits (${c} ~ ${u})`;i&&(f+=` | ${i.filesChanged} files, +${i.insertions} -${i.deletions}`),p.push(f);let h=o.lastTopicTitle??n.commitMessage;if(p.push(`Last: ${h} (${u})`),o.keyDecisions.length>0){let T=vP(o.keyDecisions);p.push(`Decisions: ${T}`)}s.length>0&&p.push(`Plans: ${s.join("; ")}`);let w=RP(d,a);return w&&p.push(w),p.join(`
`)}function RP(e,t){if(e<=0)return null;let n=rl(t,"recall")??"`jolli recall`";return e>3?`Warning: ${e} days since last commit. Run ${n} for full context.`:`Tip: run ${n} for full context`}function vP(e){let n=[],r=0;for(let o of e){let s=o.replace(/[.;]\s*$/,"").trim();if(s.length>200&&(s=`${s.slice(0,199)}\u2026`),r+s.length>200&&n.length>0)break;n.push(s),r+=s.length+2}return n.join("; ")}function Ob(e){return(0,$e.join)(e,".jolli","jollimemory","briefing-cache.json")}function _P(e,t,n,r=$i(e)){let o=Ob(e);if(!(0,de.existsSync)(o))return null;try{let s=JSON.parse((0,de.readFileSync)(o,"utf-8"));if(s.branch!==t||s.clientKind!==n)return null;let i=Db(e,r);return!i||s.lastCommitHash!==i?null:s.briefingText}catch{return null}}function xP(e,t,n,r,o){let s=Ob(e),i={branch:t,lastCommitHash:n,briefingText:r,clientKind:o,generatedAt:new Date().toISOString()};try{let a=(0,$e.dirname)(s);(0,de.existsSync)(a)||(0,de.mkdirSync)(a,{recursive:!0});let l=`${s}.${process.pid}.tmp`;(0,de.writeFileSync)(l,JSON.stringify(i,null,"	"),"utf-8"),(0,de.renameSync)(l,s)}catch{}}function $i(e){return Ct(e)}function Db(e,t=$i(e)){let n=t?Wd(t):null;if(n)return n;try{return ye("git",["rev-parse","HEAD"],{encoding:"utf-8",cwd:e}).trim()||null}catch{return null}}function Nb(e,t=$i(e)){let n=t?Bd(t):null;if(n)return n;if(t)return null;try{return ye("git",["branch","--show-current"],{encoding:"utf-8",cwd:e}).trim()||null}catch{return null}}function Rd(e){return new Promise(t=>{setTimeout(()=>t(null),e).unref()})}function CP(e){let t=new Date(e),n=new Date;return t.getFullYear()===n.getFullYear()&&t.getMonth()===n.getMonth()&&t.getDate()===n.getDate()}function AP(e,t){let n=new Date(e).getTime(),r=new Date(t).getTime();return Math.floor(Math.abs(r-n)/(1e3*60*60*24))}function xb(e){return e?e.split("T")[0]:"unknown"}function PP(){let e=process.argv[1];if(process.env.VITEST||!e||(0,$e.resolve)(e)!==(0,$e.resolve)((0,Cb.fileURLToPath)(__jmImportMetaUrl)))return!1;let t=(0,$e.basename)(e).toLowerCase();return t==="sessionstarthook.js"||t==="sessionstarthook.ts"}PP()&&(pP(),wP());var _o=m("CodexPluginBootstrapHook"),_d="codex-plugin",Lb={timeoutMs:200,pollMs:25};function jb(e){return e?{hookSpecificOutput:{hookEventName:"SessionStart",additionalContext:e}}:null}async function $b(e){if(!await vn(e))return null;let t=await G(["rev-parse","--show-toplevel"],e);if(t.exitCode!==0||!t.stdout.trim())return null;let n=t.stdout.trim();ur(n);let r=!1;if(!(await ra(n,async()=>{r=await Pt(n),r&&await Dw(n,{preserveMenu:!0,repoLockHeld:!0})},Lb)).acquired)return _o.info("Codex plugin bootstrap deferred \u2014 repo hook lifecycle lock is busy"),null;if(r)return null;let s=await Ow(n,{repoHooksOnly:!0,sourceTag:_d,respectManualDisable:!0,automatic:!0});if(!s.success)return _o.warn("Codex plugin repo-hook reconciliation failed: %s",s.message),await Ni(n).done,null;let i,a=null,l=!1;try{l=!(await ra(n,async()=>{if(await Pt(n))return;let u=await te();u.codexEnabled!==!1&&(await Pb(_d,u),i=Ni(n),a=await vd(n,_d,{includeBriefing:!0,includePluginReminders:!0}))},Lb)).acquired}finally{i??=Ni(n),await i.done}return l&&_o.info("Codex plugin context deferred \u2014 repo hook lifecycle lock is busy"),jb(a)}async function Fb(){if(Io()){_o.info("Codex plugin bootstrap skipped \u2014 running inside a jollimemory-spawned local agent");return}try{let e=await ki(),t=e.trim()?JSON.parse(e):{},n=await $b(t.cwd??process.cwd());n&&process.stdout.write(JSON.stringify(n));let{triggerEnsureGlobalDaemon:r}=await Promise.resolve().then(()=>(kd(),Td));r()}catch(e){_o.info("Codex plugin bootstrap failed: %s",e.message)}}function IP(){let e=process.argv[1];if(process.env.VITEST||!e||(0,xo.resolve)(e)!==(0,xo.resolve)((0,Mb.fileURLToPath)(__jmImportMetaUrl)))return!1;let t=(0,xo.basename)(e).toLowerCase();return t==="codexpluginbootstraphook.js"||t==="codexpluginbootstraphook.ts"}IP()&&Fb();0&&(module.exports={buildCodexBootstrapOutput,main,runCodexPluginBootstrap});
