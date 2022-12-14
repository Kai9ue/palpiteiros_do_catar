export const Cards = ({ teamA, teamB, match }) => (
  
  <div className="rounded-xl border border-gray-300 p-4 text-center border border-rounded space-y-4">
    <span className="text-sm md:text-base text-gray-700 font-bold">
      {match.time}
    </span>
    <div className="flex space-x-4 justify-center items-center">
      <span className="uppercase">
        {teamA.slug}
      </span>
      <img src={`/images/flags/${teamA.slug}.png`} />

      <input type="number" min='0' className="bg-red-300/[0.2] w-[55px] h-[55px] text-red-700 text-xl text-center border rounded" />
      <span className="text-red-500 font-bold uppercase">x</span>
      <input type="number" min='0' className="bg-red-300/[0.2] w-[55px] h-[55px] text-red-700 text-xl text-center border rounded" />

      <img src={`/images/flags/${teamB.slug}.png`} />
      <span className="uppercase">
        {teamB.slug}
      </span>
    </div>
  </div>
)
