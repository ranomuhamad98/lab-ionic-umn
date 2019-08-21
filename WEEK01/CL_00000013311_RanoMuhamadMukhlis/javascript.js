var var_1, var_2, total = 0;

$(document).ready(function() {
    onStart();
});

function onStart(){
    $('#button_delete').on('click', function () {
        $('#var_1').val('');
        $('#var_2').val('');

        $('.ionItem').remove();
        $("#label_total").text('Rp. 0,00');
        total = 0;
        console.log(total)
    } );
  
    $('#button_add').on('click', function () {
    var_1 = $('#var_1').val();
    var_2 = $('#var_2').val();
    if(var_1 == '' || var_2 == ''){
        handleButtonClick();
    }
    else{
        onCount(var_1, var_2);
        $('#var_1').val('');
        $('#var_2').val('');
        document.getElementById("item_2").style.display = "visible";
    }
    } );
}

function handleButtonClick() {
    controller.create({
      header: 'Terjadi Kesalahan',
      message: 'Mohon masukkan nama dan jumlah pengeluaran.',
      buttons: ['Tutup']
    }).then(alert => {
      alert.present();
    });
  }

function onCount(var_1, var_2) {
    var itemAppend1 = '<ion-item class="ionItem">' +
                        '<ion-label>' + var_1 + '</ion-label>' +
                        '<ion-label> Rp. ' + var_2 + ',00</ion-label>' +
                        '</ion-item>';
    total += parseInt(var_2);
    $(itemAppend1).insertBefore( "#list" );

    $("#label_total").text('Rp. ' + total + ',00');

    console.log(var_1);
    console.log(var_2);
}