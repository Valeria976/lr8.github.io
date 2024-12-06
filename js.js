window.addEventListener('load', () => {
    let userName = prompt("Ваше ім’я:");
    let userScore = 0;
    let computerScore = 0;
  
    const userScoreDisplay = document.getElementById('userScore');
    const computerScoreDisplay = document.getElementById('computerScore');
    const userNumberDisplay = document.getElementById('userNumber');
    const computerNumberDisplay = document.getElementById('computerNumber');
    const resultDisplay = document.getElementById('result');
    const generateButton = document.getElementById('Button');
    if (!userName) {
      userName = "Користувач";
    }
    document.querySelector('.player-name').textContent = userName;
  
    (document.getElementById('Button')).addEventListener('click', () => {
      const userNumber = Math.floor(Math.random() * 10) + 1;
      const computerNumber = Math.floor(Math.random() * 10) + 1;
  
      userNumberDisplay.textContent = userNumber;
      computerNumberDisplay.textContent = computerNumber;
  
      if (userNumber > computerNumber) {
        userScore++;
        resultDisplay.textContent = `${userName} переміг цей раунд`;
      } else if (computerNumber > userNumber) {
        computerScore++;
        resultDisplay.textContent = 'Компьютер переміг цей раунд';
      } else {
        resultDisplay.textContent = 'Нічия';
      }
  
      userScoreDisplay.textContent = userScore;
      computerScoreDisplay.textContent = computerScore;
  
      if (userScore === 3) {
        resultDisplay.textContent = `${userName} перемагає`;
        resetGame();
      } else if (computerScore === 3) {
        resultDisplay.textContent = 'Компьютер перемагає';
        resetGame();
      }
    });
  
    function resetGame() {
      userScore = 0;
      computerScore = 0;
      userScoreDisplay.textContent = userScore;
      computerScoreDisplay.textContent = computerScore;
    }
  });  
  document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const url = card.getAttribute('url');
            if (url) {
                window.location.href = url;
            }
        });
    });

    const backButton = document.querySelector('.btn-back');
    if (backButton) {
        backButton.addEventListener('click', () => {
            const returnUrl = backButton.getAttribute('return-url');
            if (returnUrl) {
                window.location.href = returnUrl;
            }
        });
    }
}); 