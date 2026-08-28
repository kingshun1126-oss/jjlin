import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpen,
  BookOpenCheck,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  CreditCard,
  Download,
  Eye,
  FileDown,
  FileSpreadsheet,
  FileVideo,
  LayoutDashboard,
  ListChecks,
  LockKeyhole,
  Menu,
  MoreHorizontal,
  Package,
  Play,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  UsersRound,
  X,
} from "lucide-react";
import { modules, stages } from "./data.js";

function go(path) {
  window.location.hash = path;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function Button({ children, secondary = false, className = "", onClick, type = "button" }) {
  return <button type={type} className={`button ${secondary ? "secondary" : ""} ${className}`} onClick={onClick}>{children}</button>;
}

function Brand() {
  return <button className="brand" onClick={() => go("/")}><span><Sparkles /></span><div><strong>SuperMama</strong><small>居屋學堂</small></div></button>;
}

function Header() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("sm-user") === "demo");
  const links = [["/", "首頁"], ["/course", "課程"], ["/my-courses", "我的課程"], ["/admin", "Admin Demo"]];
  const login = () => { localStorage.setItem("sm-user", "demo"); setLoggedIn(true); setLoginOpen(false); };
  return <>
    <header className="header"><Brand /><nav>{links.map(([href, label]) => <button key={href} onClick={() => go(href)}>{label}</button>)}</nav><div className="header-actions"><Button onClick={() => setLoginOpen(true)}><Users /> {loggedIn ? "會員帳戶" : "登入／註冊"}</Button><button className="menu-button" onClick={() => setMobileOpen(true)}><Menu /></button></div></header>
    {mobileOpen && <div className="drawer-backdrop" onClick={() => setMobileOpen(false)}><aside className="drawer" onClick={(event) => event.stopPropagation()}><button className="close" onClick={() => setMobileOpen(false)}><X /></button><Brand />{links.map(([href, label]) => <button className="drawer-link" key={href} onClick={() => { go(href); setMobileOpen(false); }}>{label}</button>)}</aside></div>}
    {loginOpen && <div className="modal-backdrop" onClick={() => setLoginOpen(false)}><section className="modal" onClick={(event) => event.stopPropagation()}><button className="close" onClick={() => setLoginOpen(false)}><X /></button><span className="eyebrow">會員登入</span><h2>歡迎回到居屋學堂</h2><p>使用 WhatsApp 手機號碼登入。這是前端示範流程。</p><label>香港手機號碼<input defaultValue="+852 9123 4567" /></label><div className="demo-note">Demo：按下方按鈕即可登入，不會傳送訊息。</div><Button onClick={login}>繼續</Button></section></div>}
  </>;
}

function StageExplorer() {
  const [active, setActive] = useState(4);
  const stage = stages[active];
  const Icon = stage.icon;
  return <div className="stage-explorer"><div className="stage-scroll"><div className="stage-strip">{stages.map((item, index) => <button key={item.short} className={active === index ? "active" : ""} onClick={() => setActive(index)}><small>0{index + 1}</small><i>{index < active ? <Check /> : null}</i><span>{item.short}</span></button>)}</div></div><div className="stage-preview"><div className="stage-visual"><Icon /><button><Play fill="currentColor" /></button><span>2 分鐘課程預覽</span></div><div className="stage-copy"><span className="eyebrow">最適合你目前階段</span><h3>{stage.title}</h3><p>{stage.text}</p><ul><li><Check />清楚步驟，不再靠估</li><li><Check />附實用表格及 Checklist</li><li><Check />隨時重溫，自訂進度</li></ul><div><strong>HK${stage.price}</strong><Button onClick={() => go("/course")}>查看課程 <ArrowRight /></Button></div></div></div></div>;
}

