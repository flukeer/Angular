import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  // สร้าง Signal เก็บข้อมูลโปรไฟล์
  protected profile = signal({
    name: 'ฟลุ๊ค (Fluke)',
    title: 'Angular Developer / Anime Enthusiast',
    bio: 'สวัสดีครับ! ผมเป็นนักพัฒนาเว็บไซต์ที่ชื่นชอบการเขียนโค้ดและรักการดูอนิเมะ ยินดีที่ได้รู้จักทุกคนครับ 🚀',
    avatar: 'https://picsum.photos/seed/picsum/150/150', // ใส่ URL รูปโปรไฟล์ของคุณตรงนี้
    location: 'พระนครศรีอยุธยา, ประเทศไทย'
  });

  // สร้าง Signal เก็บช่องทางการติดต่อ (Social Links)
  protected socialLinks = signal([
    { name: 'GitHub', url: 'https://github.com/your-username', icon: '💻', color: '#333333' },
    { name: 'Gmail', url: 'mailto:your.email@gmail.com', icon: '✉️', color: '#EA4335' }
  ]);

  // สร้าง Signal เก็บผลงาน (Projects)
  protected projects = signal([
    { title: 'Anime Streaming App', desc: 'เว็บแอปพลิเคชันสำหรับค้นหาและตรวจสอบตารางฉายอนิเมะ ดึงข้อมูลจาก Jikan API', tech: 'Angular, CSS Grid, Signals' },
    { title: 'My First Portfolio', desc: 'เว็บไซต์แนะนำตัวและรวบรวมช่องทางการติดต่อสไตล์มินิมอล', tech: 'HTML, CSS, Component-Based' }
  ]);
}