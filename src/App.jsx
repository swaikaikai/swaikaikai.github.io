import React from 'react';
import {
  ExternalLink,
  ChevronRight,
  Terminal,
  Network,
  Layout,
  Mail,
  Cpu,
  Bot,
  MapPin,
} from 'lucide-react';
import heroImg from './assets/hero.png';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const colors = {
  navy:      '#003153',
  oak:       '#D9C5B2',
  headerBg:  '#E5E1DA',
  cardBg:    '#F0EEEB',
  red:       '#7F1A1F',
  sectionBg: '#EDE9E3',
};

const techStack = [
  'ROS 2', 'Nav2', 'Python', 'C++', 'AMR', 'Linux', 'Docker', 'Git',
];

const projects = [
  {
    title: 'Nav2 Sequence Designer',
    desc: '專為 FIH_Humanoid_AMR 打造的導航時序圖設計工具，優化自動導航開發流程與邏輯驗證。',
    link: 'https://kanmingkai.github.io/nav2-sequence-designer/',
    tag: 'ROBOTICS / TOOLING',
    icon: <Terminal className="w-5 h-5" />,
  },
  {
    title: 'ROS Topology Visualizer',
    desc: '自動解析 ROS 節點通訊關係，快速產生訊號拓圖，協助分析複雜的 AMR 通訊架構。',
    link: 'https://kanmingkai.github.io/ros-topology-visualizer/',
    tag: 'ROS / VISUALIZATION',
    icon: <Network className="w-5 h-5" />,
  },
  {
    title: 'Prussian Tool Suite',
    desc: '專為技術簡報打造的工具集，提供高效的排版與視覺化功能，協助快速建立專業的技術展示內容。',
    link: 'https://kanmingkai.github.io/prussian-tool-suite/',
    tag: 'PRESENTATION / TOOLING',
    icon: <Layout className="w-5 h-5" />,
  },
];

const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-10 h-10 rounded-full flex items-center justify-center border border-black/10 hover:border-black/25 hover:bg-black/5 transition-all duration-200"
    style={{ color: colors.navy }}
  >
    {icon}
  </a>
);

const App = () => (
  <div className="min-h-screen font-sans selection:bg-[#003153] selection:text-white">

    {/* ── HERO ── */}
    <header style={{ backgroundColor: colors.headerBg }} className="border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center md:items-start gap-12">

        {/* Left: identity */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm text-white mb-6"
            style={{ backgroundColor: colors.red }}
          >
            <MapPin className="w-3 h-3" /> Taiwan
          </span>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-3 leading-tight" style={{ color: colors.navy }}>
            Kan Ming Kai
          </h1>

          <p className="text-lg font-semibold mb-2" style={{ color: colors.navy + 'CC' }}>
            Robotics Engineer
          </p>

          <p className="text-base text-gray-500 max-w-md mb-8 leading-relaxed">
            打造自主移動機器人的開發工具，讓複雜的 ROS 2 系統更易於設計、驗證與呈現。
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <SocialLink
              href="https://github.com/KanMingKai"
              icon={<GithubIcon />}
              label="GitHub"
            />
            <SocialLink
              href="https://www.linkedin.com/in/kanmingkai"
              icon={<LinkedinIcon />}
              label="LinkedIn"
            />
            <SocialLink
              href="mailto:mingkaikan@gmail.com"
              icon={<Mail className="w-4 h-4" />}
              label="Email"
            />
          </div>
        </div>

        {/* Right: hero illustration */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <img
            src={heroImg}
            alt="hero illustration"
            className="w-52 md:w-64 opacity-80 select-none"
            draggable="false"
          />
        </div>
      </div>
    </header>

    {/* ── ABOUT ── */}
    <section style={{ backgroundColor: colors.sectionBg }} className="py-16 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12 md:gap-20 items-start">

        {/* Bio */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-5">
            <Bot className="w-5 h-5" style={{ color: colors.navy }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: colors.red }}>About</span>
          </div>
          <p className="text-gray-700 leading-loose text-base">
            專注於自主移動機器人（AMR）的軟體開發，深耕 ROS 2 導航架構與感知系統整合。
            熱衷於將複雜的機器人工程問題轉化為簡潔、高效的開發工具，
            讓團隊能更快速地迭代與驗證系統行為。
          </p>
        </div>

        {/* Tech stack */}
        <div className="md:w-72">
          <div className="flex items-center gap-2 mb-5">
            <Cpu className="w-5 h-5" style={{ color: colors.navy }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: colors.red }}>Tech Stack</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-sm font-semibold border"
                style={{ color: colors.navy, borderColor: colors.navy + '30', backgroundColor: colors.cardBg }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ── PROJECTS ── */}
    <main style={{ backgroundColor: colors.oak }} className="py-20 min-h-[50vh]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex items-center gap-2 mb-12">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: colors.red }}>Projects</span>
          <div className="flex-1 h-px bg-black/8"></div>
        </div>

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
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-10 transition-transform group-hover:scale-110 shadow-sm"
                style={{ backgroundColor: '#E2E0DD', color: '#444' }}
              >
                {project.icon}
              </div>

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

              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-5 h-5 text-gray-400" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>

    {/* ── FOOTER ── */}
    <footer style={{ backgroundColor: colors.oak }} className="pb-16 text-center text-sm text-gray-600">
      <div className="max-w-6xl mx-auto px-6">
        <div className="w-full h-px bg-black/5 mb-10"></div>
        <p className="font-semibold mb-1" style={{ color: colors.navy }}>Kan Ming Kai</p>
        <p className="text-xs tracking-widest uppercase opacity-60">
          kanmingkai.github.io · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  </div>
);

export default App;
