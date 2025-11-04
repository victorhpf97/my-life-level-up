# Segurança Firebase + GitHub Pages 🔐

## ⚠️ Configuração de Secrets do GitHub

Para hospedar com segurança no GitHub Pages, você precisa configurar os seguintes secrets no repositório:

### Passos:

1. **Vá para o seu repositório no GitHub**
2. **Settings → Secrets and Variables → Actions**
3. **Adicione os seguintes Repository Secrets:**

```
FIREBASE_API_KEY = AIzaSyDo4fERTUC4NRfVGfX5UUPXkbiyxH9F4yA
FIREBASE_AUTH_DOMAIN = my-life-level-up.firebaseapp.com
FIREBASE_PROJECT_ID = my-life-level-up
FIREBASE_STORAGE_BUCKET = my-life-level-up.firebasestorage.app
FIREBASE_MESSAGING_SENDER_ID = 269935753151
FIREBASE_APP_ID = 1:269935753151:web:96d531ce83a816e49c530a
```

## 🔄 Como Funciona

### Desenvolvimento Local:
- Usa `src/environments/environment.ts`
- Config Firebase fica no código (OK para dev)

### Produção (GitHub Pages):
- GitHub Actions usa secrets
- Cria `environment.prod.ts` durante o build
- Config Firebase vem dos secrets (🔒 Seguro)

## 🚀 Deploy

Após configurar os secrets, faça:

```bash
git add .
git commit -m "Setup secure Firebase config"
git push origin main
```

O GitHub Actions automaticamente:
1. ✅ Faz build da aplicação
2. ✅ Injeta configs dos secrets
3. ✅ Deploya no GitHub Pages

## 📝 Observações de Segurança

### ✅ É Seguro Deixar Público:
- `apiKey`, `authDomain`, `projectId` são **públicos por design**
- Segurança real está nas **Firebase Security Rules**

### 🔒 Para Máxima Segurança:
- Use esta configuração com secrets
- Configure Firebase Security Rules
- Ative domínios autorizados no Firebase Console

### 🔧 Firebase Security Rules Exemplo:

```javascript
// Firestore Rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Apenas usuários autenticados
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## 🌐 Configuração de Domínios

No **Firebase Console → Authentication → Settings → Authorized domains**:
- Adicione: `seuusername.github.io`
- Para desenvolvimento: `localhost`