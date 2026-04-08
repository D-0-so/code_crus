import java.util.concurrent.TimeUnit;

public class LoveProgram {
    private String feeling = "Хязгааргүй хайр";
    private String[] loveMessages = {
        "Чи миний зүрхний цохилт",
        "Чи миний амьдралын утга учир",
        "Чамгүйгээр би дутуу",
        "Чи миний хамгийн сайхан алдаа"
    };
    
    public void showLove(String yourName) {
        System.out.println("💖 ========================================= 💖");
        System.out.println("💖      ХАЙРЫН JAVA КОД - ЧАМД ЗОРИУЛАВ     💖");
        System.out.println("💖 ========================================= 💖\n");
        
        for(int i = 0; i < 15; i++) {
            String msg = loveMessages[i % loveMessages.length];
            System.out.println(yourName + " ❤️ " + feeling + " → " + msg);
            try {
                TimeUnit.MILLISECONDS.sleep(300);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
        
        System.out.println("\n✨ Үүрд чинийх... ✨");
    }
    
    public static void main(String[] args) {
        LoveProgram heart = new LoveProgram();
        heart.showLove("Чи миний ертөнц");
        System.out.println("\n💘 Хязгааргүй хайраар, твой программист 💘");
    }
}