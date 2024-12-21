import Y from"./Layout-b7f944c2.js";import{s as L,a as u}from"./column.esm-ac9822a2.js";import{D as q}from"./vuecal-b9634972.js";import{d as m,Q as z,s as C,l as G,o as d,c as P,w as o,a as l,u as n,b as i,j as F,g as p,t as c,e as _,f as R}from"./app-d29a1c54.js";import{d as J}from"./index-ee108f99.js";import{_ as K}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                                                               */import"./DropdownLink-7a8a95ab.js";const Z={class:"container"},ee={class:"left-panel"},te={key:1,class:"center"},ae={class:"right-panel"},se={class:"table-section"},oe={key:1,class:"center"},ne={key:0,class:"modal-backdrop"},re={key:1,class:"patient_list modal"},ie={key:0},le={key:1,class:"center"},ce={__name:"Dashboard",setup(ue){const $=m(null),A=new Date().toDateString(),{props:E}=z(),I=E.auth.user.user_id,r=m(null),k=m(null),g=m(!1),y=m(null),b=m(null),w=m(null),h=m([]),W=async t=>{try{let e=await axios.get(`/api/doctor-profile/${t}`);r.value=e.data}catch(e){console.error(`Failed to fetch doctor with userId ${t}:`,e)}},M=async t=>{try{let e=await axios.get(`/api/doctors/${t}/patients`);$.value=e.data,console.log($.value)}catch(e){console.error("Failed to fetch patients:",e)}},O=async t=>{try{let e=await axios.get(`/api/doctors/${t}/checkup-schedules`);y.value=e.data,console.log(y.value)}catch(e){console.error("Failed to fetch checkup schedules:",e)}},V=async t=>{try{console.log(t);let e=await axios.get(`/api/doctors/${t}/labs-submitted`);console.log(e.data),b.value=e.data,console.log(b.value)}catch(e){console.error("Failed to fetch checkup schedules:",e)}},j=async t=>{try{let e=await axios.get(`/api/doctors/${t}/survey-responses`);w.value=e.data,console.log(w.value)}catch(e){console.error("Failed to fetch checkup schedules:",e)}};let B=C(()=>!b.value||!w.value?[]:[...b.value.map(t=>({...t,type:"lab"})),...w.value.map(t=>({...t,type:"survey"}))]);const U=async t=>{try{for(let e=0;e<t.value.length;e++){const a=t.value[e];if(a.patient_id){let s=await axios.get(`/api/checkups/${a.patient_id}`),v=await axios.get(`/api/latestdisease/${a.patient_id}/profile`);t.value[e]={...a,checkup:s.data.checkup,disease:v.data}}}}catch(e){console.error("Failed to fetch checkups or disease profiles:",e)}};G(async()=>{await W(I),await M(r==null?void 0:r.value.doctor_id),await O(r==null?void 0:r.value.doctor_id),await V(r==null?void 0:r.value.doctor_id),await j(r==null?void 0:r.value.doctor_id),h.value=B.value,console.log(h.value),await U(h),console.log(h)});const D=C(()=>{var t;return(t=y.value)==null?void 0:t.filter(e=>new Date(e.checkupConfirmed_date).toDateString()===A)}),S=t=>{var e;return(e=y.value)==null?void 0:e.filter(a=>new Date(a.checkupConfirmed_date).toDateString()===new Date(t).toDateString())},H=t=>{k.value=t,g.value=!0},Q=C(()=>{var e;const t={};return(e=y.value)==null||e.forEach(a=>{const s=new Date(a.checkupConfirmed_date).toISOString().split("T")[0];t[s]=(t[s]||0)+1}),Object.entries(t).map(([a,s])=>({start:a,end:a,title:`${s} patient${s>1?"s":""}`}))}),X=t=>{const e={weekday:"long",year:"numeric",month:"long",day:"numeric"};return new Intl.DateTimeFormat("en-US",e).format(new Date(t))},x=t=>{if(!t||t.trim()==="")return"Loading...";const e={year:"numeric",month:"long",day:"numeric"};return new Intl.DateTimeFormat("en-US",e).format(new Date(t))},N=t=>{const[e,a,s]=t.split(":").map(Number),v=e>=12?"PM":"AM";return`${e%12||12}:${String(a).padStart(2,"0")} ${v}`};function f(t){return t?t.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()).join(" "):""}const T=t=>{J.Inertia.visit(t)};return(t,e)=>(d(),P(Y,null,{default:o(()=>[e[3]||(e[3]=l("div",{class:"page-heading"},[l("h1",{class:"main-heading"}," CANCER SURVEILLANCE SYSTEM ")],-1)),l("div",Z,[l("div",ee,[e[1]||(e[1]=l("div",{class:"patient_list"},[l("h2",null,"Patients List")],-1)),D.value&&D.value.length?(d(),P(n(L),{key:0,value:D.value,responsiveLayout:"scroll",paginator:!0,rows:5,class:"modal-table"},{default:o(()=>[i(n(u),{field:"patient.user.firstname",header:"Patient Name",class:"patient-name",sortable:!0},{body:o(a=>[i(n(F),{href:"/consult",onClick:s=>T(`/consult/${a.data.patient_id}`)},{default:o(()=>[p(c(f(a.data.patient.user.firstname)+" "+f(a.data.patient.user.lastname)),1)]),_:2},1032,["onClick"])]),_:1}),i(n(u),{field:"checkup_startTime",header:"Appointment Time",sortable:!0},{body:o(a=>[p(c(N(a.data.checkup_startTime)),1)]),_:1})]),_:1},8,["value"])):(d(),_("h1",te,"No Patients Today"))]),l("div",ae,[i(n(q),{class:"custom-vuecal","hide-view-selector":"",startWeekOnSunday:"",full:"","time-from":10*60,"disable-views":["years","year","week","day"],"active-view":"month",onCellClick:H,events:Q.value},null,8,["events"])])]),l("div",se,[h.value&&h.value.length?(d(),P(n(L),{key:0,value:h.value,responsiveLayout:"scroll",paginator:!0,rows:3,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[3,5,10,25]},{header:o(()=>e[2]||(e[2]=[l("div",{class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},[l("h2",{class:"table-title m-0"},"Submitted Workup")],-1)])),default:o(()=>[i(n(u),{field:"patient.user.firstname",header:"Name",sortable:!0},{body:o(a=>[p(c(f(a.data.patient.user.firstname)+" "+f(a.data.patient.user.lastname)),1)]),_:1}),i(n(u),{field:"diagnosis",header:"Diagnosis",sortable:!0},{body:o(a=>{var s;return[p(c(((s=a.data.disease)==null?void 0:s.disease_fullDiagnosis)||""),1)]}),_:1}),i(n(u),{field:"submission_date",header:"Submission Date",sortable:!0},{body:o(a=>[p(c(x(a.data.labSubmission_date||a.data.surveyResponse_date)),1)]),_:1}),i(n(u),{field:"laboratory",header:"Laboratory",sortable:!0},{body:o(a=>{var s,v;return[p(c((s=a.data.workup)!=null&&s.workup_name?(v=a.data.workup)==null?void 0:v.workup_name:"Symptom Survey Report"),1)]}),_:1}),i(n(u),{field:"last_encounter_date",header:"Last Encounter Date",sortable:!0},{body:o(a=>{var s;return[p(c(x(((s=a.data.checkup)==null?void 0:s.checkup_date)||" ")),1)]}),_:1})]),_:1},8,["value"])):(d(),_("h1",oe,"No Submitted Workup"))]),g.value?(d(),_("div",ne)):R("",!0),g.value?(d(),_("div",re,[l("button",{onClick:e[0]||(e[0]=a=>g.value=!1),class:"close-button"},"X"),l("h2",null,"Patients List for "+c(X(k.value)),1),S(k.value)&&S(k.value).length?(d(),_("div",ie,[i(n(L),{value:S(k.value),responsiveLayout:"scroll",paginator:!0,rows:5,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],class:"modal-table"},{default:o(()=>[i(n(u),{field:"patient.user.firstname",header:"Patient Name",class:"patient-name",sortable:!0},{body:o(a=>[i(n(F),{href:"/consult",onClick:s=>T(`/consult/${a.data.patient_id}`)},{default:o(()=>[p(c(f(a.data.patient.user.firstname)+" "+f(a.data.patient.user.lastname)),1)]),_:2},1032,["onClick"])]),_:1}),i(n(u),{field:"user.created_at",header:"Appointment Time",sortable:!0},{body:o(a=>[p(c(N(a.data.checkup_startTime)),1)]),_:1})]),_:1},8,["value"])])):(d(),_("h1",le,"No Patients"))])):R("",!0)]),_:1}))}},ge=K(ce,[["__scopeId","data-v-6ed4f31a"]]);export{ge as default};