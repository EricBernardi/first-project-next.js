const URL = 'http://localhost:3000/cursos';

export async function GetCursos() {
  try {
    const res = await fetch(URL);
    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function SaveCurso(value: any){
  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({data: value}),
    })

    console.log(response)

    if(!response.ok) {
      throw new Error('Failed to fetch data of courses')
    }

    return response;

  } catch (err) {
    console.log(err);
    return null;
  }
}

export default function Service(){
  return (<></>)
}