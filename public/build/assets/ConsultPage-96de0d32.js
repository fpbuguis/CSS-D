import{Q as re,d as v,p as de,l as H,T as ce,s as pe,o,e as n,b as _,u as a,w as q,F as Q,m as g,Z as ve,a as t,t as i,f as y,k as me,q as C,B as R,v as he,h as _e,n as ge,g as ye,c as fe}from"./app-d29a1c54.js";import{_ as D}from"./InputLabel-4a24d642.js";import{_ as be}from"./PrimaryButton-f8b31512.js";import ke from"./Layout-b7f944c2.js";import{d as A}from"./index-ee108f99.js";import{A as we}from"./Alert-c8b905ec.js";import{_ as Se}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                                                               */import"./DropdownLink-7a8a95ab.js";/* empty css                                                              */const Ce={class:"wider-page-container"},De={class:"two-section-container"},Pe={class:"info-left"},Ie={key:0,class:"display"},xe={key:0,class:"display"},Re={key:0,class:"display"},Te={key:1,class:"display"},Ae={key:0,class:"display"},$e={key:0,class:"display"},Fe={key:0,class:"display"},Le={key:0,class:"display"},Ne={class:"info-right"},je={key:0,class:"display"},Ee={key:1,class:"display"},Ue={key:0,class:"display"},Ve={key:1,class:"display"},Me={key:0,class:"display"},Be={key:1,class:"display"},Oe={key:0,class:"display"},Ye={key:1,class:"display"},He={key:0,class:"display"},qe={key:1,class:"display"},Qe={key:0,class:"display"},ze={key:1,class:"display"},We={class:"two-section-container"},Ze={class:"side-form-section"},Ge={class:"form-group"},Je=["disabled"],Ke={class:"form-group"},Xe=["disabled"],et={class:"form-group"},tt=["disabled"],st={class:"form-group"},at=["disabled"],lt={class:"form-group"},ot=["disabled"],nt={class:"form-group"},it=["disabled"],ut=["value"],rt={class:"flex items-center justify-center"},dt={class:"buttons-section"},ct={__name:"ConsultPage",setup(pt){const{url:z,props:W}=re(),$=z.split("/");let l=$[$.length-1];l=parseInt(l,10);let Z;const F=v(null),h=v({}),b=v({}),r=v(0),k=v(0),w=v(null),S=v(null),f=v({show:!1,message:"",type:""}),G=async()=>{try{let s=await g.get("/api/all-patients");F.value=s.data;const e=F.value.find(d=>d.patient_id===l);if(e){const d=e.user;console.log("Patient Details:",d),Z=d.user_id,h.value.lastname=d.lastname,h.value.firstname=d.firstname,h.value.middlename=d.middlename,h.value.birthday=d.birthday}}catch(s){console.error("Failed to fetch patient info:",s)}};let J=W.auth.user.user_id;const L=v(null);let N=v(null);const K=async s=>{try{let e=await g.get(`/api/doctor-profile/${s}`);L.value=e.data,N.value=L.value.doctor_id}catch(e){console.error(`Failed to fetch doctor with userId ${s}:`,e)}},X=s=>{const e=new Date,d=new Date(s);let I=e.getFullYear()-d.getFullYear();const x=e.getMonth()-d.getMonth();return(x<0||x===0&&e.getDate()<d.getDate())&&I--,I},ee=async()=>{try{let s=await g.get(`/api/disease/${l}/profile`);b.value=s.data,console.log("Disease Profile:",b.value)}catch(s){console.error("Failed to fetch patient disease profile:",s)}},te=async()=>{try{let s=await g.get(`/api/patient/${l}/treatments`);r.value=s.data,console.log("Treatment Details: ",r.value)}catch(s){console.error("Failed to fetch patient:",s)}},se=async()=>{try{let s=await g.get(`/api/checkups/${l}`);k.value=s.data,console.log("Checkup Details: ",k.value)}catch(s){console.error("Failed to fetch checkup:",s)}},ae=async()=>{try{let s=await g.get(`/api/patients/${l}/latest-labs-submitted`);w.value=s.data,console.log("Lab Submitted:",w.value)}catch(s){console.error("Failed to fetch labs submitted:",s)}},le=async()=>{try{let s=await g.get(`/api/patients/${l}/survey-responses`);S.value=s.data,console.log("Survey Response:",S.value)}catch(s){console.error("Failed to fetch survey responses:",s)}},m=v(null),p=v(!0),T=(s,e)=>{f.value={show:!0,message:s,type:e},setTimeout(()=>{f.value.show=!1},3e3)},j=async()=>{try{let s=await g.get(`/api/patient/${l}/latest-schedule`);if(m.value=s.data,console.log("Latest Sched:",m),m.value&&m.value.checkupConfirmed_date){const e=new Date(m.value.checkupConfirmed_date),d=new Date;d.setHours(0,0,0,0),e.setHours(0,0,0,0),e<d?(m.value.checkupStatus_id=4,p.value=!1,await g.put(`/api/patient/${l}/update-schedule`,{checkupStatus_id:m.value.checkupStatus_id}),T("Checkup Schedule was Cancelled!","warning")):m.value.checkupStatus_id===3?(p.value=!1,T("Checkup Schedule already Done!","warning")):p.value=!0,console.log("Updated Schedule:",m.value.checkupStatus_id)}else p.value=!1,T("Checkup Schedule is not confirmed yet!","warning")}catch(s){console.error("Error fetching or updating schedule:",s)}};de(()=>f.value,(s,e)=>{console.log("Alert changed:",s,e)},{deep:!0}),H(async()=>{await G(),await ee(),await te(),await K(J),await se(),await ae(),await le(),await j(),console.log("Latest Schedule:",m),console.log(p.value),console.log(f)}),H(()=>{j()});const c=ce({subjective:"",objective:"",surveillance_workup:"",assessment:"",plan:"",disease_status:[],patient_status:"",patient_id:l,doctor_id:pe(()=>N.value)}),oe=["Recovered","Improved","Unimproved","Died"],ne=()=>{console.log(c),console.log(p.value),p.value===!0?c.post("/api/create-checkup",{onSuccess:()=>{A.Inertia.visit(`/consult/${l}`),T("Checkup Done!","success")},onError:s=>{s.patient_id?error.value=s.patient_id[0]:console.log(s)}}):m.value.checkupStatus_id===3?alert("Consultation Schedule Added!"):alert("Checkup Schedule was Cancelled!")},E=v(""),ie=()=>{h&&(E.value=h.value.firstname),A.Inertia.get("/search",{name:E.value},{preserveState:!0})},P=s=>{A.Inertia.visit(s)};return(s,e)=>(o(),n(Q,null,[_(a(ve),{title:"Consult"}),_(ke,null,{default:q(()=>{var d,I,x,U,V,M,B,O,Y;return[e[26]||(e[26]=t("div",{class:"page-heading"},[t("h1",{class:"main-heading"},"CONSULT")],-1)),t("div",Ce,[t("div",De,[t("div",Pe,[t("p",null,[e[11]||(e[11]=t("span",null,"Name: ",-1)),a(l)?(o(),n("span",Ie,i(h.value.lastname)+", "+i(h.value.firstname)+" "+i(h.value.middlename),1)):y("",!0)]),t("p",null,[e[12]||(e[12]=t("span",null,"Age: ",-1)),a(l)?(o(),n("span",xe,i(X(h.value.birthday)),1)):y("",!0)]),t("p",null,[e[13]||(e[13]=t("span",null,"Diagnosis: ",-1)),a(l)&&b.value.disease_stage?(o(),n("span",Re,i("Stage "+b.value.disease_stage+", "),1)):y("",!0),a(l)&&b.value.disease_laterality?(o(),n("span",Te,i(((d=b.value.disease_laterality)==null?void 0:d.laterality_name)+" laterality"||""),1)):y("",!0)]),t("p",null,[e[14]||(e[14]=t("span",null,"Operation: ",-1)),a(l)&&((x=(I=r.value)==null?void 0:I.surgeries)!=null&&x.length)?(o(),n("span",Ae,i(r.value.surgeries[r.value.surgeries.length-1].surgery_operation)+", "+i(r.value.surgeries[r.value.surgeries.length-1].surgery_date),1)):y("",!0)]),t("p",null,[e[15]||(e[15]=t("span",null,"Chemotherapy: ",-1)),a(l)&&((V=(U=r.value)==null?void 0:U.chemotherapies)!=null&&V.length)?(o(),n("span",$e,i(r.value.chemotherapies.length>0?"Yes":"None")+", "+i(r.value.chemotherapies[r.value.chemotherapies.length-1].chemo_status),1)):y("",!0)]),t("p",null,[e[16]||(e[16]=t("span",null,"Radiotherapy: ",-1)),a(l)&&((B=(M=r.value)==null?void 0:M.radiotherapies)!=null&&B.length)?(o(),n("span",Fe,i(r.value.radiotherapies.length>0?"Yes":"None")+", "+i(r.value.radiotherapies[r.value.radiotherapies.length-1].radRx_status),1)):y("",!0)]),t("p",null,[e[17]||(e[17]=t("span",null,"Hormonal Therapy: ",-1)),a(l)&&((Y=(O=r.value)==null?void 0:O.hormonals)!=null&&Y.length)?(o(),n("span",Le,i(r.value.hormonals.length>0?"Yes":"None")+", "+i(r.value.hormonals[r.value.hormonals.length-1].hormonal_status),1)):y("",!0)])]),t("div",Ne,[t("p",null,[e[18]||(e[18]=t("span",null,"Patient Status: ",-1)),a(l)&&k.value?(o(),n("span",je,i(k.value.checkup.checkup_patientStatus),1)):(o(),n("span",Ee))]),t("p",null,[e[19]||(e[19]=t("span",null,"Latest Consult Date: ",-1)),a(l)&&k.value?(o(),n("span",Ue,i(k.value.checkup.checkup_date),1)):(o(),n("span",Ve))]),t("p",null,[e[20]||(e[20]=t("span",null,"Latest Labs Submitted: ",-1)),a(l)&&w.value?(o(),n("span",Me,i(w.value.workup.workup_name),1)):(o(),n("span",Be))]),t("p",null,[e[21]||(e[21]=t("span",null,"Submission Date: ",-1)),a(l)&&w.value?(o(),n("span",Oe,i(w.value.labSubmission_date),1)):(o(),n("span",Ye))]),t("p",null,[e[22]||(e[22]=t("span",null,"Patient S/Sx Report: ",-1)),a(l)&&S.value?(o(),n("span",He,i(S.value.symptom_surveys.map(u=>u.symptom_name).join(", ")),1)):(o(),n("span",qe))]),t("p",null,[e[23]||(e[23]=t("span",null,"Patient Report Date: ",-1)),a(l)&&S.value?(o(),n("span",Qe,i(S.value.surveyResponse_date),1)):(o(),n("span",ze))])])]),t("div",We,[t("div",Ze,[t("p",null,i(),1),t("form",{onSubmit:me(ne,["prevent"])},[t("div",Ge,[_(D,{for:"subjective",value:"Subjective"}),C(t("textarea",{"onUpdate:modelValue":e[0]||(e[0]=u=>a(c).subjective=u),disabled:!p.value},null,8,Je),[[R,a(c).subjective]])]),t("div",Ke,[_(D,{for:"objective",value:"Objective"}),C(t("textarea",{"onUpdate:modelValue":e[1]||(e[1]=u=>a(c).objective=u),class:"obj-textarea",disabled:!p.value},null,8,Xe),[[R,a(c).objective]])]),t("div",et,[_(D,{for:"surveillance_workup",value:"Surveillance Workup"}),C(t("textarea",{"onUpdate:modelValue":e[2]||(e[2]=u=>a(c).surveillance_workup=u),class:"sw-textarea",disabled:!p.value},null,8,tt),[[R,a(c).surveillance_workup]])]),t("div",st,[_(D,{for:"assessment",value:"Assessment"}),C(t("textarea",{"onUpdate:modelValue":e[3]||(e[3]=u=>a(c).assessment=u),disabled:!p.value},null,8,at),[[R,a(c).assessment]])]),t("div",lt,[_(D,{for:"plan",value:"Plan"}),C(t("textarea",{"onUpdate:modelValue":e[4]||(e[4]=u=>a(c).plan=u),class:"sw-textarea",disabled:!p.value},null,8,ot),[[R,a(c).plan]])]),t("div",nt,[_(D,{for:"patient_status",value:"Patient Status"}),C(t("select",{"onUpdate:modelValue":e[5]||(e[5]=u=>a(c).patient_status=u),class:"mt-1 block w-full",disabled:!p.value},[e[24]||(e[24]=t("option",{value:"",disabled:""},"Select Patient Status",-1)),(o(),n(Q,null,_e(oe,(u,ue)=>t("option",{key:ue,value:u},i(u),9,ut)),64))],8,it),[[he,a(c).patient_status]])]),t("div",rt,[_(be,{class:ge(["ms-4",{"opacity-25":a(c).processing||!p.value}]),disabled:a(c).processing||!p.value},{default:q(()=>e[25]||(e[25]=[ye(" Submit ")])),_:1},8,["class","disabled"])])],32)]),t("div",dt,[t("button",{class:"bigger-btn",onClick:ie},"UPDATE PATIENT INFO"),t("button",{class:"bigger-btn",onClick:e[6]||(e[6]=u=>P("/prescription"))},"PRESCRIPTION"),t("button",{class:"bigger-btn",onClick:e[7]||(e[7]=u=>P("/labrequest"))},"LAB REQUEST"),t("button",{class:"bigger-btn",onClick:e[8]||(e[8]=u=>P("/clinicalabstract"))},"CLINICAL ABSTRACT"),t("button",{class:"bigger-btn",onClick:e[9]||(e[9]=u=>P("/medcertification"))},"MED CERTIFICATION"),t("button",{class:"bigger-btn",onClick:e[10]||(e[10]=u=>P("/referralform"))},"REFERRAL FORM")])])]),f.value.show?(o(),fe(we,{key:0,message:f.value.message,type:f.value.type},null,8,["message","type"])):y("",!0)]}),_:1})],64))}},St=Se(ct,[["__scopeId","data-v-fa0d08ba"]]);export{St as default};
