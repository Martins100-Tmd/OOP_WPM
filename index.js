const Word = document.getElementById('word');
const Timer = document.getElementById('time');
const Scores = document.getElementById('score');
const Text = document.getElementById('text');
const Minute = document.getElementById('min');
const Wpm = document.getElementById('wpm');
const Level = document.getElementById('level');
const Wps = document.getElementById('wps');
let scoreindex = -1;
const isover = false;
let time, interval, interval2, level, Status = false, timeclone, timeclone2;
Minute.onblur = () => {
    time = Minute.value;
    timeclone = time;
    timeclone2 = time;
    return time;
}
Level.onblur = () => {
    level = Level.value;
    return level;
}
word.innerHTML = "Start";
let level1 = [
    'America',
    'Algeria',
    'England',
    'Nigeria',
    'Switzerland',
    'Birmingham',
    'Philadelphia',
    'Vancouver',
    'Norway',
    'Bahamas',
    'Bahrain',
    'Banglasdesh',
    'Barbados',
    'Belgium',
    'Brazil',
    'Canada',
    'Cameroon',
    'Morocco',
    'Egypt',
    'Mexico',
    'Argentina',
    'Netherland'
];
let level2 = [
    'abstruse',
    'acknowledgment',
    'brusque',
    'boisterous',
    'caveat',
    'clairvoyant',
    'concomitant',
    'conspicuous',
    'delineate',
    'elliptical',
    'embellish',
    'extravagant',
    'gregarious',
    'inalienable',
    'infrastructure',
    'intransigence'
];
let level3 = [
    'Disingenuous',
    'Maelstrom',
    'Omnibus',
    'Labyrinth',
    'Promiscuous',
    'Gobbledygook',
    'Nefarious',
    'Reminisce',
    'bureaucracy',
    'extracurricular',
    'Quintessential',
    'kaleidoscope',
    'Chihuahua',
    'questionnaire',
    'nostalgia',
    'Machiavellian'
]
let level4 = [
    'Surveillance',
    'Idiosyncrasy',
    'Onomatopoeia',
    'Conscientious',
    'Malfeasance',
    'Antediluvian',
    'Foudroyant',
    'Stichomythia',
    'Milquetoast',
    'Feuilleton',
    'Eudemonic',
    'Acquiesce',
    'Chauffeur',
    'Demitasse',
    'Logorrhea',
    'Incorrigibility'
]
class rain {
    constructor(word, timer, scores, text, wpm, wps) {
        this.word = word
        this.timer = timer;
        this.scores = scores;
        this.text = text;
        this.wpm = wpm;
        this.wps = wps;
    }
    generateWord() {
        let randomWord;
        if (level == 'level1') {
            randomWord = level1[Math.floor(Math.random() * level1.length)];
        } else if (level == 'level2') {
            randomWord = level2[Math.floor(Math.random() * level2.length)];
        } else if (level == 'level3') {
            randomWord = level3[Math.floor(Math.random() * level3.length)];
        } else if (level == 'level4') {
            randomWord = level4[Math.floor(Math.random() * level4.length)];
        }
        return randomWord;
    }
    S() {
        return parseInt((this.scores.innerHTML));
    }
    insertWord() {
        this.word.innerHTML = this.generateWord();
    }
    status() {
        return (this.text.value == this.word.innerHTML);
    }
    inputClear() {
        this.text.value = "";
    }
    score(x) {
        this.scores.innerHTML = x;
    }
    Rate2() {
        if (timeclone2 == 60) {
            this.wpm.innerHTML = this.S() + "WPM";
        } else if (timeclone2 == 120) {
            this.wpm.innerHTML = this.S() / 2 + "WPM"
        } else if (timeclone2 == 180) {
            this.wpm.innerHTML = this.S() / 3 + "WPM"
        } else if (timeclone2 == 240) {
            this.wpm.innerHTML = this.S() / 4 + "WPM"
        } else if (timeclone2 == 300) {
            this.wpm.innerHTML = this.S() / 5 + "WPM"
        }
    }
    Timer(y) {
        if (y > 0) {
            interval = setInterval(() => {
                this.timer.innerHTML = y--;
            }, 1000);
        } else if (y == 0) {
            isover = true;
        }
    }
    clearTimer(x) {
        clearInterval(x);
    }
    clone() {
        return parseInt(timeclone);
    }
    Rate() {
        console.log(this.S() / this.clone());
        this.wps.innerHTML = (parseInt(this.S()) / this.clone()).toFixed(2) + "WPS";
    }
    Gameover() {
        this.text.setAttribute('disabled', true);
    }
}
Text.onclick = () => {
    let g = new rain(Word, Timer, Scores, Text, Wpm, Wps);
    if (level && time) {
        g.Timer(time);
        interval2 = setInterval(() => {
            time--;
            if (time === -1) {
                Status = true;
                g.Gameover();
                g.Rate();
                g.Rate2();
                g.clearTimer(interval);
                g.clearTimer(interval2);
            }
        }, 1000);
    }
}
const check = () => {
    let m = new rain(Word, Timer, Scores, Text, Wpm, Wps);
    if (m.status() == true) {
        scoreindex++;
        m.insertWord();
        m.inputClear();
        m.score(scoreindex);
    }
}
Text.oninput = check;