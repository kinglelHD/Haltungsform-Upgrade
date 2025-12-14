const PIG = [
    [ // Haltungsform 1
        ["Preis", "98,12ct/100g"],
        ["Platz pro Tier", "0,75m²"],
        ["Zugang zu Außenklima", "Kein Zugang"],
        ["Beschäftigung", "Mindestanforderung (Stroh, Holz, einfache Materialien)"],
        ["Futter", "Konventionelles Futter (Soja, Getreide)"]
    ],[
        // 2
        ["Preis", ""],
        ["Platz pro Tier", "0,84m²"],
        ["Zugang zu Außenklima", "Kein Zugang"],
        ["Beschäftigung", "Mehr Beschäftigungsmaterial (Stroh, Picksteine, Raufutter)"],
        ["Futter", "Hochwertigere Futtermischung, teilweise mit Raufutter"]
    ],[
        //3
        ["Preis", ""],
        ["Platz pro Tier", "1,3m²"],
        ["Zugang zu Außenklima", "Zugang zu Außenklimabereichen"],
        ["Beschäftigung", "Erweiterte Beschäftigungsmöglichkeiten (zusätzliche Wühlmaterialien, Picksteine)"],
        ["Futter", "Hochwertiges, gentechnikfreies Futter, oft regional"]
    ],[
        //4
        ["Preis", ""],
        ["Platz pro Tier", "1,5m², davon 0,5m² im Auslauf"],
        ["Zugang zu Außenklima", "Weide- oder Freilaufhaltung"],
        ["Beschäftigung", "Vielfältige Beschäftigungsmaterialien (Wühlmöglichkeiten, Scharren, Stroh, Raufutter)"],
        ["Futter", "Futtermittel ohne Gentechnik, mind. 60 % der Futtermittel aus dem eigenen Betrieb bzw. aus der Region"]
    ],[
        //5
        ["Preis", ""],
        ["Platz pro Tier", "1,5m² im Stall und 1,2m² Auslauffläche"],
        ["Zugang zu Außenklima", "Laufstallhaltung mit Auslauf oder Weide"],
        ["Beschäftigung", "Vielfältige Beschäftigungsmaterialien (Wühlmöglichkeiten, Scharren, Stroh, Raufutter)"],
        ["Futter", "Ausschließlich Futtermittel ohne Gentechnik, Futtermittel müssen aus ökologischer Erzeugung stammen"]
    ]
]
const COW = [
    [ // Haltungsform 1
        ["Preis", ""],
        ["Platz pro Tier", "2,2m²"],
        ["Zugang zu Außenklima", "Kein Zugang"],
        ["Beschäftigung", "Mindestanforderung (Stroh, Holz, einfache Materialien)"],
        ["Futter", "Konventionelles Futter (Soja, Getreide)"]
    ],[
        // 2
        ["Preis", ""],
        ["Platz pro Tier", "3,0m²"],
        ["Zugang zu Außenklima", "Kein Zugang"],
        ["Beschäftigung", "Mehr Beschäftigungsmaterial (Stroh, Picksteine, Raufutter)"],
        ["Futter", "Hochwertigere Futtermischung, teilweise mit Raufutter"]
    ],[
        //3
        ["Preis", ""],
        ["Platz pro Tier", "4,0m²"],
        ["Zugang zu Außenklima", "Zugang zu Außenklimabereichen"],
        ["Beschäftigung", "Erweiterte Beschäftigungsmöglichkeiten (zusätzliche Wühlmaterialien, Picksteine)"],
        ["Futter", "Hochwertiges, gentechnikfreies Futter, oft regional"]
    ],[
        //4
        ["Preis", ""],
        ["Platz pro Tier", "5m², aber mind. 1m²/100 kg"],
        ["Zugang zu Außenklima", "Weide- oder Freilaufhaltung"],
        ["Beschäftigung", "Vielfältige Beschäftigungsmaterialien (Wühlmöglichkeiten, Scharren, Stroh, Raufutter)"],
        ["Futter", "Futtermittel ohne Gentechnik, mind. 60 % der Futtermittel aus dem eigenen Betrieb bzw. aus der Region"]
    ],[
        //5
        ["Preis", ""],
        ["Platz pro Tier", "5m², aber mind. 1m²/100 kg"],
        ["Zugang zu Außenklima", "Laufstallhaltung mit Auslauf oder Weide"],
        ["Beschäftigung", "Vielfältige Beschäftigungsmaterialien (Wühlmöglichkeiten, Scharren, Stroh, Raufutter)"],
        ["Futter", "Ausschließlich Futtermittel ohne Gentechnik, Futtermittel müssen aus ökologischer Erzeugung stammen"]
    ]
]
const CHICKEN = [
    [ // Haltungsform 1
        ["Preis", ""],
        ["Platz pro Tier", "39kg/m²"],
        ["Zugang zu Außenklima", "Kein Zugang"],
        ["Beschäftigung", "Mindestanforderung (Stroh, Holz, einfache Materialien)"],
        ["Futter", "Konventionelles Futter (Soja, Getreide)"]
    ],[
        // 2
        ["Preis", ""],
        ["Platz pro Tier", "35kg/m²"],
        ["Zugang zu Außenklima", "Kein Zugang"],
        ["Beschäftigung", "Mehr Beschäftigungsmaterial (Stroh, Picksteine, Raufutter)"],
        ["Futter", "Hochwertigere Futtermischung, teilweise mit Raufutter"]
    ],[
        //3
        ["Preis", ""],
        ["Platz pro Tier", "29kg/m²"],
        ["Zugang zu Außenklima", "Zugang zu Außenklimabereichen"],
        ["Beschäftigung", "Erweiterte Beschäftigungsmöglichkeiten (zusätzliche Wühlmaterialien, Picksteine)"],
        ["Futter", "Hochwertiges, gentechnikfreies Futter, oft regional"]
    ],[
        //4
        ["Preis", ""],
        ["Platz pro Tier", "25kg/m²"],
        ["Zugang zu Außenklima", "Weide- oder Freilaufhaltung"],
        ["Beschäftigung", "Vielfältige Beschäftigungsmaterialien (Wühlmöglichkeiten, Scharren, Stroh, Raufutter)"],
        ["Futter", "Futtermittel ohne Gentechnik, mind. 60 % der Futtermittel aus dem eigenen Betrieb bzw. aus der Region"]
    ],[
        //5
        ["Preis", ""],
        ["Platz pro Tier", "21kg/m²"],
        ["Zugang zu Außenklima", "Laufstallhaltung mit Auslauf oder Weide"],
        ["Beschäftigung", "Vielfältige Beschäftigungsmaterialien (Wühlmöglichkeiten, Scharren, Stroh, Raufutter)"],
        ["Futter", "Ausschließlich Futtermittel ohne Gentechnik, Futtermittel müssen aus ökologischer Erzeugung stammen"]
    ]
]

