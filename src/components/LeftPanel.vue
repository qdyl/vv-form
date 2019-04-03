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
        <!--  <ul id="divSnippetList" @click="moveLeftForm($event)">
            <li v-show="(option === '输入框'|| option==='all')" data-id="0" data-snipcat=",all," class="ui-draggable">
              <img alt="" src="../assets/images/fl1.png">
            </li>
            <li v-show="(option === '输入框'|| option==='all')" data-id="1" data-snipcat=",输入框," class="ui-draggable">
              <img alt="" src="../assets/images/ft1.png">
            </li>
            <li v-show="(option === '输入框'|| option==='all')" data-id="2" data-snipcat=",输入框," class="ui-draggable">
              <img alt="" src="../assets/images/ft8.png">
            </li>
            <li v-show="(option === '输入框'|| option==='all')" data-id="3" data-snipcat=",输入框," class="ui-draggable">
              <img src="../assets/images/ft9.png">
            </li>
            <li v-show="(option === '输入框'|| option==='all')" data-id="4" data-snipcat=",输入框," class="ui-draggable">
              <img alt="" src="../assets/images/ft10.png">
            </li>
            <li v-show="(option === '输入框'|| option==='all')"  data-id="5" data-snipcat=",输入框," class="ui-draggable">
              <img alt="" src="../assets/images/ft3.png">
            </li>
            <li v-show="(option === '输入框'|| option==='all')" data-id="6" data-snipcat=",输入框," class="ui-draggable">
              <img alt="" src="../assets/images/ft4.png">
            </li>
            <li v-show="(option === '输入框'|| option==='all')" data-id="7" data-snipcat=",输入框," class="ui-draggable">
              <img alt="" src="../assets/images/ft7.png">
            </li>
            <li v-show="(option === '输入框'|| option==='all')" data-id="8" data-snipcat=",列表选择," class="ui-draggable">
              <img alt="" src="../assets/images/fs1.png">
            </li>

            <li v-show="(option === '列表选择'|| option==='all')" data-id="9" data-snipcat=",列表选择," class="ui-draggable">
              <img alt="" src="../assets/images/fs3.png">
            </li>
            <li v-show="(option === '列表选择'|| option==='all')" data-id="10" data-snipcat=",列表选择," class="ui-draggable">
              <img alt="" src="../assets/images/fs2.png">
            </li>

            <li v-show="(option  === '单选、多选'|| option==='all' )" data-id="11" data-snipcat=",单选、多选," class="ui-draggable">
              <img alt="" src="../assets/images/fc1.png">
            </li>
            <li v-show="(option  === '单选、多选'|| option==='all' )" data-id="12" data-snipcat=",单选、多选," class="ui-draggable">
              <img alt="" src="../assets/images/fc2.png">
            </li>
            <li v-show="(option  === '单选、多选'|| option==='all')" data-id="13" data-snipcat=",单选、多选," class="ui-draggable">
              <img alt="" src="../assets/images/fc3.png">
            </li>
            <li v-show="(option  === '单选、多选'|| option==='all' )" data-id="14" data-snipcat=",单选、多选," class="ui-draggable">
              <img alt="" src="../assets/images/fc4.png">
            </li>
            <li v-show="(option  === '单选、多选'|| option==='all')" data-id="15" data-snipcat=",单选、多选," class="ui-draggable">
              <img alt="" src="../assets/images/fc5.png">
            </li>

            <li v-show="(option === '文件、按钮'|| option==='all')" data-id="16" data-snipcat=",文件、按钮," class="ui-draggable">
              <img alt="" src="../assets/images/ff1.png">
            </li>
            <li v-show="(option === '文件、按钮'|| option==='all')" data-id="17" data-snipcat=",文件、按钮," class="ui-draggable">
              <img alt="" src="../assets/images/fb1.png">
            </li>
          </ul>-->

          <ul id="divSnippetList">
            <draggable v-model="leftForms" >
                <li v-for="item in leftForms"
                    :key="item.id"
                    v-html="item.leftCont"
                    @click="moveLeftForm">
                  {{item.id}}
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
              <img alt="" src="../assets/images/fl1.png">
            </li>`},
          {id:1,leftCont:`<li v-show="(option === '输入框'|| option==='all')" data-snipid="1" data-snipcat=",输入框," class="ui-draggable">
              <img alt="" src="../assets/images/ft1.png">
            </li>`},
          {id:2,leftCont:`<li v-show="(option === '输入框'|| option==='all')" data-snipid="2" data-snipcat=",输入框," class="ui-draggable">
              <img alt="" src="../assets/images/ft8.png">
            </li>`},
          {id: 3,leftCont:`<li v-show="(option === '输入框'|| option==='all')" data-snipid="3" data-snipcat=",输入框," class="ui-draggable">
              <img alt="" src="../assets/images/ft9.png">
            </li>`},
          {id:4,leftCont:`<li v-show="(option === '输入框'|| option==='all')" data-snipid="4" data-snipcat=",输入框," class="ui-draggable">
              <img alt="" src="../assets/images/ft10.png">
            </li>`},
          {id:5,leftCont:`<li v-show="(option === '输入框'|| option==='all')"  data-snipid="5" data-snipcat=",输入框," class="ui-draggable">
              <img alt="" src="../assets/images/ft3.png">
            </li>`},
          {id:6,leftCont:`<li v-show="(option === '输入框'|| option==='all')" data-snipid="6" data-snipcat=",输入框," class="ui-draggable">
              <img alt="" src="../assets/images/ft4.png">
            </li>`},
          {id:7,leftCont:`<li v-show="(option === '输入框'|| option==='all')" data-snipid="7" data-snipcat=",输入框," class="ui-draggable">
              <img alt="" src="../assets/images/ft7.png">
            </li>`},
          {id:8,leftCont:`<li v-show="(option === '输入框'|| option==='all')" data-snipid="8" data-snipcat=",列表选择," class="ui-draggable">
              <img alt="" src="../assets/images/fs1.png">
            </li>`},
          {id:9,leftCont:`<li v-show="(option === '列表选择'|| option==='all')" data-snipid="9" data-snipcat=",列表选择," class="ui-draggable">
              <img alt="" src="../assets/images/fs3.png">
            </li>`},
          {id:10,leftCont:`<li v-show="(option === '列表选择'|| option==='all')" data-snipid="10" data-snipcat=",列表选择," class="ui-draggable">
              <img alt="" src="../assets/images/fs2.png">
            </li>`},
          {id:11,leftCont:`<li v-show="(option  === '单选、多选'|| option==='all' )" data-snipid="11" data-snipcat=",单选、多选," class="ui-draggable">
              <img alt="" src="../assets/images/fc1.png">
            </li>`},
          {id:12,leftCont:`<li v-show="(option  === '单选、多选'|| option==='all' )" data-snipid="12" data-snipcat=",单选、多选," class="ui-draggable">
              <img alt="" src="../assets/images/fc2.png">
            </li>`},
          {id:13,leftCont:`<li v-show="(option  === '单选、多选'|| option==='all')" data-snipid="13" data-snipcat=",单选、多选," class="ui-draggable">
              <img alt="" src="../assets/images/fc3.png">
            </li>`},
          {id:14,leftCont:`<li v-show="(option  === '单选、多选'|| option==='all' )" data-snipid="14" data-snipcat=",单选、多选," class="ui-draggable">
              <img alt="" src="../assets/images/fc4.png">
            </li>`},
          {id:15,leftCont:`<li v-show="(option  === '单选、多选'|| option==='all')" data-snipid="15" data-snipcat=",单选、多选," class="ui-draggable">
              <img alt="" src="../assets/images/fc5.png">
            </li>`},
          {id:16,leftCont:`<li v-show="(option === '文件、按钮'|| option==='all')" data-snipid="16" data-snipcat=",文件、按钮," class="ui-draggable">
              <img alt="" src="../assets/images/ff1.png">
            </li>`},
          {id:17,leftCont:`<li v-show="(option === '文件、按钮'|| option==='all')" data-snipid="17" data-snipcat=",文件、按钮," class="ui-draggable">
              <img alt="" src="../assets/images/fb1.png">
            </li>`}
        ],
        secLeftForms:[
          {'data-id':0,
            src:'../assets/images/fl1.png',
            show:'(option === \'输入框\'|| option===\'all\')',
          },
          {'data-id':1,
            src:'../assets/images/ft1.png',
            show:'(option === \'输入框\'|| option===\'all\')',
          },
          {'data-id':2,
            src:'../assets/images/ft8.png',
            show:'(option === \'输入框\'|| option===\'all\')',
          },
          {'data-id':3,
            src:'../assets/images/ft9.png',
            show:'(option === \'输入框\'|| option===\'all\')',
          },
          {'data-id':4,
            src:'../assets/images/ft10.png',
            show:'(option === \'输入框\'|| option===\'all\')',
          },
          {'data-id':5,
            src:'../assets/images/ft3.png',
            show:'(option === \'输入框\'|| option===\'all\')',
          },
          {'data-id':6,
            src:'../assets/images/ft4.png',
            show:'(option === \'输入框\'|| option===\'all\')',
          },
          {'data-id':7,
            src:'../assets/images/ft7.png',
            show:'(option === \'输入框\'|| option===\'all\')',
          },
          {'data-id':8,
            src:'../assets/images/fs1.png',
            show:'(option === \'输入框\'|| option===\'all\')',
          },
          {'data-id':9,
            src:'../assets/images/fs3.png',
            show:'(option === \'列表选择\'|| option===\'all\')',
          },
          {'data-id':10,
            src:'../assets/images/fs2.png',
            show:'(option === \'列表选择\'|| option===\'all\')',
          },
          {'data-id':11,
            src:'../assets/images/fc1.png',
            show:'(option  === \'单选、多选\'|| option===\'all\' )',
          },
          {'data-id':12,
            src:'../assets/images/fc2.png',
            show:'(option  === \'单选、多选\'|| option===\'all\' )',
          },
          {'data-id':13,
            src:'../assets/images/fc3.png',
            show:'(option  === \'单选、多选\'|| option===\'all\' )',
          },
          {'data-id':14,
            src:'../assets/images/fc4.png',
            show:'(option  === \'单选、多选\'|| option===\'all\' )',
          },
          {'data-id':15,
            src:'../assets/images/fc5.png',
            show:'(option  === \'单选、多选\'|| option===\'all\' )',
          },
          {'data-id':16,
            src:'../assets/images/ff1.png',
            show:'(option === \'文件、按钮\'|| option===\'all\')',
          },
          {'data-id':17,
            src:'../assets/images/fb1.png',
            show:'(option === \'文件、按钮\'|| option===\'all\')',
          },

        ]
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
