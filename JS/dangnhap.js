// JavaScript Document
function CheckLogin()
{
	var Username = document.getElementById('tendn').value; 
	if ( tendn.value == "")
	{
		alter("UserName is not null.");
		Username.focus();
		return false;
	}
	var Password = document.getElementById('matkhau').value;
	if (Password.value =="")
	{ 
		alter("Password is not null.");
		Password.focus();
		return false;
	}
	 if (tendn.value == "TTTVi" && matkhau.value == "12345")
	{
		alter("Login successfully");
		return true;
	}
	else
	{
		alter("UserName or Password incorrect")
		return false;
	}

}