<template>
  <!-- 左-->
  <div class="tool-panel-left"   :class="{isPullAwayClass : isPullAway}">
    <a class="panel-open-btn-left" href="javascript:void(0);">
      <i class="glyphicon glyphicon-menu-left" @click="pullAwayLeft"></i>
    </a>
    <dl class="accordionPanel">
      <dt class="accordionPanelTab"><b>部件库</b></dt>
      <dd class="accordionPanelContent">
        <!-- 部件库 -->
        <!--<div id="snippetPicker" avalonctrl="snippetPicker">
          &lt;!&ndash; 下拉&ndash;&gt;
          <select id="selSnips" class="categories" v-model="option" @click="changeSelect(option)">
            <option value="all">all</option>
            <option value="输入框">输入框</option>
            <option value="列表选择">列表选择</option>
            <option value="单选、多选">单选、多选</option>
            <option value="文件、按钮">文件、按钮</option>
          </select>
          &lt;!&ndash; list&ndash;&gt;
          <ul id="divSnippetList" style="height: 618px;">
            <li data-repeat-rendered="onRepeatRendered" v-show="(options.leftSelected === options.input||chooseAllOption) " data-snipid="0" data-snipcat=",all," class="ui-draggable">
              <img alt="" src="../assets/images/fl1.png">
            </li>
            <li data-repeat-rendered="onRepeatRendered" v-show="(options.leftSelected === options.input||chooseAllOption) " data-snipid="1" data-snipcat=",输入框," class="ui-draggable">
              <img alt="" src="../assets/images/ft1.png">
            </li>
            <li data-repeat-rendered="onRepeatRendered" v-show="(options.leftSelected === options.input||chooseAllOption) " data-snipid="2" data-snipcat=",输入框," class="ui-draggable">
              <img alt="" src="../assets/images/ft8.png">
            </li>
            <li data-repeat-rendered="onRepeatRendered" v-show="(options.leftSelected === options.input||chooseAllOption) " data-snipid="3" data-snipcat=",输入框," class="ui-draggable">
              <img src="../assets/images/ft9.png">
            </li>
            <li data-repeat-rendered="onRepeatRendered" v-show="(options.leftSelected === options.input||chooseAllOption) " data-snipid="4" data-snipcat=",输入框," class="ui-draggable">
              <img alt="" src="../assets/images/ft10.png">
            </li>
            <li data-repeat-rendered="onRepeatRendered" v-show="(options.leftSelected === options.input||chooseAllOption)" data-snipid="5" data-snipcat=",输入框," class="ui-draggable">
              <img alt="" src="../assets/images/ft3.png">
            </li>
            <li data-repeat-rendered="onRepeatRendered" v-show="(options.leftSelected === options.input||chooseAllOption) " data-snipid="6" data-snipcat=",输入框," class="ui-draggable">
              <img alt="" src="../assets/images/ft4.png">
            </li>
            <li data-repeat-rendered="onRepeatRendered" v-show="(options.leftSelected === options.input||chooseAllOption)" data-snipid="7" data-snipcat=",输入框," class="ui-draggable">
              <img alt="" src="../assets/images/ft7.png">
            </li>
            <li data-repeat-rendered="onRepeatRendered" v-show="(options.leftSelected === options.list||chooseAllOption)" data-snipid="8" data-snipcat=",列表选择," class="ui-draggable">
              <img alt="" src="../assets/images/fs1.png">
            </li>
            
            <li data-repeat-rendered="onRepeatRendered" v-show="(options.leftSelected === options.list||chooseAllOption)" data-snipid="9" data-snipcat=",列表选择," class="ui-draggable">
              <img alt="" src="../assets/images/fs3.png">
            </li>
            <li data-repeat-rendered="onRepeatRendered" v-show="(options.leftSelected === options.list||chooseAllOption)" data-snipid="10" data-snipcat=",列表选择," class="ui-draggable">
              <img alt="" src="../assets/images/fs2.png">
            </li>
            
            <li data-repeat-rendered="onRepeatRendered" v-show="(options.leftSelected  === options.radio_check ||chooseAllOption) " data-snipid="11" data-snipcat=",单选、多选," class="ui-draggable">
              <img alt="" src="../assets/images/fc1.png">
            </li>
            <li data-repeat-rendered="onRepeatRendered" v-show="(options.leftSelected  === options.radio_check ||chooseAllOption) " data-snipid="12" data-snipcat=",单选、多选," class="ui-draggable">
              <img alt="" src="../assets/images/fc2.png">
            </li>
            
            <li data-repeat-rendered="onRepeatRendered" v-show="(options.leftSelected  === options.radio_check ||chooseAllOption) " data-snipid="13" data-snipcat=",单选、多选," class="ui-draggable">
              <img alt="" src="../assets/images/fc3.png">
            </li>
            
            <li data-repeat-rendered="onRepeatRendered" v-show="(options.leftSelected  === options.radio_check ||chooseAllOption) " data-snipid="14" data-snipcat=",单选、多选," class="ui-draggable">
              <img alt="" src="../assets/images/fc4.png">
            </li>
            <li data-repeat-rendered="onRepeatRendered" v-show="(options.leftSelected  === options.radio_check ||chooseAllOption) " data-snipid="15" data-snipcat=",单选、多选," class="ui-draggable">
              <img alt="" src="../assets/images/fc5.png">
            </li>
            
            <li data-repeat-rendered="onRepeatRendered" v-show="(options.leftSelected === options.file_button || chooseAllOption) " data-snipid="16" data-snipcat=",文件、按钮," class="ui-draggable">
              <img alt="" src="../assets/images/ff1.png">
            </li>
            
            <li data-repeat-rendered="onRepeatRendered" v-show="(options.leftSelected === options.file_button || chooseAllOption)" data-snipid="17" data-snipcat=",文件、按钮," class="ui-draggable">
              <img alt="" src="../assets/images/fb1.png">
            </li>
          </ul>
        </div>-->
        <!-- /部件库 -->

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
          <ul id="divSnippetList" style="height: 618px;">
            <li data-repeat-rendered="onRepeatRendered" v-show="(option === '输入框'|| option==='all')" data-snipid="0" data-snipcat=",all," class="ui-draggable">
              <img alt="" src="../assets/images/fl1.png">
            </li>
            <li data-repeat-rendered="onRepeatRendered" v-show="(option === '输入框'|| option==='all')" data-snipid="1" data-snipcat=",输入框," class="ui-draggable">
              <img alt="" src="../assets/images/ft1.png">
            </li>
            <li data-repeat-rendered="onRepeatRendered" v-show="(option === '输入框'|| option==='all')" data-snipid="2" data-snipcat=",输入框," class="ui-draggable">
              <img alt="" src="../assets/images/ft8.png">
            </li>
            <li data-repeat-rendered="onRepeatRendered" v-show="(option === '输入框'|| option==='all')" data-snipid="3" data-snipcat=",输入框," class="ui-draggable">
              <img src="../assets/images/ft9.png">
            </li>
            <li data-repeat-rendered="onRepeatRendered" v-show="(option === '输入框'|| option==='all')" data-snipid="4" data-snipcat=",输入框," class="ui-draggable">
              <img alt="" src="../assets/images/ft10.png">
            </li>
            <li data-repeat-rendered="onRepeatRendered" v-show="(option === '输入框'|| option==='all')"  data-snipid="5" data-snipcat=",输入框," class="ui-draggable">
              <img alt="" src="../assets/images/ft3.png">
            </li>
            <li data-repeat-rendered="onRepeatRendered" v-show="(option === '输入框'|| option==='all')" data-snipid="6" data-snipcat=",输入框," class="ui-draggable">
              <img alt="" src="../assets/images/ft4.png">
            </li>
            <li data-repeat-rendered="onRepeatRendered" v-show="(option === '输入框'|| option==='all')" data-snipid="7" data-snipcat=",输入框," class="ui-draggable">
              <img alt="" src="../assets/images/ft7.png">
            </li>
            <li data-repeat-rendered="onRepeatRendered" v-show="(option === '输入框'|| option==='all')" data-snipid="8" data-snipcat=",列表选择," class="ui-draggable">
              <img alt="" src="../assets/images/fs1.png">
            </li>

            <li data-repeat-rendered="onRepeatRendered" v-show="(option === '列表选择'|| option==='all')" data-snipid="9" data-snipcat=",列表选择," class="ui-draggable">
              <img alt="" src="../assets/images/fs3.png">
            </li>
            <li data-repeat-rendered="onRepeatRendered" v-show="(option === '列表选择'|| option==='all')" data-snipid="10" data-snipcat=",列表选择," class="ui-draggable">
              <img alt="" src="../assets/images/fs2.png">
            </li>

            <li data-repeat-rendered="onRepeatRendered" v-show="(option  === '单选、多选'|| option==='all' )" data-snipid="11" data-snipcat=",单选、多选," class="ui-draggable">
              <img alt="" src="../assets/images/fc1.png">
            </li>
            <li data-repeat-rendered="onRepeatRendered" v-show="(option  === '单选、多选'|| option==='all' )" data-snipid="12" data-snipcat=",单选、多选," class="ui-draggable">
              <img alt="" src="../assets/images/fc2.png">
            </li>
            <li data-repeat-rendered="onRepeatRendered" v-show="(option  === '单选、多选'|| option==='all')" data-snipid="13" data-snipcat=",单选、多选," class="ui-draggable">
              <img alt="" src="../assets/images/fc3.png">
            </li>
            <li data-repeat-rendered="onRepeatRendered" v-show="(option  === '单选、多选'|| option==='all' )" data-snipid="14" data-snipcat=",单选、多选," class="ui-draggable">
              <img alt="" src="../assets/images/fc4.png">
            </li>
            <li data-repeat-rendered="onRepeatRendered" v-show="(option  === '单选、多选'|| option==='all')" data-snipid="15" data-snipcat=",单选、多选," class="ui-draggable">
              <img alt="" src="../assets/images/fc5.png">
            </li>

            <li data-repeat-rendered="onRepeatRendered" v-show="(option === '文件、按钮'|| option==='all')" data-snipid="16" data-snipcat=",文件、按钮," class="ui-draggable">
              <img alt="" src="../assets/images/ff1.png">
            </li>
            <li data-repeat-rendered="onRepeatRendered" v-show="(option === '文件、按钮'|| option==='all')" data-snipid="17" data-snipcat=",文件、按钮," class="ui-draggable">
              <img alt="" src="../assets/images/fb1.png">
            </li>
          </ul>
        </div>
      </dd>
    </dl>
  </div>
</template>

<script>
  export default {
    name: "left",
    data() {
      return {
        option:'all',
        options:{
          leftSelected: 'all',
          all: 'all',
          input: '输入框',
          list: '列表选择',
          radio_check: '单选、多选',
          file_button: '文件、按钮',
        },
        isPullAway:false,
        chooseAllOption:true
      }
    },
    mounted(){},
    computed:{},
    methods:{
      // 在下拉框选择
      changeSelect(option) {
        this.options.leftSelected = option;
        if(this.options.leftSelected === this.options.all){
          this.chooseAllOption = true;
        }else{
          this.chooseAllOption = false;
        }
      },
      // 收起左边
      pullAwayLeft(){
        this.isPullAway = !this.isPullAway;
        // this.$parent.extendLeftOrRight(); 调用父组件的方法

      },
      select(){

      }
    }
  }
</script>

<style lang="less" scoped>
  .isPullAwayClass{
    left: -242px;
  }

</style>
