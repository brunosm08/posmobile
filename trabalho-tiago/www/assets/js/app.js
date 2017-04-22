var pageone = document.getElementById('pageone');
var pagetwo = document.getElementById('pagetwo');
var pagethree = document.getElementById('pagethree');
for(let elem of key_buttons) {
    elem.addEventListener('click', evt => {
        let value = elem.getAttribute('id');
       console.log("abrindo= " +value);
        if(value && value == 'lpone') {
          pageone.setAttribute('class', 'visible');
          pagetwo.setAttribute('class', 'hidden');
          pagethree.setAttribute('class', 'hidden');
        }else if(value && value == 'lptwo'){
          pageone.setAttribute('class', 'hidden');
          pagetwo.setAttribute('class', 'visible');
          pagethree.setAttribute('class', 'hidden');

        }else if(value && value == 'lpthree') {
          pageone.setAttribute('class', 'hidden');
          pagetwo.setAttribute('class', 'hidden');
          pagethree.setAttribute('class', 'visible');
        }
    });
}
