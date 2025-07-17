# 📦 DocSave API

API RESTful desenvolvida com **NestJS**, **TypeScript** e **JWT**, projetada para autenticação, recuperação de senha e gerenciamento de usuários.

---

## 🚀 Tecnologias Utilizadas

- **[NestJS](https://nestjs.com/)** - Framework Node.js para aplicações escaláveis
- **TypeScript** - Tipagem forte e moderna para JavaScript
- **JWT (JSON Web Token)** - Autenticação segura
- **Passport.js** - Middleware para autenticação
- **class-validator** - Validação automática via decorators
- **Swagger (OpenAPI)** - Documentação automática da API

---

## 📂 Estrutura do Projeto

```bash
src/
├── auth/             # Módulo de autenticação
│   ├── strategy/     # Estratégias do Passport (JWT)
├── user/             # Módulo de usuários
├── common/           # DTOs e helpers compartilhados
├── main.ts           # Arquivo principal da aplicação
```

## 📄 Documentação da API

Após rodar a aplicação localmente, acesse:

**http://localhost:3000/api**

# Instalar dependências

yarn install

# Rodar em modo dev

yarn start:dev

# Build da aplicação

yarn build
