<div align="center">

# 🏛️ Ekklesia - SGE

### Sistema de Gestão Eclesiástico

[![Laravel](https://img.shields.io/badge/Laravel-12-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)](https://laravel.com)
[![Vue.js](https://img.shields.io/badge/Vue.js-3-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

**Plataforma digital desenvolvida para gestão administrativa, ministerial e financeira das paróquias da Igreja Evangélica Batista em Angola (IEBA)**

[Funcionalidades](#-funcionalidades-principais) • [Instalação](#-instalação) • [Documentação](#-documentação) • [Roadmap](#-roadmap)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Estrutura Organizacional](#-estrutura-organizacional)
- [Perfis de Usuário](#-perfis-de-usuário)
- [Módulos do Sistema](#-módulos-do-sistema)
- [Arquitetura Técnica](#-arquitetura-técnica)
- [Instalação](#-instalação)
- [Configuração](#-configuração)
- [Uso](#-uso)
- [Roadmap](#-roadmap)
- [Contribuição](#-contribuição)
- [Licença](#-licença)
- [Contato](#-contato)

---

## 📖 Sobre o Projeto

O **Ekklesia - SGE** (Sistema de Gestão Eclesiástico) é uma solução completa e moderna para a administração de igrejas e paróquias. Desenvolvido especificamente para a **Igreja Evangélica Batista em Angola (IEBA)**, o sistema centraliza e organiza todos os aspectos da gestão eclesiástica.

### 🎯 Objetivo

Digitalizar e otimizar a gestão das paróquias, proporcionando:

- ✅ **Organização** - Estrutura centralizada e hierárquica
- ✅ **Transparência** - Controle financeiro detalhado
- ✅ **Eficiência** - Automatização de processos administrativos
- ✅ **Comunicação** - Melhoria na interação entre paróquias e sede nacional
- ✅ **Prestação de Contas** - Relatórios completos e auditáveis

---

## ⚡ Funcionalidades Principais

<table>
<tr>
<td width="50%">

### 👥 Gestão de Membros
- Cadastro completo de membros
- Controle de status (ativo/inativo)
- Histórico ministerial
- Associação a departamentos
- Histórico de contribuições

</td>
<td width="50%">

### 🏢 Gestão de Departamentos
- Criação e organização de ministérios
- Atribuição de líderes
- Registro de atividades
- Controle de membros por departamento

</td>
</tr>
<tr>
<td width="50%">

### 💰 Controle Financeiro
- Registro de dízimos e ofertas
- Controle de doações
- Gestão de caixa
- Relatórios financeiros detalhados
- Auditoria por período

</td>
<td width="50%">

### 📊 Relatórios e Analytics
- Dashboard consolidado
- Crescimento de membros
- Análise financeira
- Comparação entre paróquias
- Exportação de dados

</td>
</tr>
</table>

---

## 🏛 Estrutura Organizacional

O sistema segue uma arquitetura hierárquica que reflete a estrutura organizacional da igreja:

```
📍 Sede Nacional (IEBA)
│
├── 📌 Paróquia A
│   ├── 👥 Membros
│   ├── 🏢 Departamentos
│   │   ├── Evangelismo
│   │   ├── Escola Dominical
│   │   ├── Música/Coro
│   │   ├── Juventude
│   │   ├── Mulheres
│   │   └── Homens
│   ├── 💰 Finanças
│   │   ├── Dízimos
│   │   ├── Ofertas
│   │   └── Doações
│   └── 📊 Projetos
│
├── 📌 Paróquia B
│   └── [mesma estrutura]
│
└── 📌 Paróquia N
    └── [mesma estrutura]
```

---

## 👥 Perfis de Usuário

### 🔐 Sistema de Permissões (RBAC)

<table>
<thead>
<tr>
<th>Perfil</th>
<th>Nível de Acesso</th>
<th>Responsabilidades</th>
</tr>
</thead>
<tbody>
<tr>
<td>

**🌐 Admin Nacional**

</td>
<td>

🔴 Nível 1 (Máximo)

</td>
<td>

- Visualização de todas as paróquias
- Relatórios consolidados nacionais
- Auditoria financeira geral
- Análise de crescimento da igreja
- Gestão de pastores/admins paroquiais

</td>
</tr>
<tr>
<td>

**⛪ Admin Paroquial**<br>
*(Pastor/Responsável)*

</td>
<td>

🟠 Nível 2

</td>
<td>

- Gestão completa da paróquia
- Cadastro e gestão de membros
- Controle financeiro local
- Criação de departamentos
- Nomeação de líderes
- Geração de relatórios paroquiais

</td>
</tr>
<tr>
<td>

**👔 Líder de Departamento**

</td>
<td>

🟡 Nível 3

</td>
<td>

- Gestão do departamento específico
- Gestão de membros do departamento
- Registro de atividades
- Relatórios departamentais
- Controle de contribuições do setor

</td>
</tr>
<tr>
<td>

**👤 Membro**

</td>
<td>

🟢 Nível 4 (Básico)

</td>
<td>

- Visualização de dados pessoais
- Histórico de contribuições
- Histórico de participação
- Acesso a informações da paróquia

</td>
</tr>
</tbody>
</table>

---

## 🧩 Módulos do Sistema

### 1️⃣ Módulo de Membros

Gestão completa do cadastro de membros da igreja.

**Funcionalidades:**
- 📝 Cadastro com dados pessoais completos
- 📸 Foto de perfil
- 📞 Informações de contato
- 🏠 Endereço residencial
- 📅 Data de batismo e conversão
- 🎯 Estado do membro (ativo/inativo/disciplinado)
- 📋 Histórico ministerial
- 💼 Associação a departamentos
- 💰 Histórico de contribuições

### 2️⃣ Módulo de Departamentos

Organização ministerial da paróquia.

**Departamentos Padrão:**
- 📖 Evangelismo
- 🎓 Escola Dominical
- 🎵 Música e Coro
- 👨‍👩‍👧‍👦 Juventude
- 👩 Ministério Feminino
- 👨 Ministério Masculino
- 👶 Ministério Infantil
- 🙏 Intercessão

**Recursos:**
- Criação de departamentos customizados
- Atribuição de líderes e membros
- Agenda de atividades
- Registro de reuniões
- Relatórios de participação

### 3️⃣ Módulo Financeiro

Controle completo das finanças da paróquia.

**Categorias:**
| Entrada | Saída |
|---------|-------|
| 💵 Dízimos | 🔌 Despesas operacionais |
| 🎁 Ofertas | 👷 Obras e projetos |
| 💝 Doações | 📚 Material didático |
| 🎪 Eventos | 🤝 Missões |
| 📦 Projetos especiais | 💡 Manutenção |

**Funcionalidades:**
- ✅ Registro de entradas e saídas
- 📊 Relatórios mensais/anuais
- 👤 Relatórios por membro
- 🏢 Relatórios por departamento
- 📈 Análise de fluxo de caixa
- 🔍 Auditoria financeira
- 📄 Exportação de dados (PDF/Excel)

### 4️⃣ Módulo de Relatórios

Dashboard inteligente com analytics.

**Métricas Disponíveis:**
- 📈 Crescimento de membros (por período)
- 💰 Performance financeira
- 👥 Taxa de participação ministerial
- 🎯 Metas e objetivos
- 🏆 Comparação entre paróquias (visão nacional)
- 📊 Indicadores de desempenho (KPIs)

---

## 🏗 Arquitetura Técnica

### 🔧 Stack Tecnológico

#### Backend
```
🎯 Framework: Laravel 12
🔐 Autenticação: Laravel Fortify
🛡️ Autorização: Spatie Laravel Permission
🗄️ Banco de Dados: MySQL/PostgreSQL
📡 API: RESTful
🔄 Queue: Redis
📧 Email: SMTP/Mailgun
```

#### Frontend
```
⚡ Framework: Vue 3 (Composition API)
🎨 UI Framework: TailwindCSS
🛠️ Build Tool: Vite
📊 Gráficos: Chart.js / ApexCharts
🌐 HTTP Client: Axios
📝 Formulários: VeeValidate
🗂️ State Management: Pinia
```

### 📐 Arquitetura do Sistema

```
┌─────────────────────────────────────────────────────────┐
│                      FRONTEND (Vue 3)                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │  Dashboard   │  │   Membros    │  │  Finanças    │ │
│  └──────────────┘  └──────────────┘  └──────────────┘ │
└────────────────────────┬────────────────────────────────┘
                         │ HTTP/REST API
┌────────────────────────▼────────────────────────────────┐
│                  BACKEND (Laravel 12)                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │ Controllers  │  │  Services    │  │  Repositories│ │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘ │
│         │                  │                  │         │
│  ┌──────▼──────────────────▼──────────────────▼──────┐ │
│  │              Business Logic Layer                  │ │
│  └──────┬─────────────────────────────────────────────┘ │
│         │                                                │
│  ┌──────▼──────────────────────────────────────────┐   │
│  │           Database Layer (Eloquent ORM)         │   │
│  └──────┬──────────────────────────────────────────┘   │
└─────────┼──────────────────────────────────────────────┘
          │
┌─────────▼──────────┐
│   MySQL/PostgreSQL │
└────────────────────┘
```

### 🗂️ Estrutura de Diretórios

```
ekklesia-sge/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   ├── Middleware/
│   │   └── Requests/
│   ├── Models/
│   ├── Services/
│   ├── Repositories/
│   └── Policies/
├── database/
│   ├── migrations/
│   ├── seeders/
│   └── factories/
├── resources/
│   ├── js/
│   │   ├── components/
│   │   ├── views/
│   │   ├── router/
│   │   └── stores/
│   └── css/
├── routes/
│   ├── api.php
│   └── web.php
├── tests/
│   ├── Feature/
│   └── Unit/
└── public/
```

---

## 🚀 Instalação

### 📋 Pré-requisitos

Certifique-se de ter instalado:

- **PHP** >= 8.2
- **Composer** >= 2.6
- **Node.js** >= 18.x
- **NPM** ou **Yarn**
- **MySQL** >= 8.0 ou **PostgreSQL** >= 14
- **Redis** (opcional, para filas)

### 📥 Passo a Passo

#### 1️⃣ Clone o repositório

```bash
git clone https://github.com/seu-usuario/ekklesia-sge.git
cd ekklesia-sge
```

#### 2️⃣ Instale as dependências do Backend

```bash
composer install
```

#### 3️⃣ Instale as dependências do Frontend

```bash
npm install
# ou
yarn install
```

#### 4️⃣ Configure o ambiente

```bash
# Copie o arquivo de configuração
cp .env.example .env

# Gere a chave da aplicação
php artisan key:generate
```

#### 5️⃣ Configure o banco de dados

Edite o arquivo `.env` com suas credenciais:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=ekklesia_sge
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
```

#### 6️⃣ Execute as migrations

```bash
php artisan migrate --seed
```

#### 7️⃣ Compile os assets

```bash
# Desenvolvimento
npm run dev

# Produção
npm run build
```

#### 8️⃣ Inicie o servidor

```bash
php artisan serve
```

Acesse: **http://localhost:8000**

---

## ⚙️ Configuração

### 🔐 Configuração de Autenticação

O sistema utiliza **Laravel Fortify** para autenticação. Configure no arquivo `config/fortify.php`:

```php
'features' => [
    Features::registration(),
    Features::resetPasswords(),
    Features::emailVerification(),
    Features::updateProfileInformation(),
    Features::updatePasswords(),
    Features::twoFactorAuthentication([
        'confirm' => true,
        'confirmPassword' => true,
    ]),
],
```

### 📧 Configuração de Email

Configure o SMTP no arquivo `.env`:

```env
MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=seu_username
MAIL_PASSWORD=sua_senha
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=noreply@ekklesia.ao
MAIL_FROM_NAME="${APP_NAME}"
```

### 🎨 Personalização do Frontend

Para customizar o tema, edite o arquivo `tailwind.config.js`:

```javascript
export default {
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#10B981',
      }
    }
  }
}
```

---

## 💻 Uso

### 👤 Primeiro Acesso

Após a instalação, você pode acessar o sistema com o usuário administrador criado pelo seeder:

```
Email: admin@ekklesia.ao
Senha: password
```

⚠️ **Importante:** Altere as credenciais padrão imediatamente após o primeiro login.

### 🎯 Fluxo de Trabalho Básico

1. **Admin Nacional** cria as paróquias
2. **Admin Nacional** cria os admins paroquiais (pastores)
3. **Admin Paroquial** configura sua paróquia
4. **Admin Paroquial** cadastra membros
5. **Admin Paroquial** cria departamentos
6. **Admin Paroquial** atribui líderes aos departamentos
7. **Líderes** gerenciam seus respectivos ministérios

---

## 🔮 Roadmap

### ✅ Versão 1.0 (Atual)
- [x] Sistema de autenticação
- [x] Registro de usuários
- [x] Gestão básica de paróquias
- [ ] Módulo de membros (em desenvolvimento)
- [ ] Módulo financeiro (em desenvolvimento)

### 🚧 Versão 1.5 (Próxima)
- [ ] Dashboard nacional consolidado
- [ ] Sistema de notificações internas
- [ ] Gestão de eventos e cultos
- [ ] Emissão de relatórios em PDF
- [ ] Sistema de backup automático

### 🎯 Versão 2.0 (Futuro)
- [ ] Aplicação mobile (iOS/Android)
- [ ] Sistema de permissões granular
- [ ] Multi-tenancy completo
- [ ] Integração com gateway de pagamento
- [ ] Sistema de transmissão de cultos
- [ ] Portal do membro (self-service)

### 🌟 Versão 3.0 (Visão de Longo Prazo)
- [ ] Inteligência artificial para analytics
- [ ] Sistema de CRM para evangelismo
- [ ] Plataforma de ensino à distância (EAD)
- [ ] Marketplace de recursos ministeriais

---

## 🤝 Contribuição

Contribuições são **muito bem-vindas**! Este projeto está em desenvolvimento ativo e sua ajuda pode fazer a diferença.

### 📝 Como Contribuir

1. Faça um **Fork** do projeto
2. Crie uma **Branch** para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a Branch (`git push origin feature/MinhaFeature`)
5. Abra um **Pull Request**

### 🐛 Reportando Bugs

Encontrou um bug? Abra uma [issue](https://github.com/seu-usuario/ekklesia-sge/issues) detalhando:
- Descrição do problema
- Passos para reproduzir
- Comportamento esperado vs. atual
- Screenshots (se aplicável)
- Ambiente (SO, navegador, versão)

### 💡 Sugestões de Melhorias

Tem ideias para melhorar o sistema? Compartilhe através das [issues](https://github.com/seu-usuario/ekklesia-sge/issues) com a tag `enhancement`.

---

## 🛠 IDE Recomendada

Para melhor experiência de desenvolvimento:

### Visual Studio Code

**Extensões Recomendadas:**
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Suporte para Vue 3
- [Laravel Extension Pack](https://marketplace.visualstudio.com/items?itemName=onecentlin.laravel-extension-pack)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

⚠️ **Importante:** Desabilite a extensão **Vetur** se estiver instalada, pois pode conflitar com o Volar.

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📞 Contato

**Projeto Ekklesia - SGE**

📧 Email: contato@ekklesia.ao  
🌐 Website: [www.ekklesia.ao](https://www.ekklesia.ao)  
💬 Issues: [GitHub Issues](https://github.com/seu-usuario/ekklesia-sge/issues)

---

## 🙏 Agradecimentos

Agradecemos a todos que contribuíram e apoiaram o desenvolvimento deste projeto:

- **Igreja Evangélica Batista em Angola (IEBA)** - Por confiar na digitalização da gestão eclesiástica
- **Equipe de Desenvolvimento** - Por dedicação e excelência técnica
- **Comunidade Open Source** - Pelas ferramentas e bibliotecas que tornaram este projeto possível

---

<div align="center">

### 🌟 Se este projeto foi útil, considere dar uma estrela!

[![Star on GitHub](https://img.shields.io/github/stars/seu-usuario/ekklesia-sge?style=social)](https://github.com/seu-usuario/ekklesia-sge)

**Desenvolvido com ❤️ para a glória de Deus**

---

© 2024 Ekklesia - SGE. Todos os direitos reservados.

</div>