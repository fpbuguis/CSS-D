import{d as o,y as w,o as L,e as D,b as g,w as M,F as T,a as l,q as a,B as i,v as C,k as z}from"./app-d29a1c54.js";import E from"./Layout-b7f944c2.js";import{E as I}from"./jspdf.es.min-3cebb56b.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-ee108f99.js";/* empty css                                                               */import"./DropdownLink-7a8a95ab.js";const G={__name:"PrescriptionPage",setup(H){const u=o(""),s=o(""),v=o(""),r=o(""),d=o(""),p=o(""),m=o(""),x=o(""),F=o(""),b=o(""),N=o(""),y=()=>{const e=new I,t=f=>f?String(f):"N/A",P=16;e.setFontSize(P),e.setFont("helvetica","bold");const n="PRESCRIPTION",V=e.getTextWidth(n),S=(e.internal.pageSize.width-V)/2;e.text(n,S,20),e.setFontSize(12),e.setFont("helvetica","bold"),e.text("Patient Name:",20,40),e.setFont("helvetica","normal"),e.text(t(u.value),50,40),e.setFont("helvetica","bold"),e.text("Hospital No:",20,50),e.setFont("helvetica","normal"),e.text(t(s.value),50,50),e.setFont("helvetica","bold"),e.text("Date:",150,30),e.setFont("helvetica","normal"),e.text(t(v.value),180,30),e.setFont("helvetica","bold"),e.text("Age:",150,40),e.setFont("helvetica","normal"),e.text(t(r.value),180,40),e.setFont("helvetica","bold"),e.text("Gender:",150,50),e.setFont("helvetica","normal"),e.text(t(d.value),180,50),e.setFont("helvetica","bold"),e.text("Prescription:",20,70),e.setFont("helvetica","normal");const U=e.splitTextToSize(t(N.value),170);e.text(U,20,80),e.setFont("helvetica","bold"),e.text("M.D.:",150,160),e.setFont("helvetica","normal"),e.text(t(x.value),180,160),e.setFont("helvetica","bold"),e.text("Lic. No:",150,170),e.setFont("helvetica","normal"),e.text(t(F.value),180,170),e.setFont("helvetica","bold"),e.text("S2 Lic. No:",150,180),e.setFont("helvetica","normal"),e.text(t(b.value),180,180),e.setFont("helvetica","bold"),e.text('"Observe Generic Law"',150,200),e.setFont("helvetica","bold"),e.text("Ward:",20,220),e.setFont("helvetica","normal"),e.text(t(p.value),50,220),e.setFont("helvetica","bold"),e.text("Classification:",20,230),e.setFont("helvetica","normal"),e.text(t(m.value),50,230),e.save("Prescription.pdf"),u.value="",s.value="",v.value="",r.value="",d.value="",p.value="",m.value="",N.value="",x.value="",F.value="",b.value=""};return(e,t)=>{const P=w("Head");return L(),D(T,null,[g(P,{title:"Prescription"}),g(E,null,{default:M(()=>[t[24]||(t[24]=l("div",{class:"page-heading"},[l("h1",{class:"main-heading"},"PRESCRIPTION")],-1)),l("form",{onSubmit:z(y,["prevent"]),class:"form-container"},[l("div",null,[t[11]||(t[11]=l("label",null,"Patient Name",-1)),a(l("input",{"onUpdate:modelValue":t[0]||(t[0]=n=>u.value=n),type:"text"},null,512),[[i,u.value]])]),l("div",null,[t[12]||(t[12]=l("label",null,"Hospital No",-1)),a(l("input",{"onUpdate:modelValue":t[1]||(t[1]=n=>s.value=n),type:"text"},null,512),[[i,s.value]])]),l("div",null,[t[13]||(t[13]=l("label",null,"Date",-1)),a(l("input",{"onUpdate:modelValue":t[2]||(t[2]=n=>v.value=n),type:"date"},null,512),[[i,v.value]])]),l("div",null,[t[14]||(t[14]=l("label",null,"Age",-1)),a(l("input",{"onUpdate:modelValue":t[3]||(t[3]=n=>r.value=n),type:"number"},null,512),[[i,r.value]])]),l("div",null,[t[16]||(t[16]=l("label",null,"Gender",-1)),a(l("select",{"onUpdate:modelValue":t[4]||(t[4]=n=>d.value=n)},t[15]||(t[15]=[l("option",{value:"Male"},"Male",-1),l("option",{value:"Female"},"Female",-1)]),512),[[C,d.value]])]),l("div",null,[t[17]||(t[17]=l("label",null,"Ward",-1)),a(l("input",{"onUpdate:modelValue":t[5]||(t[5]=n=>p.value=n),type:"text"},null,512),[[i,p.value]])]),l("div",null,[t[18]||(t[18]=l("label",null,"Classification",-1)),a(l("input",{"onUpdate:modelValue":t[6]||(t[6]=n=>m.value=n),type:"text"},null,512),[[i,m.value]])]),l("div",null,[t[19]||(t[19]=l("label",null,"Prescription",-1)),a(l("textarea",{"onUpdate:modelValue":t[7]||(t[7]=n=>N.value=n),rows:"5",placeholder:"Enter prescription details here..."},null,512),[[i,N.value]])]),l("div",null,[t[20]||(t[20]=l("label",null,"MD Name",-1)),a(l("input",{"onUpdate:modelValue":t[8]||(t[8]=n=>x.value=n),type:"text"},null,512),[[i,x.value]])]),l("div",null,[t[21]||(t[21]=l("label",null,"Lic. No",-1)),a(l("input",{"onUpdate:modelValue":t[9]||(t[9]=n=>F.value=n),type:"text"},null,512),[[i,F.value]])]),l("div",null,[t[22]||(t[22]=l("label",null,"S2 Lic. No",-1)),a(l("input",{"onUpdate:modelValue":t[10]||(t[10]=n=>b.value=n),type:"text"},null,512),[[i,b.value]])]),t[23]||(t[23]=l("button",{type:"submit",class:"submit-btn"},"Generate PDF",-1))],32)]),_:1})],64)}}},J=B(G,[["__scopeId","data-v-9135844c"]]);export{J as default};
