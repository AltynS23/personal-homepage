// 1. Interactive Topic Filter on Learning Record Page
const filterButtons = document.querySelectorAll('.filter-btn');
const recordItems = document.querySelectorAll('.record-item');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    const selected = button.getAttribute('data-filter');
    recordItems.forEach((item) => {
      if (selected === 'all' || item.getAttribute('data-category') === selected) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// 2. Interactive Feedback Form on Projects Page
const feedbackForm = document.getElementById('feedbackForm');
const feedbackOutput = document.getElementById('feedbackOutput');

if (feedbackForm) {
  feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('visitorName').value.trim();
    const topic = document.getElementById('visitorTopic').value;
    const message = document.getElementById('visitorMessage').value.trim();

    if (!name || !message) return;

    const entry = document.createElement('div');
    entry.className = 'feedback-entry';
    entry.innerHTML = `<strong>${name}</strong> <span>(${topic})</span><p>${message}</p>`;

    feedbackOutput.prepend(entry);
    feedbackForm.reset();
  });
}