# My Life Level Up - Banking Dashboard

Uma aplicação Angular moderna com design responsivo baseado em dashboard bancário, construída com **PrimeNG** e **PrimeFlex**.

## 🚀 Funcionalidades

- ✅ **Dashboard Bancário** - Interface inspirada no Poseidon com cards estatísticos
- ✅ **Gerenciamento de Tarefas** - Sistema de timer para controle de produtividade
- ✅ **Layout Responsivo** - Sidebar colapsável para mobile e desktop
- ✅ **Navegação SPA** - Single Page Application com roteamento
- ✅ **Design System** - Componentes PrimeNG com tema Aura

## 📱 Responsividade

### Desktop
- Sidebar fixa lateral com menu expandido
- Layout em grid para cards e tabelas
- Navegação visível permanentemente

### Mobile
- Sidebar escondida por padrão
- Botão hamburger no header
- Layout adaptado para telas pequenas
- Drawer overlay para navegação

## 🏗️ Estrutura do Projeto

```
src/app/
├── core/                    # Serviços centrais e guards
├── shared/                  # Componentes reutilizáveis
├── layout/                  # Componentes de layout
│   └── main-layout.component.ts
├── features/               # Módulos de funcionalidades
│   ├── dashboard/          # Dashboard bancário
│   │   └── dashboard.component.ts
│   └── tasks/              # Gerenciamento de tarefas
│       └── tasks.component.ts
├── app.config.ts           # Configuração da aplicação
├── app.routes.ts           # Roteamento
└── app.ts                  # Componente raiz
```

## 🎨 Componentes

### MainLayoutComponent
- **Responsabilidade**: Layout principal com sidebar e router-outlet
- **Tecnologias**: PrimeNG DrawerModule, MenuModule, ButtonModule
- **Responsividade**: Sidebar responsiva com toggle para mobile

### DashboardComponent
- **Responsabilidade**: Dashboard bancário com cards estatísticos
- **Funcionalidades**:
  - Cards de balanço (Spend Limit, Currency, Income, Expenses)
  - Placeholder para gráficos
  - Tabela de histórico de transações
  - Lista de movimentações do cartão

### TasksComponent
- **Responsabilidade**: Sistema de gerenciamento de tarefas com timer
- **Funcionalidades**:
  - Timer com play/pause
  - Barra de progresso
  - Acordeão com cronograma semanal

## 🚀 Como Executar

### Desenvolvimento
```bash
npm start
```

### Build de Produção
```bash
npm run build:prod
```

### Deploy GitHub Pages
```bash
npm run deploy
```

## 🌐 URLs

- **Produção**: https://victorhpf97.github.io/my-life-level-up/
- **Dashboard**: https://victorhpf97.github.io/my-life-level-up/dashboard
- **Tasks**: https://victorhpf97.github.io/my-life-level-up/tasks

## 🛠️ Tecnologias

- **Angular 20.3.0** - Framework principal
- **PrimeNG 20.2.0** - Biblioteca de componentes UI
- **PrimeFlex 4.0.0** - CSS utilitário para layout
- **PrimeIcons 7.0.0** - Biblioteca de ícones
- **TypeScript 5.9.2** - Linguagem de programação

## 📐 Padrões de Código

- **Standalone Components** - Componentes independentes sem NgModule
- **Lazy Loading** - Carregamento sob demanda para melhor performance
- **Signal-based** - Uso de signals para reatividade
- **Clean Architecture** - Separação clara de responsabilidades
- **Responsive First** - Design mobile-first com PrimeFlex

## 🎯 Próximos Passos

- [ ] Implementar autenticação
- [ ] Adicionar gráficos reais com Chart.js
- [ ] Criar CRUD para tarefas
- [ ] Implementar PWA
- [ ] Adicionar testes unitários
- [ ] Integração com backend API
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
