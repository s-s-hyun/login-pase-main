let id = "sim"
let password = "1234"

$("#asd").on("click",function(){
    var id_id = $("#input_id").val()
    var password_pass = $("#input_password").val()
    if(id_id == id){
        if(password_pass == password){
            location.href("https://www.naver.com/")
            console.log(id_id)
        }else{ alert("올바른 아이디를 입력해주시기 바랍니다.")}
    }else{ alert("올바른 비밀번호를 입력해주시기 바랍니다.")}
})

function concet(){
    var id_id = document.getElementById("input_id").value;
    var password_pass = document.getElementById("input_password").value;
    if(id_id == id){
        if(password_pass == password){
            location.href = "https://www.naver.com/"
            console.log(id_id)
        }else{alert("올바른 비밀번호를 입력해주시기 바랍니다.") }
    }else{ alert("올바른 아이디를 입력해주시기 바랍니다.")}
}