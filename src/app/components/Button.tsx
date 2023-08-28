"use client";

import * as React from "react";
import styled from "@emotion/styled";

import ArrowDown from "@/app/assets/svg/arrow-down.svg";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  text?: string;
}

export default function Button(props: Props) {
  const { icon, text, children, ...rest } = props;

  return (
    <ButtonEl {...rest}>
      <span className="text-dark text-inherit font-[900]">
        {text ?? children}
      </span>

      {icon ?? <ArrowDown />}
    </ButtonEl>
  );
}

const ButtonEl = styled.button`
  display: flex;
  gap: 16px;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  border: none;
  background-color: #ffb612;
`;
