<template>
  <div class="contai">
    <!-- 表头搜索区域 -->
    <div class="search">
      城市：<el-input v-model="formData.city" placeholder="请输入内容" style="width:300px"></el-input>
      <el-button type="primary" plain @click="getList" class="btn">查询</el-button>
      品牌：<el-input v-model="formData.brand" placeholder="请输入内容" style="width:300px"></el-input>
      <el-button type="primary" plain @click="getList" class="btn">查询</el-button>
      车龄：<el-select v-model="formData.age" filterable placeholder="请选择" style="width:300px">
              <el-option
                v-for="item in Car_ageData"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
      <el-button plain @click="remove" class="btn">重置</el-button>
         
      车里程：<el-select v-model="formData.mileage" filterable placeholder="请选择" style="width:300px">
              <el-option
                v-for="item in Car_mileageData"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
      <el-button type="primary" plain @click="getList" class="btn">查询</el-button>
      排量：<el-select v-model="formData.displacement" filterable placeholder="请选择" style="width:300px">
              <el-option
                v-for="item in displacementData"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
      <el-button type="primary" plain @click="getList" class="btn">查询</el-button>
      车系：<el-input v-model="formData.series" placeholder="请输入内容" style="width:300px"></el-input>
      <el-button type="primary" plain @click="getList" class="btn">查询</el-button>
       <!-- 排放标准：<el-select v-model="formData.emission" filterable placeholder="请选择" style="width:300px">
              <el-option
                v-for="item in emissionData"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
      <el-button type="primary" plain @click="getList" class="btn">查询</el-button> -->
      变速箱：<el-select v-model="formData.gearbox" filterable placeholder="请选择" style="width:300px">
              <el-option
                v-for="item in gearboxData"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
      <el-button type="primary" plain @click="getList" class="btn">查询</el-button>
      售价：<el-select v-model="formData.price" filterable placeholder="请选择" style="width:300px">
              <el-option
                v-for="item in priceData"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
      <el-button type="primary" plain @click="getList" class="btn">查询</el-button>
    </div>
    <div>
      <!-- 表格渲染 -->
    <CarTable :commum="coumun" :Tabdata="Tabdata" v-loading="loading" style="border:1px solid #eee">
      <template  v-slot:id="{data}">
        <div>
          <el-button type="primary" plain @click="toditil(data)">查看详情</el-button>
        </div>
      </template>
    </CarTable>
    </div>
    <!-- 分页的显示与表格数据渲染 -->
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="page"
        :page-sizes="[50, 100, 150, 200]"
        :page-size="per_page"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total_count">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import CarTable from './byCarheader'
