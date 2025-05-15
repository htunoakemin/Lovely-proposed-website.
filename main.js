const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const message = document.querySelector(".message");

let noClickCount = 0;

yesBtn.addEventListener("click", () => {
  question.textContent = "Aaaaa, I like you too!";
  gif.src = "https://i.pinimg.com/originals/a4/cd/4d/a4cd4d37d90e1185047d4bc59e0ce52d.gif";
  message.className = "message love";
  message.textContent = `The whole day felt kind of magical ☀️. No rain, just clear skies — like the sun was smiling just for me. It was one of those moments where the world suddenly feels lighter 🌟.

Then she said it...
“I love you ❤️.”

And wow — my heart actually skipped a beat 😳💗. I didn’t even know that really happened until then.

Even the air felt different after that. Like her presence was in everything — the breeze, the warmth, the way the light hit the trees 🌬️🌸.

Suddenly, everything looked a little more beautiful. A little more alive 🎈✨.

Her words? They lit up my whole day ☀️. And something in me just felt... peaceful. Safe. 🧘‍♂️💞

That moment — those few seconds — they’re gonna stay with me. Forever. 🥰📸`;
});

noBtn.addEventListener("click", () => {
  noClickCount++;

  if (noClickCount === 1) {
    noBtn.textContent = "Sure😡";
    message.className = "message sad";
    message.textContent = "Are you sure? 🤔";
    moveButtonRandomly();
  } else if (noClickCount === 2) {
    noBtn.textContent = "Of course.😼";
    message.className = "message sad";
    message.textContent = "Really really sure? 😢";
    moveButtonRandomly();
  } else {
    question.textContent = "Hmm...";
    gif.src = "https://i.pinimg.com/originals/d7/f5/87/d7f587da442a54025daf47091fe26ba0.gif";
    message.className = "message sad";
    message.textContent = `It was just one word, but it felt like the whole world quieted for a second 💔
Something in me sank. But in her eyes…
I saw it — a softness, maybe even a part of her that wanted to say “Yes” 🥺✨

Her “No” wasn’t cold.
It wasn’t rejection. It felt more like a gentle pause — like the world just wasn’t ready for us yet 🕰️🌌

Did it hurt? Yeah, it did…
But the way she cared, the way she didn’t just walk away — it was beautiful in its own way 🩷🌷

And maybe one day, when the time is kinder,
That “No” will turn into a “Yes.”
Until then… I’ll keep the hope safe in my heart 💖🌈`;

    noBtn.textContent = "No";
    noBtn.style.left = "";
    noBtn.style.top = "";
  }
});

// Function to move button randomly
function moveButtonRandomly() {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}
