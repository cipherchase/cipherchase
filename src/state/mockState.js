const state = {
  isLoggedIn: true,
  codeChallenge: `let counter = 0;
for (let i = 0; i < test.length; i++) {
  counter += 1;
}`,
  cpuSpeed: Math.random() * 100,
  score: 0,
  gameActive: false,
}

export default state;
