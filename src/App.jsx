import React from 'react';
import { 
  ExternalLink, 
  ChevronRight, 
  Terminal, 
  Network, 
  Layout, 
  Mail 
} from 'lucide-react';

const App = () => {
  // 根據圖片調整的精確配色
  const colors = {
    navy: '#003153',      // 深藍：標題與導航
    oak: '#D9C5B2',       // 橡木：主背景色
    headerBg: '#E5E1DA',  // 淺灰：標題區域背景
    cardBg: '#F0EEEB',    // 淺灰白：卡片背景
    red: '#7F1A1F',       // MUJI 紅：強調標籤
  };

  const projects = [
    {
      title: "Nav2 Sequence Designer",
      desc: "專為 FIH_Humanoid_AMR 打造的導航時序圖設計工具，優化自動導航開發流程與邏輯驗證。",
      link: "https://swaikaikai.github.io/nav2-sequence-designer/",
      tag: "ROBOTICS / TOOLING",
      icon: <Terminal className="w-5 h-5" />
    },
    {
      title: "ROS Topology Visualizer",
      desc: "自動解析 ROS 節點通訊關係，快速產生訊號拓圖，協助分析複雜的 AMR 通訊架構。",
      link: "https://swaikaikai.github.io/ros-topology-visualizer/",
      tag: "ROS / VISUALIZATION",
      icon: <Network className="w-5 h-5" />
    },
    {
      title: "Prussian Tool Suite",
      desc: "專為技術簡報打造的工具集，提供高效的排版與視覺化功能，協助快速建立專業的技術展示內容。",
      link: "https://kanmingkai.github.io/prussian-tool-suite/",
      tag: "PRESENTATION / TOOLING",
      icon: <Layout className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-[#003153] selection:text-white">
      
      {/* 上方標題區域：淺灰色背景 */}
      <header style={{ backgroundColor: colors.headerBg }} className="py-20 border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-4" style={{ color: colors.navy }}>
            Tools
          </h1>
          <div 
            className="px-4 py-1.5 rounded-sm text-sm font-semibold tracking-widest text-white uppercase"
            style={{ backgroundColor: colors.navy }}
          >
            swaikaikai.github.io
          </div>
        </div>
      </header>

      {/* 下方專案區域：橡木色背景 */}
      <main style={{ backgroundColor: colors.oak }} className="py-20 min-h-[60vh]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a 
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-10 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full shadow-lg hover:shadow-2xl"
                style={{ backgroundColor: colors.cardBg }}
              >
                {/* 圖示圓框 */}
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-10 transition-transform group-hover:scale-110 shadow-sm"
                  style={{ backgroundColor: '#E2E0DD', color: '#444' }}
                >
                  {project.icon}
                </div>

                {/* 內容描述 */}
                <div className="flex flex-col flex-grow">
                  <span className="text-xs font-bold tracking-widest uppercase mb-3 block" style={{ color: colors.red }}>
                    {project.tag}
                  </span>
                  
                  <h4 className="text-3xl font-bold mb-6 leading-tight" style={{ color: colors.navy }}>
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-600 text-base leading-relaxed mb-12 flex-grow">
                    {project.desc}
                  </p>
                  
                  <div className="flex items-center text-lg font-bold pt-8 border-t border-black/5" style={{ color: colors.navy }}>
                    進入系統 <ChevronRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
                
                {/* 右上角裝飾 */}
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-5 h-5 text-gray-400" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>

      {/* 頁尾 */}
      <footer style={{ backgroundColor: colors.oak }} className="pb-20 text-center text-sm text-gray-700">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <div className="w-full h-px bg-black/5 mb-12"></div>
          <p className="mb-2 font-semibold flex items-center gap-2" style={{ color: colors.navy }}>
            <Mail className="w-4 h-4" /> mingkaikan@gmail.com
          </p>
          <div className="mt-4 flex justify-center items-center space-x-2">
            <span className="font-bold">Taiwan</span>
            <div className="w-1 h-1 rounded-full bg-black/20"></div>
            <span className="font-bold">Robotics Engineer</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
