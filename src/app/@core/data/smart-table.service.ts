import { Injectable } from '@angular/core';

@Injectable()
export class SmartTableService {

  data = [
  {id:1, firstName: 'JUAN', lastName: 'González', location: '19.336050, -98.584780', address: '22 de Mayo, Cuapantitla, 74100 Santa Rita Tlahuapan, Pue., Mexico', transport: 'Bus', capacity: 2, email: 'triajako@gmail.com', rol:'Agricultor'},
  {id:2, firstName: 'JOSÉ LUIS', lastName: 'Rodríguez', location: '19.818521, -97.810298', address: 'Calle 6 Nte., Centro, Cd de Tetela de Ocampo, Puebla, M', transport: 'Minibus', capacity: 1, email: 'applesAgronomy@gmail.com', rol:'Agricultor'},
  {id:3, firstName: 'JOSÉ', lastName: 'Gómez', location: '19.817517, -97.808548', address: 'Tetela de Ocampo', transport: 'TrailerBus', capacity: 5, email: 'agro1@hotmail.com', rol:'Transportista'},
  {id:4, firstName: 'MARÍA GUADALUPE', lastName: 'Huertas', location: '19.336050, -98.584780', address: '22 de Mayo, Cuapantitla, 74100 Santa Rita Tlahuapan, Pue., Mexico', transport: 'Bus', capacity: 2, email: 'agro2@hotmail.com', rol:'Distribuidor'},
  {id:5, firstName: 'FRANCISCO', lastName: 'López', location: '19.818521, -97.810298', address: 'Calle 6 Nte., Centro, Cd de Tetela de Ocampo, Puebla, M', transport: 'Minibus', capacity: 1, email: 'triajako@gmail.com', rol:'Consumidor'},
  {id:6, firstName: 'GUADALUPE', lastName: 'Díaz', location: '19.817517, -97.808548', address: 'Tetela de Ocampo', transport: 'TrailerBus', capacity: 5, email: 'applesAgronomy@gmail.com', rol:'Transportista'},
  {id:7, firstName: 'MARÍA', lastName: 'Martínez', location: '19.336050, -98.584780', address: '22 de Mayo, Cuapantitla, 74100 Santa Rita Tlahuapan, Pue., Mexico', transport: 'Bus', capacity: 2, email: 'agro1@hotmail.com', rol:'Transportista'},
  {id:8, firstName: 'JUANA', lastName: 'Pérez', location: '19.818521, -97.810298', address: 'Calle 6 Nte., Centro, Cd de Tetela de Ocampo, Puebla, M', transport: 'Minibus', capacity: 1, email: 'agro2@hotmail.com', rol:'Agricultor'},
  {id:9, firstName: 'ANTONIO', lastName: 'García', location: '19.817517, -97.808548', address: 'Tetela de Ocampo', transport: 'TrailerBus', capacity: 5, email: 'triajako@gmail.com', rol:'Distribuidor'},
  {id:10, firstName: 'JESÚS', lastName: 'Sánchez', location: '19.336050, -98.584780', address: '22 de Mayo, Cuapantitla, 74100 Santa Rita Tlahuapan, Pue., Mexico', transport: 'Bus', capacity: 2, email: 'applesAgronomy@gmail.com', rol:'Agricultor'},
  {id:11, firstName: 'MIGUEL ÁNGEL', lastName: 'Romero', location: '19.818521, -97.810298', address: 'Calle 6 Nte., Centro, Cd de Tetela de Ocampo, Puebla, M', transport: 'Minibus', capacity: 1, email: 'agro1@hotmail.com', rol:'Agricultor'},
  {id:12, firstName: 'PEDRO', lastName: 'Sosa', location: '19.817517, -97.808548', address: 'Tetela de Ocampo', transport: 'TrailerBus', capacity: 5, email: 'agro2@hotmail.com', rol:'Transportista'},
  {id:13, firstName: 'ALEJANDRO', lastName: 'Álvarez', location: '19.336050, -98.584780', address: '22 de Mayo, Cuapantitla, 74100 Santa Rita Tlahuapan, Pue., Mexico', transport: 'Bus', capacity: 2, email: 'triajako@gmail.com', rol:'Distribuidor'},
  {id:14, firstName: 'MANUEL', lastName: 'Torres', location: '19.818521, -97.810298', address: 'Calle 6 Nte., Centro, Cd de Tetela de Ocampo, Puebla, M', transport: 'Minibus', capacity: 1, email: 'applesAgronomy@gmail.com', rol:'Consumidor'},
  {id:15, firstName: 'MARGARITA', lastName: 'Ruiz', location: '19.817517, -97.808548', address: 'Tetela de Ocampo', transport: 'TrailerBus', capacity: 5, email: 'agro1@hotmail.com', rol:'Transportista'},
  {id:16, firstName: 'MARÍA DEL CARMEN', lastName: 'Ramírez', location: '19.336050, -98.584780', address: '22 de Mayo, Cuapantitla, 74100 Santa Rita Tlahuapan, Pue., Mexico', transport: 'Bus', capacity: 2, email: 'agro2@hotmail.com', rol:'Transportista'},
  {id:17, firstName: 'JUAN CARLOS', lastName: 'Flores', location: '19.818521, -97.810298', address: 'Calle 6 Nte., Centro, Cd de Tetela de Ocampo, Puebla, M', transport: 'Minibus', capacity: 1, email: 'triajako@gmail.com', rol:'Agricultor'},
  {id:18, firstName: 'ROBERTO', lastName: 'Acosta', location: '19.817517, -97.808548', address: 'Tetela de Ocampo', transport: 'TrailerBus', capacity: 5, email: 'applesAgronomy@gmail.com', rol:'Distribuidor'},
  {id:19, firstName: 'FERNANDO', lastName: 'Benítez', location: '19.336050, -98.584780', address: '22 de Mayo, Cuapantitla, 74100 Santa Rita Tlahuapan, Pue., Mexico', transport: 'Bus', capacity: 2, email: 'agro1@hotmail.com', rol:'Agricultor'},
  {id:20, firstName: 'DANIEL', lastName: 'Medina', location: '19.818521, -97.810298', address: 'Calle 6 Nte., Centro, Cd de Tetela de Ocampo, Puebla, M', transport: 'Minibus', capacity: 1, email: 'agro2@hotmail.com', rol:'Agricultor'},
  {id:21, firstName: 'CARLOS', lastName: 'Suárez', location: '19.817517, -97.808548', address: 'Tetela de Ocampo', transport: 'TrailerBus', capacity: 5, email: 'triajako@gmail.com', rol:'Transportista'},
  {id:22, firstName: 'JORGE', lastName: 'Herrera', location: '19.336050, -98.584780', address: '22 de Mayo, Cuapantitla, 74100 Santa Rita Tlahuapan, Pue., Mexico', transport: 'Bus', capacity: 2, email: 'applesAgronomy@gmail.com', rol:'Distribuidor'},
  {id:23, firstName: 'RICARDO', lastName: 'Aguirre', location: '19.818521, -97.810298', address: 'Calle 6 Nte., Centro, Cd de Tetela de Ocampo, Puebla, M', transport: 'Minibus', capacity: 1, email: 'agro1@hotmail.com', rol:'Consumidor'},
  {id:24, firstName: 'MIGUEL', lastName: 'Pereyra', location: '19.817517, -97.808548', address: 'Tetela de Ocampo', transport: 'TrailerBus', capacity: 5, email: 'agro2@hotmail.com', rol:'Transportista'},
  {id:25, firstName: 'EDUARDO', lastName: 'Gutiérrez', location: '19.336050, -98.584780', address: '22 de Mayo, Cuapantitla, 74100 Santa Rita Tlahuapan, Pue., Mexico', transport: 'Bus', capacity: 2, email: 'triajako@gmail.com', rol:'Transportista'},
  {id:26, firstName: 'JAVIER', lastName: 'Giménez/Jiménez', location: '19.818521, -97.810298', address: 'Calle 6 Nte., Centro, Cd de Tetela de Ocampo, Puebla, M', transport: 'Minibus', capacity: 1, email: 'applesAgronomy@gmail.com', rol:'Agricultor'},
  {id:27, firstName: 'RAFAEL', lastName: 'Molina', location: '19.817517, -97.808548', address: 'Tetela de Ocampo', transport: 'TrailerBus', capacity: 5, email: 'agro1@hotmail.com', rol:'Distribuidor'},
  {id:28, firstName: 'MARTÍN', lastName: 'Silva', location: '19.336050, -98.584780', address: '22 de Mayo, Cuapantitla, 74100 Santa Rita Tlahuapan, Pue., Mexico', transport: 'Bus', capacity: 2, email: 'agro2@hotmail.com', rol:'Agricultor'},
  {id:29, firstName: 'RAÚL', lastName: 'Castro', location: '19.818521, -97.810298', address: 'Calle 6 Nte., Centro, Cd de Tetela de Ocampo, Puebla, M', transport: 'Minibus', capacity: 1, email: 'triajako@gmail.com', rol:'Agricultor'},
  {id:30, firstName: 'DAVID', lastName: 'Rojas', location: '19.817517, -97.808548', address: 'Tetela de Ocampo', transport: 'TrailerBus', capacity: 5, email: 'applesAgronomy@gmail.com', rol:'Transportista'},
  {id:31, firstName: 'JOSEFINA', lastName: 'Ortiz', location: '19.336050, -98.584780', address: '22 de Mayo, Cuapantitla, 74100 Santa Rita Tlahuapan, Pue., Mexico', transport: 'Bus', capacity: 2, email: 'agro1@hotmail.com', rol:'Distribuidor'},
  {id:32, firstName: 'JOSÉ ANTONIO', lastName: 'Núñez', location: '19.818521, -97.810298', address: 'Calle 6 Nte., Centro, Cd de Tetela de Ocampo, Puebla, M', transport: 'Minibus', capacity: 1, email: 'agro2@hotmail.com', rol:'Consumidor'},
  {id:33, firstName: 'ARTURO', lastName: 'Luna', location: '19.817517, -97.808548', address: 'Tetela de Ocampo', transport: 'TrailerBus', capacity: 5, email: 'triajako@gmail.com', rol:'Transportista'},
  {id:34, firstName: 'MARCO ANTONIO', lastName: 'Juárez', location: '19.336050, -98.584780', address: '22 de Mayo, Cuapantitla, 74100 Santa Rita Tlahuapan, Pue., Mexico', transport: 'Bus', capacity: 2, email: 'applesAgronomy@gmail.com', rol:'Transportista'},
  {id:35, firstName: 'JOSÉ MANUEL', lastName: 'Cabrera', location: '19.818521, -97.810298', address: 'Calle 6 Nte., Centro, Cd de Tetela de Ocampo, Puebla, M', transport: 'Minibus', capacity: 1, email: 'agro1@hotmail.com', rol:'Agricultor'},
  {id:36, firstName: 'FRANCISCO JAVIER', lastName: 'Ríos', location: '19.817517, -97.808548', address: 'Tetela de Ocampo', transport: 'TrailerBus', capacity: 5, email: 'agro2@hotmail.com', rol:'Distribuidor'},
  {id:37, firstName: 'ENRIQUE', lastName: 'Ferreyra', location: '19.336050, -98.584780', address: '22 de Mayo, Cuapantitla, 74100 Santa Rita Tlahuapan, Pue., Mexico', transport: 'Bus', capacity: 2, email: 'triajako@gmail.com', rol:'Agricultor'},
  {id:38, firstName: 'VERÓNICA', lastName: 'Godoy', location: '19.818521, -97.810298', address: 'Calle 6 Nte., Centro, Cd de Tetela de Ocampo, Puebla, M', transport: 'Minibus', capacity: 1, email: 'applesAgronomy@gmail.com', rol:'Agricultor'},
  {id:39, firstName: 'GERARDO', lastName: 'Morales', location: '19.817517, -97.808548', address: 'Tetela de Ocampo', transport: 'TrailerBus', capacity: 5, email: 'agro1@hotmail.com', rol:'Transportista'},
  {id:40, firstName: 'MARÍA ELENA', lastName: 'Domínguez', location: '19.336050, -98.584780', address: '22 de Mayo, Cuapantitla, 74100 Santa Rita Tlahuapan, Pue., Mexico', transport: 'Bus', capacity: 2, email: 'agro2@hotmail.com', rol:'Distribuidor'},
  {id:41, firstName: 'LETICIA', lastName: 'Moreno', location: '19.818521, -97.810298', address: 'Calle 6 Nte., Centro, Cd de Tetela de Ocampo, Puebla, M', transport: 'Minibus', capacity: 1, email: 'triajako@gmail.com', rol:'Consumidor'},
  {id:42, firstName: 'ROSA', lastName: 'Peralta', location: '19.817517, -97.808548', address: 'Tetela de Ocampo', transport: 'TrailerBus', capacity: 5, email: 'applesAgronomy@gmail.com', rol:'Transportista'},
  {id:43, firstName: 'MARIO', lastName: 'Vega', location: '19.336050, -98.584780', address: '22 de Mayo, Cuapantitla, 74100 Santa Rita Tlahuapan, Pue., Mexico', transport: 'Bus', capacity: 2, email: 'agro1@hotmail.com', rol:'Transportista'},
  {id:44, firstName: 'FRANCISCA', lastName: 'Carrizo', location: '19.818521, -97.810298', address: 'Calle 6 Nte., Centro, Cd de Tetela de Ocampo, Puebla, M', transport: 'Minibus', capacity: 1, email: 'agro2@hotmail.com', rol:'Agricultor'},
  {id:45, firstName: 'ALFREDO', lastName: 'Quiroga', location: '19.817517, -97.808548', address: 'Tetela de Ocampo', transport: 'TrailerBus', capacity: 5, email: 'triajako@gmail.com', rol:'Distribuidor'},
  {id:46, firstName: 'TERESA', lastName: 'Castillo', location: '19.336050, -98.584780', address: '22 de Mayo, Cuapantitla, 74100 Santa Rita Tlahuapan, Pue., Mexico', transport: 'Bus', capacity: 2, email: 'applesAgronomy@gmail.com', rol:'Agricultor'},
  {id:47, firstName: 'ALICIA', lastName: 'Ledesma', location: '19.818521, -97.810298', address: 'Calle 6 Nte., Centro, Cd de Tetela de Ocampo, Puebla, M', transport: 'Minibus', capacity: 1, email: 'agro1@hotmail.com', rol:'Agricultor'},
  {id:48, firstName: 'MARÍA FERNANDA', lastName: 'Muñoz', location: '19.817517, -97.808548', address: 'Tetela de Ocampo', transport: 'TrailerBus', capacity: 5, email: 'agro2@hotmail.com', rol:'Transportista'},
  {id:49, firstName: 'SERGIO', lastName: 'Ojeda', location: '19.336050, -98.584780', address: '22 de Mayo, Cuapantitla, 74100 Santa Rita Tlahuapan, Pue., Mexico', transport: 'Bus', capacity: 2, email: 'triajako@gmail.com', rol:'Distribuidor'},
  {id:50, firstName: 'ALBERTO', lastName: 'Ponce', location: '19.818521, -97.810298', address: 'Calle 6 Nte., Centro, Cd de Tetela de Ocampo, Puebla, M', transport: 'Minibus', capacity: 1, email: 'applesAgronomy@gmail.com', rol:'Consumidor'},
  {id:51, firstName: 'LUIS', lastName: 'Vera', location: '19.817517, -97.808548', address: 'Tetela de Ocampo', transport: 'TrailerBus', capacity: 5, email: 'agro1@hotmail.com', rol:'Transportista'},
  {id:52, firstName: 'ARMANDO', lastName: 'Vázquez', location: '19.336050, -98.584780', address: '22 de Mayo, Cuapantitla, 74100 Santa Rita Tlahuapan, Pue., Mexico', transport: 'Bus', capacity: 2, email: 'agro2@hotmail.com', rol:'Transportista'},
  {id:53, firstName: 'ALEJANDRA', lastName: 'Villalba', location: '19.818521, -97.810298', address: 'Calle 6 Nte., Centro, Cd de Tetela de Ocampo, Puebla, M', transport: 'Minibus', capacity: 1, email: 'triajako@gmail.com', rol:'Agricultor'},
  {id:54, firstName: 'MARTHA', lastName: 'Cardozo', location: '19.817517, -97.808548', address: 'Tetela de Ocampo', transport: 'TrailerBus', capacity: 5, email: 'applesAgronomy@gmail.com', rol:'Distribuidor'},
  {id:55, firstName: 'SANTIAGO', lastName: 'Navarro', location: '19.336050, -98.584780', address: '22 de Mayo, Cuapantitla, 74100 Santa Rita Tlahuapan, Pue., Mexico', transport: 'Bus', capacity: 2, email: 'agro1@hotmail.com', rol:'Agricultor'},
  {id:56, firstName: 'YOLANDA', lastName: 'Ramos', location: '19.818521, -97.810298', address: 'Calle 6 Nte., Centro, Cd de Tetela de Ocampo, Puebla, M', transport: 'Minibus', capacity: 1, email: 'agro2@hotmail.com', rol:'Agricultor'},
  {id:57, firstName: 'PATRICIA', lastName: 'Arias', location: '19.817517, -97.808548', address: 'Tetela de Ocampo', transport: 'TrailerBus', capacity: 5, email: 'triajako@gmail.com', rol:'Transportista'},
  {id:58, firstName: 'MARÍA DE LOS ÁNGELES', lastName: 'Coronel', location: '19.336050, -98.584780', address: '22 de Mayo, Cuapantitla, 74100 Santa Rita Tlahuapan, Pue., Mexico', transport: 'Bus', capacity: 2, email: 'applesAgronomy@gmail.com', rol:'Distribuidor'},
  {id:59, firstName: 'JUAN MANUEL', lastName: 'Córdoba', location: '19.818521, -97.810298', address: 'Calle 6 Nte., Centro, Cd de Tetela de Ocampo, Puebla, M', transport: 'Minibus', capacity: 1, email: 'agro1@hotmail.com', rol:'Consumidor'},
  {id:60, firstName: 'ROSA MARÍA', lastName: 'Figueroa', location: '19.817517, -97.808548', address: 'Tetela de Ocampo', transport: 'TrailerBus', capacity: 5, email: 'agro2@hotmail.com', rol:'Transportista'},
  {id:61, firstName: 'JUAN', lastName: 'Correa', location: '19.336050, -98.584780', address: '22 de Mayo, Cuapantitla, 74100 Santa Rita Tlahuapan, Pue., Mexico', transport: 'Bus', capacity: 2, email: 'triajako@gmail.com', rol:'Transportista'}
];

  getData() {
    return this.data;
  }
}