const main = document.getElementById('main')
const pig_div = document.getElementById('pig-div')
const cow_div = document.getElementById('cow-div')
const chicken_div = document.getElementById('chicken-div')

class Animal {
    constructor(data, animal_type) {

        this.data = data
        this.animal_type = animal_type
        this.haltungsform = 1
        
        this.div = document.createElement('div')

        this.img_div = document.createElement('div')
        this.img_div.classList.add('img')
        this.img = document.createElement('img')
        this.img_div.appendChild(this.img)
        this.div.appendChild(this.img_div)

        this.table = document.createElement('table')
        this.table.classList.add('table')
        this.div.appendChild(this.table)

        this.btn_div = document.createElement('div')
        this.btn_div.classList.add('btn')

        this.downgrade_btn = document.createElement('button')
        this.downgrade_btn.classList.add('downgrade-btn')
        this.downgrade_btn.innerText = 'Zurück'
        this.downgrade_btn.onclick = () => {
            if (this.haltungsform > 1) {
                this.haltungsform --
                this.update()
            }
        }
        this.btn_div.appendChild(this.downgrade_btn)
        
        this.upgrade_btn = document.createElement('button')
        this.upgrade_btn.classList.add('upgrade-btn')
        this.upgrade_btn.innerText = 'Upgrade'
        this.upgrade_btn.onclick = () => {
            if (this.haltungsform < 5) {
                this.haltungsform ++
                this.update()
            }
        }
        this.btn_div.appendChild(this.upgrade_btn)

        this.div.appendChild(this.btn_div)

        this.update()
        main.appendChild(this.div)

    }

    update() {
        this.div.classList = `animal-div haltungsform-${this.haltungsform}`
        this.img.src = `assets/${this.animal_type}/${this.haltungsform}.png`

        this.table.innerHTML = ""
        this.data[this.haltungsform - 1].forEach(fact => {
            let tr = document.createElement('tr')
            let th = document.createElement('th')
            let td = document.createElement('td')
            th.innerText = fact[0]
            td.innerText = fact[1]
            tr.appendChild(th)
            tr.appendChild(td)

            this.table.appendChild(tr)
        });
    }
}

const animals = [new Animal(PIG, "pig"), new Animal(COW, "cow"), new Animal(CHICKEN, "chicken")]
let current_animal = "pig"
select_pig()

function select_pig() {
    current_animal = "pig"
    pig_div.classList.add('active')
    cow_div.classList.remove('active')
    chicken_div.classList.remove('active')
    animals[0].div.style.display = 'grid'
    animals[1].div.style.display = 'none'
    animals[2].div.style.display = 'none'
}
function select_cow() {
    current_animal = "cow"
    pig_div.classList.remove('active')
    cow_div.classList.add('active')
    chicken_div.classList.remove('active')
    animals[0].div.style.display = 'none'
    animals[1].div.style.display = 'grid'
    animals[2].div.style.display = 'none'
}
function select_chicken() {
    current_animal = "chicken"
    pig_div.classList.remove('active')
    cow_div.classList.remove('active')
    chicken_div.classList.add('active')
    animals[0].div.style.display = 'none'
    animals[1].div.style.display = 'none'
    animals[2].div.style.display = 'grid'
}

pig_div.onclick = select_pig
pig_div.addEventListener('keypress', e => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        select_pig()
    }
})
cow_div.onclick = select_cow
cow_div.addEventListener('keypress', e => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        select_cow()
    }
})
chicken_div.onclick = select_chicken
chicken_div.addEventListener('keypress', e => {
    console.log(e);
    
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        select_chicken()
    }
})


let startX
let endX
window.addEventListener('touchstart', e => {
    startX = e.changedTouches[0].screenX
})
window.addEventListener('touchend', e => {
    endX = e.changedTouches[0].screenX

    if((startX - endX) > 100) {
        if (current_animal === "cow") {
            select_chicken()
        } else if (current_animal === "chicken") {
            select_pig()
        } else {
            select_cow()
        }
    } else if ((endX - startX) > 100) {
        if (current_animal === "cow") {
            select_pig()
        } else if (current_animal === "chicken") {
            select_cow()
        } else {
            select_chicken()
        }
    }
})