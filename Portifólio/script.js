const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

const imageInput = document.getElementById('imageInput');
const photoPreview = document.getElementById('photo-preview');

imageInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            photoPreview.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});

const nameInput = document.getElementById('nameInput');
const bioInput = document.getElementById('bioInput');
const charCount = document.getElementById('char-count');

nameInput.addEventListener('input', (e) => {
    document.getElementById('display-name').textContent = e.target.value || "Seu Nome Aqui";
});

bioInput.addEventListener('input', (e) => {
    document.getElementById('display-bio').textContent = e.target.value;
    charCount.textContent = `Caracteres: ${e.target.value.length}`;
});

const projects = document.querySelectorAll('.project-item');
projects.forEach(project => {
    project.addEventListener('mouseover', () => {
        project.style.transform = "scale(1.05)";
        project.style.backgroundColor = "#4f46e5";
    });
    project.addEventListener('mouseleave', () => {
        project.style.transform = "scale(1)";
        project.style.backgroundColor = "#6366f1";
    });
});

document.getElementById('profileForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Perfil atualizado com sucesso no navegador!");
});
