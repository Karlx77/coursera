$(function(){
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();
    $('.carousel').carousel({
        interval: 2000
    });
    $('#exampleModal').on('shown.bs.modal', function (e){
        console.log("el modal se mostro");
    })
    $('#exampleModal').on('show.bs.modal', function (e){
        $('#modal1').removeClass('btn-outline-warning')
        $('#modal1').addClass('btn-outline-success')        
    })
    $('#exampleModal').on('hide.bs.modal', function (e){
        console.log("se oculta")
    })
    $('#exampleModal').on('hidden.bs.modal', function (e){
        $('#modal1').addClass('btn-outline-warning') 

    })
})