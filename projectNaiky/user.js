/* Definition of class "User" */
class User {
    static users = [];
    constructor(nombre, apellidos, fechaNac){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechaNac = fechaNac;
        // User.users.push();
    }
    /* Every get & set method */
    getNombre(){
        return this.nombre;
    }
    setNombre(newName){
        this.nombre = newName;
    }
    getApellidos(){
        return this.apellidos;
    }
    setApellidos(newApel){
        this.apellidos = newApel;
    }
    getFechaNac(){
        return this.fechaNac;
    }
}