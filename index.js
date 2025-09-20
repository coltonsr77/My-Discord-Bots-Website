// Uzi Discord Bot Website - Cool Interactive Script

// Animated welcome text
document.addEventListener("DOMContentLoaded", () => {
  const welcome = document.createElement("h1");
  welcome.id = "welcome-text";
  welcome.style.fontFamily = "Montserrat, sans-serif";
  welcome.style.fontSize = "2.5rem";
  welcome.style.textAlign = "center";
  welcome.style.marginTop = "2rem";
  document.body.appendChild(welcome);

  const message = "Welcome to Uzi Discord Bot!";
  let idx = 0;
  function typeWriter() {
    if (idx < message.length) {
      welcome.textContent += message.charAt(idx);
      idx++;
      setTimeout(typeWriter, 80);
    } else {
      setTimeout(() => {
        welcome.textContent += " 🚀";
      }, 400);
    }
  }
  typeWriter();

  // Cool animated background
  const canvas = document.createElement("canvas");
  canvas.id = "bg-canvas";
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100vw";
  canvas.style.height = "100vh";
  canvas.style.zIndex = "-1";
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  let stars = [];
  for (let i = 0; i < 100; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
    });
  }

  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff";
    stars.forEach((star) => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fill();
      star.x += star.dx;
      star.y += star.dy;
      if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
      if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
    });
    requestAnimationFrame(drawStars);
  }
  drawStars();

  // Interactive Discord Invite Button
  const inviteBtn = document.createElement("button");
  inviteBtn.textContent = "Invite Uzi Bot";
  inviteBtn.style.display = "block";
  inviteBtn.style.margin = "2rem auto";
  inviteBtn.style.padding = "1rem 2rem";
  inviteBtn.style.fontSize = "1.2rem";
  inviteBtn.style.background = "linear-gradient(90deg, #7289da, #99aab5)";
  inviteBtn.style.color = "#fff";
  inviteBtn.style.border = "none";
  inviteBtn.style.borderRadius = "25px";
  inviteBtn.style.cursor = "pointer";
  inviteBtn.style.boxShadow = "0 2px 12px rgba(114,137,218,0.2)";
  inviteBtn.onmouseover = () => {
    inviteBtn.style.background = "linear-gradient(90deg, #99aab5, #7289da)";
  };
  inviteBtn.onmouseout = () => {
    inviteBtn.style.background = "linear-gradient(90deg, #7289da, #99aab5)";
  };
  inviteBtn.onclick = () => {
    window.open("https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot", "_blank");
  };
  document.body.appendChild(inviteBtn);

  // Fun footer
  const footer = document.createElement("footer");
  footer.textContent = "Made with ❤️ by coltonsr77 · Uzi Discord Bot Website";
  footer.style.position = "fixed";
  footer.style.bottom = "10px";
  footer.style.width = "100%";
  footer.style.textAlign = "center";
  footer.style.color = "#7289da";
  footer.style.fontFamily = "Montserrat, sans-serif";
  document.body.appendChild(footer);
});
