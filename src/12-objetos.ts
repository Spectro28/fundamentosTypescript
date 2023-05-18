// OBJETOS COMO PARTE DE UNA FUNCION

function imprimirDatos(
  data: {
      userName: string,
      email: string,
  }): void
  {
      console.log(`Tu nombre de usuario es: ${data.userName}, y el Email registrado es: ${data.email}`);
  }
  imprimirDatos({userName:"Jose", email:"Josetorres@yavirac.edu.ec"})

// OBJETOS COMO TIPOS

type userData = {
  nombre: string,
  edad: number,
  email: string,
  telefono: string
};

let userList : userData[] = [];

userList.push({
  nombre: "JUAN",
  edad: 19,
  email: "juanmanito@yavirac.edu.ec",
  telefono: "0999999999"
});

userList.push({
  nombre: "JOSE",
  edad: 20,
  email: "josetorres@yavirac.edu.ec",
  telefono: "0999999999"
});

console.log(userList[1]);


