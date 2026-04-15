import React from 'react';
import { ExternalLink, ChevronRight, Terminal, Layout, Cpu } from 'lucide-react';

const App = () => {
  // 顏色定義
  const colors = {
    navy: '#003153',
    oak: '#D9C5B2',
    red: '#7F1A1F',
    bg: '#D9C5B2' // 更新背景顏色為 Oak Wood
  };

  const projects = [
    {
      title: "Nav2 Sequence Designer",
      desc: "為 FIH_Humanoid_AMR 打造的導航時序圖設計工具，優化自動導航開發流程。",
      link: "https://swaikaikai.github.io/nav2-sequence-designer/",
      tag: "Robotics / Tooling",
      icon: <Terminal className="w-5 h-5" />
    },
    {
      title: "AMR Control Center",
      desc: "即時監控自主移動機器人狀態與路徑規劃的儀表板界面。",
      link: "#",
      tag: "Frontend / Dashboard",
      icon: <Layout className="w-5 h-5" />
    },
    {
      title: "Firmware Interaction Lib",
      desc: "高效能的嵌入式系統通訊庫，支援多種感測器協議整合。",
      link: "#",
      tag: "Embedded / C++",
      icon: <Cpu className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-[#003153] selection:text-white" style={{ backgroundColor: colors.bg }}>
      {/* 簡約標題列 */}
      <header className="py-12 bg-white/90 backdrop-blur-sm border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-3xl font-bold tracking-tighter mb-2" style={{ color: colors.navy }}>
            FIH_Tools<span style={{ color: colors.red }}>.</span>
          </div>
          <p className="text-gray-600 text-sm uppercase tracking-[0.3em]">20250401</p>
        </div>
      </header>

      {/* 專案展示區塊 */}
      <main className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a 
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-8 rounded-xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-black/5 shadow-md hover:shadow-2xl flex flex-col h-full"
                style={{ backgroundColor: 'white' }}
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                  style={{ backgroundColor: colors.bg + '33', color: colors.navy }} // 15% 透明度的背景
                >
                  {project.icon}
                </div>
                
                <span className="text-xs font-bold tracking-widest uppercase mb-2 block" style={{ color: colors.red }}>
                  {project.tag}
                </span>
                
                <h4 className="text-xl font-bold mb-3" style={{ color: colors.navy }}>
                  {project.title}
                </h4>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                  {project.desc}
                </p>
                
                <div className="flex items-center text-sm font-bold" style={{ color: colors.navy }}>
                  查看詳情 <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
                
                {/* 裝飾圖示 */}
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4 text-gray-300" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>

      {/* 簡單頁尾 */}
      <footer className="py-12 text-center text-sm text-gray-700">
        <div className="max-w-6xl mx-auto px-6">
          <p>© 2024 Personal KaiMingKai@gmail.com</p>
          <div className="mt-2 flex justify-center items-center space-x-2">
            <span style={{ color: colors.navy }} className="font-semibold">Taiwan</span>
            <div className="w-1 h-1 rounded-full bg-black/20"></div>
            <span style={{ color: colors.red }} className="font-semibold">Design Focused</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
