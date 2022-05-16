const RecentPage = async() => {

   await checkData(()=>window.google);

   console.log(window.google)

   let {result,error} = await query({
      type:'recent_animal_locations',
      params:[sessionStorage.userId]
   });
   console.log(result);

   if(error) throw(error);

    let valid_animals = result.reduce((r,o)=>{
      o.icon = o.img;
      if(o.lat && o.lng) r.push(o);
      return r;
   },[]);

  let map_el = await makeMap("#recent-page .map");
   makeMarkers(map_el,valid_animals)

      map_el.data("markers").forEach((m,i)=>{
      console.log(m)
      m.addListener("click",function(e){
          console.log(valid_animals[i])

      map_el.data("infoWindow") 
            .open(map_el.data("map"),m);
      map_el.data("infoWindow")
            .setContent(valid_animals[i].name);
       })
     })
   }



const ListPage = async() => { 
   // destructuring
   let {result:animals} = await query({
      type:'animals_by_user_id',
      params:[sessionStorage.userId]
   })
   
   console.log(animals)

   makeAnimalList(animals);
}


const makeAnimalListSet = (animals) => {  
   $("#list-page .animal-list").html(makeAnimalList(animals));
}






const UserProfilePage = async() => {
   let {result:users} = await query({
      type:'user_by_id',
      params:[sessionStorage.userId]
   })
   let [user] = users;

   console.log(user)

   $("#user-profile-page [data-role='main']").html(makeUserProfilePage(user));
}

const UserEditPage = async() => {
   let {result:users} = await query({
      type:'user_by_id',
      params:[sessionStorage.userId]
   })
   let [user] = users;

   $("#user-edit-form").html(makeUserForm(user,"user-edit"))
}


const UserEditPhotoPage = async () => {
   let {result:users} = await query({
      type:'user_by_id',
      params:[sessionStorage.userId]
   })
   let [user] = users;

   $("#user-edit-photo-page .imagepicker").css({
      "background-image":`url(${user.img})`
   })
}




 

const AnimalProfilePage = async() => {
   let {result:animals} = await query({
      type:'animal_by_id',
      params:[sessionStorage.animalId]
   })
   let [animal] = animals;
   $(".animal-profile-top").css({"background-image":`url(${animal.img})`})
   $("#animal-profile-page h1").html(animal.name)
   $(".animal-profile-description").html(makeAnimalProfileDescription(animal));

   let {result:locations} = await query({
      type:'locations_by_animal_id',
      params:[sessionStorage.animalId]
   })
   console.log(locations)
   let map_el = await makeMap("#animal-profile-page .map");
   makeMarkers(map_el,locations)
}




const AnimalEditPage = async() => {
   let {result:animals} = await query({
      type:'animal_by_id',
      params:[sessionStorage.animalId]
   })
   let [animal] = animals;

   $("#animal-edit-form").html(makeAnimalForm(animal,"animal-edit"))
}
const AnimalAddPage = async() => {
   let {result:animals} = await query({
      type:'animal_by_id',
      params:[sessionStorage.animalId]
   })
   let [animal] = animals;

   $("#animal-add-form").html(makeAnimalForm({},"animal-add"))
}
const AnimalEditPhotoPage = async () => {
   let {result:animals} = await query({
      type:'animal_by_id',
      params:[sessionStorage.animalId]
   })
   let [animal] = animals;

   $("#animal-edit-photo-page .imagepicker").css({
      "background-image":`url(${animal.img})`
   })
}


const ChooseLocationPage = async () => {
   let map_el = await makeMap("#choose-location-page .map");

   map_el.data("map").addListener("click",function(e){
      console.log(e)
      $("#location-lat").val(e.latLng.lat())
      $("#location-lng").val(e.latLng.lng())
      makeMarkers(map_el,[e.latLng])
   })
}