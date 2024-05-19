let picker = document.getElementById("color");


picker.addEventListener("change", function(event){
    console.log(event.target.value)
    document.getElementById("background").style.background = event.target.value;
})

