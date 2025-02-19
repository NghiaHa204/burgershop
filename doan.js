//các chính sách và điều khoảng
const DKSD = document.getElementById('DKSD')//điều khoảng sử dụng
const CSBM = document.getElementById('CSBM')//chính sách bảo mật
const CSVC = document.getElementById('CSVC')//chính sác vận chuyển


// Hàm lấy dữ liệu thống kê


function open_DKSD() {
    if (DKSD.style.display == 'block') {
        DKSD.style.display = 'none'
        return;
    }
    nhap_kho_close()
    quan_ly_user_close()
    close_tab()
    close_cart_tab()
    close_add_tab()
    close_edit_tab()
    close_bill_tab()
    thong_ke_close()
    page_thuc_don.style.display = "none";
    page_thanh_toan.style.display = "none";
    page_deal.style.display = "none";
    page_dot.style.display = "none";
    page_main.style.display = "none";
    DKSD.style.display = 'block';
    CSBM.style.display = 'none';
    CSVC.style.display = 'none';
}
function close_footer() {
    const footers = document.getElementsByClassName("footer"); // Lấy danh sách các phần tử có class "footer"
    for (let i = 0; i < footers.length; i++) {
        footers[i].style.display = "none"; // Ẩn từng phần tử
    }
}
function open_CSBM() {
    if (CSBM.style.display == 'block') {
        CSBM.style.display = 'none'
        return;
    }
    nhap_kho_close()
    quan_ly_user_close()
    close_tab()
    close_cart_tab()
    close_add_tab()
    close_edit_tab()
    close_bill_tab()
    thong_ke_close()
    page_thuc_don.style.display = "none";
    page_thanh_toan.style.display = "none";
    page_deal.style.display = "none";
    page_dot.style.display = "none";
    page_main.style.display = "none";
    CSBM.style.display = 'block';
    DKSD.style.display = 'none';
    CSVC.style.display = 'none';
}
function open_CSVC() {
    if (CSVC.style.display == 'block') {
        CSVC.style.display = 'none'
        return;
    }
    nhap_kho_close()
    quan_ly_user_close()
    close_tab()
    close_cart_tab()
    close_add_tab()
    close_edit_tab()
    close_bill_tab()
    thong_ke_close()
    page_thuc_don.style.display = "none";
    page_thanh_toan.style.display = "none";
    page_deal.style.display = "none";
    page_dot.style.display = "none";
    page_main.style.display = "none";
    CSVC.style.display = 'block';
    DKSD.style.display = 'none';
    CSBM.style.display = 'none';
}
function close_DKSD_CSBM_CSVC() {
    DKSD.style.display = 'none'
    CSBM.style.display = 'none'
    CSVC.style.display = 'none'
}
///////////////////////////
// admin();
var slideIndex = 0;
showSlides();//trang ảnh động
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;

    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
    setTimeout(showSlides, 4000);
}
//menu phân loại món trên giao diện user
function showMenu() {
    var List = [
        '<li class="items" id="items_burger" onclick="hien_thi_san_pham(`1`)"><a href="#"><img src="./img/burger.jpg" class="thumnail"><p>Burger</p></a></li>',
        '<li class="items" id="items_combo" onclick="hien_thi_san_pham(`2`)"><a href="#"><img src="./img/combo.jpg" class="thumnail"><p>Combo</p></a></li>',
        '<li class="items" id="items_chicken" onclick="hien_thi_san_pham(`3`)"><a href="#"><img src="./img/garan.jpg" class="thumnail"><p>Gà rán</p></a></li>',
        '<li class="items" id="items_food" onclick="hien_thi_san_pham(`4`)"><a href="#"><img src="./img/monankem.jpg" class="thumnail" id="monankem"><p>Món ăn kèm</p></a></li>',
        '<li class="items" id="items_water"onclick="hien_thi_san_pham(`5`)"><a href="#"><img src="./img/thucuong.jpg" class="thumnail" ><p>Thức uống</p></a></li>',
    ];
    var content = "";
    for (var i = 0; i < List.length; i++) {
        content += List[i];
    }
    document.getElementById("menuBar").innerHTML = content;
}//menu phân loại món trên giao diện admin tận dụng tài nguyên
function showMenu_admin() {
    var List = [
        '<li class="items" id="all" onclick="quan_ly_san_pham(`all`);sap_xep_product()"><a href="#"><img src="./img/list-stars.svg" class="thumnail"><p>Menu Chính</p></a></li>',
        '<li class="items" id="burger" onclick="quan_ly_san_pham(`burger`);sap_xep_product()"><a href="#"><img src="./img/burger.jpg" class="thumnail"><p>Burger</p></a></li>',
        '<li class="items" id="combo" onclick="quan_ly_san_pham(`combo`);sap_xep_product()"><a href="#"><img src="./img/combo.jpg" class="thumnail"><p>Combo</p></a></li>',
        '<li class="items" id="garan" onclick="quan_ly_san_pham(`garan`);sap_xep_product()"><a href="#"><img src="./img/garan.jpg" class="thumnail"><p>Gà rán</p></a></li>',
        '<li class="items" id="monankem" onclick="quan_ly_san_pham(`monankem`);sap_xep_product()"><a href="#"><img src="./img/monankem.jpg" class="thumnail" id="monankem"><p>Món ăn kèm</p></a></li>',
        '<li class="items" id="thucuong"onclick="quan_ly_san_pham(`thucuong`);sap_xep_product()"><a href="#"><img src="./img/thucuong.jpg" class="thumnail" ><p>Thức uống</p></a></li>',
    ];
    var content = "";
    for (var i = 0; i < List.length; i++) {
        content += List[i];
    }
    document.getElementById("menuBar_admin").innerHTML = content;
}
const el = document.getElementById("login");
if (el) {
    el.addEventListener("click", dangnhap)
}
let v = document.getElementById("login_form").classList;
let y = document.getElementById("page").classList;
let z = document.getElementById("register-form").classList;
function dangnhap() {
    v.remove("hide");
    v.add("appear-login");
    y.add("hide-page");
}
const exit = document.getElementById("iconX");
const exit2 = document.getElementById("iconX2");
exit.addEventListener("click", thoat);
exit2.addEventListener("click", thoat2);
var a = document.getElementById("register");
a.addEventListener("click", dangky);
function dangky() {
    v.remove("appear-login");
    v.add("hide");
    z.remove("hide");
    z.add("appear-register");
}
var b = document.getElementById("return_login");
//quay lại form đăng nhập
b.addEventListener("click", returnlog);
function returnlog() {
    v.remove("hide");
    v.add("appear-login")
    z.add("hide");
    z.remove("appear-register");
}
//thoát cái gì đó thì không biết (Nhật Nam commented)
function thoat() {
    v.add("hide");
    v.remove("appear-login");
    y.remove("hide-page");
}
function thoat2() {
    z.remove("appear-register");
    z.add("hide");
    y.remove("hide-page");
}
//sự kiện onclick gọi form đăng nhập đăng kí
document.getElementById("dangky").addEventListener("click", (event) => {
    checkregister(event);
    signup(event);
});
//kiểm tra đăng ký bằng các biểu thức chính quy
function checkregister(event) {
    
    var nameInput = document.getElementById("name");
    var idInput = document.getElementById("id_register");
    var passInput = document.getElementById("pass_register");
    var emailInput = document.getElementById('email');
    var phoneInput = document.getElementById('phonenumb');
    var retypePassInput = document.getElementById("retype_pass");

    var nameCheck = document.getElementById("check-name");
    var idCheck = document.getElementById("check-id-register");
    var passCheck = document.getElementById("check-pass-register");
    var emailCheck = document.getElementById('check-email');
    var phoneCheck = document.getElementById('check-phone-num');
    var retypePassCheck = document.getElementById("check_retype");

    idCheck.innerText = "";
    passCheck.innerText = "";
    emailCheck.innerText = "";
    phoneCheck.innerText = "";
    retypePassCheck.innerText = "";
    var regexName = /\d|[@#$%^&*]/;
    if (regexName.test(nameInput.value)) {
        nameCheck.innerText = "Tên không phù hợp!";
        nameInput.focus();
        return false;
    }
    if (nameInput.value.length < 5) {
        nameCheck.innerText = "Tên phải trên 5 ký tự!";
        nameInput.focus();
        return false;
    }
    var regexMail = /^([a-z0-9]+)@([a-z]+)\.([a-z]{2,6})$/;
    var email = emailInput.value;
    if (email.length < 1) {
        emailCheck.innerText = "Email không được để trống!";
        emailInput.focus();
        return false;
    }
    if (!regexMail.test(email)) {
        emailCheck.innerText = "Email không hợp lệ!";
        emailInput.focus();
        return false;
    }
    var regexPhone = /^0[0-9]{9,10}$/;
    var phone = phoneInput.value;
    if (phone.length < 1) {
        phoneCheck.innerText = "Số điện thoại không được để trống!";
        phoneInput.focus();
        return false;
    }
    if (!regexPhone.test(phone)) {
        phoneCheck.innerText = "Số điện thoại không hợp lệ!";
        phoneInput.focus();
        return false;
    }
    if (idInput.value.length < 1) {
        idCheck.innerText = "Tên đăng nhập không được để trống !";
        idInput.focus();
        return false;
    }
    if (idInput.value.length < 5) {
        idCheck.innerText = "Độ dài tên đăng nhập phải từ 5-9 ký tự!";
        idInput.focus();
        return false;
    }
    var regexPassword = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (passInput.value.length < 1) {
        passCheck.innerText = "Mật khẩu không được để trống!";
        passInput.focus();
        return false;
    }

    if (!regexPassword.test(passInput.value)) {
        passCheck.innerText = "Mật khẩu phải từ 8 kí tự, có một chữ hoa, kí tự đặc biệt, chữ số!";
        passInput.focus();
        return false;
    }


    var a = retypePassInput.value; var b = passInput.value;
    if (retypePassInput.value.length < 1) {
        retypePassCheck.innerText = "Bạn cần nhập lại mật khẩu!";
        retypePassInput.focus();
        return false;
    }
    if (a !== b) {
        retypePassCheck.innerText = "Nhập lại mật khẩu không khớp!";
        retypePassInput.focus();
        return false;
    }

    return true;
}
// Form đăng ký
function signup(event) {
    if (checkregister()) {
        event.preventDefault(); // Ngăn chặn hành động mặc định

        // Lấy ngày hiện tại
        const date = new Date();
        const day = ('0' + date.getDate()).slice(-2); // Đảm bảo 2 chữ số
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const year = date.getFullYear();
        const dateSignup = date.toISOString().slice(0, 10);


        // Lấy thông tin người dùng từ form
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phonenumb = document.getElementById("phonenumb").value.trim();
        const username = document.getElementById("id_register").value.trim();
        const password = document.getElementById("pass_register").value;

        // Tạo đối tượng user
        const user = {
            name,
            email,
            phone_number: phonenumb,
            username,
            password,
            dateSignup,
        };

        // Gửi dữ liệu đến API Backend
        fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (data.success) {
                    alert("Đăng ký thành công! Hãy đăng nhập để mua sắm bạn nhé!");
                    returnlog(); // Chuyển đến màn hình đăng nhập
                } else {
                    document.getElementById('check-email').innerText = data.message || "Đăng ký thất bại!";
                }
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('check-email').innerText = "Có lỗi xảy ra khi đăng ký. Vui lòng thử lại!";
            });
    } else {
        checkPermission(); // Thực hiện kiểm tra quyền
    }
}

