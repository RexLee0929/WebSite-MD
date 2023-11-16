# AkileCloud Taiwan 评测



## VPS配置详情

**CPU:** 1 Core vCPU

**Memory:** 1 GB

**Storage:** 5 GB SSD

**Traffic:** 800 GB 

**BandWidth:** 500 Mbps

**Instance Family:** 台湾BGP Lite V2

**Advantage:** Good Value For Money

**IPv4:** 1 IPv4

**IPv6:** 1 IPv6

**Location:** Taiwan

**Price:** 9.9 CNY For A Month

[Order With Aff](https://akile.io/register?aff_code=a16d4fab-4fda-47c3-88ad-e12beb3a1c8f)

[Order Without Aff](https://akile.io/)



## VPS融合怪测试

**v2023.11.07**



```yaml
测评频道: https://t.me/vps_reviews                    
版本：2023.11.07
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD EPYC 7D12 32-Core Processor
 CPU 核心数        : 1
 CPU 频率          : 1097.937 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 512.00 KB / L3: 16.00 MB
 硬盘空间          : 2.58 GiB / 4.88 GiB
 启动盘路径        : /dev/sda1
 内存              : 184.22 MiB / 977.20 MiB
 Swap              : 268 KiB / 1024.00 MiB
 系统在线时间      : 2 days, 3 hour 57 min
 负载              : 0.41, 0.10, 0.03
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-13-cloud-amd64
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : 无法检测
 IPV4 ASN          : AS61112 AKILE LTD
 IPV4 位置         : Taipei / Taiwan / TW
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		1317 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		34971.47 MB/s
 单线程写测试:		16641.77 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		38.1 MB/s (9292 IOPS, 2.75s)		43.8 MB/s (10696 IOPS, 2.39s)
 1GB-1M Block		106 MB/s (101 IOPS, 9.90s)		106 MB/s (100 IOPS, 9.90s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 102.28 MB/s  (25.5k) | 102.34 MB/s   (1.5k)
Write      | 102.55 MB/s  (25.6k) | 102.87 MB/s   (1.6k)
Total      | 204.83 MB/s  (51.2k) | 205.22 MB/s   (3.2k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 97.73 MB/s     (190) | 96.58 MB/s      (94)
Write      | 102.92 MB/s    (201) | 103.01 MB/s    (100)
Total      | 200.66 MB/s    (391) | 199.60 MB/s    (194)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: TSA(TSA01S15)
Youtube识别地域: 台湾(TW)
[IPv6]
连接方式: Youtube Video Server
视频缓存节点地域: TSA(TSA01S15)
Youtube识别地域: 台湾(TW)
----------------Netflix----------------
[IPv4]
您的网络可能没有正常配置IPv4，或者没有IPv4网络接入
[IPv6]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：台湾
---------------DisneyPlus---------------
[提醒] 无法获取DisneyPlus权验接口信息，当前测试可能会不准确
[IPv6]
当前IPv6出口解锁DisneyPlus
区域：台湾区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					Yes (Region: TW)
 HotStar:				Yes (Region: SG)
 Disney+:				No
 Netflix:				Failed (Network Connection)
 YouTube Premium:			Yes (Region: TW)
 Amazon Prime Video:			Yes (Region: TW)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			TW
 Viu.com:				Yes (Region: SG)
 YouTube CDN:				Taipei 
 Netflix Preferred CDN:			Failed
 Steam Currency:			TWD
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:					Failed (Network Connection)
 HotStar:				Yes (Region: SG)
 Disney+:				Yes (Region: TW)
 Netflix:				Yes (Region: TW)
 YouTube Premium:			Yes (Region: TW)
 Amazon Prime Video:			Unsupported
 TVBAnywhere+:				Failed (Network Connection)
 iQyi Oversea Region:			Failed
 Viu.com:				Yes (Region: SG)
 YouTube CDN:				Taipei 
 Netflix Preferred CDN:			Associated with [Akari Networks] in [Hong Kong ]
 Spotify Registration:			Yes (Region: TW)
 Steam Currency:			Failed (Network Connection)
 ChatGPT:				Yes
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【TW】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):hosting①  Data Center/Web Hosting/Transit⑤  isp⑧  business⑨  
  公司类型(company_type):business①  isp⑧  
  云服务提供商(cloud_provider):  No⑧ 
  数据中心(datacenter):  Yes②   No⑥ ⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ② ⑥ ⑦ ⑧ ⑨ ⑩ 
  VPN(vpn):  No① ② ⑦ ⑧ 
  TOR(tor):  No① ② ⑦ ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):  No② 
  匿名代理(anonymous):  No⑦ ⑧ ⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No① ⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
Google搜索可行性：YES
------以下为IPV6检测------
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: Data Center/Web Hosting/Transit⑤
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: TW 城市: Taipei 服务商: AS61112 AKILE LTD
北京电信 219.141.136.12  电信163 [普通线路]           
北京联通 202.106.50.1    联通4837[普通线路]           
北京移动 221.179.155.161 移动CMI [普通线路]           
上海电信 202.96.209.133  电信163 [普通线路]           
上海联通 210.22.97.1     联通4837[普通线路]           
上海移动 211.136.112.200 移动CMI [普通线路]           
广州电信 58.60.188.222   电信163 [普通线路]           
广州联通 210.21.196.6    联通4837[普通线路]           
广州移动 120.196.165.24  移动CMI [普通线路]           
成都电信 61.139.2.69     电信163 [普通线路]           
成都联通 119.6.6.6       联通4837[普通线路]           
成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.36 ms 	AS61112 中国 台湾省 台北市 IDC
0.99 ms 	AS174 [COGENT-BONE] 美国 华盛顿哥伦比亚特区 华盛顿 cogentco.com
30.64 ms 	AS174 [COGENT-NB] 日本 东京都 东京 cogentco.com
158.71 ms 	AS174 [COGENT-BONE] 美国 华盛顿哥伦比亚特区 华盛顿 cogentco.com
158.64 ms 	AS174 [COGENT-BONE] 美国 加利福尼亚州 洛杉矶 cogentco.com
158.84 ms 	AS174 [COGENT-BONE] 美国 加利福尼亚州 圣何塞 cogentco.com
158.79 ms 	AS174 [COGENT-BONE] 美国 加利福尼亚州 圣何塞 cogentco.com
158.91 ms 	AS174 美国 加利福尼亚州 圣克拉拉 cogentco.com
314.44 ms 	AS4134 [CHINANET-BB] 中国 香港 chinatelecom.com.cn 电信
416.73 ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
415.46 ms 	AS134774 [CHINANET-GD] 中国 广东省 深圳市 chinatelecom.cn 电信
321.22 ms 	AS4134 中国 广东省 深圳市 福田区 chinatelecom.com.cn 电信
广州联通 210.21.196.6
0.36 ms 	AS61112 中国 台湾省 台北市 IDC
0.95 ms 	AS174 [COGENT-BONE] 美国 华盛顿哥伦比亚特区 华盛顿 cogentco.com
30.72 ms 	AS174 [COGENT-NB] 日本 东京都 东京 cogentco.com
30.95 ms 	AS174 [COGENT-BONE] 日本 东京都 东京 cogentco.com
132.30 ms 	AS174 [COGENT-BONE] 美国 加利福尼亚州 洛杉矶 cogentco.com
133.64 ms 	AS174 [COGENT-BONE] 美国 加利福尼亚州 洛杉矶 cogentco.com
136.77 ms 	AS174 美国 加利福尼亚州 洛杉矶 cogentco.com
540.81 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
524.07 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
302.48 ms 	AS17816 [APNIC-AP] 中国 广东省 茂名市 chinaunicom.cn 联通
417.81 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 chinaunicom.cn 联通
314.87 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 宝安区 chinaunicom.cn 联通
广州移动 120.196.165.24
0.57 ms 	AS61112 中国 台湾省 台北市 IDC
1.00 ms 	AS174 [COGENT-BONE] 美国 华盛顿哥伦比亚特区 华盛顿 cogentco.com
30.80 ms 	AS174 [COGENT-NB] 日本 东京都 东京 cogentco.com
30.82 ms 	AS174 [COGENT-BONE] 日本 东京都 东京 cogentco.com
131.54 ms 	AS174 [COGENT-BONE] 美国 加利福尼亚州 洛杉矶 cogentco.com
130.00 ms 	AS174 [COGENT-BONE] 美国 加利福尼亚州 洛杉矶 cogentco.com
153.01 ms 	AS174 [COGENT-BONE] 美国 加利福尼亚州 洛杉矶 cogentco.com
139.75 ms 	AS174 美国 加利福尼亚州 洛杉矶 cogentco.com
149.99 ms 	AS58453 [CMI-INT] 美国 加利福尼亚州 洛杉矶 cmi.chinamobile.com 移动
150.86 ms 	AS58453 [CMI-INT] 美国 加利福尼亚州 洛杉矶 cmi.chinamobile.com 移动
414.97 ms 	AS58453 [CMI-INT] 中国 广东省 广州市 cmi.chinamobile.com 移动
297.34 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
496.12 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
409.47 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
296.27 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
301.98 ms 	AS9808 [CMNET] 中国 海南省 海口市 chinamobile.com 移动
298.70 ms 	AS56040 [APNIC-AP] 中国 广东省 深圳市 chinamobile.com 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 516.34 Mbps	 496.70 Mbps	 0.30	  0.0%
中国香港	 270.65 Mbps	 491.21 Mbps	 20.13	  NULL
日本东京	 138.68 Mbps	 124.67 Mbps	 35.52	  0.0%
联通湖南5G	 23.97 Mbps	 141.71 Mbps	 289.53	  NULL
电信浙江	 263.73 Mbps	 502.94 Mbps	 287.07	  NULL
电信江苏5G	 40.75 Mbps	 479.26 Mbps	 268.89	  0.0%
------------------------------------------------------------------------
 总共花费      : 7 分 38 秒
 时间          : Thu Nov 16 17:55:12 CST 2023
------------------------------------------------------------------------
```



[融合怪测试结果短链接](https://paste.spiritlhl.net/code/FQBXfR.txt)



### VPS商家评论频道



```yaml
#akile
网站：akile
 (https://akile.io/register?aff_code=77ddd866-95dc-4c68-bdc9-00953052893a)支持支付方式：
支付宝
USDT
购买无最低充值限制

评价：
#灵车
#日本 #软银 
#香港 #美国 #加拿大 #台湾 #土耳其
2023年4月起家的 #国人 商家，慎重购买
未做特殊说明都是1Gbps带宽
香港 - 10Gbps上联带宽
最低配1核0.5G内存20G硬盘1T流量月付5.77美元
美国BGP
最低配1核0.5G内存20G硬盘1T流量月付2.14美元
美国三网优化
最低配1核0.5G内存20G硬盘0.5T流量月付2.14美元
加拿大
最低配1核1G内存50G硬盘2T流量月付2.16美元
日本 - 100Mbps带宽 - 上游 #netinnovation
最低配1核0.5G内存20G硬盘600G流量月付2.88美元
已测评已评论区补图，所有地区均转售非自有设备
冷门商家，没钱别碰
窥镜：
日本 上游 #wuyuidc
103.19.51.129
http://lg.jp.osaka.bbtec.akile.io/
日本BGP 上游 #datapacket
103.94.234.126
http://lg.jp.bgp.akile.io
日本 #CN2 上游 #Nearoute
103.20.198.1
香港 HGC
118.140.27.104
http://lg.hk-hgc.akile.io
香港 HKlite
45.8.186.129
2401:b60:5:1d::a
http://lg.hklite.akile.io/
香港 #动态IP #NAT HGC
218.190.245.33
http://lg.hk.hgc-dynamic.akile.io
美国BGP 上游 #heficed
108.165.43.2
http://lg.lax.bgp.akile.io/
美国三网优化 上游 #艾云
38.102.234.108
http://lg.lax2.bgp.akile.io/
加拿大 上游 #艾云
43.250.107.169
http://lg.ca-tgs4.akile.io/
台湾 #家宽
114.42.176.165
http://lg.tw.hinet.akile.io/
韩国 上游 #moack
156.234.76.1
土耳其
185.161.122.1
```



[原文链接](https://t.me/vps_reviews/1337)



## 致谢

<table border="1">
  <tr>
    <td>
      <a href="https://github.com/spiritLHLS">
        <img src="https://avatars.githubusercontent.com/u/103393591?v=4" alt="spiritLHLS" style="width:100px;"><br>
        spiritLHLS
      </a>
      <hr>
      <a href="https://github.com/spiritLHLS/ecs">ecs</a>
    <td>
      <a href="https://t.me/spiritlhl">
        <img src="https://avatars.githubusercontent.com/u/103393591?v=4" alt="spiritlhl" style="width:100px;"><br>
        spiritlhl
      </a>
      <hr>
      <a href="https://t.me/spiritlhl">spiritlhl</a>
    </td>
    </td>
    <td>
      <a href="https://t.me/vps_reviews">
        <img src="https://chevereto.rexlee.click/images/2023/11/16/VPS.jpeg" alt="VPS商家评论频道" style="width:100px;"><br>
        VPS商家评论频道
      </a>
      <hr>
      <a href="https://t.me/vps_reviews">VPS商家评论频道</a>
    </td>
  </tr>
</table>