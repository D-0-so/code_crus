// Түгжээ нээх
let unlocked = false;

function startUnlocking() {
    if(unlocked) return;
    
    let lockDiv = document.querySelector('.lock-screen');
    lockDiv.style.opacity = '0.5';
    
    setTimeout(() => {
        lockDiv.style.display = 'none';
        document.getElementById('hiddenMessage').style.display = 'block';
        unlocked = true;
        loadAllCodes();
        alert("💪 Хөөх! Чи түгжээг нээлээ! \nОдоо жинхэнэ хөгжил эхэллээ 😄");
    }, 1000);
}

// Бүх кодыг ачаалах
function loadAllCodes() {
    // C++ код
    const cppCode = `#include <iostream>
using namespace std;

int main() {
    string yourName = "Миний амьдралын хамгийн гоё хүн";
    int love = 100;
    
    while(love > 0) {
        cout << "💖 Чамд хайрлахгүй байж чадахгүй 💖" << endl;
        love--;
    }
    
    cout << "Үүрд чинийх..." << endl;
    return 0;
}`;
    
    // Python код
    const pythonCode = `# Python - Зүрхний функц
def my_heart(you):
    love = float('inf')
    message_count = 0
    while message_count < 10:  # Хязгааргүй биш, харуулахын тулд 10 удаа
        print(f"💖 {you} - чи миний бүх утга учир 💖")
        message_count += 1
    return "үүрд хайртай"

print(my_heart("Та"))`;
    
    // Java код
    const javaCode = `// Java - Зүрхний объект
public class LoveProgram {
    private String feeling = "Хязгааргүй хайр";
    
    public void showLove(String yourName) {
        for(int i = 0; i < 10; i++) {
            System.out.println(yourName + " ❤️ " + feeling);
        }
    }
    
    public static void main(String[] args) {
        LoveProgram heart = new LoveProgram();
        heart.showLove("Чи миний ертөнц");
    }
}`;
    
    // SQL код
    const sqlCode = `-- SQL - Хайрын өгөгдлийн сан
CREATE TABLE MyHeart (
    id INT PRIMARY KEY,
    person VARCHAR(100),
    love_level INT DEFAULT 999999,
    message TEXT
);

INSERT INTO MyHeart (id, person, message) 
VALUES (1, 'Чи', 'Чи миний зүрхний цорын ганц өгөгдөл');

SELECT * FROM MyHeart WHERE person = 'Чи';
-- Үр дүн: Чи миний бүх өгөгдлийн сангийн гол түлхүүр 💕`;
    
    document.getElementById('cppCode').innerText = cppCode;
    document.getElementById('pythonCode').innerText = pythonCode;
    document.getElementById('javaCode').innerText = javaCode;
    document.getElementById('sqlCode').innerText = sqlCode;
}

// Симуляциуд
function runCppSimulation() {
    showSimulationOutput("C++", "💖 Чамд хайрлахгүй байж чадахгүй 💖\n💖 Чамд хайрлахгүй байж чадахгүй 💖\n...\nҮүрд чинийх...");
}

function runPythonSimulation() {
    let output = "";
    for(let i = 0; i < 10; i++) {
        output += "💖 Та - чи миний бүх утга учир 💖\n";
    }
    output += "үүрд хайртай";
    showSimulationOutput("Python", output);
}

function runJavaSimulation() {
    let output = "";
    for(let i = 0; i < 10; i++) {
        output += "Чи миний ертөнц ❤️ Хязгааргүй хайр\n";
    }
    showSimulationOutput("Java", output);
}

function runSQLSimulation() {
    let output = "✅ Table 'MyHeart' created successfully\n";
    output += "✅ 1 row inserted\n";
    output += "🔍 Query result:\n";
    output += "| id | person | love_level | message |\n";
    output += "| 1  | Чи     | 999999     | Чи миний зүрхний цорын ганц өгөгдөל |\n";
    output += "💕 Чи миний бүх өгөгдлийн сангийн гол түлхүүр";
    showSimulationOutput("SQL", output);
}

function showSimulationOutput(lang, output) {
    let existingOutput = document.querySelector(`.simulation-output[data-lang="${lang}"]`);
    if(existingOutput) {
        existingOutput.remove();
    }
    
    let outputDiv = document.createElement('div');
    outputDiv.className = 'simulation-output';
    outputDiv.setAttribute('data-lang', lang);
    outputDiv.innerHTML = `<strong>${lang} гаралт:</strong><br><pre style="margin:5px 0; white-space:pre-wrap;">${output}</pre>`;
    
    let buttons = document.querySelectorAll('.code-card button');
    for(let btn of buttons) {
        if(btn.innerText.includes(lang)) {
            btn.parentNode.insertBefore(outputDiv, btn.nextSibling);
            break;
        }
    }
    
    setTimeout(() => {
        if(outputDiv) outputDiv.remove();
    }, 5000);
}

