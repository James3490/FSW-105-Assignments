const readlineSync = require('readline-sync')
let userHP = 50
let enemyHP = 50
const enemies = ['Large Rat', 'Wolf', 'Cut Throat', 'Large Bat']
const treasure = ['Health Potion', 'Attack Boost Potion', 'Copper Piece', 'Meat']
let drop  = treasure[Math.floor(Math.random()*treasure.length)];
var loot = []
const userName = readlineSync.question('What is your name?: ')

readlineSync.question(userName + ' You are about to embark on a new adventure. This journey is fraught with many dangers and may very well be fatal to your health. When you are prepared, press any key and hit "enter", to begin.')


function loop () {
  

const journeyChoice = ['Show stats', 'Walk', 'Quit']
const userAttackPower = Math.floor(Math.random() * (6 - 2 + 1) + 7)
  const enemy = enemies[Math.floor(Math.random() * enemies.length)]
  
  const enemyAttackPower = Math.floor(Math.random() * (4 - 2 + 1) + 7)

  const index = readlineSync.keyInSelect(journeyChoice, 'How would you like to proceed?')

  
  if (journeyChoice[index] == 'Show stats') {
    console.log(userName + ': \n' + userHP + '\nTreasure: ' + loot)
   } else if (journeyChoice[index] == 'Quit') {
    return userHP = 0;
      } else if (journeyChoice[index] === 'Walk') {
    let key = Math.random()
    if (key <= .3) {
      console.log('Walking...')
    } else if (key >= .3) {
      whileLoop:
      while (enemyHP > 0 && userHP > 0) {
        console.log(enemy + ' has approached')
        const userAction = readlineSync.question('What do you want to do?, enter "r" to run or "a" to attack: ').toLowerCase()

        switch (userAction) {
          case 'r':
            const runAway = Math.random()
            if (runAway < .5) {
              console.log('You attempt to run away. But before you can,' + enemy + ' attacks you for: ', enemyAttackPower)
            } else {
              console.log('You ran away')
              break whileLoop
            }
          case 'a':
            do {
                enemyHP = enemyHP - userAttackPower;
                console.log('You just attacked ' + enemy + ' for ' + userAttackPower + ' attack power');
             
                userHP = userHP - enemyAttackPower;
                console.log('Enemy just attacked you for: ' + enemyAttackPower + ' attack power');
                
                if (enemyHP <= 0) {
                  console.log('You killed ' + enemy + '. \n' + enemy + ' dropped: ' + drop + '.')
                  let prize = Math.random()
                  if (prize <= .3 ) {
                   loot.push(drop) } 
                    console.log(drop)
                  } else if (userHP <= 0) {
                console.log(enemy + 'has defeated you. You are dead.')}
            }
            
          
            while (enemyHP > 0 || userHP > 0)
            restoreUser =  function() {
                userIsActive = true;
                userHP = 50;
            };
            restoreUser()
            loop()
        } 

        }
      }
    } 
  }


while (userHP > 0) {
  loop()
}