function toggleMenu () 
{
    const navbar =document.querySelector('.navbar');
    const burger =document.querySelector('.burger');
    burger.addEventListener('click',() => 
    {
        navbar.classList.toggle('show-nav');
        Footer.classList.toggle('show-nav');
    })
}
toggleMenu();


$('[data-toggle=tooltip]').tooltip();

$('.hover-animation').hover(
  function() {
    $( this ).toggleClass( 'animated rubberBand ' + $( this ).attr('data-hover-color') + '-text' );
  }
);