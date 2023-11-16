# UCloud Hong Kong 评测



## VPS配置详情

**CPU:** 2 Core vCPU

**Memory:** 4 GB

**Storage:** 80 GB SSD

**Traffic:** 800 GB Out

**BandWidth:** 30 Mbps

**Instance Family:** ULightHost

**Advantage:** Top Cloud Service Provider With High SLA Standards

**IPv4:** 1 IPv4

**IPv6:** 0 IPv6

**Location:** Hong Kong

**Price:** 108 CNY For A Year, Then 828 CNY For The Next Year

[Order With Aff](https://passport.ucloud.cn/?invitation_code=C1x7C6B44C473EE)

[Order Without Aff](https://www.ucloud.cn/site/product/ulhost.html)



## VPS融合怪测试

**v2023.11.07**



```yaml
测评频道: https://t.me/vps_reviews                    
版本：2023.11.07
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel Core Processor (Broadwell, no TSX)
 CPU 核心数        : 2
 CPU 频率          : 2194.916 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 4.00 MB / L3: 16.00 MB
 硬盘空间          : 24.13 GiB / 78.56 GiB
 启动盘路径        : /dev/vda2
 内存              : 2.06 GiB / 3.82 GiB
 Swap              : 4.02 MiB / 2.00 GiB
 系统在线时间      : 1 days, 1 hour 38 min
 负载              : 0.65, 0.24, 0.14
 系统              : Ubuntu 22.04.3 LTS (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 架构              : x86_64 (64 Bit)
 内核              : 5.15.0-88-generic
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : 独立映射,独立过滤,支持回环
 IPV4 ASN          : AS135377 UCLOUD INFORMATION TECHNOLOGY (HK) LIMITED
 IPV4 位置         : Hong Kong / Central and Western / HK
 IPV6 ASN          : AS58057 Securebit AG
 IPV6 位置         : Washington D.C. / US-DC
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		797 Scores
 2 线程测试(多核)得分: 		1469 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		16492.98 MB/s
 单线程写测试:		12328.48 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		9.0 MB/s (2188 IOPS, 11.70s)		11.8 MB/s (2870 IOPS, 8.92s)
 1GB-1M Block		127 MB/s (121 IOPS, 8.28s)		127 MB/s (121 IOPS, 8.23s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 7.17 MB/s     (1.7k) | 61.29 MB/s     (957)
Write      | 7.19 MB/s     (1.7k) | 61.63 MB/s     (963)
Total      | 14.37 MB/s    (3.5k) | 122.93 MB/s   (1.9k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 60.13 MB/s     (117) | 59.49 MB/s      (58)
Write      | 63.05 MB/s     (123) | 63.73 MB/s      (62)
Total      | 123.19 MB/s    (240) | 123.22 MB/s    (120)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 中国香港(HKG33S01)
Youtube识别地域: 香港(HK)
[IPv6]
连接方式: Google Global CacheCDN (ISP Cooperation)
ISP运营商: FCIXUS
视频缓存节点地域: SJC(SJC1)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：日本
[IPv6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
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
 Dazn:					Yes (Region: HK)
 HotStar:				No
 Disney+:				Yes (Region: SG)
 Netflix:				Yes (Region: JP)
 YouTube Premium:			Yes (Region: HK)
 Amazon Prime Video:			Yes (Region: HK)
 TVBAnywhere+:				No
 iQyi Oversea Region:			HK
 Viu.com:				Yes (Region: HK)
 YouTube CDN:				Hong Kong 
 Netflix Preferred CDN:			Associated with [] in [Hong Kong ]
 Spotify Registration:			Yes (Region: HK)
 Steam Currency:			HKD
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:					Failed (Network Connection)
 HotStar:				Yes (Region: US)
 Disney+:				No
 Netflix:				Failed (Network Connection)
 YouTube Premium:			Yes
 Amazon Prime Video:			Unsupported
 TVBAnywhere+:				Failed (Network Connection)
 iQyi Oversea Region:			Failed
 Viu.com:				Failed
 YouTube CDN:				FCIXUS in San Jose, CA 
 Netflix Preferred CDN:			Associated with [] in [Washington DC ]
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
欺诈分数(越低越好): 43②
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
黑名单记录统计(有多少个黑名单网站有记录): 无害0 恶意0 可疑0 未检测88 ③
Google搜索可行性：YES
端口25检测:
  本地: Yes
  163邮箱: Yes
  gmail邮箱: Yes
  outlook邮箱: Yes
  yandex邮箱: Yes
  qq邮箱: Yes
------以下为IPV6检测------
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: Data Center/Web Hosting/Transit⑤
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: HK 城市: Hong Kong 服务商: AS135377 UCLOUD INFORMATION TECHNOLOGY (HK) LIMITED
北京电信 219.141.136.12  测试超时
北京联通 202.106.50.1    测试超时
北京移动 221.179.155.161 移动CMI [普通线路]           
上海电信 202.96.209.133  测试超时
上海联通 210.22.97.1     联通4837[普通线路]           
上海移动 211.136.112.200 移动CMI [普通线路]           
广州电信 58.60.188.222   电信163 [普通线路]           
广州联通 210.21.196.6    测试超时
广州移动 120.196.165.24  移动CMI [普通线路]           
成都电信 61.139.2.69     测试超时
成都联通 119.6.6.6       测试超时
成都移动 211.137.96.205  测试超时
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.27 ms 	* RFC1918
0.64 ms 	* RFC1918
0.71 ms 	* RFC1918
0.96 ms 	* RFC1918
2.51 ms 	AS21859 [ZL-LAX] 中国 香港 zenlayer.com
1.97 ms 	AS21859 [ZL-LAX] 中国 香港 zenlayer.com
2.35 ms 	AS3491 中国 香港 pccwglobal.com
158.07 ms 	AS4134 [CHINANET-US] 美国 加利福尼亚洲 洛杉矶 PCCW-CT-Peer chinatelecom.com.cn 电信
308.29 ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
319.43 ms 	AS4134 中国 广东省 深圳市 福田区 chinatelecom.com.cn 电信
广州联通 210.21.196.6
0.54 ms 	* RFC1918
1.09 ms 	* RFC1918
1.07 ms 	* RFC1918
1.37 ms 	* RFC1918
2.18 ms 	AS21859 [ZL-LAX] 中国 香港 zenlayer.com
2.37 ms 	AS6453 [TATA-COMMUNICATIONS] 中国 香港 tatacommunications.com
159.72 ms 	AS6453 [TATA-COMMUNICATIONS] 中国 香港 tatacommunications.com
58.85 ms 	AS6453 [TATA-COMMUNICATIONS] 日本 千叶县 千叶 tatacommunications.com
165.84 ms 	AS6453 美国 加利福尼亚州 洛杉矶 tatacommunications.com
230.63 ms 	AS6453 美国 加利福尼亚州 洛杉矶 tatacommunications.com
228.19 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn
231.56 ms 	AS4837 [CU169-BACKBONE] 中国 北京市 chinaunicom.cn 联通
249.22 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
243.49 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
248.22 ms 	AS17816 [APNIC-AP] 中国 广东省 深圳市 chinaunicom.cn 联通
353.36 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 chinaunicom.cn 联通
254.39 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 宝安区 chinaunicom.cn 联通
广州移动 120.196.165.24
0.54 ms 	* RFC1918
1.12 ms 	* RFC1918
1.00 ms 	* RFC1918
101.89 ms 	* RFC1918
1.37 ms 	* RFC1918
1.77 ms 	AS21859 [ZL-LAX] 中国 香港 zenlayer.com
2.51 ms 	* [ZL-LAX] 美国 加利福尼亚州 钻石吧
2.20 ms 	AS3491 中国 香港 pccwglobal.com
2.54 ms 	AS3491 [PCCW-BACKBONE] 中国 香港 pccwglobal.com
192.20 ms 	AS58453 [CMI-INT] 中国 香港 cmi.chinamobile.com 移动
276.64 ms 	AS58453 [CMI-INT] 中国 香港 cmi.chinamobile.com 移动
249.69 ms 	AS58453 [CMI-INT] 中国 广东省 广州市 回国到达层 cmi.chinamobile.com 移动
72.02 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
75.37 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
75.17 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
116.41 ms 	AS9808 [CMNET] 中国 海南省 海口市 chinamobile.com 移动
94.59 ms 	AS56040 [APNIC-AP] 中国 广东省 深圳市 chinamobile.com 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 29.56 Mbps	 133.80 Mbps	 1.57	  NULL
中国香港	 9.77 Mbps	 20.02 Mbps	 306.90	  NULL
新加坡		 27.40 Mbps	 91.21 Mbps	 33.15	  0.0%
联通海南	 27.44 Mbps	 70.12 Mbps	 256.54	  NULL
电信浙江	 29.57 Mbps	 48.28 Mbps	 298.71	  NULL
移动硬核通信	 27.77 Mbps	 5.39 Mbps	 252.92	  NULL
------------------------------------------------------------------------
 总共花费      : 8 分 51 秒
 时间          : Thu Nov 16 17:55:43 CST 2023
------------------------------------------------------------------------
```



[融合怪测试结果短链接](https://paste.spiritlhl.net/code/xEj8Y3.txt)



### VPS商家评论频道



```yaml
#ucloud
网站：ucloud
 (https://passport.ucloud.cn/?invitation_code=C1xF6F09EBE40BE)支持支付方式：
微信
支付宝
购买无最低充值限制

评价：
#多位置 
#香港 #台湾 #日本 #越南 #新加坡 #韩国 #泰国 #菲律宾 #印度 #美国 #巴西 #德国 #英国 #俄罗斯 #阿联酋 #尼日利亚
2012年起家的 #国人 商家，慎重购买
默认带宽1~10Mbps
新用户独享 #不限流量
最低配1核1G内存40G硬盘
三月付69元年付279元
怎么说呢，不是为了特殊位置或者极高的SLA建站，别碰
按流量计费需要预先充值100元，然后以0.7元/G的价格计费，后付费。
重要的是：你需要实名认证！！！人脸验证！！！
(除非你只干正事，否则别用自己身份验证！)
PS：有些人开GlobalSSH，玩些骚操作，端口转发啥的，嘿嘿嘿。
PPS：有用API开的，也有找客服开的，价格肯定贵，线路么，据传去程CN2回程专线。(需企业认证/高校认证)
窥镜：
乌兰察布 117.50.162.54（带宽出口在北京，北京BGP）
北京 106.75.47.147
上海 106.75.252.202
广州 106.75.172.214
台北 103.98.17.12
日本 152.32.203.164
韩国 152.32.138.254
洛杉矶 45.43.58.220
香港：103.218.242.25（通用/快杰云主机，有回国加速）
香港：165.154.113.107（轻量云主机，暂无回国加速）
孟买：123.58.203.38
曼谷：128.1.79.99
胡志明：152.32.162.124
新加坡 165.154.147.137
```



[原文链接](https://t.me/vps_reviews/571)



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