// game-ui.js

let playerTeam = [];
let enemyTeam = [];
let selectedSkill = null;
let selectedTarget = null;

function renderCharacter(character, container, isEnemy = false) {
  const charDiv = document.createElement('div');
  charDiv.classList.add('character');
  charDiv.setAttribute('data-id', character.id);

  charDiv.innerHTML = `
    <h4>${character.name}</h4>
    <div>HP: <span class="hp">${character.hp}</span></div>
    <div class="skills">${!isEnemy ? character.skills.map(skill => `
      <button class="skill-btn" data-skill='${JSON.stringify(skill)}'>${skill.name}</button>
    `).join('') : ''}</div>
  `;

  container.appendChild(charDiv);

  if (isEnemy) {
    charDiv.addEventListener('click', () => {
      document.querySelectorAll('#enemy-characters .character').forEach(c => c.classList.remove('selected'));
      charDiv.classList.add('selected');
      selectedTarget = character;
      console.log('Target selected:', selectedTarget);
    });
  }
}

function setupGame(characters) {
  playerTeam = characters.slice(0, 1);
  enemyTeam = characters.slice(1, 2);

  const playerContainer = document.getElementById('player-characters');
  const enemyContainer = document.getElementById('enemy-characters');

  playerTeam.forEach(char => renderCharacter(char, playerContainer));
  enemyTeam.forEach(char => renderCharacter(char, enemyContainer, true));

  document.querySelectorAll('.skill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.skill-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedSkill = JSON.parse(btn.getAttribute('data-skill'));
      console.log('Skill selected:', selectedSkill);
    });
  });

  document.getElementById('end-turn').addEventListener('click', () => {
    console.log('End Turn clicked');
    if (selectedSkill && selectedTarget) {
      console.log('Submitting turn:', {
        skill: selectedSkill,
        target: selectedTarget
      });

      fetch('https://asora-backend.onrender.com/turn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          skill: selectedSkill.id,
          target: selectedTarget.id
        })
      })
      .then(res => res.json())
      .then(data => {
        console.log('Turn result:', data);
        // TODO: update UI with results
      })
      .catch(err => {
        console.error('Error submitting turn:', err);
      });
    } else {
      alert('Select both a skill and a target before ending turn.');
    }
  });
}

fetch('data/characters.json')
  .then(res => res.json())
  .then(data => {
    setupGame(data);
  });
