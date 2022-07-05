import { Injectable } from '@angular/core';
import { Book } from '../interface/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  public books: Book[] = [
    {
      image: "https://metaisach.com/wp-content/uploads/2019/01/sach-giao-khoa-dia-li-lop-11.jpg",
      class: "11",
      desc: "Sách Giáo Khoa Địa Lí Lớp 11"
    },
    {
      image: "https://metaisach.com/wp-content/uploads/2019/01/sach-giao-khoa-giao-duc-cong-dan-lop-11.jpg",
      class: "11",
      desc: "Sách Giáo Khoa Giáo Dục Công Dân Lớp 11"
    },
    {
      image: "https://metaisach.com/wp-content/uploads/2019/01/sach-giao-khoa-dia-li-lop-9.jpg",
      class: "9",
      desc: "Sách Giáo Khoa Địa Lí Lớp 9"
    },
    {
      image: "https://metaisach.com/wp-content/uploads/2019/01/sach-giao-khoa-hoa-hoc-lop-9.jpg",
      class: "9",
      desc: "Sách Giáo Khoa Hóa Học Lớp 9"
    },
  ]
  constructor() { }
}