//kiểm tra user đăng nhập
// Kiểm tra thông tin đăng nhập
function checkuser(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định

    const username = document.getElementById("loginName").value.trim();
    const password = document.getElementById("loginPass").value;

    if (!username || !password) {
        document.getElementById("errorPassword").innerText = "Tên đăng nhập và mật khẩu không được để trống!";
        return;
    }

    // Gửi yêu cầu đến API Backend để kiểm tra thông tin đăng nhập
    fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                // Lưu thông tin người dùng vào localStorage
                localStorage.setItem('userlogin', JSON.stringify(data.user));
                checkPermission();
                thoat(); // Thoát form đăng nhập
            } else {
                document.getElementById("errorPassword").innerText = data.message || "Đăng nhập thất bại!";
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById("errorPassword").innerText = "Có lỗi xảy ra, vui lòng thử lại!";
        });
}

function checkPermission() {

    if (localStorage.getItem('userlogin')) {
        var user = JSON.parse(localStorage.getItem('userlogin'));
        var s = '';
        if (user.username == 'admin') {
            s = `<span style="display: none;" id="input_span" >
                    <li class="search"><input class="input" id="input" type="text" maxlength="25"
                            placeholder="tìm kiếm..." onkeyup="search()" >
                    </li>
                    <button id="searchbutton"><img src="./img/search.svg" alt=""
                            onclick="search()">
                    </button>
                </span>` +
                `<li><a href="#" class="hid" id="thuc_don_button" onclick="hien_thi_san_pham('all')" >Thực đơn </a></li>` +
                `<div class="cart_main"> <li onclick="open_cart_tab()"><a href="#"  class="menutop"> <img src="./img/shopping.svg" alt=""><p>Giỏ hàng</p></a></li></div>` +
                `<li><a href="#"class="hid" id="adminSetting" onclick="nameNlogout()"><img src="./img/tools.svg"></a></li>` +
                `<li id="user_name" class="hid"><button >${user.name}</button><button id="btnlogout" onClick="logOut(\'doan.html\')">Đăng Xuất</button></li>`
        }
        else {
            s = `<span style="display: none;" id="input_span" >
                    <li class="search"><input class="input" id="input" type="text" maxlength="25"
                            placeholder="tìm kiếm..." onkeyup="search()" >
                    </li>
                    <button id="searchbutton"><img src="./img/search.svg" alt=""
                            onclick="search()">
                    </button>
                </span>
                <li><a href="#" class="hid" id="thuc_don_button" onclick="hien_thi_san_pham('all')" >Thực đơn </a></li>
                <div class="cart_main"> <li onclick="open_cart_tab()"><a href="#"  class="menutop"> <img src="./img/shopping.svg" alt=""><p>Giỏ hàng</p></a></li></div>
                <li id="user_name" class="hid"><button onclick="nameNlogout_cs()" >${user.name}</button><button id="btnlogout" onClick="logOut(\'doan.html\')">LOG OUT</button></li>`
        }
        document.getElementById("toprightmenu").innerHTML = s;

    }
    location.reload;
}
//thanh công cụ user
function nameNlogout_cs() {
    document.getElementById("page").style.display = "none"
    document.getElementById("wrap_admin").style.display = "block"
    var user = JSON.parse(localStorage.getItem('userlogin'));

    document.getElementById('ulnav_admin').innerHTML =
        `<li class="nav_admin_li"><a href="doan.html" id="logo_admin"><img src="./img/logo-burger-1.png" alt=""></a></li>` +
        `<li class="nav_admin_li"><a href="doan.html">trang chủ</a></li>` +
        `<li class="nav_admin_li"><a href="#" onclick="open_user_bill()" id="don_hang" >Quản lý đơn hàng</a></li>` +
        `<li class="nav_admin_li" id="nameUser">${user.name}<button id="btnLogout" onclick="logOut()">Đăng xuất</button></li>`;

}
// function logOut(url) {
//     localStorage.removeItem('userlogin');
//     location.href = url;
// }
//tài khoảng admin

//thanh công cụ quản lý của admin
function nameNlogout() {
    close_DKSD_CSBM_CSVC()
    document.getElementById("page").style.display = "none"
    document.getElementById("wrap_admin").style.display = "block"
    var user = JSON.parse(localStorage.getItem('userlogin'));

    document.getElementById('ulnav_admin').innerHTML =
        `<li class="nav_admin_li"><a href="doan.html" id="logo_admin"><img src="./img/logo-burger-1.png" alt=""></a></li>` +
        `<li class="nav_admin_li"><a href="doan.html">trang chủ</a></li>` +
        `<li class="nav_admin_li" onclick="quan_ly_san_pham('all')" id="quan_ly_san_pham"><a href="#">Quản lý sản phẩm</a></li>` +
        `<li class="nav_admin_li"><a href="#" onclick="open_bill_tab()" id="quan_ly_don_hang" >Quản lý đơn hàng</a></li>` +
        `<li class="nav_admin_li"><a href="#" onclick="open_user_tab()" id="quan_ly_user" >Quản lý khách hàng</a></li>` +
        `<li class="nav_admin_li"><a href="#" onclick="nhap_kho_open()" id="nhap_kho" >Nhập kho</a></li>` +
        `<li class="nav_admin_li"><a href="#" onclick="thong_ke_open()" id="thong_ke" >Thống Kê</a></li>` +
        `<li class="nav_admin_li" id="nameUser" onclick="nameNlogout()">${user.name}<button id="btnLogout" onclick="logOut()">Đăng xuất</button></li>`;

}
//đăng xuất
function logOut(url) {
    localStorage.removeItem('userlogin');
    location.href = './doan.html';
}
//khai báo cái thẻ để t65 cho việc thao tác đống mở tap
var page_deal = document.querySelector('#hoanh_chicken')
var page_thuc_don = document.querySelector('#thuc_don')
var page_main = document.querySelector('.slideshow-container')
var page_dot = document.querySelector('.dot_div')
var page_thanh_toan = document.querySelector(".page_main_thanh_toan")
showMenu();
checkPermission();
// Hàm để lấy dữ liệu từ tệp JSON và lưu vào Local Storage
// Hàm để lấy dữ liệu từ MySQL thay vì localStorage
async function lay_du_lieu() {
    try {
        const response = await fetch('http://localhost:3000/api/menuItems');  // Gọi API lấy dữ liệu từ MySQL
        if (!response.ok) {
            throw new Error('Lỗi khi lấy dữ liệu từ API');
        }
        const data = await response.json();  // Chuyển đổi phản hồi thành JSON
        
        window.productData = data;  // Lưu dữ liệu vào biến global
        console.log(data);
        console.log('Dữ liệu đã được lấy từ API.');

    } catch (error) {
        console.error('Lỗi khi đọc dữ liệu từ API:', error);
    }
}

// Hàm lấy dữ liệu từ API
async function lay_du_lieu_tu_api() {
    // Nếu chưa có dữ liệu, gọi lại hàm lay_du_lieu để lấy dữ liệu
    if (!window.productData) {
        await lay_du_lieu();  // Gọi bất đồng bộ và đợi dữ liệu
    }

    // Trả về dữ liệu từ biến global
    return window.productData || [];
}


const number_of_item = 6; // Biến phân trang với số lượng item mỗi trang là 6
let page_number = document.getElementById("page_number").value; // Lấy số trang của trang thực đơn

// Hàm chuyển trang sang trang tiếp theo
function page_next() {
    close_tab();
    const item = lay_du_lieu_tu_api();  // Lấy dữ liệu từ API
    if (item) {
        let limit = parseInt(item.length / number_of_item);
        var pageNumber = document.getElementById("page_number");
        pageNumber.value = parseInt(pageNumber.value) + 1;
        if (pageNumber.value > limit) {
            if (item.length % number_of_item === 0) {
                pageNumber.value = limit;
            } else {
                pageNumber.value = limit + 1;
            }
        }
        page_number = pageNumber.value;
        hien_thi_san_pham('all'); // Hiển thị sản phẩm
    }
}
let number_of_each_item;//lấy số lượng của mỗi loại sản phẩm để thuận tiện cho việc phân trang
let page_number_deal = document.getElementById("page_number_deal").value;//lấy số trang của trang phân loại
function page_next_deal() {
    close_tab();
    if (number_of_each_item) {
        let limit = parseInt(number_of_each_item / number_of_item);
        var pageNumber = document.getElementById("page_number_deal");
        pageNumber.value = parseInt(pageNumber.value) + 1;
        if (pageNumber.value > limit) {
            if (number_of_each_item % number_of_item == 0) {
                pageNumber.value = limit;
            } else {
                pageNumber.value = limit + 1;
            }
        }
        page_number_deal = pageNumber.value;
        hien_thi_san_pham(currentType);
    }
}
function page_back_deal() {
    close_tab();
    var pageNumber = document.getElementById("page_number_deal");
    pageNumber.value = parseInt(pageNumber.value) - 1;
    if (pageNumber.value < 1) {
        pageNumber.value = 1;
    }
    page_number_deal = pageNumber.value;
    hien_thi_san_pham(currentType);
}

// Hàm quay lại trang trước
function page_back() {
    close_tab();
    var pageNumber = document.getElementById("page_number");
    pageNumber.value = parseInt(pageNumber.value) - 1;
    if (pageNumber.value < 1) {
        pageNumber.value = 1;
    }
    page_number = pageNumber.value;
    hien_thi_san_pham('all'); // Hiển thị sản phẩm
}

