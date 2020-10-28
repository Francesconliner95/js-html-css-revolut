$(document).ready(function() {

/***METODO CON PULSANTE***/

    // $('.right>div').click(function() {
    //
    //     $('.right>div>div').removeClass('active'); //rimuoviamo da tutte le voci la classe active
    //     var pulsante_attuale=$(this).index(); /*creiamo una variabile al cui interno inseriamo la posizione del pulsante cliccato*/
    //     console.log(pulsante_attuale);
    //     $('.right>div>div').eq( pulsante_attuale ).addClass('active'); /*diciamo di attivare la classe al div annidato in un div alla posizione X definita grazie a .eq()*/
    //
    // });

/***METODO CON HOVER***/

    $('.right>div').mouseenter(function() {

        $('.right>div>div').removeClass('active'); //rimuoviamo da tutte le voci la classe active
        var pulsante_attuale=$(this).index(); /*creiamo una variabile al cui interno inseriamo la posizione del pulsante cliccato*/
        console.log(pulsante_attuale);
        $('.right>div>div').eq( pulsante_attuale ).addClass('active'); /*diciamo di attivare la classe al div annidato in un div alla posizione X definita grazie a .eq()*/

    });

    $('.right>div>div').mouseleave(function() {

        $('.right>div>div').removeClass('active'); //rimuoviamo active se usciamo del drop menu

    });


});
