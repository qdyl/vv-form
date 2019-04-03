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
        leftForms:[
          {id:0,leftCont:` <li v-show="(option === '输入框'|| option==='all')" data-snipid="0" data-snipcat=",all," class="ui-draggable">
              <img alt="" src="../../static/images/fl1.png">
            </li>`},
          {id:1,leftCont:`<li v-show="(option === '输入框'|| option==='all')" data-snipid="1" data-snipcat=",输入框," class="ui-draggable">
              <img alt="" src="../../static/images/ft1.png">
            </li>`},
          {id:2,leftCont:`<li v-show="(option === '输入框'|| option==='all')" data-snipid="2" data-snipcat=",输入框," class="ui-draggable">
              <img alt="" src="../../static/images/ft8.png">
            </li>`},
          {id: 3,leftCont:`<li v-show="(option === '输入框'|| option==='all')" data-snipid="3" data-snipcat=",输入框," class="ui-draggable">
              <img alt="" src="../../static/images/ft9.png">
            </li>`},
          {id:4,leftCont:`<li v-show="(option === '输入框'|| option==='all')" data-snipid="4" data-snipcat=",输入框," class="ui-draggable">
              <img alt="" src="../../static/images/ft10.png">
            </li>`},
          {id:5,leftCont:`<li v-show="(option === '输入框'|| option==='all')"  data-snipid="5" data-snipcat=",输入框," class="ui-draggable">
              <img alt="" src="../../static/images/ft3.png">
            </li>`},
          {id:6,leftCont:`<li v-show="(option === '输入框'|| option==='all')" data-snipid="6" data-snipcat=",输入框," class="ui-draggable">
              <img alt="" src="../../static/images/ft4.png">
            </li>`},
          {id:7,leftCont:`<li v-show="(option === '输入框'|| option==='all')" data-snipid="7" data-snipcat=",输入框," class="ui-draggable">
              <img alt="" src="../../static/images/ft7.png">
            </li>`},
          {id:8,leftCont:`<li v-show="(option === '输入框'|| option==='all')" data-snipid="8" data-snipcat=",列表选择," class="ui-draggable">
              <img alt="" src="../../static/images/fs1.png">
            </li>`},
          {id:9,leftCont:`<li v-show="(option === '列表选择'|| option==='all')" data-snipid="9" data-snipcat=",列表选择," class="ui-draggable">
              <img alt="" src="../../static/images/fs3.png">
            </li>`},
          {id:10,leftCont:`<li v-show="(option === '列表选择'|| option==='all')" data-snipid="10" data-snipcat=",列表选择," class="ui-draggable">
              <img alt="" src="../../static/images/fs2.png">
            </li>`},
          {id:11,leftCont:`<li v-show="(option  === '单选、多选'|| option==='all' )" data-snipid="11" data-snipcat=",单选、多选," class="ui-draggable">
              <img alt="" src="../../static/images/fc1.png">
            </li>`},
          {id:12,leftCont:`<li v-show="(option  === '单选、多选'|| option==='all' )" data-snipid="12" data-snipcat=",单选、多选," class="ui-draggable">
              <img alt="" src="../../static/images/fc2.png">
            </li>`},
          {id:13,leftCont:`<li v-show="(option  === '单选、多选'|| option==='all')" data-snipid="13" data-snipcat=",单选、多选," class="ui-draggable">
              <img alt="" src="../../static/images/fc3.png">
            </li>`},
          {id:14,leftCont:`<li v-show="(option  === '单选、多选'|| option==='all' )" data-snipid="14" data-snipcat=",单选、多选," class="ui-draggable">
              <img alt="" src="../../static/images/fc4.png">
            </li>`},
          {id:15,leftCont:`<li v-show="(option  === '单选、多选'|| option==='all')" data-snipid="15" data-snipcat=",单选、多选," class="ui-draggable">
              <img alt="" src="../../static/images/fc5.png">
            </li>`},
          {id:16,leftCont:`<li v-show="(option === '文件、按钮'|| option==='all')" data-snipid="16" data-snipcat=",文件、按钮," class="ui-draggable">
              <img alt="" src="../../static/images/ff1.png">
            </li>`},
          {id:17,leftCont:`<li v-show="(option === '文件、按钮'|| option==='all')" data-snipid="17" data-snipcat=",文件、按钮," class="ui-draggable">
              <img alt="" src="../../static/images/fb1.png">
            </li>`}
        ],
        // 左面板数据
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
        // vue.draggble配置信息
        comOption:{
          sort:true,
          clone:true,
          group:'leftArray',
          animation:300,
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