// Hàm hiển thị sản phẩm theo phân loại
async function hien_thi_san_pham(type) {
    // Thể loại hiện tại
    if (currentType !== type.toString()) {
        currentType = type.toString();
        page_number_deal = 1;
    }


    close_DKSD_CSBM_CSVC();
    sap_xep_product();
    close_tab();

    // Lấy dữ liệu từ API thay vì từ Local Storage
    const data = await lay_du_lieu_tu_api();  // Dữ liệu lấy từ API
    let item = [];

    // Kiểm tra dữ liệu có tồn tại
    // console.log("Dữ liệu từ API:", data);

    // Nếu phân loại là tất cả
    if (type.toString() === "all") {
        open_search_input();
        let menuList = document.querySelector('#thuc_don .page_main_container .menu_list_ul');
        item = data;  // Gán toàn bộ dữ liệu cho item
        let page = parseInt(page_number);
        menuList.innerHTML = "";  // Xóa hết nội dung cũ trước khi thêm mới

        // Kiểm tra xem có sản phẩm nào không
        if (item.length === 0) {
            menuList.innerHTML = "<p>Không có sản phẩm nào</p>";
            return;
        }

        // Hiển thị các sản phẩm
        item.forEach((product, i) => {
            
            const addcontent = document.createElement('li');
            addcontent.classList.add('menu_list_li');
            addcontent.innerHTML = `
                <div class="menu_list_product" id="${ product.maSanPham}">
                    <a href="#" class="menu_list_img">
                        <img src="${product.hinhAnh}" onclick="get_order()" alt="${product.tenSanPham}">
                    </a>
                    <h4 class="menu_list_title"><a href="#">${product.tenSanPham.toUpperCase()}</a></h4>
                    <p class="menu_list_decrible">${product.moTa}</p>
                    <div class="menu_list_bottom">
                        <h3 class="menu_price">price</h3>
                        <div class="menu_action">
                            <button type="button" title="Đặt mua" class="menu_action_button" onclick="get_order()"></button>
                        </div>
                    </div>
                </div>
            `;
            menuList.appendChild(addcontent);
            page_thuc_don.style.display = "block";
            page_thanh_toan.style.display = "none";
            page_deal.style.display = "none";
            page_dot.style.display = "none";
            page_main.style.display = "none";
        });

        // Phân trang
        let listItems = document.querySelectorAll('#thuc_don .menu_list_ul li');
        for (let i = 0; i < item.length; i++) {
            if (i >= number_of_item * (page - 1) && i < number_of_item * page) {
                listItems[i].style.display = "block";
            } else {
                listItems[i].style.display = "none";
            }
        }

    } else {
        // Nếu phân loại là 1 loại duy nhất
        var page = parseInt(page_number_deal);
        close_search_input();
        let menuList = document.querySelector('#hoanh_chicken .page_main_container .menu_list_ul');
   
        item = data.filter(product => product.maLoai == type);  // Lọc theo loại
       
        number_of_each_item = item.length;
        
        menuList.innerHTML = "";  // Xóa hết nội dung cũ trước khi thêm mới

        // Hiển thị các sản phẩm
        item.forEach((product, i) => {
         
            const addcontent = document.createElement('li');
            addcontent.classList.add('menu_list_li');
            addcontent.innerHTML = `
                <div class="menu_list_product" id="${product.maSanPham}">
                    <a href="#" class="menu_list_img">
                        <img src="${product.hinhAnh}" onclick="get_order()" alt="${product.tenSanPham}">
                    </a>
                    <h4 class="menu_list_title"><a href="#">${product.tenSanPham.toUpperCase()}</a></h4>
                    <p class="menu_list_decrible">${product.moTa}</p>
                    <div class="menu_list_bottom">
                        <h3 class="menu_price">price</h3>
                        <div class="menu_action">
                            <button type="button" title="Đặt mua" class="menu_action_button" onclick="get_order()"></button>
                        </div>
                    </div>
                </div>
            `;
            menuList.appendChild(addcontent);
        });

        // Phân trang
        let listItems = document.querySelectorAll('#hoanh_chicken .menu_list_ul li');
        for (let i = 0; i < item.length; i++) {
            if (i >= number_of_item * (page - 1) && i < number_of_item * page) {
                listItems[i].style.display = "block";
            } else {
                listItems[i].style.display = "none";
            }
        }

        page_thuc_don.style.display = "none";
        page_thanh_toan.style.display = "none";
        page_deal.style.display = "block";
        page_dot.style.display = "none";
        page_main.style.display = "none";
        
    }

    open_search_input();
}



//------------------------------------------------------------------------------page1
//------------------------------------------------------------------------------deal
//đóng mở tab sản phẩm
function close_tab() {
    document.getElementById("img_close").style.display = "none";
}
function open_tab() {
    document.getElementById("img_close").style.display = "block";
    close_DKSD_CSBM_CSVC();
}
//lấy data từ sản phẩm
function get_element(menu_list_product) {
    var img_src = menu_list_product.querySelector(".menu_list_img img").src;
    var title = menu_list_product.querySelector(".menu_list_title a").innerText;
    var decrible = menu_list_product.querySelector(".menu_list_decrible").innerText;
    var price = menu_list_product.querySelector(".menu_price").innerText;
    document.getElementById("combo_deal").innerText = title;
    document.getElementById("content_deal").innerText = decrible;
    document.getElementById("img_deal").src = img_src;
    document.getElementById("Sum_money").innerText = price;
    open_tab();
    price_parents = price;
}
//thêm vào giỏ hàng
function get_order() {
    if (isLogin() == true) {
        var listItem = event.target.closest('.menu_list_li');
        document.getElementById("count").value = 1;
        get_element(listItem);
    }
}
//---------------------------------------------------------------------------------xu ly deal
//tăng giảm số lượng khi chọn món hàng
function change_release() {
    var count = document.getElementById('count');
    var new_price = parseFloat(price_parents.replace(" VND", ""));
    count.value = (parseInt(count.value)) + 1;
    if (count.value < 0 || count.value % 1 != 0)
        count.value = 1;
    if (count.value > 100)
        count.value = 99;
    new_price = new_price * count.value;
    document.getElementById("Sum_money").innerText = (new_price * 1000).toLocaleString() + " VND";
}
function change_input() {
    var count = document.getElementById('count');
    new_price = parseFloat(price_parents.replace(" VND", ""));
    if (count.value < 0 || count.value % 1 != 0) count.value = 1;
    if (count.value > 100) count.value = 99;
    new_price = new_price * count.value;
    document.getElementById("Sum_money").innerText = (new_price * 1000).toLocaleString() + " VND";
}
function change_reduce() {
    var count = document.getElementById('count');
    new_price = parseFloat(price_parents.replace(" VND", ""));
    count.value = (parseInt(count.value)) - 1;
    if (count.value < 0)
        count.value = 1;
    if (count.value > 100)
        count.value = 99;
    new_price = new_price * count.value;
    document.getElementById("Sum_money").innerText = (new_price * 1000).toLocaleString() + " VND";
}
//--------------------------------------------------------------------------------------xu ly in trang
//---------------------------------------------------------------------------------------xu ly gio hang
//xem giỏ hàng nhỏ
function open_cart_tab() {
    if (currentType) {
        hien_thi_san_pham(currentType)
    }
    close_DKSD_CSBM_CSVC()
    var cart_tab = document.getElementById("cart");
    var check = document.querySelector(".cart_list_table");
    if (check.innerHTML.trim() == "") {
        cart_tab.style.display = "none";
        return;
    }
    if (cart_tab.style.display === "block") {
        cart_tab.style.display = "none";
        return;
    }
    cart_tab.style.display = "block";
    return;
}
function close_cart_tab() {
    var cart_tab = document.getElementById("cart");
    cart_tab.style.display = "none";
}
//tăng số lượng sản phẩm
function change_cart_release() {
    var element = event.target.closest('.cart_list_action');
    var count = element.querySelector(".cart_money_deal .cart_count");
    var price = parseFloat(element.querySelector(".cart_sum_money .cart_sum_money_p ").innerText.replace(" VND", ""));

    count.value = parseInt(count.value) + 1;

    if (count.value < 1) {
        count.value = 1;
    }
    if (count.value > 100) count.value = 99;
    var new_price = price * count.value;
    if (new_price < 0) {
        new_price = 0;
    }
    tmp_monney();
}
function change_cart_input() {
    var element = event.target.closest('.cart_list_action');
    var count = element.querySelector(" .cart_money_deal .cart_count");
    var price = parseFloat(element.querySelector(" .cart_sum_money .cart_sum_money_p ").innerText.replace(" VND", ""));

    if (count.value < 1 || count.value % 1 != 0) {
        count.value = 1;
    }
    if (new_price < 0) {
        new_price = 0;
    }
    if (count.value > 100) count.value = 99;
    var new_price = price * count.value;
    tmp_monney();
}
function change_cart_reduce() {
    var element = event.target.closest('.cart_list_action');
    var count = element.querySelector(" .cart_money_deal .cart_count");
    var price = parseFloat(element.querySelector(".cart_sum_money .cart_sum_money_p ").innerText.replace(" VND", ""));

    count.value = (parseInt(count.value)) - 1;
    if (count.value < 1) {
        count.value = 1;
    }
    var new_price = price * count.value;
    if (new_price < 0) {
        new_price = 0;
    }
    tmp_monney();
}
//tiền tạm tính trong giỏ hàng chưa bao gồm ship
function tmp_monney() {
    var tmp_price = 0;
    var len = document.querySelectorAll(".cart_sum_money_p");
    var coun = document.querySelectorAll(".cart_count");
    for (var i = 0; i < len.length; i++) {
        tmp_price += parseFloat(len[i].innerText.replace(" VND", "")) * coun[i].value;
    }
    document.getElementById("cart_tmp_cal_money").innerText = (tmp_price * 1000).toLocaleString() + " VND";
    document.getElementById("thanh_toan_tmp_cal_money").innerText = (tmp_price * 1000).toLocaleString() + " VND";
    return tmp_price * 1000;
}
let abc = 0;
//lấy thông tin từ sản phẩm và tạo sản phẩm trong giỏ hàng
document.addEventListener("DOMContentLoaded", function () {
    const click_add = document.getElementById('buy_deal');
    const menuList = document.querySelector('.cart_list_table');

    click_add.addEventListener('click', function () {
        var img_src = document.querySelector(".chicken_deal .img_deal img").src;
        var title = document.querySelector(".content .combo_deal").innerText;
        var count = document.querySelector(".content .money_deal .count").value;
        var price = document.querySelector(".content .Sum_money h3").innerText;
        price = (parseFloat(price.replace(/[^\d]/g, '')) / count).toLocaleString() + " VND"
        var money = parseFloat(price.replace(/[^\d]/g, ''));
        abc = abc + money;
        var tam_tinh = new Intl.NumberFormat('vi-VN').format(abc) + ' VND';
        document.getElementById('cart_tmp_cal_money').innerHTML = tam_tinh;
        const addcontent = document.createElement('tr');
        addcontent.classList.add("cart_list_table_tr")
        addcontent.innerHTML = `
            <td style="width: 25%;">
                <img style="border-radius: 10px;" class="cart_img" src="${img_src}" alt="">
            </td>
            <td class="Bill_check">
                <p class="cart_title">${title}</p>
                <div class="cart_list_action">
                    <div class="cart_money_deal">
                        <button class="cart_reduce" onclick="change_cart_reduce()">
                            <div>-</div>
                        </button>
                        <input type="text" class="cart_count" id="cart_count" value="${count}" onkeyup="change_cart_input()">
                        <button class="cart_release" onclick="change_cart_release()">
                            <div>+</div>
                        </button>
                    </div>
                    <p class="cart_update" >
                        <i class="cart_update_icon"></i>
                    </p>
                    <div class="cart_sum_money">
                        <h4 class="cart_sum_money_p" id="cart_sum_money" >${price}</h4>
                    </div>
                    <button class="cart_delete"  onclick="deleteRow(this)">
                    <img src="./img/trash.svg" alt="Delete">
                    </button>
                </div>
            </td>
        `;
        menuList.appendChild(addcontent);
        tmp_monney();
    });
});
//----------------------------------------------------------------xu ly thanh toan bự
//xác nhận thanh toán
function check_final() {
    var inputaccress = document.getElementById("accress_order").value;
    if (inputaccress.trim() === "") {
        document.getElementById("error").innerHTML = "*Bắt buộc";
        document.getElementById("accress_order").focus;
        // inputaccress.focus()
        return;
    }
    else {
        document.getElementById("error").innerHTML = "";
        thanh_toan();
       
    }
}
//mở trang thanh toán
function open_payment() {
    close_DKSD_CSBM_CSVC();
    document.getElementById("page_main_thanh_toan").style.display = "block";
    document.getElementById("page_payment").style.display = "block";
    page_deal.style.display = "none";
    page_main.style.display = "none";
    page_dot.style.display = "none";
    page_thuc_don.style.display = "none";
    close_search_input();
    close_cart_tab();
    close_tab();
    tong_cong();
}
document.addEventListener("DOMContentLoaded", function () {
    const clickAdd = document.getElementById('thanh_toan');
    const menuList = document.getElementById('no-data');

    clickAdd.addEventListener('click', function () {
        const titleElements = document.querySelectorAll(".Bill_check");
        const items = [];
        menuList.innerHTML = ""; // Xóa nội dung cũ trong danh sách hóa đơn

        // Thu thập thông tin từ giỏ hàng
        titleElements.forEach(function (titleElement) {
            // Kiểm tra nếu các phần tử cần thiết tồn tại
            const titleElem = titleElement.querySelector(".cart_title");
            const countElem = titleElement.querySelector(".cart_count");
            const priceElem = titleElement.querySelector(".cart_sum_money_p");

            if (titleElem && countElem && priceElem) {
                const title = titleElem.innerText.trim();
                const count = parseInt(countElem.value.trim());
                const price = priceElem.innerText.trim();
                const money = parseFloat(price.replace(/[^\d]/g, '')); // Loại bỏ ký tự không phải số
                const thanh_tien = (money * count).toLocaleString('vi-VN') + " VND";

                // Kiểm tra giá trị hợp lệ trước khi thêm vào danh sách
                if (!isNaN(count) && count > 0 && !isNaN(money)) {
                    items.push({
                        title: title,
                        price: price,
                        count: count,
                        thanh_tien: thanh_tien
                    });
                }
            }
        });

        // Cập nhật giao diện bảng hóa đơn
        items.forEach(function (item) {
            const addContent = document.createElement('tr');
            addContent.innerHTML = `
                <td id="bill_title">${item.title}</td>
                <td id="bill_price" style="color: rgb(243, 124, 2); text-align: center;">${item.price}</td>
                <td id="bill_count" style="text-align: center;">${item.count}</td>
                <td id="bill_thanh_tien" style="color: rgb(243, 124, 2); text-align: right;">${item.thanh_tien}</td>
            `;
            menuList.appendChild(addContent);
        });

        // Tính tổng tiền
        tmp_monney();
    });
});

