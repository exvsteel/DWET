/* This function is defined to change the class of an element in order to make a dropdown menu
that displays onclick */
const toggleDropdown = () =>{
    let dropwdown = document.querySelector('.dropdown');
    dropwdown.classList.toggle('active');
}

// EXAMEN EJERCICIO 1
let count = 1;
const firstCheck = () => {
    let confirmacion = confirm(`Usted lleva conectado 1 minuto, ¿quiere que le siga recordando su tiempo de conexión?`);
    if (confirmacion) {
        setInterval(timer(), count*60*1000);
        count++;
    }else{
        alert(`No se mostrará su tiempo de conexión.`);
    }
}
const timer = () => {
    alert(`Usted lleva conectado ${count} minutos.`);
    count++;
}
setTimeout(firstCheck(), 60000);
// FIN EXAMEN

// function setCookie(cname,cvalue,exdays) {
//     const d = new Date();
//     d.setTime(d.getTime() + (exdays*24*60*60*1000));
//     let expires = "expires=" + d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
//   }
  
//   function getCookie(cname) {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for(let i = 0; i < ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return "";
//   }
  
//   function checkCookie() {
//     let user = getCookie("username");
//     if (user != "") {
//       alert("Welcome again " + user);
//     } else {
//        user = prompt("Please enter your name:","");
//        if (user != "" && user != null) {
//          setCookie("username", user, 30);
//        }
//     }
//   }