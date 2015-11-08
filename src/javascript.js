(function() {
  $(document).ready(function() {

    // start closure
    (function() {
      var scrollToID;

      scrollToID = function(id) {
        $("html, body").animate({
          scrollTop: $("#" + id).offset().top - 50
        }, function() {
          $("html, body").clearQueue();
        });
      };

      window.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

      if (!window.isMobile) {
        $('a.smart-link').click(function(e) {
          var hash;
          e.preventDefault();
          e.stopPropagation();
          hash = $(this).attr('href');
          hash = hash.substr(1, hash.length);
          scrollToID(hash);
        });

        $('#main-navbar').on('activate.bs.scrollspy', function (event) {
          var anchor, element;
          anchor = $.parseHTML(event.target.innerHTML)[0];
          element = $(anchor.hash);
          element.attr("id", "");
          window.location.hash = anchor.hash;
          element.attr("id", anchor.hash.substr(1, anchor.hash.length));
        });
      }

    })(); // end closure

    document.getElementById("plan-konf").addEventListener("click", function(event) {
      event.stopPropagation();
      window.alert("I was here");
      console.log(this);
      this.classList.add("animation") ;
    });

    window.addEventListener("click", function(event) {
      var number = prompt("Please add number");
      if(parseInt(number)) {
        window.alert(number);
      } else {
        window.alert("It's not a number");
      }
    });

    document.getElementById("button-event").addEventListener("click", function(event) {
      event.stopPropagation();
      window.alert(parseFloat(Math.floor(Math.random()*100)));
    });

  });
}).call(this);
