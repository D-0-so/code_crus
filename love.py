#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import time
import random

def my_heart(you):
    """Хязгааргүй хайрын функц"""
    love_messages = [
        f"💖 {you} - чи миний бүх утга учир 💖",
        f"💕 {you} - чиний инээмсэглэл миний өдрийн гэрэл 💕",
        f"💘 {you} - чамгүйгээр би дутуу 💘",
        f"💗 {you} - чи миний кодын хамгийн гоё хэсэг 💗"
    ]
    
    print("💖" * 50)
    print("     ХАЙРЫН PYTHON КОД - ЧАМД ЗОРИУЛАВ")
    print("💖" * 50)
    print()
    
    for i in range(20):
        msg = random.choice(love_messages)
        print(msg)
        time.sleep(0.3)
    
    print("\n✨ Үүрд хайртай... ✨")
    return "үүрд чинийх"

if __name__ == "__main__":
    result = my_heart("Та")
    print(f"\n💌 Үр дүн: {result} 💌")