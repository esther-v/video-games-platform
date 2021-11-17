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

export const popularGamesURL = () => `${base_url}${popular_games}`