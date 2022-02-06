const access_key = "6PcRg_DL-yY_hnuU5G3HG8d_tydPWj9Cx3YmUG-ND7M";
const secret_key = "2f-DdP2O1q1M-5i_xRuWCdASMC3uTn2YOcEe2gfB0Z0";
let button_reference = document.getElementById('initButton');
let search = document.getElementById("search");

button_reference.addEventListener('click', showImages); 

function imageClicked (event) {
   var img_prev_r = document.getElementById("img_preview");
   img_prev_r.classList.remove("d-none");
   var img_r = img_prev_r.children[0];
   img_r.src = event.target.src;
}

function showImages(element) {
   element.preventDefault();
   var container_ref = document.getElementById("gallery_container"); 
   container_ref.innerText = "";
   fetch(`https://api.unsplash.com/search/photos/?client_id=${access_key}&query=${search.value}`)
      .then((image) => image.json())
      .then((img_res) => {
         for (let i = 0; i <img_res.results.length; i++) {
            let single_result = img_res.results[i];
            let single_url = single_result.urls.regular;
            console.log(single_url);
            var img_ref = document.createElement("img"); 
            img_ref.src = single_url;
            img_ref.addEventListener('click', imageClicked)
            container_ref.appendChild(img_ref);
         }
   });
   search.value = "";
}
let cancel= document.getElementById("close");
cancel.addEventListener('click', Close);
  function Close(){
      var img_prev_r = document.getElementById("img_preview");
      img_prev_r.classList.add("d-none");
}