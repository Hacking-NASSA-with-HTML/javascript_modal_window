const button2 = document.getElementById('button2')
button2.addEventListener('click', () => handleOpenModal())


function renderModal() {
    const renderedDivModal2 =
        `
        <div class='modal2'>
            <div class='modal-content'>
                <div class='close-modal2'>
                    X
                </div>
                <div class='title'>Name</div>
                <div class='title'>Name</div>
                <div class='title'>Name</div>
            </div>
        </div>
    `
    return renderedDivModal2
}
root.insertAdjacentHTML("afterend", renderModal())


function handleOpenModal() {
    let addToggleModalWindow = document.querySelector('.modal2')
    addToggleModalWindow.classList.add('openModalWin')

    const closeModalButton = document.querySelector('.close-modal2')
    closeModalButton.addEventListener('click', () => {
        addToggleModalWindow.classList.remove('openModalWin')
        addToggleModalWindow.classList.add('hideModalWin')
        setTimeout(() => {
            addToggleModalWindow.classList.remove('hideModalWin')
        }, 300)
    })
}
