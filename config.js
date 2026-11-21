// Configurações do Sprint da Arcádia
window.ARCADIA_CONFIG = {
  // Link da playlist oficial do clube no Spotify (https://open.spotify.com/playlist/...)
  playlist: "",

  // Integrantes da Sociedade: cada nome vira uma opção na tela de boas-vindas.
  // Para incluir alguém, coloque o nome entre aspas, seguido de vírgula.
  membros: [
    "Bia", "Fernanda", "Jessica", "Fran", "Carol", "Michaela", "Lari", "Elaine", "Julice",
    "Pamella", "Juliana", "Wanice", "Mary", "Aline", "Helly", "Gabi", "Kris"
  ],

  // Sala de vídeo do clube no Daily.co
  sala: "",

  // Firebase (ranking). Estes dados são públicos; quem protege o ranking são as regras do Firestore.
  firebase: {
    apiKey: "AIzaSyB4h621QInPeBT9-GVzCi9KbHNXecxSLHM",
    authDomain: "sprint-arcadia.firebaseapp.com",
    projectId: "sprint-arcadia",
    storageBucket: "sprint-arcadia.firebasestorage.app",
    messagingSenderId: "193685247098",
    appId: "1:193685247098:web:ab9d5af4cc135146add7c3"
  }
};
