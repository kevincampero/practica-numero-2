(function(){
    alert("Pagina creada por KEVIN CAMPERO ALVAREZ");
    $(document).ready(function(){
        $('.alt-form').click(function(){
            $('.form-content').animate({
                height:"toggle",
                opacity:'toggle'
            },600);
        });
        
        let formregistro=document.getElementsByName('form-input');
        for(let i = 0; i < formregistro.length; i++)
        {
            formregistro[i].addEventListener('blur',function(){
                if(this.value.length>=1){
                    this.nextElementSibling.classList.add('active');
                    this.nextElementSibling.classList.remove('error');
                }
                else if(this.value.length=" "){
                    this.nextElementSibling.classList.add('error');
                    this.nextElementSibling.classList.remove('active');
                }
                else{
                    this.nextElementSibling.classList.remove('active');
                }
            })
        }
    })
})()
