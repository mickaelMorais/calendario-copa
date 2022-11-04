function novoJogo(selecao1, hora, selecao2){
    return`
        <li>
            <img src="./assets/icon-${selecao1}.svg" alt="Bandeira do Brasil">
            <strong>${hora}</strong>
            <img src="./assets/icon-${selecao2}.svg" alt="Bandeira da Sérvia">
        </li>
`
}

function novoCarde(data, dia, jogos) {
    return `
    <div class="card">
        <h2>${data}<span>${dia}</span></h2>
        <ul>
            ${jogos}
        </ul>
    </div>
    `
}

document.querySelector("#cards").innerHTML=
    novoCarde('24/11', 'quinta',novoJogo('suica', '07:00', 'camaroes') + novoJogo('uruguai', '10:00', 'koreiaSul') + novoJogo('portugal', '13:00', 'gana') + novoJogo('brasil', '16:00', 'servia')) +
    novoCarde('28/11', 'segunda',novoJogo('camaroes', '07:00', 'servia') + novoJogo('koreiaSul', '07:00', 'gana') +  novoJogo('brasil', '13:00', 'suica') + novoJogo('portugal', '16:00', 'uruguai')) + 
    novoCarde('02/12', 'sexta',novoJogo('koreiaSul', '12:00', 'portugal') + novoJogo('gana', '12:00', 'uruguai') + novoJogo('servia', '07:00', 'suica') + novoJogo('camaroes', '16:00', 'brasil'))