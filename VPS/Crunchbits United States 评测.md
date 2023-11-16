# Crunchbits United States 评测



## VPS配置详情

**CPU:** 2 Core vCPU

**Memory:** 3 GB

**Storage:** 25 GB SSD

**Traffic:** 4096 GB In & Out

**BandWidth:** 1 Gbps

**Instance Family:** Special Deals - 3GB YEARLY VPS

**Advantage:** Good Value For Money

**IPv4:** 1 IPv4

**IPv6:** 1 IPv6

**Location:** Washington D.C., United States

**Price:** 13.69 USD For A Year

[Order Without Aff](https://get.crunchbits.com/order/yearly-kvm-ssd-vps/84)



## VPS融合怪测试

**v2023.11.07**



```yaml
测评频道: https://t.me/vps_reviews                    
版本：2023.11.07
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel Core Processor (Broadwell, IBRS)
 CPU 核心数        : 2
 CPU 频率          : 2593.992 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 8.00 MB / L3: 32.00 MB
 硬盘空间          : 17.92 GiB / 24.05 GiB
 启动盘路径        : /dev/sda1
 内存              : 1.69 GiB / 2.80 GiB
 Swap              : 1.19 GiB / 4.00 GiB
 系统在线时间      : 25 days, 18 hour 23 min
 负载              : 0.77, 0.41, 0.34
 系统              : Ubuntu 22.04.3 LTS (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 5.15.0-87-generic
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : 开放型
 IPV4 ASN          : AS400304 REDOUBT NETWORKS
 IPV4 位置         : Liberty Lake / Washington / US
 IPV6 ASN          : AS400304 Crunchbits
 IPV6 位置         : Liberty Lake / Washington
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		936 Scores
 2 线程测试(多核)得分: 		1708 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		19213.68 MB/s
 单线程写测试:		14793.75 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		19.7 MB/s (4811 IOPS, 5.32s)		37.5 MB/s (9154 IOPS, 2.80s)
 1GB-1M Block		176 MB/s (168 IOPS, 5.96s)		1.9 GB/s (1810 IOPS, 0.55s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 127.78 MB/s  (31.9k) | 804.48 MB/s  (12.5k)
Write      | 128.12 MB/s  (32.0k) | 808.71 MB/s  (12.6k)
Total      | 255.90 MB/s  (63.9k) | 1.61 GB/s    (25.2k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 792.73 MB/s   (1.5k) | 402.93 MB/s    (393)
Write      | 834.85 MB/s   (1.6k) | 429.76 MB/s    (419)
Total      | 1.62 GB/s     (3.1k) | 832.69 MB/s    (812)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 美国  西雅图(SEA30S12)
Youtube识别地域: 无信息(null)
[IPv6]
连接方式: Youtube Video Server
视频缓存节点地域: 美国  西雅图(SEA09S34)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：美国
[IPv6]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：美国
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：美国区
[IPv6]
当前IPv6出口解锁DisneyPlus
区域：美国区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					Yes (Region: US)
 HotStar:				No
 Disney+:				No
 Netflix:				Originals Only
 YouTube Premium:			Yes
 Amazon Prime Video:			Yes (Region: US)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			US
 Viu.com:				No
 YouTube CDN:				Seattle, WA 
 Netflix Preferred CDN:			Seattle, WA  
 Spotify Registration:			Yes (Region: US)
 Steam Currency:			USD
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:					Failed (Network Connection)
 HotStar:				Yes (Region: US)
 Disney+:				Yes (Region: US)
 Netflix:				Yes (Region: US)
 YouTube Premium:			No  (Region: CN) 
 Amazon Prime Video:			Unsupported
 TVBAnywhere+:				Failed (Network Connection)
 iQyi Oversea Region:			Failed
 Viu.com:				Failed
 YouTube CDN:				Seattle, WA 
 Netflix Preferred CDN:			Seattle, WA  
 Spotify Registration:			Yes (Region: US)
 Steam Currency:			Failed (Network Connection)
 ChatGPT:				Yes
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【US】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):hosting①  Data Center/Web Hosting/Transit⑤  hosting⑧  business⑨  
  公司类型(company_type):hosting①  hosting⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
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
黑名单记录统计(有多少个黑名单网站有记录): 无害0 恶意0 可疑0 未检测88 ③
Google搜索可行性：YES
端口25检测:
  本地: Yes
  163邮箱: Yes
  gmail邮箱: Yes
  outlook邮箱: Yes
  qq邮箱：No
  yandex邮箱: Yes
------以下为IPV6检测------
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: Data Center/Web Hosting/Transit⑤
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: US 城市: Liberty Lake 服务商: AS400304 REDOUBT NETWORKS
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
26.63 ms 	AS400304 美国 华盛顿州 利伯蒂湖 redoubtnet.com
0.42 ms 	AS400304 美国 华盛顿州 利伯蒂湖 redoubtnet.com
11.73 ms 	AS2914 美国 华盛顿州 西雅图 ntt.net
12.45 ms 	AS2914 [NTT-BACKBONE] 美国 华盛顿州 西雅图 ntt.net
29.27 ms 	AS2914 [NTT-BACKBONE] 美国 加利福尼亚州 圣何塞 ntt.net
31.90 ms 	AS2914 [NTT-BACKBONE] 美国 加利福尼亚州 圣何塞 ntt.net
31.11 ms 	AS4134 [CHINANET-US] 美国 加利福尼亚州 圣克拉拉 chinatelecom.com.cn 电信
287.94 ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
187.05 ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
206.01 ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
191.13 ms 	AS4134 [CHINANET-GD] 中国 广东省 深圳市 chinatelecom.com.cn 电信
189.46 ms 	AS4134 中国 广东省 深圳市 福田区 chinatelecom.com.cn 电信
广州联通 210.21.196.6
20.99 ms 	AS400304 美国 华盛顿州 利伯蒂湖 redoubtnet.com
0.54 ms 	AS400304 美国 华盛顿州 利伯蒂湖 redoubtnet.com
1.65 ms 	AS6939 美国 爱达荷州 科达伦 he.net
213.02 ms 	AS6939 [HURRICANE-11] 美国 华盛顿州 西雅图 he.net
31.79 ms 	AS6939 [HURRICANE-11] 美国 加利福尼亚州 圣何塞 he.net
32.88 ms 	AS6939 [HURRICANE-11] 美国 加利福尼亚州 圣何塞 he.net
31.83 ms 	AS6939 美国 加利福尼亚州 圣何塞 he.net
188.92 ms 	AS4837 [CU169-BACKBONE] 中国 上海市 chinaunicom.cn 联通
197.30 ms 	AS4837 [CU169-BACKBONE] 中国 上海市 chinaunicom.cn 联通
292.98 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
198.62 ms 	AS17816 [UNICOM-GD] 中国 广东省 深圳市 chinaunicom.cn 联通
326.37 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 chinaunicom.cn 联通
197.66 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 宝安区 chinaunicom.cn 联通
广州移动 120.196.165.24
26.55 ms 	AS400304 美国 华盛顿州 利伯蒂湖 redoubtnet.com
0.48 ms 	AS400304 美国 华盛顿州 利伯蒂湖 redoubtnet.com
12.02 ms 	AS2914 美国 华盛顿州 西雅图 ntt.net
121.89 ms 	AS2914 [NTT-BACKBONE] 美国 华盛顿州 西雅图 ntt.net
104.74 ms 	AS2914 [NTT-BACKBONE] 日本 东京都 东京 ntt.net
153.94 ms 	AS2914 [NTT-BACKBONE] 中国 香港 ntt.net
158.81 ms 	AS2914 [NTT-BACKBONE] 中国 香港 ntt.net
196.95 ms 	AS2914 [NTT-GLOBAL] 中国 香港 ntt.net
297.64 ms 	AS58453 [CMI-INT] 中国 香港 cmi.chinamobile.com 移动
248.45 ms 	AS58453 [CMI-INT] 中国 广东省 广州市 cmi.chinamobile.com 移动
176.64 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
250.15 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
251.55 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
254.31 ms 	AS9808 [CMNET] 中国 海南省 海口市 chinamobile.com 移动
252.20 ms 	AS56040 [APNIC-AP] 中国 广东省 深圳市 chinamobile.com 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 1011.98 Mbps	 926.09 Mbps	 0.32	  0.0%
洛杉矶		 1029.80 Mbps	 913.49 Mbps	 38.53	  0.0%
日本东京	 687.29 Mbps	 351.87 Mbps	 131.03	  0.0%
联通湖南5G	 462.88 Mbps	 309.57 Mbps	 208.74	  NULL
联通上海5G	 837.57 Mbps	 434.52 Mbps	 182.24	  0.0%
电信浙江	 385.28 Mbps	 719.65 Mbps	 185.06	  NULL
电信浙江	 491.17 Mbps	 825.97 Mbps	 177.57	  NULL
------------------------------------------------------------------------
 总共花费      : 6 分 52 秒
 时间          : Thu Nov 16 17:54:46 CST 2023
------------------------------------------------------------------------
```



[融合怪测试结果短链接](https://paste.spiritlhl.net/code/apqHUE.txt)



### VPS商家评论频道



```yaml
#crunchbits
网站：crunchbits
 (https://get.crunchbits.com/aff.php?aff=17)支持支付方式：
Stripe (Visa/MC/Discover/Amex)  
Bitcoin / Bitcoin Cash  
PayPal
购买无最低充值限制
优惠码：
(Big Storage VPS循环-20%)CHOKEMYDISK
(Ryzen 5950X循环-15%)ONLYTOWEL 

评价：
#美国 #GPU
#流媒体解锁 
2022年起家的美国商家，默认1~2.5Gbps带宽
以下未计算优惠码
最低配1核2G内存25GNVME硬盘2T流量月付5美元
数据中心托管的硬件，数据中心同 #ionswitch 一样
#大盘鸡 
最低配1核1G内存7GNVME+2THDD硬盘10T流量月付8美元
流量用超后不是停机，限制带宽为5Mbps后 #不限流量
商宽类 #家宽 ，部分网站识别为IDC的IP
不抗abuse不支持BT
已测评已评论区补图 
冷门商家，没钱别碰
窥镜：
216.181.107.49
193.149.164.8 
104.36.84.1
2606:a8c0:0:1:0:1:1:1 
https://lg-cda.crunchbits.com/
```



[原文链接](https://t.me/vps_reviews/846)



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