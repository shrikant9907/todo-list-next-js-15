(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{5331:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6584,23)),Promise.resolve().then(r.bind(r,6514)),Promise.resolve().then(r.bind(r,6550)),Promise.resolve().then(r.bind(r,3280)),Promise.resolve().then(r.bind(r,2196)),Promise.resolve().then(r.t.bind(r,7208,23)),Promise.resolve().then(r.t.bind(r,4379,23)),Promise.resolve().then(r.t.bind(r,7514,23)),Promise.resolve().then(r.t.bind(r,9852,23)),Promise.resolve().then(r.bind(r,1849))},6514:(e,t,r)=>{"use strict";r.d(t,{default:()=>c});var s=r(3528),a=r(221),o=r(6282),l=r(5316);function i(){let[e,t]=(0,l.useState)(!1),r=[{name:"Profile",icon:(0,s.jsx)(a.pmW,{className:"text-xl"})},{name:"My Tasks",icon:(0,s.jsx)(a.mz3,{className:"text-xl"})},{name:"Settings",icon:(0,s.jsx)(a.xPd,{className:"text-xl"})},{name:"Logout",icon:(0,s.jsx)(a.ueG,{className:"text-xl"})}];return(0,s.jsxs)("div",{className:"relative z-20",children:[(0,s.jsx)(o.default,{src:"/images/profile-pic.jpg",alt:"User Avatar",width:40,height:40,className:"w-10 h-10 rounded-full cursor-pointer",onClick:()=>t(!e)}),e&&(0,s.jsx)("div",{className:"absolute z-20 right-0 p-2 mt-2 w-48 bg-white dark:bg-gray-700 border dark:border-gray-600 rounded-lg shadow-lg",children:(0,s.jsx)("ul",{children:r.map((e,t)=>(0,s.jsxs)("li",{className:"flex items-center rounded-md px-2 py-2 hover:bg-gray-100 dark:hover:bg-opacity-50 dark:hover:bg-gray-600 cursor-pointer",children:[e.icon,(0,s.jsx)("span",{className:"ml-2 text-sm",children:e.name})]},t))})})]})}var n=r(942);function d(){let[e,t]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let e=localStorage.getItem("theme");"dark"===e||!e&&window.matchMedia("(prefers-color-scheme: dark)").matches?(document.documentElement.classList.add("dark"),t(!0)):document.documentElement.classList.remove("dark")},[]),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsxs)("div",{onClick:()=>{let r=document.documentElement;t(!e),r.classList.toggle("dark",!e),localStorage.setItem("theme",e?"light":"dark")},"data-tooltip-id":"theme-tooltip","data-tooltip-content":e?"Switch to Light Mode":"Switch to Dark Mode",className:"relative px-1 inline-flex justify-between items-center w-14 h-6 bg-gray-300 dark:bg-gray-600 rounded-full cursor-pointer transition-all",children:[(0,s.jsx)(a.NLk,{className:"text-xl ".concat(e?"text-white":"text-gray-400")}),(0,s.jsx)("div",{className:"absolute w-5 h-5 bg-white dark:bg-gray-900 rounded-full shadow-md transition-transform duration-300 ".concat(e?"translate-x-7":"translate-x-0")}),(0,s.jsx)(a.qoe,{className:"text-xl ".concat(e?"text-gray-400":"text-orange-400")})]}),(0,s.jsx)(n.m_,{id:"theme-tooltip",place:"top",effect:"solid"})]})}function c(){return(0,s.jsx)("header",{className:"sticky z-30 left-0 top-0 right-0 bg-gray-100 dark:bg-gray-700 dark:bg-opacity-20 text-gray-900 dark:text-gray-100 p-4",children:(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsxs)("h1",{className:"text-xl font-semibold inline-flex gap-3 items-center",children:[(0,s.jsx)(a.nOZ,{className:"text-2xl text-orange-400"}),"Todo App"]}),(0,s.jsxs)("div",{className:"flex items-center gap-4 md:gap-6",children:[(0,s.jsx)(d,{}),(0,s.jsx)(i,{})]})]})})}},6550:(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var s=r(3528),a=r(1051),o=r(3275),l=r(221);let i=e=>{let{name:t,icon:r,isActive:a,toggle:i,hideText:n,path:d}=e,c=(0,o.useRouter)();return(0,s.jsx)("li",{children:(0,s.jsxs)("div",{className:"flex justify-between items-center py-2 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:bg-opacity-30 rounded-md px-2 cursor-pointer",onClick:()=>{d&&c.push(d),i&&i()},children:[(0,s.jsxs)("div",{className:"flex items-center",children:[r,!n&&(0,s.jsx)("span",{className:"ml-2 hidden text-sm lg:block",children:t})]}),a&&(0,s.jsx)(l.ucQ,{})]})})},n=[{name:"My Tasks",icon:(0,s.jsx)(l.kC7,{className:"text-xl text-orange-400"}),path:"/"},{name:"Categories",icon:(0,s.jsx)(l.mz3,{className:"text-xl text-orange-400"}),path:"/categories"},{name:"Settings",icon:(0,s.jsx)(l.xPd,{className:"text-xl text-orange-400"}),path:"/settings"},{name:"Export",icon:(0,s.jsx)(l.Oz0,{className:"text-xl text-orange-400"}),path:"/export"}],d=()=>{let[e,t]=(0,a.A)("sidebarCollapsed",!1);return(0,s.jsxs)("aside",{className:"transition-all duration-300 ease-in-out ".concat(e?"w-16":"w-64"," \n                bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 overflow-hidden"),children:[(0,s.jsx)("div",{className:"flex justify-between items-center pb-4",children:(0,s.jsx)("div",{onClick:()=>t(!e),className:"cursor-pointer text-xl text-orange-400",children:e?(0,s.jsx)(l.xCi,{}):(0,s.jsx)(l.i84,{})})}),(0,s.jsx)("ul",{children:n.map((t,r)=>(0,s.jsx)(i,{hideText:e,name:t.name,icon:t.icon,path:t.path},r))})]})}},3280:(e,t,r)=>{"use strict";r.d(t,{C:()=>u,CategoryProvider:()=>c});var s=r(3528),a=r(1051),o=r(5316),l=r(1849);let i=(0,o.createContext)(),n=[{id:1,name:"Work",color:"#D3D3D3"},{id:2,name:"Personal",color:"#FF5733"},{id:3,name:"Shopping",color:"#33FF57"},{id:4,name:"Ideas",color:"#3357FF"}],d=["#D3D3D3","#FF5733","#33FF57","#3357FF","#FFC233"],c=e=>{let{children:t}=e,[r,c]=(0,a.A)("categories",[]),[u,m]=(0,o.useState)(null),[x,g]=(0,o.useState)(null),[h,y]=(0,o.useState)({name:"",color:"#D3D3D3"}),[p,f]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{0===r.length&&c(n)},[r,c]),(0,s.jsx)(i.Provider,{value:{newCategory:h,setNewCategory:y,defaultColors:d,categories:r,addCategory:()=>{var e;if(!(null==h?void 0:null===(e=h.name)||void 0===e?void 0:e.trim())){l.Ay.error("Category name is required.");return}let t={id:Date.now(),name:null==h?void 0:h.name.trim(),color:null==h?void 0:h.color};if(r.some(e=>e.name.toLowerCase()===t.name.toLowerCase())){l.Ay.error("Category already exists.");return}let s=[...r,t];l.Ay.success("Category added successfully."),c(s),y({name:"",color:"#D3D3D3"}),f(!1)},updateCategory:()=>{if(!u){l.Ay.error("No category selected for editing.");return}if(n.some(e=>e.id===u.id)){l.Ay.error("You cannot edit default categories.");return}if(r.some(e=>e.name.toLowerCase()===u.name.toLowerCase()&&e.id!==u.id)){l.Ay.error("Category name already exists.");return}c(r.map(e=>e.id===u.id?u:e)),l.Ay.success("Category updated successfully!"),f(!1),m(null)},editCategory:u,setEditCategory:m,openCategoryModal:p,setOpenCategoryModal:f,removeCategory:()=>{if(n.some(e=>e.id===(null==x?void 0:x.id))){l.Ay.error("You cannot remove default categories.");return}let e=null==x?void 0:x.name,t=r.filter(t=>t.name!==e);l.Ay.success("Category deleted successfully!"),c(t),g(null)},deleteCategory:x,setDeleteCategory:g,getCategoryById:e=>e?r.find(t=>t.id==e):null},children:t})},u=()=>(0,o.useContext)(i)},2196:(e,t,r)=>{"use strict";r.d(t,{TodoProvider:()=>n,Z:()=>d});var s=r(3528),a=r(1051),o=r(5316),l=r(1849);let i=(0,o.createContext)(),n=e=>{let{children:t}=e,[r,n]=(0,a.A)("todos",[]),[d,c]=(0,o.useState)({title:"",description:"",categoryId:null,completed:!1}),[u,m]=(0,o.useState)(null),[x,g]=(0,o.useState)(null),[h,y]=(0,o.useState)(!1);return(0,s.jsx)(i.Provider,{value:{todos:r,newTodo:d,setNewTodo:c,addTodo:()=>{if(!d.title.trim()){l.Ay.error("Todo text is required.");return}if(!d.categoryId){l.Ay.error("Category is required.");return}n([...r,{id:Date.now(),title:d.title.trim(),description:d.description.trim(),categoryId:d.categoryId,completed:!1}]),l.Ay.success("Todo added successfully!"),c({title:"",description:"",categoryId:null,completed:!1}),y(!1)},editTodo:u,setEditTodo:m,updateTodo:()=>{if(!u){l.Ay.error("No todo selected for editing.");return}n(r.map(e=>e.id===u.id?u:e)),l.Ay.success("Todo updated successfully!"),m(null),y(!1)},deleteTodo:x,setDeleteTodo:g,removeTodo:()=>{n(r.filter(e=>e.id!==(null==x?void 0:x.id))),l.Ay.success("Todo deleted successfully!"),g(null)},toggleTodo:e=>{n(r.map(t=>t.id===e?{...t,completed:!t.completed}:t))},openTodoModal:h,setOpenTodoModal:y},children:t})},d=()=>(0,o.useContext)(i)},1051:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var s=r(5316);let a=(e,t)=>{let[r,a]=(0,s.useState)(t),[o,l]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{l(!0)},[]),(0,s.useEffect)(()=>{if(o){let t=localStorage.getItem(e);t&&null!==t&&"undefined"!==t&&a(JSON.parse(t))}},[o,e]),[r,t=>{a(t),o&&localStorage.setItem(e,JSON.stringify(t))}]}},6584:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[847,609,909,923,208,343,465,743,358],()=>t(5331)),_N_E=e.O()}]);