function HomePage() {
  return <><Header /><main>
    <section className="hero"><div className="shell hero-grid"><div><span className="eyebrow"><Sparkles /> 香港家庭的居屋實戰學堂</span><h1>買居屋，不需要<br /><em>一個人摸索。</em></h1><p>由申請、揀樓、按揭到收樓，把複雜流程拆成每一步都做得到的課程與工具。</p><div className="hero-actions"><Button onClick={() => document.getElementById("journey").scrollIntoView({ behavior: "smooth" })}>找出我現在要學甚麼 <ArrowRight /></Button><Button secondary onClick={() => go("/my-courses")}>進入我的課程</Button></div><div className="trust"><span><BadgeCheck />廣東話教學</span><span><BookOpenCheck />8 個完整階段</span><span><Users />學員支援</span></div></div><div className="hero-art"><span className="hero-number">08</span><div className="key-card"><Building2 /><div><small>YOUR HOME JOURNEY</small><strong>一步一步，揀到安心。</strong></div></div><div className="hero-badge"><ShieldCheck /><span><small>學得有系統</small><strong>每一步都有清單</strong></span></div></div></div></section>
    <section className="section shell"><div className="section-heading center"><span className="eyebrow">我們明白</span><h2>置業最辛苦的，往往不是計數。</h2><p>而是每一日都怕漏看一項、做錯一步，錯過最適合自己的選擇。</p></div><div className="problem-grid">{[[Search,"資訊太多","網上說法不一，不知道應該信哪一個。"],[CircleDollarSign,"預算模糊","只看樓價，忽略首期、供款與其他支出。"],[ListChecks,"選擇困難","屋苑與單位太多，臨場容易自亂陣腳。"],[ShieldCheck,"怕做錯決定","每一步都牽涉大額金錢，擔心無法回頭。"]].map(([Icon,title,text],i)=><article key={title}><small>0{i+1}</small><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="section shell" id="journey"><div className="journey-card"><div className="section-heading"><span className="eyebrow">你的學習路線</span><h2>你正在哪一個居屋階段？</h2><p>選擇目前進度，我們會顯示最相關的課程。</p></div><StageExplorer /></div></section>
    <section className="section shell"><div className="section-heading"><span className="eyebrow">免費資源</span><h2>先用工具，整理你的下一步。</h2></div><div className="tools-grid">{[[FileDown,"申請文件 Checklist"],[CircleDollarSign,"置業預算計算表"],[ListChecks,"屋苑評分比較表"]].map(([Icon,title],i)=><article key={title}><div><Icon/></div><small>FREE TOOL 0{i+1}</small><h3>{title}</h3><p>簡單、實用、可立即下載的居屋準備工具。</p><button>免費領取 <ArrowRight /></button></article>)}</div></section>
    <section className="section shell"><div className="pricing"><div><span className="eyebrow light">由一課開始，或一次學完整流程</span><h2>用適合你的方式，做好置業準備。</h2><p>所有課程均可隨時重溫，並附下載工具。</p></div><div className="price-grid"><article><small>單一階段</small><strong>HK$299 起</strong><p>針對你現在最需要解決的一步。</p><Button secondary onClick={() => go("/course")}>選擇課程</Button></article><article className="featured"><b>最多人選擇</b><small>全階段 Package</small><strong>HK$1,888</strong><p>8 個階段課程及全套工具一次開通。</p><Button onClick={() => go("/checkout/package")}>購買全套課程</Button></article><article><small>1 對 1 支援</small><strong>HK$3,888</strong><p>課程加個人化選樓策略諮詢。</p><Button secondary onClick={() => go("/checkout/vip")}>了解 1 對 1</Button></article></div></div></section>
  </main><Footer /></>;
}

function Footer() {
  return <footer className="footer shell"><div><strong><Sparkles /> SuperMama 居屋學堂</strong><p>把複雜的置業流程，變成一家人都明白的下一步。</p></div><div><button onClick={() => go("/course")}>課程介紹</button><button onClick={() => go("/my-courses")}>我的課程</button><button onClick={() => go("/admin")}>Admin Demo</button></div></footer>;
}

function CoursePage() {
  return <><Header /><main><section className="course-hero"><div className="shell course-hero-grid"><div><span className="eyebrow">05 · 選樓準備</span><h1>選樓部署<br />實戰課</h1><p>由預算、屋苑比較到臨場揀樓，建立一套真正做得到的決策流程。</p><div className="rating"><span><Star fill="currentColor" />4.9</span><span><Users />328 位學員</span><span><Clock3 />可隨時重溫</span></div><div className="hero-actions"><Button onClick={() => go("/checkout/course")}>立即購買 HK$499 <ArrowRight /></Button><Button secondary onClick={() => go("/learn")}><Play />免費試看</Button></div></div><div className="course-cover"><span>COURSE · 選樓準備</span><strong>05</strong><h2>把焦慮，變成<br />清楚的選樓次序。</h2></div></div></section><section className="course-stats shell">{[["3","Modules"],["9","Lessons"],["1小時54分","影片內容"],["6份","下載工具"]].map(([n,label])=><div key={label}><strong>{n}</strong><span>{label}</span></div>)}</section><section className="course-layout shell"><div><article className="content-card"><span className="eyebrow">你會學到</span><h2>從「很多選擇」走到「知道怎樣選」。</h2><div className="outcome-grid">{["定出家庭真正可負擔的樓價範圍","用統一標準比較不同屋苑與單位","準備多層次選樓清單與後備方案","在選樓日快速更新並作出決定"].map((x,i)=><div key={x}><small>0{i+1}</small><p>{x}</p></div>)}</div></article><article className="content-card"><span className="eyebrow">課程內容</span><h2>3 Modules · 9 Lessons</h2>{modules.map((module,index)=><details key={module.title} open={index===0}><summary><span>0{index+1} · {module.title}</span><ChevronDown /></summary>{module.lessons.map((lesson,i)=><div className="lesson-row" key={lesson}><span>{index===0&&i===0?<Play/>:<LockKeyhole/>}</span><strong>{lesson}</strong><time>{["08:42","12:18","15:06"][i]}</time></div>)}</details>)}</article></div><aside className="buy-card"><span>單一課程</span><h3>選樓部署實戰課</h3><strong>HK$499</strong><ul><li><Check />9 節廣東話影片</li><li><Check />6 份可下載工具</li><li><Check />不限次數重溫</li><li><Check />學習進度自動保存</li></ul><Button onClick={() => go("/checkout/course")}>立即購買 <ArrowRight /></Button></aside></section></main></>;
}

function CheckoutPage({ planKey }) {
  const plans={course:["選樓部署實戰課",499],package:["全階段網課 Package",1888],vip:["全階段課程 + 1 對 1 支援",3888]};
  const [name,price]=plans[planKey]||plans.course;
  const [done,setDone]=useState(false);
  const purchase=(event)=>{event.preventDefault();localStorage.setItem("sm-user","demo");localStorage.setItem("sm-owned","housing-selection");localStorage.setItem("sm-progress","38");setDone(true);};
  if(done)return <><Header/><main className="success"><div><Check/></div><span className="eyebrow">付款示範完成</span><h1>課程已加入你的帳戶。</h1><p>正式版本會由付款平台 webhook 驗證交易，再自動開通權限。</p><Button onClick={()=>go("/my-courses")}>前往我的課程</Button></main></>;
  return <><Header/><main className="checkout shell"><button className="back" onClick={()=>go("/course")}><ArrowLeft/>返回課程介紹</button><div className="section-heading"><span className="eyebrow">安全付款</span><h1>確認你的課程</h1><p>完成付款後，課程會自動出現在「我的課程」。</p></div><div className="checkout-grid"><form onSubmit={purchase}><section><small>01</small><h2>聯絡資料</h2><div className="form-grid"><label>姓名<input defaultValue="Demo Student"/></label><label>電郵<input type="email" defaultValue="student@example.com"/></label><label>WhatsApp 手機號碼<input defaultValue="+852 9123 4567"/></label></div></section><section><small>02</small><h2>付款方式</h2><label className="payment"><input type="radio" name="payment" defaultChecked/><CreditCard/><span><strong>信用卡／扣賬卡</strong><em>Visa、Mastercard</em></span></label><div className="demo-note"><ShieldCheck/>付款欄位為前端示範，不會收集卡資料。</div></section><label className="terms"><input type="checkbox" required/>我已閱讀並同意課程條款及退款政策。</label><Button type="submit"><LockKeyhole/>示範付款 HK${price.toLocaleString()}</Button></form><aside className="order-card"><span>ORDER SUMMARY</span><div><small>SuperMama</small><strong>{planKey==="course"?"05":"ALL"}</strong></div><h2>{name}</h2><p>網上課程及全套下載工具</p><hr/><section><span>合計</span><strong>HK${price.toLocaleString()}</strong></section><small><ShieldCheck/>安全付款 · 成功後自動開課</small></aside></div></main></>;
}

function MyCoursesPage() {
  const owned=localStorage.getItem("sm-owned")==="housing-selection";
  return <><Header/><main><section className="dashboard-hero"><div className="shell"><span className="eyebrow light"><Sparkles/>會員學習中心</span><h1>下午好，Demo Student。</h1><p>每一次學習，都是離理想家多一步。</p></div></section><section className="dashboard shell"><div className="dashboard-heading"><div><span className="eyebrow">繼續學習</span><h2>我的課程</h2></div><span>{owned?"1 個已開通課程":"尚未購買課程"}</span></div>{owned?<article className="continue-card"><div className="continue-cover"><span>COURSE 05</span><strong>選樓<br/>部署</strong><Play/></div><div><span className="eyebrow">最近學習 · 今日</span><h3>選樓部署實戰課</h3><p>Module 2 · Lesson 1 — 比較屋苑位置與配套</p><div className="progress-label"><span>學習進度</span><strong>38%</strong></div><div className="progress"><i/></div><footer><span><Clock3/>上次看到 06:24</span><Button onClick={()=>go("/learn")}>繼續學習 <ArrowRight/></Button></footer></div></article>:<article className="empty"><BookOpen/><h3>你的課程會顯示在這裡</h3><p>購買單一課程或 Package 後，系統會自動開通學習權限。</p><Button onClick={()=>go("/course")}>探索課程</Button></article>}<div className="dashboard-heading downloads-title"><div><span className="eyebrow">我的工具</span><h2>已下載資源</h2></div></div><div className="download-grid">{["家庭置業總預算","屋苑比較評分表","選樓優先次序表"].map((name,i)=><article key={name}><Download/><span><strong>{name}</strong><small>{i===0?"Excel":"PDF"} · 最近更新</small></span><button>下載</button></article>)}</div></section></main></>;
}

function Outline(){return <aside className="outline"><header><span>COURSE OUTLINE</span><strong>選樓部署實戰課</strong><div className="progress"><i/></div><small>已完成 3 / 9 Lessons</small></header>{modules.map((module,m)=><section key={module.title}><h3>{module.title}</h3>{module.lessons.map((lesson,i)=><button className={m===0&&i===0?"current":""} key={lesson}><i>{m===0&&i<2?<Check/>:m===0&&i===2?<Play/>:<LockKeyhole/>}</i><span><strong>{lesson}</strong><small>08:42</small></span></button>)}</section>)}</aside>}

function LearnPage(){const[open,setOpen]=useState(false);const[complete,setComplete]=useState(localStorage.getItem("sm-complete")==="yes");const toggle=()=>{const next=!complete;setComplete(next);localStorage.setItem("sm-complete",next?"yes":"no")};return <main className="learn"><header className="learn-header"><button onClick={()=>go("/my-courses")}><ArrowLeft/>我的課程</button><strong>選樓部署實戰課</strong><button onClick={()=>setOpen(true)}><Menu/>課程目錄</button></header>{open&&<div className="drawer-backdrop" onClick={()=>setOpen(false)}><div className="lesson-drawer" onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setOpen(false)}><X/></button><Outline/></div></div>}<div className="learn-grid"><section><div className="video"><div/><button><Play fill="currentColor"/></button><footer><span>06:24</span><i><b/></i><span>08:42</span></footer></div><article className="lesson-content"><span className="eyebrow">MODULE 1 · LESSON 1</span><h1>選樓前你要知道的 5 件事</h1><p className="lead">先不要急著比較單位。這一課會幫你建立選樓前的共同語言，讓一家人知道應先談甚麼、記錄甚麼。</p><section><h2>課堂摘要</h2><p>選樓不是單一決定，而是一連串取捨。開始前先確認家庭預算、不能妥協的條件、可以調整的條件，以及當首選售出時的後備方案。</p></section><section className="takeaways"><h2>這一課的重點</h2>{["先定總預算，再看可選單位。","把需要與想要分開，避免臨場失焦。","每個首選至少準備兩個後備。"].map((x,i)=><div key={x}><span>0{i+1}</span><p>{x}</p></div>)}</section><section><h2>下載工具</h2><div className="lesson-download"><FileSpreadsheet/><span><strong>選樓優先次序 Template</strong><small>Excel · 48 KB</small></span><Button secondary><Download/>下載</Button></div></section><div className="lesson-actions"><Button secondary><ArrowLeft/>上一節</Button><Button className={complete?"complete":""} onClick={toggle}><CheckCircle2/>{complete?"已完成":"完成此課"}</Button><Button>下一節<ArrowRight/></Button></div></article></section><div className="outline-desktop"><Outline/></div></div></main>}

function AdminPage(){
  const nav=[
    [LayoutDashboard,"Dashboard"],
    [BookOpen,"Courses"],
    [Package,"Packages & Pricing"],
    [FileVideo,"Media Library"],
    [CircleDollarSign,"Orders"],
    [UsersRound,"Students & Access"],
    [BarChart3,"Reports"],
    [Settings,"Settings"]
  ];
  const rows=[
    ["選樓部署實戰課","3","9","HK$499","328","Published"],
    ["按揭與壓力測試","4","12","HK$399","241","Published"],
    ["驗樓收樓清單","3","8","HK$349","186","Draft"],
    ["網上申請攻略","2","7","HK$299","392","Published"]
  ];
  return <main className="admin">
  <aside className="admin-nav">
  <Brand/><nav>{
  nav.map(([Icon,label],i)=><button className={i===1?"active":""} key={label}><Icon/>{label}</button>)}
  </nav>
  <div className="admin-user"><span>SM</span><div>
    <strong>SuperMama Admin</strong>
    <small>admin@supermama.hk</small>
    </div>
    </div>
    </aside><section className="admin-main"><header><label><Search/><input placeholder="Search courses, orders, students…"/></label>
    <Button secondary onClick={() => go("/")}>
      <Eye/>
      Preview site
      </Button>
    </header><div className="admin-content">
      <div className="admin-title">
        <div>
          <span>CONTENT MANAGEMENT</span>
          <h1>Courses</h1>
          <p>建立、編輯及發布你的網上課程。</p>
          </div>
          <Button><Plus/>New Course</Button>
          </div>
          <div className="metrics">{
          [["Active courses","7","1 個 Draft"],
          ["Total lessons","68","12 個 Modules"],
          ["Active students","1,284","↑ 8.4% 本月"],
          ["Course completion","64%","穩定上升"]].
          map(([label,n,note])=><article key={label}><span>{label}</span>
          <strong>{n}</strong>
          <small>{note}</small></article>)
          }
          </div>
          <section className="admin-table">
            <header>
              <div>
                <button className="active">All 8</button>
                <button>Published 7</button>
                <button>Draft 1</button>
                </div>
                <label><Search/><input placeholder="Search courses"/></label>
                </header>
                <div className="table-scroll">
                  <table><thead><tr>{
                  ["Course","Modules","Lessons","Price","Students","Status","Actions"].
                  map(x=><th key={x}>{x}</th>)
                  }
                  </tr></thead><tbody>{rows.map((row,i)=><tr key={row[0]}>
                    <td>
                      <span className={`thumb t${i}`}>0{i+1}</span>
                      <strong>{row[0]}</strong>
                      </td>
                      {row.slice(1,5).map((x,j)=><td key={j}>{x}</td>)}
                      <td>
                        <em className={row[5]==="Published"?"published":"draft"}>
                          {row[5]}</em></td><td><button><MoreHorizontal/></button></td></tr>)}
                          </tbody></table></div></section></div></section></main>}

function NotFound(){return <><Header/><main className="success"><h1>找不到這個頁面</h1><Button onClick={()=>go("/")}>返回首頁</Button></main></>}

export default function App() {
  const [route, setRoute] = useState(window.location.hash.slice(1) || "/");
  useEffect(() => { const update = () => setRoute(window.location.hash.slice(1) || "/"); window.addEventListener("hashchange", update); return () => window.removeEventListener("hashchange", update); }, []);
  if (route === "/") return <HomePage />;
  if (route === "/course") return <CoursePage />;
  if (route.startsWith("/checkout/")) return <CheckoutPage planKey={route.split("/")[2]} />;
  if (route === "/my-courses") return <MyCoursesPage />;
  if (route === "/learn") return <LearnPage />;
  if (route === "/admin") return <AdminPage />;
  return <NotFound />;
}
