const staffList = document.getElementById("staff-List");
const service= document.getElementById("service");
const type= document.getElementById("type");
const capacity = document.getElementById("capacity");
const price = document.getElementById("price");
let btnAdd = document.getElementById("add");
const indice =document.getElementById("indice");
const form = document.getElementById("form");
const add=document.getElementById("add");




let services = [
    {service:'Sound',
    type:'Corporative',
    capacity:'15-30',
    price:400},
    {service:'Catering Service',
    type:'Social',
    capacity:'100-500',
    price:8},
   
]

function servicesLists(){
    const htmlEvents = services.map((staff,index)=>`
    <tr>
    <th scope="row">${index}</th>
    <td>${staff.service}</td>
    <td>${staff.type}</td>
    <td>${staff.capacity}</td>
    <td>${staff.price}</td>
    <td>   <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-warning edit" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="fa-regular fa-pen-to-square"></i></button>
      <button type="button" class="btn btn-danger erase"><i class="fa-regular fa-trash"></i></button>
      
    </div></tr>
  <tr>`).join("");
  staffList.innerHTML = htmlEvents
  Array.from(document.getElementsByClassName('edit')).forEach((btnEdit,index)=>btnEdit.onclick=edit(index))
  Array.from(document.getElementsByClassName('erase')).forEach((btnErase, index)=>btnErase.onclick=erase(index))
  
};

function enviarDatos(event){
    event.preventDefault();
    const datos = {
        service: service.value,
        type: type.value,
        capacity: capacity.value,
        price: price.value,
        indice: indice.value};
    const accion = btnAdd.innerHTML;
    switch(accion){
      case 'Edit':
        services[indice.value]=datos;
   
        
      break;
      default:
        services.push(datos);
      break; 
    
    }
    servicesLists();
   resetModal();
}

function edit(index){
  return function whenClicker(){
    btnAdd.innerHTML = 'Edit'
     
    const staff= services[index];
    
        service.value = staff.service,
        type.value = staff.type,
        capacity.value = staff.capacity,
        price.value = staff.value,
        indice.value = index 
      
        
      }
    

}
function erase(index){
  return function clickDelet(){
          services = services.filter((staff, indice)=>indice !== index); 
          servicesLists()   
  
        }
  

}
function resetModal(){

        service.value = '';
        type.value = '';
        capacity.value = '';
        price.value = '';
        indice.value = '';
        btnAdd.innerHTML='Add'

} 

servicesLists();
form.onsubmit = enviarDatos
btnAdd.onclick = enviarDatos


