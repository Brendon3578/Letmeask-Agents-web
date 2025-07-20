# Letmeask Agents - Web

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2320232a.svg?style=for-the-badge&logo=tailwindcss&logoColor=%2338B2AC)

![Google Gemini](https://img.shields.io/badge/google%20gemini-8E75B2?style=for-the-badge&logo=google%20gemini&logoColor=white)
![Zod](https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

Este projeto é o frontend da plataforma **Letmeask Agents**, responsável pela interface interativa onde os usuários podem criar salas, enviar perguntas e visualizar respostas - sejam elas geradas manualmente ou por IA.

Ele também serve como uma aplicação prática para explorar conceitos como:

- Transcrição e compreensão de linguagem natural (NLU)
- Uso de IA generativa para educação
- Banco de dados vetoriais e embeddings
- Arquitetura moderna full-stack escalável
- Ideal para instituições, cursos online e qualquer cenário que envolva ensino com sessões gravadas.

<p align="center">
    <kbd>
        <img src="./.github/image01.png" style="border-radius: 5px" alt="Exemplo de execução" width="800px">
    </kbd>
</p>

<p align="center">
    <kbd>
        <img src="./.github/image02.png" style="border-radius: 5px" alt="Exemplo de execução" width="800px">
    </kbd>
</p>

<p align="center">
    <kbd>
        <img src="./.github/image03.png" style="border-radius: 5px" alt="Exemplo de execução" width="800px">
    </kbd>
</p>

Link do repositório da aplicação Backend: [Letmeask Agents - Server](https://github.com/Brendon3578/Letmeask-Agents-server)

## 🔮 Descrição do Projeto

Letmeask Agents é uma plataforma web de perguntas e respostas (Q&A) voltada para o ambiente educacional. Ela permite que autores criem salas interativas, compartilhem áudios explicativos sobre um conteúdo e recebam perguntas dos participantes.

O grande diferencial do projeto é a integração com a IA generativa Gemini, que transcreve os áudios enviados, gera representações vetoriais (embeddings) e, com base nisso, fornece respostas automáticas e contextuais para as perguntas feitas nas salas.

A aplicação permite criar salas de salas para que usuários façam perguntas, e a própria IA gera a resposta com base no conteúdo apresentado anteriormente pelo autor da sala.

---

## ⚙️ Funcionalidades da Aplicação

- **Interface de Criação de Salas**: Usuários autenticados podem criar salas para sessões de Q&A com conteúdo próprio.
- **Envio de Perguntas**: Participantes podem fazer perguntas diretamente dentro da sala.
- **Visualização de Respostas**: As respostas são exibidas na timeline da sala, podendo ser manuais ou geradas por IA com base nos áudios enviados.
- **Upload de Áudio pelo Autor**: O autor da sala pode gravar ou enviar áudios, que são usados como base para as futuras respostas automáticas.
- **Integração com Backend**: O frontend comunica-se com a API para enviar dados, recuperar perguntas e respostas, e iniciar o processo de transcrição/IA.
- **Experiência Intuitiva**: Desenvolvida com design limpo, foco em acessibilidade e performance otimizada.

---

## 🧰 Tecnologias Utilizadas

- [React](https://reactjs.org/) – Biblioteca JavaScript para construção de interfaces de usuário.
- [Vite](https://vitejs.dev/) – Bundler de aplicações web extremamente rápido.
- [Tailwind CSS](https://tailwindcss.com/) – Framework de estilos utilitários para construção de UI moderna.
- [shadcn/ui](https://ui.shadcn.dev/) – Conjunto de componentes acessíveis, construídos com Tailwind CSS e Radix UI.
- [Zod](https://zod.dev/) – Biblioteca para validação de dados com TypeScript.
- [React Hook Form](https://react-hook-form.com/) – Biblioteca para manipulação de formulários com foco em performance.
- [React Query](https://tanstack.com/query/latest) – Gerenciador de estado assíncrono para requisições com cache e sincronização.
- [Day.js](https://day.js.org/) – Biblioteca de manipulação de datas leve e com ótima compatibilidade.

---

## 🚀 Como Executar

### 1. Clonar o Repositório

```bash
git clone https://github.com/Brendon3578/letmeask-agents.git

cd letmeask-agents/web
```

### 2. Instalar as Dependências

```bash
npm install
```

### 3. Executar a Aplicação

```bash
npm run dev
```

A aplicação estará disponível em <http://localhost:5173> por padrão.

> [!WARNING]
> Não esqueça de configurar o arquivo `.env` com as variáveis necessárias antes de rodar o projeto, pegue como exemplo o arquivo `example.env`

---

<h3 align="center"> Feito com ☕ por <a href="https://github.com/Brendon3578">Brendon Gomes</a> </h3>
