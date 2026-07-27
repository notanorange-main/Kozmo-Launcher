const dropdown = document.getElementById('dropdown');
const selected = document.getElementById('dropdownSelected');
const label = document.getElementById('dropdownLabel');
const options = document.querySelectorAll('.dropdown-option');
const btn = document.getElementById('playBtn');
const status = document.getElementById('status');

selected.addEventListener('click', () => {
  dropdown.classList.toggle('open');
});

let activeHref = document.querySelector('.dropdown-option.active').dataset.href || null;

options.forEach(option => {
  if (option.classList.contains('locked')) return;
  option.addEventListener('click', () => {
    options.forEach(o => o.classList.remove('active'));
    option.classList.add('active');
    label.textContent = option.textContent;
    activeHref = option.dataset.href || null;
    dropdown.classList.remove('open');
  });
});

document.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) dropdown.classList.remove('open');
});

btn.addEventListener('click', () => {
  if (activeHref) {
    window.location.href = activeHref;
    return;
  }
  const version = label.textContent;
  status.textContent = `Launching ${version}...`;
  btn.disabled = true;
  setTimeout(() => {
    status.textContent = `Ready to play!`;
    btn.disabled = false;
  }, 1500);
});
