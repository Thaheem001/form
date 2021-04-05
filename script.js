var fname = document.getElementById('fname');
        var lname = document.getElementById('lname');
        var fathername = document.getElementById('fathername');
        var age = document.getElementById('age');
        var phone = document.getElementById('phone');
        var email = document.getElementById('email');
        var t1 = document.getElementById('t1');
        var t2 = document.getElementById('t2');
        var t3 = document.getElementById('t3');
        var t4 = document.getElementById('t4');
        var t5 = document.getElementById('t5');
        var t6 = document.getElementById('t6');
        var h1 = document.getElementById('tableh1');
        var obody = document.getElementById('oBody');
        var image = document.getElementById('image');

        function mydata() {
            obody.style.display='block';
            t1.innerText = fname.value;
            t2.innerText = lname.value;
            t3.innerText = fathername.value;
            t4.innerText = age.value + ' Year';
            t5.innerText = phone.value;
            t6.innerText = email.value;
            h1.innerHTML = 'Hello ' + fname.value + ' ' + lname.value;
        }
        function mydatac() {
            t1.innerText = " ";
            t2.innerText = " ";
            t3.innerText = " ";
            t4.innerText = " ";
            t6.innerText = " ";
            t5.innerText = " ";
            h1.innerHTML = "Please Fill Form!";
        }
        function hideB(){
            obody.style.display='none';
        }