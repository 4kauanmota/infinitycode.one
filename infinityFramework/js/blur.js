blurAnimIn = function blurFunctionIn(){
    const element = event.target;

    const blurArea = document.querySelectorAll('.blur-item');
    blurArea.forEach(blurItem =>{
        blurItem.classList.add('blurIn');
    })

    element.classList.add('blurOut')
}

blurAnimOut = function blurFunctionOut(){
    const element = event.target;

    const blurArea = document.querySelectorAll('.blur-item');
    blurArea.forEach(blurItem =>{
        blurItem.classList.remove('blurIn');
        if(blurItem.classList.contains('blurOut'))
            blurItem.classList.remove('blurOut');
    })
}