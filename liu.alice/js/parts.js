const makeAnimalList = templater(o=>`
<li class="animal-list-item">
   <a href="#animal-profile-page" class="js-animal-jump" data-id="${o.id}">
      <div class="animal-list-image"><img src="${o.img}" alt=""></div>
      <div class="animal-list-body">
         <div class="animal-list-name">${o.name}</div>
         <div class="animal-list-type">Type: ${o.type}</div>
         <div class="animal-list-breed">Breed: ${o.breed}</div>
      </div>
   </a>
</li>
`);


const makeUserProfilePage = o => `


<div data-role="main">
   <form id="signin-form" class="form">
    <div class="form-control">
      <div class="userimage"> <img src="${o.img}"></div>
    
      <label for="sign-username" class="form-label">username</label>
      <input type="text" id="signin-username" data-role="none" class="form-input" placeholder="${o.username}">
    </div>
    <div class="form-control">
      <label for="signin-email" class="form-label">email</label>
    <input type="text" id="signin-useremail" data-role="none"class="form-input" placeholder="${o.email}">
    </div>

    <div class="form-control">
    <a href="#user-password-page" class="form-button">Edit password</a>
    </div>
</form>
      
</div>

`;











const makeAnimalProfileDescription = o => `
<h2>${o.name}</h2>
<div>${o.type}</div>
<div>${o.breed}</div> 

`;

const FormControlInput = ({namespace,name,displayname,type,placeholder,value}) => {
   return `<div class="form-control">
      <label class="form-label" for="#${namespace}-${name}">${displayname}</label>
      <input data-role="none" class="form-input" type="${type}" placeholder="${placeholder}" id="${namespace}-${name}" value="${value}">
   </div>`;
}

const FormControlTextarea = ({namespace,name,displayname,placeholder,value=""}) => {
   return `<div class="form-control">
      <label class="form-label" for="#${namespace}-${name}">${displayname}</label>
      <textarea data-role="none" class="form-input" placeholder="${placeholder}" id="${namespace}-${name}">${value}</textarea>
   </div>`;
}

 
const makeAnimalForm = (animal,namespace = "animal-add") => {
return `
${FormControlInput({
   namespace,
   name:"name",
   displayname:"Name",
   type:"text",
   placeholder:"Type a Name",
   value:animal.name,
})}
${FormControlInput({
   namespace,  
   name:"type",
   displayname:"Type",
   type:"text",
   placeholder:"Type a Type",
   value:animal.type,
})}
${FormControlInput({
   namespace,
   name:"breed",
   displayname:"Breed",
   type:"text",
   placeholder:"Type a Breed",
   value:animal.breed,
})}
${FormControlInput({
   namespace,
   name:"description",
   displayname:"Description",
   type:"text",
   placeholder:"Type a Description",
   value:animal.description,
})}
`;
}  



const makeUserForm = (user,namespace = "user-edit") => {
return `
${FormControlInput({
   namespace,
   name:"name",
   displayname:"Name",
   type:"text",
   placeholder:"Type a Name",
   value:user.name,
})}
${FormControlInput({
   namespace,
   name:"username",
   displayname:"Username",
   type:"text",
   placeholder:"Type a Username",
   value:user.username,
})}
${FormControlInput({
   namespace,
   name:"email",
   displayname:"Email",
   type:"text",
   placeholder:"Type an Email",
   value:user.email,
})}
`;
}