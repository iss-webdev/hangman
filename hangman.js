const underScore = document.getElementById("underscore");
const btn = document.getElementById("btn");
const sol = document.getElementById("solution");
const guess1 = document.getElementById("guess-1")

let correctLetters = [];
//taking api link
const url = "https://random-word-api.vercel.app/api?words=1";

async function hangman() {
    const fetching = await fetch(url)
        .then(data => data.json())
    // console.log(fetching[0].length)
    console.log(fetching[0]);

    const answer = fetching[0];
    // array.push(answer)

    btn.addEventListener('click', () => {
        const value = underScore.value.toLowerCase();
        console.log(value)
        // array.push(value);   
        // console.log(btnCount)

        if (value === answer) {
            console.log('you won');
            setTimeout(() => {
                location.reload();
            }, 3000)
        }

        const obj = Object.values(answer);
        // console.log(obj)
        const obj2 = Object.values(value)
        // console.log(obj2)

        for (let i = 0; i < obj.length; i++) {
            if (obj[i] === obj2[i]) {
                console.log(obj2[i])
                correctLetters.push(obj2[i])
            } else {
                correctLetters.push("_ ")
                // console.log(length)
            }


            const letters = correctLetters.join("")
            sol.innerHTML = letters;
            // console.log()

        //     if (letters == 4 || 3) {
        //         correctLetters = []
        //     } else {
        //         console.log
        //     }
         }
    })
}

hangman()

