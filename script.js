let attack = 0;
let defense = 0;
let health = 100;

const recipeForm = document.getElementById('recipeForm');
const dungeonButton = document.getElementById('dungeonButton');
const battleResult = document.getElementById('battleResult');

recipeForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const recipeName = document.getElementById('recipeName').value;
  const ingredients = document.getElementById('ingredients').value.split(',').map(ingredient => ingredient.trim().toLowerCase());

  // Simple logic to adjust stats based on ingredients
  ingredients.forEach(ingredient => {
    if (ingredient === 'chili') attack += 2;
    if (ingredient === 'garlic') defense += 1;
    if (ingredient === 'ginger') health += 5;
  });

  // Update character stats
  document.getElementById('attack').textContent = attack;
  document.getElementById('defense').textContent = defense;
  document.getElementById('health').textContent = health;

  // Clear form fields
  document.getElementById('recipeName').value = '';
  document.getElementById('ingredients').value = '';
});

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

const attackEl = document.getElementById('attack');
const defenseEl = document.getElementById('defense');
const healthEl = document.getElementById('health');

// Switch between screens
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.add('hidden');
  });
  document.getElementById(screenId).classList.remove('hidden');
}

// Use a prebuilt recipe
function useRecipe(name) {
  if (name === 'Spicy Curry') {
    attack += 2;
  } else if (name === 'Garlic Bread') {
    defense += 2;
  } else if (name === 'Healing Stew') {
    health += 10;
  }
  updateStats();
}

// Fight a dungeon
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
  updateStats();
  document.getElementById('battleResult').textContent = result;
}

// Update character stat display
function updateStats() {
  attackEl.textContent = attack;
  defenseEl.textContent = defense;
  healthEl.textContent = health;
}
