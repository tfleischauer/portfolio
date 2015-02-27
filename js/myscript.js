$(document).ready(function() {
    function changePage () {
      $("nav a").removeClass("selected");
      $(this).addClass("selected"); 
      
      var container = $(this).attr("href");
      
      $('html, body').animate({
        scrollTop:$(container).offset().top}
      , 1200);
      
      return false;     
    }
  
  $("a.project").click(changePage);
  $("nav li a.jump").click(changePage);
  $("#contact a").click(changePage);
  
  $("#hideable-ul-nan-designs").hide();
  $("#hideable-ul-nan-php-templates").hide();	
  $("#show-hide-nan-designs-li").click(showHideNanDesigns);
  $("#show-hide-nan-php-templates-li").click(showHideNanPhpTemplates);
  $("#nav-collapse-nan").click(showHideMenu);
  
  $("#hideable-ul-recreate-wireframes").hide();
  $("#show-hide-recreate-wireframes-li").click(showHideRecreateWireFrames);
  $("#nav-collapse-recreate").click(showHideMenu);	
  
  $("#nav-collapse-mark").click(showHideMenu);
  
  $("#nav-collapse-trombone").click(showHideMenu);
  
  $("#hideable-major-exploration-images").hide();
  $("#show-hide-major-exploration-images").click(showHideMajorExplorationImages);
  $("#nav-collapse-major-exploration").click(showHideMenu);
  
  $("#nav-collapse-homeconnect").click(showHideMenu);
  
  $("#nav-collapse-giddy-throng").click(showHideMenu);
  
  $("#nav-collapse-earthship-seattle").click(showHideMenu);
  
  // make id div after menu / inside #content-area-x
  $("#content-area-nan").prepend("<div id='description_nan'></div>");
  $("#content-area-recreate").prepend("<div id='description_recreate'></div>");
  $("#content-area-mark").prepend("<div id='description_mark'></div>"); 
  $("#content-area-trombone").prepend("<div id='description_trombone'></div>");
  $("#content-area-major-exploration").prepend("<div id='description_major_exploration'></div>");
  $("#content-area-homeconnect").prepend("<div id='description_homeconnect'></div>");
  $("#content-area-giddy-throng").prepend("<div id='description_giddy_throng'></div>");
  $("#content-area-earthship-seattle").prepend("<div id='description_earthship_seattle'></div>");
  
  // jQuery class 'hide', hides the contents of the div
  $("#description_nan").hide();
  $("#description_recreate").hide();
  $("#description_mark").hide();
  $("#description_trombone").hide();
  $("#description_major_exploration").hide();
  $("#description_homeconnect").hide();
  $("#description_giddy_throng").hide();
  $("#description_earthship_seattle").hide();
  
  // each list item in the sub-nav
  $(".project_title_nan").click(showDescriptionNan); 
  $(".project_title_recreate").click(showDescriptionRecreate);
  $(".project_title_mark").click(showDescriptionMark);
  $(".project_title_trombone").click(showDescriptionTrombone);
  $(".project_title_major_exploration").click(showDescriptionMajorExploration);
  $(".project_title_homeconnect").click(showDescriptionHomeConnect);
  $(".project_title_giddy_throng").click(showDescriptionGiddyThrong);  
  $(".project_title_earthship_seattle").click(showDescriptionEarthshipSeattle);  
  
  showFirstDescriptionNan();
  showFirstDescriptionRecreate();
  showFirstDescriptionMark();
  showFirstDescriptionTrombone();
  showFirstDescriptionMajorExploration();
  showFirstDescriptionHomeConnect();
  showFirstDescriptionGiddyThrong();
  showFirstDescriptionEarthshipSeattle();
	  
});

/*** SHOW-HIDE SUB-SUB MENUS ***/
function showHideMenu() {
  var menuId = $(this).attr("href");
  $(menuId).toggle();
  return false;		
}

function showHideNanDesigns() {
  if($("#hideable-ul-nan-designs").is(":visible")) {
	  $("#show-hide-nan-designs-li").html; // the li containing the ul
  } else {
	  $("#show-hide-nan-designs-li").html;
  }
  
  $("#hideable-ul-nan-designs").slideToggle();
  return false;	
}

function showHideNanPhpTemplates() {
  if($("#hideable-ul-nan-php-templates").is(":visible")) {
	  $("#show-hide-nan-php-templates-li").html;
  } else {
	  $("#show-hide-nan-php-templates-li").html;
  }
  
  $("#hideable-ul-nan-php-templates").slideToggle();
  return false;	
}

function showHideRecreateWireFrames() {
  if($("#hideable-ul-recreate-wireframes").is(":visible")) {
	  $("#show-hide-recreate-wireframes-li").html; 
  } else {
	  $("#show-hide-recreate-wireframes-li").html;
  }
  
  $("#hideable-ul-recreate-wireframes").slideToggle();
  return false;	
}

