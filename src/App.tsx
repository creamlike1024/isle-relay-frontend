import ClickToCopy from './clickClip'; 
import githubIcon from './assets/github-mark.svg';

function App() {

  return (
    <section className="main">
      <h1 id="relay-isle-moe">relay.isle.moe++</h1>

      <h2 id="订阅">订阅</h2>

      <p>欢迎～</p>

      <ul>
          <li>对于 Mastodon 和 Misskey 等兼容中继协议的软件可以使用这个链接订阅： <ClickToCopy>https://relay.isle.moe/inbox</ClickToCopy></li>
          <li>对于 Pleroma，请根据<a href="https://docs-develop.pleroma.social/backend/administration/CLI_tasks/relay/" target="_blank">官方文档</a>使用命令行订阅该地址： <ClickToCopy>https://relay.isle.moe/actor</ClickToCopy></li>
          <li>对于其他软件，请参考相应软件的文档订阅中继</li>
      </ul>

      <p>如果订阅异常可以试试移除中继再重新订阅！</p>

      <p>所使用的后端为 <a href="https://github.com/yukimochi/Activity-Relay" target="_blank"><img src={githubIcon} alt="Github" className='img-icon' />yukimochi/Activity-Relay</a></p>

      <p>页面生成器：<a href="https://github.com/creamlike1024/isle-activity-relay-frontend" target="_blank"><img src={githubIcon} alt="Github" className='img-icon' />isle-activity-relay-frontend</a>
       前端：<a href="https://github.com/creamlike1024/isle-relay-frontend" target="_blank"><img src={githubIcon} alt="Github" className='img-icon' />sle-relay-frontend</a>
      </p>

      <p>有问题可以联系 <a href="https://m.isle.moe/@claire" target="_blank">@Claire <img src="https://oss.isle.moe/files/08356d3c-6cc6-4f16-9163-deb4ec7d7117.png" className='img-icon'/></a></p>

      <h2 id="订阅的实例列表">订阅的实例列表</h2>

      <p><em>每 5 分钟更新一次</em></p>

      <p>共 <strong>??</strong> 个站点</p>


      <p>感谢大家的支持</p>

      <p>列表最后更新于 ???</p>

      <h2 id="收信日志">收信日志</h2>
      <pre id="server-logs" style={{'height': '20em'}}></pre>

      <button>清空收信日志</button>
      <button>复制日志</button>
      <button>暂停</button>
      <button>重连</button>

      <h2 id="送信日志">送信日志</h2>
      <pre id="worker-logs" style={{'height': '30em'}}></pre>

      <button>清空送信日志</button>
      <button>复制日志</button>
      <button>暂停</button>
      <button>重连</button>

    </section>
  )
}

export default App
