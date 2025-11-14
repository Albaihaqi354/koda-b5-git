import readline from "node:readline"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tebakNum = Math.floor(Math.random() * 100) + 1;
let JumTebakan = 0

function tebakan() {
    rl.question("Masukan Tebakan:", (input) => {
        const inpUser = parseInt(input)
        JumTebakan++

        if(inpUser === tebakNum){
            console.log(`tebakan Benar ${tebakNum},y anda menebak ${JumTebakan} Tebakan`)
            rl.close()
        } else if (inpUser < tebakNum) {
            console.log("Tebak Lebih besar")
            tebakan()
        } else {
            console.log("Tebakan Lebih Kecil");
            tebakan()
        }
    })
}

tebakan();