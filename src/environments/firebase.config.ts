import { environment } from './environment';

// Firebase configuration
// Para desenvolvimento local, os valores estão em environment.ts
// Para produção (GitHub Pages), os valores vêm dos secrets do GitHub Actions

export const firebaseConfig = environment.firebase;
// 1. Acesse https://console.firebase.google.com/
// 2. Crie um novo projeto ou use um existente
// 3. Vá em Project Settings > General > Your apps
// 4. Adicione um app web e copie a configuração aqui