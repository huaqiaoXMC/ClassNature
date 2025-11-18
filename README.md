# ClassNature 项目网站

这是ClassNature第三代智能课表管理系统的官方项目网站。

## 网站结构

```
website/
├── index.html          # 主页面文件
├── css/
│   └── styles.css      # 网站样式文件
├── js/
│   └── script.js       # 网站交互脚本
└── README.md           # 本说明文件
```

## 功能特性

### 🎨 现代化设计
- 响应式设计，支持各种设备
- 现代化的UI界面，符合Material Design标准
- 流畅的动画效果和交互体验

### 📱 移动端优化
- 完全响应式布局
- 移动端优化的导航菜单
- 触摸友好的交互设计

### ⚡ 性能优化
- CSS和JavaScript代码优化
- 图片懒加载支持
- 平滑滚动和视差效果

### 🔍 SEO优化
- 完整的meta标签配置
- 语义化HTML结构
- Open Graph和Twitter Card支持

## 主要页面

### 🏠 首页 (index.html)
- 项目介绍和亮点展示
- 统计数据可视化
- 主要功能特性展示
- 更新日志展示
- 下载链接和联系方式

### 📋 核心功能
1. **智能课表管理** - 多学期、多班级支持，智能冲突检测
2. **主题定制系统** - 内置多种主题，支持自定义
3. **插件联动系统** - 强大插件架构，第三方集成
4. **数据导出功能** - 多格式导出，自定义模板
5. **云端同步** - 数据备份和同步
6. **智能提醒系统** - 基于API v2的灵活提醒
7. **天气集成** - 多种天气图标包
8. **自动化功能** - 触发器和行动时间点

## 技术栈

### 前端技术
- **HTML5** - 语义化标记
- **CSS3** - 现代CSS特性，Grid和Flexbox布局
- **JavaScript ES6+** - 现代JavaScript特性
- **响应式设计** - 移动优先设计理念

### 设计系统
- **颜色方案** - 基于CSS变量的主题系统
- **字体** - 系统字体栈，确保最佳可读性
- **图标** - 表情符号图标系统
- **动画** - CSS3动画和JavaScript交互

## 更新日志

网站展示的更新日志基于ClassNature项目的真实版本信息：

### Version 2.4.8.219 (2024年12月)
- ✅ 修复切换组件时提醒崩溃问题
- ✅ 修复轮播组件内存泄漏问题
- ✅ 新增主题功能
- ✅ 添加天气图标包支持
- ✅ 新增导出到表格功能

### Version 2.4.0.0 (2024年11月)
- ✅ 全新自定义导出功能
- ✅ 插件联动系统
- ✅ UI组件全面升级
- ✅ 提醒API v2
- ✅ 性能优化和界面改进

### Version 2.3.1.0 (2024年10月)
- ✅ 主题系统整合
- ✅ Excel导出功能
- ✅ 插件联动机制
- ✅ 修复轮播组件事件注册问题

### Version 2.3.0.0 (2024年9月发布)
- ✅ 开源协议更换为GPLv3
- ✅ 自动化功能引擎
- ✅ 容器和多行组件
- ✅ 调课面板
- ✅ 本地集控功能

## 浏览器支持

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

## 部署说明

### 本地预览
1. 克隆或下载网站文件
2. 在浏览器中打开 `index.html`
3. 或使用本地服务器：
   ```bash
   # 使用Python
   python -m http.server 8000
   
   # 使用Node.js
   npx serve .
   ```

### 部署到GitHub Pages
1. 将网站文件推送到GitHub仓库的 `gh-pages` 分支
2. 在仓库设置中启用GitHub Pages
3. 网站将自动部署到 `https://username.github.io/repository-name`

### 部署到其他平台
- **Netlify**: 拖拽文件夹到Netlify部署
- **Vercel**: 连接GitHub仓库自动部署
- **GitLab Pages**: 推送到 `gl-pages` 分支

## 自定义配置

### 修改主题色彩
在 `css/styles.css` 中修改CSS变量：
```css
:root {
    --primary-color: #4f46e5;      /* 主色调 */
    --secondary-color: #7c3aed;    /* 辅助色 */
    --accent-color: #06b6d4;       /* 强调色 */
    /* 其他颜色变量... */
}
```

### 添加新页面
1. 创建新的HTML文件
2. 复制 `index.html` 的header和footer结构
3. 修改主要内容区域
4. 更新导航菜单链接

### 修改动画效果
在 `js/script.js` 中调整：
- 滚动动画触发条件
- 统计数字动画速度
- 页面切换效果

## 贡献指南

欢迎为网站改进贡献力量！

### 如何贡献
1. Fork 本仓库
2. 创建功能分支
3. 提交您的更改
4. 发起Pull Request

### 报告问题
如果您发现网站问题，请在GitHub Issues中报告。

### 功能建议
对于新功能建议，请在GitHub Discussions中发起讨论。

## 许可证

本项目采用 GPLv3 许可证。详见 [LICENSE](../LICENSE) 文件。

## 联系方式

- **项目主页**: https://github.com/ClassNature
- **问题反馈**: https://github.com/ClassNature/issues
- **功能建议**: https://github.com/ClassNature/discussions
- **社区讨论**: https://github.com/ClassNature/discussions

---

感谢您对ClassNature项目的关注和支持！🎉