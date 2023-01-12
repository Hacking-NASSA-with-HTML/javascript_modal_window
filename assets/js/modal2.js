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

function handleOpenModal() {
    root.insertAdjacentHTML("afterend", renderModal())

    const closeModalButton = document.querySelector('.close-modal2')
    closeModalButton.addEventListener('click', () => {
        const modal2 = document.querySelector('.modal2')
        modal2.remove()
        // console.log('Button  is clicked')
        // }, { once: true })
    })  // you can add  }, { once: true }) to destroy module at all
}
