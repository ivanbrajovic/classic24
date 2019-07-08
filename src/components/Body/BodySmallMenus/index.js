const { wire } = hyperHTML;

export const BodySmallMenus = lis => wire()`

   <div class="small-menus">
     
   <ul class='body-menu'>
       ${lis.map(
         n =>
           wire(n)`<li onclick=${function() {
             //
             let sort = event.currentTarget;

             sort.textContent.includes("Shuffle all") &&
               document.getElementById("sort___3").click();
             sort.textContent.includes("play by period") &&
               document.getElementById("sort___2").click();

             sort.textContent.includes("play by authors") &&
               document.getElementById("sort___1").click();
             //
             sort.textContent.includes("sort albums by periods") &&
               document.getElementById("sort___33").click();
             sort.textContent.includes("sort albums by authors") &&
               document.getElementById("sort___100").click();
             sort.textContent.includes("Shuffle") &&
               document.getElementById("recentsort_").click();
           }}>${n.item} ${
             ~["Shuffle all", "Shuffle"].indexOf(n.item)
               ? wire()`<div class='body-meny_Shuffle'>
                 <img src="./src/images/shufle_image.png" alt="shuffle"/>
             </div>`
               : ~["play by authors", "sort albums by authors"].indexOf(n.item)
               ? wire(n)`<span class='sort-FROM'>&nbsp;A - Z</span>`
               : ""
           }</li>`
       )}
    </ul></div>
`;
