

export async function getStaticProps() {
    const response = await fetch('https://viacep.com.br/ws/01001000/json/');
    const data = await response.json();
    return {
      props: {
        data,
      },
    };
  }


export default function Todos( { data }: any){

    return (
        <>
          <h1 className="text-black text-center font-bold text-2xl">Tarefas para fazer:</h1>
           <ul className="flex flex-col items-center justify-center"  >
            {/* {todos?.map((dados) => (
                <li className="text-black border-b w-80 text-center p-2">{dados.title}</li>
            ))} */}
              <li className="text-black border-b w-80 text-center p-2">{data.localidade}</li>
           </ul>
        </>
    )
}