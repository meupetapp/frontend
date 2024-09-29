import { RedirectToCadastro } from "@/components/loginForm/styles";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <RedirectToCadastro onClick={() => router.push('/newActivity')}>
          Criar atividade
        </RedirectToCadastro>
    </div>
  )
}