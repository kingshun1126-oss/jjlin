import { Banknote, Building2, Calculator, ClipboardCheck, FileCheck2, HandCoins, Home, KeyRound } from "lucide-react";

export const stages = [
  { short: "申請資格", title: "入息資產審查", text: "先判斷家庭組合、入息及資產是否符合申請資格。", price: 299, icon: FileCheck2 },
  { short: "遞交申請", title: "網上申請攻略", text: "逐步完成表格、文件準備與時間線管理。", price: 299, icon: ClipboardCheck },
  { short: "攪珠排序", title: "掌握揀樓機會", text: "看懂攪珠結果、選樓次序及備選策略。", price: 349, icon: Calculator },
  { short: "按揭預算", title: "按揭與壓力測試", text: "計算首期、每月供款及真正可承擔預算。", price: 399, icon: Banknote },
  { short: "選樓準備", title: "選樓部署實戰課", text: "由屋苑比較、單位排序到選樓日臨場策略。", price: 499, icon: Building2 },
  { short: "簽約購買", title: "簽約付款不踩雷", text: "掌握臨約、付款與重要文件的檢查重點。", price: 399, icon: HandCoins },
  { short: "驗樓收樓", title: "驗樓收樓清單", text: "按區域檢查單位，跟進執修及交收事項。", price: 349, icon: Home },
  { short: "入伙安居", title: "入伙規劃工具包", text: "安排裝修、搬屋與新居開支，不再漏項。", price: 299, icon: KeyRound },
];

export const modules = [
  { title: "Module 1 · 選樓前準備", lessons: ["選樓前你要知道的 5 件事", "建立家庭總預算", "排出屋苑與單位優先次序"] },
  { title: "Module 2 · 屋苑與單位分析", lessons: ["比較屋苑位置與配套", "快速看懂平面圖", "座向、景觀與噪音取捨"] },
  { title: "Module 3 · 選樓日實戰", lessons: ["製作可執行的揀樓清單", "現場更新與臨場決策", "選定單位後的下一步"] },
];
