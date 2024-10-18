link rel="stylesheet" type="text/css" href="https://www.carleton.edu/departments/LIBR/Libguides/LG-structure.css">
<link rel="stylesheet" type="text/css" href="https://www.carleton.edu/departments/LIBR/Libguides/LG-colors.css">
<link rel="stylesheet" type="text/css" href="https://www.carleton.edu/departments/LIBR/Libguides/blueBannerCC.css">
<link rel="stylesheet" href="https://apps.carleton.edu/global_stock/bb-external/css/bluebar.css?v=2"/>
<link rel="stylesheet" type="text/css" href="https://www.carleton.edu/departments/LIBR/Libguides/LG-adminView.css">



<script>
// Makes the Carleton Blue Banner work
(function(){document.addEventListener("DOMContentLoaded",function(a){var b;return b=document.createElement("script"),b.type="text/javascript",b.src="https://apps.carleton.edu/global_stock/bb-external/js/bluebar.min.js",b.readyState?b.onreadystatechange=function(){("loaded"===b.readyState||"complete"===b.readyState)&&(b.onreadystatechange=null,initialBluebarSetup())}:b.onload=function(){initialBluebarSetup()},document.getElementsByTagName("head")[0].appendChild(b)})}).call(this);

// Converts the query string into valid query and scope parameter CATALYST TAB
function searchPrimo(primoScope)  {
  document.getElementById("primoQuery" + primoScope).value = "any,contains," + document.getElementById("primoQueryTemp" + primoScope).value.replace(/[,]/g, " "); 
  document.forms["searchForm" + primoScope].submit(); 
}

// Highlights active search scope CATALYST TAB
function activeSearch(id,queryInput)  {
  var activeDiv = document.getElementById(id);
  var inputField = document.getElementById(queryInput);
  inputField.focus();
  activeDiv.style.opacity = "1";
}

// Makes the editing options show up in guide edit view
$(document).ready(function() {
if (window.location.href.indexOf('carleton.libapps.com') > -1) {
   $('#s-lib-bc').attr('style', 'padding-top:40px;margin-bottom:50px;');
}
});
</script>
