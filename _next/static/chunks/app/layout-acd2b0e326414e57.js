(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{5331:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6584,23)),Promise.resolve().then(r.bind(r,6514)),Promise.resolve().then(r.bind(r,6550)),Promise.resolve().then(r.bind(r,3280)),Promise.resolve().then(r.bind(r,2196)),Promise.resolve().then(r.t.bind(r,7208,23)),Promise.resolve().then(r.t.bind(r,4379,23)),Promise.resolve().then(r.t.bind(r,7514,23)),Promise.resolve().then(r.t.bind(r,9852,23)),Promise.resolve().then(r.bind(r,1849))},6514:(e,t,r)=>{"use strict";r.d(t,{default:()=>u});var s=r(3528),a=r(221),o=r(6282),l=r(7369),i=r(5316);function d(){let[e,t]=(0,i.useState)(!1),r=[{name:"My Tasks",icon:(0,s.jsx)(a.kC7,{className:"text-xl"}),link:"/"},{name:"Categories",icon:(0,s.jsx)(a.mz3,{className:"text-xl"}),link:"/categories"}];return(0,s.jsxs)("div",{className:"relative z-20",children:[(0,s.jsx)(o.default,{src:"".concat("https://shrikant9907.github.io/todo-list-next-js-15","/images/profile-pic.jpg"),alt:"User Avatar",width:40,height:40,className:"w-10 h-10 rounded-full bg-gray-500 cursor-pointer",onClick:()=>t(!e),unoptimized:!0}),e&&(0,s.jsx)("div",{className:"absolute z-20 right-0 p-2 mt-2 w-48 bg-white dark:bg-gray-700 border dark:border-gray-600 rounded-lg shadow-lg",children:(0,s.jsx)("ul",{children:r.map((e,r)=>(0,s.jsx)("li",{className:" rounded-md px-2 py-2 hover:bg-gray-100 dark:hover:bg-opacity-50 dark:hover:bg-gray-600 cursor-pointer",children:(0,s.jsxs)(l.default,{onClick:()=>t(!1),className:"flex items-center",href:null==e?void 0:e.link,children:[e.icon,(0,s.jsx)("span",{className:"ml-2 text-sm",children:e.name})]})},r))})})]})}var n=r(942);function c(){let[e,t]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e=localStorage.getItem("theme");"dark"===e||!e&&window.matchMedia("(prefers-color-scheme: dark)").matches?(document.documentElement.classList.add("dark"),t(!0)):document.documentElement.classList.remove("dark")},[]),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsxs)("div",{onClick:()=>{let r=document.documentElement;t(!e),r.classList.toggle("dark",!e),localStorage.setItem("theme",e?"light":"dark")},"data-tooltip-id":"theme-tooltip","data-tooltip-content":e?"Switch to Light Mode":"Switch to Dark Mode",className:"relative px-1 inline-flex justify-between items-center w-14 h-7  bg-gray-300 dark:bg-gray-600 rounded-full cursor-pointer transition-all",children:[(0,s.jsx)(a.NLk,{className:"text-xl ".concat(e?"text-white":"text-gray-400")}),(0,s.jsx)("div",{className:"absolute w-5 h-5 bg-white dark:bg-gray-900 rounded-full shadow-md transition-transform duration-300 ".concat(e?"translate-x-7":"translate-x-0")}),(0,s.jsx)(a.qoe,{className:"text-xl ".concat(e?"text-gray-400":"text-orange-400")})]}),(0,s.jsx)(n.m_,{id:"theme-tooltip",place:"top",effect:"solid"})]})}function u(){return(0,s.jsx)("header",{className:"sticky z-30 left-0 pl-16 md:pl-4 top-0 right-0 bg-gray-100 dark:bg-gray-700 dark:bg-opacity-20 text-gray-900 dark:text-gray-100 px-4 py-3",children:(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsxs)("h1",{className:"text-xl font-semibold inline-flex gap-3 items-center",children:[(0,s.jsx)(a.nOZ,{className:"text-2xl text-orange-400"}),"Todo App"]}),(0,s.jsxs)("div",{className:"flex items-center gap-4 md:gap-6",children:[(0,s.jsx)(c,{}),(0,s.jsx)(d,{})]})]})})}},6550:(e,t,r)=>{"use strict";r.d(t,{default:()=>c});var s=r(3528),a=r(1051),o=r(3275),l=r(221),i=r(942);let d=e=>{let{name:t,icon:r,isActive:a,toggle:i,hideText:d,path:n}=e,c=(0,o.useRouter)();return(0,s.jsx)("li",{children:(0,s.jsxs)("div",{className:"flex justify-between items-center py-2 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:bg-opacity-30 rounded-md px-2 cursor-pointer",onClick:()=>{n&&c.push(n),i&&window.innerWidth<=768&&i()},children:[(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)("span",{"data-tooltip-id":"sidebar-tooltip","data-tooltip-content":t,children:r}),!d&&(0,s.jsx)("span",{className:"ml-2 text-sm w-56",children:t})]}),a&&(0,s.jsx)(l.ucQ,{})]})})},n=[{name:"My Tasks",icon:(0,s.jsx)(l.kC7,{className:"text-xl text-orange-400"}),path:"/"},{name:"Categories",icon:(0,s.jsx)(l.mz3,{className:"text-xl text-orange-400"}),path:"/categories"},{name:"Import / Export",icon:(0,s.jsx)(l.Oz0,{className:"text-xl text-orange-400"}),path:"/export"}],c=()=>{let[e,t]=(0,a.A)("sidebarCollapsed",!0),r=()=>t(!e);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("aside",{className:"fixed z-40 pt-20 min-h-screen md:static md:block transition-all duration-300 ease-in-out ".concat(e?"w-1 p-0 md:pt-20 md:p-4 md:w-16":"p-4 w-64"," \n                bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden"),children:[(0,s.jsx)("div",{className:"fixed top-3 h-10 w-10 bg-gray-500 bg-opacity-10 p-2 rounded-full left-3 flex justify-between items-center",children:(0,s.jsx)("div",{onClick:r,className:"cursor-pointer text-2xl text-orange-400",children:e?(0,s.jsx)(l.xCi,{"data-tooltip-id":"sidebar-tooltip","data-tooltip-content":"Show"}):(0,s.jsx)(l.i84,{"data-tooltip-id":"sidebar-tooltip","data-tooltip-content":"Collapse"})})}),(0,s.jsx)("ul",{children:n.map((t,a)=>(0,s.jsx)(d,{hideText:e,name:t.name,icon:t.icon,path:t.path,toggle:r},a))})]}),(0,s.jsx)(i.m_,{id:"sidebar-tooltip",place:"right",effect:"solid"})]})}},3280:(e,t,r)=>{"use strict";r.d(t,{C:()=>u,CategoryProvider:()=>c});var s=r(3528),a=r(1051),o=r(5316),l=r(1849);let i=(0,o.createContext)(),d=[{id:1,name:"Work",color:"#D3D3D3"},{id:2,name:"Personal",color:"#FF5733"}],n=["#D3D3D3","#FF5733","#33FF57","#3357FF","#FFC233"],c=e=>{let{children:t}=e,[r,c]=(0,a.A)("categories",[]),[u,m]=(0,o.useState)(null),[x,g]=(0,o.useState)(null),[p,h]=(0,o.useState)({name:"",color:"#D3D3D3"}),[y,f]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{0===r.length&&c(d)},[r,c]),(0,s.jsx)(i.Provider,{value:{newCategory:p,setNewCategory:h,defaultColors:n,categories:r,addCategory:()=>{var e;if(!(null==p?void 0:null===(e=p.name)||void 0===e?void 0:e.trim())){l.Ay.error("Category name is required.");return}let t={id:Date.now(),name:null==p?void 0:p.name.trim(),color:null==p?void 0:p.color};if(r.some(e=>e.name.toLowerCase()===t.name.toLowerCase())){l.Ay.error("Category already exists.");return}let s=[...r,t];l.Ay.success("Category added successfully."),c(s),h({name:"",color:"#D3D3D3"}),f(!1)},updateCategory:()=>{if(!u){l.Ay.error("No category selected for editing.");return}if(d.some(e=>e.id===u.id)){l.Ay.error("You cannot edit default categories.");return}if(r.some(e=>e.name.toLowerCase()===u.name.toLowerCase()&&e.id!==u.id)){l.Ay.error("Category name already exists.");return}c(r.map(e=>e.id===u.id?u:e)),l.Ay.success("Category updated successfully!"),f(!1),m(null)},editCategory:u,setEditCategory:m,openCategoryModal:y,setOpenCategoryModal:f,removeCategory:()=>{if(d.some(e=>e.id===(null==x?void 0:x.id))){l.Ay.error("You cannot remove default categories.");return}let e=null==x?void 0:x.name,t=r.filter(t=>t.name!==e);l.Ay.success("Category deleted successfully!"),c(t),g(null)},deleteCategory:x,setDeleteCategory:g,getCategoryById:e=>e?r.find(t=>t.id==e):null},children:t})},u=()=>(0,o.useContext)(i)},2196:(e,t,r)=>{"use strict";r.d(t,{TodoProvider:()=>d,Z:()=>n});var s=r(3528),a=r(1051),o=r(5316),l=r(1849);let i=(0,o.createContext)(),d=e=>{let{children:t}=e,[r,d]=(0,a.A)("todos",[]),[n,c]=(0,o.useState)({title:"",description:"",categoryId:null,completed:!1}),[u,m]=(0,o.useState)(null),[x,g]=(0,o.useState)(null),[p,h]=(0,o.useState)(!1);return(0,s.jsx)(i.Provider,{value:{todos:r,newTodo:n,setNewTodo:c,addTodo:()=>{if(!n.title.trim()){l.Ay.error("Todo text is required.");return}if(!n.categoryId){l.Ay.error("Category is required.");return}d([...r,{id:Date.now(),title:n.title.trim(),description:n.description.trim(),categoryId:n.categoryId,completed:!1}]),l.Ay.success("Todo added successfully!"),c({title:"",description:"",categoryId:null,completed:!1}),h(!1)},editTodo:u,setEditTodo:m,updateTodo:()=>{if(!u){l.Ay.error("No todo selected for editing.");return}d(r.map(e=>e.id===u.id?u:e)),l.Ay.success("Todo updated successfully!"),m(null),h(!1)},deleteTodo:x,setDeleteTodo:g,removeTodo:()=>{d(r.filter(e=>e.id!==(null==x?void 0:x.id))),l.Ay.success("Todo deleted successfully!"),g(null)},toggleTodo:e=>{let t=r.map(t=>t.id===e?{...t,completed:!t.completed}:t);d(t);let s=t.find(t=>t.id===e);l.Ay.success((null==s?void 0:s.completed)?"Marked as completed.":"Marked as Todo")},openTodoModal:p,setOpenTodoModal:h},children:t})},n=()=>(0,o.useContext)(i)},1051:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var s=r(5316);let a=(e,t)=>{let[r,a]=(0,s.useState)(t),[o,l]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{l(!0)},[]),(0,s.useEffect)(()=>{if(o){let t=localStorage.getItem(e);t&&null!==t&&"undefined"!==t&&a(JSON.parse(t))}},[o,e]),[r,t=>{a(t),o&&localStorage.setItem(e,JSON.stringify(t))}]}},6584:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[847,609,909,849,812,369,418,465,743,358],()=>t(5331)),_N_E=e.O()}]);