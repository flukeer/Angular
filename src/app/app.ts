
import { Component, signal, inject } from '@angular/core';
// 1. เพิ่มการ import RouterOutlet จาก @angular/router
import { RouterOutlet, RouterLink, Router  } from '@angular/router';
import { HeaderComponent } from './components/header/header';{}

@Component({
  selector: 'app-root',
  // 2. ใส่ RouterOutlet ลงใน array imports
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
  name ="เอเอ"
  age= 30
  address = "พระนครศรีอยุธยา"
  imageurl="https://picsum.photos/seed/picsum/536/354"
  size = 200

  // 1. สร้างตัวแปร router โดยใช้คำสั่ง inject
  private router = inject(Router);

  showAddress(){
    return "ที่อยู่: "+this.address
  }

  doubleSize(){
    return this.size*2
  }

  showMessage(){
    alert("สวัสดีผมชื่อ ฟลุ๊ค")
  }

  // 2. สร้างฟังก์ชัน gotoAbout
  gotoAbout() {
    // ใส่ Logic เพิ่มเติมที่นี่ได้ เช่น alert("กำลังไปหน้า About นะ!")
    alert("กำลังเปลี่ยนหน้า")
    this.router.navigate(['/about']);
  }
}
