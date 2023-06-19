import{_ as g}from"./_plugin-vue_export-helper.cdc0426e.js";import{V as _,a as y,b as n}from"./VSpacer.1cd00b13.js";import{o as T,Z as x,R as b,_ as V,T as l,y as t,W as s,ab as v,X as r,z as D,ag as w,ak as O,al as m,U as u}from"./index.f457a545.js";import{V as p,a as f,b as h,c as P,d as I}from"./VDialog.1988f6ec.js";import{b as j,V as N,a as c}from"./VRow.297e3676.js";const z={data:()=>({dialog:!1,dialogDelete:!1,headers:[{title:"Id",align:"start",sortable:!1,key:"id"},{title:"RFC",sortable:!1,key:"rfc"},{title:"Nombre",sortable:!1,key:"nombre"},{title:"Apellido",sortable:!1,key:"apellido"},{title:"Actions",key:"actions",sortable:!1}],datos:[],editedIndex:-1,editedItem:{id:0,rfc:"",nombre:"",apellido:""},defaultItem:{id:0,rfc:"",nombre:"",apellido:""}}),computed:{formTitle(){return this.editedIndex===-1?"New Item":"Edit Item"}},watch:{dialog(e){e||this.close()},dialogDelete(e){e||this.closeDelete()}},created(){this.initialize()},methods:{initialize(){T(async()=>{const a=await(await fetch("http://localhost:4000/propietarios")).json();this.datos=a.map(o=>({id:o.id,rfc:o.rfc,nombre:o.nombre,apellido:o.apellido}))})},editItem(e){this.editedIndex=this.datos.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem(e){this.editedIndex=this.datos.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm(){this.datos.splice(this.editedIndex,1),this.deletePropietario(this.editedItem),this.closeDelete()},close(){this.dialog=!1,this.$nextTick(()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1})},closeDelete(){this.dialogDelete=!1,this.$nextTick(()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1})},save(){if(this.editedIndex>-1){Object.assign(this.datos[this.editedIndex],this.editedItem);const e=JSON.stringify({id:this.editedItem.id,rfc:this.editedItem.rfc,nombre:this.editedItem.nombre,apellido:this.editedItem.apellido});console.log(e),this.updatePropietario(e)}else{this.datos.push(this.editedItem);const e=JSON.stringify({rfc:this.editedItem.rfc,nombre:this.editedItem.nombre,apellido:this.editedItem.apellido});this.postPropietario(e)}this.close()},async postPropietario(e){(await fetch("http://localhost:4000/propietarios",{method:"POST",headers:{"Content-Type":"application/json"},body:e})).json().then(o=>{console.log(o)}),this.initialize()},async updatePropietario(e){(await fetch("http://localhost:4000/propietarios/",{method:"PATCH",headers:{"Content-Type":"application/json"},body:e})).json().then(o=>{console.log(o)}),this.initialize()},async deletePropietario(e){(await fetch("http://localhost:4000/propietarios/"+e.id,{method:"DELETE"})).json().then(o=>{console.log(o)})}}},R={class:"text-h5"};function S(e,a,o,A,E,d){const C=x("v-data-table");return b(),V(C,{headers:e.headers,items:e.datos,class:"elevation-1"},{top:l(()=>[t(_,{flat:""},{default:l(()=>[t(y,null,{default:l(()=>[s("PROPIETARIOS")]),_:1}),t(v,{class:"mx-4",inset:"",vertical:""}),t(n),t(p,{modelValue:e.dialog,"onUpdate:modelValue":a[4]||(a[4]=i=>e.dialog=i),"max-width":"800px"},{activator:l(({props:i})=>[t(r,D({color:"primary",dark:"",class:"mb-2"},i),{default:l(()=>[s(" Nuevo propietario ")]),_:2},1040)]),default:l(()=>[t(f,null,{default:l(()=>[t(h,null,{default:l(()=>[w("span",R,O(d.formTitle),1)]),_:1}),t(P,null,{default:l(()=>[t(j,null,{default:l(()=>[t(N,null,{default:l(()=>[t(c,{cols:"12",sm:"6",md:"4"},{default:l(()=>[t(m,{modelValue:e.editedItem.id,"onUpdate:modelValue":a[0]||(a[0]=i=>e.editedItem.id=i),label:"Id"},null,8,["modelValue"])]),_:1}),t(c,{cols:"12",sm:"6",md:"4"},{default:l(()=>[t(m,{modelValue:e.editedItem.rfc,"onUpdate:modelValue":a[1]||(a[1]=i=>e.editedItem.rfc=i),label:"RFC"},null,8,["modelValue"])]),_:1}),t(c,{cols:"12",sm:"6",md:"4"},{default:l(()=>[t(m,{modelValue:e.editedItem.nombre,"onUpdate:modelValue":a[2]||(a[2]=i=>e.editedItem.nombre=i),label:"Nombre"},null,8,["modelValue"])]),_:1}),t(c,{cols:"12",sm:"6",md:"4"},{default:l(()=>[t(m,{modelValue:e.editedItem.apellido,"onUpdate:modelValue":a[3]||(a[3]=i=>e.editedItem.apellido=i),label:"Apellido"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),t(I,null,{default:l(()=>[t(n),t(r,{color:"blue-darken-1",variant:"text",onClick:d.close},{default:l(()=>[s(" Cancel ")]),_:1},8,["onClick"]),t(r,{color:"blue-darken-1",variant:"text",onClick:d.save},{default:l(()=>[s(" Save ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(p,{modelValue:e.dialogDelete,"onUpdate:modelValue":a[5]||(a[5]=i=>e.dialogDelete=i),"max-width":"500px"},{default:l(()=>[t(f,null,{default:l(()=>[t(h,{class:"text-h5"},{default:l(()=>[s("\xBFEstas seguro que deseas borrar?")]),_:1}),t(I,null,{default:l(()=>[t(n),t(r,{color:"blue-darken-1",variant:"text",onClick:d.closeDelete},{default:l(()=>[s(" Cancel ")]),_:1},8,["onClick"]),t(r,{color:"blue-darken-1",variant:"text",onClick:d.deleteItemConfirm},{default:l(()=>[s(" Ok ")]),_:1},8,["onClick"]),t(n)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),"item.actions":l(({item:i})=>[t(u,{size:"small",class:"me-2",onClick:k=>d.editItem(i.raw),icon:"mdi-pencil"},null,8,["onClick"]),t(u,{size:"small",class:"me-2",onClick:k=>d.deleteItem(i.raw),icon:"mdi-delete"},null,8,["onClick"])]),"no-data":l(()=>[t(r,{color:"primary",onClick:d.initialize},{default:l(()=>[s("Reset")]),_:1},8,["onClick"])]),_:1},8,["headers","items"])}const U=g(z,[["render",S]]),L={__name:"Propietarios",setup(e){return(a,o)=>(b(),V(U))}};export{L as default};