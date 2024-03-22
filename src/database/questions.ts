import { QuestionCollection } from 'inquirer'

export const initialQuestion: QuestionCollection = [{
  type: 'list',
  name: 'initialQuestion',
  message: 'Escoge una opción',
  choices: ['Añadir información', 'Consultar información', 'Salir'],
}]

export const addInfoQuestion : QuestionCollection = [{
  type: 'list',
  name: 'addInfoQuestion',
  message: 'Escoge una opción',
  choices: ['Añadir cliente', 'Añadir proveedor', 'Añadir transacción', 'Atras']
}]

export const addPersonQuestion : QuestionCollection = [{
  type: 'input',
  name: 'name',
  message: 'Introduce el nombre'
  },
{
  type: 'number',
  name: 'phone',
  message: 'Introduce el teléfono(9 dígitos)',
},
{
  type: 'input',
  name: 'address',
  message: 'Introduce la dirección'
}]

export const addTransactionQuestion : QuestionCollection = [{
  type: 'list',
  name: 'addTransactionQuestion',
  message: 'Escoge una opción',
  choices: ['Venta a cliente', 'Devolución de cliente', 'Compra a proveedor', 'Devolución a proveedor', 'Atras']
},
{
  type: 'input',
  name: 'personName',
  message: 'Introduce el nombre del cliente/proveedor',
  when: (response) =>  response.addTransactionQuestion != 'Atras'
},
{
  type: 'list',
  name: 'furnitureName',
  message: 'Elige el nombre del mueble',
  choices: ["Mesa alta", "Mesa baja", "Silla alta", "Silla baja", "Puerta de madera", "Puerta de metal", "Nevera de acero", "Nevera de gas", "Armario de madera", "Armario de metal", "Atras"],
  when: (response) =>  response.addTransactionQuestion != 'Atras'
}, 
{
  type: 'number',
  name: 'quantity',
  message: 'Introduce la cantidad',
  when: (response) =>  response.addTransactionQuestion != 'Atras'
}]


export const consultInfoQuestion : QuestionCollection = [{
  type: 'list',
  name: 'consultInfoQuestion',
  message: 'Escoge una opción',
  choices: ['Consultar muebles', 'Buscar proveedores', 'Buscar clientes', 'Obtener informes', 'Atras']
}]

export const consultFurnitureInfoQuestion : QuestionCollection = [{
  type: 'list',
  name: 'consultFurnitureInfoQuestion',
  message: 'Escoge una opción',
  choices: ['Nombre', 'Tipo', 'Descripción', 'Atras']
}, 

{
  type: 'list',
  name: 'consultFurnitureType',
  message: 'Escoge el tipo de mueble',
  choices: [
    { name: 'Silla', value: 'Chair'},
    { name: 'Mesa', value: 'Table'},
    { name: 'Armario', value: 'Wardrobe'},
    { name: 'Nevera', value: 'Fridge'},
    { name: 'Puerta', value: 'Door'}
  ],
  when : (response) => response.consultFurnitureInfoQuestion === 'Tipo'
},

{
  type: 'input',
  name: 'consultFurnitureWord',
  message: 'Introduce la palabra',
  when : (response) => response.consultFurnitureInfoQuestion === 'Nombre' || response.consultFurnitureInfoQuestion === 'Descripción'
},

{ type: 'list',
  name: 'consultFurnitureSortQuestion',
  message: 'Escoge una opción',
  choices: [ 
    { name : 'No ordenar', value: 0 },
    { name : 'Ordenar alfabeticamente(ascendente)', value: 1 },
    { name : 'Ordenar alfabeticamente(descendente)', value: 2 },
    { name : 'Ordenar por precio(ascendente)', value: 3 },
    { name : 'Ordenar por precio(descendente)', value: 4 }
  ],
  when : (response) => response.consultFurnitureInfoQuestion != 'Atras'
}
]

export const searchPersonQuestion : QuestionCollection = [{
  type: 'list',
  name: 'searchPersonQuestion',
  message: 'Escoge una opción',
  choices: ['Nombre', 'Contacto', 'Dirección', 'Atras']
},
{
  type: 'input',
  name: 'searchPersonNameQuestion',
  message: 'Introduce el nombre',
  when : (response) => response.searchPersonQuestion === 'Nombre'
},
{
  type: 'number',
  name: 'searchPersonContactQuestion',
  message: 'Introduce el contacto',
  when : (response) => response.searchPersonQuestion === 'Contacto'
},
{
  type: 'input',
  name: 'searchPersonAddressQuestion',
  message: 'Introduce la dirección',
  when : (response) => response.searchPersonQuestion === 'Dirección'
}

]

export const reportInfoQuestion : QuestionCollection = [{
  type: 'list',
  name: 'reportInfoQuestion',
  message: 'Escoge una opción',
  choices: ['Stock Disponible', 'Muebles más vendidos', 'Facturación ventas a clientes', 'Facturación compras a proveedores', 'Histórico de ventas a clientes', 'Histórico de compras a proveedores', 'Atras']
},

{
  type: 'list',
  name: 'stockName',
  message: 'Elige el nombre del mueble',
  choices: ["Mesa alta", "Mesa baja", "Silla alta", "Silla baja", "Puerta de madera", "Puerta de metal", "Nevera de acero", "Nevera de gas", "Armario de madera", "Armario de metal"],
  when: (response) => response.reportInfoQuestion === 'Stock Disponible'
},

{
  type: 'list',
  name: 'reportParametersQuestion',
  message: 'Escoge una opción',
  choices: [
    { name : 'Global', value : 0 },
    { name : 'Dos fechas', value : 1}
  ],
  when: (response) => response.reportInfoQuestion != 'Atras' && response.reportInfoQuestion != 'Stock Disponible'
  },
  { type: 'input',
    name: 'firstDate',
    message: 'Introduce la primera fecha(YYYY-MM-DD)',
    when : (response) => response.reportParametersQuestion == 1
  },
  {
    type: 'input',
    name: 'secondDate',
    message: 'Introduce la segunda fecha(YYYY-MM-DD)',
    when : (response) => response.reportParametersQuestion == 1
}]
