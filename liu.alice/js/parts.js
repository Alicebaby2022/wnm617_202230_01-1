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
    <a href="#user-profile-page" class="form-button">Confirm</a>
    </div>
</form>
      
</div>

`;


const makeAnimalProfileDescription = o => `
<h2>${o.name}</h2>
<div>${o.type}</div>
<div>${o.breed}</div>

`;