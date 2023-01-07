const button = document.getElementById('button')

function createModal(options) {
    const modalDiv = document.createElement('div')
    modalDiv.classList.add('modalWrapper')
    modalDiv.insertAdjacentHTML('afterbegin', `
        <div class="modalBackground">
            <div class="modalWindow">
                <div class="modalHeader">
                    <span class="modalTitle">Modal title</span>
                    <span class="modalClose">&times;</span>
                </div>
                <div class="modalContent">
                    <p>Lorem ipsum dolor sit.</p>
                    <p>Lorem ipsum dolor sit.</p>
                </div>
                <div class="modalFooter">
                    <button>OK</button>
                    <button>Cancel</button>
                </div>
            </div>
        </div>
    `)
    document.body.appendChild(modalDiv)
    return modalDiv
}

// const createdModalDiv = document.querySelector('.modalWrapper')

function modalWindow(options) {
    const CLOSE_ANIMATION_SPEED = 1000
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

button.addEventListener('click', function () {
    modalWindow().open()
})

// button.addEventListener('click', function () {
//     modalWindow().open()
// })

// to open modal window put into console
// modalWindow().open()
// to close modal window put into console
// modalWindow().close()
