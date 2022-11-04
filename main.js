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
    novoCarde('24/11', 'quinta', novoJogo('brasil', '16:00', 'servia'))+
    novoCarde('28/11', 'segunda', novoJogo('brasil', '13:00', 'suica'))+
    novoCarde('02/12', 'sexta', novoJogo('camaroes', '16:00', 'brasil'))