import{d as as}from"./index-ee108f99.js";import{_ as is}from"./_plugin-vue_export-helper-c27b6911.js";import{d as ls,l as os,s as Q,o as ns,e as ds,a as e,t as i}from"./app-d29a1c54.js";const rs={class:"form-container"},us={class:"details-grid"},vs={class:"value"},cs={class:"value"},ps={class:"value"},ms={class:"value"},_s={class:"value"},bs={class:"value"},fs={class:"value"},gs={class:"value"},ys={class:"value"},xs={class:"value"},Bs={class:"value"},Is={class:"value"},Cs={class:"value"},Ns={class:"value"},ws={class:"value"},ks={class:"value"},Ps={class:"value"},Ss={class:"flex items-center justify-center mt-4"},Es=["type"],Ms={__name:"PatientInfoPage",props:{patient:{type:Object,required:!0}},setup(T){var d;const n=T,t=ls(0),X=(d=n.patient)==null?void 0:d.patient_id,Y=async a=>{try{console.log(a);let s=await axios.get(`/api/get-patient/${a}`);t.value=s.data}catch(s){console.error("Failed to fetch patient:",s)}};os(async()=>{var a;await Y(X),console.log((a=n.patient)==null?void 0:a.patient_id),console.log(t)});const l=a=>a?a.charAt(0).toUpperCase()+a.slice(1).toLowerCase():"",ss=Q(()=>{var s;const a=(s=t==null?void 0:t.value.user)==null?void 0:s.contact_number;return a?a.startsWith("0")?a:"0"+a:""}),es=Q(()=>{var o;const a=(o=t==null?void 0:t.value.user)==null?void 0:o.birthday;if(!a)return"";const s={year:"numeric",month:"long",day:"numeric"};return new Date(a).toLocaleDateString(void 0,s)}),ts=()=>{var s;const a={userId:(s=n.patient)==null?void 0:s.user_id};as.Inertia.visit("/patient-details-update",{data:a})};return(a,s)=>{var o,r,u,v,c,p,m,_,b,f,g,y,x,B,I,C,N,w,k,P,S,E,M,D,F,L,j,h,q,z,A,G,H,O,R,U,V,W,Z,$,J,K;return ns(),ds("div",rs,[e("div",us,[s[0]||(s[0]=e("div",{class:"label"},"Last Name:",-1)),e("div",vs,i(l(((r=(o=t.value)==null?void 0:o.user)==null?void 0:r.lastname)??"")),1),s[1]||(s[1]=e("div",{class:"label"},"First Name:",-1)),e("div",cs,i(l(((v=(u=t.value)==null?void 0:u.user)==null?void 0:v.firstname)??"")),1),s[2]||(s[2]=e("div",{class:"label"},"Middle Name:",-1)),e("div",ps,i(l(((p=(c=t.value)==null?void 0:c.user)==null?void 0:p.middlename)??"")),1),s[3]||(s[3]=e("div",{class:"label"},"Email:",-1)),e("div",ms,i(((_=(m=t.value)==null?void 0:m.user)==null?void 0:_.email)??""),1),s[4]||(s[4]=e("div",{class:"label"},"Contact Number:",-1)),e("div",_s,i(ss.value??""),1),s[5]||(s[5]=e("div",{class:"label"},"Birthday:",-1)),e("div",bs,i(es.value??""),1),s[6]||(s[6]=e("div",{class:"label"},"Birthplace:",-1)),e("div",fs,i(l(((f=(b=t.value)==null?void 0:b.user)==null?void 0:f.birthplace)??"")),1),s[7]||(s[7]=e("div",{class:"label"},"Gender:",-1)),e("div",gs,i(l(((y=(g=t.value)==null?void 0:g.user)==null?void 0:y.gender)??"")),1),s[8]||(s[8]=e("div",{class:"label"},"Marital Status:",-1)),e("div",ys,i(l(((B=(x=t.value)==null?void 0:x.user)==null?void 0:B.marital_status)??"")),1),s[9]||(s[9]=e("div",{class:"label"},"Region:",-1)),e("div",xs,i(((w=(N=(C=(I=t.value)==null?void 0:I.user)==null?void 0:C.address)==null?void 0:N.region)==null?void 0:w.region_name)??""),1),s[10]||(s[10]=e("div",{class:"label"},"Province:",-1)),e("div",Bs,i(((E=(S=(P=(k=t.value)==null?void 0:k.user)==null?void 0:P.address)==null?void 0:S.province)==null?void 0:E.province_name)??""),1),s[11]||(s[11]=e("div",{class:"label"},"City:",-1)),e("div",Is,i(((L=(F=(D=(M=t.value)==null?void 0:M.user)==null?void 0:D.address)==null?void 0:F.city)==null?void 0:L.city_name)??""),1),s[12]||(s[12]=e("div",{class:"label"},"Municipality:",-1)),e("div",Cs,i(((z=(q=(h=(j=t.value)==null?void 0:j.user)==null?void 0:h.address)==null?void 0:q.municipality)==null?void 0:z.municipality_name)??""),1),s[13]||(s[13]=e("div",{class:"label"},"Barangay:",-1)),e("div",Ns,i(((H=(G=(A=t.value)==null?void 0:A.user)==null?void 0:G.address)==null?void 0:H.address_brgy)??""),1),s[14]||(s[14]=e("div",{class:"label"},"Block/House Number:",-1)),e("div",ws,i(((U=(R=(O=t.value)==null?void 0:O.user)==null?void 0:R.address)==null?void 0:U.address_number)??""),1),s[15]||(s[15]=e("div",{class:"label"},"Street:",-1)),e("div",ks,i(((Z=(W=(V=t.value)==null?void 0:V.user)==null?void 0:W.address)==null?void 0:Z.address_street)??""),1),s[16]||(s[16]=e("div",{class:"label"},"Zipcode:",-1)),e("div",Ps,i(((K=(J=($=t.value)==null?void 0:$.user)==null?void 0:J.address)==null?void 0:K.address_zipcode)??""),1)]),e("div",Ss,[e("button",{type:a.type,class:"inline-flex items-center px-4 py-2 bg-[#b04748] border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-[#d3a5a3] focus:bg-[#d3a5a3] active:bg-[#9f2123] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150",onClick:ts}," Edit ",8,Es)])])}}},js=is(Ms,[["__scopeId","data-v-8556f3a1"]]);export{js as default};
