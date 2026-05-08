document.getElementById('year').textContent = new Date().getFullYear();

function downloadResume() {
  const url = 'https://drive.google.com/file/d/1xwXPXLNb6G_xKvq6hHUMoi3XBopUHR3z/view?usp=drivesdk';
  window.open(url, '_blank');
}

function openProject(projectName) {
  let url = '';

  switch (projectName) {
    case 'cheapkart':
      url = 'https://utsavdwivedi51.github.io/CheapKart/';
      break;
    case 'todo':
      url = 'https://utsavdwivedi51.github.io/Todo/';
      break;
    case 'portfolio':
      url = 'https://utsavdwivedi51.github.io/Temperature-Converter-Website/';
      break;
    case 'attendance erp':
      url = 'https://utsavdwivedi51.github.io/Attendance-ERP/';
      break;
    case 'resume analyzer':
      url = 'https://utsavdwivedi51.github.io/AI-based-Resume-Analyzer/';
      break;
    case 'quicktalk':
      url = 'https://utsavdwivedi51.github.io/QuickTalk---Modern-AI-Chat/';
      break;
    default:
      alert('Project link not found!');
      return;
  }

  window.open(url, '_blank');
}

async function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;

  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      alert('✅ Message sent successfully! I\'ll get back to you soon.');
      form.reset();
    } else {
      throw new Error('Failed to send');
    }
  } catch (error) {
    alert('❌ Could not send message. Please email me directly at utsavdwivedi51@gmail.com');
  } finally {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
