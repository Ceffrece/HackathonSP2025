let player = {
    name: "Hero",
    level: 1,
    xp: 0,
    xptonext: 10,
    attack: 2,
    defense: 1,
    health: 100,
    materials: 0
  };
  
  function showScreen(id) {
    document.querySelectorAll('.screen').forEach(div => div.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
  }
  
  function updateStatsUI() {
    document.getElementById('stat-level').textContent = player.level;
    document.getElementById('stat-xp').textContent = player.xp;
    document.getElementById('stat-xpnext').textContent = player.xptonext;
    document.getElementById('stat-attack').textContent = player.attack;
    document.getElementById('stat-defense').textContent = player.defense;
    document.getElementById('stat-health').textContent = player.health;
    document.getElementById('stat-materials').textContent = player.materials;
  }
  window.onload = () => {
    updateStatsUI();
  };