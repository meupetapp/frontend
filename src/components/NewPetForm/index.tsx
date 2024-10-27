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
import { PageContainerComponent } from "../Cardscomponents";
import {
  FormContainerComponent,
  FormWrapperComponent,
} from "../FormComponents";

const PetMemberCard = "/icons/PetMemberCard.svg";
const Species = "/icons/Species.svg";
const Breed = "/icons/Breed.svg";
const Calendar = "/icons/Calendar.svg";
const Gender = "/icons/Gender.svg";
const Color = "/icons/Color.svg";
import { createPet } from "@/service/petService";
import { useRouter } from "next/router";
import axios from "axios";

const NewPetForm: React.FC = () => {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [breed, setBreed] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("");
  const [color, setColor] = useState("");
  const [adoption, setAdoption] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [toggle, setToggle] = useState<boolean>(false);
  const router = useRouter();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const uploadImageToS3 = async () => {
    if (!image) return null;

    // Obter URL pré-assinada
    const response = await axios.post(
      "http://localhost:3001/generate-upload-url",
      {
        filename: image.name,
      }
    );

    const { url } = response.data;

    // Fazer o upload da imagem para o S3
    await axios.put(url, image, {
      headers: {
        "Content-Type": image.type,
      },
    });

    // Retornar a URL pública ou da imagem no S3
    return url.split("?")[0]; // Remove query params da URL
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const imageUrl = await uploadImageToS3();
      console.log("@imageUrl", imageUrl);
      // Chame a função createPet com os dados do formulário
      const data = await createPet(
        name,
        species,
        breed,
        birth,
        gender,
        color,
        toggle,
        toggle ? adoption : undefined, // Só passa a data de adoção se o toggle estiver ativado
        imageUrl
      );

      alert("Pet criado com sucesso!");
      console.log("Resposta do backend:", data);
      router.push("/home");
    } catch (error: any) {
      alert(`Erro ao criar pet: ${error.message}`);
    }
  };

  return (
    <FormWrapperComponent>
      <FormContainerComponent onSubmit={handleSubmit}>
        <TitleWrapper>
          <H3>Novo Pet</H3>
        </TitleWrapper>
        <ImageContainer>
          <label htmlFor="image-upload">
            <ImageIcon
              style={{
                width: image ? "100%" : "50px",
                height: image ? "100%" : "50px",
              }}
              src={image ? URL.createObjectURL(image) : "/icons/AddImage.svg"}
              alt="AddImage"
            />
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
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
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "45px",
              }}
            >
              <Text>Adotado</Text>
              <div
                style={{
                  position: "absolute",
                  marginTop: "52px",
                  marginLeft: "22px",
                }}
              >
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
     
      <FormWrapperComponent>
        <FormContainerComponent onSubmit={handleSubmit}>
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
              position: "relative",
            }}
          >
            <div style={{ gap: "18px" }}>
              <div
                style={{ display: "flex", alignItems: "center", marginBottom: "45px" }}
              >
                <Text>Adotado</Text>
                <div style={{ position: "absolute", marginTop: "52px", marginLeft: "137px" }}>
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
      </FormContainerComponent>
    </FormWrapperComponent>
  );
};

export default NewPetForm;
