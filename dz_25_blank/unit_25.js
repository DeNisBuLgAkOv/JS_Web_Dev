
// Task 1 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Выведите в out-1 результат. Запускаться функция должна по нажатию b-1. */

// Ключ авторизации
// DdC33D7d2C2a7
function out(out, res){
    document.querySelector(out).innerHTML = res
}

function t1() {
    let xhttp = new XMLHttpRequest();
    console.log(xhttp)
    xhttp.onreadystatechange = function(){
        if(this.readyState ==4 && this.status == 200){
            myFunction(this.responseText)
        }
    }
    xhttp.open("GET"," http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=1" )
    xhttp.send()
    function  myFunction(data){
      console.log(data)
        out('.out-1', data)
    }
}

// ваше событие здесь!!!
document.querySelector('.b-1').addEventListener('click',t1)
// Task 2 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. */

function t2() {
    let xhttp = new XMLHttpRequest();
    console.log(xhttp)
    xhttp.onreadystatechange = function(){
        if(this.readyState ==4 && this.status == 200){
            myFunction(this.responseText)
        }
    }
    xhttp.open("GET"," http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=2&name=Denis",true )
    xhttp.send()
    function  myFunction(data){
      console.log(data)
        out('.out-2', data)
    }
}
document.querySelector('.b-2').addEventListener('click',t2)
// ваше событие здесь!!!


// Task 3 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.  Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. */

function t3() {
    let xhttp = new XMLHttpRequest()
    xhttp.open("GET","http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=3&num1=3&num2=5",true)
    xhttp.send()
    xhttp.onreadystatechange = function(){
        if(this.readyState ==4 && this.status == 200){
            myFunction(this.responseText)
        }
    }
    function myFunction(data) {
        out('.out-3',data)
    }

}
document.querySelector('.b-3').addEventListener('click',t3)
// ваше событие здесь!!!


// Task 4 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате).  Выведите в out-4 результат. Запускаться функция должна по нажатию b-4. */

function t4() {
    let xhttp = new XMLHttpRequest()
    xhttp.open("GET", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=4&num1=1&num2=10",true)
    xhttp.send()
    xhttp.onreadystatechange = function(){
        console.log(this.readyState)
        console.log("==========")
        console.log(this.status)

        if(this.readyState ==4 && this.status ==200){
            GetData(this.responseText)
        }
   
    }
    function GetData(data){
        out('.out-4',data)
    }
}
document.querySelector('.b-4').addEventListener('click',t4)
// ваше событие здесь!!!

// Task 5 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-5 результат. Запускаться функция должна по нажатию b-5. */

function t5() {
    let xhttp = new XMLHttpRequest()
    xhttp.open("GET", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=5",true)
    xhttp.send()
    xhttp.onreadystatechange = function(){
        if(this.readyState ==4 && this.status ==200){
            GetData(this.responseText)
        }
   
    }
    function GetData(data){
        out('.out-5',data)
    }
}
document.querySelector('.b-5').addEventListener('click',t5)

// ваше событие здесь!!!

// Task 6 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-6 результат. Запускаться функция должна по нажатию b-6. */

function t6() {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET"," http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=6&num1=6&num2=9",true)
    xhttp.send()
    xhttp.onreadystatechange=function(){
        if(this.readyState ==4 && this.status ==200){
            out('.out-6',this.responseText)
        }
    }
}
document.querySelector('.b-6').addEventListener('click',t6)
// ваше событие здесь!!!


// Task 7 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. */

function t7() {
    let xhttp = new XMLHttpRequest()
    xhttp.open("GET", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=7")
    xhttp.send()
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            out('.out-7',this.responseText)
        }
    }

}
document.querySelector('.b-7').addEventListener('click',t7)
// ваше событие здесь!!!

// Task 8 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-8 результат. Запускаться функция должна по нажатию b-8.*/

function t8() {
    let xhttp = new XMLHttpRequest()
    xhttp.open("GET", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=8&year=1999")
    xhttp.send()
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            out('.out-8',this.responseText)
        }
    }
}
document.querySelector('.b-8').addEventListener('click',t8)
// ваше событие здесь!!!


// Task 9 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-9 результат. Запускаться функция должна по нажатию b-9. */

function t9() {
    let xhttp = new XMLHttpRequest()
    xhttp.open("GET", "http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=9&m=1&d=1&y=1")
    xhttp.send()
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            out('.out-9',this.responseText)
        }
    }
}
document.querySelector('.b-9').addEventListener('click',t9)
// ваше событие здесь!!!