//xóa 1 món trong giỏ hàng nhỏ
function deleteRow(button) {
    var row = button.closest("tr");
    if (row) {
        row.parentNode.removeChild(row);
    }
    tmp_monney();
}
//tính phí vận chuyển
function van_chuyen() {
    var choose = parseInt(document.querySelector("#hinh_thuc_van_chuyen").value);
    var phi = document.getElementById("phi_van_chuyen");
    switch (choose) {
        case 1: phi.innerText = 10000 + " VND";
            break;
        case 2: phi.innerText = 20000 + " VND";
            break;
        case 3: phi.innerText = 30000 + " VND";
            break;
    }
    return parseFloat(phi.innerText.replace(" VND", ""));
}
//tổng giá trị đơn hàng
function tong_cong() {
    return document.getElementById("tong_cong").innerText = (tmp_monney() + van_chuyen()).toLocaleString() + " VND";
}
//người dùng hủy đơn hàng
function deleteRow_user_bill(button) {
    const row = button.closest("tr");
    const username = row.querySelector("#user_bill_name").textContent;
    const billid = row.id.toString();

    const billKey = "allBills";
    const allBills = JSON.parse(localStorage.getItem(billKey)) || {};

    if (allBills.hasOwnProperty(username)) {
        const userBills = allBills[username];
        for (let i = 0; i < userBills.length; i++) {
            if (userBills[i].trang_thai && userBills[i].trang_thai.toString() !== "Đã hủy" && userBills[i].timeid === billid) {
                alert("Đã xác nhận đơn không thể hủy")
                return;
            }
        }
        if (!aks_before_delete()) {
            return;
        }
        const updatedBills = userBills.filter(item => item.timeid.toString() !== billid);
        allBills[username] = updatedBills;
        localStorage.setItem(billKey, JSON.stringify(allBills));
        console.log("Đã xóa hóa đơn thành công.");
        open_user_bill();
    }
    row.remove();
}
//xác nhận hủy đơn hoặc mua lại
function aks_before_cancel(value) {
    if (value && value == 5) {
        var result = window.confirm("Bạn có chắc chắn muốn hủy không?");
        if (result) {
            alert("Đã hủy!");
            return true;
        } else {
            alert("Không hủy.");
            return false;
        }
    } else if (value && value == 1) {
        var result = window.confirm("Xác nhận mua không?");
        if (result) {
            alert("Xác nhận!");
            return true;
        } else {
            alert("Không.");
            return false;
        }
    }

}
//người dùng xem lại đơn hàng đã đặt
async function open_user_bill() {
    // Close unrelated tabs
    close_DKSD_CSBM_CSVC();
    document.getElementById("page_bill").style.display = "block";

    // Clear old data
    const menuList = document.querySelector(".box_bill .data_bill");
    menuList.innerHTML = ""; // Clear existing rows

    // Add table headers
    const headerRow = document.createElement("tr");
    headerRow.innerHTML = `
        <th style="width: 5%;">Mã hóa đơn</th>
        <th style="width: 12.5%;">Người dùng</th>
        <th style="width: 30%;">Địa chỉ</th>
        <th style="width: 10%;">Ngày hóa đơn</th>
        <th style="width: 30%;">Sản phẩm</th>
        <th style="width: 10%;">Tổng tiền</th>
        <th style="width: 10%;">Trạng thái</th>
        <th style="width: 7.5%;">Hành động</th>
    `;
    menuList.appendChild(headerRow);

    try {
        // Get user ID of the logged-in user
        const user = JSON.parse(localStorage.getItem("userlogin"));
        const userId = user?.id;
        const username = user?.username || "";

        if (!userId) {
            console.error("Không tìm thấy thông tin người dùng.");
            return;
        }

        // Fetch bills for the user using user_id
        const response = await fetch(`http://localhost:3000/api/user-bills/${userId}`);
        const result = await response.json();

        if (result.success) {
            const userBills = result.data;

            let previousTimeId = null;

            // Loop through bills and display
            userBills.forEach((billItem) => {
                if (billItem.timeid !== previousTimeId) {
                    const row = document.createElement("tr");
                    row.classList.add("infor_bill_user");
                    row.id = `bill_${billItem.timeid}`;

                    const totalPrice = formatCurrency(billItem.total_money);
                    const formattedDate = formatDate(billItem.date_bill);

                    // Render order row
                    row.innerHTML = `
                        <td>${billItem.timeid}</td>
                        <td>${username}</td>
                        <td>${billItem.address}</td>
                        <td>${formattedDate}</td>
                        <td id="user_bill_item_${billItem.timeid}">
                            <button onclick="openListBill('${billItem.timeid}')">...</button>
                        </td>
                        <td>${totalPrice}</td>
                        <td>
                            <select id="id${billItem.timeid}" class="trang_thai" style='pointer-events: none;'>
                                <option value="1" ${billItem.trang_thai === 'Vừa đặt' ? 'selected' : ''}>Vừa đặt</option>
                                <option value="2" ${billItem.trang_thai === '2' ? 'selected' : ''}>Đang giao</option>
                                <option value="3" ${billItem.trang_thai === '3' ? 'selected' : ''}>Đã giao</option>
                                <option value="4" ${billItem.trang_thai === '4' ? 'selected' : ''}>Đã nhận</option>
                                <option value="5" ${billItem.trang_thai === '5' ? 'selected' : ''}>Đã hủy</option>
                            </select>
                        </td>
                        <td>
                            <button class="delete-button" onclick="deleteRow_user_bill(this)">
                                <img src="./img/trash.svg" style="width:20px;height:20px;">
                            </button>
                        </td>
                    `;

                    // Append the row
                    menuList.appendChild(row);
                    previousTimeId = billItem.timeid;
                }
            });
        } else {
            console.error("Không thể lấy danh sách hóa đơn của người dùng:", result.message);
        }
    } catch (error) {
        console.error("Lỗi khi tải danh sách hóa đơn của người dùng:", error);
    }
}




//đăng nhập để mua hàng
function isLogin() {
    if (localStorage.getItem('userlogin') == null) {
        alert("Bạn cần phải đăng nhập để mua hàng!");
        dangnhap();
        return false;
    }

    return true;
}
//các hàm chức năng tim kiem thong tin sản phẩm và phân trang
function open_search_input() {
    close_DKSD_CSBM_CSVC()
    document.getElementById("input_span").style.display = "flex";
}
function close_search_input() {
    document.getElementById("input_span").style.display = "none";
}
function page_next_search() {
    close_tab();
    const item = search_item;
    if (item) {
        let limit = parseInt(item.length / number_of_item);
        var pageNumber = document.getElementById("page_number");
        pageNumber.value = parseInt(pageNumber.value) + 1;
        if (pageNumber.value > limit) {
            if (item.length % number_of_item == 0) {
                pageNumber.value = limit;
            }
            else {
                pageNumber.value = limit + 1
            }
        }
        page_number = pageNumber.value;
    }
    show_item_search()
}
function page_back_search() {
    close_tab();
    var pageNumber = document.getElementById("page_number");
    pageNumber.value = parseInt(pageNumber.value) - 1;
    if (pageNumber.value < 1) {
        pageNumber.value = 1;
    }
    page_number = pageNumber.value;
    show_item_search()
}
let search_item;
//thực hiện phân trang
function show_item_search() {
    let item = search_item;
    let menuList = document.querySelector('#thuc_don .page_main_container .menu_list_ul');
    var page = parseInt(page_number);
    for (let i = 0; i < item.length; i++) {
        if (i == 0) {
            menuList.innerHTML = "";
        }
        const addcontent = document.createElement('li');
        addcontent.classList.add('menu_list_li');
        addcontent.innerHTML = `
                    <div class="menu_list_product" id=${item[i].type.toString() + item[i].id.toString()} >
                        <a href="#" class="menu_list_img">
                            <img src="${item[i].image}" onclick="get_order()" alt="${item[i].title}">
                        </a>
                        <h4 class="menu_list_title"><a href="#" onclick="get_order()">${item[i].title.toUpperCase()}</a></h4>
                        <p class="menu_list_decrible">${item[i].content}</p>
                        <div class="menu_list_bottom">
                            <h3 class="menu_price">${item[i].price}</h3>
                            <div class="menu_action">
                                <button type="button" title="Đặt mua" class="menu_action_button" onclick="get_order()"></button>
                            </div>
                        </div>
                    </div>
                `;
        menuList.appendChild(addcontent);
        page_thuc_don.style.display = "block";
        page_thanh_toan.style.display = "none";
        page_deal.style.display = "none";
        page_dot.style.display = "none";
        page_main.style.display = "none";

    }
    for (let i = 0; i < item.length; i++) {
        let listItems = document.querySelectorAll('#thuc_don #content_page li');
        if (i >= number_of_item * (page - 1) && i < number_of_item * page) {
            listItems[i].style.display = "block";
        } else {
            listItems[i].style.display = "none";
        }
    }

}
// Tìm kiếm item bằng từ khóa
async function search() {
    close_tab();
    const searchTerm = document.getElementById('input').value.trim().toLowerCase(); // Từ khóa tìm kiếm
    const menuList = document.getElementById("pagination"); // Phần phân trang
    menuList.innerHTML = ''; // Xóa nội dung cũ

    // Lấy dữ liệu từ API
    let listItems = [];
    try {
        listItems = await lay_du_lieu_tu_api(); // Đảm bảo dữ liệu đã được tải về
    } catch (error) {
        console.error('Lỗi khi lấy dữ liệu từ API:', error);
        return;
    }

    // Khởi tạo danh sách sản phẩm tìm kiếm
    search_item = [];
    page_number = 1;

    if (searchTerm && listItems.length > 0) {
        // Tìm các sản phẩm có chứa từ khóa trong bất kỳ thuộc tính nào (type, price, title, content)
        search_item = listItems.filter(item => {
            const type = item.type.toLowerCase();
            const price = item.price.toLowerCase();
            const title = item.title.toLowerCase();
            const content = item.content.toLowerCase();
            
            // Tìm từ khóa trong type, price, title, hoặc content
            return type.includes(searchTerm) || 
                   price.includes(searchTerm) || 
                   title.includes(searchTerm) || 
                   content.includes(searchTerm);
        });

        if (search_item.length > 0) {
            // Nếu có kết quả, hiển thị nút phân trang
            menuList.innerHTML = `
                <button id="left" onclick="page_back_search()"></button>
                <input id="page_number" value=1></input>
                <button id="right" onclick="page_next_search()"></button>
            `;
            show_item_search();
        } else {
            // Nếu không có kết quả tìm kiếm
            document.getElementById('content_page').innerHTML = `<p style="text-align: center;">Không tìm thấy sản phẩm nào</p>`;
            menuList.innerHTML = `
                <button id="left" onclick="page_back()"></button>
                <input id="page_number" value=1></input>
                <button id="right" onclick="page_next()"></button>
            `;
        }
    } else {
        // Nếu không có từ khóa, hiển thị toàn bộ sản phẩm
        menuList.innerHTML = `
            <button id="left" onclick="page_back()"></button>
            <input id="page_number" value=1></input>
            <button id="right" onclick="page_next()"></button>
        `;
        hien_thi_san_pham('all');
    }
}

