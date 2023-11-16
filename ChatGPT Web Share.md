# ChatGPT Web Share 0.4.0-alpha7.5 部署



## 使用 Docker Compose 部署

首先你需要创建一个文件夹用于存放配置文件

```bash
mkdir ChatGPT-Share
cd ChatGPT-Share
```



### **创建**`docker-compose.yml`配置

这里使用`Ninja`来进行反代由于`go-chatgpt-api`已经归档可能存在无法使用的情况暂时不考虑使用



#### `docker-compose.yml`模板

```yaml
version: "3"

services:
  CWS0.4.0-alpha7.5:
    image: ghcr.io/moeakwak/chatgpt-web-share:0.4.0-alpha7.5
    container_name: CWS0.4.0-alpha7.5
    restart: always
    ports:
      - "127.0.0.1:8090:80"  #端口可调整
    volumes:
      - ./data:/app/backend/data
    environment:
      - TZ=Asia/Shanghai
      - CWS_CONFIG_DIR=/app/backend/data/config
    depends_on:
      - mongo

  mongo:
    image: mongo:6.0
    restart: always
    volumes:
      - ./mongo_data:/data/db
    environment:
      MONGO_INITDB_DATABASE: cws
      MONGO_INITDB_ROOT_USERNAME: cws
      MONGO_INITDB_ROOT_PASSWORD: Aa112211

  ninja-0.8.0:
    image: ghcr.io/gngpp/ninja:0.8.0
    container_name: ninja-0.8.0
    restart: unless-stopped
    command: run
    ports:
      - "127.0.0.1:6066:7999"
    environment:
      - TZ=Asia/Shanghai
    volumes:
          - "./gpt3har:/root/.gpt3"
          - "./gpt4har:/root/.gpt4"

#  go-chatgpt-api:
#    image: linweiyuan/go-chatgpt-api:latest
#    ports:
#      - "127.0.0.1:6060:8080"
#    environment:
#      - GIN_MODE=release
#    volumes:
#      - "./chat.openai.com.har:/app/chat.openai.com.har"
#    restart: unless-stopped
```



### 创建`cws`的配置文件

在存放`docker-compose.yml`的目录下创建`data`文件夹然后在`data`下创建`config`文件夹

在`config`下创建`config.yaml`和`credentials.yaml`文件



#### `config.yaml`模板

```yaml
openai_web:
  enabled: true
  is_plus_account: true
  chatgpt_base_url: http://127.0.0.1:6066/backend-api/ #这里填写你自己设置的ninja地址
  proxy:
  common_timeout: 10
  ask_timeout: 600
  sync_conversations_on_startup: true
  sync_conversations_schedule: true
  sync_conversations_schedule_interval_hours: 12
  enabled_models:
  - gpt_3_5
  - gpt_3_5_mobile
  - gpt_4
  - gpt_4_mobile
  - gpt_4_browsing
  - gpt_4_code_interpreter
  - gpt_4_plugins
  - gpt_4_dalle
  model_code_mapping:
    gpt_3_5: text-davinci-002-render-sha
    gpt_3_5_mobile: text-davinci-002-render-sha-mobile
    gpt_4: gpt-4
    gpt_4_mobile: gpt-4-mobile
    gpt_4_code_interpreter: gpt-4-code-interpreter
    gpt_4_browsing: gpt-4-browsing
    gpt_4_plugins: gpt-4-plugins
    gpt_4_dalle: gpt-4-dalle
  file_upload_strategy: browser_upload_only
  enable_uploading_attachments: true
  enable_uploading_multimodal_images: true
openai_api:
  enabled: true
  openai_base_url: https://open.virtualtips.info/v1/
  proxy:
  connect_timeout: 10
  read_timeout: 20
  enabled_models:
  - gpt_3_5
  - gpt_4
  model_code_mapping: #这里可以随意映射你可以使用的api模型
    gpt_3_5: gpt-3.5-turbo
    gpt_4: gpt-4
common:
  print_sql: false
  create_initial_admin_user: true
  initial_admin_user_username: admin #管理员用户登录名可以随意修改
  initial_admin_user_password: 123456 #管理员用户密码,请修改成强密码防止他人使用
http:
  host: 127.0.0.1
  port: 8000
  cors_allow_origins:
  - http://localhost
  - http://127.0.0.1
data:
  data_dir: ./data
  database_url: sqlite+aiosqlite:///data/database.db
  mongodb_url: mongodb://cws:Aa112211@mongo:27017 #请填写和docker-compose配置文件中一致的端口名称密码
  mongodb_db_name: cws
  run_migration: true
  max_file_upload_size: 104857600
auth:
  jwt_secret: xxxxxxxxxx #请替换为随机生成的字符串
  jwt_lifetime_seconds: 86400
  cookie_max_age: 86400
  user_secret: xxxxxxxxxx #请替换为随机生成的字符串
stats:
  ask_stats_ttl: 7776000
  request_stats_ttl: 2592000
  request_stats_filter_keywords:
  - /status
log:
  console_log_level: DEBUG
```



