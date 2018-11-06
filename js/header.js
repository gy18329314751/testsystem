/**
 * Created by cui on 2018/7/26.
 */
var oNavFours = document.getElementsByClassName('nav_piece');
var numNow= 0;
var oUlHide = document.getElementsByClassName('hide_nav');
var oUlCont = document.querySelectorAll('.hide_nav ul');
oUlCont[0].classList.add('dong1');
oUlCont[1].classList.add('dong2');
oUlCont[2].classList.add('dong2');
for (var i = 0; i < oNavFours.length; i++) {
    oNavFours[i].index = i;
    oNavFours[i] .onmouseover = function(){
        for (var j = 0; j < oNavFours.length; j++) {
            oNavFours[j].classList.remove('now')
        }
        oNavFours[numNow].classList.add('now');
        this.classList.add('now');
    };
    oNavFours[i].onmouseout = function(){
        this.classList.remove('now');
        oNavFours[numNow].classList.add('now');
    };
    oNavFours[i].onclick = function(){
        for (var j = 0; j < oNavFours.length; j++) {
            oNavFours[j].classList.remove('now')
        }
        this.classList.add('now');
        numNow =  this.index;
    }
}
//1.鼠标经过时需要出现小白点
//2.点击时除了当前显示  其余消失
//3.鼠标经过，下拉菜单出现  抖动效果
//4.
//$(function(){
//    $(".nav_piece").hover(function(){
//        $(this).find("ul").stop().slideDown()
//    },function(){
//        $(this).find("ul").stop().slideUp()
//    }).click(function(){
//        $(this).addClass("now").find("ul").hide().end().siblings()
//    })
//});


