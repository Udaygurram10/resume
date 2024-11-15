const editButton = document.getElementById('edit-button');
const resume = document.getElementById('resume');

editButton.addEventListener('click', () => {
  if (editButton.textContent === 'Edit') {
    makeEditable();
  } else {
    saveChanges();
  }
});

function makeEditable() {
  editButton.textContent = 'Save';
  resume.contentEditable = 'true';
  resume.style.border = '2px dashed #007acc';
}

function saveChanges() {
  editButton.textContent = 'Edit';
  resume.contentEditable = 'false';
  resume.style.border = 'none';

  // Save changes to localStorage
  localStorage.setItem('resumeContent', resume.innerHTML);
}

// Load saved content on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedContent = localStorage.getItem('resumeContent');
  if (savedContent) {
    resume.innerHTML = savedContent;
  }
});
