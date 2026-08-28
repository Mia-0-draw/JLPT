/**
 * Japanese Learning Tracker - Full Logic & Calendar Matrix Controller
 */

// ==========================================
// 1. i18n Dictionary
// ==========================================
const translations = {
  zh: {
    appTitle: "日語學習追蹤器",
    appSubtitle: "JLPT 衝刺 & 每日學習日誌",
    timerTitle: "學習計時器",
    timerIdle: "待機中",
    timerRunning: "專注中...",
    timerPaused: "已暫停",
    btnStart: "開始",
    btnPause: "暫停",
    btnStopSave: "結束 / 儲存",
    timerHint: "* 結束計時後將自動換算為分鐘累加至當前選取日期的學習時間。",
    logDateLabel: "記錄日期：",
    todayBtn: "今天",
    statusSaved: "已自動儲存",
    statusSaving: "儲存中...",
    totalDurationLabel: "當日學習時間 (分鐘)：",
    unitMinutes: "分鐘",
    studyItemsTitle: "今日進度項目",
    addCategoryBtn: "新增項目",
    notesTitle: "學習筆記 / 心得反思",
    notesPlaceholder: "寫下今天遇到的文法疑點、新背的單字句型或心得...",
    resourceTitle: "學習資源庫",
    addResourceBtn: "+ 新增資源",
    typeWebsite: "網站",
    typePdf: "PDF / 講義",
    typeMedia: "影音 / 播客",
    typeBook: "書籍 / 題庫",
    btnSave: "儲存",
    btnCancel: "取消",
    calTodayBtn: "本月",
    daySun: "週日",
    dayMon: "週一",
    dayTue: "週二",
    dayWed: "週三",
    dayThu: "週四",
    dayFri: "週五",
    daySat: "週六",
    legendLess: "0 分",
    legendMore: "120+ 分",
    settingsTitle: "系統設定",
    languageLabel: "介面語言 / Language / 言語",
    examTargetLabel: "目標考試名稱與日期",
    dataBackupLabel: "資料備份與還原 (JSON)",
    exportBtn: "匯出備份檔",
    importBtn: "匯入備份檔",
    clearDataBtn: "重設並清除所有資料",
    saveSettingsBtn: "完成",
    daysLeftText: "倒數",
    examDayText: "今日應試！",
    examPassedText: "已結束",
    defaultVocab: "單字",
    defaultGrammar: "文法",
    defaultMock: "刷題",
    defaultReading: "閱讀/新聞/聽力",
    unitWord: "個",
    unitUnit: "單元",
    unitQuestion: "題",
    unitMin: "分",
    unitShortMins: "分",
    confirmClear: "確定要清除所有學習資料與設定嗎？此動作無法復原！",
    importSuccess: "資料匯入成功！",
    importFail: "匯入檔案格式錯誤，請確認為正確的 JSON 備份檔。"
  },
  ja: {
    appTitle: "日本語学習トラッカー",
    appSubtitle: "JLPT対策 & 毎日の学習記録",
    timerTitle: "学習タイマー",
    timerIdle: "待機中",
    timerRunning: "集中学習中...",
    timerPaused: "一時停止中",
    btnStart: "開始",
    btnPause: "一時停止",
    btnStopSave: "終了 / 保存",
    timerHint: "* タイマーを終了すると、選択した日付の学習時間に自動で加算されます。",
    logDateLabel: "記録日：",
    todayBtn: "今日",
    statusSaved: "保存済み",
    statusSaving: "保存中...",
    totalDurationLabel: "本日の学習時間 (分)：",
    unitMinutes: "分",
    studyItemsTitle: "本日の学習タスク",
    addCategoryBtn: "項目追加",
    notesTitle: "学習メモ / 振り返り",
    notesPlaceholder: "今日学んだ文法、語彙、反省点などをメモしましょう...",
    resourceTitle: "学習リソース集",
    addResourceBtn: "+ リソース追加",
    typeWebsite: "ウェブサイト",
    typePdf: "PDF / 資料",
    typeMedia: "動画 / 音声",
    typeBook: "参考書 / 問題集",
    btnSave: "保存",
    btnCancel: "キャンセル",
    calTodayBtn: "今月",
    daySun: "日",
    dayMon: "月",
    dayTue: "火",
    dayWed: "水",
    dayThu: "木",
    dayFri: "金",
    daySat: "土",
    legendLess: "0分",
    legendMore: "120分+",
    settingsTitle: "設定",
    languageLabel: "表示言語 / Language / 言語",
    examTargetLabel: "目標試験名と試験日",
    dataBackupLabel: "データバックアップと復元 (JSON)",
    exportBtn: "バックアップをエクスポート",
    importBtn: "バックアップをインポート",
    clearDataBtn: "全データをリセット",
    saveSettingsBtn: "完了",
    daysLeftText: "残り",
    examDayText: "試験当日！",
    examPassedText: "終了",
    defaultVocab: "単語",
    defaultGrammar: "文法",
    defaultMock: "問題演習",
    defaultReading: "読解/ニュース/聴解",
    unitWord: "語",
    unitUnit: "課",
    unitQuestion: "問",
    unitMin: "分",
    unitShortMins: "分",
    confirmClear: "本当にすべての学習データを初期化しますか？この操作は取り消せません。",
    importSuccess: "データを正常に復元しました！",
    importFail: "ファイル形式が正しくありません。"
  },
  en: {
    appTitle: "Japanese Study Tracker",
    appSubtitle: "JLPT Preparation & Daily Logs",
    timerTitle: "Study Timer",
    timerIdle: "Idle",
    timerRunning: "Focusing...",
    timerPaused: "Paused",
    btnStart: "Start",
    btnPause: "Pause",
    btnStopSave: "Stop & Save",
    timerHint: "* Stopping the timer automatically converts elapsed time to minutes and adds it to the selected date.",
    logDateLabel: "Log Date:",
    todayBtn: "Today",
    statusSaved: "Saved",
    statusSaving: "Saving...",
    totalDurationLabel: "Study Time Today (mins):",
    unitMinutes: "mins",
    studyItemsTitle: "Today's Study Progress",
    addCategoryBtn: "Add Item",
    notesTitle: "Notes & Reflection",
    notesPlaceholder: "Jot down new vocab, grammar points, or reflections...",
    resourceTitle: "Resource Library",
    addResourceBtn: "+ Add Resource",
    typeWebsite: "Website",
    typePdf: "PDF / Handout",
    typeMedia: "Video / Audio",
    typeBook: "Book / Practice",
    btnSave: "Save",
    btnCancel: "Cancel",
    calTodayBtn: "This Month",
    daySun: "Sun",
    dayMon: "Mon",
    dayTue: "Tue",
    dayWed: "Wed",
    dayThu: "Thu",
    dayFri: "Fri",
    daySat: "Sat",
    legendLess: "0m",
    legendMore: "120m+",
    settingsTitle: "Settings",
    languageLabel: "UI Language / 言語",
    examTargetLabel: "Target Exam Name & Date",
    dataBackupLabel: "Data Backup & Restore (JSON)",
    exportBtn: "Export JSON",
    importBtn: "Import JSON",
    clearDataBtn: "Reset & Clear All Data",
    saveSettingsBtn: "Done",
    daysLeftText: "Countdown",
    examDayText: "Exam Day!",
    examPassedText: "Finished",
    defaultVocab: "Vocabulary",
    defaultGrammar: "Grammar",
    defaultMock: "Mock Questions",
    defaultReading: "Reading/News/Listening",
    unitWord: "words",
    unitUnit: "units",
    unitQuestion: "q's",
    unitMin: "mins",
    unitShortMins: "m",
    confirmClear: "Are you sure you want to clear all data? This cannot be undone!",
    importSuccess: "Data imported successfully!",
    importFail: "Invalid file format. Please upload a valid JSON backup."
  }
};

