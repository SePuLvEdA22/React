import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export default function App () {

  return (
    <section className='App'>
      <TwitterFollowCard 
        userName='helgersantiago'>
          Helger Jose Santiago
      </TwitterFollowCard>
      <TwitterFollowCard 
        userName='pheralb' >
          Pablo Hernandez
      </TwitterFollowCard>

    </section>
  )
}

 