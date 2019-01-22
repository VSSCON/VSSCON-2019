(function ($) {
    $(function () {
  
      $(window).resize(agResize);
      agResize();
  
      function agResize() {
  

      
        
        $('#js-countdown').TimeCircles({
          ref_date: new Date(2019, 2, 2, 0, 0, 0, 0),
          start: true,
          refresh_interval: 0.1,
          count_past_zero: false,
          circle_bg_color: '#DEDEDE',
          use_background: true,
          fg_width: 0.05,
          bg_width: 0.50,
          time: {
            Days: {show: true, text: 'Days', color: '#F21C46'},
            Hours: {show: true, text: 'Hours', color: '#F21C46'},
            Minutes: {show: true, text: 'Minutes', color: '#F13C5F'},
            Seconds: {show: true, text: 'Seconds', color: '#F13C5F'}
          }
        }).rebuild();
      }
    
  
    });
  })(jQuery);

