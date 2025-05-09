import { library } from './validation.js';

class SuccessReg {
    constructor() {
        this.popup = document.querySelector('.pop-up');
        this.closeButton = document.querySelector('.close-button');
        this.close = document.querySelector('.close');
        this.userName = document.querySelector('.user-name');
        this.openClose(true);

        this.closeButton.addEventListener('click', () => {
            this.openClose(true);
        });

        this.close.addEventListener('click', () => {
            this.openClose(true);
        });

    }

    openClose(open) {
        this.popup.classList.toggle('hidden', open);
    }

    writeName(name) {
        this.openClose(false);
        const alphabet = library.en.alphabet;
        this.userName.innerHTML = '';
        let str = '';
        let i = 0;
        const interval = setInterval(() => {
            const elem = alphabet[i];
            if (elem === undefined) {
                str += name[0]
                i = 0;
                name = name.slice(1);
                this.userName.innerHTML = `${str}`;
            } else {
                this.userName.innerHTML = `${str}${elem}`;
                i++;
                if (elem === name[0]) {
                    str += elem
                    i = 0;
                    name = name.slice(1);
                }
            }


            if (name === '') {
                clearInterval(interval);
            }
        }, 35);
    }



}

export default SuccessReg;