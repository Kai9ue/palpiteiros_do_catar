import { Icon, Input } from "../../components";

export const Cadastro = () => {
  return (
    <div className="">
      <header className=" border-b border-red-300">
        <div className="container flex justify-center max-w-xl">
          <img src="/images/logo-fundo-branco.svg" className="w-32 md:w-40" />
        </div>
      </header>

      <main className="container max-w-xl p-4">
        <div className="p-4 flex space-x-4 items-center">
          <a href="/">
            <Icon name="back" className="h-6" />
          </a>

          <h2 className="text-xl font-bold">Crie a sua conta</h2>
        </div>

        <form action="" className="p-4 space-y-6">
          
          <Input
            type="text"
            label="Digite o seu nome completo"
            placeholder="'Ex: Kaique Carvalho...'"
            name="nome"
          />

          <Input
            type="text"
            label="Digite um nome de usuário"
            placeholder="'Ex: Kaique123'"
            name="user"
          />

          <Input
            type="email"
            label="Digite o seu e-mail"
            placeholder="exemplo@email.com"
            name="password"
          />

          <Input
            type="password"
            label="Digite a sua senha"
            placeholder="Digite a sua senha"
            name="confirmPassword"
          />

          <a href="/dashboard" className="block w-full text-center text-white bg-red-500 border border-white text-base px-6 py-3 rounded-xl">
            Criar minha conta
          </a>
        </form>
      </main>
    </div>
  );
};
