import { Icon, cards } from '~/components'

export const Profile = () => (
  <div className="">
    
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
          <h3 className="text-2xl font-bold">Qual é o seu palpite?</h3>
        </div>
      </section>

      <section id="content" className="container max-w-3xl p-4 space-y-4">

        <div className="flex space-x-4 items-center justify-center p-4">
          <Icon name="arrowLeft" className="w-6 text-red-500" />
          <span className="font-bold">
            24 de novembro
          </span>
          <Icon name="arrowRight" className="w-6 text-red-500" />
          
        </div>

        <div className="space-y-4">
          <cards
            teamA={{ slug: 'sui' }}
            teamB={{ slug: 'cam' }}
            match={{ time: '07:00' }}
          />
        </div>  
      </section>
    </main>


  </div>
)