"use strict";(()=>{var ge=Object.defineProperty;var be=Object.getOwnPropertyDescriptor;var m=(e,t,r,i)=>{for(var s=i>1?void 0:i?be(t,r):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(s=(i?o(t,r,s):o(s))||s);return i&&s&&ge(t,r,s),s};var rt=globalThis,st=rt.ShadowRoot&&(rt.ShadyCSS===void 0||rt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Pt=Symbol(),It=new WeakMap,it=class{constructor(t,r,i){if(this._$cssResult$=!0,i!==Pt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o,r=this.t;if(st&&t===void 0){let i=r!==void 0&&r.length===1;i&&(t=It.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&It.set(r,t))}return t}toString(){return this.cssText}},$=e=>new it(typeof e=="string"?e:e+"",void 0,Pt);var kt=(e,t)=>{if(st)e.adoptedStyleSheets=t.map((r=>r instanceof CSSStyleSheet?r:r.styleSheet));else for(let r of t){let i=document.createElement("style"),s=rt.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=r.cssText,e.appendChild(i)}},pt=st?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(let i of t.cssRules)r+=i.cssText;return $(r)})(e):e;var{is:ve,defineProperty:ye,getOwnPropertyDescriptor:Ce,getOwnPropertyNames:_e,getOwnPropertySymbols:$e,getPrototypeOf:xe}=Object,at=globalThis,Nt=at.trustedTypes,Ae=Nt?Nt.emptyScript:"",Se=at.reactiveElementPolyfillSupport,V=(e,t)=>e,M={toAttribute(e,t){switch(t){case Boolean:e=e?Ae:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},ot=(e,t)=>!ve(e,t),Ot={attribute:!0,type:String,converter:M,reflect:!1,useDefault:!1,hasChanged:ot};Symbol.metadata??=Symbol("metadata"),at.litPropertyMetadata??=new WeakMap;var C=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Ot){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(t,i,r);s!==void 0&&ye(this.prototype,t,s)}}static getPropertyDescriptor(t,r,i){let{get:s,set:a}=Ce(this.prototype,t)??{get(){return this[r]},set(o){this[r]=o}};return{get:s,set(o){let c=s?.call(this);a?.call(this,o),this.requestUpdate(t,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ot}static _$Ei(){if(this.hasOwnProperty(V("elementProperties")))return;let t=xe(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(V("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(V("properties"))){let r=this.properties,i=[..._e(r),...$e(r)];for(let s of i)this.createProperty(s,r[s])}let t=this[Symbol.metadata];if(t!==null){let r=litPropertyMetadata.get(t);if(r!==void 0)for(let[i,s]of r)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[r,i]of this.elementProperties){let s=this._$Eu(r,i);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let r=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let s of i)r.unshift(pt(s))}else t!==void 0&&r.push(pt(t));return r}static _$Eu(t,r){let i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,r=this.constructor.elementProperties;for(let i of r.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return kt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,r,i){this._$AK(t,i)}_$ET(t,r){let i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){let a=(i.converter?.toAttribute!==void 0?i.converter:M).toAttribute(r,i.type);this._$Em=t,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(t,r){let i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let a=i.getPropertyOptions(s),o=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:M;this._$Em=s;let c=o.fromAttribute(r,a.type);this[s]=c??this._$Ej?.get(s)??c,this._$Em=null}}requestUpdate(t,r,i){if(t!==void 0){let s=this.constructor,a=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??ot)(a,r)||i.useDefault&&i.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:i,reflect:s,wrapped:a},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??r??this[t]),a!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(r=void 0),this._$AL.set(t,r)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,a]of this._$Ep)this[s]=a;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,a]of i){let{wrapped:o}=a,c=this[s];o!==!0||this._$AL.has(s)||c===void 0||this.C(s,void 0,a,c)}}let t=!1,r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach((i=>i.hostUpdate?.())),this.update(r)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach((r=>r.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((r=>this._$ET(r,this[r]))),this._$EM()}updated(t){}firstUpdated(t){}};C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[V("elementProperties")]=new Map,C[V("finalized")]=new Map,Se?.({ReactiveElement:C}),(at.reactiveElementVersions??=[]).push("2.1.1");var vt=globalThis,nt=vt.trustedTypes,Ut=nt?nt.createPolicy("lit-html",{createHTML:e=>e}):void 0,zt="$lit$",x=`lit$${Math.random().toFixed(9).slice(2)}$`,Gt="?"+x,Ee=`<${Gt}>`,L=document,G=()=>L.createComment(""),F=e=>e===null||typeof e!="object"&&typeof e!="function",yt=Array.isArray,we=e=>yt(e)||typeof e?.[Symbol.iterator]=="function",ht=`[ 	
\f\r]`,z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Bt=/-->/g,Ht=/>/g,R=RegExp(`>|${ht}(?:([^\\s"'>=/]+)(${ht}*=${ht}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Dt=/'/g,Vt=/"/g,Ft=/^(?:script|style|textarea|title)$/i,Ct=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),l=Ct(1),Je=Ct(2),Qe=Ct(3),I=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),Mt=new WeakMap,T=L.createTreeWalker(L,129);function Wt(e,t){if(!yt(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ut!==void 0?Ut.createHTML(t):t}var Re=(e,t)=>{let r=e.length-1,i=[],s,a=t===2?"<svg>":t===3?"<math>":"",o=z;for(let c=0;c<r;c++){let n=e[c],d,u,p=-1,b=0;for(;b<n.length&&(o.lastIndex=b,u=o.exec(n),u!==null);)b=o.lastIndex,o===z?u[1]==="!--"?o=Bt:u[1]!==void 0?o=Ht:u[2]!==void 0?(Ft.test(u[2])&&(s=RegExp("</"+u[2],"g")),o=R):u[3]!==void 0&&(o=R):o===R?u[0]===">"?(o=s??z,p=-1):u[1]===void 0?p=-2:(p=o.lastIndex-u[2].length,d=u[1],o=u[3]===void 0?R:u[3]==='"'?Vt:Dt):o===Vt||o===Dt?o=R:o===Bt||o===Ht?o=z:(o=R,s=void 0);let y=o===R&&e[c+1].startsWith("/>")?" ":"";a+=o===z?n+Ee:p>=0?(i.push(d),n.slice(0,p)+zt+n.slice(p)+x+y):n+x+(p===-2?c:y)}return[Wt(e,a+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},W=class e{constructor({strings:t,_$litType$:r},i){let s;this.parts=[];let a=0,o=0,c=t.length-1,n=this.parts,[d,u]=Re(t,r);if(this.el=e.createElement(d,i),T.currentNode=this.el.content,r===2||r===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(s=T.nextNode())!==null&&n.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(let p of s.getAttributeNames())if(p.endsWith(zt)){let b=u[o++],y=s.getAttribute(p).split(x),_=/([.?@])?(.*)/.exec(b);n.push({type:1,index:a,name:_[2],strings:y,ctor:_[1]==="."?ft:_[1]==="?"?mt:_[1]==="@"?gt:O}),s.removeAttribute(p)}else p.startsWith(x)&&(n.push({type:6,index:a}),s.removeAttribute(p));if(Ft.test(s.tagName)){let p=s.textContent.split(x),b=p.length-1;if(b>0){s.textContent=nt?nt.emptyScript:"";for(let y=0;y<b;y++)s.append(p[y],G()),T.nextNode(),n.push({type:2,index:++a});s.append(p[b],G())}}}else if(s.nodeType===8)if(s.data===Gt)n.push({type:2,index:a});else{let p=-1;for(;(p=s.data.indexOf(x,p+1))!==-1;)n.push({type:7,index:a}),p+=x.length-1}a++}}static createElement(t,r){let i=L.createElement("template");return i.innerHTML=t,i}};function N(e,t,r=e,i){if(t===I)return t;let s=i!==void 0?r._$Co?.[i]:r._$Cl,a=F(t)?void 0:t._$litDirective$;return s?.constructor!==a&&(s?._$AO?.(!1),a===void 0?s=void 0:(s=new a(e),s._$AT(e,r,i)),i!==void 0?(r._$Co??=[])[i]=s:r._$Cl=s),s!==void 0&&(t=N(e,s._$AS(e,t.values),s,i)),t}var ut=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:r},parts:i}=this._$AD,s=(t?.creationScope??L).importNode(r,!0);T.currentNode=s;let a=T.nextNode(),o=0,c=0,n=i[0];for(;n!==void 0;){if(o===n.index){let d;n.type===2?d=new j(a,a.nextSibling,this,t):n.type===1?d=new n.ctor(a,n.name,n.strings,this,t):n.type===6&&(d=new bt(a,this,t)),this._$AV.push(d),n=i[++c]}o!==n?.index&&(a=T.nextNode(),o++)}return T.currentNode=L,s}p(t){let r=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,r),r+=i.strings.length-2):i._$AI(t[r])),r++}},j=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,i,s){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=N(this,t,r),F(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==I&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):we(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==h&&F(this._$AH)?this._$AA.nextSibling.data=t:this.T(L.createTextNode(t)),this._$AH=t}$(t){let{values:r,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=W.createElement(Wt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(r);else{let a=new ut(s,this),o=a.u(this.options);a.p(r),this.T(o),this._$AH=a}}_$AC(t){let r=Mt.get(t.strings);return r===void 0&&Mt.set(t.strings,r=new W(t)),r}k(t){yt(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,i,s=0;for(let a of t)s===r.length?r.push(i=new e(this.O(G()),this.O(G()),this,this.options)):i=r[s],i._$AI(a),s++;s<r.length&&(this._$AR(i&&i._$AB.nextSibling,s),r.length=s)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},O=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,i,s,a){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=r,this._$AM=s,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=h}_$AI(t,r=this,i,s){let a=this.strings,o=!1;if(a===void 0)t=N(this,t,r,0),o=!F(t)||t!==this._$AH&&t!==I,o&&(this._$AH=t);else{let c=t,n,d;for(t=a[0],n=0;n<a.length-1;n++)d=N(this,c[i+n],r,n),d===I&&(d=this._$AH[n]),o||=!F(d)||d!==this._$AH[n],d===h?t=h:t!==h&&(t+=(d??"")+a[n+1]),this._$AH[n]=d}o&&!s&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ft=class extends O{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}},mt=class extends O{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}},gt=class extends O{constructor(t,r,i,s,a){super(t,r,i,s,a),this.type=5}_$AI(t,r=this){if((t=N(this,t,r,0)??h)===I)return;let i=this._$AH,s=t===h&&i!==h||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==h&&(i===h||s);s&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},bt=class{constructor(t,r,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}};var Te=vt.litHtmlPolyfillSupport;Te?.(W,j),(vt.litHtmlVersions??=[]).push("3.3.1");var jt=(e,t,r)=>{let i=r?.renderBefore??t,s=i._$litPart$;if(s===void 0){let a=r?.renderBefore??null;i._$litPart$=s=new j(t.insertBefore(G(),a),a,void 0,r??{})}return s._$AI(e),s};var _t=globalThis,A=class extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=jt(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return I}};A._$litElement$=!0,A.finalized=!0,_t.litElementHydrateSupport?.({LitElement:A});var Le=_t.litElementPolyfillSupport;Le?.({LitElement:A});(_t.litElementVersions??=[]).push("4.2.1");var S=84,E=54,K=e=>l`
	<svg
		aria-hidden="true"
		data-shape="wagon"
		width="${S}"
		height="${E}"
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
`,Kt=(e,t)=>{switch(t){case"single":return l`
				<svg
					aria-hidden="true"
					data-shape="controlcar-single"
					width="${S}"
					height="${E}"
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
			`;case"end":return l`
				<svg
					aria-hidden="true"
					data-shape="ice-right"
					width="${S}"
					height="${E}"
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
			`;case"start":return l`
				<svg
					aria-hidden="true"
					data-shape="ice-left"
					width="${S}"
					height="${E}"
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
			`;default:return K(e)}},qt=(e,t)=>{switch(t){case"single":return l`
				<svg
					aria-hidden="true"
					data-shape="controlcar-single"
					width="${S}"
					height="${E}"
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
			`;case"end":return l`
				<svg
					aria-hidden="true"
					data-shape="controlcar-right"
					width="${S}"
					height="${E}"
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
			`;case"start":return l`
				<svg
					aria-hidden="true"
					data-shape="controlcar-left"
					width="${S}"
					height="${E}"
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
			`;default:return K(e)}},Zt=e=>l`
	<svg
		data-shape="double-control-car"
		width="${S}"
		height="${E}"
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
`,Xt=e=>l`
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
`;var $t="__ri_localization_store__",xt=window;xt[$t]||(xt[$t]={content:{},lang:"de"});var w=xt[$t],At=class{static setProviderContent(t,r){w.content={...w.content,[t]:r}}static setLanguage(t){t!==w.lang&&(w.lang=t,document.dispatchEvent(new CustomEvent("ri-language-change",{detail:{lang:t}})))}static getLanguage(){return w.lang}static getContent(){return w.content[w.lang]??w.content.de}};function f(e,t,r){let s=At.getContent()?.[e]??t??e;return r&&(s=s.replace(/\{\{(\w+)}}/g,(a,o)=>String(r[o]??`{{${o}}}`))),s}var Ie=e=>!!(e&&(e.levelFirstClass&&e.levelFirstClass!=="UNDEFINED"||e.levelEconomyClass&&e.levelEconomyClass!=="UNDEFINED")),Yt=(e,t)=>{if(!t)return;let r=e?t.levelFirstClass:t.levelEconomyClass;if(r=="OVERCROWDED")return"capacity_indicator_fully_booked";if(r==="HIGH")return"capacity_indicator_high";if(r==="MIDDLE")return"capacity_indicator_moderate";if(r==="LOW")return"capacity_indicator_low"},Pe=e=>{if(e=="capacity_indicator_fully_booked")return"critical";if(e==="capacity_indicator_high"||e==="capacity_indicator_moderate")return"warning"},St=e=>e.startsWith("SLEEPER_"),Et=e=>e.startsWith("COUCHETTE_"),ke=e=>{let t=[],{type:r}=e,i;e.occupancy&&(i=e.occupancy);let{category:s,hasFirstClass:a,hasEconomyClass:o}=r,c=Ie(i),n=Yt(!0,i),d=Yt(!1,i);return a&&o?(t.push("first_class"),St(s)?t.push("bed"):Et(s)?t.push("couchette"):c&&(i?.levelEconomyClass!=="UNDEFINED"&&d?t.push(d):i?.levelFirstClass!=="UNDEFINED"&&n&&t.push(n)),t.push("second_class"),t):a?(t.push("first_class"),St(s)?t.push("bed"):Et(s)?t.push("couchette"):c&&(n?t.push(n):d&&t.push(d)),t):(o&&(t.push("second_class"),St(s)?t.push("bed"):Et(s)?t.push("couchette"):c&&d&&t.push(d)),t)},Jt=e=>{let{type:t}=e,{category:r}=t,i=[];if(r==="LOCOMOTIVE")return i;if(r==="DOUBLEDECK_CARCARRIER_PASSENGERTRAIN")return["car"];if(e.status==="CLOSED")return["cross_circle"];if(r==="BAGGAGECAR")return["luggage_rack"];if(r==="DININGCAR")return["knife_and_fork"];let s=ke(e);return s.length>0&&i.push(...s),r.startsWith("HALFDININGCAR")&&i.push("knife_and_fork"),i},Qt=({category:e,transportType:t,variant:r,uuid:i})=>{let s=`gradient-${i}`;return!e||e==="UNDEFINED"||t&&t==="UNKNOWN"?K(s):e.includes("LOCOMOTIVE")?Xt(s):e.startsWith("DOUBLECONTROLCAR")?Zt(s):e.includes("POWERCAR")||e.includes("CONTROLCAR")&&t==="HIGH_SPEED_TRAIN"?Kt(s,r):e.includes("CONTROLCAR")||e.includes("PASSENGERCARRIAGE")||e.includes("SLEEPER")||e.includes("COUCHETTE")?qt(s,r):K(s)},te=(e,t)=>`${e.vehicleID||e.wagonIdentificationNumber}${t?`-${t}`:""}`;var ee=({vehicle:e,active:t,fullText:r})=>{if(e&&e.wagonIdentificationNumber){let i=`${f("car.wagon","Wagen")} ${e.wagonIdentificationNumber}`;return l`<span
			class="db-tag ri-car-identification"
			data-emphasis="${t?"strong":"weak"}"
			title="${i}"
		>
			${r?i:e.wagonIdentificationNumber}
		</span>`}return l``},re=({icon:e,carTagsCount:t,isDoubleDeck:r})=>{let i=Pe(e),s=e==="first_class",a="weak";return r?t&&t>=2&&s&&(a="strong"):s&&(a="strong"),l`<span
		class="db-tag"
		aria-hidden="true"
		data-no-text="true"
		data-icon="${e}"
		data-capacity="${i??h}"
		data-emphasis="${a}"
	>
		${e}
	</span>`};var ie=({active:e,vehicle:t,variant:r,anchor:i,transportType:s,interactive:a,carIndex:o,postfix:c})=>l`<div class="ri-car-item" data-active="${e}">
		${ee({vehicle:t,active:e})}
		<ri-car
			.active="${e}"
			.variant="${r}"
			.vehicle="${t}"
			.anchor="${i}"
			.interactive="${a}"
			.transportType="${s}"
			.carIndex="${o}"
			.postfix="${c}"
		></ri-car>
		<div class="ri-car-item-active-container"></div>
		<ri-car-amenities .amenities="${t?.amenities}"></ri-car-amenities>
	</div>`;var se={};var U={};var Ue={attribute:!0,type:String,converter:M,reflect:!1,hasChanged:ot},Be=(e=Ue,t,r)=>{let{kind:i,metadata:s}=r,a=globalThis.litPropertyMetadata.get(s);if(a===void 0&&globalThis.litPropertyMetadata.set(s,a=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),a.set(r.name,e),i==="accessor"){let{name:o}=r;return{set(c){let n=t.get.call(this);t.set.call(this,c),this.requestUpdate(o,n,e)},init(c){return c!==void 0&&this.C(o,void 0,e,c),c}}}if(i==="setter"){let{name:o}=r;return function(c){let n=this[o];t.call(this,c),this.requestUpdate(o,n,e)}}throw Error("Unsupported decorator location: "+i)};function g(e){return(t,r)=>typeof r=="object"?Be(e,t,r):((i,s,a)=>{let o=s.hasOwnProperty(a);return s.constructor.createProperty(a,i),o?Object.getOwnPropertyDescriptor(s,a):void 0})(e,t,r)}function ae(e){return g({...e,state:!0,attribute:!1})}var He={BISTRO:"knife_and_fork",AIR_CONDITION:"air_condition",BIKE_SPACE:"bike",TOILET:"wc_sign",WHEELCHAIR_SPACE:"person_with_wheelchair",TOILET_WHEELCHAIR:"restricted_mobility_toilet",BOARDING_AID:"vehicle_entry_aid",CABIN_INFANT:"childrens_compartment",ZONE_QUIET:"quiet_zone",ZONE_FAMILY:"family_compartment",INFO:"information_circle",SEATS_SEVERELY_DISABLED:"traveler_with_reduced_mobility",SEATS_BAHN_COMFORT:"bahnbonus",SEATS_BAHN_BONUS:"bahnbonus",SEATS_LUFTHANSA_EXPRESS_RAIL:"rail_and_fly",WIFI:"wifi",ZONE_MULTI_PURPOSE:void 0},q=e=>He[e.type]??"question_mark_circle",Z=(e,t,r)=>{let i="";return r&&(i=i+`${r} `),e==="NOT_AVAILABLE"&&(i=i+f("amenities.status.notAvailable","Nicht Verf\xFCgbar")),e==="RESERVED"&&(i=i+f("amenities.status.reserved","Reserviert")),e==="AVAILABLE"&&(i=i+f("amenities.status.available","Verf\xFCgbar")),`${f(`amenities.icon.${t}`,t)}${i?.length?` - ${i}`:""}`};var De={knife_and_fork:"Speisewagen",air_condition:"Klimaanlage",bike:"Fahrradstellpl\xE4tze",wc_sign:"Toilette",person_with_wheelchair:"Rollstuhlstellpl\xE4tze",restricted_mobility_toilet:"Rollstuhlg\xE4ngige Toilette",vehicle_entry_aid:"Einstiegshilfe",childrens_compartment:"Kleinkindabteil",quiet_zone:"Ruhebereich",family_compartment:"Familienbereich",information_circle:"Info-Abteil",traveler_with_reduced_mobility:"Pl\xE4tze f\xFCr Schwerbehinderte",bahnbonus:"BahnBonus Status",rail_and_fly:"Pl\xE4tze f\xFCr LH-Codeshare",wifi:"WLAN-Hotspot",question_mark_circle:"Unbekannt",bed:"Schlafwagen",car:"Autotransportwagen",luggage_rack:"Gep\xE4ckwagen",couchette:"Liegewagen",first_class:"Erste Klasse",first_and_second_class:"Erste und Zweite Klasse",second_class:"Zweite Klasse",capacity_indicator_fully_booked:"Au\xDFergew\xF6hnlich hohe Auslastung erwartet",capacity_indicator_high:"Hohe Auslastung erwartet",capacity_indicator_moderate:"Mittlere Auslastung erwartet",capacity_indicator_low:"Geringe Auslastung erwartet"},oe=e=>{let t=De[e]??e;return f(`amenities.icon.${e}`,t)};var wt="ri-car",Ve=({vehicle:e,priorityList:t,isDoubleDeck:r,isCanceled:i})=>{let s=[];return i?s.push(f("car.closed",", Wagen geschlossen")):(t&&s.push(t.map(a=>{if(t.includes("first_class")&&t.includes("second_class")){if(a==="first_class")return"first_and_second_class";if(a==="second_class")return""}return a}).filter(a=>a.length).map(oe).join(", ")),e.reservedSeat&&s.push(f("car.reservedSeat",", ihr reservierter Sitzplatz {{seat}}",{seat:e.reservedSeat})),r&&s.push(f("car.doubleDeck",", Doppelstockwagen")),e.platformPosition?.sector&&s.push(f("car.sector",", im Abschnitt {{sector}}",{sector:e.platformPosition.sector})),e?.amenities?.length>0&&(s.push(f("car.amenities",", Ausstattungsmerkmale: ")),s.push(e.amenities.map(a=>Z(a.status,q(a),a.amount)).join(", ")))),s.join(`
`)},Me=(e,t)=>{let r=f("car.wagon","Wagen");return e?.wagonIdentificationNumber?r+=` ${e?.wagonIdentificationNumber}`:t&&(r+=` ${t}`),r},ne=({vehicle:e,active:t,variant:r,anchor:i,interactive:s,transportType:a,riClick:o,carIndex:c,postfix:n})=>{if(!e)return l`No car provided`;let{type:d}=e,{category:u,hasEconomyClass:p,hasFirstClass:b}=d,_=p&&b?"mixed":b?"first":h,tt=Jt(e),Tt=tt.length,k=u.startsWith("DOUBLEDECK"),et=tt.includes("cancel"),ue=Qt({category:u,transportType:a,variant:r,uuid:te(e,n)}),Lt=Ve({vehicle:e,isCanceled:et,isDoubleDeck:k,priorityList:tt}),fe=Me(e,c),dt=l`
		<span class="ri-car-label">${fe}</span>
		${ue}
		<ul
			aria-hidden="true"
			class="ri-car-icon-container"
			data-car-tags="${Tt}"
			data-double-deck="${k}"
		>
			${tt.map(me=>l`<li>
						${re({icon:me,isDoubleDeck:k,carTagsCount:Tt})}
					</li>`)}
		</ul>
	`;if(!u.includes("POWERCAR")&&!u.includes("LOCOMOTIVE")){if(s==="link"&&i)return l`<a
				class="${wt}"
				data-variant="${r}"
				aria-current="${t?"step":!1}"
				data-canceled="${et}"
				data-interactive="true"
				data-class-color="${_}"
				data-double-deck="${k}"
				href="${i}"
				aria-description="${Lt}"
			>
				${dt}
			</a>`;if(s==="button")return l` <button
				class="${wt}"
				data-variant="${r}"
				data-canceled="${et}"
				data-interactive="true"
				data-class-color="${_}"
				data-double-deck="${k}"
				aria-description="${Lt}"
				@click="${o}"
			>
				${dt}
			</button>`}return l`<div
		class="${wt}"
		data-category="${u}"
		data-variant="${r}"
		data-canceled="${et}"
		data-interactive="false"
		data-class-color="${_}"
		data-double-deck="${k}"
	>
		${dt}
	</div>`};var ce={};var le={};var de={};var P=class extends A{constructor(){super(...arguments);this.i18n=!0;this.onLanguageChange=()=>{this.requestUpdate()}}async hydrateElements(){await new Promise(r=>setTimeout(r,0)),this.shadowRoot?.host.localName&&(this.shadowRoot.host.setAttribute("data-hydrated","true"),this.shadowRoot?.querySelectorAll(`.${this.shadowRoot?.host.localName}`).forEach(r=>{r?.setAttribute("data-hydrated","true")}))}connectedCallback(){super.connectedCallback(),this.shadowRoot?.host.setAttribute("data-hydrated","true"),this.shadowRoot&&(this.hydrateObserver=new MutationObserver(()=>{this.hydrateElements()}),this.hydrateObserver.observe(this.shadowRoot,{childList:!0,subtree:!0})),this.i18n&&document.addEventListener("ri-language-change",this.onLanguageChange)}disconnectedCallback(){this.hydrateObserver?.disconnect(),this.i18n&&document.removeEventListener("ri-language-change",this.onLanguageChange),super.disconnectedCallback()}};m([ae()],P.prototype,"hydrateObserver",2);var B=class extends P{};m([g({reflect:!0,type:String})],B.prototype,"anchor",2),m([g({reflect:!0,type:String})],B.prototype,"interactive",2);var v=class extends B{constructor(){super(...arguments);this.active=!1;this.variant="middle"}riClick(){this.dispatchEvent(new CustomEvent("car-click",{bubbles:!0,composed:!0,detail:this.vehicle}))}render(){return ne({vehicle:this.vehicle,active:this.active,variant:this.variant,anchor:this.anchor,interactive:this.interactive,transportType:this.transportType,carIndex:this.carIndex,postfix:this.postfix,riClick:this.riClick})}static{this.styles=$([ce,le,de,U].join(`
`))}};m([g({reflect:!0,type:Object})],v.prototype,"vehicle",2),m([g({reflect:!0,type:String})],v.prototype,"active",2),m([g({reflect:!0,type:String})],v.prototype,"variant",2),m([g({reflect:!0,type:String})],v.prototype,"transportType",2),m([g({reflect:!0,type:String})],v.prototype,"carIndex",2),m([g({reflect:!0,type:String})],v.prototype,"postfix",2);var lt=class extends v{constructor(){super(...arguments);this.i18n=!1}render(){return ie({vehicle:this.vehicle,active:this.active,anchor:this.anchor,variant:this.variant,transportType:this.transportType,interactive:this.interactive,postfix:this.postfix})}static{this.styles=$([se,U].join(`
`))}};var Rt=null,H=()=>(Rt===null&&(Rt=self.document.styleSheets?[...self.document.styleSheets].map(e=>{let t=new CSSStyleSheet;try{if(e.cssRules){let r=[...e.cssRules].map(i=>i.cssText).join(" ");t.replaceSync(r)}}catch{}return t}):[]),Rt),D=(e=[])=>Array.isArray(e)?e:[e];var X=class extends v{};X.styles=[...H(),...D(X.styles)];customElements.get("ri-car")||customElements.define("ri-car",X);var pe=({amenities:e})=>{if(!e||e.length===0)return l`<div class="ri-car-amenities-background"></div>`;let t=[],r=[];return e.length>4?(t=e.slice(0,3),r=e.slice(4,e.length)):t=e,l`<ul class="ri-car-amenities ri-car-amenities-background">
		${t.map(i=>{let s=q(i),a=i.status==="NOT_AVAILABLE"||i.status==="RESERVED";return l`<li>
				<span
					class="db-tag"
					data-no-text="true"
					data-icon="${s}"
					data-icon-trailing="${a?"cross_circle":h}"
				>
					${Z(i.status,s,i.amount)}
				</span>
			</li>`})}
		${r.length>0?l`<li>
					<span
						class="db-tag"
						data-no-text="true"
						data-icon="more_horizontal"
					>
						${r.map(i=>Z(i.status,q(i),i.amount)).join(" & ")}
					</span>
				</li>`:h}
	</ul>`};var he={};var Y=class extends P{constructor(){super(...arguments);this.i18n=!1}render(){return pe({amenities:this.amenities})}static{this.styles=$([he,U].join(`
`))}};m([g({reflect:!0,type:Array})],Y.prototype,"amenities",2);var J=class extends Y{};J.styles=[...H(),...D(J.styles)];customElements.get("ri-car-amenities")||customElements.define("ri-car-amenities",J);var Q=class extends lt{};Q.styles=[...H(),...D(Q.styles)];customElements.get("ri-car-item")||customElements.define("ri-car-item",Q);})();
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
