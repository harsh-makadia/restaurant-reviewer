function IndexController(){}fetch("/data/restaurants.json").then(function(e){return e.json()}).then(function(e){var t=MyApp.templates.restaurantSnippet(e);document.getElementById("restaurants").innerHTML=t});var Index=new IndexController,filterDialogEl=document.getElementById("filter-dialog"),dialogOverlay=document.querySelector(".dialog-overlay");new Dialog(filterDialogEl,dialogOverlay,".open-filter-dialog",".close-filter-dialog");