// ==========================================
// 2. Storage Schema & Initial Defaults
// ==========================================
const STORAGE_KEYS = {
  SETTINGS: 'jlpt_app_settings',
  LOGS: 'jlpt_app_logs',
  CUSTOM_CATS: 'jlpt_app_custom_categories',
  RESOURCES: 'jlpt_app_resources'
};

const DEFAULT_SETTINGS = {
  lang: 'zh',
  examName: 'JLPT N2',
  examDate: '2026-12-06'
};

const DEFAULT_CUSTOM_CATS = [];

const DEFAULT_RESOURCES = [
  { id: '1', title: 'NHK Web Easy', url: 'https://www3.nhk.or.jp/news/easy/', type: '網站', note: '簡易日文新聞，適合閱讀與朗讀練習' },
  { id: '2', title: 'Weblio 日語辭典', url: 'https://ejje.weblio.jp/', type: '網站', note: '精準日日/日英辭典，附大量例句' }
];

const DEFAULT_CATEGORIES_BASE = [
  { id: 'vocab', key: 'defaultVocab', unitKey: 'unitWord', defaultUnit: '個' },
  { id: 'grammar', key: 'defaultGrammar', unitKey: 'unitUnit', defaultUnit: '單元' },
  { id: 'practice', key: 'defaultMock', unitKey: 'unitQuestion', defaultUnit: '題' },
  { id: 'media', key: 'defaultReading', unitKey: 'unitMin', defaultUnit: '分' }
];

