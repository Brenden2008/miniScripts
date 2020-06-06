function LoginParse() {
    window.$_GET = new URLSearchParams(location.search);
    var UserModel = $_GET.get("userModel");
    var userloginintent = $_GET.get("userLoginIntent");
    var email = $_GET.get("email");
    var password = $_GET.get("password");
    return UserModel + userloginintent + email + password;
}
