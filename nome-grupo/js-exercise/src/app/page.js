import Image from 'next/image'

export default function Home() {
 
  const lista = [{
    nome:"Jean",
    idade: 25,
    cor:"preto"
  },
  {
    nome:"Carlos",
    idade: 10,
    cor:"verde"
  },
  {
    nome:"Jose",
    idade: 55 ,
    cor:"roxo"
  },
  {
    nome:"paula",
    idade: 14,
    cor:"branco"
  },
];
    
  return (
    <main><h1>Lista Objetos</h1>

   <ul>
    {

    lista.map(
    (item)=> <li> {item.nome} - {item.idade}</li>       

    )
    }
 
   </ul>

    </main>
  )
  }

