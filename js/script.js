window.addEventListener("load", ()=>{
	document.querySelector(".main").classList.remove("hidden");
	document.querySelector(".home-section").classList.add("active");
	/*----------- page loader -------- */
	document.querySelector(".page-loader").classList.add("fade-out");
	setTimeout(() =>{
		document.querySelector(".page-loader").style.display = "none";

	},600);

});


/* --------------- Toggle Navbar --------------- */
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", ()=>{
	hideSection();
	toggleNavbar();
	document.body.classList.toggle("hide-scrolling");
});
function hideSection(){
	document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar() {
	document.querySelector(".header").classList.toggle("active");

}

/* --------------- Active Section --------------- */
document.addEventListener("click", (e) =>{
	if(e.target.classList.contains("link-item") && e.target.hash !== ""){
		// activate the overlay to prevent multiple clicks
		document.querySelector(".overlay").classList.add("active");
		navToggler.classList.add("hide");
		const hash = e.target.hash;
		if (e.target.classList.contains("nav-item")) {
			toggleNavbar();
		}
		else{
			hideSection();
			document.body.classList.add("hide-scrolling");
		}
		setTimeout(() =>{
			document.querySelector("section.active").classList.remove("active","fade-out");
			document.querySelector(e.target.hash).classList.add("active");
			document.body.classList.remove("hide-scrolling");
			navToggler.classList.remove("hide");
			document.querySelector(".overlay").classList.remove("active");
		},500);
	}

});
/*---------- About Tabs -----------*/
const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) =>{
	if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
		tabsContainer.querySelector(".active").classList.remove("active");
		e.target.classList.add("active");
		const target = e.target.getAttribute("data-target");
		aboutSection.querySelector(".tab-content.active").classList.remove("active");
		aboutSection.querySelector(target).classList.add("active");

	}
	
});

/*----------------- Portfoilo Item Details Popup -------------*/
document.addEventListener("click", (e) =>{
	if(e.target.classList.contains("view-project-btn")){
		togglePortfoiloPopup();
		document.querySelector(".portfoilo-popup").scrollTo(0,0);
		portfoiloItemDetails(e.target.parentElement);
	}

})
function togglePortfoiloPopup() {
	document.querySelector(".portfoilo-popup").classList.toggle("open");
	document.body.classList.toggle("hide-scrolling");
	document.querySelector(".main").classList.toggle("fade-out");
}

document.querySelector(".pp-close").addEventListener("click", togglePortfoiloPopup);

/*------- Carusel  js --------*/  
  	const myCarousel = document.getElementById('myCarousel')
  	myCarousel.addEventListener('slid.bs.carousel', function () {
    const activeItem = this.querySelector(".active");
    document.querySelector(".testi-img img").src = activeItem.getAttribute("data-img");
    document.querySelector(".testi-img .circle").style.backgroundColor = activeItem.getAttribute("data-color");
  });

// hidee popup when clicking outside of it 

document.addEventListener("click", (e) =>{
	if(e.target.classList.contains("pp-inner")){
		togglePortfoiloPopup();
	}

})

function portfoiloItemDetails(portfoiloItem){
	document.querySelector(".pp-thumbnail img").src =
	portfoiloItem.querySelector(".portfoilo-item-thumbnail img").src;

	document.querySelector(".pp-header h3").innerHTML = 
	portfoiloItem.querySelector(".portfoilo-item-title").innerHTML;

	document.querySelector(".pp-body").innerHTML =
	portfoiloItem.querySelector(".portfoilo-item-details").innerHTML;
}
/* ------------- light/dark theme ------------ */
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () =>{
	dayNight.querySelector("i").classList.toggle("fa-sun");
	dayNight.querySelector("i").classList.toggle("fa-moon");
	document.body.classList.toggle("dark");

});

window.addEventListener("load", () =>{
	if (document.body.classList.contains("dark")) {
		dayNight.querySelector("i").classList.add("fa-sun");
	}
	else{
		dayNight.querySelector("i").classList.add("fa-moon");
	}
});

//------- Filter  js --------//  
	var $grid = $(".grid");    
    $('.filters ul li').click(function(){
    	$('.filters ul li').removeClass('active');
    	$(this).addClass('active');
        var data = $(this).attr('data-filter');
        $grid.isotope({
          filter: data
        })
      });

      if(document.getElementById("portfolio")){
      	$grid.isotope({
      		itemSelector: ".all",
            percentPosition: true,
            masonry: {
            	columnWidth: ".all"
              }
            });
		};
