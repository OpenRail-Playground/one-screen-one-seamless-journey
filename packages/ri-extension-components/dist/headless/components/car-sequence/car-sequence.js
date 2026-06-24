"use strict";(()=>{var Be=Object.defineProperty;var De=Object.getOwnPropertyDescriptor;var l=(e,t,r,a)=>{for(var i=a>1?void 0:a?De(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(a?s(t,r,i):s(i))||i);return a&&i&&Be(t,r,i),i};var gt=globalThis,mt=gt.ShadowRoot&&(gt.ShadyCSS===void 0||gt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,qt=Symbol(),Gt=new WeakMap,ft=class{constructor(t,r,a){if(this._$cssResult$=!0,a!==qt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o,r=this.t;if(mt&&t===void 0){let a=r!==void 0&&r.length===1;a&&(t=Gt.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),a&&Gt.set(r,t))}return t}toString(){return this.cssText}},$=e=>new ft(typeof e=="string"?e:e+"",void 0,qt);var jt=(e,t)=>{if(mt)e.adoptedStyleSheets=t.map((r=>r instanceof CSSStyleSheet?r:r.styleSheet));else for(let r of t){let a=document.createElement("style"),i=gt.litNonce;i!==void 0&&a.setAttribute("nonce",i),a.textContent=r.cssText,e.appendChild(a)}},$t=mt?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(let a of t.cssRules)r+=a.cssText;return $(r)})(e):e;var{is:Me,defineProperty:Ue,getOwnPropertyDescriptor:He,getOwnPropertyNames:ze,getOwnPropertySymbols:We,getPrototypeOf:Ge}=Object,vt=globalThis,Ft=vt.trustedTypes,qe=Ft?Ft.emptyScript:"",je=vt.reactiveElementPolyfillSupport,J=(e,t)=>e,Q={toAttribute(e,t){switch(t){case Boolean:e=e?qe:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},yt=(e,t)=>!Me(e,t),Kt={attribute:!0,type:String,converter:Q,reflect:!1,useDefault:!1,hasChanged:yt};Symbol.metadata??=Symbol("metadata"),vt.litPropertyMetadata??=new WeakMap;var P=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Kt){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){let a=Symbol(),i=this.getPropertyDescriptor(t,a,r);i!==void 0&&Ue(this.prototype,t,i)}}static getPropertyDescriptor(t,r,a){let{get:i,set:n}=He(this.prototype,t)??{get(){return this[r]},set(s){this[r]=s}};return{get:i,set(s){let c=i?.call(this);n?.call(this,s),this.requestUpdate(t,c,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Kt}static _$Ei(){if(this.hasOwnProperty(J("elementProperties")))return;let t=Ge(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(J("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(J("properties"))){let r=this.properties,a=[...ze(r),...We(r)];for(let i of a)this.createProperty(i,r[i])}let t=this[Symbol.metadata];if(t!==null){let r=litPropertyMetadata.get(t);if(r!==void 0)for(let[a,i]of r)this.elementProperties.set(a,i)}this._$Eh=new Map;for(let[r,a]of this.elementProperties){let i=this._$Eu(r,a);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let r=[];if(Array.isArray(t)){let a=new Set(t.flat(1/0).reverse());for(let i of a)r.unshift($t(i))}else t!==void 0&&r.push($t(t));return r}static _$Eu(t,r){let a=r.attribute;return a===!1?void 0:typeof a=="string"?a:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,r=this.constructor.elementProperties;for(let a of r.keys())this.hasOwnProperty(a)&&(t.set(a,this[a]),delete this[a]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return jt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,r,a){this._$AK(t,a)}_$ET(t,r){let a=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,a);if(i!==void 0&&a.reflect===!0){let n=(a.converter?.toAttribute!==void 0?a.converter:Q).toAttribute(r,a.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,r){let a=this.constructor,i=a._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let n=a.getPropertyOptions(i),s=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:Q;this._$Em=i;let c=s.fromAttribute(r,n.type);this[i]=c??this._$Ej?.get(i)??c,this._$Em=null}}requestUpdate(t,r,a){if(t!==void 0){let i=this.constructor,n=this[t];if(a??=i.getPropertyOptions(t),!((a.hasChanged??yt)(n,r)||a.useDefault&&a.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,a))))return;this.C(t,r,a)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:a,reflect:i,wrapped:n},s){a&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??r??this[t]),n!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||a||(r=void 0),this._$AL.set(t,r)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[i,n]of a){let{wrapped:s}=n,c=this[i];s!==!0||this._$AL.has(i)||c===void 0||this.C(i,void 0,n,c)}}let t=!1,r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach((a=>a.hostUpdate?.())),this.update(r)):this._$EM()}catch(a){throw t=!1,this._$EM(),a}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach((r=>r.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((r=>this._$ET(r,this[r]))),this._$EM()}updated(t){}firstUpdated(t){}};P.elementStyles=[],P.shadowRootOptions={mode:"open"},P[J("elementProperties")]=new Map,P[J("finalized")]=new Map,je?.({ReactiveElement:P}),(vt.reactiveElementVersions??=[]).push("2.1.1");var It=globalThis,Ct=It.trustedTypes,Zt=Ct?Ct.createPolicy("lit-html",{createHTML:e=>e}):void 0,ee="$lit$",O=`lit$${Math.random().toFixed(9).slice(2)}$`,re="?"+O,Fe=`<${re}>`,W=document,et=()=>W.createComment(""),rt=e=>e===null||typeof e!="object"&&typeof e!="function",Pt=Array.isArray,Ke=e=>Pt(e)||typeof e?.[Symbol.iterator]=="function",At=`[ 	
\f\r]`,tt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Xt=/-->/g,Yt=/>/g,H=RegExp(`>|${At}(?:([^\\s"'>=/]+)(${At}*=${At}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Jt=/'/g,Qt=/"/g,ae=/^(?:script|style|textarea|title)$/i,kt=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),h=kt(1),Or=kt(2),Vr=kt(3),G=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),te=new WeakMap,z=W.createTreeWalker(W,129);function ie(e,t){if(!Pt(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Zt!==void 0?Zt.createHTML(t):t}var Ze=(e,t)=>{let r=e.length-1,a=[],i,n=t===2?"<svg>":t===3?"<math>":"",s=tt;for(let c=0;c<r;c++){let o=e[c],b,f,g=-1,m=0;for(;m<o.length&&(s.lastIndex=m,f=s.exec(o),f!==null);)m=s.lastIndex,s===tt?f[1]==="!--"?s=Xt:f[1]!==void 0?s=Yt:f[2]!==void 0?(ae.test(f[2])&&(i=RegExp("</"+f[2],"g")),s=H):f[3]!==void 0&&(s=H):s===H?f[0]===">"?(s=i??tt,g=-1):f[1]===void 0?g=-2:(g=s.lastIndex-f[2].length,b=f[1],s=f[3]===void 0?H:f[3]==='"'?Qt:Jt):s===Qt||s===Jt?s=H:s===Xt||s===Yt?s=tt:(s=H,i=void 0);let C=s===H&&e[c+1].startsWith("/>")?" ":"";n+=s===tt?o+Fe:g>=0?(a.push(b),o.slice(0,g)+ee+o.slice(g)+O+C):o+O+(g===-2?c:C)}return[ie(e,n+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),a]},at=class e{constructor({strings:t,_$litType$:r},a){let i;this.parts=[];let n=0,s=0,c=t.length-1,o=this.parts,[b,f]=Ze(t,r);if(this.el=e.createElement(b,a),z.currentNode=this.el.content,r===2||r===3){let g=this.el.content.firstChild;g.replaceWith(...g.childNodes)}for(;(i=z.nextNode())!==null&&o.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(let g of i.getAttributeNames())if(g.endsWith(ee)){let m=f[s++],C=i.getAttribute(g).split(O),S=/([.?@])?(.*)/.exec(m);o.push({type:1,index:n,name:S[2],strings:C,ctor:S[1]==="."?Et:S[1]==="?"?Tt:S[1]==="@"?Rt:K}),i.removeAttribute(g)}else g.startsWith(O)&&(o.push({type:6,index:n}),i.removeAttribute(g));if(ae.test(i.tagName)){let g=i.textContent.split(O),m=g.length-1;if(m>0){i.textContent=Ct?Ct.emptyScript:"";for(let C=0;C<m;C++)i.append(g[C],et()),z.nextNode(),o.push({type:2,index:++n});i.append(g[m],et())}}}else if(i.nodeType===8)if(i.data===re)o.push({type:2,index:n});else{let g=-1;for(;(g=i.data.indexOf(O,g+1))!==-1;)o.push({type:7,index:n}),g+=O.length-1}n++}}static createElement(t,r){let a=W.createElement("template");return a.innerHTML=t,a}};function F(e,t,r=e,a){if(t===G)return t;let i=a!==void 0?r._$Co?.[a]:r._$Cl,n=rt(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(e),i._$AT(e,r,a)),a!==void 0?(r._$Co??=[])[a]=i:r._$Cl=i),i!==void 0&&(t=F(e,i._$AS(e,t.values),i,a)),t}var wt=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:r},parts:a}=this._$AD,i=(t?.creationScope??W).importNode(r,!0);z.currentNode=i;let n=z.nextNode(),s=0,c=0,o=a[0];for(;o!==void 0;){if(s===o.index){let b;o.type===2?b=new it(n,n.nextSibling,this,t):o.type===1?b=new o.ctor(n,o.name,o.strings,this,t):o.type===6&&(b=new Lt(n,this,t)),this._$AV.push(b),o=a[++c]}s!==o?.index&&(n=z.nextNode(),s++)}return z.currentNode=W,i}p(t){let r=0;for(let a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(t,a,r),r+=a.strings.length-2):a._$AI(t[r])),r++}},it=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,a,i){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=a,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=F(this,t,r),rt(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==G&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ke(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&rt(this._$AH)?this._$AA.nextSibling.data=t:this.T(W.createTextNode(t)),this._$AH=t}$(t){let{values:r,_$litType$:a}=t,i=typeof a=="number"?this._$AC(t):(a.el===void 0&&(a.el=at.createElement(ie(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===i)this._$AH.p(r);else{let n=new wt(i,this),s=n.u(this.options);n.p(r),this.T(s),this._$AH=n}}_$AC(t){let r=te.get(t.strings);return r===void 0&&te.set(t.strings,r=new at(t)),r}k(t){Pt(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,a,i=0;for(let n of t)i===r.length?r.push(a=new e(this.O(et()),this.O(et()),this,this.options)):a=r[i],a._$AI(n),i++;i<r.length&&(this._$AR(a&&a._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){let a=t.nextSibling;t.remove(),t=a}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},K=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,a,i,n){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=n,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=p}_$AI(t,r=this,a,i){let n=this.strings,s=!1;if(n===void 0)t=F(this,t,r,0),s=!rt(t)||t!==this._$AH&&t!==G,s&&(this._$AH=t);else{let c=t,o,b;for(t=n[0],o=0;o<n.length-1;o++)b=F(this,c[a+o],r,o),b===G&&(b=this._$AH[o]),s||=!rt(b)||b!==this._$AH[o],b===p?t=p:t!==p&&(t+=(b??"")+n[o+1]),this._$AH[o]=b}s&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Et=class extends K{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},Tt=class extends K{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}},Rt=class extends K{constructor(t,r,a,i,n){super(t,r,a,i,n),this.type=5}_$AI(t,r=this){if((t=F(this,t,r,0)??p)===G)return;let a=this._$AH,i=t===p&&a!==p||t.capture!==a.capture||t.once!==a.once||t.passive!==a.passive,n=t!==p&&(a===p||i);i&&this.element.removeEventListener(this.name,this,a),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Lt=class{constructor(t,r,a){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(t){F(this,t)}};var Xe=It.litHtmlPolyfillSupport;Xe?.(at,it),(It.litHtmlVersions??=[]).push("3.3.1");var ne=(e,t,r)=>{let a=r?.renderBefore??t,i=a._$litPart$;if(i===void 0){let n=r?.renderBefore??null;a._$litPart$=i=new it(t.insertBefore(et(),n),n,void 0,r??{})}return i._$AI(e),i};var Nt=globalThis,V=class extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ne(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return G}};V._$litElement$=!0,V.finalized=!0,Nt.litElementHydrateSupport?.({LitElement:V});var Ye=Nt.litElementPolyfillSupport;Ye?.({LitElement:V});(Nt.litElementVersions??=[]).push("4.2.1");var Je={attribute:!0,type:String,converter:Q,reflect:!1,hasChanged:yt},Qe=(e=Je,t,r)=>{let{kind:a,metadata:i}=r,n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),a==="setter"&&((e=Object.create(e)).wrapped=!0),n.set(r.name,e),a==="accessor"){let{name:s}=r;return{set(c){let o=t.get.call(this);t.set.call(this,c),this.requestUpdate(s,o,e)},init(c){return c!==void 0&&this.C(s,void 0,e,c),c}}}if(a==="setter"){let{name:s}=r;return function(c){let o=this[s];t.call(this,c),this.requestUpdate(s,o,e)}}throw Error("Unsupported decorator location: "+a)};function d(e){return(t,r)=>typeof r=="object"?Qe(e,t,r):((a,i,n)=>{let s=i.hasOwnProperty(n);return i.constructor.createProperty(n,a),s?Object.getOwnPropertyDescriptor(i,n):void 0})(e,t,r)}function se(e){return d({...e,state:!0,attribute:!1})}var B=84,D=54,nt=e=>h`
	<svg
		aria-hidden="true"
		data-shape="wagon"
		width="${B}"
		height="${D}"
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
`,oe=(e,t)=>{switch(t){case"single":return h`
				<svg
					aria-hidden="true"
					data-shape="controlcar-single"
					width="${B}"
					height="${D}"
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
			`;case"end":return h`
				<svg
					aria-hidden="true"
					data-shape="ice-right"
					width="${B}"
					height="${D}"
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
			`;case"start":return h`
				<svg
					aria-hidden="true"
					data-shape="ice-left"
					width="${B}"
					height="${D}"
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
			`;default:return nt(e)}},ce=(e,t)=>{switch(t){case"single":return h`
				<svg
					aria-hidden="true"
					data-shape="controlcar-single"
					width="${B}"
					height="${D}"
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
			`;case"end":return h`
				<svg
					aria-hidden="true"
					data-shape="controlcar-right"
					width="${B}"
					height="${D}"
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
			`;case"start":return h`
				<svg
					aria-hidden="true"
					data-shape="controlcar-left"
					width="${B}"
					height="${D}"
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
			`;default:return nt(e)}},le=e=>h`
	<svg
		data-shape="double-control-car"
		width="${B}"
		height="${D}"
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
`,de=e=>h`
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
`;var Ot="__ri_localization_store__",Vt=window;Vt[Ot]||(Vt[Ot]={content:{},lang:"de"});var M=Vt[Ot],Bt=class{static setProviderContent(t,r){M.content={...M.content,[t]:r}}static setLanguage(t){t!==M.lang&&(M.lang=t,document.dispatchEvent(new CustomEvent("ri-language-change",{detail:{lang:t}})))}static getLanguage(){return M.lang}static getContent(){return M.content[M.lang]??M.content.de}};function u(e,t,r){let i=Bt.getContent()?.[e]??t??e;return r&&(i=i.replace(/\{\{(\w+)}}/g,(n,s)=>String(r[s]??`{{${s}}}`))),i}var tr=e=>!!(e&&(e.levelFirstClass&&e.levelFirstClass!=="UNDEFINED"||e.levelEconomyClass&&e.levelEconomyClass!=="UNDEFINED")),pe=(e,t)=>{if(!t)return;let r=e?t.levelFirstClass:t.levelEconomyClass;if(r=="OVERCROWDED")return"capacity_indicator_fully_booked";if(r==="HIGH")return"capacity_indicator_high";if(r==="MIDDLE")return"capacity_indicator_moderate";if(r==="LOW")return"capacity_indicator_low"},er=e=>{if(e=="capacity_indicator_fully_booked")return"critical";if(e==="capacity_indicator_high"||e==="capacity_indicator_moderate")return"warning"},Dt=e=>e.startsWith("SLEEPER_"),Mt=e=>e.startsWith("COUCHETTE_"),rr=e=>{let t=[],{type:r}=e,a;e.occupancy&&(a=e.occupancy);let{category:i,hasFirstClass:n,hasEconomyClass:s}=r,c=tr(a),o=pe(!0,a),b=pe(!1,a);return n&&s?(t.push("first_class"),Dt(i)?t.push("bed"):Mt(i)?t.push("couchette"):c&&(a?.levelEconomyClass!=="UNDEFINED"&&b?t.push(b):a?.levelFirstClass!=="UNDEFINED"&&o&&t.push(o)),t.push("second_class"),t):n?(t.push("first_class"),Dt(i)?t.push("bed"):Mt(i)?t.push("couchette"):c&&(o?t.push(o):b&&t.push(b)),t):(s&&(t.push("second_class"),Dt(i)?t.push("bed"):Mt(i)?t.push("couchette"):c&&b&&t.push(b)),t)},ue=e=>{let{type:t}=e,{category:r}=t,a=[];if(r==="LOCOMOTIVE")return a;if(r==="DOUBLEDECK_CARCARRIER_PASSENGERTRAIN")return["car"];if(e.status==="CLOSED")return["cross_circle"];if(r==="BAGGAGECAR")return["luggage_rack"];if(r==="DININGCAR")return["knife_and_fork"];let i=rr(e);return i.length>0&&a.push(...i),r.startsWith("HALFDININGCAR")&&a.push("knife_and_fork"),a},he=({category:e,transportType:t,variant:r,uuid:a})=>{let i=`gradient-${a}`;return!e||e==="UNDEFINED"||t&&t==="UNKNOWN"?nt(i):e.includes("LOCOMOTIVE")?de(i):e.startsWith("DOUBLECONTROLCAR")?le(i):e.includes("POWERCAR")||e.includes("CONTROLCAR")&&t==="HIGH_SPEED_TRAIN"?oe(i,r):e.includes("CONTROLCAR")||e.includes("PASSENGERCARRIAGE")||e.includes("SLEEPER")||e.includes("COUCHETTE")?ce(i,r):nt(i)},E=(e,t)=>`${e.vehicleID||e.wagonIdentificationNumber}${t?`-${t}`:""}`,be=(e,t)=>`vehicle-${E(e,t)}`,ge=({vehicle:e,active:t,fullText:r})=>{if(e&&e.wagonIdentificationNumber){let a=`${u("car.wagon","Wagen")} ${e.wagonIdentificationNumber}`;return h`<span
			class="db-tag ri-car-identification"
			data-emphasis="${t?"strong":"weak"}"
			title="${a}"
		>
			${r?a:e.wagonIdentificationNumber}
		</span>`}return h``},fe=({icon:e,carTagsCount:t,isDoubleDeck:r})=>{let a=er(e),i=e==="first_class",n="weak";return r?t&&t>=2&&i&&(n="strong"):i&&(n="strong"),h`<span
		class="db-tag"
		aria-hidden="true"
		data-no-text="true"
		data-icon="${e}"
		data-capacity="${a??p}"
		data-emphasis="${n}"
	>
		${e}
	</span>`},me=e=>{if(e?.length===1){let t=e.at(0)?.type.category;return t==="LOCOMOTIVE"||t==="POWERCAR"}return!1};var ar=2.709677419,ve=(e,t)=>Math.floor(e*ar*(t||1)-1),ir=e=>e.end-e.start;var ye=(e,t,r)=>{let a=t.start||0,i=t.end||r.at(-1)?.end;if(!i)return;i-=a;let n=e==="absolute",s=r.map(c=>({start:c.start-a,end:c.end-a})).map(c=>ir(c)/(n?1:i));return{containerLength:i,widthChildren:s}},Ce=e=>e==="absolute";var xe=(e,t)=>{if(!e)return;let r=[];for(let a of e)if(a.platformPosition)r.push(a.platformPosition);else return;if(r.length>0){let a=r.at(0)?.start,i=r.at(-1)?.end;return ye(t||"inside",{start:a,end:i},r)}};var _e=({carMeasurements:e,variant:t,absoluteScale:r,platformWidth:a,index:i})=>{if(!(e&&a))return p;let n=e.widthChildren[i];if(!n)return p;let s=Ce(t),c=s?`${ve(n,r)}px`:`${n*100}%`;return a&&e?s?`--ri-car-item-width:${c};`:"--ri-car-item-width:100%;":p};var nr=({customAnchors:e,interactive:t,vehicle:r,postfix:a})=>{let i=e?.[E(r,a)];return i||(t==="link"?`#${be(r,a)}`:p)},sr=(e,t)=>e===0&&t===1?"single":e===0?"start":t-1===e?"end":"middle",or=(e,t)=>{let r="";return e?.journeyDescription&&(r+=`${e?.journeyDescription}`,t&&(r+=u("carSequence.trainTo"," nach {{destination}}",{destination:t}).replace("{{journey}} ",""))),r},cr=e=>{let t=e?u("carSequence.labelPart"," {{index}}. Zugteil",{index:e}):"";return u("carSequence.label","Wagenreihung{{index}}",{index:t})},lr=e=>{let t=e?.filter(r=>r.type.hasFirstClass&&r.platformPosition?.sector&&r.platformPosition.sector!=="CLOSED");if(t&&t.length>0){let r=t.map(a=>a.platformPosition.sector).filter((a,i,n)=>n.indexOf(a)===i&&a!=="CLOSED").join(" und ");return u("carSequence.firstClassSector",", 1. Klasse im Abschnitt {{sectors}}",{sectors:r})}return""},dr=(e,t)=>{let r="";if(t&&(r+=`${t}`),e?.length&&(r+=u("carSequence.wagons",", {{count}} Wagen",{count:e.length}),e?.length>1)){let a=e.at(0),i=e.at(-1);a?.wagonIdentificationNumber&&i?.wagonIdentificationNumber&&(r+=u("carSequence.wagonNumbers",", Wagennummer {{first}} bis {{last}}",{first:a.wagonIdentificationNumber,last:i.wagonIdentificationNumber}))}return r+=`${lr(e)}`,r},pr=(e,t)=>{if(!t)return h``;let{category:r,journeyDescription:a,label:i}=t;return h`<div class="ri-train-splitting-tag-container">
		<ri-transport-tag
			.label="${i??p}"
			.journeyDescription="${a??p}"
			.category="${r??p}"
			.transportText="${e}"
			title="${e}"
			static
			overflow
		></ri-transport-tag>
	</div>`},Se=({vehicles:e,transportType:t,trainSplitTransport:r,destination:a,active:i,interactive:n,customAnchors:s,variant:c,platformWidth:o,absoluteScale:b,describedBys:f,groupIndex:g,postfix:m})=>{if(!e||e.length===0)return h`No vehicles provided`;let C=e[0].orientation==="FORWARDS",S=xe(e,c),T=or(r,a);return h`<div class="ri-car-sequence-container">
		${me(e)?p:pr(T,r)}
		<ul
			aria-label="${cr(g)}"
			aria-description="${dr(e,T)}"
			class="ri-car-sequence"
		>
			${e?.map((x,_)=>{let w=_e({index:_,carMeasurements:S,variant:c,absoluteScale:b,platformWidth:o}),X=f?f[E(x,m)]:void 0,N=sr(_,e.length);return h`<li style="${w}">
					<ri-car-item
						data-car-id="${E(x,m)}"
						.active="${E(x,m)===i}"
						.anchor="${nr({vehicle:x,interactive:n,customAnchors:s,postfix:m})}"
						.interactive="${n}"
						.variant="${N}"
						.vehicle="${x}"
						.transportType="${t}"
						.describedBy="${X}"
						.carIndex="${(_+1).toString()}"
					></ri-car-item>
				</li>`})}
		</ul>
	</div>`};var $e={};var R={};var k=class extends V{constructor(){super(...arguments);this.i18n=!0;this.onLanguageChange=()=>{this.requestUpdate()}}async hydrateElements(){await new Promise(r=>setTimeout(r,0)),this.shadowRoot?.host.localName&&(this.shadowRoot.host.setAttribute("data-hydrated","true"),this.shadowRoot?.querySelectorAll(`.${this.shadowRoot?.host.localName}`).forEach(r=>{r?.setAttribute("data-hydrated","true")}))}connectedCallback(){super.connectedCallback(),this.shadowRoot?.host.setAttribute("data-hydrated","true"),this.shadowRoot&&(this.hydrateObserver=new MutationObserver(()=>{this.hydrateElements()}),this.hydrateObserver.observe(this.shadowRoot,{childList:!0,subtree:!0})),this.i18n&&document.addEventListener("ri-language-change",this.onLanguageChange)}disconnectedCallback(){this.hydrateObserver?.disconnect(),this.i18n&&document.removeEventListener("ri-language-change",this.onLanguageChange),super.disconnectedCallback()}};l([se()],k.prototype,"hydrateObserver",2);var Z=class extends k{constructor(){super(...arguments);this.variant="inside";this.absoluteScale=1}};l([d({reflect:!0,type:String})],Z.prototype,"variant",2),l([d({reflect:!0,type:Number})],Z.prototype,"absoluteScale",2);var st=class extends Z{};l([d({reflect:!0,type:Number})],st.prototype,"platformWidth",2);var y=class extends st{constructor(){super(...arguments);this.isInteractive=()=>!!this.interactive;this.handleAnchorChange=({newURL:r})=>{if(r.includes("#")){if(this.customAnchors){let a=Object.entries(this.customAnchors).find(([,i])=>r.includes(i));if(a){this.active=a[0];return}}if(this.interactive&&this.vehicles){let a=r.split("#")[1].replace("vehicle-",""),i=this.vehicles.find(n=>E(n,this.postfix)===a);if(i){this.active=E(i,this.postfix);return}}}this.active=""}}render(){return Se({vehicles:this.vehicles,transportType:this.transportType,trainSplitTransport:this.trainSplitTransport,destination:this.destination,active:this.active,customAnchors:this.customAnchors,interactive:this.interactive,variant:this.variant,absoluteScale:this.absoluteScale,platformWidth:this.platformWidth,describedBys:this.describedBys,groupIndex:this.groupIndex,postfix:this.postfix})}async firstUpdated(){typeof window!==void 0&&this.isInteractive()&&this.handleAnchorChange({newURL:window.location.href})}connectedCallback(){super.connectedCallback(),typeof window!==void 0&&this.isInteractive()&&window.addEventListener("hashchange",this.handleAnchorChange)}disconnectedCallback(){typeof window!==void 0&&this.isInteractive()&&window.removeEventListener("hashchange",this.handleAnchorChange),super.disconnectedCallback()}static{this.styles=$([$e,R].join(`
`))}};l([d({reflect:!0,type:Array})],y.prototype,"vehicles",2),l([d({reflect:!0,type:String})],y.prototype,"active",2),l([d({reflect:!0,type:String})],y.prototype,"interactive",2),l([d({reflect:!0,type:Object})],y.prototype,"customAnchors",2),l([d({reflect:!0,type:Object})],y.prototype,"describedBys",2),l([d({reflect:!0,type:String})],y.prototype,"transportType",2),l([d({reflect:!0,type:Object})],y.prototype,"trainSplitTransport",2),l([d({reflect:!0,type:String})],y.prototype,"destination",2),l([d({reflect:!0,type:Number})],y.prototype,"platformWidth",2),l([d({reflect:!0,type:String})],y.prototype,"groupIndex",2),l([d({reflect:!0,type:String})],y.prototype,"postfix",2);var br=e=>["HIGH_SPEED_TRAIN","AIR","AIR","ECE","EM","EST","FA","FB","FR","ICE","ICL","IXB","IXr","RHI","RHT","RJ","RJX","RRI","RRT","TGD","TGJ","TGL","TGV","THA","X2"].includes(e),gr=e=>["INTERCITY_TRAIN","ALS","ARC","ATR","IC","ICD","ICN","ICr","ICT","INZ","IP","KXB","NJ","Rx","S2","SC","TLG","ARZ","AS","AZ","CAT","D","DNZ","DPF","DZ","EBU","EE","EN","FBU","HOT","ICB","INT","IR","RR","S84","TLK","UEx","X","X70","EC","ECB","ECM","ECW","EIC","EX","EXB"].includes(e),fr=e=>["REGIONAL_TRAIN","INTER_REGIONAL_TRAIN","ATB","Bsv","BSV","CJX","DPN","E","ER","IRE","N","Os","OZ","PPN","R","R84","RB","RE","RER","REX","SB","Sp","T84","TER","U70","UUU","Zr","ZUG","BRB","erx","NWB","RTB","IRE","HLB","ME"].includes(e),Ut=e=>{if(!e)return;let t=e.toLowerCase();if(br(e))return"ICE";if(gr(e))return"IC";if(fr(e))return"RE";if(["CITY_TRAIN","S","S-Bahn","DPS","e","RT","AVG"].map(r=>r.toLowerCase()).includes(t))return"S";if(["SUBWAY","U","U-Bahn"].map(r=>r.toLowerCase()).includes(t))return"U";if(["TRAM","Tram","STR","Stb","SWB","ZRB"].map(r=>r.toLowerCase()).includes(t))return"STR";if(["BUS","lt","OBU","ubu"].map(r=>r.toLowerCase()).includes(t))return"BUS";if(["SHUTTLE","RUF"].map(r=>r.toLowerCase()).includes(t))return"RUF";if(["FERRY","FAE","KAT","SCH","Schiff"].map(r=>r.toLowerCase()).includes(t))return"FAE";if(["Long_distance_Bus"].map(r=>r.toLowerCase()).includes(t))return"Long_distance_Bus";if(["EV_Bus","SEV_Bus"].map(r=>r.toLowerCase()).includes(t))return"SEV_Bus";if(["Ship"].map(r=>r.toLowerCase()).includes(t))return"Ship";if(["FLIGHT","Plane"].map(r=>r.toLowerCase()).includes(t))return"Plane";if(["Car_Sharing"].map(r=>r.toLowerCase()).includes(t))return"Car_Sharing";if(["Taxi","AST"].map(r=>r.toLowerCase()).includes(t))return"Taxi";if(["Bike_Sharing"].map(r=>r.toLowerCase()).includes(t))return"Bike_Sharing";if(["WALK"].map(r=>r.toLowerCase()).includes(t))return"WALK"},Ae=e=>{switch(e){case"Bike_Sharing":return u("transport.variant.bikeSharing","Fahrradverleih");case"Car_Sharing":return u("transport.variant.carSharing","Carsharing");case"BUS":return u("transport.variant.bus","Bus");case"FAE":return u("transport.variant.ferry","F\xE4hre");case"IC":return u("transport.variant.intercity","Intercity");case"ICE":return u("transport.variant.intercityExpress","Intercity Express");case"Long_distance_Bus":return u("transport.variant.longDistanceBus","Fernbus");case"Plane":return u("transport.variant.plane","Flugzeug");case"RE":return u("transport.variant.regionalExpress","Regional Express");case"S":return u("transport.variant.sBahn","S-Bahn");case"SEV_Bus":return u("transport.variant.replacementBus","Ersatzverkehr Bus");case"Ship":return u("transport.variant.ship","Schiff");case"STR":return u("transport.variant.tram","Stra\xDFenbahn");case"Taxi":return u("transport.variant.taxi","Taxi");case"U":return u("transport.variant.uBahn","U-Bahn");case"WALK":return u("transport.variant.walk","Zu Fu\xDF");default:return u("transport.variant.unknown","Unbekannt")}};var Ht=null,L=()=>(Ht===null&&(Ht=self.document.styleSheets?[...self.document.styleSheets].map(e=>{let t=new CSSStyleSheet;try{if(e.cssRules){let r=[...e.cssRules].map(a=>a.cssText).join(" ");t.replaceSync(r)}}catch{}return t}):[]),Ht),I=(e=[])=>Array.isArray(e)?e:[e];var we=({active:e,vehicle:t,variant:r,anchor:a,transportType:i,interactive:n,carIndex:s,postfix:c})=>h`<div class="ri-car-item" data-active="${e}">
		${ge({vehicle:t,active:e})}
		<ri-car
			.active="${e}"
			.variant="${r}"
			.vehicle="${t}"
			.anchor="${a}"
			.interactive="${n}"
			.transportType="${i}"
			.carIndex="${s}"
			.postfix="${c}"
		></ri-car>
		<div class="ri-car-item-active-container"></div>
		<ri-car-amenities .amenities="${t?.amenities}"></ri-car-amenities>
	</div>`;var Ee={};var vr={BISTRO:"knife_and_fork",AIR_CONDITION:"air_condition",BIKE_SPACE:"bike",TOILET:"wc_sign",WHEELCHAIR_SPACE:"person_with_wheelchair",TOILET_WHEELCHAIR:"restricted_mobility_toilet",BOARDING_AID:"vehicle_entry_aid",CABIN_INFANT:"childrens_compartment",ZONE_QUIET:"quiet_zone",ZONE_FAMILY:"family_compartment",INFO:"information_circle",SEATS_SEVERELY_DISABLED:"traveler_with_reduced_mobility",SEATS_BAHN_COMFORT:"bahnbonus",SEATS_BAHN_BONUS:"bahnbonus",SEATS_LUFTHANSA_EXPRESS_RAIL:"rail_and_fly",WIFI:"wifi",ZONE_MULTI_PURPOSE:void 0},ot=e=>vr[e.type]??"question_mark_circle",ct=(e,t,r)=>{let a="";return r&&(a=a+`${r} `),e==="NOT_AVAILABLE"&&(a=a+u("amenities.status.notAvailable","Nicht Verf\xFCgbar")),e==="RESERVED"&&(a=a+u("amenities.status.reserved","Reserviert")),e==="AVAILABLE"&&(a=a+u("amenities.status.available","Verf\xFCgbar")),`${u(`amenities.icon.${t}`,t)}${a?.length?` - ${a}`:""}`};var yr={knife_and_fork:"Speisewagen",air_condition:"Klimaanlage",bike:"Fahrradstellpl\xE4tze",wc_sign:"Toilette",person_with_wheelchair:"Rollstuhlstellpl\xE4tze",restricted_mobility_toilet:"Rollstuhlg\xE4ngige Toilette",vehicle_entry_aid:"Einstiegshilfe",childrens_compartment:"Kleinkindabteil",quiet_zone:"Ruhebereich",family_compartment:"Familienbereich",information_circle:"Info-Abteil",traveler_with_reduced_mobility:"Pl\xE4tze f\xFCr Schwerbehinderte",bahnbonus:"BahnBonus Status",rail_and_fly:"Pl\xE4tze f\xFCr LH-Codeshare",wifi:"WLAN-Hotspot",question_mark_circle:"Unbekannt",bed:"Schlafwagen",car:"Autotransportwagen",luggage_rack:"Gep\xE4ckwagen",couchette:"Liegewagen",first_class:"Erste Klasse",first_and_second_class:"Erste und Zweite Klasse",second_class:"Zweite Klasse",capacity_indicator_fully_booked:"Au\xDFergew\xF6hnlich hohe Auslastung erwartet",capacity_indicator_high:"Hohe Auslastung erwartet",capacity_indicator_moderate:"Mittlere Auslastung erwartet",capacity_indicator_low:"Geringe Auslastung erwartet"},Te=e=>{let t=yr[e]??e;return u(`amenities.icon.${e}`,t)};var zt="ri-car",Cr=({vehicle:e,priorityList:t,isDoubleDeck:r,isCanceled:a})=>{let i=[];return a?i.push(u("car.closed",", Wagen geschlossen")):(t&&i.push(t.map(n=>{if(t.includes("first_class")&&t.includes("second_class")){if(n==="first_class")return"first_and_second_class";if(n==="second_class")return""}return n}).filter(n=>n.length).map(Te).join(", ")),e.reservedSeat&&i.push(u("car.reservedSeat",", ihr reservierter Sitzplatz {{seat}}",{seat:e.reservedSeat})),r&&i.push(u("car.doubleDeck",", Doppelstockwagen")),e.platformPosition?.sector&&i.push(u("car.sector",", im Abschnitt {{sector}}",{sector:e.platformPosition.sector})),e?.amenities?.length>0&&(i.push(u("car.amenities",", Ausstattungsmerkmale: ")),i.push(e.amenities.map(n=>ct(n.status,ot(n),n.amount)).join(", ")))),i.join(`
`)},xr=(e,t)=>{let r=u("car.wagon","Wagen");return e?.wagonIdentificationNumber?r+=` ${e?.wagonIdentificationNumber}`:t&&(r+=` ${t}`),r},Re=({vehicle:e,active:t,variant:r,anchor:a,interactive:i,transportType:n,riClick:s,carIndex:c,postfix:o})=>{if(!e)return h`No car provided`;let{type:b}=e,{category:f,hasEconomyClass:g,hasFirstClass:m}=b,S=g&&m?"mixed":m?"first":p,T=ue(e),x=T.length,_=f.startsWith("DOUBLEDECK"),w=T.includes("cancel"),X=he({category:f,transportType:n,variant:r,uuid:E(e,o)}),N=Cr({vehicle:e,isCanceled:w,isDoubleDeck:_,priorityList:T}),Y=xr(e,c),q=h`
		<span class="ri-car-label">${Y}</span>
		${X}
		<ul
			aria-hidden="true"
			class="ri-car-icon-container"
			data-car-tags="${x}"
			data-double-deck="${_}"
		>
			${T.map(j=>h`<li>
						${fe({icon:j,isDoubleDeck:_,carTagsCount:x})}
					</li>`)}
		</ul>
	`;if(!f.includes("POWERCAR")&&!f.includes("LOCOMOTIVE")){if(i==="link"&&a)return h`<a
				class="${zt}"
				data-variant="${r}"
				aria-current="${t?"step":!1}"
				data-canceled="${w}"
				data-interactive="true"
				data-class-color="${S}"
				data-double-deck="${_}"
				href="${a}"
				aria-description="${N}"
			>
				${q}
			</a>`;if(i==="button")return h` <button
				class="${zt}"
				data-variant="${r}"
				data-canceled="${w}"
				data-interactive="true"
				data-class-color="${S}"
				data-double-deck="${_}"
				aria-description="${N}"
				@click="${s}"
			>
				${q}
			</button>`}return h`<div
		class="${zt}"
		data-category="${f}"
		data-variant="${r}"
		data-canceled="${w}"
		data-interactive="false"
		data-class-color="${S}"
		data-double-deck="${_}"
	>
		${q}
	</div>`};var Le={};var Ie={};var Pe={};var U=class extends k{};l([d({reflect:!0,type:String})],U.prototype,"anchor",2),l([d({reflect:!0,type:String})],U.prototype,"interactive",2);var A=class extends U{constructor(){super(...arguments);this.active=!1;this.variant="middle"}riClick(){this.dispatchEvent(new CustomEvent("car-click",{bubbles:!0,composed:!0,detail:this.vehicle}))}render(){return Re({vehicle:this.vehicle,active:this.active,variant:this.variant,anchor:this.anchor,interactive:this.interactive,transportType:this.transportType,carIndex:this.carIndex,postfix:this.postfix,riClick:this.riClick})}static{this.styles=$([Le,Ie,Pe,R].join(`
`))}};l([d({reflect:!0,type:Object})],A.prototype,"vehicle",2),l([d({reflect:!0,type:String})],A.prototype,"active",2),l([d({reflect:!0,type:String})],A.prototype,"variant",2),l([d({reflect:!0,type:String})],A.prototype,"transportType",2),l([d({reflect:!0,type:String})],A.prototype,"carIndex",2),l([d({reflect:!0,type:String})],A.prototype,"postfix",2);var _t=class extends A{constructor(){super(...arguments);this.i18n=!1}render(){return we({vehicle:this.vehicle,active:this.active,anchor:this.anchor,variant:this.variant,transportType:this.transportType,interactive:this.interactive,postfix:this.postfix})}static{this.styles=$([Ee,R].join(`
`))}};var lt=class extends A{};lt.styles=[...L(),...I(lt.styles)];customElements.get("ri-car")||customElements.define("ri-car",lt);var ke=({amenities:e})=>{if(!e||e.length===0)return h`<div class="ri-car-amenities-background"></div>`;let t=[],r=[];return e.length>4?(t=e.slice(0,3),r=e.slice(4,e.length)):t=e,h`<ul class="ri-car-amenities ri-car-amenities-background">
		${t.map(a=>{let i=ot(a),n=a.status==="NOT_AVAILABLE"||a.status==="RESERVED";return h`<li>
				<span
					class="db-tag"
					data-no-text="true"
					data-icon="${i}"
					data-icon-trailing="${n?"cross_circle":p}"
				>
					${ct(a.status,i,a.amount)}
				</span>
			</li>`})}
		${r.length>0?h`<li>
					<span
						class="db-tag"
						data-no-text="true"
						data-icon="more_horizontal"
					>
						${r.map(a=>ct(a.status,ot(a),a.amount)).join(" & ")}
					</span>
				</li>`:p}
	</ul>`};var Ne={};var dt=class extends k{constructor(){super(...arguments);this.i18n=!1}render(){return ke({amenities:this.amenities})}static{this.styles=$([Ne,R].join(`
`))}};l([d({reflect:!0,type:Array})],dt.prototype,"amenities",2);var pt=class extends dt{};pt.styles=[...L(),...I(pt.styles)];customElements.get("ri-car-amenities")||customElements.define("ri-car-amenities",pt);var ut=class extends _t{};ut.styles=[...L(),...I(ut.styles)];customElements.get("ri-car-item")||customElements.define("ri-car-item",ut);var Wt={ICE:"train",IC:"ic_and_ec",RE:"local_train",S:"s_bahn",U:"subway",STR:"tram",BUS:"local_bus",FAE:"ship",Long_distance_Bus:"long_distance_bus",SEV_Bus:"ev_bus",Ship:"ship",Plane:"airplane",Car_Sharing:"car_sharing",Taxi:"taxi",Bike_Sharing:"call_a_bike",WALK:"pedestrian",RUF:"call_in_bus"},Ln=Object.keys(Wt);var wr=e=>h`
	<hr class="ri-transport-tag-divider" />
	${e}
`,Er=({text:e,replacementTransportText:t})=>h`
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
		${u("platform.replacedBy","wurde ersetzt durch").replace("{{text}} ","")}
	</em>
	<hr aria-hidden="true" class="ri-transport-tag-divider" />
	<span>${t}</span>
`,Oe=({label:e,type:t,category:r,line:a,number:i,state:n,noText:s,showIcon:c,interactive:o,anchor:b,riClick:f,staticMode:g,replacementTransportText:m,overflow:C,width:S,journeyDescription:T})=>{let x=Ut(r)??Ut(t)??"UNKNOWN",_=(c||s)&&!m?.length?Wt[x||""]:void 0,w=r??t,X=w&&a&&a.includes(w)?a.replace(w,"").trim():a,N=e?.length?e:T?T.replace(` (${i})`,""):`${w??""} ${X??i??""}`,Y=u("platform.canceledTransport","Ausgefallenes Verkehrsmittel {{text}}",{text:N}),q=n==="canceled"?h` <span title="${Y}"> ${N} </span> `:h`<span>${N}</span>`,j=r==="UNKNOWN"||t==="UNKNOWN"||!_?h`${q}`:wr(q);m?.length&&(j=Er({text:Ae(x),replacementTransportText:m}),x="SEV_Bus");let St=j;return g||(St=h`<button
			part="button"
			aria-label="${n==="canceled"?Y:p}"
			type="button"
			@click="${f}"
		>
			${j}
		</button>`,o==="link"&&b&&(St=h`<a
				part="link"
				aria-label="${n==="canceled"?Y:p}"
				href="${b}"
			>
				${j}
			</a>`)),h`
		<div
			part="root"
			class="db-tag ri-transport-tag"
			data-emphasis="strong"
			data-overflow="${C??p}"
			data-width="${S??p}"
			data-no-text="${s??p}"
			data-variant="${x??p}"
			data-state="${n??p}"
			data-icon="${_??p}"
		>
			${St}
		</div>
	`};var Ve={};var v=class extends U{constructor(){super(...arguments);this.width="auto"}riClick(){this.dispatchEvent(new CustomEvent("transport-tag-click",{bubbles:!0,composed:!0,detail:{category:this.category,state:this.state,line:this.line,journeyDescription:this.journeyDescription,number:this.number,noText:this.noText,showIcon:this.showIcon,label:this.label,replacementTransportText:this.replacementTransportText,type:this.type,width:this.width,staticMode:this.staticMode,overflow:this.overflow,additionalEventDetail:this.additionalEventDetail}}))}render(){return Oe({category:this.category,state:this.state,line:this.line,journeyDescription:this.journeyDescription,number:this.number,noText:this.noText,showIcon:this.showIcon,label:this.label,replacementTransportText:this.replacementTransportText,type:this.type,width:this.width,staticMode:this.staticMode,overflow:this.overflow,riClick:this.riClick})}static{this.styles=$([Ve,R].join(`
`))}};l([d({reflect:!0,type:String})],v.prototype,"category",2),l([d({reflect:!0,type:String})],v.prototype,"type",2),l([d({reflect:!0,type:String})],v.prototype,"state",2),l([d({reflect:!0,type:String})],v.prototype,"width",2),l([d({reflect:!0,type:String})],v.prototype,"line",2),l([d({reflect:!0,type:String})],v.prototype,"journeyDescription",2),l([d({reflect:!0,type:Number})],v.prototype,"number",2),l([d({reflect:!0,type:String})],v.prototype,"label",2),l([d({reflect:!0,type:String})],v.prototype,"replacementTransportText",2),l([d({reflect:!0,type:Boolean})],v.prototype,"noText",2),l([d({reflect:!0,type:Boolean})],v.prototype,"showIcon",2),l([d({attribute:"static",reflect:!0,type:Boolean})],v.prototype,"staticMode",2),l([d({reflect:!0,type:Boolean})],v.prototype,"overflow",2),l([d({reflect:!0,type:Object})],v.prototype,"additionalEventDetail",2);var ht=class extends v{};ht.styles=[...L(),...I(ht.styles)];customElements.get("ri-transport-tag")||customElements.define("ri-transport-tag",ht);var bt=class extends y{};bt.styles=[...L(),...I(bt.styles)];customElements.get("ri-car-sequence")||customElements.define("ri-car-sequence",bt);})();
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
*/
