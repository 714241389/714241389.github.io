var le=Object.defineProperty,ce=Object.defineProperties;var de=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var G=(e,t,r)=>t in e?le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,n=(e,t)=>{for(var r in t||(t={}))se.call(t,r)&&G(e,r,t[r]);if(j)for(var r of j(t))ue.call(t,r)&&G(e,r,t[r]);return e},S=(e,t)=>ce(e,de(t));import{c as T,d as o,m as v,q as k,z as ge,g as I,o as pe,i as Z,M as fe,k as h,a as z,b as V,e as J,S as Q,l as O,u as ee,W as te,V as he,L as W,X as me,Y as re,Z as oe}from"./index.56433eb2.js";import{g as _,a as w,d,s as C,h as P,c as b,j as be,b as D,B as U}from"./Button.8c3124fe.js";import{T as ae}from"./TextField.73c23d88.js";import{c as E,A as ve,T as Ce,P as xe}from"./Popover.4a294154.js";import{T as F,C as N,a as R,L as M,b as H,M as $e}from"./CardContent.d958f1ce.js";import{L as ke,C as ye}from"./CardActions.757de529.js";import{u as ie}from"./solid.4b4bed56.js";import"./isHostComponent.9ebad583.js";import"./getDeviceId.e8f3946a.js";function Ie(e){return w("MuiFab",e)}const q=_("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),Re=T()({name:"MuiFab",propDefaults:({set:e})=>e({color:"default",component:"button",disabled:!1,disableFocusRipple:!1,size:"large",variant:"circular"}),selfPropNames:["children","classes","color","disableFocusRipple","disableRipple","disabled","href","size","variant"],utilityClass:Ie,slotClasses:e=>({root:["root",e.variant,`size${d(e.size)}`,e.color==="inherit"?"colorInherit":e.color]})}),ze=C(P,{name:"MuiFab",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`size${d(r.size)}`],r.color==="inherit"&&t.colorInherit,t[d(r.size)],t[r.color]]}})(({theme:e,ownerState:t})=>n(n(n(n(n(n(S(n({},e.typography.button),{minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},textDecoration:"none"},[`&.${q.focusVisible}`]:{boxShadow:e.shadows[6]},[`&.${q.disabled}`]:{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),t.size==="small"&&{width:40,height:40}),t.size==="medium"&&{width:48,height:48}),t.variant==="extended"&&{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48}),t.variant==="extended"&&t.size==="small"&&{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34}),t.variant==="extended"&&t.size==="medium"&&{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40}),t.color==="inherit"&&{color:"inherit"}),({theme:e,ownerState:t})=>n({},t.color!=="inherit"&&t.color!=="default"&&e.palette[t.color]!=null&&{color:e.palette[t.color].contrastText,backgroundColor:e.palette[t.color].main,"&:hover":{backgroundColor:e.palette[t.color].dark,"@media (hover: none)":{backgroundColor:e.palette[t.color].main}}})),De=Re.component(function({allProps:t,classes:r,otherProps:i,props:a}){return o(ze,v({get className(){return b(r.root,i.className)},get disabled(){return a.disabled},get focusRipple(){return!a.disableFocusRipple},get focusVisibleClassName(){var s;return b((s=a.classes)==null?void 0:s.focusVisible,i.focusVisibleClassName)},ownerState:t},i,{get children(){return a.children}}))}),Ae=k('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),Ne=k('<svg><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>',4,!0);var Me=E(()=>[Ae.cloneNode(!0),Ne.cloneNode(!0)],"Add");const Le=k('<svg><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>',4,!0);var Te=E(()=>Le.cloneNode(!0),"Person");function Oe(e){return w("MuiAvatar",e)}_("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const B=T()({name:"MuiAvatar",selfPropNames:["alt","children","classes","imgProps","sizes","src","srcSet","variant"],utilityClass:Oe,slotClasses:e=>({root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]})}),_e=C("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})(({theme:e,ownerState:t})=>n(n(n({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},t.variant==="rounded"&&{borderRadius:e.shape.borderRadius}),t.variant==="square"&&{borderRadius:0}),t.colorDefault&&{color:e.palette.background.default,backgroundColor:e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[600]})),we=C("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:"10000"}),Fe=C(Te,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});function Ve(e){let t=!0;const[r,i]=I(!1);return pe(()=>{t=!1}),Z(fe(()=>[e.crossOrigin,e.referrerPolicy,e.src,e.srcSet],()=>{if(!e.src&&!e.srcSet)return;i(!1);const a=new Image;a.onload=()=>{!t||i("loaded")},a.onerror=()=>{!t||i("error")},a.crossOrigin=e.crossOrigin,a.referrerPolicy=e.referrerPolicy,a.src=e.src,e.srcSet&&(a.srcset=e.srcSet)})),r}const L=B.defineComponent(function(t){const r=B.useThemeProps({props:t}),[,i]=ge(r,["alt","children","className","component","imgProps","sizes","src","srcSet","variant"]),a=v({component:"div",variant:"circular"},r),s=Ve(v(()=>r.imgProps||{},{get src(){return r.src},get srcSet(){return r.srcSet}})),u=()=>r.src||r.srcSet,g=()=>u()&&s()!=="error",p=v(r,{get colorDefault(){return!g()},get component(){return a.component},get variant(){return a.variant}}),f=B.useClasses(p);return o(_e,v({get component(){return a.component},ownerState:p,get className(){return b(f.root,r.className)}},i,{children:()=>{if(g())return o(we,v({get alt(){return r.alt},get src(){return r.src},get srcSet(){return r.srcSet},get sizes(){return r.sizes},ownerState:p,get className(){return f.img}},()=>r.imgProps||{}));const x=r.children;return x!=null?x:u()&&r.alt?r.alt[0]:o(Fe,{get className(){return f.fallback}})}}))}),We=k('<svg><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></svg>',4,!0);var Be=E(()=>We.cloneNode(!0),"Cancel");function Pe(e){return w("MuiChip",e)}const c=_("MuiChip",["root","sizeSmall","sizeMedium","colorPrimary","colorSecondary","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","focusVisible"]),Ue=T()({name:"MuiChip",propDefaults:({set:e})=>e({color:"default",disabled:!1,size:"medium",variant:"filled"}),selfPropNames:["avatar","children","classes","clickable","color","deleteIcon","disabled","icon","label","onDelete","size","variant"],utilityClass:Pe,slotClasses:e=>({root:["root",e.variant,e.disabled&&"disabled",`size${d(e.size)}`,`color${d(e.color)}`,!!e.clickable&&"clickable",!!e.clickable&&`clickableColor${d(e.color)}`,!!e.onDelete&&"deletable",!!e.onDelete&&`deletableColor${d(e.color)}`,`${e.variant}${d(e.color)}`],label:["label",`label${d(e.size)}`],avatar:["avatar",`avatar${d(e.size)}`,`avatarColor${d(e.color)}`],icon:["icon",`icon${d(e.size)}`,`iconColor${d(e.color)}`],deleteIcon:["deleteIcon",`deleteIcon${d(e.size)}`,`deleteIconColor${d(e.color)}`,`deleteIconOutlinedColor${d(e.color)}`]})}),Ee=C("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e,{color:i,clickable:a,onDelete:s,size:u,variant:g}=r;return[{[`& .${c.avatar}`]:t.avatar},{[`& .${c.avatar}`]:t[`avatar${d(u)}`]},{[`& .${c.avatar}`]:t[`avatarColor${d(i)}`]},{[`& .${c.icon}`]:t.icon},{[`& .${c.icon}`]:t[`icon${d(u)}`]},{[`& .${c.icon}`]:t[`iconColor${d(i)}`]},{[`& .${c.deleteIcon}`]:t.deleteIcon},{[`& .${c.deleteIcon}`]:t[`deleteIcon${d(u)}`]},{[`& .${c.deleteIcon}`]:t[`deleteIconColor${d(i)}`]},{[`& .${c.deleteIcon}`]:t[`deleteIconOutlinedColor${d(i)}`]},t.root,t[`size${d(u)}`],t[`color${d(i)}`],a&&t.clickable,a&&i!=="default"&&t[`clickableColor${d(i)})`],s&&t.deletable,s&&i!=="default"&&t[`deletableColor${d(i)}`],t[g],g==="outlined"&&t[`outlined${d(i)}`]]}})(({theme:e,ownerState:t})=>{const r=h(e.palette.text.primary,.26);return n(n(n(n({maxWidth:"100%",fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.text.primary,backgroundColor:e.palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${c.disabled}`]:{opacity:e.palette.action.disabledOpacity,pointerEvents:"none"},[`& .${c.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.palette.mode==="light"?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},[`& .${c.avatarColorPrimary}`]:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},[`& .${c.avatarColorSecondary}`]:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},[`& .${c.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${c.icon}`]:n(n({color:e.palette.mode==="light"?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},t.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4}),t.color!=="default"&&{color:"inherit"}),[`& .${c.deleteIcon}`]:n(n({WebkitTapHighlightColor:"transparent",color:r,fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:h(r,.4)}},t.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4}),t.color!=="default"&&{color:h(e.palette[t.color].contrastText,.7),"&:hover, &:active":{color:e.palette[t.color].contrastText}})},t.size==="small"&&{height:24}),t.color!=="default"&&{backgroundColor:e.palette[t.color].main,color:e.palette[t.color].contrastText}),t.onDelete&&{[`&.${c.focusVisible}`]:{backgroundColor:h(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}}),t.onDelete&&t.color!=="default"&&{[`&.${c.focusVisible}`]:{backgroundColor:e.palette[t.color].dark}})},({theme:e,ownerState:t})=>n(n({},t.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:h(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)},[`&.${c.focusVisible}`]:{backgroundColor:h(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},"&:active":{boxShadow:e.shadows[1]}}),t.clickable&&t.color!=="default"&&{[`&:hover, &.${c.focusVisible}`]:{backgroundColor:e.palette[t.color].dark}}),({theme:e,ownerState:t})=>n(n({},t.variant==="outlined"&&{backgroundColor:"transparent",border:`1px solid ${e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${c.clickable}:hover`]:{backgroundColor:e.palette.action.hover},[`&.${c.focusVisible}`]:{backgroundColor:e.palette.action.focus},[`& .${c.avatar}`]:{marginLeft:4},[`& .${c.avatarSmall}`]:{marginLeft:2},[`& .${c.icon}`]:{marginLeft:4},[`& .${c.iconSmall}`]:{marginLeft:2},[`& .${c.deleteIcon}`]:{marginRight:5},[`& .${c.deleteIconSmall}`]:{marginRight:3}}),t.variant==="outlined"&&t.color!=="default"&&{color:e.palette[t.color].main,border:`1px solid ${h(e.palette[t.color].main,.7)}`,[`&.${c.clickable}:hover`]:{backgroundColor:h(e.palette[t.color].main,e.palette.action.hoverOpacity)},[`&.${c.focusVisible}`]:{backgroundColor:h(e.palette[t.color].main,e.palette.action.focusOpacity)},[`& .${c.deleteIcon}`]:{color:h(e.palette[t.color].main,.7),"&:hover, &:active":{color:e.palette[t.color].main}}})),He=C("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,t)=>{const{ownerState:r}=e,{size:i}=r;return[t.label,t[`label${d(i)}`]]}})(({ownerState:e})=>n({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},e.size==="small"&&{paddingLeft:8,paddingRight:8}));function Y(e){return e.key==="Backspace"||e.key==="Delete"}const Ke=Ue.component(function({allProps:t,classes:r,otherProps:i,props:a}){const s=be(i),u=l=>{var K;l.stopPropagation(),(K=a.onDelete)==null||K.call(a)},g=l=>{l.currentTarget===l.target&&Y(l)&&l.preventDefault(),typeof i.onKeyDown=="function"&&i.onKeyDown(l)},p=l=>{l.currentTarget===l.target&&(a.onDelete&&Y(l)?a.onDelete():l.key==="Escape"&&s.ref&&s.ref.blur()),typeof i.onKeyUp=="function"&&i.onKeyUp(l)},f=()=>a.clickable!==!1&&i.onClick?!0:a.clickable,y=()=>f()||a.onDelete?P:i.component||"div",x=z(()=>y()===P?n({component:i.component||"div"},a.onDelete&&{disableRipple:!0}):{}),m=z(()=>{if(!a.onDelete)return;const l=V(()=>a.deleteIcon)();if(l&&l instanceof Element)l.setAttribute("class",b(l.getAttribute("class"),r.deleteIcon)),(l instanceof SVGElement||l instanceof HTMLElement)&&(l.onclick=u);else return o(Be,{get className(){return r.deleteIcon},onClick:u})}),$=z(()=>{const l=V(()=>a.avatar)();return l&&l instanceof Element&&l.setAttribute("class",b(l.getAttribute("class"),r.avatar)),l}),ne=z(()=>{const l=V(()=>a.icon)();return l&&l instanceof Element&&l.setAttribute("class",b(l.getAttribute("class"),r.icon)),l});return o(Ee,v({get as(){return y()},get className(){return b(r.root,i.className)},get disabled(){return f()&&a.disabled?!0:void 0},get onClick(){return i.onClick},onKeyDown:g,onKeyUp:p,ref:s,ownerState:t},x,i,{get children(){return[J(()=>$()||ne()),o(He,{get className(){return b(r.label)},ownerState:t,get children(){return a.label}}),m]}}))});function je(e){return w("MuiDivider",e)}_("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const Ge=T()({name:"MuiDivider",selfPropNames:["absolute","children","classes","flexItem","light","orientation","textAlign","variant"],propDefaults:({set:e,inProps:t})=>e({absolute:!1,get component(){return t.children?"div":"hr"},flexItem:!1,light:!1,orientation:"horizontal",get role(){return t.component!=="hr"?"separator":void 0},textAlign:"center",variant:"fullWidth"}),utilityClass:je,slotClasses:e=>({root:["root",e.absolute&&"absolute",e.variant,e.light&&"light",e.orientation==="vertical"&&"vertical",e.flexItem&&"flexItem",!!e.children&&"withChildren",!!e.children&&e.orientation==="vertical"&&"withChildrenVertical",e.textAlign==="right"&&e.orientation!=="vertical"&&"textAlignRight",e.textAlign==="left"&&e.orientation!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",e.orientation==="vertical"&&"wrapperVertical"]})}),Se=C("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,r.orientation==="vertical"&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&r.orientation==="vertical"&&t.withChildrenVertical,r.textAlign==="right"&&r.orientation!=="vertical"&&t.textAlignRight,r.textAlign==="left"&&r.orientation!=="vertical"&&t.textAlignLeft]}})(({theme:e,ownerState:t})=>n(n(n(n(n(n(n({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:e.palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"}),t.light&&{borderColor:h(e.palette.divider,.08)}),t.variant==="inset"&&{marginLeft:72}),t.variant==="middle"&&t.orientation==="horizontal"&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)}),t.variant==="middle"&&t.orientation==="vertical"&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)}),t.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"}),t.flexItem&&{alignSelf:"stretch",height:"auto"}),({theme:e,ownerState:t})=>n({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${e.palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}}),({theme:e,ownerState:t})=>n({},t.children&&t.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${e.palette.divider}`,transform:"translateX(0%)"}}),({ownerState:e})=>n(n({},e.textAlign==="right"&&e.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}}),e.textAlign==="left"&&e.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),qe=C("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.wrapper,r.orientation==="vertical"&&t.wrapperVertical]}})(({theme:e,ownerState:t})=>n({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},t.orientation==="vertical"&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})),Ye=Ge.component(function({allProps:t,otherProps:r,classes:i}){return o(Se,v({get role(){return t.role}},r,{ownerState:t,get className(){return b(i.root,t.className)},get children(){return o(Q,{get when(){return t.children},get children(){return o(qe,{get className(){return i.wrapper},ownerState:t,get children(){return t.children}})}})}}))}),Xe=k("<br>"),X=k("<div></div>"),A=(e,t)=>{if(t){e+="?";for(const r in t)e+=`${encodeURIComponent(r)}=${encodeURIComponent(t[r])}`}return e},Ze=()=>{const e=O(),t=ee(),[r,i]=I(!1),a=e.user();let s;const u=async()=>{await e.signOut(),t(A("/login",{next:"/"}))};return[o(U,{variant:"contained",size:"small",onClick:()=>i(!0),ref(g){const p=s;typeof p=="function"?p(g):s=g},disableElevation:!0,disableRipple:!0,sx:{padding:0,minWidth:"25px"},get children(){return o(re,{get fallback(){return o(L,{children:"?"})},get children(){return o(oe,{get when(){return a==null?void 0:a.user_metadata.avatar_url},get children(){return o(L,{get src(){return a==null?void 0:a.user_metadata.avatar_url}})}})}})}}),o(xe,{anchorOrigin:{vertical:"bottom",horizontal:"left"},get open(){return r()},onClose:()=>i(!1),anchorEl:s,get children(){return o(N,{get children(){return[o(R,{sx:{padding:0},style:"padding: 0;",get children(){return o(F,{sx:{padding:0},get children(){return o(M,{sx:{padding:0},get children(){return[o(H,{sx:{padding:0},get children(){return["\u7528\u6237ID:",Xe.cloneNode(!0),J(()=>a==null?void 0:a.id)]}}),o(Ye,{})]}})}})}}),o(R,{sx:{padding:0},style:"padding:10px",get children(){return o(U,{color:"error",variant:"contained",size:"small",sx:{ml:"35%"},onClick:u,children:"SIGN OUT"})}})]}})}})]},Je=e=>{const t=O(),[r,i]=te(()=>e.owner_id,a=>{const s=t.user();return s&&s.id===a&&typeof s.user_metadata.name=="string"?s.user_metadata.name:a},{initialValue:"You"});return Z(()=>{i.refetch(e.owner_id)}),o(H,{divider:!0,onClick:()=>{e.onClick&&e.onClick({},e.room_id)},sx:{cursor:"pointer"},get children(){return o(ke,{get primary(){return o(F,{sx:{marginBottom:"8px"},get children(){return e.name}})},get secondary(){return o(Ke,{get icon(){return o(re,{get fallback(){return o(L,{children:"?"})},get children(){return o(oe,{get when(){var a;return(a=t.user())==null?void 0:a.user_metadata.avatar_url},get children(){return o(L,{sizes:"small",sx:{maxHeight:"24px",maxWidth:"24px"},get src(){var a;return(a=t.user())==null?void 0:a.user_metadata.avatar_url}})}})}})},get label(){return r()}})}})}})},Qe=e=>{const[t,r]=I(""),[i,a]=I(!1),s=ie(),u=O(),g=async()=>{if(a(!0),u.user()){const f=await s.createRoom(t());r(""),e.onRoomCreated(f)}else e.onSignInNeeded();a(!1)};return o($e,{get open(){return e.open},onClose:(p,f)=>e.onClose(p,f),get children(){return o(N,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:350,border:"0px solid #000",p:4,padding:"24px",paddingBottom:"8px"},get children(){return[o(R,{sx:{padding:0,marginBottom:"28px"},get children(){return[o(F,{variant:"h6",children:"New Room"}),o(M,{get children(){return o(H,{disablePadding:!0,get children(){return o(ae,{sx:{width:"100%"},label:"Name",variant:"standard",get disabled(){return i()},onChange:(p,f)=>r(f),get value(){return t()},children:" "})}})}})]}}),o(ye,{get children(){return[o(D,{sx:{width:"100%"}}),o(U,{sx:{width:"fit-content",paddingLeft:"24px",paddingRight:"24px"},onClick:async()=>{await g(),e.onClose({},"roomCreated")},get disabled(){return i()},get children(){return i()?"Creating...":"Create"}})]}})]}})}})},st=()=>{const e=O(),t=ee(),r=ie(),i=async()=>{if(e.user())return await r.getAllRooms();t(A("/login",{next:"/"}))},[a,{refetch:s}]=te(i,{initialValue:[]}),[u,g]=I(!1),p=()=>g(!0),f=()=>g(!1),y=()=>{t(A("/login",{next:"/"}))},x=(m,$)=>{t(`/rooms/${$}`)};return o(Q,{get when(){return e.user()},get fallback(){return o(he,{get href(){return A("/login",{next:"/"})}})},get children(){return[o(D,{sx:{flexGrow:1},get children(){return o(ve,{position:"static",get children(){return o(Ce,{get children(){return[o(F,{variant:"h6",component:"div",sx:{flexGrow:1},children:"\u753B\u677F"}),o(Ze,{})]}})}})}}),o(D,{sx:{right:40,position:"fixed",bottom:50,padding:0,paddingTop:0,zIndex:99},get children(){const m=X.cloneNode(!0);return W(m,o(De,{color:"primary","aria-label":"add",onClick:p,get children(){return o(Me,{})}}),null),W(m,o(Qe,{get open(){return u()},onClose:f,onRoomCreated:()=>s(),onSignInNeeded:y}),null),m}}),(()=>{const m=X.cloneNode(!0);return W(m,o(D,{sx:{ml:"50%",transform:"translate(-50%, 0)",padding:0,marginTop:"60px"},get children(){return[o(N,{sx:{minWidth:"120%",ml:"50%",transform:"translate(-50%,0)",width:"auto"},get children(){return o(R,{sx:{padding:0},style:"padding: 0;",get children(){return o(ae,{sx:{width:"100%"},placeholder:"\u623F\u95F4ID"})}})}}),o(N,{sx:{minWidth:"110%",ml:"50%",transform:"translate(-50%,0)",marginTop:"30px",width:"auto",height:"auto"},get children(){return o(R,{sx:{padding:0},style:"padding: 0;",get children(){return o(M,{sx:{padding:0},get children(){return o(me,{get each(){return a()},get fallback(){return o(M,{children:"No rooms here."})},children:$=>o(Je,{get owner_id(){return $.owner},get name(){return $.name},get room_id(){return $.id},onClick:x})})}})}})}})]}})),m})()]}})};export{st as default};
//# sourceMappingURL=index.9f69e52d.js.map
