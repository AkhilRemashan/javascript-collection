
<script type="text/javascript">
$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('.slider-container').css('min-height', windowHeight);
  };
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });
});
</script>
