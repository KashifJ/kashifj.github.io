$('#project-modal').on('show.bs.modal', function (e) {

    var button = $(e.relatedTarget);
    var modal = $(this);
    
    // or, load content from value of data-remote url
    modal.find('.modal-body').load(button.data("remote"));
    $("html").addClass( "modal-open" );


    $('.slider-arrows .next').on("click", function(){
      alert("ddd");
    });

});

    $('#project-modal').on("hide.bs.modal", function() {
        $("html").removeClass("modal-open");        
    }); 

    

    var pages = [].slice.call(document.querySelectorAll('.pages > .page')),
      currentPage = 0,
      
      revealerOpts = {
        nmbLayers : 1,
        bgcolor : ['#dc4158', '#fff', '#000'],
        effect : 'anim--effect-3',
        onStart : function(direction) {
          var nextPage = pages[currentPage === 0 ? 1 : 0];
                    classie.add(nextPage, 'page--animate-' + direction);
                    setTimeout(function() {
                        document.getElementById("body").classList.remove("hide");
                        document.getElementById("a-00").classList.add("animate-first");
                        document.getElementById("a-01").classList.add("animate-first");
                        document.getElementById("a-02").classList.add("animate-first");
                        document.getElementById("a-03").classList.add("animate-first");
                        document.getElementById("a-04").classList.add("animate-first");
                        document.getElementById("a-04").classList.add("animate-now");
                    }, 500);
        },
        onEnd : function(direction) {
          var nextPage = pages[currentPage === 0 ? 1 : 0];
                    nextPage.className = 'page';
        }
      };
            revealer = new Revealer(revealerOpts);
            
      function reveal(direction) {
        var callbackTime = 750,
          callbackFn = function() {
            classie.remove(pages[currentPage], 'page--current');
            currentPage = currentPage === 0 ? 1 : 0;
            classie.add(pages[currentPage], 'page--current'); 
          };

        revealer.reveal(direction, callbackTime, callbackFn);
      }
            
            reveal('top');



            $(document).ready(function () {            
                $('.skills-wrapper').simplemarquee({
                    speed: 100,
                    cycles: 100000,
                    space: 0,
                    delayBetweenCycles: 100,
                    handleHover: false,
                    handleResize: false
                });


                

            });