// các hàm sắp xếp sản phẩm
async function sap_xep_product() {
    try {
        // Lấy dữ liệu sản phẩm từ API
        const productList = await lay_du_lieu_tu_api();  // Sử dụng await để đảm bảo lấy dữ liệu từ API

        // Sắp xếp sản phẩm theo id
        productList.sort((a, b) => a.id - b.id);

     

        
    } catch (error) {
        console.error('Lỗi khi sắp xếp sản phẩm:', error);
    }
}

async function sap_xep_product_price_up() {
    try {
        // Lấy dữ liệu từ API
        const productList = await lay_du_lieu_tu_api();

        // Sắp xếp theo giá tăng dần
        productList.sort((a, b) => parseFloat(a.price.replace(" VND", "")) - parseFloat(b.price.replace(" VND", "")));


        // Cập nhật lại UI với dữ liệu đã sắp xếp
        quan_ly_san_pham(currentType);

    } catch (error) {
        console.error('Lỗi khi sắp xếp sản phẩm:', error);
    }
}

async function sap_xep_product_price_down() {
    try {
        // Lấy dữ liệu từ API
        const productList = await lay_du_lieu_tu_api();

        // Sắp xếp theo giá giảm dần
        productList.sort((a, b) => parseFloat(b.price.replace(" VND", "")) - parseFloat(a.price.replace(" VND", "")));


        // Cập nhật lại UI với dữ liệu đã sắp xếp
        quan_ly_san_pham(currentType);

    } catch (error) {
        console.error('Lỗi khi sắp xếp sản phẩm:', error);
    }
}

//quản lý sản phẩm cho admin
let number_of_each_item_admin = 6;
let number_of_item_admin;
let currentPage = 1;
let currentType;
//kiểm tra id sản phẩm 
function check_id_product(type) {
    const productList = lay_du_lieu_tu_api();
    let i = 1;
    const data = [];
    for (let j = 0; j < productList.length; j++) {
        if (productList[j] && productList[j].type == type) {
            data.push(productList[j])
        }
    }
    while (i <= 100) {
        const existsInProductList = data.some(item => item !== null && item.id === i);

        if (!existsInProductList) {
            return i;
        }

        i++;
    }
    return -1;
}
//gáng id cho sản phẩm
function set_id_product() {
    var kind_of_product = document.querySelector("#choose_product");
    var product_id = document.getElementById("productId");

    var type = kind_of_product.value;

    var id = check_id_product(type);
    if (id == -1) {
        alert("Sản phẩm đã vượt quá số lượng (100)");
    } else {
        product_id.value = id;
    }

}
//hàm xuất thông tin sảng phẩm// comment hết đống này đuối quá
async function quan_ly_san_pham(type) {
    close_bill_tab();
    quan_ly_user_close();
    close_edit_tab();
    thong_ke_close();
    close_add_tab();
    showMenu_admin();
    close_DKSD_CSBM_CSVC();
    close_footer();
    nhap_kho_close()

    // Đảm bảo chuyển đổi type sang chuỗi và so sánh
    if (currentType !== type.toString()) {
        currentType = type.toString();
        currentPage = 1;  // Đặt lại trang hiện tại về trang 1 khi thay đổi thể loại
    }

    const page = document.getElementById("quan_ly_san_pham_child");
    const menuList = document.querySelector('.new-cart-list-table');
    page.style.display = "block";  // Hiển thị trang quản lý sản phẩm

    // Tính chỉ số bắt đầu và kết thúc cho phân trang
    const startIndex = (currentPage - 1) * number_of_each_item_admin; // Mỗi trang 6 sản phẩm
    const endIndex = startIndex + number_of_each_item_admin;

    try {
        // Lấy dữ liệu từ API (đảm bảo sử dụng await để lấy dữ liệu đồng bộ)
        const data = await lay_du_lieu_tu_api();

        if (!data) {
            console.error('Không có dữ liệu từ API');
            return;
        }

        let item = [];

        // Nếu là loại "all" thì lấy toàn bộ dữ liệu, nếu không lọc theo type
        if (type === 'all') {
            item = data;
        } else {
            item = data.filter(product => product.type === type);
        }

        // Lấy các sản phẩm của trang hiện tại
        const itemsOnCurrentPage = item.slice(startIndex, endIndex);
        menuList.innerHTML = '';  // Xóa nội dung cũ trong bảng

        // Hiển thị các sản phẩm
        itemsOnCurrentPage.forEach((deal) => {
            const addcontent = document.createElement('tr');
            addcontent.classList.add("new-cart-list-table-tr");
            addcontent.innerHTML = `
                <td class="new-cart-list-img">
                    <img style="border-radius: 10px;" class="new-cart-img" src="${deal.image}" alt="">
                </td>
                <td class="new-Bill-check">
                    <p class="new-cart-title" id="${deal.type.toString() + deal.id.toString()}">${deal.title}</p>
                </td>
                <td class="cart-sum-money">
                    <h4 class="new-cart-sum-money" id="new-cart-sum-money">${deal.price}</h4>
                </td>
                <td>
                    <button class="new-cart-update" onclick="edit_product(this)">
                        <img src="./img/pencil.svg" alt="Edit">
                    </button>
                </td>
                <td>
                    <button class="new-cart-delete" onclick="delete_product(this)">
                        <img src="./img/trash.svg" alt="Delete">
                    </button>
                </td>
            `;
            menuList.appendChild(addcontent);
        });

        // Cập nhật số lượng sản phẩm và phân trang
        number_of_item_admin = item.length;

        // Nếu có phân trang, điều chỉnh logic phân trang (ví dụ: show page navigation)
        update_pagination(item.length);

    } catch (error) {
        console.error('Lỗi khi lấy dữ liệu từ API:', error);
        alert('Không thể tải dữ liệu sản phẩm.');
    }
}


// Hàm cập nhật phân trang
function update_pagination(totalItems) {
    const totalPages = Math.ceil(totalItems / number_of_each_item_admin);

    // Cập nhật phần phân trang (button next, previous, page number)
    const pageInput = document.getElementById("page_number_deal");
    const leftButton = document.getElementById("left_deal");
    const rightButton = document.getElementById("right_deal");

    pageInput.value = currentPage;

    // Disable buttons nếu đã ở trang đầu hoặc trang cuối
    leftButton.disabled = currentPage === 1;
    rightButton.disabled = currentPage === totalPages;

    // Xử lý logic khi người dùng thay đổi trang
    leftButton.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            quan_ly_san_pham(currentType);  // Gọi lại hàm để cập nhật dữ liệu và phân trang
        }
    };

    rightButton.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            quan_ly_san_pham(currentType);  // Gọi lại hàm để cập nhật dữ liệu và phân trang
        }
    };
}

//đóng cửa sổ sản phẩm
function quan_ly_san_pham_close() {
    close_edit_tab();
    close_add_tab();
    document.getElementById("quan_ly_san_pham_child").style.display = "none"
}
//tiến trang sản phẩm
function page_next_product() {
    let limit = parseInt(number_of_item_admin / number_of_each_item_admin);
    currentPage++;
    if (currentPage > limit) {
        if (number_of_item_admin % number_of_each_item_admin == 0) {
            currentPage = limit;
        } else {
            currentPage = limit + 1;
        }
    }
    quan_ly_san_pham(currentType);
}
//lùi trang sản phẩm
function page_back_product() {
    currentPage--;
    if (currentPage < 1) {
        currentPage = 1;
    }
    changePage(currentPage);
}
//đọc sự thay đổi trên trang(số trang)
function changePage(pageNumber) {
    currentPage = pageNumber;

    quan_ly_san_pham(currentType);
}
//đóng tab thêm sản phẩm
function close_add_tab() {

    document.getElementById('productForm_edit').reset();
    document.getElementById("page_productForm").style.display = "none";
    
  
    
 
}

