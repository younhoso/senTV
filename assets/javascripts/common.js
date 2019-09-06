// // notice 세로 슬라이드
// var noticeSlide = function() {
//     setTimeout(function() {
//         $('#notice_list li:first').animate( {marginTop: '-45px'}, 400, function() {
//             $(this).detach().appendTo('ul#notice_list').removeAttr('style');
//         });
//         noticeSlide();
//     }, 3000);
// };
// noticeSlide();

// UI Select Open & Close
$(document).on("click", ".select_ui .select_value", function(){
    if(!$(this).parent(".select_ui").hasClass("active")){
        $(".select_ui").removeClass("active");
        $(this).parent(".select_ui").addClass("active");

        // Scroll Create
        $(this).siblings(".select_box").mCustomScrollbar({
            scrollInertia: 300
        });
    }else{
        $(this).parent(".select_ui").removeClass("active");
    }
});
// UI Select Cancel
$(document).click(function(e){
    if(!$(e.target).is(".select_ui .select_value")){
        $(".select_ui").removeClass("active");
    }
});
// UI Select Choice
$(document).on("click", ".select_box li > button", function(){
    var select_html = $(this).html();
    var $select_ui = $(this).parents(".select_ui");
    var $select_value = $select_ui.find(".select_value");

    $select_ui.find("li").removeClass("active");
    $(this).parent("li").addClass("active");
    $select_value.removeClass("placeholder");
    $select_value.html(select_html);
    $select_ui.removeClass("active");
});

// news calendar datepicker 
$(function() {
    $("#datepicker").datepicker({
        dateFormat: 'yy.mm.dd' //Input Display Format 변경
        ,showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
        ,showMonthAfterYear:false //년도 먼저 나오고, 뒤에 월 표시
        ,changeYear: false //콤보박스에서 년 선택 가능
        ,changeMonth: false //콤보박스에서 월 선택 가능
        ,showOn: "button" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시
        ,buttonImage: "../../images/common/ico_calendar.png" //버튼 이미지 경로
        ,buttonImageOnly: true //기본 버튼의 회색 부분을 없애고, 이미지만 보이게 함
        ,buttonText: "선택" //버튼에 마우스 갖다 댔을 때 표시되는 텍스트
        ,monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'] //달력의 월 부분 텍스트
        ,monthNames: ['01 <span>/</span>','02 <span>/</span>','03 <span>/</span>','04 <span>/</span>','05 <span>/</span>',
        '06 <span>/</span>','07 <span>/</span>','08 <span>/</span>','09 <span>/</span>','10 <span>/</span>','11 <span>/</span>','12 <span>/</span>'] //달력의 월 부분 Tooltip 텍스트
        ,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 부분 텍스트
        ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 부분 Tooltip 텍스트
        ,minDate: "-10Y" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
        ,maxDate: "today" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)
        ,closeText: "닫기"
        ,prevText: "이전 달"
        ,nextText: "다음 달"
        ,showButtonPanel: true
    });

    //초기값을 오늘 날짜로 설정
    $('#datepicker').datepicker('setDate', 'today'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)
});