$(document).ready(function() {
  // The HTML string for your green bottom border
  
  // Select your mobile menu button/icon (e.g., a hamburger menu icon)
  $('#mobile-menu-toggle').click(function() {
      // Select your main navigation container
      $('#nav-menu').toggleClass('active'); 
    });
    
    
    const borderHTML = '<div class="nav-border absolute bottom-0 left-0 w-full h-[3px] bg-[#22C55E] rounded-t-sm"></div>';
    
  $(".nav-item").on("click", function(e){
    // e.preventDefault();

    //1. Reset all tabs
    $(".nav-item").removeClass("active");
    $('.nav-item a').removeClass('text-[#FFFFFF]');
    $(".nav-border").remove();

    //2. Activate the clicked tab
    $(this).addClass('active');
    $(this).find('a').addClass('text-[#FFFFFF]');
    $(this).append(borderHTML);


  })

  $(".player-card").on("click", function() {
    //1. Get data from clicked card
    const name = $(this).find('.player-name').text();
    const role = $(this).find('.player-role').text();
    const img = $(this).find('img').attr('src');

    const runs = $(this).data('runs') || $(this).data('wickets') || "N/A";
    const matches = $(this).data('matches') || $(this).data('wickets') || "N/A";
    const sr = $(this).data('sr') || $(this).data('economy') || "N/A";
    const about = $(this).data('about') || "No description available.";
    const runsOrWicketdata = $(this).data('pstat1item') || "N/A";
    const wicketsOrMatches = $(this).data('pstat2item') || "N/A";
    const economyOrSRdata = $(this).data('pstat3item') || "N/A";

    $("#modalName").text(name.toUpperCase()); 
    $("#modalRole").text(role);
    $("#modalImg").attr('src', img);
    $("#modalRuns").text(runs);
    $("#modalMatches").text(matches);
    $("#modalSR").text(sr);
    $("#modalAbout").text(about);

    $("#statItem1Span").text(runsOrWicketdata);
    $("#statItem2Span").text(wicketsOrMatches);
    $("#statItem3Span").text(economyOrSRdata);

    $("#playerModal").css('display', 'flex');
    $("body").css('overflow', 'hidden');
    
  })

  $(".close-x, .modal-close-btn, .modal-overlay").on("click", function(e) {
    if(e.target !== this) return;
    $("#playerModal").hide();
    $("body").css('overflow', 'auto');
  })


  $(".matches-filter-tabs > .tab").click(function(){
    $(".matches-filter-tabs > .tab").removeClass("active");

    $(this).addClass("active");

    // let filter = $(this).text().toLowerCase();
    let filter = $(this).data("filter");

    $(".match-card-for-matches").each(function() {
      
      let status = $(this).data('status');

      if(filter === "all") {
        $(this).show();
      }
      else if(status === filter) {
        $(this).show();
      }
      else {
        $(this).hide();
      }
    })

  })


  function updateCounts() {
  let total = $(".match-card-for-matches").length;
  let upcoming = $('[data-status="upcoming"]').length;
  let live = $('[data-status="live"]').length;
  let completed = $('[data-status="completed"]').length;

  $('.tab[data-filter="all"] .count').text(total);
  $('.tab[data-filter="upcoming"] .count').text(upcoming);
  $('.tab[data-filter="live"] .count').text(live);
  $('.tab[data-filter="completed"] .count').text(completed);
}

// Call once on load
updateCounts();


$(".players-filter-tabs > .tab").click(function() {
  $(".players-filter-tabs > .tab").removeClass("active");

  $(this).addClass("active");

  let filter = $(this).data("filter");

  // console.log(filter)
  $(".player-card").each(function() {

    let role = $(this).data("role");

    if(filter === "all") {
      $(this).closest(".col-lg-3").show();
    }
    else if(role === filter) {
      $(this).closest(".col-lg-3").show();
    }
    else {
      $(this).closest(".col-lg-3").hide();
    }


  })



})




  

});