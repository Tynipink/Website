const achievementsList = document.querySelector('#achievements ul');

const achievements = [
    { name: "First Steps", description: "Take your first action in the game" },
    { name: "Battle Veteran", description: "Win 5 battles" },
    { name: "Treasure Hunter", description: "Find a hidden treasure" }
    // Add more achievements here!
];

function unlockAchievement(achievementName) {
  const achievement = achievements.find(a => a.name === achievementName);
  if (achievement) {
    const newListItem = document.createElement('li');
    newListItem.textContent = `${achievement.name}: ${achievement.description}`;
    achievementsList.appendChild(newListItem);
  }
}

// Placeholder for your game logic:
function playerTookAction() {
  // ... your game code here ...

  // Example: Unlock the "First Steps" achievement
  unlockAchievement("First Steps");  
}
