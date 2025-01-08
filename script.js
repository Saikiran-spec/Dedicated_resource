document.querySelectorAll('.faq-item').forEach(item => {
  item.querySelector('.toggle').addEventListener('click', () => {
      const answer = item.querySelector('.answer');
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});