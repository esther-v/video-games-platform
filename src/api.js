//base url
const base_url = 'https://api.rawg.io/api/'
const apiKey = '190347579a884dd3943d864617015f5d'

//get the current date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1
    if(month < 10){
        return `0${month}`
    } else{
        return month
    }
}

const getCurrentDay = () => {
    const day = new Date().getDate() 
    if(day < 10){
        return `0${day}`
    } else{
        return day
    }
}
//current day/month/year
const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`


//popular games
const popular_games = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`

const upcoming_games = `games?key=${apiKey}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`

const newGames = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`

export const popularGamesURL = () => `${base_url}${popular_games}`
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`
export const newGamesURL = () => `${base_url}${newGames}`