function init() {
    $( "#btnTinhGia" ).on( "click", onBtnTinhGiaClicked);
}
  
init();

const ambPrice = {
    tranhPrice:{
        decan: 250000,
        mica1: 320000,
        dinhda: 350000,
        catMica1: 350000,
        catMica3: 480000,
    },
    khungPrice: {
        thuong: 20000,
        nhom25: 45000,
        nhom35: 75000
    },
    denLed: 20000,
    nguon: 20000,
    dongHo: 30000,
    dieuKhien: 30000,
    congTac: 25000,
    quaLac: 30000,
    dongGoi: 25000
}

const tranhTypeConstants = {
    trangGuong1: 1,
    trangGuong2: 2,
    dinhDa:3,
    cat1: 4,
    cat3: 5,
}

const khungTypeConstants = {
    thuong: 0,
    nhom25: 1,
    nhom35: 2
}

const ambChiPhi = {
    ads: 150000,
    giamGia: 30000,
}

function onBtnTinhGiaClicked(){

    const width = $('#width').val() / 100;
    const height = $('#height').val() / 100;
    
    const dieuKhien = $('#dieuKhien').is(":checked") ? ambPrice.dieuKhien : 0;
    const dongHo = $('#dongHo').is(":checked") ? ambPrice.dongHo : 0;
    const congTac = $('#congTac').is(":checked") ? ambPrice.congTac : 0;
    const quaLac = $('#quaLac').is(":checked") ? ambPrice.quaLac : 0;

    const chuVi = (width + height) * 2;
    const dienTich = width * height;

    const giaNhap = getGiaInTranh(dienTich) + getGiaDen(chuVi) + giaKhung(chuVi) + dieuKhien + dongHo + congTac + quaLac + ambPrice.dongGoi;

    const chiPhi = ambChiPhi.ads + ambChiPhi.giamGia
    const total = giaNhap + chiPhi + giaShip(dienTich) + loiNhuan(dienTich);

    $('#totalPrice').text(total);
}

const getGiaInTranh = (dienTich) => {
    const tranhType = parseInt($('#tranhType').find(":selected").val());
    switch(tranhType){
        case tranhTypeConstants.trangGuong1: return ambPrice.tranhPrice.decan * dienTich;
        case tranhTypeConstants.trangGuong2: return ambPrice.tranhPrice.mica1 * dienTich;
        case tranhTypeConstants.dinhDa: return ambPrice.tranhPrice.dinhda * dienTich;
        case tranhTypeConstants.cat1: return ambPrice.tranhPrice.catMica1 * dienTich;
        case tranhTypeConstants.cat3: return ambPrice.tranhPrice.catMica3 * dienTich;
    }
}

const getGiaDen = (chiVi) => {

    const useLight = $('input[name="lightType"]:checked').val();
    if(useLight == "1"){
        return ambPrice.denLed * chiVi;
    }

    return 0;
}

const giaKhung = (chiVi) => {
    const khungType = parseInt($('input[name="khungType"]:checked').val());
    switch(khungType){
        case khungTypeConstants.thuong: return ambPrice.khungPrice.thuong * chiVi;
        case khungTypeConstants.nhom25: return ambPrice.khungPrice.nhom25 * chiVi;
        case khungTypeConstants.nhom35: return ambPrice.khungPrice.nhom35 * chiVi;
    }
}

const giaShip = (dienTich) => {
    if(dienTich > 0.2) return 40000;
    if(dienTich > 0.3) return 45000;
    if(dienTich > 0.5) return 75000;
    if(dienTich > 0.7) return 85000;
    if(dienTich > 0.9) return 125000;
    if(dienTich > 1.25) return 150000;
    if(dienTich > 1.5) return 170000;
    if(dienTich > 2) return 200000;
    if(dienTich > 2.5) return 250000;
}

const loiNhuan = (dienTich) => {

    if(dienTich > 0.2) return 60000;
    if(dienTich > 0.3) return 80000;
    if(dienTich > 0.5) return 100000;
    if(dienTich > 0.7) return 120000;
    if(dienTich > 0.9) return 180000;
    if(dienTich > 1.25) return 150000;
    if(dienTich > 1.5) return 170000;
    if(dienTich > 2) return 200000;
    if(dienTich > 2.5) return 250000;


    if(dienTich > 0.3) return 80000;
    if(dienTich > 0.5) return 100000;
    if(dienTich > 0.7) return 120000;
    if(dienTich > 0.9) return 180000;
    if(dienTich > 1.3) return 250000;
    if(dienTich > 1.5) return 250000;
    if(dienTich > 2.5) return 400000;
}