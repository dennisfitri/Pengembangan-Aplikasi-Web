function CekNama() {
    if (document.formContact.name.value == "")
        alert("Anda belum mengisi nama");
}

function CekCompany() {
    if (document.formContact.company.value == "")
        alert("Anda belum mengisi company");
}
function CekEmail() {
    if (document.formContact.email.value == "")
        alert("Anda belum mengisi email");
}
function CekMessage() {
    if (document.formContact.message.value == "")
        alert("Anda belum mengisi pesan");
}

function MenampilkanData() {
    var name = document.formContact.name.value;
    var company = document.formContact.company.value;
    var email = document.formContact.email.value;
    var message = document.formContact.message.value;
    if((name != "") && (company != "") && (email != "") && (message != ""))
    alert ("Terimakasih, "+name + " dari company " +company + 
    ", pesan anda saya terima. Balasan dari pesan anda akan saya kirimkan ke email " + email )
}

function aturWaktu() {
    var sekarang = new Date();
    var waktuSekarang = 
    sekarang.toLocaleString();
    document.formWaktu.teksWaktu.value = waktuSekarang;
    setTimeout('aturWaktu()', 1000);
    return(true);
}
    aturWaktu();

function CekNama() {
    if (document.formPendaftaran.namalengkap.value == "")
        alert("Anda belum mengisi Nama");
}
function CekEmail() {
    if (document.formPendaftaran.email.value == "")
        alert("Anda belum mengisi Email");
}
function CekNoTelpon() {
    if (document.formPendaftaran.no_telpon.value == "")
        alert("Anda belum mengisi No Telpon");
}
function CekAlasan() {
    if (document.formPendaftaran.alasan.value == "")
        alert("Anda belum mengisi alasan mengikuti bootcamp ini");
}
function MenampilkanDataBootcamp1() {
    var namalengkap = document.formPendaftaran.namalengkap.value;
    var email = document.formPendaftaran.email.value;
    var no_telpon = document.formPendaftaran.no_telpon.value;
    var alasan = document.formPendaftaran.alasan.value;
    if((namalengkap != "" ) && (email != "") && (no_telpon !="") && (alasan != ""))
        alert("Berikut data anda: \nNama             : "+ namalengkap + 
        "\nEmail              : " + email + 
        "\nNo Telpon      : " + no_telpon + 
        "\nJenis Bootcamp : Bootcamp UI/UX" +
        "\nAlasan           : " + alasan +
        "\nTerima Kasih, " + namalengkap +" telah mengisi formulir!")
    }

    function MenampilkanDataBootcamp2() {
        var namalengkap = document.formPendaftaran.namalengkap.value;
        var email = document.formPendaftaran.email.value;
        var no_telpon = document.formPendaftaran.no_telpon.value;
        var alasan = document.formPendaftaran.alasan.value;
        if((namalengkap != "" ) && (email != "") && (no_telpon !="") && (alasan != ""))
            alert("Berikut data anda: \nNama                 : "+ namalengkap + 
            "\nEmail                  : " + email + 
            "\nNo Telpon          : " + no_telpon + 
            "\nJenis Bootcamp : Bootcamp Keberagaman Digital" +
            "\nAlasan                : " + alasan +
            "\nTerima Kasih, " + namalengkap +" telah mengisi formulir!")
        }

        function MenampilkanDataBootcamp3() {
            var namalengkap = document.formPendaftaran.namalengkap.value;
            var email = document.formPendaftaran.email.value;
            var no_telpon = document.formPendaftaran.no_telpon.value;
            var alasan = document.formPendaftaran.alasan.value;
            if((namalengkap != "" ) && (email != "") && (no_telpon !="") && (alasan != ""))
                alert("Berikut data anda: \nNama                 : "+ namalengkap + 
                "\nEmail                  : " + email + 
                "\nNo Telpon          : " + no_telpon + 
                "\nJenis Bootcamp : Technopreneur Day" +
                "\nAlasan                : " + alasan +
                "\nTerima Kasih, " + namalengkap +" telah mengisi formulir!")
            }

            function MenampilkanDataBootcamp4() {
                var namalengkap = document.formPendaftaran.namalengkap.value;
                var email = document.formPendaftaran.email.value;
                var no_telpon = document.formPendaftaran.no_telpon.value;
                var alasan = document.formPendaftaran.alasan.value;
                if((namalengkap != "" ) && (email != "") && (no_telpon !="") && (alasan != ""))
                    alert("Berikut data anda: \nNama                 : "+ namalengkap + 
                    "\nEmail                  : " + email + 
                    "\nNo Telpon          : " + no_telpon + 
                    "\nJenis Bootcamp : Bahasa Pemrograman Python" +
                    "\nAlasan                : " + alasan +
                    "\nTerima Kasih, " + namalengkap +" telah mengisi formulir!")
                }