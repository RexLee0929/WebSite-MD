# **Alibaba Cloud ECS** Hong Kong 评测



## VPS配置详情

**CPU:** 1 Core vCPU

**Memory:** 1 GB

**Storage:** 40 GB ESSD

**Traffic:** 1 Mbps

**BandWidth:** Unmetered

**Instance Family:** ecs.t5

**Advantage:** Top Cloud Service Provider with High SLA Standards

**IPv4:** 1 IPv4 With 1 Mbps

**IPv6:** 1 IPv6 With 0 Mbps

**Location:** Hong Kong

**Price:** Free For The First Year, Then 51.89 USD For The Next Year

[Order Without Aff](https://www.alibabacloud.com/zh/product/ecs)



## VPS融合怪测试

**v2023.11.07**



```yaml
测评频道: https://t.me/vps_reviews                    
版本：2023.11.07
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) CPU E5-2682 v4 @ 2.50GHz
 CPU 核心数        : 1
 CPU 频率          : 2499.996 MHz
 CPU 缓存          : L1: 32.00 KB / L2: 256.00 KB / L3: 40.00 MB
 硬盘空间          : 3.85 GiB / 39.01 GiB
 启动盘路径        : /dev/vda3
 内存              : 311.36 MiB / 957.24 MiB
 Swap              : 0 KiB / 1024.00 MiB
 系统在线时间      : 1 days, 2 hour 19 min
 负载              : 0.17, 0.10, 0.04
 系统              : Ubuntu 22.04.3 LTS (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 架构              : x86_64 (64 Bit)
 内核              : 5.15.0-86-generic
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : 独立映射,独立过滤,支持回环
 IPV4 ASN          : AS45102 Alibaba (US) Technology Co., Ltd.
 IPV4 位置         : Hong Kong / Central and Western / HK
 IPV6 ASN          : AS58057 Securebit AG
 IPV6 位置         : Amsterdam / NL-NH
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		875 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		17929.32 MB/s
 单线程写测试:		12390.84 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		3.1 MB/s (750 IOPS, 34.12s)		8.8 MB/s (2149 IOPS, 11.91s)
 1GB-1M Block		112 MB/s (106 IOPS, 9.40s)		111 MB/s (106 IOPS, 9.42s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 4.28 MB/s     (1.0k) | 54.27 MB/s     (848)
Write      | 4.30 MB/s     (1.0k) | 54.76 MB/s     (855)
Total      | 8.58 MB/s     (2.1k) | 109.04 MB/s   (1.7k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 52.95 MB/s     (103) | 52.62 MB/s      (51)
Write      | 55.69 MB/s     (108) | 56.29 MB/s      (54)
Total      | 108.64 MB/s    (211) | 108.92 MB/s    (105)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 中国香港(HKG07S42)
Youtube识别地域: 香港(HK)
[IPv6]
连接方式: Google Global CacheCDN (ISP Cooperation)
ISP运营商: FCIXUS
视频缓存节点地域: SJC(SJC1)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：香港
[IPv6]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：美国
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：香港区
[IPv6]
当前IPv6出口解锁DisneyPlus
区域：美国区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					Yes (Region: HK)
 HotStar:				No
 Disney+:				Yes (Region: HK)
 Netflix:				Yes (Region: HK)
 YouTube Premium:			Yes (Region: HK)
 Amazon Prime Video:			Yes (Region: HK)
 TVBAnywhere+:				No
 iQyi Oversea Region:			HK
 Viu.com:				Yes (Region: HK)
 YouTube CDN:				Hong Kong 
 Netflix Preferred CDN:			Hong Kong  
 Spotify Registration:			Yes (Region: HK)
 Steam Currency:			HKD
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:					Failed (Network Connection)
 HotStar:				Yes (Region: US)
 Disney+:				Yes (Region: US)
 Netflix:				Yes (Region: US)
 YouTube Premium:			Yes
 Amazon Prime Video:			Unsupported
 TVBAnywhere+:				Failed (Network Connection)
 iQyi Oversea Region:			Failed
 Viu.com:				Failed
 YouTube CDN:				FCIXUS in San Jose, CA 
 Netflix Preferred CDN:			Washington DC  
 Spotify Registration:			Yes (Region: US)
 Steam Currency:			Failed (Network Connection)
 ChatGPT:				Yes
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		Failed
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
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: Data Center/Web Hosting/Transit⑤
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: HK 城市: Hong Kong 服务商: AS45102 Alibaba (US) Technology Co., Ltd.
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
116.60 ms 	* RFC1918
1.42 ms 	* RFC1918
1.51 ms 	* 中国 香港
2.66 ms 	* DOD
2.42 ms 	* 中国 香港
3.17 ms 	* [CUG-ASIA] 中国 香港
3.12 ms 	AS10099 [CUG-BACKBONE] 中国 香港 chinaunicomglobal.com 联通
9.57 ms 	AS10099 [CUG-BACKBONE] 中国 广东省 广州市 chinaunicomglobal.com 联通
13.67 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
12.84 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
7.77 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
14.55 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
109.84 ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
11.38 ms 	AS4134 [CHINANET-GD] 中国 广东省 深圳市 chinatelecom.com.cn 电信
10.68 ms 	AS4134 中国 广东省 深圳市 福田区 chinatelecom.com.cn 电信
广州联通 210.21.196.6
22.67 ms 	* RFC1918
2.11 ms 	* DOD
1.42 ms 	* RFC1918
8.35 ms 	* RFC1918
2.82 ms 	* DOD
2.27 ms 	* 中国 香港
3.10 ms 	* [CUG-ASIA] 中国 香港
8.86 ms 	* 中国 香港
3.20 ms 	AS10099 [CUG-BACKBONE] 中国 广东省 广州市 chinaunicomglobal.com 联通
11.03 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn
14.33 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
13.38 ms 	AS17816 [UNICOM-GD] 中国 广东省 深圳市 chinaunicom.cn 联通
18.82 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 chinaunicom.cn 联通
12.04 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 宝安区 chinaunicom.cn 联通
广州移动 120.196.165.24
1.57 ms 	* RFC1918
2.46 ms 	AS45102 [Taobao] 中国 浙江省 杭州市 alibabagroup.com
2.18 ms 	* 中国 香港
3.19 ms 	AS58453 [CMI-INT] 中国 香港 cmi.chinamobile.com 移动
3.61 ms 	AS58453 [CMI-INT] 中国 香港 cmi.chinamobile.com 移动
9.34 ms 	AS58453 [CMI-INT] 中国 广东省 广州市 cmi.chinamobile.com 移动
9.29 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
11.33 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
11.88 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
12.83 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
15.44 ms 	AS9808 [CMNET] 中国 海南省 海口市 chinamobile.com 移动
13.76 ms 	AS56040 [APNIC-AP] 中国 广东省 深圳市 chinamobile.com 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 1.00 Mbps	 95.56 Mbps	 1.71	  NULL
新加坡		 1.05 Mbps	 101.40 Mbps	 37.35	  18.3%
联通Fuzhou	 0.99 Mbps	 102.86 Mbps	 21.81	  14.1%
联通海南	 0.92 Mbps	 113.51 Mbps	 29.98	  NULL
电信江苏5G	 0.95 Mbps	 102.08 Mbps	 42.05	  41.4%
电信天津5G	 0.94 Mbps	 109.22 Mbps	 43.81	  1.0%
移动硬核通信	 1.03 Mbps	 83.38 Mbps	 17.83	  NULL
------------------------------------------------------------------------
 总共花费      : 8 分 51 秒
 时间          : Thu Nov 16 17:57:02 CST 2023
------------------------------------------------------------------------

```



[融合怪测试结果短链接](http://paste.spiritlhl.net/u/lNKCHN.txt)



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