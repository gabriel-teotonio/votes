
const  candidatesEl = document.querySelector('.candidate-list')
const btnVoteEl = document.querySelector('.btn-vote')

const renderCandidates = () => {
    candidates.forEach(candidate => {
        candidatesEl.innerHTML += `
        <div class="candidate">
        <img src="${candidate.imgUrl}" alt="${candidate.imgUrl}">
        <div>
        <h2>${candidate.name}</h2>
        <input id="${candidate.id}" data-votes="${candidate.votes}" class="btn-vote" 
           name="vote" type="radio" onClick="selectVote(${candidate.id})">
           <label for="${candidate.id}" class="label-vote">Selecionar</label>
       </div>
        </div>
        `
    })
}



let candidateSelected = '';

const selectVote = (id) => {
    candidateSelected = id.id
    localStorage.setItem("VOTE", JSON.stringify(candidateSelected))
    playAudio(candidateSelected)
}

const playAudio = (id) => {
    const randomNumber = Math.floor(Math.random() * 4)
    const audio = document.querySelector('audio')

    const audioBolsonaro = [
        'audios/bolsonaro-um-forte-abraco.mp3',
        'audios/souangolano.mp3',
        'audios/vagabundo-bolsonaro.mp3',
        'audios/psol.mp3'
    ]
    const audioLula = [
        'audios/_chupa-que-a-cana-doce__-recado-de-lula.mp3',
        'audios/argumentolula.mp3',
        'audios/cade-o-ze-gotinha.mp3',
        'audios/nao-seja-leviano-nao-seja-leviano-d.mp3'
    ]
    const audioCiro = 'audios/ai-dentu.mp3';
    
    let srcUrl = '';
    srcUrl = id === 'candidateA' ? srcUrl = audioBolsonaro[randomNumber] : srcUrl;
    srcUrl = id === 'candidateB' ? srcUrl = audioCiro : srcUrl;
    srcUrl = id === 'candidateC' ? srcUrl = audioLula[randomNumber] : srcUrl;

    audio.src = srcUrl;
    audio.play()
}

const getVoteInLocalstorage = () => {
    const dbVoted = JSON.parse(localStorage.getItem("VOTE")) || [];
    const votedEl = document.querySelector('#'+dbVoted)
    votedEl.checked = true
}

renderCandidates()
getVoteInLocalstorage()