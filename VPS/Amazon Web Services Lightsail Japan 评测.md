# Amazon Web Services Lightsail Japan 评测



## VPS配置详情

**CPU:** 2 Core vCPU

**Memory:** 1 GB

**Storage:** 40 GB SSD

**Traffic:** 2 TB In & Out

**BandWidth:** 5 Gbps

**Instance Family:** Amazon Lightsail

**Advantage:** Top Cloud Service Provider with High SLA Standards

**IPv4:** 1 IPv4

**IPv6:** 1 IPv6

**Location:** Tokyo, Japan

**Price:** 5 USD For A Month

[Order Without Aff](https://aws.amazon.com/lightsail/?nc1=h_ls)



## VPS融合怪测试

**v2023.11.07**



```yaml
测评频道: https://t.me/vps_reviews                    
版本：2023.11.07
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) Platinum 8259CL CPU @ 2.50GHz
 CPU 核心数        : 2
 CPU 频率          : 2499.998 MHz
 CPU 缓存          : L1: 32.00 KB / L2: 1.00 MB / L3: 35.75 MB
 硬盘空间          : 3.52 GiB / 38.58 GiB
 启动盘路径        : /dev/root
 内存              : 264.21 MiB / 941.21 MiB
 Swap              : 26.25 MiB / 1024.00 MiB
 系统在线时间      : 2 days, 20 hour 58 min
 负载              : 0.48, 0.15, 0.04
 系统              : Ubuntu 22.04.1 LTS (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 架构              : x86_64 (64 Bit)
 内核              : 5.15.0-1030-aws
 TCP加速方式       : bbr
 虚拟化架构        : Amazon Virtualization
 NAT类型           : 独立映射,独立过滤,支持回环
 IPV4 ASN          : AS16509 Amazon.com, Inc.
 IPV4 位置         : Tokyo / Tokyo / JP
 IPV6 ASN          : AS16509 Amazon.com
 IPV6 位置         : Tokyo / Tokyo
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		932 Scores
 2 线程测试(多核)得分: 		1531 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		17782.74 MB/s
 单线程写测试:		14970.85 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		5.1 MB/s (1237 IOPS, 20.70s)		7.4 MB/s (1816 IOPS, 14.09s)
 1GB-1M Block		153 MB/s (146 IOPS, 6.84s)		144 MB/s (137 IOPS, 7.26s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 6.18 MB/s     (1.5k) | 67.58 MB/s    (1.0k)
Write      | 6.17 MB/s     (1.5k) | 67.91 MB/s    (1.0k)
Total      | 12.36 MB/s    (3.0k) | 135.49 MB/s   (2.1k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 64.85 MB/s     (126) | 64.01 MB/s      (62)
Write      | 67.79 MB/s     (132) | 68.70 MB/s      (67)
Total      | 132.65 MB/s    (258) | 132.72 MB/s    (129)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 日本 东京(NRT12S24)
Youtube识别地域: 日本(JP)
[IPv6]
连接方式: Youtube Video Server
视频缓存节点地域: 日本 东京(NRT20S05)
Youtube识别地域: 日本(JP)
----------------Netflix----------------
[IPv4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：日本
[IPv6]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：日本
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：日本区
[IPv6]
当前IPv6出口解锁DisneyPlus
区域：日本区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					Yes (Region: JP)
 HotStar:				No
 Disney+:				No
 Netflix:				Originals Only
 YouTube Premium:			Yes (Region: JP)
 Amazon Prime Video:			Yes (Region: JP)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			JP
 Viu.com:				No
 YouTube CDN:				Tokyo 
 Netflix Preferred CDN:			Mumbai (Bombay)  
 Spotify Registration:			Yes (Region: JP)
 Steam Currency:			JPY
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:					Failed (Network Connection)
 HotStar:				No
 Disney+:				Yes (Region: JP)
 Netflix:				Originals Only
 YouTube Premium:			Yes (Region: JP)
 Amazon Prime Video:			Unsupported
 TVBAnywhere+:				Failed (Network Connection)
 iQyi Oversea Region:			Failed
 Viu.com:				Failed
 YouTube CDN:				Tokyo 
 Netflix Preferred CDN:			Seattle, WA  
 Spotify Registration:			Yes (Region: JP)
 Steam Currency:			Failed (Network Connection)
 ChatGPT:				Yes
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【JP】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 18②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):hosting①  Data Center/Web Hosting/Transit⑤  hosting⑧  hosting⑨  
  公司类型(company_type):hosting①  hosting⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  Yes② ⑥ ⑨ 
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
  本地: No
  163邮箱：No
------以下为IPV6检测------
欺诈分数(越低越好): 6②
abuse得分(越低越好): 0④
IP类型: Data Center/Web Hosting/Transit⑤
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: JP 城市: Tokyo 服务商: AS16509 Amazon.com, Inc.
北京电信 219.141.136.12  电信163 [普通线路]           
北京联通 202.106.50.1    联通4837[普通线路]           
北京移动 221.179.155.161 移动CMI [普通线路]           
上海电信 202.96.209.133  测试超时
上海联通 210.22.97.1     联通4837[普通线路]           
上海移动 211.136.112.200 移动CMI [普通线路]           
广州电信 58.60.188.222   测试超时
广州联通 210.21.196.6    联通4837[普通线路]           
广州移动 120.196.165.24  移动CMI [普通线路]           
成都电信 61.139.2.69     电信163 [普通线路]           
成都联通 119.6.6.6       联通4837[普通线路]           
成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.66 ms 	AS16509 日本 东京都 东京 EC2 amazon.com
0.28 ms 	* RFC1112
0.31 ms 	* RFC1112
2.40 ms 	* RFC6598
2.08 ms 	AS16509 日本 东京都 东京 amazon.com
1.69 ms 	AS2914 日本 东京都 东京 ntt.net
6.34 ms 	AS2914 [NTT-BACKBONE] 日本 东京都 东京 ntt.net
2.95 ms 	AS2914 [NTT-BACKBONE] 日本 东京都 东京 ntt.net
395.99 ms 	AS2914 [NTT-BACKBONE] 日本 东京都 东京 ntt.net
广州联通 210.21.196.6
9.17 ms 	AS16509 日本 东京都 东京 EC2 amazon.com
0.32 ms 	* RFC1112
11.77 ms 	* RFC1112
88.95 ms 	* RFC1112
2.13 ms 	* RFC1112
1.08 ms 	* [AT-88] 日本 东京都 东京
2.04 ms 	* 日本 东京都 东京
55.71 ms 	AS4837 [CU169-BACKBONE] 中国 上海市 chinaunicom.cn 联通
137.77 ms 	AS4837 [CU169-BACKBONE] 中国 上海市 chinaunicom.cn 联通
广州移动 120.196.165.24
2.16 ms 	AS16509 日本 东京都 东京 EC2 amazon.com
0.33 ms 	* RFC1112
0.30 ms 	* RFC1112
2.99 ms 	* RFC6598
29.98 ms 	* [AT-88] 日本 东京都 东京
1.83 ms 	* [AT-88] 日本 东京都 东京
3.22 ms 	* [AMAZO-4] 日本 东京都 东京
1.79 ms 	AS58453 [CMI-INT] 日本 东京都 东京 cmi.chinamobile.com 移动
58.46 ms 	AS58453 [CMI-INT] 中国 广东省 广州市 cmi.chinamobile.com 移动
57.55 ms 	AS58453 [CMI-INT] 中国 广东省 广州市 cmi.chinamobile.com 移动
56.36 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 800.08 Mbps	 4184.77 Mbps	 1.49	  4.3%
日本东京	 735.45 Mbps	 120.19 Mbps	 4.85	  0.0%
中国香港	 796.54 Mbps	 1.08 Mbps	 213.37	  NULL
电信Lanzhou	 1296.26 Mbps	 2173.07 Mbps	 62.75	  NULL
------------------------------------------------------------------------
 总共花费      : 7 分 31 秒
 时间          : Thu Nov 16 17:54:53 CST 2023
------------------------------------------------------------------------
```



[融合怪测试结果短链接](http://paste.spiritlhl.net/u/sg1zuN.txt)



### VPS商家评论频道



```yaml
#aws
#amazon
网站：aws
 (https://aws.amazon.com/lightsail/)支持支付方式：
银行卡
购买无最低充值限制

评价：
#多位置
#大厂 之一，非常热门
可免费试用 ，包括
一年免费EC2服务器(100G每月流出流量)
一年/永久(评论区有争议) Cloudfront CDN 1T流量
推荐香港、东京和新加坡
Lightsail（光帆）双向计费
最低配1核512MB内存1T流量3.5美元
EC2算法不一样，aws的Lightsail超了流量好像是按照EC2的计算
主要可用亚太地区包括 #日本 东京、#新加坡
AWS计费规则非常复杂，非常容易意外扣费，请小心使用
部分热门地区已测评，已评论区补图
#热门 商家，但一般都是买下游转售或者淘宝代购官网
窥镜：
ec2-reachability.amazonaws.com
```



[原文链接](https://t.me/vps_reviews/1379)



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