import React from "react";
import GerenciarPet from "@/components/GerenciarPet"; // Importa o componente
import { PageContainerComponent } from "@/components/FormComponents";
import Link from "next/link";
import IconComponent from "@/components/IconComponent";
import { useRouter, } from 'next/router';

const GerenciarPetPage: React.FC = () => {
  const router = useRouter();
  console.log("query",router.query);
  const { petId } = router.query; // Receber o petId da query
  const handleBackClick = () => {
    console.log("Back button clicked");
    console.log("petId:", petId); // Verifique se petId está definido
    if (petId) {
      router.push({
        pathname: '/editpet',
        query: { petId },
      });
    } else {
      console.error("petId is undefined");
    }
  };
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

        <IconComponent left="15px" src="/icons/Arrow.svg" alt="Logo"  onClick={handleBackClick} />

      <GerenciarPet />
    </PageContainerComponent>
  );
};

export default GerenciarPetPage;