//hàm gọi chức năng thêm sản phẩm
function open_add_item() {
    close_edit_tab();
    var page = document.getElementById("page_productForm");
    if (page.style.display === "block") {
        page.style.display = "none";
    } else {
        page.style.display = "block"
    }
    currentId = document.getElementById('productId').value
}
//thêm sản phẩm
async function add_item() {
    var type = document.querySelector("#choose_product").value.toString();
    const productId = document.getElementById('productId').value;
    const productTitle = document.getElementById('productTitle').value.toUpperCase();
    const productContent = document.getElementById('productContent').value;
    const productPrice = document.getElementById('productPrice').value;
    const productImage = document.getElementById('productImage').value;

    // Kiểm tra thông tin sản phẩm
    if (!productImage || productImage.trim() === "") {
        document.getElementById("productImage_small").innerText = "Tên ảnh không được để trống";
        document.getElementById("productImage").focus();
        return;
    }
    if (!productTitle) {
        document.getElementById("productTitle_small").innerText = "Tiêu đề không hợp lệ (tiêu đề không được để trống)";
        document.getElementById("productTitle").focus();
        return;
    }
    if (!productContent) {
        document.getElementById("productContent_small").innerText = "Mô tả không hợp lệ (mô tả không được để trống)";
        document.getElementById("productContent").focus();
        return;
    }
    if (isNaN(productPrice) || parseFloat(productPrice) <= 0 || !productPrice) {
        document.getElementById("productPrice_small").innerText = "Giá bán không hợp lệ (giá bán phải là số dương)";
        document.getElementById("productPrice").focus();
        return;
    }

    const product = {
        type: type,
        id: parseInt(productId),
        image: `./img/${productImage.trim().split('\\').pop()}`, // Chỉ lưu tên file ảnh
        title: productTitle,
        content: productContent,
        price: parseFloat(productPrice).toLocaleString() + " VND"
    };

    try {
        console.log("Thêm sản phẩm:", product);

        // Gửi yêu cầu thêm sản phẩm tới API
        const response = await fetch('http://localhost:3000/api/add-product', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        });

        const result = await response.json();
        console.log("Phản hồi từ server:", result);

        if (result.success) {
            // ** Cập nhật dữ liệu toàn cục (thêm sản phẩm vào dữ liệu toàn cục) **
            if (!window.productData) window.productData = [];
            window.productData.unshift(product); // Thêm sản phẩm mới vào đầu danh sách

            // ** Thêm trực tiếp sản phẩm vào giao diện **
            add_product_to_UI(product);

            // ** Cập nhật lại số lượng sản phẩm và phân trang nếu cần **
            number_of_item_admin = window.productData.length;  // Cập nhật lại tổng số sản phẩm
            update_pagination(number_of_item_admin);  // Cập nhật phân trang

            alert("Thêm sản phẩm thành công!");
            close_add_tab();  // Đóng tab thêm sản phẩm
        } else {
            alert(`Lỗi khi thêm sản phẩm: ${result.message}`);
        }
    } catch (error) {
        console.error("Lỗi khi gửi yêu cầu:", error);
        alert("Có lỗi khi thêm sản phẩm. Vui lòng thử lại.");
    }
}
function add_product_to_UI(product) {
    const menuList = document.querySelector('.new-cart-list-table');

    // Tạo phần tử mới cho sản phẩm
    const addcontent = document.createElement('tr');
    addcontent.classList.add("new-cart-list-table-tr", "highlight-new-product");
    addcontent.innerHTML = `
        <td class="new-cart-list-img">
            <img style="border-radius: 10px;" class="new-cart-img" src="${product.image}" alt="Image">
        </td>
        <td class="new-Bill-check">
            <p class="new-cart-title" id="${product.type.toString() + product.id.toString()}">${product.title}</p>
        </td>
        <td class="cart-sum-money">
            <h4 class="new-cart-sum-money" id="new-cart-sum-money">${product.price}</h4>
        </td>
        <td>
            <button class="new-cart-update" onclick="edit_product(this)">
                <img src="./img/pencil.svg" alt="Edit">
            </button>
        </td>
        <td>
            <button class="new-cart-delete" onclick="delete_product(this)">
                <img src="./img/trash.svg" alt="Delete">
            </button>
        </td>
    `;
    // Chèn sản phẩm mới lên đầu danh sách
    menuList.insertBefore(addcontent, menuList.firstChild);

    // ** Hiệu ứng nổi bật sản phẩm vừa thêm **
    setTimeout(() => addcontent.classList.remove('highlight-new-product'), 2000);
}









// Hàm hỗ trợ đọc file ảnh bất đồng bộ asyns/await để đợi hàm đọc xong file
async function docFileAnhAsync(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
    });
}
//xóa sản phẩm
function delete_item(productId) {
    productId = productId.toString();
    const productList = lay_du_lieu_tu_api();

    const index = productList.findIndex(product => (product.type.toString() + product.id.toString()) === productId);

    if (index !== -1) {
        productList.splice(index, 1);

        localStorage.setItem("productData", JSON.stringify(productList));
        const productElement = document.getElementById(productId);
        if (productElement) {
            productElement.remove();
            sap_xep_product();
        }

        console.log(`Đã xóa sản phẩm có ID ${productId} thành công.`);
    } else {
        console.log(`Không tìm thấy sản phẩm có ID ${productId}.`);
    }
    thong_ke_san_pham()
}
//hỏi trước khi xóa
function aks_before_delete() {
    var result = window.confirm("Bạn có chắc chắn muốn xóa không?");
    if (result) {
        alert("Đã xóa!");
        return true;
    } else {
        alert("Không xóa.");
        return false;
    }

}
//hàm gọi chức năng xóa sản phẩm
function delete_product(button) {
    close_add_tab();
    close_edit_tab();
    if (!aks_before_delete()) {
        return;
    }
    var row = button.closest("tr");
    if (row) {
        var pElement = row.querySelector('p[id]');

        if (pElement && pElement.id) {
            delete_item(pElement.id);
            row.parentNode.removeChild(row);
        }
    }
}
//id hiện tại của sản phẩm cần sửa
let currentId;
//kiểm tra id truyển vào 
function isValidString(input) {
    // Danh sách từ khóa bắt đầu chuỗi
    const keywords = ["burger", "combo", "garan", "monankem", "thucuong"];
    const regex = new RegExp("^(" + keywords.join("|") + ")[1-9]\\d*$", "i"); //"$" đảm bảo chuỗi kết thúc sau số
    // Kiểm tra 
    return regex.test(input);
}
//hàm sửa thông tin sản phẩm
async function edit_item() {
    const input = document.getElementById('productImage_edit');

    let imageDataURL = document.getElementById("productImage_edit").name;
    if (input.files.length > 0) {
        const file = input.files[0];
        imageDataURL = await docFileAnhAsync(file);
        console.log( file);
    }
    var id = document.getElementById("productId_edit").value;
    var title = document.getElementById("productTitle_edit").value;
    var content = document.getElementById("productContent_edit").value;
    var price = document.getElementById("productPrice_edit").value;
    const productList = lay_du_lieu_tu_api();
    const index = productList.findIndex(product => (product.type.toString() + product.id.toString()) === id.toString());


    for (let i = 0; i < productList.length; i++) {
        if ((id.toString() === (productList[i].type.toString() + productList[i].id.toString()) && id !== currentId) || !isValidString(id)) {
            document.getElementById("productId_edit_small").innerText = `ID mới không hợp lệ, bị trùng hoặc sai định dạng (id phải có dạng 'loại sản phẩm + 1 số nguyên ví dụ: combo1) 
                Loại sản phẩm gồm: Burger(burger), Combo(combo), Gà rán(garan), Món ăn kèm(monankem),Thức uống(thucuong)`;
            document.getAnimations("productId_edit").focus;
            return;
        }
        else {
            document.getElementById("productId_edit_small").innerText = "ID mới hợp lệ";
        }
    }
    productList[index].type = id.toString().replace(/\d+/g, "")
    productList[index].id = parseInt(id.match(/\d+/g));

    //kiểm tra ảnh
    if (!imageDataURL || imageDataURL == "") {
        document.getElementById("productImage_edit_small").innerText = "Thiếu tệp ảnh (ảnh không được để trống)";
        document.getElementById("productImage_edit").focus();
        return;
    } else {
        document.getElementById("productImage_edit_small").innerText = "Tệp ảnh hợp lệ";
    }
    productList[index].image = imageDataURL;

    //kiểm tra tiêu đề
    if (!title) {
        document.getElementById("productTitle_edit_small").innerText = "Tiêu đề không hợp lệ (tiêu đề không được để trống)";
        document.getElementById("productTitle_edit").focus();
        return;
    } else {
        document.getElementById("productTitle_edit_small").innerText = "Tiêu đề hợp lệ";
    }
    productList[index].title = title;

    //kiểm tra mô tả
    if (!content) {
        document.getElementById("productContent_edit_small").innerText = "Mô tả không hợp lệ (mô tả không được để trống)";
        document.getElementById("productContent_edit").focus();
        return;
    } else {
        document.getElementById("productContent_edit_small").innerText = "Mô tả hợp lệ";
    }
    productList[index].content = content;

    //kiểm tra giá bán
    if (isNaN(price) || parseFloat(price) <= 0) {
        document.getElementById("productPrice_edit_small").innerText = "Giá Bán không hợp lệ (giá bán phải là 1 số nguyên > 0 và không có lẫn các kí tự đặt biệt)";
        document.getAnimations("productPrice_edit").focus;
        return;
    } else {
        document.getElementById("productPrice_edit_small").innerText = "Giá Bán hợp lệ";
    }
    productList[index].price = parseFloat(price).toLocaleString() + " VND";
    localStorage.setItem("productData", JSON.stringify(productList));
    if (id.toString().replace(/\d+/g, "")) {
        quan_ly_san_pham(id.toString().replace(/\d+/g, ""))
    }
    sap_xep_product();
    close_edit_tab();
    alert(`Đã cập nhật thông tin của sản phẩm có ID ${id} thành công.`);

}
//hàm gọi chức năng sửa thôn tin
function edit_product(button) {
    close_add_tab();
    var row = button.closest("tr");
    if (row) {
        var pElement = row.querySelector('p[id]');
        if (pElement && pElement.id) {
            const data = search_product(pElement.id)
            if (data == null) {
                return;
            }
            document.getElementById("productImage_edit").name = data.image;
            document.getElementById("productId_edit").value = currentId = data.type.toString() + data.id.toString();
            document.getElementById("productTitle_edit").value = data.title;
            document.getElementById("productContent_edit").value = data.content;
            document.getElementById("productPrice_edit").value = parseFloat(data.price.replace(" VND", "")) * 1000;
        }
    }
    document.getElementById("page_productForm_edit").style.display = "block"
}
//đóng tab sửa thông tin
function close_edit_tab() {
    document.getElementById("page_productForm_edit").style.display = "none";
}
//tìm thông tin sản phẩm qua mã sản phẩm 
function search_product(productId) {
    const data = lay_du_lieu_tu_api();
    productId = productId.toString();
    for (var i = 0; i < data.length; i++) {
        if ((data[i].type.toString() + data[i].id.toString()) === productId) {
            return data[i];
        }
    }
    return null;
}
//quản lý user
function quan_ly_user_close() {
    document.getElementById("sections").style.display = "none"
}
//mở cửa sổ người dùng
function open_user_tab() {
    close_DKSD_CSBM_CSVC()
    var user = document.getElementById("sections");
    user.style.display = "flex"
    showUserList();
    quan_ly_san_pham_close();
    thong_ke_close();
    close_bill_tab();
    close_footer();
    nhap_kho_close()
}
//xem thông tin người dùng
async function showUserList() {
    const List = document.getElementById('UserList');
    try {
        // Lấy danh sách người dùng từ API
        const response = await fetch('http://localhost:3000/api/users');
        const users = await response.json();

        let s = '';
        
        users.forEach((user, i) => {
            // Định dạng ngày dateSignup
            let formattedDate = '';
            if (user.dateSignup) {
                const date = new Date(user.dateSignup); // Chuyển chuỗi ISO thành đối tượng Date
                formattedDate = date.toISOString().slice(0, 10); // Lấy YYYY-MM-DD
            }

            // Thêm dữ liệu vào bảng
            s += `<tr id="tr">` +
                `<td class="td">${i + 1}</td>` +
                `<td class="td">${user.name}</td>` +
                `<td class="td">${user.username}</td>` +
                `<td class="td">${formattedDate}</td>` +
                `<td class="td"><button id="deleteUserBtn" onClick="deleteUser('${user.username}')"><img src="./img/person-x-fill.svg"></button></td>` +
                `</tr>`;
        });

        List.innerHTML = s;

    } catch (error) {
        console.error('Lỗi khi lấy danh sách người dùng:', error);
    }
}