// App State
let state = {
  settings: { ...DEFAULT_SETTINGS },
  logs: {},
  customCategories: [...DEFAULT_CUSTOM_CATS],
  resources: [...DEFAULT_RESOURCES],
  selectedDate: getFormattedDate(new Date()),
  calendarViewDate: new Date(), // Used to navigate months
  timer: {
    seconds: 0,
    intervalId: null,
    status: 'idle' // 'idle' | 'running' | 'paused'
  }
};

// ==========================================
// 3. Application Lifecycle
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  loadStoredData();
  applyLanguage(state.settings.lang);
  initEventListeners();
  updateCountdown();
  renderDailyLogForm();
  renderMonthlyCalendar();
  renderResources();
});

function loadStoredData() {
  const storedSettings = localStorage.getItem(STORAGE_KEYS.SETTINGS);
  if (storedSettings) state.settings = { ...state.settings, ...JSON.parse(storedSettings) };

  const storedLogs = localStorage.getItem(STORAGE_KEYS.LOGS);
  if (storedLogs) state.logs = JSON.parse(storedLogs);

  const storedCats = localStorage.getItem(STORAGE_KEYS.CUSTOM_CATS);
  if (storedCats) state.customCategories = JSON.parse(storedCats);

  const storedResources = localStorage.getItem(STORAGE_KEYS.RESOURCES);
  if (storedResources) state.resources = JSON.parse(storedResources);

  // Sync settings inputs
  document.getElementById('langSelect').value = state.settings.lang;
  document.getElementById('settingExamName').value = state.settings.examName;
  document.getElementById('settingExamDate').value = state.settings.examDate;
  document.getElementById('currentLogDate').value = state.selectedDate;
}

function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// ==========================================
// 4. i18n Localization
// ==========================================
function t(key) {
  const lang = state.settings.lang || 'zh';
  return translations[lang][key] || translations['zh'][key] || key;
}

function applyLanguage(lang) {
  state.settings.lang = lang;
  document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });

  updateCountdown();
  renderDailyLogForm();
  renderMonthlyCalendar();
}

// ==========================================
// 5. JLPT Countdown Logic
// ==========================================
function updateCountdown() {
  const examName = state.settings.examName || 'JLPT';
  const examDateStr = state.settings.examDate;
  const labelEl = document.getElementById('examLabel');
  const daysEl = document.getElementById('countdownDays');

  labelEl.textContent = `${examName} ${t('daysLeftText')}`;

  if (!examDateStr) {
    daysEl.textContent = 'D- --';
    return;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const examDate = new Date(examDateStr);
  examDate.setHours(0, 0, 0, 0);

  const diffTime = examDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays > 0) {
    daysEl.textContent = `D-${diffDays}`;
  } else if (diffDays === 0) {
    daysEl.textContent = t('examDayText');
  } else {
    daysEl.textContent = t('examPassedText');
  }
}

// ==========================================
// 6. Study Timer Logic
// ==========================================
const timerDisplay = document.getElementById('timerDisplay');
const startTimerBtn = document.getElementById('startTimerBtn');
const pauseTimerBtn = document.getElementById('pauseTimerBtn');
const stopTimerBtn = document.getElementById('stopTimerBtn');
const timerStatusTag = document.getElementById('timerStatusTag');

function formatTimer(sec) {
  const hrs = String(Math.floor(sec / 3600)).padStart(2, '0');
  const mins = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
  const secs = String(sec % 60).padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}

function startTimer() {
  if (state.timer.status === 'running') return;

  state.timer.status = 'running';
  timerStatusTag.textContent = t('timerRunning');
  timerStatusTag.className = 'timer-tag active';

  startTimerBtn.disabled = true;
  pauseTimerBtn.disabled = false;
  stopTimerBtn.disabled = false;

  state.timer.intervalId = setInterval(() => {
    state.timer.seconds++;
    timerDisplay.textContent = formatTimer(state.timer.seconds);
  }, 1000);
}

