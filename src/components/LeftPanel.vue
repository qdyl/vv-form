<template>
  <!-- 左-->
  <div class="tool-panel-left"   :class="{isPullAwayClass : isPullAway}">
    <a class="panel-open-btn-left" href="javascript:void(0);">
      <i class="glyphicon glyphicon-menu-left" @click="pullAwayLeft"></i>
    </a>
    <dl class="accordionPanel">
      <dt class="accordionPanelTab"><b>部件库</b></dt>
      <!-- 部件库 -->
      <dd class="accordionPanelContent">
        <div id="snippetPicker" avalonctrl="snippetPicker">
          <!-- 下拉-->
          <select id="selSnips" class="categories" v-model="option" >
            <option value="all">all</option>
            <option value="输入框">输入框</option>
            <option value="列表选择">列表选择</option>
            <option value="单选、多选">单选、多选</option>
            <option value="文件、按钮">文件、按钮</option>
          </select>
          <p>'option的值':{{option}}</p>
          <!-- list-->
          <ul id="divSnippetList">
            <draggable v-model="leftForms" :options="comOption">
                <li v-for="item in secLeftForms"
                    class="ui-draggable"
                    :key="item.data_id"
                    :data_id="item.data_id"
                    @click="moveLeftForm"
                    :aaa="item.type"
                    v-show="(option===item.type || option==='all')">
                  <img :src="item.src" alt="" >
                </li>
            </draggable>
          </ul>
        </div>
      </dd>
    </dl>
  </div>
</template>

<script>
  import Draggable from 'vuedraggable'
  export default {
    name: "left",
    components:{Draggable},
    data() {
      return {
        option:'all',
        isPullAway:false,
        chooseAllOption:true,
        leftIndex:'',
        // 1、左面板数据
        secLeftForms:[
          {'data_id':0,
            'src':'../../static/images/fl1.png',
            'type':'输入框'
          },
          {'data_id':1,
            'src':'../../static/images/ft1.png',
            'type':'输入框'
          },
          {'data_id':2,
            'src':'../../static/images/ft8.png',
            'type':'输入框'
          },
          {'data_id':3,
            'src':'../../static/images/ft9.png',
            'type':'输入框'
          },
          {'data_id':4,
            'src':'../../static/images/ft10.png',
            'type':'输入框'
          },
          {'data_id':5,
            'src':'../static/images/ft3.png',
            'type':'输入框'
          },
          {'data_id':6,
            'src':'../static/images/ft4.png',
            'type':'输入框'
          },
          {'data_id':7,
            'src':'../static/images/ft7.png',
            'type':'输入框'
          },
          {'data_id':8,
            'src':'../static/images/fs1.png',
            'type':'输入框'
          },
          {'data_id':9,
            'src':'../static/images/fs3.png',
            'type':'列表选择'
          },
          {'data_id':10,
            'src':'../static/images/fs2.png',
            'type':'列表选择'
          },
          {'data_id':11,
            'src':'../static/images/fc1.png',
            'type':'列表选择'
          },
          {'data_id':12,
            'src':'../static/images/fc2.png',
            'type':'列表选择'
          },
          {'data_id':13,
            'src':'../static/images/fc3.png',
            'type':'单选、多选'
          },
          {'data_id':14,
            'src':'../static/images/fc4.png',
            'type':'单选、多选'
          },
          {'data_id':15,
            'src':'../static/images/fc5.png',
            'type':'单选、多选'
          },
          {'data_id':16,
            'src':'../static/images/ff1.png',
            'type':'文件、按钮'
          },
          {'data_id':17,
            'src':'../static/images/fb1.png',
            'type':'文件、按钮'
          },

        ],
        // 2、vue.draggble配置信息
        comOption:{
          sort:false,
          clone:true,
          group:'forms',
          animation:300,
          // 2.1、落入时，鼠标样式变为可以落入
          forceFallback:true,
          fallbackClass:'draggingStyle'
        }
      }
    },
    mounted(){},
    computed:{},
    methods:{
      // 1、收起左面板
      pullAwayLeft(){
        this.isPullAway = !this.isPullAway;
        // this.$parent.extendLeftOrRight(); 调用父组件的方法

      },
      // 2、移动左form到中间
      moveLeftForm(event){
        let dom = event.target.parentNode;
        this.leftIndex = dom.getAttribute('data-snipid');
        console.log(this.leftIndex);
      }
    }
  }
</script>

<style lang="less" scoped>
  .isPullAwayClass{
    left: -242px;
  }

</style>