//xóa người dùng
async function deleteUser(username) {
    try {
        const result = confirm('Bạn có muốn xóa tài khoản này?');
        if (result) {
            // Gửi yêu cầu xóa người dùng từ API
            const response = await fetch(`http://localhost:3000/api/users/${username}`, {
                method: 'DELETE'
            });

            const data = await response.json();
            if (data.message === 'Người dùng đã được xóa') {
                alert('Đã xóa người dùng');
                showUserList();  // Cập nhật lại danh sách người dùng
            } else {
                alert(data.message);
            }
        }
    } catch (error) {
        console.error('Lỗi khi xóa người dùng:', error);
    }
}
// tìm kiếm người dùng theo tên, username, ngày đăng ký
async function searchUser() {
    const keyname = document.getElementById('name_user').value.toLowerCase();
    const keyusername = document.getElementById('username').value.toLowerCase();
    const keydate = document.getElementById('date').value.toLowerCase();

    const List = document.getElementById('UserList');
    List.innerHTML = ''; // Xóa nội dung cũ

    try {
        // Lấy danh sách người dùng từ API
        const response = await fetch('http://localhost:3000/api/users');
        const users = await response.json();

        let resultHTML = '';
        let foundMatch = false;

        users.forEach((user, i) => {
            // Định dạng ngày dateSignup
            let formattedDate = '';
            if (user.dateSignup) {
                const date = new Date(user.dateSignup); // Chuyển chuỗi ISO thành đối tượng Date
                formattedDate = date.toISOString().slice(0, 10); // Lấy YYYY-MM-DD
            }

            // Kiểm tra các điều kiện tìm kiếm
            if (
                (keyname && user.name.toLowerCase().includes(keyname)) ||
                (keyusername && user.username.toLowerCase().includes(keyusername)) ||
                (keydate && formattedDate.includes(keydate))
            ) {
                foundMatch = true;
                resultHTML += `<tr id="tr">` +
                    `<td class="td">${i + 1}</td>` +
                    `<td class="td">${user.name}</td>` +
                    `<td class="td">${user.username}</td>` +
                    `<td class="td">${formattedDate}</td>` +
                    `<td class="td"><button id="deleteUserBtn" onClick="deleteUser('${user.username}')"><img src="./img/person-x-fill.svg"></button></td>` +
                    `</tr>`;
            }
        });

        // Hiển thị kết quả hoặc thông báo không tìm thấy
        if (foundMatch) {
            List.innerHTML = resultHTML;
        } else {
            List.innerHTML = "<tr><td colspan='5'>Không tìm thấy kết quả.</td></tr>";
        }

    } catch (error) {
        console.error('Lỗi khi tìm kiếm người dùng:', error);
        List.innerHTML = "<tr><td colspan='5'>Lỗi xảy ra khi tìm kiếm. Vui lòng thử lại.</td></tr>";
    }
}


/*đơn hàng*/
//NHẬN DỮ LIỆU ĐƠN HÀNG 

async function thanh_toan() {
    const product = document.querySelectorAll("#no-data tr");
    const user = JSON.parse(localStorage.getItem("userlogin"));
    if (!user) {
        alert("Bạn cần đăng nhập để thực hiện thanh toán!");
        return;
    }

    const date = new Date();
    const date_bill = date.getFullYear() + '/' +
        ('0' + (date.getMonth() + 1)).slice(-2) + '/' +
        ('0' + date.getDate()).slice(-2); // yyyy/mm/dd
    const timeid = date.getHours() + '' + date.getMinutes() + '' + date.getSeconds(); // Unique ID

    // Hóa đơn
    const bill = {
        username: user.username,
        date_bill: date_bill,
        timeid: timeid,
        address: document.getElementById("accress_order").value.trim(),
        van_chuyen: document.getElementById("hinh_thuc_van_chuyen").value.trim(),
        total_money: 0, // Tổng tiền
        items: [] // Danh sách sản phẩm trong hóa đơn
    };

    // Thu thập thông tin sản phẩm
    for (let i = 0; i < product.length; i++) {
        const titleElem = product[i].querySelector("#bill_title");
        const countElem = product[i].querySelector("#bill_count");
        const priceElem = product[i].querySelector("#bill_price");
        const totalMoneyElem = product[i].querySelector("#bill_thanh_tien");

        if (titleElem && countElem && priceElem && totalMoneyElem) {
            const title = titleElem.innerText.trim();
            const count = parseInt(countElem.innerText.trim());
            const price = parseFloat(priceElem.innerText.replace(/[^\d.-]/g, ''));
            const total_money = parseFloat(totalMoneyElem.innerText.replace(/ VND$/, ''));

            if (!isNaN(count) && count > 0) {
                bill.total_money += total_money * 1000; // Cộng tổng tiền vào hóa đơn

                // Thêm sản phẩm vào danh sách
                bill.items.push({
                    title: title,
                    count: count,
                    price: price,
                    total_money: total_money
                });
            }
        }
    }

    // Kiểm tra nếu không có sản phẩm
    if (bill.items.length === 0) {
        alert("Không có sản phẩm nào để thanh toán!");
        return;
    }

    // Lưu hóa đơn tạm thời vào localStorage và chuyển sang trang payment.html
    localStorage.setItem('pendingBill', JSON.stringify(bill));
    window.location.href = 'payment.html';
}





// Xem trạng thái đơn hàng
async function Billstatus(timeid, Ngay_mua) {
    const date = Ngay_mua;
    const id = `#id${timeid.toString()}`;

    // Sử dụng document.querySelector để chọn một phần tử duy nhất
    const element = document.querySelector(id);

    // Kiểm tra xem element có tồn tại không
    if (element) {
        const status = parseInt(element.value);

        // Gửi trạng thái cập nhật về server
        try {
            const response = await fetch(`http://localhost:3000/api/bills/${timeid}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ trang_thai: status }),
            });

            const result = await response.json();
            if (result.success) {
                console.log("Trạng thái đơn hàng đã được cập nhật trên server.");
            } else {
                console.error("Không thể cập nhật trạng thái đơn hàng:", result.message);
                alert("Không thể cập nhật trạng thái đơn hàng.");
            }
        } catch (error) {
            console.error("Lỗi khi gửi yêu cầu cập nhật trạng thái đơn hàng:", error);
            alert("Lỗi kết nối, không thể cập nhật trạng thái đơn hàng.");
        }
    }
}




//mở đơn hàng trong admin
checkBillBoxAdmin();
function checkBillBoxAdmin() {
    if (localStorage.getItem('userlogin')) {
        var user = JSON.parse(localStorage.getItem('userlogin'));

        if (user.username == 'admin') {
            document.getElementById('isAdminBillBox').innerHTML = `<div class="tim_kiem_theo_ma"> Tìm kiếm theo mã đơn
           <input onkeypress="checkOpenTab()" id="searchCodeInput">
           <button onclick="SearchByCodeInPut()"><img src="./img/search.svg" id="searchCodeInputBtn"></button>
       </div>
       <div class="date_1">
           <div class="date_2">
               <label for="startDate">Từ</label>
               <input type="date" id="startDate" />
           </div>
           <div class="date_2">
               <label for="endDate">Đến</label>
               <input type="date" id="endDate" />
           </div>
           <button onclick="searchByDateRange()"><img src="./img/search.svg" id="searchByDateBtn"></button>
           <div class="reset">
           </div>
       </div>`;
        }
    }
}
async function open_bill_tab() {
    close_footer();
    close_DKSD_CSBM_CSVC();
    quan_ly_user_close();
    quan_ly_san_pham_close();
    thong_ke_close();
    nhap_kho_close()

    document.getElementById("page_bill").style.display = "block";

    const menuList = document.querySelector(".box_bill .data_bill");
    menuList.innerHTML = ""; // Xóa dữ liệu cũ

    // Thêm header
    addTableHeader(menuList);

    try {
        const response = await fetch("http://localhost:3000/api/bills");
        const result = await response.json();

        if (result.success) {
            const allBills = result.data;

            allBills.forEach(billItem => {
                console.log(billItem.total_money);
                const row = createTableRow(billItem);
                menuList.appendChild(row);
            });
        } else {
            console.error("Không thể tải danh sách hóa đơn:", result.message);
        }
    } catch (error) {
        console.error("Lỗi khi tải danh sách hóa đơn:", error);
    }
}




async function openListBill(timeId) {
    try {
        const response = await fetch(`http://localhost:3000/api/bill-items/${timeId}`);
        const result = await response.json();

        if (result.success) {
            const itemList = result.data.map(item => `${item.title} x${item.count}`).join('<br>');
            const userBillItemElement = document.getElementById(`user_bill_item_${timeId}`);
            if (userBillItemElement) {
                userBillItemElement.innerHTML = itemList;
            }
        } else {
            console.error("Không thể lấy danh sách sản phẩm:", result.message);
        }
    } catch (error) {
        console.error("Lỗi khi lấy danh sách sản phẩm:", error);
    }
}


//tổng hóa đơn
function toTal(userBills, timeId) {
    const filteredBills = userBills.filter(bill => bill.timeid === timeId);
    const totalPrice = filteredBills.reduce((sum, bill) => {
        
        return sum + billPrice * bill.count * 1000;
    }, 0);

    return totalPrice;
}
//Xóa 1 hóa đơn
async function deleteRow_dh(timeid) {
    if (!aks_before_delete()) {
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/api/bills/${timeid}`, {
            method: 'DELETE',
        });
        const result = await response.json();

        if (result.success) {
            console.log("Đã xóa hóa đơn thành công.");
            const row = document.getElementById(`bill_${timeid}`);
            if (row) {
                row.remove();
            }
            thong_ke_doanh_thu();
            doanh_thu_trong_ngay();
        } else {
            console.error("Lỗi khi xóa hóa đơn:", result.message);
        }
    } catch (error) {
        console.error("Lỗi khi xóa hóa đơn:", error);
    }
}

//đóng cửa sổ đơn hàng trong admin
function close_bill_tab() {
    document.getElementById("page_bill").style.display = "none";
}
//sắp xếp đơn hàng theo ngày tháng năm
async function sap_xep_theo_ngay_tang() {
    await sap_xep_hoa_don((a, b) => new Date(a.date_bill) - new Date(b.date_bill));
}
async function sap_xep_theo_ngay_giam() {
    await sap_xep_hoa_don((a, b) => new Date(b.date_bill) - new Date(a.date_bill));
}

async function sap_xep_hoa_don(compareFunction) {
    try {
        const response = await fetch("http://localhost:3000/api/bills");
        const result = await response.json();

        if (result.success) {
            const sortedBills = result.data.sort(compareFunction);

            const menuList = document.querySelector(".box_bill .data_bill");
            menuList.innerHTML = "";

            // Thêm header
            addTableHeader(menuList);

            sortedBills.forEach(billItem => {
                const row = createTableRow(billItem);
                menuList.appendChild(row);
            });
        } else {
            console.error("Không thể sắp xếp hóa đơn:", result.message);
        }
    } catch (error) {
        console.error("Lỗi khi sắp xếp hóa đơn:", error);
    }
}



async function searchByDateRange() {
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);

    const menuList = document.querySelector(".box_bill .data_bill");
    menuList.innerHTML = "";

    try {
        const response = await fetch("http://localhost:3000/api/bills");
        const result = await response.json();

        if (result.success) {
            const filteredBills = result.data.filter(bill => {
                const billDate = new Date(bill.date_bill);
                return billDate >= startDate && billDate <= endDate;
            });

            // Thêm header
            addTableHeader(menuList);

            filteredBills.forEach(billItem => {
                const row = createTableRow(billItem);
                menuList.appendChild(row);
            });

            if (filteredBills.length === 0) {
                menuList.innerHTML = "<tr><td colspan='8'>Không có hóa đơn nào trong khoảng thời gian này.</td></tr>";
            }
        } else {
            console.error("Không thể lấy danh sách hóa đơn:", result.message);
        }
    } catch (error) {
        console.error("Lỗi khi lọc hóa đơn:", error);
    }
}

// async function searchByDateRange() {
//     const startDate = new Date(document.getElementById('startDate').value);
//     const endDate = new Date(document.getElementById('endDate').value);

//     const menuList = document.querySelector(".box_bill .data_bill");
//     menuList.innerHTML = "";

//     try {
//         const response = await fetch("http://localhost:3000/api/bills");
//         const result = await response.json();

//         if (result.success) {
//             const filteredBills = result.data.filter(bill => {
//                 const billDate = new Date(bill.date_bill);
//                 return billDate >= startDate && billDate <= endDate;
//             });

//             // Thêm header
//             addTableHeader(menuList);

//             filteredBills.forEach(billItem => {
//                 const row = createTableRow(billItem);
//                 menuList.appendChild(row);
//             });

//             if (filteredBills.length === 0) {
//                 menuList.innerHTML = "<tr><td colspan='8'>Không có hóa đơn nào trong khoảng thời gian này.</td></tr>";
//             }
//         } else {
//             console.error("Không thể lấy danh sách hóa đơn:", result.message);
//         }
//     } catch (error) {
//         console.error("Lỗi khi lọc hóa đơn:", error);
//     }
// }

function addTableHeader(menuList) {
    const headerRow = document.createElement("tr");
    headerRow.innerHTML = `
        <th>Mã hóa đơn</th>
        <th>Người dùng</th>
        <th>Địa chỉ</th>
        <th>Ngày hóa đơn</th>
        <th>Sản phẩm</th>
        <th>Tổng tiền</th>
        <th>Trạng thái</th>
        <th>Hành động</th>
    `;
    menuList.appendChild(headerRow);
}

function createTableRow(billItem) {
    const row = document.createElement("tr");
    row.id = `bill_${billItem.timeid}`;

    const formattedDate = formatDate(billItem.date_bill);
    const totalPrice = formatCurrency(billItem.total_money);

    row.innerHTML = `
        <td>${billItem.timeid}</td>
        <td>${billItem.username}</td>
        <td>${billItem.address}</td>
        <td>${formattedDate}</td>
        <td id="user_bill_item_${billItem.timeid}">
            <button onclick="openListBill('${billItem.timeid}')">...</button>
        </td>
        <td>${totalPrice}</td>
        <td>
            <select 
                onchange="updateBillStatus('${billItem.timeid}', this.value)" 
                name="choose" 
                id="id${billItem.timeid}" 
                class="trang_thai"
            >
                <option value="1" ${billItem.trang_thai === "Vừa đặt" ? "selected" : ""}>Vừa đặt</option>
                <option value="2" ${billItem.trang_thai === "2" ? "selected" : ""}>Đang giao</option>
                <option value="3" ${billItem.trang_thai === "3" ? "selected" : ""}>Đã giao</option>
                <option value="4" ${billItem.trang_thai === "4" ? "selected" : ""}>Đã nhận</option>
                <option value="5" ${billItem.trang_thai === "5" ? "selected" : ""}>Đã hủy</option>
            </select>
        </td>
        <td>
            <button class="delete-button" onclick="deleteRow_dh('${billItem.timeid}')">
                <img src="./img/trash.svg" style="width:20px;height:20px;">
            </button>
        </td>
    `;
    return row;
}
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

function formatCurrency(amount) {
    // Nếu `amount` là chuỗi, loại bỏ chữ "VND" (nếu có) nhưng giữ nguyên các dấu phẩy
    if (typeof amount === 'string') {
        amount = parseFloat(amount.replace(/ VND$/, '').replace(/,/g, '')); // Loại bỏ "VND" và dấu phẩy
    }

    // Định dạng lại thành chuỗi tiền tệ tiếng Việt
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount || 0);
}

async function updateBillStatus(timeid, status) {
    const selectElement = document.getElementById(`id${timeid}`); // Get the select element
    if (!selectElement) {
        console.error(`Không tìm thấy phần tử cho timeid: ${timeid}`);
        return;
    }

    // Disable the select to prevent multiple clicks
    selectElement.disabled = true;

    try {
        // Show loading status
        selectElement.style.backgroundColor = '#f3f3f3';
        selectElement.style.cursor = 'wait';

        const response = await fetch(`http://localhost:3000/api/bills/${timeid}/status`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ trang_thai: status })
        });

        const result = await response.json();

        if (response.ok && result.success) {
            alert("✅ Trạng thái đơn hàng đã được cập nhật thành công.");
        } else {
            alert("❌ Không thể cập nhật trạng thái: " + (result.message || 'Lỗi không xác định'));
            console.error("Chi tiết lỗi:", result);
        }
    } catch (error) {
        console.error("Lỗi khi cập nhật trạng thái:", error);
        alert("❌ Lỗi kết nối, vui lòng thử lại!");
    } finally {
        // Re-enable the dropdown
        selectElement.disabled = false;
        selectElement.style.backgroundColor = '';
        selectElement.style.cursor = 'default';
    }
}




