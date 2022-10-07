import { Icon, Cards, DateSelect } from '~/components'

export const Dashboard = () => (
  <>
    
    <header className="bg-red-500 text-white">
      <div className="container max-w-3xl flex justify-between p-4">
        <img src="/images/logo-fundo-vermelho.svg" className="w-28 md:w-40" />
        <a href="/profile">
          <Icon name="profile" className="w-10" />
        </a>
      </div>
    </header>

    <main>

      <section id="header" className="bg-red-500 text-white">
        <div className="container max-w-3xl space-y-3 p-4">
          <span>Olá Kaique!</span>
          <h3 className="text-2xl font-bold">Crie o seu palpite</h3>
        </div>
      </section>

      <section id="content" className="container max-w-3xl p-4 space-y-4">

        <DateSelect />
          

        <div className="space-y-4">
          <Cards
            teamA={{ slug: 'cat' }}
            teamB={{ slug: 'equ' }}
            match={{ time: '13:00' }}
          />
        </div>  
      </section>
    </main>


  </>
)