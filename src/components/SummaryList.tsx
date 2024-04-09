import { MatchState } from './MatchList'

import { reverse } from '../utils/arrays'

import BaseTitleWithIcon from './shared/BaseTitleWithIcon'


export const SummaryList = ({ matches }: { matches: MatchState[] }): JSX.Element => {
  matches.sort((currentGame,nextGame)=>{
    const currentGameTotalScore = currentGame.homeTeamScore + currentGame.awayTeamScore;
  const nextGameTotalScore = nextGame.homeTeamScore + nextGame.awayTeamScore;
  return nextGameTotalScore - currentGameTotalScore;
  });
  //const reversedMatches = reverse({ matches })

  return (
    <>
      <BaseTitleWithIcon title='Summary'>
        <span>⚽</span>
      </BaseTitleWithIcon>

      <ul>
        {matches.length > 0 && matches.map(m => (
          <li key={m.id}>
            {m.homeTeamName} {m.homeTeamScore} - {m.awayTeamName} {m.awayTeamScore}
          </li>
        ))}
      </ul>
    </>
  )
}
