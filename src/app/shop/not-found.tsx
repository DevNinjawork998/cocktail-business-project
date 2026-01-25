"use client";

import * as S from "./not-found.styles";

export default function NotFound() {
  return (
    <S.NotFoundContainer>
      <S.NotFoundContent>
        <S.NotFoundTitle>404</S.NotFoundTitle>
        <S.NotFoundSubtitle>Product Not Found</S.NotFoundSubtitle>
        <S.NotFoundDescription>
          Sorry, the product you&apos;re looking for doesn&apos;t exist. But
          don&apos;t worry, we have plenty of other amazing cocktail flavors
          waiting for you!
        </S.NotFoundDescription>
        <S.BackButton href="/shop">Explore Our Flavors</S.BackButton>
      </S.NotFoundContent>
    </S.NotFoundContainer>
  );
}