function showHideMajorExplorationImages() {
  if($("#hideable-major-exploration-images").is(":visible")) {
	  $("#show-hide-major-exploration-images").html;
  } else {
	  $("#show-hide-major-exploration-images").html;
  }
  
  $("#hideable-major-exploration-images").slideToggle();
  return false;	
}
/*** END SHOW-HIDE SUB-SUB MENUS ***/

function showDescriptionNan() {
  $("#description_nan").show();
  var pageHref = $(this).attr("href");
  $("#description_nan").load(pageHref + " .project_details_nan"); // class targets div in each project folder	
  return false;	
}

function showDescriptionRecreate() {
  // alert('hi!');
  $("#description_recreate").show();
  var pageHref = $(this).attr("href");
  // console.log(pageHref);
  //alert(pageHref + " .project_details_recreate");
  $("#description_recreate").load(pageHref + " .project_details_recreate"); 
  return false;	
}

function showDescriptionMark() {
  $("#description_mark").show();
  var pageHref = $(this).attr("href");
  $("#description_mark").load(pageHref + " .project_details_mark");
  return false;	
}

function showDescriptionTrombone() {
  $("#description_trombone").show();
  var pageHref = $(this).attr("href");
  $("#description_trombone").load(pageHref + " .project_details_trombone");	
  return false;	
}

function showDescriptionMajorExploration() {
  $("#description_major_exploration").show();
  var pageHref = $(this).attr("href");
  $("#description_major_exploration").load(pageHref + " .project_details_major_exploration");
  return false;
}

function showDescriptionHomeConnect() {
  $("#description_homeconnect").show();
  var pageHref = $(this).attr("href");
  $("#description_homeconnect").load(pageHref + " .project_details_homeconnect");
  return false;
}

function showDescriptionGiddyThrong() {
  $("#description_giddy_throng").show();
  var pageHref = $(this).attr("href");
  $("#description_giddy_throng").load(pageHref + " .project_details_giddy_throng");	
  return false;
}

function showDescriptionEarthshipSeattle() {
  $("#description_earthship_seattle").show();
  var pageHref = $(this).attr("href");
  $("#description_earthship_seattle").load(pageHref + " .project_details_earthship_seattle");
  return false;	
}

/*** SET OPENING PAGES ***/
function showFirstDescriptionNan() {
  $("#description_nan").show();
  $("#description_nan").load("web120/protosite.html" + " .project_details_nan");
  return false;	
}

function showFirstDescriptionRecreate() {
  $("#description_recreate").show();
  $("#description_recreate").load("web202/overview.html" + " .project_details_recreate");  
  return false;	
}

function showFirstDescriptionMark() {
  $("#description_mark").show();
  $("#description_mark").load("art483/overview.html" + " .project_details_mark");
  return false;	
}

function showFirstDescriptionTrombone() {
  $("#description_trombone").show();
  $("#description_trombone").load("hcde419/overview.html" + " .project_details_trombone");
  return false;	
}

function showFirstDescriptionMajorExploration() {
  $("#description_major_exploration").show();
  $("#description_major_exploration").load("info490/video-prototype.html" + " .project_details_major_exploration");
  return false;	
}

function showFirstDescriptionHomeConnect() {
  $("#description_homeconnect").show();
  $("#description_homeconnect").load("hcde418/overview.html" + " .project_details_homeconnect");
  return false;	
}

function showFirstDescriptionGiddyThrong() {
  $("#description_giddy_throng").show();
  $("#description_giddy_throng").load("web170/overview.html" + " .project_details_giddy_throng");
  return false;	
}

function showFirstDescriptionEarthshipSeattle() {
  $("#description_earthship_seattle").show();
  $("#description_earthship_seattle").load("web210/overview.html" + " .project_details_earthship_seattle");
  return false;		
}
/*** END SET OPENING PAGES ***/


/*jQuery(window).resize(function(){

if (jQuery(window).width() > 980) {
jQuery(".menu-main-menu-container").css('display', 'block');
}

if (jQuery(window).width() < 980) {
jQuery(".menu-main-menu-container").css('display', 'none');
}
});	
*/

/*jQuery(window).resize(function(){

if (jQuery(window).width() > 480) {
jQuery(".page").css('display', 'block');
}

if (jQuery(window).width() < 480) {
jQuery(".page").css('display', 'none');
}
});	*/

///// PrevPage and NextPage Buttons /////

// 1. get the document scroll position

var getScrollPosition_jQuery = function() {
  // find the window and put it in a variable (we are creating a cache)
  var $window = $(window);

  // shows how far the user has scrolled down the page
  var howFarDown = $window.scrollTop();
  console.log("howFarDown is " + howFarDown);

  return howFarDown;
};

// var testGetScrollPosition = getScrollPosition();
var testGetScrollPosition = getScrollPosition_jQuery();
console.log("getScrollPosition_jQuery: " + testGetScrollPosition);


//this function simply gets the window scroll position, works in all browsers
// from http://browse-tutorials.com/tutorial/get-and-save-jquery-window-scroll-position
function getPageScroll_VanillaJS() {
  var yScrollPosition;
  if (self.pageYOffset) {
    yScrollPosition = self.pageYOffset;
  } else if (document.documentElement && document.documentElement.scrollTop) {
    yScrollPosition = document.documentElement.scrollTop;
  } else if (document.body) {
    yScrollPosition = document.body.scrollTop;
  }
  return yScrollPosition;
}

