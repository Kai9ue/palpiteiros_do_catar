import { Icon, Input } from '~/components'

export const Login = () => {
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
            <Icon name="back"className="h-6" />
          </a>

          <h2 className="text-xl font-bold">
            Entre com a sua conta
          </h2>
        </div>

        <form action="" className="p-4 space-y-6"> 
          <Input
            type="text"
            label="Seu e-mail"
            placeholder="Digite o seu e-mail"
            name="email"
          />

          <Input
            type="password"
            label="Sua senha"
            placeholder="Digite a sua senha"
            name="password"
          />

          <a href="/dashboard" className="block w-full text-center text-white bg-red-500 border border-white text-base px-6 py-3 rounded-xl">
            Entrar
          </a>

        </form>

    </main>

    </div>
  )
} 