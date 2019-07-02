const initialState = {
  isLoggedIn: false,
  codeChallenge: `let counter = 0;
for (let i = 0; i < test.length; i++) {
  counter += 1;
}`,
  cpuSpeed: 50 + Math.random() * 50,
  score: 0,
  gameActive: false,
};

export default initialState;
