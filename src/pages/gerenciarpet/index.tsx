import React from "react";
import GerenciarPet from "@/components/GerenciarPet"; // Importa o componente
import { PageContainerComponent } from "@/components/FormComponents";
import Link from "next/link";
import IconComponent from "@/components/IconComponent";

const GerenciarPetPage: React.FC = () => {
  // Renomeado para evitar conflito de nomes
  return (
    <PageContainerComponent>
      <IconComponent
        src="/icons/Logo.svg"
        alt="Logo"
        width="65px"
        height="65px"
        top="15px"
      />
      <Link href={"/home"}>
        <IconComponent left="15px" src="/icons/Arrow.svg" alt="Logo" />
      </Link>
      <GerenciarPet />
    </PageContainerComponent>
  );
};

export default GerenciarPetPage;
