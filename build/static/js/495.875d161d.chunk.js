"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[495],{7495:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var a=t(9439),l=t(2791),o=t(8087),s=t(9201),i=t(184),r=(0,s.Z)((0,i.jsx)("path",{d:"M7 6h10l-5.01 6.3L7 6zm-2.75-.39C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61z"}),"FilterAltOutlined"),c=t(8820),d=(0,s.Z)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),"Info"),u=t(5397),h=(t(8689),t(142)),f=t(4093),m=t(7027),x=t(9657),p=t(1413),j=t(2911),v=t(8005),b=function(e){var n=(0,j.k6)(),t=(0,l.useState)({fullName:"",address:""}),o=(0,a.Z)(t,2),s=o[0],r=o[1];return(0,l.useEffect)((function(){}),[]),(0,i.jsxs)("div",{className:"w-full pt-0",children:[(0,i.jsx)("h1",{className:"font-roboto text-black text-[24px] pb-4",children:"Ulanyjy maglumat d\xf6retmek"}),(0,i.jsx)("div",{className:"my-3",children:(0,i.jsx)(f.Z,{className:"h-[42px] font-roboto w-full",id:"outlined-basic",label:"Doly ady",variant:"outlined",size:"small",value:s.fullName,onChange:function(e){return r((0,p.Z)((0,p.Z)({},s),{},{fullName:e.target.value}))}})}),(0,i.jsx)("div",{className:"my-3",children:(0,i.jsx)(f.Z,{className:"h-[42px] font-roboto w-full",id:"outlined-basic",label:"Salgysy",variant:"outlined",size:"small",type:"text",value:s.address,onChange:function(e){return r((0,p.Z)((0,p.Z)({},s),{},{address:e.target.value}))}})}),(0,i.jsxs)("div",{className:"w-full inline-flex justify-end mt-10",children:[(0,i.jsx)("div",{className:"mr-4",children:(0,i.jsx)(h.Z,{onClick:function(){return e.onClose()},color:"error",variant:"outlined",children:"Go\xfdbolsun et"})}),(0,i.jsx)("div",{className:"mr-0",children:(0,i.jsx)(h.Z,{onClick:function(){return console.log(s),void(s.fullName.length>0&&s.address.length>0?v.b.post("/api/user/create",s).then((function(t){console.log(t.data),t.data?(m.ZP.success("Ustunlikli!"),n.push({pathname:"/create/"+t.data.id}),r({fullName:"",address:""}),e.onClose()):m.ZP.warning("Network error!")})).catch((function(e){console.log(e)})):m.ZP.warning("Maglumatlary Doly girizin!"))},variant:"outlined",children:"D\xf6ret"})})]})]})},y=l.memo(b),N=function(){var e=(0,j.k6)(),n=(0,l.useState)(!1),t=(0,a.Z)(n,2),s=t[0],p=t[1],b=(0,l.useState)(!1),N=(0,a.Z)(b,2),g=N[0],Z=N[1],k=(0,l.useState)(),w=(0,a.Z)(k,2),C=(w[0],w[1],(0,l.useState)([])),S=(0,a.Z)(C,2),z=S[0],I=S[1],U=(0,l.useState)([]),P=(0,a.Z)(U,2),D=(P[0],P[1],(0,l.useState)("")),E=(0,a.Z)(D,2),M=E[0],O=E[1],T=(0,l.useState)({password:"",username:"",firstname:"",phone:"",EmployeeStatusId:0,StoreId:0}),A=(0,a.Z)(T,2),F=A[0],G=A[1],H=(0,l.useState)([]),J=(0,a.Z)(H,2);J[0],J[1];(0,l.useEffect)((function(){L()}),[]);var L=function(){console.log(M),v.b.get("/api/user/all",{params:{filter:M}}).then((function(e){console.log(e.data),I(e.data)})).catch((function(e){console.log(e)}))},B=function(){L()};return(0,i.jsxs)("div",{className:"w-full bg-background min-h-[100vh] pt-8 pb-8",children:[(0,i.jsx)(x.Z,{className:"font-roboto",width:700,open:s,onCancel:function(){return p(!1)},footer:!1,children:(0,i.jsx)("div",{className:"bg-white",children:(0,i.jsx)(y,{getEmployess:L,onClose:function(){return p(!1)}})})}),(0,i.jsx)(x.Z,{className:"font-roboto",width:700,open:g,onCancel:function(){return Z(!1)},footer:!1,children:(0,i.jsxs)("div",{className:"bg-white",children:[(0,i.jsx)("h1",{className:"font-roboto text-black text-[24px] pb-4",children:"Ulanyjy maglumatyny \xfc\xe7\xfcrmek!"}),(0,i.jsxs)("div",{className:"w-full inline-flex justify-end mt-10",children:[(0,i.jsx)("div",{className:"mr-4",children:(0,i.jsx)(h.Z,{onClick:function(){return Z(!1)},color:"error",variant:"outlined",children:"Go\xfdbolsun et"})}),(0,i.jsx)("div",{className:"mr-0",children:(0,i.jsx)(h.Z,{onClick:function(){v.b.delete("/api/user/destroy/"+(null===F||void 0===F?void 0:F.id)).then((function(e){m.ZP.success("\xd6\xe7\xfcrildi!"),L(),Z(!1)})).catch((function(e){console.log(e)}))},variant:"outlined",children:"\xdc\xe7\xfcr"})})]})]})}),(0,i.jsxs)("div",{className:"w-[95%] mx-auto",children:[(0,i.jsxs)("div",{className:"w-[100%]  py-4  m-auto inline-flex justify-between",children:[(0,i.jsx)("h5",{className:"text-[24px] leading-[42px] text-black font-[500] font-roboto whitespace-nowrap",children:"Ulanyjylar"}),(0,i.jsx)(h.Z,{onClick:function(){return p(!0)},startIcon:(0,i.jsx)(o.Z,{}),variant:"contained",className:"h-[42px] !text-[12px] bg-primary-light font-roboto",children:"T\xe4ze go\u015f"})]}),(0,i.jsxs)("div",{className:"w-[100%]  bg-white px-4 py-4  m-auto inline-flex justify-between",children:[(0,i.jsx)("div",{className:"inline-flex justify-start",children:(0,i.jsx)("div",{className:"mr-4",children:(0,i.jsx)(f.Z,{className:"h-[42px] font-roboto",id:"outlined-basic",label:"  Ulanyjy ady",variant:"outlined",size:"small",value:M,onChange:function(e){return O(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&B()}})})}),(0,i.jsx)(h.Z,{startIcon:(0,i.jsx)(r,{}),variant:"contained",className:"h-[42px] !text-[12px] bg-primary-light font-roboto",onClick:function(){return B()},children:"Filter"})]})]}),(0,i.jsx)("div",{className:"w-[95%] mt-6 mx-auto bg-white",children:(0,i.jsxs)("table",{className:"w-full border-collapse ",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{className:"border-b-2",children:[(0,i.jsx)("th",{className:"py-4 px-5 font-roboto",children:"Ulanyjy ady"}),(0,i.jsx)("th",{className:"py-4 px-5 font-roboto",children:"Salgysy"}),(0,i.jsx)("th",{className:"py-4 px-5 font-roboto",children:"Telefon"}),(0,i.jsx)("th",{className:"py-4 px-5 font-roboto",children:"Hereketler"})]})}),(0,i.jsx)("tbody",{children:null===z||void 0===z?void 0:z.map((function(n){var t;return(0,i.jsxs)("tr",{className:"border-b-2",children:[(0,i.jsx)("td",{className:"py-4 px-5 font-roboto",children:null===n||void 0===n?void 0:n.fullName}),(0,i.jsx)("td",{className:"py-4 px-5 font-roboto",children:null===n||void 0===n?void 0:n.address}),(0,i.jsx)("td",{className:"py-4 px-5 font-roboto",children:null===n||void 0===n||null===(t=n.Phones)||void 0===t?void 0:t.map((function(e){return(0,i.jsx)("p",{children:null===e||void 0===e?void 0:e.phone})}))}),(0,i.jsxs)("td",{className:"py-4 px-5 font-roboto text-primary-dark cursor-pointer",children:[(0,i.jsx)(c.Z,{onClick:function(){e.push({pathname:"/create/"+(null===n||void 0===n?void 0:n.id)})}})," ",(0,i.jsx)(d,{onClick:function(){e.push({pathname:"/user/"+(null===n||void 0===n?void 0:n.id)})}}),(0,i.jsx)(u.Z,{className:"text-red",onClick:function(){Z(!0),G(n)}})]})]})}))})]})})]})},g=l.memo(N)},8005:function(e,n,t){t.d(n,{b:function(){return a}});var a=t(3263).Z.create({baseURL:"http://localhost:3333",timeout:1e7,headers:{Authorization:"Bearer "+function(){if(JSON.parse(localStorage.getItem("userData")))return JSON.parse(localStorage.getItem("userData")).token}(),"Content-Type":"application/json"}})},8689:function(){}}]);
//# sourceMappingURL=495.875d161d.chunk.js.map