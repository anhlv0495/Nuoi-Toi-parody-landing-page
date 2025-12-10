# Nuoi-Toi-parody-landing-page
# 🥣 Nuôi Tôi – Landing page minh bạch, vui vẻ, không drama

Đây là một **landing page parody** kiểu “nuôi tôi mỗi tháng”, tập trung vào sự **minh bạch chi tiêu** và tấu hài là chính.  
Mọi số liệu trong bản mặc định đều là **fake/demo**, mục đích để bạn:

- Dùng làm playground HTML/CSS/JS
- Tự custom thành dự án cá nhân
- Show portfolio trên GitHub / GitHub Pages


---

## ✨ Tính năng chính

- 🎯 **Hero “xin nuôi”**: Giải thích nhẹ nhàng, hài hước về concept “nuôi tôi”.
- 📊 **Sao kê mini / Today Transactions**:  
  Danh sách chi tiêu trong ngày (fake) được render từ `script.js`.
- 💰 **Mục tiêu tháng & progress bar**:  
  Thanh tiến độ hiển thị % hoàn thành mục tiêu (VD: 3.000.000₫/tháng).
- 🍜 **Chi tiết phân bổ chi tiêu**:  
  Các mục như ăn uống, điện nước, phòng, sức khỏe, học tập, giải trí.
- 📡 **Live log (demo)**:  
  Fake log chạy realtime kiểu “log server nghèo nàn nhưng chăm chỉ”.
- 📱 **Donate section**:
  - Chỗ đặt QR code của bạn (Momo/ZaloPay/Bank…)
  - Nút “Giả lập donate” để test UI và log.
- ❓ **FAQ**:  
  Một số câu hỏi/đáp kiểu kể khổ vui vui, không bi lụy.
- 🎨 **Responsive**:  
  Layout dùng grid + flex, chạy ổn trên desktop & mobile.

---

## 🛠 Tech stack

- **HTML5**.
- **CSS3**.
- **JavaScript**:
  - Fake dữ liệu chi tiêu / donate
  - Update số liệu, thanh tiến độ
  - Fake realtime log

Không dùng build tool / bundler → chỉ cần mở `index.html` là chạy.

---

## 📂 Cấu trúc thư mục

```bash
.
├── index.html      # Trang chính
├── style.css       # Toàn bộ CSS
└── script.js       # Logic fake data, log, donate, progress...
