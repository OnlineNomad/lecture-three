const user = [{name: 'Temo', age: 25}, {name: 'Lasha', age: 21}, {name: 'Ana', age: 28}];

const user2 = {
    name: 'Toko',
    age: 32,
    height: 182

}

const a = {
    name: 'Player One',
    triesA: 0,
    rollDice: function(){
        this.triesA =  this.triesA + 1;
        return Math.floor(Math.random() * 6);
        
    }
}
const b = {
    name: 'Player Two',
    triesB: 0,
    rollDice: function(){
        this.triesB = this.triesB + 1;
        return Math.floor(Math.random() * 6);
        
    }
}

function findYoungest(user) {
    user.forEach(function(item){
        if (item.age <= 21){
            console.log(`youngest one is: ${item.name}`)
        }
    })

}

function createNewUser(user) {
    const newUser = user;
    return newUser;
}

console.log('old user: ', user2);
console.log('new user: ', createNewUser(user2));
findYoungest(user);

while (true) {
    let tmprry = a.rollDice();
    let tmprry2 = b.rollDice();
    console.log(a.name, ' Rolled: ', tmprry);
    console.log(b.name, ' Rolled: ', tmprry2);
    if (tmprry === 3) {
        console.log(a.name + " Wins with " + parseInt(a.triesA) + " tries");
        break;
    }else if (tmprry2 === 3) {
        console.log(b.name + " Wins with " + parseInt(b.triesB) + " tries");
        break;
        
    }
}