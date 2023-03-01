const user = [{name: 'Temo', age: 25}, {name: 'Lasha', age: 21}, {name: 'Ana', age: 28}];

function findYoungest(user) {
    user.forEach(function(item){
        if (item.age <= 21){
            console.log(`${item.name}`)
        }
    })
}
findYoungest(user);