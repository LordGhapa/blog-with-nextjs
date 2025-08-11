// app/icon.tsx

import { ImageResponse } from "next/og";

// Configuração da imagem
export const runtime = "edge";
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Geração da Imagem
export default function Icon() {
  return new ImageResponse(
    (
      // Elemento JSX para a imagem
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          // Convertendo o gradiente do Tailwind para CSS
          backgroundImage: "linear-gradient(to bottom right, #fb923c, #ea580c)",
        }}
      >
        {/*
          O componente BookOpen não pode ser usado diretamente.
          Em vez disso, colamos o SVG do ícone diretamente aqui.
          Este SVG corresponde ao ícone "BookOpen" da biblioteca Lucide.
        */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18" // Tamanho do ícone dentro do círculo de 32px
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white" // Cor do ícone
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      </div>
    ),
    // Opções do ImageResponse
    {
      ...size,
    },
  );
}
