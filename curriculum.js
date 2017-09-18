 let subjects = document.querySelector ('.study-prog');
                let subjectsTemplate = document.querySelector('.mainSubjects').content;
                let subjectsDataSource = "curriculum.json"

                function getData(link){
                fetch(link).then(function(response){
                    return response.json();
                }).then(function(json){
                    return show(json);
                });
            }
                function show(json) {
                    json.forEach(function(subject){
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

function removeActive(link){
            link.classList.remove('active')
        }
        document.querySelector(".clickhome").onclick = function(e) {
            document.querySelectorAll('.navBar a').forEach(removeActive);
            e.target.classList.add('active');
            }

        document.querySelector(".clicksem").onclick = function(e) {
            document.querySelectorAll('.navBar a').forEach(removeActive);
            e.target.classList.add('active');
            }

        document.querySelector(".clickexam").onclick = function(e) {
            document.querySelectorAll('.navBar a').forEach(removeActive);
            e.target.classList.add('active');
            }

        document.querySelector(".clickintern").onclick = function(e) {
            document.querySelectorAll('.navBar a').forEach(removeActive);
            e.target.classList.add('active');
            }

        document.querySelector(".clickgoing").onclick = function(e) {
            document.querySelectorAll('.navBar a').forEach(removeActive);
            e.target.classList.add('active');
            }
