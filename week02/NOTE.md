# 第2周学习总结

toy-browser ：用js代码基于nodejs环境实现一个极简玩具浏览器

## 浏览器一个完整渲染的工作流程
从键入url，到得到bitmap。

### http请求与响应
URL -> 发起http请求，解析http的响应内容

### html文本解析
HTML -> parse（文本分析），得到dom树

### css计算
DOM -> css computing ， 得到带样式的dom树

### 排版
DOM with CSS -> layout 布局/排版， 得到盒的位置

### 渲染
DOM with position -> render  背景图/背景色等

### 显示到屏幕
Bitmap：浏览器最后显示在屏幕上的整个网页一定是bitmap图片。
最后通过操作系统和硬件驱动，把bitmap显示到屏幕。

（真实的浏览器还有：交互、性能、历史、书签收藏、插件等功能）

## 基础知识：有限状态机，处理字符串
### 定义
每一个状态都是一个（独立的）机器
解耦：每个机器互相不影响
在每个机器里，可以做计算、存储、输出。。。
所有这些机器接受的输入是一致的
每一个机器本身没有状态
如果用函数表示的话，是纯函数（no side-effect 无副作用）
每个机器知道下一个状态
每个机器都有确定的下一个状态（Moore状态机）
每个机器根据输入决定下一个状态（Mealy状态机）
实现复杂，表达能力强大

### 用js实现Mealy状态机
每个函数是一个状态
函数参数是状态机的输入
函数返回值作为下一个状态

是否使用状态机，差别在于：执行性能，代码组织的方便性。

## 不使用状态机做字符串匹配
循环遍历目标字符串，和pattern字符串中的字符依次比较。每一次循环，记录前一次比较结果。
使用状态机做字符串匹配
pattern中的每一个字符，是状态机中的一个状态。

## http协议
ISO-OSI七层网络模型
HTTP：request、response，头，body，状态码
TCP协议：流、端口
IP协议：包，IP地址

## 服务端
用nodejs环境实现服务端的http服务器

## 客户端
发起HTTP请求，获取响应，解析响应到 状态码、状态说明、headers、body中：
{
  statusCode: RegExp.$1,
  statusText: RegExp.$2,
  headers: this.headers,
  body: this.bodyParser.content.join('')
}