#### `credentials.yaml`模板

```yaml
openai_web_access_token: 
  'token'
openai_api_key: 'api'
#替换token和api为你自己的实际情况,然后删除引号
```

然后在`cws`目录下执行来启动

```bash
docker-compose up -d
```



### `Har`的使用

如果无法正常使用`GPT-3.5`或`GPT-4`则需要进行抓取`Har`然后上传到`Ninja`中,具体操作如下:

访问 [ChatGPT ](https://chat.openai.com/)官网创建对应的对话(抓`GPT-3.5`的话就创建`GPT-3.5`的对话,`GPT-4`同理)然后发送任意消息 通过浏览器的开发者工具下载`https://tcr9i.chat.openai.com/fc/gt2/public_key/35536E1E-65B4-4D96-9D97-6ADB7EFF8147`接口的HAR日志记录文件 然后将该文件通过`Ninja`的网页`http://127.0.0.1:6066/har/upload`进行上传

[![image.png](https://chevereto.rexlee.click/images/2023/11/16/image.png)](https://chevereto.rexlee.click/image/Mrg8)

[![imaged02b520484f691c8.png](https://chevereto.rexlee.click/images/2023/11/16/imaged02b520484f691c8.png)](https://chevereto.rexlee.click/image/MdHZ)

## 大功告成



## 相关链接

<table border="1">
  <tr>
    <th>开发者</th>
    <td>
      <a href="https://github.com/moeakwak">
        <img src="https://avatars.githubusercontent.com/u/80299225?v=4" alt="Moeakwak" style="width:60px;"><br>
        moeakwak
      </a>
    </td>
    <td>
      <a href="https://github.com/gngpp">
        <img src="https://avatars.githubusercontent.com/u/51810656?v=4" alt="gngpp" style="width:60px;"><br>
        gngpp
      </a>
    </td>
    <td>
      <a href="https://github.com/linweiyuan">
        <img src="https://avatars.githubusercontent.com/u/49076004?v=4" alt="linweiyuan" style="width:60px;"><br>
        linweiyuan
      </a>
    </td>
  </tr>
  <tr>
    <th>项目名称</th>
    <td><a href="https://github.com/moeakwak/chatgpt-web-share">chatgpt-web-share</a></td>
    <td><a href="https://github.com/gngpp/ninja">ninja</a></td>
    <td><a href="https://github.com/linweiyuan/go-chatgpt-api">go-chatgpt-api</a></td>
  </tr>
</table>
<table border="1">
  <tr>
    <td>
      <a href="https://github.com/moeakwak">
        <img src="https://avatars.githubusercontent.com/u/80299225?v=4" alt="Moeakwak" style="width:170px;"><br>
        moeakwak
      </a>
      <hr>
      <a href="https://github.com/moeakwak/chatgpt-web-share">chatgpt-web-share</a>
    </td>
    <td>
      <a href="https://github.com/gngpp">
        <img src="https://avatars.githubusercontent.com/u/51810656?v=4" alt="gngpp" style="width:170px;"><br>
        gngpp
      </a>
      <hr>
      <a href="https://github.com/gngpp/ninja">ninja</a>
    </td>
    <td>
      <a href="https://github.com/linweiyuan">
        <img src="https://avatars.githubusercontent.com/u/49076004?v=4" alt="linweiyuan" style="width:170px;"><br>
        linweiyuan
      </a>
      <hr>
      <a href="https://github.com/linweiyuan/go-chatgpt-api">go-chatgpt-api</a>
    </td>
  </tr>
</table>


      <hr>
      <a href="https://github.com/linweiyuan/go-chatgpt-api">go-chatgpt-api</a>
    </td>
  </tr>
</table>

