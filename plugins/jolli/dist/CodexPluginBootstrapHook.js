#!/usr/bin/env node
const __jmImportMetaUrl = require("node:url").pathToFileURL(__filename).href;
"use strict";var mp=Object.create;var Er=Object.defineProperty;var gp=Object.getOwnPropertyDescriptor;var hp=Object.getOwnPropertyNames;var yp=Object.getPrototypeOf,wp=Object.prototype.hasOwnProperty;var w=(t,e,r)=>()=>{if(r)throw r[0];try{return t&&(e=t(t=0)),e}catch(n){throw r=[n],n}};var S=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(r){throw e=0,r}},gs=(t,e)=>{for(var r in e)Er(t,r,{get:e[r],enumerable:!0})},hs=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of hp(e))!wp.call(t,o)&&o!==r&&Er(t,o,{get:()=>e[o],enumerable:!(n=gp(e,o))||n.enumerable});return t};var qn=(t,e,r)=>(r=t!=null?mp(yp(t)):{},hs(e||!t||!t.__esModule?Er(r,"default",{value:t,enumerable:!0}):r,t)),Sp=t=>hs(Er({},"__esModule",{value:!0}),t);function Wn(){return Ep.getStore()?.traceId}var ws,bb,Ep,Gn=w(()=>{"use strict";ws=require("node:async_hooks"),bb="0".repeat(32),Ep=new ws.AsyncLocalStorage});function I(t){return t instanceof Error?t.message:String(t)}function xr(t){ks=t}function xe(){return Es}function Ip(t,e){let r=Cp[e]??Pp;return Ss[t]>=Ss[r]}function Ap(t,e,r,n,o){let i=new Date().toISOString(),s=t.toUpperCase().padEnd(5),a=r,l=0;a=a.replace(/%[sdj]/g,d=>{if(l>=n.length)return d;let u=n[l++];return d==="%d"?String(Number(u)):d==="%j"?JSON.stringify(u):String(u)});let c=o?` [trace=${o}]`:"";return`[${i}] ${s} [${e}]${c} ${a}`}function J(t){let e=t??ks??process.cwd();return(0,at.join)(e,vp,Rp)}function Dt(t){return String(t).padStart(2,"0")}async function Mp(t,e){let r=new Date,n=`${r.getUTCFullYear()}-${Dt(r.getUTCMonth()+1)}-${Dt(r.getUTCDate())}_${Dt(r.getUTCHours())}-${Dt(r.getUTCMinutes())}-${Dt(r.getUTCSeconds())}`;try{let o=(0,at.join)(t,`debug_${n}.log`);for(let i=1;await $p(o);i++)o=(0,at.join)(t,`debug_${n}_${i}.log`);await(0,se.rename)(e,o)}catch{return}try{let o=(await(0,se.readdir)(t)).filter(i=>Op.test(i)).sort();for(let i=0;i<o.length-Dp;i++)await(0,se.unlink)((0,at.join)(t,o[i])).catch(()=>{})}catch{}}async function $p(t){try{return await(0,se.stat)(t),!0}catch{return!1}}function Np(t){process.env.VITEST||process.env.JOLLI_DISABLE_LOG_FILE||Es||(bs=bs.then(async()=>{try{let e=J(),r=(0,at.join)(e,xp);await(0,se.stat)(e);try{(await(0,se.stat)(r)).size>_p&&await Mp(e,r)}catch{}await(0,se.appendFile)(r,`${t}
`,"utf-8")}catch{}}))}function f(t){function e(r,n,o){let i=Ap(r,t,n,o,Wn());Tp&&(r==="info"||r==="debug")||(r==="warn"?console.warn(i):console.error(i)),Ip(r,t)&&Np(i)}return{debug(r,...n){e("debug",r,n)},info(r,...n){e("info",r,n)},warn(r,...n){e("warn",r,n)},error(r,...n){e("error",r,n)}}}var se,at,vp,Rp,xp,Z,ks,Es,Ss,Pp,Cp,Tp,bs,_p,Dp,Op,y=w(()=>{"use strict";se=require("node:fs/promises"),at=require("node:path");Gn();vp=".jolli",Rp="jollimemory",xp="debug.log";Z="jollimemory/summaries/v3";Es=!1;Ss={debug:0,info:1,warn:2,error:3},Pp="info",Cp={},Tp=!0;bs=Promise.resolve(),_p=2*1024*1024,Dp=10,Op=/^debug_.*\.log$/});function lt(t,e,r){return(0,vs.promisify)(Pe.execFile)(t,e,{...Ot,...r??{}})}function Fe(t,e,r){return(0,Pe.execFileSync)(t,e,{...Ot,...r??{}})}function Rs(t,e,r){return(0,Pe.spawnSync)(t,e,{...Ot,...r??{}})}var Pe,vs,Ot,Mt,Ce=w(()=>{"use strict";Pe=require("node:child_process"),vs=require("node:util"),Ot={windowsHide:!0};Mt=((t,e,r)=>Array.isArray(e)?(0,Pe.spawn)(t,e,{...Ot,...r??{}}):(0,Pe.spawn)(t,{...Ot,...e??{}}))});function Is(t){let e=xs.get(t);if(e!==void 0)return e;let r=t;try{let n=Fe("git",["rev-parse","--show-toplevel"],{cwd:t,encoding:"utf-8",stdio:["ignore","pipe","pipe"]}).trim();n&&(r=n)}catch{}return xs.set(t,r),r}async function B(t,e){j.debug("git %s%s",e?`[cwd=${e}] `:"",t.join(" "));try{let{stdout:r,stderr:n}=await lt("git",t,{maxBuffer:jp,env:{...process.env,LC_ALL:"C"},...e!==void 0&&{cwd:e}});return{stdout:r.trimEnd(),stderr:n.trim(),exitCode:0}}catch(r){let n=r,o=typeof n.code=="number"?n.code:n.code==="ENOENT"?127:1,i={stdout:(n.stdout??"").trimEnd(),stderr:(n.stderr??n.message??"").trim(),exitCode:o};return j.debug("git command failed (exit: %d, stderr: %s)",o,i.stderr.substring(0,200)),i}}async function Cr(t,e){return(await B(["rev-parse","--verify",`refs/heads/${t}`],e)).exitCode===0}async function Vn(t,e){if(await Cr(t,e))return;j.info("Creating orphan branch '%s' using plumbing commands",t);let r=JSON.stringify({version:1,entries:[]},null,"	"),n=await Jp(r,e);j.debug("Created blob: %s",n);let o=`100644 blob ${n}	index.json
`,i=await Wp(o,e);j.debug("Created tree: %s",i);let s=await B(["commit-tree",i,"-m","Initialize Jolli Memory summaries"],e);if(s.exitCode!==0)throw new Error(`Failed to create commit: ${s.stderr}`);let a=s.stdout.trim();j.debug("Created commit: %s",a);let l=await B(["update-ref",`refs/heads/${t}`,a],e);if(l.exitCode!==0)throw new Error(`Failed to update ref: ${l.stderr}`);j.info("Orphan branch '%s' created successfully",t)}function Up(t){let e=t.toLowerCase();return Fp.some(r=>e.includes(r))}async function $t(t,e,r){j.debug("Reading file from branch: %s:%s",t,e);let n=await B(["show",`${t}:${e}`],r);return n.exitCode!==0?(Up(n.stderr)?j.debug("File not found: %s:%s",t,e):j.warn("Read failed for %s:%s (git exit %d): %s",t,e,n.exitCode,n.stderr||"(no stderr)"),null):n.stdout}async function As(t,e,r){let n=new Map;if(e.length===0)return n;let o=["cat-file","--batch"];return j.debug("git (cat-file --batch stream) %s%s for %d paths",r?`[cwd=${r}] `:"",o.join(" "),e.length),new Promise((i,s)=>{let a=Mt("git",o,{stdio:["pipe","pipe","pipe"],...r!==void 0&&{cwd:r}}),l="",c=Buffer.alloc(0),d=!0,u=0,m=[],p=!1,x=0,_=!1,D=k=>{_||(_=!0,k?s(k):i(n))};a.stderr.on("data",k=>{l+=k.toString()}),a.stdout.on("data",k=>{for(c=Buffer.concat([c,k]);!_;){if(d){let O=c.indexOf(10);if(O<0)return;let $=c.subarray(0,O).toString("utf8");if(c=c.subarray(O+1),x>=e.length){D(new Error(`git cat-file --batch returned extra response: ${$}`));return}let oe=e[x];if(x++,$.endsWith(" missing")){n.set(oe,null);continue}let G=$.substring($.lastIndexOf(" ")+1),ie=Number.parseInt(G,10);if(!Number.isFinite(ie)||ie<0){D(new Error(`Unexpected cat-file --batch header for ${oe}: ${$}`));return}u=ie,m=[],d=!1,p=!0}if(u>0){if(c.length===0)return;let O=Math.min(u,c.length);if(m.push(c.subarray(0,O)),c=c.subarray(O),u-=O,u>0)return}if(p){if(c.length<1)return;c=c.subarray(1),p=!1;let O=e[x-1];n.set(O,Buffer.concat(m).toString("utf8")),m=[],d=!0}}}),a.on("close",k=>{if(k!==0){D(new Error(`git cat-file --batch failed (exit ${k}): ${l.trim()}`));return}if(x<e.length){D(new Error(`git cat-file --batch returned ${x} of ${e.length} expected responses; stderr=${l.trim()}`));return}D(null)}),a.on("error",k=>{D(k)}),a.stdin.on("error",k=>{D(k)});for(let k of e)a.stdin.write(`${t}:${k}
`);a.stdin.end()})}async function _s(t,e,r,n){await Vn(t,n);let o=await B(["rev-parse",`refs/heads/${t}`],n);if(o.exitCode!==0)throw new Error(`Failed to get branch tip: ${o.stderr}`);let i=o.stdout.trim();await Bp(t,i,r,e,n);let s=e.filter(l=>!l.delete).length,a=e.filter(l=>l.delete).length;j.info("Updated branch '%s': %d written, %d deleted (via fast-import)",t,s,a)}async function Ds(t,e,r){j.debug("Listing files in branch %s under prefix '%s'",t,e);let n=await B(["ls-tree","-z","-r","--name-only",t,e],r);if(n.exitCode!==0)return j.debug("Failed to list files (branch may not exist): %s",n.stderr),[];let o=n.stdout.split(Hp).filter(i=>i.length>0);return j.debug("Found %d files",o.length),o}async function Tr(t){return(await B(["rev-parse","--git-dir"],t)).exitCode===0}async function ct(t){let e=await B(["worktree","list","--porcelain"],t);if(e.exitCode!==0)throw new Error(`Failed to list worktrees: ${e.stderr}`);return e.stdout.split(`
`).filter(n=>n.startsWith("worktree ")).map(n=>n.slice(9).trim())}async function Nt(t){let e=(0,Ue.join)(t,".git");if((await(0,Pr.stat)(e)).isDirectory())return(0,Ue.join)(e,"hooks");let n=await(0,Pr.readFile)(e,"utf-8"),o=n.trim().match(/^gitdir:\s*(.+)$/);if(!o)throw new Error(`Unexpected .git file content: ${n.trim()}`);let i=o[1].trim(),s=(0,Ue.resolve)(t,i),a=s.replace(/\\/g,"/").lastIndexOf("/worktrees/");if(a>=0){let l=s.substring(0,a);return(0,Ue.join)(l,"hooks")}return(0,Ue.join)(s,"hooks")}function Os(t,e,r){return j.debug("git (stdin) %s%s",r?`[cwd=${r}] `:"",t.join(" ")),new Promise((n,o)=>{let i=Mt("git",t,{stdio:["pipe","pipe","pipe"],...r!==void 0&&{cwd:r}}),s="",a="";i.stdout.on("data",l=>{s+=l.toString()}),i.stderr.on("data",l=>{a+=l.toString()}),i.on("close",l=>{l!==0?o(new Error(`git ${t[0]} failed (exit ${l}): ${a.trim()}`)):n(s.trim())}),i.on("error",l=>{o(l)}),i.stdin.write(e),i.stdin.end()})}async function Jp(t,e){return Os(["hash-object","-w","--stdin"],t,e)}async function Ps(t,e){let r=await B(["var",t],e);if(r.exitCode!==0)throw new Error(`Failed to read ${t}: ${r.stderr}`);return r.stdout.trim()}async function Bp(t,e,r,n,o){let i=await Ps("GIT_AUTHOR_IDENT",o),s=await Ps("GIT_COMMITTER_IDENT",o),a=["fast-import","--quiet","--done"];j.debug("git (fast-import stream) %s%s",o?`[cwd=${o}] `:"",a.join(" "));let l=n.filter(d=>!d.delete),c=n.filter(d=>d.delete);return new Promise((d,u)=>{let m=Mt("git",a,{stdio:["pipe","pipe","pipe"],...o!==void 0&&{cwd:o}}),p="";m.stderr.on("data",k=>{p+=k.toString()}),m.on("close",k=>{k!==0?u(new Error(`git fast-import failed (exit ${k}): ${p.trim()}`)):d()}),m.on("error",k=>{u(k)});let x=m.stdin;x.on("error",k=>{u(k)});let _=[];l.forEach((k,O)=>{let $=O+1,oe=Buffer.from(k.content,"utf8");_.push(`blob
mark :${$}
data ${oe.length}
`,oe,`
`)});let D=Buffer.from(r,"utf8");_.push(`commit refs/heads/${t}
`,`author ${i}
`,`committer ${s}
`,`data ${D.length}
`,D,`
`,`from ${e}
`),l.forEach((k,O)=>{_.push(`M 100644 :${O+1} ${Cs(k.path)}
`)});for(let k of c)_.push(`D ${Cs(k.path)}
`);_.push(`done
`),qp(x,_).then(()=>{x.end()},k=>{u(k)})})}async function qp(t,e){for(let r of e)t.write(r)||await(0,Ts.once)(t,"drain")}function Cs(t){return/["\\\n\r]/.test(t)?`"${t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r")}"`:t}async function Wp(t,e){return Os(["mktree"],t,e)}var Ts,Pr,Ue,jp,Hp,j,xs,Fp,ge=w(()=>{"use strict";Ts=require("node:events"),Pr=require("node:fs/promises"),Ue=require("node:path");y();Ce();jp=10*1024*1024,Hp="\0",j=f("GitOps"),xs=new Map;Fp=["does not exist in","does not exist (neither on disk nor in the index)","invalid object name","exists on disk, but not in","unknown revision or path not in the working tree"]});function Gp(t){return new Promise(e=>setTimeout(e,t))}function Vp(t){let e=Number(t);if(!Number.isInteger(e)||e<=0)return!1;if(e===process.pid)return!0;try{return process.kill(e,0),!0}catch(r){return r.code!=="ESRCH"}}async function Kn(t){try{let e=await(0,ke.stat)(t),r=Date.now()-e.mtimeMs,n=await $s(t),o=n!==null&&!Vp(n);if(!o&&r<Ms)return!1;o?Lt.warn("Removing orphaned lock %s (PID %s no longer running)",t,n):Lt.warn("Removing stale lock file %s (age: %dms)",t,r),await(0,ke.rm)(t,{force:!0})}catch(e){if(e.code!=="ENOENT")return Lt.error("Failed to check lock file %s: %s",t,e.message),!1}try{return await(0,ke.writeFile)(t,String(process.pid),{flag:"wx"}),!0}catch{return!1}}async function $s(t){try{let r=(await(0,ke.readFile)(t,"utf-8")).trim();return r.length>0?r:null}catch{return null}}async function ut(t,e){let r=await $s(t);if(r!==null&&r!==String(process.pid)){Lt.warn("Skipping release of %s: held by pid %s, not us (pid %s) \u2014 stale-reclaim race",e,r,process.pid);return}try{await(0,ke.rm)(t,{force:!0})}catch(n){Lt.error("Failed to release %s: %s",e,n.message)}}async function dt(t,e){if(e.timeoutMs<=0)return Kn(t);let r=Date.now()+e.timeoutMs;for(;;){if(await Kn(t))return!0;if(Date.now()>=r)return!1;await Gp(e.pollMs)}}var ke,Lt,Ms,Ns=w(()=>{"use strict";ke=require("node:fs/promises");y();Lt=f("LockPrimitives"),Ms=300*1e3});function Kp(t){return lt("git",["rev-parse","--git-common-dir"],{cwd:t})}async function qs(t){let e=t??process.cwd(),r=Fs.get(e);if(r!==void 0)return r;let n;try{let{stdout:o}=await Kp(e),i=o.trim(),s=(0,ee.isAbsolute)(i)?i:(0,ee.resolve)(e,i);n=(0,ee.join)(s,"jollimemory")}catch{Js.debug("resolveSharedLockDir: git rev-parse failed for cwd=%s \u2014 falling back to per-worktree dir",e),n=J(e)}return Fs.set(e,n),n}async function zn(t){let e=await qs(t);return await(0,jt.mkdir)(e,{recursive:!0}),e}async function Xn(t,e={}){let r=e.timeoutMs??Xp,n=e.pollMs??Yp,o=await zn(t);return dt((0,ee.join)(o,Bs),{timeoutMs:r,pollMs:n})}async function Yn(t){let e=await qs(t);await ut((0,ee.join)(e,Bs),"orphan-write.lock")}async function rm(t,e,r,n){let o=n.timeoutMs??Zp,i=n.pollMs??Ir;await(0,jt.mkdir)(t,{recursive:!0});let s=(0,ee.join)(t,e),a=await dt(s,{timeoutMs:o,pollMs:i});a||Js.warn("Could not acquire %s within %d ms \u2014 proceeding best-effort",e,o);try{return await r()}finally{a&&await ut(s,e)}}async function Qn(t,e,r={}){return rm(t,zp,e,r)}async function Ht(t,e={}){let r=e.timeoutMs??em,n=e.pollMs??Ir,o=await zn(t),i=(0,ee.join)(o,js);return await dt(i,{timeoutMs:r,pollMs:n})?{release:()=>ut(i,js)}:null}async function Zn(t,e,r={}){let n=await Ht(t,r);if(!n)return{acquired:!1};try{return{acquired:!0,value:await e()}}finally{await n.release()}}async function eo(t,e,r={}){let n=r.timeoutMs??Qp,o=r.pollMs??Ir,i=await zn(t),s=(0,ee.join)(i,Ls);if(!await dt(s,{timeoutMs:n,pollMs:o}))return{acquired:!1};try{return{acquired:!0,value:await e()}}finally{await ut(s,Ls)}}async function to(t,e={}){let r=e.timeoutMs??tm,n=e.pollMs??Ir,o=e.globalDir??(0,ee.join)((0,Us.homedir)(),".jolli","jollimemory");await(0,jt.mkdir)(o,{recursive:!0});let i=(0,ee.join)(o,Hs);if(!await dt(i,{timeoutMs:r,pollMs:n}))return{acquired:!1};try{return{acquired:!0,value:await t()}}finally{await ut(i,Hs)}}var jt,Us,ee,Js,Bs,Ls,zp,js,Hs,Xp,Yp,Qp,Ir,Zp,em,tm,Fs,Te=w(()=>{"use strict";jt=require("node:fs/promises"),Us=require("node:os"),ee=require("node:path");y();Ce();Ns();Js=f("Locks");Bs="orphan-write.lock",Ls="profile.lock",zp="config.lock",js="repo-hooks.lock",Hs="runtime-registry.lock",Xp=1e3,Yp=50,Qp=5e3,Ir=25,Zp=5e3,em=5e3,tm=5e3,Fs=new Map});var oo=w(()=>{"use strict"});async function C(t,e,r){let n=`${t}.${process.pid}.${(0,Ks.randomUUID)()}.tmp`;await(0,Qe.writeFile)(n,e,r===void 0?"utf-8":{encoding:"utf-8",mode:r});try{await(0,Qe.rename)(n,t)}catch(o){let i=o.code;if(i==="EPERM"||i==="EACCES")await(0,Qe.writeFile)(t,e,r===void 0?"utf-8":{encoding:"utf-8",mode:r}),await(0,Qe.rm)(n,{force:!0});else throw o}}var Ks,Qe,te=w(()=>{"use strict";Ks=require("node:crypto"),Qe=require("node:fs/promises")});function X(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}var io=w(()=>{"use strict"});var zs=w(()=>{"use strict"});var Xs=w(()=>{"use strict"});function Ys(t){return Number.isFinite(t)&&t>=0&&t<=1114111&&!(t>=55296&&t<=57343)}function Qs(t){return t.replace(/&(#x[0-9a-fA-F]+|#\d+|[a-zA-Z]+);/g,(e,r)=>{if(r.startsWith("#x")){let o=Number.parseInt(r.slice(2),16);return Ys(o)?String.fromCodePoint(o):e}if(r.startsWith("#")){let o=Number.parseInt(r.slice(1),10);return Ys(o)?String.fromCodePoint(o):e}let n=cm[r];return typeof n=="string"?n:e})}var cm,Zs=w(()=>{"use strict";cm={amp:"&",lt:"<",gt:">",quot:'"',apos:"'"}});var um,ea,ta=w(()=>{"use strict";zs();io();Xs();Zs();um={decodeHtmlEntities:Qs,lowercase:t=>t.toLowerCase()},ea=new Set(Object.keys(um))});var dm,ra,na=w(()=>{"use strict";dm="^https://app\\.asana\\.com/",ra={id:"asana",label:"Asana",icon:"checklist",match:{claude:{prefixes:["mcp__claude_ai_Asana__"],acceptSuffix:"get_task"},codex:{namespaceSuffix:"asana",functionCallNames:["_get_task"],invocationTools:["asana.get_task"]}},wrapperKeys:["data"],reference:{nativeId:{pipe:[{op:"path",path:"gid"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"name"}],require:".+"},url:{pipe:[{op:"path",path:"permalink_url"}],require:dm,requireFlags:"i"},description:{pipe:[{op:"path",path:"notes"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"task"}]},{key:"assignee",label:"Assignee",icon:"person",pipe:[{op:"path",path:"assignee.name"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"asana-tasks",itemTag:"task",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var fm,oa,ia=w(()=>{"use strict";fm="^https://[^/]+/wiki/",oa={id:"confluence",label:"Confluence",icon:"book",match:{claude:{prefixes:["mcp__claude_ai_Atlassian__"],acceptSuffix:"getConfluencePage"},codex:{namespaceSuffix:"atlassian_rovo",functionCallNames:["_getconfluencepage"],invocationTools:["atlassian_rovo.getConfluencePage"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"pageId"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:fm},description:{pipe:[{op:"path",path:"body"}],optional:!0}},fields:[{key:"space",label:"Space",icon:"symbol-namespace",pipe:[{op:"path",path:"space"}]},{key:"author",label:"Author",icon:"account",pipe:[{op:"path",path:"author"}]},{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"coalesce",of:[[{op:"path",path:"entityType"}],[{op:"const",value:"page"}]]}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"confluence-pages",itemTag:"page",bodyTag:"content",maxCharsPerReference:3e4,maxTotalChars:6e4}}});var pm,sa,aa=w(()=>{"use strict";pm="^/[^/\\s]+/[^/\\s]+",sa={id:"context7",label:"Context7",icon:"book",trackOnly:!0,argumentsDerived:!0,match:{claude:{prefixes:["mcp__context7__"],acceptSuffix:"query-docs"},codex:{namespaceSuffix:"context7",functionCallNames:["_query_docs"],invocationTools:["query-docs","context7.query-docs"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"libraryId"}],require:pm},title:{pipe:[{op:"path",path:"libraryId"},{op:"regex",pattern:"^/(.+)$",extract:"$1"}],require:".+"},url:{pipe:[{op:"template",template:"https://context7.com{id}",from:{id:[{op:"path",path:"libraryId"}]}}],require:"^https://context7\\.com/"},description:{pipe:[{op:"path",path:"query"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"context7-libraries",itemTag:"library",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var mm,gm,la,ca=w(()=>{"use strict";mm="^https?://github\\.com/([^/]+)/[^/]+/(?:issues|pull)/\\d+",gm="^https?://github\\.com/[^/]+/([^/]+)/(?:issues|pull)/\\d+",la={id:"github",label:"GitHub",icon:"issues",match:{claude:{prefixes:["mcp__github__"]},codex:{namespaceSuffix:"github",functionCallNames:["_fetch_issue","_search_issues"],invocationTools:["github_fetch_issue","github_search_issues"]}},wrapperKeys:["items","issues","nodes","results"],reference:{nativeId:{pipe:[{op:"template",template:"{owner}/{repo}#{number}",from:{owner:[{op:"coalesce",of:[[{op:"path",path:"repository.full_name"},{op:"regex",pattern:"^([^/]+)/[^/]+$",extract:"$1"}],[{op:"path",path:"html_url"},{op:"regex",pattern:mm,extract:"$1"}]]}],repo:[{op:"coalesce",of:[[{op:"path",path:"repository.full_name"},{op:"regex",pattern:"^[^/]+/([^/]+)$",extract:"$1"}],[{op:"path",path:"html_url"},{op:"regex",pattern:gm,extract:"$1"}]]}],number:[{op:"path",path:"number"}]}}],require:"^[^/]+/[^/]+#\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"html_url"}],require:"^https?://"},description:{pipe:[{op:"path",path:"body"},{op:"transform",fn:"decodeHtmlEntities"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"path",path:"state"}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"labels"},{op:"join",sep:", "}]},{key:"assignees",label:"Assignees",icon:"account",pipe:[{op:"path",path:"assignees"},{op:"join",sep:", "}]},{key:"milestone",label:"Milestone",icon:"milestone",pipe:[{op:"coalesce",of:[[{op:"path",path:"milestone"}],[{op:"path",path:"milestone.title"}]]}]},{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"coalesce",of:[[{op:"path",path:"issue_type"}],[{op:"path",path:"issue_type.name"}]]}]}],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"github-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var hm,ua,da=w(()=>{"use strict";hm="^[A-Z][A-Z0-9_]*-\\d+$",ua={id:"jira",label:"Jira",icon:"issues",match:{claude:{prefixes:["mcp__claude_ai_Atlassian__"]},codex:{namespaceSuffix:"atlassian_rovo",functionCallNames:["_fetch","_getjiraissue"],invocationTools:["atlassian_rovo.fetch","atlassian_rovo.getJiraIssue"]}},wrapperKeys:["nodes","issues","items","results"],reference:{nativeId:{pipe:[{op:"path",path:"key"}],require:hm},title:{pipe:[{op:"path",path:"fields.summary"}],require:".+"},url:{pipe:[{op:"path",path:"webUrl"}],require:"^https?://"},description:{pipe:[{op:"path",path:"fields.description"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"coalesce",of:[[{op:"path",path:"fields.status.name"}],[{op:"path",path:"fields.status"}]]}]},{key:"priority",label:"Priority",icon:"flame",pipe:[{op:"coalesce",of:[[{op:"path",path:"fields.priority.name"}],[{op:"path",path:"fields.priority"}]]}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"fields.labels"},{op:"join",sep:", "}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"jira-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var fa,pa=w(()=>{"use strict";fa={id:"jollimemory",label:"Jolli Memory",icon:"history",trackOnly:!0,argumentsDerived:!0,accumulateBody:!0,match:{claude:{prefixes:["mcp__jollimemory__"],exact:["mcp__jollimemory__recall","mcp__jollimemory__search","mcp__jollimemory__get_decision_timeline"]},codex:{namespaceSuffix:"jollimemory",functionCallNames:["recall","search","get_decision_timeline"],invocationTools:["recall","search","get_decision_timeline"],invocationServer:"jollimemory"}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"tool"}],require:"^(recall|search|get_decision_timeline)$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},description:{pipe:[{op:"path",path:"query"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"jolli-memory-lookups",itemTag:"lookup",bodyTag:"queries",maxCharsPerReference:2e3,maxTotalChars:6e3}}});var ym,ma,ga=w(()=>{"use strict";ym="^[A-Z][A-Z0-9_]*-\\d+$",ma={id:"linear",label:"Linear",icon:"issues",match:{claude:{prefixes:["mcp__linear__","mcp__claude_ai_Linear__"],denySuffixes:["list_issues","search_issues"]},codex:{namespaceSuffix:"linear",functionCallNames:["_fetch","_get_issue"],invocationTools:["linear_fetch","linear.get_issue"]}},wrapperKeys:["items","issues","nodes","results"],reference:{nativeId:{pipe:[{op:"path",path:"id"}],require:ym},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https?://"},description:{pipe:[{op:"path",path:"description"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"path",path:"status"}]},{key:"priority",label:"Priority",icon:"flame",pipe:[{op:"coalesce",of:[[{op:"path",path:"priority"}],[{op:"path",path:"priority.name"}]]}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"labels"},{op:"join",sep:", "}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"linear-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var ha,ya=w(()=>{"use strict";ha={id:"monday",label:"monday.com",icon:"table",match:{claude:{prefixes:["mcp__claude_ai_monday_com__"],acceptSuffix:"get_board_items_page"},codex:{namespaceSuffix:"monday_com",functionCallNames:["_get_board_items_page"],invocationTools:["monday_com.get_board_items_page"]}},wrapperKeys:["items"],reference:{nativeId:{pipe:[{op:"path",path:"id"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"name"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://([\\w-]+\\.)*monday\\.com/",requireFlags:"i"},description:{pipe:[{op:"path",path:"description"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"item"}]},{key:"board",label:"Board",icon:"project",pipe:[{op:"path",path:"board"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"monday-items",itemTag:"item",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var wm,Sm,bm,wa,Sa=w(()=>{"use strict";wm="[-/]([0-9a-fA-F]{32})(?=[/?#]|$)",Sm="^https://(www\\.notion\\.so|notion\\.so|app\\.notion\\.com|[^/]+\\.notion\\.site)/",bm="<content\\b[^>]*>([\\s\\S]*?)</content>",wa={id:"notion",label:"Notion",icon:"file-text",match:{claude:{prefixes:["mcp__claude_ai_Notion__"],acceptSuffix:"notion-fetch"},codex:{namespaceSuffix:"notion",functionCallNames:["_fetch"],invocationTools:["notion_fetch"]}},wrapperKeys:["results","items","pages"],reference:{guard:{pipe:[{op:"path",path:"metadata.type"}],require:"^page$"},nativeId:{pipe:[{op:"path",path:"url"},{op:"regex",pattern:wm,extract:"$1",lastMatch:!0},{op:"transform",fn:"lowercase"}],require:"^[0-9a-fA-F]{32}$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:Sm,requireFlags:"i"},description:{pipe:[{op:"path",path:"text"},{op:"regex",pattern:bm,extract:"$1"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"page"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"notion-pages",itemTag:"page",bodyTag:"content",fieldAttrs:!1,maxCharsPerReference:3e4,maxTotalChars:6e4}}});var ba,ka=w(()=>{"use strict";ba={id:"slack",label:"Slack",icon:"comment-discussion",match:{claude:{prefixes:["mcp__claude_ai_Slack__"],acceptSuffix:"slack_read_thread"},codex:{namespaceSuffix:"slack",functionCallNames:["_slack_read_thread"],invocationTools:["slack.slack_read_thread"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"template",template:"{c}-{t}",from:{c:[{op:"path",path:"channelId"}],t:[{op:"path",path:"parentTs"}]}}],require:"^[A-Z0-9]+-\\d{7,}\\.\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://"},description:{pipe:[{op:"path",path:"text"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"comment-discussion",pipe:[{op:"const",value:"thread"}]},{key:"replies",label:"Replies",icon:"reply",pipe:[{op:"path",path:"replyCount"}]},{key:"channel",label:"Channel",icon:"symbol-namespace",pipe:[{op:"path",path:"channelId"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"slack-threads",itemTag:"thread",bodyTag:"messages",fieldAttrs:!0,maxCharsPerReference:8e3,maxTotalChars:4e4}}});var Ea,va=w(()=>{"use strict";Ea={id:"zoom-doc",label:"Zoom Doc",icon:"file",match:{claude:{prefixes:["mcp__claude_ai_Zoom_for_Claude__"],acceptSuffix:"hub_get_file_content"}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"fileId"}],require:"^[\\w.-]+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://docs\\.zoom\\.us/doc/"},description:{pipe:[{op:"path",path:"content"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"doc"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"zoom-docs",itemTag:"doc",bodyTag:"content",maxCharsPerReference:3e4,maxTotalChars:6e4}}});var Ra,xa=w(()=>{"use strict";Ra={id:"zoom-meeting",label:"Zoom Meeting",icon:"device-camera-video",match:{claude:{prefixes:["mcp__claude_ai_Zoom_for_Claude__"],acceptSuffix:"get_meeting_assets"},codex:{namespaceSuffix:"zoom",functionCallNames:["_get_meeting_assets"],invocationTools:["zoom.get_meeting_assets"]}},wrapperKeys:[],reference:{guard:{pipe:[{op:"path",path:"meeting_summary.summary_markdown"}],require:".+"},nativeId:{pipe:[{op:"path",path:"meeting_uuid"}],require:"^[\\w-]+$"},title:{pipe:[{op:"path",path:"topic"}],require:".+"},url:{pipe:[{op:"coalesce",of:[[{op:"path",path:"meeting_summary.summary_doc_url"}],[{op:"path",path:"deep_url"}]]}],require:"^https://"},description:{pipe:[{op:"path",path:"meeting_summary.summary_markdown"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"meeting"}]},{key:"started",label:"Started",icon:"calendar",pipe:[{op:"path",path:"start_time"}]},{key:"meeting-number",label:"Meeting #",icon:"symbol-number",pipe:[{op:"path",path:"meeting_number"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"zoom-meetings",itemTag:"meeting",bodyTag:"summary",maxCharsPerReference:2e4,maxTotalChars:4e4}}});var Pa,Ca=w(()=>{"use strict";na();ia();aa();ca();da();pa();ga();ya();Sa();ka();va();xa();Pa=[ma,oa,ua,la,wa,ba,Ra,Ea,ra,ha,sa,fa]});function Em(t,e,r){if(!X(t))return"op must be an object";if(r.opCount++,r.opCount>Ta)return`pipe exceeds ${Ta} ops`;let n=t.op;if(typeof n!="string"||!km.has(n))return`unknown op: ${String(n)}`;switch(n){case"path":return typeof t.path=="string"?void 0:"path op requires a string 'path'";case"const":return typeof t.value=="string"?void 0:"const op requires a string 'value'";case"join":return typeof t.sep=="string"?void 0:"join op requires a string 'sep'";case"regex":return typeof t.pattern!="string"?"regex op requires a string 'pattern'":t.extract!==void 0&&typeof t.extract!="string"?"regex.extract must be a string":t.lastMatch!==void 0&&typeof t.lastMatch!="boolean"?"regex.lastMatch must be a boolean":void 0;case"transform":return typeof t.fn!="string"?"transform op requires a string 'fn'":ea.has(t.fn)?void 0:`unknown transform: ${t.fn}`;case"coalesce":{if(e+1>Ar)return`nesting depth exceeds ${Ar}`;if(!Array.isArray(t.of))return"coalesce op requires an array 'of'";for(let o of t.of){let i=so(o,e+1,r);if(i!==void 0)return i}return}case"template":{if(e+1>Ar)return`nesting depth exceeds ${Ar}`;if(typeof t.template!="string")return"template op requires a string 'template'";if(!X(t.from))return"template op requires an object 'from'";for(let o of Object.values(t.from)){let i=so(o,e+1,r);if(i!==void 0)return i}return}}}function so(t,e,r){if(!Array.isArray(t))return"pipe must be an array";for(let n of t){let o=Em(n,e,r);if(o!==void 0)return o}}function Ft(t,e){let r=so(t,0,{opCount:0});return r===void 0?void 0:`${e}: ${r}`}function vm(t){if(!X(t))return{ok:!1,error:"definition must be an object"};if(typeof t.id!="string"||t.id.length===0)return{ok:!1,error:"id must be a non-empty string"};if(typeof t.label!="string"||t.label.length===0)return{ok:!1,error:"label must be a non-empty string"};if(typeof t.icon!="string"||t.icon.length===0)return{ok:!1,error:"icon must be a non-empty string"};if(!X(t.match))return{ok:!1,error:"match must be an object"};if(!Array.isArray(t.wrapperKeys))return{ok:!1,error:"wrapperKeys must be an array"};if(!X(t.reference))return{ok:!1,error:"reference must be an object"};if(!Array.isArray(t.fields))return{ok:!1,error:"fields must be an array"};if(!X(t.storage))return{ok:!1,error:"storage must be an object"};if(!X(t.render))return{ok:!1,error:"render must be an object"};let e=t.reference;for(let r of["nativeId","title"]){let n=e[r];if(!X(n))return{ok:!1,error:`reference.${r} is required`};let o=Ft(n.pipe,`reference.${r}.pipe`);if(o!==void 0)return{ok:!1,error:o}}if(e.url!==void 0){if(!X(e.url))return{ok:!1,error:"reference.url must be an object"};let r=Ft(e.url.pipe,"reference.url.pipe");if(r!==void 0)return{ok:!1,error:r}}if(e.description!==void 0){if(!X(e.description))return{ok:!1,error:"reference.description must be an object"};let r=Ft(e.description.pipe,"reference.description.pipe");if(r!==void 0)return{ok:!1,error:r}}if(e.guard!==void 0){if(!X(e.guard))return{ok:!1,error:"reference.guard must be an object"};let r=Ft(e.guard.pipe,"reference.guard.pipe");if(r!==void 0)return{ok:!1,error:r}}for(let[r,n]of t.fields.entries()){if(!X(n))return{ok:!1,error:`fields[${r}] must be an object`};if(typeof n.key!="string"||!Ia.test(n.key))return{ok:!1,error:`fields[${r}].key must match ${Ia}`};if(typeof n.label!="string"||n.label.length===0)return{ok:!1,error:`fields[${r}].label must be a non-empty string`};let o=Ft(n.pipe,`fields[${r}].pipe`);if(o!==void 0)return{ok:!1,error:o}}return{ok:!0,def:t}}function Dr(){if(_r!==void 0)return _r;let t=[];for(let e of Pa){let r=vm(e);if(!r.ok)throw new Error(`invalid built-in source definition '${e.id}': ${r.error}`);t.push(r.def)}return _r=new ao(t),_r}var Ta,Ar,km,Ia,ao,_r,Or=w(()=>{"use strict";io();ta();Ca();Ta=64,Ar=8,km=new Set(["path","coalesce","regex","template","join","const","transform"]);Ia=/^[\w-]+$/;ao=class{constructor(e){this.definitions=e}all(){return this.definitions}byId(e){return this.definitions.find(r=>r.id===e)}match(e,r,n,o){return e==="claude"?this.definitions.find(i=>{let s=i.match.claude;return!(s===void 0||!s.prefixes.some(a=>r.startsWith(a))||s.exact!==void 0&&!s.exact.includes(r)||s.acceptSuffix!==void 0&&!r.endsWith(s.acceptSuffix)||s.denySuffixes?.some(a=>r.endsWith(a)))}):n!==void 0?this.definitions.find(i=>{let s=i.match.codex;return s!==void 0&&s.namespaceSuffix===n&&s.functionCallNames.includes(r)}):this.definitions.find(i=>{let s=i.match.codex;return s===void 0||!s.invocationTools.includes(r)?!1:s.invocationServer===void 0||s.invocationServer===o})}}});var Ak,lo=w(()=>{"use strict";y();Or();Ak=f("ReferenceStore")});function Rm(t){return`${t.source}:${t.skill}`}function xm(t,e){if(t===void 0)return e;let r=t.usage===void 0||e.usage===void 0?t.usage??e.usage:{input:t.usage.input+e.usage.input,output:t.usage.output+e.usage.output,cached:t.usage.cached+e.usage.cached,confidence:t.usage.confidence==="attributed"&&e.usage.confidence==="attributed"?"attributed":"estimated"},n=[t,e].filter(a=>a.usage!==void 0),o=Pm(n),{usageBySession:i,...s}=t;return{...s,invocationCount:t.invocationCount+e.invocationCount,...r!==void 0?{usage:r}:{},...o!==void 0?{usageBySession:o}:{},...t.detection==="heuristic"||e.detection==="heuristic"?{detection:"heuristic"}:{}}}function Pm(t){if(t.length===0)return;let e=[];for(let n of t){if(n.usageBySession===void 0)return;e.push(n.usageBySession)}let r={};for(let n of e)for(let[o,i]of Object.entries(n)){let s=r[o];r[o]=s===void 0?i:{input:s.input+i.input,cached:s.cached+i.cached,output:s.output+i.output,confidence:s.confidence==="attributed"&&i.confidence==="attributed"?"attributed":"estimated"}}return r}function Aa(t){let e=new Map;for(let n of t)e.has(n.archivedKey)||e.set(n.archivedKey,n);let r=new Map;for(let n of e.values()){let o=Rm(n);r.set(o,xm(r.get(o),n))}return[...r.values()]}var co=w(()=>{"use strict"});var Mk,_a=w(()=>{"use strict";y();Mk=f("SkillStore")});async function po(t){let e=J(t);return await(0,Be.mkdir)(e,{recursive:!0}),e}function ye(){return(0,Mr.join)((0,Da.homedir)(),".jolli","jollimemory")}async function ft(t){let e=(0,Mr.join)(t,Oa);try{let r=await(0,Be.readFile)(e,"utf-8"),n=JSON.parse(r);return Cm(n)}catch{return $r.debug("No config file found in %s, using defaults",t),{}}}function Cm(t){if(t.syncEnabled===void 0)return t;let{syncEnabled:e,...r}=t;return r.autoSyncEnabled===void 0?{...r,autoSyncEnabled:e}:r}function Tm(t,e){return!("localAgentTool"in e)||"localAgentPath"in e||(t.localAgentTool??"claude-code")===(e.localAgentTool??"claude-code")||t.localAgentPath===void 0?e:($r.info("Clearing localAgentPath (was set for %s, switching to %s)",t.localAgentTool??"claude-code",e.localAgentTool),{...e,localAgentPath:void 0})}async function Nr(t,e){await Qn(e,async()=>{await Ma(t,e)}),$r.info("Config saved to %s",e)}async function Lr(t){return Im(t,ye())}async function Im(t,e){return Qn(e,async()=>{let{update:r,result:n}=t(await ft(e));return r!==null&&(await Ma(r,e),$r.info("Config saved to %s",e)),n})}async function Ma(t,e){let r=await ft(e),n={...r,...Tm(r,t)};await C((0,Mr.join)(e,Oa),JSON.stringify(n,null,"	"))}async function Ee(){return ft(ye())}async function Ze(t){return Nr(t,ye())}function uo(t,e){let r={...t},n=!1;for(let o of e)o in r&&(delete r[o],n=!0);return{value:r,changed:n}}function $a(t){let e=!1,r={};for(let[s,a]of Object.entries(t.plans??{})){if(a.ignored===!0){e=!0;continue}let l=uo(a,Am);l.changed&&(e=!0),r[s]=l.value}let n;if(t.notes!==void 0){n={};for(let[s,a]of Object.entries(t.notes)){if(a.ignored===!0){e=!0;continue}let l=uo(a,_m);l.changed&&(e=!0),n[s]=l.value}}let o;if(t.references!==void 0){o={};for(let[s,a]of Object.entries(t.references)){let l=a;if(l.ignored===!0||l.commitHash!=null||l.contentHashAtCommit!==void 0){e=!0;continue}let c=uo(a,Dm);c.changed&&(e=!0),o[s]=c.value}}return{registry:{version:1,plans:r,...n!==void 0?{notes:n}:{},...o!==void 0?{references:o}:{},...t.skills!==void 0?{skills:t.skills}:{}},changed:e}}var fo,Be,Da,Mr,$r,Oa,Yk,Qk,Zk,eE,Am,_m,Dm,ve=w(()=>{"use strict";fo=require("node:crypto"),Be=require("node:fs/promises"),Da=require("node:os"),Mr=require("node:path");y();oo();te();Te();lo();co();_a();$r=f("SessionTracker"),Oa="config.json",Yk=2880*60*1e3;Qk=2880*60*1e3,Zk=10080*60*1e3,eE=(0,fo.randomBytes)(4).toString("hex"),Am=["ignored","branch","editCount"],_m=["ignored","branch"],Dm=["ignored","branch","commitHash","contentHashAtCommit"]});function pt(t){let e=Ba(t.replace(/\\/g,"/"));return process.platform==="win32"||process.platform==="darwin"?e.toLowerCase():e}function Ba(t){let e=t.length;for(;e>0&&t[e-1]==="/";)e--;return e===t.length?t:t.slice(0,e)}function wo(t,e){let r=pt(t),n=pt(e);return r===n||r.startsWith(`${n}/`)}function Jt(t){return t.replace(/\\/g,"/")}var _e=w(()=>{"use strict"});function kl(t){if((0,bl.platform)()==="win32")try{Rs("attrib",["+h",t],{timeout:2e3})}catch{}}var bl,El=w(()=>{"use strict";bl=require("node:os");Ce()});var vl,M,re,gt,V,Kr=w(()=>{"use strict";vl=require("node:crypto"),M=require("node:fs"),re=require("node:path");y();El();_e();gt=f("MetadataManager"),V=class t{constructor(e){this.jolliDir=e;this.manifestPath=(0,re.join)(e,"manifest.json"),this.branchesPath=(0,re.join)(e,"branches.json"),this.configPath=(0,re.join)(e,"config.json"),this.migrationPath=(0,re.join)(e,"migration.json"),this.indexPath=(0,re.join)(e,"index.json")}ensure(){(0,M.mkdirSync)(this.jolliDir,{recursive:!0})!==void 0&&kl(this.jolliDir),(0,M.existsSync)(this.manifestPath)||this.atomicWrite(this.manifestPath,JSON.stringify({version:1,files:[]},null,"	")),(0,M.existsSync)(this.branchesPath)||this.atomicWrite(this.branchesPath,JSON.stringify({version:1,mappings:[]},null,"	")),(0,M.existsSync)(this.configPath)||this.atomicWrite(this.configPath,JSON.stringify({version:1,sortOrder:"date"},null,"	"))}readManifest(){return this.readJson(this.manifestPath)??{version:1,files:[]}}updateManifest(e){let r=this.readManifest(),n=r.files.filter(o=>o.fileId!==e.fileId);n.push(e),this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:n},null,"	")),gt.info("Manifest updated: %s (%s)",e.path,e.type)}removeFromManifest(e){let r=this.readManifest(),n=r.files.filter(o=>o.fileId!==e);return n.length===r.files.length?!1:(this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:n},null,"	")),!0)}unregisterFilesByType(e){let r=this.readManifest(),n=r.files.filter(i=>i.type!==e),o=r.files.length-n.length;return o===0?0:(this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:n},null,"	")),gt.info("Manifest unregistered %d entries of type=%s",o,e),o)}replaceFiles(e){let r=this.readManifest();this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:[...e]},null,"	"))}findByPath(e){return this.readManifest().files.find(r=>r.path===e)}findById(e){return this.readManifest().files.find(r=>r.fileId===e)}updatePath(e,r){let n=this.readManifest();if(!n.files.find(s=>s.fileId===e))return!1;let i=n.files.map(s=>s.fileId===e?{...s,path:r}:s);return this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:i},null,"	")),!0}resolveFolderForBranch(e){let r=this.readBranches(),n=r.mappings.find(a=>a.branch===e);if(n)return n.folder;let o=t.transcodeBranchName(e),i={folder:o,branch:e,createdAt:new Date().toISOString()},s={...r,mappings:[...r.mappings,i]};return this.atomicWrite(this.branchesPath,JSON.stringify(s,null,"	")),gt.info("Branch mapping created: %s \u2192 %s",e,o),o}removeBranchMapping(e){let r=this.readBranches(),n=r.mappings.filter(o=>o.branch!==e);return n.length===r.mappings.length?!1:(this.atomicWrite(this.branchesPath,JSON.stringify({...r,mappings:n},null,"	")),gt.info("Branch mapping removed: %s (no remaining head)",e),!0)}renameBranchFolder(e,r){let n=this.readBranches(),o=n.mappings.map(l=>l.folder===e?{...l,folder:r}:l);this.atomicWrite(this.branchesPath,JSON.stringify({...n,mappings:o},null,"	"));let i=this.readManifest(),s=0,a=i.files.map(l=>l.path.startsWith(`${e}/`)?(s++,{...l,path:l.path.replace(`${e}/`,`${r}/`)}):l);return s>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...i,files:a},null,"	")),s}removeBranchFolder(e){let r=this.readBranches();this.atomicWrite(this.branchesPath,JSON.stringify({...r,mappings:r.mappings.filter(s=>s.folder!==e)},null,"	"));let n=this.readManifest(),o=n.files.filter(s=>!s.path.startsWith(`${e}/`)),i=n.files.length-o.length;return i>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:o},null,"	")),i}unregisterBranches(e){let r=new Set(e);if(r.size===0)return 0;let n=this.readBranches(),o=n.mappings.filter(s=>!r.has(s.branch)),i=n.mappings.length-o.length;return i===0?0:(this.atomicWrite(this.branchesPath,JSON.stringify({...n,mappings:o},null,"	")),gt.info("Branch mappings unregistered: %d",i),i)}readBranches(){return this.readJson(this.branchesPath)??{version:1,mappings:[]}}listBranchMappings(){return this.readBranches().mappings}folderToBranch(e){try{return this.listBranchMappings().find(r=>r.folder===e)?.branch??e}catch{return e}}listIndexHeads(){let e=this.readJson(this.indexPath);return!e||!Array.isArray(e.entries)?[]:e.entries.filter(r=>typeof r?.commitHash=="string"&&typeof r.branch=="string"&&(r.parentCommitHash===null||typeof r.parentCommitHash=="string")&&r.parentCommitHash===null)}readIndex(){return this.readJson(this.indexPath)}readConfig(){return this.readJson(this.configPath)??{version:1,sortOrder:"date"}}saveConfig(e){this.atomicWrite(this.configPath,JSON.stringify(e,null,"	"))}readMigrationState(){return this.readJson(this.migrationPath)}saveMigrationState(e){this.atomicWrite(this.migrationPath,JSON.stringify(e,null,"	"))}reconcile(e){let r=this.readManifest();if(r.files.length===0||!r.files.some(a=>!(0,M.existsSync)((0,re.join)(e,a.path))))return 0;let o=new Map;try{this.walkDir(e,e,o)}catch{}let i=0,s=[];for(let a of r.files){let l=(0,re.join)(e,a.path);if((0,M.existsSync)(l))s.push(a);else{let c=o.get(a.fingerprint);c&&c!==a.path?(s.push({...a,path:c}),i++):(gt.warn("Manifest entry '%s' (id=%s) not found on disk \u2014 keeping entry to avoid data loss",a.path,a.fileId),s.push(a))}}return i>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:s},null,"	")),i}walkDir(e,r,n){for(let o of(0,M.readdirSync)(e,{withFileTypes:!0})){if(o.name.startsWith("."))continue;let i=(0,re.join)(e,o.name);if(o.isDirectory())this.walkDir(i,r,n);else if(o.name.endsWith(".md"))try{let s=(0,M.readFileSync)(i,"utf-8"),a=t.sha256(s);n.set(a,Jt((0,re.relative)(r,i)))}catch{}}}static transcodeBranchName(e){let r=e.replace(/[/\\:*?~^]/g,"-");return r=r.replace(/-{3,}/g,"-"),r=r.replace(/\.\./g,"--"),r=r.replace(/^[.-]+|[.-]+$/g,""),r||"default"}static sha256(e){return(0,vl.createHash)("sha256").update(e,"utf-8").digest("hex")}readJson(e){if(!(0,M.existsSync)(e))return null;try{return JSON.parse((0,M.readFileSync)(e,"utf-8"))}catch{return null}}atomicWrite(e,r){let n=(0,re.dirname)(e);(0,M.mkdirSync)(n,{recursive:!0});let o=`${e}.tmp`;(0,M.writeFileSync)(o,r,"utf-8"),(0,M.renameSync)(o,e)}}});function Rl(){return(0,H.join)((0,Tl.homedir)(),"Documents","jolli")}function Do(t){return t?og(t)?t:(ng.warn("Invalid customPath '%s': must be absolute and not contain '..'. Falling back to default.",t),Rl()):Rl()}function og(t){return t?(0,H.isAbsolute)(t)&&!t.includes(".."):!0}function Il(t,e,r){let n=Do(r),o=(0,H.join)(n,t);if(!(0,qe.existsSync)(o)){let s=Ll(n,t,e).match;return s||(_o(o,t,e),o)}let i=Hl(o);return i&&$l(i,e,t)?o:i&&jl(o,i)?(_o(o,t,e),o):lg(n,t,e)}function Al(t){let e=Oo(t,["config","--get","remote.origin.url"]);if(e){let n=e.match(/\/([^/]+?)(?:\.git)?$/);if(n?.[1])return n[1]}let r=_l(t);return r?(0,H.basename)(r):(0,H.basename)(t)||"unknown"}function _l(t){let e=Oo(t,["rev-parse","--git-common-dir"]);if(!e)return null;let r=(0,H.isAbsolute)(e)?e:(0,H.join)(t,e),n=(0,H.dirname)(r);return n&&n!=="/"&&n!=="."?n:null}function ig(t,e){if(!(0,H.basename)(t))return{claimable:!1,blocker:"not-a-project"};let r=_l(t);if(!r)return{claimable:!1,blocker:"not-a-project"};let n;try{n=Do(e)}catch{return{claimable:!1,blocker:"unresolvable-folder"}}return wo(n,r)?{claimable:!1,blocker:"folder-inside-repo"}:{claimable:!0}}function Dl(t,e){return ig(t,e).claimable}function Ol(){let t=Number(process.env.JOLLI_GIT_CMD_TIMEOUT_MS);return Number.isFinite(t)&&t>0?t:3e4}function sg(){return Math.min(Ol(),5e3)}function ag(t){return typeof t=="object"&&t!==null&&t.code==="ETIMEDOUT"}function xl(t,e,r=Ol()){return Fe("git",e,{cwd:t,encoding:"utf-8",timeout:r,stdio:["ignore","pipe","pipe"]}).trim()||null}function Oo(t,e){try{return xl(t,e)}catch(r){if(!ag(r))return null;try{return xl(t,e,sg())}catch{return null}}}function Ml(t){return Oo(t,["remote","get-url","origin"])}function $l(t,e,r){return t.remoteUrl&&e?Pl(t.remoteUrl)===Pl(e):!t.remoteUrl&&!e?t.repoName==null||t.repoName===r:!1}function Pl(t){return Nl(t).replace(/\/+$/,"").replace(/\.git$/,"").toLowerCase()}function Nl(t){let e=t.match(/^(?:git\+)?ssh:\/\/(?:[^@/]+@)?([^/:]+)(?::(\d+))?\/(.+)$/i);if(e)return`https://${e[1]}${Cl(e[2],"22")}/${e[3]}`;let r=t.match(/^git:\/\/([^/:]+)(?::(\d+))?\/(.+)$/i);if(r)return`https://${r[1]}${Cl(r[2],"9418")}/${r[3]}`;let n=t.match(/^[^@/:]+@([^/:]+):(.+)$/);return n?`https://${n[1]}/${n[2]}`:t}function Cl(t,e){return t===void 0||t===e?"":`:${t}`}function Ll(t,e,r){let n=null,o=null,i=null;for(let s=2;s<=99;s++){let a=(0,H.join)(t,`${e}-${s}`);if(!(0,qe.existsSync)(a)){i===null&&(i=a);continue}let l=Hl(a);if(l&&$l(l,r,e)){n=a;break}l&&o===null&&jl(a,l)&&(o=a)}return{match:n,stub:o,firstUnused:i}}function lg(t,e,r){let n=Ll(t,e,r);if(n.match)return n.match;let o=n.stub??n.firstUnused??(0,H.join)(t,`${e}-${Date.now()}`);return _o(o,e,r),o}function _o(t,e,r){if(xe())return;let n=new V((0,H.join)(t,".jolli"));n.ensure();let o=n.readConfig();n.saveConfig({...o,remoteUrl:r??void 0,repoName:e})}function jl(t,e){return e.remoteUrl==null&&e.repoName==null}function Hl(t){let e=(0,H.join)(t,".jolli","config.json");if(!(0,qe.existsSync)(e))return null;try{return JSON.parse((0,qe.readFileSync)(e,"utf-8"))}catch{return null}}var qe,Tl,H,ng,Gt=w(()=>{"use strict";qe=require("node:fs"),Tl=require("node:os"),H=require("node:path");y();Ce();Kr();_e();ng=f("KBPathResolver")});function We(t){return Mo[t]?.label??"Local agent"}function Bl(t){return Mo[t]?.loginHint??"Sign in to your local agent CLI."}function ql(t){let e=Mo[t]?.separateDesktopApp;return e===void 0?null:`(This login is SEPARATE from ${e} \u2014 ${e} stays signed in on its own.)`}var Mo,Xr=w(()=>{"use strict";Mo={"claude-code":{label:"Claude Code",loginHint:"Run `claude` once and sign in to your subscription.",separateDesktopApp:"Claude Desktop"},codex:{label:"Codex",loginHint:"Run `codex login` to sign in with your ChatGPT plan.",separateDesktopApp:"the ChatGPT app"},"cursor-agent":{label:"Cursor",loginHint:"Run `cursor-agent login` to sign in to Cursor."},opencode:{label:"OpenCode",loginHint:"Run `opencode auth login` to connect a provider."},kimi:{label:"Kimi Code",loginHint:"Run `kimi login` to sign in to your Moonshot account."}}});var Ge,Yr,Kl=w(()=>{"use strict";y();Ge=f("DualWriteStorage"),Yr=class{constructor(e,r){this.primary=e;this.shadow=r;this.kind="dual-write"}get kbRoot(){return this.shadow.kbRoot}async readFile(e){return this.primary.readFile(e)}async batchReadFiles(e){if(this.primary.batchReadFiles)return this.primary.batchReadFiles(e);let r=new Map;for(let n of e)r.set(n,await this.primary.readFile(n));return r}async writeFiles(e,r){if(!xe()){await this.primary.writeFiles(e,r);try{await this.shadow.writeFiles(e,r),this.shadow.clearDirty?.()}catch(n){Ge.warn("Shadow write failed (folder storage): %s",n instanceof Error?n.message:String(n)),this.shadow.markDirty?.(r)}}}async deleteVisibleMarkdown(e){if(!this.shadow.deleteVisibleMarkdown)return!1;try{return await this.shadow.deleteVisibleMarkdown(e)}catch(r){let n=e.commitHash.substring(0,8);return Ge.warn("Shadow deleteVisibleMarkdown failed (folder storage) for %s/%s: %s",e.branch,n,I(r)),this.shadow.markDirty?.(`deleteVisibleMarkdown ${e.branch}/${n}`),!1}}async regenerateVisibleMarkdown(e){if(!this.shadow.regenerateVisibleMarkdown)return!1;try{return await this.shadow.regenerateVisibleMarkdown(e)}catch(r){let n=e.commitHash.substring(0,8);return Ge.warn("Shadow regenerateVisibleMarkdown failed (folder storage) for %s/%s: %s",e.branch,n,I(r)),this.shadow.markDirty?.(`regenerateVisibleMarkdown ${e.branch}/${n}`),!1}}async deletePlanVisible(e,r){if(this.shadow.deletePlanVisible)try{await this.shadow.deletePlanVisible(e,r)}catch(n){Ge.warn("Shadow deletePlanVisible failed (folder storage) for %s on %s: %s",e,r,I(n)),this.shadow.markDirty?.(`deletePlanVisible ${r}/${e}`)}}async deleteNoteVisible(e,r){if(this.shadow.deleteNoteVisible)try{await this.shadow.deleteNoteVisible(e,r)}catch(n){Ge.warn("Shadow deleteNoteVisible failed (folder storage) for %s on %s: %s",e,r,I(n)),this.shadow.markDirty?.(`deleteNoteVisible ${r}/${e}`)}}async pruneBranchMappings(e){if(!this.shadow.pruneBranchMappings)return 0;try{return await this.shadow.pruneBranchMappings(e)}catch(r){return Ge.warn("Shadow pruneBranchMappings failed (folder storage): %s",I(r)),this.shadow.markDirty?.(`pruneBranchMappings ${e.length}`),0}}async healMissingVisibleMarkdown(e){let r=this.shadow.healMissingVisibleMarkdown?this.shadow:this.primary.healMissingVisibleMarkdown?this.primary:null;if(!r)return{healed:0,skipped:0,failed:0};let n=e?.dropOrphanedManifestEntries??!0,o=r===this.shadow?"shadow":"primary";try{return await r.healMissingVisibleMarkdown?.({dropOrphanedManifestEntries:n})??{healed:0,skipped:0,failed:0}}catch(i){let s=i?.code,a=s?`[${s}] ${I(i)}`:I(i);return Ge.warn("%s healMissingVisibleMarkdown failed: %s",o,a),r.markDirty?.("healMissingVisibleMarkdown"),{healed:0,skipped:0,failed:0,error:a}}}async listFiles(e){return this.primary.listFiles(e)}async exists(){return this.primary.exists()}isDirty(){return this.shadow.isDirty?.()??!1}async ensure(){await this.primary.ensure();try{await this.shadow.ensure()}catch(e){Ge.warn("Shadow ensure failed: %s",e instanceof Error?e.message:String(e))}}async renderTopicWiki(e){await this.shadow.renderTopicWiki?.(e)}isTopicWikiPresent(){return this.shadow.isTopicWikiPresent?.()??!1}}});function gg(t,e){if(!(0,we.isAbsolute)(e))throw new Error(`assertNoSymlinksInPathSync: absTargetPath must be absolute, got ${e}`);if(!(0,we.isAbsolute)(t))throw new Error(`assertNoSymlinksInPathSync: vaultRoot must be absolute, got ${t}`);let r=(0,we.relative)(t,e);if(r===""||r.startsWith("..")||(0,we.isAbsolute)(r))throw new Error(`assertNoSymlinksInPathSync: target ${e} is not inside vault ${t}`);let n=r.split(we.sep),o=t;for(let i=0;i<n.length-1;i++){let s=n[i];if(s===void 0||s.length===0)continue;o=`${o}${we.sep}${s}`;let a;try{a=(0,N.lstatSync)(o)}catch(l){if(l.code==="ENOENT")return;throw l}if(a.isSymbolicLink())throw mg.warn("Refusing vault write \u2014 symlink in path chain: %s",o),new Error(`Refused vault write: path segment is a symlink at ${o} (target ${e}). Inspect and unlink before retrying.`);if(!a.isDirectory())throw new Error(`Refused vault write: path segment is not a directory at ${o} (target ${e}).`)}}function jo(t,e,r){gg(t,e),(0,N.mkdirSync)((0,we.dirname)(e),{recursive:!0});let n=`${e}.tmp`,o=N.constants.O_WRONLY|N.constants.O_CREAT|N.constants.O_TRUNC|N.constants.O_NOFOLLOW,i=(0,N.openSync)(n,o,420);try{typeof r=="string"?(0,N.writeSync)(i,r,void 0,"utf-8"):(0,N.writeSync)(i,r)}finally{(0,N.closeSync)(i)}(0,N.renameSync)(n,e)}var N,we,mg,zl=w(()=>{"use strict";N=require("node:fs"),we=require("node:path");y();mg=f("Sync:VaultSymlinkGuard")});function Qr(t){return`skills--${t}.md`}function hg(t){let e=["| Skill | \xD7 | Tokens | Input | Output | Cached |","|---|---|---|---|---|---|"],r=[...t].sort((o,i)=>{let s=Ho(i)-Ho(o);return s!==0?s:o.skill<i.skill?-1:o.skill>i.skill?1:0}),n=!1;for(let o of r){let i=o.detection==="heuristic"?" \u2020":"";i!==""&&(n=!0),e.push(`| ${yg(o.skill)}${i} | ${o.invocationCount} | ${wg(o).join(" | ")} |`)}return n&&e.push("","\u2020 Inferred from a file read rather than an observed invocation: the count is per session, and a human reading the skill file looks the same."),e}function Xl(t){let e=`${t.length} skill${t.length===1?"":"s"}`,r=0,n=!1,o=!1;for(let i of t)i.usage!==void 0&&(n=!0,r+=i.usage.input+i.usage.cached+i.usage.output,i.usage.confidence!=="attributed"&&(o=!0));return n?`${e} \xB7 ${Ql(r,o?"~":"")} tokens`:e}function Yl(t,e){let r=t.commitHash.substring(0,8);return`${["---","type: skill-usage",`commitHash: ${t.commitHash}`,`branch: ${t.branch}`,`generatedAt: ${t.generatedAt}`,"---","",`# Skills used \u2014 ${r}`,"",`_${t.commitMessage}_`,"",...hg(e),""].join(`
`)}
`}function yg(t){return t.replace(/\\/g,"\\\\").replace(/\|/g,"\\|").replace(/[\r\n]+/g," ")}function Ho(t){let e=t.usage;return e===void 0?0:e.input+e.cached+e.output}function wg(t){let e=t.usage;if(e===void 0)return["\u2014","\u2014","\u2014","\u2014"];let r=e.confidence==="attributed"?"":"~";return[Ho(t),e.input,e.output,e.cached].map(n=>Ql(n,r))}function Ql(t,e){return t<1e3?`${e}${t}`:`${e}${(t/1e3).toFixed(1)}k`}var Fo=w(()=>{"use strict"});function Oe(t){return t.replace(/[\\[\]]/g,"\\$&").replace(/[\r\n]+/g," ")}function Zl(t){return t.replace(/[\\[\]~]/g,"\\$&").replace(/[\r\n]+/g," ")}function Zr(t){return t.replace(/[()\s<>"]/g,e=>e==="("?"%28":e===")"?"%29":encodeURIComponent(e))}var ec=w(()=>{"use strict"});var tc,Uo=w(()=>{"use strict";tc=/-[0-9a-f]{8}$/});function bg(t){return Sg.has(t)}function Jo(t){return bg(t.source)?`${t.nativeId} \u2014 ${t.title}`:t.title}var Sg,Bo=w(()=>{"use strict";Or();Sg=new Set(["linear","jira","github"])});function en(t){return t.version>=4}function kg(t){return[...t??[]].reverse()}function ht(t){let e=kg(t.children).flatMap(ht),r=(t.topics??[]).map(n=>({...n,commitDate:t.commitDate,generatedAt:t.generatedAt}));return[...e,...r]}function rc(t){let e=t.stats,r=e?.filesChanged??0,n=e?.insertions??0,o=e?.deletions??0;for(let i of t.children??[]){let s=rc(i);r+=s.filesChanged,n+=s.insertions,o+=s.deletions}return{filesChanged:r,insertions:n,deletions:o}}function Vt(t){return t.diffStats?t.diffStats:(t.children?.length??0)>0?rc(t):t.stats??{filesChanged:0,insertions:0,deletions:0}}function qo(t){let e=t.conversationTurns??0,r=(t.children??[]).reduce((n,o)=>n+qo(o),0);return e+r}function Wo(t){let e=t.conversationTokens??0,r=(t.children??[]).reduce((n,o)=>n+Wo(o),0);return e+r}function Go(t){let e=t.conversationTokenBreakdown,r={input:e?.input??0,output:e?.output??0,cached:e?.cached??0};return(t.children??[]).reduce((n,o)=>{let i=Go(o);return{input:n.input+i.input,output:n.output+i.output,cached:n.cached+i.cached}},{input:r.input,output:r.output,cached:r.cached})}function tn(t){let e=[],r=n=>{if(!n.children?.length)e.push(n);else for(let o of n.children)r(o)};for(let n of t.children??[])r(n);return e}function Vo(t){return en(t)?(t.topics??[]).map(e=>({...e,commitDate:t.commitDate,generatedAt:t.generatedAt})):ht(t)}function Ko(t){let e=[t.commitHash];for(let r of t.children??[])e.push(...Ko(r));return e}function Eg(t){let e=tn(t);return e.length<=1?1:new Set(e.map(n=>new Date(n.generatedAt||n.commitDate).toISOString().substring(0,10))).size}function nc(t){let e=Eg(t),r=e===1?"1 day":`${e} days`,n=tn(t);if(n.length<=1)return r;let o=n.map(l=>new Date(l.generatedAt||l.commitDate).getTime()),i=new Date(Math.min(...o)),s=new Date(Math.max(...o)),a=l=>l.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});return`${r} (${a(i)} \u2014 ${a(s)})`}var yt=w(()=>{"use strict"});var oc=w(()=>{"use strict"});function q(t){return t.generatedAt||t.commitDate}function sc(t){try{return new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch{return t}}function zo(t){try{return new Date(t).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})}catch{return t}}function ic(t){return t.substring(0,10)}function vg(t){return[...t].sort((e,r)=>{let n=ic(e.generatedAt||e.commitDate||""),o=ic(r.generatedAt||r.commitDate||"");if(n!==o)return n>o?-1:1;let i=e.importance==="minor"?1:0,s=r.importance==="minor"?1:0;return i-s})}function ac(t){return String(t+1).padStart(2,"0")}function xg(t,e){return e==="local-agent"?t.localAgentTool?`Local agent - ${We(t.localAgentTool)}`:"Local agent":Rg[e]}function lc(t){let e=new Set,r=o=>{let i=o.llm;i?.source&&e.add(xg(i,i.source));for(let s of o.children??[])r(s)};r(t);let n=[...e];if(n.length!==0)return n.length===1?n[0]:`mixed: ${n.join(", ")}`}function cc(t){let e=tn(t),r=Vo(t);return{topics:vg(r.map((o,i)=>({...o,treeIndex:i}))),sourceNodes:e}}var Rg,rn=w(()=>{"use strict";Xr();Bo();yt();oc();Rg={"anthropic-config":"Anthropic","anthropic-env":"Anthropic (env)","jolli-proxy":"Jolli proxy","local-agent":"Local agent"}});function Kt(t){return Math.round(t).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function dc(t){return t>=.01?`$${t.toFixed(2)}`:t>=5e-5?`$${t.toFixed(4)}`:t>0?"<$0.0001":"$0.00"}function fc(t,e){return t?t.input*uc+t.output*Pg+t.cached*Cg:e*uc}var uc,Pg,Cg,pc=w(()=>{"use strict";uc=3/1e6,Pg=15/1e6,Cg=3.75/1e6});function Qo(t){let{topics:e,sourceNodes:r}=cc(t),n=[];return Tg(n,t),Dg(n,t,{withRelevance:!0}),Ig(n,t),Og(n,t.e2eTestGuide),Mg(n,r),Ng(n,e,$g),Lg(n),n.join(`
`)}function Tg(t,e){let r=Vt(e),n=r.filesChanged,o=qo(e),i=`${n} file${n!==1?"s":""} changed, +${r.insertions} insertions, \u2212${r.deletions} deletions`,s=zo(q(e));t.push(`# ${e.commitMessage}`,"",`- **Commit:** \`${e.commitHash}\``,`- **Branch:** \`${e.branch}\``,`- **Author:** ${e.commitAuthor}`,`- **Date:** ${s}`,`- **Duration:** ${nc(e)}`,`- **Changes:** ${i}`),o>0&&t.push(`- **Conversations:** ${o} turn${o!==1?"s":""}`);let a=Wo(e);if(a>0){let c=Go(e),d=c.input>0||c.output>0||c.cached>0?c:void 0,u=dc(fc(d,a)),m=d?` (${Kt(d.input)} input, ${Kt(d.output)} output, ${Kt(d.cached)} cached)`:"";t.push(`- **Task usage:** ${Kt(a)} tokens \xB7 ${u}${m}`)}let l=e.jolliDocUrl;l&&t.push(`- **Jolli Memory:** [${l}](${l})`),t.push("","---")}function Ig(t,e){let r=e.recap?.trim();r&&t.push("","## Quick recap","",r,"","---")}function Ag(t){let e=new Map;for(let o of t){let i=e.get(o.source)??[];i.push(o),e.set(o.source,i)}let r=Dr().all().map(o=>o.id),n=[];for(let o of r){let i=e.get(o);i&&(n.push(...i),e.delete(o))}for(let o of e.values())n.push(...o);return n}function Xo(t,e,r){return t.get(`${e}:${r}`)??t.get(`${e}:${r.replace(tc,"")}`)}function Yo(t){return!t||t.reason===""?"":` \u2014 ${_g[t.tier]} \xB7 ${Oe(t.reason)}`}function Dg(t,e,r){let n=e.plans??[],o=e.notes??[],i=r?.includeReferences?e.references??[]:[],s=r?.withRelevance?e.excludedContext??[]:[],a=new Map;if(r?.withRelevance)for(let u of e.contextRelevance??[])a.set(`${u.kind}:${u.key}`,{tier:u.tier,reason:u.reason});let l=e.skills??[],c=n.length+o.length+i.length+(l.length>0?1:0);if(c===0&&s.length===0)return;let d=c>1?` (${c})`:"";t.push("",`## Context${d}`,"");for(let u of n){let m=u.jolliPlanDocUrl,p=Yo(Xo(a,"plan",u.slug));t.push((m?`- [${Oe(u.title)}](${Zr(m)})`:`- ${Oe(u.title)}`)+p)}for(let u of o){let m=u.jolliNoteDocUrl,p=Yo(Xo(a,"note",u.id));t.push((m?`- [${Oe(u.title)}](${Zr(m)})`:`- ${Oe(u.title)}`)+p)}for(let u of Ag(i)){let m=Oe(Jo(u)),p=u.jolliReferenceDocUrl??u.url,x=Yo(Xo(a,"reference",`${u.source}:${u.nativeId}`));t.push((p?`- [${m}](${Zr(p)})`:`- ${m}`)+x)}if(l.length>0){let u=l.some(m=>m.detection==="heuristic")?" \xB7 some inferred":"";t.push(`- Skills used \u2014 ${Oe(Xl(l))}${u}`)}for(let u of s)t.push(`- ~~${Zl(u.title)}~~ \u2014 Excluded${u.reason?` \xB7 ${Oe(u.reason)}`:""}`)}function Og(t,e){if(!(!e||e.length===0)){t.push("",`## E2E Test (${e.length})`);for(let r=0;r<e.length;r++){let n=e[r];t.push("",`### ${r+1}. ${n.title}`),n.preconditions&&t.push("",`**Preconditions:** ${n.preconditions}`),t.push("","**Steps:**");for(let o=0;o<n.steps.length;o++)t.push(`${o+1}. ${n.steps[o]}`);t.push("","**Expected Results:**");for(let o of n.expectedResults)t.push(`- ${o}`)}t.push("","---")}}function Mg(t,e){if(!(e.length<=1)){t.push("",`## Source Commits (${e.length})`);for(let r of e){let n=Vt(r),o=r.conversationTurns?` \xB7 ${r.conversationTurns} turns`:"";t.push(`- \`${r.commitHash.substring(0,8)}\` ${r.commitMessage}  _(+${n.insertions} \u2212${n.deletions}${o} \xB7 ${sc(q(r))})_`)}t.push("","---")}}function $g(t,e){if(t.push("","**\u26A1 Why This Change**","",e.trigger),t.push("","**\u{1F4A1} Decisions Behind the Code**","",e.decisions),t.push("","**\u2705 What Was Implemented**","",e.response),e.todo&&t.push("","**\u{1F4CB} Future Enhancements**","",e.todo),e.filesAffected&&e.filesAffected.length>0){t.push("","**\u{1F4C1} FILES**");for(let r of e.filesAffected)t.push(`- \`${r}\``)}}function Ng(t,e,r,n={singular:"Summary",plural:"Summaries"}){if(e.length!==0){t.push("",`## ${e.length===1?n.singular:n.plural} (${e.length})`);for(let o=0;o<e.length;o++){let i=e[o],s=i.category?` \`${i.category}\``:"";t.push("",`### ${ac(o)} \xB7 ${i.title}${s}`),r(t,i)}}}function Lg(t,e){let r=zo(new Date().toISOString()),n=e?lc(e):void 0,o=n?` \xB7 via ${n}`:"";t.push("","---","",`*Generated by Jolli Memory \xB7 ${r}${o}*`)}var _g,mc=w(()=>{"use strict";ec();Uo();Bo();Or();Fo();rn();yt();pc();_g={high:"High",mid:"Med",low:"Low"}});function hc(t,e,r,n){let o=[];if(o.push(`# ${t.title}`),o.push(""),o.push(gc),o.push(""),o.push(`> **Source branches:** ${e.join(", ")}`),o.push(`> **Merged:** ${r}`),o.push(`> **Topic slug:** \`${t.stableSlug}\` (stable across re-merges)`),o.push(""),o.push(t.content.trim()),o.push(""),t.keyDecisions&&t.keyDecisions.length>0){o.push("## Key Decisions"),o.push("");for(let i of t.keyDecisions)o.push(`- ${i}`);o.push("")}if(t.sourceCommits.length>0){o.push("## Source Commits"),o.push("");for(let i of t.sourceCommits){let s=i.substring(0,8),a=n.resolveCommitVisiblePath(s),l=n.resolveCommitMessage(s);a&&l?o.push(`- ${Zo(s,jg(a))} \u2014 ${l}`):l?o.push(`- \`${s}\` \u2014 ${l}`):o.push(`- \`${s}\``)}o.push("")}if(t.relatedBranches&&t.relatedBranches.length>0){o.push("## Related Branches"),o.push("");for(let i of t.relatedBranches){let s=n.resolveBranchFolder(i);s?o.push(`- ${Zo(i,`../${s}/`)}`):o.push(`- \`${i}\``)}o.push("")}return o.join(`
`)}function yc(t){return{title:t.title,stableSlug:t.stableSlug,content:t.content,...t.relatedBranches.length>0&&{relatedBranches:[...t.relatedBranches]},sourceCommits:t.sourceRefs.filter(e=>e.type==="summary").map(e=>e.id)}}function wc(t,e){let r=[];if(r.push(`# ${e.repoName} \xB7 Knowledge Wiki`),r.push(""),r.push(gc),r.push(""),r.push(`> **${t.length} topics** in the knowledge base`),r.push(""),t.length>0){r.push("## Topics"),r.push("");for(let n of t)r.push(`- ${Zo(n.title,`topic--${n.stableSlug}.md`)}`);r.push("")}return r.join(`
`)}function jg(t){return t.startsWith("./")?t.substring(2):t}function Zo(t,e){let r=t.replace(/[\\[\]]/g,"\\$&"),n=e.replace(/ /g,"%20").replace(/\(/g,"%28").replace(/\)/g,"%29");return`[${r}](${n})`}var gc,Sc=w(()=>{"use strict";gc="<!-- Generated by Jolli Memory \xB7 do not edit \u2014 regenerated on every merge -->"});var R,bc,P,E,nn,kc=w(()=>{"use strict";R=require("node:fs"),bc=require("node:fs/promises"),P=require("node:path");y();zl();Kr();_e();Fo();mc();Sc();E=f("FolderStorage"),nn=class t{constructor(e,r){this.rootPath=e;this.metadataManager=r;this.kind="folder"}get vaultRoot(){return(0,P.dirname)(this.rootPath)}get kbRoot(){return this.rootPath}async readFile(e){let r=(0,P.join)(this.rootPath,".jolli",e);try{return(0,R.readFileSync)(r,"utf-8")}catch(n){let o=n.code;return o==="ENOENT"||o==="ENOTDIR"||E.warn("readFile failed for %s: %s",r,I(n)),null}}async writeFiles(e,r){if(xe())return;await this.ensure();let n=0,o=0;for(let i of e)i.delete?this.deleteHiddenFile(i.path)&&o++:(this.writeHiddenFile(i.path,i.content),n++,i.path.startsWith("summaries/")&&i.path.endsWith(".json")&&this.generateSummaryMarkdown(i.content),i.path.startsWith("plans/")&&i.path.endsWith(".md")&&this.generatePlanMarkdown(i.path,i.content,i.branch),i.path.startsWith("notes/")&&i.path.endsWith(".md")&&this.generateNoteMarkdown(i.path,i.content,i.branch));E.info("Wrote %d files, deleted %d (%s)",n,o,r)}async listFiles(e){let r=(0,P.join)(this.rootPath,".jolli",e);if(!(0,R.existsSync)(r))return[];let n=(0,P.join)(this.rootPath,".jolli"),o=[];return this.walkDir(r,n,o),o.sort()}async exists(){return(0,R.existsSync)(this.rootPath)}async ensure(){(0,R.mkdirSync)(this.rootPath,{recursive:!0}),this.metadataManager.ensure()}markDirty(e){let r=(0,P.join)(this.rootPath,".jolli","shadow-status.json"),n={dirty:!0,lastFailedAt:new Date().toISOString(),message:e};try{jo(this.vaultRoot,r,JSON.stringify(n,null,"	"))}catch(o){E.warn("markDirty suppressed: %s",I(o))}}clearDirty(){let e=(0,P.join)(this.rootPath,".jolli","shadow-status.json");try{(0,R.existsSync)(e)&&(0,R.unlinkSync)(e)}catch{}}isDirty(){let e=(0,P.join)(this.rootPath,".jolli","shadow-status.json");return(0,R.existsSync)(e)}async deleteVisibleMarkdown(e){let r=t.slugify(e.commitMessage),n=e.commitHash.substring(0,8);try{await this.deleteVisibleArtifact(`skill:${e.commitHash}`,e.branch,Qr(n))}catch(o){E.warn("Failed to delete skills aggregate for %s: %s",n,String(o))}return this.deleteVisibleArtifact(e.commitHash,e.branch,`${r}-${n}.md`)}async deletePlanVisible(e,r){await this.deleteVisibleArtifact(`plan:${e}`,r,`plan--${e}.md`)}async deleteNoteVisible(e,r){await this.deleteVisibleArtifact(`note:${e}`,r,`note--${e}.md`)}async pruneBranchMappings(e){let r=new Map,n=new Set(e);for(let i of this.metadataManager.listBranchMappings())n.has(i.branch)&&r.set(i.branch,i.folder);let o=this.metadataManager.unregisterBranches(e);return o===0?0:(await Promise.all([...r.values()].map(i=>this.rmdirIfEmpty((0,P.join)(this.rootPath,i)))),o)}async rmdirIfEmpty(e){try{await(0,bc.rmdir)(e)}catch(r){let n=r.code;if(n==="ENOENT"||n==="ENOTEMPTY"||n==="EEXIST")return;E.warn("rmdir(%s) failed (non-fatal): %s",e,I(r))}}resolveBranchForFolder(e){return this.metadataManager.listBranchMappings().find(n=>n.folder===e)?.branch??null}async deleteVisibleArtifact(e,r,n){let o=this.metadataManager.findById(e),i=this.metadataManager.resolveFolderForBranch(r),s=o?.path??`${i}/${n}`,a=(0,P.join)(this.rootPath,s);if(!(0,R.existsSync)(a))return o&&this.metadataManager.removeFromManifest(e),!1;if(o?.fingerprint&&this.isUserEditedOnDisk(a,o.fingerprint))return E.warn("Skipping cleanup of %s \u2014 file modified since manifest record (likely hand-edited)",s),!1;try{return(0,R.unlinkSync)(a),o&&this.metadataManager.removeFromManifest(e),E.info("Deleted visible MD: %s",s),!0}catch(l){if(l.code==="ENOENT")return o&&this.metadataManager.removeFromManifest(e),!1;throw l}}async forceRegenerateVisibleMarkdown(e){let r=await this.readFile(`summaries/${e.commitHash}.json`);if(!r)return E.warn("forceRegenerateVisibleMarkdown: hidden summaries/%s.json missing \u2014 leaving visible file intact",e.commitHash.substring(0,8)),{ok:!1,reason:"missing"};try{JSON.parse(r)}catch(c){return E.warn("forceRegenerateVisibleMarkdown: malformed summaries/%s.json (%s) \u2014 leaving visible file intact",e.commitHash.substring(0,8),I(c)),{ok:!1,reason:"malformed"}}let n=this.metadataManager.resolveFolderForBranch(e.branch),o=t.slugify(e.commitMessage),i=e.commitHash.substring(0,8),s=`${n}/${o}-${i}.md`,a=(0,P.join)(this.rootPath,s);if((0,R.existsSync)(a))try{(0,R.unlinkSync)(a)}catch(c){return E.warn("forceRegenerateVisibleMarkdown: cannot unlink %s [%s]",s,String(c)),{ok:!1,reason:"unlinkFailed"}}return await this.regenerateVisibleMarkdown(e)?{ok:!0}:{ok:!1,reason:"missing"}}async regenerateVisibleMarkdown(e){let r=this.metadataManager.resolveFolderForBranch(e.branch),n=t.slugify(e.commitMessage),o=e.commitHash.substring(0,8),i=`${r}/${n}-${o}.md`,s=(0,P.join)(this.rootPath,i);if((0,R.existsSync)(s))return await this.healSkillsAggregate(e,r,o),!0;let a=await this.readFile(`summaries/${e.commitHash}.json`);if(!a)return E.warn("regenerateVisibleMarkdown: hidden summaries/%s.json missing",e.commitHash.substring(0,8)),!1;let l;try{l=JSON.parse(a)}catch(x){return E.warn("regenerateVisibleMarkdown: malformed summaries/%s.json \u2014 %s",e.commitHash.substring(0,8),I(x)),!1}let c=this.buildYamlFrontmatter(l),d=Qo(l),u=`${c}
${d}`;this.atomicWrite(s,u);let m=this.metadataManager.findById(e.commitHash),p=V.sha256(u);return this.metadataManager.updateManifest({path:i,fileId:l.commitHash,type:"commit",fingerprint:p,source:{commitHash:l.commitHash,branch:l.branch,generatedAt:l.generatedAt},title:m?.title??l.commitMessage}),this.generateSkillsAggregate(l,r,o),E.info("Regenerated visible MD: %s",i),!0}async healMissingVisibleMarkdown(e){let n=this.metadataManager.readManifest().files.filter(c=>c.type==="commit"),o=0,i=0,s=0,a=[];for(let c of n){let d=(0,P.join)(this.rootPath,c.path);if((0,R.existsSync)(d)){i++;continue}let u=(0,P.join)(this.rootPath,".jolli","summaries",`${c.fileId}.json`),m;try{m=(0,R.readFileSync)(u,"utf-8")}catch($){let oe=$.code;if(oe==="ENOENT"){s++,e?.dropOrphanedManifestEntries?(a.push(c.fileId),E.warn("healMissingVisibleMarkdown: hidden JSON missing for %s \u2014 will drop manifest entry",c.fileId.substring(0,8))):E.warn("healMissingVisibleMarkdown: hidden JSON missing for %s \u2014 keeping manifest entry (no truth source to repopulate)",c.fileId.substring(0,8));continue}s++,E.warn("healMissingVisibleMarkdown: hidden JSON read failed for %s [%s]: %s \u2014 keeping manifest entry",c.fileId.substring(0,8),oe??"?",I($));continue}let p;try{p=JSON.parse(m)}catch($){s++,E.warn("healMissingVisibleMarkdown: malformed hidden JSON for %s: %s",c.fileId.substring(0,8),I($));continue}let x=this.metadataManager.resolveFolderForBranch(p.branch),_=t.slugify(p.commitMessage),D=p.commitHash.substring(0,8),k=`${x}/${_}-${D}.md`;if(k!==c.path){i++,E.warn("healMissingVisibleMarkdown: manifest path drift for %s \u2014 manifest=%s computed=%s \u2014 keeping manifest entry, run reconcile",c.fileId.substring(0,8),c.path,k);continue}let O={commitHash:p.commitHash,parentCommitHash:null,commitMessage:p.commitMessage,commitDate:p.commitDate,branch:p.branch,generatedAt:p.generatedAt};try{await this.regenerateVisibleMarkdown(O)?o++:(s++,E.warn("healMissingVisibleMarkdown: regenerate returned false for %s \u2014 retry on next pass",c.fileId.substring(0,8)))}catch($){s++,E.warn("healMissingVisibleMarkdown: regenerate failed for %s: %s",c.fileId.substring(0,8),I($))}}let l=a.length>0?this.dropManifestEntries(a):[];return(o>0||s>0)&&E.info("healMissingVisibleMarkdown: healed=%d skipped=%d failed=%d dropped=%d",o,i,s,l.length),l.length>0?{healed:o,skipped:i,failed:s,droppedIds:l}:{healed:o,skipped:i,failed:s}}dropManifestEntries(e){if(e.length===0)return[];let r=new Set(e),n=this.metadataManager.readManifest(),o=n.files.filter(s=>r.has(s.fileId)).map(s=>s.fileId);if(o.length===0)return[];let i=n.files.filter(s=>!r.has(s.fileId));return this.metadataManager.replaceFiles(i),o}isUserEditedOnDisk(e,r){if(!(0,R.existsSync)(e)||!r)return!1;let n;try{n=V.sha256((0,R.readFileSync)(e,"utf-8"))}catch(o){return E.warn("isUserEditedOnDisk: cannot read %s [%s] \u2014 treating as edited",e,String(o)),!0}return n!==r}generateSummaryMarkdown(e){let r;try{r=JSON.parse(e)}catch{return}let n=this.metadataManager.resolveFolderForBranch(r.branch),o=t.slugify(r.commitMessage),i=r.commitHash.substring(0,8),s=`${o}-${i}.md`,a=`${n}/${s}`,l=this.buildYamlFrontmatter(r),c=Qo(r),d=`${l}
${c}`,u=(0,P.join)(this.rootPath,a),m=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(u,m?.fingerprint)){E.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(u,d);let p=V.sha256(d);this.metadataManager.updateManifest({path:a,fileId:r.commitHash,type:"commit",fingerprint:p,source:{commitHash:r.commitHash,branch:r.branch,generatedAt:r.generatedAt},title:r.commitMessage}),E.info("Markdown generated: %s",a),this.generateSkillsAggregate(r,n,i),r.children&&r.children.length>0&&this.cleanupSupersededDescendants(r.children,a)}async healSkillsAggregate(e,r,n){if((0,R.existsSync)((0,P.join)(this.rootPath,r,Qr(n))))return;let o=await this.readFile(`summaries/${e.commitHash}.json`);if(o)try{this.generateSkillsAggregate(JSON.parse(o),r,n)}catch{}}generateSkillsAggregate(e,r,n){let o=e.skills;if(o===void 0||o.length===0)return;let i=`${r}/${Qr(n)}`,s=(0,P.join)(this.rootPath,i),a=this.metadataManager.findByPath(i);if(this.isUserEditedOnDisk(s,a?.fingerprint)){E.info("FolderStorage: skip overwrite of user-edited %s",i);return}let l=Yl(e,o);this.atomicWrite(s,l),this.metadataManager.updateManifest({path:i,fileId:`skill:${e.commitHash}`,type:"skill",fingerprint:V.sha256(l),source:{commitHash:e.commitHash,branch:e.branch,generatedAt:e.generatedAt},title:`Skills used \u2014 ${n}`}),E.info("Skills aggregate generated: %s",i)}cleanupSupersededDescendants(e,r){let n=[];t.collectDescendantHashes(e,n);for(let o of n){let i=this.metadataManager.findById(o);if(!i||i.type!=="commit"||i.path===r)continue;let s=(0,P.join)(this.rootPath,i.path);if(!(0,R.existsSync)(s)){this.metadataManager.removeFromManifest(o);continue}if(!i.fingerprint){E.warn("Skipping cleanup of %s \u2014 legacy entry has no fingerprint baseline",i.path);continue}if(this.isUserEditedOnDisk(s,i.fingerprint)){E.warn("Skipping cleanup of %s \u2014 file modified since manifest record (likely hand-edited)",i.path);continue}try{(0,R.unlinkSync)(s),this.metadataManager.removeFromManifest(o),E.info("Cleaned up superseded MD: %s",i.path)}catch(a){E.warn("Failed to delete superseded MD %s: %s",i.path,String(a))}}}static collectDescendantHashes(e,r){for(let n of e)r.push(n.commitHash),n.children&&n.children.length>0&&t.collectDescendantHashes(n.children,r)}buildYamlFrontmatter(e){let r=["---"];return r.push(`commitHash: ${e.commitHash}`),r.push(`branch: ${e.branch}`),r.push(`author: ${e.commitAuthor}`),r.push(`date: ${e.commitDate}`),r.push("type: commit"),e.commitType&&r.push(`commitType: ${e.commitType}`),e.stats&&(r.push(`filesChanged: ${e.stats.filesChanged}`),r.push(`insertions: ${e.stats.insertions}`),r.push(`deletions: ${e.stats.deletions}`)),r.push("---"),r.join(`
`)}async regenerateVisiblePlan(e,r){let n=await this.readFile(`plans/${e}.md`);if(!n)return E.warn("regenerateVisiblePlan: hidden plans/%s.md missing",e),!1;let o=this.metadataManager.resolveFolderForBranch(r),i=(0,P.join)(this.rootPath,o,`plan--${e}.md`);if((0,R.existsSync)(i))try{(0,R.unlinkSync)(i)}catch(s){return E.warn("regenerateVisiblePlan: cannot unlink %s [%s]",i,String(s)),!1}return this.generatePlanMarkdown(`plans/${e}.md`,n,r),!0}generatePlanMarkdown(e,r,n){let o=e.replace(/^plans\//,"").replace(/\.md$/,""),i=n?this.metadataManager.resolveFolderForBranch(n):this.resolveBranchFromSlug(o),s=`plan--${o}.md`,a=`${i}/${s}`,c=`${["---","type: plan",`slug: ${o}`,"---"].join(`
`)}

${r}`,d=(0,P.join)(this.rootPath,a),u=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(d,u?.fingerprint)){E.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(d,c);let m=V.sha256(c);this.metadataManager.updateManifest({path:a,fileId:`plan:${o}`,type:"plan",fingerprint:m,updatedAt:new Date().toISOString(),source:n?{branch:n}:{},title:this.extractTitle(r)??o}),E.info("Plan markdown generated: %s",a)}async regenerateVisibleNote(e,r){let n=await this.readFile(`notes/${e}.md`);if(!n)return E.warn("regenerateVisibleNote: hidden notes/%s.md missing",e),!1;let o=this.metadataManager.resolveFolderForBranch(r),i=(0,P.join)(this.rootPath,o,`note--${e}.md`);if((0,R.existsSync)(i))try{(0,R.unlinkSync)(i)}catch(s){return E.warn("regenerateVisibleNote: cannot unlink %s [%s]",i,String(s)),!1}return this.generateNoteMarkdown(`notes/${e}.md`,n,r),!0}generateNoteMarkdown(e,r,n){let o=e.replace(/^notes\//,"").replace(/\.md$/,""),i=n?this.metadataManager.resolveFolderForBranch(n):this.resolveBranchFromSlug(o),s=`note--${o}.md`,a=`${i}/${s}`,c=`${["---","type: note",`id: ${o}`,"---"].join(`
`)}

${r}`,d=(0,P.join)(this.rootPath,a),u=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(d,u?.fingerprint)){E.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(d,c);let m=V.sha256(c);this.metadataManager.updateManifest({path:a,fileId:`note:${o}`,type:"note",fingerprint:m,source:n?{branch:n}:{},title:this.extractTitle(r)??o,updatedAt:new Date().toISOString()}),E.info("Note markdown generated: %s",a)}resolveBranchFromSlug(e){let r=e.split("-").at(-1);if(r.length>=7){let o=this.metadataManager.readManifest().files.find(s=>s.type==="commit"&&s.source?.commitHash?.startsWith(r));if(o?.source?.branch)return this.metadataManager.resolveFolderForBranch(o.source.branch);let i=(0,P.join)(this.rootPath,".jolli","index.json");if((0,R.existsSync)(i))try{let a=JSON.parse((0,R.readFileSync)(i,"utf-8")).entries.find(l=>l.commitHash.startsWith(r));if(a?.branch)return this.metadataManager.resolveFolderForBranch(a.branch)}catch{}}return"_shared"}extractTitle(e){let r=e.match(/^#\s+(.+)/m);return r?r[1].trim():null}writeHiddenFile(e,r){let n=(0,P.join)(this.rootPath,".jolli",e);this.atomicWrite(n,r)}deleteHiddenFile(e){let r=(0,P.join)(this.rootPath,".jolli",e);if(!(0,R.existsSync)(r))return!1;try{return(0,R.unlinkSync)(r),!0}catch{return!1}}walkDir(e,r,n){for(let o of(0,R.readdirSync)(e,{withFileTypes:!0})){let i=(0,P.join)(e,o.name);o.isDirectory()?this.walkDir(i,r,n):n.push(Jt((0,P.relative)(r,i)))}}async renderTopicWiki(e){let r=(0,P.join)(this.rootPath,"_wiki");this.wipeWikiArtifacts(r);let n=this.buildWikiRenderContext();(0,R.mkdirSync)(r,{recursive:!0});let o=[];for(let i of e)try{let s=yc(i);o.push(s);let a=`_wiki/topic--${s.stableSlug}.md`,l=hc(s,i.relatedBranches,i.lastUpdatedAt,n);this.atomicWrite((0,P.join)(this.rootPath,a),l),this.metadataManager.updateManifest({path:a,fileId:`wiki-topic-${s.stableSlug}`,type:"wiki",fingerprint:V.sha256(l),source:{generatedAt:i.lastUpdatedAt},title:s.title})}catch(s){E.warn("renderTopicWiki: failed to render topic %s: %s",i.stableSlug,I(s))}try{let i=wc(o,n),s="_wiki/_index.md";this.atomicWrite((0,P.join)(this.rootPath,s),i),this.metadataManager.updateManifest({path:s,fileId:"wiki-index",type:"wiki",fingerprint:V.sha256(i),source:{generatedAt:new Date().toISOString()},title:`${n.repoName} Knowledge Wiki`})}catch(i){E.warn("renderTopicWiki: failed to render index: %s",I(i))}E.info("Topic-KB wiki regenerated: %d topics under %s",e.length,r)}isTopicWikiPresent(){return(0,R.existsSync)((0,P.join)(this.rootPath,"_wiki","_index.md"))}wipeWikiArtifacts(e){if(this.metadataManager.unregisterFilesByType("wiki"),!!(0,R.existsSync)(e))try{for(let r of(0,R.readdirSync)(e))if(r.endsWith(".md"))try{(0,R.unlinkSync)((0,P.join)(e,r))}catch(n){E.warn("FolderStorage.wipeWikiArtifacts: failed to unlink %s: %s",r,I(n))}}catch(r){E.warn("FolderStorage.wipeWikiArtifacts: failed to list %s: %s",e,I(r))}}buildWikiRenderContext(){let e=this.metadataManager.readConfig(),r=this.metadataManager.listBranchMappings(),n=new Map(r.map(s=>[s.branch,s.folder])),o=this.metadataManager.readManifest(),i=new Map;for(let s of o.files)s.type==="commit"&&s.source.commitHash&&i.set(s.source.commitHash.substring(0,8),s);return{repoName:e.repoName??"Memory Bank",resolveCommitVisiblePath:s=>{let a=i.get(s);return a?`../${a.path}`:null},resolveBranchFolder:s=>n.get(s)??null,resolveCommitMessage:s=>i.get(s)?.title??null}}atomicWrite(e,r){jo(this.vaultRoot,e,r)}static slugify(e){let r=e.toLowerCase().replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"");return r.length>50&&(r=r.substring(0,50).replace(/-+$/,"")),r||"untitled"}}});var Ve,ei=w(()=>{"use strict";y();ge();Ve=class{constructor(e){this.cwd=e;this.kind="orphan-branch"}async readFile(e){return $t(Z,e,this.cwd)}async batchReadFiles(e){return As(Z,e,this.cwd)}async writeFiles(e,r){xe()||(await this.ensure(),await _s(Z,e,r,this.cwd))}async listFiles(e){return[...await Ds(Z,e,this.cwd)]}async exists(){return Cr(Z,this.cwd)}async ensure(){await Vn(Z,this.cwd)}}});async function ti(t,e){let r;try{r=await Ee()}catch(i){wt.warn("Failed to load config, falling back to defaults: %s",i.message),r={}}let n=r.storageMode??"dual-write",o=r.localFolder;if(wt.info("StorageFactory.create: storageMode=%s, projectPath=%s",n,t),n!=="orphan"&&!Dl(t,o))return wt.warn("Not a claimable project (no git worktree, or inside the Memory Bank folder): %s \u2014 using orphan-only storage instead of %s",t,n),new Ve(e);switch(n){case"dual-write":{let i=new Ve(e),s=Ec(t,o);return wt.info("Storage mode: dual-write (primary=orphan, shadow=folder)"),new Yr(i,s)}case"folder":return wt.info("Storage mode: folder"),Ec(t,o);default:return wt.info("Storage mode: orphan (default)"),new Ve(e)}}function Ec(t,e){let r=Al(t),n=Ml(t),o=Il(r,n,e),i=new V((0,vc.join)(o,".jolli"));return new nn(o,i)}var vc,wt,Rc=w(()=>{"use strict";vc=require("node:path");y();Kl();kc();Gt();Kr();ei();ve();wt=f("StorageFactory")});function xc(t){return t.summaryError===Hg}var Hg,ri=w(()=>{"use strict";Hg="local-agent-auth"});function ni(t){return Fg.exec(t)?.[1]??null}var Fg,oi=w(()=>{"use strict";Fg=/^transcripts\/(.+)\.json$/});function Ug(t,e){return t||Pc||(process.env.VITEST||ii.warn("resolveStorage fallback to OrphanBranchStorage \u2014 caller did not thread storage or call setActiveStorage. Folder-mode users will miss this write. cwd=%s",e??"(undef)"),new Ve(e))}function Cc(t){let e=[];for(let r of t)r.e2eTestGuide&&e.push(...r.e2eTestGuide),r.children&&e.push(...Cc(r.children));return e}function Tc(t){let{e2eTestGuide:e,...r}=t;return r.children?{...r,children:r.children.map(Tc)}:r}function Ic(t){let e=new Map;for(let r of t){if(r.plans)for(let n of r.plans){let o=n.slug,i=e.get(o);(!i||n.updatedAt>i.updatedAt)&&e.set(o,n)}if(r.children)for(let n of Ic(r.children)){let o=e.get(n.slug);(!o||n.updatedAt>o.updatedAt)&&e.set(n.slug,n)}}return[...e.values()]}function Ac(t){let{plans:e,...r}=t;return r.children?{...r,children:r.children.map(Ac)}:r}function _c(t){let e=new Map;for(let r of t){if(r.notes)for(let n of r.notes){let o=e.get(n.id);(!o||n.updatedAt>o.updatedAt)&&e.set(n.id,n)}if(r.children)for(let n of _c(r.children)){let o=e.get(n.id);(!o||n.updatedAt>o.updatedAt)&&e.set(n.id,n)}}return[...e.values()]}function Dc(t){let{notes:e,...r}=t;return r.children?{...r,children:r.children.map(Dc)}:r}function Oc(t){let{references:e,...r}=t;return r.children?{...r,children:r.children.map(Oc)}:r}function Mc(t){let e=new Map;for(let r of t){let n=r.references??[];for(let o of n){let i=e.get(o.archivedKey);(!i||o.referencedAt>i.referencedAt)&&e.set(o.archivedKey,o)}if(r.children)for(let o of Mc(r.children)){let i=e.get(o.archivedKey);(!i||o.referencedAt>i.referencedAt)&&e.set(o.archivedKey,o)}}return[...e.values()]}function $c(t){let e=[];for(let r of t)e.push(...r.skills??[]),r.children&&e.push(...$c(r.children));return Aa(e)}function Nc(t){let{jolliDocId:e,jolliDocUrl:r,orphanedDocIds:n,unresolvedOrphanHashes:o,...i}=t;return i.children?{...i,children:i.children.map(Nc)}:i}function Lc(t){let e=[];for(let o of t){let i=o.jolliDocUrl;if(o.jolliDocId&&i&&e.push({jolliDocId:o.jolliDocId,jolliDocUrl:i,commitDate:o.commitDate,generatedAt:o.generatedAt}),o.children){let s=Lc(o.children);s.winner&&e.push({...s.winner})}}if(e.length===0)return{winner:null,orphanedDocIds:[]};e.sort((o,i)=>new Date(q(i)).getTime()-new Date(q(o)).getTime());let r=e[0],n=e.slice(1).map(o=>o.jolliDocId);return{winner:r,orphanedDocIds:n}}function jc(t){let e=[];for(let r of t??[])r.orphanedDocIds&&e.push(...r.orphanedDocIds),e.push(...jc(r.children));return e}function Hc(t){let e=[];for(let r of t??[])r.unresolvedOrphanHashes&&e.push(...r.unresolvedOrphanHashes),e.push(...Hc(r.children));return e}function Fc(t){if(t.version>=4)return t;let e=Cc([t]),r=Ic([t]),n=_c([t]),o=Mc([t]),i=$c([t]),s=Lc([t]),a=Array.from(new Set([...s.orphanedDocIds,...t.orphanedDocIds??[],...jc(t.children)])),l=Array.from(new Set([...t.unresolvedOrphanHashes??[],...Hc(t.children)])),c=Bg(t),d=qg(t),u=t.diffStats===void 0&&t.stats!==void 0?Vt(t):void 0,{stats:m,...p}=t;return{...p,version:4,topics:c,...d!==void 0?{recap:d}:{},...u!==void 0?{diffStats:u}:{},...e.length>0?{e2eTestGuide:e}:{},...r.length>0?{plans:r}:{},...n.length>0?{notes:n}:{},...o.length>0?{references:o}:{},...i.length>0?{skills:i}:{},...s.winner?{jolliDocId:s.winner.jolliDocId,jolliDocUrl:s.winner.jolliDocUrl}:{},...a.length>0?{orphanedDocIds:a}:{},...l.length>0?{unresolvedOrphanHashes:l}:{},...t.children!==void 0?{children:t.children.map(Gg)}:{}}}function Uc(t){let{topics:e,...r}=t;return r.children?{...r,children:r.children.map(Uc)}:r}function Jc(t){let{recap:e,...r}=t;return r.children?{...r,children:r.children.map(Jc)}:r}function Bg(t){return en(t)?t.topics??[]:ht(t).map(({commitDate:e,generatedAt:r,treeIndex:n,...o})=>o)}function qg(t){return en(t)||t.recap?t.recap:Wg(t.children)}function Wg(t){if(!t||t.length===0)return;let e=[];if(Bc(t,e),e.length!==0)return e.sort((r,n)=>new Date(n.date).getTime()-new Date(r.date).getTime()),e[0]?.recap}function Bc(t,e){for(let r of t)r.recap&&e.push({recap:r.recap,date:q(r)}),r.children&&Bc(r.children,e)}function Gg(t){return Nc(Oc(Dc(Ac(Tc(Uc(Jc(t)))))))}async function si(t,e){return Vg(t,e)}async function Vg(t,e){let r=Ug(e,t),n=await r.readFile(Jg);if(!n)return ii.debug("loadIndex: no index.json in %s storage",r.kind??"unknown"),null;try{return JSON.parse(n)}catch(o){return ii.error("Failed to parse index.json: %s",o.message),null}}var Pc,ii,Jg,on=w(()=>{"use strict";y();oo();ge();Te();ei();Uo();lo();ri();rn();yt();co();oi();ii=f("SummaryStore"),Jg="index.json"});var Gc={};gs(Gc,{__test__:()=>Qg,migrateSchemaToV5:()=>zg,readSchemaV5State:()=>sn});async function sn(t,e){let n=await(e??await ti(t??process.cwd(),t)).readFile(ai);if(!n)return null;try{return JSON.parse(n)}catch(o){return le.warn("Failed to parse v5 migration state \u2014 treating as absent: %s",o.message),null}}async function Kg(t,e,r){if(!await Xn(t,{timeoutMs:qc}))throw new Error(`${e}: could not acquire orphan-write lock within ${qc}ms`);try{return await r()}finally{await Yn(t)}}async function zg(t){let e=await ti(t??process.cwd(),t),r=await sn(t,e);return r?.status==="completed"?(le.info("Schema v5 migration already completed at %s \u2014 skipping",r.completedAt),{migrated:r.migratedCount,skipped:r.skippedCount,fresh:r.fresh,alreadyDone:!0}):await e.exists()?Kg(t,"migrateSchemaToV5",()=>Yg(t,e)):(le.info("Storage backend not initialized yet \u2014 skipping schema v5 migration (no data to migrate)"),{migrated:0,skipped:0,fresh:!0,alreadyDone:!1})}async function Xg(t,e){if(e.length===0)return new Map;if(t.batchReadFiles)return t.batchReadFiles(e);let r=new Map;for(let n of e)r.set(n,await t.readFile(n));return r}async function Yg(t,e){let r=await sn(t,e);if(r?.status==="completed")return le.info("Schema v5 migration completed by a concurrent run at %s \u2014 skipping",r.completedAt),{migrated:r.migratedCount,skipped:r.skippedCount,fresh:r.fresh,alreadyDone:!0};let n=new Date().toISOString(),o=await B(["rev-parse",`refs/heads/${Z}`],t).then(G=>G.stdout.trim()).catch(()=>null),i=await e.listFiles("summaries/");le.info("Found %d summary files to inspect",i.length);let s=await e.listFiles("transcripts/"),a=new Set;for(let G of s){let ie=ni(G);ie&&a.add(ie)}le.info("Reading %d summaries...",i.length);let l=Date.now(),c=await Xg(e,i);le.info("Read %d summaries in %d ms",c.size,Date.now()-l);let d=[],u=[],m=0,p=0;for(let G of i){let ie=c.get(G);if(ie===void 0)throw new Error(`readSummaries omitted ${G} \u2014 protocol contract violation (expected one entry per request)`);if(ie===null){p++;continue}let Tt;try{Tt=JSON.parse(ie)}catch(hr){le.warn("Skipping unparseable summary %s: %s",G,hr.message),p++;continue}let It=Wc(Tt,a),At=JSON.stringify(It,null,"	");if(u.push({path:G,content:At}),It===Tt){p++;continue}d.push({path:G,content:At}),m++}let x=i.length===0,_=m===0&&p>0,D=_?u:d,k=x?"Schema v5 migration: no pre-v5 data found":_?`Schema v5 migration: re-pushing ${p} v5 summaries to heal storage shadow`:`Schema v5 migration: ${m} upgraded, ${p} skipped`,O=Date.now();if(D.length>0&&(le.info("Writing %d summary file(s) via active storage...",D.length),await e.writeFiles(D,k)),e.isDirty?.()??!1)return le.warn("Schema v5 migration: storage shadow write failed (folder marked dirty) \u2014 leaving state PENDING; next startup will retry and re-push (migrated=%d, skipped=%d, took %d ms)",m,p,Date.now()-O),{migrated:m,skipped:p,fresh:x,alreadyDone:!1};let oe={version:1,status:"completed",startedAt:n,completedAt:new Date().toISOString(),migratedCount:m,skippedCount:p,fresh:x};return await e.writeFiles([{path:ai,content:JSON.stringify(oe,null,"	")}],k),le.info("Schema v5 migration complete: %d migrated, %d skipped, fresh=%s, recovery=%s (took %d ms)",m,p,x,_,Date.now()-O),o&&le.info("Pre-migration orphan-branch SHA was %s (debug-only recovery anchor)",o),{migrated:m,skipped:p,fresh:x,alreadyDone:!1}}function Wc(t,e){if(t.version>=5&&t.transcripts!==void 0)return t;let r=Fc(t);if(r.transcripts!==void 0)return{...r,version:5};let o=Ko(r).filter(s=>e.has(s));return{...r,version:5,transcripts:o}}var le,ai,qc,Qg,li=w(()=>{"use strict";y();ge();Te();Rc();on();yt();oi();le=f("SchemaV5Migration"),ai="schema-v5-migration.json",qc=3e4;Qg={upgradeOneSummary:Wc,SCHEMA_V5_STATE_FILE:ai}});var bt=S((oC,Qc)=>{"use strict";var rh="2.0.0",nh=Number.MAX_SAFE_INTEGER||9007199254740991,oh=16,ih=250,sh=["major","premajor","minor","preminor","patch","prepatch","prerelease"];Qc.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:oh,MAX_SAFE_BUILD_LENGTH:ih,MAX_SAFE_INTEGER:nh,RELEASE_TYPES:sh,SEMVER_SPEC_VERSION:rh,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}});var Zt=S((iC,Zc)=>{"use strict";var ah=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...t)=>console.error("SEMVER",...t):()=>{};Zc.exports=ah});var kt=S((Re,eu)=>{"use strict";var{MAX_SAFE_COMPONENT_LENGTH:pi,MAX_SAFE_BUILD_LENGTH:lh,MAX_LENGTH:ch}=bt(),uh=Zt();Re=eu.exports={};var dh=Re.re=[],fh=Re.safeRe=[],g=Re.src=[],ph=Re.safeSrc=[],h=Re.t={},mh=0,mi="[a-zA-Z0-9-]",gh=[["\\s",1],["\\d",ch],[mi,lh]],hh=t=>{for(let[e,r]of gh)t=t.split(`${e}*`).join(`${e}{0,${r}}`).split(`${e}+`).join(`${e}{1,${r}}`);return t},v=(t,e,r)=>{let n=hh(e),o=mh++;uh(t,o,e),h[t]=o,g[o]=e,ph[o]=n,dh[o]=new RegExp(e,r?"g":void 0),fh[o]=new RegExp(n,r?"g":void 0)};v("NUMERICIDENTIFIER","0|[1-9]\\d*");v("NUMERICIDENTIFIERLOOSE","\\d+");v("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${mi}*`);v("MAINVERSION",`(${g[h.NUMERICIDENTIFIER]})\\.(${g[h.NUMERICIDENTIFIER]})\\.(${g[h.NUMERICIDENTIFIER]})`);v("MAINVERSIONLOOSE",`(${g[h.NUMERICIDENTIFIERLOOSE]})\\.(${g[h.NUMERICIDENTIFIERLOOSE]})\\.(${g[h.NUMERICIDENTIFIERLOOSE]})`);v("PRERELEASEIDENTIFIER",`(?:${g[h.NONNUMERICIDENTIFIER]}|${g[h.NUMERICIDENTIFIER]})`);v("PRERELEASEIDENTIFIERLOOSE",`(?:${g[h.NONNUMERICIDENTIFIER]}|${g[h.NUMERICIDENTIFIERLOOSE]})`);v("PRERELEASE",`(?:-(${g[h.PRERELEASEIDENTIFIER]}(?:\\.${g[h.PRERELEASEIDENTIFIER]})*))`);v("PRERELEASELOOSE",`(?:-?(${g[h.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${g[h.PRERELEASEIDENTIFIERLOOSE]})*))`);v("BUILDIDENTIFIER",`${mi}+`);v("BUILD",`(?:\\+(${g[h.BUILDIDENTIFIER]}(?:\\.${g[h.BUILDIDENTIFIER]})*))`);v("FULLPLAIN",`v?${g[h.MAINVERSION]}${g[h.PRERELEASE]}?${g[h.BUILD]}?`);v("FULL",`^${g[h.FULLPLAIN]}$`);v("LOOSEPLAIN",`[v=\\s]*${g[h.MAINVERSIONLOOSE]}${g[h.PRERELEASELOOSE]}?${g[h.BUILD]}?`);v("LOOSE",`^${g[h.LOOSEPLAIN]}$`);v("GTLT","((?:<|>)?=?)");v("XRANGEIDENTIFIERLOOSE",`${g[h.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);v("XRANGEIDENTIFIER",`${g[h.NUMERICIDENTIFIER]}|x|X|\\*`);v("XRANGEPLAIN",`[v=\\s]*(${g[h.XRANGEIDENTIFIER]})(?:\\.(${g[h.XRANGEIDENTIFIER]})(?:\\.(${g[h.XRANGEIDENTIFIER]})(?:${g[h.PRERELEASE]})?${g[h.BUILD]}?)?)?`);v("XRANGEPLAINLOOSE",`[v=\\s]*(${g[h.XRANGEIDENTIFIERLOOSE]})(?:\\.(${g[h.XRANGEIDENTIFIERLOOSE]})(?:\\.(${g[h.XRANGEIDENTIFIERLOOSE]})(?:${g[h.PRERELEASELOOSE]})?${g[h.BUILD]}?)?)?`);v("XRANGE",`^${g[h.GTLT]}\\s*${g[h.XRANGEPLAIN]}$`);v("XRANGELOOSE",`^${g[h.GTLT]}\\s*${g[h.XRANGEPLAINLOOSE]}$`);v("COERCEPLAIN",`(^|[^\\d])(\\d{1,${pi}})(?:\\.(\\d{1,${pi}}))?(?:\\.(\\d{1,${pi}}))?`);v("COERCE",`${g[h.COERCEPLAIN]}(?:$|[^\\d])`);v("COERCEFULL",g[h.COERCEPLAIN]+`(?:${g[h.PRERELEASE]})?(?:${g[h.BUILD]})?(?:$|[^\\d])`);v("COERCERTL",g[h.COERCE],!0);v("COERCERTLFULL",g[h.COERCEFULL],!0);v("LONETILDE","(?:~>?)");v("TILDETRIM",`(\\s*)${g[h.LONETILDE]}\\s+`,!0);Re.tildeTrimReplace="$1~";v("TILDE",`^${g[h.LONETILDE]}${g[h.XRANGEPLAIN]}$`);v("TILDELOOSE",`^${g[h.LONETILDE]}${g[h.XRANGEPLAINLOOSE]}$`);v("LONECARET","(?:\\^)");v("CARETTRIM",`(\\s*)${g[h.LONECARET]}\\s+`,!0);Re.caretTrimReplace="$1^";v("CARET",`^${g[h.LONECARET]}${g[h.XRANGEPLAIN]}$`);v("CARETLOOSE",`^${g[h.LONECARET]}${g[h.XRANGEPLAINLOOSE]}$`);v("COMPARATORLOOSE",`^${g[h.GTLT]}\\s*(${g[h.LOOSEPLAIN]})$|^$`);v("COMPARATOR",`^${g[h.GTLT]}\\s*(${g[h.FULLPLAIN]})$|^$`);v("COMPARATORTRIM",`(\\s*)${g[h.GTLT]}\\s*(${g[h.LOOSEPLAIN]}|${g[h.XRANGEPLAIN]})`,!0);Re.comparatorTrimReplace="$1$2$3";v("HYPHENRANGE",`^\\s*(${g[h.XRANGEPLAIN]})\\s+-\\s+(${g[h.XRANGEPLAIN]})\\s*$`);v("HYPHENRANGELOOSE",`^\\s*(${g[h.XRANGEPLAINLOOSE]})\\s+-\\s+(${g[h.XRANGEPLAINLOOSE]})\\s*$`);v("STAR","(<|>)?=?\\s*\\*");v("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$");v("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")});var fn=S((sC,tu)=>{"use strict";var yh=Object.freeze({loose:!0}),wh=Object.freeze({}),Sh=t=>t?typeof t!="object"?yh:t:wh;tu.exports=Sh});var gi=S((aC,ou)=>{"use strict";var ru=/^[0-9]+$/,nu=(t,e)=>{if(typeof t=="number"&&typeof e=="number")return t===e?0:t<e?-1:1;let r=ru.test(t),n=ru.test(e);return r&&n&&(t=+t,e=+e),t===e?0:r&&!n?-1:n&&!r?1:t<e?-1:1},bh=(t,e)=>nu(e,t);ou.exports={compareIdentifiers:nu,rcompareIdentifiers:bh}});var F=S((lC,su)=>{"use strict";var pn=Zt(),{MAX_LENGTH:iu,MAX_SAFE_INTEGER:mn}=bt(),{safeRe:gn,t:hn}=kt(),kh=fn(),{compareIdentifiers:hi}=gi(),yi=class t{constructor(e,r){if(r=kh(r),e instanceof t){if(e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease)return e;e=e.version}else if(typeof e!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);if(e.length>iu)throw new TypeError(`version is longer than ${iu} characters`);pn("SemVer",e,r),this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease;let n=e.trim().match(r.loose?gn[hn.LOOSE]:gn[hn.FULL]);if(!n)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+n[1],this.minor=+n[2],this.patch=+n[3],this.major>mn||this.major<0)throw new TypeError("Invalid major version");if(this.minor>mn||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>mn||this.patch<0)throw new TypeError("Invalid patch version");n[4]?this.prerelease=n[4].split(".").map(o=>{if(/^[0-9]+$/.test(o)){let i=+o;if(i>=0&&i<mn)return i}return o}):this.prerelease=[],this.build=n[5]?n[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(pn("SemVer.compare",this.version,this.options,e),!(e instanceof t)){if(typeof e=="string"&&e===this.version)return 0;e=new t(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof t||(e=new t(e,this.options)),this.major<e.major?-1:this.major>e.major?1:this.minor<e.minor?-1:this.minor>e.minor?1:this.patch<e.patch?-1:this.patch>e.patch?1:0}comparePre(e){if(e instanceof t||(e=new t(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let r=0;do{let n=this.prerelease[r],o=e.prerelease[r];if(pn("prerelease compare",r,n,o),n===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(n===void 0)return-1;if(n===o)continue;return hi(n,o)}while(++r)}compareBuild(e){e instanceof t||(e=new t(e,this.options));let r=0;do{let n=this.build[r],o=e.build[r];if(pn("build compare",r,n,o),n===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(n===void 0)return-1;if(n===o)continue;return hi(n,o)}while(++r)}inc(e,r,n){if(e.startsWith("pre")){if(!r&&n===!1)throw new Error("invalid increment argument: identifier is empty");if(r){let o=`-${r}`.match(this.options.loose?gn[hn.PRERELEASELOOSE]:gn[hn.PRERELEASE]);if(!o||o[1]!==r)throw new Error(`invalid identifier: ${r}`)}}switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r,n);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r,n);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r,n),this.inc("pre",r,n);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",r,n),this.inc("pre",r,n);break;case"release":if(this.prerelease.length===0)throw new Error(`version ${this.raw} is not a prerelease`);this.prerelease.length=0;break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{let o=Number(n)?1:0;if(this.prerelease.length===0)this.prerelease=[o];else{let i=this.prerelease.length;for(;--i>=0;)typeof this.prerelease[i]=="number"&&(this.prerelease[i]++,i=-2);if(i===-1){if(r===this.prerelease.join(".")&&n===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(o)}}if(r){let i=[r,o];n===!1&&(i=[r]),hi(this.prerelease[0],r)===0?isNaN(this.prerelease[1])&&(this.prerelease=i):this.prerelease=i}break}default:throw new Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};su.exports=yi});var Ke=S((cC,lu)=>{"use strict";var au=F(),Eh=(t,e,r=!1)=>{if(t instanceof au)return t;try{return new au(t,e)}catch(n){if(!r)return null;throw n}};lu.exports=Eh});var uu=S((uC,cu)=>{"use strict";var vh=Ke(),Rh=(t,e)=>{let r=vh(t,e);return r?r.version:null};cu.exports=Rh});var fu=S((dC,du)=>{"use strict";var xh=Ke(),Ph=(t,e)=>{let r=xh(t.trim().replace(/^[=v]+/,""),e);return r?r.version:null};du.exports=Ph});var gu=S((fC,mu)=>{"use strict";var pu=F(),Ch=(t,e,r,n,o)=>{typeof r=="string"&&(o=n,n=r,r=void 0);try{return new pu(t instanceof pu?t.version:t,r).inc(e,n,o).version}catch{return null}};mu.exports=Ch});var wu=S((pC,yu)=>{"use strict";var hu=Ke(),Th=(t,e)=>{let r=hu(t,null,!0),n=hu(e,null,!0),o=r.compare(n);if(o===0)return null;let i=o>0,s=i?r:n,a=i?n:r,l=!!s.prerelease.length;if(!!a.prerelease.length&&!l){if(!a.patch&&!a.minor)return"major";if(a.compareMain(s)===0)return a.minor&&!a.patch?"minor":"patch"}let d=l?"pre":"";return r.major!==n.major?d+"major":r.minor!==n.minor?d+"minor":r.patch!==n.patch?d+"patch":"prerelease"};yu.exports=Th});var bu=S((mC,Su)=>{"use strict";var Ih=F(),Ah=(t,e)=>new Ih(t,e).major;Su.exports=Ah});var Eu=S((gC,ku)=>{"use strict";var _h=F(),Dh=(t,e)=>new _h(t,e).minor;ku.exports=Dh});var Ru=S((hC,vu)=>{"use strict";var Oh=F(),Mh=(t,e)=>new Oh(t,e).patch;vu.exports=Mh});var Pu=S((yC,xu)=>{"use strict";var $h=Ke(),Nh=(t,e)=>{let r=$h(t,e);return r&&r.prerelease.length?r.prerelease:null};xu.exports=Nh});var ce=S((wC,Tu)=>{"use strict";var Cu=F(),Lh=(t,e,r)=>new Cu(t,r).compare(new Cu(e,r));Tu.exports=Lh});var Au=S((SC,Iu)=>{"use strict";var jh=ce(),Hh=(t,e,r)=>jh(e,t,r);Iu.exports=Hh});var Du=S((bC,_u)=>{"use strict";var Fh=ce(),Uh=(t,e)=>Fh(t,e,!0);_u.exports=Uh});var yn=S((kC,Mu)=>{"use strict";var Ou=F(),Jh=(t,e,r)=>{let n=new Ou(t,r),o=new Ou(e,r);return n.compare(o)||n.compareBuild(o)};Mu.exports=Jh});var Nu=S((EC,$u)=>{"use strict";var Bh=yn(),qh=(t,e)=>t.sort((r,n)=>Bh(r,n,e));$u.exports=qh});var ju=S((vC,Lu)=>{"use strict";var Wh=yn(),Gh=(t,e)=>t.sort((r,n)=>Wh(n,r,e));Lu.exports=Gh});var er=S((RC,Hu)=>{"use strict";var Vh=ce(),Kh=(t,e,r)=>Vh(t,e,r)>0;Hu.exports=Kh});var wn=S((xC,Fu)=>{"use strict";var zh=ce(),Xh=(t,e,r)=>zh(t,e,r)<0;Fu.exports=Xh});var wi=S((PC,Uu)=>{"use strict";var Yh=ce(),Qh=(t,e,r)=>Yh(t,e,r)===0;Uu.exports=Qh});var Si=S((CC,Ju)=>{"use strict";var Zh=ce(),ey=(t,e,r)=>Zh(t,e,r)!==0;Ju.exports=ey});var Sn=S((TC,Bu)=>{"use strict";var ty=ce(),ry=(t,e,r)=>ty(t,e,r)>=0;Bu.exports=ry});var bn=S((IC,qu)=>{"use strict";var ny=ce(),oy=(t,e,r)=>ny(t,e,r)<=0;qu.exports=oy});var bi=S((AC,Wu)=>{"use strict";var iy=wi(),sy=Si(),ay=er(),ly=Sn(),cy=wn(),uy=bn(),dy=(t,e,r,n)=>{switch(e){case"===":return typeof t=="object"&&(t=t.version),typeof r=="object"&&(r=r.version),t===r;case"!==":return typeof t=="object"&&(t=t.version),typeof r=="object"&&(r=r.version),t!==r;case"":case"=":case"==":return iy(t,r,n);case"!=":return sy(t,r,n);case">":return ay(t,r,n);case">=":return ly(t,r,n);case"<":return cy(t,r,n);case"<=":return uy(t,r,n);default:throw new TypeError(`Invalid operator: ${e}`)}};Wu.exports=dy});var Vu=S((_C,Gu)=>{"use strict";var fy=F(),py=Ke(),{safeRe:kn,t:En}=kt(),my=(t,e)=>{if(t instanceof fy)return t;if(typeof t=="number"&&(t=String(t)),typeof t!="string")return null;e=e||{};let r=null;if(!e.rtl)r=t.match(e.includePrerelease?kn[En.COERCEFULL]:kn[En.COERCE]);else{let l=e.includePrerelease?kn[En.COERCERTLFULL]:kn[En.COERCERTL],c;for(;(c=l.exec(t))&&(!r||r.index+r[0].length!==t.length);)(!r||c.index+c[0].length!==r.index+r[0].length)&&(r=c),l.lastIndex=c.index+c[1].length+c[2].length;l.lastIndex=-1}if(r===null)return null;let n=r[2],o=r[3]||"0",i=r[4]||"0",s=e.includePrerelease&&r[5]?`-${r[5]}`:"",a=e.includePrerelease&&r[6]?`+${r[6]}`:"";return py(`${n}.${o}.${i}${s}${a}`,e)};Gu.exports=my});var zu=S((DC,Ku)=>{"use strict";var gy=Ke(),hy=bt(),yy=F(),wy=(t,e,r)=>{if(!hy.RELEASE_TYPES.includes(e))return null;let n=Sy(t,r);return n&&by(n,e)},Sy=(t,e)=>{let r=t instanceof yy?t.version:t;return gy(r,e)},by=(t,e)=>{if(ky(e))return t.version;switch(t.prerelease=[],e){case"major":t.minor=0,t.patch=0;break;case"minor":t.patch=0;break}return t.format()},ky=t=>t.startsWith("pre");Ku.exports=wy});var Yu=S((OC,Xu)=>{"use strict";var ki=class{constructor(){this.max=1e3,this.map=new Map}get(e){let r=this.map.get(e);if(r!==void 0)return this.map.delete(e),this.map.set(e,r),r}delete(e){return this.map.delete(e)}set(e,r){if(!this.delete(e)&&r!==void 0){if(this.map.size>=this.max){let o=this.map.keys().next().value;this.delete(o)}this.map.set(e,r)}return this}};Xu.exports=ki});var ue=S((MC,td)=>{"use strict";var Ey=/\s+/g,Ei=class t{constructor(e,r){if(r=Ry(r),e instanceof t)return e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease?e:new t(e.raw,r);if(e instanceof vi)return this.raw=e.value,this.set=[[e]],this.formatted=void 0,this;if(this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease,this.raw=e.trim().replace(Ey," "),this.set=this.raw.split("||").map(n=>this.parseRange(n.trim())).filter(n=>n.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){let n=this.set[0];if(this.set=this.set.filter(o=>!Zu(o[0])),this.set.length===0)this.set=[n];else if(this.set.length>1){for(let o of this.set)if(o.length===1&&Oy(o[0])){this.set=[o];break}}}this.formatted=void 0}get range(){if(this.formatted===void 0){this.formatted="";for(let e=0;e<this.set.length;e++){e>0&&(this.formatted+="||");let r=this.set[e];for(let n=0;n<r.length;n++)n>0&&(this.formatted+=" "),this.formatted+=r[n].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(e){e=e.replace(Dy,"");let n=((this.options.includePrerelease&&Ay)|(this.options.loose&&_y))+":"+e,o=Qu.get(n);if(o)return o;let i=this.options.loose,s=i?K[U.HYPHENRANGELOOSE]:K[U.HYPHENRANGE];e=e.replace(s,By(this.options.includePrerelease)),A("hyphen replace",e),e=e.replace(K[U.COMPARATORTRIM],Cy),A("comparator trim",e),e=e.replace(K[U.TILDETRIM],Ty),A("tilde trim",e),e=e.replace(K[U.CARETTRIM],Iy),A("caret trim",e);let a=e.split(" ").map(u=>My(u,this.options)).join(" ").split(/\s+/).map(u=>Jy(u,this.options));i&&(a=a.filter(u=>(A("loose invalid filter",u,this.options),!!u.match(K[U.COMPARATORLOOSE])))),A("range list",a);let l=new Map,c=a.map(u=>new vi(u,this.options));for(let u of c){if(Zu(u))return[u];l.set(u.value,u)}l.size>1&&l.has("")&&l.delete("");let d=[...l.values()];return Qu.set(n,d),d}intersects(e,r){if(!(e instanceof t))throw new TypeError("a Range is required");return this.set.some(n=>ed(n,r)&&e.set.some(o=>ed(o,r)&&n.every(i=>o.every(s=>i.intersects(s,r)))))}test(e){if(!e)return!1;if(typeof e=="string")try{e=new xy(e,this.options)}catch{return!1}for(let r=0;r<this.set.length;r++)if(qy(this.set[r],e,this.options))return!0;return!1}};td.exports=Ei;var vy=Yu(),Qu=new vy,Ry=fn(),vi=tr(),A=Zt(),xy=F(),{safeRe:K,src:Py,t:U,comparatorTrimReplace:Cy,tildeTrimReplace:Ty,caretTrimReplace:Iy}=kt(),{FLAG_INCLUDE_PRERELEASE:Ay,FLAG_LOOSE:_y}=bt(),Dy=new RegExp(Py[U.BUILD],"g"),Zu=t=>t.value==="<0.0.0-0",Oy=t=>t.value==="",ed=(t,e)=>{let r=!0,n=t.slice(),o=n.pop();for(;r&&n.length;)r=n.every(i=>o.intersects(i,e)),o=n.pop();return r},My=(t,e)=>(t=t.replace(K[U.BUILD],""),A("comp",t,e),t=Ly(t,e),A("caret",t),t=$y(t,e),A("tildes",t),t=Hy(t,e),A("xrange",t),t=Uy(t,e),A("stars",t),t),z=t=>!t||t.toLowerCase()==="x"||t==="*",$y=(t,e)=>t.trim().split(/\s+/).map(r=>Ny(r,e)).join(" "),Ny=(t,e)=>{let r=e.loose?K[U.TILDELOOSE]:K[U.TILDE];return t.replace(r,(n,o,i,s,a)=>{A("tilde",t,n,o,i,s,a);let l;return z(o)?l="":z(i)?l=`>=${o}.0.0 <${+o+1}.0.0-0`:z(s)?l=`>=${o}.${i}.0 <${o}.${+i+1}.0-0`:a?(A("replaceTilde pr",a),l=`>=${o}.${i}.${s}-${a} <${o}.${+i+1}.0-0`):l=`>=${o}.${i}.${s} <${o}.${+i+1}.0-0`,A("tilde return",l),l})},Ly=(t,e)=>t.trim().split(/\s+/).map(r=>jy(r,e)).join(" "),jy=(t,e)=>{A("caret",t,e);let r=e.loose?K[U.CARETLOOSE]:K[U.CARET],n=e.includePrerelease?"-0":"";return t.replace(r,(o,i,s,a,l)=>{A("caret",t,o,i,s,a,l);let c;return z(i)?c="":z(s)?c=`>=${i}.0.0${n} <${+i+1}.0.0-0`:z(a)?i==="0"?c=`>=${i}.${s}.0${n} <${i}.${+s+1}.0-0`:c=`>=${i}.${s}.0${n} <${+i+1}.0.0-0`:l?(A("replaceCaret pr",l),i==="0"?s==="0"?c=`>=${i}.${s}.${a}-${l} <${i}.${s}.${+a+1}-0`:c=`>=${i}.${s}.${a}-${l} <${i}.${+s+1}.0-0`:c=`>=${i}.${s}.${a}-${l} <${+i+1}.0.0-0`):(A("no pr"),i==="0"?s==="0"?c=`>=${i}.${s}.${a}${n} <${i}.${s}.${+a+1}-0`:c=`>=${i}.${s}.${a}${n} <${i}.${+s+1}.0-0`:c=`>=${i}.${s}.${a} <${+i+1}.0.0-0`),A("caret return",c),c})},Hy=(t,e)=>(A("replaceXRanges",t,e),t.split(/\s+/).map(r=>Fy(r,e)).join(" ")),Fy=(t,e)=>{t=t.trim();let r=e.loose?K[U.XRANGELOOSE]:K[U.XRANGE];return t.replace(r,(n,o,i,s,a,l)=>{A("xRange",t,n,o,i,s,a,l);let c=z(i),d=c||z(s),u=d||z(a),m=u;return o==="="&&m&&(o=""),l=e.includePrerelease?"-0":"",c?o===">"||o==="<"?n="<0.0.0-0":n="*":o&&m?(d&&(s=0),a=0,o===">"?(o=">=",d?(i=+i+1,s=0,a=0):(s=+s+1,a=0)):o==="<="&&(o="<",d?i=+i+1:s=+s+1),o==="<"&&(l="-0"),n=`${o+i}.${s}.${a}${l}`):d?n=`>=${i}.0.0${l} <${+i+1}.0.0-0`:u&&(n=`>=${i}.${s}.0${l} <${i}.${+s+1}.0-0`),A("xRange return",n),n})},Uy=(t,e)=>(A("replaceStars",t,e),t.trim().replace(K[U.STAR],"")),Jy=(t,e)=>(A("replaceGTE0",t,e),t.trim().replace(K[e.includePrerelease?U.GTE0PRE:U.GTE0],"")),By=t=>(e,r,n,o,i,s,a,l,c,d,u,m)=>(z(n)?r="":z(o)?r=`>=${n}.0.0${t?"-0":""}`:z(i)?r=`>=${n}.${o}.0${t?"-0":""}`:s?r=`>=${r}`:r=`>=${r}${t?"-0":""}`,z(c)?l="":z(d)?l=`<${+c+1}.0.0-0`:z(u)?l=`<${c}.${+d+1}.0-0`:m?l=`<=${c}.${d}.${u}-${m}`:t?l=`<${c}.${d}.${+u+1}-0`:l=`<=${l}`,`${r} ${l}`.trim()),qy=(t,e,r)=>{for(let n=0;n<t.length;n++)if(!t[n].test(e))return!1;if(e.prerelease.length&&!r.includePrerelease){for(let n=0;n<t.length;n++)if(A(t[n].semver),t[n].semver!==vi.ANY&&t[n].semver.prerelease.length>0){let o=t[n].semver;if(o.major===e.major&&o.minor===e.minor&&o.patch===e.patch)return!0}return!1}return!0}});var tr=S(($C,ad)=>{"use strict";var rr=Symbol("SemVer ANY"),Pi=class t{static get ANY(){return rr}constructor(e,r){if(r=rd(r),e instanceof t){if(e.loose===!!r.loose)return e;e=e.value}e=e.trim().split(/\s+/).join(" "),xi("comparator",e,r),this.options=r,this.loose=!!r.loose,this.parse(e),this.semver===rr?this.value="":this.value=this.operator+this.semver.version,xi("comp",this)}parse(e){let r=this.options.loose?nd[od.COMPARATORLOOSE]:nd[od.COMPARATOR],n=e.match(r);if(!n)throw new TypeError(`Invalid comparator: ${e}`);this.operator=n[1]!==void 0?n[1]:"",this.operator==="="&&(this.operator=""),n[2]?this.semver=new id(n[2],this.options.loose):this.semver=rr}toString(){return this.value}test(e){if(xi("Comparator.test",e,this.options.loose),this.semver===rr||e===rr)return!0;if(typeof e=="string")try{e=new id(e,this.options)}catch{return!1}return Ri(e,this.operator,this.semver,this.options)}intersects(e,r){if(!(e instanceof t))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new sd(e.value,r).test(this.value):e.operator===""?e.value===""?!0:new sd(this.value,r).test(e.semver):(r=rd(r),r.includePrerelease&&(this.value==="<0.0.0-0"||e.value==="<0.0.0-0")||!r.includePrerelease&&(this.value.startsWith("<0.0.0")||e.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&e.operator.startsWith(">")||this.operator.startsWith("<")&&e.operator.startsWith("<")||this.semver.version===e.semver.version&&this.operator.includes("=")&&e.operator.includes("=")||Ri(this.semver,"<",e.semver,r)&&this.operator.startsWith(">")&&e.operator.startsWith("<")||Ri(this.semver,">",e.semver,r)&&this.operator.startsWith("<")&&e.operator.startsWith(">")))}};ad.exports=Pi;var rd=fn(),{safeRe:nd,t:od}=kt(),Ri=bi(),xi=Zt(),id=F(),sd=ue()});var nr=S((NC,ld)=>{"use strict";var Wy=ue(),Gy=(t,e,r)=>{try{e=new Wy(e,r)}catch{return!1}return e.test(t)};ld.exports=Gy});var ud=S((LC,cd)=>{"use strict";var Vy=ue(),Ky=(t,e)=>new Vy(t,e).set.map(r=>r.map(n=>n.value).join(" ").trim().split(" "));cd.exports=Ky});var fd=S((jC,dd)=>{"use strict";var zy=F(),Xy=ue(),Yy=(t,e,r)=>{let n=null,o=null,i=null;try{i=new Xy(e,r)}catch{return null}return t.forEach(s=>{i.test(s)&&(!n||o.compare(s)===-1)&&(n=s,o=new zy(n,r))}),n};dd.exports=Yy});var md=S((HC,pd)=>{"use strict";var Qy=F(),Zy=ue(),ew=(t,e,r)=>{let n=null,o=null,i=null;try{i=new Zy(e,r)}catch{return null}return t.forEach(s=>{i.test(s)&&(!n||o.compare(s)===1)&&(n=s,o=new Qy(n,r))}),n};pd.exports=ew});var yd=S((FC,hd)=>{"use strict";var Ci=F(),tw=ue(),gd=er(),rw=(t,e)=>{t=new tw(t,e);let r=new Ci("0.0.0");if(t.test(r)||(r=new Ci("0.0.0-0"),t.test(r)))return r;r=null;for(let n=0;n<t.set.length;++n){let o=t.set[n],i=null;o.forEach(s=>{let a=new Ci(s.semver.version);switch(s.operator){case">":a.prerelease.length===0?a.patch++:a.prerelease.push(0),a.raw=a.format();case"":case">=":(!i||gd(a,i))&&(i=a);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${s.operator}`)}}),i&&(!r||gd(r,i))&&(r=i)}return r&&t.test(r)?r:null};hd.exports=rw});var Sd=S((UC,wd)=>{"use strict";var nw=ue(),ow=(t,e)=>{try{return new nw(t,e).range||"*"}catch{return null}};wd.exports=ow});var vn=S((JC,vd)=>{"use strict";var iw=F(),Ed=tr(),{ANY:sw}=Ed,aw=ue(),lw=nr(),bd=er(),kd=wn(),cw=bn(),uw=Sn(),dw=(t,e,r,n)=>{t=new iw(t,n),e=new aw(e,n);let o,i,s,a,l;switch(r){case">":o=bd,i=cw,s=kd,a=">",l=">=";break;case"<":o=kd,i=uw,s=bd,a="<",l="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(lw(t,e,n))return!1;for(let c=0;c<e.set.length;++c){let d=e.set[c],u=null,m=null;if(d.forEach(p=>{p.semver===sw&&(p=new Ed(">=0.0.0")),u=u||p,m=m||p,o(p.semver,u.semver,n)?u=p:s(p.semver,m.semver,n)&&(m=p)}),u.operator===a||u.operator===l||(!m.operator||m.operator===a)&&i(t,m.semver))return!1;if(m.operator===l&&s(t,m.semver))return!1}return!0};vd.exports=dw});var xd=S((BC,Rd)=>{"use strict";var fw=vn(),pw=(t,e,r)=>fw(t,e,">",r);Rd.exports=pw});var Cd=S((qC,Pd)=>{"use strict";var mw=vn(),gw=(t,e,r)=>mw(t,e,"<",r);Pd.exports=gw});var Ad=S((WC,Id)=>{"use strict";var Td=ue(),hw=(t,e,r)=>(t=new Td(t,r),e=new Td(e,r),t.intersects(e,r));Id.exports=hw});var Dd=S((GC,_d)=>{"use strict";var yw=nr(),ww=ce();_d.exports=(t,e,r)=>{let n=[],o=null,i=null,s=t.sort((d,u)=>ww(d,u,r));for(let d of s)yw(d,e,r)?(i=d,o||(o=d)):(i&&n.push([o,i]),i=null,o=null);o&&n.push([o,null]);let a=[];for(let[d,u]of n)d===u?a.push(d):!u&&d===s[0]?a.push("*"):u?d===s[0]?a.push(`<=${u}`):a.push(`${d} - ${u}`):a.push(`>=${d}`);let l=a.join(" || "),c=typeof e.raw=="string"?e.raw:String(e);return l.length<c.length?l:e}});var jd=S((VC,Ld)=>{"use strict";var Od=ue(),Ai=tr(),{ANY:Ti}=Ai,Ii=nr(),_i=ce(),Sw=(t,e,r={})=>{if(t===e)return!0;t=new Od(t,r),e=new Od(e,r);let n=!1;e:for(let o of t.set){for(let i of e.set){let s=kw(o,i,r);if(n=n||s!==null,s)continue e}if(n)return!1}return!0},bw=[new Ai(">=0.0.0-0")],Md=[new Ai(">=0.0.0")],kw=(t,e,r)=>{if(t===e)return!0;if(t.length===1&&t[0].semver===Ti){if(e.length===1&&e[0].semver===Ti)return!0;r.includePrerelease?t=bw:t=Md}if(e.length===1&&e[0].semver===Ti){if(r.includePrerelease)return!0;e=Md}let n=new Set,o,i;for(let p of t)p.operator===">"||p.operator===">="?o=$d(o,p,r):p.operator==="<"||p.operator==="<="?i=Nd(i,p,r):n.add(p.semver);if(n.size>1)return null;let s;if(o&&i){if(s=_i(o.semver,i.semver,r),s>0)return null;if(s===0&&(o.operator!==">="||i.operator!=="<="))return null}for(let p of n){if(o&&!Ii(p,String(o),r)||i&&!Ii(p,String(i),r))return null;for(let x of e)if(!Ii(p,String(x),r))return!1;return!0}let a,l,c,d,u=i&&!r.includePrerelease&&i.semver.prerelease.length?i.semver:!1,m=o&&!r.includePrerelease&&o.semver.prerelease.length?o.semver:!1;u&&u.prerelease.length===1&&i.operator==="<"&&u.prerelease[0]===0&&(u=!1);for(let p of e){if(d=d||p.operator===">"||p.operator===">=",c=c||p.operator==="<"||p.operator==="<=",o){if(m&&p.semver.prerelease&&p.semver.prerelease.length&&p.semver.major===m.major&&p.semver.minor===m.minor&&p.semver.patch===m.patch&&(m=!1),p.operator===">"||p.operator===">="){if(a=$d(o,p,r),a===p&&a!==o)return!1}else if(o.operator===">="&&!p.test(o.semver))return!1}if(i){if(u&&p.semver.prerelease&&p.semver.prerelease.length&&p.semver.major===u.major&&p.semver.minor===u.minor&&p.semver.patch===u.patch&&(u=!1),p.operator==="<"||p.operator==="<="){if(l=Nd(i,p,r),l===p&&l!==i)return!1}else if(i.operator==="<="&&!p.test(i.semver))return!1}if(!p.operator&&(i||o)&&s!==0)return!1}return!(o&&c&&!i&&s!==0||i&&d&&!o&&s!==0||m||u)},$d=(t,e,r)=>{if(!t)return e;let n=_i(t.semver,e.semver,r);return n>0?t:n<0||e.operator===">"&&t.operator===">="?e:t},Nd=(t,e,r)=>{if(!t)return e;let n=_i(t.semver,e.semver,r);return n<0?t:n>0||e.operator==="<"&&t.operator==="<="?e:t};Ld.exports=Sw});var Jd=S((KC,Ud)=>{"use strict";var Di=kt(),Hd=bt(),Ew=F(),Fd=gi(),vw=Ke(),Rw=uu(),xw=fu(),Pw=gu(),Cw=wu(),Tw=bu(),Iw=Eu(),Aw=Ru(),_w=Pu(),Dw=ce(),Ow=Au(),Mw=Du(),$w=yn(),Nw=Nu(),Lw=ju(),jw=er(),Hw=wn(),Fw=wi(),Uw=Si(),Jw=Sn(),Bw=bn(),qw=bi(),Ww=Vu(),Gw=zu(),Vw=tr(),Kw=ue(),zw=nr(),Xw=ud(),Yw=fd(),Qw=md(),Zw=yd(),eS=Sd(),tS=vn(),rS=xd(),nS=Cd(),oS=Ad(),iS=Dd(),sS=jd();Ud.exports={parse:vw,valid:Rw,clean:xw,inc:Pw,diff:Cw,major:Tw,minor:Iw,patch:Aw,prerelease:_w,compare:Dw,rcompare:Ow,compareLoose:Mw,compareBuild:$w,sort:Nw,rsort:Lw,gt:jw,lt:Hw,eq:Fw,neq:Uw,gte:Jw,lte:Bw,cmp:qw,coerce:Ww,truncate:Gw,Comparator:Vw,Range:Kw,satisfies:zw,toComparators:Xw,maxSatisfying:Yw,minSatisfying:Qw,minVersion:Zw,validRange:eS,outside:tS,gtr:rS,ltr:nS,intersects:oS,simplifyRange:iS,subset:sS,SemVer:Ew,re:Di.re,src:Di.src,tokens:Di.t,SEMVER_SPEC_VERSION:Hd.SEMVER_SPEC_VERSION,RELEASE_TYPES:Hd.RELEASE_TYPES,compareIdentifiers:Fd.compareIdentifiers,rcompareIdentifiers:Fd.rcompareIdentifiers}});var gb={};gs(gb,{buildCodexBootstrapOutput:()=>cp,main:()=>dp,runCodexPluginBootstrap:()=>up});module.exports=Sp(gb);var gr=require("node:path"),lp=require("node:url");var vr=require("node:fs");var ys=require("node:path"),bp="JOLLI_LOCAL_AGENT_CHILD",kp=".jolli-local-agent-child";function Rr(t=process.env,e){return t[bp]==="1"?!0:e!==void 0&&(0,vr.existsSync)((0,ys.join)(e,kp))}ge();Te();var ae=require("node:fs/promises"),he=require("node:path");y();Ce();ge();Te();var Ws="profile.json",nm="jollimemory",om="backfill-card-dismissed",im="disabled-by-user";async function Gs(t){let e=await B(["rev-parse","--git-common-dir"],t),r=e.exitCode===0?e.stdout.trim():"";if(!r)return{profilePath:(0,he.join)(J(t),Ws),legacyMarkerPath:null};let n=(0,he.isAbsolute)(r)?r:(0,he.join)(t,r),o=(0,he.dirname)(n);return{profilePath:(0,he.join)(J(o),Ws),legacyMarkerPath:(0,he.join)(n,nm,om)}}async function ro(t){try{let e=await(0,ae.readFile)(t,"utf-8"),r=JSON.parse(e);return r&&typeof r=="object"&&!Array.isArray(r)?r:{}}catch{return{}}}async function sm(t){try{return await(0,ae.stat)(t),!0}catch{return!1}}async function Vs(t,e){await(0,ae.mkdir)((0,he.dirname)(t),{recursive:!0});let r=`${t}.${process.pid}.tmp`;await(0,ae.writeFile)(r,`${JSON.stringify(e,null,"	")}
`);try{await(0,ae.rename)(r,t)}catch(n){throw await(0,ae.unlink)(r).catch(()=>{}),n}}async function am(t,e){let{profilePath:r}=await Gs(t);if(!(await eo(t,async()=>{let o=await ro(r);await Vs(r,{...o,...e})})).acquired)throw new Error("Timed out acquiring the repo profile lock")}async function lm(t){let e;try{e=await ct(t)}catch{e=[t]}for(let r of e)if(await sm((0,he.join)(J(r),im)))return!0;return!1}async function Je(t){let{profilePath:e}=await Gs(t),r=await ro(e);if(r.manuallyDisabled!==void 0)return r.manuallyDisabled===!0;let n=await lm(t),o=await eo(t,async()=>{let i=await ro(e);return i.manuallyDisabled===void 0?(await Vs(e,{...i,manuallyDisabled:n}),n):i.manuallyDisabled===!0}).catch(()=>null);return o?.acquired?o.value??n:n}async function no(t,e){await am(t,{manuallyDisabled:e})}ve();var Fn=require("node:fs/promises"),it=require("node:path"),zf=require("node:url");var mo=require("node:fs"),Na=require("node:fs/promises"),go=require("node:os"),Ut=require("node:path");y();var Ie={major:22,minor:5};function Ae(t=process.versions.node){let e=/^(\d+)\.(\d+)/.exec(t);if(!e)return!1;let r=Number.parseInt(e[1],10),n=Number.parseInt(e[2],10);return r>Ie.major?!0:r<Ie.major?!1:n>=Ie.minor}var iE=f("AntigravityDetector"),La=["antigravity","antigravity-ide","antigravity-cli"];function ja(t=(0,go.homedir)()){let e=[];for(let r of La){let n=(0,Ut.join)(t,".gemini",r),o=(0,Ut.join)(n,"conversations");(0,mo.existsSync)(o)&&e.push({variant:r,root:n,conversationsDir:o,brainDir:(0,Ut.join)(n,"brain")})}return e}async function Om(t){for(let e of ja(t))try{if((await(0,Na.readdir)(e.conversationsDir)).some(r=>r.endsWith(".db")))return!0}catch{}return!1}async function Ha(t=(0,go.homedir)()){return await Om(t)?!0:La.some(e=>(0,mo.existsSync)((0,Ut.join)(t,".gemini",e)))}y();y();y();var Mm=f("TranscriptParser"),jr=class{parseLine(e,r){return Ua(e,r)}parseUsageTokens(e,r){let n=Fa(e);return n?{input:n.input,output:n.output,cached:n.cached,...n.id&&{dedupKey:n.id}}:{input:0,output:0,cached:0}}parseUsageByModel(e){let r=new Map,n=new Set;for(let o of e){let i=Fa(o);if(!i)continue;if(i.id){if(n.has(i.id))continue;n.add(i.id)}let s=r.get(i.model);s?r.set(i.model,{...s,input:s.input+i.input,output:s.output+i.output,cached:s.cached+i.cached}):r.set(i.model,{model:i.model,provider:"anthropic",input:i.input,output:i.output,cached:i.cached})}return[...r.values()]}parseTimestamp(e,r){try{let n=JSON.parse(e);return typeof n.timestamp=="string"?n.timestamp:void 0}catch{return}}},ho=class{parseLine(e,r){try{let n=JSON.parse(e),o=typeof n.timestamp=="string"?n.timestamp:void 0;if(n.type!=="event_msg")return null;let s=n.payload;if(!s||typeof s!="object")return null;let a=s.type;return a==="user_message"?$m(s,o):a==="agent_message"?Nm(s,o):null}catch(n){return Mm.debug("Failed to parse Codex transcript line %d: %s",r,n.message),null}}};function $m(t,e){let r=t.message;return typeof r!="string"||r.trim().length===0?null:{role:"human",content:r.trim(),timestamp:e}}function Nm(t,e){let r=t.message;return typeof r!="string"||r.trim().length===0?null:{role:"assistant",content:r.trim(),timestamp:e}}function Fa(t){try{return Lm(JSON.parse(t))}catch{return null}}function Lm(t){let e=t,r=e?.message?.usage??e?.usage;if(!r||typeof r!="object")return null;let n=s=>typeof r[s]=="number"?r[s]:0,o=e?.message?.model??e?.model,i=e?.message?.id;return{id:typeof i=="string"?i:"",model:typeof o=="string"?o:"",input:n("input_tokens"),output:n("output_tokens"),cached:n("cache_creation_input_tokens")}}var cE=new jr,uE=new ho;var yo=f("TranscriptReader");var jm=["Base directory for this skill:","[Request interrupted by user"],Hm=/<(?:system-reminder|ide_opened_file|ide_selection|local-command-caveat|command-name|command-message|command-args|local-command-stdout)>[\s\S]*?<\/(?:system-reminder|ide_opened_file|ide_selection|local-command-caveat|command-name|command-message|command-args|local-command-stdout)>/g;function Ua(t,e){try{let r=JSON.parse(t);if(r.isCompactSummary===!0)return yo.debug("Skipping compaction summary at line %d",e),null;if(!r.message||typeof r.message!="object")return null;let n=r.message,o=n.role,i=typeof r.timestamp=="string"?r.timestamp:void 0;if(o==="user")return Fm(n,i,e);if(o==="assistant"){let s=Ja(n.content)?.trim();return s?{role:"assistant",content:s,timestamp:i}:null}return null}catch(r){return yo.debug("Failed to parse transcript line %d: %s",e,r.message),null}}function Fm(t,e,r){let n=Ja(t.content);if(!n)return null;let o=Um(n);return o.length===0?null:jm.some(i=>o.startsWith(i))?(yo.debug("Skipping filtered user message at line %d",r),null):{role:"human",content:o,timestamp:e}}function Um(t){return t.replace(Hm,"").trim()}function Ja(t){if(typeof t=="string")return t.length>0?t:null;if(Array.isArray(t)){let e=[];for(let r of t)if(r!==null&&typeof r=="object"){let n=r;n.type==="text"&&typeof n.text=="string"&&e.push(n.text)}return e.length>0?e.join(`
`):null}return null}ge();_e();var TE=f("AntigravityDiscoverer"),IE=2880*60*1e3;var Wa=require("node:fs/promises"),Jr=require("node:os"),So=require("node:path");function Jm(t=(0,Jr.homedir)()){return(0,So.join)(t,".cline","data")}function Ga(t=(0,Jr.homedir)()){return(0,So.join)(Jm(t),"sessions")}async function Va(t=(0,Jr.homedir)()){try{return await(0,Wa.access)(Ga(t)),!0}catch{return!1}}y();_e();var NE=f("ClineCliDiscoverer"),LE=2880*60*1e3;var bo=require("node:fs/promises"),qt=require("node:os"),qr=require("node:path");var Br=require("node:os"),Bt=require("node:path");y();var FE=f("VscodeWorkspaceLocator"),Ka=["Code","Code - Insiders","Cursor","VSCodium","Windsurf"];function De(t,e=(0,Br.homedir)()){switch((0,Br.platform)()){case"darwin":return(0,Bt.join)(e,"Library","Application Support",t);case"win32":return(0,Bt.join)(process.env.APPDATA??(0,Bt.join)(e,"AppData","Roaming"),t);default:return(0,Bt.join)(e,".config",t)}}var Bm="saoudrizwan.claude-dev";function qm(t,e){return(0,qr.join)(De(t,e),"User","globalStorage",Bm)}function Wt(t=(0,qt.homedir)()){return Ka.map(e=>qm(e,t))}function Wr(t){return(0,qr.join)(t,"settings","cline_mcp_settings.json")}async function za(t=(0,qt.homedir)()){for(let e of Wt(t))try{return await(0,bo.access)((0,qr.join)(e,"state","taskHistory.json")),!0}catch{}return!1}async function ko(t=(0,qt.homedir)()){let e=[];for(let r of Wt(t))try{await(0,bo.access)(Wr(r)),e.push(r)}catch{}return e}async function Xa(t=(0,qt.homedir)()){return(await ko(t)).length>0}y();_e();var VE=f("ClineDiscoverer"),KE=2880*60*1e3;var Eo=require("node:fs/promises"),Ya=require("node:os"),vo=require("node:path");y();var QE=f("CodexDiscoverer"),ZE=2880*60*1e3,Wm=".codex";async function Ro(){let t=(0,vo.join)((0,Ya.homedir)(),Wm);try{return(await(0,Eo.stat)(t)).isDirectory()}catch{return!1}}var Za=require("node:fs/promises"),el=require("node:os"),xo=require("node:path");y();var Gm=f("CopilotChatDetector");function Vm(t){return(0,xo.join)(De("Code",t),"User","globalStorage","github.copilot-chat")}function Km(t=(0,el.homedir)()){return(0,xo.join)(t,".copilot","session-state")}async function Qa(t){try{return(await(0,Za.stat)(t)).isDirectory()}catch(e){let r=e.code;return r!=="ENOENT"&&Gm.warn("Copilot Chat probe stat failed for %s (%s): %s",t,r??"unknown",e.message),!1}}async function tl(){let[t,e]=await Promise.all([Qa(Vm()),Qa(Km())]);return t||e}y();var av=f("CopilotChatDiscoverer"),lv=2880*60*1e3;var nl=require("node:fs/promises"),ol=require("node:os"),il=require("node:path");y();var sl=f("CopilotDetector");function al(){return(0,il.join)((0,ol.homedir)(),".copilot","session-store.db")}async function ll(){return Ae()?Po():(sl.info("Copilot CLI support disabled: this runtime is Node %s, requires %d.%d+ for built-in SQLite",process.versions.node,Ie.major,Ie.minor),!1)}async function Po(){let t=al();try{return(await(0,nl.stat)(t)).isFile()}catch(e){let r=e.code;return r!=="ENOENT"&&sl.warn("Copilot DB stat failed (%s): %s",r??"unknown",e.message),!1}}y();var yv=f("CopilotDiscoverer"),wv=2880*60*1e3;var Gr=require("node:fs/promises"),Vr=require("node:os"),Co=require("node:path");y();_e();var Ev=f("CursorCliDiscoverer"),vv=2880*60*1e3;function Xm(t=(0,Vr.homedir)()){return(0,Co.join)(t,".cursor")}function Ym(t=(0,Vr.homedir)()){return(0,Co.join)(Xm(t),"chats")}async function cl(t=(0,Vr.homedir)()){try{return(await(0,Gr.stat)(Ym(t))).isDirectory()}catch{return!1}}var ul=require("node:fs/promises"),dl=require("node:path");y();var Qm=f("CursorDetector");function fl(t){return(0,dl.join)(De("Cursor",t),"User","globalStorage","state.vscdb")}async function pl(){return Ae()?To():(Qm.info("Cursor support disabled: this runtime is Node %s, requires 22.5+ for built-in SQLite",process.versions.node),!1)}async function To(){let t=fl();try{return(await(0,ul.stat)(t)).isFile()}catch{return!1}}y();var Ov=f("CursorDiscoverer"),Mv=2880*60*1e3;var Io=require("node:fs/promises"),ml=require("node:os"),mt=require("node:path");y();var Hv=f("DevinDiscoverer"),Fv=2880*60*1e3;function gl(t){let e=t??(0,ml.homedir)();if(process.platform==="win32")return(0,mt.join)(process.env.APPDATA??(0,mt.join)(e,"AppData","Roaming"),"devin","cli");let r=process.env.XDG_DATA_HOME,n=r&&r.length>0?r:(0,mt.join)(e,".local","share");return(0,mt.join)(n,"devin","cli")}function Zm(t){return(0,mt.join)(gl(t),"sessions.db")}async function eg(){try{return(await(0,Io.stat)(Zm())).isFile()}catch{return!1}}async function hl(){if(await eg())return!0;try{return(await(0,Io.stat)(gl())).isDirectory()}catch{return!1}}var yl=require("node:fs/promises"),wl=require("node:os"),Sl=require("node:path");y();var tg=f("GeminiDetector"),rg=".gemini";async function Ao(){let t=(0,Sl.join)((0,wl.homedir)(),rg);try{return(await(0,yl.stat)(t)).isDirectory()}catch{return tg.debug("Gemini directory not found: %s",t),!1}}ge();Gt();Te();ve();var Fl={"claude-plugin":{host:"claude",localAgentTool:"claude-code"},"codex-plugin":{host:"codex",localAgentTool:"codex"}};function zr(t){return t===void 0?void 0:Fl[t]?.localAgentTool}function Ul(t){return(t===void 0?void 0:Fl[t]?.host)??"claude"}async function Jl(t,e){let r=zr(t);return r===void 0?null:e.localAgentTool===r&&e.aiProvider!==void 0?{tool:r,changedTool:!1,seededProvider:!1}:Lr(n=>{let o=n.localAgentTool,i=o!==r,s=n.aiProvider===void 0;return!i&&!s?{update:null,result:{tool:r,changedTool:!1,seededProvider:!1}}:{update:s?{aiProvider:"local-agent",localAgentTool:r}:{localAgentTool:r},result:{tool:r,changedTool:i,previousTool:o,seededProvider:s}}})}Xr();var Wl=require("node:fs/promises"),Gl=require("node:os"),$o=require("node:path");y();var cg=f("OpenCodeDiscoverer"),aR=2880*60*1e3;function ug(){return process.env.XDG_DATA_HOME||(0,$o.join)((0,Gl.homedir)(),".local","share")}function dg(){return(0,$o.join)(ug(),"opencode","opencode.db")}async function Vl(){return Ae()?No():(cg.info("OpenCode support disabled: this runtime is Node %s, requires %d.%d+ for built-in SQLite",process.versions.node,Ie.major,Ie.minor),!1)}async function No(){let t=dg();try{return(await(0,Wl.stat)(t)).isFile()}catch{return!1}}y();te();Te();ve();var mR=f("PushPendingStore");var gR=10080*60*1e3;var hR=300*1e3;Gn();y();Ce();var RR=f("PushCompensation");y();ge();Gt();_e();y();Gt();var OR=f("KBRepoDiscoverer");y();te();Te();ve();var UR=f("PushControlStore");function Lo(){return"codex-plugin"}y();te();var pg={app_installed:"First run after install; installId minted (once per machine). Props: none \u2014 count distinct install_id.",client_activated:"A GUI surface activated (VS Code activate / IntelliJ project open), carrying `surface_version`. First-seen (install_id, surface_version) \u2248 new + upgrade installs that launched. GUI-only \u2014 CLI new/upgrade is read from any event's surface_version.",surface_enabled:"A surface was enabled in a repo. Props: trigger.",surface_disabled:"A surface was disabled / opted out. Props: trigger, reason.",push_enabled:"Outbound push re-enabled for a repo (spec 306, per-repo push control). Props: trigger.",push_disabled:"Outbound push disabled for a repo (spec 306, per-repo push control). Props: trigger.",signin_started:"User initiated OAuth sign-in. Props: trigger.",signin_completed:"jolliApiKey minted \u2014 the conversion event. Props: api_key_minted.",signed_out:"User logged out. Props: none.",ai_provider_selected:"User chose jolli vs anthropic for LLM. Props: provider (discriminator).",memory_bank_migrated:"Migrate-to-Memory-Bank run. Props: outcome, repos, entries_bucket.",onboarding_progressed:"Per-install onboarding-funnel snapshot, emitted from a repo context and deduped by state tuple (+ daily heartbeat). Content-free \u2014 answers 'after install, where do people stall'. Props: in_git_repo, repo_enabled, capture_configured, capture_method (discriminator: local-agent/anthropic/jolli/none), memories_generated, memories_bucket.",command_invoked:'Any CLI command ran (auto-emitted). Props: command (discriminator), ok, duration_ms. MCP tool calls carry a `tool` property and are emitted per call (not per session); the session-level `command:"mcp"` event is suppressed.',recall_performed:"A recall was run. Props: hit, result_count_bucket.",search_performed:"A search was run. Props: query_len_bucket, result_count_bucket.",memory_pushed:"Memories pushed to a Space. Props: kind, created, plans_bucket.",export_performed:"Export run. Props: format (discriminator).",ai_source_detected:"A new AI source transcript was detected. Props: source (discriminator: claude/codex/cursor/\u2026).",settings_opened:"Settings UI opened (vscode/intellij). Props: tab (discriminator).",ingest_completed:"A drainIngest run finished. Props: outcome, ingested, idle (no-op when ingested=0), batches, route_calls, reconcile_calls, touched_slugs, topic_failures, duration_ms. Filter idle=true out for real-ingest latency/health metrics.",error_occurred:"A structured error was raised. Content-free schema: { where (stage/subsystem), code (enumerated), source? , retryable? }. Emitted via trackError(); never carries a message/stack/path.",queue_drained:"QueueWorker finished a drain. Props: ops, duration_ms.",sync_completed:"A memory-bank sync round finished. Props: outcome (discriminator), duration_ms.",toolwindow_opened:"The memory tool window was opened. Props: view.",view_switched:"Tool window view switched (current/bank/knowledge). Props: view (discriminator).",memory_committed:"User committed a memory via the Commit button. Props: files_bucket (bucketed changed-file count), has_conversations (bool), context_bucket (bucketed plans/context count).",memory_expanded:"A committed memory's details were expanded. Props: expanded.",memory_item_opened:"An item inside a memory was opened. Props: item_type (discriminator: conversation/file/plan/note/reference/shipped); render (conversation only: live/stored \u2014 whether the source transcript was reopened or the stored copy was shown); source (conversation only: the transcript source, e.g. claude/codex); status (file only: the git status code, e.g. A/M/D).",session_resumed:"A conversation session was resumed in a terminal. Props: source (discriminator).",recall_prompt_copied:"A recall prompt was copied to the clipboard. Props: none.",memory_ref_id_copied:"A memory reference id (JM-<docId>) was copied to the clipboard. Props: surface_area (discriminator: list/detail \u2014 which UI the chip was clicked in).",memory_pinned:"An item was pinned. Props: kind (discriminator).",memory_unpinned:"An item was unpinned. Props: kind (discriminator).",repo_switched:"User switched the active repo in the tool window's breadcrumb. Props: is_foreign (bool).",branch_switched:"User switched the active branch in the tool window's breadcrumb. Props: is_foreign (bool).",squash_performed:"User squashed commits. Props: count_bucket (bucketed number of commits squashed).",pr_created:"User created or updated a PR from the tool window. Props: action (discriminator: created/updated).",memory_shared:"User invoked Share for a branch's memories (read-only share link). Props: none.",key_rejected:"The server rejected the API key (401/403). Props: retried, where.",reauth_completed:"Re-authentication after a rejected key finished. Props: outcome."};var KR=new Set(Object.keys(pg));var bx=f("PushControl");li();ve();on();y();var St=require("node:fs/promises"),Xt=require("node:path");te();var Zg='"$HOME/.jolli/jollimemory/run-hook"';function Me(t,e=""){let r=e?` ${e}`:"";return`${Zg} ${t}${r}`}var ci=["run-hook","StopHook","jollimemory-hooks.jar"],an=["run-hook","SessionStartHook"],ln=["run-hook","GeminiAfterAgentHook","jollimemory-hooks.jar"];function zt(t,e){let r=typeof e=="string"?[e]:e;return t.some(n=>{let o=n.hooks;return Array.isArray(o)?o.some(i=>typeof i.command=="string"&&r.some(s=>i.command.includes(s))):!1})}function et(t,e){let r=typeof e=="string"?[e]:e,n=[];for(let o of t){let i=o.hooks;if(!Array.isArray(i)){n.push(o);continue}let s=i.filter(a=>!(typeof a.command=="string"&&r.some(l=>a.command.includes(l))));s.length>0&&n.push({...o,hooks:s})}return n}function ui(t){return zt(t,ci)}function cn(t){return et(t,ci)}async function di(t){let e=(0,Xt.join)(t,".claude"),r=(0,Xt.join)(e,"settings.local.json"),n=Me("stop"),o=Me("session-start");await Vc(t);let i={},s;try{s=await(0,St.readFile)(r,"utf-8"),i=JSON.parse(s)}catch(p){if(p.code!=="ENOENT")throw p}let a=i.hooks??{},l=a.Stop??[],c=a.SessionStart??[],d=cn(l);d.push({hooks:[{type:"command",command:n,async:!0}]});let u=et(c,an);u.push({hooks:[{type:"command",command:o}]}),a.Stop=d,a.SessionStart=u,i.hooks=a;let m=JSON.stringify(i,null,"	");return s===m?{path:r}:(await(0,St.mkdir)(e,{recursive:!0}),await C(r,m),{path:r})}async function Vc(t){let e=(0,Xt.join)(t,".claude","settings.json"),r;try{let s=await(0,St.readFile)(e,"utf-8");r=JSON.parse(s)}catch{return}let n=r.hooks;if(!n)return;let o=n.Stop??[];if(!ui(o))return;let i=cn(o);i.length===0?delete n.Stop:n.Stop=i,Object.keys(n).length===0?delete r.hooks:r.hooks=n,await C(e,JSON.stringify(r,null,"	"))}async function fi(t){await Vc(t);let e=(0,Xt.join)(t,".claude","settings.local.json"),r;try{let l=await(0,St.readFile)(e,"utf-8");r=JSON.parse(l)}catch{return{}}let n=r.hooks;if(!n)return{};let o=n.Stop??[],i=ui(o);if(i){let l=cn(o);l.length===0?delete n.Stop:n.Stop=l}let s=n.SessionStart??[],a=zt(s,an);if(a){let l=et(s,an);l.length===0?delete n.SessionStart:n.SessionStart=l}return!i&&!a?{}:(Object.keys(n).length===0?delete r.hooks:r.hooks=n,await C(e,JSON.stringify(r,null,"	")),{})}var rt=require("node:fs/promises"),Kd=require("node:os"),ir=require("node:path");te();y();var Bd=require("node:crypto"),vt=require("node:fs"),Mi=require("node:fs/promises"),xn=require("node:os"),$e=require("node:path");y();var zc=require("node:fs"),dn=require("node:fs/promises"),Xc=require("node:os"),tt=require("node:path"),Yc=require("node:url");te();y();var eh=/^[a-z0-9][a-z0-9-]*$/;function Yt(t){return eh.test(t)}var un=f("DistPathWriter");async function Qt(t,e,r,n){if(!Yt(t))return un.warn("Refusing to write dist-paths entry for unsafe source tag: %s",JSON.stringify(t)),!1;let o=e??(0,tt.dirname)((0,Yc.fileURLToPath)(__jmImportMetaUrl)),i=r??"0.99.10",s=(0,tt.join)(n??(0,tt.join)((0,Xc.homedir)(),".jolli","jollimemory"),"dist-paths"),a=(0,tt.join)(s,t);try{await(0,dn.mkdir)(s,{recursive:!0});let l=`${i}
${o}`,c;try{c=await(0,dn.readFile)(a,"utf-8")}catch{}if(c){let[d,u]=c.split(`
`);if(!!(d&&u&&Kc(u))&&!Kc(o))return un.info("Kept complete dist-paths/%s (version=%s) \u2014 candidate dist is incomplete: %s",t,d,o),!0}return c!==l&&await C(a,l),un.info("Wrote dist-paths/%s (version=%s, distDir=%s)",t,i,o),!0}catch(l){return un.warn("Failed to write dist-paths/%s: %s",t,l.message),!1}}var th=["Cli.js","StopHook.js","SessionStartHook.js","PostCommitHook.js","PostRewriteHook.js","PrepareMsgHook.js","PostMergeHook.js","PrePushHook.js","QueueWorker.js","PrePushWorker.js"];function Kc(t){return th.every(e=>(0,zc.existsSync)((0,tt.join)(t,e)))}var Et=qn(Jd(),1);function Rn(t,e){if(t.includes("-")||t.includes("+")||e.includes("-")||e.includes("+")){let s=c=>{let d=(0,Et.valid)(c);return d||(/^\d+(\.\d+)*$/.test(c)?(0,Et.coerce)(c)?.version??null:null)},a=s(t),l=s(e);if(a&&l)return(0,Et.compare)(a,l);if(a)return 1;if(l)return-1}let r=/^\d+(\.\d+)*$/.test(t),n=/^\d+(\.\d+)*$/.test(e);if(!r&&!n)return 0;if(!r)return-1;if(!n)return 1;let o=t.split(".").map(Number),i=e.split(".").map(Number);for(let s=0;s<Math.max(o.length,i.length);s++){let a=(o[s]??0)-(i[s]??0);if(a!==0)return a}return 0}var Oi=f("DistPathResolver"),aS=[[".cursor/","cursor"],[".windsurf/","windsurf"],[".antigravity/","antigravity"],[".vscode-oss/","vscodium"],[".positron/","positron"],[".trae/","trae"],[".vscode/","vscode"]];function $i(t){let e=t.replace(/\\/g,"/");for(let[n,o]of aS)if(e.includes(n))return o;let r=e.match(/\/\.([a-z][a-z0-9-]*)\/extensions\//i);return r?.[1]?r[1].toLowerCase():(0,Bd.createHash)("sha256").update(t).digest("hex").slice(0,8)}function qd(t){try{let r=(0,vt.readFileSync)(t,"utf-8").trim().split(`
`).map(i=>i.trim());if(r.length<2)return null;let n=r[0],o=r[r.length-1];if(!o)return null;if(n.startsWith("source=")){let i=n.slice(7),s=i.indexOf("@");return s===-1?{source:i,version:"unknown",distDir:o}:{source:i.slice(0,s),version:i.slice(s+1),distDir:o}}return{source:"",version:n,distDir:o}}catch{return null}}function or(t){let e=(0,$e.join)(t??(0,$e.join)((0,xn.homedir)(),".jolli","jollimemory"),"dist-paths"),r;try{r=(0,vt.readdirSync)(e).sort()}catch{return[]}let n=[];for(let o of r){let i=(0,$e.join)(e,o),s=qd(i);s&&n.push({source:o,version:s.version,distDir:s.distDir,available:(0,vt.existsSync)(s.distDir)})}return n}async function Wd(t){let e=(0,$e.join)(t??(0,$e.join)((0,xn.homedir)(),".jolli","jollimemory"),"dist-paths"),r=[];for(let n of or(t))if(!n.available)try{await(0,Mi.unlink)((0,$e.join)(e,n.source)),r.push(n.source),Oi.info("Pruned stale dist-paths/%s (dir gone: %s)",n.source,n.distDir)}catch(o){Oi.warn("Failed to prune stale dist-paths/%s: %s",n.source,o.message)}return r}var Ni=["cli","vscode","cursor"];function Pn(t){let e=t.filter(o=>o.available);if(e.length===0)return;let r=e[0];for(let o=1;o<e.length;o++)Rn(e[o].version,r.version)>0&&(r=e[o]);let n=e.filter(o=>Rn(o.version,r.version)===0);for(let o of Ni){let i=n.find(s=>s.source===o);if(i)return i}return r}async function Gd(){let t=(0,$e.join)((0,xn.homedir)(),".jolli","jollimemory"),e=(0,$e.join)(t,"dist-path"),r=qd(e);if(!r)return!1;let n;if(r.source==="cli")n="cli";else{let o=$i(r.distDir);n=/^[a-f0-9]{8}$/.test(o)?"vscode":o}return n==="vscode-extension"&&(n="vscode"),await Qt(n,r.distDir,r.version),await(0,Mi.unlink)(e).catch(()=>{}),Oi.info("Migrated legacy dist-path -> dist-paths/%s (version=%s, distDir=%s)",n,r.version,r.distDir),!0}var Vd=f("DispatchScripts"),lS=`#!/bin/bash
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
  for pref in ${Ni.join(" ")}; do
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
`,cS=`#!/bin/bash
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

DIST=$("$HOME/.jolli/jollimemory/resolve-dist-path" "$SCRIPT") || exit 0

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
  exit 0
fi

exec "$NODE_BIN" "$DIST/$SCRIPT" "$@"
`,uS=`#!/bin/bash
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
`;async function Li(t,e){let r=!1;try{r=await(0,rt.readFile)(t,"utf-8")===e}catch{}if(r){await(0,rt.chmod)(t,493);return}await C(t,e),await(0,rt.chmod)(t,493)}async function ji(){let t=(0,ir.join)((0,Kd.homedir)(),".jolli","jollimemory");try{return await(0,rt.mkdir)(t,{recursive:!0}),await Li((0,ir.join)(t,"resolve-dist-path"),lS),await Li((0,ir.join)(t,"run-hook"),cS),await Li((0,ir.join)(t,"run-cli"),uS),Vd.info("Wrote resolve-dist-path, run-hook, and run-cli scripts to %s",t),!0}catch(e){return Vd.warn("Failed to write resolve scripts: %s",e.message),!1}}var sr=require("node:fs/promises"),Cn=require("node:path");te();y();var zd=f("GeminiHookInstaller");async function Hi(t){let e=(0,Cn.join)(t,".gemini"),r=(0,Cn.join)(e,"settings.json"),n=Me("gemini-after-agent"),o={},i;try{i=await(0,sr.readFile)(r,"utf-8"),o=JSON.parse(i)}catch(d){if(d.code!=="ENOENT")throw d}let s=o.hooks??{},a=s.AfterAgent??[],l=et(a,ln);l.push({hooks:[{type:"command",command:n,name:"jolli-session-tracker"}]}),s.AfterAgent=l,o.hooks=s;let c=JSON.stringify(o,null,"	");return i===c?{path:r}:(await(0,sr.mkdir)(e,{recursive:!0}),await C(r,c),zd.info("Gemini AfterAgent hook installed"),{path:r})}async function Fi(t){let e=(0,Cn.join)(t,".gemini","settings.json"),r;try{let s=await(0,sr.readFile)(e,"utf-8");r=JSON.parse(s)}catch{return}let n=r.hooks;if(!n)return;let o=n.AfterAgent??[];if(!zt(o,ln))return;let i=et(o,ln);i.length===0?delete n.AfterAgent:n.AfterAgent=i,Object.keys(n).length===0?delete r.hooks:r.hooks=n,await C(e,JSON.stringify(r,null,"	")),zd.info("Gemini AfterAgent hook removed")}var nt=require("node:fs/promises"),Ne=require("node:path");te();y();Ce();var de=f("GitExclude"),ar="# >>> jolli skill exclude >>>",lr="# <<< jolli skill exclude <<<";function dS(t,e){return Ne.win32.isAbsolute(t)||Ne.posix.isAbsolute(t)?t:(0,Ne.join)(e,t)}async function Ui(t){try{let{stdout:e}=await lt("git",["rev-parse","--git-path","info/exclude"],{cwd:t}),r=e.trim();return r.length===0?null:dS(r,t)}catch{return null}}async function Xd(t,e){let r=await Ui(t);if(!r)return de.warn("Skipping .git/info/exclude update for %s: not a git repo or git unavailable",t),!1;let n="";try{n=await(0,nt.readFile)(r,"utf-8")}catch(s){if(s.code!=="ENOENT")return de.warn("Failed to read %s: %s \u2014 skipping update",r,s.message),!1}let o=Zd(e),i=ef(n,o);if(i===n)return!0;try{return await(0,nt.mkdir)((0,Ne.dirname)(r),{recursive:!0}),await C(r,i),de.info("Updated %s with %d Jolli skill exclude paths",r,e.length),!0}catch(s){return de.warn("Failed to write %s: %s",r,s.message),!1}}async function Yd(t,e){let r=await Ui(t);if(!r)return de.warn("Skipping .git/info/exclude update for %s: not a git repo or git unavailable",t),!1;let n="";try{n=await(0,nt.readFile)(r,"utf-8")}catch(i){if(i.code!=="ENOENT")return de.warn("Failed to read %s: %s \u2014 skipping update",r,i.message),!1}let o=fS(n,e);if(o===n)return!0;try{return await(0,nt.mkdir)((0,Ne.dirname)(r),{recursive:!0}),await C(r,o),de.info("Merged %d Jolli skill exclude path(s) into %s",e.length,r),!0}catch(i){return de.warn("Failed to write %s: %s",r,i.message),!1}}async function Qd(t,e){let r=await Ui(t);if(!r)return de.warn("Skipping .git/info/exclude cleanup for %s: not a git repo or git unavailable",t),!1;let n;try{n=await(0,nt.readFile)(r,"utf-8")}catch(i){return i.code==="ENOENT"?!0:(de.warn("Failed to read %s: %s \u2014 skipping cleanup",r,i.message),!1)}let o=pS(n,e);if(o===n)return!0;try{return await C(r,o),de.info("Removed %d Jolli exclude path(s) from %s",e.length,r),!0}catch(i){return de.warn("Failed to write %s: %s",r,i.message),!1}}function Zd(t){return`${[ar,...t,lr].join(`
`)}
`}function ef(t,e){let r=t.split(`
`),n=r.indexOf(ar),o=r.indexOf(lr),i=e.slice(0,-1).split(`
`);if(n!==-1&&o!==-1&&o>n)return[...r.slice(0,n),...i,...r.slice(o+1)].join(`
`);if(t.length===0)return e;let s=t.endsWith(`
`)?"":`
`;return`${t}${s}${e}`}function fS(t,e){let r=t.split(`
`),n=r.indexOf(ar),o=r.indexOf(lr),i=n!==-1&&o!==-1&&o>n?r.slice(n+1,o):[],s=new Set(i),a=[...i];for(let l of e)s.has(l)||(s.add(l),a.push(l));return ef(t,Zd(a))}function pS(t,e){let r=t.split(`
`),n=r.indexOf(ar),o=r.indexOf(lr);if(n===-1||o===-1||o<=n)return t;let i=new Set(e),s=r.slice(n+1,o).filter(c=>!i.has(c)),a=r.slice(0,n),l=r.slice(o+1);return s.length===0?[...a.length>0&&a[a.length-1]===""?a.slice(0,-1):a,...l].join(`
`):[...a,ar,...s,lr,...l].join(`
`)}var W=require("node:fs/promises"),ur=require("node:path");te();ge();y();var Tn=f("GitHookInstaller"),cr="# >>> JolliMemory post-commit hook >>>",Ji="# <<< JolliMemory post-commit hook <<<",In="# >>> JolliMemory post-rewrite hook >>>",tf="# <<< JolliMemory post-rewrite hook <<<",An="# >>> JolliMemory prepare-commit-msg hook >>>",rf="# <<< JolliMemory prepare-commit-msg hook <<<",_n="# >>> JolliMemory post-merge hook >>>",nf="# <<< JolliMemory post-merge hook <<<",Dn="# >>> JolliMemory pre-push hook >>>",of="# <<< JolliMemory pre-push hook <<<";async function sf(t){let e=await Nt(t),r=(0,ur.join)(e,"post-commit"),n=Me("post-commit"),o=[cr,n,Ji].join(`
`),i,s="";try{if(s=await(0,W.readFile)(r,"utf-8"),s.includes(cr)){let l=new RegExp(`\\n*${ze(cr)}[\\s\\S]*?${ze(Ji)}\\n*`,"g"),d=`${s.replace(l,`
`).trimEnd()}

${o}
`;return s===d?(await $n(r),{path:r}):(await C(r,d),await(0,W.chmod)(r,493),{path:r})}i="Existing post-commit hook found \u2014 Jolli Memory section appended",Tn.warn(i)}catch{}let a;s?a=`${s}

${o}
`:a=`#!/bin/sh

${o}
`,await(0,W.mkdir)(e,{recursive:!0}),await C(r,a);try{await(0,W.chmod)(r,493)}catch{}return Tn.info("Git post-commit hook installed"),{warning:i,path:r}}async function af(t){let e=Me("post-rewrite",'"$1"'),r=[In,e,tf].join(`
`);return On(t,"post-rewrite",r,In)}async function lf(t){let e='"$HOME/.jolli/jollimemory/run-hook"',r=["__jolli_prepare_msg_previous_status=$?",`if [ -x ${e} ]; then ${e} prepare-commit-msg "$1" "$2" || true; fi`,'(exit "$__jolli_prepare_msg_previous_status")'].join(`
`),n=[An,r,rf].join(`
`);return On(t,"prepare-commit-msg",n,An)}async function cf(t){let e=Me("post-merge"),r=[_n,e,nf].join(`
`);return On(t,"post-merge",r,_n)}async function uf(t){let e='"$HOME/.jolli/jollimemory/run-hook"',r=["__jolli_pre_push_previous_status=$?",`if [ -x ${e} ]; then ${e} pre-push "$@" || true; fi`,'(exit "$__jolli_pre_push_previous_status")'].join(`
`),n=[Dn,r,of].join(`
`);return On(t,"pre-push",n,Dn)}async function On(t,e,r,n){let o=r.slice(r.lastIndexOf(`
`)+1),i=await Nt(t),s=(0,ur.join)(i,e),a,l="";try{if(l=await(0,W.readFile)(s,"utf-8"),l.includes(n)){let d=new RegExp(`\\n*${ze(n)}[\\s\\S]*?${ze(o)}\\n*`,"g"),m=`${l.replace(d,`
`).trimEnd()}

${r}
`;return l===m?(await $n(s),{path:s}):(await C(s,m),await(0,W.chmod)(s,493),{path:s})}a=`Existing ${e} hook found \u2014 Jolli Memory section appended`,Tn.warn(a)}catch{}let c;l?c=`${l}

${r}
`:c=`#!/bin/sh

${r}
`,await(0,W.mkdir)(i,{recursive:!0}),await C(s,c);try{await(0,W.chmod)(s,493)}catch{}return Tn.info("Git %s hook installed",e),{warning:a,path:s}}async function df(t){let e;try{let i=await Nt(t);e=(0,ur.join)(i,"post-commit")}catch{return{}}let r;try{r=await(0,W.readFile)(e,"utf-8")}catch{return{}}if(!r.includes(cr))return{};let n=new RegExp(`\\n*${ze(cr)}[\\s\\S]*?${ze(Ji)}\\n*`,"g"),o=r.replace(n,`
`);if(o.trim()==="#!/bin/sh"||o.trim()===""){let{rm:i}=await import("node:fs/promises");await i(e,{force:!0})}else await C(e,o),await $n(e);return{}}async function ff(t){await Mn(t,"post-rewrite",In,tf)}async function pf(t){await Mn(t,"prepare-commit-msg",An,rf)}async function mf(t){await Mn(t,"post-merge",_n,nf)}async function gf(t){await Mn(t,"pre-push",Dn,of)}async function Mn(t,e,r,n){let o;try{o=await Nt(t)}catch{return}let i=(0,ur.join)(o,e),s;try{s=await(0,W.readFile)(i,"utf-8")}catch{return}if(!s.includes(r))return;let a=new RegExp(`\\n*${ze(r)}[\\s\\S]*?${ze(n)}\\n*`,"g"),l=s.replace(a,`
`);if(l.trim()==="#!/bin/sh"||l.trim()===""){let{rm:c}=await import("node:fs/promises");await c(i,{force:!0})}else await C(i,l),await $n(i)}function ze(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}async function $n(t){try{((await(0,W.stat)(t)).mode&73)===0&&await(0,W.chmod)(t,493)}catch{}}var Xe=require("node:fs/promises"),Bi=require("node:os"),dr=require("node:path");y();var Rt=f("GlobalInstructionsInstaller"),qi="<!-- >>> jolli memory instructions >>> -->",Wi="<!-- <<< jolli memory instructions <<< -->",hf="## Jolli Memory",yf=[{host:"claude",relPath:[".claude","CLAUDE.md"]},{host:"gemini",relPath:[".gemini","GEMINI.md"]},{host:"codex",relPath:[".codex","AGENTS.md"]}];function mS(){return`${[qi,hf,"","This repository may have **Jolli Memory** enabled \u2014 a durable record of past","development the current code cannot show: why choices were made, how a topic was","handled before, what was already tried, and where work stopped. Treat it as a","first-class source and reach for it **proactively \u2014 before answering or guessing,","and even when the user never names Jolli** \u2014 whenever a request is memory-shaped","(about intent, history, or prior work). Its reads are read-only and cheap, so","lean toward consulting memory rather than guessing: a hit often changes the","answer, and a miss costs little.","","Two capabilities are available; invoke whichever recall / search skill or tool is","registered in this session \u2014 the exact name varies by host (a plugin skill, a","project skill, or e.g. an `mcp__jollimemory__*` MCP tool), so route by intent, not","by a fixed name:","","- **Recall** \u2014 deep context for one branch (the current branch by default): its","  decisions, a recap, and where work left off.","- **Search** \u2014 full-text lookup across *all* branches: decisions, topics, files.","","Consult memory FIRST, before answering from your own assumptions, when the request","is memory-shaped:","",'- **Why / intent** \u2014 "why is this like this", "why X and not Y", "what was the','  reasoning", or anything where the code shows *what* but not *why*. \u2192 Search (or',"  Recall when it's about the current branch).",'- **How it works / design** \u2014 "how does X work", "how is X built/designed", "how','  would I implement X", or walking through / extending an existing feature or',"  subsystem in this repo. The code shows the mechanism; memory holds why it is","  shaped that way and what was already tried. \u2192 Search (or Recall for the current","  branch). A quick lookup here is cheap and often surfaces rationale and pitfalls",`  the code comments don't \u2014 so search even though the ask starts with "how".`,'- **Prior art** \u2014 "have we done/hit this before", "how was <topic> handled", "is','  there a pattern for this", "where else do we do X", or a bug that may have been',"  seen before. \u2192 Search (decisions / topics / files across ALL branches).",`- **Resume** \u2014 "where were we", "pick up where I left off", "what's left on this`,'  branch", or returning to work after a break. \u2192 Recall (current-branch decisions',"  + recap + where work stopped).","- **Before non-trivial edits** \u2014 before refactoring, changing, or deleting code","  whose intent isn't obvious from the code itself, search memory first; a past","  decision may constrain the change, and skipping this risks re-breaking what a","  prior fix already addressed.","",'Routing: current-branch history or resume \u2192 Recall; cross-branch or "has this','come up before" \u2192 Search. When unsure whether memory helps, run a quick search',"first before answering from your own assumptions.","","Do NOT reach for memory on narrow, current-state facts you can read straight from","the code \u2014 one function's behavior, a type or signature, running a command, a","rename, formatting, or a literal text lookup \u2014 answer those from the code directly.","That exclusion is for single-symbol lookups only; do not let it swallow a",'whole-feature "how does it work / how is it designed" question \u2014 that is',"design-shaped, so search memory first (per the How it works / design rule above).","","Treat any concrete fact memory states as of-its-time: use it for why / intent /","prior context, but verify names, paths, and code shape against the current code","before relying on them. If no Jolli memory capability is registered here (Jolli","Memory not enabled in this repo), fall back to normal behavior.",Wi].join(`
`)}
`}function wf(t){return t==="enabled"?{write:!0}:t==="disabled"?{write:!1,remove:!0}:{write:!1}}function gS(t,e){let r=t.split(`
`),n=r.indexOf(qi),o=r.indexOf(Wi),i=e.slice(0,-1).split(`
`);if(n!==-1&&o!==-1&&o>n)return[...r.slice(0,n),...i,...r.slice(o+1)].join(`
`);let s=r.indexOf(hf);if(s!==-1){let l=r.length;for(let u=s+1;u<r.length;u++)if(/^#{1,2} /.test(r[u])){l=u;break}let c=r.slice(0,s).join(`
`),d=r.slice(l).join(`
`);return`${c.length>0?`${c}
`:""}${e}${d}`}if(t.length===0)return e;let a=t.endsWith(`
`)?"":`
`;return`${t}${a}${e}`}async function hS(t,e){let r="";try{r=await(0,Xe.readFile)(t,"utf-8")}catch(o){if(o.code!=="ENOENT"){Rt.warn("Failed to read %s: %s \u2014 skipping",t,o.message);return}}let n=gS(r,e);if(n!==r)try{await(0,Xe.mkdir)((0,dr.dirname)(t),{recursive:!0}),await(0,Xe.writeFile)(t,n,"utf-8"),Rt.info("Updated %s with Jolli Memory instructions",t)}catch(o){Rt.warn("Failed to write %s: %s",t,o.message)}}async function Sf(t){let e=mS(),r=(0,Bi.homedir)();for(let n of yf)t[n.host]&&await hS((0,dr.join)(r,...n.relPath),e)}function yS(t){let e=t.split(`
`),r=e.indexOf(qi),n=e.indexOf(Wi);if(r===-1||n===-1||n<r)return t;let o=r>0&&e[r-1]===""?r-1:r;return[...e.slice(0,o),...e.slice(n+1)].join(`
`)}async function wS(t){let e;try{e=await(0,Xe.readFile)(t,"utf-8")}catch(n){n.code!=="ENOENT"&&Rt.warn("Failed to read %s: %s \u2014 skipping",t,n.message);return}let r=yS(e);if(r!==e)try{await(0,Xe.writeFile)(t,r,"utf-8"),Rt.info("Removed Jolli Memory instructions from %s",t)}catch(n){Rt.warn("Failed to write %s: %s",t,n.message)}}async function bf(){let t=(0,Bi.homedir)();for(let e of yf)await wS((0,dr.join)(t,...e.relPath))}var ne=require("node:os"),L=require("node:path");ve();y();var kf=require("node:fs"),Pt=require("node:fs/promises"),xt=require("node:path");ve();y();var Gi=f("McpRegistration"),Vi="jollimemory";function SS(t,e,r,n){return t==="win32"&&r?{command:"node",args:[r,...n]}:{command:e,args:[...n]}}function Ki(t,e,r){return SS(t,e,r,["mcp"])}function zi(t){let e=Pn(or(t));return e?(0,xt.join)(e.distDir,"Cli.js"):void 0}function Ef(t){let e=Pn(or(t));if(!e)return;let r=(0,xt.join)(e.distDir,"McpLauncher.js");return(0,kf.existsSync)(r)?r:void 0}var vf="/.mcp.json";async function Rf(t){let e=(0,xt.join)(t,".mcp.json"),r;try{r=JSON.parse(await(0,Pt.readFile)(e,"utf-8"))}catch(l){if(l.code!=="ENOENT"){Gi.warn("Skipping MCP registration: %s exists but is unreadable/invalid (%s)",e,String(l));return}r={}}let n=r.mcpServers??{},o=ye(),i=(0,xt.join)(o,"run-cli"),s=process.platform==="win32"?zi(o):void 0;n[Vi]=Ki(process.platform,i,s);let a={...r,mcpServers:n};await(0,Pt.writeFile)(e,`${JSON.stringify(a,null,2)}
`,"utf-8"),Gi.info("Registered MCP server in %s",e)}async function xf(t){let e=(0,xt.join)(t,".mcp.json"),r;try{r=JSON.parse(await(0,Pt.readFile)(e,"utf-8"))}catch{return}r.mcpServers?.[Vi]&&(delete r.mcpServers[Vi],await(0,Pt.writeFile)(e,`${JSON.stringify(r,null,2)}
`,"utf-8"),Gi.info("Removed MCP server from %s",e))}var ot=require("node:fs/promises"),Cf=require("node:path");te();y();var Nn=f("CodexTomlWriter"),Ln="[mcp_servers.jollimemory]";async function Tf(t){try{return(await(0,ot.stat)(t)).mode&511}catch{return 384}}function Pf(t){return`${Ln}
command = ${JSON.stringify(t.command)}
args = ${JSON.stringify(t.args??[])}
`}function If(t){if(t.startsWith(Ln))return 0;let e=t.indexOf(`
${Ln}`);return e===-1?-1:e+1}function Af(t){let e=If(t);if(e===-1)return t;let r=t.indexOf(`
[`,e+Ln.length),n=r===-1?t.length:r+1,o=t.slice(0,e),i=t.slice(n);return o===""||i===""?o+i:`${o.replace(/\n+$/,"")}

${i}`}async function _f(t,e){let r="";try{r=await(0,ot.readFile)(t,"utf-8")}catch(s){if(s.code!=="ENOENT"){Nn.warn("Skipping Codex MCP: %s unreadable (%s)",t,String(s));return}}let n=Af(r).replace(/\s*$/,""),o=n.length===0?Pf(e):`${n}

${Pf(e)}`;if(o===r){Nn.info("Codex MCP server already registered in %s \u2014 no write needed",t);return}await(0,ot.mkdir)((0,Cf.dirname)(t),{recursive:!0});let i=await Tf(t);await C(t,o,i),Nn.info("Registered Codex MCP server in %s",t)}async function Df(t){let e;try{e=await(0,ot.readFile)(t,"utf-8")}catch{return}If(e)!==-1&&(await C(t,`${Af(e).replace(/\s*$/,"")}
`,await Tf(t)),Nn.info("Removed Codex MCP server from %s",t))}var Ye=require("node:fs/promises"),Of=require("node:path");y();var Xi=f("JsonMcpWriter"),Yi="jollimemory",Mf="mcpServers";async function Le(t,e,r=Mf){let n;try{let i=await(0,Ye.readFile)(t,"utf-8");n=i.trim()===""?{}:JSON.parse(i)}catch(i){if(i.code!=="ENOENT"){Xi.warn("Skipping MCP registration: %s unreadable/invalid (%s)",t,String(i));return}n={}}let o=n[r]??{};o[Yi]=e,await(0,Ye.mkdir)((0,Of.dirname)(t),{recursive:!0}),await(0,Ye.writeFile)(t,`${JSON.stringify({...n,[r]:o},null,2)}
`,"utf-8"),Xi.info("Registered MCP server in %s",t)}async function je(t,e=Mf){let r;try{r=JSON.parse(await(0,Ye.readFile)(t,"utf-8"))}catch{return}let n=r[e];n?.[Yi]&&(delete n[Yi],await(0,Ye.writeFile)(t,`${JSON.stringify(r,null,2)}
`,"utf-8"),Xi.info("Removed MCP server from %s",t))}var bS=f("HostRegistrars"),kS={host:"claude",scope:"repo",register:Rf,remove:xf,gitExcludePaths:()=>[vf]};function He(){let t=ye(),e=process.platform==="win32"?zi(t):void 0;return Ki(process.platform,(0,L.join)(t,"run-cli"),e)}function ES(){let t=He();if(process.platform!=="win32")return t;let e=Ef(ye());return e?{command:"node",args:[e]}:t}var vS={host:"cursor",scope:"repo",register:t=>Le((0,L.join)(t,".cursor","mcp.json"),{...He()}),remove:t=>je((0,L.join)(t,".cursor","mcp.json")),gitExcludePaths:()=>["/.cursor/mcp.json"]},RS={host:"gemini",scope:"global",register:()=>Le((0,L.join)((0,ne.homedir)(),".gemini","settings.json"),{...He()}),remove:()=>je((0,L.join)((0,ne.homedir)(),".gemini","settings.json")),gitExcludePaths:()=>[]},xS={host:"codex",scope:"global",register:()=>_f((0,L.join)((0,ne.homedir)(),".codex","config.toml"),ES()),remove:()=>Df((0,L.join)((0,ne.homedir)(),".codex","config.toml")),gitExcludePaths:()=>[]},PS={host:"opencode",scope:"global",register:()=>{let t=He(),e={type:"local",command:[t.command,...t.args],enabled:!0};return Le((0,L.join)((0,ne.homedir)(),".config","opencode","opencode.json"),e,"mcp")},remove:()=>je((0,L.join)((0,ne.homedir)(),".config","opencode","opencode.json"),"mcp"),gitExcludePaths:()=>[]},CS={host:"copilot",scope:"global",register:()=>Le((0,L.join)((0,ne.homedir)(),".copilot","mcp-config.json"),{...He()}),remove:()=>je((0,L.join)((0,ne.homedir)(),".copilot","mcp-config.json")),gitExcludePaths:()=>[]},TS={host:"copilotChat",scope:"global",register:()=>{let t=He(),e={type:"stdio",command:t.command,args:t.args};return Le((0,L.join)(De("Code"),"User","mcp.json"),e,"servers")},remove:()=>je((0,L.join)(De("Code"),"User","mcp.json"),"servers"),gitExcludePaths:()=>[]},IS={host:"cline",scope:"global",register:async()=>{for(let t of await ko())await Le(Wr(t),{...He()})},remove:async()=>{for(let t of Wt())await je(Wr(t))},gitExcludePaths:()=>[]},AS={host:"devin",scope:"global",register:()=>Le((0,L.join)((0,ne.homedir)(),".config","devin","config.json"),{...He(),transport:"stdio"}),remove:()=>je((0,L.join)((0,ne.homedir)(),".config","devin","config.json")),gitExcludePaths:()=>[]},_S={host:"antigravity",scope:"global",register:()=>Le((0,L.join)((0,ne.homedir)(),".gemini","config","mcp_config.json"),{...He()}),remove:()=>je((0,L.join)((0,ne.homedir)(),".gemini","config","mcp_config.json")),gitExcludePaths:()=>[]};function fr(t){let e=[];return t.claude&&e.push(kS),t.cursor&&e.push(vS),t.gemini&&e.push(RS),t.codex&&e.push(xS),t.opencode&&e.push(PS),t.copilot&&e.push(CS),t.copilotChat&&e.push(TS),t.cline&&e.push(IS),t.devin&&e.push(AS),t.antigravity&&e.push(_S),e}var DS={claude:!0,codex:!0,cursor:!0,gemini:!0,opencode:!0,copilot:!0,copilotChat:!0,cline:!0,devin:!0,antigravity:!0};async function Qi(t,e,r,n){for(let o of t)try{await n(o)}catch(i){bS.warn("MCP %s failed for %s in %s (non-fatal): %s",r,o.host,e,String(i))}}async function $f(t,e){let r=fr(e).filter(n=>n.scope==="repo");await Qi(r,t,"registration",n=>n.register(t))}async function Nf(t){let e=fr(t).filter(r=>r.scope==="global");await Qi(e,"(global)","registration",r=>r.register(""))}async function Zi(t){let e=fr(DS).filter(r=>r.scope==="repo");await Qi(e,t,"removal",r=>r.remove(t))}var pe=require("node:fs/promises"),Y=require("node:path");te();y();var fe=f("SkillInstaller"),Ct="1.0.0",jf=["jollimemory-recall","jolli-memory-recall"],pr=[{host:"agents-std",relativeDir:[".agents","skills"],enabled:()=>!0}],es=[".claude","skills"],ts=[{name:"jolli-recall",build:LS},{name:"jolli-search",build:jS},{name:"jolli-local-run",build:HS},{name:"jolli-remote-run",build:FS},{name:"jolli",build:US}],Hf=["jolli-pr"],Ff=pr.flatMap(t=>ts.map(e=>`/${t.relativeDir.join("/")}/${e.name}/`)),jn=["/.claude/skills/jolli/"],Uf=[...pr.map(t=>`/${t.relativeDir.join("/")}/jolli/`),...jn];async function OS(t,e={}){for(let r of jf)await Jf((0,Y.join)(t,".claude","skills",r),"legacy");await rs(t);for(let r of pr){if(!r.enabled(e))continue;let n=(0,Y.join)(t,...r.relativeDir);for(let o of ts)await Vf(n,o.name,o.build())}}async function rs(t){for(let e of pr){let r=(0,Y.join)(t,...e.relativeDir);for(let n of Hf)await Jf((0,Y.join)(r,n),"retired")}}async function Jf(t,e){let r=(0,Y.join)(t,"SKILL.md"),n;try{n=await(0,pe.readFile)(r,"utf-8")}catch{return}if(!ns(n)){fe.info("Keeping %s \u2014 no Jolli ownership marker (user-owned)",t);return}try{await(0,pe.rm)(t,{recursive:!0,force:!0}),fe.info("Removed %s Jolli skill at %s",e,t)}catch(o){fe.warn("Failed to remove %s skill at %s: %s",e,t,o.message)}}async function Bf(t,e={}){return OS(t,e)}async function qf(t){let e=(0,Y.join)(t,...es),r=(0,Y.join)(e,"jolli","SKILL.md");try{if(!(await(0,pe.readFile)(r,"utf-8")).includes('vendor: "jolli.ai"')){fe.info("Skipping umbrella write \u2014 existing %s lacks vendor marker (user-owned)",r);return}}catch{}await Vf(e,"jolli",JS())}async function Wf(t){let e=[...pr.map(r=>r.relativeDir),es];for(let r of e){let n=(0,Y.join)(t,...r,"jolli"),o=(0,Y.join)(n,"SKILL.md"),i;try{i=await(0,pe.readFile)(o,"utf-8")}catch{continue}if(i.includes('vendor: "jolli.ai"'))try{await(0,pe.rm)(n,{recursive:!0,force:!0}),fe.info("Removed Jolli umbrella menu at %s",n)}catch(s){fe.warn("Failed to remove umbrella at %s: %s",n,s.message)}}}var MS=[...ts.filter(t=>t.name!=="jolli").map(t=>t.name),...Hf,...jf];async function Gf(t){for(let e of MS){let r=(0,Y.join)(t,...es,e),n=(0,Y.join)(r,"SKILL.md"),o;try{o=await(0,pe.readFile)(n,"utf-8")}catch{continue}if(!ns(o)){fe.info("Keeping %s \u2014 no Jolli ownership marker (user-owned)",r);continue}try{await(0,pe.rm)(r,{recursive:!0,force:!0}),fe.info("Removed legacy Jolli skill at %s",r)}catch(i){fe.warn("Failed to remove legacy skill at %s: %s",r,i.message)}}}var $S=/(?:^|\n)[ \t]*revision:\s*(\d+)/,NS=-1;function Lf(t){let e=t.match($S),r=e?Number.parseInt(e[1],10):Number.NaN;return Number.isFinite(r)?r:NS}function ns(t){return t.includes('vendor: "jolli.ai"')||t.includes("jolli-skill-version:")}async function Vf(t,e,r){let n=(0,Y.join)(t,e),o=(0,Y.join)(n,"SKILL.md"),i=Lf(r);try{let s=await(0,pe.readFile)(o,"utf-8");if(!ns(s)){fe.info("Skipping %s SKILL.md \u2014 no Jolli ownership marker (user-owned)",e);return}if(Lf(s)>=i)return}catch{}try{await(0,pe.mkdir)(n,{recursive:!0}),await C(o,r),fe.info("Wrote SKILL.md (revision %d) to %s",i,o)}catch(s){fe.warn("Failed to write %s SKILL.md: %s",e,s.message)}}var Hn=`### Shell prerequisite

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
security recipe and the dist resolver and will not produce valid output.`;function Kf(t,e){return`${Hn}

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
vector.`}function LS(){return`---
name: jolli-recall
description: Recall prior development context from Jolli for the current branch. Use when the user wants to recall, remember, or resume prior work on a branch.
metadata:
  version: "${Ct}"
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

${Kf("recall"," --format json")}

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
`}function jS(){return`---
name: jolli-search
description: Search structured commit memories across all branches \u2014 decisions, topics, files. Use when the user wants to find prior decisions, related commits, or how a topic was handled before.
metadata:
  version: "${Ct}"
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

${Kf("search"," --format json")}

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
`}function HS(){return`---
name: jolli-local-run
description: Run a Jolli workflow locally \u2014 your own agent executes the workflow's recipe (no Jolli LLM budget) and its file writes land in a git-backed Jolli Space via a branch and pull request that space-cli opens on this machine. Use when the user wants to run a Jolli workflow locally.
metadata:
  version: "${Ct}"
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

${Hn}

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
`}function FS(){return`---
name: jolli-remote-run
description: Run a Jolli workflow remotely \u2014 the Jolli backend executes the workflow server-side; this recipe triggers the run, monitors it to completion, reports the outcome (failed / cancelled / succeeded) with its article, PR, and workflow links, and offers to open any in your browser. Use when the user wants to run a Jolli workflow remotely (on the Jolli backend).
metadata:
  version: "${Ct}"
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

${Hn}

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
`}function US(){return`---
name: jolli
description: The Jolli action menu \u2014 a single front door that lists the Jolli skills (recall, search, run a workflow local or remote, workflow history) plus the Jolli MCP tools registered in this session, then routes your choice to the right one. Use when the user types /jolli or asks for the Jolli menu.
metadata:
  version: "${Ct}"
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

${Hn}

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
`}function JS(){return`---
name: jolli
description: The Jolli front door \u2014 checks how Jolli is set up in this repo, guides first-time setup through /jolli:init when something's missing, reminds you to sign in when memories can't sync yet, and otherwise shows a status snapshot and routes you to the right Jolli skill or MCP tool. Use when the user types /jolli or asks for Jolli / the Jolli menu.
metadata:
  version: "${Ct}"
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
`}var T=f("Installer");function qS(t,e){return process.platform==="linux"?t===e:t.toLowerCase()===e.toLowerCase()}async function WS(t){let e=await Ee(),r=wf(e.globalInstructions);if(r.write){let n=t?.codexDetected??await Ro(),o=t?.geminiDetected??await Ao();await Sf({claude:e.claudeEnabled!==!1,gemini:o&&e.geminiEnabled!==!1,codex:n&&e.codexEnabled!==!1})}else r.remove&&await bf()}async function Xf(t,e){let r=t??process.cwd(),n=[],o=e?.integrationsOnly===!0,i=e?.repoHooksOnly===!0;if(o&&i)return{success:!1,message:"install: integrationsOnly and repoHooksOnly are mutually exclusive",warnings:n};if(!await Tr(r))return T.info("Skipping Jolli Memory install \u2014 %s is not inside a git work tree",r),{success:!1,message:`Not a git repository \u2014 skipping Jolli Memory install (${r})`,warnings:n};T.info(i?"Installing Jolli Memory repo hooks only (no integrations)":o?"Installing Jolli Memory integrations (no hooks)":"Installing Jolli Memory hooks");let s=null;try{let a=await Ee(),l=e?.automatic?[r]:await ct(r),c=e?.automatic?{timeoutMs:200,pollMs:25}:void 0,d=(0,it.dirname)((0,zf.fileURLToPath)(__jmImportMetaUrl)),u=e?.source??"cli",m=e?.sourceTag??(u==="vscode-extension"?$i(d):"cli");if(!Yt(m))return{success:!1,message:`Refusing to install with an unsafe source tag: ${JSON.stringify(m)}`,warnings:n};let p=Ul(m),x=async()=>{if(!await ji())return!1;try{await Gd()}catch(b){T.warn("Legacy dist-path migration failed (non-fatal): %s",b.message)}if(!await Qt(m))return!1;try{let b=await Wd();b.length>0&&T.info("Pruned stale dist-paths entries: %s",b.join(", "))}catch(b){T.warn("Pruning stale dist-paths failed (non-fatal): %s",b.message)}return!0},_=c?await to(x,c):await to(x);if(!_.acquired||_.value!==!0)return{success:!1,message:"Failed to reconcile the shared runtime registry \u2014 cannot install hooks that depend on it",warnings:n};if(!o){if(s=c?await Ht(r,c):await Ht(r),!s)return{success:!1,message:"Another Jolli enable/disable operation is still running; retry shortly",warnings:n};if(e?.respectManualDisable&&await Je(r))return{success:!0,message:"Repository remains manually disabled",warnings:n};if(!e?.automatic)try{let b=await Jl(m,a);b!==null&&(b.changedTool||b.seededProvider)&&(T.info("Plugin init recorded localAgentTool=%s (source %s, previous %s, seededProvider=%s)",b.tool,m,b.previousTool??"unset",b.seededProvider),b.changedTool&&b.previousTool!==void 0&&n.push(`Recorded ${We(b.tool)} as the local agent for memory generation (was: ${We(b.previousTool)}). Change it back with jolli configure --set localAgentTool=${b.previousTool}`))}catch(b){n.push(`Could not record the local agent tool for this host: ${b.message}`)}}let D=i?!1:await Ro(),k=i?!1:await Ao(),O=i?!1:await pl(),$=i?!1:await Vl(),oe=i?!1:await ll(),G=i?!1:await tl(),ie=i?!1:await za()||await Va(),Tt=i?!1:await To(),It=i?!1:await No(),At=i?!1:await Po(),hr=i?!1:await Xa(),ls=i?!1:await hl(),cs=i?!1:await Ha(),_t={};for(let b of l){let me=await po(b),pp=(0,it.join)(me,"sessions.json");try{await(0,Fn.writeFile)(pp,JSON.stringify({version:1,sessions:{}},null,"	"),{encoding:"utf-8",flag:"wx"})}catch(st){st.code!=="EEXIST"&&T.warn("Failed to bootstrap sessions.json in %s: %s",b,st.message)}if(i){if(await rs(b),p==="claude"&&(await qf(b),await Gf(b),await Yd(b,[...jn]),a.claudeEnabled!==!1)){let st=await di(b);(b===r||_t.path===void 0)&&(_t=st)}continue}await Bf(b,{claudeEnabled:a.claudeEnabled});let ms={claude:a.claudeEnabled!==!1,codex:D,cursor:Tt,gemini:k,opencode:It,copilot:At,copilotChat:G,cline:hr,devin:ls,antigravity:cs};if(await Xd(b,[...Ff,...jn,...fr(ms).flatMap(st=>st.gitExcludePaths())]),await $f(b,ms),o||a.claudeEnabled===!1)continue;let Bn=await di(b);Bn.warning&&n.push(Bn.warning),(b===r||_t.path===void 0)&&(_t=Bn)}await Nf({claude:!1,cursor:!1,codex:D||i&&p==="codex",gemini:k,opencode:It,copilot:At,copilotChat:G,cline:hr,devin:ls,antigravity:cs}),i||await WS({codexDetected:D,geminiDetected:k});let yr={},wr={},Sr={},br={},kr={};o||(yr=await sf(r),yr.warning&&n.push(yr.warning),wr=await af(r),wr.warning&&n.push(wr.warning),Sr=await lf(r),Sr.warning&&n.push(Sr.warning),br=await cf(r),br.warning&&n.push(br.warning),kr=await uf(r),kr.warning&&n.push(kr.warning)),D&&a.codexEnabled===void 0&&(await Ze({codexEnabled:!0}),T.info("Codex detected \u2014 enabled Codex session discovery"));let Jn;if(k&&a.geminiEnabled!==!1){if(!o)for(let b of l){let me=await Hi(b);(b===r||Jn===void 0)&&(Jn=me.path)}a.geminiEnabled===void 0&&(await Ze({geminiEnabled:!0}),T.info("Gemini detected \u2014 enabled Gemini session tracking"))}a.openCodeEnabled!==!1&&$&&a.openCodeEnabled===void 0&&(await Ze({openCodeEnabled:!0}),T.info("OpenCode detected \u2014 enabled OpenCode session discovery"));let fp=i?!1:await cl(),us=a.cursorEnabled!==!1&&O,ds=a.cursorEnabled!==!1&&fp;(us||ds)&&a.cursorEnabled===void 0&&(await Ze({cursorEnabled:!0}),T.info("Cursor detected (IDE=%s, CLI=%s) \u2014 enabled session discovery",us,ds));let fs=a.copilotEnabled!==!1&&oe,ps=a.copilotEnabled!==!1&&G;if((fs||ps)&&a.copilotEnabled===void 0&&(await Ze({copilotEnabled:!0}),T.info("GitHub Copilot detected (CLI=%s, Chat=%s) \u2014 enabled session discovery",fs,ps)),ie&&a.clineEnabled===void 0&&(await Ze({clineEnabled:!0}),T.info("Cline detected \u2014 enabled Cline session discovery")),!i)for(let b of l)await GS(b);if(e?.source==="vscode-extension")T.info("Skipping v5 migration on vscode-extension source \u2014 Extension.ts owns it with UI");else if(i)T.info("Skipping v5 migration in repo-hooks-only mode \u2014 runs on every session start");else try{let{migrateSchemaToV5:b}=await Promise.resolve().then(()=>(li(),Gc)),me=await b(r);T.info("Schema v5 migration: alreadyDone=%s fresh=%s migrated=%d skipped=%d",me.alreadyDone,me.fresh,me.migrated,me.skipped)}catch(b){T.warn("Schema v5 migration failed (non-fatal): %s",b.message)}if(e?.clearManualDisableOnSuccess&&!o)try{await no(r,!1)}catch(b){let me=b.message;n.push(`Enabled, but could not clear the manual-disable opt-out (${me}). Run enable again to clear it.`),T.warn("Could not clear manual-disable opt-out after enable (non-fatal): %s",me)}return T.info("Installation complete"),{success:!0,message:"Jolli Memory hooks installed successfully",warnings:n,claudeSettingsPath:_t.path,gitHookPath:yr.path,postRewriteHookPath:wr.path,prepareMsgHookPath:Sr.path,postMergeHookPath:br.path,prePushHookPath:kr.path,geminiSettingsPath:Jn}}catch(a){let l=`Installation failed: ${a.message}`;return T.error(l),{success:!1,message:l,warnings:n}}finally{s&&await s.release()}}async function GS(t){let e=J(t);try{await(0,Fn.stat)(e)}catch{return}let r=ye();if(qS((0,it.resolve)(e),(0,it.resolve)(r)))return;let n=await ft(e),o={};for(let[c,d]of Object.entries(n))d!==void 0&&(o[c]=d);if(Object.keys(o).length===0)return;let i=await ft(r),s={};for(let[c,d]of Object.entries(o))i[c]===void 0&&(s[c]=d);Object.keys(s).length>0&&await Nr(s,r);let a={};for(let c of Object.keys(s))a[c]=void 0;Object.keys(a).length>0&&await Nr(a,e);let l=Object.keys(o).filter(c=>!(c in s));for(let c of l)T.warn("Worktree %s field %s not migrated: worktree=%s, global=%s (global value takes effect)",t,c,String(o[c]),String(i[c]));T.info("Migrated %d config fields from worktree %s to global",Object.keys(s).length,t)}async function Yf(t,e){let r=t??process.cwd(),n=[],o=e?.integrationsOnly===!0;T.info(o?"Removing Jolli Memory integrations (MCP)":"Removing Jolli Memory hooks");let i=null;try{if(!o&&!e?.repoLockHeld&&(i=await Ht(r),!i))return{success:!1,message:"Another Jolli enable/disable operation is still running; retry shortly",warnings:n};!o&&e?.persistManualDisable&&await no(r,!0);let s;try{s=await ct(r)}catch{s=[r]}if(o){for(let l of s)try{await Zi(l)}catch(c){T.warn("MCP removal failed in %s (non-fatal): %s",l,c.message)}return T.info("Integrations removal complete"),{success:!0,message:"Jolli Memory integrations removed (MCP)",warnings:n}}for(let l of s){let c=await fi(l);c.warning&&n.push(c.warning),await Fi(l);try{await Zi(l)}catch(d){T.warn("MCP removal failed in %s (non-fatal): %s",l,d.message)}e?.preserveMenu||await Wf(l)}let a=await df(r);return a.warning&&n.push(a.warning),await ff(r),await pf(r),await mf(r),await gf(r),e?.preserveMenu||await Qd(r,Uf),n.push("The `jolli-*` skill files were left in place. To remove them manually: `rm -rf .agents/skills/jolli-* .claude/skills/jolli-*` and delete the `# >>> jolli skill exclude >>>` block from `.git/info/exclude` if you no longer want it."),T.info("Uninstallation complete"),{success:!0,message:"Jolli Memory hooks removed successfully",warnings:n}}catch(s){let a=`Uninstallation failed: ${s.message}`;return T.error(a),{success:!1,message:a,warnings:n}}finally{i&&await i.release()}}y();function Un(){return new Promise((t,e)=>{let r=[];process.stdin.setEncoding("utf-8"),process.stdin.on("data",n=>r.push(n)),process.stdin.on("end",()=>{process.stdin.destroy(),t(r.join(""))}),process.stdin.on("error",e)})}var Q=require("node:fs"),be=require("node:path"),tp=require("node:url");ge();function Qf(t){return t.aiProvider==="local-agent"?!0:t.aiProvider==="jolli"?!!t.jolliApiKey:t.aiProvider==="anthropic"?!!(t.apiKey||process.env.ANTHROPIC_API_KEY):!!(t.apiKey||process.env.ANTHROPIC_API_KEY||t.jolliApiKey)}ve();ri();rn();on();yt();y();Ce();Xr();function VS(t){return[`1) Re-authenticate ${We(t)}:  ${Bl(t)}`,"2) Or switch the provider:   jolli configure --set aiProvider=anthropic --set apiKey=sk-ant-\u2026","                             (or --set aiProvider=jolli to use Jolli)"]}function KS(t,e){let r=ql(t);return r===null?[]:[`${e}${r}`]}function Zf(t){return[`[Jolli Memory] Memory generation failed for a recent commit: ${We(t)} authentication expired or is unavailable.`,...KS(t,""),"\u2192 Fix with either:",...VS(t).map(e=>`    ${e}`),"This message clears automatically once memory generation succeeds again."].join(`
`)}var Se=f("SessionStartHook"),zS=new Set(["main","master","develop","development","staging","production"]),os=500,rp="login-reminder-dismissed";function XS(t){let e=t==="claude-plugin"?"Run /jolli:init to finish setup.":t==="codex-plugin"?"Run $jolli:init to finish setup.":null;return e===null?null:["[Jolli Memory] Memory generation is not configured for this repository.",`\u2192 ${e}`,`(To stop this reminder, create an empty file at .jolli/jollimemory/${rp}.)`].join(`
`)}function YS(t,e,r){return e||r?null:XS(t)}async function np(t,e){let r=zr(t);if(r===void 0||e.aiProvider!==void 0)return!1;try{return await Lr(o=>o.aiProvider===void 0?{update:{aiProvider:"local-agent",localAgentTool:r},result:!0}:{update:null,result:!1})?(Se.info("Seeded default aiProvider=local-agent tool=%s for the %s surface",r,t),!0):(Se.info("Skipped seeding the %s default \u2014 another writer set aiProvider first",t),!1)}catch(n){return Se.info("Failed to seed default local-agent provider: %s",n.message),!1}}async function QS(t,e=Lo()){let r=await Ee(),n=Qf(r),o=(0,be.join)(t,".jolli","jollimemory",rp),i=(0,Q.existsSync)(o);if(n&&i)try{(0,Q.rmSync)(o)}catch{}return YS(e,n,i)}async function ZS(t,e){try{let r=await $t(Z,`summaries/${t}.json`,e);return r?xc(JSON.parse(r)):!1}catch(r){return Se.info("Failed to check auth-failure state for %s: %s",t.substring(0,8),r.message),!1}}async function eb(t,e=Lo()){let r=zr(e);if(r===void 0)return null;let n=sp(t);if(!n)return null;let o=await si(t);if(!o)return null;let i=o.entries.filter(l=>l.branch===n&&(l.parentCommitHash===null||l.parentCommitHash===void 0));if(i.length===0)return null;let s=[...i].sort((l,c)=>new Date(q(c)).getTime()-new Date(q(l)).getTime())[0];if(!await ZS(s.commitHash,t))return null;let a=await Ee();return Zf(a.localAgentTool??r)}async function tb(){if(Rr()){Se.info("SessionStart hook skipped \u2014 running inside a jollimemory-spawned local agent");return}try{let t=await Un(),{cwd:e}=JSON.parse(t),r=Is(e??process.cwd());if(xr(r),Se.info("SessionStartHook invoked (cwd=%s)",r),await Je(r)){Se.info("SessionStart hook skipped \u2014 repository manually disabled");return}let n=await ss(r,"shared",{includeBriefing:!0,includePluginReminders:!1});n?process.stdout.write(n):Se.info("No briefing or reminder generated (skipped or timed out)")}catch(t){Se.info("SessionStartHook failed: %s",t.message)}}async function ss(t,e,r={}){let n=r.includeBriefing!==!1,o=r.includePluginReminders!==!1,[i,s,a]=await Promise.all([n?Promise.race([rb(t,e),is(os)]):Promise.resolve(null),o?Promise.race([eb(t,e),is(os)]):Promise.resolve(null),o?Promise.race([QS(t,e),is(os)]):Promise.resolve(null)]),l=[s,a,i].filter(c=>!!c);return l.length===0?null:(Se.info("SessionStart output (%d sections)",l.length),l.join(`

`))}async function rb(t,e){let r=sp(t);if(!r||zS.has(r))return null;let n=cb(t,r,e);if(n)return n;let o=await si(t);if(!o)return null;let i=o.entries.filter(x=>x.branch===r&&(x.parentCommitHash===null||x.parentCommitHash===void 0));if(i.length===0)return null;let s=[...i].sort((x,_)=>new Date(q(_)).getTime()-new Date(q(x)).getTime()),a=s[0],l=s[s.length-1];if(s.length===1&&db(q(a)))return null;let c=await nb(a.commitHash,t),d=ob(t,r),u=ib(s),m=sb(r,s,a,l,c,d,u,e),p=ip(t);return ub(t,r,p??a.commitHash,m,e),m}async function nb(t,e){try{let r=await $t(Z,`summaries/${t}.json`,e);if(!r)return{lastTopicTitle:null,keyDecisions:[]};let n=JSON.parse(r),o=ht(n),i=o.length>0?o[o.length-1].title:null,s=[];for(let a of o)a.decisions&&a.decisions.trim().length>0&&s.push(a.decisions);return{lastTopicTitle:i,keyDecisions:s}}catch(r){return Se.info("Failed to load last summary: %s",r.message),{lastTopicTitle:null,keyDecisions:[]}}}function ob(t,e){try{let r=(0,be.join)(t,".jolli","jollimemory","plans.json");if(!(0,Q.existsSync)(r))return[];let n=JSON.parse((0,Q.readFileSync)(r,"utf-8")),o=$a(n).registry,i=[];for(let s of Object.values(o.plans))!s.commitHash&&s.title&&i.push(s.title);return i}catch{return[]}}function ib(t){let e=0,r=0,n=0,o=!1;for(let i of t)i.diffStats&&(e+=i.diffStats.filesChanged,r+=i.diffStats.insertions,n+=i.diffStats.deletions,o=!0);return o?{filesChanged:e,insertions:r,deletions:n}:null}function sb(t,e,r,n,o,i,s,a){let l=e.length,c=ep(q(n)),d=ep(q(r)),u=fb(q(r),new Date().toISOString()),m=[];m.push(`[Jolli Memory \u2014 ${t}]`);let p=`${l} commits (${c} ~ ${d})`;s&&(p+=` | ${s.filesChanged} files, +${s.insertions} -${s.deletions}`),m.push(p);let x=o.lastTopicTitle??r.commitMessage;if(m.push(`Last: ${x} (${d})`),o.keyDecisions.length>0){let D=lb(o.keyDecisions);m.push(`Decisions: ${D}`)}i.length>0&&m.push(`Plans: ${i.join("; ")}`);let _=ab(u,a);return _&&m.push(_),m.join(`
`)}function ab(t,e){if(t<=0)return null;let r=e==="claude-plugin"?"/jolli:recall":e==="codex-plugin"?"$jolli:recall":"`jolli recall`";return t>3?`Warning: ${t} days since last commit. Run ${r} for full context.`:`Tip: run ${r} for full context`}function lb(t){let r=[],n=0;for(let o of t){let i=o.replace(/[.;]\s*$/,"").trim();if(i.length>200&&(i=`${i.slice(0,199)}\u2026`),n+i.length>200&&r.length>0)break;r.push(i),n+=i.length+2}return r.join("; ")}function op(t){return(0,be.join)(t,".jolli","jollimemory","briefing-cache.json")}function cb(t,e,r){let n=op(t);if(!(0,Q.existsSync)(n))return null;try{let o=JSON.parse((0,Q.readFileSync)(n,"utf-8"));if(o.branch!==e||o.clientKind!==r)return null;let i=ip(t);return!i||o.lastCommitHash!==i?null:o.briefingText}catch{return null}}function ub(t,e,r,n,o){let i=op(t),s={branch:e,lastCommitHash:r,briefingText:n,clientKind:o,generatedAt:new Date().toISOString()};try{let a=(0,be.dirname)(i);(0,Q.existsSync)(a)||(0,Q.mkdirSync)(a,{recursive:!0}),(0,Q.writeFileSync)(i,JSON.stringify(s,null,"	"),"utf-8")}catch{}}function ip(t){try{return Fe("git",["rev-parse","HEAD"],{encoding:"utf-8",cwd:t}).trim()||null}catch{return null}}function sp(t){try{return Fe("git",["branch","--show-current"],{encoding:"utf-8",cwd:t}).trim()||null}catch{return null}}function is(t){return new Promise(e=>{setTimeout(()=>e(null),t).unref()})}function db(t){let e=new Date(t),r=new Date;return e.getFullYear()===r.getFullYear()&&e.getMonth()===r.getMonth()&&e.getDate()===r.getDate()}function fb(t,e){let r=new Date(t).getTime(),n=new Date(e).getTime();return Math.floor(Math.abs(n-r)/(1e3*60*60*24))}function ep(t){return t?t.split("T")[0]:"unknown"}function pb(){let t=process.argv[1];if(process.env.VITEST||!t||(0,be.resolve)(t)!==(0,be.resolve)((0,tp.fileURLToPath)(__jmImportMetaUrl)))return!1;let e=(0,be.basename)(t).toLowerCase();return e==="sessionstarthook.js"||e==="sessionstarthook.ts"}pb()&&tb();var mr=f("CodexPluginBootstrapHook"),as="codex-plugin",ap={timeoutMs:200,pollMs:25};function cp(t){return t?{hookSpecificOutput:{hookEventName:"SessionStart",additionalContext:t}}:null}async function up(t){if(!await Tr(t))return null;let e=await B(["rev-parse","--show-toplevel"],t);if(e.exitCode!==0||!e.stdout.trim())return null;let r=e.stdout.trim();xr(r);let n=!1;if(!(await Zn(r,async()=>{n=await Je(r),n&&await Yf(r,{preserveMenu:!0,repoLockHeld:!0})},ap)).acquired)return mr.info("Codex plugin bootstrap deferred \u2014 repo hook lifecycle lock is busy"),null;if(n)return null;let i=await Xf(r,{repoHooksOnly:!0,sourceTag:as,respectManualDisable:!0,automatic:!0});if(!i.success)return mr.warn("Codex plugin repo-hook reconciliation failed: %s",i.message),null;let s=null;return(await Zn(r,async()=>{if(await Je(r))return;let l=await Ee();l.codexEnabled!==!1&&(await np(as,l),s=await ss(r,as,{includeBriefing:!0,includePluginReminders:!0}))},ap)).acquired||mr.info("Codex plugin context deferred \u2014 repo hook lifecycle lock is busy"),cp(s)}async function dp(){if(Rr()){mr.info("Codex plugin bootstrap skipped \u2014 running inside a jollimemory-spawned local agent");return}try{let t=await Un(),e=t.trim()?JSON.parse(t):{},r=await up(e.cwd??process.cwd());r&&process.stdout.write(JSON.stringify(r))}catch(t){mr.info("Codex plugin bootstrap failed: %s",t.message)}}function mb(){let t=process.argv[1];if(process.env.VITEST||!t||(0,gr.resolve)(t)!==(0,gr.resolve)((0,lp.fileURLToPath)(__jmImportMetaUrl)))return!1;let e=(0,gr.basename)(t).toLowerCase();return e==="codexpluginbootstraphook.js"||e==="codexpluginbootstraphook.ts"}mb()&&dp();0&&(module.exports={buildCodexBootstrapOutput,main,runCodexPluginBootstrap});
