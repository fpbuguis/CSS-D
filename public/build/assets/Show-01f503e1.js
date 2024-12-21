import{_ as c}from"./AppLayout-76d6eb27.js";import l from"./DeleteUserForm-57e7ccd9.js";import f from"./LogoutOtherBrowserSessionsForm-380661d9.js";import{S as s}from"./SectionBorder-87bac081.js";import u from"./TwoFactorAuthenticationForm-edef5fb3.js";import d from"./UpdatePasswordForm-d1ea0b94.js";import _ from"./UpdateProfileInformationForm-1ebed917.js";import{o as e,c as h,w as p,a as i,e as r,b as t,f as a,F as g}from"./app-d29a1c54.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DropdownLink-7a8a95ab.js";import"./DialogModal-7d73c483.js";import"./SectionTitle-1199d010.js";import"./DangerButton-b70a49e1.js";import"./InputError-c4a7bcc1.js";import"./SecondaryButton-d35afa0b.js";import"./TextInput-1febd58e.js";import"./ActionMessage-13807027.js";import"./PrimaryButton-f8b31512.js";import"./InputLabel-4a24d642.js";import"./FormSection-d01b3122.js";const $={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},G={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(o,n)=>(e(),h(c,{title:"Profile"},{header:p(()=>n[0]||(n[0]=[i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1)])),default:p(()=>[i("div",null,[i("div",$,[o.$page.props.jetstream.canUpdateProfileInformation?(e(),r("div",w,[t(_,{user:o.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),o.$page.props.jetstream.canUpdatePassword?(e(),r("div",k,[t(d,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),r("div",y,[t(u,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(f,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),o.$page.props.jetstream.hasAccountDeletionFeatures?(e(),r(g,{key:3},[t(s),t(l,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{G as default};
