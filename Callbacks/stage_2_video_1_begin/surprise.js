const surpriseSection = document.getElementById('surprise');

function () {
  surpriseSection.textContent = '🎉 Surprise! 🎉';
};

const randomTime = Math.random() * 4000;

setTimeout(() => {
  surpriseSection.textContent = '🎉 Surprise! 🎉';
}, randomTime);