// Task 10 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Если все сделано верно, сервер пришлет строку hello. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-10 результат. Запускаться функция должна по нажатию b-10.

*/

function t10() {
    let xhttp = new XMLHttpRequest()
    xhttp.open("POST", "http://getpost.itgid.info/index2.php",true)
    xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded')
    xhttp.send('auth=DdC33D7d2C2a7&action=1')
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            out('.out-10',this.responseText)
        }
    }
}
document.querySelector('.b-10').addEventListener('click',t10)
// Task 11 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-11 результат. Запускаться функция должна по нажатию b-11. */

function t11() {
    let xhttp = new XMLHttpRequest()
    xhttp.open("POST", "http://getpost.itgid.info/index2.php",true)
    xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded')
    xhttp.send('auth=DdC33D7d2C2a7&action=2&name=Denis')
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            out('.out-11',this.responseText)
        }
    }
}
document.querySelector('.b-11').addEventListener('click',t11)
// ваше событие здесь!!!

// Task 12 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-12 результат. Запускаться функция должна по нажатию b-12.*/

function t12() {
    let xhttp = new XMLHttpRequest()
    xhttp.open("POST", "http://getpost.itgid.info/index2.php",true)
    xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded')
    xhttp.send('auth=DdC33D7d2C2a7&action=3&num1=3&num2=5')
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            out('.out-12',this.responseText)
        }
    }
}
document.querySelector('.b-12').addEventListener('click',t12)
// ваше событие здесь!!!

// Task 13 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-13 результат. Запускаться функция должна по нажатию b-13.*/

function t13() {
    let xhttp = new XMLHttpRequest()
    xhttp.open("POST", "http://getpost.itgid.info/index2.php",true)
    xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded')
    xhttp.send('auth=DdC33D7d2C2a7&action=4&num1=1&num2=5')
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            out('.out-13',this.responseText)
        }
    }
}
document.querySelector('.b-13').addEventListener('click',t13)
// ваше событие здесь!!!

// Task 14 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-14 результат. Запускаться функция должна по нажатию b-14.*/

function t14() {
    let xhttp = new XMLHttpRequest()
    xhttp.open("POST", "http://getpost.itgid.info/index2.php",true)
    xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded')
    xhttp.send('auth=DdC33D7d2C2a7&action=5')
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            out('.out-14',this.responseText)
        }
    }
}
document.querySelector('.b-14').addEventListener('click',t14)
// ваше событие здесь!!!

// Task 15============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-15 результат. Запускаться функция должна по нажатию b-15. */

function t15() {
    let xhttp = new XMLHttpRequest()
    xhttp.open("POST", "http://getpost.itgid.info/index2.php",true)
    xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded')
    xhttp.send('auth=DdC33D7d2C2a7&action=6&num1=1&num2=7')
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            out('.out-15',this.responseText)
        }
    }
}
document.querySelector('.b-15').addEventListener('click',t15)
// ваше событие здесь!!!

// Task 16 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-16 результат. Запускаться функция должна по нажатию b-16. */

function t16() {
    let xhttp = new XMLHttpRequest()
    xhttp.open("POST", "http://getpost.itgid.info/index2.php",true)
    xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded')
    xhttp.send('auth=DdC33D7d2C2a7&action=7')
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            out('.out-16',this.responseText)
        }
    }
}
document.querySelector('.b-16').addEventListener('click',t16)
// ваше событие здесь!!!

// Task 17 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате).Выведите в out-17 результат. Запускаться функция должна по нажатию b-17. */

function t17() {
    let xhttp = new XMLHttpRequest()
    xhttp.open("POST", "http://getpost.itgid.info/index2.php",true)
    xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded')
    xhttp.send('auth=DdC33D7d2C2a7&action=8&year=1999')
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            out('.out-17',this.responseText)
        }
    }
}
document.querySelector('.b-17').addEventListener('click',t17)
// ваше событие здесь!!!

// Task 18 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-18 результат. Запускаться функция должна по нажатию b-18. */

function t18() {
    let xhttp = new XMLHttpRequest()
    xhttp.open("POST", "http://getpost.itgid.info/index2.php",true)
    xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded')
    xhttp.send('auth=DdC33D7d2C2a7&action=9&m=1&d=1&y=1')
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            out('.out-18',this.responseText)
        }
    }
}
document.querySelector('.b-18').addEventListener('click',t18)
// ваше событие здесь!!!

