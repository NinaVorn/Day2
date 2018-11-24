let receiveBtn = document.getElementById('receive'),
    nameImput = document.querySelector('.contactform_name'),
    phoneImput = document.querySelector('.contactform_phone'),
    mailImput = document.querySelector('.contactform_mail'),
    modal = document.querySelector('.modal'),
    close = document.querySelector('.close'),
    text = document.getElementsByName('message')[0];


receiveBtn.addEventListener('click', function() {
    modal.style.display = "block"
});

close.addEventListener('click', function() {
    modal.style.display = "none"
});

nameImput.addEventListener("input", function(){
    text.value = "Меня зовут " + nameImput.value + ". И я хочу спросить:";

    if (nameImput.value == "") {
        text.value = ""
    }
});