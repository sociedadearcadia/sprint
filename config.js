// Configurações do Sprint da Arcádia
window.ARCADIA_CONFIG = {
  // Link da playlist oficial do clube no Spotify (https://open.spotify.com/playlist/...)
  playlist: "https://open.spotify.com/playlist/37i9dQZF1EIUV9hXJzgRu9",

  // Integrantes da Sociedade: cada nome vira uma opção na tela de boas-vindas.
  // Para incluir alguém, coloque o nome entre aspas, seguido de vírgula.
  membros: [
    "Bia", "Fernanda", "Jessica", "Fran", "Carol", "Michaela", "Lari", "Elaine", "Julice",
    "Pamella", "Juliana", "Wanice", "Mary", "Aline", "Helly", "Gabi", "Kris"
  ],

  // Sprint coletivo: minutos de leitura e de pausa (prosa), e quantas rodadas seguidas
  // (as rodadas alternam leitura e prosa sozinhas, sem ninguém precisar clicar)
  coletivo: { leitura: 40, prosa: 15, rodadas: 4 },

  // Sala de vídeo do clube no Daily.co
  sala: "https://sociedadearcadia.daily.co/sprint",

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
