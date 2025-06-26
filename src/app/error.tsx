"use client";

import { useEffect } from "react";
import {
  ErrorContainer,
  ErrorContent,
  ErrorTitle,
  ErrorSubtitle,
  ErrorDescription,
  ButtonGroup,
  RetryButton,
  HomeButton,
  BackgroundDecoration,
  DecorativeCircle,
  Emoji,
} from "./error.styles";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <ErrorContainer>
      <BackgroundDecoration>
        <DecorativeCircle
          $size="20rem"
          $position="top: -10rem; left: -10rem;"
        />
        <DecorativeCircle
          $size="15rem"
          $position="bottom: -8rem; right: -8rem;"
        />
        <DecorativeCircle
          $size="12rem"
          $position="top: 50%; left: 50%; transform: translate(-50%, -50%);"
        />
      </BackgroundDecoration>

      <ErrorContent>
        <Emoji>😵‍💫</Emoji>
        <ErrorTitle>Oops!</ErrorTitle>
        <ErrorSubtitle>Something Went Wrong</ErrorSubtitle>
        <ErrorDescription>
          Looks like our cocktail mixer had a little hiccup! Don&apos;t worry,
          these things happen. Try refreshing the page or head back home for a
          fresh start.
        </ErrorDescription>
        <ButtonGroup>
          <RetryButton onClick={reset}>Try Again</RetryButton>
          <HomeButton href="/">Go Home</HomeButton>
        </ButtonGroup>
      </ErrorContent>
    </ErrorContainer>
  );
}
