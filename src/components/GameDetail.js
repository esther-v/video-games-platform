import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImage } from "../util";

const GameDetail = () => {
    const history = useHistory()
    //exit detail
    const exitDetailHandler = (e) => {
        const element = e.target
        if(element.classList.contains('shadow')){
            document.body.style.overflow = 'auto'
            history.push('/')
        }
    }
    //data
    const {screen, game, isLoading} = useSelector(state => state.detail)
    return(
        <>
        {!isLoading && (
            <CardShadow className="shadow" onClick={exitDetailHandler}>
                <Detail >
                    <div className="stats">
                        <div className="rating">
                            <h3 >{game.name}</h3>
                            <p>Rating : {game.rating}</p>
                        </div>
                        <div className="info">
                            <h3>Platforms</h3>
                            <div className="platforms">
                                {game.platforms.map((data) => (
                                    <h3 key={data.platform.id}>{data.platform.name}</h3>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="media">
                        <img src={smallImage(game.background_image,1280)} alt="game" />
                    </div>
                    <div className="description">
                        <p>{game.description_raw}</p>
                    </div>
                    <div className="gallery">
                        {screen.results.map(screen => (
                            <img src={smallImage(screen.image,1280)} key={screen.id} alt="game" />
                        ))}
                    </div>
                </Detail>
            </CardShadow>
        )}
        </>
    )
}

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    &::-webkit-scrollbar{
        width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb{
        background-color: #ff7676;
    }

    &::-webkit-scrollbar-track{
        background-color: white;
    }
`

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    img{
        width: 100%;
    }
    .stats{
        display:flex;
        align-items: center;
        justify-content: space-between;
        .info{
            text-align: center;
            .platforms{
                display: flex;
                justify-content: space-evenly;
                img{
                    margin-left: 3rem;
                }
            }
        }
    }
    .media{
        margin-top: 5rem;
        img{
            width: 100%100%;
            height: 60vh;
            object-fit: cover;
        }
    }
    .description{
        margin: 5rem 0rem;
    }
`

export default GameDetail