import Cardata from '../link/carData'
//初始化city的值为null
var serData = {
  city:null, //城市
  age:null,  //车龄
  mileage:null,  //车里程
  // emission:null,  排放标准
  brand:null,   //品牌
  series:null,  //车系
  gearbox:null,  //变速箱
  displacement:null,  //排量
  price:null,  //售价
}
  export default {
    components:{
      CarTable
    },
    data(){
      return {
        //得到Cardata中的表格头
        coumun:Cardata.get('汽车系列','变速箱','城市','排量','省份','里程（万公里）','更新时间','操作','汽车品牌','燃油类型','汽车类型','车主名称','售价','交易地点'),
        //空数组用来存储数据
        Tabdata:[],
        page:1, // 当前页数
        per_page:50, //当前显示条数
        currentPage:1,
        total_count:1, //总条数
        loading: false,//页面加载时的loding状态
        input:'',
        //将当前serdata克隆给formData,
        formData:JSON.parse(JSON.stringify(serData)),
        Car_ageData:[{
          
          value: 1,
          label: '车龄1年以内'
        }, {
          value: 2,
          label: '车龄2年以内'
        }, {
          value: 3,
          label: '车龄3年以内'
        }, {
          value: 4,
          label: '车龄3-5年以内'
        }, {
          value: 5,
          label: '车龄5年以上'
        }],
        Car_mileageData:[
          {
          value: 1,
          label: '1万公里以内'
        },
        {
          value: 2,
          label: '1~3万公里以内'
        },
        {
          value: 3,
          label: '3~6万公里以内'
        },
        {
          value: 4,
          label: '6~10万公里以内'
        },{
          value: 5,
          label: '10万公里以上'
        },
        ],
        displacementData:[
          {
          value: 1,
          label: '1.0以下'
        },{
          value: 2,
          label: '1.0到1.6'
        },{
          value: 3,
          label: '1.6到2.0'
        },{
          value: 4,
          label: '2.0到3.0'
        },{
          value:5,
          label: '3.0以上'
        },

        ],
        //排放标准无
        // emissionData:[
        //   {
        //   value: '国一',
        //   label: 'g1'
        // },{
        //   value: '国二',
        //   label: 'g2'
        // },{
        //   value: '国三',
        //   label: 'g3'
        // },{
        //   value: '国四',
        //   label: 'g4'
        // },{
        //   value:'国五',
        //   label: 'g5'
        // },
        // ],
        gearboxData:[
          {
          value:1,
          label: '手动'
        },{
          value: 2,
          label: '自动'
        },
        ],
        priceData:[
          {
          value:1,
          label: '5w以下'
        },
        {
          value:2,
          label: '5-10w'
        },{
          value:3,
          label: '10-15w'
        },{
          value:4,
          label: '15-20w'
        },{
          value:5,
          label: '20-30w'
        },{
          value:6,
          label: '30-50w'
        },{
          value:7,
          label: '50w以上'
        }
        ]
      }
    },
    //请求初始化数据
    created(){
      this.getList()
    },
    methods:{
      //将这个放到请求里一并发送请求
      dealData(){
        let obj = this.formData; //要请求的数据，罗列在formData克隆的那里
        obj.page = this.page;  //将请求的数据的初始页数付给this的页数
        obj.per_page = this.per_page;  //将请求的数据的初始条数付给this的条数，这样请求回来的数据一页就是this条数的那么多条
        obj.ispt = 0;
        return obj   //将obj  return 出去，否则接收不到数据
      },
      //重置操作，将当前serdata克隆给this.formdata,然后再次发送请求
      remove(){
        //克隆操作
        this.formData=JSON.parse(JSON.stringify(serData));
        //发送请求
        this.getList();
      },
      //点击按钮跳转详情操作，通过id去跳转
      toditil(id){
        let obj = {
          path:"/checkCar",
          query:{
            id
          }
        }
        // return obj;
        this.$router.push(obj)
      },
      getList(){
        //loading状态，请求开始为有loading
        this. loading = true
        //发送请求数据
        this.$http.get('/webservice/search/vehicleList/jp/1', {params:this.dealData()}).then((res)=>{
            let data = res.data
            //将返回的数据data存储到this.Tabdata数组中
            this.Tabdata = data.data
            //总条数等于数据的总条数
            this.total_count = data.total_count;
          // if(res.status == 'success'){
          //   this.Tabdata = data.data
          //   console.log(this.Tabdata)
          // }
          //loading状态，请求结束为没有loading
        this. loading = false
        })
      },
      handleSizeChange(val){
        //条数
        this.per_page = val;
        //发送请求
        this.getList();
      },
      handleCurrentChange(val){
        //当前页数等于页面点击的页数下标，由1开始
        this.page = val,
        //发送请求
        this.getList()
      }
      
    },
  }
</script>

<style lang="less" scoped>
.contai{
  height: 100%;
  width: 100%;
}
.search{
  padding-top: 10px;
  padding-bottom: 10px;
  height: 100%;
  width: 100%;
}
.el-input{
  margin-right: 12px;
}
.btn{
  margin-right: 20px;
}
.el-select{
  margin-right: 10px;
}
</style>