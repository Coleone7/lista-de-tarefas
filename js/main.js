
const Main = {

    init: function() {
        this.cacheSelector()
        this.bindEvents()
    },

    cacheSelector: function() {
        //semantica
        //this(chamando o 'main').$nomedavariavel = onde eu vou buscar isso no html.
        this.$checkButtons = document.querySelectorAll('.check')
        this.$inputTask = document.querySelector('#inputTask')
        this.$list = document.querySelector('#list')
        this.$removeButtons = document.querySelectorAll('.remove')
    },

    bindEvents: function() {
        const self = this
        
        //semantica
        //this(chamando o 'main').$nomedavariavel = evento. 
        //(no caso do botão, o evento é o click na div botão. no caso)
        //(no caso do input, o evento é o keypress que no caso é o enter.)
        // o evento é uma função que vai ser criada no campo abaixo.
        this.$checkButtons.forEach(function(button){
            button.onclick = self.Events.checkButton_click
        })

        this.$inputTask.onkeypress = self.Events.inputTask_keypress.bind(this)

        this.$removeButtons.forEach(function(button){
            button.onclick = self.Events.removeButtons_click
        })
    },




    Events: {
        checkButton_click: function(e){
            const li = e.target.parentElement
            const isDone = li.classList.contains('done')

            // if(isDone) {
            //     li.classList.remove('done')
            // } else {
            //     li.classList.add('done')
            // }  (funciona bem esse conceito de click do botão. mas o jeito feito a seguir é mais usado)

            if(!isDone) {
                return li.classList.add('done')
            }

            li.classList.remove('done')
            //o IF verifica primeiro a negação da constante "isDone", depois executa.
            // isDone está verificando a existencia da classe "done" no target (li).
            // OU SEJA. Se isDone for falso, então executa a inserção da classList. se for verdadeiro, deixa passar e retira.
        },


        inputTask_keypress: function(e){
            const key = e.key
            const value = e.target.value

            if(key === 'Enter'){
                this.$list.innerHTML+=`
                    <li>
                        <div class="check"></div>
                        <label class="task">
                            ${value}
                        </label>
                        <button class="remove"></button>
                    </li>
                `

                e.target.value=''
                this.cacheSelector()
                this.bindEvents()
            }
        },

        removeButtons_click: function(e){
            let li = e.target.parentElement

            li.classList.add('removed')
        
            setTimeout(function(){
                li.classList.add('hidden')
            },200)

        }
    }

}

Main.init()
