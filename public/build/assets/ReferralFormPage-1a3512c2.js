import{d as u,y as O,o as w,e as I,b as T,w as z,F as k,a as l,q as i,B as r,k as Z}from"./app-d29a1c54.js";import q from"./Layout-b7f944c2.js";import{E as G}from"./jspdf.es.min-3cebb56b.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-ee108f99.js";/* empty css                                                               */import"./DropdownLink-7a8a95ab.js";const J={__name:"ReferralFormPage",setup(K){const s=u(""),d=u(""),m=u(""),p=u(""),F=u(""),b=u(""),f=u(""),y=u(""),x=u(""),R=u(""),V=u(""),g=u(""),U=u(""),E=u(""),P=u(""),N=u(""),C=u(""),A=u(""),D=()=>{s.value="",d.value="",m.value="",p.value="",F.value="",b.value="",f.value="",y.value="",x.value="",R.value="",V.value="",g.value="",U.value="",E.value="",P.value="",N.value="",C.value="",A.value=""},o=t=>t?String(t):"N/A",B=()=>{const t=new G;let e=20;const a=(H,M,v,S={})=>(v>280&&(t.addPage(),v=20),t.text(H,M,v,S),v),n=(H,M,v,S)=>(t.splitTextToSize(H,S).forEach(L=>{v=a(L,M,v),v+=10}),v);t.setFont("helvetica","bold"),t.setFontSize(16),e=a("REFERRAL FORM",105,e,{align:"center"}),t.setFontSize(12),e+=20,e=a("Refer to",20,e),t.setFont("helvetica","bold"),e=a("Name of healthcare provider:",20,e+10),t.setFont("helvetica","normal"),e=a(o(s.value),90,e),t.setFont("helvetica","bold"),e=a("Specialty:",20,e+10),t.setFont("helvetica","normal"),e=a(o(d.value),90,e),t.setFont("helvetica","bold"),e=a("Email:",20,e+10),t.setFont("helvetica","normal"),e=a(o(m.value),90,e),t.setFont("helvetica","bold"),e=a("Preferred phone number:",20,e+10),t.setFont("helvetica","normal"),e=a(o(p.value),90,e),t.setFont("helvetica","bold"),e=a("Address:",20,e+10),t.setFont("helvetica","normal"),e=a(o(F.value),90,e),t.setFont("helvetica","bold"),e=a("City:",20,e+10),t.setFont("helvetica","normal"),e=a(o(b.value),90,e),t.setFont("helvetica","bold"),e=a("State:",20,e+10),t.setFont("helvetica","normal"),e=a(o(f.value),90,e),t.setFont("helvetica","bold"),e=a("Zip Code:",20,e+10),t.setFont("helvetica","normal"),e=a(o(y.value),90,e),e+=20,t.setFont("helvetica","bold"),e=a("Patient Information",20,e),t.text("First Name:",20,e+10),t.setFont("helvetica","normal"),e=a(o(x.value),90,e+10),t.setFont("helvetica","bold"),e=a("Last Name:",20,e+10),t.setFont("helvetica","normal"),e=a(o(R.value),90,e),t.setFont("helvetica","bold"),e=a("Date of Birth:",20,e+10),t.setFont("helvetica","normal"),e=a(o(V.value),90,e),t.setFont("helvetica","bold"),e=a("Email:",20,e+10),t.setFont("helvetica","normal"),e=a(o(g.value),90,e),t.setFont("helvetica","bold"),e=a("Preferred phone number:",20,e+10),t.setFont("helvetica","normal"),e=a(o(U.value),90,e),e+=20,t.setFont("helvetica","bold"),e=a("Diagnosis of referring healthcare practitioner:",20,e),t.setFont("helvetica","normal"),e=n(o(E.value),20,e+10,170),e+=10,t.setFont("helvetica","bold"),e=a("Medical History:",20,e),t.setFont("helvetica","normal"),e=n(o(P.value),20,e+10,170),e+=10,t.setFont("helvetica","bold"),e=a("Family History:",20,e),t.setFont("helvetica","normal"),e=n(o(N.value),20,e+10,170),e+=10,t.setFont("helvetica","bold"),e=a("Reason for Referral:",20,e),t.setFont("helvetica","normal"),e=n(o(C.value),20,e+10,170),e+=10,t.setFont("helvetica","bold"),e=a("Additional Comment:",20,e),t.setFont("helvetica","normal"),e=n(o(A.value),20,e+10,170),t.save("Medical_Referral_Form.pdf"),D()};return(t,e)=>{const a=O("Head");return w(),I(k,null,[T(a,{title:"Referral Form"}),T(q,null,{default:z(()=>[e[39]||(e[39]=l("div",{class:"page-heading"},[l("h1",{class:"main-heading"},"REFERRAL FORM")],-1)),l("form",{onSubmit:Z(B,["prevent"]),class:"form-container"},[e[36]||(e[36]=l("h2",{style:{"text-align":"center"}},"REFER TO",-1)),l("div",null,[e[18]||(e[18]=l("label",null,"Name of healthcare provider:",-1)),i(l("input",{"onUpdate:modelValue":e[0]||(e[0]=n=>s.value=n),type:"text"},null,512),[[r,s.value]])]),l("div",null,[e[19]||(e[19]=l("label",null,"Specialty:",-1)),i(l("input",{"onUpdate:modelValue":e[1]||(e[1]=n=>d.value=n),type:"text"},null,512),[[r,d.value]])]),l("div",null,[e[20]||(e[20]=l("label",null,"Email:",-1)),i(l("input",{"onUpdate:modelValue":e[2]||(e[2]=n=>m.value=n),type:"email"},null,512),[[r,m.value]])]),l("div",null,[e[21]||(e[21]=l("label",null,"Preferred phone number:",-1)),i(l("input",{"onUpdate:modelValue":e[3]||(e[3]=n=>p.value=n),type:"tel"},null,512),[[r,p.value]])]),l("div",null,[e[22]||(e[22]=l("label",null,"Address:",-1)),i(l("input",{"onUpdate:modelValue":e[4]||(e[4]=n=>F.value=n),type:"text"},null,512),[[r,F.value]])]),l("div",null,[e[23]||(e[23]=l("label",null,"City:",-1)),i(l("input",{"onUpdate:modelValue":e[5]||(e[5]=n=>b.value=n),type:"text"},null,512),[[r,b.value]])]),l("div",null,[e[24]||(e[24]=l("label",null,"State:",-1)),i(l("input",{"onUpdate:modelValue":e[6]||(e[6]=n=>f.value=n),type:"text"},null,512),[[r,f.value]])]),l("div",null,[e[25]||(e[25]=l("label",null,"Zip Code:",-1)),i(l("input",{"onUpdate:modelValue":e[7]||(e[7]=n=>y.value=n),type:"text"},null,512),[[r,y.value]])]),e[37]||(e[37]=l("h2",{style:{"text-align":"center"}},"PATIENT INFORMATION",-1)),l("div",null,[e[26]||(e[26]=l("label",null,"First Name:",-1)),i(l("input",{"onUpdate:modelValue":e[8]||(e[8]=n=>x.value=n),type:"text"},null,512),[[r,x.value]])]),l("div",null,[e[27]||(e[27]=l("label",null,"Last Name:",-1)),i(l("input",{"onUpdate:modelValue":e[9]||(e[9]=n=>R.value=n),type:"text"},null,512),[[r,R.value]])]),l("div",null,[e[28]||(e[28]=l("label",null,"Date of Birth:",-1)),i(l("input",{"onUpdate:modelValue":e[10]||(e[10]=n=>V.value=n),type:"date"},null,512),[[r,V.value]])]),l("div",null,[e[29]||(e[29]=l("label",null,"Email:",-1)),i(l("input",{"onUpdate:modelValue":e[11]||(e[11]=n=>g.value=n),type:"email"},null,512),[[r,g.value]])]),l("div",null,[e[30]||(e[30]=l("label",null,"Preferred phone number:",-1)),i(l("input",{"onUpdate:modelValue":e[12]||(e[12]=n=>U.value=n),type:"tel"},null,512),[[r,U.value]])]),l("div",null,[e[31]||(e[31]=l("label",null,"Diagnosis of referring healthcare practitioner:",-1)),i(l("textarea",{"onUpdate:modelValue":e[13]||(e[13]=n=>E.value=n)},null,512),[[r,E.value]])]),l("div",null,[e[32]||(e[32]=l("label",null,"Medical History:",-1)),i(l("textarea",{"onUpdate:modelValue":e[14]||(e[14]=n=>P.value=n)},null,512),[[r,P.value]])]),l("div",null,[e[33]||(e[33]=l("label",null,"Family History:",-1)),i(l("textarea",{"onUpdate:modelValue":e[15]||(e[15]=n=>N.value=n)},null,512),[[r,N.value]])]),l("div",null,[e[34]||(e[34]=l("label",null,"Reason for Referral:",-1)),i(l("textarea",{"onUpdate:modelValue":e[16]||(e[16]=n=>C.value=n)},null,512),[[r,C.value]])]),l("div",null,[e[35]||(e[35]=l("label",null,"Additional Comment:",-1)),i(l("textarea",{"onUpdate:modelValue":e[17]||(e[17]=n=>A.value=n)},null,512),[[r,A.value]])]),e[38]||(e[38]=l("button",{type:"submit",class:"submit-btn"},"Generate PDF",-1))],32)]),_:1})],64)}}},ee=j(J,[["__scopeId","data-v-b582b3fd"]]);export{ee as default};