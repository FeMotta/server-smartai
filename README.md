<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
</head>
<body>
  <header>
    <h1>Typescript Question and Answering with OpenAI API</h1>
    <img src="https://blogs.swarthmore.edu/its/wp-content/uploads/2022/05/openai.jpg" alt="OpenAi Logo">
  </header>
  <main>
    <section>
      <h2>Installation 🛠️</h2>
      <ol>
        <li>Clone the repository to your local machine.</li>
        <li>Install the dependencies using <code>npm install</code>.</li>
        <li>Start the application using <code>npm run dev</code>.</li>
      </ol>
    </section>
    <section>
      <h2>Usage 🚀</h2>
  <p>To use this application, you will need to provide the following environment variables before starting the application:</p>
  <ul>
    <li><code>OPENAI_API_KEY</code>: The API key for OpenAI's GPT-3 API.</li>
    <li><code>PORT</code>: The port number that the application should listen on. The default is <code>3001</code>.</li>
    <li><code>HOST</code>: The host that the application should bind to. The default is <code>localhost</code>.</li>
    <li><code>CORS_ORIGIN</code>: The origin that is allowed to access the API. This is necessary if the application is being accessed from a different domain or port than the one it is running on. For example: <code>http://111.111.1.11:3000</code>.</li>
  </ul>
  <p>You can set these environment variables either by setting them in your shell environment or by creating a <code>.env</code> file in the root of the project and setting them there. For example:</p>
  <pre><code>OPENAI_API_KEY=your-open-api-key
PORT=3001
HOST=111.111.1.11
CORS_ORIGIN=http://111.111.1.11:3000</code></pre>
  <p>Once the application is running, you can send a POST request to the <code>/api/generate-question</code> endpoint to generate questions and get answers. For example:</p>
<pre><code>{
    "topic": "matematica",
    "level": "dificil"
}
</code></pre>
</code></pre>
      <p>The output of the above code will be the answer to the generated question.</p>
    </section>
        <section>
      <h2>Contributing 🤝</h2>
      <p>If you would like to contribute to this project, please follow these steps:</p>
      <ol>
        <li>Fork the repository and create a new branch for your changes.</li>
        <li>Make your changes and commit them with clear and concise commit messages.</li>
        <li>Push your changes to your forked repository.</li>
        <li>Open a pull request to the <code>main</code> branch of this repository.</li>
      </ol>
    </section>
    <section>
      <h2>License 📝</h2>
      <p>This project is licensed under the <a href="./LICENSE">MIT License</a>.</p>
    </section>
  </main>
  <hr>
  <footer>
    Created by <a href="https://github.com/FeMotta">Fernando Motta</a> - Let's connect on <a href="https://www.linkedin.com/in/fernando-motta-dev/">LinkedIn</a>!
  </footer>
</body>
</html>

