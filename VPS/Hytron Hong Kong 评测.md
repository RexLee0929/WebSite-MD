# Hytron Hong Kong 评测



## VPS配置详情

**CPU:** 1Core vCPU

**Memory:** 1 GB

**Storage:** 5 GB SSD

**Traffic:** 1000 GB In & Out

**BandWidth:** 7 Gbps

**Instance Family:** HKBGP Standard

**Advantage:** 5Tbps+ DDoS Protection Always-On

**IPv4:** 1 IPv4

**IPv6:** 1 IPv6

**Location:** Hong Kong

**Price:** 17.64 USD For A Year With 1.70 USD Setup Fee

[Order With Aff](https://idc.hytron.io/aff.php?aff=562&pid=6)

[Order Without Aff](https://idc.hytron.io/index.php?rp=/store/hkbgp-standard)



## VPS融合怪测试

**v2023.11.07**



```yaml
测评频道: https://t.me/vps_reviews                    
版本：2023.11.07
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) CPU E5-2680 v4 @ 2.40GHz
 CPU 核心数        : 1
 CPU 频率          : 2397.222 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 4.00 MB / L3: 16.00 MB
 硬盘空间          : 4.12 GiB / 4.83 GiB
 启动盘路径        : /dev/vda1
 内存              : 191.93 MiB / 964.58 MiB
 Swap              : 4.29 MiB / 1024.00 MiB
 系统在线时间      : 13 days, 2 hour 55 min
 负载              : 0.37, 0.09, 0.03
 系统              : Debian GNU/Linux 11 (bullseye) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 5.10.0-26-amd64
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : Full Cone
 IPV4 ASN          : AS202662 Hytron Network Services Limited
 IPV4 位置         : Tsuen Wan / Tsuen Wan / HK
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		790 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		16673.06 MB/s
 单线程写测试:		11102.19 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		872 kB/s (213 IOPS, 120.28s)		21.5 MB/s (5251 IOPS, 4.87s)
 1GB-1M Block		21.3 MB/s (30 IOPS, 33.09s)		268 MB/s (380 IOPS, 2.63s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
Less than 2GB of space available. Skipping disk test...
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 中国香港(HKG07S42)
Youtube识别地域: 香港(HK)
[IPv6]
连接方式: Youtube Video Server
视频缓存节点地域: 中国香港(HKG33S01)
Youtube识别地域: 香港(HK)
----------------Netflix----------------
[IPv4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：香港
[IPv6]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：香港
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：香港区
[IPv6]
当前IPv6出口解锁DisneyPlus
区域：香港区
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
 Spotify Registration:			No
 Steam Currency:			HKD
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:					Failed (Network Connection)
 HotStar:				No
 Disney+:				Yes (Region: HK)
 Netflix:				Originals Only
 YouTube Premium:			Yes (Region: HK)
 Amazon Prime Video:			Unsupported
 TVBAnywhere+:				Failed (Network Connection)
 iQyi Oversea Region:			Failed
 Viu.com:				Failed
 YouTube CDN:				Hong Kong 
 Netflix Preferred CDN:			Hong Kong  
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
  使用类型(usage_type):isp①  Data Center/Web Hosting/Transit⑤  isp⑧  business⑨  
  公司类型(company_type):business①  business⑧  
  云服务提供商(cloud_provider):  No⑧ 
  数据中心(datacenter):  No② ⑥ ⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ②   Yes⑥ ⑦ ⑧ ⑨ ⑩ 
  VPN(vpn):  No①   Yes② ⑦ ⑧ 
  TOR(tor):  No① ② ⑦ ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):  No② 
  匿名代理(anonymous):  Yes⑦ ⑧   No⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No① ⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
Google搜索可行性：YES
端口25检测:
  本地: No
  163邮箱: Yes
  gmail邮箱: Yes
  qq邮箱：No
  outlook邮箱: Yes
  yandex邮箱: Yes
------以下为IPV6检测------
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: Data Center/Web Hosting/Transit⑤
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: HK 城市: Tsuen Wan 服务商: AS202662 Hytron Network Services Limited
北京电信 219.141.136.12  测试超时
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
成都移动 211.137.96.205  测试超时
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
1.10 ms 	AS834 立陶宛 克莱佩达县 克莱佩达 ipxo.com
2.20 ms 	* [CDN77-P2P] 中国 香港
2.71 ms 	AS6453 [TATA-COMMUNICATIONS] 中国 香港 tatacommunications.com
68.26 ms 	AS6453 [TATA-COMMUNICATIONS] 日本 千叶县 千叶 tatacommunications.com
275.03 ms 	AS6453 美国 加利福尼亚州 圣何塞 tatacommunications.com
161.40 ms 	AS6453 美国 加利福尼亚州 圣何塞 tatacommunications.com
164.71 ms 	AS4134 [CHINANET-US] 美国 加利福尼亚州 圣何塞 CT-Tata-PoP chinatelecom.com.cn 电信
419.91 ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
313.27 ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
317.36 ms 	AS4134 [CHINANET-GD] 中国 广东省 深圳市 chinatelecom.com.cn 电信
315.72 ms 	AS4134 中国 广东省 深圳市 福田区 chinatelecom.com.cn 电信
广州联通 210.21.196.6
1.17 ms 	AS834 立陶宛 克莱佩达县 克莱佩达 ipxo.com
5.40 ms 	* [CDN77-P2P] 中国 香港
3.80 ms 	AS2914 [NTT-GLOBAL] 中国 香港 ntt.net
65.61 ms 	AS2914 [NTT-BACKBONE] 日本 东京都 东京 ntt.net
63.06 ms 	AS2914 [NTT-BACKBONE] 日本 东京都 东京 ntt.net
250.52 ms 	AS2914 [NTT-BACKBONE] 日本 东京都 东京 ntt.net
299.76 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
240.69 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
275.56 ms 	AS17816 [UNICOM-GD] 中国 广东省 深圳市 chinaunicom.cn 联通
254.37 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 chinaunicom.cn 联通
274.09 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 宝安区 chinaunicom.cn 联通
广州移动 120.196.165.24
20.86 ms 	AS834 立陶宛 克莱佩达县 克莱佩达 ipxo.com
2.34 ms 	* [CDN77-P2P] 中国 香港
3.82 ms 	AS2914 [NTT-GLOBAL] 中国 香港 ntt.net
40.21 ms 	AS2914 [NTT-GLOBAL] 中国 香港 ntt.net
36.32 ms 	AS58453 [CMI-INT] 中国 香港 cmi.chinamobile.com 移动
198.73 ms 	AS58453 [CMI-INT] 中国 广东省 广州市 X-I cmi.chinamobile.com 移动
256.27 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
255.01 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
353.31 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
255.55 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
259.20 ms 	AS9808 [CMNET] 中国 海南省 海口市 chinamobile.com 移动
252.80 ms 	AS56040 [APNIC-AP] 中国 广东省 深圳市 chinamobile.com 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 7092.07 Mbps	 4968.20 Mbps	 0.98	  NULL
中国香港	 2242.09 Mbps	 3226.29 Mbps	 1.10	  NULL
新加坡		 1454.62 Mbps	 1354.23 Mbps	 43.15	  0.0%
联通WuXi	 6.88 Mbps	 943.24 Mbps	 221.03	  7.3%
联通郑州5G	 400.53 Mbps	 469.52 Mbps	 245.63	  NULL
电信江苏5G	 19.38 Mbps	 1314.55 Mbps	 320.20	  0.0%
电信Suzhou5G	 369.34 Mbps	 965.68 Mbps	 296.68	  NULL
移动硬核通信	 102.68 Mbps	 163.41 Mbps	 353.08	  NULL
------------------------------------------------------------------------
 总共花费      : 8 分 19 秒
 时间          : Thu Nov 16 17:55:17 CST 2023
------------------------------------------------------------------------
```



[融合怪测试结果短链接](http://paste.spiritlhl.net/u/CbCnCe.txt)



### VPS商家评论频道



```yaml
#hytron
网站：hytron
 (https://idc.hytron.io/aff.php?aff=34)支持支付方式：
USDT-TRC20
支付寶 
购买无最低充值限制

评价：
#香港 #灵车
#流媒体解锁
2023年2月末起家的 #国人 商家，慎重购买
默认1Gbps带宽
最低配1核512MB内存10G硬盘3T流量月付1美元 
最低配已在监控中，升价月付2美元一次性设置费1美元
自有的ASN半年前才有的，IP是10天前更新的，商家新的不能再新了
解锁是不错，但到内地延迟很高，部分地区断流也厉害，自己看评论区
非落地不用考虑，直连难用
灵车商家，没钱别碰
窥镜：
HKBGP Standard 
38.150.13.3:8800
38.150.13.3
HKBGP LITE
50.114.156.17
```



[原文链接](https://t.me/vps_reviews/1187)



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