// Оньсого
function checkRiddle() {
    let answer = document.getElementById('riddleAnswer').value.trim().toLowerCase();
    let feedback = document.getElementById('riddleFeedback');
    
    if(answer === "хайр" || answer === "love" || answer === "би чамд хайртай" || answer.includes("хайр")) {
        feedback.innerHTML = "🎉 ЯГ ЗӨВ! Чи гайхалтай! Код бүрэн нээгдлээ! 🎉";
        feedback.style.color = "lightgreen";
        feedback.style.fontWeight = "bold";
        document.getElementById('finalMessage').style.display = 'block';
        createFloatingHearts();
    } else {
        feedback.innerHTML = "🤣 Хөөх, буруу байна! Дахин бодоорой! (Сануулга: хайр, love)";
        feedback.style.color = "#ffcc00";
    }
}

// Хошин шог
const jokes = [
    "Яагаад программист хүйтэн өрөөнд дургүй вэ? Учир нь тэд 'Windows' хаалттай байдаг! 😂",
    "Чи: 'Би чамд хайртай' Компьютер: 'Хайр гэдэг хувьсагч тодорхойлогдоогүй байна' Чи: 'Тэгвэл одоо тодорхойлъё 💘'",
    "Программист яагаад эмэгтэй хүнтэй гэрлэсэн бэ? Учир нь түүний код 'compile' хийгдсэн! 💻💍",
    "Чи ба миний хайр бол 'while(true)' - хэзээ ч зогсохгүй! ❤️"
];

function showRandomJoke() {
    let randomIndex = Math.floor(Math.random() * jokes.length);
    document.getElementById('jokeDisplay').innerHTML = "🎭 " + jokes[randomIndex] + " 🎭";
}

// Гэнэтийн бэлэг
function showSurprise() {
    let surpriseDiv = document.createElement('div');
    surpriseDiv.style.position = 'fixed';
    surpriseDiv.style.top = '50%';
    surpriseDiv.style.left = '50%';
    surpriseDiv.style.transform = 'translate(-50%, -50%)';
    surpriseDiv.style.background = 'white';
    surpriseDiv.style.padding = '30px';
    surpriseDiv.style.borderRadius = '30px';
    surpriseDiv.style.zIndex = '1000';
    surpriseDiv.style.boxShadow = '0 0 50px rgba(0,0,0,0.5)';
    surpriseDiv.style.textAlign = 'center';
    surpriseDiv.innerHTML = `
        <div class="heart-animation">🎁💝🎁</div>
        <h3>ЧАМД ЗОРИУЛСАН ГЭНЭТИЙН БЭЛЭГ!</h3>
        <p>Энэ бол хамгийн үнэтэй код... ЧИНИЙ ИНЭЭМСЭГЛЭЛ 😊</p>
        <button onclick="this.parentElement.remove()">Хаах ❤️</button>
    `;
    document.body.appendChild(surpriseDiv);
}

// Хөвөгч зүрхнүүд
function createFloatingHearts() {
    for(let i = 0; i < 30; i++) {
        let heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.bottom = '-50px';
        heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
        heart.style.opacity = Math.random();
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        heart.style.animation = `floatHeart ${Math.random() * 3 + 2}s linear forwards`;
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), 5000);
    }
}

// CSS анимац нэмэх
const styleSheet = document.createElement("style");
styleSheet.textContent = `
    @keyframes floatHeart {
        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
        100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
    }
`;
document.head.appendChild(styleSheet);

// GitHub дээр оруулах
function shareOnGitHub() {
    alert("✨ GitHub дээр оруулахад бэлэн! ✨\n📁 Бүх файлууд: index.html, style.css, script.js, love.cpp, love.py, LoveProgram.java, heart_database.sql\n💝 Хайрын лицензтэй код");
    window.open("https://github.com", "_blank");
}

// Консол мессеж
console.log("%c💖 ЧАМД ЗОРИУЛСАН КОД 💖", "color: red; font-size: 20px; font-weight: bold;");
console.log("%cЭнэ кодыг нээхэд маш их хүчин чармайлт шаардсан... Гэхдээ чамд зориулсан бол бүх зүйл үнэ цэнэтэй 💕", "color: purple; font-size: 14px;");