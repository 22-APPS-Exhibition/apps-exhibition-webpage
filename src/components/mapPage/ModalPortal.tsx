import React, { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

interface iModalProps {
  children: ReactNode;
  closePortal: () => void;
}

export default function ModalPortal({ children, closePortal }: iModalProps) {
  const ref = useRef<HTMLElement>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (document) {
      const dom: HTMLElement = document.getElementById("root-modal")!;
      ref.current = dom; // ref에 dom 값 전달
    }
  }, []);

  if (ref.current && mounted) {
    // mounted 됬고 dom이 존재하는 경우 모달 랜더링 진행
    return createPortal(children, ref.current);
  }

  return null;
}
