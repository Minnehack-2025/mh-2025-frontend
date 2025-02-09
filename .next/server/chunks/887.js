"use strict";exports.id=887,exports.ids=[887],exports.modules={9952:(e,r,t)=>{t.d(r,{s:()=>s,t:()=>l});var o=t(8009);function n(e,r){if("function"==typeof e)return e(r);null!=e&&(e.current=r)}function l(...e){return r=>{let t=!1,o=e.map(e=>{let o=n(e,r);return t||"function"!=typeof o||(t=!0),o});if(t)return()=>{for(let r=0;r<o.length;r++){let t=o[r];"function"==typeof t?t():n(e[r],null)}}}}function s(...e){return o.useCallback(l(...e),e)}},2405:(e,r,t)=>{t.d(r,{b:()=>i});var o=t(8009),n=t(830),l=t(5512),s=o.forwardRef((e,r)=>(0,l.jsx)(n.sG.label,{...e,ref:r,onMouseDown:r=>{r.target.closest("button, input, select, textarea")||(e.onMouseDown?.(r),!r.defaultPrevented&&r.detail>1&&r.preventDefault())}}));s.displayName="Label";var i=s},830:(e,r,t)=>{t.d(r,{hO:()=>a,sG:()=>i});var o=t(8009),n=t(5740),l=t(2705),s=t(5512),i=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=o.forwardRef((e,t)=>{let{asChild:o,...n}=e,i=o?l.DX:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,s.jsx)(i,{...n,ref:t})});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{});function a(e,r){e&&n.flushSync(()=>e.dispatchEvent(r))}},2705:(e,r,t)=>{t.d(r,{DX:()=>s});var o=t(8009),n=t(9952),l=t(5512),s=o.forwardRef((e,r)=>{let{children:t,...n}=e,s=o.Children.toArray(t),a=s.find(d);if(a){let e=a.props.children,t=s.map(r=>r!==a?r:o.Children.count(e)>1?o.Children.only(null):o.isValidElement(e)?e.props.children:null);return(0,l.jsx)(i,{...n,ref:r,children:o.isValidElement(e)?o.cloneElement(e,void 0,t):null})}return(0,l.jsx)(i,{...n,ref:r,children:t})});s.displayName="Slot";var i=o.forwardRef((e,r)=>{let{children:t,...l}=e;if(o.isValidElement(t)){let e=function(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,t=r&&"isReactWarning"in r&&r.isReactWarning;return t?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(t),s=function(e,r){let t={...r};for(let o in r){let n=e[o],l=r[o];/^on[A-Z]/.test(o)?n&&l?t[o]=(...e)=>{l(...e),n(...e)}:n&&(t[o]=n):"style"===o?t[o]={...n,...l}:"className"===o&&(t[o]=[n,l].filter(Boolean).join(" "))}return{...e,...t}}(l,t.props);return t.type!==o.Fragment&&(s.ref=r?(0,n.t)(r,e):e),o.cloneElement(t,s)}return o.Children.count(t)>1?o.Children.only(null):null});i.displayName="SlotClone";var a=({children:e})=>(0,l.jsx)(l.Fragment,{children:e});function d(e){return o.isValidElement(e)&&e.type===a}},1643:(e,r,t)=>{t.d(r,{F:()=>s});var o=t(2281);let n=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,l=o.$,s=(e,r)=>t=>{var o;if((null==r?void 0:r.variants)==null)return l(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:s,defaultVariants:i}=r,a=Object.keys(s).map(e=>{let r=null==t?void 0:t[e],o=null==i?void 0:i[e];if(null===r)return null;let l=n(r)||n(o);return s[e][l]}),d=t&&Object.entries(t).reduce((e,r)=>{let[t,o]=r;return void 0===o||(e[t]=o),e},{});return l(e,a,null==r?void 0:null===(o=r.compoundVariants)||void 0===o?void 0:o.reduce((e,r)=>{let{class:t,className:o,...n}=r;return Object.entries(n).every(e=>{let[r,t]=e;return Array.isArray(t)?t.includes({...i,...d}[r]):({...i,...d})[r]===t})?[...e,t,o]:e},[]),null==t?void 0:t.class,null==t?void 0:t.className)}},2281:(e,r,t)=>{t.d(r,{$:()=>o});function o(){for(var e,r,t=0,o="",n=arguments.length;t<n;t++)(e=arguments[t])&&(r=function e(r){var t,o,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r){if(Array.isArray(r)){var l=r.length;for(t=0;t<l;t++)r[t]&&(o=e(r[t]))&&(n&&(n+=" "),n+=o)}else for(o in r)r[o]&&(n&&(n+=" "),n+=o)}return n}(e))&&(o&&(o+=" "),o+=r);return o}},4805:(e,r,t)=>{t.d(r,{QP:()=>eu});let o=e=>{let r=i(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:e=>{let t=e.split("-");return""===t[0]&&1!==t.length&&t.shift(),n(t,r)||s(e)},getConflictingClassGroupIds:(e,r)=>{let n=t[e]||[];return r&&o[e]?[...n,...o[e]]:n}}},n=(e,r)=>{if(0===e.length)return r.classGroupId;let t=e[0],o=r.nextPart.get(t),l=o?n(e.slice(1),o):void 0;if(l)return l;if(0===r.validators.length)return;let s=e.join("-");return r.validators.find(({validator:e})=>e(s))?.classGroupId},l=/^\[(.+)\]$/,s=e=>{if(l.test(e)){let r=l.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},i=e=>{let{theme:r,classGroups:t}=e,o={nextPart:new Map,validators:[]};for(let e in t)a(t[e],o,e,r);return o},a=(e,r,t,o)=>{e.forEach(e=>{if("string"==typeof e){(""===e?r:d(r,e)).classGroupId=t;return}if("function"==typeof e){if(c(e)){a(e(o),r,t,o);return}r.validators.push({validator:e,classGroupId:t});return}Object.entries(e).forEach(([e,n])=>{a(n,d(r,e),t,o)})})},d=(e,r)=>{let t=e;return r.split("-").forEach(e=>{t.nextPart.has(e)||t.nextPart.set(e,{nextPart:new Map,validators:[]}),t=t.nextPart.get(e)}),t},c=e=>e.isThemeGetter,u=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let r=0,t=new Map,o=new Map,n=(n,l)=>{t.set(n,l),++r>e&&(r=0,o=t,t=new Map)};return{get(e){let r=t.get(e);return void 0!==r?r:void 0!==(r=o.get(e))?(n(e,r),r):void 0},set(e,r){t.has(e)?t.set(e,r):n(e,r)}}},p=e=>{let{prefix:r,experimentalParseClassName:t}=e,o=e=>{let r;let t=[],o=0,n=0,l=0;for(let s=0;s<e.length;s++){let i=e[s];if(0===o&&0===n){if(":"===i){t.push(e.slice(l,s)),l=s+1;continue}if("/"===i){r=s;continue}}"["===i?o++:"]"===i?o--:"("===i?n++:")"===i&&n--}let s=0===t.length?e:e.substring(l),i=b(s);return{modifiers:t,hasImportantModifier:i!==s,baseClassName:i,maybePostfixModifierPosition:r&&r>l?r-l:void 0}};if(r){let e=r+":",t=o;o=r=>r.startsWith(e)?t(r.substring(e.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:r,maybePostfixModifierPosition:void 0}}if(t){let e=o;o=r=>t({className:r,parseClassName:e})}return o},b=e=>e.endsWith("!")?e.substring(0,e.length-1):e.startsWith("!")?e.substring(1):e,f=e=>{let r=Object.fromEntries(e.orderSensitiveModifiers.map(e=>[e,!0]));return e=>{if(e.length<=1)return e;let t=[],o=[];return e.forEach(e=>{"["===e[0]||r[e]?(t.push(...o.sort(),e),o=[]):o.push(e)}),t.push(...o.sort()),t}},m=e=>({cache:u(e.cacheSize),parseClassName:p(e),sortModifiers:f(e),...o(e)}),g=/\s+/,h=(e,r)=>{let{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:n,sortModifiers:l}=r,s=[],i=e.trim().split(g),a="";for(let e=i.length-1;e>=0;e-=1){let r=i[e],{isExternal:d,modifiers:c,hasImportantModifier:u,baseClassName:p,maybePostfixModifierPosition:b}=t(r);if(d){a=r+(a.length>0?" "+a:a);continue}let f=!!b,m=o(f?p.substring(0,b):p);if(!m){if(!f||!(m=o(p))){a=r+(a.length>0?" "+a:a);continue}f=!1}let g=l(c).join(":"),h=u?g+"!":g,x=h+m;if(s.includes(x))continue;s.push(x);let v=n(m,f);for(let e=0;e<v.length;++e){let r=v[e];s.push(h+r)}a=r+(a.length>0?" "+a:a)}return a};function x(){let e,r,t=0,o="";for(;t<arguments.length;)(e=arguments[t++])&&(r=v(e))&&(o&&(o+=" "),o+=r);return o}let v=e=>{let r;if("string"==typeof e)return e;let t="";for(let o=0;o<e.length;o++)e[o]&&(r=v(e[o]))&&(t&&(t+=" "),t+=r);return t},w=e=>{let r=r=>r[e]||[];return r.isThemeGetter=!0,r},y=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,k=/^\((?:(\w[\w-]*):)?(.+)\)$/i,z=/^\d+\/\d+$/,j=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,N=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,C=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,M=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,P=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,E=e=>z.test(e),G=e=>!!e&&!Number.isNaN(Number(e)),S=e=>!!e&&Number.isInteger(Number(e)),$=e=>e.endsWith("%")&&G(e.slice(0,-1)),O=e=>j.test(e),I=()=>!0,R=e=>N.test(e)&&!C.test(e),W=()=>!1,D=e=>M.test(e),A=e=>P.test(e),V=e=>!T(e)&&!Q(e),F=e=>ee(e,es,W),T=e=>y.test(e),q=e=>ee(e,ei,R),X=e=>ee(e,ea,G),_=e=>ee(e,et,W),B=e=>ee(e,en,A),L=e=>ee(e,W,D),Q=e=>k.test(e),Z=e=>er(e,ei),H=e=>er(e,ed),J=e=>er(e,et),K=e=>er(e,es),U=e=>er(e,en),Y=e=>er(e,ec,!0),ee=(e,r,t)=>{let o=y.exec(e);return!!o&&(o[1]?r(o[1]):t(o[2]))},er=(e,r,t=!1)=>{let o=k.exec(e);return!!o&&(o[1]?r(o[1]):t)},et=e=>"position"===e,eo=new Set(["image","url"]),en=e=>eo.has(e),el=new Set(["length","size","percentage"]),es=e=>el.has(e),ei=e=>"length"===e,ea=e=>"number"===e,ed=e=>"family-name"===e,ec=e=>"shadow"===e;Symbol.toStringTag;let eu=function(e,...r){let t,o,n;let l=function(i){return o=(t=m(r.reduce((e,r)=>r(e),e()))).cache.get,n=t.cache.set,l=s,s(i)};function s(e){let r=o(e);if(r)return r;let l=h(e,t);return n(e,l),l}return function(){return l(x.apply(null,arguments))}}(()=>{let e=w("color"),r=w("font"),t=w("text"),o=w("font-weight"),n=w("tracking"),l=w("leading"),s=w("breakpoint"),i=w("container"),a=w("spacing"),d=w("radius"),c=w("shadow"),u=w("inset-shadow"),p=w("drop-shadow"),b=w("blur"),f=w("perspective"),m=w("aspect"),g=w("ease"),h=w("animate"),x=()=>["auto","avoid","all","avoid-page","page","left","right","column"],v=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],y=()=>["auto","hidden","clip","visible","scroll"],k=()=>["auto","contain","none"],z=()=>[E,"px","full","auto",Q,T,a],j=()=>[S,"none","subgrid",Q,T],N=()=>["auto",{span:["full",S,Q,T]},Q,T],C=()=>[S,"auto",Q,T],M=()=>["auto","min","max","fr",Q,T],P=()=>[Q,T,a],R=()=>["start","end","center","between","around","evenly","stretch","baseline"],W=()=>["start","end","center","stretch"],D=()=>[Q,T,a],A=()=>["px",...D()],ee=()=>["px","auto",...D()],er=()=>[E,"auto","px","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",Q,T,a],et=()=>[e,Q,T],eo=()=>[$,q],en=()=>["","none","full",d,Q,T],el=()=>["",G,Z,q],es=()=>["solid","dashed","dotted","double"],ei=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ea=()=>["","none",b,Q,T],ed=()=>["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Q,T],ec=()=>["none",G,Q,T],eu=()=>["none",G,Q,T],ep=()=>[G,Q,T],eb=()=>[E,"full","px",Q,T,a];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[O],breakpoint:[O],color:[I],container:[O],"drop-shadow":[O],ease:["in","out","in-out"],font:[V],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[O],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[O],shadow:[O],spacing:[G],text:[O],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",E,T,Q,m]}],container:["container"],columns:[{columns:[G,T,Q,i]}],"break-after":[{"break-after":x()}],"break-before":[{"break-before":x()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...v(),T,Q]}],overflow:[{overflow:y()}],"overflow-x":[{"overflow-x":y()}],"overflow-y":[{"overflow-y":y()}],overscroll:[{overscroll:k()}],"overscroll-x":[{"overscroll-x":k()}],"overscroll-y":[{"overscroll-y":k()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:z()}],"inset-x":[{"inset-x":z()}],"inset-y":[{"inset-y":z()}],start:[{start:z()}],end:[{end:z()}],top:[{top:z()}],right:[{right:z()}],bottom:[{bottom:z()}],left:[{left:z()}],visibility:["visible","invisible","collapse"],z:[{z:[S,"auto",Q,T]}],basis:[{basis:[E,"full","auto",Q,T,i,a]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[G,E,"auto","initial","none",T]}],grow:[{grow:["",G,Q,T]}],shrink:[{shrink:["",G,Q,T]}],order:[{order:[S,"first","last","none",Q,T]}],"grid-cols":[{"grid-cols":j()}],"col-start-end":[{col:N()}],"col-start":[{"col-start":C()}],"col-end":[{"col-end":C()}],"grid-rows":[{"grid-rows":j()}],"row-start-end":[{row:N()}],"row-start":[{"row-start":C()}],"row-end":[{"row-end":C()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":M()}],"auto-rows":[{"auto-rows":M()}],gap:[{gap:P()}],"gap-x":[{"gap-x":P()}],"gap-y":[{"gap-y":P()}],"justify-content":[{justify:[...R(),"normal"]}],"justify-items":[{"justify-items":[...W(),"normal"]}],"justify-self":[{"justify-self":["auto",...W()]}],"align-content":[{content:["normal",...R()]}],"align-items":[{items:[...W(),"baseline"]}],"align-self":[{self:["auto",...W(),"baseline"]}],"place-content":[{"place-content":R()}],"place-items":[{"place-items":[...W(),"baseline"]}],"place-self":[{"place-self":["auto",...W()]}],p:[{p:A()}],px:[{px:A()}],py:[{py:A()}],ps:[{ps:A()}],pe:[{pe:A()}],pt:[{pt:A()}],pr:[{pr:A()}],pb:[{pb:A()}],pl:[{pl:A()}],m:[{m:ee()}],mx:[{mx:ee()}],my:[{my:ee()}],ms:[{ms:ee()}],me:[{me:ee()}],mt:[{mt:ee()}],mr:[{mr:ee()}],mb:[{mb:ee()}],ml:[{ml:ee()}],"space-x":[{"space-x":D()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":D()}],"space-y-reverse":["space-y-reverse"],size:[{size:er()}],w:[{w:[i,"screen",...er()]}],"min-w":[{"min-w":[i,"screen","none",...er()]}],"max-w":[{"max-w":[i,"screen","none","prose",{screen:[s]},...er()]}],h:[{h:["screen",...er()]}],"min-h":[{"min-h":["screen","none",...er()]}],"max-h":[{"max-h":["screen",...er()]}],"font-size":[{text:["base",t,Z,q]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[o,Q,X]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",$,T]}],"font-family":[{font:[H,T,r]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[n,Q,T]}],"line-clamp":[{"line-clamp":[G,"none",Q,X]}],leading:[{leading:[Q,T,l,a]}],"list-image":[{"list-image":["none",Q,T]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Q,T]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:et()}],"text-color":[{text:et()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...es(),"wavy"]}],"text-decoration-thickness":[{decoration:[G,"from-font","auto",Q,q]}],"text-decoration-color":[{decoration:et()}],"underline-offset":[{"underline-offset":[G,"auto",Q,T]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:["px",...D()]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Q,T]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Q,T]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...v(),J,_]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","space","round"]}]}],"bg-size":[{bg:["auto","cover","contain",K,F]}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},S,Q,T],radial:["",Q,T],conic:[S,Q,T]},U,B]}],"bg-color":[{bg:et()}],"gradient-from-pos":[{from:eo()}],"gradient-via-pos":[{via:eo()}],"gradient-to-pos":[{to:eo()}],"gradient-from":[{from:et()}],"gradient-via":[{via:et()}],"gradient-to":[{to:et()}],rounded:[{rounded:en()}],"rounded-s":[{"rounded-s":en()}],"rounded-e":[{"rounded-e":en()}],"rounded-t":[{"rounded-t":en()}],"rounded-r":[{"rounded-r":en()}],"rounded-b":[{"rounded-b":en()}],"rounded-l":[{"rounded-l":en()}],"rounded-ss":[{"rounded-ss":en()}],"rounded-se":[{"rounded-se":en()}],"rounded-ee":[{"rounded-ee":en()}],"rounded-es":[{"rounded-es":en()}],"rounded-tl":[{"rounded-tl":en()}],"rounded-tr":[{"rounded-tr":en()}],"rounded-br":[{"rounded-br":en()}],"rounded-bl":[{"rounded-bl":en()}],"border-w":[{border:el()}],"border-w-x":[{"border-x":el()}],"border-w-y":[{"border-y":el()}],"border-w-s":[{"border-s":el()}],"border-w-e":[{"border-e":el()}],"border-w-t":[{"border-t":el()}],"border-w-r":[{"border-r":el()}],"border-w-b":[{"border-b":el()}],"border-w-l":[{"border-l":el()}],"divide-x":[{"divide-x":el()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":el()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...es(),"hidden","none"]}],"divide-style":[{divide:[...es(),"hidden","none"]}],"border-color":[{border:et()}],"border-color-x":[{"border-x":et()}],"border-color-y":[{"border-y":et()}],"border-color-s":[{"border-s":et()}],"border-color-e":[{"border-e":et()}],"border-color-t":[{"border-t":et()}],"border-color-r":[{"border-r":et()}],"border-color-b":[{"border-b":et()}],"border-color-l":[{"border-l":et()}],"divide-color":[{divide:et()}],"outline-style":[{outline:[...es(),"none","hidden"]}],"outline-offset":[{"outline-offset":[G,Q,T]}],"outline-w":[{outline:["",G,Z,q]}],"outline-color":[{outline:[e]}],shadow:[{shadow:["","none",c,Y,L]}],"shadow-color":[{shadow:et()}],"inset-shadow":[{"inset-shadow":["none",Q,T,u]}],"inset-shadow-color":[{"inset-shadow":et()}],"ring-w":[{ring:el()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:et()}],"ring-offset-w":[{"ring-offset":[G,q]}],"ring-offset-color":[{"ring-offset":et()}],"inset-ring-w":[{"inset-ring":el()}],"inset-ring-color":[{"inset-ring":et()}],opacity:[{opacity:[G,Q,T]}],"mix-blend":[{"mix-blend":[...ei(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ei()}],filter:[{filter:["","none",Q,T]}],blur:[{blur:ea()}],brightness:[{brightness:[G,Q,T]}],contrast:[{contrast:[G,Q,T]}],"drop-shadow":[{"drop-shadow":["","none",p,Q,T]}],grayscale:[{grayscale:["",G,Q,T]}],"hue-rotate":[{"hue-rotate":[G,Q,T]}],invert:[{invert:["",G,Q,T]}],saturate:[{saturate:[G,Q,T]}],sepia:[{sepia:["",G,Q,T]}],"backdrop-filter":[{"backdrop-filter":["","none",Q,T]}],"backdrop-blur":[{"backdrop-blur":ea()}],"backdrop-brightness":[{"backdrop-brightness":[G,Q,T]}],"backdrop-contrast":[{"backdrop-contrast":[G,Q,T]}],"backdrop-grayscale":[{"backdrop-grayscale":["",G,Q,T]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[G,Q,T]}],"backdrop-invert":[{"backdrop-invert":["",G,Q,T]}],"backdrop-opacity":[{"backdrop-opacity":[G,Q,T]}],"backdrop-saturate":[{"backdrop-saturate":[G,Q,T]}],"backdrop-sepia":[{"backdrop-sepia":["",G,Q,T]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":D()}],"border-spacing-x":[{"border-spacing-x":D()}],"border-spacing-y":[{"border-spacing-y":D()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Q,T]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[G,"initial",Q,T]}],ease:[{ease:["linear","initial",g,Q,T]}],delay:[{delay:[G,Q,T]}],animate:[{animate:["none",h,Q,T]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[f,Q,T]}],"perspective-origin":[{"perspective-origin":ed()}],rotate:[{rotate:ec()}],"rotate-x":[{"rotate-x":ec()}],"rotate-y":[{"rotate-y":ec()}],"rotate-z":[{"rotate-z":ec()}],scale:[{scale:eu()}],"scale-x":[{"scale-x":eu()}],"scale-y":[{"scale-y":eu()}],"scale-z":[{"scale-z":eu()}],"scale-3d":["scale-3d"],skew:[{skew:ep()}],"skew-x":[{"skew-x":ep()}],"skew-y":[{"skew-y":ep()}],transform:[{transform:[Q,T,"","none","gpu","cpu"]}],"transform-origin":[{origin:ed()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:eb()}],"translate-x":[{"translate-x":eb()}],"translate-y":[{"translate-y":eb()}],"translate-z":[{"translate-z":eb()}],"translate-none":["translate-none"],accent:[{accent:et()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:et()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Q,T]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":D()}],"scroll-mx":[{"scroll-mx":D()}],"scroll-my":[{"scroll-my":D()}],"scroll-ms":[{"scroll-ms":D()}],"scroll-me":[{"scroll-me":D()}],"scroll-mt":[{"scroll-mt":D()}],"scroll-mr":[{"scroll-mr":D()}],"scroll-mb":[{"scroll-mb":D()}],"scroll-ml":[{"scroll-ml":D()}],"scroll-p":[{"scroll-p":D()}],"scroll-px":[{"scroll-px":D()}],"scroll-py":[{"scroll-py":D()}],"scroll-ps":[{"scroll-ps":D()}],"scroll-pe":[{"scroll-pe":D()}],"scroll-pt":[{"scroll-pt":D()}],"scroll-pr":[{"scroll-pr":D()}],"scroll-pb":[{"scroll-pb":D()}],"scroll-pl":[{"scroll-pl":D()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Q,T]}],fill:[{fill:["none",...et()]}],"stroke-w":[{stroke:[G,Z,q,X]}],stroke:[{stroke:["none",...et()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["before","after","placeholder","file","marker","selection","first-line","first-letter","backdrop","*","**"]}})}};