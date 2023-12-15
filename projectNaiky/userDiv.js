const newUserDiv = (user) => {
    const dataDisplay = document.getElementById('dataDisplay');
    let nombre = user.getNombre();
    let apellidos = user.getApellidos();

    /*Create main div element*/
    const userDiv = document.createElement('div');
    userDiv.className = 'userDiv';

    /*First div that will contain datum */
    const dataDiv = document.createElement('div');
    dataDiv.className = 'userDatum';
    userDiv.appendChild(dataDiv);

    /*Create h3 element which takes name parameter as content*/
    const alertMessage = document.createElement('h3');
    alertMessage.textContent = `Administrador, la fecha del cumpleaños del usuario ${nombre+" "+apellidos} está próxima, recuerda realizar la campaña de fidelización.`;
    dataDiv.appendChild(alertMessage);

    /* And finally, introduce it into the screen */
    dataDisplay.appendChild(userDiv);
}