(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f34f72f"],{"3b8c":function(e,t,n){"use strict";n.r(t);var c=n("f2bf"),u=Object(c["l"])("新增角色+"),r={class:"table-action"};function o(e,t,n,o,i,a){var d=Object(c["K"])("a-button"),l=Object(c["K"])("a-table"),s=Object(c["K"])("a-card"),f=Object(c["K"])("a-col"),b=Object(c["K"])("add-edit-user-role"),j=Object(c["K"])("a-row");return Object(c["D"])(),Object(c["j"])(j,null,{default:Object(c["T"])((function(){return[Object(c["m"])(f,{span:24},{default:Object(c["T"])((function(){return[Object(c["m"])(s,null,{default:Object(c["T"])((function(){return[Object(c["m"])(d,{type:"primary",style:{margin:"10px 0px"},onClick:o.addRole},{default:Object(c["T"])((function(){return[u]})),_:1},8,["onClick"]),Object(c["m"])(l,{dataSource:o.data,bordered:"",rowKey:"_id",columns:o.columns},{status:Object(c["T"])((function(e){var t=e.text;return[Object(c["m"])("div",null,Object(c["M"])(o.statusMapFilter(t)),1)]})),action:Object(c["T"])((function(e){e.text;var t=e.record;return[Object(c["m"])("ul",r,[Object(c["m"])("li",null,[Object(c["m"])("a",{onClick:function(e){return o.editRole(t)}}," 编辑 ",8,["onClick"])]),Object(c["m"])("li",null,[Object(c["m"])("a",{onClick:function(e){return o.delRole(t._id)}}," 删除 ",8,["onClick"])])])]})),_:1},8,["dataSource","columns"])]})),_:1})]})),_:1}),Object(c["m"])(b,{ref:"role",onRefresh:o.refresh},null,8,["onRefresh"])]})),_:1})}var i=n("5530"),a=(n("3b18"),n("f64c")),d=(n("cd17"),n("ed3b")),l=n("cf7c"),s=(n("b0c0"),Object(c["V"])("data-v-498b9176"));Object(c["G"])("data-v-498b9176");var f={class:"role-menu"};Object(c["E"])();var b=s((function(e,t,n,u,r,o){var i=Object(c["K"])("a-input"),a=Object(c["K"])("a-form-item"),d=Object(c["K"])("a-textarea"),l=Object(c["K"])("a-checkbox"),b=Object(c["K"])("a-form"),j=Object(c["K"])("a-modal");return Object(c["D"])(),Object(c["j"])(j,{visible:e.visible,"onUpdate:visible":t[3]||(t[3]=function(t){return e.visible=t}),width:700,"ok-text":"确认","cancel-text":"取消",title:1==e.type?"新增角色":"编辑角色",onOk:u.submitHandle},{default:s((function(){return[Object(c["m"])(b,{ref:"formRef",model:u.form,rules:u.rules,"label-col":{span:4},"wrapper-col":{span:14}},{default:s((function(){return[Object(c["m"])(a,{ref:"name",label:"角色名称",name:"name"},{default:s((function(){return[Object(c["m"])(i,{value:u.form.name,"onUpdate:value":t[1]||(t[1]=function(e){return u.form.name=e})},null,8,["value"])]})),_:1},512),Object(c["m"])(a,{label:"角色描述",name:"describe"},{default:s((function(){return[Object(c["m"])(d,{value:u.form.describe,"onUpdate:value":t[2]||(t[2]=function(e){return u.form.describe=e})},null,8,["value"])]})),_:1}),Object(c["m"])(a,{label:"角色权限",name:"menuList"},{default:s((function(){return[Object(c["m"])("ul",f,[(Object(c["D"])(!0),Object(c["j"])(c["b"],null,Object(c["J"])(e.menuList,(function(e){return Object(c["D"])(),Object(c["j"])("li",{key:e._id},[Object(c["m"])(l,{checked:e.isChecked,"onUpdate:checked":function(t){return e.isChecked=t},onChange:function(t){return u.onChangeT1(t,e)}},{default:s((function(){return[Object(c["l"])(Object(c["M"])(e.name),1)]})),_:2},1032,["checked","onUpdate:checked","onChange"]),(Object(c["D"])(!0),Object(c["j"])(c["b"],null,Object(c["J"])(e.children,(function(t){return Object(c["D"])(),Object(c["j"])("div",{class:"menu-t2",key:t._id},[Object(c["m"])(l,{checked:t.isChecked,"onUpdate:checked":function(e){return t.isChecked=e},onChange:function(n){return u.onChangeT2(n,t,e)}},{default:s((function(){return[Object(c["l"])(Object(c["M"])(t.name),1)]})),_:2},1032,["checked","onUpdate:checked","onChange"]),(Object(c["D"])(!0),Object(c["j"])(c["b"],null,Object(c["J"])(t.children,(function(n){return Object(c["D"])(),Object(c["j"])("div",{class:"menu-t3",key:n._id},[Object(c["m"])(l,{checked:n.isChecked,"onUpdate:checked":function(e){return n.isChecked=e},onChange:function(){return u.onChangeT3(e,t)}},{default:s((function(){return[Object(c["l"])(Object(c["M"])(n.name),1)]})),_:2},1032,["checked","onUpdate:checked","onChange"])])})),128))])})),128))])})),128))])]})),_:1})]})),_:1},8,["model","rules"])]})),_:1},8,["visible","title","onOk"])})),j=n("ade3"),m=n("1da1"),O=(n("159b"),n("96cf"),{name:[{required:!0,message:"请输入",trigger:"blur",type:"string"}],describe:[{required:!0,message:"请输入",trigger:"blur",type:"string"}]}),h={setup:function(e,t){var n=Object(c["H"])({name:null,describe:null,id:null,roleMenuList:[]}),u=Object(c["H"])({type:1,visible:!1,formRef:Object(c["I"])(),menuList:[]}),r=function(){u.formRef.validate().then((function(){p(u.menuList,n.roleMenuList),1!=u.type?Object(l["g"])(n).then((function(e){h(e)})):Object(l["d"])(n).then((function(e){h(e)}))}))},o=function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:u.type=1,M(),s();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){u.type=2,M();var t=e.name,c=e.describe,r=e._id;Object.assign(n,{name:t,describe:c,id:r}),f()},s=function(){Object(l["i"])().then((function(e){u.menuList=e.data,b(u.menuList)}))},f=function(){Object(l["j"])(n.id).then((function(e){u.menuList=e.data,b(u.menuList)}))},b=function e(t){t.forEach((function(t){t.isChecked=!1,1==t.isChange&&(t.isChecked=!0),t.children.length>0&&e(t.children,t.isChecked)}))},h=function(e){1==e.code&&(u.formRef.resetFields(),a["a"].success("操作成功"),t.emit("refresh"),u.visible=!1)},p=function e(t,n){t.forEach((function(t){t.isChecked&&n.push(t._id),t.children.length>0&&e(t.children,n)}))},g=function e(t,n){t.forEach((function(t){t.isChecked=n,t.children.length>0&&e(t.children,n)}))},k=function(e,t){g(t.children,e.target.checked)},v=function(e,t,n){g(t.children,e.target.checked),n.isChecked=n.children.every((function(e){return e.isChecked}))},C=function(e,t){t.isChecked=t.children.every((function(e){return e.isChecked})),e.isChecked=e.children.every((function(e){return e.isChecked}))},M=function(){u.visible=!0,u.menuList=[],Object.assign(n,{name:null,describe:null,id:null,roleMenuList:[]})};return Object(i["a"])(Object(i["a"])(Object(j["a"])({form:n,rules:O},"rules",O),Object(c["O"])(u)),{},{submitHandle:r,showAddModal:o,showEditModal:d,getMenuList:s,onChangeT1:k,onChangeT2:v,onChangeT3:C})}};n("689d");h.render=b,h.__scopeId="data-v-498b9176";var p=h,g={0:"已停用",1:"使用中"},k=[{title:"角色名称",dataIndex:"name",align:"center"},{title:"状态",dataIndex:"status",align:"center",slots:{customRender:"status"}},{title:"角色描述",dataIndex:"describe",align:"center"},{title:"角色权限",dataIndex:"name",align:"center"},{title:"操作",dataIndex:"action",align:"center",slots:{customRender:"action"}}],v={components:{AddEditUserRole:p},setup:function(){var e=Object(c["I"])([]),t=Object(c["I"])(null),n=Object(c["H"])({queryInfo:{pageSize:10,pageNumber:1}}),u=function(){Object(l["m"])(n.queryInfo).then((function(t){e.value=t.data}))},r=function(){u()},o=function(){t.value.showAddModal()},s=function(e){t.value.showEditModal(e)},f=function(e){d["a"].confirm({title:"确认要执行操作吗?",okText:"确认",cancelText:"取消",onOk:function(){Object(l["o"])(e).then((function(e){1==e.code&&(a["a"].success("操作成功"),u())}))}})};Object(c["A"])((function(){u()}));var b=function(e){return g[e]};return Object(i["a"])(Object(i["a"])({columns:k,statusMap:g,data:e},Object(c["O"])(n)),{},{statusMapFilter:b,refresh:r,getList:u,addRole:o,editRole:s,delRole:f,role:t})}};v.render=o;t["default"]=v},"689d":function(e,t,n){"use strict";n("ed73")},cf7c:function(e,t,n){"use strict";n.d(t,"m",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"g",(function(){return i})),n.d(t,"o",(function(){return a})),n.d(t,"i",(function(){return d})),n.d(t,"j",(function(){return l})),n.d(t,"l",(function(){return s})),n.d(t,"k",(function(){return f})),n.d(t,"c",(function(){return b})),n.d(t,"f",(function(){return j})),n.d(t,"n",(function(){return m})),n.d(t,"h",(function(){return O})),n.d(t,"b",(function(){return h})),n.d(t,"e",(function(){return p})),n.d(t,"a",(function(){return g})),n.d(t,"p",(function(){return k}));var c=n("b775"),u={getRoleList:"/role/getRoleList",getAddMenuList:"/role/addGetMenuTree",getEditMenuList:"/role/editGetMenuTree",addRole:"/role/addRole",eidtRole:"/role/editRole",removeRole:"/role/removeRole",getMenuTree:"/menu/getMenuTree",addMenuTree:"/menu/addMenu",getMenuList:"/menu/getMenuList",editMenuTree:"/menu/editMenu",removeMenuTree:"/menu/removeMenu",getAccountList:"/users/getAccountList",addAccount:"/users/addAccount",delAccount:"/users/delAccount",accountStatusSet:"/users/accountStatusSet",resultPassWord:"/users/resultPassWord",roleAssignment:"/users/roleAssignment"};function r(e){return Object(c["a"])({url:u.getRoleList,method:"post",data:e})}function o(e){return Object(c["a"])({url:u.addRole,method:"post",data:e})}function i(e){return Object(c["a"])({url:u.eidtRole,method:"post",data:e})}function a(e){return Object(c["a"])({url:u.removeRole,method:"post",data:{id:e}})}function d(){return Object(c["a"])({url:u.getAddMenuList,method:"post"})}function l(e){return Object(c["a"])({url:u.getEditMenuList,method:"post",data:{id:e}})}function s(e){return Object(c["a"])({url:u.getMenuTree,method:"post",data:e})}function f(){return Object(c["a"])({url:u.getMenuList,method:"post"})}function b(e){return Object(c["a"])({url:u.addMenuTree,method:"post",data:e})}function j(e){return Object(c["a"])({url:u.editMenuTree,method:"post",data:e})}function m(e){return Object(c["a"])({url:u.removeMenuTree,method:"post",data:{id:e}})}function O(){return Object(c["a"])({url:u.getAccountList,method:"post"})}function h(e){return Object(c["a"])({url:u.addAccount,method:"post",data:e})}function p(e){return Object(c["a"])({url:u.delAccount,method:"post",data:{id:e}})}function g(e){return Object(c["a"])({url:u.accountStatusSet,method:"post",data:e})}function k(e){return Object(c["a"])({url:u.roleAssignment,method:"post",data:e})}},ed73:function(e,t,n){}}]);