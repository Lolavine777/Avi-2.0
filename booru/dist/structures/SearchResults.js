"use strict";var __importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var s={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(s[r]=t[r]);return s.default=t,s};Object.defineProperty(exports,"__esModule",{value:!0});const Utils=__importStar(require("../Utils"));class SearchResults extends Array{constructor(t,s,r,e){super(t.length);for(let s=0;s<t.length;s++)this[s]=t[s];this.tags=s,this.options=r,this.booru=e,this.page=r.page||0}get first(){return this[0]}get last(){return this[this.length-1]}nextPage(){const t=this.options;return t.page=this.page+1,this.booru.search(this.tags,t)}tagged(t,{invert:s=!1}={}){Array.isArray(t)||(t=[t]);const r=[];for(const e of this){const i=Utils.compareArrays(t,e.tags).length;(!s&&i>0||s&&0===i)&&r.push(e)}return new SearchResults(r,this.tags,this.options,this.booru)}blacklist(t){return this.tagged(t,{invert:!0})}}exports.default=SearchResults;