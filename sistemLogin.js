import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const users = [
    { 
        username: "koda", 
        password: "12345" 
    },
    { 
        username: "bian", 
        password: "abc123" 
    },
    { 
        username: "admin", 
        password: "admin123" 
    },
    { 
        username: "user",
        password: "user123"
    },
];

let kesempatan = 0;

function Login() {
  rl.question("Masukkan username: ", (inputUser) => {
    rl.question("Masukkan password: ", (inputPass) => {
      kesempatan++;

      const dataUser = users.find(data => data.username === inputUser);

      if (!dataUser) {
        console.log("Username tidak ditemukan");
      } else if (dataUser.password !== inputPass) {
        console.log("Password salah!");
      } else {
        console.log(`Login berhasil! Selamat datang, ${inputUser}`);
        rl.close();
        return;
      }

      if (kesempatan >= 3) {
        console.log("Kesempatan habis! Sistem menutup.");
        rl.close();
      } else {
        console.log(`Percobaan tersisa: ${3 - kesempatan}\n`);
        Login();
      }
    });
  });
}

Login();