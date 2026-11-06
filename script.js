const video = document.getElementById('webcam');

// Inicia a transmissão da câmera
navigator.mediaDevices.getUserMedia({ video: true })
  .then((stream) => {
    video.srcObject = stream;
  })
  .catch((error) => {
    console.error('Erro ao acessar a câmera:', error);
    alert('Permissão de câmera negada ou dispositivo não encontrado.');
  });

// Aplica a classe correspondente ao filtro selecionado
function applyFilter(filterName) {
  video.className = ''; 
  if (filterName !== 'none') {
    video.classList.add(`filter-${filterName}`);
  }
}