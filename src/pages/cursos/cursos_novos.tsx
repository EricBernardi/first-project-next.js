export default function CursosNovos({setNomeCurso}: any) {
  return (
    <div>
      <label htmlFor="nameCourse">Digite o nome do curso: </label>
      <input
        type="text"
        id="nameCourse"
        name="nameCourse"
        placeholder="Qual o nome do curso?"
        onChange={(e: any) => setNomeCurso(e.target.value)}
      />
    </div>
  );
}
