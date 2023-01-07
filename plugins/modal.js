function createModal() {
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

function modalWindow() {
    const CLOSE_ANIMATION_SPEED = 2000
    // const $modal = createModal()
    let closing = false

    return {
        open() {
            !closing && createModal().classList.add('open')
        },
        close() {
            closing = true
            createModal().classList.remove('open')
            createModal().classList.add('hide')
            setTimeout(() => {
                createModal().classList.remove('hide')
                closing = false
            }, CLOSE_ANIMATION_SPEED)
        },
        destroy() { }
    }
}


// to open modal window put into console
// modalWindow().open()