var testGetPageScroll = getPageScroll_VanillaJS();
console.log("getPageScroll_VanillaJS is " + testGetPageScroll);


// 1B. have prevPage and nextPage buttons return their positions

var prevPage = $(".prevPage");
var nextPage = $(".nextPage");

prevPage.on('click', function(event) {
  var position = getScrollPosition_jQuery();
  console.log("I'm in the prevPage function: " + position);
  return position; 
});

$("a.scroll").on('click', function(event) {
  var pages = $(".page");
  var current;
  for (var i = 0; i < pages.length; i++) {
    var page = pages.get(i);
    var bounds = page.getBoundingClientRect();
    if (bounds.top < window.innerHeight / 2 && bounds.bottom > 100) {
        current = page;
        break;
    }
  }
  if (!current) return;
  var next = $(this).is(".nextPage") ? $(current).next(".page") : $(current).prev(".page");
  if (!next) return;
  var offset = next.offset();
  $("html, body").animate({ scrollTop: offset.top });
});


// 2. go through all the pages

// array literal of site page objects
var allPages = [
{
  id: "home-page-container",
  percentFromTop: 0,
  pixelsFromTop: 0

},
{
  id: "page-projects",
  percentFromTop: "100%",
  pixelsFromTop: 882

},
{
  id: "page-nan",
  percentFromTop: "200%",
  pixelsFromTop: 1764
},
{
  id: "page-reCreate",
  percentFromTop: "300%",
  pixelsFromTop: 2646
},
{
  id: "page-mark",
  percentFromTop: "400%",
  pixelsFromTop: 3528
},
{
  id: "page-trombone",
  percentFromTop: "500%",
  pixelsFromTop: 4410
},
{
  id: "page-major-exploration",
  percentFromTop: "600%",
  pixelsFromTop: 5292
},
{
  id: "page-home-connect",
  percentFromTop: "700%",
  pixelsFromTop: 6174
},
{
  id: "page-giddy-throng",
  percentFromTop: "800%",
  pixelsFromTop: 6645
},
{
  id: "page-earthship-seattle",
  percentFromTop: "900%",
  pixelsFromTop: 6645
},
{
  id: "page-contact",
  percentFromTop: "1000%",
  pixelsFromTop: 6645
}
];

// 2. go through all the pages
//for(var i = 0; i < allPages.length; i++) {
  //  find ''this' position
  // $this = $(this); // index.php nav is on line 95
  // console.log("$this is " + $this);

  // 3. get it's offset
  // var offset = $('.page').offset();

	// 4. locate first
  // var firstOffset = $(offset:first);
// }

// 5. first - find next 'page'
// note: every page starts with a div containing class="page", line 256 in 480.less
// look for automated plugin for auto scroll

// $(.page).find

// 7. scroll to that

// $( ".page" ).scrollTop( (100 - getScrollPosition_jQuery) + 100);
var positionPlus100 = $( ".page" ).getScrollPosition_jQuery + 100;
console.log("The position plus 100 is " + positionPlus100);

/*** VANILLA JS ***/
// element.getBoundingClientRect(); // Get position in viewport coordinates
/*** END VANILLA JS ***/



var firstItem = $(".first");
console.log(firstItem);
firstItem.addClass("selected-item");

// var underline = $(".project-menu a"); // recreate and nan
var underline = $(".menu-content ul a"); // all projects have a menu-content class
underline.on("click", function(event) {
	event.preventDefault(); // prevent browser default such as jumping and url changing in Chrome
	var $this = $(this); // vanilla JS to jQuery
	$this.closest(".menu-content").find(".selected-item").removeClass("selected-item");
	$this.addClass("selected-item");
});

// var hash = location.hash; // || "#fruit"; // use #id or otherwise use default of #fruit
// var firstItem = $(".project-menu ul li a[href='" + hash + "']");

// firstItem = $("li a:first-child");

// var firstItem = $(".project-menu ul a:first");

// var firstItem = $(".menu-content ul a:first");

// var hash = location.hash; // || "#fruit"; // use default or otherwise use fruit
// var firstItem = $(".project-menu a[href='" + hash + "']");



// firstItem.trigger("click");
// firstItem.click();

// var defaultSubNav = $(".project-menu");
// Default diplay: first tab div, auto "click" on-load of page
// defaultSubNav.filter("a:first").click();
// var $defaultSubNav;
// defaultSubNav.find(".project-menu a:first").click();


// web120/aia.html

// var hash = location.hash || "web120/aia.html"; // use default or otherwise use fruit
	// var firstItem = $(".project-menu a[href='" + hash + "']");
	// .tabs a[href='#fruit']
	// var firstItem = $(".tabs a:first");
	// firstItem.trigger("click");
	// firstItem.click();
	
 // $(".menu-content ul li ").not(":first").hide();
	