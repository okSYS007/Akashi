const btn = document.querySelector('.btn-toggle');

btn.addEventListener('click', function() {

  document.body.classList.toggle('dark-theme');  
});
$(document).ready(function(){
    $('.dropdown-submenu a.test').on("click", function(e){
      $(this).next('ul').toggle();
      e.stopPropagation();
     e.preventDefault();
    });
  });