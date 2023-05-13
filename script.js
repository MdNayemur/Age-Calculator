
var _btn=document.getElementById("btn");
var _date = new Date();
var _Today = _date.getDate();
var _Tomonth = _date.getMonth()+1;
var _Toyear = _date.getFullYear();
document.getElementById("Today").value=_Today;
document.getElementById("Tomonth").value=_Tomonth;
document.getElementById("Toyear").value=_Toyear;

_btn.onclick=function(){
    var _Birthday=document.getElementById("Birthday").value;
    var _Birthmonth=document.getElementById("Birthmonth").value;
    var _Birthyear=document.getElementById("Birthyear").value;

    if(_Birthday !="" && _Birthmonth !="" && _Birthyear !="" ){
        if (_Today<_Birthday) {
            if(_Birthmonth==1 || _Birthmonth==3 || _Birthmonth==5 || _Birthmonth==7 || _Birthmonth==8 || _Birthmonth==10 || _Birthmonth==12 ){
            _Today=((_Today+31)-_Birthday);
            // console.log(_Today);
            }
            else{
            _Today=((_Today+30)-_Birthday);
            // console.log(_Today);
            }
    
            _Tomonth=_Tomonth-1;
            if (_Tomonth<_Birthmonth) {
                _Tomonth=((_Tomonth+12)-_Birthmonth);
                _Toyear=((_Toyear-1)-_Birthyear);
                // console.log(_Tomonth);
                // console.log(_Toyear);
                document.getElementById("otput").innerHTML="Your age is"+"&nbsp;"+_Toyear+"&nbsp;"+"years"+"&nbsp;"+_Tomonth+"&nbsp;"+"months"+"&nbsp;"+_Today+"&nbsp;"+"days";
            }
            else{
                _Tomonth=(_Tomonth-_Birthmonth);
                _Toyear=(_Toyear-_Birthyear);
                // console.log(_Tomonth);
                // console.log(_Toyear);
                document.getElementById("otput").innerHTML="Your age is"+"&nbsp;"+_Toyear+"&nbsp;"+"years"+"&nbsp;"+_Tomonth+"&nbsp;"+"months"+"&nbsp;"+_Today+"&nbsp;"+"days";
    
            }
        }
        else if(_Tomonth<_Birthmonth) {
                _Today=(_Today-_Birthday);
                // console.log(_Today);
                _Tomonth=((_Tomonth+12)-_Birthmonth);
                _Toyear=((_Toyear-1)-_Birthyear);
                // console.log(_Tomonth);
                // console.log(_Toyear);
                document.getElementById("otput").innerHTML="Your age is"+"&nbsp;"+_Toyear+"&nbsp;"+"years"+"&nbsp;"+_Tomonth+"&nbsp;"+"months"+"&nbsp;"+_Today+"&nbsp;"+"days";
    
            }
        else{
            _Today=(_Today-_Birthday);
                // console.log(_Today);
                _Tomonth=(_Tomonth-_Birthmonth);
                _Toyear=(_Toyear-_Birthyear);
                // console.log(_Tomonth);
                // console.log(_Toyear);
                document.getElementById("otput").innerHTML="Your age is"+"&nbsp;"+_Toyear+"&nbsp;"+"years"+"&nbsp;"+_Tomonth+"&nbsp;"+"months"+"&nbsp;"+_Today+"&nbsp;"+"days";
    
        }

    }
    else{
        alert('Insert Your Birthdate Properly');
    }

}