function pauseTimer() {
  if (state.timer.status !== 'running') return;

  state.timer.status = 'paused';
  clearInterval(state.timer.intervalId);
  timerStatusTag.textContent = t('timerPaused');
  timerStatusTag.className = 'timer-tag paused';

  startTimerBtn.disabled = false;
  pauseTimerBtn.disabled = true;
}

function stopAndSaveTimer() {
  clearInterval(state.timer.intervalId);
  const elapsedSecs = state.timer.seconds;
  const elapsedMinutes = Math.round(elapsedSecs / 60);

  // Add to currently selected log date
  if (elapsedMinutes > 0 || elapsedSecs >= 30) {
    const minsToAdd = Math.max(1, elapsedMinutes);
    const curDate = state.selectedDate;
    if (!state.logs[curDate]) state.logs[curDate] = createEmptyLogRecord();
    state.logs[curDate].duration = (state.logs[curDate].duration || 0) + minsToAdd;
    saveData(STORAGE_KEYS.LOGS, state.logs);

    document.getElementById('dailyDurationInput').value = state.logs[curDate].duration;
    renderMonthlyCalendar();
    showAutoSaveIndicator();
  }

  // Reset
  state.timer.seconds = 0;
  state.timer.status = 'idle';
  timerDisplay.textContent = '00:00:00';
  timerStatusTag.textContent = t('timerIdle');
  timerStatusTag.className = 'timer-tag';

  startTimerBtn.disabled = false;
  pauseTimerBtn.disabled = true;
  stopTimerBtn.disabled = true;
}

// ==========================================
// 7. Daily Log Form Controller
// ==========================================
function createEmptyLogRecord() {
  return {
    duration: 0,
    items: {},
    notes: ''
  };
}

function getActiveLog() {
  if (!state.logs[state.selectedDate]) {
    state.logs[state.selectedDate] = createEmptyLogRecord();
  }
  return state.logs[state.selectedDate];
}

function renderDailyLogForm() {
  const currentLog = getActiveLog();
  
  document.getElementById('currentLogDate').value = state.selectedDate;
  document.getElementById('dailyDurationInput').value = currentLog.duration || 0;
  document.getElementById('dailyNotesInput').value = currentLog.notes || '';

  const container = document.getElementById('logItemsList');
  container.innerHTML = '';

  // 1. Presets
  DEFAULT_CATEGORIES_BASE.forEach(cat => {
    const itemData = currentLog.items[cat.id] || { checked: false, count: 0 };
    const label = t(cat.key);
    const unit = t(cat.unitKey);
    container.appendChild(createLogItemElement(cat.id, label, unit, itemData.checked, itemData.count, false));
  });

  // 2. Custom Categories
  state.customCategories.forEach((catName, idx) => {
    const catId = `custom_${idx}_${catName}`;
    const itemData = currentLog.items[catId] || { checked: false, count: 0 };
    container.appendChild(createLogItemElement(catId, catName, '', itemData.checked, itemData.count, true, catName));
  });
}

function createLogItemElement(id, label, unit, checked, count, isCustom = false, customRawName = '') {
  const div = document.createElement('div');
  div.className = `log-item-card ${checked ? 'is-checked' : ''}`;
  div.dataset.id = id;

  div.innerHTML = `
    <div class="item-left">
      <input type="checkbox" class="item-checkbox" ${checked ? 'checked' : ''}>
      <span class="item-name" title="${label}">${label}</span>
    </div>
    <div class="item-right">
      <input type="number" min="0" class="input-text item-input" value="${count || 0}">
      <span class="item-unit">${unit}</span>
      ${isCustom ? `<button class="btn-remove-item" title="刪除項目" data-cat="${customRawName}">&times;</button>` : ''}
    </div>
  `;

  const chk = div.querySelector('.item-checkbox');
  const countInput = div.querySelector('.item-input');

  chk.addEventListener('change', () => {
    div.classList.toggle('is-checked', chk.checked);
    updateLogItem(id, chk.checked, parseInt(countInput.value) || 0);
  });

  countInput.addEventListener('input', () => {
    const val = parseInt(countInput.value) || 0;
    if (val > 0 && !chk.checked) {
      chk.checked = true;
      div.classList.add('is-checked');
    }
    updateLogItem(id, chk.checked, val);
  });

  if (isCustom) {
    const removeBtn = div.querySelector('.btn-remove-item');
    removeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      removeCustomCategory(customRawName);
    });
  }

  return div;
}

