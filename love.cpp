#include <iostream>
#include <string>
#include <thread>
#include <chrono>

using namespace std;

int main() {
    cout << "💖 ========================================= 💖" << endl;
    cout << "💖     ХАЙРЫН C++ КОД - ЧАМД ЗОРИУЛАВ     💖" << endl;
    cout << "💖 ========================================= 💖" << endl << endl;
    
    string yourName = "Миний амьдралын хамгийн гоё хүн";
    int love = 100;
    
    while(love > 0) {
        cout << "💖 Чамд хайрлахгүй байж чадахгүй, " << yourName << "! 💖" << endl;
        love--;
        this_thread::sleep_for(chrono::milliseconds(50));
    }
    
    cout << endl << "✨ Үүрд чинийх... ✨" << endl;
    cout << "💘 Хязгааргүй хайраар, твой программист 💘" << endl;
    
    return 0;
}