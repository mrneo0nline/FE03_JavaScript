$(document).ready(function () {
	/* Tabs */

	$("#tabs").tabs();

	/* Ngay thang nam sinh */

	$("#datepicker").datepicker({
		changeMonth: true,
		changeYear: true
	});

	/* Danh sach thanh pho */

	var allVNCities = [
		"An Giang",
		"Ba Ria - Vung Tau",
		"Bac Lieu",
		"Bac Kan",
		"Bac Giang",
		"Bac Ninh",
		"Ben Tre",
		"Binh Duong",
		"Binh Dinh",
		"Binh Phuoc",
		"Binh Thuan",
		"Ca Mau",
		"Cao Bang",
		"Can Tho",
		"Da Nang",
		"Dak Lak",
		"Dak Nong",
		"Dong Nai",
		"Dong Thap",
		"Dien Bien",
		"Gia Lai",
		"Ha Giang",
		"Ha Nam",
		"Ha Noi",
		"Ha Tinh",
		"Hai Duong",
		"Hai Phong",
		"Hoa Binh",
		"Hau Giang",
		"Hung Yen",
		"Thanh pho Ho Chi Minh",
		"Khanh Hoa",
		"Kien Giang",
		"Kon Tum",
		"Lai Chau",
		"Lao Cai",
		"Lang Son",
		"Lam Dong",
		"Long An",
		"Nam Dinh",
		"Nghe An",
		"Ninh Binh",
		"Ninh Thuan",
		"Phu Tho",
		"Phu Yen",
		"Quang Binh",
		"Quang Nam",
		"Quang Ngai",
		"Quang Ninh",
		"Quang Tri",
		"Soc Trang",
		"Son La",
		"Tay Ninh",
		"Thai Binh",
		"Thai Nguyen",
		"Thanh Hoa",
		"Thua Thien - Hue",
		"Tien Giang",
		"Tra Vinh",
		"Tuyen Quang",
		"Vinh Long",
		"Vinh Phuc",
		"Yen Bai"
	];
	$("#tags").autocomplete({
		source: allVNCities
	});
});