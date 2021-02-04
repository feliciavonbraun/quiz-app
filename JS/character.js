window.addEventListener('load', showMore);

function showMore(){

    const infoBtn1 = document.getElementById('chooseOpponentBtnOne');
    const infoBtn2 = document.getElementById('chooseOpponentBtnTwo');
    const infoBtn3 = document.getElementById('chooseOpponentBtnThree');

    infoBtn1.addEventListener('click', readMore1);
    infoBtn2.addEventListener('click', readMore2);
    infoBtn3.addEventListener('click', readMore3);
}

function readMore1(){

    const infoText1 = document.getElementById('infoOne');
    

    if(infoText1.style.display === 'block'){
        infoText1.style.display = 'none';
    } else {
        infoText1.style.display = 'block';
    }

}

function readMore2(){

    const infoText2 = document.getElementById('infoTwo');

    if(infoText2.style.display === 'block'){
        infoText2.style.display = 'none';
    } else {
        infoText2.style.display = 'block';
    }
}

function readMore3(){

    const infoText3 = document.getElementById('infoThree');

    if(infoText3.style.display === 'block'){
        infoText3.style.display = 'none';
    } else {
        infoText3.style.display = 'block';
    }
}