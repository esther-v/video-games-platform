import React, {useEffect} from 'react';
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//components
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';
//styling
import styled from "styled-components";
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';



const Home = () => {
    //get current location
    const location = useLocation()
    const pathId = location.pathname.split("/")[2]
    //fetch games
    const dispatch = useDispatch()
    useEffect(() => {
    dispatch(loadGames())
    }, [dispatch])
    //get that data back
    const { popular, newGames, upcoming, searched } = useSelector(state => state.games)

    return(
        <GameList>
            
                {pathId && <GameDetail/>}

                {searched.length ? (
                    <div className="searched">
                    <h2>Search results :</h2>
                    <Games>
                        {searched.map((game) => (
                            <Game 
                                name={game.name} 
                                released={game.released} 
                                id={game.id}
                                image={game.background_image}
                                key={game.id}
                            />
                        ))}
                    </Games>
                    </div>
                ) : ''}

                <h2>Upcoming Games</h2>
                <Games>
                    {upcoming.map((game) => (
                        <Game 
                            name={game.name} 
                            released={game.released} 
                            id={game.id}
                            image={game.background_image}
                            key={game.id}
                        />
                    ))}
                </Games>

                <h2>Popular Games</h2>
                <Games>
                    {popular.map((game) => (
                        <Game 
                            name={game.name} 
                            released={game.released} 
                            id={game.id}
                            image={game.background_image}
                            key={game.id}
                        />
                    ))}
                </Games>

                <h2>New Games</h2>
                <Games>
                    {newGames.map((game) => (
                        <Game 
                            name={game.name} 
                            released={game.released} 
                            id={game.id}
                            image={game.background_image}
                            key={game.id}
                        />
                    ))}
                </Games>
            
        </GameList>
    )
}

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2{
        padding: 5rem 0rem;
    }
`
const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`

export default Home