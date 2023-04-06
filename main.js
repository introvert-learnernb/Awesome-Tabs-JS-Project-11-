const btns = document.querySelectorAll('.tab__btn');
const contents = document.querySelectorAll('.content');
// console.log(btns);

btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        //looping through all buttons and removing the class active..
        btns.forEach((button)=>{
            if(button.classList.contains('active')){
                button.classList.remove('active');
            }
        })
        const clickedBtn = e.currentTarget;
        clickedBtn.classList.add('active');

        const id = clickedBtn.dataset.card;
        //looping through all contents and removing the class active..
        contents.forEach((content)=>{
            if(content.classList.contains('active')){
                content.classList.remove('active');
            }
        })
        const desiredContent = document.getElementById(id);
        desiredContent.classList.add('active');
    })
})