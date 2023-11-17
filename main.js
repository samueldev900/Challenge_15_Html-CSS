    const regName = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s']+$/u;
    const regPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    let inputRequired = document.querySelectorAll('.required')
    let textErro = document.querySelectorAll('.text-erro')
    let iconErro = document.querySelectorAll('.icon-erro')
    let borderlabel = document.querySelectorAll('.input-div')
    

    function error(index){
      textErro[index].style.display = 'block'
      iconErro[index].style.display = 'block'
      borderlabel[index].style.border = '2px solid red'
    }
    function removeErro(index){
      textErro[index].style.display = 'none'
      iconErro[index].style.display = 'none'
      borderlabel[index].style.border = '1px solid gray'
    }

    function validateName(){

    if(inputRequired[0].value.length < 3){
      error(0);
    }
    else{
      removeErro(0);
    }}

    function validateLastName(){

    if(inputRequired[1].value.length < 3){
      error(1);
    }
    else{
      removeErro(1);
    }}

    function validateEmail(){
    if(!regEmail.test(inputRequired[2].value)){
      error(2);
    }
    else{
      removeErro(2);
    }}

    function validatePass(){
      if(!regPass.test(inputRequired[3].value)){
        error(3);
      }
      else{
        removeErro(3);
      }
    }

