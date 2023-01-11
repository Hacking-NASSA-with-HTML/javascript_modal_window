const root = document.getElementById('root')

function mainPageContent() {
    const renderMainPageContent =
        `
        <div class="container">
            <h1>JavaScript Practice</h1>
            <h2>Modal Window</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quas quos et veritatis aliquid nostrum reprehenderit!
            </p>
        </div>
        <div class="buttonWrapperDiv">
            <!-- <input type="submit" id="button" value="Click To Open Modal Window To Choose Music"> -->
            <button type="button" id="button">Click To Open Modal Window To Choose Music</button>
        </div>
        <div class="backgroundMusicDiv">No Background Music</div>
    `
    return renderMainPageContent
}

root.insertAdjacentHTML("afterend", mainPageContent())
