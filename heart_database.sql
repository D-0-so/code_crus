-- =============================================
-- 💖 ХАЙРЫН ӨГӨГДЛИЙН САН - ЧАМД ЗОРИУЛАВ 💖
-- =============================================

-- Хайрын өгөгдлийн сан үүсгэх
CREATE DATABASE IF NOT EXISTS HeartDatabase;
USE HeartDatabase;

-- Зүрхний хүснэгт
CREATE TABLE IF NOT EXISTS MyHeart (
    id INT PRIMARY KEY AUTO_INCREMENT,
    person VARCHAR(100) NOT NULL,
    love_level INT DEFAULT 999999,
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Чиний тухай өгөгдөл оруулах
INSERT INTO MyHeart (person, love_level, message) 
VALUES 
    ('Чи', 999999, 'Чи миний зүрхний цорын ганц өгөгдөл'),
    ('Чиний инээмсэглэл', 1000000, 'Миний өдрийг гэрэлтүүлдэг'),
    ('Чиний дуу хоолой', 999999, 'Миний сонсох дуртай хөгжим');

-- Хайрын түвшинг шалгах
SELECT person, love_level, message 
FROM MyHeart 
WHERE person = 'Чи'
ORDER BY love_level DESC;

-- Бүх хайрыг харах
SELECT COUNT(*) as total_love_records FROM MyHeart;

-- Хайрын статистик
SELECT 
    person,
    CASE 
        WHEN love_level >= 1000000 THEN 'Хязгааргүй хайр'
        WHEN love_level >= 500000 THEN 'Маш их хайр'
        ELSE 'Их хайр'
    END as love_category,
    message
FROM MyHeart;

-- 💖 Үр дүн: Чи миний бүх өгөгдлийн сангийн гол түлхүүр 💖