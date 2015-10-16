(function() {
  $(document).ready(function() {

    // start closure
    (function() {
      var scrollToID, isMobile;

      scrollToID = function(id) {
        $("html, body").animate({
          scrollTop: $("#" + id).offset().top - 50
        }, function() {
          $("html, body").clearQueue();
        });
      };

      isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

      if (!isMobile) {
        $('a.smart-link').click(function(e) {
          var hash;
          e.preventDefault();
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

  });
}).call(this);
