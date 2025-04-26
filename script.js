  function showScreen(id) {
    document.querySelectorAll('.screen').forEach(div => div.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
  }
  function useRecipe(name) {
    if (name === 'Spicy Curry') {
      Player.attack = Player.attack + 2;
    } else if (name === 'Garlic Bread') {
      Player.defense = Player.defense + 2;
    } else if (name === 'Healing Stew') {
      Player.health = Player.health + 2;
    }
    updateStatsUI();
  }
  
  function updateStatsUI() {
    document.getElementById('stat-level').textContent = Player.level;
    document.getElementById('stat-xp').textContent = Player.xp;
    document.getElementById('stat-xpnext').textContent = Player.xptonext;
    document.getElementById('stat-attack').textContent = Player.attack;
    document.getElementById('stat-defense').textContent = Player.defense;
    document.getElementById('stat-health').textContent = Player.health;
    document.getElementById('stat-materials').textContent = Player.materials;
    document.getElementById('name').textContent = Player.name;
  }
    dungeonButton.addEventListener('click', function() {
        const monsterAttack = Math.floor(Math.random() * 10) + 1;
        const monsterDefense = Math.floor(Math.random() * 5) + 1;
        const monsterHealth = Math.floor(Math.random() * 50) + 50;
    
        const playerDamage = Math.max(0, attack - monsterDefense);
        const monsterDamage = Math.max(0, monsterAttack - defense);
    
        const playerHealthAfterBattle = health - monsterDamage;
        const monsterHealthAfterBattle = monsterHealth - playerDamage;
    
        if (playerHealthAfterBattle > 0 && monsterHealthAfterBattle <= 0) {
        battleResult.textContent = 'You won the battle!';
        } else if (playerHealthAfterBattle <= 0 && monsterHealthAfterBattle > 0) {
        battleResult.textContent = 'You lost the battle!';
        } else {
        battleResult.textContent = 'It\'s a draw!';
        }
    });
  function fightDungeon(type) {
    let monsterAttack = type === 'Goblin' ? 5 : 15;
    let monsterDefense = type === 'Goblin' ? 2 : 8;
    let monsterHealth = type === 'Goblin' ? 30 : 80;
  
    const playerDamage = Math.max(0, attack - monsterDefense);
    const monsterDamage = Math.max(0, monsterAttack - defense);
  
    const playerHealthAfter = health - monsterDamage;
    const monsterHealthAfter = monsterHealth - playerDamage;
  
    let result = '';
    if (playerHealthAfter > 0 && monsterHealthAfter <= 0) {
      result = `You defeated the ${type}!`;
    } else if (playerHealthAfter <= 0) {
      result = `You were defeated by the ${type}!`;
    } else {
      result = `You both survived. The ${type} fled.`;
    }
  
    health = playerHealthAfter > 0 ? playerHealthAfter : 1;
    updateStatsUI();
    document.getElementById('battleResult').textContent = result;
  }

  function setUserName(userName){
    Player.name = userName;
  }

  window.onload = () => {
    updateStatsUI();
  };