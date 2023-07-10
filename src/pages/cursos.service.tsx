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
    console.log(JSON.stringify({data: value}))
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({data: value}),
    })
    if(response.ok) {
      const data = await response.json();
      return true;
    } else {
      console.error('Erro na requisição:', response.status, response.statusText);
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default function Service(){
  return (<></>)
}