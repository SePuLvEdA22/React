import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'helger',
    name: 'Helger Jose Santiago',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo Hernandez',
    isFollowing: false
  },
  {
    userName: 'midudev',
    name: 'Miguel Angel Durán',
    isFollowing: false
  },
  {
    userName: 'gndx',
    name: 'Gonzalo Nuñez de Caceres',
    isFollowing: true
  }
]

export default function App () {

  return (
    <section className='App'>
      {
        users.map((user) => {
          const { userName, name, isFollowing } = user
          return (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              name={name}
              isFollowing={isFollowing}
            > {name} </TwitterFollowCard>
          ) 
        })
      }
    </section>
  )
}

 