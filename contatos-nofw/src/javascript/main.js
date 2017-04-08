let key_buttons = document.querySelectorAll('.kb_key');
let input_keyboard_wrapper = document.getElementById('input_keyboard_wrapper');

for(let elem of key_buttons) {
    elem.addEventListener('touchend', evt => {
        let value = elem.getAttribute('data-key-value');
        if(value && value !== 'call') {
          if(input_keyboard_wrapper.value.length < 14) {
            input_keyboard_wrapper.value += ''+value;
          }
        }
    });
}
//
