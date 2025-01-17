(function(){"use strict";var t={9482:function(t,e,a){var r=a(6848),i=a(9143),o=a.n(i),l=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-container",{staticStyle:{height:"100vh"}},[e("el-header",{staticStyle:{"background-color":"#409EFF",color:"white","text-align":"center","line-height":"60px",position:"fixed",top:"0",left:"0",right:"0","z-index":"1000"}},[e("strong",[t._v("数据分析")])]),e("el-container",{staticStyle:{"margin-top":"60px"}},[e("el-aside",{staticStyle:{"background-color":"#fff",height:"calc(100vh - 60px)",position:"fixed",left:"0",top:"60px",bottom:"0","overflow-y":"auto"},attrs:{width:"200px"}},[e("el-menu",{staticClass:"el-menu-vertical-demo",staticStyle:{height:"100%"},attrs:{"default-active":"0","background-color":"#fff","text-color":"#000","active-text-color":"#409EFF"},on:{select:t.handleMenuSelect}},[e("el-menu-item",{attrs:{index:"0"}},[e("i",{staticClass:"el-icon-menu"}),e("span",[t._v("概览")])]),e("el-submenu",{attrs:{index:"1"},scopedSlots:t._u([{key:"title",fn:function(){return[e("i",{staticClass:"el-icon-menu"}),e("span",[t._v("A3无风险机会")])]},proxy:!0}])},[e("el-menu-item-group",[e("el-menu-item",{attrs:{index:"1-1"}},[t._v("全部无风险成交")]),e("el-menu-item",{attrs:{index:"1-2"}},[t._v("申购")]),e("el-menu-item",{attrs:{index:"1-3"}},[t._v("赎回")]),e("el-menu-item",{attrs:{index:"1-4"}},[t._v("发生时点统计")]),e("el-menu-item",{attrs:{index:"1-5"}},[t._v("连续性分析")])],1)],1),e("el-submenu",{attrs:{index:"2"},scopedSlots:t._u([{key:"title",fn:function(){return[e("i",{staticClass:"el-icon-menu"}),e("span",[t._v("我司参与情况")])]},proxy:!0}])},[e("el-menu-item-group",[e("el-menu-item",{attrs:{index:"2-1"}},[t._v("全部无风险成交")]),e("el-menu-item",{attrs:{index:"2-2"}},[t._v("申购")]),e("el-menu-item",{attrs:{index:"2-3"}},[t._v("赎回")])],1)],1),e("el-menu-item",{attrs:{index:"3"}},[e("i",{staticClass:"el-icon-document"}),e("span",[t._v("分析报告")])])],1)],1),e("el-main",{staticStyle:{"margin-left":"200px",padding:"20px",height:"calc(100vh - 60px)","overflow-y":"auto"}},[["0"].includes(t.activeMenu)?e("div",[e("Content_menu0",{attrs:{activeMenu:t.activeMenu}})],1):t._e(),["1-1","1-2","1-3"].includes(t.activeMenu)?e("div",[e("Content_menu1_123",{attrs:{activeMenu:t.activeMenu}})],1):t._e(),["1-4"].includes(t.activeMenu)?e("div",[e("Content_menu1_4",{attrs:{activeMenu:t.activeMenu}})],1):t._e(),["2-1","2-2","2-3"].includes(t.activeMenu)?e("div",[e("Content_menu2_123",{attrs:{activeMenu:t.activeMenu}})],1):t._e(),["3"].includes(t.activeMenu)?e("div",[e("Content_menu3",{attrs:{activeMenu:t.activeMenu}})],1):t._e()])],1)],1)},s=[],n=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("h3",[t._v(t._s("概览"))]),e("div",{staticStyle:{border:"1px solid #ebeef5",padding:"10px","margin-bottom":"20px"}},[e("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.filterForm}},[e("el-form-item",{staticClass:"form-item-margin",attrs:{label:"日期"}},[e("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},on:{change:t.fetchData},model:{value:t.filterForm.date,callback:function(e){t.$set(t.filterForm,"date",e)},expression:"filterForm.date"}})],1)],1)],1),e("div",{staticStyle:{flex:"1",border:"1px solid #ebeef5"}},[t._m(0),e("el-container",[e("el-main",[e("el-row",{staticClass:"row",attrs:{gutter:20}},[e("el-col",{attrs:{span:12}},[e("el-card",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("span",[t._v("市场无风险成交利润")])]),e("div",{staticClass:"card-body"},[e("p",[t._v("总利润："),e("strong",[t._v(t._s(t.allIncome)+" 万")])]),e("p",[t._v("申购："),e("strong",[t._v(t._s(t.createIncome)+" 万")])]),e("p",[t._v("赎回："),e("strong",[t._v(t._s(t.redeemIncome)+" 万")])])])])],1),e("el-col",{attrs:{span:12}},[e("el-card",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("span",[t._v("各品种无风险盈利")])]),e("div",{staticClass:"card-body"},[e("p",[t._v("盈利均值："),e("strong",[t._v(t._s(t.income_ave)+" 万")])]),e("p",[t._v("交易效率均值："),e("strong",[t._v(t._s(t.eff_ave)+"%")])])])])],1)],1),e("el-row",{staticClass:"row mt-20",attrs:{gutter:20}},[e("el-col",{attrs:{span:12}},[e("el-card",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("span",[t._v("市场连续成交篮子数")])]),e("div",{staticClass:"card-body"},[e("p",[t._v("均值："),e("strong",[t._v(t._s(t.keep_ave))])])])])],1),e("el-col",{attrs:{span:12}},[e("el-card",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("span",[t._v("我司参与情况")])]),e("div",{staticClass:"card-body"},[e("p",[t._v("参与品种数："),e("strong",[t._v(t._s(t.ver_num_ourcom)+" 个")])]),e("p",[t._v("参与股数："),e("strong",[t._v(t._s(t.amo_ourcom)+" 万股")])]),e("p",[t._v("市占率均值："),e("strong",[t._v(t._s(t.marketShare_ave)+"%")])])])])],1)],1)],1)],1)],1)])},d=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticStyle:{"border-bottom":"1px solid #ebeef5",padding:"10px","background-color":"#f5f7fa"}},[e("strong",[t._v("该日整体表现")])])}],c=a(4373),u={name:"Content_menu0",props:{activeMenu:{type:String,required:!0}},data(){return{filterForm:{date:"2024-10-18"},allIncome:"--",createIncome:"--",redeemIncome:"--",income_ave:"--",eff_ave:"--",keep_ave:"--",ver_num_ourcom:"--",amo_ourcom:"--",marketShare_ave:"--",isDataLoaded:!1}},created(){this.fetchData()},methods:{async fetchData(){try{const t=await c.A.get(`http://localhost:3000/menu/${this.activeMenu}/date/${this.filterForm.date}/csv`);console.log("获取到的数据1:",t.data),this.allIncome=t.data[0]["总利润"],this.createIncome=t.data[0]["申购利润"],this.redeemIncome=t.data[0]["赎回利润"],this.income_ave=t.data[0]["盈利均值"],this.eff_ave=t.data[0]["交易效率均值"],this.keep_ave=t.data[0]["连续成交篮子数均值"],this.ver_num_ourcom=t.data[0]["我司参与品种"],this.amo_ourcom=t.data[0]["我司参与股数"],this.marketShare_ave=t.data[0]["市占率均值"],this.isDataLoaded=!0}catch(t){console.log("该日无数据"),this.allIncome="--",this.createIncome="--",this.redeemIncome="--",this.income_ave="--",this.eff_ave="--",this.keep_ave="--",this.ver_num_ourcom="--",this.amo_ourcom="--",this.marketShare_ave="--",this.isDataLoaded=!0,i.Message.warning("该日期暂无数据")}}}},h=u,p=a(1656),f=(0,p.A)(h,n,d,!1,null,"5900fb09",null),m=f.exports,v=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("h3",[t._v(t._s("1-1"===t.activeMenu?"全部无风险成交":"1-2"===t.activeMenu?"申购无风险成交":"赎回无风险成交"))]),e("div",{staticStyle:{border:"1px solid #ebeef5",padding:"10px","margin-bottom":"20px"}},[e("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.filterForm}},[e("el-form-item",{staticClass:"form-item-margin",attrs:{label:"日期"}},[e("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},on:{change:t.handleSellectedDate},model:{value:t.filterForm.date,callback:function(e){t.$set(t.filterForm,"date",e)},expression:"filterForm.date"}})],1),e("el-form-item",{staticClass:"form-item-margin",attrs:{label:"品种"}},[e("el-input",{attrs:{placeholder:"请输入品种"},on:{input:t.handleFilter},model:{value:t.filterForm.品种,callback:function(e){t.$set(t.filterForm,"品种",e)},expression:"filterForm.品种"}})],1)],1)],1),e("div",{staticStyle:{display:"flex",gap:"20px","margin-bottom":"20px"}},[e("div",{staticStyle:{flex:"1",border:"1px solid #ebeef5"}},[t._m(0),e("div",{ref:"pieChart",staticStyle:{width:"100%",height:"500px",padding:"0px"}})]),e("div",{staticStyle:{flex:"1",border:"1px solid #ebeef5"}},[t._m(1),e("div",{staticStyle:{padding:"20px",height:"500px","overflow-y":"auto"},domProps:{innerHTML:t._s(t.formattedAiWord)}})])]),e("div",{staticStyle:{border:"1px solid #ebeef5"}},[t._m(2),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.paginatedTableData,border:"",stripe:"","default-sort":{prop:"",order:""}},on:{"sort-change":t.handleSortChange}},[e("el-table-column",{attrs:{prop:"品种",label:"品种",sortable:"",width:"100"}}),e("el-table-column",{attrs:{prop:"市场成交额(亿)",label:"市场成交额(亿)",sortable:"",width:"150"}}),e("el-table-column",{attrs:{prop:"无风险成交额(亿)",label:"无风险成交额(亿)",sortable:"",width:"160"}}),e("el-table-column",{attrs:{prop:"无风险占比",label:"无风险占比",sortable:"",width:"130"}}),e("el-table-column",{attrs:{prop:"无风险盈利(万)",label:"无风险盈利(万)",sortable:"",width:"150"}}),e("el-table-column",{attrs:{prop:"交易效率(%)",label:"交易效率(%)",sortable:"",width:"130"}}),e("el-table-column",{attrs:{prop:"我司是否参与",label:"我司是否参与",sortable:"",width:"130"}})],1)],1),e("el-pagination",{staticStyle:{"margin-top":"20px","text-align":"right"},attrs:{background:"",layout:"prev, pager, next",total:t.filteredTableData.length,"page-size":t.pageSize},on:{"current-change":t.handlePageChange}})],1)},g=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticStyle:{"border-bottom":"1px solid #ebeef5",padding:"10px","background-color":"#f5f7fa"}},[e("strong",[t._v("无风险盈利分布")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticStyle:{"border-bottom":"1px solid #ebeef5",padding:"10px","background-color":"#f5f7fa"}},[e("strong",[t._v("AI分析")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticStyle:{"border-bottom":"1px solid #ebeef5",padding:"10px","background-color":"#f5f7fa"}},[e("strong",[t._v("品种明细")])])}],_=(a(8992),a(4520),a(1454),a(8872),a(9671)),b={name:"Content_menu1_123",props:{activeMenu:{type:String,required:!0}},data(){return{tableData:[],ai_word:"",filteredTableData:[],filterForm:{date:"2024-10-18","品种":""},total:0,pageSize:10,currentPage:1,sortProp:"",sortOrder:"",isDataLoaded:!1}},created(){this.fetchData()},watch:{activeMenu(t){["1-1","1-2","1-3"].includes(t)&&this.fetchData()},filteredTableData(){this.$nextTick((()=>{this.renderPieChart()}))}},computed:{formattedAiWord(){return this.ai_word.replace(/\n/g,"<br>")},paginatedTableData(){const t=(this.currentPage-1)*this.pageSize,e=t+this.pageSize;return this.filteredTableData.slice(t,e)}},methods:{getDefaultDate(){const t=new Date,e=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${e}-${a}-${r}`},handleMenuSelect(t){this.activeMenu=t},async fetchData(){try{const t=await c.A.get(`http://localhost:3000/menu/${this.activeMenu}/date/${this.filterForm.date}/csv`);console.log("获取到的数据1:",t.data);const e=await c.A.get(`http://localhost:3000/menu/${this.activeMenu}/date/${this.filterForm.date}/txt`);console.log("获取到的数据2:",e.data),this.ai_word=e.data,this.tableData=t.data,this.filteredTableData=t.data,this.total=t.data.length,this.isDataLoaded=!0}catch(t){console.log("该日无数据"),this.ai_word="无",this.tableData=[],this.filteredTableData=[],this.total=0,this.isDataLoaded=!0,i.Message.warning("该日期暂无数据")}},handleFilter(){this.filteredTableData=this.tableData.filter((t=>{const e=!this.filterForm.品种||t.品种.includes(this.filterForm.品种);return e})),this.currentPage=1},handleSellectedDate(){["1-1","1-2","1-3"].includes(this.activeMenu)&&this.fetchData()},handlePageChange(t){this.currentPage=t},handleSortChange({prop:t,order:e}){this.sortProp=t,this.sortOrder=e,this.filteredTableData.sort(((a,r)=>"ascending"===e?a[t]>r[t]?1:-1:a[t]<r[t]?1:-1))},renderPieChart(){const t=this.$refs.pieChart;if(!t)return;let e=_.FP(t);e?e.clear():e=_.Ts(t);const a=this.filteredTableData.map((t=>({name:t.品种,value:t["无风险盈利(万)"]}))).sort(((t,e)=>e.value-t.value)),r=a.slice(0,19),i=a.slice(19),o=parseFloat(i.reduce(((t,e)=>t+e.value),0).toFixed(2)),l=[...r,{name:"其他",value:o}],s={tooltip:{trigger:"item",formatter:"{b}: {c}万 ({d}%)"},series:[{name:"无风险盈利",type:"pie",radius:"50%",data:l,emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};e.setOption(s)}}},x=b,y=(0,p.A)(x,v,g,!1,null,"d16cbd62",null),S=y.exports,C=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("h3",[t._v(t._s("发生时点统计"))]),e("div",{staticStyle:{border:"1px solid #ebeef5",padding:"10px","margin-bottom":"20px"}},[e("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.filterForm}},[e("el-form-item",{staticClass:"form-item-margin",attrs:{label:"日期"}},[e("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},on:{change:t.fetchData},model:{value:t.filterForm.date,callback:function(e){t.$set(t.filterForm,"date",e)},expression:"filterForm.date"}})],1)],1)],1),e("div",{staticStyle:{flex:"1",border:"1px solid #ebeef5","margin-bottom":"20px"}},[t._m(0),e("div",{ref:"lineChart",staticStyle:{width:"100%",height:"500px"}})]),e("div",{staticStyle:{flex:"1",border:"1px solid #ebeef5"}},[t._m(1),e("div",{staticStyle:{padding:"20px",height:"500px","overflow-y":"auto"},domProps:{innerHTML:t._s(t.formattedAiWord)}})])])},D=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticStyle:{"border-bottom":"1px solid #ebeef5",padding:"10px","background-color":"#f5f7fa"}},[e("strong",[t._v("全市场每五分钟无风险成交量统计（单位：亿股）")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticStyle:{"border-bottom":"1px solid #ebeef5",padding:"10px","background-color":"#f5f7fa"}},[e("strong",[t._v("AI分析")])])}],w={name:"Content_menu1_4",props:{activeMenu:{type:String,required:!0}},data(){return{filterForm:{date:"2024-10-18"},tableData:[],ai_word:"",isDataLoaded:!1,lineChart:null}},created(){this.fetchData()},computed:{formattedAiWord(){return this.ai_word.replace(/\n/g,"<br>")}},methods:{async fetchData(){try{const t=await c.A.get(`http://localhost:3000/menu/${this.activeMenu}/date/${this.filterForm.date}/csv`);console.log("获取到的数据1:",t.data);const e=await c.A.get(`http://localhost:3000/menu/${this.activeMenu}/date/${this.filterForm.date}/txt`);console.log("获取到的数据2:",e.data),this.ai_word=e.data,this.tableData=t.data,this.isDataLoaded=!0,this.renderLineChart()}catch(t){console.log("该日无数据"),this.ai_word="无",this.tableData=[],this.isDataLoaded=!0,i.Message.warning("该日期暂无数据"),this.clearChart()}},renderLineChart(){this.lineChart&&this.lineChart.dispose(),this.lineChart=_.Ts(this.$refs.lineChart);const t=this.tableData.map((t=>t["时间"])),e=this.tableData.map((t=>t["全部(亿股)"])),a=this.tableData.map((t=>t["申购(亿股)"])),r=this.tableData.map((t=>t["赎回(亿股)"])),i={tooltip:{trigger:"axis"},legend:{data:["全部","申购","赎回"],bottom:10},xAxis:{type:"category",data:t,axisLabel:{rotate:45}},yAxis:{type:"value",name:"亿股"},series:[{name:"全部",type:"line",data:e,smooth:!0,lineStyle:{color:"#5470C6"},itemStyle:{color:"#5470C6"}},{name:"申购",type:"line",data:a,smooth:!0,lineStyle:{color:"#EE6666"},itemStyle:{color:"#EE6666"}},{name:"赎回",type:"line",data:r,smooth:!0,lineStyle:{color:"#91CC75"},itemStyle:{color:"#91CC75"}}]};this.lineChart.setOption(i)},clearChart(){this.lineChart&&this.lineChart.clear()}}},M=w,F=(0,p.A)(M,C,D,!1,null,"363e3640",null),P=F.exports,k=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("h3",[t._v(t._s("2-1"===t.activeMenu?"我司参与无风险成交情况":"2-2"===t.activeMenu?"我司参与申购无风险成交情况":"我司参与赎回无风险成交情况"))]),e("div",{staticStyle:{border:"1px solid #ebeef5",padding:"10px","margin-bottom":"20px"}},[e("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.filterForm}},[e("el-form-item",{staticClass:"form-item-margin",attrs:{label:"日期"}},[e("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},on:{change:t.handleSellectedDate},model:{value:t.filterForm.date,callback:function(e){t.$set(t.filterForm,"date",e)},expression:"filterForm.date"}})],1),e("el-form-item",{staticClass:"form-item-margin",attrs:{label:"品种"}},[e("el-input",{attrs:{placeholder:"请输入品种"},on:{input:t.handleFilter},model:{value:t.filterForm.品种,callback:function(e){t.$set(t.filterForm,"品种",e)},expression:"filterForm.品种"}})],1)],1)],1),e("div",{staticStyle:{display:"flex",gap:"20px","margin-bottom":"20px"}},[e("div",{staticStyle:{flex:"1",border:"1px solid #ebeef5"}},[t._m(0),e("div",{ref:"pieChart",staticStyle:{width:"100%",height:"500px",padding:"0px"}})]),e("div",{staticStyle:{flex:"1",border:"1px solid #ebeef5"}},[t._m(1),e("div",{staticStyle:{padding:"20px",height:"500px","overflow-y":"auto"},domProps:{innerHTML:t._s(t.formattedAiWord)}})])]),e("div",{staticStyle:{border:"1px solid #ebeef5"}},[t._m(2),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.paginatedTableData,border:"",stripe:"","default-sort":{prop:"",order:""}},on:{"sort-change":t.handleSortChange}},[e("el-table-column",{attrs:{prop:"品种",label:"品种",sortable:"",width:"190"}}),e("el-table-column",{attrs:{prop:"无风险盈利(万元)",label:"无风险盈利(万元)",sortable:"",width:"190"}}),e("el-table-column",{attrs:{prop:"无风险成交量(万股)",label:"无风险成交量(万股)",sortable:"",width:"190"}}),e("el-table-column",{attrs:{prop:"我司成交量(万股)",label:"我司成交量(万股)",sortable:"",width:"190"}}),e("el-table-column",{attrs:{prop:"市占率(%)",label:"市占率(%)",sortable:"",width:"190"}})],1)],1),e("el-pagination",{staticStyle:{"margin-top":"20px","text-align":"right"},attrs:{background:"",layout:"prev, pager, next",total:t.filteredTableData.length,"page-size":t.pageSize},on:{"current-change":t.handlePageChange}})],1)},$=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticStyle:{"border-bottom":"1px solid #ebeef5",padding:"10px","background-color":"#f5f7fa"}},[e("strong",[t._v("成交量分布")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticStyle:{"border-bottom":"1px solid #ebeef5",padding:"10px","background-color":"#f5f7fa"}},[e("strong",[t._v("AI分析")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticStyle:{"border-bottom":"1px solid #ebeef5",padding:"10px","background-color":"#f5f7fa"}},[e("strong",[t._v("品种明细")])])}],T={name:"Content_menu2_123",props:{activeMenu:{type:String,required:!0}},data(){return{tableData:[],ai_word:"",filteredTableData:[],filterForm:{date:"2024-10-18","品种":""},total:0,pageSize:10,currentPage:1,sortProp:"",sortOrder:"",isDataLoaded:!1}},created(){this.fetchData()},watch:{activeMenu(t){["2-1","2-2","2-3"].includes(t)&&this.fetchData()},filteredTableData(){this.$nextTick((()=>{this.renderPieChart()}))}},computed:{formattedAiWord(){return this.ai_word.replace(/\n/g,"<br>")},paginatedTableData(){const t=(this.currentPage-1)*this.pageSize,e=t+this.pageSize;return this.filteredTableData.slice(t,e)}},methods:{getDefaultDate(){const t=new Date,e=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${e}-${a}-${r}`},handleMenuSelect(t){this.activeMenu=t},async fetchData(){try{const t=await c.A.get(`http://localhost:3000/menu/${this.activeMenu}/date/${this.filterForm.date}/csv`);console.log("获取到的数据1:",t.data);const e=await c.A.get(`http://localhost:3000/menu/${this.activeMenu}/date/${this.filterForm.date}/txt`);console.log("获取到的数据2:",e.data),this.ai_word=e.data,this.tableData=t.data,this.filteredTableData=t.data,this.total=t.data.length,this.isDataLoaded=!0}catch(t){console.log("该日无数据"),this.ai_word="无",this.tableData=[],this.filteredTableData=[],this.total=0,this.isDataLoaded=!0,i.Message.warning("该日期暂无数据")}},handleFilter(){this.filteredTableData=this.tableData.filter((t=>{const e=!this.filterForm.品种||t.品种.includes(this.filterForm.品种);return e})),this.currentPage=1},handleSellectedDate(){["2-1","2-2","2-3"].includes(this.activeMenu)&&this.fetchData()},handlePageChange(t){this.currentPage=t},handleSortChange({prop:t,order:e}){this.sortProp=t,this.sortOrder=e,this.filteredTableData.sort(((a,r)=>"ascending"===e?a[t]>r[t]?1:-1:a[t]<r[t]?1:-1))},renderPieChart(){const t=this.$refs.pieChart;if(!t)return;let e=_.FP(t);e?e.clear():e=_.Ts(t);const a=this.filteredTableData.map((t=>({name:t.品种,value:t["我司成交量(万股)"]}))).sort(((t,e)=>e.value-t.value)),r=a.slice(0,19),i=a.slice(19),o=parseFloat(i.reduce(((t,e)=>t+e.value),0).toFixed(2)),l=[...r,{name:"其他",value:o}],s={tooltip:{trigger:"item",formatter:"{b}: {c}万股 ({d}%)"},series:[{name:"我司成交量(万股)",type:"pie",radius:"50%",data:l,emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};e.setOption(s)}}},A=T,O=(0,p.A)(A,k,$,!1,null,"0c65bfab",null),L=O.exports,E=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("h3",[t._v(t._s("分析报告"))]),e("div",{staticStyle:{border:"1px solid #ebeef5",padding:"10px","margin-bottom":"20px"}},[e("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.filterForm}},[e("el-form-item",{staticClass:"form-item-margin",attrs:{label:"日期"}},[e("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},on:{change:t.fetchPdf},model:{value:t.filterForm.date,callback:function(e){t.$set(t.filterForm,"date",e)},expression:"filterForm.date"}})],1)],1)],1),e("div",{staticStyle:{display:"flex",gap:"20px","margin-bottom":"20px"}},[t.pdfExists?e("iframe",{staticStyle:{border:"none"},attrs:{src:t.pdfUrl,width:"100%",height:"800px"}}):t._e()])])},I=[],z={name:"Content_menu3",props:{activeMenu:{type:String,required:!0}},data(){return{pdfUrl:"",filterForm:{date:"2024-10-18"},pdfExists:!1}},mounted(){this.checkPdfExists()},methods:{fetchPdf(){this.pdfUrl=`http://localhost:3000/menu/${this.activeMenu}/date/${this.filterForm.date}/pdf`,this.checkPdfExists()},async checkPdfExists(){try{const t=await fetch(this.pdfUrl,{method:"HEAD"});t.ok?this.pdfExists=!0:(this.pdfExists=!1,i.Message.warning("该日期暂无数据"))}catch(t){this.pdfExists=!1,i.Message.warning("该日期暂无数据")}}},created(){this.fetchPdf()}},j=z,W=(0,p.A)(j,E,I,!1,null,"73275423",null),q=W.exports,H={name:"App",components:{Content_menu0:m,Content_menu1_123:S,Content_menu1_4:P,Content_menu2_123:L,Content_menu3:q},data(){return{activeMenu:"0"}},methods:{handleMenuSelect(t){this.activeMenu=t}}},U=H,B=(0,p.A)(U,l,s,!1,null,null,null),X=B.exports,Y=a(6178);r["default"].use(Y.Ay);var G=new Y.Ay({routes:[{path:"/menu/:menu/date/:date/:type",name:"fetchData",component:{template:"<div></div>"}}]});r["default"].use(o()),new r["default"]({router:G,render:t=>t(X)}).$mount("#app")}},e={};function a(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,loaded:!1,exports:{}};return t[r].call(o.exports,o,o.exports,a),o.loaded=!0,o.exports}a.m=t,function(){a.amdO={}}(),function(){var t=[];a.O=function(e,r,i,o){if(!r){var l=1/0;for(c=0;c<t.length;c++){r=t[c][0],i=t[c][1],o=t[c][2];for(var s=!0,n=0;n<r.length;n++)(!1&o||l>=o)&&Object.keys(a.O).every((function(t){return a.O[t](r[n])}))?r.splice(n--,1):(s=!1,o<l&&(l=o));if(s){t.splice(c--,1);var d=i();void 0!==d&&(e=d)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[r,i,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,o,l=r[0],s=r[1],n=r[2],d=0;if(l.some((function(e){return 0!==t[e]}))){for(i in s)a.o(s,i)&&(a.m[i]=s[i]);if(n)var c=n(a)}for(e&&e(r);d<l.length;d++)o=l[d],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(c)},r=self["webpackChunkmy_vue_project"]=self["webpackChunkmy_vue_project"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[504],(function(){return a(9482)}));r=a.O(r)})();
//# sourceMappingURL=app.eeb5b38f.js.map