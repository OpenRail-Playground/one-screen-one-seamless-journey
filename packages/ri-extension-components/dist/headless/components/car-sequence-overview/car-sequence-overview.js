"use strict";(()=>{var Pr=Object.defineProperty;var Lr=Object.getOwnPropertyDescriptor;var d=(e,t,r,i)=>{for(var a=i>1?void 0:i?Lr(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(a=(i?s(t,r,a):s(a))||a);return i&&a&&Pr(t,r,a),a};var Pt=globalThis,Rt=Pt.ShadowRoot&&(Pt.ShadyCSS===void 0||Pt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_e=Symbol(),$e=new WeakMap,Lt=class{constructor(t,r,i){if(this._$cssResult$=!0,i!==_e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o,r=this.t;if(Rt&&t===void 0){let i=r!==void 0&&r.length===1;i&&(t=$e.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&$e.set(r,t))}return t}toString(){return this.cssText}},y=e=>new Lt(typeof e=="string"?e:e+"",void 0,_e);var we=(e,t)=>{if(Rt)e.adoptedStyleSheets=t.map((r=>r instanceof CSSStyleSheet?r:r.styleSheet));else for(let r of t){let i=document.createElement("style"),a=Pt.litNonce;a!==void 0&&i.setAttribute("nonce",a),i.textContent=r.cssText,e.appendChild(i)}},re=Rt?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(let i of t.cssRules)r+=i.cssText;return y(r)})(e):e;var{is:Rr,defineProperty:kr,getOwnPropertyDescriptor:Ir,getOwnPropertyNames:Dr,getOwnPropertySymbols:Nr,getPrototypeOf:Mr}=Object,kt=globalThis,Ae=kt.trustedTypes,Vr=Ae?Ae.emptyScript:"",Or=kt.reactiveElementPolyfillSupport,lt=(e,t)=>e,dt={toAttribute(e,t){switch(t){case Boolean:e=e?Vr:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},It=(e,t)=>!Rr(e,t),Te={attribute:!0,type:String,converter:dt,reflect:!1,useDefault:!1,hasChanged:It};Symbol.metadata??=Symbol("metadata"),kt.litPropertyMetadata??=new WeakMap;var V=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Te){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){let i=Symbol(),a=this.getPropertyDescriptor(t,i,r);a!==void 0&&kr(this.prototype,t,a)}}static getPropertyDescriptor(t,r,i){let{get:a,set:n}=Ir(this.prototype,t)??{get(){return this[r]},set(s){this[r]=s}};return{get:a,set(s){let p=a?.call(this);n?.call(this,s),this.requestUpdate(t,p,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Te}static _$Ei(){if(this.hasOwnProperty(lt("elementProperties")))return;let t=Mr(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(lt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(lt("properties"))){let r=this.properties,i=[...Dr(r),...Nr(r)];for(let a of i)this.createProperty(a,r[a])}let t=this[Symbol.metadata];if(t!==null){let r=litPropertyMetadata.get(t);if(r!==void 0)for(let[i,a]of r)this.elementProperties.set(i,a)}this._$Eh=new Map;for(let[r,i]of this.elementProperties){let a=this._$Eu(r,i);a!==void 0&&this._$Eh.set(a,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let r=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let a of i)r.unshift(re(a))}else t!==void 0&&r.push(re(t));return r}static _$Eu(t,r){let i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,r=this.constructor.elementProperties;for(let i of r.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return we(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,r,i){this._$AK(t,i)}_$ET(t,r){let i=this.constructor.elementProperties.get(t),a=this.constructor._$Eu(t,i);if(a!==void 0&&i.reflect===!0){let n=(i.converter?.toAttribute!==void 0?i.converter:dt).toAttribute(r,i.type);this._$Em=t,n==null?this.removeAttribute(a):this.setAttribute(a,n),this._$Em=null}}_$AK(t,r){let i=this.constructor,a=i._$Eh.get(t);if(a!==void 0&&this._$Em!==a){let n=i.getPropertyOptions(a),s=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:dt;this._$Em=a;let p=s.fromAttribute(r,n.type);this[a]=p??this._$Ej?.get(a)??p,this._$Em=null}}requestUpdate(t,r,i){if(t!==void 0){let a=this.constructor,n=this[t];if(i??=a.getPropertyOptions(t),!((i.hasChanged??It)(n,r)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,i))))return;this.C(t,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:i,reflect:a,wrapped:n},s){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??r??this[t]),n!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(r=void 0),this._$AL.set(t,r)),a===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[a,n]of this._$Ep)this[a]=n;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[a,n]of i){let{wrapped:s}=n,p=this[a];s!==!0||this._$AL.has(a)||p===void 0||this.C(a,void 0,n,p)}}let t=!1,r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach((i=>i.hostUpdate?.())),this.update(r)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach((r=>r.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((r=>this._$ET(r,this[r]))),this._$EM()}updated(t){}firstUpdated(t){}};V.elementStyles=[],V.shadowRootOptions={mode:"open"},V[lt("elementProperties")]=new Map,V[lt("finalized")]=new Map,Or?.({ReactiveElement:V}),(kt.reactiveElementVersions??=[]).push("2.1.1");var ae=globalThis,Dt=ae.trustedTypes,Ee=Dt?Dt.createPolicy("lit-html",{createHTML:e=>e}):void 0,ne="$lit$",O=`lit$${Math.random().toFixed(9).slice(2)}$`,se="?"+O,zr=`<${se}>`,Z=document,ut=()=>Z.createComment(""),ft=e=>e===null||typeof e!="object"&&typeof e!="function",oe=Array.isArray,De=e=>oe(e)||typeof e?.[Symbol.iterator]=="function",ie=`[ 	
\f\r]`,pt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Pe=/-->/g,Le=/>/g,F=RegExp(`>|${ie}(?:([^\\s"'>=/]+)(${ie}*=${ie}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Re=/'/g,ke=/"/g,Ne=/^(?:script|style|textarea|title)$/i,ce=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),o=ce(1),Ki=ce(2),Zi=ce(3),X=Symbol.for("lit-noChange"),l=Symbol.for("lit-nothing"),Ie=new WeakMap,K=Z.createTreeWalker(Z,129);function Me(e,t){if(!oe(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ee!==void 0?Ee.createHTML(t):t}var Ve=(e,t)=>{let r=e.length-1,i=[],a,n=t===2?"<svg>":t===3?"<math>":"",s=pt;for(let p=0;p<r;p++){let f=e[p],m,h,b=-1,v=0;for(;v<f.length&&(s.lastIndex=v,h=s.exec(f),h!==null);)v=s.lastIndex,s===pt?h[1]==="!--"?s=Pe:h[1]!==void 0?s=Le:h[2]!==void 0?(Ne.test(h[2])&&(a=RegExp("</"+h[2],"g")),s=F):h[3]!==void 0&&(s=F):s===F?h[0]===">"?(s=a??pt,b=-1):h[1]===void 0?b=-2:(b=s.lastIndex-h[2].length,m=h[1],s=h[3]===void 0?F:h[3]==='"'?ke:Re):s===ke||s===Re?s=F:s===Pe||s===Le?s=pt:(s=F,a=void 0);let A=s===F&&e[p+1].startsWith("/>")?" ":"";n+=s===pt?f+zr:b>=0?(i.push(m),f.slice(0,b)+ne+f.slice(b)+O+A):f+O+(b===-2?p:A)}return[Me(e,n+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},mt=class e{constructor({strings:t,_$litType$:r},i){let a;this.parts=[];let n=0,s=0,p=t.length-1,f=this.parts,[m,h]=Ve(t,r);if(this.el=e.createElement(m,i),K.currentNode=this.el.content,r===2||r===3){let b=this.el.content.firstChild;b.replaceWith(...b.childNodes)}for(;(a=K.nextNode())!==null&&f.length<p;){if(a.nodeType===1){if(a.hasAttributes())for(let b of a.getAttributeNames())if(b.endsWith(ne)){let v=h[s++],A=a.getAttribute(b).split(O),P=/([.?@])?(.*)/.exec(v);f.push({type:1,index:n,name:P[2],strings:A,ctor:P[1]==="."?Mt:P[1]==="?"?Vt:P[1]==="@"?Ot:J}),a.removeAttribute(b)}else b.startsWith(O)&&(f.push({type:6,index:n}),a.removeAttribute(b));if(Ne.test(a.tagName)){let b=a.textContent.split(O),v=b.length-1;if(v>0){a.textContent=Dt?Dt.emptyScript:"";for(let A=0;A<v;A++)a.append(b[A],ut()),K.nextNode(),f.push({type:2,index:++n});a.append(b[v],ut())}}}else if(a.nodeType===8)if(a.data===se)f.push({type:2,index:n});else{let b=-1;for(;(b=a.data.indexOf(O,b+1))!==-1;)f.push({type:7,index:n}),b+=O.length-1}n++}}static createElement(t,r){let i=Z.createElement("template");return i.innerHTML=t,i}};function Y(e,t,r=e,i){if(t===X)return t;let a=i!==void 0?r._$Co?.[i]:r._$Cl,n=ft(t)?void 0:t._$litDirective$;return a?.constructor!==n&&(a?._$AO?.(!1),n===void 0?a=void 0:(a=new n(e),a._$AT(e,r,i)),i!==void 0?(r._$Co??=[])[i]=a:r._$Cl=a),a!==void 0&&(t=Y(e,a._$AS(e,t.values),a,i)),t}var Nt=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:r},parts:i}=this._$AD,a=(t?.creationScope??Z).importNode(r,!0);K.currentNode=a;let n=K.nextNode(),s=0,p=0,f=i[0];for(;f!==void 0;){if(s===f.index){let m;f.type===2?m=new nt(n,n.nextSibling,this,t):f.type===1?m=new f.ctor(n,f.name,f.strings,this,t):f.type===6&&(m=new zt(n,this,t)),this._$AV.push(m),f=i[++p]}s!==f?.index&&(n=K.nextNode(),s++)}return K.currentNode=Z,a}p(t){let r=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,r),r+=i.strings.length-2):i._$AI(t[r])),r++}},nt=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,i,a){this.type=2,this._$AH=l,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Y(this,t,r),ft(t)?t===l||t==null||t===""?(this._$AH!==l&&this._$AR(),this._$AH=l):t!==this._$AH&&t!==X&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):De(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==l&&ft(this._$AH)?this._$AA.nextSibling.data=t:this.T(Z.createTextNode(t)),this._$AH=t}$(t){let{values:r,_$litType$:i}=t,a=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=mt.createElement(Me(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(r);else{let n=new Nt(a,this),s=n.u(this.options);n.p(r),this.T(s),this._$AH=n}}_$AC(t){let r=Ie.get(t.strings);return r===void 0&&Ie.set(t.strings,r=new mt(t)),r}k(t){oe(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,i,a=0;for(let n of t)a===r.length?r.push(i=new e(this.O(ut()),this.O(ut()),this,this.options)):i=r[a],i._$AI(n),a++;a<r.length&&(this._$AR(i&&i._$AB.nextSibling,a),r.length=a)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},J=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,i,a,n){this.type=1,this._$AH=l,this._$AN=void 0,this.element=t,this.name=r,this._$AM=a,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=l}_$AI(t,r=this,i,a){let n=this.strings,s=!1;if(n===void 0)t=Y(this,t,r,0),s=!ft(t)||t!==this._$AH&&t!==X,s&&(this._$AH=t);else{let p=t,f,m;for(t=n[0],f=0;f<n.length-1;f++)m=Y(this,p[i+f],r,f),m===X&&(m=this._$AH[f]),s||=!ft(m)||m!==this._$AH[f],m===l?t=l:t!==l&&(t+=(m??"")+n[f+1]),this._$AH[f]=m}s&&!a&&this.j(t)}j(t){t===l?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Mt=class extends J{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===l?void 0:t}},Vt=class extends J{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==l)}},Ot=class extends J{constructor(t,r,i,a,n){super(t,r,i,a,n),this.type=5}_$AI(t,r=this){if((t=Y(this,t,r,0)??l)===X)return;let i=this._$AH,a=t===l&&i!==l||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==l&&(i===l||a);a&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},zt=class{constructor(t,r,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}},Oe={M:ne,P:O,A:se,C:1,L:Ve,R:Nt,D:De,V:Y,I:nt,H:J,N:Vt,U:Ot,B:Mt,F:zt},Br=ae.litHtmlPolyfillSupport;Br?.(mt,nt),(ae.litHtmlVersions??=[]).push("3.3.1");var ze=(e,t,r)=>{let i=r?.renderBefore??t,a=i._$litPart$;if(a===void 0){let n=r?.renderBefore??null;i._$litPart$=a=new nt(t.insertBefore(ut(),n),n,void 0,r??{})}return a._$AI(e),a};var le=globalThis,z=class extends V{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ze(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return X}};z._$litElement$=!0,z.finalized=!0,le.litElementHydrateSupport?.({LitElement:z});var Hr=le.litElementPolyfillSupport;Hr?.({LitElement:z});(le.litElementVersions??=[]).push("4.2.1");var Ur={attribute:!0,type:String,converter:dt,reflect:!1,hasChanged:It},Gr=(e=Ur,t,r)=>{let{kind:i,metadata:a}=r,n=globalThis.litPropertyMetadata.get(a);if(n===void 0&&globalThis.litPropertyMetadata.set(a,n=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),n.set(r.name,e),i==="accessor"){let{name:s}=r;return{set(p){let f=t.get.call(this);t.set.call(this,p),this.requestUpdate(s,f,e)},init(p){return p!==void 0&&this.C(s,void 0,e,p),p}}}if(i==="setter"){let{name:s}=r;return function(p){let f=this[s];t.call(this,p),this.requestUpdate(s,f,e)}}throw Error("Unsupported decorator location: "+i)};function u(e){return(t,r)=>typeof r=="object"?Gr(e,t,r):((i,a,n)=>{let s=a.hasOwnProperty(n);return a.constructor.createProperty(n,i),s?Object.getOwnPropertyDescriptor(a,n):void 0})(e,t,r)}function Bt(e){return u({...e,state:!0,attribute:!1})}var qr=2.709677419,Q=(e,t)=>Math.floor(e*qr*(t||1)-1),Wr=e=>e.end-e.start,de=(e,t)=>t?`${Q(e,t)}px`:`${e*100}%`,jr=e=>{let{start:t,end:r,center:i}=e,a=i??(t+r)/2;return Math.ceil((a-t)/(r-t)*100)/100},Be=e=>jr({start:e.start,end:e.end,center:e.cubePosition}),Ut=(e,t,r)=>{let i=t.start||0,a=t.end||r.at(-1)?.end;if(!a)return;a-=i;let n=e==="absolute",s=r.map(p=>({start:p.start-i,end:p.end-i})).map(p=>Wr(p)/(n?1:a));return{containerLength:a,widthChildren:s}},st=e=>e==="absolute";var Gt=(e,t)=>{if(e)return e?.details?.sectors?Ut(t||"inside",e.details,e.details?.sectors):{containerLength:e.details?.end||0,widthChildren:[]}},Ue=(e,t,r)=>t==="absolute"?`${Q(e.containerLength,r)}px`:"auto",He=e=>[...new Set(e)],Ge=e=>{let t=e.groups.at(0);if(!t)return;let r=t.vehicles.map(s=>s.platformPosition?.sector??""),i=e.platform.details?.sectors?.filter(s=>r.includes(s.name)).map(s=>s.name);if(!i)return;let a=He(r),n=He(i);return a.length===n.length&&a.every((s,p)=>s===n[p])?"backwards":"forwards"};var qe=(e,t)=>{if(!e)return;let r=[];for(let i of e)if(i.platformPosition)r.push(i.platformPosition);else return;if(r.length>0){let i=r.at(0)?.start,a=r.at(-1)?.end;return Ut(t||"inside",{start:i,end:a},r)}},We=({vehicles:e,variant:t,absoluteScale:r,platformWidth:i})=>{if(!(i&&e))return;let a=st(t),n=a?"fit-content":"auto",s=e.at(0)?.platformPosition?.start??0,p=e.at(-1)?.platformPosition?.end?i-(e.at(-1)?.platformPosition?.end??0):0,f=a?Q(s,r):s/i*100,m=a?Q(p,r):p/i*100;return{sequenceWidth:n,inlinePaddingStartValue:f,inlinePaddingEndValue:m}},je=(e,t)=>{let i=st(t)?"px":"%";if(!e)return l;let{sequenceWidth:a,inlinePaddingStartValue:n,inlinePaddingEndValue:s}=e,p=`--ri-sequence-width:${a};`;return p+=`--ri-sequence-inline-padding-start: ${n}${i};`,p+=`--ri-sequence-inline-padding-end: ${s}${i};`,p},Fe=({carMeasurements:e,variant:t,absoluteScale:r,platformWidth:i,index:a})=>{if(!(e&&i))return l;let n=e.widthChildren[a];if(!n)return l;let s=st(t),p=s?`${Q(n,r)}px`:`${n*100}%`;return i&&e?s?`--ri-car-item-width:${p};`:"--ri-car-item-width:100%;":l};var pe="__ri_localization_store__",ue=window;ue[pe]||(ue[pe]={content:{},lang:"de"});var B=ue[pe],fe=class{static setProviderContent(t,r){B.content={...B.content,[t]:r}}static setLanguage(t){t!==B.lang&&(B.lang=t,document.dispatchEvent(new CustomEvent("ri-language-change",{detail:{lang:t}})))}static getLanguage(){return B.lang}static getContent(){return B.content[B.lang]??B.content.de}};function c(e,t,r){let a=fe.getContent()?.[e]??t??e;return r&&(a=a.replace(/\{\{(\w+)}}/g,(n,s)=>String(r[s]??`{{${s}}}`))),a}var Fr=e=>["HIGH_SPEED_TRAIN","AIR","AIR","ECE","EM","EST","FA","FB","FR","ICE","ICL","IXB","IXr","RHI","RHT","RJ","RJX","RRI","RRT","TGD","TGJ","TGL","TGV","THA","X2"].includes(e),Kr=e=>["INTERCITY_TRAIN","ALS","ARC","ATR","IC","ICD","ICN","ICr","ICT","INZ","IP","KXB","NJ","Rx","S2","SC","TLG","ARZ","AS","AZ","CAT","D","DNZ","DPF","DZ","EBU","EE","EN","FBU","HOT","ICB","INT","IR","RR","S84","TLK","UEx","X","X70","EC","ECB","ECM","ECW","EIC","EX","EXB"].includes(e),Zr=e=>["REGIONAL_TRAIN","INTER_REGIONAL_TRAIN","ATB","Bsv","BSV","CJX","DPN","E","ER","IRE","N","Os","OZ","PPN","R","R84","RB","RE","RER","REX","SB","Sp","T84","TER","U70","UUU","Zr","ZUG","BRB","erx","NWB","RTB","IRE","HLB","ME"].includes(e),me=e=>{if(!e)return;let t=e.toLowerCase();if(Fr(e))return"ICE";if(Kr(e))return"IC";if(Zr(e))return"RE";if(["CITY_TRAIN","S","S-Bahn","DPS","e","RT","AVG"].map(r=>r.toLowerCase()).includes(t))return"S";if(["SUBWAY","U","U-Bahn"].map(r=>r.toLowerCase()).includes(t))return"U";if(["TRAM","Tram","STR","Stb","SWB","ZRB"].map(r=>r.toLowerCase()).includes(t))return"STR";if(["BUS","lt","OBU","ubu"].map(r=>r.toLowerCase()).includes(t))return"BUS";if(["SHUTTLE","RUF"].map(r=>r.toLowerCase()).includes(t))return"RUF";if(["FERRY","FAE","KAT","SCH","Schiff"].map(r=>r.toLowerCase()).includes(t))return"FAE";if(["Long_distance_Bus"].map(r=>r.toLowerCase()).includes(t))return"Long_distance_Bus";if(["EV_Bus","SEV_Bus"].map(r=>r.toLowerCase()).includes(t))return"SEV_Bus";if(["Ship"].map(r=>r.toLowerCase()).includes(t))return"Ship";if(["FLIGHT","Plane"].map(r=>r.toLowerCase()).includes(t))return"Plane";if(["Car_Sharing"].map(r=>r.toLowerCase()).includes(t))return"Car_Sharing";if(["Taxi","AST"].map(r=>r.toLowerCase()).includes(t))return"Taxi";if(["Bike_Sharing"].map(r=>r.toLowerCase()).includes(t))return"Bike_Sharing";if(["WALK"].map(r=>r.toLowerCase()).includes(t))return"WALK"},Ke=e=>{switch(e){case"Bike_Sharing":return c("transport.variant.bikeSharing","Fahrradverleih");case"Car_Sharing":return c("transport.variant.carSharing","Carsharing");case"BUS":return c("transport.variant.bus","Bus");case"FAE":return c("transport.variant.ferry","F\xE4hre");case"IC":return c("transport.variant.intercity","Intercity");case"ICE":return c("transport.variant.intercityExpress","Intercity Express");case"Long_distance_Bus":return c("transport.variant.longDistanceBus","Fernbus");case"Plane":return c("transport.variant.plane","Flugzeug");case"RE":return c("transport.variant.regionalExpress","Regional Express");case"S":return c("transport.variant.sBahn","S-Bahn");case"SEV_Bus":return c("transport.variant.replacementBus","Ersatzverkehr Bus");case"Ship":return c("transport.variant.ship","Schiff");case"STR":return c("transport.variant.tram","Stra\xDFenbahn");case"Taxi":return c("transport.variant.taxi","Taxi");case"U":return c("transport.variant.uBahn","U-Bahn");case"WALK":return c("transport.variant.walk","Zu Fu\xDF");default:return c("transport.variant.unknown","Unbekannt")}};var be=null,x=()=>(be===null&&(be=self.document.styleSheets?[...self.document.styleSheets].map(e=>{let t=new CSSStyleSheet;try{if(e.cssRules){let r=[...e.cssRules].map(i=>i.cssText).join(" ");t.replaceSync(r)}}catch{}return t}):[]),be),C=(e=[])=>Array.isArray(e)?e:[e];var{I:tn}=Oe;var Ze=e=>e.strings===void 0;var Xe={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},he=e=>(...t)=>({_$litDirective$:e,values:t}),qt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,i){this._$Ct=t,this._$AM=r,this._$Ci=i}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};var bt=(e,t)=>{let r=e._$AN;if(r===void 0)return!1;for(let i of r)i._$AO?.(t,!1),bt(i,t);return!0},Wt=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while(r?.size===0)},Ye=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),Jr(t)}};function Xr(e){this._$AN!==void 0?(Wt(this),this._$AM=e,Ye(this)):this._$AM=e}function Yr(e,t=!1,r=0){let i=this._$AH,a=this._$AN;if(a!==void 0&&a.size!==0)if(t)if(Array.isArray(i))for(let n=r;n<i.length;n++)bt(i[n],!1),Wt(i[n]);else i!=null&&(bt(i,!1),Wt(i));else bt(this,e)}var Jr=e=>{e.type==Xe.CHILD&&(e._$AP??=Yr,e._$AQ??=Xr)},jt=class extends qt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,r,i){super._$AT(t,r,i),Ye(this),this.isConnected=t._$AU}_$AO(t,r=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),r&&(bt(this,t),Wt(this))}setValue(t){if(Ze(this._$Ct))this._$Ct._$AI(t,this);else{let r=[...this._$Ct._$AH];r[this._$Ci]=t,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}};var Ft=()=>new ve,ve=class{},ge=new WeakMap,Kt=he(class extends jt{render(e){return l}update(e,[t]){let r=t!==this.G;return r&&this.G!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),l}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){let t=this.ht??globalThis,r=ge.get(t);r===void 0&&(r=new WeakMap,ge.set(t,r)),r.get(this.G)!==void 0&&this.G.call(this.ht,void 0),r.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?ge.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Je=({platformName:e,slot:t,emphasis:r,variant:i})=>{if(!e)return o``;let a=c("platform.trackShort","Gl."),n=c("platform.track","Gleis"),s=c("platform.platformChanged","Gleiswechsel");return o`
		<ri-platform-tag
			slot="${t??l}"
			emphasis="${r??"strong"}"
			variant="${i}"
			title="${n} ${e} ${i==="changed"?s:""}"
		>
			${a} ${e}
		</ri-platform-tag>
	`},Zt=e=>{let t=e?.toLowerCase()==="backwards",r=c("platform.departureDirection","Abfahrtsrichtung"),i=t?c("platform.directionLeft","links"):c("platform.directionRight","rechts"),a=`${r} ${i}`;return{departureDirectionString:r,directionString:i,platformDirection:a}};var H=84,U=54,ht=e=>o`
	<svg
		aria-hidden="true"
		data-shape="wagon"
		width="${H}"
		height="${U}"
		viewBox="0 0 80 48"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		preserveAspectRatio="none"
	>
		<defs>
			<linearGradient
				id="${e}"
				x1="0%"
				x2="50%"
				style="transform: rotate(var(--car-gradient-rotate,0deg));"
			>
				<stop style="stop-color: var(--car-stop-1-color);" offset="1" />
				<stop style="stop-color: var(--car-stop-2-color);" offset="1" />
			</linearGradient>
		</defs>
		<rect
			width="80"
			height="48"
			stroke="var(--db-adaptive-on-bg-basic-emphasis-80-default)"
			stroke-width="2"
			style="fill: url(#${e});"
		/>
	</svg>
`,Qe=(e,t)=>{switch(t){case"single":return o`
				<svg
					aria-hidden="true"
					data-shape="controlcar-single"
					width="${H}"
					height="${U}"
					viewBox="0 0 80 48"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
				>
					<defs>
						<linearGradient
							id="${e}"
							x1="0%"
							x2="50%"
							style="transform: rotate(var(--car-gradient-rotate,0deg));"
						>
							<stop
								style="stop-color: var(--car-stop-1-color);"
								offset="1"
							/>
							<stop
								style="stop-color: var(--car-stop-2-color);"
								offset="1"
							/>
						</linearGradient>
					</defs>
					<path
						d="M11.6279 0.5H68.3818C69.8843 0.500038 71.0085 1.15361 71.8604 2.125C73.095 3.53301 73.7556 5.5731 74.0459 7.24805V7.24902L75.9463 18.5078C77.1575 25.7758 78.0606 31.4146 78.6553 35.4258L78.8906 37.0449L78.9766 37.6523L79.2559 39.7402C79.4119 41.0227 79.4759 41.6712 79.499 42.0938C79.4962 43.5067 78.7952 44.7798 77.7344 45.7461C76.5353 46.8383 74.9218 47.4999 73.4375 47.5H6.57227C5.09874 47.5 3.49514 46.8484 2.29297 45.8076C1.21694 44.8759 0.512176 43.6781 0.500977 42.4131C0.807 38.4682 2.41603 28.1558 5.37402 10.7148L5.93164 7.43848L5.93262 7.43359C6.20206 5.74549 6.85364 3.63228 8.1084 2.17188C8.91186 1.23678 9.96077 0.585627 11.3457 0.507812L11.6279 0.5Z"
						style="fill: url(#${e});"
						stroke="var(--db-adaptive-on-bg-basic-emphasis-80-default)"
					/>
				</svg>
			`;case"end":return o`
				<svg
					aria-hidden="true"
					data-shape="ice-right"
					width="${H}"
					height="${U}"
					viewBox="0 0 80 48"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
				>
					<defs>
						<linearGradient
							id="${e}"
							x1="0%"
							x2="50%"
							style="transform: rotate(var(--car-gradient-rotate,0deg));"
						>
							<stop
								style="stop-color: var(--car-stop-1-color);"
								offset="1"
							/>
							<stop
								style="stop-color: var(--car-stop-2-color);"
								offset="1"
							/>
						</linearGradient>
					</defs>
					<path
						d="M57.767 15.8884L57.7731 15.8932L57.7794 15.8977C68.0532 23.3354 75.3339 34.1925 78.0848 38.2948L78.0889 38.3008L78.0934 38.3076C78.2815 38.5881 78.4492 38.8382 78.5951 39.0531C79.6357 40.5865 79.8032 43.0141 78.9711 44.8971C78.6179 45.6964 78.0901 46.3769 77.3843 46.8388C76.7558 47.2501 75.9657 47.5 74.9949 47.5H0.5V0.5H10.2647L17.538 0.504482L18.9105 0.555111C18.9111 0.555139 18.9118 0.555166 18.9124 0.555193C22.1288 0.697827 29.5993 1.17517 34.815 2.68161L35.3495 2.86659C35.3499 2.86676 35.3504 2.86693 35.3509 2.8671C40.347 4.63137 47.8192 8.20735 57.767 15.8884Z"
						style="fill: url(#${e});"
						stroke="var(--db-adaptive-on-bg-basic-emphasis-80-default)"
					/>
				</svg>
			`;case"start":return o`
				<svg
					aria-hidden="true"
					data-shape="ice-left"
					width="${H}"
					height="${U}"
					viewBox="0 0 80 48"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
				>
					<defs>
						<linearGradient
							id="${e}"
							x1="0%"
							x2="50%"
							style="transform: rotate(var(--car-gradient-rotate,0deg));"
						>
							<stop
								style="stop-color: var(--car-stop-1-color);"
								offset="1"
							/>
							<stop
								style="stop-color: var(--car-stop-2-color);"
								offset="1"
							/>
						</linearGradient>
					</defs>
					<path
						d="M22.233 15.8884L22.2269 15.8932L22.2206 15.8977C11.9468 23.3354 4.66613 34.1925 1.9152 38.2948L1.91115 38.3008L1.90659 38.3076C1.71851 38.5881 1.55081 38.8382 1.40491 39.0531C0.364281 40.5865 0.196831 43.0141 1.02889 44.8971C1.38206 45.6964 1.9099 46.3769 2.61575 46.8388C3.2442 47.2501 4.03429 47.5 5.00508 47.5H79.5V0.5H69.7353L62.462 0.504482L61.0895 0.555111C61.0889 0.555139 61.0882 0.555166 61.0876 0.555193C57.8712 0.697827 50.4007 1.17516 45.185 2.6816L44.6506 2.86659C44.65 2.86677 44.6495 2.86696 44.649 2.86714C39.653 4.63143 32.1807 8.20741 22.233 15.8884Z"
						style="fill: url(#${e});"
						stroke="var(--db-adaptive-on-bg-basic-emphasis-80-default)"
					/>
				</svg>
			`;default:return ht(e)}},tr=(e,t)=>{switch(t){case"single":return o`
				<svg
					aria-hidden="true"
					data-shape="controlcar-single"
					width="${H}"
					height="${U}"
					viewBox="0 0 80 48"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
				>
					<defs>
						<linearGradient
							id="${e}"
							x1="0%"
							x2="50%"
							style="transform: rotate(var(--car-gradient-rotate,0deg));"
						>
							<stop
								style="stop-color: var(--car-stop-1-color);"
								offset="1"
							/>
							<stop
								style="stop-color: var(--car-stop-2-color);"
								offset="1"
							/>
						</linearGradient>
					</defs>
					<path
						d="M11.6279 0.5H68.3818C69.8843 0.500038 71.0085 1.15361 71.8604 2.125C73.095 3.53301 73.7556 5.5731 74.0459 7.24805V7.24902L75.9463 18.5078C77.1575 25.7758 78.0606 31.4146 78.6553 35.4258L78.8906 37.0449L78.9766 37.6523L79.2559 39.7402C79.4119 41.0227 79.4759 41.6712 79.499 42.0938C79.4962 43.5067 78.7952 44.7798 77.7344 45.7461C76.5353 46.8383 74.9218 47.4999 73.4375 47.5H6.57227C5.09874 47.5 3.49514 46.8484 2.29297 45.8076C1.21694 44.8759 0.512176 43.6781 0.500977 42.4131C0.807 38.4682 2.41603 28.1558 5.37402 10.7148L5.93164 7.43848L5.93262 7.43359C6.20206 5.74549 6.85364 3.63228 8.1084 2.17188C8.91186 1.23678 9.96077 0.585627 11.3457 0.507812L11.6279 0.5Z"
						style="fill: url(#${e});"
						stroke="var(--db-adaptive-on-bg-basic-emphasis-80-default)"
					/>
				</svg>
			`;case"end":return o`
				<svg
					aria-hidden="true"
					data-shape="controlcar-right"
					width="${H}"
					height="${U}"
					viewBox="0 0 80 48"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
				>
					<defs>
						<linearGradient
							id="${e}"
							x1="0%"
							x2="50%"
							style="transform: rotate(var(--car-gradient-rotate,0deg));"
						>
							<stop
								style="stop-color: var(--car-stop-1-color);"
								offset="1"
							/>
							<stop
								style="stop-color: var(--car-stop-2-color);"
								offset="1"
							/>
						</linearGradient>
					</defs>
					<path
						d="M74.0779 7.43869L74.0787 7.44389L74.1904 8.09914C77.5847 28.0232 79.3504 39.3343 79.5 42.0985C79.4956 43.5095 78.7941 44.7806 77.7345 45.7459C76.5353 46.8383 74.9216 47.5 73.4371 47.5H0.5V0.5H68.3817C69.9074 0.5 71.0434 1.17443 71.9004 2.17193C73.1552 3.63228 73.8075 5.74503 74.0779 7.43869Z"
						style="fill: url(#${e});"
						stroke="var(--db-adaptive-on-bg-basic-emphasis-80-default)"
					/>
				</svg>
			`;case"start":return o`
				<svg
					aria-hidden="true"
					data-shape="controlcar-left"
					width="${H}"
					height="${U}"
					viewBox="0 0 80 48"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
				>
					<defs>
						<linearGradient
							id="${e}"
							x1="0%"
							x2="50%"
							style="transform: rotate(var(--car-gradient-rotate,0deg));"
						>
							<stop
								style="stop-color: var(--car-stop-1-color);"
								offset="1"
							/>
							<stop
								style="stop-color: var(--car-stop-2-color);"
								offset="1"
							/>
						</linearGradient>
					</defs>
					<path
						d="M5.92213 7.43869L5.92125 7.44389L5.80956 8.09914C2.41533 28.0232 0.649536 39.3343 0.500023 42.0985C0.504402 43.5095 1.2059 44.7806 2.26552 45.7459C3.46468 46.8383 5.07839 47.5 6.56284 47.5H79.5V0.5H11.6183C10.0926 0.5 8.95663 1.17443 8.09955 2.17193C6.84476 3.63228 6.19247 5.74503 5.92213 7.43869Z"
						style="fill: url(#${e});"
						stroke="var(--db-adaptive-on-bg-basic-emphasis-80-default)"
					/>
				</svg>
			`;default:return ht(e)}},er=e=>o`
	<svg
		data-shape="double-control-car"
		width="${H}"
		height="${U}"
		viewBox="0 0 80 48"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		preserveAspectRatio="none"
		aria-hidden="true"
	>
		<defs>
			<linearGradient
				id="${e}"
				x1="0%"
				x2="50%"
				style="transform: rotate(var(--car-gradient-rotate,0deg));"
			>
				<stop style="stop-color: var(--car-stop-1-color);" offset="1" />
				<stop style="stop-color: var(--car-stop-2-color);" offset="1" />
			</linearGradient>
		</defs>
		<path
			d="M11.6279 0.5H68.3818C69.8843 0.500038 71.0085 1.15361 71.8604 2.125C73.095 3.53301 73.7556 5.5731 74.0459 7.24805V7.24902L75.9463 18.5078C77.1575 25.7758 78.0606 31.4146 78.6553 35.4258L78.8906 37.0449L78.9766 37.6523L79.2559 39.7402C79.4119 41.0227 79.4759 41.6712 79.499 42.0938C79.4962 43.5067 78.7952 44.7798 77.7344 45.7461C76.5353 46.8383 74.9218 47.4999 73.4375 47.5H6.57227C5.09874 47.5 3.49514 46.8484 2.29297 45.8076C1.21694 44.8759 0.512176 43.6781 0.500977 42.4131C0.807 38.4682 2.41603 28.1558 5.37402 10.7148L5.93164 7.43848L5.93262 7.43359C6.20206 5.74549 6.85364 3.63228 8.1084 2.17188C8.91186 1.23678 9.96077 0.585627 11.3457 0.507812L11.6279 0.5Z"
			style="fill: url(#${e});"
			stroke="var(--db-adaptive-on-bg-basic-emphasis-80-default)"
		/>
	</svg>
`,rr=e=>o`
	<svg
		data-shape="locomotive"
		width="64"
		height="48"
		viewBox="0 0 64 48"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		preserveAspectRatio="none"
		aria-hidden="true"
	>
		<defs>
			<linearGradient
				id="${e}"
				x1="0%"
				x2="50%"
				style="transform: rotate(var(--car-gradient-rotate,0deg));"
			>
				<stop style="stop-color: var(--car-stop-1-color);" offset="1" />
				<stop style="stop-color: var(--car-stop-2-color);" offset="1" />
			</linearGradient>
		</defs>
		<path
			d="M52.3174 8.5H11.6826C10.3314 8.5 9.14293 8.83885 8.24316 9.44434C7.40563 10.0081 6.81367 10.8094 6.57129 11.8115V11.8125C4.54777 21.687 3.02769 29.177 2.01367 34.2832C1.50661 36.8366 1.12542 38.7932 0.87207 40.1523C0.745395 40.832 0.651556 41.3602 0.588867 41.7383C0.557495 41.9275 0.534473 42.0764 0.519531 42.1865C0.512077 42.2415 0.507087 42.2845 0.503906 42.3164C0.500559 42.35 0.500006 42.3618 0.5 42.3594C0.500137 43.6055 1.13388 44.8881 2.11133 45.875C3.08918 46.8622 4.35761 47.4999 5.58691 47.5H58.4131C59.6424 47.4999 60.9108 46.8622 61.8887 45.875C62.8661 44.8881 63.4999 43.6055 63.5 42.3594C63.5 42.3618 63.4994 42.3501 63.4961 42.3164C63.4929 42.2845 63.4879 42.2415 63.4805 42.1865C63.4655 42.0764 63.4425 41.9276 63.4111 41.7383C63.3484 41.3599 63.2538 40.8307 63.127 40.1504C62.8735 38.7905 62.4936 36.8338 61.9863 34.2793C60.9723 29.1731 59.4528 21.6842 57.4297 11.8125C57.1874 10.8118 56.5946 10.009 55.7559 9.44434C54.8564 8.83896 53.6685 8.5 52.3174 8.5Z"
			style="fill: url(#${e});"
			stroke="var(--db-adaptive-on-bg-basic-emphasis-80-default)"
		/>
	</svg>
`;var Qr=e=>!!(e&&(e.levelFirstClass&&e.levelFirstClass!=="UNDEFINED"||e.levelEconomyClass&&e.levelEconomyClass!=="UNDEFINED")),ir=(e,t)=>{if(!t)return;let r=e?t.levelFirstClass:t.levelEconomyClass;if(r=="OVERCROWDED")return"capacity_indicator_fully_booked";if(r==="HIGH")return"capacity_indicator_high";if(r==="MIDDLE")return"capacity_indicator_moderate";if(r==="LOW")return"capacity_indicator_low"},ti=e=>{if(e=="capacity_indicator_fully_booked")return"critical";if(e==="capacity_indicator_high"||e==="capacity_indicator_moderate")return"warning"},ye=e=>e.startsWith("SLEEPER_"),xe=e=>e.startsWith("COUCHETTE_"),ei=e=>{let t=[],{type:r}=e,i;e.occupancy&&(i=e.occupancy);let{category:a,hasFirstClass:n,hasEconomyClass:s}=r,p=Qr(i),f=ir(!0,i),m=ir(!1,i);return n&&s?(t.push("first_class"),ye(a)?t.push("bed"):xe(a)?t.push("couchette"):p&&(i?.levelEconomyClass!=="UNDEFINED"&&m?t.push(m):i?.levelFirstClass!=="UNDEFINED"&&f&&t.push(f)),t.push("second_class"),t):n?(t.push("first_class"),ye(a)?t.push("bed"):xe(a)?t.push("couchette"):p&&(f?t.push(f):m&&t.push(m)),t):(s&&(t.push("second_class"),ye(a)?t.push("bed"):xe(a)?t.push("couchette"):p&&m&&t.push(m)),t)},Xt=e=>{let{type:t}=e,{category:r}=t,i=[];if(r==="LOCOMOTIVE")return i;if(r==="DOUBLEDECK_CARCARRIER_PASSENGERTRAIN")return["car"];if(e.status==="CLOSED")return["cross_circle"];if(r==="BAGGAGECAR")return["luggage_rack"];if(r==="DININGCAR")return["knife_and_fork"];let a=ei(e);return a.length>0&&i.push(...a),r.startsWith("HALFDININGCAR")&&i.push("knife_and_fork"),i},ar=({category:e,transportType:t,variant:r,uuid:i})=>{let a=`gradient-${i}`;return!e||e==="UNDEFINED"||t&&t==="UNKNOWN"?ht(a):e.includes("LOCOMOTIVE")?rr(a):e.startsWith("DOUBLECONTROLCAR")?er(a):e.includes("POWERCAR")||e.includes("CONTROLCAR")&&t==="HIGH_SPEED_TRAIN"?Qe(a,r):e.includes("CONTROLCAR")||e.includes("PASSENGERCARRIAGE")||e.includes("SLEEPER")||e.includes("COUCHETTE")?tr(a,r):ht(a)},D=(e,t)=>`${e.vehicleID||e.wagonIdentificationNumber}${t?`-${t}`:""}`,G=(e,t)=>`vehicle-${D(e,t)}`,Yt=({vehicle:e,active:t,fullText:r})=>{if(e&&e.wagonIdentificationNumber){let i=`${c("car.wagon","Wagen")} ${e.wagonIdentificationNumber}`;return o`<span
			class="db-tag ri-car-identification"
			data-emphasis="${t?"strong":"weak"}"
			title="${i}"
		>
			${r?i:e.wagonIdentificationNumber}
		</span>`}return o``},nr=({icon:e,carTagsCount:t,isDoubleDeck:r})=>{let i=ti(e),a=e==="first_class",n="weak";return r?t&&t>=2&&a&&(n="strong"):a&&(n="strong"),o`<span
		class="db-tag"
		aria-hidden="true"
		data-no-text="true"
		data-icon="${e}"
		data-capacity="${i??l}"
		data-emphasis="${n}"
	>
		${e}
	</span>`},Jt=e=>{if(e?.length===1){let t=e.at(0)?.type.category;return t==="LOCOMOTIVE"||t==="POWERCAR"}return!1};var ri=({hidePlatformStructure:e,variant:t,sequence:r,departureDirection:i})=>e?l:o`<ri-platform-structure
		.variant="${t}"
		.departureDirection="${i}"
		.platform="${r?.platform}"
	></ri-platform-structure>`,ii=({vehicles:e,variant:t,sequence:r,transportType:i,platformWidth:a,destination:n,trainSplitTransport:s,groupIndex:p,postfix:f})=>r?.groups.length===0?l:o`
		<ri-car-sequence
			.vehicles="${e}"
			.transportType="${i}"
			.variant="${t}"
			.platformWidth="${a}"
			.destination="${n}"
			.trainSplitTransport="${s}"
			.groupIndex="${p}"
			.postfix="${f}"
			interactive="link"
		></ri-car-sequence>
	</div>`,ai=(e,t)=>{if(!(!t||!e))return e[t]},ni=({groups:e,descriptionList:t,postfix:r})=>e.length===0||t==="hidden"?l:o`<div class="ri-car-description-list-background">
		${e.filter(i=>i.groupIndex).map(({vehicles:i})=>o`
					<ri-car-description-list
						.single="${t==="single"?!0:l}"
						.vehicles="${i}"
						.postfix="${r}"
					></ri-car-description-list>
				`)}
	</div>`,si=e=>e?.details?.name?c("carSequence.trainOnPlatform","Zug auf Gleis {{platform}}",{platform:e.details.name}):c("carSequence.train","Zug"),oi=(e,t,r)=>{let i="";t&&(i+=r);let a;return e.forEach(n=>n.vehicles?.forEach(s=>{s.reservedSeat?.length&&(a=s)})),a&&(i+=c("carSequence.reservedSeat",", ihr reservierter Sitzplatz {{seat}}",{seat:a.reservedSeat}),a.wagonIdentificationNumber&&(i+=c("carSequence.inWagon",", in Wagen {{wagon}}",{wagon:a.wagonIdentificationNumber})),a.platformPosition?.sector&&(i+=c("carSequence.inSector",", im Abschnitt {{sector}}",{sector:a.platformPosition.sector}))),i||l},sr=({sequence:e,variant:t,transportType:r,hidePlatformStructure:i,descriptionList:a,trainSplitting:n,postfix:s,_ref:p})=>{if(!e?.groups)return o`${c("carSequence.noSequenceFound","Keine Wagenreihung gefunden")}`;let f=Gt(e?.platform,t),m=f?.containerLength,h=Ge(e);e.groups=e?.groups.sort((g,I)=>(g.vehicles?.at(0)?.platformPosition?.start||0)-(I.vehicles?.at(0)?.platformPosition?.start||0)).map(g=>({...g,vehicles:g.vehicles.sort((I,R)=>(I.platformPosition?.start||0)-(R.platformPosition?.start||0))}));let b=e.groups.flatMap(g=>g.vehicles),v=We({vehicles:b,variant:t,platformWidth:f?.containerLength}),A=je(v,t),P=st(t),{platformDirection:L}=Zt(h),$=[],w=0;for(let g of e.groups)Jt(g.vehicles)?$.push({...g}):(w++,$.push({...g,groupIndex:w.toString()}));return o`<section
		${Kt(p)}
		class="ri-car-sequence-overview"
		style="${P?l:"--ri-car-sequence-width: 100%;"}"
		data-variant="${t}"
	>
		<div class="ri-platform-car-scroll-container">
			${ri({variant:t,hidePlatformStructure:i,sequence:e,departureDirection:h})}
			<div
				class="ri-cars-background"
				style="${A??l}"
			>
				<ol
					aria-label="${si(e.platform)}"
					aria-description="${oi($,h,L)}"
					class="ri-car-sequence-groups"
				>
					${$.map(({vehicles:g,destination:I,journeyID:R,groupIndex:j})=>o`<li>
								${ii({vehicles:g,variant:t,sequence:e,platformWidth:m,transportType:r,groupIndex:j,postfix:s,destination:I.name,trainSplitTransport:ai(n,R)})}
							</li>`)}
				</ol>
			</div>
		</div>
		${ni({groups:$,descriptionList:a,postfix:s})}
	</section>`};var or={};var S={};var T=class extends z{constructor(){super(...arguments);this.i18n=!0;this.onLanguageChange=()=>{this.requestUpdate()}}async hydrateElements(){await new Promise(r=>setTimeout(r,0)),this.shadowRoot?.host.localName&&(this.shadowRoot.host.setAttribute("data-hydrated","true"),this.shadowRoot?.querySelectorAll(`.${this.shadowRoot?.host.localName}`).forEach(r=>{r?.setAttribute("data-hydrated","true")}))}connectedCallback(){super.connectedCallback(),this.shadowRoot?.host.setAttribute("data-hydrated","true"),this.shadowRoot&&(this.hydrateObserver=new MutationObserver(()=>{this.hydrateElements()}),this.hydrateObserver.observe(this.shadowRoot,{childList:!0,subtree:!0})),this.i18n&&document.addEventListener("ri-language-change",this.onLanguageChange)}disconnectedCallback(){this.hydrateObserver?.disconnect(),this.i18n&&document.removeEventListener("ri-language-change",this.onLanguageChange),super.disconnectedCallback()}};d([Bt()],T.prototype,"hydrateObserver",2);var M=class extends T{constructor(){super(...arguments);this.variant="inside";this.absoluteScale=1}};d([u({reflect:!0,type:String})],M.prototype,"variant",2),d([u({reflect:!0,type:Number})],M.prototype,"absoluteScale",2);var N=class extends M{constructor(){super(...arguments);this._ref=Ft();this._variant="inline"}render(){return sr({sequence:this.sequence,variant:this._variant,transportType:this.transportType,hidePlatformStructure:this.hidePlatformStructure,descriptionList:this.descriptionList,trainSplitting:this.trainSplitting,postfix:this.postfix,_ref:this._ref})}handleVariantDetection(){if(this._ref.value){let r=this._ref?.value?.getRootNode()?.host?.parentElement?.clientWidth??0,i=this._ref?.value?[...this._ref.value.children].find(a=>a.classList.contains("ri-platform-car-scroll-container")):void 0;if(i){let a=[...i.children].find(n=>n.classList.contains("ri-cars-background"));a&&(this._variant=this.variant==="absolute"||a?.scrollWidth>r?"absolute":"inside")}}else this._variant=this.variant}async firstUpdated(){this.handleVariantDetection()}connectedCallback(){super.connectedCallback(),this.handleVariantDetection()}disconnectedCallback(){super.disconnectedCallback()}static{this.styles=y([or,S].join(`
`))}};d([u({reflect:!0,type:Object})],N.prototype,"sequence",2),d([u({reflect:!0,type:String})],N.prototype,"transportType",2),d([u({reflect:!0,type:Boolean})],N.prototype,"hidePlatformStructure",2),d([u({reflect:!0,type:String})],N.prototype,"descriptionList",2),d([u({reflect:!0,type:Array})],N.prototype,"trainSplitting",2),d([u({reflect:!0,type:String})],N.prototype,"postfix",2),d([Bt()],N.prototype,"_variant",2);var di=e=>{if(!e)return o``;let t=e?.toLowerCase()==="backwards",{departureDirectionString:r,platformDirection:i}=Zt(e);return o`
		<abbr
			data-icon="${t?"arrow_left":l}"
			title="${i}"
			data-icon-trailing="${t?l:"arrow_right"}"
		>
			<span>${i}</span>
			<span aria-hidden="true">${r}</span>
		</abbr>
	`},pi=(e,t,r)=>{let i=c("platform.sector","Abschnitt");return o` <li
		style="--sector-width: ${e}; --cube-position: ${r}"
	>
		<ri-platform-tag
			emphasis="strong"
			title="${i} ${t}"
		>
			${t}
		</ri-platform-tag>
	</li>`},ui=e=>c("platform.platform","Bahnsteig {{name}}",{name:e.details?.name??""}),fi=e=>{if(e.details?.sectors&&e.details.sectors.length>1){let t=e.details?.sectors,r=t.at(0),i=t.at(-1);if(r?.name&&i?.name)return c("platform.sectors","Bereiche {{first}} bis {{last}}",{first:r.name,last:i.name})}return l},mi=({platform:e,platformWidth:t,isAbsolute:r,measurements:i,absoluteScale:a})=>o` <ol
		aria-label="${ui(e)}"
		aria-description="${fi(e)}"
		aria-hidden="${i.widthChildren.length===0}"
		data-no-sectors="${i.widthChildren.length===0}"
		style="--platform-width: ${t}"
	>
		${e?.details?.sectors?.map((n,s)=>{let p=de(i.widthChildren[s],r?a:void 0),f=de(Be(n));return pi(p,n.name,f)})}
	</ol>`,cr=({departureDirection:e,platform:t,absoluteScale:r,variant:i})=>{let a=o``,n=o`<span>No sectors provided!</span>`;(t?.details?.name||e)&&(a=o`<div>
			${Je({platformName:t?.details?.name})}${di(e)}
		</div>`);let s=Gt(t,i);if(t&&s){let p=Ue(s,i,r);n=mi({platform:t,platformWidth:p,isAbsolute:i==="absolute",measurements:s,absoluteScale:r})}return o`
		<div class="ri-platform-structure">${a} ${n}</div>
	`};var lr={};var ot=class extends M{render(){return cr({departureDirection:this.departureDirection,platform:this.platform,variant:this.variant,absoluteScale:this.absoluteScale})}static{this.styles=y([lr,S].join(`
`))}};d([u({reflect:!0,type:String})],ot.prototype,"departureDirection",2),d([u({reflect:!0,type:Object})],ot.prototype,"platform",2);var dr=({variant:e,emphasis:t,title:r})=>{let i=o`${c("platform.missingTitle","Missing title property!")}`;return r&&(i=o`
			<abbr title="${r}">
				<span>${r}</span>
				<span aria-hidden="true"><slot></slot></span>
			</abbr>
		`),o` <div
		part="root"
		class="db-tag ri-platform-tag"
		data-icon="${e==="changed"?"exclamation_mark_circle":l}"
		data-variant="${e}"
		data-emphasis="${t}"
	>
		${i}
	</div>`};var pr={};var tt=class extends T{constructor(){super(...arguments);this.variant="set";this.emphasis="weak"}render(){return dr({variant:this.variant,emphasis:this.emphasis,title:this.title})}static{this.styles=y([pr,S].join(`
`))}};d([u({reflect:!0,type:String})],tt.prototype,"variant",2),d([u({reflect:!0,type:String})],tt.prototype,"emphasis",2),d([u({reflect:!0,type:String})],tt.prototype,"title",2);var gt=class extends tt{};gt.styles=[...x(),...C(gt.styles)];customElements.get("ri-platform-tag")||customElements.define("ri-platform-tag",gt);var vt=class extends ot{};vt.styles=[...x(),...C(vt.styles)];customElements.get("ri-platform-structure")||customElements.define("ri-platform-structure",vt);var gi=({customAnchors:e,interactive:t,vehicle:r,postfix:i})=>{let a=e?.[D(r,i)];return a||(t==="link"?`#${G(r,i)}`:l)},vi=(e,t)=>e===0&&t===1?"single":e===0?"start":t-1===e?"end":"middle",yi=(e,t)=>{let r="";return e?.journeyDescription&&(r+=`${e?.journeyDescription}`,t&&(r+=c("carSequence.trainTo"," nach {{destination}}",{destination:t}).replace("{{journey}} ",""))),r},xi=e=>{let t=e?c("carSequence.labelPart"," {{index}}. Zugteil",{index:e}):"";return c("carSequence.label","Wagenreihung{{index}}",{index:t})},Ci=e=>{let t=e?.filter(r=>r.type.hasFirstClass&&r.platformPosition?.sector&&r.platformPosition.sector!=="CLOSED");if(t&&t.length>0){let r=t.map(i=>i.platformPosition.sector).filter((i,a,n)=>n.indexOf(i)===a&&i!=="CLOSED").join(" und ");return c("carSequence.firstClassSector",", 1. Klasse im Abschnitt {{sectors}}",{sectors:r})}return""},Si=(e,t)=>{let r="";if(t&&(r+=`${t}`),e?.length&&(r+=c("carSequence.wagons",", {{count}} Wagen",{count:e.length}),e?.length>1)){let i=e.at(0),a=e.at(-1);i?.wagonIdentificationNumber&&a?.wagonIdentificationNumber&&(r+=c("carSequence.wagonNumbers",", Wagennummer {{first}} bis {{last}}",{first:i.wagonIdentificationNumber,last:a.wagonIdentificationNumber}))}return r+=`${Ci(e)}`,r},$i=(e,t)=>{if(!t)return o``;let{category:r,journeyDescription:i,label:a}=t;return o`<div class="ri-train-splitting-tag-container">
		<ri-transport-tag
			.label="${a??l}"
			.journeyDescription="${i??l}"
			.category="${r??l}"
			.transportText="${e}"
			title="${e}"
			static
			overflow
		></ri-transport-tag>
	</div>`},ur=({vehicles:e,transportType:t,trainSplitTransport:r,destination:i,active:a,interactive:n,customAnchors:s,variant:p,platformWidth:f,absoluteScale:m,describedBys:h,groupIndex:b,postfix:v})=>{if(!e||e.length===0)return o`No vehicles provided`;let A=e[0].orientation==="FORWARDS",P=qe(e,p),L=yi(r,i);return o`<div class="ri-car-sequence-container">
		${Jt(e)?l:$i(L,r)}
		<ul
			aria-label="${xi(b)}"
			aria-description="${Si(e,L)}"
			class="ri-car-sequence"
		>
			${e?.map(($,w)=>{let g=Fe({index:w,carMeasurements:P,variant:p,absoluteScale:m,platformWidth:f}),I=h?h[D($,v)]:void 0,R=vi(w,e.length);return o`<li style="${g}">
					<ri-car-item
						data-car-id="${D($,v)}"
						.active="${D($,v)===a}"
						.anchor="${gi({vehicle:$,interactive:n,customAnchors:s,postfix:v})}"
						.interactive="${n}"
						.variant="${R}"
						.vehicle="${$}"
						.transportType="${t}"
						.describedBy="${I}"
						.carIndex="${(w+1).toString()}"
					></ri-car-item>
				</li>`})}
		</ul>
	</div>`};var fr={};var yt=class extends M{};d([u({reflect:!0,type:Number})],yt.prototype,"platformWidth",2);var E=class extends yt{constructor(){super(...arguments);this.isInteractive=()=>!!this.interactive;this.handleAnchorChange=({newURL:r})=>{if(r.includes("#")){if(this.customAnchors){let i=Object.entries(this.customAnchors).find(([,a])=>r.includes(a));if(i){this.active=i[0];return}}if(this.interactive&&this.vehicles){let i=r.split("#")[1].replace("vehicle-",""),a=this.vehicles.find(n=>D(n,this.postfix)===i);if(a){this.active=D(a,this.postfix);return}}}this.active=""}}render(){return ur({vehicles:this.vehicles,transportType:this.transportType,trainSplitTransport:this.trainSplitTransport,destination:this.destination,active:this.active,customAnchors:this.customAnchors,interactive:this.interactive,variant:this.variant,absoluteScale:this.absoluteScale,platformWidth:this.platformWidth,describedBys:this.describedBys,groupIndex:this.groupIndex,postfix:this.postfix})}async firstUpdated(){typeof window!==void 0&&this.isInteractive()&&this.handleAnchorChange({newURL:window.location.href})}connectedCallback(){super.connectedCallback(),typeof window!==void 0&&this.isInteractive()&&window.addEventListener("hashchange",this.handleAnchorChange)}disconnectedCallback(){typeof window!==void 0&&this.isInteractive()&&window.removeEventListener("hashchange",this.handleAnchorChange),super.disconnectedCallback()}static{this.styles=y([fr,S].join(`
`))}};d([u({reflect:!0,type:Array})],E.prototype,"vehicles",2),d([u({reflect:!0,type:String})],E.prototype,"active",2),d([u({reflect:!0,type:String})],E.prototype,"interactive",2),d([u({reflect:!0,type:Object})],E.prototype,"customAnchors",2),d([u({reflect:!0,type:Object})],E.prototype,"describedBys",2),d([u({reflect:!0,type:String})],E.prototype,"transportType",2),d([u({reflect:!0,type:Object})],E.prototype,"trainSplitTransport",2),d([u({reflect:!0,type:String})],E.prototype,"destination",2),d([u({reflect:!0,type:Number})],E.prototype,"platformWidth",2),d([u({reflect:!0,type:String})],E.prototype,"groupIndex",2),d([u({reflect:!0,type:String})],E.prototype,"postfix",2);var mr=({active:e,vehicle:t,variant:r,anchor:i,transportType:a,interactive:n,carIndex:s,postfix:p})=>o`<div class="ri-car-item" data-active="${e}">
		${Yt({vehicle:t,active:e})}
		<ri-car
			.active="${e}"
			.variant="${r}"
			.vehicle="${t}"
			.anchor="${i}"
			.interactive="${n}"
			.transportType="${a}"
			.carIndex="${s}"
			.postfix="${p}"
		></ri-car>
		<div class="ri-car-item-active-container"></div>
		<ri-car-amenities .amenities="${t?.amenities}"></ri-car-amenities>
	</div>`;var br={};var Ai={BISTRO:"knife_and_fork",AIR_CONDITION:"air_condition",BIKE_SPACE:"bike",TOILET:"wc_sign",WHEELCHAIR_SPACE:"person_with_wheelchair",TOILET_WHEELCHAIR:"restricted_mobility_toilet",BOARDING_AID:"vehicle_entry_aid",CABIN_INFANT:"childrens_compartment",ZONE_QUIET:"quiet_zone",ZONE_FAMILY:"family_compartment",INFO:"information_circle",SEATS_SEVERELY_DISABLED:"traveler_with_reduced_mobility",SEATS_BAHN_COMFORT:"bahnbonus",SEATS_BAHN_BONUS:"bahnbonus",SEATS_LUFTHANSA_EXPRESS_RAIL:"rail_and_fly",WIFI:"wifi",ZONE_MULTI_PURPOSE:void 0},et=e=>Ai[e.type]??"question_mark_circle",rt=(e,t,r)=>{let i="";return r&&(i=i+`${r} `),e==="NOT_AVAILABLE"&&(i=i+c("amenities.status.notAvailable","Nicht Verf\xFCgbar")),e==="RESERVED"&&(i=i+c("amenities.status.reserved","Reserviert")),e==="AVAILABLE"&&(i=i+c("amenities.status.available","Verf\xFCgbar")),`${c(`amenities.icon.${t}`,t)}${i?.length?` - ${i}`:""}`};var Ti={knife_and_fork:"Speisewagen",air_condition:"Klimaanlage",bike:"Fahrradstellpl\xE4tze",wc_sign:"Toilette",person_with_wheelchair:"Rollstuhlstellpl\xE4tze",restricted_mobility_toilet:"Rollstuhlg\xE4ngige Toilette",vehicle_entry_aid:"Einstiegshilfe",childrens_compartment:"Kleinkindabteil",quiet_zone:"Ruhebereich",family_compartment:"Familienbereich",information_circle:"Info-Abteil",traveler_with_reduced_mobility:"Pl\xE4tze f\xFCr Schwerbehinderte",bahnbonus:"BahnBonus Status",rail_and_fly:"Pl\xE4tze f\xFCr LH-Codeshare",wifi:"WLAN-Hotspot",question_mark_circle:"Unbekannt",bed:"Schlafwagen",car:"Autotransportwagen",luggage_rack:"Gep\xE4ckwagen",couchette:"Liegewagen",first_class:"Erste Klasse",first_and_second_class:"Erste und Zweite Klasse",second_class:"Zweite Klasse",capacity_indicator_fully_booked:"Au\xDFergew\xF6hnlich hohe Auslastung erwartet",capacity_indicator_high:"Hohe Auslastung erwartet",capacity_indicator_moderate:"Mittlere Auslastung erwartet",capacity_indicator_low:"Geringe Auslastung erwartet"},Qt=e=>{let t=Ti[e]??e;return c(`amenities.icon.${e}`,t)};var Ce="ri-car",Ei=({vehicle:e,priorityList:t,isDoubleDeck:r,isCanceled:i})=>{let a=[];return i?a.push(c("car.closed",", Wagen geschlossen")):(t&&a.push(t.map(n=>{if(t.includes("first_class")&&t.includes("second_class")){if(n==="first_class")return"first_and_second_class";if(n==="second_class")return""}return n}).filter(n=>n.length).map(Qt).join(", ")),e.reservedSeat&&a.push(c("car.reservedSeat",", ihr reservierter Sitzplatz {{seat}}",{seat:e.reservedSeat})),r&&a.push(c("car.doubleDeck",", Doppelstockwagen")),e.platformPosition?.sector&&a.push(c("car.sector",", im Abschnitt {{sector}}",{sector:e.platformPosition.sector})),e?.amenities?.length>0&&(a.push(c("car.amenities",", Ausstattungsmerkmale: ")),a.push(e.amenities.map(n=>rt(n.status,et(n),n.amount)).join(", ")))),a.join(`
`)},Pi=(e,t)=>{let r=c("car.wagon","Wagen");return e?.wagonIdentificationNumber?r+=` ${e?.wagonIdentificationNumber}`:t&&(r+=` ${t}`),r},hr=({vehicle:e,active:t,variant:r,anchor:i,interactive:a,transportType:n,riClick:s,carIndex:p,postfix:f})=>{if(!e)return o`No car provided`;let{type:m}=e,{category:h,hasEconomyClass:b,hasFirstClass:v}=m,P=b&&v?"mixed":v?"first":l,L=Xt(e),$=L.length,w=h.startsWith("DOUBLEDECK"),g=L.includes("cancel"),I=ar({category:h,transportType:n,variant:r,uuid:D(e,f)}),R=Ei({vehicle:e,isCanceled:g,isDoubleDeck:w,priorityList:L}),j=Pi(e,p),it=o`
		<span class="ri-car-label">${j}</span>
		${I}
		<ul
			aria-hidden="true"
			class="ri-car-icon-container"
			data-car-tags="${$}"
			data-double-deck="${w}"
		>
			${L.map(at=>o`<li>
						${nr({icon:at,isDoubleDeck:w,carTagsCount:$})}
					</li>`)}
		</ul>
	`;if(!h.includes("POWERCAR")&&!h.includes("LOCOMOTIVE")){if(a==="link"&&i)return o`<a
				class="${Ce}"
				data-variant="${r}"
				aria-current="${t?"step":!1}"
				data-canceled="${g}"
				data-interactive="true"
				data-class-color="${P}"
				data-double-deck="${w}"
				href="${i}"
				aria-description="${R}"
			>
				${it}
			</a>`;if(a==="button")return o` <button
				class="${Ce}"
				data-variant="${r}"
				data-canceled="${g}"
				data-interactive="true"
				data-class-color="${P}"
				data-double-deck="${w}"
				aria-description="${R}"
				@click="${s}"
			>
				${it}
			</button>`}return o`<div
		class="${Ce}"
		data-category="${h}"
		data-variant="${r}"
		data-canceled="${g}"
		data-interactive="false"
		data-class-color="${P}"
		data-double-deck="${w}"
	>
		${it}
	</div>`};var gr={};var vr={};var yr={};var q=class extends T{};d([u({reflect:!0,type:String})],q.prototype,"anchor",2),d([u({reflect:!0,type:String})],q.prototype,"interactive",2);var k=class extends q{constructor(){super(...arguments);this.active=!1;this.variant="middle"}riClick(){this.dispatchEvent(new CustomEvent("car-click",{bubbles:!0,composed:!0,detail:this.vehicle}))}render(){return hr({vehicle:this.vehicle,active:this.active,variant:this.variant,anchor:this.anchor,interactive:this.interactive,transportType:this.transportType,carIndex:this.carIndex,postfix:this.postfix,riClick:this.riClick})}static{this.styles=y([gr,vr,yr,S].join(`
`))}};d([u({reflect:!0,type:Object})],k.prototype,"vehicle",2),d([u({reflect:!0,type:String})],k.prototype,"active",2),d([u({reflect:!0,type:String})],k.prototype,"variant",2),d([u({reflect:!0,type:String})],k.prototype,"transportType",2),d([u({reflect:!0,type:String})],k.prototype,"carIndex",2),d([u({reflect:!0,type:String})],k.prototype,"postfix",2);var te=class extends k{constructor(){super(...arguments);this.i18n=!1}render(){return mr({vehicle:this.vehicle,active:this.active,anchor:this.anchor,variant:this.variant,transportType:this.transportType,interactive:this.interactive,postfix:this.postfix})}static{this.styles=y([br,S].join(`
`))}};var xt=class extends k{};xt.styles=[...x(),...C(xt.styles)];customElements.get("ri-car")||customElements.define("ri-car",xt);var xr=({amenities:e})=>{if(!e||e.length===0)return o`<div class="ri-car-amenities-background"></div>`;let t=[],r=[];return e.length>4?(t=e.slice(0,3),r=e.slice(4,e.length)):t=e,o`<ul class="ri-car-amenities ri-car-amenities-background">
		${t.map(i=>{let a=et(i),n=i.status==="NOT_AVAILABLE"||i.status==="RESERVED";return o`<li>
				<span
					class="db-tag"
					data-no-text="true"
					data-icon="${a}"
					data-icon-trailing="${n?"cross_circle":l}"
				>
					${rt(i.status,a,i.amount)}
				</span>
			</li>`})}
		${r.length>0?o`<li>
					<span
						class="db-tag"
						data-no-text="true"
						data-icon="more_horizontal"
					>
						${r.map(i=>rt(i.status,et(i),i.amount)).join(" & ")}
					</span>
				</li>`:l}
	</ul>`};var Cr={};var Ct=class extends T{constructor(){super(...arguments);this.i18n=!1}render(){return xr({amenities:this.amenities})}static{this.styles=y([Cr,S].join(`
`))}};d([u({reflect:!0,type:Array})],Ct.prototype,"amenities",2);var St=class extends Ct{};St.styles=[...x(),...C(St.styles)];customElements.get("ri-car-amenities")||customElements.define("ri-car-amenities",St);var $t=class extends te{};$t.styles=[...x(),...C($t.styles)];customElements.get("ri-car-item")||customElements.define("ri-car-item",$t);var Se={ICE:"train",IC:"ic_and_ec",RE:"local_train",S:"s_bahn",U:"subway",STR:"tram",BUS:"local_bus",FAE:"ship",Long_distance_Bus:"long_distance_bus",SEV_Bus:"ev_bus",Ship:"ship",Plane:"airplane",Car_Sharing:"car_sharing",Taxi:"taxi",Bike_Sharing:"call_a_bike",WALK:"pedestrian",RUF:"call_in_bus"},fc=Object.keys(Se);var Di=e=>o`
	<hr class="ri-transport-tag-divider" />
	${e}
`,Ni=({text:e,replacementTransportText:t})=>o`
	<em data-icon-trailing="bus" class="ri-transport-tag-sev">
		<span aria-hidden="true" data-icon-trailing="arrow_right">
			<svg width="20" height="20" viewBox="0 0 20 20">
				<path
					d="M7.446 1.049 C 7.204 1.102,6.906 1.237,6.761 1.360 C 6.480 1.597,6.515 1.989,6.834 2.158 C 7.030 2.261,7.148 2.253,7.419 2.117 L 7.650 2.000 10.005 2.000 L 12.360 2.000 12.547 2.099 C 12.651 2.153,12.785 2.207,12.845 2.218 C 13.188 2.282,13.483 1.991,13.419 1.651 C 13.377 1.427,13.175 1.268,12.701 1.088 C 12.520 1.019,12.469 1.017,10.083 1.011 C 8.143 1.005,7.609 1.013,7.446 1.049 M8.017 2.804 C 6.534 3.000,5.275 4.014,4.834 5.367 C 4.670 5.871,4.667 5.949,4.668 10.050 C 4.668 12.403,4.681 13.972,4.701 14.112 C 4.810 14.867,5.248 15.605,5.864 16.073 C 6.302 16.405,6.977 16.673,7.502 16.721 L 7.720 16.742 7.764 16.596 C 7.820 16.406,8.014 16.221,8.205 16.173 C 8.314 16.146,8.460 16.149,8.800 16.185 C 9.359 16.244,10.601 16.245,11.177 16.186 C 11.600 16.143,11.785 16.153,11.920 16.226 C 12.043 16.292,12.196 16.494,12.220 16.620 L 12.242 16.742 12.463 16.722 C 12.939 16.677,13.525 16.464,13.954 16.179 C 14.553 15.782,15.002 15.162,15.207 14.450 L 15.283 14.183 15.283 10.033 L 15.283 5.883 15.211 5.600 C 14.857 4.218,13.764 3.206,12.250 2.858 C 11.969 2.793,11.835 2.788,10.100 2.781 C 9.083 2.776,8.145 2.787,8.017 2.804 M12.037 4.300 C 12.454 4.379,12.855 4.682,13.041 5.060 C 13.132 5.244,13.152 5.327,13.160 5.549 C 13.170 5.811,12.854 11.069,12.814 11.300 C 12.784 11.477,12.606 11.787,12.457 11.921 C 12.284 12.078,12.017 12.198,11.758 12.235 C 11.473 12.276,8.474 12.274,8.184 12.232 C 7.734 12.167,7.404 11.936,7.218 11.555 L 7.124 11.364 6.961 8.557 C 6.871 7.013,6.803 5.644,6.810 5.515 C 6.840 4.964,7.284 4.450,7.850 4.313 C 8.064 4.261,11.768 4.250,12.037 4.300 M8.703 13.778 C 9.023 13.946,9.098 14.366,8.856 14.629 C 8.695 14.805,8.568 14.832,7.900 14.832 C 7.208 14.833,7.068 14.808,6.913 14.653 C 6.705 14.445,6.690 14.130,6.878 13.919 C 7.064 13.710,7.108 13.700,7.870 13.700 C 8.524 13.700,8.563 13.704,8.703 13.778 M12.978 13.800 C 13.240 13.978,13.305 14.339,13.119 14.583 C 12.953 14.800,12.894 14.815,12.144 14.827 C 11.534 14.837,11.457 14.832,11.323 14.773 C 10.884 14.579,10.852 13.996,11.268 13.775 C 11.413 13.699,11.435 13.697,12.136 13.707 C 12.840 13.716,12.858 13.718,12.978 13.800 M6.387 17.434 C 6.193 17.493,6.033 17.709,6.033 17.915 L 6.033 18.033 5.188 18.033 C 4.365 18.033,4.340 18.035,4.230 18.109 C 4.076 18.212,3.993 18.381,4.010 18.554 C 4.028 18.730,4.114 18.848,4.286 18.933 C 4.420 18.999,4.475 19.000,10.000 19.000 C 15.525 19.000,15.580 18.999,15.714 18.933 C 15.886 18.848,15.972 18.730,15.990 18.554 C 16.007 18.381,15.924 18.212,15.770 18.109 C 15.660 18.035,15.635 18.033,14.812 18.033 L 13.967 18.033 13.967 17.932 C 13.967 17.546,13.566 17.297,13.216 17.467 C 13.032 17.556,12.958 17.660,12.934 17.864 L 12.917 18.017 10.000 18.017 L 7.083 18.017 7.066 17.864 C 7.043 17.662,6.968 17.556,6.791 17.470 C 6.637 17.396,6.544 17.388,6.387 17.434 "
					fill="currentColor"
					stroke="none"
					fill-rule="evenodd"
				></path>
			</svg>
		</span>
		${e.trim()}
		${c("platform.replacedBy","wurde ersetzt durch").replace("{{text}} ","")}
	</em>
	<hr aria-hidden="true" class="ri-transport-tag-divider" />
	<span>${t}</span>
`,Sr=({label:e,type:t,category:r,line:i,number:a,state:n,noText:s,showIcon:p,interactive:f,anchor:m,riClick:h,staticMode:b,replacementTransportText:v,overflow:A,width:P,journeyDescription:L})=>{let $=me(r)??me(t)??"UNKNOWN",w=(p||s)&&!v?.length?Se[$||""]:void 0,g=r??t,I=g&&i&&i.includes(g)?i.replace(g,"").trim():i,R=e?.length?e:L?L.replace(` (${a})`,""):`${g??""} ${I??a??""}`,j=c("platform.canceledTransport","Ausgefallenes Verkehrsmittel {{text}}",{text:R}),it=n==="canceled"?o` <span title="${j}"> ${R} </span> `:o`<span>${R}</span>`,at=r==="UNKNOWN"||t==="UNKNOWN"||!w?o`${it}`:Di(it);v?.length&&(at=Ni({text:Ke($),replacementTransportText:v}),$="SEV_Bus");let ee=at;return b||(ee=o`<button
			part="button"
			aria-label="${n==="canceled"?j:l}"
			type="button"
			@click="${h}"
		>
			${at}
		</button>`,f==="link"&&m&&(ee=o`<a
				part="link"
				aria-label="${n==="canceled"?j:l}"
				href="${m}"
			>
				${at}
			</a>`)),o`
		<div
			part="root"
			class="db-tag ri-transport-tag"
			data-emphasis="strong"
			data-overflow="${A??l}"
			data-width="${P??l}"
			data-no-text="${s??l}"
			data-variant="${$??l}"
			data-state="${n??l}"
			data-icon="${w??l}"
		>
			${ee}
		</div>
	`};var $r={};var _=class extends q{constructor(){super(...arguments);this.width="auto"}riClick(){this.dispatchEvent(new CustomEvent("transport-tag-click",{bubbles:!0,composed:!0,detail:{category:this.category,state:this.state,line:this.line,journeyDescription:this.journeyDescription,number:this.number,noText:this.noText,showIcon:this.showIcon,label:this.label,replacementTransportText:this.replacementTransportText,type:this.type,width:this.width,staticMode:this.staticMode,overflow:this.overflow,additionalEventDetail:this.additionalEventDetail}}))}render(){return Sr({category:this.category,state:this.state,line:this.line,journeyDescription:this.journeyDescription,number:this.number,noText:this.noText,showIcon:this.showIcon,label:this.label,replacementTransportText:this.replacementTransportText,type:this.type,width:this.width,staticMode:this.staticMode,overflow:this.overflow,riClick:this.riClick})}static{this.styles=y([$r,S].join(`
`))}};d([u({reflect:!0,type:String})],_.prototype,"category",2),d([u({reflect:!0,type:String})],_.prototype,"type",2),d([u({reflect:!0,type:String})],_.prototype,"state",2),d([u({reflect:!0,type:String})],_.prototype,"width",2),d([u({reflect:!0,type:String})],_.prototype,"line",2),d([u({reflect:!0,type:String})],_.prototype,"journeyDescription",2),d([u({reflect:!0,type:Number})],_.prototype,"number",2),d([u({reflect:!0,type:String})],_.prototype,"label",2),d([u({reflect:!0,type:String})],_.prototype,"replacementTransportText",2),d([u({reflect:!0,type:Boolean})],_.prototype,"noText",2),d([u({reflect:!0,type:Boolean})],_.prototype,"showIcon",2),d([u({attribute:"static",reflect:!0,type:Boolean})],_.prototype,"staticMode",2),d([u({reflect:!0,type:Boolean})],_.prototype,"overflow",2),d([u({reflect:!0,type:Object})],_.prototype,"additionalEventDetail",2);var _t=class extends _{};_t.styles=[...x(),...C(_t.styles)];customElements.get("ri-transport-tag")||customElements.define("ri-transport-tag",_t);var wt=class extends E{};wt.styles=[...x(),...C(wt.styles)];customElements.get("ri-car-sequence")||customElements.define("ri-car-sequence",wt);var _r=({vehicles:e,active:t,single:r,postfix:i,_refs:a})=>{console.log(e,r,t);let n=r?e?.filter(s=>G(s)===t):e;return n?o`<ul
		aria-label="${c("car.detailsLabel","Details zur Wagenreihung")}"
		class="ri-car-description-list"
	>
		${n?.map(s=>{let p=G(s,i),f=Ft();return a[p]=f,o`<li ${Kt(f)}>
				<ri-car-description
					.vehicle="${s}"
					.active="${p===t||l}"
				></ri-car-description>
			</li>`})}
	</ul>`:l};var wr={};var W=class extends T{constructor(){super(...arguments);this.refs={};this.handleAnchorChange=({newURL:r})=>{if(r.includes("#")&&this.vehicles){let i=r.split("#")[1],a=this.vehicles.find(n=>G(n,this.postfix)===i);if(a){let n=G(a,this.postfix);this.active=n;let s=this.refs[n];s&&s.value?.scrollIntoView({behavior:"smooth"});return}else{this.active="";return}}}}render(){return _r({vehicles:this.vehicles,active:this.active,postfix:this.postfix,single:this.single,_refs:this.refs})}async firstUpdated(){typeof window!==void 0&&this.handleAnchorChange({newURL:window.location.href})}connectedCallback(){super.connectedCallback(),typeof window!==void 0&&window.addEventListener("hashchange",this.handleAnchorChange)}disconnectedCallback(){typeof window!==void 0&&window.removeEventListener("hashchange",this.handleAnchorChange),super.disconnectedCallback()}static{this.styles=y([wr,S].join(`
`))}};d([u({reflect:!0,type:Array})],W.prototype,"vehicles",2),d([u({reflect:!0,type:String})],W.prototype,"active",2),d([u({reflect:!0,type:Boolean})],W.prototype,"single",2),d([u({reflect:!0,type:String})],W.prototype,"postfix",2);var Oi=e=>{switch(e){case"capacity_indicator_fully_booked":return"critical";case"capacity_indicator_high":return"warning";default:return"neutral"}},zi=e=>{if(!e.reservedSeat)return l;let t=e.reservedSeat;return e.wagonIdentificationNumber&&(t+=c("car.inWagon",", in Wagen {{wagon}}",{wagon:e.wagonIdentificationNumber})),e.platformPosition?.sector&&(t+=c("car.inSector",", im Abschnitt {{sector}}",{sector:e.platformPosition.sector})),o`<div class="ri-car-description-reserved-seat-container">
		<div class="ri-car-description-reserved-seat">
			<span
				class="db-tag"
				data-emphasis="strong"
				data-no-text="true"
				data-icon="aisle"
				data-size="small"
				data-semantic="successful"
			></span>
			<span class="ri-car-description-reserved-seat-text">
				${c("car.reservedSeatLabel","Ihr reservierter Sitzplatz")}
				<span>${t}</span>
			</span>
		</div>
		<div
			class="ri-car-description-reserved-seat-additional-information"
			aria-hidden="true"
		>
			<span>${c("car.sectorLabel","Abschnitt")}</span>
			<span>${c("car.wagonLabel","Wagen")}</span>
			<span>${c("car.seatLabel","Sitzplatz")}</span>
			<span
				>${e.platformPosition?.sector??c("car.unknown","Unbekannt")}</span
			>
			<span
				>${e.wagonIdentificationNumber??c("car.unknown","Unbekannt")}</span
			>
			<span>${e.reservedSeat}</span>
		</div>
	</div>`},Ar=({vehicle:e,active:t})=>{if(!e)return o`No vehicle provided`;let r=Xt(e);return o`<div class="ri-car-description">
		${Yt({vehicle:e,fullText:!0,active:t})}
		${zi(e)}
		<ul>
			${r.map(i=>o`<li>
						<span
							class="db-infotext"
							data-semantic="${Oi(i)}"
							data-icon="${i}"
						>
							${Qt(i)}
						</span>
					</li>`)}
			${e.amenities.map(i=>{let a=et(i),n=i.status==="NOT_AVAILABLE"||i.status==="RESERVED",s=rt(i.status,a,i.amount);return o`<li>
					<span
						class="db-infotext"
						data-icon-trailing="${n?"cross_circle":l}"
						data-icon="${a}"
					>
						${s}
					</span>
				</li>`})}
		</ul>
	</div>`};var Tr={};var Er={};var ct=class extends T{render(){return Ar({vehicle:this.vehicle,active:this.active})}static{this.styles=y([Tr,S,Er].join(`
`))}};d([u({reflect:!0,type:Object})],ct.prototype,"vehicle",2),d([u({reflect:!0,type:String})],ct.prototype,"active",2);var At=class extends ct{};At.styles=[...x(),...C(At.styles)];customElements.get("ri-car-description")||customElements.define("ri-car-description",At);var Tt=class extends W{};Tt.styles=[...x(),...C(Tt.styles)];customElements.get("ri-car-description-list")||customElements.define("ri-car-description-list",Tt);var Et=class extends N{};Et.styles=[...x(),...C(Et.styles)];customElements.get("ri-car-sequence-overview")||customElements.define("ri-car-sequence-overview",Et);})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
lit-html/directive.js:
lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
