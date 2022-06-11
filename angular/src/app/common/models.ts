export interface User{
    name : string
    x : number
    y : number
    hp : number
}

export interface Game{
    width:number,
    heigth:number,
    players: Array<User>
}