import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private http = inject(HttpClient);

  // ใช้ Signal เก็บข้อมูล Array ของอนิเมะ (ตัวเลือกแนะนำของ Angular ยุคใหม่)
  protected animeList = signal<any[]>([]);

  protected currentTitle = signal<string>(' อนิเมะอัปเดตวันจันทร์ ');

  protected searchQuery = signal<string>('');


  protected filteredAnimeList = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const list = this.animeList();

    if (!query) {
      return list;
    }

    // กรองหาจากชื่อเรื่อง (ตรวจสอบทั้งชื่อภาษาอังกฤษ และชื่อหลัก)
    return list.filter(anime => {
      const titleEnglish = (anime.title_english || '').toLowerCase();
      const titleDefault = (anime.title || '').toLowerCase();
      return titleEnglish.includes(query) || titleDefault.includes(query);
    });
  });

  ngOnInit(): void {
    // เริ่มต้นให้โหลดของวันจันทร์ก่อน
    this.changeCategory('monday');
  }

  changeCategory(type: 'monday' | 'upcoming') {
    let apiUrl = '';

    if (type === 'monday') {
      apiUrl = 'https://api.jikan.moe/v4/schedules/monday?sfw';
      this.currentTitle.set(' อนิเมะอัปเดตวันจันทร์ ');
    } else if (type === 'upcoming') {
      apiUrl = 'https://api.jikan.moe/v4/seasons/upcoming';
      this.currentTitle.set(' อนิเมะที่กำลังจะฉายเร็วๆ นี้ ');
    }

    // ล้างข้อมูลเก่าออกก่อน เพื่อให้ผู้ใช้เห็นว่ากำลังโหลดใหม่
    this.animeList.set([]);

    this.http.get<any>(apiUrl).subscribe({
      next: (response) => {
        this.animeList.set(response.data);
      },
      error: (err) => {
        console.error('ดึงข้อมูลอนิเมะผิดพลาด:', err);
      }
    });
  }
// ngOnInit(): void {
//   this.fetchAnimeSchedule();
// }

//   fetchAnimeSchedule() {
//     const apiUrl = 'https://api.jikan.moe/v4/schedules/monday?sfw';

//     this.http.get<any>(apiUrl).subscribe({
//       next: (response) => {
//         // จากโครงสร้าง JSON ข้อมูลอนิเมะทั้งหมดจะอยู่ในตัวแปร data
//         this.animeList.set(response.data);
//       },
//       error: (err) => {
//         console.error('ดึงข้อมูลอนิเมะผิดพลาด:', err);
//       }
//     });
//   }
}
