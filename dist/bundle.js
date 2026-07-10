const e=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&s+1<e.length&&56320==(64512&e.charCodeAt(s+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++s)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},t={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let t=0;t<e.length;t+=3){const r=e[t],i=t+1<e.length,o=i?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,u=r>>2,l=(3&r)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(h=64)),s.push(n[u],n[l],n[h],n[d])}return s.join("")},encodeString(t,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(t):this.encodeByteArray(e(t),n)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((31&r)<<6|63&i)}else if(r>239&&r<365){const i=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[s++]=String.fromCharCode(55296+(i>>10)),t[s++]=String.fromCharCode(56320+(1023&i))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((15&r)<<12|(63&i)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const s=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=s[e.charAt(t++)],o=t<e.length?s[e.charAt(t)]:0;++t;const a=t<e.length?s[e.charAt(t)]:64;++t;const c=t<e.length?s[e.charAt(t)]:64;if(++t,null==i||null==o||null==a||null==c)throw new n;const u=i<<2|o>>4;if(r.push(u),64!==a){const e=o<<4&240|a>>2;if(r.push(e),64!==c){const e=a<<6&192|c;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const s=function(n){return function(n){const s=e(n);return t.encodeByteArray(s,!0)}(n).replace(/\./g,"")},r=function(e){try{return t.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,o=()=>{try{return i()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e=process.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&r(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},a=e=>o()?.emulatorHosts?.[e],c=()=>o()?.config,u=e=>o()?.[`_${e}`];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class l{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function h(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function d(){return!function(){const e=o()?.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(e){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}class f extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,f.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,p.prototype.create)}}class p{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],i=r?function(e,t){return e.replace(g,(e,n)=>{const s=t[n];return null!=s?String(s):`<${n}?>`})}(r,n):"Error",o=`${this.serviceName}: ${i} (${s}).`;return new f(s,o,n)}}const g=/\{\$([^}]+)}/g;function m(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const n=e[r],i=t[r];if(y(n)&&y(i)){if(!m(n,i))return!1}else if(n!==i)return!1}for(const e of s)if(!n.includes(e))return!1;return!0}function y(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e){const t=[];for(const[n,s]of Object.entries(e))Array.isArray(s)?s.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}class w{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");s=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===s.next&&(s.next=b),void 0===s.error&&(s.error=b),void 0===s.complete&&(s.complete=b);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch(e){}}),this.observers.push(s),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function b(){}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e){return e&&e._delegate?e._delegate:e}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function T(e){return(await fetch(e,{credentials:"include"})).ok}class I{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new l;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(e){if(n)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:S})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=S){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=S){return this.instances.has(e)}getOptions(e=S){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(s)}return s}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(n)??new Set;s.add(e),this.onInitCallbacks.set(n,s);const r=this.instances.get(n);return r&&e(r,n),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(s=e,s===S?void 0:s),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}var s;return n||null}normalizeInstanceIdentifier(e=S){return this.component?this.component.multipleInstances?e:S:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class k{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new C(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var A;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(A||(A={}));const N={debug:A.DEBUG,verbose:A.VERBOSE,info:A.INFO,warn:A.WARN,error:A.ERROR,silent:A.SILENT},D=A.INFO,R={[A.DEBUG]:"log",[A.VERBOSE]:"log",[A.INFO]:"info",[A.WARN]:"warn",[A.ERROR]:"error"},L=(e,t,...n)=>{if(t<e.logLevel)return;const s=(new Date).toISOString(),r=R[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${s}]  ${e.name}:`,...n)};class O{constructor(e){this.name=e,this._logLevel=D,this._logHandler=L,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in A))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?N[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,A.DEBUG,...e),this._logHandler(this,A.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,A.VERBOSE,...e),this._logHandler(this,A.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,A.INFO,...e),this._logHandler(this,A.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,A.WARN,...e),this._logHandler(this,A.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,A.ERROR,...e),this._logHandler(this,A.ERROR,...e)}}let P,x;const M=new WeakMap,V=new WeakMap,U=new WeakMap,F=new WeakMap,B=new WeakMap;let j={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return V.get(e);if("objectStoreNames"===t)return e.objectStoreNames||U.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return z(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function $(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(x||(x=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(H(this),t),z(M.get(this))}:function(...t){return z(e.apply(H(this),t))}:function(t,...n){const s=e.call(H(this),t,...n);return U.set(s,t.sort?t.sort():[t]),z(s)}}function q(e){return"function"==typeof e?$(e):(e instanceof IDBTransaction&&function(e){if(V.has(e))return;const t=new Promise((t,n)=>{const s=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",i),e.removeEventListener("abort",i)},r=()=>{t(),s()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",r),e.addEventListener("error",i),e.addEventListener("abort",i)});V.set(e,t)}(e),t=e,(P||(P=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,j):e);var t}function z(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const s=()=>{e.removeEventListener("success",r),e.removeEventListener("error",i)},r=()=>{t(z(e.result)),s()},i=()=>{n(e.error),s()};e.addEventListener("success",r),e.addEventListener("error",i)});return t.then(t=>{t instanceof IDBCursor&&M.set(t,e)}).catch(()=>{}),B.set(t,e),t}(e);if(F.has(e))return F.get(e);const t=q(e);return t!==e&&(F.set(e,t),B.set(t,e)),t}const H=e=>B.get(e);const K=["get","getKey","getAll","getAllKeys","count"],G=["put","add","delete","clear"],W=new Map;function Q(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(W.get(t))return W.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=G.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!r&&!K.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,r?"readwrite":"readonly");let o=i.store;return s&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&i.done]))[0]};return W.set(t,i),i}j=(e=>({...e,get:(t,n,s)=>Q(t,n)||e.get(t,n,s),has:(t,n)=>!!Q(t,n)||e.has(t,n)}))(j);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class J{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===t?.type}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const X="@firebase/app",Y="0.14.13",Z=new O("@firebase/app"),ee="@firebase/app-compat",te="@firebase/analytics-compat",ne="@firebase/analytics",se="@firebase/app-check-compat",re="@firebase/app-check",ie="@firebase/auth",oe="@firebase/auth-compat",ae="@firebase/database",ce="@firebase/data-connect",ue="@firebase/database-compat",le="@firebase/functions",he="@firebase/functions-compat",de="@firebase/installations",fe="@firebase/installations-compat",pe="@firebase/messaging",ge="@firebase/messaging-compat",me="@firebase/performance",ye="@firebase/performance-compat",ve="@firebase/remote-config",we="@firebase/remote-config-compat",be="@firebase/storage",_e="@firebase/storage-compat",Ee="@firebase/firestore",Te="@firebase/ai",Ie="@firebase/firestore-compat",Se="firebase",Ce="[DEFAULT]",ke={[X]:"fire-core",[ee]:"fire-core-compat",[ne]:"fire-analytics",[te]:"fire-analytics-compat",[re]:"fire-app-check",[se]:"fire-app-check-compat",[ie]:"fire-auth",[oe]:"fire-auth-compat",[ae]:"fire-rtdb",[ce]:"fire-data-connect",[ue]:"fire-rtdb-compat",[le]:"fire-fn",[he]:"fire-fn-compat",[de]:"fire-iid",[fe]:"fire-iid-compat",[pe]:"fire-fcm",[ge]:"fire-fcm-compat",[me]:"fire-perf",[ye]:"fire-perf-compat",[ve]:"fire-rc",[we]:"fire-rc-compat",[be]:"fire-gcs",[_e]:"fire-gcs-compat",[Ee]:"fire-fst",[Ie]:"fire-fst-compat",[Te]:"fire-vertex","fire-js":"fire-js",[Se]:"fire-js-all"},Ae=new Map,Ne=new Map,De=new Map;function Re(e,t){try{e.container.addComponent(t)}catch(n){Z.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Le(e){const t=e.name;if(De.has(t))return Z.debug(`There were multiple attempts to register component ${t}.`),!1;De.set(t,e);for(const t of Ae.values())Re(t,e);for(const t of Ne.values())Re(t,e);return!0}function Oe(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Pe(e){return null!=e&&void 0!==e.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe=new p("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Me{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new I("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xe.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve="12.14.0";function Ue(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const s={name:Ce,automaticDataCollectionEnabled:!0,...t},r=s.name;if("string"!=typeof r||!r)throw xe.create("bad-app-name",{appName:String(r)});if(n||(n=c()),!n)throw xe.create("no-options");const i=Ae.get(r);if(i){if(m(n,i.options)&&m(s,i.config))return i;throw xe.create("duplicate-app",{appName:r})}const o=new k(r);for(const e of De.values())o.addComponent(e);const a=new Me(n,s,o);return Ae.set(r,a),a}function Fe(e=Ce){const t=Ae.get(e);if(!t&&e===Ce&&c())return Ue();if(!t)throw xe.create("no-app",{appName:e});return t}function Be(e,t,n){let s=ke[e]??e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),i=t.match(/\s|\//);if(r||i){const e=[`Unable to register library "${s}" with version "${t}":`];return r&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&e.push("and"),i&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Z.warn(e.join(" "))}Le(new I(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je="firebase-heartbeat-store";let $e=null;function qe(){return $e||($e=function(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=z(o);return s&&o.addEventListener("upgradeneeded",e=>{s(z(o.result),e.oldVersion,e.newVersion,z(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),a.then(e=>{i&&e.addEventListener("close",()=>i()),r&&e.addEventListener("versionchange",e=>r(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(je)}catch(e){console.warn(e)}}}).catch(e=>{throw xe.create("idb-open",{originalErrorMessage:e.message})})),$e}async function ze(e,t){try{const n=(await qe()).transaction(je,"readwrite"),s=n.objectStore(je);await s.put(t,He(e)),await n.done}catch(e){if(e instanceof f)Z.warn(e.message);else{const t=xe.create("idb-set",{originalErrorMessage:e?.message});Z.warn(t.message)}}}function He(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new We(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Ge();if(null==this._heartbeatsCache?.heartbeats&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats))return;if(this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(e=>e.date===t))return;if(this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let s=1;s<e.length;s++)e[s].date<n&&(n=e[s].date,t=s);return t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Z.warn(e)}}async getHeartbeatsHeader(){try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats||0===this._heartbeatsCache.heartbeats.length)return"";const e=Ge(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let s=e.slice();for(const r of e){const e=n.find(e=>e.agent===r.agent);if(e){if(e.dates.push(r.date),Qe(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Qe(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}(this._heartbeatsCache.heartbeats),r=s(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return Z.warn(e),""}}}function Ge(){return(new Date).toISOString().substring(0,10)}class We{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{t(r.error?.message||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await qe()).transaction(je),n=await t.objectStore(je).get(He(e));return await t.done,n}catch(e){if(e instanceof f)Z.warn(e.message);else{const t=xe.create("idb-get",{originalErrorMessage:e?.message});Z.warn(t.message)}}}(this.app);return e?.heartbeats?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return ze(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return ze(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}}function Qe(e){return s(JSON.stringify({version:2,heartbeats:e})).length}var Je;Je="",Le(new I("platform-logger",e=>new J(e),"PRIVATE")),Le(new I("heartbeat",e=>new Ke(e),"PRIVATE")),Be(X,Y,Je),Be(X,Y,"esm2020"),Be("fire-js","");function Xe(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Be("firebase","12.14.0","app");const Ye=Xe,Ze=new p("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),et=new O("@firebase/auth");function tt(e,...t){et.logLevel<=A.ERROR&&et.error(`Auth (${Ve}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(e,...t){throw at(e,...t)}function st(e,...t){return at(e,...t)}function rt(e,t,n){const s={...Ye(),[t]:n};return new p("auth","Firebase",s).create(t,{appName:e.name})}function it(e){return rt(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ot(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&nt(e,"argument-error"),rt(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function at(e,...t){if("string"!=typeof e){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=e.name),e._errorFactory.create(n,...s)}return Ze.create(e,...t)}function ct(e,t,...n){if(!e)throw at(t,...n)}function ut(e){const t="INTERNAL ASSERTION FAILED: "+e;throw tt(t),new Error(t)}function lt(e,t){e||ut(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return"undefined"!=typeof self&&self.location?.href||""}function dt(){return"undefined"!=typeof self&&self.location?.protocol||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==dt()&&"https:"!==dt()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt{constructor(e,t){this.shortDelay=e,this.longDelay=t,lt(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(h())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return ft()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(e,t){lt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},vt=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],wt=new pt(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function _t(e,t,n,s,r={}){return Et(e,r,async()=>{let r={},i={};s&&("GET"===t?i=s:r={body:JSON.stringify(s)});const o=v({key:e.config.apiKey,...i}).slice(1),a=await e._getAdditionalHeaders();a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode);const c={method:t,headers:a,...r};return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(c.referrerPolicy="no-referrer"),e.emulatorConfig&&E(e.emulatorConfig.host)&&(c.credentials="include"),mt.fetch()(await Tt(e,e.config.apiHost,n,o),c)})}async function Et(e,t,n){e._canInitEmulator=!1;const s={...yt,...t};try{const t=new It(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await r.json();if("needConfirmation"in i)throw St(e,"account-exists-with-different-credential",i);if(r.ok&&!("errorMessage"in i))return i;{const t=r.ok?i.errorMessage:i.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw St(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw St(e,"email-already-in-use",i);if("USER_DISABLED"===n)throw St(e,"user-disabled",i);const a=s[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw rt(e,a,o);nt(e,a)}}catch(t){if(t instanceof f)throw t;nt(e,"network-request-failed",{message:String(t)})}}async function Tt(e,t,n,s){const r=`${t}${n}?${s}`,i=e,o=i.config.emulator?gt(e.config,r):`${e.config.apiScheme}://${r}`;if(vt.includes(n)&&(await i._persistenceManagerAvailable,"COOKIE"===i._getPersistenceType())){return i._getPersistence()._getFinalTarget(o).toString()}return o}class It{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(st(this.auth,"network-request-failed")),wt.get())})}}function St(e,t,n){const s={appName:e.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=st(e,t,s);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ct(e,t){return _t(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function At(e){return 1e3*Number(e)}function Nt(e){const[t,n,s]=e.split(".");if(void 0===t||void 0===n||void 0===s)return tt("JWT malformed, contained fewer than 3 sections"),null;try{const e=r(n);return e?JSON.parse(e):(tt("Failed to decode base64 JWT payload"),null)}catch(e){return tt("Caught error parsing JWT payload as JSON",e?.toString()),null}}function Dt(e){const t=Nt(e);return ct(t,"internal-error"),ct(void 0!==t.exp,"internal-error"),ct(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof f&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Lt{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e?.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=kt(this.lastLoginAt),this.creationTime=kt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(e){const t=e.auth,n=await e.getIdToken(),s=await Rt(e,Ct(t,{idToken:n}));ct(s?.users.length,t,"internal-error");const r=s.users[0];e._notifyReloadListener(r);const i=r.providerUserInfo?.length?xt(r.providerUserInfo):[],o=(a=e.providerData,c=i,[...a.filter(e=>!c.some(t=>t.providerId===e.providerId)),...c]);var a,c;const u=e.isAnonymous,l=!(e.email&&r.passwordHash||o?.length),h=!!u&&l,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new Ot(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(e,d)}function xt(e){return e.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ct(e.idToken,"internal-error"),ct(void 0!==e.idToken,"internal-error"),ct(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):Dt(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ct(0!==e.length,"internal-error");const t=Dt(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(ct(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:r}=await async function(e,t){const n=await Et(e,{},async()=>{const n=v({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:r}=e.config,i=await Tt(e,s,"/v1/token",`key=${r}`),o=await e._getAdditionalHeaders();o["Content-Type"]="application/x-www-form-urlencoded";const a={method:"POST",headers:o,body:n};return e.emulatorConfig&&E(e.emulatorConfig.host)&&(a.credentials="include"),mt.fetch()(i,a)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,s,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:r}=t,i=new Mt;return n&&(ct("string"==typeof n,"internal-error",{appName:e}),i.refreshToken=n),s&&(ct("string"==typeof s,"internal-error",{appName:e}),i.accessToken=s),r&&(ct("number"==typeof r,"internal-error",{appName:e}),i.expirationTime=r),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mt,this.toJSON())}_performRefresh(){return ut("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(e,t){ct("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Ut{constructor({uid:e,auth:t,stsTokenManager:n,...s}){this.providerId="firebase",this.proactiveRefresh=new Lt(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ot(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Rt(this,this.stsTokenManager.getToken(this.auth,e));return ct(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=_(e),s=await n.getIdToken(t),r=Nt(s);ct(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i="object"==typeof r.firebase?r.firebase:void 0,o=i?.sign_in_provider;return{claims:r,token:s,authTime:kt(At(r.auth_time)),issuedAtTime:kt(At(r.iat)),expirationTime:kt(At(r.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}(this,e)}reload(){return async function(e){const t=_(e);await Pt(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(ct(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>({...e})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ut({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ct(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Pt(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pe(this.auth.app))return Promise.reject(it(this.auth));const e=await this.getIdToken();return await Rt(this,async function(e,t){return _t(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,s=t.email??void 0,r=t.phoneNumber??void 0,i=t.photoURL??void 0,o=t.tenantId??void 0,a=t._redirectEventId??void 0,c=t.createdAt??void 0,u=t.lastLoginAt??void 0,{uid:l,emailVerified:h,isAnonymous:d,providerData:f,stsTokenManager:p}=t;ct(l&&p,e,"internal-error");const g=Mt.fromJSON(this.name,p);ct("string"==typeof l,e,"internal-error"),Vt(n,e.name),Vt(s,e.name),ct("boolean"==typeof h,e,"internal-error"),ct("boolean"==typeof d,e,"internal-error"),Vt(r,e.name),Vt(i,e.name),Vt(o,e.name),Vt(a,e.name),Vt(c,e.name),Vt(u,e.name);const m=new Ut({uid:l,auth:e,email:s,emailVerified:h,displayName:n,isAnonymous:d,photoURL:i,phoneNumber:r,tenantId:o,stsTokenManager:g,createdAt:c,lastLoginAt:u});return f&&Array.isArray(f)&&(m.providerData=f.map(e=>({...e}))),a&&(m._redirectEventId=a),m}static async _fromIdTokenResponse(e,t,n=!1){const s=new Mt;s.updateFromServerResponse(t);const r=new Ut({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await Pt(r),r}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];ct(void 0!==s.localId,"internal-error");const r=void 0!==s.providerUserInfo?xt(s.providerUserInfo):[],i=!(s.email&&s.passwordHash||r?.length),o=new Mt;o.updateFromIdToken(n);const a=new Ut({uid:s.localId,auth:e,stsTokenManager:o,isAnonymous:i}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new Ot(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash||r?.length)};return Object.assign(a,c),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=new Map;function Bt(e){lt(e instanceof Function,"Expected a class definition");let t=Ft.get(e);return t?(lt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ft.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}jt.type="NONE";const $t=jt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(e,t,n){return`firebase:${e}:${t}:${n}`}class zt{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:r}=this.auth;this.fullUserKey=qt(this.userKey,s.apiKey,r),this.fullPersistenceKey=qt("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"==typeof e){const t=await Ct(this.auth,{idToken:e}).catch(()=>{});return t?Ut._fromGetAccountInfoResponse(this.auth,t,e):null}return Ut._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new zt(Bt($t),e,n);const s=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let r=s[0]||Bt($t);const i=qt(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(i);if(t){let s;if("string"==typeof t){const n=await Ct(e,{idToken:t}).catch(()=>{});if(!n)break;s=await Ut._fromGetAccountInfoResponse(e,n,t)}else s=Ut._fromJSON(e,t);n!==r&&(o=s),r=n;break}}catch{}const a=s.filter(e=>e._shouldAllowMigration);return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(i,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==r)try{await e._remove(i)}catch{}})),new zt(r,e,n)):new zt(r,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Qt(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Kt(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Xt(t))return"Blackberry";if(Yt(t))return"Webos";if(Gt(t))return"Safari";if((t.includes("chrome/")||Wt(t))&&!t.includes("edge/"))return"Chrome";if(Jt(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===n?.length)return n[1]}return"Other"}function Kt(e=h()){return/firefox\//i.test(e)}function Gt(e=h()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Wt(e=h()){return/crios\//i.test(e)}function Qt(e=h()){return/iemobile/i.test(e)}function Jt(e=h()){return/android/i.test(e)}function Xt(e=h()){return/blackberry/i.test(e)}function Yt(e=h()){return/webos/i.test(e)}function Zt(e=h()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function en(){return function(){const e=h();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function tn(e=h()){return Zt(e)||Jt(e)||Yt(e)||Xt(e)||/windows phone/i.test(e)||Qt(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(e,t=[]){let n;switch(e){case"Browser":n=Ht(h());break;case"Worker":n=`${Ht(h())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ve}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,s)=>{try{n(e(t))}catch(e){s(e)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:e?.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??6,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),void 0!==t.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),void 0!==t.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),void 0!==t.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),void 0!==t.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cn(this),this.idTokenSubscription=new cn(this),this.beforeStateQueue=new sn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ze,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Bt(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await zt.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await Ct(this,{idToken:e}),n=await Ut._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Pe(this.app)){const e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const t=this.redirectUser?._redirectEventId,r=n?._redirectEventId,i=await this.tryRedirectSignIn(e);t&&t!==r||!i?.user||(n=i.user,s=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return ct(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Pt(e)}catch(e){if("auth/network-request-failed"!==e?.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pe(this.app))return Promise.reject(it(this));const t=e?_(e):null;return t&&ct(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ct(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pe(this.app)?Promise.reject(it(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pe(this.app)?Promise.reject(it(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Bt(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return _t(e,"GET","/v2/passwordPolicy",bt(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this),t=new rn(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new p("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return _t(e,"POST","/v2/accounts:revokeToken",bt(e,t))}(this,t)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Bt(e)||this._popupRedirectResolver;ct(t,this,"argument-error"),this.redirectPersistenceManager=await zt.create(this,[Bt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t);let i=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(ct(o,this,"internal-error"),o.then(()=>{i||r(this.currentUser)}),"function"==typeof t){const r=e.addObserver(t,n,s);return()=>{i=!0,r()}}{const n=e.addObserver(t);return()=>{i=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ct(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await(this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){if(Pe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await(this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken());return e?.error&&function(e,...t){et.logLevel<=A.WARN&&et.warn(`Auth (${Ve}): ${e}`,...t)}(`Error while retrieving App Check token: ${e.error}`),e?.token}}function an(e){return _(e)}class cn{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new w(e,t);return n.subscribe.bind(n)}(e=>this.observer=e)}get next(){return ct(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let un={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ln(e,t,n){const s=an(e);ct(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const r=hn(t),{host:i,port:o}=function(e){const t=hn(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const e=r[1];return{host:e,port:dn(s.substr(e.length+1))}}{const[e,t]=s.split(":");return{host:e,port:dn(t)}}}(t),a=null===o?"":`:${o}`,c={url:`${r}//${i}${a}/`},u=Object.freeze({host:i,port:o,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:!1})});if(!s._canInitEmulator)return ct(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),void ct(m(c,s.config.emulator)&&m(u,s.emulatorConfig),s,"emulator-config-failed");s.config.emulator=c,s.emulatorConfig=u,s.settings.appVerificationDisabledForTesting=!0,E(i)?T(`${r}//${i}${a}`):function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function hn(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function dn(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class fn{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ut("not implemented")}_getIdTokenResponse(e){return ut("not implemented")}_linkToIdToken(e,t){return ut("not implemented")}_getReauthenticationResolver(e){return ut("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pn(e,t){return async function(e,t,n,s,r={}){const i=await _t(e,t,n,s,r);return"mfaPendingCredential"in i&&nt(e,"multi-factor-auth-required",{_serverResponse:i}),i}(e,"POST","/v1/accounts:signInWithIdp",bt(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends fn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new gn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):nt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:s,...r}=t;if(!n||!s)return null;const i=new gn(n,s);return i.idToken=r.idToken||void 0,i.accessToken=r.accessToken||void 0,i.secret=r.secret,i.nonce=r.nonce,i.pendingToken=r.pendingToken||null,i}_getIdTokenResponse(e){return pn(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,pn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,pn(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=v(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends mn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends yn{constructor(){super("facebook.com")}static credential(e){return gn._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return vn.credential(e.oauthAccessToken)}catch{return null}}}vn.FACEBOOK_SIGN_IN_METHOD="facebook.com",vn.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wn extends yn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return gn._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return wn.credential(t,n)}catch{return null}}}wn.GOOGLE_SIGN_IN_METHOD="google.com",wn.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bn extends yn{constructor(){super("github.com")}static credential(e){return gn._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.GITHUB_SIGN_IN_METHOD="github.com",bn.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _n extends yn{constructor(){super("twitter.com")}static credential(e,t){return gn._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return _n.credential(t,n)}catch{return null}}}_n.TWITTER_SIGN_IN_METHOD="twitter.com",_n.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class En{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const r=await Ut._fromIdTokenResponse(e,n,s),i=Tn(n);return new En({user:r,providerId:i,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=Tn(n);return new En({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function Tn(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends f{constructor(e,t,n,s){super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,In.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new In(e,t,n,s)}}function Sn(e,t,n,s){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw In._fromErrorAndOperation(e,n,t,s);throw n})}function Cn(e){return _(e).signOut()}async function kn(e){return _(e).delete()}const An="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(An,"1"),this.storage.removeItem(An),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends Nn{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=tn(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);en()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,10):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Dn.type="LOCAL";const Rn=Dn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends Nn{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ln.type="SESSION";const On=Ln;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Pn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:r}=t.data,i=this.handlersMap[s];if(!i?.size)return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const o=Array.from(i).map(async e=>e(t.origin,r)),a=await function(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}}))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xn(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pn.receivers=[];class Mn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,i;return new Promise((o,a)=>{const c=xn("",20);s.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);i={messageChannel:s,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(u),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(i),s.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Un(){return void 0!==Vn().WorkerGlobalScope&&"function"==typeof Vn().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Fn="firebaseLocalStorageDb",Bn="firebaseLocalStorage",jn="fbase_key";class $n{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function qn(e,t){return e.transaction([Bn],t?"readwrite":"readonly").objectStore(Bn)}function zn(){const e=indexedDB.open(Fn,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Bn,{keyPath:jn})}catch(e){n(e)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Bn)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Fn);return new $n(e).toPromise()}(),t(await zn()))})})}async function Hn(e,t,n){const s=qn(e,!0).put({[jn]:t,value:n});return new $n(s).toPromise()}function Kn(e,t){const n=qn(e,!0).delete(t);return new $n(n).toPromise()}class Gn{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise||(this.dbPromise=zn(),this.dbPromise.catch(()=>{this.dbPromise=null})),this.dbPromise}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;if(this.dbPromise){(await this.dbPromise).close(),this.dbPromise=null}}}async initializeServiceWorkerMessaging(){return Un()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pn._getInstance(Un()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await async function(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}(),!this.activeServiceWorker)return;this.sender=new Mn(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&(navigator?.serviceWorker?.controller||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return!!indexedDB&&(await this._withRetries(async e=>{await Hn(e,An,"1"),await Kn(e,An)}),!0)}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Hn(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>async function(e,t){const n=qn(e,!1).get(t),s=await new $n(n).toPromise();return void 0===s?null:s.value}(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Kn(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=qn(e,!1).getAll();return new $n(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:s,value:r}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Gn.type="LOCAL";const Wn=Gn;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qn(e,t){return t?Bt(t):(ct(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new pt(3e4,6e4);class Jn extends fn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return pn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return pn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Xn(e){
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t,n=!1){if(Pe(e.app))return Promise.reject(it(e));const s="signIn",r=await Sn(e,s,t),i=await En._fromIdTokenResponse(e,s,r);return n||await e._updateCurrentUser(i.user),i}(e.auth,new Jn(e),e.bypassAuthState)}function Yn(e){const{auth:t,user:n}=e;return ct(n,t,"internal-error"),
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t,n=!1){const{auth:s}=e;if(Pe(s.app))return Promise.reject(it(s));const r="reauthenticate";try{const i=await Rt(e,Sn(s,r,t,e),n);ct(i.idToken,s,"internal-error");const o=Nt(i.idToken);ct(o,s,"internal-error");const{sub:a}=o;return ct(e.uid===a,s,"user-mismatch"),En._forOperation(e,r,i)}catch(e){throw"auth/user-not-found"===e?.code&&nt(s,"user-mismatch"),e}}(n,new Jn(e),e.bypassAuthState)}async function Zn(e){const{auth:t,user:n}=e;return ct(n,t,"internal-error"),async function(e,t,n=!1){const s=await Rt(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return En._forOperation(e,"link",s)}(n,new Jn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,t,n,s,r=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:r,error:i,type:o}=e;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xn;case"linkViaPopup":case"linkViaRedirect":return Zn;case"reauthViaPopup":case"reauthViaRedirect":return Yn;default:nt(this.auth,"internal-error")}}resolve(e){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=new pt(2e3,1e4);class ns extends es{constructor(e,t,n,s,r){super(e,t,s,r),this.provider=n,this.authWindow=null,this.pollId=null,ns.currentPopupAction&&ns.currentPopupAction.cancel(),ns.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ct(e,this.auth,"internal-error"),e}async onExecution(){lt(1===this.filter.length,"Popup operations only handle one event");const e=xn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(st(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(st(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ns.currentPopupAction=null}pollUserCancellation(){const e=()=>{this.authWindow?.window?.closed?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(st(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(e,ts.get())};e()}}ns.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ss="pendingRedirect",rs=new Map;class is extends es{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=rs.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return qt(ss,e.config.apiKey,e.name)}(t),s=function(e){return Bt(e._redirectPersistence)}(e);if(!await s._isAvailable())return!1;const r="true"===await s._get(n);return await s._remove(n),r}(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}rs.set(this.auth._key(),e)}return this.bypassAuthState||rs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function os(e,t){rs.set(e._key(),t)}async function as(e,t,n=!1){if(Pe(e.app))return Promise.reject(it(e));const s=an(e),r=Qn(s,t),i=new is(s,r,n),o=await i.execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ls(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!ls(e)){const n=e.error.code?.split("auth/")[1]||"internal-error";t.onError(st(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(us(e))}saveEventToCache(e){this.cachedEventUids.add(us(e)),this.lastProcessedEventTime=Date.now()}}function us(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function ls({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===t?.code}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const hs=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ds=/^https?/;async function fs(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return _t(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(ps(e))return}catch{}nt(e,"unauthorized-domain")}function ps(e){const t=ht(),{protocol:n,hostname:s}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===s?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===s}if(!ds.test(n))return!1;if(hs.test(e))return s===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=new pt(3e4,6e4);function ms(){const e=Vn().___jsl;if(e?.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function ys(e){return new Promise((t,n)=>{function s(){ms(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ms(),n(st(e,"network-request-failed"))},timeout:gs.get()})}if(Vn().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else{if(!Vn().gapi?.load){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Vn()[t]=()=>{gapi.load?s():n(st(e,"network-request-failed"))},(r=`${un.gapiScript}?onload=${t}`,un.loadJS(r)).catch(e=>n(e))}s()}var r}).catch(e=>{throw vs=null,e})}let vs=null;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ws=new pt(5e3,15e3),bs={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_s=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Es(e){const t=e.config;ct(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?gt(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,s={apiKey:t.apiKey,appName:e.name,v:Ve},r=_s.get(e.config.apiHost);r&&(s.eid=r);const i=e._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${v(s).slice(1)}`}async function Ts(e){const t=await function(e){return vs=vs||ys(e),vs}(e),n=Vn().gapi;return ct(n,e,"internal-error"),t.open({where:document.body,url:Es(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bs,dontclear:!0},t=>new Promise(async(n,s)=>{await t.restyle({setHideOnLeave:!1});const r=st(e,"network-request-failed"),i=Vn().setTimeout(()=>{s(r)},ws.get());function o(){Vn().clearTimeout(i),n(t)}t.ping(o).then(o,()=>{s(r)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Ss{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Cs(e,t,n,s=500,r=600){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c={...Is,width:s.toString(),height:r.toString(),top:i,left:o},u=h().toLowerCase();n&&(a=Wt(u)?"_blank":n),Kt(u)&&(t=t||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=h()){return Zt(e)&&!!window.navigator?.standalone}(u)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new Ss(null);const d=window.open(t||"",a,l);ct(d,e,"popup-blocked");try{d.focus()}catch(e){}return new Ss(d)}const ks="__/auth/handler",As="emulator/auth/handler",Ns=encodeURIComponent("fac");async function Ds(e,t,n,s,r,i){ct(e.config.authDomain,e,"auth-domain-config-required"),ct(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:Ve,eventId:r};if(t instanceof mn){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries({}))o[e]=t}if(t instanceof yn){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];const c=await e._getAppCheckToken(),u=c?`#${Ns}=${encodeURIComponent(c)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${ks}`;return gt(e,As)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${v(a).slice(1)}${u}`}const Rs="webStorageSupport";const Ls=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=On,this._completeRedirectFn=as,this._overrideRedirectResult=os}async _openPopup(e,t,n,s){lt(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");return Cs(e,await Ds(e,t,n,ht(),s),xn())}async _openRedirect(e,t,n,s){await this._originValidation(e);return function(e){Vn().location.href=e}(await Ds(e,t,n,ht(),s)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(lt(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Ts(e),n=new cs(e);return t.register("authEvent",t=>{ct(t?.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Rs,{type:Rs},n=>{const s=n?.[0]?.[Rs];void 0!==s&&t(!!s),nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=fs(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return tn()||Gt()||Zt()}};var Os="@firebase/auth",Ps="1.13.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xs{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e(t?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ct(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ms=u("authIdTokenMaxAge")||300;let Vs=null;var Us;un={loadJS:e=>new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=e=>{const t=st("internal-error");t.customData=e,n(t)},s.type="text/javascript",s.charset="UTF-8",(document.getElementsByTagName("head")?.[0]??document).appendChild(s)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},Us="Browser",Le(new I("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:i,authDomain:o}=n.options;ct(i&&!i.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:i,authDomain:o,clientPlatform:Us,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nn(Us)},c=new on(n,s,r,a);return function(e,t){const n=t?.persistence||[],s=(Array.isArray(n)?n:[n]).map(Bt);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(s,t?.popupRedirectResolver)}(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Le(new I("auth-internal",e=>(e=>new xs(e))(an(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),Be(Os,Ps,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(Us)),Be(Os,Ps,"esm2020");var Fs,Bs,js="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e;
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}function n(e,t,n){n||(n=0);const s=Array(16);if("string"==typeof t)for(var r=0;r<16;++r)s[r]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(r=0;r<16;++r)s[r]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],r=e.g[2];let i,o=e.g[3];i=t+(o^n&(r^o))+s[0]+3614090360&4294967295,i=o+(r^(t=n+(i<<7&4294967295|i>>>25))&(n^r))+s[1]+3905402710&4294967295,o=t+(i<<12&4294967295|i>>>20),i=r+(n^o&(t^n))+s[2]+606105819&4294967295,i=n+(t^(r=o+(i<<17&4294967295|i>>>15))&(o^t))+s[3]+3250441966&4294967295,i=t+(o^(n=r+(i<<22&4294967295|i>>>10))&(r^o))+s[4]+4118548399&4294967295,i=o+(r^(t=n+(i<<7&4294967295|i>>>25))&(n^r))+s[5]+1200080426&4294967295,o=t+(i<<12&4294967295|i>>>20),i=r+(n^o&(t^n))+s[6]+2821735955&4294967295,i=n+(t^(r=o+(i<<17&4294967295|i>>>15))&(o^t))+s[7]+4249261313&4294967295,i=t+(o^(n=r+(i<<22&4294967295|i>>>10))&(r^o))+s[8]+1770035416&4294967295,i=o+(r^(t=n+(i<<7&4294967295|i>>>25))&(n^r))+s[9]+2336552879&4294967295,o=t+(i<<12&4294967295|i>>>20),i=r+(n^o&(t^n))+s[10]+4294925233&4294967295,i=n+(t^(r=o+(i<<17&4294967295|i>>>15))&(o^t))+s[11]+2304563134&4294967295,i=t+(o^(n=r+(i<<22&4294967295|i>>>10))&(r^o))+s[12]+1804603682&4294967295,i=o+(r^(t=n+(i<<7&4294967295|i>>>25))&(n^r))+s[13]+4254626195&4294967295,o=t+(i<<12&4294967295|i>>>20),i=r+(n^o&(t^n))+s[14]+2792965006&4294967295,i=n+(t^(r=o+(i<<17&4294967295|i>>>15))&(o^t))+s[15]+1236535329&4294967295,i=t+(r^o&((n=r+(i<<22&4294967295|i>>>10))^r))+s[1]+4129170786&4294967295,i=o+(n^r&((t=n+(i<<5&4294967295|i>>>27))^n))+s[6]+3225465664&4294967295,o=t+(i<<9&4294967295|i>>>23),i=r+(t^n&(o^t))+s[11]+643717713&4294967295,i=n+(o^t&((r=o+(i<<14&4294967295|i>>>18))^o))+s[0]+3921069994&4294967295,i=t+(r^o&((n=r+(i<<20&4294967295|i>>>12))^r))+s[5]+3593408605&4294967295,i=o+(n^r&((t=n+(i<<5&4294967295|i>>>27))^n))+s[10]+38016083&4294967295,o=t+(i<<9&4294967295|i>>>23),i=r+(t^n&(o^t))+s[15]+3634488961&4294967295,i=n+(o^t&((r=o+(i<<14&4294967295|i>>>18))^o))+s[4]+3889429448&4294967295,i=t+(r^o&((n=r+(i<<20&4294967295|i>>>12))^r))+s[9]+568446438&4294967295,i=o+(n^r&((t=n+(i<<5&4294967295|i>>>27))^n))+s[14]+3275163606&4294967295,o=t+(i<<9&4294967295|i>>>23),i=r+(t^n&(o^t))+s[3]+4107603335&4294967295,i=n+(o^t&((r=o+(i<<14&4294967295|i>>>18))^o))+s[8]+1163531501&4294967295,i=t+(r^o&((n=r+(i<<20&4294967295|i>>>12))^r))+s[13]+2850285829&4294967295,i=o+(n^r&((t=n+(i<<5&4294967295|i>>>27))^n))+s[2]+4243563512&4294967295,o=t+(i<<9&4294967295|i>>>23),i=r+(t^n&(o^t))+s[7]+1735328473&4294967295,i=n+(o^t&((r=o+(i<<14&4294967295|i>>>18))^o))+s[12]+2368359562&4294967295,i=t+((n=r+(i<<20&4294967295|i>>>12))^r^o)+s[5]+4294588738&4294967295,i=o+((t=n+(i<<4&4294967295|i>>>28))^n^r)+s[8]+2272392833&4294967295,o=t+(i<<11&4294967295|i>>>21),i=r+(o^t^n)+s[11]+1839030562&4294967295,i=n+((r=o+(i<<16&4294967295|i>>>16))^o^t)+s[14]+4259657740&4294967295,i=t+((n=r+(i<<23&4294967295|i>>>9))^r^o)+s[1]+2763975236&4294967295,i=o+((t=n+(i<<4&4294967295|i>>>28))^n^r)+s[4]+1272893353&4294967295,o=t+(i<<11&4294967295|i>>>21),i=r+(o^t^n)+s[7]+4139469664&4294967295,i=n+((r=o+(i<<16&4294967295|i>>>16))^o^t)+s[10]+3200236656&4294967295,i=t+((n=r+(i<<23&4294967295|i>>>9))^r^o)+s[13]+681279174&4294967295,i=o+((t=n+(i<<4&4294967295|i>>>28))^n^r)+s[0]+3936430074&4294967295,o=t+(i<<11&4294967295|i>>>21),i=r+(o^t^n)+s[3]+3572445317&4294967295,i=n+((r=o+(i<<16&4294967295|i>>>16))^o^t)+s[6]+76029189&4294967295,i=t+((n=r+(i<<23&4294967295|i>>>9))^r^o)+s[9]+3654602809&4294967295,i=o+((t=n+(i<<4&4294967295|i>>>28))^n^r)+s[12]+3873151461&4294967295,o=t+(i<<11&4294967295|i>>>21),i=r+(o^t^n)+s[15]+530742520&4294967295,i=n+((r=o+(i<<16&4294967295|i>>>16))^o^t)+s[2]+3299628645&4294967295,i=t+(r^((n=r+(i<<23&4294967295|i>>>9))|~o))+s[0]+4096336452&4294967295,i=o+(n^((t=n+(i<<6&4294967295|i>>>26))|~r))+s[7]+1126891415&4294967295,o=t+(i<<10&4294967295|i>>>22),i=r+(t^(o|~n))+s[14]+2878612391&4294967295,i=n+(o^((r=o+(i<<15&4294967295|i>>>17))|~t))+s[5]+4237533241&4294967295,i=t+(r^((n=r+(i<<21&4294967295|i>>>11))|~o))+s[12]+1700485571&4294967295,i=o+(n^((t=n+(i<<6&4294967295|i>>>26))|~r))+s[3]+2399980690&4294967295,o=t+(i<<10&4294967295|i>>>22),i=r+(t^(o|~n))+s[10]+4293915773&4294967295,i=n+(o^((r=o+(i<<15&4294967295|i>>>17))|~t))+s[1]+2240044497&4294967295,i=t+(r^((n=r+(i<<21&4294967295|i>>>11))|~o))+s[8]+1873313359&4294967295,i=o+(n^((t=n+(i<<6&4294967295|i>>>26))|~r))+s[15]+4264355552&4294967295,o=t+(i<<10&4294967295|i>>>22),i=r+(t^(o|~n))+s[6]+2734768916&4294967295,i=n+(o^((r=o+(i<<15&4294967295|i>>>17))|~t))+s[13]+1309151649&4294967295,i=t+(r^((n=r+(i<<21&4294967295|i>>>11))|~o))+s[4]+4149444226&4294967295,i=o+(n^((t=n+(i<<6&4294967295|i>>>26))|~r))+s[11]+3174756917&4294967295,o=t+(i<<10&4294967295|i>>>22),i=r+(t^(o|~n))+s[2]+718787259&4294967295,i=n+(o^((r=o+(i<<15&4294967295|i>>>17))|~t))+s[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(r+(i<<21&4294967295|i>>>11))&4294967295,e.g[2]=e.g[2]+r&4294967295,e.g[3]=e.g[3]+o&4294967295}function s(e,t){this.h=t;const n=[];let s=!0;for(let r=e.length-1;r>=0;r--){const i=0|e[r];s&&i==t||(n[r]=i,s=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.F=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.D=function(e,n,s){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return t.prototype[n].apply(e,r)}}(t,function(){this.blockSize=-1}),t.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},t.prototype.v=function(e,t){void 0===t&&(t=e.length);const s=t-this.blockSize,r=this.C;let i=this.h,o=0;for(;o<t;){if(0==i)for(;o<=s;)n(this,e,o),o+=this.blockSize;if("string"==typeof e){for(;o<t;)if(r[i++]=e.charCodeAt(o++),i==this.blockSize){n(this,r),i=0;break}}else for(;o<t;)if(r[i++]=e[o++],i==this.blockSize){n(this,r),i=0;break}}this.h=i,this.o+=t},t.prototype.A=function(){var e=Array((this.h<56?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;t=8*this.o;for(var n=e.length-8;n<e.length;++n)e[n]=255&t,t/=256;for(this.v(e),e=Array(16),t=0,n=0;n<4;++n)for(let s=0;s<32;s+=8)e[t++]=this.g[n]>>>s&255;return e};var r={};function i(e){return-128<=e&&e<128?function(e,t){var n=r;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,function(e){return new s([0|e],e<0?-1:0)}):new s([0|e],e<0?-1:0)}function o(e){if(isNaN(e)||!isFinite(e))return a;if(e<0)return d(o(-e));const t=[];let n=1;for(let s=0;e>=n;s++)t[s]=e/n|0,n*=4294967296;return new s(t,0)}var a=i(0),c=i(1),u=i(16777216);function l(e){if(0!=e.h)return!1;for(let t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function h(e){return-1==e.h}function d(e){const t=e.g.length,n=[];for(let s=0;s<t;s++)n[s]=~e.g[s];return new s(n,~e.h).add(c)}function f(e,t){return e.add(d(t))}function p(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function g(e,t){this.g=e,this.h=t}function m(e,t){if(l(t))throw Error("division by zero");if(l(e))return new g(a,a);if(h(e))return t=m(d(e),t),new g(d(t.g),d(t.h));if(h(t))return t=m(e,d(t)),new g(d(t.g),t.h);if(e.g.length>30){if(h(e)||h(t))throw Error("slowDivide_ only works with positive integers.");for(var n=c,s=t;s.l(e)<=0;)n=y(n),s=y(s);var r=v(n,1),i=v(s,1);for(s=v(s,2),n=v(n,2);!l(s);){var u=i.add(s);u.l(e)<=0&&(r=r.add(n),i=u),s=v(s,1),n=v(n,1)}return t=f(e,r.j(t)),new g(r,t)}for(r=a;e.l(t)>=0;){for(n=Math.max(1,Math.floor(e.m()/t.m())),s=(s=Math.ceil(Math.log(n)/Math.LN2))<=48?1:Math.pow(2,s-48),u=(i=o(n)).j(t);h(u)||u.l(e)>0;)u=(i=o(n-=s)).j(t);l(i)&&(i=c),r=r.add(i),e=f(e,u)}return new g(r,e)}function y(e){const t=e.g.length+1,n=[];for(let s=0;s<t;s++)n[s]=e.i(s)<<1|e.i(s-1)>>>31;return new s(n,e.h)}function v(e,t){const n=t>>5;t%=32;const r=e.g.length-n,i=[];for(let s=0;s<r;s++)i[s]=t>0?e.i(s+n)>>>t|e.i(s+n+1)<<32-t:e.i(s+n);return new s(i,e.h)}(e=s.prototype).m=function(){if(h(this))return-d(this).m();let e=0,t=1;for(let n=0;n<this.g.length;n++){const s=this.i(n);e+=(s>=0?s:4294967296+s)*t,t*=4294967296}return e},e.toString=function(e){if((e=e||10)<2||36<e)throw Error("radix out of range: "+e);if(l(this))return"0";if(h(this))return"-"+d(this).toString(e);const t=o(Math.pow(e,6));var n=this;let s="";for(;;){const r=m(n,t).g;let i=(((n=f(n,r.j(t))).g.length>0?n.g[0]:n.h)>>>0).toString(e);if(l(n=r))return i+s;for(;i.length<6;)i="0"+i;s=i+s}},e.i=function(e){return e<0?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return h(e=f(this,e))?-1:l(e)?0:1},e.abs=function(){return h(this)?d(this):this},e.add=function(e){const t=Math.max(this.g.length,e.g.length),n=[];let r=0;for(let s=0;s<=t;s++){let t=r+(65535&this.i(s))+(65535&e.i(s)),i=(t>>>16)+(this.i(s)>>>16)+(e.i(s)>>>16);r=i>>>16,t&=65535,i&=65535,n[s]=i<<16|t}return new s(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(l(this)||l(e))return a;if(h(this))return h(e)?d(this).j(d(e)):d(d(this).j(e));if(h(e))return d(this.j(d(e)));if(this.l(u)<0&&e.l(u)<0)return o(this.m()*e.m());const t=this.g.length+e.g.length,n=[];for(var r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(let t=0;t<e.g.length;t++){const s=this.i(r)>>>16,i=65535&this.i(r),o=e.i(t)>>>16,a=65535&e.i(t);n[2*r+2*t]+=i*a,p(n,2*r+2*t),n[2*r+2*t+1]+=s*a,p(n,2*r+2*t+1),n[2*r+2*t+1]+=i*o,p(n,2*r+2*t+1),n[2*r+2*t+2]+=s*o,p(n,2*r+2*t+2)}for(e=0;e<t;e++)n[e]=n[2*e+1]<<16|n[2*e];for(e=t;e<2*t;e++)n[e]=0;return new s(n,0)},e.B=function(e){return m(this,e).h},e.and=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let s=0;s<t;s++)n[s]=this.i(s)&e.i(s);return new s(n,this.h&e.h)},e.or=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let s=0;s<t;s++)n[s]=this.i(s)|e.i(s);return new s(n,this.h|e.h)},e.xor=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let s=0;s<t;s++)n[s]=this.i(s)^e.i(s);return new s(n,this.h^e.h)},t.prototype.digest=t.prototype.A,t.prototype.reset=t.prototype.u,t.prototype.update=t.prototype.v,Bs=t,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.B,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=o,s.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if((n=n||10)<2||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return d(e(t.substring(1),n));if(t.indexOf("-")>=0)throw Error('number format error: interior "-" character');const s=o(Math.pow(n,8));let r=a;for(let e=0;e<t.length;e+=8){var i=Math.min(8,t.length-e);const a=parseInt(t.substring(e,e+i),n);i<8?(i=o(Math.pow(n,i)),r=r.j(i).add(o(a))):(r=r.j(s),r=r.add(o(a)))}return r},Fs=s}).apply(void 0!==js?js:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var $s,qs,zs,Hs,Ks,Gs,Ws,Qs,Js="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e,t=Object.defineProperty;var n=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof Js&&Js];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);function s(e,s){if(s)e:{var r=n;e=e.split(".");for(var i=0;i<e.length-1;i++){var o=e[i];if(!(o in r))break e;r=r[o]}(s=s(i=r[e=e[e.length-1]]))!=i&&null!=s&&t(r,e,{configurable:!0,writable:!0,value:s})}}s("Symbol.dispose",function(e){return e||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(e){return e||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(e){return e||function(e){var t,n=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.push([t,e[t]]);return n}});
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var r=r||{},i=this||self;function o(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function a(e,t,n){return e.call.apply(e.bind,arguments)}function c(e,t,n){return(c=a).apply(null,arguments)}function u(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function l(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Ob=function(e,n,s){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return t.prototype[n].apply(e,r)}}var h="undefined"!=typeof AsyncContext&&"function"==typeof AsyncContext.Snapshot?e=>e&&AsyncContext.Snapshot.wrap(e):e=>e;function d(e){const t=e.length;if(t>0){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function f(e,t){for(let t=1;t<arguments.length;t++){const s=arguments[t];var n=typeof s;if("array"==(n="object"!=n?n:s?Array.isArray(s)?"array":n:"null")||"object"==n&&"number"==typeof s.length){n=e.length||0;const t=s.length||0;e.length=n+t;for(let r=0;r<t;r++)e[n+r]=s[r]}else e.push(s)}}function p(e){i.setTimeout(()=>{throw e},0)}function g(){var e=b;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var m=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return this.h>0?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new y,e=>e.reset());class y{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let v,w=!1,b=new class{constructor(){this.h=this.g=null}add(e,t){const n=m.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},_=()=>{const e=Promise.resolve(void 0);v=()=>{e.then(E)}};function E(){for(var e;e=g();){try{e.h.call(e.g)}catch(e){p(e)}var t=m;t.j(e),t.h<100&&(t.h++,e.next=t.g,t.g=e)}w=!1}function T(){this.u=this.u,this.C=this.C}function I(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},I.prototype.h=function(){this.defaultPrevented=!0};var S=function(){if(!i.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};i.addEventListener("test",e,t),i.removeEventListener("test",e,t)}catch(e){}return e}();function C(e){return/^[\s\xa0]*$/.test(e)}function k(e,t){I.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e&&this.init(e,t)}l(k,I),k.prototype.init=function(e,t){const n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;this.target=e.target||e.srcElement,this.g=t,(t=e.relatedTarget)||("mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement)),this.relatedTarget=t,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=e.pointerType,this.state=e.state,this.i=e,e.defaultPrevented&&k.Z.h.call(this)},k.prototype.h=function(){k.Z.h.call(this);const e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var A="closure_listenable_"+(1e6*Math.random()|0),N=0;function D(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=r,this.key=++N,this.da=this.fa=!1}function R(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function L(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function O(e){const t={};for(const n in e)t[n]=e[n];return t}const P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(e,t){let n,s;for(let t=1;t<arguments.length;t++){for(n in s=arguments[t],s)e[n]=s[n];for(let t=0;t<P.length;t++)n=P[t],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function M(e){this.src=e,this.g={},this.h=0}function V(e,t){const n=t.type;if(n in e.g){var s,r=e.g[n],i=Array.prototype.indexOf.call(r,t,void 0);(s=i>=0)&&Array.prototype.splice.call(r,i,1),s&&(R(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function U(e,t,n,s){for(let r=0;r<e.length;++r){const i=e[r];if(!i.da&&i.listener==t&&i.capture==!!n&&i.ha==s)return r}return-1}M.prototype.add=function(e,t,n,s,r){const i=e.toString();(e=this.g[i])||(e=this.g[i]=[],this.h++);const o=U(e,t,s,r);return o>-1?(t=e[o],n||(t.fa=!1)):((t=new D(t,this.src,i,!!s,r)).fa=n,e.push(t)),t};var F="closure_lm_"+(1e6*Math.random()|0),B={};function j(e,t,n,s,r){if(Array.isArray(t)){for(let i=0;i<t.length;i++)j(e,t[i],n,s,r);return null}return n=W(n),e&&e[A]?e.J(t,n,!!o(s)&&!!s.capture,r):function(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");const a=o(r)?!!r.capture:!!r;let c=K(e);if(c||(e[F]=c=new M(e)),n=c.add(t,n,s,a,i),n.proxy)return n;if(s=function(){function e(n){return t.call(e.src,e.listener,n)}const t=H;return e}(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)S||(r=a),void 0===r&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(z(t.toString()),s);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(s)}return n}(e,t,n,!1,s,r)}function $(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)$(e,t[i],n,s,r);else s=o(s)?!!s.capture:!!s,n=W(n),e&&e[A]?(e=e.i,(i=String(t).toString())in e.g&&((n=U(t=e.g[i],n,s,r))>-1&&(R(t[n]),Array.prototype.splice.call(t,n,1),0==t.length&&(delete e.g[i],e.h--)))):e&&(e=K(e))&&(t=e.g[t.toString()],e=-1,t&&(e=U(t,n,s,r)),(n=e>-1?t[e]:null)&&q(n))}function q(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[A])V(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(z(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=K(t))?(V(n,e),0==n.h&&(n.src=null,t[F]=null)):R(e)}}}function z(e){return e in B?B[e]:B[e]="on"+e}function H(e,t){if(e.da)e=!0;else{t=new k(t,this);const n=e.listener,s=e.ha||e.src;e.fa&&q(e),e=n.call(s,t)}return e}function K(e){return(e=e[F])instanceof M?e:null}var G="__closure_events_fn_"+(1e9*Math.random()>>>0);function W(e){return"function"==typeof e?e:(e[G]||(e[G]=function(t){return e.handleEvent(t)}),e[G])}function Q(){T.call(this),this.i=new M(this),this.M=this,this.G=null}function J(e,t){var n,s=e.G;if(s)for(n=[];s;s=s.G)n.push(s);if(e=e.M,s=t.type||t,"string"==typeof t)t=new I(t,e);else if(t instanceof I)t.target=t.target||e;else{var r=t;x(t=new I(s,e),r)}let i,o;if(r=!0,n)for(o=n.length-1;o>=0;o--)i=t.g=n[o],r=X(i,s,!0,t)&&r;if(i=t.g=e,r=X(i,s,!0,t)&&r,r=X(i,s,!1,t)&&r,n)for(o=0;o<n.length;o++)i=t.g=n[o],r=X(i,s,!1,t)&&r}function X(e,t,n,s){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();let r=!0;for(let i=0;i<t.length;++i){const o=t[i];if(o&&!o.da&&o.capture==n){const t=o.listener,n=o.ha||o.src;o.fa&&V(e.i,o),r=!1!==t.call(n,s)&&r}}return r&&!s.defaultPrevented}function Y(e){e.g=function(e,t){if("function"!=typeof e){if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=c(e.handleEvent,e)}return Number(t)>2147483647?-1:i.setTimeout(e,t||0)}(()=>{e.g=null,e.i&&(e.i=!1,Y(e))},e.l);const t=e.h;e.h=null,e.m.apply(null,t)}l(Q,T),Q.prototype[A]=!0,Q.prototype.removeEventListener=function(e,t,n,s){$(this,e,t,n,s)},Q.prototype.N=function(){if(Q.Z.N.call(this),this.i){var e=this.i;for(const t in e.g){const n=e.g[t];for(let e=0;e<n.length;e++)R(n[e]);delete e.g[t],e.h--}}this.G=null},Q.prototype.J=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)},Q.prototype.K=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};class Z extends T{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:Y(this)}N(){super.N(),this.g&&(i.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ee(e){T.call(this),this.h=e,this.g={}}l(ee,T);var te=[];function ne(e){L(e.g,function(e,t){this.g.hasOwnProperty(t)&&q(e)},e),e.g={}}ee.prototype.N=function(){ee.Z.N.call(this),ne(this)},ee.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var se=i.JSON.stringify,re=i.JSON.parse,ie=class{stringify(e){return i.JSON.stringify(e,void 0)}parse(e){return i.JSON.parse(e,void 0)}};function oe(){}function ae(){}var ce={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ue(){I.call(this,"d")}function le(){I.call(this,"c")}l(ue,I),l(le,I);var he={},de=null;function fe(){return de=de||new Q}function pe(e){I.call(this,he.Ia,e)}function ge(e){const t=fe();J(t,new pe(t))}function me(e,t){I.call(this,he.STAT_EVENT,e),this.stat=t}function ye(e){const t=fe();J(t,new me(t,e))}function ve(e,t){I.call(this,he.Ja,e),this.size=t}function we(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return i.setTimeout(function(){e()},t)}function be(){this.g=!0}function _e(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{const i=JSON.parse(t);if(i)for(e=0;e<i.length;e++)if(Array.isArray(i[e])){var n=i[e];if(!(n.length<2)){var s=n[1];if(Array.isArray(s)&&!(s.length<1)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(let e=1;e<s.length;e++)s[e]=""}}}return se(i)}catch(e){return t}}(e,n)+(s?" "+s:"")})}he.Ia="serverreachability",l(pe,I),he.STAT_EVENT="statevent",l(me,I),he.Ja="timingevent",l(ve,I),be.prototype.ua=function(){this.g=!1},be.prototype.info=function(){};var Ee,Te={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ie={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"};function Se(){}function Ce(e){return encodeURIComponent(String(e))}function ke(e){var t=1;e=e.split(":");const n=[];for(;t>0&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Ae(e,t,n,s){this.j=e,this.i=t,this.l=n,this.S=s||1,this.V=new ee(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ne}function Ne(){this.i=null,this.g="",this.h=!1}l(Se,oe),Se.prototype.g=function(){return new XMLHttpRequest},Ee=new Se;var De={},Re={};function Le(e,t,n){e.M=1,e.A=st(Ye(t)),e.u=n,e.R=!0,Oe(e,null)}function Oe(e,t){e.F=Date.now(),Me(e),e.B=Ye(e.A);var n=e.B,s=e.S;Array.isArray(s)||(s=[String(s)]),yt(n.i,"t",s),e.C=0,n=e.j.L,e.h=new Ne,e.g=sn(e.j,n?t:null,!e.u),e.P>0&&(e.O=new Z(c(e.Y,e,e.g),e.P)),t=e.V,n=e.g,s=e.ba;var r="readystatechange";Array.isArray(r)||(r&&(te[0]=r.toString()),r=te);for(let e=0;e<r.length;e++){const i=j(n,r[e],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}t=e.J?O(e.J):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.B,e.v,e.u,t)):(e.v="GET",e.g.ea(e.B,e.v,null,t)),ge(),function(e,t,n,s,r,i){e.info(function(){if(e.g)if(i){var o="",a=i.split("&");for(let e=0;e<a.length;e++){var c=a[e].split("=");if(c.length>1){const e=c[0];c=c[1];const t=e.split("_");o=t.length>=2&&"type"==t[1]?o+(e+"=")+c+"&":o+(e+"=redacted&")}}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+"\n"+n+"\n"+o})}(e.i,e.v,e.B,e.l,e.S,e.u)}function Pe(e){return!!e.g&&("GET"==e.v&&2!=e.M&&e.j.Aa)}function xe(e,t){var n=e.C,s=t.indexOf("\n",n);return-1==s?Re:(n=Number(t.substring(n,s)),isNaN(n)?De:(s+=1)+n>t.length?Re:(t=t.slice(s,s+n),e.C=s+n,t))}function Me(e){e.T=Date.now()+e.H,Ve(e,e.H)}function Ve(e,t){if(null!=e.D)throw Error("WatchDog timer not null");e.D=we(c(e.aa,e),t)}function Ue(e){e.D&&(i.clearTimeout(e.D),e.D=null)}function Fe(e){0==e.j.I||e.K||Yt(e.j,e)}function Be(e){Ue(e);var t=e.O;t&&"function"==typeof t.dispose&&t.dispose(),e.O=null,ne(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.dispose())}function je(e,t){try{var n=e.j;if(0!=n.I&&(n.g==e||Ke(n.h,e)))if(!e.L&&Ke(n.h,e)&&3==n.I){try{var s=n.Ba.g.parse(t)}catch(e){s=null}if(Array.isArray(s)&&3==s.length){var r=s;if(0==r[0]){e:if(!n.v){if(n.g){if(!(n.g.F+3e3<e.F))break e;Xt(n),jt(n)}Wt(n),ye(18)}}else n.xa=r[1],0<n.xa-n.K&&r[2]<37500&&n.F&&0==n.A&&!n.C&&(n.C=we(c(n.Va,n),6e3));He(n.h)<=1&&n.ta&&(n.ta=void 0)}else en(n,11)}else if((e.L||n.g==e)&&Xt(n),!C(t))for(r=n.Ba.g.parse(t),t=0;t<r.length;t++){let c=r[t];const l=c[0];if(!(l<=n.K))if(n.K=l,c=c[1],2==n.I)if("c"==c[0]){n.M=c[1],n.ba=c[2];const t=c[3];null!=t&&(n.ka=t,n.j.info("VER="+n.ka));const r=c[4];null!=r&&(n.za=r,n.j.info("SVER="+n.za));const l=c[5];null!=l&&"number"==typeof l&&l>0&&(s=1.5*l,n.O=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var i=s.h;i.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(Ge(i,i.h),i.h=null))}if(s.G){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(s.wa=e,nt(s.J,s.G,e))}}n.I=3,n.l&&n.l.ra(),n.aa&&(n.T=Date.now()-e.F,n.j.info("Handshake RTT: "+n.T+"ms"));var o=e;if((s=n).na=nn(s,s.L?s.ba:null,s.W),o.L){We(s.h,o);var a=o,u=s.O;u&&(a.H=u),a.D&&(Ue(a),Me(a)),s.g=o}else Gt(s);n.i.length>0&&qt(n)}else"stop"!=c[0]&&"close"!=c[0]||en(n,7);else 3==n.I&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?en(n,7):Bt(n):"noop"!=c[0]&&n.l&&n.l.qa(c),n.A=0)}ge()}catch(e){}}Ae.prototype.ba=function(e){e=e.target;const t=this.O;t&&3==Mt(e)?t.j():this.Y(e)},Ae.prototype.Y=function(e){try{if(e==this.g)e:{const c=Mt(this.g),u=this.g.ya();this.g.ca();if(!(c<3)&&(3!=c||this.g&&(this.h.h||this.g.la()||Vt(this.g)))){this.K||4!=c||7==u||ge(),Ue(this);var t=this.g.ca();this.X=t;var n=function(e){if(!Pe(e))return e.g.la();const t=Vt(e.g);if(""===t)return"";let n="";const s=t.length,r=4==Mt(e.g);if(!e.h.i){if("undefined"==typeof TextDecoder)return Be(e),Fe(e),"";e.h.i=new i.TextDecoder}for(let i=0;i<s;i++)e.h.h=!0,n+=e.h.i.decode(t[i],{stream:!(r&&i==s-1)});return t.length=0,e.h.g+=n,e.C=0,e.h.g}(this);if(this.o=200==t,function(e,t,n,s,r,i,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+"\n"+n+"\n"+i+" "+o})}(this.i,this.v,this.B,this.l,this.S,c,t),this.o){if(this.U&&!this.L){t:{if(this.g){var s,r=this.g;if((s=r.g?r.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(s)){var o=s;break t}}o=null}if(!(e=o)){this.o=!1,this.m=3,ye(12),Be(this),Fe(this);break e}_e(this.i,this.l,e,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,je(this,e)}if(this.R){let t;for(e=!0;!this.K&&this.C<n.length;){if(t=xe(this,n),t==Re){4==c&&(this.m=4,ye(14),e=!1),_e(this.i,this.l,null,"[Incomplete Response]");break}if(t==De){this.m=4,ye(15),_e(this.i,this.l,n,"[Invalid Chunk]"),e=!1;break}_e(this.i,this.l,t,null),je(this,t)}if(Pe(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=c||0!=n.length||this.h.h||(this.m=1,ye(16),e=!1),this.o=this.o&&e,e){if(n.length>0&&!this.W){this.W=!0;var a=this.j;a.g==this&&a.aa&&!a.P&&(a.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Qt(a),a.P=!0,ye(11))}}else _e(this.i,this.l,n,"[Invalid Chunked Response]"),Be(this),Fe(this)}else _e(this.i,this.l,n,null),je(this,n);4==c&&Be(this),this.o&&!this.K&&(4==c?Yt(this.j,this):(this.o=!1,Me(this)))}else(function(e){const t={};e=(e.g&&Mt(e)>=2&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let s=0;s<e.length;s++){if(C(e[s]))continue;var n=ke(e[s]);const r=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const i=t[r]||[];t[r]=i,i.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,function(e){return e.join(", ")})})(this.g),400==t&&n.indexOf("Unknown SID")>0?(this.m=3,ye(12)):(this.m=0,ye(13)),Be(this),Fe(this)}}}catch(e){}},Ae.prototype.cancel=function(){this.K=!0,Be(this)},Ae.prototype.aa=function(){this.D=null;const e=Date.now();e-this.T>=0?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.B),2!=this.M&&(ge(),ye(17)),Be(this),this.m=2,Fe(this)):Ve(this,this.T-e)};var $e=class{constructor(e,t){this.g=e,this.map=t}};function qe(e){this.l=e||10,i.PerformanceNavigationTiming?e=(e=i.performance.getEntriesByType("navigation")).length>0&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(i.chrome&&i.chrome.loadTimes&&i.chrome.loadTimes()&&i.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ze(e){return!!e.h||!!e.g&&e.g.size>=e.j}function He(e){return e.h?1:e.g?e.g.size:0}function Ke(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Ge(e,t){e.g?e.g.add(t):e.h=t}function We(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Qe(e){if(null!=e.h)return e.i.concat(e.h.G);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.G);return t}return d(e.i)}qe.prototype.cancel=function(){if(this.i=Qe(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var Je=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xe(e){let t;this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1,e instanceof Xe?(this.l=e.l,Ze(this,e.j),this.o=e.o,this.g=e.g,et(this,e.u),this.h=e.h,tt(this,vt(e.i)),this.m=e.m):e&&(t=String(e).match(Je))?(this.l=!1,Ze(this,t[1]||"",!0),this.o=rt(t[2]||""),this.g=rt(t[3]||"",!0),et(this,t[4]),this.h=rt(t[5]||"",!0),tt(this,t[6]||"",!0),this.m=rt(t[7]||"")):(this.l=!1,this.i=new dt(null,this.l))}function Ye(e){return new Xe(e)}function Ze(e,t,n){e.j=n?rt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function et(e,t){if(t){if(t=Number(t),isNaN(t)||t<0)throw Error("Bad port number "+t);e.u=t}else e.u=null}function tt(e,t,n){t instanceof dt?(e.i=t,function(e,t){t&&!e.j&&(ft(e),e.i=null,e.g.forEach(function(e,t){const n=t.toLowerCase();t!=n&&(pt(this,t),yt(this,n,e))},e)),e.j=t}(e.i,e.l)):(n||(t=it(t,lt)),e.i=new dt(t,e.l))}function nt(e,t,n){e.i.set(t,n)}function st(e){return nt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function rt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function it(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,ot),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ot(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Xe.prototype.toString=function(){const e=[];var t=this.j;t&&e.push(it(t,at,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(it(t,at,!0),"@"),e.push(Ce(n).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.u)&&e.push(":",String(n))),(n=this.h)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(it(n,"/"==n.charAt(0)?ut:ct,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",it(n,ht)),e.join("")},Xe.prototype.resolve=function(e){const t=Ye(this);let n=!!e.j;n?Ze(t,e.j):n=!!e.o,n?t.o=e.o:n=!!e.g,n?t.g=e.g:n=null!=e.u;var s=e.h;if(n)et(t,e.u);else if(n=!!e.h){if("/"!=s.charAt(0))if(this.g&&!this.h)s="/"+s;else{var r=t.h.lastIndexOf("/");-1!=r&&(s=t.h.slice(0,r+1)+s)}if(".."==(r=s)||"."==r)s="";else if(-1!=r.indexOf("./")||-1!=r.indexOf("/.")){s=0==r.lastIndexOf("/",0),r=r.split("/");const e=[];for(let t=0;t<r.length;){const n=r[t++];"."==n?s&&t==r.length&&e.push(""):".."==n?((e.length>1||1==e.length&&""!=e[0])&&e.pop(),s&&t==r.length&&e.push("")):(e.push(n),s=!0)}s=e.join("/")}else s=r}return n?t.h=s:n=""!==e.i.toString(),n?tt(t,vt(e.i)):n=!!e.m,n&&(t.m=e.m),t};var at=/[#\/\?@]/g,ct=/[#\?:]/g,ut=/[#\?]/g,lt=/[#\?@]/g,ht=/#/g;function dt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ft(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(let n=0;n<e.length;n++){const s=e[n].indexOf("=");let r,i=null;s>=0?(r=e[n].substring(0,s),i=e[n].substring(s+1)):r=e[n],t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function pt(e,t){ft(e),t=wt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function gt(e,t){return ft(e),t=wt(e,t),e.g.has(t)}function mt(e,t){ft(e);let n=[];if("string"==typeof t)gt(e,t)&&(n=n.concat(e.g.get(wt(e,t))));else for(e=Array.from(e.g.values()),t=0;t<e.length;t++)n=n.concat(e[t]);return n}function yt(e,t,n){pt(e,t),n.length>0&&(e.i=null,e.g.set(wt(e,t),d(n)),e.h+=n.length)}function vt(e){const t=new dt;return t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),t}function wt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function bt(e,t,n,s,r){try{r&&(r.onload=null,r.onerror=null,r.onabort=null,r.ontimeout=null),s(n)}catch(e){}}function _t(){this.g=new ie}function Et(e){this.i=e.Sb||null,this.h=e.ab||!1}function Tt(e,t){Q.call(this),this.H=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}function It(e){e.j.read().then(e.Ma.bind(e)).catch(e.ga.bind(e))}function St(e){e.readyState=4,e.l=null,e.j=null,e.B=null,Ct(e)}function Ct(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function kt(e){let t="";return L(e,function(e,n){t+=n,t+=":",t+=e,t+="\r\n"}),t}function At(e,t,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=kt(n),"string"==typeof e?null!=n&&Ce(n):nt(e,t,n))}function Nt(e){Q.call(this),this.headers=new Map,this.L=e||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}(e=dt.prototype).add=function(e,t){ft(this),this.i=null,e=wt(this,e);let n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){ft(this),this.g.forEach(function(n,s){n.forEach(function(n){e.call(t,n,s,this)},this)},this)},e.set=function(e,t){return ft(this),this.i=null,gt(this,e=wt(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e&&(e=mt(this,e)).length>0?String(e[0]):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(let s=0;s<t.length;s++){var n=t[s];const r=Ce(n);n=mt(this,n);for(let t=0;t<n.length;t++){let s=r;""!==n[t]&&(s+="="+Ce(n[t])),e.push(s)}}return this.i=e.join("&")},l(Et,oe),Et.prototype.g=function(){return new Tt(this.i,this.h)},l(Tt,Q),(e=Tt.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.F=e,this.D=t,this.readyState=1,Ct(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const t={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};e&&(t.body=e),(this.H||i).fetch(new Request(this.D,t)).then(this.Pa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&4!=this.readyState&&(this.g=!1,St(this)),this.readyState=0},e.Pa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ct(this)),this.g&&(this.readyState=3,Ct(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(void 0!==i.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;It(this)}else e.text().then(this.Oa.bind(this),this.ga.bind(this))},e.Ma=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.B.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?St(this):Ct(this),3==this.readyState&&It(this)}},e.Oa=function(e){this.g&&(this.response=this.responseText=e,St(this))},e.Na=function(e){this.g&&(this.response=e,St(this))},e.ga=function(){this.g&&St(this)},e.setRequestHeader=function(e,t){this.A.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Tt.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),l(Nt,Q);var Dt=/^https?$/i,Rt=["POST","PUT"];function Lt(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.o=5,Ot(e),xt(e)}function Ot(e){e.A||(e.A=!0,J(e,"complete"),J(e,"error"))}function Pt(e){if(e.h&&void 0!==r)if(e.v&&4==Mt(e))setTimeout(e.Ca.bind(e),0);else if(J(e,"readystatechange"),4==Mt(e)){e.h=!1;try{const r=e.ca();e:switch(r){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var s;if(s=0===r){let t=String(e.D).match(Je)[1]||null;!t&&i.self&&i.self.location&&(t=i.self.location.protocol.slice(0,-1)),s=!Dt.test(t?t.toLowerCase():"")}n=s}if(n)J(e,"complete"),J(e,"success");else{e.o=6;try{var o=Mt(e)>2?e.g.statusText:""}catch(e){o=""}e.l=o+" ["+e.ca()+"]",Ot(e)}}finally{xt(e)}}}function xt(e,t){if(e.g){e.m&&(clearTimeout(e.m),e.m=null);const n=e.g;e.g=null,t||J(e,"ready");try{n.onreadystatechange=null}catch(e){}}}function Mt(e){return e.g?e.g.readyState:0}function Vt(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.F){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Ut(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Ft(e){this.za=0,this.i=[],this.j=new be,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ut("failFast",!1,e),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ut("baseRetryDelayMs",5e3,e),this.Za=Ut("retryDelaySeedMs",1e4,e),this.Ta=Ut("forwardChannelMaxRetries",2,e),this.va=Ut("forwardChannelRequestTimeoutMs",2e4,e),this.ma=e&&e.xmlHttpFactory||void 0,this.Ua=e&&e.Rb||void 0,this.Aa=e&&e.useFetchStreams||!1,this.O=void 0,this.L=e&&e.supportsCrossDomainXhr||!1,this.M="",this.h=new qe(e&&e.concurrentRequestLimit),this.Ba=new _t,this.S=e&&e.fastHandshake||!1,this.R=e&&e.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=e&&e.Pb||!1,e&&e.ua&&this.j.ua(),e&&e.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&e&&e.detectBufferingProxy||!1,this.ia=void 0,e&&e.longPollingTimeout&&e.longPollingTimeout>0&&(this.ia=e.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}function Bt(e){if($t(e),3==e.I){var t=e.V++,n=Ye(e.J);if(nt(n,"SID",e.M),nt(n,"RID",t),nt(n,"TYPE","terminate"),Ht(e,n),(t=new Ae(e,e.j,t)).M=2,t.A=st(Ye(n)),n=!1,i.navigator&&i.navigator.sendBeacon)try{n=i.navigator.sendBeacon(t.A.toString(),"")}catch(e){}!n&&i.Image&&((new Image).src=t.A,n=!0),n||(t.g=sn(t.j,null),t.g.ea(t.A)),t.F=Date.now(),Me(t)}tn(e)}function jt(e){e.g&&(Qt(e),e.g.cancel(),e.g=null)}function $t(e){jt(e),e.v&&(i.clearTimeout(e.v),e.v=null),Xt(e),e.h.cancel(),e.m&&("number"==typeof e.m&&i.clearTimeout(e.m),e.m=null)}function qt(e){if(!ze(e.h)&&!e.m){e.m=!0;var t=e.Ea;v||_(),w||(v(),w=!0),b.add(t,e),e.D=0}}function zt(e,t){var n;n=t?t.l:e.V++;const s=Ye(e.J);nt(s,"SID",e.M),nt(s,"RID",n),nt(s,"AID",e.K),Ht(e,s),e.u&&e.o&&At(s,e.u,e.o),n=new Ae(e,e.j,n,e.D+1),null===e.u&&(n.J=e.o),t&&(e.i=t.G.concat(e.i)),t=Kt(e,n,1e3),n.H=Math.round(.5*e.va)+Math.round(.5*e.va*Math.random()),Ge(e.h,n),Le(n,s,t)}function Ht(e,t){e.H&&L(e.H,function(e,n){nt(t,n,e)}),e.l&&L({},function(e,n){nt(t,n,e)})}function Kt(e,t,n){n=Math.min(e.i.length,n);const s=e.l?c(e.l.Ka,e.l,e):null;e:{var r=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?n>0?(t=r[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let c=!0;for(let u=0;u<n;u++){var i=r[u].g;const n=r[u].map;if((i-=t)<0)t=Math.max(0,r[u].g-100),c=!1;else try{i="req"+i+"_"||"";try{var a=n instanceof Map?n:Object.entries(n);for(const[t,n]of a){let s=n;o(n)&&(s=se(n)),e.push(i+t+"="+encodeURIComponent(s))}}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}catch(e){s&&s(n)}}if(c){a=e.join("&");break e}}a=void 0}return e=e.i.splice(0,n),t.G=e,a}function Gt(e){if(!e.g&&!e.v){e.Y=1;var t=e.Da;v||_(),w||(v(),w=!0),b.add(t,e),e.A=0}}function Wt(e){return!(e.g||e.v||e.A>=3)&&(e.Y++,e.v=we(c(e.Da,e),Zt(e,e.A)),e.A++,!0)}function Qt(e){null!=e.B&&(i.clearTimeout(e.B),e.B=null)}function Jt(e){e.g=new Ae(e,e.j,"rpc",e.Y),null===e.u&&(e.g.J=e.o),e.g.P=0;var t=Ye(e.na);nt(t,"RID","rpc"),nt(t,"SID",e.M),nt(t,"AID",e.K),nt(t,"CI",e.F?"0":"1"),!e.F&&e.ia&&nt(t,"TO",e.ia),nt(t,"TYPE","xmlhttp"),Ht(e,t),e.u&&e.o&&At(t,e.u,e.o),e.O&&(e.g.H=e.O);var n=e.g;e=e.ba,n.M=1,n.A=st(Ye(t)),n.u=null,n.R=!0,Oe(n,e)}function Xt(e){null!=e.C&&(i.clearTimeout(e.C),e.C=null)}function Yt(e,t){var n=null;if(e.g==t){Xt(e),Qt(e),e.g=null;var s=2}else{if(!Ke(e.h,t))return;n=t.G,We(e.h,t),s=1}if(0!=e.I)if(t.o)if(1==s){n=t.u?t.u.length:0,t=Date.now()-t.F;var r=e.D;J(s=fe(),new ve(s,n)),qt(e)}else Gt(e);else if(3==(r=t.m)||0==r&&t.X>0||!(1==s&&function(e,t){return!(He(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.G.concat(e.i),0):1==e.I||2==e.I||e.D>=(e.Sa?0:e.Ta)||(e.m=we(c(e.Ea,e,t),Zt(e,e.D)),e.D++,0)))}(e,t)||2==s&&Wt(e)))switch(n&&n.length>0&&(t=e.h,t.i=t.i.concat(n)),r){case 1:en(e,5);break;case 4:en(e,10);break;case 3:en(e,6);break;default:en(e,2)}}function Zt(e,t){let n=e.Qa+Math.floor(Math.random()*e.Za);return e.isActive()||(n*=2),n*t}function en(e,t){if(e.j.info("Error code "+t),2==t){var n=c(e.bb,e),s=e.Ua;const t=!s;s=new Xe(s||"//www.google.com/images/cleardot.gif"),i.location&&"http"==i.location.protocol||Ze(s,"https"),st(s),t?function(e,t){const n=new be;if(i.Image){const s=new Image;s.onload=u(bt,n,"TestLoadImage: loaded",!0,t,s),s.onerror=u(bt,n,"TestLoadImage: error",!1,t,s),s.onabort=u(bt,n,"TestLoadImage: abort",!1,t,s),s.ontimeout=u(bt,n,"TestLoadImage: timeout",!1,t,s),i.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}(s.toString(),n):function(e,t){new be;const n=new AbortController,s=setTimeout(()=>{n.abort(),bt(0,0,!1,t)},1e4);fetch(e,{signal:n.signal}).then(e=>{clearTimeout(s),e.ok?bt(0,0,!0,t):bt(0,0,!1,t)}).catch(()=>{clearTimeout(s),bt(0,0,!1,t)})}(s.toString(),n)}else ye(2);e.I=0,e.l&&e.l.pa(t),tn(e),$t(e)}function tn(e){if(e.I=0,e.ja=[],e.l){const t=Qe(e.h);0==t.length&&0==e.i.length||(f(e.ja,t),f(e.ja,e.i),e.h.i.length=0,d(e.i),e.i.length=0),e.l.oa()}}function nn(e,t,n){var s=n instanceof Xe?Ye(n):new Xe(n);if(""!=s.g)t&&(s.g=t+"."+s.g),et(s,s.u);else{var r=i.location;s=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;const e=new Xe(null);s&&Ze(e,s),t&&(e.g=t),r&&et(e,r),n&&(e.h=n),s=e}return n=e.G,t=e.wa,n&&t&&nt(s,n,t),nt(s,"VER",e.ka),Ht(e,s),s}function sn(e,t,n){if(t&&!e.L)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Aa&&!e.ma?new Nt(new Et({ab:n})):new Nt(e.ma)).Fa(e.L),t}function rn(){}function on(){}function an(e,t){Q.call(this),this.g=new Ft(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.sa&&(e?e["X-WebChannel-Client-Profile"]=t.sa:e={"X-WebChannel-Client-Profile":t.sa}),this.g.U=e,(e=t&&t.Qb)&&!C(e)&&(this.g.u=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!C(t)&&(this.g.G=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new ln(this)}function cn(e){ue.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function un(){le.call(this),this.status=1}function ln(e){this.g=e}(e=Nt.prototype).Fa=function(e){this.H=e},e.ea=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ee.g(),this.g.onreadystatechange=h(c(this.Ca,this));try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(e){return void Lt(this,e)}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else{if("function"!=typeof s.keys||"function"!=typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const e of s.keys())n.set(e,s.get(e))}s=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),r=i.FormData&&e instanceof i.FormData,!(Array.prototype.indexOf.call(Rt,t,void 0)>=0)||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(e),this.v=!1}catch(e){Lt(this,e)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=e||7,J(this,"complete"),J(this,"abort"),xt(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xt(this,!0)),Nt.Z.N.call(this)},e.Ca=function(){this.u||(this.B||this.v||this.j?Pt(this):this.Xa())},e.Xa=function(){Pt(this)},e.isActive=function(){return!!this.g},e.ca=function(){try{return Mt(this)>2?this.g.status:-1}catch(e){return-1}},e.la=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},e.La=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),re(t)}},e.ya=function(){return this.o},e.Ha=function(){return"string"==typeof this.l?this.l:String(this.l)},(e=Ft.prototype).ka=8,e.I=1,e.connect=function(e,t,n,s){ye(0),this.W=e,this.H=t||{},n&&void 0!==s&&(this.H.OSID=n,this.H.OAID=s),this.F=this.X,this.J=nn(this,null,this.W),qt(this)},e.Ea=function(e){if(this.m)if(this.m=null,1==this.I){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const r=new Ae(this,this.j,e);let i=this.o;if(this.U&&(i?(i=O(i),x(i,this.U)):i=this.U),null!==this.u||this.R||(r.J=i,i=null),this.S)e:{for(var t=0,n=0;n<this.i.length;n++){var s=this.i[n];if(void 0===(s="__data__"in s.map&&"string"==typeof(s=s.map.__data__)?s.length:void 0))break;if((t+=s)>4096){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Kt(this,r,t),nt(n=Ye(this.J),"RID",e),nt(n,"CVER",22),this.G&&nt(n,"X-HTTP-Session-Id",this.G),Ht(this,n),i&&(this.R?t="headers="+Ce(kt(i))+"&"+t:this.u&&At(n,this.u,i)),Ge(this.h,r),this.Ra&&nt(n,"TYPE","init"),this.S?(nt(n,"$req",t),nt(n,"SID","null"),r.U=!0,Le(r,n,null)):Le(r,n,t),this.I=2}}else 3==this.I&&(e?zt(this,e):0==this.i.length||ze(this.h)||zt(this))},e.Da=function(){if(this.v=null,Jt(this),this.aa&&!(this.P||null==this.g||this.T<=0)){var e=4*this.T;this.j.info("BP detection timer enabled: "+e),this.B=we(c(this.Wa,this),e)}},e.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ye(10),jt(this),Jt(this))},e.Va=function(){null!=this.C&&(this.C=null,jt(this),Wt(this),ye(19))},e.bb=function(e){e?(this.j.info("Successfully pinged google.com"),ye(2)):(this.j.info("Failed to ping google.com"),ye(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},(e=rn.prototype).ra=function(){},e.qa=function(){},e.pa=function(){},e.oa=function(){},e.isActive=function(){return!0},e.Ka=function(){},on.prototype.g=function(e,t){return new an(e,t)},l(an,Q),an.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},an.prototype.close=function(){Bt(this.g)},an.prototype.o=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=se(e),e=n);t.i.push(new $e(t.Ya++,e)),3==t.I&&qt(t)},an.prototype.N=function(){this.g.l=null,delete this.j,Bt(this.g),delete this.g,an.Z.N.call(this)},l(cn,ue),l(un,le),l(ln,rn),ln.prototype.ra=function(){J(this.g,"a")},ln.prototype.qa=function(e){J(this.g,new cn(e))},ln.prototype.pa=function(e){J(this.g,new un)},ln.prototype.oa=function(){J(this.g,"b")},on.prototype.createWebChannel=on.prototype.g,an.prototype.send=an.prototype.o,an.prototype.open=an.prototype.m,an.prototype.close=an.prototype.close,Qs=function(){return new on},Ws=function(){return fe()},Gs=he,Ks={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Te.NO_ERROR=0,Te.TIMEOUT=8,Te.HTTP_ERROR=6,Hs=Te,Ie.COMPLETE="complete",zs=Ie,ae.EventType=ce,ce.OPEN="a",ce.CLOSE="b",ce.ERROR="c",ce.MESSAGE="d",Q.prototype.listen=Q.prototype.J,qs=ae,Nt.prototype.listenOnce=Nt.prototype.K,Nt.prototype.getLastError=Nt.prototype.Ha,Nt.prototype.getLastErrorCode=Nt.prototype.ya,Nt.prototype.getStatus=Nt.prototype.ca,Nt.prototype.getResponseJson=Nt.prototype.La,Nt.prototype.getResponseText=Nt.prototype.la,Nt.prototype.send=Nt.prototype.ea,Nt.prototype.setWithCredentials=Nt.prototype.Fa,$s=Nt}).apply(void 0!==Js?Js:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xs{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xs.UNAUTHENTICATED=new Xs(null),Xs.GOOGLE_CREDENTIALS=new Xs("google-credentials-uid"),Xs.FIRST_PARTY=new Xs("first-party-uid"),Xs.MOCK_USER=new Xs("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ys="12.14.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zs=new O("@firebase/firestore");function er(){return Zs.logLevel}function tr(e,...t){if(Zs.logLevel<=A.DEBUG){const n=t.map(rr);Zs.debug(`Firestore (${Ys}): ${e}`,...n)}}function nr(e,...t){if(Zs.logLevel<=A.ERROR){const n=t.map(rr);Zs.error(`Firestore (${Ys}): ${e}`,...n)}}function sr(e,...t){if(Zs.logLevel<=A.WARN){const n=t.map(rr);Zs.warn(`Firestore (${Ys}): ${e}`,...n)}}function rr(e){if("string"==typeof e)return e;try{return function(e){return JSON.stringify(e)}(e)}catch(t){return e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(e,t,n){let s="Unexpected state";"string"==typeof t?s=t:n=t,or(e,s,n)}function or(e,t,n){let s=`FIRESTORE (${Ys}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(void 0!==n)try{s+=" CONTEXT: "+JSON.stringify(n)}catch(e){s+=" CONTEXT: "+n}throw nr(s),new Error(s)}function ar(e,t,n,s){let r="Unexpected state";"string"==typeof n?r=n:s=n,e||or(t,r,s)}function cr(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class lr extends f{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Xs.UNAUTHENTICATED))}shutdown(){}}class pr{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class gr{constructor(e){this.t=e,this.currentUser=Xs.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ar(void 0===this.o,42304);let n=this.i;const s=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let r=new hr;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new hr,e.enqueueRetryable(()=>s(this.currentUser))};const i=()=>{const t=r;e.enqueueRetryable(async()=>{await t.promise,await s(this.currentUser)})},o=e=>{tr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),i())};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(tr("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new hr)}},0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(tr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(ar("string"==typeof t.accessToken,31837,{l:t}),new dr(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ar(null===e||"string"==typeof e,2055,{h:e}),new Xs(e)}}class mr{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=Xs.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class yr{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new mr(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Xs.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wr{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Pe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ar(void 0===this.o,3512);const n=e=>{null!=e.error&&tr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.m;return this.m=e.token,tr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};const s=e=>{tr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(e=>s(e)),setTimeout(()=>{if(!this.appCheck){const e=this.V.getImmediate({optional:!0});e?s(e):tr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new vr(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(ar("string"==typeof e.token,44558,{tokenResult:e}),this.m=e.token,new vr(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{static newId(){const e=62*Math.floor(256/62);let t="";for(;t.length<20;){const n=br(40);for(let s=0;s<n.length;++s)t.length<20&&n[s]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[s]%62))}return t}}function Er(e,t){return e<t?-1:e>t?1:0}function Tr(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const n=e.charAt(s),r=t.charAt(s);if(n!==r)return Cr(n)===Cr(r)?Er(n,r):Cr(n)?1:-1}return Er(e.length,t.length)}const Ir=55296,Sr=57343;function Cr(e){const t=e.charCodeAt(0);return t>=Ir&&t<=Sr}function kr(e,t,n){return e.length===t.length&&e.every((e,s)=>n(e,t[s]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar="__name__";class Nr{constructor(e,t,n){void 0===t?t=0:t>e.length&&ir(637,{offset:t,range:e.length}),void 0===n?n=e.length-t:n>e.length-t&&ir(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Nr.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Nr?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const n=Nr.compareSegments(e.get(s),t.get(s));if(0!==n)return n}return Er(e.length,t.length)}static compareSegments(e,t){const n=Nr.isNumericId(e),s=Nr.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?Nr.extractNumericId(e).compare(Nr.extractNumericId(t)):Tr(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Fs.fromString(e.substring(4,e.length-2))}}class Dr extends Nr{construct(e,t,n){return new Dr(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new lr(ur.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new Dr(t)}static emptyPath(){return new Dr([])}}const Rr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Lr extends Nr{construct(e,t,n){return new Lr(e,t,n)}static isValidIdentifier(e){return Rr.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Lr.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===Ar}static keyField(){return new Lr([Ar])}static fromServerFormat(e){const t=[];let n="",s=0;const r=()=>{if(0===n.length)throw new lr(ur.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let i=!1;for(;s<e.length;){const t=e[s];if("\\"===t){if(s+1===e.length)throw new lr(ur.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[s+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new lr(ur.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,s+=2}else"`"===t?(i=!i,s++):"."!==t||i?(n+=t,s++):(r(),s++)}if(r(),i)throw new lr(ur.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Lr(t)}static emptyPath(){return new Lr([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e){this.path=e}static fromPath(e){return new Or(Dr.fromString(e))}static fromName(e){return new Or(Dr.fromString(e).popFirst(5))}static empty(){return new Or(Dr.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Dr.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Dr.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Or(new Dr(e.slice()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(e){if(!Or.isDocumentKey(e))throw new lr(ur.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function xr(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}function Mr(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":ir(12329,{type:typeof e})}function Vr(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new lr(ur.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mr(e);throw new lr(ur.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(e,t){const n={typeString:e};return t&&(n.value=t),n}function Fr(e,t){if(!xr(e))throw new lr(ur.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in t)if(t[s]){const r=t[s].typeString,i="value"in t[s]?{value:t[s].value}:void 0;if(!(s in e)){n=`JSON missing required field: '${s}'`;break}const o=e[s];if(r&&typeof o!==r){n=`JSON field '${s}' must be a ${r}.`;break}if(void 0!==i&&o!==i.value){n=`Expected '${s}' field to equal '${i.value}'`;break}}if(n)throw new lr(ur.INVALID_ARGUMENT,n);return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=-62135596800,jr=1e6;class $r{static now(){return $r.fromMillis(Date.now())}static fromDate(e){return $r.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*jr);return new $r(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new lr(ur.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new lr(ur.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Br)throw new lr(ur.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new lr(ur.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/jr}_compareTo(e){return this.seconds===e.seconds?Er(this.nanoseconds,e.nanoseconds):Er(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:$r._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Fr(e,$r._jsonSchema))return new $r(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Br;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}$r._jsonSchemaVersion="firestore/timestamp/1.0",$r._jsonSchema={type:Ur("string",$r._jsonSchemaVersion),seconds:Ur("number"),nanoseconds:Ur("number")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qr{static fromTimestamp(e){return new qr(e)}static min(){return new qr(new $r(0,0))}static max(){return new qr(new $r(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(e){return new Hr(e.readTime,e.key,-1)}class Hr{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Hr(qr.min(),Or.empty(),-1)}static max(){return new Hr(qr.max(),Or.empty(),-1)}}function Kr(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Or.comparator(e.documentKey,t.documentKey),0!==n?n:Er(e.largestBatchId,t.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}class Gr{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wr(e){if(e.code!==ur.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;tr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ir(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Qr((n,s)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,s)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Qr?t:Qr.resolve(t)}catch(e){return Qr.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Qr.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Qr.reject(t)}static resolve(e){return new Qr((t,n)=>{t(e)})}static reject(e){return new Qr((t,n)=>{n(e)})}static waitFor(e){return new Qr((t,n)=>{let s=0,r=0,i=!1;e.forEach(e=>{++s,e.next(()=>{++r,i&&r===s&&t()},e=>n(e))}),i=!0,r===s&&t()})}static or(e){let t=Qr.resolve(!1);for(const n of e)t=t.next(e=>e?Qr.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,s)=>{n.push(t.call(this,e,s))}),this.waitFor(n)}static mapArray(e,t){return new Qr((n,s)=>{const r=e.length,i=new Array(r);let o=0;for(let a=0;a<r;a++){const c=a;t(e[c]).next(e=>{i[c]=e,++o,o===r&&n(i)},e=>s(e))}})}static doWhile(e,t){return new Qr((n,s)=>{const r=()=>{!0===e()?t().next(()=>{r()},s):n()};r()})}}function Jr(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ae(e),this.ue=e=>t.writeSequenceNumber(e))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Xr.ce=-1;function Yr(e){return null==e}function Zr(e){return 0===e&&1/e==-1/0}function ei(e,t){let n=t;const s=e.length;for(let t=0;t<s;t++){const s=e.charAt(t);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function ti(e){return e+""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function si(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ri(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t){this.comparator=e,this.root=t||ai.EMPTY}insert(e,t){return new ii(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ai.BLACK,null,null))}remove(e){return new ii(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ai.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(0===s)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new oi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new oi(this.root,e,this.comparator,!1)}getReverseIterator(){return new oi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new oi(this.root,e,this.comparator,!0)}}class oi{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ai{constructor(e,t,n,s,r){this.key=e,this.value=t,this.color=null!=n?n:ai.RED,this.left=null!=s?s:ai.EMPTY,this.right=null!=r?r:ai.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,r){return new ai(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const r=n(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,n),null):0===r?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ai.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===t(e,s.key)){if(s.right.isEmpty())return ai.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ai.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ai.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ir(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ir(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ir(27949);return e+(this.isRed()?0:1)}}ai.EMPTY=null,ai.RED=!0,ai.BLACK=!1,ai.EMPTY=new class{constructor(){this.size=0}get key(){throw ir(57766)}get value(){throw ir(16141)}get color(){throw ir(16727)}get left(){throw ir(29726)}get right(){throw ir(36894)}copy(e,t,n,s,r){return this}insert(e,t,n){return new ai(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ci{constructor(e){this.comparator=e,this.data=new ii(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ui(this.data.getIterator())}getIteratorFrom(e){return new ui(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof ci))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,s=n.getNext().key;if(0!==this.comparator(e,s))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ci(this.comparator);return t.data=e,t}}class ui{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e){this.fields=e,e.sort(Lr.comparator)}static empty(){return new li([])}unionWith(e){let t=new ci(Lr.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new li(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return kr(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new hi("Invalid base64 string: "+e):e}}(e);return new di(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new di(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Er(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}di.EMPTY_BYTE_STRING=new di("");const fi=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pi(e){if(ar(!!e,39018),"string"==typeof e){let t=0;const n=fi.exec(e);if(ar(!!n,46558,{timestamp:e}),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:gi(e.seconds),nanos:gi(e.nanos)}}function gi(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function mi(e){return"string"==typeof e?di.fromBase64String(e):di.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi="server_timestamp",vi="__type__",wi="__previous_value__",bi="__local_write_time__";function _i(e){const t=(e?.mapValue?.fields||{})[vi]?.stringValue;return t===yi}function Ei(e){const t=e.mapValue.fields[wi];return _i(t)?Ei(t):t}function Ti(e){const t=pi(e.mapValue.fields[bi].timestampValue);return new $r(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,t,n,s,r,i,o,a,c,u,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=r,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c,this.isUsingEmulator=u,this.apiKey=l}}const Si="(default)";class Ci{constructor(e,t){this.projectId=e,this.database=t||Si}static empty(){return new Ci("","")}get isDefaultDatabase(){return this.database===Si}isEqual(e){return e instanceof Ci&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ki="__type__",Ai="__max__",Ni={},Di="__vector__",Ri="value";function Li(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?_i(e)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===Ai}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)?9007199254740991:function(e){const t=(e?.mapValue?.fields||{})[ki]?.stringValue;return t===Di}(e)?10:11:ir(28295,{value:e})}function Oi(e,t){if(e===t)return!0;const n=Li(e);if(n!==Li(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ti(e).isEqual(Ti(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=pi(e.timestampValue),s=pi(t.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return mi(e.bytesValue).isEqual(mi(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return gi(e.geoPointValue.latitude)===gi(t.geoPointValue.latitude)&&gi(e.geoPointValue.longitude)===gi(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return gi(e.integerValue)===gi(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=gi(e.doubleValue),s=gi(t.doubleValue);return n===s?Zr(n)===Zr(s):isNaN(n)&&isNaN(s)}return!1}(e,t);case 9:return kr(e.arrayValue.values||[],t.arrayValue.values||[],Oi);case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},s=t.mapValue.fields||{};if(ni(n)!==ni(s))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===s[e]||!Oi(n[e],s[e])))return!1;return!0}(e,t);default:return ir(52216,{left:e})}}function Pi(e,t){return void 0!==(e.values||[]).find(e=>Oi(e,t))}function xi(e,t){if(e===t)return 0;const n=Li(e),s=Li(t);if(n!==s)return Er(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Er(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=gi(e.integerValue||e.doubleValue),s=gi(t.integerValue||t.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(e,t);case 3:return Mi(e.timestampValue,t.timestampValue);case 4:return Mi(Ti(e),Ti(t));case 5:return Tr(e.stringValue,t.stringValue);case 6:return function(e,t){const n=mi(e),s=mi(t);return n.compareTo(s)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),s=t.split("/");for(let e=0;e<n.length&&e<s.length;e++){const t=Er(n[e],s[e]);if(0!==t)return t}return Er(n.length,s.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Er(gi(e.latitude),gi(t.latitude));return 0!==n?n:Er(gi(e.longitude),gi(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return Vi(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},s=t.fields||{},r=n[Ri]?.arrayValue,i=s[Ri]?.arrayValue,o=Er(r?.values?.length||0,i?.values?.length||0);return 0!==o?o:Vi(r,i)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===Ni&&t===Ni)return 0;if(e===Ni)return 1;if(t===Ni)return-1;const n=e.fields||{},s=Object.keys(n),r=t.fields||{},i=Object.keys(r);s.sort(),i.sort();for(let e=0;e<s.length&&e<i.length;++e){const t=Tr(s[e],i[e]);if(0!==t)return t;const o=xi(n[s[e]],r[i[e]]);if(0!==o)return o}return Er(s.length,i.length)}(e.mapValue,t.mapValue);default:throw ir(23264,{he:n})}}function Mi(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Er(e,t);const n=pi(e),s=pi(t),r=Er(n.seconds,s.seconds);return 0!==r?r:Er(n.nanos,s.nanos)}function Vi(e,t){const n=e.values||[],s=t.values||[];for(let e=0;e<n.length&&e<s.length;++e){const t=xi(n[e],s[e]);if(t)return t}return Er(n.length,s.length)}function Ui(e){return Fi(e)}function Fi(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=pi(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return mi(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return Or.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const s of e.values||[])n?n=!1:t+=",",t+=Fi(s);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",s=!0;for(const r of t)s?s=!1:n+=",",n+=`${r}:${Fi(e.fields[r])}`;return n+"}"}(e.mapValue):ir(61005,{value:e})}function Bi(e){switch(Li(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Ei(e);return t?16+Bi(t):16;case 5:return 2*e.stringValue.length;case 6:return mi(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return function(e){return(e.values||[]).reduce((e,t)=>e+Bi(t),0)}(e.arrayValue);case 10:case 11:return function(e){let t=0;return si(e.fields,(e,n)=>{t+=e.length+Bi(n)}),t}(e.mapValue);default:throw ir(13486,{value:e})}}function ji(e){return!!e&&"integerValue"in e}function $i(e){return ji(e)||function(e){return!!e&&"doubleValue"in e}(e)}function qi(e){return!!e&&"arrayValue"in e}function zi(e){return!!e&&"nullValue"in e}function Hi(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ki(e){return!!e&&"mapValue"in e}function Gi(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:{...e.timestampValue}};if(e.mapValue){const t={mapValue:{fields:{}}};return si(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Gi(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Gi(e.arrayValue.values[n]);return t}return{...e}}class Wi{constructor(e){this.value=e}static empty(){return new Wi({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Ki(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gi(t)}setAll(e){let t=Lr.emptyPath(),n={},s=[];e.forEach((e,r)=>{if(!t.isImmediateParentOf(r)){const e=this.getFieldsMap(t);this.applyChanges(e,n,s),n={},s=[],t=r.popLast()}e?n[r.lastSegment()]=Gi(e):s.push(r.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,n,s)}delete(e){const t=this.field(e.popLast());Ki(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Oi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];Ki(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){si(t,(t,n)=>e[t]=n);for(const t of n)delete e[t]}clone(){return new Wi(Gi(this.value))}}function Qi(e){const t=[];return si(e.fields,(e,n)=>{const s=new Lr([e]);if(Ki(n)){const e=Qi(n.mapValue).fields;if(0===e.length)t.push(s);else for(const n of e)t.push(s.child(n))}else t.push(s)}),new li(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ji{constructor(e,t,n,s,r,i,o){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Ji(e,0,qr.min(),qr.min(),qr.min(),Wi.empty(),0)}static newFoundDocument(e,t,n,s){return new Ji(e,1,t,qr.min(),n,s,0)}static newNoDocument(e,t){return new Ji(e,2,t,qr.min(),qr.min(),Wi.empty(),0)}static newUnknownDocument(e,t){return new Ji(e,3,t,qr.min(),qr.min(),Wi.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(qr.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Wi.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Wi.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=qr.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Ji&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ji(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,t){this.position=e,this.inclusive=t}}function Yi(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(s=i.field.isKeyField()?Or.comparator(Or.fromName(o.referenceValue),n.key):xi(o,n.data.field(i.field)),"desc"===i.dir&&(s*=-1),0!==s)break}return s}function Zi(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Oi(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,t="asc"){this.field=e,this.dir=t}}function to(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{}class so extends no{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new lo(e,t,n):"array-contains"===t?new go(e,n):"in"===t?new mo(e,n):"not-in"===t?new yo(e,n):"array-contains-any"===t?new vo(e,n):new so(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new ho(e,n):new fo(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&void 0===t.nullValue&&this.matchesComparison(xi(t,this.value)):null!==t&&Li(this.value)===Li(t)&&this.matchesComparison(xi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return ir(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ro extends no{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ro(e,t)}matches(e){return io(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.Pe||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function io(e){return"and"===e.op}function oo(e){return function(e){for(const t of e.filters)if(t instanceof ro)return!1;return!0}(e)&&io(e)}function ao(e){if(e instanceof so)return e.field.canonicalString()+e.op.toString()+Ui(e.value);if(oo(e))return e.filters.map(e=>ao(e)).join(",");{const t=e.filters.map(e=>ao(e)).join(",");return`${e.op}(${t})`}}function co(e,t){return e instanceof so?function(e,t){return t instanceof so&&e.op===t.op&&e.field.isEqual(t.field)&&Oi(e.value,t.value)}(e,t):e instanceof ro?function(e,t){return t instanceof ro&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((e,n,s)=>e&&co(n,t.filters[s]),!0)}(e,t):void ir(19439)}function uo(e){return e instanceof so?function(e){return`${e.field.canonicalString()} ${e.op} ${Ui(e.value)}`}(e):e instanceof ro?function(e){return e.op.toString()+" {"+e.getFilters().map(uo).join(" ,")+"}"}(e):"Filter"}class lo extends so{constructor(e,t,n){super(e,t,n),this.key=Or.fromName(n.referenceValue)}matches(e){const t=Or.comparator(e.key,this.key);return this.matchesComparison(t)}}class ho extends so{constructor(e,t){super(e,"in",t),this.keys=po("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class fo extends so{constructor(e,t){super(e,"not-in",t),this.keys=po("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function po(e,t){return(t.arrayValue?.values||[]).map(e=>Or.fromName(e.referenceValue))}class go extends so{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return qi(t)&&Pi(t.arrayValue,this.value)}}class mo extends so{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Pi(this.value.arrayValue,t)}}class yo extends so{constructor(e,t){super(e,"not-in",t)}matches(e){if(Pi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&void 0===t.nullValue&&!Pi(this.value.arrayValue,t)}}class vo extends so{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!qi(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>Pi(this.value.arrayValue,e))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,t=null,n=[],s=[],r=null,i=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=r,this.startAt=i,this.endAt=o,this.Te=null}}function bo(e,t=null,n=[],s=[],r=null,i=null,o=null){return new wo(e,t,n,s,r,i,o)}function _o(e){const t=cr(e);if(null===t.Te){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>ao(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>function(e){return e.field.canonicalString()+e.dir}(e)).join(","),Yr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>Ui(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>Ui(e)).join(",")),t.Te=e}return t.Te}function Eo(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!to(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!co(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Zi(e.startAt,t.startAt)&&Zi(e.endAt,t.endAt)}function To(e){return Or.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,t=null,n=[],s=[],r=null,i="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=r,this.limitType=i,this.startAt=o,this.endAt=a,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function So(e){return new Io(e)}function Co(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function ko(e){const t=cr(e);if(null===t.Ie){t.Ie=[];const e=new Set;for(const n of t.explicitOrderBy)t.Ie.push(n),e.add(n.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc",s=function(e){let t=new ci(Lr.comparator);return e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t}(t);s.forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.Ie.push(new eo(s,n))}),e.has(Lr.keyField().canonicalString())||t.Ie.push(new eo(Lr.keyField(),n))}return t.Ie}function Ao(e){const t=cr(e);return t.Ee||(t.Ee=function(e,t){if("F"===e.limitType)return bo(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{const t="desc"===e.dir?"asc":"desc";return new eo(e.field,t)});const n=e.endAt?new Xi(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Xi(e.startAt.position,e.startAt.inclusive):null;return bo(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}}(t,ko(e))),t.Ee}function No(e,t,n){return new Io(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Do(e,t){return Eo(Ao(e),Ao(t))&&e.limitType===t.limitType}function Ro(e){return`${_o(Ao(e))}|lt:${e.limitType}`}function Lo(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>uo(e)).join(", ")}]`),Yr(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>Ui(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>Ui(e)).join(",")),`Target(${t})`}(Ao(e))}; limitType=${e.limitType})`}function Oo(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Or.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of ko(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const s=Yi(e,t,n);return e.inclusive?s<=0:s<0}(e.startAt,ko(e),t))&&!(e.endAt&&!function(e,t,n){const s=Yi(e,t,n);return e.inclusive?s>=0:s>0}(e.endAt,ko(e),t))}(e,t)}function Po(e){return(t,n)=>{let s=!1;for(const r of ko(e)){const e=xo(r,t,n);if(0!==e)return e;s=s||r.field.isKeyField()}return 0}}function xo(e,t,n){const s=e.field.isKeyField()?Or.comparator(t.key,n.key):function(e,t,n){const s=t.data.field(e),r=n.data.field(e);return null!==s&&null!==r?xi(s,r):ir(42886)}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return ir(19790,{direction:e.dir})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,s]of n)if(this.equalsFn(t,e))return s}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(void 0===s)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],e))return void(s[n]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return 1===n.length?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){si(this.inner,(t,n)=>{for(const[t,s]of n)e(t,s)})}isEmpty(){return ri(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=new ii(Or.comparator);function Uo(){return Vo}const Fo=new ii(Or.comparator);function Bo(...e){let t=Fo;for(const n of e)t=t.insert(n.key,n);return t}function jo(e){let t=Fo;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function $o(){return zo()}function qo(){return zo()}function zo(){return new Mo(e=>e.toString(),(e,t)=>e.isEqual(t))}const Ho=new ii(Or.comparator),Ko=new ci(Or.comparator);function Go(...e){let t=Ko;for(const n of e)t=t.add(n);return t}const Wo=new ci(Er);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qo(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zr(t)?"-0":t}}function Jo(e){return{integerValue:""+e}}function Xo(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!Zr(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)?Jo(t):Qo(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(){this._=void 0}}function Zo(e,t,n){return e instanceof na?function(e,t){const n={fields:{[vi]:{stringValue:yi},[bi]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&_i(t)&&(t=Ei(t)),t&&(n.fields[wi]=t),{mapValue:n}}(n,t):e instanceof sa?ra(e,t):e instanceof ia?oa(e,t):e instanceof ca?function(e,t){const n=ta(e,t),s=da(n)+da(e.Ae);return ji(n)&&ji(e.Ae)?Jo(s):Qo(e.serializer,s)}(e,t):e instanceof ua?function(e,t){return ha(e,t,Math.min)}(e,t):e instanceof la?function(e,t){return ha(e,t,Math.max)}(e,t):void 0}function ea(e,t,n){return e instanceof sa?ra(e,t):e instanceof ia?oa(e,t):n}function ta(e,t){return e instanceof ca?$i(t)?t:{integerValue:0}:null}class na extends Yo{}class sa extends Yo{constructor(e){super(),this.elements=e}}function ra(e,t){const n=fa(t);for(const t of e.elements)n.some(e=>Oi(e,t))||n.push(t);return{arrayValue:{values:n}}}class ia extends Yo{constructor(e){super(),this.elements=e}}function oa(e,t){let n=fa(t);for(const t of e.elements)n=n.filter(e=>!Oi(e,t));return{arrayValue:{values:n}}}class aa extends Yo{constructor(e,t){super(),this.serializer=e,this.Ae=t}}class ca extends aa{}class ua extends aa{}class la extends aa{}function ha(e,t,n){if(!$i(t))return e.Ae;const s=n(da(t),da(e.Ae));return ji(t)&&ji(e.Ae)?Jo(s):Qo(e.serializer,s)}function da(e){return gi(e.integerValue||e.doubleValue)}function fa(e){return qi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class pa{constructor(e,t){this.version=e,this.transformResults=t}}class ga{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ga}static exists(e){return new ga(void 0,e)}static updateTime(e){return new ga(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ma(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class ya{}function va(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Aa(e.key,ga.none()):new Ta(e.key,e.data,ga.none());{const n=e.data,s=Wi.empty();let r=new ci(Lr.comparator);for(let e of t.fields)if(!r.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?s.delete(e):s.set(e,t),r=r.add(e)}return new Ia(e.key,s,new li(r.toArray()),ga.none())}}function wa(e,t,n){e instanceof Ta?function(e,t,n){const s=e.value.clone(),r=Ca(e.fieldTransforms,t,n.transformResults);s.setAll(r),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):e instanceof Ia?function(e,t,n){if(!ma(e.precondition,t))return void t.convertToUnknownDocument(n.version);const s=Ca(e.fieldTransforms,t,n.transformResults),r=t.data;r.setAll(Sa(e)),r.setAll(s),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function ba(e,t,n,s){return e instanceof Ta?function(e,t,n,s){if(!ma(e.precondition,t))return n;const r=e.value.clone(),i=ka(e.fieldTransforms,s,t);return r.setAll(i),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null}(e,t,n,s):e instanceof Ia?function(e,t,n,s){if(!ma(e.precondition,t))return n;const r=ka(e.fieldTransforms,s,t),i=t.data;return i.setAll(Sa(e)),i.setAll(r),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,s):function(e,t,n){return ma(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function _a(e,t){let n=null;for(const s of e.fieldTransforms){const e=t.data.field(s.field),r=ta(s.transform,e||null);null!=r&&(null===n&&(n=Wi.empty()),n.set(s.field,r))}return n||null}function Ea(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&kr(e,t,(e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof sa&&t instanceof sa||e instanceof ia&&t instanceof ia?kr(e.elements,t.elements,Oi):e instanceof ca&&t instanceof ca||e instanceof ua&&t instanceof ua||e instanceof la&&t instanceof la?Oi(e.Ae,t.Ae):e instanceof na&&t instanceof na}(e.transform,t.transform)}(e,t))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Ta extends ya{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ia extends ya{constructor(e,t,n,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Sa(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Ca(e,t,n){const s=new Map;ar(e.length===n.length,32656,{Ve:n.length,de:e.length});for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,ea(o,a,n[r]))}return s}function ka(e,t,n){const s=new Map;for(const r of e){const e=r.transform,i=n.data.field(r.field);s.set(r.field,Zo(e,i,t))}return s}class Aa extends ya{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Na extends ya{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const s=this.mutations[t];s.key.isEqual(e.key)&&wa(s,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=ba(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=ba(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=qo();return this.mutations.forEach(s=>{const r=e.get(s.key),i=r.overlayedDocument;let o=this.applyToLocalView(i,r.mutatedFields);o=t.has(s.key)?null:o;const a=va(i,o);null!==a&&n.set(s.key,a),i.isValidDocument()||i.convertToNoDocument(qr.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Go())}isEqual(e){return this.batchId===e.batchId&&kr(this.mutations,e.mutations,(e,t)=>Ea(e,t))&&kr(this.baseMutations,e.baseMutations,(e,t)=>Ea(e,t))}}class Ra{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){ar(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let s=Ho;const r=e.mutations;for(let e=0;e<r.length;e++)s=s.insert(r[e].key,n[e].version);return new Ra(e,t,n,s)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pa,xa;function Ma(e){if(void 0===e)return nr("GRPC error has no .code"),ur.UNKNOWN;switch(e){case Pa.OK:return ur.OK;case Pa.CANCELLED:return ur.CANCELLED;case Pa.UNKNOWN:return ur.UNKNOWN;case Pa.DEADLINE_EXCEEDED:return ur.DEADLINE_EXCEEDED;case Pa.RESOURCE_EXHAUSTED:return ur.RESOURCE_EXHAUSTED;case Pa.INTERNAL:return ur.INTERNAL;case Pa.UNAVAILABLE:return ur.UNAVAILABLE;case Pa.UNAUTHENTICATED:return ur.UNAUTHENTICATED;case Pa.INVALID_ARGUMENT:return ur.INVALID_ARGUMENT;case Pa.NOT_FOUND:return ur.NOT_FOUND;case Pa.ALREADY_EXISTS:return ur.ALREADY_EXISTS;case Pa.PERMISSION_DENIED:return ur.PERMISSION_DENIED;case Pa.FAILED_PRECONDITION:return ur.FAILED_PRECONDITION;case Pa.ABORTED:return ur.ABORTED;case Pa.OUT_OF_RANGE:return ur.OUT_OF_RANGE;case Pa.UNIMPLEMENTED:return ur.UNIMPLEMENTED;case Pa.DATA_LOSS:return ur.DATA_LOSS;default:return ir(39323,{code:e})}}(xa=Pa||(Pa={}))[xa.OK=0]="OK",xa[xa.CANCELLED=1]="CANCELLED",xa[xa.UNKNOWN=2]="UNKNOWN",xa[xa.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xa[xa.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xa[xa.NOT_FOUND=5]="NOT_FOUND",xa[xa.ALREADY_EXISTS=6]="ALREADY_EXISTS",xa[xa.PERMISSION_DENIED=7]="PERMISSION_DENIED",xa[xa.UNAUTHENTICATED=16]="UNAUTHENTICATED",xa[xa.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xa[xa.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xa[xa.ABORTED=10]="ABORTED",xa[xa.OUT_OF_RANGE=11]="OUT_OF_RANGE",xa[xa.UNIMPLEMENTED=12]="UNIMPLEMENTED",xa[xa.INTERNAL=13]="INTERNAL",xa[xa.UNAVAILABLE=14]="UNAVAILABLE",xa[xa.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Va=new Fs([4294967295,4294967295],0);function Ua(e){const t=(new TextEncoder).encode(e),n=new Bs;return n.update(t),new Uint8Array(n.digest())}function Fa(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),r=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Fs([n,s],0),new Fs([r,i],0)]}class Ba{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new ja(`Invalid padding: ${t}`);if(n<0)throw new ja(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new ja(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new ja(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Fs.fromNumber(this.ge)}ye(e,t,n){let s=e.add(t.multiply(Fs.fromNumber(n)));return 1===s.compare(Va)&&(s=new Fs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.ge)return!1;const t=Ua(e),[n,s]=Fa(t);for(let e=0;e<this.hashCount;e++){const t=this.ye(n,s,e);if(!this.we(t))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),i=new Ba(r,s,t);return n.forEach(e=>i.insert(e)),i}insert(e){if(0===this.ge)return;const t=Ua(e),[n,s]=Fa(t);for(let e=0;e<this.hashCount;e++){const t=this.ye(n,s,e);this.Se(t)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class ja extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,t,n,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,qa.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new $a(qr.min(),s,new ii(Er),Uo(),Go())}}class qa{constructor(e,t,n,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new qa(n,t,Go(),Go(),Go())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,t,n,s){this.be=e,this.removedTargetIds=t,this.key=n,this.De=s}}class Ha{constructor(e,t){this.targetId=e,this.Ce=t}}class Ka{constructor(e,t,n=di.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class Ga{constructor(e){this.targetId=e,this.ve=0,this.Fe=Xa(),this.Me=di.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return 0!==this.ve}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Go(),t=Go(),n=Go();return this.Fe.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:ir(38017,{changeType:r})}}),new qa(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=Xa()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ar(this.ve>=0,3241,{ve:this.ve,targetId:this.targetId})}Qe(){this.Oe=!0,this.xe=!0}}const Wa="WatchChangeAggregator";class Qa{constructor(e){this.Ge=e,this.ze=new Map,this.je=Uo(),this.Je=Ja(),this.He=Ja(),this.Ze=new ii(Er)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const n=this.ze.get(t);if(n)switch(e.state){case 0:this.nt(t)&&n.Le(e.resumeToken);break;case 1:n.We(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.We(),n.Ne||this.removeTarget(t);break;case 3:this.nt(t)&&(n.Qe(),n.Le(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),n.Le(e.resumeToken));break;default:ir(56790,{state:e.state})}else tr(Wa,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((e,n)=>{this.nt(n)&&t(n)})}it(e){const t=e.targetId,n=e.Ce.count,s=this.st(t);if(s){const r=s.target;if(To(r))if(0===n){const e=new Or(r.path);this.et(t,e,Ji.newNoDocument(e,qr.min()))}else ar(1===n,20013,{expectedCount:n});else{const s=this.ot(t);if(s!==n){const n=this._t(e),r=n?this.ut(n,e,s):1;if(0!==r){this.rt(t);const e=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,e)}}}}}_t(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:r=0}=t;let i,o;try{i=mi(n).toUint8Array()}catch(e){if(e instanceof hi)return sr("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{o=new Ba(i,s,r)}catch(e){return sr(e instanceof ja?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===o.ge?null:o}ut(e,t,n){return t.Ce.count===n-this.ht(e,t.targetId)?0:2}ht(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let s=0;return n.forEach(n=>{const r=this.Ge.lt(),i=`projects/${r.projectId}/databases/${r.database}/documents/${n.path.canonicalString()}`;e.mightContain(i)||(this.et(t,n,null),s++)}),s}Pt(e){const t=new Map;this.ze.forEach((n,s)=>{const r=this.st(s);if(r){if(n.current&&To(r.target)){const t=new Or(r.target.path);this.Tt(t).has(s)||this.It(s,t)||this.et(s,t,Ji.newNoDocument(t,e))}n.Be&&(t.set(s,n.ke()),n.qe())}});let n=Go();this.He.forEach((e,t)=>{let s=!0;t.forEachWhile(e=>{const t=this.st(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(s=!1,!1)}),s&&(n=n.add(e))}),this.je.forEach((t,n)=>n.setReadTime(e));const s=new $a(e,t,this.Ze,this.je,n);return this.je=Uo(),this.Je=Ja(),this.He=Ja(),this.Ze=new ii(Er),s}Ye(e,t){const n=this.ze.get(e);if(!n||!this.nt(e))return void tr(Wa,`addDocumentToTarget received document for unknown inactive target (${e})`);const s=this.It(e,t.key)?2:0;n.Ke(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Tt(t.key).add(e)),this.He=this.He.insert(t.key,this.Et(t.key).add(e))}et(e,t,n){const s=this.ze.get(e);s&&this.nt(e)?(this.It(e,t)?s.Ke(t,1):s.Ue(t),this.He=this.He.insert(t,this.Et(t).delete(e)),this.He=this.He.insert(t,this.Et(t).add(e)),n&&(this.je=this.je.insert(t,n))):tr(Wa,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.ze.delete(e)}ot(e){const t=this.ze.get(e);if(!t)return 0;const n=t.ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){let t=this.ze.get(e);t||(tr(Wa,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new Ga(e),this.ze.set(e,t)),t.$e()}Et(e){let t=this.He.get(e);return t||(t=new ci(Er),this.He=this.He.insert(e,t)),t}Tt(e){let t=this.Je.get(e);return t||(t=new ci(Er),this.Je=this.Je.insert(e,t)),t}nt(e){const t=null!==this.st(e);return t||tr(Wa,"Detected inactive target",e),t}st(e){const t=this.ze.get(e);return void 0===t||t.Ne?null:this.Ge.Rt(e)}rt(e){this.ze.set(e,new Ga(e)),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Ja(){return new ii(Or.comparator)}function Xa(){return new ii(Or.comparator)}const Ya={asc:"ASCENDING",desc:"DESCENDING"},Za={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ec={and:"AND",or:"OR"};class tc{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function nc(e,t){return e.useProto3Json||Yr(t)?t:{value:t}}function sc(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function rc(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function ic(e,t){return sc(e,t.toTimestamp())}function oc(e){return ar(!!e,49232),qr.fromTimestamp(function(e){const t=pi(e);return new $r(t.seconds,t.nanos)}(e))}function ac(e,t){return cc(e,t).canonicalString()}function cc(e,t){const n=function(e){return new Dr(["projects",e.projectId,"databases",e.database])}(e).child("documents");return void 0===t?n:n.child(t)}function uc(e){const t=Dr.fromString(e);return ar(kc(t),10190,{key:t.toString()}),t}function lc(e,t){return ac(e.databaseId,t.path)}function hc(e,t){const n=uc(t);if(n.get(1)!==e.databaseId.projectId)throw new lr(ur.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new lr(ur.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Or(pc(n))}function dc(e,t){return ac(e.databaseId,t)}function fc(e){return new Dr(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function pc(e){return ar(e.length>4&&"documents"===e.get(4),29091,{key:e.toString()}),e.popFirst(5)}function gc(e,t,n){return{name:lc(e,t),fields:n.value.mapValue.fields}}function mc(e,t){return{documents:[dc(e,t.path)]}}function yc(e,t){const n={structuredQuery:{}},s=t.path;let r;null!==t.collectionGroup?(r=s,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(r=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=dc(e,r);const i=function(e){if(0!==e.length)return Sc(ro.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const o=function(e){if(0!==e.length)return e.map(e=>function(e){return{field:Tc(e.field),direction:bc(e.dir)}}(e))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=nc(e,t.limit);return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{dt:n,parent:r}}function vc(e){let t=function(e){const t=uc(e);return 4===t.length?Dr.emptyPath():pc(t)}(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ar(1===s,65062);const e=n.from[0];e.allDescendants?r=e.collectionId:t=t.child(e.collectionId)}let i=[];n.where&&(i=function(e){const t=wc(e);return t instanceof ro&&oo(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=function(e){return e.map(e=>function(e){return new eo(Ic(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))}(n.orderBy));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Yr(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Xi(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Xi(n,t)}(n.endAt)),function(e,t,n,s,r,i,o,a){return new Io(e,t,n,s,r,i,o,a)}(t,r,o,i,a,"F",c,u)}function wc(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ic(e.unaryFilter.field);return so.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Ic(e.unaryFilter.field);return so.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ic(e.unaryFilter.field);return so.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ic(e.unaryFilter.field);return so.create(r,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ir(61313);default:return ir(60726)}}(e):void 0!==e.fieldFilter?function(e){return so.create(Ic(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ir(58110);default:return ir(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return ro.create(e.compositeFilter.filters.map(e=>wc(e)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return ir(1026)}}(e.compositeFilter.op))}(e):ir(30097,{filter:e})}function bc(e){return Ya[e]}function _c(e){return Za[e]}function Ec(e){return ec[e]}function Tc(e){return{fieldPath:e.canonicalString()}}function Ic(e){return Lr.fromServerFormat(e.fieldPath)}function Sc(e){return e instanceof so?function(e){if("=="===e.op){if(Hi(e.value))return{unaryFilter:{field:Tc(e.field),op:"IS_NAN"}};if(zi(e.value))return{unaryFilter:{field:Tc(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Hi(e.value))return{unaryFilter:{field:Tc(e.field),op:"IS_NOT_NAN"}};if(zi(e.value))return{unaryFilter:{field:Tc(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Tc(e.field),op:_c(e.op),value:e.value}}}(e):e instanceof ro?function(e){const t=e.getFilters().map(e=>Sc(e));return 1===t.length?t[0]:{compositeFilter:{op:Ec(e.op),filters:t}}}(e):ir(54877,{filter:e})}function Cc(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function kc(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}function Ac(e){return!!e&&"function"==typeof e._toProto&&"ProtoValue"===e._protoValueType}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,t,n,s,r=qr.min(),i=qr.min(),o=di.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new Nc(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Nc(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Nc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Nc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e){this.gt=e}}function Rc(e){const t=vc({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?No(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(){this.Sn=new Oc}addToCollectionParentIndex(e,t){return this.Sn.add(t),Qr.resolve()}getCollectionParents(e,t){return Qr.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return Qr.resolve()}deleteFieldIndex(e,t){return Qr.resolve()}deleteAllFieldIndexes(e){return Qr.resolve()}createTargetIndexes(e,t){return Qr.resolve()}getDocumentsMatchingTarget(e,t){return Qr.resolve(null)}getIndexType(e,t){return Qr.resolve(0)}getFieldIndexes(e,t){return Qr.resolve([])}getNextCollectionGroupToUpdate(e){return Qr.resolve(null)}getMinOffset(e,t){return Qr.resolve(Hr.min())}getMinOffsetFromCollectionGroup(e,t){return Qr.resolve(Hr.min())}updateCollectionGroup(e,t,n){return Qr.resolve()}updateIndexEntries(e,t){return Qr.resolve()}}class Oc{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new ci(Dr.comparator),r=!s.has(n);return this.index[t]=s.add(n),r}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new ci(Dr.comparator)).toArray()}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},xc=41943040;class Mc{static withCacheSize(e){return new Mc(e,Mc.DEFAULT_COLLECTION_PERCENTILE,Mc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mc.DEFAULT_COLLECTION_PERCENTILE=10,Mc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Mc.DEFAULT=new Mc(xc,Mc.DEFAULT_COLLECTION_PERCENTILE,Mc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Mc.DISABLED=new Mc(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vc{constructor(e){this.ir=e}next(){return this.ir+=2,this.ir}static sr(){return new Vc(0)}static _r(){return new Vc(-1)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc="LruGarbageCollector";function Fc([e,t],[n,s]){const r=Er(e,n);return 0===r?Er(t,s):r}class Bc{constructor(e){this.hr=e,this.buffer=new ci(Fc),this.Pr=0}Tr(){return++this.Pr}Ir(e){const t=[e,this.Tr()];if(this.buffer.size<this.hr)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Fc(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class jc{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Er=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Rr(6e4)}stop(){this.Er&&(this.Er.cancel(),this.Er=null)}get started(){return null!==this.Er}Rr(e){tr(Uc,`Garbage collection scheduled in ${e}ms`),this.Er=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Er=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Jr(e)?tr(Uc,"Ignoring IndexedDB error during garbage collection: ",e):await Wr(e)}await this.Rr(3e5)})}}class $c{constructor(e,t){this.Ar=e,this.params=t}calculateTargetCount(e,t){return this.Ar.Vr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return Qr.resolve(Xr.ce);const n=new Bc(t);return this.Ar.forEachTarget(e,e=>n.Ir(e.sequenceNumber)).next(()=>this.Ar.dr(e,e=>n.Ir(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Ar.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Ar.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(tr("LruGarbageCollector","Garbage collection skipped; disabled"),Qr.resolve(Pc)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(tr("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Pc):this.mr(e,t))}getCacheSize(e){return this.Ar.getCacheSize(e)}mr(e,t){let n,s,r,i,o,a,c;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(tr("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),s=this.params.maximumSequenceNumbersToCollect):s=t,i=Date.now(),this.nthSequenceNumber(e,s))).next(s=>(n=s,o=Date.now(),this.removeTargets(e,n,t))).next(t=>(r=t,a=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(c=Date.now(),er()<=A.DEBUG&&tr("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${i-u}ms\n\tDetermined least recently used ${s} in `+(o-i)+"ms\n"+`\tRemoved ${r} targets in `+(a-o)+"ms\n"+`\tRemoved ${e} documents in `+(c-a)+"ms\n"+`Total Duration: ${c-u}ms`),Qr.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:e})))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qc{constructor(){this.changes=new Mo(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ji.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Qr.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&ba(n.mutation,e,li.empty(),$r.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,Go()).next(()=>t))}getLocalViewOfDocuments(e,t,n=Go()){const s=$o();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(e=>{let t=Bo();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){const n=$o();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,Go()))}populateOverlays(e,t,n){const s=[];return n.forEach(e=>{t.has(e)||s.push(e)}),this.documentOverlayCache.getOverlays(e,s).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,s){let r=Uo();const i=zo(),o=zo();return t.forEach((e,t)=>{const o=n.get(t.key);s.has(t.key)&&(void 0===o||o.mutation instanceof Ia)?r=r.insert(t.key,t):void 0!==o?(i.set(t.key,o.mutation.getFieldMask()),ba(o.mutation,t,o.mutation.getFieldMask(),$r.now())):i.set(t.key,li.empty())}),this.recalculateAndSaveOverlays(e,r).next(e=>(e.forEach((e,t)=>i.set(e,t)),t.forEach((e,t)=>o.set(e,new zc(t,i.get(e)??null))),o))}recalculateAndSaveOverlays(e,t){const n=zo();let s=new ii((e,t)=>e-t),r=Go();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(const r of e)r.keys().forEach(e=>{const i=t.get(e);if(null===i)return;let o=n.get(e)||li.empty();o=r.applyToLocalView(i,o),n.set(e,o);const a=(s.get(r.batchId)||Go()).add(e);s=s.insert(r.batchId,a)})}).next(()=>{const i=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,c=s.value,u=qo();c.forEach(e=>{if(!r.has(e)){const s=va(t.get(e),n.get(e));null!==s&&u.set(e,s),r=r.add(e)}}),i.push(this.documentOverlayCache.saveOverlays(e,a,u))}return Qr.waitFor(i)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,s){return function(e){return Or.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):function(e){return null!==e.collectionGroup}(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(r=>{const i=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-r.size):Qr.resolve($o());let o=-1,a=r;return i.next(t=>Qr.forEach(t,(t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(t)?Qr.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,r)).next(()=>this.computeViews(e,a,t,Go())).next(e=>({batchId:o,changes:jo(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Or(t)).next(e=>{let t=Bo();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const r=t.collectionGroup;let i=Bo();return this.indexManager.getCollectionParents(e,r).next(o=>Qr.forEach(o,o=>{const a=function(e,t){return new Io(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,o.child(r));return this.getDocumentsMatchingCollectionQuery(e,a,n,s).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r,s))).next(e=>{r.forEach((t,n)=>{const s=n.getKey();null===e.get(s)&&(e=e.insert(s,Ji.newInvalidDocument(s)))});let n=Bo();return e.forEach((e,s)=>{const i=r.get(e);void 0!==i&&ba(i.mutation,s,li.empty(),$r.now()),Oo(t,s)&&(n=n.insert(e,s))}),n})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e){this.serializer=e,this.Or=new Map,this.Nr=new Map}getBundleMetadata(e,t){return Qr.resolve(this.Or.get(t))}saveBundleMetadata(e,t){return this.Or.set(t.id,function(e){return{id:e.id,version:e.version,createTime:oc(e.createTime)}}(t)),Qr.resolve()}getNamedQuery(e,t){return Qr.resolve(this.Nr.get(t))}saveNamedQuery(e,t){return this.Nr.set(t.name,function(e){return{name:e.name,query:Rc(e.bundledQuery),readTime:oc(e.readTime)}}(t)),Qr.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(){this.overlays=new ii(Or.comparator),this.Br=new Map}getOverlay(e,t){return Qr.resolve(this.overlays.get(t))}getOverlays(e,t){const n=$o();return Qr.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,s)=>{this.wt(e,t,s)}),Qr.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Br.get(n);return void 0!==s&&(s.forEach(e=>this.overlays=this.overlays.remove(e)),this.Br.delete(n)),Qr.resolve()}getOverlaysForCollection(e,t,n){const s=$o(),r=t.length+1,i=new Or(t.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const e=o.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===r&&e.largestBatchId>n&&s.set(e.getKey(),e)}return Qr.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let r=new ii((e,t)=>e-t);const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=r.get(e.largestBatchId);null===t&&(t=$o(),r=r.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=$o(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((e,t)=>o.set(e,t)),!(o.size()>=s)););return Qr.resolve(o)}wt(e,t,n){const s=this.overlays.get(n.key);if(null!==s){const e=this.Br.get(s.largestBatchId).delete(n.key);this.Br.set(s.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new La(t,n));let r=this.Br.get(t);void 0===r&&(r=Go(),this.Br.set(t,r)),this.Br.set(t,r.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(){this.sessionToken=di.EMPTY_BYTE_STRING}getSessionToken(e){return Qr.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Qr.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(){this.Lr=new ci(Jc.kr),this.qr=new ci(Jc.Kr)}isEmpty(){return this.Lr.isEmpty()}addReference(e,t){const n=new Jc(e,t);this.Lr=this.Lr.add(n),this.qr=this.qr.add(n)}Ur(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.$r(new Jc(e,t))}Wr(e,t){e.forEach(e=>this.removeReference(e,t))}Qr(e){const t=new Or(new Dr([])),n=new Jc(t,e),s=new Jc(t,e+1),r=[];return this.qr.forEachInRange([n,s],e=>{this.$r(e),r.push(e.key)}),r}Gr(){this.Lr.forEach(e=>this.$r(e))}$r(e){this.Lr=this.Lr.delete(e),this.qr=this.qr.delete(e)}zr(e){const t=new Or(new Dr([])),n=new Jc(t,e),s=new Jc(t,e+1);let r=Go();return this.qr.forEachInRange([n,s],e=>{r=r.add(e.key)}),r}containsKey(e){const t=new Jc(e,0),n=this.Lr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Jc{constructor(e,t){this.key=e,this.jr=t}static kr(e,t){return Or.comparator(e.key,t.key)||Er(e.jr,t.jr)}static Kr(e,t){return Er(e.jr,t.jr)||Or.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Xn=1,this.Jr=new ci(Jc.kr)}checkEmpty(e){return Qr.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,s){const r=this.Xn;this.Xn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new Da(r,t,n,s);this.mutationQueue.push(i);for(const t of s)this.Jr=this.Jr.add(new Jc(t.key,r)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return Qr.resolve(i)}lookupMutationBatch(e,t){return Qr.resolve(this.Hr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.Zr(n),r=s<0?0:s;return Qr.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return Qr.resolve(0===this.mutationQueue.length?-1:this.Xn-1)}getAllMutationBatches(e){return Qr.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Jc(t,0),s=new Jc(t,Number.POSITIVE_INFINITY),r=[];return this.Jr.forEachInRange([n,s],e=>{const t=this.Hr(e.jr);r.push(t)}),Qr.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ci(Er);return t.forEach(e=>{const t=new Jc(e,0),s=new Jc(e,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([t,s],e=>{n=n.add(e.jr)})}),Qr.resolve(this.Xr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let r=n;Or.isDocumentKey(r)||(r=r.child(""));const i=new Jc(new Or(r),0);let o=new ci(Er);return this.Jr.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===s&&(o=o.add(e.jr)),!0)},i),Qr.resolve(this.Xr(o))}Xr(e){const t=[];return e.forEach(e=>{const n=this.Hr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){ar(0===this.Yr(t.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Jr;return Qr.forEach(t.mutations,s=>{const r=new Jc(s.key,t.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=n})}tr(e){}containsKey(e,t){const n=new Jc(t,0),s=this.Jr.firstAfterOrEqual(n);return Qr.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,Qr.resolve()}Yr(e,t){return this.Zr(e)}Zr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Hr(e){const t=this.Zr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e){this.ei=e,this.docs=new ii(Or.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),r=s?s.size:0,i=this.ei(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-r,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Qr.resolve(n?n.document.mutableCopy():Ji.newInvalidDocument(t))}getEntries(e,t){let n=Uo();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Ji.newInvalidDocument(e))}),Qr.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let r=Uo();const i=t.path,o=new Or(i.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!i.isPrefixOf(e.path))break;e.path.length>i.length+1||Kr(zr(o),n)<=0||(s.has(o.key)||Oo(t,o))&&(r=r.insert(o.key,o.mutableCopy()))}return Qr.resolve(r)}getAllFromCollectionGroup(e,t,n,s){ir(9500)}ti(e,t){return Qr.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new Zc(this)}getSize(e){return Qr.resolve(this.size)}}class Zc extends qc{constructor(e){super(),this.Fr=e}applyChanges(e){const t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.Fr.addEntry(e,s)):this.Fr.removeEntry(n)}),Qr.waitFor(t)}getFromCache(e,t){return this.Fr.getEntry(e,t)}getAllFromCache(e,t){return this.Fr.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e){this.persistence=e,this.ni=new Mo(e=>_o(e),Eo),this.lastRemoteSnapshotVersion=qr.min(),this.highestTargetId=0,this.ri=0,this.ii=new Qc,this.targetCount=0,this.si=Vc.sr()}forEachTarget(e,t){return this.ni.forEach((e,n)=>t(n)),Qr.resolve()}getLastRemoteSnapshotVersion(e){return Qr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Qr.resolve(this.ri)}allocateTargetId(e){return this.highestTargetId=this.si.next(),Qr.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.ri&&(this.ri=t),Qr.resolve()}cr(e){this.ni.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.si=new Vc(t),this.highestTargetId=t),e.sequenceNumber>this.ri&&(this.ri=e.sequenceNumber)}addTargetData(e,t){return this.cr(t),this.targetCount+=1,Qr.resolve()}updateTargetData(e,t){return this.cr(t),Qr.resolve()}removeTargetData(e,t){return this.ni.delete(t.target),this.ii.Qr(t.targetId),this.targetCount-=1,Qr.resolve()}removeTargets(e,t,n){let s=0;const r=[];return this.ni.forEach((i,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.ni.delete(i),r.push(this.removeMatchingKeysForTargetId(e,o.targetId)),s++)}),Qr.waitFor(r).next(()=>s)}getTargetCount(e){return Qr.resolve(this.targetCount)}getTargetData(e,t){const n=this.ni.get(t)||null;return Qr.resolve(n)}addMatchingKeys(e,t,n){return this.ii.Ur(t,n),Qr.resolve()}removeMatchingKeys(e,t,n){this.ii.Wr(t,n);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach(t=>{r.push(s.markPotentiallyOrphaned(e,t))}),Qr.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.ii.Qr(t),Qr.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ii.zr(t);return Qr.resolve(n)}containsKey(e,t){return Qr.resolve(this.ii.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,t){this.oi={},this.overlays={},this._i=new Xr(0),this.ai=!1,this.ai=!0,this.ui=new Wc,this.referenceDelegate=e(this),this.ci=new eu(this),this.indexManager=new Lc,this.remoteDocumentCache=function(e){return new Yc(e)}(e=>this.referenceDelegate.li(e)),this.serializer=new Dc(t),this.hi=new Kc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ai=!1,Promise.resolve()}get started(){return this.ai}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Gc,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.oi[e.toKey()];return n||(n=new Xc(t,this.referenceDelegate),this.oi[e.toKey()]=n),n}getGlobalsCache(){return this.ui}getTargetCache(){return this.ci}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.hi}runTransaction(e,t,n){tr("MemoryPersistence","Starting transaction:",e);const s=new nu(this._i.next());return this.referenceDelegate.Pi(),n(s).next(e=>this.referenceDelegate.Ti(s).next(()=>e)).toPromise().then(e=>(s.raiseOnCommittedEvent(),e))}Ii(e,t){return Qr.or(Object.values(this.oi).map(n=>()=>n.containsKey(e,t)))}}class nu extends Gr{constructor(e){super(),this.currentSequenceNumber=e}}class su{constructor(e){this.persistence=e,this.Ei=new Qc,this.Ri=null}static Ai(e){return new su(e)}get Vi(){if(this.Ri)return this.Ri;throw ir(60996)}addReference(e,t,n){return this.Ei.addReference(n,t),this.Vi.delete(n.toString()),Qr.resolve()}removeReference(e,t,n){return this.Ei.removeReference(n,t),this.Vi.add(n.toString()),Qr.resolve()}markPotentiallyOrphaned(e,t){return this.Vi.add(t.toString()),Qr.resolve()}removeTarget(e,t){this.Ei.Qr(t.targetId).forEach(e=>this.Vi.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Vi.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Pi(){this.Ri=new Set}Ti(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Qr.forEach(this.Vi,n=>{const s=Or.fromPath(n);return this.di(e,s).next(e=>{e||t.removeEntry(s,qr.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.di(e,t).next(e=>{e?this.Vi.delete(t.toString()):this.Vi.add(t.toString())})}li(e){return 0}di(e,t){return Qr.or([()=>Qr.resolve(this.Ei.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class ru{constructor(e,t){this.persistence=e,this.mi=new Mo(e=>function(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=ti(t)),t=ei(e.get(n),t);return ti(t)}(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=function(e,t){return new $c(e,t)}(this,t)}static Ai(e,t){return new ru(e,t)}Pi(){}Ti(e){return Qr.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Vr(e){const t=this.gr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}gr(e){let t=0;return this.dr(e,e=>{t++}).next(()=>t)}dr(e,t){return Qr.forEach(this.mi,(n,s)=>this.yr(e,n,s).next(e=>e?Qr.resolve():t(s)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.ti(e,s=>this.yr(e,s,t).next(e=>{e||(n++,r.removeEntry(s,qr.min()))})).next(()=>r.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.mi.set(t,e.currentSequenceNumber),Qr.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.mi.set(n,e.currentSequenceNumber),Qr.resolve()}removeReference(e,t,n){return this.mi.set(n,e.currentSequenceNumber),Qr.resolve()}updateLimboDocument(e,t){return this.mi.set(t,e.currentSequenceNumber),Qr.resolve()}li(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Bi(e.data.value)),t}yr(e,t,n){return Qr.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const e=this.mi.get(t);return Qr.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Ps=n,this.Ts=s}static Is(e,t){let n=Go(),s=Go();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:s=s.add(e.doc.key)}return new iu(e,t.fromCache,n,s)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(){this.Es=!1,this.Rs=!1,this.As=100,this.Vs=d()?8:function(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}(h())>0?6:4}initialize(e,t){this.ds=e,this.indexManager=t,this.Es=!0}getDocumentsMatchingQuery(e,t,n,s){const r={result:null};return this.fs(e,t).next(e=>{r.result=e}).next(()=>{if(!r.result)return this.gs(e,t,s,n).next(e=>{r.result=e})}).next(()=>{if(r.result)return;const n=new ou;return this.ps(e,t,n).next(s=>{if(r.result=s,this.Rs)return this.ys(e,t,n,s.size)})}).next(()=>r.result)}ys(e,t,n,s){return n.documentReadCount<this.As?(er()<=A.DEBUG&&tr("QueryEngine","SDK will not create cache indexes for query:",Lo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.As,"documents"),Qr.resolve()):(er()<=A.DEBUG&&tr("QueryEngine","Query:",Lo(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Vs*s?(er()<=A.DEBUG&&tr("QueryEngine","The SDK decides to create cache indexes for query:",Lo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ao(t))):Qr.resolve())}fs(e,t){if(Co(t))return Qr.resolve(null);let n=Ao(t);return this.indexManager.getIndexType(e,n).next(s=>0===s?null:(null!==t.limit&&1===s&&(t=No(t,null,"F"),n=Ao(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(s=>{const r=Go(...s);return this.ds.getDocuments(e,r).next(s=>this.indexManager.getMinOffset(e,n).next(n=>{const i=this.ws(t,s);return this.Ss(t,i,r,n.readTime)?this.fs(e,No(t,null,"F")):this.bs(e,i,t,n)}))})))}gs(e,t,n,s){return Co(t)||s.isEqual(qr.min())?Qr.resolve(null):this.ds.getDocuments(e,n).next(r=>{const i=this.ws(t,r);return this.Ss(t,i,n,s)?Qr.resolve(null):(er()<=A.DEBUG&&tr("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Lo(t)),this.bs(e,i,t,function(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=qr.fromTimestamp(1e9===s?new $r(n+1,0):new $r(n,s));return new Hr(r,Or.empty(),t)}(s,-1)).next(e=>e))})}ws(e,t){let n=new ci(Po(e));return t.forEach((t,s)=>{Oo(e,s)&&(n=n.add(s))}),n}Ss(e,t,n,s){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const r="F"===e.limitType?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}ps(e,t,n){return er()<=A.DEBUG&&tr("QueryEngine","Using full collection scan to execute query:",Lo(t)),this.ds.getDocumentsMatchingQuery(e,t,Hr.min(),n)}bs(e,t,n,s){return this.ds.getDocumentsMatchingQuery(e,n,s).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu="LocalStore";class uu{constructor(e,t,n,s){this.persistence=e,this.Ds=t,this.serializer=s,this.Cs=new ii(Er),this.vs=new Mo(e=>_o(e),Eo),this.Fs=new Map,this.Ms=e.getRemoteDocumentCache(),this.ci=e.getTargetCache(),this.hi=e.getBundleCache(),this.xs(n)}xs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Hc(this.Ms,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ms.setIndexManager(this.indexManager),this.Ds.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Cs))}}async function lu(e,t){const n=cr(e);return await n.persistence.runTransaction("Handle user change","readonly",e=>{let s;return n.mutationQueue.getAllMutationBatches(e).next(r=>(s=r,n.xs(t),n.mutationQueue.getAllMutationBatches(e))).next(t=>{const r=[],i=[];let o=Go();for(const e of s){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next(e=>({Os:e,removedBatchIds:r,addedBatchIds:i}))})})}function hu(e){const t=cr(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.ci.getLastRemoteSnapshotVersion(e))}function du(e,t){const n=cr(e),s=t.snapshotVersion;let r=n.Cs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const i=n.Ms.newChangeBuffer({trackRemovals:!0});r=n.Cs;const o=[];t.targetChanges.forEach((i,a)=>{const c=r.get(a);if(!c)return;o.push(n.ci.removeMatchingKeys(e,i.removedDocuments,a).next(()=>n.ci.addMatchingKeys(e,i.addedDocuments,a)));let u=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(di.EMPTY_BYTE_STRING,qr.min()).withLastLimboFreeSnapshotVersion(qr.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,s)),r=r.insert(a,u),function(e,t,n){if(0===e.resumeToken.approximateByteSize())return!0;if(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8)return!0;return n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(c,u,i)&&o.push(n.ci.updateTargetData(e,u))});let a=Uo(),c=Go();if(t.documentUpdates.forEach(s=>{t.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,s))}),o.push(function(e,t,n){let s=Go(),r=Go();return n.forEach(e=>s=s.add(e)),t.getEntries(e,s).next(e=>{let s=Uo();return n.forEach((n,i)=>{const o=e.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),i.isNoDocument()&&i.version.isEqual(qr.min())?(t.removeEntry(n,i.readTime),s=s.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(i),s=s.insert(n,i)):tr(cu,"Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)}),{Ns:s,Bs:r}})}(e,i,t.documentUpdates).next(e=>{a=e.Ns,c=e.Bs})),!s.isEqual(qr.min())){const t=n.ci.getLastRemoteSnapshotVersion(e).next(t=>n.ci.setTargetsMetadata(e,e.currentSequenceNumber,s));o.push(t)}return Qr.waitFor(o).next(()=>i.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,a,c)).next(()=>a)}).then(e=>(n.Cs=r,e))}function fu(e,t){const n=cr(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)))}async function pu(e,t,n){const s=cr(e),r=s.Cs.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,e=>s.persistence.referenceDelegate.removeTarget(e,r))}catch(e){if(!Jr(e))throw e;tr(cu,`Failed to update sequence numbers for target ${t}: ${e}`)}s.Cs=s.Cs.remove(t),s.vs.delete(r.target)}function gu(e,t,n){const s=cr(e);let r=qr.min(),i=Go();return s.persistence.runTransaction("Execute query","readwrite",e=>function(e,t,n){const s=cr(e),r=s.vs.get(n);return void 0!==r?Qr.resolve(s.Cs.get(r)):s.ci.getTargetData(t,n)}(s,e,Ao(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,s.ci.getMatchingKeysForTargetId(e,t.targetId).next(e=>{i=e})}).next(()=>s.Ds.getDocumentsMatchingQuery(e,t,n?r:qr.min(),n?i:Go())).next(e=>(function(e,t,n){let s=e.Fs.get(t)||qr.min();n.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.Fs.set(t,s)}(s,function(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}(t),e),{documents:e,Ls:i})))}class mu{constructor(){this.activeTargetIds=Wo}Ws(e){this.activeTargetIds=this.activeTargetIds.add(e)}Qs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}$s(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yu{constructor(){this.Co=new mu,this.vo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Co.Ws(e),this.vo[e]||"not-current"}updateQueryState(e,t,n){this.vo[e]=t}removeLocalQueryTarget(e){this.Co.Qs(e)}isLocalQueryTarget(e){return this.Co.activeTargetIds.has(e)}clearQueryState(e){delete this.vo[e]}getAllActiveQueryTargets(){return this.Co.activeTargetIds}isActiveQueryTarget(e){return this.Co.activeTargetIds.has(e)}start(){return this.Co=new mu,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{Fo(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu="ConnectivityMonitor";class bu{constructor(){this.Mo=()=>this.xo(),this.Oo=()=>this.No(),this.Bo=[],this.Lo()}Fo(e){this.Bo.push(e)}shutdown(){window.removeEventListener("online",this.Mo),window.removeEventListener("offline",this.Oo)}Lo(){window.addEventListener("online",this.Mo),window.addEventListener("offline",this.Oo)}xo(){tr(wu,"Network connectivity changed: AVAILABLE");for(const e of this.Bo)e(0)}No(){tr(wu,"Network connectivity changed: UNAVAILABLE");for(const e of this.Bo)e(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _u=null;function Eu(){return null===_u?_u=268435456+Math.round(2147483648*Math.random()):_u++,"0x"+_u.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Tu="RestConnection",Iu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Su{get ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Ko=`projects/${n}/databases/${s}`,this.Uo=this.databaseId.database===Si?`project_id=${n}`:`project_id=${n}&database_id=${s}`}$o(e,t,n,s,r){const i=Eu(),o=this.Wo(e,t.toUriEncodedString());tr(Tu,`Sending RPC '${e}' ${i}:`,o,n);const a={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Uo};this.Qo(a,s,r);const{host:c}=new URL(o),u=E(c);return this.Go(e,o,a,n,u).then(t=>(tr(Tu,`Received RPC '${e}' ${i}: `,t),t),t=>{throw sr(Tu,`RPC '${e}' ${i} failed with error: `,t,"url: ",o,"request:",n),t})}zo(e,t,n,s,r,i){return this.$o(e,t,n,s,r)}Qo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ys,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}Wo(e,t){const n=Iu[e];let s=`${this.qo}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e){this.jo=e.jo,this.Jo=e.Jo}Ho(e){this.Zo=e}Xo(e){this.Yo=e}e_(e){this.t_=e}onMessage(e){this.n_=e}close(){this.Jo()}send(e){this.jo(e)}r_(){this.Zo()}i_(){this.Yo()}s_(e){this.t_(e)}o_(e){this.n_(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku="WebChannelConnection",Au=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};class Nu extends Su{constructor(e){super(e),this.__=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static a_(){if(!Nu.u_){const e=Ws();Au(e,Gs.STAT_EVENT,e=>{e.stat===Ks.PROXY?tr(ku,"STAT_EVENT: detected buffering proxy"):e.stat===Ks.NOPROXY&&tr(ku,"STAT_EVENT: detected no buffering proxy")}),Nu.u_=!0}}Go(e,t,n,s,r){const i=Eu();return new Promise((r,o)=>{const a=new $s;a.setWithCredentials(!0),a.listenOnce(zs.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Hs.NO_ERROR:const t=a.getResponseJson();tr(ku,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),r(t);break;case Hs.TIMEOUT:tr(ku,`RPC '${e}' ${i} timed out`),o(new lr(ur.DEADLINE_EXCEEDED,"Request time out"));break;case Hs.HTTP_ERROR:const n=a.getStatus();if(tr(ku,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=e?.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(ur).indexOf(t)>=0?t:ur.UNKNOWN}(t.status);o(new lr(e,t.message))}else o(new lr(ur.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new lr(ur.UNAVAILABLE,"Connection failed."));break;default:ir(9055,{c_:e,streamId:i,l_:a.getLastErrorCode(),h_:a.getLastError()})}}finally{tr(ku,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);tr(ku,`RPC '${e}' ${i} sending request:`,s),a.send(t,"POST",c,n,15)})}P_(e,t,n){const s=Eu(),r=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=this.createWebChannelTransport(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},a=this.longPollingOptions.timeoutSeconds;void 0!==a&&(o.longPollingTimeout=Math.round(1e3*a)),this.useFetchStreams&&(o.useFetchStreams=!0),this.Qo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;const c=r.join("");tr(ku,`Creating RPC '${e}' stream ${s}: ${c}`,o);const u=i.createWebChannel(c,o);this.T_(u);let l=!1,h=!1;const d=new Cu({jo:t=>{h?tr(ku,`Not sending because RPC '${e}' stream ${s} is closed:`,t):(l||(tr(ku,`Opening RPC '${e}' stream ${s} transport.`),u.open(),l=!0),tr(ku,`RPC '${e}' stream ${s} sending:`,t),u.send(t))},Jo:()=>u.close()});return Au(u,qs.EventType.OPEN,()=>{h||(tr(ku,`RPC '${e}' stream ${s} transport opened.`),d.r_())}),Au(u,qs.EventType.CLOSE,()=>{h||(h=!0,tr(ku,`RPC '${e}' stream ${s} transport closed`),d.s_(),this.I_(u))}),Au(u,qs.EventType.ERROR,t=>{h||(h=!0,sr(ku,`RPC '${e}' stream ${s} transport errored. Name:`,t.name,"Message:",t.message),d.s_(new lr(ur.UNAVAILABLE,"The operation could not be completed")))}),Au(u,qs.EventType.MESSAGE,t=>{if(!h){const n=t.data[0];ar(!!n,16349);const r=n,i=r?.error||r[0]?.error;if(i){tr(ku,`RPC '${e}' stream ${s} received error:`,i);const t=i.status;let n=function(e){const t=Pa[e];if(void 0!==t)return Ma(t)}(t),r=i.message;"NOT_FOUND"===t&&r.includes("database")&&r.includes("does not exist")&&r.includes(this.databaseId.database)&&sr(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),void 0===n&&(n=ur.INTERNAL,r="Unknown error status: "+t+" with message "+i.message),h=!0,d.s_(new lr(n,r)),u.close()}else tr(ku,`RPC '${e}' stream ${s} received:`,n),d.o_(n)}}),Nu.a_(),setTimeout(()=>{d.i_()},0),d}terminate(){this.__.forEach(e=>e.close()),this.__=[]}T_(e){this.__.push(e)}I_(e){this.__=this.__.filter(t=>t===e)}Qo(e,t,n){super.Qo(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Qs()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(e){return new tc(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nu.u_=!1;class Lu{constructor(e,t,n=1e3,s=1.5,r=6e4){this.Di=e,this.timerId=t,this.E_=n,this.R_=s,this.A_=r,this.V_=0,this.d_=null,this.m_=Date.now(),this.reset()}reset(){this.V_=0}f_(){this.V_=this.A_}g_(e){this.cancel();const t=Math.floor(this.V_+this.p_()),n=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-n);s>0&&tr("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.d_=this.Di.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),e())),this.V_*=this.R_,this.V_<this.E_&&(this.V_=this.E_),this.V_>this.A_&&(this.V_=this.A_)}y_(){null!==this.d_&&(this.d_.skipDelay(),this.d_=null)}cancel(){null!==this.d_&&(this.d_.cancel(),this.d_=null)}p_(){return(Math.random()-.5)*this.V_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou="PersistentStream";class Pu{constructor(e,t,n,s,r,i,o,a){this.Di=e,this.w_=n,this.S_=s,this.connection=r,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.b_=0,this.D_=null,this.C_=null,this.stream=null,this.v_=0,this.F_=new Lu(e,t)}M_(){return 1===this.state||5===this.state||this.x_()}x_(){return 2===this.state||3===this.state}start(){this.v_=0,4!==this.state?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&null===this.D_&&(this.D_=this.Di.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}async close(e,t){this.q_(),this.K_(),this.F_.cancel(),this.b_++,4!==e?this.F_.reset():t&&t.code===ur.RESOURCE_EXHAUSTED?(nr(t.toString()),nr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===ur.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.e_(t)}U_(){}auth(){this.state=1;const e=this.W_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.b_===t&&this.Q_(e,n)},t=>{e(()=>{const e=new lr(ur.UNKNOWN,"Fetching auth token failed: "+t.message);return this.G_(e)})})}Q_(e,t){const n=this.W_(this.b_);this.stream=this.z_(e,t),this.stream.Ho(()=>{n(()=>this.listener.Ho())}),this.stream.Xo(()=>{n(()=>(this.state=2,this.C_=this.Di.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.Xo()))}),this.stream.e_(e=>{n(()=>this.G_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.v_?this.j_(e):this.onNext(e))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return tr(Ou,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Di.enqueueAndForget(()=>this.b_===e?t():(tr(Ou,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class xu extends Pu{constructor(e,t,n,s,r,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,i),this.serializer=r}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:ir(39313,{state:e})}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(e,t){return e.useProto3Json?(ar(void 0===t||"string"==typeof t,58123),di.fromBase64String(t||"")):(ar(void 0===t||t instanceof Buffer||t instanceof Uint8Array,16193),di.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?ur.UNKNOWN:Ma(e.code);return new lr(t,e.message||"")}(o);n=new Ka(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=hc(e,s.document.name),i=oc(s.document.updateTime),o=s.document.createTime?oc(s.document.createTime):qr.min(),a=new Wi({mapValue:{fields:s.document.fields}}),c=Ji.newFoundDocument(r,i,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new za(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=hc(e,s.document),i=s.readTime?oc(s.readTime):qr.min(),o=Ji.newNoDocument(r,i),a=s.removedTargetIds||[];n=new za([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=hc(e,s.document),i=s.removedTargetIds||[];n=new za([],i,r,null)}else{if(!("filter"in t))return ir(11601,{At:t});{t.filter;const e=t.filter;e.targetId;const{count:s=0,unchangedNames:r}=e,i=new Oa(s,r),o=e.targetId;n=new Ha(o,i)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return qr.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?qr.min():t.readTime?oc(t.readTime):qr.min()}(e);return this.listener.J_(t,n)}H_(e){const t={};t.database=fc(this.serializer),t.addTarget=function(e,t){let n;const s=t.target;if(n=To(s)?{documents:mc(e,s)}:{query:yc(e,s).dt},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=rc(e,t.resumeToken);const s=nc(e,t.expectedCount);null!==s&&(n.expectedCount=s)}else if(t.snapshotVersion.compareTo(qr.min())>0){n.readTime=sc(e,t.snapshotVersion.toTimestamp());const s=nc(e,t.expectedCount);null!==s&&(n.expectedCount=s)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ir(28987,{purpose:e})}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.k_(t)}Z_(e){const t={};t.database=fc(this.serializer),t.removeTarget=e,this.k_(t)}}class Mu extends Pu{constructor(e,t,n,s,r,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,i),this.serializer=r}get X_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.X_&&this.Y_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return ar(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ar(!e.writeResults||0===e.writeResults.length,55816),this.listener.ea()}onNext(e){ar(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=function(e,t){return e&&e.length>0?(ar(void 0!==t,14353),e.map(e=>function(e,t){let n=e.updateTime?oc(e.updateTime):oc(t);return n.isEqual(qr.min())&&(n=oc(t)),new pa(n,e.transformResults||[])}(e,t))):[]}(e.writeResults,e.commitTime),n=oc(e.commitTime);return this.listener.ta(n,t)}na(){const e={};e.database=fc(this.serializer),this.k_(e)}Y_(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>function(e,t){let n;if(t instanceof Ta)n={update:gc(e,t.key,t.value)};else if(t instanceof Aa)n={delete:lc(e,t.key)};else if(t instanceof Ia)n={update:gc(e,t.key,t.data),updateMask:Cc(t.fieldMask)};else{if(!(t instanceof Na))return ir(16599,{Vt:t.type});n={verify:lc(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof na)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof sa)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ia)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ca)return{fieldPath:t.field.canonicalString(),increment:n.Ae};if(n instanceof ua)return{fieldPath:t.field.canonicalString(),minimum:n.Ae};if(n instanceof la)return{fieldPath:t.field.canonicalString(),maximum:n.Ae};throw ir(20930,{transform:t.transform})}(0,e))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:ic(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:ir(27497)}(e,t.precondition)),n}(this.serializer,e))};this.k_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{}class Uu extends Vu{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new lr(ur.FAILED_PRECONDITION,"The client has already been terminated.")}$o(e,t,n,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.$o(e,cc(t,n),s,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===ur.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new lr(ur.UNKNOWN,e.toString())})}zo(e,t,n,s,r){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.zo(e,cc(t,n),s,i,o,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===ur.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new lr(ur.UNKNOWN,e.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class Fu{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){0===this.sa&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){"Online"===this.state?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,"Online"===e&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(nr(t),this._a=!1):tr("OnlineStateTracker",t)}ha(){null!==this.oa&&(this.oa.cancel(),this.oa=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu="RemoteStore";class ju{constructor(e,t,n,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Map,this.Ea=new Map,this.Ra=new Vc(1e3),this.Aa=new Vc(1001),this.Va=new Set,this.da=[],this.ma=r,this.ma.Fo(e=>{n.enqueueAndForget(async()=>{Xu(this)&&(tr(Bu,"Restarting streams for network reachability change."),await async function(e){const t=cr(e);t.Va.add(4),await qu(t),t.fa.set("Unknown"),t.Va.delete(4),await $u(t)}(this))})}),this.fa=new Fu(n,s)}}async function $u(e){if(Xu(e))for(const t of e.da)await t(!0)}async function qu(e){for(const t of e.da)await t(!1)}function zu(e,t){return e.Ia.get(t)||void 0}function Hu(e,t){const n=cr(e),s=zu(n,t.targetId);if(void 0!==s&&n.Ta.has(s))return;const r=function(e,t){const n=zu(e,t);void 0!==n&&e.Ea.delete(n);const s=function(e,t){return t%2!=0?e.Aa.next():e.Ra.next()}(e,t);return e.Ia.set(t,s),e.Ea.set(s,t),s}(n,t.targetId);tr(Bu,"remoteStoreListen mapping SDK target ID to remote",t.targetId,r);const i=new Nc(t.target,r,t.purpose,t.sequenceNumber,t.snapshotVersion,t.lastLimboFreeSnapshotVersion,t.resumeToken);n.Ta.set(r,i),Ju(n)?Qu(n):gl(n).x_()&&Gu(n,i)}function Ku(e,t){const n=cr(e),s=gl(n),r=zu(n,t);tr(Bu,"remoteStoreUnlisten removing mapping of SDK target ID to remote",t,r),n.Ta.delete(r),n.Ia.delete(t),n.Ea.delete(r),s.x_()&&Wu(n,r),0===n.Ta.size&&(s.x_()?s.B_():Xu(n)&&n.fa.set("Unknown"))}function Gu(e,t){if(e.ga.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(qr.min())>0){const n=e.Ea.get(t.targetId);if(void 0===n)return void tr(Bu,"SDK target ID not found for remote ID: "+t.targetId);const s=e.remoteSyncer.getRemoteKeysForTarget(n).size;t=t.withExpectedCount(s)}gl(e).H_(t)}function Wu(e,t){e.ga.$e(t),gl(e).Z_(t)}function Qu(e){e.ga=new Qa({getRemoteKeysForTarget:t=>{const n=e.Ea.get(t);return void 0!==n?e.remoteSyncer.getRemoteKeysForTarget(n):Go()},Rt:t=>e.Ta.get(t)||null,lt:()=>e.datastore.serializer.databaseId}),gl(e).start(),e.fa.aa()}function Ju(e){return Xu(e)&&!gl(e).M_()&&e.Ta.size>0}function Xu(e){return 0===cr(e).Va.size}function Yu(e){e.ga=void 0}async function Zu(e){e.fa.set("Online")}async function el(e){e.Ta.forEach((t,n)=>{Gu(e,t)})}async function tl(e,t){Yu(e),Ju(e)?(e.fa.la(t),Qu(e)):e.fa.set("Unknown")}async function nl(e,t,n){if(e.fa.set("Online"),t instanceof Ka&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const s of t.targetIds){if(e.Ta.has(s)){const t=e.Ea.get(s);void 0!==t&&(await e.remoteSyncer.rejectListen(t,n),e.Ia.delete(t),e.Ea.delete(s)),e.Ta.delete(s)}e.ga.removeTarget(s)}}(e,t)}catch(n){tr(Bu,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await sl(e,n)}else if(t instanceof za?e.ga.Xe(t):t instanceof Ha?e.ga.it(t):e.ga.tt(t),!n.isEqual(qr.min()))try{const t=await hu(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.ga.Pt(t);n.targetChanges.forEach((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const r=e.Ta.get(s);r&&e.Ta.set(s,r.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{const s=e.Ta.get(t);if(!s)return;e.Ta.set(t,s.withResumeToken(di.EMPTY_BYTE_STRING,s.snapshotVersion)),Wu(e,t);const r=new Nc(s.target,t,n,s.sequenceNumber);Gu(e,r)});const s=function(e,t){const n=new Map;t.targetChanges.forEach((t,s)=>{const r=e.Ea.get(s);void 0!==r&&n.set(r,t)});let s=new ii(Er);return t.targetMismatches.forEach((t,n)=>{const r=e.Ea.get(t);void 0!==r&&(s=s.insert(r,n))}),new $a(t.snapshotVersion,n,s,t.documentUpdates,t.resolvedLimboDocuments)}(e,n);return e.remoteSyncer.applyRemoteEvent(s)}(e,n)}catch(t){tr(Bu,"Failed to raise snapshot:",t),await sl(e,t)}}async function sl(e,t,n){if(!Jr(t))throw t;e.Va.add(1),await qu(e),e.fa.set("Offline"),n||(n=()=>hu(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{tr(Bu,"Retrying IndexedDB access"),await n(),e.Va.delete(1),await $u(e)})}function rl(e,t){return t().catch(n=>sl(e,n,t))}async function il(e){const t=cr(e),n=ml(t);let s=t.Pa.length>0?t.Pa[t.Pa.length-1].batchId:-1;for(;ol(t);)try{const e=await fu(t.localStore,s);if(null===e){0===t.Pa.length&&n.B_();break}s=e.batchId,al(t,e)}catch(e){await sl(t,e)}cl(t)&&ul(t)}function ol(e){return Xu(e)&&e.Pa.length<10}function al(e,t){e.Pa.push(t);const n=ml(e);n.x_()&&n.X_&&n.Y_(t.mutations)}function cl(e){return Xu(e)&&!ml(e).M_()&&e.Pa.length>0}function ul(e){ml(e).start()}async function ll(e){ml(e).na()}async function hl(e){const t=ml(e);for(const n of e.Pa)t.Y_(n.mutations)}async function dl(e,t,n){const s=e.Pa.shift(),r=Ra.from(s,t,n);await rl(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await il(e)}async function fl(e,t){t&&ml(e).X_&&await async function(e,t){if(function(e){return function(e){switch(e){case ur.OK:return ir(64938);case ur.CANCELLED:case ur.UNKNOWN:case ur.DEADLINE_EXCEEDED:case ur.RESOURCE_EXHAUSTED:case ur.INTERNAL:case ur.UNAVAILABLE:case ur.UNAUTHENTICATED:return!1;case ur.INVALID_ARGUMENT:case ur.NOT_FOUND:case ur.ALREADY_EXISTS:case ur.PERMISSION_DENIED:case ur.FAILED_PRECONDITION:case ur.ABORTED:case ur.OUT_OF_RANGE:case ur.UNIMPLEMENTED:case ur.DATA_LOSS:return!0;default:return ir(15467,{code:e})}}(e)&&e!==ur.ABORTED}(t.code)){const n=e.Pa.shift();ml(e).N_(),await rl(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await il(e)}}(e,t),cl(e)&&ul(e)}async function pl(e,t){const n=cr(e);n.asyncQueue.verifyOperationInProgress(),tr(Bu,"RemoteStore received new credentials");const s=Xu(n);n.Va.add(3),await qu(n),s&&n.fa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Va.delete(3),await $u(n)}function gl(e){return e.pa||(e.pa=function(e,t,n){const s=cr(e);return s.ia(),new xu(t,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Ho:Zu.bind(null,e),Xo:el.bind(null,e),e_:tl.bind(null,e),J_:nl.bind(null,e)}),e.da.push(async t=>{t?(e.pa.N_(),Ju(e)?Qu(e):e.fa.set("Unknown")):(await e.pa.stop(),Yu(e))})),e.pa}function ml(e){return e.ya||(e.ya=function(e,t,n){const s=cr(e);return s.ia(),new Mu(t,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(e.datastore,e.asyncQueue,{Ho:()=>Promise.resolve(),Xo:ll.bind(null,e),e_:fl.bind(null,e),ea:hl.bind(null,e),ta:dl.bind(null,e)}),e.da.push(async t=>{t?(e.ya.N_(),await il(e)):(await e.ya.stop(),e.Pa.length>0&&(tr(Bu,`Stopping write stream with ${e.Pa.length} pending writes`),e.Pa=[]))})),e.ya
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class yl{constructor(e,t,n,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=r,this.deferred=new hr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,r){const i=Date.now()+n,o=new yl(e,t,i,s,r);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new lr(ur.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vl(e,t){if(nr("AsyncQueue",`${t}: ${e}`),Jr(e))return new lr(ur.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{static emptySet(e){return new wl(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||Or.comparator(t.key,n.key):(e,t)=>Or.comparator(e.key,t.key),this.keyedMap=Bo(),this.sortedSet=new ii(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof wl))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,s=n.getNext().key;if(!e.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new wl;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(){this.wa=new ii(Or.comparator)}track(e){const t=e.doc.key,n=this.wa.get(t);n?0!==e.type&&3===n.type?this.wa=this.wa.insert(t,e):3===e.type&&1!==n.type?this.wa=this.wa.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.wa=this.wa.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.wa=this.wa.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.wa=this.wa.remove(t):1===e.type&&2===n.type?this.wa=this.wa.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.wa=this.wa.insert(t,{type:2,doc:e.doc}):ir(63341,{At:e,Sa:n}):this.wa=this.wa.insert(t,e)}ba(){const e=[];return this.wa.inorderTraversal((t,n)=>{e.push(n)}),e}}class _l{constructor(e,t,n,s,r,i,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=r,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,s,r){const i=[];return t.forEach(e=>{i.push({type:0,doc:e})}),new _l(e,t,wl.emptySet(t),i,n,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Do(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(){this.Da=void 0,this.Ca=[]}va(){return this.Ca.some(e=>e.Fa())}}class Tl{constructor(){this.queries=Il(),this.onlineState="Unknown",this.Ma=new Set}terminate(){!function(e,t){const n=cr(e),s=n.queries;n.queries=Il(),s.forEach((e,n)=>{for(const e of n.Ca)e.onError(t)})}(this,new lr(ur.ABORTED,"Firestore shutting down"))}}function Il(){return new Mo(e=>Ro(e),Do)}function Sl(e,t){const n=cr(e);let s=!1;for(const e of t){const t=e.query,r=n.queries.get(t);if(r){for(const t of r.Ca)t.Oa(e)&&(s=!0);r.Da=e}}s&&kl(n)}function Cl(e,t,n){const s=cr(e),r=s.queries.get(t);if(r)for(const e of r.Ca)e.onError(n);s.queries.delete(t)}function kl(e){e.Ma.forEach(e=>{e.next()})}var Al,Nl;(Nl=Al||(Al={})).Na="default",Nl.Cache="cache";class Dl{constructor(e,t,n){this.query=e,this.Ba=t,this.La=!1,this.ka=null,this.onlineState="Unknown",this.options=n||{}}Oa(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new _l(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.La?this.qa(e)&&(this.Ba.next(e),t=!0):this.Ka(e,this.onlineState)&&(this.Ua(e),t=!0),this.ka=e,t}onError(e){this.Ba.error(e)}xa(e){this.onlineState=e;let t=!1;return this.ka&&!this.La&&this.Ka(this.ka,e)&&(this.Ua(this.ka),t=!0),t}Ka(e,t){if(!e.fromCache)return!0;if(!this.Fa())return!0;const n="Offline"!==t;return(!this.options.$a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}qa(e){if(e.docChanges.length>0)return!0;const t=this.ka&&this.ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Ua(e){e=_l.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.La=!0,this.Ba.next(e)}Fa(){return this.options.source!==Al.Cache}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e){this.key=e}}class Ll{constructor(e){this.key=e}}class Ol{constructor(e,t){this.query=e,this.eu=t,this.tu=null,this.hasCachedResults=!1,this.current=!1,this.nu=Go(),this.mutatedKeys=Go(),this.ru=Po(e),this.iu=new wl(this.ru)}get su(){return this.eu}ou(e,t){const n=t?t._u:new bl,s=t?t.iu:this.iu;let r=t?t.mutatedKeys:this.mutatedKeys,i=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,c="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((e,t)=>{const u=s.get(e),l=Oo(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.au(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.ru(l,a)>0||c&&this.ru(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(i=i.add(l),r=d?r.add(e):r.delete(e)):(i=i.delete(e),r=r.delete(e)))}),null!==this.query.limit)for(;i.size>this.query.limit;){const e="F"===this.query.limitType?i.last():i.first();i=i.delete(e.key),r=r.delete(e.key),n.track({type:1,doc:e})}return{iu:i,_u:n,Ss:o,mutatedKeys:r}}au(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const r=this.iu;this.iu=e.iu,this.mutatedKeys=e.mutatedKeys;const i=e._u.ba();i.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ir(20277,{At:e})}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.ru(e.doc,t.doc)),this.uu(n),s=s??!1;const o=t&&!s?this.cu():[],a=0===this.nu.size&&this.current&&!s?1:0,c=a!==this.tu;return this.tu=a,0!==i.length||c?{snapshot:new _l(this.query,e.iu,r,i,e.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),lu:o}:{lu:o}}xa(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({iu:this.iu,_u:new bl,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{lu:[]}}hu(e){return!this.eu.has(e)&&!!this.iu.has(e)&&!this.iu.get(e).hasLocalMutations}uu(e){e&&(e.addedDocuments.forEach(e=>this.eu=this.eu.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.eu=this.eu.delete(e)),this.current=e.current)}cu(){if(!this.current)return[];const e=this.nu;this.nu=Go(),this.iu.forEach(e=>{this.hu(e.key)&&(this.nu=this.nu.add(e.key))});const t=[];return e.forEach(e=>{this.nu.has(e)||t.push(new Ll(e))}),this.nu.forEach(n=>{e.has(n)||t.push(new Rl(n))}),t}Pu(e){this.eu=e.Ls,this.nu=Go();const t=this.ou(e.documents);return this.applyChanges(t,!0)}Tu(){return _l.fromInitialDocuments(this.query,this.iu,this.mutatedKeys,0===this.tu,this.hasCachedResults)}}const Pl="SyncEngine";class xl{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Ml{constructor(e){this.key=e,this.Iu=!1}}class Vl{constructor(e,t,n,s,r,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=i,this.Eu={},this.Ru=new Mo(e=>Ro(e),Do),this.Au=new Map,this.Vu=new Set,this.du=new ii(Or.comparator),this.mu=new Map,this.fu=new Qc,this.gu={},this.pu=new Map,this.yu=Vc._r(),this.onlineState="Unknown",this.wu=void 0}get isPrimaryClient(){return!0===this.wu}}async function Ul(e,t,n=!0){const s=ih(e);let r;const i=s.Ru.get(t);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.Tu()):r=await Bl(s,t,n,!0),r}async function Fl(e,t){const n=ih(e);await Bl(n,t,!0,!1)}async function Bl(e,t,n,s){const r=await function(e,t){const n=cr(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let s;return n.ci.getTargetData(e,t).next(r=>r?(s=r,Qr.resolve(s)):n.ci.allocateTargetId(e).next(r=>(s=new Nc(t,r,"TargetPurposeListen",e.currentSequenceNumber),n.ci.addTargetData(e,s).next(()=>s))))}).then(e=>{const s=n.Cs.get(e.targetId);return(null===s||e.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Cs=n.Cs.insert(e.targetId,e),n.vs.set(t,e.targetId)),e})}(e.localStore,Ao(t)),i=r.targetId,o=e.sharedClientState.addLocalQueryTarget(i,n);let a;return s&&(a=await async function(e,t,n,s,r){e.Su=(t,n,s)=>async function(e,t,n,s){let r=t.view.ou(n);r.Ss&&(r=await gu(e.localStore,t.query,!1).then(({documents:e})=>t.view.ou(e,r)));const i=s&&s.targetChanges.get(t.targetId),o=s&&null!=s.targetMismatches.get(t.targetId),a=t.view.applyChanges(r,e.isPrimaryClient,i,o);return Zl(e,t.targetId,a.lu),a.snapshot}(e,t,n,s);const i=await gu(e.localStore,t,!0),o=new Ol(t,i.Ls),a=o.ou(i.documents),c=qa.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==e.onlineState,r),u=o.applyChanges(a,e.isPrimaryClient,c);Zl(e,n,u.lu);const l=new xl(t,n,o);return e.Ru.set(t,l),e.Au.has(n)?e.Au.get(n).push(t):e.Au.set(n,[t]),u.snapshot}(e,t,i,"current"===o,r.resumeToken)),e.isPrimaryClient&&n&&Hu(e.remoteStore,r),a}async function jl(e,t,n){const s=cr(e),r=s.Ru.get(t),i=s.Au.get(r.targetId);if(i.length>1)return s.Au.set(r.targetId,i.filter(e=>!Do(e,t))),void s.Ru.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await pu(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),n&&Ku(s.remoteStore,r.targetId),Xl(s,r.targetId)}).catch(Wr)):(Xl(s,r.targetId),await pu(s.localStore,r.targetId,!0))}async function $l(e,t){const n=cr(e),s=n.Ru.get(t),r=n.Au.get(s.targetId);n.isPrimaryClient&&1===r.length&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Ku(n.remoteStore,s.targetId))}async function ql(e,t,n){const s=function(e){const t=cr(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Gl.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Wl.bind(null,t),t}(e);try{const e=await function(e,t){const n=cr(e),s=$r.now(),r=t.reduce((e,t)=>e.add(t.key),Go());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>{let a=Uo(),c=Go();return n.Ms.getEntries(e,r).next(e=>{a=e,a.forEach((e,t)=>{t.isValidDocument()||(c=c.add(e))})}).next(()=>n.localDocuments.getOverlayedDocuments(e,a)).next(r=>{i=r;const o=[];for(const e of t){const t=_a(e,i.get(e.key).overlayedDocument);null!=t&&o.push(new Ia(e.key,t,Qi(t.value.mapValue),ga.exists(!0)))}return n.mutationQueue.addMutationBatch(e,s,o,t)}).next(t=>{o=t;const s=t.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,s)})}).then(()=>({batchId:o.batchId,changes:jo(i)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let s=e.gu[e.currentUser.toKey()];s||(s=new ii(Er)),s=s.insert(t,n),e.gu[e.currentUser.toKey()]=s}(s,e.batchId,n),await nh(s,e.changes),await il(s.remoteStore)}catch(e){const t=vl(e,"Failed to persist write");n.reject(t)}}async function zl(e,t){const n=cr(e);try{const e=await du(n.localStore,t);t.targetChanges.forEach((e,t)=>{const s=n.mu.get(t);s&&(ar(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1,22616),e.addedDocuments.size>0?s.Iu=!0:e.modifiedDocuments.size>0?ar(s.Iu,14607):e.removedDocuments.size>0&&(ar(s.Iu,42227),s.Iu=!1))}),await nh(n,e,t)}catch(e){await Wr(e)}}function Hl(e,t,n){const s=cr(e);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const e=[];s.Ru.forEach((n,s)=>{const r=s.view.xa(t);r.snapshot&&e.push(r.snapshot)}),function(e,t){const n=cr(e);n.onlineState=t;let s=!1;n.queries.forEach((e,n)=>{for(const e of n.Ca)e.xa(t)&&(s=!0)}),s&&kl(n)}(s.eventManager,t),e.length&&s.Eu.J_(e),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Kl(e,t,n){const s=cr(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.mu.get(t),i=r&&r.key;if(i){let e=new ii(Or.comparator);e=e.insert(i,Ji.newNoDocument(i,qr.min()));const n=Go().add(i),r=new $a(qr.min(),new Map,new ii(Er),e,n);await zl(s,r),s.du=s.du.remove(i),s.mu.delete(t),th(s)}else await pu(s.localStore,t,!1).then(()=>Xl(s,t,n)).catch(Wr)}async function Gl(e,t){const n=cr(e),s=t.batch.batchId;try{const e=await function(e,t){const n=cr(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const s=t.batch.keys(),r=n.Ms.newChangeBuffer({trackRemovals:!0});return function(e,t,n,s){const r=n.batch,i=r.keys();let o=Qr.resolve();return i.forEach(e=>{o=o.next(()=>s.getEntry(t,e)).next(t=>{const i=n.docVersions.get(e);ar(null!==i,48541),t.version.compareTo(i)<0&&(r.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),s.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,r))}(n,e,t,r).next(()=>r.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Go();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,s))})}(n.localStore,t);Jl(n,s,null),Ql(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await nh(n,e)}catch(e){await Wr(e)}}async function Wl(e,t,n){const s=cr(e);try{const e=await function(e,t){const n=cr(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let s;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(ar(null!==t,37113),s=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,s,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,s)).next(()=>n.localDocuments.getDocuments(e,s))})}(s.localStore,t);Jl(s,t,n),Ql(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await nh(s,e)}catch(n){await Wr(n)}}function Ql(e,t){(e.pu.get(t)||[]).forEach(e=>{e.resolve()}),e.pu.delete(t)}function Jl(e,t,n){const s=cr(e);let r=s.gu[s.currentUser.toKey()];if(r){const e=r.get(t);e&&(n?e.reject(n):e.resolve(),r=r.remove(t)),s.gu[s.currentUser.toKey()]=r}}function Xl(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.Au.get(t))e.Ru.delete(s),n&&e.Eu.bu(s,n);e.Au.delete(t),e.isPrimaryClient&&e.fu.Qr(t).forEach(t=>{e.fu.containsKey(t)||Yl(e,t)})}function Yl(e,t){e.Vu.delete(t.path.canonicalString());const n=e.du.get(t);null!==n&&(Ku(e.remoteStore,n),e.du=e.du.remove(t),e.mu.delete(n),th(e))}function Zl(e,t,n){for(const s of n)s instanceof Rl?(e.fu.addReference(s.key,t),eh(e,s)):s instanceof Ll?(tr(Pl,"Document no longer in limbo: "+s.key),e.fu.removeReference(s.key,t),e.fu.containsKey(s.key)||Yl(e,s.key)):ir(19791,{Du:s})}function eh(e,t){const n=t.key,s=n.path.canonicalString();e.du.get(n)||e.Vu.has(s)||(tr(Pl,"New document in limbo: "+n),e.Vu.add(s),th(e))}function th(e){for(;e.Vu.size>0&&e.du.size<e.maxConcurrentLimboResolutions;){const t=e.Vu.values().next().value;e.Vu.delete(t);const n=new Or(Dr.fromString(t)),s=e.yu.next();e.mu.set(s,new Ml(n)),e.du=e.du.insert(n,s),Hu(e.remoteStore,new Nc(Ao(So(n.path)),s,"TargetPurposeLimboResolution",Xr.ce))}}async function nh(e,t,n){const s=cr(e),r=[],i=[],o=[];s.Ru.isEmpty()||(s.Ru.forEach((e,a)=>{o.push(s.Su(a,t,n).then(e=>{if((e||n)&&s.isPrimaryClient){const t=e?!e.fromCache:n?.targetChanges.get(a.targetId)?.current;s.sharedClientState.updateQueryState(a.targetId,t?"current":"not-current")}if(e){r.push(e);const t=iu.Is(a.targetId,e);i.push(t)}}))}),await Promise.all(o),s.Eu.J_(r),await async function(e,t){const n=cr(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>Qr.forEach(t,t=>Qr.forEach(t.Ps,s=>n.persistence.referenceDelegate.addReference(e,t.targetId,s)).next(()=>Qr.forEach(t.Ts,s=>n.persistence.referenceDelegate.removeReference(e,t.targetId,s)))))}catch(e){if(!Jr(e))throw e;tr(cu,"Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.Cs.get(t),s=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(s);n.Cs=n.Cs.insert(t,r)}}}(s.localStore,i))}async function sh(e,t){const n=cr(e);if(!n.currentUser.isEqual(t)){tr(Pl,"User change. New user:",t.toKey());const e=await lu(n.localStore,t);n.currentUser=t,function(e,t){e.pu.forEach(e=>{e.forEach(e=>{e.reject(new lr(ur.CANCELLED,t))})}),e.pu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await nh(n,e.Os)}}function rh(e,t){const n=cr(e),s=n.mu.get(t);if(s&&s.Iu)return Go().add(s.key);{let e=Go();const s=n.Au.get(t);if(!s)return e;for(const t of s){const s=n.Ru.get(t);e=e.unionWith(s.view.su)}return e}}function ih(e){const t=cr(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=zl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=rh.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Kl.bind(null,t),t.Eu.J_=Sl.bind(null,t.eventManager),t.Eu.bu=Cl.bind(null,t.eventManager),t}class oh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ru(e.databaseInfo.databaseId),this.sharedClientState=this.Fu(e),this.persistence=this.Mu(e),await this.persistence.start(),this.localStore=this.xu(e),this.gcScheduler=this.Ou(e,this.localStore),this.indexBackfillerScheduler=this.Nu(e,this.localStore)}Ou(e,t){return null}Nu(e,t){return null}xu(e){return function(e,t,n,s){return new uu(e,t,n,s)}(this.persistence,new au,e.initialUser,this.serializer)}Mu(e){return new tu(su.Ai,this.serializer)}Fu(e){return new yu}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}oh.provider={build:()=>new oh};class ah extends oh{constructor(e){super(),this.cacheSizeBytes=e}Ou(e,t){ar(this.persistence.referenceDelegate instanceof ru,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new jc(n,e.asyncQueue,t)}Mu(e){const t=void 0!==this.cacheSizeBytes?Mc.withCacheSize(this.cacheSizeBytes):Mc.DEFAULT;return new tu(e=>ru.Ai(e,t),this.serializer)}}class ch{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Hl(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=sh.bind(null,this.syncEngine),await async function(e,t){const n=cr(e);t?(n.Va.delete(2),await $u(n)):t||(n.Va.add(2),await qu(n),n.fa.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Tl}createDatastore(e){const t=Ru(e.databaseInfo.databaseId),n=function(e){return new Nu(e)}(e.databaseInfo);return function(e,t,n,s){return new Uu(e,t,n,s)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,s,r){return new ju(e,t,n,s,r)}(this.localStore,this.datastore,e.asyncQueue,e=>Hl(this.syncEngine,e,0),bu.v()?new bu:new vu)}createSyncEngine(e,t){return function(e,t,n,s,r,i,o){const a=new Vl(e,t,n,s,r,i);return o&&(a.wu=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(e){const t=cr(e);tr(Bu,"RemoteStore shutting down."),t.Va.add(5),await qu(t),t.ma.shutdown(),t.fa.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}ch.provider={build:()=>new ch};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Lu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Lu(this.observer.error,e):nr("Uncaught Error in snapshot listener:",e.toString()))}ku(){this.muted=!0}Lu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh="FirestoreClient";class hh{constructor(e,t,n,s,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=s,this.user=Xs.UNAUTHENTICATED,this.clientId=_r.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(n,async e=>{tr(lh,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(tr(lh,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new hr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=vl(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function dh(e,t){e.asyncQueue.verifyOperationInProgress(),tr(lh,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async e=>{s.isEqual(e)||(await lu(t.localStore,e),s=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function fh(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){tr(lh,"Using user provided OfflineComponentProvider");try{await dh(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(e){return"FirebaseError"===e.name?e.code===ur.FAILED_PRECONDITION||e.code===ur.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}(n))throw n;sr("Error using user provided cache. Falling back to memory cache: "+n),await dh(e,new oh)}}else tr(lh,"Using default OfflineComponentProvider"),await dh(e,new ah(void 0));return e._offlineComponents}(e);tr(lh,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>pl(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>pl(t.remoteStore,n)),e._onlineComponents=t}async function ph(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(tr(lh,"Using user provided OnlineComponentProvider"),await fh(e,e._uninitializedComponentsProvider._online)):(tr(lh,"Using default OnlineComponentProvider"),await fh(e,new ch))),e._onlineComponents}async function gh(e){const t=await ph(e),n=t.eventManager;return n.onListen=Ul.bind(null,t.syncEngine),n.onUnlisten=jl.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=Fl.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=$l.bind(null,t.syncEngine),n}function mh(e,t,n={}){const s=new hr;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,s,r){const i=new uh({next:a=>{i.ku(),t.enqueueAndForget(()=>async function(e,t){const n=cr(e),s=t.query;let r=3;const i=n.queries.get(s);if(i){const e=i.Ca.indexOf(t);e>=0&&(i.Ca.splice(e,1),0===i.Ca.length?r=t.Fa()?0:1:!i.va()&&t.Fa()&&(r=2))}switch(r){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}(e,o));const c=a.docs.has(n);!c&&a.fromCache?r.reject(new lr(ur.UNAVAILABLE,"Failed to get document because the client is offline.")):c&&a.fromCache&&s&&"server"===s.source?r.reject(new lr(ur.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):r.resolve(a)},error:e=>r.reject(e)}),o=new Dl(So(n.path),i,{includeMetadataChanges:!0,$a:!0});return async function(e,t){const n=cr(e);let s=3;const r=t.query;let i=n.queries.get(r);i?!i.va()&&t.Fa()&&(s=2):(i=new El,s=t.Fa()?0:1);try{switch(s){case 0:i.Da=await n.onListen(r,!0);break;case 1:i.Da=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(e){const n=vl(e,`Initialization of query '${Lo(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,i),i.Ca.push(t),t.xa(n.onlineState),i.Da&&t.Oa(i.Da)&&kl(n)}(e,o)}(await gh(e),e.asyncQueue,t,n,s)),s.promise}function yh(e,t){const n=new hr;return e.asyncQueue.enqueueAndForget(async()=>ql(await function(e){return ph(e).then(e=>e.syncEngine)}(e),t,n)),n.promise
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}function vh(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const wh=new Map;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bh="firestore.googleapis.com",_h=!0;class Eh{constructor(e){if(void 0===e.host){if(void 0!==e.ssl)throw new lr(ur.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=bh,this.ssl=_h}else this.host=e.host,this.ssl=e.ssl??_h;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=xc;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new lr(ur.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,s){if(!0===t&&!0===s)throw new lr(ur.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vh(e.experimentalLongPollingOptions??{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new lr(ur.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new lr(ur.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new lr(ur.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Th{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Eh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new lr(ur.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new lr(ur.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Eh(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new fr;switch(e.type){case"firstParty":return new yr(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new lr(ur.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=wh.get(e);t&&(tr("ComponentProvider","Removing Datastore"),wh.delete(e),t.terminate())}(this),Promise.resolve()}}function Ih(e,t,n,r={}){e=Vr(e,Th);const i=E(t),o=e._getSettings(),a={...o,emulatorOptions:e._getEmulatorOptions()},c=`${t}:${n}`;i&&T(`https://${c}`),o.host!==bh&&o.host!==c&&sr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...o,host:c,ssl:i,emulatorOptions:r};if(!m(u,a)&&(e._setSettings(u),r.mockUserToken)){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Xs.MOCK_USER;else{t=function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...e};return[s(JSON.stringify({alg:"none",type:"JWT"})),s(JSON.stringify(o)),""].join(".")}(r.mockUserToken,e._app?.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new lr(ur.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Xs(i)}e._authCredentials=new pr(new dr(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Sh(this.firestore,e,this._query)}}class Ch{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kh(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ch(this.firestore,e,this._key)}toJSON(){return{type:Ch._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(Fr(t,Ch._jsonSchema))return new Ch(e,n||null,new Or(Dr.fromString(t.referencePath)))}}Ch._jsonSchemaVersion="firestore/documentReference/1.0",Ch._jsonSchema={type:Ur("string",Ch._jsonSchemaVersion),referencePath:Ur("string")};class kh extends Sh{constructor(e,t,n){super(e,t,So(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ch(this.firestore,null,new Or(e))}withConverter(e){return new kh(this.firestore,e,this._path)}}function Ah(e,t,...n){if(e=_(e),1===arguments.length&&(t=_r.newId()),function(e,t,n){if(!n)throw new lr(ur.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}("doc","path",t),e instanceof Th){const s=Dr.fromString(t,...n);return Pr(s),new Ch(e,null,new Or(s))}{if(!(e instanceof Ch||e instanceof kh))throw new lr(ur.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(Dr.fromString(t,...n));return Pr(s),new Ch(e.firestore,e instanceof kh?e.converter:null,new Or(s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh="AsyncQueue";class Dh{constructor(e=Promise.resolve()){this.nc=[],this.rc=!1,this.sc=[],this.oc=null,this._c=!1,this.ac=!1,this.uc=[],this.F_=new Lu(this,"async_queue_retry"),this.cc=()=>{const e=Du();e&&tr(Nh,"Visibility state changed to "+e.visibilityState),this.F_.y_()},this.lc=e;const t=Du();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.cc)}get isShuttingDown(){return this.rc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.hc(),this.Pc(e)}enterRestrictedMode(e){if(!this.rc){this.rc=!0,this.ac=e||!1;const t=Du();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.cc)}}enqueue(e){if(this.hc(),this.rc)return new Promise(()=>{});const t=new hr;return this.Pc(()=>this.rc&&this.ac?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.nc.push(e),this.Tc()))}async Tc(){if(0!==this.nc.length){try{await this.nc[0](),this.nc.shift(),this.F_.reset()}catch(e){if(!Jr(e))throw e;tr(Nh,"Operation failed with retryable error: "+e)}this.nc.length>0&&this.F_.g_(()=>this.Tc())}}Pc(e){const t=this.lc.then(()=>(this._c=!0,e().catch(e=>{throw this.oc=e,this._c=!1,nr("INTERNAL UNHANDLED ERROR: ",Rh(e)),e}).then(e=>(this._c=!1,e))));return this.lc=t,t}enqueueAfterDelay(e,t,n){this.hc(),this.uc.indexOf(e)>-1&&(t=0);const s=yl.createAndSchedule(this,e,t,n,e=>this.Ic(e));return this.sc.push(s),s}hc(){this.oc&&ir(47125,{Ec:Rh(this.oc)})}verifyOperationInProgress(){}async Rc(){let e;do{e=this.lc,await e}while(e!==this.lc)}Ac(e){for(const t of this.sc)if(t.timerId===e)return!0;return!1}Vc(e){return this.Rc().then(()=>{this.sc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.sc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Rc()})}dc(e){this.uc.push(e)}Ic(e){const t=this.sc.indexOf(e);this.sc.splice(t,1)}}function Rh(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}class Lh extends Th{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new Dh,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Dh(e),this._firestoreClient=void 0,await e}}}function Oh(e){if(e._terminated)throw new lr(ur.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){const t=e._freezeSettings(),n=function(e,t,n,s,r){return new Ii(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,vh(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,s)}(e._databaseId,e._app?.options.appId||"",e._persistenceKey,e._app?.options.apiKey,t);e._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(e._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),e._firestoreClient=new hh(e._authCredentials,e._appCheckCredentials,e._queue,n,e._componentsProvider&&function(e){const t=e?._online.build();return{_offline:e?._offline.build(t),_online:t}}(e._componentsProvider))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e),e._firestoreClient}class Ph{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ph(di.fromBase64String(e))}catch(e){throw new lr(ur.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Ph(di.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ph._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Fr(e,Ph._jsonSchema))return Ph.fromBase64String(e.bytes)}}Ph._jsonSchemaVersion="firestore/bytes/1.0",Ph._jsonSchema={type:Ur("string",Ph._jsonSchemaVersion),bytes:Ur("string")};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xh{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new lr(ur.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Lr(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new lr(ur.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new lr(ur.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Er(this._lat,e._lat)||Er(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Vh._jsonSchemaVersion}}static fromJSON(e){if(Fr(e,Vh._jsonSchema))return new Vh(e.latitude,e.longitude)}}Vh._jsonSchemaVersion="firestore/geoPoint/1.0",Vh._jsonSchema={type:Ur("string",Vh._jsonSchemaVersion),latitude:Ur("number"),longitude:Ur("number")};
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uh{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Uh._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Fr(e,Uh._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(e=>"number"==typeof e))return new Uh(e.vectorValues);throw new lr(ur.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Uh._jsonSchemaVersion="firestore/vectorValue/1.0",Uh._jsonSchema={type:Ur("string",Uh._jsonSchemaVersion),vectorValues:Ur("object")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Fh=/^__.*__$/;class Bh{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Ia(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ta(e,this.data,t,this.fieldTransforms)}}function jh(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ir(40011,{dataSource:e})}}class $h{constructor(e,t,n,s,r,i){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,void 0===r&&this.mc(),this.fieldTransforms=r||[],this.fieldMask=i||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new $h({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}gc(e){const t=this.path?.child(e),n=this.i({path:t,arrayElement:!1});return n.yc(e),n}wc(e){const t=this.path?.child(e),n=this.i({path:t,arrayElement:!1});return n.mc(),n}Sc(e){return this.i({path:void 0,arrayElement:!0})}bc(e){return Xh(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}mc(){if(this.path)for(let e=0;e<this.path.length;e++)this.yc(this.path.get(e))}yc(e){if(0===e.length)throw this.bc("Document fields must not be empty");if(jh(this.dataSource)&&Fh.test(e))throw this.bc('Document fields cannot begin and end with "__"')}}class qh{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Ru(e)}V(e,t,n,s=!1){return new $h({dataSource:e,methodName:t,targetDoc:n,path:Lr.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zh(e,t,n,s,r,i={}){const o=e.V(i.merge||i.mergeFields?2:0,t,n,r);Wh("Data must be an object, but it was:",o,s);const a=Kh(s,o);let c,u;if(i.merge)c=new li(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const e=[];for(const s of i.mergeFields){const r=Qh(t,s,n);if(!o.contains(r))throw new lr(ur.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);Yh(e,r)||e.push(r)}c=new li(e),u=o.fieldTransforms.filter(e=>c.covers(e.field))}else c=null,u=o.fieldTransforms;return new Bh(new Wi(a),c,u)}function Hh(e,t){if(Gh(e=_(e)))return Wh("Unsupported field value:",t,e),Kh(e,t);if(e instanceof Mh)return function(e,t){if(!jh(t.dataSource))throw t.bc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.bc(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.arrayElement&&4!==t.dataSource)throw t.bc("Nested arrays are not supported");return function(e,t){const n=[];let s=0;for(const r of e){let e=Hh(r,t.Sc(s));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),s++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=_(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Xo(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=$r.fromDate(e);return{timestampValue:sc(t.serializer,n)}}if(e instanceof $r){const n=new $r(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:sc(t.serializer,n)}}if(e instanceof Vh)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Ph)return{bytesValue:rc(t.serializer,e._byteString)};if(e instanceof Ch){const n=t.databaseId,s=e.firestore._databaseId;if(!s.isEqual(n))throw t.bc(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ac(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof Uh)return function(e,t){const n=e instanceof Uh?e.toArray():e,s={fields:{[ki]:{stringValue:Di},[Ri]:{arrayValue:{values:n.map(e=>{if("number"!=typeof e)throw t.bc("VectorValues must only contain numeric values.");return Qo(t.serializer,e)})}}}};return{mapValue:s}}(e,t);if(Ac(e))return e._toProto(t.serializer);throw t.bc(`Unsupported field value: ${Mr(e)}`)}(e,t)}function Kh(e,t){const n={};return ri(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):si(e,(e,s)=>{const r=Hh(s,t.gc(e));null!=r&&(n[e]=r)}),{mapValue:{fields:n}}}function Gh(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof $r||e instanceof Vh||e instanceof Ph||e instanceof Ch||e instanceof Mh||e instanceof Uh||Ac(e))}function Wh(e,t,n){if(!Gh(n)||!xr(n)){const s=Mr(n);throw"an object"===s?t.bc(e+" a custom object"):t.bc(e+" "+s)}}function Qh(e,t,n){if((t=_(t))instanceof xh)return t._internalPath;if("string"==typeof t)return function(e,t,n){if(t.search(Jh)>=0)throw Xh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new xh(...t.split("."))._internalPath}catch(s){throw Xh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}(e,t);throw Xh("Field path arguments must be of type string or ",e,!1,void 0,n)}const Jh=new RegExp("[~\\*/\\[\\]]");function Xh(e,t,n,s,r){const i=s&&!s.isEmpty(),o=void 0!==r;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new lr(ur.INVALID_ARGUMENT,a+e+c)}function Yh(e,t){return e.some(e=>e.isEqual(t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{convertValue(e,t="none"){switch(Li(e)){case 0:return null;case 1:return e.booleanValue;case 2:return gi(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(mi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ir(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return si(e,(e,s)=>{n[e]=this.convertValue(s,t)}),n}convertVectorValue(e){const t=e.fields?.[Ri].arrayValue?.values?.map(e=>gi(e.doubleValue));return new Uh(t)}convertGeoPoint(e){return new Vh(gi(e.latitude),gi(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ei(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Ti(e));default:return null}}convertTimestamp(e){const t=pi(e);return new $r(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Dr.fromString(e);ar(kc(n),9688,{name:e});const s=new Ci(n.get(1),n.get(3)),r=new Or(n.popFirst(5));return s.isEqual(t)||nr(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed extends Zh{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ph(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ch(this.firestore,null,t)}}const td="@firebase/firestore",nd="4.15.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,t,n,s,r){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Ch(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new rd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(Qh("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class rd extends sd{data(){return super.data()}}class id{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class od extends sd{constructor(e,t,n,s,r,i){super(e,t,n,s,i),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ad(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Qh("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new lr(ur.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=od._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),e&&e.isValidDocument()&&e.isFoundDocument()?(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t):t}}od._jsonSchemaVersion="firestore/documentSnapshot/1.0",od._jsonSchema={type:Ur("string",od._jsonSchemaVersion),bundleSource:Ur("string","DocumentSnapshot"),bundleName:Ur("string"),bundle:Ur("string")};class ad extends od{data(e={}){return super.data(e)}}class cd{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new id(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new ad(this._firestore,this._userDataWriter,n.key,n,new id(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new lr(ur.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{const s=new ad(e._firestore,e._userDataWriter,n.doc.key,n.doc,new id(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:s,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const s=new ad(e._firestore,e._userDataWriter,t.doc.key,t.doc,new id(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let r=-1,i=-1;return 0!==t.type&&(r=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),i=n.indexOf(t.doc.key)),{type:ud(t.type),doc:s,oldIndex:r,newIndex:i}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new lr(ur.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=cd._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=_r.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],s=[];return this.docs.forEach(e=>{null!==e._document&&(t.push(e._document),n.push(this._userDataWriter.convertObjectMap(e._document.data.value.mapValue.fields,"previous")),s.push(e.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ud(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ir(61501,{type:e})}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ld(e){e=Vr(e,Ch);const t=Vr(e.firestore,Lh);return mh(Oh(t),e._key).then(n=>function(e,t,n){const s=n.docs.get(t._key),r=new ed(e);return new od(e,r,t._key,s,new id(n.hasPendingWrites,n.fromCache),t.converter)}(t,e,n))}function hd(e,t,n){e=Vr(e,Ch);const s=Vr(e.firestore,Lh),r=function(e,t){let n;return n=e?e.toFirestore(t):t,n}(e.converter,t),i=function(e){const t=e._freezeSettings(),n=Ru(e._databaseId);return new qh(e._databaseId,!!t.ignoreUndefinedProperties,n)}(s);return dd(s,[zh(i,"setDoc",e._key,r,null!==e.converter,n).toMutation(e._key,ga.none())])}function dd(e,t){return yh(Oh(e),t)}cd._jsonSchemaVersion="firestore/querySnapshot/1.0",cd._jsonSchema={type:Ur("string",cd._jsonSchemaVersion),bundleSource:Ur("string","QuerySnapshot"),bundleName:Ur("string"),bundle:Ur("string")},function(e,t=!0){Ys=Ve,Le(new I("firestore",(e,{instanceIdentifier:n,options:s})=>{const r=e.getProvider("app").getImmediate(),i=new Lh(new gr(e.getProvider("auth-internal")),new wr(r,e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new lr(ur.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ci(e.options.projectId,t)}(r,n),r);return s={useFetchStreams:t,...s},i._setSettings(s),i},"PUBLIC").setMultipleInstances(!0)),Be(td,nd,e),Be(td,nd,"esm2020")}();const fd={apiKey:"AIzaSyCNzPgcW2ytan1zznO_S2jWRnHGTr7QNFk",authDomain:"budget-a1925.firebaseapp.com",projectId:"budget-a1925",storageBucket:"budget-a1925.firebasestorage.app",messagingSenderId:"719338777410",appId:"1:719338777410:web:a41228be8bc0c573bf76db"},pd=fd.apiKey&&!fd.apiKey.includes("REPLACE_ME");let gd=null,md=null;if(pd){const e=Ue(fd);gd=function(e=Fe()){const t=Oe(e,"auth");if(t.isInitialized())return t.getImmediate();const n=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){const n=Oe(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(m(n.getOptions(),t??{}))return e;nt(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Ls,persistence:[Wn,Rn,On]}),s=u("authTokenSyncURL");if(s&&"boolean"==typeof isSecureContext&&isSecureContext){const e=new URL(s,location.origin);if(location.origin===e.origin){const t=(r=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Ms)return;const s=t?.token;Vs!==s&&(Vs=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))});!function(e,t,n){_(e).beforeAuthStateChanged(t,n)}(n,t,()=>t(n.currentUser)),function(e,t,n,s){_(e).onIdTokenChanged(t,n,s)}(n,e=>t(e))}}var r;const i=a("auth");return i&&ln(n,`http://${i}`),n}(e),md=function(e){const t="object"==typeof e?e:Fe(),n="string"==typeof e?e:Si,s=Oe(t,"firestore").getImmediate({identifier:n});if(!s._initialized){const e=(()=>{const e=a("firestore");if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return"["===e[0]?[e.substring(1,t-1),n]:[e.substring(0,t),n]})();e&&Ih(s,...e)}return s}(e)}const yd="budget.config.v1",vd="budget.mode",wd="budget.help-dismissed",bd="Overskud",_d=[{value:"shared",label:"Delt"},{value:"personal",label:"Pr. person"}],Ed=[{headerClass:"text-rose-600",forbrugClass:"text-rose-600 font-semibold",canvas:"#e11d48"},{headerClass:"text-indigo-600",forbrugClass:"text-indigo-600 font-semibold",canvas:"#4f46e5"},{headerClass:"text-emerald-600",forbrugClass:"text-emerald-600 font-semibold",canvas:"#059669"},{headerClass:"text-amber-600",forbrugClass:"text-amber-600 font-semibold",canvas:"#d97706"},{headerClass:"text-sky-600",forbrugClass:"text-sky-600 font-semibold",canvas:"#0284c7"},{headerClass:"text-fuchsia-600",forbrugClass:"text-fuchsia-600 font-semibold",canvas:"#c026d3"}],Td=document.getElementById("welcomeView"),Id=document.getElementById("mainView"),Sd=document.getElementById("configView"),Cd=document.getElementById("moreView"),kd=document.getElementById("topNav"),Ad=document.getElementById("tabMain"),Nd=document.getElementById("tabConfig"),Dd=document.getElementById("tabMore"),Rd=document.getElementById("helpSheet"),Ld=document.getElementById("helpSheetBackdrop"),Od=document.getElementById("helpSheetBack"),Pd=document.getElementById("helpSheetNext"),xd=Array.from(Rd.querySelectorAll("[data-help-step]")),Md=Array.from(Rd.querySelectorAll("[data-help-dot]")),Vd=document.getElementById("welcomeSignInButton"),Ud=document.getElementById("welcomeLocalButton"),Fd=document.getElementById("incomeInputs"),Bd=document.getElementById("budgetContent"),jd=document.getElementById("mainEmptyState"),$d=document.getElementById("mainHint"),qd=document.getElementById("overskudSection"),zd=document.getElementById("resultCards"),Hd=document.getElementById("totalForbrug"),Kd=document.getElementById("calcButton"),Gd=document.getElementById("resetButton"),Wd=document.getElementById("downloadButton"),Qd=document.getElementById("calcWarning"),Jd=document.getElementById("calcWarningAmount"),Xd=document.getElementById("peopleList"),Yd=document.getElementById("peopleAddButton"),Zd=document.getElementById("configList"),ef=document.getElementById("configAddButton"),tf=document.getElementById("configSaveButton"),nf=document.getElementById("authStatus"),sf=document.getElementById("signInButton"),rf=document.getElementById("signOutButton"),of=document.getElementById("deleteLocalButton"),af=document.getElementById("deleteAccountButton"),cf=document.getElementById("loadingOverlay");function uf(){cf?.classList.remove("is-hidden")}function lf(){cf?.classList.add("is-hidden")}let hf=null,df={people:[],spending:[]},ff=null,pf=0;function gf(){return"local"===localStorage.getItem(vd)}function mf(){localStorage.removeItem(vd)}function yf(){return df.people.length>0||df.spending.length>0}function vf(){return pd&&null!=hf||gf()||!pd?yf()?"main":"config":"welcome"}function wf(e,t){e.classList.toggle("border-slate-800",t),e.classList.toggle("text-slate-900",t),e.classList.toggle("font-semibold",t),e.classList.toggle("border-transparent",!t),e.classList.toggle("text-slate-500",!t),e.classList.toggle("font-medium",!t)}function bf(e){Td.classList.toggle("hidden","welcome"!==e),Id.classList.toggle("hidden","main"!==e),Sd.classList.toggle("hidden","config"!==e),Cd.classList.toggle("hidden","more"!==e);const t="welcome"!==e;kd.classList.toggle("hidden",!t),kd.classList.toggle("grid",t),wf(Ad,"main"===e),wf(Nd,"config"===e),wf(Dd,"more"===e),"config"===e&&"true"!==localStorage.getItem(wd)&&(_f=0,Ef(),Rd.classList.remove("hidden"),Rd.classList.add("flex"),document.body.style.overflow="hidden"),lf()}let _f=0;function Ef(){xd.forEach((e,t)=>e.classList.toggle("hidden",t!==_f)),Md.forEach((e,t)=>{e.classList.toggle("bg-slate-800",t===_f),e.classList.toggle("bg-slate-300",t!==_f)}),Od.classList.toggle("hidden",0===_f),Pd.textContent=_f===xd.length-1?"Forstået":"Næste"}function Tf(){Rd.classList.add("hidden"),Rd.classList.remove("flex"),document.body.style.overflow="",localStorage.setItem(wd,"true")}function If(e){return Number(e).toLocaleString("da-DK")}function Sf(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Cf(){return crypto.randomUUID()}function kf(e){return Ed[e%Ed.length]}function Af(e){const t=Array.isArray(e?.people)?e.people.filter(e=>e&&"string"==typeof e.name).map(e=>({id:e.id||Cf(),name:e.name})):[],n=Array.isArray(e?.spending)?e.spending.filter(e=>e&&"string"==typeof e.label).map(e=>({id:e.id||Cf(),label:e.label,target:Number(e.target)||0,kind:"personal"===e.kind?"personal":"shared"})):[];return Number.isFinite(Number(e?.selvCap))&&Number(e.selvCap)>0&&!n.some(e=>"personal"===e.kind)&&n.push({id:Cf(),label:"Selv",target:Number(e.selvCap),kind:"personal"}),{people:t,spending:n}}function Nf(){const e=localStorage.getItem(yd);if(!e)return null;try{return Af(JSON.parse(e))}catch{return null}}function Df(e){localStorage.setItem(yd,JSON.stringify(e))}async function Rf(e,t){await hd(Ah(md,"users",e),t)}function Lf(e,t,n,{separator:s=!1,forbrug:r=!1}={}){const i=r?n.forbrugClass:"font-medium text-slate-900",o=null==t?'<span class="text-slate-300">—</span>':If(t);return`<div class="${s?"flex items-center justify-between border-t border-slate-200 mt-2 pt-3":"flex items-center justify-between py-1.5"}">\n    <dt class="text-slate-600">${Sf(e)}</dt>\n    <dd class="tabular-nums ${i}">${o}</dd>\n  </div>`}function Of(){df.people.length?Fd.innerHTML=`<div class="space-y-2">${df.people.map(e=>`<label class="block">\n        <span class="mb-1 block text-xs font-medium text-slate-500">${Sf(e.name)}</span>\n        <input type="text" inputmode="numeric" pattern="[0-9]*" placeholder="Indkomst"\n          data-person-income="${e.id}"\n          class="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-left text-base font-medium tabular-nums text-slate-900 placeholder:font-normal placeholder:text-slate-400 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-100" />\n      </label>`).join("")}</div>`:Fd.innerHTML='<div class="rounded-lg border border-dashed border-slate-200 bg-white px-3 py-3 text-center text-sm text-slate-400">Tilføj personer i konfigurationen</div>'}function Pf(e){const t=Fd.querySelector(`[data-person-income="${e}"]`);return t?parseFloat(t.value):NaN}function xf(){df.people.length?(zd.innerHTML=df.people.map((e,t)=>`<section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">\n        <header class="mb-2">\n          <h2 class="text-base font-semibold ${kf(t).headerClass}">${Sf(e.name)}</h2>\n        </header>\n        <dl class="text-sm" data-person-result="${e.id}"></dl>\n      </section>`).join(""),df.people.forEach(e=>Mf(e.id,null))):zd.innerHTML=""}function Mf(e,t){const n=zd.querySelector(`[data-person-result="${e}"]`);if(!n)return;const s=df.people.findIndex(t=>t.id===e);if(-1===s)return;const r=kf(s),i=[];df.spending.forEach(e=>{i.push(Lf(e.label,t?.spending[e.id]??null,r))}),i.push(Lf(bd,t?.forbrug??null,r,{separator:!0,forbrug:!0})),n.innerHTML=i.join("")}function Vf(e,t,n){return Math.round(e/t*n)}function Uf(e){pf=Math.max(0,e);const t=pf>0;Qd?.classList.toggle("hidden",!t),Jd&&(Jd.textContent=t?`Der mangler ${If(pf)} kr.`:""),Ff()}function Ff(){const e=df.people.length>0&&df.spending.length>0,t=e&&null!=ff&&0===pf,n=e&&null==ff&&0===pf;zd.classList.toggle("hidden",!t),qd.classList.toggle("hidden",!t),Wd.classList.toggle("hidden",!t),$d.classList.toggle("hidden",!n)}function Bf(){const e=df.people.length>0&&df.people.every(e=>Number.isFinite(Pf(e.id)));Kd.disabled=!e;const t=df.people.some(e=>{const t=Fd.querySelector(`[data-person-income="${e.id}"]`);return t&&""!==t.value.trim()});Gd.disabled=!t&&null==ff}function jf(e){return`<div class="flex items-center gap-2 py-1.5" data-people-row data-id="${e.id}">\n    <input type="text" data-field="name" value="${Sf(e.name)}"\n      placeholder="Navn"\n      class="h-9 flex-1 min-w-0 rounded-md border border-slate-200 bg-white px-2 text-base text-slate-900 outline-none focus:border-slate-400" />\n    <button type="button" data-action="delete-person" aria-label="Slet"\n      class="h-9 w-9 shrink-0 rounded-md border border-slate-200 bg-white text-slate-400 transition hover:text-rose-500 focus:outline-none">\n      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>\n    </button>\n  </div>`}function $f(){Xd.innerHTML=df.people.map(jf).join("")}function qf(e){const t=""===e.target||null==e.target?"":e.target,n="personal"===e.kind?"personal":"shared";return`<div class="space-y-2 py-1.5" data-row data-id="${e.id}">\n    <input type="text" data-field="label" value="${Sf(e.label)}"\n      placeholder="Navn"\n      class="h-9 w-full rounded-md border border-slate-200 bg-white px-2 text-base text-slate-900 outline-none focus:border-slate-400" />\n    <div class="flex items-center gap-2">\n      <input type="text" inputmode="numeric" pattern="[0-9]*" data-field="target" value="${Sf(t)}"\n        placeholder="Beløb"\n        class="h-9 w-24 rounded-md border border-slate-200 bg-white px-2 text-left text-base tabular-nums text-slate-900 placeholder:text-slate-400 outline-none focus:border-slate-400" />\n      <select data-field="kind"\n        class="h-9 flex-1 min-w-0 rounded-md border border-slate-200 bg-white px-2 text-base text-slate-900 outline-none focus:border-slate-400">\n        ${_d.map(e=>`<option value="${e.value}"${e.value===n?" selected":""}>${e.label}</option>`).join("")}\n      </select>\n      <button type="button" data-action="delete" aria-label="Slet"\n        class="h-9 w-9 shrink-0 rounded-md border border-slate-200 bg-white text-slate-400 transition hover:text-rose-500 focus:outline-none">\n        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>\n      </button>\n    </div>\n  </div>`}function zf(){Zd.innerHTML=df.spending.map(qf).join("")}async function Hf(){if(localStorage.removeItem(yd),mf(),hf&&md){try{await Rf(hf.uid,{people:[],spending:[]})}catch(e){console.error("Remote reset failed",e)}gd&&await Cn(gd).catch(()=>{})}else Gf(null),bf("welcome")}function Kf(){if(of.classList.toggle("hidden",!(!hf&&gf())),af.classList.toggle("hidden",!hf),!pd)return nf.textContent=gf()?"Lokal bruger":"Login ikke konfigureret",sf.classList.add("hidden"),void rf.classList.add("hidden");if(hf){const e=hf.email??hf.displayName??"ukendt bruger";nf.innerHTML=`<span class="block text-xs text-slate-400">Logget ind som</span><span class="block text-sm text-slate-700">${Sf(e)}</span>`,sf.classList.add("hidden"),rf.classList.remove("hidden")}else gf()?(nf.textContent="Lokal bruger",sf.textContent="Log ind med Google",sf.classList.remove("hidden"),rf.classList.add("hidden")):(nf.textContent="Ikke logget ind",sf.textContent="Log ind",sf.classList.remove("hidden"),rf.classList.add("hidden"))}function Gf(e){df=e??{people:[],spending:[]},$f(),zf(),Of(),xf(),Hd.textContent="—",ff=null,Uf(0),Bf(),Wf()}function Wf(){const e=df.people.length>0&&df.spending.length>0;jd.classList.toggle("hidden",e),Bd.classList.toggle("hidden",!e),e||Uf(0),Ff()}function Qf(){pd&&(uf(),async function(e,t,n){if(Pe(e.app))return Promise.reject(st(e,"operation-not-supported-in-this-environment"));const s=an(e);ot(e,t,mn);const r=Qn(s,n);return new ns(s,"signInViaPopup",t,r).executeNotNull()}(gd,new wn).catch(e=>{console.error("Sign-in failed",e),lf()}))}function Jf(){if(!window.matchMedia("(pointer: coarse)").matches)return!1;if(!navigator.canShare)return!1;const e=new File([""],"budget.png",{type:"image/png"});return navigator.canShare({files:[e]})}document.addEventListener("beforeinput",e=>{const t=e.target;t instanceof HTMLInputElement&&"numeric"===t.inputMode&&(null==e.data||/^[0-9]+$/.test(e.data)||e.preventDefault())}),Fd.addEventListener("input",e=>{e.target.matches("[data-person-income]")&&Bf()}),window.visualViewport&&window.visualViewport.addEventListener("resize",()=>{const e=window.innerHeight-window.visualViewport.height>150;kd.classList.toggle("keyboard-open",e)}),Jf()&&(document.getElementById("downloadButtonLabel").textContent="Del som billede",document.getElementById("downloadIcon").classList.add("hidden"),document.getElementById("shareIcon").classList.remove("hidden")),Kd.addEventListener("click",function(){const e={};for(const t of df.people){const n=Pf(t.id);if(!Number.isFinite(n))return;e[t.id]=n}const t=Object.values(e).reduce((e,t)=>e+t,0);if(t<=0)return;const n={};let s=0;df.people.forEach(r=>{const i=function(e,t){const n={};let s=e,r=!1;for(const i of df.spending){const o="personal"===i.kind?i.target:Vf(e,t,i.target),a=Math.max(0,Math.min(s,o));o-a>1&&(r=!0),n[i.id]=a,s-=a}return{spending:n,forbrug:Math.max(0,Math.round(s)),hasShortfall:r}}(e[r.id],t);n[r.id]=i,s+=i.forbrug,Mf(r.id,i)});const r=df.spending.reduce((e,t)=>e+("personal"===t.kind?t.target*df.people.length:t.target),0),i=Math.max(0,Math.round(r-t));Hd.textContent=If(s),ff={perPerson:n,totalRest:s},Uf(i),0===i&&window.matchMedia("(max-width: 639px)").matches&&requestAnimationFrame(()=>{zd.scrollIntoView({behavior:"smooth",block:"start"})})}),Gd.addEventListener("click",function(){Fd.querySelectorAll("[data-person-income]").forEach(e=>{e.value=""}),ff=null,Hd.textContent="—",Uf(0),Bf()}),Wd.addEventListener("click",function(){if(!ff||!df.people.length)return;const e=[...df.spending.map(e=>({label:e.label,key:e.id,kind:"spending"})),{label:bd,kind:"forbrug",separator:!0}],t=40,n=28,s=460,r="600 30px -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",i=104+44*e.length+10,o=80+df.people.length*(i+16)+104,a=document.createElement("canvas");a.width=1080,a.height=2*o;const c=a.getContext("2d");c.scale(2,2);const u={bg:"#ffffff",border:"#e2e8f0",separator:"#e2e8f0",label:"#475569",amount:"#0f172a"},l={bg:"#ffffff",border:"#e2e8f0",header:"#059669",amount:"#059669"};c.fillStyle="#f8fafc",c.fillRect(0,0,540,o);let h=t;function d(e,n){c.fillStyle=n.bg,c.strokeStyle=n.border,c.lineWidth=1,function(e,t,n,s,r,i){e.beginPath(),e.moveTo(t+i,n),e.lineTo(t+s-i,n),e.quadraticCurveTo(t+s,n,t+s,n+i),e.lineTo(t+s,n+r-i),e.quadraticCurveTo(t+s,n+r,t+s-i,n+r),e.lineTo(t+i,n+r),e.quadraticCurveTo(t,n+r,t,n+r-i),e.lineTo(t,n+i),e.quadraticCurveTo(t,n,t+i,n),e.closePath()}(c,t,h,s,e,20),c.fill(),c.stroke()}df.people.forEach((t,s)=>{!function(t,s,o){const a={...u,header:o.canvas,forbrug:o.canvas};d(i,a);let l=h+n;c.fillStyle=a.header,c.font=r,c.textAlign="left",c.textBaseline="middle",c.fillText(t,68,l+24),l+=48,e.forEach(e=>{e.separator&&(l+=5,c.strokeStyle=a.separator,c.beginPath(),c.moveTo(68,l),c.lineTo(472,l),c.stroke(),l+=5);const t=l+22;c.fillStyle=a.label,c.font="28px -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",c.textAlign="left",c.fillText(e.label,68,t);const n="forbrug"===e.kind;c.fillStyle=n?a.forbrug:a.amount,c.font=n?"600 28px -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif":"500 28px -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",c.textAlign="right",c.fillText(If(function(e,t){return"spending"===e.kind?t.spending[e.key]:t.forbrug}(e,s)),472,t),l+=44}),h+=i+16}(t.name,ff.perPerson[t.id],kf(s))}),d(104,l);const f=h+n+24;c.font=r,c.fillStyle=l.header,c.textAlign="left",c.textBaseline="middle",c.fillText("Overskud",68,f),c.font="600 32px -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",c.fillStyle=l.amount,c.textAlign="right",c.fillText(If(ff.totalRest),472,f),a.toBlob(async e=>{const t=new File([e],"budget.png",{type:"image/png"});if(Jf()&&navigator.canShare({files:[t]}))try{return void await navigator.share({files:[t]})}catch(e){if(e&&"AbortError"===e.name)return}const n=URL.createObjectURL(e),s=document.createElement("a");s.href=n,s.download="budget.png",document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(n)},"image/png")}),Ad.addEventListener("click",()=>bf("main")),Nd.addEventListener("click",()=>bf("config")),Dd.addEventListener("click",()=>bf("more")),Pd.addEventListener("click",()=>{_f<xd.length-1?(_f+=1,Ef()):Tf()}),Od.addEventListener("click",()=>{_f>0&&(_f-=1,Ef())}),Ld.addEventListener("click",Tf),document.addEventListener("keydown",e=>{"Escape"!==e.key||Rd.classList.contains("hidden")||Tf()}),Yd.addEventListener("click",function(){const e=document.createElement("template");e.innerHTML=jf({id:Cf(),name:""}),Xd.appendChild(e.content.firstElementChild)}),ef.addEventListener("click",function(){const e=document.createElement("template");e.innerHTML=qf({id:Cf(),label:"",target:"",kind:"shared"}),Zd.appendChild(e.content.firstElementChild)}),tf.addEventListener("click",async function(){tf.disabled=!0,tf.textContent="Gemmer...";try{const t=function(){const e={};return Fd.querySelectorAll("[data-person-income]").forEach(t=>{e[t.dataset.personIncome]=t.value}),e}(),n=Array.from(Xd.querySelectorAll("[data-people-row]")).map(e=>({id:e.dataset.id,name:e.querySelector('[data-field="name"]').value.trim()})).filter(e=>e.name),s=Array.from(Zd.querySelectorAll("[data-row]")).map(e=>{const t=e.querySelector('[data-field="label"]').value.trim(),n=e.querySelector('[data-field="target"]').value,s=parseFloat(n),r="personal"===e.querySelector('[data-field="kind"]').value?"personal":"shared";return{id:e.dataset.id,label:t,target:s,kind:r}}).filter(e=>e.label&&Number.isFinite(e.target));if(df={people:n,spending:s},!yf())return await Hf(),tf.textContent="Gem",void(tf.disabled=!1);await async function(){Df(df),hf&&md&&await Rf(hf.uid,df)}(),$f(),zf(),Of(),(e=t)&&Object.entries(e).forEach(([e,t])=>{const n=Fd.querySelector(`[data-person-income="${e}"]`);n&&(n.value=t)}),xf(),Hd.textContent="—",ff=null,Uf(0),Bf(),Wf(),tf.textContent="Gemt",setTimeout(()=>bf("main"),600)}catch(e){console.error("Save failed",e),tf.textContent="Fejl"}var e;setTimeout(()=>{tf.textContent="Gem",tf.disabled=!1},1500)}),Xd.addEventListener("click",e=>{const t=e.target.closest('[data-action="delete-person"]');t&&t.closest("[data-people-row]")?.remove()}),Zd.addEventListener("click",e=>{const t=e.target.closest('[data-action="delete"]');t&&t.closest("[data-row]")?.remove()}),Vd.addEventListener("click",Qf),Ud.addEventListener("click",function(){localStorage.setItem(vd,"local"),Gf(Nf()),Kf(),bf(vf())}),of.addEventListener("click",async()=>{confirm("Sletter al lokal data. Er du sikker?")&&(await Hf(),Kf())}),af.addEventListener("click",async function(){if(!gd?.currentUser)return;if(!confirm("Sletter din konto og al data. Dette kan ikke fortrydes. Er du sikker?"))return;const e=gd.currentUser;try{await(t=Ah(md,"users",e.uid),dd(Vr(t.firestore,Lh),[new Aa(t._key,ga.none())]))}catch(e){console.error("Could not delete Firestore document",e)}var t;try{await kn(e)}catch(t){if("auth/requires-recent-login"!==t?.code)return console.error("Delete failed",t),void alert("Kunne ikke slette kontoen.");try{await async function(e,t,n){const s=_(e);if(Pe(s.auth.app))return Promise.reject(st(s.auth,"operation-not-supported-in-this-environment"));ot(s.auth,t,mn);const r=Qn(s.auth,n);return new ns(s.auth,"reauthViaPopup",t,r,s).executeNotNull()}(e,new wn),await kn(e)}catch(e){return console.error("Reauth failed",e),void alert("Kunne ikke slette kontoen. Prøv at logge ud og ind igen.")}}localStorage.removeItem(yd),mf()}),pd?(sf.addEventListener("click",Qf),rf.addEventListener("click",()=>{mf(),uf(),Cn(gd).catch(e=>{console.error("Sign-out failed",e),lf()})}),gf()||(Vd.disabled=!1),function(e,t,n,s){_(e).onAuthStateChanged(t,n,s)}(gd,async function(e){try{e&&mf(),hf=e,Kf();const t=Nf();if(e){Gf(t),bf(vf());const n=await async function(e){const t=await ld(Ah(md,"users",e));return t.exists()?Af(t.data()):null}(e.uid);n?Gf(n):t&&(df=t,await Rf(e.uid,df)),Df(df)}else gf()?(Gf(t),bf(vf())):(Gf(null),bf(vf()))}catch(e){console.error("Auth change handling failed",e)}})):(Vd.disabled=!0,Vd.classList.add("opacity-40","pointer-events-none"),Kf(),gf()?(Gf(Nf()),bf(vf())):bf("welcome"));
