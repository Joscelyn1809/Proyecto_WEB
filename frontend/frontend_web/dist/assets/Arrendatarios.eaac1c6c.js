import{_ as g}from"./_plugin-vue_export-helper.cdc0426e.js";import{V as _,a as y,b as n}from"./VSpacer.1cd00b13.js";import{o as T,Z as x,R as b,_ as V,T as a,y as t,W as s,ab as v,X as r,z as A,ag as D,ak as w,al as m,U as u}from"./index.f457a545.js";import{V as f,a as h,b as p,c as O,d as I}from"./VDialog.1988f6ec.js";import{b as j,V as N,a as c}from"./VRow.297e3676.js";const z={data:()=>({dialog:!1,dialogDelete:!1,headers:[{title:"Id",align:"start",sortable:!1,key:"id"},{title:"RFC",sortable:!1,key:"rfc"},{title:"Nombre",sortable:!1,key:"nombre"},{title:"Apellido",sortable:!1,key:"apellido"},{title:"Actions",key:"actions",sortable:!1}],datos:[],editedIndex:-1,editedItem:{id:0,rfc:"",nombre:"",apellido:""},defaultItem:{id:0,rfc:"",nombre:"",apellido:""}}),computed:{formTitle(){return this.editedIndex===-1?"New Item":"Edit Item"}},watch:{dialog(e){e||this.close()},dialogDelete(e){e||this.closeDelete()}},created(){this.initialize()},methods:{initialize(){T(async()=>{const l=await(await fetch("http://localhost:4000/arrendatarios")).json();this.datos=l.map(i=>({id:i.id,rfc:i.rfc,nombre:i.nombre,apellido:i.apellido}))})},editItem(e){this.editedIndex=this.datos.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem(e){this.editedIndex=this.datos.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm(){this.datos.splice(this.editedIndex,1),this.deleteArrendatario(this.editedItem),this.closeDelete()},close(){this.dialog=!1,this.$nextTick(()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1})},closeDelete(){this.dialogDelete=!1,this.$nextTick(()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1})},save(){if(this.editedIndex>-1){Object.assign(this.datos[this.editedIndex],this.editedItem);const e=JSON.stringify({id:this.editedItem.id,rfc:this.editedItem.rfc,nombre:this.editedItem.nombre,apellido:this.editedItem.apellido});this.updateArrendatario(e)}else{this.datos.push(this.editedItem);const e=JSON.stringify({rfc:this.editedItem.rfc,nombre:this.editedItem.nombre,apellido:this.editedItem.apellido});this.postArrendatario(e)}this.close()},async postArrendatario(e){(await fetch("http://localhost:4000/arrendatarios",{method:"POST",headers:{"Content-Type":"application/json"},body:e})).json().then(i=>{console.log(i)}),this.initialize()},async updateArrendatario(e){(await fetch("http://localhost:4000/arrendatarios/",{method:"PATCH",headers:{"Content-Type":"application/json"},body:e})).json().then(i=>{console.log(i)}),this.initialize()},async deleteArrendatario(e){(await fetch("http://localhost:4000/arrendatarios/"+e.id,{method:"DELETE"})).json().then(i=>{console.log(i)})}}},R={class:"text-h5"};function S(e,l,i,E,B,o){const C=x("v-data-table");return b(),V(C,{headers:e.headers,items:e.datos,class:"elevation-1"},{top:a(()=>[t(_,{flat:""},{default:a(()=>[t(y,null,{default:a(()=>[s("ARRENDATARIOS")]),_:1}),t(v,{class:"mx-4",inset:"",vertical:""}),t(n),t(f,{modelValue:e.dialog,"onUpdate:modelValue":l[4]||(l[4]=d=>e.dialog=d),"max-width":"800px"},{activator:a(({props:d})=>[t(r,A({color:"primary",dark:"",class:"mb-2"},d),{default:a(()=>[s(" Nuevo arrendatario ")]),_:2},1040)]),default:a(()=>[t(h,null,{default:a(()=>[t(p,null,{default:a(()=>[D("span",R,w(o.formTitle),1)]),_:1}),t(O,null,{default:a(()=>[t(j,null,{default:a(()=>[t(N,null,{default:a(()=>[t(c,{cols:"12",sm:"6",md:"4"},{default:a(()=>[t(m,{modelValue:e.editedItem.id,"onUpdate:modelValue":l[0]||(l[0]=d=>e.editedItem.id=d),label:"Id"},null,8,["modelValue"])]),_:1}),t(c,{cols:"12",sm:"6",md:"4"},{default:a(()=>[t(m,{modelValue:e.editedItem.rfc,"onUpdate:modelValue":l[1]||(l[1]=d=>e.editedItem.rfc=d),label:"RFC"},null,8,["modelValue"])]),_:1}),t(c,{cols:"12",sm:"6",md:"4"},{default:a(()=>[t(m,{modelValue:e.editedItem.nombre,"onUpdate:modelValue":l[2]||(l[2]=d=>e.editedItem.nombre=d),label:"Nombre"},null,8,["modelValue"])]),_:1}),t(c,{cols:"12",sm:"6",md:"4"},{default:a(()=>[t(m,{modelValue:e.editedItem.apellido,"onUpdate:modelValue":l[3]||(l[3]=d=>e.editedItem.apellido=d),label:"Apellido"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),t(I,null,{default:a(()=>[t(n),t(r,{color:"blue-darken-1",variant:"text",onClick:o.close},{default:a(()=>[s(" Cancel ")]),_:1},8,["onClick"]),t(r,{color:"blue-darken-1",variant:"text",onClick:o.save},{default:a(()=>[s(" Save ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(f,{modelValue:e.dialogDelete,"onUpdate:modelValue":l[5]||(l[5]=d=>e.dialogDelete=d),"max-width":"500px"},{default:a(()=>[t(h,null,{default:a(()=>[t(p,{class:"text-h5"},{default:a(()=>[s("\xBFEstas seguro que deseas borrar?")]),_:1}),t(I,null,{default:a(()=>[t(n),t(r,{color:"blue-darken-1",variant:"text",onClick:o.closeDelete},{default:a(()=>[s(" Cancel ")]),_:1},8,["onClick"]),t(r,{color:"blue-darken-1",variant:"text",onClick:o.deleteItemConfirm},{default:a(()=>[s(" Ok ")]),_:1},8,["onClick"]),t(n)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),"item.actions":a(({item:d})=>[t(u,{size:"small",class:"me-2",onClick:k=>o.editItem(d.raw),icon:"mdi-pencil"},null,8,["onClick"]),t(u,{size:"small",class:"me-2",onClick:k=>o.deleteItem(d.raw),icon:"mdi-delete"},null,8,["onClick"])]),"no-data":a(()=>[t(r,{color:"primary",onClick:o.initialize},{default:a(()=>[s("Reset")]),_:1},8,["onClick"])]),_:1},8,["headers","items"])}const U=g(z,[["render",S]]),L={__name:"Arrendatarios",setup(e){return(l,i)=>(b(),V(U))}};export{L as default};