import{j as e}from"./jsx-runtime-ccada58e.js";function o({tokens:n,hasRemValue:i=!1,hasExampleFonts:d=!1}){return e.jsxs("table",{className:"tokens-grid",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Value"}),i&&e.jsx("th",{children:"Pixels"}),d&&e.jsx("th",{children:"Example"})]})}),e.jsx("tbody",{children:Object.entries(n).map(([s,r])=>e.jsxs("tr",{children:[e.jsx("td",{children:s}),e.jsx("td",{children:r==null?void 0:r.replace(/rem|px|vw|vh/gi,` ${r==null?void 0:r.replace(/\d|\.|,/g,"")}`)}),i&&e.jsxs("td",{children:[Number(r==null?void 0:r.replace(/rem|px|vw|vh/gi,""))*16," px"]}),d&&e.jsx("td",{style:(()=>{const t={fontFamily:"sans-serif",fontWeight:"400"};return s.match(/default|code/)&&(t.fontFamily=r),s.match(/regular|medium|bold/)&&(t.fontWeight=r),{...t}})(),children:"Design System"})]},s))})]})}try{o.displayName="TokensGrid",o.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},hasRemValue:{defaultValue:{value:"false"},description:"",name:"hasRemValue",required:!1,type:{name:"boolean"}},hasExampleFonts:{defaultValue:{value:"false"},description:"",name:"hasExampleFonts",required:!1,type:{name:"boolean"}}}}}catch{}export{o as T};
//# sourceMappingURL=TokensGrid-3df398cb.js.map