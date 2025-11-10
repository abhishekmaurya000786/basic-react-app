// heavy.js

export function veryHeavy() {
  console.log("🧠 Giant feature added ..!");
  alert("Heavy feature loading completed!");
}

export function dataCrunching() {
  console.log("📊 Crunching massive dataset...");
  let sum = 0;
  for (let i = 0; i < 1e7; i++) sum += i; // simulate heavy task
  alert(`Data processed! Sum = ${sum}`);
}

export function aiModelLoad() {
  console.log("🤖 Loading 2GB AI model...");
  alert("AI Model loaded successfully and ready for inference!");
}
