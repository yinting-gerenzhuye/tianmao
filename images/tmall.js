window.Pointman&&Pointman.init({csp:{sample:1,param:{warn:1e-4,deny:1,trust:"google.com,tmall.hk,google-analytics.com,googleapis.com,yuntv.letv.com,alipayobjects.com,jaeapp.com,mlt01.com,wrating.com,youku.com,uniqlo.cn,alitrip.com,letvcdn.com,aliloan.com,amap.com,95095.com,oadz.com,alibaba.com:4813,alibaba.com:4013,alibaba.com:4012,alibaba.com:4812,taobao.org,taobaocdn.net,tmall.net,aliyun-inc.com,tbcache.com,sinajs.cn,1688.com,etao.com,taobao.com,taobao.net,tmall.com,tbcdn.cn,taobaocdn.com,alipay.com,aliyun.com,alicdn.com,aliimg.com,alibaba.com,cnzz.com,cnzz.net,greencompute.org,mmstat.com,atpanel.com,alibaba-inc.com,alisoft.com,jaecdn.com,tanx.com,mmcdn.cn,aliyuncdn.com,linezing.com,xiami.com,alimama.com",protocol:"blob:"}},dialog:{sample:1,param:{warning:/^\/.+\/$|^[\w!\?#@$^\.&\*~%]{1,20}$|^\d+$|xss|cookie|hello|haha|hehe|hack|test/i}},inline:{sample:.1,param:{warn:{limit:150,key:{fix:["fromCharCode","xss","getScript","createElement"],opt:["join","concat","slice","substr","match","split","escape","codeURI","replace","\\\\","eval","setTimeout","setInterval","constructor","erHTML","Attribute","unction","execScript","with","setImmediate","write","name","referer","cookie","click","atob","toLowerCase"]}},deny:{limit:500,key:{fix:[],opt:[]}}}}});