function checkOpenTab() {
    if (localStorage.getItem('userlogin')) {
        var user = JSON.parse(localStorage.getItem('userlogin'));

        if (user.username == 'admin') {
            return open_bill_tab();
        }
        else {
            return open_user_bill();
        }
    }
}

// function close_bill_tab() {
//     document.getElementById("page_bill").style.display = "none";
// }
//Nhập kho
function nhap_kho_close(){
    nhap_kho_edit_close();
    document.getElementById("active_nhapkho").style.display = "none";
}
function nhap_kho_edit_close(){
    document.getElementById("active_add_nhapkho").style.display = "none";
    document.getElementById("active_nhapkho").style.display = "block";
}
function nhap_kho_edit(){
    document.getElementById("active_nhapkho").style.display = "none";
    document.getElementById("active_add_nhapkho").style.display = "grid";
}

function nhap_kho_open(){
    close_footer();
    close_DKSD_CSBM_CSVC();
    close_bill_tab();
    quan_ly_san_pham_close();
    quan_ly_user_close();
    thong_ke_close();
    document.getElementById("active_nhapkho").style.display = "block";
}

//thống kê 
function thong_ke_open() {
    close_footer();
    close_DKSD_CSBM_CSVC();
    close_bill_tab();
    quan_ly_san_pham_close();
    quan_ly_user_close();
    nhap_kho_close();
    document.getElementById("page_dt").style.display = "block";

}
function thong_ke_close() {
    thong_ke_doanh_thu_close()
    thong_ke_san_pham_close()
    doanh_thu_trong_ngay_close()
    document.getElementById("page_dt").style.display = "none";

}
function thong_ke_san_pham() {
    
    doanh_thu_trong_ngay_close()
    thong_ke_doanh_thu_close()
    document.getElementById("thong_ke_san_pham").style.display = "block"

}
function thong_ke_san_pham_close() {
    document.getElementById("thong_ke_san_pham").style.display = "none"
}
function thong_ke_doanh_thu() {
    thong_ke_san_pham_close()
    doanh_thu_trong_ngay_close()
    const data = localStorage.getItem("allBills");
    const allBills = JSON.parse(data)
    const data_user = localStorage.getItem("user");
    const user = JSON.parse(data_user)
    if (user && allBills) {
        let doanh_thu = 0;
        let so_luong_da_ban = 0;
        for (let i = 0; i < user.length; i++) {
            if (allBills[user[i].username]) {
                const bill = allBills[user[i].username];
                for (let j = 0; j < bill.length; j++) {
                    const trang_thai = bill[j].trang_thai;
                    if (trang_thai && (trang_thai === "Đã giao" || trang_thai === "Đã nhận")) {
                        const total_money = parseFloat(bill[j].total_money.replace(" VND", "")); // Xóa dấu phẩy để chuyển thành số
                        doanh_thu = doanh_thu + parseFloat(total_money * 1000);
                        so_luong_da_ban += parseInt(bill[j].count);
                    }
                }
            }
        }
        document.getElementById("so_luong_san_pham_da_ban").innerText = so_luong_da_ban;
        document.getElementById("doanh_thu_san_pham_da_ban").innerText = doanh_thu.toLocaleString() + " VND";
    }
    else {
        document.getElementById("so_luong_san_pham_da_ban").innerText = 0;
        document.getElementById("doanh_thu_san_pham_da_ban").innerText = "0" + " VND";
    }
    document.getElementById("thong_ke_doanh_thu").style.display = "block"

}
function thong_ke_doanh_thu_close() {
    document.getElementById("thong_ke_doanh_thu").style.display = "none"
}
function doanh_thu_trong_ngay() {
    thong_ke_san_pham_close()
    thong_ke_doanh_thu_close()
    const data = localStorage.getItem("allBills") || '[]';
    const allBills = JSON.parse(data);
    const data_user = localStorage.getItem("user") || '[]';
    const user = JSON.parse(data_user);
    const dateMap = {};
    const menuList = document.querySelector("#page_dt #DTTN #doanh_thu_trong_ngay")
    menuList.innerHTML = ``
    for (let i = 0; i < user.length; i++) {
        const username = user[i].username;
        if (username && allBills[username]) {
            const userBills = allBills[username];

            for (let j = 0; j < userBills.length; j++) {
                const bill = userBills[j];
                if (bill && (bill.trang_thai === "Đã nhận" || bill.trang_thai === "Đã giao")) {
                    const total_money = parseFloat(bill.total_money.replace(" VND", ""));
                    const ngay_mua = bill.Ngay_mua;

                    if (!dateMap[ngay_mua]) {
                        dateMap[ngay_mua] = {
                            so_don_trong_ngay: 0,
                            doanh_thu: 0
                        };
                    }
                    if (j == 0) {
                        dateMap[ngay_mua].so_don_trong_ngay++;
                    } else if (userBills[j - 1] && bill.timeid !== userBills[j - 1].timeid) {
                        dateMap[ngay_mua].so_don_trong_ngay++;
                    }
                    dateMap[ngay_mua].doanh_thu += parseFloat(total_money * 1000);
                }
            }
        }
    }
    for (const ngay_mua in dateMap) {
        if (dateMap.hasOwnProperty(ngay_mua)) {
            const infoNgay = dateMap[ngay_mua];
            const addcontent = document.createElement("tr")
            addcontent.classList.add(`${ngay_mua}`)
            addcontent.innerHTML = `
                        <th style="width: 25%;">${ngay_mua}</th>
                        <th style="width: 25%;">${infoNgay.so_don_trong_ngay}</th>
                        <th>${infoNgay.doanh_thu.toLocaleString() + " VND"}</th>`

            menuList.appendChild(addcontent)
        }
    }
    document.getElementById("doanh_thu_trong_ngay").style.display = "block"
}
function doanh_thu_trong_ngay_close() {
    document.getElementById("doanh_thu_trong_ngay").style.display = "none"
}