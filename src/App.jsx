import React from 'react';
import { ExternalLink, ChevronRight, Terminal, Network, Cpu, Github, Mail } from 'lucide-react';

const App = () => {
  // 顏色定義
  const colors = {
    navy: '#003153',
    oak: '#D9C5B2',
    red: '#7F1A1F',
    bg: '#D9C5B2' 
  };

  const projects = [
    {
      title: "Nav2 Sequence Designer",
      desc: "為 FIH_Humanoid_AMR 打造的導航時序圖設計工具，優化自動導航開發流程。",
      link: "https://swaikaikai.github.io/nav2-sequence-designer/",
      tag: "Robotics / Tooling",
      icon: <Terminal className="w-6 h-6" />
    },
    {
      title: "ROS Topology Visualizer",
      desc: "快速產生 ROS 訊號拓普圖的視覺化工具，協助開發者直觀地分析節點間的通訊架構。",
      link: "https://swaikaikai.github.io/ros-topology-visualizer/",
      tag: "ROS / Visualization",
      icon: <Network className="w-6 h-6" />
    },
    {
      title: "Firmware Interaction Lib",
      desc: "高效能的嵌入式系統通訊庫，支援多種感測器協議整合與資料處理。",
      link: "#",
      tag: "Embedded / C++",
      icon: <Cpu className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-[#003153] selection:text-white pb-20" style={{ backgroundColor: colors.bg }}>
      {/* 簡約標題列 */}
      <header className="py-12 bg-white/90 backdrop-blur-sm border-b border-black/5 mb-12 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-2">
            <Github className="w-8 h-8" style={{ color: colors.navy }} />
            <div className="text-3xl font-bold tracking-tighter" style={{ color: colors.navy }}>
              SwaiKaiKai
            </div>
          </div>
          <p className="text-gray-600 text-sm tracking-[0.1em] font-medium">mingkaikan@gmail.com</p>
        </div>
      </header>

      {/* 專案展示區塊 */}
      <main className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a 
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-10 rounded-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col h-full shadow-lg hover:shadow-2xl border border-transparent hover:border-white/50"
              style={{ backgroundColor: 'white' }}
            >
              {/* 圖示區域 */}
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110"
                style={{ backgroundColor: colors.bg + '33', color: colors.navy }}
              >
                {project.icon}
              </div>

              {/* 內容描述區域 */}
              <div className="flex flex-col flex-grow">
                <span className="text-xs font-bold tracking-widest uppercase mb-2 block" style={{ color: colors.red }}>
                  {project.tag}
                </span>
                
                <h4 className="text-2xl font-bold mb-4" style={{ color: colors.navy }}>
                  {project.title}
                </h4>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-10 flex-grow">
                  {project.desc}
                </p>
                
                <div className="flex items-center text-sm font-bold pt-6 border-t border-gray-100" style={{ color: colors.navy }}>
                  查看專案詳情 <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
              
              {/* 右上角跳轉圖示 */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-5 h-5 text-gray-300" />
              </div>
            </a>
          ))}
        </div>
      </main>

      {/* 簡單頁尾 */}
      <footer className="py-20 text-center text-sm text-gray-700">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <p className="mb-2 font-medium flex items-center gap-2" style={{ color: colors.navy }}>
            <Mail className="w-4 h-4" /> mingkaikan@gmail.com
          </p>
          <p>© 2024 Personal Portfolio</p>
          <div className="mt-4 flex justify-center items-center space-x-2">
            <span style={{ color: colors.navy }} className="font-semibold">Taiwan</span>
            <div className="w-1 h-1 rounded-full bg-black/20"></div>
            <span style={{ color: colors.red }} className="font-semibold">Robotics & UI</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
