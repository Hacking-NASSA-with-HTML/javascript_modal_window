
function _createModal(options) {
    const modal = document.createElement('div')
    modal.classList.add('modalWrapper')
    modal.insertAdjacentHTML('afterbegin', `
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
    document.body.appendChild(modal)
    return modal
}

$.modal = function (options) {
    const CLOSE_ANIMATION_SPEED = 2000
    const $modal = _createModal(options)
    let closing = false

    return {
        open() {
            !closing && $modal.classList.add('open')
        },
        close() {
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
                closing = false
            }, CLOSE_ANIMATION_SPEED)
        },
        destroy() { }
    }
}