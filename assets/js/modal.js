const $ = {}
window.$ = $

const button = document.getElementById('button')

function createModal(options) {
    const modalDiv = document.createElement('div')
    modalDiv.classList.add('modalWrapper')
    modalDiv.insertAdjacentHTML('afterbegin', `
        <div class="modalBackground">
            <div class="modalWindow">
                <div class="modalHeader">
                    <span class="modalTitle">Choose the Music</span>
                    <span class="modalClose">X</span>
                </div>
                <div class="modalContent">
                    <p class="Joyful">Joyful Music</p>
                    <p class="Mystical">Mystical Music</p>
                </div>
            </div>
        </div>
    `)
    root.appendChild(modalDiv)
    return modalDiv
}

$.modal = function (options) {
    const CLOSE_ANIMATION_SPEED = 500
    const someCrap = createModal(options)
    let closing = false

    return {
        open() {
            someCrap.classList.add('open')
        },
        close() {
            closing = true
            someCrap.classList.remove('open')
            someCrap.classList.add('hide')
            setTimeout(() => {
                someCrap.classList.remove('hide')
                closing = false
            }, CLOSE_ANIMATION_SPEED)
        },
        destroy() { }
    }
}

const modal = $.modal()

button.addEventListener('click', function () {
    modal.open()
})

const closeModalWindow = document.querySelector('.modalClose')
closeModalWindow.addEventListener('click', function () {
    modal.close()
})
