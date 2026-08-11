#!/usr/bin/env node
const __jmImportMetaUrl = require("node:url").pathToFileURL(__filename).href;
"use strict";var Kf=Object.create;var Qr=Object.defineProperty;var Vf=Object.getOwnPropertyDescriptor;var Xf=Object.getOwnPropertyNames;var Yf=Object.getPrototypeOf,zf=Object.prototype.hasOwnProperty;var b=(t,e,r)=>()=>{if(r)throw r[0];try{return t&&(e=t(t=0)),e}catch(n){throw r=[n],n}};var k=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(r){throw e=0,r}},fa=(t,e)=>{for(var r in e)Qr(t,r,{get:e[r],enumerable:!0})},ha=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of Xf(e))!zf.call(t,o)&&o!==r&&Qr(t,o,{get:()=>e[o],enumerable:!(n=Vf(e,o))||n.enumerable});return t};var Vt=(t,e,r)=>(r=t!=null?Kf(Yf(t)):{},ha(e||!t||!t.__esModule?Qr(r,"default",{value:t,enumerable:!0}):r,t)),Qf=t=>ha(Qr({},"__esModule",{value:!0}),t);function Ao(){return th.getStore()?.traceId}var ya,eT,th,Io=b(()=>{"use strict";ya=require("node:async_hooks"),eT="0".repeat(32),th=new ya.AsyncLocalStorage});function x(t){return t instanceof Error?t.message:String(t)}function Et(t){return t instanceof Error&&t.code==="ENOENT"}function en(t){Ea=t}function he(){return ba}function lh(t,e){let r=ih[e]??sh;return wa[t]>=wa[r]}function ch(t,e,r,n,o){let s=new Date().toISOString(),i=t.toUpperCase().padEnd(5),a=r,l=0;a=a.replace(/%[sdj]/g,d=>{if(l>=n.length)return d;let u=n[l++];return d==="%d"?String(Number(u)):d==="%j"?JSON.stringify(u):String(u)});let c=o?` [trace=${o}]`:"";return`[${s}] ${i} [${e}]${c} ${a}`}function J(t){let e=t??Ea??process.cwd();return(0,St.join)(e,rh,nh)}function Yt(t){return String(t).padStart(2,"0")}async function mh(t,e){let r=new Date,n=`${r.getUTCFullYear()}-${Yt(r.getUTCMonth()+1)}-${Yt(r.getUTCDate())}_${Yt(r.getUTCHours())}-${Yt(r.getUTCMinutes())}-${Yt(r.getUTCSeconds())}`;try{let o=(0,St.join)(t,`debug_${n}.log`);for(let s=1;await fh(o);s++)o=(0,St.join)(t,`debug_${n}_${s}.log`);await(0,ie.rename)(e,o)}catch{return}try{let o=(await(0,ie.readdir)(t)).filter(s=>ph.test(s)).sort();for(let s=0;s<o.length-dh;s++)await(0,ie.unlink)((0,St.join)(t,o[s])).catch(()=>{})}catch{}}async function fh(t){try{return await(0,ie.stat)(t),!0}catch{return!1}}function hh(t){process.env.VITEST||process.env.JOLLI_DISABLE_LOG_FILE||ba||(Sa=Sa.then(async()=>{try{let e=J(),r=(0,St.join)(e,oh);await(0,ie.stat)(e);try{(await(0,ie.stat)(r)).size>uh&&await mh(e,r)}catch{}await(0,ie.appendFile)(r,`${t}
`,"utf-8")}catch{}}))}function p(t){function e(r,n,o){let s=ch(r,t,n,o,Ao());ah&&(r==="info"||r==="debug")||(r==="warn"?console.warn(s):console.error(s)),lh(r,t)&&hh(s)}return{debug(r,...n){e("debug",r,n)},info(r,...n){e("info",r,n)},warn(r,...n){e("warn",r,n)},error(r,...n){e("error",r,n)}}}var ie,St,rh,nh,oh,fe,Ea,ba,wa,sh,ih,ah,Sa,uh,dh,ph,h=b(()=>{"use strict";ie=require("node:fs/promises"),St=require("node:path");Io();rh=".jolli",nh="jollimemory",oh="debug.log";fe="jollimemory/summaries/v3";ba=!1;wa={debug:0,info:1,warn:2,error:3},sh="info",ih={},ah=!0;Sa=Promise.resolve(),uh=2*1024*1024,dh=10,ph=/^debug_.*\.log$/});function bt(t,e,r){return(0,ka.promisify)(Ne.execFile)(t,e,{...zt,...r??{}})}function Ee(t,e,r){return(0,Ne.execFileSync)(t,e,{...zt,...r??{}})}function Ta(t,e,r){return(0,Ne.spawnSync)(t,e,{...zt,...r??{}})}var Ne,ka,zt,Qt,be=b(()=>{"use strict";Ne=require("node:child_process"),ka=require("node:util"),zt={windowsHide:!0};Qt=((t,e,r)=>Array.isArray(e)?(0,Ne.spawn)(t,e,{...zt,...r??{}}):(0,Ne.spawn)(t,{...zt,...e??{}}))});function xa(t){let e=Ra.get(t);if(e!==void 0)return e;let r=t;try{let n=Ee("git",["rev-parse","--show-toplevel"],{cwd:t,encoding:"utf-8",stdio:["ignore","pipe","pipe"]}).trim();n&&(r=n)}catch{}return Ra.set(t,r),r}async function M(t,e){F.debug("git %s%s",e?`[cwd=${e}] `:"",t.join(" "));try{let{stdout:r,stderr:n}=await bt("git",t,{maxBuffer:yh,env:{...process.env,LC_ALL:"C"},...e!==void 0&&{cwd:e}});return{stdout:r.trimEnd(),stderr:n.trim(),exitCode:0}}catch(r){let n=r,o=typeof n.code=="number"?n.code:n.code==="ENOENT"?127:1,s={stdout:(n.stdout??"").trimEnd(),stderr:(n.stderr??n.message??"").trim(),exitCode:o};return F.debug("git command failed (exit: %d, stderr: %s)",o,s.stderr.substring(0,200)),s}}async function Do(t,e){return(await M(["rev-parse","--verify",`refs/heads/${t}`],e)).exitCode===0}async function No(t,e){if(await Do(t,e))return;F.info("Creating orphan branch '%s' using plumbing commands",t);let r=JSON.stringify({version:1,entries:[]},null,"	"),n=await kh(r,e);F.debug("Created blob: %s",n);let o=`100644 blob ${n}	index.json
`,s=await _h(o,e);F.debug("Created tree: %s",s);let i=await M(["commit-tree",s,"-m","Initialize Jolli Memory summaries"],e);if(i.exitCode!==0)throw new Error(`Failed to create commit: ${i.stderr}`);let a=i.stdout.trim();F.debug("Created commit: %s",a);let l=await M(["update-ref",`refs/heads/${t}`,a],e);if(l.exitCode!==0)throw new Error(`Failed to update ref: ${l.stderr}`);F.info("Orphan branch '%s' created successfully",t)}function Eh(t){let e=t.toLowerCase();return Sh.some(r=>e.includes(r))}async function Oo(t,e,r){F.debug("Reading file from branch: %s:%s",t,e);let n=await M(["show",`${t}:${e}`],r);return n.exitCode!==0?(Eh(n.stderr)?F.debug("File not found: %s:%s",t,e):F.warn("Read failed for %s:%s (git exit %d): %s",t,e,n.exitCode,n.stderr||"(no stderr)"),null):n.stdout}async function Lo(t,e,r){let n=new Map;if(e.length===0)return n;let o=["cat-file","--batch"];return F.debug("git (cat-file --batch stream) %s%s for %d paths",r?`[cwd=${r}] `:"",o.join(" "),e.length),new Promise((s,i)=>{let a=Qt("git",o,{stdio:["pipe","pipe","pipe"],...r!==void 0&&{cwd:r}}),l="",c=Buffer.alloc(0),d=!0,u=0,m=[],f=!1,w=0,C=!1,_=S=>{C||(C=!0,S?i(S):s(n))};a.stderr.on("data",S=>{l+=S.toString()}),a.stdout.on("data",S=>{for(c=Buffer.concat([c,S]);!C;){if(d){let I=c.indexOf(10);if(I<0)return;let N=c.subarray(0,I).toString("utf8");if(c=c.subarray(I+1),w>=e.length){_(new Error(`git cat-file --batch returned extra response: ${N}`));return}let H=e[w];if(w++,N.endsWith(" missing")){n.set(H,null);continue}let Se=N.substring(N.lastIndexOf(" ")+1),K=Number.parseInt(Se,10);if(!Number.isFinite(K)||K<0){_(new Error(`Unexpected cat-file --batch header for ${H}: ${N}`));return}u=K,m=[],d=!1,f=!0}if(u>0){if(c.length===0)return;let I=Math.min(u,c.length);if(m.push(c.subarray(0,I)),c=c.subarray(I),u-=I,u>0)return}if(f){if(c.length<1)return;c=c.subarray(1),f=!1;let I=e[w-1];n.set(I,Buffer.concat(m).toString("utf8")),m=[],d=!0}}}),a.on("close",S=>{if(S!==0){_(new Error(`git cat-file --batch failed (exit ${S}): ${l.trim()}`));return}if(w<e.length){_(new Error(`git cat-file --batch returned ${w} of ${e.length} expected responses; stderr=${l.trim()}`));return}_(null)}),a.on("error",S=>{_(S)}),a.stdin.on("error",S=>{_(S)});for(let S of e)a.stdin.write(`${t}:${S}
`);a.stdin.end()})}async function Pa(t,e,r,n){await No(t,n);let o=await M(["rev-parse",`refs/heads/${t}`],n);if(o.exitCode!==0)throw new Error(`Failed to get branch tip: ${o.stderr}`);let s=o.stdout.trim();await Th(t,s,r,e,n);let i=e.filter(l=>!l.delete).length,a=e.filter(l=>l.delete).length;F.info("Updated branch '%s': %d written, %d deleted (via fast-import)",t,i,a)}async function Mo(t,e,r){F.debug("Listing files in branch %s under prefix '%s'",t,e);let n=await M(["ls-tree","-z","-r","--name-only",t,e],r);if(n.exitCode!==0)return F.debug("Failed to list files (branch may not exist): %s",n.stderr),[];let o=n.stdout.split(wh).filter(s=>s.length>0);return F.debug("Found %d files",o.length),o}async function bh(t){let e=await M(["rev-parse","--git-common-dir"],t);if(e.exitCode!==0)throw new Error(`Failed to get git common dir: ${e.stderr}`);let r=e.stdout.trim();return(0,ke.resolve)(t,r)}async function $o(t){let e=await bh(t);return(0,ke.dirname)(e)}async function rn(t){return(await M(["rev-parse","--git-dir"],t)).exitCode===0}async function kt(t){let e=await M(["worktree","list","--porcelain"],t);if(e.exitCode!==0)throw new Error(`Failed to list worktrees: ${e.stderr}`);return e.stdout.split(`
`).filter(n=>n.startsWith("worktree ")).map(n=>n.slice(9).trim())}async function Zt(t){let e=(0,ke.join)(t,".git");if((await(0,tn.stat)(e)).isDirectory())return(0,ke.join)(e,"hooks");let n=await(0,tn.readFile)(e,"utf-8"),o=n.trim().match(/^gitdir:\s*(.+)$/);if(!o)throw new Error(`Unexpected .git file content: ${n.trim()}`);let s=o[1].trim(),i=(0,ke.resolve)(t,s),a=i.replace(/\\/g,"/").lastIndexOf("/worktrees/");if(a>=0){let l=i.substring(0,a);return(0,ke.join)(l,"hooks")}return(0,ke.join)(i,"hooks")}function Aa(t,e,r){return F.debug("git (stdin) %s%s",r?`[cwd=${r}] `:"",t.join(" ")),new Promise((n,o)=>{let s=Qt("git",t,{stdio:["pipe","pipe","pipe"],...r!==void 0&&{cwd:r}}),i="",a="";s.stdout.on("data",l=>{i+=l.toString()}),s.stderr.on("data",l=>{a+=l.toString()}),s.on("close",l=>{l!==0?o(new Error(`git ${t[0]} failed (exit ${l}): ${a.trim()}`)):n(i.trim())}),s.on("error",l=>{o(l)}),s.stdin.write(e),s.stdin.end()})}async function kh(t,e){return Aa(["hash-object","-w","--stdin"],t,e)}async function _a(t,e){let r=await M(["var",t],e);if(r.exitCode!==0)throw new Error(`Failed to read ${t}: ${r.stderr}`);return r.stdout.trim()}async function Th(t,e,r,n,o){let s=await _a("GIT_AUTHOR_IDENT",o),i=await _a("GIT_COMMITTER_IDENT",o),a=["fast-import","--quiet","--done"];F.debug("git (fast-import stream) %s%s",o?`[cwd=${o}] `:"",a.join(" "));let l=n.filter(d=>!d.delete),c=n.filter(d=>d.delete);return new Promise((d,u)=>{let m=Qt("git",a,{stdio:["pipe","pipe","pipe"],...o!==void 0&&{cwd:o}}),f="";m.stderr.on("data",S=>{f+=S.toString()}),m.on("close",S=>{S!==0?u(new Error(`git fast-import failed (exit ${S}): ${f.trim()}`)):d()}),m.on("error",S=>{u(S)});let w=m.stdin;w.on("error",S=>{u(S)});let C=[];l.forEach((S,I)=>{let N=I+1,H=Buffer.from(S.content,"utf8");C.push(`blob
mark :${N}
data ${H.length}
`,H,`
`)});let _=Buffer.from(r,"utf8");C.push(`commit refs/heads/${t}
`,`author ${s}
`,`committer ${i}
`,`data ${_.length}
`,_,`
`,`from ${e}
`),l.forEach((S,I)=>{C.push(`M 100644 :${I+1} ${va(S.path)}
`)});for(let S of c)C.push(`D ${va(S.path)}
`);C.push(`done
`),Rh(w,C).then(()=>{w.end()},S=>{u(S)})})}async function Rh(t,e){for(let r of e)t.write(r)||await(0,Ca.once)(t,"drain")}function va(t){return/["\\\n\r]/.test(t)?`"${t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r")}"`:t}async function _h(t,e){return Aa(["mktree"],t,e)}var Ca,tn,ke,yh,wh,F,Ra,Sh,te=b(()=>{"use strict";Ca=require("node:events"),tn=require("node:fs/promises"),ke=require("node:path");h();be();yh=10*1024*1024,wh="\0",F=p("GitOps"),Ra=new Map;Sh=["does not exist in","does not exist (neither on disk nor in the index)","invalid object name","exists on disk, but not in","unknown revision or path not in the working tree"]});function vh(t){return new Promise(e=>setTimeout(e,t))}function Da(t){let e=Number(t);if(!Number.isInteger(e)||e<=0)return!1;if(e===process.pid)return!0;try{return process.kill(e,0),!0}catch(r){return r.code!=="ESRCH"}}async function jo(t){try{let e=await(0,Te.stat)(t),r=Date.now()-e.mtimeMs,n=await Na(t),o=n!==null&&!Da(n);if(!o&&r<Ia)return!1;o?er.warn("Removing orphaned lock %s (PID %s no longer running)",t,n):er.warn("Removing stale lock file %s (age: %dms)",t,r),await(0,Te.rm)(t,{force:!0})}catch(e){if(e.code!=="ENOENT")return er.error("Failed to check lock file %s: %s",t,e.message),!1}try{return await(0,Te.writeFile)(t,String(process.pid),{flag:"wx"}),!0}catch{return!1}}async function Na(t){try{let r=(await(0,Te.readFile)(t,"utf-8")).trim();return r.length>0?r:null}catch{return null}}async function Tt(t,e){let r=await Na(t);if(r!==null&&r!==String(process.pid)){er.warn("Skipping release of %s: held by pid %s, not us (pid %s) \u2014 stale-reclaim race",e,r,process.pid);return}try{await(0,Te.rm)(t,{force:!0})}catch(n){er.error("Failed to release %s: %s",e,n.message)}}async function Rt(t,e){if(e.timeoutMs<=0)return jo(t);let r=Date.now()+e.timeoutMs;for(;;){if(await jo(t))return!0;if(Date.now()>=r)return!1;await vh(e.pollMs)}}var Te,er,Ia,Ho=b(()=>{"use strict";Te=require("node:fs/promises");h();er=p("LockPrimitives"),Ia=300*1e3});function Ma(t){return(0,La.resolve)(t??process.cwd())}function nn(t){return Fo.getStore()?.has(Ma(t))===!0}function on(t,e){let r=new Set(Fo.getStore()??[]);return r.add(Ma(t)),Fo.run(r,e)}var Oa,La,Fo,sn=b(()=>{"use strict";Oa=require("node:async_hooks"),La=require("node:path"),Fo=new Oa.AsyncLocalStorage});function Ch(t){return bt("git",["rev-parse","--git-common-dir"],{cwd:t})}async function Ja(t){let e=t??process.cwd(),r=Fa.get(e);if(r!==void 0)return r;let n;try{let{stdout:o}=await Ch(e),s=o.trim(),i=(0,re.isAbsolute)(s)?s:(0,re.resolve)(e,s);n=(0,re.join)(i,"jollimemory")}catch{Ba.debug("resolveSharedLockDir: git rev-parse failed for cwd=%s \u2014 falling back to per-worktree dir",e),n=J(e)}return Fa.set(e,n),n}async function Uo(t){let e=await Ja(t);return await(0,tr.mkdir)(e,{recursive:!0}),e}async function Bo(t,e={}){let r=e.timeoutMs??Ph,n=e.pollMs??Ah,o=await Uo(t);return Rt((0,re.join)(o,Wa),{timeoutMs:r,pollMs:n})}async function Wo(t){let e=await Ja(t);await Tt((0,re.join)(e,Wa),"orphan-write.lock")}async function Lh(t,e,r,n){let o=n.timeoutMs??Dh,s=n.pollMs??an;await(0,tr.mkdir)(t,{recursive:!0});let i=(0,re.join)(t,e),a=await Rt(i,{timeoutMs:o,pollMs:s});a||Ba.warn("Could not acquire %s within %d ms \u2014 proceeding best-effort",e,o);try{return await r()}finally{a&&await Tt(i,e)}}async function Jo(t,e,r={}){return Lh(t,xh,e,r)}async function rr(t,e={}){let r=e.timeoutMs??Nh,n=e.pollMs??an,o=await Uo(t),s=(0,re.join)(o,ja);return await Rt(s,{timeoutMs:r,pollMs:n})?{release:()=>Tt(s,ja)}:null}async function qo(t,e,r={}){let n=await rr(t,r);if(!n)return{acquired:!1};try{return{acquired:!0,value:await e()}}finally{await n.release()}}async function Go(t,e,r={}){let n=r.timeoutMs??Ih,o=r.pollMs??an,s=await Uo(t),i=(0,re.join)(s,$a);if(!await Rt(i,{timeoutMs:n,pollMs:o}))return{acquired:!1};try{return{acquired:!0,value:await e()}}finally{await Tt(i,$a)}}async function Ko(t,e={}){let r=e.timeoutMs??Oh,n=e.pollMs??an,o=e.globalDir??(0,re.join)((0,Ua.homedir)(),".jolli","jollimemory");await(0,tr.mkdir)(o,{recursive:!0});let s=(0,re.join)(o,Ha);if(!await Rt(s,{timeoutMs:r,pollMs:n}))return{acquired:!1};try{return{acquired:!0,value:await t()}}finally{await Tt(s,Ha)}}var tr,Ua,re,Ba,Wa,$a,xh,ja,Ha,Ph,Ah,Ih,an,Dh,Nh,Oh,Fa,Re=b(()=>{"use strict";tr=require("node:fs/promises"),Ua=require("node:os"),re=require("node:path");h();be();Ho();sn();Ba=p("Locks");Wa="orphan-write.lock",$a="profile.lock",xh="config.lock",ja="repo-hooks.lock",Ha="runtime-registry.lock",Ph=1e3,Ah=50,Ih=5e3,an=25,Dh=5e3,Nh=5e3,Oh=5e3,Fa=new Map});async function Vo(t,e,r={}){await(0,Ke.mkdir)((0,qa.dirname)(t),{recursive:!0});let n=`${t}.${process.pid}.tmp`;await(0,Ke.writeFile)(n,e,r.mode!==void 0?{encoding:"utf-8",mode:r.mode}:"utf-8");try{await(0,Ke.rename)(n,t)}catch(o){throw await(0,Ke.unlink)(n).catch(()=>{}),o}}var Ke,qa,Xo=b(()=>{"use strict";Ke=require("node:fs/promises"),qa=require("node:path")});function Va(t){return{...t,manuallyDisabled:t.userDisabled===!0||t.cutoverFence!==void 0}}async function Yo(t){let e=await M(["rev-parse","--git-common-dir"],t),r=e.exitCode===0?e.stdout.trim():"";if(!r)return{profilePath:(0,_e.join)(J(t),Ga),legacyMarkerPath:null};let n=(0,_e.isAbsolute)(r)?r:(0,_e.join)(t,r),o=(0,_e.dirname)(n);return{profilePath:(0,_e.join)(J(o),Ga),legacyMarkerPath:(0,_e.join)(n,Mh,$h)}}async function ln(t){try{let e=await(0,nr.readFile)(t,"utf-8"),r=JSON.parse(e);return r&&typeof r=="object"&&!Array.isArray(r)?r:{}}catch{return{}}}async function Hh(t){try{return await(0,nr.stat)(t),!0}catch{return!1}}async function Xa(t,e){await Vo(t,`${JSON.stringify(e,null,"	")}
`)}async function Fh(t){let e;try{e=await kt(t)}catch{e=[t]}for(let r of e)if(await Hh((0,_e.join)(J(r),jh)))return!0;return!1}async function Ve(t){let{profilePath:e}=await Yo(t),r=await ln(e);if(r.userDisabled!==void 0)return r.userDisabled===!0;if(r.manuallyDisabled!==void 0)return Ka(t,e,r.manuallyDisabled===!0);let n=await Fh(t);return Ka(t,e,n)}async function Ka(t,e,r){let n=await Go(t,async()=>{let o=await ln(e);return o.userDisabled!==void 0?o.userDisabled===!0:(await Xa(e,Va({...o,userDisabled:r})),r)}).catch(()=>{});return n?.acquired&&n.value!==void 0?n.value:r}async function zo(t,e){let{profilePath:r}=await Yo(t);if(!(await Go(t,async()=>{let o=await ln(r);await Xa(r,Va({...o,userDisabled:e}))})).acquired)throw new Error("Timed out acquiring the repo profile lock")}async function or(t){let{profilePath:e}=await Yo(t);return(await ln(e)).cutoverFence??null}var nr,_e,Ga,Mh,$h,jh,Xe=b(()=>{"use strict";nr=require("node:fs/promises"),_e=require("node:path");h();be();Xo();te();Re();Ga="profile.json",Mh="jollimemory",$h="backfill-card-dismissed",jh="disabled-by-user"});var Qo=b(()=>{"use strict"});async function A(t,e,r){let n=`${t}.${process.pid}.${(0,Ya.randomUUID)()}.tmp`;await(0,ot.writeFile)(n,e,r===void 0?"utf-8":{encoding:"utf-8",mode:r});try{await(0,ot.rename)(n,t)}catch(o){let s=o.code;if(s==="EPERM"||s==="EACCES")await(0,ot.writeFile)(t,e,r===void 0?"utf-8":{encoding:"utf-8",mode:r}),await(0,ot.rm)(n,{force:!0});else throw o}}var Ya,ot,ne=b(()=>{"use strict";Ya=require("node:crypto"),ot=require("node:fs/promises")});function z(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}var Zo=b(()=>{"use strict"});var za=b(()=>{"use strict"});var Qa=b(()=>{"use strict"});function Za(t){return Number.isFinite(t)&&t>=0&&t<=1114111&&!(t>=55296&&t<=57343)}function el(t){return t.replace(/&(#x[0-9a-fA-F]+|#\d+|[a-zA-Z]+);/g,(e,r)=>{if(r.startsWith("#x")){let o=Number.parseInt(r.slice(2),16);return Za(o)?String.fromCodePoint(o):e}if(r.startsWith("#")){let o=Number.parseInt(r.slice(1),10);return Za(o)?String.fromCodePoint(o):e}let n=Uh[r];return typeof n=="string"?n:e})}var Uh,tl=b(()=>{"use strict";Uh={amp:"&",lt:"<",gt:">",quot:'"',apos:"'"}});var Bh,rl,nl=b(()=>{"use strict";za();Zo();Qa();tl();Bh={decodeHtmlEntities:el,lowercase:t=>t.toLowerCase()},rl=new Set(Object.keys(Bh))});var Wh,ol,sl=b(()=>{"use strict";Wh="^https://app\\.asana\\.com/",ol={id:"asana",label:"Asana",icon:"checklist",match:{claude:{prefixes:["mcp__claude_ai_Asana__"],acceptSuffix:"get_task"},codex:{namespaceSuffix:"asana",functionCallNames:["_get_task"],invocationTools:["asana.get_task"]}},wrapperKeys:["data"],reference:{nativeId:{pipe:[{op:"path",path:"gid"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"name"}],require:".+"},url:{pipe:[{op:"path",path:"permalink_url"}],require:Wh,requireFlags:"i"},description:{pipe:[{op:"path",path:"notes"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"task"}]},{key:"assignee",label:"Assignee",icon:"person",pipe:[{op:"path",path:"assignee.name"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"asana-tasks",itemTag:"task",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var Jh,il,al=b(()=>{"use strict";Jh="^https://[^/]+/wiki/",il={id:"confluence",label:"Confluence",icon:"book",match:{claude:{prefixes:["mcp__claude_ai_Atlassian__"],acceptSuffix:"getConfluencePage"},codex:{namespaceSuffix:"atlassian_rovo",functionCallNames:["_getconfluencepage"],invocationTools:["atlassian_rovo.getConfluencePage"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"pageId"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:Jh},description:{pipe:[{op:"path",path:"body"}],optional:!0}},fields:[{key:"space",label:"Space",icon:"symbol-namespace",pipe:[{op:"path",path:"space"}]},{key:"author",label:"Author",icon:"account",pipe:[{op:"path",path:"author"}]},{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"coalesce",of:[[{op:"path",path:"entityType"}],[{op:"const",value:"page"}]]}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"confluence-pages",itemTag:"page",bodyTag:"content",maxCharsPerReference:3e4,maxTotalChars:6e4}}});var qh,ll,cl=b(()=>{"use strict";qh="^/[^/\\s]+/[^/\\s]+",ll={id:"context7",label:"Context7",icon:"book",trackOnly:!0,argumentsDerived:!0,match:{claude:{prefixes:["mcp__context7__"],acceptSuffix:"query-docs"},codex:{namespaceSuffix:"context7",functionCallNames:["_query_docs"],invocationTools:["query-docs","context7.query-docs"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"libraryId"}],require:qh},title:{pipe:[{op:"path",path:"libraryId"},{op:"regex",pattern:"^/(.+)$",extract:"$1"}],require:".+"},url:{pipe:[{op:"template",template:"https://context7.com{id}",from:{id:[{op:"path",path:"libraryId"}]}}],require:"^https://context7\\.com/"},description:{pipe:[{op:"path",path:"query"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"context7-libraries",itemTag:"library",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var Gh,Kh,ul,dl=b(()=>{"use strict";Gh="^https?://github\\.com/([^/]+)/[^/]+/(?:issues|pull)/\\d+",Kh="^https?://github\\.com/[^/]+/([^/]+)/(?:issues|pull)/\\d+",ul={id:"github",label:"GitHub",icon:"issues",match:{claude:{prefixes:["mcp__github__"]},codex:{namespaceSuffix:"github",functionCallNames:["_fetch_issue","_search_issues"],invocationTools:["github_fetch_issue","github_search_issues"]}},wrapperKeys:["items","issues","nodes","results"],reference:{nativeId:{pipe:[{op:"template",template:"{owner}/{repo}#{number}",from:{owner:[{op:"coalesce",of:[[{op:"path",path:"repository.full_name"},{op:"regex",pattern:"^([^/]+)/[^/]+$",extract:"$1"}],[{op:"path",path:"html_url"},{op:"regex",pattern:Gh,extract:"$1"}]]}],repo:[{op:"coalesce",of:[[{op:"path",path:"repository.full_name"},{op:"regex",pattern:"^[^/]+/([^/]+)$",extract:"$1"}],[{op:"path",path:"html_url"},{op:"regex",pattern:Kh,extract:"$1"}]]}],number:[{op:"path",path:"number"}]}}],require:"^[^/]+/[^/]+#\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"html_url"}],require:"^https?://"},description:{pipe:[{op:"path",path:"body"},{op:"transform",fn:"decodeHtmlEntities"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"path",path:"state"}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"labels"},{op:"join",sep:", "}]},{key:"assignees",label:"Assignees",icon:"account",pipe:[{op:"path",path:"assignees"},{op:"join",sep:", "}]},{key:"milestone",label:"Milestone",icon:"milestone",pipe:[{op:"coalesce",of:[[{op:"path",path:"milestone"}],[{op:"path",path:"milestone.title"}]]}]},{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"coalesce",of:[[{op:"path",path:"issue_type"}],[{op:"path",path:"issue_type.name"}]]}]}],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"github-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var Vh,pl,ml=b(()=>{"use strict";Vh="^[A-Z][A-Z0-9_]*-\\d+$",pl={id:"jira",label:"Jira",icon:"issues",match:{claude:{prefixes:["mcp__claude_ai_Atlassian__"]},codex:{namespaceSuffix:"atlassian_rovo",functionCallNames:["_fetch","_getjiraissue"],invocationTools:["atlassian_rovo.fetch","atlassian_rovo.getJiraIssue"]}},wrapperKeys:["nodes","issues","items","results"],reference:{nativeId:{pipe:[{op:"path",path:"key"}],require:Vh},title:{pipe:[{op:"path",path:"fields.summary"}],require:".+"},url:{pipe:[{op:"path",path:"webUrl"}],require:"^https?://"},description:{pipe:[{op:"path",path:"fields.description"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"coalesce",of:[[{op:"path",path:"fields.status.name"}],[{op:"path",path:"fields.status"}]]}]},{key:"priority",label:"Priority",icon:"flame",pipe:[{op:"coalesce",of:[[{op:"path",path:"fields.priority.name"}],[{op:"path",path:"fields.priority"}]]}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"fields.labels"},{op:"join",sep:", "}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"jira-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var fl,hl=b(()=>{"use strict";fl={id:"jollimemory",label:"Jolli Memory",icon:"history",trackOnly:!0,argumentsDerived:!0,accumulateBody:!0,match:{claude:{prefixes:["mcp__jollimemory__"],exact:["mcp__jollimemory__recall","mcp__jollimemory__search","mcp__jollimemory__get_decision_timeline"]},codex:{namespaceSuffix:"jollimemory",functionCallNames:["recall","search","get_decision_timeline"],invocationTools:["recall","search","get_decision_timeline"],invocationServer:"jollimemory"}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"tool"}],require:"^(recall|search|get_decision_timeline)$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},description:{pipe:[{op:"path",path:"query"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"jolli-memory-lookups",itemTag:"lookup",bodyTag:"queries",maxCharsPerReference:2e3,maxTotalChars:6e3}}});var Xh,gl,yl=b(()=>{"use strict";Xh="^[A-Z][A-Z0-9_]*-\\d+$",gl={id:"linear",label:"Linear",icon:"issues",match:{claude:{prefixes:["mcp__linear__","mcp__claude_ai_Linear__"],denySuffixes:["list_issues","search_issues"]},codex:{namespaceSuffix:"linear",functionCallNames:["_fetch","_get_issue"],invocationTools:["linear_fetch","linear.get_issue"]}},wrapperKeys:["items","issues","nodes","results"],reference:{nativeId:{pipe:[{op:"path",path:"id"}],require:Xh},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https?://"},description:{pipe:[{op:"path",path:"description"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"path",path:"status"}]},{key:"priority",label:"Priority",icon:"flame",pipe:[{op:"coalesce",of:[[{op:"path",path:"priority"}],[{op:"path",path:"priority.name"}]]}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"labels"},{op:"join",sep:", "}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"linear-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var wl,Sl=b(()=>{"use strict";wl={id:"monday",label:"monday.com",icon:"table",match:{claude:{prefixes:["mcp__claude_ai_monday_com__"],acceptSuffix:"get_board_items_page"},codex:{namespaceSuffix:"monday_com",functionCallNames:["_get_board_items_page"],invocationTools:["monday_com.get_board_items_page"]}},wrapperKeys:["items"],reference:{nativeId:{pipe:[{op:"path",path:"id"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"name"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://([\\w-]+\\.)*monday\\.com/",requireFlags:"i"},description:{pipe:[{op:"path",path:"description"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"item"}]},{key:"board",label:"Board",icon:"project",pipe:[{op:"path",path:"board"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"monday-items",itemTag:"item",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var Yh,zh,Qh,El,bl=b(()=>{"use strict";Yh="[-/]([0-9a-fA-F]{32})(?=[/?#]|$)",zh="^https://(www\\.notion\\.so|notion\\.so|app\\.notion\\.com|[^/]+\\.notion\\.site)/",Qh="<content\\b[^>]*>([\\s\\S]*?)</content>",El={id:"notion",label:"Notion",icon:"file-text",match:{claude:{prefixes:["mcp__claude_ai_Notion__"],acceptSuffix:"notion-fetch"},codex:{namespaceSuffix:"notion",functionCallNames:["_fetch"],invocationTools:["notion_fetch"]}},wrapperKeys:["results","items","pages"],reference:{guard:{pipe:[{op:"path",path:"metadata.type"}],require:"^page$"},nativeId:{pipe:[{op:"path",path:"url"},{op:"regex",pattern:Yh,extract:"$1",lastMatch:!0},{op:"transform",fn:"lowercase"}],require:"^[0-9a-fA-F]{32}$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:zh,requireFlags:"i"},description:{pipe:[{op:"path",path:"text"},{op:"regex",pattern:Qh,extract:"$1"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"page"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"notion-pages",itemTag:"page",bodyTag:"content",fieldAttrs:!1,maxCharsPerReference:3e4,maxTotalChars:6e4}}});var kl,Tl=b(()=>{"use strict";kl={id:"slack",label:"Slack",icon:"comment-discussion",match:{claude:{prefixes:["mcp__claude_ai_Slack__"],acceptSuffix:"slack_read_thread"},codex:{namespaceSuffix:"slack",functionCallNames:["_slack_read_thread"],invocationTools:["slack.slack_read_thread"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"template",template:"{c}-{t}",from:{c:[{op:"path",path:"channelId"}],t:[{op:"path",path:"parentTs"}]}}],require:"^[A-Z0-9]+-\\d{7,}\\.\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://"},description:{pipe:[{op:"path",path:"text"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"comment-discussion",pipe:[{op:"const",value:"thread"}]},{key:"replies",label:"Replies",icon:"reply",pipe:[{op:"path",path:"replyCount"}]},{key:"channel",label:"Channel",icon:"symbol-namespace",pipe:[{op:"path",path:"channelId"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"slack-threads",itemTag:"thread",bodyTag:"messages",fieldAttrs:!0,maxCharsPerReference:8e3,maxTotalChars:4e4}}});var Rl,_l=b(()=>{"use strict";Rl={id:"zoom-doc",label:"Zoom Doc",icon:"file",match:{claude:{prefixes:["mcp__claude_ai_Zoom_for_Claude__"],acceptSuffix:"hub_get_file_content"}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"fileId"}],require:"^[\\w.-]+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://docs\\.zoom\\.us/doc/"},description:{pipe:[{op:"path",path:"content"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"doc"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"zoom-docs",itemTag:"doc",bodyTag:"content",maxCharsPerReference:3e4,maxTotalChars:6e4}}});var vl,Cl=b(()=>{"use strict";vl={id:"zoom-meeting",label:"Zoom Meeting",icon:"device-camera-video",match:{claude:{prefixes:["mcp__claude_ai_Zoom_for_Claude__"],acceptSuffix:"get_meeting_assets"},codex:{namespaceSuffix:"zoom",functionCallNames:["_get_meeting_assets"],invocationTools:["zoom.get_meeting_assets"]}},wrapperKeys:[],reference:{guard:{pipe:[{op:"path",path:"meeting_summary.summary_markdown"}],require:".+"},nativeId:{pipe:[{op:"path",path:"meeting_uuid"}],require:"^[\\w-]+$"},title:{pipe:[{op:"path",path:"topic"}],require:".+"},url:{pipe:[{op:"coalesce",of:[[{op:"path",path:"meeting_summary.summary_doc_url"}],[{op:"path",path:"deep_url"}]]}],require:"^https://"},description:{pipe:[{op:"path",path:"meeting_summary.summary_markdown"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"meeting"}]},{key:"started",label:"Started",icon:"calendar",pipe:[{op:"path",path:"start_time"}]},{key:"meeting-number",label:"Meeting #",icon:"symbol-number",pipe:[{op:"path",path:"meeting_number"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"zoom-meetings",itemTag:"meeting",bodyTag:"summary",maxCharsPerReference:2e4,maxTotalChars:4e4}}});var xl,Pl=b(()=>{"use strict";sl();al();cl();dl();ml();hl();yl();Sl();bl();Tl();_l();Cl();xl=[gl,il,pl,ul,El,kl,vl,Rl,ol,wl,ll,fl]});function eg(t,e,r){if(!z(t))return"op must be an object";if(r.opCount++,r.opCount>Al)return`pipe exceeds ${Al} ops`;let n=t.op;if(typeof n!="string"||!Zh.has(n))return`unknown op: ${String(n)}`;switch(n){case"path":return typeof t.path=="string"?void 0:"path op requires a string 'path'";case"const":return typeof t.value=="string"?void 0:"const op requires a string 'value'";case"join":return typeof t.sep=="string"?void 0:"join op requires a string 'sep'";case"regex":return typeof t.pattern!="string"?"regex op requires a string 'pattern'":t.extract!==void 0&&typeof t.extract!="string"?"regex.extract must be a string":t.lastMatch!==void 0&&typeof t.lastMatch!="boolean"?"regex.lastMatch must be a boolean":void 0;case"transform":return typeof t.fn!="string"?"transform op requires a string 'fn'":rl.has(t.fn)?void 0:`unknown transform: ${t.fn}`;case"coalesce":{if(e+1>cn)return`nesting depth exceeds ${cn}`;if(!Array.isArray(t.of))return"coalesce op requires an array 'of'";for(let o of t.of){let s=es(o,e+1,r);if(s!==void 0)return s}return}case"template":{if(e+1>cn)return`nesting depth exceeds ${cn}`;if(typeof t.template!="string")return"template op requires a string 'template'";if(!z(t.from))return"template op requires an object 'from'";for(let o of Object.values(t.from)){let s=es(o,e+1,r);if(s!==void 0)return s}return}}}function es(t,e,r){if(!Array.isArray(t))return"pipe must be an array";for(let n of t){let o=eg(n,e,r);if(o!==void 0)return o}}function sr(t,e){let r=es(t,0,{opCount:0});return r===void 0?void 0:`${e}: ${r}`}function tg(t){if(!z(t))return{ok:!1,error:"definition must be an object"};if(typeof t.id!="string"||t.id.length===0)return{ok:!1,error:"id must be a non-empty string"};if(typeof t.label!="string"||t.label.length===0)return{ok:!1,error:"label must be a non-empty string"};if(typeof t.icon!="string"||t.icon.length===0)return{ok:!1,error:"icon must be a non-empty string"};if(!z(t.match))return{ok:!1,error:"match must be an object"};if(!Array.isArray(t.wrapperKeys))return{ok:!1,error:"wrapperKeys must be an array"};if(!z(t.reference))return{ok:!1,error:"reference must be an object"};if(!Array.isArray(t.fields))return{ok:!1,error:"fields must be an array"};if(!z(t.storage))return{ok:!1,error:"storage must be an object"};if(!z(t.render))return{ok:!1,error:"render must be an object"};let e=t.reference;for(let r of["nativeId","title"]){let n=e[r];if(!z(n))return{ok:!1,error:`reference.${r} is required`};let o=sr(n.pipe,`reference.${r}.pipe`);if(o!==void 0)return{ok:!1,error:o}}if(e.url!==void 0){if(!z(e.url))return{ok:!1,error:"reference.url must be an object"};let r=sr(e.url.pipe,"reference.url.pipe");if(r!==void 0)return{ok:!1,error:r}}if(e.description!==void 0){if(!z(e.description))return{ok:!1,error:"reference.description must be an object"};let r=sr(e.description.pipe,"reference.description.pipe");if(r!==void 0)return{ok:!1,error:r}}if(e.guard!==void 0){if(!z(e.guard))return{ok:!1,error:"reference.guard must be an object"};let r=sr(e.guard.pipe,"reference.guard.pipe");if(r!==void 0)return{ok:!1,error:r}}for(let[r,n]of t.fields.entries()){if(!z(n))return{ok:!1,error:`fields[${r}] must be an object`};if(typeof n.key!="string"||!Il.test(n.key))return{ok:!1,error:`fields[${r}].key must match ${Il}`};if(typeof n.label!="string"||n.label.length===0)return{ok:!1,error:`fields[${r}].label must be a non-empty string`};let o=sr(n.pipe,`fields[${r}].pipe`);if(o!==void 0)return{ok:!1,error:o}}return{ok:!0,def:t}}function dn(){if(un!==void 0)return un;let t=[];for(let e of xl){let r=tg(e);if(!r.ok)throw new Error(`invalid built-in source definition '${e.id}': ${r.error}`);t.push(r.def)}return un=new ts(t),un}var Al,cn,Zh,Il,ts,un,pn=b(()=>{"use strict";Zo();nl();Pl();Al=64,cn=8,Zh=new Set(["path","coalesce","regex","template","join","const","transform"]);Il=/^[\w-]+$/;ts=class{constructor(e){this.definitions=e}all(){return this.definitions}byId(e){return this.definitions.find(r=>r.id===e)}match(e,r,n,o){return e==="claude"?this.definitions.find(s=>{let i=s.match.claude;return!(i===void 0||!i.prefixes.some(a=>r.startsWith(a))||i.exact!==void 0&&!i.exact.includes(r)||i.acceptSuffix!==void 0&&!r.endsWith(i.acceptSuffix)||i.denySuffixes?.some(a=>r.endsWith(a)))}):n!==void 0?this.definitions.find(s=>{let i=s.match.codex;return i!==void 0&&i.namespaceSuffix===n&&i.functionCallNames.includes(r)}):this.definitions.find(s=>{let i=s.match.codex;return i===void 0||!i.invocationTools.includes(r)?!1:i.invocationServer===void 0||i.invocationServer===o})}}});function rs(t){return sg(t)}function rg(t){return t.replace(/^\n+/,"").replace(/\n+$/,"")}function ng(t){let e=t.indexOf(og);return e===-1?t:t.slice(0,e)}function sg(t){if(typeof t!="string")return null;let e=t.split(`
`);if(e[0]?.trim()!=="---")return null;let r=-1;for(let I=1;I<e.length;I++)if(e[I].trim()==="---"){r=I;break}if(r===-1)return null;let n=e.slice(1,r),o=rg(ng(e.slice(r+1).join(`
`))),s={},i=[],a=!1;for(let I of n){if(a){let H=/^\s+- (.+)$/.exec(I);if(H){try{let Se=JSON.parse(H[1]);ig(Se)&&i.push(Se)}catch{}continue}a=!1}if(I.trim()==="fields:"){a=!0;continue}let N=/^([a-zA-Z]+):\s*(.+)$/.exec(I);N&&(s[N[1]]=N[2])}let l=I=>{let N=s[I];if(N!==void 0)try{let H=JSON.parse(N);return typeof H=="string"?H:void 0}catch{return}},c=l("source"),d=l("nativeId");if(c===void 0||d===void 0||!ag(c))return null;let u=c,m=d,f=l("title"),w=l("url"),C=l("referencedAt"),_=l("sourceToolName");return!f||C===void 0||!_?null:{mapKey:`${u}:${m}`,source:u,nativeId:m,title:f,referencedAt:C,toolName:_,...w!==void 0?{url:w}:{},...i.length>0?{fields:i}:{},...o.length>0?{description:o}:{}}}function ig(t){if(typeof t!="object"||t===null)return!1;let e=t;return!(typeof e.key!="string"||typeof e.label!="string"||typeof e.value!="string"||!/^[\w-]+$/.test(e.key)||e.icon!==void 0&&typeof e.icon!="string")}function ag(t){return t.length>0&&/^[\w-]+$/.test(t)}var fR,og,ir=b(()=>{"use strict";h();pn();fR=p("ReferenceStore");og="<!-- jolli:auto-note -->"});function lg(t){return`${t.source}:${t.skill}`}function cg(t,e){if(t===void 0)return e;let r=t.usage===void 0||e.usage===void 0?t.usage??e.usage:{input:t.usage.input+e.usage.input,output:t.usage.output+e.usage.output,cached:t.usage.cached+e.usage.cached,confidence:t.usage.confidence==="attributed"&&e.usage.confidence==="attributed"?"attributed":"estimated"},n=[t,e].filter(l=>l.usage!==void 0),o=dg(n),{usageBySession:s,supersededDocIds:i,...a}=t;return{...a,invocationCount:t.invocationCount+e.invocationCount,...r!==void 0?{usage:r}:{},...o!==void 0?{usageBySession:o}:{},...t.detection==="heuristic"||e.detection==="heuristic"?{detection:"heuristic"}:{},...t.jolliDocId===void 0&&e.jolliDocId!==void 0?{jolliDocId:e.jolliDocId,jolliDocUrl:e.jolliDocUrl}:{},...ug(t,e)}}function ug(t,e){let r=new Set([...t.supersededDocIds??[],...e.supersededDocIds??[]]);t.jolliDocId!==void 0&&e.jolliDocId!==void 0&&r.add(e.jolliDocId);let n=t.jolliDocId??e.jolliDocId;return n!==void 0&&r.delete(n),r.size>0?{supersededDocIds:[...r]}:{}}function Dl(t){if(t.supersededDocIds===void 0)return t;let{supersededDocIds:e,...r}=t;return r}function dg(t){if(t.length===0)return;let e=[];for(let n of t){if(n.usageBySession===void 0)return;e.push(n.usageBySession)}let r={};for(let n of e)for(let[o,s]of Object.entries(n)){let i=r[o];r[o]=i===void 0?s:{input:i.input+s.input,cached:i.cached+s.cached,output:i.output+s.output,confidence:i.confidence==="attributed"&&s.confidence==="attributed"?"attributed":"estimated"}}return r}function Nl(t){let e=new Map;for(let n of t)e.has(n.archivedKey)||e.set(n.archivedKey,n);let r=new Map;for(let n of e.values()){let o=lg(n);r.set(o,cg(r.get(o),n))}return[...r.values()]}var ns=b(()=>{"use strict"});var wR,Ol=b(()=>{"use strict";h();wR=p("SkillStore")});async function is(t){let e=J(t);return await(0,Oe.mkdir)(e,{recursive:!0}),e}function Q(){return(0,mn.join)((0,Ll.homedir)(),".jolli","jollimemory")}async function _t(t){let e=(0,mn.join)(t,Ml);try{let r=await(0,Oe.readFile)(e,"utf-8"),n=JSON.parse(r);return pg(n)}catch{return fn.debug("No config file found in %s, using defaults",t),{}}}function pg(t){if(t.syncEnabled===void 0)return t;let{syncEnabled:e,...r}=t;return r.autoSyncEnabled===void 0?{...r,autoSyncEnabled:e}:r}function mg(t,e){return!("localAgentTool"in e)||"localAgentPath"in e||(t.localAgentTool??"claude-code")===(e.localAgentTool??"claude-code")||t.localAgentPath===void 0?e:(fn.info("Clearing localAgentPath (was set for %s, switching to %s)",t.localAgentTool??"claude-code",e.localAgentTool),{...e,localAgentPath:void 0})}async function hn(t,e){await Jo(e,async()=>{await $l(t,e)}),fn.info("Config saved to %s",e)}async function gn(t){return fg(t,Q())}async function fg(t,e){return Jo(e,async()=>{let{update:r,result:n}=t(await _t(e));return r!==null&&(await $l(r,e),fn.info("Config saved to %s",e)),n})}async function $l(t,e){let r=await _t(e),n={...r,...mg(r,t)};await A((0,mn.join)(e,Ml),JSON.stringify(n,null,"	"))}async function ve(){return _t(Q())}async function st(t){return hn(t,Q())}function os(t,e){let r={...t},n=!1;for(let o of e)o in r&&(delete r[o],n=!0);return{value:r,changed:n}}function jl(t){let e=!1,r={};for(let[i,a]of Object.entries(t.plans??{})){if(a.ignored===!0){e=!0;continue}let l=os(a,hg);l.changed&&(e=!0),r[i]=l.value}let n;if(t.notes!==void 0){n={};for(let[i,a]of Object.entries(t.notes)){if(a.ignored===!0){e=!0;continue}let l=os(a,gg);l.changed&&(e=!0),n[i]=l.value}}let o;if(t.references!==void 0){o={};for(let[i,a]of Object.entries(t.references)){let l=a;if(l.ignored===!0||l.commitHash!=null||l.contentHashAtCommit!==void 0){e=!0;continue}let c=os(a,yg);c.changed&&(e=!0),o[i]=c.value}}return{registry:{version:1,plans:r,...n!==void 0?{notes:n}:{},...o!==void 0?{references:o}:{},...t.skills!==void 0?{skills:t.skills}:{}},changed:e}}var ss,Oe,Ll,mn,fn,Ml,LR,MR,$R,jR,hg,gg,yg,ae=b(()=>{"use strict";ss=require("node:crypto"),Oe=require("node:fs/promises"),Ll=require("node:os"),mn=require("node:path");h();Qo();ne();Re();ir();ns();Ol();fn=p("SessionTracker"),Ml="config.json",LR=2880*60*1e3;MR=2880*60*1e3,$R=10080*60*1e3,jR=(0,ss.randomBytes)(4).toString("hex"),hg=["ignored","branch","editCount"],gg=["ignored","branch"],yg=["ignored","branch","commitHash","contentHashAtCommit"]});function Me(t=process.versions.node){let e=/^(\d+)\.(\d+)/.exec(t);if(!e)return!1;let r=Number.parseInt(e[1],10),n=Number.parseInt(e[2],10);return r>Le.major?!0:r<Le.major?!1:n>=Le.minor}function it(t){let e=t,r=e?.message??String(t),n=e?.code;return n==="ENOENT"?null:n==="EACCES"||n==="EPERM"?{kind:"permission",message:r}:/SQLITE_CORRUPT|SQLITE_NOTADB|file is not a database/i.test(r)?{kind:"corrupt",message:r}:/SQLITE_BUSY|SQLITE_LOCKED|database is locked/i.test(r)?{kind:"locked",message:r}:/no such table|no such column/i.test(r)?{kind:"schema",message:r}:/SQLITE_CANTOPEN|unable to open/i.test(r)?{kind:"permission",message:r}:{kind:"unknown",message:r}}var Le,Ce=b(()=>{"use strict";Le={major:22,minor:13}});function Ct(t){let e=cr(t.replace(/\\/g,"/"));return process.platform==="win32"||process.platform==="darwin"?e.toLowerCase():e}function cr(t){let e=t.length;for(;e>0&&t[e-1]==="/";)e--;return e===t.length?t:t.slice(0,e)}function fs(t,e){let r=Ct(t),n=Ct(e);return r===n||r.startsWith(`${n}/`)}function Ye(t){return t.replace(/\\/g,"/")}var xe=b(()=>{"use strict"});function xc(t){if((0,Cc.platform)()==="win32")try{Ta("attrib",["+h",t],{timeout:2e3})}catch{}}var Cc,Pc=b(()=>{"use strict";Cc=require("node:os");be()});var Ac,$,oe,Pt,V,Cn=b(()=>{"use strict";Ac=require("node:crypto"),$=require("node:fs"),oe=require("node:path");h();Pc();xe();Pt=p("MetadataManager"),V=class t{constructor(e){this.jolliDir=e;this.manifestPath=(0,oe.join)(e,"manifest.json"),this.branchesPath=(0,oe.join)(e,"branches.json"),this.configPath=(0,oe.join)(e,"config.json"),this.migrationPath=(0,oe.join)(e,"migration.json"),this.indexPath=(0,oe.join)(e,"index.json")}ensure(){(0,$.mkdirSync)(this.jolliDir,{recursive:!0})!==void 0&&xc(this.jolliDir),(0,$.existsSync)(this.manifestPath)||this.atomicWrite(this.manifestPath,JSON.stringify({version:1,files:[]},null,"	")),(0,$.existsSync)(this.branchesPath)||this.atomicWrite(this.branchesPath,JSON.stringify({version:1,mappings:[]},null,"	")),(0,$.existsSync)(this.configPath)||this.atomicWrite(this.configPath,JSON.stringify({version:1,sortOrder:"date"},null,"	"))}readManifest(){return this.readJson(this.manifestPath)??{version:1,files:[]}}updateManifest(e){let r=this.readManifest(),n=r.files.filter(o=>o.fileId!==e.fileId);n.push(e),this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:n},null,"	")),Pt.info("Manifest updated: %s (%s)",e.path,e.type)}removeFromManifest(e){let r=this.readManifest(),n=r.files.filter(o=>o.fileId!==e);return n.length===r.files.length?!1:(this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:n},null,"	")),!0)}unregisterFilesByType(e){let r=this.readManifest(),n=r.files.filter(s=>s.type!==e),o=r.files.length-n.length;return o===0?0:(this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:n},null,"	")),Pt.info("Manifest unregistered %d entries of type=%s",o,e),o)}replaceFiles(e){let r=this.readManifest();this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:[...e]},null,"	"))}findByPath(e){return this.readManifest().files.find(r=>r.path===e)}findById(e){return this.readManifest().files.find(r=>r.fileId===e)}updatePath(e,r){let n=this.readManifest();if(!n.files.find(i=>i.fileId===e))return!1;let s=n.files.map(i=>i.fileId===e?{...i,path:r}:i);return this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:s},null,"	")),!0}resolveFolderForBranch(e){let r=this.readBranches(),n=r.mappings.find(a=>a.branch===e);if(n)return n.folder;let o=t.transcodeBranchName(e),s={folder:o,branch:e,createdAt:new Date().toISOString()},i={...r,mappings:[...r.mappings,s]};return this.atomicWrite(this.branchesPath,JSON.stringify(i,null,"	")),Pt.info("Branch mapping created: %s \u2192 %s",e,o),o}removeBranchMapping(e){let r=this.readBranches(),n=r.mappings.filter(o=>o.branch!==e);return n.length===r.mappings.length?!1:(this.atomicWrite(this.branchesPath,JSON.stringify({...r,mappings:n},null,"	")),Pt.info("Branch mapping removed: %s (no remaining head)",e),!0)}renameBranchFolder(e,r){let n=this.readBranches(),o=n.mappings.map(l=>l.folder===e?{...l,folder:r}:l);this.atomicWrite(this.branchesPath,JSON.stringify({...n,mappings:o},null,"	"));let s=this.readManifest(),i=0,a=s.files.map(l=>l.path.startsWith(`${e}/`)?(i++,{...l,path:l.path.replace(`${e}/`,`${r}/`)}):l);return i>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...s,files:a},null,"	")),i}removeBranchFolder(e){let r=this.readBranches();this.atomicWrite(this.branchesPath,JSON.stringify({...r,mappings:r.mappings.filter(i=>i.folder!==e)},null,"	"));let n=this.readManifest(),o=n.files.filter(i=>!i.path.startsWith(`${e}/`)),s=n.files.length-o.length;return s>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:o},null,"	")),s}unregisterBranches(e){let r=new Set(e);if(r.size===0)return 0;let n=this.readBranches(),o=n.mappings.filter(i=>!r.has(i.branch)),s=n.mappings.length-o.length;return s===0?0:(this.atomicWrite(this.branchesPath,JSON.stringify({...n,mappings:o},null,"	")),Pt.info("Branch mappings unregistered: %d",s),s)}readBranches(){return this.readJson(this.branchesPath)??{version:1,mappings:[]}}listBranchMappings(){return this.readBranches().mappings}folderToBranch(e){try{return this.listBranchMappings().find(r=>r.folder===e)?.branch??e}catch{return e}}listIndexHeads(){let e=this.readJson(this.indexPath);return!e||!Array.isArray(e.entries)?[]:e.entries.filter(r=>typeof r?.commitHash=="string"&&typeof r.branch=="string"&&(r.parentCommitHash===null||typeof r.parentCommitHash=="string")&&r.parentCommitHash===null)}readIndex(){return this.readJson(this.indexPath)}readConfig(){return this.readJson(this.configPath)??{version:1,sortOrder:"date"}}saveConfig(e){this.atomicWrite(this.configPath,JSON.stringify(e,null,"	"))}readMigrationState(){return this.readJson(this.migrationPath)}saveMigrationState(e){this.atomicWrite(this.migrationPath,JSON.stringify(e,null,"	"))}reconcile(e){let r=this.readManifest();if(r.files.length===0||!r.files.some(a=>!(0,$.existsSync)((0,oe.join)(e,a.path))))return 0;let o=new Map;try{this.walkDir(e,e,o)}catch{}let s=0,i=[];for(let a of r.files){let l=(0,oe.join)(e,a.path);if((0,$.existsSync)(l))i.push(a);else{let c=o.get(a.fingerprint);c&&c!==a.path?(i.push({...a,path:c}),s++):(Pt.warn("Manifest entry '%s' (id=%s) not found on disk \u2014 keeping entry to avoid data loss",a.path,a.fileId),i.push(a))}}return s>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:i},null,"	")),s}walkDir(e,r,n){for(let o of(0,$.readdirSync)(e,{withFileTypes:!0})){if(o.name.startsWith("."))continue;let s=(0,oe.join)(e,o.name);if(o.isDirectory())this.walkDir(s,r,n);else if(o.name.endsWith(".md"))try{let i=(0,$.readFileSync)(s,"utf-8"),a=t.sha256(i);n.set(a,Ye((0,oe.relative)(r,s)))}catch{}}}static transcodeBranchName(e){let r=e.replace(/[/\\:*?~^]/g,"-");return r=r.replace(/-{3,}/g,"-"),r=r.replace(/\.\./g,"--"),r=r.replace(/^[.-]+|[.-]+$/g,""),r||"default"}static sha256(e){return(0,Ac.createHash)("sha256").update(e,"utf-8").digest("hex")}readJson(e){if(!(0,$.existsSync)(e))return null;try{return JSON.parse((0,$.readFileSync)(e,"utf-8"))}catch{return null}}atomicWrite(e,r){let n=(0,oe.dirname)(e);(0,$.mkdirSync)(n,{recursive:!0});let o=`${e}.tmp`;(0,$.writeFileSync)(o,r,"utf-8"),(0,$.renameSync)(o,e)}}});function ty(t){if(process.env.VITEST)return null;try{return Ee("ssh",["-G",t],{encoding:"utf-8",timeout:Zg,stdio:["ignore","pipe","pipe"]})}catch(e){return Qg.debug("ssh -G %s failed: %s",t,e instanceof Error?e.message:String(e)),null}}function ry(t){for(let e of t.split(/\r?\n/)){let r=e.match(/^hostname\s+(\S+)/i);if(r?.[1])return r[1]}return null}function xn(t){if(!t)return t;let e=Ic.get(t);if(e!==void 0)return e;let r=t,n=ey(t);if(n){let o=ry(n);o&&(r=o)}return Ic.set(t,r),r}var Qg,Zg,Ic,ey,Dc=b(()=>{"use strict";h();be();Qg=p("SshAliasResolver"),Zg=5e3,Ic=new Map,ey=ty});function Nc(){return(0,U.join)((0,$c.homedir)(),"Documents","jolli")}function xs(t){return t?oy(t)?t:(ny.warn("Invalid customPath '%s': must be absolute and not contain '..'. Falling back to default.",t),Nc()):Nc()}function oy(t){return t?(0,U.isAbsolute)(t)&&!t.includes(".."):!0}function jc(t,e,r){let n=xs(r),o=(0,U.join)(n,t);if(!(0,ze.existsSync)(o)){let i=Gc(n,t,e).match;return i||(Cs(o,t,e),o)}let s=Vc(o);return s&&Wc(s,e,t)?o:s&&Kc(o,s)?(Cs(o,t,e),o):ly(n,t,e)}function Hc(t){let e=As(t,["config","--get","remote.origin.url"]);if(e){let n=e.match(/\/([^/]+?)(?:\.git)?$/);if(n?.[1])return n[1]}let r=Fc(t);return r?(0,U.basename)(r):(0,U.basename)(t)||"unknown"}function Fc(t){let e=As(t,["rev-parse","--git-common-dir"]);if(!e)return null;let r=(0,U.isAbsolute)(e)?e:(0,U.join)(t,e),n=(0,U.dirname)(r);return n&&n!=="/"&&n!=="."?n:null}function sy(t,e){if(!(0,U.basename)(t))return{claimable:!1,blocker:"not-a-project"};let r=Fc(t);if(!r)return{claimable:!1,blocker:"not-a-project"};let n;try{n=xs(e)}catch{return{claimable:!1,blocker:"unresolvable-folder"}}return fs(n,r)?{claimable:!1,blocker:"folder-inside-repo"}:{claimable:!0}}function Ps(t,e){return sy(t,e).claimable}function Uc(){let t=Number(process.env.JOLLI_GIT_CMD_TIMEOUT_MS);return Number.isFinite(t)&&t>0?t:3e4}function iy(){return Math.min(Uc(),5e3)}function ay(t){return typeof t=="object"&&t!==null&&t.code==="ETIMEDOUT"}function Oc(t,e,r=Uc()){return Ee("git",e,{cwd:t,encoding:"utf-8",timeout:r,stdio:["ignore","pipe","pipe"]}).trim()||null}function As(t,e){try{return Oc(t,e)}catch(r){if(!ay(r))return null;try{return Oc(t,e,iy())}catch{return null}}}function Bc(t){return As(t,["remote","get-url","origin"])}function Wc(t,e,r){return t.remoteUrl&&e?Lc(t.remoteUrl)===Lc(e):!t.remoteUrl&&!e?t.repoName==null||t.repoName===r:!1}function Lc(t){return qc(t).replace(/\/+$/,"").replace(/\.git$/,"").toLowerCase()}function qc(t){let e=t.match(/^(?:git\+)?ssh:\/\/(?:[^@/]+@)?([^/:]+)(?::(\d+))?\/(.+)$/i);if(e)return`https://${xn(e[1])}${Mc(e[2],"22")}/${e[3]}`;let r=t.match(/^git:\/\/([^/:]+)(?::(\d+))?\/(.+)$/i);if(r)return`https://${xn(r[1])}${Mc(r[2],"9418")}/${r[3]}`;let n=t.match(/^[^@/:]+@([^/:]+):(.+)$/);return n?`https://${xn(n[1])}/${n[2]}`:t}function Mc(t,e){return t===void 0||t===e?"":`:${t}`}function Gc(t,e,r){let n=null,o=null,s=null;for(let i=2;i<=99;i++){let a=(0,U.join)(t,`${e}-${i}`);if(!(0,ze.existsSync)(a)){s===null&&(s=a);continue}let l=Vc(a);if(l&&Wc(l,r,e)){n=a;break}l&&o===null&&Kc(a,l)&&(o=a)}return{match:n,stub:o,firstUnused:s}}function ly(t,e,r){let n=Gc(t,e,r);if(n.match)return n.match;let o=n.stub??n.firstUnused??(0,U.join)(t,`${e}-${Date.now()}`);return Cs(o,e,r),o}function Cs(t,e,r){if(he())return;let n=new V((0,U.join)(t,".jolli"));n.ensure();let o=n.readConfig();n.saveConfig({...o,remoteUrl:r??void 0,repoName:e})}function Kc(t,e){return e.remoteUrl==null&&e.repoName==null}function Vc(t){let e=(0,U.join)(t,".jolli","config.json");if(!(0,ze.existsSync)(e))return null;try{return JSON.parse((0,ze.readFileSync)(e,"utf-8"))}catch{return null}}var ze,$c,U,ny,Jc,fr=b(()=>{"use strict";ze=require("node:fs"),$c=require("node:os"),U=require("node:path");h();be();Cn();xe();Dc();ny=p("KBPathResolver");Jc=new Set(["github.com","gitlab.com","bitbucket.org"])});async function Ls(t){let e=await M(["config","--get","remote.origin.url"],t),r=e.exitCode===0?e.stdout.trim():"";return r.length===0?hr(t):au(r,t)}function au(t,e){let r=t.trim();if(r.length===0)return hr(e);let n=/^([A-Za-z0-9_.+-]+@)([^:/\s]+):(.+)$/.exec(r);if(n&&!r.includes("://")){let i=n[2].toLowerCase(),a=iu(i,su(n[3]));return`https://${i}/${a}`}let o;try{o=new URL(r)}catch{return hr(e)}let s=o.protocol.replace(/:$/,"").toLowerCase();if(s==="ssh"||s==="git"||s==="http"||s==="https"){let i=o.hostname.toLowerCase(),a=iu(i,su(o.pathname.replace(/^\/+/,""))),l=hy(s,o.port);return`https://${i}${l}/${a}`}return hr(s==="file"?o.pathname:e)}function hr(t){let e=cr(Ye(t));return e.length===0?"file:///":e.startsWith("/")?`file://${e}`:`file:///${e}`}function su(t){let e=cr(t);return e.toLowerCase().endsWith(".git")&&(e=e.slice(0,-4)),cr(e)}function iu(t,e){return Jc.has(t)?e.toLowerCase():e}function hy(t,e){return e.length===0?"":t==="ssh"||t==="git"?e===fy[t]?"":`:${e}`:`:${e}`}var fy,Dn=b(()=>{"use strict";te();fr();xe();fy={ssh:"22",git:"9418"}});var cu,uu,du,pu,mu,fu,Nn=b(()=>{"use strict";cu=`
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
-- reader), which left this table written by Backfill and read by nothing \u2014 a few
-- hundred KB of JSON per repo per import, for no query. The writer is commented
-- out in lockstep (StatsWriter.recordRepoGraph, Backfill's call site); uncomment
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
`,uu=`
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
`,du=`
INSERT INTO context_kinds (kind) VALUES ('skill');
`,pu=`
ALTER TABLE events_raw ADD COLUMN failed_kind TEXT;
`,mu=`
ALTER TABLE session_tool_use ADD COLUMN last_call_at_ms INTEGER;
`,fu=`
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
`});function At(){return(0,On.join)(Q(),"jollimemory.db")}function Ln(t=process.versions.node){let e=/^(\d+)\.(\d+)/.exec(t);if(!e)return!1;let r=Number.parseInt(e[1],10),n=Number.parseInt(e[2],10);return r>gr.major?!0:r<gr.major?!1:n>=gr.minor}function js(t){try{let e=t.prepare("SELECT value FROM schema_meta WHERE key = 'schema_version'").get(),r=Number.parseInt(e?.value??"",10);return Number.isFinite(r)?r:0}catch{return 0}}function by(t){let e=js(t);if(!(e>=je)){t.exec("PRAGMA foreign_keys = OFF");try{for(let r=e;r<je;r++){t.exec("BEGIN IMMEDIATE");try{if(js(t)>r){t.exec("COMMIT");continue}t.exec(Ey[r]),t.exec(`INSERT INTO schema_meta (key, value) VALUES ('schema_version', '${r+1}')
					 ON CONFLICT(key) DO UPDATE SET value = excluded.value`),t.exec("COMMIT")}catch(n){try{t.exec("ROLLBACK")}catch{}throw n}}}finally{t.exec("PRAGMA foreign_keys = ON")}Fs.info("dashboard schema migrated %d \u2192 %d",e,je)}}function ky(t){let e=(0,On.dirname)(t);try{(0,He.mkdirSync)(e,{recursive:!0,mode:448}),((0,He.statSync)(e).mode&511)!==448&&(0,He.chmodSync)(e,448)}catch(r){Fs.warn("could not restrict %s to owner-only: %s",e,x(r))}}function Ty(t){for(let e of[t,`${t}-wal`,`${t}-shm`])try{((0,He.statSync)(e).mode&511)!==384&&(0,He.chmodSync)(e,384)}catch(r){Et(r)||Fs.warn("could not restrict %s to 0600: %s",e,x(r))}}async function hu(t,e){if(!Ln())throw new $s(process.versions.node);let r=e.dbPath??At(),n=e.maxAttempts??4,o=e.baseDelayMs??50;t||ky(r);let{DatabaseSync:s}=await import("node:sqlite");for(let i=1;;i++){let a;try{a=new s(r,{readOnly:t});for(let l of t?wy:yy)a.exec(l);return a.exec(`PRAGMA busy_timeout = ${e.busyTimeoutMs??Sy}`),t||Ty(r),a}catch(l){try{a?.close()}catch{}if(it(l)?.kind!=="locked"||i>=n)throw l;await new Promise(c=>setTimeout(c,o*2**(i-1)))}}}async function gu(t,e={}){let r=await hu(!1,e);try{let n=js(r);if(n>je)throw new Hs(n,e.dbPath??At());return by(r),await t(r)}finally{r.close()}}async function Us(t,e={}){let r=await hu(!0,e);try{return await t(r)}finally{r.close()}}function Bs(t,e){t.exec("BEGIN IMMEDIATE");try{let r=e();return t.exec("COMMIT"),r}catch(r){try{t.exec("ROLLBACK")}catch{}throw r}}var He,On,Fs,je,gr,$s,yy,wy,Sy,Ey,Hs,It=b(()=>{"use strict";He=require("node:fs"),On=require("node:path");ae();Ce();h();Nn();Fs=p("DashboardDb"),je=5,gr={major:22,minor:13};$s=class extends Error{constructor(e){super(`The Jolli dashboard needs Node >= ${gr.major}.${gr.minor} for built-in SQLite (running ${e}). Upgrade Node, or run the CLI with --experimental-sqlite.`),this.name="DashboardRuntimeError"}},yy=["PRAGMA journal_mode = WAL","PRAGMA foreign_keys = ON"],wy=["PRAGMA foreign_keys = ON"],Sy=2e3,Ey=[cu+`
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
`+fu,uu,du,pu,mu];Hs=class extends Error{constructor(e,r){super(`${r} uses dashboard schema v${e}, newer than this build's v${je}. Upgrade Jolli, or delete that file to rebuild the dashboard from scratch.`),this.name="DashboardSchemaAheadError"}}});function Ws(t){let e=s=>{try{return(0,yr.statSync)(`${t}${s}`),!0}catch{return!1}},r=e(""),n=e("-wal"),o=e("-shm");return r?n&&o?"healthy-active":n?"healthy-recoverable":"healthy-clean":n||o?"alarm-sidecars-only":"absent"}var yr,kx,Js=b(()=>{"use strict";yr=require("node:fs");h();kx=p("DbDetection")});async function _y(t){try{let r=await Ls(t);if(r&&!r.startsWith("file:"))return{identity:r,remoteUrl:r}}catch(r){Ry.debug("no canonical remote for %s (%s) \u2014 using path identity",t,x(r))}return{identity:`local:${(0,yu.createHash)("sha256").update(Ye(t)).digest("hex").slice(0,32)}`}}async function lt(t){return _y(await $o(t))}var yu,Ry,Dt=b(()=>{"use strict";yu=require("node:crypto");Xo();te();Dn();Re();xe();ae();h();Ry=p("RepoRegistry")});var Su={};fa(Su,{hasCutoverRow:()=>Py,resetCutoverRouterCaches:()=>Cy,resolveCutoverRoute:()=>wr});function Cy(){qs.clear()}async function xy(t){let e=qs.get(t);if(e!==void 0)return e;let{identity:r}=await lt(t);return qs.set(t,r),r}async function wu(t,e){if(!Ln())return{kind:"unavailable",reason:`Node ${process.versions.node} lacks flag-free node:sqlite`};let r=Ws(e);if(r==="alarm-sidecars-only")return{kind:"unavailable",reason:"database file missing but WAL/SHM remain \u2014 run jolli doctor --recover"};if(r==="absent")return{kind:"unavailable",reason:"database file does not exist"};try{let{DatabaseSync:n}=await import("node:sqlite"),o=new n(e,{readOnly:!0});try{let s=o.prepare("SELECT value FROM schema_meta WHERE key = 'schema_version'").get();if(s&&Number(s.value)>je)return{kind:"unavailable",reason:`database schema v${s.value} is newer than this build's v${je} \u2014 upgrade this surface`};let i=await xy(t),a=o.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(i);if(!a)return{kind:"no-row"};let l=o.prepare("SELECT value FROM repo_state WHERE repo_id = ? AND key = 'cutover'").get(a.id);return l?{kind:"row",record:JSON.parse(l.value)}:{kind:"no-row"}}finally{o.close()}}catch(n){return{kind:"unavailable",reason:x(n)}}}async function Py(t,e={}){return(await wu(t,e.dbPath??At())).kind==="row"}async function wr(t,e={}){let r=await or(t).catch(()=>null),n=await wu(t,e.dbPath??At());return n.kind==="row"?{state:"cutover",record:n.record}:r!==null?n.kind==="no-row"?{state:"legacy-fenced"}:{state:"blocked",reason:n.reason}:n.kind==="unavailable"?(vy.warn("database unavailable for un-cutover repo (%s) \u2014 orphan remains authoritative",n.reason),{state:"uncutover",warning:n.reason}):{state:"uncutover"}}var vy,qs,Mn=b(()=>{"use strict";Xe();h();It();Js();Dt();vy=p("CutoverRouter"),qs=new Map});var $t=k((qI,Ad)=>{"use strict";var Lw="2.0.0",Mw=Number.MAX_SAFE_INTEGER||9007199254740991,$w=16,jw=250,Hw=["major","premajor","minor","preminor","patch","prepatch","prerelease"];Ad.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:$w,MAX_SAFE_BUILD_LENGTH:jw,MAX_SAFE_INTEGER:Mw,RELEASE_TYPES:Hw,SEMVER_SPEC_VERSION:Lw,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}});var Pr=k((GI,Id)=>{"use strict";var Fw=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...t)=>console.error("SEMVER",...t):()=>{};Id.exports=Fw});var jt=k((Pe,Dd)=>{"use strict";var{MAX_SAFE_COMPONENT_LENGTH:pi,MAX_SAFE_BUILD_LENGTH:Uw,MAX_LENGTH:Bw}=$t(),Ww=Pr();Pe=Dd.exports={};var Jw=Pe.re=[],qw=Pe.safeRe=[],g=Pe.src=[],Gw=Pe.safeSrc=[],y=Pe.t={},Kw=0,mi="[a-zA-Z0-9-]",Vw=[["\\s",1],["\\d",Bw],[mi,Uw]],Xw=t=>{for(let[e,r]of Vw)t=t.split(`${e}*`).join(`${e}{0,${r}}`).split(`${e}+`).join(`${e}{1,${r}}`);return t},R=(t,e,r)=>{let n=Xw(e),o=Kw++;Ww(t,o,e),y[t]=o,g[o]=e,Gw[o]=n,Jw[o]=new RegExp(e,r?"g":void 0),qw[o]=new RegExp(n,r?"g":void 0)};R("NUMERICIDENTIFIER","0|[1-9]\\d*");R("NUMERICIDENTIFIERLOOSE","\\d+");R("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${mi}*`);R("MAINVERSION",`(${g[y.NUMERICIDENTIFIER]})\\.(${g[y.NUMERICIDENTIFIER]})\\.(${g[y.NUMERICIDENTIFIER]})`);R("MAINVERSIONLOOSE",`(${g[y.NUMERICIDENTIFIERLOOSE]})\\.(${g[y.NUMERICIDENTIFIERLOOSE]})\\.(${g[y.NUMERICIDENTIFIERLOOSE]})`);R("PRERELEASEIDENTIFIER",`(?:${g[y.NONNUMERICIDENTIFIER]}|${g[y.NUMERICIDENTIFIER]})`);R("PRERELEASEIDENTIFIERLOOSE",`(?:${g[y.NONNUMERICIDENTIFIER]}|${g[y.NUMERICIDENTIFIERLOOSE]})`);R("PRERELEASE",`(?:-(${g[y.PRERELEASEIDENTIFIER]}(?:\\.${g[y.PRERELEASEIDENTIFIER]})*))`);R("PRERELEASELOOSE",`(?:-?(${g[y.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${g[y.PRERELEASEIDENTIFIERLOOSE]})*))`);R("BUILDIDENTIFIER",`${mi}+`);R("BUILD",`(?:\\+(${g[y.BUILDIDENTIFIER]}(?:\\.${g[y.BUILDIDENTIFIER]})*))`);R("FULLPLAIN",`v?${g[y.MAINVERSION]}${g[y.PRERELEASE]}?${g[y.BUILD]}?`);R("FULL",`^${g[y.FULLPLAIN]}$`);R("LOOSEPLAIN",`[v=\\s]*${g[y.MAINVERSIONLOOSE]}${g[y.PRERELEASELOOSE]}?${g[y.BUILD]}?`);R("LOOSE",`^${g[y.LOOSEPLAIN]}$`);R("GTLT","((?:<|>)?=?)");R("XRANGEIDENTIFIERLOOSE",`${g[y.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);R("XRANGEIDENTIFIER",`${g[y.NUMERICIDENTIFIER]}|x|X|\\*`);R("XRANGEPLAIN",`[v=\\s]*(${g[y.XRANGEIDENTIFIER]})(?:\\.(${g[y.XRANGEIDENTIFIER]})(?:\\.(${g[y.XRANGEIDENTIFIER]})(?:${g[y.PRERELEASE]})?${g[y.BUILD]}?)?)?`);R("XRANGEPLAINLOOSE",`[v=\\s]*(${g[y.XRANGEIDENTIFIERLOOSE]})(?:\\.(${g[y.XRANGEIDENTIFIERLOOSE]})(?:\\.(${g[y.XRANGEIDENTIFIERLOOSE]})(?:${g[y.PRERELEASELOOSE]})?${g[y.BUILD]}?)?)?`);R("XRANGE",`^${g[y.GTLT]}\\s*${g[y.XRANGEPLAIN]}$`);R("XRANGELOOSE",`^${g[y.GTLT]}\\s*${g[y.XRANGEPLAINLOOSE]}$`);R("COERCEPLAIN",`(^|[^\\d])(\\d{1,${pi}})(?:\\.(\\d{1,${pi}}))?(?:\\.(\\d{1,${pi}}))?`);R("COERCE",`${g[y.COERCEPLAIN]}(?:$|[^\\d])`);R("COERCEFULL",g[y.COERCEPLAIN]+`(?:${g[y.PRERELEASE]})?(?:${g[y.BUILD]})?(?:$|[^\\d])`);R("COERCERTL",g[y.COERCE],!0);R("COERCERTLFULL",g[y.COERCEFULL],!0);R("LONETILDE","(?:~>?)");R("TILDETRIM",`(\\s*)${g[y.LONETILDE]}\\s+`,!0);Pe.tildeTrimReplace="$1~";R("TILDE",`^${g[y.LONETILDE]}${g[y.XRANGEPLAIN]}$`);R("TILDELOOSE",`^${g[y.LONETILDE]}${g[y.XRANGEPLAINLOOSE]}$`);R("LONECARET","(?:\\^)");R("CARETTRIM",`(\\s*)${g[y.LONECARET]}\\s+`,!0);Pe.caretTrimReplace="$1^";R("CARET",`^${g[y.LONECARET]}${g[y.XRANGEPLAIN]}$`);R("CARETLOOSE",`^${g[y.LONECARET]}${g[y.XRANGEPLAINLOOSE]}$`);R("COMPARATORLOOSE",`^${g[y.GTLT]}\\s*(${g[y.LOOSEPLAIN]})$|^$`);R("COMPARATOR",`^${g[y.GTLT]}\\s*(${g[y.FULLPLAIN]})$|^$`);R("COMPARATORTRIM",`(\\s*)${g[y.GTLT]}\\s*(${g[y.LOOSEPLAIN]}|${g[y.XRANGEPLAIN]})`,!0);Pe.comparatorTrimReplace="$1$2$3";R("HYPHENRANGE",`^\\s*(${g[y.XRANGEPLAIN]})\\s+-\\s+(${g[y.XRANGEPLAIN]})\\s*$`);R("HYPHENRANGELOOSE",`^\\s*(${g[y.XRANGEPLAINLOOSE]})\\s+-\\s+(${g[y.XRANGEPLAINLOOSE]})\\s*$`);R("STAR","(<|>)?=?\\s*\\*");R("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$");R("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")});var zn=k((KI,Nd)=>{"use strict";var Yw=Object.freeze({loose:!0}),zw=Object.freeze({}),Qw=t=>t?typeof t!="object"?Yw:t:zw;Nd.exports=Qw});var fi=k((VI,Md)=>{"use strict";var Od=/^[0-9]+$/,Ld=(t,e)=>{if(typeof t=="number"&&typeof e=="number")return t===e?0:t<e?-1:1;let r=Od.test(t),n=Od.test(e);return r&&n&&(t=+t,e=+e),t===e?0:r&&!n?-1:n&&!r?1:t<e?-1:1},Zw=(t,e)=>Ld(e,t);Md.exports={compareIdentifiers:Ld,rcompareIdentifiers:Zw}});var B=k((XI,jd)=>{"use strict";var Qn=Pr(),{MAX_LENGTH:$d,MAX_SAFE_INTEGER:Zn}=$t(),{safeRe:eo,t:to}=jt(),eS=zn(),{compareIdentifiers:hi}=fi(),gi=class t{constructor(e,r){if(r=eS(r),e instanceof t){if(e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease)return e;e=e.version}else if(typeof e!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);if(e.length>$d)throw new TypeError(`version is longer than ${$d} characters`);Qn("SemVer",e,r),this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease;let n=e.trim().match(r.loose?eo[to.LOOSE]:eo[to.FULL]);if(!n)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+n[1],this.minor=+n[2],this.patch=+n[3],this.major>Zn||this.major<0)throw new TypeError("Invalid major version");if(this.minor>Zn||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>Zn||this.patch<0)throw new TypeError("Invalid patch version");n[4]?this.prerelease=n[4].split(".").map(o=>{if(/^[0-9]+$/.test(o)){let s=+o;if(s>=0&&s<Zn)return s}return o}):this.prerelease=[],this.build=n[5]?n[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(Qn("SemVer.compare",this.version,this.options,e),!(e instanceof t)){if(typeof e=="string"&&e===this.version)return 0;e=new t(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof t||(e=new t(e,this.options)),this.major<e.major?-1:this.major>e.major?1:this.minor<e.minor?-1:this.minor>e.minor?1:this.patch<e.patch?-1:this.patch>e.patch?1:0}comparePre(e){if(e instanceof t||(e=new t(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let r=0;do{let n=this.prerelease[r],o=e.prerelease[r];if(Qn("prerelease compare",r,n,o),n===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(n===void 0)return-1;if(n===o)continue;return hi(n,o)}while(++r)}compareBuild(e){e instanceof t||(e=new t(e,this.options));let r=0;do{let n=this.build[r],o=e.build[r];if(Qn("build compare",r,n,o),n===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(n===void 0)return-1;if(n===o)continue;return hi(n,o)}while(++r)}inc(e,r,n){if(e.startsWith("pre")){if(!r&&n===!1)throw new Error("invalid increment argument: identifier is empty");if(r){let o=`-${r}`.match(this.options.loose?eo[to.PRERELEASELOOSE]:eo[to.PRERELEASE]);if(!o||o[1]!==r)throw new Error(`invalid identifier: ${r}`)}}switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r,n);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r,n);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r,n),this.inc("pre",r,n);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",r,n),this.inc("pre",r,n);break;case"release":if(this.prerelease.length===0)throw new Error(`version ${this.raw} is not a prerelease`);this.prerelease.length=0;break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{let o=Number(n)?1:0;if(this.prerelease.length===0)this.prerelease=[o];else{let s=this.prerelease.length;for(;--s>=0;)typeof this.prerelease[s]=="number"&&(this.prerelease[s]++,s=-2);if(s===-1){if(r===this.prerelease.join(".")&&n===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(o)}}if(r){let s=[r,o];n===!1&&(s=[r]),hi(this.prerelease[0],r)===0?isNaN(this.prerelease[1])&&(this.prerelease=s):this.prerelease=s}break}default:throw new Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};jd.exports=gi});var et=k((YI,Fd)=>{"use strict";var Hd=B(),tS=(t,e,r=!1)=>{if(t instanceof Hd)return t;try{return new Hd(t,e)}catch(n){if(!r)return null;throw n}};Fd.exports=tS});var Bd=k((zI,Ud)=>{"use strict";var rS=et(),nS=(t,e)=>{let r=rS(t,e);return r?r.version:null};Ud.exports=nS});var Jd=k((QI,Wd)=>{"use strict";var oS=et(),sS=(t,e)=>{let r=oS(t.trim().replace(/^[=v]+/,""),e);return r?r.version:null};Wd.exports=sS});var Kd=k((ZI,Gd)=>{"use strict";var qd=B(),iS=(t,e,r,n,o)=>{typeof r=="string"&&(o=n,n=r,r=void 0);try{return new qd(t instanceof qd?t.version:t,r).inc(e,n,o).version}catch{return null}};Gd.exports=iS});var Yd=k((eD,Xd)=>{"use strict";var Vd=et(),aS=(t,e)=>{let r=Vd(t,null,!0),n=Vd(e,null,!0),o=r.compare(n);if(o===0)return null;let s=o>0,i=s?r:n,a=s?n:r,l=!!i.prerelease.length;if(!!a.prerelease.length&&!l){if(!a.patch&&!a.minor)return"major";if(a.compareMain(i)===0)return a.minor&&!a.patch?"minor":"patch"}let d=l?"pre":"";return r.major!==n.major?d+"major":r.minor!==n.minor?d+"minor":r.patch!==n.patch?d+"patch":"prerelease"};Xd.exports=aS});var Qd=k((tD,zd)=>{"use strict";var lS=B(),cS=(t,e)=>new lS(t,e).major;zd.exports=cS});var ep=k((rD,Zd)=>{"use strict";var uS=B(),dS=(t,e)=>new uS(t,e).minor;Zd.exports=dS});var rp=k((nD,tp)=>{"use strict";var pS=B(),mS=(t,e)=>new pS(t,e).patch;tp.exports=mS});var op=k((oD,np)=>{"use strict";var fS=et(),hS=(t,e)=>{let r=fS(t,e);return r&&r.prerelease.length?r.prerelease:null};np.exports=hS});var ce=k((sD,ip)=>{"use strict";var sp=B(),gS=(t,e,r)=>new sp(t,r).compare(new sp(e,r));ip.exports=gS});var lp=k((iD,ap)=>{"use strict";var yS=ce(),wS=(t,e,r)=>yS(e,t,r);ap.exports=wS});var up=k((aD,cp)=>{"use strict";var SS=ce(),ES=(t,e)=>SS(t,e,!0);cp.exports=ES});var ro=k((lD,pp)=>{"use strict";var dp=B(),bS=(t,e,r)=>{let n=new dp(t,r),o=new dp(e,r);return n.compare(o)||n.compareBuild(o)};pp.exports=bS});var fp=k((cD,mp)=>{"use strict";var kS=ro(),TS=(t,e)=>t.sort((r,n)=>kS(r,n,e));mp.exports=TS});var gp=k((uD,hp)=>{"use strict";var RS=ro(),_S=(t,e)=>t.sort((r,n)=>RS(n,r,e));hp.exports=_S});var Ar=k((dD,yp)=>{"use strict";var vS=ce(),CS=(t,e,r)=>vS(t,e,r)>0;yp.exports=CS});var no=k((pD,wp)=>{"use strict";var xS=ce(),PS=(t,e,r)=>xS(t,e,r)<0;wp.exports=PS});var yi=k((mD,Sp)=>{"use strict";var AS=ce(),IS=(t,e,r)=>AS(t,e,r)===0;Sp.exports=IS});var wi=k((fD,Ep)=>{"use strict";var DS=ce(),NS=(t,e,r)=>DS(t,e,r)!==0;Ep.exports=NS});var oo=k((hD,bp)=>{"use strict";var OS=ce(),LS=(t,e,r)=>OS(t,e,r)>=0;bp.exports=LS});var so=k((gD,kp)=>{"use strict";var MS=ce(),$S=(t,e,r)=>MS(t,e,r)<=0;kp.exports=$S});var Si=k((yD,Tp)=>{"use strict";var jS=yi(),HS=wi(),FS=Ar(),US=oo(),BS=no(),WS=so(),JS=(t,e,r,n)=>{switch(e){case"===":return typeof t=="object"&&(t=t.version),typeof r=="object"&&(r=r.version),t===r;case"!==":return typeof t=="object"&&(t=t.version),typeof r=="object"&&(r=r.version),t!==r;case"":case"=":case"==":return jS(t,r,n);case"!=":return HS(t,r,n);case">":return FS(t,r,n);case">=":return US(t,r,n);case"<":return BS(t,r,n);case"<=":return WS(t,r,n);default:throw new TypeError(`Invalid operator: ${e}`)}};Tp.exports=JS});var _p=k((wD,Rp)=>{"use strict";var qS=B(),GS=et(),{safeRe:io,t:ao}=jt(),KS=(t,e)=>{if(t instanceof qS)return t;if(typeof t=="number"&&(t=String(t)),typeof t!="string")return null;e=e||{};let r=null;if(!e.rtl)r=t.match(e.includePrerelease?io[ao.COERCEFULL]:io[ao.COERCE]);else{let l=e.includePrerelease?io[ao.COERCERTLFULL]:io[ao.COERCERTL],c;for(;(c=l.exec(t))&&(!r||r.index+r[0].length!==t.length);)(!r||c.index+c[0].length!==r.index+r[0].length)&&(r=c),l.lastIndex=c.index+c[1].length+c[2].length;l.lastIndex=-1}if(r===null)return null;let n=r[2],o=r[3]||"0",s=r[4]||"0",i=e.includePrerelease&&r[5]?`-${r[5]}`:"",a=e.includePrerelease&&r[6]?`+${r[6]}`:"";return GS(`${n}.${o}.${s}${i}${a}`,e)};Rp.exports=KS});var Cp=k((SD,vp)=>{"use strict";var VS=et(),XS=$t(),YS=B(),zS=(t,e,r)=>{if(!XS.RELEASE_TYPES.includes(e))return null;let n=QS(t,r);return n&&ZS(n,e)},QS=(t,e)=>{let r=t instanceof YS?t.version:t;return VS(r,e)},ZS=(t,e)=>{if(eE(e))return t.version;switch(t.prerelease=[],e){case"major":t.minor=0,t.patch=0;break;case"minor":t.patch=0;break}return t.format()},eE=t=>t.startsWith("pre");vp.exports=zS});var Pp=k((ED,xp)=>{"use strict";var Ei=class{constructor(){this.max=1e3,this.map=new Map}get(e){let r=this.map.get(e);if(r!==void 0)return this.map.delete(e),this.map.set(e,r),r}delete(e){return this.map.delete(e)}set(e,r){if(!this.delete(e)&&r!==void 0){if(this.map.size>=this.max){let o=this.map.keys().next().value;this.delete(o)}this.map.set(e,r)}return this}};xp.exports=Ei});var ue=k((bD,Np)=>{"use strict";var tE=/\s+/g,bi=class t{constructor(e,r){if(r=nE(r),e instanceof t)return e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease?e:new t(e.raw,r);if(e instanceof ki)return this.raw=e.value,this.set=[[e]],this.formatted=void 0,this;if(this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease,this.raw=e.trim().replace(tE," "),this.set=this.raw.split("||").map(n=>this.parseRange(n.trim())).filter(n=>n.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){let n=this.set[0];if(this.set=this.set.filter(o=>!Ip(o[0])),this.set.length===0)this.set=[n];else if(this.set.length>1){for(let o of this.set)if(o.length===1&&pE(o[0])){this.set=[o];break}}}this.formatted=void 0}get range(){if(this.formatted===void 0){this.formatted="";for(let e=0;e<this.set.length;e++){e>0&&(this.formatted+="||");let r=this.set[e];for(let n=0;n<r.length;n++)n>0&&(this.formatted+=" "),this.formatted+=r[n].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(e){e=e.replace(dE,"");let n=((this.options.includePrerelease&&cE)|(this.options.loose&&uE))+":"+e,o=Ap.get(n);if(o)return o;let s=this.options.loose,i=s?X[W.HYPHENRANGELOOSE]:X[W.HYPHENRANGE];e=e.replace(i,kE(this.options.includePrerelease)),O("hyphen replace",e),e=e.replace(X[W.COMPARATORTRIM],iE),O("comparator trim",e),e=e.replace(X[W.TILDETRIM],aE),O("tilde trim",e),e=e.replace(X[W.CARETTRIM],lE),O("caret trim",e);let a=e.split(" ").map(u=>mE(u,this.options)).join(" ").split(/\s+/).map(u=>bE(u,this.options));s&&(a=a.filter(u=>(O("loose invalid filter",u,this.options),!!u.match(X[W.COMPARATORLOOSE])))),O("range list",a);let l=new Map,c=a.map(u=>new ki(u,this.options));for(let u of c){if(Ip(u))return[u];l.set(u.value,u)}l.size>1&&l.has("")&&l.delete("");let d=[...l.values()];return Ap.set(n,d),d}intersects(e,r){if(!(e instanceof t))throw new TypeError("a Range is required");return this.set.some(n=>Dp(n,r)&&e.set.some(o=>Dp(o,r)&&n.every(s=>o.every(i=>s.intersects(i,r)))))}test(e){if(!e)return!1;if(typeof e=="string")try{e=new oE(e,this.options)}catch{return!1}for(let r=0;r<this.set.length;r++)if(TE(this.set[r],e,this.options))return!0;return!1}};Np.exports=bi;var rE=Pp(),Ap=new rE,nE=zn(),ki=Ir(),O=Pr(),oE=B(),{safeRe:X,src:sE,t:W,comparatorTrimReplace:iE,tildeTrimReplace:aE,caretTrimReplace:lE}=jt(),{FLAG_INCLUDE_PRERELEASE:cE,FLAG_LOOSE:uE}=$t(),dE=new RegExp(sE[W.BUILD],"g"),Ip=t=>t.value==="<0.0.0-0",pE=t=>t.value==="",Dp=(t,e)=>{let r=!0,n=t.slice(),o=n.pop();for(;r&&n.length;)r=n.every(s=>o.intersects(s,e)),o=n.pop();return r},mE=(t,e)=>(t=t.replace(X[W.BUILD],""),O("comp",t,e),t=gE(t,e),O("caret",t),t=fE(t,e),O("tildes",t),t=wE(t,e),O("xrange",t),t=EE(t,e),O("stars",t),t),Y=t=>!t||t.toLowerCase()==="x"||t==="*",fE=(t,e)=>t.trim().split(/\s+/).map(r=>hE(r,e)).join(" "),hE=(t,e)=>{let r=e.loose?X[W.TILDELOOSE]:X[W.TILDE];return t.replace(r,(n,o,s,i,a)=>{O("tilde",t,n,o,s,i,a);let l;return Y(o)?l="":Y(s)?l=`>=${o}.0.0 <${+o+1}.0.0-0`:Y(i)?l=`>=${o}.${s}.0 <${o}.${+s+1}.0-0`:a?(O("replaceTilde pr",a),l=`>=${o}.${s}.${i}-${a} <${o}.${+s+1}.0-0`):l=`>=${o}.${s}.${i} <${o}.${+s+1}.0-0`,O("tilde return",l),l})},gE=(t,e)=>t.trim().split(/\s+/).map(r=>yE(r,e)).join(" "),yE=(t,e)=>{O("caret",t,e);let r=e.loose?X[W.CARETLOOSE]:X[W.CARET],n=e.includePrerelease?"-0":"";return t.replace(r,(o,s,i,a,l)=>{O("caret",t,o,s,i,a,l);let c;return Y(s)?c="":Y(i)?c=`>=${s}.0.0${n} <${+s+1}.0.0-0`:Y(a)?s==="0"?c=`>=${s}.${i}.0${n} <${s}.${+i+1}.0-0`:c=`>=${s}.${i}.0${n} <${+s+1}.0.0-0`:l?(O("replaceCaret pr",l),s==="0"?i==="0"?c=`>=${s}.${i}.${a}-${l} <${s}.${i}.${+a+1}-0`:c=`>=${s}.${i}.${a}-${l} <${s}.${+i+1}.0-0`:c=`>=${s}.${i}.${a}-${l} <${+s+1}.0.0-0`):(O("no pr"),s==="0"?i==="0"?c=`>=${s}.${i}.${a}${n} <${s}.${i}.${+a+1}-0`:c=`>=${s}.${i}.${a}${n} <${s}.${+i+1}.0-0`:c=`>=${s}.${i}.${a} <${+s+1}.0.0-0`),O("caret return",c),c})},wE=(t,e)=>(O("replaceXRanges",t,e),t.split(/\s+/).map(r=>SE(r,e)).join(" ")),SE=(t,e)=>{t=t.trim();let r=e.loose?X[W.XRANGELOOSE]:X[W.XRANGE];return t.replace(r,(n,o,s,i,a,l)=>{O("xRange",t,n,o,s,i,a,l);let c=Y(s),d=c||Y(i),u=d||Y(a),m=u;return o==="="&&m&&(o=""),l=e.includePrerelease?"-0":"",c?o===">"||o==="<"?n="<0.0.0-0":n="*":o&&m?(d&&(i=0),a=0,o===">"?(o=">=",d?(s=+s+1,i=0,a=0):(i=+i+1,a=0)):o==="<="&&(o="<",d?s=+s+1:i=+i+1),o==="<"&&(l="-0"),n=`${o+s}.${i}.${a}${l}`):d?n=`>=${s}.0.0${l} <${+s+1}.0.0-0`:u&&(n=`>=${s}.${i}.0${l} <${s}.${+i+1}.0-0`),O("xRange return",n),n})},EE=(t,e)=>(O("replaceStars",t,e),t.trim().replace(X[W.STAR],"")),bE=(t,e)=>(O("replaceGTE0",t,e),t.trim().replace(X[e.includePrerelease?W.GTE0PRE:W.GTE0],"")),kE=t=>(e,r,n,o,s,i,a,l,c,d,u,m)=>(Y(n)?r="":Y(o)?r=`>=${n}.0.0${t?"-0":""}`:Y(s)?r=`>=${n}.${o}.0${t?"-0":""}`:i?r=`>=${r}`:r=`>=${r}${t?"-0":""}`,Y(c)?l="":Y(d)?l=`<${+c+1}.0.0-0`:Y(u)?l=`<${c}.${+d+1}.0-0`:m?l=`<=${c}.${d}.${u}-${m}`:t?l=`<${c}.${d}.${+u+1}-0`:l=`<=${l}`,`${r} ${l}`.trim()),TE=(t,e,r)=>{for(let n=0;n<t.length;n++)if(!t[n].test(e))return!1;if(e.prerelease.length&&!r.includePrerelease){for(let n=0;n<t.length;n++)if(O(t[n].semver),t[n].semver!==ki.ANY&&t[n].semver.prerelease.length>0){let o=t[n].semver;if(o.major===e.major&&o.minor===e.minor&&o.patch===e.patch)return!0}return!1}return!0}});var Ir=k((kD,Hp)=>{"use strict";var Dr=Symbol("SemVer ANY"),_i=class t{static get ANY(){return Dr}constructor(e,r){if(r=Op(r),e instanceof t){if(e.loose===!!r.loose)return e;e=e.value}e=e.trim().split(/\s+/).join(" "),Ri("comparator",e,r),this.options=r,this.loose=!!r.loose,this.parse(e),this.semver===Dr?this.value="":this.value=this.operator+this.semver.version,Ri("comp",this)}parse(e){let r=this.options.loose?Lp[Mp.COMPARATORLOOSE]:Lp[Mp.COMPARATOR],n=e.match(r);if(!n)throw new TypeError(`Invalid comparator: ${e}`);this.operator=n[1]!==void 0?n[1]:"",this.operator==="="&&(this.operator=""),n[2]?this.semver=new $p(n[2],this.options.loose):this.semver=Dr}toString(){return this.value}test(e){if(Ri("Comparator.test",e,this.options.loose),this.semver===Dr||e===Dr)return!0;if(typeof e=="string")try{e=new $p(e,this.options)}catch{return!1}return Ti(e,this.operator,this.semver,this.options)}intersects(e,r){if(!(e instanceof t))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new jp(e.value,r).test(this.value):e.operator===""?e.value===""?!0:new jp(this.value,r).test(e.semver):(r=Op(r),r.includePrerelease&&(this.value==="<0.0.0-0"||e.value==="<0.0.0-0")||!r.includePrerelease&&(this.value.startsWith("<0.0.0")||e.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&e.operator.startsWith(">")||this.operator.startsWith("<")&&e.operator.startsWith("<")||this.semver.version===e.semver.version&&this.operator.includes("=")&&e.operator.includes("=")||Ti(this.semver,"<",e.semver,r)&&this.operator.startsWith(">")&&e.operator.startsWith("<")||Ti(this.semver,">",e.semver,r)&&this.operator.startsWith("<")&&e.operator.startsWith(">")))}};Hp.exports=_i;var Op=zn(),{safeRe:Lp,t:Mp}=jt(),Ti=Si(),Ri=Pr(),$p=B(),jp=ue()});var Nr=k((TD,Fp)=>{"use strict";var RE=ue(),_E=(t,e,r)=>{try{e=new RE(e,r)}catch{return!1}return e.test(t)};Fp.exports=_E});var Bp=k((RD,Up)=>{"use strict";var vE=ue(),CE=(t,e)=>new vE(t,e).set.map(r=>r.map(n=>n.value).join(" ").trim().split(" "));Up.exports=CE});var Jp=k((_D,Wp)=>{"use strict";var xE=B(),PE=ue(),AE=(t,e,r)=>{let n=null,o=null,s=null;try{s=new PE(e,r)}catch{return null}return t.forEach(i=>{s.test(i)&&(!n||o.compare(i)===-1)&&(n=i,o=new xE(n,r))}),n};Wp.exports=AE});var Gp=k((vD,qp)=>{"use strict";var IE=B(),DE=ue(),NE=(t,e,r)=>{let n=null,o=null,s=null;try{s=new DE(e,r)}catch{return null}return t.forEach(i=>{s.test(i)&&(!n||o.compare(i)===1)&&(n=i,o=new IE(n,r))}),n};qp.exports=NE});var Xp=k((CD,Vp)=>{"use strict";var vi=B(),OE=ue(),Kp=Ar(),LE=(t,e)=>{t=new OE(t,e);let r=new vi("0.0.0");if(t.test(r)||(r=new vi("0.0.0-0"),t.test(r)))return r;r=null;for(let n=0;n<t.set.length;++n){let o=t.set[n],s=null;o.forEach(i=>{let a=new vi(i.semver.version);switch(i.operator){case">":a.prerelease.length===0?a.patch++:a.prerelease.push(0),a.raw=a.format();case"":case">=":(!s||Kp(a,s))&&(s=a);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${i.operator}`)}}),s&&(!r||Kp(r,s))&&(r=s)}return r&&t.test(r)?r:null};Vp.exports=LE});var zp=k((xD,Yp)=>{"use strict";var ME=ue(),$E=(t,e)=>{try{return new ME(t,e).range||"*"}catch{return null}};Yp.exports=$E});var lo=k((PD,tm)=>{"use strict";var jE=B(),em=Ir(),{ANY:HE}=em,FE=ue(),UE=Nr(),Qp=Ar(),Zp=no(),BE=so(),WE=oo(),JE=(t,e,r,n)=>{t=new jE(t,n),e=new FE(e,n);let o,s,i,a,l;switch(r){case">":o=Qp,s=BE,i=Zp,a=">",l=">=";break;case"<":o=Zp,s=WE,i=Qp,a="<",l="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(UE(t,e,n))return!1;for(let c=0;c<e.set.length;++c){let d=e.set[c],u=null,m=null;if(d.forEach(f=>{f.semver===HE&&(f=new em(">=0.0.0")),u=u||f,m=m||f,o(f.semver,u.semver,n)?u=f:i(f.semver,m.semver,n)&&(m=f)}),u.operator===a||u.operator===l||(!m.operator||m.operator===a)&&s(t,m.semver))return!1;if(m.operator===l&&i(t,m.semver))return!1}return!0};tm.exports=JE});var nm=k((AD,rm)=>{"use strict";var qE=lo(),GE=(t,e,r)=>qE(t,e,">",r);rm.exports=GE});var sm=k((ID,om)=>{"use strict";var KE=lo(),VE=(t,e,r)=>KE(t,e,"<",r);om.exports=VE});var lm=k((DD,am)=>{"use strict";var im=ue(),XE=(t,e,r)=>(t=new im(t,r),e=new im(e,r),t.intersects(e,r));am.exports=XE});var um=k((ND,cm)=>{"use strict";var YE=Nr(),zE=ce();cm.exports=(t,e,r)=>{let n=[],o=null,s=null,i=t.sort((d,u)=>zE(d,u,r));for(let d of i)YE(d,e,r)?(s=d,o||(o=d)):(s&&n.push([o,s]),s=null,o=null);o&&n.push([o,null]);let a=[];for(let[d,u]of n)d===u?a.push(d):!u&&d===i[0]?a.push("*"):u?d===i[0]?a.push(`<=${u}`):a.push(`${d} - ${u}`):a.push(`>=${d}`);let l=a.join(" || "),c=typeof e.raw=="string"?e.raw:String(e);return l.length<c.length?l:e}});var gm=k((OD,hm)=>{"use strict";var dm=ue(),Pi=Ir(),{ANY:Ci}=Pi,xi=Nr(),Ai=ce(),QE=(t,e,r={})=>{if(t===e)return!0;t=new dm(t,r),e=new dm(e,r);let n=!1;e:for(let o of t.set){for(let s of e.set){let i=eb(o,s,r);if(n=n||i!==null,i)continue e}if(n)return!1}return!0},ZE=[new Pi(">=0.0.0-0")],pm=[new Pi(">=0.0.0")],eb=(t,e,r)=>{if(t===e)return!0;if(t.length===1&&t[0].semver===Ci){if(e.length===1&&e[0].semver===Ci)return!0;r.includePrerelease?t=ZE:t=pm}if(e.length===1&&e[0].semver===Ci){if(r.includePrerelease)return!0;e=pm}let n=new Set,o,s;for(let f of t)f.operator===">"||f.operator===">="?o=mm(o,f,r):f.operator==="<"||f.operator==="<="?s=fm(s,f,r):n.add(f.semver);if(n.size>1)return null;let i;if(o&&s){if(i=Ai(o.semver,s.semver,r),i>0)return null;if(i===0&&(o.operator!==">="||s.operator!=="<="))return null}for(let f of n){if(o&&!xi(f,String(o),r)||s&&!xi(f,String(s),r))return null;for(let w of e)if(!xi(f,String(w),r))return!1;return!0}let a,l,c,d,u=s&&!r.includePrerelease&&s.semver.prerelease.length?s.semver:!1,m=o&&!r.includePrerelease&&o.semver.prerelease.length?o.semver:!1;u&&u.prerelease.length===1&&s.operator==="<"&&u.prerelease[0]===0&&(u=!1);for(let f of e){if(d=d||f.operator===">"||f.operator===">=",c=c||f.operator==="<"||f.operator==="<=",o){if(m&&f.semver.prerelease&&f.semver.prerelease.length&&f.semver.major===m.major&&f.semver.minor===m.minor&&f.semver.patch===m.patch&&(m=!1),f.operator===">"||f.operator===">="){if(a=mm(o,f,r),a===f&&a!==o)return!1}else if(o.operator===">="&&!f.test(o.semver))return!1}if(s){if(u&&f.semver.prerelease&&f.semver.prerelease.length&&f.semver.major===u.major&&f.semver.minor===u.minor&&f.semver.patch===u.patch&&(u=!1),f.operator==="<"||f.operator==="<="){if(l=fm(s,f,r),l===f&&l!==s)return!1}else if(s.operator==="<="&&!f.test(s.semver))return!1}if(!f.operator&&(s||o)&&i!==0)return!1}return!(o&&c&&!s&&i!==0||s&&d&&!o&&i!==0||m||u)},mm=(t,e,r)=>{if(!t)return e;let n=Ai(t.semver,e.semver,r);return n>0?t:n<0||e.operator===">"&&t.operator===">="?e:t},fm=(t,e,r)=>{if(!t)return e;let n=Ai(t.semver,e.semver,r);return n<0?t:n>0||e.operator==="<"&&t.operator==="<="?e:t};hm.exports=QE});var Em=k((LD,Sm)=>{"use strict";var Ii=jt(),ym=$t(),tb=B(),wm=fi(),rb=et(),nb=Bd(),ob=Jd(),sb=Kd(),ib=Yd(),ab=Qd(),lb=ep(),cb=rp(),ub=op(),db=ce(),pb=lp(),mb=up(),fb=ro(),hb=fp(),gb=gp(),yb=Ar(),wb=no(),Sb=yi(),Eb=wi(),bb=oo(),kb=so(),Tb=Si(),Rb=_p(),_b=Cp(),vb=Ir(),Cb=ue(),xb=Nr(),Pb=Bp(),Ab=Jp(),Ib=Gp(),Db=Xp(),Nb=zp(),Ob=lo(),Lb=nm(),Mb=sm(),$b=lm(),jb=um(),Hb=gm();Sm.exports={parse:rb,valid:nb,clean:ob,inc:sb,diff:ib,major:ab,minor:lb,patch:cb,prerelease:ub,compare:db,rcompare:pb,compareLoose:mb,compareBuild:fb,sort:hb,rsort:gb,gt:yb,lt:wb,eq:Sb,neq:Eb,gte:bb,lte:kb,cmp:Tb,coerce:Rb,truncate:_b,Comparator:vb,Range:Cb,satisfies:xb,toComparators:Pb,maxSatisfying:Ab,minSatisfying:Ib,minVersion:Db,validRange:Nb,outside:Ob,gtr:Lb,ltr:Mb,intersects:$b,simplifyRange:jb,subset:Hb,SemVer:tb,re:Ii.re,src:Ii.src,tokens:Ii.t,SEMVER_SPEC_VERSION:ym.SEMVER_SPEC_VERSION,RELEASE_TYPES:ym.RELEASE_TYPES,compareIdentifiers:wm.compareIdentifiers,rcompareIdentifiers:wm.rcompareIdentifiers}});var Xk={};fa(Xk,{buildCodexBootstrapOutput:()=>Bf,main:()=>Jf,runCodexPluginBootstrap:()=>Wf});module.exports=Qf(Xk);var qr=require("node:path"),Uf=require("node:url");var Xt=require("node:fs");var ga=require("node:path"),Zf="JOLLI_LOCAL_AGENT_CHILD",eh=".jolli-local-agent-child";function Zr(t=process.env,e){return t[Zf]==="1"?!0:e!==void 0&&(0,Xt.existsSync)((0,ga.join)(e,eh))}te();Re();Xe();ae();var vo=require("node:fs/promises"),ht=require("node:path"),Cf=require("node:url");var as=require("node:fs"),Hl=require("node:fs/promises"),ls=require("node:os"),ar=require("node:path");h();Ce();var WR=p("AntigravityDetector"),Fl=["antigravity","antigravity-ide","antigravity-cli"];function Ul(t=(0,ls.homedir)()){let e=[];for(let r of Fl){let n=(0,ar.join)(t,".gemini",r),o=(0,ar.join)(n,"conversations");(0,as.existsSync)(o)&&e.push({variant:r,root:n,conversationsDir:o,brainDir:(0,ar.join)(n,"brain")})}return e}async function wg(t){for(let e of Ul(t))try{if((await(0,Hl.readdir)(e.conversationsDir)).some(r=>r.endsWith(".db")))return!0}catch{}return!1}async function Bl(t=(0,ls.homedir)()){return await wg(t)?!0:Fl.some(e=>(0,as.existsSync)((0,ar.join)(t,".gemini",e)))}h();var yn="mcp__";function lr(t){return{name:t,kind:"builtin",calls:0}}function cs(t){return{name:t,kind:"skill",calls:0}}function vt(t,e){return{name:e?`${t}.${e}`:t,kind:"mcp",server:t,calls:0}}function wn(t){if(!t.startsWith(yn))return lr(t);let e=t.slice(yn.length),r=e.indexOf("__");return r===-1?vt(e,""):vt(e.slice(0,r),e.slice(r+2))}function Wl(t,e){if(e===void 0||e.length===0)return lr(t);if(!e.startsWith(yn))return vt(e,t);let r=e.slice(yn.length).split("__"),n=r[r.length-1]||r[0]||e;return vt(n,t)}function Sg(t,e){let r=Math.max(t.lastCallAtMs??Number.NEGATIVE_INFINITY,e.lastCallAtMs??Number.NEGATIVE_INFINITY);return Number.isFinite(r)?{lastCallAtMs:r}:{}}var at=class{constructor(){this.byKey=new Map;this.seen=new Set}add(e,r=1){let n=`${e.kind}:${e.name}`,o=this.byKey.get(n);if(!o){this.byKey.set(n,{...e,calls:r});return}this.byKey.set(n,{...o,calls:o.calls+r,...Sg(o,e)})}addOnce(e,r){if(e!==void 0){if(this.seen.has(e))return;this.seen.add(e)}this.add(r)}hasSeen(e){return this.seen.has(e)}values(){return[...this.byKey.values()]}};h();h();function ps(t){if(t===void 0)return;let e=Date.parse(t);return Number.isFinite(e)?e:void 0}function Jl(...t){let e=t.filter(r=>r!==void 0);return e.length>0?{lastCallAtMs:Math.max(...e)}:{}}var Vl=p("TranscriptParser"),Sn=class{parseLine(e,r){return Yl(e,r)}parseUsageTokens(e,r){let n=Kl(e);return n?{input:n.input,output:n.output,cached:n.cached,...n.id&&{dedupKey:n.id}}:{input:0,output:0,cached:0}}parseUsageByModel(e){let r=new Map,n=new Set;for(let o of e){let s=Kl(o);if(!s)continue;if(s.id){if(n.has(s.id))continue;n.add(s.id)}let i=r.get(s.model);i?r.set(s.model,{...i,input:i.input+s.input,output:i.output+s.output,cached:i.cached+s.cached}):r.set(s.model,{model:s.model,provider:"anthropic",input:s.input,output:s.output,cached:s.cached})}return[...r.values()].filter(o=>o.input+o.output+o.cached>0)}parseToolUse(e){let r=new at;for(let n of e){let o;try{o=JSON.parse(n)}catch{continue}let s=o?.message?.content;if(!Array.isArray(s))continue;let i=ps(this.parseTimestamp(n));for(let a of s){let l=a;l.type!=="tool_use"||typeof l.name!="string"||r.addOnce(typeof l.id=="string"?l.id:void 0,{...l.name==="Skill"&&typeof l.input?.skill=="string"?cs(l.input.skill):wn(l.name),...i!==void 0&&{lastCallAtMs:i}})}}return r.values()}parseTimestamp(e,r){try{let n=JSON.parse(e);return typeof n.timestamp=="string"?n.timestamp:void 0}catch{return}}},us=class{parseLine(e,r){try{let n=JSON.parse(e),o=typeof n.timestamp=="string"?n.timestamp:void 0;if(n.type!=="event_msg")return null;let i=n.payload;if(!i||typeof i!="object")return null;let a=i.type;return a==="user_message"?Tg(i,o):a==="agent_message"?Rg(i,o):null}catch(n){return Vl.debug("Failed to parse Codex transcript line %d: %s",r,n.message),null}}parseToolUse(e){let r=new Map,n=[];for(let s of e){let i;try{i=JSON.parse(s)}catch{continue}let a=i?.payload;if(a===null||typeof a!="object")continue;let l=a;if(typeof l.type!="string"||!Eg.has(l.type))continue;let c=typeof l.invocation?.tool=="string"?l.invocation.tool:void 0,d=typeof l.invocation?.server=="string"?l.invocation.server:"",u;if(c!==void 0)u=d?vt(d,c):lr(c);else if(typeof l.name=="string"&&l.name.length>0)u=Wl(l.name,typeof l.namespace=="string"?l.namespace:void 0);else continue;let m=i.timestamp,f=ps(typeof m=="string"?m:void 0),w={...u,...f!==void 0&&{lastCallAtMs:f}},C=typeof l.call_id=="string"?l.call_id:void 0;if(C===void 0){n.push(w);continue}let _=r.get(C),S=_===void 0||_.kind!=="mcp"&&w.kind==="mcp"?w:_;r.set(C,{...S,..._?Jl(_.lastCallAtMs,w.lastCallAtMs):Jl(w.lastCallAtMs)})}let o=new at;for(let s of[...r.values(),...n])o.add(s);return o.values()}},Eg=new Set(["function_call","custom_tool_call","local_shell_call","web_search_call","mcp_tool_call_end"]),ds=class{parseLine(e,r){try{let n=JSON.parse(e),o=n.type,s=Gl(n);if(o==="turn.prompt"){let a=Xl(n.input)?.trim();return a?{role:"human",content:a,timestamp:s}:null}let i=kg(n);if(i&&i.type==="text"){let a=typeof i.text=="string"?i.text.trim():"";return a?{role:"assistant",content:a,timestamp:s}:null}return null}catch(n){return Vl.debug("Failed to parse Kimi transcript line %d: %s",r,n.message),null}}parseToolUse(e){let r=new at;for(let n of e){if(!n.includes(ql))continue;let o;try{o=JSON.parse(n)}catch{continue}if(o.type!==ql)continue;let s=o.event;if(s===null||typeof s!="object"||s.type!=="tool.call"||typeof s.name!="string")continue;let i=ps(this.parseTimestamp(n));r.addOnce(typeof s.toolCallId=="string"?s.toolCallId:void 0,{...s.name===bg&&typeof s.args?.skill=="string"?cs(s.args.skill):wn(s.name),...i!==void 0&&{lastCallAtMs:i}})}return r.values()}parseTimestamp(e,r){try{return Gl(JSON.parse(e))}catch{return}}},ql="context.append_loop_event",bg="Skill";function kg(t){if(t.type==="context.append_loop_event"){let e=t.event;return e?.type==="content.part"&&e.part&&typeof e.part=="object"?e.part:null}return t.type==="content.part"&&t.part&&typeof t.part=="object"?t.part:null}function Gl(t){let e=t.time??t.timestamp;return typeof e=="number"&&Number.isFinite(e)?new Date(e).toISOString():typeof e=="string"&&e.length>0?e:void 0}function Xl(t){if(typeof t=="string")return t.length>0?t:null;if(Array.isArray(t)){let e=[];for(let r of t){let n=Xl(r);n&&e.push(n)}return e.length>0?e.join(`
`):null}if(t!==null&&typeof t=="object"){let e=t;if((e.type==="text"||e.type===void 0)&&typeof e.text=="string"&&e.text.length>0)return e.text}return null}function Tg(t,e){let r=t.message;return typeof r!="string"||r.trim().length===0?null:{role:"human",content:r.trim(),timestamp:e}}function Rg(t,e){let r=t.message;return typeof r!="string"||r.trim().length===0?null:{role:"assistant",content:r.trim(),timestamp:e}}function Kl(t){try{return vg(JSON.parse(t))}catch{return null}}function _g(t){return t.startsWith("<")&&t.endsWith(">")}function vg(t){let e=t,r=e?.message?.usage??e?.usage;if(!r||typeof r!="object")return null;let n=i=>typeof r[i]=="number"?r[i]:0,o=e?.message?.model??e?.model,s=e?.message?.id;return{id:typeof s=="string"?s:"",model:typeof o=="string"&&!_g(o)?o:"",input:n("input_tokens"),output:n("output_tokens"),cached:n("cache_creation_input_tokens")}}var Cg=new Sn,xg=new us,Pg=new ds;function Ag(t){switch(t){case"codex":return xg;case"kimi":return Pg;case"claude":return Cg}}var Ig=["claude","codex","kimi"],Dg=["gemini","opencode","antigravity","cursor-cli","cline-cli","devin"],XR=new Set([...Ig.filter(t=>Ag(t).parseToolUse!==void 0),...Dg]);var ms=p("TranscriptReader");var Ng=["Base directory for this skill:","[Request interrupted by user"],Og=/<(?:system-reminder|ide_opened_file|ide_selection|local-command-caveat|command-name|command-message|command-args|local-command-stdout)>[\s\S]*?<\/(?:system-reminder|ide_opened_file|ide_selection|local-command-caveat|command-name|command-message|command-args|local-command-stdout)>/g;function Yl(t,e){try{let r=JSON.parse(t);if(r.isCompactSummary===!0)return ms.debug("Skipping compaction summary at line %d",e),null;if(!r.message||typeof r.message!="object")return null;let n=r.message,o=n.role,s=typeof r.timestamp=="string"?r.timestamp:void 0;if(o==="user")return Lg(n,s,e);if(o==="assistant"){let i=zl(n.content)?.trim();return i?{role:"assistant",content:i,timestamp:s}:null}return null}catch(r){return ms.debug("Failed to parse transcript line %d: %s",e,r.message),null}}function Lg(t,e,r){let n=zl(t.content);if(!n)return null;let o=Mg(n);return o.length===0?null:Ng.some(s=>o.startsWith(s))?(ms.debug("Skipping filtered user message at line %d",r),null):{role:"human",content:o,timestamp:e}}function Mg(t){return t.replace(Og,"").trim()}function zl(t){if(typeof t=="string")return t.length>0?t:null;if(Array.isArray(t)){let e=[];for(let r of t)if(r!==null&&typeof r=="object"){let n=r;n.type==="text"&&typeof n.text=="string"&&e.push(n.text)}return e.length>0?e.join(`
`):null}return null}te();xe();Ce();var h_=p("AntigravityDiscoverer"),g_=2880*60*1e3;var Ql=require("node:fs/promises"),bn=require("node:os"),hs=require("node:path");function $g(t=(0,bn.homedir)()){return(0,hs.join)(t,".cline","data")}function Zl(t=(0,bn.homedir)()){return(0,hs.join)($g(t),"sessions")}async function ec(t=(0,bn.homedir)()){try{return await(0,Ql.access)(Zl(t)),!0}catch{return!1}}h();xe();var T_=p("ClineCliDiscoverer"),R_=2880*60*1e3;var gs=require("node:fs/promises"),pr=require("node:os"),Tn=require("node:path");var kn=require("node:os"),dr=require("node:path");h();var C_=p("VscodeWorkspaceLocator"),tc=["Code","Code - Insiders","Cursor","VSCodium","Windsurf"];function $e(t,e=(0,kn.homedir)()){switch((0,kn.platform)()){case"darwin":return(0,dr.join)(e,"Library","Application Support",t);case"win32":return(0,dr.join)(process.env.APPDATA??(0,dr.join)(e,"AppData","Roaming"),t);default:return(0,dr.join)(e,".config",t)}}var jg="saoudrizwan.claude-dev";function Hg(t,e){return(0,Tn.join)($e(t,e),"User","globalStorage",jg)}function mr(t=(0,pr.homedir)()){return tc.map(e=>Hg(e,t))}function Rn(t){return(0,Tn.join)(t,"settings","cline_mcp_settings.json")}async function rc(t=(0,pr.homedir)()){for(let e of mr(t))try{return await(0,gs.access)((0,Tn.join)(e,"state","taskHistory.json")),!0}catch{}return!1}async function ys(t=(0,pr.homedir)()){let e=[];for(let r of mr(t))try{await(0,gs.access)(Rn(r)),e.push(r)}catch{}return e}async function nc(t=(0,pr.homedir)()){return(await ys(t)).length>0}h();xe();var O_=p("ClineDiscoverer"),L_=2880*60*1e3;var ws=require("node:fs/promises"),oc=require("node:os"),Ss=require("node:path");h();var H_=p("CodexDiscoverer"),F_=2880*60*1e3,Fg=".codex";async function Es(){let t=(0,Ss.join)((0,oc.homedir)(),Fg);try{return(await(0,ws.stat)(t)).isDirectory()}catch{return!1}}var ic=require("node:fs/promises"),ac=require("node:os"),bs=require("node:path");h();var Ug=p("CopilotChatDetector");function Bg(t){return(0,bs.join)($e("Code",t),"User","globalStorage","github.copilot-chat")}function Wg(t=(0,ac.homedir)()){return(0,bs.join)(t,".copilot","session-state")}async function sc(t){try{return(await(0,ic.stat)(t)).isDirectory()}catch(e){let r=e.code;return r!=="ENOENT"&&Ug.warn("Copilot Chat probe stat failed for %s (%s): %s",t,r??"unknown",e.message),!1}}async function lc(){let[t,e]=await Promise.all([sc(Bg()),sc(Wg())]);return t||e}h();var V_=p("CopilotChatDiscoverer"),X_=2880*60*1e3;var uc=require("node:fs/promises"),dc=require("node:os"),pc=require("node:path");h();Ce();var mc=p("CopilotDetector");function fc(){return(0,pc.join)((0,dc.homedir)(),".copilot","session-store.db")}async function hc(){return Me()?ks():(mc.info("Copilot CLI support disabled: this runtime is Node %s, requires %d.%d+ for built-in SQLite",process.versions.node,Le.major,Le.minor),!1)}async function ks(){let t=fc();try{return(await(0,uc.stat)(t)).isFile()}catch(e){let r=e.code;return r!=="ENOENT"&&mc.warn("Copilot DB stat failed (%s): %s",r??"unknown",e.message),!1}}h();Ce();var ov=p("CopilotDiscoverer"),sv=2880*60*1e3;var _n=require("node:fs/promises"),vn=require("node:os"),Ts=require("node:path");h();xe();var cv=p("CursorCliDiscoverer"),uv=2880*60*1e3;function qg(t=(0,vn.homedir)()){return(0,Ts.join)(t,".cursor")}function Gg(t=(0,vn.homedir)()){return(0,Ts.join)(qg(t),"chats")}async function gc(t=(0,vn.homedir)()){try{return(await(0,_n.stat)(Gg(t))).isDirectory()}catch{return!1}}var yc=require("node:fs/promises"),wc=require("node:path");h();Ce();var Kg=p("CursorDetector");function Sc(t){return(0,wc.join)($e("Cursor",t),"User","globalStorage","state.vscdb")}async function Ec(){return Me()?Rs():(Kg.info("Cursor support disabled: this runtime is Node %s, requires 22.13+ for built-in SQLite",process.versions.node),!1)}async function Rs(){let t=Sc();try{return(await(0,yc.stat)(t)).isFile()}catch{return!1}}h();Ce();var Ev=p("CursorDiscoverer"),bv=2880*60*1e3;var _s=require("node:fs/promises"),bc=require("node:os"),xt=require("node:path");h();Ce();var vv=p("DevinDiscoverer"),Cv=2880*60*1e3;function kc(t){let e=t??(0,bc.homedir)();if(process.platform==="win32")return(0,xt.join)(process.env.APPDATA??(0,xt.join)(e,"AppData","Roaming"),"devin","cli");let r=process.env.XDG_DATA_HOME,n=r&&r.length>0?r:(0,xt.join)(e,".local","share");return(0,xt.join)(n,"devin","cli")}function Vg(t){return(0,xt.join)(kc(t),"sessions.db")}async function Xg(){try{return(await(0,_s.stat)(Vg())).isFile()}catch{return!1}}async function Tc(){if(await Xg())return!0;try{return(await(0,_s.stat)(kc())).isDirectory()}catch{return!1}}var Rc=require("node:fs/promises"),_c=require("node:os"),vc=require("node:path");h();var Yg=p("GeminiDetector"),zg=".gemini";async function vs(){let t=(0,vc.join)((0,_c.homedir)(),zg);try{return(await(0,Rc.stat)(t)).isDirectory()}catch{return Yg.debug("Gemini directory not found: %s",t),!1}}te();fr();var Pn=require("node:fs/promises"),Xc=require("node:os"),Is=require("node:path");h();var Vv=p("KimiDiscoverer"),Xv=2880*60*1e3,cy=".kimi-code";function An(){return process.env.KIMI_CODE_HOME||(0,Is.join)((0,Xc.homedir)(),cy)}async function Yc(){let t=An();try{return(await(0,Pn.stat)(t)).isDirectory()}catch{return!1}}Re();ae();var zc={"claude-plugin":{host:"claude",localAgentTool:"claude-code"},"codex-plugin":{host:"codex",localAgentTool:"codex"}};function In(t){return t===void 0?void 0:zc[t]?.localAgentTool}function Qc(t){return(t===void 0?void 0:zc[t]?.host)??"claude"}async function Zc(t,e){let r=In(t);return r===void 0?null:e.localAgentTool===r&&e.aiProvider!==void 0?{tool:r,changedTool:!1,seededProvider:!1}:gn(n=>{let o=n.localAgentTool,s=o!==r,i=n.aiProvider===void 0;return!s&&!i?{update:null,result:{tool:r,changedTool:!1,seededProvider:!1}}:{update:i?{aiProvider:"local-agent",localAgentTool:r}:{localAgentTool:r},result:{tool:r,changedTool:s,previousTool:o,seededProvider:i}}})}var Ds={"claude-code":{label:"Claude Code",loginHint:"Run `claude` once and sign in to your subscription.",separateDesktopApp:"Claude Desktop"},codex:{label:"Codex",loginHint:"Run `codex login` to sign in with your ChatGPT plan.",separateDesktopApp:"the ChatGPT app"},"cursor-agent":{label:"Cursor",loginHint:"Run `cursor-agent login` to sign in to Cursor."},opencode:{label:"OpenCode",loginHint:"Run `opencode auth login` to connect a provider."},kimi:{label:"Kimi Code",loginHint:"Run `kimi login` to sign in to your Moonshot account."}};function Qe(t){return Ds[t]?.label??"Local agent"}function eu(t){return Ds[t]?.loginHint??"Sign in to your local agent CLI."}function tu(t){let e=Ds[t]?.separateDesktopApp;return e===void 0?null:`(This login is SEPARATE from ${e} \u2014 ${e} stays signed in on its own.)`}var ru=require("node:fs/promises"),nu=require("node:os"),Ns=require("node:path");h();Ce();var uy=p("OpenCodeDiscoverer"),nC=2880*60*1e3;function dy(){return process.env.XDG_DATA_HOME||(0,Ns.join)((0,nu.homedir)(),".local","share")}function py(){return(0,Ns.join)(dy(),"opencode","opencode.db")}async function ou(){return Me()?Os():(uy.info("OpenCode support disabled: this runtime is Node %s, requires %d.%d+ for built-in SQLite",process.versions.node,Le.major,Le.minor),!1)}async function Os(){let t=py();try{return(await(0,ru.stat)(t)).isFile()}catch{return!1}}h();ne();Re();ae();var uC=p("PushPendingStore");var dC=10080*60*1e3;var my=300*1e3,pC=Math.floor(my/3);Io();h();be();var EC=p("PushCompensation");h();Dn();h();fr();var xC=p("KBRepoDiscoverer");h();ne();Dn();Re();ae();var MC=p("PushControlStore");Xe();function Ms(){return"codex-plugin"}h();ne();var gy={app_installed:"First run after install; installId minted (once per machine). Props: none \u2014 count distinct install_id.",client_activated:"A GUI surface activated (VS Code activate / IntelliJ project open), carrying `surface_version`. First-seen (install_id, surface_version) \u2248 new + upgrade installs that launched. GUI-only \u2014 CLI new/upgrade is read from any event's surface_version.",surface_enabled:"A surface was enabled in a repo. Props: trigger.",surface_disabled:"A surface was disabled / opted out. Props: trigger, reason.",push_enabled:"Outbound push re-enabled for a repo (spec 306, per-repo push control). Props: trigger.",push_disabled:"Outbound push disabled for a repo (spec 306, per-repo push control). Props: trigger.",signin_started:"User initiated OAuth sign-in. Props: trigger.",signin_completed:"jolliApiKey minted \u2014 the conversion event. Props: api_key_minted.",signed_out:"User logged out. Props: none.",ai_provider_selected:"User chose jolli vs anthropic for LLM. Props: provider (discriminator).",memory_bank_migrated:"Migrate-to-Memory-Bank run. Props: outcome, repos, entries_bucket.",onboarding_progressed:"Per-install onboarding-funnel snapshot, emitted from a repo context and deduped by state tuple (+ daily heartbeat). Content-free \u2014 answers 'after install, where do people stall'. Props: in_git_repo, repo_enabled, capture_configured, capture_method (discriminator: local-agent/anthropic/jolli/none), memories_generated, memories_bucket.",command_invoked:'Any CLI command ran (auto-emitted). Props: command (discriminator), ok, duration_ms. MCP tool calls carry a `tool` property and are emitted per call (not per session); the session-level `command:"mcp"` event is suppressed.',recall_performed:"A recall was run. Props: hit, result_count_bucket.",search_performed:"A search was run. Props: query_len_bucket, result_count_bucket.",memory_pushed:"Memories pushed to a Space. Props: kind, created, plans_bucket.",export_performed:"Export run. Props: format (discriminator).",ai_source_detected:"A new AI source transcript was detected. Props: source (discriminator: claude/codex/cursor/\u2026).",settings_opened:"Settings UI opened (vscode/intellij). Props: tab (discriminator).",ingest_completed:"A drainIngest run finished. Props: outcome, ingested, idle (no-op when ingested=0), batches, route_calls, reconcile_calls, touched_slugs, topic_failures, duration_ms. Filter idle=true out for real-ingest latency/health metrics.",error_occurred:"A structured error was raised. Content-free schema: { where (stage/subsystem), code (enumerated), source? , retryable? }. Emitted via trackError(); never carries a message/stack/path.",queue_drained:"QueueWorker finished a drain. Props: ops, duration_ms.",sync_completed:"A memory-bank sync round finished. Props: outcome (discriminator), duration_ms.",toolwindow_opened:"The memory tool window was opened. Props: view.",view_switched:"Tool window view switched (current/bank/knowledge). Props: view (discriminator).",memory_committed:"User committed a memory via the Commit button. Props: files_bucket (bucketed changed-file count), has_conversations (bool), context_bucket (bucketed plans/context count).",memory_expanded:"A committed memory's details were expanded. Props: expanded.",memory_item_opened:"An item inside a memory was opened. Props: item_type (discriminator: conversation/file/plan/note/reference/shipped); render (conversation only: live/stored \u2014 whether the source transcript was reopened or the stored copy was shown); source (conversation only: the transcript source, e.g. claude/codex); status (file only: the git status code, e.g. A/M/D).",session_resumed:"A conversation session was resumed in a terminal. Props: source (discriminator).",recall_prompt_copied:"A recall prompt was copied to the clipboard. Props: none.",memory_ref_id_copied:"A memory reference id (JM-<docId>) was copied to the clipboard. Props: surface_area (discriminator: list/detail \u2014 which UI the chip was clicked in).",memory_pinned:"An item was pinned. Props: kind (discriminator).",memory_unpinned:"An item was unpinned. Props: kind (discriminator).",repo_switched:"User switched the active repo in the tool window's breadcrumb. Props: is_foreign (bool).",branch_switched:"User switched the active branch in the tool window's breadcrumb. Props: is_foreign (bool).",squash_performed:"User squashed commits. Props: count_bucket (bucketed number of commits squashed).",pr_created:"User created or updated a PR from the tool window. Props: action (discriminator: created/updated).",memory_shared:"User invoked Share for a branch's memories (read-only share link). Props: none.",key_rejected:"The server rejected the API key (401/403). Props: retried, where.",reauth_completed:"Re-authentication after a rejected key finished. Props: outcome.",dashboard_opened:"The local web dashboard was opened in a browser (surface web-local). Props: first_run (bool \u2014 first open in this browser profile; per-origin localStorage, so it re-reports across ports, browsers, or a storage clear).",dashboard_view_switched:"The local web dashboard's left-nav view was switched. Props: view (discriminator: stats/standup/repositories/memories). Distinct from view_switched, which is the IDE tool-window event with its own view vocabulary.",range_changed:"The dashboard time-range control was changed. Props: range (discriminator: 7d/30d/90d/custom).",chart_split_changed:"A dashboard card's split-by control was changed. Props: card (discriminator: tokens/mcp), split (discriminator)."};var WC=new Set(Object.keys(gy));var mx=p("PushControl");Xe();h();te();Re();sn();Mn();Dt();h();te();Xe();var Fe=class{constructor(e){this.cwd=e;this.kind="orphan-branch"}async readFile(e){return Oo(fe,e,this.cwd)}async batchReadFiles(e){return Lo(fe,e,this.cwd)}async writeFiles(e,r){if(he())return;if(await or(this.cwd??process.cwd()).catch(()=>null)!==null)throw new Error("orphan branch is frozen (cutover fence in place) \u2014 this process holds a pre-cutover storage object; restart it so writes route to the database");let{hasCutoverRow:o}=await Promise.resolve().then(()=>(Mn(),Su));if(await o(this.cwd??process.cwd()).catch(()=>!1))throw new Error("orphan branch is retired for this repository (cutover committed) \u2014 writes route to the database; re-run the operation from an up-to-date surface");await this.ensure(),await Pa(fe,e,r,this.cwd)}async listFiles(e){return[...await Mo(fe,e,this.cwd)]}async exists(){return Do(fe,this.cwd)}async ensure(){await No(fe,this.cwd)}};var td=require("node:zlib");It();var Zu=require("node:zlib");ir();function $n(t){return t.version>=4}function Ay(t){return[...t??[]].reverse()}function Nt(t){let e=Ay(t.children).flatMap(Nt),r=(t.topics??[]).map(n=>({...n,commitDate:t.commitDate,generatedAt:t.generatedAt}));return[...e,...r]}function Eu(t){let e=t.stats,r=e?.filesChanged??0,n=e?.insertions??0,o=e?.deletions??0;for(let s of t.children??[]){let i=Eu(s);r+=i.filesChanged,n+=i.insertions,o+=i.deletions}return{filesChanged:r,insertions:n,deletions:o}}function Sr(t){return t.diffStats?t.diffStats:(t.children?.length??0)>0?Eu(t):t.stats??{filesChanged:0,insertions:0,deletions:0}}function Gs(t){let e=t.conversationTurns??0,r=(t.children??[]).reduce((n,o)=>n+Gs(o),0);return e+r}function Ks(t){let e=t.conversationTokens??0,r=(t.children??[]).reduce((n,o)=>n+Ks(o),0);return e+r}function Vs(t){let e=t.conversationTokenBreakdown,r={input:e?.input??0,output:e?.output??0,cached:e?.cached??0};return(t.children??[]).reduce((n,o)=>{let s=Vs(o);return{input:n.input+s.input,output:n.output+s.output,cached:n.cached+s.cached}},{input:r.input,output:r.output,cached:r.cached})}function jn(t){let e=[],r=n=>{if(!n.children?.length)e.push(n);else for(let o of n.children)r(o)};for(let n of t.children??[])r(n);return e}function Hn(t){return $n(t)?(t.topics??[]).map(e=>({...e,commitDate:t.commitDate,generatedAt:t.generatedAt})):Nt(t)}function Er(t){let e=[t.commitHash];for(let r of t.children??[])e.push(...Er(r));return e}function Ot(t,e){return t.transcripts!==void 0?t.transcripts:Er(t).filter(r=>e.has(r))}function Iy(t){let e=jn(t);return e.length<=1?1:new Set(e.map(n=>new Date(n.generatedAt||n.commitDate).toISOString().substring(0,10))).size}function bu(t){let e=Iy(t),r=e===1?"1 day":`${e} days`,n=jn(t);if(n.length<=1)return r;let o=n.map(l=>new Date(l.generatedAt||l.commitDate).getTime()),s=new Date(Math.min(...o)),i=new Date(Math.max(...o)),a=l=>l.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});return`${r} (${a(s)} \u2014 ${a(i)})`}h();It();te();h();h();Qo();te();Re();sn();var ku=/-[0-9a-f]{8}$/;ir();var Dy="local-agent-auth";function Tu(t){return t.summaryError===Dy}pn();var Ny=new Set(["linear","jira","github"]);function Oy(t){return Ny.has(t)}function Xs(t){return Oy(t.source)?`${t.nativeId} \u2014 ${t.title}`:t.title}function q(t){return t.generatedAt||t.commitDate}function _u(t){try{return new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch{return t}}function Ys(t){try{return new Date(t).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})}catch{return t}}function Ru(t){return t.substring(0,10)}function Ly(t){return[...t].sort((e,r)=>{let n=Ru(e.generatedAt||e.commitDate||""),o=Ru(r.generatedAt||r.commitDate||"");if(n!==o)return n>o?-1:1;let s=e.importance==="minor"?1:0,i=r.importance==="minor"?1:0;return s-i})}function vu(t){return String(t+1).padStart(2,"0")}var My={"anthropic-config":"Anthropic","anthropic-env":"Anthropic (env)","jolli-proxy":"Jolli proxy","local-agent":"Local agent"};function $y(t,e){return e==="local-agent"?t.localAgentTool?`Local agent - ${Qe(t.localAgentTool)}`:"Local agent":My[e]}function Cu(t){let e=new Set,r=o=>{let s=o.llm;s?.source&&e.add($y(s,s.source));for(let i of o.children??[])r(i)};r(t);let n=[...e];if(n.length!==0)return n.length===1?n[0]:`mixed: ${n.join(", ")}`}function xu(t){let e=jn(t),r=Hn(t);return{topics:Ly(r.map((o,s)=>({...o,treeIndex:s}))),sourceNodes:e}}ns();var jy=/^transcripts\/(.+)\.json$/;function zs(t){return jy.exec(t)?.[1]??null}var Hy;async function Fy(t){let e=await Un(t);return e.ok?e.storage:(Qs.warn("system-of-record unavailable (%s) \u2014 falling back to the orphan branch. cwd=%s",e.reason,t),new Fe(t))}async function Uy(t,e){return t??Hy??await Fy(e)}var Qs=p("SummaryStore"),By="index.json";function Pu(t){let e=[];for(let r of t)r.e2eTestGuide&&e.push(...r.e2eTestGuide),r.children&&e.push(...Pu(r.children));return e}function Au(t){let{e2eTestGuide:e,...r}=t;return r.children?{...r,children:r.children.map(Au)}:r}function Iu(t){let e=new Map;for(let r of t){if(r.plans)for(let n of r.plans){let o=n.slug,s=e.get(o);(!s||n.updatedAt>s.updatedAt)&&e.set(o,n)}if(r.children)for(let n of Iu(r.children)){let o=e.get(n.slug);(!o||n.updatedAt>o.updatedAt)&&e.set(n.slug,n)}}return[...e.values()]}function Du(t){let{plans:e,...r}=t;return r.children?{...r,children:r.children.map(Du)}:r}function Nu(t){let e=new Map;for(let r of t){if(r.notes)for(let n of r.notes){let o=e.get(n.id);(!o||n.updatedAt>o.updatedAt)&&e.set(n.id,n)}if(r.children)for(let n of Nu(r.children)){let o=e.get(n.id);(!o||n.updatedAt>o.updatedAt)&&e.set(n.id,n)}}return[...e.values()]}function Ou(t){let{notes:e,...r}=t;return r.children?{...r,children:r.children.map(Ou)}:r}function Lu(t){let{references:e,...r}=t;return r.children?{...r,children:r.children.map(Lu)}:r}function Mu(t){let e=new Map;for(let r of t){let n=r.references??[];for(let o of n){let s=e.get(o.archivedKey);(!s||o.referencedAt>s.referencedAt)&&e.set(o.archivedKey,o)}if(r.children)for(let o of Mu(r.children)){let s=e.get(o.archivedKey);(!s||o.referencedAt>s.referencedAt)&&e.set(o.archivedKey,o)}}return[...e.values()]}function $u(t){let e=[];for(let r of t)e.push(...r.skills??[]),r.children&&e.push(...$u(r.children));return Nl(e)}function ju(t){let{jolliDocId:e,jolliDocUrl:r,jolliSkillsDocId:n,jolliSkillsDocUrl:o,orphanedDocIds:s,unresolvedOrphanHashes:i,...a}=t;return a.children?{...a,children:a.children.map(ju)}:a}function Hu(t){let e=[];for(let o of t){let s=o.jolliDocUrl;if(o.jolliDocId&&s&&e.push({jolliDocId:o.jolliDocId,jolliDocUrl:s,commitDate:o.commitDate,generatedAt:o.generatedAt}),o.children){let i=Hu(o.children);i.winner&&e.push({...i.winner})}}if(e.length===0)return{winner:null,orphanedDocIds:[]};e.sort((o,s)=>new Date(q(s)).getTime()-new Date(q(o)).getTime());let r=e[0],n=e.slice(1).map(o=>o.jolliDocId);return{winner:r,orphanedDocIds:n}}function Fu(t){let e=[];for(let r of t??[])r.orphanedDocIds&&e.push(...r.orphanedDocIds),e.push(...Fu(r.children));return e}function Uu(t){let e=[];for(let r of t??[])r.unresolvedOrphanHashes&&e.push(...r.unresolvedOrphanHashes),e.push(...Uu(r.children));return e}function Bu(t){if(t.version>=4)return t;let e=Pu([t]),r=Iu([t]),n=Nu([t]),o=Mu([t]),s=$u([t]),i=s.map(Dl),a=Hu([t]),l=Array.from(new Set([...a.orphanedDocIds,...t.orphanedDocIds??[],...Fu(t.children),...s.flatMap(C=>C.supersededDocIds??[])])),c=Array.from(new Set([...t.unresolvedOrphanHashes??[],...Uu(t.children)])),d=Wy(t),u=Jy(t),m=t.diffStats===void 0&&t.stats!==void 0?Sr(t):void 0,{stats:f,...w}=t;return{...w,version:4,topics:d,...u!==void 0?{recap:u}:{},...m!==void 0?{diffStats:m}:{},...e.length>0?{e2eTestGuide:e}:{},...r.length>0?{plans:r}:{},...n.length>0?{notes:n}:{},...o.length>0?{references:o}:{},...i.length>0?{skills:i}:{},...a.winner?{jolliDocId:a.winner.jolliDocId,jolliDocUrl:a.winner.jolliDocUrl}:{},...l.length>0?{orphanedDocIds:l}:{},...c.length>0?{unresolvedOrphanHashes:c}:{},...t.children!==void 0?{children:t.children.map(Gy)}:{}}}function Wu(t){let{topics:e,...r}=t;return r.children?{...r,children:r.children.map(Wu)}:r}function Ju(t){let{recap:e,...r}=t;return r.children?{...r,children:r.children.map(Ju)}:r}function Wy(t){return $n(t)?t.topics??[]:Nt(t).map(({commitDate:e,generatedAt:r,treeIndex:n,...o})=>o)}function Jy(t){return $n(t)||t.recap?t.recap:qy(t.children)}function qy(t){if(!t||t.length===0)return;let e=[];if(qu(t,e),e.length!==0)return e.sort((r,n)=>new Date(n.date).getTime()-new Date(r.date).getTime()),e[0]?.recap}function qu(t,e){for(let r of t)r.recap&&e.push({recap:r.recap,date:q(r)}),r.children&&qu(r.children,e)}function Gy(t){return ju(Lu(Ou(Du(Au(Wu(Ju(t)))))))}async function Fn(t,e){return Ky(t,e)}async function Ky(t,e){let r=await Uy(e,t),n=await r.readFile(By);if(!n)return Qs.debug("loadIndex: no index.json in %s storage",r.kind??"unknown"),null;try{return JSON.parse(n)}catch(o){return Qs.error("Failed to parse index.json: %s",o.message),null}}function Gu(t){let e=Hn(t).map(r=>({title:r.title,...r.decisions!==void 0&&{decisions:r.decisions},...r.category!==void 0&&{category:r.category},...r.importance!==void 0&&{importance:r.importance},...r.filesAffected&&r.filesAffected.length>0&&{filesAffected:r.filesAffected}}));return{commitHash:t.commitHash,...t.recap!==void 0&&{recap:t.recap},...t.ticketId!==void 0&&{ticketId:t.ticketId},...e.length>0&&{topics:e}}}var OP=p("ProcessedSourceStore");Xe();ir();h();var jP=p("TopicIndexStore");h();var BP=p("TopicPageStore");h();It();Ho();h();It();Js();Dt();var XP=p("ImportState");var YP=10*6e4;Dt();Nn();var bA=p("SotImport");function Ue(t){if(t==null)return null;try{return JSON.parse(t)}catch{return null}}function Xu(t){let e=/^#\s+(.+)$/m.exec(t);return e?e[1].trim():null}var Vy=[{path:["conversationTurns"],accepts:"integer"},{path:["conversationTokens"],accepts:"integer"},{path:["estimatedCostUsd"],accepts:"number"},{path:["diffStats","filesChanged"],accepts:"integer"},{path:["diffStats","insertions"],accepts:"integer"},{path:["diffStats","deletions"],accepts:"integer"}];function Yu(t,e,r){for(let{path:n,accepts:o}of Vy){let s=t;for(let a of n){if(s==null||typeof s!="object"){s=void 0;break}s=s[a]}s==null||(o==="integer"?Number.isInteger(s):typeof s=="number")||r("off-type numeric",`${e}.${n.join(".")} is ${typeof s} (${JSON.stringify(s)}) \u2014 column reads NULL`)}}function zu(t,e,r,n){let o=Date.parse(t.commitDate??"");return Number.isFinite(o)?o:(n("commit date",`${e} has no parsable commitDate \u2014 falling back to first-seen time`),r)}function Qu(t,e){let r=t.prepare("SELECT commit_hash, parent_hash, root_hash, depth FROM memories WHERE repo_id = ?").all(e),n=new Map,o=[];for(let l of r)if(l.parent_hash===null)o.push({hash:l.commit_hash,root:l.commit_hash,depth:0});else{let c=n.get(l.parent_hash)??[];c.push(l.commit_hash),n.set(l.parent_hash,c)}let s=t.prepare("UPDATE memories SET root_hash = ?, depth = ? WHERE repo_id = ? AND commit_hash = ?"),i=new Map(r.map(l=>[l.commit_hash,l])),a=0;for(;o.length>0;){let{hash:l,root:c,depth:d}=o.shift();a++;let u=i.get(l);(u.root_hash!==c||u.depth!==d)&&s.run(c,d,e,l);for(let m of n.get(l)??[])o.push({hash:m,root:c,depth:d+1})}if(a!==r.length)throw new Error(`remountRepo: ${r.length-a} node(s) unreachable from any root \u2014 cycle in batch`)}Nn();var ct=p("SotWrite"),Xy={plans:"plan",notes:"note",references:"reference",skills:"skill"};function Yy(t){let e=[],r=(n,o,s)=>{e.push({hash:n.commitHash,parentInFile:o,pos:s,summary:n}),(n.children??[]).forEach((i,a)=>{r(i,n.commitHash,a)})};return r(t,null,null),e}function zy(t){let e={summaryDeletes:[],summaryTrees:[],transcriptWrites:[],transcriptDeletes:[],contextWrites:[],contextDeletes:[],progressWrites:[],progressDeletes:[],topicPageWrites:[],topicPageDeletes:[],treeHashes:new Map,aliases:new Map,topicSummaries:new Map,processedSet:null,v5State:null};for(let r of t){let n=r.delete===!0,o=r.path.match(/^summaries\/([0-9a-f]+)\.json$/);if(o){if(n){e.summaryDeletes.push(o[1]);continue}let c=Ue(r.content);if(!c?.commitHash)throw new Error(`SotWrite: unparsable summary at ${r.path}`);e.summaryTrees.push(Yy(c));continue}if(r.path==="index.json"){if(n)continue;let c=Ue(r.content);for(let d of c?.entries??[])d.treeHash&&e.treeHashes.set(d.commitHash,d.treeHash);for(let[d,u]of Object.entries(c?.commitAliases??{}))e.aliases.set(d,u);continue}if(r.path==="catalog.json")continue;if(r.path==="topics/index.json"){if(n)continue;let c=Ue(r.content);for(let d of c?.topics??[])d.stableSlug&&d.summary!==void 0&&e.topicSummaries.set(d.stableSlug,d.summary);continue}if(r.path==="topics/processed.json"){e.processedSet=n?null:r.content;continue}if(r.path==="schema-v5-migration.json"){n||(e.v5State=r.content);continue}let s=r.path.match(/^transcripts\/(.+)\.json$/);if(s){n?e.transcriptDeletes.push(s[1]):e.transcriptWrites.push({id:s[1],content:r.content});continue}let i=r.path.match(/^(plans|notes|references|skills)\/(.+)\.md$/);if(i){let c=Xy[i[1]];n?e.contextDeletes.push({kind:c,key:i[2]}):e.contextWrites.push({kind:c,key:i[2],body:r.content});continue}let a=r.path.match(/^plan-progress\/(.+)\.json$/);if(a){n?e.progressDeletes.push(a[1]):e.progressWrites.push({pathSlug:a[1],content:r.content});continue}let l=r.path.match(/^topics\/([^/]+)\.json$/);if(l){n?e.topicPageDeletes.push(l[1]):e.topicPageWrites.push({slug:l[1],content:r.content});continue}throw new Error(`SotWrite: no table backs path ${r.path}`)}return e}function kr(t,e){ct.warn("SotWrite: dropping unparsable %s (%s) -- keeping the rest of the batch",t,e)}function Qy(t,e,r){let n=/-([0-9a-f]{8})$/.exec(r);return n?t.prepare("SELECT branch FROM memories WHERE repo_id = ? AND commit_hash LIKE ? || '%' LIMIT 1").get(e,n[1])?.branch??null:null}function Zy(t,e,r,n){for(let d of r.summaryDeletes)t.prepare("DELETE FROM memories WHERE repo_id = ? AND commit_hash = ?").run(e,d);if(r.summaryTrees.length===0)return;let o=new Set;for(let d of r.summaryTrees)for(let u of d)"children"in u.summary&&o.add(u.hash);let s=t.prepare(`UPDATE memories SET child_pos = child_pos + ${1e6}
		  WHERE repo_id = ? AND parent_hash = ? AND child_pos < ${1e6}`);for(let d of o)s.run(e,d);let i=new Map;for(let d of r.summaryTrees)for(let u of d){if(u.parentInFile===null||u.pos===null)continue;let m=i.get(u.parentInFile)??new Map;m.set(u.hash,u.pos),i.set(u.parentInFile,m)}let a=t.prepare(`INSERT INTO memories (repo_id, commit_hash, parent_hash, child_pos, root_hash, depth,
		                       summary_json, tree_hash, first_seen_ms, written_at_ms, commit_date_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(repo_id, commit_hash) DO UPDATE SET
		   parent_hash = excluded.parent_hash, child_pos = excluded.child_pos,
		   summary_json = excluded.summary_json,
		   tree_hash = COALESCE(excluded.tree_hash, memories.tree_hash),
		   written_at_ms = excluded.written_at_ms, commit_date_ms = excluded.commit_date_ms`),l=(d,u)=>ct.info("write degraded a value: %s %s",d,u);for(let d of r.summaryTrees)for(let u of d){let m=u.parentInFile,f=u.pos;if(u.parentInFile===null){let _=t.prepare("SELECT parent_hash, child_pos FROM memories WHERE repo_id = ? AND commit_hash = ?").get(e,u.hash);_&&(m=_.parent_hash,f=_.child_pos,f!==null&&f>=1e6&&((m===null?void 0:i.get(m))?.has(u.hash)||(m=null,f=null)))}let w=JSON.stringify("children"in u.summary?{...u.summary,children:[]}:u.summary);a.run(e,u.hash,m,f,u.hash,0,w,r.treeHashes.get(u.hash)??null,n,n,zu(u.summary,u.hash,n,l)),Yu(u.summary,u.hash,l),t.prepare("DELETE FROM memory_topics WHERE repo_id = ? AND commit_hash = ?").run(e,u.hash);let C=t.prepare("INSERT INTO memory_topics (repo_id, commit_hash, pos, category, importance, title) VALUES (?, ?, ?, ?, ?, ?)");(u.summary.topics??[]).forEach((_,S)=>{if(!_.title){l("topic",`${u.hash}[${S}] has no title`);return}C.run(e,u.hash,S,_.category??null,_.importance??null,_.title)})}let c=t.prepare(`UPDATE memories SET parent_hash = NULL, child_pos = NULL
		  WHERE repo_id = ? AND parent_hash = ? AND child_pos >= ${1e6}`);for(let d of o)c.run(e,d);Qu(t,e)}function ew(t,e,r,n){for(let[o,s]of r.aliases){if(!t.prepare("SELECT 1 AS ok FROM memories WHERE repo_id = ? AND commit_hash = ?").get(e,s)){ct.info("dropping alias %s -> %s (no such memory row)",o,s);continue}t.prepare(`INSERT INTO commit_aliases (repo_id, old_hash, target_hash, created_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, old_hash) DO UPDATE SET target_hash = excluded.target_hash`).run(e,o,s,n)}}function tw(t,e,r,n){let o=new Set;for(let s of r.transcriptDeletes)t.prepare("DELETE FROM transcript_sessions WHERE repo_id = ? AND transcript_id = ?").run(e,s),t.prepare("DELETE FROM memory_transcripts WHERE repo_id = ? AND transcript_id = ?").run(e,s),t.prepare("DELETE FROM transcripts WHERE repo_id = ? AND transcript_id = ?").run(e,s);for(let{id:s,content:i}of r.transcriptWrites){let a=Ue(i);if(!a||!Array.isArray(a.sessions)){kr("transcript",s);continue}t.prepare(`INSERT INTO transcripts (repo_id, transcript_id, sessions_blob, written_at_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, transcript_id) DO UPDATE SET sessions_blob = excluded.sessions_blob,
			   written_at_ms = excluded.written_at_ms`).run(e,s,(0,Zu.deflateSync)(Buffer.from(i,"utf8")),n),t.prepare("DELETE FROM transcript_sessions WHERE repo_id = ? AND transcript_id = ?").run(e,s);for(let l of a.sessions)l.sessionId&&t.prepare(`INSERT INTO transcript_sessions (repo_id, transcript_id, session_id, source) VALUES (?, ?, ?, ?)
				 ON CONFLICT(repo_id, transcript_id, session_id) DO UPDATE SET source = excluded.source`).run(e,s,l.sessionId,l.source??null);o.add(s)}return o}function rw(t,e,r,n){if(n.size===0)return;let o=new Set(r.summaryTrees.flat().map(c=>c.hash)),s=new Set(r.summaryTrees.flat().flatMap(c=>[...Ot(c.summary,n)])),i=[...n].filter(c=>!s.has(c));if(i.length===0)return;let a=t.prepare("SELECT commit_hash, summary_json FROM memories WHERE repo_id = ? AND summary_json LIKE ?"),l=t.prepare(`INSERT INTO memory_transcripts (repo_id, commit_hash, transcript_id) VALUES (?, ?, ?)
		 ON CONFLICT(repo_id, commit_hash, transcript_id) DO NOTHING`);for(let c of i){let d=a.all(e,`%${c}%`);for(let u of d){if(o.has(u.commit_hash))continue;let m=Ue(u.summary_json);m&&Ot(m,n).includes(c)&&(l.run(e,u.commit_hash,c),ct.info("linked stored transcript %s to memory %s written earlier",c,u.commit_hash))}}}function nw(t,e,r){if(r.summaryTrees.length===0)return;let n=new Set(t.prepare("SELECT transcript_id FROM transcripts WHERE repo_id = ?").all(e).map(o=>o.transcript_id));for(let o of r.summaryTrees)for(let s of o){let i=[...new Set(Ot(s.summary,n).filter(a=>n.has(a)))];for(let a of s.summary.transcripts??[])n.has(a)||ct.info("dropping dangling transcript link %s \u2192 %s (no transcript row)",s.hash,a);t.prepare("DELETE FROM memory_transcripts WHERE repo_id = ? AND commit_hash = ?").run(e,s.hash);for(let a of i)t.prepare("INSERT INTO memory_transcripts (repo_id, commit_hash, transcript_id) VALUES (?, ?, ?)").run(e,s.hash,a)}}function ow(t,e,r,n){for(let{kind:s,key:i}of r.contextDeletes)t.prepare("DELETE FROM context WHERE repo_id = ? AND kind = ? AND context_key = ?").run(e,s,i);let o=t.prepare(`INSERT INTO context (repo_id, kind, context_key, source, native_id, tool_name, referenced_at,
		                      original_slug, branch, title, url, body_md, created_at_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(repo_id, kind, context_key) DO UPDATE SET
		   source = excluded.source, native_id = excluded.native_id, tool_name = excluded.tool_name,
		   referenced_at = excluded.referenced_at, original_slug = excluded.original_slug,
		   branch = excluded.branch, title = excluded.title, url = excluded.url,
		   body_md = excluded.body_md, updated_at_ms = ?`);for(let{kind:s,key:i,body:a}of r.contextWrites){if(s==="reference"){let d=rs(a);if(!d){kr("reference frontmatter",`references/${i}.md`);continue}o.run(e,s,i,d.source,d.nativeId,d.toolName,d.referencedAt,null,null,d.title,d.url??null,a,n,n);continue}let l=s==="plan"||s==="note"?Qy(t,e,i):null,c=s==="plan"&&l!==null?i.replace(/-[0-9a-f]{8}$/,""):null;o.run(e,s,i,null,null,null,null,c,l,Xu(a),null,a,n,n)}}function sw(t,e,r,n){for(let o of r.progressDeletes)t.prepare("DELETE FROM plan_progress WHERE repo_id = ? AND plan_slug = ?").run(e,o);for(let{pathSlug:o,content:s}of r.progressWrites){let i=Ue(s);if(!i){kr("plan-progress",`plan-progress/${o}.json`);continue}let a=i.planSlug??o;if(!t.prepare("SELECT 1 AS ok FROM context WHERE repo_id = ? AND kind = 'plan' AND context_key = ?").get(e,a)){ct.warn("plan-progress for %s has no plan row -- skipping the artifact, keeping the rest of the batch",a);continue}t.prepare(`INSERT INTO plan_progress (repo_id, plan_slug, artifact_json, updated_at_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, plan_slug) DO UPDATE SET
			   artifact_json = excluded.artifact_json, updated_at_ms = excluded.updated_at_ms`).run(e,a,s,n)}}function iw(t,e,r,n){for(let o of r.topicPageDeletes)t.prepare("DELETE FROM topic_pages WHERE repo_id = ? AND stable_slug = ?").run(e,o);for(let{slug:o,content:s}of r.topicPageWrites){let i=Ue(s);if(!i?.stableSlug||i.title===void 0||i.content===void 0||!i.lastUpdatedAt){kr("topic page",`topics/${o}.json`);continue}t.prepare(`INSERT INTO topic_pages (repo_id, stable_slug, title, summary, content_md,
			                          related_branches_json, last_updated_at, payload_version)
			 VALUES (?, ?, ?, ?, ?, ?, ?, ?)
			 ON CONFLICT(repo_id, stable_slug) DO UPDATE SET
			   title = excluded.title, content_md = excluded.content_md,
			   related_branches_json = excluded.related_branches_json,
			   last_updated_at = excluded.last_updated_at, payload_version = excluded.payload_version`).run(e,i.stableSlug,i.title,r.topicSummaries.get(i.stableSlug)??null,i.content,JSON.stringify(i.relatedBranches??[]),i.lastUpdatedAt,i.schemaVersion??1),t.prepare("DELETE FROM topic_source_refs WHERE repo_id = ? AND stable_slug = ?").run(e,i.stableSlug),(i.sourceRefs??[]).forEach((a,l)=>{t.prepare(`INSERT INTO topic_source_refs (repo_id, stable_slug, pos, ref_type, ref_id, ts, branch)
				 VALUES (?, ?, ?, ?, ?, ?, ?)`).run(e,i.stableSlug,l,a.type,a.id,a.timestamp,a.branch??null)})}for(let[o,s]of r.topicSummaries){let i=t.prepare("UPDATE topic_pages SET summary = ? WHERE repo_id = ? AND stable_slug = ?").run(s,e,o);Number(i.changes)===0&&ct.info("topics/index.json names %s but no page row exists \u2014 summary dropped",o)}if(r.processedSet!==null){let o=Ue(r.processedSet);if(!o?.processed)kr("processed set","topics/processed.json");else{t.prepare("DELETE FROM topic_processed_sources WHERE repo_id = ?").run(e);let s=t.prepare(`INSERT INTO topic_processed_sources (repo_id, source_type, source_id) VALUES (?, ?, ?)
				 ON CONFLICT(repo_id, source_type, source_id) DO NOTHING`);for(let[i,a]of Object.entries(o.processed))for(let l of a)s.run(e,i,l)}}r.v5State!==null&&t.prepare(`INSERT INTO repo_state (repo_id, key, value) VALUES (?, 'v5-migration', ?)
			 ON CONFLICT(repo_id, key) DO UPDATE SET value = excluded.value`).run(e,r.v5State)}function ed(t,e,r,n){let o=zy(r);Bs(t,()=>{t.exec("PRAGMA defer_foreign_keys = ON"),Zy(t,e,o,n),ew(t,e,o,n);let s=tw(t,e,o,n);nw(t,e,o),rw(t,e,o,s),ow(t,e,o,n),sw(t,e,o,n),iw(t,e,o,n)})}h();function rd(t){let e=new Map;for(let r of t){if(r.parent_hash==null)continue;let n=e.get(r.parent_hash)??[];n.push(r),e.set(r.parent_hash,n)}for(let r of e.values())r.sort((n,o)=>Number(n.child_pos)-Number(o.child_pos));return e}function Zs(t,e){let r=JSON.parse(e.summary_json);return"children"in r&&(r.children=(t.get(e.commit_hash)??[]).map(n=>Zs(t,n))),r}function aw(t,e,r){let n=t.prepare("SELECT root_hash, parent_hash FROM memories WHERE repo_id = ? AND commit_hash = ?").get(e,r);if(!n)return;let o=(n.parent_hash===null?t.prepare(`SELECT commit_hash, parent_hash, child_pos, tree_hash, summary_json
					   FROM memories WHERE repo_id = ? AND root_hash = ?`):t.prepare(`WITH RECURSIVE subtree(commit_hash) AS (
					     SELECT commit_hash FROM memories WHERE repo_id = ?1 AND commit_hash = ?2
					     UNION ALL
					     SELECT m.commit_hash FROM memories m
					       JOIN subtree s ON m.parent_hash = s.commit_hash
					      WHERE m.repo_id = ?1
					   )
					   SELECT m.commit_hash, m.parent_hash, m.child_pos, m.tree_hash, m.summary_json
					     FROM memories m JOIN subtree ON subtree.commit_hash = m.commit_hash
					    WHERE m.repo_id = ?1`)).all(e,n.parent_hash===null?n.root_hash:r),s=o.find(i=>i.commit_hash===r);return s?Zs(rd(o),s):void 0}function lw(t){if(t===null)return{};try{return{diffStats:JSON.parse(t)}}catch{return{}}}var Lt=class{constructor(e,r){this.repoIdentity=e;this.dbPath=r;this.kind="sqlite"}async withDb(e){return Us(r=>{let n=r.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);if(!n)throw new Error(`SqliteStorage: no repos row for ${this.repoIdentity}`);return e(r,n.id)},{dbPath:this.dbPath})}async withDbOrAbsent(e,r){return Us(n=>{let o=n.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);return o?e(n,o.id):r},{dbPath:this.dbPath})}async readFile(e){return this.withDbOrAbsent((r,n)=>this.readOne(r,n,e),null)}async batchReadFiles(e){return this.withDbOrAbsent((r,n)=>{let o=new Map;for(let s of e)o.set(s,this.readOne(r,n,s));return o},new Map(e.map(r=>[r,null])))}readOne(e,r,n){let o=n.match(/^summaries\/([0-9a-f]+)\.json$/);if(o){let c=aw(e,r,o[1]);return c?JSON.stringify(c,null,"	"):null}if(n==="index.json")return this.synthIndex(e,r);if(n==="catalog.json")return this.synthCatalog(e,r);if(n==="topics/index.json")return this.synthTopicIndex(e,r);if(n==="topics/processed.json")return this.synthProcessed(e,r);if(n==="schema-v5-migration.json")return e.prepare("SELECT value FROM repo_state WHERE repo_id = ? AND key = 'v5-migration'").get(r)?.value??null;let s=n.match(/^topics\/([^/]+)\.json$/);if(s)return this.synthTopicPage(e,r,s[1]);let i=n.match(/^transcripts\/(.+)\.json$/);if(i){let c=e.prepare("SELECT sessions_blob FROM transcripts WHERE repo_id = ? AND transcript_id = ?").get(r,i[1]);return c?(0,td.inflateSync)(Buffer.from(c.sessions_blob)).toString("utf8"):null}let a=n.match(/^(plans|notes|references|skills)\/(.+)\.md$/);if(a){let c={plans:"plan",notes:"note",references:"reference",skills:"skill"}[a[1]];return e.prepare("SELECT body_md FROM context WHERE repo_id = ? AND kind = ? AND context_key = ?").get(r,c,a[2])?.body_md??null}let l=n.match(/^plan-progress\/(.+)\.json$/);return l?e.prepare("SELECT artifact_json FROM plan_progress WHERE repo_id = ? AND plan_slug = ?").get(r,l[1])?.artifact_json??null:null}allMemories(e,r){return e.prepare(`SELECT commit_hash, parent_hash, child_pos, tree_hash, summary_json, index_diff_stats_json
				   FROM memories WHERE repo_id = ? ORDER BY rowid`).all(r)}synthIndex(e,r){let n=e.prepare(`SELECT commit_hash, parent_hash, root_hash, tree_hash, commit_type, commit_message,
				        commit_date, branch, generated_at,
				        CASE WHEN parent_hash IS NULL
				             THEN COALESCE(json_extract(summary_json, '$.diffStats'), index_diff_stats_json)
				        END AS diff_stats_json
				   FROM memories WHERE repo_id = ? ORDER BY rowid`).all(r);if(n.length===0)return null;let o=new Map(e.prepare(`SELECT m.root_hash AS root, COUNT(t.rowid) AS n
						   FROM memories m
						   LEFT JOIN memory_topics t ON t.repo_id = m.repo_id AND t.commit_hash = m.commit_hash
						  WHERE m.repo_id = ? GROUP BY m.root_hash`).all(r).map(a=>[a.root,a.n])),s=n.map(a=>({commitHash:a.commit_hash,parentCommitHash:a.parent_hash,...a.tree_hash!==null&&{treeHash:a.tree_hash},...a.commit_type!==null&&{commitType:a.commit_type},commitMessage:a.commit_message??void 0,commitDate:a.commit_date??void 0,branch:a.branch??void 0,...a.generated_at!==null&&{generatedAt:a.generated_at},...a.parent_hash===null&&{topicCount:o.get(a.root_hash)??0,...lw(a.diff_stats_json)}})),i=e.prepare("SELECT old_hash, target_hash FROM commit_aliases WHERE repo_id = ? ORDER BY rowid").all(r);return JSON.stringify({version:3,entries:s,...i.length>0&&{commitAliases:Object.fromEntries(i.map(a=>[a.old_hash,a.target_hash]))}},null,"	")}synthCatalog(e,r){let n=this.allMemories(e,r);if(n.length===0)return null;let o=rd(n),s=n.filter(i=>i.parent_hash===null).map(i=>Gu(Zs(o,i)));return JSON.stringify({version:1,entries:s},null,"	")}topicRefs(e,r,n){return e.prepare(`SELECT ref_type, ref_id, ts, branch FROM topic_source_refs
				  WHERE repo_id = ? AND stable_slug = ? ORDER BY pos`).all(r,n).map(s=>({type:s.ref_type,id:s.ref_id,timestamp:s.ts,...s.branch!==null&&{branch:s.branch}}))}synthTopicPage(e,r,n){let o=e.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json,
				        last_updated_at, payload_version
				   FROM topic_pages WHERE repo_id = ? AND stable_slug = ?`).get(r,n);return o?JSON.stringify({schemaVersion:o.payload_version,stableSlug:o.stable_slug,title:o.title,content:o.content_md,relatedBranches:JSON.parse(o.related_branches_json),sourceRefs:this.topicRefs(e,r,n),lastUpdatedAt:o.last_updated_at},null,"	"):null}synthTopicIndex(e,r){let n=e.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json,
				        last_updated_at, payload_version
				   FROM topic_pages WHERE repo_id = ? ORDER BY rowid`).all(r);if(n.length===0)return null;let o=n.map(s=>({stableSlug:s.stable_slug,title:s.title,...s.summary!==null&&{summary:s.summary},relatedBranches:JSON.parse(s.related_branches_json),sourceRefs:this.topicRefs(e,r,s.stable_slug),lastUpdatedAt:s.last_updated_at}));return JSON.stringify({schemaVersion:1,topics:o},null,"	")}synthProcessed(e,r){let n=e.prepare("SELECT source_type, source_id FROM topic_processed_sources WHERE repo_id = ? ORDER BY rowid").all(r);if(n.length===0)return null;let o={summary:[],plan:[],note:[],userfile:[]};for(let s of n)o[s.source_type].push(s.source_id);return JSON.stringify({schemaVersion:1,processed:o},null,"	")}async listFiles(e){return this.withDbOrAbsent((r,n)=>{let o=(i,a)=>r.prepare(i).all(n).map(l=>a(l.v));return[...o("SELECT commit_hash AS v FROM memories WHERE repo_id = ?",i=>`summaries/${i}.json`),...o("SELECT transcript_id AS v FROM transcripts WHERE repo_id = ?",i=>`transcripts/${i}.json`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'plan'",i=>`plans/${i}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'note'",i=>`notes/${i}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'reference'",i=>`references/${i}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'skill'",i=>`skills/${i}.md`),...o("SELECT plan_slug AS v FROM plan_progress WHERE repo_id = ?",i=>`plan-progress/${i}.json`),...o("SELECT stable_slug AS v FROM topic_pages WHERE repo_id = ?",i=>`topics/${i}.json`),...o("SELECT 'index.json' AS v FROM memories WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'catalog.json' AS v FROM memories WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'topics/index.json' AS v FROM topic_pages WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'topics/processed.json' AS v FROM topic_processed_sources WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'schema-v5-migration.json' AS v FROM repo_state WHERE repo_id = ? AND key = 'v5-migration'",i=>i)].filter(i=>i.startsWith(e)).sort()},[])}async writeFiles(e,r){he()||await gu(n=>{let o=n.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);if(!o)throw new Error(`SqliteStorage: cannot write memories for unregistered ${this.repoIdentity}`);ed(n,o.id,e,Date.now())},{dbPath:this.dbPath})}async searchSignatureParts(){return this.withDbOrAbsent((e,r)=>{let n=e.prepare("SELECT COUNT(*) AS n, COALESCE(MAX(written_at_ms), 0) AS newest FROM memories WHERE repo_id = ?").get(r),o=e.prepare("SELECT COUNT(*) AS n, COALESCE(MAX(last_updated_at), '') AS newest FROM topic_pages WHERE repo_id = ?").get(r);return{memoriesCount:n.n,memoriesNewestMs:n.newest,topicCount:o.n,topicNewest:o.newest}},{memoriesCount:0,memoriesNewestMs:0,topicCount:0,topicNewest:""})}async lookupAlias(e){return this.withDbOrAbsent((r,n)=>r.prepare("SELECT target_hash FROM commit_aliases WHERE repo_id = ? AND old_hash = ?").get(n,e)?.target_hash??null,null)}async findShallowestByTreeHash(e){return this.withDbOrAbsent((r,n)=>r.prepare(`SELECT commit_hash FROM memories WHERE repo_id = ? AND tree_hash = ?
					  ORDER BY depth ASC, commit_date_ms DESC LIMIT 1`).get(n,e)?.commit_hash??null,null)}async findHashesByPrefix(e){return/^[0-9a-f]+$/.test(e)?this.withDbOrAbsent((r,n)=>r.prepare("SELECT commit_hash FROM memories WHERE repo_id = ? AND commit_hash LIKE ? || '%'").all(n,e).map(s=>s.commit_hash),[]):[]}async listHeadEntries(e){return this.withDbOrAbsent((r,n)=>r.prepare(`SELECT commit_hash, tree_hash, commit_type, commit_message, commit_date, branch, generated_at
					   FROM memories WHERE repo_id = ? AND parent_hash IS NULL${e!==void 0?" AND branch = ?":""}`).all(...e!==void 0?[n,e]:[n]).map(s=>({commitHash:s.commit_hash,parentCommitHash:null,...s.tree_hash!==null?{treeHash:s.tree_hash}:{},...s.commit_type!==null?{commitType:s.commit_type}:{},commitMessage:s.commit_message??"",commitDate:s.commit_date??"",branch:s.branch??"",generatedAt:s.generated_at??""})),[])}async topicTitlesByHash(){return this.withDbOrAbsent((e,r)=>{let n=e.prepare("SELECT commit_hash, title FROM memory_topics WHERE repo_id = ? ORDER BY commit_hash, pos").all(r),o=new Map;for(let s of n){let i=o.get(s.commit_hash)??[];i.push(s.title),o.set(s.commit_hash,i)}return o},new Map)}async listTopicSearchRows(){return this.withDbOrAbsent((e,r)=>{let n=e.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json, last_updated_at
					   FROM topic_pages WHERE repo_id = ?`).all(r),o=e.prepare("SELECT stable_slug, ref_type FROM topic_source_refs WHERE repo_id = ? ORDER BY pos").all(r),s=new Map;for(let i of o){let a=s.get(i.stable_slug)??[];a.push(i.ref_type),s.set(i.stable_slug,a)}return n.map(i=>({stableSlug:i.stable_slug,title:i.title,summary:i.summary,content:i.content_md,relatedBranches:JSON.parse(i.related_branches_json),lastUpdatedAt:i.last_updated_at,refTypes:s.get(i.stable_slug)??[]}))},[])}async listRootSummaries(){return this.withDbOrAbsent((e,r)=>e.prepare("SELECT commit_hash FROM memories WHERE repo_id = ? AND parent_hash IS NULL").all(r).map(o=>this.readOne(e,r,`summaries/${o.commit_hash}.json`)).filter(o=>o!==null).map(o=>JSON.parse(o)),[])}async exists(){try{return await this.withDb(()=>!0)}catch{return!1}}async ensure(){throw new Error("SqliteStorage cannot create its database: opening it runs the migrations already")}};var cw=3e3,nd=new Map;async function od(t){let e=Date.now(),r=nd.get(t);if(r&&e-r.at<cw)return r.route;let n=await wr(t);return nd.set(t,{route:n,at:e}),n}async function sd(t,e,r){if(r.state==="legacy-fenced"||r.state==="cutover"){let{identity:n}=await lt(e);return new Lt(n)}return new Fe(t)}async function id(t){let e=t??process.cwd(),r=await od(e);if(r.state==="blocked")throw new Error(`storage unavailable: ${r.reason} \u2014 this repo's orphan branch is frozen (cutover), so the system of record cannot fall back to it; run 'jolli doctor --recover' or upgrade this surface`);return sd(t,e,r)}async function Un(t){let e=t??process.cwd(),r;try{r=await od(e)}catch(n){return{ok:!1,reason:n.message}}if(r.state==="blocked")return{ok:!1,reason:r.reason};try{return{ok:!0,state:r.state,storage:await sd(t,e,r)}}catch(n){return{ok:!1,reason:n.message}}}var bd=require("node:path");Mn();Dt();h();h();var Ze=p("DualWriteStorage"),Tr=class{constructor(e,r){this.primary=e;this.shadow=r;this.kind="dual-write"}get kbRoot(){return this.shadow.kbRoot}async readFile(e){return this.primary.readFile(e)}async batchReadFiles(e){if(this.primary.batchReadFiles)return this.primary.batchReadFiles(e);let r=new Map;for(let n of e)r.set(n,await this.primary.readFile(n));return r}async writeFiles(e,r){if(!he()){await this.primary.writeFiles(e,r);try{await this.shadow.writeFiles(e,r),this.shadow.clearDirty?.()}catch(n){Ze.warn("Shadow write failed (folder storage): %s",n instanceof Error?n.message:String(n)),this.shadow.markDirty?.(r)}}}async deleteVisibleMarkdown(e){if(!this.shadow.deleteVisibleMarkdown)return!1;try{return await this.shadow.deleteVisibleMarkdown(e)}catch(r){let n=e.commitHash.substring(0,8);return Ze.warn("Shadow deleteVisibleMarkdown failed (folder storage) for %s/%s: %s",e.branch,n,x(r)),this.shadow.markDirty?.(`deleteVisibleMarkdown ${e.branch}/${n}`),!1}}async regenerateVisibleMarkdown(e){if(!this.shadow.regenerateVisibleMarkdown)return!1;try{return await this.shadow.regenerateVisibleMarkdown(e)}catch(r){let n=e.commitHash.substring(0,8);return Ze.warn("Shadow regenerateVisibleMarkdown failed (folder storage) for %s/%s: %s",e.branch,n,x(r)),this.shadow.markDirty?.(`regenerateVisibleMarkdown ${e.branch}/${n}`),!1}}async deletePlanVisible(e,r){if(this.shadow.deletePlanVisible)try{await this.shadow.deletePlanVisible(e,r)}catch(n){Ze.warn("Shadow deletePlanVisible failed (folder storage) for %s on %s: %s",e,r,x(n)),this.shadow.markDirty?.(`deletePlanVisible ${r}/${e}`)}}async deleteNoteVisible(e,r){if(this.shadow.deleteNoteVisible)try{await this.shadow.deleteNoteVisible(e,r)}catch(n){Ze.warn("Shadow deleteNoteVisible failed (folder storage) for %s on %s: %s",e,r,x(n)),this.shadow.markDirty?.(`deleteNoteVisible ${r}/${e}`)}}async pruneBranchMappings(e){if(!this.shadow.pruneBranchMappings)return 0;try{return await this.shadow.pruneBranchMappings(e)}catch(r){return Ze.warn("Shadow pruneBranchMappings failed (folder storage): %s",x(r)),this.shadow.markDirty?.(`pruneBranchMappings ${e.length}`),0}}async healMissingVisibleMarkdown(e){let r=this.shadow.healMissingVisibleMarkdown?this.shadow:this.primary.healMissingVisibleMarkdown?this.primary:null;if(!r)return{healed:0,skipped:0,failed:0};let n=e?.dropOrphanedManifestEntries??!0,o=r===this.shadow?"shadow":"primary";try{return await r.healMissingVisibleMarkdown?.({dropOrphanedManifestEntries:n})??{healed:0,skipped:0,failed:0}}catch(s){let i=s?.code,a=i?`[${i}] ${x(s)}`:x(s);return Ze.warn("%s healMissingVisibleMarkdown failed: %s",o,a),r.markDirty?.("healMissingVisibleMarkdown"),{healed:0,skipped:0,failed:0,error:a}}}async listFiles(e){return this.primary.listFiles(e)}async exists(){return this.primary.exists()}isDirty(){return this.shadow.isDirty?.()??!1}async ensure(){await this.primary.ensure();try{await this.shadow.ensure()}catch(e){Ze.warn("Shadow ensure failed: %s",e instanceof Error?e.message:String(e))}}async renderTopicWiki(e){await this.shadow.renderTopicWiki?.(e)}isTopicWikiPresent(){return this.shadow.isTopicWikiPresent?.()??!1}};var v=require("node:fs"),Sd=require("node:fs/promises"),P=require("node:path");h();var j=require("node:fs");var ge=require("node:path");h();var uw=p("Sync:VaultSymlinkGuard");function dw(t,e){if(!(0,ge.isAbsolute)(e))throw new Error(`assertNoSymlinksInPathSync: absTargetPath must be absolute, got ${e}`);if(!(0,ge.isAbsolute)(t))throw new Error(`assertNoSymlinksInPathSync: vaultRoot must be absolute, got ${t}`);let r=(0,ge.relative)(t,e);if(r===""||r.startsWith("..")||(0,ge.isAbsolute)(r))throw new Error(`assertNoSymlinksInPathSync: target ${e} is not inside vault ${t}`);let n=r.split(ge.sep),o=t;for(let s=0;s<n.length-1;s++){let i=n[s];if(i===void 0||i.length===0)continue;o=`${o}${ge.sep}${i}`;let a;try{a=(0,j.lstatSync)(o)}catch(l){if(l.code==="ENOENT")return;throw l}if(a.isSymbolicLink())throw uw.warn("Refusing vault write \u2014 symlink in path chain: %s",o),new Error(`Refused vault write: path segment is a symlink at ${o} (target ${e}). Inspect and unlink before retrying.`);if(!a.isDirectory())throw new Error(`Refused vault write: path segment is not a directory at ${o} (target ${e}).`)}}function ei(t,e,r){dw(t,e),(0,j.mkdirSync)((0,ge.dirname)(e),{recursive:!0});let n=`${e}.tmp`,o=j.constants.O_WRONLY|j.constants.O_CREAT|j.constants.O_TRUNC|j.constants.O_NOFOLLOW,s=(0,j.openSync)(n,o,420);try{typeof r=="string"?(0,j.writeSync)(s,r,void 0,"utf-8"):(0,j.writeSync)(s,r)}finally{(0,j.closeSync)(s)}(0,j.renameSync)(n,e)}Cn();xe();function pw(t){return`skills--${t}`}function Bn(t){return`${pw(t)}.md`}function ad(t){let e=["| Skill | \xD7 | Tokens | Input | Output | Cached |","|---|---|---|---|---|---|"],r=[...t].sort((o,s)=>{let i=ti(s)-ti(o);return i!==0?i:o.skill<s.skill?-1:o.skill>s.skill?1:0}),n=!1;for(let o of r){let s=o.detection==="heuristic"?" \u2020":"";s!==""&&(n=!0),e.push(`| ${mw(o.skill)}${s} | ${o.invocationCount} | ${fw(o).join(" | ")} |`)}return n&&e.push("","\u2020 Inferred from a file read rather than an observed invocation: the count is per session, and a human reading the skill file looks the same."),e}function ld(t){let e=`${t.length} skill${t.length===1?"":"s"}`,r=0,n=!1,o=!1;for(let s of t)s.usage!==void 0&&(n=!0,r+=s.usage.input+s.usage.cached+s.usage.output,s.usage.confidence!=="attributed"&&(o=!0));return n?`${e} \xB7 ${ud(r,o?"~":"")} tokens`:e}function cd(t,e){let r=t.commitHash.substring(0,8);return`${["---","type: skill-usage",`commitHash: ${t.commitHash}`,`branch: ${t.branch}`,`generatedAt: ${t.generatedAt}`,"---","",`# Skills used \u2014 ${r}`,"",`_${t.commitMessage}_`,"",...ad(e),""].join(`
`)}
`}function mw(t){return t.replace(/\\/g,"\\\\").replace(/\|/g,"\\|").replace(/[\r\n]+/g," ")}function ti(t){let e=t.usage;return e===void 0?0:e.input+e.cached+e.output}function fw(t){let e=t.usage;if(e===void 0)return["\u2014","\u2014","\u2014","\u2014"];let r=e.confidence==="attributed"?"":"~";return[ti(t),e.input,e.output,e.cached].map(n=>ud(n,r))}function ud(t,e){return t<1e3?`${e}${t}`:`${e}${(t/1e3).toFixed(1)}k`}function Be(t){return t.replace(/[\\[\]]/g,"\\$&").replace(/[\r\n]+/g," ")}function dd(t){return t.replace(/[\\[\]~]/g,"\\$&").replace(/[\r\n]+/g," ")}function Wn(t){return t.replace(/[()\s<>"]/g,e=>e==="("?"%28":e===")"?"%29":encodeURIComponent(e))}pn();var pd=3/1e6,hw=15/1e6,gw=3.75/1e6;function Rr(t){return Math.round(t).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function md(t){return t>=.01?`$${t.toFixed(2)}`:t>=5e-5?`$${t.toFixed(4)}`:t>0?"<$0.0001":"$0.00"}function fd(t,e){return t?t.input*pd+t.output*hw+t.cached*gw:e*pd}function oi(t){let{topics:e,sourceNodes:r}=xu(t),n=[];return yw(n,t),bw(n,t,{withRelevance:!0}),ww(n,t),kw(n,t.e2eTestGuide),Tw(n,r),_w(n,e,Rw),vw(n),n.join(`
`)}function yw(t,e){let r=Sr(e),n=r.filesChanged,o=Gs(e),s=`${n} file${n!==1?"s":""} changed, +${r.insertions} insertions, \u2212${r.deletions} deletions`,i=Ys(q(e));t.push(`# ${e.commitMessage}`,"",`- **Commit:** \`${e.commitHash}\``,`- **Branch:** \`${e.branch}\``,`- **Author:** ${e.commitAuthor}`,`- **Date:** ${i}`,`- **Duration:** ${bu(e)}`,`- **Changes:** ${s}`),o>0&&t.push(`- **Conversations:** ${o} turn${o!==1?"s":""}`);let a=Ks(e);if(a>0){let c=Vs(e),d=c.input>0||c.output>0||c.cached>0?c:void 0,u=md(fd(d,a)),m=d?` (${Rr(d.input)} input, ${Rr(d.output)} output, ${Rr(d.cached)} cached)`:"";t.push(`- **Task usage:** ${Rr(a)} tokens \xB7 ${u}${m}`)}let l=e.jolliDocUrl;l&&t.push(`- **Jolli Memory:** [${l}](${l})`),t.push("","---")}function ww(t,e){let r=e.recap?.trim();r&&t.push("","## Quick recap","",r,"","---")}function Sw(t){let e=new Map;for(let o of t){let s=e.get(o.source)??[];s.push(o),e.set(o.source,s)}let r=dn().all().map(o=>o.id),n=[];for(let o of r){let s=e.get(o);s&&(n.push(...s),e.delete(o))}for(let o of e.values())n.push(...o);return n}function ri(t,e,r){return t.get(`${e}:${r}`)??t.get(`${e}:${r.replace(ku,"")}`)}var Ew={high:"High",mid:"Med",low:"Low"};function ni(t){return!t||t.reason===""?"":` \u2014 ${Ew[t.tier]} \xB7 ${Be(t.reason)}`}function bw(t,e,r){let n=e.plans??[],o=e.notes??[],s=r?.includeReferences?e.references??[]:[],i=r?.withRelevance?e.excludedContext??[]:[],a=new Map;if(r?.withRelevance)for(let u of e.contextRelevance??[])a.set(`${u.kind}:${u.key}`,{tier:u.tier,reason:u.reason});let l=e.skills??[],c=n.length+o.length+s.length+(l.length>0?1:0);if(c===0&&i.length===0)return;let d=c>1?` (${c})`:"";t.push("",`## Context${d}`,"");for(let u of n){let m=u.jolliPlanDocUrl,f=ni(ri(a,"plan",u.slug));t.push((m?`- [${Be(u.title)}](${Wn(m)})`:`- ${Be(u.title)}`)+f)}for(let u of o){let m=u.jolliNoteDocUrl,f=ni(ri(a,"note",u.id));t.push((m?`- [${Be(u.title)}](${Wn(m)})`:`- ${Be(u.title)}`)+f)}for(let u of Sw(s)){let m=Be(Xs(u)),f=u.jolliReferenceDocUrl??u.url,w=ni(ri(a,"reference",`${u.source}:${u.nativeId}`));t.push((f?`- [${m}](${Wn(f)})`:`- ${m}`)+w)}if(l.length>0){let u=l.some(m=>m.detection==="heuristic")?" \xB7 some inferred":"";t.push(`- Skills used \u2014 ${Be(ld(l))}${u}`)}for(let u of i)t.push(`- ~~${dd(u.title)}~~ \u2014 Excluded${u.reason?` \xB7 ${Be(u.reason)}`:""}`)}function kw(t,e){if(!(!e||e.length===0)){t.push("",`## E2E Test (${e.length})`);for(let r=0;r<e.length;r++){let n=e[r];t.push("",`### ${r+1}. ${n.title}`),n.preconditions&&t.push("",`**Preconditions:** ${n.preconditions}`),t.push("","**Steps:**");for(let o=0;o<n.steps.length;o++)t.push(`${o+1}. ${n.steps[o]}`);t.push("","**Expected Results:**");for(let o of n.expectedResults)t.push(`- ${o}`)}t.push("","---")}}function Tw(t,e){if(!(e.length<=1)){t.push("",`## Source Commits (${e.length})`);for(let r of e){let n=Sr(r),o=r.conversationTurns?` \xB7 ${r.conversationTurns} turns`:"";t.push(`- \`${r.commitHash.substring(0,8)}\` ${r.commitMessage}  _(+${n.insertions} \u2212${n.deletions}${o} \xB7 ${_u(q(r))})_`)}t.push("","---")}}function Rw(t,e){if(t.push("","**\u26A1 Why This Change**","",e.trigger),t.push("","**\u{1F4A1} Decisions Behind the Code**","",e.decisions),t.push("","**\u2705 What Was Implemented**","",e.response),e.todo&&t.push("","**\u{1F4CB} Future Enhancements**","",e.todo),e.filesAffected&&e.filesAffected.length>0){t.push("","**\u{1F4C1} FILES**");for(let r of e.filesAffected)t.push(`- \`${r}\``)}}function _w(t,e,r,n={singular:"Summary",plural:"Summaries"}){if(e.length!==0){t.push("",`## ${e.length===1?n.singular:n.plural} (${e.length})`);for(let o=0;o<e.length;o++){let s=e[o],i=s.category?` \`${s.category}\``:"";t.push("",`### ${vu(o)} \xB7 ${s.title}${i}`),r(t,s)}}}function vw(t,e){let r=Ys(new Date().toISOString()),n=e?Cu(e):void 0,o=n?` \xB7 via ${n}`:"";t.push("","---","",`*Generated by Jolli Memory \xB7 ${r}${o}*`)}var hd="<!-- Generated by Jolli Memory \xB7 do not edit \u2014 regenerated on every merge -->";function gd(t,e,r,n){let o=[];if(o.push(`# ${t.title}`),o.push(""),o.push(hd),o.push(""),o.push(`> **Source branches:** ${e.join(", ")}`),o.push(`> **Merged:** ${r}`),o.push(`> **Topic slug:** \`${t.stableSlug}\` (stable across re-merges)`),o.push(""),o.push(t.content.trim()),o.push(""),t.keyDecisions&&t.keyDecisions.length>0){o.push("## Key Decisions"),o.push("");for(let s of t.keyDecisions)o.push(`- ${s}`);o.push("")}if(t.sourceCommits.length>0){o.push("## Source Commits"),o.push("");for(let s of t.sourceCommits){let i=s.substring(0,8),a=n.resolveCommitVisiblePath(i),l=n.resolveCommitMessage(i);a&&l?o.push(`- ${si(i,Cw(a))} \u2014 ${l}`):l?o.push(`- \`${i}\` \u2014 ${l}`):o.push(`- \`${i}\``)}o.push("")}if(t.relatedBranches&&t.relatedBranches.length>0){o.push("## Related Branches"),o.push("");for(let s of t.relatedBranches){let i=n.resolveBranchFolder(s);i?o.push(`- ${si(s,`../${i}/`)}`):o.push(`- \`${s}\``)}o.push("")}return o.join(`
`)}function yd(t){return{title:t.title,stableSlug:t.stableSlug,content:t.content,...t.relatedBranches.length>0&&{relatedBranches:[...t.relatedBranches]},sourceCommits:t.sourceRefs.filter(e=>e.type==="summary").map(e=>e.id)}}function wd(t,e){let r=[];if(r.push(`# ${e.repoName} \xB7 Knowledge Wiki`),r.push(""),r.push(hd),r.push(""),r.push(`> **${t.length} topics** in the knowledge base`),r.push(""),t.length>0){r.push("## Topics"),r.push("");for(let n of t)r.push(`- ${si(n.title,`topic--${n.stableSlug}.md`)}`);r.push("")}return r.join(`
`)}function Cw(t){return t.startsWith("./")?t.substring(2):t}function si(t,e){let r=t.replace(/[\\[\]]/g,"\\$&"),n=e.replace(/ /g,"%20").replace(/\(/g,"%28").replace(/\)/g,"%29");return`[${r}](${n})`}var T=p("FolderStorage"),Jn=class t{constructor(e,r){this.rootPath=e;this.metadataManager=r;this.kind="folder"}get vaultRoot(){return(0,P.dirname)(this.rootPath)}get kbRoot(){return this.rootPath}async readFile(e){let r=(0,P.join)(this.rootPath,".jolli",e);try{return(0,v.readFileSync)(r,"utf-8")}catch(n){let o=n.code;return o==="ENOENT"||o==="ENOTDIR"||T.warn("readFile failed for %s: %s",r,x(n)),null}}async writeFiles(e,r){if(he())return;await this.ensure();let n=0,o=0;for(let s of e)s.delete?this.deleteHiddenFile(s.path)&&o++:(this.writeHiddenFile(s.path,s.content),n++,s.path.startsWith("summaries/")&&s.path.endsWith(".json")&&this.generateSummaryMarkdown(s.content),s.path.startsWith("plans/")&&s.path.endsWith(".md")&&this.generatePlanMarkdown(s.path,s.content,s.branch),s.path.startsWith("notes/")&&s.path.endsWith(".md")&&this.generateNoteMarkdown(s.path,s.content,s.branch));T.info("Wrote %d files, deleted %d (%s)",n,o,r)}async listFiles(e){let r=(0,P.join)(this.rootPath,".jolli",e);if(!(0,v.existsSync)(r))return[];let n=(0,P.join)(this.rootPath,".jolli"),o=[];return this.walkDir(r,n,o),o.sort()}async exists(){return(0,v.existsSync)(this.rootPath)}async ensure(){(0,v.mkdirSync)(this.rootPath,{recursive:!0}),this.metadataManager.ensure()}markDirty(e){let r=(0,P.join)(this.rootPath,".jolli","shadow-status.json"),n={dirty:!0,lastFailedAt:new Date().toISOString(),message:e};try{ei(this.vaultRoot,r,JSON.stringify(n,null,"	"))}catch(o){T.warn("markDirty suppressed: %s",x(o))}}clearDirty(){let e=(0,P.join)(this.rootPath,".jolli","shadow-status.json");try{(0,v.existsSync)(e)&&(0,v.unlinkSync)(e)}catch{}}isDirty(){let e=(0,P.join)(this.rootPath,".jolli","shadow-status.json");return(0,v.existsSync)(e)}async deleteVisibleMarkdown(e){let r=t.slugify(e.commitMessage),n=e.commitHash.substring(0,8);try{await this.deleteVisibleArtifact(`skill:${e.commitHash}`,e.branch,Bn(n))}catch(o){T.warn("Failed to delete skills aggregate for %s: %s",n,String(o))}return this.deleteVisibleArtifact(e.commitHash,e.branch,`${r}-${n}.md`)}async deletePlanVisible(e,r){await this.deleteVisibleArtifact(`plan:${e}`,r,`plan--${e}.md`)}async deleteNoteVisible(e,r){await this.deleteVisibleArtifact(`note:${e}`,r,`note--${e}.md`)}async pruneBranchMappings(e){let r=new Map,n=new Set(e);for(let s of this.metadataManager.listBranchMappings())n.has(s.branch)&&r.set(s.branch,s.folder);let o=this.metadataManager.unregisterBranches(e);return o===0?0:(await Promise.all([...r.values()].map(s=>this.rmdirIfEmpty((0,P.join)(this.rootPath,s)))),o)}async rmdirIfEmpty(e){try{await(0,Sd.rmdir)(e)}catch(r){let n=r.code;if(n==="ENOENT"||n==="ENOTEMPTY"||n==="EEXIST")return;T.warn("rmdir(%s) failed (non-fatal): %s",e,x(r))}}resolveBranchForFolder(e){return this.metadataManager.listBranchMappings().find(n=>n.folder===e)?.branch??null}async deleteVisibleArtifact(e,r,n){let o=this.metadataManager.findById(e),s=this.metadataManager.resolveFolderForBranch(r),i=o?.path??`${s}/${n}`,a=(0,P.join)(this.rootPath,i);if(!(0,v.existsSync)(a))return o&&this.metadataManager.removeFromManifest(e),!1;if(o?.fingerprint&&this.isUserEditedOnDisk(a,o.fingerprint))return T.warn("Skipping cleanup of %s \u2014 file modified since manifest record (likely hand-edited)",i),!1;try{return(0,v.unlinkSync)(a),o&&this.metadataManager.removeFromManifest(e),T.info("Deleted visible MD: %s",i),!0}catch(l){if(l.code==="ENOENT")return o&&this.metadataManager.removeFromManifest(e),!1;throw l}}async forceRegenerateVisibleMarkdown(e){let r=await this.readFile(`summaries/${e.commitHash}.json`);if(!r)return T.warn("forceRegenerateVisibleMarkdown: hidden summaries/%s.json missing \u2014 leaving visible file intact",e.commitHash.substring(0,8)),{ok:!1,reason:"missing"};try{JSON.parse(r)}catch(c){return T.warn("forceRegenerateVisibleMarkdown: malformed summaries/%s.json (%s) \u2014 leaving visible file intact",e.commitHash.substring(0,8),x(c)),{ok:!1,reason:"malformed"}}let n=this.metadataManager.resolveFolderForBranch(e.branch),o=t.slugify(e.commitMessage),s=e.commitHash.substring(0,8),i=`${n}/${o}-${s}.md`,a=(0,P.join)(this.rootPath,i);if((0,v.existsSync)(a))try{(0,v.unlinkSync)(a)}catch(c){return T.warn("forceRegenerateVisibleMarkdown: cannot unlink %s [%s]",i,String(c)),{ok:!1,reason:"unlinkFailed"}}return await this.regenerateVisibleMarkdown(e)?{ok:!0}:{ok:!1,reason:"missing"}}async regenerateVisibleMarkdown(e){let r=this.metadataManager.resolveFolderForBranch(e.branch),n=t.slugify(e.commitMessage),o=e.commitHash.substring(0,8),s=`${r}/${n}-${o}.md`,i=(0,P.join)(this.rootPath,s);if((0,v.existsSync)(i))return await this.healSkillsAggregate(e,r,o),!0;let a=await this.readFile(`summaries/${e.commitHash}.json`);if(!a)return T.warn("regenerateVisibleMarkdown: hidden summaries/%s.json missing",e.commitHash.substring(0,8)),!1;let l;try{l=JSON.parse(a)}catch(w){return T.warn("regenerateVisibleMarkdown: malformed summaries/%s.json \u2014 %s",e.commitHash.substring(0,8),x(w)),!1}let c=this.buildYamlFrontmatter(l),d=oi(l),u=`${c}
${d}`;this.atomicWrite(i,u);let m=this.metadataManager.findById(e.commitHash),f=V.sha256(u);return this.metadataManager.updateManifest({path:s,fileId:l.commitHash,type:"commit",fingerprint:f,source:{commitHash:l.commitHash,branch:l.branch,generatedAt:l.generatedAt},title:m?.title??l.commitMessage}),this.generateSkillsAggregate(l,r,o),T.info("Regenerated visible MD: %s",s),!0}async healMissingVisibleMarkdown(e){let n=this.metadataManager.readManifest().files.filter(c=>c.type==="commit"),o=0,s=0,i=0,a=[];for(let c of n){let d=(0,P.join)(this.rootPath,c.path);if((0,v.existsSync)(d)){s++;continue}let u=(0,P.join)(this.rootPath,".jolli","summaries",`${c.fileId}.json`),m;try{m=(0,v.readFileSync)(u,"utf-8")}catch(N){let H=N.code;if(H==="ENOENT"){i++,e?.dropOrphanedManifestEntries?(a.push(c.fileId),T.warn("healMissingVisibleMarkdown: hidden JSON missing for %s \u2014 will drop manifest entry",c.fileId.substring(0,8))):T.warn("healMissingVisibleMarkdown: hidden JSON missing for %s \u2014 keeping manifest entry (no truth source to repopulate)",c.fileId.substring(0,8));continue}i++,T.warn("healMissingVisibleMarkdown: hidden JSON read failed for %s [%s]: %s \u2014 keeping manifest entry",c.fileId.substring(0,8),H??"?",x(N));continue}let f;try{f=JSON.parse(m)}catch(N){i++,T.warn("healMissingVisibleMarkdown: malformed hidden JSON for %s: %s",c.fileId.substring(0,8),x(N));continue}let w=this.metadataManager.resolveFolderForBranch(f.branch),C=t.slugify(f.commitMessage),_=f.commitHash.substring(0,8),S=`${w}/${C}-${_}.md`;if(S!==c.path){s++,T.warn("healMissingVisibleMarkdown: manifest path drift for %s \u2014 manifest=%s computed=%s \u2014 keeping manifest entry, run reconcile",c.fileId.substring(0,8),c.path,S);continue}let I={commitHash:f.commitHash,parentCommitHash:null,commitMessage:f.commitMessage,commitDate:f.commitDate,branch:f.branch,generatedAt:f.generatedAt};try{await this.regenerateVisibleMarkdown(I)?o++:(i++,T.warn("healMissingVisibleMarkdown: regenerate returned false for %s \u2014 retry on next pass",c.fileId.substring(0,8)))}catch(N){i++,T.warn("healMissingVisibleMarkdown: regenerate failed for %s: %s",c.fileId.substring(0,8),x(N))}}let l=a.length>0?this.dropManifestEntries(a):[];return(o>0||i>0)&&T.info("healMissingVisibleMarkdown: healed=%d skipped=%d failed=%d dropped=%d",o,s,i,l.length),l.length>0?{healed:o,skipped:s,failed:i,droppedIds:l}:{healed:o,skipped:s,failed:i}}dropManifestEntries(e){if(e.length===0)return[];let r=new Set(e),n=this.metadataManager.readManifest(),o=n.files.filter(i=>r.has(i.fileId)).map(i=>i.fileId);if(o.length===0)return[];let s=n.files.filter(i=>!r.has(i.fileId));return this.metadataManager.replaceFiles(s),o}isUserEditedOnDisk(e,r){if(!(0,v.existsSync)(e)||!r)return!1;let n;try{n=V.sha256((0,v.readFileSync)(e,"utf-8"))}catch(o){return T.warn("isUserEditedOnDisk: cannot read %s [%s] \u2014 treating as edited",e,String(o)),!0}return n!==r}generateSummaryMarkdown(e){let r;try{r=JSON.parse(e)}catch{return}let n=this.metadataManager.resolveFolderForBranch(r.branch),o=t.slugify(r.commitMessage),s=r.commitHash.substring(0,8),i=`${o}-${s}.md`,a=`${n}/${i}`,l=this.buildYamlFrontmatter(r),c=oi(r),d=`${l}
${c}`,u=(0,P.join)(this.rootPath,a),m=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(u,m?.fingerprint)){T.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(u,d);let f=V.sha256(d);this.metadataManager.updateManifest({path:a,fileId:r.commitHash,type:"commit",fingerprint:f,source:{commitHash:r.commitHash,branch:r.branch,generatedAt:r.generatedAt},title:r.commitMessage}),T.info("Markdown generated: %s",a),this.generateSkillsAggregate(r,n,s),r.children&&r.children.length>0&&this.cleanupSupersededDescendants(r.children,a)}async healSkillsAggregate(e,r,n){if((0,v.existsSync)((0,P.join)(this.rootPath,r,Bn(n))))return;let o=await this.readFile(`summaries/${e.commitHash}.json`);if(o)try{this.generateSkillsAggregate(JSON.parse(o),r,n)}catch{}}generateSkillsAggregate(e,r,n){let o=e.skills;if(o===void 0||o.length===0)return;let s=`${r}/${Bn(n)}`,i=(0,P.join)(this.rootPath,s),a=this.metadataManager.findByPath(s);if(this.isUserEditedOnDisk(i,a?.fingerprint)){T.info("FolderStorage: skip overwrite of user-edited %s",s);return}let l=cd(e,o);this.atomicWrite(i,l),this.metadataManager.updateManifest({path:s,fileId:`skill:${e.commitHash}`,type:"skill",fingerprint:V.sha256(l),source:{commitHash:e.commitHash,branch:e.branch,generatedAt:e.generatedAt},title:`Skills used \u2014 ${n}`}),T.info("Skills aggregate generated: %s",s)}cleanupSupersededDescendants(e,r){let n=[];t.collectDescendantHashes(e,n);for(let o of n){let s=this.metadataManager.findById(o);if(!s||s.type!=="commit"||s.path===r)continue;let i=(0,P.join)(this.rootPath,s.path);if(!(0,v.existsSync)(i)){this.metadataManager.removeFromManifest(o);continue}if(!s.fingerprint){T.warn("Skipping cleanup of %s \u2014 legacy entry has no fingerprint baseline",s.path);continue}if(this.isUserEditedOnDisk(i,s.fingerprint)){T.warn("Skipping cleanup of %s \u2014 file modified since manifest record (likely hand-edited)",s.path);continue}try{(0,v.unlinkSync)(i),this.metadataManager.removeFromManifest(o),T.info("Cleaned up superseded MD: %s",s.path)}catch(a){T.warn("Failed to delete superseded MD %s: %s",s.path,String(a))}}}static collectDescendantHashes(e,r){for(let n of e)r.push(n.commitHash),n.children&&n.children.length>0&&t.collectDescendantHashes(n.children,r)}buildYamlFrontmatter(e){let r=["---"];return r.push(`commitHash: ${e.commitHash}`),r.push(`branch: ${e.branch}`),r.push(`author: ${e.commitAuthor}`),r.push(`date: ${e.commitDate}`),r.push("type: commit"),e.commitType&&r.push(`commitType: ${e.commitType}`),e.stats&&(r.push(`filesChanged: ${e.stats.filesChanged}`),r.push(`insertions: ${e.stats.insertions}`),r.push(`deletions: ${e.stats.deletions}`)),r.push("---"),r.join(`
`)}async regenerateVisiblePlan(e,r){let n=await this.readFile(`plans/${e}.md`);if(!n)return T.warn("regenerateVisiblePlan: hidden plans/%s.md missing",e),!1;let o=this.metadataManager.resolveFolderForBranch(r),s=(0,P.join)(this.rootPath,o,`plan--${e}.md`);if((0,v.existsSync)(s))try{(0,v.unlinkSync)(s)}catch(i){return T.warn("regenerateVisiblePlan: cannot unlink %s [%s]",s,String(i)),!1}return this.generatePlanMarkdown(`plans/${e}.md`,n,r),!0}generatePlanMarkdown(e,r,n){let o=e.replace(/^plans\//,"").replace(/\.md$/,""),s=n?this.metadataManager.resolveFolderForBranch(n):this.resolveBranchFromSlug(o),i=`plan--${o}.md`,a=`${s}/${i}`,c=`${["---","type: plan",`slug: ${o}`,"---"].join(`
`)}

${r}`,d=(0,P.join)(this.rootPath,a),u=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(d,u?.fingerprint)){T.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(d,c);let m=V.sha256(c);this.metadataManager.updateManifest({path:a,fileId:`plan:${o}`,type:"plan",fingerprint:m,updatedAt:new Date().toISOString(),source:n?{branch:n}:{},title:this.extractTitle(r)??o}),T.info("Plan markdown generated: %s",a)}async regenerateVisibleNote(e,r){let n=await this.readFile(`notes/${e}.md`);if(!n)return T.warn("regenerateVisibleNote: hidden notes/%s.md missing",e),!1;let o=this.metadataManager.resolveFolderForBranch(r),s=(0,P.join)(this.rootPath,o,`note--${e}.md`);if((0,v.existsSync)(s))try{(0,v.unlinkSync)(s)}catch(i){return T.warn("regenerateVisibleNote: cannot unlink %s [%s]",s,String(i)),!1}return this.generateNoteMarkdown(`notes/${e}.md`,n,r),!0}generateNoteMarkdown(e,r,n){let o=e.replace(/^notes\//,"").replace(/\.md$/,""),s=n?this.metadataManager.resolveFolderForBranch(n):this.resolveBranchFromSlug(o),i=`note--${o}.md`,a=`${s}/${i}`,c=`${["---","type: note",`id: ${o}`,"---"].join(`
`)}

${r}`,d=(0,P.join)(this.rootPath,a),u=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(d,u?.fingerprint)){T.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(d,c);let m=V.sha256(c);this.metadataManager.updateManifest({path:a,fileId:`note:${o}`,type:"note",fingerprint:m,source:n?{branch:n}:{},title:this.extractTitle(r)??o,updatedAt:new Date().toISOString()}),T.info("Note markdown generated: %s",a)}resolveBranchFromSlug(e){let r=e.split("-").at(-1);if(r.length>=7){let o=this.metadataManager.readManifest().files.find(i=>i.type==="commit"&&i.source?.commitHash?.startsWith(r));if(o?.source?.branch)return this.metadataManager.resolveFolderForBranch(o.source.branch);let s=(0,P.join)(this.rootPath,".jolli","index.json");if((0,v.existsSync)(s))try{let a=JSON.parse((0,v.readFileSync)(s,"utf-8")).entries.find(l=>l.commitHash.startsWith(r));if(a?.branch)return this.metadataManager.resolveFolderForBranch(a.branch)}catch{}}return"_shared"}extractTitle(e){let r=e.match(/^#\s+(.+)/m);return r?r[1].trim():null}writeHiddenFile(e,r){let n=(0,P.join)(this.rootPath,".jolli",e);this.atomicWrite(n,r)}deleteHiddenFile(e){let r=(0,P.join)(this.rootPath,".jolli",e);if(!(0,v.existsSync)(r))return!1;try{return(0,v.unlinkSync)(r),!0}catch{return!1}}walkDir(e,r,n){for(let o of(0,v.readdirSync)(e,{withFileTypes:!0})){let s=(0,P.join)(e,o.name);o.isDirectory()?this.walkDir(s,r,n):n.push(Ye((0,P.relative)(r,s)))}}async renderTopicWiki(e){let r=(0,P.join)(this.rootPath,"_wiki");this.wipeWikiArtifacts(r);let n=this.buildWikiRenderContext();(0,v.mkdirSync)(r,{recursive:!0});let o=[];for(let s of e)try{let i=yd(s);o.push(i);let a=`_wiki/topic--${i.stableSlug}.md`,l=gd(i,s.relatedBranches,s.lastUpdatedAt,n);this.atomicWrite((0,P.join)(this.rootPath,a),l),this.metadataManager.updateManifest({path:a,fileId:`wiki-topic-${i.stableSlug}`,type:"wiki",fingerprint:V.sha256(l),source:{generatedAt:s.lastUpdatedAt},title:i.title})}catch(i){T.warn("renderTopicWiki: failed to render topic %s: %s",s.stableSlug,x(i))}try{let s=wd(o,n),i="_wiki/_index.md";this.atomicWrite((0,P.join)(this.rootPath,i),s),this.metadataManager.updateManifest({path:i,fileId:"wiki-index",type:"wiki",fingerprint:V.sha256(s),source:{generatedAt:new Date().toISOString()},title:`${n.repoName} Knowledge Wiki`})}catch(s){T.warn("renderTopicWiki: failed to render index: %s",x(s))}T.info("Topic-KB wiki regenerated: %d topics under %s",e.length,r)}isTopicWikiPresent(){return(0,v.existsSync)((0,P.join)(this.rootPath,"_wiki","_index.md"))}wipeWikiArtifacts(e){if(this.metadataManager.unregisterFilesByType("wiki"),!!(0,v.existsSync)(e))try{for(let r of(0,v.readdirSync)(e))if(r.endsWith(".md"))try{(0,v.unlinkSync)((0,P.join)(e,r))}catch(n){T.warn("FolderStorage.wipeWikiArtifacts: failed to unlink %s: %s",r,x(n))}}catch(r){T.warn("FolderStorage.wipeWikiArtifacts: failed to list %s: %s",e,x(r))}}buildWikiRenderContext(){let e=this.metadataManager.readConfig(),r=this.metadataManager.listBranchMappings(),n=new Map(r.map(i=>[i.branch,i.folder])),o=this.metadataManager.readManifest(),s=new Map;for(let i of o.files)i.type==="commit"&&i.source.commitHash&&s.set(i.source.commitHash.substring(0,8),i);return{repoName:e.repoName??"Memory Bank",resolveCommitVisiblePath:i=>{let a=s.get(i);return a?`../${a.path}`:null},resolveBranchFolder:i=>n.get(i)??null,resolveCommitMessage:i=>s.get(i)?.title??null}}atomicWrite(e,r){ei(this.vaultRoot,e,r)}static slugify(e){let r=e.toLowerCase().replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"");return r.length>50&&(r=r.substring(0,50).replace(/-+$/,"")),r||"untitled"}};fr();Cn();ae();var qn=p("StorageFactory");async function ii(t,e){let r;try{r=await ve()}catch(a){qn.warn("Failed to load config, falling back to defaults: %s",a.message),r={}}r.storageMode!==void 0&&qn.info("ignoring retired storageMode=%s \u2014 routing is decided by the cutover state",r.storageMode);let n=r.localFolder,o=await wr(t);if(qn.info("StorageFactory.create: route=%s, projectPath=%s",o.state,t),o.state==="blocked")throw new Error(`storage unavailable: ${o.reason} \u2014 this repo's orphan branch is frozen (cutover), so writes cannot fall back to it; run 'jolli doctor --recover' or upgrade this surface`);if(o.state==="legacy-fenced"||o.state==="cutover"){let{identity:a}=await lt(t),l=new Lt(a);return Ps(t,n)?new Tr(l,Ed(t,n)):l}if(!Ps(t,n))return qn.warn("Not a claimable project (no git worktree, or inside the Memory Bank folder): %s \u2014 using orphan-only storage",t),new Fe(e);let s=new Fe(e),i=Ed(t,n);return new Tr(s,i)}function Ed(t,e){let r=Hc(t),n=Bc(t),o=jc(r,n,e),s=new V((0,bd.join)(o,".jolli"));return new Jn(o,s)}var le=p("SchemaV5Migration"),Td="schema-v5-migration.json",kd=3e4;async function ai(t,e){let n=await(e??await ii(t??process.cwd(),t)).readFile(Td);if(!n)return null;try{return JSON.parse(n)}catch(o){return le.warn("Failed to parse v5 migration state \u2014 treating as absent: %s",o.message),null}}async function xw(t,e,r){if(nn(t))return await r();if(!await Bo(t,{timeoutMs:kd}))throw new Error(`${e}: could not acquire orphan-write lock within ${kd}ms`);try{return await on(t,r)}finally{await Wo(t)}}async function Rd(t){let e=await ii(t??process.cwd(),t),r=await ai(t,e);return r?.status==="completed"?(le.info("Schema v5 migration already completed at %s \u2014 skipping",r.completedAt),{migrated:r.migratedCount,skipped:r.skippedCount,fresh:r.fresh,alreadyDone:!0}):await e.exists()?xw(t,"migrateSchemaToV5",()=>Aw(t,e)):(le.info("Storage backend not initialized yet \u2014 skipping schema v5 migration (no data to migrate)"),{migrated:0,skipped:0,fresh:!0,alreadyDone:!1})}async function Pw(t,e){if(e.length===0)return new Map;if(t.batchReadFiles)return t.batchReadFiles(e);let r=new Map;for(let n of e)r.set(n,await t.readFile(n));return r}async function Aw(t,e){let r=await ai(t,e);if(r?.status==="completed")return le.info("Schema v5 migration completed by a concurrent run at %s \u2014 skipping",r.completedAt),{migrated:r.migratedCount,skipped:r.skippedCount,fresh:r.fresh,alreadyDone:!0};let n=new Date().toISOString(),o=await Un(t),s=o.ok&&o.state==="uncutover"?await M(["rev-parse",`refs/heads/${fe}`],t).then(K=>K.stdout.trim()).catch(()=>null):null,i=await e.listFiles("summaries/");le.info("Found %d summary files to inspect",i.length);let a=await e.listFiles("transcripts/"),l=new Set;for(let K of a){let Ge=zs(K);Ge&&l.add(Ge)}le.info("Reading %d summaries...",i.length);let c=Date.now(),d=await Pw(e,i);le.info("Read %d summaries in %d ms",d.size,Date.now()-c);let u=[],m=[],f=0,w=0;for(let K of i){let Ge=d.get(K);if(Ge===void 0)throw new Error(`readSummaries omitted ${K} \u2014 protocol contract violation (expected one entry per request)`);if(Ge===null){w++;continue}let gt;try{gt=JSON.parse(Ge)}catch(Gr){le.warn("Skipping unparseable summary %s: %s",K,Gr.message),w++;continue}let qt=Iw(gt,l),Gt=JSON.stringify(qt,null,"	");if(m.push({path:K,content:Gt}),qt===gt){w++;continue}u.push({path:K,content:Gt}),f++}let C=i.length===0,_=f===0&&w>0,S=_?m:u,I=C?"Schema v5 migration: no pre-v5 data found":_?`Schema v5 migration: re-pushing ${w} v5 summaries to heal storage shadow`:`Schema v5 migration: ${f} upgraded, ${w} skipped`,N=Date.now();if(S.length>0&&(le.info("Writing %d summary file(s) via active storage...",S.length),await e.writeFiles(S,I)),e.isDirty?.()??!1)return le.warn("Schema v5 migration: storage shadow write failed (folder marked dirty) \u2014 leaving state PENDING; next startup will retry and re-push (migrated=%d, skipped=%d, took %d ms)",f,w,Date.now()-N),{migrated:f,skipped:w,fresh:C,alreadyDone:!1};let Se={version:1,status:"completed",startedAt:n,completedAt:new Date().toISOString(),migratedCount:f,skippedCount:w,fresh:C};return await e.writeFiles([{path:Td,content:JSON.stringify(Se,null,"	")}],I),le.info("Schema v5 migration complete: %d migrated, %d skipped, fresh=%s, recovery=%s (took %d ms)",f,w,C,_,Date.now()-N),s&&le.info("Pre-migration orphan-branch SHA was %s (debug-only recovery anchor)",s),{migrated:f,skipped:w,fresh:C,alreadyDone:!1}}function Iw(t,e){if(t.version>=5&&t.transcripts!==void 0)return t;let r=Bu(t);if(r.transcripts!==void 0)return{...r,version:5};let o=Er(r).filter(i=>e.has(i));return{...r,version:5,transcripts:o}}ae();h();var Mt=require("node:fs/promises"),vr=require("node:path");ne();var Dw='"$HOME/.jolli/jollimemory/run-hook"';function We(t,e=""){let r=e?` ${e}`:"";return`${Dw} ${t}${r}`}var li=["run-hook","StopHook","jollimemory-hooks.jar"],Gn=["run-hook","SessionStartHook"],Kn=["run-hook","GeminiAfterAgentHook","jollimemory-hooks.jar"];function _r(t,e){let r=typeof e=="string"?[e]:e;return t.some(n=>{let o=n.hooks;return Array.isArray(o)?o.some(s=>typeof s.command=="string"&&r.some(i=>s.command.includes(i))):!1})}function ut(t,e){let r=typeof e=="string"?[e]:e,n=[];for(let o of t){let s=o.hooks;if(!Array.isArray(s)){n.push(o);continue}let i=s.filter(a=>!(typeof a.command=="string"&&r.some(l=>a.command.includes(l))));i.length>0&&n.push({...o,hooks:i})}return n}function ci(t){return _r(t,li)}function Vn(t){return ut(t,li)}async function ui(t){let e=(0,vr.join)(t,".claude"),r=(0,vr.join)(e,"settings.local.json"),n=We("stop"),o=We("session-start");await _d(t);let s={},i;try{i=await(0,Mt.readFile)(r,"utf-8"),s=JSON.parse(i)}catch(f){if(f.code!=="ENOENT")throw f}let a=s.hooks??{},l=a.Stop??[],c=a.SessionStart??[],d=Vn(l);d.push({hooks:[{type:"command",command:n,async:!0}]});let u=ut(c,Gn);u.push({hooks:[{type:"command",command:o}]}),a.Stop=d,a.SessionStart=u,s.hooks=a;let m=JSON.stringify(s,null,"	");return i===m?{path:r}:(await(0,Mt.mkdir)(e,{recursive:!0}),await A(r,m),{path:r})}async function _d(t){let e=(0,vr.join)(t,".claude","settings.json"),r;try{let i=await(0,Mt.readFile)(e,"utf-8");r=JSON.parse(i)}catch{return}let n=r.hooks;if(!n)return;let o=n.Stop??[];if(!ci(o))return;let s=Vn(o);s.length===0?delete n.Stop:n.Stop=s,Object.keys(n).length===0?delete r.hooks:r.hooks=n,await A(e,JSON.stringify(r,null,"	"))}async function di(t){await _d(t);let e=(0,vr.join)(t,".claude","settings.local.json"),r;try{let l=await(0,Mt.readFile)(e,"utf-8");r=JSON.parse(l)}catch{return{}}let n=r.hooks;if(!n)return{};let o=n.Stop??[],s=ci(o);if(s){let l=Vn(o);l.length===0?delete n.Stop:n.Stop=l}let i=n.SessionStart??[],a=_r(i,Gn);if(a){let l=ut(i,Gn);l.length===0?delete n.SessionStart:n.SessionStart=l}return!s&&!a?{}:(Object.keys(n).length===0?delete r.hooks:r.hooks=n,await A(e,JSON.stringify(r,null,"	")),{})}var pt=require("node:fs/promises"),vm=require("node:os"),Lr=require("node:path");ne();h();var bm=require("node:crypto"),Ft=require("node:fs"),Ni=require("node:fs/promises"),uo=require("node:os"),Je=require("node:path");h();var Cd=require("node:fs"),Yn=require("node:fs/promises"),xd=require("node:os"),dt=require("node:path"),Pd=require("node:url");ne();h();var Nw=/^[a-z0-9][a-z0-9-]*$/;function Cr(t){return Nw.test(t)}var Xn=p("DistPathWriter");async function xr(t,e,r,n){if(!Cr(t))return Xn.warn("Refusing to write dist-paths entry for unsafe source tag: %s",JSON.stringify(t)),!1;let o=e??(0,dt.dirname)((0,Pd.fileURLToPath)(__jmImportMetaUrl)),s=r??"0.99.11",i=(0,dt.join)(n??(0,dt.join)((0,xd.homedir)(),".jolli","jollimemory"),"dist-paths"),a=(0,dt.join)(i,t);try{await(0,Yn.mkdir)(i,{recursive:!0});let l=`${s}
${o}`,c;try{c=await(0,Yn.readFile)(a,"utf-8")}catch{}if(c){let[d,u]=c.split(`
`);if(!!(d&&u&&vd(u))&&!vd(o))return Xn.info("Kept complete dist-paths/%s (version=%s) \u2014 candidate dist is incomplete: %s",t,d,o),!0}return c!==l&&await A(a,l),Xn.info("Wrote dist-paths/%s (version=%s, distDir=%s)",t,s,o),!0}catch(l){return Xn.warn("Failed to write dist-paths/%s: %s",t,l.message),!1}}var Ow=["Cli.js","StopHook.js","SessionStartHook.js","PostCommitHook.js","PostRewriteHook.js","PrepareMsgHook.js","PostMergeHook.js","PrePushHook.js","QueueWorker.js","PrePushWorker.js"];function vd(t){return Ow.every(e=>(0,Cd.existsSync)((0,dt.join)(t,e)))}var Ht=Vt(Em(),1);function co(t,e){if(t.includes("-")||t.includes("+")||e.includes("-")||e.includes("+")){let i=c=>{let d=(0,Ht.valid)(c);return d||(/^\d+(\.\d+)*$/.test(c)?(0,Ht.coerce)(c)?.version??null:null)},a=i(t),l=i(e);if(a&&l)return(0,Ht.compare)(a,l);if(a)return 1;if(l)return-1}let r=/^\d+(\.\d+)*$/.test(t),n=/^\d+(\.\d+)*$/.test(e);if(!r&&!n)return 0;if(!r)return-1;if(!n)return 1;let o=t.split(".").map(Number),s=e.split(".").map(Number);for(let i=0;i<Math.max(o.length,s.length);i++){let a=(o[i]??0)-(s[i]??0);if(a!==0)return a}return 0}var Di=p("DistPathResolver"),Fb=[[".cursor/","cursor"],[".windsurf/","windsurf"],[".antigravity/","antigravity"],[".vscode-oss/","vscodium"],[".positron/","positron"],[".trae/","trae"],[".vscode/","vscode"]];function Oi(t){let e=t.replace(/\\/g,"/");for(let[n,o]of Fb)if(e.includes(n))return o;let r=e.match(/\/\.([a-z][a-z0-9-]*)\/extensions\//i);return r?.[1]?r[1].toLowerCase():(0,bm.createHash)("sha256").update(t).digest("hex").slice(0,8)}function km(t){try{let r=(0,Ft.readFileSync)(t,"utf-8").trim().split(`
`).map(s=>s.trim());if(r.length<2)return null;let n=r[0],o=r[r.length-1];if(!o)return null;if(n.startsWith("source=")){let s=n.slice(7),i=s.indexOf("@");return i===-1?{source:s,version:"unknown",distDir:o}:{source:s.slice(0,i),version:s.slice(i+1),distDir:o}}return{source:"",version:n,distDir:o}}catch{return null}}function Or(t){let e=(0,Je.join)(t??(0,Je.join)((0,uo.homedir)(),".jolli","jollimemory"),"dist-paths"),r;try{r=(0,Ft.readdirSync)(e).sort()}catch{return[]}let n=[];for(let o of r){let s=(0,Je.join)(e,o),i=km(s);i&&n.push({source:o,version:i.version,distDir:i.distDir,available:(0,Ft.existsSync)(i.distDir)})}return n}async function Tm(t){let e=(0,Je.join)(t??(0,Je.join)((0,uo.homedir)(),".jolli","jollimemory"),"dist-paths"),r=[];for(let n of Or(t))if(!n.available)try{await(0,Ni.unlink)((0,Je.join)(e,n.source)),r.push(n.source),Di.info("Pruned stale dist-paths/%s (dir gone: %s)",n.source,n.distDir)}catch(o){Di.warn("Failed to prune stale dist-paths/%s: %s",n.source,o.message)}return r}var Li=["cli","vscode","cursor"];function po(t){let e=t.filter(o=>o.available);if(e.length===0)return;let r=e[0];for(let o=1;o<e.length;o++)co(e[o].version,r.version)>0&&(r=e[o]);let n=e.filter(o=>co(o.version,r.version)===0);for(let o of Li){let s=n.find(i=>i.source===o);if(s)return s}return r}async function Rm(){let t=(0,Je.join)((0,uo.homedir)(),".jolli","jollimemory"),e=(0,Je.join)(t,"dist-path"),r=km(e);if(!r)return!1;let n;if(r.source==="cli")n="cli";else{let o=Oi(r.distDir);n=/^[a-f0-9]{8}$/.test(o)?"vscode":o}return n==="vscode-extension"&&(n="vscode"),await xr(n,r.distDir,r.version),await(0,Ni.unlink)(e).catch(()=>{}),Di.info("Migrated legacy dist-path -> dist-paths/%s (version=%s, distDir=%s)",n,r.version,r.distDir),!0}var _m=p("DispatchScripts"),Ub=`#!/bin/bash
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

# Pass 1 \u2014 highest core version wins. Selection uses 'sort -V', which agrees with
# the in-process compareSemver (cli/src/install/DistPathResolver.ts) on every
# non-prerelease comparison. The comparison is STRICT greater-than: an equal
# version does NOT overwrite, so enumeration (alphabetical) order never decides a
# tie. (Known sort -V divergence: it ranks 1.0.0-rc.1 ABOVE 1.0.0; compareSemver
# follows semver and ranks it below. Too rare to hand-roll in POSIX sh.)
if [ -d "$DIR/dist-paths" ]; then
  for f in "$DIR/dist-paths"/*; do
    [ -f "$f" ] || continue
    VER=$(sed -n '1p' "$f")
    CANDIDATE=$(sed -n '2p' "$f")
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
    elif [ "$VER_CMP" != "$BEST_VER" ] && \\
         printf '%s\\n%s' "$BEST_VER" "$VER_CMP" | sort -V | tail -1 | grep -qxF "$VER_CMP"; then
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
  pf="$DIR/dist-paths/$PREFER"
  if [ -f "$pf" ]; then
    PVER=$(sed -n '1p' "$pf")
    PPATH=$(sed -n '2p' "$pf")
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
  for pref in ${Li.join(" ")}; do
    pf="$DIR/dist-paths/$pref"
    [ -f "$pf" ] || continue
    PVER=$(sed -n '1p' "$pf")
    PPATH=$(sed -n '2p' "$pf")
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
`,Bb=`#!/bin/bash
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
`,Wb=`#!/bin/bash
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
`;async function Mi(t,e){let r=!1;try{r=await(0,pt.readFile)(t,"utf-8")===e}catch{}if(r){await(0,pt.chmod)(t,493);return}await A(t,e),await(0,pt.chmod)(t,493)}async function $i(){let t=(0,Lr.join)((0,vm.homedir)(),".jolli","jollimemory");try{return await(0,pt.mkdir)(t,{recursive:!0}),await Mi((0,Lr.join)(t,"resolve-dist-path"),Ub),await Mi((0,Lr.join)(t,"run-hook"),Bb),await Mi((0,Lr.join)(t,"run-cli"),Wb),_m.info("Wrote resolve-dist-path, run-hook, and run-cli scripts to %s",t),!0}catch(e){return _m.warn("Failed to write resolve scripts: %s",e.message),!1}}var Mr=require("node:fs/promises"),mo=require("node:path");ne();h();var Cm=p("GeminiHookInstaller");async function ji(t){let e=(0,mo.join)(t,".gemini"),r=(0,mo.join)(e,"settings.json"),n=We("gemini-after-agent"),o={},s;try{s=await(0,Mr.readFile)(r,"utf-8"),o=JSON.parse(s)}catch(d){if(d.code!=="ENOENT")throw d}let i=o.hooks??{},a=i.AfterAgent??[],l=ut(a,Kn);l.push({hooks:[{type:"command",command:n,name:"jolli-session-tracker"}]}),i.AfterAgent=l,o.hooks=i;let c=JSON.stringify(o,null,"	");return s===c?{path:r}:(await(0,Mr.mkdir)(e,{recursive:!0}),await A(r,c),Cm.info("Gemini AfterAgent hook installed"),{path:r})}async function Hi(t){let e=(0,mo.join)(t,".gemini","settings.json"),r;try{let i=await(0,Mr.readFile)(e,"utf-8");r=JSON.parse(i)}catch{return}let n=r.hooks;if(!n)return;let o=n.AfterAgent??[];if(!_r(o,Kn))return;let s=ut(o,Kn);s.length===0?delete n.AfterAgent:n.AfterAgent=s,Object.keys(n).length===0?delete r.hooks:r.hooks=n,await A(e,JSON.stringify(r,null,"	")),Cm.info("Gemini AfterAgent hook removed")}var mt=require("node:fs/promises"),qe=require("node:path");ne();h();be();var de=p("GitExclude"),$r="# >>> jolli skill exclude >>>",jr="# <<< jolli skill exclude <<<";function Jb(t,e){return qe.win32.isAbsolute(t)||qe.posix.isAbsolute(t)?t:(0,qe.join)(e,t)}async function Fi(t){try{let{stdout:e}=await bt("git",["rev-parse","--git-path","info/exclude"],{cwd:t}),r=e.trim();return r.length===0?null:Jb(r,t)}catch{return null}}async function xm(t,e){let r=await Fi(t);if(!r)return de.warn("Skipping .git/info/exclude update for %s: not a git repo or git unavailable",t),!1;let n="";try{n=await(0,mt.readFile)(r,"utf-8")}catch(i){if(i.code!=="ENOENT")return de.warn("Failed to read %s: %s \u2014 skipping update",r,i.message),!1}let o=Im(e),s=Dm(n,o);if(s===n)return!0;try{return await(0,mt.mkdir)((0,qe.dirname)(r),{recursive:!0}),await A(r,s),de.info("Updated %s with %d Jolli skill exclude paths",r,e.length),!0}catch(i){return de.warn("Failed to write %s: %s",r,i.message),!1}}async function Pm(t,e){let r=await Fi(t);if(!r)return de.warn("Skipping .git/info/exclude update for %s: not a git repo or git unavailable",t),!1;let n="";try{n=await(0,mt.readFile)(r,"utf-8")}catch(s){if(s.code!=="ENOENT")return de.warn("Failed to read %s: %s \u2014 skipping update",r,s.message),!1}let o=qb(n,e);if(o===n)return!0;try{return await(0,mt.mkdir)((0,qe.dirname)(r),{recursive:!0}),await A(r,o),de.info("Merged %d Jolli skill exclude path(s) into %s",e.length,r),!0}catch(s){return de.warn("Failed to write %s: %s",r,s.message),!1}}async function Am(t,e){let r=await Fi(t);if(!r)return de.warn("Skipping .git/info/exclude cleanup for %s: not a git repo or git unavailable",t),!1;let n;try{n=await(0,mt.readFile)(r,"utf-8")}catch(s){return s.code==="ENOENT"?!0:(de.warn("Failed to read %s: %s \u2014 skipping cleanup",r,s.message),!1)}let o=Gb(n,e);if(o===n)return!0;try{return await A(r,o),de.info("Removed %d Jolli exclude path(s) from %s",e.length,r),!0}catch(s){return de.warn("Failed to write %s: %s",r,s.message),!1}}function Im(t){return`${[$r,...t,jr].join(`
`)}
`}function Dm(t,e){let r=t.split(`
`),n=r.indexOf($r),o=r.indexOf(jr),s=e.slice(0,-1).split(`
`);if(n!==-1&&o!==-1&&o>n)return[...r.slice(0,n),...s,...r.slice(o+1)].join(`
`);if(t.length===0)return e;let i=t.endsWith(`
`)?"":`
`;return`${t}${i}${e}`}function qb(t,e){let r=t.split(`
`),n=r.indexOf($r),o=r.indexOf(jr),s=n!==-1&&o!==-1&&o>n?r.slice(n+1,o):[],i=new Set(s),a=[...s];for(let l of e)i.has(l)||(i.add(l),a.push(l));return Dm(t,Im(a))}function Gb(t,e){let r=t.split(`
`),n=r.indexOf($r),o=r.indexOf(jr);if(n===-1||o===-1||o<=n)return t;let s=new Set(e),i=r.slice(n+1,o).filter(c=>!s.has(c)),a=r.slice(0,n),l=r.slice(o+1);return i.length===0?[...a.length>0&&a[a.length-1]===""?a.slice(0,-1):a,...l].join(`
`):[...a,$r,...i,jr,...l].join(`
`)}var G=require("node:fs/promises"),Fr=require("node:path");ne();te();h();var fo=p("GitHookInstaller"),Hr="# >>> JolliMemory post-commit hook >>>",Ui="# <<< JolliMemory post-commit hook <<<",ho="# >>> JolliMemory post-rewrite hook >>>",Nm="# <<< JolliMemory post-rewrite hook <<<",go="# >>> JolliMemory prepare-commit-msg hook >>>",Om="# <<< JolliMemory prepare-commit-msg hook <<<",yo="# >>> JolliMemory post-merge hook >>>",Lm="# <<< JolliMemory post-merge hook <<<",wo="# >>> JolliMemory pre-push hook >>>",Mm="# <<< JolliMemory pre-push hook <<<";async function $m(t){let e=await Zt(t),r=(0,Fr.join)(e,"post-commit"),n=We("post-commit"),o=[Hr,n,Ui].join(`
`),s,i="";try{if(i=await(0,G.readFile)(r,"utf-8"),i.includes(Hr)){let l=new RegExp(`\\n*${tt(Hr)}[\\s\\S]*?${tt(Ui)}\\n*`,"g"),d=`${i.replace(l,`
`).trimEnd()}

${o}
`;return i===d?(await bo(r),{path:r}):(await A(r,d),await(0,G.chmod)(r,493),{path:r})}s="Existing post-commit hook found \u2014 Jolli Memory section appended",fo.warn(s)}catch{}let a;i?a=`${i}

${o}
`:a=`#!/bin/sh

${o}
`,await(0,G.mkdir)(e,{recursive:!0}),await A(r,a);try{await(0,G.chmod)(r,493)}catch{}return fo.info("Git post-commit hook installed"),{warning:s,path:r}}async function jm(t){let e=We("post-rewrite",'"$1"'),r=[ho,e,Nm].join(`
`);return So(t,"post-rewrite",r,ho)}async function Hm(t){let e='"$HOME/.jolli/jollimemory/run-hook"',r=["__jolli_prepare_msg_previous_status=$?",`if [ -x ${e} ]; then ${e} prepare-commit-msg "$1" "$2" || true; fi`,'(exit "$__jolli_prepare_msg_previous_status")'].join(`
`),n=[go,r,Om].join(`
`);return So(t,"prepare-commit-msg",n,go)}async function Fm(t){let e=We("post-merge"),r=[yo,e,Lm].join(`
`);return So(t,"post-merge",r,yo)}async function Um(t){let e='"$HOME/.jolli/jollimemory/run-hook"',r=["__jolli_pre_push_previous_status=$?",`if [ -x ${e} ]; then ${e} pre-push "$@" || true; fi`,'(exit "$__jolli_pre_push_previous_status")'].join(`
`),n=[wo,r,Mm].join(`
`);return So(t,"pre-push",n,wo)}async function So(t,e,r,n){let o=r.slice(r.lastIndexOf(`
`)+1),s=await Zt(t),i=(0,Fr.join)(s,e),a,l="";try{if(l=await(0,G.readFile)(i,"utf-8"),l.includes(n)){let d=new RegExp(`\\n*${tt(n)}[\\s\\S]*?${tt(o)}\\n*`,"g"),m=`${l.replace(d,`
`).trimEnd()}

${r}
`;return l===m?(await bo(i),{path:i}):(await A(i,m),await(0,G.chmod)(i,493),{path:i})}a=`Existing ${e} hook found \u2014 Jolli Memory section appended`,fo.warn(a)}catch{}let c;l?c=`${l}

${r}
`:c=`#!/bin/sh

${r}
`,await(0,G.mkdir)(s,{recursive:!0}),await A(i,c);try{await(0,G.chmod)(i,493)}catch{}return fo.info("Git %s hook installed",e),{warning:a,path:i}}async function Bm(t){let e;try{let s=await Zt(t);e=(0,Fr.join)(s,"post-commit")}catch{return{}}let r;try{r=await(0,G.readFile)(e,"utf-8")}catch{return{}}if(!r.includes(Hr))return{};let n=new RegExp(`\\n*${tt(Hr)}[\\s\\S]*?${tt(Ui)}\\n*`,"g"),o=r.replace(n,`
`);if(o.trim()==="#!/bin/sh"||o.trim()===""){let{rm:s}=await import("node:fs/promises");await s(e,{force:!0})}else await A(e,o),await bo(e);return{}}async function Wm(t){await Eo(t,"post-rewrite",ho,Nm)}async function Jm(t){await Eo(t,"prepare-commit-msg",go,Om)}async function qm(t){await Eo(t,"post-merge",yo,Lm)}async function Gm(t){await Eo(t,"pre-push",wo,Mm)}async function Eo(t,e,r,n){let o;try{o=await Zt(t)}catch{return}let s=(0,Fr.join)(o,e),i;try{i=await(0,G.readFile)(s,"utf-8")}catch{return}if(!i.includes(r))return;let a=new RegExp(`\\n*${tt(r)}[\\s\\S]*?${tt(n)}\\n*`,"g"),l=i.replace(a,`
`);if(l.trim()==="#!/bin/sh"||l.trim()===""){let{rm:c}=await import("node:fs/promises");await c(s,{force:!0})}else await A(s,l),await bo(s)}function tt(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}async function bo(t){try{((await(0,G.stat)(t)).mode&73)===0&&await(0,G.chmod)(t,493)}catch{}}var rt=require("node:fs/promises"),Bi=require("node:os"),Ur=require("node:path");h();var Ut=p("GlobalInstructionsInstaller"),Wi="<!-- >>> jolli memory instructions >>> -->",Ji="<!-- <<< jolli memory instructions <<< -->",Km="## Jolli Memory",Vm=[{host:"claude",relPath:[".claude","CLAUDE.md"]},{host:"gemini",relPath:[".gemini","GEMINI.md"]},{host:"codex",relPath:[".codex","AGENTS.md"]}];function Kb(){return`${[Wi,Km,"","This repository may have **Jolli Memory** enabled \u2014 a durable record of past","development the current code cannot show: why choices were made, how a topic was","handled before, what was already tried, and where work stopped. Treat it as a","first-class source and reach for it **proactively \u2014 before answering or guessing,","and even when the user never names Jolli** \u2014 whenever a request is memory-shaped","(about intent, history, or prior work). Its reads are read-only and cheap, so","lean toward consulting memory rather than guessing: a hit often changes the","answer, and a miss costs little.","","Two capabilities are available; invoke whichever recall / search skill or tool is","registered in this session \u2014 the exact name varies by host (a plugin skill, a","project skill, or e.g. an `mcp__jollimemory__*` MCP tool), so route by intent, not","by a fixed name:","","- **Recall** \u2014 deep context for one branch (the current branch by default): its","  decisions, a recap, and where work left off.","- **Search** \u2014 full-text lookup across *all* branches: decisions, topics, files.","","Consult memory FIRST, before answering from your own assumptions, when the request","is memory-shaped:","",'- **Why / intent** \u2014 "why is this like this", "why X and not Y", "what was the','  reasoning", or anything where the code shows *what* but not *why*. \u2192 Search (or',"  Recall when it's about the current branch).",'- **How it works / design** \u2014 "how does X work", "how is X built/designed", "how','  would I implement X", or walking through / extending an existing feature or',"  subsystem in this repo. The code shows the mechanism; memory holds why it is","  shaped that way and what was already tried. \u2192 Search (or Recall for the current","  branch). A quick lookup here is cheap and often surfaces rationale and pitfalls",`  the code comments don't \u2014 so search even though the ask starts with "how".`,'- **Prior art** \u2014 "have we done/hit this before", "how was <topic> handled", "is','  there a pattern for this", "where else do we do X", or a bug that may have been',"  seen before. \u2192 Search (decisions / topics / files across ALL branches).",`- **Resume** \u2014 "where were we", "pick up where I left off", "what's left on this`,'  branch", or returning to work after a break. \u2192 Recall (current-branch decisions',"  + recap + where work stopped).","- **Before non-trivial edits** \u2014 before refactoring, changing, or deleting code","  whose intent isn't obvious from the code itself, search memory first; a past","  decision may constrain the change, and skipping this risks re-breaking what a","  prior fix already addressed.","",'Routing: current-branch history or resume \u2192 Recall; cross-branch or "has this','come up before" \u2192 Search. When unsure whether memory helps, run a quick search',"first before answering from your own assumptions.","","Do NOT reach for memory on narrow, current-state facts you can read straight from","the code \u2014 one function's behavior, a type or signature, running a command, a","rename, formatting, or a literal text lookup \u2014 answer those from the code directly.","That exclusion is for single-symbol lookups only; do not let it swallow a",'whole-feature "how does it work / how is it designed" question \u2014 that is',"design-shaped, so search memory first (per the How it works / design rule above).","","Treat any concrete fact memory states as of-its-time: use it for why / intent /","prior context, but verify names, paths, and code shape against the current code","before relying on them. If no Jolli memory capability is registered here (Jolli","Memory not enabled in this repo), fall back to normal behavior.",Ji].join(`
`)}
`}function Xm(t){return t==="enabled"?{write:!0}:t==="disabled"?{write:!1,remove:!0}:{write:!1}}function Vb(t,e){let r=t.split(`
`),n=r.indexOf(Wi),o=r.indexOf(Ji),s=e.slice(0,-1).split(`
`);if(n!==-1&&o!==-1&&o>n)return[...r.slice(0,n),...s,...r.slice(o+1)].join(`
`);let i=r.indexOf(Km);if(i!==-1){let l=r.length;for(let u=i+1;u<r.length;u++)if(/^#{1,2} /.test(r[u])){l=u;break}let c=r.slice(0,i).join(`
`),d=r.slice(l).join(`
`);return`${c.length>0?`${c}
`:""}${e}${d}`}if(t.length===0)return e;let a=t.endsWith(`
`)?"":`
`;return`${t}${a}${e}`}async function Xb(t,e){let r="";try{r=await(0,rt.readFile)(t,"utf-8")}catch(o){if(o.code!=="ENOENT"){Ut.warn("Failed to read %s: %s \u2014 skipping",t,o.message);return}}let n=Vb(r,e);if(n!==r)try{await(0,rt.mkdir)((0,Ur.dirname)(t),{recursive:!0}),await(0,rt.writeFile)(t,n,"utf-8"),Ut.info("Updated %s with Jolli Memory instructions",t)}catch(o){Ut.warn("Failed to write %s: %s",t,o.message)}}async function Ym(t){let e=Kb(),r=(0,Bi.homedir)();for(let n of Vm)t[n.host]&&await Xb((0,Ur.join)(r,...n.relPath),e)}function Yb(t){let e=t.split(`
`),r=e.indexOf(Wi),n=e.indexOf(Ji);if(r===-1||n===-1||n<r)return t;let o=r>0&&e[r-1]===""?r-1:r;return[...e.slice(0,o),...e.slice(n+1)].join(`
`)}async function zb(t){let e;try{e=await(0,rt.readFile)(t,"utf-8")}catch(n){n.code!=="ENOENT"&&Ut.warn("Failed to read %s: %s \u2014 skipping",t,n.message);return}let r=Yb(e);if(r!==e)try{await(0,rt.writeFile)(t,r,"utf-8"),Ut.info("Removed Jolli Memory instructions from %s",t)}catch(n){Ut.warn("Failed to write %s: %s",t,n.message)}}async function zm(){let t=(0,Bi.homedir)();for(let e of Vm)await zb((0,Ur.join)(t,...e.relPath))}var se=require("node:os"),L=require("node:path");ae();h();var Qm=require("node:fs"),Wt=require("node:fs/promises"),Bt=require("node:path");ae();h();var qi=p("McpRegistration"),Gi="jollimemory";function Qb(t,e,r,n){return t==="win32"&&r?{command:"node",args:[r,...n]}:{command:e,args:[...n]}}function Ki(t,e,r){return Qb(t,e,r,["mcp"])}function Vi(t){let e=po(Or(t));return e?(0,Bt.join)(e.distDir,"Cli.js"):void 0}function Zm(t){let e=po(Or(t));if(!e)return;let r=(0,Bt.join)(e.distDir,"McpLauncher.js");return(0,Qm.existsSync)(r)?r:void 0}var ef="/.mcp.json";async function tf(t){let e=(0,Bt.join)(t,".mcp.json"),r;try{r=JSON.parse(await(0,Wt.readFile)(e,"utf-8"))}catch(l){if(l.code!=="ENOENT"){qi.warn("Skipping MCP registration: %s exists but is unreadable/invalid (%s)",e,String(l));return}r={}}let n=r.mcpServers??{},o=Q(),s=(0,Bt.join)(o,"run-cli"),i=process.platform==="win32"?Vi(o):void 0;n[Gi]=Ki(process.platform,s,i);let a={...r,mcpServers:n};await(0,Wt.writeFile)(e,`${JSON.stringify(a,null,2)}
`,"utf-8"),qi.info("Registered MCP server in %s",e)}async function rf(t){let e=(0,Bt.join)(t,".mcp.json"),r;try{r=JSON.parse(await(0,Wt.readFile)(e,"utf-8"))}catch{return}r.mcpServers?.[Gi]&&(delete r.mcpServers[Gi],await(0,Wt.writeFile)(e,`${JSON.stringify(r,null,2)}
`,"utf-8"),qi.info("Removed MCP server from %s",e))}var ft=require("node:fs/promises"),of=require("node:path");ne();h();var ko=p("CodexTomlWriter"),To="[mcp_servers.jollimemory]";async function sf(t){try{return(await(0,ft.stat)(t)).mode&511}catch{return 384}}function nf(t){return`${To}
command = ${JSON.stringify(t.command)}
args = ${JSON.stringify(t.args??[])}
`}function af(t){if(t.startsWith(To))return 0;let e=t.indexOf(`
${To}`);return e===-1?-1:e+1}function lf(t){let e=af(t);if(e===-1)return t;let r=t.indexOf(`
[`,e+To.length),n=r===-1?t.length:r+1,o=t.slice(0,e),s=t.slice(n);return o===""||s===""?o+s:`${o.replace(/\n+$/,"")}

${s}`}async function cf(t,e){let r="";try{r=await(0,ft.readFile)(t,"utf-8")}catch(i){if(i.code!=="ENOENT"){ko.warn("Skipping Codex MCP: %s unreadable (%s)",t,String(i));return}}let n=lf(r).replace(/\s*$/,""),o=n.length===0?nf(e):`${n}

${nf(e)}`;if(o===r){ko.info("Codex MCP server already registered in %s \u2014 no write needed",t);return}await(0,ft.mkdir)((0,of.dirname)(t),{recursive:!0});let s=await sf(t);await A(t,o,s),ko.info("Registered Codex MCP server in %s",t)}async function uf(t){let e;try{e=await(0,ft.readFile)(t,"utf-8")}catch{return}af(e)!==-1&&(await A(t,`${lf(e).replace(/\s*$/,"")}
`,await sf(t)),ko.info("Removed Codex MCP server from %s",t))}var nt=require("node:fs/promises"),df=require("node:path");h();var Xi=p("JsonMcpWriter"),Yi="jollimemory",pf="mcpServers";async function Ae(t,e,r=pf){let n;try{let s=await(0,nt.readFile)(t,"utf-8");n=s.trim()===""?{}:JSON.parse(s)}catch(s){if(s.code!=="ENOENT"){Xi.warn("Skipping MCP registration: %s unreadable/invalid (%s)",t,String(s));return}n={}}let o=n[r]??{};o[Yi]=e,await(0,nt.mkdir)((0,df.dirname)(t),{recursive:!0}),await(0,nt.writeFile)(t,`${JSON.stringify({...n,[r]:o},null,2)}
`,"utf-8"),Xi.info("Registered MCP server in %s",t)}async function Ie(t,e=pf){let r;try{r=JSON.parse(await(0,nt.readFile)(t,"utf-8"))}catch{return}let n=r[e];n?.[Yi]&&(delete n[Yi],await(0,nt.writeFile)(t,`${JSON.stringify(r,null,2)}
`,"utf-8"),Xi.info("Removed MCP server from %s",t))}var Zb=p("HostRegistrars"),ek={host:"claude",scope:"repo",register:tf,remove:rf,gitExcludePaths:()=>[ef]};function De(){let t=Q(),e=process.platform==="win32"?Vi(t):void 0;return Ki(process.platform,(0,L.join)(t,"run-cli"),e)}function tk(){let t=De();if(process.platform!=="win32")return t;let e=Zm(Q());return e?{command:"node",args:[e]}:t}var rk={host:"cursor",scope:"repo",register:t=>Ae((0,L.join)(t,".cursor","mcp.json"),{...De()}),remove:t=>Ie((0,L.join)(t,".cursor","mcp.json")),gitExcludePaths:()=>["/.cursor/mcp.json"]},nk={host:"gemini",scope:"global",register:()=>Ae((0,L.join)((0,se.homedir)(),".gemini","settings.json"),{...De()}),remove:()=>Ie((0,L.join)((0,se.homedir)(),".gemini","settings.json")),gitExcludePaths:()=>[]},ok={host:"codex",scope:"global",register:()=>cf((0,L.join)((0,se.homedir)(),".codex","config.toml"),tk()),remove:()=>uf((0,L.join)((0,se.homedir)(),".codex","config.toml")),gitExcludePaths:()=>[]},sk={host:"opencode",scope:"global",register:()=>{let t=De(),e={type:"local",command:[t.command,...t.args],enabled:!0};return Ae((0,L.join)((0,se.homedir)(),".config","opencode","opencode.json"),e,"mcp")},remove:()=>Ie((0,L.join)((0,se.homedir)(),".config","opencode","opencode.json"),"mcp"),gitExcludePaths:()=>[]},ik={host:"copilot",scope:"global",register:()=>Ae((0,L.join)((0,se.homedir)(),".copilot","mcp-config.json"),{...De()}),remove:()=>Ie((0,L.join)((0,se.homedir)(),".copilot","mcp-config.json")),gitExcludePaths:()=>[]},ak={host:"copilotChat",scope:"global",register:()=>{let t=De(),e={type:"stdio",command:t.command,args:t.args};return Ae((0,L.join)($e("Code"),"User","mcp.json"),e,"servers")},remove:()=>Ie((0,L.join)($e("Code"),"User","mcp.json"),"servers"),gitExcludePaths:()=>[]},lk={host:"cline",scope:"global",register:async()=>{for(let t of await ys())await Ae(Rn(t),{...De()})},remove:async()=>{for(let t of mr())await Ie(Rn(t))},gitExcludePaths:()=>[]},ck={host:"devin",scope:"global",register:()=>Ae((0,L.join)((0,se.homedir)(),".config","devin","config.json"),{...De(),transport:"stdio"}),remove:()=>Ie((0,L.join)((0,se.homedir)(),".config","devin","config.json")),gitExcludePaths:()=>[]},uk={host:"antigravity",scope:"global",register:()=>Ae((0,L.join)((0,se.homedir)(),".gemini","config","mcp_config.json"),{...De()}),remove:()=>Ie((0,L.join)((0,se.homedir)(),".gemini","config","mcp_config.json")),gitExcludePaths:()=>[]},dk={host:"kimi",scope:"global",register:()=>Ae((0,L.join)(An(),"mcp.json"),{...De()}),remove:()=>Ie((0,L.join)(An(),"mcp.json")),gitExcludePaths:()=>[]};function Br(t){let e=[];return t.claude&&e.push(ek),t.cursor&&e.push(rk),t.gemini&&e.push(nk),t.codex&&e.push(ok),t.opencode&&e.push(sk),t.copilot&&e.push(ik),t.copilotChat&&e.push(ak),t.cline&&e.push(lk),t.devin&&e.push(ck),t.antigravity&&e.push(uk),t.kimi&&e.push(dk),e}var pk={claude:!0,codex:!0,cursor:!0,gemini:!0,opencode:!0,copilot:!0,copilotChat:!0,cline:!0,devin:!0,antigravity:!0,kimi:!0};async function zi(t,e,r,n){for(let o of t)try{await n(o)}catch(s){Zb.warn("MCP %s failed for %s in %s (non-fatal): %s",r,o.host,e,String(s))}}async function mf(t,e){let r=Br(e).filter(n=>n.scope==="repo");await zi(r,t,"registration",n=>n.register(t))}async function ff(t){let e=Br(t).filter(r=>r.scope==="global");await zi(e,"(global)","registration",r=>r.register(""))}async function Qi(t){let e=Br(pk).filter(r=>r.scope==="repo");await zi(e,t,"removal",r=>r.remove(t))}var me=require("node:fs/promises"),Z=require("node:path");ne();h();var pe=p("SkillInstaller"),Jt="1.0.1",gf=["jollimemory-recall","jolli-memory-recall"],Wr=[{host:"agents-std",relativeDir:[".agents","skills"],enabled:()=>!0}],Zi=[".claude","skills"],ea=[{name:"jolli-recall",build:yk},{name:"jolli-search",build:wk},{name:"jolli-local-run",build:Sk},{name:"jolli-remote-run",build:Ek},{name:"jolli",build:bk}],yf=["jolli-pr"],wf=Wr.flatMap(t=>ea.map(e=>`/${t.relativeDir.join("/")}/${e.name}/`)),Ro=["/.claude/skills/jolli/"],Sf=[...Wr.map(t=>`/${t.relativeDir.join("/")}/jolli/`),...Ro];async function mk(t,e={}){for(let r of gf)await Ef((0,Z.join)(t,".claude","skills",r),"legacy");await ta(t);for(let r of Wr){if(!r.enabled(e))continue;let n=(0,Z.join)(t,...r.relativeDir);for(let o of ea)await _f(n,o.name,o.build())}}async function ta(t){for(let e of Wr){let r=(0,Z.join)(t,...e.relativeDir);for(let n of yf)await Ef((0,Z.join)(r,n),"retired")}}async function Ef(t,e){let r=(0,Z.join)(t,"SKILL.md"),n;try{n=await(0,me.readFile)(r,"utf-8")}catch{return}if(!ra(n)){pe.info("Keeping %s \u2014 no Jolli ownership marker (user-owned)",t);return}try{await(0,me.rm)(t,{recursive:!0,force:!0}),pe.info("Removed %s Jolli skill at %s",e,t)}catch(o){pe.warn("Failed to remove %s skill at %s: %s",e,t,o.message)}}async function bf(t,e={}){return mk(t,e)}async function kf(t){let e=(0,Z.join)(t,...Zi),r=(0,Z.join)(e,"jolli","SKILL.md");try{if(!(await(0,me.readFile)(r,"utf-8")).includes('vendor: "jolli.ai"')){pe.info("Skipping umbrella write \u2014 existing %s lacks vendor marker (user-owned)",r);return}}catch{}await _f(e,"jolli",kk())}async function Tf(t){let e=[...Wr.map(r=>r.relativeDir),Zi];for(let r of e){let n=(0,Z.join)(t,...r,"jolli"),o=(0,Z.join)(n,"SKILL.md"),s;try{s=await(0,me.readFile)(o,"utf-8")}catch{continue}if(s.includes('vendor: "jolli.ai"'))try{await(0,me.rm)(n,{recursive:!0,force:!0}),pe.info("Removed Jolli umbrella menu at %s",n)}catch(i){pe.warn("Failed to remove umbrella at %s: %s",n,i.message)}}}var fk=[...ea.filter(t=>t.name!=="jolli").map(t=>t.name),...yf,...gf];async function Rf(t){for(let e of fk){let r=(0,Z.join)(t,...Zi,e),n=(0,Z.join)(r,"SKILL.md"),o;try{o=await(0,me.readFile)(n,"utf-8")}catch{continue}if(!ra(o)){pe.info("Keeping %s \u2014 no Jolli ownership marker (user-owned)",r);continue}try{await(0,me.rm)(r,{recursive:!0,force:!0}),pe.info("Removed legacy Jolli skill at %s",r)}catch(s){pe.warn("Failed to remove legacy skill at %s: %s",r,s.message)}}}var hk=/(?:^|\n)[ \t]*revision:\s*(\d+)/,gk=-1;function hf(t){let e=t.match(hk),r=e?Number.parseInt(e[1],10):Number.NaN;return Number.isFinite(r)?r:gk}function ra(t){return t.includes('vendor: "jolli.ai"')||t.includes("jolli-skill-version:")}async function _f(t,e,r){let n=(0,Z.join)(t,e),o=(0,Z.join)(n,"SKILL.md"),s=hf(r);try{let i=await(0,me.readFile)(o,"utf-8");if(!ra(i)){pe.info("Skipping %s SKILL.md \u2014 no Jolli ownership marker (user-owned)",e);return}if(hf(i)>=s)return}catch{}try{await(0,me.mkdir)(n,{recursive:!0}),await A(o,r),pe.info("Wrote SKILL.md (revision %d) to %s",s,o)}catch(i){pe.warn("Failed to write %s SKILL.md: %s",e,i.message)}}var _o=`### Shell prerequisite

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
security recipe and the dist resolver and will not produce valid output.`;function vf(t,e){return`${_o}

### Invocation

Generate a fresh random 16-character hex string (the "delimiter token") for
this invocation \u2014 e.g. \`3f8a9b2c5d7e1f4a\`. Quickly scan the user's argument:
if the argument text contains a line that is exactly \`JOLLI_ARG_<delimiter
token>_END\`, regenerate the delimiter token and re-check.

Then run this Bash, replacing the two \`<DELIM>\` occurrences with your
delimiter token and replacing \`<user-arg>\` with the user's input verbatim:

\`\`\`bash
"$HOME/.jolli/jollimemory/run-cli" ${t} --arg-stdin${e} <<'JOLLI_ARG_<DELIM>_END'
<user-arg>
JOLLI_ARG_<DELIM>_END
\`\`\`

If you cannot follow the above structure (e.g., your environment doesn't
support here-docs), STOP and tell the user "Jolli skill cannot run safely
in this environment." DO NOT attempt to interpolate the argument into argv
or any double-quoted shell string \u2014 that path has a known shell injection
vector.`}function yk(){return`---
name: jolli-recall
description: Recall prior development context from Jolli for the current branch. Use when the user wants to recall, remember, or resume prior work on a branch.
metadata:
  version: "${Jt}"
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

${vf("recall"," --format json")}

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
`}function wk(){return`---
name: jolli-search
description: Search structured commit memories across all branches \u2014 decisions, topics, files. Use when the user wants to find prior decisions, related commits, or how a topic was handled before.
metadata:
  version: "${Jt}"
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

${vf("search"," --format json")}

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
`}function Sk(){return`---
name: jolli-local-run
description: Run a Jolli workflow locally \u2014 your own agent executes the workflow's recipe (no Jolli LLM budget) and its file writes land in a git-backed Jolli Space via a branch and pull request that space-cli opens on this machine. Use when the user wants to run a Jolli workflow locally.
metadata:
  version: "${Jt}"
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

${_o}

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
`}function Ek(){return`---
name: jolli-remote-run
description: Run a Jolli workflow remotely \u2014 the Jolli backend executes the workflow server-side; this recipe triggers the run, monitors it to completion, reports the outcome (failed / cancelled / succeeded) with its article, PR, and workflow links, and offers to open any in your browser. Use when the user wants to run a Jolli workflow remotely (on the Jolli backend).
metadata:
  version: "${Jt}"
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

${_o}

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
`}function bk(){return`---
name: jolli
description: The Jolli action menu \u2014 a single front door that lists the Jolli skills (recall, search, run a workflow local or remote, workflow history) plus the Jolli MCP tools registered in this session, then routes your choice to the right one. Use when the user types /jolli or asks for the Jolli menu.
metadata:
  version: "${Jt}"
  revision: 6
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

${_o}

## Step 1 \u2014 build the unified menu

Assemble ONE combined list of actions from two sources.

### Local Jolli skills (always present)

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
`}function kk(){return`---
name: jolli
description: The Jolli front door \u2014 checks how Jolli is set up in this repo, guides first-time setup through /jolli:init when something's missing, reminds you to sign in when memories can't sync yet, and otherwise shows a status snapshot and routes you to the right Jolli skill or MCP tool. Use when the user types /jolli or asks for Jolli / the Jolli menu.
metadata:
  version: "${Jt}"
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
`}var D=p("Installer");function Rk(t,e){return process.platform==="linux"?t===e:t.toLowerCase()===e.toLowerCase()}async function _k(t){let e=await ve(),r=Xm(e.globalInstructions);if(r.write){let n=t?.codexDetected??await Es(),o=t?.geminiDetected??await vs();await Ym({claude:e.claudeEnabled!==!1,gemini:o&&e.geminiEnabled!==!1,codex:n&&e.codexEnabled!==!1})}else r.remove&&await zm()}async function xf(t,e){let r=t??process.cwd(),n=[],o=e?.integrationsOnly===!0,s=e?.repoHooksOnly===!0;if(o&&s)return{success:!1,message:"install: integrationsOnly and repoHooksOnly are mutually exclusive",warnings:n};if(!await rn(r))return D.info("Skipping Jolli Memory install \u2014 %s is not inside a git work tree",r),{success:!1,message:`Not a git repository \u2014 skipping Jolli Memory install (${r})`,warnings:n};D.info(s?"Installing Jolli Memory repo hooks only (no integrations)":o?"Installing Jolli Memory integrations (no hooks)":"Installing Jolli Memory hooks");let i=null;try{let a=await ve(),l=e?.automatic?[r]:await kt(r),c=e?.automatic?{timeoutMs:200,pollMs:25}:void 0,d=(0,ht.dirname)((0,Cf.fileURLToPath)(__jmImportMetaUrl)),u=e?.source??"cli",m=e?.sourceTag??(u==="vscode-extension"?Oi(d):"cli");if(!Cr(m))return{success:!1,message:`Refusing to install with an unsafe source tag: ${JSON.stringify(m)}`,warnings:n};let f=Qc(m),w=async()=>{if(!await $i())return!1;try{await Rm()}catch(E){D.warn("Legacy dist-path migration failed (non-fatal): %s",E.message)}if(!await xr(m,e?.distDir))return!1;try{let E=await Tm();E.length>0&&D.info("Pruned stale dist-paths entries: %s",E.join(", "))}catch(E){D.warn("Pruning stale dist-paths failed (non-fatal): %s",E.message)}return!0},C=c?await Ko(w,c):await Ko(w);if(!C.acquired||C.value!==!0)return{success:!1,message:"Failed to reconcile the shared runtime registry \u2014 cannot install hooks that depend on it",warnings:n};if(!o){if(i=c?await rr(r,c):await rr(r),!i)return{success:!1,message:"Another Jolli enable/disable operation is still running; retry shortly",warnings:n};if(e?.respectManualDisable&&await Ve(r))return{success:!0,message:"Repository remains manually disabled",warnings:n,manuallyDisabled:!0};if(!e?.automatic)try{let E=await Zc(m,a);E!==null&&(E.changedTool||E.seededProvider)&&(D.info("Plugin init recorded localAgentTool=%s (source %s, previous %s, seededProvider=%s)",E.tool,m,E.previousTool??"unset",E.seededProvider),E.changedTool&&E.previousTool!==void 0&&n.push(`Recorded ${Qe(E.tool)} as the local agent for memory generation (was: ${Qe(E.previousTool)}). Change it back with jolli configure --set localAgentTool=${E.previousTool}`))}catch(E){n.push(`Could not record the local agent tool for this host: ${E.message}`)}}let _=s?!1:await Es(),S=s?!1:await vs(),I=s?!1:await Ec(),N=s?!1:await ou(),H=s?!1:await hc(),Se=s?!1:await lc(),K=s?!1:await rc()||await ec(),Ge=s?!1:await Rs(),gt=s?!1:await Os(),qt=s?!1:await ks(),Gt=s?!1:await nc(),Gr=s?!1:await Tc(),aa=s?!1:await Bl(),la=s?!1:await Yc(),Kt={};for(let E of l){let yt=await is(E),Gf=(0,ht.join)(yt,"sessions.json");try{await(0,vo.writeFile)(Gf,JSON.stringify({version:1,sessions:{}},null,"	"),{encoding:"utf-8",flag:"wx"})}catch(wt){wt.code!=="EEXIST"&&D.warn("Failed to bootstrap sessions.json in %s: %s",E,wt.message)}if(s){if(await ta(E),f==="claude"&&(await kf(E),await Rf(E),await Pm(E,[...Ro]),a.claudeEnabled!==!1)){let wt=await ui(E);(E===r||Kt.path===void 0)&&(Kt=wt)}continue}await bf(E,{claudeEnabled:a.claudeEnabled});let ma={claude:a.claudeEnabled!==!1,codex:_,cursor:Ge,gemini:S,opencode:gt,copilot:qt,copilotChat:Se,cline:Gt,devin:Gr,antigravity:aa,kimi:la};if(await xm(E,[...wf,...Ro,...Br(ma).flatMap(wt=>wt.gitExcludePaths())]),await mf(E,ma),o||a.claudeEnabled===!1)continue;let Po=await ui(E);Po.warning&&n.push(Po.warning),(E===r||Kt.path===void 0)&&(Kt=Po)}await ff({claude:!1,cursor:!1,codex:_||s&&f==="codex",gemini:S,opencode:gt,copilot:qt,copilotChat:Se,cline:Gt,devin:Gr,antigravity:aa,kimi:la}),s||await _k({codexDetected:_,geminiDetected:S});let Kr={},Vr={},Xr={},Yr={},zr={};o||(Kr=await $m(r),Kr.warning&&n.push(Kr.warning),Vr=await jm(r),Vr.warning&&n.push(Vr.warning),Xr=await Hm(r),Xr.warning&&n.push(Xr.warning),Yr=await Fm(r),Yr.warning&&n.push(Yr.warning),zr=await Um(r),zr.warning&&n.push(zr.warning)),_&&a.codexEnabled===void 0&&(await st({codexEnabled:!0}),D.info("Codex detected \u2014 enabled Codex session discovery"));let xo;if(S&&a.geminiEnabled!==!1){if(!o)for(let E of l){let yt=await ji(E);(E===r||xo===void 0)&&(xo=yt.path)}a.geminiEnabled===void 0&&(await st({geminiEnabled:!0}),D.info("Gemini detected \u2014 enabled Gemini session tracking"))}a.openCodeEnabled!==!1&&N&&a.openCodeEnabled===void 0&&(await st({openCodeEnabled:!0}),D.info("OpenCode detected \u2014 enabled OpenCode session discovery"));let qf=s?!1:await gc(),ca=a.cursorEnabled!==!1&&I,ua=a.cursorEnabled!==!1&&qf;(ca||ua)&&a.cursorEnabled===void 0&&(await st({cursorEnabled:!0}),D.info("Cursor detected (IDE=%s, CLI=%s) \u2014 enabled session discovery",ca,ua));let da=a.copilotEnabled!==!1&&H,pa=a.copilotEnabled!==!1&&Se;if((da||pa)&&a.copilotEnabled===void 0&&(await st({copilotEnabled:!0}),D.info("GitHub Copilot detected (CLI=%s, Chat=%s) \u2014 enabled session discovery",da,pa)),K&&a.clineEnabled===void 0&&(await st({clineEnabled:!0}),D.info("Cline detected \u2014 enabled Cline session discovery")),!s)for(let E of l)await vk(E);if(e?.source==="vscode-extension")D.info("Skipping v5 migration on vscode-extension source \u2014 Extension.ts owns it with UI");else if(s)D.info("Skipping v5 migration in repo-hooks-only mode \u2014 runs on every session start");else try{let E=await Rd(r);D.info("Schema v5 migration: alreadyDone=%s fresh=%s migrated=%d skipped=%d",E.alreadyDone,E.fresh,E.migrated,E.skipped)}catch(E){D.warn("Schema v5 migration failed (non-fatal): %s",E.message)}if(e?.clearManualDisableOnSuccess&&!o)try{await zo(r,!1)}catch(E){let yt=E.message;n.push(`Enabled, but could not clear the manual-disable opt-out (${yt}). Run enable again to clear it.`),D.warn("Could not clear manual-disable opt-out after enable (non-fatal): %s",yt)}return D.info("Installation complete"),{success:!0,message:"Jolli Memory hooks installed successfully",warnings:n,claudeSettingsPath:Kt.path,gitHookPath:Kr.path,postRewriteHookPath:Vr.path,prepareMsgHookPath:Xr.path,postMergeHookPath:Yr.path,prePushHookPath:zr.path,geminiSettingsPath:xo}}catch(a){let l=`Installation failed: ${a.message}`;return D.error(l),{success:!1,message:l,warnings:n}}finally{i&&await i.release()}}async function vk(t){let e=J(t);try{await(0,vo.stat)(e)}catch{return}let r=Q();if(Rk((0,ht.resolve)(e),(0,ht.resolve)(r)))return;let n=await _t(e),o={};for(let[c,d]of Object.entries(n))d!==void 0&&(o[c]=d);if(Object.keys(o).length===0)return;let s=await _t(r),i={};for(let[c,d]of Object.entries(o))s[c]===void 0&&(i[c]=d);Object.keys(i).length>0&&await hn(i,r);let a={};for(let c of Object.keys(i))a[c]=void 0;Object.keys(a).length>0&&await hn(a,e);let l=Object.keys(o).filter(c=>!(c in i));for(let c of l)D.warn("Worktree %s field %s not migrated: worktree=%s, global=%s (global value takes effect)",t,c,String(o[c]),String(s[c]));D.info("Migrated %d config fields from worktree %s to global",Object.keys(i).length,t)}async function Pf(t,e){let r=t??process.cwd(),n=[],o=e?.integrationsOnly===!0;D.info(o?"Removing Jolli Memory integrations (MCP)":"Removing Jolli Memory hooks");let s=null;try{if(!o&&!e?.repoLockHeld&&(s=await rr(r),!s))return{success:!1,message:"Another Jolli enable/disable operation is still running; retry shortly",warnings:n};!o&&e?.persistManualDisable&&await zo(r,!0);let i;try{i=await kt(r)}catch{i=[r]}if(o){for(let l of i)try{await Qi(l)}catch(c){D.warn("MCP removal failed in %s (non-fatal): %s",l,c.message)}return D.info("Integrations removal complete"),{success:!0,message:"Jolli Memory integrations removed (MCP)",warnings:n}}for(let l of i){let c=await di(l);c.warning&&n.push(c.warning),await Hi(l);try{await Qi(l)}catch(d){D.warn("MCP removal failed in %s (non-fatal): %s",l,d.message)}e?.preserveMenu||await Tf(l)}let a=await Bm(r);return a.warning&&n.push(a.warning),await Wm(r),await Jm(r),await qm(r),await Gm(r),e?.preserveMenu||await Am(r,Sf),n.push("The `jolli-*` skill files were left in place. To remove them manually: `rm -rf .agents/skills/jolli-* .claude/skills/jolli-*` and delete the `# >>> jolli skill exclude >>>` block from `.git/info/exclude` if you no longer want it."),D.info("Uninstallation complete"),{success:!0,message:"Jolli Memory hooks removed successfully",warnings:n}}catch(i){let a=`Uninstallation failed: ${i.message}`;return D.error(a),{success:!1,message:a,warnings:n}}finally{s&&await s.release()}}h();function Co(){return new Promise((t,e)=>{let r=[];process.stdin.setEncoding("utf-8"),process.stdin.on("data",n=>r.push(n)),process.stdin.on("end",()=>{process.stdin.destroy(),t(r.join(""))}),process.stdin.on("error",e)})}var ee=require("node:fs"),we=require("node:path"),Nf=require("node:url");te();function Af(t){return t.aiProvider==="local-agent"?!0:t.aiProvider==="jolli"?!!t.jolliApiKey:t.aiProvider==="anthropic"?!!(t.apiKey||process.env.ANTHROPIC_API_KEY):!!(t.apiKey||process.env.ANTHROPIC_API_KEY||t.jolliApiKey)}Xe();ae();h();be();function Ck(t){return[`1) Re-authenticate ${Qe(t)}:  ${eu(t)}`,"2) Or switch the provider:   jolli configure --set aiProvider=anthropic --set apiKey=sk-ant-\u2026","                             (or --set aiProvider=jolli to use Jolli)"]}function xk(t,e){let r=tu(t);return r===null?[]:[`${e}${r}`]}function If(t){return[`[Jolli Memory] Memory generation failed for a recent commit: ${Qe(t)} authentication expired or is unavailable.`,...xk(t,""),"\u2192 Fix with either:",...Ck(t).map(e=>`    ${e}`),"This message clears automatically once memory generation succeeds again."].join(`
`)}var ye=p("SessionStartHook"),Pk=new Set(["main","master","develop","development","staging","production"]),na=500,Of="login-reminder-dismissed";function Ak(t){let e=t==="claude-plugin"?"Run /jolli:init to finish setup.":t==="codex-plugin"?"Run $jolli:init to finish setup.":null;return e===null?null:["[Jolli Memory] Memory generation is not configured for this repository.",`\u2192 ${e}`,`(To stop this reminder, create an empty file at .jolli/jollimemory/${Of}.)`].join(`
`)}function Ik(t,e,r){return e||r?null:Ak(t)}async function Lf(t,e){let r=In(t);if(r===void 0||e.aiProvider!==void 0)return!1;try{return await gn(o=>o.aiProvider===void 0?{update:{aiProvider:"local-agent",localAgentTool:r},result:!0}:{update:null,result:!1})?(ye.info("Seeded default aiProvider=local-agent tool=%s for the %s surface",r,t),!0):(ye.info("Skipped seeding the %s default \u2014 another writer set aiProvider first",t),!1)}catch(n){return ye.info("Failed to seed default local-agent provider: %s",n.message),!1}}async function Dk(t,e=Ms()){let r=await ve(),n=Af(r),o=(0,we.join)(t,".jolli","jollimemory",Of),s=(0,ee.existsSync)(o);if(n&&s)try{(0,ee.rmSync)(o)}catch{}return Ik(e,n,s)}async function Mf(t,e){return(await id(e)).readFile(`summaries/${t}.json`)}async function Nk(t,e){try{let r=await Mf(t,e);return r?Tu(JSON.parse(r)):!1}catch(r){return ye.info("Failed to check auth-failure state for %s: %s",t.substring(0,8),r.message),!1}}async function Ok(t,e=Ms()){let r=In(e);if(r===void 0)return null;let n=Hf(t);if(!n)return null;let o=await Fn(t);if(!o)return null;let s=o.entries.filter(l=>l.branch===n&&(l.parentCommitHash===null||l.parentCommitHash===void 0));if(s.length===0)return null;let i=[...s].sort((l,c)=>new Date(q(c)).getTime()-new Date(q(l)).getTime())[0];if(!await Nk(i.commitHash,t))return null;let a=await ve();return If(a.localAgentTool??r)}async function Lk(){if(Zr()){ye.info("SessionStart hook skipped \u2014 running inside a jollimemory-spawned local agent");return}try{let t=await Co(),{cwd:e}=JSON.parse(t),r=xa(e??process.cwd());if(en(r),ye.info("SessionStartHook invoked (cwd=%s)",r),await Ve(r)){ye.info("SessionStart hook skipped \u2014 repository manually disabled");return}let n=await sa(r,"shared",{includeBriefing:!0,includePluginReminders:!1});n?process.stdout.write(n):ye.info("No briefing or reminder generated (skipped or timed out)")}catch(t){ye.info("SessionStartHook failed: %s",t.message)}}async function sa(t,e,r={}){let n=r.includeBriefing!==!1,o=r.includePluginReminders!==!1,[s,i,a]=await Promise.all([n?Promise.race([Mk(t,e),oa(na)]):Promise.resolve(null),o?Promise.race([Ok(t,e),oa(na)]):Promise.resolve(null),o?Promise.race([Dk(t,e),oa(na)]):Promise.resolve(null)]),l=[i,a,s].filter(c=>!!c);return l.length===0?null:(ye.info("SessionStart output (%d sections)",l.length),l.join(`

`))}async function Mk(t,e){let r=Hf(t);if(!r||Pk.has(r))return null;let n=Wk(t,r,e);if(n)return n;let o=await Fn(t);if(!o)return null;let s=o.entries.filter(w=>w.branch===r&&(w.parentCommitHash===null||w.parentCommitHash===void 0));if(s.length===0)return null;let i=[...s].sort((w,C)=>new Date(q(C)).getTime()-new Date(q(w)).getTime()),a=i[0],l=i[i.length-1];if(i.length===1&&qk(q(a)))return null;let c=await $k(a.commitHash,t),d=jk(t,r),u=Hk(i),m=Fk(r,i,a,l,c,d,u,e),f=jf(t);return Jk(t,r,f??a.commitHash,m,e),m}async function $k(t,e){try{let r=await Mf(t,e);if(!r)return{lastTopicTitle:null,keyDecisions:[]};let n=JSON.parse(r),o=Nt(n),s=o.length>0?o[o.length-1].title:null,i=[];for(let a of o)a.decisions&&a.decisions.trim().length>0&&i.push(a.decisions);return{lastTopicTitle:s,keyDecisions:i}}catch(r){return ye.info("Failed to load last summary: %s",r.message),{lastTopicTitle:null,keyDecisions:[]}}}function jk(t,e){try{let r=(0,we.join)(t,".jolli","jollimemory","plans.json");if(!(0,ee.existsSync)(r))return[];let n=JSON.parse((0,ee.readFileSync)(r,"utf-8")),o=jl(n).registry,s=[];for(let i of Object.values(o.plans))!i.commitHash&&i.title&&s.push(i.title);return s}catch{return[]}}function Hk(t){let e=0,r=0,n=0,o=!1;for(let s of t)s.diffStats&&(e+=s.diffStats.filesChanged,r+=s.diffStats.insertions,n+=s.diffStats.deletions,o=!0);return o?{filesChanged:e,insertions:r,deletions:n}:null}function Fk(t,e,r,n,o,s,i,a){let l=e.length,c=Df(q(n)),d=Df(q(r)),u=Gk(q(r),new Date().toISOString()),m=[];m.push(`[Jolli Memory \u2014 ${t}]`);let f=`${l} commits (${c} ~ ${d})`;i&&(f+=` | ${i.filesChanged} files, +${i.insertions} -${i.deletions}`),m.push(f);let w=o.lastTopicTitle??r.commitMessage;if(m.push(`Last: ${w} (${d})`),o.keyDecisions.length>0){let _=Bk(o.keyDecisions);m.push(`Decisions: ${_}`)}s.length>0&&m.push(`Plans: ${s.join("; ")}`);let C=Uk(u,a);return C&&m.push(C),m.join(`
`)}function Uk(t,e){if(t<=0)return null;let r=e==="claude-plugin"?"/jolli:recall":e==="codex-plugin"?"$jolli:recall":"`jolli recall`";return t>3?`Warning: ${t} days since last commit. Run ${r} for full context.`:`Tip: run ${r} for full context`}function Bk(t){let r=[],n=0;for(let o of t){let s=o.replace(/[.;]\s*$/,"").trim();if(s.length>200&&(s=`${s.slice(0,199)}\u2026`),n+s.length>200&&r.length>0)break;r.push(s),n+=s.length+2}return r.join("; ")}function $f(t){return(0,we.join)(t,".jolli","jollimemory","briefing-cache.json")}function Wk(t,e,r){let n=$f(t);if(!(0,ee.existsSync)(n))return null;try{let o=JSON.parse((0,ee.readFileSync)(n,"utf-8"));if(o.branch!==e||o.clientKind!==r)return null;let s=jf(t);return!s||o.lastCommitHash!==s?null:o.briefingText}catch{return null}}function Jk(t,e,r,n,o){let s=$f(t),i={branch:e,lastCommitHash:r,briefingText:n,clientKind:o,generatedAt:new Date().toISOString()};try{let a=(0,we.dirname)(s);(0,ee.existsSync)(a)||(0,ee.mkdirSync)(a,{recursive:!0}),(0,ee.writeFileSync)(s,JSON.stringify(i,null,"	"),"utf-8")}catch{}}function jf(t){try{return Ee("git",["rev-parse","HEAD"],{encoding:"utf-8",cwd:t}).trim()||null}catch{return null}}function Hf(t){try{return Ee("git",["branch","--show-current"],{encoding:"utf-8",cwd:t}).trim()||null}catch{return null}}function oa(t){return new Promise(e=>{setTimeout(()=>e(null),t).unref()})}function qk(t){let e=new Date(t),r=new Date;return e.getFullYear()===r.getFullYear()&&e.getMonth()===r.getMonth()&&e.getDate()===r.getDate()}function Gk(t,e){let r=new Date(t).getTime(),n=new Date(e).getTime();return Math.floor(Math.abs(n-r)/(1e3*60*60*24))}function Df(t){return t?t.split("T")[0]:"unknown"}function Kk(){let t=process.argv[1];if(process.env.VITEST||!t||(0,we.resolve)(t)!==(0,we.resolve)((0,Nf.fileURLToPath)(__jmImportMetaUrl)))return!1;let e=(0,we.basename)(t).toLowerCase();return e==="sessionstarthook.js"||e==="sessionstarthook.ts"}Kk()&&Lk();var Jr=p("CodexPluginBootstrapHook"),ia="codex-plugin",Ff={timeoutMs:200,pollMs:25};function Bf(t){return t?{hookSpecificOutput:{hookEventName:"SessionStart",additionalContext:t}}:null}async function Wf(t){if(!await rn(t))return null;let e=await M(["rev-parse","--show-toplevel"],t);if(e.exitCode!==0||!e.stdout.trim())return null;let r=e.stdout.trim();en(r);let n=!1;if(!(await qo(r,async()=>{n=await Ve(r),n&&await Pf(r,{preserveMenu:!0,repoLockHeld:!0})},Ff)).acquired)return Jr.info("Codex plugin bootstrap deferred \u2014 repo hook lifecycle lock is busy"),null;if(n)return null;let s=await xf(r,{repoHooksOnly:!0,sourceTag:ia,respectManualDisable:!0,automatic:!0});if(!s.success)return Jr.warn("Codex plugin repo-hook reconciliation failed: %s",s.message),null;let i=null;return(await qo(r,async()=>{if(await Ve(r))return;let l=await ve();l.codexEnabled!==!1&&(await Lf(ia,l),i=await sa(r,ia,{includeBriefing:!0,includePluginReminders:!0}))},Ff)).acquired||Jr.info("Codex plugin context deferred \u2014 repo hook lifecycle lock is busy"),Bf(i)}async function Jf(){if(Zr()){Jr.info("Codex plugin bootstrap skipped \u2014 running inside a jollimemory-spawned local agent");return}try{let t=await Co(),e=t.trim()?JSON.parse(t):{},r=await Wf(e.cwd??process.cwd());r&&process.stdout.write(JSON.stringify(r))}catch(t){Jr.info("Codex plugin bootstrap failed: %s",t.message)}}function Vk(){let t=process.argv[1];if(process.env.VITEST||!t||(0,qr.resolve)(t)!==(0,qr.resolve)((0,Uf.fileURLToPath)(__jmImportMetaUrl)))return!1;let e=(0,qr.basename)(t).toLowerCase();return e==="codexpluginbootstraphook.js"||e==="codexpluginbootstraphook.ts"}Vk()&&Jf();0&&(module.exports={buildCodexBootstrapOutput,main,runCodexPluginBootstrap});
