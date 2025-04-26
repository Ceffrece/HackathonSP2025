  function showScreen(id) {
    document.querySelectorAll('.screen').forEach(div => div.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
  }
  function useRecipe(name) {
    if (name === 'Spicy Curry') {
      attack += 2;
    } else if (name === 'Garlic Bread') {
      defense += 2;
    } else if (name === 'Healing Stew') {
      health += 10;
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
  }

  window.onload = () => {
    updateStatsUI();
  };