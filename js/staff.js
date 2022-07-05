const staffList = document.getElementById("staff-List");
const name= document.getElementById("name");
const service= document.getElementById("service");
const specific= document.getElementById("specific");
const radio = document.getElementById("radio");
const form = document.getElementById("form");
let btnAdd = document.getElementById("add");
const indice =document.getElementById("indice");
const add=document.getElementById("add")



let events = [
    {name:'Marina',
    service:'Furniture',
    specific:'Chair',
    radio:'Bello'},
    {name:'Stella',
    service:'food',
    specific:'Meal and wine',
    radio:'Envigado'}
]

function staffLists(){
    const htmlEvents = events.map((staff,index)=>`
    <tr>
    <th scope="row">${index}</th>
    <td>${staff.name}</td>
    <td>${staff.service}</td>
    <td>${staff.specific}</td>
    <td>${staff.radio}</td>
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
        name: name.value,
        service: service.value,
        specific: specific.value,
        radio: radio.value,
        indice: indice.value};
    const accion = btnAdd.innerHTML;
    switch(accion){
      case 'Edit':
        events[indice.value]=datos;
   
        
      break;
      default:
        events.push(datos);
      break; 
    
    }
    staffLists();
   resetModal();
}

function edit(index){
  return function whenClicker(){
    btnAdd.innerHTML = 'Edit'
     
    const staff= events[index];
    
        name.value = staff.name,
        service.value = staff.service,
        specific.value = staff.specific,
        radio.value = staff.radio,
        indice.value = index 
      
        
      }
    

}
function erase(index){
  return function clickDelet(){
          events = events.filter((staff, indice)=>indice !== index); 
          staffLists()   
  
        }
  

}
function resetModal(){
  name.value = '';
        service.value = '';
        specific.value = '';
        radio.value = '';
        indice.value = '';
        btnAdd.innerHTML='Add'

} 

staffLists();
form.onsubmit = enviarDatos
btnAdd.onclick = enviarDatos


