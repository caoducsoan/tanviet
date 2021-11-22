function Lay_gia_tri_cu(){
    return document.getElementById("gia_tri_cu").innerText;
}

function In_gia_tri_cu(ss) {
    document.getElementById("gia_tri_cu").innerText = ss;
}


function lay_ket_qua() {
    return document.getElementById("gia_tri_xuat").innerText;
}
function In_Ket_qua(ss) {
    if(ss=="") {
        document.getElementById("gia_tri_xuat").innerText = ss;
    } else {
        document.getElementById("gia_tri_xuat").innerText = Dinh_dang_chuoi(ss);
    }
 
}
function Dinh_dang_chuoi(ss) {
    if(ss == "-") {
        return "";
    }
    var n = Number(ss);
    var gia_tri = n.toLocaleString("en");
    return gia_tri;
}

function Xoa_Dinh_dang_chuoi(ss) {
    return Number(ss.replace(/,/g, ''))
} 


var cn = document.getElementsByClassName('cn');
for(var i=0; i < cn.length; i++) {
    cn[i].addEventListener('click', function() {
        if(this.id == "xoa_tat") {
            In_Ket_qua("");
            In_gia_tri_cu("");
        } 
        else if(this.id == "xoa_tung_so") {
            let ket_qua = Xoa_Dinh_dang_chuoi(lay_ket_qua()).toString();
            if(ket_qua) {
                ket_qua = ket_qua.substr(0, ket_qua.length -1)
                In_Ket_qua(ket_qua)
            }
        } 
        else {
            var ket_qua = lay_ket_qua();
            var ket_qua_cu = Lay_gia_tri_cu();
            if(ket_qua != "") {
                ket_qua = Xoa_Dinh_dang_chuoi(ket_qua);
                ket_qua_cu =ket_qua_cu + ket_qua;
                if(this.id == "=") {
                    var ket_qua_cuoi = eval(ket_qua_cu);
                    In_Ket_qua(ket_qua_cuoi)
                    In_gia_tri_cu("")
                } else {
                    ket_qua_cu = ket_qua_cu + this.id;
                    In_gia_tri_cu(ket_qua_cu)
                    In_Ket_qua("")
                }
            }
        }
    })
}

var so = document.getElementsByClassName('so');
for(var i=0; i < so.length; i++) {
    so[i].addEventListener('click', function() {
        var ket_qua = Xoa_Dinh_dang_chuoi(lay_ket_qua())
        if(ket_qua != NaN) {
            ket_qua = ket_qua + this.id;
            In_Ket_qua(ket_qua)
        }
    })
}