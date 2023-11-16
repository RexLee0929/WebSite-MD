# Aliyun SAS Singapore 评测



## VPS配置详情

**CPU:** 2 Core vCPU

**Memory:** 0.5 GB

**Storage:** 40 GB ESSD

**Traffic:** 1024 GB Out

**BandWidth:** 30 Mbps

**Instance Family:** Simple Application Server

**Advantage:** Top Cloud Service Provider with High SLA Standards

**IPv4:** 1 IPv4

**IPv6:** 0 IPv6

**Location:** Singapore

**Price:** 24 CNY or 3.5 USD For A Month

[Order Without Aff](https://www.alibabacloud.com/tc/product/swas)



## VPS融合怪测试

**v2023.11.07**



```yaml
测评频道: https://t.me/vps_reviews                    
版本：2023.11.07
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) Platinum 8269CY CPU @ 2.50GHz
 CPU 核心数        : 2
 CPU 频率          : 2500.004 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 1.00 MB / L3: 35.75 MB
 硬盘空间          : 6.56 GiB / 39.20 GiB
 启动盘路径        : /dev/vda1
 内存              : 233.19 MiB / 903.61 MiB
 Swap              : 34.23 MiB / 2.00 GiB
 系统在线时间      : 0 days, 18 hour 45 min
 负载              : 0.12, 0.08, 0.02
 系统              : Ubuntu 20.04.6 LTS (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 架构              : x86_64 (64 Bit)
 内核              : 5.4.0-166-generic
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : 独立映射,独立过滤,支持回环
 IPV4 ASN          : AS45102 Alibaba (US) Technology Co., Ltd.
 IPV4 位置         : Singapore / Singapore / SG
 IPV6 ASN          : AS6939 Hurricane Electric LLC
 IPV6 位置         : Fremont / US-CA
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		1049 Scores
 2 线程测试(多核)得分: 		2013 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		21381.50 MB/s
 单线程写测试:		14843.19 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		10.3 MB/s (2517 IOPS, 10.17s)		9.8 MB/s (2385 IOPS, 10.73s)
 1GB-1M Block		131 MB/s (125 IOPS, 8.00s)		123 MB/s (116 IOPS, 8.56s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 4.67 MB/s     (1.1k) | 57.98 MB/s     (906)
Write      | 4.69 MB/s     (1.1k) | 58.55 MB/s     (914)
Total      | 9.37 MB/s     (2.3k) | 116.54 MB/s   (1.8k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 55.99 MB/s     (109) | 55.07 MB/s      (53)
Write      | 58.92 MB/s     (115) | 59.57 MB/s      (58)
Total      | 114.91 MB/s    (224) | 114.64 MB/s    (111)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 新加坡 新加坡/樟宜  (SIN11S18)
Youtube识别地域: 新加坡(SG)
[IPv6]
连接方式: Youtube Video Server
视频缓存节点地域: IAD(IAD23S03)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：新加坡
[IPv6]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：新加坡
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：新加坡区
[IPv6]
当前IPv6出口解锁DisneyPlus
区域：新加坡区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					Yes (Region: SG)
 HotStar:				Yes (Region: SG)
 Disney+:				Yes (Region: HK)
 Netflix:				Yes (Region: SG)
 YouTube Premium:			Yes (Region: SG)
 Amazon Prime Video:			Yes (Region: SG)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			SG
 Viu.com:				Yes (Region: SG)
 YouTube CDN:				Singapore 
 Netflix Preferred CDN:			Singapore  
 Spotify Registration:			No
 Steam Currency:			SGD
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:					Failed (Network Connection)
 HotStar:				Yes (Region: SG)
 Disney+:				No
 Netflix:				Yes (Region: SG)
 YouTube Premium:			Yes
 Amazon Prime Video:			Unsupported
 TVBAnywhere+:				Failed (Network Connection)
 iQyi Oversea Region:			Failed
 Viu.com:				Failed
 YouTube CDN:				Washington DC 
 Netflix Preferred CDN:			Seattle, WA  
 Spotify Registration:			No
 Steam Currency:			Failed (Network Connection)
 ChatGPT:				Yes
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【SG】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 22②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):hosting①  Data Center/Web Hosting/Transit⑤  hosting⑧  business⑨  
  公司类型(company_type):hosting①  hosting⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  Yes② ⑥   No⑨ 
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
端口25检测:
  本地: No
  163邮箱：No
------以下为IPV6检测------
欺诈分数(越低越好): 51②
abuse得分(越低越好): 0④
IP类型: Data Center/Web Hosting/Transit⑤
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: SG 城市: Singapore 服务商: AS45102 Alibaba (US) Technology Co., Ltd.
北京电信 219.141.136.12  联通4837[普通线路]           
北京联通 202.106.50.1    联通4837[普通线路]           
北京移动 221.179.155.161 移动CMI [普通线路]           
上海电信 202.96.209.133  联通4837[普通线路]           
上海联通 210.22.97.1     联通4837[普通线路]           
上海移动 211.136.112.200 移动CMI [普通线路]           
广州电信 58.60.188.222   联通4837[普通线路]           
广州联通 210.21.196.6    联通4837[普通线路]           
广州移动 120.196.165.24  移动CMI [普通线路]           
成都电信 61.139.2.69     联通4837[普通线路]           
成都联通 119.6.6.6       联通4837[普通线路]           
成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
201.95 ms 	* DOD
1.15 ms 	* DOD
1.56 ms 	* 中国 香港
1.52 ms 	AS10099 [CUG-BACKBONE] 新加坡 chinaunicomglobal.com 联通
1.80 ms 	AS10099 [CUG-BACKBONE] 新加坡 chinaunicomglobal.com 联通
* ms 	* [CUG-BACKBONE] 新加坡
42.21 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
49.80 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
47.81 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
54.44 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
200.18 ms 	AS4134 [APNIC-AP] 中国 广东省 深圳市 chinatelecom.com.cn 电信
197.57 ms 	AS4134 中国 广东省 深圳市 福田区 chinatelecom.com.cn 电信
广州联通 210.21.196.6
1.23 ms 	* DOD
76.37 ms 	AS45102 [Taobao] 新加坡 alibabagroup.com
1.49 ms 	AS10099 [CUG-BACKBONE] 新加坡 chinaunicomglobal.com 联通
1.80 ms 	AS10099 [CUG-BACKBONE] 新加坡 chinaunicomglobal.com 联通
202.66 ms 	* [CUG-BACKBONE] 新加坡
47.76 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
42.45 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
49.92 ms 	AS17816 [APNIC-AP] 中国 广东省 深圳市 chinaunicom.cn 联通
48.42 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 chinaunicom.cn 联通
48.91 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 宝安区 chinaunicom.cn 联通
广州移动 120.196.165.24
1.12 ms 	* DOD
1.66 ms 	AS45102 [Taobao] 新加坡 alibabagroup.com
4.03 ms 	AS6453 [APNIC-AP] 新加坡 tatacommunications.com
202.36 ms 	AS6453 [TATA-COMMUNICATIONS] 新加坡 tatacommunications.com
1.13 ms 	AS6453 [TATA-COMMUNICATIONS] 新加坡 tatacommunications.com
1.81 ms 	AS2914 [NTT-BACKBONE] 新加坡 ntt.net
1.76 ms 	AS2914 [NTT-BACKBONE] 新加坡 ntt.net
70.28 ms 	AS2914 [NTT-GIN] 新加坡 ntt.net
179.82 ms 	AS58453 [CMI-INT] 中国 香港 cmi.chinamobile.com 移动
82.49 ms 	AS58453 [CMI-INT] 中国 广东省 广州市 回国到达层 cmi.chinamobile.com 移动
80.10 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
84.86 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
293.81 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
84.25 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
87.18 ms 	AS9808 [CMNET] 中国 海南省 海口市 chinamobile.com 移动
87.02 ms 	AS56040 [APNIC-AP] 中国 广东省 深圳市 chinamobile.com 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 33.40 Mbps	 32.44 Mbps	 0.97	  0.0%
新加坡		 33.45 Mbps	 31.33 Mbps	 1.63	  0.0%
中国香港	 32.85 Mbps	 29.63 Mbps	 35.22	  NULL
联通湖南5G	 34.00 Mbps	 23.37 Mbps	 50.28	  NULL
联通Fuzhou	 33.95 Mbps	 31.45 Mbps	 51.93	  0.0%
电信浙江	 36.45 Mbps	 32.75 Mbps	 185.90	  NULL
电信江苏5G	 27.48 Mbps	 33.92 Mbps	 185.03	  0.0%
移动硬核通信	 33.90 Mbps	 25.11 Mbps	 97.83	  NULL
------------------------------------------------------------------------
 总共花费      : 9 分 2 秒
 时间          : Thu Nov 16 18:35:19 CST 2023
------------------------------------------------------------------------
```



[融合怪测试结果短链接](https://paste.spiritlhl.net/code/pA1z2C.txt)



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
