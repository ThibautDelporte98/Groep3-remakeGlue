const toggleHidden = (ID) => {
    let buttons = document.querySelectorAll(".js-jobs-buttons");
    console.log(buttons);
    for(const button of buttons){
        button.addEventListener('click', function(event){
            event.preventDefault();
            
            buttonid= "description" + event.path[2].id;
            console.log(document.getElementById(buttonid).classList)
            document.getElementById(buttonid).classList.toggle("u-hidden");
            
            
            button.classList.toggle("u-active--button");
            
    })
    }
   
    
    

}


document.addEventListener("DOMContentLoaded", toggleHidden );