function updateLogItem(catId, checked, count) {
  const currentLog = getActiveLog();
  if (!currentLog.items) currentLog.items = {};
  currentLog.items[catId] = { checked, count };
  saveData(STORAGE_KEYS.LOGS, state.logs);
  renderMonthlyCalendar();
  showAutoSaveIndicator();
}

function showAutoSaveIndicator() {
  const indicator = document.getElementById('saveStatus');
  indicator.textContent = t('statusSaving');
  indicator.classList.add('saving');
  setTimeout(() => {
    indicator.textContent = t('statusSaved');
    indicator.classList.remove('saving');
  }, 400);
}

function removeCustomCategory(name) {
  state.customCategories = state.customCategories.filter(c => c !== name);
  saveData(STORAGE_KEYS.CUSTOM_CATS, state.customCategories);
  renderDailyLogForm();
  renderMonthlyCalendar();
}

// ==========================================
// 8. Full Monthly Calendar Matrix Controller
// ==========================================
function renderMonthlyCalendar() {
  const grid = document.getElementById('calendarGrid');
  const monthTitle = document.getElementById('calendarMonthTitle');
  grid.innerHTML = '';

  const year = state.calendarViewDate.getFullYear();
  const month = state.calendarViewDate.getMonth(); // 0-indexed

  // Format Header Month Title
  const lang = state.settings.lang || 'zh';
  if (lang === 'zh') {
    monthTitle.textContent = `${year} 年 ${month + 1} 月`;
  } else if (lang === 'ja') {
    monthTitle.textContent = `${year}年 ${month + 1}月`;
  } else {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    monthTitle.textContent = `${monthNames[month]} ${year}`;
  }

  // Determine Matrix Bounds (Sunday-Saturday)
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const startDayOfWeek = firstDayOfMonth.getDay(); // 0 = Sun
  const totalDaysInMonth = lastDayOfMonth.getDate();

  // Days from previous month to fill first row
  const prevMonthLastDay = new Date(year, month, 0).getDate();

  // Create 35 or 42 cells (7 columns)
  const totalCells = (startDayOfWeek + totalDaysInMonth > 35) ? 42 : 35;

  const todayStr = getFormattedDate(new Date());

  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement('div');
    cell.className = 'calendar-cell';

    let cellYear = year;
    let cellMonth = month;
    let cellDayNum = 0;
    let isOtherMonth = false;

    if (i < startDayOfWeek) {
      // Previous Month days
      cellDayNum = prevMonthLastDay - (startDayOfWeek - 1 - i);
      cellMonth = month - 1;
      if (cellMonth < 0) {
        cellMonth = 11;
        cellYear--;
      }
      isOtherMonth = true;
    } else if (i >= startDayOfWeek + totalDaysInMonth) {
      // Next Month days
      cellDayNum = i - (startDayOfWeek + totalDaysInMonth) + 1;
      cellMonth = month + 1;
      if (cellMonth > 11) {
        cellMonth = 0;
        cellYear++;
      }
      isOtherMonth = true;
    } else {
      // Current Month days
      cellDayNum = i - startDayOfWeek + 1;
    }

    const cellDate = new Date(cellYear, cellMonth, cellDayNum);
    const dateStr = getFormattedDate(cellDate);
    cell.dataset.date = dateStr;

    if (isOtherMonth) cell.classList.add('other-month');
    if (dateStr === todayStr) cell.classList.add('is-today');
    if (dateStr === state.selectedDate) cell.classList.add('selected');

    // Retrieve Log Data
    const log = state.logs[dateStr];
    const duration = log ? (log.duration || 0) : 0;

    // Apply Purple Color Hierarchy based on study time
    if (duration === 0) {
      cell.classList.add('level-0');
    } else if (duration <= 30) {
      cell.classList.add('level-1');
    } else if (duration <= 60) {
      cell.classList.add('level-2');
    } else if (duration <= 120) {
      cell.classList.add('level-3');
    } else {
      cell.classList.add('level-4');
    }

    // Build In-Cell Summary Tags
    const summaries = buildCellSummaryTags(log);

    cell.innerHTML = `
      <div class="cell-top">
        <span class="cell-date-num">${cellDayNum}</span>
        ${duration > 0 ? `<span class="cell-duration-badge">${duration}${t('unitShortMins')}</span>` : ''}
      </div>
      <div class="cell-summary-body">
        ${summaries.map(s => `<span class="summary-tag" title="${s}">${s}</span>`).join('')}
      </div>
    `;

    // Click Date Tile: Instantly update left column & selected state
    cell.addEventListener('click', () => {
      state.selectedDate = dateStr;
      
      // If user clicks a date from another month, navigate to that month
      if (isOtherMonth) {
        state.calendarViewDate = new Date(cellYear, cellMonth, 1);
      }

      renderDailyLogForm();
      renderMonthlyCalendar();
    });

    grid.appendChild(cell);
  }
}

