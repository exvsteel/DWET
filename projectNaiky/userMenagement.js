// EXAMEN EJERCICIOS 2 3 y 4
/*At the beginning I'm gonna establish some consts we need to
locate DOM elements */
const addNewUser = document.getElementById('submit');
const campanyaFid = document.getElementById('campanya');
const borrarRecordatorios = document.getElementById('delete');
const display = document.getElementById('dataDisplay');

/* Event declared to get the information introduced inside the "New User" form
when "Add" button is clicked */
addNewUser.addEventListener('click', () =>{
    const userName = document.getElementById('userName').value;
    const apellidos = document.getElementById('apel').value;
    const fechaNac = document.getElementById('fechaNac').value;
    let newUser = new User(userName,apellidos,new Date(fechaNac));
    User.users.push(newUser);
});
// IMPORTATE, No he sabido quitar los años, si pones que has nacido en 2023 funciona, otherwise no.
campanyaFid.addEventListener('click', () =>{
    let actualDate = new Date();
    let arrayUsers = User.users;
    arrayUsers.forEach(user => {
        if ((actualDate-user.getFechaNac())<=(7*24*60*60*1000)) {
            let conf = confirm(`Administrador, la fecha del cumpleaños del usuario ${user.nombre+" "+user.apellidos} está próxima, recuerda realizar la campaña de fidelización.`);
            if (conf) {
                newUserDiv(user);
            } else {
                alert(`Pobrecito, ni queremos fidelizarlo.`)
            }
        }
    });
});
borrarRecordatorios.addEventListener('click', () => {
    let recordatorios = display.getElementsByTagName('div');
    for (let i = 0; i < recordatorios.length; i) {
        recordatorios[i].remove();     
    }
})