const Main = {

    init: function(){
        this.cacheSelectors();
        this.bindEvents();
    },

    cacheSelectors: function(){
        this.$checkButtons = document.querySelectorAll('.check');
        this.$inputTask = document.querySelector('#inputTask');
        this.$list = document.querySelector('#list');
        this.$removeButtons = document.querySelectorAll('.remove');
    },

    bindEvents: function(){
        const self = this

        this.$checkButtons.forEach(function(button){
            button.onclick = self.Events.checkButton_click;
        })

        this.$inputTask.onkeypress = self.Events.inputTask_keypress.bind(this);

        this.$removeButtons.forEach(function(button){
            button.onclick = self.Events.removeButtons_click;
        })
    },

    Events: {
        checkButton_click: function(e){
            const li = e.target.parentElement;
            const isDone = li.classList.contains('done');

            if(!isDone){
                return li.classList.add('done');
            }

            li.classList.remove('done');
        },

        inputTask_keypress: function(e){
            const key = e.key;
            const value = e.target.value

            if(key === 'Enter'){
                this.$list.innerHTML += `
                    <li>
                        <div class="check"></div>
                        <label class="task">
                            ${value}
                        </label>
                        <button class="remove"></button>
                    </li>
                `

                e.target.value = '';

                this.cacheSelectors();
                this.bindEvents();
            }
        },

        removeButtons_click: function(e){
            const li = e.target.parentElement;

            li.classList.add('removed');

            setTimeout(function(){
                li.classList.add('hidden');
            }, 300)
        }
    }
}

Main.init();

function changeMode(){
    changeClasses();
    changeText();
}

function changeClasses(){
    button.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
}

function changeText(){
    const lightMode = 'Gradiente';
    const darkMode = 'Dark Mode';

    if(body.classList.contains(darkModeClass)){
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + ' ON';
        return;
    }

    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + ' ON';
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];


button.addEventListener('click', changeMode);