function buildCellSummaryTags(log) {
  if (!log || !log.items) return [];
  const tags = [];

  // Parse preset items
  DEFAULT_CATEGORIES_BASE.forEach(cat => {
    const item = log.items[cat.id];
    if (item && item.checked) {
      const name = t(cat.key);
      const unit = t(cat.unitKey);
      tags.push(`${name} x${item.count || 0}${unit}`);
    }
  });

  // Parse custom items
  Object.entries(log.items).forEach(([catId, item]) => {
    if (catId.startsWith('custom_') && item.checked) {
      const customName = catId.split('_').slice(2).join('_');
      tags.push(`${customName} x${item.count || 0}`);
    }
  });

  return tags;
}

// ==========================================
// 9. Learning Resource Library
// ==========================================
function renderResources() {
  const list = document.getElementById('resourceList');
  list.innerHTML = '';

  state.resources.forEach(res => {
    const item = document.createElement('div');
    item.className = 'resource-card-item';
    item.innerHTML = `
      <div class="resource-info">
        <div class="res-header-line">
          <span class="res-badge">${res.type || '資源'}</span>
          <a href="${res.url}" target="_blank" rel="noopener noreferrer" class="res-link">${res.title}</a>
        </div>
        ${res.note ? `<span class="res-note">${res.note}</span>` : ''}
      </div>
      <button class="btn btn-ghost btn-sm" data-id="${res.id}">&times;</button>
    `;

    item.querySelector('button').addEventListener('click', () => {
      state.resources = state.resources.filter(r => r.id !== res.id);
      saveData(STORAGE_KEYS.RESOURCES, state.resources);
      renderResources();
    });

    list.appendChild(item);
  });
}

