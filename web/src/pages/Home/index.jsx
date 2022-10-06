export function Home() {
  return (
    <div className="min-h-screen bg-red-700 text-white p-6 flex flex-col items-center space-y-6">

      <header className="container flex justify-center max-w-3xl">
        <img src="/images/logo-fundo-vinho.svg" className="w-40" />
      </header>

      <div className="container max-w-3xl p-4 flex-1 flex flex-col items-center md:flex-row space-y-4 md:space-y-0 md:space-x-6">
        <div className="md:flex-1 flex justify-center">
          <img src="/images/photo_login.png" className="w-full max-w-sm" />
        </div>

        <div className="md:flex-1 flex flex-col space-y-6">
          <h1 className="text-2xl text-center md:text-left font-bold">
            Acerte os resultados dos jogos da Copa do Mundo Catar 2022!
          </h1>

          <a href="/cadastro" className="text-center text-red-700 bg-white text-xl px-5 py-4 rounded-xl">
            Criar minha conta
          </a>

          <a href="/login" className="text-center text-white border border-white text-xl px-5 py-4 rounded-xl">
            Fazer login
          </a>
        
        </div>
      </div>
    </div>
  )
}
