let backgroundMusicDiv = document.querySelector('.backgroundMusicDiv')

let JoyfulMusic = document.querySelector('.Joyful')
let MysticalMusic = document.querySelector('.Mystical')

let JoyfulMusicSound = new Audio('./What-Do-We-Do.mp3')
let MysticalMusicSound = new Audio('./My-Jolly-Sailor-Bold.mp3')

let joyfulBackgroundMusic = true
let mysticalBackgroundMusic = true


JoyfulMusic.addEventListener('click', () => {
    if (joyfulBackgroundMusic) {
        backgroundMusicDiv.innerText = 'Joyful Music is playing'
        JoyfulMusicSound.volume = 0.25
        JoyfulMusicSound.play()
        joyfulBackgroundMusic = false
        modal.close()
    } else {
        backgroundMusicDiv.innerText = 'Music is paused'
        JoyfulMusicSound.pause()
        joyfulBackgroundMusic = true
        modal.close()
    }
})

MysticalMusic.addEventListener('click', () => {
    if (mysticalBackgroundMusic) {
        backgroundMusicDiv.innerText = 'Mystical Music is playing'
        MysticalMusicSound.volume = 0.25
        MysticalMusicSound.play()
        mysticalBackgroundMusic = false
        modal.close()
    } else {
        backgroundMusicDiv.innerText = 'Music is paused'
        MysticalMusicSound.pause()
        mysticalBackgroundMusic = true
        modal.close()
    }
})

JoyfulMusicSound.addEventListener('ended', () => {
    backgroundMusicDiv.innerText = 'No Background Music'
    joyfulBackgroundMusic = true
})

MysticalMusicSound.addEventListener('ended', () => {
    backgroundMusicDiv.innerText = 'No Background Music'
    mysticalBackgroundMusic = true
})