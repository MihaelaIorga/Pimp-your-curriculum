 let subjects = document.querySelector('.study-prog');
 let subjectsTemplate = document.querySelector('.mainSubjects').content;
 let subjectsDataSource = "curriculum.json"

 function getData(link) {
     fetch(link).then(function (response) {
         return response.json();
     }).then(function (json) {
         return show(json);
     });
 }

 function show(json) {
     json.forEach(function (subject) {
         console.log(subject)
         let clone = subjectsTemplate.cloneNode(true);

         clone.querySelector(".t-icon").src = subject.icon.src;
         clone.querySelector("h3").textContent = subject.name;
         clone.querySelector("h4").textContent = subject.ects;
         clone.querySelector(".teach-p").textContent = subject.description;

         subjects.appendChild(clone);

     });
 }
 getData(subjectsDataSource);


 //active

 function removeActive(link) {
     link.classList.remove('active')
 }
 document.querySelector(".clickhome").onclick = function (e) {
     document.querySelectorAll('.navBar a').forEach(removeActive);
     e.target.classList.add('active');
 }

 document.querySelector(".clicksem").onclick = function (e) {
     document.querySelectorAll('.navBar a').forEach(removeActive);
     e.target.classList.add('active');
 }

 document.querySelector(".exam").onclick = function (e) {
     document.querySelectorAll('.navBar a').forEach(removeActive);
     e.target.classList.add('active');
 }


 document.querySelector(".clickintern").onclick = function (e) {
     document.querySelectorAll('.navBar a').forEach(removeActive);
     e.target.classList.add('active');
 }

 document.querySelector(".clickgoing").onclick = function (e) {
     document.querySelectorAll('.navBar a').forEach(removeActive);
     e.target.classList.add('active');
 }

 //toggle menu

 var theToggle = document.getElementById('toggle');

 // based on Todd Motto functions
 // https://toddmotto.com/labs/reusable-js/

 // hasClass
 function hasClass(elem, className) {
     return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
 }
 // addClass
 function addClass(elem, className) {
     if (!hasClass(elem, className)) {
         elem.className += ' ' + className;
     }
 }
 // removeClass
 function removeClass(elem, className) {
     var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
     if (hasClass(elem, className)) {
         while (newClass.indexOf(' ' + className + ' ') >= 0) {
             newClass = newClass.replace(' ' + className + ' ', ' ');
         }
         elem.className = newClass.replace(/^\s+|\s+$/g, '');
     }
 }
 // toggleClass
 function toggleClass(elem, className) {
     var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, " ") + ' ';
     if (hasClass(elem, className)) {
         while (newClass.indexOf(" " + className + " ") >= 0) {
             newClass = newClass.replace(" " + className + " ", " ");
         }
         elem.className = newClass.replace(/^\s+|\s+$/g, '');
     } else {
         elem.className += ' ' + className;
     }
 }

 theToggle.onclick = function () {
     toggleClass(this, 'on');
     return false;
 }


 //sticky header

 var header = document.getElementById("header");
 var readout = document.getElementsByTagName("div");
 var stuck = false;
 var stickPoint = getDistance();

 function getDistance() {
     var topDist = header.offsetTop;
     return topDist;
 }

 window.onscroll = function (e) {
     var distance = getDistance() - window.pageYOffset;
     var offset = window.pageYOffset;
     readout.innerHTML = stickPoint + '   ' + distance + '   ' + offset + '   ' + stuck;
     if ((distance <= 0) && !stuck) {
         header.style.position = 'fixed';
         header.style.top = '0px';
         stuck = true;
     } else if (stuck && (offset <= stickPoint)) {
         header.style.position = 'static';
         stuck = false;
     }
 }
