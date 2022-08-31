const { createWorker } = require("tesseract.js");

const worker = createWorker();

(async () => {
  await worker.load();
  await worker.loadLanguage("por");
  await worker.initialize("por");
  const { data: { text } } = await worker.recognize(
    'https://cdn.discordapp.com/attachments/913498574921277450/1014528291555774496/test.png'
  );
  console.log(text);
  await worker.terminate();
})();