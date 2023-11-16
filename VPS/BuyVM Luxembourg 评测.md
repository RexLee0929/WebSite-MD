# BuyVM Luxembourg 评测



## VPS配置详情

**CPU:** 1 Core vCPU

**Memory:** 1 GB

**Storage:** 20GB SSD With 256 HDD

**Traffic:** Unmetered

**BandWidth:** 1 Gbps

**Instance Family:** Luxembourg - AMD RYZEN KVM

**Advantage:** DMCA-Resistant With Burst To 10Gbps Bandwidth After 90 Days

**IPv4:** 1 IPv4

**IPv6:** /48 IPv6

**Location:** Luxembourg

**Price:** 3.5 CAD KVM For A Month And 1.25 CAD HDD For A Month

[Order With Aff](https://my.frantech.ca/aff.php?aff=6557&pid=1423)

[Order Without Aff](https://my.frantech.ca/cart.php?a=add&pid=1423)



## VPS融合怪测试

**v2023.11.07**



```yaml
测评频道: https://t.me/vps_reviews                    
版本：2023.11.07
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD Ryzen 9 5900X 12-Core Processor
 CPU 核心数        : 1
 CPU 频率          : 3693.062 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 512.00 KB / L3: 16.00 MB
 硬盘空间          : 6.55 GiB / 19.59 GiB
 启动盘路径        : /dev/vda2
 内存              : 241.00 MiB / 971.19 MiB
 Swap              : 187.52 MiB / 2.00 GiB
 系统在线时间      : 102 days, 18 hour 28 min
 负载              : 0.22, 0.07, 0.01
 系统              : Ubuntu 22.04 LTS (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 5.15.0-25-generic
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : 开放型
 IPV4 ASN          : AS53667 FranTech Solutions
 IPV4 位置         : Bettembourg / Esch-sur-Alzette / LU
 IPV6 ASN          : AS53667 FranTech Solutions
 IPV6 位置         : Luxembourg / Luxembourg
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		4093 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		43684.88 MB/s
 单线程写测试:		19854.05 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		42.9 MB/s (10.48 IOPS, 2.44s)		34.6 MB/s (8452 IOPS, 3.03s)
 1GB-1M Block		1.2 GB/s (1097 IOPS, 0.91s)		1.1 GB/s (1088 IOPS, 0.92s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 163.07 MB/s  (40.7k) | 792.89 MB/s  (12.3k)
Write      | 163.50 MB/s  (40.8k) | 797.06 MB/s  (12.4k)
Total      | 326.58 MB/s  (81.6k) | 1.58 GB/s    (24.8k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 1.18 GB/s     (2.3k) | 1.22 GB/s     (1.1k)
Write      | 1.24 GB/s     (2.4k) | 1.30 GB/s     (1.2k)
Total      | 2.42 GB/s     (4.7k) | 2.53 GB/s     (2.4k)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 荷兰阿姆斯特丹(AMS15S45)
Youtube识别地域: 无信息(null)
[IPv6]
连接方式: Youtube Video Server
视频缓存节点地域: 德国法兰克福(FRA15S37)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：卢森堡
[IPv6]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：卢森堡
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：卢森堡区
[IPv6]
当前IPv6出口解锁DisneyPlus
区域：卢森堡区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					Yes (Region: LU)
 HotStar:				No
 Disney+:				No
 Netflix:				Originals Only
 YouTube Premium:			Failed
 Amazon Prime Video:			Yes (Region: LU)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			INTL
 Viu.com:				No
 YouTube CDN:				Amsterdam 
 Netflix Preferred CDN:			New York, NY  
 Spotify Registration:			Yes (Region: LU)
 Steam Currency:			EUR
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:					Failed (Network Connection)
 HotStar:				No
 Disney+:				Yes (Region: LU)
 Netflix:				Originals Only
 YouTube Premium:			Failed
 Amazon Prime Video:			Unsupported
 TVBAnywhere+:				Failed (Network Connection)
 iQyi Oversea Region:			Failed
 Viu.com:				Failed
 YouTube CDN:				Frankfurt 
 Netflix Preferred CDN:			New York, NY  
 Spotify Registration:			Yes (Region: LU)
 Steam Currency:			Failed (Network Connection)
 ChatGPT:				Yes
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【LU】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 43②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):hosting①  Data Center/Web Hosting/Transit⑤  hosting⑧  business⑨  
  公司类型(company_type):hosting①  business⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  No②   Yes⑥ ⑨ 
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
黑名单记录统计(有多少个黑名单网站有记录): 无害1 恶意1 可疑0 未检测86 ③
Google搜索可行性：YES
端口25检测:
  本地: No
  163邮箱：No
------以下为IPV6检测------
欺诈分数(越低越好): 49②
abuse得分(越低越好): 0④
IP类型: Data Center/Web Hosting/Transit⑤
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: LU 城市: Bettembourg 服务商: AS53667 FranTech Solutions
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
0.35 ms 	AS53667 [PONYNET-11] 卢森堡 卢森堡市 frantech.ca
4.79 ms 	* RFC1918
5.73 ms 	AS6939 [HURRICANE-11] 比利时 布鲁塞尔 he.net
226.00 ms 	AS6939 英国 英格兰 伦敦 he.net
15.26 ms 	AS6939 [HURRICANE-11] 英国 英格兰 伦敦 he.net
118.56 ms 	AS4134 [CHINANET-BB] 英国 英格兰 伦敦 chinatelecom.com.cn 电信
253.07 ms 	AS4134 [CHINANET-BB] 中国 北京市 chinatelecom.com.cn 电信
261.01 ms 	AS134774 [CHINANET-GD] 中国 广东省 深圳市 chinatelecom.cn 电信
254.12 ms 	AS4134 中国 广东省 深圳市 福田区 chinatelecom.com.cn 电信
广州联通 210.21.196.6
0.34 ms 	AS53667 [PONYNET-11] 卢森堡 卢森堡市 frantech.ca
2.21 ms 	* RFC1918
6.17 ms 	AS6939 [HURRICANE-11] 德国 黑森州 美因河畔法兰克福 he.net
6.56 ms 	AS6939 德国 黑森州 美因河畔法兰克福 he.net
242.55 ms 	AS6939 [HURRICANE-6] 德国 黑森州 美因河畔法兰克福 he.net
247.04 ms 	AS4837 [CU169-BACKBONE] 中国 香港 chinaunicom.cn 联通
247.95 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
224.24 ms 	AS17816 [UNICOM-GD] 中国 广东省 深圳市 chinaunicom.cn 联通
273.36 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 chinaunicom.cn 联通
247.28 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 宝安区 chinaunicom.cn 联通
广州移动 120.196.165.24
0.48 ms 	AS53667 [PONYNET-11] 卢森堡 卢森堡市 frantech.ca
1.84 ms 	* RFC1918
6.02 ms 	AS6939 [HURRICANE-11] 比利时 布鲁塞尔 he.net
13.35 ms 	AS6939 [HURRICANE-11] 法国 法兰西岛大区 巴黎 he.net
19.36 ms 	* 法国 法兰西岛大区 巴黎
20.06 ms 	AS58453 [CMI-INT] 英国 英格兰 伦敦 cmi.chinamobile.com 移动
212.93 ms 	AS58453 [CMI-INT] 中国 广东省 广州市 cmi.chinamobile.com 移动
212.47 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
212.89 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
214.32 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
218.23 ms 	AS9808 [CMNET] 中国 海南省 海口市 chinamobile.com 移动
216.31 ms 	AS56040 [APNIC-AP] 中国 广东省 深圳市 chinamobile.com 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 893.95 Mbps	 931.68 Mbps	 2.06	  0.0%
法兰克福	 1981.36 Mbps	 1687.38 Mbps	 5.17	  0.0%
新加坡		 427.66 Mbps	 2078.59 Mbps	 157.46	  0.0%
联通沈阳	 74.43 Mbps	 127.91 Mbps	 228.82	  0.0%
联通Fuzhou	 221.08 Mbps	 1687.66 Mbps	 240.01	  0.0%
电信浙江	 28.64 Mbps	 668.16 Mbps	 259.25	  NULL
电信江苏5G	 31.01 Mbps	 19.69 Mbps	 1414.98	  1.7%
移动硬核通信	 224.24 Mbps	 275.32 Mbps	 275.07	  NULL
------------------------------------------------------------------------
 总共花费      : 6 分 18 秒
 时间          : Thu Nov 16 17:53:50 CST 2023
------------------------------------------------------------------------

```



[融合怪测试结果短链接](http://paste.spiritlhl.net/u/4ezFAc.txt)



### VPS商家评论频道



```yaml
#buyvm    
#frantech
#anynode
网站：BuyVM(frantech)
 (https://my.frantech.ca/aff.php?aff=5522)支持支付方式： 
Paypal
BitPay(BitCoin)
Credit Card
Alipay(支付宝)
账户余额最低充值：15美元
购买无最低充值限制

评语：
#美国 #卢森堡  
#抗DMCA  #抗投诉
#windows支持
#免费ddos防护
#大盘鸡 
#10Gbps 仅限升级的用户或长期用户
#不限流量 
#热门 #邮件可用
2011年起家的热门加拿大商家，默认10Gbps带宽
分流的补货监控频道：@buyvm_spiders
优点：
连续使用服务器90天后可突发10Gbps，否则是1Gbps带宽
(也可以按季付买然后联系客服，或者年付前联系客服，也能10Gbps)
经常晚上11点到次日凌晨6点补货，值得抢购，性价比高
购买对应地区的存储块和最低配的KVM机器，合计7美元左右挂载成一个大盘鸡
所有地区抗投诉 ，部分特殊需求的人需要它
注意抗DMCA版权投诉的地区只有卢森堡(LU)，包括卢森堡的VPS与存储块
买了后感觉线路绕的，发工单问问线路可能可以直一点
(实际没啥用，最多换个IP，且仅限于买了的前24还是48小时)
强烈推荐支付宝付款，懂的都懂，美元变加元，便宜不少
同时也售卖虚拟主机，年付几美元，还行吧
卢森堡和迈阿密地区有5900x的CPU，抽奖性质(后续别的地区也会有)
CPU是AMD 5900x的可以算是 #高配鸡
缺点：
月中买多付一个月的钱，买的是1个半月
卢森堡(LU)太远了，网络一般，日常拉斯维加斯(LV)好点但少补货
使用支付宝支付会被标记国人用户，可能会导致工单缓慢，且可能无法升级为高级用户，然后带宽可能就升级不上去了
(但支付宝支付确实便宜，只能说各取所需，要升级客户等级就别支付宝支付，买前问客服可否升级，要便宜直接支付宝支付)
用存储块的记得做好数据备份，存储块有的集群一年一度炸一次的，有概率你的运气不好在这些集群上
长期使用后可能性能被限制降低了，此时可以在后台关电源，然后再开机就可能就会恢复了，无论是CPU、内存、IO啥性能降低了都可以试试
窥镜：
卢森堡
IPv4：104.244.76.191
IPv4 DDOS：198.251.89.251
IPv4 任播：198.251.86.22
IPv6：2605:6400:0030:fdd5::1
https://speedtest.lu.buyvm.net/
拉斯维加斯
IPv4：209.141.56.135
IPv4 DDOS：198.251.86.221
IPv4 任播：198.251.86.22
IPv6：2605:6400:0020:0078::1
http://speedtest.lv.buyvm.net/
纽约
IPv4：198.98.53.31
IPv4 DDOS：198.251.83.87
IPv4 任播：198.251.86.22
IPv6：2605:6400:0010:0053::1
http://speedtest.ny.buyvm.net/
迈阿密
IPv4：45.61.191.250
IPv4 DDOS：198.251.82.2
IPv6：2605:6400:0040::250
http://speedtest.mia.buyvm.net/
后台控制面板：
注册后的第一封邮件有初始化链接，记得设置
https://manage.buyvm.net/login
```



[原文链接](https://t.me/vps_reviews/8)



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