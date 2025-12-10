// Fake data demo
const MOCK_TRANSACTIONS = [
    {
        title: "Bữa sáng: cơm + trứng",
        amount: 25000,
        time: "07:30",
        note: "Ăn no để còn code"
    },
    {
        title: "Cà phê vỉa hè",
        amount: 20000,
        time: "09:10",
        note: "Tỉnh táo đọc sao kê"
    },
    {
        title: "Bữa trưa: cơm bình dân",
        amount: 35000,
        time: "12:15",
        note: "Không gọi thêm món"
    },
    {
        title: "Tiền data 4G",
        amount: 30000,
        time: "14:00",
        note: "Để push code lên GitHub"
    },
    {
        title: "Bữa tối: mì gói",
        amount: 15000,
        time: "19:45",
        note: "Hết tiền ăn sang"
    }
];

const MOCK_DONATE_LOG = [
    "Nhận 50.000₫ từ @anonymouse – ghi chú: 'ăn sáng đi bạn'",
    "Nhận 20.000₫ từ @devmobile – ghi chú: 'push code chăm chỉ vào'",
    "Nhận 100.000₫ từ @richkid – ghi chú: 'nuôi lâu dài nhé'",
    "Nhận 10.000₫ từ @random – ghi chú: 'test chuyển khoản'",
];

const GOAL = 3000000;
let currentAmount = 0;
let supporterCount = 0;

// Helper format tiền VNĐ
function formatCurrency(vnd) {
    return vnd.toLocaleString("vi-VN") + "₫";
}

function $(selector) {
    return document.querySelector(selector);
}

function renderTodayTransactions() {
    const list = $("#today-transactions");
    if (!list) return;

    list.innerHTML = "";

    MOCK_TRANSACTIONS.forEach((tx) => {
        const li = document.createElement("li");
        li.className = "transaction";

        li.innerHTML = `
            <div class="transaction-left">
                <span class="transaction-title">${tx.title}</span>
                <span class="transaction-meta">${tx.time} • ${tx.note}</span>
            </div>
            <div class="transaction-amount">
                -${formatCurrency(tx.amount)}
            </div>
        `;

        list.appendChild(li);
    });
}

function updateMetricsDisplay() {
    const totalEl = $("#total-donate");
    const supportersEl = $("#supporters-count");
    const percentEl = $("#progress-percent");
    const detailEl = $("#progress-detail");
    const fillEl = $("#progress-fill");

    if (totalEl) totalEl.textContent = formatCurrency(currentAmount);
    if (supportersEl) supportersEl.textContent = supporterCount;

    const percent = Math.min(100, Math.round((currentAmount / GOAL) * 100));
    if (percentEl) percentEl.textContent = percent + "%";
    if (detailEl) detailEl.textContent = `${formatCurrency(currentAmount)} / ${formatCurrency(GOAL)}`;
    if (fillEl) fillEl.style.width = percent + "%";
}

function log(message) {
    const logList = $("#log-list");
    if (!logList) return;

    const line = document.createElement("div");
    line.className = "log-line";

    const now = new Date();
    const timeStr = now.toTimeString().slice(0, 8);

    line.innerHTML = `<span class="log-time">[${timeStr}]</span> ${message}`;

    logList.appendChild(line);
}

// Giả lập log chi tiêu liên tục
function startFakeRealtimeLog() {
    const sample = [
        "Cập nhật sao kê ngày mới…",
        "Kiểm tra tồn quỹ… ok.",
        "Đang gửi báo cáo tới server tưởng tượng…",
        "Tự nhắc bản thân không được tiêu hoang.",
        "Đang chờ donate tiếp theo xuất hiện…"
    ];
    let i = 0;

    setInterval(() => {
        log(sample[i % sample.length]);
        i++;
    }, 5000);
}

// Fake donate
function setupFakeDonateButton() {
    const btn = $("#fake-donate-btn");
    if (!btn) return;

    btn.addEventListener("click", () => {
        // Random số tiền 10k – 200k
        const amount = (Math.floor(Math.random() * 20) + 1) * 10000;
        const logs = MOCK_DONATE_LOG;
        const msg = logs[Math.floor(Math.random() * logs.length)];

        currentAmount += amount;
        supporterCount += 1;

        updateMetricsDisplay();
        log(msg + ` (+${formatCurrency(amount)})`);
    });
}

function initCurrentYear() {
    const yearEl = $("#year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear().toString();
    }
}

// Init
document.addEventListener("DOMContentLoaded", () => {
    // Tạo dữ liệu start
    currentAmount = 420000; // fake ban đầu
    supporterCount = 7;

    renderTodayTransactions();
    updateMetricsDisplay();
    startFakeRealtimeLog();
    setupFakeDonateButton();
    initCurrentYear();
});
