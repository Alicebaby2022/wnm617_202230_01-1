const makeMap = async (target, center={ lat:  37.74908169308192,  lng: -122.43195884959489 }) => {
   await checkData(()=>window.google);

   let map_el = $(target);

   if(!map_el.data("map")) map_el.data({
      "map": new google.maps.Map(map_el[0], {
         center,
         zoom: 12,
         disableDefaultUI: true,
      })
   });

   return map_el; 
}
   

const makeMarkers = (map_el, map_locs=[]) => {
   let {map,markers} = map_el.data();

   if(markers) markers.forEach(m=>m.setMap(null));

   markers = [];

     map_locs.forEach(l=>{
         new google.maps.Marker({
         position: l, 
         map,        
       });
         markers.push(markers);
     });
     map_el.data({m});
   }      