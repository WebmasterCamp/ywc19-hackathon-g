import { Course } from './enum'

export const courses: Course[] = [
  {
    id: '1',
    name: 'ต่อเติม ซ่อมแซมบ้าน',
    description: 'เรียนรู้งานการก่อโครงหลังคาเหล็ก ต่อเติมบ้าน',
    location: 'กรุงเทพมหานคร',
    lesson: [
      {
        lessonNo: 1,
        title: 'เรียนรู้งานการก่อโครงหลังคาเหล็ก',
        dateTime: '2023-07-06 06:31:34',
      },
    ],
    duration: '5 อาทิตย์ (30 ชั่วโมง)',
    certificate: true,
    test: true,
    img: '/images/course-1.png',
  },
  {
    id: '2',
    name: 'ปูกระเบื้อง 101',
    description: 'เรียนรู้การปูกระเบื้อง พร้อมปฏิบัติจริง',
    location: 'กรุงเทพมหานคร',
    lesson: [],
    duration: '2 อาทิตย์ (6 ชั่วโมง)',
    certificate: true,
    test: true,
    img: '/images/course-2.png',
  },
  {
    id: '3',
    name: 'เดินสาย LAN',
    description: 'Workshop เดินสาย LAN งานขนาดเล็ก',
    location: 'กรุงเทพมหานคร',
    lesson: [],
    duration: '2 อาทิตย์ (6 ชั่วโมง)',
    certificate: true,
    test: true,
    img: '/images/course-3.png',
  },
  {
    id: '4',
    name: 'ติดตั้งที่ชาร์จรถไฟฟ้า',
    description: 'เรียนรู้การติดตั้งที่ชาร์จรถไฟฟ้าสำหรับบ้านเรือน',
    location: 'กรุงเทพมหานคร',
    lesson: [],
    duration: '1 วัน (3 ชั่วโมง)',
    certificate: true,
    img: '/images/course-4.png',
  },
  {
    id: '5',
    name: 'ติดตั้งโซล่าเซลล์',
    description: 'เรียนรู้การติดตั้งและดูแลโซล่าเซลล์ตามบ้านเรือน',
    location: 'กรุงเทพมหานคร',
    lesson: [],
    duration: '2 วัน (3 ชั่วโมง)',
    certificate: true,
    test: true,
    img: '/images/course-5.png',
  },
  {
    id: '6',
    name: 'ติดตั้ง/ซ่อมปั๊มน้ำ',
    description: 'เรียนรู้การติดตั้งและซ่อมปั๊มน้ำขนาดเล็ก',
    lesson: [],
    location: 'กรุงเทพมหานคร',
    duration: '1 วัน (3 ชั่วโมง)',
    certificate: true,
    img: '/images/course-6.png',
  },
]
