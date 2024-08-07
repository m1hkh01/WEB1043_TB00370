function hienThiFormDangKy() {
    var modal = document.getElementById('id01');
    modal.style.display = "block";
  }
  
  function dongFormDangKy() {
    var modal = document.getElementById('id01');
    modal.style.display = "none";
  }
  
  function kiemTraDangKy() {
    var firstName = document.forms["formDangKy"]["firstname"].value;
    var lastName = document.forms["formDangKy"]["lastname"].value;
    var email = document.forms["formDangKy"]["email"].value;
    var mobile = document.forms["formDangKy"]["mobile"].value;
    var password = document.forms["formDangKy"]["psw"].value;
    var repeatPassword = document.forms["formDangKy"]["psw-repeat"].value;
  
    if (firstName == "" || lastName == "") {
      alert("Vui lòng nhập Họ và Tên");
      return false;
    }
    
    if (!validateEmail(email)) {
      alert("Địa chỉ email không hợp lệ");
      return false;
    }
  
    if (!validateMobile(mobile)) {
      alert("Số điện thoại phải có ít nhất 10 chữ số");
      return false;
    }
  
    if (password !== repeatPassword) {
      alert("Mật khẩu không khớp");
      return false;
    }
  
    console.log("First name:", firstName);
    console.log("Last name:", lastName);
    console.log("Email:", email);
    alert("Đăng kí thành công!")

    return true; 
  }
  
  function validateEmail(email) {
    var regex = /^[a-zA-Z0-9.]+@[a-z0-9.]+\.[a-z]{2,}$/;
    return regex.test(email);
  }
  
  function validateMobile(mobile) {
    var regex = /^\d{10,}$/;
    return regex.test(mobile);
  }