import React, { useState } from "react";
import {
  FormWrapper,
  FormContainer,
  H3,
  Text,
  PageContainer,
  ImageIcon,
  Icon,
  CreateButton,
  TitleWrapper,
  ImageContainer,
} from "./styles";
import InputWithIcon from "../InputWithIcon";
import Link from "next/link";
import { motion } from "framer-motion";

const PetMemberCard = "/icons/PetMemberCard.svg";
const Species = "/icons/Species.svg";
const Breed = "/icons/Breed.svg";
const Calendar = "/icons/Calendar.svg";
const Gender = "/icons/Gender.svg";
const Color = "/icons/Color.svg";

const NewPetForm: React.FC = () => {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [breed, setBreed] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("");
  const [color, setColor] = useState("");
  const [adoption, setAdoption] = useState("");
  const [toggle, setToggle] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, species, breed, birth, gender, color, adoption });
  };

  return (
    <PageContainer>
      <Icon
        src="/icons/Logo.svg"
        alt="Logo"
        style={{ height: "65px", width: "65px", top: "25px", right: "55px" }}
      />
      <Link href={"/home"}>
        <Icon
          style={{ left: "65px", top: "45px" }}
          src="/icons/Arrow.svg"
          alt="Logo"
        />
      </Link>
      <FormWrapper>
        <FormContainer onSubmit={handleSubmit}>
          <TitleWrapper>
            <H3>Novo Pet</H3>
          </TitleWrapper>
          <ImageContainer>
            <ImageIcon src="/icons/AddImage.svg" alt="AddImage" />
          </ImageContainer>
          <InputWithIcon
            type="text"
            placeholder="Nome"
            iconSrc={PetMemberCard}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputWithIcon
            type="text"
            placeholder="Espécie"
            iconSrc={Species}
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
          />
          <InputWithIcon
            type="text"
            placeholder="Raça"
            iconSrc={Breed}
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
          <InputWithIcon
            type="date"
            placeholder="Nascimento"
            iconSrc={Calendar}
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
          />
          <InputWithIcon
            type="text"
            placeholder="Sexo"
            iconSrc={Gender}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <InputWithIcon
            type="text"
            placeholder="Cor"
            iconSrc={Color}
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div style={{ gap: "18px" }}>
              <div
                style={{ display: "flex", alignItems: "center", marginBottom: "45px" }}
              >
                <Text>Adotado</Text>
                <div style={{ position: "absolute", marginTop: "52px", marginLeft: "22px" }}>
                  <div
                    onClick={() => setToggle(!toggle)}
                    style={{
                      width: "45px",
                      height: "22.11px",
                      backgroundColor: toggle ? "#556270" : "#C8C8A9",
                      borderRadius: "29px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: toggle ? "flex-end" : "flex-start",
                      padding: "2px",
                    }}
                  >
                    <motion.div
                      style={{
                        width: "16px",
                        height: "16px",
                        backgroundColor: toggle ? "#C8C8A9" : "#556270",
                        borderRadius: "50%",
                      }}
                      layout
                      transition={{
                        type: "spring",
                        stiffness: 700,
                        damping: 30,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {toggle && ( // Condicional para mostrar o InputWithIcon
              <div style={{ marginLeft: "25px", width: "203px" }}>
                <InputWithIcon
                  type="date"
                  placeholder="Adoção"
                  iconSrc={Calendar}
                  value={adoption}
                  onChange={(e) => setAdoption(e.target.value)}
                />
              </div>
            )}
          </div>

          <CreateButton type="submit">Criar</CreateButton>
        </FormContainer>
      </FormWrapper>
    </PageContainer>
  );
};

export default NewPetForm;

