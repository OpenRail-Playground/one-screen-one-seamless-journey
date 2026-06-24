"use strict";(()=>{var ne=Object.defineProperty;var ce=Object.getOwnPropertyDescriptor;var m=(e,t,r,s)=>{for(var i=s>1?void 0:s?ce(t,r):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(s?o(t,r,i):o(i))||i);return s&&i&&ne(t,r,i),i};var K=globalThis,Z=K.ShadowRoot&&(K.ShadyCSS===void 0||K.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,At=Symbol(),$t=new WeakMap,q=class{constructor(t,r,s){if(this._$cssResult$=!0,s!==At)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o,r=this.t;if(Z&&t===void 0){let s=r!==void 0&&r.length===1;s&&(t=$t.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&$t.set(r,t))}return t}toString(){return this.cssText}},X=e=>new q(typeof e=="string"?e:e+"",void 0,At);var St=(e,t)=>{if(Z)e.adoptedStyleSheets=t.map((r=>r instanceof CSSStyleSheet?r:r.styleSheet));else for(let r of t){let s=document.createElement("style"),i=K.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=r.cssText,e.appendChild(s)}},rt=Z?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(let s of t.cssRules)r+=s.cssText;return X(r)})(e):e;var{is:le,defineProperty:de,getOwnPropertyDescriptor:pe,getOwnPropertyNames:he,getOwnPropertySymbols:ue,getPrototypeOf:fe}=Object,Y=globalThis,Et=Y.trustedTypes,ge=Et?Et.emptyScript:"",me=Y.reactiveElementPolyfillSupport,O=(e,t)=>e,U={toAttribute(e,t){switch(t){case Boolean:e=e?ge:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},J=(e,t)=>!le(e,t),xt={attribute:!0,type:String,converter:U,reflect:!1,useDefault:!1,hasChanged:J};Symbol.metadata??=Symbol("metadata"),Y.litPropertyMetadata??=new WeakMap;var C=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=xt){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,r);i!==void 0&&de(this.prototype,t,i)}}static getPropertyDescriptor(t,r,s){let{get:i,set:a}=pe(this.prototype,t)??{get(){return this[r]},set(o){this[r]=o}};return{get:i,set(o){let c=i?.call(this);a?.call(this,o),this.requestUpdate(t,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??xt}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;let t=fe(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){let r=this.properties,s=[...he(r),...ue(r)];for(let i of s)this.createProperty(i,r[i])}let t=this[Symbol.metadata];if(t!==null){let r=litPropertyMetadata.get(t);if(r!==void 0)for(let[s,i]of r)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[r,s]of this.elementProperties){let i=this._$Eu(r,s);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let r=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)r.unshift(rt(i))}else t!==void 0&&r.push(rt(t));return r}static _$Eu(t,r){let s=r.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,r=this.constructor.elementProperties;for(let s of r.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return St(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,r,s){this._$AK(t,s)}_$ET(t,r){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let a=(s.converter?.toAttribute!==void 0?s.converter:U).toAttribute(r,s.type);this._$Em=t,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(t,r){let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let a=s.getPropertyOptions(i),o=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:U;this._$Em=i;let c=o.fromAttribute(r,a.type);this[i]=c??this._$Ej?.get(i)??c,this._$Em=null}}requestUpdate(t,r,s){if(t!==void 0){let i=this.constructor,a=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??J)(a,r)||s.useDefault&&s.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,r,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:s,reflect:i,wrapped:a},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??r??this[t]),a!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(r=void 0),this._$AL.set(t,r)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,a]of s){let{wrapped:o}=a,c=this[i];o!==!0||this._$AL.has(i)||c===void 0||this.C(i,void 0,a,c)}}let t=!1,r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach((s=>s.hostUpdate?.())),this.update(r)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach((r=>r.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((r=>this._$ET(r,this[r]))),this._$EM()}updated(t){}firstUpdated(t){}};C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[O("elementProperties")]=new Map,C[O("finalized")]=new Map,me?.({ReactiveElement:C}),(Y.reactiveElementVersions??=[]).push("2.1.1");var lt=globalThis,Q=lt.trustedTypes,wt=Q?Q.createPolicy("lit-html",{createHTML:e=>e}):void 0,kt="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,Nt="?"+$,be=`<${Nt}>`,T=document,D=()=>T.createComment(""),H=e=>e===null||typeof e!="object"&&typeof e!="function",dt=Array.isArray,ve=e=>dt(e)||typeof e?.[Symbol.iterator]=="function",st=`[ 	
\f\r]`,B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Rt=/-->/g,Tt=/>/g,w=RegExp(`>|${st}(?:([^\\s"'>=/]+)(${st}*=${st}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Lt=/'/g,It=/"/g,Ot=/^(?:script|style|textarea|title)$/i,pt=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),u=pt(1),Me=pt(2),Ge=pt(3),L=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),Pt=new WeakMap,R=T.createTreeWalker(T,129);function Ut(e,t){if(!dt(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return wt!==void 0?wt.createHTML(t):t}var ye=(e,t)=>{let r=e.length-1,s=[],i,a=t===2?"<svg>":t===3?"<math>":"",o=B;for(let c=0;c<r;c++){let n=e[c],l,p,d=-1,g=0;for(;g<n.length&&(o.lastIndex=g,p=o.exec(n),p!==null);)g=o.lastIndex,o===B?p[1]==="!--"?o=Rt:p[1]!==void 0?o=Tt:p[2]!==void 0?(Ot.test(p[2])&&(i=RegExp("</"+p[2],"g")),o=w):p[3]!==void 0&&(o=w):o===w?p[0]===">"?(o=i??B,d=-1):p[1]===void 0?d=-2:(d=o.lastIndex-p[2].length,l=p[1],o=p[3]===void 0?w:p[3]==='"'?It:Lt):o===It||o===Lt?o=w:o===Rt||o===Tt?o=B:(o=w,i=void 0);let y=o===w&&e[c+1].startsWith("/>")?" ":"";a+=o===B?n+be:d>=0?(s.push(l),n.slice(0,d)+kt+n.slice(d)+$+y):n+$+(d===-2?c:y)}return[Ut(e,a+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},V=class e{constructor({strings:t,_$litType$:r},s){let i;this.parts=[];let a=0,o=0,c=t.length-1,n=this.parts,[l,p]=ye(t,r);if(this.el=e.createElement(l,s),R.currentNode=this.el.content,r===2||r===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=R.nextNode())!==null&&n.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(let d of i.getAttributeNames())if(d.endsWith(kt)){let g=p[o++],y=i.getAttribute(d).split($),_=/([.?@])?(.*)/.exec(g);n.push({type:1,index:a,name:_[2],strings:y,ctor:_[1]==="."?at:_[1]==="?"?ot:_[1]==="@"?nt:k}),i.removeAttribute(d)}else d.startsWith($)&&(n.push({type:6,index:a}),i.removeAttribute(d));if(Ot.test(i.tagName)){let d=i.textContent.split($),g=d.length-1;if(g>0){i.textContent=Q?Q.emptyScript:"";for(let y=0;y<g;y++)i.append(d[y],D()),R.nextNode(),n.push({type:2,index:++a});i.append(d[g],D())}}}else if(i.nodeType===8)if(i.data===Nt)n.push({type:2,index:a});else{let d=-1;for(;(d=i.data.indexOf($,d+1))!==-1;)n.push({type:7,index:a}),d+=$.length-1}a++}}static createElement(t,r){let s=T.createElement("template");return s.innerHTML=t,s}};function P(e,t,r=e,s){if(t===L)return t;let i=s!==void 0?r._$Co?.[s]:r._$Cl,a=H(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,r,s)),s!==void 0?(r._$Co??=[])[s]=i:r._$Cl=i),i!==void 0&&(t=P(e,i._$AS(e,t.values),i,s)),t}var it=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:r},parts:s}=this._$AD,i=(t?.creationScope??T).importNode(r,!0);R.currentNode=i;let a=R.nextNode(),o=0,c=0,n=s[0];for(;n!==void 0;){if(o===n.index){let l;n.type===2?l=new M(a,a.nextSibling,this,t):n.type===1?l=new n.ctor(a,n.name,n.strings,this,t):n.type===6&&(l=new ct(a,this,t)),this._$AV.push(l),n=s[++c]}o!==n?.index&&(a=R.nextNode(),o++)}return R.currentNode=T,i}p(t){let r=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,r),r+=s.strings.length-2):s._$AI(t[r])),r++}},M=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,s,i){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=P(this,t,r),H(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==L&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ve(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==h&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){let{values:r,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=V.createElement(Ut(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(r);else{let a=new it(i,this),o=a.u(this.options);a.p(r),this.T(o),this._$AH=a}}_$AC(t){let r=Pt.get(t.strings);return r===void 0&&Pt.set(t.strings,r=new V(t)),r}k(t){dt(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,s,i=0;for(let a of t)i===r.length?r.push(s=new e(this.O(D()),this.O(D()),this,this.options)):s=r[i],s._$AI(a),i++;i<r.length&&(this._$AR(s&&s._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){let s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},k=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,s,i,a){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=a,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=h}_$AI(t,r=this,s,i){let a=this.strings,o=!1;if(a===void 0)t=P(this,t,r,0),o=!H(t)||t!==this._$AH&&t!==L,o&&(this._$AH=t);else{let c=t,n,l;for(t=a[0],n=0;n<a.length-1;n++)l=P(this,c[s+n],r,n),l===L&&(l=this._$AH[n]),o||=!H(l)||l!==this._$AH[n],l===h?t=h:t!==h&&(t+=(l??"")+a[n+1]),this._$AH[n]=l}o&&!i&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},at=class extends k{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}},ot=class extends k{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}},nt=class extends k{constructor(t,r,s,i,a){super(t,r,s,i,a),this.type=5}_$AI(t,r=this){if((t=P(this,t,r,0)??h)===L)return;let s=this._$AH,i=t===h&&s!==h||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,a=t!==h&&(s===h||i);i&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ct=class{constructor(t,r,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}};var Ce=lt.litHtmlPolyfillSupport;Ce?.(V,M),(lt.litHtmlVersions??=[]).push("3.3.1");var Bt=(e,t,r)=>{let s=r?.renderBefore??t,i=s._$litPart$;if(i===void 0){let a=r?.renderBefore??null;s._$litPart$=i=new M(t.insertBefore(D(),a),a,void 0,r??{})}return i._$AI(e),i};var ht=globalThis,A=class extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Bt(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return L}};A._$litElement$=!0,A.finalized=!0,ht.litElementHydrateSupport?.({LitElement:A});var _e=ht.litElementPolyfillSupport;_e?.({LitElement:A});(ht.litElementVersions??=[]).push("4.2.1");var $e={attribute:!0,type:String,converter:U,reflect:!1,hasChanged:J},Ae=(e=$e,t,r)=>{let{kind:s,metadata:i}=r,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),s==="setter"&&((e=Object.create(e)).wrapped=!0),a.set(r.name,e),s==="accessor"){let{name:o}=r;return{set(c){let n=t.get.call(this);t.set.call(this,c),this.requestUpdate(o,n,e)},init(c){return c!==void 0&&this.C(o,void 0,e,c),c}}}if(s==="setter"){let{name:o}=r;return function(c){let n=this[o];t.call(this,c),this.requestUpdate(o,n,e)}}throw Error("Unsupported decorator location: "+s)};function b(e){return(t,r)=>typeof r=="object"?Ae(e,t,r):((s,i,a)=>{let o=i.hasOwnProperty(a);return i.constructor.createProperty(a,s),o?Object.getOwnPropertyDescriptor(i,a):void 0})(e,t,r)}function Dt(e){return b({...e,state:!0,attribute:!1})}var S=84,E=54,G=e=>u`
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
`,Ht=(e,t)=>{switch(t){case"single":return u`
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
			`;case"end":return u`
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
			`;case"start":return u`
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
			`;default:return G(e)}},Vt=(e,t)=>{switch(t){case"single":return u`
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
			`;case"end":return u`
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
			`;case"start":return u`
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
			`;default:return G(e)}},Mt=e=>u`
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
`,Gt=e=>u`
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
`;var ut="__ri_localization_store__",ft=window;ft[ut]||(ft[ut]={content:{},lang:"de"});var x=ft[ut],gt=class{static setProviderContent(t,r){x.content={...x.content,[t]:r}}static setLanguage(t){t!==x.lang&&(x.lang=t,document.dispatchEvent(new CustomEvent("ri-language-change",{detail:{lang:t}})))}static getLanguage(){return x.lang}static getContent(){return x.content[x.lang]??x.content.de}};function f(e,t,r){let i=gt.getContent()?.[e]??t??e;return r&&(i=i.replace(/\{\{(\w+)}}/g,(a,o)=>String(r[o]??`{{${o}}}`))),i}var Se=e=>!!(e&&(e.levelFirstClass&&e.levelFirstClass!=="UNDEFINED"||e.levelEconomyClass&&e.levelEconomyClass!=="UNDEFINED")),Ft=(e,t)=>{if(!t)return;let r=e?t.levelFirstClass:t.levelEconomyClass;if(r=="OVERCROWDED")return"capacity_indicator_fully_booked";if(r==="HIGH")return"capacity_indicator_high";if(r==="MIDDLE")return"capacity_indicator_moderate";if(r==="LOW")return"capacity_indicator_low"},Ee=e=>{if(e=="capacity_indicator_fully_booked")return"critical";if(e==="capacity_indicator_high"||e==="capacity_indicator_moderate")return"warning"},mt=e=>e.startsWith("SLEEPER_"),bt=e=>e.startsWith("COUCHETTE_"),xe=e=>{let t=[],{type:r}=e,s;e.occupancy&&(s=e.occupancy);let{category:i,hasFirstClass:a,hasEconomyClass:o}=r,c=Se(s),n=Ft(!0,s),l=Ft(!1,s);return a&&o?(t.push("first_class"),mt(i)?t.push("bed"):bt(i)?t.push("couchette"):c&&(s?.levelEconomyClass!=="UNDEFINED"&&l?t.push(l):s?.levelFirstClass!=="UNDEFINED"&&n&&t.push(n)),t.push("second_class"),t):a?(t.push("first_class"),mt(i)?t.push("bed"):bt(i)?t.push("couchette"):c&&(n?t.push(n):l&&t.push(l)),t):(o&&(t.push("second_class"),mt(i)?t.push("bed"):bt(i)?t.push("couchette"):c&&l&&t.push(l)),t)},zt=e=>{let{type:t}=e,{category:r}=t,s=[];if(r==="LOCOMOTIVE")return s;if(r==="DOUBLEDECK_CARCARRIER_PASSENGERTRAIN")return["car"];if(e.status==="CLOSED")return["cross_circle"];if(r==="BAGGAGECAR")return["luggage_rack"];if(r==="DININGCAR")return["knife_and_fork"];let i=xe(e);return i.length>0&&s.push(...i),r.startsWith("HALFDININGCAR")&&s.push("knife_and_fork"),s},Wt=({category:e,transportType:t,variant:r,uuid:s})=>{let i=`gradient-${s}`;return!e||e==="UNDEFINED"||t&&t==="UNKNOWN"?G(i):e.includes("LOCOMOTIVE")?Gt(i):e.startsWith("DOUBLECONTROLCAR")?Mt(i):e.includes("POWERCAR")||e.includes("CONTROLCAR")&&t==="HIGH_SPEED_TRAIN"?Ht(i,r):e.includes("CONTROLCAR")||e.includes("PASSENGERCARRIAGE")||e.includes("SLEEPER")||e.includes("COUCHETTE")?Vt(i,r):G(i)},jt=(e,t)=>`${e.vehicleID||e.wagonIdentificationNumber}${t?`-${t}`:""}`;var Kt=({icon:e,carTagsCount:t,isDoubleDeck:r})=>{let s=Ee(e),i=e==="first_class",a="weak";return r?t&&t>=2&&i&&(a="strong"):i&&(a="strong"),u`<span
		class="db-tag"
		aria-hidden="true"
		data-no-text="true"
		data-icon="${e}"
		data-capacity="${s??h}"
		data-emphasis="${a}"
	>
		${e}
	</span>`};var we={BISTRO:"knife_and_fork",AIR_CONDITION:"air_condition",BIKE_SPACE:"bike",TOILET:"wc_sign",WHEELCHAIR_SPACE:"person_with_wheelchair",TOILET_WHEELCHAIR:"restricted_mobility_toilet",BOARDING_AID:"vehicle_entry_aid",CABIN_INFANT:"childrens_compartment",ZONE_QUIET:"quiet_zone",ZONE_FAMILY:"family_compartment",INFO:"information_circle",SEATS_SEVERELY_DISABLED:"traveler_with_reduced_mobility",SEATS_BAHN_COMFORT:"bahnbonus",SEATS_BAHN_BONUS:"bahnbonus",SEATS_LUFTHANSA_EXPRESS_RAIL:"rail_and_fly",WIFI:"wifi",ZONE_MULTI_PURPOSE:void 0},qt=e=>we[e.type]??"question_mark_circle",Zt=(e,t,r)=>{let s="";return r&&(s=s+`${r} `),e==="NOT_AVAILABLE"&&(s=s+f("amenities.status.notAvailable","Nicht Verf\xFCgbar")),e==="RESERVED"&&(s=s+f("amenities.status.reserved","Reserviert")),e==="AVAILABLE"&&(s=s+f("amenities.status.available","Verf\xFCgbar")),`${f(`amenities.icon.${t}`,t)}${s?.length?` - ${s}`:""}`};var Re={knife_and_fork:"Speisewagen",air_condition:"Klimaanlage",bike:"Fahrradstellpl\xE4tze",wc_sign:"Toilette",person_with_wheelchair:"Rollstuhlstellpl\xE4tze",restricted_mobility_toilet:"Rollstuhlg\xE4ngige Toilette",vehicle_entry_aid:"Einstiegshilfe",childrens_compartment:"Kleinkindabteil",quiet_zone:"Ruhebereich",family_compartment:"Familienbereich",information_circle:"Info-Abteil",traveler_with_reduced_mobility:"Pl\xE4tze f\xFCr Schwerbehinderte",bahnbonus:"BahnBonus Status",rail_and_fly:"Pl\xE4tze f\xFCr LH-Codeshare",wifi:"WLAN-Hotspot",question_mark_circle:"Unbekannt",bed:"Schlafwagen",car:"Autotransportwagen",luggage_rack:"Gep\xE4ckwagen",couchette:"Liegewagen",first_class:"Erste Klasse",first_and_second_class:"Erste und Zweite Klasse",second_class:"Zweite Klasse",capacity_indicator_fully_booked:"Au\xDFergew\xF6hnlich hohe Auslastung erwartet",capacity_indicator_high:"Hohe Auslastung erwartet",capacity_indicator_moderate:"Mittlere Auslastung erwartet",capacity_indicator_low:"Geringe Auslastung erwartet"},Xt=e=>{let t=Re[e]??e;return f(`amenities.icon.${e}`,t)};var vt="ri-car",Te=({vehicle:e,priorityList:t,isDoubleDeck:r,isCanceled:s})=>{let i=[];return s?i.push(f("car.closed",", Wagen geschlossen")):(t&&i.push(t.map(a=>{if(t.includes("first_class")&&t.includes("second_class")){if(a==="first_class")return"first_and_second_class";if(a==="second_class")return""}return a}).filter(a=>a.length).map(Xt).join(", ")),e.reservedSeat&&i.push(f("car.reservedSeat",", ihr reservierter Sitzplatz {{seat}}",{seat:e.reservedSeat})),r&&i.push(f("car.doubleDeck",", Doppelstockwagen")),e.platformPosition?.sector&&i.push(f("car.sector",", im Abschnitt {{sector}}",{sector:e.platformPosition.sector})),e?.amenities?.length>0&&(i.push(f("car.amenities",", Ausstattungsmerkmale: ")),i.push(e.amenities.map(a=>Zt(a.status,qt(a),a.amount)).join(", ")))),i.join(`
`)},Le=(e,t)=>{let r=f("car.wagon","Wagen");return e?.wagonIdentificationNumber?r+=` ${e?.wagonIdentificationNumber}`:t&&(r+=` ${t}`),r},Yt=({vehicle:e,active:t,variant:r,anchor:s,interactive:i,transportType:a,riClick:o,carIndex:c,postfix:n})=>{if(!e)return u`No car provided`;let{type:l}=e,{category:p,hasEconomyClass:d,hasFirstClass:g}=l,_=d&&g?"mixed":g?"first":h,W=zt(e),Ct=W.length,I=p.startsWith("DOUBLEDECK"),j=W.includes("cancel"),ie=Wt({category:p,transportType:a,variant:r,uuid:jt(e,n)}),_t=Te({vehicle:e,isCanceled:j,isDoubleDeck:I,priorityList:W}),ae=Le(e,c),et=u`
		<span class="ri-car-label">${ae}</span>
		${ie}
		<ul
			aria-hidden="true"
			class="ri-car-icon-container"
			data-car-tags="${Ct}"
			data-double-deck="${I}"
		>
			${W.map(oe=>u`<li>
						${Kt({icon:oe,isDoubleDeck:I,carTagsCount:Ct})}
					</li>`)}
		</ul>
	`;if(!p.includes("POWERCAR")&&!p.includes("LOCOMOTIVE")){if(i==="link"&&s)return u`<a
				class="${vt}"
				data-variant="${r}"
				aria-current="${t?"step":!1}"
				data-canceled="${j}"
				data-interactive="true"
				data-class-color="${_}"
				data-double-deck="${I}"
				href="${s}"
				aria-description="${_t}"
			>
				${et}
			</a>`;if(i==="button")return u` <button
				class="${vt}"
				data-variant="${r}"
				data-canceled="${j}"
				data-interactive="true"
				data-class-color="${_}"
				data-double-deck="${I}"
				aria-description="${_t}"
				@click="${o}"
			>
				${et}
			</button>`}return u`<div
		class="${vt}"
		data-category="${p}"
		data-variant="${r}"
		data-canceled="${j}"
		data-interactive="false"
		data-class-color="${_}"
		data-double-deck="${I}"
	>
		${et}
	</div>`};var Jt={};var Qt={};var te={};var ee={};var F=class extends A{constructor(){super(...arguments);this.i18n=!0;this.onLanguageChange=()=>{this.requestUpdate()}}async hydrateElements(){await new Promise(r=>setTimeout(r,0)),this.shadowRoot?.host.localName&&(this.shadowRoot.host.setAttribute("data-hydrated","true"),this.shadowRoot?.querySelectorAll(`.${this.shadowRoot?.host.localName}`).forEach(r=>{r?.setAttribute("data-hydrated","true")}))}connectedCallback(){super.connectedCallback(),this.shadowRoot?.host.setAttribute("data-hydrated","true"),this.shadowRoot&&(this.hydrateObserver=new MutationObserver(()=>{this.hydrateElements()}),this.hydrateObserver.observe(this.shadowRoot,{childList:!0,subtree:!0})),this.i18n&&document.addEventListener("ri-language-change",this.onLanguageChange)}disconnectedCallback(){this.hydrateObserver?.disconnect(),this.i18n&&document.removeEventListener("ri-language-change",this.onLanguageChange),super.disconnectedCallback()}};m([Dt()],F.prototype,"hydrateObserver",2);var N=class extends F{};m([b({reflect:!0,type:String})],N.prototype,"anchor",2),m([b({reflect:!0,type:String})],N.prototype,"interactive",2);var v=class extends N{constructor(){super(...arguments);this.active=!1;this.variant="middle"}riClick(){this.dispatchEvent(new CustomEvent("car-click",{bubbles:!0,composed:!0,detail:this.vehicle}))}render(){return Yt({vehicle:this.vehicle,active:this.active,variant:this.variant,anchor:this.anchor,interactive:this.interactive,transportType:this.transportType,carIndex:this.carIndex,postfix:this.postfix,riClick:this.riClick})}static{this.styles=X([Jt,Qt,te,ee].join(`
`))}};m([b({reflect:!0,type:Object})],v.prototype,"vehicle",2),m([b({reflect:!0,type:String})],v.prototype,"active",2),m([b({reflect:!0,type:String})],v.prototype,"variant",2),m([b({reflect:!0,type:String})],v.prototype,"transportType",2),m([b({reflect:!0,type:String})],v.prototype,"carIndex",2),m([b({reflect:!0,type:String})],v.prototype,"postfix",2);var yt=null,re=()=>(yt===null&&(yt=self.document.styleSheets?[...self.document.styleSheets].map(e=>{let t=new CSSStyleSheet;try{if(e.cssRules){let r=[...e.cssRules].map(s=>s.cssText).join(" ");t.replaceSync(r)}}catch{}return t}):[]),yt),se=(e=[])=>Array.isArray(e)?e:[e];var z=class extends v{};z.styles=[...re(),...se(z.styles)];customElements.get("ri-car")||customElements.define("ri-car",z);})();
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
