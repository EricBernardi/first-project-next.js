import Link from "next/link";
import * as S from '../styles/404';

export default function NotFound() {
  const LinkCustom = S.TextContent.withComponent('a')
  return (
      <S.Container>
        <S.TextTitle>404</S.TextTitle>
        <S.TextContent>Página não encontrada</S.TextContent>
        <S.TextContent><S.Link href="/">Retornar a página inicial</S.Link></S.TextContent>
      </S.Container>
  );
}