// ==========================================
// 10. Event Listeners & Backup Controls
// ==========================================
function initEventListeners() {
  // Timer Controls
  startTimerBtn.addEventListener('click', startTimer);
  pauseTimerBtn.addEventListener('click', pauseTimer);
  stopTimerBtn.addEventListener('click', stopAndSaveTimer);

  // Date selection input
  document.getElementById('currentLogDate').addEventListener('change', (e) => {
    if (e.target.value) {
      state.selectedDate = e.target.value;
      const parts = e.target.value.split('-');
      state.calendarViewDate = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, 1);
      renderDailyLogForm();
      renderMonthlyCalendar();
    }
  });

  // "Today" shortcut
  document.getElementById('setTodayBtn').addEventListener('click', () => {
    state.selectedDate = getFormattedDate(new Date());
    state.calendarViewDate = new Date();
    renderDailyLogForm();
    renderMonthlyCalendar();
  });

  // Calendar Navigation
  document.getElementById('prevMonthBtn').addEventListener('click', () => {
    state.calendarViewDate.setMonth(state.calendarViewDate.getMonth() - 1);
    renderMonthlyCalendar();
  });

  document.getElementById('nextMonthBtn').addEventListener('click', () => {
    state.calendarViewDate.setMonth(state.calendarViewDate.getMonth() + 1);
    renderMonthlyCalendar();
  });

  document.getElementById('calendarTodayBtn').addEventListener('click', () => {
    state.calendarViewDate = new Date();
    renderMonthlyCalendar();
  });

  // Duration manual input
  document.getElementById('dailyDurationInput').addEventListener('input', (e) => {
    const val = parseInt(e.target.value) || 0;
    const log = getActiveLog();
    log.duration = val;
    saveData(STORAGE_KEYS.LOGS, state.logs);
    renderMonthlyCalendar();
    showAutoSaveIndicator();
  });

  // Notes Auto-save with debounce
  let noteTimeout;
  document.getElementById('dailyNotesInput').addEventListener('input', (e) => {
    clearTimeout(noteTimeout);
    noteTimeout = setTimeout(() => {
      const log = getActiveLog();
      log.notes = e.target.value;
      saveData(STORAGE_KEYS.LOGS, state.logs);
      showAutoSaveIndicator();
    }, 300);
  });

  // Add Custom Category
  document.getElementById('addCustomCategoryBtn').addEventListener('click', () => {
    const promptMsg = state.settings.lang === 'zh' ? '請輸入自訂項目名稱 (如：口說練習、Shadowing)：' : 'Enter custom category name:';
    const name = prompt(promptMsg);
    if (name && name.trim()) {
      const trimmed = name.trim();
      if (!state.customCategories.includes(trimmed)) {
        state.customCategories.push(trimmed);
        saveData(STORAGE_KEYS.CUSTOM_CATS, state.customCategories);
        renderDailyLogForm();
        renderMonthlyCalendar();
      }
    }
  });

  // Resource Drawer Toggle & Form Submit
  const resourceForm = document.getElementById('addResourceForm');
  document.getElementById('toggleResourceFormBtn').addEventListener('click', () => {
    resourceForm.classList.toggle('hidden');
  });

  document.getElementById('cancelResourceBtn').addEventListener('click', () => {
    resourceForm.classList.add('hidden');
  });

  resourceForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('resTitle').value.trim();
    const type = document.getElementById('resType').value;
    const url = document.getElementById('resUrl').value.trim();
    const note = document.getElementById('resNote').value.trim();

    if (title && url) {
      state.resources.push({ id: Date.now().toString(), title, type, url, note });
      saveData(STORAGE_KEYS.RESOURCES, state.resources);
      renderResources();
      resourceForm.reset();
      resourceForm.classList.add('hidden');
    }
  });

  // Settings Modal Controls
  const modal = document.getElementById('settingsModal');
  document.getElementById('openSettingsBtn').addEventListener('click', () => modal.classList.remove('hidden'));
  document.getElementById('closeSettingsBtn').addEventListener('click', () => modal.classList.add('hidden'));

  document.getElementById('saveSettingsBtn').addEventListener('click', () => {
    state.settings.lang = document.getElementById('langSelect').value;
    state.settings.examName = document.getElementById('settingExamName').value.trim();
    state.settings.examDate = document.getElementById('settingExamDate').value;
    saveData(STORAGE_KEYS.SETTINGS, state.settings);
    applyLanguage(state.settings.lang);
    modal.classList.add('hidden');
  });

  // JSON Data Export
  document.getElementById('exportDataBtn').addEventListener('click', () => {
    const backupData = {
      settings: state.settings,
      logs: state.logs,
      customCategories: state.customCategories,
      resources: state.resources,
      exportedAt: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `japanese-tracker-backup-${getFormattedDate(new Date())}.json`;
    a.click();
    URL.revokeObjectURL(url);
  });

  // JSON Data Import
  const fileInput = document.getElementById('importFileInput');
  document.getElementById('triggerImportBtn').addEventListener('click', () => fileInput.click());

  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        if (imported.logs && imported.settings) {
          state.settings = { ...state.settings, ...imported.settings };
          state.logs = imported.logs;
          state.customCategories = imported.customCategories || [];
          state.resources = imported.resources || [];

          saveData(STORAGE_KEYS.SETTINGS, state.settings);
          saveData(STORAGE_KEYS.LOGS, state.logs);
          saveData(STORAGE_KEYS.CUSTOM_CATS, state.customCategories);
          saveData(STORAGE_KEYS.RESOURCES, state.resources);

          applyLanguage(state.settings.lang);
          alert(t('importSuccess'));
          modal.classList.add('hidden');
        } else {
          throw new Error('Invalid schema');
        }
      } catch (err) {
        alert(t('importFail'));
      }
    };
    reader.readAsText(file);
  });

  // Clear All Data
  document.getElementById('clearAllDataBtn').addEventListener('click', () => {
    if (confirm(t('confirmClear'))) {
      localStorage.clear();
      state.settings = { ...DEFAULT_SETTINGS };
      state.logs = {};
      state.customCategories = [];
      state.resources = [...DEFAULT_RESOURCES];
      applyLanguage(state.settings.lang);
      modal.classList.add('hidden');
    }
  });
}

// ==========================================
// 11. Helper Utilities
// ==========================================
function getFormattedDate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}