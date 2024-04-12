// JavaScript Document
function KiemTraThongTin(){
				var firstname=document.getElementById("firstname");
				if (firstname.value==""){
					alert("Vui lòng nhập tên!");
					firstname.focus();
					return false;
				}
				var lastname=document.getElementById("lastname");
				if (lastname.value==""){
					alert("Vui lòng nhập họ!");
					lastname.focus();
					return false;
				}
				var email=window.document.register.txtEmail;
				re=/\w+@\w+\.\w+/;
				if (email.value==""){
					alert("Bạn chưa nhập Email.") ;
					email.focus();
					return false;
				}
				else
					if(re.test(email.value)==false){
						alert("Email không đúng định dạng!");
						email.focus();
						return false;
					}		
			alert("Đăng ký thành công! Xin chúc mừng.");
			return true;
			}
			
			
			
	